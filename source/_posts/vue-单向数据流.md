---
title: vue-单向数据流
date: 2018-05-02 10:24:07
tags: ['vue']
---

Vue中Prop是单向绑定的：当父组件的属性变化时，将其传导给子组件，但是反过来不会，这是为了防止子组件无意间修改了父组件的状态，来避免应用的数据流变得难以理解。
另外，每次父组件更新时，子组件的所有prop都会更新为最新值， 这意味着你不应该在子组件内部改变prop，如果你这么做了，Vue会在控制台给出警告。
我们一般会在下面两种情况下去修改prop中数据：
1. Prop作为初始值传入后，子组件想把它当作**局部数据**来用 
2. Prop作为原始数据传入后，由子组件处理成**其他数据**输出

<!-- more -->
对于以上两种情况，争取的应对方式为:

### 定义一个局部变量， 并用prop的值初始化它
    ```bash
        props:['initialCounter'],
        data:function(){
            return {
                counter:this.initialCounter
            }
        }
    ```
### 定义一个计算属性， 处理prop的值并返回
    ```bash
        props:['size'],
        computed:{
            normalizedSize:function(){
                return this.size.trim().toLowerCase()
            }
        }
    ```

> 注意在javascript中对象和数组是引用类型，指向同一个内存空间，如果prop是一个对象或数组， 在子组件内部改变它会影响父组件的状态
