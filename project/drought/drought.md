---
tags: ["project", "homepage"]
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

```dataview
table
dateformat(date, "DD") as date,
split(type, "_")[1] as type,
sum
from !#homepage and #doc
where contains(file.folder, project)
and split(file.folder, "/")[-1] = drought
```

## Tasks

```dataview
task
from !#homepage and #tasks
where contains(file.folder, project)
and split(file.folder, "/")[-1] = drought
group by file.name
```

## Meetings

```dataview
table
dateformat(date, "DD") as date,
split(type, "_")[1] as type,
sum
from !#homepage and #meeting
where contains(file.folder, project)
and split(file.folder, "/")[-1] = drought
```
