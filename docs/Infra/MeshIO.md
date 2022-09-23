---
sidebar_label: 网格存读MeshIO
sidebar_position: 2
---
读取和保存常见网格的功能: MeshIO

我们参考并使用了meshio这个开源库：[meshio](https://github.com/nschloe/meshio)

## OBJ格式
目前已经实现了OBJ格式的读取和保存

### example
使用示例请看 src\Infra\MeshIO\test_obj.py

请先cd到这个文件所在的目录，然后用
``` python
python test_obj.py
```
你将会看到输出一个名为test_output.obj的文件，
它就是我们读入Dragon_50k.obj之后又写出来的！
"""

### API
读取OBJ网格
points, cells = read_obj("Dragon_50k.obj")

保存OBJ网格
write_obj(points,cells,"test_output.obj")

其中point代表点坐标，而cells代表点的连接关系
