---
tags:
  - concept
---

# [title:: Geographical Data]

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

function generateStatus(p) {
	if (p.status == "finished") {
		return "✅"
	} else if (p.status == "draft") {
    	return "✏️"
	} else if (p.status == "archived") {
        return "📂"
	}
}


dv.table(["Notes Related", "Concepts Related"],
  getInlinkNotes(thisPage.file.link).map(n => [
    getTitle(n) + " | " + generateStatus(n),
    n.file.outlinks.map(l => dv.page(l) ? l : `${l.toString().match(/\[\[(.*?)\|.*?\]\]/)[1]} ❌`),
  ])
)
```

## Topics
