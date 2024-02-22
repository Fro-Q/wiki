---
tags:
  - note
date: 2024-02-22
time: 21:40
status: draft
---

# [title:: Central Tendency | Measure]

最常见的 [central_tendency](central_tendency) 的指标是 [arithmetic_mean](arithmetic_mean)、[median](median) 和 [mode](mode)。

## [arithmetic_mean](arithmetic_mean)

所有测量值的总数除以数据集中的观测值数量：  
$$\overline{x} = {1 \over n} \sum_{i=1}^{n} x_{i}$$  

## [median](median.md)

将数据集上半部分与下半部分分开的中间值：  
$$m_e=\begin{cases} {1\over 2}(x_{n\over 2}+x_{{n\over 2}+1}) &n=2k,k\in Z^+ \\ x_{n\over 2}& n=2k-1,k\in Z^+ \end{cases}$$  

## [mode](mode.md)

数据集中最常见的值。

## [geometric_mean](geometric_mean)

n 个测量值的乘积的 n 次方根：  
$$\overline{x} = {\left(\prod _{i=1}^{n}x_{i}\right)^{\frac {1}{n}}={\sqrt[{n}]{x_{1}x_{2}\cdots x_{n}}}}$$  

## [weighted_arithmetic_mean](weighted_arithmetic_mean)

数据集中各数值与其权重的乘积的和除以各数值权重的和：  
$$\overline{x} = {\frac {\sum_ \limits {i=1}^{n} w_{i}x_{i}}{\sum_ \limits {i=1}^{n} w_{i}}}$$  

## [truncated_mean](truncated_mean)

也称 trimmed mean，即丢弃样本的高端或低端的给定部分（通常等量）后，剩下数据的 mean。

特别地，
