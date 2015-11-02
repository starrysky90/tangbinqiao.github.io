function findInArr(a, c) {
    for (var b = 0; b < a.length; b++) {
        if (a[b] == c) {
            return true
        }
    }
    return false
}
function getByClass(d, f) {
    if (d.getElementsByClassName) {
        return d.getElementsByClassName(f)
    } else {
        var a = [];
        var c = new RegExp("\\b" + f + "\\b");
        var e = d.getElementsByTagName("*");
        for (var b = 0; b < e.length; b++) {
            if (c.test(e[b].className)) {
                a.push(e[b])
            }
        }
        return a
    }
}
function hasClass(b, c) {
    var a = new RegExp("\\b" + c + "\\b");
    return a.test(b.className)
}
function addClass(a, b) {
    if (a.className) {
        if (!hasClass(a, b)) {
            a.className += " " + b
        }
    } else {
        a.className = b
    }
}
function removeClass(b, c) {
    var a = new RegExp("\\b" + c + "\\b", "g");
    if (hasClass(b, c)) {
        b.className = b.className.replace(a, "").replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ")
    }
}
function toggleClass(a, b) {
    if (hasClass(a, b)) {
        removeClass(a, b)
    } else {
        addClass(a, b)
    }
}
function getStyle(b, a) {
    if (b.currentStyle) {
        return (b.currentStyle || getComputedStyle(b, false))[a]
    }
}
function rnd(b, a) {
    return Math.floor(Math.random() * (a - b) + b)
}
function toDub(a) {
    return a < 10 ? "0" + a: "" + a
}
function addEvent(b, c, a) {
    if (b.addEventListener) {
        b.addEventListener(c, a, false)
    } else {
        b.attachEvent("on" + c, a)
    }
}
function removeEvent(a, c, b) {
    if (a.removeEventListener) {
        a.removeEventListener(c, b, false)
    } else {
        a.detachEvent("on" + c, b)
    }
}
function ready(a) {
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", a, false)
    } else {
        document.attachEvent("onreadystatechange",
        function() {
            if (document.readyState == "complete") {
                a()
            }
        })
    }
}
function getPos(c) {
    var b = 0;
    var a = 0;
    while (c) {
        b += c.offsetLeft;
        a += c.offsetTop;
        c = c.offsetParent
    }
    return {
        left: b,
        top: a
    }
}
function addWheel(b, a) {
    if (window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
        b.addEventListener("DOMMouseScroll", c, false)
    } else {
        b.onmousewheel = c
    }
    function c(e) {
        var d = e || event;
        var f = false;
        if (d.wheelDelta) {
            f = d.wheelDelta > 0 ? false: true
        } else {
            f = d.detail > 0 ? true: false
        }
        a(f)
    }
}
function drag(a) {
    a.onmousedown = function(e) {
        var b = e || event;
        var d = b.clientX - getPos(a).left;
        var c = b.clientY - getPos(a).top;
        document.onmousemove = function(g) {
            var f = g || event;
            var i = f.clientX - d;
            var h = f.clientY - c;
            a.style.left = i + "px";
            a.style.top = h + "px"
        };
        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
            a.releaseCapture && a.releaseCapture()
        };
        a.setCapture && a.setCapture();
        return false
    }
}
function mouseenter(b, a) {
    if (b.onmouseenter) {
        b.onmouseenter = a
    } else {
        b.onmouseover = function(e) {
            var d = e || event;
            var c = d.fromElement || d.relatedTarget;
            if (! (c && b.contains(c))) {
                a(e)
            }
        }
    }
}
function mouseleave(b, a) {
    if (b.onmouseleave) {
        b.onmouseleave = a
    } else {
        b.onmouseout = function(d) {
            var c = d || event;
            var e = c.toElement || c.relatedTarget;
            if (! (e && b.contains(e))) {
                a(d)
            }
        }
    }
}
function isFF() {
    return window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1 ? true: false
} (function(b) {
    var a = {
        email: /^\w+@[a-z0-9-]+(\.[a-z]{2,8}){1,2}$/,
        tel: /^(0[1-9]\d{1,2}-)?[1-9]\d{6,7}$/,
        age: /^(1[6-9]|[2-9]\d|100)$/,
        cnName: /^[\u4e00-\u9fa5]{2,4}$/
    };
    b.checkForm = function(h) {
        var g = document.getElementById(h);
        var d = g.getElementsByTagName("input");
        function c(j, i) {
            if (j.value) {
                if (i.test(j.value)) {
                    j.className = "ok";
                    j.parentNode.children[1].innerHTML = "";
                    return true
                } else {
                    j.parentNode.children[1].innerHTML = j.getAttribute("err_tip");
                    j.className = "error";
                    return false
                }
            } else {
                j.parentNode.children[1].innerHTML = "*内容不能为空";
                j.className = "error";
                return false
            }
        }
        g.onsubmit = function() {
            var j = true;
            for (var k = 0; k < d.length; k++) {
                if (a[d[k].name]) {
                    if (!c(d[k], a[d[k].name])) {
                        j = false
                    }
                }
            }
            return j
        };
        for (var e = 0; e < d.length; e++) {
            var f = a[d[e].name];
            if (f) { (function(i) {
                    d[e].onblur = function() {
                        c(this, i)
                    }
                })(f)
            }
        }
        g.onreset = function() {
            var i = confirm("你确认重置么");
            if (!i) {
                return false
            }
        }
    }
})(window);
function tab(d) {
    var a = getByClass(document, d);
    for (var b = 0; b < a.length; b++) {
        c(a[b])
    }
    function c(h) {
        var f = getByClass(h, "btn");
        var g = getByClass(h, "cont");
        for (var e = 0; e < f.length; e++) {
            f[e].index = e;
            f[e].onclick = function() {
                for (var j = 0; j < f.length; j++) {
                    f[j].className = "btn";
                    g[j].className = "cont"
                }
                this.className = "active btn";
                g[this.index].className = "active cont"
            }
        }
    }
};