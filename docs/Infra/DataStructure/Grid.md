---
sidebar_label: 网格
sidebar_position: 1
---

网格种类：整数网格、实数网格、Vec3网格、4维网格（用于LBM）、MAC网格

---

## 网格基类：GridBase
作为其他类型网格的基类
### 数据成员
+ size_x：x维度的长度  
+ size_y：y维度的长度  
+ size_z：z维度的长度 
+ data: ti.field，具体数据类型由子类决定
### 方法
+ ```get_index(self, i: ti.i32, j: ti.i32, k: ti.i32)```  
  根据下标获得索引

+ ```check_ijk(self, i: ti.i32, j: ti.i32, k: ti.i32)```  
  检查下标是否在范围内

+ ```set_const(self, val: ti.template())```  
  把网格中所有的值设为一个常数

+ ```add_const(self, val: ti.template())```  
  将网格场加一个常数

---

## IntGrid
整数网格场

---

## FlagGrid
继承自IntGrid
### 方法
+ ```is_fluid(self, i: ti.i32, j: ti.i32, k: ti.i32) -> bool```  
  判断一个网格是否为流体类型

+ ```is_empty(self, i: ti.i32, j: ti.i32, k: ti.i32) -> bool```  
  判断一个网格是否为空

+ ```is_obstacle(self, i: ti.i32, j: ti.i32, k: ti.i32) -> bool```  
  判断一个网格是否为障碍物

+ ```is_outflow(self, i: ti.i32, j: ti.i32, k: ti.i32) -> bool```  
  判断一个网格是否为outflow

+ ```is_inflow(self, i: ti.i32, j: ti.i32, k: ti.i32) -> bool```  
  判断一个网格是否为inflow

+ ```is_interface(self, i: ti.i32, j: ti.i32, k: ti.i32) -> bool```  
  判断一个网格是否为界面（用于LBM）

+ ```is_open(self, i: ti.i32, j: ti.i32, k: ti.i32) -> bool```  
  判断一个网格是否开放

+ ```is_free_slip(self, i: ti.i32, j: ti.i32, k: ti.i32) -> bool```  
  判断一个网格是否为FreeSlip（用于LBM）

+ ```is_no_slip(self, i: ti.i32, j: ti.i32, k: ti.i32) -> bool```  
  判断一个网格是否为NoSlip（用于LBM）

## RealGrid
实数网格

---

## Grid4D
4维实数网格，用于LBM。

---

## Vec3Grid
### 方法
+ ```join(self, b: ti.template())```
  将2个场模长的最小的向量赋值给`self.data`

---

## MACGrid
### 数据成员
+ x  
  x维度的数据
+ y  
  y维度的数据
+ z  
  z维度的数据
### 方法
+ ```get_mac_x(self, i: ti.i32, j: ti.i32, k: ti.i32)```  
  获取x场i，j，k位置的三维向量值

+ ```get_mac_y(self, i: ti.i32, j: ti.i32, k: ti.i32)```  
  获取y场i，j，k位置的三维向量值

+ ```get_mac_z(self, i: ti.i32, j: ti.i32, k: ti.i32)```  
  获取z场i，j，k位置的三维向量值

+ ```get_center_val(self, i: ti.i32, j: ti.i32, k: ti.i32)```  
  获得i，j，k位置网格中心的三维向量值

---

## example
+ 创建一个场
  ```
  grid_int = IntGrid(3, 4, 5)
  grid_real = RealGrid(2, 2, 9)
  grid_vec3 = Vec3Grid(2, 3, 4)
  grid_mac = MACGrid(4, 5, 6)
  ```
+ 读取一个场的数据
  ```
  # 普通网格
  grid_int.data[2, 1, 1]
  # MAC网格
  grid_mac.x[1, 1, 1]
  grid_mac.y[1, 1, 1]
  grid_mac.z[1, 1, 1]
  ```