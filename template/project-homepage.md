---
tags: 
  - homepage
project: "<% tp.file.folder() %>"
status: "working"
---

# Homepage for <% tp.file.folder() %>

## Records

```dataview
table
dateformat(date, "DD") as date,
sum
from !#homepage and #record  
where contains(file.folder, project)
and split(file.folder, "/")[-1] = <% tp.file.folder() %>
```

## Docs

```dataview
table
dateformat(date, "DD") as date,
split(type, "_")[1] as type,
sum
from !#homepage and #doc 
where contains(file.folder, project)
and split(file.folder, "/")[-1] = <% tp.file.folder() %>
```

## Tasks

```dataview
task
from !#homepage and #tasks 
where contains(file.folder, project)
and split(file.folder, "/")[-1] = <% tp.file.folder() %>
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
and split(file.folder, "/")[-1] = <% tp.file.folder() %>
```
