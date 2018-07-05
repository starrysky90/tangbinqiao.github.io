---
title: webpack之bundle-loader
date: 2018-05-07 17:08:51
tags: ['webpack', 'bundle-loader']
---
## 安装
```
npm install bundle-loader --save
```
<!-- more -->
##  用法
```javascript
//当你引用bundle的时候，chunk会被浏览器加载
var waitForChunk = require('bundle-loader!./file.js');
//为了等待chunk的加载完成，（而且是为了拿到exports的输出）
waitForChunk(function(file){
    //这里可以使用file,就像是用下面的代码require进来一样
    // var file = require('./file.js');
});
//将require包裹在require.ensure的代码块中

//Mutiple callbacks can be added. They will be excuted in the order of addtion.
//If a callback is added after dependencies were loaded, it will be called immediately
waitForChunk(callbackTwo);
waitForChunk(callbackThree);
```
当你引用bundle时，chunk会被浏览器加载，如果你想他懒加载， 请用：
```javascript
var load = require('bundle-loader?lazy!./file.js');
//bundle 不回加载，除非你调用了call函数
load(function(){

});
```

## Options
```
{
    loader:"bundle-loader",
    options:{
        lazy:true //default false
        name:'[name]'  //defualt '[id].[name]'
    }
}
```

## Example
```javascript
import bundle from './file.bundle.js';
```
webpack.coinfig.js
```javascript
module.exports = {
    entry: {
        index:"./App.js"
    },
    output:{
        path:path.resolve(__dirname, 'dest'),
        filename:"[name].js",
        chunkFilenmae:"[name].[id].js"
    },
    module:{
        rules:{
            test:/\.bundle\.js$/,
            use:{
                loader:"bundle-loader",
                options: {
                    name:"my-chunk'
                }
            }
        }
    }
}
```