---
title: vue-单元测试
date: 2017-05-03 16:32:20
tags: ['vue','单元测试', 'jasmine']
---

## 配置和工具
任何兼容基于模块的构建系统都可以正常使用，但如果你需要一个具体的建议，可以使用Karma进行自动化测试，他有很多社区版的插件，包括对Webpack和Browserify的支持，更多详细的安装步骤，请参考各项目的安装文档，通过这些Karma配置的例子可以快速帮助你上手（[webpack配置](https://github.com/vuejs-templates/webpack/blob/master/template/test/unit/karma.conf.js)，[Browserify配置](https://github.com/vuejs-templates/browserify/blob/master/template/karma.conf.js)）
<!-- more -->
## 简单的断言
你不必为了可测试性在组建中做任何特殊的操作，导出原始设置就可以了：
```html
    <template>
        <span>{{ message }}</span>
    </template>
    <script>
        export default{
            data(){
                return {
                    message:"hello"
                }
            },
            created(){
                this.message = "bye!"
            }
        }
    </script>
```
然后随着vue导入组件的选项，你可以使用许多常用断言：
```javascript
//导入vue.js和组件，进行测试
import Vue from 'vue';
import MyComponent from 'path/to/MyComponent.vue';

describe("MyComponent", () => {
    //检查原始组件选项
    it('has a created hook', () => {
        expect(typeof MyComponent.created).toBe('function');
    });

    //评估原始组件选项中的函数的结果
    it('sets the correct default data', () => {
        expect(typeof MyComponent.data).toBe("function");
        const defaultData = MyComponent.data();
        expect(defaultDta.message).toBe("hello!");
    });

    //检查mount中的组件实例
    it('correctly sets the message when created', () => {
        const vm = new Vue(MyComponent).$mount();
        expect(vm.message).toBe('bye!');
    });

    //创建一个实例并检查渲染输出
    it('renders the correct message', () => {
        const Constructor = Vue.extend(MyComponent);
        const vm = new Constructor().$mount();
        expect(vm.$el.textContent).toBe("bye!");
    })
});
```

## 编写可被测试的组件
很多组件的渲染输出由他的props决定，事实上，如果一个组件的渲染输出完全取决于他的props,那么它会让测试变得简单，就好像断言不同参数的纯函数的返回值，看下面这个例子：
```html
<template>
    <p>{{msg}}</p>
</template>
<script>
    export default{
        props:['msg']
    }
</script>
```
你可以在不同的props中，通过propsData选项断言他的渲染输出
```javascript
import Vue from 'vue'
import MyComponent from './MyComponent.vue';

//挂载元素并返回已渲染的文本的工具函数
function getRenderedText(component, propsData){
    const Constructor = vue.extend(componnet);
    const vm = new Constructor({propsData: propsData}).$mount();
    return vm.$el.textContent
}

describe('MyComponent', () => {
    it('renders correctly with different props', () => {
        expect(getRenderedText(MyComponent, {
            msg:"Hello"
        })).toBe("Hello")
    });

    it('getRenderedText(MyComponent,{
        msg:"Bye"
    })).toBe("Bye")
});
```

## 断言异步更新
由于vue进行异步更新DOM的情况，一些依赖DOM跟新结果的断言必须在Vue.nextTick回调中进行
```javascript
//在状态更新后检查生成的HTML
it('update the renderd message when vm.message updates', done => {
    const vm = new Vue(MyComponent).$mount();
    vm.message = 'foo';

    Vue.nextTick(() => {
        expect(vm.$el.textContent).toBe('foo');
        done();
    });
})
```
关于更多的Vue的单元测试的内容，可参考[vue-test-utils](https://vue-test-utils.vuejs.org/zh-cn/)