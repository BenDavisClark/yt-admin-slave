# 子应用创建向导

子应用一般指项目的一个模块。

！！！

`下面 xxx，都是指子应用的名字。`

！！！

## 一、创建项目

把这个项目复制一遍，项目名字改成 slave-xxx


## 二、注册项目

打开子应用的 umirc.ts

在第 8 行的地方

```javascript
qiankun: {
  slave: {}
}
```

打开子应用的 .env

改一个你喜欢的端口

## 三、挂载项目

打开主应用的 umirc.ts

```javascript
export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'slave', // 这里换成 xxx
          entry: '//localhost:5000' // 记得换成刚刚设置的端口
        }
      ]
    }
  },
  routes: [
    {
      path: '/',
      component: '@/layouts',
      routes: [
        // ...
        {
          path: '/slave', // 这里换成 xxx
          microApp: 'slave' // 这里换成 xxx
        }
      ]
    }
  ]
})
```

保存完之后记得重启项目。

## 补充菜单

在主应用的 layouts/menu.ts，填写下子应用有哪些菜单，用来做面包屑导航的。

## 父子数据通信

尚未完成

## 如何使用 amiya 组件

amiya 类似与之前的 yt-admin component 下面的东西，目前尚未有文档，现在可以参考主应用的 SystemConfig。

amiya 会持续更新，记得关注。
