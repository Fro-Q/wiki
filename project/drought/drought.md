---
tags:
  - "project"
  - "homepage"
project: "drought"
status: "working"
---

## Records

```dataviewjs
var pages = dv.pages(`"project/${dv.current().file.name}" and #record`)

function getTitle(p) {
	if (p.title) {
		return `[${p.title}](${p.file.name})`
	}
	return `[[${p.file.name}]]`
}

dv.table(["Title", "Date"],
	pages.map(p => [
		getTitle(p),
		`${p.file.ctime.year}-${p.file.ctime.month}-${p.file.ctime.day} ${p.file.ctime.hour}:${p.file.ctime.minute}`,
	])
)
```

## Docs

```dataviewjs
var pages = dv.pages(`"project/${dv.current().file.name}" and #doc`)

function getTitle(p) {
	if (p.title) {
		return `[${p.title}](${p.file.name})`
	}
	return `[[${p.file.name}]]`
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

dv.table(["Title", "Date", "Status"],
	pages.map(p => [
		getTitle(p),
		`${p.file.ctime.year}-${p.file.ctime.month}-${p.file.ctime.day} ${p.file.ctime.hour}:${p.file.ctime.minute}`,
		generateStatus(p),
	])
)
```

## Tasks

```dataviewjs
var pages = dv.pages(`"project/${dv.current().file.name}" and #tasks`)

function getTitle(p) {
	if (p.title) {
		return `[${p.title}](${p.file.name})`
	}
	return `[[${p.file.name}]]`
}

dv.table(["Title", "Date"],
	pages.map(p => [
		getTitle(p),
		`${p.file.ctime.year}-${p.file.ctime.month}-${p.file.ctime.day} ${p.file.ctime.hour}:${p.file.ctime.minute}`,
	])
)
```

## Meetings

```dataviewjs
var pages = dv.pages(`"project/${dv.current().file.name}" and #meeting`)

function getTitle(p) {
	if (p.title) {
		return `[${p.title}](${p.file.name})`
	}
	return `[[${p.file.name}]]`
}

dv.table(["Title", "Date"],
	pages.map(p => [
		getTitle(p),
		`${p.file.ctime.year}-${p.file.ctime.month}-${p.file.ctime.day} ${p.file.ctime.hour}:${p.file.ctime.minute}`,
	])
)
```
