---
sidebar_label: '如何创建文档'
sidebar_position: 5
---

# 创建文档的用法
## 方法1：通过“编辑此页”（较为简单，推荐）
1. 点击页面下方的“编辑此页”。这会自动跳到github相应网页
2. 在github上点击edit/add file。

更改之后，vercel会自动编译并部署。需要等2-3分钟（此时页面可能访问不了）。然后就能看到更新的网页。


## 方法2：在本地git push

想要创建一个新的文档页，非常简单，只需要三步。

1. 把这个moi-doc这个repo 拉下来
2. 新增文档的话，只要在docs目录下新增一个markdown文件即可。新增目录的话，只需要在docs下新建文件夹并且增加\_category\_.json文件。
3. push到moi-doc的github repo， vercel会自动进行部署，所作的修改就会更新到网页上。


请看这个视频讲解:

[使用docusarus快速创建个人网站、文档或博客](https://www.bilibili.com/video/BV1rW4y1i7zC?share_source=copy_web&vd_source=ad002c814962fc699cf9d167be8f2bb4)

