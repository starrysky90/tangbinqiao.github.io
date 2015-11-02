(function () {
    var a = false;
    window.calendar = function (j) {
        if (!a) {
            a = true;
            var f = document.createElement("link");
            f.href = "css/index.css";
            f.rel = "stylesheet";
            var g = document.getElementsByTagName("head")[0];
            var e = document.getElementsByTagName("script")[0];
            g.insertBefore(f, e)
        }
        j.onfocus = function () {
            d.style.display = "block"
        };
        j.onclick = function (n) {
            var m = n || event;
            m.cancelBubble = true
        };
        var d = document.createElement("div");
        d.style.left = j.offsetLeft + "px";
        d.style.top = j.offsetTop + j.offsetHeight + 5 + "px";
        d.className = "calendar";
        d.innerHTML = '<a href="javascript:;" class="prev1">←</a>' + '<a href="javascript:;" class="next1">→</a>' + "<span>xxx年xxx月</span>" + "<ol>" + "<li>一</li>" + "<li>二</li>" + "<li>三</li>" + "<li>四</li>" + "<li>五</li>" + '<li class="week">六</li>' + '<li class="week">日</li>' + "</ol><ul></ul>";
        j.parentNode.insertBefore(d, j);
        var i = d.getElementsByTagName("span")[0];
        var k = d.getElementsByTagName("ul")[0];
        var b = 0;
        h();
        var c = d.getElementsByClassName("next1")[0];
        c.onclick = function (n) {
            var m = n || event;
            b++;
            h();
            m.cancelBubble = true
        };
        var l = d.getElementsByClassName("prev1")[0];
        l.onclick = function (n) {
            var m = n || event;
            b--;
            h();
            m.cancelBubble = true
        };

        function h() {
            k.innerHTML = "";
            var v = new Date();
            v.setMonth(v.getMonth() + b);
            var t = v.getFullYear();
            var q = v.getMonth();
            i.innerHTML = t + "年" + toDub(q + 1) + "月";
            var v = new Date();
            v.setMonth(v.getMonth() + b);
            v.setDate(1);
            var p = v.getDay();
            (p == 0) && (p = 7);
            for (var r = 0; r < p - 1; r++) {
                var o = document.createElement("li");
                k.appendChild(o)
            }
            var v = new Date();
            v.setMonth(v.getMonth() + b);
            v.setMonth(v.getMonth() + 1, 1);
            v.setDate(0);
            var u = v.getDate();
            for (var r = 0; r < u; r++) {
                var o = document.createElement("li");
                o.innerHTML = toDub(r + 1);
                k.appendChild(o)
            }
            var n = k.children;
            for (var r = 0; r < n.length; r++) {
                if (r % 7 == 5 || r % 7 == 6) {
                    n[r].className = "week"
                }
            }
            if (b == 0) {
                var v = new Date();
                var s = v.getDate();
                for (var r = 0; r < n.length; r++) {
                    if (n[r].innerHTML == s) {
                        n[r].className = "today";
                        n[r].innerHTML = "今天"
                    } else {
                        if (n[r].innerHTML < s) {
                            n[r].className = "past"
                        }
                    }
                }
            } else {
                if (b < 0) {
                    for (var r = 0; r < n.length; r++) {
                        n[r].className = "past"
                    }
                }
            }
            if (b > 0) {
                for (var r = 0; r < n.length; r++) {
                    n[r].onclick = function () {
                        j.value = i.innerHTML + this.innerHTML + "日"
                    }
                }
            } else {
                if (b == 0) {
                    var s = new Date().getDate();
                    for (var r = 0; r < n.length; r++) {
                        if (n[r].innerHTML == "今天") {
                            n[r].onclick = function () {
                                j.value = i.innerHTML + toDub(s) + "日"
                            }
                        } else {
                            if (n[r].innerHTML > s) {
                                n[r].onclick = function () {
                                    j.value = i.innerHTML + this.innerHTML + "日"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})();