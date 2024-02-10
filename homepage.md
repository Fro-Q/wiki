## Diary

```dataviewjs
var pages = dv.pages(`"diary"`)
	.sort(p => -p.file.ctime);

function getTitle(p) {
	if (p.title) {
		return `[[${p.file.name}]]: ${p.title}`
	}
	return `[[${p.file.name}]]`
}

dv.table(["Title", "Mentioned"],
	pages.map(p => [
		getTitle(p),
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
		return `[[${p.file.name}]]: ${p.title}`
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

dv.table(["Title", "Topics Related", "Dealed"],
	pages.map(p => [
		getTitle(p),
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
// var pages = dv.pages(`"notes"`)
// 	.flatMap(p => p.file.outlinks)

// function getPages(t) {
// 	return dv.pages(`"notes"`)
// 		.filter(p => p.file.outlinks.includes(t))
// 		.map(p => getTitle(p))
// }

// function getTitle(p) {
// 	if (p.title) {
// 		return `[[${p.file.name}]]: ${p.title}`
// 	}
// 	return `[[${p.file.name}]]`
// }

// dv.table(["Topic", "Pages"],
// 	pages.map(t => [
// 		t,
// 		getPages(t),
// 	])
// )

// query for all concepts that appears in the notes. The way concepts are linked to notes is by the outlinks of the note page.
// Deal with the case that a concept is linked to multiple notes. A concept only appears once in the table.
var pages = dv.pages(`"notes"`)
	.flatMap(p => p.file.outlinks)
	.filter((value, index, self) => self.indexOf(value) === index)

function getPages(t) {
	return dv.pages(`"notes"`)
		.filter(p => p.file.outlinks.includes(t))
		.map(p => getTitle(p))
}

function getTitle(p) {
	if (p.title) {
		return `[[${p.file.name}]]: ${p.title}`
	}
	return `[[${p.file.name}]]`
}

dv.table(["Concept", "Pages"],
	pages.map(t => [
		t,
		getPages(t),
	])
)

```
