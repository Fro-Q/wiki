---
tag:
  - note
topic:
  - GIS
  - Spatial Analysis
finished: false
---

```dataviewjs
var page = dv.current()

dv.table(["Title", "Topics Related", "Dealed"],
  [
    [
      page.title,
      page.file.inlinks,
      page.dealed?dv.el('input', 'ok', {attr: { type: "checkbox", disabled: "true", checked: true } }):dv.el('input', 'ok', {attr: {type: "checkbox", disabled: "true"}}),
    ]
  ]
)
```
