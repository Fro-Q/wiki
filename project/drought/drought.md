---
tags: ["project", "homepage"]
project: "drought"
status: "working"
---

## Records

```dataviewjs
var pages = dv.pages(`"project/${dv.current().file.name}" and #record`)

dv.list([pages.file.link])
```

```data
var pages = dv.pages(`"project/drought" and -#homepage`)
	.sort(p => -p.file.ctime);

function processTitle(p) {
	let alias = p.file.name;
	if (p.aliases) {
		alias = p.aliases[0];
	}else if (p.alias) {
		alias = p.alias;
	}
	return `[[${p.file.name}|${alias}]]`
}

function linkedBy(p) {
	const allPages = dv.pages(`-#homepage`)
	let linked = []
	allPages.find(function(value, index, arr){
		if (value == p) {
			linked.append(value)
		}
	})
	return allPages
}

dv.table(["Name", "Linking", "LinkedBy"],
	pages.map(p => [
		processTitle(p),
		p.file.outlinks,
		p.file.inlinks,
		]
	)
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
