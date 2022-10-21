---
sidebar_label: 粒子
sidebar_position: 2
---

# 粒子数据结构

我们期望用户每次定义粒子的时候，可以继承当前已有的数据结构。但注意：这并非强制性的。我们**很乐意用户将以下的设计仅仅当作参考的模板，对代码选择性地复制粘贴**，从而让用户灵活、解耦和清晰地设计自己的系统。

我们期望每个数据结构都只是一个粒子，而非粒子的集合(particle_set or particle_cloud)。这样用户能够自由地定义粒子集合。

**我们特意空出来Particle这个最基本的命名，目的是把它留给用户**。这样用户在定义自己的粒子数据结构的时候，可以采用最常见最符合人类直观的名称。

## 最基本的粒子数据 Particle_Base
粒子最基本的属性为位置和速度。

伪代码
```python
@dataclass
class Particle_Base():
  postion: vec3f
  velocity: vec3f
```
> vec3f代表一个三维float类型固定大小数组，在cpp中对应std::array<float,3>, 在taichi中为ti.Vector(float,3)。

 在有些方法中，粒子质量被统一设置为1。对于这些方法，粒子质量也是冗余的。因此我们才仅仅放入位置和速度这两种最基本的数据。


## 需要邻域搜索的粒子Particle_Nei
对于需要邻域搜索的粒子(例如SPH和PBF等纯粒子法)，应该知晓其粒子的邻居是谁
```python
@dataclass
class Particle_Nei(Particle_Base):
  neighbors: int_field
```

> int_field代表一个一维数组，其元素均为int类型的。在cpp中对应std::vector<int>，在taichi中对应ti.field(int,xxx)
  
不需要存储numNeighbors，因为neighbors数组应该自己就知晓自己的大小。neighbors数组应当在邻域搜索时候动态增长。

## 拥有寿命的粒子 Particle_Age
对于需要动态注入或者灭亡的粒子，需要拥有寿命和年龄属性
```python
@dataclass
class Particle_Age(Particle_Base):
  age: float
  life_span: float
  alive: bool
```
age 为当前年龄，以s为单位。从粒子注入场景开始计算。life_span为粒子寿命，在粒子产生的时候就赋予，为固定值。
alive为是否存活。
  
当age>=life_span的时候，粒子自动灭亡。为保证计算速度，我们可以采用垃圾回收式的收回内存。粒子被标记为alive:false，表示粒子已经死亡。但尚未收回内存。
等经过一定时间步后，例如500步，再对已经死亡的粒子进行统一回收。
  
  
## 拥有其他物理属性的粒子示例 Particle_Physical
  许多粒子包含其他的物理属性。以下代码**仅供参考，用户可以选择性地复制粘贴**。
```python
@dataclass
class Particle_Physical(Particle_Base):
  mass: float
  invMass: float
  radius: float
  acceleration: float
  density: float
  stress: matrix3x3 or matrix3x3_sym
  strain: matrix3x3 or matrix3x3_sym
  prevPos: vec3f
  pos0: vec3f
  neighbors0: int_field
  isFixed: bool
  isBoundary: bool
``` 
解释：
  - mass质量
  - invMass 质量倒数（在PBD中常用）
  - radius 半径
  - acceleration 加速度
  - density 密度
  - stress 应力。在需要计算弹性力的模型中有用（例如MPM等）。matrix3x3意味着3x3的float类型的矩阵，matrix3x3_sym代表对称矩阵。由于应力和应变通常是对称的，因此对称形式存储矩阵是更佳的。因为它能节约内存，仅需要存储6个分量，而非9个。但是矩阵乘法与矩阵向量乘法需要单独定义。但因为只需要计算6各分量，乘法效率也会更高。
  - strain 应变。在需要计算弹性力的模型中有用。
  - prevPos 前一个时刻的位置。在PBD中常用。
  - pos0: 初始时刻的位置。对于计算弹性力时、或者对于PBD有用。在有些文献中也叫rest pos 或者叫initial pos
  - neighbors0: 初始时刻的邻域。同上。也可以叫initial neighbors。
  - isFixed： 是否固定，固体模拟时常用。
  - isBoundary: 是否为边界粒子。在SPH等纯粒子法中，固体边界需要单独处理，因此通常在固体表面单独采样，让他们融入到粒子系统当中去。
 
  
  
  ## 粒子集的示例 Particles_Set
TODO
