---
title: vue实现按需加载的三种方式
date: 2017-04-24 11:01:29
tags: [vue]
---
## 1. vue异步组件技术
. vue-router配置路由， 使用vue的[异步组件](https://cn.vuejs.org/v2/guide/components.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)技术，可以实现按需加载
```javascript
    {
        path:"promisedemo",
        name:"PromiseDemo",
        component: resolve => require(['../components/PromiseDemo'], resolve)
    }
```
<!-- more -->
## 2. es提案的import
. 推荐使用这个方式（需要webpack> 2.4）
. webpack官方文档： [webpack中使用import()](https://doc.webpack-china.org/guides/code-splitting#-dynamic-imports-)
. vue官方文档： [路由懒加载（使用import()）](https://router.vuejs.org/zh-cn/advanced/lazy-loading.html)
vue-router配置路由， 代码如下：
```javascript
    const demo1 = () => import('../components/demo1');
    const demo2 = () => import('../components/demo2');
    export default new Rouer({
        routes:[
            {
                path:"/demo1",
                name:"Demo1",
                component:demo1
            },
            {
                path: '/demo2',
                name:"Demo2",
                component:demo2
            }

        ]

    });
```

## 3. webpack提供的require.ensure()
. vue-router配置路由， 使用webpack的[require.ensure](https://doc.webpack-china.org/api/module-methods#require-ensure)技术，也可以实现按需加载，
这种情况下， 多个路由制定相同的chunkName, 会合并打包成一个js文件
```javascript
    {
        path:"/demo1",
        name:"Demo1",
        component:resolve => require.ensure([], () => resolve(require('../components/demo1')), 'demo')
    },
    {
        path:"/hello",
        name:"Hello",
        component:resolve => require.ensure([], () => resolve(require('../components/hello')), 'demo')
    }
```
