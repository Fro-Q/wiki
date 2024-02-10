---
tags:
  - topic
---

# [title:: ]

```dataviewjs
// Get all pages in the "concepts" folder and have "topic" equal to this page's title
var pages = dv.pages(`"concepts"`)
  .filter(p => p.topic.includes(dv.current().title))
  .sort(p => -p.file.ctime);

function getTitle(p) {
	if (p.title) {
		return `[${p.title}](${p.file.name})`
	}
	return `[[${p.file.name}]]`
}

dv.table(["Concepts Related", "Notes Related"],
  pages.map(p => [
    getTitle(p),
    p.file.inlinks,
  ])
)
```