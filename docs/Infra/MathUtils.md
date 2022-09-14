---
sidebar_label: '数学工具MathUtils'
sidebar_position: 1
---
# MathUtils
针对于线性方程组求解的数学库: MathUtils

我们的主要目的是做稀疏线性系统的求解。目前taichi的sparse matrix功能还不够完善。

我们可以参考的开源库有：
1. Eigen 一个非常流行的C++数值库，并且具有python binding。我们重点关注其稀疏线性系统的部分。
2. C++的线性系统求解库：https://www.tau.ac.il/~stoledo/taucs/