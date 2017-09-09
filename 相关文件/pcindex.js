(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        cg5l = c4g("nej.ut"),
        D5I = c4g("nm.w"),
        b4f;
    var caH9y = typeof GEnvType == "undefined" || GEnvType == "online" ? location.protocol + "//iad.g.163.com" : location.protocol + "//t.rec.g.163.com/accuad";
    D5I.DR5W = NEJ.C();
    b4f = D5I.DR5W.O5T(cg5l.cz5E);
    var caD8v = {
        homepage: "column689x75",
        detail: "logo200x220"
    };
    b4f.bj5o = function (e4i) {
        e4i = e4i || {};
        this.bk5p(e4i);
        this.o4s = a4e.y5D("j-music-ad");
        if (!this.o4s) return;
        this.Wn2x = e4i.cat || "";
        this.cww4A = e4i.resType || "";
        this.cwx4B = e4i.resId || 0;
        this.caz8r = a4e.u5z(this.o4s, "hasMusicAd") == "1";
        var i4m = a4e.I5N(this.o4s, "j-flag");
        this.lU9L = i4m.shift();
        this.blM7F = i4m.shift();
        this.cay8q();
        this.bS5X([
            [this.lU9L, "click", this.cG6A.g4k(this)]
        ])
    };
    b4f.cay8q = function () {
        var dr6l = "g_cb" + k4o.Xl2x(5),
            V5a = caH9y + "/wa/ad_check?",
            fQ7J = {
                site: "netease",
                affiliate: "music",
                cat: this.Wn2x,
                type: caD8v[this.Wn2x],
                location: 1,
                callback: dr6l
            },
            wc2x = document.createElement("script");
        window[dr6l] = this.cav8n.g4k(this);
        wc2x.src = V5a + k4o.cY6S(fQ7J);
        wc2x.id = "j-script-ad";
        wc2x.type = "text/javascript";
        this.car8j = dr6l;
        document.body.appendChild(wc2x)
    };
    b4f.cav8n = function (bW5b) {
        if (bW5b && bW5b.result) {
            a4e.x5C(this.o4s, "f-hide");
            a4e.x5C(this.blM7F, "f-hide");
            a4e.z5E(this.lU9L, "f-hide")
        } else if (this.caz8r) {
            a4e.x5C(this.o4s, "f-hide");
            a4e.x5C(this.lU9L, "f-hide");
            a4e.z5E(this.blM7F, "f-hide");
            if (this.bDD2x()) {
                this.bDF2x()
            } else {
                h4l.s4w(window, "scroll", this.caq8i.g4k(this))
            }
        } else {
            a4e.z5E(this.o4s, "f-hide");
            a4e.z5E(this.lU9L, "f-hide");
            a4e.z5E(this.blM7F, "f-hide")
        }
        a4e.cK6E(a4e.y5D("j-script-ad"));
        delete window[this.car8j]
    };
    var eZ7S = null;
    var bDI2x = !1;
    var blQ7J = !0;
    var Wu2x = 0;
    var blT7M = 0;
    b4f.bDD2x = function () {
        var blV7O = !1;
        if (this.lU9L) {
            if (blQ7J) {
                blQ7J = !0;
                Wu2x = a4e.hO8G(this.lU9L, document.body).y;
                blT7M = Wu2x + this.lU9L.clientHeight
            }
            var fP7I = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            var bDR2x = document.body.clientHeight;
            var BA4E = 0;
            if (top.g_bottomBarShow && top.g_bottomBarHeight) BA4E = top.g_bottomBarHeight;
            if (Wu2x > fP7I && Wu2x < fP7I + bDR2x - BA4E) {
                blV7O = !0
            } else if (blT7M > fP7I && blT7M < fP7I + bDR2x - BA4E) {
                blV7O = !0
            }
        }
        return blV7O
    };
    b4f.caq8i = function () {
        if (bDI2x) return;
        clearTimeout(eZ7S);
        eZ7S = setTimeout(this.cap8h.g4k(this), 1e3)
    };
    b4f.cap8h = function () {
        if (this.bDD2x()) {
            bDI2x = true;
            this.bDF2x()
        }
    };
    b4f.bDF2x = function () {
        this.bDT2x("impress")
    };
    b4f.cG6A = function (d4h) {
        this.bDT2x("click")
    };
    b4f.bDT2x = function (t4x) {
        if (!this.lU9L) return;
        var C5H = a4e.u5z(this.lU9L, "id");
        var V5a = a4e.u5z(this.lU9L, "url");
        var cam8e = a4e.u5z(this.lU9L, "pageid");
        var cal8d = a4e.u5z(this.lU9L, "pagetype");
        var P5U = null;
        if (this.Wn2x == "homepage") {
            P5U = {
                target: "ad",
                resource: "newalbum",
                url: V5a,
                id: C5H
            }
        } else if (this.Wn2x == "detail") {
            P5U = {
                target: "ad",
                resource: cal8d || "",
                resourceid: cam8e || 0,
                id: +C5H,
                url: V5a
            }
        }
        if (P5U && window.log) {
            window.log(t4x, P5U)
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        cg5l = c4g("nej.ut"),
        D5I = c4g("nm.w"),
        b4f;
    D5I.bGg2x = NEJ.C();
    b4f = D5I.bGg2x.O5T(cg5l.cz5E);
    b4f.bGh2x = function (V5a) {
        var C5H = k4o.Xl2x(16);
        var df6Z = a4e.cQ6K("img");
        var bnx7q = this.bZA8s.g4k(this, df6Z);
        df6Z.style.display = "none";
        df6Z.onload = bnx7q;
        df6Z.onerror = bnx7q;
        df6Z.src = V5a;
        document.body.appendChild(df6Z);
        setTimeout(bnx7q, df6Z)
    };
    b4f.bZA8s = function (df6Z) {
        if (df6Z.parentNode) {
            df6Z.onload = null;
            df6Z.onerror = null;
            df6Z.parentNode.removeChild(df6Z)
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        ba5f = c4g("nej.h"),
        M5R = c4g("nej.p");
    var jB9s = {
        opacity: 1,
        "z-index": 1,
        background: 1,
        "font-weight": 1,
        filter: 1
    };
    ba5f.bLG4K = function (hF8x) {
        return jB9s[hF8x] === undefined && hF8x.indexOf("color") < 0
    };
    ba5f.XB2x = function (f4j, md9U, pF0x) {
        pF0x = pF0x.slice(0, -1);
        a4e.Y5d(f4j, "transition", pF0x);
        a4e.fz7s(f4j, md9U);
        return this
    };
    ba5f.Om9d = function (f4j, do6i, nG0x) {
        a4e.fz7s(f4j, do6i);
        a4e.Y5d(f4j, "transition", "none");
        nG0x.call(null, do6i);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        ba5f = c4g("nej.h"),
        M5R = c4g("nej.p");
    if (M5R.ms9j.trident1) return;
    ba5f.Cz4D = function () {
        return !0
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        M5R = c4g("nej.ut"),
        b4f;
    if (!!M5R.bms7l) return;
    M5R.bms7l = NEJ.C();
    b4f = M5R.bms7l.O5T(M5R.cz5E);
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.Ww2x = e4i.to || X5c;
        this.NM9D = e4i.from || {};
        this.ceh9Y = Math.max(0, parseInt(e4i.delay) || 0)
    };
    b4f.bC5H = function () {
        this.bG5L();
        this.bh5m();
        if (!!this.NO9F) {
            window.clearTimeout(this.NO9F);
            delete this.NO9F
        }
        delete this.Ww2x;
        delete this.NM9D
    };
    b4f.bKN3x = function (bx5C) {
        if (!this.NM9D) return;
        if (("" + bx5C).indexOf(".") >= 0) bx5C = +(new Date);
        if (this.bKP3x(bx5C)) {
            this.bh5m();
            return
        }
        this.dK7D = requestAnimationFrame(this.bKN3x.g4k(this))
    };
    b4f.bKP3x = bn5s;
    b4f.eE7x = function () {
        var cee9V = function () {
            this.NO9F = window.clearTimeout(this.NO9F);
            this.NM9D.time = +(new Date);
            this.dK7D = requestAnimationFrame(this.bKN3x.g4k(this))
        };
        return function () {
            this.NO9F = window.setTimeout(cee9V.g4k(this), this.ceh9Y);
            return this
        }
    }();
    b4f.bh5m = function () {
        this.dK7D = cancelRequestAnimationFrame(this.dK7D);
        this.w5B("onstop");
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ut"),
        b4f, K5P;
    if (!!M5R.CW4a) return;
    M5R.CW4a = NEJ.C();
    b4f = M5R.CW4a.O5T(M5R.bms7l);
    K5P = M5R.CW4a.ch5m;
    b4f.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.zd3x = e4i.duration || 200;
        this.cec9T = 1 / (200 * this.zd3x);
        this.ceb9S(e4i.timing);
        this.cea9R()
    };
    b4f.bC5H = function () {
        this.bG5L();
        delete this.FP5U;
        delete this.bmV7O
    };
    b4f.ceb9S = function () {
        var fW7P = /^cubic\-bezier\((.*?)\)$/i,
            jn8f = /\s*,\s*/i,
            bLf4j = {
                linear: [0, 0, 1, 1],
                ease: [.25, .1, .25, 1],
                easein: [.42, 0, 1, 1],
                easeout: [0, 0, .58, 1],
                easeinout: [0, 0, .58, 1]
            };
        var cdZ9Q = function (A5F, r4v, i4m) {
            i4m[r4v] = parseFloat(A5F)
        };
        return function (Xc2x) {
            Xc2x = (Xc2x || "").toLowerCase();
            this.FP5U = bLf4j[Xc2x];
            if (fW7P.test(Xc2x)) {
                this.FP5U = RegExp.$1.split(jn8f);
                k4o.bc5h(this.FP5U, cdZ9Q)
            }
            if (!!this.FP5U) return;
            this.FP5U = bLf4j.ease
        }
    }();
    b4f.cea9R = function () {
        var FQ5V = this.FP5U,
            bmZ7S = 3 * FQ5V[0],
            bLm4q = 3 * (FQ5V[2] - FQ5V[0]) - bmZ7S,
            cdY9P = 1 - bmZ7S - bLm4q,
            bnc7V = 3 * FQ5V[1],
            bLp4t = 3 * (FQ5V[3] - FQ5V[1]) - bnc7V,
            cdX9O = 1 - bnc7V - bLp4t;
        this.bmV7O = {
            ax: cdY9P,
            ay: cdX9O,
            bx: bLm4q,
            by: bLp4t,
            cx: bmZ7S,
            cy: bnc7V
        }
    };
    b4f.cdV9M = function () {
        var bLv4z = function (bx5C, oB0x) {
            return ((oB0x.ax * bx5C + oB0x.bx) * bx5C + oB0x.cx) * bx5C
        };
        var cdU9L = function (bx5C, oB0x) {
            return ((oB0x.ay * bx5C + oB0x.by) * bx5C + oB0x.cy) * bx5C
        };
        var cdS9J = function (bx5C, oB0x) {
            return (3 * oB0x.ax * bx5C + 2 * oB0x.bx) * bx5C + oB0x.cx
        };
        var cdR9I = function (bx5C, bLA4E, oB0x) {
            var t0, t1, t2, x2, d2, i;
            for (t2 = bx5C, i = 0; i < 8; i++) {
                x2 = bLv4z(t2, oB0x) - bx5C;
                if (Math.abs(x2) < bLA4E) return t2;
                d2 = cdS9J(t2, oB0x);
                if (Math.abs(d2) < 1e-6) break;
                t2 = t2 - x2 / d2
            }
            t0 = 0;
            t1 = 1;
            t2 = bx5C;
            if (t2 < t0) return t0;
            if (t2 > t1) return t1;
            while (t0 < t1) {
                x2 = bLv4z(t2, oB0x);
                if (Math.abs(x2 - bx5C) < bLA4E) return t2;
                if (bx5C > x2) t0 = t2;
                else t1 = t2;
                t2 = (t1 - t0) * .5 + t0
            }
            return t2
        };
        return function (de6Y) {
            return cdU9L(cdR9I(de6Y / this.zd3x, this.cec9T, this.bmV7O), this.bmV7O)
        }
    }();
    b4f.bKP3x = function (bx5C) {
        var de6Y = bx5C - this.NM9D.time,
            xb3x = this.cdV9M(de6Y),
            bi5n = k4o.IE6y(this.NM9D.offset * (1 - xb3x) + this.Ww2x.offset * xb3x, 2),
            nG0x = !1;
        if (de6Y >= this.zd3x) {
            bi5n = this.Ww2x.offset;
            nG0x = !0
        }
        this.w5B("onupdate", {
            offset: bi5n
        });
        return nG0x
    };
    b4f.bh5m = function () {
        this.w5B("onupdate", {
            offset: this.Ww2x.offset
        });
        K5P.bh5m.apply(this, arguments);
        return this
    }
})();
(function () {
    var M5R = NEJ.P("nej.ut"),
        bLE4I;
    if (!!M5R.te1x) return;
    M5R.te1x = NEJ.C();
    bLE4I = M5R.te1x.O5T(M5R.CW4a);
    bLE4I.bj5o = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.timing = "linear";
        this.bk5p(e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        M5R = c4g("nej.ut"),
        b4f;
    if (!!M5R.Cu4y) return;
    M5R.Cu4y = NEJ.C();
    b4f = M5R.Cu4y.O5T(M5R.CW4a);
    b4f.bj5o = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.timing = "easein";
        this.bk5p(e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        M5R = c4g("nej.ut"),
        b4f;
    if (!!M5R.bok8c) return;
    M5R.bok8c = NEJ.C();
    b4f = M5R.bok8c.O5T(M5R.CW4a);
    b4f.bj5o = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.timing = "easeout";
        this.bk5p(e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        M5R = c4g("nej.ut"),
        b4f;
    if (!!M5R.bon8f) return;
    M5R.bon8f = NEJ.C();
    b4f = M5R.bon8f.O5T(M5R.CW4a);
    b4f.bj5o = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.timing = "easeinout";
        this.bk5p(e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        ba5f = c4g("nej.h"),
        M5R = c4g("nej.p"),
        cN6H = c4g("nej.x"),
        cg5l = c4g("nej.ut");
    if (M5R.ms9j.trident) return;
    var bLS4W = {
        linear: cg5l.te1x,
        "ease-in": cg5l.Cu4y,
        "ease-out": cg5l.bok8c,
        "ease-in-out": cg5l.bon8f
    };
    ba5f.XB2x = function () {
        var cdO9F = function (md9U, pF0x) {
            var cB5G = "";
            k4o.ei7b(md9U, function (A5F, T5Y) {
                cB5G += pF0x.replace("all", T5Y)
            });
            return cB5G
        };
        var cdN9E = function (A5F, hF8x) {
            if (hF8x === "filter") {
                A5F = k4o.IE6y(A5F, 0);
                A5F = "alpha(opacity=" + A5F + ")"
            }
            if (hF8x === "z-index") A5F = k4o.IE6y(A5F, 0);
            return A5F
        };
        var cdK9B = function (A5F) {
            return bLS4W[A5F.split(" ")[2]]
        };
        var cdH9y = function (f4j, A5F, md9U, nG0x, r4v) {
            var A5F = A5F.split(" "),
                hF8x = A5F[0],
                dI7B = parseFloat(a4e.cW6Q(f4j, hF8x)) || 0,
                nD0x = parseFloat(md9U[hF8x]) || 0,
                cdG9x = bLS4W[A5F[2]],
                boK8C = A5F[1].slice(0, -1) * 1e3 + A5F[3].slice(0, 1) * 1e3;
            if (boK8C >= f4j.sumTime) {
                f4j.sumTime = boK8C;
                f4j.isLastOne = r4v
            }
            var Ou9l = nej.p.dd6X.engine === "trident" && nej.p.dd6X.release - 5 < 0;
            if (hF8x === "opacity" && Ou9l) {
                hF8x = "filter";
                var dC6w = a4e.cW6Q(f4j, hF8x);
                dI7B = parseFloat(dC6w.split("=")[1]) || 0;
                nD0x = nD0x * 100
            }
            var e4i = {
                from: {
                    offset: dI7B
                },
                to: {
                    offset: nD0x
                },
                duration: boK8C,
                onupdate: function (bi5n) {
                    var A5F = bi5n.offset;
                    if (!ba5f.bLG4K(hF8x)) {
                        A5F = cdN9E(A5F, hF8x);
                        a4e.Y5d(f4j, hF8x, A5F)
                    } else {
                        a4e.Y5d(f4j, hF8x, A5F + "px")
                    }
                }, onstop: function (hF8x) {
                    var FS5X = f4j.effects[r4v];
                    if (!FS5X) return;
                    FS5X = cdG9x.S5X(FS5X);
                    if (f4j.isLastOne === r4v) nG0x.apply(this)
                }.g4k(this, r4v)
            };
            return e4i
        };
        return ba5f.XB2x.ee7X(function (d4h) {
            d4h.stopped = !0;
            var i4m = d4h.args;
            var f4j = i4m[0],
                md9U = i4m[1],
                pF0x = i4m[2],
                nG0x = i4m[3];
            f4j.sumTime = 0, f4j.isLastOne = 0;
            var bMi4m = [];
            if (pF0x.indexOf("all") > -1) pF0x = cdO9F(md9U, pF0x);
            var boW8O = pF0x.slice(0, -1);
            boW8O = boW8O.split(",");
            f4j.effects = [];
            k4o.bc5h(boW8O, function (A5F, r4v) {
                var e4i = cdH9y(f4j, A5F, md9U, nG0x, r4v);
                bMi4m.push({
                    o: e4i,
                    c: cdK9B(A5F)
                })
            });
            k4o.bc5h(bMi4m, function (q4u, r4v) {
                var FS5X = q4u.c.B5G(q4u.o);
                f4j.effects[r4v] = FS5X;
                FS5X.eE7x()
            });
            return this
        })
    }();
    ba5f.Om9d = ba5f.Om9d.ee7X(function (d4h) {
        d4h.stopped = !0;
        var i4m = d4h.args;
        var f4j = i4m[0];
        k4o.bc5h(f4j.effects, function (X5c) {
            X5c.bh5m()
        });
        f4j.effects = [];
        return this
    })
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        ba5f = c4g("nej.h"),
        a4e = c4g("nej.e"),
        M5R = c4g("nej.p");
    if (M5R.ms9j.gecko) return;
    ba5f.XB2x = function (f4j, md9U, pF0x) {
        pF0x = pF0x.slice(0, -1);
        a4e.Y5d(f4j, "transition", pF0x);
        setTimeout(function () {
            a4e.fz7s(f4j, md9U)
        }, 33);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        ba5f = c4g("nej.h"),
        M5R = c4g("nej.p");
    if (M5R.ms9j.webkit) return
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        ba5f = c4g("nej.h"),
        M5R = c4g("nej.p");
    if (M5R.ms9j.presto) return
})();
(function () {
    var c4g = NEJ.P,
        X5c = NEJ.O,
        bn5s = NEJ.F,
        k4o = c4g("nej.u"),
        ba5f = c4g("nej.h"),
        a4e = c4g("nej.e"),
        h4l = c4g("nej.v"),
        M5R = c4g("nej.ut"),
        sF1x;
    if (!!M5R.qG1x) return;
    M5R.qG1x = NEJ.C();
    sF1x = M5R.qG1x.O5T(M5R.cz5E);
    sF1x.bj5o = function (e4i) {
        this.bk5p(e4i);
        this.FT5Y = a4e.y5D(e4i.node);
        this.bMv4z = e4i.styles || [];
        this.bMw4A = e4i.onstop || bn5s;
        this.bpm8e = e4i.transition || [];
        this.OB9s = {};
        this.bMF4J = this.cdE9v();
        if (!!ba5f.Cz4D && ba5f.Cz4D()) {
            setTimeout(this.Cz4D.g4k(this), this.bpo8g * 1e3)
        } else {
            this.bS5X([
                [this.FT5Y, "transitionend", this.Cz4D.g4k(this)]
            ])
        }
    };
    sF1x.bC5H = function () {
        if (!!this.FU5Z) {
            this.FU5Z = window.clearInterval(this.FU5Z)
        }
        delete this.FT5Y;
        delete this.bMv4z;
        delete this.bMF4J;
        delete this.OB9s;
        delete this.bpz8r;
        delete this.bpm8e;
        delete this.FU5Z;
        this.bG5L()
    };
    sF1x.Cz4D = function (d4h) {
        if (!!ba5f.Cz4D && ba5f.Cz4D()) {
            this.bpA8s = !1;
            this.bh5m();
            return
        }
        if (!!this.bpA8s && this.cdC9t(d4h)) {
            this.bpA8s = !1;
            this.bh5m()
        }
    };
    sF1x.cdC9t = function (d4h) {
        var T5Y = d4h.propertyName;
        if (T5Y === this.bpz8r || T5Y.indexOf(this.bpz8r) > -1) return !0;
        else return !1
    };
    sF1x.cdE9v = function () {
        var cdB9s = function (cd5i) {
            var i4m = cd5i.split(":"),
                hF8x = i4m[0],
                A5F = i4m[1],
                f4j = this.FT5Y;
            if (A5F.indexOf("=") > -1) {
                var ot0x = parseInt(a4e.cW6Q(f4j, hF8x)) || 0;
                var cZ6T = parseInt(A5F.split("=")[1]);
                if (A5F.indexOf("+") > -1) A5F = ot0x + cZ6T;
                else A5F = ot0x - cZ6T
            }
            if (ba5f.bLG4K(hF8x)) {
                if (A5F.toString().indexOf("px") < 0) A5F += "px"
            }
            this.OB9s[hF8x] = A5F
        };
        var cdA9r = function (r4v) {
            if (!this.bpm8e[r4v]) return "";
            var qo1x = this.bpm8e[r4v],
                H5M = qo1x.duration + qo1x.delay;
            if (H5M >= this.bpo8g) {
                this.bpo8g = H5M;
                this.bpz8r = qo1x.property
            }
            return qo1x.property + " " + qo1x.duration + "s " + qo1x.timing + " " + qo1x.delay + "s,"
        };
        return function () {
            var bMX4b = "";
            this.bpo8g = 0;
            k4o.bc5h(this.bMv4z, function (cd5i, r4v) {
                cdB9s.call(this, cd5i);
                bMX4b += cdA9r.call(this, r4v)
            }.g4k(this));
            return bMX4b
        }
    }();
    sF1x.cdz9q = function () {
        this.ww2x = {};
        k4o.ei7b(this.OB9s, function (A5F, hF8x) {
            this.ww2x[hF8x] = a4e.cW6Q(this.FT5Y, hF8x)
        }.g4k(this));
        this.w5B("onplaystate", this.ww2x)
    };
    sF1x.uT2x = function () {
        this.bpA8s = !0;
        ba5f.XB2x(this.FT5Y, this.OB9s, this.bMF4J, this.bMw4A);
        this.FU5Z = window.setInterval(this.cdz9q.g4k(this), 49);
        return this
    };
    sF1x.bh5m = function () {
        ba5f.Om9d(this.FT5Y, this.OB9s, this.bMw4A);
        this.FU5Z = window.clearInterval(this.FU5Z);
        return this
    };
    sF1x.cwf4j = function () { };
    sF1x.cwg4k = function () { }
})();
(function () {
    var c4g = NEJ.P,
        bn5s = NEJ.F,
        k4o = c4g("nej.u"),
        a4e = c4g("nej.e"),
        k4o = c4g("nej.u"),
        M5R = c4g("nej.ut");
    a4e.YE2x = function (e4i) {
        e4i = e4i || {};
        e4i.onstop = e4i.onstop || bn5s;
        e4i.onplaystate = e4i.onplaystate || bn5s;
        return e4i
    };
    a4e.bNl4p = function () {
        var cdw9n = function (f4j, YF2x, Ou9l) {
            var gl7e, eA7t = true;
            if (!!Ou9l) {
                k4o.ei7b(YF2x, function (A5F, T5Y) {
                    if (T5Y === "opacity") {
                        T5Y = "filter";
                        var dC6w = a4e.cW6Q(f4j, T5Y);
                        if (dC6w === "") {
                            a4e.Y5d(f4j, "filter", "alpha(opacity=100)");
                            gl7e = 100
                        } else {
                            gl7e = parseFloat(dC6w.split("=")[1]) || 0
                        }
                        A5F = A5F * 100
                    } else {
                        gl7e = a4e.cW6Q(f4j, T5Y)
                    } if (parseInt(gl7e) === A5F) eA7t = false
                }.g4k(this))
            } else {
                k4o.ei7b(YF2x, function (A5F, T5Y) {
                    gl7e = a4e.cW6Q(f4j, T5Y);
                    if (parseInt(gl7e) === A5F) eA7t = false
                }.g4k(this))
            }
            return eA7t
        };
        return function (f4j, YF2x) {
            var Ou9l = nej.p.dd6X.engine === "trident" && nej.p.dd6X.release - 5 < 0;
            if (!cdw9n(f4j, YF2x, Ou9l)) return !1;
            return !0
        }
    }();
    a4e.bNo4s = function () {
        var cdu9l = function (f4j) {
            var Vk1x = a4e.cW6Q(f4j, "display");
            if (Vk1x === "none") return !1;
            return !0
        };
        return function (f4j, e4i, ku9l) {
            var FN5S = e4i.opacity || ku9l;
            f4j = a4e.y5D(f4j);
            if (!cdu9l.call(f4j)) return !1;
            if (!!f4j.effect) return !1;
            if (!a4e.bNl4p(f4j, {
                opacity: FN5S
            })) return !1;
            e4i = a4e.YE2x(e4i);
            f4j.effect = M5R.qG1x.B5G({
                node: f4j,
                transition: [{
                    property: "opacity",
                    timing: e4i.timing || "ease-in",
                    delay: e4i.delay || 0,
                    duration: e4i.duration || 1
                }],
                styles: ["opacity:" + FN5S],
                onstop: function (do6i) {
                    f4j.effect = M5R.qG1x.S5X(f4j.effect);
                    e4i.onstop.call(null, do6i)
                }, onplaystate: e4i.onplaystate.g4k(f4j.effect)
            });
            f4j.effect.uT2x();
            return this
        }
    }.g4k(this)();
    a4e.YL2x = function (f4j, e4i) {
        return a4e.bNo4s(f4j, e4i, 1)
    };
    a4e.cdt9k = function (f4j, e4i) {
        return a4e.bNo4s(f4j, e4i, 0)
    };
    a4e.cds9j = function (f4j) {
        a4e.bao4s(f4j);
        return this
    };
    a4e.bao4s = function (f4j) {
        f4j = a4e.y5D(f4j);
        if (f4j.effect && f4j.effect.bh5m()) {
            if (!!f4j.effect) f4j.effect = M5R.qG1x.S5X(f4j.effect)
        }
        return this
    };
    a4e.bNx4B = function (f4j, mD9u, e4i) {
        f4j = a4e.y5D(f4j);
        if (!!f4j.effect) return !1;
        if (!a4e.bNl4p(f4j, mD9u)) return !1;
        e4i = a4e.YE2x(e4i);
        e4i.duration = e4i.duration || [];
        var gi7b = mD9u.top || 0,
            gG8y = mD9u.left || 0;
        f4j.effect = M5R.qG1x.B5G({
            node: f4j,
            transition: [{
                property: "top",
                timing: e4i.timing || "ease-in",
                delay: e4i.delay || 0,
                duration: e4i.duration[0] || 1
            }, {
                property: "left",
                timing: e4i.timing || "ease-in",
                delay: e4i.delay || 0,
                duration: e4i.duration[1] || 1
            }],
            styles: ["top:" + gi7b, "left:" + gG8y],
            onstop: function (do6i) {
                e4i.onstop.call(null, do6i);
                f4j.effect = M5R.qG1x.S5X(f4j.effect)
            }, onplaystate: e4i.onplaystate.g4k(f4j.effect)
        });
        f4j.effect.uT2x();
        return this
    };
    a4e.bNy4C = function () {
        return function (f4j, mD9u, e4i) {
            f4j = a4e.y5D(f4j);
            if (!!f4j.effect) return !1;
            e4i = a4e.YE2x(e4i);
            var i4m = mD9u.split(":"),
                cdr9i = i4m[0],
                bNC4G = [];
            bNC4G.push(mD9u);
            f4j.effect = M5R.qG1x.B5G({
                node: f4j,
                transition: [{
                    property: cdr9i,
                    timing: e4i.timing || "ease-in",
                    delay: e4i.delay || 0,
                    duration: e4i.duration || 1
                }],
                styles: bNC4G,
                onstop: function (do6i) {
                    e4i.onstop.call(null, do6i);
                    f4j.effect = M5R.qG1x.S5X(f4j.effect)
                }, onplaystate: e4i.onplaystate.g4k(f4j.effect)
            });
            f4j.effect.uT2x();
            return this
        }
    }();
    a4e.cwh4l = function () {
        var bqv8n = function (f4j, t4x) {
            return t4x == "height" ? f4j.clientHeight : f4j.clientWidth
        };
        return function (f4j, t4x, e4i) {
            f4j = a4e.y5D(f4j);
            if (!!f4j.effect) return !1;
            e4i = a4e.YE2x(e4i);
            var A5F = e4i.value || false;
            if (!A5F) {
                a4e.Y5d(f4j, "display", "block");
                var f4j = a4e.y5D(f4j);
                A5F = bqv8n(f4j, t4x)
            }
            var eA7t = a4e.cW6Q(f4j, "visibility");
            if (eA7t === "hidden") {
                f4j.style.height = 0;
                a4e.Y5d(f4j, "visibility", "inherit");
                f4j.effect = M5R.qG1x.B5G({
                    node: f4j,
                    transition: [{
                        property: t4x,
                        timing: e4i.timing || "ease-in",
                        delay: e4i.delay || 0,
                        duration: e4i.duration || 1
                    }],
                    styles: [t4x + ":" + A5F],
                    onstop: function (do6i) {
                        e4i.onstop.call(null, do6i);
                        f4j.effect = M5R.qG1x.S5X(f4j.effect);
                        YP2x = window.clearTimeout(YP2x)
                    }, onplaystate: e4i.onplaystate.g4k(f4j.effect)
                })
            } else {
                f4j.style.height = A5F;
                f4j.effect = M5R.qG1x.B5G({
                    node: f4j,
                    transition: [{
                        property: t4x,
                        timing: e4i.timing || "ease-in",
                        delay: e4i.delay || 0,
                        duration: e4i.duration || 1
                    }],
                    styles: [t4x + ":" + 0],
                    onstop: function (do6i) {
                        a4e.Y5d(f4j, "visibility", "hidden");
                        a4e.Y5d(f4j, t4x, "auto");
                        e4i.onstop.call(null, do6i);
                        f4j.effect = M5R.qG1x.S5X(f4j.effect);
                        YP2x = window.clearTimeout(YP2x)
                    }, onplaystate: e4i.onplaystate.g4k(f4j.effect)
                })
            }
            var YP2x = window.setTimeout(function () {
                f4j.effect.uT2x()
            }.g4k(this), 0);
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
        H5M = c4g("nej.ut"),
        v5A = c4g("nej.j"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        F5K = c4g("nm.m"),
        D5I = c4g("nm.w"),
        L5Q = c4g("nm.m.disc"),
        n4r = c4g("nm.l"),
        La7T = null,
        b4f, K5P;
    var bannerTypeMap = {
        1: "歌曲",
        10: "专辑",
        100: "艺人",
        1e3: "歌单",
        1001: "电台节目",
        1002: "用户",
        1003: "活动",
        1004: "MV",
        1005: "专题",
        "-1004": "明星访谈",
        2e3: "抽奖活动",
        2001: "熟人抢票",
        2003: "歌单(webview)",
        2004: "首发",
        3e3: "推广",
        3001: "直播",
        1009: "电台",
        4001: "动态话题"
    };
    L5Q.KU7N = NEJ.C();
    b4f = L5Q.KU7N.O5T(F5K.cM6G);
    b4f.bH5M = function (e4i) {
        this.bM5R();
        this.bnO7H = p4t.ho8g.B5G({
            onitemadd: this.xt3x.g4k(this)
        });
        this.kG9x = p4t.hJ8B.B5G();
        this.cwD4H = D5I.DR5W.B5G({
            cat: "homepage"
        });
        this.bZw8o = D5I.bGg2x.B5G();
        La7T = this.bZw8o;
        this.bnR7K = undefined;
        this.bZv8n();
        this.bZu8m();
        this.bZt8l();
        this.Hc6W = [];
        Array.prototype.push.apply(this.Hc6W, a4e.I5N("album-roller", "j-img"));
        Array.prototype.push.apply(this.Hc6W, a4e.I5N("top-flag", "j-img"));
        Array.prototype.push.apply(this.Hc6W, a4e.I5N("hotdj-list", "j-img"));
        h4l.s4w(window, "scroll", this.boe8W.g4k(this));
        h4l.s4w(window, "resize", this.boe8W.g4k(this));
        h4l.s4w("top-flag", "click", this.bZs8k.g4k(this));
        h4l.s4w("personalRec", "click", this.bZr8j.g4k(this));
        h4l.s4w("discover-module", "click", this.bO5T.g4k(this));
        this.boe8W();
        this.bZl8d();
        var bGH2x = k4o.hp8h(top.location.search.slice(1));
        if (bGH2x.market) {
            a4e.y5D("side-download").href = "/download?market=" + bGH2x.market
        }
    };
    b4f.boe8W = function () {
        var bZk8c = function (iL8D, bi5n, dQ7J) {
            var Ol9c = bi5n.y < iL8D.scrollTop + iL8D.clientHeight;
            return Ol9c
        };
        return function (d4h) {
            if (this.Hc6W.length < 1) return;
            var iL8D = a4e.og0x();
            for (var i = 0, mq9h = this.Hc6W, bi5n; i < mq9h.length; ++i) {
                bi5n = a4e.hO8G(mq9h[i]);
                if (bZk8c(iL8D, bi5n)) {
                    mq9h[i].src = a4e.u5z(mq9h[i], "src");
                    this.Hc6W.splice(i, 1);
                    --i
                }
            }
        }
    }();
    b4f.bZs8k = function (d4h) {
        var f4j = h4l.U5Z(d4h, "subscribe-flag");
        if (!!f4j && !a4e.bA5F(f4j, "s-bg-10-slt")) {
            h4l.cf5k(d4h);
            var bol8d = l4p.bec5h();
            if (!bol8d) {
                top.login();
                return
            }
            var bZj8b = parseInt(a4e.u5z(f4j, "plid"));
            this.bnO7H.iO8G({
                key: "playlist_fav-" + GUser.userId,
                data: {
                    id: bZj8b
                },
                ext: {
                    node: f4j
                }
            })
        }
    };
    b4f.bZv8n = function () {
        var AC4G = window.Gbanners;
        var Lh7a = AC4G.length;
        var Hd6X = a4e.y5D("index-banner");
        var bo5t = a4e.I5N(document.body, "d-flag");
        var bZh8Z = bo5t[0];
        var bor8j = bo5t[1];
        var bov8n = bo5t[2];
        var Az4D = 0;
        var box8p = false;
        var boy8q = false;
        var boC8u = a4e.I5N(Hd6X, "pg-flag");
        var XS2x = function (r4v) {
            r4v = (r4v + Lh7a) % Lh7a;
            var jW9N = AC4G[r4v];
            a4e.fU7N(bov8n, "src", jW9N.picUrl);
            a4e.fU7N(bor8j, "href", jW9N.url);
            if ((jW9N.targetType == 1003 || jW9N.targetType == 3e3) && jW9N.url.indexOf(location.hostname + "/#") < 0) {
                a4e.fU7N(bor8j, "target", "_blank")
            } else {
                a4e.fU7N(bor8j, "target", "")
            }
            a4e.Y5d(bZh8Z, "background-image", "url(" + jW9N.backgroundUrl + ")");
            a4e.x5C(boC8u[Az4D], "z-slt");
            a4e.z5E(boC8u[r4v], "z-slt");
            Az4D = r4v;
            bHm3x((r4v + 1 + Lh7a) % Lh7a);
            bHn3x(r4v)
        };
        var bHn3x = function (r4v) {
            var jW9N = AC4G[r4v];
            if (window.log && jW9N) {
                window.log("bannerimpress", {
                    type: jW9N.targetType + "_" + bannerTypeMap[jW9N.targetType],
                    url: jW9N.url || null,
                    id: jW9N.targetId || null,
                    position: r4v
                })
            }
            if (jW9N.monitorImpress && La7T) {
                La7T.bGh2x(jW9N.monitorImpress)
            }
        };
        var bZg8Y = function (r4v) {
            a4e.x5C(boC8u[Az4D], "z-slt");
            a4e.cdt9k(bov8n, {
                timing: "ease-in",
                opacity: .2,
                onstop: function (d4h) {
                    XS2x(r4v);
                    a4e.YL2x(bov8n, {
                        timing: "ease-out",
                        onstop: function (d4h) { }, onplaystate: function (d4h) { }
                    })
                }, onplaystate: function (d4h) { }
            })
        };
        var bHr3x = function (V5a) {
            var img = new Image;
            img.src = V5a
        };
        var bHm3x = function (r4v) {
            bHr3x(AC4G[r4v].backgroundUrl);
            bHr3x(AC4G[r4v].picUrl)
        };
        bHn3x(0);
        h4l.s4w(Hd6X, "click", function (d4h) {
            var f4j = h4l.U5Z(d4h, "click-flag");
            if (!!f4j) {
                h4l.cf5k(d4h);
                if (a4e.bA5F(f4j, "btnl")) {
                    XS2x(Az4D - 1)
                } else if (a4e.bA5F(f4j, "btnr")) {
                    XS2x(Az4D + 1)
                } else if (a4e.bA5F(f4j, "pg-flag")) {
                    var r4v = parseInt(a4e.u5z(f4j, "index"));
                    XS2x(r4v)
                }
            } else {
                f4j = h4l.U5Z(d4h, "c:active");
                if (f4j && f4j.href) {
                    var jW9N = AC4G[Az4D];
                    if (window.log && jW9N) {
                        window.log("click", {
                            type: "banners",
                            object: jW9N.targetType + "_" + bannerTypeMap[jW9N.targetType],
                            url: jW9N.url || null,
                            id: jW9N.targetId || null,
                            position: Az4D
                        })
                    }
                    if (jW9N.monitorClick && La7T) {
                        La7T.bGh2x(jW9N.monitorClick)
                    }
                }
            }
        }.g4k(this));
        h4l.s4w(Hd6X, "mouseover", function (d4h) {
            box8p = true
        }.g4k(this));
        h4l.s4w(Hd6X, "mouseout", function (d4h) {
            box8p = false
        }.g4k(this));
        setInterval(function () {
            if (!box8p && !boy8q) {
                bZg8Y((Az4D + 1) % Lh7a)
            }
        }.g4k(this), 5e3);
        bHm3x(1);
        var bZf8X = a4e.hO8G(Hd6X, document.body).y + Hd6X.clientHeight;
        h4l.s4w(window, "scroll", function () {
            var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            if (scrollTop < bZf8X) {
                boy8q = false
            } else {
                boy8q = true
            }
        })
    };
    b4f.bZu8m = function () {
        var bHw3x = a4e.y5D("album-roller");
        var XU2x = a4e.I5N(bHw3x, "roller-flag");
        var Ax4B = XU2x.length;
        var XV2x = 1;
        var isOnPlay = false;
        var bHA3x = function (e4i) {
            isOnPlay = true;
            var XZ2x = e4i.direction == "left" ? "-" : "";
            var Ya2x = XZ2x == "-" ? (XV2x + 1 + Ax4B) % Ax4B : (XV2x - 1 + Ax4B) % Ax4B;
            var bZe8W = XZ2x == "-" ? (Ya2x + 1 + Ax4B) % Ax4B : (Ya2x - 1 + Ax4B) % Ax4B;
            a4e.bNy4C(XU2x[XV2x], "left:" + XZ2x + "645", {
                timing: "ease-out",
                delay: 0,
                duration: 1,
                onstop: function (d4h) {
                    XV2x = Ya2x;
                    a4e.Y5d(XU2x[bZe8W], "left", -645 * parseInt(XZ2x + "1") + "px");
                    setTimeout(function () {
                        isOnPlay = false
                    }, 200)
                }, onplaystate: function (d4h) { }
            });
            a4e.bNy4C(XU2x[Ya2x], "left:0", {
                timing: "ease-out",
                delay: 0,
                duration: 1,
                onstop: function (d4h) { }, onplaystate: function (d4h) { }
            })
        };
        var leftRoll = function () {
            if (!isOnPlay) {
                bHA3x({
                    direction: "left"
                })
            }
        };
        var rightRoll = function () {
            if (!isOnPlay) {
                bHA3x({
                    direction: "right"
                })
            }
        };
        h4l.s4w(bHw3x, "click", function (d4h) {
            var f4j = h4l.U5Z(d4h, "click-flag");
            if (!!f4j) {
                h4l.cf5k(d4h);
                if (a4e.bA5F(f4j, "pre")) {
                    rightRoll()
                } else if (a4e.bA5F(f4j, "nxt")) {
                    leftRoll()
                }
            }
        }.g4k(this))
    };
    b4f.bZt8l = function () {
        var f4j = a4e.y5D("personalRec");
        v5A.bp5u("/api/discovery/recommend/resource", {
            type: "json",
            onload: function (d4h) {
                var wL3x = new Date,
                    vK2x, j4n, EJ5O, jD9u, Lm7f;
                Lm7f = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
                if (GUser) {
                    vK2x = new Date(parseInt(GUser.birthday))
                }
                jD9u = wL3x.getDate();
                EJ5O = Lm7f[wL3x.getDay()];
                if (vK2x && wL3x.getMonth() == vK2x.getMonth() && wL3x.getDate() == vK2x.getDate()) {
                    j4n = {
                        weekday: EJ5O,
                        day: jD9u,
                        dec1: "生日特别推荐",
                        dec2: "亲爱的" + GUser.nickname + "，",
                        dec3: "祝你生日快乐"
                    }
                } else {
                    j4n = {
                        weekday: EJ5O,
                        day: jD9u,
                        dec1: "每日歌曲推荐",
                        dec2: "根据你的口味生成，",
                        dec3: "每天6:00更新"
                    }
                } if (d4h.code == 200) {
                    var nc0x = [];
                    if (d4h.recommend && d4h.recommend.length) {
                        for (var i = 0; i < d4h.recommend.length; i++) {
                            var gT8L = {};
                            gT8L.position = i;
                            gT8L.id = d4h.recommend[i].id;
                            gT8L.alg = d4h.recommend[i].alg;
                            switch (d4h.recommend[i].type) {
                                case 0:
                                    d4h.recommend[i].rtype = 17;
                                    d4h.recommend[i].link = "/program?id=" + d4h.recommend[i].id;
                                    gT8L.scene = "user-dj-recommend";
                                    break;
                                case 1:
                                    d4h.recommend[i].rtype = 13;
                                    d4h.recommend[i].link = "/playlist?id=" + d4h.recommend[i].id;
                                    gT8L.scene = "user-playlist";
                                    break
                            }
                            if (i < 3) nc0x.push({
                                action: "recommendimpress",
                                json: gT8L
                            })
                        }
                        this.kG9x.UM1x(nc0x);
                        f4j.innerHTML = a4e.bU5Z("m-wgt-rmd", {
                            data: j4n,
                            recommend: d4h.recommend.slice(0, 3)
                        }, {
                            getPlayCount: l4p.ko9f,
                            cutString: l4p.zq3x
                        })
                    }
                }
            }.g4k(this),
            onerror: function () { }
        })
    };
    b4f.xt3x = function (d4h) {
        a4e.z5E(d4h.ext.node, "s-bg-10-slt");
        d4h.ext.node.title = "已收藏"
    };
    b4f.bZr8j = function (d4h) {
        var f4j = h4l.U5Z(d4h, "d:action");
        var W5b = a4e.u5z(f4j, "action");
        var C5H, t4x, bHU3x, bw5B;
        if (W5b) h4l.cf5k(d4h);
        switch (W5b) {
            case "dislike":
                C5H = a4e.u5z(f4j, "resId");
                t4x = a4e.u5z(f4j, "resType");
                bHU3x = a4e.u5z(f4j, "alg");
                this.bnR7K = a4e.u5z(f4j, "index");
                bw5B = {
                    resId: C5H,
                    resType: t4x,
                    alg: bHU3x
                };
                v5A.bp5u("/api/discovery/recommend/dislike", {
                    type: "json",
                    query: k4o.cY6S(bw5B),
                    onload: function (d4h) {
                        if (d4h.code == 200) {
                            var xp3x = d4h.data[this.bnR7K];
                            if (xp3x.type == 0) {
                                xp3x.rtype = 17;
                                xp3x.link = "/dj?id=" + xp3x.id
                            } else if (xp3x.type == 1) {
                                xp3x.rtype = 13;
                                xp3x.link = "/playlist?id=" + xp3x.id
                            }
                            f4j.parentNode.parentNode.innerHTML = a4e.bU5Z("m-rmd-item", {
                                rec: xp3x,
                                index: this.bnR7K
                            })
                        } else {
                            n4r.Z5e.N5S({
                                tip: "暂无更多推荐",
                                autoclose: true
                            })
                        }
                    }.g4k(this),
                    onerror: function () {
                        n4r.Z5e.N5S({
                            tip: "暂无更多推荐",
                            autoclose: true
                        })
                    }
                });
                break
        }
    };
    b4f.bO5T = function (d4h) {
        var f4j = h4l.U5Z(d4h, "d:action");
        switch (a4e.u5z(f4j, "action")) {
            case "checkfee":
                h4l.bh5m(d4h);
                l4p.ia8S("", a4e.u5z(f4j, "resId"), a4e.u5z(f4j, "resType"));
                break;
            case "checkin":
                v5A.bp5u("/api/point/dailyTask", {
                    type: "json",
                    method: "get",
                    query: {
                        type: 1
                    },
                    onload: function (d4h) {
                        if (d4h.code == 200) {
                            var bHZ3x = a4e.mV0x(l4p.eP7I('<div class="tip s-bg s-bg-14 f-pa">获得 <span class="s-fc6 f-fw1">{0}</span> 积分</div>', d4h.point || 0));
                            f4j.parentNode.appendChild(bHZ3x);
                            f4j.innerHTML = "<i>已签到</i>";
                            a4e.eK7D(f4j, "u-btn2-2", "u-btn2-dis");
                            window.setTimeout(function () {
                                a4e.cK6E(bHZ3x)
                            }, 1500);
                            var bZd8V = a4e.u5z(f4j, "needSafety") == "true";
                            if (bZd8V) {
                                l4p.jr8j({
                                    title: "安全认证提示",
                                    clazz: "m-layer-w5",
                                    html: a4e.bU5Z("m-popup-info", {
                                        tip: "您目前的积分数额较高，为避免安全风险<br>请尽快完成安全认证。",
                                        oktext: "去安全认证",
                                        cctext: "我知道了"
                                    }),
                                    onaction: function (d4h) {
                                        if (d4h.action == "ok") {
                                            window.open("/#/store/security/");
                                            d4h.stopped = true;
                                            window.g_cbSafety = function () {
                                                location.reload()
                                            }
                                        }
                                    }
                                })
                            }
                        } else { }
                    }
                });
                break
        }
    };
    b4f.bZl8d = function () {
        var bw5B = k4o.hp8h(location.search.slice(1)),
            bpq8i = bw5B.pids;
        if (bpq8i) {
            v5A.bp5u("/api/song/detail", {
                query: {
                    ids: bpq8i
                },
                type: "json",
                method: "get",
                onload: function (d4h) {
                    var i4m = l4p.GJ6D(d4h.songs, true, true),
                        bs5x = [];
                    k4o.bc5h(JSON.parse(bpq8i), function (C5H) {
                        var hu8m = k4o.cT6N(i4m, function (bd5i) {
                            return bd5i.id == C5H
                        });
                        if (hu8m >= 0) {
                            bs5x.push(i4m[hu8m])
                        }
                    });
                    top.player.addTo(bs5x, false, true)
                }
            })
        }
    };
    a4e.cE6y("template-box");
    new L5Q.KU7N
})()