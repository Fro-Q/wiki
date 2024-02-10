---
tags:
  - concept
topic:
---

# [title:: ]

```dataviewjs
// query current page
var thisPage = dv.current()

function getTitle(p) {
  if (p.title) {
    return `[${p.title}](${p.file.name})`
  }
  return `[[${p.file.name}]]`
}

// get all notes that link to this page
function getInlinkNotes(thisLink) {
  let pages = dv.pages(`"notes"`)
    .filter(p => p.file.outlinks.includes(thisLink))

  return pages
}

function generateCheckbox(page) {
	if (page.finished) {
		return dv.el('input', '', {attr: { type: "checkbox", disabled: "true", checked: true } })
	}
	return dv.el('input', '', {attr: {type: "checkbox", disabled: "true"}})
}


dv.table(["Note Related", "Topics Related", "Finished"],
  getInlinkNotes(thisPage.file.link).map(p => [
    getTitle(p),
    p.file.outlinks,
    generateCheckbox(p),
  ])
)
```
