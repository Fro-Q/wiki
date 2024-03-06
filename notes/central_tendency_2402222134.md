---
tags:
  - note
date: 2024-02-22
time: 21:40
status: finished
---

# [title:: Central Tendency | Measure]

最常见的 [central_tendency](central_tendency) 的指标是 [arithmetic_mean](arithmetic_mean)、[median](median) 和 [mode](mode)。

## [arithmetic_mean](concepts/arithmetic_mean)（算术平均值）

所有测量值的总数除以数据集中的观测值数量。

$$\bar{x} = {1 \over n} \left(\sum_{i=1}^{n} x_{i}\right)$$

## [median](median.md)（中位数）

将数据集上半部分与下半部分分开的中间值。

$$med(X) = Q_{1 \over 2}(X) = \begin{cases} {1\over 2}(x_{n\over 2}+x_{{n\over 2}+1}) &n=2k,k\in Z^+ \\ x_{n\over 2}& n=2k-1,k\in Z^+ \end{cases}$$

## [mode](mode.md)（众数）

数据集中频数最大的值，可能不止一个。

## [geometric_mean](geometric_mean)（几何平均值）

n 个测量值的乘积的 n 次方根。

$$\bar{x} = {\left(\prod _{i=1}^{n}x_{i}\right)^{\frac {1}{n}}}$$

## [harmonic_mean](harmonic_mean)（调和平均值）

数据值的倒数的 [arithmetic_mean](arithmetic_mean.md) 的倒数。

$$H(X) = {\frac {n}{\sum \limits_{i=1}^{n}{\frac{1}{x_{I}}}}}$$

## [weighted_arithmetic_mean](weighted_arithmetic_mean)（加权算术平均值）

数据集中各数值与其权重的乘积的和除以各数值权重的和。

$$\bar{x} = {\frac {\sum_ \limits {i=1}^{n} w_{i}x_{i}}{\sum_ \limits {i=1}^{n} w_{i}}}$$

## [truncated_mean](truncated_mean)（截尾平均值）

也称 trimmed mean，即丢弃样本的高端或低端的给定部分（通常等量）后，剩下数据的 mean。

特别地，当丢弃比例为 25% 时，称其为 [interquartile_mean](interquartile_mean)。

## [interquartile_mean](interquartile_mean.md)（四分位数平均值）

也称 IQM 或 midmean，即仅使用第一个和第三个四分位数之间的数据计算的 mean。

$$x_{IQM} = {\frac {2}{n}}\sum_{i={\frac {n}{4}}+1}^{\frac {3n}{4}}x_i$$

## [midrange](midrange)（中程数）

数据集的最大值和最小值的 [arithmetic_mean](arithmetic_mean.md)。

$$M={\frac {\max (x)+\min (x)}{2}}$$

## [midhinge](midhinge)（中轴数）

第一个和第三个四分位数的 [arithmetic_mean](arithmetic_mean.md)。

$$MH(X) = \overline {Q_{{1 \over 4},{3 \over 4}}(X)} = {\frac {Q_{1 \over 4}(X) + Q_{3 \over 4}(X)}{2}}$$

## [trimean](trimean)（三均值、图基三均值）

[median](median.md) 和两个 [quartile](quartile) 的 [weighted_arithmetic_mean](weighted_arithmetic_mean.md)。

$$TM(X) = {\frac {Q_{1 \over 4}(X) + 2 med(X) + Q_{3 \over 4}(X)}{4}} = {\frac {1}{2}\left ({med(X) + {\frac {1}{2}}MH(X)}\right)}$$
