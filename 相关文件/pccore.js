(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (Ba4e) {
        if (!Ba4e || !Ba4e.length) return null;
        var ZW4a = window;
        for (var a = Ba4e.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; ZW4a = ZW4a[a[i]] = ZW4a[a[i]] || {}, i++);
        return ZW4a
    };
    NEJ.Q = function (bL5Q, Ba4e) {
        bL5Q = bL5Q || NEJ.O;
        var bs5x = Ba4e.split(".");
        for (var i = 0, l = bs5x.length; i < l; i++) {
            bL5Q = bL5Q[bs5x[i]];
            if (!bL5Q) break
        }
        return bL5Q
    };
    NEJ.C = function () {
        var bsv9m = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bLc4g = function (A5F, bv5A) {
            for (var x in bv5A)
                if (A5F == bv5A[x]) return x;
            return null
        };
        var brv8n = {
                cl5q: 0,
                bj5o: 1,
                bC5H: 2,
                bR5W: 3,
                bH5M: 4,
                eW7P: 5,
                jQ9H: 6,
                eg7Z: 7
            },
            tU2x = {
                cr5w: 0,
                bk5p: 1,
                bG5L: 2,
                cc5h: 3,
                bM5R: 4,
                gE8w: 5,
                kl9c: 6,
                fT7M: 7
            };
        return function () {
            var ff7Y = function () {
                this.bLn4r();
                return this.cl5q.apply(this, arguments)
            };
            ff7Y.prototype.bLn4r = NEJ.F;
            ff7Y.prototype.cl5q = NEJ.F;
            ff7Y.O5T = function (AA4E, buB9s) {
                if (bsv9m(AA4E)) return;
                if (buB9s == null || !!buB9s) NEJ.X(this, AA4E, bsv9m);
                this.bOM5R = AA4E;
                this.ch5m = AA4E.prototype;
                var bB5G = function () {};
                bB5G.prototype = AA4E.prototype;
                this.prototype = new bB5G;
                var CN4R = this.prototype;
                CN4R.constructor = this;
                var dN7G;
                for (var x in brv8n) {
                    dN7G = bLc4g(brv8n[x], tU2x);
                    if (!dN7G || !this.ch5m[x]) continue;
                    CN4R[x] = function (T5Y) {
                        return function () {
                            this[T5Y].apply(this, arguments)
                        }
                    }(dN7G)
                }
                var Eh5m = {};
                for (var x in tU2x) {
                    dN7G = bLc4g(tU2x[x], brv8n);
                    if (!dN7G || !this.ch5m[dN7G]) continue;
                    Eh5m[dN7G] = AA4E;
                    CN4R[x] = function (T5Y) {
                        return function () {
                            var m4q, bB5G = this.bro8g[T5Y],
                                bam4q = bB5G.prototype[T5Y];
                            this.bro8g[T5Y] = bB5G.bOM5R || AA4E;
                            if (!!bam4q) m4q = bam4q.apply(this, arguments);
                            this.bro8g[T5Y] = AA4E;
                            return m4q
                        }
                    }(dN7G)
                }
                CN4R.bLn4r = function () {
                    this.bro8g = NEJ.X({}, Eh5m)
                };
                CN4R.cyr4v = CN4R.cr5w;
                return CN4R
            };
            return ff7Y
        }
    }();
    NEJ.X = function (fL7E, bN5S, dC6w) {
        if (!fL7E || !bN5S) return fL7E;
        dC6w = dC6w || NEJ.F;
        for (var x in bN5S) {
            if (bN5S.hasOwnProperty(x) && !dC6w(bN5S[x], x)) fL7E[x] = bN5S[x]
        }
        return fL7E
    };
    NEJ.EX = function (fL7E, bN5S) {
        if (!fL7E || !bN5S) return fL7E;
        for (var x in fL7E) {
            if (fL7E.hasOwnProperty(x) && bN5S[x] != null) fL7E[x] = bN5S[x]
        }
        return fL7E
    };
    var Jp6j = Function.prototype;
    Jp6j.ee7X = function (kO9F, Rl0x) {
        var f = NEJ.F,
            Rl0x = Rl0x || f,
            kO9F = kO9F || f,
            da6U = this;
        return function () {
            var d4h = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            kO9F(d4h);
            if (!d4h.stopped) {
                d4h.value = da6U.apply(this, d4h.args);
                Rl0x(d4h)
            }
            return d4h.value
        }
    };
    Jp6j.g4k = function () {
        var bf5k = arguments,
            fL7E = arguments[0],
            bqG8y = this;
        return function () {
            var uH2x = NEJ.R.slice.call(bf5k, 1);
            NEJ.R.push.apply(uH2x, arguments);
            return bqG8y.apply(fL7E || window, uH2x)
        }
    };
    Jp6j.dS7L = function () {
        var bf5k = arguments,
            fL7E = NEJ.R.shift.call(bf5k),
            bqG8y = this;
        return function () {
            NEJ.R.push.apply(arguments, bf5k);
            return bqG8y.apply(fL7E || window, arguments)
        }
    };
    var Jp6j = String.prototype;
    if (!Jp6j.trim) {
        Jp6j.trim = function () {
            var cO6I = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(cO6I, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        M5R = c4g("nej.p"),
        ZS4W = window.navigator.platform,
        tr1x = window.navigator.userAgent;
    var jZ9Q = {
        mac: ZS4W,
        win: ZS4W,
        linux: ZS4W,
        ipad: tr1x,
        ipod: tr1x,
        iphone: ZS4W,
        android: tr1x
    };
    M5R.ZQ4U = jZ9Q;
    for (var x in jZ9Q) jZ9Q[x] = (new RegExp(x, "i")).test(jZ9Q[x]);
    jZ9Q.ios = jZ9Q.ipad || jZ9Q.iphone || jZ9Q.ipod;
    jZ9Q.tablet = jZ9Q.ipad;
    jZ9Q.desktop = jZ9Q.mac || jZ9Q.win || jZ9Q.linux && !jZ9Q.android;
    var hB8t = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    M5R.dd6X = hB8t;
    if (/msie\s+(.*?);/i.test(tr1x) || /trident\/.+rv:([\d\.]+)/i.test(tr1x)) {
        hB8t.engine = "trident";
        hB8t.browser = "ie";
        hB8t.version = RegExp.$1;
        hB8t.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var nW0x = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        hB8t.release = nW0x[document.documentMode] || nW0x[parseInt(hB8t.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(tr1x)) {
        hB8t.engine = "webkit";
        hB8t.release = RegExp.$1 || "";
        hB8t.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(tr1x)) {
        hB8t.engine = "gecko";
        hB8t.release = RegExp.$1 || "";
        hB8t.browser = "firefox";
        hB8t.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(tr1x)) hB8t.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(tr1x)) {
        hB8t.engine = "presto";
        hB8t.release = RegExp.$1 || "";
        hB8t.browser = "opera";
        hB8t.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(tr1x)) hB8t.version = RegExp.$1 || ""
    }
    if (hB8t.browser == "unknow") {
        var nW0x = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = nW0x.length, T5Y; i < l; i++) {
            T5Y = nW0x[i] == "safari" ? "version" : nW0x[i];
            if ((new RegExp(T5Y + "/(.*?)(?=\\s|$)", "i")).test(tr1x)) {
                hB8t.browser = nW0x[i];
                hB8t.version = RegExp.$1.trim();
                break
            }
        }
    }
    M5R.bxu0x = {};
    var ZM4Q = hB8t.engine != "trident";
    M5R.ms9j = {
        gecko: hB8t.engine != "gecko",
        webkit: hB8t.engine != "webkit",
        presto: hB8t.engine != "presto",
        trident0: ZM4Q || hB8t.release > "2.0",
        trident1: ZM4Q || hB8t.release < "6.0",
        trident2: ZM4Q || hB8t.release > "3.0",
        trident: ZM4Q || hB8t.release >= "6.0"
    }
})();
(function () {
    var ir8j = NEJ.P("nej.c"),
        Q5V = {};
    var bqm8e = function () {
        var cO6I = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V5a) {
            V5a = V5a || "";
            if (cO6I.test(V5a)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var QX0x = function () {
        var byq0x = function (i4m, bv5A) {
            if (!i4m || !i4m.length) return;
            for (var i = 0, l = i4m.length, kC9t; i < l; i++) {
                kC9t = i4m[i];
                if (kC9t.indexOf("://") > 0) bv5A[bqm8e(kC9t)] = kC9t
            }
        };
        var bb5g = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function (bN5S) {
            ir8j.Ji6c("root", bN5S.root || "/res/");
            var bpV8N, fr7k = ir8j.y5D("root");
            for (var x in bb5g) {
                bpV8N = bb5g[x];
                ir8j.Ji6c(x, bN5S[bpV8N.name] || fr7k + bpV8N.dft)
            }
            var zC3x = bN5S.p_csrf;
            if (zC3x == !0) {
                zC3x = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            ir8j.Ji6c("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, zC3x));
            Q5V.frames = {};
            byq0x(bN5S.p_frame, Q5V.frames);
            Q5V.flashs = {};
            byq0x(bN5S.p_flash, Q5V.flashs)
        }
    }();
    ir8j.Ji6c = function (J5O, A5F) {
        Q5V[J5O] = A5F
    };
    ir8j.y5D = function (J5O) {
        return Q5V[J5O]
    };
    ir8j.bOO5T = function (V5a) {
        var uf2x = bqm8e(V5a);
        return Q5V.frames[uf2x] || uf2x + "/res/nej_proxy_frame.html"
    };
    ir8j.bOV5a = function (V5a) {
        return Q5V.flashs[bqm8e(V5a)]
    };
    QX0x(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c4g = NEJ.P,
        M5R = c4g("nej.p"),
        ir8j = c4g("nej.c"),
        bN5S = window.NEJ_CONF || NEJ.O;
    if (M5R.ms9j.trident) return;
    ir8j.Ji6c("storage.swf", bN5S.storage || ir8j.y5D("root") + "nej_storage.swf");
    if (M5R.dd6X.release < "4.0") {
        ir8j.Ji6c("blank.png", bN5S.blank || ir8j.y5D("root") + "nej_blank.gif")
    }
    var i4m = bN5S.xdr,
        fW7P = /^(https?:\/\/.*?)(?=\/|$)/i,
        jn8f = /[\/?=&]/i;
    var bsJ9A = function (V5a) {
        return (fW7P.test(V5a) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i4m && !!i4m.length)
        for (var i = i4m.length - 1, V5a, J5O; i >= 0; i--) {
            V5a = i4m[i];
            J5O = bsJ9A(V5a);
            if (!!J5O) ir8j.Ji6c(J5O, V5a)
        }
    ir8j.cym4q = function (V5a) {
        var J5O = bsJ9A(V5a);
        if (!J5O) {
            if (jn8f.test(V5a)) {
                J5O = location.protocol + "//" + location.host
            } else if (V5a.indexOf("://") < 0) {
                J5O = location.protocol + "//" + V5a
            } else {
                J5O = V5a
            }
        }
        return ir8j.y5D(J5O) || J5O + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c4g = NEJ.P,
        ir8j = c4g("nej.c"),
        M5R = c4g("nej.g"),
        gc7V = +(new Date);
    M5R.cyl4p = 1e4 - gc7V;
    M5R.bpQ8I = 10001 - gc7V;
    M5R.cyj4n = 10002 - gc7V;
    M5R.bzL1x = 10003 - gc7V;
    M5R.bPi5n = 10004 - gc7V;
    M5R.cyh4l = 10005 - gc7V;
    M5R.bpO8G = 10006 - gc7V;
    M5R.bPr5w = 10007 - gc7V;
    M5R.wW3x = "Content-Type";
    M5R.cyd4h = "text/plain";
    M5R.DF5K = "multipart/form-data";
    M5R.bPt5y = "application/x-www-form-urlencoded";
    M5R.bpE8w = ir8j.y5D("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c4g = NEJ.P,
        fb7U = NEJ.R,
        M5R = c4g("nej.p"),
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        ba5f = c4g("nej.h");
    var kR9I = M5R.dd6X.prefix,
        byB0x = M5R.bxu0x,
        bPw5B = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})"
        },
        bPB5G = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        },
        QR0x = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var QX0x = function () {
        var rh1x = ba5f.bCS1x();
        byB0x.css3d = !!rh1x && rh1x.m41 != null;
        var cO6I = /-([a-z])/g;
        for (var x in QR0x) {
            QR0x[bEh2x(x)] = QR0x[x]
        }
    };
    var bEh2x = function () {
        var cO6I = /-([a-z])/g;
        return function (T5Y) {
            T5Y = T5Y || "";
            return T5Y.replace(cO6I, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bEi2x = function (T5Y) {
        return (!byB0x.css3d ? bPw5B : bPB5G)[T5Y]
    };
    var bEq2x = function () {
        var cO6I = /\s+/;
        return function (ff7Y) {
            ff7Y = (ff7Y || "").trim();
            return !!ff7Y ? ff7Y.split(cO6I) : null
        }
    }();
    var Zv4z = function (E5J, t4x, ff7Y) {
        E5J = a4e.y5D(E5J);
        if (!E5J) return;
        k4o.bc5h(bEq2x(ff7Y), function (dE7x) {
            E5J.classList[t4x](dE7x)
        })
    };
    ba5f.Jh6b = function (i4m) {
        return fb7U.slice.call(i4m, 0)
    };
    ba5f.bpv8n = function (E5J) {
        return ba5f.Jh6b(E5J.children)
    };
    ba5f.bpt8l = function (E5J, ff7Y) {
        return ba5f.Jh6b(E5J.getElementsByClassName(ff7Y))
    };
    ba5f.bpr8j = function (E5J, Je6Y) {
        Zv4z(E5J, "add", Je6Y)
    };
    ba5f.bpp8h = function (E5J, Jd6X) {
        Zv4z(E5J, "remove", Jd6X)
    };
    ba5f.QI0x = function (E5J, Jd6X, Je6Y) {
        Zv4z(E5J, "remove", Jd6X);
        Zv4z(E5J, "add", Je6Y)
    };
    ba5f.bpl8d = function (E5J, ff7Y) {
        E5J = a4e.y5D(E5J);
        if (!E5J) return !1;
        var i4m = E5J.classList;
        if (!i4m || !i4m.length) return !1;
        return k4o.cT6N(bEq2x(ff7Y), function (dE7x) {
            return i4m.contains(dE7x)
        }) >= 0
    };
    ba5f.bpk8c = function (E5J, dE7x) {};
    ba5f.bpj8b = function (E5J) {};
    ba5f.bpi8a = function (fD7w, mD9u) {
        fD7w.selectionEnd = mD9u.end || 0;
        fD7w.selectionStart = mD9u.start || 0;
        fD7w.focus()
    };
    ba5f.bph8Z = function (fD7w) {
        return {
            end: fD7w.selectionEnd,
            start: fD7w.selectionStart
        }
    };
    ba5f.bpc8U = function () {
        var CH4L = function (dE7x, d4h) {
            var E5J = h4l.U5Z(d4h);
            if (!E5J.value) a4e.x5C(E5J, dE7x)
        };
        var Jb6V = function (dE7x, d4h) {
            a4e.z5E(h4l.U5Z(d4h), dE7x)
        };
        return function (E5J, eI7B, dE7x) {
            if (eI7B == 1) {
                h4l.s4w(E5J, "blur", CH4L.g4k(null, dE7x))
            }
            if (eI7B == 1 || eI7B == -1) {
                h4l.s4w(E5J, "focus", Jb6V.g4k(null, dE7x))
            }
        }
    }();
    ba5f.boY8Q = function (G5L) {
        return (new XMLSerializer).serializeToString(G5L) || ""
    };
    ba5f.boX8P = function (yU3x) {
        var fr7k = (new DOMParser).parseFromString(yU3x, "text/xml").documentElement;
        return fr7k.nodeName == "parsererror" ? null : fr7k
    };
    ba5f.boV8N = function (E5J) {};
    ba5f.mO0x = function (E5J) {
        return null
    };
    ba5f.boU8M = function (E5J) {
        return null
    };
    ba5f.boT8L = function (dF7y) {};
    ba5f.boS8K = function () {
        var bf5k = ba5f.Jh6b(arguments);
        bf5k[0] = a4e.y5D(bf5k[0]);
        if (!bf5k[0]) return null;
        bf5k[1] = (bf5k[1] || "").toLowerCase();
        if (!bf5k[1]) return null;
        return bf5k
    };
    ba5f.yI3x = function () {
        var vf2x = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            },
            iq8i = {
                transitionend: "TransitionEnd",
                animationend: "AnimationEnd",
                animationstart: "AnimationStart",
                animationiteration: "AnimationIteration"
            };
        var bPL5Q = function (t4x) {
            return (kR9I.evt || kR9I.pro) + t4x
        };
        return function () {
            var bf5k = ba5f.boS8K.apply(ba5f, arguments);
            if (!bf5k) return;
            var Ze4i = iq8i[bf5k[1]],
                Zd4h = vf2x[bf5k[1]];
            if (!!Ze4i) {
                bf5k[4] = bf5k[1];
                bf5k[1] = bPL5Q(Ze4i)
            } else if (!!Zd4h) {
                var T5Y = "on" + bf5k[1];
                if (!(T5Y in bf5k[0])) {
                    bf5k[4] = bf5k[1];
                    bf5k[1] = Zd4h
                }
            }
            return bf5k
        }
    }();
    ba5f.boN8F = function () {
        var bf5k = arguments;
        bf5k[0].addEventListener(bf5k[1], bf5k[2], !!bf5k[3])
    };
    ba5f.Zc4g = function () {
        var bf5k = arguments;
        bf5k[0].removeEventListener(bf5k[1], bf5k[2], !!bf5k[3])
    };
    ba5f.boJ8B = function (E5J, t4x, e4i) {
        var d4h = document.createEvent("Event");
        d4h.initEvent(t4x, !0, !0);
        NEJ.X(d4h, e4i);
        E5J.dispatchEvent(d4h)
    };
    ba5f.bCS1x = function () {
        var fW7P = /\((.*?)\)/,
            jn8f = /\s*,\s*/,
            i4m = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var YZ4d = function (rh1x) {
            var ie8W = {};
            if (fW7P.test(rh1x || "")) {
                k4o.bc5h(RegExp.$1.split(jn8f), function (A5F, r4v) {
                    ie8W[i4m[r4v]] = A5F || ""
                })
            }
            return ie8W
        };
        return function (rh1x) {
            if (!!window.CSSMatrix) return new CSSMatrix(rh1x);
            var T5Y = kR9I.clz + "CSSMatrix";
            if (!!window[T5Y]) return new window[T5Y](rh1x || "");
            return YZ4d(rh1x)
        }
    }();
    ba5f.bMO4S = function () {
        var cO6I = /\{(.*?)\}/g;
        return function (T5Y, bv5A) {
            bv5A = bv5A || o;
            var pL0x = bEi2x(T5Y);
            return !pL0x ? "" : pL0x.replace(cO6I, function ($1, $2) {
                var bs5x = $2.split("|");
                return bv5A[bs5x[0]] || bs5x[1] || "0"
            })
        }
    }();
    ba5f.boF8x = function (E5J, T5Y, A5F) {
        E5J.style[ba5f.bst9k(T5Y)] = A5F
    };
    ba5f.bst9k = function () {
        var cO6I = /^[a-z]/,
            boD8v = kR9I.css;
        var bPO5T = function (T5Y) {
            return T5Y.replace(cO6I, function ($1) {
                return boD8v + $1.toUpperCase()
            })
        };
        return function (T5Y) {
            T5Y = bEh2x(T5Y);
            var bPU5Z = ba5f.bPV5a(T5Y, QR0x);
            return bPU5Z ? bPO5T(T5Y) : T5Y
        }
    }();
    ba5f.bPV5a = function () {
        var cO6I = /^([a-z]+?)[A-Z]/;
        return function (T5Y, bv5A) {
            if (!bv5A[T5Y]) {
                if (cO6I.test(T5Y)) T5Y = RegExp.$1
            }
            return !!bv5A[T5Y]
        }
    }();
    ba5f.bPX5c = function () {
        var cO6I = /\$<(.*?)>/gi,
            boD8v = "-" + kR9I.css.toLowerCase() + "-";
        return function (jg8Y) {
            return jg8Y.replace(cO6I, function ($1, $2) {
                var es7l = $2,
                    bs5x = es7l.split("|"),
                    pL0x = bEi2x(bs5x[0]);
                if (!!pL0x) {
                    return ba5f.bMO4S(bs5x[0], k4o.hp8h(bs5x[1]))
                }
                return !ba5f.bPY5d(es7l, QR0x) ? es7l : boD8v + es7l
            })
        }
    }();
    ba5f.bPY5d = function (T5Y, bv5A) {
        return !!bv5A[T5Y]
    };
    ba5f.bou8m = function (cd5i, jg8Y) {
        cd5i.textContent = jg8Y
    };
    ba5f.bos8k = function (cd5i, jg8Y) {
        var wQ3x = cd5i.sheet,
            br5w = wQ3x.cssRules.length;
        wQ3x.insertRule(jg8Y, br5w);
        return wQ3x.cssRules[br5w]
    };
    ba5f.cxQ4U = function (E5J, e4i) {};
    ba5f.YR4V = function (YN2x) {
        return (YN2x || "").toLowerCase() != "transparent"
    };
    ba5f.bQa5f = function (E5J) {};
    ba5f.bnW7P = function (E5J, T5Y) {
        if (!!E5J.getAttribute) return E5J.getAttribute(T5Y);
        return ""
    };
    ba5f.YG2x = function (fd7W) {
        a4e.cK6E(fd7W)
    };
    QX0x()
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        M5R = c4g("nej.p"),
        ba5f = c4g("nej.h");
    if (M5R.ms9j.trident0) return;
    var gc7V = +(new Date);
    Q5V = {};
    ba5f.bpk8c = ba5f.bpk8c.ee7X(function (d4h) {
        d4h.stopped = !0;
        var bf5k = d4h.args,
            C5H = a4e.kr9i(bf5k[0]),
            J5O = "hover-" + C5H;
        if (!C5H || !!Q5V[J5O]) return;
        Q5V[J5O] = !0;
        h4l.s4w(C5H, "mouseenter", a4e.z5E.g4k(a4e, C5H, bf5k[1]));
        h4l.s4w(C5H, "mouseleave", a4e.x5C.g4k(a4e, C5H, bf5k[1]))
    });
    ba5f.bpj8b = function () {
        var cxO4S = function () {};
        return ba5f.bpj8b.ee7X(function (d4h) {
            d4h.stopped = !0;
            var E5J = d4h.args[0],
                C5H = "fixed-" + a4e.kr9i(E5J);
            if (!!Q5V[C5H]) return;
            var bb5g = {};
            Q5V[C5H] = bb5g
        })
    }();
    ba5f.boV8N = ba5f.boV8N.ee7X(function (d4h) {
        d4h.stopped = !0;
        var E5J = d4h.args[0],
            cd5i = E5J.style,
            bMl4p = a4e.og0x();
        cd5i.width = bMl4p.scrollWidth + "px";
        cd5i.height = bMl4p.scrollHeight + "px"
    });
    ba5f.mO0x = ba5f.mO0x.ee7X(function (d4h) {
        d4h.stopped = !0;
        var E5J = d4h.args[0],
            kd9U = Q5V[E5J.msk];
        if (!kd9U) {
            E5J.msk = gc7V++;
            kd9U = a4e.cQ6K("iframe");
            kd9U.style.position = "absolute";
            Q5V[E5J.msk] = kd9U
        }
        d4h.value = kd9U;
        var cd5i = kd9U.style;
        cd5i.top = (parseInt(a4e.cW6Q(E5J, "top")) || 0) + "px";
        cd5i.left = (parseInt(a4e.cW6Q(E5J, "left")) || 0) + "px";
        cd5i.width = E5J.offsetWidth + "px";
        cd5i.height = E5J.offsetHeight + "px";
        E5J.insertAdjacentElement("beforeBegin", kd9U)
    });
    ba5f.boU8M = ba5f.boU8M.ee7X(function (d4h) {
        d4h.stopped = !0;
        var kd9U = Q5V[d4h.args[0].msk];
        if (!!kd9U) a4e.lV9M(kd9U)
    })
})();
(function () {
    var c4g = NEJ.P,
        M5R = c4g("nej.p"),
        a4e = c4g("nej.e"),
        ba5f = c4g("nej.h");
    if (M5R.ms9j.trident1) return;
    ba5f.yI3x = function () {
        var vf2x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return ba5f.yI3x.ee7X(function (d4h) {
            var bf5k = ba5f.boS8K.apply(ba5f, d4h.args);
            if (!bf5k) {
                d4h.stopped = !0;
                return
            }
            var t4x = vf2x[bf5k[1]];
            if (!!t4x && ("on" + t4x).toLowerCase() in bf5k[0]) {
                bf5k[4] = bf5k[1];
                bf5k[1] = t4x;
                d4h.stopped = !0;
                d4h.value = bf5k
            }
        })
    }();
    ba5f.YR4V = function (YN2x) {
        return !0
    };
    ba5f.YG2x = ba5f.YG2x.ee7X(function (d4h) {
        d4h.stopped = !0;
        var fd7W = d4h.args[0];
        a4e.Y5d(fd7W, "display", "none");
        try {
            fd7W.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        M5R = c4g("nej.p"),
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        ba5f = c4g("nej.h"),
        bnL7E = {};
    if (M5R.ms9j.trident) return;
    ba5f.Jh6b = ba5f.Jh6b.ee7X(function (d4h) {
        d4h.stopped = !0;
        var i4m = d4h.args[0];
        if (!i4m) {
            d4h.value = null;
            return
        }
        var r4v = 0,
            m4q = [];
        while (!!i4m[r4v]) {
            m4q.push(i4m[r4v++])
        }
        d4h.value = m4q
    });
    ba5f.bpv8n = ba5f.bpv8n.ee7X(function (d4h) {
        d4h.stopped = !0;
        var bs5x = [];
        k4o.bc5h(d4h.args[0].childNodes, function (f4j) {
            if (f4j.nodeType == 1) bs5x.push(f4j)
        });
        d4h.value = bs5x
    });
    ba5f.bpt8l = ba5f.bpt8l.ee7X(function (d4h) {
        var E5J = d4h.args[0];
        if (!!E5J.getElementsByClassName) return;
        d4h.stopped = !0;
        var m4q = [],
            bnK7D = new RegExp("(\\s|^)(?:" + d4h.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k4o.bc5h(E5J.getElementsByTagName("*"), function (f4j) {
            if (bnK7D.test(f4j.className)) m4q.push(f4j)
        });
        d4h.value = m4q
    });
    ba5f.bpi8a = ba5f.bpi8a.ee7X(function (d4h) {
        var fD7w = d4h.args[0],
            mD9u = d4h.args[1];
        if (fD7w.selectionStart == null) {
            d4h.stopped = !0;
            var cJ6D = fD7w.createTextRange();
            cJ6D.collapse(!0);
            cJ6D.moveStart("character", mD9u.start);
            cJ6D.moveEnd("character", mD9u.end - mD9u.start);
            cJ6D.select();
            fD7w.focus()
        }
    });
    ba5f.bph8Z = ba5f.bph8Z.ee7X(function (d4h) {
        var fD7w = d4h.args[0];
        fD7w.focus();
        if (fD7w.selectionStart == null) {
            d4h.stopped = !0;
            var bxQ0x = document.selection.createRange();
            var bxR0x = fD7w.createTextRange();
            bxR0x.moveToBookmark(bxQ0x.getBookmark());
            var bnA7t = fD7w.createTextRange();
            bnA7t.collapse(!0);
            bnA7t.setEndPoint("EndToStart", bxR0x);
            var iB8t = bnA7t.text.length;
            d4h.value = {
                start: iB8t,
                end: iB8t + bxQ0x.text.length
            }
        }
    });
    ba5f.boY8Q = ba5f.boY8Q.ee7X(function (d4h) {
        if (!!window.XMLSerializer) return;
        d4h.stopped = !0;
        var E5J = d4h.args[0];
        d4h.value = E5J.xml != null ? E5J.xml : E5J.outHTML
    });
    ba5f.boX8P = function () {
        var Qo0x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bQf5k = function () {
            try {
                for (var i = 0, l = Qo0x.length; i < l; i++) return new ActiveXObject(Qo0x[i])
            } catch (ex) {
                return null
            }
        };
        return ba5f.boX8P.ee7X(function (d4h) {
            if (!!window.DOMParser) return;
            d4h.stopped = !0;
            var mS0x = bQf5k();
            if (!!mS0x && mS0x.loadXML(d4h.args[0]) && !mS0x.parseError.errorCode) d4h.value = mS0x.documentElement
        })
    }();
    ba5f.yI3x = function () {
        var iq8i = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in iq8i) bnL7E[iq8i[x]] = !0;
        var bQg5l = function (E5J, t4x) {
            if ("on" + t4x in E5J) return null;
            return iq8i[t4x] || ""
        };
        var bQu5z = function (t4x, da6U) {
            var dr6l = da6U;
            switch (t4x) {
            case "readystatechange":
                dr6l = function (d4h) {
                    var E5J = h4l.U5Z(d4h) || this;
                    if (E5J.readyState == "loaded" || E5J.readyState == "complete") {
                        d4h.target = E5J;
                        da6U.call(E5J, d4h)
                    }
                };
                break;
            case "propertychange":
                dr6l = function (d4h) {
                    var E5J = h4l.U5Z(d4h) || this;
                    if ("value" in E5J && d4h.propertyName == "value") {
                        d4h.target = E5J;
                        da6U.call(E5J, d4h)
                    }
                };
                break
            }
            return dr6l
        };
        return ba5f.yI3x.ee7X(function (d4h) {
            var bf5k = ba5f.boS8K.apply(ba5f, d4h.args);
            if (!bf5k) {
                d4h.stopped = !0;
                return
            }
            var t4x = bQg5l(bf5k[0], bf5k[1]);
            if (!!t4x) {
                d4h.stopped = !0;
                bf5k[4] = bf5k[1];
                bf5k[1] = t4x;
                if (!!bf5k[2]) {
                    bf5k[5] = bf5k[2];
                    bf5k[2] = bQu5z(bf5k[1], bf5k[2])
                }
                d4h.value = bf5k
            }
        }, function (d4h) {
            var bf5k = d4h.value;
            if (!bf5k[0] || !k4o.ga7T(bf5k[2])) return;
            if (!k4o.ga7T(bf5k[5])) bf5k[5] = bf5k[2];
            bf5k[2] = bf5k[2].g4k(bf5k[0])
        })
    }();
    ba5f.boN8F = ba5f.boN8F.ee7X(function (d4h) {
        var bf5k = d4h.args;
        if (!!bnL7E[bf5k[1]] || !document.addEventListener) {
            d4h.stopped = !0;
            bf5k[0].attachEvent("on" + bf5k[1], bf5k[2])
        }
    });
    ba5f.Zc4g = ba5f.Zc4g.ee7X(function (d4h) {
        var bf5k = d4h.args;
        if (!!bnL7E[bf5k[1]] || !document.removeEventListener) {
            d4h.stopped = !0;
            bf5k[0].detachEvent("on" + bf5k[1], bf5k[2])
        }
    });
    ba5f.boJ8B = ba5f.boJ8B.ee7X(function (d4h) {
        if (!document.createEvent) {
            d4h.stopped = !0;
            var bf5k = d4h.args,
                bBo1x = document.createEventObject();
            NEJ.X(bBo1x, bf5k[2]);
            try {
                bf5k[0].fireEvent("on" + bf5k[1], bBo1x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    ba5f.boF8x = ba5f.boF8x.ee7X(function (d4h) {
        var bf5k = d4h.args,
            T5Y = bf5k[1].toLowerCase();
        if (T5Y == "opacity" && !(T5Y in document.body.style)) {
            bf5k[1] = "filter";
            bf5k[2] = "alpha(opacity=" + bf5k[2] * 100 + ")"
        }
    });
    ba5f.bou8m = function () {
        var fc7V = 30;
        return ba5f.bou8m.ee7X(function (d4h) {
            var E5J = d4h.args[0];
            if (!E5J.styleSheet) return;
            d4h.stopped = !0;
            var jg8Y = d4h.args[1];
            var i4m = document.styleSheets;
            if (i4m.length > fc7V) {
                E5J = i4m[fc7V];
                jg8Y = E5J.cssText + jg8Y
            } else {
                E5J = E5J.styleSheet
            }
            E5J.cssText = jg8Y
        })
    }();
    ba5f.bos8k = ba5f.bos8k.ee7X(function (d4h) {
        var bf5k = d4h.args,
            wQ3x = bf5k[0].sheet;
        if (!!wQ3x) return;
        d4h.stopped = !0;
        var wQ3x = bf5k[0].styleSheet,
            br5w = wQ3x.rules.length,
            bs5x = bf5k[1].split(/[\{\}]/);
        wQ3x.addRule(bs5x[0], bs5x[1], br5w);
        d4h.value = wQ3x.rules[br5w]
    });
    ba5f.bpc8U = function () {
        var CH4L = function (dE7x, d4h) {
            a4e.x5C(h4l.U5Z(d4h), dE7x)
        };
        return ba5f.bpc8U.ee7X(function (d4h) {
            if (M5R.dd6X.release >= "4.0") return;
            var bf5k = d4h.args;
            if (bf5k[1] != 1) {
                h4l.s4w(bf5k[0], "blur", CH4L.g4k(null, bf5k[2]));
                bf5k[1] = -1
            }
        })
    }();
    ba5f.YR4V = function (YN2x) {
        return !0
    };
    ba5f.bnW7P = ba5f.bnW7P.ee7X(function (d4h) {
        var bf5k = d4h.args,
            f4j = (bf5k[0].attributes || X5c)[bf5k[1]];
        if (!!f4j) {
            d4h.stopped = !0;
            d4h.value = f4j.value
        }
    }, function (d4h) {
        var bf5k = d4h.args;
        if (bf5k[1] == "maxlength" && d4h.value == 2147483647) d4h.value = ""
    });
    if (M5R.dd6X.release < 5) {
        ba5f.boT8L = function () {
            var eZ7S, fd7W, ji8a = [],
                bnn7g = "cb-" + +(new Date),
                bl5q = '<script>parent.nej.h["' + bnn7g + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bEl2x = function () {
                eZ7S = window.clearTimeout(eZ7S);
                if (!ji8a.length) return;
                var dF7y = ji8a.shift();
                try {
                    var vn2x = fd7W.contentWindow.document;
                    vn2x.open();
                    vn2x.write("<head><title>");
                    vn2x.write(document.title);
                    vn2x.write("</title>");
                    vn2x.write(bl5q.replace("#<HASH>", encodeURIComponent(dF7y)));
                    vn2x.write("</head><body></body>");
                    if (location.hostname != document.domain) vn2x.domain = document.domain;
                    vn2x.close();
                    ba5f[bnn7g] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    ji8a.unshift(dF7y)
                }
                eZ7S = window.setTimeout(bEl2x, 50)
            };
            return ba5f.boT8L.ee7X(function (d4h) {
                d4h.stopped = !0;
                var dF7y = d4h.args[0];
                if (!!ba5f[bnn7g] || !fd7W && !dF7y) return;
                ji8a.push(dF7y);
                if (!fd7W) fd7W = a4e.Yp2x();
                bEl2x()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
})();
(function () {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        ba5f = c4g("nej.h"),
        M5R = c4g("nej.p"),
        Yo2x = M5R.bxu0x;
    if (M5R.ms9j.gecko) return;
    var QX0x = function () {
        Yo2x.css3d = Yo2x.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (hX8P, E5J) {
            if (!hX8P || !E5J) return;
            switch (hX8P) {
            case "beforeEnd":
                this.appendChild(E5J);
                return;
            case "beforeBegin":
                this.parentNode.insertBefore(E5J, this);
                return;
            case "afterBegin":
                !this.firstChild ? this.appendChild(E5J) : this.insertBefore(E5J, this.firstChild);
                return;
            case "afterEnd":
                !this.nextSibling ? this.parentNode.appendChild(E5J) : this.parentNode.insertBefore(E5J, this.nextSibling);
                return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bl5q) {
                this.textContent = bl5q
            })
        }
    };
    ba5f.yI3x = function () {
        var fW7P = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return ba5f.yI3x.ee7X(function (d4h) {
            var bf5k = d4h.args;
            if (fW7P.test(bf5k[1] || "")) {
                d4h.stopped = !0;
                d4h.value = bf5k
            }
        })
    }();
    ba5f.bQa5f = function () {
        var bQw5B = function (d4h) {
            h4l.bh5m(d4h);
            h4l.U5Z(d4h).control.click()
        };
        return function (E5J) {
            h4l.s4w(E5J, "click", bQw5B)
        }
    }();
    QX0x()
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        ba5f = c4g("nej.h");
    var Yh2x = function () {
        var nW0x = !!document.body.classList;
        return function () {
            return nW0x
        }
    }();
    var bLQ4U = function () {
        var cO6I = /\s+/g;
        return function (ff7Y) {
            ff7Y = (ff7Y || "").trim();
            return !ff7Y ? null : new RegExp("(\\s|^)(?:" + ff7Y.replace(cO6I, "|") + ")(?=\\s|$)", "g")
        }
    }();
    ba5f.QI0x = ba5f.QI0x.ee7X(function (d4h) {
        if (Yh2x()) return;
        d4h.stopped = !0;
        var bf5k = d4h.args,
            E5J = a4e.y5D(bf5k[0]);
        if (!E5J || !bf5k[1] && !bf5k[2]) return;
        var ff7Y = E5J.className || "";
        var Je6Y = " " + (bf5k[2] || ""),
            Jd6X = bLQ4U((bf5k[1] || "") + Je6Y);
        !!Jd6X && (ff7Y = ff7Y.replace(Jd6X, "$1"));
        E5J.className = (ff7Y + Je6Y).replace(/\s+/g, " ").trim()
    });
    ba5f.bpr8j = ba5f.bpr8j.ee7X(function (d4h) {
        if (Yh2x()) return;
        d4h.stopped = !0;
        var bf5k = d4h.args;
        ba5f.QI0x(bf5k[0], "", bf5k[1])
    });
    ba5f.bpp8h = ba5f.bpp8h.ee7X(function (d4h) {
        if (Yh2x()) return;
        d4h.stopped = !0;
        var bf5k = d4h.args;
        ba5f.QI0x(bf5k[0], bf5k[1], "")
    });
    ba5f.bpl8d = ba5f.bpl8d.ee7X(function (d4h) {
        if (Yh2x()) return;
        d4h.stopped = !0;
        var bf5k = d4h.args,
            E5J = a4e.y5D(bf5k[0]);
        if (!E5J) {
            d4h.value = !1;
            return
        }
        var cO6I = bLQ4U(bf5k[1]);
        d4h.value = !cO6I ? !1 : cO6I.test(E5J.className || "")
    })
})();
(function () {
    var c4g = NEJ.P,
        M5R = c4g("nej.p"),
        ba5f = c4g("nej.h");
    if (M5R.ms9j.webkit) return;
    ba5f.YR4V = function (YN2x) {
        return !0
    }
})();
(function () {
    var c4g = NEJ.P,
        ba5f = c4g("nej.h"),
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        cN6H = c4g("nej.x"),
        Q5V = {};
    var bMD4H = function (E5J) {
        E5J = a4e.y5D(E5J);
        if (!E5J || !Q5V[E5J.id]) return;
        var Yc2x = !0,
            C5H = E5J.id;
        k4o.ei7b(Q5V[C5H], function () {
            Yc2x = !1;
            return !0
        });
        if (Yc2x) delete Q5V[C5H]
    };
    h4l.s4w = cN6H.s4w = function () {
        var bQC5H = function () {
            var bf5k = ba5f.yI3x.apply(ba5f, arguments);
            if (!bf5k || !bf5k[2]) return;
            var tI2x = a4e.kr9i(bf5k[0]),
                nR0x = Q5V[tI2x] || {};
            Q5V[tI2x] = nR0x;
            tI2x = bf5k[4] || bf5k[1];
            var xS3x = nR0x[tI2x] || [];
            nR0x[tI2x] = xS3x;
            xS3x.push({
                type: bf5k[1],
                func: bf5k[2],
                capt: !!bf5k[3],
                sfun: bf5k[5] || bf5k[2]
            });
            return bf5k.slice(0, 4)
        };
        return function () {
            var bf5k = bQC5H.apply(null, arguments);
            if (!!bf5k) ba5f.boN8F.apply(ba5f, bf5k);
            return this
        }
    }();
    h4l.lS9J = cN6H.lS9J = function () {
        var bQM6G = function () {
            var uH2x = arguments,
                tI2x = a4e.kr9i(uH2x[0]),
                nR0x = Q5V[tI2x],
                t4x = (uH2x[1] || "").toLowerCase(),
                d4h = uH2x[2];
            if (!nR0x || !t4x || !d4h) return;
            nR0x = nR0x[t4x];
            if (!nR0x) return;
            var bQN6H = !!uH2x[3],
                r4v = k4o.cT6N(nR0x, function (iq8i) {
                    return d4h == iq8i.sfun && bQN6H == iq8i.capt
                });
            if (r4v < 0) return;
            var iq8i = nR0x.splice(r4v, 1)[0];
            return !iq8i ? null : [a4e.y5D(tI2x), iq8i.type, iq8i.func, iq8i.capt]
        };
        return function () {
            var bf5k = bQM6G.apply(null, arguments);
            if (!!bf5k) {
                ba5f.Zc4g.apply(ba5f, bf5k);
                bMD4H(bf5k[0])
            }
            return this
        }
    }();
    h4l.hD8v = cN6H.hD8v = function () {
        var bvj9a = function () {
            var uH2x = arguments,
                tI2x = a4e.kr9i(uH2x[0]),
                nR0x = Q5V[tI2x],
                xS3x = (uH2x[1] || "").toLowerCase();
            if (!nR0x || !xS3x) return;
            var E5J = a4e.y5D(tI2x);
            k4o.lY9P(nR0x[xS3x], function (iq8i, r4v, i4m) {
                ba5f.Zc4g(E5J, iq8i.type, iq8i.func, iq8i.capt);
                i4m.splice(r4v, 1)
            });
            delete nR0x[xS3x]
        };
        var bQO6I = function (E5J) {
            E5J = a4e.y5D(E5J);
            if (!E5J) return;
            var C5H = E5J.id;
            k4o.ei7b(Q5V[C5H], function (i4m, t4x) {
                bvj9a(C5H, t4x)
            });
            delete Q5V[C5H]
        };
        return function (E5J, t4x) {
            !t4x ? bQO6I(E5J) : bvj9a(E5J, t4x);
            bMD4H(E5J);
            return this
        }
    }();
    h4l.U5Z = function () {
        var bmC7v;
        var IP6J = function (T5Y, E5J) {
            var bs5x = T5Y.split(":");
            if (bs5x.length > 1) {
                if (!bmC7v) bmC7v = {
                    c: a4e.bA5F,
                    d: a4e.u5z,
                    a: a4e.fU7N
                };
                var IO6I = bmC7v[bs5x[0]];
                if (!!IO6I) return !!IO6I(E5J, bs5x[1]);
                T5Y = bs5x[1]
            }
            return !!a4e.fU7N(E5J, T5Y) || !!a4e.u5z(E5J, T5Y) || a4e.bA5F(E5J, T5Y)
        };
        return function (d4h) {
            if (!d4h) return null;
            var E5J = d4h.target || d4h.srcElement,
                dC6w = arguments[1];
            if (!dC6w) return E5J;
            if (k4o.fn7g(dC6w)) dC6w = IP6J.g4k(null, dC6w);
            if (k4o.ga7T(dC6w)) {
                while (E5J) {
                    if (!!dC6w(E5J)) return E5J;
                    E5J = E5J.parentNode
                }
                return null
            }
            return E5J
        }
    }();
    h4l.bh5m = function (d4h) {
        h4l.se1x(d4h);
        h4l.cf5k(d4h);
        return this
    };
    h4l.se1x = function (d4h) {
        if (!!d4h) {
            !!d4h.stopPropagation ? d4h.stopPropagation() : d4h.cancelBubble = !0
        }
        return this
    };
    h4l.cf5k = function (d4h) {
        if (!!d4h) {
            !!d4h.preventDefault ? d4h.preventDefault() : d4h.returnValue = !1
        }
        return this
    };
    h4l.cxE4I = function () {
        var pg0x = !1;
        var bRa6U = function () {
            if (pg0x) return;
            pg0x = !0;
            h4l.s4w(document, "click", bRj6d, !0)
        };
        var bRj6d = function (d4h) {
            var E5J = h4l.U5Z(d4h),
                bRo6i = a4e.u5z(E5J, "stopped");
            if (bRo6i == "true") {
                h4l.bh5m(d4h);
                a4e.u5z(E5J, "stopped", "false")
            }
        };
        return function (d4h) {
            if (!d4h) return;
            if (d4h.type == "click") {
                h4l.bh5m(d4h);
                return
            }
            bRa6U();
            a4e.u5z(h4l.U5Z(d4h), "stopped", "true")
        }
    }();
    h4l.kz9q = function (d4h) {
        return d4h.pageX != null ? d4h.pageX : d4h.clientX + a4e.og0x().scrollLeft
    };
    h4l.nL0x = function (d4h) {
        return d4h.pageY != null ? d4h.pageY : d4h.clientY + a4e.og0x().scrollTop
    };
    h4l.w5B = cN6H.w5B = function (E5J, t4x, e4i) {
        var bf5k = ba5f.yI3x(E5J, t4x);
        if (!!bf5k) ba5f.boJ8B(bf5k[0], bf5k[1], e4i);
        return this
    };
    c4g("dbg").dumpEV = function () {
        return Q5V
    };
    cN6H.isChange = !0
})();
(function () {
    var o = !0,
        w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a" [0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify,
                        b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {}
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {}
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }
        var m = {}.toString,
            p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor,
                J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function (a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function (a) {
                var f = {},
                    c;
                if ((f.__proto__ = w, f.__proto__ = {
                    toString: 1
                }, f).toString != m) p = function (a) {
                    var f = this.__proto__,
                        a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                };
                else {
                    c = f.constructor;
                    p = function (a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function (a, f) {
                var c = 0,
                    b, h, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function (a, f) {
                    var c = {},
                        b = m.call(a) == "[object Function]",
                        d;
                    for (d in a)!(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function (a, f) {
                    var c = m.call(a) == "[object Function]",
                        b, d;
                    for (b in a)!(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                };
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]",
                            b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a)!(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {
                        92: "\\\\",
                        34: '\\"',
                        8: "\\b",
                        12: "\\f",
                        10: "\\n",
                        13: "\\r",
                        9: "\\t"
                    },
                    u = function (a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    },
                    G = function (a) {
                        var f = '"',
                            b = 0,
                            d = a.length,
                            h = d > 10 && s,
                            n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                            case 8:
                            case 9:
                            case 10:
                            case 12:
                            case 13:
                            case 34:
                            case 92:
                                f = f + L[e];
                                break;
                            default:
                                if (e < 32) {
                                    f = f + ("\\u00" + u(2, e.toString(16)));
                                    break
                                }
                                f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    },
                    E = function (a, b, c, d, h, n, e) {
                        var g = b[a],
                            i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {}
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON"))
                                if (g > -1 / 0 && g < 1 / 0) {
                                    if (z) {
                                        k = t(g / 864e5);
                                        for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                        for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                        k = 1 + k - z(i, j);
                                        l = (g % 864e5 + 864e5) % 864e5;
                                        q = t(l / 36e5) % 24;
                                        s = t(l / 6e4) % 60;
                                        v = t(l / 1e3) % 60;
                                        l = l % 1e3
                                    } else {
                                        i = g.getUTCFullYear();
                                        j = g.getUTCMonth();
                                        k = g.getUTCDate();
                                        q = g.getUTCHours();
                                        s = g.getUTCMinutes();
                                        v = g.getUTCSeconds();
                                        l = g.getUTCMilliseconds()
                                    }
                                    g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                                } else g = w;
                            else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;)
                                if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function (a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function (a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]") h = b;
                        else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ");
                            }
                        } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {
                        92: "\\",
                        34: '"',
                        47: "/",
                        98: "\b",
                        116: "\t",
                        110: "\n",
                        102: "\f",
                        114: "\r"
                    },
                    b, A, j = function () {
                        b = A = w;
                        throw SyntaxError()
                    },
                    q = function () {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                b++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                c = s ? a.charAt(b) : a[b];
                                b++;
                                return c;
                            case 34:
                                c = "@";
                                for (b++; b < f;) {
                                    e = a.charCodeAt(b);
                                    if (e < 32) j();
                                    else if (e == 92) {
                                        e = a.charCodeAt(++b);
                                        switch (e) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            c = c + N[e];
                                            b++;
                                            break;
                                        case 117:
                                            d = ++b;
                                            for (h = b + 4; b < h; b++) {
                                                e = a.charCodeAt(b);
                                                e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                            }
                                            c = c + M("0x" + a.slice(d, b));
                                            break;
                                        default:
                                            j()
                                        }
                                    } else {
                                        if (e == 34) break;
                                        e = a.charCodeAt(b);
                                        for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                        c = c + a.slice(d, b)
                                    }
                                }
                                if (a.charCodeAt(b) == 34) {
                                    b++;
                                    return c
                                }
                                j();
                            default:
                                d = b;
                                if (e == 45) {
                                    k = o;
                                    e = a.charCodeAt(++b)
                                }
                                if (e >= 48 && e <= 57) {
                                    for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                    if (a.charCodeAt(b) == 46) {
                                        for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                        h == b && j();
                                        b = h
                                    }
                                    e = a.charCodeAt(b);
                                    if (e == 101 || e == 69) {
                                        e = a.charCodeAt(++b);
                                        (e == 43 || e == 45) && b++;
                                        for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                        h == b && j();
                                        b = h
                                    }
                                    return +a.slice(d, b)
                                }
                                k && j();
                                if (a.slice(b, b + 4) == "true") {
                                    b = b + 4;
                                    return o
                                }
                                if (a.slice(b, b + 5) == "false") {
                                    b = b + 5;
                                    return false
                                }
                                if (a.slice(b, b + 4) == "null") {
                                    b = b + 4;
                                    return w
                                }
                                j()
                            }
                        }
                        return "$"
                    },
                    F = function (a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = [];; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "]" && j()
                                        } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {};; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "}" && j()
                                        } else j();
                                        (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    },
                    I = function (a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    },
                    H = function (a, b, c) {
                        var d = a[b],
                            h;
                        if (typeof d == "object" && d)
                            if (m.call(d) == "[object Array]")
                                for (h = d.length; h--;) I(d, h, c);
                            else C(d, function (a) {
                                I(d, a, c)
                            });
                        return c.call(a, b, d)
                    };
                k.parse = function (a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var c4g = NEJ.P,
        M5R = c4g("nej.p");
    if (M5R.ms9j.trident0) return;
    JSON.parse = JSON.parse.ee7X(function (d4h) {
        var cB5G = d4h.args[0] || "";
        if (cB5G.length >= 5e5) {
            d4h.stopped = !0;
            d4h.value = eval("(" + cB5G + ")")
        }
    })
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        dM7F = c4g("nej.g"),
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        ba5f = c4g("nej.h"),
        cN6H = c4g("nej.x"),
        IJ6D, blK7D = {},
        Q5V = document.createDocumentFragment();
    a4e.kr9i = cN6H.kr9i = function (E5J) {
        E5J = a4e.y5D(E5J);
        if (!E5J) return;
        var C5H = !!E5J.id ? E5J.id : "auto-id-" + k4o.Xl2x(16);
        E5J.id = C5H;
        if (a4e.y5D(C5H) != E5J) blK7D[C5H] = E5J;
        return C5H
    };
    a4e.y5D = cN6H.y5D = function (E5J) {
        var f4j = blK7D["" + E5J];
        if (!!f4j) return f4j;
        if (!k4o.fn7g(E5J) && !k4o.uM2x(E5J)) return E5J;
        return document.getElementById(E5J)
    };
    a4e.cP6J = cN6H.cP6J = function (E5J, dE7x) {
        E5J = a4e.y5D(E5J);
        if (!E5J) return null;
        var i4m = ba5f.bpv8n(E5J);
        if (!!dE7x) k4o.lY9P(i4m, function (f4j, r4v) {
            if (!a4e.bA5F(f4j, dE7x)) i4m.splice(r4v, 1)
        });
        return i4m
    };
    a4e.I5N = cN6H.I5N = function (E5J, ff7Y) {
        E5J = a4e.y5D(E5J);
        return !E5J ? null : ba5f.bpt8l(E5J, ff7Y.trim())
    };
    a4e.bLM4Q = cN6H.bLM4Q = function (E5J) {
        E5J = a4e.y5D(E5J);
        if (!!E5J) {
            E5J = E5J.parentNode;
            while (!!E5J) {
                if (E5J.scrollHeight > E5J.clientHeight) break;
                E5J = E5J.parentNode
            }
            if (!!E5J) return E5J
        }
        var nR0x = document.body.scrollHeight,
            xS3x = document.documentElement.scrollHeight;
        return xS3x >= nR0x ? document.documentElement : document.body
    };
    a4e.og0x = function () {
        var bLP4T = function (i4m) {
            var m4q = 0;
            k4o.bc5h(i4m, function (gj7c) {
                if (!gj7c) return;
                if (!m4q) {
                    m4q = gj7c
                } else {
                    m4q = Math.min(m4q, gj7c)
                }
            });
            return m4q
        };
        return function (vn2x) {
            var IG6A = vn2x || document,
                yc3x = IG6A.body,
                yd3x = IG6A.documentElement,
                m4q = {
                    scrollTop: Math.max(yc3x.scrollTop, yd3x.scrollTop),
                    scrollLeft: Math.max(yc3x.scrollLeft, yd3x.scrollLeft),
                    clientWidth: bLP4T([yc3x.clientWidth, yc3x.offsetWidth, yd3x.clientWidth, yd3x.offsetWidth]),
                    clientHeight: bLP4T([yc3x.clientHeight, yc3x.offsetHeight, yd3x.clientHeight, yd3x.offsetHeight])
                };
            m4q.scrollWidth = Math.max(m4q.clientWidth, yc3x.scrollWidth, yd3x.scrollWidth);
            m4q.scrollHeight = Math.max(m4q.clientHeight, yc3x.scrollHeight, yd3x.scrollHeight);
            return m4q
        }
    }();
    a4e.cxy4C = function (fc7V, nT0x) {
        var m4q = NEJ.X({}, nT0x),
            brD8v = fc7V.width / fc7V.height,
            Xi2x = nT0x.width / nT0x.height;
        if (brD8v > Xi2x && nT0x.height > fc7V.height) {
            m4q.height = fc7V.height;
            m4q.width = m4q.height * Xi2x
        }
        if (brD8v < Xi2x && nT0x.width > fc7V.width) {
            m4q.width = fc7V.width;
            m4q.height = m4q.width / Xi2x
        }
        return m4q
    };
    a4e.cxx4B = function () {
        var cO6I = /\s+/;
        var tp1x = {
            left: function () {
                return 0
            }, center: function (gM8E, nT0x) {
                return (gM8E.width - nT0x.width) / 2
            }, right: function (gM8E, nT0x) {
                return gM8E.width - nT0x.width
            }, top: function () {
                return 0
            }, middle: function (gM8E, nT0x) {
                return (gM8E.height - nT0x.height) / 2
            }, bottom: function (gM8E, nT0x) {
                return gM8E.height - nT0x.height
            }
        };
        return function (gM8E, nT0x, mQ0x) {
            var m4q = {},
                bs5x = (mQ0x || "").split(cO6I),
                gi7b = tp1x[bs5x[1]] || tp1x.middle,
                gG8y = tp1x[bs5x[0]] || tp1x.center;
            m4q.top = gi7b(gM8E, nT0x);
            m4q.left = gG8y(gM8E, nT0x);
            return m4q
        }
    }();
    a4e.rZ1x = cN6H.rZ1x = function (E5J, dE7x) {
        ba5f.bpk8c(E5J, dE7x || a4e.u5z(E5J, "hover") || "js-hover");
        return this
    };
    a4e.IE6y = cN6H.IE6y = function (E5J) {
        E5J = a4e.y5D(E5J);
        if (!E5J) return;
        ba5f.bpj8b(E5J)
    };
    a4e.bRR6L = cN6H.bRR6L = function () {
        var Q5V = {},
            bwp0x = 2;
        var bSJ7C = function (C5H, dE7x, d4h) {
            Q5V[C5H] = [h4l.kz9q(d4h), h4l.nL0x(d4h)];
            a4e.z5E(C5H, dE7x)
        };
        var bST7M = function (C5H, dE7x, d4h) {
            var bE5J = Q5V[C5H];
            if (!k4o.ep7i(bE5J)) return;
            var bTk7d = Math.abs(h4l.kz9q(d4h) - bE5J[0]),
                bTw7p = Math.abs(h4l.nL0x(d4h) - bE5J[1]);
            if (bTk7d > bwp0x || bTw7p > bwp0x) blh7a(C5H, dE7x)
        };
        var blh7a = function (C5H, dE7x) {
            if (k4o.ep7i(Q5V[C5H])) {
                Q5V[C5H] = -1;
                a4e.x5C(C5H, dE7x)
            }
        };
        return function (E5J, dE7x) {
            var C5H = a4e.kr9i(E5J);
            if (!C5H || Q5V[C5H] != null) return;
            Q5V[C5H] = -1;
            dE7x = dE7x || a4e.u5z(C5H, "highlight") || "js-highlight";
            h4l.s4w(C5H, "touchstart", bSJ7C.g4k(null, C5H, dE7x));
            h4l.s4w(document, "touchmove", bST7M.g4k(null, C5H, dE7x));
            h4l.s4w(document, "touchend", blh7a.g4k(null, C5H, dE7x));
            h4l.s4w(document, "touchcancel", blh7a.g4k(null, C5H, dE7x))
        }
    }();
    a4e.yj3x = cN6H.yj3x = function () {
        var bTL7E = function (C5H, dE7x, bTX7Q) {
            var E5J = a4e.y5D(C5H),
                d4h = {
                    clazz: dE7x,
                    target: E5J
                };
            if (a4e.bA5F(E5J, dE7x)) {
                d4h.toggled = !1;
                a4e.x5C(E5J, dE7x)
            } else {
                d4h.toggled = !0;
                a4e.z5E(E5J, dE7x)
            }
            bTX7Q.call(null, d4h)
        };
        return function (E5J, e4i) {
            E5J = a4e.y5D(E5J);
            if (!!E5J) {
                var ie8W = {
                    ontoggle: bn5s,
                    clazz: "js-toggle",
                    element: E5J.parentNode
                };
                if (k4o.fn7g(e4i)) {
                    var f4j = a4e.y5D(e4i);
                    !!f4j ? ie8W.element = f4j : ie8W.clazz = e4i
                } else {
                    NEJ.EX(ie8W, e4i);
                    ie8W.element = a4e.y5D(ie8W.element)
                }
                var C5H = a4e.kr9i(ie8W.element);
                h4l.s4w(E5J, "click", bTL7E.g4k(null, C5H, ie8W.clazz, ie8W.ontoggle || bn5s))
            }
            return this
        }
    }();
    a4e.ml9c = cN6H.ml9c = function (E5J, e4i) {
        E5J = a4e.y5D(E5J);
        if (!E5J) return;
        var eI7B = 0,
            dE7x = "js-focus";
        if (k4o.uM2x(e4i)) {
            eI7B = e4i
        } else if (k4o.fn7g(e4i)) {
            dE7x = e4i
        } else if (k4o.kI9z(e4i)) {
            eI7B = e4i.mode || eI7B;
            dE7x = e4i.clazz || dE7x
        }
        var A5F = parseInt(a4e.u5z(E5J, "mode"));
        if (!isNaN(A5F)) eI7B = A5F;
        A5F = a4e.u5z(E5J, "focus");
        if (!!A5F) dE7x = A5F;
        ba5f.bpc8U(E5J, eI7B, dE7x);
        return this
    };
    a4e.cQ6K = function () {
        var bv5A = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function (fa7T, ff7Y, bB5G) {
            var E5J = document.createElement(fa7T);
            NEJ.X(E5J, bv5A[fa7T.toLowerCase()]);
            if (!!ff7Y) E5J.className = ff7Y;
            bB5G = a4e.y5D(bB5G);
            if (!!bB5G) bB5G.appendChild(E5J);
            return E5J
        }
    }();
    a4e.Yp2x = function () {
        var bUD7w = function () {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var bVb7U = function (T5Y) {
            T5Y = T5Y.trim();
            if (!T5Y) return a4e.cQ6K("iframe");
            var fd7W;
            try {
                fd7W = document.createElement('<iframe name="' + T5Y + '"></iframe>');
                fd7W.frameBorder = 0
            } catch (e) {
                fd7W = a4e.cQ6K("iframe");
                fd7W.name = T5Y
            }
            return fd7W
        };
        return function (e4i) {
            e4i = e4i || X5c;
            var fd7W = bVb7U(e4i.name || "");
            if (!e4i.visible) fd7W.style.display = "none";
            if (k4o.ga7T(e4i.onload)) h4l.s4w(fd7W, "load", function (d4h) {
                if (!fd7W.src) return;
                h4l.hD8v(fd7W, "load");
                e4i.onload(d4h)
            });
            var bB5G = e4i.parent;
            if (k4o.ga7T(bB5G)) {
                try {
                    bB5G(fd7W)
                } catch (e) {}
            } else {
                (a4e.y5D(bB5G) || document.body).appendChild(fd7W)
            }
            var dv6p = e4i.src || bUD7w();
            window.setTimeout(function () {
                fd7W.src = dv6p
            }, 0);
            return fd7W
        }
    }();
    a4e.cK6E = cN6H.cK6E = function () {
        var bzU1x = function (Pv9m) {
            Pv9m.src = dM7F.bpE8w
        };
        var bBJ1x = function (up2x) {
            up2x.src = "about:blank"
        };
        return function (E5J, bVs7l) {
            E5J = a4e.y5D(E5J);
            if (!E5J) return this;
            if (!bVs7l) h4l.hD8v(E5J);
            delete blK7D[E5J.id];
            var fa7T = E5J.tagName;
            if (fa7T == "IFRAME") {
                bBJ1x(E5J)
            } else if (fa7T == "IMG") {
                bzU1x(E5J)
            } else if (!!E5J.getElementsByTagName) {
                k4o.bc5h(E5J.getElementsByTagName("img"), bzU1x);
                k4o.bc5h(E5J.getElementsByTagName("iframe"), bBJ1x)
            }
            if (!!E5J.parentNode) {
                E5J.parentNode.removeChild(E5J)
            }
            return this
        }
    }();
    a4e.lV9M = cN6H.lV9M = function (E5J) {
        E5J = a4e.y5D(E5J);
        if (!!E5J) Q5V.appendChild(E5J);
        return this
    };
    a4e.bBZ1x = cN6H.bBZ1x = function (E5J) {
        E5J = a4e.y5D(E5J);
        if (!E5J) return;
        k4o.lY9P(E5J.childNodes, function (f4j) {
            a4e.cK6E(f4j)
        })
    };
    a4e.IC6w = cN6H.IC6w = function () {
        var dE7x, fW7P = /\s+/;
        var bVz7s = function () {
            if (!!dE7x) return;
            dE7x = a4e.rS1x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a4e.bDq2x()
        };
        return function (E5J, e4i) {
            E5J = a4e.y5D(E5J);
            if (!E5J) return;
            bVz7s();
            e4i = e4i || X5c;
            var bB5G = E5J.parentNode;
            if (!a4e.bA5F(bB5G, dE7x)) {
                bB5G = a4e.cQ6K("span", dE7x);
                E5J.insertAdjacentElement("beforeBegin", bB5G);
                bB5G.appendChild(E5J)
            }
            var bEf2x = e4i.nid || "",
                f4j = a4e.I5N(bB5G, bEf2x || dE7x + "-show")[0];
            if (!f4j) {
                var dD7w = ((e4i.clazz || "") + " " + bEf2x).trim();
                dD7w = dE7x + "-show" + (!dD7w ? "" : " ") + dD7w;
                f4j = a4e.cQ6K(e4i.tag || "span", dD7w);
                bB5G.appendChild(f4j)
            }
            var dD7w = e4i.clazz;
            if (!!dD7w) {
                dD7w = (dD7w || "").trim().split(fW7P)[0] + "-parent";
                a4e.z5E(bB5G, dD7w)
            }
            return f4j
        }
    }();
    a4e.u5z = cN6H.u5z = function () {
        var bkK7D = {},
            fa7T = "data-",
            cO6I = /\-(.{1})/gi;
        var DT5Y = function (E5J) {
            var C5H = a4e.kr9i(E5J);
            if (!!bkK7D[C5H]) return;
            var bv5A = {};
            k4o.bc5h(E5J.attributes, function (f4j) {
                var J5O = f4j.nodeName;
                if (J5O.indexOf(fa7T) != 0) return;
                J5O = J5O.replace(fa7T, "").replace(cO6I, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bv5A[J5O] = f4j.nodeValue || ""
            });
            bkK7D[C5H] = bv5A
        };
        return function (E5J, J5O, A5F) {
            E5J = a4e.y5D(E5J);
            if (!E5J) return null;
            var WH2x = E5J.dataset;
            if (!WH2x) {
                DT5Y(E5J);
                WH2x = bkK7D[E5J.id]
            }
            if (A5F !== undefined) WH2x[J5O] = A5F;
            return WH2x[J5O]
        }
    }();
    a4e.fU7N = cN6H.fU7N = function (E5J, T5Y, A5F) {
        E5J = a4e.y5D(E5J);
        if (!E5J) return "";
        if (A5F !== undefined && !!E5J.setAttribute) E5J.setAttribute(T5Y, A5F);
        return ba5f.bnW7P(E5J, T5Y)
    };
    a4e.mV0x = function (dA6u) {
        var qI1x = document.createElement("div");
        qI1x.innerHTML = dA6u;
        var i4m = a4e.cP6J(qI1x);
        return i4m.length > 1 ? qI1x : i4m[0]
    };
    a4e.bVE7x = cN6H.bVE7x = function (E5J) {
        E5J = a4e.y5D(E5J);
        return !E5J ? "" : ba5f.boY8Q(E5J)
    };
    a4e.bKo3x = function (yU3x) {
        yU3x = (yU3x || "").trim();
        return !yU3x ? null : ba5f.boX8P(yU3x)
    };
    a4e.bVI7B = function (cL6F, t4x) {
        cL6F = cL6F || "";
        switch (t4x) {
        case "xml":
            cL6F = a4e.bKo3x(cL6F);
            break;
        case "json":
            try {
                cL6F = JSON.parse(cL6F)
            } catch (ex) {
                cL6F = null
            }
            break
        }
        return cL6F
    };
    a4e.hO8G = cN6H.hO8G = function () {
        var bVP7I = function (E5J) {
            return E5J == document.body || E5J == document.documentElement
        };
        return function (dI7B, nD0x) {
            dI7B = a4e.y5D(dI7B);
            if (!dI7B) return null;
            nD0x = a4e.y5D(nD0x) || null;
            var m4q = {
                    x: 0,
                    y: 0
                },
                bkD7w, de6Y, WE2x;
            while (!!dI7B && dI7B != nD0x) {
                bkD7w = bVP7I(dI7B);
                de6Y = bkD7w ? 0 : dI7B.scrollLeft;
                WE2x = parseInt(a4e.cW6Q(dI7B, "borderLeftWidth")) || 0;
                m4q.x += dI7B.offsetLeft + WE2x - de6Y;
                de6Y = bkD7w ? 0 : dI7B.scrollTop;
                WE2x = parseInt(a4e.cW6Q(dI7B, "borderTopWidth")) || 0;
                m4q.y += dI7B.offsetTop + WE2x - de6Y;
                dI7B = dI7B.offsetParent
            }
            return m4q
        }
    }();
    a4e.mZ0x = cN6H.mZ0x = function (E5J) {
        var bi5n = a4e.hO8G(E5J);
        window.scrollTo(bi5n.x, bi5n.y);
        return this
    };
    a4e.cwZ4d = function (rh1x) {
        rh1x = (rh1x || "").trim();
        return ba5f.bCS1x(rh1x)
    };
    a4e.bXA8s = cN6H.bXA8s = function (E5J, T5Y, bv5A) {
        E5J = a4e.y5D(E5J);
        if (!E5J) return this;
        var A5F = ba5f.bMO4S(T5Y, bv5A);
        if (!A5F) return this;
        a4e.Y5d(E5J, "transform", A5F);
        return this
    };
    a4e.fz7s = cN6H.fz7s = function (E5J, bv5A) {
        E5J = a4e.y5D(E5J);
        if (!!E5J) k4o.ei7b(bv5A, function (A5F, T5Y) {
            a4e.Y5d(E5J, T5Y, A5F)
        });
        return this
    };
    a4e.bXW8O = cN6H.bXW8O = function (fD7w, e4i) {
        fD7w = a4e.y5D(fD7w);
        if (!fD7w) return {
            start: 0,
            end: 0
        };
        if (k4o.uM2x(e4i)) e4i = {
            start: e4i,
            end: e4i
        };
        if (e4i != null) {
            if (e4i.end == null) e4i.end = e4i.start || 0;
            ba5f.bpi8a(fD7w, e4i)
        } else {
            e4i = ba5f.bph8Z(fD7w)
        }
        return e4i
    };
    a4e.Y5d = cN6H.Y5d = function (E5J, T5Y, A5F) {
        E5J = a4e.y5D(E5J);
        if (!!E5J) ba5f.boF8x(E5J, T5Y, A5F);
        return this
    };
    a4e.cW6Q = cN6H.cW6Q = function (E5J, T5Y) {
        E5J = a4e.y5D(E5J);
        if (!E5J) return "";
        var gp7i = !window.getComputedStyle ? E5J.currentStyle || X5c : window.getComputedStyle(E5J, null);
        return gp7i[ba5f.bst9k(T5Y)] || ""
    };
    a4e.bsa9R = function () {
        var cO6I = /[\s\r\n]+/gi;
        return function (cd5i) {
            cd5i = (cd5i || "").trim().replace(cO6I, " ");
            if (!cd5i) return;
            var f4j = a4e.cQ6K("style");
            document.head.appendChild(f4j);
            ba5f.bou8m(f4j, ba5f.bPX5c(cd5i));
            return f4j
        }
    }();
    a4e.bsf9W = function (wc2x) {
        try {
            wc2x = wc2x.trim();
            if (!!wc2x) return (new Function(wc2x))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a4e.rS1x = function () {
        var cO6I = /#<.*?>/g,
            gc7V = +(new Date);
        return function (jg8Y) {
            if (!IJ6D) IJ6D = [];
            var ff7Y = "auto-" + gc7V++;
            IJ6D.push(jg8Y.replace(cO6I, ff7Y));
            return ff7Y
        }
    }();
    a4e.bDq2x = function () {
        if (!!IJ6D) {
            a4e.bsa9R(IJ6D.join(""));
            IJ6D = null
        }
        return this
    };
    a4e.cwS4W = function (cd5i, jg8Y) {
        cd5i = a4e.y5D(cd5i);
        return !cd5i ? null : ba5f.bos8k(cd5i, jg8Y)
    };
    a4e.z5E = cN6H.z5E = function () {
        ba5f.bpr8j.apply(ba5f, arguments);
        return this
    };
    a4e.x5C = cN6H.x5C = function () {
        ba5f.bpp8h.apply(ba5f, arguments);
        return this
    };
    a4e.eK7D = cN6H.eK7D = function () {
        ba5f.QI0x.apply(ba5f, arguments);
        return this
    };
    a4e.bA5F = cN6H.bA5F = function () {
        return ba5f.bpl8d.apply(ba5f, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cN6H.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        fb7U = NEJ.R,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        ba5f = c4g("nej.h"),
        k4o = c4g("nej.u");
    var CP4T = function (j4n, t4x) {
        try {
            t4x = t4x.toLowerCase();
            if (j4n === null) return t4x == "null";
            if (j4n === undefined) return t4x == "undefined";
            return X5c.toString.call(j4n).toLowerCase() == "[object " + t4x + "]"
        } catch (e) {
            return !1
        }
    };
    k4o.ga7T = function (j4n) {
        return CP4T(j4n, "function")
    };
    k4o.fn7g = function (j4n) {
        return CP4T(j4n, "string")
    };
    k4o.uM2x = function (j4n) {
        return CP4T(j4n, "number")
    };
    k4o.cwR4V = function (j4n) {
        return CP4T(j4n, "boolean")
    };
    k4o.Iz6t = function (j4n) {
        return CP4T(j4n, "date")
    };
    k4o.ep7i = function (j4n) {
        return CP4T(j4n, "array")
    };
    k4o.kI9z = function (j4n) {
        return CP4T(j4n, "object")
    };
    k4o.fi7b = function () {
        var cO6I = /[^\x00-\xfff]/g;
        return function (bl5q) {
            return ("" + (bl5q || "")).replace(cO6I, "**").length
        }
    }();
    k4o.cT6N = function (i4m, q4u) {
        var dC6w = k4o.ga7T(q4u) ? q4u : function (A5F) {
                return A5F === q4u
            },
            r4v = k4o.ei7b(i4m, dC6w);
        return r4v != null ? r4v : -1
    };
    k4o.cwQ4U = function () {
        var bvb9S;
        var Po9f = function (i4m, nP0x, nQ0x) {
            if (nP0x > nQ0x) return -1;
            var DH5M = Math.ceil((nP0x + nQ0x) / 2),
                m4q = bvb9S(i4m[DH5M], DH5M, i4m);
            if (m4q == 0) return DH5M;
            if (m4q < 0) return Po9f(i4m, nP0x, DH5M - 1);
            return Po9f(i4m, DH5M + 1, nQ0x)
        };
        return function (i4m, IO6I) {
            bvb9S = IO6I || bn5s;
            return Po9f(i4m, 0, i4m.length - 1)
        }
    }();
    k4o.lY9P = function (i4m, dr6l, ig8Y) {
        if (!i4m || !i4m.length || !k4o.ga7T(dr6l)) return null;
        for (var i = i4m.length - 1; i >= 0; i--)
            if (!!dr6l.call(ig8Y, i4m[i], i, i4m)) return i;
        return null
    };
    k4o.bc5h = function (i4m, dr6l, ig8Y) {
        if (!i4m || !i4m.length || !k4o.ga7T(dr6l)) return this;
        if (!!i4m.forEach) {
            i4m.forEach(dr6l, ig8Y);
            return this
        }
        for (var i = 0, l = i4m.length; i < l; i++) dr6l.call(ig8Y, i4m[i], i, i4m);
        return this
    };
    k4o.ei7b = function (i4m, dr6l, ig8Y) {
        if (!i4m || !k4o.ga7T(dr6l)) return null;
        if (i4m.length != null) {
            if (i4m.length > 0)
                for (var i = 0, l = i4m.length; i < l; i++)
                    if (!!dr6l.call(ig8Y, i4m[i], i, i4m)) return i
        }
        if (k4o.kI9z(i4m)) {
            for (var x in i4m)
                if (i4m.hasOwnProperty(x) && !!dr6l.call(ig8Y, i4m[x], x, i4m)) return x
        }
        return null
    };
    k4o.bXY8Q = function (ik8c, bYD8v, e4i) {
        ik8c = ik8c || [];
        e4i = e4i || X5c;
        var bye0x = !!e4i.union,
            vl2x = !!e4i.begin,
            Wz2x = e4i.compare,
            bYE8w = bye0x && vl2x ? k4o.lY9P : k4o.bc5h;
        bYE8w(bYD8v, function (q4u) {
            if (!!Wz2x) Wz2x = Wz2x.dS7L(q4u);
            var r4v = k4o.cT6N(ik8c, Wz2x || q4u);
            if (r4v >= 0) ik8c.splice(r4v, 1);
            if (bye0x) ik8c[vl2x ? "unshift" : "push"](q4u)
        });
        return ik8c
    };
    k4o.AH4L = function (bv5A, bl5q) {
        if (!bv5A || !bl5q || !bl5q.replace) return bl5q || "";
        return bl5q.replace(bv5A.r, function ($1) {
            var m4q = bv5A[!bv5A.i ? $1.toLowerCase() : $1];
            return m4q != null ? m4q : $1
        })
    };
    k4o.dV7O = function () {
        var bv5A = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function (bl5q) {
            return k4o.AH4L(bv5A, bl5q)
        }
    }();
    k4o.Pm9d = function () {
        var bv5A = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bl5q) {
            return k4o.AH4L(bv5A, bl5q)
        }
    }();
    k4o.iH8z = function () {
        var bv5A = {
                i: !0,
                r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
            },
            bYF8x = ["上午", "下午"],
            bYK8C = ["A.M.", "P.M."],
            bkf6Z = ["日", "一", "二", "三", "四", "五", "六"],
            bYM8E = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            bYN8F = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var Pe9V = function (gl7e) {
            gl7e = parseInt(gl7e) || 0;
            return (gl7e < 10 ? "0" : "") + gl7e
        };
        var bZb8T = function (oi0x) {
            return oi0x < 12 ? 0 : 1
        };
        return function (bx5C, Iu6o, bZn8f) {
            if (!bx5C || !Iu6o) return "";
            bx5C = k4o.Wk2x(bx5C);
            bv5A.yyyy = bx5C.getFullYear();
            bv5A.yy = ("" + bv5A.yyyy).substr(2);
            bv5A.M = bx5C.getMonth() + 1;
            bv5A.MM = Pe9V(bv5A.M);
            bv5A.eM = bYN8F[bv5A.M - 1];
            bv5A.cM = bYM8E[bv5A.M - 1];
            bv5A.d = bx5C.getDate();
            bv5A.dd = Pe9V(bv5A.d);
            bv5A.H = bx5C.getHours();
            bv5A.HH = Pe9V(bv5A.H);
            bv5A.m = bx5C.getMinutes();
            bv5A.mm = Pe9V(bv5A.m);
            bv5A.s = bx5C.getSeconds();
            bv5A.ss = Pe9V(bv5A.s);
            bv5A.ms = bx5C.getMilliseconds();
            bv5A.w = bkf6Z[bx5C.getDay()];
            var bDl1x = bZb8T(bv5A.H);
            bv5A.ct = bYF8x[bDl1x];
            bv5A.et = bYK8C[bDl1x];
            if (!!bZn8f) {
                bv5A.H = bv5A.H % 12
            }
            return k4o.AH4L(bv5A, Iu6o)
        }
    }();
    k4o.Wk2x = function (bx5C) {
        var cF6z = bx5C;
        if (k4o.fn7g(bx5C)) cF6z = new Date(Date.parse(bx5C));
        if (!k4o.Iz6t(bx5C)) cF6z = new Date(bx5C);
        return cF6z
    };
    k4o.IE6y = function (bZF8x, bZL8D) {
        return (new Number(bZF8x)).toFixed(bZL8D)
    };
    k4o.bjR6L = function () {
        var fW7P = /([^\/:])\/.*$/,
            jn8f = /\/[^\/]+$/,
            CO4S = /[#\?]/,
            bjQ6K = location.href.split(/[?#]/)[0],
            rb1x = document.createElement("a");
        var bjP6J = function (lz9q) {
            return (lz9q || "").indexOf("://") > 0
        };
        var bGv2x = function (lz9q) {
            return (lz9q || "").split(CO4S)[0].replace(jn8f, "/")
        };
        var caC8u = function (lz9q, fr7k) {
            if (lz9q.indexOf("/") == 0) return fr7k.replace(fW7P, "$1") + lz9q;
            return bGv2x(fr7k) + lz9q
        };
        bjQ6K = bGv2x(bjQ6K);
        return function (lz9q, fr7k) {
            lz9q = (lz9q || "").trim();
            if (!bjP6J(fr7k)) fr7k = bjQ6K;
            if (!lz9q) return fr7k;
            if (bjP6J(lz9q)) return lz9q;
            lz9q = caC8u(lz9q, fr7k);
            rb1x.href = lz9q;
            lz9q = rb1x.href;
            return bjP6J(lz9q) ? lz9q : rb1x.getAttribute("href", 4)
        }
    }();
    k4o.cbn9e = function () {
        var cO6I = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V5a) {
            if (cO6I.test(V5a || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k4o.bHh3x = function (G5L, ie8W) {
        if (!G5L) return ie8W;
        var T5Y = G5L.tagName.toLowerCase(),
            i4m = a4e.cP6J(G5L);
        if (!i4m || !i4m.length) {
            ie8W[T5Y] = G5L.textContent || G5L.text || "";
            return ie8W
        }
        var dN7G = {};
        ie8W[T5Y] = dN7G;
        k4o.bc5h(i4m, function (f4j) {
            k4o.bHh3x(f4j, dN7G)
        });
        return ie8W
    };
    k4o.cwu4y = function (yU3x) {
        try {
            return k4o.bHh3x(a4e.bKo3x(yU3x), {})
        } catch (ex) {
            return null
        }
    };
    k4o.bIK3x = function (iD8v, Pb9S) {
        var ie8W = {};
        k4o.bc5h((iD8v || "").split(Pb9S), function (T5Y) {
            var Wh2x = T5Y.split("=");
            if (!Wh2x || !Wh2x.length) return;
            var J5O = Wh2x.shift();
            if (!J5O) return;
            ie8W[decodeURIComponent(J5O)] = decodeURIComponent(Wh2x.join("="))
        });
        return ie8W
    };
    k4o.uq2x = function (fL7E, Pb9S, cbq9h) {
        if (!fL7E) return "";
        var bs5x = [];
        for (var x in fL7E) {
            bs5x.push(encodeURIComponent(x) + "=" + (!!cbq9h ? encodeURIComponent(fL7E[x]) : fL7E[x]))
        }
        return bs5x.join(Pb9S || ",")
    };
    k4o.hp8h = function (bw5B) {
        return k4o.bIK3x(bw5B, "&")
    };
    k4o.cY6S = function (fL7E) {
        return k4o.uq2x(fL7E, "&", !0)
    };
    k4o.cws4w = function (fL7E) {
        return ba5f.Jh6b(fL7E)
    };
    k4o.cwn4r = function (i4m, dC6w) {
        var m4q = {};
        k4o.bc5h(i4m, function (q4u) {
            var J5O = q4u;
            if (!!dC6w) {
                J5O = dC6w(q4u)
            }
            m4q[J5O] = q4u
        });
        return m4q
    };
    k4o.cwm4q = function (gl7e, fY7R) {
        var ccj9a = ("" + gl7e).length,
            ccO9F = Math.max(1, parseInt(fY7R) || 0),
            de6Y = ccO9F - ccj9a;
        if (de6Y > 0) {
            gl7e = (new Array(de6Y + 1)).join("0") + gl7e
        }
        return "" + gl7e
    };
    k4o.VV1x = function (fL7E, T5Y) {
        if (!k4o.ep7i(T5Y)) {
            try {
                delete fL7E[T5Y]
            } catch (e) {
                fL7E[T5Y] = undefined
            }
            return this
        }
        k4o.bc5h(T5Y, k4o.VV1x.g4k(k4o, fL7E));
        return this
    };
    k4o.Xl2x = function () {
        var bNd4h = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (br5w) {
            br5w = br5w || 10;
            var m4q = [];
            for (var i = 0, bNi4m; i < br5w; ++i) {
                bNi4m = Math.floor(Math.random() * bNd4h.length);
                m4q.push(bNd4h.charAt(bNi4m))
            }
            return m4q.join("")
        }
    }();
    k4o.OS9J = function (fG7z, fc7V) {
        return Math.floor(Math.random() * (fc7V - fG7z) + fG7z)
    };
    k4o.ng0x = function (br5w) {
        br5w = Math.max(0, Math.min(br5w || 8, 30));
        var fG7z = Math.pow(10, br5w - 1),
            fc7V = fG7z * 10;
        return k4o.OS9J(fG7z, fc7V).toString()
    };
    k4o.VT1x = function () {
        var gc7V = +(new Date);
        return function () {
            return "" + gc7V++
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        fb7U = NEJ.R,
        bn5s = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ut"),
        nH0x;
    if (!!M5R.cz5E) return;
    M5R.cz5E = NEJ.C();
    nH0x = M5R.cz5E.prototype;
    M5R.cz5E.B5G = function (e4i) {
        e4i = e4i || {};
        var cp5u = !!this.yH3x && this.yH3x.shift();
        if (!cp5u) {
            cp5u = new this(e4i);
            this.cdj9a = (this.cdj9a || 0) + 1
        }
        cp5u.bj5o(e4i);
        return cp5u
    };
    M5R.cz5E.S5X = function () {
        var OQ9H = function (q4u, r4v, i4m) {
            q4u.S5X();
            i4m.splice(r4v, 1)
        };
        return function (cp5u) {
            if (!cp5u) return null;
            if (!k4o.ep7i(cp5u)) {
                if (!(cp5u instanceof this)) {
                    var ff7Y = cp5u.constructor;
                    if (!!ff7Y.S5X) ff7Y.S5X(cp5u);
                    return null
                }
                if (cp5u == this.eL7E) delete this.eL7E;
                if (cp5u == this.yJ3x) delete this.yJ3x;
                cp5u.bC5H();
                if (!this.yH3x) this.yH3x = [];
                if (k4o.cT6N(this.yH3x, cp5u) < 0) {
                    this.yH3x.push(cp5u)
                }
                return null
            }
            k4o.lY9P(cp5u, OQ9H, this)
        }
    }();
    M5R.cz5E.fX7Q = function (e4i) {
        e4i = e4i || {};
        if (!this.eL7E) this.eL7E = this.B5G(e4i);
        return this.eL7E
    };
    M5R.cz5E.cdp9g = function (e4i, qw1x) {
        e4i = e4i || {};
        if (!!qw1x && !!this.yJ3x) {
            this.yJ3x.S5X();
            delete this.yJ3x
        }
        if (!this.yJ3x) {
            this.yJ3x = this.B5G(e4i)
        } else {
            this.yJ3x.bj5o(e4i)
        }
        return this.yJ3x
    };
    nH0x.cl5q = function () {
        var gc7V = +(new Date);
        return function () {
            this.id = gc7V++;
            this.kZ9Q = {};
            this.buH9y = {}
        }
    }();
    nH0x.bj5o = function (e4i) {
        this.bjf6Z(e4i)
    };
    nH0x.bC5H = function () {
        this.hD8v();
        this.Ip6j()
    };
    nH0x.bS5X = function () {
        var gc7V = +(new Date);
        var cdq9h = function (bf5k) {
            if (!bf5k || bf5k.length < 3) return;
            this.buH9y["de-" + gc7V++] = bf5k;
            h4l.s4w.apply(h4l, bf5k)
        };
        return function (i4m) {
            k4o.bc5h(i4m, cdq9h, this)
        }
    }();
    nH0x.Ip6j = function () {
        var cdx9o = function (bf5k, J5O, bv5A) {
            delete bv5A[J5O];
            h4l.lS9J.apply(h4l, bf5k)
        };
        return function () {
            k4o.ei7b(this.buH9y, cdx9o)
        }
    }();
    nH0x.cwe4i = function (dC6w) {
        dC6w = dC6w || bn5s;
        k4o.ei7b(this, function (Di5n, J5O, bv5A) {
            if (!!Di5n && !!Di5n.S5X && !dC6w(Di5n)) {
                delete bv5A[J5O];
                Di5n.S5X()
            }
        })
    };
    nH0x.S5X = function () {
        this.constructor.S5X(this)
    };
    nH0x.bxy0x = function (t4x) {
        var d4h = this.kZ9Q[t4x.toLowerCase()];
        return !!d4h && d4h !== bn5s
    };
    nH0x.s4w = function (t4x, d4h) {
        this.uI2x.apply(this, arguments);
        return this
    };
    nH0x.lS9J = function (t4x, d4h) {
        var t4x = (t4x || "").toLowerCase(),
            dH7A = this.kZ9Q[t4x];
        if (!k4o.ep7i(dH7A)) {
            if (dH7A == d4h) delete this.kZ9Q[t4x];
            return
        }
        k4o.lY9P(dH7A, function (eF7y, r4v, i4m) {
            if (eF7y == d4h) i4m.splice(r4v, 1)
        })
    };
    nH0x.uI2x = function (t4x, d4h) {
        if (!!t4x && k4o.ga7T(d4h)) this.kZ9Q[t4x.toLowerCase()] = d4h;
        return this
    };
    nH0x.bjf6Z = function () {
        var cej9a = function (d4h, t4x) {
            this.uI2x(t4x, d4h)
        };
        return function (dH7A) {
            k4o.ei7b(dH7A, cej9a, this);
            return this
        }
    }();
    nH0x.hD8v = function () {
        var biN6H = function (d4h, t4x) {
            this.hD8v(t4x)
        };
        return function (t4x) {
            var t4x = (t4x || "").toLowerCase();
            if (!!t4x) {
                delete this.kZ9Q[t4x]
            } else {
                k4o.ei7b(this.kZ9Q, biN6H, this)
            }
            return this
        }
    }();
    nH0x.biH6B = function (t4x, d4h) {
        if (!t4x || !k4o.ga7T(d4h)) return this;
        t4x = t4x.toLowerCase();
        var dH7A = this.kZ9Q[t4x];
        if (!dH7A) {
            this.kZ9Q[t4x] = d4h;
            return this
        }
        if (!k4o.ep7i(dH7A)) {
            this.kZ9Q[t4x] = [dH7A]
        }
        this.kZ9Q[t4x].push(d4h);
        return this
    };
    nH0x.w5B = function (t4x) {
        var d4h = this.kZ9Q[(t4x || "").toLowerCase()];
        if (!d4h) return this;
        var bf5k = fb7U.slice.call(arguments, 1);
        if (!k4o.ep7i(d4h)) return d4h.apply(this, bf5k);
        k4o.bc5h(d4h, function (da6U) {
            try {
                da6U.apply(this, bf5k)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    M5R.VD1x = function () {
        var Q5V = {};
        return function (C5H, ff7Y, e4i) {
            var eJ7C = ff7Y.cft0x;
            if (!eJ7C) {
                eJ7C = k4o.Xl2x(10);
                ff7Y.cft0x = eJ7C
            }
            var J5O = C5H + "-" + eJ7C,
                cp5u = Q5V[J5O];
            if (!!e4i && !cp5u) {
                cp5u = ff7Y.B5G(e4i);
                cp5u.S5X = cp5u.S5X.ee7X(function (d4h) {
                    delete Q5V[J5O];
                    delete cp5u.S5X
                });
                Q5V[J5O] = cp5u
            }
            return cp5u
        }
    }()
})();
(function () {
    var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.gF8x = function () {
        var cF6z = new Date,
            cgb0x = +cF6z,
            biv6p = 864e5;
        var cge0x = function (T5Y) {
            var qL1x = document.cookie,
                rt1x = "\\b" + T5Y + "=",
                Vq1x = qL1x.search(rt1x);
            if (Vq1x < 0) return "";
            Vq1x += rt1x.length - 2;
            var yP3x = qL1x.indexOf(";", Vq1x);
            if (yP3x < 0) yP3x = qL1x.length;
            return qL1x.substring(Vq1x, yP3x) || ""
        };
        return function (T5Y, j4n) {
            if (j4n === undefined) return cge0x(T5Y);
            if (u.fn7g(j4n)) {
                if (!!j4n) {
                    document.cookie = T5Y + "=" + j4n + ";";
                    return j4n
                }
                j4n = {
                    expires: -100
                }
            }
            j4n = j4n || o;
            var qL1x = T5Y + "=" + (j4n.value || "") + ";";
            delete j4n.value;
            if (j4n.expires !== undefined) {
                cF6z.setTime(cgb0x + j4n.expires * biv6p);
                j4n.expires = cF6z.toGMTString()
            }
            qL1x += u.uq2x(j4n, ";");
            document.cookie = qL1x
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        ir8j = c4g("nej.c"),
        dM7F = c4g("nej.g"),
        a4e = c4g("nej.e"),
        v5A = c4g("nej.j"),
        H5M = c4g("nej.ut"),
        M5R = c4g("nej.ut.j"),
        k4o = c4g("nej.u"),
        b4f;
    if (!!M5R.Ik6e) return;
    M5R.Ik6e = NEJ.C();
    b4f = M5R.Ik6e.O5T(H5M.cz5E);
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.oP0x = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.oP0x, e4i);
        var zC3x = ir8j.y5D("csrf");
        if ((/^\/[^\/]/.test(this.oP0x.url) || this.oP0x.url.indexOf(location.protocol + "//" + location.host) == 0) && !!zC3x.cookie && !!zC3x.param) {
            var bw5B = encodeURIComponent(zC3x.param) + "=" + encodeURIComponent(v5A.gF8x(zC3x.cookie) || ""),
                Pb9S = this.oP0x.url.indexOf("?") < 0 ? "?" : "&";
            this.oP0x.url += Pb9S + bw5B
        }
        this.Vj1x = e4i.headers || {};
        var bl5q = this.Vj1x[dM7F.wW3x];
        if (bl5q == null) this.Vj1x[dM7F.wW3x] = dM7F.bPt5y
    };
    b4f.bC5H = function () {
        this.bG5L();
        delete this.yR3x;
        delete this.oP0x;
        delete this.Vj1x
    };
    b4f.cgf0x = function (bl5q) {
        var bv5A = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.oP0x.noescape) {
            return k4o.AH4L(bv5A, bl5q)
        } else {
            return bl5q
        }
    };
    b4f.sV1x = function (d4h) {
        var dZ7S = d4h.status;
        if (dZ7S == -1) {
            this.w5B("onerror", {
                code: dM7F.bzL1x,
                message: "请求[" + this.oP0x.url + "]超时！"
            });
            return
        }
        if (("" + dZ7S).indexOf("2") != 0) {
            this.w5B("onerror", {
                data: dZ7S,
                code: dM7F.bpO8G,
                message: "服务器返回异常状态[" + dZ7S + "]!",
                extData: d4h.result
            });
            return
        }
        this.w5B("onload", a4e.bVI7B(this.cgf0x(d4h.result), this.oP0x.type))
    };
    b4f.ck5p = bn5s;
    b4f.bhQ6K = function (j4n) {
        var V5a = this.oP0x.url;
        if (!V5a) {
            this.w5B("onerror", {
                code: dM7F.bpQ8I,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.oP0x.data = j4n == null ? null : j4n;
            var d4h = {
                request: this.oP0x,
                headers: this.Vj1x
            };
            try {
                this.w5B("onbeforerequest", d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.ck5p(d4h)
        } catch (e) {
            this.w5B("onerror", {
                code: dM7F.bpO8G,
                message: "请求[" + V5a + "]失败:" + e.message + "！"
            })
        }
        return this
    };
    b4f.jj8b = bn5s
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        ba5f = c4g("nej.h"),
        dM7F = c4g("nej.g"),
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ut.j"),
        Q5V = {},
        Or9i;
    if (!!M5R.Vc1x) return;
    M5R.Vc1x = NEJ.C();
    Or9i = M5R.Vc1x.O5T(M5R.Ik6e);
    Or9i.bC5H = function () {
        this.bG5L();
        window.clearTimeout(this.dK7D);
        delete this.dK7D;
        try {
            this.pX0x.onreadystatechange = bn5s;
            this.pX0x.abort()
        } catch (e) {}
        delete this.pX0x
    };
    Or9i.ck5p = function () {
        var cgg0x = function (A5F, J5O) {
            this.pX0x.setRequestHeader(J5O, A5F)
        };
        return function (e4i) {
            var fF7y = e4i.request,
                nv0x = e4i.headers;
            this.pX0x = ba5f.bhK6E();
            if (nv0x[dM7F.wW3x] === dM7F.DF5K) {
                delete nv0x[dM7F.wW3x];
                this.pX0x.upload.onprogress = this.hk8c.g4k(this, 1);
                if (fF7y.data.tagName === "FORM") fF7y.data = new FormData(fF7y.data)
            }
            this.pX0x.onreadystatechange = this.hk8c.g4k(this, 2);
            if (fF7y.timeout != 0) {
                this.dK7D = window.setTimeout(this.hk8c.g4k(this, 3), fF7y.timeout)
            }
            this.pX0x.open(fF7y.method, fF7y.url, !fF7y.sync);
            k4o.ei7b(nv0x, cgg0x, this);
            if (!!this.oP0x.cookie && "withCredentials" in this.pX0x) this.pX0x.withCredentials = !0;
            this.pX0x.send(fF7y.data)
        }
    }();
    Or9i.hk8c = function (t4x) {
        switch (t4x) {
        case 1:
            this.w5B("onuploading", arguments[1]);
            break;
        case 2:
            if (this.pX0x.readyState == 4) this.sV1x({
                status: this.pX0x.status,
                result: this.pX0x.responseText || ""
            });
            break;
        case 3:
            this.sV1x({
                status: -1
            });
            break
        }
    };
    Or9i.jj8b = function () {
        this.sV1x({
            status: 0
        });
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var Op9g = {},
        UZ1x = [],
        bHR3x = /\s+/g,
        gc7V = +(new Date),
        Ih6b, bN5S, lr9i;
    var CY5d = function () {
        var fW7P = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            jn8f = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            CO4S = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            bhx6r = /^new\s+/,
            cgh0x = /['"]/;
        var cgi0x = function (A5F) {
            if (fW7P.test(A5F)) return;
            A5F = A5F.split(".")[0].trim();
            if (!A5F || cgh0x.test(A5F)) return;
            A5F = A5F.replace(bhx6r, "");
            try {
                if (CO4S.test(A5F)) return;
                lr9i[A5F] = 1
            } catch (e) {}
        };
        return function (bl5q) {
            bl5q = bl5q || "";
            if (!bl5q || fW7P.test(bl5q)) return;
            var bs5x = bl5q.split(jn8f);
            for (var i = 0, l = bs5x.length; i < l; i++) cgi0x(bs5x[i])
        }
    }();
    var cgj0x = function (dl6f) {
        if (dl6f[2] != "in") throw "bad for loop statement: " + dl6f.join(" ");
        UZ1x.push(dl6f[1]);
        CY5d(dl6f[3]);
        return "var __HASH__" + dl6f[1] + " = " + dl6f[3] + "," + dl6f[1] + "," + dl6f[1] + "_count=0;" + "if (!!__HASH__" + dl6f[1] + ")" + "for(var " + dl6f[1] + "_key in __HASH__" + dl6f[1] + "){" + dl6f[1] + " = __HASH__" + dl6f[1] + "[" + dl6f[1] + "_key];" + "if (typeof(" + dl6f[1] + ')=="function") continue;' + dl6f[1] + "_count++;"
    };
    var cgm0x = function () {
        var dl6f = UZ1x[UZ1x.length - 1];
        return "}; if(!__HASH__" + dl6f + "||!" + dl6f + "_count){"
    };
    var cgr0x = function () {
        UZ1x.pop();
        return "};"
    };
    var cgF0x = function (dl6f) {
        if (dl6f[2] != "as") throw "bad for list loop statement: " + dl6f.join(" ");
        var NV9M = dl6f[1].split("..");
        if (NV9M.length > 1) {
            CY5d(NV9M[0]);
            CY5d(NV9M[1]);
            return "for(var " + dl6f[3] + "," + dl6f[3] + "_index=0," + dl6f[3] + "_beg=" + NV9M[0] + "," + dl6f[3] + "_end=" + NV9M[1] + "," + dl6f[3] + "_length=parseInt(" + dl6f[3] + "_end-" + dl6f[3] + "_beg+1);" + dl6f[3] + "_index<" + dl6f[3] + "_length;" + dl6f[3] + "_index++){" + dl6f[3] + " = " + dl6f[3] + "_beg+" + dl6f[3] + "_index;"
        } else {
            CY5d(dl6f[1]);
            return "for(var __LIST__" + dl6f[3] + " = " + dl6f[1] + "," + dl6f[3] + "," + dl6f[3] + "_index=0," + dl6f[3] + "_length=__LIST__" + dl6f[3] + ".length;" + dl6f[3] + "_index<" + dl6f[3] + "_length;" + dl6f[3] + "_index++){" + dl6f[3] + " = __LIST__" + dl6f[3] + "[" + dl6f[3] + "_index];"
        }
    };
    var cgG0x = function (dl6f) {
        if (!dl6f || !dl6f.length) return;
        dl6f.shift();
        var T5Y = dl6f[0].split("(")[0];
        return "var " + T5Y + " = function" + dl6f.join("").replace(T5Y, "") + "{var __OUT=[];"
    };
    var cgH0x = function (dl6f) {
        if (!dl6f[1]) throw "bad include statement: " + dl6f.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var bgQ6K = function (kR9I, dl6f) {
        CY5d(dl6f.slice(1).join(" "));
        return kR9I
    };
    var cgL0x = function (dl6f) {
        return bgQ6K("if(", dl6f)
    };
    var cgN0x = function (dl6f) {
        return bgQ6K("}else if(", dl6f)
    };
    var cgP0x = function (dl6f) {
        return bgQ6K("var ", dl6f)
    };
    bN5S = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cgL0x,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cgN0x,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cgj0x,
                pmin: 3
            },
            forelse: {
                pfix: cgm0x
            },
            "/for": {
                pfix: cgr0x
            },
            list: {
                pfix: cgF0x,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: cgP0x,
                sfix: ";"
            },
            macro: {
                pfix: cgG0x
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function () {
                    Ih6b = !0
                }
            },
            "/trim": {
                pfix: function () {
                    Ih6b = null
                }
            },
            inline: {
                pfix: cgH0x,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function (kR9I) {
                return (kR9I || "") + "" + gc7V
            }, "default": function (A5F, ku9l) {
                return A5F || ku9l
            }
        }
    };
    var cgS0x = function () {
        var chg0x = /\\([\{\}])/g;
        return function (bl5q, iI8A) {
            bl5q = bl5q.replace(chg0x, "$1");
            var dl6f = bl5q.slice(1, -1).split(bHR3x),
                bb5g = bN5S.def[dl6f[0]];
            if (!bb5g) {
                Uv1x(bl5q, iI8A);
                return
            }
            if (!!bb5g.pmin && bb5g.pmin >= dl6f.length) throw "Statement needs more parameters:" + bl5q;
            iI8A.push(!!bb5g.pfix && typeof bb5g.pfix != "string" ? bb5g.pfix(dl6f) : bb5g.pfix || "");
            if (!!bb5g.sfix) {
                if (dl6f.length <= 1) {
                    if (!!bb5g.pdft) iI8A.push(bb5g.pdft)
                } else {
                    for (var i = 1, l = dl6f.length; i < l; i++) {
                        if (i > 1) iI8A.push(" ");
                        iI8A.push(dl6f[i])
                    }
                }
                iI8A.push(bb5g.sfix)
            }
        }
    }();
    var brO8G = function (Ib6V, iI8A) {
        if (!Ib6V || !Ib6V.length) return;
        if (Ib6V.length == 1) {
            var bgH6B = Ib6V.pop();
            CY5d(bgH6B);
            iI8A.push(bgH6B == "" ? '""' : bgH6B);
            return
        }
        var bgG6A = Ib6V.pop().split(":");
        iI8A.push("__MDF['" + bgG6A.shift() + "'](");
        brO8G(Ib6V, iI8A);
        if (bgG6A.length > 0) {
            var bf5k = bgG6A.join(":");
            CY5d(bf5k);
            iI8A.push("," + bf5k)
        }
        iI8A.push(")")
    };
    var Uv1x = function (bl5q, iI8A) {
        if (!bl5q) return;
        var uP2x = bl5q.split("\n");
        if (!uP2x || !uP2x.length) return;
        for (var i = 0, l = uP2x.length, gZ8R; i < l; i++) {
            gZ8R = uP2x[i];
            if (!!Ih6b) {
                gZ8R = gZ8R.trim();
                if (!gZ8R) continue
            }
            chR1x(gZ8R, iI8A);
            if (!!Ih6b && i < l - 1) iI8A.push("__OUT.push('\\n');")
        }
    };
    var chR1x = function () {
        var cil1x = /\|\|/g,
            cim1x = /#@@#/g;
        return function (bl5q, iI8A) {
            var NN9E = "}",
                NL9C = -1,
                br5w = bl5q.length,
                vl2x, gD8v, HX6R, Ue1x, NE8w;
            while (NL9C + NN9E.length < br5w) {
                vl2x = "${";
                gD8v = "}";
                HX6R = bl5q.indexOf(vl2x, NL9C + NN9E.length);
                if (HX6R < 0) break;
                if (bl5q.charAt(HX6R + 2) == "%") {
                    vl2x = "${%";
                    gD8v = "%}"
                }
                Ue1x = bl5q.indexOf(gD8v, HX6R + vl2x.length);
                if (Ue1x < 0) break;
                Ua1x(bl5q.substring(NL9C + NN9E.length, HX6R), iI8A);
                NE8w = bl5q.substring(HX6R + vl2x.length, Ue1x).replace(cil1x, "#@@#").split("|");
                for (var i = 0, l = NE8w.length; i < l; NE8w[i] = NE8w[i].replace(cim1x, "||"), i++);
                iI8A.push("__OUT.push(");
                brO8G(NE8w, iI8A);
                iI8A.push(");");
                NN9E = gD8v;
                NL9C = Ue1x
            }
            Ua1x(bl5q.substring(NL9C + NN9E.length), iI8A)
        }
    }();
    var Ua1x = function () {
        var bv5A = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var ciY1x = function (bl5q) {
            return (bl5q || "").replace(bv5A.r, function ($1) {
                return bv5A[$1] || $1
            })
        };
        return function (bl5q, iI8A) {
            if (!bl5q) return;
            iI8A.push("__OUT.push('" + ciY1x(bl5q) + "');")
        }
    }();
    var cja1x = function () {
        var cjA1x = /\t/g,
            cjC1x = /\n/g,
            cjK1x = /\r\n?/g;
        var bwC0x = function (bl5q, vl2x) {
            var r4v = bl5q.indexOf("}", vl2x + 1);
            while (bl5q.charAt(r4v - 1) == "\\") {
                r4v = bl5q.indexOf("}", r4v + 1)
            }
            return r4v
        };
        var cjV1x = function () {
            var bs5x = [],
                BU4Y = arguments[0];
            for (var x in BU4Y) {
                x = (x || "").trim();
                if (!x) continue;
                bs5x.push(x + "=$v('" + x + "')")
            }
            return bs5x.length > 0 ? "var " + bs5x.join(",") + ";" : ""
        };
        return function (bl5q) {
            lr9i = {};
            bl5q = bl5q.replace(cjK1x, "\n").replace(cjA1x, "    ");
            var qX1x = ["if(!__CTX) return '';", ""];
            qX1x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qX1x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qX1x.push("__OUT=[];");
            var Ce4i = -1,
                br5w = bl5q.length;
            var mo9f, HR6L, Nv8n, Ns8k, zj3x, Nr8j, bfF5K, Np8h;
            while (Ce4i + 1 < br5w) {
                mo9f = Ce4i;
                mo9f = bl5q.indexOf("{", mo9f + 1);
                while (mo9f >= 0) {
                    HR6L = bwC0x(bl5q, mo9f);
                    Nv8n = bl5q.substring(mo9f, HR6L);
                    Ns8k = Nv8n.match(bN5S.blk);
                    if (!!Ns8k) {
                        zj3x = Ns8k[1].length + 1;
                        Nr8j = bl5q.indexOf("}", mo9f + zj3x);
                        if (Nr8j >= 0) {
                            bfF5K = Nr8j - mo9f - zj3x <= 0 ? "{/" + Ns8k[1] + "}" : Nv8n.substr(zj3x + 1);
                            zj3x = bl5q.indexOf(bfF5K, Nr8j + 1);
                            if (zj3x >= 0) {
                                Uv1x(bl5q.substring(Ce4i + 1, mo9f), qX1x);
                                Np8h = bl5q.substring(Nr8j + 1, zj3x);
                                switch (Ns8k[1]) {
                                case "cdata":
                                    Ua1x(Np8h, qX1x);
                                    break;
                                case "minify":
                                    Ua1x(Np8h.replace(cjC1x, " ").replace(bHR3x, " "), qX1x);
                                    break;
                                case "eval":
                                    if (!!Np8h) qX1x.push("__OUT.push((function(){" + Np8h + "})());");
                                    break
                                }
                                mo9f = Ce4i = zj3x + bfF5K.length - 1
                            }
                        }
                    } else if (bl5q.charAt(mo9f - 1) != "$" && bl5q.charAt(mo9f - 1) != "\\" && Nv8n.substr(Nv8n.charAt(1) == "/" ? 2 : 1).search(bN5S.tag) == 0) {
                        break
                    }
                    mo9f = bl5q.indexOf("{", mo9f + 1)
                }
                if (mo9f < 0) break;
                HR6L = bwC0x(bl5q, mo9f);
                if (HR6L < 0) break;
                Uv1x(bl5q.substring(Ce4i + 1, mo9f), qX1x);
                cgS0x(bl5q.substring(mo9f, HR6L + 1), qX1x);
                Ce4i = HR6L
            }
            Uv1x(bl5q.substring(Ce4i + 1), qX1x);
            qX1x.push(';return __OUT.join("");');
            qX1x[1] = cjV1x(lr9i);
            lr9i = null;
            return new Function("__CTX", "__MDF", qX1x.join(""))
        }
    }();
    TrimPath.seed = function () {
        return gc7V
    };
    TrimPath.merge = function () {
        var No8g = {};
        TrimPath.dump = function () {
            return {
                func: No8g,
                text: Op9g
            }
        };
        return function (eJ7C, j4n, iT8L) {
            try {
                j4n = j4n || {};
                if (!No8g[eJ7C] && !Op9g[eJ7C]) return "";
                if (!No8g[eJ7C]) {
                    No8g[eJ7C] = cja1x(Op9g[eJ7C]);
                    delete Op9g[eJ7C]
                }
                if (!!iT8L) {
                    for (var x in bN5S.ext)
                        if (!iT8L[x]) iT8L[x] = bN5S.ext[x]
                }
                return No8g[eJ7C](j4n, iT8L || bN5S.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var cke1x = +(new Date);
        return function (bl5q, eJ7C) {
            if (!bl5q) return "";
            eJ7C = eJ7C || "ck_" + cke1x++;
            Op9g[eJ7C] = bl5q;
            return eJ7C
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        ey7r = {},
        bzD0x = {};
    a4e.HN6H = TrimPath.seed;
    a4e.bU5Z = function () {
        var bzP1x = function (C5H) {
            return !a4e.hV8N ? "" : a4e.hV8N(C5H)
        };
        return function (eJ7C, j4n, iT8L) {
            j4n = NEJ.X(NEJ.X({}, bzD0x), j4n);
            j4n.inline = bzP1x;
            iT8L = NEJ.X(NEJ.X({}, ey7r), iT8L);
            iT8L.rand = k4o.ng0x;
            iT8L.format = k4o.iH8z;
            iT8L.escape = k4o.dV7O;
            iT8L.inline = bzP1x;
            return TrimPath.merge(eJ7C, j4n, iT8L)
        }
    }();
    a4e.ek7d = function (bl5q, ckg1x) {
        if (!bl5q) return "";
        var eJ7C, E5J = a4e.y5D(bl5q);
        if (!!E5J) {
            eJ7C = E5J.id;
            bl5q = E5J.value || E5J.innerText;
            if (!ckg1x) a4e.cK6E(E5J)
        }
        return TrimPath.parse(bl5q, eJ7C)
    };
    a4e.dL7E = function (bB5G, eJ7C, j4n, iT8L) {
        bB5G = a4e.y5D(bB5G);
        if (!!bB5G) bB5G.innerHTML = a4e.bU5Z(eJ7C, j4n, iT8L);
        return this
    };
    a4e.cvs4w = function (bv5A) {
        NEJ.X(ey7r, bv5A)
    };
    a4e.cko1x = function (bv5A) {
        NEJ.X(bzD0x, bv5A)
    };
    c4g("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var cZ6T = NEJ.P("nej.p"),
        M5R = window,
        jZ9Q = cZ6T.ZQ4U,
        bBL1x = jZ9Q.ipad || jZ9Q.iphone;
    if (!bBL1x && !!M5R.requestAnimationFrame && !!M5R.cancelRequestAnimationFrame) return;
    var kR9I = cZ6T.dd6X.prefix.pro;
    if (!bBL1x && !!M5R[kR9I + "RequestAnimationFrame"] && !!M5R[kR9I + "CancelRequestAnimationFrame"]) {
        M5R.requestAnimationFrame = M5R[kR9I + "RequestAnimationFrame"];
        M5R.cancelRequestAnimationFrame = M5R[kR9I + "CancelRequestAnimationFrame"];
        return
    }
    var Tx1x = jZ9Q.desktop ? 80 : jZ9Q.ios ? 50 : 30;
    M5R.requestAnimationFrame = function (dr6l) {
        return window.setTimeout(function () {
            try {
                dr6l(+(new Date))
            } catch (ex) {}
        }, 1e3 / Tx1x)
    };
    M5R.cancelRequestAnimationFrame = function (C5H) {
        window.clearTimeout(C5H);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        k4o = c4g("nej.u"),
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        ba5f = c4g("nej.h"),
        cN6H = c4g("nej.x"),
        Tw1x = c4g("nej.ut.j.cb"),
        gg7Z;
    if (!!a4e.re1x) return;
    a4e.re1x = cN6H.re1x = function () {
        var Q5V = {},
            fW7P = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d4h) {
            var C5H = decodeURIComponent(d4h.target),
                t4x = d4h.type.toLowerCase();
            var da6U = Q5V[C5H + "-on" + t4x];
            if (!!da6U) {
                try {
                    da6U(d4h)
                } catch (e) {}
                return
            }
            var cD6x = Q5V[C5H + "-tgt"];
            if (!!cD6x && fW7P.test(t4x)) {
                bCM1x(cD6x, d4h)
            }
        };
        var bfn5s = function (e4i) {
            var bB5G = a4e.y5D(e4i.parent) || document.body,
                dA6u = a4e.bU5Z(gg7Z, e4i);
            bB5G.insertAdjacentHTML(!e4i.hidden ? "beforeEnd" : "afterBegin", dA6u)
        };
        var bCM1x = function (C5H, d4h) {
            var t4x = d4h.type.toLowerCase();
            requestAnimationFrame(function () {
                h4l.w5B(C5H, t4x)
            })
        };
        var ckr1x = function (hc8U) {
            return !!hc8U && !!hc8U.inited && !!hc8U.inited()
        };
        var Nh8Z = function (C5H) {
            var bs5x = [document.embeds[C5H], a4e.y5D(C5H), document[C5H], window[C5H]],
                r4v = k4o.ei7b(bs5x, ckr1x),
                hc8U = bs5x[r4v],
                bfd5i = C5H + "-count";
            Q5V[bfd5i]++;
            if (!!hc8U || Q5V[bfd5i] > 100) {
                Q5V[C5H](hc8U);
                delete Q5V[C5H];
                delete Q5V[bfd5i];
                return
            }
            window.setTimeout(Nh8Z.g4k(null, C5H), 300)
        };
        var ckR1x = function (e4i) {
            var C5H = e4i.id,
                fQ7J = e4i.params;
            if (!fQ7J) {
                fQ7J = {};
                e4i.params = fQ7J
            }
            var lr9i = fQ7J.flashvars || "";
            lr9i += (!lr9i ? "" : "&") + ("id=" + C5H);
            if (!e4i.hidden && (!!e4i.target || ba5f.YR4V(fQ7J.wmode))) {
                var ha8S = a4e.kr9i(e4i.target) || a4e.kr9i(e4i.parent),
                    Tm1x = k4o.VT1x();
                Tw1x["cb" + Tm1x] = bCM1x.g4k(null, ha8S);
                lr9i += "&onevent=nej.ut.j.cb.cb" + Tm1x;
                Q5V[C5H + "-tgt"] = ha8S
            }
            fQ7J.flashvars = lr9i;
            k4o.ei7b(e4i, function (A5F, J5O) {
                if (k4o.ga7T(A5F) && J5O != "onready") {
                    Q5V[C5H + "-" + J5O] = A5F
                }
            })
        };
        return function (e4i) {
            e4i = NEJ.X({}, e4i);
            if (!e4i.src) return;
            var C5H = "flash_" + k4o.VT1x();
            e4i.id = C5H;
            ckR1x(e4i);
            bfn5s(e4i);
            if (!e4i.onready) return;
            Q5V[C5H] = e4i.onready;
            Q5V[C5H + "-count"] = 0;
            Nh8Z(C5H)
        }
    }();
    gg7Z = a4e.ek7d('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cN6H.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        ir8j = c4g("nej.c"),
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ut.j"),
        Tw1x = c4g("nej.ut.j.cb"),
        Q5V = {},
        gc7V = +(new Date),
        beO5T;
    if (!!M5R.beN5S) return;
    Tw1x["ld" + gc7V] = function (J5O, cL6F) {
        var jd8V = Q5V[J5O];
        if (!jd8V) return;
        delete Q5V[J5O];
        jd8V.sV1x({
            status: 200,
            result: cL6F
        })
    };
    Tw1x["er" + gc7V] = function (J5O, dZ7S) {
        var jd8V = Q5V[J5O];
        if (!jd8V) return;
        delete Q5V[J5O];
        jd8V.sV1x({
            status: dZ7S || 0
        })
    };
    M5R.beN5S = NEJ.C();
    beO5T = M5R.beN5S.O5T(M5R.Ik6e);
    beO5T.ck5p = function (e4i) {
        var hc8U = Q5V.flash;
        if (k4o.ep7i(hc8U)) {
            hc8U.push(this.ck5p.g4k(this, e4i));
            return
        }
        if (!hc8U) {
            Q5V.flash = [this.ck5p.g4k(this, e4i)];
            a4e.re1x({
                hidden: !0,
                src: ir8j.y5D("ajax.swf"),
                onready: function (hc8U) {
                    if (!hc8U) return;
                    var i4m = Q5V.flash;
                    Q5V.flash = hc8U;
                    k4o.lY9P(i4m, function (da6U) {
                        try {
                            da6U()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.yR3x = "swf-" + k4o.ng0x();
        Q5V[this.yR3x] = this;
        var j4n = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e4i.request);
        j4n.key = this.yR3x;
        j4n.headers = e4i.headers;
        j4n.onerror = "nej.ut.j.cb.er" + gc7V;
        j4n.onloaded = "nej.ut.j.cb.ld" + gc7V;
        var bFE2x = ir8j.bOV5a(j4n.url);
        if (!!bFE2x) j4n.policyURL = bFE2x;
        hc8U.request(j4n)
    };
    beO5T.jj8b = function () {
        delete Q5V[this.yR3x];
        this.sV1x({
            status: 0
        });
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        ba5f = c4g("nej.h");
    ba5f.bGo2x = function () {
        var cO6I = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (jG9x) {
            jG9x = jG9x || "";
            if (cO6I.test(jG9x)) return RegExp.$1;
            return "*"
        }
    }();
    ba5f.beM5R = function (j4n) {
        return j4n
    };
    ba5f.beK5P = function (bGL2x, e4i) {
        if (!bGL2x.postMessage) return;
        e4i = e4i || X5c;
        bGL2x.postMessage(ba5f.beM5R(e4i.data), ba5f.bGo2x(e4i.origin))
    }
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ut"),
        b4f;
    if (!!M5R.fx7q) return;
    M5R.fx7q = NEJ.C();
    b4f = M5R.fx7q.O5T(M5R.cz5E);
    b4f.cl5q = function () {
        this.R5W = {};
        this.cr5w()
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.Nd8V = a4e.y5D(e4i.element) || window;
        this.bHQ3x(e4i.event);
        this.ckU1x();
        this.w5B("oninit")
    };
    b4f.bC5H = function () {
        var AV4Z = function (A5F, J5O, bv5A) {
            if (!k4o.ep7i(A5F)) {
                k4o.VV1x(this.Nd8V, J5O)
            }
            delete bv5A[J5O]
        };
        return function () {
            this.bG5L();
            k4o.ei7b(this.R5W, AV4Z, this);
            delete this.Nd8V
        }
    }();
    b4f.Tf1x = function (E5J, t4x) {
        E5J = a4e.y5D(E5J);
        return E5J == this.Nd8V && (!t4x || !!this.R5W["on" + t4x])
    };
    b4f.bHQ3x = function (d4h) {
        if (k4o.fn7g(d4h)) {
            var T5Y = "on" + d4h;
            if (!this.R5W[T5Y]) {
                this.R5W[T5Y] = this.cld1x.g4k(this, d4h)
            }
            this.bJy3x(d4h);
            return
        }
        if (k4o.ep7i(d4h)) {
            k4o.bc5h(d4h, this.bHQ3x, this)
        }
    };
    b4f.bJy3x = function (t4x) {
        var d4h = "on" + t4x,
            da6U = this.Nd8V[d4h],
            bJI3x = this.R5W[d4h];
        if (da6U != bJI3x) {
            this.Te1x(t4x);
            if (!!da6U && da6U != bn5s) this.bKm3x(t4x, da6U);
            this.Nd8V[d4h] = bJI3x
        }
    };
    b4f.bKm3x = function (t4x, da6U, clW2x) {
        var i4m = this.R5W[t4x];
        if (!i4m) {
            i4m = [];
            this.R5W[t4x] = i4m
        }
        if (k4o.ga7T(da6U)) {
            !clW2x ? i4m.push(da6U) : i4m.unshift(da6U)
        }
    };
    b4f.Te1x = function (t4x, da6U) {
        var i4m = this.R5W[t4x];
        if (!i4m || !i4m.length) return;
        if (!da6U) {
            delete this.R5W[t4x];
            return
        }
        k4o.lY9P(i4m, function (A5F, r4v, HJ6D) {
            if (da6U === A5F) {
                HJ6D.splice(r4v, 1);
                return !0
            }
        })
    };
    b4f.cld1x = function (t4x, d4h) {
        d4h = d4h || {
            noargs: !0
        };
        d4h.type = t4x;
        this.w5B("ondispatch", d4h);
        if (!!d4h.stopped) return;
        k4o.bc5h(this.R5W[t4x], function (da6U) {
            try {
                da6U(d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b4f.ckU1x = function () {
        var beq5v = function (d4h) {
            var bf5k = d4h.args,
                t4x = bf5k[1].toLowerCase();
            if (this.Tf1x(bf5k[0], t4x)) {
                d4h.stopped = !0;
                this.bJy3x(t4x);
                this.bKm3x(t4x, bf5k[2], bf5k[3]);
                this.w5B("oneventadd", {
                    type: t4x,
                    listener: bf5k[2]
                })
            }
        };
        var cmc2x = function (d4h) {
            var bf5k = d4h.args,
                t4x = bf5k[1].toLowerCase();
            if (this.Tf1x(bf5k[0], t4x)) {
                d4h.stopped = !0;
                this.Te1x(t4x, bf5k[2])
            }
        };
        var biN6H = function (d4h) {
            var bf5k = d4h.args,
                t4x = (bf5k[1] || "").toLowerCase();
            if (this.Tf1x(bf5k[0])) {
                if (!!t4x) {
                    this.Te1x(t4x);
                    return
                }
                k4o.ei7b(this.R5W, function (A5F, J5O) {
                    if (k4o.ep7i(A5F)) {
                        this.Te1x(J5O)
                    }
                }, this)
            }
        };
        var cmn2x = function (d4h) {
            var bf5k = d4h.args,
                t4x = bf5k[1].toLowerCase();
            if (this.Tf1x(bf5k[0], t4x)) {
                d4h.stopped = !0;
                bf5k[0]["on" + t4x].apply(bf5k[0], bf5k.slice(2))
            }
        };
        return function () {
            if (!!this.cmo2x) return;
            this.cmo2x = true;
            h4l.s4w = h4l.s4w.ee7X(beq5v.g4k(this));
            h4l.lS9J = h4l.lS9J.ee7X(cmc2x.g4k(this));
            h4l.hD8v = h4l.hD8v.ee7X(biN6H.g4k(this));
            h4l.w5B = h4l.w5B.ee7X(cmn2x.g4k(this))
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        M5R = c4g("nej.p"),
        ba5f = c4g("nej.h"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        H5M = c4g("nej.ut");
    if (M5R.ms9j.trident) return;
    if (!!window.postMessage) {
        ba5f.beM5R = ba5f.beM5R.ee7X(function (d4h) {
            d4h.stopped = !0;
            d4h.value = JSON.stringify(d4h.args[0])
        });
        return
    }
    var J5O = "MSG|",
        ji8a = [];
    var cmq2x = function () {
        var T5Y = unescape(window.name || "").trim();
        if (!T5Y || T5Y.indexOf(J5O) != 0) return;
        window.name = "";
        var m4q = k4o.bIK3x(T5Y.replace(J5O, ""), "|"),
            jG9x = (m4q.origin || "").toLowerCase();
        if (!!jG9x && jG9x != "*" && location.href.toLowerCase().indexOf(jG9x) != 0) return;
        h4l.w5B(window, "message", {
            data: JSON.parse(m4q.data || "null"),
            source: window.frames[m4q.self] || m4q.self,
            origin: ba5f.bGo2x(m4q.ref || document.referrer)
        })
    };
    var cmt2x = function () {
        var SY1x;
        var cmu2x = function (bv5A, r4v, i4m) {
            if (k4o.cT6N(SY1x, bv5A.w) < 0) {
                SY1x.push(bv5A.w);
                i4m.splice(r4v, 1);
                bv5A.w.name = bv5A.d
            }
        };
        return function () {
            SY1x = [];
            k4o.lY9P(ji8a, cmu2x);
            SY1x = null
        }
    }();
    ba5f.beK5P = function () {
        var cmZ2x = function (j4n) {
            var m4q = {};
            j4n = j4n || X5c;
            m4q.origin = j4n.origin || "";
            m4q.ref = location.href;
            m4q.self = j4n.source;
            m4q.data = JSON.stringify(j4n.data);
            return J5O + k4o.uq2x(m4q, "|", !0)
        };
        return ba5f.beK5P.ee7X(function (d4h) {
            d4h.stopped = !0;
            var bf5k = d4h.args;
            ji8a.unshift({
                w: bf5k[0],
                d: escape(cmZ2x(bf5k[1]))
            })
        })
    }();
    H5M.fx7q.B5G({
        element: window,
        event: "message"
    });
    window.setInterval(cmt2x, 100);
    window.setInterval(cmq2x, 20)
})();
(function () {
    var c4g = NEJ.P,
        ba5f = c4g("nej.h"),
        a4e = c4g("nej.e"),
        v5A = c4g("nej.j");
    v5A.cnV2x = function () {
        var iu8m = window.name || "_parent",
            cow2x = {
                gi7b: window.top,
                iu8m: window,
                bB5G: window.parent
            };
        return function (cD6x, e4i) {
            if (typeof cD6x == "string") {
                cD6x = cow2x[cD6x] || window.frames[cD6x];
                if (!cD6x) return this
            }
            var j4n = NEJ.X({
                origin: "*",
                source: iu8m
            }, e4i);
            ba5f.beK5P(cD6x, j4n);
            return this
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        ir8j = c4g("nej.c"),
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v5A = c4g("nej.j"),
        M5R = c4g("nej.ut.j"),
        Q5V = {},
        SR1x;
    if (!!M5R.bdX5c) return;
    M5R.bdX5c = NEJ.C();
    SR1x = M5R.bdX5c.O5T(M5R.Ik6e);
    SR1x.cl5q = function () {
        var eA7t = "NEJ-AJAX-DATA:",
            DT5Y = !1;
        var bdV5a = function (d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(eA7t) != 0) return;
            j4n = JSON.parse(j4n.replace(eA7t, ""));
            var jd8V = Q5V[j4n.key];
            if (!jd8V) return;
            delete Q5V[j4n.key];
            j4n.result = decodeURIComponent(j4n.result || "");
            jd8V.sV1x(j4n)
        };
        var bdU5Z = function () {
            if (!DT5Y) {
                DT5Y = !0;
                h4l.s4w(window, "message", bdV5a)
            }
        };
        return function () {
            this.cr5w();
            bdU5Z()
        }
    }();
    SR1x.ck5p = function (e4i) {
        var fF7y = e4i.request,
            jd8V = ir8j.bOO5T(fF7y.url),
            up2x = Q5V[jd8V];
        if (k4o.ep7i(up2x)) {
            up2x.push(this.ck5p.g4k(this, e4i));
            return
        }
        if (!up2x) {
            Q5V[jd8V] = [this.ck5p.g4k(this, e4i)];
            a4e.Yp2x({
                src: jd8V,
                visible: !1,
                onload: function (d4h) {
                    var i4m = Q5V[jd8V];
                    Q5V[jd8V] = h4l.U5Z(d4h).contentWindow;
                    k4o.lY9P(i4m, function (da6U) {
                        try {
                            da6U()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.yR3x = "frm-" + k4o.ng0x();
        Q5V[this.yR3x] = this;
        var j4n = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, fF7y);
        j4n.key = this.yR3x;
        j4n.headers = e4i.headers;
        v5A.cnV2x(Q5V[jd8V], {
            data: j4n
        })
    };
    SR1x.jj8b = function () {
        delete Q5V[this.yR3x];
        this.sV1x({
            status: 0
        });
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        dM7F = c4g("nej.g"),
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v5A = c4g("nej.j"),
        M5R = c4g("nej.ut.j"),
        Q5V = {},
        HE6y;
    if (!!M5R.bdQ5V) return;
    M5R.bdQ5V = NEJ.C();
    HE6y = M5R.bdQ5V.O5T(M5R.Ik6e);
    HE6y.cl5q = function () {
        var eA7t = "NEJ-UPLOAD-RESULT:",
            DT5Y = !1;
        var bdV5a = function (d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(eA7t) != 0) return;
            j4n = JSON.parse(j4n.replace(eA7t, ""));
            var jd8V = Q5V[j4n.key];
            if (!jd8V) return;
            delete Q5V[j4n.key];
            jd8V.sV1x(decodeURIComponent(j4n.result))
        };
        var bdU5Z = function () {
            if (!DT5Y) {
                DT5Y = !0;
                h4l.s4w(window, "message", bdV5a)
            }
        };
        return function () {
            this.cr5w();
            bdU5Z()
        }
    }();
    HE6y.bC5H = function () {
        this.bG5L();
        a4e.cK6E(this.bdP5U);
        delete this.bdP5U;
        window.clearTimeout(this.dK7D);
        delete this.dK7D
    };
    HE6y.sV1x = function (cL6F) {
        var P5U;
        try {
            P5U = JSON.parse(cL6F);
            this.w5B("onload", P5U)
        } catch (e) {
            this.w5B("onerror", {
                code: dM7F.bPi5n,
                message: cL6F
            })
        }
    };
    HE6y.ck5p = function () {
        var coR2x = function () {
            var lm9d, cL6F;
            try {
                var lm9d = this.bdP5U.contentWindow.document.body,
                    cL6F = lm9d.innerText || lm9d.textContent
            } catch (e) {
                return
            }
            this.sV1x(cL6F)
        };
        var bdL5Q = function (V5a, eI7B, qL1x) {
            v5A.bp5u(V5a, {
                type: "json",
                method: "POST",
                cookie: qL1x,
                mode: parseInt(eI7B) || 0,
                onload: function (j4n) {
                    if (!this.dK7D) return;
                    this.w5B("onuploading", j4n);
                    this.dK7D = window.setTimeout(bdL5Q.g4k(this, V5a, eI7B, qL1x), 1e3)
                }.g4k(this),
                onerror: function (bP5U) {
                    if (!this.dK7D) return;
                    this.dK7D = window.setTimeout(bdL5Q.g4k(this, V5a, eI7B, qL1x), 1e3)
                }.g4k(this)
            })
        };
        return function (e4i) {
            var fF7y = e4i.request,
                nv0x = e4i.headers,
                eD7w = fF7y.data,
                T5Y = "fom-" + k4o.ng0x();
            Q5V[T5Y] = this;
            eD7w.target = T5Y;
            eD7w.method = "POST";
            eD7w.enctype = dM7F.DF5K;
            eD7w.encoding = dM7F.DF5K;
            var V5a = eD7w.action || "",
                lo9f = V5a.indexOf("?") <= 0 ? "?" : "&";
            eD7w.action = V5a + lo9f + "_proxy_=form";
            this.bdP5U = a4e.Yp2x({
                name: T5Y,
                onload: function (d4h) {
                    var up2x = h4l.U5Z(d4h);
                    h4l.s4w(up2x, "load", coR2x.g4k(this));
                    eD7w.submit();
                    var bsQ9H = (eD7w.nej_query || X5c).value;
                    if (!bsQ9H) return;
                    var eI7B = (eD7w.nej_mode || X5c).value,
                        qL1x = (eD7w.nej_cookie || X5c).value == "true";
                    this.dK7D = window.setTimeout(bdL5Q.g4k(this, bsQ9H, eI7B, qL1x), 100)
                }.g4k(this)
            })
        }
    }();
    HE6y.jj8b = function () {
        this.w5B("onerror", {
            code: dM7F.bPr5w,
            message: "客户端终止文件上传"
        });
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        ba5f = c4g("nej.h"),
        M5R = c4g("nej.ut.j");
    ba5f.bhK6E = function () {
        return new XMLHttpRequest
    };
    ba5f.bdF5K = function (eI7B, SI1x, e4i) {
        var bv5A = !!SI1x ? {
            2: M5R.bdQ5V
        } : {
            2: M5R.bdX5c,
            3: M5R.beN5S
        };
        return (bv5A[eI7B] || M5R.Vc1x).B5G(e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        M5R = c4g("nej.p"),
        ba5f = c4g("nej.h");
    if (M5R.ms9j.trident) return;
    ba5f.bhK6E = function () {
        var Qo0x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var coY2x = function () {
            for (var i = 0, l = Qo0x.length; i < l; i++) {
                try {
                    return new ActiveXObject(Qo0x[i])
                } catch (e) {}
            }
            return null
        };
        return ba5f.bhK6E.ee7X(function (d4h) {
            if (!!window.XMLHttpRequest) return;
            d4h.stopped = !0;
            d4h.value = coY2x()
        })
    }();
    ba5f.bdF5K = function () {
        var Eh5m = {
            0: 2,
            1: 3
        };
        return ba5f.bdF5K.ee7X(function (d4h) {
            var bf5k = d4h.args,
                eI7B = bf5k[0] || 0;
            bf5k[0] = !!bf5k[1] ? 2 : Eh5m[eI7B] || eI7B
        })
    }()
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        ba5f = c4g("nej.h"),
        dM7F = c4g("nej.g"),
        k4o = c4g("nej.u"),
        v5A = c4g("nej.j"),
        M5R = c4g("nej.ut.j"),
        mJ9A = {},
        IP6J = bn5s;
    v5A.jj8b = function (eJ7C) {
        var Q5V = mJ9A[eJ7C];
        if (!Q5V) return this;
        Q5V.req.jj8b();
        return this
    };
    v5A.SD0x = function (dC6w) {
        IP6J = dC6w || bn5s;
        return this
    };
    v5A.bp5u = function () {
        var iK8C = (location.protocol + "//" + location.host).toLowerCase();
        var cpg2x = function (V5a) {
            var jG9x = k4o.cbn9e(V5a);
            return !!jG9x && jG9x != iK8C
        };
        var cpi2x = function (nv0x) {
            return (nv0x || X5c)[dM7F.wW3x] == dM7F.DF5K
        };
        var cpm2x = function (e4i) {
            var SI1x = cpi2x(e4i.headers);
            if (!cpg2x(e4i.url) && !SI1x) return M5R.Vc1x.B5G(e4i);
            return ba5f.bdF5K(e4i.mode, SI1x, e4i)
        };
        var AV4Z = function (eJ7C) {
            var Q5V = mJ9A[eJ7C];
            if (!Q5V) return;
            if (!!Q5V.req) Q5V.req.S5X();
            delete mJ9A[eJ7C]
        };
        var bvl9c = function (eJ7C, t4x) {
            var Q5V = mJ9A[eJ7C];
            if (!Q5V) return;
            AV4Z(eJ7C);
            try {
                var d4h = {
                    type: t4x,
                    result: arguments[2]
                };
                IP6J(d4h);
                if (!d4h.stopped)(Q5V[t4x] || bn5s)(d4h.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var xL3x = function (eJ7C, j4n) {
            bvl9c(eJ7C, "onload", j4n)
        };
        var zE3x = function (eJ7C, bP5U) {
            bvl9c(eJ7C, "onerror", bP5U)
        };
        return function (V5a, e4i) {
            e4i = e4i || {};
            var eJ7C = k4o.ng0x(),
                Q5V = {
                    onload: e4i.onload || bn5s,
                    onerror: e4i.onerror || bn5s
                };
            mJ9A[eJ7C] = Q5V;
            e4i.onload = xL3x.g4k(null, eJ7C);
            e4i.onerror = zE3x.g4k(null, eJ7C);
            if (!!e4i.query) {
                var lo9f = V5a.indexOf("?") < 0 ? "?" : "&",
                    bw5B = e4i.query;
                if (k4o.kI9z(bw5B)) bw5B = k4o.cY6S(bw5B);
                if (!!bw5B) V5a += lo9f + bw5B
            }
            e4i.url = V5a;
            Q5V.req = cpm2x(e4i);
            Q5V.req.bhQ6K(e4i.data);
            return eJ7C
        }
    }();
    v5A.gu8m = function (eD7w, e4i) {
        var gC8u = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(gC8u, e4i);
        gC8u.data = eD7w;
        gC8u.method = "POST";
        gC8u.timeout = 0;
        gC8u.headers[dM7F.wW3x] = dM7F.DF5K;
        return v5A.bp5u(eD7w.action, gC8u)
    }
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        dM7F = c4g("nej.g"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H5M = c4g("nej.ut"),
        M5R = c4g("nej.ut.j"),
        lq9h, jo8g = 6e4;
    if (!!M5R.MH7A) return;
    M5R.MH7A = NEJ.C();
    lq9h = M5R.MH7A.O5T(H5M.cz5E);
    lq9h.cl5q = function () {
        this.cr5w();
        this.MG7z = {
            onerror: this.cpw2x.g4k(this),
            onloaded: this.cpx2x.g4k(this)
        };
        if (!this.constructor.R5W) this.constructor.R5W = {
            loaded: {}
        }
    };
    lq9h.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.Hz6t = e4i.version;
        this.bcS5X = e4i.timeout;
        this.MG7z.version = this.Hz6t;
        this.MG7z.timeout = this.bcS5X
    };
    lq9h.byi0x = function (J5O) {
        delete this.constructor.R5W[J5O]
    };
    lq9h.zI3x = function (J5O) {
        return this.constructor.R5W[J5O]
    };
    lq9h.byv0x = function (J5O, j4n) {
        this.constructor.R5W[J5O] = j4n
    };
    lq9h.Sk0x = bn5s;
    lq9h.byY0x = function (fF7y) {
        h4l.hD8v(fF7y)
    };
    lq9h.bcM5R = function (fF7y) {
        fF7y.src = this.kw9n;
        document.head.appendChild(fF7y)
    };
    lq9h.zM4Q = function () {
        var Q5V = this.zI3x(this.kw9n);
        if (!Q5V) return;
        window.clearTimeout(Q5V.timer);
        this.byY0x(Q5V.request);
        delete Q5V.bind;
        delete Q5V.timer;
        delete Q5V.request;
        this.byi0x(this.kw9n);
        this.zI3x("loaded")[this.kw9n] = !0
    };
    lq9h.Sh0x = function (T5Y) {
        var Q5V = this.zI3x(this.kw9n);
        if (!Q5V) return;
        var i4m = Q5V.bind;
        this.zM4Q();
        if (!!i4m && i4m.length > 0) {
            var cp5u;
            while (i4m.length) {
                cp5u = i4m.shift();
                try {
                    cp5u.w5B(T5Y, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cp5u.S5X()
            }
        }
    };
    lq9h.ej7c = function (bP5U) {
        this.Sh0x("onerror", bP5U)
    };
    lq9h.bzq0x = function () {
        this.Sh0x("onloaded")
    };
    lq9h.cpX2x = function (V5a) {
        this.constructor.B5G(this.MG7z).Hx6r(V5a)
    };
    lq9h.bzz0x = function (bP5U) {
        var Q5V = this.zI3x(this.va2x);
        if (!Q5V) return;
        if (!!bP5U) Q5V.error++;
        Q5V.loaded++;
        if (Q5V.loaded < Q5V.total) return;
        this.byi0x(this.va2x);
        this.w5B(Q5V.error > 0 ? "onerror" : "onloaded")
    };
    lq9h.cpw2x = function (bP5U) {
        this.bzz0x(!0)
    };
    lq9h.cpx2x = function () {
        this.bzz0x()
    };
    lq9h.Hx6r = function (V5a) {
        V5a = k4o.bjR6L(V5a);
        if (!V5a) {
            this.w5B("onerror", {
                code: dM7F.bpQ8I,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.kw9n = V5a;
        if (!!this.Hz6t) this.kw9n += (this.kw9n.indexOf("?") < 0 ? "?" : "&") + this.Hz6t;
        if (this.zI3x("loaded")[this.kw9n]) {
            try {
                this.w5B("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S5X();
            return this
        }
        var Q5V = this.zI3x(this.kw9n),
            fF7y;
        if (!!Q5V) {
            Q5V.bind.unshift(this);
            Q5V.timer = window.clearTimeout(Q5V.timer)
        } else {
            fF7y = this.Sk0x();
            Q5V = {
                request: fF7y,
                bind: [this]
            };
            this.byv0x(this.kw9n, Q5V);
            h4l.s4w(fF7y, "load", this.bzq0x.g4k(this));
            h4l.s4w(fF7y, "error", this.ej7c.g4k(this, {
                code: dM7F.bpO8G,
                message: "无法加载指定资源文件[" + this.kw9n + "]！"
            }))
        } if (this.bcS5X != 0) Q5V.timer = window.setTimeout(this.ej7c.g4k(this, {
            code: dM7F.bzL1x,
            message: "指定资源文件[" + this.kw9n + "]载入超时！"
        }), this.bcS5X || jo8g);
        if (!!fF7y) this.bcM5R(fF7y);
        this.w5B("onloading");
        return this
    };
    lq9h.bzE0x = function (i4m) {
        if (!i4m || !i4m.length) {
            this.w5B("onerror", {
                code: dM7F.bpQ8I,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.va2x = k4o.ng0x();
        var Q5V = {
            error: 0,
            loaded: 0,
            total: i4m.length
        };
        this.byv0x(this.va2x, Q5V);
        for (var i = 0, l = i4m.length; i < l; i++) {
            if (!i4m[i]) {
                Q5V.total--;
                continue
            }
            this.cpX2x(i4m[i])
        }
        this.w5B("onloading");
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        a4e = c4g("nej.e"),
        ba5f = c4g("nej.h"),
        M5R = c4g("nej.ut.j"),
        Ms7l;
    if (!!M5R.bcx4B) return;
    M5R.bcx4B = NEJ.C();
    Ms7l = M5R.bcx4B.O5T(M5R.MH7A);
    Ms7l.Sk0x = function () {
        var fd7W = a4e.cQ6K("iframe");
        fd7W.width = 0;
        fd7W.height = 0;
        fd7W.style.display = "none";
        return fd7W
    };
    Ms7l.bcM5R = function (fF7y) {
        fF7y.src = this.kw9n;
        document.body.appendChild(fF7y)
    };
    Ms7l.ej7c = function (bP5U) {
        var fd7W = (this.zI3x(this.kw9n) || X5c).request;
        this.Sh0x("onerror", bP5U);
        ba5f.YG2x(fd7W)
    };
    Ms7l.bzq0x = function () {
        var lm9d = null,
            fd7W = (this.zI3x(this.kw9n) || X5c).request;
        try {
            lm9d = fd7W.contentWindow.document.body
        } catch (ex) {}
        this.Sh0x("onloaded", lm9d);
        ba5f.YG2x(fd7W)
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        M5R = c4g("nej.ut.j"),
        bcw4A;
    if (!!M5R.RY0x) return;
    M5R.RY0x = NEJ.C();
    bcw4A = M5R.RY0x.O5T(M5R.MH7A);
    bcw4A.Sk0x = function () {
        return a4e.cQ6K("link")
    };
    bcw4A.bcM5R = function (fF7y) {
        fF7y.href = this.kw9n;
        document.head.appendChild(fF7y)
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        M5R = c4g("nej.ut.j"),
        RX0x;
    if (!!M5R.RR0x) return;
    M5R.RR0x = NEJ.C();
    RX0x = M5R.RR0x.O5T(M5R.MH7A);
    RX0x.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.bBg1x = e4i.async;
        this.bcc4g = e4i.charset;
        this.MG7z.async = !1;
        this.MG7z.charset = this.bcc4g
    };
    RX0x.Sk0x = function () {
        var fF7y = a4e.cQ6K("script");
        if (this.bBg1x != null) fF7y.async = !!this.bBg1x;
        if (this.bcc4g != null) fF7y.charset = this.bcc4g;
        return fF7y
    };
    RX0x.byY0x = function (fF7y) {
        a4e.cK6E(fF7y)
    }
})();
(function () {
    var c4g = NEJ.P,
        v5A = c4g("nej.j"),
        M5R = c4g("nej.ut.j");
    v5A.cqc3x = function (V5a, e4i) {
        M5R.RR0x.B5G(e4i).Hx6r(V5a);
        return this
    };
    v5A.cqu3x = function (i4m, e4i) {
        M5R.RR0x.B5G(e4i).bzE0x(i4m);
        return this
    };
    v5A.cuq3x = function (V5a, e4i) {
        M5R.RY0x.B5G(e4i).Hx6r(V5a);
        return this
    };
    v5A.cqz3x = function (i4m, e4i) {
        M5R.RY0x.B5G(e4i).bzE0x(i4m);
        return this
    };
    v5A.bBN1x = function (V5a, e4i) {
        M5R.bcx4B.B5G(e4i).Hx6r(V5a);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v5A = c4g("nej.j"),
        H5M = c4g("nej.ut"),
        Q5V = {},
        rC1x = +(new Date) + "-";
    a4e.cE6y = function () {
        var cx5C = 0;
        var Mk7d = function () {
            if (cx5C > 0) return;
            cx5C = 0;
            h4l.w5B(document, "templateready");
            h4l.hD8v(document, "templateready")
        };
        var RJ0x = function (fD7w, e4i) {
            var dv6p = a4e.u5z(fD7w, "src");
            if (!dv6p) return;
            e4i = e4i || X5c;
            var fr7k = e4i.root;
            if (!fr7k) {
                fr7k = fD7w.ownerDocument.location.href
            } else {
                fr7k = k4o.bjR6L(fr7k)
            }
            dv6p = dv6p.split(",");
            k4o.bc5h(dv6p, function (A5F, r4v, i4m) {
                i4m[r4v] = k4o.bjR6L(A5F, fr7k)
            });
            return dv6p
        };
        var cqC3x = function (fD7w, e4i) {
            if (!fD7w) return;
            var dv6p = RJ0x(fD7w, e4i);
            if (!!dv6p) v5A.cqz3x(dv6p, {
                version: a4e.u5z(fD7w, "version")
            });
            a4e.bsa9R(fD7w.value)
        };
        var cqR3x = function (A5F) {
            cx5C--;
            a4e.bsf9W(A5F);
            Mk7d()
        };
        var crb3x = function (fD7w, e4i) {
            if (!fD7w) return;
            var dv6p = RJ0x(fD7w, e4i),
                es7l = fD7w.value;
            if (!!dv6p) {
                cx5C++;
                var e4i = {
                    version: a4e.u5z(fD7w, "version"),
                    onloaded: cqR3x.g4k(null, es7l)
                };
                window.setTimeout(v5A.cqu3x.g4k(v5A, dv6p, e4i), 0);
                return
            }
            a4e.bsf9W(es7l)
        };
        var crB3x = function (lm9d) {
            cx5C--;
            a4e.cE6y(lm9d);
            Mk7d()
        };
        var crL3x = function (fD7w, e4i) {
            if (!fD7w) return;
            var dv6p = RJ0x(fD7w, e4i)[0];
            if (!!dv6p) {
                cx5C++;
                var e4i = {
                    version: a4e.u5z(fD7w, "version"),
                    onloaded: crB3x
                };
                window.setTimeout(v5A.bBN1x.g4k(v5A, dv6p, e4i), 0)
            }
        };
        var csa3x = function (C5H, cL6F) {
            cx5C--;
            a4e.Ht6n(C5H, cL6F || "");
            Mk7d()
        };
        var csc3x = function (fD7w, e4i) {
            if (!fD7w || !fD7w.id) return;
            var C5H = fD7w.id,
                dv6p = RJ0x(fD7w, e4i)[0];
            if (!!dv6p) {
                cx5C++;
                var V5a = dv6p + (dv6p.indexOf("?") < 0 ? "?" : "&") + (a4e.u5z(fD7w, "version") || ""),
                    e4i = {
                        type: "text",
                        method: "GET",
                        onload: csa3x.g4k(null, C5H)
                    };
                window.setTimeout(v5A.bp5u.g4k(v5A, V5a, e4i), 0)
            }
        };
        var csi3x = function (f4j, e4i) {
            var t4x = f4j.name.toLowerCase();
            switch (t4x) {
            case "jst":
                a4e.ek7d(f4j, !0);
                return;
            case "txt":
                a4e.Ht6n(f4j.id, f4j.value || "");
                return;
            case "ntp":
                a4e.hU8M(f4j.value || "", f4j.id);
                return;
            case "js":
                crb3x(f4j, e4i);
                return;
            case "css":
                cqC3x(f4j, e4i);
                return;
            case "html":
                crL3x(f4j, e4i);
                return;
            case "res":
                csc3x(f4j, e4i);
                return
            }
        };
        H5M.fx7q.B5G({
            element: document,
            event: "templateready",
            oneventadd: Mk7d
        });
        return function (E5J, e4i) {
            E5J = a4e.y5D(E5J);
            if (!!E5J) {
                var i4m = E5J.tagName == "TEXTAREA" ? [E5J] : E5J.getElementsByTagName("textarea");
                k4o.bc5h(i4m, function (f4j) {
                    csi3x(f4j, e4i)
                });
                a4e.cK6E(E5J, !0)
            }
            Mk7d();
            return this
        }
    }();
    a4e.Ht6n = function (J5O, A5F) {
        Q5V[J5O] = A5F || "";
        return this
    };
    a4e.hV8N = function (J5O) {
        return Q5V[J5O] || ""
    };
    a4e.hU8M = function (E5J, J5O) {
        J5O = J5O || k4o.ng0x();
        E5J = a4e.y5D(E5J) || E5J;
        a4e.Ht6n(rC1x + J5O, E5J);
        a4e.lV9M(E5J);
        return J5O
    };
    a4e.dq6k = function (J5O) {
        if (!J5O) return null;
        J5O = rC1x + J5O;
        var A5F = a4e.hV8N(J5O);
        if (!A5F) return null;
        if (k4o.fn7g(A5F)) {
            A5F = a4e.mV0x(A5F);
            a4e.Ht6n(J5O, A5F)
        }
        return A5F.cloneNode(!0)
    };
    a4e.zT4X = function () {
        var IP6J = function (A5F, J5O) {
            return J5O == "offset" || J5O == "limit"
        };
        return function (i4m, q4u, e4i) {
            var bs5x = [];
            if (!i4m || !i4m.length || !q4u) return bs5x;
            e4i = e4i || X5c;
            var du6o = i4m.length,
                iW8O = parseInt(e4i.offset) || 0,
                gD8v = Math.min(du6o, iW8O + (parseInt(e4i.limit) || du6o)),
                cm5r = {
                    total: i4m.length,
                    range: [iW8O, gD8v]
                };
            NEJ.X(cm5r, e4i, IP6J);
            for (var i = iW8O, cp5u; i < gD8v; i++) {
                cm5r.index = i;
                cm5r.data = i4m[i];
                cp5u = q4u.B5G(cm5r);
                var C5H = cp5u.Ck4o();
                Q5V[C5H] = cp5u;
                cp5u.S5X = cp5u.S5X.ee7X(function (C5H, cp5u) {
                    delete Q5V[C5H];
                    delete cp5u.S5X
                }.g4k(null, C5H, cp5u));
                bs5x.push(cp5u)
            }
            return bs5x
        }
    }();
    a4e.bFn2x = function (C5H) {
        return Q5V[C5H]
    };
    a4e.ctX3x = function (dD7w, e4i) {
        e4i = e4i || X5c;
        a4e.cE6y(e4i.tid || "template-box");
        h4l.s4w(document, "templateready", function () {
            dD7w.B5G().w5B("onshow", e4i)
        })
    };
    c4g("dbg").dumpTC = function () {
        return Q5V
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        H5M = c4g("nej.ut"),
        M5R = c4g("nej.ui"),
        b4f;
    if (!!M5R.en7g) return;
    M5R.en7g = NEJ.C();
    b4f = M5R.en7g.O5T(H5M.cz5E);
    b4f.cl5q = function () {
        this.cr5w();
        a4e.bDq2x();
        this.bZ5e();
        this.bR5W()
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.csn3x(e4i.clazz);
        this.bGl2x(e4i.parent)
    };
    b4f.bC5H = function () {
        this.bG5L();
        this.bGm2x();
        delete this.fA7t;
        a4e.lV9M(this.o4s);
        a4e.x5C(this.o4s, this.bbC4G);
        delete this.bbC4G
    };
    b4f.bZ5e = bn5s;
    b4f.bR5W = function () {
        if (!this.ca5f) this.RD0x();
        this.o4s = a4e.dq6k(this.ca5f);
        if (!this.o4s) this.o4s = a4e.cQ6K("div", this.kU9L);
        a4e.z5E(this.o4s, this.kU9L)
    };
    b4f.RD0x = bn5s;
    b4f.csn3x = function (dE7x) {
        this.bbC4G = dE7x || "";
        a4e.z5E(this.o4s, this.bbC4G)
    };
    b4f.csu3x = function () {
        if (!this.kU9L) return;
        a4e.z5E(this.fA7t, this.kU9L + "-parent")
    };
    b4f.bGm2x = function () {
        if (!this.kU9L) return;
        a4e.x5C(this.fA7t, this.kU9L + "-parent")
    };
    b4f.kM9D = function () {
        return this.o4s
    };
    b4f.bGl2x = function (bB5G) {
        if (!this.o4s) return this;
        this.bGm2x();
        if (k4o.ga7T(bB5G)) {
            this.fA7t = bB5G(this.o4s)
        } else {
            this.fA7t = a4e.y5D(bB5G);
            if (!!this.fA7t) this.fA7t.appendChild(this.o4s)
        }
        this.csu3x();
        return this
    };
    b4f.N5S = function () {
        if (!this.fA7t || !this.o4s || this.o4s.parentNode == this.fA7t) return this;
        this.fA7t.appendChild(this.o4s);
        return this
    };
    b4f.bq5v = function () {
        a4e.lV9M(this.o4s);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        ba5f = c4g("nej.h"),
        M5R = c4g("nej.ui"),
        us2x, bIP3x;
    if (!!M5R.Mi7b) return;
    M5R.Mi7b = NEJ.C();
    us2x = M5R.Mi7b.O5T(M5R.en7g);
    bIP3x = M5R.Mi7b.ch5m;
    us2x.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.uI2x("oncontentready", e4i.oncontentready || this.csw3x.g4k(this));
        this.csy3x = !!e4i.nohack;
        this.csT3x = !!e4i.destroyable;
        this.Hs6m(e4i.content)
    };
    us2x.bC5H = function () {
        this.w5B("onbeforerecycle");
        this.bG5L();
        this.Rv0x();
        this.Hs6m("");
        a4e.fz7s(this.o4s, {
            top: "",
            left: ""
        })
    };
    us2x.csw3x = bn5s;
    us2x.Hr6l = bn5s;
    us2x.Rv0x = function () {
        a4e.lV9M(this.o4s);
        if (!!this.mO0x) {
            this.mO0x = ba5f.boU8M(this.o4s);
            delete this.mO0x
        }
    };
    us2x.Hs6m = function (bl5q) {
        if (!this.o4s || !this.zX4b || bl5q == null) return this;
        bl5q = bl5q || "";
        k4o.fn7g(bl5q) ? this.zX4b.innerHTML = bl5q : this.zX4b.appendChild(bl5q);
        this.w5B("oncontentready", this.zX4b);
        return this
    };
    us2x.fZ7S = function (bi5n) {
        var A5F = bi5n.top;
        if (A5F != null) {
            A5F += "px";
            a4e.Y5d(this.o4s, "top", A5F);
            a4e.Y5d(this.mO0x, "top", A5F)
        }
        var A5F = bi5n.left;
        if (A5F != null) {
            A5F += "px";
            a4e.Y5d(this.o4s, "left", A5F);
            a4e.Y5d(this.mO0x, "left", A5F)
        }
        return this
    };
    us2x.N5S = function () {
        a4e.Y5d(this.o4s, "visibility", "hidden");
        bIP3x.N5S.apply(this, arguments);
        this.Hr6l();
        a4e.Y5d(this.o4s, "visibility", "");
        if (!this.csy3x) {
            this.mO0x = ba5f.mO0x(this.o4s)
        }
        return this
    };
    us2x.bq5v = function () {
        this.csT3x ? this.S5X() : this.Rv0x();
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        k4o = c4g("nej.u"),
        a4e = c4g("nej.e"),
        M5R = c4g("nej.ui"),
        zY4c;
    if (!!M5R.Rs0x) return;
    M5R.Rs0x = NEJ.C();
    zY4c = M5R.Rs0x.O5T(M5R.en7g);
    zY4c.bj5o = function (e4i) {
        this.Ma7T();
        this.bk5p(this.ctA3x(e4i));
        this.bQ5V.onbeforerecycle = this.S5X.g4k(this);
        this.nk0x = this.bba4e()
    };
    zY4c.bC5H = function () {
        this.w5B("onbeforerecycle");
        this.bG5L();
        delete this.bQ5V;
        a4e.lV9M(this.o4s);
        var Aa4e = this.nk0x;
        if (!!Aa4e) {
            delete this.nk0x;
            Aa4e.S5X()
        }
    };
    zY4c.bba4e = bn5s;
    zY4c.ctA3x = function (e4i) {
        var m4q = {};
        k4o.ei7b(e4i, function (q4u, J5O) {
            this.bQ5V.hasOwnProperty(J5O) ? this.bQ5V[J5O] = q4u : m4q[J5O] = q4u
        }, this);
        return m4q
    };
    zY4c.Ma7T = function () {
        this.bQ5V = {
            clazz: "",
            parent: null,
            content: this.o4s,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    };
    zY4c.N5S = function () {
        if (!!this.nk0x) this.nk0x.N5S();
        this.w5B("onaftershow");
        return this
    };
    zY4c.bq5v = function () {
        if (!!this.nk0x) this.nk0x.bq5v();
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        dM7F = c4g("nej.g"),
        ba5f = c4g("nej.h"),
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        M5R = c4g("nej.ui"),
        LY7R, bLV4Z;
    if (!!M5R.Ho6i) return;
    var ib8T = a4e.rS1x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dM7F.bpE8w + ");}");
    M5R.Ho6i = NEJ.C();
    LY7R = M5R.Ho6i.O5T(M5R.en7g);
    bLV4Z = M5R.Ho6i.ch5m;
    LY7R.bj5o = function (e4i) {
        this.bk5p(e4i);
        var bl5q = e4i.content || "&nbsp;";
        k4o.fn7g(bl5q) ? this.o4s.innerHTML = bl5q : this.o4s.appendChild(bl5q)
    };
    LY7R.bC5H = function () {
        this.bG5L();
        this.o4s.innerHTML = "&nbsp;"
    };
    LY7R.bZ5e = function () {
        this.kU9L = ib8T
    };
    LY7R.N5S = function () {
        ba5f.boV8N(this.o4s);
        bLV4Z.N5S.apply(this, arguments);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        M5R = c4g("nej.ut"),
        ve2x;
    if (!!M5R.xA3x) return;
    M5R.xA3x = NEJ.C();
    ve2x = M5R.xA3x.O5T(M5R.cz5E);
    ve2x.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.ctB3x = !!e4i.overflow;
        this.o4s = a4e.y5D(e4i.body);
        this.Ad4h = a4e.y5D(e4i.view) || a4e.bLM4Q(this.o4s);
        this.bNN4R = a4e.y5D(e4i.mbar) || this.o4s;
        this.ZV4Z = parseInt(e4i.direction) || 0;
        if (!!e4i.isRelative) {
            this.o4s.style.position = "relative";
            this.baN4R = true;
            this.baJ4N()
        }
        this.bS5X([
            [document, "mouseup", this.baI4M.g4k(this)],
            [document, "mousemove", this.baG4K.g4k(this)],
            [this.bNN4R, "mousedown", this.LS7L.g4k(this)]
        ])
    };
    ve2x.baJ4N = function () {
        if (!!this.baN4R) {
            this.Hm6g = a4e.hO8G(this.o4s, this.Ad4h);
            this.Hm6g.x -= parseInt(a4e.cW6Q(this.o4s, "left")) || 0;
            this.Hm6g.y -= parseInt(a4e.cW6Q(this.o4s, "top")) || 0
        }
    };
    ve2x.bC5H = function () {
        this.bG5L();
        delete this.o4s;
        delete this.bNN4R;
        delete this.Ad4h
    };
    ve2x.baB4F = function () {
        return {
            x: Math.max(this.Ad4h.clientWidth, this.Ad4h.scrollWidth) - this.o4s.offsetWidth,
            y: Math.max(this.Ad4h.clientHeight, this.Ad4h.scrollHeight) - this.o4s.offsetHeight
        }
    };
    ve2x.LS7L = function (d4h) {
        h4l.bh5m(d4h);
        if (!!this.hP8H) return;
        this.hP8H = {
            x: h4l.kz9q(d4h),
            y: h4l.nL0x(d4h)
        };
        this.bsn9e = this.baB4F();
        this.w5B("ondragstart", d4h)
    };
    ve2x.baG4K = function (d4h) {
        if (!this.hP8H) return;
        var bi5n = {
            x: h4l.kz9q(d4h),
            y: h4l.nL0x(d4h)
        };
        var rQ1x = bi5n.x - this.hP8H.x,
            rR1x = bi5n.y - this.hP8H.y,
            A5F = {
                top: (parseInt(a4e.cW6Q(this.o4s, "top")) || 0) + rR1x,
                left: (parseInt(a4e.cW6Q(this.o4s, "left")) || 0) + rQ1x
            };
        if (this.baN4R) {
            this.baJ4N();
            A5F.top = A5F.top + this.Hm6g.y;
            A5F.left = A5F.left + this.Hm6g.x
        }
        this.hP8H = bi5n;
        this.fZ7S(A5F)
    };
    ve2x.baI4M = function (d4h) {
        if (!this.hP8H) return;
        delete this.bsn9e;
        delete this.hP8H;
        this.w5B("ondragend", this.baA4E())
    };
    ve2x.fZ7S = function (d4h) {
        if (!this.ctB3x) {
            var bsD9u = this.bsn9e || this.baB4F();
            d4h.top = Math.min(bsD9u.y, Math.max(0, d4h.top));
            d4h.left = Math.min(bsD9u.x, Math.max(0, d4h.left))
        }
        var cd5i = this.o4s.style;
        if (this.baN4R) {
            this.baJ4N();
            d4h.top = d4h.top - this.Hm6g.y;
            d4h.left = d4h.left - this.Hm6g.x
        }
        if (this.ZV4Z == 0 || this.ZV4Z == 2) cd5i.top = d4h.top + "px";
        if (this.ZV4Z == 0 || this.ZV4Z == 1) cd5i.left = d4h.left + "px";
        this.w5B("onchange", d4h);
        return this
    };
    ve2x.baA4E = function () {
        return {
            left: parseInt(a4e.cW6Q(this.o4s, "left")) || 0,
            top: parseInt(a4e.cW6Q(this.o4s, "top")) || 0
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        a4e = NEJ.P("nej.e"),
        h4l = NEJ.P("nej.v"),
        k4o = NEJ.P("nej.u"),
        H5M = NEJ.P("nej.ut"),
        M5R = NEJ.P("nej.ui"),
        ib8T, gg7Z, b4f, K5P;
    if (!!M5R.ZF4J) return;
    M5R.ZF4J = NEJ.C();
    b4f = M5R.ZF4J.O5T(M5R.Mi7b);
    K5P = M5R.ZF4J.ch5m;
    b4f.cl5q = function () {
        this.qg1x = {};
        this.jL9C = {
            onchange: this.baG4K.g4k(this)
        };
        this.cr5w()
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.ctK3x(e4i.mask);
        this.ctI3x(e4i.align);
        this.Ai4m(e4i.title);
        if (!e4i.draggable) return;
        this.iR8J = H5M.xA3x.B5G(this.jL9C)
    };
    b4f.bC5H = function () {
        this.bG5L();
        delete this.pp0x;
        delete this.LP7I;
        if (!!this.Al4p) {
            this.Al4p.S5X();
            delete this.Al4p
        }
        if (!!this.iR8J) {
            this.iR8J.S5X();
            delete this.iR8J
        }
    };
    b4f.bZ5e = function () {
        this.kU9L = ib8T;
        this.ca5f = gg7Z
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a4e.cP6J(this.o4s);
        this.zX4b = i4m[1];
        this.jL9C.mbar = i4m[0];
        this.jL9C.body = this.o4s;
        h4l.s4w(i4m[2], "mousedown", this.ctH3x.g4k(this));
        h4l.s4w(this.jL9C.mbar, "mousedown", this.LS7L.g4k(this));
        this.bvg9X = a4e.cP6J(this.jL9C.mbar)[0]
    };
    b4f.ctH3x = function (d4h) {
        h4l.bh5m(d4h);
        this.w5B("onclose", d4h);
        if (!d4h.stopped) {
            this.bq5v()
        }
    };
    b4f.LS7L = function (d4h) {
        h4l.w5B(document, "click")
    };
    b4f.baG4K = function (d4h) {
        if (!this.mO0x) return;
        a4e.fz7s(this.mO0x, {
            top: d4h.top + "px",
            left: d4h.left + "px"
        })
    };
    b4f.Hr6l = function () {
        var eF7y = [
                function () {
                    return 0
                },
                function (mW0x, Bw4A, bi5n, J5O) {
                    if (J5O == "top" && window.top != window.self) {
                        var Zx4B = 0,
                            BA4E = 0;
                        if (top.g_topBarHeight) Zx4B = top.g_topBarHeight;
                        if (top.g_bottomBarShow && top.g_bottomBarHeight) BA4E = top.g_bottomBarHeight;
                        if (mW0x.top <= Zx4B) {
                            var bru8m = Math.max(0, (Bw4A.height - (Zx4B - mW0x.top) - BA4E - bi5n.height) / 2);
                            return bru8m + Zx4B
                        } else {
                            var bru8m = Math.max(0, (Bw4A.height - BA4E - bi5n.height) / 2);
                            return bru8m + mW0x.top
                        }
                    }
                    return Math.max(0, mW0x[J5O] + (Bw4A[hF8x[J5O]] - bi5n[hF8x[J5O]]) / 2)
                },
                function (mW0x, Bw4A, bi5n, J5O) {
                    return mW0x[J5O] + (Bw4A[hF8x[J5O]] - bi5n[hF8x[J5O]])
                }
            ],
            ctF3x = ["left", "top"],
            hF8x = {
                left: "width",
                top: "height"
            };
        return function () {
            var A5F = {},
                cd5i = this.o4s.style,
                iL8D = a4e.og0x(),
                mW0x = {
                    left: iL8D.scrollLeft,
                    top: iL8D.scrollTop
                },
                Bw4A = {
                    width: iL8D.clientWidth,
                    height: iL8D.clientHeight
                },
                bi5n = {
                    width: this.o4s.offsetWidth,
                    height: this.o4s.offsetHeight
                },
                de6Y = {
                    left: iL8D.clientWidth - this.o4s.offsetWidth,
                    top: iL8D.clientHeight - this.o4s.offsetHeight
                };
            k4o.bc5h(ctF3x, function (J5O, r4v) {
                var da6U = eF7y[this.pp0x[r4v]];
                if (!da6U) return;
                A5F[J5O] = da6U(mW0x, Bw4A, bi5n, J5O)
            }, this);
            this.fZ7S(A5F)
        }
    }();
    b4f.ctD3x = function () {
        if (!this.Al4p) {
            if (!this.LP7I) return;
            this.qg1x.parent = this.fA7t;
            this.Al4p = this.LP7I.B5G(this.qg1x)
        }
        this.Al4p.N5S()
    };
    b4f.Rv0x = function () {
        if (!!this.Al4p) this.Al4p.bq5v();
        K5P.Rv0x.apply(this, arguments)
    };
    b4f.ctK3x = function (kd9U) {
        if (!!kd9U) {
            if (kd9U instanceof M5R.Ho6i) {
                this.Al4p = kd9U;
                return
            }
            if (k4o.ga7T(kd9U)) {
                this.LP7I = kd9U;
                return
            }
            this.LP7I = M5R.Ho6i;
            if (k4o.fn7g(kd9U)) this.qg1x.clazz = kd9U;
            return
        }
        this.LP7I = null
    };
    b4f.Ai4m = function (eG7z, dA6u) {
        if (!!this.bvg9X) {
            var bam4q = !dA6u ? "innerText" : "innerHTML";
            this.bvg9X[bam4q] = eG7z || "标题"
        }
        return this
    };
    b4f.ctI3x = function () {
        var cO6I = /\s+/,
            ctz3x = {
                left: 0,
                center: 1,
                right: 2,
                auto: 3
            },
            ctx3x = {
                top: 0,
                middle: 1,
                bottom: 2,
                auto: 3
            };
        return function (mQ0x) {
            this.pp0x = (mQ0x || "").split(cO6I);
            var dN7G = ctz3x[this.pp0x[0]];
            if (dN7G == null) dN7G = 1;
            this.pp0x[0] = dN7G;
            var dN7G = ctx3x[this.pp0x[1]];
            if (dN7G == null) dN7G = 1;
            this.pp0x[1] = dN7G;
            return this
        }
    }();
    b4f.N5S = function () {
        K5P.N5S.apply(this, arguments);
        this.ctD3x();
        return this
    };
    ib8T = a4e.rS1x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gg7Z = a4e.hU8M('<div class="' + ib8T + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var c4g = NEJ.P,
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ui"),
        bre8W;
    if (!!M5R.Zq4u) return;
    M5R.Zq4u = NEJ.C();
    bre8W = M5R.Zq4u.O5T(M5R.Rs0x);
    bre8W.bba4e = function () {
        return M5R.ZF4J.B5G(this.bQ5V)
    };
    bre8W.Ma7T = function () {
        M5R.Zq4u.ch5m.Ma7T.apply(this, arguments);
        this.bQ5V.mask = null;
        this.bQ5V.title = "标题";
        this.bQ5V.align = "";
        this.bQ5V.draggable = !1;
        this.bQ5V.onclose = null
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        be5j = c4g("nej.ui"),
        n4r = c4g("nm.l"),
        b4f, K5P;
    n4r.dU7N = NEJ.C();
    b4f = n4r.dU7N.O5T(be5j.Zq4u);
    b4f.bj5o = function (e4i) {
        e4i.clazz = "m-layer z-show " + (e4i.clazz || "");
        e4i.nohack = true;
        e4i.draggable = true;
        this.bk5p(e4i)
    };
    b4f.dw6q = function (f4j, bD5I) {
        if (!f4j) return;
        a4e.Y5d(f4j, "display", !bD5I ? "none" : "");
        f4j.lastChild.innerText = bD5I || ""
    };
    b4f.dJ7C = function (gk7d, cH6B, LJ7C, LI7B) {
        var dD7w = "js-lock";
        if (cH6B === undefined) return a4e.bA5F(gk7d, dD7w);
        !cH6B ? a4e.x5C(gk7d, dD7w) : a4e.z5E(gk7d, dD7w);
        gk7d.firstChild.innerText = !cH6B ? LJ7C : LI7B
    };
    n4r.dU7N.N5S = function (e4i) {
        e4i = e4i || {};
        if (e4i.mask === undefined) e4i.mask = "m-mask";
        if (e4i.parent === undefined) e4i.parent = document.body;
        if (e4i.draggable === undefined) e4i.draggable = true;
        !!this.eL7E && this.eL7E.S5X();
        this.eL7E = this.B5G(e4i);
        this.eL7E.N5S(e4i);
        return this.eL7E
    };
    n4r.dU7N.bq5v = function () {
        !!this.eL7E && this.eL7E.S5X()
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        b4f, K5P;
    n4r.bqY8Q = NEJ.C();
    b4f = n4r.bqY8Q.O5T(n4r.dU7N);
    K5P = n4r.bqY8Q.ch5m;
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        if (e4i.bubble === undefined) e4i.bubble = true;
        this.LH7A = e4i.bubble;
        this.oT0x = e4i.message || ""
    };
    b4f.bZ5e = function () {
        this.ca5f = a4e.hU8M('<div class="lyct f-cb f-tc"></div>')
    };
    b4f.bR5W = function () {
        this.cc5h();
        h4l.s4w(this.o4s, "click", this.cv5A.g4k(this))
    };
    b4f.cv5A = function (d4h) {
        var f4j = h4l.U5Z(d4h, "d:action");
        if (!f4j) return;
        if (f4j.href) h4l.cf5k(d4h);
        if (a4e.u5z(f4j, "action") == "close") this.bq5v();
        if (this.LH7A === !1) h4l.se1x(d4h);
        this.w5B("onaction", a4e.u5z(f4j, "action"))
    };
    b4f.N5S = function () {
        K5P.N5S.call(this);
        this.o4s.innerHTML = this.oT0x
    };
    var gc7V = a4e.ek7d('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l4p.me9V = function () {
        var eZ7S;
        var cp5u;
        var bqT8L = function (ge7X, W5b) {
            if (k4o.ga7T(ge7X, "function") && ge7X(W5b) != -1) cp5u.S5X()
        };
        var An4r = function () {
            !!cp5u && cp5u.bq5v()
        };
        return function (e4i) {
            clearTimeout(eZ7S);
            e4i = e4i || {};
            e4i.title = e4i.title || "提示";
            e4i.clazz = e4i.clazz || "";
            e4i.parent = e4i.parent || document.body;
            e4i.buttons = e4i.buttons || [];
            e4i.message = a4e.bU5Z(gc7V, e4i);
            e4i.onaction = bqT8L.g4k(null, e4i.action);
            if (e4i.mask === undefined) e4i.mask = true;
            if (e4i.draggable === undefined) e4i.draggable = true;
            !!cp5u && cp5u.S5X();
            cp5u = n4r.bqY8Q.B5G(e4i);
            cp5u.N5S();
            if (e4i.autoclose) eZ7S = setTimeout(An4r.g4k(null), 2e3);
            return cp5u
        }
    }();
    l4p.eT7M = function (e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w1";
        e4i.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e4i.btntxt || "确定"
        }];
        var cp5u = l4p.me9V(e4i);
        return cp5u
    };
    l4p.gO8G = function (e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w2";
        e4i.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e4i.btnok || "确定",
            style: e4i.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e4i.btncc || "取消",
            style: e4i.ccstyle || ""
        }];
        var cp5u = l4p.me9V(e4i);
        return cp5u
    }
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u");
    a4e.ctv3x = function () {
        var fW7P = /[\r\n]/gi,
            Q5V = {};
        var cts3x = function (cB5G) {
            return (cB5G || "").replace(fW7P, "aa").length
        };
        var bAt1x = function (C5H) {
            var bb5g = Q5V[C5H],
                bAM1x = a4e.y5D(C5H),
                vR2x = a4e.y5D(C5H + "-counter");
            if (!bAM1x || !bb5g) return;
            var d4h = {
                input: bAM1x.value
            };
            d4h.length = bb5g.onlength(d4h.input);
            d4h.delta = bb5g.max - d4h.length;
            bb5g.onchange(d4h);
            vR2x.innerHTML = d4h.value || "剩余" + d4h.delta + "个字"
        };
        return function (E5J, e4i) {
            var C5H = a4e.kr9i(E5J);
            if (!C5H || !!Q5V[C5H]) return;
            var bb5g = NEJ.X({}, e4i);
            bb5g.onchange = bb5g.onchange || bn5s;
            bb5g.onlength = cts3x;
            if (!bb5g.max) {
                var bBi1x = parseInt(a4e.fU7N(C5H, "maxlength")),
                    bBj1x = parseInt(a4e.u5z(C5H, "maxLength"));
                bb5g.max = bBi1x || bBj1x || 100;
                if (!bBi1x && !!bBj1x) bb5g.onlength = k4o.fi7b
            }
            Q5V[C5H] = bb5g;
            h4l.s4w(C5H, "input", bAt1x.g4k(null, C5H));
            var f4j = a4e.IC6w(C5H, {
                nid: bb5g.nid || "js-counter",
                clazz: bb5g.clazz
            });
            bb5g.xid = C5H + "-counter";
            f4j.id = bb5g.xid;
            bAt1x(C5H)
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        ba5f = c4g("nej.h");
    ba5f.bqB8t = function (E5J, dE7x) {}
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        M5R = c4g("nej.p"),
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        ba5f = c4g("nej.h");
    if (M5R.ms9j.trident) return;
    ba5f.bqB8t = function () {
        var Q5V = {};
        var Jb6V = function (d4h) {
            var cR6L = h4l.U5Z(d4h);
            if (!!cR6L.value) return;
            a4e.Y5d(a4e.IC6w(cR6L), "display", "none")
        };
        var CH4L = function (d4h) {
            var cR6L = h4l.U5Z(d4h);
            if (!!cR6L.value) return;
            a4e.Y5d(a4e.IC6w(cR6L), "display", "")
        };
        var ctr3x = function (cR6L, dE7x) {
            var C5H = a4e.kr9i(cR6L),
                jJ9A = a4e.IC6w(cR6L, {
                    tag: "label",
                    clazz: dE7x
                });
            jJ9A.htmlFor = C5H;
            var cL6F = a4e.fU7N(cR6L, "placeholder") || "";
            jJ9A.innerText = cL6F == "null" ? "" : cL6F;
            var co5t = cR6L.offsetHeight + "px";
            a4e.fz7s(jJ9A, {
                left: 0,
                display: !cR6L.value ? "" : "none"
            })
        };
        return ba5f.bqB8t.ee7X(function (d4h) {
            d4h.stopped = !0;
            var bf5k = d4h.args,
                cR6L = a4e.y5D(bf5k[0]);
            if (!!Q5V[cR6L.id]) return;
            ctr3x(cR6L, bf5k[1]);
            Q5V[cR6L.id] = !0;
            h4l.s4w(cR6L, "blur", CH4L.g4k(null));
            h4l.s4w(cR6L, "focus", Jb6V.g4k(null))
        })
    }()
})();
(function () {
    var c4g = NEJ.P,
        ba5f = c4g("nej.h"),
        a4e = c4g("nej.e"),
        cN6H = c4g("nej.x");
    a4e.fJ7C = cN6H.fJ7C = function (E5J, dE7x) {
        ba5f.bqB8t(E5J, a4e.u5z(E5J, "holder") || dE7x || "js-placeholder");
        return this
    };
    cN6H.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ut"),
        hd8V;
    if (!!M5R.LB7u) return;
    M5R.LB7u = NEJ.C();
    hd8V = M5R.LB7u.O5T(M5R.cz5E);
    hd8V.cl5q = function () {
        this.cr5w();
        this.Dy5D = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    };
    hd8V.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.fO7H = document.forms[e4i.form] || a4e.y5D(e4i.form);
        this.bS5X([
            [this.fO7H, "keypress", this.ctq3x.g4k(this)]
        ]);
        this.oT0x = e4i.message || {};
        this.oT0x.pass = this.oT0x.pass || "&nbsp;";
        var eI7B = this.oQ0x(this.fO7H, "focusMode", 1);
        if (!isNaN(eI7B)) {
            this.bCx1x = {
                mode: eI7B,
                clazz: e4i.focus
            }
        }
        this.Aq4u = e4i.holder;
        this.Dy5D.tp.clazz = "js-mhd " + (e4i.tip || "js-tip");
        this.Dy5D.ok.clazz = "js-mhd " + (e4i.pass || "js-pass");
        this.Dy5D.er.clazz = "js-mhd " + (e4i.error || "js-error");
        this.bCD1x = e4i.invalid || "js-invalid";
        this.ctp3x(e4i);
        this.fS7L();
        if (!!this.At4x) this.At4x.focus()
    };
    hd8V.bC5H = function () {
        this.bG5L();
        delete this.oT0x;
        delete this.At4x;
        delete this.DW5b;
        delete this.fO7H;
        delete this.bDb1x;
        delete this.Lz7s
    };
    hd8V.oQ0x = function (f4j, Ee5j, t4x) {
        var A5F = a4e.u5z(f4j, Ee5j);
        switch (t4x) {
        case 1:
            return parseInt(A5F);
        case 2:
            return (A5F || "").toLowerCase() == "true";
        case 3:
            return this.bqc8U(A5F)
        }
        return A5F
    };
    hd8V.Av4z = function (A5F, t4x) {
        if (t4x == "date") return this.bqc8U(A5F);
        return parseInt(A5F)
    };
    hd8V.YJ2x = function () {
        var jn8f = /^button|submit|reset|image|hidden|file$/i;
        return function (f4j) {
            f4j = this.y5D(f4j) || f4j;
            var t4x = f4j.type;
            return !!f4j.name && !jn8f.test(f4j.type || "")
        }
    }();
    hd8V.cto3x = function () {
        var jn8f = /^hidden$/i;
        return function (f4j) {
            if (this.YJ2x(f4j)) return !0;
            f4j = this.y5D(f4j) || f4j;
            var t4x = f4j.type || "";
            return jn8f.test(t4x)
        }
    }();
    hd8V.bqc8U = function () {
        var cO6I = /[-\/]/;
        var ctn3x = function (A5F) {
            if (!A5F) return "";
            A5F = A5F.split(cO6I);
            A5F.push(A5F.shift());
            return A5F.join("/")
        };
        return function (A5F) {
            if ((A5F || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(ctn3x(A5F))
        }
    }();
    hd8V.ctq3x = function (d4h) {
        if (d4h.keyCode != 13) return;
        this.w5B("onenter", d4h)
    };
    hd8V.ctl3x = function (C5H, T5Y) {
        var qo1x = this.Lz7s[T5Y],
            A5F = this.oQ0x(C5H, T5Y);
        if (!A5F || !qo1x) return;
        this.YH2x(C5H, qo1x);
        this.bpy8q(C5H, T5Y, A5F)
    };
    hd8V.ctk3x = function (C5H, T5Y) {
        try {
            var bEm2x = this.oQ0x(C5H, T5Y);
            if (!bEm2x) return;
            var A5F = new RegExp(bEm2x);
            this.bpy8q(C5H, T5Y, A5F);
            this.YH2x(C5H, this.Lz7s[T5Y])
        } catch (e) {}
    };
    hd8V.cth3x = function (C5H, T5Y) {
        var qo1x = this.Lz7s[T5Y];
        if (!!qo1x && this.oQ0x(C5H, T5Y, 2)) this.YH2x(C5H, qo1x)
    };
    hd8V.bpg8Y = function (C5H, T5Y, A5F) {
        A5F = parseInt(A5F);
        if (isNaN(A5F)) return;
        this.bpy8q(C5H, T5Y, A5F);
        this.YH2x(C5H, this.Lz7s[T5Y])
    };
    hd8V.bEs2x = function (C5H, T5Y) {
        this.bpg8Y(C5H, T5Y, this.oQ0x(C5H, T5Y))
    };
    hd8V.bEz2x = function (C5H, T5Y) {
        this.bpg8Y(C5H, T5Y, a4e.fU7N(C5H, T5Y))
    };
    hd8V.bEB2x = function (C5H, T5Y, t4x) {
        var A5F = this.Av4z(this.oQ0x(C5H, T5Y), this.oQ0x(C5H, "type"));
        this.bpg8Y(C5H, T5Y, A5F)
    };
    hd8V.ctg3x = function () {
        var fW7P = /^input|textarea$/i;
        var Jb6V = function (d4h) {
            this.oJ0x(h4l.U5Z(d4h))
        };
        var CH4L = function (d4h) {
            var f4j = h4l.U5Z(d4h);
            if (!this.oQ0x(f4j, "ignore", 2)) {
                this.bFt2x(f4j)
            }
        };
        return function (f4j) {
            if (this.oQ0x(f4j, "autoFocus", 2)) this.At4x = f4j;
            var pt0x = a4e.fU7N(f4j, "placeholder");
            if (!!pt0x && pt0x != "null") a4e.fJ7C(f4j, this.Aq4u);
            if (!!this.bCx1x && fW7P.test(f4j.tagName)) a4e.ml9c(f4j, this.bCx1x);
            var C5H = a4e.kr9i(f4j);
            this.cth3x(C5H, "required");
            this.ctl3x(C5H, "type");
            this.ctk3x(C5H, "pattern");
            this.bEz2x(C5H, "maxlength");
            this.bEz2x(C5H, "minlength");
            this.bEs2x(C5H, "maxLength");
            this.bEs2x(C5H, "minLength");
            this.bEB2x(C5H, "min");
            this.bEB2x(C5H, "max");
            var T5Y = f4j.name;
            this.oT0x[T5Y + "-tip"] = this.oQ0x(f4j, "tip");
            this.oT0x[T5Y + "-error"] = this.oQ0x(f4j, "message");
            this.oJ0x(f4j);
            var bu5z = this.DW5b[C5H],
                j4n = (bu5z || X5c).data || X5c,
                Ll7e = this.oQ0x(f4j, "counter", 2);
            if (Ll7e && (j4n.maxlength || j4n.maxLength)) {
                a4e.ctv3x(C5H, {
                    nid: this.Dy5D.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!bu5z && fW7P.test(f4j.tagName)) {
                this.bS5X([
                    [f4j, "focus", Jb6V.g4k(this)],
                    [f4j, "blur", CH4L.g4k(this)]
                ])
            } else if (this.oQ0x(f4j, "focus", 2)) {
                this.bS5X([
                    [f4j, "focus", Jb6V.g4k(this)]
                ])
            }
        }
    }();
    hd8V.ctp3x = function () {
        var AF4J = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.bqc8U(v))
            }
        };
        var ctf3x = {
            required: function (f4j) {
                var t4x = f4j.type,
                    cte3x = !f4j.value,
                    ctd3x = (t4x == "checkbox" || t4x == "radio") && !f4j.checked;
                if (ctd3x || cte3x) return -1
            }, type: function (f4j, e4i) {
                var cO6I = this.bDb1x[e4i.type],
                    es7l = f4j.value.trim(),
                    ctc3x = !!cO6I.test && !cO6I.test(es7l),
                    ctb3x = k4o.ga7T(cO6I) && !cO6I.call(this, es7l);
                if (ctc3x || ctb3x) return -2
            }, pattern: function (f4j, e4i) {
                if (!e4i.pattern.test(f4j.value)) return -3
            }, maxlength: function (f4j, e4i) {
                if (f4j.value.length > e4i.maxlength) return -4
            }, minlength: function (f4j, e4i) {
                if (f4j.value.length < e4i.minlength) return -5
            }, maxLength: function (f4j, e4i) {
                if (k4o.fi7b(f4j.value) > e4i.maxLength) return -4
            }, minLength: function (f4j, e4i) {
                if (k4o.fi7b(f4j.value) < e4i.minLength) return -5
            }, min: function (f4j, e4i) {
                var gl7e = this.Av4z(f4j.value, e4i.type);
                if (isNaN(gl7e) || gl7e < e4i.min) return -6
            }, max: function (f4j, e4i) {
                var gl7e = this.Av4z(f4j.value, e4i.type);
                if (isNaN(gl7e) || gl7e > e4i.max) return -7
            }
        };
        return function (e4i) {
            this.bDb1x = NEJ.X(NEJ.X({}, AF4J), e4i.type);
            this.Lz7s = NEJ.X(NEJ.X({}, ctf3x), e4i.attr)
        }
    }();
    hd8V.YH2x = function (C5H, vY2x) {
        if (!k4o.ga7T(vY2x)) return;
        var bu5z = this.DW5b[C5H];
        if (!bu5z || !bu5z.func) {
            bu5z = bu5z || {};
            bu5z.func = [];
            this.DW5b[C5H] = bu5z
        }
        bu5z.func.push(vY2x)
    };
    hd8V.bpy8q = function (C5H, T5Y, A5F) {
        if (!T5Y) return;
        var bu5z = this.DW5b[C5H];
        if (!bu5z || !bu5z.data) {
            bu5z = bu5z || {};
            bu5z.data = {};
            this.DW5b[C5H] = bu5z
        }
        bu5z.data[T5Y] = A5F
    };
    hd8V.bFt2x = function (f4j) {
        f4j = this.y5D(f4j) || f4j;
        var bu5z = this.DW5b[a4e.kr9i(f4j)];
        if (!f4j || !bu5z || !this.YJ2x(f4j)) return !0;
        var m4q;
        k4o.ei7b(bu5z.func, function (eF7y) {
            m4q = eF7y.call(this, f4j, bu5z.data);
            return m4q != null
        }, this);
        if (m4q == null) {
            var d4h = {
                target: f4j,
                form: this.fO7H
            };
            this.w5B("oncheck", d4h);
            m4q = d4h.value
        }
        var d4h = {
            target: f4j,
            form: this.fO7H
        };
        if (m4q != null) {
            d4h.code = m4q;
            this.w5B("oninvalid", d4h);
            if (!d4h.stopped) {
                this.csZ3x(f4j, d4h.value || this.oT0x[f4j.name + m4q])
            }
        } else {
            this.w5B("onvalid", d4h);
            if (!d4h.stopped) this.csY3x(f4j, d4h.value)
        }
        return m4q == null
    };
    hd8V.wx2x = function () {
        var csW3x = function (Ze4i, Zd4h) {
            return Ze4i == Zd4h ? "block" : "none"
        };
        var csV3x = function (f4j, t4x, bD5I) {
            var pt0x = bHP3x.call(this, f4j, t4x);
            if (!pt0x && !!bD5I) pt0x = a4e.IC6w(f4j, this.Dy5D[t4x]);
            return pt0x
        };
        var bHP3x = function (f4j, t4x) {
            var pt0x;
            if (t4x == "tp") pt0x = a4e.y5D(f4j.name + "-tip");
            if (!pt0x) pt0x = a4e.I5N(f4j.parentNode, this.Dy5D[t4x].nid)[0];
            return pt0x
        };
        return function (f4j, bD5I, t4x) {
            f4j = this.y5D(f4j) || f4j;
            if (!f4j) return;
            t4x == "er" ? a4e.z5E(f4j, this.bCD1x) : a4e.x5C(f4j, this.bCD1x);
            var pt0x = csV3x.call(this, f4j, t4x, bD5I);
            if (!!pt0x && !!bD5I) pt0x.innerHTML = bD5I;
            k4o.ei7b(this.Dy5D, function (A5F, J5O) {
                a4e.Y5d(bHP3x.call(this, f4j, J5O), "display", csW3x(t4x, J5O))
            }, this)
        }
    }();
    hd8V.oJ0x = function (f4j, bD5I) {
        this.wx2x(f4j, bD5I || this.oT0x[f4j.name + "-tip"], "tp");
        return this
    };
    hd8V.csY3x = function (f4j, bD5I) {
        this.wx2x(f4j, bD5I || this.oT0x[f4j.name + "-pass"] || this.oT0x.pass, "ok");
        return this
    };
    hd8V.csZ3x = function (f4j, bD5I) {
        this.wx2x(f4j, bD5I || this.oT0x[f4j.name + "-error"], "er");
        return this
    };
    hd8V.hT8L = function () {
        var fW7P = /^(?:radio|checkbox)$/i;
        var csU3x = function (A5F) {
            return A5F == null ? "" : A5F
        };
        var bIG3x = function (A5F, f4j) {
            if (fW7P.test(f4j.type || "")) {
                f4j.checked = A5F == f4j.value
            } else {
                f4j.value = csU3x(A5F)
            }
        };
        return function (T5Y, A5F) {
            var f4j = this.y5D(T5Y);
            if (!f4j) return this;
            if (f4j.tagName == "SELECT" || !f4j.length) {
                bIG3x(A5F, f4j)
            } else {
                k4o.bc5h(f4j, bIG3x.g4k(null, A5F))
            }
            return this
        }
    }();
    hd8V.y5D = function (T5Y) {
        return this.fO7H.elements[T5Y]
    };
    hd8V.ctP3x = function () {
        return this.fO7H
    };
    hd8V.Xy2x = function () {
        var fW7P = /^radio|checkbox$/i,
            jn8f = /^number|date$/;
        var csS3x = function (bv5A, f4j) {
            var T5Y = f4j.name,
                A5F = f4j.value,
                bu5z = bv5A[T5Y],
                t4x = this.oQ0x(f4j, "type");
            if (jn8f.test(t4x)) A5F = this.Av4z(A5F, t4x);
            if (fW7P.test(f4j.type) && !f4j.checked) {
                A5F = this.oQ0x(f4j, "value");
                if (!A5F) return
            }
            if (!!bu5z) {
                if (!k4o.ep7i(bu5z)) {
                    bu5z = [bu5z];
                    bv5A[T5Y] = bu5z
                }
                bu5z.push(A5F)
            } else {
                bv5A[T5Y] = A5F
            }
        };
        return function () {
            var m4q = {};
            k4o.bc5h(this.fO7H.elements, function (f4j) {
                if (this.cto3x(f4j)) csS3x.call(this, m4q, f4j)
            }, this);
            return m4q
        }
    }();
    hd8V.EK5P = function () {
        var csR3x = function (f4j) {
            if (this.YJ2x(f4j)) this.oJ0x(f4j)
        };
        return function () {
            this.fO7H.reset();
            k4o.bc5h(this.fO7H.elements, csR3x, this);
            return this
        }
    }();
    hd8V.ctQ3x = function () {
        this.fO7H.submit();
        return this
    };
    hd8V.fS7L = function () {
        var csP3x = function (f4j) {
            if (this.YJ2x(f4j)) this.ctg3x(f4j)
        };
        return function () {
            this.DW5b = {};
            k4o.bc5h(this.fO7H.elements, csP3x, this);
            return this
        }
    }();
    hd8V.csD3x = function (f4j) {
        f4j = this.y5D(f4j) || f4j;
        if (!!f4j) return this.bFt2x(f4j);
        var m4q = !0;
        k4o.bc5h(this.fO7H.elements, function (f4j) {
            var kc9T = this.csD3x(f4j);
            m4q = m4q && kc9T
        }, this);
        return m4q
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        H5M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        b4f, K5P;
    n4r.Xq2x = NEJ.C();
    b4f = n4r.Xq2x.O5T(n4r.dU7N);
    K5P = n4r.Xq2x.ch5m;
    b4f.bR5W = function () {
        this.cc5h();
        h4l.s4w(this.o4s, "click", this.cv5A.g4k(this));
        h4l.s4w(document, "mousewheel", this.AE4I.g4k(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.AE4I.g4k(this))
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        if (e4i.jst) {
            this.o4s.innerHTML = a4e.bU5Z(e4i.jst, e4i.data)
        } else if (e4i.ntp) {
            this.o4s.appendChild(a4e.dq6k(e4i.ntp))
        } else if (e4i.txt) {
            this.o4s.innerHTML = a4e.hV8N(e4i.txt)
        } else if (e4i.html) {
            this.o4s.innerHTML = e4i.html
        }
        var KY7R = this.o4s.getElementsByTagName("form");
        if (KY7R.length) {
            this.fO7H = H5M.LB7u.B5G({
                form: KY7R[0]
            })
        }
        this.BJ4N = a4e.cP6J(this.o4s)[0]
    };
    b4f.bC5H = function () {
        this.w5B("ondestroy");
        this.bG5L();
        this.o4s.innerHTML = "";
        delete this.BJ4N
    };
    b4f.cv5A = function (d4h) {
        var f4j = h4l.U5Z(d4h, "d:action"),
            j4n = this.fO7H ? this.fO7H.Xy2x() : null,
            d4h = {
                action: a4e.u5z(f4j, "action")
            };
        if (j4n) d4h.data = j4n;
        if (d4h.action) {
            this.w5B("onaction", d4h);
            if (d4h.stopped) return;
            this.bq5v()
        }
    };
    b4f.AE4I = function (d4h) {
        if (!this.BJ4N) return;
        h4l.bh5m(d4h);
        var de6Y = d4h.wheelDelta || -d4h.detail;
        this.BJ4N.scrollTop -= de6Y
    };
    l4p.jr8j = function (e4i) {
        e4i.destroyable = e4i.destroyable || true;
        e4i.title = e4i.title || "提示";
        e4i.draggable = true;
        e4i.parent = document.body;
        e4i.mask = e4i.mask || true;
        var Aa4e = n4r.Xq2x.B5G(e4i);
        Aa4e.N5S();
        return Aa4e
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bLi4m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        KX7Q = {},
        BR4V = {};
    for (var i = 0, l = bLi4m.length, c; i < l; i++) {
        c = bLi4m.charAt(i);
        KX7Q[i] = c;
        BR4V[c] = i
    }
    var csC3x = function (iN8F) {
        var r4v = 0,
            c, m4q = [];
        while (r4v < iN8F.length) {
            c = iN8F[r4v];
            if (c < 128) {
                m4q.push(String.fromCharCode(c));
                r4v++
            } else if (c > 191 && c < 224) {
                m4q.push(String.fromCharCode((c & 31) << 6 | iN8F[r4v + 1] & 63));
                r4v += 2
            } else {
                m4q.push(String.fromCharCode((c & 15) << 12 | (iN8F[r4v + 1] & 63) << 6 | iN8F[r4v + 2] & 63));
                r4v += 3
            }
        }
        return m4q.join("")
    };
    var csB3x = function () {
        var gZ8R = /\r\n/g;
        return function (j4n) {
            j4n = j4n.replace(gZ8R, "\n");
            var m4q = [],
                nW0x = String.fromCharCode(237);
            if (nW0x.charCodeAt(0) < 0)
                for (var i = 0, l = j4n.length, c; i < l; i++) {
                    c = j4n.charCodeAt(i);
                    c > 0 ? m4q.push(c) : m4q.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                } else
                    for (var i = 0, l = j4n.length, c; i < l; i++) {
                        c = j4n.charCodeAt(i);
                        if (c < 128) m4q.push(c);
                        else if (c > 127 && c < 2048) m4q.push(c >> 6 | 192, c & 63 | 128);
                        else m4q.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                    }
            return m4q
        }
    }();
    var GY6S = function (iN8F) {
        var r4v = 0,
            m4q = [],
            eI7B = iN8F.length % 3;
        if (eI7B == 1) iN8F.push(0, 0);
        if (eI7B == 2) iN8F.push(0);
        while (r4v < iN8F.length) {
            m4q.push(KX7Q[iN8F[r4v] >> 2], KX7Q[(iN8F[r4v] & 3) << 4 | iN8F[r4v + 1] >> 4], KX7Q[(iN8F[r4v + 1] & 15) << 2 | iN8F[r4v + 2] >> 6], KX7Q[iN8F[r4v + 2] & 63]);
            r4v += 3
        }
        if (eI7B == 1) m4q[m4q.length - 1] = m4q[m4q.length - 2] = "=";
        if (eI7B == 2) m4q[m4q.length - 1] = "=";
        return m4q.join("")
    };
    var csx3x = function () {
        var qw1x = /\n|\r|=/g;
        return function (j4n) {
            var r4v = 0,
                m4q = [];
            j4n = j4n.replace(qw1x, "");
            for (var i = 0, l = j4n.length; i < l; i += 4) m4q.push(BR4V[j4n.charAt(i)] << 2 | BR4V[j4n.charAt(i + 1)] >> 4, (BR4V[j4n.charAt(i + 1)] & 15) << 4 | BR4V[j4n.charAt(i + 2)] >> 2, (BR4V[j4n.charAt(i + 2)] & 3) << 6 | BR4V[j4n.charAt(i + 3)]);
            var br5w = m4q.length,
                eI7B = j4n.length % 4;
            if (eI7B == 2) m4q = m4q.slice(0, br5w - 2);
            if (eI7B == 3) m4q = m4q.slice(0, br5w - 1);
            return m4q
        }
    }();
    p.ctT3x = function (j4n) {
        return csC3x(csx3x(j4n))
    };
    p.css3x = function (j4n) {
        try {
            return window.btoa(j4n)
        } catch (ex) {
            return GY6S(csB3x(j4n))
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        h4l = c4g("nej.v"),
        a4e = c4g("nej.e"),
        v5A = c4g("nej.j"),
        M5R = c4g("nej.p"),
        k4o = c4g("nej.u"),
        n4r = c4g("nm.l"),
        D5I = c4g("nm.w"),
        bF5K = c4g("nej.ui"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f, K5P;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    n4r.bMg4k = NEJ.C();
    b4f = n4r.bMg4k.O5T(n4r.dU7N);
    b4f.bZ5e = function () {
        this.ca5f = "m-download-layer"
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a4e.I5N(this.o4s, "j-flag");
        this.bmI7B = i4m[0];
        this.bmF7y = i4m[1];
        this.bMN4R = i4m[2];
        v5A.bp5u("/client/version/get", {
            type: "json",
            onload: this.csr3x.g4k(this)
        });
        if (M5R.ZQ4U.mac) {
            a4e.x5C(this.bmI7B.parentNode, "f-hide");
            a4e.z5E(this.bmF7y.parentNode, "f-hide");
            a4e.z5E(this.bMN4R, "f-hide")
        } else {
            a4e.z5E(this.bmI7B.parentNode, "f-hide");
            a4e.x5C(this.bmF7y.parentNode, "f-hide");
            a4e.x5C(this.bMN4R, "f-hide")
        }
    };
    b4f.bj5o = function (e4i) {
        e4i.clazz = " m-layer-down";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "下载";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bk5p(e4i);
        this.bS5X([
            [this.o4s, "click", this.bO5T.g4k(this)]
        ]);
        this.el7e = TYPE_MAP[e4i.type];
        this.gz8r = e4i.id
    };
    b4f.bC5H = function () {
        this.bG5L()
    };
    b4f.Ay4C = function () {
        this.bq5v()
    };
    b4f.CB4F = function (d4h) {
        this.w5B("onok", A5F);
        this.bq5v()
    };
    b4f.bO5T = function (d4h) {
        var f4j = h4l.U5Z(d4h, "d:action");
        switch (a4e.u5z(f4j, "action")) {
        case "download":
            this.bq5v();
            window.open(a4e.u5z(f4j, "src"));
            break;
        case "orpheus":
            this.bq5v();
            location.href = "orpheus://" + k4o.css3x(JSON.stringify({
                type: this.el7e,
                id: this.gz8r,
                cmd: "download"
            }));
            break
        }
    };
    b4f.csr3x = function (d4h) {
        if ((d4h || X5c).code == 200) {
            this.Hz6t = d4h.data;
            this.bmI7B.innerText = "V" + this.Hz6t.mac;
            this.bmF7y.innerText = "V" + this.Hz6t.pc
        }
    };
    l4p.WM2x = function (e4i) {
        n4r.bMg4k.B5G(e4i).N5S()
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        k4o = c4g("nej.u"),
        p4t = c4g("nm.d"),
        bN5S = {};
    p4t.y5D = function (J5O) {
        return bN5S[J5O]
    };
    p4t.ou0x = function (J5O, bb5g) {
        bN5S[J5O] = bb5g
    };
    p4t.eP7I = function (j4n) {
        k4o.ei7b(j4n, function (q4u, J5O) {
            var bb5g = bN5S[J5O] || {};
            NEJ.X(bb5g, q4u);
            bN5S[J5O] = bb5g
        })
    }
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        ba5f = c4g("nej.h");
    ba5f.WL2x = function (J5O) {
        return localStorage.getItem(J5O)
    };
    ba5f.WI2x = function (J5O, A5F) {
        localStorage.setItem(J5O, A5F)
    };
    ba5f.bmq7j = function (J5O) {
        localStorage.removeItem(J5O)
    };
    ba5f.bml7e = function () {
        localStorage.clear()
    };
    ba5f.csq3x = function () {
        var m4q = [];
        for (var i = 0, l = localStorage.length; i < l; i++) m4q.push(localStorage.key(i));
        return m4q
    };
    ba5f.bmi7b = function () {
        (document.onstorageready || bn5s)()
    };
    ba5f.bmh7a = function () {
        return !0
    }
})();
(function () {
    var c4g = NEJ.P,
        M5R = c4g("nej.p"),
        ir8j = c4g("nej.c"),
        ba5f = c4g("nej.h"),
        sk1x;
    if (M5R.ms9j.trident || !!window.localStorage) return;
    var csp3x = function () {
        var qI1x, eZ7S;
        var bfn5s = function () {
            qI1x = document.createElement("div");
            NEJ.X(qI1x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", qI1x);
            qI1x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + ir8j.y5D("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Nh8Z = function () {
            eZ7S = window.clearTimeout(eZ7S);
            var hc8U = qI1x.getElementsByTagName("object")[0];
            if (!!hc8U.initStorage) {
                delete qI1x;
                sk1x = hc8U;
                sk1x.initStorage("nej-storage");
                (document.onstorageready || bn5s)();
                return
            }
            eZ7S = window.setTimeout(Nh8Z, 500)
        };
        return function () {
            if (!!sk1x) return;
            bfn5s();
            Nh8Z()
        }
    }();
    ba5f.WL2x = ba5f.WL2x.ee7X(function (d4h) {
        d4h.stopped = !0;
        if (!sk1x) return;
        d4h.value = sk1x.getItem(d4h.args[0])
    });
    ba5f.WI2x = ba5f.WI2x.ee7X(function (d4h) {
        d4h.stopped = !0;
        if (!sk1x) return;
        var bf5k = d4h.args;
        sk1x.setItem(bf5k[0], bf5k[1])
    });
    ba5f.bmq7j = ba5f.bmq7j.ee7X(function (d4h) {
        d4h.stopped = !0;
        if (!sk1x) return;
        sk1x.removeItem(d4h.args[0])
    });
    ba5f.bml7e = ba5f.bml7e.ee7X(function (d4h) {
        d4h.stopped = !0;
        if (!!sk1x) sk1x.clear()
    });
    ba5f.bmi7b = ba5f.bmi7b.ee7X(function (d4h) {
        d4h.stopped = !0;
        csp3x()
    });
    ba5f.bmh7a = ba5f.bmh7a.ee7X(function (d4h) {
        d4h.stopped = !0;
        d4h.value = !!sk1x
    })
})();
(function () {
    var c4g = NEJ.P,
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        ba5f = c4g("nej.h"),
        v5A = c4g("nej.j"),
        H5M = c4g("nej.ut"),
        Q5V = {};
    v5A.vb2x = function (J5O, A5F) {
        var bsI9z = JSON.stringify(A5F);
        try {
            ba5f.WI2x(J5O, bsI9z)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bsI9z != ba5f.WL2x(J5O)) Q5V[J5O] = A5F;
        return this
    };
    v5A.tG2x = function (J5O) {
        var j4n = JSON.parse(ba5f.WL2x(J5O) || "null");
        return j4n == null ? Q5V[J5O] : j4n
    };
    v5A.bsO9F = function (J5O, A5F) {
        var j4n = v5A.tG2x(J5O);
        if (j4n == null) {
            j4n = A5F;
            v5A.vb2x(J5O, j4n)
        }
        return j4n
    };
    v5A.KQ7J = function (J5O) {
        delete Q5V[J5O];
        ba5f.bmq7j(J5O);
        return this
    };
    v5A.ctV3x = function () {
        var bme7X = function (q4u, J5O, bv5A) {
            delete bv5A[J5O]
        };
        return function () {
            k4o.ei7b(Q5V, bme7X);
            ba5f.bml7e();
            return this
        }
    }();
    v5A.ctW3x = function (m4q) {
        m4q = m4q || {};
        k4o.bc5h(ba5f.csq3x(), function (J5O) {
            m4q[J5O] = v5A.tG2x(J5O)
        });
        return m4q
    };
    H5M.fx7q.B5G({
        element: document,
        event: "storageready",
        oneventadd: function () {
            if (ba5f.bmh7a()) {
                document.onstorageready()
            }
        }
    });
    var csm3x = function () {
        var csl3x = function (A5F, J5O, bv5A) {
            ba5f.WI2x(J5O, JSON.stringify(A5F));
            delete bv5A[J5O]
        };
        return function () {
            k4o.ei7b(Q5V, csl3x)
        }
    }();
    h4l.s4w(document, "storageready", csm3x);
    ba5f.bmi7b()
})();
(function () {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ut"),
        GX6R;
    if (!!M5R.bma7T) return;
    M5R.bma7T = NEJ.C();
    GX6R = M5R.bma7T.O5T(M5R.cz5E);
    GX6R.cl5q = function () {
        var gc7V = +(new Date),
            lZ9Q = "dat-" + gc7V;
        return function () {
            this.cr5w();
            var Q5V = this.constructor[lZ9Q];
            if (!Q5V) {
                Q5V = {};
                this.constructor[lZ9Q] = Q5V
            }
            this.R5W = Q5V
        }
    }();
    GX6R.y5D = function (J5O) {
        return this.R5W[J5O]
    };
    GX6R.ou0x = function (J5O, A5F) {
        var ls9j = this.R5W[J5O];
        this.R5W[J5O] = A5F;
        h4l.w5B(localCache, "cachechange", {
            key: J5O,
            type: "set",
            oldValue: ls9j,
            newValue: A5F
        });
        return this
    };
    GX6R.cK6E = function (J5O) {
        var ls9j = this.R5W[J5O];
        k4o.VV1x(this.R5W, J5O);
        h4l.w5B(localCache, "cachechange", {
            key: J5O,
            type: "delete",
            oldValue: ls9j,
            newValue: undefined
        });
        return ls9j
    };
    GX6R.Ws2x = function (Ba4e) {
        return NEJ.Q(this.R5W, Ba4e)
    };
    window.localCache = M5R.bma7T.B5G();
    M5R.fx7q.B5G({
        element: localCache,
        event: "cachechange"
    })
})();
(function () {
    var c4g = NEJ.P,
        fb7U = NEJ.R,
        bn5s = NEJ.F,
        k4o = c4g("nej.u"),
        v5A = c4g("nej.j"),
        M5R = c4g("nej.ut"),
        lZ9Q = "dat-" + +(new Date),
        lX9O;
    if (!!M5R.blN7G) return;
    M5R.blN7G = NEJ.C();
    lX9O = M5R.blN7G.O5T(M5R.cz5E);
    lX9O.cl5q = function () {
        this.cr5w();
        this.R5W = this.constructor[lZ9Q];
        if (!this.R5W) {
            this.R5W = {};
            this.R5W[lZ9Q + "-l"] = {};
            this.constructor[lZ9Q] = this.R5W
        }
    };
    lX9O.pZ0x = function (J5O) {
        return this.R5W[J5O]
    };
    lX9O.oK0x = function (J5O, A5F) {
        this.R5W[J5O] = A5F
    };
    lX9O.kE9v = function (J5O, ku9l) {
        var j4n = this.pZ0x(J5O);
        if (j4n == null) {
            j4n = ku9l;
            this.oK0x(J5O, j4n)
        }
        return j4n
    };
    lX9O.csj3x = function (J5O) {
        if (J5O != null) {
            delete this.R5W[J5O];
            return
        }
        k4o.ei7b(this.R5W, function (q4u, J5O) {
            if (J5O == lZ9Q + "-l") return;
            this.csj3x(J5O)
        }, this)
    };
    lX9O.ctY3x = function (J5O) {
        if (!!v5A.KQ7J) return v5A.KQ7J(J5O)
    };
    lX9O.csh3x = function (J5O) {
        if (!!v5A.tG2x) return v5A.tG2x(J5O)
    };
    lX9O.csd3x = function (J5O, A5F) {
        if (!!v5A.vb2x) v5A.vb2x(J5O, A5F)
    };
    lX9O.DU5Z = function (J5O, ku9l) {
        var j4n = this.KL7E(J5O);
        if (j4n == null) {
            j4n = ku9l;
            this.uR2x(J5O, j4n)
        }
        return j4n
    };
    lX9O.KL7E = function (J5O) {
        var j4n = this.pZ0x(J5O);
        if (j4n != null) return j4n;
        j4n = this.csh3x(J5O);
        if (j4n != null) this.oK0x(J5O, j4n);
        return j4n
    };
    lX9O.uR2x = function (J5O, A5F) {
        this.csd3x(J5O, A5F);
        this.oK0x(J5O, A5F)
    };
    lX9O.bxk0x = function (J5O) {
        if (J5O != null) {
            delete this.R5W[J5O];
            if (!!v5A.KQ7J) v5A.KQ7J(J5O);
            return
        }
        k4o.ei7b(this.R5W, function (q4u, J5O) {
            if (J5O == lZ9Q + "-l") return;
            this.bxk0x(J5O)
        }, this)
    };
    lX9O.ctZ3x = function () {
        this.bxk0x();
        return this
    };
    lX9O.cua3x = function (J5O) {
        var j4n = this.R5W[lZ9Q + "-l"];
        delete j4n[J5O]
    };
    lX9O.blr7k = function (J5O) {
        var j4n = this.R5W[lZ9Q + "-l"],
            bf5k = fb7U.slice.call(arguments, 1);
        k4o.bc5h(j4n[J5O], function (dr6l) {
            try {
                dr6l.apply(null, bf5k)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j4n[J5O]
    };
    lX9O.blj7c = function (J5O, dr6l) {
        dr6l = dr6l || bn5s;
        var i4m = this.R5W[lZ9Q + "-l"][J5O];
        if (!i4m) {
            i4m = [dr6l];
            this.R5W[lZ9Q + "-l"][J5O] = i4m;
            return !1
        }
        i4m.push(dr6l);
        return !0
    };
    lX9O.crY3x = function (i4m, bi5n, fY7R) {
        if (!i4m) return !1;
        bi5n = parseInt(bi5n) || 0;
        fY7R = parseInt(fY7R) || 0;
        if (!fY7R) {
            if (!i4m.loaded) return !1;
            fY7R = i4m.length
        }
        if (!!i4m.loaded) fY7R = Math.min(fY7R, i4m.length - bi5n);
        for (var i = 0; i < fY7R; i++)
            if (!i4m[bi5n + i]) return !1;
        return !0
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ut"),
        b4f, K5P;
    if (!!M5R.KK7D) return;
    M5R.KK7D = NEJ.C();
    b4f = M5R.KK7D.O5T(M5R.blN7G);
    K5P = M5R.KK7D.ch5m;
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.va2x = e4i.key || "id";
        this.bg5l = e4i.data || X5c;
        this.crX3x = !!e4i.autogc;
        this.crW3x(e4i.id)
    };
    b4f.bC5H = function () {
        this.bG5L();
        if (!!this.dK7D) {
            this.bya0x()
        }
    };
    b4f.crW3x = function (C5H) {
        var Q5V;
        if (!!C5H) {
            Q5V = this.R5W[C5H];
            if (!Q5V) {
                Q5V = {};
                this.R5W[C5H] = Q5V
            }
        }
        Q5V = Q5V || this.R5W;
        Q5V.hash = Q5V.hash || {};
        this.KI7B = Q5V
    };
    b4f.bya0x = function () {
        this.dK7D = window.clearTimeout(this.dK7D);
        var bv5A = {};
        k4o.ei7b(this.KI7B, function (i4m, J5O) {
            if (J5O == "hash") return;
            if (!k4o.ep7i(i4m)) return;
            k4o.bc5h(i4m, function (q4u) {
                if (!q4u) return;
                bv5A[q4u[this.va2x]] = !0
            }, this)
        }, this);
        k4o.ei7b(this.VZ2x(), function (q4u, C5H, dF7y) {
            if (!bv5A[C5H]) {
                delete dF7y[C5H]
            }
        })
    };
    b4f.crU3x = function () {
        if (!!this.dK7D) {
            this.dK7D = window.clearTimeout(this.dK7D)
        }
        this.dK7D = window.setTimeout(this.bya0x.g4k(this), 150)
    };
    b4f.Ap4t = function (q4u, VQ1x) {
        q4u = this.byw0x(q4u, VQ1x) || q4u;
        if (!q4u) return null;
        var J5O = q4u[this.va2x];
        if (J5O != null) {
            var hC8u = this.VZ2x()[J5O];
            if (!!hC8u) q4u = NEJ.X(hC8u, q4u);
            this.VZ2x()[J5O] = q4u
        }
        delete q4u.byE0x;
        return q4u
    };
    b4f.byw0x = bn5s;
    b4f.bkv7o = function (J5O, q4u) {
        if (!q4u) return;
        if (!k4o.ep7i(q4u)) {
            var i4m = this.gP8H(J5O),
                q4u = this.Ap4t(q4u, J5O);
            if (!!q4u) i4m.unshift(q4u);
            return
        }
        k4o.lY9P(q4u, this.bkv7o.g4k(this, J5O))
    };
    b4f.KE7x = function (J5O, cq5v) {
        var i4m = this.gP8H(J5O);
        i4m.length = Math.max(i4m.length, cq5v);
        this.bkm7f(J5O);
        return this
    };
    b4f.jz8r = function (J5O) {
        return this.gP8H(J5O).length
    };
    b4f.bkm7f = function (J5O, oe0x) {
        this.gP8H(J5O).loaded = oe0x != !1;
        return this
    };
    b4f.VM1x = function (J5O) {
        return !!this.gP8H(J5O).loaded
    };
    b4f.sa1x = function (J5O, i4m) {
        this.to1x(J5O);
        this.bka6U({
            key: J5O,
            offset: 0,
            limit: i4m.length + 1
        }, {
            list: i4m,
            total: i4m.length
        })
    };
    b4f.gP8H = function () {
        var AN4R = function (J5O) {
            return (J5O || "") + (!J5O ? "" : "-") + "list"
        };
        return function (J5O) {
            var J5O = AN4R(J5O),
                i4m = this.KI7B[J5O];
            if (!i4m) {
                i4m = [];
                this.KI7B[J5O] = i4m
            }
            return i4m
        }
    }();
    b4f.VZ2x = function () {
        var dF7y = this.KI7B.hash;
        if (!dF7y) {
            dF7y = {};
            this.KI7B.hash = dF7y
        }
        return dF7y
    };
    b4f.bjW6Q = function () {
        var AN4R = function (e4i) {
            return "r-" + e4i.key
        };
        return function (e4i) {
            var hY8Q = NEJ.X({}, e4i),
                mR0x = AN4R(hY8Q);
            if (!this.blj7c(mR0x, this.w5B.g4k(this))) {
                hY8Q.rkey = mR0x;
                hY8Q.onload = this.crT3x.g4k(this, hY8Q);
                this.w5B("dopullrefresh", hY8Q)
            }
            return this
        }
    }();
    b4f.crT3x = function (e4i, i4m) {
        this.bkv7o(e4i.key, i4m);
        this.blr7k(e4i.rkey, "onpullrefresh", e4i)
    };
    b4f.nr0x = function () {
        var AN4R = function (e4i) {
            return "r-" + e4i.key + "-" + e4i.offset + "-" + e4i.limit
        };
        return function (e4i) {
            e4i = e4i || X5c;
            var hY8Q = {
                    key: "" + e4i.key || "",
                    ext: e4i.ext || null,
                    data: e4i.data || null,
                    offset: parseInt(e4i.offset) || 0,
                    limit: parseInt(e4i.limit) || 0
                },
                i4m = this.gP8H(hY8Q.key);
            if (this.crY3x(i4m, hY8Q.offset, hY8Q.limit)) {
                this.w5B("onlistload", hY8Q);
                return this
            }
            var mR0x = AN4R(hY8Q);
            if (!this.blj7c(mR0x, this.w5B.g4k(this))) {
                hY8Q.rkey = mR0x;
                hY8Q.onload = this.bka6U.g4k(this, hY8Q);
                this.w5B("doloadlist", hY8Q)
            }
            return this
        }
    }();
    b4f.bka6U = function () {
        var AV4Z = function (q4u, r4v, i4m) {
            if (!!q4u) {
                return !0
            }
            i4m.splice(r4v, 1)
        };
        return function (e4i, m4q) {
            e4i = e4i || X5c;
            var J5O = e4i.key,
                bi5n = e4i.offset,
                bzZ1x = this.gP8H(J5O);
            var i4m = m4q || [];
            if (!k4o.ep7i(i4m)) {
                i4m = m4q.result || m4q.list || [];
                var cq5v = parseInt(m4q.total);
                if (!isNaN(cq5v) || cq5v > i4m.length) {
                    this.KE7x(J5O, cq5v)
                }
            }
            k4o.bc5h(i4m, function (q4u, r4v) {
                bzZ1x[bi5n + r4v] = this.Ap4t(q4u, J5O)
            }, this);
            if (i4m.length < e4i.limit) {
                this.bkm7f(J5O);
                k4o.lY9P(bzZ1x, AV4Z)
            }
            this.blr7k(e4i.rkey, "onlistload", e4i)
        }
    }();
    b4f.to1x = function () {
        var AV4Z = function (q4u, r4v, i4m) {
            i4m.splice(r4v, 1)
        };
        return function (J5O) {
            var i4m = this.gP8H(J5O);
            k4o.lY9P(i4m, AV4Z);
            this.bkm7f(J5O, !1);
            if (this.crX3x) {
                this.crU3x()
            }
            return this
        }
    }();
    b4f.bAg1x = function (q4u, VQ1x) {
        return !q4u.byE0x
    };
    b4f.em7f = function (C5H) {
        return this.VZ2x()[C5H]
    };
    b4f.cub3x = function (C5H) {
        var q4u = this.em7f(C5H);
        if (!!q4u) q4u.byE0x = !0
    };
    b4f.Vp1x = function () {
        var AN4R = function (e4i) {
            return "r-" + e4i.key + "-" + e4i.id
        };
        return function (e4i) {
            e4i = e4i || X5c;
            var C5H = e4i[this.va2x],
                hY8Q = {
                    id: C5H,
                    ext: e4i.ext,
                    data: e4i.data || {}, key: "" + e4i.key || ""
                };
            q4u = this.em7f(C5H);
            hY8Q.data[this.va2x] = C5H;
            if (!!q4u && this.bAg1x(q4u, hY8Q.key)) {
                this.w5B("onitemload", hY8Q);
                return this
            }
            var mR0x = AN4R(hY8Q);
            if (!this.blj7c(mR0x, this.w5B.g4k(this))) {
                hY8Q.rkey = mR0x;
                hY8Q.onload = this.crQ3x.g4k(this, hY8Q);
                this.w5B("doloaditem", hY8Q)
            }
            return this
        }
    }();
    b4f.crQ3x = function (e4i, q4u) {
        e4i = e4i || X5c;
        this.Ap4t(q4u, e4i.key);
        this.blr7k(e4i.rkey, "onitemload", e4i)
    };
    b4f.iO8G = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.xH3x.g4k(this, e4i);
        this.w5B("doadditem", e4i)
    };
    b4f.xH3x = function (e4i, q4u) {
        var J5O = e4i.key;
        q4u = this.Ap4t(q4u, J5O);
        if (!!q4u) {
            var eA7t = 0,
                i4m = this.gP8H(J5O);
            if (!e4i.push) {
                eA7t = -1;
                var bi5n = e4i.offset || 0;
                i4m.splice(bi5n, 0, q4u)
            } else if (i4m.loaded) {
                eA7t = 1;
                i4m.push(q4u)
            } else {
                i4m.length++
            }
        }
        var d4h = {
            key: J5O,
            flag: eA7t,
            data: q4u,
            action: "add",
            ext: e4i.ext
        };
        this.w5B("onitemadd", d4h);
        return d4h
    };
    b4f.GP6J = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.bjF6z.g4k(this, e4i);
        this.w5B("dodeleteitem", e4i)
    };
    b4f.bjF6z = function (e4i, bBm1x) {
        var q4u, J5O = e4i.key;
        if (!!bBm1x) {
            q4u = this.em7f(e4i.id) || null;
            var C5H = e4i.id,
                crP3x = this.va2x,
                i4m = this.gP8H(J5O),
                r4v = k4o.cT6N(i4m, function (hC8u) {
                    return !!hC8u && hC8u[crP3x] == C5H
                });
            if (r4v >= 0) i4m.splice(r4v, 1)
        }
        var d4h = {
            key: J5O,
            data: q4u,
            action: "delete",
            ext: e4i.ext
        };
        this.w5B("onitemdelete", d4h);
        return d4h
    };
    b4f.Vi1x = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.crO3x.g4k(this, e4i);
        this.w5B("doupdateitem", e4i)
    };
    b4f.crO3x = function (e4i, q4u) {
        var J5O = e4i.key;
        if (!!q4u) q4u = this.Ap4t(q4u, J5O);
        var d4h = {
            key: J5O,
            data: q4u,
            action: "update",
            ext: e4i.ext
        };
        this.w5B("onitemupdate", d4h);
        return d4h
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ut"),
        b4f;
    if (!!M5R.bjq6k) return;
    M5R.bjq6k = NEJ.C();
    b4f = M5R.bjq6k.O5T(M5R.KK7D);
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.bjf6Z({
            doloadlist: this.Vh1x.g4k(this),
            doloaditem: this.bjm6g.g4k(this),
            doadditem: this.bBK1x.g4k(this),
            dodeleteitem: this.Vg1x.g4k(this),
            doupdateitem: this.Vd1x.g4k(this),
            dopullrefresh: this.bBO1x.g4k(this)
        })
    };
    b4f.Vh1x = bn5s;
    b4f.bBO1x = bn5s;
    b4f.bjm6g = bn5s;
    b4f.bBK1x = bn5s;
    b4f.Vg1x = bn5s;
    b4f.Vd1x = bn5s
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v5A = c4g("nej.j"),
        H5M = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        b4f, K5P;
    p4t.gV8N = NEJ.C();
    b4f = p4t.gV8N.O5T(H5M.bjq6k);
    b4f.ck5p = function () {
        var Kr7k = location.protocol + "//" + location.host;
        var crM3x = function (bs5x, j4n) {
            var bv5A = {
                conf: {},
                data: {},
                urls: []
            };
            k4o.bc5h(bs5x, function (J5O, r4v, i4m) {
                var bb5g = p4t.y5D(J5O);
                if (!bb5g) return;
                var bje6Y = bCd1x(bb5g.url, j4n[J5O]);
                bv5A.urls.push(bje6Y);
                bv5A.conf[bje6Y] = bb5g;
                bv5A.data[bje6Y] = JSON.stringify(j4n[J5O] == null ? "" : j4n[J5O])
            });
            return bv5A
        };
        var bCd1x = function (V5a, j4n) {
            return V5a.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return j4n[$2] || $1
            })
        };
        var bCg1x = function (bb5g, e4i, d4h) {
            h4l.w5B(window, "requesterror", d4h);
            if (!!d4h.stopped) return;
            var GN6H = bb5g.onerror || e4i.onerror;
            if (k4o.fn7g(GN6H)) {
                this.w5B(GN6H, d4h, e4i)
            } else {
                (GN6H || bn5s).call(this, d4h, e4i)
            }
            var d4h = {
                result: d4h,
                option: e4i
            };
            this.w5B("onerror", d4h);
            if (!d4h.stopped)(bb5g.onmessage || bn5s).call(this, d4h.result.code, d4h.result)
        };
        var bCv1x = function (P5U, bb5g, e4i) {
            var m4q = P5U;
            if (k4o.ga7T(bb5g.format)) {
                m4q = bb5g.format.call(this, P5U, e4i)
            }
            return m4q
        };
        var xL3x = function (P5U, bb5g, e4i, tU2x) {
            if (k4o.ga7T(bb5g.beforeload)) {
                bb5g.beforeload.call(this, P5U, e4i, bb5g)
            }
            if (P5U && P5U.code != null && P5U.code != 200) {
                bCg1x.call(this, bb5g, e4i, {
                    key: e4i.key,
                    code: P5U.code,
                    message: P5U.message || "",
                    captchaId: P5U.captchaId,
                    ext: P5U
                });
                return
            }
            var m4q = P5U;
            if (!tU2x) {
                m4q = bCv1x.call(this, P5U, bb5g, e4i)
            } else if (k4o.ga7T(bb5g.format)) {
                var biZ6T = [];
                k4o.bc5h(tU2x.urls, function (V5a) {
                    biZ6T.push(bCv1x.call(this, P5U[V5a], tU2x.conf[V5a], e4i))
                }, this);
                biZ6T.push(e4i);
                m4q = bb5g.format.apply(this, biZ6T)
            }
            var tb1x = bb5g.onload || e4i.onload,
                bCC1x = bb5g.finaly || e4i.finaly || bn5s;
            if (k4o.fn7g(tb1x)) {
                bCC1x.call(this, this.w5B(tb1x, m4q), e4i)
            } else {
                bCC1x.call(this, (tb1x || bn5s).call(this, m4q), e4i)
            }
        };
        var zE3x = function (bb5g, e4i, bP5U) {
            bCg1x.call(this, bb5g, e4i, {
                key: e4i.key,
                code: bP5U.code || -1,
                message: bP5U.message || ""
            })
        };
        return function (bb5g, e4i) {
            if (k4o.fn7g(bb5g)) {
                bb5g = p4t.y5D(bb5g)
            }
            delete e4i.value;
            (bb5g.filter || bn5s).call(this, e4i, bb5g);
            var P5U = e4i.value;
            if (!!P5U) {
                xL3x.call(this, P5U, bb5g, e4i);
                return
            }
            var V5a, j4n = e4i.data || X5c,
                xi3x = {
                    cookie: !0,
                    type: bb5g.rtype || "json",
                    method: bb5g.type || "POST",
                    onerror: zE3x.g4k(this, bb5g, e4i),
                    noescape: bb5g.noescape
                };
            if (k4o.ep7i(bb5g.url)) {
                var tU2x = crM3x(bb5g.url, j4n);
                V5a = Kr7k + "/api/batch";
                xi3x.data = k4o.cY6S(tU2x.data);
                xi3x.onload = xL3x.dS7L(this, bb5g, e4i, tU2x);
                xi3x.headers = {
                    "batch-method": "POST"
                };
                delete tU2x.data
            } else {
                var kR9I = bb5g.url.indexOf(":") < 0 ? Kr7k : "";
                V5a = bCd1x(kR9I + bb5g.url, j4n);
                xi3x.data = k4o.cY6S(e4i.data);
                xi3x.onload = xL3x.dS7L(this, bb5g, e4i)
            } if (xi3x.method == "GET") xi3x.query = xi3x.data;
            return v5A.bp5u(V5a, xi3x)
        }
    }();
    b4f.BO4S = function () {
        var fW7P = /^get|list|pull$/i;
        return function (bCK1x, e4i) {
            var J5O = e4i.key,
                bb5g = p4t.y5D(J5O.split("-")[0] + "-" + bCK1x);
            if (fW7P.test(bCK1x) && J5O.indexOf("post-") < 0) bb5g.type = "GET";
            this.ck5p(bb5g, e4i)
        }
    }();
    b4f.cuc3x = function (J5O, i4m) {
        var cq5v = i4m.length;
        this.bka6U({
            key: J5O,
            offset: 0,
            limit: cq5v + 1
        }, {
            list: i4m,
            total: cq5v
        })
    };
    b4f.Vh1x = function (e4i) {
        this.BO4S("list", e4i)
    };
    b4f.bjm6g = function (e4i) {
        this.BO4S("get", e4i)
    };
    b4f.bBO1x = function (e4i) {
        this.BO4S("pull", e4i)
    };
    b4f.bBK1x = function (e4i) {
        this.BO4S("add", e4i)
    };
    b4f.Vg1x = function (e4i) {
        this.BO4S("del", e4i)
    };
    b4f.Vd1x = function (e4i) {
        this.BO4S("update", e4i)
    };
    b4f.crK3x = function (q4u) {
        this.Ap4t(q4u)
    };
    H5M.fx7q.B5G({
        element: window,
        event: "requesterror"
    })
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        h4l = c4g("nej.v"),
        H5M = c4g("nej.ut"),
        p4t = c4g("nm.d"),
        biI6C = {},
        b4f, K5P;
    var ta1x = function (m4q, e4i) {
        m4q.conf = e4i.conf;
        return m4q
    };
    p4t.eP7I({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function (P5U, e4i) {
                return ta1x({
                    mv: P5U
                }, e4i)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function (m4q, e4i) {
                if (!!m4q.songs && m4q.songs.length > 0) m4q.song = m4q.songs[0];
                else m4q.song = biI6C;
                delete m4q.songs;
                return ta1x(m4q, e4i)
            }, filter: function (e4i) {
                e4i.data.ids = "[" + e4i.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: ta1x
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: ta1x
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function (m4q, e4i) {
                m4q.playlist = m4q.result;
                delete m4q.result;
                return ta1x(m4q, e4i)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: ta1x
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: ta1x
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: ta1x
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (e4i) {
                var i4m = e4i.data.id.split("-");
                e4i.data.radioId = i4m[0];
                e4i.data.asc = i4m[1] == 2;
                e4i.data.limit = 1e3;
                delete e4i.data.id
            }, format: function (P5U, e4i) {
                var crG3x = {
                    id: e4i.data.radioId,
                    programs: P5U.programs
                };
                return ta1x({
                    djradio: crG3x
                }, e4i)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: ta1x
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            }, format: function (m4q, e4i) {
                var ue2x = {
                    lyric: "",
                    nolyric: true
                };
                if (m4q.code == 200 && m4q.lrc && m4q.lrc.lyric) {
                    ue2x.lyric = m4q.lrc.lyric;
                    ue2x.nolyric = false
                } else {
                    ue2x.nolyric = true
                }
                return ta1x({
                    lyric: ue2x
                }, e4i)
            }
        }
    });
    p4t.uc2x = NEJ.C();
    b4f = p4t.uc2x.O5T(p4t.gV8N);
    b4f.crF3x = function (t4x, cI6C) {
        return this.pZ0x(this.UQ1x(t4x, cI6C))
    };
    b4f.Kn7g = function (t4x, cI6C, e4i) {
        e4i = e4i || {};
        var j4n = this.pZ0x(this.UQ1x(t4x, cI6C));
        if (j4n && (t4x != 13 && t4x != 19 || e4i.conf && e4i.conf.useCache)) {
            this.w5B("onresourceload", t4x, cI6C, j4n, e4i.conf);
            return
        }
        e4i.data = {
            id: cI6C
        };
        e4i.onload = this.crD3x.g4k(this, t4x, cI6C);
        e4i.onerror = this.crC3x.g4k(this, t4x, cI6C);
        this.ck5p("res-" + this.Aj4n(t4x) + "-get", e4i)
    };
    b4f.crD3x = function (t4x, cI6C, m4q) {
        var j4n = m4q[this.Aj4n(t4x)];
        this.oK0x(this.UQ1x(t4x, cI6C), j4n);
        this.w5B("onresourceload", t4x, cI6C, j4n, m4q.conf)
    };
    b4f.crC3x = function (t4x, cI6C, m4q, e4i) {
        if (m4q.code != 404) {
            this.w5B("onresourceerror", t4x, cI6C, m4q.code);
            return
        }
        this.oK0x(this.UQ1x(t4x, cI6C), biI6C);
        this.w5B("onresourceload", t4x, cI6C, biI6C, e4i.conf)
    };
    b4f.cud3x = function (t4x, e4i) {
        this.ck5p("res-" + this.Aj4n(t4x) + "-play", e4i)
    };
    b4f.UQ1x = function (t4x, cI6C) {
        return "res-" + this.Aj4n(t4x) + "-" + cI6C
    };
    b4f.Aj4n = function (t4x) {
        var bv5A = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bv5A[t4x]
    };
    p4t.uc2x.GM6G = function (t4x, cI6C) {
        if (!this.eL7E) this.eL7E = p4t.uc2x.B5G({});
        return this.eL7E.crF3x(t4x, cI6C)
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H5M = c4g("nej.ut"),
        p4t = c4g("nm.d"),
        bis6m = /^[1-9][0-9]*$/,
        b4f, K5P;
    var LOCAL_LOG_KEY = "local-log";
    p4t.eP7I({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    p4t.hJ8B = NEJ.C();
    b4f = p4t.hJ8B.O5T(p4t.gV8N);
    b4f.gf7Y = function (W5b, bb5g) {
        if (!W5b || !bb5g) return;
        if (k4o.fn7g(bb5g)) {
            try {
                bb5g = JSON.parse(bb5g)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a4e)
                }
            }
        }
        if (!k4o.kI9z(bb5g)) return;
        this.ck5p("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: W5b,
                    json: bb5g
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + W5b + ", json=" + JSON.stringify(bb5g))
        }
    };
    b4f.UM1x = function (nc0x) {
        if (!k4o.ep7i(nc0x)) return;
        this.ck5p("bi-batch-log", {
            data: {
                logs: JSON.stringify(nc0x)
            }
        })
    };
    b4f.bEr2x = function (bb5g) {
        if (!bb5g || !bb5g.type || !bb5g.rid) return;
        var nd0x = bb5g.type;
        if (bis6m.test(nd0x)) {
            nd0x = this.Aj4n(nd0x)
        }
        if (!nd0x) return;
        if (nd0x == "playlist") nd0x = "list";
        this.gf7Y("search", {
            type: nd0x,
            id: bb5g.rid || null,
            keyword: bb5g.keyword || null
        })
    };
    b4f.Kl7e = function () {
        var crA3x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bb5g) {
            if (!bb5g || !bb5g.type || !bb5g.rid) return;
            if (bb5g.play === undefined) bb5g.play = true;
            var nd0x = bb5g.type;
            if (bis6m.test(nd0x)) {
                nd0x = this.Aj4n(nd0x)
            }
            if (!nd0x) return;
            if (nd0x == "playlist") nd0x = "list";
            var P5U = {
                id: bb5g.rid,
                type: nd0x
            };
            if (nd0x == "song" && bb5g.source) {
                P5U.source = this.bEO2x(bb5g.source);
                if (!!bb5g.sourceid) P5U.sourceid = bb5g.sourceid
            }
            this.gf7Y(!bb5g.play ? "addto" : "play", P5U);
            if (nd0x == "song" && bb5g.hash && bb5g.hash.match(crA3x)) {
                this.gf7Y(!bb5g.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b4f.bii6c = function (C5H, bx5C, dI7B, CI4M) {
        var P5U = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var crw3x = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        P5U.id = C5H;
        P5U.time = Math.round(bx5C);
        P5U.end = k4o.fn7g(CI4M) ? CI4M : crw3x[CI4M] || "";
        if (dI7B && dI7B.fid) {
            P5U.source = this.bEO2x(dI7B.fid);
            P5U.sourceId = dI7B.fdata
        }
        this.gf7Y("play", P5U)
    };
    b4f.bFr2x = function (t4x, cI6C) {
        if (!t4x || !cI6C) return;
        if (bis6m.test(t4x)) t4x = this.Aj4n(t4x);
        if (t4x != "playlist" && t4x != "dj") return;
        var bb5g = p4t.y5D("plus-" + t4x + "-count");
        if (!bb5g) return !1;
        this.ck5p(bb5g, {
            data: {
                id: cI6C
            }
        });
        var Q5V = this.kE9v("play-hist-" + t4x, []);
        if (k4o.cT6N(Q5V, cI6C) < 0) {
            Q5V.push(cI6C);
            return !0
        }
        return !1
    };
    b4f.Aj4n = function (t4x) {
        var bv5A = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bv5A[t4x]
    };
    b4f.bEO2x = function (GL6F) {
        var bv5A = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bv5A[GL6F]
    };
    b4f.crt3x = function (gT8L) {
        var nc0x = this.DU5Z(LOCAL_LOG_KEY, []);
        nc0x.unshift(gT8L);
        if (nc0x.length > 200) {
            nc0x.length = 200
        }
        this.uR2x(LOCAL_LOG_KEY, nc0x)
    };
    b4f.crr3x = function () {
        return this.KL7E(LOCAL_LOG_KEY)
    };
    b4f.eE7x = function (P5U) {
        this.gf7Y("play", P5U)
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        h4l = c4g("nej.v"),
        v5A = c4g("nej.j"),
        H5M = c4g("nej.ut"),
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        n4r = c4g("nm.l"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d");
    if (!p4t.uc2x) return;
    var Q5V = p4t.uc2x.B5G({
        onresourceload: crp3x
    });
    var wB2x = p4t.hJ8B.fX7Q();

    function crp3x(t4x, cI6C, j4n, bb5g) {
        var i4m = [];
        switch (parseInt(t4x)) {
        case 2:
            i4m = j4n;
            break;
        case 13:
            i4m = j4n.tracks;
            break;
        case 18:
            i4m.push(j4n);
            break;
        case 19:
            i4m = j4n.songs;
            break;
        case 21:
            if (j4n.mp && j4n.mp.fee && j4n.mp.pl <= 0) {
                l4p.bhG6A(j4n.data.id, j4n.mp.fee);
                return
            }
            break
        }
        if (l4p.GJ6D(i4m, true, null, t4x == 19 ? {
            source: "album",
            sourceid: cI6C
        } : null) == 0) {
            return
        }
        l4p.eT7M({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bb5g.message
        })
    }

    function cro3x(d4h, pV0x, wV3x, ey7r) {
        ey7r = ey7r || {};
        if (d4h.action == "ok") {
            if (wV3x) {
                location.dispatch2("/payfee?songId=" + wV3x)
            } else {
                location.dispatch2("/payfee?fee=" + pV0x || 1)
            }
            wB2x.gf7Y("click", {
                type: "tobuyvip",
                name: "box",
                source: ey7r.source || "song",
                sourceid: ey7r.sourceid || wV3x || 0
            })
        } else if (d4h.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + wV3x);
            wB2x.gf7Y("click", {
                type: "tobuyone",
                name: "box",
                source: ey7r.source || "song",
                sourceid: ey7r.sourceid || wV3x || 0
            })
        }
    }

    function Kb7U(bD5I) {
        l4p.eT7M({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bD5I,
            btntxt: "知道了"
        })
    }

    function Ka7T(bD5I, P5U) {
        Kb7U((P5U || X5c).toast || bD5I)
    }
    l4p.ia8S = function (bD5I, C5H, t4x, crm3x, bd5i) {
        bD5I = bD5I || "由于版权保护，您所在的地区暂时无法使用。";
        if (crm3x && bd5i && bd5i.privilege && bd5i.privilege.toast) {
            v5A.bp5u("/api/song/toast", {
                query: {
                    id: bd5i.id
                },
                type: "json",
                onload: Ka7T.g4k(this, bD5I),
                onerror: Ka7T.g4k(this, bD5I)
            })
        } else if (C5H && t4x) {
            Q5V.Kn7g(t4x, C5H, {
                conf: {
                    message: bD5I,
                    useCache: t4x != 18
                }
            })
        } else {
            Kb7U(bD5I)
        }
    };
    l4p.sR1x = function (pV0x, wV3x, t4x, ey7r, mv9m) {
        var bN5S, pL0x = "m-popup-info",
            bhw6q = "单首购买",
            bhu6o = "马上去开通",
            cA5F = "唱片公司要求，当前歌曲须付费使用。",
            bIb3x = true;
        try {
            bN5S = top.api.feeMessage || {}
        } catch (e) {
            bN5S = {}
        }
        if (pV0x == 1 || pV0x == 8 || pV0x == 16) {
            if (t4x == "song") {
                pL0x = "m-popup-song-buy";
                cA5F = bN5S["vip2"] || cA5F;
                bhu6o = bN5S["vip2button"] || "包月购买";
                bhw6q = bN5S["vip2link"] || bhw6q;
                if (mv9m && mv9m.flag !== undefined) {
                    var bs5x = mv9m.flag.toString(2).split("");
                    if (parseInt(bs5x.pop(), 10) == 1) {
                        bIb3x = false
                    }
                }
            } else {
                cA5F = bN5S["vip"] || cA5F
            }
        } else if (pV0x == 4) {
            cA5F = bN5S["album"] || cA5F;
            bhu6o = "立即订购"
        } else {
            cA5F = bN5S["unknow"] || cA5F
        }
        l4p.jr8j({
            clazz: "m-layer-w5",
            html: a4e.bU5Z(pL0x, {
                songTxt: bhw6q,
                tip: cA5F,
                oktext: bhu6o,
                cctext: "以后再说",
                showSongText: bIb3x
            }),
            onaction: cro3x.dS7L(null, pV0x, wV3x, ey7r)
        })
    };
    l4p.bIe3x = function (hj8b, he8W) {
        l4p.gO8G({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (t4x) {
                if (t4x == "ok") {
                    l4p.WM2x({
                        id: hj8b,
                        type: he8W
                    })
                }
            }
        })
    };
    l4p.bhG6A = function (ob0x, pV0x) {
        var bN5S, cA5F = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bN5S = top.api.feeMessage || {}
        } catch (e) {
            bN5S = {}
        }
        if (pV0x == 1 || pV0x == 8) {
            cA5F = bN5S["vip"] || cA5F
        } else if (pV0x == 4) {
            cA5F = bN5S["album"] || cA5F
        } else {
            cA5F = bN5S["unknow"] || cA5F
        }
        return l4p.jr8j({
            clazz: "m-layer-w5",
            html: a4e.bU5Z("m-popup-info", {
                tip: cA5F,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function (d4h) {
                if (d4h.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + ob0x);
                    wB2x.gf7Y("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: ob0x || 0
                    })
                }
            }
        })
    };
    l4p.GJ6D = function () {
        function compareFee(crl3x, cri3x) {
            var bv5A = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bv5A[crl3x] || 0) - (bv5A[cri3x] || 0)
        }
        return function (i4m, cA5F, sN1x, ey7r) {
            sN1x = sN1x || {};
            var vY2x = [],
                GH6B = {},
                bJt3x = 0,
                bJv3x = 0,
                GG6A = null;
            if (!i4m || !i4m.length) return vY2x;
            k4o.bc5h(i4m, function (bd5i) {
                var eV7O = l4p.of0x(bd5i);
                if (eV7O == 0) {
                    vY2x.push(bd5i)
                } else if (eV7O == 10) {
                    if (bd5i.privilege) {
                        bd5i.fee = bd5i.privilege.fee
                    }
                    if (compareFee(bd5i.fee, GH6B.fee) > 0) {
                        GH6B = bd5i
                    }
                } else if (eV7O == 11) {
                    ++bJt3x;
                    if (!sN1x.play) vY2x.push(bd5i)
                } else if (eV7O == 1e3) {
                    ++bJv3x;
                    if (!sN1x.download) vY2x.push(bd5i)
                } else if (eV7O == 100) {
                    GG6A = bd5i
                }
            });
            if (vY2x.length == 0 && cA5F) {
                if (bJt3x == i4m.length) {
                    var rM1x = i4m[0].privilege || {};
                    if (rM1x.payed) {
                        l4p.ia8S("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l4p.sR1x(rM1x.fee, null, null, ey7r)
                    }
                } else if (bJv3x == i4m.length) {
                    l4p.ia8S("因版权方要求，该歌曲不支持下载")
                } else if (GH6B.id) {
                    l4p.sR1x(GH6B.fee, GH6B.id, null, ey7r, GH6B.privilege)
                } else {
                    if (GG6A && i4m.length == 1 && GG6A.privilege && GG6A.privilege.st < 0 && GG6A.privilege.toast) {
                        l4p.ia8S(null, null, null, true, GG6A)
                    } else {
                        l4p.ia8S()
                    }
                }
            }
            return vY2x
        }
    }();
    l4p.of0x = function (bd5i) {
        if (!bd5i) return 0;
        var eV7O = bd5i.privilege;
        if (bd5i.program) return 0;
        if (window.GAbroad) return 100;
        if (eV7O) {
            if (eV7O.st != null && eV7O.st < 0) {
                return 100
            }
            if (eV7O.fee > 0 && eV7O.fee != 8 && eV7O.payed == 0 && eV7O.pl <= 0) return 10;
            if (eV7O.fee == 16) return 11;
            if ((eV7O.fee == 0 || eV7O.payed) && eV7O.pl > 0 && eV7O.dl == 0) return 1e3;
            if (eV7O.pl == 0 && eV7O.dl == 0) return 100;
            return 0
        } else {
            var dZ7S = bd5i.status != null ? bd5i.status : bd5i.st != null ? bd5i.st : 0;
            if (bd5i.status >= 0) return 0;
            if (bd5i.fee > 0) return 10;
            return 100
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        h4l = c4g("nej.v"),
        a4e = c4g("nej.e"),
        M5R = c4g("nej.ui"),
        b4f;
    if (!!M5R.Uh1x) return;
    var ib8T = a4e.rS1x(".#<uispace>{position:absolute;background:#fff;}");
    M5R.Uh1x = NEJ.C();
    b4f = M5R.Uh1x.O5T(M5R.Mi7b);
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.bS5X([
            [document, "click", this.rL1x.g4k(this)]
        ]);
        this.crg3x = !!e4i.nostop;
        this.bKE3x = {
            top: e4i.top,
            left: e4i.left
        }
    };
    b4f.bC5H = function () {
        delete this.vV2x;
        delete this.bgU6O;
        delete this.pp0x;
        delete this.bKR3x;
        delete this.TV1x;
        delete this.bKE3x;
        this.bG5L()
    };
    b4f.bZ5e = function () {
        this.kU9L = ib8T
    };
    b4f.bR5W = function () {
        this.cc5h();
        this.zX4b = this.o4s;
        h4l.s4w(this.o4s, "click", this.cre3x.g4k(this))
    };
    b4f.rL1x = function (d4h) {
        if (d4h.button != 2) this.bq5v()
    };
    b4f.cre3x = function (d4h) {
        if (this.crg3x) return;
        h4l.se1x(d4h);
        var E5J = h4l.U5Z(d4h);
        if (E5J.tagName == "A") h4l.cf5k(d4h)
    };
    b4f.crd3x = function () {
        var cO6I = /\s+/i;
        return function (mQ0x) {
            mQ0x = (mQ0x || "").trim().toLowerCase().split(cO6I);
            mQ0x[0] = mQ0x[0] || "bottom";
            mQ0x[1] = mQ0x[1] || "left";
            this.pp0x = mQ0x
        }
    }();
    b4f.crc3x = function (mQ0x) {
        var m4q = {},
            mk9b = this.bgU6O,
            cug3x = a4e.og0x(),
            dk6e = this.o4s.offsetWidth,
            co5t = this.o4s.offsetHeight;
        switch (mQ0x[0]) {
        case "top":
            m4q.top = mk9b.top - co5t;
            m4q.left = mQ0x[1] == "right" ? mk9b.left + mk9b.width - dk6e : mk9b.left;
            break;
        case "left":
            m4q.left = mk9b.left - dk6e;
            m4q.top = mQ0x[1] == "bottom" ? mk9b.top + mk9b.height - co5t : mk9b.top;
            break;
        case "right":
            m4q.left = mk9b.left + mk9b.width;
            m4q.top = mQ0x[1] == "bottom" ? mk9b.top + mk9b.height - co5t : mk9b.top;
            break;
        default:
            m4q.top = mk9b.top + mk9b.height;
            m4q.left = mQ0x[1] == "right" ? mk9b.left + mk9b.width - dk6e : mk9b.left;
            break
        }
        return m4q
    };
    b4f.Hr6l = function () {
        if (!this.bKR3x) {
            this.fZ7S(this.bKE3x);
            return
        }
        if (!!this.TV1x) {
            this.fZ7S(this.vV2x);
            return
        }
        if (!!this.bgU6O) this.fZ7S(this.crc3x(this.pp0x))
    };
    b4f.cqZ3x = function (E5J, de6Y, d4h) {
        de6Y = de6Y || X5c;
        var bLz4D = a4e.og0x(),
            cN6H = h4l.kz9q(d4h) + (de6Y.left || 0),
            gL8D = h4l.nL0x(d4h) + (de6Y.top || 0),
            dk6e = E5J.offsetWidth + (de6Y.right || 0),
            co5t = E5J.offsetHeight + (de6Y.bottom || 0),
            GA6u = bLz4D.scrollWidth,
            bgK6E = bLz4D.scrollHeight,
            bgE6y = cN6H + dk6e,
            bgD6x = gL8D + co5t;
        switch (this.pp0x[0]) {
        case "top":
            gL8D = bgD6x > bgK6E ? gL8D - co5t : gL8D;
            if (this.pp0x[1] == "right") {
                cN6H = cN6H - dk6e < 0 ? 0 : cN6H - dk6e
            } else {
                cN6H = bgE6y > GA6u ? GA6u - dk6e : cN6H
            }
            break;
        case "left":
            cN6H = bgE6y > GA6u ? GA6u - dk6e : cN6H;
            if (this.pp0x[1] == "top") {
                gL8D = bgD6x > bgK6E ? gL8D - co5t : gL8D
            } else {
                gL8D = gL8D - co5t < 0 ? gL8D : gL8D - co5t
            }
            break;
        case "right":
            cN6H = cN6H - dk6e < 0 ? 0 : cN6H - dk6e;
            if (this.pp0x[1] == "top") {
                gL8D = bgD6x > bgK6E ? gL8D - co5t : gL8D
            } else {
                gL8D = gL8D - co5t < 0 ? gL8D : gL8D - co5t
            }
            break;
        default:
            gL8D = gL8D - co5t < 0 ? gL8D : gL8D - co5t;
            if (this.pp0x[1] == "left") {
                cN6H = bgE6y > GA6u ? GA6u - dk6e : cN6H
            } else {
                cN6H = cN6H - dk6e < 0 ? 0 : cN6H - dk6e
            }
            break
        }
        return {
            top: gL8D,
            left: cN6H
        }
    };
    b4f.bgC6w = function () {
        var cqX3x = function (E5J, de6Y) {
            E5J = a4e.y5D(E5J);
            if (!E5J) return;
            de6Y = de6Y || X5c;
            var bi5n = a4e.hO8G(E5J);
            return {
                top: bi5n.y - (de6Y.top || 0),
                left: bi5n.x - (de6Y.left || 0),
                width: E5J.offsetWidth + (de6Y.right || 0),
                height: E5J.offsetHeight + (de6Y.bottom || 0)
            }
        };
        return function (e4i) {
            e4i = e4i || X5c;
            this.TV1x = e4i.event;
            this.crd3x(e4i.align);
            if (!!this.TV1x) this.vV2x = this.cqZ3x(e4i.target, e4i.delta, this.TV1x);
            this.bgU6O = cqX3x(e4i.target, e4i.delta);
            this.bKR3x = !!e4i.fitable;
            this.N5S();
            return this
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ui"),
        b4f, K5P;
    if (!!M5R.zW4a) return;
    M5R.zW4a = NEJ.C();
    b4f = M5R.zW4a.O5T(M5R.Rs0x);
    K5P = M5R.zW4a.ch5m;
    M5R.zW4a.cuh3x = function () {
        var cqU3x = function (d4h, C5H, ff7Y, jh8Z, JN7G) {
            var cp5u, J5O = C5H + "-i",
                Q5V = ff7Y.wP3x,
                bMY4c = !!jh8Z.noclear,
                bNc4g = !!jh8Z.toggled;
            if (k4o.ga7T(jh8Z.onbeforeclick)) {
                var TP1x = jh8Z.noclear,
                    cqS3x = jh8Z.toggled;
                try {
                    jh8Z.onbeforeclick(jh8Z)
                } catch (e) {}
                bMY4c = !!jh8Z.noclear;
                bNc4g = !!jh8Z.toggled;
                jh8Z.toggled = cqS3x;
                jh8Z.noclear = TP1x
            }
            var Di5n = Q5V[J5O];
            if (bNc4g && !!Di5n) {
                Di5n.bq5v();
                return
            }
            h4l.bh5m(d4h);
            if (!bMY4c) {
                h4l.w5B(document, "click");
                cp5u = ff7Y.B5G(jh8Z)
            } else {
                cp5u = ff7Y.cdp9g(jh8Z, !0)
            }
            Q5V[J5O] = cp5u;
            cp5u.uI2x("onbeforerecycle", function () {
                delete Q5V[J5O]
            });
            cp5u.bgC6w(JN7G)
        };
        return function (f4j, e4i) {
            f4j = a4e.y5D(f4j);
            if (!f4j) return this;
            if (!this.wP3x) this.wP3x = {};
            var C5H = a4e.kr9i(f4j);
            if (!!this.wP3x[C5H]) return this;
            e4i = NEJ.X({}, e4i);
            var JN7G = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e4i);
            JN7G.target = C5H;
            e4i.destroyable = !0;
            if (!e4i.fixed) {
                JN7G.fitable = !0;
                e4i.parent = document.body
            }
            this.wP3x[C5H] = [C5H, e4i.event || "click", cqU3x.dS7L(null, C5H, this, e4i, JN7G)];
            h4l.s4w.apply(h4l, this.wP3x[C5H]);
            return this
        }
    }();
    M5R.zW4a.cui3x = function (f4j) {
        if (!this.wP3x) return this;
        var C5H = a4e.kr9i(f4j),
            d4h = this.wP3x[C5H];
        if (!d4h) return this;
        delete this.wP3x[C5H];
        h4l.lS9J.apply(h4l, d4h);
        var cp5u = this.wP3x[C5H + "-i"];
        if (!!cp5u) cp5u.bq5v();
        return this
    };
    b4f.bba4e = function () {
        return M5R.Uh1x.B5G(this.bQ5V)
    };
    b4f.Ma7T = function () {
        K5P.Ma7T.apply(this, arguments);
        this.bQ5V.top = null;
        this.bQ5V.left = null;
        this.bQ5V.nostop = !1
    };
    b4f.bgC6w = function (e4i) {
        if (!!this.nk0x) this.nk0x.bgC6w(e4i);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        be5j = c4g("nej.ui"),
        n4r = c4g("nm.l"),
        b4f, K5P;
    n4r.bgt6n = NEJ.C();
    b4f = n4r.bgt6n.O5T(be5j.zW4a);
    b4f.bj5o = function (e4i) {
        e4i.nohack = true;
        this.bk5p(e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        n4r = c4g("nm.l"),
        b4f, K5P;
    n4r.Z5e = NEJ.C();
    b4f = n4r.Z5e.O5T(n4r.bgt6n);
    K5P = n4r.Z5e.ch5m;
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.el7e = e4i.type || 1
    };
    b4f.bR5W = function () {
        this.cc5h();
        this.o4s = a4e.mV0x(this.cqQ3x());
        var i4m = a4e.cP6J(this.o4s);
        this.pN0x = i4m[0];
        this.ci5n = i4m[1]
    };
    b4f.cqQ3x = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b4f.Hr6l = function () {
        var A5F = {},
            cd5i = this.o4s.style,
            iL8D = a4e.og0x(),
            mW0x = {
                left: iL8D.scrollLeft,
                top: iL8D.scrollTop
            },
            de6Y = {
                left: iL8D.clientWidth - this.o4s.offsetWidth,
                top: iL8D.clientHeight - this.o4s.offsetHeight
            };
        A5F.top = Math.max(0, mW0x.top + de6Y.top / 2);
        A5F.left = Math.max(0, mW0x.left + de6Y.left / 2);
        this.nk0x.fZ7S(A5F)
    };
    b4f.N5S = function (e4i) {
        K5P.N5S.call(this);
        this.Hr6l();
        this.el7e == 1 ? a4e.eK7D(this.pN0x, "u-icn-32", "u-icn-31") : a4e.eK7D(this.pN0x, "u-icn-31", "u-icn-32");
        this.ci5n.innerHTML = e4i.tip || ""
    };
    window.g_showTipCard = n4r.Z5e.N5S = function () {
        var eZ7S;
        return function (e4i) {
            clearTimeout(eZ7S);
            if (e4i.parent === undefined) e4i.parent = document.body;
            if (e4i.autoclose === undefined) e4i.autoclose = true;
            e4i.clazz = "m-sysmsg";
            !!this.eL7E && this.eL7E.S5X();
            this.eL7E = this.B5G(e4i);
            this.eL7E.N5S(e4i);
            if (e4i.autoclose) eZ7S = setTimeout(this.bq5v.g4k(this), 2e3)
        }.g4k(n4r.Z5e)
    }();
    n4r.Z5e.bq5v = function () {
        !!this.eL7E && this.eL7E.bq5v()
    }
})();
(function () {
    var c4g = NEJ.P,
        v5A = c4g("nej.j"),
        k4o = c4g("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v5A.bp5u = v5A.bp5u.ee7X(function (d4h) {
            e4i = d4h.args[1];
            e4i.query = e4i.query || {};
            if (k4o.fn7g(e4i.query)) e4i.query = k4o.hp8h(e4i.query);
            e4i.query.ref = "mail"
        })
    }
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        fb7U = NEJ.R,
        H5M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v5A = c4g("nej.j"),
        p4t = c4g("nm.d"),
        n4r = c4g("nm.l"),
        J5O = "playlist-tracks_",
        b4f;
    p4t.eP7I({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function (P5U, e4i) {
                this.cqP3x(P5U.playlist);
                return {
                    total: 0,
                    list: fb7U
                }
            }, onerror: function () {
                this.w5B("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function (P5U, e4i) {
                var lT9K = P5U.playlist;
                lT9K.creator = GUser;
                lT9K.isHost = !0;
                lT9K.typeFlag = "playlist";
                return lT9K
            }, finaly: function (d4h, e4i) {
                h4l.w5B(p4t.ho8g, "listchange", d4h)
            }, onmessage: function () {
                var lB9s = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (cb5g) {
                    n4r.Z5e.N5S({
                        tip: lB9s[cb5g] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function (e4i) {
                e4i.id = e4i.data.pid
            }, finaly: function (d4h, e4i) {
                h4l.w5B(p4t.ho8g, "listchange", d4h)
            }, onmessage: function () {
                var lB9s = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (cb5g) {
                    n4r.Z5e.N5S({
                        tip: lB9s[cb5g] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function (e4i) {
                var ey7r = e4i.ext || {};
                e4i.ext = NEJ.X(ey7r, e4i.data);
                e4i.data = {
                    id: e4i.ext.id
                }
            }, format: function (P5U, e4i) {
                n4r.Z5e.N5S({
                    tip: "收藏成功" + (P5U.point > 0 ? ' 获得<em class="s-fc6">' + P5U.point + "积分</em>" : "")
                });
                var q4u = e4i.ext;
                q4u.subscribedCount++;
                return q4u
            }, finaly: function (d4h, e4i) {
                h4l.w5B(p4t.cqO3x, "listchange", d4h);
                h4l.w5B(p4t.cqO3x, "itemchange", {
                    attr: "subscribedCount",
                    data: d4h.data
                })
            }, onmessage: function () {
                var lB9s = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function (cb5g) {
                    n4r.Z5e.N5S({
                        type: 2,
                        tip: lB9s[cb5g] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function (e4i) {
                e4i.id = e4i.data.id = e4i.data.pid
            }, finaly: function (d4h, e4i) {
                h4l.w5B(p4t.ho8g, "listchange", d4h)
            }, onmessage: function () {
                var lB9s = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (cb5g) {
                    n4r.Z5e.N5S({
                        tip: lB9s[cb5g],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e4i) {
                var j4n = e4i.data,
                    TM1x = {};
                TM1x["playlist-update-name"] = {
                    id: j4n.id,
                    name: j4n.name
                };
                TM1x["playlist-update-tag"] = {
                    id: j4n.id,
                    tags: j4n.tags.join(";")
                };
                TM1x["playlist-update-desc"] = {
                    id: j4n.id,
                    desc: j4n.description
                };
                e4i.data = TM1x;
                e4i.ext = j4n
            }, format: function (T5Y, pI0x, JK7D, e4i) {
                if (T5Y.code == 200 && pI0x.code == 200 && JK7D.code == 200) {
                    e4i.ext.allSuccess = true;
                    n4r.Z5e.N5S({
                        tip: "保存成功"
                    })
                } else if (T5Y.code == 407 || pI0x.code == 407 || JK7D.code == 407) {
                    e4i.ext.allSuccess = false;
                    n4r.Z5e.N5S({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e4i.ext.allSuccess = false;
                    n4r.Z5e.N5S({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.em7f(e4i.ext.id)
            }, finaly: function (d4h, e4i) {
                h4l.w5B(p4t.ho8g, "listchange", d4h)
            }, onmessage: function (cb5g) {
                n4r.Z5e.N5S({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function (P5U, e4i) {
                var q4u = this.em7f(e4i.ext.id);
                if (P5U.code == 200) q4u.name = e4i.ext.name;
                return P5U
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function (P5U, e4i) {
                var q4u = this.em7f(e4i.ext.id);
                if (P5U.code == 200) q4u.tags = e4i.ext.tags;
                return P5U
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function (P5U, e4i) {
                var q4u = this.em7f(e4i.ext.id);
                if (P5U.code == 200) q4u.description = e4i.ext.description;
                return P5U
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function (e4i) {
                e4i.url = e4i.data.url;
                delete e4i.data.url
            }, format: function (P5U, e4i) {
                n4r.Z5e.N5S({
                    tip: "保存成功"
                });
                var q4u = this.em7f(e4i.data.id);
                q4u.coverImgUrl = e4i.url;
                e4i.ext = q4u;
                return q4u
            }, onmessage: function (cb5g) {
                n4r.Z5e.N5S({
                    type: 2,
                    tip: "保存失败"
                })
            }, finaly: function (d4h, e4i) {
                h4l.w5B(p4t.ho8g, "itemchange", {
                    attr: "coverImgUrl",
                    data: e4i.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function (P5U, e4i) {
                var lT9K = this.em7f(e4i.data.id);
                if (!lT9K) return;
                lT9K.playCount++;
                h4l.w5B(p4t.ho8g, "itemchange", {
                    attr: "playcount",
                    data: lT9K
                })
            }
        }
    });
    p4t.ho8g = NEJ.C();
    b4f = p4t.ho8g.O5T(p4t.gV8N);
    b4f.cl5q = function () {
        this.cr5w()
    };
    b4f.bsE9v = function () {
        var cS6M = GUser.userId;
        this.nr0x({
            limit: 1001,
            key: "playlist_my-" + cS6M,
            data: {
                offset: 0,
                limit: 1001,
                uid: cS6M
            }
        })
    };
    b4f.cqP3x = function (i4m) {
        var cS6M = GUser.userId,
            jb8T = [],
            bsM9D = [];
        k4o.bc5h(i4m, function (q4u) {
            q4u.typeFlag = "playlist";
            if (q4u.creator && q4u.creator.userId == cS6M) {
                if (q4u.specialType == 5) q4u.name = "我喜欢的音乐";
                q4u.isHost = !0;
                jb8T.push(q4u)
            } else {
                bsM9D.push(q4u)
            }
        });
        this.sa1x("playlist_new-" + cS6M, jb8T);
        this.sa1x("playlist_fav-" + cS6M, bsM9D)
    };
    b4f.cqN3x = function (j4n) {
        this.ck5p("playlist-update-cover", {
            data: j4n
        })
    };
    b4f.cuj3x = function () {
        var JI7B = this.cqK3x.y5D("host-plist");
        if (JI7B.length == 0) {
            return
        }
        if (JI7B.length == 1 && JI7B[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = JI7B.length; i < len; i++) {
            var q4u = JI7B[i];
            if (q4u.trackCount > 0) return q4u.id
        }
        return this.cqK3x.y5D("host-plist")[0].id
    };
    b4f.cqJ3x = function (C5H) {
        if (GUser && GUser.userId > 0) {
            this.ck5p("playlist-upcount", {
                data: {
                    id: C5H
                }
            })
        }
    };
    b4f.Bi4m = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b4f.cuk3x = function () {
        return GUser.userId
    };
    b4f.bgk5p = function (q4u) {
        if (q4u.userId == GUser.userId && q4u.specialType == 5) q4u.name = "我喜欢的音乐";
        h4l.w5B(this.constructor, "itemchange", {
            data: this.Ap4t(q4u)
        });
        return q4u
    };
    H5M.fx7q.B5G({
        element: p4t.ho8g,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function () {
    var c4g = NEJ.P,
        fb7U = NEJ.R,
        bn5s = NEJ.F,
        X5c = NEJ.O,
        H5M = c4g("nej.ut"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        n4r = c4g("nm.l"),
        b4f, K5P;
    p4t.eP7I({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function (P5U) {
                return P5U.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (e4i) {
                e4i.data.limit = 1e3;
                delete e4i.data.id
            }, format: function (P5U, e4i) {
                var bub9S = [],
                    zS4W = P5U.programs;
                if (zS4W) {
                    for (var i = 0, l = zS4W.length; i < l; i++) {
                        if (zS4W[i].programFeeType < 10 || zS4W[i].buyed) {
                            bub9S.push(zS4W[i])
                        }
                    }
                }
                return bub9S
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function (P5U, e4i) {
                return P5U.programs
            }, onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function (e4i) {
                e4i.ext = e4i.data;
                e4i.data = {
                    id: e4i.ext.id
                };
                e4i.id = e4i.data.id
            }, format: function (P5U, e4i) {
                n4r.Z5e.N5S({
                    tip: "收藏成功"
                });
                var q4u = e4i.ext;
                q4u.subscribedCount++;
                q4u.subscribed = !0;
                return q4u
            }, finaly: function (d4h, e4i) {
                h4l.w5B(p4t.pB0x, "listchange", d4h)
            }, onmessage: function () {
                var lB9s = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function (cb5g) {
                    n4r.Z5e.N5S({
                        type: 2,
                        tip: lB9s[cb5g] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function (d4h, e4i) {
                h4l.w5B(p4t.pB0x, "listchange", d4h)
            }, onmessage: function () {
                var lB9s = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function (cb5g) {
                    l4p.bgi5n({
                        txt: lB9s[cb5g] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function (e4i) {
                var q4u = this.em7f(e4i.data.id) || X5c;
                e4i.ext = (q4u.listenerCount || 0) + 1
            }, format: function (P5U, e4i) {
                var q4u = this.em7f(e4i.data.id);
                if (!!q4u) {
                    q4u.listenerCount = Math.max(e4i.ext, q4u.listenerCount || 0)
                }
            }, finaly: function (d4h, e4i) {
                h4l.w5B(p4t.pB0x, "itemchange", {
                    attr: "playCount",
                    data: this.em7f(e4i.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function (e4i) {
                e4i.data = {
                    threadId: "A_DJ_1_" + e4i.id
                }
            }, format: function (P5U, e4i) {
                var q4u = e4i.ext.data || this.em7f(e4i.id);
                q4u.liked = true;
                q4u.likedCount++;
                e4i.ext.data = q4u;
                try {
                    top.player.setLike(q4u)
                } catch (e) {}
                return q4u
            }, finaly: function (d4h, e4i) {
                h4l.w5B(p4t.pB0x, "itemchange", {
                    attr: "likedCount",
                    data: e4i.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function (e4i) {
                e4i.data = {
                    threadId: "A_DJ_1_" + e4i.id
                }
            }, format: function (P5U, e4i) {
                var q4u = e4i.ext.data || this.em7f(e4i.id);
                q4u.liked = false;
                q4u.likedCount--;
                e4i.ext.data = q4u;
                try {
                    top.player.setLike(q4u)
                } catch (e) {}
                return q4u
            }, finaly: function (d4h, e4i) {
                h4l.w5B(p4t.pB0x, "itemchange", {
                    attr: "likedCount",
                    data: e4i.ext.data
                })
            }
        }
    });
    p4t.pB0x = NEJ.C();
    b4f = p4t.pB0x.O5T(p4t.gV8N);
    b4f.cul3x = function () {
        var cS6M = GUser.userId;
        this.nr0x({
            limit: 1001,
            key: "program_fav-" + cS6M,
            data: {
                offset: 0,
                limit: 1e3,
                uid: cS6M
            }
        })
    };
    b4f.cum3x = function (di6c) {
        var oz0x = di6c[this.va2x];
        l4p.cqE3x(4, function (Q5V) {
            Q5V.sa1x("track_program-" + oz0x, di6c.songs)
        });
        delete di6c.songs;
        var bI5N = di6c.mainSong;
        l4p.cqE3x(4, function (Q5V) {
            Q5V.sa1x("track_program_main-" + oz0x, !bI5N ? [] : [bI5N])
        });
        di6c.mainSong = (bI5N || X5c).id
    };
    b4f.cun3x = function (C5H) {
        var di6c = this.em7f(C5H),
            cS6M = localCache.Ws2x("host.profile.userId");
        return !!di6c && di6c.dj.userId == cS6M
    };
    b4f.cuo3x = function (C5H) {
        return !1
    };
    b4f.bgk5p = function (q4u) {
        h4l.w5B(this.constructor, "itemchange", {
            attr: "detail",
            data: this.Ap4t(q4u)
        });
        return q4u
    };
    b4f.cqJ3x = function (C5H) {
        this.ck5p("program-update-count", {
            data: {
                id: C5H
            }
        })
    };
    l4p.bve9V = function (e4i) {
        var Q5V = p4t.pB0x.B5G({
            onitemadd: function () {
                (e4i.onsuccess || bn5s)()
            }, onerror: function () {
                (e4i.onerror || bn5s)()
            }
        });
        if (e4i.data.liked) {
            Q5V.JG7z(e4i.data)
        } else {
            Q5V.vZ2x(e4i.data)
        }
    };
    b4f.vZ2x = function (di6c) {
        if (!l4p.gW8O()) return;
        var cm5r = {
            ext: {}
        };
        if (k4o.kI9z(di6c)) {
            cm5r.id = di6c.id;
            cm5r.ext.data = di6c
        } else {
            cm5r.id = di6c
        }
        this.ck5p("program-like", cm5r)
    };
    b4f.JG7z = function (di6c) {
        if (!l4p.gW8O()) return;
        var cm5r = {
            ext: {}
        };
        if (k4o.kI9z(di6c)) {
            cm5r.id = di6c.id;
            cm5r.ext.data = di6c
        } else {
            cm5r.id = di6c
        }
        this.ck5p("program-unlike", cm5r)
    };
    H5M.fx7q.B5G({
        element: p4t.pB0x,
        event: ["listchange", "itemchange"]
    })
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        fb7U = NEJ.R,
        H5M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v5A = c4g("nej.j"),
        p4t = c4g("nm.d"),
        n4r = c4g("nm.l"),
        l4p = c4g("nm.x"),
        J5O = "playlist-tracks_",
        l4p = c4g("nm.x"),
        b4f;
    p4t.eP7I({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function (e4i) {
                e4i.data.c = JSON.stringify([{
                    id: e4i.data.id
                }])
            }, format: function (P5U, e4i) {
                var bd5i = l4p.BD4H(P5U.songs[0]);
                bd5i.privilege = P5U.privileges[0];
                return bd5i
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function (e4i) {
                e4i.data.n = 1e3
            }, format: function (P5U, e4i) {
                var gX8P = [];
                this.rz1x.bgk5p(P5U.playlist);
                k4o.bc5h(P5U.playlist.tracks, function (bI5N, r4v) {
                    var bvY0x = l4p.BD4H(bI5N);
                    bvY0x.privilege = P5U.privileges[r4v];
                    gX8P.push(bvY0x)
                }, this);
                return gX8P
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function (P5U, e4i) {
                var gX8P = [];
                k4o.bc5h(P5U.songs, function (bd5i) {
                    gX8P.push(l4p.BD4H(bd5i))
                });
                return gX8P
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (e4i) {
                var bv5A = {},
                    j4n = e4i.data,
                    cqB3x = this.gP8H(e4i.key) || [];
                BK4O = [];
                k4o.bc5h(cqB3x, function (bI5N) {
                    var C5H = k4o.kI9z(bI5N) ? bI5N.id : bI5N;
                    bv5A[C5H] = true
                });
                e4i.ext = [];
                k4o.bc5h(j4n.tracks, function (bI5N) {
                    var C5H = k4o.kI9z(bI5N) ? bI5N.id : bI5N;
                    if (!bv5A[C5H]) {
                        BK4O.push(C5H);
                        bv5A[C5H] = true;
                        e4i.ext.push(bI5N)
                    }
                });
                j4n.trackIds = JSON.stringify(BK4O);
                j4n.op = "add";
                if (!BK4O.length) {
                    e4i.value = {
                        code: 502
                    }
                }
            }, format: function (P5U, e4i) {
                n4r.Z5e.N5S({
                    tip: "已添加至歌单"
                });
                var lT9K = this.rz1x.em7f(e4i.data.pid);
                if (!!P5U.coverImgUrl) lT9K.coverImgUrl = P5U.coverImgUrl;
                k4o.lY9P(e4i.ext, function (bI5N) {
                    this.xH3x(e4i, k4o.kI9z(bI5N) ? bI5N : null);
                    if (!!lT9K) lT9K.trackCount++
                }, this);
                h4l.w5B(p4t.ho8g, "itemchange", {
                    data: lT9K || {}, cmd: "add"
                });
                this.w5B("onaddsuccess");
                return null
            }, finaly: function (d4h, e4i) {
                h4l.w5B(p4t.vi2x, "listchange", {
                    key: e4i.key,
                    action: "refresh"
                });
                var oz0x = e4i.data.pid,
                    cq5v = this.jz8r(e4i.key)
            }, onmessage: function () {
                var lB9s = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function (cb5g) {
                    setTimeout(function () {
                        n4r.Z5e.N5S({
                            tip: lB9s[cb5g] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (e4i) {
                var j4n = e4i.data;
                e4i.ext = j4n.trackIds;
                j4n.trackIds = JSON.stringify(j4n.trackIds);
                j4n.op = "del"
            }, format: function (P5U, e4i) {
                var lT9K = this.rz1x.em7f(e4i.data.pid);
                k4o.bc5h(e4i.ext, function (C5H) {
                    this.bjF6z({
                        id: C5H,
                        key: "track_playlist-" + e4i.data.pid
                    }, !0);
                    if (!!lT9K) lT9K.trackCount = Math.max(0, lT9K.trackCount - 1)
                }, this);
                h4l.w5B(p4t.ho8g, "itemchange", {
                    data: lT9K || {}, cmd: "del"
                });
                return null
            }, finaly: function (d4h, e4i) {
                h4l.w5B(p4t.vi2x, "listchange", {
                    key: e4i.key,
                    action: "refresh"
                })
            }, onmessage: function (cb5g) {
                l4p.bgi5n({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function (P5U, e4i) {
                return this.bwt0x.bgk5p(P5U.program).songs
            }, onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function (P5U, e4i) {
                var i4m = [];
                if (e4i.data.type == -1) {
                    if (P5U.weekData && P5U.weekData.length) {
                        e4i.data.type = 1
                    } else {
                        e4i.data.type = 0
                    }
                }
                if (e4i.data.type == 1) {
                    i4m = this.bwx0x(P5U.weekData)
                } else {
                    i4m = this.bwx0x(P5U.allData)
                }
                return i4m
            }, onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function (P5U, e4i) {
                var nc0x = [],
                    i4m = P5U.recommend || [];
                k4o.bc5h(i4m, function (bd5i, r4v) {
                    nc0x.push({
                        action: "recommendimpress",
                        json: {
                            alg: bd5i.alg,
                            scene: "user-song",
                            position: r4v,
                            id: bd5i.id
                        }
                    })
                });
                this.kG9x.UM1x(nc0x);
                e4i.limit = i4m.length;
                return i4m
            }, onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            }, format: function (m4q, e4i) {
                return m4q
            }, onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    p4t.vi2x = NEJ.C();
    b4f = p4t.vi2x.O5T(p4t.gV8N);
    b4f.cl5q = function () {
        this.cr5w();
        this.rz1x = p4t.ho8g.B5G();
        this.bwt0x = p4t.pB0x.B5G();
        this.kG9x = p4t.hJ8B.B5G()
    };
    b4f.bwx0x = function (i4m) {
        var m4q = [],
            fc7V = 0;
        k4o.bc5h(i4m, function (q4u, r4v) {
            var bd5i = l4p.BD4H(q4u.song);
            if (r4v == 0) {
                fc7V = q4u.score
            }
            bd5i.max = fc7V;
            bd5i.playCount = q4u.playCount;
            bd5i.score = q4u.score;
            m4q.push(bd5i)
        });
        return m4q
    };
    H5M.fx7q.B5G({
        element: p4t.vi2x,
        event: ["listchange"]
    })
})();
(function () {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function (f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d,
        d = (new J).d,
        e = (new J).d,
        f = (new J).d,
        g = (new J).d;
    (function () {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function () {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function () {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15],
                            l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74],
                        e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g);
                    else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g);
                    else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]);
                    else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else throw Error(b[146]);
                    else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23],
                            g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {}
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }
                        var d = [c[21], c[141], B[6]],
                            l = [],
                            f = c[139],
                            e = b[327],
                            g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function (c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]),
                                    g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null,
                            h = null,
                            d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76],
                                l = b[240],
                                g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](),
                                X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]),
                            d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]),
                                d = h[B[7]](b[354]),
                                f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [],
                            f = {};
                        d.push(p(y[b[4]], function (h) {
                            f[h.name] = a[541];
                            var d = p(h, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function (a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function (a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function (a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z) b.forEach(h, void 0);
                            else if (b.length === +b.length)
                            for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                        else
                            for (c in b)
                                if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }
                    var z = Array.prototype.forEach,
                        I = Array.prototype.map,
                        n = {
                            e: M,
                            j: !0,
                            i: !0,
                            h: !0,
                            b: !0,
                            a: !0
                        };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function () {
                        var h = [],
                            l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88],
                        d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                    case a[19]:
                        k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                    case a[16]:
                        k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                    case a[541]:
                        k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]),
                                p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }

                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta,
                            f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
                        e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262],
                                    k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                        }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0,
                        t = {
                            v: b[227]
                        },
                        l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t),
                            t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v,
                            y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y),
                            p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301],
                                z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p),
                            p = na(p, g(y)),
                            E = p = g(p),
                            I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F);
                        else {
                            var n = A.length,
                                J = a[15],
                                J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p),
                                ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null;
                            else if (null == D) ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E),
                                ja = f(xa),
                                ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null;
                        else if (G.length == a[15]) ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;)
                                    if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function () {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0,
                    Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]],
                    y = window[c[6]],
                    N = a[16],
                    T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158],
                    L = a[158],
                    ha = a[23],
                    va = a[23],
                    d = function (b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    },
                    Za = b[345],
                    S = b[299],
                    V = c[100],
                    fa = a[91],
                    ea = b[275],
                    Ta = ea.length,
                    sa = a[444],
                    ta = a[396],
                    Ya = !1,
                    Xa = !1,
                    O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56],
                    A = function (d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A),
                    pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    K = function (c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function (d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function () {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1;
                    else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function () {})();
(function () {
    var bwH0x;
    var tM2x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cqA3x = 0;
    var bwQ0x = 0;
    var bwU0x = 1;
    var bxi0x = 0;
    var bgb5g = "";
    var bxn0x = "";
    var bxp0x = "";
    var TA1x = "";
    var Tz1x = "";
    var bfY5d = "";
    var bxz0x = 0;
    var bxC0x = "";
    var Gw6q = "";
    var BX4b = 0;
    var bfR5W = ntes_get_domain();
    var bfQ5V = null;
    var cup3x = "//analytics.163.com";
    var cqy3x = function () {};

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bfR5W
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bfR5W
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bfR5W
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "",
            n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var cqv3x = 0;
    var JD6x = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * JD6x))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << JD6x) - 1;
        for (var b = 0; b < d.length * JD6x; b += JD6x) {
            c[b >> 5] |= (d.charCodeAt(b / JD6x) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = cqv3x ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }

    function ntes_get_navigation_info() {
        TA1x = "-";
        bfY5d = "-";
        Tz1x = "-";
        var c = window.self,
            b = window.screen,
            a = window.navigator;
        if (c.screen) {
            TA1x = b.width + "x" + b.height;
            bfY5d = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                TA1x = f.width + "x" + f.height
            }
        } if (a.language) {
            Tz1x = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                Tz1x = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bxz0x = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cur4v(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a, d = f || cqy3x;
        a = window[e] = new Image;
        a.onload = function () {
            window[e] = null;
            d()
        };
        a.onerror = function () {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bwH0x;
        bgb5g = escape(a || document.location);
        bxn0x = escape(m || document.title);
        bxp0x = l === true ? "" : escape(l || document.referrer);
        bxC0x = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bfQ5V == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bfQ5V = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bgb5g.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bfQ5V) {
                tM2x = fetch_visitor_hash();
                bwQ0x = 1;
                ntes_set_cookie_long("_ntes_nnid", tM2x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tM2x)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            tM2x = h.substr(0, o);
            BX4b = h.substr(o + 1, p - o - 1);
            if (BX4b == 0) {
                BX4b = (new Date).getTime();
                f = true
            }
            if (!tM2x) {
                tM2x = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", tM2x + "," + BX4b);
                ntes_set_cookie_long("_ntes_nuid", tM2x)
            }
            if (BX4b != 0 && b - BX4b > 365 * 86400 * 1e3) {
                BX4b = 0;
                ntes_set_cookie_long("_ntes_nnid", tM2x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tM2x)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        Gw6q = c("P_INFO", "P_OINFO");
        Gw6q = Gw6q ? Gw6q.substr(0, Gw6q.indexOf("|")) : "";
        bxi0x = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", tM2x, "&_nvtm=", cqA3x, "&_nvsf=", bwU0x, "&_nvfi=", bwQ0x, "&_nlag=", Tz1x, "&_nlmf=", bxz0x, "&_nres=", TA1x, "&_nscd=", bfY5d, "&_nstm=", bxi0x, "&_nurl=", bgb5g, "&_ntit=", bxn0x, "&_nref=", bxp0x, "&_nfla=", bxC0x, "&_nssn=", Gw6q, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bwU0x = 0;
        neteaseTracker.callback = null
    }
    bwH0x = "iad";
    neteaseTracker()
})();
(function () {})();
var CryptoJS = CryptoJS || function (u, p) {
    var d = {},
        l = d.lib = {},
        s = function () {},
        t = l.Base = {
            extend: function (a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function () {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            }, create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            }, init: function () {}, mixIn: function (a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            }, clone: function () {
                return this.init.prototype.extend(this)
            }
        },
        r = l.WordArray = t.extend({
            init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            }, toString: function (a) {
                return (a || v).stringify(this)
            }, concat: function (a) {
                var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                else c.push.apply(c, e);
                this.sigBytes += a;
                return this
            }, clamp: function () {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            }, clone: function () {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            }, random: function (a) {
                for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }),
        w = d.enc = {},
        v = w.Hex = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            }, parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        },
        b = w.Latin1 = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            }, parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        },
        x = w.Utf8 = {
            stringify: function (a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data")
                }
            }, parse: function (a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        },
        q = l.BufferedBlockAlgorithm = t.extend({
            reset: function () {
                this.j4n = new r.init;
                this.byn0x = 0
            }, Tr1x: function (a) {
                "string" == typeof a && (a = x.parse(a));
                this.j4n.concat(a);
                this.byn0x += a.sigBytes
            }, zN4R: function (a) {
                var c = this.j4n,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this.byk0x, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k) this.byo0x(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            }, clone: function () {
                var a = t.clone.call(this);
                a.j4n = this.j4n.clone();
                return a
            }, byk0x: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        }, reset: function () {
            q.reset.call(this);
            this.bfv5A()
        }, update: function (a) {
            this.Tr1x(a);
            this.zN4R();
            return this
        }, finalize: function (a) {
            a && this.Tr1x(a);
            return this.Ti1x()
        }, blockSize: 16,
        bfE5J: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        }, cqt3x: function (a) {
            return function (b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function () {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words,
                p = d.sigBytes,
                t = this.bv5A;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4;) d.push(l);
            return d.join("")
        }, parse: function (d) {
            var l = d.length,
                s = this.bv5A,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        }, bv5A: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bfv5A: function () {
            this.dF7y = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        }, byo0x: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dF7y.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        }, Ti1x: function () {
            var b = this.j4n,
                n = b.words,
                a = 8 * this.byn0x,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.zN4R();
            b = this.dF7y;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        }, clone: function () {
            var b = v.clone.call(this);
            b.dF7y = this.dF7y.clone();
            return b
        }
    });
    t.MD5 = v.bfE5J(r);
    t.HmacMD5 = v.cqt3x(r)
})(Math);
(function () {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function (d) {
                this.cfg = this.cfg.extend(d)
            }, compute: function (d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function (e, a) {
                return this.create(this.bfs5x, e, a)
            }, createDecryptor: function (e, a) {
                return this.create(this.cqs3x, e, a)
            }, init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.byF0x = e;
                this.J5O = a;
                this.reset()
            }, reset: function () {
                t.reset.call(this);
                this.bfv5A()
            }, process: function (e) {
                this.Tr1x(e);
                return this.zN4R()
            }, finalize: function (e) {
                e && this.Tr1x(e);
                return this.Ti1x()
            }, keySize: 4,
            ivSize: 4,
            bfs5x: 1,
            cqs3x: 2,
            bfE5J: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    }, decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        Ti1x: function () {
            return this.zN4R(!0)
        }, blockSize: 1
    });
    var b = p.mode = {},
        x = function (e, a, b) {
            var c = this.byK0x;
            c ? this.byK0x = u : c = this.byL0x;
            for (var d = 0; d < b; d++) e[a + d] ^= c[d]
        },
        q = (d.BlockCipherMode = l.extend({
            createEncryptor: function (e, a) {
                return this.Encryptor.create(e, a)
            }, createDecryptor: function (e, a) {
                return this.Decryptor.create(e, a)
            }, init: function (e, a) {
                this.byS0x = e;
                this.byK0x = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.byS0x,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.byL0x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.byS0x,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.byL0x = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        }, unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function () {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this.byF0x == this.bfs5x) var c = a.createEncryptor;
            else c = a.createDecryptor, this.byk0x = 1;
            this.eI7B = c.call(a, this, b && b.words)
        }, byo0x: function (a, b) {
            this.eI7B.processBlock(a, b)
        }, Ti1x: function () {
            var a = this.cfg.padding;
            if (this.byF0x == this.bfs5x) {
                a.pad(this.j4n, this.blockSize);
                var b = this.zN4R(!0)
            } else b = this.zN4R(!0), a.unpad(b);
            return b
        }, blockSize: 4
    });
    var n = d.CipherParams = l.extend({
            init: function (a) {
                this.mixIn(a)
            }, toString: function (a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        b = (p.format = {}).OpenSSL = {
            stringify: function (a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
            }, parse: function (a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        },
        a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            encrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            }, decrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                b = this.YZ4d(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            }, YZ4d: function (a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function (a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        },
        c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            }, decrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                c = this.YZ4d(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = d.AES = p.extend({
            bfv5A: function () {
                for (var a = this.J5O, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cqq3x = d + 6) + 1), e = this.cqo3x = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    }
                c = this.cqg3x = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
            }, encryptBlock: function (a, b) {
                this.byU0x(a, b, this.cqo3x, t, r, w, v, l)
            }, decryptBlock: function (a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.byU0x(a, c, this.cqg3x, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            }, byU0x: function (a, b, c, d, e, j, l, f) {
                for (var m = this.cqq3x, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            }, keySize: 8
        });
    u.AES = p.bfE5J(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "),
        d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}

function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);)++c;
    if (c == a.length) d = new BigInt;
    else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b = 15,
        c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48,
        c = b + 9,
        d = 97,
        e = d + 25,
        f = 65,
        g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0,
        c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt,
        c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0),
        d = c ? 1 : 0,
        e = new BigInt,
        f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)--b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a),
        c = a.digits[b],
        d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt,
        e = biHighIndex(a),
        f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
        d = biNumBits(b),
        e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);)++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;)--f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}

function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}

function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}

function biPow(a, b) {
    for (var c = bigOne, d = a;;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b;;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1),
        c = biMultiply(b, this.mu),
        d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1),
        f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1),
        h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b;;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2,
    biRadixBits = 16,
    bitsPerDigit = biRadixBits,
    biRadix = 65536,
    biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix,
    maxDigitVal = biRadix - 1,
    maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
! function () {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b),
            d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a),
            f = CryptoJS.AES.encrypt(e, c, {
                iv: d,
                mode: CryptoJS.mode.CBC
            });
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {},
            i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }
    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c4g = NEJ.P,
        dM7F = c4g("nej.g"),
        v5A = c4g("nej.j"),
        k4o = c4g("nej.u"),
        Jy6s = c4g("nm.x.ek");
    Jy6s.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Jy6s.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function () {
    var c4g = NEJ.P,
        dM7F = c4g("nej.g"),
        v5A = c4g("nej.j"),
        k4o = c4g("nej.u"),
        Jy6s = c4g("nm.x.ek"),
        l4p = c4g("nm.x");
    if (v5A.bp5u.redefine) return;
    window.GEnc = true;
    var bfl5q = function (cqf3x) {
        var m4q = [];
        k4o.bc5h(cqf3x, function (cqe3x) {
            m4q.push(Jy6s.emj[cqe3x])
        });
        return m4q.join("")
    };
    var cqb2x = v5A.bp5u;
    v5A.bp5u = function (V5a, e4i) {
        var j4n = {},
            e4i = NEJ.X({}, e4i),
            lo9f = V5a.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(V5a) && !(e4i.headers && e4i.headers[dM7F.wW3x] == dM7F.DF5K) && !e4i.noEnc) {
            if (lo9f != -1) {
                j4n = k4o.hp8h(V5a.substring(lo9f + 1));
                V5a = V5a.substring(0, lo9f)
            }
            if (e4i.query) {
                j4n = NEJ.X(j4n, k4o.fn7g(e4i.query) ? k4o.hp8h(e4i.query) : e4i.query)
            }
            if (e4i.data) {
                j4n = NEJ.X(j4n, k4o.fn7g(e4i.data) ? k4o.hp8h(e4i.data) : e4i.data)
            }
            j4n["csrf_token"] = v5A.gF8x("__csrf");
            V5a = V5a.replace("api", "weapi");
            e4i.method = "post";
            delete e4i.query;
            var bzm0x = window.asrsea(JSON.stringify(j4n), bfl5q(["流泪", "强"]), bfl5q(Jy6s.md), bfl5q(["爱心", "女孩", "惊恐", "大笑"]));
            e4i.data = k4o.cY6S({
                params: bzm0x.encText,
                encSecKey: bzm0x.encSecKey
            })
        }
        cqb2x(V5a, e4i)
    };
    v5A.bp5u.redefine = true
})();
(function () {
    window.setTimeout(function () {
        var bp = document.createElement("script");
        var curProtocol = window.location.protocol.split(":")[0];
        if (curProtocol === "https") {
            bp.src = "https://zz.bdstatic.com/linksubmit/push.js"
        } else {
            bp.src = "http://push.zhanzhang.baidu.com/push.js"
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s)
    }, 3e3)
})();
(function () {})();
(function () {})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        cZ6T = c4g("nej.p"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v5A = c4g("nej.j"),
        dj6d = c4g("nm.u"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        n4r = c4g("nm.l"),
        bff5k = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        j4n = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        },
        cqa2x = function () {
            if (h4l && h4l.w5B) {
                h4l.dispatchEventalias = h4l.w5B
            }
        };
    cqa2x();
    l4p.bfe5j = function (bI5N) {
        if (!bI5N || bI5N.copyrightId === undefined || !!bI5N.program) return false;
        if (window.GAbroad) {
            bI5N.fee = 0;
            return true
        }
        if (bI5N.status < 0) return true;
        var Jv6p;
        if (typeof GCopyrights !== "undefined") Jv6p = GCopyrights;
        try {
            if (!Jv6p && !!top.GCopyrights) Jv6p = top.GCopyrights
        } catch (e) {}
        if (Jv6p) {
            var r4v = k4o.cT6N(Jv6p, bI5N.copyrightId);
            if (r4v >= 0) return true
        }
        return false
    };
    l4p.beT5Y = function () {
        var zF3x = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            vf2x = {
                2: "artist",
                13: "playlist",
                17: "dj",
                19: "album",
                18: "song",
                31: "toplist",
                32: "searchsong",
                33: "searchlyric",
                34: "event",
                70: "djradio",
                24: "day",
                50: "record"
            },
            cpZ2x = {
                song: "单曲",
                album: "专辑",
                artist: "歌手",
                playlist: "歌单",
                dj: "电台节目",
                searchsong: "单曲搜索",
                searchlyric: "歌词搜索",
                toplist: "榜单",
                event: "动态",
                djradio: "电台",
                day: "每日歌曲推荐",
                record: "听歌排行榜"
            };
        var cpW2x = function (J5O, j4n, Ro0x) {
            switch (J5O) {
            case "event":
                j4n = j4n.split("|");
                return "/event?id=" + j4n[0] + "&uid=" + j4n[1];
            case "searchsong":
            case "searchlyric":
                var t4x = J5O == "searchsong" ? 1 : 1006;
                return "/search/m/?s=" + encodeURIComponent(j4n) + "&type=" + t4x;
            case "toplist":
                return "/discover/toplist?id=" + j4n + "&_hash=songlist-" + Ro0x;
            case "day":
                return "/discover/recommend/taste" + "?_hash=songlist-" + Ro0x;;
            case "record":
                j4n = j4n.split("|");
                return "/user/songs/rank?id=" + j4n[0] + "&cat=" + j4n[1];
                break;
            default:
                return "/" + J5O + "?id=" + j4n + "&_hash=songlist-" + Ro0x
            }
        };
        return function (dI7B, Ro0x) {
            if (!dI7B) return null;
            var GL6F = dI7B.fid || (dI7B.type != 18 ? dI7B.type : null),
                bed5i = dI7B.fdata || dI7B.rid,
                bzY1x = dI7B.page || dI7B.fhref;
            var J5O = vf2x[GL6F];
            if (!J5O) {
                var xK3x = (bzY1x || "").match(zF3x);
                if (xK3x) J5O = xK3x[1]
            }
            if (!J5O) return null;
            return {
                title: cpZ2x[J5O],
                link: !vf2x[GL6F] ? bzY1x : cpW2x(J5O, bed5i, Ro0x),
                fid: GL6F,
                fdata: bed5i
            }
        }
    }();
    l4p.bec5h = function (ku9l) {
        var cX6R = ku9l;
        if (typeof GUser !== "undefined" && GUser.userId > 0) cX6R = GUser;
        return cX6R
    };
    l4p.gW8O = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l4p.Gr6l = function () {
        var zF3x = /#(.*?)$/;
        return function (gi7b) {
            var iK8C = gi7b === false ? location : top.location;
            return zF3x.test(iK8C.href) ? RegExp.$1 : ""
        }
    }();
    l4p.zD3x = function () {
        var zB3x = a4e.cQ6K("audio"),
            cpU2x = zB3x.canPlayType && zB3x.canPlayType("audio/mpeg");
        if (cpU2x) return 2;
        var cpT2x = l4p.bdD5I().supported;
        if (cpT2x) return 1;
        return 0
    };
    l4p.bdD5I = function () {
        var fL7E, bdr5w = !1,
            bdl5q = "";
        if (cZ6T.dd6X.browser == "ie") {
            try {
                fL7E = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                fL7E = null
            }
            if (fL7E) {
                bdr5w = !0;
                bdl5q = fL7E.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                fL7E = navigator.plugins["Shockwave Flash"];
                if (fL7E) {
                    bdr5w = !0;
                    bdl5q = fL7E.description
                }
            }
        }
        return {
            supported: bdr5w,
            version: bdl5q
        }
    };
    l4p.ra1x = function () {
        return "网易云音乐"
    };
    l4p.cpM2x = function () {
        return j4n
    };
    l4p.bBv1x = function (cL6F) {
        var C5H = j4n[cL6F];
        return C5H == null ? "" : bff5k.replace("{ID}", C5H)
    };
    l4p.vL2x = function (bl5q, dD7w, Gl5q) {
        if (!bl5q) return "";
        if (!!Gl5q) {
            bl5q = l4p.cpL2x(bl5q)
        }
        return l4p.Sl0x(l4p.cpK2x(bl5q, dD7w))
    };
    l4p.bcZ5e = function () {
        var QH0x = {
                AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
                LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
                ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
                ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
                LING: /\n/g,
                BLANK: /\s/g,
                MLINE: /([ \f\r\t\v]*\n){2,}/g
            },
            bcX5c = {
                LINK: '<a href="${url}" class="${klass}">${value}</a>',
                AT: '<a href="${url}" class="${klass}">@${value}</a>',
                ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
            },
            cpE2x = {
                r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                " ": "&nbsp;",
                '"': "&quot;",
                "'": "&#39;",
                "&lt;": "&lt;",
                "&gt;": "&gt;"
            },
            cpD2x = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cpu2x = function (dm6g, bcL5Q) {
            dm6g = Gh5m(dm6g);
            if (!!bcL5Q) {
                dm6g = dm6g.replace(QH0x.MLINE, "\n\n").replace(QH0x.LING, "</br>")
            }
            dm6g = l4p.Sl0x(dm6g);
            return dm6g
        };
        var Gh5m = function (bl5q) {
            return k4o.AH4L(cpE2x, bl5q)
        };
        return function (dm6g, e4i, ea7T) {
            e4i = e4i || {};
            ea7T = ea7T || {};
            ea7T.actHash = {};
            var cps2x = !!e4i.parseLink,
                cpr2x = !!e4i.parseAct,
                cpq2x = e4i.linkTpl || bcX5c.LINK,
                cpo2x = e4i.atTpl || bcX5c.AT,
                cpn2x = e4i.actTpl || bcX5c.ACT,
                bcL5Q = !!e4i.keepSpace,
                bcH5M = e4i.linkKlass || "s-fc7";
            cuw4A = e4i.actBiJson || "";
            if (!dm6g) return "";
            dm6g = dm6g.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var kF9w = cpD2x[cps2x + 2 * cpr2x],
                cO6I = QH0x[kF9w],
                bs5x = null,
                lh9Y = null,
                gx8p = 0,
                cux4B = "",
                cuy4C = "";
            var zw3x = [];
            cO6I.lastIndex = 0;
            while (bs5x = cO6I.exec(dm6g)) {
                var ft7m = {
                    html: "",
                    before: bs5x.index - 1,
                    after: bs5x.index + bs5x[0].length
                };
                if (bs5x[1]) {
                    var lh9Y = bs5x[2].replace(/[^\x00-\xff]/g, "**");
                    if (lh9Y.length < 4 || lh9Y.length > 32) {} else {
                        var Qj0x = a4e.ek7d(cpo2x);
                        ft7m.html = a4e.bU5Z(Qj0x, {
                            value: Gh5m(bs5x[2]),
                            url: encodeURI("/user/home?nickname=" + bs5x[2]),
                            klass: bcH5M
                        });
                        zw3x.push(ft7m)
                    }
                } else if (bs5x.length > 8 && bs5x[4]) {
                    var Qj0x = a4e.ek7d(cpq2x);
                    ft7m.html = a4e.bU5Z(Qj0x, {
                        value: Gh5m(bs5x[4]),
                        url: encodeURI(bs5x[4]),
                        klass: bcH5M
                    });
                    zw3x.push(ft7m)
                } else {
                    var bCU1x = kF9w == "ACT_NOLINK" ? 4 : 9;
                    var Qj0x = a4e.ek7d(cpn2x);
                    ft7m.html = a4e.bU5Z(Qj0x, {
                        value: Gh5m(bs5x[bCU1x]),
                        klass: bcH5M
                    });
                    zw3x.push(ft7m);
                    ea7T.actHash[bs5x[bCU1x].slice(1, -1)] = true
                }
            }
            var cpc2x = zw3x.length,
                ku9l = {
                    before: dm6g.length - 1,
                    after: 0
                },
                bcb4f = "";
            for (var i = 0; i <= cpc2x; i++) {
                var iB8t, gD8v;
                iB8t = (zw3x[i - 1] || ku9l).after;
                gD8v = (zw3x[i] || ku9l).before;
                if (gD8v >= iB8t && iB8t >= 0 && gD8v <= dm6g.length - 1) {
                    bcb4f += cpu2x(dm6g.substring(iB8t, gD8v + 1), bcL5Q)
                }
                if (zw3x[i]) {
                    bcb4f += zw3x[i].html
                }
            }
            return bcb4f
        }
    }();
    l4p.cpL2x = function () {
        var cO6I = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bl5q) {
            return (bl5q || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cO6I, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l4p.cpK2x = function () {
        var cO6I = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eF7y = function (lh9Y, dD7w) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(lh9Y) + '" class="' + (dD7w || "") + '">@' + lh9Y + "</a>"
        };
        return function (bl5q, dD7w) {
            return (bl5q || "").replace(cO6I, function ($0, $1) {
                return eF7y($1, dD7w)
            })
        }
    }();
    l4p.Sl0x = function () {
        var cO6I = /\[(.*?)\]/g;
        return function (bl5q) {
            return (bl5q || "").replace(cO6I, function ($1, $2) {
                var V5a = l4p.bBv1x($2);
                return !V5a ? $1 : '<img src="' + V5a + '"/>'
            })
        }
    }();
    l4p.yj3x = function (E5J, dD7w) {
        a4e.bA5F(E5J, dD7w) ? a4e.x5C(E5J, dD7w) : a4e.z5E(E5J, dD7w)
    };
    l4p.Gc5h = function (cD6x, jG9x) {
        cD6x = a4e.y5D(cD6x);
        jG9x = a4e.y5D(jG9x);
        if (!cD6x || !jG9x) return !1;
        for (jG9x = jG9x.parentNode; !!jG9x && jG9x != cD6x; jG9x = jG9x.parentNode);
        return jG9x == cD6x
    };
    l4p.kv9m = function () {
        var bDz2x = function (gl7e) {
            return (gl7e < 10 ? "0" : "") + gl7e
        };
        return function (jO9F) {
            jO9F = parseInt(jO9F) || 0;
            if (!jO9F) return "00:00";
            var PZ9Q = Math.floor(jO9F % 60),
                cpb2x = Math.floor(jO9F / 60);
            return bDz2x(cpb2x) + ":" + bDz2x(PZ9Q)
        }
    }();
    l4p.wN3x = function (fo7h, um2x) {
        if (!fo7h || fo7h.length == 0) return "";
        um2x = um2x || "/";
        var bs5x = [];
        for (var i = fo7h.length - 1; i >= 0; i--) {
            bs5x.unshift(fo7h[i].name)
        }
        return bs5x.join(um2x)
    };
    l4p.rj1x = function () {
        var PX9O = function (hh8Z, dD7w, cD6x) {
            if (!hh8Z || !hh8Z.name) return "";
            if (!hh8Z.id) return '<span class="' + dD7w + '">' + k4o.dV7O(hh8Z.name) + "</span>";
            return "<a" + (cD6x ? ' target="_blank"' : "") + ' class="' + dD7w + '" href="/artist?id=' + hh8Z.id + '" hidefocus="true">' + k4o.dV7O(hh8Z.name) + "</a>"
        };
        return function (fo7h, T5Y, um2x, cD6x, bEk2x) {
            if (!fo7h || !fo7h.length) return "";
            um2x = um2x || "/";
            T5Y = T5Y || "";
            Gb5g = "";
            var eG7z = [];
            for (var i = 0, i4m = [], ri1x = [], fg7Z; i < fo7h.length; ++i) {
                eG7z.push(fo7h[i].name);
                if (!fo7h[i] || fo7h[i].id <= 0) {
                    ri1x.push(fo7h[i]);
                    continue
                }
                if (k4o.ga7T(T5Y)) {
                    fg7Z = T5Y(fo7h[i])
                } else {
                    fg7Z = PX9O(fo7h[i], T5Y, cD6x)
                } if (fg7Z && bEk2x && fo7h[i].tns && fo7h[i].tns.length > 0) {
                    Gb5g = k4o.dV7O(fo7h[i].tns[0]);
                    fg7Z += '<span class="s-fc8" title="' + Gb5g + '"> - (' + Gb5g + ")</span>"
                }!!fg7Z && i4m.push(fg7Z)
            }
            for (var i = 0, fg7Z; i < ri1x.length; ++i) {
                if (k4o.ga7T(T5Y)) {
                    fg7Z = T5Y(ri1x[i])
                } else {
                    fg7Z = PX9O(ri1x[i], T5Y, cD6x)
                } if (fg7Z && bEk2x && ri1x[i].tns && ri1x[i].tns.length > 0) {
                    Gb5g = k4o.dV7O(ri1x[i].tns[0]);
                    fg7Z += '<span class="s-fc8" title="' + Gb5g + '"> - (' + Gb5g + ")</span>"
                }!!fg7Z && i4m.push(fg7Z)
            }
            return '<span title="' + eG7z.join(um2x) + '">' + i4m.join(um2x) + "</span>"
        }
    }();
    l4p.xk3x = function (eU7N, oy0x) {
        oy0x = oy0x || "86";
        return !!eU7N && (oy0x == "86" ? /^\d{11}$/ : /^\d+$/).test(eU7N)
    };
    l4p.cuz4D = function (eU7N) {
        if (!l4p.xk3x(eU7N)) return eU7N;
        return eU7N.substring(0, 3) + "****" + eU7N.substr(7)
    };
    l4p.iP8H = function () {
        var cO6I = /^\s+$/g;
        return function (iD8v) {
            return !iD8v || cO6I.test(iD8v)
        }
    }();
    l4p.PQ9H = function () {
        var bbF4J = /[^\x00-\xfff]/g;
        return function (iD8v) {
            var coW2x = iD8v.match(bbF4J) || [],
                du6o = coW2x.length;
            return iD8v.length + du6o
        }
    }();
    l4p.AM4Q = function () {
        var bbF4J = /[^\x00-\xfff]/;
        return function (iD8v, gj7c) {
            for (var i = 0, len = iD8v.length; i < len && gj7c > 0; i++) {
                if (bbF4J.test(iD8v.charAt(i))) {
                    gj7c -= 2;
                    if (gj7c < 0) {
                        break
                    }
                } else {
                    gj7c -= 1
                }
            }
            return iD8v.substring(0, i)
        }
    }();
    l4p.zq3x = function (iD8v, gj7c, Ll7e) {
        gj7c = gj7c || 10;
        Ll7e = Ll7e || nej.p.dd6X.engine == "trident" && parseInt(nej.p.dd6X.release) < 5;
        if (Ll7e && l4p.PQ9H(iD8v) > gj7c) {
            return l4p.AM4Q(iD8v, gj7c) + "..."
        } else {
            return iD8v
        }
    };
    l4p.bFq2x = function (f4j) {
        return f4j === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f4j.type || f4j.href || ~f4j.tabIndex)
    };
    l4p.coV2x = function (d4h, cD6x) {
        if (!d4h || !cD6x) return !0;
        var f4j, t4x = d4h.type.toLowerCase();
        if (t4x == "mouseout") {
            f4j = d4h.relatedTarget || d4h.toElement
        } else if (t4x == "mouseover") {
            f4j = d4h.relatedTarget || d4h.fromElement
        }
        return !f4j || f4j !== cD6x && !l4p.Gc5h(cD6x, f4j)
    };
    l4p.rZ1x = function () {
        Q5V = {};
        return function (f4j, dE7x) {
            var C5H = a4e.kr9i(f4j),
                J5O = "hover-" + C5H;
            if (!dE7x || !C5H || !!Q5V[J5O]) return;
            Q5V[J5O] = !0;
            h4l.s4w(C5H, "mouseover", function () {
                var bbD4H = a4e.I5N(f4j, "hshow") || [];
                var bbB4F = a4e.I5N(f4j, "icn-dislike") || [];
                a4e.z5E(C5H, "z-hover");
                a4e.Y5d(bbD4H[0], "display", "block");
                a4e.Y5d(bbB4F[0], "display", "block")
            });
            h4l.s4w(C5H, "mouseout", function () {
                var bbD4H = a4e.I5N(f4j, "hshow") || [];
                var bbB4F = a4e.I5N(f4j, "icn-dislike") || [];
                a4e.x5C(C5H, "z-hover");
                a4e.Y5d(bbD4H[0], "display", "none");
                a4e.Y5d(bbB4F[0], "display", "none")
            })
        }
    }();
    l4p.bFx2x = function () {
        var bv5A = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function (iD8v) {
            return k4o.AH4L(bv5A, iD8v)
        }
    }();
    l4p.xE3x = function (bx5C) {
        if (k4o.Iz6t(bx5C)) bx5C = bx5C.getTime();
        var fK7D = new Date,
            mC9t = fK7D.getTime() - bx5C;
        if (mC9t <= 6e4) return "刚刚";
        var qJ1x = fK7D.getHours() * 36e5 + fK7D.getMinutes() * 6e4 + fK7D.getSeconds() * 1e3;
        if (mC9t <= qJ1x) {
            if (mC9t < 36e5) {
                var PH9y = Math.floor(mC9t / 6e4);
                return PH9y + "分钟前"
            }
            return k4o.iH8z(bx5C, "HH:mm")
        } else {
            if (mC9t < qJ1x + 864e5) {
                return "昨天" + k4o.iH8z(bx5C, "HH:mm")
            } else {
                var gm7f = fK7D.getFullYear(),
                    bby4C = new Date(gm7f, 0, 1);
                var qJ1x = fK7D.getTime() - bby4C.getTime();
                if (mC9t < qJ1x) {
                    return k4o.iH8z(bx5C, "M月d日 HH:mm")
                }
                return k4o.iH8z(bx5C, "yyyy年M月d日")
            }
        }
    };
    l4p.coU2x = function (bx5C) {
        if (k4o.Iz6t(bx5C)) bx5C = bx5C.getTime();
        var fK7D = new Date,
            mC9t = fK7D.getTime() - bx5C;
        var qJ1x = fK7D.getHours() * 36e5 + fK7D.getMinutes() * 6e4 + fK7D.getSeconds() * 1e3;
        if (mC9t <= qJ1x) {
            return "今天" + k4o.iH8z(bx5C, "HH:mm")
        } else {
            if (mC9t < qJ1x + 864e5) {
                return "昨天" + k4o.iH8z(bx5C, "HH:mm")
            } else {
                return k4o.iH8z(bx5C, "yy-MM-dd HH:mm")
            }
        }
    };
    l4p.coT2x = function (bx5C) {
        if (k4o.Iz6t(bx5C)) bx5C = bx5C.getTime();
        var fK7D = new Date,
            mC9t = fK7D.getTime() - bx5C;
        if (mC9t <= 6e4) return "刚刚";
        var qJ1x = fK7D.getHours() * 36e5 + fK7D.getMinutes() * 6e4 + fK7D.getSeconds() * 1e3;
        if (mC9t <= qJ1x) {
            if (mC9t < 36e5) {
                var PH9y = Math.floor(mC9t / 6e4);
                return PH9y + "分钟前"
            }
            return k4o.iH8z(bx5C, "HH:mm")
        } else {
            if (mC9t < qJ1x + 864e5) {
                return "昨天" + k4o.iH8z(bx5C, "HH:mm")
            } else if (mC9t < qJ1x + 864e5 * 6) {
                var gm7f = fK7D.getFullYear(),
                    bby4C = new Date(gm7f, 0, 1);
                var qJ1x = fK7D.getTime() - bby4C.getTime();
                if (mC9t < qJ1x) {
                    return k4o.iH8z(bx5C, "M月d日 HH:mm")
                }
                return k4o.iH8z(bx5C, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l4p.ZN4R = function () {
        var cO6I = /\{(.*?)\}/gi;
        return function (pL0x, j4n) {
            return (pL0x || "").replace(cO6I, function ($1, $2) {
                var A5F = j4n[$2];
                return A5F == null ? $1 : A5F
            })
        }
    }();
    l4p.eP7I = function () {
        var bf5k = Array.prototype.slice.call(arguments, 0),
            pL0x = bf5k.shift();
        if (pL0x) {
            return pL0x.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bf5k.length ? bf5k[$2] : $1
            })
        }
        return ""
    };
    l4p.Ga5f = function (i4m, dD7w, kR9I) {
        return "";
        kR9I = kR9I || " - ";
        if (i4m && i4m.length) {
            return kR9I + (!!dD7w ? '<span class="' + dD7w + '">' + i4m[0] + "</span>" : i4m[0])
        }
        return ""
    };
    l4p.bGC2x = function () {
        if (window.getSelection) {
            var qP1x = window.getSelection();
            if (qP1x && qP1x.focusNode && qP1x.focusNode.tagName) {
                var zl3x = a4e.cP6J(qP1x.focusNode);
                for (var i = 0, vE2x; i < zl3x.length; ++i) {
                    vE2x = zl3x[i].tagName;
                    if (!vE2x) continue;
                    vE2x = vE2x.toLowerCase();
                    if (vE2x == "textarea" || vE2x == "input") return !0
                }
            }
        } else if (document.selection) {
            var cJ6D = document.selection.createRange();
            if (cJ6D) {
                var f4j = cJ6D.parentElement();
                if (f4j && f4j.tagName) {
                    var vE2x = f4j.tagName.toLowerCase();
                    if (vE2x == "textarea" || vE2x == "input") return !0
                }
            }
        }
        return !1
    };
    l4p.xP3x = function (fp7i) {
        if (/^[A-Z]\:\\/i.test(fp7i)) {
            fp7i = fp7i.split("\\")
        } else {
            fp7i = fp7i.split("/")
        }
        fp7i = fp7i[fp7i.length - 1];
        return fp7i
    };
    l4p.coS2x = function () {
        var AF4J = [13, 17, 34, 19, 18, 21];
        return function (C5H) {
            var bs5x = (C5H || "").split("_");
            return {
                type: AF4J[bs5x[2]] || -1,
                id: bs5x[3] || ""
            }
        }
    }();
    l4p.bHL3x = function (fL7E) {
        if (!fL7E) {
            return true
        }
        for (var k in fL7E) {
            return false
        }
        return true
    };
    l4p.bbn4r = function (cX6R) {
        if (!cX6R) {
            return ""
        }
        if (4 == cX6R.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (cX6R.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (cX6R.expertTags && cX6R.expertTags.length || !l4p.bHL3x(cX6R.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l4p.PD9u = function (hL8D) {
        if (!hL8D) return "";
        var du6o = hL8D.length,
            ht8l = [];
        ht8l[0] = du6o / 3 | 0;
        ht8l[1] = ht8l[0] + ((du6o - ht8l[0]) / 2 | 0);
        return hL8D.substring(0, ht8l[0]) + hL8D.substring(ht8l[0], ht8l[1]).replace(/\d/g, "*") + hL8D.substring(ht8l[1], du6o)
    };
    l4p.cuB4F = function (r4v, cq5v) {
        return (r4v % cq5v + cq5v) % cq5v
    };
    l4p.bIj3x = function () {
        var AF4J = {
            0: "playlist",
            1: "program",
            2: "event",
            3: "album",
            4: "song",
            5: "mv",
            6: "topic",
            62: "video"
        };
        return function (C5H) {
            var bs5x = (C5H || "").split("_"),
                m4q = {
                    type: AF4J[bs5x[2]] || -1,
                    id: bs5x[3] || ""
                };
            if (m4q.type == "event") {
                m4q.uid = bs5x[4] || "";
                return "/" + m4q.type + "?id=" + m4q.id + "&uid=" + m4q.uid
            }
            return "/" + m4q.type + "?id=" + m4q.id
        }
    }();
    l4p.bIm3x = function () {
        var AF4J = {
            0: "歌单",
            1: "电台节目",
            2: "动态",
            3: "专辑",
            4: "单曲",
            5: "MV",
            6: "专栏文章",
            62: "视频"
        };
        return function (C5H) {
            var bs5x = (C5H || "").split("_");
            return AF4J[bs5x[2]] || "资源"
        }
    }();
    l4p.coL2x = function (bw5B) {
        var qs = bw5B.length > 0 ? bw5B.substring(1) : "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l4p.bIx3x = function (sn1x, PB9s) {
        var Zw4A = 0,
            dZ7S = new Array;
        k4o.bc5h(sn1x, function (V5a, r4v) {
            var df6Z = a4e.cQ6K("img");
            df6Z.src = V5a;
            h4l.s4w(df6Z, "load", function (r4v, d4h) {
                dZ7S[r4v] = 1;
                Zw4A++;
                if (Zw4A == sn1x.length) PB9s(sn1x, dZ7S)
            }.g4k(this, r4v));
            h4l.s4w(df6Z, "error", function (d4h, r4v) {
                dZ7S[r4v] = 0;
                Zw4A++;
                if (Zw4A == sn1x.length) PB9s(sn1x, dZ7S)
            }.g4k(this, r4v))
        })
    };
    l4p.Zo4s = function (i4m, dC6w) {
        var m4q = [];
        k4o.bc5h(i4m, function (q4u, r4v, ig8Y) {
            m4q.push(dC6w(q4u, r4v, ig8Y))
        });
        return m4q
    };
    l4p.SD0x = function (i4m, dC6w, ig8Y) {
        var m4q = [];
        k4o.bc5h(i4m, function (q4u, r4v) {
            if (dC6w.call(ig8Y, q4u, r4v, i4m)) {
                m4q.push(q4u)
            }
        });
        return m4q
    };
    l4p.coF2x = function (bl5q) {
        return k4o.dV7O((bl5q || "").replace(/\s{2,}/g, " ").trim())
    };
    l4p.baF4J = function (bd5i) {
        if (bd5i.transNames && bd5i.transNames.length) {
            return bd5i.transNames[0]
        } else if (bd5i.alias && bd5i.alias.length) {
            return bd5i.alias[0]
        }
    };
    l4p.baD4H = function (JK7D) {
        if (JK7D) {
            return JK7D.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l4p.baC4G = function (f4j) {
        var f4j = a4e.y5D(f4j),
            cL6F = f4j && f4j.getElementsByTagName("textarea")[0],
            J5O = a4e.u5z(f4j, "key"),
            baw4A = a4e.u5z(f4j, "simple") == "1",
            bJx3x = p4t.vi2x.fX7Q();
        if (!(f4j && cL6F && J5O)) return;
        if (baw4A) {
            bJx3x.sa1x(J5O, l4p.BD4H(JSON.parse(cL6F.value)))
        } else {
            bJx3x.sa1x(J5O, JSON.parse(cL6F.value || cL6F.defaultValue))
        }
        f4j.innerHTML = "";
        return J5O
    };
    l4p.coA2x = function (ol0x) {
        if (!ol0x.onbeforelistload) {
            ol0x.onbeforelistload = function (d4h) {
                d4h.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!ol0x.onemptylist) {
            ol0x.onemptylist = function (d4h) {
                d4h.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (ol0x.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return ol0x
    };
    l4p.BD4H = function (hw8o) {
        if (k4o.ep7i(hw8o)) {
            var ea7T = [];
            k4o.bc5h(hw8o, function (baw4A) {
                ea7T.push(bJK3x(baw4A))
            });
            return ea7T
        } else {
            return bJK3x(hw8o)
        }

        function bJK3x(hw8o) {
            if (!hw8o) return null;
            var ea7T = {
                album: hw8o.al,
                alias: hw8o.alia || hw8o.ala || [],
                artists: hw8o.ar || [],
                commentThreadId: "R_SO_4_" + hw8o.id,
                copyrightId: hw8o.cp || 0,
                duration: hw8o.dt || 0,
                id: hw8o.id,
                mvid: hw8o.mv || 0,
                name: hw8o.name || "",
                cd: hw8o.cd,
                position: hw8o.no || 0,
                ringtone: hw8o.rt,
                rtUrl: hw8o.rtUrl,
                status: hw8o.st || 0,
                pstatus: hw8o.pst || 0,
                fee: hw8o.fee || 0,
                version: hw8o.v || 0,
                eq: hw8o.eq,
                songType: hw8o.t || 0,
                mst: hw8o.mst,
                score: hw8o.pop || 0,
                ftype: hw8o.ftype,
                rtUrls: hw8o.rtUrls,
                transNames: hw8o.tns,
                privilege: hw8o.privilege,
                lyrics: hw8o.lyrics
            };
            return ea7T
        }
    };
    l4p.cuC4G = function () {
        var f4j = a4e.mV0x('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f4j);
        h4l.s4w(f4j, "click", function (d4h) {
            h4l.bh5m(d4h);
            a4e.cK6E(f4j)
        })
    };
    l4p.ko9f = function (cx5C) {
        if (cx5C < 1e5) {
            return cx5C
        } else {
            return Math.floor(cx5C / 1e4) + "万"
        }
    };
    l4p.tl1x = function (cx5C, cL6F) {
        return "<i>" + (cx5C ? "(" + cx5C + ")" : cL6F) + "</i>"
    };
    l4p.bKl3x = function (t4x, hf8X) {
        var e4i = {};
        if (!k4o.kI9z(hf8X)) {
            return e4i
        }
        switch (parseInt(t4x)) {
        case 17:
            e4i.title = hf8X.name;
            e4i.author = (hf8X.radio || []).name;
            e4i.picUrl = hf8X.coverUrl;
            e4i.category = hf8X.radio.category;
            break;
        case 19:
            e4i.title = hf8X.name;
            e4i.author = l4p.wN3x(hf8X.artists);
            e4i.authors = l4p.wN3x(hf8X.artists, " / ");
            e4i.picUrl = hf8X.picUrl;
            break;
        case 13:
            e4i.title = hf8X.name;
            e4i.author = (hf8X.creator || []).nickname;
            e4i.picUrl = hf8X.coverImgUrl;
            break;
        case 18:
            e4i.title = hf8X.name;
            e4i.author = l4p.wN3x(hf8X.artists);
            e4i.picUrl = (hf8X.album || []).picUrl;
            break;
        case 20:
            e4i.title = hf8X.name;
            e4i.author = "";
            e4i.picUrl = hf8X.img1v1Url;
            break;
        case 21:
            e4i.title = hf8X.name;
            e4i.author = hf8X.artistName;
            e4i.authors = l4p.wN3x(hf8X.artists, " / ");
            e4i.picUrl = hf8X.newCover || hf8X.cover;
            break;
        case 70:
            e4i.title = hf8X.name;
            e4i.author = (hf8X.dj || []).nickname;
            e4i.picUrl = hf8X.picUrl;
            e4i.category = hf8X.category;
            break;
        default:
            break
        }
        return e4i
    };
    l4p.bKn3x = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l4p.coy2x = function (eF7y, uy2x, e4i) {
        var bL5Q, bf5k, m4q;
        var jo8g = null;
        var Pi9Z = 0;
        if (!e4i) e4i = {};
        var Zg4k = function () {
            Pi9Z = e4i.leading === false ? 0 : +(new Date);
            jo8g = null;
            m4q = eF7y.apply(bL5Q, bf5k);
            if (!jo8g) bL5Q = bf5k = null
        };
        return function () {
            var fK7D = +(new Date);
            if (!Pi9Z && e4i.leading === false) Pi9Z = fK7D;
            var brk8c = uy2x - (fK7D - Pi9Z);
            bL5Q = this;
            bf5k = arguments;
            if (brk8c <= 0 || brk8c > uy2x) {
                if (jo8g) {
                    clearTimeout(jo8g);
                    jo8g = null
                }
                Pi9Z = fK7D;
                m4q = eF7y.apply(bL5Q, bf5k);
                if (!jo8g) bL5Q = bf5k = null
            } else if (!jo8g && e4i.trailing !== false) {
                jo8g = setTimeout(Zg4k, brk8c)
            }
            return m4q
        }
    };
    l4p.bKX4b = function (eF7y, uy2x, qR1x) {
        var jo8g, bf5k, bL5Q, Pg9X, m4q;
        var Zg4k = function () {
            var gx8p = new Date - Pg9X;
            if (gx8p < uy2x && gx8p >= 0) {
                jo8g = setTimeout(Zg4k, uy2x - gx8p)
            } else {
                jo8g = null;
                if (!qR1x) {
                    m4q = eF7y.apply(bL5Q, bf5k);
                    if (!jo8g) bL5Q = bf5k = null
                }
            }
        };
        return function () {
            bL5Q = this;
            bf5k = arguments;
            Pg9X = new Date;
            var bra8S = qR1x && !jo8g;
            if (!jo8g) jo8g = setTimeout(Zg4k, uy2x);
            if (bra8S) {
                m4q = eF7y.apply(bL5Q, bf5k);
                bL5Q = bf5k = null
            }
            return m4q
        }
    };
    l4p.OW9N = function (f4j, hm8e) {
        if (f4j) {
            var f4j = f4j.firstElementChild;
            if (f4j) {
                f4j.firstElementChild && (f4j = f4j.firstElementChild);
                f4j.setAttribute("xlink:href", "/style/pc/svg/" + hm8e)
            }
        }
    };
    l4p.bLt4x = function (eG7z) {
        if (!eG7z || !eG7z.length) {
            return
        }
        eG7z = /^#(.+?)#$/.exec(eG7z)[1];
        eG7z = eG7z.replace(/\s/g, " ");
        v5A.bp5u("/api/act/detail", {
            type: "json",
            method: "post",
            data: k4o.cY6S({
                actname: eG7z
            }),
            onload: function (P5U) {
                if (!P5U || P5U.code != 200 || !P5U.act) {
                    n4r.Z5e.N5S({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + P5U.act.actId)
                }
            }, onerror: function (bP5U) {
                n4r.Z5e.N5S({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    };
    l4p.bpY8Q = function (OK9B, wz2x) {
        if (!OK9B || !wz2x) return false;
        if (OK9B == wz2x) return true;
        return l4p.bpY8Q(OK9B, wz2x.parentNode)
    };
    a4e.fj7c = function (bB5G, lf9W) {
        if (!bB5G) return null;
        if (!lf9W) return bB5G.firstChild;
        return a4e.I5N(bB5G, lf9W)[0]
    };
    l4p.cox2x = function (iD8v) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(iD8v)
    };
    l4p.cuD4H = function (tS2x) {
        if (!tS2x) {
            return "0b"
        }
        var cov2x = ["Bytes", "KB", "MB", "GB"];
        var be5j = Math.floor(Math.log(tS2x) / Math.log(1024));
        return (tS2x / Math.pow(1024, Math.floor(be5j))).toFixed(be5j == 1 ? 0 : 1) + cov2x[be5j]
    };
    l4p.bLO4S = function (dm6g, fc7V, cos2x) {
        if (!dm6g) return dm6g;
        var du6o = k4o.fi7b(dm6g);
        if (du6o <= fc7V) return dm6g;
        var bpb8T = du6o - dm6g.length,
            boo8g = dm6g.length - bpb8T;
        var fG7z = Math.ceil(fc7V / 2),
            coq2x = fc7V,
            bMc4g = 0;
        if (bpb8T < fG7z) fG7z = fc7V - bpb8T;
        if (boo8g < fc7V) fc7V = boo8g + Math.ceil((fc7V - boo8g) / 2);
        while (fG7z <= fc7V) {
            bMc4g = k4o.fi7b(dm6g.substr(0, fG7z));
            var boh8Z = coq2x - bMc4g;
            if (boh8Z == 0) break;
            if (boh8Z == 1) {
                var com2x = k4o.fi7b(dm6g.charAt(fG7z));
                if (com2x == 1) {
                    fG7z++;
                    break
                } else {
                    break
                }
            }
            fG7z += Math.floor(boh8Z / 2)
        }
        return dm6g.substr(0, fG7z) + (!!cos2x ? "" : "...")
    }
})();
(function () {
    function col2x() {
        var zg3x = function (js8k) {
            if (js8k < -128) {
                return zg3x(128 - (-128 - js8k))
            } else if (js8k >= -128 && js8k <= 127) {
                return js8k
            } else if (js8k > 127) {
                return zg3x(-129 + js8k - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cok2x = function (js8k, bi5n) {
            return zg3x(js8k + bi5n)
        };
        var coi2x = function (XD2x, bnP7I) {
            if (XD2x == null) {
                return null
            }
            if (bnP7I == null) {
                return XD2x
            }
            var pD0x = [];
            var coh2x = bnP7I.length;
            for (var i = 0, br5w = XD2x.length; i < br5w; i++) {
                pD0x[i] = cok2x(XD2x[i], bnP7I[i % coh2x])
            }
            return pD0x
        };
        var cog2x = function (XA2x) {
            if (XA2x == null) {
                return XA2x
            }
            var pD0x = [];
            var cof2x = XA2x.length;
            for (var i = 0, br5w = cof2x; i < br5w; i++) {
                pD0x[i] = zg3x(0 - XA2x[i])
            }
            return pD0x
        };
        var coe2x = function (bnB7u, Ol9c) {
            bnB7u = zg3x(bnB7u);
            Ol9c = zg3x(Ol9c);
            return zg3x(bnB7u ^ Ol9c)
        };
        var brH8z = function (Oj9a, bmT7M) {
            if (Oj9a == null || bmT7M == null || Oj9a.length != bmT7M.length) {
                return Oj9a
            }
            var pD0x = [];
            var coc2x = Oj9a.length;
            for (var i = 0, br5w = coc2x; i < br5w; i++) {
                pD0x[i] = coe2x(Oj9a[i], bmT7M[i])
            }
            return pD0x
        };
        var bsb9S = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var cob2x = function (cZ6T) {
            var FO5T = [];
            FO5T.push(bsb9S[cZ6T >>> 4 & 15]);
            FO5T.push(bsb9S[cZ6T & 15]);
            return FO5T.join("")
        };
        var cnY2x = function (tS2x) {
            var br5w = tS2x.length;
            if (tS2x == null || br5w < 0) {
                return new String("")
            }
            var FO5T = [];
            for (var i = 0; i < br5w; i++) {
                FO5T.push(cob2x(tS2x[i]))
            }
            return FO5T.join("")
        };
        var bsm9d = function (WB2x) {
            if (WB2x == null || WB2x.length == 0) {
                return WB2x
            }
            var bmG7z = new String(WB2x);
            var pD0x = [];
            var br5w = bmG7z.length / 2;
            var bi5n = 0;
            for (var i = 0; i < br5w; i++) {
                var nQ0x = parseInt(bmG7z.charAt(bi5n++), 16) << 4;
                var nP0x = parseInt(bmG7z.charAt(bi5n++), 16);
                pD0x[i] = zg3x(nQ0x + nP0x)
            }
            return pD0x
        };
        var cnX2x = function (cB5G) {
            if (cB5G == null || cB5G == undefined) {
                return cB5G
            }
            var NK9B = encodeURIComponent(cB5G);
            var tS2x = [];
            var bsy9p = NK9B.length;
            for (var i = 0; i < bsy9p; i++) {
                if (NK9B.charAt(i) == "%") {
                    if (i + 2 < bsy9p) {
                        tS2x.push(bsm9d(NK9B.charAt(++i) + "" + NK9B.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    tS2x.push(NK9B.charCodeAt(i))
                }
            }
            return tS2x
        };
        var cnW2x = function (uX2x) {
            var be5j = 0;
            be5j += (uX2x[0] & 255) << 24;
            be5j += (uX2x[1] & 255) << 16;
            be5j += (uX2x[2] & 255) << 8;
            be5j += uX2x[3] & 255;
            return be5j
        };
        var cuE4I = function (be5j) {
            var uX2x = [];
            uX2x[0] = be5j >>> 24 & 255;
            uX2x[1] = be5j >>> 16 & 255;
            uX2x[2] = be5j >>> 8 & 255;
            uX2x[3] = be5j & 255;
            return uX2x
        };
        var cnU2x = function (dv6p, blF7y, br5w) {
            var ea7T = [];
            if (dv6p == null || dv6p.length == 0) {
                return ea7T
            }
            if (dv6p.length < br5w) {
                throw new Error("1003")
            }
            for (var i = 0; i < br5w; i++) {
                ea7T[i] = dv6p[blF7y + i]
            }
            return ea7T
        };
        var blz7s = function (dv6p, blF7y, ql1x, cnR2x, br5w) {
            if (dv6p == null || dv6p.length == 0) {
                return ql1x
            }
            if (ql1x == null) {
                throw new Error("1004")
            }
            if (dv6p.length < br5w) {
                throw new Error("1003")
            }
            for (var i = 0; i < br5w; i++) {
                ql1x[cnR2x + i] = dv6p[blF7y + i]
            }
            return ql1x
        };
        var cnQ2x = function (br5w) {
            var bs5x = [];
            for (var i = 0; i < br5w; i++) {
                bs5x[i] = 0
            }
            return bs5x
        };
        var cnP2x = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var FK5P = 64;
        var VO1x = 64;
        var btl9c = 4;
        var cnO2x = function (oS0x) {
            var btu9l = [];
            if (oS0x == null || oS0x == undefined || oS0x.length == 0) {
                return cnQ2x(VO1x)
            }
            if (oS0x.length >= VO1x) {
                return cnU2x(oS0x, 0, VO1x)
            } else {
                for (var i = 0; i < VO1x; i++) {
                    btu9l[i] = oS0x[i % oS0x.length]
                }
            }
            return btu9l
        };
        var cnM2x = function (VN1x) {
            if (VN1x == null || VN1x.length % FK5P != 0) {
                throw new Error("1005")
            }
            var bkR7K = [];
            var bi5n = 0;
            var cnL2x = VN1x.length / FK5P;
            for (var i = 0; i < cnL2x; i++) {
                bkR7K[i] = [];
                for (var j = 0; j < FK5P; j++) {
                    bkR7K[i][j] = VN1x[bi5n++]
                }
            }
            return bkR7K
        };
        var cnK2x = function (bul9c) {
            var nQ0x = bul9c >>> 4 & 15;
            var nP0x = bul9c & 15;
            var bi5n = nQ0x * 16 + nP0x;
            return cnP2x[bi5n]
        };
        var bup9g = function (bkO7H) {
            if (bkO7H == null) {
                return null
            }
            var but9k = [];
            for (var i = 0, br5w = bkO7H.length; i < br5w; i++) {
                but9k[i] = cnK2x(bkO7H[i])
            }
            return but9k
        };
        var cnI2x = function (FJ5O, oS0x) {
            if (FJ5O == null) {
                return null
            }
            if (FJ5O.length == 0) {
                return []
            }
            if (FJ5O.length % FK5P != 0) {
                throw new Error("1005")
            }
            oS0x = cnO2x(oS0x);
            var bkk7d = oS0x;
            var bjU6O = cnM2x(FJ5O);
            var Nj8b = [];
            var cnH2x = bjU6O.length;
            for (var i = 0; i < cnH2x; i++) {
                var bjj6d = bup9g(bjU6O[i]);
                bjj6d = bup9g(bjj6d);
                var bji6c = brH8z(bjj6d, bkk7d);
                var cnF2x = coi2x(bji6c, cog2x(bkk7d));
                bji6c = brH8z(cnF2x, oS0x);
                blz7s(bji6c, 0, Nj8b, i * FK5P, FK5P);
                bkk7d = bjU6O[i]
            }
            var buO9F = [];
            blz7s(Nj8b, Nj8b.length - btl9c, buO9F, 0, btl9c);
            var br5w = cnW2x(buO9F);
            if (br5w > Nj8b.length) {
                throw new Error("1006")
            }
            var pD0x = [];
            blz7s(Nj8b, 0, pD0x, 0, br5w);
            return pD0x
        };
        var cnE2x = function (UO1x, J5O) {
            if (UO1x == null) {
                return null
            }
            var bva9R = new String(UO1x);
            if (bva9R.length == 0) {
                return []
            }
            var FJ5O = bsm9d(bva9R);
            if (J5O == null || J5O == undefined) {
                throw new Error("1007")
            }
            var oS0x = cnX2x(J5O);
            return cnI2x(FJ5O, oS0x)
        };
        this.cnD2x = function (UO1x, J5O) {
            var cnC2x = cnE2x(UO1x, J5O);
            var biz6t = new String(cnY2x(cnC2x));
            var UF1x = [];
            var cnB2x = biz6t.length / 2;
            var bi5n = 0;
            for (var i = 0; i < cnB2x; i++) {
                UF1x.push("%");
                UF1x.push(biz6t.charAt(bi5n++));
                UF1x.push(biz6t.charAt(bi5n++))
            }
            return UF1x.join("")
        }
    }
    window.settmusic = (new col2x).cnD2x
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        H5M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v5A = c4g("nej.j"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        J5O = "Search-tracks_",
        b4f;
    p4t.eP7I({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function (P5U) {
                return P5U
            }, onerror: function (P5U, e4i) {
                if (P5U.code == 407) {
                    e4i.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function (e4i, bb5g) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cnA2x(parseInt(e4i.data.type)) || "suggest",
                    keyword: e4i.data.s,
                    offset: e4i.offset
                })
            }, format: function (P5U, e4i) {
                if (P5U.abroad) {
                    try {
                        P5U.result = JSON.parse(decodeURIComponent(settmusic(P5U.result, p4t.sk)))
                    } catch (e) {}
                }
                P5U.result = P5U.result || {};
                var i4m, cq5v, jT9K = [],
                    sM1x = e4i.data.s || "",
                    fY7R = e4i.data.limit,
                    t4x = parseInt(e4i.data.type) || 1,
                    m4q = P5U.result;
                switch (t4x) {
                case 1:
                    i4m = this.bvy9p(m4q.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                    cq5v = m4q.songCount;
                    break;
                case 10:
                    i4m = m4q.albums;
                    cq5v = m4q.albumCount;
                    break;
                case 100:
                    i4m = m4q.artists;
                    cq5v = m4q.artistCount;
                    break;
                case 1e3:
                    i4m = m4q.playlists;
                    cq5v = m4q.playlistCount;
                    break;
                case 1002:
                    i4m = m4q.userprofiles;
                    cq5v = m4q.userprofileCount;
                    break;
                case 1004:
                    i4m = m4q.mvs;
                    cq5v = m4q.mvCount;
                    break;
                case 1006:
                    i4m = this.bvy9p(m4q.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                    cq5v = m4q.songCount;
                    break;
                case 1009:
                    var pf0x = m4q.djRadios;
                    if (!!pf0x) {
                        k4o.bc5h(pf0x, function (A5F, r4v, cny2x) {
                            A5F.xid = A5F.id;
                            A5F.id = A5F.id + "_rad"
                        });
                        if (pf0x.length) {
                            this.sa1x("radio_search-" + e4i.data.s, pf0x)
                        }
                    }
                    cq5v = Math.min(m4q.djprogramCount, 500);
                    i4m = m4q.djprograms || [];
                    if (e4i.data.isPub) {
                        k4o.lY9P(pf0x, function (A5F, r4v, cny2x) {
                            A5F.stype = 1;
                            i4m.unshift(A5F)
                        });
                        cq5v = Math.min(i4m.length, 500)
                    }
                    break
                }
                this.w5B("onsearchload", P5U);
                if (i4m && i4m.length) {
                    for (var i = 0; i < fY7R; i++) {
                        if (i < i4m.length) {
                            jT9K.push(i4m[i])
                        } else {
                            jT9K.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(cq5v || 0, sM1x.length < 3 ? 500 : 5e3),
                    list: jT9K
                }
            }, onerror: function (P5U, e4i) {
                e4i.onload(e4i, []);
                if (k4o.ga7T(e4i.onerror)) {
                    e4i.onerror(P5U)
                }
            }
        }
    });
    p4t.DX5c = NEJ.C();
    b4f = p4t.DX5c.O5T(p4t.gV8N);
    b4f.cl5q = function () {
        this.cr5w()
    };
    b4f.cnv2x = function (J5O, e4i) {
        if (!J5O) return;
        if (!!this.bwc0x) v5A.jj8b(this.bwc0x);
        this.bwc0x = this.ck5p("search-suggest", NEJ.X({
            data: {
                s: J5O,
                limit: 8
            }
        }, e4i))
    };
    b4f.cnu2x = function (J5O, e4i) {
        if (!J5O) return;
        this.ck5p("search-multimatch", NEJ.X({
            data: {
                s: J5O
            }
        }, e4i))
    };
    b4f.bvy9p = function () {
        var cns2x = function (gZ8R, bwm0x, bwn0x) {
            var cnp2x = gZ8R.match(new RegExp(bwm0x + "(.+?)" + bwn0x, "gi")),
                cx5C = 0;
            k4o.bc5h(cnp2x, function (q4u) {
                cx5C += q4u.replace(new RegExp(bwm0x, "g"), "").replace(new RegExp(bwn0x, "g"), "").length
            });
            return cx5C
        };
        return function (ix8p, cno2x, cnl2x) {
            var bwG0x = [];
            k4o.bc5h(ix8p, function (bd5i, be5j) {
                bd5i = l4p.BD4H(bd5i);
                var Uq1x = bd5i.lyrics || [],
                    du6o = Uq1x.length,
                    iW8O = 0,
                    cq5v = 4,
                    Up1x = {
                        l: 0,
                        v: 0
                    },
                    bhA6u;
                if (du6o > 4) {
                    k4o.bc5h(Uq1x, function (gZ8R, r4v) {
                        var bwM0x = cns2x(gZ8R, cno2x, cnl2x);
                        if (bwM0x > Up1x.v) {
                            Up1x.v = bwM0x;
                            Up1x.l = r4v
                        }
                    });
                    iW8O = Up1x.l;
                    iW8O = Math.max(iW8O, 0);
                    bhA6u = du6o - iW8O - 4;
                    if (bhA6u < 0) iW8O += bhA6u;
                    bd5i.lrcAbstractEnd = iW8O + cq5v - 1
                } else {
                    bd5i.lrcAbstractEnd = du6o - 1
                }
                bd5i.lrcAbstractStart = iW8O;
                bd5i.indexId = (Uq1x && Uq1x.length ? "L" : "NL") + bd5i.id;
                bwG0x.push(bd5i)
            });
            return bwG0x
        }
    }();
    b4f.cnA2x = function (t4x) {
        switch (t4x) {
        case 1:
            return "song";
            break;
        case 100:
            return "artist";
            break;
        case 10:
            return "album";
            break;
        case 1004:
            return "mv";
            break;
        case 1006:
            return "lyric";
            break;
        case 1e3:
            return "list";
            break;
        case 1009:
            return "djradio";
            break;
        case 1002:
            return "user";
            break;
        default:
            return "suggest";
            break
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H5M = c4g("nej.ut"),
        v5A = c4g("nej.j"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        F5K = c4g("nm.m"),
        n4r = c4g("nm.l"),
        dc6W = c4g("nm.i"),
        L5Q = c4g("nm.m.sch"),
        b4f, K5P;
    var Um1x = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    L5Q.MN7G = NEJ.C();
    b4f = L5Q.MN7G.O5T(H5M.cz5E);
    b4f.cl5q = function (f4j) {
        this.cr5w();
        this.bR5W(f4j);
        this.R5W = p4t.DX5c.fX7Q()
    };
    b4f.bR5W = function (f4j) {
        this.o4s = f4j;
        var i4m = a4e.I5N(f4j, "j-flag");
        this.eu7n = i4m[0];
        this.bho6i = i4m[1];
        this.ce5j = i4m[2];
        this.mi9Z = i4m[3];
        h4l.s4w(this.eu7n, "input", this.fE7x.g4k(this));
        h4l.s4w(this.eu7n, "keyup", this.fE7x.g4k(this));
        h4l.s4w(this.eu7n, "focus", this.gb7U.g4k(this));
        h4l.s4w(this.bho6i, "click", this.gb7U.g4k(this));
        h4l.s4w(this.eu7n, "blur", this.bhh6b.g4k(this));
        h4l.s4w(this.ce5j, "click", this.TY1x.g4k(this));
        h4l.s4w(this.o4s, "keydown", this.bgL6F.g4k(this));
        h4l.s4w(this.o4s, "keypress", this.TS1x.g4k(this));
        h4l.s4w(this.mi9Z, "mouseover", this.Mw7p.g4k(this));
        h4l.s4w(this.mi9Z, "mouseout", this.Mw7p.g4k(this));
        if (this.eu7n.value) {
            this.eu7n.value = ""
        }
        if (this.eu7n.style.opacity != null) {
            this.eu7n.style.opacity = 1
        }
    };
    b4f.fE7x = function (d4h) {
        if (d4h.type == "keyup" && d4h.keyCode == 8 || d4h.keyCode == 46) {
            this.ED5I()
        } else if (d4h.type == "input" || d4h.type == "propertychange") {
            setTimeout(this.ED5I.g4k(this), 0)
        }
    };
    b4f.gb7U = function () {
        this.wl2x(this.bho6i, !1);
        a4e.z5E(this.o4s, "m-srch-fcs");
        this.eu7n.focus();
        this.ED5I();
        a4e.z5E(a4e.I5N("g-topbar", "j-showoff")[0], "f-hide")
    };
    b4f.bhh6b = function () {
        if (!this.eu7n.value) {
            this.wl2x(this.bho6i, !0)
        }
        var EG5L = a4e.I5N(this.mi9Z, "slt");
        if (this.TQ1x(this.mi9Z) && EG5L.length > 0 && a4e.u5z(EG5L[0], "type")) {
            var hm8e = EG5L[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hm8e)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.eu7n.value
                })
            }
            this.bgo5t(EG5L[0].href)
        }
        this.wl2x(this.mi9Z, !1);
        a4e.x5C(this.o4s, "m-srch-fcs")
    };
    b4f.wl2x = function (f4j, la9R) {
        a4e.Y5d(f4j, "display", !la9R ? "none" : "")
    };
    b4f.TQ1x = function (f4j) {
        return a4e.cW6Q(f4j, "display") != "none"
    };
    b4f.ED5I = function () {
        var AG4K = function (tq1x, cL6F) {
            if (!cL6F) return;
            return cL6F.replace(new RegExp(l4p.bFx2x(tq1x), "gi"), function ($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var cnk2x = function (iD8v) {
            var gj7c = this.o4s.clientWidth > 250 ? 41 : 17;
            if (l4p.PQ9H(iD8v) > gj7c) {
                return l4p.AM4Q(iD8v, gj7c) + "..."
            } else {
                return iD8v
            }
        };
        var TN1x = function (m4q) {
            return m4q.songs && m4q.songs.length || m4q.albums && m4q.albums.length || m4q.artists && m4q.artists.length || m4q.playlists && m4q.playlists.length
        };
        var tb1x = function (tq1x, d4h) {
            if (!l4p.bFq2x(this.eu7n) || l4p.iP8H(this.eu7n.value)) {
                this.wl2x(this.mi9Z, !1);
                return
            }
            d4h.keyword = k4o.dV7O(tq1x);
            var dA6u = a4e.bU5Z("m-search-suggest", d4h, {
                    mark: AG4K.g4k(this, tq1x),
                    cutStr: cnk2x.g4k(this)
                }),
                rv1x = d4h.result.order;
            this.mi9Z.innerHTML = dA6u;
            this.wl2x(this.mi9Z, TN1x(d4h.result) ? !0 : !1);
            if (!!rv1x && !!rv1x.length && Um1x[rv1x[0]]) {
                this.bge5j = {
                    keyword: tq1x,
                    type: Um1x[rv1x[0]]
                }
            }
        };
        var cnj2x = function () {
            this.wl2x(this.mi9Z, !1);
            return
        };
        return function () {
            var A5F = this.eu7n.value;
            if (l4p.iP8H(A5F)) {
                this.wl2x(this.mi9Z, !1);
                return
            }
            this.R5W.cnv2x(A5F, {
                onload: tb1x.g4k(this, A5F),
                onForbidden: cnj2x.g4k(this)
            })
        }
    }();
    b4f.TS1x = function (d4h) {
        if (d4h.keyCode != 13) return;
        var EG5L = a4e.I5N(this.mi9Z, "slt");
        if (this.TQ1x(this.mi9Z) && EG5L.length > 0) {
            this.bgo5t(EG5L[0].href);
            this.wl2x(this.mi9Z, !1);
            return
        }
        this.TY1x();
        this.wl2x(this.mi9Z, !1)
    };
    b4f.bgL6F = function (d4h) {
        if (!this.TQ1x(this.mi9Z)) return;
        var i4m = a4e.I5N(this.mi9Z, "xtag"),
            du6o = i4m.length,
            r4v = k4o.cT6N(i4m, function (q4u) {
                return a4e.bA5F(q4u, "slt")
            });
        switch (d4h.keyCode) {
        case 38:
            if (r4v >= 0) a4e.x5C(i4m[r4v], "slt");
            a4e.z5E(i4m[r4v <= 0 ? du6o - 1 : r4v - 1], "slt");
            break;
        case 40:
            if (r4v >= 0) a4e.x5C(i4m[r4v], "slt");
            a4e.z5E(i4m[(r4v + 1) % du6o], "slt");
            break
        }
    };
    b4f.Mw7p = function (d4h) {
        if (!this.TQ1x(this.mi9Z)) return;
        var Mp7i, E5J = h4l.U5Z(d4h),
            i4m = a4e.I5N(this.mi9Z, "xtag");
        if (E5J.tagName.toLowerCase() == "a") Mp7i = E5J;
        else if (E5J.parentNode.tagName.toLowerCase() == "a") Mp7i = E5J.parentNode;
        if (!Mp7i) return;
        k4o.bc5h(i4m, function (q4u) {
            a4e.x5C(q4u, "slt");
            a4e.u5z(q4u, "type", "")
        });
        if (d4h.type == "mouseout") return;
        a4e.z5E(Mp7i, "slt");
        a4e.u5z(Mp7i, "type", "mouse")
    };
    b4f.TY1x = function () {
        var dF7y = location.hash,
            r4v = dF7y.indexOf("?"),
            bw5B = k4o.hp8h(dF7y.substring(r4v + 1));
        bw5B.s = this.eu7n.value;
        if (l4p.iP8H(bw5B.s)) return;
        if (!bw5B.type && this.bge5j && this.bge5j.keyword == bw5B.s) {
            bw5B.type = this.bge5j.type
        }
        this.bgo5t("/search/#/?" + k4o.cY6S(bw5B));
        this.eu7n.blur()
    };
    b4f.bgo5t = function (V5a) {
        if (location.dispatch2) {
            location.dispatch2(V5a)
        } else {
            location.href = V5a
        }
    };
    L5Q.MN7G.cni2x = function () {
        var i4m = a4e.I5N(document.body, "j-suggest");
        k4o.bc5h(i4m, function (q4u) {
            new L5Q.MN7G(q4u)
        })
    };
    L5Q.MN7G.cni2x()
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        H5M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v5A = c4g("nej.j"),
        p4t = c4g("nm.d"),
        b4f;
    p4t.eP7I({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function (P5U) {
                return {
                    total: P5U.size || 0,
                    list: P5U.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function (P5U) {
                return {
                    total: P5U.size || 0,
                    list: P5U.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function (P5U) {
                return P5U.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function (P5U, e4i) {
                if (e4i.offset == 0) {
                    var oO0x = P5U.data[0];
                    this.w5B("onfirstload", oO0x);
                    P5U.data.splice(0, 1);
                    return P5U.data
                } else {
                    return P5U.data
                }
            }
        }
    });
    p4t.AT4X = NEJ.C();
    b4f = p4t.AT4X.O5T(p4t.gV8N);
    b4f.cl5q = function () {
        this.cr5w()
    };
    b4f.bfD5I = function () {
        var rC1x = "LOCAL_FLAG";
        return function (t4x, cnh2x) {
            var j4n = this.DU5Z(rC1x, {});
            if (j4n[t4x]) {
                return true
            } else {
                if (!cnh2x) {
                    j4n[t4x] = true;
                    this.uR2x(rC1x, j4n)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ut"),
        bfu5z;
    if (!!M5R.nF0x) return;
    M5R.nF0x = NEJ.C();
    bfu5z = M5R.nF0x.O5T(M5R.cz5E);
    bfu5z.bj5o = function () {
        var cne2x = function (d4h) {
            d4h.matched = d4h.source == d4h.target
        };
        return function (e4i) {
            e4i.oncheck = e4i.oncheck || cne2x;
            this.bk5p(e4i);
            this.bV5a = e4i.list;
            this.ip8h = e4i.dataset || "id";
            this.jE9v = e4i.selected || "js-selected"
        }
    }();
    bfu5z.nK0x = function (A5F) {
        var E5J, d4h = {
            target: A5F
        };
        k4o.bc5h(this.bV5a, function (f4j) {
            delete d4h.matched;
            d4h.source = a4e.u5z(f4j, this.ip8h);
            this.w5B("oncheck", d4h);
            if (!d4h.matched) {
                a4e.x5C(f4j, this.jE9v)
            } else {
                E5J = f4j;
                a4e.z5E(f4j, this.jE9v)
            }
        }, this);
        return E5J
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        M5R = c4g("nej.ut"),
        oE0x;
    if (!!M5R.cM6G) return;
    M5R.cM6G = NEJ.C();
    oE0x = M5R.cM6G.O5T(M5R.cz5E);
    oE0x.cl5q = function () {
        this.iC8u = {};
        this.cr5w();
        this.bH5M()
    };
    oE0x.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.beW5b = e4i.umi || "";
        this.yG3x = e4i.dispatcher;
        this.FA5F = e4i.composite || X5c;
        this.bjf6Z({
            onshow: this.eW7P.g4k(this),
            onhide: this.jQ9H.g4k(this),
            onrefresh: this.eg7Z.g4k(this),
            onmessage: this.qZ1x.g4k(this),
            onbeforehide: this.cnb2x.g4k(this)
        })
    };
    oE0x.bC5H = function () {
        delete this.beW5b;
        this.iC8u = {};
        this.bG5L()
    };
    oE0x.sp1x = function (d4h) {
        if (!!d4h) d4h.stopped = !0
    };
    oE0x.bH5M = bn5s;
    oE0x.eW7P = bn5s;
    oE0x.jQ9H = bn5s;
    oE0x.eg7Z = bn5s;
    oE0x.qZ1x = bn5s;
    oE0x.cnb2x = bn5s;
    oE0x.pC0x = function (nD0x, bD5I, eI7B) {
        this.yG3x.beF5K({
            to: nD0x,
            mode: eI7B || 0,
            data: bD5I,
            from: this.beW5b
        })
    };
    oE0x.cuG4K = function (t4x, j4n) {
        this.yG3x.yD3x(t4x, {
            from: this.beW5b,
            data: j4n
        })
    };
    oE0x.cuH4L = function () {
        this.yG3x.ly9p.apply(this.yG3x, arguments)
    };
    oE0x.cmW2x = function () {
        return this.iC8u
    };
    a4e.Tl1x = function () {
        if (!!window.dispatcher) {
            dispatcher.bAb1x.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        X5c = NEJ.O,
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ut"),
        xh3x;
    if (!!M5R.dn6h) return;
    M5R.dn6h = NEJ.C();
    xh3x = M5R.dn6h.O5T(M5R.cM6G);
    xh3x.cmV2x = function (e4i) {
        var bB5G;
        if (!bB5G) {
            var j4n = e4i.input || X5c;
            bB5G = a4e.y5D(j4n.parent)
        }
        if (!bB5G) {
            var j4n = e4i.data || X5c;
            bB5G = a4e.y5D(j4n.parent)
        }
        if (!bB5G) {
            bB5G = a4e.y5D(e4i.parent)
        }
        return bB5G
    };
    xh3x.eW7P = function (e4i) {
        var bB5G = this.cmV2x(e4i);
        if (!!bB5G && !!this.o4s) bB5G.appendChild(this.o4s);
        this.gE8w(e4i);
        this.bAs1x("onshow", e4i);
        this.eg7Z(e4i)
    };
    xh3x.eg7Z = function (e4i) {
        this.fT7M(e4i);
        this.bAs1x("onrefresh", e4i)
    };
    xh3x.jQ9H = function () {
        this.kl9c();
        this.cmS2x();
        a4e.lV9M(this.o4s)
    };
    xh3x.bAu1x = function () {
        var fW7P = /^onshow|onrefresh|delay$/;
        return function (bY5d) {
            return fW7P.test(bY5d)
        }
    }();
    xh3x.bAH1x = bn5s;
    xh3x.bAs1x = function () {
        var bAL1x = function (bw5B, e4i, bY5d, oz0x) {
            if (this.bAu1x(oz0x)) return;
            if (!!bw5B) bY5d += (bY5d.indexOf("?") > 1 ? "&" : "?") + bw5B;
            var cR6L = this.bAH1x(oz0x, e4i) || {};
            cR6L.location = e4i;
            cR6L.parent = this.iC8u[oz0x];
            this.yG3x.ij8b(bY5d, {
                input: cR6L
            })
        };
        return function (t4x, e4i) {
            if (!e4i.nodelay) {
                if (!!this.FA5F.delay) return;
                var bAR1x = this.FA5F[t4x] || X5c;
                if (bAR1x.delay) return
            }
            var bw5B = k4o.cY6S(e4i.param) || "";
            if (t4x == "onrefresh") {
                k4o.ei7b(this.FA5F, bAL1x.g4k(this, bw5B, e4i))
            }
            k4o.ei7b(bAR1x, bAL1x.g4k(this, bw5B, e4i))
        }
    }();
    xh3x.cmS2x = function () {
        var An4r = function (bY5d, oz0x) {
            if (!this.bAu1x(oz0x)) this.yG3x.bq5v(bY5d)
        };
        return function () {
            k4o.ei7b(this.FA5F, An4r, this);
            k4o.ei7b(this.FA5F.onshow, An4r, this);
            k4o.ei7b(this.FA5F.onrefresh, An4r, this)
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        H5M = c4g("nej.ut"),
        v5A = c4g("nej.j"),
        k4o = c4g("nej.u"),
        F5K = c4g("nm.m"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        b4f, K5P;
    F5K.LZ7S = NEJ.C();
    b4f = F5K.LZ7S.O5T(H5M.cz5E);
    b4f.cl5q = function () {
        this.cr5w();
        this.o4s = a4e.y5D("g-topbar");
        var i4m = a4e.I5N(this.o4s, "j-tflag");
        this.beb5g = i4m[0];
        this.BI4M = i4m[1];
        this.bBl1x = i4m[2];
        this.bdT5Y = i4m[3];
        this.cmN2x = H5M.nF0x.B5G({
            list: this.beb5g.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bdS5X = H5M.nF0x.B5G({
            list: this.bdT5Y.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bS5X([
            [this.o4s, "click", this.LT7M.g4k(this)],
            [this.BI4M, "click", this.cv5A.g4k(this)],
            [this.BI4M, "mouseout", this.bBs1x.g4k(this, 0)],
            [this.BI4M, "mouseover", this.bBs1x.g4k(this, 1)]
        ]);
        window.scrollTopbar = this.cmK2x.g4k(this);
        window.matchNav = this.bBu1x.g4k(this);
        window.polling = this.tk1x.g4k(this);
        this.bdi5n = p4t.AT4X.B5G();
        this.cmJ2x();
        this.Fx5C();
        var bw5B = k4o.hp8h(location.href.split("?")[1]) || {};
        if (bw5B.market) {
            a4e.y5D("topbar-download-link").href = "/download?market=" + bw5B.market
        }
        var bdc5h = a4e.I5N(this.o4s, "j-showoff");
        if (bdc5h && !this.bdi5n.bfD5I("newMvSearch")) {
            a4e.x5C(bdc5h[0], "f-hide");
            window.setTimeout(function () {
                a4e.z5E(bdc5h[0], "f-hide")
            }, 5e3)
        }
    };
    b4f.tk1x = function (d4h) {
        var dF7y = l4p.Gr6l();
        if (!/^\/msg/.test(dF7y)) {
            var uz2x = 0;
            uz2x += d4h.comment;
            uz2x += d4h.forward;
            uz2x += d4h.msg;
            uz2x += d4h.notice;
            if (uz2x > 0) {
                uz2x = uz2x > 99 ? "99+" : uz2x;
                this.Lo7h.innerText = uz2x;
                this.Fu5z.innerText = uz2x;
                a4e.x5C(this.Lo7h, "f-hide");
                a4e.x5C(this.Fu5z, "f-hide");
                this.Su0x = true
            } else {
                a4e.z5E(this.Lo7h, "f-hide");
                a4e.z5E(this.Fu5z, "f-hide");
                this.Su0x = false
            }
            var ev7o = "/at";
            if (d4h.notice) ev7o = "/notify";
            if (d4h.comment) ev7o = "/comment";
            if (d4h.msg > 0) ev7o = "/private";
            if (d4h.forward > 0) ev7o = "/at";
            this.Fu5z.parentNode.href = "/msg/#" + ev7o
        } else {
            this.Fu5z.parentNode.href = "javascript:;";
            a4e.z5E(this.Lo7h, "f-hide");
            a4e.z5E(this.Fu5z, "f-hide");
            this.Su0x = false
        }
        var i4m = a4e.I5N(this.beb5g, "j-t");
        if (!/^\/friend/.test(dF7y)) {
            if (i4m && i4m.length) {
                a4e.Y5d(i4m[0], "display", d4h.event > 0 ? "" : "none")
            }
        } else {
            a4e.Y5d(i4m[0], "display", "none")
        }
    };
    b4f.cv5A = function (d4h) {
        var f4j = h4l.U5Z(d4h, "d:action");
        if (f4j) {
            switch (a4e.u5z(f4j, "action")) {
            case "login":
                h4l.cf5k(d4h);
                var t4x = a4e.u5z(f4j, "type");
                if (t4x) {
                    if (t4x == "sina" || t4x == "tencent") top.open(f4j.href);
                    else top.login(t4x == "mobile" ? 0 : 3)
                } else {
                    top.login()
                }
                break;
            case "logout":
                h4l.cf5k(d4h);
                top.logout();
                break;
            case "viewStore":
                if (!this.bdi5n.bfD5I("storeNew")) {
                    a4e.z5E(this.cuI4M, "f-vhide")
                }
                break;
            case "viewLevel":
                if (!this.bdi5n.bfD5I("levelNew")) {
                    a4e.z5E(this.cuJ4N, "f-vhide")
                }
                break
            }
        }
    };
    b4f.LT7M = function (d4h) {
        var f4j = h4l.U5Z(d4h, "d:action");
        if (!f4j) return;
        var W5b = a4e.u5z(f4j, "action");
        switch (W5b) {
        case "bilog":
            var bcr4v = a4e.u5z(f4j, "logAction"),
                bcn4r = a4e.u5z(f4j, "logJson");
            window.log(bcr4v, bcn4r);
            break
        }
    };
    b4f.bBs1x = function (Ft5y, d4h) {
        if (this.bcl4p) {
            this.bcl4p.style.display = !Ft5y ? "none" : "";
            (Ft5y || !this.Su0x ? a4e.z5E : a4e.x5C).call(window, this.Lo7h, "f-hide")
        }
    };
    b4f.cmK2x = function (fP7I) {
        a4e.Y5d(this.o4s, "top", -fP7I + "px")
    };
    b4f.bBu1x = function (ev7o, cmG2x) {
        this.cmN2x.nK0x(ev7o);
        if (ev7o == "discover") {
            a4e.z5E(this.bBl1x, "f-hide");
            a4e.x5C(this.bdT5Y, "f-hide");
            window.g_topBarHeight = 105;
            this.bdS5X.nK0x(cmG2x)
        } else {
            a4e.x5C(this.bBl1x, "f-hide");
            a4e.z5E(this.bdT5Y, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b4f.cmJ2x = function () {
        var up2x = a4e.y5D("g_iframe");
        if (!up2x) return;
        var gi7b = up2x.contentWindow.document.getElementById("g_top");
        this.bBu1x(a4e.u5z(gi7b, "module"), a4e.u5z(gi7b, "sub"))
    };
    var Sp0x = {},
        bCp1x = /\/\/\w+/,
        cmF2x = {
            avatarUrl: function (a, b) {
                a = a || "";
                b = b || "";
                return a.replace(bCp1x, "") !== b.replace(bCp1x, "")
            }, userId: true,
            nickname: true,
            reward: true,
            topic: true,
            djStatus: true
        };
    b4f.cmE2x = function (So0x) {
        var nj0x = k4o.cT6N(cmF2x, function (A5F, J5O) {
            if (k4o.ga7T(A5F)) {
                return A5F(So0x[J5O], Sp0x[J5O])
            } else {
                return So0x[J5O] !== Sp0x[J5O]
            }
        });
        Sp0x = So0x;
        return So0x[nj0x]
    };
    b4f.Fx5C = function () {
        var cX6R = GUser || {},
            cmD2x = GUserAcc || {};
        if (cX6R && cX6R.userId) {
            var bCB1x = NEJ.X(cX6R, cmD2x);
            if (this.cmE2x(bCB1x)) {
                a4e.dL7E(this.BI4M, "m-topbar-user-login", bCB1x)
            }
        } else {
            Sp0x = {};
            this.BI4M.innerHTML = a4e.hV8N("m-topbar-user-unlogin");
            var i4m = a4e.I5N(this.beb5g, "j-t");
            a4e.Y5d(i4m[0], "display", "none")
        }
        a4e.x5C(this.BI4M, "f-hide");
        this.Su0x = false;
        var i4m = a4e.I5N(this.BI4M, "j-uflag");
        if (cX6R && cX6R.userId) {
            this.Lo7h = i4m.shift();
            this.bcl4p = i4m.shift();
            this.Fu5z = i4m.shift()
        } else {
            this.bcl4p = i4m.shift()
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        h4l = c4g("nej.v"),
        H5M = c4g("nej.ut"),
        p4t = c4g("nm.d"),
        b4f, K5P;
    p4t.eP7I({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function (P5U) {
                h4l.w5B(p4t.rK1x, "message", P5U)
            }
        }
    });
    p4t.rK1x = NEJ.C();
    b4f = p4t.rK1x.O5T(p4t.gV8N);
    b4f.Sn0x = function () {
        this.ck5p("polling-get", {})
    };
    b4f.uT2x = function () {
        var eZ7S;
        return function () {
            if (!!eZ7S) return;
            eZ7S = window.setInterval(this.Sn0x.g4k(this), 1e5);
            this.Sn0x()
        }
    }();
    H5M.fx7q.B5G({
        event: "message",
        element: p4t.rK1x
    })
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
            var uri = io.util.parseUri(host),
                uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || ""),
                uri = {},
                i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol,
                host = uri.host,
                port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || ""),
                components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function (qs) {
            var query = {},
                params = qs.split("&"),
                i = 0,
                l = params.length,
                kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [],
                depth = typeof deep == "undefined" ? 2 : deep,
                prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function (ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function (obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function (arr, arr2) {
            var ret = [],
                longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        };
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {}
        EventEmitter.prototype.on = function (name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function (name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function (name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function (name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
            case "string":
                return quote(value);
            case "number":
                return isFinite(value) ? String(value) : "null";
            case "boolean":
            case "null":
                return String(value);
            case "object":
                if (!value) {
                    return "null"
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v
            }
        }
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        };
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON,
            indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type),
                id = packet.id || "",
                endpoint = packet.endpoint || "",
                ack = packet.ack,
                data = null;
            switch (packet.type) {
            case "error":
                var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                    adv = packet.advice ? indexOf(advice, packet.advice) : "";
                if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                break;
            case "message":
                if (packet.data !== "") data = packet.data;
                break;
            case "event":
                var ev = {
                    name: packet.name
                };
                if (packet.args && packet.args.length) {
                    ev.args = packet.args
                }
                data = JSON.stringify(ev);
                break;
            case "json":
                data = JSON.stringify(packet.data);
                break;
            case "connect":
                if (packet.qs) data = packet.qs;
                break;
            case "ack":
                data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "",
                data = pieces[5] || "",
                packet = {
                    type: packets[pieces[1]],
                    endpoint: pieces[4] || ""
                };
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data";
                else packet.ack = true
            }
            switch (packet.type) {
            case "error":
                var pieces = data.split("+");
                packet.reason = reasons[pieces[0]] || "";
                packet.advice = advice[pieces[1]] || "";
                break;
            case "message":
                packet.data = data || "";
                break;
            case "event":
                try {
                    var opts = JSON.parse(data);
                    packet.name = opts.name;
                    packet.args = opts.args
                } catch (e) {}
                packet.args = packet.args || [];
                break;
            case "json":
                try {
                    packet.data = JSON.parse(data)
                } catch (e) {}
                break;
            case "connect":
                packet.qs = data || "";
                break;
            case "ack":
                var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                if (pieces) {
                    packet.ackId = pieces[1];
                    packet.args = [];
                    if (pieces[3]) {
                        try {
                            packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                        } catch (e) {}
                    }
                }
                break;
            case "disconnect":
            case "heartbeat":
                break
            }
            return packet
        };
        parser.decodePayload = function (data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        };
        Transport.prototype.onData = function (data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function (packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        };
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {}
        Socket.prototype.handshake = function (fn) {
            var self = this,
                options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0],
                    script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports,
                match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function () {
            this.open = true
        };
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected,
                wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this,
                maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"],
                limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1),
                lastArg = args[args.length - 1],
                packet = {
                    type: "event",
                    name: name
                };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;

            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
            case "connect":
                this.$emit("connect");
                break;
            case "disconnect":
                if (this.name === "") {
                    this.socket.onDisconnect(packet.reason || "booted")
                } else {
                    this.$emit("disconnect", packet.reason)
                }
                break;
            case "message":
            case "json":
                var params = ["message", packet.data];
                if (packet.ack == "data") {
                    params.push(ack)
                } else if (packet.ack) {
                    this.packet({
                        type: "ack",
                        ackId: packet.id
                    })
                }
                this.$emit.apply(this, params);
                break;
            case "event":
                var params = [packet.name].concat(packet.args);
                if (packet.ack == "data") params.push(ack);
                this.$emit.apply(this, params);
                break;
            case "ack":
                if (this.acks[packet.ackId]) {
                    this.acks[packet.ackId].apply(this, packet.args);
                    delete this.acks[packet.ackId]
                }
                break;
            case "error":
                if (packet.advice) {
                    this.socket.onError(packet)
                } else {
                    if (packet.reason == "unauthorized") {
                        this.$emit("connect_failed", packet.reason)
                    } else {
                        this.$emit("error", packet.reason)
                    }
                }
                break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query),
                self = this,
                Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function (e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function () {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function () {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this,
                args = arguments;
            WebSocket.Sg0x(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this,
                args = arguments;
            WebSocket.Sg0x(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.Le7X.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options,
                    port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bbA4E();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function () {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined",
                r = "object",
                S = "Shockwave Flash",
                W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                O = window,
                j = document,
                t = navigator,
                T = false,
                U = [h],
                o = [],
                N = [],
                I = [],
                l, Q, E, B, J = false,
                a = false,
                n, G, m = true,
                M = function () {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(),
                        Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah),
                        ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1",
                        ag = [0, 0, 0],
                        ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new(window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {}
                        }
                    }
                    return {
                        w3: aa,
                        pv: ag,
                        wk: af,
                        ie: X,
                        win: ae,
                        mac: ac
                    }
                }(),
                k = function () {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function () {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function () {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function () {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function () {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function () {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    } if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function () {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function () {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function () {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv,
                    X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function (ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                }, getObjectById: function (X) {
                    if (M.w3) {
                        return z(X)
                    }
                }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function () {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            } if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                }, switchOffAutoHideShow: function () {
                    m = false
                }, ua: M,
                getFlashPlayerVersion: function () {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                }, hasFlashPlayerVersion: F,
                createSWF: function (Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                }, showExpressInstall: function (Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                }, removeSWF: function (X) {
                    if (M.w3) {
                        y(X)
                    }
                }, createCSS: function (aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                }, addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function (aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                }, expressInstallCallback: function () {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }(function () {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function () {}, error: function () {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gz8r = WebSocket.cmC2x++;
            WebSocket.bCQ1x[self.gz8r] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.kZ9Q = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.Sg0x(function () {
                    WebSocket.oh0x.create(self.gz8r, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.oh0x.send(this.gz8r, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.oh0x.close(this.gz8r)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.kZ9Q)) {
                this.kZ9Q[type] = []
            }
            this.kZ9Q[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.kZ9Q)) return;
            var events = this.kZ9Q[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.kZ9Q[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.cmB2x = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bCV1x(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bCV1x("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cmA2x("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bCV1x = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.prototype.cmA2x = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.oh0x = null;
        WebSocket.bCQ1x = {};
        WebSocket.Le7X = [];
        WebSocket.cmC2x = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.Sg0x(function () {
                WebSocket.oh0x.loadManualPolicyFile(url)
            })
        };
        WebSocket.bbA4E = function () {
            if (WebSocket.oh0x) return;
            if (WebSocket.cmz2x) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cmz2x
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cmy2x()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cuK4O = function () {
            setTimeout(function () {
                WebSocket.oh0x = document.getElementById("webSocketFlash");
                WebSocket.oh0x.setCallerUrl(location.href);
                WebSocket.oh0x.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Le7X.length; ++i) {
                    WebSocket.Le7X[i]()
                }
                WebSocket.Le7X = []
            }, 0)
        };
        WebSocket.cuL4P = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.oh0x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bCQ1x[events[i].webSocketId].cmB2x(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cuM4Q = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dw6q = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.Sg0x = function (task) {
            if (WebSocket.oh0x) {
                task()
            } else {
                WebSocket.Le7X.push(task)
            }
        };
        WebSocket.cmy2x = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.bbA4E()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.bbA4E()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        };

        function empty() {}
        XHR.prototype.post = function (data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function () {
            this.onClose();
            return this
        };
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        };
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        };
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
            this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        };
        HTMLFile.prototype.c4g = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        };
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        };
        HTMLFile.xdomainCheck = function () {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        };
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {}
        XHRPolling.prototype.get = function () {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.c4g(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"),
                    area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index,
                    iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function () {
            var self = this,
                script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c4g = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        };
        JSONPPolling.check = function () {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function () {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.dH7A) this.dH7A = {};
        this.bDA2x = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dH7A || !this.dH7A.error || isArray(this.dH7A.error) && !this.dH7A.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.dH7A) return false;
        var handler = this.dH7A[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
            case 1:
                handler.call(this);
                break;
            case 2:
                handler.call(this, arguments[1]);
                break;
            case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
            default:
                var l = arguments.length;
                var args = new Array(l - 1);
                for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.dH7A) this.dH7A = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.dH7A[type]) {
            this.dH7A[type] = listener
        } else if (isArray(this.dH7A[type])) {
            this.dH7A[type].push(listener)
        } else {
            this.dH7A[type] = [this.dH7A[type], listener]
        } if (isArray(this.dH7A[type]) && !this.dH7A[type].warned) {
            var m;
            if (this.bDA2x !== undefined) {
                m = this.bDA2x
            } else {
                m = defaultMaxListeners
            } if (m && m > 0 && this.dH7A[type].length > m) {
                this.dH7A[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dH7A[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.dH7A || !this.dH7A[type]) return this;
        var list = this.dH7A[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.dH7A[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.dH7A = {};
            return this
        }
        var events = this.dH7A && this.dH7A[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.dH7A[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.dH7A) this.dH7A = {};
        if (!this.dH7A[type]) this.dH7A[type] = [];
        if (!isArray(this.dH7A[type])) {
            this.dH7A[type] = [this.dH7A[type]]
        }
        return this.dH7A[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function (message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function (ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function (domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H5M = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        dj6d = c4g("nm.u"),
        p4t = c4g("nm.d"),
        KO7H = c4g("pomelo"),
        do6i = 0,
        b4f, K5P;
    p4t.eP7I({
        "polling-init": {
            url: "/api/push/init",
            format: function (P5U) {
                do6i = 2;
                var rP1x = {
                        domain: "music.163.com",
                        host: MUSIC_CONFIG.pushHost,
                        port: MUSIC_CONFIG.pushPort,
                        key: MUSIC_CONFIG.pushKey,
                        secret: "bec0b878892740c498505a85eb3dcec9"
                    },
                    j4n = P5U.account || X5c,
                    cS6M = GUser.userId;
                KO7H.init(rP1x.host, rP1x.port, true, this.cms2x.g4k(this, {
                    user: cS6M,
                    nonce: j4n.nonce,
                    domain: rP1x.domain,
                    productKey: rP1x.key,
                    signature: j4n.signature,
                    expire_time: j4n.expireTime
                }))
            }, onerror: function () {
                return this.bax4B()
            }
        }
    });
    p4t.yr3x = NEJ.C();
    b4f = p4t.yr3x.O5T(p4t.gV8N);
    b4f.cl5q = function () {
        var pg0x = !1;
        return function (e4i) {
            if (!pg0x) {
                pg0x = !0
            }
            this.cr5w(e4i);
            KO7H.on("specify", this.qZ1x.g4k(this));
            KO7H.on("broadcast", this.qZ1x.g4k(this))
        }
    }();
    b4f.qZ1x = function (d4h) {
        k4o.bc5h(d4h, function (bD5I) {
            h4l.w5B(p4t.yr3x, "message", bD5I)
        }, this)
    };
    b4f.bax4B = function () {
        var bx5C = 500;
        return function () {
            do6i = 0;
            KO7H.disconnect();
            if (bx5C > 6e4) bx5C = 500;
            bx5C *= 2
        }
    }();
    b4f.cms2x = function (e4i, bP5U) {
        if (!!bP5U) {
            return this.bax4B()
        }
        do6i = 3;
        KO7H.registerAndBind(e4i, function (m4q) {
            if (m4q.code != 200) {
                return this.bax4B()
            }
            do6i = 4
        }.g4k(this))
    };
    b4f.cuN4R = function () {
        dj6d.cmp2x.fX7Q().cuO4S()
    };
    b4f.cuP4T = function () {
        dj6d.cmp2x.fX7Q().cuR4V()
    };
    b4f.brm8e = function () {
        var pg0x = !1;
        return function () {
            if (pg0x) return;
            pg0x = !0;
            this.ck5p("polling-init", {})
        }
    }();
    H5M.fx7q.B5G({
        event: "message",
        element: p4t.yr3x
    })
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        v5A = c4g("nej.j"),
        cZ6T = c4g("nej.p"),
        k4o = c4g("nej.u"),
        n4r = c4g("nm.l"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        dh6b = c4g("api"),
        b4f, K5P;
    var gg7Z = a4e.hU8M('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n4r.bqK8C = NEJ.C();
    b4f = n4r.bqK8C.O5T(n4r.dU7N);
    K5P = n4r.bqK8C.ch5m;
    b4f.bj5o = function (e4i) {
        e4i.title = "意见反馈";
        this.bk5p(e4i)
    };
    b4f.bZ5e = function () {
        this.ca5f = gg7Z
    };
    b4f.bR5W = function () {
        this.cc5h();
        this.gH8z = {};
        var Fp5u = a4e.I5N;
        var CV4Z = h4l.s4w;
        this.gH8z.submit_btn = Fp5u(this.o4s, "u-btn2")[0];
        this.gH8z.cancle_btn = Fp5u(this.o4s, "u-btn2")[1];
        this.gH8z.prompt_msg = Fp5u(this.o4s, "u-err")[0];
        this.gH8z.zs = Fp5u(this.o4s, "zs")[0];
        a4e.Y5d(this.gH8z.zs, "display", "none");
        this.gH8z.fb_txt = Fp5u(this.o4s, "u-txt")[0];
        this.gH8z.contact = Fp5u(this.o4s, "u-txt")[1];
        a4e.fJ7C(this.gH8z.fb_txt, "holder");
        a4e.fJ7C(this.gH8z.contact, "holder");
        if (a4e.bA5F(this.gH8z.fb_txt.parentNode, "holder-parent")) {
            a4e.Y5d(this.gH8z.fb_txt.parentNode, "display", "block")
        }
        if (a4e.bA5F(this.gH8z.contact.parentNode, "holder-parent")) {
            a4e.Y5d(this.gH8z.contact.parentNode, "display", "block")
        }
        CV4Z(this.gH8z.submit_btn, "click", this.cml2x.g4k(this));
        CV4Z(this.gH8z.cancle_btn, "click", this.cmk2x.g4k(this));
        CV4Z(this.gH8z.prompt_msg, "msgShow", this.cmj2x.g4k(this));
        CV4Z(this.gH8z.fb_txt, "keyup", this.sX1x.g4k(this));
        CV4Z(this.gH8z.fb_txt, "input", this.fk7d.g4k(this));
        CV4Z(this.gH8z.contact, "keyup", this.cmf2x.g4k(this));
        CV4Z(this.gH8z.contact, "input", this.bFb2x.g4k(this));
        this.kG9x = p4t.hJ8B.B5G()
    };
    b4f.cml2x = function (d4h) {
        h4l.bh5m(d4h);
        if (this.cu5z()) return;
        var bl5q = this.gH8z.fb_txt.value.trim();
        var br5w = bl5q.length;
        var e4i = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bFg2x = this.gH8z.contact.value.trim();
        var ZR4V = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l4p.bdD5I(),
            contact: bFg2x
        };
        var j4n = {
                content: bl5q,
                client: "web",
                xInfo: JSON.stringify(ZR4V)
            },
            nc0x = this.kG9x.crr3x();
        if (nc0x && nc0x.length) {
            j4n.log = nc0x.join("\n")
        }
        if (br5w == 0) {
            this.gH8z.prompt_msg.innerHTML = "反馈内容不能为空";
            a4e.Y5d(this.gH8z.prompt_msg, "display", "block");
            return
        }
        if (bFg2x.length > 100) {
            this.gH8z.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a4e.Y5d(this.gH8z.prompt_msg, "display", "block");
            return
        }
        this.cu5z(true);
        e4i.data = k4o.cY6S(j4n);
        e4i.onload = this.cmd2x.g4k(this);
        e4i.onerror = this.hW8O.g4k(this);
        v5A.bp5u("/api/feedback/web", e4i)
    };
    b4f.fk7d = function (d4h) {
        var br5w = this.gH8z.fb_txt.value.trim().length;
        if (br5w > 0) a4e.Y5d(this.gH8z.prompt_msg, "display", "none");
        cZ6T.dd6X.browser == "ie" && cZ6T.dd6X.version < "7.0" ? setTimeout(this.fE7x.g4k(this), 0) : this.fE7x()
    };
    b4f.sX1x = function (d4h) {
        if (d4h.keyCode === 8) this.fE7x()
    };
    b4f.fE7x = function () {
        var br5w = this.gH8z.fb_txt.value.trim().length;
        this.gH8z.zs.innerHTML = !br5w ? "0/140" : br5w + "/140"
    };
    b4f.bFb2x = function (d4h) {
        var br5w = this.gH8z.contact.value.trim().length;
        if (br5w > 0) a4e.Y5d(this.gH8z.prompt_msg, "display", "none")
    };
    b4f.cmf2x = function (d4h) {
        if (d4h.keyCode === 8) this.bFb2x()
    };
    b4f.cmk2x = function (d4h) {
        h4l.cf5k(d4h);
        this.bq5v()
    };
    b4f.cmj2x = function (d4h) {
        var f4j = h4l.U5Z(d4h);
        f4j.innerHTML = "请输入反馈内容"
    };
    b4f.cuS4W = function (cuT4X) {
        var f4j = h4l.U5Z(d4h);
        f4j.innerHTML = ""
    };
    b4f.cmd2x = function (m4q) {
        this.cu5z(false);
        this.bq5v();
        n4r.Z5e.N5S({
            tip: "意见发送成功",
            autoclose: true
        })
    };
    b4f.hW8O = function (m4q) {
        this.cu5z(false);
        n4r.Z5e.N5S({
            tip: "意见发送失败",
            autoclose: true
        })
    };
    b4f.cu5z = function (cH6B) {
        return this.dJ7C(this.gH8z.submit_btn, cH6B, "发送意见", "发送中...")
    };
    b4f.N5S = function () {
        K5P.N5S.call(this);
        this.cu5z(false);
        this.gH8z.fb_txt.value = "";
        this.gH8z.contact.value = "";
        a4e.Y5d(this.gH8z.prompt_msg, "display", "none");
        this.fE7x()
    };
    l4p.cma2x = function (e4i) {
        e4i = e4i || {};
        if (e4i.title === undefined) e4i.title = "意见反馈";
        n4r.bqK8C.N5S(e4i)
    };
    dh6b.feedback = l4p.feedback = l4p.cma2x
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        M5R = c4g("nej.ui"),
        b4f;
    if (!!M5R.wf2x) return;
    M5R.wf2x = NEJ.C();
    b4f = M5R.wf2x.O5T(M5R.en7g);
    b4f.cl5q = function () {
        this.gz8r = this.bFs2x();
        this.cr5w()
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.cn5s = e4i.index;
        this.fV7O = e4i.total;
        this.gJ8B = e4i.range;
        this.fS7L(e4i.data)
    };
    b4f.bC5H = function () {
        this.bG5L();
        delete this.bg5l;
        delete this.cn5s;
        delete this.fV7O;
        delete this.gJ8B
    };
    b4f.hq8i = bn5s;
    b4f.bFs2x = function () {
        var gc7V = +(new Date);
        return function () {
            return "itm-" + ++gc7V
        }
    }();
    b4f.Ck4o = function () {
        return this.gz8r
    };
    b4f.hl8d = function () {
        return this.bg5l
    };
    b4f.fS7L = function (j4n) {
        this.bg5l = j4n || {};
        this.hq8i(this.bg5l)
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        M5R = c4g("nej.ui"),
        b4f, K5P;
    if (!!M5R.tc1x) return;
    M5R.tc1x = NEJ.C();
    b4f = M5R.tc1x.O5T(M5R.wf2x);
    K5P = M5R.tc1x.ch5m;
    b4f.bj5o = function (e4i) {
        this.clZ2x = e4i.pkey || "id";
        this.bk5p(e4i)
    };
    b4f.Dp5u = function (j4n) {
        this.w5B("ondelete", {
            ext: j4n,
            id: this.Ck4o(),
            data: this.hl8d(),
            body: this.kM9D()
        })
    };
    b4f.Kq7j = function (j4n) {
        this.w5B("onupdate", {
            ext: j4n,
            id: this.Ck4o(),
            data: this.hl8d(),
            body: this.kM9D()
        })
    };
    b4f.fS7L = function (j4n) {
        K5P.fS7L.apply(this, arguments);
        this.gz8r = this.bg5l[this.clZ2x] || this.bFs2x()
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        fb7U = NEJ.R,
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ui"),
        b4f, ib8T, boO8G;
    if (!!M5R.boG8y) return;
    M5R.boG8y = NEJ.C();
    b4f = M5R.boG8y.O5T(M5R.en7g);
    b4f.bj5o = function (e4i) {
        this.Zy4C = NEJ.X({}, e4i);
        this.fB7u = NEJ.X({}, e4i);
        delete this.Zy4C.onchange;
        this.fB7u.onchange = this.gd7W.g4k(this);
        this.bk5p(e4i);
        this.clY2x({
            number: e4i.number,
            label: e4i.label || X5c
        })
    };
    b4f.bC5H = function () {
        this.bG5L();
        if (!!this.ke9V) {
            this.ke9V.S5X();
            delete this.ke9V
        }
        delete this.Zy4C;
        delete this.fB7u;
        this.clX2x();
        this.o4s.innerHTML = "&nbsp;"
    };
    b4f.bZ5e = function () {
        this.kU9L = ib8T
    };
    b4f.clY2x = function (j4n) {
        a4e.dL7E(this.o4s, boO8G, j4n);
        var gc7V = a4e.HN6H();
        this.fB7u.list = a4e.I5N(this.o4s, "js-i-" + gc7V);
        this.fB7u.pbtn = (a4e.I5N(this.o4s, "js-p-" + gc7V) || fb7U)[0];
        this.fB7u.nbtn = (a4e.I5N(this.o4s, "js-n-" + gc7V) || fb7U)[0]
    };
    b4f.bR5W = function () {
        this.cc5h()
    };
    b4f.cuU4Y = function (j4n) {
        return a4e.bU5Z(boO8G, j4n)
    };
    b4f.gd7W = function (d4h) {
        if (this.JZ7S) return;
        var r4v = d4h.index,
            cq5v = d4h.total;
        this.JZ7S = !0;
        this.JY7R(r4v, cq5v);
        k4o.bc5h(this.Zf4j, function (rU1x) {
            rU1x.JY7R(r4v, cq5v)
        });
        this.JZ7S = !1;
        this.w5B("onchange", d4h)
    };
    b4f.g4k = function (bB5G) {
        bB5G = a4e.y5D(bB5G);
        if (!bB5G) return this;
        var cm5r = NEJ.X({}, this.Zy4C);
        cm5r.parent = bB5G;
        cm5r.index = this.rV1x();
        cm5r.total = this.jz8r();
        var rU1x = this.constructor.B5G(cm5r);
        rU1x.uI2x("onchange", this.fB7u.onchange);
        if (!this.Zf4j) this.Zf4j = [];
        this.Zf4j.push(rU1x);
        return this
    };
    b4f.clX2x = function () {
        var bme7X = function (rU1x, r4v, i4m) {
            rU1x.S5X();
            i4m.splice(r4v, 1)
        };
        return function () {
            k4o.lY9P(this.Zf4j, bme7X)
        }
    }();
    b4f.jU9L = function (r4v) {
        if (!this.ke9V) return;
        this.ke9V.jU9L(r4v)
    };
    b4f.rV1x = function () {
        if (!this.ke9V) return 1;
        return this.ke9V.rV1x()
    };
    b4f.jz8r = function () {
        if (!this.ke9V) return 1;
        return this.ke9V.jz8r()
    };
    b4f.JY7R = function (r4v, cq5v) {
        if (!this.ke9V) return;
        this.ke9V.JY7R(r4v, cq5v)
    };
    b4f.bmB7u = function (cq5v) {
        if (!this.ke9V) return;
        this.ke9V.bmB7u(cq5v)
    };
    ib8T = a4e.rS1x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    boO8G = a4e.ek7d('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ut"),
        b4f;
    if (!!M5R.YO2x) return;
    M5R.YO2x = NEJ.C();
    b4f = M5R.YO2x.O5T(M5R.cz5E);
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.YM2x = e4i.pbtn;
        this.ce5j = e4i.nbtn;
        this.YK2x = e4i.sbtn;
        this.Yu2x = e4i.ebtn;
        this.ip8h = e4i.event || "click";
        this.jE9v = e4i.selected || "js-selected";
        this.mT0x = e4i.disabled || "js-disabled";
        this.clV2x(e4i.list);
        this.JY7R(e4i.index || 1, e4i.total || 1)
    };
    b4f.bC5H = function () {
        this.bG5L();
        delete this.bV5a;
        delete this.ip8h;
        delete this.YM2x;
        delete this.ce5j;
        delete this.YK2x;
        delete this.Yu2x;
        delete this.bIo3x;
        delete this.fV7O;
        delete this.cn5s;
        delete this.jE9v;
        delete this.mT0x
    };
    b4f.clV2x = function () {
        var blR7K = function (f4j) {
            this.bV5a.push(f4j);
            this.bS5X([
                [f4j, this.ip8h, this.cG6A.dS7L(this, 0)]
            ])
        };
        return function (i4m) {
            this.bV5a = [];
            this.bS5X([
                [this.YM2x, "click", this.cG6A.dS7L(this, -1)],
                [this.ce5j, "click", this.cG6A.dS7L(this, 1)],
                [this.YK2x, "click", this.cG6A.dS7L(this, -2)],
                [this.Yu2x, "click", this.cG6A.dS7L(this, 2)]
            ]);
            k4o.bc5h(i4m, blR7K, this)
        }
    }();
    b4f.DV5a = function (f4j, r4v) {
        if (r4v == null) {
            f4j.innerText = "";
            a4e.Y5d(f4j, "display", "none");
            a4e.x5C(f4j, this.jE9v)
        } else {
            f4j.innerText = r4v;
            a4e.Y5d(f4j, "display", "");
            r4v == this.cn5s ? a4e.z5E(f4j, this.jE9v) : a4e.x5C(f4j, this.jE9v)
        }
    };
    b4f.blu7n = function () {
        if (this.cn5s <= 1) {
            a4e.z5E(this.YM2x, this.mT0x);
            a4e.z5E(this.YK2x, this.mT0x)
        } else {
            a4e.x5C(this.YM2x, this.mT0x);
            a4e.x5C(this.YK2x, this.mT0x)
        } if (this.cn5s >= this.fV7O) {
            a4e.z5E(this.ce5j, this.mT0x);
            a4e.z5E(this.Yu2x, this.mT0x)
        } else {
            a4e.x5C(this.ce5j, this.mT0x);
            a4e.x5C(this.Yu2x, this.mT0x)
        }
    };
    b4f.Ys2x = bn5s;
    b4f.bjO6I = function () {
        this.Ys2x();
        this.blu7n();
        this.w5B("onchange", {
            last: this.bIo3x,
            total: this.fV7O,
            index: this.cn5s,
            ext: this.bjG6A
        })
    };
    b4f.bIX3x = function (r4v) {
        r4v = parseInt(r4v);
        if (isNaN(r4v) || this.fV7O == null) return !1;
        r4v = Math.max(1, Math.min(r4v, this.fV7O));
        this.bIo3x = this.cn5s;
        this.cn5s = r4v;
        return !0
    };
    b4f.bjy6s = function (cq5v) {
        cq5v = parseInt(cq5v);
        if (isNaN(cq5v) || cq5v < 1) return !1;
        this.fV7O = cq5v;
        return !0
    };
    b4f.cG6A = function (d4h, eA7t) {
        h4l.cf5k(d4h);
        var E5J = h4l.U5Z(d4h);
        if (!E5J || a4e.bA5F(E5J, this.jE9v) || a4e.bA5F(E5J, this.mT0x)) return;
        var r4v = E5J.innerText;
        switch (eA7t) {
        case 1:
        case -1:
            r4v = this.cn5s + eA7t;
            break;
        case 2:
            r4v = this.fV7O;
            break;
        case -2:
            r4v = 1;
            break
        }
        this.jU9L(r4v)
    };
    b4f.rV1x = function () {
        return this.cn5s
    };
    b4f.jU9L = function (r4v) {
        var clU2x = this.cn5s;
        this.bIX3x(r4v);
        if (clU2x != this.cn5s) this.bjO6I();
        return this
    };
    b4f.jz8r = function () {
        return this.fV7O
    };
    b4f.KE7x = function (cq5v) {
        if (this.bjy6s(cq5v) && this.cn5s != null) {
            this.cn5s = 1;
            this.bjO6I()
        }
        return this
    };
    b4f.bmB7u = function (cq5v) {
        if (this.bjy6s(cq5v)) {
            this.Ys2x();
            this.blu7n()
        }
        return this
    };
    b4f.JY7R = function (r4v, cq5v) {
        if (!this.bjy6s(cq5v) || !this.bIX3x(r4v)) return this;
        this.bjO6I();
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        cN6H = c4g("nej.x"),
        M5R = c4g("nej.ut"),
        b4f;
    if (!!M5R.JP7I) return;
    M5R.JP7I = NEJ.C();
    b4f = M5R.JP7I.O5T(M5R.YO2x);
    b4f.cl5q = function () {
        this.cr5w();
        var f4j = a4e.cQ6K("span", "zdot");
        f4j.innerText = "...";
        this.Xx2x = [f4j.cloneNode(true), f4j]
    };
    b4f.bC5H = function () {
        this.bG5L();
        this.bJu3x()
    };
    b4f.bJu3x = function () {
        a4e.lV9M(this.Xx2x[0]);
        a4e.lV9M(this.Xx2x[1])
    };
    b4f.Ys2x = function () {
        this.bjG6A = {
            last: !1,
            first: !1,
            list: this.bV5a
        };
        this.bJu3x();
        this.DV5a(this.bV5a[0], 1);
        var bE5J = 1,
            br5w = this.bV5a.length;
        if (this.fV7O < br5w) {
            for (var oU0x; bE5J < br5w; bE5J++) {
                oU0x = bE5J + 1;
                this.DV5a(this.bV5a[bE5J], oU0x > this.fV7O ? null : oU0x)
            }
            return
        }
        if (this.cn5s > 1) {
            var cx5C = Math.floor((br5w - 2) / 2),
                clT2x = this.fV7O - br5w + 2,
                iB8t = Math.max(2, this.cn5s - cx5C);
            if (this.fV7O >= br5w) {
                iB8t = Math.min(iB8t, clT2x)
            }
            if (iB8t > 2) {
                this.bV5a[0].insertAdjacentElement("afterEnd", this.Xx2x[0]);
                this.bjG6A.first = !0
            }
            for (var r4v;; bE5J++) {
                r4v = iB8t + bE5J - 1;
                if (r4v > this.cn5s) break;
                this.DV5a(this.bV5a[bE5J], r4v)
            }
        }
        if (this.cn5s < this.fV7O) {
            var r4v, iB8t = this.cn5s + 1;
            for (var i = 0, l = br5w - 2;; i++, bE5J++) {
                r4v = iB8t + i;
                if (bE5J > l || r4v > this.fV7O) break;
                this.DV5a(this.bV5a[bE5J], r4v)
            }
            if (r4v < this.fV7O) {
                this.bV5a[bE5J].insertAdjacentElement("beforeBegin", this.Xx2x[1]);
                this.bjG6A.last = !0
            }
            if (r4v <= this.fV7O) {
                this.DV5a(this.bV5a[bE5J++], this.fV7O)
            }
        }
        for (; bE5J < br5w; bE5J++) {
            this.DV5a(this.bV5a[bE5J])
        }
    };
    a4e.clP2x = cN6H.clP2x = function (bB5G, e4i) {
        var C5H = a4e.kr9i(bB5G);
        if (!C5H) return null;
        if (!M5R.VD1x(C5H, M5R.JP7I)) {
            e4i = e4i || {};
            var i4m = !e4i.clazz ? a4e.cP6J(C5H) : a4e.I5N(C5H, e4i.clazz);
            e4i.pbtn = i4m.shift();
            e4i.nbtn = i4m.pop();
            e4i.list = i4m;
            delete e4i.clazz
        }
        return M5R.VD1x(C5H, M5R.JP7I, e4i || X5c)
    };
    cN6H.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        fb7U = NEJ.R,
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        H5M = c4g("nej.ut"),
        M5R = c4g("nej.ui"),
        b4f, K5P, gg7Z;
    if (!!M5R.JM7F) return;
    M5R.JM7F = NEJ.C();
    b4f = M5R.JM7F.O5T(M5R.boG8y);
    K5P = M5R.JM7F.ch5m;
    b4f.bj5o = function (e4i) {
        e4i.number = parseInt(e4i.number) || 9;
        this.bk5p(e4i);
        this.ke9V = H5M.JP7I.B5G(this.fB7u)
    };
    b4f.gd7W = function (d4h) {
        if (!!this.Zy4C.noend) {
            var bJA3x = d4h.ext || X5c,
                i4m = bJA3x.list || fb7U;
            if (bJA3x.last) {
                a4e.Y5d(i4m[i4m.length - 1], "display", "none")
            }
        }
        K5P.gd7W.apply(this, arguments)
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        be5j = c4g("nej.ui"),
        M5R = c4g("nej.ut"),
        b4f;
    if (!!M5R.Xg2x) return;
    M5R.Xg2x = NEJ.C();
    b4f = M5R.Xg2x.O5T(M5R.cz5E);
    b4f.bj5o = function (e4i) {
        this.iy8q = {};
        this.bk5p(e4i);
        this.if8X = a4e.y5D(e4i.parent);
        this.eN7G = {
            parent: this.if8X
        };
        this.qO1x = parseInt(e4i.limit) || 10;
        this.wU3x = parseInt(e4i.first) || this.qO1x;
        this.clO2x(e4i.item);
        this.clN2x(e4i.cache || X5c);
        this.clM2x(e4i.pager || X5c);
        this.fS7L()
    };
    b4f.bC5H = function () {
        this.w5B("onbeforerecycle");
        this.JJ7C();
        this.bG5L();
        if (this.iy8q.clear) {
            this.R5W.to1x(this.iy8q.key)
        }
        this.R5W.S5X();
        if (!!this.iE8w) {
            this.iE8w.S5X();
            delete this.iE8w
        }
        delete this.bKI3x;
        delete this.fB7u;
        delete this.WU2x;
        delete this.R5W;
        delete this.if8X;
        delete this.JF6z;
        delete this.eN7G;
        delete this.iy8q
    };
    b4f.bKU4Y = function () {
        var cO6I = /\{(.*?)\}/gi,
            clJ1x = function (pL0x, j4n) {
                return (pL0x || "{id}{seed}").replace(cO6I, function ($1, $2) {
                    var A5F = j4n[$2];
                    return A5F == null ? $1 : A5F
                })
            };
        return function (C5H) {
            var J5O = clJ1x(this.eN7G.jstIdTempalte, {
                id: C5H,
                seed: a4e.HN6H()
            });
            if (!this.eN7G.jstIdType) {
                return a4e.y5D(J5O)
            } else if (this.eN7G.jstIdType == 1) {
                return (a4e.I5N(this.if8X, J5O) || [])[0]
            }
        }
    }();
    b4f.yb3x = function (bE5J, bi5n, fY7R, br5w) {
        var m4q = {
            index: 1,
            total: 1
        };
        if (bi5n >= bE5J) {
            m4q.index = Math.floor((bi5n - bE5J) / fY7R) + 2
        }
        if (br5w > bE5J) {
            m4q.total = Math.ceil((br5w - bE5J) / fY7R) + 1
        }
        return m4q
    };
    b4f.bKY4c = function (J5O) {
        delete this.JF6z;
        this.Fi5n = J5O;
        this.bS5X([
            [this.if8X, "click", this.clI1x.g4k(this)]
        ])
    };
    b4f.clO2x = function (q4u) {
        if (k4o.fn7g(q4u)) {
            this.bKY4c(q4u);
            return
        }
        NEJ.X(this.eN7G, q4u);
        var dD7w = this.eN7G.klass;
        delete this.eN7G.klass;
        if (k4o.fn7g(dD7w)) {
            this.bKY4c(dD7w);
            return
        }
        delete this.Fi5n;
        this.JF6z = dD7w;
        this.eN7G.ondelete = this.w5B.g4k(this, "ondelete");
        this.eN7G.onupdate = this.w5B.g4k(this, "onupdate")
    };
    b4f.clN2x = function (Q5V) {
        var dD7w = Q5V.klass,
            jh8Z = NEJ.X({}, Q5V);
        this.iy8q.key = jh8Z.lkey;
        this.iy8q.data = jh8Z.data || {};
        this.iy8q.clear = !!jh8Z.clear;
        this.eN7G.pkey = jh8Z.key || "id";
        jh8Z.onlistload = this.bgA6u.g4k(this);
        jh8Z.onpullrefresh = this.clH1x.g4k(this);
        if (!!dD7w && "onlistchange" in dD7w) {
            this.bS5X([
                [dD7w, "listchange", this.bgy6s.g4k(this)]
            ])
        } else {
            jh8Z.onitemadd = this.VP1x.g4k(this);
            jh8Z.onitemdelete = this.VE1x.g4k(this);
            jh8Z.onitemupdate = this.bLq4u.g4k(this)
        }
        this.R5W = (dD7w || M5R.KK7D).B5G(jh8Z);
        if (Q5V.total != null) {
            this.R5W.KE7x(this.iy8q.key, Q5V.total)
        }
        if (!!Q5V.list) {
            this.R5W.sa1x(this.iy8q.key, Q5V.list)
        }
    };
    b4f.clM2x = function (rU1x) {
        this.bKI3x = rU1x.klass || be5j.JM7F;
        this.fB7u = NEJ.X({}, rU1x);
        if (k4o.ep7i(rU1x.parent)) {
            this.fB7u.parent = rU1x.parent[0];
            this.Jt6n = rU1x.parent.slice(1);
            if (!this.Jt6n || !this.Jt6n.length) {
                delete this.Jt6n
            }
        }
        delete this.fB7u.klass
    };
    b4f.JJ7C = function () {
        var fW7P = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.w5B("onbeforelistclear", {
                parent: this.if8X
            });
            if (!!this.fh7a && this.fh7a.length > 0) {
                this.fh7a = this.JF6z.S5X(this.fh7a);
                delete this.fh7a
            }
            if (fW7P.test(this.if8X.tagName)) {
                a4e.bBZ1x(this.if8X)
            } else {
                this.if8X.innerHTML = ""
            }
        }
    }();
    b4f.bfT5Y = function (Vk1x) {
        if (!!this.fB7u.fixed) return;
        a4e.Y5d(this.fB7u.parent, "display", Vk1x);
        k4o.bc5h(this.Jt6n, function (bB5G) {
            a4e.Y5d(bB5G, "display", Vk1x)
        }, this)
    };
    b4f.beH5M = function () {
        var r4v = this.fB7u.index || 1;
        delete this.fB7u.index;
        if (!!this.iE8w) {
            r4v = this.iE8w.rV1x()
        }
        this.xT3x({
            last: r4v,
            index: r4v
        })
    };
    b4f.xT3x = function (d4h) {
        this.w5B("onpagechange", d4h)
    };
    b4f.bLC4G = function (bi5n) {
        this.iy8q.offset = bi5n;
        this.Vh1x()
    };
    b4f.bLF4J = function (e4i) {
        return e4i
    };
    b4f.Vh1x = function () {
        this.Rd0x();
        var j4n = this.iy8q.data;
        j4n.offset = this.iy8q.offset;
        var oO0x = j4n.offset == 0;
        j4n.total = oO0x;
        this.iy8q.limit = oO0x ? this.wU3x : this.qO1x;
        j4n.limit = this.iy8q.limit;
        this.R5W.nr0x(this.bLF4J(NEJ.X({}, this.iy8q)))
    };
    b4f.bgA6u = function (e4i) {
        if (e4i.key != this.iy8q.key || e4i.offset != this.iy8q.offset) return;
        this.Uu1x();
        var i4m = this.R5W.gP8H(e4i.key);
        if (!i4m || !i4m.length) {
            this.bdO5T();
            return
        }
        var fY7R = e4i.limit,
            bi5n = e4i.offset;
        if (this.bdx5C(i4m, bi5n, fY7R)) return;
        this.w5B("onbeforelistrender", {
            list: i4m,
            offset: bi5n,
            parent: this.if8X
        });
        if (!!this.Fi5n) {
            this.eN7G.xlist = i4m;
            this.eN7G.beg = bi5n;
            this.eN7G.end = Math.min(i4m.length, bi5n + fY7R) - 1;
            this.eN7G.act = "list";
            var dA6u = a4e.bU5Z(this.Fi5n, this.eN7G);
            this.Ra0x(dA6u)
        } else {
            this.eN7G.limit = fY7R;
            this.eN7G.offset = bi5n;
            var gA8s = a4e.zT4X(i4m, this.JF6z, this.eN7G);
            this.QO0x(gA8s)
        }
        this.w5B("onafterlistrender", {
            list: i4m,
            offset: bi5n,
            parent: this.if8X
        })
    };
    b4f.clH1x = function (e4i) {
        if (!this.WU2x) return;
        delete this.WU2x;
        this.Uu1x("onafterpullrefresh");
        this.fS7L()
    };
    b4f.bLT4X = function (r4v, cq5v) {
        if (!!this.iE8w) {
            var yP3x = this.iE8w.rV1x(),
                clG1x = this.iE8w.jz8r();
            if (yP3x > cq5v || cq5v != clG1x) {
                this.iE8w.S5X();
                delete this.iE8w;
                this.xT3x({
                    last: yP3x,
                    index: Math.min(r4v, cq5v)
                });
                return !0
            }
        } else {
            this.fB7u.index = r4v;
            this.fB7u.total = cq5v;
            this.iE8w = this.bKI3x.B5G(this.fB7u);
            this.iE8w.uI2x("onchange", this.xT3x.g4k(this));
            k4o.bc5h(this.Jt6n, function (bB5G) {
                this.iE8w.g4k(bB5G)
            }, this)
        }
    };
    b4f.TO1x = function () {
        var gc7V = +(new Date);
        return function (j4n) {
            var C5H = j4n[this.eN7G.pkey];
            if (!C5H) {
                j4n["dirty-data"] = !0;
                j4n[this.eN7G.pkey] = "dirty-" + gc7V++
            }
            return j4n
        }
    }();
    b4f.TK1x = function (j4n) {
        var C5H = j4n[this.eN7G.pkey];
        if (!!j4n["dirty-data"]) {
            delete j4n["dirty-data"];
            delete j4n[this.eN7G.pkey]
        }
        return C5H
    };
    b4f.TG1x = function () {
        var clF1x = function (jH9y, lm9d) {
            this.if8X.insertAdjacentElement(jH9y, lm9d)
        };
        return function (jH9y, j4n) {
            var HJ6D = [j4n];
            if (!!this.Fi5n) {
                this.eN7G.xlist = HJ6D;
                this.eN7G.beg = 0;
                this.eN7G.end = 0;
                this.eN7G.act = "add";
                this.Ra0x(a4e.bU5Z(this.Fi5n, this.eN7G), jH9y)
            } else {
                this.eN7G.limit = 1;
                this.eN7G.offset = 0;
                this.eN7G.parent = clF1x.g4k(this, jH9y);
                var gA8s = a4e.zT4X(HJ6D, this.JF6z, this.eN7G);
                this.eN7G.parent = this.if8X;
                this.QO0x(gA8s)
            }
        }
    }();
    b4f.Rd0x = bn5s;
    b4f.Uu1x = function (T5Y) {
        var d4h = {
            parent: this.if8X
        };
        this.w5B(T5Y || "onafterlistload", d4h);
        if (!d4h.stopped) {
            a4e.lV9M(this.ci5n)
        }
    };
    b4f.bdx5C = bn5s;
    b4f.TF1x = function (bD5I, jH9y) {
        if (k4o.fn7g(bD5I)) {
            if (!this.ci5n) this.ci5n = a4e.cQ6K("div");
            this.ci5n.innerHTML = bD5I
        } else {
            this.ci5n = bD5I
        }
        this.if8X.insertAdjacentElement(jH9y || "beforeEnd", this.ci5n)
    };
    b4f.wx2x = function (T5Y, ku9l, jH9y) {
        var d4h = {
            parent: this.if8X
        };
        this.w5B(T5Y, d4h);
        if (!d4h.stopped) {
            this.TF1x(d4h.value || ku9l, jH9y)
        }
    };
    b4f.bdO5T = bn5s;
    b4f.Ra0x = bn5s;
    b4f.QO0x = bn5s;
    b4f.clI1x = function () {
        var fW7P = /^(?:delete|update)$/;
        return function (d4h) {
            var f4j = h4l.U5Z(d4h, "d:action");
            if (!f4j) return;
            var W5b = a4e.u5z(f4j, "action");
            if (!fW7P.test(W5b)) return;
            var C5H = a4e.u5z(f4j, "id");
            if (!C5H) return;
            var q4u = this.R5W.em7f(C5H);
            if (!q4u) return;
            h4l.bh5m(d4h);
            this.w5B("on" + W5b, {
                data: q4u,
                id: q4u[this.eN7G.pkey],
                body: a4e.y5D(this.bKU4Y(C5H))
            })
        }
    }();
    b4f.VP1x = bn5s;
    b4f.Vg1x = function (d4h) {
        var j4n = d4h.data || {},
            e4i = {
                data: j4n,
                key: this.iy8q.key,
                id: j4n[this.eN7G.pkey]
            };
        this.w5B("onbeforedelete", e4i);
        this.R5W.GP6J(e4i)
    };
    b4f.VE1x = bn5s;
    b4f.Vd1x = function (d4h) {
        var j4n = d4h.data || {},
            e4i = {
                data: j4n,
                key: this.iy8q.key
            };
        this.w5B("onbeforeupdate", e4i);
        this.R5W.Vi1x(e4i)
    };
    b4f.bLq4u = function (d4h) {
        this.Qu0x(d4h, "onafterupdate");
        if (d4h.stopped) return;
        var C5H = d4h.data[this.eN7G.pkey];
        if (!!this.fh7a) {
            var q4u = a4e.bFn2x(C5H);
            if (!!q4u) q4u.fS7L(d4h.data)
        } else {
            var f4j = a4e.y5D(C5H + "" + a4e.HN6H());
            if (!f4j) return;
            var i4m = this.R5W.gP8H(d4h.key),
                r4v = k4o.cT6N(i4m, d4h.data);
            if (r4v < 0) return;
            this.eN7G.list = i4m;
            this.eN7G.beg = r4v;
            this.eN7G.end = r4v;
            this.eN7G.act = "update";
            var dA6u = a4e.bU5Z(this.Fi5n, this.eN7G);
            f4j.insertAdjacentHTML("afterEnd", dA6u);
            a4e.cK6E(f4j)
        }
    };
    b4f.Qu0x = function (d4h, T5Y) {
        var q4u = d4h.data;
        if (!q4u || q4u[this.eN7G.pkey] == null) {
            this.w5B("onerror", d4h);
            d4h.stopped = !0
        }
        if (!d4h.stopped) {
            this.w5B(T5Y, d4h)
        }
    };
    b4f.bbl4p = bn5s;
    b4f.bbc4g = bn5s;
    b4f.bgy6s = function (d4h) {
        if (d4h.key != this.iy8q.key) return;
        switch (d4h.action) {
        case "add":
            this.VP1x(d4h);
            break;
        case "delete":
            this.VE1x(d4h);
            break;
        case "update":
            this.bLq4u(d4h);
            break;
        case "refresh":
            this.fS7L();
            break;
        case "unshift":
            this.bbc4g(d4h.offset, d4h.limit);
            break;
        case "append":
            this.bbl4p(d4h.offset, d4h.limit);
            break
        }
    };
    b4f.oF0x = function (q4u) {
        this.Vd1x({
            data: q4u
        })
    };
    b4f.lE9v = function (q4u) {
        this.Vg1x({
            data: q4u
        })
    };
    b4f.sl1x = function (q4u) {
        this.R5W.iO8G({
            data: q4u,
            key: this.iy8q.key
        })
    };
    b4f.sm1x = function () {
        return this.R5W
    };
    b4f.baU4Y = function (j4n) {
        this.TG1x("afterBegin", this.TO1x(j4n));
        return this.TK1x(j4n)
    };
    b4f.bNt4x = function (j4n) {
        this.TG1x("beforeEnd", this.TO1x(j4n));
        return this.TK1x(j4n)
    };
    b4f.fS7L = function () {
        this.JJ7C();
        this.beH5M()
    };
    b4f.cuV4Z = function () {
        this.R5W.to1x(this.iy8q.key);
        this.fS7L()
    };
    b4f.bjW6Q = function () {
        if (!!this.WU2x) return;
        this.WU2x = !0;
        this.wx2x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.R5W.bjW6Q({
            key: this.iy8q.key,
            data: this.iy8q.data
        })
    };
    b4f.jz8r = function () {
        return this.R5W.jz8r(this.iy8q.key)
    };
    b4f.bNw4A = function () {
        return this.iE8w
    };
    b4f.VM1x = function () {
        return this.R5W.VM1x(this.iy8q.key)
    };
    b4f.clC1x = function () {
        return this.fh7a
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        fb7U = NEJ.R,
        k4o = c4g("nej.u"),
        a4e = c4g("nej.e"),
        M5R = c4g("nej.ut"),
        b4f, K5P;
    if (!!M5R.iz8r) return;
    M5R.iz8r = NEJ.C();
    b4f = M5R.iz8r.O5T(M5R.Xg2x);
    K5P = M5R.iz8r.ch5m;
    b4f.yb3x = function (bi5n, br5w) {
        return K5P.yb3x.call(this, this.wU3x, bi5n, this.qO1x, br5w)
    };
    b4f.baM4Q = function (r4v) {
        var bi5n = 0;
        if (r4v > 1) bi5n = this.wU3x + (r4v - 2) * this.qO1x;
        return bi5n
    };
    b4f.xT3x = function (d4h) {
        K5P.xT3x.apply(this, arguments);
        if (!d4h.stopped) {
            this.bLC4G(this.baM4Q(d4h.index))
        }
    };
    b4f.Rd0x = function () {
        this.JJ7C();
        this.wx2x("onbeforelistload", "列表加载中...")
    };
    b4f.Uu1x = function () {
        K5P.Uu1x.apply(this, arguments);
        this.JJ7C()
    };
    b4f.bdx5C = function (i4m, bi5n, fY7R) {
        var bu5z = this.yb3x(bi5n, i4m.length);
        if (this.bLT4X(bu5z.index, bu5z.total)) return !0;
        this.bfT5Y(bu5z.total > 1 ? "" : "none")
    };
    b4f.bdO5T = function () {
        this.wx2x("onemptylist", "没有列表数据！")
    };
    b4f.TF1x = function (bD5I, jH9y) {
        if (!jH9y && k4o.fn7g(bD5I)) {
            this.if8X.innerHTML = bD5I;
            return
        }
        K5P.TF1x.apply(this, arguments)
    };
    b4f.Ra0x = function (dA6u) {
        this.if8X.innerHTML = dA6u
    };
    b4f.QO0x = function (gA8s) {
        this.fh7a = gA8s
    };
    b4f.VP1x = function (d4h) {
        this.Qu0x(d4h, "onafteradd");
        if (!d4h.stopped) this.fS7L()
    };
    b4f.VE1x = function (d4h) {
        this.Qu0x(d4h, "onafterdelete");
        if (!d4h.stopped) this.fS7L()
    };
    b4f.bbl4p = function (bi5n, fY7R) {
        var r4v = 1;
        if (!!this.iE8w) {
            r4v = this.iE8w.rV1x()
        }
        var iW8O = this.baM4Q(r4v),
            gD8v = iW8O + (r4v > 1 ? this.qO1x : this.wU3x);
        if (bi5n >= gD8v && !!this.iE8w) {
            var bu5z = this.yb3x(0, this.jz8r());
            this.iE8w.bmB7u(bu5z.total);
            this.bfT5Y(bu5z.total > 1 ? "" : "none")
        } else {
            this.fS7L()
        }
    };
    b4f.bbc4g = function (bi5n, fY7R) {
        var r4v = 1;
        if (!!this.iE8w) {
            r4v = this.iE8w.rV1x()
        }
        var iW8O = this.baM4Q(r4v),
            bu5z = this.yb3x(iW8O, this.jz8r());
        this.xT3x({
            last: r4v,
            index: bu5z.index
        })
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        H5M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        D5I = c4g("nm.w"),
        fc7V = 40,
        b4f, K5P;
    D5I.SX1x = NEJ.C();
    b4f = D5I.SX1x.O5T(H5M.cz5E);
    K5P = D5I.SX1x.ch5m;
    b4f.cl5q = function () {
        this.cr5w()
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.Qk0x = e4i.inputer;
        this.bqz8r = e4i.tipper;
        this.bS5X([
            [this.Qk0x, "input", this.fk7d.g4k(this)]
        ])
    };
    b4f.bC5H = function () {
        this.bG5L();
        this.Ff5k(null, null)
    };
    b4f.fk7d = function (d4h) {
        if (d4h && d4h.type == "keyup" && (d4h.keyCode != 8 || d4h.keyCode != 68)) return;
        var T5Y = this.Qk0x.value,
            cuX4b;
        if (l4p.PQ9H(T5Y) > fc7V) {
            this.Qk0x.value = l4p.AM4Q(T5Y, fc7V);
            this.Ff5k("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g4k(this))
        } else if (T5Y.indexOf("#") >= 0 || T5Y.indexOf("@") >= 0) {
            this.Ff5k("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Ff5k(null, null);
            this.w5B("onchange", {
                value: T5Y
            })
        }
    };
    b4f.clA1x = function () {
        this.fk7d()
    };
    b4f.Ff5k = function () {
        var C5H = 0;
        return function (dm6g, brV9M) {
            if (!!C5H) window.clearTimeout(C5H);
            if (!dm6g) {
                a4e.z5E(this.bqz8r, "f-vhide");
                this.brW9N = !1;
                return
            }
            this.bqz8r.innerHTML = '<i class="u-icn u-icn-25"></i>' + dm6g;
            a4e.x5C(this.bqz8r, "f-vhide");
            this.brW9N = !0;
            if (k4o.ga7T(brV9M)) C5H = window.setTimeout(function () {
                this.Ff5k(null, null);
                brV9M()
            }.g4k(this), 1e3)
        }
    }();
    b4f.brY9P = function () {
        if (this.brW9N) return !1;
        if (l4p.iP8H(this.Qk0x.value)) {
            this.Ff5k("歌单名不能为空");
            return !1
        }
        return !0
    };
    b4f.fv7o = function () {
        return this.Qk0x.value
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        h4l = c4g("nej.v"),
        a4e = c4g("nej.e"),
        v5A = c4g("nej.j"),
        n4r = c4g("nm.l"),
        D5I = c4g("nm.w"),
        bF5K = c4g("nej.ui"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f, K5P;
    n4r.SK1x = NEJ.C();
    b4f = n4r.SK1x.O5T(n4r.dU7N);
    K5P = n4r.SK1x.ch5m;
    b4f.cl5q = function () {
        this.cr5w()
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a4e.I5N(this.o4s, "j-flag");
        this.SG1x = {
            inputer: i4m[0],
            tipper: i4m[1]
        };
        this.hN8F = {
            onerror: this.bse9V.g4k(this),
            onitemadd: this.bse9V.g4k(this)
        };
        this.pO0x = i4m[2];
        h4l.s4w(i4m[2], "click", this.Bq4u.g4k(this));
        h4l.s4w(i4m[3], "click", this.Ay4C.g4k(this));
        h4l.s4w(this.o4s, "keypress", this.bsl9c.g4k(this))
    };
    b4f.bZ5e = function () {
        this.ca5f = "m-wgt-create"
    };
    b4f.bj5o = function (e4i) {
        e4i.clazz = " m-layer-w2";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "新建歌单";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bk5p(e4i);
        this.SG1x.inputer.value = e4i.name || "";
        this.tN2x = D5I.SX1x.B5G(this.SG1x);
        this.tN2x.clA1x();
        this.R5W = p4t.ho8g.B5G(this.hN8F);
        setTimeout(function () {
            this.SG1x.inputer.focus()
        }.g4k(this), 0)
    };
    b4f.bC5H = function () {
        this.bG5L();
        if (this.tN2x) {
            this.tN2x.S5X();
            delete this.tN2x
        }
        this.sj1x(!1);
        this.SG1x.inputer.value = ""
    };
    b4f.sj1x = function (Qd0x) {
        this.od0x = Qd0x;
        if (Qd0x) {
            this.pO0x.innerHTML = "<i>新建中...</i>";
            a4e.z5E(this.pO0x, "u-btn2-dis")
        } else {
            this.pO0x.innerHTML = "<i>新 建</i>";
            a4e.x5C(this.pO0x, "u-btn2-dis")
        }
    };
    b4f.Bq4u = function () {
        if (this.od0x || !this.tN2x.brY9P()) return;
        var cm5r = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.tN2x.fv7o()
            },
            offset: 1
        };
        this.R5W.iO8G(cm5r);
        this.sj1x(!0)
    };
    b4f.bse9V = function (d4h) {
        var cb5g = (d4h.result || X5c).code;
        if (!cb5g) {
            this.w5B("onsuccess", d4h.data)
        } else {
            this.w5B("onerror", d4h)
        }
        this.bq5v()
    };
    b4f.Ay4C = function () {
        this.bq5v()
    };
    b4f.bsl9c = function (d4h) {
        if (d4h.keyCode == 13) this.Bq4u()
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H5M = c4g("nej.ut"),
        v5A = c4g("nej.j"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        n4r = c4g("nm.l"),
        b4f, K5P;
    n4r.boR8J = NEJ.C();
    b4f = n4r.boR8J.O5T(n4r.dU7N);
    K5P = n4r.boR8J.ch5m;
    b4f.cl5q = function () {
        this.cr5w()
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a4e.I5N(this.o4s, "j-flag");
        this.hK8C = {
            limit: 301,
            parent: i4m[1],
            cache: {
                klass: p4t.ho8g,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bnf7Y.g4k(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l4p.zq3x,
                escape: k4o.dV7O
            }
        };
        this.hN8F = {
            onsuccess: this.RE0x.g4k(this),
            onerror: this.ej7c.g4k(this)
        };
        h4l.s4w(i4m[0], "click", this.Bq4u.g4k(this));
        h4l.s4w(i4m[1], "click", this.lG9x.g4k(this))
    };
    b4f.bZ5e = function () {
        this.ca5f = "m-wgt-subscribe"
    };
    b4f.bj5o = function (e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.clazz = " m-layer-w2";
        e4i.title = "添加到歌单";
        e4i.draggable = !0;
        e4i.mask = !0;
        this.bk5p(e4i);
        this.RC0x = (e4i.tracks || []).reverse();
        this.hK8C.item.size = this.RC0x.length;
        this.hN8F.name = e4i.name || "";
        this.bsL9C = p4t.vi2x.B5G({
            onaddsuccess: this.xZ3x.g4k(this)
        });
        this.rz1x = p4t.ho8g.B5G({
            onlistload: this.clz1x.g4k(this)
        });
        this.rz1x.bsE9v();
        k4o.bc5h(this.RC0x, function (q4u, r4v, i4m) {
            if (!k4o.kI9z(q4u)) {
                i4m[r4v] = this.bsL9C.em7f(q4u) || q4u
            }
        }, this)
    };
    b4f.clz1x = function () {
        if (this.dt6n) this.dt6n.S5X();
        this.dt6n = H5M.iz8r.B5G(this.hK8C)
    };
    b4f.Bq4u = function () {
        this.bq5v();
        if (this.BE4I) this.BE4I.S5X();
        this.BE4I = n4r.SK1x.B5G(this.hN8F);
        this.BE4I.N5S()
    };
    b4f.lG9x = function () {
        var cly1x = function (f4j) {
            while (f4j && f4j != document) {
                if (f4j.tagName.toLowerCase() == "li") {
                    return f4j
                }
                f4j = f4j.parentNode
            }
        };
        return function (d4h) {
            h4l.cf5k(d4h);
            var E5J = h4l.U5Z(d4h),
                blw7p = cly1x(E5J);
            if (!!blw7p && !a4e.bA5F(blw7p, "dis")) {
                this.RE0x({
                    id: a4e.u5z(blw7p, "id")
                })
            }
        }
    }();
    b4f.RE0x = function (d4h) {
        var C5H = d4h.id;
        if (!C5H || !this.RC0x.length) return;
        this.bsL9C.iO8G({
            key: "track_playlist-" + C5H,
            data: {
                tracks: this.RC0x,
                pid: C5H
            }
        });
        this.bq5v()
    };
    b4f.xZ3x = function () {
        this.w5B("onsuccess");
        n4r.Z5e.N5S({
            tip: "收藏成功"
        })
    };
    b4f.ej7c = function (d4h) {
        this.bq5v();
        this.w5B("onerror", d4h);
        var cA5F = "收藏失败";
        switch (d4h.code) {
        case 405:
            cA5F = "操作过于频繁，先休息一下再试吧";
            break;
        case 507:
            cA5F = "歌单数量超过限制";
            break;
        case 502:
            cA5F = "歌曲已经存在"
        }
        n4r.Z5e.N5S({
            tip: cA5F,
            type: 2
        })
    };
    b4f.bnf7Y = function () {
        this.bq5v();
        n4r.Z5e.N5S({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    };
    l4p.ly9p = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n4r.boR8J.N5S(e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        cZ6T = c4g("nej.p"),
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        v5A = c4g("nej.j"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x");
    var bkP7I, oe0x, V5a = decodeURIComponent(location.href),
        jd8V = /.+(https?:\/\/.+\/proxy.html)/.test(V5a) ? RegExp.$1 : "";
    if (!!jd8V) {
        v5A.vb2x("mail_proxy_url", jd8V)
    } else {
        jd8V = v5A.tG2x("mail_proxy_url") || "about:blank"
    }
    bkP7I = a4e.Yp2x({
        src: jd8V,
        onload: function () {
            oe0x = true
        }
    });
    var btb9S = function () {
        v5A.gF8x("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var clx1x = function () {
        if (cZ6T.dd6X.browser == "ie" && parseInt(cZ6T.dd6X.version) < 9) {
            l4p.eT7M({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l4p.Pt9k = function (t4x, C5H, W5b) {
        if (!clx1x()) return;
        btb9S();
        if (W5b == "stop") {
            if (!oe0x) throw "proxy not loaded";
            btb9S();
            bkP7I.contentWindow.location.replace(jd8V + "#" + k4o.cY6S({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bkP7I.contentWindow.location.replace(jd8V + "#" + k4o.cY6S({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: t4x,
                    id: C5H,
                    s: +(new Date),
                    action: W5b
                })
            }))
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        v5A = c4g("nej.j"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        p4t = c4g("nm.d");
    var kG9x = p4t.hJ8B.B5G();
    var nm0x = p4t.vi2x.B5G({
        onlistload: clv1x,
        onitemload: clu1x,
        onerror: ej7c
    });
    var BM4Q = p4t.pB0x.B5G({
        onlistload: clt1x,
        onitemload: cls1x,
        onerror: ej7c
    });
    var btG9x = {};

    function uw2x(d4h) {
        var f4j = h4l.U5Z(d4h, "d:resAction"),
            W5b = a4e.u5z(f4j, "resAction");
        if (f4j && (W5b == "play" || W5b == "addto")) {
            var t4x = parseInt(a4e.u5z(f4j, "resType"));
            btM9D({
                action: W5b,
                type: t4x,
                id: a4e.u5z(f4j, "resId"),
                from: a4e.u5z(f4j, "resFrom"),
                data: a4e.u5z(f4j, "resData"),
                order: a4e.u5z(f4j, "resOrder"),
                node: f4j
            });
            if (t4x != 13) btT9K(f4j)
        }
    }

    function btM9D(bN5S) {
        var W5b = bN5S.action,
            t4x = bN5S.type,
            C5H = bN5S.id,
            dI7B = bN5S.from,
            j4n = bN5S.data,
            rv1x = bN5S.order,
            e4i = {
                limit: 1e3,
                offset: 0,
                data: {
                    id: C5H
                },
                ext: {
                    id: C5H,
                    action: W5b,
                    type: t4x,
                    from: dI7B,
                    data: j4n,
                    node: bN5S.node
                }
            };
        if (W5b != "play" && W5b != "addto" || !t4x) return;
        if (window.GRef && GRef == "mail") {
            l4p.Pt9k(t4x, C5H, W5b);
            return
        }
        switch (t4x) {
        case 13:
            e4i.key = "track_playlist-" + C5H;
            nm0x.nr0x(e4i);
            break;
        case 17:
            e4i.key = "program";
            e4i.id = C5H;
            BM4Q.Vp1x(e4i);
            if (W5b == "play") {
                v5A.bp5u("/api/dj/program/listen", {
                    query: {
                        id: C5H
                    }
                })
            }
            break;
        case 18:
            e4i.key = "track";
            e4i.id = C5H;
            nm0x.Vp1x(e4i);
            break;
        case 19:
            e4i.key = "track_album-" + C5H;
            nm0x.nr0x(e4i);
            break;
        case 24:
            e4i.key = "track_day";
            nm0x.nr0x(e4i);
            break;
        case 2:
            e4i.key = "track_artist_top-" + C5H;
            nm0x.nr0x(e4i);
            break;
        case 70:
            e4i.key = "program_djradio-" + C5H + "-" + rv1x;
            e4i.data.radioId = C5H;
            e4i.data.asc = rv1x == 2;
            BM4Q.nr0x(e4i);
            break
        }
    }

    function btV9M(i4m) {
        var m4q = [];
        k4o.bc5h(i4m, function (q4u) {
            if (q4u.mainSong) {
                q4u.mainSong.program = q4u;
                m4q.push(q4u.mainSong);
                q4u.localupdatetime = +(new Date);
                nm0x.crK3x(q4u.mainSong);
                q4u.mainTrackId = q4u.mainSong.id;
                delete q4u.mainSong
            } else {
                var btX9O = nm0x.em7f(q4u.mainTrackId);
                btX9O && m4q.push(btX9O)
            }
        });
        return m4q
    }

    function ZZ4d(i4m, e4i) {
        var qw1x = e4i.action == "play" && e4i.type != 17 && e4i.type != 18,
            fs7l = e4i.action == "play";
        if (!i4m.length) return;
        if (e4i.type == 19) {
            i4m = l4p.GJ6D(i4m, true, {
                play: true
            }, {
                source: "album",
                sourceid: e4i.id
            })
        } else {
            i4m = l4p.GJ6D(i4m, true, {
                play: true
            })
        }
        k4o.bc5h(i4m, function (q4u) {
            q4u.source = l4p.beT5Y({
                fid: e4i.from,
                fdata: e4i.data,
                type: e4i.type,
                rid: e4i.id
            }, q4u.id)
        });
        top.player.addTo(i4m, qw1x, fs7l);
        kG9x.Kl7e({
            rid: e4i.id,
            type: e4i.type,
            hash: l4p.Gr6l(),
            play: fs7l,
            source: e4i.from,
            sourceid: e4i.data
        })
    }

    function clv1x(d4h) {
        var ey7r = d4h.ext || {};
        i4m = nm0x.gP8H(d4h.key);
        ZZ4d(i4m, ey7r);
        if (ey7r.type == 13 && ey7r.action == "play" && i4m && i4m.length > 0) {
            btT9K(ey7r.node);
            v5A.bp5u("/api/playlist/update/playcount", {
                query: {
                    id: ey7r.id
                }
            })
        }
    }

    function clu1x(d4h) {
        var i4m = [nm0x.em7f(d4h.id)],
            bd5i = i4m[0],
            oX0x = l4p.of0x(bd5i),
            rM1x = bd5i.privilege || {};
        if (oX0x == 10) {
            l4p.sR1x(rM1x.fee || bd5i.fee, bd5i.id, "song", null, rM1x)
        } else if (oX0x == 100) {
            l4p.ia8S(null, null, null, true, bd5i)
        } else if (oX0x == 11) {
            l4p.bIe3x(bd5i.id, 18)
        } else {
            ZZ4d(i4m, d4h.ext)
        }
    }

    function clt1x(d4h) {
        var i4m = btV9M(BM4Q.gP8H(d4h.key));
        ZZ4d(i4m, d4h.ext)
    }

    function cls1x(d4h) {
        var i4m = btV9M([BM4Q.em7f(d4h.id)]);
        ZZ4d(i4m, d4h.ext)
    }

    function ej7c() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function btT9K(f4j) {
        var t4x = a4e.u5z(f4j, "resType"),
            C5H = a4e.u5z(f4j, "resId"),
            J5O = t4x + "-" + C5H;
        if (btG9x[J5O]) return;
        var bui9Z = a4e.y5D("play-count"),
            bif6Z = a4e.I5N(f4j.parentNode, "nb"),
            Ox9o = null;
        if (bui9Z) {
            Ox9o = bui9Z
        } else {
            Ox9o = !!bif6Z && !!bif6Z[0] ? bif6Z[0] : null
        } if (Ox9o) {
            var cx5C = Ox9o.innerHTML;
            if (/^\d+$/.test(cx5C)) {
                Ox9o.innerText = +cx5C + 1
            }
            btG9x[J5O] = true
        }
    }
    l4p.clr1x = function (f4j) {
        h4l.s4w(f4j || document.body, "click", uw2x.g4k(this))
    };
    l4p.clp1x = function (W5b, t4x, C5H) {
        btM9D({
            action: W5b,
            type: t4x,
            id: C5H
        })
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v5A = c4g("nej.j"),
        H5M = c4g("nej.ut"),
        p4t = c4g("nm.d"),
        b4f, K5P;
    p4t.eP7I({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function (m4q, e4i) {
                this.clo1x(m4q, e4i)
            }, onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function (m4q, e4i) {
                this.w5B("onshareall", e4i.result)
            }, onerror: function (m4q, e4i) {
                this.w5B("onshareall", e4i.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function (m4q, e4i) {
                e4i.options.picUrl = m4q.picUrl;
                this.buv9m(e4i.options, e4i.result)
            }, onerror: function (m4q, e4i) {
                this.w5B("onshareall", e4i.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function (P5U, e4i) {
                this.oK0x("vid_info-" + e4i.data.nosKey, P5U);
                return P5U
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function (e4i) {}, format: function (m4q, e4i) {
                e4i.data = e4i.data2;
                this.ck5p("share-all", e4i)
            }, onerror: "onshareerror"
        }
    });
    p4t.bgY6S = NEJ.C();
    b4f = p4t.bgY6S.O5T(p4t.gV8N);
    b4f.clm1x = function () {
        var sQ1x = function (P5U, e4i) {
            e4i.times++;
            if (e4i.times > 10) {
                this.w5B("onvinfoerror", e4i.key, P5U)
            } else {
                setTimeout(eF7y.g4k(this, e4i), e4i.times * 1e3)
            }
        };
        var vJ2x = function (P5U, e4i) {
            this.w5B("onvinfo", e4i.key, P5U)
        };
        var eF7y = function (e4i) {
            var V5a = e4i.url;
            v5A.bp5u(V5a + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: vJ2x.dS7L(this, e4i),
                onerror: sQ1x.dS7L(this, e4i)
            })
        };
        return function (e4i) {
            e4i.times = 0;
            eF7y.call(this, e4i)
        }
    }();
    b4f.cvb4f = function () {
        var NT9K;
        var sQ1x = function (P5U, e4i) {
            if (P5U.code > 0) {
                clearInterval(this.Cc4g);
                this.w5B("onviderror", e4i.data.nosKey)
            }
        };
        var vJ2x = function (J5O, P5U) {
            if (P5U.vid && P5U.covers) {
                clearInterval(this.Cc4g);
                this.w5B("onvid", J5O, P5U)
            }
        };
        var eF7y = function (e4i) {
            if (+(new Date) - NT9K > 60 * 60 * 1e3) {
                clearInterval(this.Cc4g);
                this.w5B("onviderror", e4i.data.nosKey);
                return
            }
            e4i.onload = vJ2x.g4k(this, e4i.data.nosKey);
            e4i.onerror = sQ1x.g4k(this);
            this.ck5p("vid-get", e4i)
        };
        return function (e4i) {
            if (!e4i || !e4i.data) return;
            NT9K = +(new Date);
            this.Cc4g = clearInterval(this.Cc4g);
            this.Cc4g = setInterval(eF7y.g4k(this, e4i), 1e4);
            eF7y.apply(this, arguments)
        }
    }();
    b4f.clk1x = function () {
        this.Cc4g = clearInterval(this.Cc4g)
    };
    b4f.clo1x = function (m4q, mB9s) {
        if (m4q.event && mB9s.snsTypes) {
            if (mB9s.pics) {
                var buN9E = [];
                for (var i = 0, len = mB9s.pics.length; i < len; i++) {
                    buN9E[i] = mB9s.pics[i].originId
                }
                this.ck5p("share_img_compound", {
                    data: {
                        picIds: buN9E.join(",")
                    },
                    options: mB9s,
                    result: m4q
                })
            } else {
                mB9s.picUrl = mB9s.picUrl;
                this.buv9m(mB9s, m4q)
            }
        } else {
            this.w5B("onshareall", m4q)
        }
        var wB2x = p4t.hJ8B.B5G();
        wB2x.gf7Y(mB9s.isPub ? "pubevent" : "shareevent", {
            id: m4q.id
        })
    };
    b4f.buv9m = function (mB9s, m4q) {
        var cm5r = {};
        cm5r.eventid = m4q.event.id;
        cm5r.eventtype = m4q.event.type;
        mB9s.picUrl && (cm5r.picUrl = mB9s.picUrl);
        cm5r.snsTypes = mB9s.snsTypes;
        cm5r.msg = mB9s.data.msg || "";
        cm5r.type = mB9s.data.type;
        mB9s.data.id && (cm5r.id = mB9s.data.id);
        this.ck5p("share-sns", {
            data: cm5r,
            result: m4q
        })
    };
    b4f.clj1x = function (e4i) {
        var j4n = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k4o.ng0x(5)
        };
        j4n = NEJ.EX(j4n, e4i);
        if (!(j4n.id > 0)) {
            delete j4n.id;
            j4n.type = "noresource"
        }
        if (!j4n.threadId) {
            delete j4n.threadId
        }
        if (!j4n.actId) {
            delete j4n.actId
        }
        if (!j4n.pics) {
            delete j4n.pics
        } else {
            j4n.pics = JSON.stringify(j4n.pics)
        }
        this.ck5p("share-all", {
            data: j4n,
            snsTypes: e4i.snsTypes,
            picUrl: e4i.picUrl,
            pics: e4i.pics,
            isPub: e4i.isPub
        })
    };
    b4f.cli1x = function (e4i) {
        this.ck5p("share-private", e4i)
    };
    b4f.clh1x = function (e4i) {
        this.ck5p("video-submit", e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H5M = c4g("nej.ut"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f, K5P;
    var clg1x = {
        40: !0
    };
    p4t.eP7I({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function (e4i) {
                e4i.data.getcounts = true;
                e4i.data.pagesize = e4i.data.limit;
                if (e4i.data.offset == 0) {
                    e4i.data.lasttime = -1
                }
                delete e4i.data.offset
            }, format: function (P5U, e4i) {
                P5U.event = l4p.SD0x(P5U.event, function (q4u, r4v) {
                    return !clg1x[q4u.type]
                });
                this.clf1x(P5U.event);
                e4i.data.lasttime = P5U.lasttime;
                if (P5U.event.length) {
                    P5U.event.length = e4i.limit
                }
                return {
                    list: P5U.event,
                    total: P5U.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function (P5U, e4i) {
                return {
                    list: P5U.events,
                    total: P5U.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function (e4i) {
                e4i.data.pagesize = 20
            }, format: function (P5U, e4i) {
                return P5U.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function (e4i) {
                e4i.data.time = -1;
                e4i.data.getcounts = true
            }, format: function (P5U, e4i) {
                P5U.events.length = e4i.limit;
                return {
                    list: P5U.events,
                    total: P5U.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function (m4q, e4i) {
                m4q.conf = e4i.conf;
                return m4q
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function (e4i, bb5g) {
                if (e4i.like) {
                    if (e4i.comment) {
                        bb5g.url = "/api/v1/comment/like"
                    } else {
                        bb5g.url = "/api/resource/like"
                    }
                    bb5g.onload = "oneventlike";
                    bb5g.onerror = "oneventlikeerr"
                } else {
                    if (e4i.comment) {
                        bb5g.url = "/api/v1/comment/unlike"
                    } else {
                        bb5g.url = "/api/resource/unlike"
                    }
                    bb5g.onload = "oneventunlike";
                    bb5g.onerror = "oneventunlikeerr"
                }
            }, format: function (m4q, e4i) {
                m4q.eid = e4i.eid;
                m4q.origin = e4i.origin;
                m4q.ext = e4i.ext;
                return m4q
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function (m4q, e4i) {
                m4q.id = e4i.data.id;
                return m4q
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function (e4i, bb5g) {
                if (e4i.data.type == "nointer") {
                    bb5g.url = "/api/event/rcmd/reject"
                } else if (e4i.data.transcoding) {
                    bb5g.url = "/api/event/video/transcoding/delete"
                } else {
                    bb5g.url = "/api/event/delete"
                }
            }, format: function (m4q, e4i) {
                m4q.id = e4i.data.id;
                return m4q
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function (m4q, e4i) {
                m4q.id = e4i.data.id;
                return m4q
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function (e4i) {
                e4i.data.lasttime = e4i.data.lasttime || -1;
                e4i.data.pagesize = e4i.data.limit;
                e4i.data.getcounts = true;
                delete e4i.data.offset
            }, format: function (P5U, e4i) {
                e4i.data.lasttime = P5U.lasttime;
                var i4m = P5U.events;
                if (P5U.more) i4m = this.cle1x(i4m, e4i.data.pagesize);
                return {
                    list: i4m,
                    total: P5U.size
                }
            }, onerror: "onlisterror"
        }
    });
    p4t.yz3x = NEJ.C();
    b4f = p4t.yz3x.O5T(p4t.gV8N);
    b4f.cl5q = function () {
        this.cr5w()
    };
    b4f.bes5x = function (t4x, cI6C) {
        return t4x + "-" + cI6C
    };
    b4f.cvd4h = function (e4i) {
        this.ck5p("ievent-get", e4i)
    };
    b4f.cvf4j = function (e4i) {
        this.ck5p("ievent-new-get", e4i)
    };
    b4f.cvh4l = function (e4i) {
        this.ck5p("ievent-user-get", e4i)
    };
    b4f.cvj4n = function (t4x, cI6C) {
        return this.pZ0x(this.bes5x(t4x, cI6C))
    };
    b4f.cvl4p = function (EX5c, e4i) {
        if (!EX5c || !EX5c.length) return;
        e4i = e4i || {};
        var bv5A = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, BK4O = [], bvw9n = [], j4n; i < EX5c.length; ++i) {
            j4n = EX5c[i];
            j4n = this.pZ0x(this.bes5x(j4n.type, j4n.id));
            if (!j4n) {
                BK4O.push(EX5c[i].id);
                bvw9n.push(bv5A[EX5c[i].type] || 0)
            }
        }
        if (!BK4O.length) {
            this.w5B("oneventresload", e4i.conf);
            return
        }
        e4i.data = {
            ids: JSON.stringify(BK4O),
            types: JSON.stringify(bvw9n)
        };
        e4i.onload = this.ckY1x.g4k(this);
        this.ck5p("ievent-res-get", e4i)
    };
    b4f.ckY1x = function (m4q) {
        if (m4q.code != 200) {
            this.w5B("oneventreserror", m4q.code);
            return
        }
        var bv5A = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, i4m = m4q.results; i < i4m.length; ++i) {
            this.oK0x(this.bes5x(bv5A[i4m[i].type], i4m[i].id), i4m[i])
        }
        this.w5B("oneventresload", m4q.conf)
    };
    b4f.bvP0x = function (j4n) {
        var J5O = "event-list";
        this.bkv7o(J5O, j4n);
        this.w5B("onitemadd", {
            key: J5O,
            action: "add",
            data: j4n,
            flag: -1
        })
    };
    b4f.vZ2x = function (e4i) {
        this.ck5p("ievent-like", e4i)
    };
    b4f.lE9v = function (e4i) {
        this.ck5p("ievent-delete", e4i)
    };
    b4f.cle1x = function (i4m, fY7R) {
        for (var i = i4m.length; i < fY7R; i++) i4m.push(null);
        return i4m
    };
    b4f.clf1x = function (i4m) {
        var m4q = [];
        if (!i4m || !i4m.length) return;
        k4o.bc5h(i4m, function (d4h) {
            d4h.biData = this.bvR0x(d4h)
        }, this)
    };
    b4f.bvR0x = function () {
        var Um1x = {
                32: "comment",
                33: "activity",
                34: "recomment_artist"
            },
            ckW1x = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d4h) {
            var P5U = {
                id: d4h.id,
                sourceid: d4h.user.userId,
                alg: d4h.rcmdInfo ? d4h.rcmdInfo.alg : null,
                contentType: Um1x[d4h.type] || (k4o.cT6N(ckW1x, d4h.type) != -1 ? "user_event" : "other")
            };
            return P5U
        }
    }();
    b4f.Ct4x = function (ckV1x, d4h) {
        var P5U = this.bvR0x(d4h);
        P5U.actionType = ckV1x;
        if (window.log) log("eventclick", P5U)
    };
    b4f.cvn4r = function (e4i) {
        this.ck5p("event_latest-list", e4i)
    }
})();
(function (factory) {
    window.SparkMD5 = factory()
})(function (undefined) {
    "use strict";
    var add32 = function (a, b) {
            return a + b & 4294967295
        },
        hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }

    function md5blk(s) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }

    function md5blk_array(a) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function rhex(n) {
        var s = "",
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function (x, y) {
            var lsw = (x & 65535) + (y & 65535),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target
            }
        })()
    }

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }

    function SparkMD5() {
        this.reset()
    }
    SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function (contents) {
        this.qh1x += contents;
        this.br5w += contents.length;
        var length = this.qh1x.length,
            i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dF7y, md5blk(this.qh1x.substring(i - 64, i)))
        }
        this.qh1x = this.qh1x.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function (raw) {
        var buff = this.qh1x,
            length = buff.length,
            i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.nA0x(tail, length);
        ret = hex(this.dF7y);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function () {
        this.qh1x = "";
        this.br5w = 0;
        this.dF7y = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function () {
        return {
            buff: this.qh1x,
            length: this.br5w,
            hash: this.dF7y
        }
    };
    SparkMD5.prototype.setState = function (state) {
        this.qh1x = state.buff;
        this.br5w = state.length;
        this.dF7y = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function () {
        delete this.dF7y;
        delete this.qh1x;
        delete this.br5w
    };
    SparkMD5.prototype.nA0x = function (tail, length) {
        var i = length,
            tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dF7y, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.br5w * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dF7y, tail)
    };
    SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function () {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this.qh1x.buffer, arr, true),
            length = buff.length,
            i;
        this.br5w += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dF7y, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.qh1x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this.qh1x,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.nA0x(tail, length);
        ret = hex(this.dF7y);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this.qh1x = new Uint8Array(0);
        this.br5w = 0;
        this.dF7y = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.nA0x = SparkMD5.prototype.nA0x;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        v5A = c4g("nej.j"),
        dM7F = c4g("nej.g"),
        k4o = c4g("nej.u"),
        fg7Z = c4g("nej.n"),
        H5M = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        iG8y = c4g("nm.x.nos"),
        D5I = c4g("nm.w");
    var ckT1x = 1024 * 256,
        ckS1x = 1024 * 1024 * 2,
        oV0x = {
            TOKEN_ERROR: -100,
            DNS_ERROR: -101
        },
        bwr0x = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : bn5s,
        pa0x = {
            MD5_DONE: .2,
            TOKEN_GET: .22,
            DNS_GET: .24,
            UPLOADED: 1
        },
        oN0x = {
            AUDIO: "audio",
            IMAGE: "image",
            TXT: "txt",
            RAR: "rar",
            OTHER: "other",
            VIDEO: "video"
        };
    var mJ9A = {};
    var wB2x = p4t.hJ8B.B5G();
    iG8y.cvo4s = function () {
        return oN0x
    };
    var ckQ1x = function () {
        return k4o.ng0x(6) + +(new Date)
    };
    var EW5b = function (jk8c, e4i) {
        if (!mJ9A[e4i.taskId]) {
            return
        }(e4i.onuploading || bn5s).call(this, jk8c)
    };
    var bcv4z = function (Q5V) {
        var ckO1x = Q5V.md5,
            dT7M = Q5V.file,
            ckN1x = ckO1x + dT7M.size;
        return "nos_file_hash_" + ckN1x
    };
    var ckM1x = function (Q5V) {
        var J5O = bcv4z(Q5V),
            j4n = v5A.bsO9F(J5O, "{}");
        try {
            j4n = JSON.parse(j4n)
        } catch (e) {
            j4n = {}
        }
        return j4n
    };
    var ckL1x = function (Q5V, e4i) {
        if (!Q5V.md5) {
            return
        }
        var J5O = bcv4z(Q5V),
            j4n = v5A.bsO9F(J5O, "{}");
        try {
            j4n = JSON.parse(j4n)
        } catch (e) {
            j4n = {}
        }
        NEJ.X(j4n, e4i);
        v5A.vb2x(J5O, JSON.stringify(j4n))
    };
    var ckK1x = function (Q5V) {
        var J5O = bcv4z(Q5V);
        v5A.KQ7J(J5O)
    };
    var ckJ1x = function (Q5V, ge7X) {
        var V5a = Q5V.urls[Math.min(Q5V.urlIndex, Q5V.urls.length - 1)],
            dT7M = Q5V.file,
            kS9J = Q5V.bucket,
            mF9w = Q5V.objectKey,
            er7k = Q5V.token,
            bL5Q = Q5V.context,
            nv0x = {},
            Mm7f = bwr0x.call(dT7M, Q5V.beg, Q5V.end),
            bw5B = {
                offset: Q5V.beg,
                complete: Q5V.lastChunk || false,
                version: "1.0"
            };
        if (bL5Q) {
            bw5B.context = bL5Q
        }
        nv0x["x-nos-token"] = er7k;
        nv0x[dM7F.wW3x] = dT7M.type;
        Q5V.reqId = v5A.bp5u(V5a + "/" + kS9J + "/" + mF9w, {
            type: "json",
            method: "POST",
            headers: nv0x,
            query: bw5B,
            data: Mm7f,
            onload: ge7X.onload,
            onerror: ge7X.onerror
        })
    };
    var ckI1x = function (m4q, Q5V, e4i) {
        m4q = {
            code: 200,
            fileName: e4i.file.name,
            size: e4i.file.size,
            type: e4i.file.type,
            bucket: Q5V.bucket,
            docId: Q5V.docId,
            objectKey: Q5V.objectKey,
            url: "//nos.netease.com/" + Q5V.bucket + "/" + Q5V.objectKey
        };
        ckK1x(Q5V);
        if (!mJ9A[e4i.taskId]) {
            return
        }
        delete mJ9A[e4i.taskId];
        wB2x.gf7Y("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(m4q)
        });
        (e4i.onsuccess || bn5s).call(this, m4q)
    };
    var ckH1x = function (m4q, e4i) {
        (e4i.onerror || bn5s).call(this, m4q)
    };
    var ckG1x = function (m4q, Q5V, e4i) {
        Q5V.context = m4q.context;
        Q5V.beg = m4q.offset;
        var jk8c = Q5V.beg / Q5V.file.size;
        ckL1x(Q5V, {
            bucket: Q5V.bucket,
            objectKey: Q5V.objectKey,
            token: Q5V.token,
            context: Q5V.context,
            beg: Q5V.beg,
            updateTime: +(new Date)
        });
        jk8c = pa0x.DNS_GET + (pa0x.UPLOADED - pa0x.DNS_GET) * jk8c;
        EW5b(jk8c, e4i);
        if (Q5V.lastChunk) {
            ckI1x(m4q, Q5V, e4i)
        } else {
            SW1x(Q5V, e4i)
        }
    };
    var ckE1x = function (m4q, Q5V, e4i) {
        wB2x.gf7Y("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: m4q.data,
            body: m4q.extData,
            ext: JSON.stringify(Q5V),
            timging: +(new Date) - Q5V.chuckUploadStartTime
        });
        if (Q5V.urlIndex < Math.max(Q5V.urls.length - 1, 5)) {
            Q5V.urlIndex++;
            SW1x(Q5V, e4i)
        } else {
            ckH1x(m4q, e4i)
        }
    };
    var SW1x = function (Q5V, e4i) {
        if (!Q5V || Q5V.step == -1) {
            return
        }
        Q5V.end = Q5V.beg + ckT1x;
        if (Q5V.end >= Q5V.file.size) {
            Q5V.end = Q5V.file.size;
            Q5V.lastChunk = true
        }
        Q5V.chuckUploadStartTime = +(new Date);
        ckJ1x(Q5V, {
            onload: ckG1x.dS7L(this, Q5V, e4i),
            onerror: ckE1x.dS7L(this, Q5V, e4i)
        })
    };
    var ckD1x = function (m4q, Q5V, e4i) {
        Q5V.beg = m4q.offset;
        var jk8c = Q5V.beg / Q5V.file.size;
        jk8c = pa0x.DNS_GET + (pa0x.UPLOADED - pa0x.DNS_GET) * jk8c;
        EW5b(jk8c, e4i);
        SW1x(Q5V, e4i)
    };
    var ckC1x = function (m4q, Q5V, e4i) {
        Q5V.beg = 0;
        delete Q5V.context;
        bjv6p(Q5V, e4i)
    };
    var bxK0x = function (KV7O, Q5V, e4i) {
        Q5V.lastChunk = false;
        Q5V.urls = KV7O;
        Q5V.urlIndex = 0;
        EW5b(pa0x.DNS_GET, e4i);
        if (Q5V.fromExist) {
            delete Q5V.fromExist;
            var V5a = Q5V.urls[Math.min(Q5V.urlIndex, Q5V.urls.length - 1)],
                kS9J = Q5V.bucket,
                mF9w = Q5V.objectKey,
                er7k = Q5V.token,
                bL5Q = Q5V.context,
                nv0x = {},
                bw5B = {
                    context: bL5Q,
                    version: "1.0"
                };
            nv0x["x-nos-token"] = er7k;
            Q5V.reqId = v5A.bp5u(V5a + "/" + kS9J + "/" + mF9w + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: nv0x,
                query: bw5B,
                onload: ckD1x.dS7L(this, Q5V, e4i),
                onerror: ckC1x.dS7L(this, Q5V, e4i)
            })
        } else {
            Q5V.beg = 0;
            SW1x(Q5V, e4i)
        }
    };
    var ckA1x = function (m4q, Q5V, e4i) {
        m4q.code = oV0x.DNS_ERROR;
        (e4i.onerror || bn5s).call(this, m4q)
    };
    var bxP0x = function (j4n, e4i) {
        var m4q = j4n.result || {},
            kS9J = m4q.bucket,
            mF9w = m4q.objectKey,
            er7k = m4q.token,
            Q5V = mJ9A[e4i.taskId];
        if (!kS9J || !mF9w || !er7k || !Q5V) {
            m4q.code = oV0x.TOKEN_ERROR;
            (e4i.onerror || bn5s).call(this, m4q);
            return
        }
        Q5V.bucket = kS9J;
        Q5V.objectKey = mF9w;
        Q5V.docId = m4q.docId;
        Q5V.token = er7k;
        EW5b(pa0x.TOKEN_GET, e4i);
        if (location.protocol == "https:") {
            bxK0x(["//nosup-hz1.127.net"], Q5V, e4i)
        } else {
            Q5V.reqId = iG8y.ckz1x({
                bucket: kS9J,
                onload: bxK0x.dS7L(this, Q5V, e4i),
                onerror: ckA1x.dS7L(this, Q5V, e4i)
            })
        }
        Q5V.step = 1
    };
    var cky1x = function (m4q, e4i) {
        m4q.code = oV0x.TOKEN_ERROR;
        (e4i.onerror || bn5s).call(this, m4q)
    };
    var bjv6p = function (Q5V, e4i) {
        var dT7M = e4i.file,
            eS7L = dT7M.name || "",
            ey7r = eS7L.split(".").pop();
        iG8y.Zm4q(NEJ.X({
            filename: eS7L,
            ext: ey7r,
            onload: bxP0x.dS7L(this, e4i),
            onerror: cky1x.dS7L(this, e4i)
        }, e4i, function (q4u) {
            return k4o.ga7T(q4u) || k4o.kI9z(q4u)
        }))
    };
    var ckx1x = function (Q5V, e4i) {
        if (!Q5V || Q5V.step == -1) {
            return
        }
        Q5V.md5 = Q5V.spark.end();
        var ET5Y = ckM1x(Q5V) || {},
            kS9J = ET5Y.bucket,
            mF9w = ET5Y.objectKey,
            er7k = ET5Y.token;
        if (!kS9J || !mF9w || !er7k) {
            bjv6p(Q5V, e4i)
        } else {
            Q5V.context = ET5Y.context;
            Q5V.beg = ET5Y.beg;
            Q5V.fromExist = true;
            bxP0x({
                result: ET5Y
            }, e4i)
        }
    };
    var ckv1x = function (Dd5i, Q5V, e4i) {
        if (!Q5V || Q5V.step == -1) {
            return
        }
        Q5V.beg = Q5V.end;
        var jk8c = Q5V.beg / Q5V.file.size;
        jk8c = 0 + pa0x.MD5_DONE * jk8c;
        EW5b(jk8c, e4i);
        Q5V.spark.append(Dd5i.result);
        if (Q5V.lastChunk) {
            ckx1x(Q5V, e4i)
        } else {
            byc0x(Q5V, e4i)
        }
    };
    var cku1x = function (m4q, Q5V, e4i) {
        Q5V.md5 = "";
        bjv6p(Q5V, e4i)
    };
    var byc0x = function (Q5V, e4i) {
        if (!Q5V || Q5V.step == -1) {
            return
        }
        Q5V.end = Q5V.beg + ckS1x;
        if (Q5V.end >= Q5V.file.size) {
            Q5V.end = Q5V.file.size;
            Q5V.lastChunk = true
        }
        var Dd5i = new FileReader;
        Dd5i.onload = ckv1x.g4k(this, Dd5i, Q5V, e4i);
        Dd5i.onerror = cku1x.g4k(this, Dd5i, Q5V, e4i);
        Dd5i.readAsArrayBuffer(bwr0x.call(Q5V.file, Q5V.beg, Q5V.end))
    };
    iG8y.gu8m = function (e4i) {
        var dT7M = e4i.file,
            eS7L = dT7M.name || "",
            ey7r = eS7L.split(".").pop(),
            Df5k = ckQ1x();
        e4i.taskId = Df5k;
        mJ9A[Df5k] = {
            step: 0
        };
        EW5b(0, e4i);
        var Q5V = mJ9A[Df5k];
        Q5V.id = Df5k;
        Q5V.file = dT7M;
        Q5V.beg = 0;
        Q5V.lastChunk = false;
        Q5V.spark = new SparkMD5.ArrayBuffer;
        var ckt1x = e4i.onerror || bn5s;
        e4i.onerror = function () {
            if (!mJ9A[Df5k]) {
                return
            }
            delete mJ9A[Df5k];
            ckt1x.apply(this, arguments)
        };
        wB2x.gf7Y("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        byc0x(Q5V, e4i);
        return Df5k
    };
    iG8y.jj8b = function (C5H) {
        var Q5V = mJ9A[C5H];
        if (Q5V) {
            if (Q5V.step == 0) {
                delete mJ9A[C5H]
            } else {
                Q5V.step = -1;
                if (Q5V.reqId) {
                    v5A.jj8b(Q5V.reqId)
                }
                delete mJ9A[C5H]
            }
        }
    };
    iG8y.Zm4q = function () {
        var xL3x = function (m4q, e4i) {
            (e4i.onload || bn5s).call(this, m4q)
        };
        var zE3x = function (m4q, e4i) {
            (e4i.onerror || bn5s).call(this, m4q)
        };
        var byl0x = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function (e4i) {
            var XF2x = e4i.returnBody || byl0x;
            if (k4o.kI9z(XF2x)) {
                try {
                    JSON.stringify(XF2x)
                } catch (e) {
                    XF2x = byl0x
                }
            }
            return v5A.bp5u("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e4i.filename || "",
                    ext: e4i.ext || "",
                    type: e4i.type || oN0x.OTHER,
                    bucket: e4i.bucket || "",
                    local: e4i.local || false,
                    nos_product: e4i.nosProduct || 0,
                    return_body: XF2x
                },
                onload: xL3x.dS7L(this, e4i),
                onerror: zE3x.dS7L(this, e4i)
            })
        }
    }();
    iG8y.ckz1x = function () {
        var cks1x = "//wanproxy.127.net/lbs";
        var xL3x = function (m4q, e4i) {
            if (m4q.lbs) {}
            var KV7O = m4q.upload;
            if (!KV7O || !KV7O.length) {
                zE3x(m4q, e4i)
            }(e4i.onload || bn5s).call(this, KV7O)
        };
        var zE3x = function (m4q, e4i) {
            (e4i.onerror || bn5s).call(this, m4q)
        };
        return function (e4i) {
            var kS9J = e4i.bucket;
            return v5A.bp5u(cks1x, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: kS9J
                },
                onload: xL3x.dS7L(this, e4i),
                onerror: zE3x.dS7L(this, e4i)
            })
        }
    }();
    iG8y.Wl2x = function () {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v5A = c4g("nej.j"),
        cg5l = c4g("nej.ut"),
        bF5K = c4g("nej.ui"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        iG8y = c4g("nm.x.nos"),
        F5K = c4g("nm.m"),
        n4r = c4g("nm.l"),
        D5I = c4g("nm.w"),
        b4f, K5P;
    var gg7Z = a4e.hU8M('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    D5I.byt0x = NEJ.C();
    b4f = D5I.byt0x.O5T(bF5K.en7g);
    b4f.bZ5e = function () {
        this.ca5f = gg7Z
    };
    b4f.bR5W = function () {
        this.cc5h();
        this.by5D = this.o4s;
        this.gN8F = a4e.I5N(this.o4s, "j-file")[0];
        h4l.s4w(this.gN8F, "change", this.qs1x.g4k(this))
    };
    b4f.bj5o = function (e4i) {
        e4i = e4i || {};
        this.bk5p(e4i);
        this.gN8F.accept = e4i.accept || "*";
        this.vd2x = e4i
    };
    b4f.UT1x = function () {
        return a4e.kr9i(this.gN8F)
    };
    b4f.qs1x = function (d4h) {
        if (this.gN8F.value == "") return;
        var jI9z = this.gN8F.value.split("\\"),
            eS7L = jI9z.length > 0 ? jI9z[jI9z.length - 1] : jI9z[0],
            nE0x = (this.gN8F.files || [{}])[0];
        var fQ7J = {
            files: this.gN8F.files,
            filename: eS7L,
            size: nE0x.size,
            cancelUpload: false
        };
        this.w5B("onchange", fQ7J);
        if (fQ7J.cancelUpload) {
            this.gN8F.value = "";
            return
        }
        if (fQ7J.stopped) {
            return
        }
        this.JX7Q()
    };
    b4f.JX7Q = function () {
        if (this.gN8F.value == "") return;
        var jI9z = this.gN8F.value.split("\\"),
            eS7L = jI9z.length > 0 ? jI9z[jI9z.length - 1] : jI9z[0],
            ey7r = (eS7L.split(".") || []).pop(),
            nE0x = (this.gN8F.files || [{}])[0],
            Dt5y = (nE0x.type || "").split("/").shift();
        if (nE0x.size > 100 * 1024 * 1024) {
            return this.lR9I("onerror", {
                code: -200
            })
        }
        this.w5B("onuploading", 0);
        this.byW0x = iG8y.Zm4q(NEJ.X({
            onload: this.JU7N.dS7L(this, eS7L),
            onerror: this.lR9I.g4k(this)
        }, this.vd2x, function (q4u) {
            return k4o.ga7T(q4u) || k4o.kI9z(q4u)
        }))
    };
    b4f.JU7N = function (bW5b, eS7L) {
        var m4q = bW5b.result || {},
            kS9J = m4q.bucket,
            mF9w = m4q.objectKey,
            er7k = m4q.token;
        if (!kS9J || !mF9w || !er7k) {
            bW5b.code = -100;
            this.lR9I.call(this, bW5b);
            return
        }
        var nE0x = (this.gN8F.files || [{}])[0];
        var jT9K = a4e.cP6J(this.by5D);
        jT9K[0].value = mF9w;
        jT9K[1].value = er7k;
        if (nE0x.type && nE0x.type.indexOf("audio") == 0) {
            jT9K[3].value = "audio/mpeg"
        } else {
            jT9K[3].value = nE0x.type || ""
        }
        this.by5D.action = "//nos.netease.com/" + kS9J;
        this.Dx5C = m4q;
        this.oZ0x = eS7L;
        this.w5B("onuploading", .2);
        this.gu8m()
    };
    b4f.gu8m = function () {
        this.byW0x = v5A.gu8m(this.by5D, {
            type: "json",
            onload: this.tj1x.g4k(this),
            onerror: this.lR9I.g4k(this),
            onuploading: this.TC1x.g4k(this)
        })
    };
    b4f.jj8b = function () {
        v5A.jj8b(this.byW0x);
        this.by5D.reset()
    };
    b4f.tj1x = function (bW5b) {
        var er7k = this.Dx5C,
            eS7L = this.oZ0x,
            nE0x = (this.gN8F.files || [{}])[0],
            ku9l = {
                code: 200,
                fileName: eS7L,
                size: nE0x.size,
                bucket: er7k.bucket,
                docId: er7k.docId,
                objectKey: er7k.objectKey,
                url: "//nos.netease.com/" + er7k.bucket + "/" + er7k.objectKey
            };
        if (!bW5b) {
            bW5b = ku9l
        }
        if (!bW5b.code || bW5b.code == 200) {
            this.w5B("onsuccess", NEJ.X(ku9l, bW5b))
        } else {
            this.w5B("onerror", bW5b)
        }
        this.by5D.reset()
    };
    b4f.lR9I = function (bW5b) {
        this.w5B("onerror", bW5b);
        this.by5D.reset()
    };
    b4f.TC1x = function (jk8c) {
        this.w5B("onuploading", .2 + jk8c.loaded / jk8c.total * .8)
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v5A = c4g("nej.j"),
        cg5l = c4g("nej.ut"),
        bF5K = c4g("nej.ui"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        iG8y = c4g("nm.x.nos"),
        F5K = c4g("nm.m"),
        n4r = c4g("nm.l"),
        D5I = c4g("nm.w"),
        b4f, K5P;
    D5I.JO7H = NEJ.C();
    b4f = D5I.JO7H.O5T(cg5l.cz5E);
    b4f.bj5o = function (e4i) {
        e4i = e4i || {};
        this.bk5p(e4i);
        this.Ta1x = D5I.byt0x.B5G(NEJ.X({
            parent: e4i.parent,
            onchange: this.qs1x.g4k(this),
            onuploading: this.w5B.g4k(this, "onuploading"),
            onsuccess: this.w5B.g4k(this, "onsuccess"),
            onerror: this.w5B.g4k(this, "onerror")
        }, e4i, function (q4u) {
            return k4o.ga7T(q4u) || k4o.kI9z(q4u)
        }));
        if (e4i.multiple && iG8y.Wl2x()) {
            a4e.fU7N(this.Ta1x.UT1x(), "multiple", true)
        }
        this.vd2x = e4i
    };
    b4f.qs1x = function (e4i) {
        var eS7L = e4i.filename,
            ey7r = (eS7L.split(".") || []).pop();
        this.bzo0x = (e4i.files || [{}])[0];
        this.w5B("onchange", e4i);
        if (iG8y.Wl2x() && !e4i.stopped && !e4i.cancelUpload) {
            this.JX7Q(true);
            e4i.stopped = true
        }
    };
    b4f.UT1x = function () {
        return this.Ta1x.UT1x()
    };
    b4f.ckq1x = function () {
        return this.bzo0x
    };
    b4f.JX7Q = function (eA7t, dT7M) {
        dT7M = dT7M || this.bzo0x;
        if (iG8y.Wl2x()) {
            this.bzr0x = iG8y.gu8m(NEJ.X({
                file: dT7M,
                local: this.vd2x.bucket && this.vd2x.bucket.length,
                onuploading: this.w5B.g4k(this, "onuploading"),
                onsuccess: this.w5B.g4k(this, "onsuccess"),
                onerror: this.w5B.g4k(this, "onerror")
            }, this.vd2x, function (q4u) {
                return k4o.ga7T(q4u) || k4o.kI9z(q4u)
            }));
            return this.bzr0x
        } else if (!eA7t) {
            this.Ta1x.JX7Q()
        }
    };
    b4f.jj8b = function (C5H) {
        C5H = C5H || this.bzr0x;
        if (C5H) {
            iG8y.jj8b(C5H)
        }
        this.Ta1x.jj8b()
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        dM7F = c4g("nej.g"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v5A = c4g("nej.j"),
        fg7Z = c4g("nej.n"),
        H5M = c4g("nej.ut"),
        be5j = c4g("nej.ui"),
        D5I = c4g("nm.w"),
        n4r = c4g("nm.l"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        L5Q = c4g("nm.x.f"),
        iG8y = c4g("nm.x.nos"),
        b4f, K5P, bkg6a = {
            0: "",
            "-1": "不能添加重复图片",
            "-10": "最多只能添加9张",
            "-3": "请选择不超过5M的图片"
        },
        bjb6V = 5 * 1024 * 1024,
        cvr4v = 80,
        bzB0x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    D5I.bzC0x = NEJ.C();
    b4f = D5I.bzC0x.O5T(H5M.xA3x);
    b4f.baB4F = function () {
        return {
            x: this.Ad4h.clientWidth - this.o4s.offsetWidth,
            y: this.Ad4h.clientHeight - this.o4s.offsetHeight
        }
    };
    D5I.bit6n = NEJ.C();
    b4f = D5I.bit6n.O5T(be5j.en7g);
    b4f.bZ5e = function () {
        this.ca5f = "m-xwgt-share-upload"
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a4e.I5N(this.o4s, "j-flag");
        this.ZY4c = i4m.shift();
        this.EQ5V = i4m.shift();
        this.Nz8r = i4m.shift();
        this.bzM1x = {
            onchange: this.bzO1x.dS7L(this, 0),
            onerror: this.ej7c.g4k(this),
            onsuccess: this.tB2x.g4k(this),
            multiple: true,
            parent: this.EQ5V,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bcT5Y = {
            onchange: this.bzO1x.dS7L(this, 1),
            onerror: this.ej7c.g4k(this),
            onsuccess: this.tB2x.g4k(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.ckn1x = D5I.JO7H.B5G(this.bzM1x)
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.bcT5Y.parent = e4i.button;
        this.EN5S && this.EN5S.S5X();
        this.EN5S = D5I.JO7H.B5G(this.bcT5Y);
        this.o4s.style.display = "none";
        if (!!this.ew7p) {
            for (var i = this.ew7p.length - 1; i >= 0; i--) {
                a4e.cK6E(this.ew7p[i].element, false);
                if (this.ew7p[i].dragger) this.ew7p[i].dragger.S5X()
            }
        }
        this.ew7p = [];
        if (this.zR4V) {
            clearTimeout(this.zR4V)
        }
        this.Tg1x(0);
        this.MY8Q = 0;
        this.bS5X([
            [this.bzM1x.parent, "click", this.bAi1x.g4k(this)],
            [this.bcT5Y.parent, "click", this.bAi1x.g4k(this)]
        ])
    };
    b4f.bC5H = function () {
        h4l.hD8v(this.rF1x, "click");
        if (!!this.ew7p) {
            for (var i = this.ew7p.length - 1; i >= 0; i--) {
                a4e.cK6E(this.ew7p[i].element, false);
                if (this.ew7p[i].dragger) this.ew7p[i].dragger.S5X()
            }
        }
        this.ew7p = [];
        if (this.zR4V) {
            clearTimeout(this.zR4V)
        }
        this.zR4V = 0;
        this.EN5S && this.EN5S.S5X();
        delete this.EN5S;
        this.bG5L()
    };
    b4f.bAi1x = function (d4h) {
        if (!iG8y.Wl2x() && this.ew7p.doing) {
            h4l.bh5m(d4h)
        }
    };
    b4f.bzO1x = function (e4i, r4v) {
        var rG1x = e4i.files,
            ii8a;
        e4i.stopped = true;
        if (!rG1x) {
            if (e4i.filename) {
                rG1x = [{
                    name: e4i.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0, len = rG1x.length; i < len; i++) {
            if (!bzB0x.test(rG1x[i].name)) {
                this.bij6d({
                    path: rG1x[i].name,
                    index: r4v,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (rG1x[i].size > bjb6V) {
                this.bhv6p(-3);
                this.bij6d({
                    path: rG1x[i].name,
                    index: r4v,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bij6d({
                    path: rG1x[i].name,
                    file: rG1x[i],
                    index: r4v,
                    status: 0
                })
            }
        }
    };
    b4f.bij6d = function (rI1x) {
        if (this.ew7p.length >= 9) {
            this.bhv6p(-10, 3e3, this.bAB1x.g4k(this));
            return
        }
        this.ckm1x(rI1x);
        this.ew7p.push(rI1x);
        if (!!this.ew7p.length) {
            this.o4s.style.display = ""
        }
        if (this.ew7p.length >= 9) {
            this.EQ5V.style.display = "none"
        } else {
            this.EQ5V.style.display = ""
        }
        this.Ha6U()
    };
    b4f.Ha6U = function () {
        var beG5L = -1,
            bAN1x = 0;
        for (var i = 0, l = this.ew7p.length; i < l; i++) {
            if (this.ew7p[i].status == 1) {
                return
            }
            if (this.ew7p[i].status == 0 && beG5L < 0) {
                beG5L = i
            }
            if (this.ew7p[i].status == 2 || this.ew7p[i].status < 0) {
                bAN1x++
            }
        }
        var q4u = this.ew7p[beG5L];
        if (q4u) {
            (q4u.index == 0 ? this.ckn1x : this.EN5S).JX7Q(false, q4u.file);
            q4u.status = 1;
            this.ew7p.doing = q4u;
            this.w5B("onstartupload", {})
        } else if (bAN1x == this.ew7p.length) {
            this.w5B("onfinishupload", {})
        }
    };
    b4f.bdk5p = function () {
        return this.ew7p.doing || {}
    };
    b4f.ej7c = function (d4h) {
        var rI1x = this.bdk5p();
        rI1x.status = -4;
        rI1x.fail = "上传<br>失败";
        this.bAX1x(rI1x);
        this.ew7p.doing = null;
        this.Ha6U()
    };
    b4f.tB2x = function (d4h) {
        var rI1x = this.bdk5p(),
            ft7m = d4h.fileName.match(bzB0x);
        rI1x.picUrl = d4h.url;
        v5A.bp5u("/upload/event/img/v1", {
            query: {
                imgid: d4h.docId,
                format: ft7m[1]
            },
            type: "json",
            onload: this.bBf1x.g4k(this),
            onerror: this.bBf1x.g4k(this)
        })
    };
    b4f.bBf1x = function (d4h) {
        if (d4h && d4h.code == 200 && d4h.picInfo) {
            var rI1x = this.bdk5p();
            rI1x.status = 2;
            var bu5z = NEJ.X({}, d4h.picInfo);
            bu5z.originId = bu5z.originIdStr;
            bu5z.squareId = bu5z.squareIdStr;
            bu5z.rectangleId = bu5z.rectangleIdStr;
            bu5z.pcSquareId = bu5z.pcSquareIdStr;
            bu5z.pcRectangleId = bu5z.pcRectangleIdStr;
            bu5z.originJpgId = bu5z.originJpgIdStr || bu5z.originJpgId;
            rI1x.picInfo = bu5z;
            this.bAX1x(rI1x);
            this.ew7p.doing = null;
            this.Ha6U()
        } else {
            this.ej7c(d4h)
        }
    };
    b4f.bhv6p = function (r4v, jO9F, ge7X) {
        if (this.MY8Q < r4v) {
            return
        }
        if (this.zR4V) {
            clearTimeout(this.zR4V);
            this.zR4V = 0
        }
        if (jO9F) {
            this.Nz8r.innerText = bkg6a[r4v * 1];
            this.MY8Q = r4v;
            this.zR4V = setTimeout(this.Tg1x.g4k(this, r4v, ge7X), jO9F)
        } else {
            this.Nz8r.innerText = bkg6a[r4v];
            this.MY8Q = r4v
        }
        this.Nz8r.style.display = ""
    };
    b4f.Tg1x = function (r4v, ge7X) {
        if (r4v && this.MY8Q !== r4v) {
            return
        }
        this.MY8Q = 0;
        this.Nz8r.innerText = bkg6a[0];
        this.Nz8r.style.display = "none";
        ge7X && ge7X()
    };
    b4f.ckm1x = function (dT7M) {
        var j4n = {};
        if (dT7M.fail) {
            j4n.fail = dT7M.fail
        }
        var dA6u = a4e.bU5Z("m-xwgt-share-upload-preview", j4n);
        dT7M.element = a4e.mV0x(dA6u);
        h4l.s4w(a4e.I5N(dT7M.element, "del")[0], "mousedown", this.ckl1x.g4k(this, dT7M), false);
        this.ZY4c.insertBefore(dT7M.element, this.ZY4c.lastElementChild);
        dT7M.dragger = D5I.bzC0x.B5G({
            view: this.ZY4c.parentNode,
            body: dT7M.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.LS7L.g4k(this, dT7M),
            onchange: this.ckj1x.g4k(this, dT7M),
            ondragend: this.baI4M.g4k(this, dT7M)
        })
    };
    b4f.bAX1x = function (dT7M) {
        if (!dT7M || !dT7M.element) {
            return false
        }
        var j4n = {};
        if (dT7M.fail) {
            j4n.fail = dT7M.fail
        } else {
            j4n.url = dT7M.picUrl
        }
        a4e.z5E(dT7M.element, "z-fail");
        dT7M.element.firstChild.outerHTML = a4e.bU5Z("m-xwgt-share-upload-preview-img", j4n)
    };
    b4f.LS7L = function (q4u, jH9y) {
        a4e.z5E(q4u.element, "z-sel")
    };
    b4f.ckj1x = function (q4u, jH9y) {
        var cvu4y, gx8p = this.ew7p.length - 1,
            nj0x;
        for (var i = gx8p; i >= 0; i--) {
            a4e.x5C(this.ew7p[i].element, "z-jump");
            if (this.ew7p[i] == q4u) {
                nj0x = i
            } else {
                a4e.fz7s(this.ew7p[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var Qh0x = {
            x: 46 + 92 * (nj0x % 5) + jH9y.left,
            y: 46 + 92 * (nj0x / 5 >> 0) + jH9y.top
        };
        var bpn8f = Qh0x.x / 92 >> 0,
            bni7b = Qh0x.y / 92 >> 0,
            vA2x = Math.max(0, Math.min(gx8p, bni7b * 5 + bpn8f));
        if (vA2x == nj0x) {
            return
        }
        var ckf1x = vA2x < nj0x;
        for (var i = Math.min(vA2x, nj0x); i <= Math.max(vA2x, nj0x); i++) {
            if (i !== nj0x) {
                var bBp1x = i % 5;
                if (ckf1x) {
                    if (bBp1x == 4) {
                        a4e.fz7s(this.ew7p[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a4e.fz7s(this.ew7p[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bBp1x == 0) {
                        a4e.fz7s(this.ew7p[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a4e.fz7s(this.ew7p[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    };
    b4f.baI4M = function (q4u, jH9y) {
        var cvv4z, gx8p = this.ew7p.length - 1,
            nj0x;
        for (var i = gx8p; i >= 0; i--) {
            a4e.fz7s(this.ew7p[i].element, {
                left: "",
                top: ""
            });
            if (this.ew7p[i] == q4u) {
                nj0x = i
            }
        }
        a4e.x5C(q4u.element, "z-sel");
        var Qh0x = {
            x: 46 + 92 * (nj0x % 5) + jH9y.left,
            y: 46 + 92 * (nj0x / 5 >> 0) + jH9y.top
        };
        var bpn8f = Qh0x.x / 92 >> 0,
            bni7b = Qh0x.y / 92 >> 0,
            vA2x = Math.max(0, Math.min(gx8p, bni7b * 5 + bpn8f));
        if (vA2x == nj0x) {
            return
        }
        this.ZY4c.insertBefore(q4u.element, (this.ew7p[vA2x + (vA2x > nj0x ? 1 : 0)] || {}).element || this.EQ5V);
        this.ew7p.splice(nj0x, 1);
        this.ew7p.splice(vA2x, 0, q4u)
    };
    b4f.ckl1x = function (q4u, d4h) {
        a4e.cK6E(q4u.element, false);
        if (q4u.dragger) q4u.dragger.S5X();
        delete q4u.dragger;
        var r4v = -1;
        for (var i = this.ew7p.length - 1; i >= 0; i--) {
            if (this.ew7p[i] == q4u) {
                r4v = i;
                break
            }
        }
        this.ew7p.splice(r4v, r4v >= 0 ? 1 : 0);
        delete q4u;
        if (this.ew7p.length >= 9) {
            this.EQ5V.style.display = "none"
        } else {
            this.EQ5V.style.display = ""
        } if (!this.ew7p.length) {
            this.o4s.style.display = "none";
            this.Tg1x(0)
        } else {
            this.bAB1x()
        } if (this.ew7p.doing == q4u) {
            this.ew7p.doing = null
        }
        this.Ha6U()
    };
    b4f.bAB1x = function () {
        var bBr1x = false;
        for (var i = 0, len = this.ew7p.length; i < len; i++) {
            if (this.ew7p[i].status == -3) {
                bBr1x = true
            }
        }
        if (bBr1x) {
            this.bhv6p(-3)
        } else {
            this.Tg1x(-3)
        }
    };
    b4f.NB8t = function () {
        var ea7T = [];
        for (var i = this.ew7p.length - 1; i >= 0; i--) {
            if (this.ew7p[i].status == 2) {
                ea7T.unshift(this.ew7p[i].picInfo)
            }
        }
        return ea7T
    };
    H5M.fx7q.B5G({
        element: D5I.bit6n,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        fb7U = NEJ.R,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        be5j = c4g("nej.ui"),
        M5R = c4g("nej.ut"),
        b4f, K5P;
    if (!!M5R.mX0x) return;
    M5R.mX0x = NEJ.C();
    b4f = M5R.mX0x.O5T(M5R.Xg2x);
    K5P = M5R.mX0x.ch5m;
    b4f.bj5o = function (e4i) {
        this.ckd1x(e4i.more);
        this.ZT4X = a4e.y5D(e4i.sbody);
        this.bS5X([
            [this.ZT4X, "scroll", this.cka1x.g4k(this)]
        ]);
        var de6Y = e4i.delta;
        if (de6Y == null) de6Y = 30;
        this.Na8S = Math.max(0, de6Y);
        var cx5C = parseInt(e4i.count) || 0;
        this.iJ8B = Math.max(0, cx5C);
        var gl7e = parseInt(e4i.number) || 0;
        if (gl7e > 1 && gl7e <= cx5C) {
            this.Av4z = gl7e
        }
        this.bk5p(e4i)
    };
    b4f.bC5H = function () {
        this.bG5L();
        delete this.As4w;
        delete this.ZT4X;
        delete this.sb1x;
        delete this.Ub1x
    };
    b4f.yb3x = function (bi5n, br5w) {
        var bE5J = this.wU3x + (this.iJ8B - 1) * this.qO1x,
            fY7R = this.iJ8B * this.qO1x;
        return K5P.yb3x.call(this, bE5J, bi5n, fY7R, br5w)
    };
    b4f.ckd1x = function (SU1x) {
        this.As4w = a4e.y5D(SU1x);
        this.bS5X([
            [this.As4w, "click", this.nB0x.g4k(this)]
        ])
    };
    b4f.bpx8p = function (E5J) {
        E5J = E5J || {};
        if (this.sb1x || !E5J) return;
        if (!E5J.scrollHeight) E5J = a4e.og0x();
        var bi5n = a4e.hO8G(this.if8X),
            de6Y = bi5n.y + this.if8X.offsetHeight - E5J.scrollTop - E5J.clientHeight,
            bgu6o = E5J.scrollHeight <= E5J.clientHeight;
        if (de6Y <= this.Na8S || bgu6o && !this.sb1x) {
            this.nB0x()
        }
    };
    b4f.cka1x = function (d4h) {
        if (this.sb1x) return;
        this.bpx8p(h4l.U5Z(d4h))
    };
    b4f.xT3x = function (d4h) {
        K5P.xT3x.apply(this, arguments);
        if (!d4h.stopped) {
            this.JJ7C();
            var bi5n = 0;
            if (d4h.index > 1) {
                bi5n = this.wU3x + ((d4h.index - 1) * this.iJ8B - 1) * this.qO1x
            }
            this.hP8H = bi5n;
            this.nB0x()
        }
    };
    b4f.bLF4J = function (e4i) {
        if (!!this.Av4z) {
            var de6Y = e4i.offset > 0 ? this.qO1x : this.wU3x,
                fY7R = de6Y + this.qO1x * (this.Av4z - 1);
            this.hP8H = e4i.offset + fY7R;
            e4i.data.limit = fY7R;
            e4i.limit = fY7R;
            delete this.Av4z
        }
        return e4i
    };
    b4f.bgA6u = function (e4i) {
        delete this.Ub1x;
        K5P.bgA6u.apply(this, arguments);
        this.bBU1x()
    };
    b4f.bgy6s = function (d4h) {
        if (d4h.key != this.iy8q.key) return;
        switch (d4h.action) {
        case "refresh":
        case "append":
            delete this.Ub1x;
            break
        }
        K5P.bgy6s.apply(this, arguments)
    };
    b4f.Rd0x = function () {
        this.wx2x("onbeforelistload", "列表加载中...");
        a4e.Y5d(this.As4w, "display", "none")
    };
    b4f.bdx5C = function (i4m, bi5n, fY7R) {
        var br5w = i4m.length,
            bfb5g = i4m.loaded ? bi5n + fY7R >= br5w : bi5n + fY7R > br5w;
        this.hP8H = Math.min(this.hP8H, br5w);
        a4e.Y5d(this.As4w, "display", bfb5g ? "none" : "");
        if (bfb5g) this.sb1x = !0;
        if (this.iJ8B > 0) {
            var bu5z = this.yb3x(bi5n, i4m.length);
            if (this.bLT4X(bu5z.index, bu5z.total)) return !0;
            var de6Y = this.wU3x - this.qO1x,
                gl7e = this.iJ8B * this.qO1x;
            this.sb1x = (bi5n + fY7R - de6Y) % gl7e == 0 || bfb5g;
            a4e.Y5d(this.As4w, "display", this.sb1x ? "none" : "");
            this.bfT5Y(this.sb1x && bu5z.total > 1 ? "" : "none")
        }
    };
    b4f.bdO5T = function () {
        this.hP8H = 0;
        this.sb1x = !0;
        this.wx2x("onemptylist", "没有列表数据！")
    };
    b4f.Ra0x = function (dA6u, jH9y) {
        this.if8X.insertAdjacentHTML(jH9y || "beforeEnd", dA6u)
    };
    b4f.QO0x = function (gA8s) {
        this.fh7a = this.fh7a || [];
        if (k4o.ep7i(gA8s)) {
            fb7U.push.apply(this.fh7a, gA8s)
        } else {
            this.fh7a.push(gA8s)
        }
    };
    b4f.VP1x = function (d4h) {
        a4e.lV9M(this.ci5n);
        this.Qu0x(d4h, "onafteradd");
        var eA7t = d4h.flag;
        if (d4h.stopped || !eA7t) return;
        if (this.iJ8B > 0) {
            this.beH5M();
            return
        }
        this.hP8H += 1;
        eA7t == -1 ? this.baU4Y(d4h.data) : this.bNt4x(d4h.data)
    };
    b4f.VE1x = function (d4h) {
        this.Qu0x(d4h, "onafterdelete");
        if (d4h.stopped) return;
        if (this.iJ8B > 0) {
            this.beH5M();
            return
        }
        var C5H = d4h.data[this.eN7G.pkey];
        if (!!this.fh7a) {
            var q4u = a4e.bFn2x(C5H),
                r4v = k4o.cT6N(this.fh7a, q4u);
            if (r4v >= 0) {
                this.fh7a.splice(r4v, 1);
                this.hP8H -= 1
            }
            if (!!q4u) q4u.S5X()
        } else {
            var f4j = a4e.y5D(this.bKU4Y(C5H));
            if (!!f4j) this.hP8H -= 1;
            a4e.cK6E(f4j)
        } if (this.hP8H <= 0) this.nB0x()
    };
    b4f.bbl4p = function (bi5n, fY7R) {
        if (bi5n != this.hP8H) return;
        if (this.VM1x()) {
            this.sb1x = !1;
            this.bBU1x()
        }
    };
    b4f.bbc4g = function (bi5n, fY7R) {
        if (bi5n != 0) return;
        var HJ6D = this.R5W.gP8H(this.iy8q.key);
        for (var i = fY7R - 1; i >= 0; i--) {
            this.baU4Y(HJ6D[i])
        }
    };
    b4f.bBU1x = function () {
        var E5J = this.ZT4X;
        if (!E5J || this.sb1x) return;
        this.bpx8p(this.ZT4X)
    };
    b4f.fS7L = function () {
        delete this.sb1x;
        K5P.fS7L.apply(this, arguments)
    };
    b4f.nB0x = function () {
        if (!!this.Ub1x) return;
        this.Ub1x = !0;
        var bi5n = this.hP8H;
        this.hP8H += bi5n == 0 ? this.wU3x : this.qO1x;
        this.bLC4G(bi5n)
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        cN6H = c4g("nej.x"),
        M5R = c4g("nej.ut"),
        b4f;
    if (!!M5R.EA5F) return;
    M5R.EA5F = NEJ.C();
    b4f = M5R.EA5F.O5T(M5R.cz5E);
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.ip8h = e4i.event || "click";
        this.jE9v = e4i.selected || "js-selected";
        this.mT0x = e4i.disabled || "js-disabled";
        this.bBX1x = !!e4i.inverse;
        this.cjZ1x(e4i.list);
        this.Lb7U(e4i.index || 0)
    };
    b4f.bC5H = function () {
        var cjY1x = function (f4j) {
            this.bjI6C(f4j, !1)
        };
        return function () {
            this.bG5L();
            k4o.bc5h(this.bV5a, cjY1x, this);
            delete this.bV5a;
            delete this.ip8h;
            delete this.cn5s;
            delete this.mT0x;
            delete this.jE9v;
            delete this.bBX1x
        }
    }();
    b4f.cjZ1x = function () {
        var blR7K = function (q4u) {
            if (!q4u) return;
            this.bV5a.push(q4u);
            var r4v = this.bV5a.length - 1,
                da6U = this.baQ4U[r4v];
            if (!da6U) {
                da6U = this.Lb7U.g4k(this, r4v);
                this.baQ4U[r4v] = da6U
            }
            this.bS5X([
                [q4u, this.ip8h, da6U]
            ])
        };
        return function (i4m) {
            this.bV5a = [];
            if (!this.baQ4U) this.baQ4U = [];
            k4o.bc5h(i4m, blR7K, this)
        }
    }();
    b4f.bjI6C = function (E5J, cjX1x) {
        !!cjX1x && !this.bBX1x ? a4e.z5E(E5J, this.jE9v) : a4e.x5C(E5J, this.jE9v)
    };
    b4f.Lb7U = function (r4v, OZ9Q, j4n) {
        var E5J = this.bV5a[r4v];
        if (OZ9Q != !0 && (r4v == this.cn5s || !E5J || a4e.bA5F(E5J, this.mT0x))) {
            h4l.cf5k(arguments[1]);
            return this
        }
        var d4h = {
            index: r4v,
            last: this.cn5s,
            list: this.nr0x(),
            data: j4n || a4e.u5z(E5J, "value")
        };
        this.cn5s = r4v;
        E5J = this.bV5a[d4h.last];
        if (!!E5J) this.bjI6C(E5J, !1);
        E5J = this.bV5a[this.cn5s];
        this.bjI6C(E5J, !0);
        this.w5B("onchange", d4h);
        if (!d4h.nostop) h4l.cf5k(arguments[1]);
        return this
    };
    b4f.rV1x = function () {
        return this.cn5s
    };
    b4f.nr0x = function () {
        return this.bV5a
    };
    a4e.cjW1x = cN6H.cjW1x = function (bB5G, e4i) {
        var C5H = a4e.kr9i(bB5G);
        if (!C5H) return null;
        if (!M5R.VD1x(C5H, M5R.EA5F)) {
            e4i = e4i || {};
            e4i.list = !e4i.clazz ? a4e.cP6J(C5H) : a4e.I5N(C5H, e4i.clazz);
            delete e4i.clazz
        }
        return M5R.VD1x(C5H, M5R.EA5F, e4i || X5c)
    };
    cN6H.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        k4o = c4g("nej.u"),
        v5A = c4g("nej.j"),
        l4p = c4g("nm.x");
    var SETTING_KEY = "player-setting";
    var my9p = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    my9p = v5A.tG2x(SETTING_KEY) || my9p;
    l4p.bqf8X = function () {
        return my9p
    };
    l4p.EH5M = function (EF5K) {
        if (EF5K) {
            my9p = EF5K;
            v5A.vb2x(SETTING_KEY, EF5K)
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H5M = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        gT8L = c4g("nm.w.player.log");
    var kG9x = p4t.hJ8B.B5G();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var mw9n = function (t4x, bD5I, oX0x) {
        var cL6F = l4p.eP7I("{0} {1} {2}", k4o.iH8z(new Date, "yyyy-MM-dd HH:mm:ss"), t4x, bD5I);
        if (oX0x == LogLevel.ERROR) {
            kG9x.gf7Y("playerror", {
                message: bD5I
            })
        }
        if (oX0x >= LogLevel.INFO) {
            kG9x.crt3x(cL6F)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cL6F)
        }
    };
    gT8L.bT5Y = function () {
        mw9n("PLAY_ERROR", l4p.eP7I.apply(null, arguments), LogLevel.ERROR)
    };
    gT8L.op0x = function () {
        mw9n("PLAY_INFO", l4p.eP7I.apply(null, arguments), LogLevel.INFO)
    };
    gT8L.cvw4A = function () {
        mw9n("PLAY_DEBUG", l4p.eP7I.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        H5M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        D5I = c4g("nm.w"),
        ge7X = c4g("flash.cb");
    var dH7A = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Ey5D, Xk2x, tQ2x;
    D5I.cjU1x = function (t4x, dr6l) {
        if (t4x != "flash") {
            if (!Ey5D) {
                Ey5D = a4e.cQ6K("audio");
                k4o.bc5h(dH7A, function (t4x) {
                    h4l.s4w(Ey5D, t4x, onMediaCallBack)
                })
            }
            if (Ey5D && Ey5D.canPlayType && Ey5D.canPlayType("audio/mpeg")) {
                dr6l(new MediaWrap("audio"));
                return
            }
        }
        if (!Xk2x) {
            a4e.re1x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function (hc8U) {
                    Xk2x = hc8U;
                    k4o.bc5h(dH7A, function (t4x) {
                        ge7X[t4x] = onMediaCallBack;
                        Xk2x.addCallback(t4x, "flash.cb." + t4x)
                    });
                    dr6l(new MediaWrap("flash"))
                }.g4k(this)
            })
        } else {
            dr6l(new MediaWrap("flash"))
        }
    };

    function MediaWrap(Ev5A) {
        var lP9G;
        H5M.fx7q.B5G({
            element: this,
            event: dH7A.concat(["interrupt", "recover"])
        });
        lP9G = Ev5A == "audio" ? Ey5D : Xk2x;
        this.type = Ev5A;
        this.destroy = function () {};
        this.setSrc = function (V5a) {
            if (tQ2x != this) {
                var gx8p = tQ2x;
                if (gx8p) {
                    gx8p.interrupt()
                }
                tQ2x = this
            }
            if (Ev5A == "flash") {
                lP9G.setSrc(V5a)
            } else {
                lP9G.src = V5a
            }
        };
        this.play = function () {
            if (tQ2x != this) {
                var gx8p = tQ2x;
                if (gx8p) {
                    gx8p.interrupt();
                    tQ2x = this;
                    this.recover()
                } else {
                    tQ2x = this
                }
            }
            if (Ev5A == "flash") {
                lP9G.as_play()
            } else {
                lP9G.play()
            }
        };
        this.pause = function () {
            if (tQ2x != this) return;
            if (Ev5A == "flash") {
                lP9G.as_pause()
            } else {
                lP9G.pause()
            }
        };
        this.load = function () {
            if (tQ2x != this) return;
            if (Ev5A == "flash") {
                lP9G.as_load()
            } else {
                lP9G.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({
                type: "interrupt"
            })
        };
        this.recover = function () {
            onMediaCallBack({
                type: "recover"
            })
        };
        this.getMedia = function () {
            return lP9G
        };
        var nM0x = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k4o.bc5h(nM0x, function (T5Y) {
            var Ne8W = "get" + T5Y,
                Nw8o = "set" + T5Y;
            if (Ev5A == "flash") {
                if (!this[Ne8W]) {
                    this[Ne8W] = function () {
                        return lP9G[Ne8W]()
                    }
                }
                if (!this[Nw8o]) {
                    this[Nw8o] = function (value) {
                        lP9G[Nw8o](value)
                    }
                }
            } else {
                var bDd1x = T5Y.slice(0, 1).toLowerCase() + T5Y.slice(1);
                if (!this[Ne8W]) {
                    this[Ne8W] = function () {
                        return lP9G[bDd1x]
                    }
                }
                if (!this[Nw8o]) {
                    this[Nw8o] = function (value) {
                        lP9G[bDd1x] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d4h) {
        if (tQ2x) {
            h4l.w5B(tQ2x, d4h.type, d4h)
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        v5A = c4g("nej.j"),
        H5M = c4g("nej.ut"),
        cZ6T = c4g("nej.p"),
        D5I = c4g("nm.w"),
        l4p = c4g("nm.x"),
        gT8L = c4g("nm.w.player.log"),
        b4f;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bDe1x = false;
    D5I.fm7f = NEJ.C();
    b4f = D5I.fm7f.O5T(H5M.cz5E);
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.cs5x = {};
        this.bag4k(e4i.media);
        v5A.bp5u("/api/cdns", {
            type: "json",
            onload: function (d4h) {
                if (d4h.code) {
                    this.pm0x = d4h.data
                }
            }.g4k(this)
        })
    };
    b4f.bC5H = function () {
        this.bG5L();
        delete this.cs5x
    };
    b4f.TR1x = function (bd5i) {
        if (!bd5i) return;
        var Ah4l = this.cs5x.volume;
        if (this.dB6v) {
            this.dB6v.pause()
        }
        this.cs5x = {
            time: 0,
            id: bd5i.id,
            duration: bd5i.duration / 1e3,
            play: this.cs5x.play,
            stalledRetryCount: 0
        };
        if (Ah4l != null) {
            this.cs5x.volume = Ah4l
        }
        this.cs5x.loadState = LoadState.LOAD_START;
        this.bDC2x(bd5i.id);
        gT8L.op0x("play song id: {0}", bd5i.id)
    };
    b4f.eE7x = function () {
        if (this.cs5x.error) {
            this.cs5x.error = null;
            if (this.cs5x.error == ErrorType.INFO_GET_ERR || this.bDJ2x()) {
                this.bDL2x()
            } else {
                this.Ob9S()
            }
        } else {
            if (this.dB6v) {
                this.dB6v.play()
            }
        }
        this.cs5x.play = true;
        this.ow0x("play")
    };
    b4f.fq7j = function () {
        if (this.dB6v) {
            this.dB6v.pause()
        }
        this.cs5x.play = false;
        this.ow0x("pause")
    };
    b4f.nZ0x = function (bx5C) {
        if (this.dB6v) {
            this.dB6v.setCurrentTime(bx5C)
        }
        this.cs5x.time = bx5C;
        gT8L.op0x("seek to: {0}", bx5C)
    };
    b4f.bcy4C = function () {
        return this.cs5x.duration || 0
    };
    b4f.vg2x = function () {
        return !!this.cs5x.play
    };
    b4f.lO9F = function (KN7G) {
        this.cs5x.volume = KN7G;
        if (this.dB6v) {
            this.dB6v.setVolume(KN7G)
        }
    };
    b4f.bfo5t = function () {
        return this.cs5x.time
    };
    b4f.bag4k = function (t4x) {
        D5I.cjU1x(t4x, function (lP9G) {
            this.dB6v = lP9G;
            gT8L.op0x("media loaded: {0}", lP9G.type);
            this.bS5X([
                [this.dB6v, "loadedmetadata", this.cjS1x.g4k(this)],
                [this.dB6v, "ended", this.cjR1x.g4k(this)],
                [this.dB6v, "waiting", this.wo2x.g4k(this)],
                [this.dB6v, "play", this.sC1x.g4k(this)],
                [this.dB6v, "pause", this.bil6f.g4k(this)],
                [this.dB6v, "playing", this.Mg7Z.g4k(this)],
                [this.dB6v, "timeupdate", this.cjQ1x.g4k(this)],
                [this.dB6v, "progress", this.rE1x.g4k(this)],
                [this.dB6v, "stalled", this.bnv7o.g4k(this)],
                [this.dB6v, "interrupt", this.fq7j.g4k(this)],
                [this.dB6v, "recover", this.cjN1x.g4k(this)],
                [this.dB6v, "error", this.ej7c.g4k(this)]
            ]);
            if (this.cs5x) {
                if (this.cs5x.loadState == LoadState.LOAD_START || this.cs5x.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bpf8X();
                    if (this.cs5x.volume != null) {
                        this.dB6v.setVolume(this.cs5x.volume)
                    }
                }
            }
        }.g4k(this))
    };
    b4f.cjM1x = function (t4x) {
        this.Ip6j();
        this.dB6v.destroy();
        this.cs5x.loadState = LoadState.IN_SWITCH_MEDIA;
        this.wo2x();
        this.bag4k(t4x);
        gT8L.op0x("switch media")
    };
    b4f.cvx4B = function () {
        return this.dB6v
    };
    b4f.bDC2x = function () {
        this.wo2x();
        v5A.bp5u("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cs5x.id]),
                br: DEFAULT_BR
            },
            onload: this.bEU2x.g4k(this),
            onerror: this.bEU2x.g4k(this)
        })
    };
    b4f.bEU2x = function (d4h) {
        if (d4h.code == 200 && d4h.data && d4h.data.length) {
            var bu5z = d4h.data[0];
            if (!bu5z.url) {
                this.cs5x.error = ErrorType.INFO_GET_ERR;
                this.ow0x("error", {
                    code: this.cs5x.error
                });
                return
            }
            this.cs5x.playUrl = bu5z.url;
            this.cs5x.expireTime = (new Date).getTime() + bu5z.expi * 1e3;
            this.bpf8X()
        } else {
            this.cs5x.error = ErrorType.INFO_GET_ERR;
            this.ow0x("error", {
                code: this.cs5x.error
            });
            gT8L.bT5Y("info load error")
        }
    };
    b4f.bpf8X = function () {
        if (this.dB6v) {
            var V5a = this.cs5x.playUrl;
            if (this.cs5x.time > 0 && (this.cs5x.loadState == LoadState.IN_RE_GET_URL || this.cs5x.loadState == LoadState.IN_RE_GET_URL)) {
                V5a += "#t=" + this.cs5x.time
            }
            this.dB6v.setSrc(V5a);
            gT8L.op0x("load mp3: {0},loadState: {1}.", V5a, this.cs5x.loadState)
        }
    };
    b4f.bEW2x = function () {
        if (/#t=(\d+)$/.test(this.dB6v.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b4f.Ob9S = function () {
        var bx5C = parseInt(this.cs5x.time) || 0,
            cjJ1x = this.bEW2x();
        if (bx5C === cjJ1x) {
            this.dB6v.load()
        } else {
            this.dB6v.setSrc(this.cs5x.playUrl + "#t=" + bx5C)
        }
        this.cs5x.loadState = LoadState.IN_RELOAD;
        this.wo2x();
        gT8L.op0x("reload from: {0}", bx5C)
    };
    b4f.bDL2x = function () {
        this.cs5x.loadState = LoadState.IN_RE_GET_URL;
        this.bDC2x()
    };
    b4f.bFa2x = function () {
        var uf2x = getHost(this.cs5x.playUrl);
        if (uf2x) {
            for (var i = 0; i < this.pm0x.length; i++) {
                var ht8l = this.pm0x[i] || [],
                    r4v = ht8l.indexOf(uf2x);
                if (r4v >= 0 && ht8l.length > 1) {
                    return ht8l[(r4v + 1) % ht8l.length]
                }
            }
        }

        function getHost(V5a) {
            if (CDN_HOST_REG.test(V5a)) return RegExp.$1
        }
    };
    b4f.cjE1x = function () {
        this.cs5x.playUrl = this.cs5x.playUrl.replace(CDN_HOST_REG, this.bFa2x());
        this.cs5x.loadState = LoadState.IN_SWITCH_CDN;
        this.bpf8X();
        this.wo2x()
    };
    b4f.cjS1x = function () {
        if (this.cs5x.loadState == LoadState.LOAD_START) {
            this.cs5x.loadState = LoadState.LOADED_META;
            if (this.dB6v.type == "audio") {
                this.cs5x.duration = this.dB6v.getDuration()
            }
            this.ow0x("loadedmeta", {
                duration: this.cs5x.duration
            })
        } else {
            this.cs5x.loadState = LoadState.LOADED_META
        } if (this.cs5x.play) {
            this.dB6v.play()
        } else {
            this.dB6v.pause()
        } if (this.cs5x.time && parseInt(this.cs5x.time) != this.bEW2x()) {
            this.dB6v.setCurrentTime(this.cs5x.time)
        }
        this.EM5R();
        this.Mg7Z();
        bDe1x = true;
        gT8L.op0x("loaded meta")
    };
    b4f.cjR1x = function () {
        this.cs5x.ended = true;
        this.ow0x("ended")
    };
    b4f.wo2x = function () {
        if (!this.cs5x.waiting) {
            this.cs5x.waiting = true;
            this.cs5x.waitTimestamp = +(new Date);
            this.ow0x("waiting")
        }
    };
    b4f.Mg7Z = function () {
        this.cs5x.waiting = false;
        this.cs5x.waitTimestamp = 0;
        this.ow0x("playing")
    };
    b4f.sC1x = function () {
        this.ow0x("play")
    };
    b4f.bil6f = function () {
        this.ow0x("pause")
    };
    b4f.cjQ1x = function () {
        if (this.cs5x.loadState != LoadState.LOADED_META) return;
        var bx5C = this.dB6v.getCurrentTime();
        if (this.cs5x.waiting && bx5C > this.cs5x.time) {
            this.Mg7Z()
        }
        this.cs5x.time = bx5C;
        this.ow0x("timeupdate", {
            time: this.cs5x.time,
            duration: this.cs5x.duration
        })
    };
    b4f.rE1x = function (d4h) {
        if (this.cs5x.loadState != LoadState.LOADED_META) return;
        var m4q = {};
        if (d4h.data) {
            m4q.total = d4h.data.total;
            m4q.loaded = d4h.data.loaded
        } else {
            var vO2x = this.dB6v.getBuffered(),
                bx5C = this.dB6v.getCurrentTime(),
                oe0x = 0;
            for (var i = 0; i < vO2x.length; i++) {
                if (bx5C > vO2x.start(i) && bx5C < vO2x.end(i)) {
                    oe0x = vO2x.end(i);
                    break
                }
            }
            m4q.total = this.cs5x.duration;
            m4q.loaded = Math.min(oe0x, m4q.total)
        }
        this.ow0x("progress", m4q)
    };
    b4f.EM5R = function () {
        if (this.cs5x.retry) {
            clearTimeout(this.cs5x.retry.tid);
            this.cs5x.retry = null
        }
    };
    b4f.ej7c = function () {
        var bP5U = this.dB6v.getError();
        gT8L.bT5Y("media error code: {0}, netState: {1}", bP5U.code, this.dB6v.getNetworkState());
        if (bP5U.code == MediaError.MEDIA_ERR_NETWORK || bP5U.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var EF5K = l4p.bqf8X();
            if (!this.cs5x.retry) {
                this.cs5x.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cs5x.retry.tid)
            } if (this.cs5x.retry.level == RetryLevel.NONE) {
                if (this.bDJ2x()) {
                    this.cs5x.retry.level = RetryLevel.GET_URL;
                    this.bDL2x();
                    gT8L.op0x("Url expired, get url.")
                } else {
                    this.cs5x.retry.level = RetryLevel.RELOAD;
                    this.cs5x.retry.tid = setTimeout(this.Ob9S.g4k(this), 3e3);
                    gT8L.op0x("Reload mp3 3s later.")
                }
            } else if (this.cs5x.retry.level == RetryLevel.GET_URL) {
                this.cs5x.retry.level = RetryLevel.RELOAD;
                this.cs5x.retry.tid = setTimeout(this.Ob9S.g4k(this), 3e3);
                gT8L.op0x("Reload mp3 3s later.")
            } else if (this.cs5x.retry.level == RetryLevel.RELOAD) {
                this.cs5x.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bFa2x()) {
                    this.cs5x.retry.tid = setTimeout(this.cjE1x.g4k(this), 5e3);
                    gT8L.op0x("Switch CDN 5s later.")
                } else {
                    this.cs5x.retry.tid = setTimeout(this.Ob9S.g4k(this), 5e3);
                    gT8L.op0x("Reload mp3 5s later.")
                }
            } else if (!bDe1x && this.dB6v.type == "audio" && !EF5K.useFlash && !cZ6T.ZQ4U.mac && l4p.bdD5I().supported) {
                EF5K.useFlash = true;
                l4p.EH5M(EF5K);
                this.cjM1x("flash")
            } else {
                this.EM5R();
                this.fq7j();
                this.cs5x.error = ErrorType.NET_ERR;
                this.ow0x("error", {
                    code: this.cs5x.error
                });
                gT8L.bT5Y("error can not retry.")
            }
        } else {
            this.EM5R();
            this.fq7j();
            this.cs5x.error = ErrorType.UNKNOWN_ERR;
            this.ow0x("error", {
                code: this.cs5x.error
            });
            gT8L.bT5Y("error can not retry.")
        }
    };
    b4f.bnv7o = function () {
        var ha8S = 0,
            bFh2x = 5e3;
        return function () {
            this.wo2x();
            clearTimeout(ha8S);
            setTimeout(function () {
                var fK7D = +(new Date);
                if (this.cs5x.waiting && fK7D - this.cs5x.waitTimestamp >= bFh2x && this.cs5x.stalledRetryCount < MAX_STALLED_RETRY) {
                    gT8L.op0x("stalled too long retry.");
                    this.cs5x.stalledRetryCount++;
                    this.Ob9S()
                }
            }.g4k(this), bFh2x);
            gT8L.op0x("stalled")
        }
    }();
    b4f.bDJ2x = function () {
        var fK7D = +(new Date);
        return fK7D > this.cs5x.expireTime
    };
    b4f.cjN1x = function () {
        var bx5C = parseInt(this.cs5x.time) || 0;
        this.dB6v.setSrc(this.cs5x.playUrl + "#t=" + bx5C);
        this.cs5x.loadState = LoadState.IN_RELOAD;
        this.wo2x();
        gT8L.op0x("recover from: {0}", bx5C)
    };
    b4f.ow0x = function (W5b, j4n) {
        h4l.w5B(D5I.fm7f, "playaction", {
            action: W5b,
            data: j4n || {}
        })
    };
    H5M.fx7q.B5G({
        element: D5I.fm7f,
        event: ["playaction"]
    })
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        H5M = c4g("nej.ut"),
        D5I = c4g("nm.w"),
        b4f;
    D5I.DO5T = NEJ.C();
    b4f = D5I.DO5T.O5T(D5I.fm7f);
    K5P = D5I.DO5T.ch5m;
    b4f.cl5q = function () {
        this.cr5w()
    };
    b4f.cjD1x = function (bI5N) {
        this.TR1x(bI5N);
        this.eE7x()
    };
    b4f.bca4e = function () {
        this.fq7j()
    };
    b4f.uw2x = function (d4h) {
        if (d4h.action == "play") {
            this.fq7j()
        }
    };
    b4f.ow0x = function (W5b, j4n) {
        h4l.w5B(D5I.DO5T, "tmpplayaction", {
            action: W5b,
            data: j4n || {}, tmp: true
        })
    };
    b4f.rw1x = function () {
        return this.cs5x
    };
    H5M.fx7q.B5G({
        element: D5I.DO5T,
        event: ["tmpplayaction"]
    })
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        fg7Z = c4g("nej.n"),
        v5A = c4g("nej.j"),
        H5M = c4g("nej.ut"),
        be5j = c4g("nej.ui"),
        D5I = c4g("nm.w"),
        n4r = c4g("nm.l"),
        jK9B = c4g("nm.c"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f, K5P, Wo2x = [{
            item: "m-publish-search-single",
            type: 1
        }, {
            item: "m-publish-search-artist",
            type: 100
        }, {
            item: "m-publish-search-album",
            type: 10
        }, {
            item: "m-publish-search-mv",
            type: 1004
        }, {
            item: "m-publish-search-playlist",
            type: 1e3
        }, {
            item: "m-publish-search-djRadio",
            type: 1009
        }];
    var bdv5A = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    D5I.bee5j = NEJ.C();
    b4f = D5I.bee5j.O5T(be5j.en7g);
    b4f.cl5q = function (e4i) {
        this.cr5w(e4i);
        var i4m = a4e.I5N(this.o4s, "j-flag");
        this.cvy4C = i4m.shift();
        this.cjB1x = i4m.shift();
        this.EP5U = i4m.shift();
        this.bfL5Q = i4m.shift();
        this.bgh5m = [i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift()];
        this.Zh4l = i4m.shift();
        this.bFI2x = i4m.shift();
        this.qt1x = {
            list: this.bgh5m,
            selected: "z-curr",
            onchange: this.bFZ2x.g4k(this)
        };
        h4l.s4w(this.EP5U, "input", this.ZH4L.g4k(this));
        h4l.s4w(this.EP5U, "propertychange", this.ZH4L.g4k(this));
        h4l.s4w(this.EP5U, "keyup", this.ZH4L.g4k(this));
        h4l.s4w(this.cjB1x, "click", this.ZH4L.g4k(this));
        h4l.s4w(this.Zh4l, "click", this.cv5A.g4k(this));
        h4l.s4w(this.bFI2x, "click", function () {
            this.w5B("oncancel", {})
        }.g4k(this));
        this.R5W = p4t.DX5c.fX7Q();
        this.Ov9m = top.nm.w.DO5T.fX7Q();
        H5M.fx7q.B5G({
            element: top.nm.w.DO5T,
            event: ["tmpplayaction"]
        });
        this.qg1x = {
            limit: 100,
            offset: 0,
            parent: this.Zh4l,
            onbeforelistload: this.pb0x.g4k(this)
        };
        p4t.sk = "fuck" + a4e.u5z(this.bfL5Q, "xname") + "458";
        h4l.s4w(top.nm.w.DO5T, "tmpplayaction", this.uw2x.g4k(this))
    };
    b4f.bZ5e = function () {
        this.ca5f = "m-xwgt-publish-search"
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        if (!!this.zK3x) {
            this.zK3x.S5X();
            delete this.zK3x
        }
        this.qt1x.index = bdv5A[e4i.type || "song"];
        this.zK3x = H5M.EA5F.B5G(this.qt1x);
        this.EP5U.value = "";
        this.EP5U.focus();
        this.tA2x = "";
        this.cvz4D = 0;
        if (e4i.showMV == true) {
            this.bgh5m[bdv5A["mv"]].parentNode.style.display = "";
            a4e.z5E(this.bfL5Q, "srchtab-1")
        } else {
            this.bgh5m[bdv5A["mv"]].parentNode.style.display = "none";
            a4e.x5C(this.bfL5Q, "srchtab-1")
        } if (!!this.dt6n) {
            this.dt6n = this.dt6n.S5X()
        }
        if (e4i.hideBack) {
            a4e.z5E(this.bFI2x.parentNode, "f-hide")
        }
    };
    b4f.bC5H = function () {
        this.Ov9m.bca4e();
        this.bG5L()
    };
    b4f.ZH4L = function () {
        var value = this.EP5U.value.trim();
        if (value && value.length) {
            if (value != this.tA2x) {
                this.tA2x = value;
                this.bFZ2x({
                    index: this.zK3x.rV1x()
                })
            }
        } else {
            if (this.dt6n) {
                this.dt6n = this.dt6n.S5X()
            }
        }
        this.tA2x = value
    };
    b4f.cv5A = function () {
        var cjz1x = function (E5J) {
                return a4e.bA5F(E5J, "sitm") || a4e.bA5F(E5J, "itm") || a4e.bA5F(E5J, "mv-item")
            },
            cjy1x = function (E5J) {
                return a4e.bA5F(E5J, "ply")
            },
            bGy2x = function () {
                n4r.Z5e.N5S({
                    type: 2,
                    tip: "因合作方要求，该资源需付费使用"
                })
            },
            cju1x = function () {
                n4r.Z5e.N5S({
                    type: 2,
                    tip: "因合作方要求，该资源需下载后播放"
                })
            },
            bmH7A = function (bd5i) {
                if (bd5i && bd5i.privilege && bd5i.privilege.toast) {
                    v5A.bp5u("/api/song/toast", {
                        query: {
                            id: bd5i.id
                        },
                        type: "json",
                        onload: Ka7T.g4k(this),
                        onerror: Ka7T.g4k(this)
                    })
                } else {
                    Kb7U()
                }
            },
            Ka7T = function (P5U) {
                Kb7U((P5U || X5c).toast)
            },
            Kb7U = function (bD5I) {
                n4r.Z5e.N5S({
                    type: 2,
                    tip: bD5I || "因合作方要求，该资源暂时下架>_<"
                })
            };
        return function (d4h) {
            var DD5I = h4l.U5Z(d4h, cjy1x),
                i4m = h4l.U5Z(d4h, cjz1x),
                dZ7S = this.Ov9m.rw1x();
            if (!!i4m) {
                h4l.bh5m(d4h);
                this.Rb0x = a4e.u5z(i4m, "id");
                this.JB6v = a4e.u5z(i4m, "type");
                if (this.JB6v == 18) {
                    var bI5N = this.R5W.em7f(this.Rb0x),
                        oX0x = l4p.of0x(bI5N);
                    if (!DD5I) {
                        if (oX0x == 10) {
                            bGy2x();
                            return
                        } else if (oX0x == 100) {
                            bmH7A(bI5N);
                            return
                        }
                    } else {
                        if (oX0x == 10) {
                            bGy2x();
                            return
                        } else if (oX0x == 100) {
                            bmH7A(bI5N);
                            return
                        } else if (oX0x == 11) {
                            cju1x();
                            return
                        } else {
                            a4e.x5C(this.zG3x, "z-pause z-loading");
                            if (DD5I == this.zG3x && dZ7S.play && !dZ7S.ended) {
                                this.Ov9m.bca4e()
                            } else {
                                this.zG3x = DD5I;
                                this.Ov9m.cjD1x(bI5N)
                            }
                            return
                        }
                    }
                } else if (this.JB6v == 70) {
                    if (a4e.bA5F(i4m, "z-noprogram")) {
                        n4r.Z5e.N5S({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.cjt1x()
            }
        }
    }();
    b4f.cjt1x = function () {
        var hf8X = this.R5W.em7f(this.Rb0x),
            ru1x = l4p.bKl3x(this.JB6v, hf8X);
        ru1x.title = ru1x.title || "";
        ru1x.author = ru1x.author || "";
        ru1x.picUrl = ru1x.picUrl || "";
        ru1x.authors = ru1x.authors || "";
        if (this.JB6v == 70) {
            this.Rb0x = this.Rb0x.slice(0, -4)
        }
        this.w5B("onfinish", {
            id: this.Rb0x,
            type: this.JB6v,
            data: ru1x
        })
    };
    b4f.uw2x = function (d4h) {
        var j4n = d4h.data;
        if (!this.zG3x) {
            return
        }
        switch (d4h.action) {
        case "play":
            a4e.eK7D(this.zG3x, "z-pause z-play", "z-loading");
            break;
        case "pause":
        case "ended":
            a4e.x5C(this.zG3x, "z-pause z-loading");
            break;
        case "error":
            n4r.Z5e.N5S({
                type: 2,
                tip: "试听遇到问题，播放失败"
            });
            a4e.x5C(this.zG3x, "z-pause z-loading");
            break;
        case "playing":
            a4e.eK7D(this.zG3x, "z-loading", "z-pause");
            break;
        case "waiting":
            a4e.eK7D(this.zG3x, "z-pause", "z-loading");
            break
        }
    };
    b4f.cjs1x = function (d4h) {
        if (d4h.result.code == 407) {
            this.Zh4l.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.Zh4l.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b4f.bFZ2x = function (d4h) {
        if (!this.tA2x || d4h.index < 0 || d4h.index > 5) {
            return
        }
        this.Ov9m.bca4e();
        var bb5g = Wo2x[d4h.index],
            e4i = NEJ.X({}, this.qg1x);
        e4i.cache = {
            klass: p4t.DX5c,
            clear: true,
            onerror: this.cjs1x.g4k(this)
        };
        e4i.cache.lkey = "search-publish-" + bb5g.type + "-" + this.tA2x;
        e4i.item = {
            klass: bb5g.item,
            getRestrictLevel: l4p.of0x,
            dur2time: l4p.kv9m
        };
        if (!e4i.cache.data) {
            e4i.cache.data = {}
        }
        e4i.cache.data.s = this.tA2x;
        e4i.cache.data.type = bb5g.type;
        e4i.cache.data.isPub = true;
        if (bb5g.type == 1) {
            e4i.cache.data.hlpretag = '<span class="s-fc7">';
            e4i.cache.data.hlposttag = "</span>"
        }
        e4i.onemptylist = this.cjr1x.g4k(this, this.tA2x);
        if (!!this.DA5F) this.R5W.to1x(this.DA5F);
        if (!!this.dt6n) {
            this.dt6n = this.dt6n.S5X()
        }
        this.dt6n = H5M.mX0x.B5G(e4i);
        this.DA5F = e4i.cache.lkey
    };
    b4f.pb0x = function (d4h) {
        d4h.value = a4e.hV8N("m-publish-search-loading")
    };
    b4f.cjr1x = function (J5O, d4h) {
        a4e.dL7E(d4h.parent, "m-publish-emtpy-message", {
            key: J5O
        });
        d4h.stopped = true
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        cZ6T = c4g("nej.p"),
        v5A = c4g("nej.j"),
        cg5l = c4g("nej.ut"),
        bF5K = c4g("nej.ui"),
        D5I = c4g("nm.w"),
        b4f, K5P;
    var cjq1x = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    D5I.Dv5A = NEJ.C();
    b4f = D5I.Dv5A.O5T(bF5K.en7g);
    var gg7Z = a4e.ek7d("m-wgt-receiverInput");
    var cjp1x = a4e.ek7d("m-wgt-receiverList");
    var ib8T = a4e.rS1x(cjq1x);
    var cjn1x = a4e.ek7d('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b4f.cl5q = function (e4i) {
        this.bg5l = [];
        this.vu2x = e4i.receiver || null;
        this.cjm1x = e4i.unique || false;
        this.mz9q = e4i.err;
        this.bHW3x(this.bIa3x, e4i.uid);
        this.cr5w(e4i)
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.Ks7l();
        this.KA7t();
        this.WV2x();
        if (e4i.receiver) this.bdd5i(e4i.receiver.nickname, e4i.receiver.userId);
        a4e.Y5d(this.Aq4u, "display", "block");
        a4e.Y5d(this.bde5j, "cursor", "text");
        a4e.Y5d(this.Aq4u, "cursor", "text")
    };
    b4f.bZ5e = function () {
        var j4n = this.bIs3x();
        this.ca5f = a4e.hU8M(a4e.bU5Z(gg7Z, {
            receiver: this.vu2x,
            users: j4n
        }));
        this.kU9L = ib8T
    };
    b4f.bR5W = function () {
        this.cc5h();
        var bJ5O = a4e.I5N(this.o4s, "j-flag");
        var gA8s = a4e.I5N(this.o4s, "j-item");
        this.bde5j = bJ5O[0];
        this.bIv3x = bJ5O[1];
        this.dG7z = bJ5O[2];
        this.Aq4u = bJ5O[3];
        this.XK2x = bJ5O[4];
        this.bek5p = bJ5O[5];
        this.fh7a = gA8s;
        a4e.z5E(this.fh7a[0], "j-selected");
        h4l.s4w(this.dG7z, "keyup", this.beE5J.g4k(this));
        h4l.s4w(this.dG7z, "keydown", this.KF7y.g4k(this));
        h4l.s4w(this.dG7z, "focus", this.kk9b.g4k(this));
        h4l.s4w(this.XK2x, "click", this.cjk1x.g4k(this));
        h4l.s4w(this.bde5j, "click", this.cjj1x.g4k(this));
        h4l.s4w(document.body, "click", this.nl0x.g4k(this));
        h4l.s4w(this.dG7z, "input", this.fk7d.g4k(this));
        h4l.s4w(this.dG7z, "blur", this.oq0x.g4k(this))
    };
    b4f.bC5H = function (e4i) {
        h4l.lS9J(document.body, "click", this.nl0x.g4k(this));
        this.bG5L();
        this.WV2x();
        this.cjh1x();
        this.nl0x()
    };
    b4f.beE5J = function (d4h) {
        h4l.bh5m(d4h);
        var iQ8I = d4h.keyCode || d4h.which;
        var bl5q = this.dG7z.value;
        var br5w = this.fh7a.length;
        var qQ1x = a4e.I5N(this.o4s, "j-selected")[0];
        switch (iQ8I) {
        case 13:
            var kg9X = a4e.fU7N(qQ1x, "data-username");
            var hv8n = a4e.fU7N(qQ1x, "data-userId");
            this.bdd5i(kg9X, hv8n);
            this.nl0x();
            this.dG7z.value = "";
            break;
        case 38:
            var r4v = a4e.fU7N(qQ1x, "data-index") - 1 < 0 ? br5w - 1 : a4e.fU7N(qQ1x, "data-index") - 1;
            a4e.x5C(qQ1x, "j-selected");
            a4e.z5E(this.fh7a[r4v], "j-selected");
            break;
        case 40:
            var r4v = parseInt(a4e.fU7N(qQ1x, "data-index")) + 1 >= br5w ? 0 : parseInt(a4e.fU7N(qQ1x, "data-index")) + 1;
            a4e.x5C(qQ1x, "j-selected");
            a4e.z5E(this.fh7a[r4v], "j-selected");
            break;
        default:
            this.ud2x()
        }
    };
    b4f.KF7y = function (d4h) {
        var iQ8I = d4h.keyCode || d4h.which;
        var bl5q = this.dG7z.value;
        var r4v = a4e.I5N(this.o4s, "j-receiver").length - 1;
        if (iQ8I === 8 && bl5q === "") this.cjf1x(r4v)
    };
    b4f.fk7d = function (d4h) {
        var bl5q = this.dG7z.value;
        if (bl5q.length > 10) {
            this.dG7z.value = bl5q.substring(0, 10);
            return
        }
        cZ6T.dd6X.browser == "ie" && cZ6T.dd6X.version < "7.0" ? setTimeout(this.bhP6J.g4k(this), 0) : this.bhP6J();
        this.KA7t()
    };
    b4f.kk9b = function () {
        if (this.bg5l[0]) this.ud2x();
        else this.bHW3x(this.cje1x);
        a4e.Y5d(this.Aq4u, "display", "none")
    };
    b4f.oq0x = function () {
        var br5w = a4e.I5N(this.o4s, "j-receiver").length;
        if (this.dG7z.value.trim() == "" && br5w <= 0) a4e.Y5d(this.Aq4u, "display", "block")
    };
    b4f.bdd5i = function (kg9X, hv8n) {
        var EU5Z = this.Lk7d();
        if (EU5Z.length >= 10) {
            this.dw6q();
            return
        }
        var be5j;
        for (be5j = 0; be5j < EU5Z.length; be5j++) {
            if (EU5Z[be5j] == hv8n) {
                this.nl0x();
                return
            }
        }
        if (!kg9X || !hv8n) return;
        var f4j = a4e.dq6k(a4e.hU8M(a4e.bU5Z(cjn1x, {
            username: kg9X,
            userId: hv8n
        })));
        var bB5G = this.bIv3x.parentNode;
        if (this.cjm1x) {
            this.WV2x()
        }
        bB5G.insertBefore(f4j, this.bIv3x);
        this.dG7z.value = "";
        var br5w = a4e.I5N(this.o4s, "j-receiver").length;
        if (br5w > 1) a4e.Y5d(this.Aq4u, "display", "none");
        this.bhP6J();
        this.KA7t()
    };
    b4f.WV2x = function () {
        var Lr7k = a4e.I5N(this.o4s, "j-receiver");
        var be5j;
        if (Lr7k.length > 0) {
            for (be5j = 0; be5j < Lr7k.length; be5j++) {
                a4e.cK6E(Lr7k[be5j], false)
            }
        }
    };
    b4f.cjh1x = function () {
        this.dG7z.value = ""
    };
    b4f.cjf1x = function (r4v) {
        this.dw6q(!0);
        var Lr7k = a4e.I5N(this.o4s, "j-receiver");
        a4e.cK6E(Lr7k[r4v], false);
        this.KA7t()
    };
    b4f.ud2x = function () {
        var bl5q = this.dG7z.value;
        var bw5B = bl5q.trim().toLowerCase();
        var j4n;
        bw5B = bw5B.replace(/\[/g, "\\[");
        bw5B = bw5B.replace(/\]/g, "\\]");
        j4n = this.bIs3x(bw5B);
        this.cjb1x(j4n)
    };
    b4f.nl0x = function (d4h) {
        a4e.Y5d(this.XK2x, "display", "none")
    };
    b4f.dw6q = function (gC8u) {
        if (gC8u && this.mz9q) {
            a4e.Y5d(this.mz9q, "display", "none");
            return
        }
        if (this.mz9q) a4e.Y5d(this.mz9q, "display", "block")
    };
    b4f.cjk1x = function (d4h) {
        h4l.cf5k(d4h);
        var cU6O = d4h.target || d4h.srcElement;
        if (a4e.bA5F(cU6O, "j-flag")) return;
        var bB5G = cU6O.nodeName.toLowerCase() == "a" ? cU6O.parentNode : cU6O.parentNode.parentNode;
        var kg9X = a4e.fU7N(bB5G, "data-username");
        var hv8n = a4e.fU7N(bB5G, "data-userId");
        this.bdd5i(kg9X, hv8n);
        this.nl0x();
        a4e.Y5d(this.Aq4u, "display", "none")
    };
    b4f.cjj1x = function (d4h) {
        h4l.bh5m(d4h);
        var cU6O = d4h.target || d4h.srcElement;
        if (a4e.bA5F(cU6O.parentNode, "j-receiver")) {
            a4e.cK6E(cU6O.parentNode, false);
            this.dw6q(!0);
            this.KA7t()
        } else this.dG7z.focus()
    };
    b4f.bhP6J = function () {
        this.bek5p.innerHTML = this.dG7z.value;
        var dk6e = this.bek5p.offsetWidth + 2;
        a4e.Y5d(this.dG7z, "width", dk6e + "px")
    };
    b4f.KA7t = function () {
        var Rx0x = a4e.hO8G(this.dG7z, this.o4s).y;
        var bKd3x = Math.floor((Rx0x - 8) / 27);
        if (bKd3x < 0) return;
        a4e.Y5d(this.bde5j, "height", 19 + bKd3x * 29 + "px")
    };
    b4f.Ks7l = function () {
        var pw0x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < pw0x.length; i++) {
            a4e.Y5d(this.bek5p, pw0x[i], a4e.cW6Q(this.dG7z, pw0x[i]))
        }
    };
    b4f.bHW3x = function (dr6l, C5H) {
        var cS6M = C5H ? C5H : window.GUser.userId;
        var V5a = "/api/user/getfollows/" + cS6M;
        var fF7y = v5A.bp5u(V5a, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: dr6l.g4k(this),
            onerror: function (j4n) {
                this.bg5l = []
            }, onbeforerequest: function (j4n) {}
        })
    };
    b4f.bIa3x = function (j4n) {
        this.bg5l = JSON.parse(j4n).follow || [];
        var C5H = GUser.userId;
        for (var i = 0; i < this.bg5l.length; i++) {
            if (this.bg5l[i].userId == C5H) {
                this.bg5l.splice(i, 1);
                continue
            }
            this.bg5l[i].avatarUrl = this.bg5l[i].avatarUrl + "?param=30y30"
        }
    };
    b4f.cje1x = function (j4n) {
        if (this.bg5l[0]) return;
        this.bIa3x(j4n);
        this.ud2x()
    };
    b4f.bIs3x = function (bw5B) {
        var bw5B = bw5B ? bw5B : "";
        this.bg5l = this.bg5l[0] ? this.bg5l : [];
        var br5w = this.bg5l.length;
        var Ls7l = this.Lk7d();
        var rk1x = [];
        var Lt7m, LE7x, bmS7L;
        if (!this.bg5l[0]) return rk1x;
        for (var be5j = 0; be5j < br5w; be5j++) {
            bmS7L = false;
            for (var v5A = 0; v5A < Ls7l.length; v5A++) {
                if (this.bg5l[be5j].userId == Ls7l[v5A]) {
                    bmS7L = true;
                    break
                }
            }
            if (bmS7L) continue;
            Lt7m = this.bg5l[be5j].nickname.toLowerCase().search(bw5B);
            LE7x = this.bg5l[be5j].py ? this.bg5l[be5j].py.toLowerCase().search(bw5B) : -1;
            if (Lt7m !== -1 || LE7x != -1) rk1x.push(this.bg5l[be5j])
        }
        return rk1x
    };
    b4f.cjb1x = function (j4n) {
        a4e.dL7E(this.XK2x, cjp1x, {
            users: j4n
        });
        a4e.z5E(a4e.I5N(this.o4s, "j-item")[0], "j-selected");
        this.fh7a = a4e.I5N(this.o4s, "j-item");
        a4e.Y5d(this.XK2x, "display", "block")
    };
    b4f.Lk7d = function () {
        var rk1x = a4e.I5N(this.o4s, "j-receiver") || [];
        var hv8n = [];
        for (var i = 0; i < rk1x.length; i++) {
            hv8n.push(a4e.fU7N(rk1x[i], "data-id"))
        }
        return hv8n
    };
    b4f.cvA4E = function () {
        var hv8n = this.Lk7d();
        var rk1x = [];
        for (var i = 0; i < hv8n.length; i++) {
            for (var j = 0; j < this.bg5l.length; j++) {
                if (hv8n[i] == this.bg5l[j].userId) rk1x.push(this.bg5l[j])
            }
        }
        return rk1x
    };
    b4f.ciZ1x = function () {
        this.WV2x()
    };
    D5I.Dv5A.N5S = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n4r.nN0x.N5S({
                title: "登录"
            });
            return
        }
        e4i = e4i || {};
        if (e4i.parent === undefined) e4i.parent = document.body;
        !!this.eL7E && this.eL7E.S5X();
        this.eL7E = this.B5G(e4i)
    };
    D5I.Dv5A.bq5v = function () {
        !!this.eL7E && this.eL7E.S5X()
    };
    D5I.Dv5A.CR4V = function () {
        return this.nl0x()
    };
    D5I.Dv5A.cvB4F = function () {
        return this.ud2x()
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        b4f, K5P;
    n4r.EV5a = NEJ.C();
    b4f = n4r.EV5a.O5T(n4r.bgt6n);
    K5P = n4r.EV5a.ch5m;
    b4f.bj5o = function () {
        var CQ4U;
        var ciW1x = function (A5F, J5O) {
            CQ4U = CQ4U || [];
            if (J5O != "18") CQ4U.push({
                key: J5O,
                value: A5F
            })
        };
        return function (e4i) {
            this.bk5p(e4i);
            if (e4i.upwards) {
                a4e.z5E(this.o4s, "m-emts-up")
            } else {
                a4e.x5C(this.o4s, "m-emts-up")
            } if (e4i.rightwards) {
                a4e.z5E(this.o4s, "m-emts-right")
            } else {
                a4e.x5C(this.o4s, "m-emts-right")
            } if (!CQ4U) {
                var bv5A = l4p.cpM2x();
                k4o.ei7b(bv5A, ciW1x)
            }
            var br5w = CQ4U.length;
            CQ4U.splice(br5w - 2, 0, {
                key: "18",
                value: "186"
            });
            this.Tb1x = CQ4U;
            this.ciU1x = !!e4i.autoHide
        }
    }();
    b4f.bZ5e = function () {
        this.ca5f = "ntp-portrait"
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a4e.I5N(this.o4s, "j-flag");
        this.bK5P = i4m[0];
        this.ciT1x = i4m[1];
        this.ciS1x = i4m[2];
        this.ciQ1x = i4m[3];
        h4l.s4w(this.bK5P, "click", this.xO3x.g4k(this));
        h4l.s4w(this.ciT1x, "click", this.CK4O.g4k(this, 1));
        h4l.s4w(this.ciQ1x, "click", this.CK4O.g4k(this, 2))
    };
    b4f.brt8l = function (r4v) {
        this.Ul1x = r4v;
        var bi5n = (r4v - 1) * 50;
        var i4m = this.Tb1x.slice(bi5n, Math.min(bi5n + 50, this.Tb1x.length));
        this.bK5P.innerHTML = a4e.bU5Z("jst-portrait", {
            plist: i4m
        }, {
            purl: l4p.bBv1x
        });
        this.ciS1x.innerText = r4v + "/" + Math.ceil(this.Tb1x.length / 50)
    };
    b4f.CK4O = function (r4v) {
        var ciP1x = Math.ceil(this.Tb1x.length / 50);
        if (r4v == 1 && this.Ul1x == 1 || r4v == 2 && this.Ul1x == ciP1x) return;
        r4v == 1 ? this.brt8l(this.Ul1x - 1) : this.brt8l(this.Ul1x + 1)
    };
    b4f.xO3x = function (d4h) {
        var E5J = h4l.U5Z(d4h, "d:text");
        if (!E5J) return;
        var d4h = {
            url: a4e.u5z(E5J, "url"),
            text: a4e.u5z(E5J, "text")
        };
        this.w5B("onselect", d4h);
        if (this.ciU1x && !d4h.stopped) {
            this.bq5v()
        }
    };
    b4f.N5S = function () {
        K5P.N5S.call(this);
        this.brt8l(1)
    }
})();
(function () {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        cZ6T = c4g("nej.p"),
        ba5f = c4g("nej.h"),
        H5M = c4g("nej.ut"),
        jn8f = /^[#?]+/,
        CO4S = /#(.*?)$/,
        vD2x = window,
        bbT4X = !history.pushState || cZ6T.ZQ4U.android || !history.auto;
    var UB1x = function (V5a, bbZ4d) {
        vD2x.history[!bbZ4d ? "pushState" : "replaceState"](null, document.title, V5a)
    };
    var UL1x = function () {
        return location.parse(vD2x.location.href)
    };
    UB1x = UB1x.ee7X(function (d4h) {
        if (!bbT4X) return;
        var bf5k = d4h.args;
        d4h.stopped = !0;
        V5a = bf5k[0].replace(jn8f, "");
        !bf5k[1] ? vD2x.location.hash = V5a : vD2x.location.replace("#" + V5a)
    });
    UL1x = UL1x.ee7X(function (d4h) {
        if (!bbT4X) return;
        d4h.stopped = !0;
        var dF7y = CO4S.test(vD2x.location.href) ? RegExp.$1 : "";
        d4h.value = location.parse(dF7y.replace(jn8f, ""))
    });
    location.redirect = function (V5a, bbZ4d) {
        UB1x(V5a, bbZ4d);
        return this
    };
    location.active = function () {
        var eZ7S, V5a, iK8C, cH6B, PB9s;
        var bcd4h = function (hm8e) {
            if (!!cH6B) {
                cH6B = !1;
                return
            }
            var d4h = {
                oldValue: iK8C,
                newValue: UL1x()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h4l.w5B(location, "beforeurlchange", d4h);
                if (d4h.stopped) {
                    if (!!iK8C) {
                        cH6B = !0;
                        UB1x(iK8C.href, !0)
                    }
                    return
                }
            }
            V5a = vD2x.location.href;
            iK8C = d4h.newValue;
            h4l.w5B(location, "urlchange", iK8C);
            ba5f.boT8L(iK8C.href)
        };
        var bLK4O = function () {
            if (V5a != vD2x.location.href) bcd4h();
            eZ7S = requestAnimationFrame(bLK4O)
        };
        return function (bL5Q) {
            if (!!PB9s) return this;
            PB9s = !0;
            vD2x = bL5Q || window;
            if (bbT4X && "onhashchange" in window && cZ6T.ms9j.trident2) {
                h4l.s4w(vD2x, "hashchange", bcd4h);
                bcd4h()
            } else if (!eZ7S) {
                eZ7S = requestAnimationFrame(bLK4O)
            }
            return this
        }
    }();
    location.parse = function () {
        var fW7P = /^https?:\/\/.*?\//i,
            jn8f = /[?#]/;
        return function (V5a) {
            var m4q = {
                href: V5a
            };
            V5a = (V5a || "").replace(fW7P, "/").split(jn8f);
            var cx5C = 1;
            if (V5a[0] == "/" && (V5a[1] || "").indexOf("/") == 0) cx5C = 2;
            m4q.path = V5a.splice(0, cx5C).join("?");
            m4q.query = k4o.hp8h(V5a.join("&"));
            return m4q
        }
    }();
    location.same = function (V5a) {
        return UL1x().href == V5a
    };
    H5M.fx7q.B5G({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        fI7B = c4g("nm.ut");
    fI7B.sU1x = function (eQ7J) {
        var gv8n = {
            text: "",
            start: 0,
            end: 0
        };
        if (eQ7J.setSelectionRange) {
            gv8n.start = eQ7J.selectionStart;
            gv8n.end = eQ7J.selectionEnd;
            gv8n.text = gv8n.start != gv8n.end ? eQ7J.value.substring(gv8n.start, gv8n.end) : ""
        } else if (document.selection) {
            var i, Vn1x = document.selection.createRange(),
                wY3x = document.body.createTextRange();
            wY3x.moveToElementText(eQ7J);
            gv8n.text = Vn1x.text;
            gv8n.bookmark = Vn1x.getBookmark();
            for (i = 0; wY3x.compareEndPoints("StartToStart", Vn1x) < 0 && Vn1x.moveStart("character", -1) !== 0; i++) {
                if (eQ7J.value.charAt(i) == "\n") {
                    i++
                }
            }
            gv8n.start = i;
            gv8n.end = gv8n.text.length + gv8n.start
        }
        return gv8n
    };
    fI7B.Wa2x = function (eQ7J, gv8n) {
        var wY3x;
        if (!gv8n) {
            gv8n = {
                text: "",
                start: 0,
                end: 0
            }
        }
        eQ7J.focus();
        if (eQ7J.setSelectionRange) {
            eQ7J.setSelectionRange(gv8n.start, gv8n.end)
        } else if (eQ7J.createTextRange) {
            wY3x = eQ7J.createTextRange();
            if (eQ7J.value.length === gv8n.start) {
                wY3x.collapse(false);
                wY3x.select()
            } else {
                wY3x.moveToBookmark(gv8n.bookmark);
                wY3x.select()
            }
        }
    };
    fI7B.EY5d = function (eQ7J, gv8n, cL6F) {
        var gv8n = gv8n || {
            text: "",
            start: 0,
            end: 0
        };
        var bdw5B, bLY4c, wY3x, Nl8d, bMe4i, bMf4j, Co4s;
        this.Wa2x(eQ7J, gv8n);
        if (eQ7J.setSelectionRange) {
            bdw5B = eQ7J.value;
            bLY4c = bdw5B.substring(0, gv8n.start) + cL6F + bdw5B.substring(gv8n.end);
            bMe4i = bMf4j = gv8n.start + cL6F.length;
            Co4s = eQ7J.scrollTop;
            eQ7J.value = bLY4c;
            if (eQ7J.scrollTop != Co4s) {
                eQ7J.scrollTop = Co4s
            }
            eQ7J.setSelectionRange(bMe4i, bMf4j)
        } else if (eQ7J.createTextRange) {
            Nl8d = document.selection.createRange();
            Nl8d.text = cL6F;
            Nl8d.setEndPoint("StartToEnd", Nl8d);
            Nl8d.select()
        }
        h4l.w5B(eQ7J, "keyup")
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        cZ6T = c4g("nej.p"),
        k4o = c4g("nej.u"),
        cg5l = c4g("nej.ut"),
        D5I = c4g("nm.w"),
        fI7B = c4g("nm.ut"),
        b4f;
    D5I.bMj4n = NEJ.C();
    b4f = D5I.bMj4n.O5T(cg5l.cz5E);
    b4f.cl5q = function (e4i) {
        this.cr5w(e4i)
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.fM7F = e4i.txt;
        this.Ci4m = e4i.sgtsContainer;
        this.bMq4u = e4i.sgtsList[0];
        this.Xj2x = e4i.sgtsItem;
        this.oa0x = e4i.rangeData;
        this.Fc5h = e4i.atIndex;
        a4e.z5E(this.Xj2x[0], "selected-item");
        this.NC8u()
    };
    b4f.bC5H = function () {
        this.bG5L();
        h4l.lS9J(document.body, "keyup", this.bMP4T.g4k(this));
        h4l.lS9J(document.body, "click", this.bMQ4U.g4k(this))
    };
    b4f.NC8u = function () {
        this.bS5X([
            [document.body, "keyup", this.bMP4T.g4k(this)],
            [document.body, "click", this.bMQ4U.g4k(this)],
            [this.fM7F, "keydown", this.bMV4Z.g4k(this)],
            [this.fM7F, "keypress", this.bMV4Z.g4k(this)],
            [this.bMq4u, "click", this.bMW4a.g4k(this)],
            [this.bMq4u, "mouseover", this.Cg4k.g4k(this)]
        ])
    };
    b4f.Cg4k = function (d4h) {
        var cU6O = h4l.U5Z(d4h);
        var q4u = a4e.I5N(this.Ci4m, "selected-item");
        if (a4e.bA5F(cU6O, "j-sgt")) {
            a4e.x5C(q4u[0], "selected-item");
            a4e.z5E(cU6O, "selected-item")
        }
    };
    b4f.bMP4T = function (d4h) {
        var q4u = a4e.I5N(this.Ci4m, "selected-item");
        var br5w = this.Xj2x.length;
        var iQ8I = d4h.keyCode || d4h.which;
        var r4v, j4n;
        switch (iQ8I) {
        case 38:
            r4v = a4e.fU7N(q4u[0], "data-index") - 1 < 0 ? br5w - 1 : a4e.fU7N(q4u[0], "data-index") - 1;
            a4e.x5C(q4u[0], "selected-item");
            a4e.z5E(this.Xj2x[r4v], "selected-item");
            break;
        case 40:
            r4v = parseInt(a4e.fU7N(q4u[0], "data-index")) + 1 >= br5w ? 0 : parseInt(a4e.fU7N(q4u[0], "data-index")) + 1;
            a4e.x5C(q4u[0], "selected-item");
            a4e.z5E(this.Xj2x[r4v], "selected-item");
            break;
        case 13:
            this.bMW4a(d4h);
            break;
        case 27:
            this.nl0x();
            break;
        case 32:
            var bl5q = this.fM7F.value;
            var r4v = fI7B.sU1x(this.fM7F);
            if (bl5q.charAt(r4v.start - 1) !== " ") return;
            this.nl0x();
            break
        }
    };
    b4f.bMV4Z = function (d4h) {
        var iQ8I = d4h.keyCode || d4h.which;
        if (iQ8I === 13 || iQ8I === 38 || iQ8I === 40) {
            h4l.cf5k(d4h);
            d4h.keyCode = 0;
            d4h.which = 0;
            d4h.returnvalue = false
        }
    };
    b4f.bMQ4U = function (d4h) {
        var cU6O = d4h.target || d4h.srcElement;
        if (cU6O === this.fM7F) return;
        this.nl0x()
    };
    b4f.bMW4a = function (d4h) {
        h4l.bh5m(d4h);
        var q4u = a4e.I5N(this.Ci4m, "selected-item")[0];
        var qQ1x = d4h.target || d4h.srcElement;
        var t4x = d4h.type;
        if (a4e.bA5F(qQ1x, "lst")) return;
        if (t4x == "click") {
            a4e.x5C(q4u, "selected-item");
            a4e.z5E(qQ1x, "selected-item")
        } else qQ1x = q4u;
        var j4n = qQ1x.innerHTML + " ";
        this.nl0x();
        var gv8n = this.oa0x;
        gv8n.start = this.Fc5h + 1;
        if (cZ6T.dd6X.browser == "ie" && cZ6T.dd6X.version < "9.0") {
            this.fM7F.value = this.fM7F.value.substring(0, gv8n.start) + this.fM7F.value.substring(gv8n.end, this.fM7F.value.length);
            gv8n.end = gv8n.start
        }
        fI7B.EY5d(this.fM7F, gv8n, j4n);
        h4l.w5B(this.fM7F, "keyup")
    };
    b4f.nl0x = function (d4h) {
        if (!!this.Ci4m) a4e.Y5d(this.Ci4m, "display", "none");
        this.S5X()
    };
    b4f.ud2x = function (d4h) {
        if (!!this.Ci4m) a4e.Y5d(this.Ci4m, "display", "block")
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v5A = c4g("nej.j"),
        D5I = c4g("nm.w"),
        cg5l = c4g("nej.ut"),
        bF5K = c4g("nej.ui"),
        b4f;
    var ciN1x = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var ciM1x = a4e.ek7d("m-wgt-atlist");
    var ib8T = a4e.rS1x(ciN1x);
    D5I.bNe4i = NEJ.C();
    b4f = D5I.bNe4i.O5T(bF5K.en7g);
    b4f.cl5q = function (e4i) {
        this.fB7u = {};
        this.cr5w()
    };
    b4f.bj5o = function (e4i) {
        this.fB7u.txt = a4e.y5D(e4i.target);
        this.fB7u.data = e4i.data;
        this.fB7u.offset = e4i.offset;
        this.fB7u.rangeData = e4i.rangeData;
        this.fB7u.atIndex = e4i.atIndex;
        this.ciL1x(e4i);
        this.bk5p(e4i);
        this.fB7u.sgtsContainer = this.o4s;
        this.fB7u.sgtsList = a4e.I5N(this.o4s, "lst");
        this.fB7u.sgtsItem = a4e.I5N(this.o4s, "f-thide");
        this.EK5P(e4i);
        this.ciK1x = D5I.bMj4n.B5G(this.fB7u)
    };
    b4f.bC5H = function (e4i) {
        this.bG5L();
        this.ciK1x.S5X()
    };
    b4f.bZ5e = function () {
        this.kU9L = ib8T
    };
    b4f.bR5W = function () {
        this.cc5h()
    };
    b4f.ciL1x = function (e4i) {
        this.o4s = a4e.dq6k(a4e.hU8M(a4e.bU5Z(ciM1x, e4i.data)))
    };
    b4f.EK5P = function (e4i) {
        var bNn4r = a4e.I5N(this.o4s, "selected-item")[0];
        if (bNn4r) a4e.x5C(bNn4r, "selected-item");
        var cN6H = e4i.offset.x + "px";
        var gL8D = e4i.offset.y + "px";
        a4e.Y5d(this.o4s, "left", cN6H);
        a4e.Y5d(this.o4s, "top", gL8D)
    }
})();
(function () {
    var c4g = NEJ.P,
        v5A = c4g("nej.j"),
        fI7B = c4g("nm.ut");
    fI7B.bNs4w = function (bl5q) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var cO6I = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var Fd5i = bl5q.match(cO6I) || [];
        for (var be5j = 0; be5j < Fd5i.length; be5j++) {
            Fd5i[be5j] = Fd5i[be5j].split("@")[1]
        }
        Fd5i = Fd5i.reverse();
        var hv8n = GUser.userId;
        var ciJ1x = v5A.tG2x("mentioners" + hv8n) || [];
        var iZ8R = Fd5i.concat(ciJ1x);
        if (iZ8R.length > 10) iZ8R = iZ8R.slice(0, 10);
        v5A.vb2x("mentioners" + hv8n, iZ8R)
    };
    fI7B.ciH1x = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var hv8n = GUser.userId;
        return v5A.tG2x("mentioners" + hv8n) || []
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        cZ6T = c4g("nej.p"),
        v5A = c4g("nej.j"),
        k4o = c4g("nej.u"),
        cg5l = c4g("nej.ut"),
        D5I = c4g("nm.w"),
        fI7B = c4g("nm.ut"),
        b4f;
    D5I.bNE4I = NEJ.C();
    b4f = D5I.bNE4I.O5T(cg5l.cz5E);
    b4f.cl5q = function (e4i) {
        this.cr5w(e4i);
        this.bNI4M()
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.fM7F = e4i.txt;
        this.o4s = e4i.body;
        this.bNK4O = e4i.before;
        this.JZ7S = e4i.flag;
        this.ciG1x = e4i.after;
        this.pv0x = [];
        if (cZ6T.dd6X.browser != "ie") {
            setTimeout(function () {
                this.kT9K()
            }.g4k(this), 0)
        }
        this.NC8u()
    };
    b4f.bC5H = function () {
        this.bG5L();
        if (this.sZ1x) this.sZ1x.S5X();
        delete this.sZ1x
    };
    b4f.NC8u = function () {
        this.bS5X([
            [this.fM7F, "keyup", this.bNT4X.g4k(this, this.fM7F)],
            [this.fM7F, "click", this.bNT4X.g4k(this, this.fM7F)],
            [this.fM7F, "focus", this.kT9K.g4k(this)]
        ])
    };
    b4f.kT9K = function (d4h) {
        this.oa0x = fI7B.sU1x(this.fM7F)
    };
    b4f.bNI4M = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var cS6M = window.GUser.userId;
        var V5a = "/api/user/getfollows/" + cS6M;
        var fF7y = v5A.bp5u(V5a, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (j4n) {
                window.GFollowers = JSON.parse(j4n).follow
            }.g4k(this),
            onerror: function (j4n) {}, onbeforerequest: function (j4n) {}
        })
    };
    b4f.bOb4f = function (index) {
        var A5F = this.fM7F.value,
            bi5n, bhB6v, bhD6x, OD9u;
        this.bNK4O.innerHTML = k4o.dV7O(A5F.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var nW0x = a4e.I5N(this.bNK4O, "j-test");
        for (var be5j = 0; be5j < nW0x.length; be5j++) {
            nW0x[be5j].innerText = " "
        }
        this.JZ7S.innerHTML = A5F.charAt(index);
        this.ciG1x.innerHTML = k4o.dV7O(A5F.substr(index + 1, A5F.length));
        OD9u = parseInt(a4e.cW6Q(this.fM7F, "lineHeight"));
        a4e.Y5d(this.o4s, "display", "block");
        bhB6v = a4e.hO8G(this.JZ7S, this.o4s);
        bhD6x = a4e.hO8G(this.fM7F);
        a4e.Y5d(this.o4s, "display", "none");
        var cN6H = bhB6v.x + bhD6x.x;
        var gL8D = bhB6v.y + bhD6x.y + OD9u;
        bi5n = {
            x: cN6H,
            y: gL8D
        };
        this.ciF1x(bi5n)
    };
    b4f.bNT4X = function (eQ7J, d4h) {
        h4l.cf5k(d4h);
        var eQ7J = eQ7J;
        var A5F = eQ7J.value;
        var br5w = A5F.length;
        var r4v = fI7B.sU1x(eQ7J).start;
        var brM8E = 0;
        var iQ8I = d4h.keyCode || d4h.which;
        var iZ8R;
        this.oa0x = fI7B.sU1x(eQ7J);
        var brN8F = false;
        for (var i = 1; i < 20; i++) {
            iZ8R = r4v - i;
            if (A5F.charAt(iZ8R) === " ") break;
            if (A5F.charAt(iZ8R) === "@") {
                brN8F = true;
                this.Fc5h = brM8E = iZ8R;
                break
            }
        }
        if (brN8F && d4h.shiftKey === false && iQ8I !== 38 && iQ8I !== 40) {
            if (iQ8I !== 27 && iQ8I !== 13) {
                this.sZ1x ? this.sZ1x.S5X() : null;
                this.bOb4f(brM8E)
            }
        } else if (iQ8I !== 38 && iQ8I !== 40 && d4h.keyCode !== 32) {
            this.sZ1x ? this.sZ1x.S5X() : null
        }
    };
    b4f.ciF1x = function (bi5n) {
        var bi5n = bi5n;
        var j4n = this.yl3x();
        var e4i = {
            parent: document.body,
            offset: bi5n,
            data: j4n,
            target: this.fM7F,
            rangeData: this.oa0x,
            atIndex: this.Fc5h
        };
        this.sZ1x ? this.sZ1x.S5X() : null;
        this.sZ1x = D5I.bNe4i.B5G(e4i)
    };
    b4f.yl3x = function () {
        var ciE1x = fI7B.sU1x(this.fM7F).start;
        var ciD1x = this.Fc5h + 1;
        var brR8J = fI7B.ciH1x() || [];
        var brT9K = [];
        var bw5B = this.fM7F.value.substring(ciD1x, ciE1x).toLowerCase();
        bw5B = bw5B.replace(/\[/g, "\\[");
        bw5B = bw5B.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.pv0x = window.GFollowers[0] ? window.GFollowers : []
        } else this.pv0x = []; if (!this.pv0x[0]) this.bNI4M();
        for (var be5j = 0; be5j < brR8J.length; be5j++) {
            for (var v5A = 0; v5A < this.pv0x.length; v5A++) {
                if (this.pv0x[v5A].nickname == brR8J[be5j]) brT9K.push(this.pv0x[v5A])
            }
        }
        this.pv0x = k4o.bXY8Q(this.pv0x, brT9K, {
            union: true,
            begin: true
        });
        var ciC1x = this.pv0x.length;
        var ZB4F = [];
        var Lt7m, LE7x;
        if (!this.pv0x[0]) return {
            suggests: ZB4F
        };
        for (var i = 0; i < ciC1x; i++) {
            Lt7m = this.pv0x[i].nickname.toLowerCase().search(bw5B);
            LE7x = this.pv0x[i].py ? this.pv0x[i].py.toLowerCase().search(bw5B) : -1;
            if (Lt7m !== -1 || LE7x != -1) ZB4F.push(this.pv0x[i]);
            if (ZB4F.length === 10) break
        }
        return {
            suggests: ZB4F
        }
    };
    b4f.OX9O = function () {
        var gv8n = this.oa0x || {
            text: "",
            start: 0,
            end: 0
        };
        h4l.w5B(this.fM7F, "focus");
        fI7B.EY5d(this.fM7F, gv8n, "@");
        this.oa0x = fI7B.sU1x(this.fM7F);
        this.Fc5h = gv8n.start;
        this.bOb4f(this.Fc5h)
    };
    b4f.CR4V = function () {
        if (this.sZ1x) this.sZ1x.S5X()
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v5A = c4g("nej.j"),
        D5I = c4g("nm.w"),
        cg5l = c4g("nej.ut"),
        bF5K = c4g("nej.ui"),
        b4f;
    var ciz1x = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cix1x = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gg7Z = a4e.hU8M(cix1x);
    var ib8T = a4e.rS1x(ciz1x);
    D5I.Pq9h = NEJ.C();
    b4f = D5I.Pq9h.O5T(bF5K.en7g);
    b4f.cl5q = function (e4i) {
        this.fB7u = {};
        this.cr5w()
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.fB7u.txt = a4e.y5D(e4i.target);
        this.Ks7l();
        this.Pr9i = D5I.bNE4I.B5G(this.fB7u)
    };
    b4f.bC5H = function (e4i) {
        this.bG5L();
        this.Pr9i.S5X()
    };
    b4f.bZ5e = function () {
        this.ca5f = gg7Z;
        this.kU9L = ib8T
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a4e.cP6J(a4e.y5D(this.o4s));
        this.fB7u.body = this.o4s;
        this.fB7u.before = i4m[0];
        this.fB7u.flag = i4m[1];
        this.fB7u.after = i4m[2]
    };
    b4f.Ks7l = function () {
        var pw0x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < pw0x.length; i++) {
            if (pw0x[i] === "width" && a4e.cW6Q(this.fB7u.txt, pw0x[i]) == "100%") {
                a4e.Y5d(this.o4s, pw0x[i], this.fB7u.txt.offsetWidth + "px");
                continue
            }
            a4e.Y5d(this.o4s, pw0x[i], a4e.cW6Q(this.fB7u.txt, pw0x[i]))
        }
    };
    b4f.OX9O = function () {
        this.Pr9i.OX9O()
    };
    b4f.CR4V = function () {
        this.Pr9i.CR4V()
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        fb7U = NEJ.R,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H5M = c4g("nej.ut"),
        jK9B = c4g("nm.c"),
        Q5V = {},
        b4f;
    if (!!jK9B.bjx6r) return;
    jK9B.bjx6r = NEJ.C();
    b4f = jK9B.bjx6r.O5T(H5M.cz5E);
    b4f.cl5q = function () {
        this.cr5w()
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i)
    };
    b4f.bC5H = function () {
        this.bG5L()
    };
    b4f.BP4T = function (eJ7C, dr6l, bae4i) {
        if (Q5V[eJ7C]) {
            this.hA8s("register commonJST[" + eJ7C + "] duplicate");
            return
        }
        if (!k4o.ga7T(dr6l)) {
            dr6l = ctl.comJST.ciw1x(eJ7C, dr6l, bae4i)
        }
        Q5V[eJ7C] = dr6l
    };
    b4f.ciu1x = function (bak4o) {
        if (k4o.ep7i(bak4o)) {
            k4o.bc5h(bak4o, function (q4u) {
                ctl.comJST.BP4T.apply(this, q4u)
            }, this)
        } else if (k4o.kI9z(bak4o)) {
            k4o.ei7b(bak4o, function (es7l, J5O) {
                ctl.comJST.BP4T(J5O, es7l)
            })
        }
    };
    b4f.ciw1x = function (eJ7C, tt2x, bae4i) {
        tt2x = tt2x || {};
        NEJ.X(tt2x, {
            comJST: this.mK9B
        });
        if (tt2x.resetDataName && !k4o.ep7i(tt2x.resetDataName)) {
            tt2x.resetDataName = [tt2x.resetDataName]
        }
        return function () {
            var j4n = arguments[0],
                iT8L = arguments[1];
            if (tt2x.resetDataName) {
                var iZ8R = {};
                for (var i = 0, ii = tt2x.resetDataName.length; i < ii; i++) {
                    iZ8R[tt2x.resetDataName[i]] = arguments[i]
                }
                j4n = iZ8R;
                iT8L = arguments[ii]
            }
            NEJ.X(j4n, tt2x, dC6w);
            if (bae4i) {
                iT8L = iT8L || {};
                NEJ.X(iT8L, bae4i)
            }
            return a4e.bU5Z(eJ7C, j4n, iT8L)
        }
    };
    b4f.mK9B = function (eJ7C) {
        if (!Q5V[eJ7C]) {
            this.hA8s("commonJST[" + eJ7C + "] is unregister");
            return ""
        } else {
            return Q5V[eJ7C].apply(null, fb7U.slice.call(arguments, 1))
        }
    };
    b4f.dump = function () {
        return Q5V
    };
    b4f.hA8s = function (cij1x) {
        if (console && console.log) {
            console.log(cij1x)
        }
    };
    var dC6w = function (es7l, J5O) {
        return J5O == "resetDataName"
    };
    c4g("ctl").comJST = jK9B.bjx6r.fX7Q();
    a4e.cko1x({
        comJST: c4g("ctl").comJST.mK9B
    })
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        fb7U = NEJ.R,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H5M = c4g("nej.ut"),
        jK9B = c4g("nm.c"),
        l4p = c4g("nm.x"),
        Q5V = {},
        b4f;
    if (!!jK9B.blZ7S) return;
    jK9B.blZ7S = NEJ.C();
    b4f = jK9B.blZ7S.O5T(H5M.cz5E);
    b4f.cl5q = function () {
        this.cr5w();
        var e4i = {
            "com-mv-artists": function (fo7h, dE7x, AG4K, bmb7U) {
                return a4e.bU5Z("com-mv-artists", {
                    artists: fo7h,
                    clazz: dE7x,
                    boxClazz: bmb7U,
                    mark: AG4K || function (cB5G) {
                        return cB5G
                    }, escape: k4o.dV7O,
                    comJST: ctl.comJST.mK9B
                })
            }, "com-album-artists": function (fo7h, dE7x, AG4K, bmb7U) {
                return a4e.bU5Z("com-album-artists", {
                    artists: fo7h,
                    clazz: dE7x,
                    boxClazz: bmb7U,
                    mark: AG4K || function (cB5G) {
                        return cB5G
                    }, escape: k4o.dV7O,
                    comJST: ctl.comJST.mK9B
                })
            }, "com-artists-title": {
                resetDataName: ["artists"],
                escape: k4o.dV7O
            }, "com-user-type": function (cX6R, dE7x, kO9F, Rl0x, bsu9l) {
                return a4e.bU5Z("com-user-type", {
                    x: cX6R,
                    clazz: dE7x || "",
                    clazz2: typeof bsu9l == "undefined" ? "icn" : bsu9l,
                    before: kO9F || "",
                    after: Rl0x || "",
                    isEmptyObject: l4p.bHL3x
                })
            }
        };
        for (var C5H in e4i) {
            ctl.comJST.BP4T(C5H, e4i[C5H])
        }
    };
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i)
    };
    b4f.bC5H = function () {
        this.bG5L()
    };
    c4g("ctl").comJSTUtil = jK9B.blZ7S.fX7Q()
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        a4e = c4g("nej.e"),
        cZ6T = c4g("nej.p"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H5M = c4g("nej.ut"),
        v5A = c4g("nej.j"),
        D5I = c4g("nm.w"),
        fI7B = c4g("nm.ut"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        bmn7g = [2, 3],
        dD7w = ["sn", "db"],
        b4f, K5P, cig1x = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video"
        },
        Rw0x = {
            djprogram: "节目",
            album: "专辑",
            playlist: "歌单",
            song: "单曲",
            yunsong: "单曲",
            artist: "歌手",
            mv: "MV",
            topic: "音乐专栏",
            djradio: "电台",
            concert: "演出",
            video: "视频"
        },
        bsz9q = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by "
        },
        cie1x = {
            0: 13,
            1: 17,
            3: 19,
            4: 18,
            5: 21,
            6: 24,
            14: 70,
            17: 20
        },
        BC4G = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        };
    n4r.xd3x = NEJ.C();
    b4f = n4r.xd3x.O5T(n4r.dU7N);
    K5P = n4r.xd3x.ch5m;
    b4f.bj5o = function (e4i) {
        if (e4i.onclose === undefined) {
            e4i.onclose = this.bsG9x.g4k(this)
        }
        this.bk5p(e4i);
        this.xW3x = e4i.isPub;
        this.jc8U = e4i.rid || -1;
        this.el7e = e4i.type || -1;
        this.bnh7a = e4i.purl;
        this.PS9J = e4i.name || "";
        this.Qa9R = e4i.author || "";
        this.bnG7z = e4i.authors || "";
        this.Sb0x = e4i.actId;
        this.Se0x = e4i.actName;
        this.bsS9J = e4i.title;
        this.Sf0x = {};
        this.cid1x = e4i.mesg || "";
        this.cic1x = e4i.placeholder || "说点什么吧";
        this.boq8i = e4i.hideTip;
        this.chZ1x = e4i.videoDescription;
        this.chY1x = e4i.videoJumpUrl;
        var i4m, fK7D = +(new Date);
        try {
            i4m = top.localCache.y5D("user") || {}
        } catch (e) {
            i4m = {}
        }
        for (var i = 0, i4m = i4m.bindings || [], er7k; i < i4m.length; ++i) {
            er7k = !i4m[i].tokenJsonStr ? null : JSON.parse(i4m[i].tokenJsonStr);
            if (!er7k || er7k.expires_in === undefined) continue;
            var Sv0x = parseInt(er7k.expires_in),
                SC0x = parseInt(i4m[i].refreshTime),
                chT1x = (Sv0x + SC0x) * 1e3 - 5 * 60 * 1e3;
            if (chT1x > fK7D) this.Sf0x[i4m[i].type] = !0
        }
        this.vu2x = D5I.Dv5A.B5G({
            parent: this.SF0x,
            err: this.bts9j
        });
        if (this.gK8C) {
            this.gK8C.S5X()
        }
        this.gK8C = D5I.Pq9h.B5G({
            parent: document.body,
            target: this.eO7H
        });
        if (this.el7e == 24 || this.el7e == 21 || this.Bj4n()) {
            this.xJ3x.style.display = "none"
        } else {
            this.xJ3x.style.display = "";
            this.nu0x = D5I.bit6n.B5G({
                parent: this.bqI8A,
                button: this.xJ3x,
                onstartupload: this.btO9F.g4k(this, true),
                onfinishupload: this.btO9F.g4k(this, false)
            })
        } if (this.Bj4n()) {
            this.oA0x.innerText = "";
            a4e.z5E(this.oA0x, "info-video");
            a4e.z5E(this.bap4t, "f-hide")
        } else {
            a4e.x5C(this.bap4t, "f-hide")
        }
    };
    b4f.bC5H = function () {
        this.bG5L();
        if (this.vu2x) {
            this.vu2x.S5X();
            delete this.vu2x
        }
        if (this.gK8C) {
            this.gK8C.S5X();
            delete this.gK8C
        }
        if (this.nu0x) {
            this.nu0x.S5X();
            delete this.nu0x
        }
        if (this.lF9w) {
            this.lF9w.S5X();
            delete this.lF9w
        }
    };
    b4f.bZ5e = function () {
        this.ca5f = "m-wgt-sharewin"
    };
    b4f.bR5W = function () {
        this.cc5h();
        this.btZ9Q = a4e.cP6J(this.o4s)[0];
        var bo5t = a4e.I5N(this.o4s, "j-flag");
        this.px0x = bo5t.shift();
        this.bts9j = bo5t.shift();
        this.SF0x = bo5t.shift();
        this.eO7H = bo5t.shift();
        this.oA0x = bo5t.shift();
        this.baV4Z = bo5t.shift();
        this.chS1x = bo5t.shift();
        this.xJ3x = bo5t.shift();
        this.ci5n = bo5t.shift();
        this.bqI8A = bo5t.shift();
        this.xR3x = bo5t.shift();
        this.cvE4I = bo5t.shift();
        this.bap4t = bo5t.shift();
        this.ef7Y = bo5t.shift();
        this.Td1x = a4e.I5N(this.bap4t, "j-t");
        this.zK3x = H5M.EA5F.B5G({
            list: a4e.cP6J(this.px0x),
            selected: "z-slt",
            onchange: this.bbP4T.g4k(this)
        });
        if (cZ6T.dd6X.browser == "ie" && cZ6T.dd6X.version < "8.0") {
            a4e.Y5d(this.SF0x, "position", "relative");
            a4e.Y5d(this.SF0x, "zIndex", "10")
        }
        h4l.s4w(window, "snsbind", this.Qz0x.g4k(this));
        h4l.s4w(this.eO7H, "input", this.fk7d.g4k(this));
        h4l.s4w(this.eO7H, "keyup", this.sX1x.g4k(this));
        h4l.s4w(this.o4s, "click", this.cv5A.g4k(this));
        this.R5W = p4t.bgY6S.B5G();
        this.R5W.s4w("onshareall", this.Tk1x.g4k(this, 0));
        this.R5W.s4w("onshareerror", this.hW8O.g4k(this));
        this.R5W.s4w("onshareprivate", this.Tk1x.g4k(this, 1));
        this.Tq1x = p4t.yz3x.B5G();
        this.hA8s = p4t.hJ8B.B5G();
        try {
            this.QD0x = top.api.sharePermission
        } catch (e) {}
        if (!this.QD0x) {
            this.QD0x = BC4G;
            v5A.bp5u("/api/event/user/permission", {
                type: "json",
                onload: function (d4h) {
                    if (d4h.code == 200) {
                        this.QD0x = NEJ.EX(BC4G, d4h)
                    }
                }.g4k(this)
            })
        }
    };
    b4f.bbP4T = function (d4h) {
        d4h.index == 0 ? a4e.x5C(this.btZ9Q, "m-plshare") : a4e.z5E(this.btZ9Q, "m-plshare");
        this.SF0x.style.display = d4h.index == 0 ? "none" : "";
        this.chS1x.style.display = d4h.index == 0 ? "" : "none";
        this.xJ3x.style.display = d4h.index == 0 ? "" : "none";
        if (this.el7e == 24 || this.el7e == 21) {
            this.xJ3x.style.display = "none"
        }
        this.bts9j.style.display = "none";
        this.eO7H.value = "";
        this.bT5Y();
        this.AU4Y();
        if (d4h.index == 0) {
            var dk6e = a4e.cW6Q(this.eO7H, "width");
            if (dk6e == "auto" || !dk6e) {
                return
            } else {
                if (this.gK8C) {
                    this.gK8C.S5X()
                }
                this.gK8C = D5I.Pq9h.B5G({
                    parent: document.body,
                    target: this.eO7H
                })
            }
            this.bqI8A.style.display = ""
        } else {
            if (this.gK8C) {
                this.gK8C.S5X();
                delete this.gK8C
            }
            this.bqI8A.style.display = "none"
        }
    };
    b4f.cv5A = function (d4h) {
        var f4j = h4l.U5Z(d4h, "d:action");
        if (!f4j) return;
        if (a4e.u5z(f4j, "action") == "search") {
            h4l.cf5k(d4h)
        } else if (a4e.u5z(f4j, "default") === undefined) {
            h4l.cf5k(d4h)
        }
        switch (a4e.u5z(f4j, "action")) {
        case "txt":
            this.kT9K();
            break;
        case "search":
            if (this.Bj4n()) {
                top.location.href = this.chY1x
            } else if (this.xW3x && this.el7e != 24) {
                if (this.lF9w) {
                    this.lF9w.S5X()
                }
                this.lF9w = D5I.bee5j.B5G({
                    parent: this.o4s.parentNode,
                    onfinish: this.bck4o.g4k(this),
                    oncancel: this.chQ1x.g4k(this)
                });
                this.bcm4q = true;
                this.o4s.style.display = "none";
                this.AS4W(this.jc8U < 0 ? "添加音乐" : "更换音乐")
            }
            break;
        case "at":
            h4l.se1x(d4h);
            !!this.gy8q && this.gy8q.bq5v();
            this.gK8C.OX9O();
            this.fE7x();
            break;
        case "emot":
            h4l.se1x(d4h);
            !!this.gK8C && this.gK8C.CR4V();
            if (!this.gy8q) {
                this.gy8q = n4r.EV5a.B5G({
                    parent: this.baV4Z
                });
                this.gy8q.s4w("onselect", this.xO3x.g4k(this))
            }
            this.gy8q.N5S();
            break;
        case "upload":
            break;
        case "sns":
            h4l.bh5m(d4h);
            var bcP5U, bw5B, t4x = a4e.u5z(f4j, "type");
            if (!this.Sf0x[t4x]) {
                bcP5U = f4j.href.split("?");
                bw5B = k4o.hp8h(bcP5U[1]);
                bw5B["csrf_token"] = v5A.gF8x("__csrf");
                top.open(bcP5U[0] + "?" + k4o.cY6S(bw5B));
                return
            }
            var bv5A = {
                2: "sn",
                3: "db",
                4: "rr"
            };
            l4p.yj3x(f4j, "u-slg-" + bv5A[t4x] + "-gray");
            break;
        case "close":
            !!this.gy8q && this.gy8q.bq5v();
            this.bsG9x();
            break;
        case "share":
            h4l.bh5m(d4h);
            if (this.Bj4n()) {
                if (!a4e.bA5F(f4j, "u-btn2-2-dis")) {
                    this.chN1x()
                }
            } else if (a4e.bA5F(f4j, "u-btn2-2-dis")) {
                if (!this.QD0x.pubEventWithoutResource && this.jc8U < 0) {
                    this.chL1x()
                } else {}
            } else if (this.jc8U < 0 && !this.eO7H.value && this.nu0x && this.nu0x.NB8t().length == 0) {
                n4r.Z5e.N5S({
                    type: 2,
                    tip: "请输入内容"
                })
            } else {
                this.chI0x()
            }
            break
        }
    };
    b4f.chL1x = function () {
        var sh1x = 0,
            bcU5Z = function () {
                if (sh1x % 2) {
                    a4e.x5C(this.oA0x, "z-show")
                } else {
                    a4e.z5E(this.oA0x, "z-show")
                }
                sh1x++;
                if (sh1x > 5) {
                    clearInterval(eZ7S)
                }
            },
            eZ7S;
        return function () {
            sh1x = 0;
            clearInterval(eZ7S);
            eZ7S = setInterval(bcU5Z.g4k(this), 200)
        }
    }();
    b4f.Qz0x = function (m4q) {
        m4q = m4q.result;
        this.Sf0x[m4q.type] = !0;
        var r4v = k4o.cT6N(bmn7g, m4q.type),
            cd5i = "u-slg-" + dD7w[r4v] + "-gray";
        a4e.x5C(this.Td1x[r4v], cd5i)
    };
    b4f.bck4o = function (bu5z) {
        var j4n = bu5z.data;
        this.jc8U = bu5z.id;
        this.el7e = bu5z.type;
        this.o4s.style.display = "";
        this.AS4W(this.bsS9J);
        this.lF9w && this.lF9w.S5X();
        this.bcm4q = false;
        this.bnh7a = j4n.picUrl;
        this.PS9J = j4n.title || "";
        this.Qa9R = j4n.author || "";
        this.bnG7z = j4n.authors || "";
        this.chH0x();
        this.Uc1x()
    };
    b4f.chQ1x = function () {
        this.lF9w && this.lF9w.S5X();
        this.o4s.style.display = "";
        this.AS4W(this.bsS9J);
        this.bcm4q = false;
        this.Uc1x()
    };
    b4f.xO3x = function (d4h) {
        var bl5q = "[" + d4h.text + "]";
        fI7B.EY5d(this.eO7H, this.oa0x, bl5q);
        this.fE7x()
    };
    b4f.fk7d = function (d4h) {
        cZ6T.dd6X.browser == "ie" && cZ6T.dd6X.version < "7.0" ? setTimeout(this.fE7x.g4k(this), 0) : this.fE7x()
    };
    b4f.sX1x = function (d4h) {
        this.kT9K();
        if (d4h.keyCode == 8) this.fE7x()
    };
    b4f.fE7x = function () {
        this.kT9K();
        this.AU4Y()
    };
    b4f.AU4Y = function () {
        var br5w = Math.ceil(k4o.fi7b(this.eO7H.value.trim()) / 2);
        this.ci5n.innerText = 140 - br5w;
        br5w > 140 ? a4e.eK7D(this.ci5n, "s-fc4", "s-fc6") : a4e.eK7D(this.ci5n, "s-fc6", "s-fc4")
    };
    b4f.chI0x = function () {
        if (this.cu5z()) return;
        if (k4o.fi7b(this.eO7H.value.trim()) > 280) {
            this.bT5Y("字数超过140个字符");
            return
        }
        var t4x = this.zK3x.rV1x(),
            j4n;
        if (t4x == 0) {
            for (var i = 0, Fg5l = []; i < this.Td1x.length; ++i) {
                if (!a4e.bA5F(this.Td1x[i], "u-slg-" + dD7w[i] + "-gray")) Fg5l.push(bmn7g[i])
            }
            this.cu5z(!0);
            j4n = {
                id: this.jc8U,
                msg: this.eO7H.value.trim(),
                type: this.Uj1x(this.el7e),
                picUrl: this.bnh7a,
                snsTypes: Fg5l.join(","),
                isPub: this.xW3x
            };
            if (this.Sb0x > 0) {
                j4n.actId = this.Sb0x;
                if (this.Se0x) {
                    j4n.msg = "#" + this.Se0x + "#" + j4n.msg
                }
            }
            var mE9v = this.nu0x && this.nu0x.NB8t();
            if (mE9v && mE9v.length) {
                j4n.pics = mE9v
            }
            this.R5W.clj1x(j4n)
        } else {
            var rk1x = this.vu2x.Lk7d();
            if (rk1x.length <= 0) {
                this.bT5Y("请至少选择一位好友");
                return
            }
            this.R5W.cli1x({
                data: {
                    id: this.jc8U,
                    msg: this.eO7H.value.trim(),
                    type: this.Uj1x(this.el7e),
                    userIds: "[" + rk1x.join(",") + "]"
                }
            })
        }
    };
    b4f.chN1x = function () {
        if (this.cu5z()) {
            return
        }
        this.hA8s.gf7Y("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k4o.fi7b(this.eO7H.value.trim()) > 280) {
            this.bT5Y("字数超过140个字符");
            return
        }
        this.cu5z(!0);
        var j4n = {
                msg: this.eO7H.value.trim() || this.chZ1x || "",
                type: "video"
            },
            chG0x = {
                videoId: this.jc8U
            };
        if (this.Sb0x > 0) {
            j4n.actId = this.Sb0x;
            if (this.Se0x) {
                j4n.msg = "#" + this.Se0x + "#" + j4n.msg
            }
        }
        j4n.videoinfo = JSON.stringify(chG0x);
        this.R5W.clh1x({
            data: {
                videoId: this.jc8U,
                commit: true
            },
            data2: j4n,
            snsTypes: ""
        })
    };
    b4f.Tk1x = function (t4x, m4q) {
        this.cu5z(!1);
        this.bq5v();
        if (!this.boq8i) {
            if (this.Bj4n()) {
                n4r.Z5e.N5S({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                n4r.Z5e.N5S({
                    tip: "分享成功" + (m4q.point > 0 ? ' 获得<em class="s-fc6">' + m4q.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h4l.w5B(n4r.xd3x, "sharesuccess", {
            isPrivate: t4x,
            rid: this.jc8U,
            rtype: this.el7e,
            data: m4q.event
        });
        this.w5B("onshare")
    };
    b4f.hW8O = function (m4q) {
        this.cu5z(!1);
        var bD5I = "分享失败";
        if (m4q.code) {
            switch (m4q.code) {
            case 404:
                bD5I = "分享的资源不存在";
                break;
            case 407:
                bD5I = "输入内容包含有关键字";
                break;
            case 408:
                bD5I = "分享太快了，过会再分享吧";
                break;
            case 315:
                bD5I = m4q.message || "根据对方设置，你没有该操作权限";
                break;
            case 329:
                return l4p.eT7M({
                    clazz: "m-layer-w2",
                    btntxt: "知道了",
                    message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                })
            }
        }
        this.bT5Y(bD5I)
    };
    b4f.kT9K = function () {
        this.oa0x = fI7B.sU1x(this.eO7H)
    };
    b4f.bT5Y = function (bD5I) {
        this.dw6q(this.ef7Y, bD5I)
    };
    b4f.cu5z = function (cH6B) {
        return this.dJ7C(this.xR3x, cH6B, "分享", "分享中...")
    };
    b4f.Uj1x = function (js8k) {
        return cig1x[js8k] || ""
    };
    b4f.chD0x = function () {
        var eQ7J, tE2x = this.Uj1x(this.el7e);
        this.oA0x.style.display = "";
        if (this.jc8U < 0) {
            this.oA0x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.PS9J) {
                this.oA0x.style.display = "none";
                return
            }
            var Uo1x = this.xW3x && this.el7e != 24;
            eQ7J = (Rw0x[tE2x] ? Rw0x[tE2x] + "：" : "") + this.PS9J + (bsz9q[tE2x] || " ") + (tE2x == "mv" || tE2x == "album" ? this.bnG7z || this.Qa9R : this.Qa9R);
            a4e.dL7E(this.oA0x, "m-xwgt-share-infobar", {
                canChange: Uo1x,
                info: eQ7J
            });
            if (Uo1x) {
                a4e.x5C(this.oA0x, "z-dis")
            } else {
                a4e.z5E(this.oA0x, "z-dis")
            }
        }
        a4e.x5C(this.oA0x, "info-video")
    };
    b4f.chH0x = function () {
        var tE2x = this.Uj1x(this.el7e),
            eQ7J = (Rw0x[tE2x] ? Rw0x[tE2x] + "：" : "") + this.PS9J + (bsz9q[tE2x] || " ") + (tE2x == "mv" || tE2x == "album" ? this.bnG7z || this.Qa9R : this.Qa9R);
        Uo1x = this.xW3x && this.el7e != 24;
        if (this.Bj4n()) {} else {
            a4e.x5C(this.oA0x, "info-video");
            a4e.dL7E(this.oA0x, "m-xwgt-share-infobar", {
                canChange: Uo1x,
                isPub: this.xW3x,
                info: eQ7J
            })
        }
    };
    b4f.chC0x = function () {
        var Fh5m = this.eO7H.value;
        if (this.xW3x) {
            if (!!this.bcm4q) {
                return !!Fh5m && !!Fh5m.length || !!this.nu0x && this.nu0x.NB8t().length > 0
            } else {
                return !(this.jc8U < 0) || !!Fh5m && !!Fh5m.length || !!this.nu0x && this.nu0x.NB8t().length > 0
            }
        } else {
            return !!Fh5m && !!Fh5m.length || !!this.nu0x && this.nu0x.NB8t().length > 0
        }
    };
    b4f.Uc1x = function () {
        var bvm9d = false;
        if (!this.xW3x || this.QD0x.pubEventWithoutResource || !(this.jc8U < 0)) {
            bvm9d = true
        }
        if (bvm9d) {
            a4e.x5C(this.xR3x, "u-btn2-2-dis")
        } else {
            a4e.z5E(this.xR3x, "u-btn2-2-dis")
        }
    };
    b4f.btO9F = function (bet5y) {
        if (bet5y) {
            a4e.z5E(this.xR3x, "u-btn2-2-dis")
        } else {
            this.Uc1x()
        }
    };
    b4f.bsG9x = function (d4h) {
        if (d4h) {
            d4h.stopped = true
        }
        if (this.chC0x()) {
            l4p.gO8G({
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function (W5b) {
                    if (W5b == "ok") {
                        this.w5B("forceclose", {});
                        this.bq5v()
                    }
                }.g4k(this)
            })
        } else {
            this.w5B("forceclose", {});
            this.bq5v()
        }
    };
    b4f.AS4W = function (eG7z, dA6u) {
        this.nk0x.Ai4m(eG7z, dA6u)
    };
    b4f.UK1x = function (t4x) {
        this.hA8s.gf7Y("page", {
            type: t4x
        })
    };
    b4f.Bj4n = function () {
        return this.el7e == 39
    };
    b4f.N5S = function () {
        var chB0x = function (q4u, r4v) {
            var cd5i = "u-slg-" + dD7w[r4v] + "-gray";
            !this.Sf0x[bmn7g[r4v]] ? a4e.z5E(q4u, cd5i) : a4e.x5C(q4u, cd5i)
        };
        return function () {
            K5P.N5S.call(this);
            this.o4s.style.display = "";
            this.bT5Y();
            this.cu5z(!1);
            this.zK3x.Lb7U(0);
            this.eO7H.focus();
            this.eO7H.value = this.cid1x || "";
            this.eO7H.placeholder = this.cic1x || "";
            if (!this.Bj4n()) {
                this.chD0x()
            } else {
                a4e.z5E(this.oA0x, "info-video");
                a4e.dL7E(this.oA0x, "m-xwgt-share-videobar", {
                    title: this.PS9J,
                    picUrl: this.bnh7a
                })
            }
            this.fE7x();
            this.vu2x.ciZ1x();
            k4o.bc5h(this.Td1x, chB0x, this);
            this.kT9K();
            if (this.xW3x) {
                this.px0x.style.display = "none"
            } else {
                this.px0x.style.display = ""
            }
            this.Uc1x()
        }
    }();
    b4f.bq5v = function (d4h) {
        K5P.bq5v.call(this);
        !!this.gy8q && this.gy8q.bq5v();
        if (this.vu2x) {
            this.vu2x.S5X();
            delete this.vu2x
        }
        if (this.gK8C) {
            this.gK8C.S5X();
            delete this.gK8C
        }
        if (this.nu0x) {
            this.nu0x.S5X();
            delete this.nu0x
        }
        if (this.bvt9k) {
            this.bvt9k = this.bvt9k.S5X()
        }
        if (this.lF9w) {
            this.lF9w.S5X();
            delete this.lF9w
        }
    };
    l4p.mb9S = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e4i.title === undefined) {
            e4i.title = "分享"
        }
        if (e4i.actId && e4i.type != 39) {
            var t4x = cie1x[e4i.resourceType],
                dp6j = e4i.resourceJson,
                hf8X;
            if (k4o.fn7g(dp6j)) {
                try {
                    dp6j = JSON.parse(dp6j)
                } catch (e) {}
            }
            if (t4x) {
                hf8X = l4p.bKl3x(t4x, dp6j);
                e4i.name = hf8X.title;
                e4i.author = hf8X.author;
                e4i.picUrl = hf8X.picUrl;
                e4i.type = t4x;
                e4i.rid = (dp6j || []).id
            }
        }
        n4r.xd3x.N5S(e4i)
    };
    H5M.fx7q.B5G({
        element: n4r.xd3x,
        event: ["sharesuccess"]
    })
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        h4l = c4g("nej.v"),
        a4e = c4g("nej.e"),
        v5A = c4g("nej.j"),
        n4r = c4g("nm.l"),
        D5I = c4g("nm.w"),
        bF5K = c4g("nej.ui"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f, K5P;
    n4r.UP1x = NEJ.C();
    b4f = n4r.UP1x.O5T(n4r.dU7N);
    K5P = n4r.UP1x.ch5m;
    b4f.cl5q = function () {
        this.cr5w()
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a4e.I5N(this.o4s, "j-flag");
        h4l.s4w(i4m[0], "click", this.CB4F.g4k(this))
    };
    b4f.bZ5e = function () {
        this.ca5f = "m-import-ok"
    };
    b4f.bj5o = function (e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.title = "歌曲同步完成";
        this.bk5p(e4i)
    };
    b4f.bC5H = function () {
        this.bG5L()
    };
    b4f.CB4F = function (d4h) {
        this.bq5v();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b4f.Ay4C = function () {
        this.bq5v()
    };
    b4f.bsl9c = function (d4h) {
        if (d4h.keyCode == 13) this.Bq4u()
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        h4l = c4g("nej.v"),
        a4e = c4g("nej.e"),
        v5A = c4g("nej.j"),
        M5R = c4g("nej.p"),
        k4o = c4g("nej.u"),
        n4r = c4g("nm.l"),
        D5I = c4g("nm.w"),
        bF5K = c4g("nej.ui"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f, K5P;
    n4r.bvK0x = NEJ.C();
    b4f = n4r.bvK0x.O5T(n4r.dU7N);
    b4f.bZ5e = function () {
        this.ca5f = "m-programtips-layer"
    };
    b4f.bR5W = function () {
        this.cc5h();
        this.bV5a = a4e.I5N(this.o4s, "j-flag")
    };
    b4f.bj5o = function (e4i) {
        e4i.clazz = " m-layer-programtips";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "付费内容提示";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bk5p(e4i);
        this.gz8r = e4i.id;
        this.chA0x = e4i.radiotype;
        this.kw9n = location.protocol + "//" + (this.chz0x() || "music.163.com") + "/m/" + this.chA0x + "?id=" + this.gz8r;
        this.chy0x()
    };
    b4f.bC5H = function () {
        this.bG5L()
    };
    b4f.Ay4C = function () {
        this.bq5v()
    };
    b4f.CB4F = function (d4h) {
        this.w5B("onok", A5F);
        this.bq5v()
    };
    l4p.bvU0x = function (e4i) {
        n4r.bvK0x.B5G(e4i).N5S()
    };
    b4f.chy0x = function () {
        v5A.bp5u("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k4o.cY6S({
                url: this.kw9n,
                size: 180
            }),
            onload: function (j4n) {
                if (j4n.code == 200) {
                    this.chw0x(j4n.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.g4k(this)
        })
    };
    b4f.chz0x = function () {
        var chu0x = location.host;
        if (chu0x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b4f.chw0x = function (jC9t) {
        this.bV5a[0].style.backgroundImage = "url(" + jC9t + ")"
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        cZ6T = c4g("nej.p"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H5M = c4g("nej.ut"),
        v5A = c4g("nej.j"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        F5K = c4g("nm.m"),
        n4r = c4g("nm.l"),
        L5Q = c4g("nm.m.f"),
        b4f, K5P;
    F5K.cM6G = NEJ.C();
    b4f = F5K.cM6G.O5T(H5M.dn6h);
    b4f.bH5M = function () {
        var pg0x = !1;
        return function () {
            if (pg0x) return;
            pg0x = !0;
            this.bM5R();
            if (top == self) {
                return
            }
            this.sf1x = a4e.y5D("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bwa0x()
            }
            H5M.fx7q.B5G({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bS5X([
                [window, "scroll", this.xU3x.g4k(this)],
                [document, "keyup", this.cht0x.g4k(this)],
                [document.body, "click", this.rL1x.g4k(this)],
                [document, "mouseup", this.chr0x.g4k(this)],
                [this.sf1x, "click", this.Jw6q.g4k(this)],
                [p4t.rK1x, "message", this.tk1x.g4k(this)]
            ]);
            l4p.clr1x(document.body);
            this.xU3x();
            if (this.xV3x !== false && typeof GUser !== "undefined" && GUser.userId > 0) p4t.rK1x.fX7Q().uT2x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (cZ6T.dd6X.browser == "ie" && parseInt(cZ6T.dd6X.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var gp7i = top.player.getPlaying();
                    if (gp7i && gp7i.track && gp7i.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + gp7i.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.xf3x.g4k(this);
            this.kh9Y = p4t.hJ8B.B5G();
            window.log = this.mw9n.g4k(this);
            var rt1x = location.search;
            if (rt1x) {
                var bw5B = rt1x.substr(rt1x.indexOf("?") + 1),
                    fL7E = k4o.hp8h(bw5B);
                if (fL7E && fL7E["_hash"]) location.hash = fL7E["_hash"]
            }
        }
    }();
    b4f.cht0x = function (d4h) {
        var f4j = h4l.U5Z(d4h);
        try {
            if (d4h.keyCode == 80 && l4p.bGC2x() || ["textarea", "input"].indexOf(f4j.tagName.toLowerCase()) >= 0) return;
            h4l.w5B(top.document, "keyup", {
                ctrlKey: d4h.ctrlKey,
                keyCode: d4h.keyCode
            })
        } catch (e) {}
    };
    b4f.rL1x = function (d4h) {
        var f4j = h4l.U5Z(d4h);
        if (f4j && f4j.tagName == "INPUT") return;
        var f4j = h4l.U5Z(d4h, "d:pid");
        if (f4j) {
            h4l.cf5k(d4h);
            var oz0x = a4e.u5z(f4j, "pid"),
                xY3x = a4e.u5z(f4j, "ptype"),
                W5b = a4e.u5z(f4j, "action") || "play";
            switch (W5b) {
            case "subscribe":
                l4p.ly9p({
                    tracks: [oz0x]
                });
                break
            }
        }
        f4j = h4l.U5Z(d4h, "d:resAction");
        if (f4j && f4j.className.indexOf("-dis") == -1) {
            var cI6C = a4e.u5z(f4j, "resId"),
                t4x = a4e.u5z(f4j, "resType"),
                bgS6M = a4e.u5z(f4j, "resRadiotype"),
                bgT6N = a4e.u5z(f4j, "resRadioid"),
                dI7B = a4e.u5z(f4j, "resFrom"),
                j4n = a4e.u5z(f4j, "resData"),
                W5b = a4e.u5z(f4j, "resAction"),
                bmH7A = a4e.u5z(f4j, "resCopyright"),
                VR1x = a4e.u5z(f4j, "resAuditstatus");
            if (W5b != "log" && W5b != "bilog") h4l.cf5k(d4h);
            switch (W5b) {
            case "log":
                j4n = (j4n || "").split("|");
                if (!!j4n[0]) {
                    var bb5g = {
                        id: cI6C,
                        alg: j4n[2] || "itembased",
                        scene: j4n[3],
                        position: j4n[1] || 0
                    };
                    if (!!j4n[4]) bb5g.srcid = j4n[4];
                    window.log(j4n[0], bb5g)
                }
                break;
            case "bilog":
                var bcr4v = a4e.u5z(f4j, "logAction"),
                    bcn4r = a4e.u5z(f4j, "logJson");
                window.log(bcr4v, bcn4r);
                break;
            case "share":
                if (VR1x && VR1x == 1) {
                    l4p.ia8S("由于版权问题，该节目暂时无法分享。")
                } else {
                    share(cI6C, t4x, a4e.u5z(f4j, "resPic"), a4e.u5z(f4j, "resName"), a4e.u5z(f4j, "resAuthor"), a4e.u5z(f4j, "resAuthors"))
                }
                break;
            case "fav":
            case "subscribe":
                if (t4x == 18) {
                    var oX0x = a4e.u5z(f4j, "resLevel"),
                        pV0x = a4e.u5z(f4j, "resFee");
                    if (oX0x == 10) {
                        l4p.sR1x(pV0x, cI6C, "song");
                        break
                    }
                    l4p.ly9p({
                        tracks: [cI6C]
                    })
                }
                break;
            case "download":
                l4p.WM2x({
                    id: cI6C,
                    type: t4x
                });
                break;
            case "programtips":
                if (VR1x && VR1x == 1) {
                    l4p.ia8S("由于版权问题，该节目暂时无法分享。")
                } else {
                    l4p.bvU0x({
                        id: bgT6N,
                        radiotype: bgS6M
                    })
                }
                break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d4h)
        } catch (e) {}
    };
    b4f.chr0x = function (d4h) {
        try {
            h4l.w5B(top.document, "mouseup")
        } catch (e) {}
    };
    b4f.xU3x = function () {
        var chq0x = function () {
            var co5t = window.innerHeight;
            if (!k4o.uM2x(co5t)) co5t = (document.documentElement || document.body).clientHeight;
            return co5t
        };
        return function (d4h) {
            if (!this.sf1x) return;
            var VX2x = chq0x(),
                fP7I = document.documentElement.scrollTop || document.body.scrollTop;
            a4e.Y5d(this.sf1x, "display", fP7I > 0 ? "" : "none");
            if (cZ6T.dd6X.browser == "ie" && cZ6T.dd6X.version < "7.0") {
                var gi7b = Math.min(document.body.clientHeight, VX2x + fP7I) - 204;
                a4e.Y5d(this.sf1x, "top", gi7b + "px")
            }
        }
    }();
    b4f.Jw6q = function (d4h) {
        h4l.cf5k(d4h);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b4f.xf3x = function () {
        var bhc6W = function (d4h) {
            h4l.w5B(window, "share", d4h)
        };
        return function (cI6C, t4x, Ez5E, T5Y, JC6w, JE6y) {
            l4p.mb9S({
                rid: cI6C,
                type: t4x,
                purl: Ez5E,
                name: T5Y,
                author: JC6w,
                authors: JE6y,
                onshare: bhc6W.g4k(this)
            })
        }
    }();
    b4f.mw9n = function (W5b, bb5g) {
        try {
            top.log(W5b, bb5g)
        } catch (e) {
            switch (W5b) {
            case "play":
                this.kh9Y.eE7x(bb5g);
                break;
            case "search":
                this.kh9Y.bEr2x(bb5g);
                break;
            default:
                this.kh9Y.gf7Y(W5b, bb5g)
            }
        }
    };
    b4f.bwa0x = function () {
        var Wv2x, bhy6s = false,
            bs5x = [45, 60];
        var cho0x = function (bD5I) {
            if (bD5I.title != "MailBoxImport") return;
            var P5U = JSON.parse(bD5I.content || "null") || X5c;
            if (P5U.status == 10) {
                n4r.UP1x.B5G().N5S();
                window.clearTimeout(Wv2x)
            }
        };
        var tb1x = function (d4h) {
            if (d4h.code == 200) {
                if (d4h.status == 1) {
                    h4l.s4w(p4t.yr3x, "message", cho0x.g4k(this));
                    p4t.yr3x.B5G().brm8e();
                    bhy6s = true
                } else {
                    if (bhy6s) {
                        if (d4h.status == 10) {
                            n4r.UP1x.B5G().N5S();
                            h4l.hD8v(p4t.yr3x, "message");
                            window.clearTimeout(Wv2x);
                            bhy6s = false
                        }
                    } else {
                        window.clearTimeout(Wv2x)
                    }
                }
            }
        };
        return function () {
            var sc1x = bs5x.shift() * 1e3;
            v5A.bp5u("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: tb1x.g4k(this)
            });
            if (sc1x) {
                Wv2x = window.setTimeout(arguments.callee, sc1x)
            }
        }
    }();
    b4f.tk1x = function (d4h) {
        try {
            top.polling(d4h)
        } catch (e) {}
    }
})()