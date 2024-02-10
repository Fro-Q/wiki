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

function generateCheckbox(p) {
	if (p.dealed) {
		return dv.el('input', 'ok', {attr: { type: "checkbox", disabled: "true", checked: true } })
	}
	return dv.el('input', 'ok', {attr: {type: "checkbox", disabled: "true"}})
}

dv.table(["Title", "Time", "Topics Related", "Dealed"],
	pages.map(p => [
		getTitle(p),
		`${p.file.ctime.year}-${p.file.ctime.month}-${p.file.ctime.day} ${p.file.ctime.hour}:${p.file.ctime.minute}`,
		getTopic(p),
		generateCheckbox(p),
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

function getPages(t) {
	return dv.pages(`"notes"`)
		.filter(p => p.file.outlinks.includes(t))
		.map(p => getTitle(p))
}

function getTitle(p) {
	if (p.title) {
		return `[${p.title}](${p.file.name})`
	}
	return `[[${p.file.name}]]`
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

dv.table(["Concept", "Pages"],
	concepts.map(t => [
		t,
		getPages(t),
	])
)
```

