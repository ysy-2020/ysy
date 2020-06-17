# 搭建vuepress

## 环境搭配

- 需要node环境和npm支持，这里不做讲解
- 如果不会安装npm请转到：[安装指引](https://www.npmjs.cn/getting-started/installing-node/)

## vuePress概述

- Vue 驱动的静态网站生成器
- 基于markdown语法生成网页
- 可自定义和扩展样式
- 可以发布至github
- 详情请看官网[vuepress](https://vuepress.vuejs.org/zh/)

## 安装初始化

全局安装

```bash
 npm install -g vuepress
```

创建个文件夹作为目录

```bash
mkdir vuepress-blog
```

项目初始化

```bash
cd vuepress-blog
```

```bash
npm init -y
```

初始化后会生成一个`package.json`文件

在当前目录中创建一个`docs`目录

```bash
mkdir docs
# 主要存放博客书籍内容
```

首页内容书写(默认主题提供)

```text
---
home: true
heroImage: /logo.jpg
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

## 核心配置

在`docs`目录下创建`.vuepress`目录

```bash
cd docs
mkdir .vuepress
# 主要存放配置
```

新建总配置文件`config.js`

```js
module.exports = {
    title: '知码学院',
    description: '君哥带你上王者',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [{
            text: '懵逼指南', link: '/guide/'
        }],
        sidebar: {'/guide/':[
            {
                  title:'新手指南',
                  collapsable: true,
                  children:[
                    '/guide/notes/one',
                  ]
                },
                {
                  title:'知码学院',
                  collapsable: true,
                  children:[
                    '/guide/notes/two',
                  ]
                }
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
```

运行

```text
vuepress dev docs
```