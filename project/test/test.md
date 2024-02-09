---
tags: ["project", "homepage"]
project: "test"
status: "working"
---

# Homepage for test

## Records

```dataview

```

## Docs

```dataview
table
dateformat(date, "DD") as date,
split(type, "_")[1] as type,
sum
from !#homepage and #doc 
where contains(file.folder, project)
and split(file.folder, "/")[-1] = test
```

## Tasks

```dataview
task
from !#homepage and #tasks 
where contains(file.folder, project)
and split(file.folder, "/")[-1] = test
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
and split(file.folder, "/")[-1] = test
```
