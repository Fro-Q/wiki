---
tags:
  - concept
---

# [title:: Delaunay Tin]

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
	return file.title ? `[${file.title}](${file_path})` : `[[${p.file.name}]]`
}

dv.table(["Notes Related", "Concepts Mentioned"],
  getInlinkNotes(thisPage.file.link).map(n => [
    getTitle(n) + " | " + generateStatus(n),
    n.file.outlinks.map(l => getFile(l)),
  ])
)
```

## Topics

- [_spatial_analysis_](_spatial_analysis_.md)
- [_gis_](_gis_.md)