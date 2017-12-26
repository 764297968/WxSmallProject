(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		fb7U = NEJ.R,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		M5R = c4g("nej.ut"),
		yV3x;
	if ( !! M5R.YF1x) return;
	M5R.YF1x = NEJ.C();
	yV3x = M5R.YF1x.O5T(M5R.cz5E);
	yV3x.cl5q = function() {
		this.jx8p = {
			onchange: this.gg7Z.g4k(this),
			ondragend: this.gg7Z.dT7M(this, !0)
		};
		this.cs5x()
	};
	yV3x.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.jx8p.view = a3x.y5D(e4i.track);
		this.jx8p.body = a3x.y5D(e4i.slide);
		this.jx8p.mbar = this.jx8p.view;
		this.td1x(e4i.range);
		this.bS5X([
			[this.jx8p.view, "mousedown", this.bUi4m.g4k(this)]
		]);
		this.iU8M = M5R.vP2x.B5G(this.jx8p)
	};
	yV3x.bC5H = function() {
		this.bG5L();
		this.iU8M.S5X();
		delete this.iU8M;
		delete this.gG7z;
		delete this.jx8p.view;
		delete this.jx8p.body;
		delete this.jx8p.mbar
	};
	yV3x.gg7Z = function(d4h, gB7u) {
		var bsm6g = d4h.left / this.gG7z.x[1],
			bsk6e = d4h.top / this.gG7z.y[1],
			bsj6d = this.gG7z.x,
			bsi6c = this.gG7z.y;
		this.w5B("onchange", {
			stopped: !! gB7u,
			x: {
				rate: bsm6g,
				value: bsm6g * (bsj6d[1] - bsj6d[0])
			},
			y: {
				rate: bsk6e,
				value: bsk6e * (bsi6c[1] - bsi6c[0])
			}
		})
	};
	yV3x.bUi4m = function(d4h) {
		var bi5n = a3x.hJ8B(this.jx8p.view),
			bsh6b = {
				x: h4l.kn9e(d4h),
				y: h4l.nV0x(d4h)
			},
			dg6a = {
				x: Math.floor(this.jx8p.body.offsetWidth / 2),
				y: Math.floor(this.jx8p.body.offsetHeight / 2)
			};
		this.iU8M.fY7R({
			top: bsh6b.y - bi5n.y - dg6a.y,
			left: bsh6b.x - bi5n.x - dg6a.x
		})
	};
	yV3x.td1x = function(cK6E) {
		var qs0x;
		if ( !! this.gG7z) {
			var nd9U = this.iU8M.brs6m();
			qs0x = {
				x: nd9U.left / this.gG7z.x[1],
				y: nd9U.top / this.gG7z.y[1]
			}
		}
		cK6E = cK6E || X5c;
		var bOh2x = (cK6E.x || fb7U)[1] || this.jx8p.view.clientWidth - this.jx8p.body.offsetWidth,
			ctC0x = (cK6E.y || fb7U)[1] || this.jx8p.view.clientHeight - this.jx8p.body.offsetHeight;
		this.gG7z = {
			x: cK6E.x || [0, bOh2x],
			y: cK6E.y || [0, ctC0x]
		};
		if ( !! qs0x) this.fY7R(qs0x);
		return this
	};
	yV3x.fY7R = function(qs0x) {
		qs0x = qs0x || X5c;
		this.iU8M.fY7R({
			top: this.gG7z.y[1] * (qs0x.y || 0),
			left: this.gG7z.x[1] * (qs0x.x || 0)
		})
	}
})();
(function() {
	var M5R = NEJ.P("nej.ut"),
		bsg6a;
	if ( !! M5R.Fr5w) return;
	M5R.Fr5w = NEJ.C();
	bsg6a = M5R.Fr5w.O5T(M5R.YF1x);
	bsg6a.cl5q = function() {
		this.cs5x();
		this.jx8p.direction = 2
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		M5R = c4g("nej.p"),
		bF5K = c4g("nej.ui"),
		ch5m = c4g("nej.ut"),
		D5I = c4g("nm.w"),
		b4f, K5P;
	D5I.xe2x = NEJ.C();
	b4f = D5I.xe2x.O5T(bF5K.er7k);
	K5P = D5I.xe2x.cf5k;
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.o4s = a3x.y5D(e4i.content);
		this.lh9Y = a3x.y5D(e4i.slide);
		this.in8f = a3x.y5D(e4i.track);
		this.brQ6K = e4i.speed;
		this.bqE6y = this.o4s.scrollHeight - this.o4s.clientHeight;
		a3x.Y5d(this.lh9Y, "height", (this.o4s.clientHeight / this.o4s.scrollHeight * parseInt(a3x.cW6Q(this.in8f, "height")) || 0) + "px");
		if (this.o4s.scrollHeight <= this.o4s.clientHeight) a3x.Y5d(this.lh9Y, "display", "none");
		else a3x.Y5d(this.lh9Y, "display", "block");
		this.sU1x = ch5m.Fr5w.B5G({
			slide: this.lh9Y,
			track: this.in8f,
			onchange: this.bqG6A.g4k(this)
		});
		if (M5R.dd6X.browser != "firefox") this.bS5X([
			[this.o4s, "mousewheel", this.BG4K.g4k(this)]
		]);
		else {
			this.o4s.addEventListener("DOMMouseScroll", this.BG4K.g4k(this), false)
		}
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.sU1x.S5X();
		delete this.o4s;
		delete this.lh9Y;
		delete this.in8f;
		delete this.gG7z;
		delete this.brQ6K
	};
	b4f.bqG6A = function(d4h) {
		this.o4s.scrollTop = parseInt(this.bqE6y * d4h.y.rate)
	};
	b4f.BG4K = function(d4h) {
		h4l.cg5l(d4h);
		this.bqE6y = this.o4s.scrollHeight - this.o4s.clientHeight;
		var dg6a = 0,
			EU5Z, co5t, gl7e;
		co5t = parseInt(this.in8f.clientHeight) - parseInt(a3x.cW6Q(this.lh9Y, "height"));
		dg6a = d4h.wheelDelta ? d4h.wheelDelta / 120 : -d4h.detail / 3;
		EU5Z = parseInt(a3x.cW6Q(this.lh9Y, "top")) - dg6a * this.brQ6K;
		if (EU5Z < 0) EU5Z = 0;
		if (EU5Z > co5t) EU5Z = co5t;
		a3x.Y5d(this.lh9Y, "top", EU5Z + "px");
		gl7e = parseInt(a3x.cW6Q(this.lh9Y, "top"));
		this.sU1x.w5B("onchange", {
			y: {
				rate: gl7e / co5t
			}
		})
	};
	b4f.oN0x = function() {
		this.bqE6y = this.o4s.scrollHeight - this.o4s.clientHeight;
		this.sU1x.fY7R({
			x: 0,
			y: 0
		});
		a3x.Y5d(this.lh9Y, "height", this.o4s.clientHeight / this.o4s.scrollHeight * parseInt(this.in8f.clientHeight) + "px");
		this.sU1x.td1x({
			x: [],
			y: [0, this.in8f.clientHeight - parseInt(a3x.cW6Q(this.lh9Y, "height"))]
		});
		if (this.o4s.scrollHeight <= this.o4s.clientHeight) a3x.Y5d(this.lh9Y, "display", "none");
		else a3x.Y5d(this.lh9Y, "display", "block")
	};
	b4f.fY7R = function(gE7x) {
		this.sU1x.fY7R(gE7x)
	};
	b4f.ET5Y = function(bqK6E) {
		var ctw0x = parseInt(a3x.cW6Q(this.lh9Y, "height"));
		var cpt9k = parseInt(a3x.cW6Q(this.in8f, "height"));
		var qv0x = cpt9k - ctw0x;
		var gl7e = parseInt(qv0x * bqK6E) + "px";
		a3x.Y5d(this.lh9Y, "top", gl7e)
	};
	b4f.brP6J = function() {
		if (this.o4s.scrollHeight <= this.o4s.clientHeight) return;
		var bqK6E = this.o4s.scrollTop / (this.o4s.scrollHeight - this.o4s.clientHeight);
		this.ET5Y(bqK6E)
	};
	b4f.cyq2x = function() {
		if (this.sU1x) this.sU1x.td1x()
	}
})();
(function() {
	var p = NEJ.P("nej.u");
	var ml9c = 8;
	var Xa1x = function(gk7d, cw5B) {
			return gk7d << cw5B | gk7d >>> 32 - cw5B
		};
	var lb9S = function(x, y) {
			var bAm8e = (x & 65535) + (y & 65535),
				ckR8J = (x >> 16) + (y >> 16) + (bAm8e >> 16);
			return ckR8J << 16 | bAm8e & 65535
		};
	var ckQ8I = function(t, b, c, d) {
			if (t < 20) return b & c | ~b & d;
			if (t < 40) return b ^ c ^ d;
			if (t < 60) return b & c | b & d | c & d;
			return b ^ c ^ d
		};
	var ckP8H = function(t) {
			if (t < 20) return 1518500249;
			if (t < 40) return 1859775393;
			if (t < 60) return -1894007588;
			return -899497514
		};
	var tS1x = function() {
			var Dk4o = function(i) {
					return i % 32
				},
				Di4m = function(i) {
					return 32 - ml9c - i % 32
				};
			return function(cC6w, CY4c) {
				var JD6x = [],
					jX8P = (1 << ml9c) - 1,
					lV9M = CY4c ? Dk4o : Di4m;
				for (var i = 0, l = cC6w.length * ml9c; i < l; i += ml9c) JD6x[i >> 5] |= (cC6w.charCodeAt(i / ml9c) & jX8P) << lV9M(i);
				return JD6x
			}
		}();
	var JF6z = function() {
			var bAk8c = "0123456789abcdef",
				Dk4o = function(i) {
					return i % 4
				},
				Di4m = function(i) {
					return 3 - i % 4
				};
			return function(iN8F, CY4c) {
				var bs5x = [],
					lV9M = CY4c ? Dk4o : Di4m;
				for (var i = 0, l = iN8F.length * 4; i < l; i++) {
					bs5x.push(bAk8c.charAt(iN8F[i >> 2] >> lV9M(i) * 8 + 4 & 15) + bAk8c.charAt(iN8F[i >> 2] >> lV9M(i) * 8 & 15))
				}
				return bs5x.join("")
			}
		}();
	var WQ1x = function() {
			var Dk4o = function(i) {
					return i % 32
				},
				Di4m = function(i) {
					return 32 - ml9c - i % 32
				};
			return function(JD6x, CY4c) {
				var bs5x = [],
					jX8P = (1 << ml9c) - 1,
					lV9M = CY4c ? Dk4o : Di4m;
				for (var i = 0, l = JD6x.length * 32; i < l; i += ml9c) bs5x.push(String.fromCharCode(JD6x[i >> 5] >>> lV9M(i) & jX8P));
				return bs5x.join("")
			}
		}();
	var IC6w = function() {
			var ckH8z = "=",
				ckF8x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				Dk4o = function(i) {
					return i % 4
				},
				Di4m = function(i) {
					return 3 - i % 4
				};
			return function(iN8F, CY4c) {
				var bs5x = [],
					lV9M = CY4c ? Dk4o : Di4m;
				for (var i = 0, bAj8b; i < iN8F.length * 4; i += 3) {
					bAj8b = (iN8F[i >> 2] >> 8 * lV9M(i) & 255) << 16 | (iN8F[i + 1 >> 2] >> 8 * lV9M(i + 1) & 255) << 8 | iN8F[i + 2 >> 2] >> 8 * lV9M(i + 2) & 255;
					for (var j = 0; j < 4; j++) bs5x.push(i * 8 + j * 6 > iN8F.length * 32 ? ckH8z : ckF8x.charAt(bAj8b >> 6 * (3 - j) & 63))
				}
				return bs5x.join("")
			}
		}();
	var WM1x = function(q, a, b, x, s, t) {
			return lb9S(Xa1x(lb9S(lb9S(a, q), lb9S(x, t)), s), b)
		};
	var nO0x = function(a, b, c, d, x, s, t) {
			return WM1x(b & c | ~b & d, a, b, x, s, t)
		};
	var nJ0x = function(a, b, c, d, x, s, t) {
			return WM1x(b & d | c & ~d, a, b, x, s, t)
		};
	var nA0x = function(a, b, c, d, x, s, t) {
			return WM1x(b ^ c ^ d, a, b, x, s, t)
		};
	var ny0x = function(a, b, c, d, x, s, t) {
			return WM1x(c ^ (b | ~d), a, b, x, s, t)
		};
	var Gr5w = function(x, y) {
			x[y >> 5] |= 128 << y % 32;
			x[(y + 64 >>> 9 << 4) + 14] = y;
			var a = 1732584193,
				b = -271733879,
				c = -1732584194,
				d = 271733878;
			for (var i = 0, l = x.length, bAi8a, bAh8Z, bAg8Y, bAf8X; i < l; i += 16) {
				bAi8a = a;
				bAh8Z = b;
				bAg8Y = c;
				bAf8X = d;
				a = nO0x(a, b, c, d, x[i + 0], 7, -680876936);
				d = nO0x(d, a, b, c, x[i + 1], 12, -389564586);
				c = nO0x(c, d, a, b, x[i + 2], 17, 606105819);
				b = nO0x(b, c, d, a, x[i + 3], 22, -1044525330);
				a = nO0x(a, b, c, d, x[i + 4], 7, -176418897);
				d = nO0x(d, a, b, c, x[i + 5], 12, 1200080426);
				c = nO0x(c, d, a, b, x[i + 6], 17, -1473231341);
				b = nO0x(b, c, d, a, x[i + 7], 22, -45705983);
				a = nO0x(a, b, c, d, x[i + 8], 7, 1770035416);
				d = nO0x(d, a, b, c, x[i + 9], 12, -1958414417);
				c = nO0x(c, d, a, b, x[i + 10], 17, -42063);
				b = nO0x(b, c, d, a, x[i + 11], 22, -1990404162);
				a = nO0x(a, b, c, d, x[i + 12], 7, 1804603682);
				d = nO0x(d, a, b, c, x[i + 13], 12, -40341101);
				c = nO0x(c, d, a, b, x[i + 14], 17, -1502002290);
				b = nO0x(b, c, d, a, x[i + 15], 22, 1236535329);
				a = nJ0x(a, b, c, d, x[i + 1], 5, -165796510);
				d = nJ0x(d, a, b, c, x[i + 6], 9, -1069501632);
				c = nJ0x(c, d, a, b, x[i + 11], 14, 643717713);
				b = nJ0x(b, c, d, a, x[i + 0], 20, -373897302);
				a = nJ0x(a, b, c, d, x[i + 5], 5, -701558691);
				d = nJ0x(d, a, b, c, x[i + 10], 9, 38016083);
				c = nJ0x(c, d, a, b, x[i + 15], 14, -660478335);
				b = nJ0x(b, c, d, a, x[i + 4], 20, -405537848);
				a = nJ0x(a, b, c, d, x[i + 9], 5, 568446438);
				d = nJ0x(d, a, b, c, x[i + 14], 9, -1019803690);
				c = nJ0x(c, d, a, b, x[i + 3], 14, -187363961);
				b = nJ0x(b, c, d, a, x[i + 8], 20, 1163531501);
				a = nJ0x(a, b, c, d, x[i + 13], 5, -1444681467);
				d = nJ0x(d, a, b, c, x[i + 2], 9, -51403784);
				c = nJ0x(c, d, a, b, x[i + 7], 14, 1735328473);
				b = nJ0x(b, c, d, a, x[i + 12], 20, -1926607734);
				a = nA0x(a, b, c, d, x[i + 5], 4, -378558);
				d = nA0x(d, a, b, c, x[i + 8], 11, -2022574463);
				c = nA0x(c, d, a, b, x[i + 11], 16, 1839030562);
				b = nA0x(b, c, d, a, x[i + 14], 23, -35309556);
				a = nA0x(a, b, c, d, x[i + 1], 4, -1530992060);
				d = nA0x(d, a, b, c, x[i + 4], 11, 1272893353);
				c = nA0x(c, d, a, b, x[i + 7], 16, -155497632);
				b = nA0x(b, c, d, a, x[i + 10], 23, -1094730640);
				a = nA0x(a, b, c, d, x[i + 13], 4, 681279174);
				d = nA0x(d, a, b, c, x[i + 0], 11, -358537222);
				c = nA0x(c, d, a, b, x[i + 3], 16, -722521979);
				b = nA0x(b, c, d, a, x[i + 6], 23, 76029189);
				a = nA0x(a, b, c, d, x[i + 9], 4, -640364487);
				d = nA0x(d, a, b, c, x[i + 12], 11, -421815835);
				c = nA0x(c, d, a, b, x[i + 15], 16, 530742520);
				b = nA0x(b, c, d, a, x[i + 2], 23, -995338651);
				a = ny0x(a, b, c, d, x[i + 0], 6, -198630844);
				d = ny0x(d, a, b, c, x[i + 7], 10, 1126891415);
				c = ny0x(c, d, a, b, x[i + 14], 15, -1416354905);
				b = ny0x(b, c, d, a, x[i + 5], 21, -57434055);
				a = ny0x(a, b, c, d, x[i + 12], 6, 1700485571);
				d = ny0x(d, a, b, c, x[i + 3], 10, -1894986606);
				c = ny0x(c, d, a, b, x[i + 10], 15, -1051523);
				b = ny0x(b, c, d, a, x[i + 1], 21, -2054922799);
				a = ny0x(a, b, c, d, x[i + 8], 6, 1873313359);
				d = ny0x(d, a, b, c, x[i + 15], 10, -30611744);
				c = ny0x(c, d, a, b, x[i + 6], 15, -1560198380);
				b = ny0x(b, c, d, a, x[i + 13], 21, 1309151649);
				a = ny0x(a, b, c, d, x[i + 4], 6, -145523070);
				d = ny0x(d, a, b, c, x[i + 11], 10, -1120210379);
				c = ny0x(c, d, a, b, x[i + 2], 15, 718787259);
				b = ny0x(b, c, d, a, x[i + 9], 21, -343485551);
				a = lb9S(a, bAi8a);
				b = lb9S(b, bAh8Z);
				c = lb9S(c, bAg8Y);
				d = lb9S(d, bAf8X)
			}
			return [a, b, c, d]
		};
	var bkn5s = function(J5O, j4n) {
			var ty1x = tS1x(J5O, !0);
			if (ty1x.length > 16) ty1x = Gr5w(ty1x, J5O.length * ml9c);
			var JV6P = Array(16),
				JW6Q = Array(16);
			for (var i = 0; i < 16; i++) {
				JV6P[i] = ty1x[i] ^ 909522486;
				JW6Q[i] = ty1x[i] ^ 1549556828
			}
			var dH6B = Gr5w(JV6P.concat(tS1x(j4n, !0)), 512 + j4n.length * ml9c);
			return Gr5w(JW6Q.concat(dH6B), 512 + 128)
		};
	var Gt5y = function(x, br5w) {
			x[br5w >> 5] |= 128 << 24 - br5w % 32;
			x[(br5w + 64 >> 9 << 4) + 15] = br5w;
			var w = Array(80),
				a = 1732584193,
				b = -271733879,
				c = -1732584194,
				d = 271733878,
				e = -1009589776;
			for (var i = 0, l = x.length, bAe8W, bAd8V, Sc9T, bAc8U, bAb8T; i < l; i += 16) {
				bAe8W = a;
				bAd8V = b;
				Sc9T = c;
				bAc8U = d;
				bAb8T = e;
				for (var j = 0; j < 80; j++) {
					w[j] = j < 16 ? x[i + j] : Xa1x(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
					var t = lb9S(lb9S(Xa1x(a, 5), ckQ8I(j, b, c, d)), lb9S(lb9S(e, w[j]), ckP8H(j)));
					e = d;
					d = c;
					c = Xa1x(b, 30);
					b = a;
					a = t
				}
				a = lb9S(a, bAe8W);
				b = lb9S(b, bAd8V);
				c = lb9S(c, Sc9T);
				d = lb9S(d, bAc8U);
				e = lb9S(e, bAb8T)
			}
			return [a, b, c, d, e]
		};
	var bkA5F = function(J5O, j4n) {
			var ty1x = tS1x(J5O);
			if (ty1x.length > 16) ty1x = Gt5y(ty1x, J5O.length * ml9c);
			var JV6P = Array(16),
				JW6Q = Array(16);
			for (var i = 0; i < 16; i++) {
				JV6P[i] = ty1x[i] ^ 909522486;
				JW6Q[i] = ty1x[i] ^ 1549556828
			}
			var dH6B = Gt5y(JV6P.concat(tS1x(j4n)), 512 + j4n.length * ml9c);
			return Gt5y(JW6Q.concat(dH6B), 512 + 160)
		};
	p.cwT1x = function(J5O, j4n) {
		return JF6z(bkA5F(J5O, j4n))
	};
	p.cwU1x = function(J5O, j4n) {
		return IC6w(bkA5F(J5O, j4n))
	};
	p.cwV1x = function(J5O, j4n) {
		return WQ1x(bkA5F(J5O, j4n))
	};
	p.cwW1x = function(J5O, j4n) {
		return JF6z(bkn5s(J5O, j4n), !0)
	};
	p.cwX1x = function(J5O, j4n) {
		return IC6w(bkn5s(J5O, j4n), !0)
	};
	p.cwY1x = function(J5O, j4n) {
		return WQ1x(bkn5s(J5O, j4n), !0)
	};
	p.cwZ1x = function(j4n) {
		return JF6z(Gt5y(tS1x(j4n), j4n.length * ml9c))
	};
	p.cxa1x = function(j4n) {
		return IC6w(Gt5y(tS1x(j4n), j4n.length * ml9c))
	};
	p.cxb1x = function(j4n) {
		return WQ1x(Gt5y(tS1x(j4n), j4n.length * ml9c))
	};
	p.le9V = function(j4n) {
		return JF6z(Gr5w(tS1x(j4n, !0), j4n.length * ml9c), !0)
	};
	p.cxc1x = function(j4n) {
		return IC6w(Gr5w(tS1x(j4n, !0), j4n.length * ml9c), !0)
	};
	p.cxd1x = function(j4n) {
		return WQ1x(Gr5w(tS1x(j4n, !0), j4n.length * ml9c), !0)
	};
	p.cxe1x = function(j4n) {
		return JF6z(tS1x(j4n, !0), !0)
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		v5A = c4g("nej.j"),
		X5c = c4g("nej.o"),
		k4o = c4g("nej.u"),
		h4l = c4g("nej.v"),
		bF5K = c4g("nej.ui"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.bwp7i = NEJ.C();
	b4f = n4r.bwp7i.O5T(n4r.dU7N, !0);
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.AZ3x = i4m[0];
		this.bkV5a = i4m[1];
		this.bdo3x = i4m[2];
		h4l.s4w(i4m[3], "click", this.bkX5c.g4k(this))
	};
	b4f.bZ5e = function() {
		this.ca5f = "ntp-alert"
	};
	b4f.bj5o = function(e4i) {
		e4i.parent = e4i.parent || document.body;
		this.bk5p(e4i);
		a3x.Y5d(this.AZ3x, "display", "");
		if (e4i.type == "noicon") {
			a3x.Y5d(this.AZ3x, "display", "none")
		} else if (e4i.type == "success") {
			a3x.eD7w(this.AZ3x, "u-icn-88", "u-icn-89")
		} else {
			a3x.eD7w(this.AZ3x, "u-icn-89", "u-icn-88")
		}
		this.bkV5a.innerHTML = e4i.mesg || "";
		if (e4i.mesg2) {
			a3x.x5C(this.bdo3x, "f-hide");
			this.bdo3x.innerHTML = e4i.mesg2 || ""
		} else {
			a3x.z5E(this.bdo3x, "f-hide")
		}
	};
	b4f.bC5H = function() {
		this.bG5L()
	};
	b4f.bkX5c = function(d4h) {
		this.w5B("onnotice");
		this.bp5u()
	};
	n4r.eU7N = function(e4i) {
		if (this.xn2x) {
			this.xn2x.S5X();
			delete this.xn2x
		}
		this.xn2x = n4r.bwp7i.B5G(e4i);
		this.xn2x.N5S()
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
		n4r = c4g("nm.l"),
		J5O = "RADIO_LATEST_MAP",
		b4f, K5P;
	p4t.eQ7J({
		"radio_crt-list": {
			url: "/api/djradio/get/byuser",
			format: function(Q5V, e4i) {
				var i4m = Q5V.djRadios;
				return {
					total: i4m.length || 0,
					list: i4m
				}
			}
		},
		"radio_sub-list": {
			url: "/api/djradio/get/subed",
			format: function(Q5V, e4i) {
				var i4m = Q5V.djRadios;
				e4i.data.time = Q5V.time;
				return {
					total: Q5V.count || 0,
					list: i4m
				}
			}
		},
		"radio_sub-add": {
			url: "/api/djradio/sub",
			filter: function(e4i) {
				e4i.data = {
					id: e4i.id
				}
			},
			format: function(Q5V, e4i) {
				if (this.btQ7J("firstSub")) {
					n4r.eU7N({
						title: "订阅成功",
						type: "noicon",
						mesg: "可以在“我的音乐-我的电台”收到节目更新"
					})
				} else {
					n4r.Z5e.N5S({
						tip: "订阅成功"
					})
				}
				var dx6r = this.eg7Z(e4i.id) || e4i.ext.data;
				dx6r.subCount += 1;
				dx6r.subed = true;
				return dx6r
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.nP0x, "listchange", d4h);
				h4l.w5B(p4t.nP0x, "itemchange", {
					attr: "subCount",
					data: d4h.data
				})
			},
			onmessage: function(cc5h) {
				if (cc5h == 315) {
					n4r.Z5e.N5S({
						tip: "根据对方设置，你没有该操作权限",
						type: 2
					})
				}
			}
		},
		"radio_sub-del": {
			url: "/api/djradio/unsub",
			filter: function(e4i) {
				e4i.data = {
					id: e4i.id
				}
			},
			format: function(Q5V, e4i) {
				n4r.Z5e.N5S({
					tip: "取消订阅成功"
				});
				var dx6r = this.eg7Z(e4i.id) || e4i.ext.data;
				dx6r.subCount -= 1;
				dx6r.subed = false;
				return dx6r
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.nP0x, "listchange", d4h);
				h4l.w5B(p4t.nP0x, "itemchange", {
					attr: "subCount",
					data: d4h.data
				})
			}
		}
	});
	p4t.nP0x = NEJ.C();
	b4f = p4t.nP0x.O5T(p4t.gZ8R);
	b4f.csA0x = function(dh6b, by5D) {
		var bu5z = this.BN4R(J5O, {});
		bu5z[dh6b.radio.id] = {
			id: dh6b.id,
			name: dh6b.name,
			time: by5D || 0
		};
		this.uH2x(J5O, bu5z)
	};
	b4f.csq0x = function(C5H) {
		return this.BN4R(J5O, {})[C5H]
	};
	b4f.btP7I = function(dx6r) {
		var cm5r = {
			key: "radio_sub",
			ext: {}
		};
		if (k4o.ks9j(dx6r)) {
			cm5r.id = dx6r.id;
			cm5r.ext.data = dx6r
		} else {
			cm5r.id = dx6r
		}
		return cm5r
	};
	b4f.lJ9A = function(dx6r) {
		if (l4p.hd8V()) this.iL8D(this.btP7I(dx6r))
	};
	b4f.btN7G = function(dx6r) {
		l4p.gP8H({
			btnok: "确定",
			btncc: "取消",
			message: "确定取消订阅？",
			action: function(A5F) {
				if (A5F == "ok") {
					this.Jj6d(this.btP7I(dx6r))
				}
			}.g4k(this)
		})
	};
	b4f.btQ7J = function() {
		var rZ1x = "RADIO_UPGRADE_TIP";
		return function(t4x) {
			var j4n = this.BN4R(rZ1x, {});
			if (j4n[t4x]) {
				return false
			} else {
				j4n[t4x] = true;
				this.uH2x(rZ1x, j4n);
				return true
			}
		}
	}();
	H5M.fu7n.B5G({
		element: p4t.nP0x,
		event: ["listchange", "itemchange"]
	})
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		h4l = c4g("nej.v"),
		H5M = c4g("nej.ut"),
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		D5I = c4g("nm.w"),
		b4f;
	var QUEUE_KEY = "track-queue";
	var PlayMode = {
		SINGLE_CYCLE: 2,
		LIST_LOOP: 4,
		RANDOM: 5
	};
	D5I.rk1x = NEJ.C();
	b4f = D5I.rk1x.O5T(H5M.cz5E);
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.bz5E = D5I.fl7e.gc7V();
		this.iK8C = [];
		this.wB2x = [];
		this.md9U = l4p.bpI6C();
		this.eG7z = 0;
		this.bS5X([
			[D5I.fl7e, "playaction", this.vj2x.g4k(this)]
		]);
		this.kG9x = p4t.hK8C.B5G();
		this.sO1x = p4t.nP0x.B5G();
		this.bRf3x()
	};
	b4f.bC5H = function() {
		this.bG5L();
		delete this.iK8C;
		delete this.wB2x;
		delete this.md9U
	};
	b4f.XV1x = function() {
		v5A.uG2x(QUEUE_KEY, this.iK8C)
	};
	b4f.bRs3x = function() {
		var rw1x = [PlayMode.SINGLE_CYCLE, PlayMode.LIST_LOOP, PlayMode.RANDOM];
		return function() {
			var eE7x, r4v = k4o.cT6N(rw1x, this.md9U.mode);
			eE7x = r4v < 0 ? PlayMode.LIST_LOOP : rw1x[(r4v + 1) % 3];
			this.md9U.mode = eE7x;
			if (this.OH8z()) {
				this.boe6Y()
			}
			l4p.DD4H(this.md9U);
			return this.md9U.mode
		}
	}();
	b4f.bRR4V = function() {
		return this.md9U.mode
	};
	b4f.nS0x = function() {
		this.Cr4v(this.bsV7O(+1), "ui")
	};
	b4f.zK3x = function() {
		this.Cr4v(this.bsV7O(-1), "ui")
	};
	b4f.qZ1x = function() {
		return this.iK8C[this.eG7z]
	};
	b4f.bSz4D = function(iB8t, qz0x, fp7i) {
		if (!iB8t || !iB8t.length) return;
		var bu5z = {},
			ol0x = iB8t[0];
		if (!qz0x) {
			k4o.bc5h(this.iK8C, function(be5j) {
				bu5z[be5j.id] = be5j
			});
			k4o.bc5h(iB8t, function(be5j) {
				if (bu5z[be5j.id]) {
					if (ol0x.id == be5j.id) {
						ol0x = bu5z[be5j.id]
					}
				} else {
					this.iK8C.push(be5j)
				}
			}, this)
		} else {
			this.iK8C = iB8t
		}
		if (this.OH8z()) {
			this.boe6Y()
		}
		if (fp7i) {
			this.Cr4v(k4o.cT6N(this.iK8C, ol0x));
			this.bz5E.eC7v()
		}
		this.XV1x();
		h4l.w5B(D5I.rk1x, "queuechange", {
			cmd: fp7i ? "play" : "addto"
		})
	};
	b4f.lC9t = function(xJ2x) {
		var r4v = k4o.cT6N(this.iK8C, function(be5j) {
			return be5j.id == xJ2x
		});
		if (r4v != -1) {
			var bSJ4N = r4v == this.eG7z && this.iK8C.length > 1,
				bTg4k = r4v == this.iK8C.length - 1,
				be5j = this.iK8C[r4v];
			this.iK8C.splice(r4v, 1);
			if (this.OH8z()) {
				this.wB2x.splice(k4o.cT6N(this.wB2x, be5j), 1)
			}
			if (bSJ4N) {
				if (bTg4k) {
					this.Cr4v(r4v - 1)
				} else {
					this.Cr4v(r4v)
				}
			} else if (r4v < this.eG7z) {
				this.eG7z--
			}
			this.XV1x();
			h4l.w5B(D5I.rk1x, "queuechange", {
				cmd: "delete"
			})
		}
	};
	b4f.rR1x = function() {
		this.iK8C = [];
		this.wB2x = [];
		this.md9U.index = this.eG7z = 0;
		l4p.DD4H(this.md9U);
		this.XV1x();
		h4l.w5B(D5I.rk1x, "queuechange", {
			cmd: "clear"
		})
	};
	b4f.qZ1x = function() {
		return this.iK8C[this.eG7z]
	};
	b4f.bsX7Q = function() {
		return this.iK8C
	};
	b4f.jE8w = function() {
		return this.iK8C.length
	};
	b4f.boa5f = function(C5H) {
		var r4v = k4o.cT6N(this.iK8C, function(be5j) {
			return C5H == be5j.id
		});
		if (r4v >= 0) {
			return this.iK8C[r4v]
		}
	};
	b4f.bUW4a = function(C5H) {
		var r4v = k4o.cT6N(this.iK8C, function(be5j) {
			return C5H == be5j.id
		});
		if (r4v >= 0) {
			this.Cr4v(r4v);
			this.bz5E.eC7v()
		}
	};
	b4f.bRf3x = function() {
		this.iK8C = v5A.tk1x(QUEUE_KEY) || [];
		this.eG7z = this.md9U.index || 0;
		if (this.iK8C.length && this.OH8z()) {
			this.boe6Y()
		}
		this.bz5E.ZS2x(this.qZ1x())
	};
	b4f.bsV7O = function(dg6a) {
		if (this.OH8z()) {
			var gu7n = this.qZ1x(),
				r4v = inRange(k4o.cT6N(this.wB2x, gu7n) + dg6a, this.wB2x.length);
			return k4o.cT6N(this.iK8C, this.wB2x[r4v])
		} else {
			return inRange(this.eG7z + dg6a, this.iK8C.length)
		}
		function inRange(r4v, br5w) {
			return r4v < 0 ? br5w - 1 : r4v >= br5w ? 0 : r4v
		}
	};
	b4f.boe6Y = function() {
		var i4m = this.iK8C.slice(0);
		this.wB2x = [];
		while (i4m.length) {
			var r4v = k4o.JQ6K(0, i4m.length - 1);
			this.wB2x.push(i4m[r4v]);
			i4m.splice(r4v, 1)
		}
	};
	b4f.Cr4v = function(r4v, t4x) {
		if (!this.iK8C.length) return;
		var iQ8I, lL9C = this.qZ1x(),
			bsY7R = this.bz5E.brd6X();
		this.eG7z = r4v;
		this.md9U.index = this.eG7z;
		iQ8I = this.iK8C[this.eG7z];
		l4p.DD4H(this.md9U);
		h4l.w5B(D5I.rk1x, "playchange", {
			old: lL9C,
			"new": iQ8I,
			type: t4x
		});
		this.bz5E.ZS2x(this.qZ1x());
		if (lL9C && bsY7R > 3) {
			this.kG9x.bgX4b(lL9C.id, bsY7R, lL9C.source, t4x || "interrupt")
		}
		if (iQ8I && iQ8I.program) this.sO1x.csA0x(iQ8I.program, 0)
	};
	b4f.OH8z = function() {
		return this.md9U.mode == PlayMode.RANDOM
	};
	b4f.vj2x = function(d4h) {
		if (d4h.action == "ended") {
			if (this.md9U.mode == PlayMode.SINGLE_CYCLE) {
				this.Cr4v(this.eG7z, "playend")
			} else {
				this.nS0x()
			}
		}
	};
	H5M.fu7n.B5G({
		element: D5I.rk1x,
		event: ["queuechange", "playchange"]
	})
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		db6V = c4g("nej.p"),
		v5A = c4g("nej.j"),
		bd5i = c4g("nej.ui"),
		H5M = c4g("nej.ut"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		l4p = c4g("nm.x"),
		dj6d = c4g("nm.u"),
		D5I = c4g("nm.w"),
		L5Q = c4g("nm.m.f"),
		b4f, K5P;
	L5Q.bsZ7S = NEJ.C();
	b4f = L5Q.bsZ7S.O5T(bd5i.er7k);
	b4f.cl5q = function() {
		this.cs5x();
		this.gD7w = D5I.rk1x.gc7V();
		h4l.s4w(D5I.rk1x, "queuechange", this.uB2x.g4k(this));
		h4l.s4w(D5I.rk1x, "playchange", this.hv8n.g4k(this))
	};
	b4f.bZ5e = function() {
		this.ca5f = "m-player-panel"
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.XI1x = i4m[0];
		this.jh8Z = i4m[1];
		this.PV8N = i4m[2];
		this.bK5P = i4m[3];
		this.Qu9l = i4m[4];
		this.hS8K = D5I.xe2x.B5G({
			track: this.Qu9l,
			slide: a3x.cP6J(this.Qu9l)[0],
			content: this.bK5P,
			speed: 4
		});
		this.bQ5V = {
			nask: i4m[5],
			nmenu: i4m[6],
			nlist: i4m[7],
			nscroll: i4m[8]
		};
		h4l.s4w(this.o4s, "click", this.bO5T.g4k(this));
		h4l.s4w(this.PV8N, "load", this.tO1x.g4k(this))
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.mG9x = D5I.btc7V.B5G(this.bQ5V);
		this.hv8n({
			"new": this.gD7w.qZ1x()
		});
		this.hS8K.oN0x();
		var i4m = a3x.I5N(this.bK5P, "z-sel");
		if (i4m.length) {
			var bi5n = a3x.hJ8B(i4m[0], this.bK5P);
			this.bK5P.scrollTop = this.bK5P.scrollTop + (bi5n.y - (this.bK5P.scrollTop + 112));
			this.hS8K.brP6J()
		}
	};
	b4f.bC5H = function() {
		this.w5B("onclose");
		if (this.mG9x) {
			this.mG9x.S5X();
			delete this.mG9x
		}
		this.bG5L()
	};
	b4f.uB2x = function(d4h) {
		a3x.dK6E(this.bK5P, "m-player-queue", {
			queue: this.gD7w.bsX7Q(),
			current: this.gD7w.qZ1x()
		}, {
			dur2time: l4p.kp9g,
			getArtistName: l4p.rz1x
		});
		this.XI1x.innerText = this.gD7w.jE8w();
		if (d4h && d4h.cmd == "delete") return;
		var i4m = a3x.I5N(this.bK5P, "z-sel");
		if (i4m.length) {
			var bi5n = a3x.hJ8B(i4m[0], this.bK5P);
			this.bK5P.scrollTop = Math.max(Math.min(bi5n.y, this.bK5P.scrollTop), bi5n.y - 224);
			this.hS8K.brP6J()
		}
	};
	b4f.bO5T = function(d4h) {
		var f4j, C5H, btd7W;
		f4j = h4l.U5Z(d4h, "a:href");
		if (f4j && f4j.tagName.toLocaleLowerCase() == "a" && /^http/.test(f4j.href)) {
			return
		}
		h4l.rT1x(d4h);
		f4j = h4l.U5Z(d4h, "d:action");
		C5H = a3x.u5z(f4j, "id");
		switch (a3x.u5z(f4j, "action")) {
		case "likeall":
			var jo8g = this.gD7w.bsX7Q();
			if (jo8g && jo8g.length) {
				var i4m = [];
				k4o.bc5h(jo8g, function(q4u) {
					if (!q4u.program) i4m.push(q4u)
				});
				window.subscribe(i4m, !1);
				this.S5X()
			}
			break;
		case "delete":
			this.gD7w.lC9t(C5H);
			h4l.bh5m(d4h);
			break;
		case "like":
			var be5j = this.gD7w.boa5f(C5H);
			window.subscribe(be5j, false);
			h4l.bh5m(d4h);
			this.S5X();
			break;
		case "share":
			be5j = this.gD7w.boa5f(C5H);
			!be5j.program ? l4p.mq9h({
				rid: be5j.id,
				type: 18,
				purl: be5j.album.picUrl,
				name: be5j.name,
				author: l4p.xb2x(be5j.artists)
			}) : l4p.mq9h({
				rid: be5j.program.id,
				type: 17,
				purl: be5j.program.coverUrl,
				name: be5j.program.name,
				author: (be5j.program.radio || []).name
			});
			h4l.bh5m(d4h);
			this.S5X();
			break;
		case "download":
			be5j = this.gD7w.boa5f(C5H);
			if (be5j.program) {
				l4p.Sx0x({
					type: 17,
					id: be5j.program.id
				})
			} else {
				btd7W = l4p.oK0x(be5j);
				if (btd7W == 1e3) {
					l4p.hR8J("因版权方要求，该歌曲不支持下载")
				} else {
					l4p.Sx0x({
						type: 18,
						id: be5j.id
					})
				}
			}
			this.S5X();
			break;
		case "play":
			this.gD7w.bUW4a(C5H);
			break;
		case "clear":
			this.gD7w.rR1x();
			break;
		case "close":
			this.S5X();
			break
		}
	};
	b4f.hv8n = function(d4h) {
		var sC1x = d4h["new"];
		if (sC1x) {
			this.mG9x && this.mG9x.bXa5f(sC1x);
			if (sC1x.program) {
				this.PV8N.src = sC1x.program.blurCoverUrl;
				this.jh8Z.innerText = sC1x.program.name
			} else {
				this.PV8N.src = "http://music.163.com/api/img/blur/" + (sC1x.album.pic_str || sC1x.album.pic || sC1x.album.picId_str || sC1x.album.picId || sC1x.album.picStr);
				this.jh8Z.innerText = sC1x.name
			}
		}
		this.uB2x()
	};
	b4f.tO1x = function(d4h) {
		var co5t = this.PV8N.clientHeight,
			bXb5g = this.bK5P.parentNode.clientHeight;
		a3x.Y5d(this.PV8N, "top", (bXb5g - co5t) / 2 + "px")
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		M5R = c4g("nej.ut"),
		b4f;
	if ( !! M5R.baE2x) return;
	M5R.baE2x = NEJ.C();
	b4f = M5R.baE2x.O5T(M5R.cz5E);
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.Tt0x = e4i.to || X5c;
		this.NO8G = e4i.from || {};
		this.bWt5y = Math.max(0, parseInt(e4i.delay) || 0)
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.bh5m();
		if ( !! this.NQ8I) {
			window.clearTimeout(this.NQ8I);
			delete this.NQ8I
		}
		delete this.Tt0x;
		delete this.NO8G
	};
	b4f.bxF8x = function(by5D) {
		if (!this.NO8G) return;
		if (("" + by5D).indexOf(".") >= 0) by5D = +(new Date);
		if (this.bxE8w(by5D)) {
			this.bh5m();
			return
		}
		this.dJ6D = requestAnimationFrame(this.bxF8x.g4k(this))
	};
	b4f.bxE8w = bn5s;
	b4f.eC7v = function() {
		var bWk5p = function() {
				this.NQ8I = window.clearTimeout(this.NQ8I);
				this.NO8G.time = +(new Date);
				this.dJ6D = requestAnimationFrame(this.bxF8x.g4k(this))
			};
		return function() {
			this.NQ8I = window.setTimeout(bWk5p.g4k(this), this.bWt5y);
			return this
		}
	}();
	b4f.bh5m = function() {
		this.dJ6D = cancelRequestAnimationFrame(this.dJ6D);
		this.w5B("onstop");
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ut"),
		b4f, K5P;
	if ( !! M5R.EB4F) return;
	M5R.EB4F = NEJ.C();
	b4f = M5R.EB4F.O5T(M5R.baE2x);
	K5P = M5R.EB4F.cf5k;
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.zQ3x = e4i.duration || 200;
		this.bWj5o = 1 / (200 * this.zQ3x);
		this.bWh5m(e4i.timing);
		this.bWf5k()
	};
	b4f.bC5H = function() {
		this.bG5L();
		delete this.Ic5h;
		delete this.baS2x
	};
	b4f.bWh5m = function() {
		var ga7T = /^cubic\-bezier\((.*?)\)$/i,
			jf8X = /\s*,\s*/i,
			bxD8v = {
				linear: [0, 0, 1, 1],
				ease: [.25, .1, .25, 1],
				easein: [.42, 0, 1, 1],
				easeout: [0, 0, .58, 1],
				easeinout: [0, 0, .58, 1]
			};
		var bVT4X = function(A5F, r4v, i4m) {
				i4m[r4v] = parseFloat(A5F)
			};
		return function(Tq0x) {
			Tq0x = (Tq0x || "").toLowerCase();
			this.Ic5h = bxD8v[Tq0x];
			if (ga7T.test(Tq0x)) {
				this.Ic5h = RegExp.$1.split(jf8X);
				k4o.bc5h(this.Ic5h, bVT4X)
			}
			if ( !! this.Ic5h) return;
			this.Ic5h = bxD8v.ease
		}
	}();
	b4f.bWf5k = function() {
		var Id5i = this.Ic5h,
			baX2x = 3 * Id5i[0],
			bxA8s = 3 * (Id5i[2] - Id5i[0]) - baX2x,
			bVM4Q = 1 - baX2x - bxA8s,
			bba2x = 3 * Id5i[1],
			bxy8q = 3 * (Id5i[3] - Id5i[1]) - bba2x,
			bVF4J = 1 - bba2x - bxy8q;
		this.baS2x = {
			ax: bVM4Q,
			ay: bVF4J,
			bx: bxA8s,
			by: bxy8q,
			cx: baX2x,
			cy: bba2x
		}
	};
	b4f.bVf4j = function() {
		var bxp8h = function(by5D, oR0x) {
				return ((oR0x.ax * by5D + oR0x.bx) * by5D + oR0x.cx) * by5D
			};
		var bUP4T = function(by5D, oR0x) {
				return ((oR0x.ay * by5D + oR0x.by) * by5D + oR0x.cy) * by5D
			};
		var bUy4C = function(by5D, oR0x) {
				return (3 * oR0x.ax * by5D + 2 * oR0x.bx) * by5D + oR0x.cx
			};
		var bUv4z = function(by5D, bxl8d, oR0x) {
				var t0, t1, t2, x2, d2, i;
				for (t2 = by5D, i = 0; i < 8; i++) {
					x2 = bxp8h(t2, oR0x) - by5D;
					if (Math.abs(x2) < bxl8d) return t2;
					d2 = bUy4C(t2, oR0x);
					if (Math.abs(d2) < 1e-6) break;
					t2 = t2 - x2 / d2
				}
				t0 = 0;
				t1 = 1;
				t2 = by5D;
				if (t2 < t0) return t0;
				if (t2 > t1) return t1;
				while (t0 < t1) {
					x2 = bxp8h(t2, oR0x);
					if (Math.abs(x2 - by5D) < bxl8d) return t2;
					if (by5D > x2) t0 = t2;
					else t1 = t2;
					t2 = (t1 - t0) * .5 + t0
				}
				return t2
			};
		return function(dg6a) {
			return bUP4T(bUv4z(dg6a / this.zQ3x, this.bWj5o, this.baS2x), this.baS2x)
		}
	}();
	b4f.bxE8w = function(by5D) {
		var dg6a = by5D - this.NO8G.time,
			wI2x = this.bVf4j(dg6a),
			bi5n = k4o.FG5L(this.NO8G.offset * (1 - wI2x) + this.Tt0x.offset * wI2x, 2),
			nm9d = !1;
		if (dg6a >= this.zQ3x) {
			bi5n = this.Tt0x.offset;
			nm9d = !0
		}
		this.w5B("onupdate", {
			offset: bi5n
		});
		return nm9d
	};
	b4f.bh5m = function() {
		this.w5B("onupdate", {
			offset: this.Tt0x.offset
		});
		K5P.bh5m.apply(this, arguments);
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		M5R = c4g("nej.ut"),
		b4f;
	if ( !! M5R.Dd4h) return;
	M5R.Dd4h = NEJ.C();
	b4f = M5R.Dd4h.O5T(M5R.EB4F);
	b4f.bj5o = function(e4i) {
		e4i = NEJ.X({}, e4i);
		e4i.timing = "easein";
		this.bk5p(e4i)
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		M5R = c4g("nej.ut"),
		ur1x;
	M5R.Cy4C = NEJ.C();
	ur1x = M5R.Cy4C.O5T(M5R.cz5E);
	ur1x.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.csS0x = !! e4i.reset;
		this.MB7u = parseInt(e4i.delta) || 0;
		this.in8f = a3x.y5D(e4i.track);
		this.bsf6Z = a3x.y5D(e4i.progress);
		this.bS5X([
			[e4i.thumb, "mousedown", this.cqH0x.g4k(this)],
			[document, "mousemove", this.bsd6X.g4k(this)],
			[document, "mouseup", this.bps6m.g4k(this)],
			[this.in8f, "mousedown", this.bsb6V.g4k(this)]
		]);
		var fB7u = e4i.value;
		if (fB7u == null) {
			fB7u = this.bsf6Z.offsetWidth / this.in8f.offsetWidth
		}
		this.fY7R(fB7u)
	};
	ur1x.bC5H = function() {
		if ( !! this.csS0x) this.Lu6o(0);
		this.bG5L()
	};
	ur1x.cqH0x = function(d4h) {
		if ( !! this.hT8L) return;
		h4l.bh5m(d4h);
		this.hT8L = h4l.kn9e(d4h);
		this.brZ6T = this.in8f.offsetWidth
	};
	ur1x.bsd6X = function(d4h) {
		if (!this.hT8L) return;
		var bi5n = h4l.kn9e(d4h),
			dg6a = bi5n - this.hT8L;
		this.hT8L = bi5n;
		this.Lu6o(this.En4r + dg6a / this.brZ6T);
		this.w5B("onslidechange", {
			ratio: this.En4r
		})
	};
	ur1x.bps6m = function(d4h) {
		if (!this.hT8L) return;
		this.bsd6X(d4h);
		delete this.hT8L;
		delete this.brZ6T;
		this.w5B("onslidestop", {
			ratio: this.En4r
		})
	};
	ur1x.bsb6V = function(d4h) {
		var cgv7o = a3x.hJ8B(this.in8f).x,
			cfS7L = h4l.kn9e(d4h);
		this.Lu6o((cfS7L - cgv7o + this.MB7u) / this.in8f.offsetWidth);
		this.w5B("onslidestop", {
			ratio: this.En4r
		})
	};
	ur1x.Lu6o = function(fB7u) {
		this.En4r = Math.max(0, Math.min(1, fB7u));
		a3x.Y5d(this.bsf6Z, "width", this.En4r * 100 + "%")
	};
	ur1x.fY7R = function(fB7u) {
		if ( !! this.hT8L) return;
		this.Lu6o(fB7u)
	};
	ur1x.brs6m = function(fB7u) {
		return this.En4r
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		fL7E = c4g("nm.ut");
	fL7E.bXj5o = function() {
		var Gg5l = function(bs5x, dM6G, nx0x, nt0x, xk2x) {
				if (nx0x < nt0x) {
					var Eg4k = Math.floor((nx0x + nt0x) / 2);
					Gg5l(bs5x, dM6G, nx0x, Eg4k, xk2x);
					Gg5l(bs5x, dM6G, Eg4k + 1, nt0x, xk2x);
					bYB5G(bs5x, dM6G, nx0x, Eg4k, nt0x, xk2x)
				}
			};
		var bYB5G = function(bs5x, dM6G, nx0x, Eg4k, nt0x, xk2x) {
				var i = nx0x,
					j = Eg4k + 1,
					k = nx0x;
				while (i <= Eg4k && j <= nt0x) {
					if (xk2x(bs5x[i], bs5x[j]) <= 0) {
						dM6G[k++] = bs5x[i++]
					} else {
						dM6G[k++] = bs5x[j++]
					}
				}
				while (i <= Eg4k) {
					dM6G[k++] = bs5x[i++]
				}
				while (j <= nt0x) {
					dM6G[k++] = bs5x[j++]
				}
				for (i = nx0x; i <= nt0x; i++) {
					bs5x[i] = dM6G[i]
				}
			};
		var bYK5P = function(gH7A, bnA5F) {
				return gH7A < bnA5F
			};
		return function(bs5x, xk2x) {
			if (!bs5x || bs5x.length == 0) return bs5x;
			xk2x = xk2x || bYK5P;
			Gg5l(bs5x, new Array(bs5x.length), 0, bs5x.length - 1, xk2x);
			return bs5x
		}
	}();
	fL7E.bny5D = function() {
		var ga7T = /\r\n|\r|\n/,
			jf8X = /\[(.*?)\]/gi,
			brh6b = {
				ar: "artist",
				ti: "track",
				al: "album",
				offset: "offset"
			};
		var bri6c = function(m4q, he8W) {
				var bs5x = [];
				he8W = he8W.replace(jf8X, function($1, $2) {
					var by5D = brj6d.call(this, m4q, $2);
					if (by5D != null) {
						bs5x.push({
							time: by5D,
							tag: $2
						});
						m4q.scrollable = !0
					}
					return ""
				}.g4k(this)).trim();
				if (!bs5x.length) {
					if (!he8W || he8W.length == 0) return;
					bs5x.push({
						time: -1
					})
				}
				k4o.bc5h(bs5x, function(q4u) {
					q4u.lyric = he8W
				});
				var uC2x = m4q.lines;
				uC2x.push.apply(uC2x, bs5x)
			};
		var brj6d = function(m4q, by5D) {
				var bs5x = by5D.split(":"),
					tu1x = bs5x.shift(),
					J5O = brh6b[tu1x];
				if ( !! J5O) {
					m4q[J5O] = bs5x.join(":");
					return null
				}
				tu1x = parseInt(tu1x);
				if (isNaN(tu1x)) {
					return null
				} else {
					var bi5n = parseInt(m4q.offset) || 0;
					return tu1x * 60 + parseFloat(bs5x.join(".")) + bi5n / 1e3
				}
			};
		var brl6f = function(brm6g, jb8T) {
				return brm6g.time - jb8T.time
			};
		return function(C5H, bl5q) {
			var m4q = {
				id: C5H,
				lines: [],
				scrollable: !1,
				source: bl5q
			};
			k4o.bc5h((bl5q || "").trim().split(ga7T), bri6c.g4k(null, m4q));
			if (m4q.scrollable) {
				fL7E.bXj5o(m4q.lines, brl6f);
				var r4v;
				for (var i = 0; i < m4q.lines.length; i++) {
					if ( !! m4q.lines[i].lyric) {
						r4v = i;
						break
					}
				}
				m4q.lines.splice(0, r4v)
			}
			return m4q
		}
	}();
	fL7E.btg7Z = function(sr1x, Xs1x) {
		var bnt5y = fL7E.bny5D(0, sr1x),
			bns5x = fL7E.bny5D(0, Xs1x);
		if (bnt5y.scrollable && bns5x.scrollable) {
			k4o.bc5h(bnt5y.lines, function(q4u) {
				var Xr1x = getTranslate(q4u.time);
				if (Xr1x) {
					q4u.lyric = q4u.lyric + "<br>" + Xr1x.lyric
				}
			})
		}
		return bnt5y;

		function getTranslate(by5D) {
			var r4v = k4o.cT6N(bns5x.lines, function(q4u) {
				return q4u.time == by5D
			});
			if (r4v != -1) {
				return bns5x.lines[r4v]
			}
		}
	}
})();
(function() {
	var M5R = NEJ.P("nej.ut"),
		bxj8b;
	if ( !! M5R.tm1x) return;
	M5R.tm1x = NEJ.C();
	bxj8b = M5R.tm1x.O5T(M5R.EB4F);
	bxj8b.bj5o = function(e4i) {
		e4i = NEJ.X({}, e4i);
		e4i.timing = "linear";
		this.bk5p(e4i)
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
	var btk7d = function(j4n) {
			if (j4n.errorType == 6 || j4n.errorType == 7 || j4n.errorType == 8) {
				if (!l4p.hd8V()) return;
				l4p.jg8Y({
					txt: "m-report-point",
					title: "提示",
					onaction: btl7e.g4k(this, j4n)
				})
			} else {
				btl7e(j4n)
			}
		};
	var ccd6X = function(d4h) {
			var f4j = h4l.U5Z(d4h, "d:action");
			if (a3x.u5z(f4j, "action") == "feedLyric") {
				h4l.bh5m(d4h);
				var cc5h = a3x.u5z(f4j, "code"),
					j4n = {
						songId: a3x.u5z(f4j, "id"),
						errorType: cc5h
					};
				btk7d(j4n)
			}
		};
	var btl7e = function(j4n, d4h) {
			if (!d4h || d4h.action == "ok") {
				v5A.bq5v("/api/v1/feedback/lyric", {
					type: "json",
					method: "post",
					data: k4o.cY6S(j4n),
					onload: function(d4h) {
						if (d4h.code == 200) {
							n4r.Z5e.N5S({
								tip: "提交成功"
							});
							if (k4o.fZ7S(j4n.onok)) {
								j4n.onok()
							}
						} else if (d4h.code == -2) {
							l4p.gP8H({
								title: "提示",
								message: "您的积分不足",
								btnok: "赚积分",
								action: function(W5b) {
									if (W5b == "ok") {
										location.dispatch2("/store/gain/index")
									}
								}
							})
						} else {
							n4r.Z5e.N5S({
								type: 2,
								tip: "提交失败"
							})
						}
					}
				})
			}
		};
	l4p.btm7f = function(f4j) {
		var f4j = f4j || document.body,
			gf7Y = ccd6X.g4k(this);
		h4l.s4w(f4j, "click", gf7Y);
		return {
			destroy: function() {
				h4l.mv9m(f4j, "click", gf7Y)
			}
		}
	};
	l4p.cyb1x = function(j4n) {
		btk7d(j4n)
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		H5M = c4g("nej.ut"),
		M5R = c4g("nej.p"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		n4r = c4g("nm.l"),
		dj6d = c4g("nm.ut"),
		D5I = c4g("nm.w"),
		b4f, K5P;
	var bnq5v = {};
	D5I.btc7V = NEJ.C();
	b4f = D5I.btc7V.O5T(H5M.cz5E);
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.bK5P = e4i.nlist;
		this.QP9G = e4i.nmenu;
		this.bto7h = e4i.nask;
		this.sE1x = {
			track: e4i.nscroll,
			slide: a3x.cP6J(e4i.nscroll)[0],
			content: this.bK5P,
			speed: 4
		};
		this.bnn5s = this.BG4K.g4k(this);
		this.bS5X([
			[e4i.nask, "click", this.cdi6c.g4k(this)],
			[this.sE1x.slide, "mousedown", this.ZX2x.g4k(this)],
			[document, "mouseup", this.ZY2x.g4k(this)],
			[D5I.fl7e, "playaction", this.vj2x.g4k(this)]
		]);
		if (M5R.dd6X.browser != "firefox") {
			this.bS5X([
				[this.bK5P, "mousewheel", this.bnn5s]
			])
		} else {
			this.bK5P.addEventListener("DOMMouseScroll", this.bnn5s, false)
		}
		this.hS8K = D5I.xe2x.B5G(this.sE1x);
		this.bnl5q = l4p.btm7f(this.bK5P);
		this.bz5E = D5I.fl7e.gc7V()
	};
	b4f.bC5H = function() {
		this.bG5L();
		delete this.xL2x;
		delete this.sj1x;
		delete this.Xc1x;
		if (this.bnl5q) {
			this.bnl5q.destroy();
			delete this.bnl5q
		}
		if (M5R.dd6X.browser == "firefox") {
			this.bK5P.removeEventListener("DOMMouseScroll", this.bnn5s)
		}
		a3x.Y5d(this.QP9G, "display", "none")
	};
	b4f.cdi6c = function() {
		if (a3x.cW6Q(this.QP9G, "display") == "none") {
			a3x.Y5d(this.QP9G, "display", "block")
		} else {
			a3x.Y5d(this.QP9G, "display", "none")
		}
	};
	b4f.bmX5c = function() {
		var gY8Q = 0;
		return function(LG6A) {
			clearTimeout(gY8Q);
			this.Xc1x = true;
			if (this.sj1x) {
				this.sj1x.S5X();
				delete this.sj1x
			}
			if (!LG6A) {
				gY8Q = setTimeout(function() {
					delete this.Xc1x
				}.g4k(this), 3e3)
			}
		}
	}();
	b4f.BG4K = function() {
		this.bmX5c()
	};
	b4f.ZX2x = function() {
		this.bmX5c(true)
	};
	b4f.vj2x = function(d4h) {
		if (d4h.action == "timeupdate") {
			this.btt7m(d4h.data.time, true)
		}
	};
	b4f.btt7m = function(by5D, cge7X) {
		if (!(this.xL2x && this.xL2x.scrollable) || this.Xc1x) return;
		var i = this.xL2x.lines.length - 1,
			ii, dg6a, r4v = -1,
			btu7n = 0,
			fP7I = 0;
		for (; i >= 0; i--) {
			ii = this.xL2x.lines[i];
			dg6a = ii.time - by5D;
			if (dg6a < 0 && (i > 0 || dg6a <= -2)) {
				r4v = i;
				break
			}
		}
		for (var j = 0, jj; j < this.bmW5b.length; j++) {
			jj = this.bmW5b[j];
			if (j < r4v) {
				btu7n += jj.clientHeight
			}
			if (r4v == j) {
				a3x.z5E(jj, "z-sel")
			} else {
				a3x.x5C(jj, "z-sel")
			}
		}
		if (r4v < 0 || a3x.hJ8B(this.bmW5b[r4v], this.bK5P).y < 96) {
			fP7I = 0
		} else {
			fP7I = btu7n - 96
		}
		if (Math.abs(fP7I - this.bK5P.scrollTop) <= 4 || this.sj1x) return;
		if (cge7X) {
			var cm5r = {
				from: {
					offset: this.bK5P.scrollTop
				},
				to: {
					offset: fP7I
				},
				duration: 500,
				onupdate: function(d4h) {
					this.bK5P.scrollTop = d4h.offset;
					this.hS8K.ET5Y(this.bK5P.scrollTop / (this.bK5P.scrollHeight - this.bK5P.clientHeight))
				}.g4k(this),
				onstop: function() {
					if (this.sj1x) {
						this.sj1x.S5X();
						delete this.sj1x
					}
				}.g4k(this)
			};
			this.sj1x = H5M.tm1x.B5G(cm5r);
			this.sj1x.eC7v()
		} else {
			this.bK5P.scrollTop = fP7I;
			this.hS8K.ET5Y(this.bK5P.scrollTop / (this.bK5P.scrollHeight - this.bK5P.clientHeight))
		}
	};
	b4f.bXa5f = function(be5j) {
		this.Xb1x = be5j;
		delete this.xL2x;
		if (be5j && !be5j.program) {
			var V5a = "/api/song/lyric",
				bw5B = {
					id: be5j.id,
					lv: -1,
					tv: -1
				};
			if (bnq5v[be5j.id]) {
				this.bmU5Z(bnq5v[be5j.id])
			} else {
				v5A.bq5v(V5a, {
					sync: false,
					type: "json",
					query: bw5B,
					method: "get",
					onload: this.bmU5Z.dT7M(this, be5j.id),
					onerror: this.bmU5Z.g4k(this)
				})
			}
			a3x.x5C(this.bto7h, "f-hide")
		} else {
			a3x.z5E(this.bto7h, "f-hide");
			this.bad2x({})
		}
	};
	b4f.bmU5Z = function(d4h, C5H) {
		if (d4h.code == 200) {
			if (C5H) {
				bnq5v[C5H] = d4h
			}
			var sr1x = d4h.lrc || {},
				Xr1x = d4h.tlyric || {};
			if (!sr1x.lyric) {
				this.bad2x(d4h)
			} else {
				this.xL2x = dj6d.btg7Z(sr1x.lyric, Xr1x.lyric);
				d4h.scrollable = this.xL2x.scrollable;
				a3x.dK6E(this.bK5P, "m-lyric-line", {
					id: this.Xb1x.id,
					lines: this.xL2x.lines,
					scrollable: this.xL2x.scrollable
				});
				this.bmW5b = a3x.I5N(this.bK5P, "j-flag")
			}
			d4h.songId = this.Xb1x.id;
			a3x.dK6E(this.QP9G, "m-player-lyric-ask", d4h)
		} else {} if (this.sj1x) {
			this.sj1x.S5X();
			delete this.sj1x
		}
		this.hS8K.oN0x();
		this.btt7m(this.bz5E.brd6X() || 0, false)
	};
	b4f.ZY2x = function() {
		if (this.Xc1x) {
			this.bmX5c()
		}
	};
	b4f.bad2x = function(j4n) {
		if (this.Xb1x.program) {
			this.bK5P.innerHTML = '<div class="nocnt nolyric"><span class="s-fc4">电台节目，无歌词</span></div>'
		} else if (j4n.nolyric) {
			this.bK5P.innerHTML = '<div class="nocnt nolyric"><span class="s-fc4">纯音乐，无歌词</span></div>'
		} else {
			this.bK5P.innerHTML = '<div class="nocnt nolyric"><span class="s-fc4">暂时没有歌词</span><a data-action="feedLyric" data-code="6"' + "data-id=" + this.Xb1x.id + ' href="#" class="f-tdu">求歌词</a></div>'
		}
		this.hS8K && this.hS8K.oN0x()
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		db6V = c4g("nej.p"),
		v5A = c4g("nej.j"),
		H5M = c4g("nej.ut"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		l4p = c4g("nm.x"),
		dj6d = c4g("nm.u"),
		D5I = c4g("nm.w"),
		L5Q = c4g("nm.m.f"),
		ds6m = c4g("player"),
		b4f, K5P;
	L5Q.Ju6o = NEJ.C();
	b4f = L5Q.Ju6o.O5T(H5M.cz5E);
	b4f.cl5q = function() {
		this.cs5x();
		this.AY3x = a3x.y5D("g_player");
		this.kB9s = this.AY3x.parentNode;
		var i4m = a3x.I5N(this.AY3x, "j-flag");
		this.gL7E = i4m[0];
		this.jQ8I = i4m[1];
		this.jh8Z = i4m[2];
		this.Gm5r = i4m[3];
		this.ov0x = i4m[4];
		this.hk8c = i4m[5];
		i4m = a3x.cP6J(i4m[6]);
		this.xT2x = i4m[0];
		this.tQ1x = i4m[1];
		this.bty7r = i4m[2];
		this.XI1x = i4m[3];
		this.bmD5I = i4m[4];
		this.bmC5H = a3x.cP6J(this.XI1x)[0];
		this.ve2x = l4p.bpI6C();
		this.WP1x(3e3);
		this.JI6C();
		this.ckZ8R();
		this.cld8V();
		this.btA7t();
		this.bmw5B();
		ds6m.setLike = this.btB7u.g4k(this);
		h4l.s4w(this.kB9s, "click", this.bO5T.g4k(this));
		h4l.s4w(D5I.fl7e, "playaction", this.vj2x.g4k(this));
		h4l.s4w(D5I.rk1x, "queuechange", this.uB2x.g4k(this));
		h4l.s4w(D5I.rk1x, "playchange", this.hv8n.g4k(this));
		h4l.s4w(this.kB9s, db6V.dd6X.browser == "ie" ? "mouseleave" : "mouseout", this.btC7v.g4k(this, !1));
		h4l.s4w(this.kB9s, db6V.dd6X.browser == "ie" ? "mouseenter" : "mouseover", this.btC7v.g4k(this, !0));
		h4l.s4w(document, "keyup", this.btD7w.g4k(this));
		h4l.s4w(window, "iframeclick", this.rN1x.g4k(this));
		h4l.s4w(document, "click", this.rN1x.g4k(this));
		h4l.s4w(this.xT2x, "click", h4l.bh5m.g4k(h4l));
		ds6m.hotkeys = this.btD7w.g4k(this);
		this.btE7x = k4o.mI9z()
	};
	b4f.bmw5B = function() {
		var Gp5u = a3x.y5D("g-topbar"),
			dp6j = this.AY3x.offsetWidth,
			cnd9U = this.kB9s.offsetWidth;
		if (!Gp5u) return;
		a3x.Y5d(this.AY3x, "marginLeft", -(cnd9U - Gp5u.offsetWidth + this.AY3x.offsetWidth) / 2 + "px")
	};
	b4f.btA7t = function() {
		if (this.ve2x.lock) {
			a3x.x5C(this.kB9s, "m-playbar-unlock");
			a3x.z5E(this.kB9s, "m-playbar-lock");
			window.g_bottomBarHeight = 47
		} else {
			a3x.z5E(this.kB9s, "m-playbar-unlock");
			a3x.x5C(this.kB9s, "m-playbar-lock");
			window.g_bottomBarHeight = 0
		}
	};
	b4f.JI6C = function() {
		var i4m = a3x.cP6J(this.Gm5r);
		this.btF7y = i4m[0];
		this.WL1x = a3x.cP6J(i4m[1])[0];
		this.Gq5v = H5M.Cy4C.B5G({
			track: this.Gm5r,
			thumb: this.WL1x,
			progress: i4m[1],
			onslidestop: function(d4h) {
				this.btH7A = false;
				this.bz5E.nF0x(this.bz5E.bqR6L() * d4h.ratio)
			}.g4k(this),
			onslidechange: function(d4h) {
				this.btH7A = true;
				this.bmp5u({
					time: d4h.ratio * this.bz5E.bqR6L(),
					duration: this.bz5E.bqR6L()
				})
			}.g4k(this)
		})
	};
	b4f.cld8V = function() {
		var i4m = a3x.I5N(this.xT2x, "j-t"),
			fB7u = i4m[1],
			zY3x = this.ve2x.volume;
		if (zY3x == null) {
			zY3x = .8
		}
		this.ut2x = H5M.Fr5w.B5G({
			track: i4m[0],
			slide: i4m[2],
			onchange: function(d4h) {
				var A5F = 1 - d4h.y.rate,
					co5t = 93 * A5F;
				a3x.Y5d(fB7u, "height", co5t + "px");
				co5t > 0 ? a3x.x5C(this.tQ1x, "icn-volno") : a3x.z5E(this.tQ1x, "icn-volno");
				this.bz5E.lM9D(A5F);
				this.ve2x.volume = A5F;
				l4p.DD4H(this.ve2x)
			}.g4k(this)
		});
		this.ut2x.fY7R({
			x: 0,
			y: 1 - zY3x
		})
	};
	b4f.ckZ8R = function() {
		var bw5B = k4o.hf8X(location.hash.slice(1)) || {},
			t4x = bw5B["__media"] || "auto";
		if (this.ve2x.useFlash) {
			this.ve2x.useFlash = false;
			l4p.DD4H(this.ve2x)
		}
		this.bz5E = D5I.fl7e.gc7V({
			media: t4x
		});
		this.gD7w = D5I.rk1x.gc7V();
		ds6m.addTo = function(iB8t, qz0x, fp7i) {
			this.gD7w.bSz4D(JSON.parse(JSON.stringify(iB8t)), qz0x, fp7i)
		}.g4k(this);
		ds6m.tipPlay = this.bmn5s.g4k(this);
		ds6m.getPlaying = function() {
			return {
				track: this.gD7w.qZ1x(),
				playing: this.bz5E.vk2x()
			}
		}.g4k(this);
		ds6m.pause = this.bz5E.fx7q.g4k(this.bz5E);
		var gu7n = this.gD7w.qZ1x();
		if (gu7n) {
			this.btJ7C(gu7n)
		}
		this.btK7D(this.gD7w.bRR4V());
		this.btL7E()
	};
	b4f.uB2x = function() {
		var gY8Q = 0;
		return function(d4h) {
			if (d4h.cmd == "play" || d4h.cmd == "addto") {
				this.bmn5s(d4h.cmd == "play" ? "已开始播放" : "已添加到播放列表")
			}
			this.btL7E()
		}
	}();
	b4f.hv8n = function(d4h) {
		var be5j = d4h["new"];
		this.btJ7C(be5j);
		if (this.bz5E.vk2x()) {
			document.title = decodeURIComponent("%E2%96%B6%20") + be5j.name
		}
		h4l.w5B(window, "playchange", {
			trackId: be5j.id,
			track: be5j
		})
	};
	b4f.bO5T = function(d4h) {
		var f4j = h4l.U5Z(d4h, "d:action"),
			W5b = a3x.u5z(f4j, "action"),
			kR9I = h4l.U5Z(d4h, "a:href");
		if (kR9I && kR9I.tagName.toLocaleLowerCase() == "a" && /^http/.test(kR9I.href)) {
			this.S5X();
			return
		} else {
			h4l.bh5m(d4h)
		}
		switch (W5b) {
		case "lock":
			this.ve2x.lock = !a3x.bA5F(this.kB9s, "m-playbar-lock");
			l4p.DD4H(this.ve2x);
			this.btA7t();
			break;
		case "prev":
			this.gD7w.zK3x();
			break;
		case "next":
			this.gD7w.nS0x();
			break;
		case "play":
			this.bz5E.eC7v();
			break;
		case "pause":
			this.bz5E.fx7q();
			break;
		case "like":
			var be5j = this.gD7w.qZ1x();
			if (be5j) {
				window.subscribe(be5j, be5j.program)
			}!be5j.program && this.sm1x && this.sm1x.S5X();
			break;
		case "share":
			var be5j = this.gD7w.qZ1x();
			if (be5j.program && be5j.program.auditStatus == 1) {
				l4p.hR8J("由于版权问题，该节目暂时无法分享。")
			} else {
				if (be5j) {
					!be5j.program ? l4p.mq9h({
						rid: be5j.id,
						type: 18,
						purl: be5j.album.picUrl,
						name: be5j.name,
						author: l4p.xb2x(be5j.artists)
					}) : l4p.mq9h({
						rid: be5j.program.id,
						type: 17,
						purl: be5j.program.coverUrl,
						name: be5j.program.name,
						author: (be5j.program.radio || []).name
					})
				}
				this.sm1x && this.sm1x.S5X()
			}
			break;
		case "mode":
			this.btK7D(this.gD7w.bRs3x(), true);
			break;
		case "volume":
			h4l.bh5m(d4h);
			if (this.xT2x.style.visibility != "hidden") {
				a3x.Y5d(this.xT2x, "visibility", "hidden")
			} else {
				a3x.Y5d(this.xT2x, "visibility", "visible")
			}
			break;
		case "panel":
			h4l.bh5m(d4h);
			if (!this.sm1x) {
				this.sm1x = L5Q.bsZ7S.B5G({
					parent: this.kB9s,
					onclose: function() {
						delete this.sm1x;
						this.WP1x()
					}.g4k(this)
				})
			} else {
				if (this.sm1x) {
					this.sm1x.S5X();
					delete this.sm1x
				}
			}
			break
		}
	};
	b4f.bmp5u = function(d4h) {
		this.ov0x.innerHTML = l4p.eQ7J("<em>{0}</em> / {1}", l4p.kp9g(d4h.time), l4p.kp9g(d4h.duration))
	};
	b4f.btK7D = function(eE7x, cA5F) {
		var bu5z = {
			2: {
				icn: "icn-one",
				title: "单曲循环"
			},
			4: {
				icn: "icn-loop",
				title: "循环"
			},
			5: {
				icn: "icn-shuffle",
				title: "随机"
			}
		},
			bb5g = bu5z[eE7x];
		a3x.eD7w(this.bty7r, "icn-one icn-loop icn-shuffle", bb5g.icn);
		this.bmD5I.innerText = this.bty7r.title = bb5g.title;
		clearTimeout(this.cqY0x);
		if (cA5F) {
			a3x.Y5d(this.bmD5I, "display", "");
			this.cqY0x = setTimeout(function() {
				a3x.Y5d(this.bmD5I, "display", "none")
			}.g4k(this), 2e3)
		}
	};
	b4f.btB7u = function(dh6b) {
		var gu7n = this.gD7w.qZ1x();
		if (gu7n && gu7n.program && gu7n.program.id == dh6b.id) {
			gu7n.program.liked = dh6b.liked;
			this.hk8c.title = "赞";
			if (dh6b.liked) {
				a3x.eD7w(this.hk8c, "icn-zan", "icn-yizan")
			} else {
				a3x.eD7w(this.hk8c, "icn-yizan", "icn-zan")
			}
			this.gD7w.XV1x()
		}
	};
	b4f.btJ7C = function(be5j) {
		var bv5A;
		a3x.Y5d(this.btF7y, "width", 0);
		this.bmp5u(0);
		this.Gq5v.fY7R(0);
		if (be5j) {
			bv5A = this.crn0x(be5j);
			if (be5j.program) {
				a3x.eD7w(this.hk8c, "icn-add", "icn-zan");
				this.hk8c.title = "赞";
				v5A.jk8c(this.oG0x);
				this.oG0x = v5A.bq5v("/api/dj/program/detail", {
					type: "json",
					query: {
						id: be5j.program.id
					},
					onload: function(d4h) {
						if (d4h.code == 200) {
							this.btB7u(d4h.program)
						}
					}.g4k(this)
				})
			} else {
				a3x.eD7w(this.hk8c, "icn-zan icn-yizan", "icn-add");
				this.hk8c.title = "收藏"
			}
			this.jQ8I.innerHTML = l4p.eQ7J('<img src="{0}?param=34y34"><a href="{1}" hidefocus="true" class="mask"></a>', bv5A.cover, bv5A.titleUrl);
			a3x.dK6E(this.jh8Z, "m-player-playinfo", bv5A)
		}
	};
	b4f.btL7E = function() {
		var i4m = a3x.cP6J(this.XI1x);
		i4m[1].innerText = this.gD7w.jE8w()
	};
	b4f.crn0x = function(be5j) {
		var m4q = {
			duration: be5j.duration,
			cover: "http://s4.music.126.net/style/web2/img/default_album.jpg",
			source: be5j.source
		};
		if (be5j.program) {
			m4q.type = "program";
			m4q.name = k4o.dS7L(be5j.program.name);
			m4q.cover = be5j.program.coverUrl;
			m4q.titleUrl = "/program?id=" + be5j.program.id;
			m4q.artistHtml = l4p.eQ7J('<a hidefocus="true" href="/radio?id={0}" title="{1}">{1}</a>', be5j.program.radio.id, k4o.dS7L(be5j.program.radio.name))
		} else {
			m4q.type = "song";
			m4q.name = be5j.name;
			m4q.mvid = be5j.mvid;
			if (!be5j.album) {
				be5j.album = {}
			}
			if (be5j.album.pic && be5j.album.picUrl) {
				m4q.cover = be5j.album.picUrl
			}
			m4q.titleUrl = "/song?id=" + be5j.id;
			m4q.artistHtml = l4p.rz1x(be5j.artists)
		}
		return m4q
	};
	b4f.vj2x = function(d4h) {
		var j4n = d4h.data;
		switch (d4h.action) {
		case "play":
			a3x.z5E(this.gL7E, "pas");
			a3x.u5z(this.gL7E, "action", "pause");
			v5A.gI7B("playerid", this.btE7x);
			var be5j = this.gD7w.qZ1x();
			if (be5j) {
				document.title = decodeURIComponent("%E2%96%B6%20") + be5j.name
			}
			h4l.w5B(window, "playstatechange", d4h);
			break;
		case "pause":
			a3x.x5C(this.gL7E, "pas");
			a3x.u5z(this.gL7E, "action", "play");
			document.title = this.crT0x() || "网易云音乐";
			break;
		case "timeupdate":
			if (this.btH7A) return;
			var io8g = v5A.gI7B("playerid");
			if (io8g && io8g !== this.btE7x) {
				this.bz5E.fx7q()
			}
			this.Gq5v.fY7R(j4n.time / j4n.duration);
			this.bmp5u(j4n);
			break;
		case "progress":
			a3x.Y5d(this.btF7y, "width", j4n.loaded * 100 / j4n.total + "%");
			break;
		case "error":
			this.bmn5s("播放失败");
			a3x.x5C(this.WL1x, "z-load");
			break;
		case "playing":
			a3x.x5C(this.WL1x, "z-load");
			break;
		case "waiting":
			a3x.z5E(this.WL1x, "z-load");
			break
		}
	};
	b4f.bmn5s = function() {
		var gY8Q = 0;
		return function(dl6f) {
			if (dl6f) {
				this.bmC5H.innerText = dl6f;
				a3x.Y5d(this.bmC5H, "display", "");
				clearTimeout(gY8Q);
				gY8Q = setTimeout(function() {
					a3x.Y5d(this.bmC5H, "display", "none")
				}.g4k(this), 2e3);
				this.qA0x(true);
				this.WP1x(2e3)
			}
		}
	}();
	b4f.btC7v = function(GF5K, d4h) {
		if (!this.sm1x) {
			if (GF5K) {
				if (!l4p.Ik5p(this.kB9s, d4h.relatedTarget || d4h.fromElement)) {
					this.qA0x(true)
				}
			} else {
				if (!l4p.Ik5p(this.kB9s, d4h.relatedTarget || d4h.toElement)) {
					this.WP1x()
				}
			}
		}
	};
	b4f.WP1x = function(ru1x) {
		clearTimeout(this.btO7H);
		this.btO7H = setTimeout(function() {
			if (!this.ve2x.lock) {
				this.qA0x(false)
			}
		}.g4k(this), ru1x || 500)
	};
	b4f.qA0x = function() {
		var xi2x, WF1x = true;
		return function(kV9M) {
			clearTimeout(this.btO7H);
			if (xi2x || kV9M == WF1x) return;
			WF1x = kV9M;
			xi2x = H5M.Dd4h.B5G({
				to: {
					offset: kV9M ? -53 : -7
				},
				from: {
					offset: kV9M ? -7 : -53
				},
				onstop: function() {
					xi2x.S5X();
					xi2x = null
				},
				onupdate: function(d4h) {
					a3x.Y5d(this.kB9s, "top", d4h.offset + "px")
				}.g4k(this),
				duration: kV9M ? 100 : 350
			});
			xi2x.eC7v()
		}
	}();
	b4f.btD7w = function(d4h) {
		if (d4h.keyCode == 80 && !l4p.bIf0x()) {
			this.bz5E.vk2x() ? this.bz5E.fx7q() : this.bz5E.eC7v()
		} else if (d4h.ctrlKey) {
			switch (d4h.keyCode) {
			case 37:
				this.gD7w.zK3x();
				break;
			case 39:
				this.gD7w.nS0x();
				break
			}
		}
	};
	b4f.rN1x = function() {
		a3x.Y5d(this.xT2x, "visibility", "hidden");
		this.sm1x && this.sm1x.S5X()
	};
	b4f.crT0x = function() {
		var fc7V = a3x.y5D("g_iframe");
		if (fc7V) {
			return fc7V.contentWindow.document.title
		} else {
			return ""
		}
	};
	b4f.N5S = function() {
		window.g_bottomBarShow = true;
		a3x.Y5d(this.kB9s, "visibility", "visible")
	};
	b4f.bp5u = function() {
		window.g_bottomBarShow = false;
		this.bz5E.fx7q();
		a3x.Y5d(this.kB9s, "visibility", "hidden")
	}
})();
(function() {
	var c4g = NEJ.P,
		dN7G = window,
		bn5s = NEJ.F,
		v5A = c4g("nej.j"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		b4f, K5P;
	p4t.eQ7J({
		"netease-login": {
			url: "/api/login",
			onload: "onlogin",
			onerror: "onloginerror"
		},
		"captcha-send": {
			url: "/api/sms/captcha/sent",
			onload: "onsendcaptcha",
			onerror: "onsendcaptchaerror",
			format: function(m4q, e4i) {
				m4q.mobile = e4i.data.cellphone;
				return m4q
			}
		},
		"captcha-verify": {
			url: "/api/sms/captcha/verify",
			onload: "onverifycaptcha",
			onerror: "onverifycaptchaerror",
			format: function(m4q, e4i) {
				m4q.mobile = e4i.data.cellphone;
				m4q.captcha = e4i.data.captcha;
				return m4q
			}
		},
		"mobile-login": {
			url: "/api/login/cellphone",
			onload: "onmobilelogin",
			onerror: "onmobileloginerror"
		},
		"mobile-check": {
			url: "/api/cellphone/existence/check",
			onload: "onmobilecheck",
			onerror: "onmobilecheckerror",
			format: function(m4q, e4i) {
				m4q.mobile = e4i.data.cellphone;
				m4q.captcha = e4i.data.captcha;
				return m4q
			}
		},
		"mobile-regist": {
			url: "/api/register/cellphone",
			onload: "onmobileregist",
			onerror: "onmobileregisterror"
		},
		"mobile-updatepwd": {
			url: "/api/login/password/update",
			onload: "onmobileupdatepwd",
			onerror: "onmobileupdatepwderror",
			format: function(m4q, e4i) {
				m4q.mobile = e4i.data.phone;
				m4q.password = e4i.data.password;
				return m4q
			}
		},
		"mobile-resetpwd": {
			url: "/api/login/password/reset",
			onload: "onmobileresetpwd",
			onerror: "onmobileresetpwderror",
			format: function(m4q, e4i) {
				m4q.mobile = e4i.data.phone;
				m4q.password = e4i.data.password;
				return m4q
			}
		},
		"nickname-set": {
			url: "/api/activate/initProfile",
			onload: "onactive",
			onerror: "onactiveerror"
		},
		logout: {
			url: "/logout",
			onload: "onlogout"
		},
		"logout-quiet": {
			url: "/logout"
		},
		"oauth-nickname": {
			url: "/oauth/init_profile",
			onload: "onactive",
			onerror: "onactiveerror"
		},
		"mobile-nickname": {
			url: "/oauth/register/cellphone",
			onload: "onmobileregist",
			onerror: "onmobileregisterror"
		},
		"mobile-bind": {
			url: "/api/user/bindingCellphone",
			onload: "onmobilebind",
			onerror: "onmobilebinderror",
			format: function(m4q, e4i) {
				m4q.mobile = e4i.data.phone;
				m4q.captcha = e4i.data.captcha;
				return m4q
			}
		},
		"mobile-relogin": {
			url: "/api/mainAccount/set",
			onload: "onmobilelogin",
			onerror: "onmobileloginerror"
		},
		"mainaccount-replace": {
			url: "/api/user/replaceMainAccount",
			onload: "onmainaccountreplace",
			onerror: "onmainaccountreplaceerror"
		},
		"binding-delete": {
			url: "/api/user/deleteBinding",
			onload: "ondeletebinding",
			onerror: "ondeletebindingerror"
		},
		"mobile-change": {
			url: "/api/v1/user/replaceCellphone",
			onload: "onchangemobile",
			onerror: "onchangemobileerror"
		},
		"urs-bind": {
			url: "/api/user/bindingUrs",
			onload: "onbindurs",
			onerror: "onbindurserror"
		},
		"urs-unbind": {
			url: "/api/nuser/unbinding/urs",
			onload: "onunbindurs",
			onerror: "onunbindurserror"
		},
		"mobile-unbind": {
			url: "/api/nuser/unbinding/cellphone",
			onload: "onmobileunbind",
			onerror: "onmobileunbinderror"
		}
	});
	p4t.mx9o = NEJ.C();
	b4f = p4t.mx9o.O5T(p4t.gZ8R);
	b4f.cmp9g = function(e4i) {
		e4i = e4i || {};
		this.cj5o(p4t.y5D("logout"), e4i)
	};
	b4f.cwM1x = function(e4i) {
		e4i = e4i || {};
		this.cj5o(p4t.y5D("logout-quiet"), e4i)
	};
	b4f.XA1x = function(e4i) {
		this.cj5o(p4t.y5D("netease-login"), e4i)
	};
	b4f.wD2x = function(e4i) {
		this.cj5o(p4t.y5D("captcha-send"), e4i)
	};
	b4f.cme9V = function(e4i) {
		this.cj5o(p4t.y5D("captcha-verify"), e4i)
	};
	b4f.cmc9T = function(e4i) {
		this.Gh5m(e4i);
		this.cj5o(p4t.y5D("mobile-login"), e4i)
	};
	b4f.biW4a = function(e4i) {
		this.Gh5m(e4i);
		this.cj5o(p4t.y5D("mobile-check"), e4i)
	};
	b4f.Xw1x = function(e4i) {
		this.Gh5m(e4i);
		this.cj5o(p4t.y5D("mobile-regist"), e4i)
	};
	b4f.cwN1x = function(e4i) {
		this.Gh5m(e4i);
		this.cj5o(p4t.y5D("mobile-resetpwd"), e4i)
	};
	b4f.Xt1x = function(e4i) {
		this.Gh5m(e4i);
		this.cj5o(p4t.y5D("mobile-updatepwd"), e4i)
	};
	b4f.bjb4f = function(e4i) {
		this.cj5o(p4t.y5D("nickname-set"), e4i)
	};
	b4f.cwO1x = function(e4i) {
		this.cj5o(p4t.y5D("oauth-nickname"), e4i)
	};
	b4f.cwP1x = function(e4i) {
		this.cj5o(p4t.y5D("mobile-nickname"), e4i)
	};
	b4f.bjf4j = function(e4i) {
		this.cj5o(p4t.y5D("mobile-bind"), e4i)
	};
	b4f.clT9K = function(e4i) {
		this.cj5o(p4t.y5D("mobile-unbind"), e4i)
	};
	b4f.cwQ1x = function(e4i) {
		this.Gh5m(e4i);
		this.cj5o(p4t.y5D("mobile-relogin"), e4i)
	};
	b4f.cwR1x = function(e4i) {
		this.cj5o(p4t.y5D("mainaccount-replace"), e4i)
	};
	b4f.bAs8k = function(e4i) {
		this.cj5o(p4t.y5D("binding-delete"), e4i)
	};
	b4f.clG8y = function(e4i) {
		this.cj5o(p4t.y5D("mobile-change"), e4i)
	};
	b4f.clC8u = function(e4i) {
		this.cj5o(p4t.y5D("urs-bind"), e4i)
	};
	b4f.clA8s = function(e4i) {
		this.cj5o(p4t.y5D("urs-unbind"), e4i)
	};
	b4f.Gh5m = function(e4i) {
		if (!e4i || !e4i.data) return;
		var j4n = e4i.data;
		if (!j4n.countrycode || j4n.countrycode == "86") delete j4n.countrycode
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		v5A = c4g("nej.j"),
		H5M = c4g("nej.ut"),
		bd5i = c4g("nej.ui"),
		k4o = c4g("nej.u"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		D5I = c4g("nm.w"),
		b4f;
	D5I.Re9V = NEJ.C();
	b4f = D5I.Re9V.O5T(bd5i.er7k);
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		if (e4i.txt) {
			this.o4s.innerHTML = a3x.hV8N(e4i.txt)
		} else if (e4i.html) {
			this.o4s.innerHTML = e4i.html
		}
		this.yl3x = e4i.captchaId;
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.dQ7J = i4m[0];
		this.gr7k = i4m[1];
		this.bS5X([
			[this.gr7k, "click", this.bjr4v.g4k(this)],
			[this.dQ7J, "keypress", this.clr8j.g4k(this)]
		]);
		this.gr7k.src = "/captcha?id=" + this.yl3x
	};
	b4f.bC5H = function() {
		this.bG5L()
	};
	b4f.bjr4v = function() {
		v5A.bq5v("/api/image/captcha/verify/hf", {
			type: "json",
			query: {
				id: this.yl3x,
				captcha: 0
			},
			onload: function(m4q) {
				if (m4q.code == 200) {
					this.yl3x = m4q.captchaId;
					this.gr7k.src = "/captcha?id=" + this.yl3x
				}
			}.g4k(this)
		})
	};
	b4f.clr8j = function(d4h) {
		if (d4h.keyCode == 13) this.w5B("onaction", d4h)
	};
	b4f.Dt4x = function() {
		var m4q = {},
			cc5h = this.dQ7J.value;
		if (!cc5h) {
			m4q.message = "请输入验证码"
		} else {
			v5A.bq5v("/api/image/captcha/verify/hf", {
				type: "json",
				sync: true,
				query: {
					id: this.yl3x,
					captcha: cc5h
				},
				onload: cbVerify.g4k(this),
				onerror: cbVerify.g4k(this)
			})
		}
		return m4q;

		function cbVerify(d4h) {
			if (d4h.code == 200) {
				if (d4h.result) {
					m4q.success = true
				} else {
					m4q.message = "验证码错误";
					if (d4h.captchaId) {
						this.yl3x = d4h.captchaId;
						this.gr7k.src = "/captcha?id=" + this.yl3x
					}
				}
			} else {
				m4q.message = "验证出错"
			}
		}
	};
	b4f.fv7o = function() {
		return this.dQ7J.value
	};
	b4f.Cd4h = function() {
		return this.yl3x
	};
	b4f.z5E = function(kQ9H) {
		a3x.z5E(this.dQ7J, kQ9H)
	};
	b4f.x5C = function(kQ9H) {
		a3x.x5C(this.dQ7J, kQ9H)
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
	n4r.bjv4z = NEJ.C();
	b4f = n4r.bjv4z.O5T(n4r.dU7N);
	K5P = n4r.bjv4z.cf5k;
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.dQ7J = i4m[0];
		this.eb7U = i4m[1];
		h4l.s4w(this.o4s, "click", this.bO5T.g4k(this))
	};
	b4f.bZ5e = function() {
		this.ca5f = "m-captcha-layer"
	};
	b4f.bj5o = function(e4i) {
		e4i.clazz = "m-layer-captcha";
		e4i.parent = e4i.parent || document.body;
		e4i.title = "输入验证码";
		e4i.draggable = !0;
		e4i.destroyable = true;
		e4i.mask = true;
		this.bk5p(e4i);
		this.cy5D = D5I.Re9V.B5G({
			parent: this.dQ7J,
			html: '<input class="u-txt txt f-fl j-flag"/><img class="captcha f-fl j-flag" src=""/>',
			captchaId: e4i.captchaId
		})
	};
	b4f.bC5H = function() {
		this.w5B("ondestroy");
		this.bG5L();
		if (this.cy5D) {
			this.cy5D.S5X();
			delete this.cy5D
		}
	};
	b4f.bO5T = function(d4h) {
		var f4j = h4l.U5Z(d4h, "d:action");
		switch (a3x.u5z(f4j, "action")) {
		case "ok":
			var bv5A = this.cy5D.Dt4x();
			if (!bv5A.success) {
				this.eb7U.innerHTML = '<i class="u-icn u-icn-25"></i>' + bv5A.message;
				a3x.x5C(this.eb7U, "f-hide")
			} else {
				a3x.z5E(this.eb7U, "f-hide");
				this.bp5u()
			}
			break;
		case "cc":
			this.bp5u();
			break
		}
	};
	l4p.bAn8f = function(e4i) {
		n4r.bjv4z.B5G(e4i).N5S()
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		v5A = c4g("nej.j"),
		X5c = c4g("nej.o"),
		k4o = c4g("nej.u"),
		h4l = c4g("nej.v"),
		bF5K = c4g("nej.ui"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.of0x = NEJ.C();
	b4f = n4r.of0x.O5T(n4r.dU7N, !0);
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.bkV5a = i4m[0];
		h4l.s4w(i4m[1], "click", this.bkX5c.g4k(this))
	};
	b4f.bZ5e = function() {
		this.ca5f = "m-layer-tip"
	};
	b4f.bj5o = function(e4i) {
		e4i.parent = e4i.parent || document.body;
		this.bk5p(e4i);
		this.bkV5a.innerHTML = e4i.mesg || ""
	};
	b4f.bC5H = function() {
		this.bG5L()
	};
	b4f.bkX5c = function(d4h) {
		this.w5B("onnotice");
		this.bp5u()
	};
	n4r.mm9d = function(e4i) {
		if (this.xn2x) {
			this.xn2x.S5X();
			delete this.xn2x
		}
		this.xn2x = n4r.of0x.B5G(e4i);
		this.xn2x.N5S()
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
		p4t = c4g("nm.d"),
		jH8z = c4g("nm.ctl"),
		b4f;
	if (jH8z.bkZ5e) return;
	jH8z.bkZ5e = NEJ.C();
	b4f = jH8z.bkZ5e.O5T(H5M.cz5E);
	var chX8P = location.host == "music.163.com";
	if (chX8P) {
		var bN5S = {
			host: "s2.music.126.net",
			scaptcha_server: "captcha.aq.163.com/v1_5",
			scaptcha_product_key: "nj2vr7swvutssrtbj16kzfentkikkvbf"
		}
	} else {
		var bN5S = {
			host: location.host,
			scaptcha_server: "captcha.aq.163.com/v1_5",
			scaptcha_product_key: "nj2vr7swvutssrtbj16kzfentkikkvbf"
		}
	}
	b4f.bzJ8B = function(chP7I) {
		return location.protocol + "//" + bN5S.host + chP7I
	};
	b4f.yL3x = function(J5O) {
		return NEJ.Q(bN5S, J5O)
	};
	c4g("ctl").env = jH8z.bkZ5e.gc7V()
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		M5R = c4g("nej.p"),
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		v5A = c4g("nej.j"),
		H5M = c4g("nej.ut"),
		k4o = c4g("nej.u"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		D5I = c4g("nm.w"),
		b4f;
	if (D5I.Gy5D) return;
	D5I.Gy5D = NEJ.C();
	b4f = D5I.Gy5D.O5T(H5M.cz5E);
	b4f.cl5q = function() {
		this.bzI8A = [location.protocol + "//captcha.aq.163.com/v1_5/js/c.js"];
		if (M5R.dd6X && M5R.dd6X.engine == "trident" && nej.p.dd6X.release - 5 < 0) {
			this.bzI8A.unshift(ctl.env.bzJ8B("/static/web2/3rd/scaptcha/ie6support.js"))
		}
		this.cs5x()
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.cy5D = "";
		this.fD7w = e4i.parent;
		this.bzH8z = {
			server: e4i.server,
			productKey: e4i.productKey,
			width: e4i.width,
			verifyCallback: this.oQ0x.g4k(this)
		};
		this.Wd0x(0);
		this.chF7y()
	};
	b4f.bC5H = function() {
		delete this.bll5q;
		delete this.bzH8z;
		delete this.fD7w;
		delete this.cy5D;
		this.bG5L()
	};
	b4f.chF7y = function() {
		if (this.bll5q > 0) return;
		this.Wd0x(1);
		this.bzG8y()
	};
	b4f.bzG8y = function() {
		var bzF8x = this.bzI8A.shift();
		if (!bzF8x) {
			this.Wd0x(2);
			this.fS7L()
		} else {
			v5A.coh9Y(bzF8x, {
				onloaded: this.bzG8y.g4k(this),
				onerror: this.Wd0x.g4k(this, 3)
			})
		}
	};
	b4f.Wd0x = function(bzD8v) {
		this.bll5q = bzD8v;
		this.w5B("onloadstatechange", {
			loadState: bzD8v
		})
	};
	b4f.oQ0x = function(d4h) {
		setTimeout(this.cgV7O.g4k(this, d4h), 0)
	};
	b4f.cgV7O = function(d4h) {
		if (d4h.value) {
			this.cy5D = a3x.fR7K(this.fD7w, "pwd")
		} else {
			this.cy5D = ""
		}
		this.w5B("onverify", {
			success: d4h.value
		})
	};
	b4f.fS7L = function() {
		if (this.bll5q == 2) {
			this.cy5D = "";
			if (k4o.fZ7S(window.scaptcha)) {
				window.scaptcha(this.fD7w, this.bzH8z)
			}
		}
	};
	b4f.GC5H = function() {
		return this.cy5D
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		v5A = c4g("nej.j"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		l4p = c4g("nm.x"),
		D5I = c4g("nm.w"),
		b4f, K5P;
	n4r.Bl3x = NEJ.C();
	b4f = n4r.Bl3x.O5T(n4r.dU7N);
	K5P = n4r.Bl3x.cf5k;
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.dY7R = e4i;
		this.cy5D = D5I.Gy5D.B5G({
			parent: this.ts1x,
			server: ctl.env.yL3x("scaptcha_server"),
			productKey: ctl.env.yL3x("scaptcha_product_key"),
			width: 220,
			onverify: this.oQ0x.g4k(this)
		})
	};
	b4f.bC5H = function() {
		this.bG5L();
		if (this.cy5D) {
			this.cy5D.S5X();
			delete this.cy5D
		}
	};
	b4f.bZ5e = function() {
		this.ca5f = "ntp-setnickname"
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "js-flag");
		this.eu7n = i4m.shift();
		a3x.fO7H(this.eu7n, "holder");
		h4l.s4w(this.eu7n, "focus", this.gb7U.g4k(this));
		h4l.s4w(this.eu7n, "keypress", this.KE6y.g4k(this));
		h4l.s4w(this.eu7n, "keyup", this.blz5E.g4k(this));
		this.ts1x = i4m.shift();
		this.eb7U = i4m.shift();
		this.ce5j = i4m.shift();
		h4l.s4w(this.o4s, "click", this.bO5T.g4k(this))
	};
	b4f.N5S = function() {
		K5P.N5S.apply(this, arguments);
		this.bT5Y(false);
		this.ct5y(false);
		this.eu7n.value = "";
		this.cy5D.fS7L()
	};
	b4f.gb7U = function() {
		a3x.x5C(this.eu7n, "u-txt-err")
	};
	b4f.KE6y = function(d4h) {
		if (d4h.keyCode == 13) this.yO3x()
	};
	b4f.bO5T = function(d4h) {
		var E5J = h4l.U5Z(d4h, "d:action");
		if (!E5J) return;
		var W5b = a3x.u5z(E5J, "action");
		switch (W5b) {
		case "ok":
			this.yO3x(d4h);
			break
		}
	};
	b4f.yO3x = function(d4h) {
		h4l.cg5l(d4h);
		if (this.ct5y()) return;
		if (!(this.pH0x = this.VT0x())) return;
		var ji8a = this.cy5D.GC5H();
		if (!ji8a.trim()) return this.bT5Y("请输入验证码", "captcha");
		if (this.dY7R.onok) {
			this.ct5y(true);
			this.dY7R.onok({
				nickname: this.pH0x,
				dragPwd: ji8a
			})
		}
	};
	b4f.oQ0x = function(d4h) {
		if (d4h.success) {
			this.bT5Y(false);
			if (this.eu7n.value.trim()) {
				this.yO3x()
			}
		} else {
			this.bT5Y("验证码错误", "captcha")
		}
	};
	b4f.VT0x = function() {
		var ik8c = this.eu7n.value.trim(),
			ok0x = ik8c.replace(/[^\x00-\xff]/g, "**");
		if (!ik8c) return this.bT5Y("请输入昵称", "nickname");
		if (ok0x.length < 4 || ok0x.length > 30) return this.bT5Y("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		if (!/^[\u4e00-\u9fa5A-Za-z0-9-_]*$/.test(ik8c)) return this.bT5Y("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		return ik8c
	};
	b4f.blz5E = function(d4h) {
		var ik8c = this.eu7n.value.trim(),
			ok0x = ik8c.replace(/[^\x00-\xff]/g, "**");
		if (this.blI5N == ik8c) return;
		this.blI5N = ik8c;
		if (d4h.keyCode == 13) return;
		if (/[^\u4e00-\u9fa5\w-]/.test(ik8c)) return this.bT5Y("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		if (ik8c && ok0x.length > 30) return this.bT5Y("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		this.bT5Y(false)
	};
	b4f.bT5Y = function(bD5I, hZ8R, cgN7G) {
		this.dw6q(this.eb7U, bD5I);
		a3x.x5C(this.eu7n, "u-txt-err");
		if (hZ8R == "nickname") {
			a3x.z5E(this.eu7n, "u-txt-err")
		} else if (hZ8R == "captcha") {}
		if (cgN7G) {
			this.cy5D.fS7L()
		}
	};
	b4f.ct5y = function(cG6A) {
		return this.dL6F(this.ce5j, cG6A, "开启云音乐", "设置中...")
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		l4p = c4g("nm.x"),
		b4f, K5P;
	n4r.qf0x = NEJ.C();
	b4f = n4r.qf0x.O5T(n4r.dU7N);
	K5P = n4r.qf0x.cf5k;
	b4f.bZ5e = function() {
		this.ca5f = "ntp-verifycaptcha"
	};
	b4f.bR5W = function() {
		this.cb5g();
		this.ci5n = a3x.I5N(this.o4s, "js-tip")[0];
		var kt9k = a3x.I5N(this.o4s, "js-mobwrap");
		this.bzz8r = kt9k[0];
		this.bzy8q = kt9k[1];
		this.qi0x = a3x.I5N(this.o4s, "js-mob")[0];
		this.mk9b = a3x.I5N(this.o4s, "js-code")[0];
		this.cgt7m = a3x.I5N(this.o4s, "js-lbl")[0];
		var cS6M = a3x.I5N(this.o4s, "js-txt");
		this.qj0x = cS6M[0];
		this.yW3x = cS6M[1];
		a3x.fO7H(this.qj0x, "holder");
		a3x.fO7H(this.yW3x, "holder");
		h4l.s4w(this.qj0x, "focus", this.blW5b.g4k(this));
		h4l.s4w(this.qj0x, "keypress", this.blX5c.g4k(this));
		h4l.s4w(this.qj0x, "keyup", this.blY5d.g4k(this));
		h4l.s4w(this.yW3x, "focus", this.cgq7j.g4k(this));
		h4l.s4w(this.yW3x, "keypress", this.cgl7e.g4k(this));
		this.VM0x = a3x.I5N(this.o4s, "js-cd")[0];
		this.nB0x = a3x.I5N(this.o4s, "js-send")[0];
		this.eb7U = a3x.I5N(this.o4s, "u-err")[0];
		this.GL5Q = a3x.I5N(this.o4s, "js-next")[0];
		this.GM5R = a3x.I5N(this.o4s, "js-btmbar")[0];
		this.bmh5m = a3x.I5N(this.o4s, "js-back")[0];
		this.bzv8n = a3x.I5N(this.o4s, "js-skip")[0];
		h4l.s4w(this.o4s, "click", this.bO5T.g4k(this))
	};
	b4f.bj5o = function(e4i) {
		e4i = e4i || {};
		this.bk5p(e4i);
		this.gj7c = e4i.mobile || "";
		this.fF7y = e4i.countrycode || "86";
		this.dY7R = e4i;
		this.bT5Y(false);
		this.ct5y(false);
		if (e4i.tip) {
			this.ci5n.innerHTML = e4i.tip;
			a3x.x5C(this.ci5n, "f-hide")
		} else {
			a3x.z5E(this.ci5n, "f-hide")
		}
		if (this.gj7c) {
			this.qi0x.innerText = l4p.Oc8U(this.gj7c) || "";
			this.mk9b.innerHTML = this.fF7y;
			a3x.z5E(this.bzy8q, "f-hide");
			a3x.x5C(this.bzz8r, "f-hide");
			this.GO5T()
		} else {
			this.cgt7m.innerHTML = e4i.mobileLabel || "手机号：";
			this.nB0x.innerHTML = "<i>获取验证码</i>";
			a3x.z5E(this.bzz8r, "f-hide");
			a3x.x5C(this.bzy8q, "f-hide");
			a3x.z5E(this.VM0x, "f-hide");
			a3x.x5C(this.nB0x, "f-hide")
		}
		this.qj0x.value = "";
		this.yW3x.value = "";
		e4i.okbutton = e4i.okbutton || "下一步";
		this.GL5Q.innerHTML = "<i>" + e4i.okbutton + "</i>";
		a3x.z5E(this.GM5R, "f-hide");
		a3x.z5E(this.bmh5m, "f-hide");
		a3x.z5E(this.bzv8n, "f-hide");
		if (e4i.backbutton) {
			this.bmh5m.innerHTML = e4i.backbutton || "";
			a3x.x5C(this.bmh5m, "f-hide");
			a3x.x5C(this.GM5R, "f-hide")
		}
		if (e4i.canskip) {
			a3x.x5C(this.bzv8n, "f-hide");
			a3x.x5C(this.GM5R, "f-hide")
		}
		this.R5W = p4t.mx9o.B5G({
			onsendcaptcha: this.wd2x.g4k(this),
			onsendcaptchaerror: this.Lf6Z.g4k(this),
			onverifycaptcha: this.cgd7W.g4k(this),
			onverifycaptchaerror: this.cfZ7S.g4k(this)
		})
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.R5W.S5X();
		if (this.dJ6D) this.dJ6D = clearInterval(this.dJ6D)
	};
	b4f.blW5b = function() {
		a3x.x5C(this.qj0x, "u-txt-err")
	};
	b4f.cgq7j = function() {
		a3x.x5C(this.yW3x, "u-txt-err")
	};
	b4f.blX5c = function(d4h) {
		if (d4h.keyCode == 0) {
			if (d4h.charCode < 48 || d4h.charCode > 57) h4l.cg5l(d4h)
		} else if (d4h.charCode == 0) {
			if (d4h.keyCode == 13) return this.up1x()
		} else {
			if (d4h.keyCode == 13) return this.up1x();
			if (d4h.keyCode < 48 || d4h.keyCode > 57) h4l.cg5l(d4h)
		}
	};
	b4f.blY5d = function(d4h) {
		if (/[^\d]/.test(this.qj0x.value)) this.qj0x.value = this.qj0x.value.replace(/[^\d]/g, "")
	};
	b4f.cgl7e = function(d4h) {
		if (d4h.keyCode == 13) this.up1x()
	};
	b4f.bO5T = function(d4h) {
		var E5J = h4l.U5Z(d4h, "d:action");
		if (!E5J) return;
		var W5b = a3x.u5z(E5J, "action");
		switch (W5b) {
		case "next":
			this.up1x(d4h);
			break;
		case "send":
			this.bmx5C(d4h);
			break;
		case "back":
			this.bmy5D(d4h);
			break;
		case "skip":
			this.bmA5F(d4h);
			break
		}
	};
	b4f.bmy5D = function(d4h) {
		h4l.cg5l(d4h);
		this.bp5u();
		if (this.dY7R.onback) return this.dY7R.onback()
	};
	b4f.bmA5F = function(d4h) {
		h4l.cg5l(d4h);
		this.bp5u();
		this.w5B("onskip")
	};
	b4f.bmx5C = function(d4h) {
		h4l.cg5l(d4h);
		if ( !! this.dJ6D) return;
		var eX7Q = this.GQ5V();
		if (!eX7Q) return;
		this.R5W.wD2x({
			data: {
				ctcode: this.fF7y,
				cellphone: eX7Q
			}
		})
	};
	b4f.wd2x = function(m4q) {
		this.GO5T()
	};
	b4f.Lf6Z = function(m4q) {
		this.ct5y(false);
		this.bT5Y("验证码发送失败")
	};
	b4f.up1x = function(d4h) {
		h4l.cg5l(d4h);
		if (this.ct5y()) return;
		var hu8m = this.qp0x();
		if (!hu8m) return;
		this.ct5y(true);
		if (this.dY7R.onverify) {
			this.dY7R.onverify({
				cellphone: hu8m.mobile,
				captcha: hu8m.captcha,
				countrycode: this.fF7y
			})
		} else {
			this.R5W.cme9V({
				data: {
					cellphone: hu8m.mobile,
					captcha: hu8m.captcha,
					ctcode: this.fF7y
				}
			})
		}
	};
	b4f.cgd7W = function(m4q) {
		this.w5B("onok", NEJ.X(m4q, {
			countrycode: this.fF7y
		}))
	};
	b4f.cfZ7S = function(m4q) {
		this.ct5y(false);
		if (m4q.code == 503) {
			this.bT5Y("验证码错误", "captcha")
		} else if (this.dY7R.onerror) {
			this.w5B("onerror", m4q)
		}
	};
	b4f.GQ5V = function() {
		var eX7Q = this.gj7c || this.qj0x.value.trim();
		if (!eX7Q) return this.bT5Y("请输入手机号", "mobile");
		if (!l4p.vG2x(eX7Q, this.fF7y)) return this.bT5Y("请输入正确的手机号", "mobile");
		return eX7Q
	};
	b4f.qp0x = function() {
		var eX7Q = this.gj7c || this.qj0x.value.trim(),
			ji8a = this.yW3x.value.trim();
		if (!eX7Q) return this.bT5Y("请输入手机号", "mobile");
		if (!ji8a) return this.bT5Y("请输入验证码", "captcha");
		if (!l4p.vG2x(eX7Q, this.fF7y)) return this.bT5Y("请输入正确的手机号", "mobile");
		this.bT5Y(false);
		return {
			mobile: eX7Q,
			captcha: ji8a,
			countrycode: this.fF7y
		}
	};
	b4f.GO5T = function() {
		var by5D;
		var bzu8m = function() {
				by5D--;
				this.VM0x.innerText = " 00:" + (by5D >= 10 ? by5D : "0" + by5D) + " ";
				if (by5D == 0) {
					this.dJ6D = clearInterval(this.dJ6D);
					this.nB0x.innerHTML = "<i>重新发送</i>";
					a3x.z5E(this.VM0x, "f-hide");
					a3x.x5C(this.nB0x, "f-hide")
				}
			};
		return function() {
			by5D = 60;
			this.dJ6D = clearInterval(this.dJ6D);
			this.dJ6D = setInterval(bzu8m.g4k(this), 1e3);
			bzu8m.call(this);
			a3x.z5E(this.nB0x, "f-hide");
			a3x.x5C(this.VM0x, "f-hide")
		}
	}();
	b4f.bT5Y = function(bD5I, hZ8R) {
		this.dw6q(this.eb7U, bD5I);
		a3x.x5C(this.qj0x, "u-txt-err");
		a3x.x5C(this.yW3x, "u-txt-err");
		if (hZ8R == "mobile") {
			a3x.z5E(this.qj0x, "u-txt-err")
		} else if (hZ8R == "captcha") {
			a3x.z5E(this.yW3x, "u-txt-err")
		}
	};
	b4f.ct5y = function(cG6A) {
		return this.dL6F(this.GL5Q, cG6A, this.dY7R.okbutton, "验证中...")
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		ch5m = c4g("nej.ut"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.Eo4s = NEJ.C();
	b4f = n4r.Eo4s.O5T(ch5m.cz5E);
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.dY7R = e4i;
		this.qt0x = e4i.user;
		this.R5W = p4t.mx9o.B5G();
		this.R5W.s4w("onmobilebind", this.bmK5P.g4k(this));
		this.R5W.s4w("onmobilebinderror", this.bmN5S.g4k(this));
		this.R5W.s4w("onactive", this.Ln6h.g4k(this));
		this.R5W.s4w("onactiveerror", this.bmS5X.g4k(this));
		if (e4i.requiremobile && !this.cfW7P(this.qt0x)) {
			this.ew7p = n4r.qf0x.N5S({
				title: "绑定手机号",
				onok: this.bmY5d.g4k(this),
				canskip: true,
				onskip: this.VE0x.g4k(this)
			})
		} else {
			this.VE0x()
		}
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.R5W.S5X();
		if (this.ew7p) this.ew7p.S5X();
		if (this.mB9s) this.mB9s.S5X()
	};
	b4f.bmY5d = function(bm5r) {
		this.gj7c = bm5r.mobile;
		this.VC0x = bm5r.captcha;
		this.R5W.bjf4j({
			data: {
				phone: this.gj7c,
				captcha: this.VC0x
			}
		})
	};
	b4f.VE0x = function() {
		if (this.mB9s) this.mB9s.S5X();
		this.mB9s = n4r.Bl3x.N5S({
			title: "设置昵称",
			onok: this.cfP7I.g4k(this)
		})
	};
	b4f.bmK5P = function() {
		this.ew7p.bp5u();
		this.VE0x()
	};
	b4f.bmN5S = function(bm5r) {
		if (bm5r.code == 506) {
			this.ew7p.ct5y(false);
			this.ew7p.bT5Y(bm5r.message, "mobile")
		} else {
			this.ew7p.bp5u();
			this.VE0x()
		}
	};
	b4f.cfP7I = function(bm5r) {
		this.R5W.bjb4f({
			data: {
				nickname: bm5r.nickname,
				dragPwd: bm5r.dragPwd
			}
		})
	};
	b4f.Ln6h = function(bm5r) {
		this.mB9s.bp5u();
		this.qt0x.profile = bm5r.profile;
		h4l.w5B(window, "login", {
			user: this.qt0x
		})
	};
	b4f.bmS5X = function(bm5r) {
		this.mB9s.ct5y(false);
		if (bm5r.code == 505) return this.mB9s.bT5Y("该昵称已被占用", "nickname", true);
		if (bm5r.code == 407) return this.mB9s.bT5Y("该昵称包含关键词", "nickname", true);
		n4r.Z5e.N5S({
			tip: bm5r.message || "登录失败，请重试",
			type: 2
		});
		this.mB9s.bp5u()
	};
	b4f.cfW7P = function(cX6R) {
		var rC1x = cX6R.bindings || [];
		return k4o.cT6N(rC1x, function(q4u) {
			return q4u.type == 1
		}) >= 0
	}
})();
(function() {
	var c4g = NEJ.P,
		l4p = c4g("nm.x");
	var VB0x = [
		["China", "中国", "CN", 86],
		["Hongkong", "中国香港", "HK", 852],
		["Macao", "中国澳门", "MO", 853],
		["Taiwan", "中国台湾", "TW", 886],
		["Japan", "日本", "JP", 81],
		["Korea", "韩国", "KR", 82],
		["United Kingdom", "英国", "GB", 44],
		["United States of America", "美国", "US", 1],
		["Canada", "加拿大", "CA", 1],
		["France", "法国", "FR", 33],
		["Finland", "芬兰", "FI", 358],
		["Germany", "德国", "DE", 49],
		["Netherlands", "荷兰", "NL", 31],
		["Italy", "意大利", "IT", 39],
		["India", "印度", "IN", 91],
		["Thailand", "泰国", "TH", 66],
		["NewZealand", "新西兰", "NZ", 64],
		["Portugal", "葡萄牙", "PT", 351],
		["Russia", "俄罗斯", "RU", 7],
		["Singapore", "新加坡", "SG", 65],
		["Malaysia", "马来西亚", "MY", 60],
		["Spain", "西班牙", "ES", 34],
		["South Africa", "南非", "ZA", 27],
		["Sweden", "瑞典", "SE", 46],
		["Angola", "安哥拉", "AO", 244],
		["Afghanistan", "阿富汗", "AF", 93],
		["Albania", "阿尔巴尼亚", "AL", 355],
		["Algeria", "阿尔及利亚", "DZ", 213],
		["Andorra", "安道尔共和国", "AD", 376],
		["Anguilla", "安圭拉岛", "AI", 1264],
		["Antigua and Barbuda", "安提瓜和巴布达", "AG", 1268],
		["Argentina", "阿根廷", "AR", 54],
		["Armenia", "亚美尼亚", "AM", 374],
		["Ascension", "阿森松", "AC", 247],
		["Australia", "澳大利亚", "AU", 61],
		["Austria", "奥地利", "AT", 43],
		["Azerbaijan", "阿塞拜疆", "AZ", 994],
		["Bahamas", "巴哈马", "BS", 1242],
		["Bahrain", "巴林", "BH", 973],
		["Bangladesh", "孟加拉国", "BD", 880],
		["Barbados", "巴巴多斯", "BB", 1246],
		["Belarus", "白俄罗斯", "BY", 375],
		["Belgium", "比利时", "BE", 32],
		["Belize", "伯利兹", "BZ", 501],
		["Benin", "贝宁", "BJ", 229],
		["BermudaIs.", "百慕大群岛", "BM", 1441],
		["Bolivia", "玻利维亚", "BO", 591],
		["Botswana", "博茨瓦纳", "BW", 267],
		["Brazil", "巴西", "BR", 55],
		["Brunei", "文莱", "BN", 673],
		["Bulgaria", "保加利亚", "BG", 359],
		["Burkina-faso", "布基纳法索", "BF", 226],
		["Burma", "缅甸", "MM", 95],
		["Burundi", "布隆迪", "BI", 257],
		["Cameroon", "喀麦隆", "CM", 237],
		["Cayman Is.", "开曼群岛", "KY", 1345],
		["Central African Republic", "中非共和国", "CF", 236],
		["Chad", "乍得", "TD", 235],
		["Chile", "智利", "CL", 56],
		["Colombia", "哥伦比亚", "CO", 57],
		["Congo", "刚果", "CG", 242],
		["Cook Is.", "库克群岛", "CK", 682],
		["Costa Rica", "哥斯达黎加", "CR", 506],
		["Cuba", "古巴", "CU", 53],
		["Cyprus", "塞浦路斯", "CY", 357],
		["Czech Republic", "捷克", "CZ", 420],
		["Denmark", "丹麦", "DK", 45],
		["Djibouti", "吉布提", "DJ", 253],
		["Dominica Rep.", "多米尼加共和国", "DO", 1890],
		["Ecuador", "厄瓜多尔", "EC", 593],
		["Egypt", "埃及", "EG", 20],
		["EISalvador", "萨尔瓦多", "SV", 503],
		["Estonia", "爱沙尼亚", "EE", 372],
		["Ethiopia", "埃塞俄比亚", "ET", 251],
		["Fiji", "斐济", "FJ", 679],
		["French Guiana", "法属圭亚那", "GF", 594],
		["Gabon", "加蓬", "GA", 241],
		["Gambia", "冈比亚", "GM", 220],
		["Georgia", "格鲁吉亚", "GE", 995],
		["Ghana", "加纳", "GH", 233],
		["Gibraltar", "直布罗陀", "GI", 350],
		["Greece", "希腊", "GR", 30],
		["Grenada", "格林纳达", "GD", 1473],
		["Guam", "关岛", "GU", 1671],
		["Guatemala", "危地马拉", "GT", 502],
		["Guinea", "几内亚", "GN", 224],
		["Guyana", "圭亚那", "GY", 592],
		["Haiti", "海地", "HT", 509],
		["Honduras", "洪都拉斯", "HN", 504],
		["Hungary", "匈牙利", "HU", 36],
		["Iceland", "冰岛", "IS", 354],
		["Indonesia", "印度尼西亚", "ID", 62],
		["Iran", "伊朗", "IR", 98],
		["Iraq", "伊拉克", "IQ", 964],
		["Ireland", "爱尔兰", "IE", 353],
		["Israel", "以色列", "IL", 972],
		["IvoryCoast", "科特迪瓦", "CI", 225],
		["Jamaica", "牙买加", "JM", 1876],
		["Jordan", "约旦", "JO", 962],
		["Kampuchea (Cambodia )", "柬埔寨", "KH", 855],
		["Kazakstan", "哈萨克斯坦", "KZ", 7],
		["Kenya", "肯尼亚", "KE", 254],
		["Kuwait", "科威特", "KW", 965],
		["Kyrgyzstan", "吉尔吉斯坦", "KG", 996],
		["Laos", "老挝", "LA", 856],
		["Latvia", "拉脱维亚", "LV", 371],
		["Lebanon", "黎巴嫩", "LB", 961],
		["Lesotho", "莱索托", "LS", 266],
		["Liberia", "利比里亚", "LR", 231],
		["Libya", "利比亚", "LY", 218],
		["Liechtenstein", "列支敦士登", "LI", 423],
		["Lithuania", "立陶宛", "LT", 370],
		["Luxembourg", "卢森堡", "LU", 352],
		["Madagascar", "马达加斯加", "MG", 261],
		["Malawi", "马拉维", "MW", 265],
		["Maldives", "马尔代夫", "MV", 960],
		["Mali", "马里", "ML", 223],
		["Malta", "马耳他", "MT", 356],
		["Mariana Is", "马里亚那群岛", "MP", 1670],
		["Martinique", "马提尼克", "MQ", 596],
		["Mauritius", "毛里求斯", "MU", 230],
		["Mexico", "墨西哥", "MX", 52],
		["Republic of Moldova", "摩尔多瓦", "MD", 373],
		["Monaco", "摩纳哥", "MC", 377],
		["Mongolia", "蒙古", "MN", 976],
		["Montserrat Is", "蒙特塞拉特岛", "MS", 1664],
		["Morocco", "摩洛哥", "MA", 212],
		["Mozambique", "莫桑比克", "MZ", 258],
		["Namibia", "纳米比亚", "NA", 264],
		["Nauru", "瑙鲁", "NR", 674],
		["Nepal", "尼泊尔", "NP", 977],
		["Netheriands Antilles", "荷属安的列斯", "AN", 599],
		["Nicaragua", "尼加拉瓜", "NI", 505],
		["Niger", "尼日尔", "NE", 227],
		["Nigeria", "尼日利亚", "NG", 234],
		["North Korea", "朝鲜", "KP", 850],
		["Norway", "挪威", "NO", 47],
		["Oman", "阿曼", "OM", 968],
		["Pakistan", "巴基斯坦", "PK", 92],
		["Panama", "巴拿马", "PA", 507],
		["Papua New Cuinea", "巴布亚新几内亚", "PG", 675],
		["Paraguay", "巴拉圭", "PY", 595],
		["Peru", "秘鲁", "PE", 51],
		["Philippines", "菲律宾", "PH", 63],
		["Poland", "波兰", "PL", 48],
		["French Polynesia", "法属玻利尼西亚", "PF", 689],
		["PuertoRico", "波多黎各", "PR", 1787],
		["Qatar", "卡塔尔", "QA", 974],
		["Reunion", "留尼旺", "RE", 262],
		["Romania", "罗马尼亚", "RO", 40],
		["Saint Lueia", "圣卢西亚", "LC", 1758],
		["Saint Vincent", "圣文森特岛", "VC", 1784],
		["Samoa Eastern", "东萨摩亚(美)", "AS", 684],
		["Samoa Western", "西萨摩亚", "WS", 685],
		["San Marino", "圣马力诺", "SM", 378],
		["Sao Tome and Principe", "圣多美和普林西比", "ST", 239],
		["Saudi Arabia", "沙特阿拉伯", "SA", 966],
		["Senegal", "塞内加尔", "SN", 221],
		["Seychelles", "塞舌尔", "SC", 248],
		["Sierra Leone", "塞拉利昂", "SL", 232],
		["Slovakia", "斯洛伐克", "SK", 421],
		["Slovenia", "斯洛文尼亚", "SI", 386],
		["Solomon Is", "所罗门群岛", "SB", 677],
		["Somali", "索马里", "SO", 252],
		["Sri Lanka", "斯里兰卡", "LK", 94],
		["St.Lucia", "圣卢西亚", "LC", 1758],
		["St.Vincent", "圣文森特", "VC", 1784],
		["Sudan", "苏丹", "SD", 249],
		["Suriname", "苏里南", "SR", 597],
		["Swaziland", "斯威士兰", "SZ", 268],
		["Switzerland", "瑞士", "CH", 41],
		["Syria", "叙利亚", "SY", 963],
		["Tajikstan", "塔吉克斯坦", "TJ", 992],
		["Tanzania", "坦桑尼亚", "TZ", 255],
		["Togo", "多哥", "TG", 228],
		["Tonga", "汤加", "TO", 676],
		["Trinidad and Tobago", "特立尼达和多巴哥", "TT", 1868],
		["Tunisia", "突尼斯", "TN", 216],
		["Turkey", "土耳其", "TR", 90],
		["Turkmenistan", "土库曼斯坦", "TM", 993],
		["Uganda", "乌干达", "UG", 256],
		["Ukraine", "乌克兰", "UA", 380],
		["United Arab Emirates", "阿拉伯联合酋长国", "AE", 971],
		["Uruguay", "乌拉圭", "UY", 598],
		["Uzbekistan", "乌兹别克斯坦", "UZ", 998],
		["Venezuela", "委内瑞拉", "VE", 58],
		["Vietnam", "越南", "VN", 84],
		["Yemen", "也门", "YE", 967],
		["Yugoslavia", "南斯拉夫", "YU", 381],
		["Zimbabwe", "津巴布韦", "ZW", 263],
		["Zaire", "扎伊尔", "ZR", 243],
		["Zambia", "赞比亚", "ZM", 260]
	];
	l4p.bng5l = function() {
		return VB0x
	};
	l4p.bzs8k = function(jb8T, kx9o) {
		if (!jb8T || !kx9o) return false;
		if (typeof jb8T == "object" && typeof kx9o == "object") return jb8T[2] == kx9o[2];
		if (typeof jb8T == "object") return jb8T[2] == kx9o;
		if (typeof kx9o == "object") return jb8T == kx9o[2];
		return jb8T == kx9o
	};
	l4p.cxl1x = function(jb8T, kx9o) {
		if (!jb8T || !kx9o) return false;
		if (typeof jb8T == "object" && typeof kx9o == "object") return jb8T[3] == kx9o[3];
		if (typeof jb8T == "object") return jb8T[3] == kx9o;
		if (typeof kx9o == "object") return jb8T == kx9o[3];
		return jb8T == kx9o
	};
	l4p.cfx7q = function(q4u) {
		return q4u[1] + " +" + q4u[3]
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
		F5K = c4g("nm.m"),
		n4r = c4g("nm.l"),
		D5I = c4g("nm.w"),
		b4f, K5P;
	D5I.bno5t = NEJ.C();
	b4f = D5I.bno5t.O5T(bF5K.er7k);
	var VB0x = l4p.bng5l();
	b4f.bZ5e = function() {
		this.ca5f = "wgt-phone-input"
	};
	b4f.bR5W = function() {
		this.cb5g();
		this.mk9b = a3x.fj7c(this.o4s, "j-code");
		this.lO9F = a3x.fj7c(this.o4s, "j-phone");
		this.bK5P = a3x.fj7c(this.o4s, "j-list");
		a3x.dK6E(this.bK5P, "wgt-countrycode-item", {
			countries: VB0x
		})
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.bnu5z(e4i.countrycode);
		this.bnw5B(e4i.phone);
		a3x.fO7H(this.lO9F, "holder");
		this.bS5X([
			[this.lO9F, "focus", this.blW5b.g4k(this)],
			[this.lO9F, "keypress", this.blX5c.g4k(this)],
			[this.lO9F, "keyup", this.blY5d.g4k(this)],
			[this.o4s, "click", this.cD6x.g4k(this)],
			[document.body, "click", this.lU9L.g4k(this)]
		])
	};
	b4f.bnw5B = function(hO8G) {
		this.lO9F.value = hO8G || ""
	};
	b4f.Vu0x = function() {
		return this.lO9F.value.trim()
	};
	b4f.bnu5z = function(oE0x) {
		this.fF7y = oE0x || "86";
		this.mk9b.innerHTML = "+" + this.fF7y
	};
	b4f.bnB5G = function() {
		return this.fF7y
	};
	b4f.Iw6q = function() {
		this.bnu5z("");
		this.bnw5B("")
	};
	b4f.bzr8j = function() {
		a3x.z5E(this.o4s, "z-err")
	};
	b4f.bnD5I = function() {
		a3x.x5C(this.o4s, "z-err")
	};
	b4f.blW5b = function() {
		this.bnD5I();
		this.hM8E()
	};
	b4f.blX5c = function(d4h) {
		if (d4h.keyCode == 0) {
			if (d4h.charCode < 48 || d4h.charCode > 57) h4l.cg5l(d4h)
		} else if (d4h.charCode == 0) {
			if (d4h.keyCode == 13) return this.w5B("onpressenter")
		} else {
			if (d4h.keyCode == 13) return this.w5B("onpressenter");
			if (d4h.keyCode < 48 || d4h.keyCode > 57) h4l.cg5l(d4h)
		}
	};
	b4f.blY5d = function(d4h) {
		var hO8G = this.Vu0x();
		if (/[^\d]/.test(hO8G)) this.bnw5B(hO8G.replace(/[^\d]/g, ""))
	};
	b4f.cD6x = function(d4h) {
		var f4j = h4l.U5Z(d4h, "d:action");
		if (!f4j) return;
		var W5b = a3x.u5z(f4j, "action");
		switch (W5b) {
		case "toggle":
			this.qA0x();
			break;
		case "select":
			this.gg7Z(f4j);
			h4l.bh5m(d4h);
			break
		}
	};
	b4f.lU9L = function(d4h) {
		var cF6z = d4h.target || d4h.srcElement;
		if (!l4p.Ik5p(this.o4s, cF6z)) {
			this.hM8E()
		}
	};
	b4f.qA0x = function(d4h) {
		if (a3x.bA5F(this.bK5P, "f-hide")) {
			this.Dp4t()
		} else {
			this.hM8E()
		}
	};
	b4f.Dp4t = function() {
		a3x.z5E(this.o4s, "z-show");
		a3x.x5C(this.bK5P, "f-hide")
	};
	b4f.hM8E = function() {
		a3x.x5C(this.o4s, "z-show");
		a3x.z5E(this.bK5P, "f-hide")
	};
	b4f.gg7Z = function(f4j) {
		var r4v = a3x.u5z(f4j, "index"),
			q4u = null;
		if (r4v >= 0) {
			q4u = VB0x[r4v];
			this.bnu5z(q4u[3]);
			this.hM8E()
		}
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		D5I = c4g("nm.w"),
		b4f, K5P;
	n4r.LH6B = NEJ.C();
	b4f = n4r.LH6B.O5T(n4r.dU7N);
	K5P = n4r.LH6B.cf5k;
	b4f.bZ5e = function() {
		this.ca5f = "ntp-reg-mobile"
	};
	b4f.bR5W = function() {
		this.cb5g();
		this.qi0x = a3x.I5N(this.o4s, "j-mob")[0];
		this.ee7X = a3x.I5N(this.o4s, "j-pwd")[0];
		this.eb7U = a3x.I5N(this.o4s, "j-err")[0];
		this.ce5j = a3x.I5N(this.o4s, "j-btn")[0];
		a3x.fO7H(this.ee7X, "holder");
		h4l.s4w(this.ee7X, "focus", this.wY2x.g4k(this));
		h4l.s4w(this.ee7X, "keypress", this.wU2x.g4k(this));
		h4l.s4w(this.o4s, "click", this.bO5T.g4k(this))
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.mM9D = D5I.bno5t.B5G({
			parent: this.qi0x,
			phone: e4i.mobile,
			countrycode: e4i.countrycode,
			onpressenter: this.bnP5U.g4k(this)
		});
		this.bT5Y(false);
		this.ct5y(false);
		this.ee7X.value = ""
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.mM9D.S5X()
	};
	b4f.wY2x = function() {
		a3x.x5C(this.ee7X, "u-txt-err")
	};
	b4f.wU2x = function(d4h) {
		if (d4h.keyCode == 13) this.bnP5U()
	};
	b4f.bO5T = function(d4h) {
		var E5J = h4l.U5Z(d4h, "d:action");
		if (!E5J) return;
		var W5b = a3x.u5z(E5J, "action");
		switch (W5b) {
		case "ok":
			this.bnP5U(d4h);
			break;
		case "back":
			this.bmy5D(d4h);
			break
		}
	};
	b4f.bmy5D = function(d4h) {
		h4l.cg5l(d4h);
		this.bp5u();
		n4r.oc0x.N5S({
			title: "登录"
		})
	};
	b4f.bnP5U = function(d4h) {
		h4l.cg5l(d4h);
		var hu8m = this.qp0x();
		if (!hu8m) return;
		this.ct5y(true);
		this.w5B("onok", {
			mobile: hu8m.mobile,
			countrycode: hu8m.countrycode,
			password: hu8m.password
		})
	};
	b4f.qp0x = function() {
		var eX7Q = this.mM9D.Vu0x(),
			oE0x = this.mM9D.bnB5G(),
			gt7m = this.ee7X.value;
		if (!eX7Q) return this.bT5Y("请输入手机号", "mobile");
		if (!gt7m) return this.bT5Y("请输入登录密码", "password");
		if (!l4p.vG2x(eX7Q, oE0x)) return this.bT5Y("请输入正确的手机号", "mobile");
		if (gt7m.length < 6 || gt7m.length > 16) return this.bT5Y("请输入6-16位的密码", "password");
		return {
			mobile: eX7Q,
			password: gt7m,
			countrycode: oE0x
		}
	};
	b4f.bT5Y = function(bD5I, hZ8R) {
		this.dw6q(this.eb7U, bD5I);
		this.mM9D.bnD5I();
		a3x.x5C(this.ee7X, "u-txt-err");
		if (hZ8R == "mobile") {
			this.mM9D.bzr8j()
		} else if (hZ8R == "password") {
			a3x.z5E(this.ee7X, "u-txt-err")
		}
	};
	b4f.ct5y = function(cG6A) {
		return this.dL6F(this.ce5j, cG6A, "下一步", "发送中...")
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		D5I = c4g("nm.w"),
		b4f, K5P;
	n4r.Vk0x = NEJ.C();
	b4f = n4r.Vk0x.O5T(n4r.dU7N);
	K5P = n4r.Vk0x.cf5k;
	b4f.bZ5e = function() {
		this.ca5f = "ntp-reg-setting"
	};
	b4f.bR5W = function() {
		this.cb5g();
		this.ci5n = a3x.I5N(this.o4s, "js-tip")[0];
		this.hx8p = a3x.I5N(this.o4s, "js-input")[0];
		a3x.fO7H(this.hx8p, "holder");
		h4l.s4w(this.hx8p, "focus", this.cfu7n.g4k(this));
		h4l.s4w(this.hx8p, "keypress", this.cfp7i.g4k(this));
		h4l.s4w(this.hx8p, "keyup", this.blz5E.g4k(this));
		this.eb7U = a3x.I5N(this.o4s, "u-err")[0];
		this.ce5j = a3x.I5N(this.o4s, "js-primary")[0];
		h4l.s4w(this.o4s, "click", this.bO5T.g4k(this))
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.gj7c = e4i.mobile || "";
		this.fF7y = e4i.countrycode || "86";
		this.qI0x = e4i.password || "";
		this.cfo7h = e4i.captcha || "";
		if (e4i.tip) {
			this.ci5n.innerHTML = e4i.tip
		}
		this.bT5Y(false);
		this.ct5y(false);
		this.hx8p.value = "";
		this.R5W = p4t.mx9o.B5G({
			onmobileregist: this.LR7K.g4k(this),
			onmobileregisterror: this.hU8M.g4k(this)
		})
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.R5W.S5X();
		if (this.cy5D) {
			this.cy5D.S5X();
			delete this.cy5D
		}
	};
	b4f.bO5T = function(d4h) {
		var E5J = h4l.U5Z(d4h, "d:action");
		if (!E5J) return;
		var W5b = a3x.u5z(E5J, "action");
		switch (W5b) {
		case "ok":
			this.LS7L(d4h);
			break
		}
	};
	b4f.cfu7n = function() {
		a3x.x5C(this.hx8p, "u-txt-err")
	};
	b4f.cfp7i = function(d4h) {
		if (d4h.keyCode == 13) this.LS7L()
	};
	b4f.LS7L = function(d4h) {
		h4l.cg5l(d4h);
		if (this.ct5y()) return;
		var hu8m = this.qp0x();
		if (!hu8m) return;
		var j4n = {
			phone: this.gj7c,
			countrycode: this.fF7y,
			password: k4o.le9V(this.qI0x),
			nickname: hu8m.nickname,
			captcha: this.cfo7h
		};
		this.ct5y(true);
		this.R5W.Xw1x({
			data: j4n
		})
	};
	b4f.LR7K = function(m4q) {
		this.ct5y(false);
		this.bp5u();
		localCache.on0x("user", m4q);
		h4l.w5B(window, "login", {
			user: m4q
		})
	};
	b4f.hU8M = function(bm5r) {
		this.ct5y(false);
		if (bm5r.code == 415) {
			if (this.cy5D) {
				this.cy5D.S5X();
				this.bT5Y("注册过于频繁", "captcha")
			}
			this.cy5D = D5I.Re9V.B5G({
				captchaId: bm5r.captchaId,
				txt: "txt-login-captcha",
				onaction: this.LS7L.g4k(this)
			});
			this.eb7U.insertAdjacentElement("beforeBegin", this.cy5D.kI9z());
			return
		}
		if (bm5r.code == 505) return this.bT5Y("该昵称已被占用", "nickname");
		if (bm5r.code == 407) return this.bT5Y("该昵称包含关键词", "nickname");
		if (bm5r.message) {
			this.bT5Y(bm5r.message)
		} else {
			n4r.Z5e.N5S({
				tip: "注册失败，请重试",
				type: 2
			})
		}
	};
	b4f.qp0x = function() {
		var ik8c = this.hx8p.value.trim(),
			ok0x = ik8c.replace(/[^\x00-\xff]/g, "**"),
			ji8a = "";
		if (!ik8c) return this.bT5Y("请输入昵称", "nickname");
		if (this.cy5D) {
			ji8a = this.cy5D.fv7o();
			if (!ji8a) return this.bT5Y("请输入验证码", "captcha");
			var bv5A = this.cy5D.Dt4x();
			if (!bv5A.success) {
				return this.bT5Y(bv5A.message, "captcha")
			}
		}
		if (ok0x.length < 4 || ok0x.length > 30) return this.bT5Y("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		if (!/^[\u4e00-\u9fa5A-Za-z0-9-_]*$/.test(ik8c)) return this.bT5Y("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		return {
			nickname: ik8c,
			captcha: ji8a
		}
	};
	b4f.blz5E = function(d4h) {
		var ik8c = this.hx8p.value.trim(),
			ok0x = ik8c.replace(/[^\x00-\xff]/g, "**");
		if (this.blI5N == ik8c) return;
		this.blI5N = ik8c;
		if (d4h.keyCode == 13) return;
		if (/[^\u4e00-\u9fa5\w-]/.test(ik8c)) return this.bT5Y("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		if (ik8c && ok0x.length > 30) return this.bT5Y("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		this.bT5Y(false)
	};
	b4f.bT5Y = function(bD5I, hZ8R) {
		this.dw6q(this.eb7U, bD5I);
		a3x.x5C(this.hx8p, "u-txt-err");
		if (this.cy5D) this.cy5D.x5C("u-txt-err");
		if (hZ8R == "nickname") {
			a3x.z5E(this.hx8p, "u-txt-err")
		} else if (hZ8R == "captcha") {
			if (this.cy5D) this.cy5D.z5E("u-txt-err")
		}
	};
	b4f.ct5y = function(cG6A) {
		return this.dL6F(this.ce5j, cG6A, "开启云音乐", "设置中...")
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		ch5m = c4g("nej.ut"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	var MOB_CHECK = {
		MAIN: 1,
		SNS: 2,
		NETEASE: 3,
		NULL: -1
	};
	n4r.Vc0x = NEJ.C();
	b4f = n4r.Vc0x.O5T(ch5m.cz5E);
	b4f.bj5o = function(e4i) {
		e4i = e4i || {};
		this.bk5p(e4i);
		this.R5W = p4t.mx9o.B5G({
			onsendcaptcha: this.wd2x.g4k(this),
			onsendcaptchaerror: this.Vb0x.g4k(this),
			onsendcaptchaerror: this.Vb0x.g4k(this),
			onmobilecheck: this.LV7O.g4k(this),
			onmobilecheckerror: this.LW7P.g4k(this),
			onmobileregist: this.LR7K.g4k(this),
			onmobileregisterror: this.Va0x.g4k(this)
		});
		this.wu2x = n4r.LH6B.N5S({
			title: "手机号注册",
			onok: this.boj6d.g4k(this)
		})
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.R5W.S5X();
		if (this.wu2x) this.wu2x.S5X();
		if (this.ew7p) this.ew7p.S5X()
	};
	b4f.boj6d = function(bm5r) {
		this.gj7c = bm5r.mobile;
		this.fF7y = bm5r.countrycode;
		this.qI0x = bm5r.password;
		this.R5W.wD2x({
			data: {
				ctcode: this.fF7y,
				cellphone: bm5r.mobile
			}
		})
	};
	b4f.wd2x = function() {
		this.wu2x.bp5u();
		this.ew7p = n4r.qf0x.N5S({
			title: "手机号注册",
			mobile: this.gj7c,
			countrycode: this.fF7y,
			okbutton: "下一步",
			onok: this.bok6e.g4k(this),
			backbutton: "&lt;&nbsp;&nbsp;返回登录",
			onback: this.bol6f.g4k(this)
		})
	};
	b4f.Vb0x = function(bm5r) {
		this.wu2x.ct5y(false);
		n4r.Z5e.N5S({
			tip: bm5r.message || "验证码发送失败",
			type: 2
		})
	};
	b4f.bok6e = function(bm5r) {
		this.gj7c = bm5r.mobile;
		this.fF7y = bm5r.countrycode;
		this.cy5D = bm5r.captcha;
		this.R5W.biW4a({
			data: {
				cellphone: bm5r.mobile,
				captcha: bm5r.captcha,
				countrycode: bm5r.countrycode
			}
		})
	};
	b4f.LV7O = function(bm5r) {
		this.ew7p.bp5u();
		switch (bm5r.exist) {
		case MOB_CHECK.NULL:
			n4r.Vk0x.N5S({
				title: "手机号注册",
				mobile: this.gj7c,
				countrycode: this.fF7y,
				password: this.qI0x,
				captcha: this.cy5D
			});
			break;
		case MOB_CHECK.MAIN:
		case MOB_CHECK.SNS:
		case MOB_CHECK.NETEASE:
			this.Ce4i(this.gj7c, this.qI0x, this.cy5D, this.fF7y);
			break
		}
	};
	b4f.LW7P = function(bm5r) {
		n4r.Z5e.N5S({
			tip: bm5r.message || "验证码发送失败",
			type: 2
		})
	};
	b4f.LR7K = function(bm5r) {
		localCache.on0x("user", bm5r);
		if (!bm5r.profile) {
			if (this.mE9v) this.mE9v.S5X();
			this.mE9v = n4r.Eo4s.B5G({
				user: bm5r,
				requiremobile: false,
				onsuccess: this.ws2x.g4k(this)
			})
		} else {
			l4p.eU7N({
				clazz: "m-layer-w2",
				title: "手机号注册",
				message: '该手机号已与云音乐帐号 <strong class="s-fc1">' + k4o.dS7L(bm5r.profile.nickname) + "</strong> 绑定，<br/><br/>以后你可以直接用该手机号+密码登录",
				btntxt: "知道了",
				action: h4l.w5B.g4k(h4l, window, "login", {
					user: bm5r
				}),
				onclose: h4l.w5B.g4k(h4l, window, "login", {
					user: bm5r
				})
			})
		}
	};
	b4f.ws2x = function(d4h) {
		h4l.w5B(window, "login", {
			user: d4h.user
		})
	};
	b4f.Va0x = function(bm5r) {
		if (bm5r.code == 415) {
			l4p.bAn8f({
				captchaId: bm5r.captchaId,
				ondestroy: this.Ce4i.g4k(this, this.gj7c, this.qI0x, this.cy5D)
			})
		} else {
			n4r.Z5e.N5S({
				tip: bm5r.message || "注册失败，请重试",
				type: 2
			})
		}
	};
	b4f.bol6f = function() {
		this.ew7p.bp5u();
		n4r.oc0x.N5S({
			title: "登录"
		})
	};
	b4f.Ce4i = function(eX7Q, gt7m, ji8a, oE0x) {
		this.R5W.Xw1x({
			data: {
				phone: eX7Q,
				countrycode: oE0x,
				password: k4o.le9V(gt7m),
				captcha: ji8a
			}
		})
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		ch5m = c4g("nej.ut"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	var MOB_CHECK = {
		MAIN: 1,
		SNS: 2,
		NETEASE: 3,
		NULL: -1
	};
	n4r.bzm8e = NEJ.C();
	b4f = n4r.bzm8e.O5T(ch5m.cz5E);
	b4f.bj5o = function(e4i) {
		e4i = e4i || {};
		this.bk5p(e4i);
		this.R5W = p4t.mx9o.B5G({
			onsendcaptcha: this.wd2x.g4k(this),
			onsendcaptchaerror: this.Vb0x.g4k(this),
			onmobilecheck: this.LV7O.g4k(this),
			onmobilecheckerror: this.LW7P.g4k(this),
			onmobileregist: this.LR7K.g4k(this),
			onmobileregisterror: this.Va0x.g4k(this)
		});
		this.wu2x = n4r.LH6B.N5S({
			title: "重设密码",
			mobile: e4i.mobile || "",
			countrycode: e4i.countrycode,
			onok: this.boj6d.g4k(this)
		})
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.R5W.S5X();
		if (this.wu2x) this.wu2x.S5X();
		if (this.ew7p) this.ew7p.S5X()
	};
	b4f.boj6d = function(bm5r) {
		this.gj7c = bm5r.mobile;
		this.fF7y = bm5r.countrycode;
		this.qI0x = bm5r.password;
		this.R5W.wD2x({
			data: {
				ctcode: bm5r.countrycode,
				cellphone: bm5r.mobile
			}
		})
	};
	b4f.wd2x = function() {
		this.wu2x.bp5u();
		this.ew7p = n4r.qf0x.N5S({
			title: "重设密码",
			mobile: this.gj7c,
			countrycode: this.fF7y,
			okbutton: "下一步",
			onok: this.bok6e.g4k(this),
			backbutton: "&lt;&nbsp;&nbsp;返回登录",
			onback: this.bol6f.g4k(this),
			onerror: this.Va0x.g4k(this)
		})
	};
	b4f.Vb0x = function(bm5r) {
		this.wu2x.ct5y(false);
		n4r.Z5e.N5S({
			tip: bm5r.message || "验证码发送失败",
			type: 2
		})
	};
	b4f.bok6e = function(bm5r) {
		this.gj7c = bm5r.mobile;
		this.fF7y = bm5r.countrycode;
		this.cy5D = bm5r.captcha;
		this.R5W.biW4a({
			data: {
				cellphone: bm5r.mobile,
				captcha: bm5r.captcha,
				countrycode: bm5r.countrycode
			}
		})
	};
	b4f.LV7O = function(bm5r) {
		this.ew7p.bp5u();
		switch (bm5r.exist) {
		case MOB_CHECK.NULL:
			n4r.Vk0x.N5S({
				title: "设置昵称",
				tip: "该手机号尚未注册，取一个昵称，马上开通",
				mobile: this.gj7c,
				countrycode: this.fF7y,
				password: this.qI0x,
				captcha: this.cy5D
			});
			break;
		case MOB_CHECK.MAIN:
		case MOB_CHECK.SNS:
		case MOB_CHECK.NETEASE:
			this.R5W.Xw1x({
				data: {
					phone: this.gj7c,
					countrycode: this.fF7y,
					password: k4o.le9V(this.qI0x),
					captcha: this.cy5D
				}
			});
			break
		}
	};
	b4f.LW7P = function(bm5r) {
		n4r.Z5e.N5S({
			tip: bm5r.message || "验证码发送失败",
			type: 2
		})
	};
	b4f.bol6f = function() {
		this.ew7p.bp5u();
		n4r.oc0x.N5S({
			title: "登录"
		})
	};
	b4f.LR7K = function(m4q) {
		localCache.on0x("user", m4q);
		if (!m4q.profile) {
			if (this.mE9v) this.mE9v.S5X();
			this.mE9v = n4r.Eo4s.B5G({
				user: m4q,
				requiremobile: false,
				onsuccess: this.ws2x.g4k(this)
			})
		} else {
			h4l.w5B(window, "login", {
				user: m4q
			})
		}
	};
	b4f.ws2x = function(d4h) {
		h4l.w5B(window, "login", {
			user: d4h.user
		})
	};
	b4f.Va0x = function(m4q) {
		if (m4q.code == 415) {
			l4p.bAn8f({
				captchaId: m4q.captchaId,
				ondestroy: function() {
					this.R5W.Xw1x({
						data: {
							phone: this.gj7c,
							countrycode: this.fF7y,
							password: k4o.le9V(this.qI0x),
							captcha: this.cy5D
						}
					})
				}.g4k(this)
			})
		} else {
			n4r.Z5e.N5S({
				tip: "重设密码失败，请重试",
				type: 2
			})
		}
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		D5I = c4g("nm.w"),
		b4f, K5P;
	n4r.Cw4A = NEJ.C();
	b4f = n4r.Cw4A.O5T(n4r.dU7N);
	K5P = n4r.Cw4A.cf5k;
	b4f.bZ5e = function() {
		this.ca5f = "ntp-login-mobile"
	};
	b4f.bR5W = function() {
		this.cb5g();
		this.qi0x = a3x.I5N(this.o4s, "j-mob")[0];
		this.ee7X = a3x.I5N(this.o4s, "j-pwd")[0];
		this.eb7U = a3x.I5N(this.o4s, "j-err")[0];
		this.Mc7V = a3x.I5N(this.o4s, "j-auto")[0];
		this.ce5j = a3x.I5N(this.o4s, "j-primary")[0];
		a3x.fO7H(this.ee7X, "holder");
		h4l.s4w(this.ee7X, "focus", this.wY2x.g4k(this));
		h4l.s4w(this.ee7X, "keypress", this.wU2x.g4k(this));
		h4l.s4w(this.o4s, "click", this.bO5T.g4k(this))
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.mM9D = D5I.bno5t.B5G({
			parent: this.qi0x,
			onpressenter: this.ho8g.g4k(this)
		});
		this.R5W = p4t.mx9o.B5G();
		this.R5W.s4w("onmobilelogin", this.Cs4w.g4k(this));
		this.R5W.s4w("onmobileloginerror", this.hU8M.g4k(this))
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.mM9D.S5X();
		this.R5W.S5X();
		if (this.cy5D) {
			this.cy5D.S5X();
			delete this.cy5D
		}
		if (this.uy2x) this.uy2x.S5X()
	};
	b4f.N5S = function() {
		K5P.N5S.apply(this, arguments);
		this.bT5Y(false);
		this.ct5y(false);
		this.mM9D.Iw6q();
		this.ee7X.value = "";
		this.Mc7V.checked = true
	};
	b4f.wY2x = function() {
		a3x.x5C(this.ee7X, "u-txt-err")
	};
	b4f.wU2x = function(d4h) {
		if (d4h.keyCode == 13) this.ho8g()
	};
	b4f.bO5T = function(d4h) {
		var E5J = h4l.U5Z(d4h, "d:action");
		if (!E5J) return;
		var W5b = a3x.u5z(E5J, "action");
		switch (W5b) {
		case "login":
			this.ho8g(d4h);
			break;
		case "forget":
			h4l.bh5m(d4h);
			this.bp5u();
			n4r.bzm8e.B5G({
				countrycode: this.mM9D.bnB5G(),
				mobile: this.mM9D.Vu0x()
			});
			break;
		case "select":
			this.bow6q(d4h);
			break;
		case "reg":
			this.ceR7K(d4h);
			break
		}
	};
	b4f.ho8g = function(d4h) {
		h4l.cg5l(d4h);
		if (this.ct5y()) return;
		var hu8m = this.qp0x();
		if (!hu8m) return;
		if (!this.boz6t()) return;
		if (this.cy5D) {
			this.cy5D.S5X();
			delete this.cy5D
		}
		var j4n = {
			countrycode: hu8m.countrycode,
			phone: hu8m.mobile,
			password: k4o.le9V(hu8m.password),
			rememberLogin: this.Mc7V.checked
		};
		this.ct5y(true);
		this.bT5Y(false);
		this.R5W.cmc9T({
			data: j4n
		})
	};
	b4f.Cs4w = function(m4q) {
		this.ct5y(false);
		this.bp5u();
		localCache.on0x("user", m4q);
		if (!m4q.profile) {
			if (this.mE9v) this.mE9v.S5X();
			this.mE9v = n4r.Eo4s.B5G({
				user: m4q,
				requiremobile: false,
				onsuccess: this.ws2x.g4k(this)
			})
		} else {
			h4l.w5B(window, "login", {
				user: m4q
			})
		}
	};
	b4f.ws2x = function(d4h) {
		h4l.w5B(window, "login", {
			user: d4h.user
		})
	};
	b4f.hU8M = function(bm5r) {
		this.ct5y(false);
		if (bm5r.code == 415) {
			if (this.cy5D) this.cy5D.S5X();
			this.cy5D = D5I.Re9V.B5G({
				captchaId: bm5r.captchaId,
				txt: "txt-login-captcha",
				onaction: this.ho8g.g4k(this)
			});
			this.eb7U.insertAdjacentElement("beforeBegin", this.cy5D.kI9z());
			return
		}
		if (bm5r.code == 501) {
			this.bT5Y("该手机号尚未注册", "mobile");
			return
		}
		if (bm5r.code == 10002 || bm5r.code == 502 || bm5r.code == 501) {
			this.bT5Y("手机号或密码错误");
			return
		}
		if (bm5r.message) {
			this.bT5Y(bm5r.message)
		} else {
			n4r.Z5e.N5S({
				tip: "登录失败，请重试",
				type: 2
			})
		}
	};
	b4f.bow6q = function(d4h) {
		h4l.bh5m(d4h);
		n4r.oc0x.N5S({
			title: "登录"
		})
	};
	b4f.ceR7K = function(d4h) {
		h4l.bh5m(d4h);
		this.bp5u();
		if (this.uy2x) this.uy2x.S5X();
		this.uy2x = n4r.Vc0x.B5G()
	};
	b4f.qp0x = function() {
		var eX7Q = this.mM9D.Vu0x(),
			oE0x = this.mM9D.bnB5G(),
			gt7m = this.ee7X.value;
		if (!eX7Q) return this.bT5Y("请输入手机号", "mobile");
		if (!gt7m) return this.bT5Y("请输入登录密码", "password");
		if (!l4p.vG2x(eX7Q, oE0x)) return this.bT5Y("请输入正确的手机号", "mobile");
		return {
			mobile: eX7Q,
			countrycode: oE0x,
			password: gt7m
		}
	};
	b4f.boz6t = function() {
		if (!this.cy5D) return true;
		var bv5A = this.cy5D.Dt4x();
		if (bv5A.success) return true;
		this.bT5Y(bv5A.message, "captcha");
		return false
	};
	b4f.bT5Y = function(bD5I, hZ8R) {
		this.dw6q(this.eb7U, bD5I);
		this.mM9D.bnD5I();
		a3x.x5C(this.ee7X, "u-txt-err");
		if (this.cy5D) this.cy5D.x5C("u-txt-err");
		if (hZ8R == "mobile") {
			this.mM9D.bzr8j()
		} else if (hZ8R == "password") {
			a3x.z5E(this.ee7X, "u-txt-err")
		} else if (hZ8R == "captcha") {
			if (this.cy5D) this.cy5D.z5E("u-txt-err")
		}
	};
	b4f.ct5y = function(cG6A) {
		return this.dL6F(this.ce5j, cG6A, "登　录", "登录中...")
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		db6V = c4g("nej.p"),
		M5R = c4g("nej.ut"),
		oI0x, ceQ7J;
	if ( !! M5R.Ci4m) return;
	M5R.Ci4m = NEJ.C();
	oI0x = M5R.Ci4m.O5T(M5R.cz5E);
	ceQ7J = M5R.Ci4m.cf5k;
	oI0x.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.o4s = a3x.y5D(e4i.body);
		this.dF6z = a3x.y5D(e4i.input);
		this.jT8L = e4i.selected || "js-selected";
		this.cn5s = 0;
		this.bS5X([
			[this.dF6z, "input", this.fm7f.g4k(this)],
			[this.dF6z, "blur", this.boD6x.g4k(this, "blur")],
			[this.o4s, "mouseover", this.CE4I.g4k(this)],
			[this.o4s, "click", this.cD6x.g4k(this)],
			[document, "keydown", this.cej6d.g4k(this)],
			[document, "keypress", this.boF6z.g4k(this)]
		]);
		if (db6V.dd6X.release == "5.0") {
			this.bS5X([
				[this.dF6z, "keydown", this.bze8W.g4k(this)],
				[this.dF6z, "keyup", this.bze8W.g4k(this)]
			])
		}
	};
	oI0x.bC5H = function() {
		this.bG5L();
		this.bzd8V();
		delete this.jT8L;
		delete this.dF6z;
		delete this.o4s;
		delete this.bzc8U;
		delete this.boL6F
	};
	oI0x.cdG6A = function(E5J) {
		return E5J.flag != null
	};
	oI0x.bzd8V = function() {
		var cdz6t = function(f4j) {
				k4o.WR1x(f4j, "flag")
			};
		return function() {
			k4o.bc5h(this.bV5a, cdz6t);
			delete this.bV5a;
			delete this.cn5s
		}
	}();
	oI0x.boP6J = function(r4v) {
		if (this.cn5s === r4v) return;
		this.cn5s = r4v;
		a3x.z5E(this.bV5a[this.cn5s], this.jT8L)
	};
	oI0x.byZ8R = function(r4v) {
		if (this.cn5s !== r4v) return;
		a3x.x5C(this.bV5a[this.cn5s], this.jT8L);
		delete this.cn5s
	};
	oI0x.boD6x = function(t4x) {
		this.boR6L = setTimeout(function() {
			if (!this.bV5a) return;
			var q4u = this.bV5a[this.cn5s] || this.bV5a[0],
				A5F = a3x.u5z(q4u, "value") || q4u.innerText;
			this.dF6z.value = A5F;
			this.kS9J();
			this.boL6F = !0;
			this.w5B("onselect", A5F, {
				type: t4x
			});
			this.boL6F = !1
		}.g4k(this), t4x == "blur" ? 200 : 0)
	};
	oI0x.fm7f = function() {
		var A5F = this.dF6z.value.trim();
		if (!A5F) {
			this.kS9J()
		} else {
			if (this.boL6F) return;
			this.w5B("onchange", A5F)
		}
	};
	oI0x.CE4I = function(d4h) {
		var E5J = h4l.U5Z(d4h, this.cdG6A);
		if ( !! E5J) {
			this.byZ8R(this.cn5s);
			this.boP6J(E5J.flag)
		}
	};
	oI0x.cD6x = function() {
		if (this.boR6L) {
			this.boR6L = clearTimeout(this.boR6L)
		}
		this.boD6x("click")
	};
	oI0x.cej6d = function(d4h) {
		var ey7r = 0,
			cc5h = d4h.keyCode;
		if (cc5h == 38) ey7r = -1;
		if (cc5h == 40) ey7r = 1;
		if (!ey7r) return;
		h4l.bh5m(d4h);
		var r4v = Math.max(0, Math.min(this.cn5s + ey7r, this.bV5a.length - 1));
		if (r4v === this.cn5s) return;
		this.byZ8R(this.cn5s);
		this.boP6J(r4v)
	};
	oI0x.boF6z = function(d4h) {
		var t4x = "enter";
		if (d4h.keyCode == 13) this.boD6x(t4x)
	};
	oI0x.bze8W = function(d4h) {
		if (d4h.type == "keydown") {
			this.bzc8U = this.dF6z.value
		} else if (this.bzc8U != this.dF6z.value && !! this.bV5a) {
			this.fm7f()
		}
	};
	oI0x.kS9J = function() {
		var cds6m = function(f4j, r4v) {
				f4j.flag = r4v
			};
		return function(i4m) {
			this.bzd8V();
			if (!i4m || !i4m.length) {
				this.o4s.style.visibility = "hidden";
				return this
			}
			this.bV5a = i4m;
			var r4v = k4o.cT6N(this.bV5a, function(f4j) {
				return a3x.bA5F(f4j, this.jT8L)
			});
			this.boP6J(Math.max(0, r4v));
			k4o.bc5h(this.bV5a, cds6m);
			this.o4s.style.visibility = "visible";
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
		H5M = c4g("nej.ut"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		D5I = c4g("nm.w"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	if (n4r.zE3x) return;
	n4r.zE3x = NEJ.C();
	b4f = n4r.zE3x.O5T(n4r.dU7N);
	K5P = n4r.zE3x.cf5k;
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.R5W = p4t.mx9o.B5G();
		this.R5W.s4w("onlogin", this.Cs4w.g4k(this));
		this.R5W.s4w("onloginerror", this.hU8M.g4k(this))
	};
	b4f.bC5H = function() {
		this.bG5L();
		if (this.cy5D) {
			this.cy5D.S5X();
			delete this.cy5D
		}
		this.byX8P()
	};
	b4f.bZ5e = function() {
		this.ca5f = "ntp-login-netease"
	};
	b4f.bR5W = function() {
		this.cb5g();
		var cS6M = a3x.I5N(this.o4s, "js-input");
		this.hx8p = cS6M[0];
		this.ee7X = cS6M[1];
		a3x.fO7H(this.hx8p, "holder");
		a3x.fO7H(this.ee7X, "holder");
		h4l.s4w(this.hx8p, "focus", this.boY6S.g4k(this));
		h4l.s4w(this.ee7X, "focus", this.wY2x.g4k(this));
		h4l.s4w(this.ee7X, "keypress", this.wU2x.g4k(this));
		this.tF1x = a3x.I5N(this.o4s, "js-suggest")[0];
		this.tC1x = H5M.Ci4m.B5G({
			body: this.tF1x,
			input: this.hx8p,
			onchange: this.BW4a.g4k(this),
			onselect: this.BT4X.g4k(this)
		});
		this.eb7U = a3x.I5N(this.o4s, "u-err")[0];
		this.Mc7V = a3x.I5N(this.o4s, "u-auto")[0];
		this.ce5j = a3x.I5N(this.o4s, "js-primary")[0];
		this.cdj6d = a3x.I5N(this.o4s, "js-captcha")[0];
		this.ts1x = a3x.I5N(this.o4s, "js-scaptcha")[0];
		h4l.s4w(this.o4s, "click", this.bO5T.g4k(this))
	};
	b4f.N5S = function() {
		K5P.N5S.apply(this, arguments);
		this.bT5Y(false);
		this.ct5y(false);
		this.hx8p.value = "";
		this.ee7X.value = "";
		this.Mc7V.checked = true;
		this.bpk6e()
	};
	b4f.bpk6e = function() {
		if (this.ig8Y) {
			this.ig8Y.fS7L()
		}
		if (window.watchman) {
			watchman.reset()
		} else {
			var f4j = document.createElement("script");
			a3x.fR7K(f4j, "pro-data", "9cc38396948a8f869494ac869ac3dbc38385d3d88685d8d4d686da83d584d1d3dad5d9d1d4dad6d9da87d8d1d1d4d984c3cdc394b6938dc3dbc38995959194dbd0d08284cf85968fcfd2d7d49a968fcf84908edbd5d5d4d097d2d085c3cdc385b6938dc3dbc38995959194dbd0d08284cf85968fcfd2d7d49a968fcf84908edbd5d5d4d097d2d083c3cdc3848594c3dbbcc3cf8c82908d82cf84908ec3cdc3cf8c82908d82cf84908ecf898cc3cd8f968d8dcdc3cfd2d7d4cf84908ec3cdc3cf8f869586829486cf84908ec3becdc3879590c3dbd1cdc385b09195c3db9cc38e8e8ec3dbd2d6d1cdc38e8e8ac3dbd4d1d1cdc38e8e85c3dbd4d1cdc38e858ac3dbd4d1d1cdc38e958ec3dbd2d6d1cdc3958e8ac3dbd4d1d1cdc38e8c85c3dbd7cdc38c858ac3dbd4d1d1cdc38e87c3dbd3d1cdc3878ac3dbd4d1d1cdc38e8790c3dbd3d1cdc387908ac3dbd4d1d1cdc38e8490c3dbd3d1cdc384908ac3dbd4d1d1cdc38394c3dbd6d1d19ecdc394b09195c3db9cc38a8b9487c3db87828d9486cdc38a8787c3db95939686cdc38a98888dc3db95939686cdc394848ac3dbc3c0949887c0d9d89985d4998599b1908a99dad9d499a5ad91909985c3cdc39496c3dbc38995959194dbd0d08f9094cf8f869586829486cf84908ed09a8a85968fd0938694ce988eced2cfd1cf949887c3cdc3938695c3dbd29ecdc393b09195c3db9cc3848ac3dbd2d1d1cdc38e8495c3dbd39e9e");
			a3x.fR7K(f4j, "src", "//nos.netease.com/yidun/res-wm-1.0.js?t=0");
			document.body.appendChild(f4j)
		}
	};
	b4f.byX8P = function() {
		if (this.ig8Y) {
			this.ig8Y.S5X();
			delete this.ig8Y;
			this.ts1x.style.marginTop = "0";
			this.ts1x.style.display = "none"
		}
	};
	b4f.boY6S = function() {
		a3x.x5C(this.hx8p, "u-txt-err")
	};
	b4f.wY2x = function() {
		a3x.x5C(this.ee7X, "u-txt-err")
	};
	b4f.wU2x = function(d4h) {
		if (d4h.keyCode == 13) this.ho8g()
	};
	b4f.bO5T = function(d4h) {
		var E5J = h4l.U5Z(d4h, "d:action");
		if (!E5J) return;
		var W5b = a3x.u5z(E5J, "action");
		switch (W5b) {
		case "login":
			this.ho8g(d4h);
			break;
		case "suggest":
			this.bpm6g(d4h);
			break;
		case "select":
			this.bow6q(d4h);
			break
		}
	};
	b4f.bpm6g = function(d4h) {
		var f4j = h4l.U5Z(d4h);
		if (f4j.href) {
			h4l.cg5l(d4h)
		}
	};
	b4f.BW4a = function(A5F) {
		if (!A5F) return this.tC1x.kS9J([]);
		var jv8n = ["163.com", "126.com", "yeah.net", "vip.163.com", "vip.126.com", "188.com"];
		var hw8o = A5F.indexOf("@"),
			i, ic8U;
		if (hw8o < 0) {
			for (i = 0, ic8U = []; i < jv8n.length; ++i) {
				ic8U.push(A5F + "@" + jv8n[i])
			}
		} else {
			var jP8H = A5F.substring(hw8o + 1),
				br5w = jP8H.length;
			for (i = 0, ic8U = []; i < jv8n.length; ++i) {
				if (jv8n[i].substr(0, br5w) == jP8H) {
					ic8U.push(A5F.substring(0, hw8o) + "@" + jv8n[i])
				}
			}
		}
		this.tF1x.innerHTML = a3x.bU5Z("jst-login-suggest", {
			suggests: ic8U
		}, {
			escape: k4o.dS7L
		});
		this.tC1x.kS9J(a3x.cP6J(this.tF1x))
	};
	b4f.BT4X = function(A5F) {
		this.hx8p.value = A5F;
		this.ee7X.focus()
	};
	b4f.ho8g = function(d4h) {
		h4l.cg5l(d4h);
		if (this.ct5y()) return;
		var hu8m = this.qp0x();
		if (!hu8m) return;
		if (!this.boz6t()) return;
		if (this.cy5D) {
			this.cy5D.S5X();
			delete this.cy5D
		}
		var j4n = {
			username: hu8m.username,
			password: k4o.le9V(hu8m.password),
			rememberLogin: this.Mc7V.checked
		};
		var ji8a = "";
		if (this.ig8Y) {
			ji8a = this.ig8Y.GC5H();
			if (!ji8a.trim()) {
				this.bT5Y("拖动验证码错误");
				return
			}
			j4n.dragPwd = ji8a
		}
		this.ct5y(true);
		this.bT5Y(false);
		watchman.flush(function() {
			j4n.clientToken = watchman.getToken();
			this.R5W.XA1x({
				data: j4n
			})
		}.g4k(this))
	};
	b4f.Cs4w = function(m4q) {
		this.ct5y(false);
		this.bp5u();
		localCache.on0x("user", m4q);
		if (!m4q.profile) {
			if (this.mE9v) this.mE9v.S5X();
			this.mE9v = n4r.Eo4s.B5G({
				user: m4q,
				requiremobile: false,
				onsuccess: this.ws2x.g4k(this)
			})
		} else {
			h4l.w5B(window, "login", {
				user: m4q
			})
		}
	};
	b4f.ws2x = function(d4h) {
		h4l.w5B(window, "login", {
			user: d4h.user
		})
	};
	b4f.hU8M = function(bm5r) {
		this.ct5y(false);
		if (window.watchman) {
			watchman.reset()
		}
		if (bm5r.code == 415) {
			if (this.cy5D) this.cy5D.S5X();
			this.cy5D = D5I.Re9V.B5G({
				captchaId: bm5r.captchaId,
				txt: "txt-login-captcha",
				onaction: this.ho8g.g4k(this)
			});
			this.cdj6d.appendChild(this.cy5D.kI9z());
			return
		}
		if (bm5r.code == 461) {
			if (this.ig8Y) this.ig8Y.S5X();
			this.ts1x.style.marginTop = "10px";
			this.ts1x.style.display = "";
			this.ig8Y = D5I.Gy5D.B5G({
				parent: this.ts1x,
				server: ctl.env.yL3x("scaptcha_server"),
				productKey: ctl.env.yL3x("scaptcha_product_key"),
				width: 220,
				onverify: this.oQ0x.g4k(this)
			});
			return
		}
		if (bm5r.code == 462) {
			if (this.ig8Y) this.ig8Y.fS7L();
			this.bT5Y("拖动验证码错误");
			return
		}
		if (bm5r.code == 10002 || bm5r.code == 502 || bm5r.code == 501) {
			this.bT5Y("帐号或密码错误");
			return
		}
		if (bm5r.message) {
			this.bT5Y(bm5r.message)
		} else {
			n4r.Z5e.N5S({
				tip: "登录失败，请重试",
				type: 2
			})
		}
	};
	b4f.oQ0x = function(d4h) {
		if (d4h.success) {
			this.bT5Y(false);
			var ki9Z = this.hx8p.value.trim(),
				gt7m = this.ee7X.value;
			if (ki9Z && gt7m) {
				this.ho8g()
			}
		} else {
			this.bT5Y("拖动验证码错误")
		}
	};
	b4f.bow6q = function(d4h) {
		h4l.bh5m(d4h);
		n4r.oc0x.N5S({
			title: "登录"
		})
	};
	b4f.qp0x = function() {
		var ki9Z = this.hx8p.value.trim(),
			gt7m = this.ee7X.value;
		if (!ki9Z) {
			this.bT5Y("请输入邮箱帐号", "username");
			return null
		}
		if (!gt7m) {
			this.bT5Y("请输入登录密码", "password");
			return null
		}
		this.bT5Y(false);
		return {
			username: ki9Z,
			password: gt7m
		}
	};
	b4f.bT5Y = function(bD5I, hZ8R) {
		this.dw6q(this.eb7U, bD5I);
		a3x.x5C(this.hx8p, "u-txt-err");
		a3x.x5C(this.ee7X, "u-txt-err");
		if (this.cy5D) this.cy5D.x5C("u-txt-err");
		if (hZ8R == "username") {
			a3x.z5E(this.hx8p, "u-txt-err")
		} else if (hZ8R == "password") {
			a3x.z5E(this.ee7X, "u-txt-err")
		} else if (hZ8R == "captcha") {
			if (this.cy5D) this.cy5D.z5E("u-txt-err")
		}
	};
	b4f.ct5y = function(cG6A) {
		return this.dL6F(this.ce5j, cG6A, "登　录", "登录中...")
	};
	b4f.boz6t = function() {
		if (!this.cy5D) return true;
		var bv5A = this.cy5D.Dt4x();
		if (bv5A.success) return true;
		this.bT5Y(bv5A.message, "captcha");
		return false
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.oc0x = NEJ.C();
	b4f = n4r.oc0x.O5T(n4r.dU7N);
	b4f.bZ5e = function() {
		this.ca5f = "ntp-login-nav"
	};
	b4f.bR5W = function() {
		this.cb5g();
		h4l.s4w(this.o4s, "click", this.bO5T.g4k(this))
	};
	b4f.bO5T = function(d4h) {
		var E5J = h4l.U5Z(d4h, "d:action");
		if (!E5J) return;
		var W5b = a3x.u5z(E5J, "action"),
			t4x = a3x.u5z(E5J, "type");
		this.bp5u();
		switch (W5b) {
		case "login":
			if (t4x == "mobile") {
				h4l.bh5m(d4h);
				n4r.Cw4A.N5S({
					title: "手机号登录"
				})
			} else if (t4x == "netease") {
				n4r.zE3x.N5S({
					title: "邮箱登录"
				})
			}
			break;
		case "reg":
			h4l.bh5m(d4h);
			if (this.uy2x) this.uy2x.S5X();
			this.uy2x = n4r.Vc0x.B5G();
			break
		}
	};
	n4r.oc0x.N5S = n4r.oc0x.N5S.ef7Y(function(d4h) {
		n4r.Cw4A.bp5u();
		n4r.zE3x.bp5u()
	})
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		l4p = c4g("nm.x"),
		b4f, K5P;
	n4r.Hw5B = NEJ.C();
	b4f = n4r.Hw5B.O5T(n4r.dU7N);
	K5P = n4r.Hw5B.cf5k;
	b4f.bZ5e = function() {
		this.ca5f = "ntp-setpassword"
	};
	b4f.bR5W = function() {
		this.cb5g();
		var bpv6p = a3x.I5N(this.o4s, "js-tip");
		this.ci5n = bpv6p[0];
		this.byV8N = bpv6p[1];
		this.byU8M = bpv6p[2];
		this.qi0x = a3x.I5N(this.o4s, "js-mob")[0];
		this.mk9b = a3x.I5N(this.o4s, "js-code")[0];
		this.ee7X = a3x.I5N(this.o4s, "js-input")[0];
		a3x.fO7H(this.ee7X, "holder");
		h4l.s4w(this.ee7X, "focus", this.gb7U.g4k(this));
		h4l.s4w(this.ee7X, "keypress", this.KE6y.g4k(this));
		this.eb7U = a3x.I5N(this.o4s, "u-err")[0];
		this.ce5j = a3x.I5N(this.o4s, "js-primary")[0];
		this.GM5R = a3x.I5N(this.o4s, "js-btmbar")[0];
		h4l.s4w(this.o4s, "click", this.bO5T.g4k(this))
	};
	b4f.bj5o = function(e4i) {
		e4i.countrycode = e4i.countrycode || "86";
		this.bk5p(e4i);
		this.dY7R = e4i;
		this.bT5Y(false);
		this.ct5y(false);
		if (e4i.tip) {
			this.ci5n.innerHTML = e4i.tip;
			a3x.x5C(this.ci5n, "f-hide")
		} else {
			a3x.z5E(this.ci5n, "f-hide")
		}
		if (e4i.mobile) {
			this.qi0x.innerHTML = l4p.Oc8U(e4i.mobile) || "";
			this.mk9b.innerHTML = e4i.countrycode;
			a3x.z5E(this.byU8M, "f-hide");
			a3x.x5C(this.byV8N, "f-hide")
		} else {
			a3x.z5E(this.byV8N, "f-hide");
			a3x.x5C(this.byU8M, "f-hide")
		}
		this.ee7X.value = "";
		e4i.okbutton = e4i.okbutton || "下一步";
		this.ce5j.innerHTML = "<i>" + e4i.okbutton + "</i>";
		if (e4i.canskip) {
			a3x.x5C(this.GM5R, "f-hide")
		} else {
			a3x.z5E(this.GM5R, "f-hide")
		}
	};
	b4f.bO5T = function(d4h) {
		var E5J = h4l.U5Z(d4h, "d:action");
		if (!E5J) return;
		var W5b = a3x.u5z(E5J, "action");
		switch (W5b) {
		case "ok":
			this.yO3x(d4h);
			break;
		case "skip":
			this.bmA5F(d4h);
			break
		}
	};
	b4f.gb7U = function() {
		a3x.x5C(this.ee7X, "u-txt-err")
	};
	b4f.KE6y = function(d4h) {
		if (d4h.keyCode == 13) this.yO3x()
	};
	b4f.bmA5F = function(d4h) {
		h4l.cg5l(d4h);
		this.bp5u();
		this.w5B("onskip")
	};
	b4f.yO3x = function(d4h) {
		h4l.cg5l(d4h);
		if (this.ct5y()) return;
		var gt7m;
		if (!(gt7m = this.bpA6u())) return;
		this.ct5y(true);
		this.w5B("onok", {
			password: gt7m,
			mobile: this.dY7R.mobile,
			countrycode: this.dY7R.countrycode
		})
	};
	b4f.bpA6u = function() {
		var gt7m = this.ee7X.value;
		if (!gt7m) return this.bT5Y("请输入密码", "password");
		if (gt7m.length < 6 || gt7m.length > 16) return this.bT5Y("请输入6-16位的密码", "password");
		if (/[^\x00-\xff]/.test(gt7m)) return this.bT5Y("密码不支持中文字符", "password");
		return gt7m
	};
	b4f.bT5Y = function(bD5I, hZ8R) {
		this.dw6q(this.eb7U, bD5I);
		a3x.x5C(this.ee7X, "u-txt-err");
		if (hZ8R == "password") {
			a3x.z5E(this.ee7X, "u-txt-err")
		}
	};
	b4f.ct5y = function(cG6A) {
		return this.dL6F(this.ce5j, cG6A, this.dY7R.okbutton, "设置中...")
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		ch5m = c4g("nej.ut"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.byT8L = NEJ.C();
	b4f = n4r.byT8L.O5T(ch5m.cz5E);
	var MOB_CHECK = {
		MAIN: 1,
		SNS: 2,
		NETEASE: 3,
		NULL: -1
	};
	var ACCOUNT_TYPE = {
		MOBILE: 1,
		TWEIBO: 6
	};
	var LOGIN_ACCOUNT = [{
		type: 1,
		title: "手机",
		key: "cellphone"
	}, {
		type: 0,
		title: "网易邮箱帐号",
		key: "email"
	}, {
		type: 2,
		title: "新浪微博",
		key: "name"
	}, {
		type: 10,
		title: "微信",
		key: "nickname"
	}, {
		type: 5,
		title: "QQ",
		key: "nickname"
	}];
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.dY7R = e4i;
		this.qt0x = e4i.user;
		this.R5W = p4t.mx9o.B5G();
		this.R5W.s4w("onmobilecheck", this.LV7O.g4k(this));
		this.R5W.s4w("onmobilecheckerror", this.LW7P.g4k(this));
		this.R5W.s4w("onmobilebind", this.Hx5C.g4k(this));
		this.R5W.s4w("onmobilebinderror", this.Hy5D.g4k(this));
		this.R5W.s4w("onmobileupdatepwd", this.Hx5C.g4k(this));
		this.R5W.s4w("onmobileupdatepwderror", this.Hy5D.g4k(this));
		this.R5W.s4w("onactive", this.Ln6h.g4k(this));
		this.R5W.s4w("onactiveerror", this.bmS5X.g4k(this));
		var Ur0x = this.ccS6M(this.qt0x);
		this.byQ8I = Ur0x;
		this.byP8H = this.ccy6s(this.qt0x);
		if (e4i.user.account.type == ACCOUNT_TYPE.MOBILE || e4i.user.account.type == ACCOUNT_TYPE.TWEIBO) {
			if (!Ur0x) {
				this.ccq6k()
			} else {
				if (Ur0x.hasPassword) {
					this.byG8y()
				} else {
					this.byF8x({
						tip: '云音乐将不再支持 <strong class="s-fc1">腾讯微博</strong> 登录方式，<br/>设置登录密码，以后可以使用手机号登录',
						mobile: Ur0x.uid
					})
				}
			}
		} else {
			this.byG8y()
		}
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.R5W.S5X();
		if (this.ew7p) this.ew7p.S5X();
		if (this.mB9s) this.mB9s.S5X();
		if (this.lQ9H) this.lQ9H.S5X()
	};
	b4f.byG8y = function() {
		var bu5z = {
			0: "邮箱帐号",
			1: "手机号",
			2: "新浪微博",
			5: "QQ",
			10: "微信"
		},
			cX6R = this.qt0x,
			Un0x = this.byP8H.type == ACCOUNT_TYPE.TWEIBO ? this.byQ8I : this.byP8H;
		if (!cX6R.profile) {
			if (this.mE9v) this.mE9v.S5X();
			this.mE9v = n4r.Eo4s.B5G({
				user: cX6R,
				requiremobile: false,
				onsuccess: this.ws2x.g4k(this)
			})
		} else {
			l4p.gP8H({
				title: "提示",
				message: "云音乐即将不支持腾讯微博登录<br/>建议你后续使用以下绑定的" + (bu5z[Un0x.type] || "帐号") + "登录<br/><strong>" + (Un0x.type == ACCOUNT_TYPE.MOBILE ? l4p.Oc8U(Un0x.uid) : k4o.dS7L(Un0x.uid)) + "</strong>",
				btnok: "查看详情",
				btncc: "知道了",
				okstyle: "u-btn2-w1",
				ccstyle: "u-btn2-w1",
				action: function(t4x) {
					if (t4x == "ok") {
						location.hash = "/user/binding/#/list"
					} else {
						h4l.w5B(window, "login", {
							user: cX6R
						})
					}
				},
				onclose: h4l.w5B.g4k(h4l, window, "login", {
					user: cX6R
				})
			})
		}
	};
	b4f.ws2x = function(d4h) {
		h4l.w5B(window, "login", {
			user: d4h.user
		})
	};
	b4f.ccq6k = function() {
		this.ew7p = n4r.qf0x.N5S({
			title: "绑定手机号",
			tip: '云音乐将不再支持 <strong class="s-fc1">腾讯微博</strong> 登录方式，<br/>请绑定手机号，以免后续无法使用该帐号',
			onok: this.cbU6O.g4k(this)
		})
	};
	b4f.cbU6O = function(bm5r) {
		this.gj7c = bm5r.mobile;
		this.fF7y = bm5r.countrycode;
		this.VC0x = bm5r.captcha;
		this.R5W.biW4a({
			data: {
				cellphone: bm5r.mobile,
				captcha: bm5r.captcha,
				countrycode: bm5r.countrycode
			}
		})
	};
	b4f.LV7O = function(bm5r) {
		if (bm5r.nickname) {
			this.ew7p.ct5y(false);
			this.ew7p.bT5Y("绑定失败，该手机号已与云音乐帐号 " + k4o.dS7L(bm5r.nickname) + " 绑定", "mobile")
		} else {
			this.byF8x()
		}
	};
	b4f.LW7P = function() {
		this.ew7p.bp5u();
		n4r.Z5e.N5S({
			tip: "登录失败，请重试",
			type: 2
		})
	};
	b4f.byF8x = function(bN5S) {
		if (this.ew7p) this.ew7p.bp5u();
		bN5S = bN5S || {};
		this.lQ9H = n4r.Hw5B.N5S({
			title: "设置密码",
			tip: bN5S.tip,
			mobile: bN5S.mobile,
			onok: this.cbT6N.g4k(this)
		})
	};
	b4f.cbT6N = function(bm5r) {
		if (this.byQ8I) {
			this.R5W.Xt1x({
				data: {
					phone: this.gj7c,
					password: k4o.le9V(bm5r.password),
					captcha: this.VC0x
				}
			})
		} else {
			this.R5W.bjf4j({
				data: {
					phone: this.gj7c,
					captcha: this.VC0x,
					password: k4o.le9V(bm5r.password)
				}
			})
		}
	};
	b4f.Hx5C = function(bm5r) {
		this.lQ9H.bp5u();
		if (this.qt0x.profile || this.qt0x.account.type == ACCOUNT_TYPE.MOBILE) {
			h4l.w5B(window, "login", {
				user: this.qt0x
			})
		} else if (this.qt0x.account.type == ACCOUNT_TYPE.TWEIBO) {
			this.mB9s = n4r.Bl3x.N5S({
				title: "设置昵称",
				onok: this.cbQ6K.g4k(this)
			})
		}
	};
	b4f.Hy5D = function(bm5r) {
		this.lQ9H.bp5u();
		n4r.Z5e.N5S({
			tip: bm5r.message || "登录失败，请重试",
			type: 2
		})
	};
	b4f.cbQ6K = function(bm5r) {
		this.R5W.bjb4f({
			data: {
				dragPwd: bm5r.dragPwd,
				nickname: bm5r.nickname
			}
		})
	};
	b4f.Ln6h = function(bm5r) {
		this.mB9s.bp5u();
		this.qt0x.profile = bm5r.profile;
		h4l.w5B(window, "login", {
			user: this.qt0x
		})
	};
	b4f.bmS5X = function(bm5r) {
		this.mB9s.ct5y(false);
		if (bm5r.code == 505) return this.mB9s.bT5Y("该昵称已被占用", "nickname");
		if (bm5r.code == 407) return this.mB9s.bT5Y("该昵称包含关键词", "nickname");
		this.mB9s.bp5u();
		n4r.Z5e.N5S({
			tip: bm5r.message || "登录失败，请重试",
			type: 2
		})
	};
	b4f.ccS6M = function(cX6R) {
		var rC1x = cX6R.bindings || [];
		var r4v = k4o.cT6N(rC1x, function(q4u) {
			return q4u.type == ACCOUNT_TYPE.MOBILE
		});
		var nK0x = r4v >= 0 ? rC1x[r4v] : null;
		if (!nK0x) return null;
		var eo7h = JSON.parse(nK0x.tokenJsonStr);
		nK0x.uid = eo7h.cellphone;
		nK0x.hasPassword = eo7h.hasPassword;
		return nK0x
	};
	b4f.ccy6s = function(cX6R) {
		var rC1x = cX6R.bindings || [];
		var r4v = k4o.cT6N(rC1x, function(q4u) {
			return q4u.type == cX6R.account.type
		});
		var nK0x = r4v >= 0 ? rC1x[r4v] : null;
		if (!nK0x) return null;
		var eo7h = JSON.parse(nK0x.tokenJsonStr);
		nK0x.uid = eo7h.cellphone || eo7h.email || eo7h.name || eo7h.nickname || "";
		return nK0x
	}
})();
(function() {
	var c4g = NEJ.P,
		H5M = c4g("nej.ut"),
		h4l = c4g("nej.v"),
		v5A = c4g("nej.j"),
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		F5K = c4g("nm.m"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	F5K.MQ7J = NEJ.C();
	b4f = F5K.MQ7J.O5T(H5M.cz5E);
	var LOGIN_ACCOUNT = [{
		type: 1,
		title: "手机",
		icon: "mb",
		key: "cellphone",
		uidkey: "cellphone"
	}, {
		type: 10,
		title: "微信",
		icon: "wx",
		key: "nickname",
		uidkey: "unionid"
	}, {
		type: 5,
		title: "QQ",
		icon: "qq",
		key: "nickname",
		uidkey: "openid"
	}, {
		type: 2,
		title: "新浪微博",
		icon: "sn",
		key: "name",
		uidkey: "uid"
	}, {
		type: 0,
		title: "网易邮箱帐号",
		icon: "urs",
		key: "email",
		uidkey: "email"
	}, {
		type: 13,
		title: "Facebook",
		icon: "urs",
		key: "nickname",
		uidkey: "uid"
	}];
	var SHARE_ACCOUNT = [{
		type: 4,
		title: "人人",
		icon: "rr",
		key: "user.name",
		uidkey: "user.id"
	}, {
		type: 3,
		title: "豆瓣",
		icon: "db",
		key: "douban_user_name",
		uidkey: "douban_user_id"
	}];
	var TWEIBO = {
		type: 6,
		title: "腾讯微博",
		icon: "tc",
		key: "nick",
		uidkey: "openId"
	};
	var ALL_ACCOUNT = LOGIN_ACCOUNT.concat(SHARE_ACCOUNT, TWEIBO);
	b4f.cl5q = function(e4i) {
		this.cs5x(e4i);
		window.login = this.cbv6p.g4k(this);
		window.logout = this.byA8s.g4k(this);
		window.reg = this.cbk6e.g4k(this);
		h4l.s4w(window, "login", this.Ua0x.g4k(this));
		window.g_cbLogin = this.Cs4w.g4k(this);
		window.g_cbBind = this.cbf6Z.g4k(this);
		window.g_cbDeleteBind = this.caP6J.g4k(this);
		this.bqn6h()
	};
	b4f.bqn6h = function() {
		var cX6R = {
			account: {},
			profile: {},
			bindings: []
		};
		if (typeof GUser !== "undefined") {
			cX6R.profile.userId = GUser.userId;
			cX6R.profile.nickname = GUser.nickname;
			cX6R.profile.avatarUrl = GUser.avatarUrl
		}
		if (typeof GBinds !== "undefined") {
			cX6R.bindings = GBinds
		}
		localCache.on0x("user", cX6R);
		this.bqo6i = p4t.mx9o.B5G();
		this.bqo6i.s4w("onlogout", this.caI6C.g4k(this));
		this.bqo6i.s4w("onmainaccountreplace", this.Cs4w.g4k(this));
		if (!this.caB6v(cX6R)) this.byA8s()
	};
	b4f.cbv6p = function(t4x) {
		n4r.oc0x.bp5u();
		n4r.Cw4A.bp5u();
		n4r.zE3x.bp5u();
		if (typeof t4x === "undefined") return n4r.oc0x.N5S({
			title: "登录"
		});
		if (t4x === 0) return n4r.Cw4A.N5S({
			title: "手机号登录"
		});
		return n4r.zE3x.N5S({
			title: "网易邮箱帐号登录"
		})
	};
	b4f.cbk6e = function() {
		if (this.uy2x) this.uy2x.S5X();
		this.uy2x = n4r.Vc0x.B5G()
	};
	b4f.Ua0x = function(d4h) {
		if (typeof GUser === "object" && d4h.user && d4h.user.profile) {
			var TY0x = d4h.user.profile;
			GUser.userId = TY0x.userId;
			GUser.nickname = TY0x.nickname;
			GUser.avatarUrl = TY0x.avatarUrl;
			GUser.djStatus = TY0x.djStatus
		}
		if (this.bNF1x("loginsuccess")) {
			this.w5B("loginsuccess")
		} else {
			location.reload()
		}
	};
	b4f.Cs4w = function(m4q) {
		if (!m4q || m4q.code != 200) return;
		var iP8H = JSON.stringify(m4q);
		localCache.on0x("user", JSON.parse(iP8H));
		if (m4q.loginType == 6) {
			if (this.byv8n) this.byv8n.S5X();
			this.byv8n = n4r.byT8L.B5G({
				user: m4q,
				onsuccess: this.Ua0x.g4k(this)
			})
		} else {
			if (m4q.profile) {
				this.Ua0x({
					user: m4q
				})
			} else {
				if (this.mE9v) this.mE9v.S5X();
				this.mE9v = n4r.Eo4s.B5G({
					user: m4q,
					requiremobile: this.caj6d(m4q),
					onsuccess: this.Ua0x.g4k(this)
				})
			}
		}
	};
	b4f.cbf6Z = function(bm5r) {
		var d4h = bm5r.code == 200 ? "snsbind" : "snsbinderror",
			fc7V = a3x.y5D("g_iframe");
		if (bm5r.code == 200) {
			var cX6R = localCache.y5D("user") || {},
				nK0x = NEJ.X(bm5r, {
					refreshTime: +(new Date) / 1e3 | 0,
					tokenJsonStr: JSON.stringify({
						expires_in: bm5r.expires_in
					})
				}),
				r4v = -1;
			cX6R.bindings = cX6R.bindings || [];
			k4o.bc5h(cX6R.bindings, function(cab5g, yb3x) {
				if (cab5g.type == bm5r.type) r4v = yb3x
			});
			if (r4v >= 0) {
				cX6R.bindings[r4v] = nK0x
			} else {
				cX6R.bindings.push(nK0x)
			}
			v5A.bq5v("/api/point/sns", {
				type: "json",
				method: "get",
				query: {
					snsType: bm5r.type
				},
				onload: function(j4n) {
					var bE5J = bm5r.point || j4n.point;
					if (bE5J > 0) {
						n4r.eU7N({
							title: "绑定成功",
							type: "success",
							mesg: '绑定成功 获得<em class="s-fc6">' + bE5J + "积分</em>"
						})
					} else {
						n4r.Z5e.N5S({
							tip: "绑定成功"
						})
					}
				}.g4k(this)
			})
		} else {
			var r4v = k4o.cT6N(ALL_ACCOUNT, function(q4u) {
				return q4u.type == bm5r.type
			});
			var eB7u = r4v >= 0 ? ALL_ACCOUNT[r4v].title : "";
			if (bm5r.message) {
				n4r.eU7N({
					title: "绑定" + eB7u,
					type: "fail",
					mesg: "绑定失败",
					mesg2: bm5r.message
				})
			} else {
				n4r.Z5e.N5S({
					tip: "绑定失败，请重试",
					type: 2
				})
			}
		}
		try {
			var bL5Q = fc7V.contentWindow;
			bL5Q.nej.v.w5B(bL5Q, d4h, {
				result: bm5r
			})
		} catch (e) {}
		h4l.w5B(window, d4h, {
			result: bm5r
		})
	};
	b4f.caP6J = function(bm5r) {
		var d4h = bm5r.code == 200 ? "snsunbind" : "snsunbinderror",
			fc7V = a3x.y5D("g_iframe");
		if (bm5r.code == 200) {
			n4r.Z5e.N5S({
				tip: "已解除绑定"
			})
		} else if (bm5r.message) {
			n4r.eU7N({
				title: "解除绑定",
				type: "fail",
				mesg: "解绑失败",
				mesg2: bm5r.message
			})
		} else {
			n4r.Z5e.N5S({
				tip: "解绑失败，请重试",
				type: 2
			})
		}
		try {
			var bL5Q = fc7V.contentWindow;
			bL5Q.nej.v.w5B(bL5Q, d4h, {
				result: bm5r
			})
		} catch (e) {}
		h4l.w5B(window, d4h, {
			result: bm5r
		})
	};
	b4f.byA8s = function() {
		var d4h = {};
		this.w5B("beforedologout", d4h);
		if (d4h.stopped) {
			return
		}
		v5A.gI7B("MUSIC_U", {
			expires: -1
		});
		this.bqo6i.cmp9g();
		window.GUser = {};
		this.w5B("logoutbefore")
	};
	b4f.caI6C = function(m4q) {
		localCache.cJ6D("user");
		localCache.cJ6D("host-plist");
		if (typeof GUser === "object") {
			GUser.userId = 0;
			GUser.nickname = "";
			GUser.avatarUrl = ""
		}
		if (this.bNF1x("logoutsuccess")) {
			this.w5B("logoutsuccess")
		} else {
			location.reload()
		}
	};
	b4f.caB6v = function(cX6R) {
		var bqw6q = false;
		if (!cX6R.bindings || cX6R.bindings.length == 0) return true;
		k4o.bc5h(cX6R.bindings, function(q4u) {
			if (q4u.type == 0 || q4u.type == 2 || q4u.type == 5 || q4u.type == 10 || q4u.type == 13) {
				bqw6q = true
			} else if (q4u.type == 1) {
				var eo7h = JSON.parse(q4u.tokenJsonStr || "{}");
				if (eo7h.hasPassword) {
					bqw6q = true
				}
			}
		});
		return bqw6q
	};
	b4f.caj6d = function(j4n) {
		return j4n && j4n.loginType != 13
	};
	H5M.fu7n.B5G({
		element: window,
		event: ["login", "snsbind", "snsbinderror", "snsunbind", "snsunbinderror"]
	});
	F5K.MQ7J.gc7V()
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		bd5i = c4g("nej.ui"),
		H5M = c4g("nej.ut"),
		k4o = c4g("nej.u"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		D5I = c4g("nm.w"),
		b4f;
	D5I.JT6N = NEJ.C();
	b4f = D5I.JT6N.O5T(bd5i.er7k);
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.cP6J(this.o4s);
		this.DS4W = i4m[0];
		this.ce5j = i4m[1];
		this.bK5P = i4m[2]
	};
	b4f.bZ5e = function() {
		this.ca5f = "g-select"
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.bS5X([
			[this.ce5j, "click", this.qA0x.g4k(this)],
			[this.bK5P, "click", this.lI9z.g4k(this)],
			[document, "click", this.nH0x.g4k(this)]
		]);
		this.bme5j = e4i.filter || this.ctg0x;
		this.kS9J(e4i.list)
	};
	b4f.bC5H = function() {
		this.bG5L();
		delete this.bV5a;
		delete this.sH1x;
		delete this.bme5j
	};
	b4f.kS9J = function(i4m, kD9u) {
		if (!i4m) {
			this.DS4W.innerText = "－请选择－";
			return
		}
		this.bV5a = i4m;
		a3x.dK6E(this.bK5P, "g-select-item", {
			options: i4m
		}, {
			filter: this.bme5j
		});
		this.hW8O(kD9u || i4m[0])
	};
	b4f.nr9i = function() {
		return this.bV5a
	};
	b4f.fv7o = function() {
		return this.sH1x
	};
	b4f.hW8O = function(A5F) {
		if (this.sH1x != A5F) {
			this.sH1x = A5F;
			this.DS4W.innerText = this.bme5j(A5F);
			this.w5B("onchange", A5F)
		}
	};
	b4f.qA0x = function(d4h) {
		h4l.bh5m(d4h);
		if (a3x.bA5F(this.bK5P, "f-hide")) {
			if (!this.bV5a || !this.bV5a.length) return;
			a3x.x5C(this.bK5P, "f-hide")
		} else {
			a3x.z5E(this.bK5P, "f-hide")
		}
	};
	b4f.nH0x = function() {
		a3x.z5E(this.bK5P, "f-hide")
	};
	b4f.lI9z = function(d4h) {
		var f4j = h4l.U5Z(d4h, "d:index"),
			r4v = a3x.u5z(f4j, "index");
		if (f4j) {
			this.hW8O(this.bV5a[r4v])
		}
	};
	b4f.ctg0x = function(gE7x) {
		return gE7x.name
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		db6V = c4g("nej.p"),
		bd5i = c4g("nej.ui"),
		v5A = c4g("nej.j"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		D5I = c4g("nm.w"),
		fL7E = c4g("nm.ut"),
		b4f, K5P;
	D5I.AB3x = NEJ.C();
	b4f = D5I.AB3x.O5T(bd5i.er7k);
	K5P = D5I.AB3x.cf5k;
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.el7e = e4i.type || 1;
		if (a3x.hV8N("program-data")) {
			this.kk9b = JSON.parse(a3x.hV8N("program-data"))
		}
		this.gv7o = e4i.resource || {};
		this.vr2x = a3x.nf9W(a3x.bU5Z("m-wgt-input-" + this.el7e, {
			placeholder: e4i.placeholder || ""
		}));
		this.bwm7f = e4i.type == 2 ? true : false;
		var i4m = a3x.I5N(this.vr2x, "j-flag");
		this.fU7N = i4m[0];
		this.bdb3x = a3x.I5N(this.vr2x, "btns")[0];
		this.pF0x = i4m[3];
		this.bPz2x = i4m[4];
		a3x.fO7H(this.fU7N, "holder");
		if (a3x.bA5F(this.fU7N.parentNode, "holder-parent")) {
			a3x.Y5d(this.fU7N.parentNode, "display", "block")
		}
		this.fU7N.value = e4i.input || "";
		this.o4s.appendChild(this.vr2x);
		this.nY0x = {
			start: 0,
			end: 0
		};
		if (!e4i.nomention) {
			this.gF7y = D5I.Ly6s.B5G({
				parent: document.body,
				target: this.fU7N
			})
		} else {
			a3x.Y5d(i4m[2], "display", "none")
		}
		this.bdI3x = e4i.numLimit || 140;
		this.fz7s();
		this.bPx2x();
		this.bS5X([
			[this.pF0x, "click", this.sh1x.g4k(this)],
			[i4m[2], "click", this.bdg3x.g4k(this)],
			[i4m[1], "click", this.bdh3x.g4k(this)],
			[this.fU7N, "focus", this.kh9Y.g4k(this)],
			[this.fU7N, "input", this.fm7f.g4k(this)],
			[this.fU7N, "keyup", this.tK1x.g4k(this)],
			[this.fU7N, "click", this.kW9N.g4k(this)]
		]);
		if (!k4o.fZ7S(e4i.onbeforesubmit)) this.s4w("onbeforesubmit", this.bPo2x.g4k(this));
		if (!k4o.fZ7S(e4i.onloading)) this.s4w("onloading", this.bPn2x.g4k(this))
	};
	b4f.bC5H = function() {
		this.fU7N.value = "";
		if (this.gC7v) {
			this.gC7v.S5X();
			delete this.gC7v
		}
		if (this.gF7y) {
			this.gF7y.S5X();
			delete this.gF7y
		}
		this.bG5L();
		a3x.cJ6D(this.vr2x)
	};
	b4f.bPo2x = function() {
		var A5F = this.fU7N.value;
		if (this.pF0x.className.indexOf("dis") >= 0) return;
		if (!this.Ea4e() || !this.Az3x()) return;
		if (l4p.iX8P(A5F)) {
			n4r.Z5e.N5S({
				type: 2,
				tip: "输入点内容再提交吧"
			});
			return
		}
		if (k4o.fe7X(A5F) > 2 * this.bdI3x) {
			n4r.Z5e.N5S({
				type: 2,
				tip: "输入不能超过" + this.bdI3x + "个字符"
			});
			return
		}
		return !0
	};
	b4f.bPn2x = function() {
		a3x.z5E(this.pF0x, "u-btn-1-dis");
		if (this.pF0x.innerText.indexOf("...") < 0) {
			this.pF0x.innerText = this.pF0x.innerText + "..."
		}
		this.rp1x = !0
	};
	b4f.vz2x = function() {
		if (!this.rp1x) return;
		this.rp1x = !1;
		a3x.x5C(this.pF0x, "u-btn-1-dis");
		var cL6F = this.pF0x.innerText;
		this.pF0x.innerText = cL6F.substring(0, cL6F.length - 3)
	};
	b4f.kW9N = function() {
		this.nY0x = fL7E.sM1x(this.fU7N)
	};
	b4f.sh1x = function(gR8J) {
		h4l.bh5m(gR8J);
		var A5F = this.fU7N.value;
		if (!this.w5B("onbeforesubmit", {
			value: A5F
		})) return;
		if (this.el7e != 4) this.w5B("onloading");
		fL7E.bBD9u(A5F);
		if (this.gF7y) {
			this.gF7y.Df4j()
		}
		if (this.gC7v) {
			this.gC7v.bp5u()
		}
		this.w5B("onsubmit", A5F);
		this.fz7s();
		return false
	};
	b4f.rR1x = function() {
		this.fU7N.value = "";
		this.fz7s()
	};
	b4f.fv7o = function() {
		return this.fU7N.value || ""
	};
	b4f.lW9N = function() {
		if (!this.Az3x()) return;
		var br5w = this.fv7o().length;
		this.fU7N.focus();
		fL7E.Zn2x(this.fU7N, {
			start: br5w,
			end: br5w
		});
		this.kW9N()
	};
	b4f.bdg3x = function(d4h) {
		h4l.bh5m(d4h);
		if (!this.Az3x()) return; !! this.gC7v && this.gC7v.bp5u();
		this.gF7y.Ls6m();
		this.fz7s()
	};
	b4f.bdh3x = function(d4h) {
		h4l.bh5m(d4h);
		if (!this.Az3x()) return;
		if (!this.gC7v) {
			this.gC7v = n4r.EW5b.B5G({
				parent: this.bdb3x,
				rightwards: this.el7e == 6
			});
			this.gC7v.s4w("onselect", this.vx2x.g4k(this));
			a3x.Y5d(this.gC7v.kI9z().parentNode, "position", "relative")
		}
		this.gC7v.N5S();
		this.w5B("onemotlayershow");
		if (this.gF7y) {
			this.gF7y.Df4j()
		}
	};
	b4f.vx2x = function(d4h) {
		var bl5q = "[" + d4h.text + "]";
		h4l.w5B(this.fU7N, "focus");
		this.fU7N.focus();
		fL7E.Fh5m(this.fU7N, this.nY0x, bl5q);
		this.fz7s();
		h4l.w5B(this.fU7N, "keyup")
	};
	b4f.fm7f = function(d4h) {
		db6V.dd6X.browser == "ie" && db6V.dd6X.version < "7.0" ? setTimeout(this.fz7s.g4k(this), 0) : this.fz7s()
	};
	b4f.tK1x = function(d4h) {
		this.kW9N();
		if (this.bwm7f) this.bPm2x();
		this.fm7f()
	};
	b4f.Ea4e = function() {
		if (!GUser || !GUser.userId || GUser.userId < 0) {
			top.login();
			return
		}
		return true
	};
	b4f.kh9Y = function() {
		if (!this.Ea4e()) {
			this.fU7N.blur();
			return
		}
		if (!this.Az3x()) {
			this.fU7N.blur();
			return
		}
	};
	b4f.fz7s = function() {
		var br5w = this.bdI3x - Math.ceil(k4o.fe7X(this.fU7N.value) / 2);
		this.bPz2x.innerHTML = br5w >= 0 ? br5w : '<em class="s-fc6">' + br5w + "</em>"
	};
	b4f.bPm2x = function() {
		var CV4Z = 76;
		var bPj2x = function() {
				if (parseInt(co5t) > CV4Z) {
					a3x.Y5d(this.fU7N, "height", "auto");
					a3x.Y5d(this.fU7N, "height", CV4Z + "px");
					a3x.Y5d(this.fU7N, "overflowY", "scroll")
				} else {
					a3x.Y5d(this.fU7N, "height", "auto");
					a3x.Y5d(this.fU7N, "height", co5t);
					a3x.Y5d(this.fU7N, "overflowY", "hidden")
				}
			}.g4k(this);
		var si1x = function(string, number) {
				for (var i = 0, r = ""; i < number; i++) r += string;
				return r
			};
		this.IR6L.innerHTML = this.fU7N.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>").replace(/ {2,}/g, function(space) {
			return si1x("&nbsp;", space.length - 1) + " "
		}) + "&nbsp";
		var co5t = this.IR6L.offsetHeight > this.Sb9S ? this.IR6L.offsetHeight : this.Sb9S;
		co5t += "px";
		var cxG1x = a3x.cW6Q(this.fU7N, "height");
		setTimeout(bPj2x, 10)
	};
	b4f.Qy9p = function() {
		var pI0x = ["overflowX", "overflowY", "fontSize", "fontFamily", "lineHeight"];
		for (var i = 0; i < pI0x.length; i++) {
			a3x.Y5d(this.IR6L, pI0x[i], a3x.cW6Q(this.fU7N, pI0x[i]))
		}
		var dp6j = this.fU7N.offsetWidth - parseInt(a3x.cW6Q(this.fU7N, "paddingLeft")) - parseInt(a3x.cW6Q(this.fU7N, "paddingRight")) + "px";
		a3x.Y5d(this.IR6L, "width", dp6j)
	};
	b4f.bPx2x = function() {
		if (this.bwm7f) {
			if (!a3x.I5N(document.body, "shadow-textarea")[0]) {
				var dy6s = '<div style="position:absolute;border: none;left:-10000px;word-wrap: break-word;overflow: hidden;resize:none" class="shadow-textarea"></div>';
				var f4j = a3x.nf9W(dy6s);
				document.body.appendChild(f4j);
				this.IR6L = a3x.I5N(document.body, "shadow-textarea")[0]
			} else {
				this.IR6L = a3x.I5N(document.body, "shadow-textarea")[0]
			}
			this.Sb9S = parseInt(a3x.cW6Q(this.fU7N, "height"));
			a3x.Y5d(this.fU7N, "overflow", "hidden");
			this.Qy9p()
		}
	};
	b4f.Az3x = function() {
		var d4h = {};
		if (this.kk9b && this.kk9b.buyed != true && this.kk9b.programFeeType >= 10) {
			var bhU4Y = this.kk9b.radio.id,
				bhT4X = "djradio";
			l4p.bAG8y({
				id: bhU4Y,
				radiotype: bhT4X
			})
		} else {
			this.w5B("oncheckvalid", d4h);
			return !d4h.stopped
		}
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		k4o = c4g("nej.u"),
		h4l = c4g("nej.v"),
		H5M = c4g("nej.ut"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	p4t.eQ7J({
		"message_chat-add": {
			url: "/api/msg/private/send",
			filter: function(e4i) {
				this.Wz1x(e4i, 0)
			},
			format: function(m4q, e4i) {
				this.bma5f(m4q.newMsgs);
				if (e4i.justSend) {
					return m4q
				} else {
					return m4q.newMsgs.reverse()
				}
			},
			finaly: function(d4h, e4i) {
				if (!e4i.justSend) {
					h4l.w5B(p4t.ly9p, "listchange", {
						key: e4i.key,
						action: "unshift",
						limit: d4h.limit,
						offset: 0
					})
				}
				this.w5B("onafteritemaddd")
			},
			onmessage: function(cc5h) {
				var cA5F = "";
				if (cc5h == 407) {
					cA5F = "发送内容中不得包含非法字符"
				} else if (cc5h == 406 || cc5h == 405) {
					cA5F = "输入过于频繁，请稍后再试"
				} else if (cc5h == 408) {
					cA5F = "请不要重复发送"
				} else if (cc5h == 315) {
					cA5F = "根据对方设置，你没有该操作权限"
				}
				if ( !! cA5F) n4r.Z5e.N5S({
					tip: cA5F,
					type: 2
				})
			}
		},
		"message_chat-del": {
			url: "/api/msg/private/delete/single",
			format: function(Q5V, e4i) {
				return Q5V.code == 200
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.ly9p, "listchange", {
					key: e4i.key,
					action: "delete",
					data: e4i.data
				});
				this.w5B("onafteritemdelete")
			},
			onmessage: function(cc5h) {}
		},
		"message_chat-list": {
			url: "/api/msg/private/history",
			filter: function(e4i) {
				this.Wz1x(e4i);
				delete e4i.data.offset
			},
			format: function(m4q, e4i) {
				var Kf6Z = m4q.msgs;
				this.bma5f(Kf6Z);
				if (m4q.more) {
					for (var i = Kf6Z.length; i < e4i.limit; i++) {
						Kf6Z.push(null)
					}
				} else {
					return {
						total: e4i.offset + e4i.limit,
						list: Kf6Z
					}
				}
				return Kf6Z
			}
		},
		"message_chat-pull": {
			url: "/api/msg/private/new",
			filter: function(e4i) {
				this.Wz1x(e4i, 0)
			},
			format: function(m4q) {
				return m4q.msgs
			}
		},
		"message_private-list": {
			url: "/api/msg/private/users",
			filter: function(e4i) {},
			format: function(m4q, e4i) {
				var cq5v = m4q.size || 0,
					i4m = m4q.msgs;
				this.blS5X(i4m);
				if (e4i.offset + e4i.limit < cq5v) {
					i4m.length = e4i.limit
				}
				return {
					total: cq5v,
					list: i4m
				}
			}
		},
		"message_private-pull": {
			url: "/api/msg/private/users",
			filter: function(e4i) {
				e4i.data.time = -1
			},
			format: function(m4q, e4i) {
				this.sG1x(e4i.key);
				this.blS5X(m4q.msgs);
				return m4q.msgs
			}
		},
		"message_private-del": {
			type: "GET",
			url: "/api/msg/private/delete",
			filter: function(e4i) {
				var C5H = e4i.id;
				if (C5H) e4i.data = {
					userId: C5H.split("-")[1]
				}
			},
			format: function(Q5V, e4i) {
				return Q5V
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.ly9p, "listchange", {
					key: e4i.key,
					action: "refresh"
				})
			},
			onmessage: function(cc5h) {}
		},
		"message_comment-list": {
			url: "/api/v1/user/comments/{uid}",
			format: function(m4q, e4i) {
				if (e4i.data.offset == 0) this.w5B("onnewcount", m4q.newCount);
				this.bOD2x(m4q);
				return {
					total: m4q.total || 0,
					list: m4q.comments
				}
			}
		},
		"message_comment-del": {
			url: "/api/user/comments/delete",
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.ly9p, "listchange", d4h)
			}
		},
		"message_user_comment-reply": {
			url: "/api/user/comments/reply",
			format: function(Q5V) {
				this.w5B("onreply");
				n4r.Z5e.N5S({
					tip: "回复成功"
				});
				return Q5V
			},
			onmessage: function() {
				n4r.Z5e.N5S({
					tip: "回复失败，请稍后再试",
					type: 2
				})
			}
		},
		"message_resource_comment-reply": {
			url: "/api/resource/comments/reply"
		},
		"message_notify-list": {
			url: "/api/msg/notices",
			filter: function(e4i) {},
			format: function(m4q, e4i) {
				if (e4i.data.offset == 0) this.w5B("onnewcount", m4q.newCount);
				this.bOI2x(m4q);
				return {
					total: m4q.size || 0,
					list: m4q.notices
				}
			}
		},
		"message_notify-del": {
			url: "TODO",
			format: function(Q5V, e4i) {
				return e4i.ext
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.ly9p, "listchange", {
					key: e4i.key,
					action: "refresh"
				})
			},
			onmessage: function(cc5h) {
				l4p.bnS5X({
					txt: "通知删除失败！"
				})
			}
		},
		"message_at-list": {
			url: "/api/forwards/get",
			filter: function(e4i) {},
			format: function(m4q, e4i) {
				k4o.bc5h(m4q.forwards, function(q4u, r4v) {
					q4u.isNew = r4v < m4q.newCount
				});
				m4q.forwards.length = e4i.limit;
				return {
					total: m4q.size,
					list: m4q.forwards
				}
			}
		},
		"message_at-pull": {
			url: "/api/forwards/get",
			filter: function(e4i) {
				this.Wz1x(e4i, 0)
			},
			format: function(m4q, e4i) {
				return m4q.forwards
			}
		},
		"message_at-del": {
			url: "TODO",
			format: function(Q5V, e4i) {
				return e4i.ext
			},
			finaly: function(d4h, e4i) {
				h4l.w5B(p4t.ly9p, "listchange", {
					key: e4i.key,
					action: "refresh"
				})
			},
			onmessage: function(cc5h) {
				l4p.bnS5X({
					txt: "@消息删除失败！"
				})
			}
		},
		"event-like": {
			url: "/api/resource/like",
			onload: "oneventlike",
			filter: function(e4i, bb5g) {
				if (e4i.like) {
					bb5g.url = "/api/resource/like";
					bb5g.onload = "oneventlike"
				} else {
					bb5g.url = "/api/resource/unlike";
					bb5g.onload = "oneventunlike"
				}
			},
			format: function(m4q, e4i) {
				m4q.id = e4i.id;
				m4q.isInner = !! e4i.isInner;
				return m4q
			}
		}
	});
	p4t.ly9p = NEJ.C();
	b4f = p4t.ly9p.O5T(p4t.gZ8R);
	K5P = p4t.ly9p.cf5k;
	b4f.vC2x = function(e4i, q4u) {
		if (!k4o.en7g(q4u)) {
			return K5P.vC2x.apply(this, arguments)
		}
		k4o.bc5h(q4u, function(j4n) {
			K5P.vC2x.apply(this, [e4i, j4n])
		}, this);
		return {
			limit: q4u.length
		}
	};
	b4f.bOJ2x = function(q4u) {
		if (!k4o.en7g(q4u)) {
			if (q4u.type == 1) {
				q4u.json = this.btW7P(q4u.json, q4u.id)
			} else if (q4u.type == 2) {
				q4u.json = JSON.parse(q4u.json);
				q4u.json.resource = this.btW7P(q4u.json.resource)
			} else if (q4u.type == 3) {
				q4u.json = JSON.parse(q4u.json)
			}
			return
		}
		k4o.bc5h(q4u, this.bOJ2x, this)
	};
	b4f.btW7P = function(qQ0x) {
		if (k4o.fn7g(qQ0x)) {
			qQ0x = JSON.parse(qQ0x)
		}
		if ( !! qQ0x.json && k4o.fn7g(qQ0x.json)) {
			qQ0x.json = JSON.parse(qQ0x.json);
			if ( !! qQ0x.json.event && !! qQ0x.json.event.json && k4o.fn7g(qQ0x.json.event.json)) {
				qQ0x.json.event.json = JSON.parse(qQ0x.json.event.json)
			}
		}
		return qQ0x
	};
	b4f.bma5f = function(q4u) {
		if (!k4o.en7g(q4u)) {
			q4u.msg = JSON.parse(q4u.msg);
			return
		}
		k4o.bc5h(q4u, this.bma5f, this)
	};
	b4f.blS5X = function(q4u) {
		if (!k4o.en7g(q4u)) {
			q4u.id = q4u.toUser.userId + "-" + q4u.fromUser.userId;
			q4u.lastMsg = JSON.parse(q4u.lastMsg);
			return
		}
		k4o.bc5h(q4u, this.blS5X, this)
	};
	b4f.bOD2x = function(j4n) {
		var bu5z = {
			0: "/playlist?id={id}",
			1: "/dj?id={id}",
			2: "/event?id={id}&uid={userId}",
			3: "/album?id={id}",
			4: "/song?id={id}",
			5: "/mv?id={id}",
			6: "/topic?id={id}",
			62: "/video?id={id}&toast=true"
		};
		k4o.bc5h(j4n.comments, function(q4u, r4v) {
			try {
				q4u.resourceJson = JSON.parse(q4u.resourceJson)
			} catch (e) {
				q4u.resourceJson = null
			}
			if (q4u.resourceJson) {
				if (q4u.resourceType !== 62 || q4u.resourceJson.id) {
					q4u.resUrl = l4p.Tj0x(bu5z[q4u.resourceType], q4u.resourceJson)
				}
			}
		}, this)
	};
	b4f.bOI2x = function() {
		var bPa2x = function(bI5N) {
				var Q5V, cC6w = "";
				try {
					Q5V = JSON.parse(bI5N.json)
				} catch (e) {
					Q5V = {}
				}
				switch (bI5N.type) {
				case 12:
					cC6w = "我创建了歌单";
					cC6w = cC6w + "「" + Q5V.playlist.name + "」by " + Q5V.playlist.creator.nickname;
					break;
				case 13:
					cC6w = "我分享了歌单";
					cC6w = cC6w + "「" + k4o.dS7L(Q5V.playlist.name) + "」by " + Q5V.playlist.creator.nickname;
					break;
				case 14:
					cC6w = "我收藏了歌单";
					cC6w = cC6w + "「" + k4o.dS7L(Q5V.playlist.name) + "」by " + Q5V.playlist.creator.nickname;
					break;
				case 15:
				case 16:
					cC6w = "我创建了节目";
					cC6w = cC6w + "「" + Q5V.program.name + "」by " + Q5V.program.dj.nickname;
					break;
				case 17:
					cC6w = "我分享了节目";
					cC6w = cC6w + "「" + Q5V.program.name + "」by " + Q5V.program.dj.nickname;
					break;
				case 18:
					cC6w = "我分享了歌曲";
					cC6w = cC6w + "「" + Q5V.song.name + "」by ";
					for (var i = 0, l = Q5V.song.artists.length; i < l; i++) {
						cC6w = cC6w + Q5V.song.artists[i].name;
						if (i < l - 1) cC6w = cC6w + "/"
					}
					break;
				case 19:
					cC6w = "我分享了专辑";
					cC6w = cC6w + "「" + Q5V.album.name + "」by " + Q5V.album.artist.name;
					break;
				case 36:
					cC6w = "我分享了歌手";
					cC6w = cC6w + "「" + Q5V.resource.name + "」";
					break;
				case 21:
					cC6w = "我分享了MV";
					cC6w = cC6w + "「" + Q5V.mv.name + "」by " + Q5V.mv.artistName;
					break;
				case 22:
					cC6w = "我的动态:" + (l4p.wo2x(k4o.dS7L(Q5V.msg), "s-fc3") || "转发");
					break;
				case 23:
					cC6w = "我收藏了节目";
					cC6w = cC6w + "「" + Q5V.program.name + "」by " + Q5V.program.dj.nickname;
					break;
				case 24:
					cC6w = "我分享了专栏文章";
					cC6w = cC6w + "「" + Q5V.topic.mainTitle + "」";
					break;
				case 28:
					cC6w = "我分享了电台";
					cC6w = cC6w + "「" + Q5V.djRadio.name + "」by " + Q5V.djRadio.dj.nickname;
					break;
				case 31:
					cC6w = "我分享了评论：";
					cC6w = cC6w + l4p.wo2x((Q5V.resource || X5c).content || "");
					break;
				case 35:
					cC6w = "我的动态:" + l4p.wo2x(k4o.dS7L(Q5V.msg), "s-fc3") + (bI5N.pics && bI5N.pics.length ? "[图片]" : "");
					break;
				case 39:
					cC6w = "我发布了视频";
					cC6w = cC6w + "「" + Q5V.video.title + "」";
					break;
				case 41:
					cC6w = "我分享了视频";
					cC6w = cC6w + "「" + Q5V.video.title + "」";
					break
				}
				Q5V.str = cC6w;
				return Q5V
			};
		var bPi2x = function(Rh9Y) {
				var bu5z = {
					A_PL_0: "playlist",
					R_MV_5: "mv",
					A_TO_6: "topic",
					A_DJ_1: "dj",
					A_EV_2: "event",
					R_AL_3: "album",
					R_SO_4: "song",
					A_DR_14: "radio",
					R_VI_62: "video"
				};
				if (/^(\w_\w{2}_\d+)+_(.+)$/.test(Rh9Y)) {
					var t4x = bu5z[RegExp.$1],
						fQ7J = RegExp.$2.split("_");
					return "/" + t4x + "?id=" + fQ7J[0] + (t4x == "event" ? "&uid=" + fQ7J[1] : "") + "&_hash=comment-box&toast=true"
				}
			};
		var bPl2x = function(dX7Q) {
				var dX7Q = JSON.parse(dX7Q);
				switch (dX7Q.type) {
				case 1:
					if (!dX7Q.track) return;
					dX7Q.msg = "赞了你的动态";
					dX7Q.url = "/event?toast=true&id=" + dX7Q.track.id + "&uid=" + GUser.userId;
					dX7Q.track = bPa2x(dX7Q.track);
					break;
				case 2:
					dX7Q.msg = "收藏了你的歌单";
					dX7Q.url = "/playlist?id=" + dX7Q.playlist.id;
					dX7Q.res = dX7Q.playlist;
					break;
				case 3:
					dX7Q.msg = "分享了你的歌单";
					dX7Q.url = "/playlist?id=" + dX7Q.playlist.id;
					dX7Q.res = dX7Q.playlist;
					break;
				case 4:
					dX7Q.msg = "分享了你的节目";
					dX7Q.url = "/dj?id=" + dX7Q.program.id;
					dX7Q.res = dX7Q.program;
					break;
				case 5:
					dX7Q.msg = "收藏了你的节目";
					dX7Q.url = "/dj?id=" + dX7Q.program.id;
					dX7Q.res = dX7Q.program;
					break;
				case 6:
					dX7Q.msg = "赞了你的评论";
					dX7Q.url = bPi2x(dX7Q.comment.threadId);
					dX7Q.comment = dX7Q.comment;
					break;
				case 7:
					dX7Q.msg = "赞了你的节目";
					dX7Q.url = "/dj?id=" + dX7Q.program.id;
					dX7Q.res = dX7Q.program;
					break;
				case 8:
					dX7Q.msg = "订阅了你的电台";
					dX7Q.url = "/radio?id=" + dX7Q.djRadio.id;
					dX7Q.res = dX7Q.djRadio;
					break;
				case 9:
					dX7Q.msg = "赞了你的专栏文章";
					dX7Q.url = "/topic?id=" + dX7Q.topic.id;
					dX7Q.topic = dX7Q.topic;
					break;
				case 10:
					if (!dX7Q.generalNotice) return;
					dX7Q.msg = dX7Q.generalNotice.actionDesc;
					dX7Q.url = dX7Q.generalNotice.webUrl;
					if (dX7Q.url.indexOf("/video?id=") == 0) {
						dX7Q.url += "&toast=true"
					}
					dX7Q.generalContent = dX7Q.generalNotice.content;
					break
				}
				return dX7Q
			};
		return function(j4n) {
			k4o.bc5h(j4n.notices, function(q4u, r4v) {
				q4u.notice = bPl2x(q4u.notice)
			}, this)
		}
	}();
	b4f.Wz1x = function(e4i, r4v, J5O) {
		var by5D = -1,
			i4m = this.gQ8I(e4i.key),
			bi5n = e4i.offset;
		bi5n = bi5n != null ? bi5n : i4m.length;
		if (bi5n > 0 && i4m.length > 0) {
			var bPO2x = 0;
			r4v = r4v != null ? r4v : bi5n - 1;
			while (r4v >= 0 && !i4m[r4v]) {
				r4v--;
				bPO2x++
			}
			if (r4v >= 0 && i4m[r4v]) {
				by5D = i4m[r4v][J5O || "time"]
			}
		}
		e4i.data.time = by5D
	};
	b4f.bPQ2x = function(e4i) {
		e4i.onload = this.btX7Q.g4k(this);
		e4i.onerror = this.btX7Q.g4k(this);
		this.cj5o("message_resource_comment-reply", e4i)
	};
	b4f.btX7Q = function(d4h) {
		this.w5B("onreply2", d4h)
	};
	b4f.bdv3x = function(e4i) {
		this.cj5o("message_user_comment-reply", e4i)
	};
	b4f.AO3x = function(d4h) {
		this.w5B("onreply", d4h)
	};
	b4f.bbc2x = function(e4i) {
		e4i.onload = this.PC8u.g4k(this);
		this.cj5o("message_chat-add", e4i)
	};
	b4f.PC8u = function(d4h) {
		this.w5B("onsend", d4h)
	};
	b4f.xv2x = function(e4i) {
		this.cj5o("event-like", e4i)
	};
	H5M.fu7n.B5G({
		element: p4t.ly9p,
		event: "listchange"
	})
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		v5A = c4g("nej.j"),
		X5c = c4g("nej.o"),
		k4o = c4g("nej.u"),
		h4l = c4g("nej.v"),
		db6V = c4g("nej.p"),
		D5I = c4g("nm.w"),
		l4p = c4g("nm.x"),
		bF5K = c4g("nej.ui"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.wH2x = NEJ.C();
	b4f = n4r.wH2x.O5T(n4r.dU7N, !0);
	K5P = n4r.wH2x.prototype;
	b4f.bZ5e = function() {
		this.ca5f = "m-msg-private-send"
	};
	b4f.bR5W = function() {
		this.cb5g();
		var bJ5O = a3x.I5N(this.o4s, "j-flag");
		this.sE1x = {
			parent: bJ5O[1],
			err: bJ5O[0]
		};
		this.eM7F = {
			parent: bJ5O[2],
			type: 4,
			nomention: true,
			numLimit: 200,
			onsubmit: this.PF8x.g4k(this)
		};
		if (db6V.dd6X.browser == "ie" && db6V.dd6X.version < "8.0") {
			a3x.Y5d(bJ5O[0], "position", "relative");
			a3x.Y5d(bJ5O[0], "zIndex", "10")
		}
	};
	b4f.bj5o = function(e4i) {
		e4i.parent = document.body;
		e4i.clazz = "";
		e4i.onclose = function() {
			this.bC5H()
		}.g4k(this);
		e4i.mask = true;
		this.bk5p(e4i); !! e4i.receiver && (this.sE1x.receiver = e4i.receiver);
		this.ob0x = D5I.Eu4y.B5G(this.sE1x);
		this.dF6z = D5I.AB3x.B5G(this.eM7F);
		this.R5W = p4t.ly9p.B5G({
			onsend: this.PC8u.g4k(this),
			onerror: function() {
				this.dF6z.vz2x()
			}.g4k(this)
		})
	};
	b4f.bC5H = function() {
		this.bG5L();
		if ( !! this.ob0x) {
			this.ob0x.S5X();
			delete this.ob0x
		}
		if ( !! this.dF6z) {
			this.dF6z.S5X();
			delete this.dF6z
		}
	};
	b4f.PF8x = function(A5F) {
		if ( !! A5F) {
			var Ne7X = this.ob0x.Mp7i();
			if ( !! Ne7X.length) {
				this.R5W.bbc2x({
					data: {
						type: "text",
						msg: A5F,
						userIds: JSON.stringify(Ne7X)
					},
					justSend: true
				});
				this.dF6z.w5B("onloading")
			} else {
				l4p.eU7N({
					title: "提示",
					message: "请选择私信发送对象"
				})
			}
		} else {
			l4p.eU7N({
				title: "提示",
				message: "私信内容不能为空"
			})
		}
	};
	b4f.PC8u = function(m4q) {
		this.bp5u();
		if (m4q.code == 200) {
			n4r.Z5e.N5S({
				tip: "发送成功"
			})
		} else {
			n4r.Z5e.N5S({
				tip: "发送失败",
				type: 2
			})
		}
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		h4l = c4g("nej.v"),
		a3x = c4g("nej.e"),
		v5A = c4g("nej.j"),
		k4o = c4g("nej.u"),
		n4r = c4g("nm.l"),
		D5I = c4g("nm.w"),
		bF5K = c4g("nej.ui"),
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		b4f, K5P;
	n4r.blF5K = NEJ.C();
	b4f = n4r.blF5K.O5T(n4r.dU7N);
	K5P = n4r.blF5K.cf5k;
	b4f.bZ5e = function() {
		this.ca5f = "m-question"
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.dQ7J = i4m[1];
		this.oa0x = i4m[2];
		this.ob0x = D5I.JT6N.B5G({
			filter: this.bQO3x,
			parent: i4m[0]
		});
		h4l.s4w(this.o4s, "click", this.bO5T.g4k(this))
	};
	b4f.bj5o = function(e4i) {
		e4i.parent = e4i.parent || document.body;
		e4i.title = "回答安全问题";
		e4i.draggable = !0;
		e4i.destroyalbe = !0;
		e4i.mask = true;
		this.bk5p(e4i);
		this.ob0x.kS9J(e4i.data || [])
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.dQ7J.value = ""
	};
	b4f.zH3x = function() {
		this.bp5u()
	};
	b4f.bO5T = function(d4h) {
		var f4j = h4l.U5Z(d4h, "d:action");
		switch (a3x.u5z(f4j, "action")) {
		case "back":
			this.w5B("onback");
			this.bp5u();
			break;
		case "next":
			var btZ7S = this.dQ7J.value.trim();
			if (!btZ7S) {
				this.hb8T("请输入回答");
				return
			}
			var j4n = {
				questionId: this.ob0x.fv7o().id,
				answer: k4o.le9V(btZ7S)
			};
			this.hb8T(null);
			v5A.bq5v("/store/api/security/validateAnswer", {
				type: "json",
				method: "post",
				data: k4o.cY6S(j4n),
				onload: this.bua7T.g4k(this),
				onerror: this.bua7T.g4k(this)
			});
			break
		}
	};
	b4f.bQO3x = function(q4u) {
		return q4u.question
	};
	b4f.hb8T = function(cA5F) {
		if (cA5F) {
			this.oa0x.innerHTML = '<i class="u-icn u-icn-25"></i>' + cA5F;
			a3x.x5C(this.oa0x, "f-hide")
		} else {
			a3x.z5E(this.oa0x, "f-hide")
		}
	};
	var bub7U = function(d4h) {
			try {
				top.doMsgToServiceAction(d4h)
			} catch (e) {}
		};
	b4f.bua7T = function(d4h) {
		if (d4h && d4h.code == 200) {
			this.w5B("onnext");
			this.bp5u()
		} else {
			var bu5z = {
				"-3": "回答错误，您还有" + d4h.times + "次机会！"
			};
			if (d4h.code == -2 || d4h.code == -4) {
				l4p.eU7N({
					clazz: "m-layer-w2",
					title: "更换手机号",
					message: "<p>帐号已被锁定</p>" + '<p class="f-mgt10">回答错误的次数过多，您的帐号已被锁定，将无法进行任何商城交易，<br/>' + '请私信<a class="s-fc7" href="javascript:;" data-action="kf">@云音乐客服</a> 解锁。</p>',
					btntxt: "知道了",
					action: bub7U
				});
				this.bp5u()
			} else {
				this.hb8T(bu5z[d4h.code] || "回答出错")
			}
		}
	};
	l4p.buc7V = function(e4i) {
		var bud7W = function(d4h) {
				if (d4h && d4h.code == 200) {
					e4i.data = d4h.data;
					n4r.blF5K.B5G(e4i).N5S()
				} else {
					l4p.eU7N({
						clazz: "m-layer-w2",
						message: '私信 <a class="s-fc7" href="javascript:;" data-action="kf">@云音乐客服</a>',
						action: bub7U
					})
				}
			};
		v5A.bq5v("/store/api/security/getQuestion", {
			type: "json",
			method: "get",
			onload: bud7W,
			onerror: bud7W
		})
	}
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		ch5m = c4g("nej.ut"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.We0x = NEJ.C();
	b4f = n4r.We0x.O5T(ch5m.cz5E);
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.dY7R = e4i;
		this.bue7X = e4i.mobile;
		this.fF7y = e4i.countrycode || "86";
		this.R5W = p4t.mx9o.B5G();
		this.R5W.s4w("onsendcaptcha", this.wd2x.g4k(this));
		this.R5W.s4w("onsendcaptchaerror", this.Lf6Z.g4k(this));
		this.R5W.s4w("onchangemobile", this.bRx3x.g4k(this));
		this.R5W.s4w("onchangemobileerror", this.bRz3x.g4k(this));
		this.blA5F()
	};
	b4f.bC5H = function() {
		this.bG5L();
		this.R5W.S5X();
		if (this.ew7p) this.ew7p.S5X();
		if (this.GA5F) this.GA5F.S5X()
	};
	b4f.blA5F = function() {
		if (this.ew7p) this.ew7p.bp5u();
		if (this.GA5F) this.GA5F.S5X();
		this.GA5F = l4p.jg8Y({
			title: "更换手机号",
			clazz: "m-layer-find",
			txt: "txt-mobilestatus",
			onaction: function(d4h) {
				if (d4h.action == "valid") {
					this.R5W.wD2x({
						data: {
							ctcode: this.fF7y,
							cellphone: this.bue7X
						}
					})
				} else {
					l4p.buc7V({
						title: "更换手机号",
						onback: this.blA5F.g4k(this),
						onnext: this.buf7Y.g4k(this)
					})
				}
			}.g4k(this)
		})
	};
	b4f.wd2x = function(bm5r) {
		this.ew7p = n4r.qf0x.N5S({
			title: "更换手机号",
			mobile: this.bue7X,
			okbutton: "下一步",
			onok: this.buf7Y.g4k(this),
			backbutton: "&lt;&nbsp;&nbsp;上一步",
			onback: this.blA5F.g4k(this)
		})
	};
	b4f.Lf6Z = function() {
		n4r.Z5e.N5S({
			tip: "更换失败，请重试",
			type: 2
		})
	};
	b4f.buf7Y = function(do6i) {
		var do6i = do6i || {};
		this.ew7p = n4r.qf0x.N5S({
			title: "更换手机号",
			mobileLabel: "新手机号：",
			okbutton: "完成",
			onok: this.bRO4S.g4k(this, do6i.captcha)
		})
	};
	b4f.bRO4S = function(bRP4T, bm5r) {
		this.bug7Z = bm5r.mobile;
		this.cy5D = bm5r.captcha;
		this.R5W.clG8y({
			data: {
				phone: this.bug7Z,
				captcha: this.cy5D,
				oldcaptcha: bRP4T
			}
		})
	};
	b4f.bRx3x = function(bm5r) {
		this.ew7p.bp5u();
		n4r.Z5e.N5S({
			tip: "更换成功"
		});
		if (this.dY7R.onsuccess) this.dY7R.onsuccess({
			mobile: this.bug7Z
		})
	};
	b4f.bRz3x = function(bm5r) {
		if (bm5r.code == 506) {
			this.ew7p.ct5y(false);
			this.ew7p.bT5Y(bm5r.message, "mobile")
		} else {
			this.ew7p.bp5u();
			n4r.Z5e.N5S({
				tip: "更换失败，请重试",
				type: 2
			})
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
		H5M = c4g("nej.ut"),
		k4o = c4g("nej.u"),
		l4p = c4g("nm.x"),
		n4r = c4g("nm.l"),
		di6c = c4g("api"),
		D5I = c4g("nm.w");
	var blt5y = null,
		bui7b = null;
	var bRX4b = function(eX7Q, buj7c) {
			if (blt5y) blt5y.S5X();
			blt5y = n4r.We0x.B5G({
				title: "更换手机号",
				mobile: eX7Q,
				onsuccess: function(bm5r) {
					if (buj7c) buj7c({
						cellphone: bm5r.mobile
					})
				}
			})
		};
	var bRZ4d = function(e4i) {
			v5A.bq5v("/api/sms/captcha/sent", {
				type: "json",
				query: {
					cellphone: e4i.mobile,
					channel: "new"
				},
				onload: function(d4h) {
					if (d4h.code != 200) return n4r.Z5e.N5S({
						tip: "验证码发送失败",
						type: 2
					});
					bui7b = n4r.qf0x.N5S({
						title: e4i.title || "验证手机号",
						mobile: e4i.mobile,
						okbutton: e4i.ntext || "下一步",
						onok: function(bm5r) {
							bui7b.bp5u();
							if (e4i.onnext) e4i.onnext(bm5r)
						}
					})
				},
				onerror: function() {
					n4r.Z5e.N5S({
						tip: "验证码发送失败",
						type: 2
					})
				}
			})
		};
	di6c.changePhone = bRX4b;
	di6c.phoneCode = bRZ4d;
	di6c.validateQuestion = l4p.buc7V
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		ba5f = c4g("nej.h"),
		M5R = c4g("nej.p");
	var jP8H = {
		opacity: 1,
		"z-index": 1,
		background: 1,
		"font-weight": 1,
		filter: 1
	};
	ba5f.bxi8a = function(hE8w) {
		return jP8H[hE8w] === undefined && hE8w.indexOf("color") < 0
	};
	ba5f.Th0x = function(f4j, my9p, pf0x) {
		pf0x = pf0x.slice(0, -1);
		a3x.Y5d(f4j, "transition", pf0x);
		a3x.fE7x(f4j, my9p);
		return this
	};
	ba5f.Oq8i = function(f4j, dn6h, nm9d) {
		a3x.fE7x(f4j, dn6h);
		a3x.Y5d(f4j, "transition", "none");
		nm9d.call(null, dn6h);
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		ba5f = c4g("nej.h"),
		M5R = c4g("nej.p");
	if (M5R.mh9Y.trident1) return;
	ba5f.Dn4r = function() {
		return !0
	}
})();
(function() {
	var c4g = NEJ.P,
		M5R = c4g("nej.ut"),
		b4f;
	if ( !! M5R.bbv2x) return;
	M5R.bbv2x = NEJ.C();
	b4f = M5R.bbv2x.O5T(M5R.EB4F);
	b4f.bj5o = function(e4i) {
		e4i = NEJ.X({}, e4i);
		e4i.timing = "easeout";
		this.bk5p(e4i)
	}
})();
(function() {
	var c4g = NEJ.P,
		M5R = c4g("nej.ut"),
		b4f;
	if ( !! M5R.bbw2x) return;
	M5R.bbw2x = NEJ.C();
	b4f = M5R.bbw2x.O5T(M5R.EB4F);
	b4f.bj5o = function(e4i) {
		e4i = NEJ.X({}, e4i);
		e4i.timing = "easeinout";
		this.bk5p(e4i)
	}
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		ba5f = c4g("nej.h"),
		M5R = c4g("nej.p"),
		cO6I = c4g("nej.x"),
		ch5m = c4g("nej.ut");
	if (M5R.mh9Y.trident) return;
	var bxh8Z = {
		linear: ch5m.tm1x,
		"ease-in": ch5m.Dd4h,
		"ease-out": ch5m.bbv2x,
		"ease-in-out": ch5m.bbw2x
	};
	ba5f.Th0x = function() {
		var bUf4j = function(my9p, pf0x) {
				var cC6w = "";
				k4o.ei7b(my9p, function(A5F, T5Y) {
					cC6w += pf0x.replace("all", T5Y)
				});
				return cC6w
			};
		var bTY4c = function(A5F, hE8w) {
				if (hE8w === "filter") {
					A5F = k4o.FG5L(A5F, 0);
					A5F = "alpha(opacity=" + A5F + ")"
				}
				if (hE8w === "z-index") A5F = k4o.FG5L(A5F, 0);
				return A5F
			};
		var bTU4Y = function(A5F) {
				return bxh8Z[A5F.split(" ")[2]]
			};
		var bTR4V = function(f4j, A5F, my9p, nm9d, r4v) {
				var A5F = A5F.split(" "),
					hE8w = A5F[0],
					dI6C = parseFloat(a3x.cW6Q(f4j, hE8w)) || 0,
					nz0x = parseFloat(my9p[hE8w]) || 0,
					bTN4R = bxh8Z[A5F[2]],
					bbD2x = A5F[1].slice(0, -1) * 1e3 + A5F[3].slice(0, 1) * 1e3;
				if (bbD2x >= f4j.sumTime) {
					f4j.sumTime = bbD2x;
					f4j.isLastOne = r4v
				}
				var Ox8p = nej.p.dd6X.engine === "trident" && nej.p.dd6X.release - 5 < 0;
				if (hE8w === "opacity" && Ox8p) {
					hE8w = "filter";
					var dC6w = a3x.cW6Q(f4j, hE8w);
					dI6C = parseFloat(dC6w.split("=")[1]) || 0;
					nz0x = nz0x * 100
				}
				var e4i = {
					from: {
						offset: dI6C
					},
					to: {
						offset: nz0x
					},
					duration: bbD2x,
					onupdate: function(bi5n) {
						var A5F = bi5n.offset;
						if (!ba5f.bxi8a(hE8w)) {
							A5F = bTY4c(A5F, hE8w);
							a3x.Y5d(f4j, hE8w, A5F)
						} else {
							a3x.Y5d(f4j, hE8w, A5F + "px")
						}
					},
					onstop: function(hE8w) {
						var Ij5o = f4j.effects[r4v];
						if (!Ij5o) return;
						Ij5o = bTN4R.S5X(Ij5o);
						if (f4j.isLastOne === r4v) nm9d.apply(this)
					}.g4k(this, r4v)
				};
				return e4i
			};
		return ba5f.Th0x.ef7Y(function(d4h) {
			d4h.stopped = !0;
			var i4m = d4h.args;
			var f4j = i4m[0],
				my9p = i4m[1],
				pf0x = i4m[2],
				nm9d = i4m[3];
			f4j.sumTime = 0, f4j.isLastOne = 0;
			var bxf8X = [];
			if (pf0x.indexOf("all") > -1) pf0x = bUf4j(my9p, pf0x);
			var bbH2x = pf0x.slice(0, -1);
			bbH2x = bbH2x.split(",");
			f4j.effects = [];
			k4o.bc5h(bbH2x, function(A5F, r4v) {
				var e4i = bTR4V(f4j, A5F, my9p, nm9d, r4v);
				bxf8X.push({
					o: e4i,
					c: bTU4Y(A5F)
				})
			});
			k4o.bc5h(bxf8X, function(q4u, r4v) {
				var Ij5o = q4u.c.B5G(q4u.o);
				f4j.effects[r4v] = Ij5o;
				Ij5o.eC7v()
			});
			return this
		})
	}();
	ba5f.Oq8i = ba5f.Oq8i.ef7Y(function(d4h) {
		d4h.stopped = !0;
		var i4m = d4h.args;
		var f4j = i4m[0];
		k4o.bc5h(f4j.effects, function(X5c) {
			X5c.bh5m()
		});
		f4j.effects = [];
		return this
	})
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		ba5f = c4g("nej.h"),
		a3x = c4g("nej.e"),
		M5R = c4g("nej.p");
	if (M5R.mh9Y.gecko) return;
	ba5f.Th0x = function(f4j, my9p, pf0x) {
		pf0x = pf0x.slice(0, -1);
		a3x.Y5d(f4j, "transition", pf0x);
		setTimeout(function() {
			a3x.fE7x(f4j, my9p)
		}, 33);
		return this
	}
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		ba5f = c4g("nej.h"),
		M5R = c4g("nej.p");
	if (M5R.mh9Y.webkit) return
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		ba5f = c4g("nej.h"),
		M5R = c4g("nej.p");
	if (M5R.mh9Y.presto) return
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		k4o = c4g("nej.u"),
		ba5f = c4g("nej.h"),
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		M5R = c4g("nej.ut"),
		sz1x;
	if ( !! M5R.qr0x) return;
	M5R.qr0x = NEJ.C();
	sz1x = M5R.qr0x.O5T(M5R.cz5E);
	sz1x.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.Il5q = a3x.y5D(e4i.node);
		this.bxe8W = e4i.styles || [];
		this.bxd8V = e4i.onstop || bn5s;
		this.bbN2x = e4i.transition || [];
		this.OE8w = {};
		this.bxb8T = this.bTb4f();
		if ( !! ba5f.Dn4r && ba5f.Dn4r()) {
			setTimeout(this.Dn4r.g4k(this), this.bbR2x * 1e3)
		} else {
			this.bS5X([
				[this.Il5q, "transitionend", this.Dn4r.g4k(this)]
			])
		}
	};
	sz1x.bC5H = function() {
		if ( !! this.Io6i) {
			this.Io6i = window.clearInterval(this.Io6i)
		}
		delete this.Il5q;
		delete this.bxe8W;
		delete this.bxb8T;
		delete this.OE8w;
		delete this.bbT3x;
		delete this.bbN2x;
		delete this.Io6i;
		this.bG5L()
	};
	sz1x.Dn4r = function(d4h) {
		if ( !! ba5f.Dn4r && ba5f.Dn4r()) {
			this.bbU3x = !1;
			this.bh5m();
			return
		}
		if ( !! this.bbU3x && this.bSV4Z(d4h)) {
			this.bbU3x = !1;
			this.bh5m()
		}
	};
	sz1x.bSV4Z = function(d4h) {
		var T5Y = d4h.propertyName;
		if (T5Y === this.bbT3x || T5Y.indexOf(this.bbT3x) > -1) return !0;
		else return !1
	};
	sz1x.bTb4f = function() {
		var bSU4Y = function(cd5i) {
				var i4m = cd5i.split(":"),
					hE8w = i4m[0],
					A5F = i4m[1],
					f4j = this.Il5q;
				if (A5F.indexOf("=") > -1) {
					var oo0x = parseInt(a3x.cW6Q(f4j, hE8w)) || 0;
					var db6V = parseInt(A5F.split("=")[1]);
					if (A5F.indexOf("+") > -1) A5F = oo0x + db6V;
					else A5F = oo0x - db6V
				}
				if (ba5f.bxi8a(hE8w)) {
					if (A5F.toString().indexOf("px") < 0) A5F += "px"
				}
				this.OE8w[hE8w] = A5F
			};
		var bSM4Q = function(r4v) {
				if (!this.bbN2x[r4v]) return "";
				var qL0x = this.bbN2x[r4v],
					H5M = qL0x.duration + qL0x.delay;
				if (H5M >= this.bbR2x) {
					this.bbR2x = H5M;
					this.bbT3x = qL0x.property
				}
				return qL0x.property + " " + qL0x.duration + "s " + qL0x.timing + " " + qL0x.delay + "s,"
			};
		return function() {
			var bwZ8R = "";
			this.bbR2x = 0;
			k4o.bc5h(this.bxe8W, function(cd5i, r4v) {
				bSU4Y.call(this, cd5i);
				bwZ8R += bSM4Q.call(this, r4v)
			}.g4k(this));
			return bwZ8R
		}
	}();
	sz1x.bSG4K = function() {
		this.xA2x = {};
		k4o.ei7b(this.OE8w, function(A5F, hE8w) {
			this.xA2x[hE8w] = a3x.cW6Q(this.Il5q, hE8w)
		}.g4k(this));
		this.w5B("onplaystate", this.xA2x)
	};
	sz1x.ui1x = function() {
		this.bbU3x = !0;
		ba5f.Th0x(this.Il5q, this.OE8w, this.bxb8T, this.bxd8V);
		this.Io6i = window.setInterval(this.bSG4K.g4k(this), 49);
		return this
	};
	sz1x.bh5m = function() {
		ba5f.Oq8i(this.Il5q, this.OE8w, this.bxd8V);
		this.Io6i = window.clearInterval(this.Io6i);
		return this
	};
	sz1x.cxw1x = function() {};
	sz1x.cxx1x = function() {}
})();
(function() {
	var c4g = NEJ.P,
		bn5s = NEJ.F,
		k4o = c4g("nej.u"),
		a3x = c4g("nej.e"),
		k4o = c4g("nej.u"),
		M5R = c4g("nej.ut");
	a3x.SO0x = function(e4i) {
		e4i = e4i || {};
		e4i.onstop = e4i.onstop || bn5s;
		e4i.onplaystate = e4i.onplaystate || bn5s;
		return e4i
	};
	a3x.bwV8N = function() {
		var bSs4w = function(f4j, SN0x, Ox8p) {
				var gk7d, ey7r = true;
				if ( !! Ox8p) {
					k4o.ei7b(SN0x, function(A5F, T5Y) {
						if (T5Y === "opacity") {
							T5Y = "filter";
							var dC6w = a3x.cW6Q(f4j, T5Y);
							if (dC6w === "") {
								a3x.Y5d(f4j, "filter", "alpha(opacity=100)");
								gk7d = 100
							} else {
								gk7d = parseFloat(dC6w.split("=")[1]) || 0
							}
							A5F = A5F * 100
						} else {
							gk7d = a3x.cW6Q(f4j, T5Y)
						}
						if (parseInt(gk7d) === A5F) ey7r = false
					}.g4k(this))
				} else {
					k4o.ei7b(SN0x, function(A5F, T5Y) {
						gk7d = a3x.cW6Q(f4j, T5Y);
						if (parseInt(gk7d) === A5F) ey7r = false
					}.g4k(this))
				}
				return ey7r
			};
		return function(f4j, SN0x) {
			var Ox8p = nej.p.dd6X.engine === "trident" && nej.p.dd6X.release - 5 < 0;
			if (!bSs4w(f4j, SN0x, Ox8p)) return !1;
			return !0
		}
	}();
	a3x.bwU8M = function() {
		var bSp4t = function(f4j) {
				var Xm1x = a3x.cW6Q(f4j, "display");
				if (Xm1x === "none") return !1;
				return !0
			};
		return function(f4j, e4i, kD9u) {
			var HW5b = e4i.opacity || kD9u;
			f4j = a3x.y5D(f4j);
			if (!bSp4t.call(f4j)) return !1;
			if ( !! f4j.effect) return !1;
			if (!a3x.bwV8N(f4j, {
				opacity: HW5b
			})) return !1;
			e4i = a3x.SO0x(e4i);
			f4j.effect = M5R.qr0x.B5G({
				node: f4j,
				transition: [{
					property: "opacity",
					timing: e4i.timing || "ease-in",
					delay: e4i.delay || 0,
					duration: e4i.duration || 1
				}],
				styles: ["opacity:" + HW5b],
				onstop: function(dn6h) {
					f4j.effect = M5R.qr0x.S5X(f4j.effect);
					e4i.onstop.call(null, dn6h)
				},
				onplaystate: e4i.onplaystate.g4k(f4j.effect)
			});
			f4j.effect.ui1x();
			return this
		}
	}.g4k(this)();
	a3x.SL0x = function(f4j, e4i) {
		return a3x.bwU8M(f4j, e4i, 1)
	};
	a3x.bSo4s = function(f4j, e4i) {
		return a3x.bwU8M(f4j, e4i, 0)
	};
	a3x.bSa4e = function(f4j) {
		a3x.bcn3x(f4j);
		return this
	};
	a3x.bcn3x = function(f4j) {
		f4j = a3x.y5D(f4j);
		if (f4j.effect && f4j.effect.bh5m()) {
			if ( !! f4j.effect) f4j.effect = M5R.qr0x.S5X(f4j.effect)
		}
		return this
	};
	a3x.bwP8H = function(f4j, nd9U, e4i) {
		f4j = a3x.y5D(f4j);
		if ( !! f4j.effect) return !1;
		if (!a3x.bwV8N(f4j, nd9U)) return !1;
		e4i = a3x.SO0x(e4i);
		e4i.duration = e4i.duration || [];
		var gl7e = nd9U.top || 0,
			gH7A = nd9U.left || 0;
		f4j.effect = M5R.qr0x.B5G({
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
			styles: ["top:" + gl7e, "left:" + gH7A],
			onstop: function(dn6h) {
				e4i.onstop.call(null, dn6h);
				f4j.effect = M5R.qr0x.S5X(f4j.effect)
			},
			onplaystate: e4i.onplaystate.g4k(f4j.effect)
		});
		f4j.effect.ui1x();
		return this
	};
	a3x.bwO8G = function() {
		return function(f4j, nd9U, e4i) {
			f4j = a3x.y5D(f4j);
			if ( !! f4j.effect) return !1;
			e4i = a3x.SO0x(e4i);
			var i4m = nd9U.split(":"),
				bRQ4U = i4m[0],
				bwH8z = [];
			bwH8z.push(nd9U);
			f4j.effect = M5R.qr0x.B5G({
				node: f4j,
				transition: [{
					property: bRQ4U,
					timing: e4i.timing || "ease-in",
					delay: e4i.delay || 0,
					duration: e4i.duration || 1
				}],
				styles: bwH8z,
				onstop: function(dn6h) {
					e4i.onstop.call(null, dn6h);
					f4j.effect = M5R.qr0x.S5X(f4j.effect)
				},
				onplaystate: e4i.onplaystate.g4k(f4j.effect)
			});
			f4j.effect.ui1x();
			return this
		}
	}();
	a3x.cxA1x = function() {
		var bct3x = function(f4j, t4x) {
				return t4x == "height" ? f4j.clientHeight : f4j.clientWidth
			};
		return function(f4j, t4x, e4i) {
			f4j = a3x.y5D(f4j);
			if ( !! f4j.effect) return !1;
			e4i = a3x.SO0x(e4i);
			var A5F = e4i.value || false;
			if (!A5F) {
				a3x.Y5d(f4j, "display", "block");
				var f4j = a3x.y5D(f4j);
				A5F = bct3x(f4j, t4x)
			}
			var ey7r = a3x.cW6Q(f4j, "visibility");
			if (ey7r === "hidden") {
				f4j.style.height = 0;
				a3x.Y5d(f4j, "visibility", "inherit");
				f4j.effect = M5R.qr0x.B5G({
					node: f4j,
					transition: [{
						property: t4x,
						timing: e4i.timing || "ease-in",
						delay: e4i.delay || 0,
						duration: e4i.duration || 1
					}],
					styles: [t4x + ":" + A5F],
					onstop: function(dn6h) {
						e4i.onstop.call(null, dn6h);
						f4j.effect = M5R.qr0x.S5X(f4j.effect);
						SH0x = window.clearTimeout(SH0x)
					},
					onplaystate: e4i.onplaystate.g4k(f4j.effect)
				})
			} else {
				f4j.style.height = A5F;
				f4j.effect = M5R.qr0x.B5G({
					node: f4j,
					transition: [{
						property: t4x,
						timing: e4i.timing || "ease-in",
						delay: e4i.delay || 0,
						duration: e4i.duration || 1
					}],
					styles: [t4x + ":" + 0],
					onstop: function(dn6h) {
						a3x.Y5d(f4j, "visibility", "hidden");
						a3x.Y5d(f4j, t4x, "auto");
						e4i.onstop.call(null, dn6h);
						f4j.effect = M5R.qr0x.S5X(f4j.effect);
						SH0x = window.clearTimeout(SH0x)
					},
					onplaystate: e4i.onplaystate.g4k(f4j.effect)
				})
			}
			var SH0x = window.setTimeout(function() {
				f4j.effect.ui1x()
			}.g4k(this), 0);
			return this
		}
	}()
})();
(function() {
	var c4g = NEJ.P,
		X5c = NEJ.O,
		bn5s = NEJ.F,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		H5M = c4g("nej.ut"),
		k4o = c4g("nej.u"),
		bF5K = c4g("nej.ui"),
		l4p = c4g("nm.x"),
		p4t = c4g("nm.d"),
		D5I = c4g("nm.w"),
		di6c = c4g("api"),
		b4f, K5P;
	D5I.Bo3x = NEJ.C();
	b4f = D5I.Bo3x.O5T(bF5K.er7k);
	K5P = D5I.Bo3x.cf5k;
	b4f.bZ5e = function() {
		this.ca5f = "m-image-preview"
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.Qu9l = i4m[0];
		this.lw9n = i4m[1];
		this.gr7k = i4m[2];
		this.KD6x = i4m[3];
		this.KF6z = i4m[4];
		this.bcy3x = i4m[5]
	};
	b4f.bj5o = function(e4i) {
		this.bk5p(e4i);
		this.bSr4v();
		this.nM0x = e4i.urls;
		this.fT7M = this.nM0x.length;
		if (this.fT7M == 1) {
			a3x.Y5d(this.KD6x, "display", "none");
			a3x.Y5d(this.KF6z, "display", "none")
		}
		this.bS5X([
			[this.o4s, "click", this.bO5T.g4k(this)],
			[document, "keydown", this.bSt4x.g4k(this)]
		]);
		l4p.bIb0x(this.nM0x, function(ss1x, dZ7S) {
			this.qS0x = dZ7S;
			this.os0x(e4i.index || 0)
		}.g4k(this))
	};
	b4f.bC5H = function() {
		this.bG5L();
		a3x.z5E(this.lw9n, "fail-loading");
		a3x.x5C(this.lw9n, "f-hide");
		a3x.Y5d(this.KD6x, "display", "");
		a3x.Y5d(this.KF6z, "display", "");
		a3x.x5C(this.KD6x, "z-cntdis");
		a3x.x5C(this.hm8e, "z-cntdis");
		a3x.x5C(this.KF6z, "z-cntdis");
		a3x.x5C(this.KJ6D, "z-cntdis");
		this.gr7k.src = "";
		delete this.nM0x;
		delete this.fT7M
	};
	b4f.bO5T = function(d4h) {
		var f4j = h4l.U5Z(d4h, "action");
		if (a3x.bA5F(f4j, "z-dis")) return;
		switch (a3x.u5z(f4j, "action")) {
		case "close":
			this.S5X();
			break;
		case "prev":
			this.os0x(this.cn5s - 1);
			break;
		case "next":
			this.os0x(this.cn5s + 1);
			break;
		case "go":
			this.os0x(a3x.u5z(f4j, "index"));
			break
		}
	};
	b4f.os0x = function(r4v) {
		if (r4v <= 0) {
			a3x.z5E(this.KD6x, "z-cntdis")
		} else {
			a3x.x5C(this.KD6x, "z-cntdis")
		}
		if (r4v >= this.fT7M - 1) {
			a3x.z5E(this.KF6z, "z-cntdis")
		} else {
			a3x.x5C(this.KF6z, "z-cntdis")
		}
		if (r4v < 0 || r4v >= this.nM0x.length) return;
		var fa7T = this.nM0x[r4v];
		this.bcy3x.href = fa7T + "?param=9999y9999";
		if (this.qS0x && this.qS0x[r4v]) {
			a3x.z5E(this.lw9n, "f-hide");
			this.gr7k.src = fa7T
		} else {
			this.gr7k.src = "";
			a3x.x5C(this.lw9n, "f-hide");
			a3x.x5C(this.lw9n, "fail-loading")
		}
		this.cn5s = r4v
	};
	di6c.imageView = function(ss1x, r4v) {
		D5I.Bo3x.B5G({
			parent: document.body,
			urls: ss1x,
			index: r4v
		})
	};
	b4f.bSt4x = function(d4h) {
		h4l.bh5m(d4h);
		switch (d4h.keyCode) {
		case 37:
			this.os0x(this.cn5s - 1);
			break;
		case 39:
			this.os0x(this.cn5s + 1);
			break;
		case 27:
			this.S5X();
			break;
		case 38:
			this.Qu9l.scrollTop -= 20;
			break;
		case 40:
			this.Qu9l.scrollTop += 20;
			break
		}
	};
	b4f.bSr4v = function() {
		var blj5o = a3x.cQ6K("input");
		this.o4s.appendChild(blj5o);
		blj5o.focus();
		a3x.cJ6D(blj5o)
	}
})();
(function() {
	var c4g = NEJ.P,
		a3x = c4g("nej.e"),
		h4l = c4g("nej.v"),
		k4o = c4g("nej.u"),
		db6V = c4g("nej.p"),
		v5A = c4g("nej.j"),
		fL7E = c4g("nm.ut"),
		D5I = c4g("nm.w"),
		n4r = c4g("nm.l"),
		l4p = c4g("nm.x"),
		b4f, K5P;
	n4r.bcX3x = NEJ.C();
	b4f = n4r.bcX3x.O5T(n4r.dU7N);
	K5P = n4r.bcX3x.cf5k;
	b4f.cl5q = function(e4i) {
		e4i.title = "转发动态";
		this.cs5x(e4i)
	};
	b4f.bj5o = function(e4i) {
		if (e4i.onclose === undefined) e4i.onclose = function() {
			this.bp5u()
		}.g4k(this);
		this.bk5p(e4i);
		this.iV8N = e4i.rid;
		this.mb9S = e4i.uid;
		this.bQv2x = e4i.text;
		this.fH7A.value = this.bQv2x;
		this.gF7y = D5I.Ly6s.B5G({
			parent: document.body,
			target: this.fH7A
		})
	};
	b4f.bZ5e = function() {
		this.ca5f = "m-wgt-forward"
	};
	b4f.bR5W = function() {
		this.cb5g();
		var bJ5O = a3x.I5N(this.o4s, "j-flag");
		this.IF6z = bJ5O[0];
		this.fH7A = bJ5O[1];
		this.bdb3x = bJ5O[2];
		this.bQr2x = bJ5O[3];
		this.LB6v = bJ5O[4];
		this.iM8E = bJ5O[5];
		this.bwt7m = bJ5O[6];
		this.bQo2x = bJ5O[7];
		this.wJ2x = bJ5O[8];
		h4l.s4w(this.fH7A, "input", this.fm7f.g4k(this));
		h4l.s4w(this.fH7A, "keyup", this.bcd3x.g4k(this));
		h4l.s4w(this.fH7A, "click", this.kW9N.g4k(this));
		h4l.s4w(this.LB6v, "click", this.bdg3x.g4k(this));
		h4l.s4w(this.bQr2x, "click", this.bdh3x.g4k(this));
		h4l.s4w(this.bwt7m, "click", this.II6C.g4k(this));
		h4l.s4w(this.bQo2x, "click", this.PG8y.g4k(this))
	};
	b4f.bC5H = function() {
		this.bG5L();
		if (this.gC7v) {
			this.gC7v.S5X();
			delete this.gC7v
		}
		if (this.gF7y) {
			this.gF7y.S5X();
			delete this.gF7y
		}
	};
	b4f.fm7f = function(d4h) {
		db6V.dd6X.browser == "ie" && db6V.dd6X.version < "7.0" ? setTimeout(this.fz7s.g4k(this), 0) : this.fz7s()
	};
	b4f.bcd3x = function(d4h) {
		this.kW9N();
		this.fm7f()
	};
	b4f.fz7s = function() {
		var br5w = this.fH7A.value.trim().length;
		this.iM8E.innerHTML = !br5w ? "140" : 140 - br5w;
		br5w > 140 ? a3x.z5E(this.iM8E, "s-fc6") : a3x.x5C(this.iM8E, "s-fc6");
		if (!br5w || br5w == 0) a3x.Y5d(this.IF6z, "display", "block");
		else a3x.Y5d(this.IF6z, "display", "none")
	};
	b4f.bdg3x = function(d4h) {
		h4l.bh5m(d4h); !! this.gC7v && this.gC7v.bp5u();
		this.gF7y.Ls6m();
		this.fz7s()
	};
	b4f.bdh3x = function(d4h) {
		h4l.bh5m(d4h);
		if (!this.gC7v) {
			this.gC7v = n4r.EW5b.B5G({
				parent: this.bdb3x
			});
			this.gC7v.s4w("onselect", this.vx2x.g4k(this))
		}
		this.gC7v.N5S()
	};
	b4f.vx2x = function(d4h) {
		var bl5q = "[" + d4h.text + "]";
		fL7E.Fh5m(this.fH7A, this.nY0x, bl5q);
		this.fz7s();
		h4l.w5B(this.fH7A, "keyup")
	};
	b4f.kW9N = function() {
		this.nY0x = fL7E.sM1x(this.fH7A)
	};
	b4f.II6C = function(d4h) {
		h4l.bh5m(d4h);
		if (this.dL6F()) return;
		if (this.fH7A.value.trim().length > 140) {
			this.dw6q("字数超过140个字符");
			return
		}
		var bQj2x = this.fH7A.value.trim();
		var ht8l = window.GUser.userId;
		var C5H = this.iV8N;
		var V5a = "/api/event/forward";
		var j4n = {
			forwards: bQj2x,
			id: this.iV8N,
			eventUserId: this.mb9S
		};
		j4n = k4o.cY6S(j4n);
		this.dL6F(!0);
		var fC7v = v5A.bq5v(V5a, {
			sync: false,
			type: "json",
			data: j4n,
			method: "POST",
			onload: this.xZ3x.g4k(this),
			onerror: this.ek7d.g4k(this)
		})
	};
	b4f.xZ3x = function(m4q) {
		this.dL6F(!1);
		if (m4q.code != 200) {
			var bD5I = "转发失败";
			switch (m4q.code) {
			case 404:
				bD5I = m4q.message || "该动态已被删除";
				break;
			case 407:
				bD5I = "输入内容包含有关键字";
				break;
			case 408:
				bD5I = "转发太快了，过会再分享吧";
				break;
			case 315:
				bD5I = "根据对方设置，你没有该操作权限";
				break
			}
			this.dw6q(bD5I);
			return
		}
		fL7E.bBD9u(this.fH7A.value);
		this.bp5u();
		n4r.Z5e.N5S({
			tip: "转发成功！",
			autoclose: true
		});
		this.w5B("onforward", {
			id: this.iV8N,
			eventUserId: this.mb9S
		})
	};
	b4f.ek7d = function(j4n) {
		this.dL6F(!1);
		this.dw6q(bD5I)
	};
	b4f.dL6F = function(cG6A) {
		return K5P.dL6F(this.bwt7m, cG6A, "转发", "转发中 ...")
	};
	b4f.dw6q = function(bD5I) {
		return K5P.dw6q(this.wJ2x, bD5I)
	};
	b4f.PG8y = function(d4h) {
		h4l.cg5l(d4h);
		this.bp5u()
	};
	b4f.lW9N = function() {
		this.fH7A.focus();
		if (db6V.dd6X.browser == "ie" && parseInt(db6V.dd6X.version) < 10) return;
		fL7E.Zn2x(this.fH7A, {
			start: 0,
			end: 0
		});
		this.kW9N()
	};
	b4f.bp5u = function() {
		K5P.bp5u.call(this);
		if (this.gC7v) {
			this.gC7v.S5X();
			delete this.gC7v
		}
		if (this.gF7y) {
			this.gF7y.S5X();
			delete this.gF7y
		}
	};
	b4f.N5S = function(e4i) {
		K5P.N5S.call(this);
		this.dw6q();
		this.dL6F(!1);
		this.fz7s();
		this.lW9N();
		this.nY0x = fL7E.sM1x(this.fH7A)
	};
	l4p.bwq7j = function(e4i) {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			n4r.oc0x.N5S({
				title: "登录"
			});
			return
		}
		if (e4i.title === undefined) e4i.title = "转发动态";
		n4r.bcX3x.N5S(e4i)
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
		fL7E = c4g("nm.ut"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.XL1x = NEJ.C();
	b4f = n4r.XL1x.O5T(n4r.dU7N);
	K5P = n4r.XL1x.cf5k;
	b4f.cl5q = function() {
		this.cs5x()
	};
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		this.eR7K = i4m[0];
		this.bgz4D = i4m[1];
		this.ci5n = i4m[2];
		this.bAB8t = i4m[3];
		this.eb7U = i4m[4];
		h4l.s4w(this.o4s, "click", this.dV7O.g4k(this));
		h4l.s4w(this.eR7K, "input", this.fm7f.g4k(this));
		h4l.s4w(this.eR7K, "keyup", this.tK1x.g4k(this))
	};
	b4f.bZ5e = function() {
		this.ca5f = "m-sharesingle-layer"
	};
	b4f.bj5o = function(e4i) {
		e4i.parent = e4i.parent || document.body;
		e4i.title = e4i.title || "分享";
		e4i.draggable = !0;
		e4i.mask = !0;
		e4i.clazz = "m-layer m-layer-w2";
		this.bk5p(e4i);
		this.eR7K.value = e4i.mesg || "";
		this.bg5l = {
			id: e4i.rid,
			type: e4i.type,
			picUrl: e4i.purl,
			snsType: e4i.snsType,
			resourceUrl: e4i.rurl
		};
		if (!this.bg5l.resourceUrl) delete this.bg5l.resourceUrl;
		this.Bd3x();
		this.dw6q(null);
		this.dL6F(false)
	};
	b4f.dV7O = function(d4h) {
		var f4j = h4l.U5Z(d4h, "d:action"),
			W5b = a3x.u5z(f4j, "action");
		h4l.cg5l(d4h);
		switch (W5b) {
		case "txt":
			this.kW9N();
			break;
		case "emt":
			h4l.rT1x(d4h); !! this.gF7y && this.gF7y.Df4j();
			if (!this.gC7v) {
				this.gC7v = n4r.EW5b.B5G({
					parent: this.bgz4D
				});
				this.gC7v.s4w("onselect", this.vx2x.g4k(this))
			}
			this.gC7v.N5S();
			break;
		case "ok":
			this.dw6q(null);
			if (this.nT0x) return;
			if (this.eR7K.value.trim().length > 140) {
				this.dw6q("字数超过140个字符");
				return
			}
			this.dL6F(true);
			this.bg5l.msg = this.eR7K.value;
			if (!this.bg5l.resourceUrl) {
				delete this.bg5l.resourceUrl
			}
			v5A.bq5v("/sns/share/resource", {
				type: "json",
				method: "post",
				data: k4o.cY6S(this.bg5l),
				onload: this.tV1x.g4k(this),
				onerror: this.tV1x.g4k(this)
			});
			break;
		case "cc":
			this.bp5u();
			break
		}
	};
	b4f.vx2x = function(d4h) {
		var bl5q = "[" + d4h.text + "]";
		fL7E.Fh5m(this.eR7K, this.nY0x, bl5q);
		this.Bd3x()
	};
	b4f.fm7f = function() {
		this.Bd3x();
		this.kW9N()
	};
	b4f.tK1x = function() {
		this.Bd3x();
		this.kW9N()
	};
	b4f.Bd3x = function() {
		var br5w = this.eR7K.value.trim().length;
		this.ci5n.innerText = 140 - br5w;
		br5w > 140 ? a3x.eD7w(this.ci5n, "s-fc4", "s-fc6") : a3x.eD7w(this.ci5n, "s-fc6", "s-fc4")
	};
	b4f.kW9N = function() {
		this.nY0x = fL7E.sM1x(this.eR7K)
	};
	b4f.tV1x = function(d4h) {
		var iD8v = {
			407: "输入内容包含有关键字",
			404: "分享的资源不存在",
			408: "分享太快了，过会再分享吧"
		};
		if (d4h.code == 200) {
			this.w5B("onsuccess", d4h);
			if (!d4h.stopped) {
				n4r.Z5e.N5S({
					tip: "分享成功！",
					autoclose: true
				})
			}
			this.bp5u()
		} else {
			this.dw6q(iD8v[d4h.code] || "分享失败")
		}
		this.dL6F(false)
	};
	b4f.dw6q = function(bAA8s) {
		if (bAA8s) {
			this.eb7U.innerHTML = '<i class="u-icn u-icn-25"></i>' + bAA8s;
			a3x.x5C(this.eb7U, "f-hide")
		} else {
			a3x.z5E(this.eb7U, "f-hide")
		}
	};
	b4f.dL6F = function(bAz8r) {
		this.nT0x = bAz8r;
		if (bAz8r) {
			this.bAB8t.innerHTML = "<i>分享中...</i>"
		} else {
			this.bAB8t.innerHTML = "<i>分享</i>"
		}
	};
	b4f.N5S = function() {
		K5P.N5S.call(this);
		var du6o = this.eR7K.value.length;
		fL7E.Zn2x(this.eR7K, {
			start: du6o,
			end: du6o,
			text: ""
		});
		this.kW9N()
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
		di6c = c4g("api"),
		n4r = c4g("nm.l"),
		b4f, K5P;
	n4r.buk7d = NEJ.C();
	b4f = n4r.buk7d.O5T(n4r.dU7N);
	b4f.bR5W = function() {
		this.cb5g();
		var i4m = a3x.I5N(this.o4s, "j-flag");
		h4l.s4w(this.o4s, "click", this.bO5T.g4k(this))
	};
	b4f.bZ5e = function() {
		this.ca5f = "m-simple-share-layer"
	};
	b4f.bj5o = function(e4i) {
		e4i.clazz = "m-layer-w6";
		if (!e4i.shareType) e4i.parent = e4i.parent || document.body;
		e4i.title = e4i.title || "分享";
		e4i.draggable = !0;
		e4i.mask = e4i.mask || true;
		this.bk5p(e4i);
		this.bg5l = {
			id: e4i.id || 0,
			type: e4i.type || "activity",
			picUrl: e4i.picUrl,
			msg: e4i.text,
			resourceUrl: e4i.resourceUrl,
			summary: e4i.summary
		};
		this.bS5X([
			[window, "snsbind", this.Nl7e.g4k(this)],
			[window, "snsbinderror", this.bp5u.g4k(this)]
		]);
		this.sE1x = {
			rid: this.bg5l.id,
			rurl: this.bg5l.resourceUrl,
			purl: this.bg5l.picUrl,
			mesg: this.bg5l.msg,
			type: this.bg5l.type,
			onsuccess: e4i.onsuccess
		};
		if (e4i.shareType) {
			this.bul7e(e4i.shareType)
		}
	};
	b4f.bO5T = function(d4h) {
		var f4j = h4l.U5Z(d4h, "d:type"),
			t4x = a3x.u5z(f4j, "type");
		this.bul7e(t4x)
	};
	b4f.bul7e = function(t4x) {
		switch (t4x) {
		case "xlwb":
		case "rr":
		case "db":
			var uM2x = {
				xlwb: 2,
				rr: 4,
				db: 3
			},
				KU6O = uM2x[t4x],
				rC1x = localCache.Sr0x("user.bindings") || [],
				r4v = k4o.cT6N(rC1x, function(q4u) {
					return q4u.type == KU6O && !q4u.expired
				});
			if (r4v >= 0) {
				this.xm2x(KU6O)
			} else {
				var iA8s = {
					snsType: KU6O,
					callbackType: "Binding",
					clientType: "web2",
					forcelogin: true,
					csrf_token: v5A.gI7B("__csrf")
				};
				top.window.open("/api/sns/authorize?" + k4o.cY6S(iA8s))
			}
			break;
		case "wx":
		case "yx":
			var iA8s = {
				resourceUrl: this.bg5l.resourceUrl,
				type: t4x
			};
			top.open("/share/QRCode?" + k4o.cY6S(iA8s));
			this.bp5u();
			break;
		case "qzone":
			var fQ7J = {
				url: this.bg5l.resourceUrl,
				title: this.bg5l.msg || "",
				pics: this.bg5l.picUrl,
				summary: this.bg5l.summary
			};
			top.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + k4o.cY6S(fQ7J));
			this.bp5u();
			break;
		case "lofter":
			var fQ7J = {
				from: "cloudmusic",
				image: this.bg5l.picUrl,
				source: "网易云音乐",
				sourceurl: this.bg5l.resourceUrl,
				content: this.bg5l.msg
			};
			top.open("http://www.lofter.com/sharephoto/?" + k4o.cY6S(fQ7J));
			this.bp5u();
			break
		}
	};
	b4f.Nl7e = function(d4h) {
		this.xm2x(d4h.result.type)
	};
	b4f.xm2x = function(t4x) {
		this.bp5u();
		if (this.wQ2x) {
			this.wQ2x.S5X();
			delete this.wQ2x
		}
		this.sE1x.snsType = t4x;
		this.wQ2x = n4r.XL1x.B5G(this.sE1x);
		this.wQ2x.N5S()
	};
	var cp5u = null;
	di6c.simpleShare = function(e4i) {
		if (cp5u) cp5u.S5X();
		cp5u = n4r.buk7d.B5G(e4i).N5S()
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
		p4t = c4g("nm.d"),
		l4p = c4g("nm.x"),
		F5K = c4g("nm.m"),
		n4r = c4g("nm.l"),
		L5Q = c4g("nm.m.f"),
		di6c = c4g("api"),
		Ao3x = /#(.*?)$/,
		b4f, K5P, BQ4U = {
			pubEventWithPics: false,
			pubEventWithoutResource: false,
			pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
		};
	L5Q.bum7f = NEJ.C();
	b4f = L5Q.bum7f.O5T(H5M.dm6g);
	b4f.bH5M = function() {
		this.bM5R();
		window.onHashChange = this.VL0x.g4k(this);
		window.log = this.mf9W.g4k(this);
		window.share = this.xm2x.g4k(this);
		window.shareForStore = this.bTv4z.g4k(this);
		window.subscribe = this.XM1x.g4k(this);
		window.onIframeClick = this.bTC4G.g4k(this);
		h4l.s4w(window, "playchange", this.hv8n.g4k(this));
		h4l.s4w(window, "playstatechange", this.bTK4O.g4k(this));
		this.kY9P = F5K.MQ7J.gc7V();
		this.kY9P.s4w("loginsuccess", this.bUg4k.g4k(this));
		this.kY9P.s4w("logoutbefore", this.bkW5b.g4k(this));
		this.kY9P.s4w("logoutsuccess", this.bkU5Z.g4k(this));
		this.bqn6h();
		this.bz5E = L5Q.Ju6o.B5G();
		this.bz5E.w5B("onshow", {});
		v5A.bq5v("/api/login/token/refresh", {
			type: "json",
			method: "post"
		});
		this.VL0x(l4p.Iv6p());
		this.DR4V = F5K.Le6Y.B5G();
		di6c.refreshUserInfo = this.DR4V.GI5N.g4k(this.DR4V);
		this.bUs4w();
		di6c.cbDonate = this.bUL4P;
		var referrer = document.referrer;
		if (referrer.indexOf(location.hostname) === -1) {
			var conf = {
				is_organic: referrer ? 0 : 1,
				url: location.href
			};
			if (!conf.is_organic) {
				conf.source = referrer
			}
			this.mf9W("activeweb", conf)
		}
	};
	b4f.bqn6h = function() {
		this.ka8S = p4t.hK8C.B5G()
	};
	b4f.VL0x = function(dH6B) {
		var d4h = location.parse(dH6B);
		this.py0x(d4h)
	};
	b4f.py0x = function(d4h, t4x) {
		var fc7V = a3x.y5D("g_iframe"),
			ky9p = d4h.path,
			bw5B = d4h.query,
			iG8y = fc7V.contentWindow.location;
		this.su1x = fc7V;
		if (/^\/mv/.test(ky9p)) {
			if (this.bz5E) this.bz5E.bp5u();
			this.kf9W = document.title
		} else {
			if (this.bz5E) this.bz5E.N5S();
			document.title = this.kf9W || l4p.ql0x()
		}
		if (bw5B.play == "true" && /^\/(m\/)?song/.test(ky9p)) {
			if (this.bz5E) this.bz5E.Js6m(18, bw5B.id, true)
		}
		if (/^\/my\/m\/music\/playlist/.test(ky9p)) {
			var bmG5L = l4p.bbM2x();
			if (!bmG5L && !! bw5B.id) return location.dispatch2("/playlist?id=" + bw5B.id)
		}
		if (/^\/login\b/.test(ky9p) && GUser && GUser.userId) {
			var ft7m = /targetUrl=(.+?)(&|$)/.exec(d4h.href),
				wg2x = ft7m ? decodeURIComponent(ft7m[1]) : "/discover";
			wg2x = wg2x.replace("/m/", "/#/");
			wg2x = wg2x.replace(/^\s+|\s+$/g, "");
			var cN6H = /^https?:\/\//i,
				Cg4k = /^\/\//,
				bdq3x = /^\//;
			if (!cN6H.test(wg2x) && !Cg4k.test(wg2x) && !bdq3x.test(wg2x)) {
				wg2x = "/discover"
			}
			return location.href = encodeURI(wg2x)
		}
		if (t4x !== undefined) {
			if (bw5B && bw5B.targetUrl) {
				var mA9r = location.parse(bw5B.targetUrl);
				if (mA9r.path.indexOf("/store/") == 0 || mA9r.path.indexOf("/nmusician/") == 0) {
					return location.href = d4h.href
				}
			}
			return GDispatcher.refreshIFrame(d4h.href)
		}
	};
	b4f.bUg4k = function() {
		var dH6B = Ao3x.test(location.href) ? RegExp.$1 : "",
			d4h = location.parse(dH6B),
			Gp5u = this.DR4V;
		Gp5u.GI5N();
		v5A.bq5v("/api/topic/user/info", {
			type: "json",
			onload: function(bW5b) {
				top.GUserAcc = NEJ.X(top.GUserAcc || {}, {
					topic: bW5b.status
				});
				Gp5u.GI5N()
			}
		});
		v5A.bq5v("/api/reward/user/showicon", {
			type: "json",
			onload: function(bW5b) {
				top.GUserAcc = NEJ.X(top.GUserAcc || {}, {
					reward: bW5b.showIcon
				});
				Gp5u.GI5N()
			}
		});
		if (!di6c.sharePermission) {
			di6c.sharePermission = BQ4U
		}
		v5A.bq5v("/api/event/user/permission", {
			type: "json",
			onload: function(d4h) {
				if (d4h.code == 200) {
					di6c.sharePermission = NEJ.EX(BQ4U, d4h)
				}
			}
		});
		this.py0x(d4h, "urlchange")
	};
	b4f.bkW5b = function() {
		n4r.ww2x.bp5u();
		this.DR4V.GI5N()
	};
	b4f.bkU5Z = function() {
		if (!location.hash || location.hash == "#") {
			var dH6B = Ao3x.test(location.href) ? RegExp.$1 : "",
				d4h = location.parse(dH6B);
			this.py0x(d4h, "urlchange");
			return
		}
		location.hash = "#"
	};
	b4f.hv8n = function(d4h) {
		if (this.su1x) {
			var bL5Q = this.su1x.contentWindow;
			try {
				if (bL5Q.nej && bL5Q.nej.v) {
					bL5Q.nej.v.w5B ? bL5Q.nej.v.w5B(bL5Q, "playchange", d4h) : bL5Q.nej.v.dispatchEventalias ? bL5Q.nej.v.dispatchEventalias(bL5Q, "playchange", d4h) : ""
				}
			} catch (e) {}
		}
	};
	b4f.bTK4O = function(d4h) {
		if (!this.su1x) return;
		var bL5Q = this.su1x.contentWindow;
		try {
			if (bL5Q.nej && bL5Q.nej.v) {
				bL5Q.nej.v.w5B ? bL5Q.nej.v.w5B(bL5Q, "playstatechange", d4h) : bL5Q.nej.v.dispatchEventalias ? bL5Q.nej.v.dispatchEventalias(bL5Q, "playstatechange", d4h) : ""
			}
		} catch (e) {}
	};
	b4f.mf9W = function(W5b, bb5g) {
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
	};
	b4f.xm2x = function() {
		if (this.su1x.contentWindow.share) {
			this.su1x.contentWindow.share.apply(this.su1x.contentWindow, arguments)
		}
	};
	b4f.bTv4z = function() {
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
	b4f.XM1x = function(bI5N, bUT4X) {
		var bL5Q = this.su1x.contentWindow;
		if (bL5Q.nm && bL5Q.nm.x) {
			if (!bL5Q.nm.x.lJ9A) {
				bL5Q = top.window
			}
			if (bUT4X && bL5Q.nm.x.bJs0x) {
				bL5Q.nm.x.bJs0x({
					data: bI5N.program
				})
			} else if (bL5Q.nm.x.lJ9A) {
				var i4m = k4o.en7g(bI5N) ? bI5N : [bI5N];
				bL5Q.nm.x.lJ9A({
					tracks: i4m
				})
			}
		}
	};
	b4f.bTC4G = function(d4h) {
		h4l.w5B(window, "iframeclick")
	};
	b4f.bUs4w = function() {
		v5A.bq5v("/api/copyright/pay_fee_message/config", {
			type: "json",
			onload: function(d4h) {
				if (d4h.code == 200) {
					di6c.feeMessage = d4h.config
				}
			}
		});
		di6c.sharePermission = BQ4U;
		v5A.bq5v("/api/event/user/permission", {
			type: "json",
			onload: function(d4h) {
				if (d4h.code == 200) {
					di6c.sharePermission = NEJ.EX(BQ4U, d4h)
				}
			}
		})
	};
	b4f.bUL4P = function() {
		var cm5r = {
			jst: "m-wgt-redeem-tip",
			clazz: "n-redeem"
		};
		cm5r.data = {
			title: "成功送出",
			sub: "请你的好友去查看私信",
			ok: "知道了",
			type: "success"
		};
		cm5r.onaction = function() {
			location.dispatch2("/member")
		};
		l4p.jg8Y(cm5r)
	};
	window.doMsgToServiceAction = b4f.cxW1x = function() {
		var VA0x = null;
		return function(W5b) {
			if (W5b == "kf") {
				VA0x && VA0x.S5X();
				VA0x = n4r.wH2x.B5G({
					title: "发新私信",
					draggable: true,
					clazz: "m-layer m-layer-w2",
					receiver: {
						userId: l4p.bHW0x() ? 117863002 : 253335632,
						nickname: l4p.bHW0x() ? "测试库客服" : "云音乐客服"
					}
				});
				VA0x.N5S()
			}
		}
	}();
	H5M.fu7n.B5G({
		element: window,
		event: ["playchange", "iframeclick", "playstatechange"]
	});
	a3x.cH6B("template-box");
	new L5Q.bum7f
})()