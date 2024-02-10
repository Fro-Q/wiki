---
tags:
  - note
finished: false
---

# [title:: Create Thiessen Polygon]

创建 [@Thiessen Polygon](@thiessenpolygon.md)：
- 从左到右、从上到下扫描所有点；
- 所有点被三角剖分成一个 TIN，满足 Delaunay 准则；
- 构造每个三角形边的垂直平分线，形成 Thiessen 多边形的边，它们的交点成为多边形顶点；
- 构造 Thiessen Polygon。
