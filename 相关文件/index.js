webpackJsonp([8, 13], {
    "7Pi6": function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function l(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, a, n) {
                return a && e(t.prototype, a), n && e(t, n), t
            }
        }(),
            u = a("U7vG"),
            s = n(u),
            i = a("KSGD"),
            d = n(i),
            f = function (e) {
                function t(e) {
                    r(this, t);
                    var a = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return a.state = {
                        tabIndex: a.props.tabIndex
                    }, a.isTitleSelect = a.isTitleSelect.bind(a), a.changeTabIndex = a.changeTabIndex.bind(a), a
                }
                return o(t, e), c(t, [{
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        this.state.tabIndex !== e.tabIndex && this.setState({
                            tabIndex: e.tabIndex
                        })
                    }
                }, {
                    key: "isTitleSelect",
                    value: function (e) {
                        return this.state.tabIndex === e ? "tabtitle z-selected" : "tabtitle"
                    }
                }, {
                    key: "changeTabIndex",
                    value: function (e) {
                        this.setState({
                            tabIndex: e
                        });
                        var t = this.props.onChange;
                        t && t(e)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props,
                            a = t.children,
                            n = t.classTab,
                            r = t.classTabArea;
                        return s.default.createElement("div", {
                            className: n ? "m-tabarea " + n : "m-tabarea"
                        }, s.default.createElement("nav", {
                            className: r ? "u-tab " + r : "u-tab"
                        }, s.default.Children.map(a, function (t, a) {
                            return s.default.createElement("li", {
                                key: "tabtitle" + a,
                                className: e.isTitleSelect(a),
                                onClick: function () {
                                    e.changeTabIndex(a)
                                }
                            }, s.default.createElement("div", {
                                className: "tabtxt"
                            }, s.default.createElement("span", null, t.props.title), void 0 != t.props.subtitle && s.default.createElement("em", null, t.props.subtitle)))
                        })), s.default.createElement("div", {
                            className: "m-tabct"
                        }, s.default.Children.map(a, function (t, a) {
                            if (e.state.tabIndex === a) return s.default.createElement("div", {
                                key: "content" + a,
                                className: "tabctitem"
                            }, t.props.children)
                        })))
                    }
                }]), t
            }(u.Component);
        t.default = f, f.defaultProps = {
            tabIndex: 0
        }, f.propTypes = {
            tabIndex: d.default.number,
            onChange: d.default.func,
            classTab: d.default.string,
            classTabArea: d.default.string
        }, e.exports = t.default
    }, "4ZZq": function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function l(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function c(e, t) {
            var a = document.createElement("div");
            document.body.appendChild(a);
            var n = {
                container: a,
                text: e
            };
            t && (n.timeout = t), f.default.render(i.default.createElement(g, n), a)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, a, n) {
                return a && e(t.prototype, a), n && e(t, n), t
            }
        }();
        t.default = c;
        var s = a("U7vG"),
            i = n(s),
            d = a("O27J"),
            f = n(d),
            h = a("S8Mv"),
            m = n(h);
        "undefined" != typeof window && a("SR6z");
        var p = 300,
            v = 300,
            g = function (e) {
                function t(e) {
                    r(this, t);
                    var a = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return a.state = {
                        show: !0
                    }, a
                }
                return o(t, e), u(t, [{
                    key: "close",
                    value: function () {
                        var e = this;
                        window.setTimeout(function () {
                            e.setState({
                                show: !1
                            }), window.setTimeout(function () {
                                e.teardown()
                            }, v)
                        }, this.props.timeout)
                    }
                }, {
                    key: "teardown",
                    value: function () {
                        var e = this.props.container;
                        f.default.unmountComponentAtNode(e), e.parentNode.removeChild(e)
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        this.close()
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t = this.state.show,
                            a = this.props.text;
                        return t && (e = i.default.createElement("div", {
                            className: "c-toast"
                        }, a)), i.default.createElement(m.default, {
                            component: "div",
                            transitionName: "toastmask",
                            transitionEnterTimeout: p,
                            transitionAppear: !0,
                            transitionAppearTimeout: p,
                            transitionLeaveTimeout: v
                        }, e)
                    }
                }]), t
            }(s.Component);
        g.propTypes = {
            container: s.PropTypes.object.isRequired,
            text: s.PropTypes.string.isRequired,
            timeout: s.PropTypes.number
        }, g.defaultProps = {
            timeout: 2e3
        }, e.exports = t.default
    }, Xlru: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.homeHotRequest = t.homeHotFail = t.homeHotSucc = void 0;
        var r = a("yQmT"),
            l = n(r),
            o = a("xnRS"),
            c = n(o),
            u = a("C4at"),
            s = t.homeHotSucc = (0, c.default)(l.default.HOME_HOT_SUCC),
            i = t.homeHotFail = (0, c.default)(l.default.HOME_HOT_FAIL);
        t.homeHotRequest = function (e) {
            return function (t) {
                return t({
                    type: l.default.HOME_HOT_REQUESTING
                }), e = e || {}, u.NM.fetch({
                    url: "api/v3/playlist/detail",
                    data: {
                        id: e.id,
                        n: e.count || 20
                    }
                }).then(function (e) {
                    t(s(e))
                }).catch(function (e) {
                    var a = u.NM.resolveError(e),
                        n = (a.code, a.msg);
                    t(i(n))
                })
            }
        }
    }, jmrq: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.changeTab = void 0;
        var r = a("QbBE"),
            l = n(r),
            o = a("xnRS"),
            c = n(o);
        t.changeTab = (0, c.default)(l.default)
    }, "5fdt": function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.homeNewRequest = t.homeRemdRequest = t.homeNewFail = t.homeNewSucc = t.homeRemdFail = t.homeRemdSucc = void 0;
        var r = a("84rL"),
            l = n(r),
            o = a("xnRS"),
            c = n(o),
            u = a("C4at"),
            s = t.homeRemdSucc = (0, c.default)(l.default.HOME_REMD_SUCC),
            i = t.homeRemdFail = (0, c.default)(l.default.HOME_REMD_FAIL),
            d = t.homeNewSucc = (0, c.default)(l.default.HOME_NEW_SUCC),
            f = t.homeNewFail = (0, c.default)(l.default.HOME_NEW_FAIL);
        t.homeRemdRequest = function (e) {
            return function (t) {
                return t({
                    type: l.default.HOME_REMD_REQUESTING
                }), u.NM.fetch({
                    url: "api/personalized/playlist/v1",
                    data: e
                }).then(function (e) {
                    t(s(e))
                }).catch(function (e) {
                    var a = u.NM.resolveError(e),
                        n = (a.code, a.msg);
                    t(i(n))
                })
            }
        }, t.homeNewRequest = function (e) {
            return function (t) {
                return t({
                    type: l.default.HOME_NEW_REQUESTING
                }), u.NM.fetch({
                    url: "api/personalized/newsong",
                    data: e
                }).then(function (e) {
                    t(d(e))
                }).catch(function (e) {
                    var a = u.NM.resolveError(e),
                        n = (a.code, a.msg);
                    t(f(n))
                })
            }
        }
    }, hpFO: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.delHistory = t.saveHistory = t.setSearchState = t.setInputValue = void 0;
        var r = a("XDrQ"),
            l = n(r),
            o = a("xnRS"),
            c = n(o);
        t.setInputValue = (0, c.default)(l.default.SET_INPUT_VALUE), t.setSearchState = (0, c.default)(l.default.SET_SEARCH_STATE), t.saveHistory = (0, c.default)(l.default.SAVE_HISTORY), t.delHistory = (0, c.default)(l.default.DEL_HISTORY)
    }, FHOB: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.searchHotRequest = t.searchHotFail = t.searchHotSucc = void 0;
        var r = a("gtFq"),
            l = n(r),
            o = a("xnRS"),
            c = n(o),
            u = a("C4at"),
            s = t.searchHotSucc = (0, c.default)(l.default.SEARCH_HOT_SUCC),
            i = t.searchHotFail = (0, c.default)(l.default.SEARCH_HOT_FAIL);
        t.searchHotRequest = function (e) {
            return function (t) {
                return t({
                    type: l.default.SEARCH_HOT_REQUESTING
                }), u.NM.fetch({
                    url: "api/search/hot",
                    data: e
                }).then(function (e) {
                    t(s(e))
                }).catch(function (e) {
                    var a = u.NM.resolveError(e),
                        n = (a.code, a.msg);
                    t(i(n))
                })
            }
        }
    }, PwSW: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.searchMatchRequest = t.searchMatchClear = t.searchMatchFail = t.searchMatchSucc = void 0;
        var r = a("UvFU"),
            l = n(r),
            o = a("xnRS"),
            c = n(o),
            u = a("C4at"),
            s = t.searchMatchSucc = (0, c.default)(l.default.SEARCH_MATCH_SUCC),
            i = t.searchMatchFail = (0, c.default)(l.default.SEARCH_MATCH_FAIL);
        t.searchMatchClear = (0, c.default)(l.default.SEARCH_MATCH_CLEAR), t.searchMatchRequest = function (e) {
            return function (t) {
                return t({
                    type: l.default.SEARCH_MATCH_REQUESTING
                }), u.NM.fetch({
                    url: "api/search/suggest/multimatch",
                    data: e
                }).then(function (e) {
                    t(s(e))
                }).catch(function (e) {
                    var a = u.NM.resolveError(e),
                        n = (a.code, a.msg);
                    t(i(n))
                })
            }
        }
    }, Yu6K: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.searchRecomRequest = t.searchRecomClear = t.searchRecomFail = t.searchRecomSucc = void 0;
        var r = a("jmnP"),
            l = n(r),
            o = a("xnRS"),
            c = n(o),
            u = a("C4at"),
            s = t.searchRecomSucc = (0, c.default)(l.default.SEARCH_RECOM_SUCC),
            i = t.searchRecomFail = (0, c.default)(l.default.SEARCH_RECOM_FAIL);
        t.searchRecomClear = (0, c.default)(l.default.SEARCH_RECOM_CLEAR), t.searchRecomRequest = function (e) {
            return function (t) {
                return t({
                    type: l.default.SEARCH_RECOM_REQUESTING
                }), u.NM.fetch({
                    url: "api/search/suggest/keyword",
                    data: e
                }).then(function (e) {
                    t(s(e))
                }).catch(function (e) {
                    var a = u.NM.resolveError(e),
                        n = (a.code, a.msg);
                    t(i(n))
                })
            }
        }
    }, KQH8: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.searchSongRequest = t.searchSongClear = t.searchSongFail = t.searchSongSucc = void 0;
        var r = a("GDd0"),
            l = n(r),
            o = a("xnRS"),
            c = n(o),
            u = a("C4at"),
            s = t.searchSongSucc = (0, c.default)(l.default.SEARCH_SONG_SUCC),
            i = t.searchSongFail = (0, c.default)(l.default.SEARCH_SONG_FAIL);
        t.searchSongClear = (0, c.default)(l.default.SEARCH_SONG_CLEAR), t.searchSongRequest = function (e) {
            return function (t) {
                return t({
                    type: l.default.SEARCH_SONG_REQUESTING
                }), u.NM.fetch({
                    url: "api/search/get",
                    data: e
                }).then(function (e) {
                    t(s(e))
                }).catch(function (e) {
                    var a = u.NM.resolveError(e),
                        n = (a.code, a.msg);
                    t(i(n))
                })
            }
        }
    }, Fh61: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("pFYg"),
            l = n(r),
            o = a("Zx67"),
            c = n(o),
            u = a("Zrlr"),
            s = n(u),
            i = a("wxAW"),
            d = n(i),
            f = a("zwoO"),
            h = n(f),
            m = a("Pf15"),
            p = n(m);
        a("YKO+");
        var v = a("U7vG"),
            g = n(v),
            y = a("KSGD"),
            E = n(y),
            S = function (e) {
                function t(e) {
                    (0, s.default)(this, t);
                    var a = (0, h.default)(this, (t.__proto__ || (0, c.default)(t)).call(this, e));
                    return a.count = 0, a.escapeStringRegexp = a.escapeStringRegexp.bind(a), a.getSearch = a.getSearch.bind(a), a.getMatchBoundaries = a.getMatchBoundaries.bind(a), a.renderPlain = a.renderPlain.bind(a), a.renderHighlight = a.renderHighlight.bind(a), a.highlightChildren = a.highlightChildren.bind(a), a.generateElement = a.generateElement.bind(a), a
                }
                return (0, p.default)(t, e), (0, d.default)(t, [{
                    key: "escapeStringRegexp",
                    value: function (e) {
                        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    }
                }, {
                    key: "getSearch",
                    value: function () {
                        var e = this.props,
                            t = e.word,
                            a = e.sensitive,
                            n = t;
                        "string" == typeof t && (n = this.escapeStringRegexp(n));
                        var r = "";
                        return a || (r += "i"), new RegExp(n, r)
                    }
                }, {
                    key: "getMatchBoundaries",
                    value: function (e, t) {
                        var a = t.exec(e);
                        if (a) return {
                            first: a.index,
                            last: a.index + a[0].length
                        }
                    }
                }, {
                    key: "renderPlain",
                    value: function (e) {
                        return this.count++, g.default.DOM.span({
                            key: this.count,
                            className: "normal"
                        }, e)
                    }
                }, {
                    key: "renderHighlight",
                    value: function (e) {
                        return this.count++, g.default.DOM.span({
                            key: this.count,
                            className: "highlight"
                        }, e)
                    }
                }, {
                    key: "highlightChildren",
                    value: function (e, t) {
                        for (var a = [], n = e; n;) {
                            if (!t.test(n)) return a.push(this.renderPlain(n)), a;
                            var r = this.getMatchBoundaries(n, t),
                                l = n.slice(0, r.first);
                            l && a.push(this.renderPlain(l));
                            var o = n.slice(r.first, r.last);
                            o && a.push(this.renderHighlight(o, "span")), n = n.slice(r.last)
                        }
                        return a
                    }
                }, {
                    key: "generateElement",
                    value: function (e) {
                        var t = this.props,
                            a = t.word,
                            n = t.children;
                        if (a && /string/.test("undefined" == typeof n ? "undefined" : (0, l.default)(n))) {
                            var r = this.getSearch();
                            return this.highlightChildren(e, r)
                        }
                        return n
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = (e.word, e.parentClass),
                            a = e.children,
                            n = {
                                className: t ? "hcover " + t : "hcover"
                            };
                        return g.default.createElement("p", n, this.generateElement(a))
                    }
                }]), t
            }(v.Component);
        S.defaultProps = {
            sensitive: !1
        }, S.propTypes = {
            word: E.default.string,
            parentClass: E.default.string,
            sensitive: E.default.bool
        }, t.default = S, e.exports = t.default
    }, haZt: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("Zx67"),
            l = n(r),
            o = a("Zrlr"),
            c = n(o),
            u = a("wxAW"),
            s = n(u),
            i = a("zwoO"),
            d = n(i),
            f = a("Pf15"),
            h = n(f);
        a("XLxw");
        var m = a("U7vG"),
            p = n(m),
            v = a("KSGD"),
            g = n(v),
            y = function (e) {
                function t(e) {
                    (0, c.default)(this, t);
                    var a = (0, d.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e));
                    return a.scroll = a.scroll.bind(a), a.removeScroll = a.removeScroll.bind(a), a
                }
                return (0, h.default)(t, e), (0, s.default)(t, [{
                    key: "scroll",
                    value: function (e) {
                        var t = this.props,
                            a = t.onScroll,
                            n = t.min,
                            r = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                        r - window.pageYOffset < n && a && a(e)
                    }
                }, {
                    key: "removeScroll",
                    value: function () {
                        window.removeEventListener("scroll", this.scroll, !1)
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        var t = e.end;
                        t && t !== this.props.end && this.removeScroll()
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        var e = this.props.end;
                        e || window.addEventListener("scroll", this.scroll, !1)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        this.removeScroll()
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.end,
                            a = e.err,
                            n = e.show,
                            r = (e.request, e.complete),
                            l = void 0;
                        l = p.default.createElement("span", {
                            className: "u-scroll_load"
                        }, "正在加载...");
                        var o = t ? r : a || l;
                        return n ? p.default.createElement("p", {
                            className: "u-scroll"
                        }, o) : null
                    }
                }]), t
            }(m.Component);
        y.propTypes = {
            end: g.default.bool,
            err: g.default.string,
            show: g.default.bool,
            request: g.default.bool,
            onScroll: g.default.func,
            min: g.default.number
        }, y.defaultProps = {
            end: !1,
            show: !0,
            request: !1,
            min: 100,
            complete: "全部加载完"
        }, t.default = y, e.exports = t.default
    }, HpeD: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            var t = e.clickReload;
            return o.default.createElement("div", {
                className: "u-lderror",
                onClick: function () {
                    t()
                }
            }, o.default.createElement("i", {
                className: "image"
            }), o.default.createElement("span", {
                className: "text"
            }, "加载失败，点击重试"))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), a("qO/U");
        var l = a("U7vG"),
            o = n(l);
        t.default = r, e.exports = t.default
    }, Oums: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            return o.default.createElement("div", {
                className: "u-spin"
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), a("zjHu");
        var l = a("U7vG"),
            o = n(l);
        t.default = r, e.exports = t.default
    }, KQ2m: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("Dd8w"),
            l = n(r),
            o = a("C4at"),
            c = o.Config.g_client || "",
            u = o.Config.g_platform,
            s = o.Env.getOSVersionStr(),
            i = "ios" == u ? "phone" == o.Config.g_device ? "iphone" : "ipad" : u,
            d = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = {
                        source: o.Config.g_logsource || c,
                        osver: s
                    };
                for (var a in t) e[a] || (e[a] = t[a]);
                return function (t) {
                    (0, o.SendLog)(t, e)
                }
            },
            f = {
                do: function (e, t) {
                    return 1 == arguments.length && (t = e, e = "click"), d(t)(e)
                }
            },
            h = o.Config.g_downloadLink,
            m = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.resType,
                    a = e.resQuery;
                if (!t || !a) throw new Error("resType and resQuery must be exist");
                var n = {
                    platform: u,
                    client: c,
                    deepLink: o.Native.getOrpheusLink(t, a),
                    storeLink: o.Env.isInNEMapp() ? "" : h,
                    autoRedirect: !!c
                };
                return function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = e.resType || "",
                        c = e.resQuery || "",
                        u = e.redirect || !1,
                        s = (0, l.default)({}, n);
                    (r || c) && (s.deepLink = o.Native.getOrpheusLink(r || t, c || a)), u && (s.autoRedirect = u && n.autoRedirect), o.Native.wakeup(s)
                }
            },
            p = {
                immediWakeup: function (e) {
                    m(e)()
                }, homeWakeupApp: m,
                download: function () {
                    o.Native.downloadApp(u, c, h, i)
                }, init: function (e) {
                    p.do = m(e)
                }
            },
            v = {
                HomeLog: f,
                HomeWakeup: p
            };
        t.default = v, e.exports = t.default
    }, G84r: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            var e = function () {
                u.Env.isInNEMapp() || (c.HomeLog.do({
                    button: "downloadclient",
                    page: "officialweb",
                    position: "bottom"
                }), c.HomeWakeup.do())
            };
            return o.default.createElement("footer", {
                className: "m-homeft",
                onClick: e
            }, o.default.createElement("div", {
                className: "ftwrap"
            }, o.default.createElement("div", {
                className: "logo"
            }, o.default.createElement("svg", {
                className: "logosvg",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 460 88"
            }, o.default.createElement("path", {
                fillRule: "evenodd",
                fill: "#e60012",
                d: "M0,17.171C0,7.688,7.819,0,17.466,0h54.583 c9.646,0,17.466,7.688,17.466,17.171v53.658c0,4.742-1.705,8.789-5.116,12.142c-3.411,3.354-7.527,5.03-12.351,5.03H17.466 C7.819,88.001,0,80.313,0,70.829V17.171z"
            }), o.default.createElement("path", {
                fill: "#fff",
                d: "m63.6 29c-2.874-1.817-6.396-2.814-10.02-2.993l-.808-2.892.024.027c-.031-.086-.059-.17-.086-.252l-.239-.855c-.552-2.473.454-3.653.969-4.078.088-.064.179-.129.277-.192 2.364-1.535 5.731.924 5.92 1.068 1.494 1.403 4.229 1.75 5.704.314 1.491-1.451 1.136-4.165-.354-5.617-2.32-2.258-9.443-5.885-15.504-1.951-5.45 3.537-5.558 8.515-4.662 11.392l1.086 3.893c-1.819.51-3.564 1.241-5.159 2.191-5.967 3.559-8.96 9.565-8.212 16.479.767 7.097 6.216 12.247 12.957 12.247 7.157 0 12.978-5.668 12.978-12.636-.097-1.664-.077-1.644-.307-3.131-.224-1.451-2.422-8.271-2.422-8.271 1.35.304 2.613.801 3.702 1.489 12.307 7.788 7.186 20.18 6.955 20.726-3.389 7.919-10.78 12.646-20.277 12.973-6.188.214-12.12-2.041-16.697-6.346-4.829-4.537-7.598-10.895-7.598-17.44 0-9.859 6.369-18.812 15.847-22.274 1.973-.722 3.567-2.776 2.476-5.162-.859-1.875-3.185-2.52-5.158-1.798-12.44 4.546-20.798 16.294-20.798 29.23 0 8.552 3.619 16.857 9.929 22.788 5.819 5.469 13.307 8.445 21.19 8.444.358 0 .719-.006 1.078-.018 12.422-.427 22.536-6.984 27.04-17.509 2.812-6.392 4.38-20.857-9.827-29.85m-12.768 16.15c0 2.868-2.397 5.202-5.344 5.202-3.271 0-5.073-2.898-5.365-5.592-.555-5.135 2.2-7.926 4.609-9.363.977-.582 2.051-1.038 3.172-1.369 0 0 2.598 8.05 2.801 9.297.223 1.379.127 1.825.127 1.825"
            }), o.default.createElement("g", {
                fill: "#101010"
            }, o.default.createElement("path", {
                d: "m142.75 65.867c0 0-.516-4.094 0-4.726 11.981-14.67 11.718-34.407 11.718-34.407h7.344c-.126.678-3.794 25.512-19.06 39.13"
            }), o.default.createElement("path", {
                d: "m162.48 65.867c0 0 .516-4.094 0-4.726-11.981-14.67-12.603-34.407-12.603-34.407h-7.345c.126.678 4.681 25.512 19.948 39.13"
            }), o.default.createElement("path", {
                d: "m120.71 65.867c0 0-.515-4.094 0-4.726 11.981-14.67 12.644-34.407 12.644-34.407h7.345c-.126.678-4.721 25.512-19.989 39.13"
            }), o.default.createElement("path", {
                d: "m140.44 65.867c0 0 .516-4.094 0-4.726-11.98-14.67-11.677-34.407-11.677-34.407h-7.345c.126.678 3.755 25.512 19.02 39.13"
            }), o.default.createElement("path", {
                d: "m163.65 15.904h-45.905c-5.649-.067-7.345-.93-7.345-2.708 0 1.133 0 55.958 0 61.37h8.263v-54.15h41.31c2.741 0 4.591.871 4.591 3.61v43.32c0 2.523-1.514 3.124-8.996 3.947-.636.07-1.104 3.272-1.104 3.272h9.181c5.537 0 9.182-2.029 9.182-8.122v-42.42c0-6.093-3.645-8.123-9.182-8.123"
            }), o.default.createElement("path", {
                d: "m259.13 21.319h58.759c-.166-2.751-.963-4.513-3.673-4.513h-58.759c.167 2.752.963 4.513 3.673 4.513"
            }), o.default.createElement("path", {
                d: "m316.06 35.761h-62.43c.166 2.751.964 4.513 3.672 4.513h62.43c-.167-2.752-.963-4.513-3.672-4.513"
            }), o.default.createElement("path", {
                fillRule: "evenodd",
                d: "m378.49 61.03h-37.642v-4.512h37.642v4.512"
            }), o.default.createElement("path", {
                d: "m363.8 20.426v-6.318h-8.255v6.318h8.255"
            }), o.default.createElement("path", {
                d: "m387.67 18.612h-59.678c.167 2.751.964 4.513 3.673 4.513h59.677c-.166-2.752-.963-4.513-3.672-4.513"
            }), o.default.createElement("path", {
                d: "m389.51 35.761h-63.35c.166 2.751.963 4.513 3.673 4.513h63.35c-.166-2.752-.963-4.513-3.673-4.513"
            }), o.default.createElement("path", {
                d: "m317.72 64.11c-1.168-4.204-3.503-12.11-3.503-12.11h-8.263c0 0 2.677 9.02 3.742 12.521.523 1.718.286 2.467.16 3.387-.326 2.373-1.394 2.144-3.902 2.144h-35.806c-4.287 0-4.971-3.768-4.361-5.528 2.349-6.791 8.263-24.368 8.263-24.368h-8.263c0 0-5.711 17.13-8.01 23.951-.566 1.68-.422 3.659-.25 4.479.924 4.414 4.279 5.979 8.951 5.979h43.15c4.672 0 7.272-1.567 8.196-5.981.173-.821.523-2.234-.101-4.479"
            }), o.default.createElement("path", {
                d: "m376.65 42.98h-38.561c-3.396.032-5.509-.172-5.509-.902 0 0 0 21.352 0 26.18 0 6.094 2.727 6.317 8.264 6.317h45.904v-24.368c.0001-6.095-4.561-7.222-10.1-7.222m1.836 8.124v18.954h-33.97c-2.74 0-3.672-.643-3.672-2.707v-19.857h33.05c2.739 0 4.59-.237 4.59 1.805v1.805"
            }), o.default.createElement("path", {
                d: "m344.52 31.25v-.902-2.708h-8.263v2.708c0 2.157.702 4.296 1.537 5.744h11.08c-2.74 0-4.357-2.104-4.357-4.842"
            }), o.default.createElement("path", {
                d: "m383.08 30.346v-2.708h-8.263v2.708.902c0 2.738-1.617 4.842-4.362 4.842h11.1c.836-1.448 1.526-3.587 1.526-5.744"
            }), o.default.createElement("path", {
                d: "m425.31 25.832v41.519c0 2.523-.153 3.124-7.634 3.947-.637.07-2.061 3.386-2.061 3.386h9.396c5.102 0 8.572-1.367 8.561-6.431-.026-11.852 0-42.42 0-42.42h-8.262"
            }), o.default.createElement("path", {
                d: "m459.74 71.3c.586.993 0 1.354 0 1.354-5.779-1.489-13.224-9.586-15.15-22.45h8.263c-.0001-.0001 1.37 11.738 6.885 21.1"
            }), o.default.createElement("path", {
                fillRule: "evenodd",
                d: "m234.35 29.432h-35.818v-4.492h35.818v4.492"
            }), o.default.createElement("path", {
                d: "m233.43 15.904h-34.888c-6.191 0-8.263-.859-8.263-2.708 0 1.133 0 11.732 0 17.15 0 6.093 1.809 9.02 7.345 9.02h35.807 9.181v-15.343c-.002-6.093-3.646-8.123-9.182-8.123m.918 18.953h-32.13c-2.741 0-3.672-.871-3.672-3.609v-10.831h32.13c2.74 0 3.672-.032 3.672 2.708v11.732"
            }), o.default.createElement("path", {
                d: "m205.2 46.25c-3.938 5.417-12.175 14.665-23.18 20.2-.637.319-2.384 1.805-1.836 1.805 1.147 0 .479 0 3.672 0 7.262 0 27.05-13.988 29.609-22h-8.263"
            }), o.default.createElement("path", {
                d: "m223.1 46.25c-4.625 10.639-14.276 21.563-26.854 27.08-.654.286-1.926 1.24-1.377 1.24 1.376 0 2.066 0 2.754 0 8.409 0 29.902-12.262 33.741-28.317h-8.264"
            }), o.default.createElement("path", {
                d: "m247.2 53.02c0-6.095-3.645-10.944-9.181-10.944h-43.15c-1.977-.045-3.645-.172-4.132-1.241-.352-.771-1.376-.676-1.376-.676-1.069 6.146-2.452 10.509-8.263 13.538-.25.105-1.524 1.292-.688 1.354 1.619.119 4.143-.324 5.508-.677 3.185-.823 6.293-4.333 8.952-7.785h39.479c2.757.011 4.59.984 4.59 3.724v9.477c0 4.106-.745 11.507-14.502 11.507-.64 0-1.104 3.272-1.104 3.272h7.345c9.767 0 16.525-3.325 16.525-15.456v-6.093z"
            }), o.default.createElement("path", {
                d: "m455.61 39.37h-43.15c-2.741 0-4.344.015-4.132-2.595.224-2.775 1.377-17.262 1.377-17.262 3.71-.003 31.04-.176 46.13-1.016.884-.05.896-4.114 0-4.062-15.1.884-46.13.563-46.13.563h-8.264c0 0-.927 15.14-1.376 21.1-.453 6.01 3.186 7.785 8.722 7.785h50.5c-.165-2.75-.962-4.511-3.672-4.511"
            }), o.default.createElement("path", {
                d: "m398.69 71.3c-.585.993 0 1.354 0 1.354 5.778-1.489 13.682-9.586 15.608-22.45h-8.264c0-.0001-1.829 11.738-7.344 21.1"
            })))), !u.Env.isInNEMapp() && o.default.createElement("div", {
                className: "openapp"
            }, "打开APP，发现更多好音乐 >"), o.default.createElement("p", {
                className: "copyright"
            }, "网易公司版权所有©1997-2017   杭州乐读科技有限公司运营")))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), a("766F");
        var l = a("U7vG"),
            o = n(l),
            c = a("KQ2m"),
            u = a("C4at");
        t.default = r, e.exports = t.default
    }, ysMc: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("Zx67"),
            l = n(r),
            o = a("Zrlr"),
            c = n(o),
            u = a("wxAW"),
            s = n(u),
            i = a("zwoO"),
            d = n(i),
            f = a("Pf15"),
            h = n(f);
        a("ibnI");
        var m = a("U7vG"),
            p = n(m),
            v = a("4n+p"),
            g = a("KQ2m"),
            y = a("/PID"),
            E = n(y),
            S = a("Oums"),
            b = n(S),
            _ = a("HpeD"),
            w = n(_),
            k = a("Xlru"),
            R = a("C4at"),
            C = "production",
            N = "production" == C ? 3778678 : 319377029,
            M = function (e) {
                function t(e) {
                    return (0, c.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e))
                }
                return (0, h.default)(t, e), (0, s.default)(t, [{
                    key: "shouldComponentUpdate",
                    value: function (e) {
                        return this.props.time != e.time
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props.time;
                        return p.default.createElement("div", {
                            className: "hotop"
                        }, p.default.createElement("div", {
                            className: "hotopct"
                        }, p.default.createElement("div", {
                            className: "u-hmsprt hoticon"
                        }), p.default.createElement("div", {
                            className: "hottime"
                        }, "更新日期：", R.Datetime.formatDate(e, "{MM}月{DD}日"))))
                    }
                }]), t
            }(m.Component),
            H = function (e) {
                function t(e) {
                    (0, c.default)(this, t);
                    var a = (0, d.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e));
                    return a.viewFullList = a.viewFullList.bind(a), a.songClk = a.songClk.bind(a), a.request = a.request.bind(a), a
                }
                return (0, h.default)(t, e), (0, s.default)(t, [{
                    key: "viewFullList",
                    value: function () {
                        var e = N,
                            t = "playlist";
                        g.HomeLog.do({
                            type: "fulllist",
                            page: "officialweb_main"
                        }), R.Env.isInNEMapp() ? location.href = "orpheus://playlist/" + N : g.HomeWakeup.do({
                            resType: t,
                            resQuery: e
                        })
                    }
                }, {
                    key: "songClk",
                    value: function (e, t) {
                        g.HomeLog.do({
                            type: "song",
                            page: "officialweb_hotsong",
                            resourceid: t.id,
                            position: e
                        })
                    }
                }, {
                    key: "request",
                    value: function () {
                        var e = this.props,
                            t = e.homeHotRequest,
                            a = e.HomeHot,
                            n = a.loaded;
                        n || t && t({
                            id: N
                        })
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        window.scrollTo(0, 0), this.request(), g.HomeLog.do("page", {
                            type: "officialweb",
                            id: "hotsong"
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props.HomeHot,
                            t = e.request,
                            a = e.data,
                            n = e.msg,
                            r = e.updateTime;
                        return p.default.createElement("div", {
                            className: "m-hmhot"
                        }, p.default.createElement(M, {
                            time: r
                        }), p.default.createElement("div", {
                            className: "hotcont"
                        }, t ? p.default.createElement(b.default, null) : "" == n ? p.default.createElement(E.default, {
                            onClick: this.songClk,
                            isSort: !0,
                            list: a
                        }) : p.default.createElement(w.default, {
                            clickReload: this.request
                        })), !t && "" == n && p.default.createElement("div", {
                            className: "hotdn",
                            onClick: this.viewFullList
                        }, p.default.createElement("span", {
                            className: "hotview"
                        }, "查看完整榜单")))
                    }
                }]), t
            }(m.Component);
        t.default = (0, v.connect)(function (e) {
            var t = e.HomeHot;
            return {
                HomeHot: t
            }
        }, {
            homeHotRequest: k.homeHotRequest
        })(H), e.exports = t.default
    }, omIm: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return {
                tabIndex: e.Home.tabIndex
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = a("mvHQ"),
            o = n(l),
            c = a("Zx67"),
            u = n(c),
            s = a("Zrlr"),
            i = n(s),
            d = a("wxAW"),
            f = n(d),
            h = a("zwoO"),
            m = n(h),
            p = a("Pf15"),
            v = n(p);
        a("vWOO"), a("DTei");
        var g = a("U7vG"),
            y = n(g),
            E = a("KSGD"),
            S = (n(E), a("4n+p")),
            b = a("C4at"),
            _ = a("KQ2m"),
            w = a("PNm1"),
            k = n(w),
            R = a("iiZf"),
            C = n(R),
            N = a("kpy7"),
            M = n(N),
            H = a("ymtG"),
            O = n(H),
            q = a("ysMc"),
            x = n(q),
            T = a("oLDG"),
            P = n(T),
            L = a("7Pi6"),
            I = n(L),
            j = a("jmrq"),
            A = a("5fdt"),
            D = a("hpFO"),
            U = (a("PwSW"), a("KQH8"), function (e) {
                function t(e) {
                    (0, i.default)(this, t);
                    var a = (0, m.default)(this, (t.__proto__ || (0, u.default)(t)).call(this, e));
                    return a.tabCallback = a.tabCallback.bind(a), a.leaveLog = a.leaveLog.bind(a), a
                }
                return (0, v.default)(t, e), (0, f.default)(t, [{
                    key: "tabCallback",
                    value: function (e) {
                        this.props.dispatch((0, j.changeTab)(e)), 1 == e ? _.HomeLog.do({
                            type: "hotsong",
                            page: "officialweb"
                        }) : 2 == e && _.HomeLog.do({
                            type: "search",
                            page: "officialweb"
                        })
                    }
                }, {
                    key: "leaveLog",
                    value: function (e) {
                        var t = this;
                        if (!t.isSendLeave) {
                            var a = {
                                logs: (0, o.default)([{
                                    action: "bounceout",
                                    json: {
                                        type: "officialweb",
                                        id: "main",
                                        platform: b.Config.g_platform,
                                        client: b.Config.g_client,
                                        source: b.Config.g_logsource || b.Config.g_client || "",
                                        osver: b.Env.getOSVersionStr(),
                                        url: location.href,
                                        device: navigator.userAgent,
                                        time: (C.default.now() - t.startViewTime) / 1e3 | 0
                                    }
                                }])
                            };
                            (0, k.default)({
                                url: b.Url.CurrentHost + "/api/feedback/weblog",
                                sync: !0,
                                data: a
                            }), t.isSendLeave = !0
                        }
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        b.MusicCommon.setPageTitle("网易云音乐"), _.HomeWakeup.init({
                            resType: "home",
                            resQuery: "home"
                        });
                        var e = {
                            type: "officialweb",
                            id: "main",
                            url: location.href,
                            referrer: document.referrer,
                            device: navigator.userAgent
                        };
                        _.HomeLog.do("page", b.MusicCommon.getLogMarket(e));
                        var t = "网易云音乐移动网页版 - 超清音质、优质歌单、逗趣乐评、智能推荐、精致视觉...尽在网易云音乐！",
                            a = "网易云音乐移动网页版",
                            n = "超清音质、优质歌单、逗趣乐评、智能推荐、精致视觉...尽在网易云音乐！",
                            r = "http://p4.music.126.net/FtW_Z9lkb47ObTsGSSBlPg==/19135900369963408.jpg";
                        b.WeChat.registWeiXinShare({
                            resType: "officialweb",
                            resId: "",
                            picUrl: r,
                            appTitle: a,
                            title: t,
                            content: n
                        }), window.addEventListener("pagehide", this.leaveLog, !1), this.startViewTime = C.default.now(), b.MusicCommon.getFromBaidu();
                        var l = "网易云音乐";
                        b.MusicCommon.setPageTitle(l)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        window.removeEventListener("pagehide", this.leaveLog, !1)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props.tabIndex,
                            a = b.Env.isInNEMapp();
                        return y.default.createElement("div", {
                            className: "m-home"
                        }, !a && y.default.createElement(M.default, null), y.default.createElement(I.default, {
                            classTab: a ? "z-native m-tabarea-index" : "m-tabarea-index",
                            classTabArea: "f-bd f-bd-btm",
                            tabIndex: t,
                            onChange: this.tabCallback
                        }, y.default.createElement(I.default, {
                            title: "推荐音乐"
                        }, y.default.createElement(O.default, {
                            onLeave: e.leaveLog
                        })), y.default.createElement(I.default, {
                            title: "热歌榜"
                        }, y.default.createElement(x.default, null)), y.default.createElement(I.default, {
                            title: "搜索"
                        }, y.default.createElement(P.default, {
                            onLeave: e.leaveLog
                        }))))
                    }
                }]), t
            }(g.Component));
        U.ComponentName = "home", U.fetch = function (e) {
            var t = e.data,
                a = e.dispatch,
                n = (e.type, t.s);
            n ? a && (a((0, j.changeTab)(2)), a((0, D.setInputValue)(n)), a((0, D.setSearchState)(!1))) : a && a((0, A.homeRemdRequest)(t))
        }, t.default = (0, S.connect)(r)(U), e.exports = t.default
    }, ymtG: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            var t = e.title,
                a = e.name;
            return v.default.createElement("h2", {
                className: a
            }, t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = a("Zx67"),
            o = n(l),
            c = a("Zrlr"),
            u = n(c),
            s = a("wxAW"),
            i = n(s),
            d = a("zwoO"),
            f = n(d),
            h = a("Pf15"),
            m = n(h);
        a("iVlH");
        var p = a("U7vG"),
            v = n(p),
            g = a("4n+p"),
            y = a("Zfgq"),
            E = a("Oums"),
            S = n(E),
            b = a("HpeD"),
            _ = n(b),
            w = a("5fdt"),
            k = a("KQ2m"),
            R = a("/PID"),
            C = n(R),
            N = a("G84r"),
            M = n(N),
            H = a("C4at"),
            O = a("iiZf"),
            q = n(O),
            x = function (e) {
                function t(e) {
                    (0, u.default)(this, t);
                    var a = (0, f.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e));
                    return a.state = {
                        dpr: !1
                    }, a.sendpoint = a.sendpoint.bind(a), a
                }
                return (0, m.default)(t, e), (0, i.default)(t, [{
                    key: "sendpoint",
                    value: function (e) {
                        var t = this.props,
                            a = t.index,
                            n = t.data;
                        t.onLeave;
                        k.HomeLog.do({
                            type: "playlist",
                            page: "officialweb_main",
                            resourceid: n.id,
                            position: a + 1
                        })
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        var e = this,
                            t = this.state.dpr;
                        t || (this.dprtime = window.setTimeout(function () {
                            e.setState({
                                dpr: !0
                            })
                        }, 100))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        window.clearTimeout(this.dprtime)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.state.dpr,
                            t = this.props.data,
                            a = t.id,
                            n = t.picUrl,
                            r = t.name,
                            l = t.playCount,
                            o = t.highQuality,
                            c = void 0;
                        if (a) {
                            n = e ? H.ImageSuffix.directSuffix(n, {
                                paramWidth: 123
                            }) : H.ImageSuffix.directSuffix(n, {
                                paramWidth: 40,
                                dpr: 1,
                                webp: !1
                            });
                            var u = Math.floor(l);
                            u = q.default.getReadCount(u);
                            var s = void 0;
                            o && (s = v.default.createElement("i", {
                                className: "remd_high"
                            }));
                            var i = H.Env.isInNEMapp(),
                                d = H.Env.isInNEMapp() ? "orpheus://playlist/" + a : "/m/playlist" + H.TransParams.joinParam("?id=" + a);
                            c = i ? v.default.createElement("a", {
                                href: d,
                                className: "remd_li",
                                onClick: this.sendpoint
                            }, v.default.createElement("div", {
                                className: "remd_img"
                            }, v.default.createElement("img", {
                                className: "u-img",
                                src: n
                            }), v.default.createElement("span", {
                                className: "remd_lnum"
                            }, u), s), v.default.createElement("p", {
                                className: "remd_text"
                            }, r)) : v.default.createElement(y.Link, {
                                to: d,
                                className: "remd_li",
                                onClick: this.sendpoint
                            }, v.default.createElement("div", {
                                className: "remd_img"
                            }, v.default.createElement("img", {
                                className: "u-img",
                                src: n
                            }), v.default.createElement("span", {
                                className: "u-earp remd_lnum"
                            }, u), s), v.default.createElement("p", {
                                className: "remd_text"
                            }, r))
                        } else c = v.default.createElement("div", {
                            className: "remd_li"
                        });
                        return c
                    }
                }]), t
            }(p.Component),
            T = function (e) {
                function t(e) {
                    (0, u.default)(this, t);
                    var a = (0, f.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e));
                    return a.state = {}, a.load = !1, a.songClk = a.songClk.bind(a), a.requestRecommend = a.requestRecommend.bind(a), a.requestNew = a.requestNew.bind(a), a.scrolltop = a.scrolltop.bind(a), a
                }
                return (0, m.default)(t, e), (0, i.default)(t, [{
                    key: "songClk",
                    value: function (e, t) {
                        k.HomeLog.do({
                            type: "song",
                            page: "officialweb_main",
                            resourceid: t.id,
                            position: e
                        })
                    }
                }, {
                    key: "requestRecommend",
                    value: function () {
                        var e = this.props,
                            t = e.homeRemdRequest,
                            a = e.HomeRecommend,
                            n = a.loaded;
                        n || t && t({
                            limit: 6
                        })
                    }
                }, {
                    key: "requestNew",
                    value: function () {
                        var e = this.props,
                            t = e.homeNewRequest,
                            a = e.HomeRecommend,
                            n = a.new_loaded;
                        n || t && t({
                            limit: 10
                        })
                    }
                }, {
                    key: "scrolltop",
                    value: function () {
                        window.scrollTo(0, 0), document.body.scrollTop = 0
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        window.addEventListener("pageshow", this.scrolltop), this.scrolltop(), this.requestRecommend(), this.requestNew()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        window.removeEventListener("pageshow", this.scrolltop)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.HomeRecommend,
                            a = e.onLeave,
                            n = t.request,
                            l = (t.data, t.msg),
                            o = t.new_request,
                            c = t.new_data,
                            u = t.new_msg,
                            s = t.loaded,
                            i = t.data._list || [];
                        return v.default.createElement("div", {
                            className: "m-homeremd",
                            ref: "homeremd"
                        }, v.default.createElement(r, {
                            title: "推荐歌单",
                            name: "remd_tl"
                        }), v.default.createElement("div", {
                            className: "remd_songs"
                        }, n ? v.default.createElement(S.default, null) : "" == l ? i.map(function (e, t) {
                            return v.default.createElement("div", {
                                key: "songul_" + t,
                                className: "remd_ul"
                            }, e.map(function (e, n) {
                                return v.default.createElement(x, {
                                    onLeave: a,
                                    isNode: s,
                                    index: n + 3 * t,
                                    data: e || {}, key: "songmenu_" + n
                                })
                            }))
                        }) : v.default.createElement(_.default, {
                            clickReload: this.requestRecommend
                        })), v.default.createElement(r, {
                            title: "最新音乐",
                            name: "remd_tl"
                        }), v.default.createElement("div", {
                            className: "remd_newsg"
                        }, o ? v.default.createElement(S.default, null) : "" == u ? v.default.createElement(C.default, {
                            onClick: this.songClk,
                            list: c
                        }) : v.default.createElement(_.default, {
                            clickReload: this.requestNew
                        })), v.default.createElement(M.default, null))
                    }
                }]), t
            }(p.Component);
        t.default = (0, g.connect)(function (e) {
            var t = e.HomeRecommend;
            return {
                HomeRecommend: t
            }
        }, {
            homeRemdRequest: w.homeRemdRequest,
            homeNewRequest: w.homeNewRequest
        })(T), e.exports = t.default
    }, "7nYt": function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            var t = e.data,
                a = e.index,
                n = e.clickSearchItem,
                r = t.first,
                l = t.second;
            return g.default.createElement("li", {
                className: "item f-bd f-bd-full",
                onClick: function () {
                    n(r, l, a, 0)
                }
            }, g.default.createElement("a", {
                className: "link",
                href: "javascript:void(0);"
            }, r))
        }

        function l(e) {
            var t = e.data,
                a = e.index,
                n = e.clickSearchItem,
                r = e.deleteHistory,
                l = t.first,
                o = t.second;
            return g.default.createElement("li", {
                className: "item",
                onClick: function () {
                    n(l, o, a, 1)
                }
            }, g.default.createElement("i", {
                className: "u-svg u-svg-histy"
            }), g.default.createElement("div", {
                className: "histyr f-bd f-bd-btm"
            }, g.default.createElement("span", {
                className: "link f-thide"
            }, l), g.default.createElement("figure", {
                className: "close",
                onClick: function (e) {
                    e.stopPropagation(), r(a)
                }
            }, g.default.createElement("i", {
                className: "u-svg u-svg-close"
            }))))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = a("Zx67"),
            c = n(o),
            u = a("Zrlr"),
            s = n(u),
            i = a("wxAW"),
            d = n(i),
            f = a("zwoO"),
            h = n(f),
            m = a("Pf15"),
            p = n(m),
            v = a("U7vG"),
            g = n(v),
            y = a("KSGD"),
            E = n(y),
            S = a("Oums"),
            b = n(S),
            _ = a("HpeD"),
            w = (n(_), a("KQ2m")),
            k = a("4n+p"),
            R = a("hpFO"),
            C = a("PwSW"),
            N = a("KQH8"),
            M = a("FHOB"),
            H = function (e) {
                function t(e) {
                    (0, s.default)(this, t);
                    var a = (0, h.default)(this, (t.__proto__ || (0, c.default)(t)).call(this, e));
                    return a.state = {
                        sendLog: !1
                    }, a.clickSearchItem = a.clickSearchItem.bind(a), a.deleteHistory = a.deleteHistory.bind(a), a.sendHotviewLog = a.sendHotviewLog.bind(a), a
                }
                return (0, p.default)(t, e), (0, d.default)(t, [{
                    key: "componentDidMount",
                    value: function () {
                        var e = this.props,
                            t = e.SearchHot,
                            a = e.searchHotRequest,
                            n = t.hasHotSearch;
                        n || (a && a({
                            type: 1111
                        }), this.setState({
                            sendLog: !0
                        }))
                    }
                }, {
                    key: "clickSearchItem",
                    value: function (e, t, a, n) {
                        var r = this.props,
                            l = r.saveHistory,
                            o = r.setInputValue,
                            c = r.setSearchState,
                            u = r.searchMatchRequest,
                            s = r.searchSongRequest,
                            i = r.SearchSong,
                            d = i.limit,
                            f = i.offset;
                        o && o(e), c && c(!1), u && u({
                            s: e,
                            limit: 10,
                            version: 4
                        }), s && s({
                            s: e,
                            type: 1,
                            limit: d,
                            offset: f,
                            strategy: 5,
                            queryCorrect: !0
                        }), n || (w.HomeLog.do({
                            type: "hotkeyword",
                            keyword: e,
                            position: a + 1,
                            page: "officialweb_search"
                        }), a = void 0), l && l({
                            keyword: e,
                            type: 1,
                            index: a
                        })
                    }
                }, {
                    key: "deleteHistory",
                    value: function (e) {
                        var t = this.props.delHistory;
                        t && t(e), this.state.sendLog && this.setState({
                            sendLog: !1
                        })
                    }
                }, {
                    key: "sendHotviewLog",
                    value: function (e) {
                        e.forEach(function (e, t) {
                            w.HomeLog.do("hotkeyimpress", {
                                keyword: e.first,
                                position: t + 1
                            })
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props,
                            a = t.Search,
                            n = t.SearchHot,
                            o = n.request,
                            c = n.data,
                            u = n.msg;
                        n.hasHotSearch;
                        if (o) return g.default.createElement(b.default, null);
                        if (u) return null;
                        var s = c.hots || [],
                            i = (a.inputValue, a.isSearching, a.historyList);
                        return this.state.sendLog && s.length > 0 && this.sendHotviewLog(s), g.default.createElement("div", {
                            className: "m-default",
                            ref: "default"
                        }, !!s.length && g.default.createElement("section", {
                            className: "m-hotlist"
                        }, g.default.createElement("h3", {
                            className: "title"
                        }, "热门搜索"), g.default.createElement("ul", {
                            className: "list"
                        }, s.map(function (t, a) {
                            return g.default.createElement(r, {
                                data: t,
                                key: "hotitem" + a,
                                index: a,
                                clickSearchItem: e.clickSearchItem
                            })
                        }))), !!i.length && g.default.createElement("section", {
                            className: "m-history"
                        }, g.default.createElement("ul", {
                            className: "list"
                        }, i.map(function (t, a) {
                            return g.default.createElement(l, {
                                data: t,
                                key: "historyitem" + a,
                                index: a,
                                clickSearchItem: e.clickSearchItem,
                                deleteHistory: e.deleteHistory
                            })
                        }))))
                    }
                }]), t
            }(v.Component);
        H.propTypes = {
            Search: E.default.object,
            SearchHot: E.default.object,
            SearchSong: E.default.object,
            setInputValue: E.default.func,
            setSearchState: E.default.func,
            saveHistory: E.default.func,
            delHistory: E.default.func,
            searchMatchRequest: E.default.func,
            searchSongRequest: E.default.func,
            searchHotRequest: E.default.func
        }, t.default = (0, k.connect)(function (e) {
            var t = e.Search,
                a = e.SearchHot,
                n = e.SearchSong;
            return {
                Search: t,
                SearchHot: a,
                SearchSong: n
            }
        }, {
            setInputValue: R.setInputValue,
            setSearchState: R.setSearchState,
            saveHistory: R.saveHistory,
            delHistory: R.delHistory,
            searchMatchRequest: C.searchMatchRequest,
            searchSongRequest: N.searchSongRequest,
            searchHotRequest: M.searchHotRequest
        })(H), e.exports = t.default
    }, ULGP: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("Zx67"),
            l = n(r),
            o = a("Zrlr"),
            c = n(o),
            u = a("wxAW"),
            s = n(u),
            i = a("zwoO"),
            d = n(i),
            f = a("Pf15"),
            h = n(f),
            m = a("U7vG"),
            p = n(m),
            v = a("KSGD"),
            g = n(v),
            y = a("4n+p"),
            E = a("hpFO"),
            S = a("Yu6K"),
            b = a("PwSW"),
            _ = a("KQH8"),
            w = function (e) {
                function t(e) {
                    (0, c.default)(this, t);
                    var a = (0, d.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e));
                    return a.state = {
                        value: a.props.Search.inputValue,
                        timer: null
                    }, a.searchKeyDown = a.searchKeyDown.bind(a), a.onChange = a.onChange.bind(a), a.startSearchingRecom = a.startSearchingRecom.bind(a), a.changeState = a.changeState.bind(a), a.clearInput = a.clearInput.bind(a), a.focus = a.focus.bind(a), a
                }
                return (0, h.default)(t, e), (0, s.default)(t, [{
                    key: "componentDidMount",
                    value: function () {
                        var e = this.props.Search,
                            t = e.inputValue,
                            a = e.isSearching;
                        t ? t && a && this.startSearchingRecom() : this.refs.searchInput.focus()
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        var t = e.Search,
                            a = t.inputValue;
                        a && a !== this.state.value && this.setState({
                            value: a
                        })
                    }
                }, {
                    key: "searchKeyDown",
                    value: function (e) {
                        var t = e.keyCode || e.charCode;
                        if (13 == t) {
                            e.preventDefault();
                            var a = this.props,
                                n = a.saveHistory,
                                r = a.SearchSong,
                                l = a.setInputValue,
                                o = a.setSearchState,
                                c = a.searchMatchRequest,
                                u = a.searchSongRequest,
                                s = r.limit,
                                i = r.offset,
                                d = this.state.value;
                            if (!d) return;
                            this.refs.searchInput.blur(), l && l(d), o && o(!1), c && c({
                                s: d,
                                limit: 10,
                                version: 4
                            }), u && u({
                                s: d,
                                type: 1,
                                limit: s,
                                offset: i,
                                strategy: 5,
                                queryCorrect: !0
                            }), n && n({
                                keyword: this.state.value
                            })
                        }
                    }
                }, {
                    key: "onChange",
                    value: function (e) {
                        var t = e.target.value;
                        this.changeState(t), this.setState({
                            value: t
                        })
                    }
                }, {
                    key: "startSearchingRecom",
                    value: function () {
                        var e = this.props.searchRecomRequest;
                        e && e({
                            s: this.state.value
                        })
                    }
                }, {
                    key: "changeState",
                    value: function (e) {
                        var t = this,
                            a = this.props,
                            n = a.Search,
                            r = a.setInputValue,
                            l = a.setSearchState,
                            o = a.searchMatchClear,
                            c = a.searchSongClear;
                        r && r(e), l && l(!!e);
                        var u = null;
                        e ? e !== this.state.value && (clearTimeout(this.state.timer), u = setTimeout(function () {
                            t.startSearchingRecom()
                        }, 500), this.setState({
                            timer: u
                        })) : (clearTimeout(this.state.timer), this.setState({
                            timer: u
                        }));
                        var s = (n.isSearching, n.isResultClear);
                        e || s || (o && o(), c && c())
                    }
                }, {
                    key: "clearInput",
                    value: function (e) {
                        this.setState({
                            value: ""
                        }), this.changeState(""), this.isClear = !0, this.refs.searchInput.focus()
                    }
                }, {
                    key: "focus",
                    value: function () {
                        if (this.isClear) return void (this.isClear = !1);
                        var e = this.props,
                            t = e.Search,
                            a = e.setSearchState,
                            n = e.searchMatchClear,
                            r = e.searchSongClear;
                        this.state.value && !t.isSearching && (a && a(!0), this.startSearchingRecom(), n && n(), r && r())
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props.Search,
                            t = e.inputValue;
                        e.isSearching;
                        return p.default.createElement("form", {
                            className: "m-input f-bd f-bd-btm",
                            method: "get",
                            action: "#",
                            onSubmit: function () {
                                return !1
                            }
                        }, p.default.createElement("div", {
                            className: "inputcover"
                        }, p.default.createElement("i", {
                            className: "u-svg u-svg-srch"
                        }), p.default.createElement("input", {
                            type: "search",
                            name: "search",
                            className: "input",
                            ref: "searchInput",
                            placeholder: "",
                            value: this.state.value,
                            onChange: this.onChange,
                            onFocus: this.focus,
                            onKeyDown: this.searchKeyDown,
                            autoComplete: "off"
                        }), p.default.createElement("label", {
                            className: "holder"
                        }, this.state.value ? "" : "搜索歌曲、歌手、专辑"), p.default.createElement("figure", {
                            className: "close",
                            onClick: this.clearInput
                        }, p.default.createElement("i", {
                            className: "u-svg u-svg-empty" + (t ? " z-show" : "")
                        }))))
                    }
                }]), t
            }(m.Component);
        w.propTypes = {
            Search: g.default.object,
            SearchSong: g.default.object,
            SearchMatch: g.default.object,
            setInputValue: g.default.func,
            setSearchState: g.default.func,
            saveHistory: g.default.func,
            searchRecomRequest: g.default.func,
            searchMatchRequest: g.default.func,
            searchSongRequest: g.default.func,
            searchMatchClear: g.default.func,
            searchSongClear: g.default.func
        }, t.default = (0, y.connect)(function (e) {
            var t = e.Search,
                a = e.SearchSong,
                n = e.SearchMatch;
            return {
                Search: t,
                SearchSong: a,
                SearchMatch: n
            }
        }, {
            setInputValue: E.setInputValue,
            setSearchState: E.setSearchState,
            saveHistory: E.saveHistory,
            searchRecomRequest: S.searchRecomRequest,
            searchMatchRequest: b.searchMatchRequest,
            searchSongRequest: _.searchSongRequest,
            searchMatchClear: b.searchMatchClear,
            searchSongClear: _.searchSongClear
        })(w), e.exports = t.default
    }, gcI2: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("Zx67"),
            l = n(r),
            o = a("Zrlr"),
            c = n(o),
            u = a("wxAW"),
            s = n(u),
            i = a("zwoO"),
            d = n(i),
            f = a("Pf15"),
            h = n(f),
            m = a("U7vG"),
            p = n(m),
            v = a("KSGD"),
            g = n(v),
            y = a("KQ2m"),
            E = a("4n+p"),
            S = a("hpFO"),
            b = a("PwSW"),
            _ = a("KQH8"),
            w = a("Yu6K"),
            k = function (e) {
                function t(e) {
                    (0, c.default)(this, t);
                    var a = (0, d.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e));
                    return a.clickRecom = a.clickRecom.bind(a), a.sendRecomviewLog = a.sendRecomviewLog.bind(a), a
                }
                return (0, h.default)(t, e), (0, s.default)(t, [{
                    key: "componentWillUnmount",
                    value: function () {
                        var e = this.props.searchRecomClear;
                        e && e()
                    }
                }, {
                    key: "clickRecom",
                    value: function (e, t, a, n) {
                        var r = this.props,
                            l = r.setInputValue,
                            o = r.setSearchState,
                            c = r.saveHistory,
                            u = r.searchMatchRequest,
                            s = r.searchSongRequest,
                            i = (r.searchRecomClear, r.SearchSong),
                            d = i.limit,
                            f = i.offset;
                        u && u({
                            s: e,
                            limit: 10,
                            version: 4
                        }), s && s({
                            s: e,
                            type: 1,
                            limit: d,
                            offset: f,
                            strategy: 5,
                            queryCorrect: !0
                        }), l && l(e), o && o(!1), c && c({
                            keyword: e,
                            type: 1
                        }), y.HomeLog.do("search", {
                            type: "suggest",
                            page: "officialweb_search",
                            keyword: n,
                            position: a + 1
                        })
                    }
                }, {
                    key: "sendRecomviewLog",
                    value: function (e) {
                        y.HomeLog.do("searchkeyword", {
                            type: "suggest",
                            keyword: e,
                            page: "officialweb_search"
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props,
                            a = t.Search,
                            n = t.SearchRecom,
                            r = a.inputValue,
                            l = (a.isSearching, n.request),
                            o = n.data,
                            c = n.msg,
                            u = n.isSucc;
                        if (c) return null;
                        var s = o.allMatch || [];
                        return !l && u && s.length > 0 && this.sendRecomviewLog(r), p.default.createElement("section", {
                            className: "m-recom"
                        }, p.default.createElement("h3", {
                            className: "title f-bd f-bd-btm f-thide",
                            onClick: function () {
                                e.clickRecom(r, 1)
                            }
                        }, "搜索“", r, "”"), p.default.createElement("ul", null, s.map(function (t, a) {
                            return p.default.createElement("li", {
                                className: "recomitem",
                                key: "recomList" + a,
                                onClick: function () {
                                    e.clickRecom(t.keyword, t.type, a, r)
                                }
                            }, p.default.createElement("i", {
                                className: "u-svg u-svg-search"
                            }), p.default.createElement("span", {
                                className: "f-bd f-bd-btm f-thide"
                            }, t.keyword))
                        })))
                    }
                }]), t
            }(m.Component);
        k.propTypes = {
            Search: g.default.object,
            SearchRecom: g.default.object,
            setInputValue: g.default.func,
            setSearchState: g.default.func,
            saveHistory: g.default.func,
            searchMatchRequest: g.default.func,
            searchSongRequest: g.default.func,
            searchRecomRequest: g.default.func,
            searchRecomClear: g.default.func
        }, t.default = (0, E.connect)(function (e) {
            var t = e.Search,
                a = e.SearchRecom,
                n = e.SearchSong;
            return {
                Search: t,
                SearchRecom: a,
                SearchSong: n
            }
        }, {
            setInputValue: S.setInputValue,
            setSearchState: S.setSearchState,
            saveHistory: S.saveHistory,
            searchMatchRequest: b.searchMatchRequest,
            searchSongRequest: _.searchSongRequest,
            searchRecomRequest: w.searchRecomRequest,
            searchRecomClear: w.searchRecomClear
        })(k), e.exports = t.default
    }, xnRS: function (e, t) {
        "use strict";

        function a(e) {
            return function (t) {
                var a = {
                    type: e
                };
                return a.payload = t, a
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a, e.exports = t.default
    }, oLDG: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("Zx67"),
            l = n(r),
            o = a("Zrlr"),
            c = n(o),
            u = a("wxAW"),
            s = n(u),
            i = a("zwoO"),
            d = n(i),
            f = a("Pf15"),
            h = n(f);
        a("59px");
        var m = a("U7vG"),
            p = n(m),
            v = a("KSGD"),
            g = n(v),
            y = a("7nYt"),
            E = n(y),
            S = a("gcI2"),
            b = n(S),
            _ = a("TFn5"),
            w = n(_),
            k = a("ULGP"),
            R = n(k),
            C = a("4n+p"),
            N = a("hpFO"),
            M = a("Yu6K"),
            H = a("PwSW"),
            O = a("KQH8"),
            q = function (e) {
                function t(e) {
                    return (0, c.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e))
                }
                return (0, h.default)(t, e), (0, s.default)(t, [{
                    key: "componentDidMount",
                    value: function () {
                        var e = this.props,
                            t = e.Search,
                            a = e.SearchMatch,
                            n = e.SearchSong,
                            r = e.searchMatchRequest,
                            l = e.searchSongRequest,
                            o = e.searchRecomRequest,
                            c = e.saveHistory,
                            u = t.isSearching,
                            s = t.inputValue;
                        if (s && u) return void (o && o({
                            s: s
                        }));
                        if (s && !u) {
                            var i = n.limit,
                                d = n.offset,
                                f = n.loaded;
                            a.loaded || r && r({
                                s: s,
                                limit: 10,
                                version: 4
                            }), f || l && l({
                                s: s,
                                type: 1,
                                limit: i,
                                offset: d,
                                strategy: 5,
                                queryCorrect: !0
                            }), c && c({
                                keyword: s,
                                type: 1
                            })
                        }
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.Search,
                            a = e.onLeave,
                            n = t.inputValue,
                            r = t.isSearching;
                        return p.default.createElement("div", {
                            className: "m-hmsrch"
                        }, p.default.createElement(R.default, null), !n && !r && p.default.createElement(E.default, null), !!n && r && p.default.createElement(b.default, null), !!n && !r && p.default.createElement(w.default, {
                            onLeave: a
                        }))
                    }
                }]), t
            }(m.Component);
        q.propTypes = {
            Search: g.default.object,
            SearchRecom: g.default.object,
            SearchSong: g.default.object,
            SearchMatch: g.default.object
        }, t.default = (0, C.connect)(function (e) {
            var t = e.Search,
                a = e.SearchSong,
                n = e.SearchMatch,
                r = e.SearchRecom;
            return {
                Search: t,
                SearchSong: a,
                SearchMatch: n,
                SearchRecom: r
            }
        }, {
            searchMatchRequest: H.searchMatchRequest,
            searchSongRequest: O.searchSongRequest,
            searchRecomRequest: M.searchRecomRequest,
            saveHistory: N.saveHistory
        })(q), e.exports = t.default
    }, "/PID": function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("Zx67"),
            l = n(r),
            o = a("Zrlr"),
            c = n(o),
            u = a("wxAW"),
            s = n(u),
            i = a("zwoO"),
            d = n(i),
            f = a("Pf15"),
            h = n(f);
        a("rDQl");
        var m = a("U7vG"),
            p = n(m),
            v = a("KSGD"),
            g = n(v),
            y = a("Zfgq"),
            E = a("ApSC"),
            S = n(E),
            b = a("iiZf"),
            _ = (n(b), a("peeL")),
            w = (n(_), a("C4at")),
            k = a("KQ2m"),
            R = a("Fh61"),
            C = n(R),
            N = function (e) {
                function t(e) {
                    (0, c.default)(this, t);
                    var a = (0, d.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e));
                    return a.clk = a.clk.bind(a), a.getAlias = a.getAlias.bind(a), a
                }
                return (0, h.default)(t, e), (0, s.default)(t, [{
                    key: "clk",
                    value: function (e) {
                        var t = this.props,
                            a = t.index,
                            n = t.onClick,
                            r = t.data,
                            l = r.priMode,
                            o = r.id,
                            c = l.msg,
                            u = l.modal;
                        "" != c && (1 == u ? S.default.confirm({
                            title: c,
                            doneLabel: "打开网易云音乐",
                            done: function () {
                                k.HomeLog.do({
                                    button: "openclient",
                                    page: "officialweb_search",
                                    position: "box"
                                }), k.HomeWakeup.do({
                                    resType: "song",
                                    resQuery: o
                                })
                            }
                        }) : S.default.alert({
                            title: c,
                            doneLabel: "知道了"
                        }), e.preventDefault()), n && n(a, r)
                    }
                }, {
                    key: "getAlias",
                    value: function (e, t, a) {
                        var n = new RegExp(e, "i");
                        if (n.test(t)) return t;
                        var r = a.filter(function (e, t) {
                            return n.test(e)
                        });
                        return r.length > 0 ? r[0] : ""
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.data,
                            a = e.index,
                            n = e.isSort,
                            r = e.keyword,
                            l = t.albumName,
                            o = t.id,
                            c = t.isSQ,
                            u = t.singerName,
                            s = t.songName,
                            i = t.songAlias,
                            d = t.priMode,
                            f = t.albumAlias,
                            h = t.albumTns,
                            m = t.singerAlias,
                            v = t.singerTns,
                            g = d.msg,
                            E = a < 10 ? "0" + a : a,
                            S = "sgfl";
                        n && a < 4 && (S += " sgfl-cred");
                        var b = null,
                            _ = i[0];
                        "undefined" == typeof r && _ && (b = p.default.createElement("span", {
                            className: "sgalia"
                        }, "(", _, ")"));
                        var k = "m-sgitem";
                        if (d.modal == -1 && (k += " m-sgitem-gray"), r) {
                            var R = new RegExp(r, "i");
                            if (s && R.test(s) && (s = p.default.createElement(C.default, {
                                word: r
                            }, s)), _ && R.test(_) && (b = p.default.createElement("span", {
                                className: "sgalia"
                            }, p.default.createElement(C.default, {
                                word: r
                            }, _))), u) {
                                for (var N = u.split(" / "), M = 0; M < N.length; M++)
                                    if (m && m[M].length > 0) {
                                        var H = this.getAlias(r, v ? v[M] : "", m[M]);
                                        H && (N[M] += "(" + H + ")")
                                    }
                                u = N.join(" / "), u && R.test(u) && (u = p.default.createElement(C.default, {
                                    word: r
                                }, u))
                            }
                            l && R.test(l) ? l = p.default.createElement(C.default, {
                                word: r
                            }, l) : f && f.length > 0 && (l = this.getAlias(r, h, f) || l || "", l = p.default.createElement(C.default, {
                                word: r
                            }, l))
                        }
                        var O = n && p.default.createElement("div", {
                            className: S
                        }, E),
                            q = p.default.createElement("div", {
                                className: "sgfr f-bd f-bd-btm"
                            }, p.default.createElement("div", {
                                className: "sgchfl"
                            }, p.default.createElement("div", {
                                className: "f-thide sgtl"
                            }, s, b), p.default.createElement("div", {
                                className: "f-thide sginfo"
                            }, c && p.default.createElement("i", {
                                className: "u-hmsprt sghot"
                            }), u, " - ", l)), p.default.createElement("div", {
                                className: "sgchfr"
                            }, p.default.createElement("span", {
                                className: "u-hmsprt sgchply"
                            })));
                        if ("" == g) {
                            var x = w.Env.isInNEMapp(),
                                T = x ? "orpheus://song/" : "/m/song",
                                P = {
                                    source: "officialweb"
                                },
                                L = null;
                            return x ? (L = {
                                pathname: T + o,
                                state: P
                            }, p.default.createElement("a", {
                                className: k,
                                href: T + o,
                                onClick: this.clk
                            }, O, q)) : (L = {
                                pathname: T,
                                search: w.TransParams.joinParam("?id=" + o),
                                state: P
                            }, p.default.createElement(y.Link, {
                                to: L,
                                className: k,
                                onClick: this.clk
                            }, O, q))
                        }
                        return p.default.createElement("div", {
                            className: k,
                            onClick: this.clk
                        }, O, q)
                    }
                }]), t
            }(m.Component);
        N.propTypes = {
            keyword: g.default.string,
            isSort: g.default.bool,
            onClick: g.default.func,
            index: g.default.number,
            data: g.default.object
        };
        var M = function (e) {
            function t(e) {
                return (0, c.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e))
            }
            return (0, h.default)(t, e), (0, s.default)(t, [{
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.isSort,
                        a = e.list,
                        n = e.onClick,
                        r = e.keyword;
                    return p.default.createElement("div", {
                        className: "m-sglst"
                    }, a && a.map(function (e, a) {
                        return p.default.createElement(N, {
                            onClick: n,
                            isSort: t,
                            keyword: r,
                            index: a + 1,
                            key: "ordersong_" + a,
                            data: e
                        })
                    }))
                }
            }]), t
        }(m.Component);
        M.propTypes = {
            keyword: g.default.string,
            isSort: g.default.bool,
            list: g.default.array.isRequired,
            onClick: g.default.func
        }, M.defaultProps = {
            isSort: !1
        }, M.Item = N, t.default = M, e.exports = t.default
    }, kpy7: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("Zx67"),
            l = n(r),
            o = a("Zrlr"),
            c = n(o),
            u = a("wxAW"),
            s = n(u),
            i = a("zwoO"),
            d = n(i),
            f = a("Pf15"),
            h = n(f);
        a("OcY3");
        var m = a("U7vG"),
            p = n(m),
            v = a("KQ2m"),
            g = function (e) {
                function t(e) {
                    (0, c.default)(this, t);
                    var a = (0, d.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e));
                    return a.down = a.down.bind(a), a
                }
                return (0, h.default)(t, e), (0, s.default)(t, [{
                    key: "shouldComponentUpdate",
                    value: function () {
                        return !1
                    }
                }, {
                    key: "down",
                    value: function (e) {
                        v.HomeLog.do({
                            button: "downloadclient",
                            page: "officialweb",
                            position: "top"
                        }), v.HomeWakeup.download()
                    }
                }, {
                    key: "render",
                    value: function () {
                        return p.default.createElement("div", {
                            className: "m-hometop"
                        }, p.default.createElement("div", {
                            className: "topfix"
                        }, p.default.createElement("h1", {
                            className: "topfl"
                        }, p.default.createElement("span", {
                            className: "topplh"
                        }, "网易云音乐"), p.default.createElement("svg", {
                            className: "topsvg",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 284 50"
                        }, p.default.createElement("g", {
                            fill: "#fff"
                        }, p.default.createElement("path", {
                            d: "m36.37 14.412c-2.115-1.367-4.707-2.117-7.377-2.251l-.595-2.174.018.021c-.023-.064-.043-.127-.063-.189l-.176-.643c-.406-1.86.333-2.748.713-3.067.064-.048.131-.097.204-.145 1.74-1.154 4.218.695 4.357.804 1.1 1.055 3.112 1.315 4.198.236 1.098-1.091.836-3.132-.261-4.223-1.708-1.698-6.95-4.426-11.41-1.467-4.01 2.659-4.09 6.402-3.431 8.565l.8 2.927c-1.339.383-2.624.933-3.797 1.647-4.391 2.676-6.594 7.192-6.04 12.391.564 5.335 4.575 9.208 9.536 9.208 5.267 0 9.551-4.262 9.551-9.501-.071-1.251-.057-1.236-.226-2.354-.165-1.091-1.783-6.218-1.783-6.218.994.229 1.923.602 2.725 1.12 9.06 5.856 5.289 15.176 5.118 15.583-2.495 5.954-7.934 9.509-14.923 9.754-4.555.16-8.919-1.535-12.289-4.772-3.554-3.41-5.591-8.189-5.591-13.11 0-7.414 4.687-14.14 11.662-16.749 1.453-.542 2.625-2.087 1.822-3.881-.632-1.41-2.344-1.895-3.796-1.352-9.156 3.418-15.307 12.251-15.307 21.981 0 6.43 2.664 12.675 7.308 17.14 4.283 4.111 9.793 6.349 15.595 6.349.264 0 .529-.004.793-.014 9.142-.32 16.585-5.251 19.9-13.164 2.071-4.807 3.225-15.684-7.231-22.445m-9.396 12.139c0 2.157-1.764 3.911-3.933 3.911-2.407 0-3.734-2.179-3.949-4.204-.408-3.861 1.619-5.959 3.392-7.04.719-.438 1.509-.781 2.335-1.029 0 0 1.912 6.05 2.061 6.99.164 1.037.094 1.372.094 1.372"
                        }), p.default.createElement("path", {
                            d: "m80.12 40.04c0 0-.333-2.724 0-3.144 7.73-9.758 7.56-22.887 7.56-22.887h4.738c-.082.452-2.448 16.971-12.298 26.03"
                        }), p.default.createElement("path", {
                            d: "m92.85 40.04c0 0 .333-2.724 0-3.144-7.729-9.758-8.131-22.887-8.131-22.887h-4.739c.082.452 3.02 16.971 12.87 26.03"
                        }), p.default.createElement("path", {
                            d: "m66.12 40.04c0 0-.332-2.724 0-3.144 7.711-9.758 8.138-22.887 8.138-22.887h4.727c-.081.452-3.038 16.971-12.865 26.03"
                        }), p.default.createElement("path", {
                            d: "m78.82 40.04c0 0 .332-2.724 0-3.144-7.71-9.758-7.515-22.887-7.515-22.887h-4.728c.081.452 2.417 16.971 12.243 26.03"
                        }), p.default.createElement("path", {
                            d: "m93.1 6.82l-28.11.201c-3.618-.045-5-.822-5-2.01 0 .757 0 37.4 0 41.02l5-.006v-36h26c1.756 0 3 .17 3 2v29c0 1.688-1.27 2.27-6.06 2.818-.408.047-.708 2.188-.708 2.188h5.881c3.547 0 5.881-1.355 5.881-5.428v-28.351c.0001-4.072-2.333-5.428-5.88-5.428"
                        }), p.default.createElement("path", {
                            d: "m154.33 10.02h37.67c-.106-1.835-.617-3.01-2.354-3.01h-37.67c.106 1.833.618 3.01 2.354 3.01"
                        }), p.default.createElement("path", {
                            d: "m191.6 20.02h-40.624c.108 1.835.627 3.01 2.39 3.01h40.623c-.108-1.835-.628-3.01-2.389-3.01"
                        }), p.default.createElement("path", {
                            fillRule: "evenodd",
                            d: "m232 37.03h-25.01v-3.01h25.01v3.01"
                        }), p.default.createElement("path", {
                            d: "m221.98 10.02v-3.996h-5v3.995h5"
                        }), p.default.createElement("path", {
                            d: "m237.61 9.03h-38.613c.107 1.816.623 2.979 2.376 2.979h38.614c-.107-1.817-.623-2.979-2.377-2.979"
                        }), p.default.createElement("path", {
                            d: "m238.62 20.05h-40.771c.106 1.835.619 3.01 2.363 3.01h40.771c-.107-1.836-.619-3.01-2.363-3.01"
                        }), p.default.createElement("path", {
                            d: "m192.76 39.03c-.751-2.811-2.252-8.094-2.252-8.094h-5.314c0 0 1.721 6.03 2.406 8.371.337 1.148.185 1.649.104 2.265-.21 1.587-.896 1.433-2.51 1.433h-23.03c-2.757 0-3.196-2.519-2.805-3.695 1.51-4.541 5.313-16.293 5.313-16.293h-5.313c0 0-3.673 11.45-5.153 16.01-.364 1.123-.271 2.446-.16 2.994.595 2.951 2.752 3.998 5.757 3.998h27.749c3 0 4.677-1.048 5.271-3.999.108-.549.332-1.493-.068-2.994"
                        }), p.default.createElement("path", {
                            d: "m230.34 24.87h-24.816c-2.188.021-3.546-.115-3.546-.602 0 0 0 14.237 0 17.453 0 4.063 1.755 4.212 5.317 4.212h29.545v-16.248c0-4.064-2.936-4.815-6.5-4.815m1.65 5.563v12.585h-22.665c-1.747 0-2.343-.427-2.343-1.798v-13.185h22.08c1.748 0 2.928-.157 2.928 1.198v1.2"
                        }), p.default.createElement("path", {
                            d: "m210.24 17.581v-.642-1.926h-5.235v1.926c0 1.534.444 3.056.974 4.086h7.02c-1.736 0-2.762-1.495-2.762-3.444"
                        }), p.default.createElement("path", {
                            d: "m233.98 16.939v-1.926h-5.236v1.926.642c0 1.949-1.023 3.444-2.764 3.444h7.03c.53-1.029.967-2.551.967-4.086"
                        }), p.default.createElement("path", {
                            d: "m261.99 13.02v28c0 1.704-.629 2.146-5.625 2.702-.426.047-1.377 2.285-1.377 2.285h6.276c3.407 0 5.726-.923 5.718-4.341-.018-8 0-28.638 0-28.638l-4.992-.008"
                        }), p.default.createElement("path", {
                            d: "m283.82 44.12c.38.664 0 .904 0 .904-3.755-.994-8.592-6.405-9.842-15h5.367c.0001 0 .891 7.844 4.475 14.1"
                        }), p.default.createElement("path", {
                            fillRule: "evenodd",
                            d: "m138.98 16.02h-23.99v-2.994h23.99v2.994"
                        }), p.default.createElement("path", {
                            d: "m138.02 6.771h-22.663c-4.02 0-5.367-.559-5.367-1.76 0 .736 0 7.626 0 11.147 0 3.961 1.175 5.867 4.771 5.867h23.259 5.963v-9.974c0-3.961-2.367-5.28-5.963-5.28m.971 12.257h-21.648c-1.761 0-2.36-.543-2.36-2.253v-6.759h21.649c1.761 0 2.36-.02 2.36 1.69v7.322z"
                        }), p.default.createElement("path", {
                            d: "m120 27.05c-2.535 3.611-7.836 9.777-14.92 13.465-.411.214-1.535 1.204-1.182 1.204.738 0 .308 0 2.363 0 4.674 0 17.408-9.327 19.06-14.669h-5.318"
                        }), p.default.createElement("path", {
                            d: "m131.52 27.05c-2.977 7.094-9.188 14.377-17.283 18.05-.421.19-1.24.827-.887.827.886 0 1.33 0 1.773 0 5.411 0 19.244-8.176 21.715-18.881h-5.318"
                        }), p.default.createElement("path", {
                            d: "m147 31.62c0-4.074-2.461-7.6-6.01-7.6h-28c-1.267-.03-1.884.167-2.197-.548-.226-.516-.883-.452-.883-.452-.686 4.109-1.573 7.03-5.299 9.05-.159.07-.978.863-.441.905 1.038.079 2.656-.217 3.532-.453 2.042-.551 3.583-3.196 5.288-5.504h26c1.769.007 2.712.957 2.712 2.788v6.337c0 2.745-.478 7.693-9.3 7.693-.411 0-.708 2.188-.708 2.188h4.709c6.263 0 10.598-2.224 10.598-10.334v-4.072z"
                        }), p.default.createElement("path", {
                            d: "m280.64 22.968h-27.681c-1.758 0-2.786.011-2.65-1.763.145-1.885.884-11.729.884-11.729 2.38-.002 19.912-.12 29.595-.69.567-.033.575-2.796 0-2.76-10.47.648-34.798.995-34.798.995s-.693 9.675-.98 13.724c-.291 4.081 2.043 5.29 5.595 5.29h32.392c-.107-1.87-.619-3.067-2.357-3.067"
                        }), p.default.createElement("path", {
                            d: "m244.15 44.12c-.369.664 0 .904 0 .904 3.641-.994 8.617-6.405 9.83-15h-5.203c0 0-1.152 7.844-4.627 14.1"
                        })))), p.default.createElement("div", {
                            className: "topfr"
                        }, p.default.createElement("span", {
                            onClick: this.down,
                            className: "f-bd f-bd-full topbton"
                        }, "下载APP"))))
                    }
                }]), t
            }(m.Component);
        t.default = g, e.exports = t.default
    }, "YKO+": function (e, t) { }, XLxw: function (e, t) { }, "qO/U": function (e, t) { }, zjHu: function (e, t) { }, "766F": function (e, t) { }, ibnI: function (e, t) { }, vWOO: function (e, t) { }, iVlH: function (e, t) { }, "59px": function (e, t) { }, rDQl: function (e, t) { }, OcY3: function (e, t) { }, DTei: function (e, t) { }, z7Jg: function (e, t) { }, SR6z: function (e, t) { }, "3rhL": function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = document.createElement("div");
            document.body.appendChild(t);
            var a = {};
            for (var n in h) "btons" != n ? a[n] = e[n] || h[n] : a[n] = [{
                label: e.doneLabel || "确定",
                func: e.done
            }];
            var r = l({}, a, {
                container: t
            });
            s.default.render(c.default.createElement(d.default, r), t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        };
        t.default = r;
        var o = a("U7vG"),
            c = n(o),
            u = a("O27J"),
            s = n(u),
            i = a("qB1o"),
            d = n(i),
            f = void 0,
            h = {
                title: f,
                content: f,
                animation: f,
                btons: []
            };
        e.exports = t.default
    }, vpzh: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = document.createElement("div");
            document.body.appendChild(t);
            var a = {};
            for (var n in h) "btons" != n ? a[n] = e[n] || h[n] : a[n] = [{
                label: e.cancelLabel || "取消",
                func: e.cancel
            }, {
                label: e.doneLabel || "确定",
                func: e.done
            }];
            var r = l({}, a, {
                container: t
            });
            s.default.render(c.default.createElement(d.default, r), t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        };
        t.default = r;
        var o = a("U7vG"),
            c = n(o),
            u = a("O27J"),
            s = n(u),
            i = a("qB1o"),
            d = n(i),
            f = void 0,
            h = {
                title: f,
                content: f,
                animation: f,
                btons: []
            };
        e.exports = t.default
    }, ApSC: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("U7vG"),
            l = (n(r), a("O27J")),
            o = (n(l), a("4ZZq")),
            c = n(o),
            u = a("3rhL"),
            s = n(u),
            i = a("vpzh"),
            d = n(i);
        t.default = {
            toast: c.default,
            alert: s.default,
            confirm: d.default
        }, e.exports = t.default
    }, qB1o: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function l(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, a, n) {
                return a && e(t.prototype, a), n && e(t, n), t
            }
        }(),
            u = a("U7vG"),
            s = n(u),
            i = a("O27J"),
            d = n(i),
            f = a("S8Mv"),
            h = n(f);
        "undefined" != typeof window && a("z7Jg");
        var m = 200,
            p = function (e) {
                function t(e) {
                    r(this, t);
                    var a = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return a.state = {
                        show: !0
                    }, a.close = a.close.bind(a), a.stopBubble = a.stopBubble.bind(a), a
                }
                return o(t, e), c(t, [{
                    key: "stopBubble",
                    value: function (e) {
                        e.preventDefault(), e.stopPropagation()
                    }
                }, {
                    key: "close",
                    value: function () {
                        var e = this;
                        this.setState({
                            show: !1
                        }), window.setTimeout(function () {
                            e.teardown()
                        }, m)
                    }
                }, {
                    key: "teardown",
                    value: function () {
                        var e = this.props.container;
                        d.default.unmountComponentAtNode(e), e.parentNode.removeChild(e)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = e.state.show,
                            a = e.props,
                            n = a.title,
                            r = a.content,
                            l = a.btons,
                            o = a.animation,
                            c = void 0,
                            u = void 0;
                        if (t) {
                            var i = l.map(function (t, a) {
                                var n = function () {
                                    e.close(), t.func && t.func()
                                },
                                    r = t.label;
                                return s.default.createElement("span", {
                                    className: "c-modal-bton",
                                    key: a,
                                    onClick: n
                                }, "string" == typeof r ? r : r())
                            }),
                                d = void 0;
                            r && (d = s.default.createElement("div", {
                                className: "c-modal-content"
                            }, "string" == typeof r ? r : r())), c = s.default.createElement("div", {
                                className: "cm-mask",
                                onClick: e.close
                            }), u = s.default.createElement("div", {
                                className: "c-modal-wrap",
                                onClick: e.close
                            }, s.default.createElement("div", {
                                className: "c-modal",
                                onClick: e.stopBubble
                            }, s.default.createElement("div", {
                                className: "c-modal-title"
                            }, "string" == typeof n ? n : n()), d, s.default.createElement("div", {
                                className: "c-modal-bottom"
                            }, i)))
                        }
                        var f = "scale" == o ? "cmmodal-scale" : "cmmask";
                        return s.default.createElement("div", null, s.default.createElement(h.default, {
                            component: "div",
                            transitionName: "cmmask",
                            transitionEnterTimeout: m,
                            transitionAppear: !0,
                            transitionAppearTimeout: m,
                            transitionLeaveTimeout: m
                        }, c), s.default.createElement(h.default, {
                            component: "div",
                            transitionName: f,
                            transitionEnterTimeout: m,
                            transitionAppear: !0,
                            transitionAppearTimeout: m,
                            transitionLeaveTimeout: m
                        }, u))
                    }
                }]), t
            }(u.Component);
        p.propTypes = {
            container: u.PropTypes.object.isRequired,
            animation: u.PropTypes.string,
            title: u.PropTypes.oneOfType([u.PropTypes.string, u.PropTypes.func]).isRequired,
            content: u.PropTypes.oneOfType([u.PropTypes.string, u.PropTypes.func]),
            btons: u.PropTypes.arrayOf(u.PropTypes.shape({
                label: u.PropTypes.oneOfType([u.PropTypes.string, u.PropTypes.func]),
                func: u.PropTypes.func
            })).isRequired
        }, p.defaultProps = {
            animation: "scale"
        }, t.default = p, e.exports = t.default
    }, TFn5: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            var a = e.name,
                n = e.trans,
                r = e.alias,
                l = void 0 === r ? [] : r,
                o = new RegExp(t, "i");
            if (n && o.test(n)) return a + " (" + n + ")";
            if (l.length > 0) {
                var c = l.filter(function (e, t) {
                    return o.test(e)
                });
                if (c.length > 0) return a + " (" + c[0] + ")"
            }
            return n ? a + " (" + n + ")" : l.length > 0 ? a + " (" + l[0] + ")" : a
        }

        function l(e, t, a) {
            var n = new RegExp(a, "i"),
                r = e.split(" / ");
            if (t.length > 0) {
                var l = t.map(function (e, t) {
                    var a = e.filter(function (e, t) {
                        return n.test(e)
                    });
                    return a.length > 0 ? r[t] + " (" + a[0] + ")" : r[t]
                });
                return l.join(" / ")
            }
            return e
        }

        function o(e) {
            var t = e.data,
                a = e.index,
                n = e.inputValue,
                o = e.highlight,
                c = e.sendMatchView,
                u = e.sendMatchClick,
                s = t.type,
                i = t.info,
                d = i.title,
                f = i.name,
                h = i.id,
                m = i.txt,
                p = i.picurl,
                v = i.artalias;
            s = "radio" == s ? "dj" + s : s, c(s, h, a, n), f = r(i, o), v && (m = l(m, v, o)), o && (f = y.default.createElement(R.default, {
                word: o
            }, f), m && (m = y.default.createElement(R.default, {
                word: o,
                parentClass: "addtional"
            }, m)));
            var g = T.Env.isInNEMapp(),
                E = g ? "orpheus://" + s + "/" + h : "/m/" + s + T.TransParams.joinParam("?id=" + h);
            if ("video" == s && g && (E = "orpheus://" + s + "?id=" + h), !g) {
                var S = {
                    source: "officialweb"
                },
                    _ = {
                        pathname: "/m/" + s,
                        search: T.TransParams.joinParam("?id=" + h),
                        state: S
                    };
                return y.default.createElement("li", {
                    className: "matchitem " + s
                }, y.default.createElement(b.Link, {
                    to: _,
                    onClick: function () {
                        u(s, h, n, E)
                    }
                }, y.default.createElement("div", {
                    className: "linkcover f-bd f-bd-btm"
                }, y.default.createElement("figure", {
                    className: "piccover"
                }, y.default.createElement("img", {
                    className: "pic",
                    src: p
                })), y.default.createElement("article", {
                    className: "describe"
                }, y.default.createElement("h4", {
                    className: "maindes f-thide"
                }, d + ": ", f), !!m && m), y.default.createElement("i", {
                    className: "u-svg u-svg-arr"
                }))))
            }
            return y.default.createElement("li", {
                className: "matchitem " + s,
                onClick: function () {
                    u(s, h, n, E)
                }
            }, y.default.createElement("div", {
                className: "linkcover f-bd f-bd-btm"
            }, y.default.createElement("figure", {
                className: "piccover"
            }, y.default.createElement("img", {
                className: "pic",
                src: p
            })), y.default.createElement("article", {
                className: "describe"
            }, y.default.createElement("h4", {
                className: "maindes f-thide"
            }, d + ": ", f), !!m && m), y.default.createElement("i", {
                className: "u-svg u-svg-arr"
            })))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = a("Zx67"),
            u = n(c),
            s = a("Zrlr"),
            i = n(s),
            d = a("wxAW"),
            f = n(d),
            h = a("zwoO"),
            m = n(h),
            p = a("Pf15"),
            v = n(p),
            g = a("U7vG"),
            y = n(g),
            E = a("KSGD"),
            S = n(E),
            b = a("Zfgq"),
            _ = a("/PID"),
            w = n(_),
            k = a("Fh61"),
            R = n(k),
            C = a("Oums"),
            N = n(C),
            M = a("HpeD"),
            H = n(M),
            O = a("haZt"),
            q = n(O),
            x = a("KQ2m"),
            T = a("C4at"),
            P = a("4n+p"),
            L = a("hpFO"),
            I = a("PwSW"),
            j = a("KQH8"),
            A = function (e) {
                function t(e) {
                    (0, i.default)(this, t);
                    var a = (0, m.default)(this, (t.__proto__ || (0, u.default)(t)).call(this, e));
                    return a.state = {
                        recorrect: !0
                    }, a.clickRecorrect = a.clickRecorrect.bind(a), a.songRequest = a.songRequest.bind(a), a.songClk = a.songClk.bind(a), a.sendMatchClick = a.sendMatchClick.bind(a), a.sendMatchView = a.sendMatchView.bind(a), a
                }
                return (0, v.default)(t, e), (0, f.default)(t, [{
                    key: "componentDidMount",
                    value: function () {
                        x.HomeLog.do("searchkeyword", {
                            type: "song",
                            keyword: this.props.Search.inputValue,
                            page: "officialweb_search"
                        }), this.matchshow = !0
                    }
                }, {
                    key: "sendMatchView",
                    value: function (e, t, a, n) {
                        this.state.recorrect && ("playlist" == e && (e = "list"), this.matchshow && x.HomeLog.do("searchimpressopt", {
                            id: t,
                            type: e,
                            keyword: n,
                            page: "officialweb_search"
                        }))
                    }
                }, {
                    key: "sendMatchClick",
                    value: function (e, t, a, n) {
                        var r = this.props.onLeave;
                        "playlist" == e && (e = "list"), r && r(), x.HomeLog.do("searchopt", {
                            id: t,
                            type: e,
                            keyword: a,
                            page: "officialweb_search"
                        }), T.Env.isInNEMapp() && setTimeout(function () {
                            location.href = n
                        }, 200)
                    }
                }, {
                    key: "songClk",
                    value: function (e, t) {
                        var a = this.props.Search;
                        x.HomeLog.do("search", {
                            type: "song",
                            id: t.id,
                            page: "officialweb_search",
                            keyword: a.inputValue,
                            position: e
                        })
                    }
                }, {
                    key: "clickRecorrect",
                    value: function (e) {
                        var t = this.props,
                            a = t.saveHistory,
                            n = t.searchMatchRequest,
                            r = t.searchSongClear;
                        r && r(), n && n({
                            s: e,
                            limit: 10,
                            version: 4
                        }), this.songRequest(!1), a && a({
                            keyword: e,
                            type: 1,
                            index: 0
                        }), this.setState({
                            recorrect: !1
                        })
                    }
                }, {
                    key: "songRequest",
                    value: function () {
                        var e = this.props,
                            t = e.searchSongRequest,
                            a = e.SearchSong,
                            n = e.Search,
                            r = n.inputValue,
                            l = a.limit,
                            o = a.offset,
                            c = a.request;
                        if (!c) {
                            var u = this.state.recorrect;
                            arguments[0] === !1 && (u = !1), t && t({
                                s: r,
                                limit: l,
                                offset: o,
                                type: 1,
                                strategy: 5,
                                queryCorrect: u
                            })
                        }
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props,
                            a = t.Search,
                            n = t.SearchMatch,
                            r = t.SearchSong,
                            l = a.inputValue,
                            c = n.request,
                            u = n.data,
                            s = (n.msg, u.matchlist),
                            i = void 0 === s ? [] : s,
                            d = r.request,
                            f = r.data,
                            h = r.msg,
                            m = r.end,
                            p = r.offset,
                            v = r.loaded,
                            g = f.highlight,
                            E = void 0 === g ? "" : g,
                            S = f.songs,
                            b = void 0 === S ? [] : S,
                            _ = (f.songCount, f.rec_type),
                            k = f.rec_query;
                        if (c || 0 == p && r.request) return y.default.createElement(N.default, null);
                        var R = !0;
                        return 0 == p && "" != h && (R = !1), y.default.createElement("div", {
                            className: "m-searchresult"
                        }, !!_ && y.default.createElement("section", {
                            className: "m-srchwrong f-bd f-bd-btm",
                            onClick: function () {
                                e.clickRecorrect(l)
                            }
                        }, y.default.createElement("p", {
                            className: "txt"
                        }, "已显示“", k, "”的搜索结果，仍然搜索：", y.default.createElement("span", {
                            className: "hglight"
                        }, '"', y.default.createElement("em", null, l), '"'))), !!i.length && y.default.createElement("section", {
                            className: "m-matchlist"
                        }, y.default.createElement("h3", {
                            className: "title"
                        }, "最佳匹配"), y.default.createElement("ul", null, i.map(function (t, a) {
                            return y.default.createElement(o, {
                                data: t,
                                key: "matchitem" + a,
                                index: a,
                                inputValue: l,
                                highlight: E,
                                sendMatchView: e.sendMatchView,
                                sendMatchClick: e.sendMatchClick
                            })
                        }))), !!h && y.default.createElement(H.default, {
                            clickReload: this.songRequest
                        }), !h && !!b.length && y.default.createElement("section", {
                            className: "m-songlist"
                        }, y.default.createElement(w.default, {
                            onClick: this.songClk,
                            keyword: E,
                            list: b
                        }), y.default.createElement(q.default, {
                            show: R,
                            end: m,
                            request: d,
                            err: h,
                            onScroll: this.songRequest,
                            complete: ""
                        })), v && !i.length && !b.length && y.default.createElement("div", {
                            className: "m-noresult"
                        }, "暂无搜索结果"))
                    }
                }]), t
            }(g.Component);
        A.propTypes = {
            Search: S.default.object,
            SearchMatch: S.default.object,
            SearchSong: S.default.object,
            saveHistory: S.default.func,
            searchMatchRequest: S.default.func,
            searchSongRequest: S.default.func,
            searchSongClear: S.default.func
        }, t.default = (0, P.connect)(function (e) {
            var t = e.Search,
                a = e.SearchMatch,
                n = e.SearchSong;
            return {
                Search: t,
                SearchMatch: a,
                SearchSong: n
            }
        }, {
            saveHistory: L.saveHistory,
            searchMatchRequest: I.searchMatchRequest,
            searchSongRequest: j.searchSongRequest,
            searchSongClear: j.searchSongClear
        })(A), e.exports = t.default
    }
});