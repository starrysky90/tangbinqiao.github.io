---
title: vue-递归组件、组件间的循环引用
date: 2018-05-02 18:41:51
tags: ['vue', '递归组件']
---
## 递归组件
组件在他的模板内可以递归的调用自己，不过它们只能通过name选项来做这件事：
```
name:'unique-name-of-my-component'
```
当你使用Vue.component全局注册一个组件时， 这个全局的ID会自动设置为该组件的name选项。
<!-- more -->
```
Vue.component('unique-name-of-my-component',{
    //...
});
```
稍有不慎，递归组件就可能导致无限循环：
```
name:'stack-overflow',
template:'<div><stack-overflow></stack-overflow></div>'
```
类似上述的组将将会导致‘max stack size exceeded’错误，所以请确保递归调用时条件性的（例如使用一个最终会得到的false的v-if）

## 组件间的循环引用
假设你需要构建一个文件目录树， 像资源管理器那样的，你可能有一个&lt;tree-folder&gt;组件， 模板是这样的:
```html
<p>
    <span>{{ folder.name }}</span>
    <tree-folder-contents :children="folder.children" />
</p>
```

还有一个&lt;tree-folder-contents&gt;组件，模板是这样的：
```html
<ul>
        <li v-for="child in chidlren">
            <tree-folder v-if="child.children" :folder="child" />
            <span v-else>{{ child.name }}</span>
        </li>
</ul>
```
当你仔细观察的时候，你会发现这些组件在渲染树中互为对方的后代和祖先--一个悖论！，当通过Vue.component全局注册组建的时候，
这个悖论就会自动解开，如果你是这样做的，那么你可以跳过这里。

然而，如果你是用一个模块系统依赖/导入组件，例如通过webpack或Browserify，你会遇到一个错误：
```
failed to mount component: template or render function not defined.
```
为了解释这里发生了什么，我们先把两个组件成为A和B,模块系统发现他需要A，但是A先依赖B，但是B又依赖A,但是A又依赖B,如此往复，这变成了一个循环，不知道如何不经过其中一个组件而解析出另一个组件，为了解决这个问题，我们需要给模块系统一个点， 在那里“A反正是需要B的，但是我们不需要先解析B"

在我们的例子中，把&lt;tree-folder&gt;组件设置为了那个点。我们知道那个产生悖论的子组件是&lt;tree-folder-contents&gt;组件，我们会等到生命周期钩子beforeCreate时去注册他：
```javascript
beforeCreate:function(){
    this.$options.components.TreeFolderContents =  require('./tree-folder-contents.vue').default;
}
```
或者，在本地注册组建的时候，你可以使用webpack的异步import：
```javascript
components:{
    TreeFolderContents: () => import('./tree-folder-contents.vue')
}
```
这样问题就解决了