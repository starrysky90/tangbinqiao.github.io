---
title: Javascript中bind方法的实现
date: 2018-05-07 10:00:56
tags: ['js', 'bind']
---
## 首先我们可以通过目标函数来实现bind方法
```javascript
Function.prototype.bind = function(context){
    var self = this;
    return function(){
        return self.apply(context, arguments);
    }
};
```
<!-- more -->

## 考虑到[柯里化](http://blog.jobbole.com/77956/)的情况,我们可以构建一个更加健壮的bind
```javascript
Function.prototype.bind = function(context){
    var args = Array.prototype.slice.call(arguments, 1);
    var self = this;
    retunrn function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        this.finalArgs = args.concat(innerArgs);
        return self.apply(context, finalArgs);
    }
}
```
这次的bind方法可以绑定对象， 也可可以在绑定的时候传参
## 继续，javascript的函数还可以作为构造函数，那么绑定后的函数用这种方式调用时，情况就比较微妙， 需要涉及到原型链的传递
```javascript
Function.prototype.bind = function(context){
    var args = Array.prototype.slice.call(arguments, 1);
    var self = this;
    var F = function(){};
    var bound = function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);

        return self.apply((this instanceof F ? this: context), finalArgs);
    }
    F.prototype = self.prototype;
    bound.prototype = new F();
    return bound;
}
```
这是《JavaScript Web Application》一书中对bind()的实现：通过设置一个中转构造函数F，使绑定后的函数与调用bind()的函数处于同一原型链上，用new操作符调用绑定后的函数，返回的对象也能正常使用instanceof，因此这是最严谨的bind()实现。