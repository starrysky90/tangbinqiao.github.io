---
title: 'vue-.native,.sync修饰符'
date: 2017-05-02 11:21:33
tags: ['vue','.native','.sync']
---
## .native(给组件绑定原生事件)
有时候，你可能想在某个组建的根元素上监听一个原生事件。可以用v-on的修饰符.native,例如：
    ```
    <my-component v-on:click.native="doThething"></my-component>
    ```
<!-- more -->
## .sync修饰符(双向数据绑定)
** 2.3.0+ **
在一些情况下， 我们可能会需要对一个prop进行“双向绑定”,事实上， 这正是Vue.1.x中的.sync修饰符提供的功能， 当一个子组件改变了一个带.sync的prop的值时，这个变化也会同步到父组件中所绑定的值， 这很方便，但是也会导致问题，因为他破坏了单向数据流，由于子组件改变prop的代码和普通的状态改动代码毫无区别，
当光看子组件的代码时，你完全不知道他何时悄悄改变了父组件的状态，这在debug复杂结构的应用时会带来很高的维护成本。

上面所说的正是我们在2.0中移除.sync的理由。但在2.0发布之后的实际应用中，我们发现.sync还是有其适用之处的，比如开发可复用的组件库时，我们需要做的只是让子组件改变父组件状态的代码更容易被区分。

从2.3.0起我们重新引入了.sync修饰符，但是这次它只是作为编译时的语法糖存在，他会被扩展为一个自动更新父组件的v-on监听器。
如下代码：
    ```
    <comp :foo.sync="bar"></comp>
    ```
会被扩展为：
    ```
    <comp :foo="bar" @update:foo="val => bar=val"></comp>
    ```
当子组件需要更新foo的值时需要显式地触发一个更新事件：
    ```
    this.$emit("update:foo", newValue);
    ```

当使用一个对象一次性设置多个属性的时候，这个.sync修饰符也可以和v-bind一起使用：
    ```
    <comp v-bind.sync="{foo:1, bar:2}"></comp>
    ```
这个例子会为foo和bar同时添加用于更新的v-on监听器。

## 使用自定义事件的表单输入组件
自定义事件可以用来创建自定义的表单输入组件，使用v-model来进行数据双向绑定。要牢记：
```
<input v-model="something" />
```
这不过是以下示例的语法糖：
```
<input v-bind:value="something" v-on:input="something = $event.target.value" />
```
所以在组件中使用时， 他相当于下面的简写：
```
<custom-input v-bind:value="something" v-on:input="something = arguments[0]">
```
所以要让组件的v-model生效，他应该（从2.2.0起时刻配置的）:
* 接收一个 value prop
* 在有新的值时触发input事件并将新值作为参数
我们来看一个非常简单的货币输入的自定义控件
```html
    <currency-input v-model="price"></currency-input>
```
```javascript
Vue.component('currency-input',{
    template:`
        <span>
            $<input ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)"
        </span>
    `,
    props:['value'],
    methods:{
        updateValue:function(value){
            var formattedValue = value.trim().slice(0, vlaue.indexOf('.') === -1? value.length:value.indexOf('.')+3);
            if(formattedValue !== value){
                this.$refs.input.value = formattedValue;
            }
            //通过input事件带出数值
            this.$emit('input', Number(formattedValue));
        }
    }
});
```

## 自定义组件的v-model
2.2.0新增
默认情况下， 一个组件的v-model会使用value prop和input事件，但是诸如单选框和复选框的输入类型可能吧value用作了别的目的，model选项可以避免这样的冲突。
```
Vue.component('my-checkbox', {
    model:{
        prop:"checked",
        event:"change"
    },
    props:{
        checked:Boolean,
        value: String
    }
});
```
```
<my-checkbox v-model="foo" value="some value"></my-checkbox>
```
上述代码等价于：
```
<my-checkbox
    :checked="foo"
    @change="val => {foo = val}"
    value="some value"
></my-checkbox>
```
> 注意在组件中，仍然需要显示申明checked这个prop



