---
tags:
  - concept
topic:
  - GIS
  - Spatial Analysis
links:
  - "[[@gis]]"
  - "[[@spatialanalysis]]"
---

# [title:: Thiessen Polygon]

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

  return allNotes
}

function generateCheckbox(p) {
	if (p.finished) {
		return dv.el('input', 'ok', {attr: { type: "checkbox", disabled: "true", checked: true } })
	}
	return dv.el('input', 'ok', {attr: {type: "checkbox", disabled: "true"}})
}


dv.table(["Notes Related", "Concepts Related", "Finished"],
  getInlinkNotes(thisPage.file.link).map(n => [
    getTitle(n),
    n.file.outlinks,
    generateCheckbox(n),
  ])
)
```
