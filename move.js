var Tween = {
    Linear: function(e, a, g, f) {
        return g * e / f + a
    },
    Quad: {
        easeIn: function(e, a, g, f) {
            return g * (e /= f) * e + a
        },
        easeOut: function(e, a, g, f) {
            return - g * (e /= f) * (e - 2) + a
        },
        easeInOut: function(e, a, g, f) {
            if ((e /= f / 2) < 1) {
                return g / 2 * e * e + a
            }
            return - g / 2 * ((--e) * (e - 2) - 1) + a
        }
    },
    Cubic: {
        easeIn: function(e, a, g, f) {
            return g * (e /= f) * e * e + a
        },
        easeOut: function(e, a, g, f) {
            return g * ((e = e / f - 1) * e * e + 1) + a
        },
        easeInOut: function(e, a, g, f) {
            if ((e /= f / 2) < 1) {
                return g / 2 * e * e * e + a
            }
            return g / 2 * ((e -= 2) * e * e + 2) + a
        }
    },
    Quart: {
        easeIn: function(e, a, g, f) {
            return g * (e /= f) * e * e * e + a
        },
        easeOut: function(e, a, g, f) {
            return - g * ((e = e / f - 1) * e * e * e - 1) + a
        },
        easeInOut: function(e, a, g, f) {
            if ((e /= f / 2) < 1) {
                return g / 2 * e * e * e * e + a
            }
            return - g / 2 * ((e -= 2) * e * e * e - 2) + a
        }
    },
    Quint: {
        easeIn: function(e, a, g, f) {
            return g * (e /= f) * e * e * e * e + a
        },
        easeOut: function(e, a, g, f) {
            return g * ((e = e / f - 1) * e * e * e * e + 1) + a
        },
        easeInOut: function(e, a, g, f) {
            if ((e /= f / 2) < 1) {
                return g / 2 * e * e * e * e * e + a
            }
            return g / 2 * ((e -= 2) * e * e * e * e + 2) + a
        }
    },
    Sine: {
        easeIn: function(e, a, g, f) {
            return - g * Math.cos(e / f * (Math.PI / 2)) + g + a
        },
        easeOut: function(e, a, g, f) {
            return g * Math.sin(e / f * (Math.PI / 2)) + a
        },
        easeInOut: function(e, a, g, f) {
            return - g / 2 * (Math.cos(Math.PI * e / f) - 1) + a
        }
    },
    Expo: {
        easeIn: function(e, a, g, f) {
            return (e == 0) ? a: g * Math.pow(2, 10 * (e / f - 1)) + a
        },
        easeOut: function(e, a, g, f) {
            return (e == f) ? a + g: g * ( - Math.pow(2, -10 * e / f) + 1) + a
        },
        easeInOut: function(e, a, g, f) {
            if (e == 0) {
                return a
            }
            if (e == f) {
                return a + g
            }
            if ((e /= f / 2) < 1) {
                return g / 2 * Math.pow(2, 10 * (e - 1)) + a
            }
            return g / 2 * ( - Math.pow(2, -10 * --e) + 2) + a
        }
    },
    Circ: {
        easeIn: function(e, a, g, f) {
            return - g * (Math.sqrt(1 - (e /= f) * e) - 1) + a
        },
        easeOut: function(e, a, g, f) {
            return g * Math.sqrt(1 - (e = e / f - 1) * e) + a
        },
        easeInOut: function(e, a, g, f) {
            if ((e /= f / 2) < 1) {
                return - g / 2 * (Math.sqrt(1 - e * e) - 1) + a
            }
            return g / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + a
        }
    },
    Elastic: {
        easeIn: function(g, e, k, j, f, i) {
            if (g == 0) {
                return e
            }
            if ((g /= j) == 1) {
                return e + k
            }
            if (!i) {
                i = j * 0.3
            }
            if (!f || f < Math.abs(k)) {
                f = k;
                var h = i / 4
            } else {
                var h = i / (2 * Math.PI) * Math.asin(k / f)
            }
            return - (f * Math.pow(2, 10 * (g -= 1)) * Math.sin((g * j - h) * (2 * Math.PI) / i)) + e
        },
        easeOut: function(g, e, k, j, f, i) {
            if (g == 0) {
                return e
            }
            if ((g /= j) == 1) {
                return e + k
            }
            if (!i) {
                i = j * 0.3
            }
            if (!f || f < Math.abs(k)) {
                f = k;
                var h = i / 4
            } else {
                var h = i / (2 * Math.PI) * Math.asin(k / f)
            }
            return (f * Math.pow(2, -10 * g) * Math.sin((g * j - h) * (2 * Math.PI) / i) + k + e)
        },
        easeInOut: function(g, e, k, j, f, i) {
            if (g == 0) {
                return e
            }
            if ((g /= j / 2) == 2) {
                return e + k
            }
            if (!i) {
                i = j * (0.3 * 1.5)
            }
            if (!f || f < Math.abs(k)) {
                f = k;
                var h = i / 4
            } else {
                var h = i / (2 * Math.PI) * Math.asin(k / f)
            }
            if (g < 1) {
                return - 0.5 * (f * Math.pow(2, 10 * (g -= 1)) * Math.sin((g * j - h) * (2 * Math.PI) / i)) + e
            }
            return f * Math.pow(2, -10 * (g -= 1)) * Math.sin((g * j - h) * (2 * Math.PI) / i) * 0.5 + k + e
        }
    },
    Back: {
        easeIn: function(e, a, h, g, f) {
            if (f == undefined) {
                f = 1.70158
            }
            return h * (e /= g) * e * ((f + 1) * e - f) + a
        },
        easeOut: function(e, a, h, g, f) {
            if (f == undefined) {
                f = 1.70158
            }
            return h * ((e = e / g - 1) * e * ((f + 1) * e + f) + 1) + a
        },
        easeInOut: function(e, a, h, g, f) {
            if (f == undefined) {
                f = 1.70158
            }
            if ((e /= g / 2) < 1) {
                return h / 2 * (e * e * (((f *= (1.525)) + 1) * e - f)) + a
            }
            return h / 2 * ((e -= 2) * e * (((f *= (1.525)) + 1) * e + f) + 2) + a
        }
    },
    Bounce: {
        easeIn: function(e, a, g, f) {
            return g - Tween.Bounce.easeOut(f - e, 0, g, f) + a
        },
        easeOut: function(e, a, g, f) {
            if ((e /= f) < (1 / 2.75)) {
                return g * (7.5625 * e * e) + a
            } else {
                if (e < (2 / 2.75)) {
                    return g * (7.5625 * (e -= (1.5 / 2.75)) * e + 0.75) + a
                } else {
                    if (e < (2.5 / 2.75)) {
                        return g * (7.5625 * (e -= (2.25 / 2.75)) * e + 0.9375) + a
                    } else {
                        return g * (7.5625 * (e -= (2.625 / 2.75)) * e + 0.984375) + a
                    }
                }
            }
        },
        easeInOut: function(e, a, g, f) {
            if (e < f / 2) {
                return Tween.Bounce.easeIn(e * 2, 0, g, f) * 0.5 + a
            } else {
                return Tween.Bounce.easeOut(e * 2 - f, 0, g, f) * 0.5 + g * 0.5 + a
            }
        }
    }
};
function move(f, i, j) {
    j = j || {};
    var e = j.duration || 1000;
    var h = j.easing || Tween.Linear;
    var b = {};
    var d = {};
    for (var a in i) {
        b[a] = parseFloat(getStyle(f, a));
        d[a] = parseFloat(i[a]) - b[a]
    }
    var g = Math.floor(e / 30);
    var c = 0;
    clearInterval(f.timer);
    f.timer = setInterval(function() {
        c++;
        for (var k in i) {
            var l = h(e * c / g, b[k], d[k], e);
            if (k == "opacity") {
                f.style[k] = l
            } else {
                f.style[k] = l + "px"
            }
        }
        if (c == g) {
            clearInterval(f.timer);
            j.complete && j.complete()
        }
    },
    30)
}
function getStyle(b, a) {
    return (b.currentStyle || getComputedStyle(b, false))[a]
};