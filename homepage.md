---
aliases: []
tags:
  - doc
created: 2024-01-13 07:07
last_modified: 2025-01-09 05:32
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
		`${p.file.ctime.year}-${String(p.file.ctime.month).padStart(2, 0)}-${String(p.file.ctime.day).padStart(2, 0)} ${String(p.file.ctime.hour).padStart(2, 0)}:${String(p.file.ctime.minute).padStart(2, 0)}`,
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
		`${p.file.ctime.year}-${String(p.file.ctime.month).padStart(2, 0)}-${String(p.file.ctime.day).padStart(2, 0)} ${String(p.file.ctime.hour).padStart(2, 0)}:${String(p.file.ctime.minute).padStart(2, 0)}`,
		getTopic(p).join("<br>"),
		generateStatus(p),
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
		.map(p => generateStatus(p) + "｜" +  getTitle(p))
}

function getTitle(p) {
	if (p.title) {
		return `[${p.title}](${p.file.name})`
	}
	return `[[${p.file.name}]]`
}

function getFile(pl) {
  // regex to get the file name (`file_name in `[[path/to/file_name|title]]`)
  const file_path = pl.toString().split("|")[0].replace("[[", "")
  // strip suffix .md from file_path
  const file_name = file_path.replace(/.md/g, '')
  const file = dv.page(`${file_path}`)
  if (!file) {
    return `[${file_name}](concepts/${file_path}) ❌`
  }
  return file.title ? `[${file.title}](${file_path})` : `[[${file.file.name}]]`

}

function getAlias(p) {
  return p.aliases ? `${p.aliases}` : ""
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

dv.table(["Concept", "Notes"],
	concepts.map(c => [
		getFile(c),
		getPages(c).join("<br>"),
	])
)
```
