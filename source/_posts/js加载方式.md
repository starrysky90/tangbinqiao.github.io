---
title: js加载方式
date: 2018-04-24 09:35:18
tags: [js]
---


## 1.同步加载
我们平时使用最多的一种方式：
```bash
<script src="http://yourdomain.com/script.js"></script>
```
同步模式，又称阻塞模式， 会阻止浏览器的后续处理， 停止后续的解析，只有当前加载完成后，才能进行下一步操作。所以默认同步执行才是安全的， 但这样如果js中有输出document内容，修改dom,重定向等行为，就会造成页面堵塞，所以一般建把&lt;script&gt;标签放在&lt;body&gt;结尾处，这样尽可能减少页面阻塞。


## 2.异步加载
异步加载又叫非阻塞加载， 浏览器在下载执行js的同时， 还会继续进行后续页面的处理

### 1.动态创建script标签
<!-- more -->
```javascript
    (function(){
        if(window.attachEvent){
            window.attachEvent("onload",insertScript);
        }else{
            window.addEventListener("load", insertScript, false);
        }

        var insertScript = function(){
            var ga = document.createElement("script");
            ga.type = "text/javascript";
            ga.src = "http://xxx.script.js"
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        };
    })();
```

### 2. defer和async
defer属性： IE4.0就出现， 浏览器会并行下载其他有defer属性的script,而不会阻塞页面后续处理， 注： 所有的defer脚本必须保证按顺序执行
```javascript
    <script type="text/javascript" defer></script>
```

async属性： HTML5新属性，不会阻塞页面加载， 脚本将在下载后尽快执行，但是不能保证按顺序执行， 他们将在onload事件之前完成
```javascript
    <script type="text/javascript" async></script>
```
Firefox 3.6、Opera 10.5、IE 9和最新的Chrome和Safari都支持async属性。可以同时使用async和defer，这样IE 4之后的所有IE都支持异步加载。

### 3. 其他方法
XHR Injection | XHR Eval | Script In Iframe | document.write

XHR Injection:通过XMLHttpRequest来获取javascript,然后创建一个script元素插入到DOM结构中，ajax请求成功后设置script元素插入到DOM结构中。ajax请求成功后设置scirpt.text为请求成功的返回responseText
```javascript
    var getXMLHttp = function(){
        var obj ;
        if(window.XMLHttpRequest){
            obj = new XMLHttpRequest();
        }else{
            obj = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return obj
    };
    var xmlHTTP = getXMLHttp();
    xmlHTTP.open('GET', "//ajax/url");
    xmlHTTP.send();
    XMLHTTP.onreadystatechange = function(){
        if(xmlHTTP.readyState === 4 && xmlHTTP.status == 200){
            var script = document.createElement("script");
            script.text= xmlHTTP.responseText;
            docuent.getElemenentsByTagName("head")[0].appendChild(script);

        }

    }
```

XHR Eval:与XHR Injection对responseText的执行方式不同， 直接把responseText放在eval函数里面执行
```javascript
     //获取XMLHttpRequest对象，考虑兼容性。
    var getXmlHttp = function(){
        var obj;
        if (window.XMLHttpRequest)
            obj = new XMLHttpRequest();
        else
            obj = new ActiveXObject("Microsoft.XMLHTTP");
        return obj;
    };  
    //采用Http请求get方式;open()方法的第三个参数表示采用异步(true)还是同步(false)处理
    var xmlHttp = getXmlHttp();
    xmlHttp.open("GET", "http://cdn.bootcss.com/jquery/3.0.0-beta1/jquery.min.js", true);
    xmlHttp.send(); 
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            eval(xmlHttp.responseText);
            //alert($);//可以弹出$,表明JS已经加载进来。click事件放在其它出会出问题，应该是还没加载进来
            $("#btn1").click(function(){
                alert($(this).text());
            });
        }
    }
```