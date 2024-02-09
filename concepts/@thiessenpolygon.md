---
tag:
  - note
topic:
  - GIS
  - Spatial Analysis
finished: false
---

```dataviewjs
var thisPage = dv.current()

function getTitle(p) {
  if (p.title) {
    return `[${p.title}](${p.file.name})`
  }
  return `[[${p.file.name}]]`
}

function getInlinkNotes(thisLink) {
  let allNotes = dv.pages(`"notes"`)
    .filter(n => n.file.outlinks.includes(thisLink))

  return allNotes.map(n => getTitle(n))
}

dv.table(["Note Related", "Topics Related", "Dealed"],
  [
    [
      getInlinkNotes(thisPage.file.link),
      thisPage.topic,
      thisPage.finished
    ]
  ]
)
```
