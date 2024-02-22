---
tags:
  - note
date: 2024-02-22
time: 21:40
status: finished
---

# [title:: Central Tendency | Measure]

最常见的 [central_tendency](central_tendency) 的指标是 [arithmetic_mean](arithmetic_mean)、[median](median) 和 [mode](mode)。

## [arithmetic_mean](arithmetic_mean)

所有测量值的总数除以数据集中的观测值数量：  
$$\overline{x} = {1 \over n} \sum_{i=1}^{n} x_{i}$$  

## [median](median.md)

将数据集上半部分与下半部分分开的中间值：  
$$med(X) = Q_{2}(X) = \begin{cases} {1\over 2}(x_{n\over 2}+x_{{n\over 2}+1}) &n=2k,k\in Z^+ \\ x_{n\over 2}& n=2k-1,k\in Z^+ \end{cases}$$  

## [mode](mode.md)

数据集中频数最大的值。

## [geometric_mean](geometric_mean)

n 个测量值的乘积的 n 次方根：  
$$\overline{x} = {\left(\prod _{i=1}^{n}x_{i}\right)^{\frac {1}{n}}={\sqrt[{n}]{x_{1}x_{2}\cdots x_{n}}}}$$  

## [harmonic_mean](harmonic_mean)

数据值的倒数的 [arithmetic_mean](arithmetic_mean.md) 的倒数：  
$$H(X) = {\frac {n}{\sum \limits_{i=1}^{n}{\frac{1}{x_{I}}}}}$$  

## [weighted_arithmetic_mean](weighted_arithmetic_mean)

数据集中各数值与其权重的乘积的和除以各数值权重的和：  
$$\overline{x} = {\frac {\sum_ \limits {i=1}^{n} w_{i}x_{i}}{\sum_ \limits {i=1}^{n} w_{i}}}$$  

## [truncated_mean](truncated_mean)

也称 trimmed mean，即丢弃样本的高端或低端的给定部分（通常等量）后，剩下数据的 mean。

特别地，当丢弃比例为 25% 时，称其为 [interquartile_mean](interquartile_mean)。

## [interquartile_mean](interquartile_mean.md)（IQM 或 midmean）

仅使用第一个和第三个四分位数之间的数据计算的 mean：  
$$x_{IQM} = {\frac {2}{n}}\sum_{i={\frac {n}{4}}+1}^{\frac {3n}{4}}x_i$$  

## [midrange](midrange)

数据集的最大值和最小值的 [arithmetic_mean](arithmetic_mean.md)：  
$$M={\frac {\max x+\min x}{2}}$$  

## [midhinge](midhinge)（MH）

第一个和第三个四分位数的 [arithmetic_mean](arithmetic_mean.md)：  
$$MH(X) = \overline {Q_{1,3}(X)} = {\frac {Q_{1}(X) + Q_{3}(X)}{2}}$$

## [trimean](trimean)（TM）

[median](median.md) 和两个 [quartile](quartile) 的 [weighted_arithmetic_mean](weighted_arithmetic_mean.md)：  
$$TM(X) = {\frac {Q_{1}(X) + 2Q_{2}(X) + Q_{3}(X)}{4}} = {\frac {1}{med(X) + MH(X)}}$$  
