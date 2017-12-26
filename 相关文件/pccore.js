(function() {
	window.NEJ = window.NEJ || {};
	NEJ.O = {};
	NEJ.R = [];
	NEJ.F = function() {
		return !1
	};
	NEJ.P = function(Co4s) {
		if (!Co4s || !Co4s.length) return null;
		var ZI2x = window;
		for (var a = Co4s.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; ZI2x = ZI2x[a[i]] = ZI2x[a[i]] || {}, i++);
		return ZI2x
	};
	NEJ.Q = function(bL5Q, Co4s) {
		bL5Q = bL5Q || NEJ.O;
		var bs5x = Co4s.split(".");
		for (var i = 0, l = bs5x.length; i < l; i++) {
			bL5Q = bL5Q[bs5x[i]];
			if (!bL5Q) break
		}
		return bL5Q
	};
	NEJ.C = function() {
		var brO6I = function() {
				return NEJ.O.toString.call(arguments[0]) != "[object Function]"
			};
		var brR6L = function(A5F, bu5z) {
				for (var x in bu5z) if (A5F == bu5z[x]) return x;
				return null
			};
		var blK5P = {
			cl5q: 0,
			bj5o: 1,
			bC5H: 2,
			bR5W: 3,
			bH5M: 4,
			eZ7S: 5,
			jJ8B: 6,
			em7f: 7
		},
			ta1x = {
				cs5x: 0,
				bk5p: 1,
				bG5L: 2,
				cb5g: 3,
				bM5R: 4,
				gz7s: 5,
				kC9t: 6,
				fV7O: 7
			};
		return function() {
			var fh7a = function() {
					this.bsJ7C();
					return this.cl5q.apply(this, arguments)
				};
			fh7a.prototype.bsJ7C = NEJ.F;
			fh7a.prototype.cl5q = NEJ.F;
			fh7a.O5T = function(Aw3x, btj7c) {
				if (brO6I(Aw3x)) return;
				if (btj7c == null || !! btj7c) NEJ.X(this, Aw3x, brO6I);
				this.ccF6z = Aw3x;
				this.cf5k = Aw3x.prototype;
				var bB5G = function() {};
				bB5G.prototype = Aw3x.prototype;
				this.prototype = new bB5G;
				var BO4S = this.prototype;
				BO4S.constructor = this;
				var dM6G;
				for (var x in blK5P) {
					dM6G = brR6L(blK5P[x], ta1x);
					if (!dM6G || !this.cf5k[x]) continue;
					BO4S[x] = function(T5Y) {
						return function() {
							this[T5Y].apply(this, arguments)
						}
					}(dM6G)
				}
				var AI3x = {};
				for (var x in ta1x) {
					dM6G = brR6L(ta1x[x], blK5P);
					if (!dM6G || !this.cf5k[dM6G]) continue;
					AI3x[dM6G] = Aw3x;
					BO4S[x] = function(T5Y) {
						return function() {
							var m4q, bB5G = this.bgJ4N[T5Y],
								bak2x = bB5G.prototype[T5Y];
							this.bgJ4N[T5Y] = bB5G.ccF6z || Aw3x;
							if ( !! bak2x) m4q = bak2x.apply(this, arguments);
							this.bgJ4N[T5Y] = Aw3x;
							return m4q
						}
					}(dM6G)
				}
				BO4S.bsJ7C = function() {
					this.bgJ4N = NEJ.X({}, AI3x)
				};
				BO4S.cxX1x = BO4S.cs5x;
				return BO4S
			};
			return fh7a
		}
	}();
	NEJ.X = function(fJ7C, bN5S, dC6w) {
		if (!fJ7C || !bN5S) return fJ7C;
		dC6w = dC6w || NEJ.F;
		for (var x in bN5S) {
			if (bN5S.hasOwnProperty(x) && !dC6w(bN5S[x], x)) fJ7C[x] = bN5S[x]
		}
		return fJ7C
	};
	NEJ.EX = function(fJ7C, bN5S) {
		if (!fJ7C || !bN5S) return fJ7C;
		for (var x in fJ7C) {
			if (fJ7C.hasOwnProperty(x) && bN5S[x] != null) fJ7C[x] = bN5S[x]
		}
		return fJ7C
	};
	var EL4P = Function.prototype;
	EL4P.ef7Y = function(kv9m, Pb8T) {
		var f = NEJ.F,
			Pb8T = Pb8T || f,
			kv9m = kv9m || f,
			da6U = this;
		return function() {
			var d4h = {
				args: NEJ.R.slice.call(arguments, 0)
			};
			kv9m(d4h);
			if (!d4h.stopped) {
				d4h.value = da6U.apply(this, d4h.args);
				Pb8T(d4h)
			}
			return d4h.value
		}
	};
	EL4P.g4k = function() {
		var bf5k = arguments,
			fJ7C = arguments[0],
			bdA3x = this;
		return function() {
			var vq2x = NEJ.R.slice.call(bf5k, 1);
			NEJ.R.push.apply(vq2x, arguments);
			return bdA3x.apply(fJ7C || window, vq2x)
		}
	};
	EL4P.dT7M = function() {
		var bf5k = arguments,
			fJ7C = NEJ.R.shift.call(bf5k),
			bdA3x = this;
		return function() {
			NEJ.R.push.apply(arguments, bf5k);
			return bdA3x.apply(fJ7C || window, arguments)
		}
	};
	var EL4P = String.prototype;
	if (!EL4P.trim) {
		EL4P.trim = function() {
			var cN6H = /(?:^\s+)|(?:\s+$)/g;
			return function() {
				return this.replace(cN6H, "")
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
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		M5R = c4g("nej.p"),
		baf2x = window.navigator.platform,
		sP1x = window.navigator.userAgent;
	var jY8Q = {
		mac: baf2x,
		win: baf2x,
		linux: baf2x,
		ipad: sP1x,
		ipod: sP1x,
		iphone: baf2x,
		android: sP1x
	};
	M5R.bae2x = jY8Q;
	for (var x in jY8Q) jY8Q[x] = (new RegExp(x, "i")).test(jY8Q[x]);
	jY8Q.ios = jY8Q.ipad || jY8Q.iphone || jY8Q.ipod;
	jY8Q.tablet = jY8Q.ipad;
	jY8Q.desktop = jY8Q.mac || jY8Q.win || jY8Q.linux && !jY8Q.android;
	var hy8q = {
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
	M5R.dd6X = hy8q;
	if (/msie\s+(.*?);/i.test(sP1x) || /trident\/.+rv:([\d\.]+)/i.test(sP1x)) {
		hy8q.engine = "trident";
		hy8q.browser = "ie";
		hy8q.version = RegExp.$1;
		hy8q.prefix = {
			css: "ms",
			pro: "ms",
			clz: "MS",
			evt: "MS"
		};
		var nG0x = {
			6: "2.0",
			7: "3.0",
			8: "4.0",
			9: "5.0",
			10: "6.0",
			11: "7.0"
		};
		hy8q.release = nG0x[document.documentMode] || nG0x[parseInt(hy8q.version)]
	} else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(sP1x)) {
		hy8q.engine = "webkit";
		hy8q.release = RegExp.$1 || "";
		hy8q.prefix = {
			css: "webkit",
			pro: "webkit",
			clz: "WebKit"
		}
	} else if (/rv\:(.*?)\)\s+gecko\//i.test(sP1x)) {
		hy8q.engine = "gecko";
		hy8q.release = RegExp.$1 || "";
		hy8q.browser = "firefox";
		hy8q.prefix = {
			css: "Moz",
			pro: "moz",
			clz: "Moz"
		};
		if (/firefox\/(.*?)(?=\s|$)/i.test(sP1x)) hy8q.version = RegExp.$1 || ""
	} else if (/presto\/(.*?)\s/i.test(sP1x)) {
		hy8q.engine = "presto";
		hy8q.release = RegExp.$1 || "";
		hy8q.browser = "opera";
		hy8q.prefix = {
			css: "O",
			pro: "o",
			clz: "O"
		};
		if (/version\/(.*?)(?=\s|$)/i.test(sP1x)) hy8q.version = RegExp.$1 || ""
	}
	if (hy8q.browser == "unknow") {
		var nG0x = ["chrome", "maxthon", "safari"];
		for (var i = 0, l = nG0x.length, T5Y; i < l; i++) {
			T5Y = nG0x[i] == "safari" ? "version" : nG0x[i];
			if ((new RegExp(T5Y + "/(.*?)(?=\\s|$)", "i")).test(sP1x)) {
				hy8q.browser = nG0x[i];
				hy8q.version = RegExp.$1.trim();
				break
			}
		}
	}
	M5R.buz7s = {};
	var bac2x = hy8q.engine != "trident";
	M5R.mh9Y = {
		gecko: hy8q.engine != "gecko",
		webkit: hy8q.engine != "webkit",
		presto: hy8q.engine != "presto",
		trident0: bac2x || hy8q.release > "2.0",
		trident1: bac2x || hy8q.release < "6.0",
		trident2: bac2x || hy8q.release > "3.0",
		trident: bac2x || hy8q.release >= "6.0"
	}
})();
(function() {
	var iy8q = NEJ.P("nej.c"),
		P5U = {};
	var bkh5m = function() {
			var cN6H = /^([\w]+?:\/\/.*?(?=\/|$))/i;
			return function(V5a) {
				V5a = V5a || "";
				if (cN6H.test(V5a)) return RegExp.$1;
				return location.protocol + "//" + location.host
			}
		}();
	var Qt9k = function() {
			var buB7u = function(i4m, bu5z) {
					if (!i4m || !i4m.length) return;
					for (var i = 0, l = i4m.length, ky9p; i < l; i++) {
						ky9p = i4m[i];
						if (ky9p.indexOf("://") > 0) bu5z[bkh5m(ky9p)] = ky9p
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
			return function(bN5S) {
				iy8q.EN4R("root", bN5S.root || "/res/");
				var bdC3x, fw7p = iy8q.y5D("root");
				for (var x in bb5g) {
					bdC3x = bb5g[x];
					iy8q.EN4R(x, bN5S[bdC3x.name] || fw7p + bdC3x.dft)
				}
				var Ac3x = bN5S.p_csrf;
				if (Ac3x == !0) {
					Ac3x = {
						cookie: "AntiCSRF",
						param: "AntiCSRF"
					}
				}
				iy8q.EN4R("csrf", NEJ.EX({
					cookie: "",
					param: ""
				}, Ac3x));
				P5U.frames = {};
				buB7u(bN5S.p_frame, P5U.frames);
				P5U.flashs = {};
				buB7u(bN5S.p_flash, P5U.flashs)
			}
		}();
	iy8q.EN4R = function(J5O, A5F) {
		P5U[J5O] = A5F
	};
	iy8q.y5D = function(J5O) {
		return P5U[J5O]
	};
	iy8q.bXQ5V = function(V5a) {
		var vf2x = bkh5m(V5a);
		return P5U.frames[vf2x] || vf2x + "/res/nej_proxy_frame.html"
	};
	iy8q.ceX7Q = function(V5a) {
		return P5U.flashs[bkh5m(V5a)]
	};
	Qt9k(window.NEJ_CONF || NEJ.O)
})();
(function() {
	var c4g = NEJ.P,
		M5R = c4g("nej.p"),
		iy8q = c4g("nej.c"),
		bN5S = window.NEJ_CONF || NEJ.O;
	if (M5R.mh9Y.trident) return;
	iy8q.EN4R("storage.swf", bN5S.storage || iy8q.y5D("root") + "nej_storage.swf");
	if (M5R.dd6X.release < "4.0") {
		iy8q.EN4R("blank.png", bN5S.blank || iy8q.y5D("root") + "nej_blank.gif")
	}
	var i4m = bN5S.xdr,
		ga7T = /^(https?:\/\/.*?)(?=\/|$)/i,
		jf8X = /[\/?=&]/i;
	var bvs7l = function(V5a) {
			return (ga7T.test(V5a) ? RegExp.$1 : "").toLowerCase()
		};
	if ( !! i4m && !! i4m.length) for (var i = i4m.length - 1, V5a, J5O; i >= 0; i--) {
		V5a = i4m[i];
		J5O = bvs7l(V5a);
		if ( !! J5O) iy8q.EN4R(J5O, V5a)
	}
	iy8q.cxJ1x = function(V5a) {
		var J5O = bvs7l(V5a);
		if (!J5O) {
			if (jf8X.test(V5a)) {
				J5O = location.protocol + "//" + location.host
			} else if (V5a.indexOf("://") < 0) {
				J5O = location.protocol + "//" + V5a
			} else {
				J5O = V5a
			}
		}
		return iy8q.y5D(J5O) || J5O + "/res/nej_xdomain.html"
	}
})();
(function() {
	var c4g = NEJ.P,
		iy8q = c4g("nej.c"),
		M5R = c4g("nej.g"),
		fW7P = +(new Date);
	M5R.cxF1x = 1e4 - fW7P;
	M5R.bfO3x = 10001 - fW7P;
	M5R.cxE1x = 10002 - fW7P;
	M5R.bww7p = 10003 - fW7P;
	M5R.bRr3x = 10004 - fW7P;
	M5R.cxy1x = 10005 - fW7P;
	M5R.bln5s = 10006 - fW7P;
	M5R.bSB4F = 10007 - fW7P;
	M5R.vQ2x = "Content-Type";
	M5R.cxt1x = "text/plain";
	M5R.CO4S = "multipart/form-data";
	M5R.caV6P = "application/x-www-form-urlencoded";
	M5R.bpn6h = iy8q.y5D("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function() {
	var c4g = NEJ.P,
		fb7U = NEJ.R,
		M5R = c4g("nej.p"),
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		ba5f = c4g("nej.h");
	var kP9G = M5R.dd6X.prefix,
		bza8S = M5R.buz7s,
		cgf7Y = {
			scale: "scale({x|1},{y|1})",
			rotate: "rotate({a})",
			translate: "translate({x},{y})"
		},
		cha7T = {
			scale: "scale3d({x|1},{y|1},{z|1})",
			rotate: "rotate3d({x},{y},{z},{a})",
			translate: "translate3d({x},{y},{z})"
		},
		PM8E = {
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
	var Qt9k = function() {
			var ro1x = ba5f.bzK8C();
			bza8S.css3d = !! ro1x && ro1x.m41 != null;
			var cN6H = /-([a-z])/g;
			for (var x in PM8E) {
				PM8E[bzS8K(x)] = PM8E[x]
			}
		};
	var bzS8K = function() {
			var cN6H = /-([a-z])/g;
			return function(T5Y) {
				T5Y = T5Y || "";
				return T5Y.replace(cN6H, function($1, $2) {
					return $2.toUpperCase()
				})
			}
		}();
	var bzU8M = function(T5Y) {
			return (!bza8S.css3d ? cgf7Y : cha7T)[T5Y]
		};
	var bAw8o = function() {
			var cN6H = /\s+/;
			return function(fh7a) {
				fh7a = (fh7a || "").trim();
				return !!fh7a ? fh7a.split(cN6H) : null
			}
		}();
	var ZD2x = function(E5J, t4x, fh7a) {
			E5J = a3x.y5D(E5J);
			if (!E5J) return;
			k4o.bc5h(bAw8o(fh7a), function(dD6x) {
				E5J.classList[t4x](dD6x)
			})
		};
	ba5f.EZ5e = function(i4m) {
		return fb7U.slice.call(i4m, 0)
	};
	ba5f.blN5S = function(E5J) {
		return ba5f.EZ5e(E5J.children)
	};
	ba5f.bna5f = function(E5J, fh7a) {
		return ba5f.EZ5e(E5J.getElementsByClassName(fh7a))
	};
	ba5f.bnM5R = function(E5J, Fb5g) {
		ZD2x(E5J, "add", Fb5g)
	};
	ba5f.bou6o = function(E5J, Fc5h) {
		ZD2x(E5J, "remove", Fc5h)
	};
	ba5f.QB9s = function(E5J, Fc5h, Fb5g) {
		ZD2x(E5J, "remove", Fc5h);
		ZD2x(E5J, "add", Fb5g)
	};
	ba5f.bbp2x = function(E5J, fh7a) {
		E5J = a3x.y5D(E5J);
		if (!E5J) return !1;
		var i4m = E5J.classList;
		if (!i4m || !i4m.length) return !1;
		return k4o.cT6N(bAw8o(fh7a), function(dD6x) {
			return i4m.contains(dD6x)
		}) >= 0
	};
	ba5f.bbC2x = function(E5J, dD6x) {};
	ba5f.bbF2x = function(E5J) {};
	ba5f.bdp3x = function(fA7t, nd9U) {
		fA7t.selectionEnd = nd9U.end || 0;
		fA7t.selectionStart = nd9U.start || 0;
		fA7t.focus()
	};
	ba5f.bem3x = function(fA7t) {
		return {
			end: fA7t.selectionEnd,
			start: fA7t.selectionStart
		}
	};
	ba5f.bet3x = function() {
		var EI4M = function(dD6x, d4h) {
				var E5J = h4l.U5Z(d4h);
				if (!E5J.value) a3x.x5C(E5J, dD6x)
			};
		var Fe5j = function(dD6x, d4h) {
				a3x.z5E(h4l.U5Z(d4h), dD6x)
			};
		return function(E5J, eE7x, dD6x) {
			if (eE7x == 1) {
				h4l.s4w(E5J, "blur", EI4M.g4k(null, dD6x))
			}
			if (eE7x == 1 || eE7x == -1) {
				h4l.s4w(E5J, "focus", Fe5j.g4k(null, dD6x))
			}
		}
	}();
	ba5f.bik4o = function(G5L) {
		return (new XMLSerializer).serializeToString(G5L) || ""
	};
	ba5f.biC4G = function(zP3x) {
		var fw7p = (new DOMParser).parseFromString(zP3x, "text/xml").documentElement;
		return fw7p.nodeName == "parsererror" ? null : fw7p
	};
	ba5f.biO4S = function(E5J) {};
	ba5f.mT9K = function(E5J) {
		return null
	};
	ba5f.bjo4s = function(E5J) {
		return null
	};
	ba5f.bjI4M = function(dH6B) {};
	ba5f.bkC5H = function() {
		var bf5k = ba5f.EZ5e(arguments);
		bf5k[0] = a3x.y5D(bf5k[0]);
		if (!bf5k[0]) return null;
		bf5k[1] = (bf5k[1] || "").toLowerCase();
		if (!bf5k[1]) return null;
		return bf5k
	};
	ba5f.zO3x = function() {
		var uM2x = {
			touchstart: "mousedown",
			touchmove: "mousemove",
			touchend: "mouseup"
		},
			iD8v = {
				transitionend: "TransitionEnd",
				animationend: "AnimationEnd",
				animationstart: "AnimationStart",
				animationiteration: "AnimationIteration"
			};
		var cqs0x = function(t4x) {
				return (kP9G.evt || kP9G.pro) + t4x
			};
		return function() {
			var bf5k = ba5f.bkC5H.apply(ba5f, arguments);
			if (!bf5k) return;
			var Zs2x = iD8v[bf5k[1]],
				Zr2x = uM2x[bf5k[1]];
			if ( !! Zs2x) {
				bf5k[4] = bf5k[1];
				bf5k[1] = cqs0x(Zs2x)
			} else if ( !! Zr2x) {
				var T5Y = "on" + bf5k[1];
				if (!(T5Y in bf5k[0])) {
					bf5k[4] = bf5k[1];
					bf5k[1] = Zr2x
				}
			}
			return bf5k
		}
	}();
	ba5f.blM5R = function() {
		var bf5k = arguments;
		bf5k[0].addEventListener(bf5k[1], bf5k[2], !! bf5k[3])
	};
	ba5f.Zq2x = function() {
		var bf5k = arguments;
		bf5k[0].removeEventListener(bf5k[1], bf5k[2], !! bf5k[3])
	};
	ba5f.bmF5K = function(E5J, t4x, e4i) {
		var d4h = document.createEvent("Event");
		d4h.initEvent(t4x, !0, !0);
		NEJ.X(d4h, e4i);
		E5J.dispatchEvent(d4h)
	};
	ba5f.bzK8C = function() {
		var ga7T = /\((.*?)\)/,
			jf8X = /\s*,\s*/,
			i4m = ["m11", "m12", "m21", "m22", "m41", "m42"];
		var Zo2x = function(ro1x) {
				var ij8b = {};
				if (ga7T.test(ro1x || "")) {
					k4o.bc5h(RegExp.$1.split(jf8X), function(A5F, r4v) {
						ij8b[i4m[r4v]] = A5F || ""
					})
				}
				return ij8b
			};
		return function(ro1x) {
			if ( !! window.CSSMatrix) return new CSSMatrix(ro1x);
			var T5Y = kP9G.clz + "CSSMatrix";
			if ( !! window[T5Y]) return new window[T5Y](ro1x || "");
			return Zo2x(ro1x)
		}
	}();
	ba5f.bBS9J = function() {
		var cN6H = /\{(.*?)\}/g;
		return function(T5Y, bu5z) {
			bu5z = bu5z || o;
			var pR0x = bzU8M(T5Y);
			return !pR0x ? "" : pR0x.replace(cN6H, function($1, $2) {
				var bs5x = $2.split("|");
				return bu5z[bs5x[0]] || bs5x[1] || "0"
			})
		}
	}();
	ba5f.bqi6c = function(E5J, T5Y, A5F) {
		E5J.style[ba5f.bBU9L(T5Y)] = A5F
	};
	ba5f.bBU9L = function() {
		var cN6H = /^[a-z]/,
			bqD6x = kP9G.css;
		var bOU2x = function(T5Y) {
				return T5Y.replace(cN6H, function($1) {
					return bqD6x + $1.toUpperCase()
				})
			};
		return function(T5Y) {
			T5Y = bzS8K(T5Y);
			var bOV2x = ba5f.bPh2x(T5Y, PM8E);
			return bOV2x ? bOU2x(T5Y) : T5Y
		}
	}();
	ba5f.bPh2x = function() {
		var cN6H = /^([a-z]+?)[A-Z]/;
		return function(T5Y, bu5z) {
			if (!bu5z[T5Y]) {
				if (cN6H.test(T5Y)) T5Y = RegExp.$1
			}
			return !!bu5z[T5Y]
		}
	}();
	ba5f.bPq2x = function() {
		var cN6H = /\$<(.*?)>/gi,
			bqD6x = "-" + kP9G.css.toLowerCase() + "-";
		return function(js8k) {
			return js8k.replace(cN6H, function($1, $2) {
				var et7m = $2,
					bs5x = et7m.split("|"),
					pR0x = bzU8M(bs5x[0]);
				if ( !! pR0x) {
					return ba5f.bBS9J(bs5x[0], k4o.hf8X(bs5x[1]))
				}
				return !ba5f.bPr2x(et7m, PM8E) ? et7m : bqD6x + et7m
			})
		}
	}();
	ba5f.bPr2x = function(T5Y, bu5z) {
		return !!bu5z[T5Y]
	};
	ba5f.bcK3x = function(cd5i, js8k) {
		cd5i.textContent = js8k
	};
	ba5f.bdt3x = function(cd5i, js8k) {
		var wn2x = cd5i.sheet,
			br5w = wn2x.cssRules.length;
		wn2x.insertRule(js8k, br5w);
		return wn2x.cssRules[br5w]
	};
	ba5f.cwv1x = function(E5J, e4i) {};
	ba5f.Zj2x = function(Zi2x) {
		return (Zi2x || "").toLowerCase() != "transparent"
	};
	ba5f.bPT2x = function(E5J) {};
	ba5f.bgs4w = function(E5J, T5Y) {
		if ( !! E5J.getAttribute) return E5J.getAttribute(T5Y);
		return ""
	};
	ba5f.Zb2x = function(fc7V) {
		a3x.cJ6D(fc7V)
	};
	Qt9k()
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		M5R = c4g("nej.p"),
		ba5f = c4g("nej.h");
	if (M5R.mh9Y.trident0) return;
	var fW7P = +(new Date);
	P5U = {};
	ba5f.bbC2x = ba5f.bbC2x.ef7Y(function(d4h) {
		d4h.stopped = !0;
		var bf5k = d4h.args,
			C5H = a3x.kJ9A(bf5k[0]),
			J5O = "hover-" + C5H;
		if (!C5H || !! P5U[J5O]) return;
		P5U[J5O] = !0;
		h4l.s4w(C5H, "mouseenter", a3x.z5E.g4k(a3x, C5H, bf5k[1]));
		h4l.s4w(C5H, "mouseleave", a3x.x5C.g4k(a3x, C5H, bf5k[1]))
	});
	ba5f.bbF2x = function() {
		var cwm1x = function() {};
		return ba5f.bbF2x.ef7Y(function(d4h) {
			d4h.stopped = !0;
			var E5J = d4h.args[0],
				C5H = "fixed-" + a3x.kJ9A(E5J);
			if ( !! P5U[C5H]) return;
			var bb5g = {};
			P5U[C5H] = bb5g
		})
	}();
	ba5f.biO4S = ba5f.biO4S.ef7Y(function(d4h) {
		d4h.stopped = !0;
		var E5J = d4h.args[0],
			cd5i = E5J.style,
			bCs9j = a3x.oz0x();
		cd5i.width = bCs9j.scrollWidth + "px";
		cd5i.height = bCs9j.scrollHeight + "px"
	});
	ba5f.mT9K = ba5f.mT9K.ef7Y(function(d4h) {
		d4h.stopped = !0;
		var E5J = d4h.args[0],
			jX8P = P5U[E5J.msk];
		if (!jX8P) {
			E5J.msk = fW7P++;
			jX8P = a3x.cQ6K("iframe");
			jX8P.style.position = "absolute";
			P5U[E5J.msk] = jX8P
		}
		d4h.value = jX8P;
		var cd5i = jX8P.style;
		cd5i.top = (parseInt(a3x.cW6Q(E5J, "top")) || 0) + "px";
		cd5i.left = (parseInt(a3x.cW6Q(E5J, "left")) || 0) + "px";
		cd5i.width = E5J.offsetWidth + "px";
		cd5i.height = E5J.offsetHeight + "px";
		E5J.insertAdjacentElement("beforeBegin", jX8P)
	});
	ba5f.bjo4s = ba5f.bjo4s.ef7Y(function(d4h) {
		d4h.stopped = !0;
		var jX8P = P5U[d4h.args[0].msk];
		if ( !! jX8P) a3x.mu9l(jX8P)
	})
})();
(function() {
	var c4g = NEJ.P,
		M5R = c4g("nej.p"),
		a3x = c4g("nej.e"),
		ba5f = c4g("nej.h");
	if (M5R.mh9Y.trident1) return;
	ba5f.zO3x = function() {
		var uM2x = {
			touchcancel: "MSPointerCancel",
			touchstart: "MSPointerDown",
			touchmove: "MSPointerMove",
			touchend: "MSPointerUp"
		};
		return ba5f.zO3x.ef7Y(function(d4h) {
			var bf5k = ba5f.bkC5H.apply(ba5f, d4h.args);
			if (!bf5k) {
				d4h.stopped = !0;
				return
			}
			var t4x = uM2x[bf5k[1]];
			if ( !! t4x && ("on" + t4x).toLowerCase() in bf5k[0]) {
				bf5k[4] = bf5k[1];
				bf5k[1] = t4x;
				d4h.stopped = !0;
				d4h.value = bf5k
			}
		})
	}();
	ba5f.Zj2x = function(Zi2x) {
		return !0
	};
	ba5f.Zb2x = ba5f.Zb2x.ef7Y(function(d4h) {
		d4h.stopped = !0;
		var fc7V = d4h.args[0];
		a3x.Y5d(fc7V, "display", "none");
		try {
			fc7V.contentWindow.document.body.innerHTML = "&nbsp;"
		} catch (ex) {}
	})
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		M5R = c4g("nej.p"),
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		ba5f = c4g("nej.h"),
		bjn4r = {};
	if (M5R.mh9Y.trident) return;
	ba5f.EZ5e = ba5f.EZ5e.ef7Y(function(d4h) {
		d4h.stopped = !0;
		var i4m = d4h.args[0];
		if (!i4m) {
			d4h.value = null;
			return
		}
		var r4v = 0,
			m4q = [];
		while ( !! i4m[r4v]) {
			m4q.push(i4m[r4v++])
		}
		d4h.value = m4q
	});
	ba5f.blN5S = ba5f.blN5S.ef7Y(function(d4h) {
		d4h.stopped = !0;
		var bs5x = [];
		k4o.bc5h(d4h.args[0].childNodes, function(f4j) {
			if (f4j.nodeType == 1) bs5x.push(f4j)
		});
		d4h.value = bs5x
	});
	ba5f.bna5f = ba5f.bna5f.ef7Y(function(d4h) {
		var E5J = d4h.args[0];
		if ( !! E5J.getElementsByClassName) return;
		d4h.stopped = !0;
		var m4q = [],
			bjB4F = new RegExp("(\\s|^)(?:" + d4h.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
		k4o.bc5h(E5J.getElementsByTagName("*"), function(f4j) {
			if (bjB4F.test(f4j.className)) m4q.push(f4j)
		});
		d4h.value = m4q
	});
	ba5f.bdp3x = ba5f.bdp3x.ef7Y(function(d4h) {
		var fA7t = d4h.args[0],
			nd9U = d4h.args[1];
		if (fA7t.selectionStart == null) {
			d4h.stopped = !0;
			var cK6E = fA7t.createTextRange();
			cK6E.collapse(!0);
			cK6E.moveStart("character", nd9U.start);
			cK6E.moveEnd("character", nd9U.end - nd9U.start);
			cK6E.select();
			fA7t.focus()
		}
	});
	ba5f.bem3x = ba5f.bem3x.ef7Y(function(d4h) {
		var fA7t = d4h.args[0];
		fA7t.focus();
		if (fA7t.selectionStart == null) {
			d4h.stopped = !0;
			var bCt9k = document.selection.createRange();
			var bCu9l = fA7t.createTextRange();
			bCu9l.moveToBookmark(bCt9k.getBookmark());
			var bkg5l = fA7t.createTextRange();
			bkg5l.collapse(!0);
			bkg5l.setEndPoint("EndToStart", bCu9l);
			var iq8i = bkg5l.text.length;
			d4h.value = {
				start: iq8i,
				end: iq8i + bCt9k.text.length
			}
		}
	});
	ba5f.bik4o = ba5f.bik4o.ef7Y(function(d4h) {
		if ( !! window.XMLSerializer) return;
		d4h.stopped = !0;
		var E5J = d4h.args[0];
		d4h.value = E5J.xml != null ? E5J.xml : E5J.outHTML
	});
	ba5f.biC4G = function() {
		var KC6w = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
		var bQL3x = function() {
				try {
					for (var i = 0, l = KC6w.length; i < l; i++) return new ActiveXObject(KC6w[i])
				} catch (ex) {
					return null
				}
			};
		return ba5f.biC4G.ef7Y(function(d4h) {
			if ( !! window.DOMParser) return;
			d4h.stopped = !0;
			var mA9r = bQL3x();
			if ( !! mA9r && mA9r.loadXML(d4h.args[0]) && !mA9r.parseError.errorCode) d4h.value = mA9r.documentElement
		})
	}();
	ba5f.zO3x = function() {
		var iD8v = {
			input: "propertychange",
			load: "readystatechange"
		};
		for (var x in iD8v) bjn4r[iD8v[x]] = !0;
		var bQM3x = function(E5J, t4x) {
				if ("on" + t4x in E5J) return null;
				return iD8v[t4x] || ""
			};
		var bQZ3x = function(t4x, da6U) {
				var dt6n = da6U;
				switch (t4x) {
				case "readystatechange":
					dt6n = function(d4h) {
						var E5J = h4l.U5Z(d4h) || this;
						if (E5J.readyState == "loaded" || E5J.readyState == "complete") {
							d4h.target = E5J;
							da6U.call(E5J, d4h)
						}
					};
					break;
				case "propertychange":
					dt6n = function(d4h) {
						var E5J = h4l.U5Z(d4h) || this;
						if ("value" in E5J && d4h.propertyName == "value") {
							d4h.target = E5J;
							da6U.call(E5J, d4h)
						}
					};
					break
				}
				return dt6n
			};
		return ba5f.zO3x.ef7Y(function(d4h) {
			var bf5k = ba5f.bkC5H.apply(ba5f, d4h.args);
			if (!bf5k) {
				d4h.stopped = !0;
				return
			}
			var t4x = bQM3x(bf5k[0], bf5k[1]);
			if ( !! t4x) {
				d4h.stopped = !0;
				bf5k[4] = bf5k[1];
				bf5k[1] = t4x;
				if ( !! bf5k[2]) {
					bf5k[5] = bf5k[2];
					bf5k[2] = bQZ3x(bf5k[1], bf5k[2])
				}
				d4h.value = bf5k
			}
		}, function(d4h) {
			var bf5k = d4h.value;
			if (!bf5k[0] || !k4o.fZ7S(bf5k[2])) return;
			if (!k4o.fZ7S(bf5k[5])) bf5k[5] = bf5k[2];
			bf5k[2] = bf5k[2].g4k(bf5k[0])
		})
	}();
	ba5f.blM5R = ba5f.blM5R.ef7Y(function(d4h) {
		var bf5k = d4h.args;
		if ( !! bjn4r[bf5k[1]] || !document.addEventListener) {
			d4h.stopped = !0;
			bf5k[0].attachEvent("on" + bf5k[1], bf5k[2])
		}
	});
	ba5f.Zq2x = ba5f.Zq2x.ef7Y(function(d4h) {
		var bf5k = d4h.args;
		if ( !! bjn4r[bf5k[1]] || !document.removeEventListener) {
			d4h.stopped = !0;
			bf5k[0].detachEvent("on" + bf5k[1], bf5k[2])
		}
	});
	ba5f.bmF5K = ba5f.bmF5K.ef7Y(function(d4h) {
		if (!document.createEvent) {
			d4h.stopped = !0;
			var bf5k = d4h.args,
				bDb9S = document.createEventObject();
			NEJ.X(bDb9S, bf5k[2]);
			try {
				bf5k[0].fireEvent("on" + bf5k[1], bDb9S)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
		}
	});
	ba5f.bqi6c = ba5f.bqi6c.ef7Y(function(d4h) {
		var bf5k = d4h.args,
			T5Y = bf5k[1].toLowerCase();
		if (T5Y == "opacity" && !(T5Y in document.body.style)) {
			bf5k[1] = "filter";
			bf5k[2] = "alpha(opacity=" + bf5k[2] * 100 + ")"
		}
	});
	ba5f.bcK3x = function() {
		var fd7W = 30;
		return ba5f.bcK3x.ef7Y(function(d4h) {
			var E5J = d4h.args[0];
			if (!E5J.styleSheet) return;
			d4h.stopped = !0;
			var js8k = d4h.args[1];
			var i4m = document.styleSheets;
			if (i4m.length > fd7W) {
				E5J = i4m[fd7W];
				js8k = E5J.cssText + js8k
			} else {
				E5J = E5J.styleSheet
			}
			E5J.cssText = js8k
		})
	}();
	ba5f.bdt3x = ba5f.bdt3x.ef7Y(function(d4h) {
		var bf5k = d4h.args,
			wn2x = bf5k[0].sheet;
		if ( !! wn2x) return;
		d4h.stopped = !0;
		var wn2x = bf5k[0].styleSheet,
			br5w = wn2x.rules.length,
			bs5x = bf5k[1].split(/[\{\}]/);
		wn2x.addRule(bs5x[0], bs5x[1], br5w);
		d4h.value = wn2x.rules[br5w]
	});
	ba5f.bet3x = function() {
		var EI4M = function(dD6x, d4h) {
				a3x.x5C(h4l.U5Z(d4h), dD6x)
			};
		return ba5f.bet3x.ef7Y(function(d4h) {
			if (M5R.dd6X.release >= "4.0") return;
			var bf5k = d4h.args;
			if (bf5k[1] != 1) {
				h4l.s4w(bf5k[0], "blur", EI4M.g4k(null, bf5k[2]));
				bf5k[1] = -1
			}
		})
	}();
	ba5f.Zj2x = function(Zi2x) {
		return !0
	};
	ba5f.bgs4w = ba5f.bgs4w.ef7Y(function(d4h) {
		var bf5k = d4h.args,
			f4j = (bf5k[0].attributes || X5c)[bf5k[1]];
		if ( !! f4j) {
			d4h.stopped = !0;
			d4h.value = f4j.value
		}
	}, function(d4h) {
		var bf5k = d4h.args;
		if (bf5k[1] == "maxlength" && d4h.value == 2147483647) d4h.value = ""
	});
	if (M5R.dd6X.release < 5) {
		ba5f.bjI4M = function() {
			var eT7M, fc7V, jo8g = [],
				bni5n = "cb-" + +(new Date),
				bl5q = '<script>parent.nej.h["' + bni5n + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
			var bDh9Y = function() {
					eT7M = window.clearTimeout(eT7M);
					if (!jo8g.length) return;
					var dH6B = jo8g.shift();
					try {
						var vv2x = fc7V.contentWindow.document;
						vv2x.open();
						vv2x.write("<head><title>");
						vv2x.write(document.title);
						vv2x.write("</title>");
						vv2x.write(bl5q.replace("#<HASH>", encodeURIComponent(dH6B)));
						vv2x.write("</head><body></body>");
						if (location.hostname != document.domain) vv2x.domain = document.domain;
						vv2x.close();
						ba5f[bni5n] = !1
					} catch (ex) {
						console.log(ex.message || ex);
						jo8g.unshift(dH6B)
					}
					eT7M = window.setTimeout(bDh9Y, 50)
				};
			return ba5f.bjI4M.ef7Y(function(d4h) {
				d4h.stopped = !0;
				var dH6B = d4h.args[0];
				if ( !! ba5f[bni5n] || !fc7V && !dH6B) return;
				jo8g.push(dH6B);
				if (!fc7V) fc7V = a3x.YP1x();
				bDh9Y()
			})
		}()
	}
	try {
		document.execCommand("BackgroundImageCache", !1, !0)
	} catch (e) {}
})();
(function() {
	var c4g = NEJ.P,
		h4l = c4g("nej.v"),
		ba5f = c4g("nej.h"),
		M5R = c4g("nej.p"),
		YO1x = M5R.buz7s;
	if (M5R.mh9Y.gecko) return;
	var Qt9k = function() {
			YO1x.css3d = YO1x.css3d || "MozPerspective" in document.body.style;
			if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function(hZ8R, E5J) {
				if (!hZ8R || !E5J) return;
				switch (hZ8R) {
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
				HTMLElement.prototype["__defineGetter__"]("innerText", function() {
					return this.textContent
				});
				HTMLElement.prototype["__defineSetter__"]("innerText", function(bl5q) {
					this.textContent = bl5q
				})
			}
		};
	ba5f.zO3x = function() {
		var ga7T = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
		return ba5f.zO3x.ef7Y(function(d4h) {
			var bf5k = d4h.args;
			if (ga7T.test(bf5k[1] || "")) {
				d4h.stopped = !0;
				d4h.value = bf5k
			}
		})
	}();
	ba5f.bPT2x = function() {
		var bUC4G = function(d4h) {
				h4l.bh5m(d4h);
				h4l.U5Z(d4h).control.click()
			};
		return function(E5J) {
			h4l.s4w(E5J, "click", bUC4G)
		}
	}();
	Qt9k()
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		ba5f = c4g("nej.h");
	var YM1x = function() {
			var nG0x = !! document.body.classList;
			return function() {
				return nG0x
			}
		}();
	var bEH9y = function() {
			var cN6H = /\s+/g;
			return function(fh7a) {
				fh7a = (fh7a || "").trim();
				return !fh7a ? null : new RegExp("(\\s|^)(?:" + fh7a.replace(cN6H, "|") + ")(?=\\s|$)", "g")
			}
		}();
	ba5f.QB9s = ba5f.QB9s.ef7Y(function(d4h) {
		if (YM1x()) return;
		d4h.stopped = !0;
		var bf5k = d4h.args,
			E5J = a3x.y5D(bf5k[0]);
		if (!E5J || !bf5k[1] && !bf5k[2]) return;
		var fh7a = E5J.className || "";
		var Fb5g = " " + (bf5k[2] || ""),
			Fc5h = bEH9y((bf5k[1] || "") + Fb5g); !! Fc5h && (fh7a = fh7a.replace(Fc5h, "$1"));
		E5J.className = (fh7a + Fb5g).replace(/\s+/g, " ").trim()
	});
	ba5f.bnM5R = ba5f.bnM5R.ef7Y(function(d4h) {
		if (YM1x()) return;
		d4h.stopped = !0;
		var bf5k = d4h.args;
		ba5f.QB9s(bf5k[0], "", bf5k[1])
	});
	ba5f.bou6o = ba5f.bou6o.ef7Y(function(d4h) {
		if (YM1x()) return;
		d4h.stopped = !0;
		var bf5k = d4h.args;
		ba5f.QB9s(bf5k[0], bf5k[1], "")
	});
	ba5f.bbp2x = ba5f.bbp2x.ef7Y(function(d4h) {
		if (YM1x()) return;
		d4h.stopped = !0;
		var bf5k = d4h.args,
			E5J = a3x.y5D(bf5k[0]);
		if (!E5J) {
			d4h.value = !1;
			return
		}
		var cN6H = bEH9y(bf5k[1]);
		d4h.value = !cN6H ? !1 : cN6H.test(E5J.className || "")
	})
})();
(function() {
	var c4g = NEJ.P,
		M5R = c4g("nej.p"),
		ba5f = c4g("nej.h");
	if (M5R.mh9Y.webkit) return;
	ba5f.Zj2x = function(Zi2x) {
		return !0
	}
})();
(function() {
	var c4g = NEJ.P,
		ba5f = c4g("nej.h"),
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		h4l = c4g("nej.v"),
		cO6I = c4g("nej.x"),
		P5U = {};
	var bEI9z = function(E5J) {
			E5J = a3x.y5D(E5J);
			if (!E5J || !P5U[E5J.id]) return;
			var YI1x = !0,
				C5H = E5J.id;
			k4o.ei7b(P5U[C5H], function() {
				YI1x = !1;
				return !0
			});
			if (YI1x) delete P5U[C5H]
		};
	h4l.s4w = cO6I.s4w = function() {
		var bUX4b = function() {
				var bf5k = ba5f.zO3x.apply(ba5f, arguments);
				if (!bf5k || !bf5k[2]) return;
				var sZ1x = a3x.kJ9A(bf5k[0]),
					od0x = P5U[sZ1x] || {};
				P5U[sZ1x] = od0x;
				sZ1x = bf5k[4] || bf5k[1];
				var yY3x = od0x[sZ1x] || [];
				od0x[sZ1x] = yY3x;
				yY3x.push({
					type: bf5k[1],
					func: bf5k[2],
					capt: !! bf5k[3],
					sfun: bf5k[5] || bf5k[2]
				});
				return bf5k.slice(0, 4)
			};
		return function() {
			var bf5k = bUX4b.apply(null, arguments);
			if ( !! bf5k) ba5f.blM5R.apply(ba5f, bf5k);
			return this
		}
	}();
	h4l.mv9m = cO6I.mv9m = function() {
		var bUZ4d = function() {
				var vq2x = arguments,
					sZ1x = a3x.kJ9A(vq2x[0]),
					od0x = P5U[sZ1x],
					t4x = (vq2x[1] || "").toLowerCase(),
					d4h = vq2x[2];
				if (!od0x || !t4x || !d4h) return;
				od0x = od0x[t4x];
				if (!od0x) return;
				var bVb4f = !! vq2x[3],
					r4v = k4o.cT6N(od0x, function(iD8v) {
						return d4h == iD8v.sfun && bVb4f == iD8v.capt
					});
				if (r4v < 0) return;
				var iD8v = od0x.splice(r4v, 1)[0];
				return !iD8v ? null : [a3x.y5D(sZ1x), iD8v.type, iD8v.func, iD8v.capt]
			};
		return function() {
			var bf5k = bUZ4d.apply(null, arguments);
			if ( !! bf5k) {
				ba5f.Zq2x.apply(ba5f, bf5k);
				bEI9z(bf5k[0])
			}
			return this
		}
	}();
	h4l.hD8v = cO6I.hD8v = function() {
		var bEP9G = function() {
				var vq2x = arguments,
					sZ1x = a3x.kJ9A(vq2x[0]),
					od0x = P5U[sZ1x],
					yY3x = (vq2x[1] || "").toLowerCase();
				if (!od0x || !yY3x) return;
				var E5J = a3x.y5D(sZ1x);
				k4o.mt9k(od0x[yY3x], function(iD8v, r4v, i4m) {
					ba5f.Zq2x(E5J, iD8v.type, iD8v.func, iD8v.capt);
					i4m.splice(r4v, 1)
				});
				delete od0x[yY3x]
			};
		var bVu4y = function(E5J) {
				E5J = a3x.y5D(E5J);
				if (!E5J) return;
				var C5H = E5J.id;
				k4o.ei7b(P5U[C5H], function(i4m, t4x) {
					bEP9G(C5H, t4x)
				});
				delete P5U[C5H]
			};
		return function(E5J, t4x) {
			!t4x ? bVu4y(E5J) : bEP9G(E5J, t4x);
			bEI9z(E5J);
			return this
		}
	}();
	h4l.U5Z = function() {
		var beO3x;
		var Fw5B = function(T5Y, E5J) {
				var bs5x = T5Y.split(":");
				if (bs5x.length > 1) {
					if (!beO3x) beO3x = {
						c: a3x.bA5F,
						d: a3x.u5z,
						a: a3x.fR7K
					};
					var Fy5D = beO3x[bs5x[0]];
					if ( !! Fy5D) return !!Fy5D(E5J, bs5x[1]);
					T5Y = bs5x[1]
				}
				return !!a3x.fR7K(E5J, T5Y) || !! a3x.u5z(E5J, T5Y) || a3x.bA5F(E5J, T5Y)
			};
		return function(d4h) {
			if (!d4h) return null;
			var E5J = d4h.target || d4h.srcElement,
				dC6w = arguments[1];
			if (!dC6w) return E5J;
			if (k4o.fn7g(dC6w)) dC6w = Fw5B.g4k(null, dC6w);
			if (k4o.fZ7S(dC6w)) {
				while (E5J) {
					if ( !! dC6w(E5J)) return E5J;
					E5J = E5J.parentNode
				}
				return null
			}
			return E5J
		}
	}();
	h4l.bh5m = function(d4h) {
		h4l.rT1x(d4h);
		h4l.cg5l(d4h);
		return this
	};
	h4l.rT1x = function(d4h) {
		if ( !! d4h) { !! d4h.stopPropagation ? d4h.stopPropagation() : d4h.cancelBubble = !0
		}
		return this
	};
	h4l.cg5l = function(d4h) {
		if ( !! d4h) { !! d4h.preventDefault ? d4h.preventDefault() : d4h.returnValue = !1
		}
		return this
	};
	h4l.cvL1x = function() {
		var px0x = !1;
		var bVH4L = function() {
				if (px0x) return;
				px0x = !0;
				h4l.s4w(document, "click", bVI4M, !0)
			};
		var bVI4M = function(d4h) {
				var E5J = h4l.U5Z(d4h),
					bVO4S = a3x.u5z(E5J, "stopped");
				if (bVO4S == "true") {
					h4l.bh5m(d4h);
					a3x.u5z(E5J, "stopped", "false")
				}
			};
		return function(d4h) {
			if (!d4h) return;
			if (d4h.type == "click") {
				h4l.bh5m(d4h);
				return
			}
			bVH4L();
			a3x.u5z(h4l.U5Z(d4h), "stopped", "true")
		}
	}();
	h4l.kn9e = function(d4h) {
		return d4h.pageX != null ? d4h.pageX : d4h.clientX + a3x.oz0x().scrollLeft
	};
	h4l.nV0x = function(d4h) {
		return d4h.pageY != null ? d4h.pageY : d4h.clientY + a3x.oz0x().scrollTop
	};
	h4l.w5B = cO6I.w5B = function(E5J, t4x, e4i) {
		var bf5k = ba5f.zO3x(E5J, t4x);
		if ( !! bf5k) ba5f.bmF5K(bf5k[0], bf5k[1], e4i);
		return this
	};
	c4g("dbg").dumpEV = function() {
		return P5U
	};
	cO6I.isChange = !0
})();
(function() {
	var o = !0,
		w = null;
	(function(B) {
		function v(a) {
			if ("bug-string-char-index" == a) return "a" != "a" [0];
			var f, c = "json" == a;
			if (c || "json-stringify" == a || "json-parse" == a) {
				if ("json-stringify" == a || c) {
					var d = k.stringify,
						b = "function" == typeof d && l;
					if (b) {
						(f = function() {
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
				z = function(a, f) {
					return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
				};
			if (!(p = {}.hasOwnProperty)) p = function(a) {
				var f = {},
					c;
				if ((f.__proto__ = w, f.__proto__ = {
					toString: 1
				}, f).toString != m) p = function(a) {
					var f = this.__proto__,
						a = a in (this.__proto__ = w, this);
					this.__proto__ = f;
					return a
				};
				else {
					c = f.constructor;
					p = function(a) {
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
			C = function(a, f) {
				var c = 0,
					b, h, n;
				(b = function() {
					this.valueOf = 0
				}).prototype.valueOf = 0;
				h = new b;
				for (n in h) p.call(h, n) && c++;
				b = h = w;
				if (c) c = c == 2 ?
				function(a, f) {
					var c = {},
						b = m.call(a) == "[object Function]",
						d;
					for (d in a)!(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
				} : function(a, f) {
					var c = m.call(a) == "[object Function]",
						b, d;
					for (b in a)!(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
					(d || p.call(a, b = "constructor")) && f(b)
				};
				else {
					h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
					c = function(a, f) {
						var c = m.call(a) == "[object Function]",
							b, d;
						if (d = !c) if (d = typeof a.constructor != "function") {
							d = typeof a.hasOwnProperty;
							d = d == "object" ? !! a.hasOwnProperty : !K[d]
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
					u = function(a, f) {
						return ("000000" + (f || 0)).slice(-a)
					},
					G = function(a) {
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
					E = function(a, b, c, d, h, n, e) {
						var g = b[a],
							i, j, k, l, q, s, v, x, y;
						try {
							g = b[a]
						} catch (A) {}
						if (typeof g == "object" && g) {
							i = m.call(g);
							if (i == "[object Date]" && !p.call(g, "toJSON")) if (g > -1 / 0 && g < 1 / 0) {
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
							for (a = e.length; a--;) if (e[a] === g) throw TypeError();
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
								C(d || g, function(a) {
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
				k.stringify = function(a, b, c) {
					var d, h, j;
					if (typeof b == "function" || typeof b == "object" && b) if (m.call(b) == "[object Function]") h = b;
					else if (m.call(b) == "[object Array]") {
						j = {};
						for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
					}
					if (c) if (m.call(c) == "[object Number]") {
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
					b, A, j = function() {
						b = A = w;
						throw SyntaxError()
					},
					q = function() {
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
					F = function(a) {
						var b, c;
						a == "$" && j();
						if (typeof a == "string") {
							if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
							if (a == "[") {
								for (b = [];; c || (c = o)) {
									a = q();
									if (a == "]") break;
									if (c) if (a == ",") {
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
									if (c) if (a == ",") {
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
					I = function(a, b, c) {
						c = H(a, b, c);
						c === r ? delete a[b] : a[b] = c
					},
					H = function(a, b, c) {
						var d = a[b],
							h;
						if (typeof d == "object" && d) if (m.call(d) == "[object Array]") for (h = d.length; h--;) I(d, h, c);
						else C(d, function(a) {
							I(d, a, c)
						});
						return c.call(a, b, d)
					};
				k.parse = function(a, f) {
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
		D && define(function() {
			return k
		})
	})(this)
})();
(function() {
	var c4g = NEJ.P,
		M5R = c4g("nej.p");
	if (M5R.mh9Y.trident0) return;
	JSON.parse = JSON.parse.ef7Y(function(d4h) {
		var cC6w = d4h.args[0] || "";
		if (cC6w.length >= 5e5) {
			d4h.stopped = !0;
			d4h.value = eval("(" + cC6w + ")")
		}
	})
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		dN7G = c4g("nej.g"),
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		h4l = c4g("nej.v"),
		ba5f = c4g("nej.h"),
		cO6I = c4g("nej.x"),
		Fz5E, bjL4P = {},
		P5U = document.createDocumentFragment();
	a3x.kJ9A = cO6I.kJ9A = function(E5J) {
		E5J = a3x.y5D(E5J);
		if (!E5J) return;
		var C5H = !! E5J.id ? E5J.id : "auto-id-" + k4o.Yz1x(16);
		E5J.id = C5H;
		if (a3x.y5D(C5H) != E5J) bjL4P[C5H] = E5J;
		console.log(E5J.outerHTML);
		return C5H
	};
	a3x.y5D = cO6I.y5D = function(E5J) {
		var f4j = bjL4P["" + E5J];
		if ( !! f4j) return f4j;
		if (!k4o.fn7g(E5J) && !k4o.uj1x(E5J)) return E5J;
		return document.getElementById(E5J)
	};
	a3x.cP6J = cO6I.cP6J = function(E5J, dD6x) {
		E5J = a3x.y5D(E5J);
		if (!E5J) return null;
		var i4m = ba5f.blN5S(E5J);
		if ( !! dD6x) k4o.mt9k(i4m, function(f4j, r4v) {
			if (!a3x.bA5F(f4j, dD6x)) i4m.splice(r4v, 1)
		});
		return i4m
	};
	a3x.I5N = cO6I.I5N = function(E5J, fh7a) {
		E5J = a3x.y5D(E5J);
		return !E5J ? null : ba5f.bna5f(E5J, fh7a.trim())
	};
	a3x.bFx0x = cO6I.bFx0x = function(E5J) {
		E5J = a3x.y5D(E5J);
		if ( !! E5J) {
			E5J = E5J.parentNode;
			while ( !! E5J) {
				if (E5J.scrollHeight > E5J.clientHeight) break;
				E5J = E5J.parentNode
			}
			if ( !! E5J) return E5J
		}
		var od0x = document.body.scrollHeight,
			yY3x = document.documentElement.scrollHeight;
		return yY3x >= od0x ? document.documentElement : document.body
	};
	a3x.oz0x = function() {
		var bFS0x = function(i4m) {
				var m4q = 0;
				k4o.bc5h(i4m, function(gm7f) {
					if (!gm7f) return;
					if (!m4q) {
						m4q = gm7f
					} else {
						m4q = Math.min(m4q, gm7f)
					}
				});
				return m4q
			};
		return function(vv2x) {
			var FC5H = vv2x || document,
				yK3x = FC5H.body,
				yJ3x = FC5H.documentElement,
				m4q = {
					scrollTop: Math.max(yK3x.scrollTop, yJ3x.scrollTop),
					scrollLeft: Math.max(yK3x.scrollLeft, yJ3x.scrollLeft),
					clientWidth: bFS0x([yK3x.clientWidth, yK3x.offsetWidth, yJ3x.clientWidth, yJ3x.offsetWidth]),
					clientHeight: bFS0x([yK3x.clientHeight, yK3x.offsetHeight, yJ3x.clientHeight, yJ3x.offsetHeight])
				};
			m4q.scrollWidth = Math.max(m4q.clientWidth, yK3x.scrollWidth, yJ3x.scrollWidth);
			m4q.scrollHeight = Math.max(m4q.clientHeight, yK3x.scrollHeight, yJ3x.scrollHeight);
			return m4q
		}
	}();
	a3x.cvE1x = function(fd7W, nU0x) {
		var m4q = NEJ.X({}, nU0x),
			bFX0x = fd7W.width / fd7W.height,
			Yr1x = nU0x.width / nU0x.height;
		if (bFX0x > Yr1x && nU0x.height > fd7W.height) {
			m4q.height = fd7W.height;
			m4q.width = m4q.height * Yr1x
		}
		if (bFX0x < Yr1x && nU0x.width > fd7W.width) {
			m4q.width = fd7W.width;
			m4q.height = m4q.width / Yr1x
		}
		return m4q
	};
	a3x.cvC1x = function() {
		var cN6H = /\s+/;
		var tL1x = {
			left: function() {
				return 0
			},
			center: function(gK7D, nU0x) {
				return (gK7D.width - nU0x.width) / 2
			},
			right: function(gK7D, nU0x) {
				return gK7D.width - nU0x.width
			},
			top: function() {
				return 0
			},
			middle: function(gK7D, nU0x) {
				return (gK7D.height - nU0x.height) / 2
			},
			bottom: function(gK7D, nU0x) {
				return gK7D.height - nU0x.height
			}
		};
		return function(gK7D, nU0x, mK9B) {
			var m4q = {},
				bs5x = (mK9B || "").split(cN6H),
				gl7e = tL1x[bs5x[1]] || tL1x.middle,
				gH7A = tL1x[bs5x[0]] || tL1x.center;
			m4q.top = gl7e(gK7D, nU0x);
			m4q.left = gH7A(gK7D, nU0x);
			return m4q
		}
	}();
	a3x.sg1x = cO6I.sg1x = function(E5J, dD6x) {
		ba5f.bbC2x(E5J, dD6x || a3x.u5z(E5J, "hover") || "js-hover");
		return this
	};
	a3x.FG5L = cO6I.FG5L = function(E5J) {
		E5J = a3x.y5D(E5J);
		if (!E5J) return;
		ba5f.bbF2x(E5J)
	};
	a3x.bXL5Q = cO6I.bXL5Q = function() {
		var P5U = {},
			bGa0x = 2;
		var bXW5b = function(C5H, dD6x, d4h) {
				P5U[C5H] = [h4l.kn9e(d4h), h4l.nV0x(d4h)];
				a3x.z5E(C5H, dD6x)
			};
		var bXY5d = function(C5H, dD6x, d4h) {
				var bE5J = P5U[C5H];
				if (!k4o.en7g(bE5J)) return;
				var bYg5l = Math.abs(h4l.kn9e(d4h) - bE5J[0]),
					bYi5n = Math.abs(h4l.nV0x(d4h) - bE5J[1]);
				if (bYg5l > bGa0x || bYi5n > bGa0x) bbk2x(C5H, dD6x)
			};
		var bbk2x = function(C5H, dD6x) {
				if (k4o.en7g(P5U[C5H])) {
					P5U[C5H] = -1;
					a3x.x5C(C5H, dD6x)
				}
			};
		return function(E5J, dD6x) {
			var C5H = a3x.kJ9A(E5J);
			if (!C5H || P5U[C5H] != null) return;
			P5U[C5H] = -1;
			dD6x = dD6x || a3x.u5z(C5H, "highlight") || "js-highlight";
			h4l.s4w(C5H, "touchstart", bXW5b.g4k(null, C5H, dD6x));
			h4l.s4w(document, "touchmove", bXY5d.g4k(null, C5H, dD6x));
			h4l.s4w(document, "touchend", bbk2x.g4k(null, C5H, dD6x));
			h4l.s4w(document, "touchcancel", bbk2x.g4k(null, C5H, dD6x))
		}
	}();
	a3x.yA3x = cO6I.yA3x = function() {
		var bYj5o = function(C5H, dD6x, bZE5J) {
				var E5J = a3x.y5D(C5H),
					d4h = {
						clazz: dD6x,
						target: E5J
					};
				if (a3x.bA5F(E5J, dD6x)) {
					d4h.toggled = !1;
					a3x.x5C(E5J, dD6x)
				} else {
					d4h.toggled = !0;
					a3x.z5E(E5J, dD6x)
				}
				bZE5J.call(null, d4h)
			};
		return function(E5J, e4i) {
			E5J = a3x.y5D(E5J);
			if ( !! E5J) {
				var ij8b = {
					ontoggle: bn5s,
					clazz: "js-toggle",
					element: E5J.parentNode
				};
				if (k4o.fn7g(e4i)) {
					var f4j = a3x.y5D(e4i); !! f4j ? ij8b.element = f4j : ij8b.clazz = e4i
				} else {
					NEJ.EX(ij8b, e4i);
					ij8b.element = a3x.y5D(ij8b.element)
				}
				var C5H = a3x.kJ9A(ij8b.element);
				h4l.s4w(E5J, "click", bYj5o.g4k(null, C5H, ij8b.clazz, ij8b.ontoggle || bn5s))
			}
			return this
		}
	}();
	a3x.lW9N = cO6I.lW9N = function(E5J, e4i) {
		E5J = a3x.y5D(E5J);
		if (!E5J) return;
		var eE7x = 0,
			dD6x = "js-focus";
		if (k4o.uj1x(e4i)) {
			eE7x = e4i
		} else if (k4o.fn7g(e4i)) {
			dD6x = e4i
		} else if (k4o.ks9j(e4i)) {
			eE7x = e4i.mode || eE7x;
			dD6x = e4i.clazz || dD6x
		}
		var A5F = parseInt(a3x.u5z(E5J, "mode"));
		if (!isNaN(A5F)) eE7x = A5F;
		A5F = a3x.u5z(E5J, "focus");
		if ( !! A5F) dD6x = A5F;
		ba5f.bet3x(E5J, eE7x, dD6x);
		return this
	};
	a3x.cQ6K = function() {
		var bu5z = {
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
		return function(eW7P, fh7a, bB5G) {
			var E5J = document.createElement(eW7P);
			NEJ.X(E5J, bu5z[eW7P.toLowerCase()]);
			if ( !! fh7a) E5J.className = fh7a;
			bB5G = a3x.y5D(bB5G);
			if ( !! bB5G) bB5G.appendChild(E5J);
			return E5J
		}
	}();
	a3x.YP1x = function() {
		var bZW5b = function() {
				if (location.hostname == document.domain) return "about:blank";
				return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
			};
		var cfs7l = function(T5Y) {
				T5Y = T5Y.trim();
				if (!T5Y) return a3x.cQ6K("iframe");
				var fc7V;
				try {
					fc7V = document.createElement('<iframe name="' + T5Y + '"></iframe>');
					fc7V.frameBorder = 0
				} catch (e) {
					fc7V = a3x.cQ6K("iframe");
					fc7V.name = T5Y
				}
				return fc7V
			};
		return function(e4i) {
			e4i = e4i || X5c;
			var fc7V = cfs7l(e4i.name || "");
			if (!e4i.visible) fc7V.style.display = "none";
			if (k4o.fZ7S(e4i.onload)) h4l.s4w(fc7V, "load", function(d4h) {
				if (!fc7V.src) return;
				h4l.hD8v(fc7V, "load");
				e4i.onload(d4h)
			});
			var bB5G = e4i.parent;
			if (k4o.fZ7S(bB5G)) {
				try {
					bB5G(fc7V)
				} catch (e) {}
			} else {
				(a3x.y5D(bB5G) || document.body).appendChild(fc7V)
			}
			var dv6p = e4i.src || bZW5b();
			window.setTimeout(function() {
				fc7V.src = dv6p
			}, 0);
			return fc7V
		}
	}();
	a3x.cJ6D = cO6I.cJ6D = function() {
		var bJc0x = function(NK8C) {
				NK8C.src = dN7G.bpn6h
			};
		var bJt0x = function(ug1x) {
				ug1x.src = "about:blank"
			};
		return function(E5J, cgB7u) {
			E5J = a3x.y5D(E5J);
			if (!E5J) return this;
			if (!cgB7u) h4l.hD8v(E5J);
			delete bjL4P[E5J.id];
			var eW7P = E5J.tagName;
			if (eW7P == "IFRAME") {
				bJt0x(E5J)
			} else if (eW7P == "IMG") {
				bJc0x(E5J)
			} else if ( !! E5J.getElementsByTagName) {
				k4o.bc5h(E5J.getElementsByTagName("img"), bJc0x);
				k4o.bc5h(E5J.getElementsByTagName("iframe"), bJt0x)
			}
			if ( !! E5J.parentNode) {
				E5J.parentNode.removeChild(E5J)
			}
			return this
		}
	}();
	a3x.mu9l = cO6I.mu9l = function(E5J) {
		E5J = a3x.y5D(E5J);
		if ( !! E5J) P5U.appendChild(E5J);
		return this
	};
	a3x.bJx1x = cO6I.bJx1x = function(E5J) {
		E5J = a3x.y5D(E5J);
		if (!E5J) return;
		k4o.mt9k(E5J.childNodes, function(f4j) {
			a3x.cJ6D(f4j)
		})
	};
	a3x.FT5Y = cO6I.FT5Y = function() {
		var dD6x, ga7T = /\s+/;
		var cgH7A = function() {
				if ( !! dD6x) return;
				dD6x = a3x.rE1x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
				a3x.bJE1x()
			};
		return function(E5J, e4i) {
			E5J = a3x.y5D(E5J);
			if (!E5J) return;
			cgH7A();
			e4i = e4i || X5c;
			var bB5G = E5J.parentNode;
			if (!a3x.bA5F(bB5G, dD6x)) {
				bB5G = a3x.cQ6K("span", dD6x);
				E5J.insertAdjacentElement("beforeBegin", bB5G);
				bB5G.appendChild(E5J)
			}
			var bJZ1x = e4i.nid || "",
				f4j = a3x.I5N(bB5G, bJZ1x || dD6x + "-show")[0];
			if (!f4j) {
				var dE6y = ((e4i.clazz || "") + " " + bJZ1x).trim();
				dE6y = dD6x + "-show" + (!dE6y ? "" : " ") + dE6y;
				f4j = a3x.cQ6K(e4i.tag || "span", dE6y);
				bB5G.appendChild(f4j)
			}
			var dE6y = e4i.clazz;
			if ( !! dE6y) {
				dE6y = (dE6y || "").trim().split(ga7T)[0] + "-parent";
				a3x.z5E(bB5G, dE6y)
			}
			return f4j
		}
	}();
	a3x.u5z = cO6I.u5z = function() {
		var bfT4X = {},
			eW7P = "data-",
			cN6H = /\-(.{1})/gi;
		var Ew4A = function(E5J) {
				var C5H = a3x.kJ9A(E5J);
				if ( !! bfT4X[C5H]) return;
				var bu5z = {};
				k4o.bc5h(E5J.attributes, function(f4j) {
					var J5O = f4j.nodeName;
					if (J5O.indexOf(eW7P) != 0) return;
					J5O = J5O.replace(eW7P, "").replace(cN6H, function($1, $2) {
						return $2.toUpperCase()
					});
					bu5z[J5O] = f4j.nodeValue || ""
				});
				bfT4X[C5H] = bu5z
			};
		return function(E5J, J5O, A5F) {
			E5J = a3x.y5D(E5J);
			if (!E5J) return null;
			var XY1x = E5J.dataset;
			if (!XY1x) {
				Ew4A(E5J);
				XY1x = bfT4X[E5J.id]
			}
			if (A5F !== undefined) XY1x[J5O] = A5F;
			return XY1x[J5O]
		}
	}();
	a3x.fR7K = cO6I.fR7K = function(E5J, T5Y, A5F) {
		E5J = a3x.y5D(E5J);
		if (!E5J) return "";
		if (A5F !== undefined && !! E5J.setAttribute) E5J.setAttribute(T5Y, A5F);
		return ba5f.bgs4w(E5J, T5Y)
	};
	a3x.nf9W = function(dy6s) {
		var pS0x = document.createElement("div");
		pS0x.innerHTML = dy6s;
		var i4m = a3x.cP6J(pS0x);
		return i4m.length > 1 ? pS0x : i4m[0]
	};
	a3x.cil8d = cO6I.cil8d = function(E5J) {
		E5J = a3x.y5D(E5J);
		return !E5J ? "" : ba5f.bik4o(E5J)
	};
	a3x.bKz1x = function(zP3x) {
		zP3x = (zP3x || "").trim();
		return !zP3x ? null : ba5f.biC4G(zP3x)
	};
	a3x.ckc8U = function(cL6F, t4x) {
		cL6F = cL6F || "";
		switch (t4x) {
		case "xml":
			cL6F = a3x.bKz1x(cL6F);
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
	a3x.hJ8B = cO6I.hJ8B = function() {
		var ckq8i = function(E5J) {
				return E5J == document.body || E5J == document.documentElement
			};
		return function(dI6C, nz0x) {
			dI6C = a3x.y5D(dI6C);
			if (!dI6C) return null;
			nz0x = a3x.y5D(nz0x) || null;
			var m4q = {
				x: 0,
				y: 0
			},
				biX4b, dg6a, XQ1x;
			while ( !! dI6C && dI6C != nz0x) {
				biX4b = ckq8i(dI6C);
				dg6a = biX4b ? 0 : dI6C.scrollLeft;
				XQ1x = parseInt(a3x.cW6Q(dI6C, "borderLeftWidth")) || 0;
				m4q.x += dI6C.offsetLeft + XQ1x - dg6a;
				dg6a = biX4b ? 0 : dI6C.scrollTop;
				XQ1x = parseInt(a3x.cW6Q(dI6C, "borderTopWidth")) || 0;
				m4q.y += dI6C.offsetTop + XQ1x - dg6a;
				dI6C = dI6C.offsetParent
			}
			return m4q
		}
	}();
	a3x.mC9t = cO6I.mC9t = function(E5J) {
		var bi5n = a3x.hJ8B(E5J);
		window.scrollTo(bi5n.x, bi5n.y);
		return this
	};
	a3x.cuv1x = function(ro1x) {
		ro1x = (ro1x || "").trim();
		return ba5f.bzK8C(ro1x)
	};
	a3x.ckt8l = cO6I.ckt8l = function(E5J, T5Y, bu5z) {
		E5J = a3x.y5D(E5J);
		if (!E5J) return this;
		var A5F = ba5f.bBS9J(T5Y, bu5z);
		if (!A5F) return this;
		a3x.Y5d(E5J, "transform", A5F);
		return this
	};
	a3x.fE7x = cO6I.fE7x = function(E5J, bu5z) {
		E5J = a3x.y5D(E5J);
		if ( !! E5J) k4o.ei7b(bu5z, function(A5F, T5Y) {
			a3x.Y5d(E5J, T5Y, A5F)
		});
		return this
	};
	a3x.ckw8o = cO6I.ckw8o = function(fA7t, e4i) {
		fA7t = a3x.y5D(fA7t);
		if (!fA7t) return {
			start: 0,
			end: 0
		};
		if (k4o.uj1x(e4i)) e4i = {
			start: e4i,
			end: e4i
		};
		if (e4i != null) {
			if (e4i.end == null) e4i.end = e4i.start || 0;
			ba5f.bdp3x(fA7t, e4i)
		} else {
			e4i = ba5f.bem3x(fA7t)
		}
		return e4i
	};
	a3x.Y5d = cO6I.Y5d = function(E5J, T5Y, A5F) {
		E5J = a3x.y5D(E5J);
		if ( !! E5J) ba5f.bqi6c(E5J, T5Y, A5F);
		return this
	};
	a3x.cW6Q = cO6I.cW6Q = function(E5J, T5Y) {
		E5J = a3x.y5D(E5J);
		if (!E5J) return "";
		var gu7n = !window.getComputedStyle ? E5J.currentStyle || X5c : window.getComputedStyle(E5J, null);
		return gu7n[ba5f.bBU9L(T5Y)] || ""
	};
	a3x.bKT1x = function() {
		var cN6H = /[\s\r\n]+/gi;
		return function(cd5i) {
			cd5i = (cd5i || "").trim().replace(cN6H, " ");
			if (!cd5i) return;
			var f4j = a3x.cQ6K("style");
			document.head.appendChild(f4j);
			ba5f.bcK3x(f4j, ba5f.bPq2x(cd5i));
			return f4j
		}
	}();
	a3x.bKU1x = function(wR2x) {
		try {
			wR2x = wR2x.trim();
			if ( !! wR2x) return (new Function(wR2x))()
		} catch (ex) {
			console.error(ex.message);
			console.error(ex.stack)
		}
	};
	a3x.rE1x = function() {
		var cN6H = /#<.*?>/g,
			fW7P = +(new Date);
		return function(js8k) {
			if (!Fz5E) Fz5E = [];
			var fh7a = "auto-" + fW7P++;
			Fz5E.push(js8k.replace(cN6H, fh7a));
			return fh7a
		}
	}();
	a3x.bJE1x = function() {
		if ( !! Fz5E) {
			a3x.bKT1x(Fz5E.join(""));
			Fz5E = null
		}
		return this
	};
	a3x.cuq1x = function(cd5i, js8k) {
		cd5i = a3x.y5D(cd5i);
		return !cd5i ? null : ba5f.bdt3x(cd5i, js8k)
	};
	a3x.z5E = cO6I.z5E = function() {
		ba5f.bnM5R.apply(ba5f, arguments);
		return this
	};
	a3x.x5C = cO6I.x5C = function() {
		ba5f.bou6o.apply(ba5f, arguments);
		return this
	};
	a3x.eD7w = cO6I.eD7w = function() {
		ba5f.QB9s.apply(ba5f, arguments);
		return this
	};
	a3x.bA5F = cO6I.bA5F = function() {
		return ba5f.bbp2x.apply(ba5f, arguments)
	};
	if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
	cO6I.isChange = !0
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		fb7U = NEJ.R,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		ba5f = c4g("nej.h"),
		k4o = c4g("nej.u");
	var AP3x = function(j4n, t4x) {
			try {
				t4x = t4x.toLowerCase();
				if (j4n === null) return t4x == "null";
				if (j4n === undefined) return t4x == "undefined";
				return X5c.toString.call(j4n).toLowerCase() == "[object " + t4x + "]"
			} catch (e) {
				return !1
			}
		};
	k4o.fZ7S = function(j4n) {
		return AP3x(j4n, "function")
	};
	k4o.fn7g = function(j4n) {
		return AP3x(j4n, "string")
	};
	k4o.uj1x = function(j4n) {
		return AP3x(j4n, "number")
	};
	k4o.cup1x = function(j4n) {
		return AP3x(j4n, "boolean")
	};
	k4o.Gf5k = function(j4n) {
		return AP3x(j4n, "date")
	};
	k4o.en7g = function(j4n) {
		return AP3x(j4n, "array")
	};
	k4o.ks9j = function(j4n) {
		return AP3x(j4n, "object")
	};
	k4o.fe7X = function() {
		var cN6H = /[^\x00-\xfff]/g;
		return function(bl5q) {
			return ("" + (bl5q || "")).replace(cN6H, "**").length
		}
	}();
	k4o.cT6N = function(i4m, q4u) {
		var dC6w = k4o.fZ7S(q4u) ? q4u : function(A5F) {
				return A5F === q4u
			},
			r4v = k4o.ei7b(i4m, dC6w);
		return r4v != null ? r4v : -1
	};
	k4o.cuo1x = function() {
		var bLp1x;
		var QA9r = function(i4m, nx0x, nt0x) {
				if (nx0x > nt0x) return -1;
				var CC4G = Math.ceil((nx0x + nt0x) / 2),
					m4q = bLp1x(i4m[CC4G], CC4G, i4m);
				if (m4q == 0) return CC4G;
				if (m4q < 0) return QA9r(i4m, nx0x, CC4G - 1);
				return QA9r(i4m, CC4G + 1, nt0x)
			};
		return function(i4m, Fy5D) {
			bLp1x = Fy5D || bn5s;
			return QA9r(i4m, 0, i4m.length - 1)
		}
	}();
	k4o.mt9k = function(i4m, dt6n, il8d) {
		if (!i4m || !i4m.length || !k4o.fZ7S(dt6n)) return null;
		for (var i = i4m.length - 1; i >= 0; i--) if ( !! dt6n.call(il8d, i4m[i], i, i4m)) return i;
		return null
	};
	k4o.bc5h = function(i4m, dt6n, il8d) {
		if (!i4m || !i4m.length || !k4o.fZ7S(dt6n)) return this;
		if ( !! i4m.forEach) {
			i4m.forEach(dt6n, il8d);
			return this
		}
		for (var i = 0, l = i4m.length; i < l; i++) dt6n.call(il8d, i4m[i], i, i4m);
		return this
	};
	k4o.ei7b = function(i4m, dt6n, il8d) {
		if (!i4m || !k4o.fZ7S(dt6n)) return null;
		if (i4m.length != null) {
			if (i4m.length > 0) for (var i = 0, l = i4m.length; i < l; i++) if ( !! dt6n.call(il8d, i4m[i], i, i4m)) return i
		}
		if (k4o.ks9j(i4m)) {
			for (var x in i4m) if (i4m.hasOwnProperty(x) && !! dt6n.call(il8d, i4m[x], x, i4m)) return x
		}
		return null
	};
	k4o.coQ9H = function(ic8U, cpv9m, e4i) {
		ic8U = ic8U || [];
		e4i = e4i || X5c;
		var bMM1x = !! e4i.union,
			vc2x = !! e4i.begin,
			Xx1x = e4i.compare,
			csx0x = bMM1x && vc2x ? k4o.mt9k : k4o.bc5h;
		csx0x(cpv9m, function(q4u) {
			if ( !! Xx1x) Xx1x = Xx1x.dT7M(q4u);
			var r4v = k4o.cT6N(ic8U, Xx1x || q4u);
			if (r4v >= 0) ic8U.splice(r4v, 1);
			if (bMM1x) ic8U[vc2x ? "unshift" : "push"](q4u)
		});
		return ic8U
	};
	k4o.DW4a = function(bu5z, bl5q) {
		if (!bu5z || !bl5q || !bl5q.replace) return bl5q || "";
		return bl5q.replace(bu5z.r, function($1) {
			var m4q = bu5z[!bu5z.i ? $1.toLowerCase() : $1];
			return m4q != null ? m4q : $1
		})
	};
	k4o.dS7L = function() {
		var bu5z = {
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
		return function(bl5q) {
			return k4o.DW4a(bu5z, bl5q)
		}
	}();
	k4o.QI9z = function() {
		var bu5z = {
			r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
			"&lt;": "<",
			"&gt;": ">",
			"&amp;": "&",
			"&nbsp;": " ",
			"&#39;": "'",
			"&quot;": '"',
			"<br/>": "\n"
		};
		return function(bl5q) {
			return k4o.DW4a(bu5z, bl5q)
		}
	}();
	k4o.iI8A = function() {
		var bu5z = {
			i: !0,
			r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
		},
			csV0x = ["上午", "下午"],
			csX0x = ["A.M.", "P.M."],
			baW2x = ["日", "一", "二", "三", "四", "五", "六"],
			ctz0x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
			bOd2x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
		var Rb9S = function(gk7d) {
				gk7d = parseInt(gk7d) || 0;
				return (gk7d < 10 ? "0" : "") + gk7d
			};
		var ctG0x = function(ou0x) {
				return ou0x < 12 ? 0 : 1
			};
		return function(by5D, Gi5n, ctE0x) {
			if (!by5D || !Gi5n) return "";
			by5D = k4o.Xk1x(by5D);
			bu5z.yyyy = by5D.getFullYear();
			bu5z.yy = ("" + bu5z.yyyy).substr(2);
			bu5z.M = by5D.getMonth() + 1;
			bu5z.MM = Rb9S(bu5z.M);
			bu5z.eM = bOd2x[bu5z.M - 1];
			bu5z.cM = ctz0x[bu5z.M - 1];
			bu5z.d = by5D.getDate();
			bu5z.dd = Rb9S(bu5z.d);
			bu5z.H = by5D.getHours();
			bu5z.HH = Rb9S(bu5z.H);
			bu5z.m = by5D.getMinutes();
			bu5z.mm = Rb9S(bu5z.m);
			bu5z.s = by5D.getSeconds();
			bu5z.ss = Rb9S(bu5z.s);
			bu5z.ms = by5D.getMilliseconds();
			bu5z.w = baW2x[by5D.getDay()];
			var bOa2x = ctG0x(bu5z.H);
			bu5z.ct = csV0x[bOa2x];
			bu5z.et = csX0x[bOa2x];
			if ( !! ctE0x) {
				bu5z.H = bu5z.H % 12
			}
			return k4o.DW4a(bu5z, Gi5n)
		}
	}();
	k4o.Xk1x = function(by5D) {
		var cE6y = by5D;
		if (k4o.fn7g(by5D)) cE6y = new Date(Date.parse(by5D));
		if (!k4o.Gf5k(by5D)) cE6y = new Date(by5D);
		return cE6y
	};
	k4o.FG5L = function(ctu0x, ctp0x) {
		return (new Number(ctu0x)).toFixed(ctp0x)
	};
	k4o.bdz3x = function() {
		var ga7T = /([^\/:])\/.*$/,
			jf8X = /\/[^\/]+$/,
			Cg4k = /[#\?]/,
			bdB3x = location.href.split(/[?#]/)[0],
			rc1x = document.createElement("a");
		var bdO3x = function(ln9e) {
				return (ln9e || "").indexOf("://") > 0
			};
		var bNV2x = function(ln9e) {
				return (ln9e || "").split(Cg4k)[0].replace(jf8X, "/")
			};
		var ctm0x = function(ln9e, fw7p) {
				if (ln9e.indexOf("/") == 0) return fw7p.replace(ga7T, "$1") + ln9e;
				return bNV2x(fw7p) + ln9e
			};
		bdB3x = bNV2x(bdB3x);
		return function(ln9e, fw7p) {
			ln9e = (ln9e || "").trim();
			if (!bdO3x(fw7p)) fw7p = bdB3x;
			if (!ln9e) return fw7p;
			if (bdO3x(ln9e)) return ln9e;
			ln9e = ctm0x(ln9e, fw7p);
			rc1x.href = ln9e;
			ln9e = rc1x.href;
			return bdO3x(ln9e) ? ln9e : rc1x.getAttribute("href", 4)
		}
	}();
	k4o.ctj0x = function() {
		var cN6H = /^([\w]+?:\/\/.*?(?=\/|$))/i;
		return function(V5a) {
			if (cN6H.test(V5a || "")) return RegExp.$1.toLowerCase();
			return ""
		}
	}();
	k4o.bNR2x = function(G5L, ij8b) {
		if (!G5L) return ij8b;
		var T5Y = G5L.tagName.toLowerCase(),
			i4m = a3x.cP6J(G5L);
		if (!i4m || !i4m.length) {
			ij8b[T5Y] = G5L.textContent || G5L.text || "";
			return ij8b
		}
		var dM6G = {};
		ij8b[T5Y] = dM6G;
		k4o.bc5h(i4m, function(f4j) {
			k4o.bNR2x(f4j, dM6G)
		});
		return ij8b
	};
	k4o.ctO0x = function(zP3x) {
		try {
			return k4o.bNR2x(a3x.bKz1x(zP3x), {})
		} catch (ex) {
			return null
		}
	};
	k4o.bNP2x = function(iw8o, Jv6p) {
		var ij8b = {};
		k4o.bc5h((iw8o || "").split(Jv6p), function(T5Y) {
			var WX1x = T5Y.split("=");
			if (!WX1x || !WX1x.length) return;
			var J5O = WX1x.shift();
			if (!J5O) return;
			ij8b[decodeURIComponent(J5O)] = decodeURIComponent(WX1x.join("="))
		});
		return ij8b
	};
	k4o.vn2x = function(fJ7C, Jv6p, ctb0x) {
		if (!fJ7C) return "";
		var bs5x = [];
		for (var x in fJ7C) {
			bs5x.push(encodeURIComponent(x) + "=" + ( !! ctb0x ? encodeURIComponent(fJ7C[x]) : fJ7C[x]))
		}
		return bs5x.join(Jv6p || ",")
	};
	k4o.hf8X = function(bw5B) {
		return k4o.bNP2x(bw5B, "&")
	};
	k4o.cY6S = function(fJ7C) {
		return k4o.vn2x(fJ7C, "&", !0)
	};
	k4o.ctP0x = function(fJ7C) {
		return ba5f.EZ5e(fJ7C)
	};
	k4o.ctQ0x = function(i4m, dC6w) {
		var m4q = {};
		k4o.bc5h(i4m, function(q4u) {
			var J5O = q4u;
			if ( !! dC6w) {
				J5O = dC6w(q4u)
			}
			m4q[J5O] = q4u
		});
		return m4q
	};
	k4o.ctR0x = function(gk7d, fX7Q) {
		var csU0x = ("" + gk7d).length,
			csT0x = Math.max(1, parseInt(fX7Q) || 0),
			dg6a = csT0x - csU0x;
		if (dg6a > 0) {
			gk7d = (new Array(dg6a + 1)).join("0") + gk7d
		}
		return "" + gk7d
	};
	k4o.WR1x = function(fJ7C, T5Y) {
		if (!k4o.en7g(T5Y)) {
			try {
				delete fJ7C[T5Y]
			} catch (e) {
				fJ7C[T5Y] = undefined
			}
			return this
		}
		k4o.bc5h(T5Y, k4o.WR1x.g4k(k4o, fJ7C));
		return this
	};
	k4o.Yz1x = function() {
		var bNN2x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		return function(br5w) {
			br5w = br5w || 10;
			var m4q = [];
			for (var i = 0, bNM2x; i < br5w; ++i) {
				bNM2x = Math.floor(Math.random() * bNN2x.length);
				m4q.push(bNN2x.charAt(bNM2x))
			}
			return m4q.join("")
		}
	}();
	k4o.JQ6K = function(fK7D, fd7W) {
		return Math.floor(Math.random() * (fd7W - fK7D) + fK7D)
	};
	k4o.mI9z = function(br5w) {
		br5w = Math.max(0, Math.min(br5w || 8, 30));
		var fK7D = Math.pow(10, br5w - 1),
			fd7W = fK7D * 10;
		return k4o.JQ6K(fK7D, fd7W).toString()
	};
	k4o.WH1x = function() {
		var fW7P = +(new Date);
		return function() {
			return "" + fW7P++
		}
	}()
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		fb7U = NEJ.R,
		bn5s = NEJ.F,
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ut"),
		nC0x;
	if ( !! M5R.cz5E) return;
	M5R.cz5E = NEJ.C();
	nC0x = M5R.cz5E.prototype;
	M5R.cz5E.B5G = function(e4i) {
		e4i = e4i || {};
		var cp5u = !! this.xY3x && this.xY3x.shift();
		if (!cp5u) {
			cp5u = new this(e4i);
			this.csQ0x = (this.csQ0x || 0) + 1
		}
		cp5u.bj5o(e4i);
		return cp5u
	};
	M5R.cz5E.S5X = function() {
		var JS6M = function(q4u, r4v, i4m) {
				q4u.S5X();
				i4m.splice(r4v, 1)
			};
		return function(cp5u) {
			if (!cp5u) return null;
			if (!k4o.en7g(cp5u)) {
				if (!(cp5u instanceof this)) {
					var fh7a = cp5u.constructor;
					if ( !! fh7a.S5X) fh7a.S5X(cp5u);
					return null
				}
				if (cp5u == this.eN7G) delete this.eN7G;
				if (cp5u == this.ya3x) delete this.ya3x;
				cp5u.bC5H();
				if (!this.xY3x) this.xY3x = [];
				if (k4o.cT6N(this.xY3x, cp5u) < 0) {
					this.xY3x.push(cp5u)
				}
				return null
			}
			k4o.mt9k(cp5u, JS6M, this)
		}
	}();
	M5R.cz5E.gc7V = function(e4i) {
		e4i = e4i || {};
		if (!this.eN7G) this.eN7G = this.B5G(e4i);
		return this.eN7G
	};
	M5R.cz5E.csP0x = function(e4i, qz0x) {
		e4i = e4i || {};
		if ( !! qz0x && !! this.ya3x) {
			this.ya3x.S5X();
			delete this.ya3x
		}
		if (!this.ya3x) {
			this.ya3x = this.B5G(e4i)
		} else {
			this.ya3x.bj5o(e4i)
		}
		return this.ya3x
	};
	nC0x.cl5q = function() {
		var fW7P = +(new Date);
		return function() {
			this.id = fW7P++;
			this.la9R = {};
			this.bNL2x = {}
		}
	}();
	nC0x.bj5o = function(e4i) {
		this.blc5h(e4i)
	};
	nC0x.bC5H = function() {
		this.hD8v();
		this.Gs5x()
	};
	nC0x.bS5X = function() {
		var fW7P = +(new Date);
		var csw0x = function(bf5k) {
				if (!bf5k || bf5k.length < 3) return;
				this.bNL2x["de-" + fW7P++] = bf5k;
				h4l.s4w.apply(h4l, bf5k)
			};
		return function(i4m) {
			k4o.bc5h(i4m, csw0x, this)
		}
	}();
	nC0x.Gs5x = function() {
		var csr0x = function(bf5k, J5O, bu5z) {
				delete bu5z[J5O];
				h4l.mv9m.apply(h4l, bf5k)
			};
		return function() {
			k4o.ei7b(this.bNL2x, csr0x)
		}
	}();
	nC0x.ctV0x = function(dC6w) {
		dC6w = dC6w || bn5s;
		k4o.ei7b(this, function(DF4J, J5O, bu5z) {
			if ( !! DF4J && !! DF4J.S5X && !dC6w(DF4J)) {
				delete bu5z[J5O];
				DF4J.S5X()
			}
		})
	};
	nC0x.S5X = function() {
		this.constructor.S5X(this)
	};
	nC0x.bNF1x = function(t4x) {
		var d4h = this.la9R[t4x.toLowerCase()];
		return !!d4h && d4h !== bn5s
	};
	nC0x.s4w = function(t4x, d4h) {
		this.uY2x.apply(this, arguments);
		return this
	};
	nC0x.mv9m = function(t4x, d4h) {
		var t4x = (t4x || "").toLowerCase(),
			dG6A = this.la9R[t4x];
		if (!k4o.en7g(dG6A)) {
			if (dG6A == d4h) delete this.la9R[t4x];
			return
		}
		k4o.mt9k(dG6A, function(eH7A, r4v, i4m) {
			if (eH7A == d4h) i4m.splice(r4v, 1)
		})
	};
	nC0x.uY2x = function(t4x, d4h) {
		if ( !! t4x && k4o.fZ7S(d4h)) this.la9R[t4x.toLowerCase()] = d4h;
		return this
	};
	nC0x.blc5h = function() {
		var cso0x = function(d4h, t4x) {
				this.uY2x(t4x, d4h)
			};
		return function(dG6A) {
			k4o.ei7b(dG6A, cso0x, this);
			return this
		}
	}();
	nC0x.hD8v = function() {
		var bmj5o = function(d4h, t4x) {
				this.hD8v(t4x)
			};
		return function(t4x) {
			var t4x = (t4x || "").toLowerCase();
			if ( !! t4x) {
				delete this.la9R[t4x]
			} else {
				k4o.ei7b(this.la9R, bmj5o, this)
			}
			return this
		}
	}();
	nC0x.bmq5v = function(t4x, d4h) {
		if (!t4x || !k4o.fZ7S(d4h)) return this;
		t4x = t4x.toLowerCase();
		var dG6A = this.la9R[t4x];
		if (!dG6A) {
			this.la9R[t4x] = d4h;
			return this
		}
		if (!k4o.en7g(dG6A)) {
			this.la9R[t4x] = [dG6A]
		}
		this.la9R[t4x].push(d4h);
		return this
	};
	nC0x.w5B = function(t4x) {
		var d4h = this.la9R[(t4x || "").toLowerCase()];
		if (!d4h) return this;
		var bf5k = fb7U.slice.call(arguments, 1);
		if (!k4o.en7g(d4h)) return d4h.apply(this, bf5k);
		k4o.bc5h(d4h, function(da6U) {
			try {
				da6U.apply(this, bf5k)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
		}, this);
		return this
	};
	M5R.WA1x = function() {
		var P5U = {};
		return function(C5H, fh7a, e4i) {
			var eK7D = fh7a.csm0x;
			if (!eK7D) {
				eK7D = k4o.Yz1x(10);
				fh7a.csm0x = eK7D
			}
			var J5O = C5H + "-" + eK7D,
				cp5u = P5U[J5O];
			if ( !! e4i && !cp5u) {
				cp5u = fh7a.B5G(e4i);
				cp5u.S5X = cp5u.S5X.ef7Y(function(d4h) {
					delete P5U[J5O];
					delete cp5u.S5X
				});
				P5U[J5O] = cp5u
			}
			return cp5u
		}
	}()
})();
(function() {
	var o = NEJ.O,
		u = NEJ.P("nej.u"),
		j = NEJ.P("nej.j");
	j.gI7B = function() {
		var cE6y = new Date,
			csl0x = +cE6y,
			bnx5C = 864e5;
		var csk0x = function(T5Y) {
				var qK0x = document.cookie,
					rj1x = "\\b" + T5Y + "=",
					Wv1x = qK0x.search(rj1x);
				if (Wv1x < 0) return "";
				Wv1x += rj1x.length - 2;
				var yb3x = qK0x.indexOf(";", Wv1x);
				if (yb3x < 0) yb3x = qK0x.length;
				return qK0x.substring(Wv1x, yb3x) || ""
			};
		return function(T5Y, j4n) {
			if (j4n === undefined) return csk0x(T5Y);
			if (u.fn7g(j4n)) {
				if ( !! j4n) {
					document.cookie = T5Y + "=" + j4n + ";";
					return j4n
				}
				j4n = {
					expires: -100
				}
			}
			j4n = j4n || o;
			var qK0x = T5Y + "=" + (j4n.value || "") + ";";
			delete j4n.value;
			if (j4n.expires !== undefined) {
				cE6y.setTime(csl0x + j4n.expires * bnx5C);
				j4n.expires = cE6y.toGMTString()
			}
			qK0x += u.vn2x(j4n, ";");
			document.cookie = qK0x
		}
	}()
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		iy8q = c4g("nej.c"),
		dN7G = c4g("nej.g"),
		a3x = c4g("nej.e"),
		v5A = c4g("nej.j"),
		H5M = c4g("nej.ut"),
		M5R = c4g("nej.ut.j"),
		k4o = c4g("nej.u"),
		b4f;
	if ( !! M5R.Gv5A) return;
	M5R.Gv5A = NEJ.C();
	b4f = M5R.Gv5A.O5T(H5M.cz5E);
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.oG0x = {
			noescape: false,
			url: "",
			sync: !1,
			cookie: !1,
			type: "text",
			method: "GET",
			timeout: 6e4
		};
		NEJ.EX(this.oG0x, e4i);
		var Ac3x = iy8q.y5D("csrf");
		if ((/^\/[^\/]/.test(this.oG0x.url) || this.oG0x.url.indexOf(location.protocol + "//" + location.host) == 0) && !! Ac3x.cookie && !! Ac3x.param) {
			var bw5B = encodeURIComponent(Ac3x.param) + "=" + encodeURIComponent(v5A.gI7B(Ac3x.cookie) || ""),
				Jv6p = this.oG0x.url.indexOf("?") < 0 ? "?" : "&";
			this.oG0x.url += Jv6p + bw5B
		}
		this.Wq1x = e4i.headers || {};
		var bl5q = this.Wq1x[dN7G.vQ2x];
		if (bl5q == null) this.Wq1x[dN7G.vQ2x] = dN7G.caV6P
	};
	b4f.bC5H = function() {
		this.bG5L();
		delete this.ye3x;
		delete this.oG0x;
		delete this.Wq1x
	};
	b4f.csh0x = function(bl5q) {
		var bu5z = {
			r: /\<|\>/g,
			"<": "&lt;",
			">": "&gt;"
		};
		if (!this.oG0x.noescape) {
			return k4o.DW4a(bu5z, bl5q)
		} else {
			return bl5q
		}
	};
	b4f.sT1x = function(d4h) {
		var dZ7S = d4h.status;
		if (dZ7S == -1) {
			this.w5B("onerror", {
				code: dN7G.bww7p,
				message: "请求[" + this.oG0x.url + "]超时！"
			});
			return
		}
		if (("" + dZ7S).indexOf("2") != 0) {
			this.w5B("onerror", {
				data: dZ7S,
				code: dN7G.bln5s,
				message: "服务器返回异常状态[" + dZ7S + "]!",
				extData: d4h.result
			});
			return
		}
		this.w5B("onload", a3x.ckc8U(this.csh0x(d4h.result), this.oG0x.type))
	};
	b4f.cj5o = bn5s;
	b4f.bbc2x = function(j4n) {
		var V5a = this.oG0x.url;
		if (!V5a) {
			this.w5B("onerror", {
				code: dN7G.bfO3x,
				message: "没有输入请求地址！"
			});
			return this
		}
		try {
			this.oG0x.data = j4n == null ? null : j4n;
			var d4h = {
				request: this.oG0x,
				headers: this.Wq1x
			};
			try {
				this.w5B("onbeforerequest", d4h)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
			this.cj5o(d4h)
		} catch (e) {
			this.w5B("onerror", {
				code: dN7G.bln5s,
				message: "请求[" + V5a + "]失败:" + e.message + "！"
			})
		}
		return this
	};
	b4f.jk8c = bn5s
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		ba5f = c4g("nej.h"),
		dN7G = c4g("nej.g"),
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ut.j"),
		P5U = {},
		Kk6e;
	if ( !! M5R.Wn1x) return;
	M5R.Wn1x = NEJ.C();
	Kk6e = M5R.Wn1x.O5T(M5R.Gv5A);
	Kk6e.bC5H = function() {
		this.bG5L();
		window.clearTimeout(this.dJ6D);
		delete this.dJ6D;
		try {
			this.qX1x.onreadystatechange = bn5s;
			this.qX1x.abort()
		} catch (e) {}
		delete this.qX1x
	};
	Kk6e.cj5o = function() {
		var csg0x = function(A5F, J5O) {
				this.qX1x.setRequestHeader(J5O, A5F)
			};
		return function(e4i) {
			var fC7v = e4i.request,
				oe0x = e4i.headers;
			this.qX1x = ba5f.bbO2x();
			if (oe0x[dN7G.vQ2x] === dN7G.CO4S) {
				delete oe0x[dN7G.vQ2x];
				this.qX1x.upload.onprogress = this.hg8Y.g4k(this, 1);
				if (fC7v.data.tagName === "FORM") fC7v.data = new FormData(fC7v.data)
			}
			this.qX1x.onreadystatechange = this.hg8Y.g4k(this, 2);
			if (fC7v.timeout != 0) {
				this.dJ6D = window.setTimeout(this.hg8Y.g4k(this, 3), fC7v.timeout)
			}
			this.qX1x.open(fC7v.method, fC7v.url, !fC7v.sync);
			k4o.ei7b(oe0x, csg0x, this);
			if ( !! this.oG0x.cookie && "withCredentials" in this.qX1x) this.qX1x.withCredentials = !0;
			this.qX1x.send(fC7v.data)
		}
	}();
	Kk6e.hg8Y = function(t4x) {
		switch (t4x) {
		case 1:
			this.w5B("onuploading", arguments[1]);
			break;
		case 2:
			if (this.qX1x.readyState == 4) this.sT1x({
				status: this.qX1x.status,
				result: this.qX1x.responseText || ""
			});
			break;
		case 3:
			this.sT1x({
				status: -1
			});
			break
		}
	};
	Kk6e.jk8c = function() {
		this.sT1x({
			status: 0
		});
		return this
	}
})();
(function() {
	if (typeof TrimPath === "undefined") {
		TrimPath = {};
		if (typeof exports !== "undefined") TrimPath = exports
	}
	var Kl6f = {},
		Wl1x = [],
		bNC1x = /\s+/g,
		fW7P = +(new Date),
		Gx5C, bN5S, lo9f;
	var Ec4g = function() {
			var ga7T = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
				jf8X = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
				Cg4k = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
				bdq3x = /^new\s+/,
				csb0x = /['"]/;
			var crV0x = function(A5F) {
					if (ga7T.test(A5F)) return;
					A5F = A5F.split(".")[0].trim();
					if (!A5F || csb0x.test(A5F)) return;
					A5F = A5F.replace(bdq3x, "");
					try {
						if (Cg4k.test(A5F)) return;
						lo9f[A5F] = 1
					} catch (e) {}
				};
			return function(bl5q) {
				bl5q = bl5q || "";
				if (!bl5q || ga7T.test(bl5q)) return;
				var bs5x = bl5q.split(jf8X);
				for (var i = 0, l = bs5x.length; i < l; i++) crV0x(bs5x[i])
			}
		}();
	var crS0x = function(dk6e) {
			if (dk6e[2] != "in") throw "bad for loop statement: " + dk6e.join(" ");
			Wl1x.push(dk6e[1]);
			Ec4g(dk6e[3]);
			return "var __HASH__" + dk6e[1] + " = " + dk6e[3] + "," + dk6e[1] + "," + dk6e[1] + "_count=0;" + "if (!!__HASH__" + dk6e[1] + ")" + "for(var " + dk6e[1] + "_key in __HASH__" + dk6e[1] + "){" + dk6e[1] + " = __HASH__" + dk6e[1] + "[" + dk6e[1] + "_key];" + "if (typeof(" + dk6e[1] + ')=="function") continue;' + dk6e[1] + "_count++;"
		};
	var crR0x = function() {
			var dk6e = Wl1x[Wl1x.length - 1];
			return "}; if(!__HASH__" + dk6e + "||!" + dk6e + "_count){"
		};
	var crO0x = function() {
			Wl1x.pop();
			return "};"
		};
	var crL0x = function(dk6e) {
			if (dk6e[2] != "as") throw "bad for list loop statement: " + dk6e.join(" ");
			var Kv6p = dk6e[1].split("..");
			if (Kv6p.length > 1) {
				Ec4g(Kv6p[0]);
				Ec4g(Kv6p[1]);
				return "for(var " + dk6e[3] + "," + dk6e[3] + "_index=0," + dk6e[3] + "_beg=" + Kv6p[0] + "," + dk6e[3] + "_end=" + Kv6p[1] + "," + dk6e[3] + "_length=parseInt(" + dk6e[3] + "_end-" + dk6e[3] + "_beg+1);" + dk6e[3] + "_index<" + dk6e[3] + "_length;" + dk6e[3] + "_index++){" + dk6e[3] + " = " + dk6e[3] + "_beg+" + dk6e[3] + "_index;"
			} else {
				Ec4g(dk6e[1]);
				return "for(var __LIST__" + dk6e[3] + " = " + dk6e[1] + "," + dk6e[3] + "," + dk6e[3] + "_index=0," + dk6e[3] + "_length=__LIST__" + dk6e[3] + ".length;" + dk6e[3] + "_index<" + dk6e[3] + "_length;" + dk6e[3] + "_index++){" + dk6e[3] + " = __LIST__" + dk6e[3] + "[" + dk6e[3] + "_index];"
			}
		};
	var crK0x = function(dk6e) {
			if (!dk6e || !dk6e.length) return;
			dk6e.shift();
			var T5Y = dk6e[0].split("(")[0];
			return "var " + T5Y + " = function" + dk6e.join("").replace(T5Y, "") + "{var __OUT=[];"
		};
	var crF0x = function(dk6e) {
			if (!dk6e[1]) throw "bad include statement: " + dk6e.join(" ");
			return 'if (typeof inline == "function"){__OUT.push(inline('
		};
	var bdX3x = function(kP9G, dk6e) {
			Ec4g(dk6e.slice(1).join(" "));
			return kP9G
		};
	var crE0x = function(dk6e) {
			return bdX3x("if(", dk6e)
		};
	var crB0x = function(dk6e) {
			return bdX3x("}else if(", dk6e)
		};
	var crA0x = function(dk6e) {
			return bdX3x("var ", dk6e)
		};
	bN5S = {
		blk: /^\{(cdata|minify|eval)/i,
		tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
		def: {
			"if": {
				pfix: crE0x,
				sfix: "){",
				pmin: 1
			},
			"else": {
				pfix: "}else{"
			},
			elseif: {
				pfix: crB0x,
				sfix: "){",
				pdft: "true"
			},
			"/if": {
				pfix: "}"
			},
			"for": {
				pfix: crS0x,
				pmin: 3
			},
			forelse: {
				pfix: crR0x
			},
			"/for": {
				pfix: crO0x
			},
			list: {
				pfix: crL0x,
				pmin: 3
			},
			"/list": {
				pfix: "};"
			},
			"break": {
				pfix: "break;"
			},
			"var": {
				pfix: crA0x,
				sfix: ";"
			},
			macro: {
				pfix: crK0x
			},
			"/macro": {
				pfix: 'return __OUT.join("");};'
			},
			trim: {
				pfix: function() {
					Gx5C = !0
				}
			},
			"/trim": {
				pfix: function() {
					Gx5C = null
				}
			},
			inline: {
				pfix: crF0x,
				pmin: 1,
				sfix: "));}"
			}
		},
		ext: {
			seed: function(kP9G) {
				return (kP9G || "") + "" + fW7P
			},
			"default": function(A5F, kD9u) {
				return A5F || kD9u
			}
		}
	};
	var crz0x = function() {
			var crs0x = /\\([\{\}])/g;
			return function(bl5q, iJ8B) {
				bl5q = bl5q.replace(crs0x, "$1");
				var dk6e = bl5q.slice(1, -1).split(bNC1x),
					bb5g = bN5S.def[dk6e[0]];
				if (!bb5g) {
					VY0x(bl5q, iJ8B);
					return
				}
				if ( !! bb5g.pmin && bb5g.pmin >= dk6e.length) throw "Statement needs more parameters:" + bl5q;
				iJ8B.push( !! bb5g.pfix && typeof bb5g.pfix != "string" ? bb5g.pfix(dk6e) : bb5g.pfix || "");
				if ( !! bb5g.sfix) {
					if (dk6e.length <= 1) {
						if ( !! bb5g.pdft) iJ8B.push(bb5g.pdft)
					} else {
						for (var i = 1, l = dk6e.length; i < l; i++) {
							if (i > 1) iJ8B.push(" ");
							iJ8B.push(dk6e[i])
						}
					}
					iJ8B.push(bb5g.sfix)
				}
			}
		}();
	var bNq1x = function(GD5I, iJ8B) {
			if (!GD5I || !GD5I.length) return;
			if (GD5I.length == 1) {
				var bfG3x = GD5I.pop();
				Ec4g(bfG3x);
				iJ8B.push(bfG3x == "" ? '""' : bfG3x);
				return
			}
			var bfL3x = GD5I.pop().split(":");
			iJ8B.push("__MDF['" + bfL3x.shift() + "'](");
			bNq1x(GD5I, iJ8B);
			if (bfL3x.length > 0) {
				var bf5k = bfL3x.join(":");
				Ec4g(bf5k);
				iJ8B.push("," + bf5k)
			}
			iJ8B.push(")")
		};
	var VY0x = function(bl5q, iJ8B) {
			if (!bl5q) return;
			var uC2x = bl5q.split("\n");
			if (!uC2x || !uC2x.length) return;
			for (var i = 0, l = uC2x.length, he8W; i < l; i++) {
				he8W = uC2x[i];
				if ( !! Gx5C) {
					he8W = he8W.trim();
					if (!he8W) continue
				}
				crf0x(he8W, iJ8B);
				if ( !! Gx5C && i < l - 1) iJ8B.push("__OUT.push('\\n');")
			}
		};
	var crf0x = function() {
			var crd0x = /\|\|/g,
				crc0x = /#@@#/g;
			return function(bl5q, iJ8B) {
				var KL6F = "}",
					KN6H = -1,
					br5w = bl5q.length,
					vc2x, gB7u, GK5P, VK0x, KX6R;
				while (KN6H + KL6F.length < br5w) {
					vc2x = "${";
					gB7u = "}";
					GK5P = bl5q.indexOf(vc2x, KN6H + KL6F.length);
					if (GK5P < 0) break;
					if (bl5q.charAt(GK5P + 2) == "%") {
						vc2x = "${%";
						gB7u = "%}"
					}
					VK0x = bl5q.indexOf(gB7u, GK5P + vc2x.length);
					if (VK0x < 0) break;
					VI0x(bl5q.substring(KN6H + KL6F.length, GK5P), iJ8B);
					KX6R = bl5q.substring(GK5P + vc2x.length, VK0x).replace(crd0x, "#@@#").split("|");
					for (var i = 0, l = KX6R.length; i < l; KX6R[i] = KX6R[i].replace(crc0x, "||"), i++);
					iJ8B.push("__OUT.push(");
					bNq1x(KX6R, iJ8B);
					iJ8B.push(");");
					KL6F = gB7u;
					KN6H = VK0x
				}
				VI0x(bl5q.substring(KN6H + KL6F.length), iJ8B)
			}
		}();
	var VI0x = function() {
			var bu5z = {
				r: /\n|\\|\'/g,
				"\n": "\\n",
				"\\": "\\\\",
				"'": "\\'"
			};
			var crb0x = function(bl5q) {
					return (bl5q || "").replace(bu5z.r, function($1) {
						return bu5z[$1] || $1
					})
				};
			return function(bl5q, iJ8B) {
				if (!bl5q) return;
				iJ8B.push("__OUT.push('" + crb0x(bl5q) + "');")
			}
		}();
	var cra0x = function() {
			var cqW0x = /\t/g,
				cqT0x = /\n/g,
				cqR0x = /\r\n?/g;
			var bNj1x = function(bl5q, vc2x) {
					var r4v = bl5q.indexOf("}", vc2x + 1);
					while (bl5q.charAt(r4v - 1) == "\\") {
						r4v = bl5q.indexOf("}", r4v + 1)
					}
					return r4v
				};
			var cqP0x = function() {
					var bs5x = [],
						CJ4N = arguments[0];
					for (var x in CJ4N) {
						x = (x || "").trim();
						if (!x) continue;
						bs5x.push(x + "=$v('" + x + "')")
					}
					return bs5x.length > 0 ? "var " + bs5x.join(",") + ";" : ""
				};
			return function(bl5q) {
				lo9f = {};
				bl5q = bl5q.replace(cqR0x, "\n").replace(cqW0x, "    ");
				var qP0x = ["if(!__CTX) return '';", ""];
				qP0x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
				qP0x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
				qP0x.push("__OUT=[];");
				var CT4X = -1,
					br5w = bl5q.length;
				var me9V, GS5X, Lq6k, Lr6l, yr3x, Lt6n, bjG4K, Lw6q;
				while (CT4X + 1 < br5w) {
					me9V = CT4X;
					me9V = bl5q.indexOf("{", me9V + 1);
					while (me9V >= 0) {
						GS5X = bNj1x(bl5q, me9V);
						Lq6k = bl5q.substring(me9V, GS5X);
						Lr6l = Lq6k.match(bN5S.blk);
						if ( !! Lr6l) {
							yr3x = Lr6l[1].length + 1;
							Lt6n = bl5q.indexOf("}", me9V + yr3x);
							if (Lt6n >= 0) {
								bjG4K = Lt6n - me9V - yr3x <= 0 ? "{/" + Lr6l[1] + "}" : Lq6k.substr(yr3x + 1);
								yr3x = bl5q.indexOf(bjG4K, Lt6n + 1);
								if (yr3x >= 0) {
									VY0x(bl5q.substring(CT4X + 1, me9V), qP0x);
									Lw6q = bl5q.substring(Lt6n + 1, yr3x);
									switch (Lr6l[1]) {
									case "cdata":
										VI0x(Lw6q, qP0x);
										break;
									case "minify":
										VI0x(Lw6q.replace(cqT0x, " ").replace(bNC1x, " "), qP0x);
										break;
									case "eval":
										if ( !! Lw6q) qP0x.push("__OUT.push((function(){" + Lw6q + "})());");
										break
									}
									me9V = CT4X = yr3x + bjG4K.length - 1
								}
							}
						} else if (bl5q.charAt(me9V - 1) != "$" && bl5q.charAt(me9V - 1) != "\\" && Lq6k.substr(Lq6k.charAt(1) == "/" ? 2 : 1).search(bN5S.tag) == 0) {
							break
						}
						me9V = bl5q.indexOf("{", me9V + 1)
					}
					if (me9V < 0) break;
					GS5X = bNj1x(bl5q, me9V);
					if (GS5X < 0) break;
					VY0x(bl5q.substring(CT4X + 1, me9V), qP0x);
					crz0x(bl5q.substring(me9V, GS5X + 1), qP0x);
					CT4X = GS5X
				}
				VY0x(bl5q.substring(CT4X + 1), qP0x);
				qP0x.push(';return __OUT.join("");');
				qP0x[1] = cqP0x(lo9f);
				lo9f = null;
				return new Function("__CTX", "__MDF", qP0x.join(""))
			}
		}();
	TrimPath.seed = function() {
		return fW7P
	};
	TrimPath.merge = function() {
		var Lz6t = {};
		TrimPath.dump = function() {
			return {
				func: Lz6t,
				text: Kl6f
			}
		};
		return function(eK7D, j4n, ja8S) {
			try {
				j4n = j4n || {};
				if (!Lz6t[eK7D] && !Kl6f[eK7D]) return "";
				if (!Lz6t[eK7D]) {
					Lz6t[eK7D] = cra0x(Kl6f[eK7D]);
					delete Kl6f[eK7D]
				}
				if ( !! ja8S) {
					for (var x in bN5S.ext) if (!ja8S[x]) ja8S[x] = bN5S.ext[x]
				}
				return Lz6t[eK7D](j4n, ja8S || bN5S.ext)
			} catch (ex) {
				return ex.message || ""
			}
		}
	}();
	TrimPath.parse = function() {
		var cqO0x = +(new Date);
		return function(bl5q, eK7D) {
			if (!bl5q) return "";
			eK7D = eK7D || "ck_" + cqO0x++;
			Kl6f[eK7D] = bl5q;
			return eK7D
		}
	}()
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		ex7q = {},
		bNi1x = {};
	a3x.GZ5e = TrimPath.seed;
	a3x.bU5Z = function() {
		var bNg1x = function(C5H) {
				return !a3x.hV8N ? "" : a3x.hV8N(C5H)
			};
		return function(eK7D, j4n, ja8S) {
			j4n = NEJ.X(NEJ.X({}, bNi1x), j4n);
			j4n.inline = bNg1x;
			ja8S = NEJ.X(NEJ.X({}, ex7q), ja8S);
			ja8S.rand = k4o.mI9z;
			ja8S.format = k4o.iI8A;
			ja8S.escape = k4o.dS7L;
			ja8S.inline = bNg1x;
			return TrimPath.merge(eK7D, j4n, ja8S)
		}
	}();
	a3x.eh7a = function(bl5q, cqI0x) {
		if (!bl5q) return "";
		var eK7D, E5J = a3x.y5D(bl5q);
		if ( !! E5J) {
			eK7D = E5J.id;
			bl5q = E5J.value || E5J.innerText;
			if (!cqI0x) a3x.cJ6D(E5J)
		}
		return TrimPath.parse(bl5q, eK7D)
	};
	a3x.dK6E = function(bB5G, eK7D, j4n, ja8S) {
		bB5G = a3x.y5D(bB5G);
		if ( !! bB5G) bB5G.innerHTML = a3x.bU5Z(eK7D, j4n, ja8S);
		return this
	};
	a3x.ctX0x = function(bu5z) {
		NEJ.X(ex7q, bu5z)
	};
	a3x.cqB0x = function(bu5z) {
		NEJ.X(bNi1x, bu5z)
	};
	c4g("dbg").dumpJST = function() {
		return TrimPath.dump()
	}
})();
(function() {
	var db6V = NEJ.P("nej.p"),
		M5R = window,
		jY8Q = db6V.bae2x,
		bMZ1x = jY8Q.ipad || jY8Q.iphone;
	if (!bMZ1x && !! M5R.requestAnimationFrame && !! M5R.cancelRequestAnimationFrame) return;
	var kP9G = db6V.dd6X.prefix.pro;
	if (!bMZ1x && !! M5R[kP9G + "RequestAnimationFrame"] && !! M5R[kP9G + "CancelRequestAnimationFrame"]) {
		M5R.requestAnimationFrame = M5R[kP9G + "RequestAnimationFrame"];
		M5R.cancelRequestAnimationFrame = M5R[kP9G + "CancelRequestAnimationFrame"];
		return
	}
	var Vs0x = jY8Q.desktop ? 80 : jY8Q.ios ? 50 : 30;
	M5R.requestAnimationFrame = function(dt6n) {
		return window.setTimeout(function() {
			try {
				dt6n(+(new Date))
			} catch (ex) {}
		}, 1e3 / Vs0x)
	};
	M5R.cancelRequestAnimationFrame = function(C5H) {
		window.clearTimeout(C5H);
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		k4o = c4g("nej.u"),
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		ba5f = c4g("nej.h"),
		cO6I = c4g("nej.x"),
		Vr0x = c4g("nej.ut.j.cb"),
		ge7X;
	if ( !! a3x.rS1x) return;
	a3x.rS1x = cO6I.rS1x = function() {
		var P5U = {},
			ga7T = /^(?:mouse.*|(?:dbl)?click)$/i;
		window.onflashevent = function(d4h) {
			var C5H = decodeURIComponent(d4h.target),
				t4x = d4h.type.toLowerCase();
			var da6U = P5U[C5H + "-on" + t4x];
			if ( !! da6U) {
				try {
					da6U(d4h)
				} catch (e) {}
				return
			}
			var cF6z = P5U[C5H + "-tgt"];
			if ( !! cF6z && ga7T.test(t4x)) {
				bMY1x(cF6z, d4h)
			}
		};
		var blZ5e = function(e4i) {
				var bB5G = a3x.y5D(e4i.parent) || document.body,
					dy6s = a3x.bU5Z(ge7X, e4i);
				bB5G.insertAdjacentHTML(!e4i.hidden ? "beforeEnd" : "afterBegin", dy6s)
			};
		var bMY1x = function(C5H, d4h) {
				var t4x = d4h.type.toLowerCase();
				requestAnimationFrame(function() {
					h4l.w5B(C5H, t4x)
				})
			};
		var cqy0x = function(gW8O) {
				return !!gW8O && !! gW8O.inited && !! gW8O.inited()
			};
		var LM7F = function(C5H) {
				var bs5x = [document.embeds[C5H], a3x.y5D(C5H), document[C5H], window[C5H]],
					r4v = k4o.ei7b(bs5x, cqy0x),
					gW8O = bs5x[r4v],
					bml5q = C5H + "-count";
				P5U[bml5q]++;
				if ( !! gW8O || P5U[bml5q] > 100) {
					P5U[C5H](gW8O);
					delete P5U[C5H];
					delete P5U[bml5q];
					return
				}
				window.setTimeout(LM7F.g4k(null, C5H), 300)
			};
		var cqt0x = function(e4i) {
				var C5H = e4i.id,
					fQ7J = e4i.params;
				if (!fQ7J) {
					fQ7J = {};
					e4i.params = fQ7J
				}
				var lo9f = fQ7J.flashvars || "";
				lo9f += (!lo9f ? "" : "&") + ("id=" + C5H);
				if (!e4i.hidden && ( !! e4i.target || ba5f.Zj2x(fQ7J.wmode))) {
					var gY8Q = a3x.kJ9A(e4i.target) || a3x.kJ9A(e4i.parent),
						Vl0x = k4o.WH1x();
					Vr0x["cb" + Vl0x] = bMY1x.g4k(null, gY8Q);
					lo9f += "&onevent=nej.ut.j.cb.cb" + Vl0x;
					P5U[C5H + "-tgt"] = gY8Q
				}
				fQ7J.flashvars = lo9f;
				k4o.ei7b(e4i, function(A5F, J5O) {
					if (k4o.fZ7S(A5F) && J5O != "onready") {
						P5U[C5H + "-" + J5O] = A5F
					}
				})
			};
		return function(e4i) {
			e4i = NEJ.X({}, e4i);
			if (!e4i.src) return;
			var C5H = "flash_" + k4o.WH1x();
			e4i.id = C5H;
			cqt0x(e4i);
			blZ5e(e4i);
			if (!e4i.onready) return;
			P5U[C5H] = e4i.onready;
			P5U[C5H + "-count"] = 0;
			LM7F(C5H)
		}
	}();
	ge7X = a3x.eh7a('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
	cO6I.isChange = !0
})();
(function() {
	var c4g = NEJ.P,
		iy8q = c4g("nej.c"),
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ut.j"),
		Vr0x = c4g("nej.ut.j.cb"),
		P5U = {},
		fW7P = +(new Date),
		bnb5g;
	if ( !! M5R.bnd5i) return;
	Vr0x["ld" + fW7P] = function(J5O, cL6F) {
		var iZ8R = P5U[J5O];
		if (!iZ8R) return;
		delete P5U[J5O];
		iZ8R.sT1x({
			status: 200,
			result: cL6F
		})
	};
	Vr0x["er" + fW7P] = function(J5O, dZ7S) {
		var iZ8R = P5U[J5O];
		if (!iZ8R) return;
		delete P5U[J5O];
		iZ8R.sT1x({
			status: dZ7S || 0
		})
	};
	M5R.bnd5i = NEJ.C();
	bnb5g = M5R.bnd5i.O5T(M5R.Gv5A);
	bnb5g.cj5o = function(e4i) {
		var gW8O = P5U.flash;
		if (k4o.en7g(gW8O)) {
			gW8O.push(this.cj5o.g4k(this, e4i));
			return
		}
		if (!gW8O) {
			P5U.flash = [this.cj5o.g4k(this, e4i)];
			a3x.rS1x({
				hidden: !0,
				src: iy8q.y5D("ajax.swf"),
				onready: function(gW8O) {
					if (!gW8O) return;
					var i4m = P5U.flash;
					P5U.flash = gW8O;
					k4o.mt9k(i4m, function(da6U) {
						try {
							da6U()
						} catch (e) {}
					})
				}
			});
			return
		}
		this.ye3x = "swf-" + k4o.mI9z();
		P5U[this.ye3x] = this;
		var j4n = NEJ.EX({
			url: "",
			data: null,
			method: "GET"
		}, e4i.request);
		j4n.key = this.ye3x;
		j4n.headers = e4i.headers;
		j4n.onerror = "nej.ut.j.cb.er" + fW7P;
		j4n.onloaded = "nej.ut.j.cb.ld" + fW7P;
		var bMV1x = iy8q.ceX7Q(j4n.url);
		if ( !! bMV1x) j4n.policyURL = bMV1x;
		gW8O.request(j4n)
	};
	bnb5g.jk8c = function() {
		delete P5U[this.ye3x];
		this.sT1x({
			status: 0
		});
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		ba5f = c4g("nej.h");
	ba5f.bMU1x = function() {
		var cN6H = /^([\w]+?:\/\/.*?(?=\/|$))/i;
		return function(jN8F) {
			jN8F = jN8F || "";
			if (cN6H.test(jN8F)) return RegExp.$1;
			return "*"
		}
	}();
	ba5f.bnO5T = function(j4n) {
		return j4n
	};
	ba5f.bod5i = function(bMS1x, e4i) {
		if (!bMS1x.postMessage) return;
		e4i = e4i || X5c;
		bMS1x.postMessage(ba5f.bnO5T(e4i.data), ba5f.bMU1x(e4i.origin))
	}
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ut"),
		b4f;
	if ( !! M5R.fu7n) return;
	M5R.fu7n = NEJ.C();
	b4f = M5R.fu7n.O5T(M5R.cz5E);
	b4f.cl5q = function() {
		this.R5W = {};
		this.cs5x()
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.LN7G = a3x.y5D(e4i.element) || window;
		this.bMR1x(e4i.event);
		this.cqe0x();
		this.w5B("oninit")
	};
	b4f.bC5H = function() {
		var CX4b = function(A5F, J5O, bu5z) {
				if (!k4o.en7g(A5F)) {
					k4o.WR1x(this.LN7G, J5O)
				}
				delete bu5z[J5O]
			};
		return function() {
			this.bG5L();
			k4o.ei7b(this.R5W, CX4b, this);
			delete this.LN7G
		}
	}();
	b4f.Vh0x = function(E5J, t4x) {
		E5J = a3x.y5D(E5J);
		return E5J == this.LN7G && (!t4x || !! this.R5W["on" + t4x])
	};
	b4f.bMR1x = function(d4h) {
		if (k4o.fn7g(d4h)) {
			var T5Y = "on" + d4h;
			if (!this.R5W[T5Y]) {
				this.R5W[T5Y] = this.cqa0x.g4k(this, d4h)
			}
			this.bMO1x(d4h);
			return
		}
		if (k4o.en7g(d4h)) {
			k4o.bc5h(d4h, this.bMR1x, this)
		}
	};
	b4f.bMO1x = function(t4x) {
		var d4h = "on" + t4x,
			da6U = this.LN7G[d4h],
			bMN1x = this.R5W[d4h];
		if (da6U != bMN1x) {
			this.Ve0x(t4x);
			if ( !! da6U && da6U != bn5s) this.bML1x(t4x, da6U);
			this.LN7G[d4h] = bMN1x
		}
	};
	b4f.bML1x = function(t4x, da6U, cpT9K) {
		var i4m = this.R5W[t4x];
		if (!i4m) {
			i4m = [];
			this.R5W[t4x] = i4m
		}
		if (k4o.fZ7S(da6U)) {
			!cpT9K ? i4m.push(da6U) : i4m.unshift(da6U)
		}
	};
	b4f.Ve0x = function(t4x, da6U) {
		var i4m = this.R5W[t4x];
		if (!i4m || !i4m.length) return;
		if (!da6U) {
			delete this.R5W[t4x];
			return
		}
		k4o.mt9k(i4m, function(A5F, r4v, Hg5l) {
			if (da6U === A5F) {
				Hg5l.splice(r4v, 1);
				return !0
			}
		})
	};
	b4f.cqa0x = function(t4x, d4h) {
		d4h = d4h || {
			noargs: !0
		};
		d4h.type = t4x;
		this.w5B("ondispatch", d4h);
		if ( !! d4h.stopped) return;
		k4o.bc5h(this.R5W[t4x], function(da6U) {
			try {
				da6U(d4h)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
		})
	};
	b4f.cqe0x = function() {
		var bax2x = function(d4h) {
				var bf5k = d4h.args,
					t4x = bf5k[1].toLowerCase();
				if (this.Vh0x(bf5k[0], t4x)) {
					d4h.stopped = !0;
					this.bMO1x(t4x);
					this.bML1x(t4x, bf5k[2], bf5k[3]);
					this.w5B("oneventadd", {
						type: t4x,
						listener: bf5k[2]
					})
				}
			};
		var cpS9J = function(d4h) {
				var bf5k = d4h.args,
					t4x = bf5k[1].toLowerCase();
				if (this.Vh0x(bf5k[0], t4x)) {
					d4h.stopped = !0;
					this.Ve0x(t4x, bf5k[2])
				}
			};
		var bmj5o = function(d4h) {
				var bf5k = d4h.args,
					t4x = (bf5k[1] || "").toLowerCase();
				if (this.Vh0x(bf5k[0])) {
					if ( !! t4x) {
						this.Ve0x(t4x);
						return
					}
					k4o.ei7b(this.R5W, function(A5F, J5O) {
						if (k4o.en7g(A5F)) {
							this.Ve0x(J5O)
						}
					}, this)
				}
			};
		var cpL9C = function(d4h) {
				var bf5k = d4h.args,
					t4x = bf5k[1].toLowerCase();
				if (this.Vh0x(bf5k[0], t4x)) {
					d4h.stopped = !0;
					bf5k[0]["on" + t4x].apply(bf5k[0], bf5k.slice(2))
				}
			};
		return function() {
			if ( !! this.cpK9B) return;
			this.cpK9B = true;
			h4l.s4w = h4l.s4w.ef7Y(bax2x.g4k(this));
			h4l.mv9m = h4l.mv9m.ef7Y(cpS9J.g4k(this));
			h4l.hD8v = h4l.hD8v.ef7Y(bmj5o.g4k(this));
			h4l.w5B = h4l.w5B.ef7Y(cpL9C.g4k(this))
		}
	}()
})();
(function() {
	var c4g = NEJ.P,
		M5R = c4g("nej.p"),
		ba5f = c4g("nej.h"),
		k4o = c4g("nej.u"),
		h4l = c4g("nej.v"),
		H5M = c4g("nej.ut");
	if (M5R.mh9Y.trident) return;
	if ( !! window.postMessage) {
		ba5f.bnO5T = ba5f.bnO5T.ef7Y(function(d4h) {
			d4h.stopped = !0;
			d4h.value = JSON.stringify(d4h.args[0])
		});
		return
	}
	var J5O = "MSG|",
		jo8g = [];
	var cpJ9A = function() {
			var T5Y = unescape(window.name || "").trim();
			if (!T5Y || T5Y.indexOf(J5O) != 0) return;
			window.name = "";
			var m4q = k4o.bNP2x(T5Y.replace(J5O, ""), "|"),
				jN8F = (m4q.origin || "").toLowerCase();
			if ( !! jN8F && jN8F != "*" && location.href.toLowerCase().indexOf(jN8F) != 0) return;
			h4l.w5B(window, "message", {
				data: JSON.parse(m4q.data || "null"),
				source: window.frames[m4q.self] || m4q.self,
				origin: ba5f.bMU1x(m4q.ref || document.referrer)
			})
		};
	var cpD9u = function() {
			var UU0x;
			var cpC9t = function(bu5z, r4v, i4m) {
					if (k4o.cT6N(UU0x, bu5z.w) < 0) {
						UU0x.push(bu5z.w);
						i4m.splice(r4v, 1);
						bu5z.w.name = bu5z.d
					}
				};
			return function() {
				UU0x = [];
				k4o.mt9k(jo8g, cpC9t);
				UU0x = null
			}
		}();
	ba5f.bod5i = function() {
		var cpr9i = function(j4n) {
				var m4q = {};
				j4n = j4n || X5c;
				m4q.origin = j4n.origin || "";
				m4q.ref = location.href;
				m4q.self = j4n.source;
				m4q.data = JSON.stringify(j4n.data);
				return J5O + k4o.vn2x(m4q, "|", !0)
			};
		return ba5f.bod5i.ef7Y(function(d4h) {
			d4h.stopped = !0;
			var bf5k = d4h.args;
			jo8g.unshift({
				w: bf5k[0],
				d: escape(cpr9i(bf5k[1]))
			})
		})
	}();
	H5M.fu7n.B5G({
		element: window,
		event: "message"
	});
	window.setInterval(cpD9u, 100);
	window.setInterval(cpJ9A, 20)
})();
(function() {
	var c4g = NEJ.P,
		ba5f = c4g("nej.h"),
		a3x = c4g("nej.e"),
		v5A = c4g("nej.j");
	v5A.cpm9d = function() {
		var it8l = window.name || "_parent",
			cpl9c = {
				gl7e: window.top,
				it8l: window,
				bB5G: window.parent
			};
		return function(cF6z, e4i) {
			if (typeof cF6z == "string") {
				cF6z = cpl9c[cF6z] || window.frames[cF6z];
				if (!cF6z) return this
			}
			var j4n = NEJ.X({
				origin: "*",
				source: it8l
			}, e4i);
			ba5f.bod5i(cF6z, j4n);
			return this
		}
	}()
})();
(function() {
	var c4g = NEJ.P,
		iy8q = c4g("nej.c"),
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		M5R = c4g("nej.ut.j"),
		P5U = {},
		UL0x;
	if ( !! M5R.bbL2x) return;
	M5R.bbL2x = NEJ.C();
	UL0x = M5R.bbL2x.O5T(M5R.Gv5A);
	UL0x.cl5q = function() {
		var ey7r = "NEJ-AJAX-DATA:",
			Ew4A = !1;
		var bbX3x = function(d4h) {
				var j4n = d4h.data;
				if (j4n.indexOf(ey7r) != 0) return;
				j4n = JSON.parse(j4n.replace(ey7r, ""));
				var iZ8R = P5U[j4n.key];
				if (!iZ8R) return;
				delete P5U[j4n.key];
				j4n.result = decodeURIComponent(j4n.result || "");
				iZ8R.sT1x(j4n)
			};
		var bca3x = function() {
				if (!Ew4A) {
					Ew4A = !0;
					h4l.s4w(window, "message", bbX3x)
				}
			};
		return function() {
			this.cs5x();
			bca3x()
		}
	}();
	UL0x.cj5o = function(e4i) {
		var fC7v = e4i.request,
			iZ8R = iy8q.bXQ5V(fC7v.url),
			ug1x = P5U[iZ8R];
		if (k4o.en7g(ug1x)) {
			ug1x.push(this.cj5o.g4k(this, e4i));
			return
		}
		if (!ug1x) {
			P5U[iZ8R] = [this.cj5o.g4k(this, e4i)];
			a3x.YP1x({
				src: iZ8R,
				visible: !1,
				onload: function(d4h) {
					var i4m = P5U[iZ8R];
					P5U[iZ8R] = h4l.U5Z(d4h).contentWindow;
					k4o.mt9k(i4m, function(da6U) {
						try {
							da6U()
						} catch (e) {}
					})
				}
			});
			return
		}
		this.ye3x = "frm-" + k4o.mI9z();
		P5U[this.ye3x] = this;
		var j4n = NEJ.EX({
			url: "",
			data: null,
			timeout: 0,
			method: "GET"
		}, fC7v);
		j4n.key = this.ye3x;
		j4n.headers = e4i.headers;
		v5A.cpm9d(P5U[iZ8R], {
			data: j4n
		})
	};
	UL0x.jk8c = function() {
		delete P5U[this.ye3x];
		this.sT1x({
			status: 0
		});
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		dN7G = c4g("nej.g"),
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		M5R = c4g("nej.ut.j"),
		P5U = {},
		Ho5t;
	if ( !! M5R.bcv3x) return;
	M5R.bcv3x = NEJ.C();
	Ho5t = M5R.bcv3x.O5T(M5R.Gv5A);
	Ho5t.cl5q = function() {
		var ey7r = "NEJ-UPLOAD-RESULT:",
			Ew4A = !1;
		var bbX3x = function(d4h) {
				var j4n = d4h.data;
				if (j4n.indexOf(ey7r) != 0) return;
				j4n = JSON.parse(j4n.replace(ey7r, ""));
				var iZ8R = P5U[j4n.key];
				if (!iZ8R) return;
				delete P5U[j4n.key];
				iZ8R.sT1x(decodeURIComponent(j4n.result))
			};
		var bca3x = function() {
				if (!Ew4A) {
					Ew4A = !0;
					h4l.s4w(window, "message", bbX3x)
				}
			};
		return function() {
			this.cs5x();
			bca3x()
		}
	}();
	Ho5t.bC5H = function() {
		this.bG5L();
		a3x.cJ6D(this.bcB3x);
		delete this.bcB3x;
		window.clearTimeout(this.dJ6D);
		delete this.dJ6D
	};
	Ho5t.sT1x = function(cL6F) {
		var Q5V;
		try {
			Q5V = JSON.parse(cL6F);
			this.w5B("onload", Q5V)
		} catch (e) {
			this.w5B("onerror", {
				code: dN7G.bRr3x,
				message: cL6F
			})
		}
	};
	Ho5t.cj5o = function() {
		var cph9Y = function() {
				var lA9r, cL6F;
				try {
					var lA9r = this.bcB3x.contentWindow.document.body,
						cL6F = lA9r.innerText || lA9r.textContent
				} catch (e) {
					return
				}
				this.sT1x(cL6F)
			};
		var bcR3x = function(V5a, eE7x, qK0x) {
				v5A.bq5v(V5a, {
					type: "json",
					method: "POST",
					cookie: qK0x,
					mode: parseInt(eE7x) || 0,
					onload: function(j4n) {
						if (!this.dJ6D) return;
						this.w5B("onuploading", j4n);
						this.dJ6D = window.setTimeout(bcR3x.g4k(this, V5a, eE7x, qK0x), 1e3)
					}.g4k(this),
					onerror: function(bP5U) {
						if (!this.dJ6D) return;
						this.dJ6D = window.setTimeout(bcR3x.g4k(this, V5a, eE7x, qK0x), 1e3)
					}.g4k(this)
				})
			};
		return function(e4i) {
			var fC7v = e4i.request,
				oe0x = e4i.headers,
				eF7y = fC7v.data,
				T5Y = "fom-" + k4o.mI9z();
			P5U[T5Y] = this;
			eF7y.target = T5Y;
			eF7y.method = "POST";
			eF7y.enctype = dN7G.CO4S;
			eF7y.encoding = dN7G.CO4S;
			var V5a = eF7y.action || "",
				lv9m = V5a.indexOf("?") <= 0 ? "?" : "&";
			eF7y.action = V5a + lv9m + "_proxy_=form";
			this.bcB3x = a3x.YP1x({
				name: T5Y,
				onload: function(d4h) {
					var ug1x = h4l.U5Z(d4h);
					h4l.s4w(ug1x, "load", cph9Y.g4k(this));
					eF7y.submit();
					var bMG1x = (eF7y.nej_query || X5c).value;
					if (!bMG1x) return;
					var eE7x = (eF7y.nej_mode || X5c).value,
						qK0x = (eF7y.nej_cookie || X5c).value == "true";
					this.dJ6D = window.setTimeout(bcR3x.g4k(this, bMG1x, eE7x, qK0x), 100)
				}.g4k(this)
			})
		}
	}();
	Ho5t.jk8c = function() {
		this.w5B("onerror", {
			code: dN7G.bSB4F,
			message: "客户端终止文件上传"
		});
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		ba5f = c4g("nej.h"),
		M5R = c4g("nej.ut.j");
	ba5f.bbO2x = function() {
		return new XMLHttpRequest
	};
	ba5f.bdw3x = function(eE7x, UE0x, e4i) {
		var bu5z = !! UE0x ? {
			2: M5R.bcv3x
		} : {
			2: M5R.bbL2x,
			3: M5R.bnd5i
		};
		return (bu5z[eE7x] || M5R.Wn1x).B5G(e4i)
	}
})();
(function() {
	var c4g = NEJ.P,
		M5R = c4g("nej.p"),
		ba5f = c4g("nej.h");
	if (M5R.mh9Y.trident) return;
	ba5f.bbO2x = function() {
		var KC6w = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
		var cpb9S = function() {
				for (var i = 0, l = KC6w.length; i < l; i++) {
					try {
						return new ActiveXObject(KC6w[i])
					} catch (e) {}
				}
				return null
			};
		return ba5f.bbO2x.ef7Y(function(d4h) {
			if ( !! window.XMLHttpRequest) return;
			d4h.stopped = !0;
			d4h.value = cpb9S()
		})
	}();
	ba5f.bdw3x = function() {
		var AI3x = {
			0: 2,
			1: 3
		};
		return ba5f.bdw3x.ef7Y(function(d4h) {
			var bf5k = d4h.args,
				eE7x = bf5k[0] || 0;
			bf5k[0] = !! bf5k[1] ? 2 : AI3x[eE7x] || eE7x
		})
	}()
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		ba5f = c4g("nej.h"),
		dN7G = c4g("nej.g"),
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		M5R = c4g("nej.ut.j"),
		mX9O = {},
		Fw5B = bn5s;
	v5A.jk8c = function(eK7D) {
		var P5U = mX9O[eK7D];
		if (!P5U) return this;
		P5U.req.jk8c();
		return this
	};
	v5A.UB0x = function(dC6w) {
		Fw5B = dC6w || bn5s;
		return this
	};
	v5A.bq5v = function() {
		var iG8y = (location.protocol + "//" + location.host).toLowerCase();
		var cpa9R = function(V5a) {
				var jN8F = k4o.ctj0x(V5a);
				return !!jN8F && jN8F != iG8y
			};
		var coX9O = function(oe0x) {
				return (oe0x || X5c)[dN7G.vQ2x] == dN7G.CO4S
			};
		var coU9L = function(e4i) {
				var UE0x = coX9O(e4i.headers);
				if (!cpa9R(e4i.url) && !UE0x) return M5R.Wn1x.B5G(e4i);
				return ba5f.bdw3x(e4i.mode, UE0x, e4i)
			};
		var CX4b = function(eK7D) {
				var P5U = mX9O[eK7D];
				if (!P5U) return;
				if ( !! P5U.req) P5U.req.S5X();
				delete mX9O[eK7D]
			};
		var bME1x = function(eK7D, t4x) {
				var P5U = mX9O[eK7D];
				if (!P5U) return;
				CX4b(eK7D);
				try {
					var d4h = {
						type: t4x,
						result: arguments[2]
					};
					Fw5B(d4h);
					if (!d4h.stopped)(P5U[t4x] || bn5s)(d4h.result)
				} catch (ex) {
					console.error(ex.message);
					console.error(ex)
				}
			};
		var vw2x = function(eK7D, j4n) {
				bME1x(eK7D, "onload", j4n)
			};
		var yC3x = function(eK7D, bP5U) {
				bME1x(eK7D, "onerror", bP5U)
			};
		return function(V5a, e4i) {
			e4i = e4i || {};
			var eK7D = k4o.mI9z(),
				P5U = {
					onload: e4i.onload || bn5s,
					onerror: e4i.onerror || bn5s
				};
			mX9O[eK7D] = P5U;
			e4i.onload = vw2x.g4k(null, eK7D);
			e4i.onerror = yC3x.g4k(null, eK7D);
			if ( !! e4i.query) {
				var lv9m = V5a.indexOf("?") < 0 ? "?" : "&",
					bw5B = e4i.query;
				if (k4o.ks9j(bw5B)) bw5B = k4o.cY6S(bw5B);
				if ( !! bw5B) V5a += lv9m + bw5B
			}
			e4i.url = V5a;
			P5U.req = coU9L(e4i);
			P5U.req.bbc2x(e4i.data);
			return eK7D
		}
	}();
	v5A.gp7i = function(eF7y, e4i) {
		var gE7x = {
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
		NEJ.EX(gE7x, e4i);
		gE7x.data = eF7y;
		gE7x.method = "POST";
		gE7x.timeout = 0;
		gE7x.headers[dN7G.vQ2x] = dN7G.CO4S;
		return v5A.bq5v(eF7y.action, gE7x)
	}
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		dN7G = c4g("nej.g"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		H5M = c4g("nej.ut"),
		M5R = c4g("nej.ut.j"),
		lm9d, jm8e = 6e4;
	if ( !! M5R.MH7A) return;
	M5R.MH7A = NEJ.C();
	lm9d = M5R.MH7A.O5T(H5M.cz5E);
	lm9d.cl5q = function() {
		this.cs5x();
		this.MI7B = {
			onerror: this.coS9J.g4k(this),
			onloaded: this.coR9I.g4k(this)
		};
		if (!this.constructor.R5W) this.constructor.R5W = {
			loaded: {}
		}
	};
	lm9d.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.HD5I = e4i.version;
		this.bfa3x = e4i.timeout;
		this.MI7B.version = this.HD5I;
		this.MI7B.timeout = this.bfa3x
	};
	lm9d.bMD1x = function(J5O) {
		delete this.constructor.R5W[J5O]
	};
	lm9d.yF3x = function(J5O) {
		return this.constructor.R5W[J5O]
	};
	lm9d.bMA1x = function(J5O, j4n) {
		this.constructor.R5W[J5O] = j4n
	};
	lm9d.Ul0x = bn5s;
	lm9d.bMy1x = function(fC7v) {
		h4l.hD8v(fC7v)
	};
	lm9d.bfX4b = function(fC7v) {
		fC7v.src = this.kK9B;
		document.head.appendChild(fC7v)
	};
	lm9d.yG3x = function() {
		var P5U = this.yF3x(this.kK9B);
		if (!P5U) return;
		window.clearTimeout(P5U.timer);
		this.bMy1x(P5U.request);
		delete P5U.bind;
		delete P5U.timer;
		delete P5U.request;
		this.bMD1x(this.kK9B);
		this.yF3x("loaded")[this.kK9B] = !0
	};
	lm9d.Uh0x = function(T5Y) {
		var P5U = this.yF3x(this.kK9B);
		if (!P5U) return;
		var i4m = P5U.bind;
		this.yG3x();
		if ( !! i4m && i4m.length > 0) {
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
	lm9d.ek7d = function(bP5U) {
		this.Uh0x("onerror", bP5U)
	};
	lm9d.bMv1x = function() {
		this.Uh0x("onloaded")
	};
	lm9d.cor9i = function(V5a) {
		this.constructor.B5G(this.MI7B).HG5L(V5a)
	};
	lm9d.bMt1x = function(bP5U) {
		var P5U = this.yF3x(this.uc1x);
		if (!P5U) return;
		if ( !! bP5U) P5U.error++;
		P5U.loaded++;
		if (P5U.loaded < P5U.total) return;
		this.bMD1x(this.uc1x);
		this.w5B(P5U.error > 0 ? "onerror" : "onloaded")
	};
	lm9d.coS9J = function(bP5U) {
		this.bMt1x(!0)
	};
	lm9d.coR9I = function() {
		this.bMt1x()
	};
	lm9d.HG5L = function(V5a) {
		V5a = k4o.bdz3x(V5a);
		if (!V5a) {
			this.w5B("onerror", {
				code: dN7G.bfO3x,
				message: "请指定要载入的资源地址！"
			});
			return this
		}
		this.kK9B = V5a;
		if ( !! this.HD5I) this.kK9B += (this.kK9B.indexOf("?") < 0 ? "?" : "&") + this.HD5I;
		if (this.yF3x("loaded")[this.kK9B]) {
			try {
				this.w5B("onloaded")
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
			this.S5X();
			return this
		}
		var P5U = this.yF3x(this.kK9B),
			fC7v;
		if ( !! P5U) {
			P5U.bind.unshift(this);
			P5U.timer = window.clearTimeout(P5U.timer)
		} else {
			fC7v = this.Ul0x();
			P5U = {
				request: fC7v,
				bind: [this]
			};
			this.bMA1x(this.kK9B, P5U);
			h4l.s4w(fC7v, "load", this.bMv1x.g4k(this));
			h4l.s4w(fC7v, "error", this.ek7d.g4k(this, {
				code: dN7G.bln5s,
				message: "无法加载指定资源文件[" + this.kK9B + "]！"
			}))
		}
		if (this.bfa3x != 0) P5U.timer = window.setTimeout(this.ek7d.g4k(this, {
			code: dN7G.bww7p,
			message: "指定资源文件[" + this.kK9B + "]载入超时！"
		}), this.bfa3x || jm8e);
		if ( !! fC7v) this.bfX4b(fC7v);
		this.w5B("onloading");
		return this
	};
	lm9d.bMs1x = function(i4m) {
		if (!i4m || !i4m.length) {
			this.w5B("onerror", {
				code: dN7G.bfO3x,
				message: "请指定要载入的资源队列！"
			});
			return this
		}
		this.uc1x = k4o.mI9z();
		var P5U = {
			error: 0,
			loaded: 0,
			total: i4m.length
		};
		this.bMA1x(this.uc1x, P5U);
		for (var i = 0, l = i4m.length; i < l; i++) {
			if (!i4m[i]) {
				P5U.total--;
				continue
			}
			this.cor9i(i4m[i])
		}
		this.w5B("onloading");
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		ba5f = c4g("nej.h"),
		M5R = c4g("nej.ut.j"),
		MT7M;
	if ( !! M5R.bgT4X) return;
	M5R.bgT4X = NEJ.C();
	MT7M = M5R.bgT4X.O5T(M5R.MH7A);
	MT7M.Ul0x = function() {
		var fc7V = a3x.cQ6K("iframe");
		fc7V.width = 0;
		fc7V.height = 0;
		fc7V.style.display = "none";
		return fc7V
	};
	MT7M.bfX4b = function(fC7v) {
		fC7v.src = this.kK9B;
		document.body.appendChild(fC7v)
	};
	MT7M.ek7d = function(bP5U) {
		var fc7V = (this.yF3x(this.kK9B) || X5c).request;
		this.Uh0x("onerror", bP5U);
		ba5f.Zb2x(fc7V)
	};
	MT7M.bMv1x = function() {
		var lA9r = null,
			fc7V = (this.yF3x(this.kK9B) || X5c).request;
		try {
			lA9r = fc7V.contentWindow.document.body
		} catch (ex) {}
		this.Uh0x("onloaded", lA9r);
		ba5f.Zb2x(fc7V)
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		M5R = c4g("nej.ut.j"),
		bhb4f;
	if ( !! M5R.Ue0x) return;
	M5R.Ue0x = NEJ.C();
	bhb4f = M5R.Ue0x.O5T(M5R.MH7A);
	bhb4f.Ul0x = function() {
		return a3x.cQ6K("link")
	};
	bhb4f.bfX4b = function(fC7v) {
		fC7v.href = this.kK9B;
		document.head.appendChild(fC7v)
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		M5R = c4g("nej.ut.j"),
		Ud0x;
	if ( !! M5R.Uc0x) return;
	M5R.Uc0x = NEJ.C();
	Ud0x = M5R.Uc0x.O5T(M5R.MH7A);
	Ud0x.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.bMr1x = e4i.async;
		this.bhR4V = e4i.charset;
		this.MI7B.async = !1;
		this.MI7B.charset = this.bhR4V
	};
	Ud0x.Ul0x = function() {
		var fC7v = a3x.cQ6K("script");
		if (this.bMr1x != null) fC7v.async = !! this.bMr1x;
		if (this.bhR4V != null) fC7v.charset = this.bhR4V;
		return fC7v
	};
	Ud0x.bMy1x = function(fC7v) {
		a3x.cJ6D(fC7v)
	}
})();
(function() {
	var c4g = NEJ.P,
		v5A = c4g("nej.j"),
		M5R = c4g("nej.ut.j");
	v5A.coh9Y = function(V5a, e4i) {
		M5R.Uc0x.B5G(e4i).HG5L(V5a);
		return this
	};
	v5A.cog9X = function(i4m, e4i) {
		M5R.Uc0x.B5G(e4i).bMs1x(i4m);
		return this
	};
	v5A.cue1x = function(V5a, e4i) {
		M5R.Ue0x.B5G(e4i).HG5L(V5a);
		return this
	};
	v5A.coe9V = function(i4m, e4i) {
		M5R.Ue0x.B5G(e4i).bMs1x(i4m);
		return this
	};
	v5A.bMp1x = function(V5a, e4i) {
		M5R.bgT4X.B5G(e4i).HG5L(V5a);
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		H5M = c4g("nej.ut"),
		P5U = {},
		rZ1x = +(new Date) + "-";
	a3x.cH6B = function() {
		var cw5B = 0;
		var MU7N = function() {
				if (cw5B > 0) return;
				cw5B = 0;
				h4l.w5B(document, "templateready");
				h4l.hD8v(document, "templateready")
			};
		var TZ0x = function(fA7t, e4i) {
				var dv6p = a3x.u5z(fA7t, "src");
				if (!dv6p) return;
				e4i = e4i || X5c;
				var fw7p = e4i.root;
				if (!fw7p) {
					fw7p = fA7t.ownerDocument.location.href
				} else {
					fw7p = k4o.bdz3x(fw7p)
				}
				dv6p = dv6p.split(",");
				k4o.bc5h(dv6p, function(A5F, r4v, i4m) {
					i4m[r4v] = k4o.bdz3x(A5F, fw7p)
				});
				return dv6p
			};
		var cnX9O = function(fA7t, e4i) {
				if (!fA7t) return;
				var dv6p = TZ0x(fA7t, e4i);
				if ( !! dv6p) v5A.coe9V(dv6p, {
					version: a3x.u5z(fA7t, "version")
				});
				a3x.bKT1x(fA7t.value)
			};
		var cnW9N = function(A5F) {
				cw5B--;
				a3x.bKU1x(A5F);
				MU7N()
			};
		var cnV9M = function(fA7t, e4i) {
				if (!fA7t) return;
				var dv6p = TZ0x(fA7t, e4i),
					et7m = fA7t.value;
				if ( !! dv6p) {
					cw5B++;
					var e4i = {
						version: a3x.u5z(fA7t, "version"),
						onloaded: cnW9N.g4k(null, et7m)
					};
					window.setTimeout(v5A.cog9X.g4k(v5A, dv6p, e4i), 0);
					return
				}
				a3x.bKU1x(et7m)
			};
		var cnU9L = function(lA9r) {
				cw5B--;
				a3x.cH6B(lA9r);
				MU7N()
			};
		var cnT9K = function(fA7t, e4i) {
				if (!fA7t) return;
				var dv6p = TZ0x(fA7t, e4i)[0];
				if ( !! dv6p) {
					cw5B++;
					var e4i = {
						version: a3x.u5z(fA7t, "version"),
						onloaded: cnU9L
					};
					window.setTimeout(v5A.bMp1x.g4k(v5A, dv6p, e4i), 0)
				}
			};
		var cnQ9H = function(C5H, cL6F) {
				cw5B--;
				a3x.HK5P(C5H, cL6F || "");
				MU7N()
			};
		var cnP9G = function(fA7t, e4i) {
				if (!fA7t || !fA7t.id) return;
				var C5H = fA7t.id,
					dv6p = TZ0x(fA7t, e4i)[0];
				if ( !! dv6p) {
					cw5B++;
					var V5a = dv6p + (dv6p.indexOf("?") < 0 ? "?" : "&") + (a3x.u5z(fA7t, "version") || ""),
						e4i = {
							type: "text",
							method: "GET",
							onload: cnQ9H.g4k(null, C5H)
						};
					window.setTimeout(v5A.bq5v.g4k(v5A, V5a, e4i), 0)
				}
			};
		var cnG9x = function(f4j, e4i) {
				var t4x = f4j.name.toLowerCase();
				switch (t4x) {
				case "jst":
					a3x.eh7a(f4j, !0);
					return;
				case "txt":
					a3x.HK5P(f4j.id, f4j.value || "");
					return;
				case "ntp":
					a3x.hX8P(f4j.value || "", f4j.id);
					return;
				case "js":
					cnV9M(f4j, e4i);
					return;
				case "css":
					cnX9O(f4j, e4i);
					return;
				case "html":
					cnT9K(f4j, e4i);
					return;
				case "res":
					cnP9G(f4j, e4i);
					return
				}
			};
		H5M.fu7n.B5G({
			element: document,
			event: "templateready",
			oneventadd: MU7N
		});
		return function(E5J, e4i) {
			E5J = a3x.y5D(E5J);
			if ( !! E5J) {
				var i4m = E5J.tagName == "TEXTAREA" ? [E5J] : E5J.getElementsByTagName("textarea");
				k4o.bc5h(i4m, function(f4j) {
					cnG9x(f4j, e4i)
				});
				a3x.cJ6D(E5J, !0)
			}
			MU7N();
			return this
		}
	}();
	a3x.HK5P = function(J5O, A5F) {
		P5U[J5O] = A5F || "";
		return this
	};
	a3x.hV8N = function(J5O) {
		return P5U[J5O] || ""
	};
	a3x.hX8P = function(E5J, J5O) {
		J5O = J5O || k4o.mI9z();
		E5J = a3x.y5D(E5J) || E5J;
		a3x.HK5P(rZ1x + J5O, E5J);
		a3x.mu9l(E5J);
		return J5O
	};
	a3x.dq6k = function(J5O) {
		if (!J5O) return null;
		J5O = rZ1x + J5O;
		var A5F = a3x.hV8N(J5O);
		if (!A5F) return null;
		if (k4o.fn7g(A5F)) {
			A5F = a3x.nf9W(A5F);
			a3x.HK5P(J5O, A5F)
		}
		return A5F.cloneNode(!0)
	};
	a3x.yR3x = function() {
		var Fw5B = function(A5F, J5O) {
				return J5O == "offset" || J5O == "limit"
			};
		return function(i4m, q4u, e4i) {
			var bs5x = [];
			if (!i4m || !i4m.length || !q4u) return bs5x;
			e4i = e4i || X5c;
			var du6o = i4m.length,
				iT8L = parseInt(e4i.offset) || 0,
				gB7u = Math.min(du6o, iT8L + (parseInt(e4i.limit) || du6o)),
				cm5r = {
					total: i4m.length,
					range: [iT8L, gB7u]
				};
			NEJ.X(cm5r, e4i, Fw5B);
			for (var i = iT8L, cp5u; i < gB7u; i++) {
				cm5r.index = i;
				cm5r.data = i4m[i];
				cp5u = q4u.B5G(cm5r);
				var C5H = cp5u.Cd4h();
				P5U[C5H] = cp5u;
				cp5u.S5X = cp5u.S5X.ef7Y(function(C5H, cp5u) {
					delete P5U[C5H];
					delete cp5u.S5X
				}.g4k(null, C5H, cp5u));
				bs5x.push(cp5u)
			}
			return bs5x
		}
	}();
	a3x.bMg1x = function(C5H) {
		return P5U[C5H]
	};
	a3x.cuf1x = function(dE6y, e4i) {
		e4i = e4i || X5c;
		a3x.cH6B(e4i.tid || "template-box");
		h4l.s4w(document, "templateready", function() {
			dE6y.B5G().w5B("onshow", e4i)
		})
	};
	c4g("dbg").dumpTC = function() {
		return P5U
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		H5M = c4g("nej.ut"),
		M5R = c4g("nej.ui"),
		b4f;
	if ( !! M5R.er7k) return;
	M5R.er7k = NEJ.C();
	b4f = M5R.er7k.O5T(H5M.cz5E);
	b4f.cl5q = function() {
		this.cs5x();
		a3x.bJE1x();
		this.bZ5e();
		this.bR5W()
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.cnB9s(e4i.clazz);
		this.bMd1x(e4i.parent)
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.bMc1x();
		delete this.fD7w;
		a3x.mu9l(this.o4s);
		a3x.x5C(this.o4s, this.blu5z);
		delete this.blu5z
	};
	b4f.bZ5e = bn5s;
	b4f.bR5W = function() {
		if (!this.ca5f) this.TO0x();
		this.o4s = a3x.dq6k(this.ca5f);
		if (!this.o4s) this.o4s = a3x.cQ6K("div", this.lg9X);
		a3x.z5E(this.o4s, this.lg9X)
	};
	b4f.TO0x = bn5s;
	b4f.cnB9s = function(dD6x) {
		this.blu5z = dD6x || "";
		a3x.z5E(this.o4s, this.blu5z)
	};
	b4f.cnr9i = function() {
		if (!this.lg9X) return;
		a3x.z5E(this.fD7w, this.lg9X + "-parent")
	};
	b4f.bMc1x = function() {
		if (!this.lg9X) return;
		a3x.x5C(this.fD7w, this.lg9X + "-parent")
	};
	b4f.kI9z = function() {
		return this.o4s
	};
	b4f.bMd1x = function(bB5G) {
		if (!this.o4s) return this;
		this.bMc1x();
		if (k4o.fZ7S(bB5G)) {
			this.fD7w = bB5G(this.o4s)
		} else {
			this.fD7w = a3x.y5D(bB5G);
			if ( !! this.fD7w) this.fD7w.appendChild(this.o4s)
		}
		this.cnr9i();
		return this
	};
	b4f.N5S = function() {
		if (!this.fD7w || !this.o4s || this.o4s.parentNode == this.fD7w) return this;
		this.fD7w.appendChild(this.o4s);
		return this
	};
	b4f.bp5u = function() {
		a3x.mu9l(this.o4s);
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		ba5f = c4g("nej.h"),
		M5R = c4g("nej.ui"),
		un1x, bLZ1x;
	if ( !! M5R.Nk7d) return;
	M5R.Nk7d = NEJ.C();
	un1x = M5R.Nk7d.O5T(M5R.er7k);
	bLZ1x = M5R.Nk7d.cf5k;
	un1x.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.uY2x("oncontentready", e4i.oncontentready || this.cnn9e.g4k(this));
		this.cnk9b = !! e4i.nohack;
		this.cnj9a = !! e4i.destroyable;
		this.HO5T(e4i.content)
	};
	un1x.bC5H = function() {
		this.w5B("onbeforerecycle");
		this.bG5L();
		this.TI0x();
		this.HO5T("");
		a3x.fE7x(this.o4s, {
			top: "",
			left: ""
		})
	};
	un1x.cnn9e = bn5s;
	un1x.HP5U = bn5s;
	un1x.TI0x = function() {
		a3x.mu9l(this.o4s);
		if ( !! this.mT9K) {
			this.mT9K = ba5f.bjo4s(this.o4s);
			delete this.mT9K
		}
	};
	un1x.HO5T = function(bl5q) {
		if (!this.o4s || !this.za3x || bl5q == null) return this;
		bl5q = bl5q || "";
		k4o.fn7g(bl5q) ? this.za3x.innerHTML = bl5q : this.za3x.appendChild(bl5q);
		this.w5B("oncontentready", this.za3x);
		return this
	};
	un1x.fY7R = function(bi5n) {
		var A5F = bi5n.top;
		if (A5F != null) {
			A5F += "px";
			a3x.Y5d(this.o4s, "top", A5F);
			a3x.Y5d(this.mT9K, "top", A5F)
		}
		var A5F = bi5n.left;
		if (A5F != null) {
			A5F += "px";
			a3x.Y5d(this.o4s, "left", A5F);
			a3x.Y5d(this.mT9K, "left", A5F)
		}
		return this
	};
	un1x.N5S = function() {
		a3x.Y5d(this.o4s, "visibility", "hidden");
		bLZ1x.N5S.apply(this, arguments);
		this.HP5U();
		a3x.Y5d(this.o4s, "visibility", "");
		if (!this.cnk9b) {
			this.mT9K = ba5f.mT9K(this.o4s)
		}
		return this
	};
	un1x.bp5u = function() {
		this.cnj9a ? this.S5X() : this.TI0x();
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		k4o = c4g("nej.u"),
		a3x = c4g("nej.e"),
		M5R = c4g("nej.ui"),
		zb3x;
	if ( !! M5R.TG0x) return;
	M5R.TG0x = NEJ.C();
	zb3x = M5R.TG0x.O5T(M5R.er7k);
	zb3x.bj5o = function(e4i) {
		this.Nn7g();
		this.bk5p(this.cni9Z(e4i));
		this.bQ5V.onbeforerecycle = this.S5X.g4k(this);
		this.nl9c = this.bnG5L()
	};
	zb3x.bC5H = function() {
		this.w5B("onbeforerecycle");
		this.bG5L();
		delete this.bQ5V;
		a3x.mu9l(this.o4s);
		var zd3x = this.nl9c;
		if ( !! zd3x) {
			delete this.nl9c;
			zd3x.S5X()
		}
	};
	zb3x.bnG5L = bn5s;
	zb3x.cni9Z = function(e4i) {
		var m4q = {};
		k4o.ei7b(e4i, function(q4u, J5O) {
			this.bQ5V.hasOwnProperty(J5O) ? this.bQ5V[J5O] = q4u : m4q[J5O] = q4u
		}, this);
		return m4q
	};
	zb3x.Nn7g = function() {
		this.bQ5V = {
			clazz: "",
			parent: null,
			content: this.o4s,
			destroyable: !1,
			oncontentready: null,
			nohack: !1
		}
	};
	zb3x.N5S = function() {
		if ( !! this.nl9c) this.nl9c.N5S();
		this.w5B("onaftershow");
		return this
	};
	zb3x.bp5u = function() {
		if ( !! this.nl9c) this.nl9c.bp5u();
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		dN7G = c4g("nej.g"),
		ba5f = c4g("nej.h"),
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		h4l = c4g("nej.v"),
		M5R = c4g("nej.ui"),
		Nv7o, bLY1x;
	if ( !! M5R.HU5Z) return;
	var hP8H = a3x.rE1x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dN7G.bpn6h + ");}");
	M5R.HU5Z = NEJ.C();
	Nv7o = M5R.HU5Z.O5T(M5R.er7k);
	bLY1x = M5R.HU5Z.cf5k;
	Nv7o.bj5o = function(e4i) {
		this.bk5p(e4i);
		var bl5q = e4i.content || "&nbsp;";
		k4o.fn7g(bl5q) ? this.o4s.innerHTML = bl5q : this.o4s.appendChild(bl5q)
	};
	Nv7o.bC5H = function() {
		this.bG5L();
		this.o4s.innerHTML = "&nbsp;"
	};
	Nv7o.bZ5e = function() {
		this.lg9X = hP8H
	};
	Nv7o.N5S = function() {
		ba5f.biO4S(this.o4s);
		bLY1x.N5S.apply(this, arguments);
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		M5R = c4g("nej.ut"),
		uq1x;
	if ( !! M5R.vP2x) return;
	M5R.vP2x = NEJ.C();
	uq1x = M5R.vP2x.O5T(M5R.cz5E);
	uq1x.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.cng9X = !! e4i.overflow;
		this.o4s = a3x.y5D(e4i.body);
		this.zg3x = a3x.y5D(e4i.view) || a3x.bFx0x(this.o4s);
		this.bLX1x = a3x.y5D(e4i.mbar) || this.o4s;
		this.Tx0x = parseInt(e4i.direction) || 0;
		if ( !! e4i.isRelative) {
			this.o4s.style.position = "relative";
			this.bpx6r = true;
			this.bpT6N()
		}
		this.bS5X([
			[document, "mouseup", this.bqe6Y.g4k(this)],
			[document, "mousemove", this.bqg6a.g4k(this)],
			[this.bLX1x, "mousedown", this.NH8z.g4k(this)]
		])
	};
	uq1x.bpT6N = function() {
		if ( !! this.bpx6r) {
			this.Ia5f = a3x.hJ8B(this.o4s, this.zg3x);
			this.Ia5f.x -= parseInt(a3x.cW6Q(this.o4s, "left")) || 0;
			this.Ia5f.y -= parseInt(a3x.cW6Q(this.o4s, "top")) || 0
		}
	};
	uq1x.bC5H = function() {
		this.bG5L();
		delete this.o4s;
		delete this.bLX1x;
		delete this.zg3x
	};
	uq1x.bqx6r = function() {
		return {
			x: Math.max(this.zg3x.clientWidth, this.zg3x.scrollWidth) - this.o4s.offsetWidth,
			y: Math.max(this.zg3x.clientHeight, this.zg3x.scrollHeight) - this.o4s.offsetHeight
		}
	};
	uq1x.NH8z = function(d4h) {
		h4l.bh5m(d4h);
		if ( !! this.hT8L) return;
		this.hT8L = {
			x: h4l.kn9e(d4h),
			y: h4l.nV0x(d4h)
		};
		this.bLW1x = this.bqx6r();
		this.w5B("ondragstart", d4h)
	};
	uq1x.bqg6a = function(d4h) {
		if (!this.hT8L) return;
		var bi5n = {
			x: h4l.kn9e(d4h),
			y: h4l.nV0x(d4h)
		};
		var rB1x = bi5n.x - this.hT8L.x,
			rA1x = bi5n.y - this.hT8L.y,
			A5F = {
				top: (parseInt(a3x.cW6Q(this.o4s, "top")) || 0) + rA1x,
				left: (parseInt(a3x.cW6Q(this.o4s, "left")) || 0) + rB1x
			};
		if (this.bpx6r) {
			this.bpT6N();
			A5F.top = A5F.top + this.Ia5f.y;
			A5F.left = A5F.left + this.Ia5f.x
		}
		this.hT8L = bi5n;
		this.fY7R(A5F)
	};
	uq1x.bqe6Y = function(d4h) {
		if (!this.hT8L) return;
		delete this.bLW1x;
		delete this.hT8L;
		this.w5B("ondragend", this.brs6m())
	};
	uq1x.fY7R = function(d4h) {
		if (!this.cng9X) {
			var bLV1x = this.bLW1x || this.bqx6r();
			d4h.top = Math.min(bLV1x.y, Math.max(0, d4h.top));
			d4h.left = Math.min(bLV1x.x, Math.max(0, d4h.left))
		}
		var cd5i = this.o4s.style;
		if (this.bpx6r) {
			this.bpT6N();
			d4h.top = d4h.top - this.Ia5f.y;
			d4h.left = d4h.left - this.Ia5f.x
		}
		if (this.Tx0x == 0 || this.Tx0x == 2) cd5i.top = d4h.top + "px";
		if (this.Tx0x == 0 || this.Tx0x == 1) cd5i.left = d4h.left + "px";
		this.w5B("onchange", d4h);
		return this
	};
	uq1x.brs6m = function() {
		return {
			left: parseInt(a3x.cW6Q(this.o4s, "left")) || 0,
			top: parseInt(a3x.cW6Q(this.o4s, "top")) || 0
		}
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = NEJ.P("nej.e"),
		h4l = NEJ.P("nej.v"),
		k4o = NEJ.P("nej.u"),
		H5M = NEJ.P("nej.ut"),
		M5R = NEJ.P("nej.ui"),
		hP8H, ge7X, b4f, K5P;
	if ( !! M5R.Tp0x) return;
	M5R.Tp0x = NEJ.C();
	b4f = M5R.Tp0x.O5T(M5R.Nk7d);
	K5P = M5R.Tp0x.cf5k;
	b4f.cl5q = function() {
		this.qw0x = {};
		this.jx8p = {
			onchange: this.bqg6a.g4k(this)
		};
		this.cs5x()
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.cmV9M(e4i.mask);
		this.cmU9L(e4i.align);
		this.zn3x(e4i.title);
		if (!e4i.draggable) return;
		this.iU8M = H5M.vP2x.B5G(this.jx8p)
	};
	b4f.bC5H = function() {
		this.bG5L();
		delete this.pB0x;
		delete this.Oa8S;
		if ( !! this.zo3x) {
			this.zo3x.S5X();
			delete this.zo3x
		}
		if ( !! this.iU8M) {
			this.iU8M.S5X();
			delete this.iU8M
		}
	};
	b4f.bZ5e = function() {
		this.lg9X = hP8H;
		this.ca5f = ge7X
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.cP6J(this.o4s);
		this.za3x = i4m[1];
		this.jx8p.mbar = i4m[0];
		this.jx8p.body = this.o4s;
		h4l.s4w(i4m[2], "mousedown", this.cmR9I.g4k(this));
		h4l.s4w(this.jx8p.mbar, "mousedown", this.NH8z.g4k(this));
		this.bLR1x = a3x.cP6J(this.jx8p.mbar)[0]
	};
	b4f.cmR9I = function(d4h) {
		h4l.bh5m(d4h);
		this.w5B("onclose", d4h);
		if (!d4h.stopped) {
			this.bp5u()
		}
	};
	b4f.NH8z = function(d4h) {
		h4l.w5B(document, "click")
	};
	b4f.bqg6a = function(d4h) {
		if (!this.mT9K) return;
		a3x.fE7x(this.mT9K, {
			top: d4h.top + "px",
			left: d4h.left + "px"
		})
	};
	b4f.HP5U = function() {
		var eH7A = [function() {
			return 0
		}, function(mW9N, Ct4x, bi5n, J5O) {
			if (J5O == "top" && window.top != window.self) {
				var Tm0x = 0,
					Cz4D = 0;
				if (top.g_topBarHeight) Tm0x = top.g_topBarHeight;
				if (top.g_bottomBarShow && top.g_bottomBarHeight) Cz4D = top.g_bottomBarHeight;
				if (mW9N.top <= Tm0x) {
					var bcz3x = Math.max(0, (Ct4x.height - (Tm0x - mW9N.top) - Cz4D - bi5n.height) / 2);
					return bcz3x + Tm0x
				} else {
					var bcz3x = Math.max(0, (Ct4x.height - Cz4D - bi5n.height) / 2);
					return bcz3x + mW9N.top
				}
			}
			return Math.max(0, mW9N[J5O] + (Ct4x[hE8w[J5O]] - bi5n[hE8w[J5O]]) / 2)
		}, function(mW9N, Ct4x, bi5n, J5O) {
			return mW9N[J5O] + (Ct4x[hE8w[J5O]] - bi5n[hE8w[J5O]])
		}],
			cmH9y = ["left", "top"],
			hE8w = {
				left: "width",
				top: "height"
			};
		return function() {
			var A5F = {},
				cd5i = this.o4s.style,
				iO8G = a3x.oz0x(),
				mW9N = {
					left: iO8G.scrollLeft,
					top: iO8G.scrollTop
				},
				Ct4x = {
					width: iO8G.clientWidth,
					height: iO8G.clientHeight
				},
				bi5n = {
					width: this.o4s.offsetWidth,
					height: this.o4s.offsetHeight
				},
				dg6a = {
					left: iO8G.clientWidth - this.o4s.offsetWidth,
					top: iO8G.clientHeight - this.o4s.offsetHeight
				};
			k4o.bc5h(cmH9y, function(J5O, r4v) {
				var da6U = eH7A[this.pB0x[r4v]];
				if (!da6U) return;
				A5F[J5O] = da6U(mW9N, Ct4x, bi5n, J5O)
			}, this);
			this.fY7R(A5F)
		}
	}();
	b4f.cmF9w = function() {
		if (!this.zo3x) {
			if (!this.Oa8S) return;
			this.qw0x.parent = this.fD7w;
			this.zo3x = this.Oa8S.B5G(this.qw0x)
		}
		this.zo3x.N5S()
	};
	b4f.TI0x = function() {
		if ( !! this.zo3x) this.zo3x.bp5u();
		K5P.TI0x.apply(this, arguments)
	};
	b4f.cmV9M = function(jX8P) {
		if ( !! jX8P) {
			if (jX8P instanceof M5R.HU5Z) {
				this.zo3x = jX8P;
				return
			}
			if (k4o.fZ7S(jX8P)) {
				this.Oa8S = jX8P;
				return
			}
			this.Oa8S = M5R.HU5Z;
			if (k4o.fn7g(jX8P)) this.qw0x.clazz = jX8P;
			return
		}
		this.Oa8S = null
	};
	b4f.zn3x = function(eB7u, dy6s) {
		if ( !! this.bLR1x) {
			var bak2x = !dy6s ? "innerText" : "innerHTML";
			this.bLR1x[bak2x] = eB7u || "标题"
		}
		return this
	};
	b4f.cmU9L = function() {
		var cN6H = /\s+/,
			cmE9v = {
				left: 0,
				center: 1,
				right: 2,
				auto: 3
			},
			cmD9u = {
				top: 0,
				middle: 1,
				bottom: 2,
				auto: 3
			};
		return function(mK9B) {
			this.pB0x = (mK9B || "").split(cN6H);
			var dM6G = cmE9v[this.pB0x[0]];
			if (dM6G == null) dM6G = 1;
			this.pB0x[0] = dM6G;
			var dM6G = cmD9u[this.pB0x[1]];
			if (dM6G == null) dM6G = 1;
			this.pB0x[1] = dM6G;
			return this
		}
	}();
	b4f.N5S = function() {
		K5P.N5S.apply(this, arguments);
		this.cmF9w();
		return this
	};
	hP8H = a3x.rE1x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
	ge7X = a3x.hX8P('<div class="' + hP8H + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function() {
	var c4g = NEJ.P,
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ui"),
		bcY3x;
	if ( !! M5R.Tk0x) return;
	M5R.Tk0x = NEJ.C();
	bcY3x = M5R.Tk0x.O5T(M5R.TG0x);
	bcY3x.bnG5L = function() {
		return M5R.Tp0x.B5G(this.bQ5V)
	};
	bcY3x.Nn7g = function() {
		M5R.Tk0x.cf5k.Nn7g.apply(this, arguments);
		this.bQ5V.mask = null;
		this.bQ5V.title = "标题";
		this.bQ5V.align = "";
		this.bQ5V.draggable = !1;
		this.bQ5V.onclose = null
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		bd5i = c4g("nej.ui"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.dU7N = NEJ.C();
	b4f = n4r.dU7N.O5T(bd5i.Tk0x);
	b4f.bj5o = function(e4i) {
		e4i.clazz = "m-layer z-show " + (e4i.clazz || "");
		e4i.nohack = true;
		e4i.draggable = true;
		this.bk5p(e4i)
	};
	b4f.dw6q = function(f4j, bD5I) {
		if (!f4j) return;
		a3x.Y5d(f4j, "display", !bD5I ? "none" : "");
		f4j.lastChild.innerText = bD5I || ""
	};
	b4f.dL6F = function(gn7g, cG6A, Om8e, Ot8l) {
		var dE6y = "js-lock";
		if (cG6A === undefined) return a3x.bA5F(gn7g, dE6y);
		!cG6A ? a3x.x5C(gn7g, dE6y) : a3x.z5E(gn7g, dE6y);
		gn7g.firstChild.innerText = !cG6A ? Om8e : Ot8l
	};
	n4r.dU7N.N5S = function(e4i) {
		e4i = e4i || {};
		if (e4i.mask === undefined) e4i.mask = "m-mask";
		if (e4i.parent === undefined) e4i.parent = document.body;
		if (e4i.draggable === undefined) e4i.draggable = true; !! this.eN7G && this.eN7G.S5X();
		this.eN7G = this.B5G(e4i);
		this.eN7G.N5S(e4i);
		return this.eN7G
	};
	n4r.dU7N.bp5u = function() { !! this.eN7G && this.eN7G.S5X()
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.bdN3x = NEJ.C();
	b4f = n4r.bdN3x.O5T(n4r.dU7N);
	K5P = n4r.bdN3x.cf5k;
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		if (e4i.bubble === undefined) e4i.bubble = true;
		this.Ow8o = e4i.bubble;
		this.po0x = e4i.message || ""
	};
	b4f.bZ5e = function() {
		this.ca5f = a3x.hX8P('<div class="lyct f-cb f-tc"></div>')
	};
	b4f.bR5W = function() {
		this.cb5g();
		h4l.s4w(this.o4s, "click", this.cx5C.g4k(this))
	};
	b4f.cx5C = function(d4h) {
		var f4j = h4l.U5Z(d4h, "d:action");
		if (!f4j) return;
		if (f4j.href) h4l.cg5l(d4h);
		if (a3x.u5z(f4j, "action") == "close") this.bp5u();
		if (this.Ow8o === !1) h4l.rT1x(d4h);
		this.w5B("onaction", a3x.u5z(f4j, "action"))
	};
	b4f.N5S = function() {
		K5P.N5S.call(this);
		this.o4s.innerHTML = this.po0x
	};
	var fW7P = a3x.eh7a('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
	l4p.mm9d = function() {
		var eT7M;
		var cp5u;
		var bdZ3x = function(gf7Y, W5b) {
				if (k4o.fZ7S(gf7Y, "function") && gf7Y(W5b) != -1) cp5u.S5X()
			};
		var zt3x = function() { !! cp5u && cp5u.bp5u()
			};
		return function(e4i) {
			clearTimeout(eT7M);
			e4i = e4i || {};
			e4i.title = e4i.title || "提示";
			e4i.clazz = e4i.clazz || "";
			e4i.parent = e4i.parent || document.body;
			e4i.buttons = e4i.buttons || [];
			e4i.message = a3x.bU5Z(fW7P, e4i);
			e4i.onaction = bdZ3x.g4k(null, e4i.action);
			if (e4i.mask === undefined) e4i.mask = true;
			if (e4i.draggable === undefined) e4i.draggable = true; !! cp5u && cp5u.S5X();
			cp5u = n4r.bdN3x.B5G(e4i);
			cp5u.N5S();
			if (e4i.autoclose) eT7M = setTimeout(zt3x.g4k(null), 2e3);
			return cp5u
		}
	}();
	l4p.eU7N = function(e4i) {
		e4i = e4i || {};
		e4i.clazz = e4i.clazz || "m-layer-w1";
		e4i.buttons = [{
			klass: "u-btn2-2",
			action: "close",
			text: e4i.btntxt || "确定"
		}];
		var cp5u = l4p.mm9d(e4i);
		return cp5u
	};
	l4p.gP8H = function(e4i) {
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
		var cp5u = l4p.mm9d(e4i);
		return cp5u
	}
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u");
	a3x.cmC9t = function() {
		var ga7T = /[\r\n]/gi,
			P5U = {};
		var cmB9s = function(cC6w) {
				return (cC6w || "").replace(ga7T, "aa").length
			};
		var bLP1x = function(C5H) {
				var bb5g = P5U[C5H],
					bLO1x = a3x.y5D(C5H),
					wZ2x = a3x.y5D(C5H + "-counter");
				if (!bLO1x || !bb5g) return;
				var d4h = {
					input: bLO1x.value
				};
				d4h.length = bb5g.onlength(d4h.input);
				d4h.delta = bb5g.max - d4h.length;
				bb5g.onchange(d4h);
				wZ2x.innerHTML = d4h.value || "剩余" + d4h.delta + "个字"
			};
		return function(E5J, e4i) {
			var C5H = a3x.kJ9A(E5J);
			if (!C5H || !! P5U[C5H]) return;
			var bb5g = NEJ.X({}, e4i);
			bb5g.onchange = bb5g.onchange || bn5s;
			bb5g.onlength = cmB9s;
			if (!bb5g.max) {
				var bLN1x = parseInt(a3x.fR7K(C5H, "maxlength")),
					bLM1x = parseInt(a3x.u5z(C5H, "maxLength"));
				bb5g.max = bLN1x || bLM1x || 100;
				if (!bLN1x && !! bLM1x) bb5g.onlength = k4o.fe7X
			}
			P5U[C5H] = bb5g;
			h4l.s4w(C5H, "input", bLP1x.g4k(null, C5H));
			var f4j = a3x.FT5Y(C5H, {
				nid: bb5g.nid || "js-counter",
				clazz: bb5g.clazz
			});
			bb5g.xid = C5H + "-counter";
			f4j.id = bb5g.xid;
			bLP1x(C5H)
		}
	}()
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		ba5f = c4g("nej.h");
	ba5f.bfo3x = function(E5J, dD6x) {}
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		M5R = c4g("nej.p"),
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		ba5f = c4g("nej.h");
	if (M5R.mh9Y.trident) return;
	ba5f.bfo3x = function() {
		var P5U = {};
		var Fe5j = function(d4h) {
				var cS6M = h4l.U5Z(d4h);
				if ( !! cS6M.value) return;
				a3x.Y5d(a3x.FT5Y(cS6M), "display", "none")
			};
		var EI4M = function(d4h) {
				var cS6M = h4l.U5Z(d4h);
				if ( !! cS6M.value) return;
				a3x.Y5d(a3x.FT5Y(cS6M), "display", "")
			};
		var cmt9k = function(cS6M, dD6x) {
				var C5H = a3x.kJ9A(cS6M),
					jK8C = a3x.FT5Y(cS6M, {
						tag: "label",
						clazz: dD6x
					});
				jK8C.htmlFor = C5H;
				var cL6F = a3x.fR7K(cS6M, "placeholder") || "";
				jK8C.innerText = cL6F == "null" ? "" : cL6F;
				var co5t = cS6M.offsetHeight + "px";
				a3x.fE7x(jK8C, {
					left: 0,
					display: !cS6M.value ? "" : "none"
				})
			};
		return ba5f.bfo3x.ef7Y(function(d4h) {
			d4h.stopped = !0;
			var bf5k = d4h.args,
				cS6M = a3x.y5D(bf5k[0]);
			if ( !! P5U[cS6M.id]) return;
			cmt9k(cS6M, bf5k[1]);
			P5U[cS6M.id] = !0;
			h4l.s4w(cS6M, "blur", EI4M.g4k(null));
			h4l.s4w(cS6M, "focus", Fe5j.g4k(null))
		})
	}()
})();
(function() {
	var c4g = NEJ.P,
		ba5f = c4g("nej.h"),
		a3x = c4g("nej.e"),
		cO6I = c4g("nej.x");
	a3x.fO7H = cO6I.fO7H = function(E5J, dD6x) {
		ba5f.bfo3x(E5J, a3x.u5z(E5J, "holder") || dD6x || "js-placeholder");
		return this
	};
	cO6I.isChange = !0
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ut"),
		gV8N;
	if ( !! M5R.OG8y) return;
	M5R.OG8y = NEJ.C();
	gV8N = M5R.OG8y.O5T(M5R.cz5E);
	gV8N.cl5q = function() {
		this.cs5x();
		this.AN3x = {
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
	gV8N.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.fM7F = document.forms[e4i.form] || a3x.y5D(e4i.form);
		this.bS5X([
			[this.fM7F, "keypress", this.cms9j.g4k(this)]
		]);
		this.po0x = e4i.message || {};
		this.po0x.pass = this.po0x.pass || "&nbsp;";
		var eE7x = this.oH0x(this.fM7F, "focusMode", 1);
		if (!isNaN(eE7x)) {
			this.bLI1x = {
				mode: eE7x,
				clazz: e4i.focus
			}
		}
		this.zu3x = e4i.holder;
		this.AN3x.tp.clazz = "js-mhd " + (e4i.tip || "js-tip");
		this.AN3x.ok.clazz = "js-mhd " + (e4i.pass || "js-pass");
		this.AN3x.er.clazz = "js-mhd " + (e4i.error || "js-error");
		this.bLH1x = e4i.invalid || "js-invalid";
		this.cmm9d(e4i);
		this.fS7L();
		if ( !! this.zx3x) this.zx3x.focus()
	};
	gV8N.bC5H = function() {
		this.bG5L();
		delete this.po0x;
		delete this.zx3x;
		delete this.Bt3x;
		delete this.fM7F;
		delete this.bLF1x;
		delete this.OK8C
	};
	gV8N.oH0x = function(f4j, BF4J, t4x) {
		var A5F = a3x.u5z(f4j, BF4J);
		switch (t4x) {
		case 1:
			return parseInt(A5F);
		case 2:
			return (A5F || "").toLowerCase() == "true";
		case 3:
			return this.bhr4v(A5F)
		}
		return A5F
	};
	gV8N.zy3x = function(A5F, t4x) {
		if (t4x == "date") return this.bhr4v(A5F);
		return parseInt(A5F)
	};
	gV8N.SS0x = function() {
		var jf8X = /^button|submit|reset|image|hidden|file$/i;
		return function(f4j) {
			f4j = this.y5D(f4j) || f4j;
			var t4x = f4j.type;
			return !!f4j.name && !jf8X.test(f4j.type || "")
		}
	}();
	gV8N.cmj9a = function() {
		var jf8X = /^hidden$/i;
		return function(f4j) {
			if (this.SS0x(f4j)) return !0;
			f4j = this.y5D(f4j) || f4j;
			var t4x = f4j.type || "";
			return jf8X.test(t4x)
		}
	}();
	gV8N.bhr4v = function() {
		var cN6H = /[-\/]/;
		var cmi9Z = function(A5F) {
				if (!A5F) return "";
				A5F = A5F.split(cN6H);
				A5F.push(A5F.shift());
				return A5F.join("/")
			};
		return function(A5F) {
			if ((A5F || "").toLowerCase() == "now") return +(new Date);
			return Date.parse(cmi9Z(A5F))
		}
	}();
	gV8N.cms9j = function(d4h) {
		if (d4h.keyCode != 13) return;
		this.w5B("onenter", d4h)
	};
	gV8N.cma9R = function(C5H, T5Y) {
		var qL0x = this.OK8C[T5Y],
			A5F = this.oH0x(C5H, T5Y);
		if (!A5F || !qL0x) return;
		this.SR0x(C5H, qL0x);
		this.bie4i(C5H, T5Y, A5F)
	};
	gV8N.clZ9Q = function(C5H, T5Y) {
		try {
			var bLA1x = this.oH0x(C5H, T5Y);
			if (!bLA1x) return;
			var A5F = new RegExp(bLA1x);
			this.bie4i(C5H, T5Y, A5F);
			this.SR0x(C5H, this.OK8C[T5Y])
		} catch (e) {}
	};
	gV8N.clW9N = function(C5H, T5Y) {
		var qL0x = this.OK8C[T5Y];
		if ( !! qL0x && this.oH0x(C5H, T5Y, 2)) this.SR0x(C5H, qL0x)
	};
	gV8N.bis4w = function(C5H, T5Y, A5F) {
		A5F = parseInt(A5F);
		if (isNaN(A5F)) return;
		this.bie4i(C5H, T5Y, A5F);
		this.SR0x(C5H, this.OK8C[T5Y])
	};
	gV8N.bLy1x = function(C5H, T5Y) {
		this.bis4w(C5H, T5Y, this.oH0x(C5H, T5Y))
	};
	gV8N.bLx1x = function(C5H, T5Y) {
		this.bis4w(C5H, T5Y, a3x.fR7K(C5H, T5Y))
	};
	gV8N.bLw1x = function(C5H, T5Y, t4x) {
		var A5F = this.zy3x(this.oH0x(C5H, T5Y), this.oH0x(C5H, "type"));
		this.bis4w(C5H, T5Y, A5F)
	};
	gV8N.clO9F = function() {
		var ga7T = /^input|textarea$/i;
		var Fe5j = function(d4h) {
				this.oL0x(h4l.U5Z(d4h))
			};
		var EI4M = function(d4h) {
				var f4j = h4l.U5Z(d4h);
				if (!this.oH0x(f4j, "ignore", 2)) {
					this.bLv1x(f4j)
				}
			};
		return function(f4j) {
			if (this.oH0x(f4j, "autoFocus", 2)) this.zx3x = f4j;
			var pu0x = a3x.fR7K(f4j, "placeholder");
			if ( !! pu0x && pu0x != "null") a3x.fO7H(f4j, this.zu3x);
			if ( !! this.bLI1x && ga7T.test(f4j.tagName)) a3x.lW9N(f4j, this.bLI1x);
			var C5H = a3x.kJ9A(f4j);
			this.clW9N(C5H, "required");
			this.cma9R(C5H, "type");
			this.clZ9Q(C5H, "pattern");
			this.bLx1x(C5H, "maxlength");
			this.bLx1x(C5H, "minlength");
			this.bLy1x(C5H, "maxLength");
			this.bLy1x(C5H, "minLength");
			this.bLw1x(C5H, "min");
			this.bLw1x(C5H, "max");
			var T5Y = f4j.name;
			this.po0x[T5Y + "-tip"] = this.oH0x(f4j, "tip");
			this.po0x[T5Y + "-error"] = this.oH0x(f4j, "message");
			this.oL0x(f4j);
			var bv5A = this.Bt3x[C5H],
				j4n = (bv5A || X5c).data || X5c,
				OT8L = this.oH0x(f4j, "counter", 2);
			if (OT8L && (j4n.maxlength || j4n.maxLength)) {
				a3x.cmC9t(C5H, {
					nid: this.AN3x.tp.nid,
					clazz: "js-counter"
				})
			}
			if ( !! bv5A && ga7T.test(f4j.tagName)) {
				this.bS5X([
					[f4j, "focus", Fe5j.g4k(this)],
					[f4j, "blur", EI4M.g4k(this)]
				])
			} else if (this.oH0x(f4j, "focus", 2)) {
				this.bS5X([
					[f4j, "focus", Fe5j.g4k(this)]
				])
			}
		}
	}();
	gV8N.cmm9d = function() {
		var Cv4z = {
			number: /^[\d]+$/i,
			url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
			email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
			date: function(v) {
				return !v || !isNaN(this.bhr4v(v))
			}
		};
		var clM8E = {
			required: function(f4j) {
				var t4x = f4j.type,
					clL8D = !f4j.value,
					clF8x = (t4x == "checkbox" || t4x == "radio") && !f4j.checked;
				if (clF8x || clL8D) return -1
			},
			type: function(f4j, e4i) {
				var cN6H = this.bLF1x[e4i.type],
					et7m = f4j.value.trim(),
					clB8t = !! cN6H.test && !cN6H.test(et7m),
					clz8r = k4o.fZ7S(cN6H) && !cN6H.call(this, et7m);
				if (clB8t || clz8r) return -2
			},
			pattern: function(f4j, e4i) {
				if (!e4i.pattern.test(f4j.value)) return -3
			},
			maxlength: function(f4j, e4i) {
				if (f4j.value.length > e4i.maxlength) return -4
			},
			minlength: function(f4j, e4i) {
				if (f4j.value.length < e4i.minlength) return -5
			},
			maxLength: function(f4j, e4i) {
				if (k4o.fe7X(f4j.value) > e4i.maxLength) return -4
			},
			minLength: function(f4j, e4i) {
				if (k4o.fe7X(f4j.value) < e4i.minLength) return -5
			},
			min: function(f4j, e4i) {
				var gk7d = this.zy3x(f4j.value, e4i.type);
				if (isNaN(gk7d) || gk7d < e4i.min) return -6
			},
			max: function(f4j, e4i) {
				var gk7d = this.zy3x(f4j.value, e4i.type);
				if (isNaN(gk7d) || gk7d > e4i.max) return -7
			}
		};
		return function(e4i) {
			this.bLF1x = NEJ.X(NEJ.X({}, Cv4z), e4i.type);
			this.OK8C = NEJ.X(NEJ.X({}, clM8E), e4i.attr)
		}
	}();
	gV8N.SR0x = function(C5H, vZ2x) {
		if (!k4o.fZ7S(vZ2x)) return;
		var bv5A = this.Bt3x[C5H];
		if (!bv5A || !bv5A.func) {
			bv5A = bv5A || {};
			bv5A.func = [];
			this.Bt3x[C5H] = bv5A
		}
		bv5A.func.push(vZ2x)
	};
	gV8N.bie4i = function(C5H, T5Y, A5F) {
		if (!T5Y) return;
		var bv5A = this.Bt3x[C5H];
		if (!bv5A || !bv5A.data) {
			bv5A = bv5A || {};
			bv5A.data = {};
			this.Bt3x[C5H] = bv5A
		}
		bv5A.data[T5Y] = A5F
	};
	gV8N.bLv1x = function(f4j) {
		f4j = this.y5D(f4j) || f4j;
		var bv5A = this.Bt3x[a3x.kJ9A(f4j)];
		if (!f4j || !bv5A || !this.SS0x(f4j)) return !0;
		var m4q;
		k4o.ei7b(bv5A.func, function(eH7A) {
			m4q = eH7A.call(this, f4j, bv5A.data);
			return m4q != null
		}, this);
		if (m4q == null) {
			var d4h = {
				target: f4j,
				form: this.fM7F
			};
			this.w5B("oncheck", d4h);
			m4q = d4h.value
		}
		var d4h = {
			target: f4j,
			form: this.fM7F
		};
		if (m4q != null) {
			d4h.code = m4q;
			this.w5B("oninvalid", d4h);
			if (!d4h.stopped) {
				this.cly8q(f4j, d4h.value || this.po0x[f4j.name + m4q])
			}
		} else {
			this.w5B("onvalid", d4h);
			if (!d4h.stopped) this.clx8p(f4j, d4h.value)
		}
		return m4q == null
	};
	gV8N.vX2x = function() {
		var clu8m = function(Zs2x, Zr2x) {
				return Zs2x == Zr2x ? "block" : "none"
			};
		var clt8l = function(f4j, t4x, bD5I) {
				var pu0x = bLl1x.call(this, f4j, t4x);
				if (!pu0x && !! bD5I) pu0x = a3x.FT5Y(f4j, this.AN3x[t4x]);
				return pu0x
			};
		var bLl1x = function(f4j, t4x) {
				var pu0x;
				if (t4x == "tp") pu0x = a3x.y5D(f4j.name + "-tip");
				if (!pu0x) pu0x = a3x.I5N(f4j.parentNode, this.AN3x[t4x].nid)[0];
				return pu0x
			};
		return function(f4j, bD5I, t4x) {
			f4j = this.y5D(f4j) || f4j;
			if (!f4j) return;
			t4x == "er" ? a3x.z5E(f4j, this.bLH1x) : a3x.x5C(f4j, this.bLH1x);
			var pu0x = clt8l.call(this, f4j, t4x, bD5I);
			if ( !! pu0x && !! bD5I) pu0x.innerHTML = bD5I;
			k4o.ei7b(this.AN3x, function(A5F, J5O) {
				a3x.Y5d(bLl1x.call(this, f4j, J5O), "display", clu8m(t4x, J5O))
			}, this)
		}
	}();
	gV8N.oL0x = function(f4j, bD5I) {
		this.vX2x(f4j, bD5I || this.po0x[f4j.name + "-tip"], "tp");
		return this
	};
	gV8N.clx8p = function(f4j, bD5I) {
		this.vX2x(f4j, bD5I || this.po0x[f4j.name + "-pass"] || this.po0x.pass, "ok");
		return this
	};
	gV8N.cly8q = function(f4j, bD5I) {
		this.vX2x(f4j, bD5I || this.po0x[f4j.name + "-error"], "er");
		return this
	};
	gV8N.hW8O = function() {
		var ga7T = /^(?:radio|checkbox)$/i;
		var clq8i = function(A5F) {
				return A5F == null ? "" : A5F
			};
		var bLk1x = function(A5F, f4j) {
				if (ga7T.test(f4j.type || "")) {
					f4j.checked = A5F == f4j.value
				} else {
					f4j.value = clq8i(A5F)
				}
			};
		return function(T5Y, A5F) {
			var f4j = this.y5D(T5Y);
			if (!f4j) return this;
			if (f4j.tagName == "SELECT" || !f4j.length) {
				bLk1x(A5F, f4j)
			} else {
				k4o.bc5h(f4j, bLk1x.g4k(null, A5F))
			}
			return this
		}
	}();
	gV8N.y5D = function(T5Y) {
		return this.fM7F.elements[T5Y]
	};
	gV8N.cui1x = function() {
		return this.fM7F
	};
	gV8N.SJ0x = function() {
		var ga7T = /^radio|checkbox$/i,
			jf8X = /^number|date$/;
		var clk8c = function(bu5z, f4j) {
				var T5Y = f4j.name,
					A5F = f4j.value,
					bv5A = bu5z[T5Y],
					t4x = this.oH0x(f4j, "type");
				if (jf8X.test(t4x)) A5F = this.zy3x(A5F, t4x);
				if (ga7T.test(f4j.type) && !f4j.checked) {
					A5F = this.oH0x(f4j, "value");
					if (!A5F) return
				}
				if ( !! bv5A) {
					if (!k4o.en7g(bv5A)) {
						bv5A = [bv5A];
						bu5z[T5Y] = bv5A
					}
					bv5A.push(A5F)
				} else {
					bu5z[T5Y] = A5F
				}
			};
		return function() {
			var m4q = {};
			k4o.bc5h(this.fM7F.elements, function(f4j) {
				if (this.cmj9a(f4j)) clk8c.call(this, m4q, f4j)
			}, this);
			return m4q
		}
	}();
	gV8N.Iw6q = function() {
		var clj8b = function(f4j) {
				if (this.SS0x(f4j)) this.oL0x(f4j)
			};
		return function() {
			this.fM7F.reset();
			k4o.bc5h(this.fM7F.elements, clj8b, this);
			return this
		}
	}();
	gV8N.cuk1x = function() {
		this.fM7F.submit();
		return this
	};
	gV8N.fS7L = function() {
		var clh8Z = function(f4j) {
				if (this.SS0x(f4j)) this.clO9F(f4j)
			};
		return function() {
			this.Bt3x = {};
			k4o.bc5h(this.fM7F.elements, clh8Z, this);
			return this
		}
	}();
	gV8N.clg8Y = function(f4j) {
		f4j = this.y5D(f4j) || f4j;
		if ( !! f4j) return this.bLv1x(f4j);
		var m4q = !0;
		k4o.bc5h(this.fM7F.elements, function(f4j) {
			var jZ8R = this.clg8Y(f4j);
			m4q = m4q && jZ8R
		}, this);
		return m4q
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		H5M = c4g("nej.ut"),
		k4o = c4g("nej.u"),
		l4p = c4g("nm.x"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.SE0x = NEJ.C();
	b4f = n4r.SE0x.O5T(n4r.dU7N);
	K5P = n4r.SE0x.cf5k;
	b4f.bR5W = function() {
		this.cb5g();
		h4l.s4w(this.o4s, "click", this.cx5C.g4k(this));
		h4l.s4w(document, "mousewheel", this.zF3x.g4k(this));
		if ( !! document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.zF3x.g4k(this))
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		if (e4i.jst) {
			this.o4s.innerHTML = a3x.bU5Z(e4i.jst, e4i.data)
		} else if (e4i.ntp) {
			this.o4s.appendChild(a3x.dq6k(e4i.ntp))
		} else if (e4i.txt) {
			this.o4s.innerHTML = a3x.hV8N(e4i.txt)
		} else if (e4i.html) {
			this.o4s.innerHTML = e4i.html
		}
		var Ph8Z = this.o4s.getElementsByTagName("form");
		if (Ph8Z.length) {
			this.fM7F = H5M.OG8y.B5G({
				form: Ph8Z[0]
			})
		}
		this.DI4M = a3x.cP6J(this.o4s)[0]
	};
	b4f.bC5H = function() {
		this.w5B("ondestroy");
		this.bG5L();
		this.o4s.innerHTML = "";
		delete this.DI4M
	};
	b4f.cx5C = function(d4h) {
		var f4j = h4l.U5Z(d4h, "d:action"),
			j4n = this.fM7F ? this.fM7F.SJ0x() : null,
			d4h = {
				action: a3x.u5z(f4j, "action")
			};
		if (j4n) d4h.data = j4n;
		if (d4h.action) {
			this.w5B("onaction", d4h);
			if (d4h.stopped) return;
			this.bp5u()
		}
	};
	b4f.zF3x = function(d4h) {
		if (!this.DI4M) return;
		h4l.bh5m(d4h);
		var dg6a = d4h.wheelDelta || -d4h.detail;
		this.DI4M.scrollTop -= dg6a
	};
	l4p.jg8Y = function(e4i) {
		e4i.destroyable = e4i.destroyable || true;
		e4i.title = e4i.title || "提示";
		e4i.draggable = true;
		e4i.parent = document.body;
		e4i.mask = e4i.mask || true;
		var zd3x = n4r.SE0x.B5G(e4i);
		zd3x.N5S();
		return zd3x
	}
})();
(function() {
	var p = NEJ.P("nej.u");
	var bLi1x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		Pn8f = {},
		DT4X = {};
	for (var i = 0, l = bLi1x.length, c; i < l; i++) {
		c = bLi1x.charAt(i);
		Pn8f[i] = c;
		DT4X[c] = i
	}
	var cle8W = function(iN8F) {
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
	var clc8U = function() {
			var he8W = /\r\n/g;
			return function(j4n) {
				j4n = j4n.replace(he8W, "\n");
				var m4q = [],
					nG0x = String.fromCharCode(237);
				if (nG0x.charCodeAt(0) < 0) for (var i = 0, l = j4n.length, c; i < l; i++) {
					c = j4n.charCodeAt(i);
					c > 0 ? m4q.push(c) : m4q.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
				} else for (var i = 0, l = j4n.length, c; i < l; i++) {
					c = j4n.charCodeAt(i);
					if (c < 128) m4q.push(c);
					else if (c > 127 && c < 2048) m4q.push(c >> 6 | 192, c & 63 | 128);
					else m4q.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
				}
				return m4q
			}
		}();
	var IC6w = function(iN8F) {
			var r4v = 0,
				m4q = [],
				eE7x = iN8F.length % 3;
			if (eE7x == 1) iN8F.push(0, 0);
			if (eE7x == 2) iN8F.push(0);
			while (r4v < iN8F.length) {
				m4q.push(Pn8f[iN8F[r4v] >> 2], Pn8f[(iN8F[r4v] & 3) << 4 | iN8F[r4v + 1] >> 4], Pn8f[(iN8F[r4v + 1] & 15) << 2 | iN8F[r4v + 2] >> 6], Pn8f[iN8F[r4v + 2] & 63]);
				r4v += 3
			}
			if (eE7x == 1) m4q[m4q.length - 1] = m4q[m4q.length - 2] = "=";
			if (eE7x == 2) m4q[m4q.length - 1] = "=";
			return m4q.join("")
		};
	var clb8T = function() {
			var qz0x = /\n|\r|=/g;
			return function(j4n) {
				var r4v = 0,
					m4q = [];
				j4n = j4n.replace(qz0x, "");
				for (var i = 0, l = j4n.length; i < l; i += 4) m4q.push(DT4X[j4n.charAt(i)] << 2 | DT4X[j4n.charAt(i + 1)] >> 4, (DT4X[j4n.charAt(i + 1)] & 15) << 4 | DT4X[j4n.charAt(i + 2)] >> 2, (DT4X[j4n.charAt(i + 2)] & 3) << 6 | DT4X[j4n.charAt(i + 3)]);
				var br5w = m4q.length,
					eE7x = j4n.length % 4;
				if (eE7x == 2) m4q = m4q.slice(0, br5w - 2);
				if (eE7x == 3) m4q = m4q.slice(0, br5w - 1);
				return m4q
			}
		}();
	p.cul1x = function(j4n) {
		return cle8W(clb8T(j4n))
	};
	p.ckY8Q = function(j4n) {
		try {
			return window.btoa(j4n)
		} catch (ex) {
			return IC6w(clc8U(j4n))
		}
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		h4l = c4g("nej.v"),
		a3x = c4g("nej.e"),
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
	n4r.bLf1x = NEJ.C();
	b4f = n4r.bLf1x.O5T(n4r.dU7N);
	b4f.bZ5e = function() {
		this.ca5f = "m-download-layer"
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.bmJ5O = i4m[0];
		this.bmR5W = i4m[1];
		this.bLe1x = i4m[2];
		v5A.bq5v("/client/version/get", {
			type: "json",
			onload: this.ckU8M.g4k(this)
		});
		if (M5R.bae2x.mac) {
			a3x.x5C(this.bmJ5O.parentNode, "f-hide");
			a3x.z5E(this.bmR5W.parentNode, "f-hide");
			a3x.z5E(this.bLe1x, "f-hide")
		} else {
			a3x.z5E(this.bmJ5O.parentNode, "f-hide");
			a3x.x5C(this.bmR5W.parentNode, "f-hide");
			a3x.x5C(this.bLe1x, "f-hide")
		}
	};
	b4f.bj5o = function(e4i) {
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
		this.gA7t = e4i.id
	};
	b4f.bC5H = function() {
		this.bG5L()
	};
	b4f.zH3x = function() {
		this.bp5u()
	};
	b4f.AF3x = function(d4h) {
		this.w5B("onok", A5F);
		this.bp5u()
	};
	b4f.bO5T = function(d4h) {
		var f4j = h4l.U5Z(d4h, "d:action");
		switch (a3x.u5z(f4j, "action")) {
		case "download":
			this.bp5u();
			window.open(a3x.u5z(f4j, "src"));
			break;
		case "orpheus":
			this.bp5u();
			location.href = "orpheus://" + k4o.ckY8Q(JSON.stringify({
				type: this.el7e,
				id: this.gA7t,
				cmd: "download"
			}));
			break
		}
	};
	b4f.ckU8M = function(d4h) {
		if ((d4h || X5c).code == 200) {
			this.HD5I = d4h.data;
			this.bmJ5O.innerText = "V" + this.HD5I.mac;
			this.bmR5W.innerText = "V" + this.HD5I.pc
		}
	};
	l4p.Sx0x = function(e4i) {
		n4r.bLf1x.B5G(e4i).N5S()
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		k4o = c4g("nej.u"),
		p4t = c4g("nm.d"),
		bN5S = {};
	p4t.y5D = function(J5O) {
		return bN5S[J5O]
	};
	p4t.on0x = function(J5O, bb5g) {
		bN5S[J5O] = bb5g
	};
	p4t.eQ7J = function(j4n) {
		k4o.ei7b(j4n, function(q4u, J5O) {
			var bb5g = bN5S[J5O] || {};
			NEJ.X(bb5g, q4u);
			bN5S[J5O] = bb5g
		})
	}
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		ba5f = c4g("nej.h");
	ba5f.Sw0x = function(J5O) {
		return localStorage.getItem(J5O)
	};
	ba5f.Sv0x = function(J5O, A5F) {
		localStorage.setItem(J5O, A5F)
	};
	ba5f.boq6k = function(J5O) {
		localStorage.removeItem(J5O)
	};
	ba5f.bor6l = function() {
		localStorage.clear()
	};
	ba5f.ckT8L = function() {
		var m4q = [];
		for (var i = 0, l = localStorage.length; i < l; i++) m4q.push(localStorage.key(i));
		return m4q
	};
	ba5f.box6r = function() {
		(document.onstorageready || bn5s)()
	};
	ba5f.boC6w = function() {
		return !0
	}
})();
(function() {
	var c4g = NEJ.P,
		M5R = c4g("nej.p"),
		iy8q = c4g("nej.c"),
		ba5f = c4g("nej.h"),
		rG1x;
	if (M5R.mh9Y.trident || !! window.localStorage) return;
	var ckS8K = function() {
			var pS0x, eT7M;
			var blZ5e = function() {
					pS0x = document.createElement("div");
					NEJ.X(pS0x.style, {
						position: "absolute",
						top: 0,
						left: 0,
						width: "1px",
						height: "1px",
						zIndex: 1e4,
						overflow: "hidden"
					});
					document.body.insertAdjacentElement("afterBegin", pS0x);
					pS0x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iy8q.y5D("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
				};
			var LM7F = function() {
					eT7M = window.clearTimeout(eT7M);
					var gW8O = pS0x.getElementsByTagName("object")[0];
					if ( !! gW8O.initStorage) {
						delete pS0x;
						rG1x = gW8O;
						rG1x.initStorage("nej-storage");
						(document.onstorageready || bn5s)();
						return
					}
					eT7M = window.setTimeout(LM7F, 500)
				};
			return function() {
				if ( !! rG1x) return;
				blZ5e();
				LM7F()
			}
		}();
	ba5f.Sw0x = ba5f.Sw0x.ef7Y(function(d4h) {
		d4h.stopped = !0;
		if (!rG1x) return;
		d4h.value = rG1x.getItem(d4h.args[0])
	});
	ba5f.Sv0x = ba5f.Sv0x.ef7Y(function(d4h) {
		d4h.stopped = !0;
		if (!rG1x) return;
		var bf5k = d4h.args;
		rG1x.setItem(bf5k[0], bf5k[1])
	});
	ba5f.boq6k = ba5f.boq6k.ef7Y(function(d4h) {
		d4h.stopped = !0;
		if (!rG1x) return;
		rG1x.removeItem(d4h.args[0])
	});
	ba5f.bor6l = ba5f.bor6l.ef7Y(function(d4h) {
		d4h.stopped = !0;
		if ( !! rG1x) rG1x.clear()
	});
	ba5f.box6r = ba5f.box6r.ef7Y(function(d4h) {
		d4h.stopped = !0;
		ckS8K()
	});
	ba5f.boC6w = ba5f.boC6w.ef7Y(function(d4h) {
		d4h.stopped = !0;
		d4h.value = !! rG1x
	})
})();
(function() {
	var c4g = NEJ.P,
		k4o = c4g("nej.u"),
		h4l = c4g("nej.v"),
		ba5f = c4g("nej.h"),
		v5A = c4g("nej.j"),
		H5M = c4g("nej.ut"),
		P5U = {};
	v5A.uG2x = function(J5O, A5F) {
		var bLd1x = JSON.stringify(A5F);
		try {
			ba5f.Sv0x(J5O, bLd1x)
		} catch (ex) {
			console.error(ex.message);
			console.error(ex)
		}
		if (bLd1x != ba5f.Sw0x(J5O)) P5U[J5O] = A5F;
		return this
	};
	v5A.tk1x = function(J5O) {
		var j4n = JSON.parse(ba5f.Sw0x(J5O) || "null");
		return j4n == null ? P5U[J5O] : j4n
	};
	v5A.bLc1x = function(J5O, A5F) {
		var j4n = v5A.tk1x(J5O);
		if (j4n == null) {
			j4n = A5F;
			v5A.uG2x(J5O, j4n)
		}
		return j4n
	};
	v5A.Py8q = function(J5O) {
		delete P5U[J5O];
		ba5f.boq6k(J5O);
		return this
	};
	v5A.cum1x = function() {
		var bpF6z = function(q4u, J5O, bu5z) {
				delete bu5z[J5O]
			};
		return function() {
			k4o.ei7b(P5U, bpF6z);
			ba5f.bor6l();
			return this
		}
	}();
	v5A.cun1x = function(m4q) {
		m4q = m4q || {};
		k4o.bc5h(ba5f.ckT8L(), function(J5O) {
			m4q[J5O] = v5A.tk1x(J5O)
		});
		return m4q
	};
	H5M.fu7n.B5G({
		element: document,
		event: "storageready",
		oneventadd: function() {
			if (ba5f.boC6w()) {
				document.onstorageready()
			}
		}
	});
	var ckK8C = function() {
			var ckG8y = function(A5F, J5O, bu5z) {
					ba5f.Sv0x(J5O, JSON.stringify(A5F));
					delete bu5z[J5O]
				};
			return function() {
				k4o.ei7b(P5U, ckG8y)
			}
		}();
	h4l.s4w(document, "storageready", ckK8C);
	ba5f.box6r()
})();
(function() {
	var c4g = NEJ.P,
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ut"),
		IG6A;
	if ( !! M5R.bqd6X) return;
	M5R.bqd6X = NEJ.C();
	IG6A = M5R.bqd6X.O5T(M5R.cz5E);
	IG6A.cl5q = function() {
		var fW7P = +(new Date),
			lX9O = "dat-" + fW7P;
		return function() {
			this.cs5x();
			var P5U = this.constructor[lX9O];
			if (!P5U) {
				P5U = {};
				this.constructor[lX9O] = P5U
			}
			this.R5W = P5U
		}
	}();
	IG6A.y5D = function(J5O) {
		return this.R5W[J5O]
	};
	IG6A.on0x = function(J5O, A5F) {
		var lL9C = this.R5W[J5O];
		this.R5W[J5O] = A5F;
		h4l.w5B(localCache, "cachechange", {
			key: J5O,
			type: "set",
			oldValue: lL9C,
			newValue: A5F
		});
		return this
	};
	IG6A.cJ6D = function(J5O) {
		var lL9C = this.R5W[J5O];
		k4o.WR1x(this.R5W, J5O);
		h4l.w5B(localCache, "cachechange", {
			key: J5O,
			type: "delete",
			oldValue: lL9C,
			newValue: undefined
		});
		return lL9C
	};
	IG6A.Sr0x = function(Co4s) {
		return NEJ.Q(this.R5W, Co4s)
	};
	window.localCache = M5R.bqd6X.B5G();
	M5R.fu7n.B5G({
		element: localCache,
		event: "cachechange"
	})
})();
(function() {
	var c4g = NEJ.P,
		fb7U = NEJ.R,
		bn5s = NEJ.F,
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		M5R = c4g("nej.ut"),
		lX9O = "dat-" + +(new Date),
		lZ9Q;
	if ( !! M5R.bql6f) return;
	M5R.bql6f = NEJ.C();
	lZ9Q = M5R.bql6f.O5T(M5R.cz5E);
	lZ9Q.cl5q = function() {
		this.cs5x();
		this.R5W = this.constructor[lX9O];
		if (!this.R5W) {
			this.R5W = {};
			this.R5W[lX9O + "-l"] = {};
			this.constructor[lX9O] = this.R5W
		}
	};
	lZ9Q.qY1x = function(J5O) {
		return this.R5W[J5O]
	};
	lZ9Q.oP0x = function(J5O, A5F) {
		this.R5W[J5O] = A5F
	};
	lZ9Q.km9d = function(J5O, kD9u) {
		var j4n = this.qY1x(J5O);
		if (j4n == null) {
			j4n = kD9u;
			this.oP0x(J5O, j4n)
		}
		return j4n
	};
	lZ9Q.ckD8v = function(J5O) {
		if (J5O != null) {
			delete this.R5W[J5O];
			return
		}
		k4o.ei7b(this.R5W, function(q4u, J5O) {
			if (J5O == lX9O + "-l") return;
			this.ckD8v(J5O)
		}, this)
	};
	lZ9Q.cus1x = function(J5O) {
		if ( !! v5A.Py8q) return v5A.Py8q(J5O)
	};
	lZ9Q.ckB8t = function(J5O) {
		if ( !! v5A.tk1x) return v5A.tk1x(J5O)
	};
	lZ9Q.cky8q = function(J5O, A5F) {
		if ( !! v5A.uG2x) v5A.uG2x(J5O, A5F)
	};
	lZ9Q.BN4R = function(J5O, kD9u) {
		var j4n = this.PH8z(J5O);
		if (j4n == null) {
			j4n = kD9u;
			this.uH2x(J5O, j4n)
		}
		return j4n
	};
	lZ9Q.PH8z = function(J5O) {
		var j4n = this.qY1x(J5O);
		if (j4n != null) return j4n;
		j4n = this.ckB8t(J5O);
		if (j4n != null) this.oP0x(J5O, j4n);
		return j4n
	};
	lZ9Q.uH2x = function(J5O, A5F) {
		this.cky8q(J5O, A5F);
		this.oP0x(J5O, A5F)
	};
	lZ9Q.bKR1x = function(J5O) {
		if (J5O != null) {
			delete this.R5W[J5O];
			if ( !! v5A.Py8q) v5A.Py8q(J5O);
			return
		}
		k4o.ei7b(this.R5W, function(q4u, J5O) {
			if (J5O == lX9O + "-l") return;
			this.bKR1x(J5O)
		}, this)
	};
	lZ9Q.cut1x = function() {
		this.bKR1x();
		return this
	};
	lZ9Q.cuu1x = function(J5O) {
		var j4n = this.R5W[lX9O + "-l"];
		delete j4n[J5O]
	};
	lZ9Q.baG2x = function(J5O) {
		var j4n = this.R5W[lX9O + "-l"],
			bf5k = fb7U.slice.call(arguments, 1);
		k4o.bc5h(j4n[J5O], function(dt6n) {
			try {
				dt6n.apply(null, bf5k)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
		});
		delete j4n[J5O]
	};
	lZ9Q.baH2x = function(J5O, dt6n) {
		dt6n = dt6n || bn5s;
		var i4m = this.R5W[lX9O + "-l"][J5O];
		if (!i4m) {
			i4m = [dt6n];
			this.R5W[lX9O + "-l"][J5O] = i4m;
			return !1
		}
		i4m.push(dt6n);
		return !0
	};
	lZ9Q.cks8k = function(i4m, bi5n, fX7Q) {
		if (!i4m) return !1;
		bi5n = parseInt(bi5n) || 0;
		fX7Q = parseInt(fX7Q) || 0;
		if (!fX7Q) {
			if (!i4m.loaded) return !1;
			fX7Q = i4m.length
		}
		if ( !! i4m.loaded) fX7Q = Math.min(fX7Q, i4m.length - bi5n);
		for (var i = 0; i < fX7Q; i++) if (!i4m[bi5n + i]) return !1;
		return !0
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ut"),
		b4f, K5P;
	if ( !! M5R.PJ8B) return;
	M5R.PJ8B = NEJ.C();
	b4f = M5R.PJ8B.O5T(M5R.bql6f);
	K5P = M5R.PJ8B.cf5k;
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.uc1x = e4i.key || "id";
		this.bg5l = e4i.data || X5c;
		this.ckr8j = !! e4i.autogc;
		this.ckp8h(e4i.id)
	};
	b4f.bC5H = function() {
		this.bG5L();
		if ( !! this.dJ6D) {
			this.bKP1x()
		}
	};
	b4f.ckp8h = function(C5H) {
		var P5U;
		if ( !! C5H) {
			P5U = this.R5W[C5H];
			if (!P5U) {
				P5U = {};
				this.R5W[C5H] = P5U
			}
		}
		P5U = P5U || this.R5W;
		P5U.hash = P5U.hash || {};
		this.Qb9S = P5U
	};
	b4f.bKP1x = function() {
		this.dJ6D = window.clearTimeout(this.dJ6D);
		var bu5z = {};
		k4o.ei7b(this.Qb9S, function(i4m, J5O) {
			if (J5O == "hash") return;
			if (!k4o.en7g(i4m)) return;
			k4o.bc5h(i4m, function(q4u) {
				if (!q4u) return;
				bu5z[q4u[this.uc1x]] = !0
			}, this)
		}, this);
		k4o.ei7b(this.RZ9Q(), function(q4u, C5H, dH6B) {
			if (!bu5z[C5H]) {
				delete dH6B[C5H]
			}
		})
	};
	b4f.ckm8e = function() {
		if ( !! this.dJ6D) {
			this.dJ6D = window.clearTimeout(this.dJ6D)
		}
		this.dJ6D = window.setTimeout(this.bKP1x.g4k(this), 150)
	};
	b4f.zM3x = function(q4u, RP9G) {
		q4u = this.bKO1x(q4u, RP9G) || q4u;
		if (!q4u) return null;
		var J5O = q4u[this.uc1x];
		if (J5O != null) {
			var hC8u = this.RZ9Q()[J5O];
			if ( !! hC8u) q4u = NEJ.X(hC8u, q4u);
			this.RZ9Q()[J5O] = q4u
		}
		delete q4u.bKN1x;
		return q4u
	};
	b4f.bKO1x = bn5s;
	b4f.bbY3x = function(J5O, q4u) {
		if (!q4u) return;
		if (!k4o.en7g(q4u)) {
			var i4m = this.gQ8I(J5O),
				q4u = this.zM3x(q4u, J5O);
			if ( !! q4u) i4m.unshift(q4u);
			return
		}
		k4o.mt9k(q4u, this.bbY3x.g4k(this, J5O))
	};
	b4f.QU9L = function(J5O, cq5v) {
		var i4m = this.gQ8I(J5O);
		i4m.length = Math.max(i4m.length, cq5v);
		this.bcx3x(J5O);
		return this
	};
	b4f.jE8w = function(J5O) {
		return this.gQ8I(J5O).length
	};
	b4f.bcx3x = function(J5O, nw0x) {
		this.gQ8I(J5O).loaded = nw0x != !1;
		return this
	};
	b4f.RL9C = function(J5O) {
		return !!this.gQ8I(J5O).loaded
	};
	b4f.ri1x = function(J5O, i4m) {
		this.sG1x(J5O);
		this.bcP3x({
			key: J5O,
			offset: 0,
			limit: i4m.length + 1
		}, {
			list: i4m,
			total: i4m.length
		})
	};
	b4f.gQ8I = function() {
		var CU4Y = function(J5O) {
				return (J5O || "") + (!J5O ? "" : "-") + "list"
			};
		return function(J5O) {
			var J5O = CU4Y(J5O),
				i4m = this.Qb9S[J5O];
			if (!i4m) {
				i4m = [];
				this.Qb9S[J5O] = i4m
			}
			return i4m
		}
	}();
	b4f.RZ9Q = function() {
		var dH6B = this.Qb9S.hash;
		if (!dH6B) {
			dH6B = {};
			this.Qb9S.hash = dH6B
		}
		return dH6B
	};
	b4f.bcW3x = function() {
		var CU4Y = function(e4i) {
				return "r-" + e4i.key
			};
		return function(e4i) {
			var ia8S = NEJ.X({}, e4i),
				mO9F = CU4Y(ia8S);
			if (!this.baH2x(mO9F, this.w5B.g4k(this))) {
				ia8S.rkey = mO9F;
				ia8S.onload = this.ckf8X.g4k(this, ia8S);
				this.w5B("dopullrefresh", ia8S)
			}
			return this
		}
	}();
	b4f.ckf8X = function(e4i, i4m) {
		this.bbY3x(e4i.key, i4m);
		this.baG2x(e4i.rkey, "onpullrefresh", e4i)
	};
	b4f.nr9i = function() {
		var CU4Y = function(e4i) {
				return "r-" + e4i.key + "-" + e4i.offset + "-" + e4i.limit
			};
		return function(e4i) {
			e4i = e4i || X5c;
			var ia8S = {
				key: "" + e4i.key || "",
				ext: e4i.ext || null,
				data: e4i.data || null,
				offset: parseInt(e4i.offset) || 0,
				limit: parseInt(e4i.limit) || 0
			},
				i4m = this.gQ8I(ia8S.key);
			if (this.cks8k(i4m, ia8S.offset, ia8S.limit)) {
				this.w5B("onlistload", ia8S);
				return this
			}
			var mO9F = CU4Y(ia8S);
			if (!this.baH2x(mO9F, this.w5B.g4k(this))) {
				ia8S.rkey = mO9F;
				ia8S.onload = this.bcP3x.g4k(this, ia8S);
				this.w5B("doloadlist", ia8S)
			}
			return this
		}
	}();
	b4f.bcP3x = function() {
		var CX4b = function(q4u, r4v, i4m) {
				if ( !! q4u) {
					return !0
				}
				i4m.splice(r4v, 1)
			};
		return function(e4i, m4q) {
			e4i = e4i || X5c;
			var J5O = e4i.key,
				bi5n = e4i.offset,
				bKK1x = this.gQ8I(J5O);
			var i4m = m4q || [];
			if (!k4o.en7g(i4m)) {
				i4m = m4q.result || m4q.list || [];
				var cq5v = parseInt(m4q.total);
				if (!isNaN(cq5v) || cq5v > i4m.length) {
					this.QU9L(J5O, cq5v)
				}
			}
			k4o.bc5h(i4m, function(q4u, r4v) {
				bKK1x[bi5n + r4v] = this.zM3x(q4u, J5O)
			}, this);
			if (i4m.length < e4i.limit) {
				this.bcx3x(J5O);
				k4o.mt9k(bKK1x, CX4b)
			}
			this.baG2x(e4i.rkey, "onlistload", e4i)
		}
	}();
	b4f.sG1x = function() {
		var CX4b = function(q4u, r4v, i4m) {
				i4m.splice(r4v, 1)
			};
		return function(J5O) {
			var i4m = this.gQ8I(J5O);
			k4o.mt9k(i4m, CX4b);
			this.bcx3x(J5O, !1);
			if (this.ckr8j) {
				this.ckm8e()
			}
			return this
		}
	}();
	b4f.bKJ1x = function(q4u, RP9G) {
		return !q4u.bKN1x
	};
	b4f.eg7Z = function(C5H) {
		return this.RZ9Q()[C5H]
	};
	b4f.cuy1x = function(C5H) {
		var q4u = this.eg7Z(C5H);
		if ( !! q4u) q4u.bKN1x = !0
	};
	b4f.RK9B = function() {
		var CU4Y = function(e4i) {
				return "r-" + e4i.key + "-" + e4i.id
			};
		return function(e4i) {
			e4i = e4i || X5c;
			var C5H = e4i[this.uc1x],
				ia8S = {
					id: C5H,
					ext: e4i.ext,
					data: e4i.data || {},
					key: "" + e4i.key || ""
				};
			q4u = this.eg7Z(C5H);
			ia8S.data[this.uc1x] = C5H;
			if ( !! q4u && this.bKJ1x(q4u, ia8S.key)) {
				this.w5B("onitemload", ia8S);
				return this
			}
			var mO9F = CU4Y(ia8S);
			if (!this.baH2x(mO9F, this.w5B.g4k(this))) {
				ia8S.rkey = mO9F;
				ia8S.onload = this.cjZ8R.g4k(this, ia8S);
				this.w5B("doloaditem", ia8S)
			}
			return this
		}
	}();
	b4f.cjZ8R = function(e4i, q4u) {
		e4i = e4i || X5c;
		this.zM3x(q4u, e4i.key);
		this.baG2x(e4i.rkey, "onitemload", e4i)
	};
	b4f.iL8D = function(e4i) {
		e4i = NEJ.X({}, e4i);
		e4i.onload = this.vC2x.g4k(this, e4i);
		this.w5B("doadditem", e4i)
	};
	b4f.vC2x = function(e4i, q4u) {
		var J5O = e4i.key;
		q4u = this.zM3x(q4u, J5O);
		if ( !! q4u) {
			var ey7r = 0,
				i4m = this.gQ8I(J5O);
			if (!e4i.push) {
				ey7r = -1;
				var bi5n = e4i.offset || 0;
				i4m.splice(bi5n, 0, q4u)
			} else if (i4m.loaded) {
				ey7r = 1;
				i4m.push(q4u)
			} else {
				i4m.length++
			}
		}
		var d4h = {
			key: J5O,
			flag: ey7r,
			data: q4u,
			action: "add",
			ext: e4i.ext
		};
		this.w5B("onitemadd", d4h);
		return d4h
	};
	b4f.Jj6d = function(e4i) {
		e4i = NEJ.X({}, e4i);
		e4i.onload = this.bdE3x.g4k(this, e4i);
		this.w5B("dodeleteitem", e4i)
	};
	b4f.bdE3x = function(e4i, bKI1x) {
		var q4u, J5O = e4i.key;
		if ( !! bKI1x) {
			q4u = this.eg7Z(e4i.id) || null;
			var C5H = e4i.id,
				cjX8P = this.uc1x,
				i4m = this.gQ8I(J5O),
				r4v = k4o.cT6N(i4m, function(hC8u) {
					return !!hC8u && hC8u[cjX8P] == C5H
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
	b4f.Ry9p = function(e4i) {
		e4i = NEJ.X({}, e4i);
		e4i.onload = this.cjW8O.g4k(this, e4i);
		this.w5B("doupdateitem", e4i)
	};
	b4f.cjW8O = function(e4i, q4u) {
		var J5O = e4i.key;
		if ( !! q4u) q4u = this.zM3x(q4u, J5O);
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
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ut"),
		b4f;
	if ( !! M5R.bdP3x) return;
	M5R.bdP3x = NEJ.C();
	b4f = M5R.bdP3x.O5T(M5R.PJ8B);
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.blc5h({
			doloadlist: this.Rw9n.g4k(this),
			doloaditem: this.bdU3x.g4k(this),
			doadditem: this.bKH1x.g4k(this),
			dodeleteitem: this.Rv9m.g4k(this),
			doupdateitem: this.VR0x.g4k(this),
			dopullrefresh: this.bKG1x.g4k(this)
		})
	};
	b4f.Rw9n = bn5s;
	b4f.bKG1x = bn5s;
	b4f.bdU3x = bn5s;
	b4f.bKH1x = bn5s;
	b4f.Rv9m = bn5s;
	b4f.VR0x = bn5s
})();
(function() {
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
	p4t.gZ8R = NEJ.C();
	b4f = p4t.gZ8R.O5T(H5M.bdP3x);
	b4f.cj5o = function() {
		var Rp9g = location.protocol + "//" + location.host;
		var cjT8L = function(bs5x, j4n) {
				var bu5z = {
					conf: {},
					data: {},
					urls: []
				};
				k4o.bc5h(bs5x, function(J5O, r4v, i4m) {
					var bb5g = p4t.y5D(J5O);
					if (!bb5g) return;
					var bel3x = bKF1x(bb5g.url, j4n[J5O]);
					bu5z.urls.push(bel3x);
					bu5z.conf[bel3x] = bb5g;
					bu5z.data[bel3x] = JSON.stringify(j4n[J5O] == null ? "" : j4n[J5O])
				});
				return bu5z
			};
		var bKF1x = function(V5a, j4n) {
				return V5a.replace(/\{(.*?)\}/gi, function($1, $2) {
					return j4n[$2] || $1
				})
			};
		var bKE1x = function(bb5g, e4i, d4h) {
				h4l.w5B(window, "requesterror", d4h);
				if ( !! d4h.stopped) return;
				var Jp6j = bb5g.onerror || e4i.onerror;
				if (k4o.fn7g(Jp6j)) {
					this.w5B(Jp6j, d4h, e4i)
				} else {
					(Jp6j || bn5s).call(this, d4h, e4i)
				}
				var d4h = {
					result: d4h,
					option: e4i
				};
				this.w5B("onerror", d4h);
				if (!d4h.stopped)(bb5g.onmessage || bn5s).call(this, d4h.result.code, d4h.result)
			};
		var bKD1x = function(Q5V, bb5g, e4i) {
				var m4q = Q5V;
				if (k4o.fZ7S(bb5g.format)) {
					m4q = bb5g.format.call(this, Q5V, e4i)
				}
				return m4q
			};
		var vw2x = function(Q5V, bb5g, e4i, ta1x) {
				if (k4o.fZ7S(bb5g.beforeload)) {
					bb5g.beforeload.call(this, Q5V, e4i, bb5g)
				}
				if (Q5V && Q5V.code != null && Q5V.code != 200) {
					bKE1x.call(this, bb5g, e4i, {
						key: e4i.key,
						code: Q5V.code,
						message: Q5V.message || "",
						captchaId: Q5V.captchaId,
						ext: Q5V
					});
					return
				}
				var m4q = Q5V;
				if (!ta1x) {
					m4q = bKD1x.call(this, Q5V, bb5g, e4i)
				} else if (k4o.fZ7S(bb5g.format)) {
					var beB3x = [];
					k4o.bc5h(ta1x.urls, function(V5a) {
						beB3x.push(bKD1x.call(this, Q5V[V5a], ta1x.conf[V5a], e4i))
					}, this);
					beB3x.push(e4i);
					m4q = bb5g.format.apply(this, beB3x)
				}
				var tr1x = bb5g.onload || e4i.onload,
					bKC1x = bb5g.finaly || e4i.finaly || bn5s;
				if (k4o.fn7g(tr1x)) {
					bKC1x.call(this, this.w5B(tr1x, m4q), e4i)
				} else {
					bKC1x.call(this, (tr1x || bn5s).call(this, m4q), e4i)
				}
			};
		var yC3x = function(bb5g, e4i, bP5U) {
				bKE1x.call(this, bb5g, e4i, {
					key: e4i.key,
					code: bP5U.code || -1,
					message: bP5U.message || ""
				})
			};
		return function(bb5g, e4i) {
			if (k4o.fn7g(bb5g)) {
				bb5g = p4t.y5D(bb5g)
			}
			delete e4i.value;
			(bb5g.filter || bn5s).call(this, e4i, bb5g);
			var Q5V = e4i.value;
			if ( !! Q5V) {
				vw2x.call(this, Q5V, bb5g, e4i);
				return
			}
			var V5a, j4n = e4i.data || X5c,
				vU2x = {
					cookie: !0,
					type: bb5g.rtype || "json",
					method: bb5g.type || "POST",
					onerror: yC3x.g4k(this, bb5g, e4i),
					noescape: bb5g.noescape
				};
			if (k4o.en7g(bb5g.url)) {
				var ta1x = cjT8L(bb5g.url, j4n);
				V5a = Rp9g + "/api/batch";
				vU2x.data = k4o.cY6S(ta1x.data);
				vU2x.onload = vw2x.dT7M(this, bb5g, e4i, ta1x);
				vU2x.headers = {
					"batch-method": "POST"
				};
				delete ta1x.data
			} else {
				var kP9G = bb5g.url.indexOf(":") < 0 ? Rp9g : "";
				V5a = bKF1x(kP9G + bb5g.url, j4n);
				vU2x.data = k4o.cY6S(e4i.data);
				vU2x.onload = vw2x.dT7M(this, bb5g, e4i)
			}
			if (vU2x.method == "GET") vU2x.query = vU2x.data;
			return v5A.bq5v(V5a, vU2x)
		}
	}();
	b4f.Ee4i = function() {
		var ga7T = /^get|list|pull$/i;
		return function(bKA1x, e4i) {
			var J5O = e4i.key,
				bb5g = p4t.y5D(J5O.split("-")[0] + "-" + bKA1x);
			if (ga7T.test(bKA1x) && J5O.indexOf("post-") < 0) bb5g.type = "GET";
			this.cj5o(bb5g, e4i)
		}
	}();
	b4f.cuz1x = function(J5O, i4m) {
		var cq5v = i4m.length;
		this.bcP3x({
			key: J5O,
			offset: 0,
			limit: cq5v + 1
		}, {
			list: i4m,
			total: cq5v
		})
	};
	b4f.Rw9n = function(e4i) {
		this.Ee4i("list", e4i)
	};
	b4f.bdU3x = function(e4i) {
		this.Ee4i("get", e4i)
	};
	b4f.bKG1x = function(e4i) {
		this.Ee4i("pull", e4i)
	};
	b4f.bKH1x = function(e4i) {
		this.Ee4i("add", e4i)
	};
	b4f.Rv9m = function(e4i) {
		this.Ee4i("del", e4i)
	};
	b4f.VR0x = function(e4i) {
		this.Ee4i("update", e4i)
	};
	b4f.cjD8v = function(q4u) {
		this.zM3x(q4u)
	};
	H5M.fu7n.B5G({
		element: window,
		event: "requesterror"
	})
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		h4l = c4g("nej.v"),
		H5M = c4g("nej.ut"),
		p4t = c4g("nm.d"),
		bff3x = {},
		b4f, K5P;
	var tf1x = function(m4q, e4i) {
			m4q.conf = e4i.conf;
			return m4q
		};
	p4t.eQ7J({
		"res-mv-get": {
			type: "GET",
			url: "/api/v1/mv/detail",
			format: function(Q5V, e4i) {
				return tf1x({
					mv: Q5V
				}, e4i)
			}
		},
		"res-song-get": {
			type: "GET",
			url: "/api/song/detail",
			format: function(m4q, e4i) {
				if ( !! m4q.songs && m4q.songs.length > 0) m4q.song = m4q.songs[0];
				else m4q.song = bff3x;
				delete m4q.songs;
				return tf1x(m4q, e4i)
			},
			filter: function(e4i) {
				e4i.data.ids = "[" + e4i.data.id + "]"
			}
		},
		"res-program-get": {
			type: "GET",
			url: "/api/dj/program/detail",
			format: tf1x
		},
		"res-album-get": {
			type: "GET",
			url: "/api/album/{id}",
			format: tf1x
		},
		"res-playlist-get": {
			type: "GET",
			url: "/api/playlist/detail",
			format: function(m4q, e4i) {
				m4q.playlist = m4q.result;
				delete m4q.result;
				return tf1x(m4q, e4i)
			}
		},
		"res-mv-play": {
			type: "GET",
			url: "/api/song/mv/play",
			format: tf1x
		},
		"res-playlist-play": {
			type: "GET",
			url: "/api/playlist/update/playcount",
			format: tf1x
		},
		"res-program-play": {
			type: "GET",
			url: "/api/dj/program/listen",
			format: tf1x
		},
		"res-djradio-get": {
			type: "GET",
			url: "/api/dj/program/byradio",
			filter: function(e4i) {
				var i4m = e4i.data.id.split("-");
				e4i.data.radioId = i4m[0];
				e4i.data.asc = i4m[1] == 2;
				e4i.data.limit = 1e3;
				delete e4i.data.id
			},
			format: function(Q5V, e4i) {
				var cjC8u = {
					id: e4i.data.radioId,
					programs: Q5V.programs
				};
				return tf1x({
					djradio: cjC8u
				}, e4i)
			}
		},
		"res-hotSongs-get": {
			type: "GET",
			url: "/api/artist/{id}",
			format: tf1x
		},
		"res-lyric-get": {
			type: "GET",
			url: "/api/song/lyric",
			filter: function(e4i) {
				e4i.data.lv = 0;
				e4i.data.tv = 0
			},
			format: function(m4q, e4i) {
				var uZ2x = {
					lyric: "",
					nolyric: true
				};
				if (m4q.code == 200 && m4q.lrc && m4q.lrc.lyric) {
					uZ2x.lyric = m4q.lrc.lyric;
					uZ2x.nolyric = false
				} else {
					uZ2x.nolyric = true
				}
				return tf1x({
					lyric: uZ2x
				}, e4i)
			}
		}
	});
	p4t.va2x = NEJ.C();
	b4f = p4t.va2x.O5T(p4t.gZ8R);
	b4f.cjB8t = function(t4x, cI6C) {
		return this.qY1x(this.RE9v(t4x, cI6C))
	};
	b4f.Rc9T = function(t4x, cI6C, e4i) {
		e4i = e4i || {};
		var j4n = this.qY1x(this.RE9v(t4x, cI6C));
		if (j4n && (t4x != 13 && t4x != 19 || e4i.conf && e4i.conf.useCache)) {
			this.w5B("onresourceload", t4x, cI6C, j4n, e4i.conf);
			return
		}
		e4i.data = {
			id: cI6C
		};
		e4i.onload = this.cjA8s.g4k(this, t4x, cI6C);
		e4i.onerror = this.cjz8r.g4k(this, t4x, cI6C);
		this.cj5o("res-" + this.Aa3x(t4x) + "-get", e4i)
	};
	b4f.cjA8s = function(t4x, cI6C, m4q) {
		var j4n = m4q[this.Aa3x(t4x)];
		this.oP0x(this.RE9v(t4x, cI6C), j4n);
		this.w5B("onresourceload", t4x, cI6C, j4n, m4q.conf)
	};
	b4f.cjz8r = function(t4x, cI6C, m4q, e4i) {
		if (m4q.code != 404) {
			this.w5B("onresourceerror", t4x, cI6C, m4q.code);
			return
		}
		this.oP0x(this.RE9v(t4x, cI6C), bff3x);
		this.w5B("onresourceload", t4x, cI6C, bff3x, e4i.conf)
	};
	b4f.cuA1x = function(t4x, e4i) {
		this.cj5o("res-" + this.Aa3x(t4x) + "-play", e4i)
	};
	b4f.RE9v = function(t4x, cI6C) {
		return "res-" + this.Aa3x(t4x) + "-" + cI6C
	};
	b4f.Aa3x = function(t4x) {
		var bu5z = {
			2: "hotSongs",
			13: "playlist",
			17: "program",
			18: "song",
			19: "album",
			21: "mv",
			41: "lyric",
			70: "djradio"
		};
		return bu5z[t4x]
	};
	p4t.va2x.Jk6e = function(t4x, cI6C) {
		if (!this.eN7G) this.eN7G = p4t.va2x.B5G({});
		return this.eN7G.cjB8t(t4x, cI6C)
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		H5M = c4g("nej.ut"),
		p4t = c4g("nm.d"),
		bgp4t = /^[1-9][0-9]*$/,
		b4f, K5P;
	var LOCAL_LOG_KEY = "local-log";
	p4t.eQ7J({
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
	p4t.hK8C = NEJ.C();
	b4f = p4t.hK8C.O5T(p4t.gZ8R);
	b4f.gd7W = function(W5b, bb5g) {
		if (!W5b || !bb5g) return;
		if (k4o.fn7g(bb5g)) {
			try {
				bb5g = JSON.parse(bb5g)
			} catch (_e) {
				if (console && console.warn) {
					console.warn("bilog error: ", a3x)
				}
			}
		}
		if (!k4o.ks9j(bb5g)) return;
		this.cj5o("bi-log", {
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
	b4f.RF9w = function(mV9M) {
		if (!k4o.en7g(mV9M)) return;
		this.cj5o("bi-batch-log", {
			data: {
				logs: JSON.stringify(mV9M)
			}
		})
	};
	b4f.bKy1x = function(bb5g) {
		if (!bb5g || !bb5g.type || !bb5g.rid) return;
		var mU9L = bb5g.type;
		if (bgp4t.test(mU9L)) {
			mU9L = this.Aa3x(mU9L)
		}
		if (!mU9L) return;
		if (mU9L == "playlist") mU9L = "list";
		this.gd7W("search", {
			type: mU9L,
			id: bb5g.rid || null,
			keyword: bb5g.keyword || null
		})
	};
	b4f.QW9N = function() {
		var cjm8e = /^\/m\/(song|album|playlist)\?id=(\d+)/;
		return function(bb5g) {
			if (!bb5g || !bb5g.type || !bb5g.rid) return;
			if (bb5g.play === undefined) bb5g.play = true;
			var mU9L = bb5g.type;
			if (bgp4t.test(mU9L)) {
				mU9L = this.Aa3x(mU9L)
			}
			if (!mU9L) return;
			if (mU9L == "playlist") mU9L = "list";
			var Q5V = {
				id: bb5g.rid,
				type: mU9L
			};
			if (mU9L == "song" && bb5g.source) {
				Q5V.source = this.bKr1x(bb5g.source);
				if ( !! bb5g.sourceid) Q5V.sourceid = bb5g.sourceid
			}
			this.gd7W(!bb5g.play ? "addto" : "play", Q5V);
			if (mU9L == "song" && bb5g.hash && bb5g.hash.match(cjm8e)) {
				this.gd7W(!bb5g.play ? "addto" : "play", {
					type: RegExp.$1,
					id: RegExp.$2
				})
			}
		}
	}();
	b4f.bgX4b = function(C5H, by5D, dI6C, Bh3x) {
		var Q5V = {
			type: "song",
			wifi: 0,
			download: 0
		};
		var cji8a = {
			1: "ui",
			2: "playend",
			3: "interrupt",
			4: "exception"
		};
		Q5V.id = C5H;
		Q5V.time = Math.round(by5D);
		Q5V.end = k4o.fn7g(Bh3x) ? Bh3x : cji8a[Bh3x] || "";
		if (dI6C && dI6C.fid) {
			Q5V.source = this.bKr1x(dI6C.fid);
			Q5V.sourceId = dI6C.fdata
		}
		this.gd7W("play", Q5V)
	};
	b4f.bKo1x = function(t4x, cI6C) {
		if (!t4x || !cI6C) return;
		if (bgp4t.test(t4x)) t4x = this.Aa3x(t4x);
		if (t4x != "playlist" && t4x != "dj") return;
		var bb5g = p4t.y5D("plus-" + t4x + "-count");
		if (!bb5g) return !1;
		this.cj5o(bb5g, {
			data: {
				id: cI6C
			}
		});
		var P5U = this.km9d("play-hist-" + t4x, []);
		if (k4o.cT6N(P5U, cI6C) < 0) {
			P5U.push(cI6C);
			return !0
		}
		return !1
	};
	b4f.Aa3x = function(t4x) {
		var bu5z = {
			1: "user",
			2: "artist",
			13: "playlist",
			17: "dj",
			18: "song",
			19: "album",
			21: "mv",
			31: "toplist"
		};
		return bu5z[t4x]
	};
	b4f.bKr1x = function(Jh6b) {
		var bu5z = {
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
		return bu5z[Jh6b]
	};
	b4f.cjd8V = function(gT8L) {
		var mV9M = this.BN4R(LOCAL_LOG_KEY, []);
		mV9M.unshift(gT8L);
		if (mV9M.length > 200) {
			mV9M.length = 200
		}
		this.uH2x(LOCAL_LOG_KEY, mV9M)
	};
	b4f.ciZ8R = function() {
		return this.PH8z(LOCAL_LOG_KEY)
	};
	b4f.eC7v = function(Q5V) {
		this.gd7W("play", Q5V)
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		h4l = c4g("nej.v"),
		v5A = c4g("nej.j"),
		H5M = c4g("nej.ut"),
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		n4r = c4g("nm.l"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d");
	if (!p4t.va2x) return;
	var P5U = p4t.va2x.B5G({
		onresourceload: ciX8P
	});
	var vO2x = p4t.hK8C.gc7V();

	function ciX8P(t4x, cI6C, j4n, bb5g) {
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
				l4p.bhQ4U(j4n.data.id, j4n.mp.fee);
				return
			}
			break
		}
		if (l4p.Jg6a(i4m, true, null, t4x == 19 ? {
			source: "album",
			sourceid: cI6C
		} : null) == 0) {
			return
		}
		l4p.eU7N({
			clazz: "m-layer-w2",
			bubble: !1,
			message: bb5g.message
		})
	}
	function ciV8N(d4h, qq0x, xJ2x, ex7q) {
		ex7q = ex7q || {};
		if (d4h.action == "ok") {
			if (xJ2x) {
				location.dispatch2("/payfee?songId=" + xJ2x)
			} else {
				location.dispatch2("/payfee?fee=" + qq0x || 1)
			}
			vO2x.gd7W("click", {
				type: "tobuyvip",
				name: "box",
				source: ex7q.source || "song",
				sourceid: ex7q.sourceid || xJ2x || 0
			})
		} else if (d4h.action == "song") {
			location.dispatch2("/payfee?singleSong=true&songId=" + xJ2x);
			vO2x.gd7W("click", {
				type: "tobuyone",
				name: "box",
				source: ex7q.source || "song",
				sourceid: ex7q.sourceid || xJ2x || 0
			})
		}
	}
	function QN9E(bD5I) {
		l4p.eU7N({
			clazz: "m-layer-w2",
			bubble: !1,
			message: bD5I,
			btntxt: "知道了"
		})
	}
	function QM9D(bD5I, Q5V) {
		QN9E((Q5V || X5c).toast || bD5I)
	}
	l4p.hR8J = function(bD5I, C5H, t4x, ciT8L, be5j) {
		bD5I = bD5I || "由于版权保护，您所在的地区暂时无法使用。";
		if (ciT8L && be5j && be5j.privilege && be5j.privilege.toast) {
			v5A.bq5v("/api/song/toast", {
				query: {
					id: be5j.id
				},
				type: "json",
				onload: QM9D.g4k(this, bD5I),
				onerror: QM9D.g4k(this, bD5I)
			})
		} else if (C5H && t4x) {
			P5U.Rc9T(t4x, C5H, {
				conf: {
					message: bD5I,
					useCache: t4x != 18
				}
			})
		} else {
			QN9E(bD5I)
		}
	};
	l4p.tI1x = function(qq0x, xJ2x, t4x, ex7q, lR9I) {
		var bN5S, pR0x = "m-popup-info",
			biw4A = "单首购买",
			biy4C = "马上去开通",
			cA5F = "唱片公司要求，当前歌曲须付费使用。",
			bKl1x = true;
		try {
			bN5S = top.api.feeMessage || {}
		} catch (e) {
			bN5S = {}
		}
		if (qq0x == 1 || qq0x == 8 || qq0x == 16) {
			if (t4x == "song") {
				pR0x = "m-popup-song-buy";
				cA5F = bN5S["vip2"] || cA5F;
				biy4C = bN5S["vip2button"] || "包月购买";
				biw4A = bN5S["vip2link"] || biw4A;
				if (lR9I && lR9I.flag !== undefined) {
					var bs5x = lR9I.flag.toString(2).split("");
					if (parseInt(bs5x.pop(), 10) == 1) {
						bKl1x = false
					}
				}
			} else {
				cA5F = bN5S["vip"] || cA5F
			}
		} else if (qq0x == 4) {
			cA5F = bN5S["album"] || cA5F;
			biy4C = "立即订购"
		} else {
			cA5F = bN5S["unknow"] || cA5F
		}
		l4p.jg8Y({
			clazz: "m-layer-w5",
			html: a3x.bU5Z(pR0x, {
				songTxt: biw4A,
				tip: cA5F,
				oktext: biy4C,
				cctext: "以后再说",
				showSongText: bKl1x
			}),
			onaction: ciV8N.dT7M(null, qq0x, xJ2x, ex7q)
		})
	};
	l4p.bKk1x = function(hi8a, gX8P) {
		l4p.gP8H({
			title: "提示",
			message: "唱片公司要求，该歌曲须下载后播放",
			btnok: "下载",
			btncc: "取消",
			okstyle: "u-btn2-w1",
			ccstyle: "u-btn2-w1",
			action: function(t4x) {
				if (t4x == "ok") {
					l4p.Sx0x({
						id: hi8a,
						type: gX8P
					})
				}
			}
		})
	};
	l4p.bhQ4U = function(nE0x, qq0x) {
		var bN5S, cA5F = "唱片公司要求，当前歌曲须付费使用。";
		try {
			bN5S = top.api.feeMessage || {}
		} catch (e) {
			bN5S = {}
		}
		if (qq0x == 1 || qq0x == 8) {
			cA5F = bN5S["vip"] || cA5F
		} else if (qq0x == 4) {
			cA5F = bN5S["album"] || cA5F
		} else {
			cA5F = bN5S["unknow"] || cA5F
		}
		return l4p.jg8Y({
			clazz: "m-layer-w5",
			html: a3x.bU5Z("m-popup-info", {
				tip: cA5F,
				oktext: "马上去开通",
				cctext: "以后再说"
			}),
			onaction: function(d4h) {
				if (d4h.action == "ok") {
					location.dispatch2("/payfee?mvId=" + nE0x);
					vO2x.gd7W("click", {
						type: "tobuyone",
						name: "box",
						source: "mv",
						sourceid: nE0x || 0
					})
				}
			}
		})
	};
	l4p.Jg6a = function() {
		function compareFee(ciP8H, ciO8G) {
			var bu5z = {
				1: 99,
				8: 99,
				4: 88,
				16: 99
			};
			return (bu5z[ciP8H] || 0) - (bu5z[ciO8G] || 0)
		}
		return function(i4m, cA5F, tA1x, ex7q) {
			tA1x = tA1x || {};
			var vZ2x = [],
				IY6S = {},
				bKj1x = 0,
				bKi1x = 0,
				IX6R = null;
			if (!i4m || !i4m.length) return vZ2x;
			k4o.bc5h(i4m, function(be5j) {
				var eY7R = l4p.oK0x(be5j);
				if (eY7R == 0) {
					vZ2x.push(be5j)
				} else if (eY7R == 10) {
					if (be5j.privilege) {
						be5j.fee = be5j.privilege.fee
					}
					if (compareFee(be5j.fee, IY6S.fee) > 0) {
						IY6S = be5j
					}
				} else if (eY7R == 11) {
					++bKj1x;
					if (!tA1x.play) vZ2x.push(be5j)
				} else if (eY7R == 1e3) {
					++bKi1x;
					if (!tA1x.download) vZ2x.push(be5j)
				} else if (eY7R == 100) {
					IX6R = be5j
				}
			});
			if (vZ2x.length == 0 && cA5F) {
				if (bKj1x == i4m.length) {
					var rI1x = i4m[0].privilege || {};
					if (rI1x.payed) {
						l4p.hR8J("唱片公司要求，该歌曲须下载后播放")
					} else {
						l4p.tI1x(rI1x.fee, null, null, ex7q)
					}
				} else if (bKi1x == i4m.length) {
					l4p.hR8J("因版权方要求，该歌曲不支持下载")
				} else if (IY6S.id) {
					l4p.tI1x(IY6S.fee, IY6S.id, null, ex7q, IY6S.privilege)
				} else {
					if (IX6R && i4m.length == 1 && IX6R.privilege && IX6R.privilege.st < 0 && IX6R.privilege.toast) {
						l4p.hR8J(null, null, null, true, IX6R)
					} else {
						l4p.hR8J()
					}
				}
			}
			return vZ2x
		}
	}();
	l4p.oK0x = function(be5j) {
		if (!be5j) return 0;
		var eY7R = be5j.privilege;
		if (be5j.program) return 0;
		if (window.GAbroad) return 100;
		if (eY7R) {
			if (eY7R.st != null && eY7R.st < 0) {
				return 100
			}
			if (eY7R.fee > 0 && eY7R.fee != 8 && eY7R.payed == 0 && eY7R.pl <= 0) return 10;
			if (eY7R.fee == 16) return 11;
			if ((eY7R.fee == 0 || eY7R.payed) && eY7R.pl > 0 && eY7R.dl == 0) return 1e3;
			if (eY7R.pl == 0 && eY7R.dl == 0) return 100;
			return 0
		} else {
			var dZ7S = be5j.status != null ? be5j.status : be5j.st != null ? be5j.st : 0;
			if (be5j.status >= 0) return 0;
			if (be5j.fee > 0) return 10;
			return 100
		}
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		h4l = c4g("nej.v"),
		a3x = c4g("nej.e"),
		M5R = c4g("nej.ui"),
		b4f;
	if ( !! M5R.RW9N) return;
	var hP8H = a3x.rE1x(".#<uispace>{position:absolute;background:#fff;}");
	M5R.RW9N = NEJ.C();
	b4f = M5R.RW9N.O5T(M5R.Nk7d);
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.bS5X([
			[document, "click", this.rN1x.g4k(this)]
		]);
		this.ciK8C = !! e4i.nostop;
		this.bKh1x = {
			top: e4i.top,
			left: e4i.left
		}
	};
	b4f.bC5H = function() {
		delete this.wc2x;
		delete this.bka5f;
		delete this.pB0x;
		delete this.bKg1x;
		delete this.RX9O;
		delete this.bKh1x;
		this.bG5L()
	};
	b4f.bZ5e = function() {
		this.lg9X = hP8H
	};
	b4f.bR5W = function() {
		this.cb5g();
		this.za3x = this.o4s;
		h4l.s4w(this.o4s, "click", this.ciF8x.g4k(this))
	};
	b4f.rN1x = function(d4h) {
		if (d4h.button != 2) this.bp5u()
	};
	b4f.ciF8x = function(d4h) {
		if (this.ciK8C) return;
		h4l.rT1x(d4h);
		var E5J = h4l.U5Z(d4h);
		if (E5J.tagName == "A") h4l.cg5l(d4h)
	};
	b4f.ciE8w = function() {
		var cN6H = /\s+/i;
		return function(mK9B) {
			mK9B = (mK9B || "").trim().toLowerCase().split(cN6H);
			mK9B[0] = mK9B[0] || "bottom";
			mK9B[1] = mK9B[1] || "left";
			this.pB0x = mK9B
		}
	}();
	b4f.ciy8q = function(mK9B) {
		var m4q = {},
			lT9K = this.bka5f,
			cuB1x = a3x.oz0x(),
			dp6j = this.o4s.offsetWidth,
			co5t = this.o4s.offsetHeight;
		switch (mK9B[0]) {
		case "top":
			m4q.top = lT9K.top - co5t;
			m4q.left = mK9B[1] == "right" ? lT9K.left + lT9K.width - dp6j : lT9K.left;
			break;
		case "left":
			m4q.left = lT9K.left - dp6j;
			m4q.top = mK9B[1] == "bottom" ? lT9K.top + lT9K.height - co5t : lT9K.top;
			break;
		case "right":
			m4q.left = lT9K.left + lT9K.width;
			m4q.top = mK9B[1] == "bottom" ? lT9K.top + lT9K.height - co5t : lT9K.top;
			break;
		default:
			m4q.top = lT9K.top + lT9K.height;
			m4q.left = mK9B[1] == "right" ? lT9K.left + lT9K.width - dp6j : lT9K.left;
			break
		}
		return m4q
	};
	b4f.HP5U = function() {
		if (!this.bKg1x) {
			this.fY7R(this.bKh1x);
			return
		}
		if ( !! this.RX9O) {
			this.fY7R(this.wc2x);
			return
		}
		if ( !! this.bka5f) this.fY7R(this.ciy8q(this.pB0x))
	};
	b4f.chY8Q = function(E5J, dg6a, d4h) {
		dg6a = dg6a || X5c;
		var bJT1x = a3x.oz0x(),
			cO6I = h4l.kn9e(d4h) + (dg6a.left || 0),
			gM7F = h4l.nV0x(d4h) + (dg6a.top || 0),
			dp6j = E5J.offsetWidth + (dg6a.right || 0),
			co5t = E5J.offsetHeight + (dg6a.bottom || 0),
			IQ6K = bJT1x.scrollWidth,
			bkN5S = bJT1x.scrollHeight,
			bkT5Y = cO6I + dp6j,
			bkY5d = gM7F + co5t;
		switch (this.pB0x[0]) {
		case "top":
			gM7F = bkY5d > bkN5S ? gM7F - co5t : gM7F;
			if (this.pB0x[1] == "right") {
				cO6I = cO6I - dp6j < 0 ? 0 : cO6I - dp6j
			} else {
				cO6I = bkT5Y > IQ6K ? IQ6K - dp6j : cO6I
			}
			break;
		case "left":
			cO6I = bkT5Y > IQ6K ? IQ6K - dp6j : cO6I;
			if (this.pB0x[1] == "top") {
				gM7F = bkY5d > bkN5S ? gM7F - co5t : gM7F
			} else {
				gM7F = gM7F - co5t < 0 ? gM7F : gM7F - co5t
			}
			break;
		case "right":
			cO6I = cO6I - dp6j < 0 ? 0 : cO6I - dp6j;
			if (this.pB0x[1] == "top") {
				gM7F = bkY5d > bkN5S ? gM7F - co5t : gM7F
			} else {
				gM7F = gM7F - co5t < 0 ? gM7F : gM7F - co5t
			}
			break;
		default:
			gM7F = gM7F - co5t < 0 ? gM7F : gM7F - co5t;
			if (this.pB0x[1] == "left") {
				cO6I = bkT5Y > IQ6K ? IQ6K - dp6j : cO6I
			} else {
				cO6I = cO6I - dp6j < 0 ? 0 : cO6I - dp6j
			}
			break
		}
		return {
			top: gM7F,
			left: cO6I
		}
	};
	b4f.blb5g = function() {
		var chS8K = function(E5J, dg6a) {
				E5J = a3x.y5D(E5J);
				if (!E5J) return;
				dg6a = dg6a || X5c;
				var bi5n = a3x.hJ8B(E5J);
				return {
					top: bi5n.y - (dg6a.top || 0),
					left: bi5n.x - (dg6a.left || 0),
					width: E5J.offsetWidth + (dg6a.right || 0),
					height: E5J.offsetHeight + (dg6a.bottom || 0)
				}
			};
		return function(e4i) {
			e4i = e4i || X5c;
			this.RX9O = e4i.event;
			this.ciE8w(e4i.align);
			if ( !! this.RX9O) this.wc2x = this.chY8Q(e4i.target, e4i.delta, this.RX9O);
			this.bka5f = chS8K(e4i.target, e4i.delta);
			this.bKg1x = !! e4i.fitable;
			this.N5S();
			return this
		}
	}()
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ui"),
		b4f, K5P;
	if ( !! M5R.Ar3x) return;
	M5R.Ar3x = NEJ.C();
	b4f = M5R.Ar3x.O5T(M5R.TG0x);
	K5P = M5R.Ar3x.cf5k;
	M5R.Ar3x.cuE1x = function() {
		var chH7A = function(d4h, C5H, fh7a, ju8m, Qf9W) {
				var cp5u, J5O = C5H + "-i",
					P5U = fh7a.vH2x,
					bJO1x = !! ju8m.noclear,
					bJM1x = !! ju8m.toggled;
				if (k4o.fZ7S(ju8m.onbeforeclick)) {
					var Sc9T = ju8m.noclear,
						chB7u = ju8m.toggled;
					try {
						ju8m.onbeforeclick(ju8m)
					} catch (e) {}
					bJO1x = !! ju8m.noclear;
					bJM1x = !! ju8m.toggled;
					ju8m.toggled = chB7u;
					ju8m.noclear = Sc9T
				}
				var DF4J = P5U[J5O];
				if (bJM1x && !! DF4J) {
					DF4J.bp5u();
					return
				}
				h4l.bh5m(d4h);
				if (!bJO1x) {
					h4l.w5B(document, "click");
					cp5u = fh7a.B5G(ju8m)
				} else {
					cp5u = fh7a.csP0x(ju8m, !0)
				}
				P5U[J5O] = cp5u;
				cp5u.uY2x("onbeforerecycle", function() {
					delete P5U[J5O]
				});
				cp5u.blb5g(Qf9W)
			};
		return function(f4j, e4i) {
			f4j = a3x.y5D(f4j);
			if (!f4j) return this;
			if (!this.vH2x) this.vH2x = {};
			var C5H = a3x.kJ9A(f4j);
			if ( !! this.vH2x[C5H]) return this;
			e4i = NEJ.X({}, e4i);
			var Qf9W = NEJ.EX({
				align: "",
				delta: null,
				fitable: !1
			}, e4i);
			Qf9W.target = C5H;
			e4i.destroyable = !0;
			if (!e4i.fixed) {
				Qf9W.fitable = !0;
				e4i.parent = document.body
			}
			this.vH2x[C5H] = [C5H, e4i.event || "click", chH7A.dT7M(null, C5H, this, e4i, Qf9W)];
			h4l.s4w.apply(h4l, this.vH2x[C5H]);
			return this
		}
	}();
	M5R.Ar3x.cuF1x = function(f4j) {
		if (!this.vH2x) return this;
		var C5H = a3x.kJ9A(f4j),
			d4h = this.vH2x[C5H];
		if (!d4h) return this;
		delete this.vH2x[C5H];
		h4l.mv9m.apply(h4l, d4h);
		var cp5u = this.vH2x[C5H + "-i"];
		if ( !! cp5u) cp5u.bp5u();
		return this
	};
	b4f.bnG5L = function() {
		return M5R.RW9N.B5G(this.bQ5V)
	};
	b4f.Nn7g = function() {
		K5P.Nn7g.apply(this, arguments);
		this.bQ5V.top = null;
		this.bQ5V.left = null;
		this.bQ5V.nostop = !1
	};
	b4f.blb5g = function(e4i) {
		if ( !! this.nl9c) this.nl9c.blb5g(e4i);
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		bd5i = c4g("nej.ui"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.blV5a = NEJ.C();
	b4f = n4r.blV5a.O5T(bd5i.Ar3x);
	b4f.bj5o = function(e4i) {
		e4i.nohack = true;
		this.bk5p(e4i)
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.Z5e = NEJ.C();
	b4f = n4r.Z5e.O5T(n4r.blV5a);
	K5P = n4r.Z5e.cf5k;
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.el7e = e4i.type || 1
	};
	b4f.bR5W = function() {
		this.cb5g();
		this.o4s = a3x.nf9W(this.chx7q());
		var i4m = a3x.cP6J(this.o4s);
		this.pw0x = i4m[0];
		this.ci5n = i4m[1]
	};
	b4f.chx7q = function() {
		return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
	};
	b4f.HP5U = function() {
		var A5F = {},
			cd5i = this.o4s.style,
			iO8G = a3x.oz0x(),
			mW9N = {
				left: iO8G.scrollLeft,
				top: iO8G.scrollTop
			},
			dg6a = {
				left: iO8G.clientWidth - this.o4s.offsetWidth,
				top: iO8G.clientHeight - this.o4s.offsetHeight
			};
		A5F.top = Math.max(0, mW9N.top + dg6a.top / 2);
		A5F.left = Math.max(0, mW9N.left + dg6a.left / 2);
		this.nl9c.fY7R(A5F)
	};
	b4f.N5S = function(e4i) {
		K5P.N5S.call(this);
		this.HP5U();
		this.el7e == 1 ? a3x.eD7w(this.pw0x, "u-icn-32", "u-icn-31") : a3x.eD7w(this.pw0x, "u-icn-31", "u-icn-32");
		this.ci5n.innerHTML = e4i.tip || ""
	};
	window.g_showTipCard = n4r.Z5e.N5S = function() {
		var eT7M;
		return function(e4i) {
			clearTimeout(eT7M);
			if (e4i.parent === undefined) e4i.parent = document.body;
			if (e4i.autoclose === undefined) e4i.autoclose = true;
			e4i.clazz = "m-sysmsg"; !! this.eN7G && this.eN7G.S5X();
			this.eN7G = this.B5G(e4i);
			this.eN7G.N5S(e4i);
			if (e4i.autoclose) eT7M = setTimeout(this.bp5u.g4k(this), 2e3)
		}.g4k(n4r.Z5e)
	}();
	n4r.Z5e.bp5u = function() { !! this.eN7G && this.eN7G.bp5u()
	}
})();
(function() {
	var c4g = NEJ.P,
		v5A = c4g("nej.j"),
		k4o = c4g("nej.u");
	if (window["GRef"] && window["GRef"] == "mail") {
		v5A.bq5v = v5A.bq5v.ef7Y(function(d4h) {
			e4i = d4h.args[1];
			e4i.query = e4i.query || {};
			if (k4o.fn7g(e4i.query)) e4i.query = k4o.hf8X(e4i.query);
			e4i.query.ref = "mail"
		})
	}
})();
(function() {
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
	p4t.eQ7J({
		"playlist_my-list": {
			url: "/api/user/playlist",
			type: "GET",
			format: function(Q5V, e4i) {
				this.chv7o(Q5V.playlist);
				return {
					total: 0,
					list: fb7U
				}
			},
			onerror: function() {
				this.w5B("onlisterror")
			}
		},
		"playlist_new-add": {
			url: "/api/playlist/create",
			format: function(Q5V, e4i) {
				var ms9j = Q5V.playlist;
				ms9j.creator = GUser;
				ms9j.isHost = !0;
				ms9j.typeFlag = "playlist";
				return ms9j
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.hn8f, "listchange", d4h)
			},
			onmessage: function() {
				var lx9o = {
					507: "歌单数量超过上限！",
					405: "你操作太快了，请休息一会再试！",
					406: "你操作太快了，请休息一会再试！"
				};
				return function(cc5h) {
					n4r.Z5e.N5S({
						tip: lx9o[cc5h] || "创建失败",
						type: 2
					})
				}
			}()
		},
		"playlist_new-del": {
			url: "/api/playlist/delete",
			type: "GET",
			filter: function(e4i) {
				e4i.id = e4i.data.pid
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.hn8f, "listchange", d4h)
			},
			onmessage: function() {
				var lx9o = {
					404: "歌单不存在！",
					405: "你操作太快了，请休息一会再试！",
					406: "你操作太快了，请休息一会再试！"
				};
				return function(cc5h) {
					n4r.Z5e.N5S({
						tip: lx9o[cc5h] || "删除失败",
						type: 2
					})
				}
			}()
		},
		"playlist_fav-add": {
			type: "GET",
			url: "/api/playlist/subscribe",
			filter: function(e4i) {
				var ex7q = e4i.ext || {};
				e4i.ext = NEJ.X(ex7q, e4i.data);
				e4i.data = {
					id: e4i.ext.id
				}
			},
			format: function(Q5V, e4i) {
				n4r.Z5e.N5S({
					tip: "收藏成功" + (Q5V.point > 0 ? ' 获得<em class="s-fc6">' + Q5V.point + "积分</em>" : "")
				});
				var q4u = e4i.ext;
				q4u.subscribedCount++;
				return q4u
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.chs7l, "listchange", d4h);
				h4l.w5B(p4t.chs7l, "itemchange", {
					attr: "subscribedCount",
					data: d4h.data
				})
			},
			onmessage: function() {
				var lx9o = {
					404: "歌单不存在！",
					501: "歌单已经收藏！",
					506: "歌单收藏数量超过上限！"
				};
				return function(cc5h) {
					n4r.Z5e.N5S({
						type: 2,
						tip: lx9o[cc5h] || "收藏失败，请稍后再试！"
					})
				}
			}()
		},
		"playlist_fav-del": {
			url: "/api/playlist/unsubscribe",
			type: "GET",
			filter: function(e4i) {
				e4i.id = e4i.data.id = e4i.data.pid
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.hn8f, "listchange", d4h)
			},
			onmessage: function() {
				var lx9o = {
					404: "歌单不存在！",
					405: "你操作太快了，请休息一会再试！",
					406: "你操作太快了，请休息一会再试！"
				};
				return function(cc5h) {
					n4r.Z5e.N5S({
						tip: lx9o[cc5h],
						type: 2
					})
				}
			}()
		},
		"playlist_new-update": {
			url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
			filter: function(e4i) {
				var j4n = e4i.data,
					Se9V = {};
				Se9V["playlist-update-name"] = {
					id: j4n.id,
					name: j4n.name
				};
				Se9V["playlist-update-tag"] = {
					id: j4n.id,
					tags: j4n.tags.join(";")
				};
				Se9V["playlist-update-desc"] = {
					id: j4n.id,
					desc: j4n.description
				};
				e4i.data = Se9V;
				e4i.ext = j4n
			},
			format: function(T5Y, pE0x, PY9P, e4i) {
				if (T5Y.code == 200 && pE0x.code == 200 && PY9P.code == 200) {
					e4i.ext.allSuccess = true;
					n4r.Z5e.N5S({
						tip: "保存成功"
					})
				} else if (T5Y.code == 407 || pE0x.code == 407 || PY9P.code == 407) {
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
				return this.eg7Z(e4i.ext.id)
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.hn8f, "listchange", d4h)
			},
			onmessage: function(cc5h) {
				n4r.Z5e.N5S({
					type: 2,
					tip: "保存失败"
				})
			}
		},
		"playlist-update-name": {
			url: "/api/playlist/update/name",
			format: function(Q5V, e4i) {
				var q4u = this.eg7Z(e4i.ext.id);
				if (Q5V.code == 200) q4u.name = e4i.ext.name;
				return Q5V
			}
		},
		"playlist-update-tag": {
			url: "/api/playlist/tags/update",
			format: function(Q5V, e4i) {
				var q4u = this.eg7Z(e4i.ext.id);
				if (Q5V.code == 200) q4u.tags = e4i.ext.tags;
				return Q5V
			}
		},
		"playlist-update-desc": {
			url: "/api/playlist/desc/update",
			format: function(Q5V, e4i) {
				var q4u = this.eg7Z(e4i.ext.id);
				if (Q5V.code == 200) q4u.description = e4i.ext.description;
				return Q5V
			}
		},
		"playlist-update-cover": {
			url: "/api/playlist/cover/update",
			filter: function(e4i) {
				e4i.url = e4i.data.url;
				delete e4i.data.url
			},
			format: function(Q5V, e4i) {
				n4r.Z5e.N5S({
					tip: "保存成功"
				});
				var q4u = this.eg7Z(e4i.data.id);
				q4u.coverImgUrl = e4i.url;
				e4i.ext = q4u;
				return q4u
			},
			onmessage: function(cc5h) {
				n4r.Z5e.N5S({
					type: 2,
					tip: "保存失败"
				})
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.hn8f, "itemchange", {
					attr: "coverImgUrl",
					data: e4i.ext
				})
			}
		},
		"playlist-upcount": {
			url: "/api/playlist/update/playcount",
			type: "GET",
			format: function(Q5V, e4i) {
				var ms9j = this.eg7Z(e4i.data.id);
				if (!ms9j) return;
				ms9j.playCount++;
				h4l.w5B(p4t.hn8f, "itemchange", {
					attr: "playcount",
					data: ms9j
				})
			}
		}
	});
	p4t.hn8f = NEJ.C();
	b4f = p4t.hn8f.O5T(p4t.gZ8R);
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.bJH1x = function() {
		var cR6L = GUser.userId;
		this.nr9i({
			limit: 1001,
			key: "playlist_my-" + cR6L,
			data: {
				offset: 0,
				limit: 1001,
				uid: cR6L
			}
		})
	};
	b4f.chv7o = function(i4m) {
		var cR6L = GUser.userId,
			iQ8I = [],
			bJF1x = [];
		k4o.bc5h(i4m, function(q4u) {
			q4u.typeFlag = "playlist";
			if (q4u.creator && q4u.creator.userId == cR6L) {
				if (q4u.specialType == 5) q4u.name = "我喜欢的音乐";
				q4u.isHost = !0;
				iQ8I.push(q4u)
			} else {
				bJF1x.push(q4u)
			}
		});
		this.ri1x("playlist_new-" + cR6L, iQ8I);
		this.ri1x("playlist_fav-" + cR6L, bJF1x)
	};
	b4f.chl7e = function(j4n) {
		this.cj5o("playlist-update-cover", {
			data: j4n
		})
	};
	b4f.cuH1x = function() {
		var PW8O = this.cgR7K.y5D("host-plist");
		if (PW8O.length == 0) {
			return
		}
		if (PW8O.length == 1 && PW8O[0].trackCount <= 0) {
			return
		}
		for (var i = 0, len = PW8O.length; i < len; i++) {
			var q4u = PW8O[i];
			if (q4u.trackCount > 0) return q4u.id
		}
		return this.cgR7K.y5D("host-plist")[0].id
	};
	b4f.cgP7I = function(C5H) {
		if (GUser && GUser.userId > 0) {
			this.cj5o("playlist-upcount", {
				data: {
					id: C5H
				}
			})
		}
	};
	b4f.Ea4e = function() {
		if (GUser && GUser.userId > 0) {
			return !0
		} else {
			top.login();
			return !1
		}
	};
	b4f.cuI1x = function() {
		return GUser.userId
	};
	b4f.bnF5K = function(q4u) {
		if (q4u.userId == GUser.userId && q4u.specialType == 5) q4u.name = "我喜欢的音乐";
		h4l.w5B(this.constructor, "itemchange", {
			data: this.zM3x(q4u)
		});
		return q4u
	};
	H5M.fu7n.B5G({
		element: p4t.hn8f,
		event: ["listchange", "playcountchange", "itemchange"]
	})
})();
(function() {
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
	p4t.eQ7J({
		"program-get": {
			url: "/api/dj/program/detail",
			format: function(Q5V) {
				return Q5V.program
			}
		},
		"program_djradio-list": {
			type: "GET",
			url: "/api/dj/program/byradio",
			filter: function(e4i) {
				e4i.data.limit = 1e3;
				delete e4i.data.id
			},
			format: function(Q5V, e4i) {
				var bJz1x = [],
					AC3x = Q5V.programs;
				if (AC3x) {
					for (var i = 0, l = AC3x.length; i < l; i++) {
						if (AC3x[i].programFeeType < 10 || AC3x[i].buyed) {
							bJz1x.push(AC3x[i])
						}
					}
				}
				return bJz1x
			}
		},
		"program_fav-list": {
			url: "/api/djprogram/subscribed/paged",
			format: function(Q5V, e4i) {
				return Q5V.programs
			},
			onerror: "onlisterror"
		},
		"program_fav-add": {
			url: "/api/djprogram/subscribe",
			filter: function(e4i) {
				e4i.ext = e4i.data;
				e4i.data = {
					id: e4i.ext.id
				};
				e4i.id = e4i.data.id
			},
			format: function(Q5V, e4i) {
				n4r.Z5e.N5S({
					tip: "收藏成功"
				});
				var q4u = e4i.ext;
				q4u.subscribedCount++;
				q4u.subscribed = !0;
				return q4u
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.pM0x, "listchange", d4h)
			},
			onmessage: function() {
				var lx9o = {
					404: "节目不存在！",
					501: "节目已收藏！"
				};
				return function(cc5h) {
					n4r.Z5e.N5S({
						type: 2,
						tip: lx9o[cc5h] || "收藏失败！"
					})
				}
			}()
		},
		"program_fav-del": {
			url: "/api/djprogram/unsubscribe",
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.pM0x, "listchange", d4h)
			},
			onmessage: function() {
				var lx9o = {
					404: "节目不存在！",
					502: "没有收藏此节目！"
				};
				return function(cc5h) {
					l4p.bnS5X({
						txt: lx9o[cc5h] || "取消收藏失败！"
					})
				}
			}()
		},
		"program-update-count": {
			type: "GET",
			url: "/api/dj/program/listen",
			filter: function(e4i) {
				var q4u = this.eg7Z(e4i.data.id) || X5c;
				e4i.ext = (q4u.listenerCount || 0) + 1
			},
			format: function(Q5V, e4i) {
				var q4u = this.eg7Z(e4i.data.id);
				if ( !! q4u) {
					q4u.listenerCount = Math.max(e4i.ext, q4u.listenerCount || 0)
				}
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.pM0x, "itemchange", {
					attr: "playCount",
					data: this.eg7Z(e4i.data.id)
				})
			}
		},
		"program-like": {
			url: "/api/resource/like",
			filter: function(e4i) {
				e4i.data = {
					threadId: "A_DJ_1_" + e4i.id
				}
			},
			format: function(Q5V, e4i) {
				var q4u = e4i.ext.data || this.eg7Z(e4i.id);
				q4u.liked = true;
				q4u.likedCount++;
				e4i.ext.data = q4u;
				try {
					top.player.setLike(q4u)
				} catch (e) {}
				return q4u
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.pM0x, "itemchange", {
					attr: "likedCount",
					data: e4i.ext.data
				})
			}
		},
		"program-unlike": {
			url: "/api/resource/unlike",
			filter: function(e4i) {
				e4i.data = {
					threadId: "A_DJ_1_" + e4i.id
				}
			},
			format: function(Q5V, e4i) {
				var q4u = e4i.ext.data || this.eg7Z(e4i.id);
				q4u.liked = false;
				q4u.likedCount--;
				e4i.ext.data = q4u;
				try {
					top.player.setLike(q4u)
				} catch (e) {}
				return q4u
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.pM0x, "itemchange", {
					attr: "likedCount",
					data: e4i.ext.data
				})
			}
		}
	});
	p4t.pM0x = NEJ.C();
	b4f = p4t.pM0x.O5T(p4t.gZ8R);
	b4f.cuK1x = function() {
		var cR6L = GUser.userId;
		this.nr9i({
			limit: 1001,
			key: "program_fav-" + cR6L,
			data: {
				offset: 0,
				limit: 1e3,
				uid: cR6L
			}
		})
	};
	b4f.cuL1x = function(dh6b) {
		var oO0x = dh6b[this.uc1x];
		l4p.cgD7w(4, function(P5U) {
			P5U.ri1x("track_program-" + oO0x, dh6b.songs)
		});
		delete dh6b.songs;
		var bI5N = dh6b.mainSong;
		l4p.cgD7w(4, function(P5U) {
			P5U.ri1x("track_program_main-" + oO0x, !bI5N ? [] : [bI5N])
		});
		dh6b.mainSong = (bI5N || X5c).id
	};
	b4f.cuN1x = function(C5H) {
		var dh6b = this.eg7Z(C5H),
			cR6L = localCache.Sr0x("host.profile.userId");
		return !!dh6b && dh6b.dj.userId == cR6L
	};
	b4f.cuO1x = function(C5H) {
		return !1
	};
	b4f.bnF5K = function(q4u) {
		h4l.w5B(this.constructor, "itemchange", {
			attr: "detail",
			data: this.zM3x(q4u)
		});
		return q4u
	};
	b4f.cgP7I = function(C5H) {
		this.cj5o("program-update-count", {
			data: {
				id: C5H
			}
		})
	};
	l4p.bJs0x = function(e4i) {
		var P5U = p4t.pM0x.B5G({
			onitemadd: function() {
				(e4i.onsuccess || bn5s)()
			},
			onerror: function() {
				(e4i.onerror || bn5s)()
			}
		});
		if (e4i.data.liked) {
			P5U.PU8M(e4i.data)
		} else {
			P5U.xv2x(e4i.data)
		}
	};
	b4f.xv2x = function(dh6b) {
		if (!l4p.hd8V()) return;
		var cm5r = {
			ext: {}
		};
		if (k4o.ks9j(dh6b)) {
			cm5r.id = dh6b.id;
			cm5r.ext.data = dh6b
		} else {
			cm5r.id = dh6b
		}
		this.cj5o("program-like", cm5r)
	};
	b4f.PU8M = function(dh6b) {
		if (!l4p.hd8V()) return;
		var cm5r = {
			ext: {}
		};
		if (k4o.ks9j(dh6b)) {
			cm5r.id = dh6b.id;
			cm5r.ext.data = dh6b
		} else {
			cm5r.id = dh6b
		}
		this.cj5o("program-unlike", cm5r)
	};
	H5M.fu7n.B5G({
		element: p4t.pM0x,
		event: ["listchange", "itemchange"]
	})
})();
(function() {
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
	p4t.eQ7J({
		"track-get": {
			url: "/api/v3/song/detail",
			filter: function(e4i) {
				e4i.data.c = JSON.stringify([{
					id: e4i.data.id
				}])
			},
			format: function(Q5V, e4i) {
				var be5j = l4p.Er4v(Q5V.songs[0]);
				be5j.privilege = Q5V.privileges[0];
				return be5j
			}
		},
		"track_playlist-list": {
			url: "/api/v3/playlist/detail",
			filter: function(e4i) {
				e4i.data.n = 1e3
			},
			format: function(Q5V, e4i) {
				var hc8U = [];
				this.sk1x.bnF5K(Q5V.playlist);
				k4o.bc5h(Q5V.playlist.tracks, function(bI5N, r4v) {
					var bJr0x = l4p.Er4v(bI5N);
					bJr0x.privilege = Q5V.privileges[r4v];
					hc8U.push(bJr0x)
				}, this);
				return hc8U
			}
		},
		"track_album-list": {
			url: "/api/v1/album/{id}",
			format: function(Q5V, e4i) {
				var hc8U = [];
				k4o.bc5h(Q5V.songs, function(be5j) {
					hc8U.push(l4p.Er4v(be5j))
				});
				return hc8U
			}
		},
		"track_playlist-add": {
			url: "/api/playlist/manipulate/tracks",
			filter: function(e4i) {
				var bu5z = {},
					j4n = e4i.data,
					cgu7n = this.gQ8I(e4i.key) || [];
				EA4E = [];
				k4o.bc5h(cgu7n, function(bI5N) {
					var C5H = k4o.ks9j(bI5N) ? bI5N.id : bI5N;
					bu5z[C5H] = true
				});
				e4i.ext = [];
				k4o.bc5h(j4n.tracks, function(bI5N) {
					var C5H = k4o.ks9j(bI5N) ? bI5N.id : bI5N;
					if (!bu5z[C5H]) {
						EA4E.push(C5H);
						bu5z[C5H] = true;
						e4i.ext.push(bI5N)
					}
				});
				j4n.trackIds = JSON.stringify(EA4E);
				j4n.op = "add";
				if (!EA4E.length) {
					e4i.value = {
						code: 502
					}
				}
			},
			format: function(Q5V, e4i) {
				n4r.Z5e.N5S({
					tip: "已添加至歌单"
				});
				var ms9j = this.sk1x.eg7Z(e4i.data.pid);
				if ( !! Q5V.coverImgUrl) ms9j.coverImgUrl = Q5V.coverImgUrl;
				k4o.mt9k(e4i.ext, function(bI5N) {
					this.vC2x(e4i, k4o.ks9j(bI5N) ? bI5N : null);
					if ( !! ms9j) ms9j.trackCount++
				}, this);
				h4l.w5B(p4t.hn8f, "itemchange", {
					data: ms9j || {},
					cmd: "add"
				});
				this.w5B("onaddsuccess");
				return null
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.vt2x, "listchange", {
					key: e4i.key,
					action: "refresh"
				});
				var oO0x = e4i.data.pid,
					cq5v = this.jE8w(e4i.key)
			},
			onmessage: function() {
				var lx9o = {
					502: "歌曲已存在！",
					505: "歌单已满！"
				};
				return function(cc5h) {
					setTimeout(function() {
						n4r.Z5e.N5S({
							tip: lx9o[cc5h] || "添加失败，请稍后再试！",
							type: 2
						})
					}, 0)
				}
			}()
		},
		"track_playlist-del": {
			url: "/api/playlist/manipulate/tracks",
			filter: function(e4i) {
				var j4n = e4i.data;
				e4i.ext = j4n.trackIds;
				j4n.trackIds = JSON.stringify(j4n.trackIds);
				j4n.op = "del"
			},
			format: function(Q5V, e4i) {
				var ms9j = this.sk1x.eg7Z(e4i.data.pid);
				k4o.bc5h(e4i.ext, function(C5H) {
					this.bdE3x({
						id: C5H,
						key: "track_playlist-" + e4i.data.pid
					}, !0);
					if ( !! ms9j) ms9j.trackCount = Math.max(0, ms9j.trackCount - 1)
				}, this);
				h4l.w5B(p4t.hn8f, "itemchange", {
					data: ms9j || {},
					cmd: "del"
				});
				return null
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.vt2x, "listchange", {
					key: e4i.key,
					action: "refresh"
				})
			},
			onmessage: function(cc5h) {
				l4p.bnS5X({
					text: "歌曲删除失败！"
				})
			}
		},
		"track_program-list": {
			url: "/api/dj/program/detail",
			format: function(Q5V, e4i) {
				return this.bJq0x.bnF5K(Q5V.program).songs
			},
			onerror: "onlisterror"
		},
		"track_listen_record-list": {
			url: "/api/v1/play/record",
			format: function(Q5V, e4i) {
				var i4m = [];
				if (e4i.data.type == -1) {
					if (Q5V.weekData && Q5V.weekData.length) {
						e4i.data.type = 1
					} else {
						e4i.data.type = 0
					}
				}
				if (e4i.data.type == 1) {
					i4m = this.bJp0x(Q5V.weekData)
				} else {
					i4m = this.bJp0x(Q5V.allData)
				}
				return i4m
			},
			onerror: "onlisterror"
		},
		"track_day-list": {
			url: "/api/v2/discovery/recommend/songs",
			format: function(Q5V, e4i) {
				var mV9M = [],
					i4m = Q5V.recommend || [];
				k4o.bc5h(i4m, function(be5j, r4v) {
					mV9M.push({
						action: "recommendimpress",
						json: {
							alg: be5j.alg,
							scene: "user-song",
							position: r4v,
							id: be5j.id
						}
					})
				});
				this.kG9x.RF9w(mV9M);
				e4i.limit = i4m.length;
				return i4m
			},
			onerror: "onlisterror"
		},
		"track_lyric-get": {
			type: "GET",
			url: "/api/song/lyric",
			filter: function(e4i) {
				e4i.data.lv = 0;
				e4i.data.tv = 0
			},
			format: function(m4q, e4i) {
				return m4q
			},
			onload: "onlyricload",
			onerror: "onlyricerror"
		}
	});
	p4t.vt2x = NEJ.C();
	b4f = p4t.vt2x.O5T(p4t.gZ8R);
	b4f.cl5q = function() {
		this.cs5x();
		this.sk1x = p4t.hn8f.B5G();
		this.bJq0x = p4t.pM0x.B5G();
		this.kG9x = p4t.hK8C.B5G()
	};
	b4f.bJp0x = function(i4m) {
		var m4q = [],
			fd7W = 0;
		k4o.bc5h(i4m, function(q4u, r4v) {
			var be5j = l4p.Er4v(q4u.song);
			if (r4v == 0) {
				fd7W = q4u.score
			}
			be5j.max = fd7W;
			be5j.playCount = q4u.playCount;
			be5j.score = q4u.score;
			m4q.push(be5j)
		});
		return m4q
	};
	H5M.fu7n.B5G({
		element: p4t.vt2x,
		event: ["listchange"]
	})
})();
(function() {
	function J() {
		var d = "6skV4PUYecGhx07l".split("");
		this.d = function(f) {
			if (null == f || void 0 == f) return f;
			if (0 != f.length % 2) throw Error("1100");
			for (var b = [], c = 0; c < f.length; c++) {
				0 == c % 2 && b.push("%");
				for (var g = d, a = 0; a < g.length; a++) if (f.charAt(c) == g[a]) {
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
	(function() {
		var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
			J = [g("YPU7UcUUUlYkU0VkUU")],
			b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
			c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
			Ja = [e("40UlUlUx4kUlYkUsU7")];
		(function() {
			var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
			(function() {
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
					if (null != h) for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
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
					for (var c = [], l = h.length, d = a[15]; d < l; d++) if (h.charAt(d) == b[27]) if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
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
						return function(c) {
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
						d.push(p(y[b[4]], function(h) {
							f[h.name] = a[541];
							var d = p(h, function(a) {
								return [a.type, a.suffixes].join(b[144])
							}).join(b[34]);
							return [h.name, h.description, d].join(c[88])
						}, this).join(b[25]));
						d.push(p(h, function(a) {
							if (f[a]) return b[0];
							a = y[b[4]][a];
							if (!a) return b[0];
							var h = p(a, function(a) {
								return [a.type, a.suffixes].join(b[144])
							}).join(b[34]);
							return [a.name, a.description, h].join(c[88])
						}, this).join(b[56]));
						return d.join(b[56])
					}
					function q() {
						return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function(a) {
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
						E(a, function(a, d, f) {
							c[c.length] = b.call(h, a, d, f)
						});
						return c
					}
					function E(b, h) {
						if (null !== b) if (z && b.forEach === z) b.forEach(h, void 0);
						else if (b.length === +b.length) for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
						else for (c in b) if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
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
					this.get = function() {
						var h = [],
							l = [];
						if (Qa) {
							var e;
							try {
								e = !! window[b[339]]
							} catch (X) {
								e = !0
							}
							h.push(e);
							var p;
							try {
								p = !! window[c[38]]
							} catch (z) {
								p = !0
							}
							h.push(p);
							h.push( !! window[c[40]]);
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
						if (!r(q)) for (h = a[15]; h < q.length; h++) {
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
						for (var e = e + b[142], f = a[15]; f < d.length; f++) if (h.hasOwnProperty(d[f])) {
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
					if (!(null == K || void 0 == K || K.length <= a[15])) for (var c = a[15]; c < K.length; c++) {
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
								for (var u = [], R = a[15]; R < G.length;) if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya;
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
					toString: function() {
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
					d = function(b, c) {
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
					A = function(d, e) {
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
					K = function(c) {
						var d = [];
						if (!c) return d;
						c = c.split(b[38]);
						for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
						return d
					}(O);
				K.push(null);
				K.push(b[38] + O);
				(function(d) {
					for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
						var k = f[g].indexOf(b[57]);
						k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
					}
					return e
				})(S) > a[541] && Ia();
				(function() {
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
(function() {})();
(function() {
	var bJo0x;
	var sv1x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
	var cgi7b = 0;
	var bJn0x = 0;
	var bJm0x = 1;
	var bJl0x = 0;
	var bpR6L = "";
	var bJj0x = "";
	var bJi0x = "";
	var Si9Z = "";
	var Sk9b = "";
	var bqf6Z = "";
	var bJg0x = 0;
	var bJe0x = "";
	var IJ6D = "";
	var AV3x = 0;
	var bqr6l = ntes_get_domain();
	var bqu6o = null;
	var cuQ1x = "//analytics.163.com";
	var cfR7K = function() {};

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
		document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bqr6l
	}
	function ntes_set_cookie(a, c) {
		var b = new Date;
		b.setTime(b.getTime() + 0);
		document.cookie = a + "=" + c + "; path=/; domain=" + bqr6l
	}
	function ntes_set_cookie_new(b, d, a) {
		if (!a || a == "") {
			a = 1e3 * 60 * 60 * 24 * 365 * 1
		}
		var c = new Date;
		c.setTime(c.getTime() + a);
		document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bqr6l
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
	var cfQ7J = 0;
	var PI8A = 8;

	function ntes_hex_md5(a) {
		return binl2hex(ntes_core_md5(str2binl(a), a.length * PI8A))
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
		var a = (1 << PI8A) - 1;
		for (var b = 0; b < d.length * PI8A; b += PI8A) {
			c[b >> 5] |= (d.charCodeAt(b / PI8A) & a) << b % 32
		}
		return c
	}
	function binl2hex(c) {
		var b = cfQ7J ? "0123456789ABCDEF" : "0123456789abcdef";
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
		Si9Z = "-";
		bqf6Z = "-";
		Sk9b = "-";
		var c = window.self,
			b = window.screen,
			a = window.navigator;
		if (c.screen) {
			Si9Z = b.width + "x" + b.height;
			bqf6Z = b.colorDepth + "-bit"
		} else {
			if (c.java) {
				var e = java.awt.Toolkit.getDefaultToolkit();
				var f = e.getScreenSize();
				Si9Z = f.width + "x" + f.height
			}
		}
		if (a.language) {
			Sk9b = a.language.toLowerCase()
		} else {
			if (a.browserLanguage) {
				Sk9b = a.browserLanguage.toLowerCase()
			}
		}
		var g = new Date(document.lastModified);
		bJg0x = g.getTime() / 1e3
	}
	function fetch_visitor_hash() {
		var c = new Date;
		var b = document.body.clientWidth + ":" + document.body.clientHeight;
		var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
		return ntes_hex_md5(a)
	}
	function cuR1x(c, b, f) {
		var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
			a, d = f || cfR7K;
		a = window[e] = new Image;
		a.onload = function() {
			window[e] = null;
			d()
		};
		a.onerror = function() {
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
		var e = k || bJo0x;
		bpR6L = escape(a || document.location);
		bJj0x = escape(m || document.title);
		bJi0x = l === true ? "" : escape(l || document.referrer);
		bJe0x = ntes_get_flashver();
		var b = (new Date).getTime();
		if (bqu6o == null) {
			document.cookie = "__ntes__test__cookies=" + b;
			bqu6o = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
			document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
		}
		if (e == "undefined" || !e) {
			return
		}
		if (bpR6L.indexOf("http") != 0) {
			return
		}
		var h = ntes_get_cookie("_ntes_nnid");
		if (h == -1) {
			if (bqu6o) {
				sv1x = fetch_visitor_hash();
				bJn0x = 1;
				ntes_set_cookie_long("_ntes_nnid", sv1x + "," + (new Date).getTime());
				ntes_set_cookie_long("_ntes_nuid", sv1x)
			}
		} else {
			var o = h.indexOf(",");
			var p = h.indexOf("|");
			var f = false;
			if (p == -1) {
				p = h.length
			}
			sv1x = h.substr(0, o);
			AV3x = h.substr(o + 1, p - o - 1);
			if (AV3x == 0) {
				AV3x = (new Date).getTime();
				f = true
			}
			if (!sv1x) {
				sv1x = fetch_visitor_hash();
				f = true
			}
			if (f) {
				ntes_set_cookie_long("_ntes_nnid", sv1x + "," + AV3x);
				ntes_set_cookie_long("_ntes_nuid", sv1x)
			}
			if (AV3x != 0 && b - AV3x > 365 * 86400 * 1e3) {
				AV3x = 0;
				ntes_set_cookie_long("_ntes_nnid", sv1x + "," + (new Date).getTime());
				ntes_set_cookie_long("_ntes_nuid", sv1x)
			}
		}
		function c(q, i) {
			var s = ntes_get_cookie(q),
				r = ntes_get_cookie(i);
			return s == -1 ? r == -1 ? "" : r : s
		}
		IJ6D = c("P_INFO", "P_OINFO");
		IJ6D = IJ6D ? IJ6D.substr(0, IJ6D.indexOf("|")) : "";
		bJl0x = c("S_INFO", "S_OINFO") ? 1 : 0;
		ntes_get_navigation_info();
		var n = ["_nacc=", e, "&_nvid=", sv1x, "&_nvtm=", cgi7b, "&_nvsf=", bJm0x, "&_nvfi=", bJn0x, "&_nlag=", Sk9b, "&_nlmf=", bJg0x, "&_nres=", Si9Z, "&_nscd=", bqf6Z, "&_nstm=", bJl0x, "&_nurl=", bpR6L, "&_ntit=", bJj0x, "&_nref=", bJi0x, "&_nfla=", bJe0x, "&_nssn=", IJ6D, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
		bJm0x = 0;
		neteaseTracker.callback = null
	}
	bJo0x = "iad";
	neteaseTracker()
})();
(function() {})();
var CryptoJS = CryptoJS ||
function(u, p) {
	var d = {},
		l = d.lib = {},
		s = function() {},
		t = l.Base = {
			extend: function(a) {
				s.prototype = this;
				var c = new s;
				a && c.mixIn(a);
				c.hasOwnProperty("init") || (c.init = function() {
					c.$super.init.apply(this, arguments)
				});
				c.init.prototype = c;
				c.$super = this;
				return c
			},
			create: function() {
				var a = this.extend();
				a.init.apply(a, arguments);
				return a
			},
			init: function() {},
			mixIn: function(a) {
				for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
				a.hasOwnProperty("toString") && (this.toString = a.toString)
			},
			clone: function() {
				return this.init.prototype.extend(this)
			}
		},
		r = l.WordArray = t.extend({
			init: function(a, c) {
				a = this.words = a || [];
				this.sigBytes = c != p ? c : 4 * a.length
			},
			toString: function(a) {
				return (a || v).stringify(this)
			},
			concat: function(a) {
				var c = this.words,
					e = a.words,
					j = this.sigBytes;
				a = a.sigBytes;
				this.clamp();
				if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
				else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
				else c.push.apply(c, e);
				this.sigBytes += a;
				return this
			},
			clamp: function() {
				var a = this.words,
					c = this.sigBytes;
				a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
				a.length = u.ceil(c / 4)
			},
			clone: function() {
				var a = t.clone.call(this);
				a.words = this.words.slice(0);
				return a
			},
			random: function(a) {
				for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
				return new r.init(c, a)
			}
		}),
		w = d.enc = {},
		v = w.Hex = {
			stringify: function(a) {
				var c = a.words;
				a = a.sigBytes;
				for (var e = [], j = 0; j < a; j++) {
					var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
					e.push((k >>> 4).toString(16));
					e.push((k & 15).toString(16))
				}
				return e.join("")
			},
			parse: function(a) {
				for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
				return new r.init(e, c / 2)
			}
		},
		b = w.Latin1 = {
			stringify: function(a) {
				var c = a.words;
				a = a.sigBytes;
				for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
				return e.join("")
			},
			parse: function(a) {
				for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
				return new r.init(e, c)
			}
		},
		x = w.Utf8 = {
			stringify: function(a) {
				try {
					return decodeURIComponent(escape(b.stringify(a)))
				} catch (c) {
					throw Error("Malformed UTF-8 data")
				}
			},
			parse: function(a) {
				return b.parse(unescape(encodeURIComponent(a)))
			}
		},
		q = l.BufferedBlockAlgorithm = t.extend({
			reset: function() {
				this.j4n = new r.init;
				this.bJa0x = 0
			},
			Sq0x: function(a) {
				"string" == typeof a && (a = x.parse(a));
				this.j4n.concat(a);
				this.bJa0x += a.sigBytes
			},
			At3x: function(a) {
				var c = this.j4n,
					e = c.words,
					j = c.sigBytes,
					k = this.blockSize,
					b = j / (4 * k),
					b = a ? u.ceil(b) : u.max((b | 0) - this.bJb0x, 0);
				a = b * k;
				j = u.min(4 * a, j);
				if (a) {
					for (var q = 0; q < a; q += k) this.bIZ0x(e, q);
					q = e.splice(0, a);
					c.sigBytes -= j
				}
				return new r.init(q, j)
			},
			clone: function() {
				var a = t.clone.call(this);
				a.j4n = this.j4n.clone();
				return a
			},
			bJb0x: 0
		});
	l.Hasher = q.extend({
		cfg: t.extend(),
		init: function(a) {
			this.cfg = this.cfg.extend(a);
			this.reset()
		},
		reset: function() {
			q.reset.call(this);
			this.brp6j()
		},
		update: function(a) {
			this.Sq0x(a);
			this.At3x();
			return this
		},
		finalize: function(a) {
			a && this.Sq0x(a);
			return this.Su0x()
		},
		blockSize: 16,
		brk6e: function(a) {
			return function(b, e) {
				return (new a.init(e)).finalize(b)
			}
		},
		cfJ7C: function(a) {
			return function(b, e) {
				return (new n.HMAC.init(a, e)).finalize(b)
			}
		}
	});
	var n = d.algo = {};
	return d
}(Math);
(function() {
	var u = CryptoJS,
		p = u.lib.WordArray;
	u.enc.Base64 = {
		stringify: function(d) {
			var l = d.words,
				p = d.sigBytes,
				t = this.bu5z;
			d.clamp();
			d = [];
			for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
			if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
			return d.join("")
		},
		parse: function(d) {
			var l = d.length,
				s = this.bu5z,
				t = s.charAt(64);
			t && (t = d.indexOf(t), -1 != t && (l = t));
			for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
				var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
					b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
				t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
				r++
			}
			return p.create(t, r)
		},
		bu5z: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
	}
})();
(function(u) {
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
		brp6j: function() {
			this.dH6B = new w.init([1732584193, 4023233417, 2562383102, 271733878])
		},
		bIZ0x: function(q, n) {
			for (var a = 0; 16 > a; a++) {
				var c = n + a,
					e = q[c];
				q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
			}
			var a = this.dH6B.words,
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
		},
		Su0x: function() {
			var b = this.j4n,
				n = b.words,
				a = 8 * this.bJa0x,
				c = 8 * b.sigBytes;
			n[c >>> 5] |= 128 << 24 - c % 32;
			var e = u.floor(a / 4294967296);
			n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
			n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
			b.sigBytes = 4 * (n.length + 1);
			this.At3x();
			b = this.dH6B;
			n = b.words;
			for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
			return b
		},
		clone: function() {
			var b = v.clone.call(this);
			b.dH6B = this.dH6B.clone();
			return b
		}
	});
	t.MD5 = v.brk6e(r);
	t.HmacMD5 = v.cfJ7C(r)
})(Math);
(function() {
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
			init: function(d) {
				this.cfg = this.cfg.extend(d)
			},
			compute: function(d, r) {
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
	u.EvpKDF = function(d, l, p) {
		return s.create(p).compute(d, l)
	}
})();
CryptoJS.lib.Cipher ||
function(u) {
	var p = CryptoJS,
		d = p.lib,
		l = d.Base,
		s = d.WordArray,
		t = d.BufferedBlockAlgorithm,
		r = p.enc.Base64,
		w = p.algo.EvpKDF,
		v = d.Cipher = t.extend({
			cfg: l.extend(),
			createEncryptor: function(e, a) {
				return this.create(this.brC6w, e, a)
			},
			createDecryptor: function(e, a) {
				return this.create(this.cfI7B, e, a)
			},
			init: function(e, a, b) {
				this.cfg = this.cfg.extend(b);
				this.bIY0x = e;
				this.J5O = a;
				this.reset()
			},
			reset: function() {
				t.reset.call(this);
				this.brp6j()
			},
			process: function(e) {
				this.Sq0x(e);
				return this.At3x()
			},
			finalize: function(e) {
				e && this.Sq0x(e);
				return this.Su0x()
			},
			keySize: 4,
			ivSize: 4,
			brC6w: 1,
			cfI7B: 2,
			brk6e: function(e) {
				return {
					encrypt: function(b, k, d) {
						return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
					},
					decrypt: function(b, k, d) {
						return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
					}
				}
			}
		});
	d.StreamCipher = v.extend({
		Su0x: function() {
			return this.At3x(!0)
		},
		blockSize: 1
	});
	var b = p.mode = {},
		x = function(e, a, b) {
			var c = this.bIW0x;
			c ? this.bIW0x = u : c = this.bIV0x;
			for (var d = 0; d < b; d++) e[a + d] ^= c[d]
		},
		q = (d.BlockCipherMode = l.extend({
			createEncryptor: function(e, a) {
				return this.Encryptor.create(e, a)
			},
			createDecryptor: function(e, a) {
				return this.Decryptor.create(e, a)
			},
			init: function(e, a) {
				this.bIR0x = e;
				this.bIW0x = a
			}
		})).extend();
	q.Encryptor = q.extend({
		processBlock: function(e, a) {
			var b = this.bIR0x,
				c = b.blockSize;
			x.call(this, e, a, c);
			b.encryptBlock(e, a);
			this.bIV0x = e.slice(a, a + c)
		}
	});
	q.Decryptor = q.extend({
		processBlock: function(e, a) {
			var b = this.bIR0x,
				c = b.blockSize,
				d = e.slice(a, a + c);
			b.decryptBlock(e, a);
			x.call(this, e, a, c);
			this.bIV0x = d
		}
	});
	b = b.CBC = q;
	q = (p.pad = {}).Pkcs7 = {
		pad: function(a, b) {
			for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
			c = s.create(l, c);
			a.concat(c)
		},
		unpad: function(a) {
			a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
		}
	};
	d.BlockCipher = v.extend({
		cfg: v.cfg.extend({
			mode: b,
			padding: q
		}),
		reset: function() {
			v.reset.call(this);
			var a = this.cfg,
				b = a.iv,
				a = a.mode;
			if (this.bIY0x == this.brC6w) var c = a.createEncryptor;
			else c = a.createDecryptor, this.bJb0x = 1;
			this.eE7x = c.call(a, this, b && b.words)
		},
		bIZ0x: function(a, b) {
			this.eE7x.processBlock(a, b)
		},
		Su0x: function() {
			var a = this.cfg.padding;
			if (this.bIY0x == this.brC6w) {
				a.pad(this.j4n, this.blockSize);
				var b = this.At3x(!0)
			} else b = this.At3x(!0), a.unpad(b);
			return b
		},
		blockSize: 4
	});
	var n = d.CipherParams = l.extend({
		init: function(a) {
			this.mixIn(a)
		},
		toString: function(a) {
			return (a || this.formatter).stringify(this)
		}
	}),
		b = (p.format = {}).OpenSSL = {
			stringify: function(a) {
				var b = a.ciphertext;
				a = a.salt;
				return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
			},
			parse: function(a) {
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
			encrypt: function(a, b, c, d) {
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
			},
			decrypt: function(a, b, c, d) {
				d = this.cfg.extend(d);
				b = this.Zo2x(b, d.format);
				return a.createDecryptor(c, d).finalize(b.ciphertext)
			},
			Zo2x: function(a, b) {
				return "string" == typeof a ? b.parse(a, this) : a
			}
		}),
		p = (p.kdf = {}).OpenSSL = {
			execute: function(a, b, c, d) {
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
			encrypt: function(b, c, d, l) {
				l = this.cfg.extend(l);
				d = l.kdf.execute(d, b.keySize, b.ivSize);
				l.iv = d.iv;
				b = a.encrypt.call(this, b, c, d.key, l);
				b.mixIn(d);
				return b
			},
			decrypt: function(b, c, d, l) {
				l = this.cfg.extend(l);
				c = this.Zo2x(c, l.format);
				d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
				l.iv = d.iv;
				return a.decrypt.call(this, b, c, d.key, l)
			}
		})
}();
(function() {
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
			brp6j: function() {
				for (var a = this.J5O, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cfm7f = d + 6) + 1), e = this.cfk7d = [], j = 0; j < a; j++) if (j < d) e[j] = c[j];
				else {
					var k = e[j - 1];
					j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
					e[j] = e[j - d] ^ k
				}
				c = this.cff7Y = [];
				for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
			},
			encryptBlock: function(a, b) {
				this.bIQ0x(a, b, this.cfk7d, t, r, w, v, l)
			},
			decryptBlock: function(a, c) {
				var d = a[c + 1];
				a[c + 1] = a[c + 3];
				a[c + 3] = d;
				this.bIQ0x(a, c, this.cff7Y, b, x, q, n, s);
				d = a[c + 1];
				a[c + 1] = a[c + 3];
				a[c + 3] = d
			},
			bIQ0x: function(a, b, c, d, e, j, l, f) {
				for (var m = this.cfm7f, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
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
			},
			keySize: 8
		});
	u.AES = p.brk6e(d)
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
	for (e = 0; e < c.length; ++e) for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
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
	for (var c = a.digits.length - 1; c >= 0; --c) if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
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
!
function() {
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
(function() {
	var c4g = NEJ.P,
		dN7G = c4g("nej.g"),
		v5A = c4g("nej.j"),
		k4o = c4g("nej.u"),
		Pk8c = c4g("nm.x.ek");
	Pk8c.emj = {
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
	Pk8c.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function() {
	var c4g = NEJ.P,
		dN7G = c4g("nej.g"),
		v5A = c4g("nej.j"),
		k4o = c4g("nej.u"),
		Pk8c = c4g("nm.x.ek"),
		l4p = c4g("nm.x");
	if (v5A.bq5v.redefine) return;
	window.GEnc = true;
	var baZ2x = function(cfe7X) {
			var m4q = [];
			k4o.bc5h(cfe7X, function(cfd7W) {
				m4q.push(Pk8c.emj[cfd7W])
			});
			return m4q.join("")
		};
	var cfa7T = v5A.bq5v;
	v5A.bq5v = function (V5a, e4i) {
	    console.log(V5a);
        console.log(e4i);
		var j4n = {},
			e4i = NEJ.X({}, e4i),
			lv9m = V5a.indexOf("?");
		if (window.GEnc && /(^|\.com)\/api/.test(V5a) && !(e4i.headers && e4i.headers[dN7G.vQ2x] == dN7G.CO4S) && !e4i.noEnc) {
			if (lv9m != -1) {
				j4n = k4o.hf8X(V5a.substring(lv9m + 1));
				V5a = V5a.substring(0, lv9m)
			}
			if (e4i.query) {
				j4n = NEJ.X(j4n, k4o.fn7g(e4i.query) ? k4o.hf8X(e4i.query) : e4i.query)
			}
			if (e4i.data) {
				j4n = NEJ.X(j4n, k4o.fn7g(e4i.data) ? k4o.hf8X(e4i.data) : e4i.data)
			}
			j4n["csrf_token"] = v5A.gI7B("__csrf");
			V5a = V5a.replace("api", "weapi");
			e4i.method = "post";
			delete e4i.query;
			var bIJ0x = window.asrsea(JSON.stringify(j4n), baZ2x(["流泪", "强"]), baZ2x(Pk8c.md), baZ2x(["爱心", "女孩", "惊恐", "大笑"]));
			e4i.data = k4o.cY6S({
				params: bIJ0x.encText,
				encSecKey: bIJ0x.encSecKey
			})
		}
		cfa7T(V5a, e4i)
	};
	v5A.bq5v.redefine = true
})();
(function() {
	window.setTimeout(function() {
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
(function() {})();
(function() {})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		db6V = c4g("nej.p"),
		k4o = c4g("nej.u"),
		h4l = c4g("nej.v"),
		v5A = c4g("nej.j"),
		dj6d = c4g("nm.u"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		bbo2x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
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
		ceW7P = function() {
			if (h4l && h4l.w5B) {
				h4l.dispatchEventalias = h4l.w5B
			}
		};
	ceW7P();
	l4p.bbq2x = function(bI5N) {
		if (!bI5N || bI5N.copyrightId === undefined || !! bI5N.program) return false;
		if (window.GAbroad) {
			bI5N.fee = 0;
			return true
		}
		if (bI5N.status < 0) return true;
		var Pg8Y;
		if (typeof GCopyrights !== "undefined") Pg8Y = GCopyrights;
		try {
			if (!Pg8Y && !! top.GCopyrights) Pg8Y = top.GCopyrights
		} catch (e) {}
		if (Pg8Y) {
			var r4v = k4o.cT6N(Pg8Y, bI5N.copyrightId);
			if (r4v >= 0) return true
		}
		return false
	};
	l4p.bbt2x = function() {
		var Ao3x = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
			uM2x = {
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
			ceU7N = {
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
		var ceS7L = function(J5O, j4n, Pf8X) {
				switch (J5O) {
				case "event":
					j4n = j4n.split("|");
					return "/event?id=" + j4n[0] + "&uid=" + j4n[1];
				case "searchsong":
				case "searchlyric":
					var t4x = J5O == "searchsong" ? 1 : 1006;
					return "/search/m/?s=" + encodeURIComponent(j4n) + "&type=" + t4x;
				case "toplist":
					return "/discover/toplist?id=" + j4n + "&_hash=songlist-" + Pf8X;
				case "day":
					return "/discover/recommend/taste" + "?_hash=songlist-" + Pf8X;;
				case "record":
					j4n = j4n.split("|");
					return "/user/songs/rank?id=" + j4n[0] + "&cat=" + j4n[1];
					break;
				default:
					return "/" + J5O + "?id=" + j4n + "&_hash=songlist-" + Pf8X
				}
			};
		return function(dI6C, Pf8X) {
			if (!dI6C) return null;
			var Jh6b = dI6C.fid || (dI6C.type != 18 ? dI6C.type : null),
				bbI2x = dI6C.fdata || dI6C.rid,
				bIC0x = dI6C.page || dI6C.fhref;
			var J5O = uM2x[Jh6b];
			if (!J5O) {
				var xq2x = (bIC0x || "").match(Ao3x);
				if (xq2x) J5O = xq2x[1]
			}
			if (!J5O) return null;
			return {
				title: ceU7N[J5O],
				link: !uM2x[Jh6b] ? bIC0x : ceS7L(J5O, bbI2x, Pf8X),
				fid: Jh6b,
				fdata: bbI2x
			}
		}
	}();
	l4p.bbM2x = function(kD9u) {
		var cX6R = kD9u;
		if (typeof GUser !== "undefined" && GUser.userId > 0) cX6R = GUser;
		return cX6R
	};
	l4p.hd8V = function() {
		if (typeof GUser !== "undefined" && GUser.userId > 0) {
			return true
		} else {
			top.login();
			return false
		}
	};
	l4p.Iv6p = function() {
		var Ao3x = /#(.*?)$/;
		return function(gl7e) {
			var iG8y = gl7e === false ? location : top.location;
			return Ao3x.test(iG8y.href) ? RegExp.$1 : ""
		}
	}();
	l4p.Ai3x = function() {
		var Ah3x = a3x.cQ6K("audio"),
			cev7o = Ah3x.canPlayType && Ah3x.canPlayType("audio/mpeg");
		if (cev7o) return 2;
		var cer6l = l4p.bci3x().supported;
		if (cer6l) return 1;
		return 0
	};
	l4p.bci3x = function() {
		var fJ7C, bcj3x = !1,
			bcp3x = "";
		if (db6V.dd6X.browser == "ie") {
			try {
				fJ7C = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
			} catch (e) {
				fJ7C = null
			}
			if (fJ7C) {
				bcj3x = !0;
				bcp3x = fJ7C.GetVariable("$version")
			}
		} else {
			if (navigator.plugins && navigator.plugins.length > 0) {
				fJ7C = navigator.plugins["Shockwave Flash"];
				if (fJ7C) {
					bcj3x = !0;
					bcp3x = fJ7C.description
				}
			}
		}
		return {
			supported: bcj3x,
			version: bcp3x
		}
	};
	l4p.ql0x = function() {
		return "网易云音乐"
	};
	l4p.ceq6k = function() {
		return j4n
	};
	l4p.bIy0x = function(cL6F) {
		var C5H = j4n[cL6F];
		return C5H == null ? "" : bbo2x.replace("{ID}", C5H)
	};
	l4p.wo2x = function(bl5q, dE6y, Iu6o) {
		if (!bl5q) return "";
		if ( !! Iu6o) {
			bl5q = l4p.cen6h(bl5q)
		}
		return l4p.SK0x(l4p.cel6f(bl5q, dE6y))
	};
	l4p.bcH3x = function() {
		var OV8N = {
			AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
			LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
			ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
			ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
			LING: /\n/g,
			BLANK: /\s/g,
			MLINE: /([ \f\r\t\v]*\n){2,}/g
		},
			bcL3x = {
				LINK: '<a href="${url}" class="${klass}">${value}</a>',
				AT: '<a href="${url}" class="${klass}">@${value}</a>',
				ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
			},
			ceg6a = {
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
			ced6X = ["AT", "LINK", "ACT_NOLINK", "ACT"];
		var ceb6V = function(dl6f, bcT3x) {
				dl6f = Is6m(dl6f);
				if ( !! bcT3x) {
					dl6f = dl6f.replace(OV8N.MLINE, "\n\n").replace(OV8N.LING, "</br>")
				}
				dl6f = l4p.SK0x(dl6f);
				return dl6f
			};
		var Is6m = function(bl5q) {
				return k4o.DW4a(ceg6a, bl5q)
			};
		return function(dl6f, e4i, ed7W) {
			e4i = e4i || {};
			ed7W = ed7W || {};
			ed7W.actHash = {};
			var cea6U = !! e4i.parseLink,
				cdX6R = !! e4i.parseAct,
				cdW6Q = e4i.linkTpl || bcL3x.LINK,
				cdU6O = e4i.atTpl || bcL3x.AT,
				cdT6N = e4i.actTpl || bcL3x.ACT,
				bcT3x = !! e4i.keepSpace,
				bdf3x = e4i.linkKlass || "s-fc7";
			cuU1x = e4i.actBiJson || "";
			if (!dl6f) return "";
			dl6f = dl6f.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
			var kO9F = ced6X[cea6U + 2 * cdX6R],
				cN6H = OV8N[kO9F],
				bs5x = null,
				kX9O = null,
				gx7q = 0,
				cuV1x = "",
				cuW1x = "";
			var Ad3x = [];
			cN6H.lastIndex = 0;
			while (bs5x = cN6H.exec(dl6f)) {
				var ft7m = {
					html: "",
					before: bs5x.index - 1,
					after: bs5x.index + bs5x[0].length
				};
				if (bs5x[1]) {
					var kX9O = bs5x[2].replace(/[^\x00-\xff]/g, "**");
					if (kX9O.length < 4 || kX9O.length > 32) {} else {
						var OM8E = a3x.eh7a(cdU6O);
						ft7m.html = a3x.bU5Z(OM8E, {
							value: Is6m(bs5x[2]),
							url: encodeURI("/user/home?nickname=" + bs5x[2]),
							klass: bdf3x
						});
						Ad3x.push(ft7m)
					}
				} else if (bs5x.length > 8 && bs5x[4]) {
					var OM8E = a3x.eh7a(cdW6Q);
					ft7m.html = a3x.bU5Z(OM8E, {
						value: Is6m(bs5x[4]),
						url: encodeURI(bs5x[4]),
						klass: bdf3x
					});
					Ad3x.push(ft7m)
				} else {
					var bIq0x = kO9F == "ACT_NOLINK" ? 4 : 9;
					var OM8E = a3x.eh7a(cdT6N);
					ft7m.html = a3x.bU5Z(OM8E, {
						value: Is6m(bs5x[bIq0x]),
						klass: bdf3x
					});
					Ad3x.push(ft7m);
					ed7W.actHash[bs5x[bIq0x].slice(1, -1)] = true
				}
			}
			var cdJ6D = Ad3x.length,
				kD9u = {
					before: dl6f.length - 1,
					after: 0
				},
				bdF3x = "";
			for (var i = 0; i <= cdJ6D; i++) {
				var iq8i, gB7u;
				iq8i = (Ad3x[i - 1] || kD9u).after;
				gB7u = (Ad3x[i] || kD9u).before;
				if (gB7u >= iq8i && iq8i >= 0 && gB7u <= dl6f.length - 1) {
					bdF3x += ceb6V(dl6f.substring(iq8i, gB7u + 1), bcT3x)
				}
				if (Ad3x[i]) {
					bdF3x += Ad3x[i].html
				}
			}
			return bdF3x
		}
	}();
	l4p.cen6h = function() {
		var cN6H = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
		return function(bl5q) {
			return (bl5q || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cN6H, function($0, $1) {
				return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
			})
		}
	}();
	l4p.cel6f = function() {
		var cN6H = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
		var eH7A = function(kX9O, dE6y) {
				return '<a href="/user/home?nickname=' + encodeURIComponent(kX9O) + '" class="' + (dE6y || "") + '">@' + kX9O + "</a>"
			};
		return function(bl5q, dE6y) {
			return (bl5q || "").replace(cN6H, function($0, $1) {
				return eH7A($1, dE6y)
			})
		}
	}();
	l4p.SK0x = function() {
		var cN6H = /\[(.*?)\]/g;
		return function(bl5q) {
			return (bl5q || "").replace(cN6H, function($1, $2) {
				var V5a = l4p.bIy0x($2);
				return !V5a ? $1 : '<img src="' + V5a + '"/>'
			})
		}
	}();
	l4p.yA3x = function(E5J, dE6y) {
		a3x.bA5F(E5J, dE6y) ? a3x.x5C(E5J, dE6y) : a3x.z5E(E5J, dE6y)
	};
	l4p.Ik5p = function(cF6z, jN8F) {
		cF6z = a3x.y5D(cF6z);
		jN8F = a3x.y5D(jN8F);
		if (!cF6z || !jN8F) return !1;
		for (jN8F = jN8F.parentNode; !! jN8F && jN8F != cF6z; jN8F = jN8F.parentNode);
		return jN8F == cF6z
	};
	l4p.kp9g = function() {
		var bIp0x = function(gk7d) {
				return (gk7d < 10 ? "0" : "") + gk7d
			};
		return function(jM8E) {
			jM8E = parseInt(jM8E) || 0;
			if (!jM8E) return "00:00";
			var Ov8n = Math.floor(jM8E % 60),
				cdF6z = Math.floor(jM8E / 60);
			return bIp0x(cdF6z) + ":" + bIp0x(Ov8n)
		}
	}();
	l4p.xb2x = function(fk7d, vb2x) {
		if (!fk7d || fk7d.length == 0) return "";
		vb2x = vb2x || "/";
		var bs5x = [];
		for (var i = fk7d.length - 1; i >= 0; i--) {
			bs5x.unshift(fk7d[i].name)
		}
		return bs5x.join(vb2x)
	};
	l4p.rz1x = function() {
		var Or8j = function(hj8b, dE6y, cF6z) {
				if (!hj8b || !hj8b.name) return "";
				if (!hj8b.id) return '<span class="' + dE6y + '">' + k4o.dS7L(hj8b.name) + "</span>";
				return "<a" + (cF6z ? ' target="_blank"' : "") + ' class="' + dE6y + '" href="/artist?id=' + hj8b.id + '" hidefocus="true">' + k4o.dS7L(hj8b.name) + "</a>"
			};
		return function(fk7d, T5Y, vb2x, cF6z, bIl0x) {
			if (!fk7d || !fk7d.length) return "";
			vb2x = vb2x || "/";
			T5Y = T5Y || "";
			Ii5n = "";
			var eB7u = [];
			for (var i = 0, i4m = [], rx1x = [], ff7Y; i < fk7d.length; ++i) {
				eB7u.push(fk7d[i].name);
				if (!fk7d[i] || fk7d[i].id <= 0) {
					rx1x.push(fk7d[i]);
					continue
				}
				if (k4o.fZ7S(T5Y)) {
					ff7Y = T5Y(fk7d[i])
				} else {
					ff7Y = Or8j(fk7d[i], T5Y, cF6z)
				}
				if (ff7Y && bIl0x && fk7d[i].tns && fk7d[i].tns.length > 0) {
					Ii5n = k4o.dS7L(fk7d[i].tns[0]);
					ff7Y += '<span class="s-fc8" title="' + Ii5n + '"> - (' + Ii5n + ")</span>"
				} !! ff7Y && i4m.push(ff7Y)
			}
			for (var i = 0, ff7Y; i < rx1x.length; ++i) {
				if (k4o.fZ7S(T5Y)) {
					ff7Y = T5Y(rx1x[i])
				} else {
					ff7Y = Or8j(rx1x[i], T5Y, cF6z)
				}
				if (ff7Y && bIl0x && rx1x[i].tns && rx1x[i].tns.length > 0) {
					Ii5n = k4o.dS7L(rx1x[i].tns[0]);
					ff7Y += '<span class="s-fc8" title="' + Ii5n + '"> - (' + Ii5n + ")</span>"
				} !! ff7Y && i4m.push(ff7Y)
			}
			return '<span title="' + eB7u.join(vb2x) + '">' + i4m.join(vb2x) + "</span>"
		}
	}();
	l4p.vG2x = function(eX7Q, oE0x) {
		oE0x = oE0x || "86";
		return !!eX7Q && (oE0x == "86" ? /^\d{11}$/ : /^\d+$/).test(eX7Q)
	};
	l4p.cuY1x = function(eX7Q) {
		if (!l4p.vG2x(eX7Q)) return eX7Q;
		return eX7Q.substring(0, 3) + "****" + eX7Q.substr(7)
	};
	l4p.iX8P = function() {
		var cN6H = /^\s+$/g;
		return function(iw8o) {
			return !iw8o || cN6H.test(iw8o)
		}
	}();
	l4p.Ol8d = function() {
		var beH3x = /[^\x00-\xfff]/g;
		return function(iw8o) {
			var cdx6r = iw8o.match(beH3x) || [],
				du6o = cdx6r.length;
			return iw8o.length + du6o
		}
	}();
	l4p.DL4P = function() {
		var beH3x = /[^\x00-\xfff]/;
		return function(iw8o, gm7f) {
			for (var i = 0, len = iw8o.length; i < len && gm7f > 0; i++) {
				if (beH3x.test(iw8o.charAt(i))) {
					gm7f -= 2;
					if (gm7f < 0) {
						break
					}
				} else {
					gm7f -= 1
				}
			}
			return iw8o.substring(0, i)
		}
	}();
	l4p.zX3x = function(iw8o, gm7f, OT8L) {
		gm7f = gm7f || 10;
		OT8L = OT8L || nej.p.dd6X.engine == "trident" && parseInt(nej.p.dd6X.release) < 5;
		if (OT8L && l4p.Ol8d(iw8o) > gm7f) {
			return l4p.DL4P(iw8o, gm7f) + "..."
		} else {
			return iw8o
		}
	};
	l4p.bIk0x = function(f4j) {
		return f4j === document.activeElement && (!document.hasFocus || document.hasFocus()) && !! (f4j.type || f4j.href || ~f4j.tabIndex)
	};
	l4p.cdv6p = function(d4h, cF6z) {
		if (!d4h || !cF6z) return !0;
		var f4j, t4x = d4h.type.toLowerCase();
		if (t4x == "mouseout") {
			f4j = d4h.relatedTarget || d4h.toElement
		} else if (t4x == "mouseover") {
			f4j = d4h.relatedTarget || d4h.fromElement
		}
		return !f4j || f4j !== cF6z && !l4p.Ik5p(cF6z, f4j)
	};
	l4p.sg1x = function() {
		P5U = {};
		return function(f4j, dD6x) {
			var C5H = a3x.kJ9A(f4j),
				J5O = "hover-" + C5H;
			if (!dD6x || !C5H || !! P5U[J5O]) return;
			P5U[J5O] = !0;
			h4l.s4w(C5H, "mouseover", function() {
				var beY3x = a3x.I5N(f4j, "hshow") || [];
				var beZ3x = a3x.I5N(f4j, "icn-dislike") || [];
				a3x.z5E(C5H, "z-hover");
				a3x.Y5d(beY3x[0], "display", "block");
				a3x.Y5d(beZ3x[0], "display", "block")
			});
			h4l.s4w(C5H, "mouseout", function() {
				var beY3x = a3x.I5N(f4j, "hshow") || [];
				var beZ3x = a3x.I5N(f4j, "icn-dislike") || [];
				a3x.x5C(C5H, "z-hover");
				a3x.Y5d(beY3x[0], "display", "none");
				a3x.Y5d(beZ3x[0], "display", "none")
			})
		}
	}();
	l4p.bIj0x = function() {
		var bu5z = {
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
		return function(iw8o) {
			return k4o.DW4a(bu5z, iw8o)
		}
	}();
	l4p.vY2x = function(by5D) {
		if (k4o.Gf5k(by5D)) by5D = by5D.getTime();
		var fN7G = new Date,
			ni9Z = fN7G.getTime() - by5D;
		if (ni9Z <= 6e4) return "刚刚";
		var qD0x = fN7G.getHours() * 36e5 + fN7G.getMinutes() * 6e4 + fN7G.getSeconds() * 1e3;
		if (ni9Z <= qD0x) {
			if (ni9Z < 36e5) {
				var Oj8b = Math.floor(ni9Z / 6e4);
				return Oj8b + "分钟前"
			}
			return k4o.iI8A(by5D, "HH:mm")
		} else {
			if (ni9Z < qD0x + 864e5) {
				return "昨天" + k4o.iI8A(by5D, "HH:mm")
			} else {
				var gi7b = fN7G.getFullYear(),
					bfD3x = new Date(gi7b, 0, 1);
				var qD0x = fN7G.getTime() - bfD3x.getTime();
				if (ni9Z < qD0x) {
					return k4o.iI8A(by5D, "M月d日 HH:mm")
				}
				return k4o.iI8A(by5D, "yyyy年M月d日")
			}
		}
	};
	l4p.cdr6l = function(by5D) {
		if (k4o.Gf5k(by5D)) by5D = by5D.getTime();
		var fN7G = new Date,
			ni9Z = fN7G.getTime() - by5D;
		var qD0x = fN7G.getHours() * 36e5 + fN7G.getMinutes() * 6e4 + fN7G.getSeconds() * 1e3;
		if (ni9Z <= qD0x) {
			return "今天" + k4o.iI8A(by5D, "HH:mm")
		} else {
			if (ni9Z < qD0x + 864e5) {
				return "昨天" + k4o.iI8A(by5D, "HH:mm")
			} else {
				return k4o.iI8A(by5D, "yy-MM-dd HH:mm")
			}
		}
	};
	l4p.cdp6j = function(by5D) {
		if (k4o.Gf5k(by5D)) by5D = by5D.getTime();
		var fN7G = new Date,
			ni9Z = fN7G.getTime() - by5D;
		if (ni9Z <= 6e4) return "刚刚";
		var qD0x = fN7G.getHours() * 36e5 + fN7G.getMinutes() * 6e4 + fN7G.getSeconds() * 1e3;
		if (ni9Z <= qD0x) {
			if (ni9Z < 36e5) {
				var Oj8b = Math.floor(ni9Z / 6e4);
				return Oj8b + "分钟前"
			}
			return k4o.iI8A(by5D, "HH:mm")
		} else {
			if (ni9Z < qD0x + 864e5) {
				return "昨天" + k4o.iI8A(by5D, "HH:mm")
			} else if (ni9Z < qD0x + 864e5 * 6) {
				var gi7b = fN7G.getFullYear(),
					bfD3x = new Date(gi7b, 0, 1);
				var qD0x = fN7G.getTime() - bfD3x.getTime();
				if (ni9Z < qD0x) {
					return k4o.iI8A(by5D, "M月d日 HH:mm")
				}
				return k4o.iI8A(by5D, "yyyy年M月d日")
			} else {
				return "最近"
			}
		}
	};
	l4p.Tj0x = function() {
		var cN6H = /\{(.*?)\}/gi;
		return function(pR0x, j4n) {
			return (pR0x || "").replace(cN6H, function($1, $2) {
				var A5F = j4n[$2];
				return A5F == null ? $1 : A5F
			})
		}
	}();
	l4p.eQ7J = function() {
		var bf5k = Array.prototype.slice.call(arguments, 0),
			pR0x = bf5k.shift();
		if (pR0x) {
			return pR0x.replace(/{(\d+)}/g, function($1, $2) {
				return $2 < bf5k.length ? bf5k[$2] : $1
			})
		}
		return ""
	};
	l4p.Ie5j = function(i4m, dE6y, kP9G) {
		return "";
		kP9G = kP9G || " - ";
		if (i4m && i4m.length) {
			return kP9G + ( !! dE6y ? '<span class="' + dE6y + '">' + i4m[0] + "</span>" : i4m[0])
		}
		return ""
	};
	l4p.bIf0x = function() {
		if (window.getSelection) {
			var qG0x = window.getSelection();
			if (qG0x && qG0x.focusNode && qG0x.focusNode.tagName) {
				var zW3x = a3x.cP6J(qG0x.focusNode);
				for (var i = 0, xc2x; i < zW3x.length; ++i) {
					xc2x = zW3x[i].tagName;
					if (!xc2x) continue;
					xc2x = xc2x.toLowerCase();
					if (xc2x == "textarea" || xc2x == "input") return !0
				}
			}
		} else if (document.selection) {
			var cK6E = document.selection.createRange();
			if (cK6E) {
				var f4j = cK6E.parentElement();
				if (f4j && f4j.tagName) {
					var xc2x = f4j.tagName.toLowerCase();
					if (xc2x == "textarea" || xc2x == "input") return !0
				}
			}
		}
		return !1
	};
	l4p.zV3x = function(fr7k) {
		if (/^[A-Z]\:\\/i.test(fr7k)) {
			fr7k = fr7k.split("\\")
		} else {
			fr7k = fr7k.split("/")
		}
		fr7k = fr7k[fr7k.length - 1];
		return fr7k
	};
	l4p.cdm6g = function() {
		var Cv4z = [13, 17, 34, 19, 18, 21];
		return function(C5H) {
			var bs5x = (C5H || "").split("_");
			return {
				type: Cv4z[bs5x[2]] || -1,
				id: bs5x[3] || ""
			}
		}
	}();
	l4p.bIe0x = function(fJ7C) {
		if (!fJ7C) {
			return true
		}
		for (var k in fJ7C) {
			return false
		}
		return true
	};
	l4p.bgn4r = function(cX6R) {
		if (!cX6R) {
			return ""
		}
		if (4 == cX6R.userType) {
			return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
		} else if (cX6R.authStatus == 1) {
			return '<sup class="u-icn u-icn-1"></sup>'
		} else if (cX6R.expertTags && cX6R.expertTags.length || !l4p.bIe0x(cX6R.experts)) {
			return '<sup class="u-icn u-icn-84"></sup>'
		}
	};
	l4p.Oc8U = function(hO8G) {
		if (!hO8G) return "";
		var du6o = hO8G.length,
			hr8j = [];
		hr8j[0] = du6o / 3 | 0;
		hr8j[1] = hr8j[0] + ((du6o - hr8j[0]) / 2 | 0);
		return hO8G.substring(0, hr8j[0]) + hO8G.substring(hr8j[0], hr8j[1]).replace(/\d/g, "*") + hO8G.substring(hr8j[1], du6o)
	};
	l4p.cva1x = function(r4v, cq5v) {
		return (r4v % cq5v + cq5v) % cq5v
	};
	l4p.bId0x = function() {
		var Cv4z = {
			0: "playlist",
			1: "program",
			2: "event",
			3: "album",
			4: "song",
			5: "mv",
			6: "topic",
			62: "video"
		};
		return function(C5H) {
			var bs5x = (C5H || "").split("_"),
				m4q = {
					type: Cv4z[bs5x[2]] || -1,
					id: bs5x[3] || ""
				};
			if (m4q.type == "event") {
				m4q.uid = bs5x[4] || "";
				return "/" + m4q.type + "?id=" + m4q.id + "&uid=" + m4q.uid
			}
			return "/" + m4q.type + "?id=" + m4q.id
		}
	}();
	l4p.bIc0x = function() {
		var Cv4z = {
			0: "歌单",
			1: "电台节目",
			2: "动态",
			3: "专辑",
			4: "单曲",
			5: "MV",
			6: "专栏文章",
			62: "视频"
		};
		return function(C5H) {
			var bs5x = (C5H || "").split("_");
			return Cv4z[bs5x[2]] || "资源"
		}
	}();
	l4p.cdh6b = function(bw5B) {
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
	l4p.bIb0x = function(ss1x, NU8M) {
		var Tr0x = 0,
			dZ7S = new Array;
		k4o.bc5h(ss1x, function(V5a, r4v) {
			var df6Z = a3x.cQ6K("img");
			df6Z.src = V5a;
			h4l.s4w(df6Z, "load", function(r4v, d4h) {
				dZ7S[r4v] = 1;
				Tr0x++;
				if (Tr0x == ss1x.length) NU8M(ss1x, dZ7S)
			}.g4k(this, r4v));
			h4l.s4w(df6Z, "error", function(d4h, r4v) {
				dZ7S[r4v] = 0;
				Tr0x++;
				if (Tr0x == ss1x.length) NU8M(ss1x, dZ7S)
			}.g4k(this, r4v))
		})
	};
	l4p.Ts0x = function(i4m, dC6w) {
		var m4q = [];
		k4o.bc5h(i4m, function(q4u, r4v, il8d) {
			m4q.push(dC6w(q4u, r4v, il8d))
		});
		return m4q
	};
	l4p.UB0x = function(i4m, dC6w, il8d) {
		var m4q = [];
		k4o.bc5h(i4m, function(q4u, r4v) {
			if (dC6w.call(il8d, q4u, r4v, i4m)) {
				m4q.push(q4u)
			}
		});
		return m4q
	};
	l4p.cde6Y = function(bl5q) {
		return k4o.dS7L((bl5q || "").replace(/\s{2,}/g, " ").trim())
	};
	l4p.bhe4i = function(be5j) {
		if (be5j.transNames && be5j.transNames.length) {
			return be5j.transNames[0]
		} else if (be5j.alias && be5j.alias.length) {
			return be5j.alias[0]
		}
	};
	l4p.bhh4l = function(PY9P) {
		if (PY9P) {
			return PY9P.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
		}
	};
	l4p.bhj4n = function(f4j) {
		var f4j = a3x.y5D(f4j),
			cL6F = f4j && f4j.getElementsByTagName("textarea")[0],
			J5O = a3x.u5z(f4j, "key"),
			bhk4o = a3x.u5z(f4j, "simple") == "1",
			bIa0x = p4t.vt2x.gc7V();
		if (!(f4j && cL6F && J5O)) return;
		if (bhk4o) {
			bIa0x.ri1x(J5O, l4p.Er4v(JSON.parse(cL6F.value)))
		} else {
			bIa0x.ri1x(J5O, JSON.parse(cL6F.value || cL6F.defaultValue))
		}
		f4j.innerHTML = "";
		return J5O
	};
	l4p.cdc6W = function(oj0x) {
		if (!oj0x.onbeforelistload) {
			oj0x.onbeforelistload = function(d4h) {
				d4h.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
			}
		}
		if (!oj0x.onemptylist) {
			oj0x.onemptylist = function(d4h) {
				d4h.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (oj0x.emptyMsg || "暂时还没有数据") + "</h3></div>"
			}
		}
		return oj0x
	};
	l4p.Er4v = function(hs8k) {
		if (k4o.en7g(hs8k)) {
			var ed7W = [];
			k4o.bc5h(hs8k, function(bhk4o) {
				ed7W.push(bHZ0x(bhk4o))
			});
			return ed7W
		} else {
			return bHZ0x(hs8k)
		}
		function bHZ0x(hs8k) {
			if (!hs8k) return null;
			var ed7W = {
				album: hs8k.al,
				alias: hs8k.alia || hs8k.ala || [],
				artists: hs8k.ar || [],
				commentThreadId: "R_SO_4_" + hs8k.id,
				copyrightId: hs8k.cp || 0,
				duration: hs8k.dt || 0,
				id: hs8k.id,
				mvid: hs8k.mv || 0,
				name: hs8k.name || "",
				cd: hs8k.cd,
				position: hs8k.no || 0,
				ringtone: hs8k.rt,
				rtUrl: hs8k.rtUrl,
				status: hs8k.st || 0,
				pstatus: hs8k.pst || 0,
				fee: hs8k.fee || 0,
				version: hs8k.v || 0,
				eq: hs8k.eq,
				songType: hs8k.t || 0,
				mst: hs8k.mst,
				score: hs8k.pop || 0,
				ftype: hs8k.ftype,
				rtUrls: hs8k.rtUrls,
				transNames: hs8k.tns,
				privilege: hs8k.privilege,
				lyrics: hs8k.lyrics
			};
			return ed7W
		}
	};
	l4p.cvc1x = function() {
		var f4j = a3x.nf9W('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
		document.body.appendChild(f4j);
		h4l.s4w(f4j, "click", function(d4h) {
			h4l.bh5m(d4h);
			a3x.cJ6D(f4j)
		})
	};
	l4p.kr9i = function(cw5B) {
		if (cw5B < 1e5) {
			return cw5B
		} else {
			return Math.floor(cw5B / 1e4) + "万"
		}
	};
	l4p.sB1x = function(cw5B, cL6F) {
		return "<i>" + (cw5B ? "(" + cw5B + ")" : cL6F) + "</i>"
	};
	l4p.bHX0x = function(t4x, hl8d) {
		var e4i = {};
		if (!k4o.ks9j(hl8d)) {
			return e4i
		}
		switch (parseInt(t4x)) {
		case 17:
			e4i.title = hl8d.name;
			e4i.author = (hl8d.radio || []).name;
			e4i.picUrl = hl8d.coverUrl;
			e4i.category = hl8d.radio.category;
			break;
		case 19:
			e4i.title = hl8d.name;
			e4i.author = l4p.xb2x(hl8d.artists);
			e4i.authors = l4p.xb2x(hl8d.artists, " / ");
			e4i.picUrl = hl8d.picUrl;
			break;
		case 13:
			e4i.title = hl8d.name;
			e4i.author = (hl8d.creator || []).nickname;
			e4i.picUrl = hl8d.coverImgUrl;
			break;
		case 18:
			e4i.title = hl8d.name;
			e4i.author = l4p.xb2x(hl8d.artists);
			e4i.picUrl = (hl8d.album || []).picUrl;
			break;
		case 20:
			e4i.title = hl8d.name;
			e4i.author = "";
			e4i.picUrl = hl8d.img1v1Url;
			break;
		case 21:
			e4i.title = hl8d.name;
			e4i.author = hl8d.artistName;
			e4i.authors = l4p.xb2x(hl8d.artists, " / ");
			e4i.picUrl = hl8d.newCover || hl8d.cover;
			break;
		case 70:
			e4i.title = hl8d.name;
			e4i.author = (hl8d.dj || []).nickname;
			e4i.picUrl = hl8d.picUrl;
			e4i.category = hl8d.category;
			break;
		default:
			break
		}
		return e4i
	};
	l4p.bHW0x = function() {
		return location.hostname.indexOf("igame.163.com") >= 0
	};
	l4p.ccX6R = function(eH7A, uO2x, e4i) {
		var bL5Q, bf5k, m4q;
		var jm8e = null;
		var NJ8B = 0;
		if (!e4i) e4i = {};
		var Ty0x = function() {
				NJ8B = e4i.leading === false ? 0 : +(new Date);
				jm8e = null;
				m4q = eH7A.apply(bL5Q, bf5k);
				if (!jm8e) bL5Q = bf5k = null
			};
		return function() {
			var fN7G = +(new Date);
			if (!NJ8B && e4i.leading === false) NJ8B = fN7G;
			var bhS4W = uO2x - (fN7G - NJ8B);
			bL5Q = this;
			bf5k = arguments;
			if (bhS4W <= 0 || bhS4W > uO2x) {
				if (jm8e) {
					clearTimeout(jm8e);
					jm8e = null
				}
				NJ8B = fN7G;
				m4q = eH7A.apply(bL5Q, bf5k);
				if (!jm8e) bL5Q = bf5k = null
			} else if (!jm8e && e4i.trailing !== false) {
				jm8e = setTimeout(Ty0x, bhS4W)
			}
			return m4q
		}
	};
	l4p.bHV0x = function(eH7A, uO2x, qO0x) {
		var jm8e, bf5k, bL5Q, NA8s, m4q;
		var Ty0x = function() {
				var gx7q = new Date - NA8s;
				if (gx7q < uO2x && gx7q >= 0) {
					jm8e = setTimeout(Ty0x, uO2x - gx7q)
				} else {
					jm8e = null;
					if (!qO0x) {
						m4q = eH7A.apply(bL5Q, bf5k);
						if (!jm8e) bL5Q = bf5k = null
					}
				}
			};
		return function() {
			bL5Q = this;
			bf5k = arguments;
			NA8s = new Date;
			var bib4f = qO0x && !jm8e;
			if (!jm8e) jm8e = setTimeout(Ty0x, uO2x);
			if (bib4f) {
				m4q = eH7A.apply(bL5Q, bf5k);
				bL5Q = bf5k = null
			}
			return m4q
		}
	};
	l4p.Nz8r = function(f4j, hh8Z) {
		if (f4j) {
			var f4j = f4j.firstElementChild;
			if (f4j) {
				f4j.firstElementChild && (f4j = f4j.firstElementChild);
				f4j.setAttribute("xlink:href", "/style/pc/svg/" + hh8Z)
			}
		}
	};
	l4p.bHU0x = function(eB7u) {
		if (!eB7u || !eB7u.length) {
			return
		}
		eB7u = /^#(.+?)#$/.exec(eB7u)[1];
		eB7u = eB7u.replace(/\s/g, " ");
		v5A.bq5v("/api/act/detail", {
			type: "json",
			method: "post",
			data: k4o.cY6S({
				actname: eB7u
			}),
			onload: function(Q5V) {
				if (!Q5V || Q5V.code != 200 || !Q5V.act) {
					n4r.Z5e.N5S({
						type: 2,
						tip: "该话题暂未创建"
					})
				} else {
					location.dispatch2("/activity?id=" + Q5V.act.actId)
				}
			},
			onerror: function(bP5U) {
				n4r.Z5e.N5S({
					type: 2,
					tip: "操作失败，请稍后再试"
				})
			}
		})
	};
	l4p.bim4q = function(Nu7n, wl2x) {
		if (!Nu7n || !wl2x) return false;
		if (Nu7n == wl2x) return true;
		return l4p.bim4q(Nu7n, wl2x.parentNode)
	};
	a3x.fj7c = function(bB5G, kQ9H) {
		if (!bB5G) return null;
		if (!kQ9H) return bB5G.firstChild;
		return a3x.I5N(bB5G, kQ9H)[0]
	};
	l4p.ccL6F = function(iw8o) {
		return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(iw8o)
	};
	l4p.cve1x = function(sR1x) {
		if (!sR1x) {
			return "0b"
		}
		var ccC6w = ["Bytes", "KB", "MB", "GB"];
		var bd5i = Math.floor(Math.log(sR1x) / Math.log(1024));
		return (sR1x / Math.pow(1024, Math.floor(bd5i))).toFixed(bd5i == 1 ? 0 : 1) + ccC6w[bd5i]
	};
	l4p.bHJ0x = function(dl6f, fd7W, ccw6q) {
		if (!dl6f) return dl6f;
		var du6o = k4o.fe7X(dl6f);
		if (du6o <= fd7W) return dl6f;
		var biM4Q = du6o - dl6f.length,
			biN4R = dl6f.length - biM4Q;
		var fK7D = Math.ceil(fd7W / 2),
			cct6n = fd7W,
			bHF0x = 0;
		if (biM4Q < fK7D) fK7D = fd7W - biM4Q;
		if (biN4R < fd7W) fd7W = biN4R + Math.ceil((fd7W - biN4R) / 2);
		while (fK7D <= fd7W) {
			bHF0x = k4o.fe7X(dl6f.substr(0, fK7D));
			var biV4Z = cct6n - bHF0x;
			if (biV4Z == 0) break;
			if (biV4Z == 1) {
				var ccr6l = k4o.fe7X(dl6f.charAt(fK7D));
				if (ccr6l == 1) {
					fK7D++;
					break
				} else {
					break
				}
			}
			fK7D += Math.floor(biV4Z / 2)
		}
		return dl6f.substr(0, fK7D) + ( !! ccw6q ? "" : "...")
	}
})();
(function() {
	function ccn6h() {
		var zI3x = function(jl8d) {
				if (jl8d < -128) {
					return zI3x(128 - (-128 - jl8d))
				} else if (jl8d >= -128 && jl8d <= 127) {
					return jl8d
				} else if (jl8d > 127) {
					return zI3x(-129 + jl8d - 127)
				} else {
					throw new Error("1001")
				}
			};
		var ccm6g = function(jl8d, bi5n) {
				return zI3x(jl8d + bi5n)
			};
		var ccl6f = function(TH0x, bjm4q) {
				if (TH0x == null) {
					return null
				}
				if (bjm4q == null) {
					return TH0x
				}
				var oU0x = [];
				var cck6e = bjm4q.length;
				for (var i = 0, br5w = TH0x.length; i < br5w; i++) {
					oU0x[i] = ccm6g(TH0x[i], bjm4q[i % cck6e])
				}
				return oU0x
			};
		var ccj6d = function(TQ0x) {
				if (TQ0x == null) {
					return TQ0x
				}
				var oU0x = [];
				var cch6b = TQ0x.length;
				for (var i = 0, br5w = cch6b; i < br5w; i++) {
					oU0x[i] = zI3x(0 - TQ0x[i])
				}
				return oU0x
			};
		var cce6Y = function(bjH4L, MO7H) {
				bjH4L = zI3x(bjH4L);
				MO7H = zI3x(MO7H);
				return zI3x(bjH4L ^ MO7H)
			};
		var bHB0x = function(MM7F, bjM4Q) {
				if (MM7F == null || bjM4Q == null || MM7F.length != bjM4Q.length) {
					return MM7F
				}
				var oU0x = [];
				var ccc6W = MM7F.length;
				for (var i = 0, br5w = ccc6W; i < br5w; i++) {
					oU0x[i] = cce6Y(MM7F[i], bjM4Q[i])
				}
				return oU0x
			};
		var bHz0x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
		var cbZ6T = function(db6V) {
				var HC5H = [];
				HC5H.push(bHz0x[db6V >>> 4 & 15]);
				HC5H.push(bHz0x[db6V & 15]);
				return HC5H.join("")
			};
		var cbY6S = function(sR1x) {
				var br5w = sR1x.length;
				if (sR1x == null || br5w < 0) {
					return new String("")
				}
				var HC5H = [];
				for (var i = 0; i < br5w; i++) {
					HC5H.push(cbZ6T(sR1x[i]))
				}
				return HC5H.join("")
			};
		var bHy0x = function(Uv0x) {
				if (Uv0x == null || Uv0x.length == 0) {
					return Uv0x
				}
				var bkc5h = new String(Uv0x);
				var oU0x = [];
				var br5w = bkc5h.length / 2;
				var bi5n = 0;
				for (var i = 0; i < br5w; i++) {
					var nt0x = parseInt(bkc5h.charAt(bi5n++), 16) << 4;
					var nx0x = parseInt(bkc5h.charAt(bi5n++), 16);
					oU0x[i] = zI3x(nt0x + nx0x)
				}
				return oU0x
			};
		var cbR6L = function(cC6w) {
				if (cC6w == null || cC6w == undefined) {
					return cC6w
				}
				var Mw7p = encodeURIComponent(cC6w);
				var sR1x = [];
				var bHt0x = Mw7p.length;
				for (var i = 0; i < bHt0x; i++) {
					if (Mw7p.charAt(i) == "%") {
						if (i + 2 < bHt0x) {
							sR1x.push(bHy0x(Mw7p.charAt(++i) + "" + Mw7p.charAt(++i))[0])
						} else {
							throw new Error("1009")
						}
					} else {
						sR1x.push(Mw7p.charCodeAt(i))
					}
				}
				return sR1x
			};
		var cbI6C = function(uD2x) {
				var bd5i = 0;
				bd5i += (uD2x[0] & 255) << 24;
				bd5i += (uD2x[1] & 255) << 16;
				bd5i += (uD2x[2] & 255) << 8;
				bd5i += uD2x[3] & 255;
				return bd5i
			};
		var cvi1x = function(bd5i) {
				var uD2x = [];
				uD2x[0] = bd5i >>> 24 & 255;
				uD2x[1] = bd5i >>> 16 & 255;
				uD2x[2] = bd5i >>> 8 & 255;
				uD2x[3] = bd5i & 255;
				return uD2x
			};
		var cbx6r = function(dv6p, bkx5C, br5w) {
				var ed7W = [];
				if (dv6p == null || dv6p.length == 0) {
					return ed7W
				}
				if (dv6p.length < br5w) {
					throw new Error("1003")
				}
				for (var i = 0; i < br5w; i++) {
					ed7W[i] = dv6p[bkx5C + i]
				}
				return ed7W
			};
		var bky5D = function(dv6p, bkx5C, qU1x, cbw6q, br5w) {
				if (dv6p == null || dv6p.length == 0) {
					return qU1x
				}
				if (qU1x == null) {
					throw new Error("1004")
				}
				if (dv6p.length < br5w) {
					throw new Error("1003")
				}
				for (var i = 0; i < br5w; i++) {
					qU1x[cbw6q + i] = dv6p[bkx5C + i]
				}
				return qU1x
			};
		var cbt6n = function(br5w) {
				var bs5x = [];
				for (var i = 0; i < br5w; i++) {
					bs5x[i] = 0
				}
				return bs5x
			};
		var cbs6m = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
		var Ht5y = 64;
		var Ux0x = 64;
		var bHo0x = 4;
		var cbo6i = function(pO0x) {
				var bHl0x = [];
				if (pO0x == null || pO0x == undefined || pO0x.length == 0) {
					return cbt6n(Ux0x)
				}
				if (pO0x.length >= Ux0x) {
					return cbx6r(pO0x, 0, Ux0x)
				} else {
					for (var i = 0; i < Ux0x; i++) {
						bHl0x[i] = pO0x[i % pO0x.length]
					}
				}
				return bHl0x
			};
		var cbh6b = function(UG0x) {
				if (UG0x == null || UG0x.length % Ht5y != 0) {
					throw new Error("1005")
				}
				var blg5l = [];
				var bi5n = 0;
				var cbg6a = UG0x.length / Ht5y;
				for (var i = 0; i < cbg6a; i++) {
					blg5l[i] = [];
					for (var j = 0; j < Ht5y; j++) {
						blg5l[i][j] = UG0x[bi5n++]
					}
				}
				return blg5l
			};
		var cbc6W = function(bHg0x) {
				var nt0x = bHg0x >>> 4 & 15;
				var nx0x = bHg0x & 15;
				var bi5n = nt0x * 16 + nx0x;
				return cbs6m[bi5n]
			};
		var bHf0x = function(blq5v) {
				if (blq5v == null) {
					return null
				}
				var bHe0x = [];
				for (var i = 0, br5w = blq5v.length; i < br5w; i++) {
					bHe0x[i] = cbc6W(blq5v[i])
				}
				return bHe0x
			};
		var caO6I = function(Hl5q, pO0x) {
				if (Hl5q == null) {
					return null
				}
				if (Hl5q.length == 0) {
					return []
				}
				if (Hl5q.length % Ht5y != 0) {
					throw new Error("1005")
				}
				pO0x = cbo6i(pO0x);
				var bly5D = pO0x;
				var blB5G = cbh6b(Hl5q);
				var Mg7Z = [];
				var caG6A = blB5G.length;
				for (var i = 0; i < caG6A; i++) {
					var blE5J = bHf0x(blB5G[i]);
					blE5J = bHf0x(blE5J);
					var blG5L = bHB0x(blE5J, bly5D);
					var caC6w = ccl6f(blG5L, ccj6d(bly5D));
					blG5L = bHB0x(caC6w, pO0x);
					bky5D(blG5L, 0, Mg7Z, i * Ht5y, Ht5y);
					bly5D = blB5G[i]
				}
				var bGZ0x = [];
				bky5D(Mg7Z, Mg7Z.length - bHo0x, bGZ0x, 0, bHo0x);
				var br5w = cbI6C(bGZ0x);
				if (br5w > Mg7Z.length) {
					throw new Error("1006")
				}
				var oU0x = [];
				bky5D(Mg7Z, 0, oU0x, 0, br5w);
				return oU0x
			};
		var cax6r = function(UN0x, J5O) {
				if (UN0x == null) {
					return null
				}
				var bGX0x = new String(UN0x);
				if (bGX0x.length == 0) {
					return []
				}
				var Hl5q = bHy0x(bGX0x);
				if (J5O == null || J5O == undefined) {
					throw new Error("1007")
				}
				var pO0x = cbR6L(J5O);
				return caO6I(Hl5q, pO0x)
			};
		this.caq6k = function(UN0x, J5O) {
			var cao6i = cax6r(UN0x, J5O);
			var blQ5V = new String(cbY6S(cao6i));
			var UP0x = [];
			var cal6f = blQ5V.length / 2;
			var bi5n = 0;
			for (var i = 0; i < cal6f; i++) {
				UP0x.push("%");
				UP0x.push(blQ5V.charAt(bi5n++));
				UP0x.push(blQ5V.charAt(bi5n++))
			}
			return UP0x.join("")
		}
	}
	window.settmusic = (new ccn6h).caq6k
})();
(function() {
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
	p4t.eQ7J({
		"search-suggest": {
			url: "/api/search/suggest/web",
			type: "POST",
			format: function(Q5V) {
				return Q5V
			},
			onerror: function(Q5V, e4i) {
				if (Q5V.code == 407) {
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
			filter: function(e4i, bb5g) {
				window.log && window.log("searchkeywordclient", {
					type: this.cak6e(parseInt(e4i.data.type)) || "suggest",
					keyword: e4i.data.s,
					offset: e4i.offset
				})
			},
			format: function(Q5V, e4i) {
				if (Q5V.abroad) {
					try {
						Q5V.result = JSON.parse(decodeURIComponent(settmusic(Q5V.result, p4t.sk)))
					} catch (e) {}
				}
				Q5V.result = Q5V.result || {};
				var i4m, cq5v, jV8N = [],
					tT1x = e4i.data.s || "",
					fX7Q = e4i.data.limit,
					t4x = parseInt(e4i.data.type) || 1,
					m4q = Q5V.result;
				switch (t4x) {
				case 1:
					i4m = this.bGV0x(m4q.songs, e4i.data.hlpretag, e4i.data.hlposttag);
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
					i4m = this.bGV0x(m4q.songs, e4i.data.hlpretag, e4i.data.hlposttag);
					cq5v = m4q.songCount;
					break;
				case 1009:
					var pm0x = m4q.djRadios;
					if ( !! pm0x) {
						k4o.bc5h(pm0x, function(A5F, r4v, cai6c) {
							A5F.xid = A5F.id;
							A5F.id = A5F.id + "_rad"
						});
						if (pm0x.length) {
							this.ri1x("radio_search-" + e4i.data.s, pm0x)
						}
					}
					cq5v = Math.min(m4q.djprogramCount, 500);
					i4m = m4q.djprograms || [];
					if (e4i.data.isPub) {
						k4o.mt9k(pm0x, function(A5F, r4v, cai6c) {
							A5F.stype = 1;
							i4m.unshift(A5F)
						});
						cq5v = Math.min(i4m.length, 500)
					}
					break
				}
				this.w5B("onsearchload", Q5V);
				if (i4m && i4m.length) {
					for (var i = 0; i < fX7Q; i++) {
						if (i < i4m.length) {
							jV8N.push(i4m[i])
						} else {
							jV8N.push(null)
						}
					}
				}
				return {
					more: !0,
					total: Math.min(cq5v || 0, tT1x.length < 3 ? 500 : 5e3),
					list: jV8N
				}
			},
			onerror: function(Q5V, e4i) {
				e4i.onload(e4i, []);
				if (k4o.fZ7S(e4i.onerror)) {
					e4i.onerror(Q5V)
				}
			}
		}
	});
	p4t.CG4K = NEJ.C();
	b4f = p4t.CG4K.O5T(p4t.gZ8R);
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.cag6a = function(J5O, e4i) {
		if (!J5O) return;
		if ( !! this.bGT0x) v5A.jk8c(this.bGT0x);
		this.bGT0x = this.cj5o("search-suggest", NEJ.X({
			data: {
				s: J5O,
				limit: 8
			}
		}, e4i))
	};
	b4f.bZY5d = function(J5O, e4i) {
		if (!J5O) return;
		this.cj5o("search-multimatch", NEJ.X({
			data: {
				s: J5O
			}
		}, e4i))
	};
	b4f.bGV0x = function() {
		var bZU5Z = function(he8W, bGQ0x, bGP0x) {
				var bZO5T = he8W.match(new RegExp(bGQ0x + "(.+?)" + bGP0x, "gi")),
					cw5B = 0;
				k4o.bc5h(bZO5T, function(q4u) {
					cw5B += q4u.replace(new RegExp(bGQ0x, "g"), "").replace(new RegExp(bGP0x, "g"), "").length
				});
				return cw5B
			};
		return function(iB8t, bZL5Q, bZK5P) {
			var bGM0x = [];
			k4o.bc5h(iB8t, function(be5j, bd5i) {
				be5j = l4p.Er4v(be5j);
				var Vm0x = be5j.lyrics || [],
					du6o = Vm0x.length,
					iT8L = 0,
					cq5v = 4,
					Vn0x = {
						l: 0,
						v: 0
					},
					bne5j;
				if (du6o > 4) {
					k4o.bc5h(Vm0x, function(he8W, r4v) {
						var bGL0x = bZU5Z(he8W, bZL5Q, bZK5P);
						if (bGL0x > Vn0x.v) {
							Vn0x.v = bGL0x;
							Vn0x.l = r4v
						}
					});
					iT8L = Vn0x.l;
					iT8L = Math.max(iT8L, 0);
					bne5j = du6o - iT8L - 4;
					if (bne5j < 0) iT8L += bne5j;
					be5j.lrcAbstractEnd = iT8L + cq5v - 1
				} else {
					be5j.lrcAbstractEnd = du6o - 1
				}
				be5j.lrcAbstractStart = iT8L;
				be5j.indexId = (Vm0x && Vm0x.length ? "L" : "NL") + be5j.id;
				bGM0x.push(be5j)
			});
			return bGM0x
		}
	}();
	b4f.cak6e = function(t4x) {
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
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
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
	var Vp0x = {
		songs: 1,
		artists: 100,
		albums: 10,
		playlists: 1e3,
		mvs: 1004
	};
	L5Q.LI6C = NEJ.C();
	b4f = L5Q.LI6C.O5T(H5M.cz5E);
	b4f.cl5q = function(f4j) {
		this.cs5x();
		this.bR5W(f4j);
		this.R5W = p4t.CG4K.gc7V()
	};
	b4f.bR5W = function(f4j) {
		this.o4s = f4j;
		var i4m = a3x.I5N(f4j, "j-flag");
		this.eu7n = i4m[0];
		this.bnE5J = i4m[1];
		this.ce5j = i4m[2];
		this.mr9i = i4m[3];
		h4l.s4w(this.eu7n, "input", this.fz7s.g4k(this));
		h4l.s4w(this.eu7n, "keyup", this.fz7s.g4k(this));
		h4l.s4w(this.eu7n, "focus", this.gb7U.g4k(this));
		h4l.s4w(this.bnE5J, "click", this.gb7U.g4k(this));
		h4l.s4w(this.eu7n, "blur", this.bnQ5V.g4k(this));
		h4l.s4w(this.ce5j, "click", this.Vq0x.g4k(this));
		h4l.s4w(this.o4s, "keydown", this.bnY5d.g4k(this));
		h4l.s4w(this.o4s, "keypress", this.Vt0x.g4k(this));
		h4l.s4w(this.mr9i, "mouseover", this.LE6y.g4k(this));
		h4l.s4w(this.mr9i, "mouseout", this.LE6y.g4k(this));
		if (this.eu7n.value) {
			this.eu7n.value = ""
		}
		if (this.eu7n.style.opacity != null) {
			this.eu7n.style.opacity = 1
		}
	};
	b4f.fz7s = function(d4h) {
		if (d4h.type == "keyup" && d4h.keyCode == 8 || d4h.keyCode == 46) {
			this.Ds4w()
		} else if (d4h.type == "input" || d4h.type == "propertychange") {
			setTimeout(this.Ds4w.g4k(this), 0)
		}
	};
	b4f.gb7U = function() {
		this.xo2x(this.bnE5J, !1);
		a3x.z5E(this.o4s, "m-srch-fcs");
		this.eu7n.focus();
		this.Ds4w();
		a3x.z5E(a3x.I5N("g-topbar", "j-showoff")[0], "f-hide")
	};
	b4f.bnQ5V = function() {
		if (!this.eu7n.value) {
			this.xo2x(this.bnE5J, !0)
		}
		var Dy4C = a3x.I5N(this.mr9i, "slt");
		if (this.Vv0x(this.mr9i) && Dy4C.length > 0 && a3x.u5z(Dy4C[0], "type")) {
			var hh8Z = Dy4C[0].href;
			if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hh8Z)) {
				window.log("search", {
					rid: RegExp.$2,
					type: RegExp.$1,
					keyword: this.eu7n.value
				})
			}
			this.bon6h(Dy4C[0].href)
		}
		this.xo2x(this.mr9i, !1);
		a3x.x5C(this.o4s, "m-srch-fcs")
	};
	b4f.xo2x = function(f4j, kV9M) {
		a3x.Y5d(f4j, "display", !kV9M ? "none" : "")
	};
	b4f.Vv0x = function(f4j) {
		return a3x.cW6Q(f4j, "display") != "none"
	};
	b4f.Ds4w = function() {
		var DC4G = function(sD1x, cL6F) {
				if (!cL6F) return;
				return cL6F.replace(new RegExp(l4p.bIj0x(sD1x), "gi"), function($1) {
					return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
				})
			};
		var bZD5I = function(iw8o) {
				var gm7f = this.o4s.clientWidth > 250 ? 41 : 17;
				if (l4p.Ol8d(iw8o) > gm7f) {
					return l4p.DL4P(iw8o, gm7f) + "..."
				} else {
					return iw8o
				}
			};
		var Vx0x = function(m4q) {
				return m4q.songs && m4q.songs.length || m4q.albums && m4q.albums.length || m4q.artists && m4q.artists.length || m4q.playlists && m4q.playlists.length
			};
		var tr1x = function(sD1x, d4h) {
				if (!l4p.bIk0x(this.eu7n) || l4p.iX8P(this.eu7n.value)) {
					this.xo2x(this.mr9i, !1);
					return
				}
				d4h.keyword = k4o.dS7L(sD1x);
				var dy6s = a3x.bU5Z("m-search-suggest", d4h, {
					mark: DC4G.g4k(this, sD1x),
					cutStr: bZD5I.g4k(this)
				}),
					rw1x = d4h.result.order;
				this.mr9i.innerHTML = dy6s;
				this.xo2x(this.mr9i, Vx0x(d4h.result) ? !0 : !1);
				if ( !! rw1x && !! rw1x.length && Vp0x[rw1x[0]]) {
					this.boA6u = {
						keyword: sD1x,
						type: Vp0x[rw1x[0]]
					}
				}
			};
		var bZC5H = function() {
				this.xo2x(this.mr9i, !1);
				return
			};
		return function() {
			var A5F = this.eu7n.value;
			if (l4p.iX8P(A5F)) {
				this.xo2x(this.mr9i, !1);
				return
			}
			this.R5W.cag6a(A5F, {
				onload: tr1x.g4k(this, A5F),
				onForbidden: bZC5H.g4k(this)
			})
		}
	}();
	b4f.Vt0x = function(d4h) {
		if (d4h.keyCode != 13) return;
		var Dy4C = a3x.I5N(this.mr9i, "slt");
		if (this.Vv0x(this.mr9i) && Dy4C.length > 0) {
			this.bon6h(Dy4C[0].href);
			this.xo2x(this.mr9i, !1);
			return
		}
		this.Vq0x();
		this.xo2x(this.mr9i, !1)
	};
	b4f.bnY5d = function(d4h) {
		if (!this.Vv0x(this.mr9i)) return;
		var i4m = a3x.I5N(this.mr9i, "xtag"),
			du6o = i4m.length,
			r4v = k4o.cT6N(i4m, function(q4u) {
				return a3x.bA5F(q4u, "slt")
			});
		switch (d4h.keyCode) {
		case 38:
			if (r4v >= 0) a3x.x5C(i4m[r4v], "slt");
			a3x.z5E(i4m[r4v <= 0 ? du6o - 1 : r4v - 1], "slt");
			break;
		case 40:
			if (r4v >= 0) a3x.x5C(i4m[r4v], "slt");
			a3x.z5E(i4m[(r4v + 1) % du6o], "slt");
			break
		}
	};
	b4f.LE6y = function(d4h) {
		if (!this.Vv0x(this.mr9i)) return;
		var LA6u, E5J = h4l.U5Z(d4h),
			i4m = a3x.I5N(this.mr9i, "xtag");
		if (E5J.tagName.toLowerCase() == "a") LA6u = E5J;
		else if (E5J.parentNode.tagName.toLowerCase() == "a") LA6u = E5J.parentNode;
		if (!LA6u) return;
		k4o.bc5h(i4m, function(q4u) {
			a3x.x5C(q4u, "slt");
			a3x.u5z(q4u, "type", "")
		});
		if (d4h.type == "mouseout") return;
		a3x.z5E(LA6u, "slt");
		a3x.u5z(LA6u, "type", "mouse")
	};
	b4f.Vq0x = function() {
		var dH6B = location.hash,
			r4v = dH6B.indexOf("?"),
			bw5B = k4o.hf8X(dH6B.substring(r4v + 1));
		bw5B.s = this.eu7n.value;
		if (l4p.iX8P(bw5B.s)) return;
		if (!bw5B.type && this.boA6u && this.boA6u.keyword == bw5B.s) {
			bw5B.type = this.boA6u.type
		}
		this.bon6h("/search/#/?" + k4o.cY6S(bw5B));
		this.eu7n.blur()
	};
	b4f.bon6h = function(V5a) {
		if (location.dispatch2) {
			location.dispatch2(V5a)
		} else {
			location.href = V5a
		}
	};
	L5Q.LI6C.bZB5G = function() {
		var i4m = a3x.I5N(document.body, "j-suggest");
		k4o.bc5h(i4m, function(q4u) {
			new L5Q.LI6C(q4u)
		})
	};
	L5Q.LI6C.bZB5G()
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		H5M = c4g("nej.ut"),
		k4o = c4g("nej.u"),
		h4l = c4g("nej.v"),
		v5A = c4g("nej.j"),
		p4t = c4g("nm.d"),
		b4f;
	p4t.eQ7J({
		"mv_artist-list": {
			url: "/api/artist/mvs",
			type: "get",
			format: function(Q5V) {
				return {
					total: Q5V.size || 0,
					list: Q5V.mvs || []
				}
			}
		},
		"album_artist-list": {
			url: "/api/artist/albums/{id}",
			type: "get",
			format: function(Q5V) {
				return {
					total: Q5V.size || 0,
					list: Q5V.hotAlbums || []
				}
			}
		},
		"ydcailing_post-list": {
			url: "/api/cailing/all",
			type: "POST",
			format: function(Q5V) {
				return Q5V.result.songs
			}
		},
		"wo-list": {
			url: "/api/unicom/wo/content",
			format: function(Q5V, e4i) {
				if (e4i.offset == 0) {
					var ol0x = Q5V.data[0];
					this.w5B("onfirstload", ol0x);
					Q5V.data.splice(0, 1);
					return Q5V.data
				} else {
					return Q5V.data
				}
			}
		}
	});
	p4t.DP4T = NEJ.C();
	b4f = p4t.DP4T.O5T(p4t.gZ8R);
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.boU6O = function() {
		var rZ1x = "LOCAL_FLAG";
		return function(t4x, bZz5E) {
			var j4n = this.BN4R(rZ1x, {});
			if (j4n[t4x]) {
				return true
			} else {
				if (!bZz5E) {
					j4n[t4x] = true;
					this.uH2x(rZ1x, j4n)
				}
				return false
			}
		}
	}()
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ut"),
		bpd6X;
	if ( !! M5R.nN0x) return;
	M5R.nN0x = NEJ.C();
	bpd6X = M5R.nN0x.O5T(M5R.cz5E);
	bpd6X.bj5o = function() {
		var bZw5B = function(d4h) {
				d4h.matched = d4h.source == d4h.target
			};
		return function(e4i) {
			e4i.oncheck = e4i.oncheck || bZw5B;
			this.bk5p(e4i);
			this.bV5a = e4i.list;
			this.ih8Z = e4i.dataset || "id";
			this.jT8L = e4i.selected || "js-selected"
		}
	}();
	bpd6X.nL0x = function(A5F) {
		var E5J, d4h = {
			target: A5F
		};
		k4o.bc5h(this.bV5a, function(f4j) {
			delete d4h.matched;
			d4h.source = a3x.u5z(f4j, this.ih8Z);
			this.w5B("oncheck", d4h);
			if (!d4h.matched) {
				a3x.x5C(f4j, this.jT8L)
			} else {
				E5J = f4j;
				a3x.z5E(f4j, this.jT8L)
			}
		}, this);
		return E5J
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		M5R = c4g("nej.ut"),
		og0x;
	if ( !! M5R.cM6G) return;
	M5R.cM6G = NEJ.C();
	og0x = M5R.cM6G.O5T(M5R.cz5E);
	og0x.cl5q = function() {
		this.iu8m = {};
		this.cs5x();
		this.bH5M()
	};
	og0x.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.bpL6F = e4i.umi || "";
		this.zh3x = e4i.dispatcher;
		this.GW5b = e4i.composite || X5c;
		this.blc5h({
			onshow: this.eZ7S.g4k(this),
			onhide: this.jJ8B.g4k(this),
			onrefresh: this.em7f.g4k(this),
			onmessage: this.qu0x.g4k(this),
			onbeforehide: this.bZv5A.g4k(this)
		})
	};
	og0x.bC5H = function() {
		delete this.bpL6F;
		this.iu8m = {};
		this.bG5L()
	};
	og0x.sQ1x = function(d4h) {
		if ( !! d4h) d4h.stopped = !0
	};
	og0x.bH5M = bn5s;
	og0x.eZ7S = bn5s;
	og0x.jJ8B = bn5s;
	og0x.em7f = bn5s;
	og0x.qu0x = bn5s;
	og0x.bZv5A = bn5s;
	og0x.oY0x = function(nz0x, bD5I, eE7x) {
		this.zh3x.bpW6Q({
			to: nz0x,
			mode: eE7x || 0,
			data: bD5I,
			from: this.bpL6F
		})
	};
	og0x.cvo1x = function(t4x, j4n) {
		this.zh3x.ze3x(t4x, {
			from: this.bpL6F,
			data: j4n
		})
	};
	og0x.cvp1x = function() {
		this.zh3x.lJ9A.apply(this.zh3x, arguments)
	};
	og0x.bZs5x = function() {
		return this.iu8m
	};
	a3x.VF0x = function() {
		if ( !! window.dispatcher) {
			dispatcher.bGH0x.apply(dispatcher, arguments)
		}
	}
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ut"),
		vT2x;
	if ( !! M5R.dm6g) return;
	M5R.dm6g = NEJ.C();
	vT2x = M5R.dm6g.O5T(M5R.cM6G);
	vT2x.bZq5v = function(e4i) {
		var bB5G;
		if (!bB5G) {
			var j4n = e4i.input || X5c;
			bB5G = a3x.y5D(j4n.parent)
		}
		if (!bB5G) {
			var j4n = e4i.data || X5c;
			bB5G = a3x.y5D(j4n.parent)
		}
		if (!bB5G) {
			bB5G = a3x.y5D(e4i.parent)
		}
		return bB5G
	};
	vT2x.eZ7S = function(e4i) {
		var bB5G = this.bZq5v(e4i);
		if ( !! bB5G && !! this.o4s) bB5G.appendChild(this.o4s);
		this.gz7s(e4i);
		this.bGC0x("onshow", e4i);
		this.em7f(e4i)
	};
	vT2x.em7f = function(e4i) {
		this.fV7O(e4i);
		this.bGC0x("onrefresh", e4i)
	};
	vT2x.jJ8B = function() {
		this.kC9t();
		this.bZf5k();
		a3x.mu9l(this.o4s)
	};
	vT2x.bGA0x = function() {
		var ga7T = /^onshow|onrefresh|delay$/;
		return function(bY5d) {
			return ga7T.test(bY5d)
		}
	}();
	vT2x.bGz0x = bn5s;
	vT2x.bGC0x = function() {
		var bGy0x = function(bw5B, e4i, bY5d, oO0x) {
				if (this.bGA0x(oO0x)) return;
				if ( !! bw5B) bY5d += (bY5d.indexOf("?") > 1 ? "&" : "?") + bw5B;
				var cS6M = this.bGz0x(oO0x, e4i) || {};
				cS6M.location = e4i;
				cS6M.parent = this.iu8m[oO0x];
				this.zh3x.im8e(bY5d, {
					input: cS6M
				})
			};
		return function(t4x, e4i) {
			if (!e4i.nodelay) {
				if ( !! this.GW5b.delay) return;
				var bGx0x = this.GW5b[t4x] || X5c;
				if (bGx0x.delay) return
			}
			var bw5B = k4o.cY6S(e4i.param) || "";
			if (t4x == "onrefresh") {
				k4o.ei7b(this.GW5b, bGy0x.g4k(this, bw5B, e4i))
			}
			k4o.ei7b(bGx0x, bGy0x.g4k(this, bw5B, e4i))
		}
	}();
	vT2x.bZf5k = function() {
		var zt3x = function(bY5d, oO0x) {
				if (!this.bGA0x(oO0x)) this.zh3x.bp5u(bY5d)
			};
		return function() {
			k4o.ei7b(this.GW5b, zt3x, this);
			k4o.ei7b(this.GW5b.onshow, zt3x, this);
			k4o.ei7b(this.GW5b.onrefresh, zt3x, this)
		}
	}()
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		H5M = c4g("nej.ut"),
		v5A = c4g("nej.j"),
		k4o = c4g("nej.u"),
		F5K = c4g("nm.m"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		b4f, K5P;
	F5K.Le6Y = NEJ.C();
	b4f = F5K.Le6Y.O5T(H5M.cz5E);
	b4f.cl5q = function() {
		this.cs5x();
		this.o4s = a3x.y5D("g-topbar");
		var i4m = a3x.I5N(this.o4s, "j-tflag");
		this.bqO6I = i4m[0];
		this.ED4H = i4m[1];
		this.bGw0x = i4m[2];
		this.bqV6P = i4m[3];
		this.bYX5c = H5M.nN0x.B5G({
			list: this.bqO6I.getElementsByTagName("a"),
			selected: "z-slt",
			dataset: "module"
		});
		this.brc6W = H5M.nN0x.B5G({
			list: this.bqV6P.getElementsByTagName("a"),
			selected: "z-slt",
			dataset: "module"
		});
		this.bS5X([
			[this.o4s, "click", this.Lb6V.g4k(this)],
			[this.ED4H, "click", this.cx5C.g4k(this)],
			[this.ED4H, "mouseout", this.bGu0x.g4k(this, 0)],
			[this.ED4H, "mouseover", this.bGu0x.g4k(this, 1)]
		]);
		window.scrollTopbar = this.bYV5a.g4k(this);
		window.matchNav = this.bGs0x.g4k(this);
		window.polling = this.te1x.g4k(this);
		this.bry6s = p4t.DP4T.B5G();
		this.bYI5N();
		this.GI5N();
		var bw5B = k4o.hf8X(location.href.split("?")[1]) || {};
		if (bw5B.market) {
			a3x.y5D("topbar-download-link").href = "/download?market=" + bw5B.market
		}
		var baw2x = a3x.I5N(this.o4s, "j-showoff");
		if (baw2x && !this.bry6s.boU6O("newMvSearch")) {
			a3x.x5C(baw2x[0], "f-hide");
			window.setTimeout(function() {
				a3x.z5E(baw2x[0], "f-hide")
			}, 5e3)
		}
	};
	b4f.te1x = function(d4h) {
		var dH6B = l4p.Iv6p();
		if (!/^\/msg/.test(dH6B)) {
			var um1x = 0;
			um1x += d4h.comment;
			um1x += d4h.forward;
			um1x += d4h.msg;
			um1x += d4h.notice;
			if (um1x > 0) {
				um1x = um1x > 99 ? "99+" : um1x;
				this.KQ6K.innerText = um1x;
				this.GH5M.innerText = um1x;
				a3x.x5C(this.KQ6K, "f-hide");
				a3x.x5C(this.GH5M, "f-hide");
				this.VP0x = true
			} else {
				a3x.z5E(this.KQ6K, "f-hide");
				a3x.z5E(this.GH5M, "f-hide");
				this.VP0x = false
			}
			var ev7o = "/at";
			if (d4h.notice) ev7o = "/notify";
			if (d4h.comment) ev7o = "/comment";
			if (d4h.msg > 0) ev7o = "/private";
			if (d4h.forward > 0) ev7o = "/at";
			this.GH5M.parentNode.href = "/msg/#" + ev7o
		} else {
			this.GH5M.parentNode.href = "javascript:;";
			a3x.z5E(this.KQ6K, "f-hide");
			a3x.z5E(this.GH5M, "f-hide");
			this.VP0x = false
		}
		var i4m = a3x.I5N(this.bqO6I, "j-t");
		if (!/^\/friend/.test(dH6B)) {
			if (i4m && i4m.length) {
				a3x.Y5d(i4m[0], "display", d4h.event > 0 ? "" : "none")
			}
		} else {
			a3x.Y5d(i4m[0], "display", "none")
		}
	};
	b4f.cx5C = function(d4h) {
		var f4j = h4l.U5Z(d4h, "d:action");
		if (f4j) {
			switch (a3x.u5z(f4j, "action")) {
			case "login":
				h4l.cg5l(d4h);
				var t4x = a3x.u5z(f4j, "type");
				if (t4x) {
					if (t4x == "sina" || t4x == "tencent") top.open(f4j.href);
					else top.login(t4x == "mobile" ? 0 : 3)
				} else {
					top.login()
				}
				break;
			case "logout":
				h4l.cg5l(d4h);
				top.logout();
				break;
			case "viewStore":
				if (!this.bry6s.boU6O("storeNew")) {
					a3x.z5E(this.cvs1x, "f-vhide")
				}
				break;
			case "viewLevel":
				if (!this.bry6s.boU6O("levelNew")) {
					a3x.z5E(this.cvt1x, "f-vhide")
				}
				break
			}
		}
	};
	b4f.Lb6V = function(d4h) {
		var f4j = h4l.U5Z(d4h, "d:action");
		if (!f4j) return;
		var W5b = a3x.u5z(f4j, "action");
		switch (W5b) {
		case "bilog":
			var baM2x = a3x.u5z(f4j, "logAction"),
				baN2x = a3x.u5z(f4j, "logJson");
			window.log(baM2x, baN2x);
			break
		}
	};
	b4f.bGu0x = function(GF5K, d4h) {
		if (this.baU2x) {
			this.baU2x.style.display = !GF5K ? "none" : "";
			(GF5K || !this.VP0x ? a3x.z5E : a3x.x5C).call(window, this.KQ6K, "f-hide")
		}
	};
	b4f.bYV5a = function(fP7I) {
		a3x.Y5d(this.o4s, "top", -fP7I + "px")
	};
	b4f.bGs0x = function(ev7o, bYF5K) {
		this.bYX5c.nL0x(ev7o);
		if (ev7o == "discover") {
			a3x.z5E(this.bGw0x, "f-hide");
			a3x.x5C(this.bqV6P, "f-hide");
			window.g_topBarHeight = 105;
			this.brc6W.nL0x(bYF5K)
		} else {
			a3x.x5C(this.bGw0x, "f-hide");
			a3x.z5E(this.bqV6P, "f-hide");
			window.g_topBarHeight = 75
		}
	};
	b4f.bYI5N = function() {
		var ug1x = a3x.y5D("g_iframe");
		if (!ug1x) return;
		var gl7e = ug1x.contentWindow.document.getElementById("g_top");
		this.bGs0x(a3x.u5z(gl7e, "module"), a3x.u5z(gl7e, "sub"))
	};
	var VS0x = {},
		bGn0x = /\/\/\w+/,
		bYD5I = {
			avatarUrl: function(a, b) {
				a = a || "";
				b = b || "";
				return a.replace(bGn0x, "") !== b.replace(bGn0x, "")
			},
			userId: true,
			nickname: true,
			reward: true,
			topic: true,
			djStatus: true
		};
	b4f.bYC5H = function(VU0x) {
		var mL9C = k4o.cT6N(bYD5I, function(A5F, J5O) {
			if (k4o.fZ7S(A5F)) {
				return A5F(VU0x[J5O], VS0x[J5O])
			} else {
				return VU0x[J5O] !== VS0x[J5O]
			}
		});
		VS0x = VU0x;
		return VU0x[mL9C]
	};
	b4f.GI5N = function() {
		var cX6R = GUser || {},
			bYz5E = GUserAcc || {};
		if (cX6R && cX6R.userId) {
			var bGk0x = NEJ.X(cX6R, bYz5E);
			if (this.bYC5H(bGk0x)) {
				a3x.dK6E(this.ED4H, "m-topbar-user-login", bGk0x)
			}
		} else {
			VS0x = {};
			this.ED4H.innerHTML = a3x.hV8N("m-topbar-user-unlogin");
			var i4m = a3x.I5N(this.bqO6I, "j-t");
			a3x.Y5d(i4m[0], "display", "none")
		}
		a3x.x5C(this.ED4H, "f-hide");
		this.VP0x = false;
		var i4m = a3x.I5N(this.ED4H, "j-uflag");
		if (cX6R && cX6R.userId) {
			this.KQ6K = i4m.shift();
			this.baU2x = i4m.shift();
			this.GH5M = i4m.shift()
		} else {
			this.baU2x = i4m.shift()
		}
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		h4l = c4g("nej.v"),
		H5M = c4g("nej.ut"),
		p4t = c4g("nm.d"),
		b4f, K5P;
	p4t.eQ7J({
		"polling-get": {
			type: "GET",
			url: "/api/pl/count",
			format: function(Q5V) {
				h4l.w5B(p4t.rW1x, "message", Q5V)
			}
		}
	});
	p4t.rW1x = NEJ.C();
	b4f = p4t.rW1x.O5T(p4t.gZ8R);
	b4f.VV0x = function() {
		this.cj5o("polling-get", {})
	};
	b4f.ui1x = function() {
		var eT7M;
		return function() {
			if ( !! eT7M) return;
			eT7M = window.setInterval(this.VV0x.g4k(this), 1e5);
			this.VV0x()
		}
	}();
	H5M.fu7n.B5G({
		event: "message",
		element: p4t.rW1x
	})
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function() {
	(function(exports, global) {
		var io = exports;
		io.version = "0.9.16";
		io.protocol = 1;
		io.transports = [];
		io.j = [];
		io.sockets = {};
		io.connect = function(host, details) {
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
	(function(exports, global) {
		var util = exports.util = {};
		var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
		var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
		util.parseUri = function(str) {
			var m = re.exec(str || ""),
				uri = {},
				i = 14;
			while (i--) {
				uri[parts[i]] = m[i] || ""
			}
			return uri
		};
		util.uniqueUri = function(uri) {
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
		util.query = function(base, addition) {
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
		util.chunkQuery = function(qs) {
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
		util.load = function(fn) {
			if ("document" in global && document.readyState === "complete" || pageLoaded) {
				return fn()
			}
			util.on(global, "load", fn, false)
		};
		util.on = function(element, event, fn, capture) {
			if (element.attachEvent) {
				element.attachEvent("on" + event, fn)
			} else if (element.addEventListener) {
				element.addEventListener(event, fn, capture)
			}
		};
		util.request = function(xdomain) {
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
			util.load(function() {
				pageLoaded = true
			})
		}
		util.defer = function(fn) {
			if (!util.ua.webkit || "undefined" != typeof importScripts) {
				return fn()
			}
			util.load(function() {
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
		util.mixin = function(ctor, ctor2) {
			util.merge(ctor.prototype, ctor2.prototype)
		};
		util.inherit = function(ctor, ctor2) {
			function f() {}
			f.prototype = ctor2.prototype;
			ctor.prototype = new f
		};
		util.isArray = Array.isArray ||
		function(obj) {
			return Object.prototype.toString.call(obj) === "[object Array]"
		};
		util.intersect = function(arr, arr2) {
			var ret = [],
				longest = arr.length > arr2.length ? arr : arr2,
				shortest = arr.length > arr2.length ? arr2 : arr;
			for (var i = 0, l = shortest.length; i < l; i++) {
				if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
			}
			return ret
		};
		util.indexOf = function(arr, o, i) {
			for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
			return j <= i ? -1 : i
		};
		util.toArray = function(enu) {
			var arr = [];
			for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
			return arr
		};
		util.ua = {};
		util.ua.hasCORS = "undefined" != typeof XMLHttpRequest &&
		function() {
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
	(function(exports, io) {
		exports.EventEmitter = EventEmitter;

		function EventEmitter() {}
		EventEmitter.prototype.on = function(name, fn) {
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
		EventEmitter.prototype.once = function(name, fn) {
			var self = this;

			function on() {
				self.removeListener(name, on);
				fn.apply(this, arguments)
			}
			on.listener = fn;
			this.on(name, on);
			return this
		};
		EventEmitter.prototype.removeListener = function(name, fn) {
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
		EventEmitter.prototype.removeAllListeners = function(name) {
			if (name === undefined) {
				this.$events = {};
				return this
			}
			if (this.$events && this.$events[name]) {
				this.$events[name] = null
			}
			return this
		};
		EventEmitter.prototype.listeners = function(name) {
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
		EventEmitter.prototype.emit = function(name) {
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
	(function(exports, nativeJSON) {
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
			return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
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
		JSON.stringify = function(value, replacer, space) {
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
		JSON.parse = function(text, reviver) {
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
				text = text.replace(cx, function(a) {
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
	(function(exports, io) {
		var parser = exports.parser = {};
		var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
		var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
		var advice = parser.advice = ["reconnect"];
		var JSON = io.JSON,
			indexOf = io.util.indexOf;
		parser.encodePacket = function(packet) {
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
		parser.encodePayload = function(packets) {
			var decoded = "";
			if (packets.length == 1) return packets[0];
			for (var i = 0, l = packets.length; i < l; i++) {
				var packet = packets[i];
				decoded += "�" + packet.length + "�" + packets[i]
			}
			return decoded
		};
		var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
		parser.decodePacket = function(data) {
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
		parser.decodePayload = function(data) {
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
	(function(exports, io) {
		exports.Transport = Transport;

		function Transport(socket, sessid) {
			this.socket = socket;
			this.sessid = sessid
		}
		io.util.mixin(Transport, io.EventEmitter);
		Transport.prototype.heartbeats = function() {
			return true
		};
		Transport.prototype.onData = function(data) {
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
		Transport.prototype.onPacket = function(packet) {
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
		Transport.prototype.setCloseTimeout = function() {
			if (!this.closeTimeout) {
				var self = this;
				this.closeTimeout = setTimeout(function() {
					self.onDisconnect()
				}, this.socket.closeTimeout)
			}
		};
		Transport.prototype.onDisconnect = function() {
			if (this.isOpen) this.close();
			this.clearTimeouts();
			this.socket.onDisconnect();
			return this
		};
		Transport.prototype.onConnect = function() {
			this.socket.onConnect();
			return this
		};
		Transport.prototype.clearCloseTimeout = function() {
			if (this.closeTimeout) {
				clearTimeout(this.closeTimeout);
				this.closeTimeout = null
			}
		};
		Transport.prototype.clearTimeouts = function() {
			this.clearCloseTimeout();
			if (this.reopenTimeout) {
				clearTimeout(this.reopenTimeout)
			}
		};
		Transport.prototype.packet = function(packet) {
			this.send(io.parser.encodePacket(packet))
		};
		Transport.prototype.onHeartbeat = function(heartbeat) {
			this.packet({
				type: "heartbeat"
			})
		};
		Transport.prototype.onOpen = function() {
			this.isOpen = true;
			this.clearCloseTimeout();
			this.socket.onOpen()
		};
		Transport.prototype.onClose = function() {
			var self = this;
			this.isOpen = false;
			this.socket.onClose();
			this.onDisconnect()
		};
		Transport.prototype.prepareUrl = function() {
			var options = this.socket.options;
			return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
		};
		Transport.prototype.ready = function(socket, fn) {
			fn.call(this)
		}
	})("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	(function(exports, io, global) {
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
				io.util.on(global, "beforeunload", function() {
					self.disconnectSync()
				}, false)
			}
			if (this.options["auto connect"]) {
				this.connect()
			}
		}
		io.util.mixin(Socket, io.EventEmitter);
		Socket.prototype.of = function(name) {
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
		Socket.prototype.publish = function() {
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
		Socket.prototype.handshake = function(fn) {
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
				io.j.push(function(data) {
					complete(data);
					script.parentNode.removeChild(script)
				})
			} else {
				var xhr = io.util.request();
				xhr.open("GET", url, true);
				if (this.isXDomain()) {
					xhr.withCredentials = true
				}
				xhr.onreadystatechange = function() {
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
		Socket.prototype.getTransport = function(override) {
			var transports = override || this.transports,
				match;
			for (var i = 0, transport; transport = transports[i]; i++) {
				if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
					return new io.Transport[transport](this, this.sessionid)
				}
			}
			return null
		};
		Socket.prototype.connect = function(fn) {
			if (this.connecting && this.transports != "jsonp-polling") {
				return this
			}
			var self = this;
			self.connecting = true;
			this.handshake(function(sid, heartbeat, close, transports) {
				self.sessionid = sid;
				self.closeTimeout = close * 1e3;
				self.heartbeatTimeout = heartbeat * 1e3;
				var check = function() {
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
					self.transport.ready(self, function() {
						self.connecting = true;
						self.publish("connecting", self.transport.name);
						self.transport.open();
						if (self.options["connect timeout"]) {
							self.connectTimeoutTimer = setTimeout(function() {
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
				self.once("connect", function() {
					clearTimeout(self.connectTimeoutTimer);
					fn && typeof fn == "function" && fn()
				})
			});
			return this
		};
		Socket.prototype.setHeartbeatTimeout = function() {
			clearTimeout(this.heartbeatTimeoutTimer);
			if (this.transport && !this.transport.heartbeats()) return;
			var self = this;
			this.heartbeatTimeoutTimer = setTimeout(function() {
				self.transport.onClose()
			}, this.heartbeatTimeout)
		};
		Socket.prototype.packet = function(data) {
			if (this.connected && !this.doBuffer) {
				this.transport.packet(data)
			} else {
				this.buffer.push(data)
			}
			return this
		};
		Socket.prototype.setBuffer = function(v) {
			this.doBuffer = v;
			if (!v && this.connected && this.buffer.length) {
				if (!this.options["manualFlush"]) {
					this.flushBuffer()
				}
			}
		};
		Socket.prototype.flushBuffer = function() {
			this.transport.payload(this.buffer);
			this.buffer = []
		};
		Socket.prototype.disconnect = function() {
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
		Socket.prototype.disconnectSync = function() {
			var xhr = io.util.request();
			var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
			xhr.open("GET", uri, false);
			xhr.send(null);
			this.onDisconnect("booted")
		};
		Socket.prototype.isXDomain = function() {
			var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
			return this.options.host !== global.location.hostname || this.options.port != port
		};
		Socket.prototype.onConnect = function() {
			if (!this.connected) {
				this.connected = true;
				this.connecting = false;
				if (!this.doBuffer) {
					this.setBuffer(false)
				}
				this.emit("connect")
			}
		};
		Socket.prototype.onOpen = function() {
			this.open = true
		};
		Socket.prototype.onClose = function() {
			this.open = false;
			clearTimeout(this.heartbeatTimeoutTimer)
		};
		Socket.prototype.onPacket = function(packet) {
			this.of(packet.endpoint).onPacket(packet)
		};
		Socket.prototype.onError = function(err) {
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
		Socket.prototype.onDisconnect = function(reason) {
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
		Socket.prototype.reconnect = function() {
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
	(function(exports, io) {
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
		SocketNamespace.prototype.of = function() {
			return this.socket.of.apply(this.socket, arguments)
		};
		SocketNamespace.prototype.packet = function(packet) {
			packet.endpoint = this.name;
			this.socket.packet(packet);
			this.flags = {};
			return this
		};
		SocketNamespace.prototype.send = function(data, fn) {
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
		SocketNamespace.prototype.emit = function(name) {
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
		SocketNamespace.prototype.disconnect = function() {
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
		SocketNamespace.prototype.onPacket = function(packet) {
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
		Flag.prototype.send = function() {
			this.namespace.flags[this.name] = true;
			this.namespace.send.apply(this.namespace, arguments)
		};
		Flag.prototype.emit = function() {
			this.namespace.flags[this.name] = true;
			this.namespace.emit.apply(this.namespace, arguments)
		}
	})("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	(function(exports, io, global) {
		exports.websocket = WS;

		function WS(socket) {
			io.Transport.apply(this, arguments)
		}
		io.util.inherit(WS, io.Transport);
		WS.prototype.name = "websocket";
		WS.prototype.open = function() {
			var query = io.util.query(this.socket.options.query),
				self = this,
				Socket;
			if (!Socket) {
				Socket = global.MozWebSocket || global.WebSocket
			}
			this.websocket = new Socket(this.prepareUrl() + query);
			this.websocket.onopen = function() {
				self.onOpen();
				self.socket.setBuffer(false)
			};
			this.websocket.onmessage = function(ev) {
				self.onData(ev.data)
			};
			this.websocket.onclose = function() {
				self.onClose();
				self.socket.setBuffer(true)
			};
			this.websocket.onerror = function(e) {
				self.onError(e)
			};
			return this
		};
		if (io.util.ua.iDevice) {
			WS.prototype.send = function(data) {
				var self = this;
				setTimeout(function() {
					self.websocket.send(data)
				}, 0);
				return this
			}
		} else {
			WS.prototype.send = function(data) {
				this.websocket.send(data);
				return this
			}
		}
		WS.prototype.payload = function(arr) {
			for (var i = 0, l = arr.length; i < l; i++) {
				this.packet(arr[i])
			}
			return this
		};
		WS.prototype.close = function() {
			this.websocket.close();
			return this
		};
		WS.prototype.onError = function(e) {
			this.socket.onError(e)
		};
		WS.prototype.scheme = function() {
			return this.socket.options.secure ? "wss" : "ws"
		};
		WS.check = function() {
			return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
		};
		WS.xdomainCheck = function() {
			return true
		};
		io.transports.push("websocket")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	(function(exports, io) {
		exports.flashsocket = Flashsocket;

		function Flashsocket() {
			io.Transport.websocket.apply(this, arguments)
		}
		io.util.inherit(Flashsocket, io.Transport.websocket);
		Flashsocket.prototype.name = "flashsocket";
		Flashsocket.prototype.open = function() {
			var self = this,
				args = arguments;
			WebSocket.VW0x(function() {
				io.Transport.websocket.prototype.open.apply(self, args)
			});
			return this
		};
		Flashsocket.prototype.send = function() {
			var self = this,
				args = arguments;
			WebSocket.VW0x(function() {
				io.Transport.websocket.prototype.send.apply(self, args)
			});
			return this
		};
		Flashsocket.prototype.close = function() {
			WebSocket.KB6v.length = 0;
			io.Transport.websocket.prototype.close.call(this);
			return this
		};
		Flashsocket.prototype.ready = function(socket, fn) {
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
					WebSocket.bbx2x();
					Flashsocket.loaded = true
				}
				fn.call(self)
			}
			var self = this;
			if (document.body) return init();
			io.util.load(init)
		};
		Flashsocket.check = function() {
			if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
			return swfobject.getFlashPlayerVersion().major >= 10
		};
		Flashsocket.xdomainCheck = function() {
			return true
		};
		if (typeof window != "undefined") {
			WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
		}
		io.transports.push("flashsocket")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	if ("undefined" != typeof window) {
		var swfobject = function() {
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
					M = function() {
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
					k = function() {
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
								j.attachEvent(x, function() {
									if (j.readyState == "complete") {
										j.detachEvent(x, arguments.callee);
										f()
									}
								});
								if (O == top) {
									(function() {
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
								(function() {
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
									O.onload = function() {
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
						(function() {
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
						}
						if (M.ie && M.win && ae.readyState != 4) {
							var Y = C("div");
							X += "SWFObjectNew";
							Y.setAttribute("id", X);
							ae.parentNode.insertBefore(Y, ae);
							ae.style.display = "none";
							(function() {
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
						(function() {
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
							(function() {
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
				var d = function() {
						if (M.ie && M.win) {
							window.attachEvent("onunload", function() {
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
					registerObject: function(ab, X, aa, Z) {
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
					},
					getObjectById: function(X) {
						if (M.w3) {
							return z(X)
						}
					},
					embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
						var X = {
							success: false,
							id: ah
						};
						if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
							w(ah, false);
							K(function() {
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
								}
								if (ac) {
									ac(X)
								}
							})
						} else {
							if (ac) {
								ac(X)
							}
						}
					},
					switchOffAutoHideShow: function() {
						m = false
					},
					ua: M,
					getFlashPlayerVersion: function() {
						return {
							major: M.pv[0],
							minor: M.pv[1],
							release: M.pv[2]
						}
					},
					hasFlashPlayerVersion: F,
					createSWF: function(Z, Y, X) {
						if (M.w3) {
							return u(Z, Y, X)
						} else {
							return undefined
						}
					},
					showExpressInstall: function(Z, aa, X, Y) {
						if (M.w3 && A()) {
							P(Z, aa, X, Y)
						}
					},
					removeSWF: function(X) {
						if (M.w3) {
							y(X)
						}
					},
					createCSS: function(aa, Z, Y, X) {
						if (M.w3) {
							v(aa, Z, Y, X)
						}
					},
					addDomLoadEvent: K,
					addLoadEvent: s,
					getQueryParamValue: function(aa) {
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
					},
					expressInstallCallback: function() {
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
	}(function() {
		if ("undefined" == typeof window || window.WebSocket) return;
		var console = window.console;
		if (!console || !console.log || !console.error) {
			console = {
				log: function() {},
				error: function() {}
			}
		}
		if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
			console.error("Flash Player >= 10.0.0 is required.");
			return
		}
		if (location.protocol == "file:") {
			console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
		}
		WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
			var self = this;
			self.gA7t = WebSocket.bYx5C++;
			WebSocket.bGj0x[self.gA7t] = self;
			self.readyState = WebSocket.CONNECTING;
			self.bufferedAmount = 0;
			self.la9R = {};
			if (!protocols) {
				protocols = []
			} else if (typeof protocols == "string") {
				protocols = [protocols]
			}
			setTimeout(function() {
				WebSocket.VW0x(function() {
					WebSocket.ow0x.create(self.gA7t, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
				})
			}, 0)
		};
		WebSocket.prototype.send = function(data) {
			if (this.readyState == WebSocket.CONNECTING) {
				throw "INVALID_STATE_ERR: Web Socket connection has not been established"
			}
			var result = WebSocket.ow0x.send(this.gA7t, encodeURIComponent(data));
			if (result < 0) {
				return true
			} else {
				this.bufferedAmount += result;
				return false
			}
		};
		WebSocket.prototype.close = function() {
			if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
				return
			}
			this.readyState = WebSocket.CLOSING;
			WebSocket.ow0x.close(this.gA7t)
		};
		WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
			if (!(type in this.la9R)) {
				this.la9R[type] = []
			}
			this.la9R[type].push(listener)
		};
		WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
			if (!(type in this.la9R)) return;
			var events = this.la9R[type];
			for (var i = events.length - 1; i >= 0; --i) {
				if (events[i] === listener) {
					events.splice(i, 1);
					break
				}
			}
		};
		WebSocket.prototype.dispatchEvent = function(event) {
			var events = this.la9R[event.type] || [];
			for (var i = 0; i < events.length; ++i) {
				events[i](event)
			}
			var handler = this["on" + event.type];
			if (handler) handler(event)
		};
		WebSocket.prototype.bYv5A = function(flashEvent) {
			if ("readyState" in flashEvent) {
				this.readyState = flashEvent.readyState
			}
			if ("protocol" in flashEvent) {
				this.protocol = flashEvent.protocol
			}
			var jsEvent;
			if (flashEvent.type == "open" || flashEvent.type == "error") {
				jsEvent = this.bGi0x(flashEvent.type)
			} else if (flashEvent.type == "close") {
				jsEvent = this.bGi0x("close")
			} else if (flashEvent.type == "message") {
				var data = decodeURIComponent(flashEvent.message);
				jsEvent = this.bYn5s("message", data)
			} else {
				throw "unknown event type: " + flashEvent.type
			}
			this.dispatchEvent(jsEvent)
		};
		WebSocket.prototype.bGi0x = function(type) {
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
		WebSocket.prototype.bYn5s = function(type, data) {
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
		WebSocket.ow0x = null;
		WebSocket.bGj0x = {};
		WebSocket.KB6v = [];
		WebSocket.bYx5C = 0;
		WebSocket.loadFlashPolicyFile = function(url) {
			WebSocket.VW0x(function() {
				WebSocket.ow0x.loadManualPolicyFile(url)
			})
		};
		WebSocket.bbx2x = function() {
			if (WebSocket.ow0x) return;
			if (WebSocket.bYl5q) {
				window.WEB_SOCKET_SWF_LOCATION = WebSocket.bYl5q
			}
			if (!window.WEB_SOCKET_SWF_LOCATION) {
				console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
				return
			}
			var container = document.createElement("div");
			container.id = "webSocketContainer";
			container.style.position = "absolute";
			if (WebSocket.bYk5p()) {
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
			}, null, function(e) {
				if (!e.success) {
					console.error("[WebSocket] swfobject.embedSWF failed")
				}
			})
		};
		WebSocket.cvu1x = function() {
			setTimeout(function() {
				WebSocket.ow0x = document.getElementById("webSocketFlash");
				WebSocket.ow0x.setCallerUrl(location.href);
				WebSocket.ow0x.setDebug( !! window.WEB_SOCKET_DEBUG);
				for (var i = 0; i < WebSocket.KB6v.length; ++i) {
					WebSocket.KB6v[i]()
				}
				WebSocket.KB6v = []
			}, 0)
		};
		WebSocket.cvv1x = function() {
			setTimeout(function() {
				try {
					var events = WebSocket.ow0x.receiveEvents();
					for (var i = 0; i < events.length; ++i) {
						WebSocket.bGj0x[events[i].webSocketId].bYv5A(events[i])
					}
				} catch (e) {
					console.error(e)
				}
			}, 0);
			return true
		};
		WebSocket.cvw1x = function(message) {
			console.log(decodeURIComponent(message))
		};
		WebSocket.dw6q = function(message) {
			console.error(decodeURIComponent(message))
		};
		WebSocket.VW0x = function(task) {
			if (WebSocket.ow0x) {
				task()
			} else {
				WebSocket.KB6v.push(task)
			}
		};
		WebSocket.bYk5p = function() {
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
				window.addEventListener("load", function() {
					WebSocket.bbx2x()
				}, false)
			} else {
				window.attachEvent("onload", function() {
					WebSocket.bbx2x()
				})
			}
		}
	})();
	(function(exports, io, global) {
		exports.XHR = XHR;

		function XHR(socket) {
			if (!socket) return;
			io.Transport.apply(this, arguments);
			this.sendBuffer = []
		}
		io.util.inherit(XHR, io.Transport);
		XHR.prototype.open = function() {
			this.socket.setBuffer(false);
			this.onOpen();
			this.get();
			this.setCloseTimeout();
			return this
		};
		XHR.prototype.payload = function(payload) {
			var msgs = [];
			for (var i = 0, l = payload.length; i < l; i++) {
				msgs.push(io.parser.encodePacket(payload[i]))
			}
			this.send(io.parser.encodePayload(msgs))
		};
		XHR.prototype.send = function(data) {
			this.post(data);
			return this
		};

		function empty() {}
		XHR.prototype.post = function(data) {
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
		XHR.prototype.close = function() {
			this.onClose();
			return this
		};
		XHR.prototype.request = function(method) {
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
		XHR.prototype.scheme = function() {
			return this.socket.options.secure ? "https" : "http"
		};
		XHR.check = function(socket, xdomain) {
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
		XHR.xdomainCheck = function(socket) {
			return XHR.check(socket, true)
		}
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	(function(exports, io) {
		exports.htmlfile = HTMLFile;

		function HTMLFile(socket) {
			io.Transport.XHR.apply(this, arguments)
		}
		io.util.inherit(HTMLFile, io.Transport.XHR);
		HTMLFile.prototype.name = "htmlfile";
		HTMLFile.prototype.get = function() {
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
			io.util.on(window, "unload", function() {
				self.destroy()
			})
		};
		HTMLFile.prototype.c4g = function(data, doc) {
			data = data.replace(/\\\//g, "/");
			this.onData(data);
			try {
				var script = doc.getElementsByTagName("script")[0];
				script.parentNode.removeChild(script)
			} catch (e) {}
		};
		HTMLFile.prototype.destroy = function() {
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
		HTMLFile.prototype.close = function() {
			this.destroy();
			return io.Transport.XHR.prototype.close.call(this)
		};
		HTMLFile.check = function(socket) {
			if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
				try {
					var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
					return a && io.Transport.XHR.check(socket)
				} catch (e) {}
			}
			return false
		};
		HTMLFile.xdomainCheck = function() {
			return false
		};
		io.transports.push("htmlfile")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	(function(exports, io, global) {
		exports["xhr-polling"] = XHRPolling;

		function XHRPolling() {
			io.Transport.XHR.apply(this, arguments)
		}
		io.util.inherit(XHRPolling, io.Transport.XHR);
		io.util.merge(XHRPolling, io.Transport.XHR);
		XHRPolling.prototype.name = "xhr-polling";
		XHRPolling.prototype.heartbeats = function() {
			return false
		};
		XHRPolling.prototype.open = function() {
			var self = this;
			io.Transport.XHR.prototype.open.call(self);
			return false
		};

		function empty() {}
		XHRPolling.prototype.get = function() {
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
		XHRPolling.prototype.onClose = function() {
			io.Transport.XHR.prototype.onClose.call(this);
			if (this.xhr) {
				this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
				try {
					this.xhr.abort()
				} catch (e) {}
				this.xhr = null
			}
		};
		XHRPolling.prototype.ready = function(socket, fn) {
			var self = this;
			io.util.defer(function() {
				fn.call(self)
			})
		};
		io.transports.push("xhr-polling")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	(function(exports, io, global) {
		var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
		exports["jsonp-polling"] = JSONPPolling;

		function JSONPPolling(socket) {
			io.Transport["xhr-polling"].apply(this, arguments);
			this.index = io.j.length;
			var self = this;
			io.j.push(function(msg) {
				self.c4g(msg)
			})
		}
		io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
		JSONPPolling.prototype.name = "jsonp-polling";
		JSONPPolling.prototype.post = function(data) {
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
				iframe.onreadystatechange = function() {
					if (self.iframe.readyState == "complete") {
						complete()
					}
				}
			} else {
				this.iframe.onload = complete
			}
			this.socket.setBuffer(true)
		};
		JSONPPolling.prototype.get = function() {
			var self = this,
				script = document.createElement("script"),
				query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
			if (this.script) {
				this.script.parentNode.removeChild(this.script);
				this.script = null
			}
			script.async = true;
			script.src = this.prepareUrl() + query;
			script.onerror = function() {
				self.onClose()
			};
			var insertAt = document.getElementsByTagName("script")[0];
			insertAt.parentNode.insertBefore(script, insertAt);
			this.script = script;
			if (indicator) {
				setTimeout(function() {
					var iframe = document.createElement("iframe");
					document.body.appendChild(iframe);
					document.body.removeChild(iframe)
				}, 100)
			}
		};
		JSONPPolling.prototype.c4g = function(msg) {
			this.onData(msg);
			if (this.isOpen) {
				this.get()
			}
			return this
		};
		JSONPPolling.prototype.ready = function(socket, fn) {
			var self = this;
			if (!indicator) return fn.call(this);
			io.util.load(function() {
				fn.call(self)
			})
		};
		JSONPPolling.check = function() {
			return "document" in global
		};
		JSONPPolling.xdomainCheck = function() {
			return true
		};
		io.transports.push("jsonp-polling")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	if (typeof define === "function" && define.amd) {
		define([], function() {
			return io
		})
	}
})();
(function() {
	var isArray = Array.isArray;
	if (isArray === undefined) {
		isArray = function(arr) {
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
	EventEmitter.prototype.setMaxListeners = function(n) {
		if (!this.dG6A) this.dG6A = {};
		this.bGd0x = n
	};
	EventEmitter.prototype.emit = function() {
		var type = arguments[0];
		if (type === "error") {
			if (!this.dG6A || !this.dG6A.error || isArray(this.dG6A.error) && !this.dG6A.error.length) {
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
		if (!this.dG6A) return false;
		var handler = this.dG6A[type];
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
	EventEmitter.prototype.addListener = function(type, listener) {
		if ("function" !== typeof listener) {
			throw new Error("addListener only takes instances of Function")
		}
		if (!this.dG6A) this.dG6A = {};
		this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
		if (!this.dG6A[type]) {
			this.dG6A[type] = listener
		} else if (isArray(this.dG6A[type])) {
			this.dG6A[type].push(listener)
		} else {
			this.dG6A[type] = [this.dG6A[type], listener]
		}
		if (isArray(this.dG6A[type]) && !this.dG6A[type].warned) {
			var m;
			if (this.bGd0x !== undefined) {
				m = this.bGd0x
			} else {
				m = defaultMaxListeners
			}
			if (m && m > 0 && this.dG6A[type].length > m) {
				this.dG6A[type].warned = true;
				console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dG6A[type].length);
				console.trace()
			}
		}
		return this
	};
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	EventEmitter.prototype.once = function(type, listener) {
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
	EventEmitter.prototype.removeListener = function(type, listener) {
		if ("function" !== typeof listener) {
			throw new Error("removeListener only takes instances of Function")
		}
		if (!this.dG6A || !this.dG6A[type]) return this;
		var list = this.dG6A[type];
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
			delete this.dG6A[type]
		}
		return this
	};
	EventEmitter.prototype.removeAllListeners = function(type) {
		if (arguments.length === 0) {
			this.dG6A = {};
			return this
		}
		var events = this.dG6A && this.dG6A[type];
		if (!events) return this;
		if (isArray(events)) {
			events.splice(0)
		} else {
			this.dG6A[type] = null
		}
		return this
	};
	EventEmitter.prototype.listeners = function(type) {
		if (!this.dG6A) this.dG6A = {};
		if (!this.dG6A[type]) this.dG6A[type] = [];
		if (!isArray(this.dG6A[type])) {
			this.dG6A[type] = [this.dG6A[type]]
		}
		return this.dG6A[type]
	}
})();
(function() {
	if (typeof Object.create !== "function") {
		Object.create = function(o) {
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
	pomelo.init = function(host, port, reconnect, cb) {
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
		socket.on("connect", function() {
			console.log("[pomeloclient.init] websocket connected!");
			cb()
		});
		socket.on("reconnect", function() {
			pomelo.emit("reconnect")
		});
		socket.on("message", function(data) {
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
		socket.on("error", function(err) {
			cb(err)
		});
		socket.on("disconnect", function(reason) {
			isRegister = false;
			pomelo.emit("disconnect", reason)
		})
	};
	var request = function(method, opts, cb) {
			if (!method) {
				console.error("request message error with no method.");
				return
			}
			id++;
			callbacks[id] = cb;
			sendMsg(method, id, opts)
		};
	var notify = function(method, msg) {
			if (!method) {
				console.error("notify message error with no method.");
				return
			}
			sendMsg(method, 0, msg)
		};
	var sendMsg = function(method, msgId, msg) {
			var path = route + method;
			var rs = {
				id: msgId,
				route: path,
				msg: msg
			};
			var sg = JSON.stringify(rs);
			socket.send(sg)
		};
	var processMessageBatch = function(msgs) {
			for (var i = 0, l = msgs.length; i < l; i++) {
				processMessage(msgs[i])
			}
			emitMessage()
		};
	var emitMessage = function() {
			for (var key in message_store) {
				pomelo.emit(key, message_store[key])
			}
		};
	var processMessage = function(msg) {
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
					heartbeat_timer = setInterval(function() {
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
	var filterMessage = function(message) {
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
	var checkMessage = function(ids) {
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
	pomelo.register = function(opts, cb) {
		request("register", opts, cb)
	};
	pomelo.bind = function(opts, cb) {
		if (isRegister) {
			current_domain = opts.domain;
			current_user = opts.user;
			request("bind", opts, cb)
		} else {
			console.log("cannot bind without registration.")
		}
	};
	pomelo.registerAndBind = function(opts, cb) {
		current_domain = opts.domain;
		current_user = opts.user;
		request("registerAndBind", opts, cb)
	};
	pomelo.cancelBind = function(opts, cb) {
		current_domain = null;
		current_user = null;
		request("cancelBind", opts, cb)
	};
	pomelo.getOnlineUser = function(opts, cb) {
		request("getOnlineUser", opts, cb)
	};
	pomelo.disconnect = function() {
		if (socket) {
			socket.disconnect();
			socket = null
		}
	};
	pomelo.ackMessage = function(domain, msgs) {
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
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		H5M = c4g("nej.ut"),
		l4p = c4g("nm.x"),
		dj6d = c4g("nm.u"),
		p4t = c4g("nm.d"),
		Kq6k = c4g("pomelo"),
		dn6h = 0,
		b4f, K5P;
	p4t.eQ7J({
		"polling-init": {
			url: "/api/push/init",
			format: function(Q5V) {
				dn6h = 2;
				var sc1x = {
					domain: "music.163.com",
					host: MUSIC_CONFIG.pushHost,
					port: MUSIC_CONFIG.pushPort,
					key: MUSIC_CONFIG.pushKey,
					secret: "bec0b878892740c498505a85eb3dcec9"
				},
					j4n = Q5V.account || X5c,
					cR6L = GUser.userId;
				Kq6k.init(sc1x.host, sc1x.port, true, this.bYb5g.g4k(this, {
					user: cR6L,
					nonce: j4n.nonce,
					domain: sc1x.domain,
					productKey: sc1x.key,
					signature: j4n.signature,
					expire_time: j4n.expireTime
				}))
			},
			onerror: function() {
				return this.bce3x()
			}
		}
	});
	p4t.yH3x = NEJ.C();
	b4f = p4t.yH3x.O5T(p4t.gZ8R);
	b4f.cl5q = function() {
		var px0x = !1;
		return function(e4i) {
			if (!px0x) {
				px0x = !0
			}
			this.cs5x(e4i);
			Kq6k.on("specify", this.qu0x.g4k(this));
			Kq6k.on("broadcast", this.qu0x.g4k(this))
		}
	}();
	b4f.qu0x = function(d4h) {
		k4o.bc5h(d4h, function(bD5I) {
			h4l.w5B(p4t.yH3x, "message", bD5I)
		}, this)
	};
	b4f.bce3x = function() {
		var by5D = 500;
		return function() {
			dn6h = 0;
			Kq6k.disconnect();
			if (by5D > 6e4) by5D = 500;
			by5D *= 2
		}
	}();
	b4f.bYb5g = function(e4i, bP5U) {
		if ( !! bP5U) {
			return this.bce3x()
		}
		dn6h = 3;
		Kq6k.registerAndBind(e4i, function(m4q) {
			if (m4q.code != 200) {
				return this.bce3x()
			}
			dn6h = 4
		}.g4k(this))
	};
	b4f.cvx1x = function() {
		dj6d.bXX5c.gc7V().cvy1x()
	};
	b4f.cvz1x = function() {
		dj6d.bXX5c.gc7V().cvA1x()
	};
	b4f.bcm3x = function() {
		var px0x = !1;
		return function() {
			if (px0x) return;
			px0x = !0;
			this.cj5o("polling-init", {})
		}
	}();
	H5M.fu7n.B5G({
		event: "message",
		element: p4t.yH3x
	})
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		v5A = c4g("nej.j"),
		db6V = c4g("nej.p"),
		k4o = c4g("nej.u"),
		n4r = c4g("nm.l"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		di6c = c4g("api"),
		b4f, K5P;
	var ge7X = a3x.hX8P('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
	n4r.bcr3x = NEJ.C();
	b4f = n4r.bcr3x.O5T(n4r.dU7N);
	K5P = n4r.bcr3x.cf5k;
	b4f.bj5o = function(e4i) {
		e4i.title = "意见反馈";
		this.bk5p(e4i)
	};
	b4f.bZ5e = function() {
		this.ca5f = ge7X
	};
	b4f.bR5W = function() {
		this.cb5g();
		this.gJ7C = {};
		var Gw5B = a3x.I5N;
		var BI4M = h4l.s4w;
		this.gJ7C.submit_btn = Gw5B(this.o4s, "u-btn2")[0];
		this.gJ7C.cancle_btn = Gw5B(this.o4s, "u-btn2")[1];
		this.gJ7C.prompt_msg = Gw5B(this.o4s, "u-err")[0];
		this.gJ7C.zs = Gw5B(this.o4s, "zs")[0];
		a3x.Y5d(this.gJ7C.zs, "display", "none");
		this.gJ7C.fb_txt = Gw5B(this.o4s, "u-txt")[0];
		this.gJ7C.contact = Gw5B(this.o4s, "u-txt")[1];
		a3x.fO7H(this.gJ7C.fb_txt, "holder");
		a3x.fO7H(this.gJ7C.contact, "holder");
		if (a3x.bA5F(this.gJ7C.fb_txt.parentNode, "holder-parent")) {
			a3x.Y5d(this.gJ7C.fb_txt.parentNode, "display", "block")
		}
		if (a3x.bA5F(this.gJ7C.contact.parentNode, "holder-parent")) {
			a3x.Y5d(this.gJ7C.contact.parentNode, "display", "block")
		}
		BI4M(this.gJ7C.submit_btn, "click", this.bXU5Z.g4k(this));
		BI4M(this.gJ7C.cancle_btn, "click", this.bXT5Y.g4k(this));
		BI4M(this.gJ7C.prompt_msg, "msgShow", this.bXS5X.g4k(this));
		BI4M(this.gJ7C.fb_txt, "keyup", this.tK1x.g4k(this));
		BI4M(this.gJ7C.fb_txt, "input", this.fm7f.g4k(this));
		BI4M(this.gJ7C.contact, "keyup", this.bXR5W.g4k(this));
		BI4M(this.gJ7C.contact, "input", this.bFZ0x.g4k(this));
		this.kG9x = p4t.hK8C.B5G()
	};
	b4f.bXU5Z = function(d4h) {
		h4l.bh5m(d4h);
		if (this.ct5y()) return;
		var bl5q = this.gJ7C.fb_txt.value.trim();
		var br5w = bl5q.length;
		var e4i = {
			type: "json",
			method: "post",
			noEnc: true
		};
		var bFY0x = this.gJ7C.contact.value.trim();
		var Wo1x = {
			ua: navigator.userAgent,
			hash: top.location.hash,
			href: location.href,
			flash: l4p.bci3x(),
			contact: bFY0x
		};
		var j4n = {
			content: bl5q,
			client: "web",
			xInfo: JSON.stringify(Wo1x)
		},
			mV9M = this.kG9x.ciZ8R();
		if (mV9M && mV9M.length) {
			j4n.log = mV9M.join("\n")
		}
		if (br5w == 0) {
			this.gJ7C.prompt_msg.innerHTML = "反馈内容不能为空";
			a3x.Y5d(this.gJ7C.prompt_msg, "display", "block");
			return
		}
		if (bFY0x.length > 100) {
			this.gJ7C.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
			a3x.Y5d(this.gJ7C.prompt_msg, "display", "block");
			return
		}
		this.ct5y(true);
		e4i.data = k4o.cY6S(j4n);
		e4i.onload = this.bXO5T.g4k(this);
		e4i.onerror = this.hU8M.g4k(this);
		v5A.bq5v("/api/feedback/web", e4i)
	};
	b4f.fm7f = function(d4h) {
		var br5w = this.gJ7C.fb_txt.value.trim().length;
		if (br5w > 0) a3x.Y5d(this.gJ7C.prompt_msg, "display", "none");
		db6V.dd6X.browser == "ie" && db6V.dd6X.version < "7.0" ? setTimeout(this.fz7s.g4k(this), 0) : this.fz7s()
	};
	b4f.tK1x = function(d4h) {
		if (d4h.keyCode === 8) this.fz7s()
	};
	b4f.fz7s = function() {
		var br5w = this.gJ7C.fb_txt.value.trim().length;
		this.gJ7C.zs.innerHTML = !br5w ? "0/140" : br5w + "/140"
	};
	b4f.bFZ0x = function(d4h) {
		var br5w = this.gJ7C.contact.value.trim().length;
		if (br5w > 0) a3x.Y5d(this.gJ7C.prompt_msg, "display", "none")
	};
	b4f.bXR5W = function(d4h) {
		if (d4h.keyCode === 8) this.bFZ0x()
	};
	b4f.bXT5Y = function(d4h) {
		h4l.cg5l(d4h);
		this.bp5u()
	};
	b4f.bXS5X = function(d4h) {
		var f4j = h4l.U5Z(d4h);
		f4j.innerHTML = "请输入反馈内容"
	};
	b4f.cvB1x = function(cvD1x) {
		var f4j = h4l.U5Z(d4h);
		f4j.innerHTML = ""
	};
	b4f.bXO5T = function(m4q) {
		this.ct5y(false);
		this.bp5u();
		n4r.Z5e.N5S({
			tip: "意见发送成功",
			autoclose: true
		})
	};
	b4f.hU8M = function(m4q) {
		this.ct5y(false);
		n4r.Z5e.N5S({
			tip: "意见发送失败",
			autoclose: true
		})
	};
	b4f.ct5y = function(cG6A) {
		return this.dL6F(this.gJ7C.submit_btn, cG6A, "发送意见", "发送中...")
	};
	b4f.N5S = function() {
		K5P.N5S.call(this);
		this.ct5y(false);
		this.gJ7C.fb_txt.value = "";
		this.gJ7C.contact.value = "";
		a3x.Y5d(this.gJ7C.prompt_msg, "display", "none");
		this.fz7s()
	};
	l4p.bXI5N = function(e4i) {
		e4i = e4i || {};
		if (e4i.title === undefined) e4i.title = "意见反馈";
		n4r.bcr3x.N5S(e4i)
	};
	di6c.feedback = l4p.feedback = l4p.bXI5N
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		M5R = c4g("nej.ui"),
		b4f;
	if ( !! M5R.xN2x) return;
	M5R.xN2x = NEJ.C();
	b4f = M5R.xN2x.O5T(M5R.er7k);
	b4f.cl5q = function() {
		this.gA7t = this.bFV0x();
		this.cs5x()
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.cn5s = e4i.index;
		this.fT7M = e4i.total;
		this.gG7z = e4i.range;
		this.fS7L(e4i.data)
	};
	b4f.bC5H = function() {
		this.bG5L();
		delete this.bg5l;
		delete this.cn5s;
		delete this.fT7M;
		delete this.gG7z
	};
	b4f.hq8i = bn5s;
	b4f.bFV0x = function() {
		var fW7P = +(new Date);
		return function() {
			return "itm-" + ++fW7P
		}
	}();
	b4f.Cd4h = function() {
		return this.gA7t
	};
	b4f.hp8h = function() {
		return this.bg5l
	};
	b4f.fS7L = function(j4n) {
		this.bg5l = j4n || {};
		this.hq8i(this.bg5l)
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		M5R = c4g("nej.ui"),
		b4f, K5P;
	if ( !! M5R.tU1x) return;
	M5R.tU1x = NEJ.C();
	b4f = M5R.tU1x.O5T(M5R.xN2x);
	K5P = M5R.tU1x.cf5k;
	b4f.bj5o = function(e4i) {
		this.bXF5K = e4i.pkey || "id";
		this.bk5p(e4i)
	};
	b4f.Ck4o = function(j4n) {
		this.w5B("ondelete", {
			ext: j4n,
			id: this.Cd4h(),
			data: this.hp8h(),
			body: this.kI9z()
		})
	};
	b4f.Ke6Y = function(j4n) {
		this.w5B("onupdate", {
			ext: j4n,
			id: this.Cd4h(),
			data: this.hp8h(),
			body: this.kI9z()
		})
	};
	b4f.fS7L = function(j4n) {
		K5P.fS7L.apply(this, arguments);
		this.gA7t = this.bg5l[this.bXF5K] || this.bFV0x()
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		fb7U = NEJ.R,
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ui"),
		b4f, hP8H, bdi3x;
	if ( !! M5R.bdj3x) return;
	M5R.bdj3x = NEJ.C();
	b4f = M5R.bdj3x.O5T(M5R.er7k);
	b4f.bj5o = function(e4i) {
		this.Wy1x = NEJ.X({}, e4i);
		this.fy7r = NEJ.X({}, e4i);
		delete this.Wy1x.onchange;
		this.fy7r.onchange = this.gg7Z.g4k(this);
		this.bk5p(e4i);
		this.bXD5I({
			number: e4i.number,
			label: e4i.label || X5c
		})
	};
	b4f.bC5H = function() {
		this.bG5L();
		if ( !! this.jW8O) {
			this.jW8O.S5X();
			delete this.jW8O
		}
		delete this.Wy1x;
		delete this.fy7r;
		this.bXC5H();
		this.o4s.innerHTML = "&nbsp;"
	};
	b4f.bZ5e = function() {
		this.lg9X = hP8H
	};
	b4f.bXD5I = function(j4n) {
		a3x.dK6E(this.o4s, bdi3x, j4n);
		var fW7P = a3x.GZ5e();
		this.fy7r.list = a3x.I5N(this.o4s, "js-i-" + fW7P);
		this.fy7r.pbtn = (a3x.I5N(this.o4s, "js-p-" + fW7P) || fb7U)[0];
		this.fy7r.nbtn = (a3x.I5N(this.o4s, "js-n-" + fW7P) || fb7U)[0]
	};
	b4f.bR5W = function() {
		this.cb5g()
	};
	b4f.cvF1x = function(j4n) {
		return a3x.bU5Z(bdi3x, j4n)
	};
	b4f.gg7Z = function(d4h) {
		if (this.Ka6U) return;
		var r4v = d4h.index,
			cq5v = d4h.total;
		this.Ka6U = !0;
		this.JZ6T(r4v, cq5v);
		k4o.bc5h(this.WB1x, function(sb1x) {
			sb1x.JZ6T(r4v, cq5v)
		});
		this.Ka6U = !1;
		this.w5B("onchange", d4h)
	};
	b4f.g4k = function(bB5G) {
		bB5G = a3x.y5D(bB5G);
		if (!bB5G) return this;
		var cm5r = NEJ.X({}, this.Wy1x);
		cm5r.parent = bB5G;
		cm5r.index = this.sa1x();
		cm5r.total = this.jE8w();
		var sb1x = this.constructor.B5G(cm5r);
		sb1x.uY2x("onchange", this.fy7r.onchange);
		if (!this.WB1x) this.WB1x = [];
		this.WB1x.push(sb1x);
		return this
	};
	b4f.bXC5H = function() {
		var bpF6z = function(sb1x, r4v, i4m) {
				sb1x.S5X();
				i4m.splice(r4v, 1)
			};
		return function() {
			k4o.mt9k(this.WB1x, bpF6z)
		}
	}();
	b4f.jG8y = function(r4v) {
		if (!this.jW8O) return;
		this.jW8O.jG8y(r4v)
	};
	b4f.sa1x = function() {
		if (!this.jW8O) return 1;
		return this.jW8O.sa1x()
	};
	b4f.jE8w = function() {
		if (!this.jW8O) return 1;
		return this.jW8O.jE8w()
	};
	b4f.JZ6T = function(r4v, cq5v) {
		if (!this.jW8O) return;
		this.jW8O.JZ6T(r4v, cq5v)
	};
	b4f.bdG3x = function(cq5v) {
		if (!this.jW8O) return;
		this.jW8O.bdG3x(cq5v)
	};
	hP8H = a3x.rE1x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
	bdi3x = a3x.eh7a('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ut"),
		b4f;
	if ( !! M5R.WD1x) return;
	M5R.WD1x = NEJ.C();
	b4f = M5R.WD1x.O5T(M5R.cz5E);
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.WE1x = e4i.pbtn;
		this.ce5j = e4i.nbtn;
		this.WG1x = e4i.sbtn;
		this.WI1x = e4i.ebtn;
		this.ih8Z = e4i.event || "click";
		this.jT8L = e4i.selected || "js-selected";
		this.mH9y = e4i.disabled || "js-disabled";
		this.bXA5F(e4i.list);
		this.JZ6T(e4i.index || 1, e4i.total || 1)
	};
	b4f.bC5H = function() {
		this.bG5L();
		delete this.bV5a;
		delete this.ih8Z;
		delete this.WE1x;
		delete this.ce5j;
		delete this.WG1x;
		delete this.WI1x;
		delete this.bFR0x;
		delete this.fT7M;
		delete this.cn5s;
		delete this.jT8L;
		delete this.mH9y
	};
	b4f.bXA5F = function() {
		var bdV3x = function(f4j) {
				this.bV5a.push(f4j);
				this.bS5X([
					[f4j, this.ih8Z, this.cD6x.dT7M(this, 0)]
				])
			};
		return function(i4m) {
			this.bV5a = [];
			this.bS5X([
				[this.WE1x, "click", this.cD6x.dT7M(this, -1)],
				[this.ce5j, "click", this.cD6x.dT7M(this, 1)],
				[this.WG1x, "click", this.cD6x.dT7M(this, -2)],
				[this.WI1x, "click", this.cD6x.dT7M(this, 2)]
			]);
			k4o.bc5h(i4m, bdV3x, this)
		}
	}();
	b4f.CM4Q = function(f4j, r4v) {
		if (r4v == null) {
			f4j.innerText = "";
			a3x.Y5d(f4j, "display", "none");
			a3x.x5C(f4j, this.jT8L)
		} else {
			f4j.innerText = r4v;
			a3x.Y5d(f4j, "display", "");
			r4v == this.cn5s ? a3x.z5E(f4j, this.jT8L) : a3x.x5C(f4j, this.jT8L)
		}
	};
	b4f.bdY3x = function() {
		if (this.cn5s <= 1) {
			a3x.z5E(this.WE1x, this.mH9y);
			a3x.z5E(this.WG1x, this.mH9y)
		} else {
			a3x.x5C(this.WE1x, this.mH9y);
			a3x.x5C(this.WG1x, this.mH9y)
		}
		if (this.cn5s >= this.fT7M) {
			a3x.z5E(this.ce5j, this.mH9y);
			a3x.z5E(this.WI1x, this.mH9y)
		} else {
			a3x.x5C(this.ce5j, this.mH9y);
			a3x.x5C(this.WI1x, this.mH9y)
		}
	};
	b4f.WJ1x = bn5s;
	b4f.bea3x = function() {
		this.WJ1x();
		this.bdY3x();
		this.w5B("onchange", {
			last: this.bFR0x,
			total: this.fT7M,
			index: this.cn5s,
			ext: this.bed3x
		})
	};
	b4f.bFQ0x = function(r4v) {
		r4v = parseInt(r4v);
		if (isNaN(r4v) || this.fT7M == null) return !1;
		r4v = Math.max(1, Math.min(r4v, this.fT7M));
		this.bFR0x = this.cn5s;
		this.cn5s = r4v;
		return !0
	};
	b4f.beh3x = function(cq5v) {
		cq5v = parseInt(cq5v);
		if (isNaN(cq5v) || cq5v < 1) return !1;
		this.fT7M = cq5v;
		return !0
	};
	b4f.cD6x = function(d4h, ey7r) {
		h4l.cg5l(d4h);
		var E5J = h4l.U5Z(d4h);
		if (!E5J || a3x.bA5F(E5J, this.jT8L) || a3x.bA5F(E5J, this.mH9y)) return;
		var r4v = E5J.innerText;
		switch (ey7r) {
		case 1:
		case -1:
			r4v = this.cn5s + ey7r;
			break;
		case 2:
			r4v = this.fT7M;
			break;
		case -2:
			r4v = 1;
			break
		}
		this.jG8y(r4v)
	};
	b4f.sa1x = function() {
		return this.cn5s
	};
	b4f.jG8y = function(r4v) {
		var bXx5C = this.cn5s;
		this.bFQ0x(r4v);
		if (bXx5C != this.cn5s) this.bea3x();
		return this
	};
	b4f.jE8w = function() {
		return this.fT7M
	};
	b4f.QU9L = function(cq5v) {
		if (this.beh3x(cq5v) && this.cn5s != null) {
			this.cn5s = 1;
			this.bea3x()
		}
		return this
	};
	b4f.bdG3x = function(cq5v) {
		if (this.beh3x(cq5v)) {
			this.WJ1x();
			this.bdY3x()
		}
		return this
	};
	b4f.JZ6T = function(r4v, cq5v) {
		if (!this.beh3x(cq5v) || !this.bFQ0x(r4v)) return this;
		this.bea3x();
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		cO6I = c4g("nej.x"),
		M5R = c4g("nej.ut"),
		b4f;
	if ( !! M5R.JJ6D) return;
	M5R.JJ6D = NEJ.C();
	b4f = M5R.JJ6D.O5T(M5R.WD1x);
	b4f.cl5q = function() {
		this.cs5x();
		var f4j = a3x.cQ6K("span", "zdot");
		f4j.innerText = "...";
		this.WN1x = [f4j.cloneNode(true), f4j]
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.bFN0x()
	};
	b4f.bFN0x = function() {
		a3x.mu9l(this.WN1x[0]);
		a3x.mu9l(this.WN1x[1])
	};
	b4f.WJ1x = function() {
		this.bed3x = {
			last: !1,
			first: !1,
			list: this.bV5a
		};
		this.bFN0x();
		this.CM4Q(this.bV5a[0], 1);
		var bE5J = 1,
			br5w = this.bV5a.length;
		if (this.fT7M < br5w) {
			for (var oV0x; bE5J < br5w; bE5J++) {
				oV0x = bE5J + 1;
				this.CM4Q(this.bV5a[bE5J], oV0x > this.fT7M ? null : oV0x)
			}
			return
		}
		if (this.cn5s > 1) {
			var cw5B = Math.floor((br5w - 2) / 2),
				bXs5x = this.fT7M - br5w + 2,
				iq8i = Math.max(2, this.cn5s - cw5B);
			if (this.fT7M >= br5w) {
				iq8i = Math.min(iq8i, bXs5x)
			}
			if (iq8i > 2) {
				this.bV5a[0].insertAdjacentElement("afterEnd", this.WN1x[0]);
				this.bed3x.first = !0
			}
			for (var r4v;; bE5J++) {
				r4v = iq8i + bE5J - 1;
				if (r4v > this.cn5s) break;
				this.CM4Q(this.bV5a[bE5J], r4v)
			}
		}
		if (this.cn5s < this.fT7M) {
			var r4v, iq8i = this.cn5s + 1;
			for (var i = 0, l = br5w - 2;; i++, bE5J++) {
				r4v = iq8i + i;
				if (bE5J > l || r4v > this.fT7M) break;
				this.CM4Q(this.bV5a[bE5J], r4v)
			}
			if (r4v < this.fT7M) {
				this.bV5a[bE5J].insertAdjacentElement("beforeBegin", this.WN1x[1]);
				this.bed3x.last = !0
			}
			if (r4v <= this.fT7M) {
				this.CM4Q(this.bV5a[bE5J++], this.fT7M)
			}
		}
		for (; bE5J < br5w; bE5J++) {
			this.CM4Q(this.bV5a[bE5J])
		}
	};
	a3x.bXr5w = cO6I.bXr5w = function(bB5G, e4i) {
		var C5H = a3x.kJ9A(bB5G);
		if (!C5H) return null;
		if (!M5R.WA1x(C5H, M5R.JJ6D)) {
			e4i = e4i || {};
			var i4m = !e4i.clazz ? a3x.cP6J(C5H) : a3x.I5N(C5H, e4i.clazz);
			e4i.pbtn = i4m.shift();
			e4i.nbtn = i4m.pop();
			e4i.list = i4m;
			delete e4i.clazz
		}
		return M5R.WA1x(C5H, M5R.JJ6D, e4i || X5c)
	};
	cO6I.isChange = !0
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		fb7U = NEJ.R,
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		H5M = c4g("nej.ut"),
		M5R = c4g("nej.ui"),
		b4f, K5P, ge7X;
	if ( !! M5R.JE6y) return;
	M5R.JE6y = NEJ.C();
	b4f = M5R.JE6y.O5T(M5R.bdj3x);
	K5P = M5R.JE6y.cf5k;
	b4f.bj5o = function(e4i) {
		e4i.number = parseInt(e4i.number) || 9;
		this.bk5p(e4i);
		this.jW8O = H5M.JJ6D.B5G(this.fy7r)
	};
	b4f.gg7Z = function(d4h) {
		if ( !! this.Wy1x.noend) {
			var bFM0x = d4h.ext || X5c,
				i4m = bFM0x.list || fb7U;
			if (bFM0x.last) {
				a3x.Y5d(i4m[i4m.length - 1], "display", "none")
			}
		}
		K5P.gg7Z.apply(this, arguments)
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		bd5i = c4g("nej.ui"),
		M5R = c4g("nej.ut"),
		b4f;
	if ( !! M5R.WU1x) return;
	M5R.WU1x = NEJ.C();
	b4f = M5R.WU1x.O5T(M5R.cz5E);
	b4f.bj5o = function(e4i) {
		this.ir8j = {};
		this.bk5p(e4i);
		this.ie8W = a3x.y5D(e4i.parent);
		this.eM7F = {
			parent: this.ie8W
		};
		this.qC0x = parseInt(e4i.limit) || 10;
		this.wj2x = parseInt(e4i.first) || this.qC0x;
		this.bXo5t(e4i.item);
		this.bXn5s(e4i.cache || X5c);
		this.bXk5p(e4i.pager || X5c);
		this.fS7L()
	};
	b4f.bC5H = function() {
		this.w5B("onbeforerecycle");
		this.JB6v();
		this.bG5L();
		if (this.ir8j.clear) {
			this.R5W.sG1x(this.ir8j.key)
		}
		this.R5W.S5X();
		if ( !! this.iE8w) {
			this.iE8w.S5X();
			delete this.iE8w
		}
		delete this.bFL0x;
		delete this.fy7r;
		delete this.WV1x;
		delete this.R5W;
		delete this.ie8W;
		delete this.Jy6s;
		delete this.eM7F;
		delete this.ir8j
	};
	b4f.bFK0x = function() {
		var cN6H = /\{(.*?)\}/gi,
			bXd5i = function(pR0x, j4n) {
				return (pR0x || "{id}{seed}").replace(cN6H, function($1, $2) {
					var A5F = j4n[$2];
					return A5F == null ? $1 : A5F
				})
			};
		return function(C5H) {
			var J5O = bXd5i(this.eM7F.jstIdTempalte, {
				id: C5H,
				seed: a3x.GZ5e()
			});
			if (!this.eM7F.jstIdType) {
				return a3x.y5D(J5O)
			} else if (this.eM7F.jstIdType == 1) {
				return (a3x.I5N(this.ie8W, J5O) || [])[0]
			}
		}
	}();
	b4f.yp3x = function(bE5J, bi5n, fX7Q, br5w) {
		var m4q = {
			index: 1,
			total: 1
		};
		if (bi5n >= bE5J) {
			m4q.index = Math.floor((bi5n - bE5J) / fX7Q) + 2
		}
		if (br5w > bE5J) {
			m4q.total = Math.ceil((br5w - bE5J) / fX7Q) + 1
		}
		return m4q
	};
	b4f.bFF0x = function(J5O) {
		delete this.Jy6s;
		this.Gl5q = J5O;
		this.bS5X([
			[this.ie8W, "click", this.bWZ5e.g4k(this)]
		])
	};
	b4f.bXo5t = function(q4u) {
		if (k4o.fn7g(q4u)) {
			this.bFF0x(q4u);
			return
		}
		NEJ.X(this.eM7F, q4u);
		var dE6y = this.eM7F.klass;
		delete this.eM7F.klass;
		if (k4o.fn7g(dE6y)) {
			this.bFF0x(dE6y);
			return
		}
		delete this.Gl5q;
		this.Jy6s = dE6y;
		this.eM7F.ondelete = this.w5B.g4k(this, "ondelete");
		this.eM7F.onupdate = this.w5B.g4k(this, "onupdate")
	};
	b4f.bXn5s = function(P5U) {
		var dE6y = P5U.klass,
			ju8m = NEJ.X({}, P5U);
		this.ir8j.key = ju8m.lkey;
		this.ir8j.data = ju8m.data || {};
		this.ir8j.clear = !! ju8m.clear;
		this.eM7F.pkey = ju8m.key || "id";
		ju8m.onlistload = this.bft3x.g4k(this);
		ju8m.onpullrefresh = this.bWY5d.g4k(this);
		if ( !! dE6y && "onlistchange" in dE6y) {
			this.bS5X([
				[dE6y, "listchange", this.bfB3x.g4k(this)]
			])
		} else {
			ju8m.onitemadd = this.Xg1x.g4k(this);
			ju8m.onitemdelete = this.Xj1x.g4k(this);
			ju8m.onitemupdate = this.bFC0x.g4k(this)
		}
		this.R5W = (dE6y || M5R.PJ8B).B5G(ju8m);
		if (P5U.total != null) {
			this.R5W.QU9L(this.ir8j.key, P5U.total)
		}
		if ( !! P5U.list) {
			this.R5W.ri1x(this.ir8j.key, P5U.list)
		}
	};
	b4f.bXk5p = function(sb1x) {
		this.bFL0x = sb1x.klass || bd5i.JE6y;
		this.fy7r = NEJ.X({}, sb1x);
		if (k4o.en7g(sb1x.parent)) {
			this.fy7r.parent = sb1x.parent[0];
			this.Rn9e = sb1x.parent.slice(1);
			if (!this.Rn9e || !this.Rn9e.length) {
				delete this.Rn9e
			}
		}
		delete this.fy7r.klass
	};
	b4f.JB6v = function() {
		var ga7T = /^(?:table|tr|tbody|ul|ol|select)$/i;
		return function() {
			this.w5B("onbeforelistclear", {
				parent: this.ie8W
			});
			if ( !! this.fi7b && this.fi7b.length > 0) {
				this.fi7b = this.Jy6s.S5X(this.fi7b);
				delete this.fi7b
			}
			if (ga7T.test(this.ie8W.tagName)) {
				a3x.bJx1x(this.ie8W)
			} else {
				this.ie8W.innerHTML = ""
			}
		}
	}();
	b4f.bfM3x = function(Xm1x) {
		if ( !! this.fy7r.fixed) return;
		a3x.Y5d(this.fy7r.parent, "display", Xm1x);
		k4o.bc5h(this.Rn9e, function(bB5G) {
			a3x.Y5d(bB5G, "display", Xm1x)
		}, this)
	};
	b4f.bfP3x = function() {
		var r4v = this.fy7r.index || 1;
		delete this.fy7r.index;
		if ( !! this.iE8w) {
			r4v = this.iE8w.sa1x()
		}
		this.yo3x({
			last: r4v,
			index: r4v
		})
	};
	b4f.yo3x = function(d4h) {
		this.w5B("onpagechange", d4h)
	};
	b4f.bFB0x = function(bi5n) {
		this.ir8j.offset = bi5n;
		this.Rw9n()
	};
	b4f.bFA0x = function(e4i) {
		return e4i
	};
	b4f.Rw9n = function() {
		this.Rf9W();
		var j4n = this.ir8j.data;
		j4n.offset = this.ir8j.offset;
		var ol0x = j4n.offset == 0;
		j4n.total = ol0x;
		this.ir8j.limit = ol0x ? this.wj2x : this.qC0x;
		j4n.limit = this.ir8j.limit;
		this.R5W.nr9i(this.bFA0x(NEJ.X({}, this.ir8j)))
	};
	b4f.bft3x = function(e4i) {
		if (e4i.key != this.ir8j.key || e4i.offset != this.ir8j.offset) return;
		this.Xn1x();
		var i4m = this.R5W.gQ8I(e4i.key);
		if (!i4m || !i4m.length) {
			this.bfZ4d();
			return
		}
		var fX7Q = e4i.limit,
			bi5n = e4i.offset;
		if (this.bgc4g(i4m, bi5n, fX7Q)) return;
		this.w5B("onbeforelistrender", {
			list: i4m,
			offset: bi5n,
			parent: this.ie8W
		});
		if ( !! this.Gl5q) {
			this.eM7F.xlist = i4m;
			this.eM7F.beg = bi5n;
			this.eM7F.end = Math.min(i4m.length, bi5n + fX7Q) - 1;
			this.eM7F.act = "list";
			var dy6s = a3x.bU5Z(this.Gl5q, this.eM7F);
			this.Ra9R(dy6s)
		} else {
			this.eM7F.limit = fX7Q;
			this.eM7F.offset = bi5n;
			var gy7r = a3x.yR3x(i4m, this.Jy6s, this.eM7F);
			this.QX9O(gy7r)
		}
		this.w5B("onafterlistrender", {
			list: i4m,
			offset: bi5n,
			parent: this.ie8W
		})
	};
	b4f.bWY5d = function(e4i) {
		if (!this.WV1x) return;
		delete this.WV1x;
		this.Xn1x("onafterpullrefresh");
		this.fS7L()
	};
	b4f.bFz0x = function(r4v, cq5v) {
		if ( !! this.iE8w) {
			var yb3x = this.iE8w.sa1x(),
				bWT5Y = this.iE8w.jE8w();
			if (yb3x > cq5v || cq5v != bWT5Y) {
				this.iE8w.S5X();
				delete this.iE8w;
				this.yo3x({
					last: yb3x,
					index: Math.min(r4v, cq5v)
				});
				return !0
			}
		} else {
			this.fy7r.index = r4v;
			this.fy7r.total = cq5v;
			this.iE8w = this.bFL0x.B5G(this.fy7r);
			this.iE8w.uY2x("onchange", this.yo3x.g4k(this));
			k4o.bc5h(this.Rn9e, function(bB5G) {
				this.iE8w.g4k(bB5G)
			}, this)
		}
	};
	b4f.Xo1x = function() {
		var fW7P = +(new Date);
		return function(j4n) {
			var C5H = j4n[this.eM7F.pkey];
			if (!C5H) {
				j4n["dirty-data"] = !0;
				j4n[this.eM7F.pkey] = "dirty-" + fW7P++
			}
			return j4n
		}
	}();
	b4f.Xq1x = function(j4n) {
		var C5H = j4n[this.eM7F.pkey];
		if ( !! j4n["dirty-data"]) {
			delete j4n["dirty-data"];
			delete j4n[this.eM7F.pkey]
		}
		return C5H
	};
	b4f.Xy1x = function() {
		var bWN5S = function(jy8q, lA9r) {
				this.ie8W.insertAdjacentElement(jy8q, lA9r)
			};
		return function(jy8q, j4n) {
			var Hg5l = [j4n];
			if ( !! this.Gl5q) {
				this.eM7F.xlist = Hg5l;
				this.eM7F.beg = 0;
				this.eM7F.end = 0;
				this.eM7F.act = "add";
				this.Ra9R(a3x.bU5Z(this.Gl5q, this.eM7F), jy8q)
			} else {
				this.eM7F.limit = 1;
				this.eM7F.offset = 0;
				this.eM7F.parent = bWN5S.g4k(this, jy8q);
				var gy7r = a3x.yR3x(Hg5l, this.Jy6s, this.eM7F);
				this.eM7F.parent = this.ie8W;
				this.QX9O(gy7r)
			}
		}
	}();
	b4f.Rf9W = bn5s;
	b4f.Xn1x = function(T5Y) {
		var d4h = {
			parent: this.ie8W
		};
		this.w5B(T5Y || "onafterlistload", d4h);
		if (!d4h.stopped) {
			a3x.mu9l(this.ci5n)
		}
	};
	b4f.bgc4g = bn5s;
	b4f.XB1x = function(bD5I, jy8q) {
		if (k4o.fn7g(bD5I)) {
			if (!this.ci5n) this.ci5n = a3x.cQ6K("div");
			this.ci5n.innerHTML = bD5I
		} else {
			this.ci5n = bD5I
		}
		this.ie8W.insertAdjacentElement(jy8q || "beforeEnd", this.ci5n)
	};
	b4f.vX2x = function(T5Y, kD9u, jy8q) {
		var d4h = {
			parent: this.ie8W
		};
		this.w5B(T5Y, d4h);
		if (!d4h.stopped) {
			this.XB1x(d4h.value || kD9u, jy8q)
		}
	};
	b4f.bfZ4d = bn5s;
	b4f.Ra9R = bn5s;
	b4f.QX9O = bn5s;
	b4f.bWZ5e = function() {
		var ga7T = /^(?:delete|update)$/;
		return function(d4h) {
			var f4j = h4l.U5Z(d4h, "d:action");
			if (!f4j) return;
			var W5b = a3x.u5z(f4j, "action");
			if (!ga7T.test(W5b)) return;
			var C5H = a3x.u5z(f4j, "id");
			if (!C5H) return;
			var q4u = this.R5W.eg7Z(C5H);
			if (!q4u) return;
			h4l.bh5m(d4h);
			this.w5B("on" + W5b, {
				data: q4u,
				id: q4u[this.eM7F.pkey],
				body: a3x.y5D(this.bFK0x(C5H))
			})
		}
	}();
	b4f.Xg1x = bn5s;
	b4f.Rv9m = function(d4h) {
		var j4n = d4h.data || {},
			e4i = {
				data: j4n,
				key: this.ir8j.key,
				id: j4n[this.eM7F.pkey]
			};
		this.w5B("onbeforedelete", e4i);
		this.R5W.Jj6d(e4i)
	};
	b4f.Xj1x = bn5s;
	b4f.VR0x = function(d4h) {
		var j4n = d4h.data || {},
			e4i = {
				data: j4n,
				key: this.ir8j.key
			};
		this.w5B("onbeforeupdate", e4i);
		this.R5W.Ry9p(e4i)
	};
	b4f.bFC0x = function(d4h) {
		this.Qx9o(d4h, "onafterupdate");
		if (d4h.stopped) return;
		var C5H = d4h.data[this.eM7F.pkey];
		if ( !! this.fi7b) {
			var q4u = a3x.bMg1x(C5H);
			if ( !! q4u) q4u.fS7L(d4h.data)
		} else {
			var f4j = a3x.y5D(C5H + "" + a3x.GZ5e());
			if (!f4j) return;
			var i4m = this.R5W.gQ8I(d4h.key),
				r4v = k4o.cT6N(i4m, d4h.data);
			if (r4v < 0) return;
			this.eM7F.list = i4m;
			this.eM7F.beg = r4v;
			this.eM7F.end = r4v;
			this.eM7F.act = "update";
			var dy6s = a3x.bU5Z(this.Gl5q, this.eM7F);
			f4j.insertAdjacentHTML("afterEnd", dy6s);
			a3x.cJ6D(f4j)
		}
	};
	b4f.Qx9o = function(d4h, T5Y) {
		var q4u = d4h.data;
		if (!q4u || q4u[this.eM7F.pkey] == null) {
			this.w5B("onerror", d4h);
			d4h.stopped = !0
		}
		if (!d4h.stopped) {
			this.w5B(T5Y, d4h)
		}
	};
	b4f.bgy4C = bn5s;
	b4f.bgC4G = bn5s;
	b4f.bfB3x = function(d4h) {
		if (d4h.key != this.ir8j.key) return;
		switch (d4h.action) {
		case "add":
			this.Xg1x(d4h);
			break;
		case "delete":
			this.Xj1x(d4h);
			break;
		case "update":
			this.bFC0x(d4h);
			break;
		case "refresh":
			this.fS7L();
			break;
		case "unshift":
			this.bgC4G(d4h.offset, d4h.limit);
			break;
		case "append":
			this.bgy4C(d4h.offset, d4h.limit);
			break
		}
	};
	b4f.oN0x = function(q4u) {
		this.VR0x({
			data: q4u
		})
	};
	b4f.lC9t = function(q4u) {
		this.Rv9m({
			data: q4u
		})
	};
	b4f.re1x = function(q4u) {
		this.R5W.iL8D({
			data: q4u,
			key: this.ir8j.key
		})
	};
	b4f.rf1x = function() {
		return this.R5W
	};
	b4f.bgK4O = function(j4n) {
		this.Xy1x("afterBegin", this.Xo1x(j4n));
		return this.Xq1x(j4n)
	};
	b4f.bFy0x = function(j4n) {
		this.Xy1x("beforeEnd", this.Xo1x(j4n));
		return this.Xq1x(j4n)
	};
	b4f.fS7L = function() {
		this.JB6v();
		this.bfP3x()
	};
	b4f.cvG1x = function() {
		this.R5W.sG1x(this.ir8j.key);
		this.fS7L()
	};
	b4f.bcW3x = function() {
		if ( !! this.WV1x) return;
		this.WV1x = !0;
		this.vX2x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
		this.R5W.bcW3x({
			key: this.ir8j.key,
			data: this.ir8j.data
		})
	};
	b4f.jE8w = function() {
		return this.R5W.jE8w(this.ir8j.key)
	};
	b4f.bFw0x = function() {
		return this.iE8w
	};
	b4f.RL9C = function() {
		return this.R5W.RL9C(this.ir8j.key)
	};
	b4f.bWA5F = function() {
		return this.fi7b
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		fb7U = NEJ.R,
		k4o = c4g("nej.u"),
		a3x = c4g("nej.e"),
		M5R = c4g("nej.ut"),
		b4f, K5P;
	if ( !! M5R.iC8u) return;
	M5R.iC8u = NEJ.C();
	b4f = M5R.iC8u.O5T(M5R.WU1x);
	K5P = M5R.iC8u.cf5k;
	b4f.yp3x = function(bi5n, br5w) {
		return K5P.yp3x.call(this, this.wj2x, bi5n, this.qC0x, br5w)
	};
	b4f.bgY4c = function(r4v) {
		var bi5n = 0;
		if (r4v > 1) bi5n = this.wj2x + (r4v - 2) * this.qC0x;
		return bi5n
	};
	b4f.yo3x = function(d4h) {
		K5P.yo3x.apply(this, arguments);
		if (!d4h.stopped) {
			this.bFB0x(this.bgY4c(d4h.index))
		}
	};
	b4f.Rf9W = function() {
		this.JB6v();
		this.vX2x("onbeforelistload", "列表加载中...")
	};
	b4f.Xn1x = function() {
		K5P.Xn1x.apply(this, arguments);
		this.JB6v()
	};
	b4f.bgc4g = function(i4m, bi5n, fX7Q) {
		var bv5A = this.yp3x(bi5n, i4m.length);
		if (this.bFz0x(bv5A.index, bv5A.total)) return !0;
		this.bfM3x(bv5A.total > 1 ? "" : "none")
	};
	b4f.bfZ4d = function() {
		this.vX2x("onemptylist", "没有列表数据！")
	};
	b4f.XB1x = function(bD5I, jy8q) {
		if (!jy8q && k4o.fn7g(bD5I)) {
			this.ie8W.innerHTML = bD5I;
			return
		}
		K5P.XB1x.apply(this, arguments)
	};
	b4f.Ra9R = function(dy6s) {
		this.ie8W.innerHTML = dy6s
	};
	b4f.QX9O = function(gy7r) {
		this.fi7b = gy7r
	};
	b4f.Xg1x = function(d4h) {
		this.Qx9o(d4h, "onafteradd");
		if (!d4h.stopped) this.fS7L()
	};
	b4f.Xj1x = function(d4h) {
		this.Qx9o(d4h, "onafterdelete");
		if (!d4h.stopped) this.fS7L()
	};
	b4f.bgy4C = function(bi5n, fX7Q) {
		var r4v = 1;
		if ( !! this.iE8w) {
			r4v = this.iE8w.sa1x()
		}
		var iT8L = this.bgY4c(r4v),
			gB7u = iT8L + (r4v > 1 ? this.qC0x : this.wj2x);
		if (bi5n >= gB7u && !! this.iE8w) {
			var bv5A = this.yp3x(0, this.jE8w());
			this.iE8w.bdG3x(bv5A.total);
			this.bfM3x(bv5A.total > 1 ? "" : "none")
		} else {
			this.fS7L()
		}
	};
	b4f.bgC4G = function(bi5n, fX7Q) {
		var r4v = 1;
		if ( !! this.iE8w) {
			r4v = this.iE8w.sa1x()
		}
		var iT8L = this.bgY4c(r4v),
			bv5A = this.yp3x(iT8L, this.jE8w());
		this.yo3x({
			last: r4v,
			index: bv5A.index
		})
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		H5M = c4g("nej.ut"),
		k4o = c4g("nej.u"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		D5I = c4g("nm.w"),
		fd7W = 40,
		b4f, K5P;
	D5I.XD1x = NEJ.C();
	b4f = D5I.XD1x.O5T(H5M.cz5E);
	K5P = D5I.XD1x.cf5k;
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.Qj9a = e4i.inputer;
		this.bhd4h = e4i.tipper;
		this.bS5X([
			[this.Qj9a, "input", this.fm7f.g4k(this)]
		])
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.Gd5i(null, null)
	};
	b4f.fm7f = function(d4h) {
		if (d4h && d4h.type == "keyup" && (d4h.keyCode != 8 || d4h.keyCode != 68)) return;
		var T5Y = this.Qj9a.value,
			cvH1x;
		if (l4p.Ol8d(T5Y) > fd7W) {
			this.Qj9a.value = l4p.DL4P(T5Y, fd7W);
			this.Gd5i("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g4k(this))
		} else if (T5Y.indexOf("#") >= 0 || T5Y.indexOf("@") >= 0) {
			this.Gd5i("歌单名不能包含字符“@”和“#”！")
		} else {
			this.Gd5i(null, null);
			this.w5B("onchange", {
				value: T5Y
			})
		}
	};
	b4f.bWy5D = function() {
		this.fm7f()
	};
	b4f.Gd5i = function() {
		var C5H = 0;
		return function(dl6f, bFu0x) {
			if ( !! C5H) window.clearTimeout(C5H);
			if (!dl6f) {
				a3x.z5E(this.bhd4h, "f-vhide");
				this.bFr0x = !1;
				return
			}
			this.bhd4h.innerHTML = '<i class="u-icn u-icn-25"></i>' + dl6f;
			a3x.x5C(this.bhd4h, "f-vhide");
			this.bFr0x = !0;
			if (k4o.fZ7S(bFu0x)) C5H = window.setTimeout(function() {
				this.Gd5i(null, null);
				bFu0x()
			}.g4k(this), 1e3)
		}
	}();
	b4f.bFp0x = function() {
		if (this.bFr0x) return !1;
		if (l4p.iX8P(this.Qj9a.value)) {
			this.Gd5i("歌单名不能为空");
			return !1
		}
		return !0
	};
	b4f.fv7o = function() {
		return this.Qj9a.value
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		h4l = c4g("nej.v"),
		a3x = c4g("nej.e"),
		v5A = c4g("nej.j"),
		n4r = c4g("nm.l"),
		D5I = c4g("nm.w"),
		bF5K = c4g("nej.ui"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		b4f, K5P;
	n4r.XH1x = NEJ.C();
	b4f = n4r.XH1x.O5T(n4r.dU7N);
	K5P = n4r.XH1x.cf5k;
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.XK1x = {
			inputer: i4m[0],
			tipper: i4m[1]
		};
		this.hN8F = {
			onerror: this.bFn0x.g4k(this),
			onitemadd: this.bFn0x.g4k(this)
		};
		this.pF0x = i4m[2];
		h4l.s4w(i4m[2], "click", this.Em4q.g4k(this));
		h4l.s4w(i4m[3], "click", this.zH3x.g4k(this));
		h4l.s4w(this.o4s, "keypress", this.bFj0x.g4k(this))
	};
	b4f.bZ5e = function() {
		this.ca5f = "m-wgt-create"
	};
	b4f.bj5o = function(e4i) {
		e4i.clazz = " m-layer-w2";
		e4i.parent = e4i.parent || document.body;
		e4i.title = "新建歌单";
		e4i.draggable = !0;
		e4i.destroyalbe = !0;
		e4i.mask = true;
		this.bk5p(e4i);
		this.XK1x.inputer.value = e4i.name || "";
		this.tx1x = D5I.XD1x.B5G(this.XK1x);
		this.tx1x.bWy5D();
		this.R5W = p4t.hn8f.B5G(this.hN8F);
		setTimeout(function() {
			this.XK1x.inputer.focus()
		}.g4k(this), 0)
	};
	b4f.bC5H = function() {
		this.bG5L();
		if (this.tx1x) {
			this.tx1x.S5X();
			delete this.tx1x
		}
		this.rp1x(!1);
		this.XK1x.inputer.value = ""
	};
	b4f.rp1x = function(PL8D) {
		this.nT0x = PL8D;
		if (PL8D) {
			this.pF0x.innerHTML = "<i>新建中...</i>";
			a3x.z5E(this.pF0x, "u-btn2-dis")
		} else {
			this.pF0x.innerHTML = "<i>新 建</i>";
			a3x.x5C(this.pF0x, "u-btn2-dis")
		}
	};
	b4f.Em4q = function() {
		if (this.nT0x || !this.tx1x.bFp0x()) return;
		var cm5r = {
			key: "playlist_new-" + GUser.userId,
			data: {
				name: this.tx1x.fv7o()
			},
			offset: 1
		};
		this.R5W.iL8D(cm5r);
		this.rp1x(!0)
	};
	b4f.bFn0x = function(d4h) {
		var cc5h = (d4h.result || X5c).code;
		if (!cc5h) {
			this.w5B("onsuccess", d4h.data)
		} else {
			this.w5B("onerror", d4h)
		}
		this.bp5u()
	};
	b4f.zH3x = function() {
		this.bp5u()
	};
	b4f.bFj0x = function(d4h) {
		if (d4h.keyCode == 13) this.Em4q()
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		H5M = c4g("nej.ut"),
		v5A = c4g("nej.j"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.bhM4Q = NEJ.C();
	b4f = n4r.bhM4Q.O5T(n4r.dU7N);
	K5P = n4r.bhM4Q.cf5k;
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.hL8D = {
			limit: 301,
			parent: i4m[1],
			cache: {
				klass: p4t.hn8f,
				lkey: "playlist_new-" + GUser.userId,
				onlisterror: this.bhP4T.g4k(this)
			},
			item: {
				klass: "m-wgt-subscribe-item",
				cutStr: l4p.zX3x,
				escape: k4o.dS7L
			}
		};
		this.hN8F = {
			onsuccess: this.XM1x.g4k(this),
			onerror: this.ek7d.g4k(this)
		};
		h4l.s4w(i4m[0], "click", this.Em4q.g4k(this));
		h4l.s4w(i4m[1], "click", this.lI9z.g4k(this))
	};
	b4f.bZ5e = function() {
		this.ca5f = "m-wgt-subscribe"
	};
	b4f.bj5o = function(e4i) {
		e4i.parent = e4i.parent || document.body;
		e4i.clazz = " m-layer-w2";
		e4i.title = "添加到歌单";
		e4i.draggable = !0;
		e4i.mask = !0;
		this.bk5p(e4i);
		this.XO1x = (e4i.tracks || []).reverse();
		this.hL8D.item.size = this.XO1x.length;
		this.hN8F.name = e4i.name || "";
		this.bFh0x = p4t.vt2x.B5G({
			onaddsuccess: this.xZ3x.g4k(this)
		});
		this.sk1x = p4t.hn8f.B5G({
			onlistload: this.bWc5h.g4k(this)
		});
		this.sk1x.bJH1x();
		k4o.bc5h(this.XO1x, function(q4u, r4v, i4m) {
			if (!k4o.ks9j(q4u)) {
				i4m[r4v] = this.bFh0x.eg7Z(q4u) || q4u
			}
		}, this)
	};
	b4f.bWc5h = function() {
		if (this.dr6l) this.dr6l.S5X();
		this.dr6l = H5M.iC8u.B5G(this.hL8D)
	};
	b4f.Em4q = function() {
		this.bp5u();
		if (this.EC4G) this.EC4G.S5X();
		this.EC4G = n4r.XH1x.B5G(this.hN8F);
		this.EC4G.N5S()
	};
	b4f.lI9z = function() {
		var bWb5g = function(f4j) {
				while (f4j && f4j != document) {
					if (f4j.tagName.toLowerCase() == "li") {
						return f4j
					}
					f4j = f4j.parentNode
				}
			};
		return function(d4h) {
			h4l.cg5l(d4h);
			var E5J = h4l.U5Z(d4h),
				bif4j = bWb5g(E5J);
			if ( !! bif4j && !a3x.bA5F(bif4j, "dis")) {
				this.XM1x({
					id: a3x.u5z(bif4j, "id")
				})
			}
		}
	}();
	b4f.XM1x = function(d4h) {
		var C5H = d4h.id;
		if (!C5H || !this.XO1x.length) return;
		this.bFh0x.iL8D({
			key: "track_playlist-" + C5H,
			data: {
				tracks: this.XO1x,
				pid: C5H
			}
		});
		this.bp5u()
	};
	b4f.xZ3x = function() {
		this.w5B("onsuccess");
		n4r.Z5e.N5S({
			tip: "收藏成功"
		})
	};
	b4f.ek7d = function(d4h) {
		this.bp5u();
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
	b4f.bhP4T = function() {
		this.bp5u();
		n4r.Z5e.N5S({
			tip: "列表下载失败，请稍后再试",
			type: 2
		})
	};
	l4p.lJ9A = function(e4i) {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			top.login();
			return
		}
		n4r.bhM4Q.N5S(e4i)
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		db6V = c4g("nej.p"),
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		v5A = c4g("nej.j"),
		k4o = c4g("nej.u"),
		l4p = c4g("nm.x");
	var bii4m, nw0x, V5a = decodeURIComponent(location.href),
		iZ8R = /.+(https?:\/\/.+\/proxy.html)/.test(V5a) ? RegExp.$1 : "";
	if ( !! iZ8R) {
		v5A.uG2x("mail_proxy_url", iZ8R)
	} else {
		iZ8R = v5A.tk1x("mail_proxy_url") || "about:blank"
	}
	bii4m = a3x.YP1x({
		src: iZ8R,
		onload: function() {
			nw0x = true
		}
	});
	var bFe9V = function() {
			v5A.gI7B("USER_TRIGGER", {
				value: true,
				expire: 1 / (24 * 60),
				path: "/"
			})
		};
	var bVZ5e = function() {
			if (db6V.dd6X.browser == "ie" && parseInt(db6V.dd6X.version) < 9) {
				l4p.eU7N({
					clazz: "m-layer-w2",
					message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
				});
				return false
			}
			return true
		};
	l4p.Pa8S = function(t4x, C5H, W5b) {
		if (!bVZ5e()) return;
		bFe9V();
		if (W5b == "stop") {
			if (!nw0x) throw "proxy not loaded";
			bFe9V();
			bii4m.contentWindow.location.replace(iZ8R + "#" + k4o.cY6S({
				to: "ifrmMusic",
				message: JSON.stringify({
					s: +(new Date),
					action: "stop"
				})
			}))
		} else {
			bii4m.contentWindow.location.replace(iZ8R + "#" + k4o.cY6S({
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
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		v5A = c4g("nej.j"),
		k4o = c4g("nej.u"),
		l4p = c4g("nm.x"),
		n4r = c4g("nm.l"),
		p4t = c4g("nm.d");
	var kG9x = p4t.hK8C.B5G();
	var nu0x = p4t.vt2x.B5G({
		onlistload: bVY5d,
		onitemload: bVX5c,
		onerror: ek7d
	});
	var AG3x = p4t.pM0x.B5G({
		onlistload: bVW5b,
		onitemload: bVV5a,
		onerror: ek7d
	});
	var bFb9S = {};

	function vj2x(d4h) {
		var f4j = h4l.U5Z(d4h, "d:resAction"),
			W5b = a3x.u5z(f4j, "resAction");
		if (f4j && (W5b == "play" || W5b == "addto")) {
			var t4x = parseInt(a3x.u5z(f4j, "resType"));
			bEZ9Q({
				action: W5b,
				type: t4x,
				id: a3x.u5z(f4j, "resId"),
				from: a3x.u5z(f4j, "resFrom"),
				data: a3x.u5z(f4j, "resData"),
				order: a3x.u5z(f4j, "resOrder"),
				node: f4j
			});
			if (t4x != 13) bEY9P(f4j)
		}
	}
	function bEZ9Q(bN5S) {
		var W5b = bN5S.action,
			t4x = bN5S.type,
			C5H = bN5S.id,
			dI6C = bN5S.from,
			j4n = bN5S.data,
			rw1x = bN5S.order,
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
					from: dI6C,
					data: j4n,
					node: bN5S.node
				}
			};
		if (W5b != "play" && W5b != "addto" || !t4x) return;
		if (window.GRef && GRef == "mail") {
			l4p.Pa8S(t4x, C5H, W5b);
			return
		}
		switch (t4x) {
		case 13:
			e4i.key = "track_playlist-" + C5H;
			nu0x.nr9i(e4i);
			break;
		case 17:
			e4i.key = "program";
			e4i.id = C5H;
			AG3x.RK9B(e4i);
			if (W5b == "play") {
				v5A.bq5v("/api/dj/program/listen", {
					query: {
						id: C5H
					}
				})
			}
			break;
		case 18:
			e4i.key = "track";
			e4i.id = C5H;
			nu0x.RK9B(e4i);
			break;
		case 19:
			e4i.key = "track_album-" + C5H;
			nu0x.nr9i(e4i);
			break;
		case 24:
			e4i.key = "track_day";
			nu0x.nr9i(e4i);
			break;
		case 2:
			e4i.key = "track_artist_top-" + C5H;
			nu0x.nr9i(e4i);
			break;
		case 70:
			e4i.key = "program_djradio-" + C5H + "-" + rw1x;
			e4i.data.radioId = C5H;
			e4i.data.asc = rw1x == 2;
			AG3x.nr9i(e4i);
			break
		}
	}
	function bEX9O(i4m) {
		var m4q = [];
		k4o.bc5h(i4m, function(q4u) {
			if (q4u.mainSong) {
				q4u.mainSong.program = q4u;
				m4q.push(q4u.mainSong);
				q4u.localupdatetime = +(new Date);
				nu0x.cjD8v(q4u.mainSong);
				q4u.mainTrackId = q4u.mainSong.id;
				delete q4u.mainSong
			} else {
				var bEW9N = nu0x.eg7Z(q4u.mainTrackId);
				bEW9N && m4q.push(bEW9N)
			}
		});
		return m4q
	}
	function XT1x(i4m, e4i) {
		var qz0x = e4i.action == "play" && e4i.type != 17 && e4i.type != 18,
			fp7i = e4i.action == "play";
		if (!i4m.length) return;
		if (e4i.type == 19) {
			i4m = l4p.Jg6a(i4m, true, {
				play: true
			}, {
				source: "album",
				sourceid: e4i.id
			})
		} else {
			i4m = l4p.Jg6a(i4m, true, {
				play: true
			})
		}
		k4o.bc5h(i4m, function(q4u) {
			q4u.source = l4p.bbt2x({
				fid: e4i.from,
				fdata: e4i.data,
				type: e4i.type,
				rid: e4i.id
			}, q4u.id)
		});
		top.player.addTo(i4m, qz0x, fp7i);
		kG9x.QW9N({
			rid: e4i.id,
			type: e4i.type,
			hash: l4p.Iv6p(),
			play: fp7i,
			source: e4i.from,
			sourceid: e4i.data
		})
	}
	function bVY5d(d4h) {
		var ex7q = d4h.ext || {};
		i4m = nu0x.gQ8I(d4h.key);
		XT1x(i4m, ex7q);
		if (ex7q.type == 13 && ex7q.action == "play" && i4m && i4m.length > 0) {
			bEY9P(ex7q.node);
			v5A.bq5v("/api/playlist/update/playcount", {
				query: {
					id: ex7q.id
				}
			})
		}
	}
	function bVX5c(d4h) {
		var i4m = [nu0x.eg7Z(d4h.id)],
			be5j = i4m[0],
			pJ0x = l4p.oK0x(be5j),
			rI1x = be5j.privilege || {};
		if (pJ0x == 10) {
			l4p.tI1x(rI1x.fee || be5j.fee, be5j.id, "song", null, rI1x)
		} else if (pJ0x == 100) {
			l4p.hR8J(null, null, null, true, be5j)
		} else if (pJ0x == 11) {
			l4p.bKk1x(be5j.id, 18)
		} else {
			XT1x(i4m, d4h.ext)
		}
	}
	function bVW5b(d4h) {
		var i4m = bEX9O(AG3x.gQ8I(d4h.key));
		XT1x(i4m, d4h.ext)
	}
	function bVV5a(d4h) {
		var i4m = bEX9O([AG3x.eg7Z(d4h.id)]);
		XT1x(i4m, d4h.ext)
	}
	function ek7d() {
		top.player.tipPlay("无法播放，音乐已下线")
	}
	function bEY9P(f4j) {
		var t4x = a3x.u5z(f4j, "resType"),
			C5H = a3x.u5z(f4j, "resId"),
			J5O = t4x + "-" + C5H;
		if (bFb9S[J5O]) return;
		var bEV9M = a3x.y5D("play-count"),
			biP4T = a3x.I5N(f4j.parentNode, "nb"),
			OA8s = null;
		if (bEV9M) {
			OA8s = bEV9M
		} else {
			OA8s = !! biP4T && !! biP4T[0] ? biP4T[0] : null
		}
		if (OA8s) {
			var cw5B = OA8s.innerHTML;
			if (/^\d+$/.test(cw5B)) {
				OA8s.innerText = +cw5B + 1
			}
			bFb9S[J5O] = true
		}
	}
	l4p.bVD4H = function(f4j) {
		h4l.s4w(f4j || document.body, "click", vj2x.g4k(this))
	};
	l4p.bVC4G = function(W5b, t4x, C5H) {
		bEZ9Q({
			action: W5b,
			type: t4x,
			id: C5H
		})
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		H5M = c4g("nej.ut"),
		p4t = c4g("nm.d"),
		b4f, K5P;
	p4t.eQ7J({
		"share-all": {
			url: "/api/share/friends/resource",
			format: function(m4q, e4i) {
				this.bVB4F(m4q, e4i)
			},
			onerror: "onshareerror"
		},
		"share-sns": {
			url: "/api/share/resource/sns",
			format: function(m4q, e4i) {
				this.w5B("onshareall", e4i.result)
			},
			onerror: function(m4q, e4i) {
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
			format: function(m4q, e4i) {
				e4i.options.picUrl = m4q.picUrl;
				this.bEU9L(e4i.options, e4i.result)
			},
			onerror: function(m4q, e4i) {
				this.w5B("onshareall", e4i.result)
			}
		},
		"vid-get": {
			url: "/api/video/coversvid/get",
			format: function(Q5V, e4i) {
				this.oP0x("vid_info-" + e4i.data.nosKey, Q5V);
				return Q5V
			}
		},
		"video-submit": {
			url: "/api/cloudvideo/video/event/submit",
			filter: function(e4i) {},
			format: function(m4q, e4i) {
				e4i.data = e4i.data2;
				this.cj5o("share-all", e4i)
			},
			onerror: "onshareerror"
		}
	});
	p4t.bja4e = NEJ.C();
	b4f = p4t.bja4e.O5T(p4t.gZ8R);
	b4f.bVz4D = function() {
		var sW1x = function(Q5V, e4i) {
				e4i.times++;
				if (e4i.times > 10) {
					this.w5B("onvinfoerror", e4i.key, Q5V)
				} else {
					setTimeout(eH7A.g4k(this, e4i), e4i.times * 1e3)
				}
			};
		var xE2x = function(Q5V, e4i) {
				this.w5B("onvinfo", e4i.key, Q5V)
			};
		var eH7A = function(e4i) {
				var V5a = e4i.url;
				v5A.bq5v(V5a + "?vinfo", {
					method: "GET",
					type: "json",
					mode: 1,
					onload: xE2x.dT7M(this, e4i),
					onerror: sW1x.dT7M(this, e4i)
				})
			};
		return function(e4i) {
			e4i.times = 0;
			eH7A.call(this, e4i)
		}
	}();
	b4f.cvM1x = function() {
		var NC8u;
		var sW1x = function(Q5V, e4i) {
				if (Q5V.code > 0) {
					clearInterval(this.Ba3x);
					this.w5B("onviderror", e4i.data.nosKey)
				}
			};
		var xE2x = function(J5O, Q5V) {
				if (Q5V.vid && Q5V.covers) {
					clearInterval(this.Ba3x);
					this.w5B("onvid", J5O, Q5V)
				}
			};
		var eH7A = function(e4i) {
				if (+(new Date) - NC8u > 60 * 60 * 1e3) {
					clearInterval(this.Ba3x);
					this.w5B("onviderror", e4i.data.nosKey);
					return
				}
				e4i.onload = xE2x.g4k(this, e4i.data.nosKey);
				e4i.onerror = sW1x.g4k(this);
				this.cj5o("vid-get", e4i)
			};
		return function(e4i) {
			if (!e4i || !e4i.data) return;
			NC8u = +(new Date);
			this.Ba3x = clearInterval(this.Ba3x);
			this.Ba3x = setInterval(eH7A.g4k(this, e4i), 1e4);
			eH7A.apply(this, arguments)
		}
	}();
	b4f.bVt4x = function() {
		this.Ba3x = clearInterval(this.Ba3x)
	};
	b4f.bVB4F = function(m4q, mY9P) {
		if (m4q.event && mY9P.snsTypes) {
			if (mY9P.pics) {
				var bEO9F = [];
				for (var i = 0, len = mY9P.pics.length; i < len; i++) {
					bEO9F[i] = mY9P.pics[i].originId
				}
				this.cj5o("share_img_compound", {
					data: {
						picIds: bEO9F.join(",")
					},
					options: mY9P,
					result: m4q
				})
			} else {
				mY9P.picUrl = mY9P.picUrl;
				this.bEU9L(mY9P, m4q)
			}
		} else {
			this.w5B("onshareall", m4q)
		}
		var vO2x = p4t.hK8C.B5G();
		vO2x.gd7W(mY9P.isPub ? "pubevent" : "shareevent", {
			id: m4q.id
		})
	};
	b4f.bEU9L = function(mY9P, m4q) {
		var cm5r = {};
		cm5r.eventid = m4q.event.id;
		cm5r.eventtype = m4q.event.type;
		mY9P.picUrl && (cm5r.picUrl = mY9P.picUrl);
		cm5r.snsTypes = mY9P.snsTypes;
		cm5r.msg = mY9P.data.msg || "";
		cm5r.type = mY9P.data.type;
		mY9P.data.id && (cm5r.id = mY9P.data.id);
		this.cj5o("share-sns", {
			data: cm5r,
			result: m4q
		})
	};
	b4f.bVn4r = function(e4i) {
		var j4n = {
			type: "",
			id: 0,
			threadId: "",
			msg: "",
			actId: 0,
			pics: "",
			uuid: "publish-" + +(new Date) + k4o.mI9z(5)
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
		this.cj5o("share-all", {
			data: j4n,
			snsTypes: e4i.snsTypes,
			picUrl: e4i.picUrl,
			pics: e4i.pics,
			isPub: e4i.isPub
		})
	};
	b4f.bVl4p = function(e4i) {
		this.cj5o("share-private", e4i)
	};
	b4f.bVk4o = function(e4i) {
		this.cj5o("video-submit", e4i)
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		H5M = c4g("nej.ut"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		b4f, K5P;
	var bVj4n = {
		40: !0
	};
	p4t.eQ7J({
		"event-list": {
			url: "/api/v1/event/get",
			filter: function(e4i) {
				e4i.data.getcounts = true;
				e4i.data.pagesize = e4i.data.limit;
				if (e4i.data.offset == 0) {
					e4i.data.lasttime = -1
				}
				delete e4i.data.offset
			},
			format: function(Q5V, e4i) {
				Q5V.event = l4p.UB0x(Q5V.event, function(q4u, r4v) {
					return !bVj4n[q4u.type]
				});
				this.bVg4k(Q5V.event);
				e4i.data.lasttime = Q5V.lasttime;
				if (Q5V.event.length) {
					Q5V.event.length = e4i.limit
				}
				return {
					list: Q5V.event,
					total: Q5V.size
				}
			}
		},
		"event_latest-list": {
			url: "/api/act/event/getnews",
			format: function(Q5V, e4i) {
				return {
					list: Q5V.events,
					total: Q5V.count
				}
			}
		},
		"event-pull": {
			url: "/api/event/getnews",
			filter: function(e4i) {
				e4i.data.pagesize = 20
			},
			format: function(Q5V, e4i) {
				return Q5V.event
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
			filter: function(e4i) {
				e4i.data.time = -1;
				e4i.data.getcounts = true
			},
			format: function(Q5V, e4i) {
				Q5V.events.length = e4i.limit;
				return {
					list: Q5V.events,
					total: Q5V.size
				}
			}
		},
		"ievent-res-get": {
			url: "/api/res/status",
			format: function(m4q, e4i) {
				m4q.conf = e4i.conf;
				return m4q
			}
		},
		"ievent-like": {
			url: "/api/resource/like",
			onload: "oneventlike",
			filter: function(e4i, bb5g) {
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
			},
			format: function(m4q, e4i) {
				m4q.eid = e4i.eid;
				m4q.origin = e4i.origin;
				m4q.ext = e4i.ext;
				return m4q
			}
		},
		"ievent_user-del": {
			url: "/api/event/delete",
			format: function(m4q, e4i) {
				m4q.id = e4i.data.id;
				return m4q
			}
		},
		"event-del": {
			url: "/api/event/delete",
			filter: function(e4i, bb5g) {
				if (e4i.data.type == "nointer") {
					bb5g.url = "/api/event/rcmd/reject"
				} else if (e4i.data.transcoding) {
					bb5g.url = "/api/event/video/transcoding/delete"
				} else {
					bb5g.url = "/api/event/delete"
				}
			},
			format: function(m4q, e4i) {
				m4q.id = e4i.data.id;
				return m4q
			}
		},
		"event_activity-del": {
			url: "/api/event/delete",
			format: function(m4q, e4i) {
				m4q.id = e4i.data.id;
				return m4q
			}
		},
		"event_activity-list": {
			url: "/api/act/event",
			filter: function(e4i) {
				e4i.data.lasttime = e4i.data.lasttime || -1;
				e4i.data.pagesize = e4i.data.limit;
				e4i.data.getcounts = true;
				delete e4i.data.offset
			},
			format: function(Q5V, e4i) {
				e4i.data.lasttime = Q5V.lasttime;
				var i4m = Q5V.events;
				if (Q5V.more) i4m = this.bVe4i(i4m, e4i.data.pagesize);
				return {
					list: i4m,
					total: Q5V.size
				}
			},
			onerror: "onlisterror"
		}
	});
	p4t.xQ2x = NEJ.C();
	b4f = p4t.xQ2x.O5T(p4t.gZ8R);
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.bjC4G = function(t4x, cI6C) {
		return t4x + "-" + cI6C
	};
	b4f.cvP1x = function(e4i) {
		this.cj5o("ievent-get", e4i)
	};
	b4f.cvR1x = function(e4i) {
		this.cj5o("ievent-new-get", e4i)
	};
	b4f.cvS1x = function(e4i) {
		this.cj5o("ievent-user-get", e4i)
	};
	b4f.cvT1x = function(t4x, cI6C) {
		return this.qY1x(this.bjC4G(t4x, cI6C))
	};
	b4f.cvU1x = function(FF5K, e4i) {
		if (!FF5K || !FF5K.length) return;
		e4i = e4i || {};
		var bu5z = {
			song: 2,
			album: 4,
			playlist: 1,
			mv: 3,
			program: 5
		};
		for (var i = 0, EA4E = [], bEG9x = [], j4n; i < FF5K.length; ++i) {
			j4n = FF5K[i];
			j4n = this.qY1x(this.bjC4G(j4n.type, j4n.id));
			if (!j4n) {
				EA4E.push(FF5K[i].id);
				bEG9x.push(bu5z[FF5K[i].type] || 0)
			}
		}
		if (!EA4E.length) {
			this.w5B("oneventresload", e4i.conf);
			return
		}
		e4i.data = {
			ids: JSON.stringify(EA4E),
			types: JSON.stringify(bEG9x)
		};
		e4i.onload = this.bUO4S.g4k(this);
		this.cj5o("ievent-res-get", e4i)
	};
	b4f.bUO4S = function(m4q) {
		if (m4q.code != 200) {
			this.w5B("oneventreserror", m4q.code);
			return
		}
		var bu5z = {
			1: "playlist",
			2: "song",
			3: "mv",
			4: "album",
			5: "program"
		};
		for (var i = 0, i4m = m4q.results; i < i4m.length; ++i) {
			this.oP0x(this.bjC4G(bu5z[i4m[i].type], i4m[i].id), i4m[i])
		}
		this.w5B("oneventresload", m4q.conf)
	};
	b4f.bEC9t = function(j4n) {
		var J5O = "event-list";
		this.bbY3x(J5O, j4n);
		this.w5B("onitemadd", {
			key: J5O,
			action: "add",
			data: j4n,
			flag: -1
		})
	};
	b4f.xv2x = function(e4i) {
		this.cj5o("ievent-like", e4i)
	};
	b4f.lC9t = function(e4i) {
		this.cj5o("ievent-delete", e4i)
	};
	b4f.bVe4i = function(i4m, fX7Q) {
		for (var i = i4m.length; i < fX7Q; i++) i4m.push(null);
		return i4m
	};
	b4f.bVg4k = function(i4m) {
		var m4q = [];
		if (!i4m || !i4m.length) return;
		k4o.bc5h(i4m, function(d4h) {
			d4h.biData = this.bEA9r(d4h)
		}, this)
	};
	b4f.bEA9r = function() {
		var Vp0x = {
			32: "comment",
			33: "activity",
			34: "recomment_artist"
		},
			bUH4L = [13, 17, 18, 19, 20, 21, 22, 28, 31];
		return function(d4h) {
			var Q5V = {
				id: d4h.id,
				sourceid: d4h.user.userId,
				alg: d4h.rcmdInfo ? d4h.rcmdInfo.alg : null,
				contentType: Vp0x[d4h.type] || (k4o.cT6N(bUH4L, d4h.type) != -1 ? "user_event" : "other")
			};
			return Q5V
		}
	}();
	b4f.Bp3x = function(bUF4J, d4h) {
		var Q5V = this.bEA9r(d4h);
		Q5V.actionType = bUF4J;
		if (window.log) log("eventclick", Q5V)
	};
	b4f.cvV1x = function(e4i) {
		this.cj5o("event_latest-list", e4i)
	}
})();
(function(factory) {
	window.SparkMD5 = factory()
})(function(undefined) {
	"use strict";
	var add32 = function(a, b) {
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
		add32 = function(x, y) {
			var lsw = (x & 65535) + (y & 65535),
				msw = (x >> 16) + (y >> 16) + (lsw >> 16);
			return msw << 16 | lsw & 65535
		}
	}
	if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
		(function() {
			function clamp(val, length) {
				val = val | 0 || 0;
				if (val < 0) {
					return Math.max(val + length, 0)
				}
				return Math.min(val, length)
			}
			ArrayBuffer.prototype.slice = function(from, to) {
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
	SparkMD5.prototype.append = function(str) {
		this.appendBinary(toUtf8(str));
		return this
	};
	SparkMD5.prototype.appendBinary = function(contents) {
		this.qh0x += contents;
		this.br5w += contents.length;
		var length = this.qh0x.length,
			i;
		for (i = 64; i <= length; i += 64) {
			md5cycle(this.dH6B, md5blk(this.qh0x.substring(i - 64, i)))
		}
		this.qh0x = this.qh0x.substring(i - 64);
		return this
	};
	SparkMD5.prototype.end = function(raw) {
		var buff = this.qh0x,
			length = buff.length,
			i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			ret;
		for (i = 0; i < length; i += 1) {
			tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
		}
		this.nn9e(tail, length);
		ret = hex(this.dH6B);
		if (raw) {
			ret = hexToBinaryString(ret)
		}
		this.reset();
		return ret
	};
	SparkMD5.prototype.reset = function() {
		this.qh0x = "";
		this.br5w = 0;
		this.dH6B = [1732584193, -271733879, -1732584194, 271733878];
		return this
	};
	SparkMD5.prototype.getState = function() {
		return {
			buff: this.qh0x,
			length: this.br5w,
			hash: this.dH6B
		}
	};
	SparkMD5.prototype.setState = function(state) {
		this.qh0x = state.buff;
		this.br5w = state.length;
		this.dH6B = state.hash;
		return this
	};
	SparkMD5.prototype.destroy = function() {
		delete this.dH6B;
		delete this.qh0x;
		delete this.br5w
	};
	SparkMD5.prototype.nn9e = function(tail, length) {
		var i = length,
			tmp, lo, hi;
		tail[i >> 2] |= 128 << (i % 4 << 3);
		if (i > 55) {
			md5cycle(this.dH6B, tail);
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
		md5cycle(this.dH6B, tail)
	};
	SparkMD5.hash = function(str, raw) {
		return SparkMD5.hashBinary(toUtf8(str), raw)
	};
	SparkMD5.hashBinary = function(content, raw) {
		var hash = md51(content),
			ret = hex(hash);
		return raw ? hexToBinaryString(ret) : ret
	};
	SparkMD5.ArrayBuffer = function() {
		this.reset()
	};
	SparkMD5.ArrayBuffer.prototype.append = function(arr) {
		var buff = concatenateArrayBuffers(this.qh0x.buffer, arr, true),
			length = buff.length,
			i;
		this.br5w += arr.byteLength;
		for (i = 64; i <= length; i += 64) {
			md5cycle(this.dH6B, md5blk_array(buff.subarray(i - 64, i)))
		}
		this.qh0x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
		return this
	};
	SparkMD5.ArrayBuffer.prototype.end = function(raw) {
		var buff = this.qh0x,
			length = buff.length,
			tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			i, ret;
		for (i = 0; i < length; i += 1) {
			tail[i >> 2] |= buff[i] << (i % 4 << 3)
		}
		this.nn9e(tail, length);
		ret = hex(this.dH6B);
		if (raw) {
			ret = hexToBinaryString(ret)
		}
		this.reset();
		return ret
	};
	SparkMD5.ArrayBuffer.prototype.reset = function() {
		this.qh0x = new Uint8Array(0);
		this.br5w = 0;
		this.dH6B = [1732584193, -271733879, -1732584194, 271733878];
		return this
	};
	SparkMD5.ArrayBuffer.prototype.getState = function() {
		var state = SparkMD5.prototype.getState.call(this);
		state.buff = arrayBuffer2Utf8Str(state.buff);
		return state
	};
	SparkMD5.ArrayBuffer.prototype.setState = function(state) {
		state.buff = utf8Str2ArrayBuffer(state.buff, true);
		return SparkMD5.prototype.setState.call(this, state)
	};
	SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
	SparkMD5.ArrayBuffer.prototype.nn9e = SparkMD5.prototype.nn9e;
	SparkMD5.ArrayBuffer.hash = function(arr, raw) {
		var hash = md51_array(new Uint8Array(arr)),
			ret = hex(hash);
		return raw ? hexToBinaryString(ret) : ret
	};
	return SparkMD5
});
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		v5A = c4g("nej.j"),
		dN7G = c4g("nej.g"),
		k4o = c4g("nej.u"),
		ff7Y = c4g("nej.n"),
		H5M = c4g("nej.ut"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		iH8z = c4g("nm.x.nos"),
		D5I = c4g("nm.w");
	var bUB4F = 1024 * 256,
		bUA4E = 1024 * 1024 * 2,
		oT0x = {
			TOKEN_ERROR: -100,
			DNS_ERROR: -101
		},
		bEz9q = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : bn5s,
		pK0x = {
			MD5_DONE: .2,
			TOKEN_GET: .22,
			DNS_GET: .24,
			UPLOADED: 1
		},
		ot0x = {
			AUDIO: "audio",
			IMAGE: "image",
			TXT: "txt",
			RAR: "rar",
			OTHER: "other",
			VIDEO: "video"
		};
	var mX9O = {};
	var vO2x = p4t.hK8C.B5G();
	iH8z.cvX1x = function() {
		return ot0x
	};
	var bUo4s = function() {
			return k4o.mI9z(6) + +(new Date)
		};
	var FD5I = function(jn8f, e4i) {
			if (!mX9O[e4i.taskId]) {
				return
			}(e4i.onuploading || bn5s).call(this, jn8f)
		};
	var bkw5B = function(P5U) {
			var bUn4r = P5U.md5,
				dW7P = P5U.file,
				bUl4p = bUn4r + dW7P.size;
			return "nos_file_hash_" + bUl4p
		};
	var bUd4h = function(P5U) {
			var J5O = bkw5B(P5U),
				j4n = v5A.bLc1x(J5O, "{}");
			try {
				j4n = JSON.parse(j4n)
			} catch (e) {
				j4n = {}
			}
			return j4n
		};
	var bUa4e = function(P5U, e4i) {
			if (!P5U.md5) {
				return
			}
			var J5O = bkw5B(P5U),
				j4n = v5A.bLc1x(J5O, "{}");
			try {
				j4n = JSON.parse(j4n)
			} catch (e) {
				j4n = {}
			}
			NEJ.X(j4n, e4i);
			v5A.uG2x(J5O, JSON.stringify(j4n))
		};
	var bTV4Z = function(P5U) {
			var J5O = bkw5B(P5U);
			v5A.Py8q(J5O)
		};
	var bTS4W = function(P5U, gf7Y) {
			var V5a = P5U.urls[Math.min(P5U.urlIndex, P5U.urls.length - 1)],
				dW7P = P5U.file,
				ld9U = P5U.bucket,
				mF9w = P5U.objectKey,
				eo7h = P5U.token,
				bL5Q = P5U.context,
				oe0x = {},
				MJ7C = bEz9q.call(dW7P, P5U.beg, P5U.end),
				bw5B = {
					offset: P5U.beg,
					complete: P5U.lastChunk || false,
					version: "1.0"
				};
			if (bL5Q) {
				bw5B.context = bL5Q
			}
			oe0x["x-nos-token"] = eo7h;
			oe0x[dN7G.vQ2x] = dW7P.type;
			P5U.reqId = v5A.bq5v(V5a + "/" + ld9U + "/" + mF9w, {
				type: "json",
				method: "POST",
				headers: oe0x,
				query: bw5B,
				data: MJ7C,
				onload: gf7Y.onload,
				onerror: gf7Y.onerror
			})
		};
	var bTQ4U = function(m4q, P5U, e4i) {
			m4q = {
				code: 200,
				fileName: e4i.file.name,
				size: e4i.file.size,
				type: e4i.file.type,
				bucket: P5U.bucket,
				docId: P5U.docId,
				objectKey: P5U.objectKey,
				url: "//nos.netease.com/" + P5U.bucket + "/" + P5U.objectKey
			};
			bTV4Z(P5U);
			if (!mX9O[e4i.taskId]) {
				return
			}
			delete mX9O[e4i.taskId];
			vO2x.gd7W("sysaction", {
				type: "nosuploadsuccess",
				location: location.href,
				result: JSON.stringify(m4q)
			});
			(e4i.onsuccess || bn5s).call(this, m4q)
		};
	var bTJ4N = function(m4q, e4i) {
			(e4i.onerror || bn5s).call(this, m4q)
		};
	var bTI4M = function(m4q, P5U, e4i) {
			P5U.context = m4q.context;
			P5U.beg = m4q.offset;
			var jn8f = P5U.beg / P5U.file.size;
			bUa4e(P5U, {
				bucket: P5U.bucket,
				objectKey: P5U.objectKey,
				token: P5U.token,
				context: P5U.context,
				beg: P5U.beg,
				updateTime: +(new Date)
			});
			jn8f = pK0x.DNS_GET + (pK0x.UPLOADED - pK0x.DNS_GET) * jn8f;
			FD5I(jn8f, e4i);
			if (P5U.lastChunk) {
				bTQ4U(m4q, P5U, e4i)
			} else {
				Yw1x(P5U, e4i)
			}
		};
	var bTH4L = function(m4q, P5U, e4i) {
			vO2x.gd7W("sysaction", {
				type: "noschunkuploaderror",
				location: location.href,
				code: m4q.data,
				body: m4q.extData,
				ext: JSON.stringify(P5U),
				timging: +(new Date) - P5U.chuckUploadStartTime
			});
			if (P5U.urlIndex < Math.max(P5U.urls.length - 1, 5)) {
				P5U.urlIndex++;
				Yw1x(P5U, e4i)
			} else {
				bTJ4N(m4q, e4i)
			}
		};
	var Yw1x = function(P5U, e4i) {
			if (!P5U || P5U.step == -1) {
				return
			}
			P5U.end = P5U.beg + bUB4F;
			if (P5U.end >= P5U.file.size) {
				P5U.end = P5U.file.size;
				P5U.lastChunk = true
			}
			P5U.chuckUploadStartTime = +(new Date);
			bTS4W(P5U, {
				onload: bTI4M.dT7M(this, P5U, e4i),
				onerror: bTH4L.dT7M(this, P5U, e4i)
			})
		};
	var bTF4J = function(m4q, P5U, e4i) {
			P5U.beg = m4q.offset;
			var jn8f = P5U.beg / P5U.file.size;
			jn8f = pK0x.DNS_GET + (pK0x.UPLOADED - pK0x.DNS_GET) * jn8f;
			FD5I(jn8f, e4i);
			Yw1x(P5U, e4i)
		};
	var bTB4F = function(m4q, P5U, e4i) {
			P5U.beg = 0;
			delete P5U.context;
			bld5i(P5U, e4i)
		};
	var bEd9U = function(Mi7b, P5U, e4i) {
			P5U.lastChunk = false;
			P5U.urls = Mi7b;
			P5U.urlIndex = 0;
			FD5I(pK0x.DNS_GET, e4i);
			if (P5U.fromExist) {
				delete P5U.fromExist;
				var V5a = P5U.urls[Math.min(P5U.urlIndex, P5U.urls.length - 1)],
					ld9U = P5U.bucket,
					mF9w = P5U.objectKey,
					eo7h = P5U.token,
					bL5Q = P5U.context,
					oe0x = {},
					bw5B = {
						context: bL5Q,
						version: "1.0"
					};
				oe0x["x-nos-token"] = eo7h;
				P5U.reqId = v5A.bq5v(V5a + "/" + ld9U + "/" + mF9w + "?uploadContext", {
					type: "json",
					method: "GET",
					headers: oe0x,
					query: bw5B,
					onload: bTF4J.dT7M(this, P5U, e4i),
					onerror: bTB4F.dT7M(this, P5U, e4i)
				})
			} else {
				P5U.beg = 0;
				Yw1x(P5U, e4i)
			}
		};
	var bTy4C = function(m4q, P5U, e4i) {
			m4q.code = oT0x.DNS_ERROR;
			(e4i.onerror || bn5s).call(this, m4q)
		};
	var bEc9T = function(j4n, e4i) {
			var m4q = j4n.result || {},
				ld9U = m4q.bucket,
				mF9w = m4q.objectKey,
				eo7h = m4q.token,
				P5U = mX9O[e4i.taskId];
			if (!ld9U || !mF9w || !eo7h || !P5U) {
				m4q.code = oT0x.TOKEN_ERROR;
				(e4i.onerror || bn5s).call(this, m4q);
				return
			}
			P5U.bucket = ld9U;
			P5U.objectKey = mF9w;
			P5U.docId = m4q.docId;
			P5U.token = eo7h;
			FD5I(pK0x.TOKEN_GET, e4i);
			if (location.protocol == "https:") {
				bEd9U(["//nosup-hz1.127.net"], P5U, e4i)
			} else {
				P5U.reqId = iH8z.bTw4A({
					bucket: ld9U,
					onload: bEd9U.dT7M(this, P5U, e4i),
					onerror: bTy4C.dT7M(this, P5U, e4i)
				})
			}
			P5U.step = 1
		};
	var bTp4t = function(m4q, e4i) {
			m4q.code = oT0x.TOKEN_ERROR;
			(e4i.onerror || bn5s).call(this, m4q)
		};
	var bld5i = function(P5U, e4i) {
			var dW7P = e4i.file,
				eS7L = dW7P.name || "",
				ex7q = eS7L.split(".").pop();
			iH8z.YC1x(NEJ.X({
				filename: eS7L,
				ext: ex7q,
				onload: bEc9T.dT7M(this, e4i),
				onerror: bTp4t.dT7M(this, e4i)
			}, e4i, function(q4u) {
				return k4o.fZ7S(q4u) || k4o.ks9j(q4u)
			}))
		};
	var bTo4s = function(P5U, e4i) {
			if (!P5U || P5U.step == -1) {
				return
			}
			P5U.md5 = P5U.spark.end();
			var Fu5z = bUd4h(P5U) || {},
				ld9U = Fu5z.bucket,
				mF9w = Fu5z.objectKey,
				eo7h = Fu5z.token;
			if (!ld9U || !mF9w || !eo7h) {
				bld5i(P5U, e4i)
			} else {
				P5U.context = Fu5z.context;
				P5U.beg = Fu5z.beg;
				P5U.fromExist = true;
				bEc9T({
					result: Fu5z
				}, e4i)
			}
		};
	var bTn4r = function(BX4b, P5U, e4i) {
			if (!P5U || P5U.step == -1) {
				return
			}
			P5U.beg = P5U.end;
			var jn8f = P5U.beg / P5U.file.size;
			jn8f = 0 + pK0x.MD5_DONE * jn8f;
			FD5I(jn8f, e4i);
			P5U.spark.append(BX4b.result);
			if (P5U.lastChunk) {
				bTo4s(P5U, e4i)
			} else {
				bDY9P(P5U, e4i)
			}
		};
	var bTi4m = function(m4q, P5U, e4i) {
			P5U.md5 = "";
			bld5i(P5U, e4i)
		};
	var bDY9P = function(P5U, e4i) {
			if (!P5U || P5U.step == -1) {
				return
			}
			P5U.end = P5U.beg + bUA4E;
			if (P5U.end >= P5U.file.size) {
				P5U.end = P5U.file.size;
				P5U.lastChunk = true
			}
			var BX4b = new FileReader;
			BX4b.onload = bTn4r.g4k(this, BX4b, P5U, e4i);
			BX4b.onerror = bTi4m.g4k(this, BX4b, P5U, e4i);
			BX4b.readAsArrayBuffer(bEz9q.call(P5U.file, P5U.beg, P5U.end))
		};
	iH8z.gp7i = function(e4i) {
		var dW7P = e4i.file,
			eS7L = dW7P.name || "",
			ex7q = eS7L.split(".").pop(),
			Ca4e = bUo4s();
		e4i.taskId = Ca4e;
		mX9O[Ca4e] = {
			step: 0
		};
		FD5I(0, e4i);
		var P5U = mX9O[Ca4e];
		P5U.id = Ca4e;
		P5U.file = dW7P;
		P5U.beg = 0;
		P5U.lastChunk = false;
		P5U.spark = new SparkMD5.ArrayBuffer;
		var bTc4g = e4i.onerror || bn5s;
		e4i.onerror = function() {
			if (!mX9O[Ca4e]) {
				return
			}
			delete mX9O[Ca4e];
			bTc4g.apply(this, arguments)
		};
		vO2x.gd7W("sysaction", {
			type: "nosuploadstart",
			location: location.href
		});
		bDY9P(P5U, e4i);
		return Ca4e
	};
	iH8z.jk8c = function(C5H) {
		var P5U = mX9O[C5H];
		if (P5U) {
			if (P5U.step == 0) {
				delete mX9O[C5H]
			} else {
				P5U.step = -1;
				if (P5U.reqId) {
					v5A.jk8c(P5U.reqId)
				}
				delete mX9O[C5H]
			}
		}
	};
	iH8z.YC1x = function() {
		var vw2x = function(m4q, e4i) {
				(e4i.onload || bn5s).call(this, m4q)
			};
		var yC3x = function(m4q, e4i) {
				(e4i.onerror || bn5s).call(this, m4q)
			};
		var bDV9M = JSON.stringify({
			code: 200,
			size: "$(ObjectSize)"
		});
		return function(e4i) {
			var YL1x = e4i.returnBody || bDV9M;
			if (k4o.ks9j(YL1x)) {
				try {
					JSON.stringify(YL1x)
				} catch (e) {
					YL1x = bDV9M
				}
			}
			return v5A.bq5v("/api/nos/token/alloc", {
				method: "POST",
				type: "json",
				query: {
					filename: e4i.filename || "",
					ext: e4i.ext || "",
					type: e4i.type || ot0x.OTHER,
					bucket: e4i.bucket || "",
					local: e4i.local || false,
					nos_product: e4i.nosProduct || 0,
					return_body: YL1x
				},
				onload: vw2x.dT7M(this, e4i),
				onerror: yC3x.dT7M(this, e4i)
			})
		}
	}();
	iH8z.bTw4A = function() {
		var bSZ4d = "//wanproxy.127.net/lbs";
		var vw2x = function(m4q, e4i) {
				if (m4q.lbs) {}
				var Mi7b = m4q.upload;
				if (!Mi7b || !Mi7b.length) {
					yC3x(m4q, e4i)
				}(e4i.onload || bn5s).call(this, Mi7b)
			};
		var yC3x = function(m4q, e4i) {
				(e4i.onerror || bn5s).call(this, m4q)
			};
		return function(e4i) {
			var ld9U = e4i.bucket;
			return v5A.bq5v(bSZ4d, {
				method: "GET",
				type: "json",
				query: {
					version: "1.0",
					bucketname: ld9U
				},
				onload: vw2x.dT7M(this, e4i),
				onerror: yC3x.dT7M(this, e4i)
			})
		}
	}();
	iH8z.YQ2x = function() {
		return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && ( !! Blob.prototype.webkitSlice || !! Blob.prototype.mozSlice || !! Blob.prototype.slice || false)
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		ch5m = c4g("nej.ut"),
		bF5K = c4g("nej.ui"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		iH8z = c4g("nm.x.nos"),
		F5K = c4g("nm.m"),
		n4r = c4g("nm.l"),
		D5I = c4g("nm.w"),
		b4f, K5P;
	var ge7X = a3x.hX8P('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
	D5I.bDQ9H = NEJ.C();
	b4f = D5I.bDQ9H.O5T(bF5K.er7k);
	b4f.bZ5e = function() {
		this.ca5f = ge7X
	};
	b4f.bR5W = function() {
		this.cb5g();
		this.bx5C = this.o4s;
		this.gO8G = a3x.I5N(this.o4s, "j-file")[0];
		h4l.s4w(this.gO8G, "change", this.pX0x.g4k(this))
	};
	b4f.bj5o = function(e4i) {
		e4i = e4i || {};
		this.bk5p(e4i);
		this.gO8G.accept = e4i.accept || "*";
		this.uJ2x = e4i
	};
	b4f.YT2x = function() {
		return a3x.kJ9A(this.gO8G)
	};
	b4f.pX0x = function(d4h) {
		if (this.gO8G.value == "") return;
		var jL8D = this.gO8G.value.split("\\"),
			eS7L = jL8D.length > 0 ? jL8D[jL8D.length - 1] : jL8D[0],
			nR0x = (this.gO8G.files || [{}])[0];
		var fQ7J = {
			files: this.gO8G.files,
			filename: eS7L,
			size: nR0x.size,
			cancelUpload: false
		};
		this.w5B("onchange", fQ7J);
		if (fQ7J.cancelUpload) {
			this.gO8G.value = "";
			return
		}
		if (fQ7J.stopped) {
			return
		}
		this.Li6c()
	};
	b4f.Li6c = function() {
		if (this.gO8G.value == "") return;
		var jL8D = this.gO8G.value.split("\\"),
			eS7L = jL8D.length > 0 ? jL8D[jL8D.length - 1] : jL8D[0],
			ex7q = (eS7L.split(".") || []).pop(),
			nR0x = (this.gO8G.files || [{}])[0],
			Cq4u = (nR0x.type || "").split("/").shift();
		if (nR0x.size > 100 * 1024 * 1024) {
			return this.mj9a("onerror", {
				code: -200
			})
		}
		this.w5B("onuploading", 0);
		this.bDM9D = iH8z.YC1x(NEJ.X({
			onload: this.Lg6a.dT7M(this, eS7L),
			onerror: this.mj9a.g4k(this)
		}, this.uJ2x, function(q4u) {
			return k4o.fZ7S(q4u) || k4o.ks9j(q4u)
		}))
	};
	b4f.Lg6a = function(bW5b, eS7L) {
		var m4q = bW5b.result || {},
			ld9U = m4q.bucket,
			mF9w = m4q.objectKey,
			eo7h = m4q.token;
		if (!ld9U || !mF9w || !eo7h) {
			bW5b.code = -100;
			this.mj9a.call(this, bW5b);
			return
		}
		var nR0x = (this.gO8G.files || [{}])[0];
		var jV8N = a3x.cP6J(this.bx5C);
		jV8N[0].value = mF9w;
		jV8N[1].value = eo7h;
		if (nR0x.type && nR0x.type.indexOf("audio") == 0) {
			jV8N[3].value = "audio/mpeg"
		} else {
			jV8N[3].value = nR0x.type || ""
		}
		this.bx5C.action = "//nos.netease.com/" + ld9U;
		this.Cu4y = m4q;
		this.pr0x = eS7L;
		this.w5B("onuploading", .2);
		this.gp7i()
	};
	b4f.gp7i = function() {
		this.bDM9D = v5A.gp7i(this.bx5C, {
			type: "json",
			onload: this.tB1x.g4k(this),
			onerror: this.mj9a.g4k(this),
			onuploading: this.YU2x.g4k(this)
		})
	};
	b4f.jk8c = function() {
		v5A.jk8c(this.bDM9D);
		this.bx5C.reset()
	};
	b4f.tB1x = function(bW5b) {
		var eo7h = this.Cu4y,
			eS7L = this.pr0x,
			nR0x = (this.gO8G.files || [{}])[0],
			kD9u = {
				code: 200,
				fileName: eS7L,
				size: nR0x.size,
				bucket: eo7h.bucket,
				docId: eo7h.docId,
				objectKey: eo7h.objectKey,
				url: "//nos.netease.com/" + eo7h.bucket + "/" + eo7h.objectKey
			};
		if (!bW5b) {
			bW5b = kD9u
		}
		if (!bW5b.code || bW5b.code == 200) {
			this.w5B("onsuccess", NEJ.X(kD9u, bW5b))
		} else {
			this.w5B("onerror", bW5b)
		}
		this.bx5C.reset()
	};
	b4f.mj9a = function(bW5b) {
		this.w5B("onerror", bW5b);
		this.bx5C.reset()
	};
	b4f.YU2x = function(jn8f) {
		this.w5B("onuploading", .2 + jn8f.loaded / jn8f.total * .8)
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		ch5m = c4g("nej.ut"),
		bF5K = c4g("nej.ui"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		iH8z = c4g("nm.x.nos"),
		F5K = c4g("nm.m"),
		n4r = c4g("nm.l"),
		D5I = c4g("nm.w"),
		b4f, K5P;
	D5I.KZ6T = NEJ.C();
	b4f = D5I.KZ6T.O5T(ch5m.cz5E);
	b4f.bj5o = function(e4i) {
		e4i = e4i || {};
		this.bk5p(e4i);
		this.YV2x = D5I.bDQ9H.B5G(NEJ.X({
			parent: e4i.parent,
			onchange: this.pX0x.g4k(this),
			onuploading: this.w5B.g4k(this, "onuploading"),
			onsuccess: this.w5B.g4k(this, "onsuccess"),
			onerror: this.w5B.g4k(this, "onerror")
		}, e4i, function(q4u) {
			return k4o.fZ7S(q4u) || k4o.ks9j(q4u)
		}));
		if (e4i.multiple && iH8z.YQ2x()) {
			a3x.fR7K(this.YV2x.YT2x(), "multiple", true)
		}
		this.uJ2x = e4i
	};
	b4f.pX0x = function(e4i) {
		var eS7L = e4i.filename,
			ex7q = (eS7L.split(".") || []).pop();
		this.bDL9C = (e4i.files || [{}])[0];
		this.w5B("onchange", e4i);
		if (iH8z.YQ2x() && !e4i.stopped && !e4i.cancelUpload) {
			this.Li6c(true);
			e4i.stopped = true
		}
	};
	b4f.YT2x = function() {
		return this.YV2x.YT2x()
	};
	b4f.bSH4L = function() {
		return this.bDL9C
	};
	b4f.Li6c = function(ey7r, dW7P) {
		dW7P = dW7P || this.bDL9C;
		if (iH8z.YQ2x()) {
			this.bDK9B = iH8z.gp7i(NEJ.X({
				file: dW7P,
				local: this.uJ2x.bucket && this.uJ2x.bucket.length,
				onuploading: this.w5B.g4k(this, "onuploading"),
				onsuccess: this.w5B.g4k(this, "onsuccess"),
				onerror: this.w5B.g4k(this, "onerror")
			}, this.uJ2x, function(q4u) {
				return k4o.fZ7S(q4u) || k4o.ks9j(q4u)
			}));
			return this.bDK9B
		} else if (!ey7r) {
			this.YV2x.Li6c()
		}
	};
	b4f.jk8c = function(C5H) {
		C5H = C5H || this.bDK9B;
		if (C5H) {
			iH8z.jk8c(C5H)
		}
		this.YV2x.jk8c()
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		dN7G = c4g("nej.g"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		ff7Y = c4g("nej.n"),
		H5M = c4g("nej.ut"),
		bd5i = c4g("nej.ui"),
		D5I = c4g("nm.w"),
		n4r = c4g("nm.l"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		L5Q = c4g("nm.x.f"),
		iH8z = c4g("nm.x.nos"),
		b4f, K5P, bmH5M = {
			0: "",
			"-1": "不能添加重复图片",
			"-10": "最多只能添加9张",
			"-3": "请选择不超过5M的图片"
		},
		bmI5N = 5 * 1024 * 1024,
		cvZ1x = 80,
		bDJ9A = /\.(bmp|jpg|jpeg|png|gif)$/i;
	D5I.bDH9y = NEJ.C();
	b4f = D5I.bDH9y.O5T(H5M.vP2x);
	b4f.bqx6r = function() {
		return {
			x: this.zg3x.clientWidth - this.o4s.offsetWidth,
			y: this.zg3x.clientHeight - this.o4s.offsetHeight
		}
	};
	D5I.bmV5a = NEJ.C();
	b4f = D5I.bmV5a.O5T(bd5i.er7k);
	b4f.bZ5e = function() {
		this.ca5f = "m-xwgt-share-upload"
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.YZ2x = i4m.shift();
		this.Fl5q = i4m.shift();
		this.Ko6i = i4m.shift();
		this.bDG9x = {
			onchange: this.bDE9v.dT7M(this, 0),
			onerror: this.ek7d.g4k(this),
			onsuccess: this.tg1x.g4k(this),
			multiple: true,
			parent: this.Fl5q,
			accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
		};
		this.bnf5k = {
			onchange: this.bDE9v.dT7M(this, 1),
			onerror: this.ek7d.g4k(this),
			onsuccess: this.tg1x.g4k(this),
			multiple: true,
			accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
		};
		this.bSq4u = D5I.KZ6T.B5G(this.bDG9x)
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.bnf5k.parent = e4i.button;
		this.Fi5n && this.Fi5n.S5X();
		this.Fi5n = D5I.KZ6T.B5G(this.bnf5k);
		this.o4s.style.display = "none";
		if ( !! this.eA7t) {
			for (var i = this.eA7t.length - 1; i >= 0; i--) {
				a3x.cJ6D(this.eA7t[i].element, false);
				if (this.eA7t[i].dragger) this.eA7t[i].dragger.S5X()
			}
		}
		this.eA7t = [];
		if (this.yX3x) {
			clearTimeout(this.yX3x)
		}
		this.Zm2x(0);
		this.Jt6n = 0;
		this.bS5X([
			[this.bDG9x.parent, "click", this.bDw9n.g4k(this)],
			[this.bnf5k.parent, "click", this.bDw9n.g4k(this)]
		])
	};
	b4f.bC5H = function() {
		h4l.hD8v(this.rK1x, "click");
		if ( !! this.eA7t) {
			for (var i = this.eA7t.length - 1; i >= 0; i--) {
				a3x.cJ6D(this.eA7t[i].element, false);
				if (this.eA7t[i].dragger) this.eA7t[i].dragger.S5X()
			}
		}
		this.eA7t = [];
		if (this.yX3x) {
			clearTimeout(this.yX3x)
		}
		this.yX3x = 0;
		this.Fi5n && this.Fi5n.S5X();
		delete this.Fi5n;
		this.bG5L()
	};
	b4f.bDw9n = function(d4h) {
		if (!iH8z.YQ2x() && this.eA7t.doing) {
			h4l.bh5m(d4h)
		}
	};
	b4f.bDE9v = function(e4i, r4v) {
		var rJ1x = e4i.files,
			io8g;
		e4i.stopped = true;
		if (!rJ1x) {
			if (e4i.filename) {
				rJ1x = [{
					name: e4i.filename,
					isIE: true
				}]
			}
		}
		for (var i = 0, len = rJ1x.length; i < len; i++) {
			if (!bDJ9A.test(rJ1x[i].name)) {
				this.bnI5N({
					path: rJ1x[i].name,
					index: r4v,
					status: -4,
					fail: "这不是<br>图片"
				})
			} else if (rJ1x[i].size > bmI5N) {
				this.bnK5P(-3);
				this.bnI5N({
					path: rJ1x[i].name,
					index: r4v,
					status: -3,
					fail: "上传<br>失败"
				})
			} else {
				this.bnI5N({
					path: rJ1x[i].name,
					file: rJ1x[i],
					index: r4v,
					status: 0
				})
			}
		}
	};
	b4f.bnI5N = function(rF1x) {
		if (this.eA7t.length >= 9) {
			this.bnK5P(-10, 3e3, this.bDv9m.g4k(this));
			return
		}
		this.bSl4p(rF1x);
		this.eA7t.push(rF1x);
		if ( !! this.eA7t.length) {
			this.o4s.style.display = ""
		}
		if (this.eA7t.length >= 9) {
			this.Fl5q.style.display = "none"
		} else {
			this.Fl5q.style.display = ""
		}
		this.Ff5k()
	};
	b4f.Ff5k = function() {
		var bnR5W = -1,
			bDu9l = 0;
		for (var i = 0, l = this.eA7t.length; i < l; i++) {
			if (this.eA7t[i].status == 1) {
				return
			}
			if (this.eA7t[i].status == 0 && bnR5W < 0) {
				bnR5W = i
			}
			if (this.eA7t[i].status == 2 || this.eA7t[i].status < 0) {
				bDu9l++
			}
		}
		var q4u = this.eA7t[bnR5W];
		if (q4u) {
			(q4u.index == 0 ? this.bSq4u : this.Fi5n).Li6c(false, q4u.file);
			q4u.status = 1;
			this.eA7t.doing = q4u;
			this.w5B("onstartupload", {})
		} else if (bDu9l == this.eA7t.length) {
			this.w5B("onfinishupload", {})
		}
	};
	b4f.bnV5a = function() {
		return this.eA7t.doing || {}
	};
	b4f.ek7d = function(d4h) {
		var rF1x = this.bnV5a();
		rF1x.status = -4;
		rF1x.fail = "上传<br>失败";
		this.bDt9k(rF1x);
		this.eA7t.doing = null;
		this.Ff5k()
	};
	b4f.tg1x = function(d4h) {
		var rF1x = this.bnV5a(),
			ft7m = d4h.fileName.match(bDJ9A);
		rF1x.picUrl = d4h.url;
		v5A.bq5v("/upload/event/img/v1", {
			query: {
				imgid: d4h.docId,
				format: ft7m[1]
			},
			type: "json",
			onload: this.bDs9j.g4k(this),
			onerror: this.bDs9j.g4k(this)
		})
	};
	b4f.bDs9j = function(d4h) {
		if (d4h && d4h.code == 200 && d4h.picInfo) {
			var rF1x = this.bnV5a();
			rF1x.status = 2;
			var bv5A = NEJ.X({}, d4h.picInfo);
			bv5A.originId = bv5A.originIdStr;
			bv5A.squareId = bv5A.squareIdStr;
			bv5A.rectangleId = bv5A.rectangleIdStr;
			bv5A.pcSquareId = bv5A.pcSquareIdStr;
			bv5A.pcRectangleId = bv5A.pcRectangleIdStr;
			bv5A.originJpgId = bv5A.originJpgIdStr || bv5A.originJpgId;
			rF1x.picInfo = bv5A;
			this.bDt9k(rF1x);
			this.eA7t.doing = null;
			this.Ff5k()
		} else {
			this.ek7d(d4h)
		}
	};
	b4f.bnK5P = function(r4v, jM8E, gf7Y) {
		if (this.Jt6n < r4v) {
			return
		}
		if (this.yX3x) {
			clearTimeout(this.yX3x);
			this.yX3x = 0
		}
		if (jM8E) {
			this.Ko6i.innerText = bmH5M[r4v * 1];
			this.Jt6n = r4v;
			this.yX3x = setTimeout(this.Zm2x.g4k(this, r4v, gf7Y), jM8E)
		} else {
			this.Ko6i.innerText = bmH5M[r4v];
			this.Jt6n = r4v
		}
		this.Ko6i.style.display = ""
	};
	b4f.Zm2x = function(r4v, gf7Y) {
		if (r4v && this.Jt6n !== r4v) {
			return
		}
		this.Jt6n = 0;
		this.Ko6i.innerText = bmH5M[0];
		this.Ko6i.style.display = "none";
		gf7Y && gf7Y()
	};
	b4f.bSl4p = function(dW7P) {
		var j4n = {};
		if (dW7P.fail) {
			j4n.fail = dW7P.fail
		}
		var dy6s = a3x.bU5Z("m-xwgt-share-upload-preview", j4n);
		dW7P.element = a3x.nf9W(dy6s);
		h4l.s4w(a3x.I5N(dW7P.element, "del")[0], "mousedown", this.bSg4k.g4k(this, dW7P), false);
		this.YZ2x.insertBefore(dW7P.element, this.YZ2x.lastElementChild);
		dW7P.dragger = D5I.bDH9y.B5G({
			view: this.YZ2x.parentNode,
			body: dW7P.element,
			overflow: false,
			direction: 0,
			isRelative: 1,
			ondragstart: this.NH8z.g4k(this, dW7P),
			onchange: this.bSf4j.g4k(this, dW7P),
			ondragend: this.bqe6Y.g4k(this, dW7P)
		})
	};
	b4f.bDt9k = function(dW7P) {
		if (!dW7P || !dW7P.element) {
			return false
		}
		var j4n = {};
		if (dW7P.fail) {
			j4n.fail = dW7P.fail
		} else {
			j4n.url = dW7P.picUrl
		}
		a3x.z5E(dW7P.element, "z-fail");
		dW7P.element.firstChild.outerHTML = a3x.bU5Z("m-xwgt-share-upload-preview-img", j4n)
	};
	b4f.NH8z = function(q4u, jy8q) {
		a3x.z5E(q4u.element, "z-sel")
	};
	b4f.bSf4j = function(q4u, jy8q) {
		var cwa1x, gx7q = this.eA7t.length - 1,
			mL9C;
		for (var i = gx7q; i >= 0; i--) {
			a3x.x5C(this.eA7t[i].element, "z-jump");
			if (this.eA7t[i] == q4u) {
				mL9C = i
			} else {
				a3x.fE7x(this.eA7t[i].element, {
					left: "",
					top: ""
				})
			}
		}
		var OR8J = {
			x: 46 + 92 * (mL9C % 5) + jy8q.left,
			y: 46 + 92 * (mL9C / 5 >> 0) + jy8q.top
		};
		var bog6a = OR8J.x / 92 >> 0,
			boh6b = OR8J.y / 92 >> 0,
			xG2x = Math.max(0, Math.min(gx7q, boh6b * 5 + bog6a));
		if (xG2x == mL9C) {
			return
		}
		var bSd4h = xG2x < mL9C;
		for (var i = Math.min(xG2x, mL9C); i <= Math.max(xG2x, mL9C); i++) {
			if (i !== mL9C) {
				var bDr9i = i % 5;
				if (bSd4h) {
					if (bDr9i == 4) {
						a3x.fE7x(this.eA7t[i].element, {
							left: "-368px",
							top: "92px"
						})
					} else {
						a3x.fE7x(this.eA7t[i].element, {
							left: "92px",
							top: ""
						})
					}
				} else {
					if (bDr9i == 0) {
						a3x.fE7x(this.eA7t[i].element, {
							left: "368px",
							top: "-92px"
						})
					} else {
						a3x.fE7x(this.eA7t[i].element, {
							left: "-92px",
							top: ""
						})
					}
				}
			}
		}
	};
	b4f.bqe6Y = function(q4u, jy8q) {
		var cys2x, gx7q = this.eA7t.length - 1,
			mL9C;
		for (var i = gx7q; i >= 0; i--) {
			a3x.fE7x(this.eA7t[i].element, {
				left: "",
				top: ""
			});
			if (this.eA7t[i] == q4u) {
				mL9C = i
			}
		}
		a3x.x5C(q4u.element, "z-sel");
		var OR8J = {
			x: 46 + 92 * (mL9C % 5) + jy8q.left,
			y: 46 + 92 * (mL9C / 5 >> 0) + jy8q.top
		};
		var bog6a = OR8J.x / 92 >> 0,
			boh6b = OR8J.y / 92 >> 0,
			xG2x = Math.max(0, Math.min(gx7q, boh6b * 5 + bog6a));
		if (xG2x == mL9C) {
			return
		}
		this.YZ2x.insertBefore(q4u.element, (this.eA7t[xG2x + (xG2x > mL9C ? 1 : 0)] || {}).element || this.Fl5q);
		this.eA7t.splice(mL9C, 1);
		this.eA7t.splice(xG2x, 0, q4u)
	};
	b4f.bSg4k = function(q4u, d4h) {
		a3x.cJ6D(q4u.element, false);
		if (q4u.dragger) q4u.dragger.S5X();
		delete q4u.dragger;
		var r4v = -1;
		for (var i = this.eA7t.length - 1; i >= 0; i--) {
			if (this.eA7t[i] == q4u) {
				r4v = i;
				break
			}
		}
		this.eA7t.splice(r4v, r4v >= 0 ? 1 : 0);
		delete q4u;
		if (this.eA7t.length >= 9) {
			this.Fl5q.style.display = "none"
		} else {
			this.Fl5q.style.display = ""
		}
		if (!this.eA7t.length) {
			this.o4s.style.display = "none";
			this.Zm2x(0)
		} else {
			this.bDv9m()
		}
		if (this.eA7t.doing == q4u) {
			this.eA7t.doing = null
		}
		this.Ff5k()
	};
	b4f.bDv9m = function() {
		var brE6y = false;
		for (var i = 0, len = this.eA7t.length; i < len; i++) {
			if (this.eA7t[i].status == -3) {
				brE6y = true
			}
		}
		if (brE6y) {
			this.bnK5P(-3)
		} else {
			this.Zm2x(-3)
		}
	};
	b4f.No7h = function() {
		var ed7W = [];
		for (var i = this.eA7t.length - 1; i >= 0; i--) {
			if (this.eA7t[i].status == 2) {
				ed7W.unshift(this.eA7t[i].picInfo)
			}
		}
		return ed7W
	};
	H5M.fu7n.B5G({
		element: D5I.bmV5a,
		event: ["onstartupload", "onfinishupload"]
	})
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		fb7U = NEJ.R,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		bd5i = c4g("nej.ui"),
		M5R = c4g("nej.ut"),
		b4f, K5P;
	if ( !! M5R.mP9G) return;
	M5R.mP9G = NEJ.C();
	b4f = M5R.mP9G.O5T(M5R.WU1x);
	K5P = M5R.mP9G.cf5k;
	b4f.bj5o = function(e4i) {
		this.bRW4a(e4i.more);
		this.ZJ2x = a3x.y5D(e4i.sbody);
		this.bS5X([
			[this.ZJ2x, "scroll", this.bRU4Y.g4k(this)]
		]);
		var dg6a = e4i.delta;
		if (dg6a == null) dg6a = 30;
		this.MB7u = Math.max(0, dg6a);
		var cw5B = parseInt(e4i.count) || 0;
		this.iM8E = Math.max(0, cw5B);
		var gk7d = parseInt(e4i.number) || 0;
		if (gk7d > 1 && gk7d <= cw5B) {
			this.zy3x = gk7d
		}
		this.bk5p(e4i)
	};
	b4f.bC5H = function() {
		this.bG5L();
		delete this.zw3x;
		delete this.ZJ2x;
		delete this.rq1x;
		delete this.ZL2x
	};
	b4f.yp3x = function(bi5n, br5w) {
		var bE5J = this.wj2x + (this.iM8E - 1) * this.qC0x,
			fX7Q = this.iM8E * this.qC0x;
		return K5P.yp3x.call(this, bE5J, bi5n, fX7Q, br5w)
	};
	b4f.bRW4a = function(ZM2x) {
		this.zw3x = a3x.y5D(ZM2x);
		this.bS5X([
			[this.zw3x, "click", this.nS0x.g4k(this)]
		])
	};
	b4f.boZ6T = function(E5J) {
		E5J = E5J || {};
		if (this.rq1x || !E5J) return;
		if (!E5J.scrollHeight) E5J = a3x.oz0x();
		var bi5n = a3x.hJ8B(this.ie8W),
			dg6a = bi5n.y + this.ie8W.offsetHeight - E5J.scrollTop - E5J.clientHeight,
			bpa6U = E5J.scrollHeight <= E5J.clientHeight;
		if (dg6a <= this.MB7u || bpa6U && !this.rq1x) {
			this.nS0x()
		}
	};
	b4f.bRU4Y = function(d4h) {
		if (this.rq1x) return;
		this.boZ6T(h4l.U5Z(d4h))
	};
	b4f.yo3x = function(d4h) {
		K5P.yo3x.apply(this, arguments);
		if (!d4h.stopped) {
			this.JB6v();
			var bi5n = 0;
			if (d4h.index > 1) {
				bi5n = this.wj2x + ((d4h.index - 1) * this.iM8E - 1) * this.qC0x
			}
			this.hT8L = bi5n;
			this.nS0x()
		}
	};
	b4f.bFA0x = function(e4i) {
		if ( !! this.zy3x) {
			var dg6a = e4i.offset > 0 ? this.qC0x : this.wj2x,
				fX7Q = dg6a + this.qC0x * (this.zy3x - 1);
			this.hT8L = e4i.offset + fX7Q;
			e4i.data.limit = fX7Q;
			e4i.limit = fX7Q;
			delete this.zy3x
		}
		return e4i
	};
	b4f.bft3x = function(e4i) {
		delete this.ZL2x;
		K5P.bft3x.apply(this, arguments);
		this.bDk9b()
	};
	b4f.bfB3x = function(d4h) {
		if (d4h.key != this.ir8j.key) return;
		switch (d4h.action) {
		case "refresh":
		case "append":
			delete this.ZL2x;
			break
		}
		K5P.bfB3x.apply(this, arguments)
	};
	b4f.Rf9W = function() {
		this.vX2x("onbeforelistload", "列表加载中...");
		a3x.Y5d(this.zw3x, "display", "none")
	};
	b4f.bgc4g = function(i4m, bi5n, fX7Q) {
		var br5w = i4m.length,
			bph6b = i4m.loaded ? bi5n + fX7Q >= br5w : bi5n + fX7Q > br5w;
		this.hT8L = Math.min(this.hT8L, br5w);
		a3x.Y5d(this.zw3x, "display", bph6b ? "none" : "");
		if (bph6b) this.rq1x = !0;
		if (this.iM8E > 0) {
			var bv5A = this.yp3x(bi5n, i4m.length);
			if (this.bFz0x(bv5A.index, bv5A.total)) return !0;
			var dg6a = this.wj2x - this.qC0x,
				gk7d = this.iM8E * this.qC0x;
			this.rq1x = (bi5n + fX7Q - dg6a) % gk7d == 0 || bph6b;
			a3x.Y5d(this.zw3x, "display", this.rq1x ? "none" : "");
			this.bfM3x(this.rq1x && bv5A.total > 1 ? "" : "none")
		}
	};
	b4f.bfZ4d = function() {
		this.hT8L = 0;
		this.rq1x = !0;
		this.vX2x("onemptylist", "没有列表数据！")
	};
	b4f.Ra9R = function(dy6s, jy8q) {
		this.ie8W.insertAdjacentHTML(jy8q || "beforeEnd", dy6s)
	};
	b4f.QX9O = function(gy7r) {
		this.fi7b = this.fi7b || [];
		if (k4o.en7g(gy7r)) {
			fb7U.push.apply(this.fi7b, gy7r)
		} else {
			this.fi7b.push(gy7r)
		}
	};
	b4f.Xg1x = function(d4h) {
		a3x.mu9l(this.ci5n);
		this.Qx9o(d4h, "onafteradd");
		var ey7r = d4h.flag;
		if (d4h.stopped || !ey7r) return;
		if (this.iM8E > 0) {
			this.bfP3x();
			return
		}
		this.hT8L += 1;
		ey7r == -1 ? this.bgK4O(d4h.data) : this.bFy0x(d4h.data)
	};
	b4f.Xj1x = function(d4h) {
		this.Qx9o(d4h, "onafterdelete");
		if (d4h.stopped) return;
		if (this.iM8E > 0) {
			this.bfP3x();
			return
		}
		var C5H = d4h.data[this.eM7F.pkey];
		if ( !! this.fi7b) {
			var q4u = a3x.bMg1x(C5H),
				r4v = k4o.cT6N(this.fi7b, q4u);
			if (r4v >= 0) {
				this.fi7b.splice(r4v, 1);
				this.hT8L -= 1
			}
			if ( !! q4u) q4u.S5X()
		} else {
			var f4j = a3x.y5D(this.bFK0x(C5H));
			if ( !! f4j) this.hT8L -= 1;
			a3x.cJ6D(f4j)
		}
		if (this.hT8L <= 0) this.nS0x()
	};
	b4f.bgy4C = function(bi5n, fX7Q) {
		if (bi5n != this.hT8L) return;
		if (this.RL9C()) {
			this.rq1x = !1;
			this.bDk9b()
		}
	};
	b4f.bgC4G = function(bi5n, fX7Q) {
		if (bi5n != 0) return;
		var Hg5l = this.R5W.gQ8I(this.ir8j.key);
		for (var i = fX7Q - 1; i >= 0; i--) {
			this.bgK4O(Hg5l[i])
		}
	};
	b4f.bDk9b = function() {
		var E5J = this.ZJ2x;
		if (!E5J || this.rq1x) return;
		this.boZ6T(this.ZJ2x)
	};
	b4f.fS7L = function() {
		delete this.rq1x;
		K5P.fS7L.apply(this, arguments)
	};
	b4f.nS0x = function() {
		if ( !! this.ZL2x) return;
		this.ZL2x = !0;
		var bi5n = this.hT8L;
		this.hT8L += bi5n == 0 ? this.wj2x : this.qC0x;
		this.bFB0x(bi5n)
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		h4l = c4g("nej.v"),
		cO6I = c4g("nej.x"),
		M5R = c4g("nej.ut"),
		b4f;
	if ( !! M5R.Du4y) return;
	M5R.Du4y = NEJ.C();
	b4f = M5R.Du4y.O5T(M5R.cz5E);
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.ih8Z = e4i.event || "click";
		this.jT8L = e4i.selected || "js-selected";
		this.mH9y = e4i.disabled || "js-disabled";
		this.bDg9X = !! e4i.inverse;
		this.bRN4R(e4i.list);
		this.LO7H(e4i.index || 0)
	};
	b4f.bC5H = function() {
		var bRM4Q = function(f4j) {
				this.bpu6o(f4j, !1)
			};
		return function() {
			this.bG5L();
			k4o.bc5h(this.bV5a, bRM4Q, this);
			delete this.bV5a;
			delete this.ih8Z;
			delete this.cn5s;
			delete this.mH9y;
			delete this.jT8L;
			delete this.bDg9X
		}
	}();
	b4f.bRN4R = function() {
		var bdV3x = function(q4u) {
				if (!q4u) return;
				this.bV5a.push(q4u);
				var r4v = this.bV5a.length - 1,
					da6U = this.bpw6q[r4v];
				if (!da6U) {
					da6U = this.LO7H.g4k(this, r4v);
					this.bpw6q[r4v] = da6U
				}
				this.bS5X([
					[q4u, this.ih8Z, da6U]
				])
			};
		return function(i4m) {
			this.bV5a = [];
			if (!this.bpw6q) this.bpw6q = [];
			k4o.bc5h(i4m, bdV3x, this)
		}
	}();
	b4f.bpu6o = function(E5J, bRI3x) { !! bRI3x && !this.bDg9X ? a3x.z5E(E5J, this.jT8L) : a3x.x5C(E5J, this.jT8L)
	};
	b4f.LO7H = function(r4v, LG6A, j4n) {
		var E5J = this.bV5a[r4v];
		if (LG6A != !0 && (r4v == this.cn5s || !E5J || a3x.bA5F(E5J, this.mH9y))) {
			h4l.cg5l(arguments[1]);
			return this
		}
		var d4h = {
			index: r4v,
			last: this.cn5s,
			list: this.nr9i(),
			data: j4n || a3x.u5z(E5J, "value")
		};
		this.cn5s = r4v;
		E5J = this.bV5a[d4h.last];
		if ( !! E5J) this.bpu6o(E5J, !1);
		E5J = this.bV5a[this.cn5s];
		this.bpu6o(E5J, !0);
		this.w5B("onchange", d4h);
		if (!d4h.nostop) h4l.cg5l(arguments[1]);
		return this
	};
	b4f.sa1x = function() {
		return this.cn5s
	};
	b4f.nr9i = function() {
		return this.bV5a
	};
	a3x.bRH3x = cO6I.bRH3x = function(bB5G, e4i) {
		var C5H = a3x.kJ9A(bB5G);
		if (!C5H) return null;
		if (!M5R.WA1x(C5H, M5R.Du4y)) {
			e4i = e4i || {};
			e4i.list = !e4i.clazz ? a3x.cP6J(C5H) : a3x.I5N(C5H, e4i.clazz);
			delete e4i.clazz
		}
		return M5R.WA1x(C5H, M5R.Du4y, e4i || X5c)
	};
	cO6I.isChange = !0
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		l4p = c4g("nm.x");
	var SETTING_KEY = "player-setting";
	var md9U = {
		mode: 4,
		volume: .8,
		autoPlay: false,
		index: 0,
		lock: false
	};
	md9U = v5A.tk1x(SETTING_KEY) || md9U;
	l4p.bpI6C = function() {
		return md9U
	};
	l4p.DD4H = function(DE4I) {
		if (DE4I) {
			md9U = DE4I;
			v5A.uG2x(SETTING_KEY, DE4I)
		}
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		H5M = c4g("nej.ut"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		gT8L = c4g("nm.w.player.log");
	var kG9x = p4t.hK8C.B5G();
	var LogLevel = {
		ERROR: 10,
		INFO: 6,
		DEBUG: 2
	};
	var mf9W = function(t4x, bD5I, pJ0x) {
			var cL6F = l4p.eQ7J("{0} {1} {2}", k4o.iI8A(new Date, "yyyy-MM-dd HH:mm:ss"), t4x, bD5I);
			if (pJ0x == LogLevel.ERROR) {
				kG9x.gd7W("playerror", {
					message: bD5I
				})
			}
			if (pJ0x >= LogLevel.INFO) {
				kG9x.cjd8V(cL6F)
			}
			if (location.hostname.indexOf("igame.163.com") != -1) {
				console.log(cL6F)
			}
		};
	gT8L.bT5Y = function() {
		mf9W("PLAY_ERROR", l4p.eQ7J.apply(null, arguments), LogLevel.ERROR)
	};
	gT8L.oy0x = function() {
		mf9W("PLAY_INFO", l4p.eQ7J.apply(null, arguments), LogLevel.INFO)
	};
	gT8L.cwd1x = function() {
		mf9W("PLAY_DEBUG", l4p.eQ7J.apply(null, arguments), LogLevel.DEBUG)
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		H5M = c4g("nej.ut"),
		k4o = c4g("nej.u"),
		D5I = c4g("nm.w"),
		gf7Y = c4g("flash.cb");
	var dG6A = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
	var DJ4N, ZP2x, sI1x;
	D5I.bRD3x = function(t4x, dt6n) {
		if (t4x != "flash") {
			if (!DJ4N) {
				DJ4N = a3x.cQ6K("audio");
				k4o.bc5h(dG6A, function(t4x) {
					h4l.s4w(DJ4N, t4x, onMediaCallBack)
				})
			}
			if (DJ4N && DJ4N.canPlayType && DJ4N.canPlayType("audio/mpeg")) {
				dt6n(new MediaWrap("audio"));
				return
			}
		}
		if (!ZP2x) {
			a3x.rS1x({
				src: "/style/swf/music/music.swf?v=20151204",
				hidden: true,
				params: {
					allowscriptaccess: "always"
				},
				onready: function(gW8O) {
					ZP2x = gW8O;
					k4o.bc5h(dG6A, function(t4x) {
						gf7Y[t4x] = onMediaCallBack;
						ZP2x.addCallback(t4x, "flash.cb." + t4x)
					});
					dt6n(new MediaWrap("flash"))
				}.g4k(this)
			})
		} else {
			dt6n(new MediaWrap("flash"))
		}
	};

	function MediaWrap(DM4Q) {
		var lz9q;
		H5M.fu7n.B5G({
			element: this,
			event: dG6A.concat(["interrupt", "recover"])
		});
		lz9q = DM4Q == "audio" ? DJ4N : ZP2x;
		this.type = DM4Q;
		this.destroy = function() {};
		this.setSrc = function(V5a) {
			if (sI1x != this) {
				var gx7q = sI1x;
				if (gx7q) {
					gx7q.interrupt()
				}
				sI1x = this
			}
			if (DM4Q == "flash") {
				lz9q.setSrc(V5a)
			} else {
				lz9q.src = V5a
			}
		};
		this.play = function() {
			if (sI1x != this) {
				var gx7q = sI1x;
				if (gx7q) {
					gx7q.interrupt();
					sI1x = this;
					this.recover()
				} else {
					sI1x = this
				}
			}
			if (DM4Q == "flash") {
				lz9q.as_play()
			} else {
				lz9q.play()
			}
		};
		this.pause = function() {
			if (sI1x != this) return;
			if (DM4Q == "flash") {
				lz9q.as_pause()
			} else {
				lz9q.pause()
			}
		};
		this.load = function() {
			if (sI1x != this) return;
			if (DM4Q == "flash") {
				lz9q.as_load()
			} else {
				lz9q.load()
			}
		};
		this.interrupt = function() {
			onMediaCallBack({
				type: "interrupt"
			})
		};
		this.recover = function() {
			onMediaCallBack({
				type: "recover"
			})
		};
		this.getMedia = function() {
			return lz9q
		};
		var no9f = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
		k4o.bc5h(no9f, function(T5Y) {
			var Lo6i = "get" + T5Y,
				KR6L = "set" + T5Y;
			if (DM4Q == "flash") {
				if (!this[Lo6i]) {
					this[Lo6i] = function() {
						return lz9q[Lo6i]()
					}
				}
				if (!this[KR6L]) {
					this[KR6L] = function(value) {
						lz9q[KR6L](value)
					}
				}
			} else {
				var bCY9P = T5Y.slice(0, 1).toLowerCase() + T5Y.slice(1);
				if (!this[Lo6i]) {
					this[Lo6i] = function() {
						return lz9q[bCY9P]
					}
				}
				if (!this[KR6L]) {
					this[KR6L] = function(value) {
						lz9q[bCY9P] = value
					}
				}
			}
		}, this)
	}
	function onMediaCallBack(d4h) {
		if (sI1x) {
			h4l.w5B(sI1x, d4h.type, d4h)
		}
	}
})();
(function() {
	var c4g = NEJ.P,
		h4l = c4g("nej.v"),
		v5A = c4g("nej.j"),
		H5M = c4g("nej.ut"),
		db6V = c4g("nej.p"),
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
	var bCX9O = false;
	D5I.fl7e = NEJ.C();
	b4f = D5I.fl7e.O5T(H5M.cz5E);
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.cr5w = {};
		this.ZR2x(e4i.media);
		v5A.bq5v("/api/cdns", {
			type: "json",
			onload: function(d4h) {
				if (d4h.code) {
					this.pk0x = d4h.data
				}
			}.g4k(this)
		})
	};
	b4f.bC5H = function() {
		this.bG5L();
		delete this.cr5w
	};
	b4f.ZS2x = function(be5j) {
		if (!be5j) return;
		var zY3x = this.cr5w.volume;
		if (this.dA6u) {
			this.dA6u.pause()
		}
		this.cr5w = {
			time: 0,
			id: be5j.id,
			duration: be5j.duration / 1e3,
			play: this.cr5w.play,
			stalledRetryCount: 0
		};
		if (zY3x != null) {
			this.cr5w.volume = zY3x
		}
		this.cr5w.loadState = LoadState.LOAD_START;
		this.bCV9M(be5j.id);
		gT8L.oy0x("play song id: {0}", be5j.id)
	};
	b4f.eC7v = function() {
		if (this.cr5w.error) {
			this.cr5w.error = null;
			if (this.cr5w.error == ErrorType.INFO_GET_ERR || this.bCT9K()) {
				this.bCS9J()
			} else {
				this.Qh9Y()
			}
		} else {
			if (this.dA6u) {
				this.dA6u.play()
			}
		}
		this.cr5w.play = true;
		this.oF0x("play")
	};
	b4f.fx7q = function() {
		if (this.dA6u) {
			this.dA6u.pause()
		}
		this.cr5w.play = false;
		this.oF0x("pause")
	};
	b4f.nF0x = function(by5D) {
		if (this.dA6u) {
			this.dA6u.setCurrentTime(by5D)
		}
		this.cr5w.time = by5D;
		gT8L.oy0x("seek to: {0}", by5D)
	};
	b4f.bqR6L = function() {
		return this.cr5w.duration || 0
	};
	b4f.vk2x = function() {
		return !!this.cr5w.play
	};
	b4f.lM9D = function(Qe9V) {
		this.cr5w.volume = Qe9V;
		if (this.dA6u) {
			this.dA6u.setVolume(Qe9V)
		}
	};
	b4f.brd6X = function() {
		return this.cr5w.time
	};
	b4f.ZR2x = function(t4x) {
		D5I.bRD3x(t4x, function(lz9q) {
			this.dA6u = lz9q;
			gT8L.oy0x("media loaded: {0}", lz9q.type);
			this.bS5X([
				[this.dA6u, "loadedmetadata", this.bRp3x.g4k(this)],
				[this.dA6u, "ended", this.bRo3x.g4k(this)],
				[this.dA6u, "waiting", this.xa2x.g4k(this)],
				[this.dA6u, "play", this.sw1x.g4k(this)],
				[this.dA6u, "pause", this.bro6i.g4k(this)],
				[this.dA6u, "playing", this.PS8K.g4k(this)],
				[this.dA6u, "timeupdate", this.bRn3x.g4k(this)],
				[this.dA6u, "progress", this.rO1x.g4k(this)],
				[this.dA6u, "stalled", this.brx6r.g4k(this)],
				[this.dA6u, "interrupt", this.fx7q.g4k(this)],
				[this.dA6u, "recover", this.bRl3x.g4k(this)],
				[this.dA6u, "error", this.ek7d.g4k(this)]
			]);
			if (this.cr5w) {
				if (this.cr5w.loadState == LoadState.LOAD_START || this.cr5w.loadState == LoadState.IN_SWITCH_MEDIA) {
					this.brz6t();
					if (this.cr5w.volume != null) {
						this.dA6u.setVolume(this.cr5w.volume)
					}
				}
			}
		}.g4k(this))
	};
	b4f.bRj3x = function(t4x) {
		this.Gs5x();
		this.dA6u.destroy();
		this.cr5w.loadState = LoadState.IN_SWITCH_MEDIA;
		this.xa2x();
		this.ZR2x(t4x);
		gT8L.oy0x("switch media")
	};
	b4f.cwe1x = function() {
		return this.dA6u
	};
	b4f.bCV9M = function() {
		this.xa2x();
		v5A.bq5v("/api/song/enhance/player/url", {
			type: "json",
			query: {
				ids: JSON.stringify([this.cr5w.id]),
				br: DEFAULT_BR
			},
			onload: this.bCN9E.g4k(this),
			onerror: this.bCN9E.g4k(this)
		})
	};
	b4f.bCN9E = function(d4h) {
		if (d4h.code == 200 && d4h.data && d4h.data.length) {
			var bv5A = d4h.data[0];
			if (!bv5A.url) {
				this.cr5w.error = ErrorType.INFO_GET_ERR;
				this.oF0x("error", {
					code: this.cr5w.error
				});
				return
			}
			this.cr5w.playUrl = bv5A.url;
			this.cr5w.expireTime = (new Date).getTime() + bv5A.expi * 1e3;
			this.brz6t()
		} else {
			this.cr5w.error = ErrorType.INFO_GET_ERR;
			this.oF0x("error", {
				code: this.cr5w.error
			});
			gT8L.bT5Y("info load error")
		}
	};
	b4f.brz6t = function() {
		if (this.dA6u) {
			var V5a = this.cr5w.playUrl;
			if (this.cr5w.time > 0 && (this.cr5w.loadState == LoadState.IN_RE_GET_URL || this.cr5w.loadState == LoadState.IN_RE_GET_URL)) {
				V5a += "#t=" + this.cr5w.time
			}
			this.dA6u.setSrc(V5a);
			gT8L.oy0x("load mp3: {0},loadState: {1}.", V5a, this.cr5w.loadState)
		}
	};
	b4f.bCL9C = function() {
		if (/#t=(\d+)$/.test(this.dA6u.getSrc())) {
			return parseInt(RegExp.$1) || 0
		} else {
			return 0
		}
	};
	b4f.Qh9Y = function() {
		var by5D = parseInt(this.cr5w.time) || 0,
			bRe3x = this.bCL9C();
		if (by5D === bRe3x) {
			this.dA6u.load()
		} else {
			this.dA6u.setSrc(this.cr5w.playUrl + "#t=" + by5D)
		}
		this.cr5w.loadState = LoadState.IN_RELOAD;
		this.xa2x();
		gT8L.oy0x("reload from: {0}", by5D)
	};
	b4f.bCS9J = function() {
		this.cr5w.loadState = LoadState.IN_RE_GET_URL;
		this.bCV9M()
	};
	b4f.bCK9B = function() {
		var vf2x = getHost(this.cr5w.playUrl);
		if (vf2x) {
			for (var i = 0; i < this.pk0x.length; i++) {
				var hr8j = this.pk0x[i] || [],
					r4v = hr8j.indexOf(vf2x);
				if (r4v >= 0 && hr8j.length > 1) {
					return hr8j[(r4v + 1) % hr8j.length]
				}
			}
		}
		function getHost(V5a) {
			if (CDN_HOST_REG.test(V5a)) return RegExp.$1
		}
	};
	b4f.bRc3x = function() {
		this.cr5w.playUrl = this.cr5w.playUrl.replace(CDN_HOST_REG, this.bCK9B());
		this.cr5w.loadState = LoadState.IN_SWITCH_CDN;
		this.brz6t();
		this.xa2x()
	};
	b4f.bRp3x = function() {
		if (this.cr5w.loadState == LoadState.LOAD_START) {
			this.cr5w.loadState = LoadState.LOADED_META;
			if (this.dA6u.type == "audio") {
				this.cr5w.duration = this.dA6u.getDuration()
			}
			this.oF0x("loadedmeta", {
				duration: this.cr5w.duration
			})
		} else {
			this.cr5w.loadState = LoadState.LOADED_META
		}
		if (this.cr5w.play) {
			this.dA6u.play()
		} else {
			this.dA6u.pause()
		}
		if (this.cr5w.time && parseInt(this.cr5w.time) != this.bCL9C()) {
			this.dA6u.setCurrentTime(this.cr5w.time)
		}
		this.EM4Q();
		this.PS8K();
		bCX9O = true;
		gT8L.oy0x("loaded meta")
	};
	b4f.bRo3x = function() {
		this.cr5w.ended = true;
		this.oF0x("ended")
	};
	b4f.xa2x = function() {
		if (!this.cr5w.waiting) {
			this.cr5w.waiting = true;
			this.cr5w.waitTimestamp = +(new Date);
			this.oF0x("waiting")
		}
	};
	b4f.PS8K = function() {
		this.cr5w.waiting = false;
		this.cr5w.waitTimestamp = 0;
		this.oF0x("playing")
	};
	b4f.sw1x = function() {
		this.oF0x("play")
	};
	b4f.bro6i = function() {
		this.oF0x("pause")
	};
	b4f.bRn3x = function() {
		if (this.cr5w.loadState != LoadState.LOADED_META) return;
		var by5D = this.dA6u.getCurrentTime();
		if (this.cr5w.waiting && by5D > this.cr5w.time) {
			this.PS8K()
		}
		this.cr5w.time = by5D;
		this.oF0x("timeupdate", {
			time: this.cr5w.time,
			duration: this.cr5w.duration
		})
	};
	b4f.rO1x = function(d4h) {
		if (this.cr5w.loadState != LoadState.LOADED_META) return;
		var m4q = {};
		if (d4h.data) {
			m4q.total = d4h.data.total;
			m4q.loaded = d4h.data.loaded
		} else {
			var xp2x = this.dA6u.getBuffered(),
				by5D = this.dA6u.getCurrentTime(),
				nw0x = 0;
			for (var i = 0; i < xp2x.length; i++) {
				if (by5D > xp2x.start(i) && by5D < xp2x.end(i)) {
					nw0x = xp2x.end(i);
					break
				}
			}
			m4q.total = this.cr5w.duration;
			m4q.loaded = Math.min(nw0x, m4q.total)
		}
		this.oF0x("progress", m4q)
	};
	b4f.EM4Q = function() {
		if (this.cr5w.retry) {
			clearTimeout(this.cr5w.retry.tid);
			this.cr5w.retry = null
		}
	};
	b4f.ek7d = function() {
		var bP5U = this.dA6u.getError();
		gT8L.bT5Y("media error code: {0}, netState: {1}", bP5U.code, this.dA6u.getNetworkState());
		if (bP5U.code == MediaError.MEDIA_ERR_NETWORK || bP5U.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
			var DE4I = l4p.bpI6C();
			if (!this.cr5w.retry) {
				this.cr5w.retry = {
					level: RetryLevel.NONE
				}
			} else {
				window.clearTimeout(this.cr5w.retry.tid)
			}
			if (this.cr5w.retry.level == RetryLevel.NONE) {
				if (this.bCT9K()) {
					this.cr5w.retry.level = RetryLevel.GET_URL;
					this.bCS9J();
					gT8L.oy0x("Url expired, get url.")
				} else {
					this.cr5w.retry.level = RetryLevel.RELOAD;
					this.cr5w.retry.tid = setTimeout(this.Qh9Y.g4k(this), 3e3);
					gT8L.oy0x("Reload mp3 3s later.")
				}
			} else if (this.cr5w.retry.level == RetryLevel.GET_URL) {
				this.cr5w.retry.level = RetryLevel.RELOAD;
				this.cr5w.retry.tid = setTimeout(this.Qh9Y.g4k(this), 3e3);
				gT8L.oy0x("Reload mp3 3s later.")
			} else if (this.cr5w.retry.level == RetryLevel.RELOAD) {
				this.cr5w.retry.level = RetryLevel.SWITCH_CDN;
				if (this.bCK9B()) {
					this.cr5w.retry.tid = setTimeout(this.bRc3x.g4k(this), 5e3);
					gT8L.oy0x("Switch CDN 5s later.")
				} else {
					this.cr5w.retry.tid = setTimeout(this.Qh9Y.g4k(this), 5e3);
					gT8L.oy0x("Reload mp3 5s later.")
				}
			} else if (!bCX9O && this.dA6u.type == "audio" && !DE4I.useFlash && !db6V.bae2x.mac && l4p.bci3x().supported) {
				DE4I.useFlash = true;
				l4p.DD4H(DE4I);
				this.bRj3x("flash")
			} else {
				this.EM4Q();
				this.fx7q();
				this.cr5w.error = ErrorType.NET_ERR;
				this.oF0x("error", {
					code: this.cr5w.error
				});
				gT8L.bT5Y("error can not retry.")
			}
		} else {
			this.EM4Q();
			this.fx7q();
			this.cr5w.error = ErrorType.UNKNOWN_ERR;
			this.oF0x("error", {
				code: this.cr5w.error
			});
			gT8L.bT5Y("error can not retry.")
		}
	};
	b4f.brx6r = function() {
		var gY8Q = 0,
			bCJ9A = 5e3;
		return function() {
			this.xa2x();
			clearTimeout(gY8Q);
			setTimeout(function() {
				var fN7G = +(new Date);
				if (this.cr5w.waiting && fN7G - this.cr5w.waitTimestamp >= bCJ9A && this.cr5w.stalledRetryCount < MAX_STALLED_RETRY) {
					gT8L.oy0x("stalled too long retry.");
					this.cr5w.stalledRetryCount++;
					this.Qh9Y()
				}
			}.g4k(this), bCJ9A);
			gT8L.oy0x("stalled")
		}
	}();
	b4f.bCT9K = function() {
		var fN7G = +(new Date);
		return fN7G > this.cr5w.expireTime
	};
	b4f.bRl3x = function() {
		var by5D = parseInt(this.cr5w.time) || 0;
		this.dA6u.setSrc(this.cr5w.playUrl + "#t=" + by5D);
		this.cr5w.loadState = LoadState.IN_RELOAD;
		this.xa2x();
		gT8L.oy0x("recover from: {0}", by5D)
	};
	b4f.oF0x = function(W5b, j4n) {
		h4l.w5B(D5I.fl7e, "playaction", {
			action: W5b,
			data: j4n || {}
		})
	};
	H5M.fu7n.B5G({
		element: D5I.fl7e,
		event: ["playaction"]
	})
})();
(function() {
	if (!(window == top)) {
		return
	}
	var c4g = NEJ.P,
		h4l = c4g("nej.v"),
		H5M = c4g("nej.ut"),
		D5I = c4g("nm.w"),
		b4f;
	D5I.Ev4z = NEJ.C();
	b4f = D5I.Ev4z.O5T(D5I.fl7e);
	K5P = D5I.Ev4z.cf5k;
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.bRa3x = function(bI5N) {
		this.ZS2x(bI5N);
		this.eC7v()
	};
	b4f.baD2x = function() {
		this.fx7q()
	};
	b4f.vj2x = function(d4h) {
		if (d4h.action == "play") {
			this.fx7q()
		}
	};
	b4f.oF0x = function(W5b, j4n) {
		h4l.w5B(D5I.Ev4z, "tmpplayaction", {
			action: W5b,
			data: j4n || {},
			tmp: true
		})
	};
	b4f.rX1x = function() {
		return this.cr5w
	};
	H5M.fu7n.B5G({
		element: D5I.Ev4z,
		event: ["tmpplayaction"]
	})
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		ff7Y = c4g("nej.n"),
		v5A = c4g("nej.j"),
		H5M = c4g("nej.ut"),
		bd5i = c4g("nej.ui"),
		D5I = c4g("nm.w"),
		n4r = c4g("nm.l"),
		jH8z = c4g("nm.c"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		b4f, K5P, bal2x = [{
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
	var baI2x = {
		song: 0,
		artist: 1,
		album: 2,
		mv: 3,
		playlist: 4,
		djradio: 5
	};
	D5I.baL2x = NEJ.C();
	b4f = D5I.baL2x.O5T(bd5i.er7k);
	b4f.cl5q = function(e4i) {
		this.cs5x(e4i);
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.cwf1x = i4m.shift();
		this.bQY3x = i4m.shift();
		this.Ha5f = i4m.shift();
		this.baQ2x = i4m.shift();
		this.baR2x = [i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift()];
		this.ban2x = i4m.shift();
		this.bCI9z = i4m.shift();
		this.pV0x = {
			list: this.baR2x,
			selected: "z-curr",
			onchange: this.bCH9y.g4k(this)
		};
		h4l.s4w(this.Ha5f, "input", this.bao2x.g4k(this));
		h4l.s4w(this.Ha5f, "propertychange", this.bao2x.g4k(this));
		h4l.s4w(this.Ha5f, "keyup", this.bao2x.g4k(this));
		h4l.s4w(this.bQY3x, "click", this.bao2x.g4k(this));
		h4l.s4w(this.ban2x, "click", this.cx5C.g4k(this));
		h4l.s4w(this.bCI9z, "click", function() {
			this.w5B("oncancel", {})
		}.g4k(this));
		this.R5W = p4t.CG4K.gc7V();
		this.Mf7Y = top.nm.w.Ev4z.gc7V();
		H5M.fu7n.B5G({
			element: top.nm.w.Ev4z,
			event: ["tmpplayaction"]
		});
		this.qw0x = {
			limit: 100,
			offset: 0,
			parent: this.ban2x,
			onbeforelistload: this.pD0x.g4k(this)
		};
		p4t.sk = "fuck" + a3x.u5z(this.baQ2x, "xname") + "458";
		h4l.s4w(top.nm.w.Ev4z, "tmpplayaction", this.vj2x.g4k(this))
	};
	b4f.bZ5e = function() {
		this.ca5f = "m-xwgt-publish-search"
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		if ( !! this.AD3x) {
			this.AD3x.S5X();
			delete this.AD3x
		}
		this.pV0x.index = baI2x[e4i.type || "song"];
		this.AD3x = H5M.Du4y.B5G(this.pV0x);
		this.Ha5f.value = "";
		this.Ha5f.focus();
		this.sH1x = "";
		this.cwg1x = 0;
		if (e4i.showMV == true) {
			this.baR2x[baI2x["mv"]].parentNode.style.display = "";
			a3x.z5E(this.baQ2x, "srchtab-1")
		} else {
			this.baR2x[baI2x["mv"]].parentNode.style.display = "none";
			a3x.x5C(this.baQ2x, "srchtab-1")
		}
		if ( !! this.dr6l) {
			this.dr6l = this.dr6l.S5X()
		}
		if (e4i.hideBack) {
			a3x.z5E(this.bCI9z.parentNode, "f-hide")
		}
	};
	b4f.bC5H = function() {
		this.Mf7Y.baD2x();
		this.bG5L()
	};
	b4f.bao2x = function() {
		var value = this.Ha5f.value.trim();
		if (value && value.length) {
			if (value != this.sH1x) {
				this.sH1x = value;
				this.bCH9y({
					index: this.AD3x.sa1x()
				})
			}
		} else {
			if (this.dr6l) {
				this.dr6l = this.dr6l.S5X()
			}
		}
		this.sH1x = value
	};
	b4f.cx5C = function() {
		var bQQ3x = function(E5J) {
				return a3x.bA5F(E5J, "sitm") || a3x.bA5F(E5J, "itm") || a3x.bA5F(E5J, "mv-item")
			},
			bQP3x = function(E5J) {
				return a3x.bA5F(E5J, "ply")
			},
			bCE9v = function() {
				n4r.Z5e.N5S({
					type: 2,
					tip: "因合作方要求，该资源需付费使用"
				})
			},
			bQN3x = function() {
				n4r.Z5e.N5S({
					type: 2,
					tip: "因合作方要求，该资源需下载后播放"
				})
			},
			bbn2x = function(be5j) {
				if (be5j && be5j.privilege && be5j.privilege.toast) {
					v5A.bq5v("/api/song/toast", {
						query: {
							id: be5j.id
						},
						type: "json",
						onload: QM9D.g4k(this),
						onerror: QM9D.g4k(this)
					})
				} else {
					QN9E()
				}
			},
			QM9D = function(Q5V) {
				QN9E((Q5V || X5c).toast)
			},
			QN9E = function(bD5I) {
				n4r.Z5e.N5S({
					type: 2,
					tip: bD5I || "因合作方要求，该资源暂时下架>_<"
				})
			};
		return function(d4h) {
			var EF4J = h4l.U5Z(d4h, bQP3x),
				i4m = h4l.U5Z(d4h, bQQ3x),
				dZ7S = this.Mf7Y.rX1x();
			if ( !! i4m) {
				h4l.bh5m(d4h);
				this.Rq9h = a3x.u5z(i4m, "id");
				this.Kz6t = a3x.u5z(i4m, "type");
				if (this.Kz6t == 18) {
					var bI5N = this.R5W.eg7Z(this.Rq9h),
						pJ0x = l4p.oK0x(bI5N);
					if (!EF4J) {
						if (pJ0x == 10) {
							bCE9v();
							return
						} else if (pJ0x == 100) {
							bbn2x(bI5N);
							return
						}
					} else {
						if (pJ0x == 10) {
							bCE9v();
							return
						} else if (pJ0x == 100) {
							bbn2x(bI5N);
							return
						} else if (pJ0x == 11) {
							bQN3x();
							return
						} else {
							a3x.x5C(this.AA3x, "z-pause z-loading");
							if (EF4J == this.AA3x && dZ7S.play && !dZ7S.ended) {
								this.Mf7Y.baD2x()
							} else {
								this.AA3x = EF4J;
								this.Mf7Y.bRa3x(bI5N)
							}
							return
						}
					}
				} else if (this.Kz6t == 70) {
					if (a3x.bA5F(i4m, "z-noprogram")) {
						n4r.Z5e.N5S({
							type: 2,
							tip: "不能分享没有节目的电台"
						});
						return
					}
				}
				this.bQI3x()
			}
		}
	}();
	b4f.bQI3x = function() {
		var hl8d = this.R5W.eg7Z(this.Rq9h),
			sd1x = l4p.bHX0x(this.Kz6t, hl8d);
		sd1x.title = sd1x.title || "";
		sd1x.author = sd1x.author || "";
		sd1x.picUrl = sd1x.picUrl || "";
		sd1x.authors = sd1x.authors || "";
		if (this.Kz6t == 70) {
			this.Rq9h = this.Rq9h.slice(0, -4)
		}
		this.w5B("onfinish", {
			id: this.Rq9h,
			type: this.Kz6t,
			data: sd1x
		})
	};
	b4f.vj2x = function(d4h) {
		var j4n = d4h.data;
		if (!this.AA3x) {
			return
		}
		switch (d4h.action) {
		case "play":
			a3x.eD7w(this.AA3x, "z-pause z-play", "z-loading");
			break;
		case "pause":
		case "ended":
			a3x.x5C(this.AA3x, "z-pause z-loading");
			break;
		case "error":
			n4r.Z5e.N5S({
				type: 2,
				tip: "试听遇到问题，播放失败"
			});
			a3x.x5C(this.AA3x, "z-pause z-loading");
			break;
		case "playing":
			a3x.eD7w(this.AA3x, "z-loading", "z-pause");
			break;
		case "waiting":
			a3x.eD7w(this.AA3x, "z-pause", "z-loading");
			break
		}
	};
	b4f.bQH3x = function(d4h) {
		if (d4h.result.code == 407) {
			this.ban2x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
			return
		}
		this.ban2x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
	};
	b4f.bCH9y = function(d4h) {
		if (!this.sH1x || d4h.index < 0 || d4h.index > 5) {
			return
		}
		this.Mf7Y.baD2x();
		var bb5g = bal2x[d4h.index],
			e4i = NEJ.X({}, this.qw0x);
		e4i.cache = {
			klass: p4t.CG4K,
			clear: true,
			onerror: this.bQH3x.g4k(this)
		};
		e4i.cache.lkey = "search-publish-" + bb5g.type + "-" + this.sH1x;
		e4i.item = {
			klass: bb5g.item,
			getRestrictLevel: l4p.oK0x,
			dur2time: l4p.kp9g
		};
		if (!e4i.cache.data) {
			e4i.cache.data = {}
		}
		e4i.cache.data.s = this.sH1x;
		e4i.cache.data.type = bb5g.type;
		e4i.cache.data.isPub = true;
		if (bb5g.type == 1) {
			e4i.cache.data.hlpretag = '<span class="s-fc7">';
			e4i.cache.data.hlposttag = "</span>"
		}
		e4i.onemptylist = this.bQE3x.g4k(this, this.sH1x);
		if ( !! this.Ez4D) this.R5W.sG1x(this.Ez4D);
		if ( !! this.dr6l) {
			this.dr6l = this.dr6l.S5X()
		}
		this.dr6l = H5M.mP9G.B5G(e4i);
		this.Ez4D = e4i.cache.lkey
	};
	b4f.pD0x = function(d4h) {
		d4h.value = a3x.hV8N("m-publish-search-loading")
	};
	b4f.bQE3x = function(J5O, d4h) {
		a3x.dK6E(d4h.parent, "m-publish-emtpy-message", {
			key: J5O
		});
		d4h.stopped = true
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		db6V = c4g("nej.p"),
		v5A = c4g("nej.j"),
		ch5m = c4g("nej.ut"),
		bF5K = c4g("nej.ui"),
		D5I = c4g("nm.w"),
		b4f, K5P;
	var bQD3x = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
	D5I.Eu4y = NEJ.C();
	b4f = D5I.Eu4y.O5T(bF5K.er7k);
	var ge7X = a3x.eh7a("m-wgt-receiverInput");
	var bQC2x = a3x.eh7a("m-wgt-receiverList");
	var hP8H = a3x.rE1x(bQD3x);
	var bQB2x = a3x.eh7a('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
	b4f.cl5q = function(e4i) {
		this.bg5l = [];
		this.vp2x = e4i.receiver || null;
		this.bQA2x = e4i.unique || false;
		this.mz9q = e4i.err;
		this.bCB9s(this.bCA9r, e4i.uid);
		this.cs5x(e4i)
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.Qy9p();
		this.QD9u();
		this.baa2x();
		if (e4i.receiver) this.bbS2x(e4i.receiver.nickname, e4i.receiver.userId);
		a3x.Y5d(this.zu3x, "display", "block");
		a3x.Y5d(this.bbW3x, "cursor", "text");
		a3x.Y5d(this.zu3x, "cursor", "text")
	};
	b4f.bZ5e = function() {
		var j4n = this.bCz9q();
		this.ca5f = a3x.hX8P(a3x.bU5Z(ge7X, {
			receiver: this.vp2x,
			users: j4n
		}));
		this.lg9X = hP8H
	};
	b4f.bR5W = function() {
		this.cb5g();
		var bJ5O = a3x.I5N(this.o4s, "j-flag");
		var gy7r = a3x.I5N(this.o4s, "j-item");
		this.bbW3x = bJ5O[0];
		this.bCx9o = bJ5O[1];
		this.dF6z = bJ5O[2];
		this.zu3x = bJ5O[3];
		this.ZV2x = bJ5O[4];
		this.bcc3x = bJ5O[5];
		this.fi7b = gy7r;
		a3x.z5E(this.fi7b[0], "j-selected");
		h4l.s4w(this.dF6z, "keyup", this.bcd3x.g4k(this));
		h4l.s4w(this.dF6z, "keydown", this.Ks6m.g4k(this));
		h4l.s4w(this.dF6z, "focus", this.kh9Y.g4k(this));
		h4l.s4w(this.ZV2x, "click", this.bQn2x.g4k(this));
		h4l.s4w(this.bbW3x, "click", this.bQm2x.g4k(this));
		h4l.s4w(document.body, "click", this.nH0x.g4k(this));
		h4l.s4w(this.dF6z, "input", this.fm7f.g4k(this));
		h4l.s4w(this.dF6z, "blur", this.or0x.g4k(this))
	};
	b4f.bC5H = function(e4i) {
		h4l.mv9m(document.body, "click", this.nH0x.g4k(this));
		this.bG5L();
		this.baa2x();
		this.bQi2x();
		this.nH0x()
	};
	b4f.bcd3x = function(d4h) {
		h4l.bh5m(d4h);
		var iW8O = d4h.keyCode || d4h.which;
		var bl5q = this.dF6z.value;
		var br5w = this.fi7b.length;
		var qV1x = a3x.I5N(this.o4s, "j-selected")[0];
		switch (iW8O) {
		case 13:
			var ki9Z = a3x.fR7K(qV1x, "data-username");
			var ht8l = a3x.fR7K(qV1x, "data-userId");
			this.bbS2x(ki9Z, ht8l);
			this.nH0x();
			this.dF6z.value = "";
			break;
		case 38:
			var r4v = a3x.fR7K(qV1x, "data-index") - 1 < 0 ? br5w - 1 : a3x.fR7K(qV1x, "data-index") - 1;
			a3x.x5C(qV1x, "j-selected");
			a3x.z5E(this.fi7b[r4v], "j-selected");
			break;
		case 40:
			var r4v = parseInt(a3x.fR7K(qV1x, "data-index")) + 1 >= br5w ? 0 : parseInt(a3x.fR7K(qV1x, "data-index")) + 1;
			a3x.x5C(qV1x, "j-selected");
			a3x.z5E(this.fi7b[r4v], "j-selected");
			break;
		default:
			this.uz2x()
		}
	};
	b4f.Ks6m = function(d4h) {
		var iW8O = d4h.keyCode || d4h.which;
		var bl5q = this.dF6z.value;
		var r4v = a3x.I5N(this.o4s, "j-receiver").length - 1;
		if (iW8O === 8 && bl5q === "") this.bQa2x(r4v)
	};
	b4f.fm7f = function(d4h) {
		var bl5q = this.dF6z.value;
		if (bl5q.length > 10) {
			this.dF6z.value = bl5q.substring(0, 10);
			return
		}
		db6V.dd6X.browser == "ie" && db6V.dd6X.version < "7.0" ? setTimeout(this.bcw3x.g4k(this), 0) : this.bcw3x();
		this.QD9u()
	};
	b4f.kh9Y = function() {
		if (this.bg5l[0]) this.uz2x();
		else this.bCB9s(this.bPR2x);
		a3x.Y5d(this.zu3x, "display", "none")
	};
	b4f.or0x = function() {
		var br5w = a3x.I5N(this.o4s, "j-receiver").length;
		if (this.dF6z.value.trim() == "" && br5w <= 0) a3x.Y5d(this.zu3x, "display", "block")
	};
	b4f.bbS2x = function(ki9Z, ht8l) {
		var ES5X = this.Mp7i();
		if (ES5X.length >= 10) {
			this.dw6q();
			return
		}
		var bd5i;
		for (bd5i = 0; bd5i < ES5X.length; bd5i++) {
			if (ES5X[bd5i] == ht8l) {
				this.nH0x();
				return
			}
		}
		if (!ki9Z || !ht8l) return;
		var f4j = a3x.dq6k(a3x.hX8P(a3x.bU5Z(bQB2x, {
			username: ki9Z,
			userId: ht8l
		})));
		var bB5G = this.bCx9o.parentNode;
		if (this.bQA2x) {
			this.baa2x()
		}
		bB5G.insertBefore(f4j, this.bCx9o);
		this.dF6z.value = "";
		var br5w = a3x.I5N(this.o4s, "j-receiver").length;
		if (br5w > 1) a3x.Y5d(this.zu3x, "display", "none");
		this.bcw3x();
		this.QD9u()
	};
	b4f.baa2x = function() {
		var Mv7o = a3x.I5N(this.o4s, "j-receiver");
		var bd5i;
		if (Mv7o.length > 0) {
			for (bd5i = 0; bd5i < Mv7o.length; bd5i++) {
				a3x.cJ6D(Mv7o[bd5i], false)
			}
		}
	};
	b4f.bQi2x = function() {
		this.dF6z.value = ""
	};
	b4f.bQa2x = function(r4v) {
		this.dw6q(!0);
		var Mv7o = a3x.I5N(this.o4s, "j-receiver");
		a3x.cJ6D(Mv7o[r4v], false);
		this.QD9u()
	};
	b4f.uz2x = function() {
		var bl5q = this.dF6z.value;
		var bw5B = bl5q.trim().toLowerCase();
		var j4n;
		bw5B = bw5B.replace(/\[/g, "\\[");
		bw5B = bw5B.replace(/\]/g, "\\]");
		j4n = this.bCz9q(bw5B);
		this.bPP2x(j4n)
	};
	b4f.nH0x = function(d4h) {
		a3x.Y5d(this.ZV2x, "display", "none")
	};
	b4f.dw6q = function(gE7x) {
		if (gE7x && this.mz9q) {
			a3x.Y5d(this.mz9q, "display", "none");
			return
		}
		if (this.mz9q) a3x.Y5d(this.mz9q, "display", "block")
	};
	b4f.bQn2x = function(d4h) {
		h4l.cg5l(d4h);
		var cU6O = d4h.target || d4h.srcElement;
		if (a3x.bA5F(cU6O, "j-flag")) return;
		var bB5G = cU6O.nodeName.toLowerCase() == "a" ? cU6O.parentNode : cU6O.parentNode.parentNode;
		var ki9Z = a3x.fR7K(bB5G, "data-username");
		var ht8l = a3x.fR7K(bB5G, "data-userId");
		this.bbS2x(ki9Z, ht8l);
		this.nH0x();
		a3x.Y5d(this.zu3x, "display", "none")
	};
	b4f.bQm2x = function(d4h) {
		h4l.bh5m(d4h);
		var cU6O = d4h.target || d4h.srcElement;
		if (a3x.bA5F(cU6O.parentNode, "j-receiver")) {
			a3x.cJ6D(cU6O.parentNode, false);
			this.dw6q(!0);
			this.QD9u()
		} else this.dF6z.focus()
	};
	b4f.bcw3x = function() {
		this.bcc3x.innerHTML = this.dF6z.value;
		var dp6j = this.bcc3x.offsetWidth + 2;
		a3x.Y5d(this.dF6z, "width", dp6j + "px")
	};
	b4f.QD9u = function() {
		var ZK2x = a3x.hJ8B(this.dF6z, this.o4s).y;
		var bCp9g = Math.floor((ZK2x - 8) / 27);
		if (bCp9g < 0) return;
		a3x.Y5d(this.bbW3x, "height", 19 + bCp9g * 29 + "px")
	};
	b4f.Qy9p = function() {
		var pI0x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
		for (var i = 0; i < pI0x.length; i++) {
			a3x.Y5d(this.bcc3x, pI0x[i], a3x.cW6Q(this.dF6z, pI0x[i]))
		}
	};
	b4f.bCB9s = function(dt6n, C5H) {
		var cR6L = C5H ? C5H : window.GUser.userId;
		var V5a = "/api/user/getfollows/" + cR6L;
		var fC7v = v5A.bq5v(V5a, {
			sync: false,
			method: "get",
			query: "offset = 0&limit=1000&order=true",
			onload: dt6n.g4k(this),
			onerror: function(j4n) {
				this.bg5l = []
			},
			onbeforerequest: function(j4n) {}
		})
	};
	b4f.bCA9r = function(j4n) {
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
	b4f.bPR2x = function(j4n) {
		if (this.bg5l[0]) return;
		this.bCA9r(j4n);
		this.uz2x()
	};
	b4f.bCz9q = function(bw5B) {
		var bw5B = bw5B ? bw5B : "";
		this.bg5l = this.bg5l[0] ? this.bg5l : [];
		var br5w = this.bg5l.length;
		var Ne7X = this.Mp7i();
		var rv1x = [];
		var Ng7Z, Nm7f, bcO3x;
		if (!this.bg5l[0]) return rv1x;
		for (var bd5i = 0; bd5i < br5w; bd5i++) {
			bcO3x = false;
			for (var v5A = 0; v5A < Ne7X.length; v5A++) {
				if (this.bg5l[bd5i].userId == Ne7X[v5A]) {
					bcO3x = true;
					break
				}
			}
			if (bcO3x) continue;
			Ng7Z = this.bg5l[bd5i].nickname.toLowerCase().search(bw5B);
			Nm7f = this.bg5l[bd5i].py ? this.bg5l[bd5i].py.toLowerCase().search(bw5B) : -1;
			if (Ng7Z !== -1 || Nm7f != -1) rv1x.push(this.bg5l[bd5i])
		}
		return rv1x
	};
	b4f.bPP2x = function(j4n) {
		a3x.dK6E(this.ZV2x, bQC2x, {
			users: j4n
		});
		a3x.z5E(a3x.I5N(this.o4s, "j-item")[0], "j-selected");
		this.fi7b = a3x.I5N(this.o4s, "j-item");
		a3x.Y5d(this.ZV2x, "display", "block")
	};
	b4f.Mp7i = function() {
		var rv1x = a3x.I5N(this.o4s, "j-receiver") || [];
		var ht8l = [];
		for (var i = 0; i < rv1x.length; i++) {
			ht8l.push(a3x.fR7K(rv1x[i], "data-id"))
		}
		return ht8l
	};
	b4f.cww1x = function() {
		var ht8l = this.Mp7i();
		var rv1x = [];
		for (var i = 0; i < ht8l.length; i++) {
			for (var j = 0; j < this.bg5l.length; j++) {
				if (ht8l[i] == this.bg5l[j].userId) rv1x.push(this.bg5l[j])
			}
		}
		return rv1x
	};
	b4f.bPL2x = function() {
		this.baa2x()
	};
	D5I.Eu4y.N5S = function(e4i) {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			n4r.oc0x.N5S({
				title: "登录"
			});
			return
		}
		e4i = e4i || {};
		if (e4i.parent === undefined) e4i.parent = document.body; !! this.eN7G && this.eN7G.S5X();
		this.eN7G = this.B5G(e4i)
	};
	D5I.Eu4y.bp5u = function() { !! this.eN7G && this.eN7G.S5X()
	};
	D5I.Eu4y.Df4j = function() {
		return this.nH0x()
	};
	D5I.Eu4y.cwz1x = function() {
		return this.uz2x()
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		h4l = c4g("nej.v"),
		l4p = c4g("nm.x"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.EW5b = NEJ.C();
	b4f = n4r.EW5b.O5T(n4r.blV5a);
	K5P = n4r.EW5b.cf5k;
	b4f.bj5o = function() {
		var De4i;
		var bPH2x = function(A5F, J5O) {
				De4i = De4i || [];
				if (J5O != "18") De4i.push({
					key: J5O,
					value: A5F
				})
			};
		return function(e4i) {
			this.bk5p(e4i);
			if (e4i.upwards) {
				a3x.z5E(this.o4s, "m-emts-up")
			} else {
				a3x.x5C(this.o4s, "m-emts-up")
			}
			if (e4i.rightwards) {
				a3x.z5E(this.o4s, "m-emts-right")
			} else {
				a3x.x5C(this.o4s, "m-emts-right")
			}
			if (!De4i) {
				var bu5z = l4p.ceq6k();
				k4o.ei7b(bu5z, bPH2x)
			}
			var br5w = De4i.length;
			De4i.splice(br5w - 2, 0, {
				key: "18",
				value: "186"
			});
			this.ZG2x = De4i;
			this.bPG2x = !! e4i.autoHide
		}
	}();
	b4f.bZ5e = function() {
		this.ca5f = "ntp-portrait"
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.bK5P = i4m[0];
		this.bPF2x = i4m[1];
		this.bPE2x = i4m[2];
		this.bPC2x = i4m[3];
		h4l.s4w(this.bK5P, "click", this.vx2x.g4k(this));
		h4l.s4w(this.bPF2x, "click", this.CZ4d.g4k(this, 1));
		h4l.s4w(this.bPC2x, "click", this.CZ4d.g4k(this, 2))
	};
	b4f.bdn3x = function(r4v) {
		this.ZE2x = r4v;
		var bi5n = (r4v - 1) * 50;
		var i4m = this.ZG2x.slice(bi5n, Math.min(bi5n + 50, this.ZG2x.length));
		this.bK5P.innerHTML = a3x.bU5Z("jst-portrait", {
			plist: i4m
		}, {
			purl: l4p.bIy0x
		});
		this.bPE2x.innerText = r4v + "/" + Math.ceil(this.ZG2x.length / 50)
	};
	b4f.CZ4d = function(r4v) {
		var bPB2x = Math.ceil(this.ZG2x.length / 50);
		if (r4v == 1 && this.ZE2x == 1 || r4v == 2 && this.ZE2x == bPB2x) return;
		r4v == 1 ? this.bdn3x(this.ZE2x - 1) : this.bdn3x(this.ZE2x + 1)
	};
	b4f.vx2x = function(d4h) {
		var E5J = h4l.U5Z(d4h, "d:text");
		if (!E5J) return;
		var d4h = {
			url: a3x.u5z(E5J, "url"),
			text: a3x.u5z(E5J, "text")
		};
		this.w5B("onselect", d4h);
		if (this.bPG2x && !d4h.stopped) {
			this.bp5u()
		}
	};
	b4f.N5S = function() {
		K5P.N5S.call(this);
		this.bdn3x(1)
	}
})();
(function() {
	var c4g = NEJ.P,
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		db6V = c4g("nej.p"),
		ba5f = c4g("nej.h"),
		H5M = c4g("nej.ut"),
		jf8X = /^[#?]+/,
		Cg4k = /#(.*?)$/,
		vB2x = window,
		bds3x = !history.pushState || db6V.bae2x.android || !history.auto;
	var Zz2x = function(V5a, bdu3x) {
			vB2x.history[!bdu3x ? "pushState" : "replaceState"](null, document.title, V5a)
		};
	var Zy2x = function() {
			return location.parse(vB2x.location.href)
		};
	Zz2x = Zz2x.ef7Y(function(d4h) {
		if (!bds3x) return;
		var bf5k = d4h.args;
		d4h.stopped = !0;
		V5a = bf5k[0].replace(jf8X, "");
		!bf5k[1] ? vB2x.location.hash = V5a : vB2x.location.replace("#" + V5a)
	});
	Zy2x = Zy2x.ef7Y(function(d4h) {
		if (!bds3x) return;
		d4h.stopped = !0;
		var dH6B = Cg4k.test(vB2x.location.href) ? RegExp.$1 : "";
		d4h.value = location.parse(dH6B.replace(jf8X, ""))
	});
	location.redirect = function(V5a, bdu3x) {
		Zz2x(V5a, bdu3x);
		return this
	};
	location.active = function() {
		var eT7M, V5a, iG8y, cG6A, NU8M;
		var bdy3x = function(hh8Z) {
				if ( !! cG6A) {
					cG6A = !1;
					return
				}
				var d4h = {
					oldValue: iG8y,
					newValue: Zy2x()
				};
				if ( !! location.ignored) {
					location.ignored = !1
				} else {
					h4l.w5B(location, "beforeurlchange", d4h);
					if (d4h.stopped) {
						if ( !! iG8y) {
							cG6A = !0;
							Zz2x(iG8y.href, !0)
						}
						return
					}
				}
				V5a = vB2x.location.href;
				iG8y = d4h.newValue;
				h4l.w5B(location, "urlchange", iG8y);
				ba5f.bjI4M(iG8y.href)
			};
		var bCk9b = function() {
				if (V5a != vB2x.location.href) bdy3x();
				eT7M = requestAnimationFrame(bCk9b)
			};
		return function(bL5Q) {
			if ( !! NU8M) return this;
			NU8M = !0;
			vB2x = bL5Q || window;
			if (bds3x && "onhashchange" in window && db6V.mh9Y.trident2) {
				h4l.s4w(vB2x, "hashchange", bdy3x);
				bdy3x()
			} else if (!eT7M) {
				eT7M = requestAnimationFrame(bCk9b)
			}
			return this
		}
	}();
	location.parse = function() {
		var ga7T = /^https?:\/\/.*?\//i,
			jf8X = /[?#]/;
		return function(V5a) {
			var m4q = {
				href: V5a
			};
			V5a = (V5a || "").replace(ga7T, "/").split(jf8X);
			var cw5B = 1;
			if (V5a[0] == "/" && (V5a[1] || "").indexOf("/") == 0) cw5B = 2;
			m4q.path = V5a.splice(0, cw5B).join("?");
			m4q.query = k4o.hf8X(V5a.join("&"));
			return m4q
		}
	}();
	location.same = function(V5a) {
		return Zy2x().href == V5a
	};
	H5M.fu7n.B5G({
		element: location,
		event: ["beforeurlchange", "urlchange"]
	})
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		fL7E = c4g("nm.ut");
	fL7E.sM1x = function(eP7I) {
		var gq7j = {
			text: "",
			start: 0,
			end: 0
		};
		if (eP7I.setSelectionRange) {
			gq7j.start = eP7I.selectionStart;
			gq7j.end = eP7I.selectionEnd;
			gq7j.text = gq7j.start != gq7j.end ? eP7I.value.substring(gq7j.start, gq7j.end) : ""
		} else if (document.selection) {
			var i, Zp2x = document.selection.createRange(),
				wi2x = document.body.createTextRange();
			wi2x.moveToElementText(eP7I);
			gq7j.text = Zp2x.text;
			gq7j.bookmark = Zp2x.getBookmark();
			for (i = 0; wi2x.compareEndPoints("StartToStart", Zp2x) < 0 && Zp2x.moveStart("character", -1) !== 0; i++) {
				if (eP7I.value.charAt(i) == "\n") {
					i++
				}
			}
			gq7j.start = i;
			gq7j.end = gq7j.text.length + gq7j.start
		}
		return gq7j
	};
	fL7E.Zn2x = function(eP7I, gq7j) {
		var wi2x;
		if (!gq7j) {
			gq7j = {
				text: "",
				start: 0,
				end: 0
			}
		}
		eP7I.focus();
		if (eP7I.setSelectionRange) {
			eP7I.setSelectionRange(gq7j.start, gq7j.end)
		} else if (eP7I.createTextRange) {
			wi2x = eP7I.createTextRange();
			if (eP7I.value.length === gq7j.start) {
				wi2x.collapse(false);
				wi2x.select()
			} else {
				wi2x.moveToBookmark(gq7j.bookmark);
				wi2x.select()
			}
		}
	};
	fL7E.Fh5m = function(eP7I, gq7j, cL6F) {
		var gq7j = gq7j || {
			text: "",
			start: 0,
			end: 0
		};
		var bdJ3x, bCj9a, wi2x, JK6E, bCg9X, bCe9V, CK4O;
		this.Zn2x(eP7I, gq7j);
		if (eP7I.setSelectionRange) {
			bdJ3x = eP7I.value;
			bCj9a = bdJ3x.substring(0, gq7j.start) + cL6F + bdJ3x.substring(gq7j.end);
			bCg9X = bCe9V = gq7j.start + cL6F.length;
			CK4O = eP7I.scrollTop;
			eP7I.value = bCj9a;
			if (eP7I.scrollTop != CK4O) {
				eP7I.scrollTop = CK4O
			}
			eP7I.setSelectionRange(bCg9X, bCe9V)
		} else if (eP7I.createTextRange) {
			JK6E = document.selection.createRange();
			JK6E.text = cL6F;
			JK6E.setEndPoint("StartToEnd", JK6E);
			JK6E.select()
		}
		h4l.w5B(eP7I, "keyup")
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		db6V = c4g("nej.p"),
		k4o = c4g("nej.u"),
		ch5m = c4g("nej.ut"),
		D5I = c4g("nm.w"),
		fL7E = c4g("nm.ut"),
		b4f;
	D5I.bCd9U = NEJ.C();
	b4f = D5I.bCd9U.O5T(ch5m.cz5E);
	b4f.cl5q = function(e4i) {
		this.cs5x(e4i)
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.fH7A = e4i.txt;
		this.CH4L = e4i.sgtsContainer;
		this.bCc9T = e4i.sgtsList[0];
		this.Ze2x = e4i.sgtsItem;
		this.nY0x = e4i.rangeData;
		this.Fk5p = e4i.atIndex;
		a3x.z5E(this.Ze2x[0], "selected-item");
		this.Ku6o()
	};
	b4f.bC5H = function() {
		this.bG5L();
		h4l.mv9m(document.body, "keyup", this.bCb9S.g4k(this));
		h4l.mv9m(document.body, "click", this.bCa9R.g4k(this))
	};
	b4f.Ku6o = function() {
		this.bS5X([
			[document.body, "keyup", this.bCb9S.g4k(this)],
			[document.body, "click", this.bCa9R.g4k(this)],
			[this.fH7A, "keydown", this.bBW9N.g4k(this)],
			[this.fH7A, "keypress", this.bBW9N.g4k(this)],
			[this.bCc9T, "click", this.bBV9M.g4k(this)],
			[this.bCc9T, "mouseover", this.CE4I.g4k(this)]
		])
	};
	b4f.CE4I = function(d4h) {
		var cU6O = h4l.U5Z(d4h);
		var q4u = a3x.I5N(this.CH4L, "selected-item");
		if (a3x.bA5F(cU6O, "j-sgt")) {
			a3x.x5C(q4u[0], "selected-item");
			a3x.z5E(cU6O, "selected-item")
		}
	};
	b4f.bCb9S = function(d4h) {
		var q4u = a3x.I5N(this.CH4L, "selected-item");
		var br5w = this.Ze2x.length;
		var iW8O = d4h.keyCode || d4h.which;
		var r4v, j4n;
		switch (iW8O) {
		case 38:
			r4v = a3x.fR7K(q4u[0], "data-index") - 1 < 0 ? br5w - 1 : a3x.fR7K(q4u[0], "data-index") - 1;
			a3x.x5C(q4u[0], "selected-item");
			a3x.z5E(this.Ze2x[r4v], "selected-item");
			break;
		case 40:
			r4v = parseInt(a3x.fR7K(q4u[0], "data-index")) + 1 >= br5w ? 0 : parseInt(a3x.fR7K(q4u[0], "data-index")) + 1;
			a3x.x5C(q4u[0], "selected-item");
			a3x.z5E(this.Ze2x[r4v], "selected-item");
			break;
		case 13:
			this.bBV9M(d4h);
			break;
		case 27:
			this.nH0x();
			break;
		case 32:
			var bl5q = this.fH7A.value;
			var r4v = fL7E.sM1x(this.fH7A);
			if (bl5q.charAt(r4v.start - 1) !== " ") return;
			this.nH0x();
			break
		}
	};
	b4f.bBW9N = function(d4h) {
		var iW8O = d4h.keyCode || d4h.which;
		if (iW8O === 13 || iW8O === 38 || iW8O === 40) {
			h4l.cg5l(d4h);
			d4h.keyCode = 0;
			d4h.which = 0;
			d4h.returnvalue = false
		}
	};
	b4f.bCa9R = function(d4h) {
		var cU6O = d4h.target || d4h.srcElement;
		if (cU6O === this.fH7A) return;
		this.nH0x()
	};
	b4f.bBV9M = function(d4h) {
		h4l.bh5m(d4h);
		var q4u = a3x.I5N(this.CH4L, "selected-item")[0];
		var qV1x = d4h.target || d4h.srcElement;
		var t4x = d4h.type;
		if (a3x.bA5F(qV1x, "lst")) return;
		if (t4x == "click") {
			a3x.x5C(q4u, "selected-item");
			a3x.z5E(qV1x, "selected-item")
		} else qV1x = q4u;
		var j4n = qV1x.innerHTML + " ";
		this.nH0x();
		var gq7j = this.nY0x;
		gq7j.start = this.Fk5p + 1;
		if (db6V.dd6X.browser == "ie" && db6V.dd6X.version < "9.0") {
			this.fH7A.value = this.fH7A.value.substring(0, gq7j.start) + this.fH7A.value.substring(gq7j.end, this.fH7A.value.length);
			gq7j.end = gq7j.start
		}
		fL7E.Fh5m(this.fH7A, gq7j, j4n);
		h4l.w5B(this.fH7A, "keyup")
	};
	b4f.nH0x = function(d4h) {
		if ( !! this.CH4L) a3x.Y5d(this.CH4L, "display", "none");
		this.S5X()
	};
	b4f.uz2x = function(d4h) {
		if ( !! this.CH4L) a3x.Y5d(this.CH4L, "display", "block")
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		D5I = c4g("nm.w"),
		ch5m = c4g("nej.ut"),
		bF5K = c4g("nej.ui"),
		b4f;
	var bOR2x = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
	var bOO2x = a3x.eh7a("m-wgt-atlist");
	var hP8H = a3x.rE1x(bOR2x);
	D5I.bBR9I = NEJ.C();
	b4f = D5I.bBR9I.O5T(bF5K.er7k);
	b4f.cl5q = function(e4i) {
		this.fy7r = {};
		this.cs5x()
	};
	b4f.bj5o = function(e4i) {
		this.fy7r.txt = a3x.y5D(e4i.target);
		this.fy7r.data = e4i.data;
		this.fy7r.offset = e4i.offset;
		this.fy7r.rangeData = e4i.rangeData;
		this.fy7r.atIndex = e4i.atIndex;
		this.bOC2x(e4i);
		this.bk5p(e4i);
		this.fy7r.sgtsContainer = this.o4s;
		this.fy7r.sgtsList = a3x.I5N(this.o4s, "lst");
		this.fy7r.sgtsItem = a3x.I5N(this.o4s, "f-thide");
		this.Iw6q(e4i);
		this.bOB2x = D5I.bCd9U.B5G(this.fy7r)
	};
	b4f.bC5H = function(e4i) {
		this.bG5L();
		this.bOB2x.S5X()
	};
	b4f.bZ5e = function() {
		this.lg9X = hP8H
	};
	b4f.bR5W = function() {
		this.cb5g()
	};
	b4f.bOC2x = function(e4i) {
		this.o4s = a3x.dq6k(a3x.hX8P(a3x.bU5Z(bOO2x, e4i.data)))
	};
	b4f.Iw6q = function(e4i) {
		var bBE9v = a3x.I5N(this.o4s, "selected-item")[0];
		if (bBE9v) a3x.x5C(bBE9v, "selected-item");
		var cO6I = e4i.offset.x + "px";
		var gM7F = e4i.offset.y + "px";
		a3x.Y5d(this.o4s, "left", cO6I);
		a3x.Y5d(this.o4s, "top", gM7F)
	}
})();
(function() {
	var c4g = NEJ.P,
		v5A = c4g("nej.j"),
		fL7E = c4g("nm.ut");
	fL7E.bBD9u = function(bl5q) {
		if (!GUser || !GUser.userId || GUser.userId <= 0) return;
		var cN6H = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
		var Fp5u = bl5q.match(cN6H) || [];
		for (var bd5i = 0; bd5i < Fp5u.length; bd5i++) {
			Fp5u[bd5i] = Fp5u[bd5i].split("@")[1]
		}
		Fp5u = Fp5u.reverse();
		var ht8l = GUser.userId;
		var bOp2x = v5A.tk1x("mentioners" + ht8l) || [];
		var iP8H = Fp5u.concat(bOp2x);
		if (iP8H.length > 10) iP8H = iP8H.slice(0, 10);
		v5A.uG2x("mentioners" + ht8l, iP8H)
	};
	fL7E.bOo2x = function() {
		if (!GUser || !GUser.userId || GUser.userId <= 0) return;
		var ht8l = GUser.userId;
		return v5A.tk1x("mentioners" + ht8l) || []
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		db6V = c4g("nej.p"),
		v5A = c4g("nej.j"),
		k4o = c4g("nej.u"),
		ch5m = c4g("nej.ut"),
		D5I = c4g("nm.w"),
		fL7E = c4g("nm.ut"),
		b4f;
	D5I.bBA9r = NEJ.C();
	b4f = D5I.bBA9r.O5T(ch5m.cz5E);
	b4f.cl5q = function(e4i) {
		this.cs5x(e4i);
		this.bBz9q()
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.fH7A = e4i.txt;
		this.o4s = e4i.body;
		this.bBy9p = e4i.before;
		this.Ka6U = e4i.flag;
		this.bOf2x = e4i.after;
		this.pN0x = [];
		if (db6V.dd6X.browser != "ie") {
			setTimeout(function() {
				this.kW9N()
			}.g4k(this), 0)
		}
		this.Ku6o()
	};
	b4f.bC5H = function() {
		this.bG5L();
		if (this.tz1x) this.tz1x.S5X();
		delete this.tz1x
	};
	b4f.Ku6o = function() {
		this.bS5X([
			[this.fH7A, "keyup", this.bBu9l.g4k(this, this.fH7A)],
			[this.fH7A, "click", this.bBu9l.g4k(this, this.fH7A)],
			[this.fH7A, "focus", this.kW9N.g4k(this)]
		])
	};
	b4f.kW9N = function(d4h) {
		this.nY0x = fL7E.sM1x(this.fH7A)
	};
	b4f.bBz9q = function() {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			window.GFollowers = [];
			return
		}
		var cR6L = window.GUser.userId;
		var V5a = "/api/user/getfollows/" + cR6L;
		var fC7v = v5A.bq5v(V5a, {
			sync: false,
			method: "get",
			query: "offset = 0&limit=1000&order=true",
			onload: function(j4n) {
				window.GFollowers = JSON.parse(j4n).follow
			}.g4k(this),
			onerror: function(j4n) {},
			onbeforerequest: function(j4n) {}
		})
	};
	b4f.bBr9i = function(index) {
		var A5F = this.fH7A.value,
			bi5n, beF3x, beG3x, Ld6X;
		this.bBy9p.innerHTML = k4o.dS7L(A5F.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
		var nG0x = a3x.I5N(this.bBy9p, "j-test");
		for (var bd5i = 0; bd5i < nG0x.length; bd5i++) {
			nG0x[bd5i].innerText = " "
		}
		this.Ka6U.innerHTML = A5F.charAt(index);
		this.bOf2x.innerHTML = k4o.dS7L(A5F.substr(index + 1, A5F.length));
		Ld6X = parseInt(a3x.cW6Q(this.fH7A, "lineHeight"));
		a3x.Y5d(this.o4s, "display", "block");
		beF3x = a3x.hJ8B(this.Ka6U, this.o4s);
		beG3x = a3x.hJ8B(this.fH7A);
		a3x.Y5d(this.o4s, "display", "none");
		var cO6I = beF3x.x + beG3x.x;
		var gM7F = beF3x.y + beG3x.y + Ld6X;
		bi5n = {
			x: cO6I,
			y: gM7F
		};
		this.ctk0x(bi5n)
	};
	b4f.bBu9l = function(eP7I, d4h) {
		h4l.cg5l(d4h);
		var eP7I = eP7I;
		var A5F = eP7I.value;
		var br5w = A5F.length;
		var r4v = fL7E.sM1x(eP7I).start;
		var bBq9h = 0;
		var iW8O = d4h.keyCode || d4h.which;
		var iP8H;
		this.nY0x = fL7E.sM1x(eP7I);
		var bBp9g = false;
		for (var i = 1; i < 20; i++) {
			iP8H = r4v - i;
			if (A5F.charAt(iP8H) === " ") break;
			if (A5F.charAt(iP8H) === "@") {
				bBp9g = true;
				this.Fk5p = bBq9h = iP8H;
				break
			}
		}
		if (bBp9g && d4h.shiftKey === false && iW8O !== 38 && iW8O !== 40) {
			if (iW8O !== 27 && iW8O !== 13) {
				this.tz1x ? this.tz1x.S5X() : null;
				this.bBr9i(bBq9h)
			}
		} else if (iW8O !== 38 && iW8O !== 40 && d4h.keyCode !== 32) {
			this.tz1x ? this.tz1x.S5X() : null
		}
	};
	b4f.ctk0x = function(bi5n) {
		var bi5n = bi5n;
		var j4n = this.yI3x();
		var e4i = {
			parent: document.body,
			offset: bi5n,
			data: j4n,
			target: this.fH7A,
			rangeData: this.nY0x,
			atIndex: this.Fk5p
		};
		this.tz1x ? this.tz1x.S5X() : null;
		this.tz1x = D5I.bBR9I.B5G(e4i)
	};
	b4f.yI3x = function() {
		var ctd0x = fL7E.sM1x(this.fH7A).start;
		var ctc0x = this.Fk5p + 1;
		var bBo9f = fL7E.bOo2x() || [];
		var bBn9e = [];
		var bw5B = this.fH7A.value.substring(ctc0x, ctd0x).toLowerCase();
		bw5B = bw5B.replace(/\[/g, "\\[");
		bw5B = bw5B.replace(/\]/g, "\\]");
		if (window.GFollowers) {
			this.pN0x = window.GFollowers[0] ? window.GFollowers : []
		} else this.pN0x = [];
		if (!this.pN0x[0]) this.bBz9q();
		for (var bd5i = 0; bd5i < bBo9f.length; bd5i++) {
			for (var v5A = 0; v5A < this.pN0x.length; v5A++) {
				if (this.pN0x[v5A].nickname == bBo9f[bd5i]) bBn9e.push(this.pN0x[v5A])
			}
		}
		this.pN0x = k4o.coQ9H(this.pN0x, bBn9e, {
			union: true,
			begin: true
		});
		var cst0x = this.pN0x.length;
		var YR2x = [];
		var Ng7Z, Nm7f;
		if (!this.pN0x[0]) return {
			suggests: YR2x
		};
		for (var i = 0; i < cst0x; i++) {
			Ng7Z = this.pN0x[i].nickname.toLowerCase().search(bw5B);
			Nm7f = this.pN0x[i].py ? this.pN0x[i].py.toLowerCase().search(bw5B) : -1;
			if (Ng7Z !== -1 || Nm7f != -1) YR2x.push(this.pN0x[i]);
			if (YR2x.length === 10) break
		}
		return {
			suggests: YR2x
		}
	};
	b4f.Ls6m = function() {
		var gq7j = this.nY0x || {
			text: "",
			start: 0,
			end: 0
		};
		h4l.w5B(this.fH7A, "focus");
		fL7E.Fh5m(this.fH7A, gq7j, "@");
		this.nY0x = fL7E.sM1x(this.fH7A);
		this.Fk5p = gq7j.start;
		this.bBr9i(this.Fk5p)
	};
	b4f.Df4j = function() {
		if (this.tz1x) this.tz1x.S5X()
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		D5I = c4g("nm.w"),
		ch5m = c4g("nej.ut"),
		bF5K = c4g("nej.ui"),
		b4f;
	var csi0x = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
	var crZ0x = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
	var ge7X = a3x.hX8P(crZ0x);
	var hP8H = a3x.rE1x(csi0x);
	D5I.Ly6s = NEJ.C();
	b4f = D5I.Ly6s.O5T(bF5K.er7k);
	b4f.cl5q = function(e4i) {
		this.fy7r = {};
		this.cs5x()
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.fy7r.txt = a3x.y5D(e4i.target);
		this.Qy9p();
		this.LB6v = D5I.bBA9r.B5G(this.fy7r)
	};
	b4f.bC5H = function(e4i) {
		this.bG5L();
		this.LB6v.S5X()
	};
	b4f.bZ5e = function() {
		this.ca5f = ge7X;
		this.lg9X = hP8H
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.cP6J(a3x.y5D(this.o4s));
		this.fy7r.body = this.o4s;
		this.fy7r.before = i4m[0];
		this.fy7r.flag = i4m[1];
		this.fy7r.after = i4m[2]
	};
	b4f.Qy9p = function() {
		var pI0x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
		for (var i = 0; i < pI0x.length; i++) {
			if (pI0x[i] === "width" && a3x.cW6Q(this.fy7r.txt, pI0x[i]) == "100%") {
				a3x.Y5d(this.o4s, pI0x[i], this.fy7r.txt.offsetWidth + "px");
				continue
			}
			a3x.Y5d(this.o4s, pI0x[i], a3x.cW6Q(this.fy7r.txt, pI0x[i]))
		}
	};
	b4f.Ls6m = function() {
		this.LB6v.Ls6m()
	};
	b4f.Df4j = function() {
		this.LB6v.Df4j()
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		fb7U = NEJ.R,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		H5M = c4g("nej.ut"),
		jH8z = c4g("nm.c"),
		P5U = {},
		b4f;
	if ( !! jH8z.bfb3x) return;
	jH8z.bfb3x = NEJ.C();
	b4f = jH8z.bfb3x.O5T(H5M.cz5E);
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i)
	};
	b4f.bC5H = function() {
		this.bG5L()
	};
	b4f.Ce4i = function(eK7D, dt6n, YN1x) {
		if (P5U[eK7D]) {
			this.hz8r("register commonJST[" + eK7D + "] duplicate");
			return
		}
		if (!k4o.fZ7S(dt6n)) {
			dt6n = ctl.comJST.crP0x(eK7D, dt6n, YN1x)
		}
		P5U[eK7D] = dt6n
	};
	b4f.crN0x = function(YJ1x) {
		if (k4o.en7g(YJ1x)) {
			k4o.bc5h(YJ1x, function(q4u) {
				ctl.comJST.Ce4i.apply(this, q4u)
			}, this)
		} else if (k4o.ks9j(YJ1x)) {
			k4o.ei7b(YJ1x, function(et7m, J5O) {
				ctl.comJST.Ce4i(J5O, et7m)
			})
		}
	};
	b4f.crP0x = function(eK7D, sS1x, YN1x) {
		sS1x = sS1x || {};
		NEJ.X(sS1x, {
			comJST: this.na9R
		});
		if (sS1x.resetDataName && !k4o.en7g(sS1x.resetDataName)) {
			sS1x.resetDataName = [sS1x.resetDataName]
		}
		return function() {
			var j4n = arguments[0],
				ja8S = arguments[1];
			if (sS1x.resetDataName) {
				var iP8H = {};
				for (var i = 0, ii = sS1x.resetDataName.length; i < ii; i++) {
					iP8H[sS1x.resetDataName[i]] = arguments[i]
				}
				j4n = iP8H;
				ja8S = arguments[ii]
			}
			NEJ.X(j4n, sS1x, dC6w);
			if (YN1x) {
				ja8S = ja8S || {};
				NEJ.X(ja8S, YN1x)
			}
			return a3x.bU5Z(eK7D, j4n, ja8S)
		}
	};
	b4f.na9R = function(eK7D) {
		if (!P5U[eK7D]) {
			this.hz8r("commonJST[" + eK7D + "] is unregister");
			return ""
		} else {
			return P5U[eK7D].apply(null, fb7U.slice.call(arguments, 1))
		}
	};
	b4f.dump = function() {
		return P5U
	};
	b4f.hz8r = function(crJ0x) {
		if (console && console.log) {
			console.log(crJ0x)
		}
	};
	var dC6w = function(et7m, J5O) {
			return J5O == "resetDataName"
		};
	c4g("ctl").comJST = jH8z.bfb3x.gc7V();
	a3x.cqB0x({
		comJST: c4g("ctl").comJST.na9R
	})
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		fb7U = NEJ.R,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		H5M = c4g("nej.ut"),
		jH8z = c4g("nm.c"),
		l4p = c4g("nm.x"),
		P5U = {},
		b4f;
	if ( !! jH8z.bfr3x) return;
	jH8z.bfr3x = NEJ.C();
	b4f = jH8z.bfr3x.O5T(H5M.cz5E);
	b4f.cl5q = function() {
		this.cs5x();
		var e4i = {
			"com-mv-artists": function(fk7d, dD6x, DC4G, bfs3x) {
				return a3x.bU5Z("com-mv-artists", {
					artists: fk7d,
					clazz: dD6x,
					boxClazz: bfs3x,
					mark: DC4G ||
					function(cC6w) {
						return cC6w
					},
					escape: k4o.dS7L,
					comJST: ctl.comJST.na9R
				})
			},
			"com-album-artists": function(fk7d, dD6x, DC4G, bfs3x) {
				return a3x.bU5Z("com-album-artists", {
					artists: fk7d,
					clazz: dD6x,
					boxClazz: bfs3x,
					mark: DC4G ||
					function(cC6w) {
						return cC6w
					},
					escape: k4o.dS7L,
					comJST: ctl.comJST.na9R
				})
			},
			"com-artists-title": {
				resetDataName: ["artists"],
				escape: k4o.dS7L
			},
			"com-user-type": function(cX6R, dD6x, kv9m, Pb8T, bBh9Y) {
				return a3x.bU5Z("com-user-type", {
					x: cX6R,
					clazz: dD6x || "",
					clazz2: typeof bBh9Y == "undefined" ? "icn" : bBh9Y,
					before: kv9m || "",
					after: Pb8T || "",
					isEmptyObject: l4p.bIe0x
				})
			}
		};
		for (var C5H in e4i) {
			ctl.comJST.Ce4i(C5H, e4i[C5H])
		}
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i)
	};
	b4f.bC5H = function() {
		this.bG5L()
	};
	c4g("ctl").comJSTUtil = jH8z.bfr3x.gc7V()
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		db6V = c4g("nej.p"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		H5M = c4g("nej.ut"),
		v5A = c4g("nej.j"),
		D5I = c4g("nm.w"),
		fL7E = c4g("nm.ut"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		n4r = c4g("nm.l"),
		bfv3x = [2, 3],
		dE6y = ["sn", "db"],
		b4f, K5P, crq0x = {
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
		YD1x = {
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
		bBe9V = {
			djprogram: " - ",
			album: " - ",
			playlist: " by ",
			song: " - ",
			yunsong: " - ",
			artist: "",
			mv: " - ",
			djradio: " by "
		},
		crh0x = {
			0: 13,
			1: 17,
			3: 19,
			4: 18,
			5: 21,
			6: 24,
			14: 70,
			17: 20
		},
		BQ4U = {
			pubEventWithPics: false,
			pubEventWithoutResource: false,
			pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
		};
	n4r.ww2x = NEJ.C();
	b4f = n4r.ww2x.O5T(n4r.dU7N);
	K5P = n4r.ww2x.cf5k;
	b4f.bj5o = function(e4i) {
		if (e4i.onclose === undefined) {
			e4i.onclose = this.bBd9U.g4k(this)
		}
		this.bk5p(e4i);
		this.yn3x = e4i.isPub;
		this.iV8N = e4i.rid || -1;
		this.el7e = e4i.type || -1;
		this.bfN3x = e4i.purl;
		this.Ml7e = e4i.name || "";
		this.Mn7g = e4i.author || "";
		this.bfS3x = e4i.authors || "";
		this.YA1x = e4i.actId;
		this.Yy1x = e4i.actName;
		this.bBc9T = e4i.title;
		this.Yx1x = {};
		this.cqM0x = e4i.mesg || "";
		this.cqG0x = e4i.placeholder || "说点什么吧";
		this.bga4e = e4i.hideTip;
		this.cqE0x = e4i.videoJumpUrl;
		var i4m, fN7G = +(new Date);
		try {
			i4m = top.localCache.y5D("user") || {}
		} catch (e) {
			i4m = {}
		}
		for (var i = 0, i4m = i4m.bindings || [], eo7h; i < i4m.length; ++i) {
			eo7h = !i4m[i].tokenJsonStr ? null : JSON.parse(i4m[i].tokenJsonStr);
			if (!eo7h || eo7h.expires_in === undefined) continue;
			var Yv1x = parseInt(eo7h.expires_in),
				Yu1x = parseInt(i4m[i].refreshTime),
				cqD0x = (Yv1x + Yu1x) * 1e3 - 5 * 60 * 1e3;
			if (cqD0x > fN7G) this.Yx1x[i4m[i].type] = !0
		}
		this.vp2x = D5I.Eu4y.B5G({
			parent: this.Yt1x,
			err: this.bAX9O
		});
		if (this.gF7y) {
			this.gF7y.S5X()
		}
		this.gF7y = D5I.Ly6s.B5G({
			parent: document.body,
			target: this.eR7K
		});
		if (this.el7e == 24 || this.el7e == 21 || this.Bz4D()) {
			this.xh2x.style.display = "none"
		} else {
			this.xh2x.style.display = "";
			this.nq9h = D5I.bmV5a.B5G({
				parent: this.bgq4u,
				button: this.xh2x,
				onstartupload: this.bAW9N.g4k(this, true),
				onfinishupload: this.bAW9N.g4k(this, false)
			})
		}
		if (this.Bz4D()) {
			this.oh0x.innerText = "";
			a3x.z5E(this.oh0x, "info-video");
			a3x.z5E(this.bgt4x, "f-hide")
		} else {
			a3x.x5C(this.bgt4x, "f-hide")
		}
	};
	b4f.bC5H = function() {
		this.bG5L();
		if (this.vp2x) {
			this.vp2x.S5X();
			delete this.vp2x
		}
		if (this.gF7y) {
			this.gF7y.S5X();
			delete this.gF7y
		}
		if (this.nq9h) {
			this.nq9h.S5X();
			delete this.nq9h
		}
		if (this.ll9c) {
			this.ll9c.S5X();
			delete this.ll9c
		}
	};
	b4f.bZ5e = function() {
		this.ca5f = "m-wgt-sharewin"
	};
	b4f.bR5W = function() {
		this.cb5g();
		this.bAV9M = a3x.cP6J(this.o4s)[0];
		var bo5t = a3x.I5N(this.o4s, "j-flag");
		this.pP0x = bo5t.shift();
		this.bAX9O = bo5t.shift();
		this.Yt1x = bo5t.shift();
		this.eR7K = bo5t.shift();
		this.oh0x = bo5t.shift();
		this.bgz4D = bo5t.shift();
		this.cqu0x = bo5t.shift();
		this.xh2x = bo5t.shift();
		this.ci5n = bo5t.shift();
		this.bgq4u = bo5t.shift();
		this.zj3x = bo5t.shift();
		this.cwK1x = bo5t.shift();
		this.bgt4x = bo5t.shift();
		this.eb7U = bo5t.shift();
		this.Yl1x = a3x.I5N(this.bgt4x, "j-t");
		this.AD3x = H5M.Du4y.B5G({
			list: a3x.cP6J(this.pP0x),
			selected: "z-slt",
			onchange: this.bgH4L.g4k(this)
		});
		if (db6V.dd6X.browser == "ie" && db6V.dd6X.version < "8.0") {
			a3x.Y5d(this.Yt1x, "position", "relative");
			a3x.Y5d(this.Yt1x, "zIndex", "10")
		}
		h4l.s4w(window, "snsbind", this.Nl7e.g4k(this));
		h4l.s4w(this.eR7K, "input", this.fm7f.g4k(this));
		h4l.s4w(this.eR7K, "keyup", this.tK1x.g4k(this));
		h4l.s4w(this.o4s, "click", this.cx5C.g4k(this));
		this.R5W = p4t.bja4e.B5G();
		this.R5W.s4w("onshareall", this.Yk1x.g4k(this, 0));
		this.R5W.s4w("onshareerror", this.hU8M.g4k(this));
		this.R5W.s4w("onshareprivate", this.Yk1x.g4k(this, 1));
		this.Yi1x = p4t.xQ2x.B5G();
		this.hz8r = p4t.hK8C.B5G();
		try {
			this.Nr7k = top.api.sharePermission
		} catch (e) {}
		if (!this.Nr7k) {
			this.Nr7k = BQ4U;
			v5A.bq5v("/api/event/user/permission", {
				type: "json",
				onload: function(d4h) {
					if (d4h.code == 200) {
						this.Nr7k = NEJ.EX(BQ4U, d4h)
					}
				}.g4k(this)
			})
		}
	};
	b4f.bgH4L = function(d4h) {
		d4h.index == 0 ? a3x.x5C(this.bAV9M, "m-plshare") : a3x.z5E(this.bAV9M, "m-plshare");
		this.Yt1x.style.display = d4h.index == 0 ? "none" : "";
		this.cqu0x.style.display = d4h.index == 0 ? "" : "none";
		this.xh2x.style.display = d4h.index == 0 ? "" : "none";
		if (this.el7e == 24 || this.el7e == 21) {
			this.xh2x.style.display = "none"
		}
		this.bAX9O.style.display = "none";
		this.eR7K.value = "";
		this.bT5Y();
		this.Bd3x();
		if (d4h.index == 0) {
			var dp6j = a3x.cW6Q(this.eR7K, "width");
			if (dp6j == "auto" || !dp6j) {
				return
			} else {
				if (this.gF7y) {
					this.gF7y.S5X()
				}
				this.gF7y = D5I.Ly6s.B5G({
					parent: document.body,
					target: this.eR7K
				})
			}
			this.bgq4u.style.display = ""
		} else {
			if (this.gF7y) {
				this.gF7y.S5X();
				delete this.gF7y
			}
			this.bgq4u.style.display = "none"
		}
	};
	b4f.cx5C = function(d4h) {
		var f4j = h4l.U5Z(d4h, "d:action");
		if (!f4j) return;
		if (a3x.u5z(f4j, "action") == "search") {
			h4l.cg5l(d4h)
		} else if (a3x.u5z(f4j, "default") === undefined) {
			h4l.cg5l(d4h)
		}
		switch (a3x.u5z(f4j, "action")) {
		case "txt":
			this.kW9N();
			break;
		case "search":
			if (this.Bz4D()) {
				top.location.href = this.cqE0x
			} else if (this.yn3x && this.el7e != 24) {
				if (this.ll9c) {
					this.ll9c.S5X()
				}
				this.ll9c = D5I.baL2x.B5G({
					parent: this.o4s.parentNode,
					onfinish: this.bgN4R.g4k(this),
					oncancel: this.cqr0x.g4k(this)
				});
				this.bgP4T = true;
				this.o4s.style.display = "none";
				this.Bb3x(this.iV8N < 0 ? "添加音乐" : "更换音乐")
			}
			break;
		case "at":
			h4l.rT1x(d4h); !! this.gC7v && this.gC7v.bp5u();
			this.gF7y.Ls6m();
			this.fz7s();
			break;
		case "emot":
			h4l.rT1x(d4h); !! this.gF7y && this.gF7y.Df4j();
			if (!this.gC7v) {
				this.gC7v = n4r.EW5b.B5G({
					parent: this.bgz4D
				});
				this.gC7v.s4w("onselect", this.vx2x.g4k(this))
			}
			this.gC7v.N5S();
			break;
		case "upload":
			break;
		case "sns":
			h4l.bh5m(d4h);
			var bgU4Y, bw5B, t4x = a3x.u5z(f4j, "type");
			if (!this.Yx1x[t4x]) {
				bgU4Y = f4j.href.split("?");
				bw5B = k4o.hf8X(bgU4Y[1]);
				bw5B["csrf_token"] = v5A.gI7B("__csrf");
				top.open(bgU4Y[0] + "?" + k4o.cY6S(bw5B));
				return
			}
			var bu5z = {
				2: "sn",
				3: "db",
				4: "rr"
			};
			l4p.yA3x(f4j, "u-slg-" + bu5z[t4x] + "-gray");
			break;
		case "close":
			!! this.gC7v && this.gC7v.bp5u();
			this.bBd9U();
			break;
		case "share":
			h4l.bh5m(d4h);
			if (this.Bz4D()) {
				if (!a3x.bA5F(f4j, "u-btn2-2-dis")) {
					this.cqp0x()
				}
			} else if (a3x.bA5F(f4j, "u-btn2-2-dis")) {
				if (!this.Nr7k.pubEventWithoutResource && this.iV8N < 0) {
					this.cqn0x()
				} else {}
			} else if (this.iV8N < 0 && !this.eR7K.value && this.nq9h && this.nq9h.No7h().length == 0) {
				n4r.Z5e.N5S({
					type: 2,
					tip: "请输入内容"
				})
			} else {
				this.cqd0x()
			}
			break
		}
	};
	b4f.cqn0x = function() {
		var si1x = 0,
			bgZ4d = function() {
				if (si1x % 2) {
					a3x.x5C(this.oh0x, "z-show")
				} else {
					a3x.z5E(this.oh0x, "z-show")
				}
				si1x++;
				if (si1x > 5) {
					clearInterval(eT7M)
				}
			},
			eT7M;
		return function() {
			si1x = 0;
			clearInterval(eT7M);
			eT7M = setInterval(bgZ4d.g4k(this), 200)
		}
	}();
	b4f.Nl7e = function(m4q) {
		m4q = m4q.result;
		this.Yx1x[m4q.type] = !0;
		var r4v = k4o.cT6N(bfv3x, m4q.type),
			cd5i = "u-slg-" + dE6y[r4v] + "-gray";
		a3x.x5C(this.Yl1x[r4v], cd5i)
	};
	b4f.bgN4R = function(bv5A) {
		var j4n = bv5A.data;
		this.iV8N = bv5A.id;
		this.el7e = bv5A.type;
		this.o4s.style.display = "";
		this.Bb3x(this.bBc9T);
		this.ll9c && this.ll9c.S5X();
		this.bgP4T = false;
		this.bfN3x = j4n.picUrl;
		this.Ml7e = j4n.title || "";
		this.Mn7g = j4n.author || "";
		this.bfS3x = j4n.authors || "";
		this.cqb0x();
		this.Ye1x()
	};
	b4f.cqr0x = function() {
		this.ll9c && this.ll9c.S5X();
		this.o4s.style.display = "";
		this.Bb3x(this.bBc9T);
		this.bgP4T = false;
		this.Ye1x()
	};
	b4f.vx2x = function(d4h) {
		var bl5q = "[" + d4h.text + "]";
		fL7E.Fh5m(this.eR7K, this.nY0x, bl5q);
		this.fz7s()
	};
	b4f.fm7f = function(d4h) {
		db6V.dd6X.browser == "ie" && db6V.dd6X.version < "7.0" ? setTimeout(this.fz7s.g4k(this), 0) : this.fz7s()
	};
	b4f.tK1x = function(d4h) {
		this.kW9N();
		if (d4h.keyCode == 8) this.fz7s()
	};
	b4f.fz7s = function() {
		this.kW9N();
		this.Bd3x()
	};
	b4f.Bd3x = function() {
		var br5w = Math.ceil(k4o.fe7X(this.eR7K.value.trim()) / 2);
		this.ci5n.innerText = 140 - br5w;
		br5w > 140 ? a3x.eD7w(this.ci5n, "s-fc4", "s-fc6") : a3x.eD7w(this.ci5n, "s-fc6", "s-fc4")
	};
	b4f.cqd0x = function() {
		if (this.ct5y()) return;
		if (k4o.fe7X(this.eR7K.value.trim()) > 280) {
			this.bT5Y("字数超过140个字符");
			return
		}
		var t4x = this.AD3x.sa1x(),
			j4n;
		if (t4x == 0) {
			for (var i = 0, FN5S = []; i < this.Yl1x.length; ++i) {
				if (!a3x.bA5F(this.Yl1x[i], "u-slg-" + dE6y[i] + "-gray")) FN5S.push(bfv3x[i])
			}
			this.ct5y(!0);
			j4n = {
				id: this.iV8N,
				msg: this.eR7K.value.trim(),
				type: this.Yd1x(this.el7e),
				picUrl: this.bfN3x,
				snsTypes: FN5S.join(","),
				isPub: this.yn3x
			};
			if (this.YA1x > 0) {
				j4n.actId = this.YA1x;
				if (this.Yy1x) {
					j4n.msg = "#" + this.Yy1x + "#" + j4n.msg
				}
			}
			var mR9I = this.nq9h && this.nq9h.No7h();
			if (mR9I && mR9I.length) {
				j4n.pics = mR9I
			}
			this.R5W.bVn4r(j4n)
		} else {
			var rv1x = this.vp2x.Mp7i();
			if (rv1x.length <= 0) {
				this.bT5Y("请至少选择一位好友");
				return
			}
			this.R5W.bVl4p({
				data: {
					id: this.iV8N,
					msg: this.eR7K.value.trim(),
					type: this.Yd1x(this.el7e),
					userIds: "[" + rv1x.join(",") + "]"
				}
			})
		}
	};
	b4f.cqp0x = function() {
		if (this.ct5y()) {
			return
		}
		this.hz8r.gd7W("click", {
			target: "share",
			targetid: "button",
			page: "sharevideo"
		});
		if (k4o.fe7X(this.eR7K.value.trim()) > 280) {
			this.bT5Y("字数超过140个字符");
			return
		}
		this.ct5y(!0);
		var j4n = {
			msg: this.eR7K.value.trim() || "",
			type: "video"
		},
			cpZ0x = {
				videoId: this.iV8N
			};
		if (this.YA1x > 0) {
			j4n.actId = this.YA1x;
			if (this.Yy1x) {
				j4n.msg = "#" + this.Yy1x + "#" + j4n.msg
			}
		}
		j4n.videoinfo = JSON.stringify(cpZ0x);
		this.R5W.bVk4o({
			data: {
				videoId: this.iV8N,
				commit: true
			},
			data2: j4n,
			snsTypes: ""
		})
	};
	b4f.Yk1x = function(t4x, m4q) {
		this.ct5y(!1);
		this.bp5u();
		if (!this.bga4e) {
			if (this.Bz4D()) {
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
		h4l.w5B(n4r.ww2x, "sharesuccess", {
			isPrivate: t4x,
			rid: this.iV8N,
			rtype: this.el7e,
			data: m4q.event
		});
		this.w5B("onshare")
	};
	b4f.hU8M = function(m4q) {
		this.ct5y(!1);
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
				return l4p.eU7N({
					clazz: "m-layer-w2",
					btntxt: "知道了",
					message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
				})
			}
		}
		this.bT5Y(bD5I)
	};
	b4f.kW9N = function() {
		this.nY0x = fL7E.sM1x(this.eR7K)
	};
	b4f.bT5Y = function(bD5I) {
		this.dw6q(this.eb7U, bD5I)
	};
	b4f.ct5y = function(cG6A) {
		return this.dL6F(this.zj3x, cG6A, "分享", "分享中...")
	};
	b4f.Yd1x = function(jl8d) {
		return crq0x[jl8d] || ""
	};
	b4f.cpY0x = function() {
		var eP7I, tl1x = this.Yd1x(this.el7e);
		this.oh0x.style.display = "";
		if (this.iV8N < 0) {
			this.oh0x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
		} else {
			if (!this.Ml7e) {
				this.oh0x.style.display = "none";
				return
			}
			var Yc1x = this.yn3x && this.el7e != 24;
			eP7I = (YD1x[tl1x] ? YD1x[tl1x] + "：" : "") + this.Ml7e + (bBe9V[tl1x] || " ") + (tl1x == "mv" || tl1x == "album" ? this.bfS3x || this.Mn7g : this.Mn7g);
			a3x.dK6E(this.oh0x, "m-xwgt-share-infobar", {
				canChange: Yc1x,
				info: eP7I
			});
			if (Yc1x) {
				a3x.x5C(this.oh0x, "z-dis")
			} else {
				a3x.z5E(this.oh0x, "z-dis")
			}
		}
		a3x.x5C(this.oh0x, "info-video")
	};
	b4f.cqb0x = function() {
		var tl1x = this.Yd1x(this.el7e),
			eP7I = (YD1x[tl1x] ? YD1x[tl1x] + "：" : "") + this.Ml7e + (bBe9V[tl1x] || " ") + (tl1x == "mv" || tl1x == "album" ? this.bfS3x || this.Mn7g : this.Mn7g);
		Yc1x = this.yn3x && this.el7e != 24;
		if (this.Bz4D()) {} else {
			a3x.x5C(this.oh0x, "info-video");
			a3x.dK6E(this.oh0x, "m-xwgt-share-infobar", {
				canChange: Yc1x,
				isPub: this.yn3x,
				info: eP7I
			})
		}
	};
	b4f.cpW0x = function() {
		var FR5W = this.eR7K.value;
		if (this.yn3x) {
			if ( !! this.bgP4T) {
				return !!FR5W && !! FR5W.length || !! this.nq9h && this.nq9h.No7h().length > 0
			} else {
				return !(this.iV8N < 0) || !! FR5W && !! FR5W.length || !! this.nq9h && this.nq9h.No7h().length > 0
			}
		} else {
			return !!FR5W && !! FR5W.length || !! this.nq9h && this.nq9h.No7h().length > 0
		}
	};
	b4f.Ye1x = function() {
		var bAQ8I = false;
		if (!this.yn3x || this.Nr7k.pubEventWithoutResource || !(this.iV8N < 0)) {
			bAQ8I = true
		}
		if (bAQ8I) {
			a3x.x5C(this.zj3x, "u-btn2-2-dis")
		} else {
			a3x.z5E(this.zj3x, "u-btn2-2-dis")
		}
	};
	b4f.bAW9N = function(bhn4r) {
		if (bhn4r) {
			a3x.z5E(this.zj3x, "u-btn2-2-dis")
		} else {
			this.Ye1x()
		}
	};
	b4f.bBd9U = function(d4h) {
		if (d4h) {
			d4h.stopped = true
		}
		if (this.cpW0x()) {
			l4p.gP8H({
				title: "提示",
				message: "是否退出本次编辑？",
				btnok: "退出",
				action: function(W5b) {
					if (W5b == "ok") {
						this.w5B("forceclose", {});
						this.bp5u()
					}
				}.g4k(this)
			})
		} else {
			this.w5B("forceclose", {});
			this.bp5u()
		}
	};
	b4f.Bb3x = function(eB7u, dy6s) {
		this.nl9c.zn3x(eB7u, dy6s)
	};
	b4f.Ya1x = function(t4x) {
		this.hz8r.gd7W("page", {
			type: t4x
		})
	};
	b4f.Bz4D = function() {
		return this.el7e == 39
	};
	b4f.N5S = function() {
		var coT9K = function(q4u, r4v) {
				var cd5i = "u-slg-" + dE6y[r4v] + "-gray";
				!this.Yx1x[bfv3x[r4v]] ? a3x.z5E(q4u, cd5i) : a3x.x5C(q4u, cd5i)
			};
		return function() {
			K5P.N5S.call(this);
			this.o4s.style.display = "";
			this.bT5Y();
			this.ct5y(!1);
			this.AD3x.LO7H(0);
			this.eR7K.focus();
			this.eR7K.value = this.cqM0x || "";
			this.eR7K.placeholder = this.cqG0x || "";
			if (!this.Bz4D()) {
				this.cpY0x()
			} else {
				a3x.z5E(this.oh0x, "info-video");
				a3x.dK6E(this.oh0x, "m-xwgt-share-videobar", {
					title: this.Ml7e,
					picUrl: this.bfN3x
				})
			}
			this.fz7s();
			this.vp2x.bPL2x();
			k4o.bc5h(this.Yl1x, coT9K, this);
			this.kW9N();
			if (this.yn3x) {
				this.pP0x.style.display = "none"
			} else {
				this.pP0x.style.display = ""
			}
			this.Ye1x()
		}
	}();
	b4f.bp5u = function(d4h) {
		K5P.bp5u.call(this); !! this.gC7v && this.gC7v.bp5u();
		if (this.vp2x) {
			this.vp2x.S5X();
			delete this.vp2x
		}
		if (this.gF7y) {
			this.gF7y.S5X();
			delete this.gF7y
		}
		if (this.nq9h) {
			this.nq9h.S5X();
			delete this.nq9h
		}
		if (this.bAL8D) {
			this.bAL8D = this.bAL8D.S5X()
		}
		if (this.ll9c) {
			this.ll9c.S5X();
			delete this.ll9c
		}
	};
	l4p.mq9h = function(e4i) {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			top.login();
			return
		}
		if (e4i.title === undefined) {
			e4i.title = "分享"
		}
		if (e4i.actId && e4i.type != 39) {
			var t4x = crh0x[e4i.resourceType],
				do6i = e4i.resourceJson,
				hl8d;
			if (k4o.fn7g(do6i)) {
				try {
					do6i = JSON.parse(do6i)
				} catch (e) {}
			}
			if (t4x) {
				hl8d = l4p.bHX0x(t4x, do6i);
				e4i.name = hl8d.title;
				e4i.author = hl8d.author;
				e4i.picUrl = hl8d.picUrl;
				e4i.type = t4x;
				e4i.rid = (do6i || []).id
			}
		}
		n4r.ww2x.N5S(e4i)
	};
	H5M.fu7n.B5G({
		element: n4r.ww2x,
		event: ["sharesuccess"]
	})
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		h4l = c4g("nej.v"),
		a3x = c4g("nej.e"),
		v5A = c4g("nej.j"),
		n4r = c4g("nm.l"),
		D5I = c4g("nm.w"),
		bF5K = c4g("nej.ui"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		b4f, K5P;
	n4r.XX1x = NEJ.C();
	b4f = n4r.XX1x.O5T(n4r.dU7N);
	K5P = n4r.XX1x.cf5k;
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		h4l.s4w(i4m[0], "click", this.AF3x.g4k(this))
	};
	b4f.bZ5e = function() {
		this.ca5f = "m-import-ok"
	};
	b4f.bj5o = function(e4i) {
		e4i.parent = e4i.parent || document.body;
		e4i.title = "歌曲同步完成";
		this.bk5p(e4i)
	};
	b4f.bC5H = function() {
		this.bG5L()
	};
	b4f.AF3x = function(d4h) {
		this.bp5u();
		if (location.pathname.indexOf("my") >= 0) {
			location.reload()
		} else {
			location.dispatch2("/my/")
		}
	};
	b4f.zH3x = function() {
		this.bp5u()
	};
	b4f.bFj0x = function(d4h) {
		if (d4h.keyCode == 13) this.Em4q()
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		h4l = c4g("nej.v"),
		a3x = c4g("nej.e"),
		v5A = c4g("nej.j"),
		M5R = c4g("nej.p"),
		k4o = c4g("nej.u"),
		n4r = c4g("nm.l"),
		D5I = c4g("nm.w"),
		bF5K = c4g("nej.ui"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		b4f, K5P;
	n4r.bAK8C = NEJ.C();
	b4f = n4r.bAK8C.O5T(n4r.dU7N);
	b4f.bZ5e = function() {
		this.ca5f = "m-programtips-layer"
	};
	b4f.bR5W = function() {
		this.cb5g();
		this.bV5a = a3x.I5N(this.o4s, "j-flag")
	};
	b4f.bj5o = function(e4i) {
		e4i.clazz = " m-layer-programtips";
		e4i.parent = e4i.parent || document.body;
		e4i.title = "付费内容提示";
		e4i.draggable = !0;
		e4i.destroyalbe = !0;
		e4i.mask = true;
		this.bk5p(e4i);
		this.gA7t = e4i.id;
		this.cop9g = e4i.radiotype;
		this.kK9B = location.protocol + "//" + (this.coj9a() || "music.163.com") + "/m/" + this.cop9g + "?id=" + this.gA7t;
		this.cob9S()
	};
	b4f.bC5H = function() {
		this.bG5L()
	};
	b4f.zH3x = function() {
		this.bp5u()
	};
	b4f.AF3x = function(d4h) {
		this.w5B("onok", A5F);
		this.bp5u()
	};
	l4p.bAG8y = function(e4i) {
		n4r.bAK8C.B5G(e4i).N5S()
	};
	b4f.cob9S = function() {
		v5A.bq5v("/api/web/qrcode/get", {
			method: "POST",
			type: "json",
			data: k4o.cY6S({
				url: this.kK9B,
				size: 180
			}),
			onload: function(j4n) {
				if (j4n.code == 200) {
					this.cnJ9A(j4n.qrcodeImageUrl)
				} else {
					alert("二维码获取失败")
				}
			}.g4k(this)
		})
	};
	b4f.coj9a = function() {
		var cnH9y = location.host;
		if (cnH9y.indexOf("music") >= 0) {
			return "music.163.com"
		} else {
			return "igame.163.com"
		}
	};
	b4f.cnJ9A = function(jB8t) {
		this.bV5a[0].style.backgroundImage = "url(" + jB8t + ")"
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		db6V = c4g("nej.p"),
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
	b4f = F5K.cM6G.O5T(H5M.dm6g);
	b4f.bH5M = function() {
		var px0x = !1;
		return function() {
			if (px0x) return;
			px0x = !0;
			this.bM5R();
			if (top == self) {
				return
			}
			this.rM1x = a3x.y5D("g_backtop");
			if (window.GRef != "mail") {} else {
				this.bAF8x()
			}
			H5M.fu7n.B5G({
				element: window,
				event: ["share", "playchange", "snsbind", "playstatechange"]
			});
			this.bS5X([
				[window, "scroll", this.xU3x.g4k(this)],
				[document, "keyup", this.cnD9u.g4k(this)],
				[document.body, "click", this.rN1x.g4k(this)],
				[document, "mouseup", this.cnC9t.g4k(this)],
				[this.rM1x, "click", this.OS8K.g4k(this)],
				[p4t.rW1x, "message", this.te1x.g4k(this)]
			]);
			l4p.bVD4H(document.body);
			this.xU3x();
			if (this.xV3x !== false && typeof GUser !== "undefined" && GUser.userId > 0) p4t.rW1x.gc7V().ui1x();
			try {
				top.GUser = NEJ.X(top.GUser, GUser);
				top.api.refreshUserInfo();
				if (db6V.dd6X.browser == "ie" && parseInt(db6V.dd6X.version) < 9 && /#(.*?)$/.test(top.document.title)) {
					top.document.title = "网易云音乐"
				} else {
					var gu7n = top.player.getPlaying();
					if (gu7n && gu7n.track && gu7n.playing) {
						top.document.title = decodeURIComponent("%E2%96%B6%20") + gu7n.track.name
					} else {
						top.document.title = document.title
					}
				}
			} catch (e) {}
			window.share = this.xm2x.g4k(this);
			this.ka8S = p4t.hK8C.B5G();
			window.log = this.mf9W.g4k(this);
			var rj1x = location.search;
			if (rj1x) {
				var bw5B = rj1x.substr(rj1x.indexOf("?") + 1),
					fJ7C = k4o.hf8X(bw5B);
				if (fJ7C && fJ7C["_hash"]) location.hash = fJ7C["_hash"]
			}
		}
	}();
	b4f.cnD9u = function(d4h) {
		var f4j = h4l.U5Z(d4h);
		try {
			if (d4h.keyCode == 80 && l4p.bIf0x() || ["textarea", "input"].indexOf(f4j.tagName.toLowerCase()) >= 0) return;
			h4l.w5B(top.document, "keyup", {
				ctrlKey: d4h.ctrlKey,
				keyCode: d4h.keyCode
			})
		} catch (e) {}
	};
	b4f.rN1x = function(d4h) {
		var f4j = h4l.U5Z(d4h);
		if (f4j && f4j.tagName == "INPUT") return;
		var f4j = h4l.U5Z(d4h, "d:pid");
		if (f4j) {
			h4l.cg5l(d4h);
			var oO0x = a3x.u5z(f4j, "pid"),
				xX3x = a3x.u5z(f4j, "ptype"),
				W5b = a3x.u5z(f4j, "action") || "play";
			switch (W5b) {
			case "subscribe":
				l4p.lJ9A({
					tracks: [oO0x]
				});
				break
			}
		}
		f4j = h4l.U5Z(d4h, "d:resAction");
		if (f4j && f4j.className.indexOf("-dis") == -1) {
			var cI6C = a3x.u5z(f4j, "resId"),
				t4x = a3x.u5z(f4j, "resType"),
				bhT4X = a3x.u5z(f4j, "resRadiotype"),
				bhU4Y = a3x.u5z(f4j, "resRadioid"),
				dI6C = a3x.u5z(f4j, "resFrom"),
				j4n = a3x.u5z(f4j, "resData"),
				W5b = a3x.u5z(f4j, "resAction"),
				bbn2x = a3x.u5z(f4j, "resCopyright"),
				XR1x = a3x.u5z(f4j, "resAuditstatus");
			if (W5b != "log" && W5b != "bilog") h4l.cg5l(d4h);
			switch (W5b) {
			case "log":
				j4n = (j4n || "").split("|");
				if ( !! j4n[0]) {
					var bb5g = {
						id: cI6C,
						alg: j4n[2] || "itembased",
						scene: j4n[3],
						position: j4n[1] || 0
					};
					if ( !! j4n[4]) bb5g.srcid = j4n[4];
					window.log(j4n[0], bb5g)
				}
				break;
			case "bilog":
				var baM2x = a3x.u5z(f4j, "logAction"),
					baN2x = a3x.u5z(f4j, "logJson");
				window.log(baM2x, baN2x);
				break;
			case "share":
				if (XR1x && XR1x == 1) {
					l4p.hR8J("由于版权问题，该节目暂时无法分享。")
				} else {
					share(cI6C, t4x, a3x.u5z(f4j, "resPic"), a3x.u5z(f4j, "resName"), a3x.u5z(f4j, "resAuthor"), a3x.u5z(f4j, "resAuthors"))
				}
				break;
			case "fav":
			case "subscribe":
				if (t4x == 18) {
					var pJ0x = a3x.u5z(f4j, "resLevel"),
						qq0x = a3x.u5z(f4j, "resFee");
					if (pJ0x == 10) {
						l4p.tI1x(qq0x, cI6C, "song");
						break
					}
					l4p.lJ9A({
						tracks: [cI6C]
					})
				}
				break;
			case "download":
				l4p.Sx0x({
					id: cI6C,
					type: t4x
				});
				break;
			case "programtips":
				if (XR1x && XR1x == 1) {
					l4p.hR8J("由于版权问题，该节目暂时无法分享。")
				} else {
					l4p.bAG8y({
						id: bhU4Y,
						radiotype: bhT4X
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
	b4f.cnC9t = function(d4h) {
		try {
			h4l.w5B(top.document, "mouseup")
		} catch (e) {}
	};
	b4f.xU3x = function() {
		var cnA9r = function() {
				var co5t = window.innerHeight;
				if (!k4o.uj1x(co5t)) co5t = (document.documentElement || document.body).clientHeight;
				return co5t
			};
		return function(d4h) {
			if (!this.rM1x) return;
			var XP1x = cnA9r(),
				fP7I = document.documentElement.scrollTop || document.body.scrollTop;
			a3x.Y5d(this.rM1x, "display", fP7I > 0 ? "" : "none");
			if (db6V.dd6X.browser == "ie" && db6V.dd6X.version < "7.0") {
				var gl7e = Math.min(document.body.clientHeight, XP1x + fP7I) - 204;
				a3x.Y5d(this.rM1x, "top", gl7e + "px")
			}
		}
	}();
	b4f.OS8K = function(d4h) {
		h4l.cg5l(d4h);
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0
	};
	b4f.xm2x = function() {
		var bhZ4d = function(d4h) {
				h4l.w5B(window, "share", d4h)
			};
		return function(cI6C, t4x, Ex4B, T5Y, Pr8j, Pu8m) {
			l4p.mq9h({
				rid: cI6C,
				type: t4x,
				purl: Ex4B,
				name: T5Y,
				author: Pr8j,
				authors: Pu8m,
				onshare: bhZ4d.g4k(this)
			})
		}
	}();
	b4f.mf9W = function(W5b, bb5g) {
		try {
			top.log(W5b, bb5g)
		} catch (e) {
			switch (W5b) {
			case "play":
				this.ka8S.eC7v(bb5g);
				break;
			case "search":
				this.ka8S.bKy1x(bb5g);
				break;
			default:
				this.ka8S.gd7W(W5b, bb5g)
			}
		}
	};
	b4f.bAF8x = function() {
		var XN1x, bih4l = false,
			bs5x = [45, 60];
		var cnz9q = function(bD5I) {
				if (bD5I.title != "MailBoxImport") return;
				var Q5V = JSON.parse(bD5I.content || "null") || X5c;
				if (Q5V.status == 10) {
					n4r.XX1x.B5G().N5S();
					window.clearTimeout(XN1x)
				}
			};
		var tr1x = function(d4h) {
				if (d4h.code == 200) {
					if (d4h.status == 1) {
						h4l.s4w(p4t.yH3x, "message", cnz9q.g4k(this));
						p4t.yH3x.B5G().bcm3x();
						bih4l = true
					} else {
						if (bih4l) {
							if (d4h.status == 10) {
								n4r.XX1x.B5G().N5S();
								h4l.hD8v(p4t.yH3x, "message");
								window.clearTimeout(XN1x);
								bih4l = false
							}
						} else {
							window.clearTimeout(XN1x)
						}
					}
				}
			};
		return function() {
			var ru1x = bs5x.shift() * 1e3;
			v5A.bq5v("/api/musicbox/mail/status", {
				type: "json",
				method: "get",
				onload: tr1x.g4k(this)
			});
			if (ru1x) {
				XN1x = window.setTimeout(arguments.callee, ru1x)
			}
		}
	}();
	b4f.te1x = function(d4h) {
		try {
			top.polling(d4h)
		} catch (e) {}
	}
})()