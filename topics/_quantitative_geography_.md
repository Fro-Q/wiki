---
tags:
  - topic
---

# [title:: ]

```dataviewjs
var pages = dv.pages(`"concepts"`)
  .filter(p => p.file.outlinks.includes(dv.current().file.link))
  .sort(p => -p.file.ctime);

function getTitle(p) {
  if (p.title) {
    return `[[${p.file.name}]]: ${p.title}`
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
