---
title: vue-作用域插槽
date: 2018-05-02 15:51:29
tags: ['vue', '作用域插槽']
---
> 2.1.0新增

作用域插槽是一种特殊类型的插槽，用作一个（能被传递数据的）可重用模板，来代替已经渲染好的元素。
在子组件中，只需要将数据传递到插槽，就像你将prop传递给组件一样
```html
<div class="child">
    <slot text="hello from child!"></slot>
</div>
```
<!-- more -->
在父组件中，具有slot-scope的template元素必须存在，表示它是作用于插槽的模板。slot-scope的值将会被作为一个临时变量名，此变量接收从子组件传递过来的prop对象：
```html
<div class="parent">
    <child>
        <template slot-scope="props">
            <span>hello from parent</span>
            <span>{{props.text}}</span>
        </template>
    </child>
</div>
```
如果我们渲染上述模板，得到的输出会是：
```html
<div class="parent">
    <div class="child">
        <span>hello from parent</span>
        <span>hello from child</span>
    </div>
</div>
```

> 在2.5.0+,slot-scope能被用在人艺元素或组件中不再局限于template
作用域查迟到更典型的用例是在列表组件中，允许使用者自定义如何渲染列表的每一项：

```html
<my-awesome-list :items="items">
    <li slot="item" slot-scope="props" class="my-fancy-item"> {{ props.text}} </li>
</my-awseome-list>
```
列表组件的模板：
```html
<ul>
    <slot name="item" v-for="item in items" :text="item.text"></slot>
</ul>
```

解构
slot-scope的值实际上是一个可以出现在函数签名参数位置的合法的javascript表达式。这意味着在受支持的环境（单文件组件或现代浏览器中），你还可以在表达式中用ES2015解构：
```html
<child>
    <span slot-scope="{text}">{{text}}</span>
</child>
```

