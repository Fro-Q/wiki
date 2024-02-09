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
		p.file.outlinks,
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
	if (p.dealed == "true") {
		return dv.el('input', 'ok', {attr: { alt: "Nice!" } })
	}
	return dv.el('input', 'ok', {attr: {type: "checkbox", disabled: "true"}})
}

dv.table(["Title", "Topics Related", "Dealed"],
	pages.map(p => [
		getTitle(p),
		getTopic(p),
		dv.el('input', '', {attr: {type: "checkbox"}})
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
var topics = dv.pages(`"db"`)
	.flatMap(p => p.topic)
	.filter((t, i, arr) => arr.indexOf(t) === i)

function getPages(t) {
	return dv.pages(`"db"`)
		.filter(p => p.topic.includes(t))
		.map(p => getTitle(p))
}

function getTitle(p) {
	if (p.title) {
		return `[[${p.file.name}]]: ${p.title}`
	}
	return `[[${p.file.name}]]`
}

dv.table(["Topic", "Pages"],
	topics.map(t => [
		`[[${t}]]`,
		getPages(t),
	])
)
```
