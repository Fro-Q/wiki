---
tags:
  - homepage
---

## Diary

```dataviewjs
var pages = dv.pages(`"diary"`)
	.sort(p => -p.file.ctime);

function getTitle(p) {
	if (p.title) {
		return `[${p.title}](${p.file.name})`
	}
	return `[[${p.file.name}]]`
}

dv.table(["Title", "Time", "Mentioned"],
	pages.map(p => [
		getTitle(p),
		`${p.file.ctime.year}-${p.file.ctime.month}-${p.file.ctime.day} ${p.file.ctime.hour}:${p.file.ctime.minute}`,
		p.file.outlinks[0]?p.file.outlinks:"None",
	])
)
```

## Timestamp Notes

```dataviewjs
var pages = dv.pages(`"timestamp"`)
	.sort(p => -p.file.ctime);

function getTitle(p) {
	if (p.title) {
		return `[${p.title}](${p.file.name})`
	}
	return `[[${p.file.name}]]`
}

function getTopic(p) {
	if (p.topic) {
		return p.topic.map(pt =>
			`${pt}: [[${pt}]]`,
		)
	}
	return ["None"]
}

function generateStatus(p) {
	if (p.status == "finished") {
		return "✅"
	} else if (p.status == "draft") {
    	return "✏️"
	} else if (p.status == "archived") {
        return "📂"
	}
}

dv.table(["Title", "Time", "Topics Related", "Dealed"],
	pages.map(p => [
		getTitle(p),
		`${p.file.ctime.year}-${p.file.ctime.month}-${p.file.ctime.day} ${p.file.ctime.hour}:${p.file.ctime.minute}`,
		getTopic(p),
		generateStatus(p),
	])
)
```

## Project

```dataviewjs
var pages = dv.pages(`"project" and #homepage`)

dv.table(["Name", "Status"],
	pages.map(p => [
		p.file.link,
		p.status,
	])
)
```

## DB

```dataviewjs
var concepts = dv.pages(`"notes"`)
	.flatMap(p => p.file.outlinks)

function getPages(c) {
	return dv.pages(`"notes"`)
		.filter(p => p.file.outlinks.includes(c))
		.map(p => getTitle(p) + " | " + generateStatus(p))
}

function getTitle(p) {
	if (p.title) {
		return `[${p.title}](${p.file.name})`
	}
	return `[[${p.file.name}]]`
}

function getFile(pl) {
	// regex to get the file name (`file_name in `[[path/to/file_name|title]]`)
	const file_path = pl.toString().match(/\[\[(.*?)\|.*?\]\]/)[1]
	const file = dv.page(`${file_path}`)
	if (!file) {
    	return `${file_path} ❌`
	}
	return `[${file.title}](${file_path})`
}

function generateStatus(p) {
	if (p.status == "finished") {
		return "✅"
	} else if (p.status == "draft") {
    	return "✏️"
	} else if (p.status == "archived") {
        return "📂"
	}
}

function unique(arr) {
	// remove duplicate concepts
	// new array to store the unique concepts
	var newArr = [];
	// store the appeared topics. if a topic has appeared, skip it.
	var appearedTopicsTiel = [];
	for (var i = 0; i < arr.length; i++) {
		if (appearedTopicsTiel.includes(arr[i].toString())) {
			continue;
		}
		appearedTopicsTiel.push(arr[i].toString());
		newArr.push(arr[i]);
	}
	return newArr;
}

concepts = unique(concepts)

dv.table(["Concept or Topic", "Pages"],
	concepts.map(c => [
		getFile(c),
		getPages(c),
	])
)
```
