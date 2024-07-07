---
aliases: []
tags:
  - note
status: finished
created: 星期六, 二月 10日 2024, 12:37:48 凌晨
last_modified: 星期日, 七月 7日 2024, 7:51:59 早上
---

# [title:: Thiessen Polygon | Creation]

创建 [thiessen_polygon](thiessen_polygon.md)：

- 从左到右、从上到下扫描所有点；
- 所有点被三角剖分成一个 TIN，满足 Delaunay 准则，即为一个 [delaunay_tin](delaunay_tin.md)；
- 构造每个三角形边的垂直平分线，形成 Thiessen 多边形的边，它们的交点成为多边形顶点；
- 构造 Thiessen Polygon。
