ready(function() { (function() {
        var j = document.getElementById("download");
        j.onclick = function() {
            var k = window.confirm("确认下载该简历吗？");
            if (!k) {
                j.href = "javascript:;"
            }
        }
    })();
	
	//myhomepage
    var a = document.getElementById("wel"); (function() {
        var m = "My HomePage";
        var j = [];
        for (var k = 0; k < m.length; k++) {
            var l = document.createElement("span");
            l.innerHTML = m.charAt(k);
            a.appendChild(l);
            j.push(l)
        }
        var p = 0;
        var o = setInterval(function() {
            move(j[p], {
                opacity: 1
            },
            {
                duration: 150
            });
            p++;
            if (p == j.length) {
                clearInterval(o)
            }
        },
        100)
    })();
	
	//点击显示隐藏
	 (function() {
        var j = [1, 2, 3, 4, 5, 6, 7, 8];
		var arr=['音悦台/index.html','hao360/hao360.html','v360/index.html','meituan/index.html','meilishuo/index.html','移动天猫/index.html','小米/index.html','youku/index.html'];
        var p = document.getElementById("close_down_box");
        var m = document.getElementById("close_down");
        var n = m.getElementsByTagName("img")[0];
		var oLink=n.parentNode;
        var o = document.getElementById("btn1");
        var k = document.getElementById("pre_box");
        var q = k.children;
        for (var l = 0; l < q.length; l++) { (function(r) {
                q[l].onclick = function() {
					oLink.href=arr[r];
					oLink.target='_blank';
                    n.src = "pic" + j[r] + ".jpg";
                    var t = document.documentElement.clientWidth;
                    var s = document.documentElement.clientHeight;
                    p.style.display = "block";
                    m.style.left = 50 + "%";
                    m.style.top = 50 + "%";
                    m.style.marginLeft = -t * 3 / 10 + "px";
                    m.style.marginTop = -s * 3 / 10 + "px";
                    m.style.height = s * 3 / 5 + "px";
                    move(m, {
                        width: t * 3 / 5
                    });
                    n.style.width = t * 3 / 5 + "px";
                    n.style.height = s * 3 / 5 + "px"
                }
            })(l)
        }
        o.onclick = function() {
            n.src = "images/tips/loding.gif";
            move(m, {
                width: 0
            },
            {
                duration: 50
            });
            move(n, {
                width: 0
            },
            {
                duration: 50
            });
            p.style.display = "none"
        }
    })(); 
	
	//鼠标移入移出
	(function() {
        var o = document.getElementById("pre_box").getElementsByTagName("li");
        for (var l = 0; l < o.length; l++) {
            n(o[l]);
            k(o[l])
        }
		//移入
        function n(q) {
            var p = q.getElementsByTagName("div")[0];
            q.onmouseenter = function(s) {
                var r = s || event;
                var t = j(q, r);
                switch (t) {
                case 0:
                    p.style.left = "200px";
                    p.style.top = 0;
                    break;
                case 1:
                    p.style.top = "160px";
                    p.style.left = 0;
                    break;
                case 2:
                    p.style.left = "-200px";
                    p.style.top = 0;
                    break;
                case 3:
                    p.style.top = "-160px";
                    p.style.left = 0;
                    break
                }
                move(p, {
                    left: 0,
                    top: 0
                },
                {
                    duration: 300
                })
            }
        }
		
		//移出
        function k(q) {
            var p = q.getElementsByTagName("div")[0];
            q.onmouseleave = function(s) {
                var r = s || event;
                var v = j(q, r);
                switch (v) {
                case 0:
                    var u = "200px";
                    var t = 0;
                    break;
                case 1:
                    var u = 0;
                    var t = "160px";
                    break;
                case 2:
                    var u = "-200px";
                    var t = 0;
                    break;
                case 3:
                    var u = 0;
                    var t = "-160px";
                    break
                }
                move(p, {
                    left: u,
                    top: t
                },
                {
                    duration: 300
                })
            }
        }
		//判断移入方向
        function j(r, q) {
            var p = r.offsetLeft + r.offsetWidth / 2 - q.clientX;
            var s = r.offsetTop + r.offsetHeight / 2 - q.clientY;
            return Math.round((m(Math.atan2(s, p)) + 180) / 90) % 4
        }
		//角度转弧度
        function m(p) {
            return p * 180 / Math.PI
        }
    })(); 
	
//	//移入
//	(function() {
//        var r = document.getElementById("pre_box");
//        var q = r.getElementsByTagName("li");
//       /* j();*/
//        var p = 0;
//        var o = setInterval(function() {
//            move(q[p], {
//                opacity: 1
//            });
//            p++;
//            if (p == q.length) {
//                clearInterval(o)
//            }
//        },
//        200);
//       /* function j() {
//            for (var n = 0; n < q.length; n++) {
//                q[n].style.borderColor = "rgb(" + rnd(0, 255) + "," + rnd(0, 255) + "," + rnd(0, 255) + ")"
//            }
//        }*/
//        for (var k = 0; k < q.length; k++) {
//            var m = q[k].offsetLeft;
//            var l = q[k].offsetTop;
//            q[k].style.left = m + "px";
//            q[k].style.top = l + "px"
//        }
//        for (var k = 0; k < q.length; k++) {
//            q[k].style.position = "absolute";
//            q[k].style.margin = 0
//        }
//    })(); 
	///向上滑和向下滑
	(function() {
        var j = document.getElementById("web");
        var l = j.children;
        var w = document.documentElement.clientHeight;
        var k = 0;
        var q = false;
        var s = false;
        var A = document.getElementById("page_btn");
        var y = A.children;
        var n = document.getElementById("exhi");
        var o = document.getElementById("down1");
        var m = document.getElementById("down2");
		
		
        var v = document.getElementById("p1");
        var p = document.documentElement.clientHeight;
        v.onclick = function() {
            o.innerHTML = "向下";
            m.innerHTML = "划一划吧";
            j.style.top = 0;
            k = 0;
            x.call(y[k])
        };
        var u = document.getElementById("p2");
        u.onclick = function() {
            o.innerHTML = "向下";
            m.innerHTML = "划一划吧";
            j.style.top = -p + "px";
            k = 1;
            x.call(y[k]);
            move(n, {
                width: 1200
            },
            {
                duration: 2000
            });
            move(j, {
                top: -k * w
            },
            {
                duration: 600,
                complete: function() {
                    x.call(y[k]);
                    z();
                    q = false
                }
            })
        };
        var t = document.getElementById("p3");
        t.onclick = function() {
            o.innerHTML = "向下";
            m.innerHTML = "划一划吧";
            j.style.top = -2 * p + "px";
            k = 2;
            x.call(y[k]);
            if (s) {
                return
            }
            b();
            s = true
        };
        var r = document.getElementById("p4");
        r.onclick = function() {
            o.innerHTML = "continue";
            m.innerHTML = "to Top";
            j.style.top = -3 * p + "px";
            k = 3;
            x.call(y[k])
        };
        addWheel(j,
        function(C) {
            if (q) {
                return
            }
            q = true;
            if (C) {
                k++;
                B()
            } else {
                k--;
                if (k < 0) {
                    k = l.length - 1
                }
                B()
            }
            function B() {
                if (k >= l.length) {
                    k = 0
                }
                w = document.documentElement.clientHeight;
                switch (k) {
                case 0:
                    o.innerHTML = "向下";
                    m.innerHTML = "划一划吧";
                    move(n, {
                        width: 300
                    },
                    {
                        duration: 500
                    });
                    move(j, {
                        top: -k * w
                    },
                    {
                        duration: 600,
                        complete: function() {
                            x.call(y[k]);
                            q = false
                        }
                    });
                    break;
                case 1:
                    move(n, {
                        width: 980
                    },
                    {
                        duration: 2000
                    });
                    move(j, {
                        top: -k * w
                    },
                    {
                        duration: 600,
                        complete: function() {
                            x.call(y[k]);
                            z();
                            q = false
                        }
                    });
                    break;
                case 2:
                    o.innerHTML = "向下";
                    m.innerHTML = "划一划吧";
                    move(n, {
                        width: 300
                    },
                    {
                        duration: 500
                    });
                    move(j, {
                        top: -k * w
                    },
                    {
                        duration: 600,
                        complete: function() {
                            x.call(y[k]);
                            q = false;
                            if (s) {
                                return
                            }
                            b();
                            s = true
                        }
                    });
                    break;
                case 3:
                    o.innerHTML = "continue";
                    m.innerHTML = "to Top";
                    move(j, {
                        top: -k * w
                    },
                    {
                        duration: 600,
                        complete: function() {
                            x.call(y[k]);
                            q = false
                        }
                    });
                    break
                }
            }
        });
		
		
        function x() {
            for (var B = 0; B < y.length; B++) {
                y[B].className = ""
            }
            this.className = "f40"
        }
        function z() {
            var B = document.getElementById("tab_box_1");
            var C = document.getElementById("time_wrap");
            move(B, {
                opacity: 1
            },
            {
                duration: 1000
            });
            q = false
        }
    })(); 
	//选项卡轮播图哦
	(function() {
        var o = document.getElementById("tab_box");
        var j = o.children;
        var v = document.getElementById("tab_btn");
        var u = v.getElementsByTagName("span");
        var p = document.getElementById("prev");
        var s = document.getElementById("next");
        var l = 0;
        var t = j[0].offsetWidth;
        o.style.width = t * j.length + "px";
        var k = setInterval(r, 5500);
        s.onclick = r;
        s.onmouseover = p.onmouseover = o.onmouseover = v.onmouseover = function() {
            clearInterval(k)
        };
        s.onmouseout = p.onmouseout = o.onmouseout = v.onmouseout = function() {
            k = setInterval(r, 5500)
        };
        for (var q = 0; q < u.length; q++) { (function(w) {
                u[q].onclick = function() {
                    l = w;
                    n();
                    move(o, {
                        left: -t * l
                    },
                    {
                        complete: function() {
                            m()
                        }
                    })
                }
            })(q)
        }
        function n() {
            for (var w = 0; w < u.length; w++) {
                u[w].className = ""
            }
            u[l].className = "active"
        }
        function r() {
            l++;
            if (l >= j.length) {
                l = 0
            }
            n();
            move(o, {
                left: -t * l
            },
            {
                complete: function() {
                    m()
                }
            })
        }
        p.onclick = function() {
            l--;
            if (l < 0) {
                l = j.length - 1
            }
            n();
            move(o, {
                left: -t * l
            },
            {
                complete: function() {
                    m()
                }
            })
        };
		
		//手风琴
        function m() {
            var w = document.getElementById("sfq");
            move(w, {
                width: 632
            },
            {
                duration: 200,
                complete: function() {
                    move(w, {
                        height: 320
                    },
                    {
                        duration: 300
                    })
                }
            })
        }
    })(); 
	
	
	///canvas时钟
	(function() {
        j();
        setInterval(function() {
            k()
        },
        1000);
        function j() {
            canvas = document.getElementById("sample");
            cxt = canvas.getContext("2d");
            cw = parseInt(canvas.width);
            ch = parseInt(canvas.height);
            cxt.translate(cw / 2, ch / 2);
            k()
        }
        function k() {
            cxt.clearRect( - cw / 2, -ch / 2, cw, ch);
            var z = Math.min(cw, ch) / 2;
            var l = z * 0.85;
            cxt.font = "14px 'Arial'";
            cxt.fillStyle = "black";
            cxt.textAlign = "center";
            cxt.textBaseLine = "middle";
            for (var x = 0; x < 12; x++) {
                var J = Math.PI * 2 * (3 - x) / 12;
                var I = l * Math.cos(J);
                var H = -l * Math.sin(J);
                cxt.fillText(x, I, H)
            }
            var G = new Date();
            var A = G.getHours();
            var w = G.getMinutes();
            var t = G.getSeconds();
            if (A > 12) {
                A = A - 12
            }
            var p = Math.PI * 2 * (3 - (A + w / 60)) / 12;
            var v = z * 0.5;
            var F = 5;
            var D = "#000";
            q(p, v, F, D);
            var o = Math.PI * 2 * (15 - (w + t / 60)) / 60;
            var u = z * 0.7;
            var E = 3;
            var C = "#555555";
            q(o, u, E, C);
            var n = Math.PI * 2 * (15 - t) / 60;
            var r = z * 0.8;
            var B = 1;
            var y = "#aa0000";
            q(n, r, B, y);
            function q(M, L, K, s) {
                var m = L * Math.cos(M);
                var N = -L * Math.sin(M);
                cxt.strokeStyle = s;
                cxt.lineWidth = K;
                cxt.lineCap = "round";
                cxt.beginPath();
                cxt.moveTo(0, 0);
                cxt.lineTo(m, N);
                cxt.stroke()
            }
        }
    })(); 
	
	//日历
	(function() {
        var l = document.getElementById("calendar");
        var o = l.getElementsByTagName("span")[0];
        var j = l.getElementsByTagName("ul")[0];
        var p = document.getElementById("prev_img");
        var n = document.getElementById("next_img");
        var k = 0;
        p.onmouseover = function() {
            this.src = "left_on.png"
        };
        p.onmouseout = function() {
            this.src = "left.png"
        };
        n.onmouseover = function() {
            this.src = "right_on.png"
        };
        n.onmouseout = function() {
            this.src = "right.png"
        };
        m();
        var n = l.getElementsByClassName("next1")[0];
        n.onclick = function() {
            k++;
            m()
        };
        var p = l.getElementsByClassName("prev1")[0];
        p.onclick = function() {
            k--;
            m()
        };
        function m() {
            j.innerHTML = "";
            var z = new Date();
            z.setMonth(z.getMonth() + k);
            var w = z.getFullYear();
            var t = z.getMonth();
            o.innerHTML = w + "年" + toDub(t + 1) + "月";
            var z = new Date();
            z.setMonth(z.getMonth() + k);
            z.setDate(1);
            var s = z.getDay(); (s == 0) && (s = 7);
            for (var u = 0; u < s - 1; u++) {
                var r = document.createElement("li");
                j.appendChild(r)
            }
            var z = new Date();
            z.setMonth(z.getMonth() + k);
            z.setMonth(z.getMonth() + 1, 1);
            z.setDate(0);
            var x = z.getDate();
            for (var u = 0; u < x; u++) {
                var r = document.createElement("li");
                r.innerHTML = u + 1;
                j.appendChild(r)
            }
            var q = j.children;
            for (var u = 0; u < q.length; u++) {
                if (u % 7 == 5 || u % 7 == 6) {
                    q[u].className = "week"
                }
            }
            if (k == 0) {
                var z = new Date();
                var v = z.getDate();
                for (var u = 0; u < q.length; u++) {
                    if (q[u].innerHTML == v) {
                        q[u].className = "today";
                        q[u].innerHTML = "今天"
                    } else {
                        if (q[u].innerHTML < v) {
                            q[u].className = "past"
                        }
                    }
                }
            } else {
                if (k < 0) {
                    for (var u = 0; u < q.length; u++) {
                        q[u].className = "past"
                    }
                }
            }
        }
    })(); 
	
	//手风琴
	(function() {
        $(function() {
            var m = $("#sfq li");
            var j = $("#sfq span");
            var k = m.eq(0).outerWidth();
            var l = 20;
            m.each(function(n) {
                if (n != 0) {
                    var o = k + (n - 1) * l;
                    $(this).css("left", o + "px")
                }
            });
            j.mouseenter(function() {
                var n = $(this).index("#sfq span");
                m.each(function(o) {
                    if (o <= n) {
                        $(this).animate({
                            left: o * l
                        })
                    } else {
                        $(this).animate({
                            left: k + l * (o - 1)
                        })
                    }
                })
            })
        })
    })(); 
	
	//五彩球
	(function() {
        var k = null;
        var j = document.getElementById("tar");
        j.onmousedown = function(m) {
            var o = 0;
            var l = m || event;
            k = setInterval(function() {
                o = rnd(1, 30);
                var n = document.createElement("div");
                n.style.width = o + "px";
                n.style.height = o + "px";
                n.style.left = l.clientX - getPos(j).left + "px";
                n.style.top = l.clientY - getPos(j).top + "px";
                n.style.marginLeft = -o / 2 + "px";
                n.style.marginTop = -o / 2 + "px";
                n.style.background = "rgb(" + rnd(0, 255) + "," + rnd(0, 255) + "," + rnd(0, 255) + ")";
                j.appendChild(n);
                setTimeout(function() {
                    n.parentNode.removeChild(n)
                },
                1000);
                move(n, {
                    left: rnd(0, 300),
                    top: rnd(0, 300)
                })
            },
            30);
            j.onmouseup = function() {
                clearInterval(k)
            };
            return false
        }
    })(); 
	
	
	//苹果菜单
	(function(){
		var oMenu=document.getElementById('menu');
		var aImg=oMenu.getElementsByTagName('img');
		var oDiv=document.getElementById('div1');
		oMenu.onmousemove=function(ev){
			var oEvent=ev || event;
			for(var i=0;i<aImg.length;i++)
			{
				var left=aImg[i].offsetLeft+aImg[i].offsetWidth/2;
				var top=aImg[i].offsetTop+aImg[i].offsetHeight/2+oDiv.offsetTop;
				var disX=oEvent.clientX-left-getPos(oMenu).left;
				var disY=oEvent.clientY-top-getPos(oMenu).top;
				var dis=Math.sqrt(Math.pow(disX,2)+Math.pow(disY,2));

				var scale=1-dis/200;
				if(scale<0.5)
				{
				scale=0.5;
				}
				aImg[i].style.width=scale*128+'px';
				aImg[i].style.height=scale*128+'px';
			}

			
			
		};
		})();
	
	//技能
    var g = document.getElementById("profession");
    var e = g.offsetWidth / 2;
    var f = 6;
    var h = getByClass(g, "skill");
    var c = 0;
    g.onclick = b;
    function b() {
        c++;
        for (var j = 0; j < f; j++) { (function(k) {
                var l = 360 * j / f;
                i(h[k], l,
                function() {
                    var m = h[k].getElementsByTagName("ul")[0];
                    if (m) {
                        move(m, {
                            width: 280
                        })
                    }
                })
            })(j)
        }
    }
    function i(m, l, o) {
        var q = 0;
        var j = l - q;
        var k = Math.floor(1000 / 30);
        var p = 0;
        clearInterval(m.timer);
        m.timer = setInterval(function() {
            p++;
            var r = q + j * p / k;
            var n = e + Math.sin(d(r)) * e;
            var s = e - Math.cos(d(r)) * e;
            m.style.left = n + "px";
            m.style.top = s + "px";
            if (p == k) {
                clearInterval(m.timer);
                o && o()
            }
        },
        30)
    }
    function d(j) {
        return j * Math.PI / 180
    } (function() {
        var l = document.getElementById("maxim");
        var o = "Genius is 1% inspiration and 99% perspiration";
        var j = [];
        for (var k = 0; k < o.length; k++) {
            var m = document.createElement("span");
            m.innerHTML = o.charAt(k);
            l.appendChild(m);
            j.push(m)
        }
        var q = 0;
        var p = setInterval(function() {
            move(j[q], {
                opacity: 1
            },
            {
                duration: 150
            });
            q++;
            if (q == j.length) {
                clearInterval(p)
            }
        },
        100)
    })(); (function() {
        var m = document.getElementById("res_ball");
        var k = document.getElementById("res");
        var l = k.offsetWidth / 2;
        var j = 0;
        setInterval(function() {
            j = j + 10;
            var n = l + Math.sin(d(j)) * l;
            var o = l - Math.cos(d(j)) * l;
            m.style.left = n + "px";
            m.style.top = o + "px"
        },
        30)
    })();
    function d(j) {
        return j * Math.PI / 180
    }
});