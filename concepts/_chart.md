---
tags:
  - concept
---

# [title:: Chart]

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

function getFile(pl) {
	// regex to get the file name (`file_name in `[[path/to/file_name|title]]`)
	const file_path = pl.toString().match(/\[\[(.*?)\|.*?\]\]/)[1]
	const file = dv.page(`${file_path}`)
	if (!file) {
    	return `${file_path} ❌`
	}
	return `[getTitle(file)](${file_path})`
}

dv.table(["Notes Related", "Concepts Related"],
  getInlinkNotes(thisPage.file.link).map(n => [
    getTitle(n) + " | " + generateStatus(n),
    n.file.outlinks.map(l => dv.page(l) ? l : `${l.toString().match(/\[\[(.*?)\|.*?\]\]/)[1]} ❌`),
  ])
)
```

## Topics
