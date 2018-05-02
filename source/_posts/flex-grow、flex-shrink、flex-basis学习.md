---
title: flex-grow、flex-shrink、flex-basis学习
date: 2018-04-26 17:10:58
tags: [css3, flex]
---

> 最近在研究css3的flex,遇到flex:1，flex-grow\flex-shrink\flex-basis始终搞不清，花了几个小时，深入地了解了一下
* flex-grow 是扩展比率
* flex-shrink 是收缩比率
* flex-basis 是伸缩基准值
    
## 第一种情况
假设flex盒子父级宽度固定为800px
```css3
    .box{
        flex:4 3 100px;
    }
    /*等价于*/
    .box{
        flex-grow:4;
        flex-shrink:3;
        flex-basis:100px;
    }
````

<!-- more -->

```html
    <div class="flex-parent">
        <div class="flex-son"></div>
        <div class="flex-son"></div>
        <div class="flex-son"></div>
    </div>
    <style>
        .flex-son:nth-child(1){
            flex:3 1 200px;
        }
        .flex-son:nth-child(2){
            flex:2 2 300px;
        }
        .flex-son:nth-child(3){
            flex:1 3 500px;
        }
    </style>
```

flex-basis总和加起来1000px;1000px>800px(父级的宽度);子元素势必要压缩，溢出了200px;
加权值 = son1 + son2 + son3 .. + sonN;
压缩后宽度为 = (子元素flex-basis值 x flex-shrink / 加权值) x 溢出值

所以最后的加权值为 
1x200 + 2x300 + 3x500 = 2300px;

son1的收缩量为(200 x 3 / 2300) x 200,即约等于17px;
son2的收缩量为(200 x 2 / 2300) x 200,即约等于52px;
son3的收缩量为(200 x 1 / 2300) x 200,即约等于130px;

最后son1, son2, son3的实际宽度为：
    200 - 16 = 184px;
    300 - 52 =  248px;
    500 - 230 = 370px;



## 第二种情况
我们改下父级宽度为1200px;
flex-basis的总和为1000px; 小于父级宽度将根据flex-grow,将有200px的剩余宽度；
既然有剩余， 我们就不需要加权计算， 剩余的宽度将根据flex-grow的值进行百分比， 那么200px就会根据百分比来分配剩余空间
剩余后宽度 =  (子元素flex-grow /  所有子元素flex-grow总和) x 剩余值

total = 1 + 2 + 3;

son1的扩展量为: (1 / total) x 200 ，即约等于100px;
son2的扩展量为: (2 / total) x 200 ，即约等于67px;
son3的扩展量为: (3 / total) x 200 ，即约等于33px;

最后son1, son2, son3的实际宽度为:
    200 + 100 = 300px;
    300 + 67 = 367px;
    500 + 33 = 533px;


> **总结**
所以以上两种情况下，第二种flex-basis和flex-shrink是不列入计算公式的；第一种flex-grow是不列入计算公式的
但是实际中，我们有些子元素不想进行比例分配， 永远是固定的， 那么flex就必须等于none, 否则宽度将无效
flex:1 -> flex: 1 1 0%;
flex:auto; -> flex:1 1 auto;
flex:none; -> flex: 0 0 auto;

