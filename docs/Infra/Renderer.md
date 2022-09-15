---
sidebar_label: 渲染器Renderer
sidebar_position: 4
---
离线渲染(path tracer): Renderer



可参考如下资料：

1. taichi官方example里面的cornellbox和sdf
2. [ray-tracing in one weekend的taichi版本（github)](https://github.com/bsavery/ray-tracing-one-weekend-taichi)
3. [巴萨维里/搅拌机Python渲染器：使用太极包的搅拌机的蟒蛇GPU渲染器 (github.com)](https://github.com/bsavery/BlenderPythonRenderer)

当前的思路是：先使用taichi库或者python库实现水体渲染。刚体和流体可以分开渲染。因为在表面重建之后，流体的mesh就是单独的。

