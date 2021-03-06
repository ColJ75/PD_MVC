! function (e, define)
{
	define("kendo.core.min", ["jquery"], e)
}(function ()
{
	return function (e, t, n)
	{
		function r() { }

		function o(e, t)
		{
			if (t) return "'" + e.split("'").join("\\'").split('\\"').join('\\\\\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") + "'";
			var n = e.charAt(0),
                r = e.substring(1);
			return "=" === n ? "+(" + r + ")+" : ":" === n ? "+$kendoHtmlEncode(" + r + ")+" : ";" + e + ";$kendoOutput+="
		}

		function i(e, t, n)
		{
			return e += "", t = t || 2, n = t - e.length, n ? W[t].substring(0, n) + e : e
		}

		function a(e)
		{
			var t = e.css(ye.support.transitions.css + "box-shadow") || e.css("box-shadow"),
                n = t ? t.match(De) || [0, 0, 0, 0, 0] : [0, 0, 0, 0, 0],
                r = Te.max(+n[3], +(n[4] || 0));
			return {
				left: -n[1] + r,
				right: +n[1] + r,
				bottom: +n[2] + r
			}
		}

		function s(t, n)
		{
			var r, o, i, a, s, u, l, c = ke.browser,
                d = ye._outerWidth,
                f = ye._outerHeight;
			return t.parent().hasClass("k-animation-container") ? (u = t.parent(".k-animation-container"), l = u[0].style, u.is(":hidden") && u.show(), r = Oe.test(l.width) || Oe.test(l.height), r || u.css({
				width: d(t),
				height: f(t),
				boxSizing: "content-box",
				mozBoxSizing: "content-box",
				webkitBoxSizing: "content-box"
			})) : (o = t[0].style.width, i = t[0].style.height, a = Oe.test(o), s = Oe.test(i), r = a || s, !a && (!n || n && o) && (o = d(t)), !s && (!n || n && i) && (i = f(t)), t.wrap(e("<div/>").addClass("k-animation-container").css({
				width: o,
				height: i
			})), r && t.css({
				width: "100%",
				height: "100%",
				boxSizing: "border-box",
				mozBoxSizing: "border-box",
				webkitBoxSizing: "border-box"
			})), c.msie && Te.floor(c.version) <= 7 && (t.css({
				zoom: 1
			}), t.children(".k-menu").width(t.width())), t.parent()
		}

		function u(e)
		{
			var t = 1,
                n = arguments.length;
			for (t = 1; t < n; t++) l(e, arguments[t]);
			return e
		}

		function l(e, t)
		{
			var n, r, o, i, a, s = ye.data.ObservableArray,
                u = ye.data.LazyObservableArray,
                c = ye.data.DataSource,
                d = ye.data.HierarchicalDataSource;
			for (n in t) r = t[n], o = typeof r, i = o === Ae && null !== r ? r.constructor : null, i && i !== Array && i !== s && i !== u && i !== c && i !== d ? r instanceof Date ? e[n] = new Date(r.getTime()) : _(r.clone) ? e[n] = r.clone() : (a = e[n], e[n] = typeof a === Ae ? a || {} : {}, l(e[n], r)) : o !== Fe && (e[n] = r);
			return e
		}

		function c(e, t, r)
		{
			for (var o in t)
				if (t.hasOwnProperty(o) && t[o].test(e)) return o;
			return r !== n ? r : e
		}

		function d(e)
		{
			return e.replace(/([a-z][A-Z])/g, function (e)
			{
				return e.charAt(0) + "-" + e.charAt(1).toLowerCase()
			})
		}

		function f(e)
		{
			return e.replace(/\-(\w)/g, function (e, t)
			{
				return t.toUpperCase()
			})
		}

		function m(t, n)
		{
			var r, o = {};
			return document.defaultView && document.defaultView.getComputedStyle ? (r = document.defaultView.getComputedStyle(t, ""), n && e.each(n, function (e, t)
			{
				o[t] = r.getPropertyValue(t)
			})) : (r = t.currentStyle, n && e.each(n, function (e, t)
			{
				o[t] = r[f(t)]
			})), ye.size(o) || (o = r), o
		}

		function p(e)
		{
			if (e && e.className && "string" == typeof e.className && e.className.indexOf("k-auto-scrollable") > -1) return !0;
			var t = m(e, ["overflow"]).overflow;
			return "auto" == t || "scroll" == t
		}

		function h(t, r)
		{
			var o, i = ke.browser.webkit,
                a = ke.browser.mozilla,
                s = t instanceof e ? t[0] : t;
			if (t) return o = ke.isRtl(t), r === n ? o && i ? s.scrollWidth - s.clientWidth - s.scrollLeft : Math.abs(s.scrollLeft) : (s.scrollLeft = o && i ? s.scrollWidth - s.clientWidth - r : o && a ? -r : r, n)
		}

		function g(e)
		{
			var t, n = 0;
			for (t in e) e.hasOwnProperty(t) && "toJSON" != t && n++;
			return n
		}

		function y(e, n, r)
		{
			var o, i, a;
			return n || (n = "offset"), o = e[n](), i = {
				top: o.top,
				right: o.right,
				bottom: o.bottom,
				left: o.left
			}, ke.browser.msie && (ke.pointers || ke.msPointers) && !r && (a = ke.isRtl(e) ? 1 : -1, i.top -= t.pageYOffset + a * document.documentElement.scrollTop, i.left -= t.pageXOffset + a * document.documentElement.scrollLeft), i
		}

		function v(e)
		{
			var t = {};
			return be("string" == typeof e ? e.split(" ") : e, function (e)
			{
				t[e] = this
			}), t
		}

		function b(e)
		{
			return new ye.effects.Element(e)
		}

		function w(e, t, n, r)
		{
			return typeof e === He && (_(t) && (r = t, t = 400, n = !1), _(n) && (r = n, n = !1), typeof t === Pe && (n = t, t = 400), e = {
				effects: e,
				duration: t,
				reverse: n,
				complete: r
			}), ve({
				effects: {},
				duration: 400,
				reverse: !1,
				init: Se,
				teardown: Se,
				hide: !1
			}, e, {
				completeCallback: e.complete,
				complete: Se
			})
		}

		function M(t, n, r, o, i)
		{
			for (var a, s = 0, u = t.length; s < u; s++) a = e(t[s]), a.queue(function ()
			{
				B.promise(a, w(n, r, o, i))
			});
			return t
		}

		function S(e, t, n, r)
		{
			return t && (t = t.split(" "), be(t, function (t, n)
			{
				e.toggleClass(n, r)
			})), e
		}

		function T(e)
		{
			return ("" + e).replace(J, "&amp;").replace(Y, "&lt;").replace(G, "&gt;").replace(q, "&quot;").replace(V, "&#39;")
		}

		function x(e, t)
		{
			var r;
			return 0 === t.indexOf("data") && (t = t.substring(4), t = t.charAt(0).toLowerCase() + t.substring(1)), t = t.replace(oe, "-$1"), r = e.getAttribute("data-" + ye.ns + t), null === r ? r = n : "null" === r ? r = null : "true" === r ? r = !0 : "false" === r ? r = !1 : Ce.test(r) ? r = parseFloat(r) : ne.test(r) && !re.test(r) && (r = Function("return (" + r + ")")()), r
		}

		function k(t, r)
		{
			var o, i, a = {};
			for (o in r) i = x(t, o), i !== n && (te.test(o) && (i = ye.template(e("#" + i).html())), a[o] = i);
			return a
		}

		function O(t, n)
		{
			return e.contains(t, n) ? -1 : 1
		}

		function z()
		{
			var t = e(this);
			return e.inArray(t.attr("data-" + ye.ns + "role"), ["slider", "rangeslider"]) > -1 || t.is(":visible")
		}

		function D(e, t)
		{
			var n = e.nodeName.toLowerCase();
			return (/input|select|textarea|button|object/.test(n) ? !e.disabled : "a" === n ? e.href || t : t) && C(e)
		}

		function C(t)
		{
			return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function ()
			{
				return "hidden" === e.css(this, "visibility")
			}).length
		}

		function E(e, t)
		{
			return new E.fn.init(e, t)
		}
		var H, _, A, N, P, F, R, U, I, $, L, W, j, B, J, Y, q, V, G, K, Q, Z, X, ee, te, ne, re, oe, ie, ae, se, ue, le, ce, de, fe, me, pe, he, ge, ye = t.kendo = t.kendo || {
			cultures: {}
		},
            ve = e.extend,
            be = e.each,
            we = e.isArray,
            Me = e.proxy,
            Se = e.noop,
            Te = Math,
            xe = t.JSON || {},
            ke = {},
            Oe = /%/,
            ze = /\{(\d+)(:[^\}]+)?\}/g,
            De = /(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+)?/i,
            Ce = /^(\+|-?)\d+(\.?)\d*$/,
            Ee = "function",
            He = "string",
            _e = "number",
            Ae = "object",
            Ne = "null",
            Pe = "boolean",
            Fe = "undefined",
            Re = {},
            Ue = {},
            Ie = [].slice;
		ye.version = "2016.3.1118".replace(/^\s+|\s+$/g, ""), r.extend = function (e)
		{
			var t, n, r = function () { },
				o = this,
				i = e && e.init ? e.init : function ()
				{
					o.apply(this, arguments)
				};
			r.prototype = o.prototype, n = i.fn = i.prototype = new r;
			for (t in e) n[t] = null != e[t] && e[t].constructor === Object ? ve(!0, {}, r.prototype[t], e[t]) : e[t];
			return n.constructor = i, i.extend = o.extend, i
		}, r.prototype._initOptions = function (e)
		{
			this.options = u({}, this.options, e)
		}, _ = ye.isFunction = function (e)
		{
			return "function" == typeof e
		}, A = function ()
		{
			this._defaultPrevented = !0
		}, N = function ()
		{
			return this._defaultPrevented === !0
		}, P = r.extend({
			init: function ()
			{
				this._events = {}
			},
			bind: function (e, t, r)
			{
				var o, i, a, s, u, l = this,
					c = typeof e === He ? [e] : e,
					d = typeof t === Ee;
				if (t === n) {
					for (o in e) l.bind(o, e[o]);
					return l
				}
				for (o = 0, i = c.length; o < i; o++) e = c[o], s = d ? t : t[e], s && (r && (a = s, s = function ()
				{
					l.unbind(e, s), a.apply(l, arguments)
				}, s.original = a), u = l._events[e] = l._events[e] || [], u.push(s));
				return l
			},
			one: function (e, t)
			{
				return this.bind(e, t, !0)
			},
			first: function (e, t)
			{
				var n, r, o, i, a = this,
					s = typeof e === He ? [e] : e,
					u = typeof t === Ee;
				for (n = 0, r = s.length; n < r; n++) e = s[n], o = u ? t : t[e], o && (i = a._events[e] = a._events[e] || [], i.unshift(o));
				return a
			},
			trigger: function (e, t)
			{
				var n, r, o = this,
					i = o._events[e];
				if (i) {
					for (t = t || {}, t.sender = o, t._defaultPrevented = !1, t.preventDefault = A, t.isDefaultPrevented = N, i = i.slice(), n = 0, r = i.length; n < r; n++) i[n].call(o, t);
					return t._defaultPrevented === !0
				}
				return !1
			},
			unbind: function (e, t)
			{
				var r, o = this,
					i = o._events[e];
				if (e === n) o._events = {};
				else if (i)
					if (t)
						for (r = i.length - 1; r >= 0; r--) i[r] !== t && i[r].original !== t || i.splice(r, 1);
					else o._events[e] = [];
				return o
			}
		}), F = /^\w+/, R = /\$\{([^}]*)\}/g, U = /\\\}/g, I = /__CURLY__/g, $ = /\\#/g, L = /__SHARP__/g, W = ["", "0", "00", "000", "0000"], H = {
			paramName: "data",
			useWithBlock: !0,
			render: function (e, t)
			{
				var n, r, o = "";
				for (n = 0, r = t.length; n < r; n++) o += e(t[n]);
				return o
			},
			compile: function (e, t)
			{
				var n, r, i, a = ve({}, this, t),
					s = a.paramName,
					u = s.match(F)[0],
					l = a.useWithBlock,
					c = "var $kendoOutput, $kendoHtmlEncode = kendo.htmlEncode;";
				if (_(e)) return e;
				for (c += l ? "with(" + s + "){" : "", c += "$kendoOutput=", r = e.replace(U, "__CURLY__").replace(R, "#=$kendoHtmlEncode($1)#").replace(I, "}").replace($, "__SHARP__").split("#"), i = 0; i < r.length; i++) c += o(r[i], i % 2 === 0);
				c += l ? ";}" : ";", c += "return $kendoOutput;", c = c.replace(L, "#");
				try {
					return n = Function(u, c), n._slotCount = Math.floor(r.length / 2), n
				} catch (d) {
					throw Error(ye.format("Invalid template:'{0}' Generated code:'{1}'", e, c))
				}
			}
		},
            function ()
            {
            	function e(e)
            	{
            		return a.lastIndex = 0, a.test(e) ? '"' + e.replace(a, function (e)
            		{
            			var t = s[e];
            			return typeof t === He ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            		}) + '"' : '"' + e + '"'
            	}

            	function t(i, a)
            	{
            		var s, l, c, d, f, m, p = n,
                        h = a[i];
            		if (h && typeof h === Ae && typeof h.toJSON === Ee && (h = h.toJSON(i)), typeof o === Ee && (h = o.call(a, i, h)), m = typeof h, m === He) return e(h);
            		if (m === _e) return isFinite(h) ? h + "" : Ne;
            		if (m === Pe || m === Ne) return h + "";
            		if (m === Ae) {
            			if (!h) return Ne;
            			if (n += r, f = [], "[object Array]" === u.apply(h)) {
            				for (d = h.length, s = 0; s < d; s++) f[s] = t(s, h) || Ne;
            				return c = 0 === f.length ? "[]" : n ? "[\n" + n + f.join(",\n" + n) + "\n" + p + "]" : "[" + f.join(",") + "]", n = p, c
            			}
            			if (o && typeof o === Ae)
            				for (d = o.length, s = 0; s < d; s++) typeof o[s] === He && (l = o[s], c = t(l, h), c && f.push(e(l) + (n ? ": " : ":") + c));
            			else
            				for (l in h) Object.hasOwnProperty.call(h, l) && (c = t(l, h), c && f.push(e(l) + (n ? ": " : ":") + c));
            			return c = 0 === f.length ? "{}" : n ? "{\n" + n + f.join(",\n" + n) + "\n" + p + "}" : "{" + f.join(",") + "}", n = p, c
            		}
            	}
            	var n, r, o, a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    s = {
                    	"\b": "\\b",
                    	"\t": "\\t",
                    	"\n": "\\n",
                    	"\f": "\\f",
                    	"\r": "\\r",
                    	'"': '\\"',
                    	"\\": "\\\\"
                    },
                    u = {}.toString;
            	typeof Date.prototype.toJSON !== Ee && (Date.prototype.toJSON = function ()
            	{
            		var e = this;
            		return isFinite(e.valueOf()) ? i(e.getUTCFullYear(), 4) + "-" + i(e.getUTCMonth() + 1) + "-" + i(e.getUTCDate()) + "T" + i(e.getUTCHours()) + ":" + i(e.getUTCMinutes()) + ":" + i(e.getUTCSeconds()) + "Z" : null
            	}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function ()
            	{
            		return this.valueOf()
            	}), typeof xe.stringify !== Ee && (xe.stringify = function (e, i, a)
            	{
            		var s;
            		if (n = "", r = "", typeof a === _e)
            			for (s = 0; s < a; s += 1) r += " ";
            		else typeof a === He && (r = a);
            		if (o = i, i && typeof i !== Ee && (typeof i !== Ae || typeof i.length !== _e)) throw Error("JSON.stringify");
            		return t("", {
            			"": e
            		})
            	})
            }(),
            function ()
            {
            	function t(e)
            	{
            		if (e) {
            			if (e.numberFormat) return e;
            			if (typeof e === He) {
            				var t = ye.cultures;
            				return t[e] || t[e.split("-")[0]] || null
            			}
            			return null
            		}
            		return null
            	}

            	function r(e)
            	{
            		return e && (e = t(e)), e || ye.cultures.current
            	}

            	function o(e, t, o)
            	{
            		o = r(o);
            		var a = o.calendars.standard,
                        s = a.days,
                        u = a.months;
            		return t = a.patterns[t] || t, t.replace(c, function (t)
            		{
            			var r, o, l;
            			return "d" === t ? o = e.getDate() : "dd" === t ? o = i(e.getDate()) : "ddd" === t ? o = s.namesAbbr[e.getDay()] : "dddd" === t ? o = s.names[e.getDay()] : "M" === t ? o = e.getMonth() + 1 : "MM" === t ? o = i(e.getMonth() + 1) : "MMM" === t ? o = u.namesAbbr[e.getMonth()] : "MMMM" === t ? o = u.names[e.getMonth()] : "yy" === t ? o = i(e.getFullYear() % 100) : "yyyy" === t ? o = i(e.getFullYear(), 4) : "h" === t ? o = e.getHours() % 12 || 12 : "hh" === t ? o = i(e.getHours() % 12 || 12) : "H" === t ? o = e.getHours() : "HH" === t ? o = i(e.getHours()) : "m" === t ? o = e.getMinutes() : "mm" === t ? o = i(e.getMinutes()) : "s" === t ? o = e.getSeconds() : "ss" === t ? o = i(e.getSeconds()) : "f" === t ? o = Te.floor(e.getMilliseconds() / 100) : "ff" === t ? (o = e.getMilliseconds(), o > 99 && (o = Te.floor(o / 10)), o = i(o)) : "fff" === t ? o = i(e.getMilliseconds(), 3) : "tt" === t ? o = e.getHours() < 12 ? a.AM[0] : a.PM[0] : "zzz" === t ? (r = e.getTimezoneOffset(), l = r < 0, o = ("" + Te.abs(r / 60)).split(".")[0], r = Te.abs(r) - 60 * o, o = (l ? "+" : "-") + i(o), o += ":" + i(r)) : "zz" !== t && "z" !== t || (o = e.getTimezoneOffset() / 60, l = o < 0, o = ("" + Te.abs(o)).split(".")[0], o = (l ? "+" : "-") + ("zz" === t ? i(o) : o)), o !== n ? o : t.slice(1, t.length - 1)
            		})
            	}

            	function a(e, t, o)
            	{
            		o = r(o);
            		var i, a, l, c, w, M, S, T, x, k, O, z, D, C, E, H, _, A, N, P, F, R, U, I = o.numberFormat,
                        $ = I[h],
                        L = I.decimals,
                        W = I.pattern[0],
                        j = [],
                        B = e < 0,
                        J = p,
                        Y = p,
                        q = -1;
            		if (e === n) return p;
            		if (!isFinite(e)) return e;
            		if (!t) return o.name.length ? e.toLocaleString() : "" + e;
            		if (w = d.exec(t)) {
            			if (t = w[1].toLowerCase(), a = "c" === t, l = "p" === t, (a || l) && (I = a ? I.currency : I.percent, $ = I[h], L = I.decimals, i = I.symbol, W = I.pattern[B ? 0 : 1]), c = w[2], c && (L = +c), "e" === t) return c ? e.toExponential(L) : e.toExponential();
            			if (l && (e *= 100), e = u(e, L), B = e < 0, e = e.split(h), M = e[0], S = e[1], B && (M = M.substring(1)), Y = s(M, 0, M.length, I), S && (Y += $ + S), "n" === t && !B) return Y;
            			for (e = p, k = 0, O = W.length; k < O; k++) z = W.charAt(k), e += "n" === z ? Y : "$" === z || "%" === z ? i : z;
            			return e
            		}
            		if (B && (e = -e), (t.indexOf("'") > -1 || t.indexOf('"') > -1 || t.indexOf("\\") > -1) && (t = t.replace(f, function (e)
            		{
                            var t = e.charAt(0).replace("\\", ""),
                                n = e.slice(1).replace(t, "");
                            return j.push(n), b
            		})), t = t.split(";"), B && t[1]) t = t[1], C = !0;
            		else if (0 === e) {
            			if (t = t[2] || t[0], t.indexOf(y) == -1 && t.indexOf(v) == -1) return t
            		} else t = t[0];
            		if (P = t.indexOf("%"), F = t.indexOf("$"), l = P != -1, a = F != -1, l && (e *= 100), a && "\\" === t[F - 1] && (t = t.split("\\").join(""), a = !1), (a || l) && (I = a ? I.currency : I.percent, $ = I[h], L = I.decimals, i = I.symbol), D = t.indexOf(g) > -1, D && (t = t.replace(m, p)), E = t.indexOf(h), O = t.length, E != -1 ? (S = ("" + e).split("e"), S = S[1] ? u(e, Math.abs(S[1])) : S[0], S = S.split(h)[1] || p, _ = t.lastIndexOf(v) - E, H = t.lastIndexOf(y) - E, A = _ > -1, N = H > -1, k = S.length, A || N || (t = t.substring(0, E) + t.substring(E + 1), O = t.length, E = -1, k = 0), A && _ > H ? k = _ : H > _ && (N && k > H ? k = H : A && k < _ && (k = _)), k > -1 && (e = u(e, k))) : e = u(e), H = t.indexOf(y), R = _ = t.indexOf(v), q = H == -1 && _ != -1 ? _ : H != -1 && _ == -1 ? H : H > _ ? _ : H, H = t.lastIndexOf(y), _ = t.lastIndexOf(v), U = H == -1 && _ != -1 ? _ : H != -1 && _ == -1 ? H : H > _ ? H : _, q == O && (U = q), q != -1) {
            			for (Y = ("" + e).split(h), M = Y[0], S = Y[1] || p, T = M.length, x = S.length, B && e * -1 >= 0 && (B = !1), e = t.substring(0, q), B && !C && (e += "-"), k = q; k < O; k++) {
            				if (z = t.charAt(k), E == -1) {
            					if (U - k < T) {
            						e += M;
            						break
            					}
            				} else if (_ != -1 && _ < k && (J = p), E - k <= T && E - k > -1 && (e += M, k = E), E === k) {
            					e += (S ? $ : p) + S, k += U - E + 1;
            					continue
            				}
            				z === v ? (e += z, J = z) : z === y && (e += J)
            			}
            			if (D && (e = s(e, q + (B ? 1 : 0), Math.max(U, T + q), I)), U >= q && (e += t.substring(U + 1)), a || l) {
            				for (Y = p, k = 0, O = e.length; k < O; k++) z = e.charAt(k), Y += "$" === z || "%" === z ? i : z;
            				e = Y
            			}
            			if (O = j.length)
            				for (k = 0; k < O; k++) e = e.replace(b, j[k])
            		}
            		return e
            	}
            	var s, u, l, c = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|zzz|zz|z|"[^"]*"|'[^']*'/g,
                    d = /^(n|c|p|e)(\d*)$/i,
                    f = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g,
                    m = /\,/g,
                    p = "",
                    h = ".",
                    g = ",",
                    y = "#",
                    v = "0",
                    b = "??",
                    w = "en-US",
                    M = {}.toString;
            	ye.cultures["en-US"] = {
            		name: w,
            		numberFormat: {
            			pattern: ["-n"],
            			decimals: 2,
            			",": ",",
            			".": ".",
            			groupSize: [3],
            			percent: {
            				pattern: ["-n %", "n %"],
            				decimals: 2,
            				",": ",",
            				".": ".",
            				groupSize: [3],
            				symbol: "%"
            			},
            			currency: {
            				name: "US Dollar",
            				abbr: "USD",
            				pattern: ["($n)", "$n"],
            				decimals: 2,
            				",": ",",
            				".": ".",
            				groupSize: [3],
            				symbol: "$"
            			}
            		},
            		calendars: {
            			standard: {
            				days: {
            					names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            					namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            					namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
            				},
            				months: {
            					names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            					namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            				},
            				AM: ["AM", "am", "AM"],
            				PM: ["PM", "pm", "PM"],
            				patterns: {
            					d: "M/d/yyyy",
            					D: "dddd, MMMM dd, yyyy",
            					F: "dddd, MMMM dd, yyyy h:mm:ss tt",
            					g: "M/d/yyyy h:mm tt",
            					G: "M/d/yyyy h:mm:ss tt",
            					m: "MMMM dd",
            					M: "MMMM dd",
            					s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
            					t: "h:mm tt",
            					T: "h:mm:ss tt",
            					u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
            					y: "MMMM, yyyy",
            					Y: "MMMM, yyyy"
            				},
            				"/": "/",
            				":": ":",
            				firstDay: 0,
            				twoDigitYearMax: 2029
            			}
            		}
            	}, ye.culture = function (e)
            	{
            		var r, o = ye.cultures;
            		return e === n ? o.current : (r = t(e) || o[w], r.calendar = r.calendars.standard, o.current = r, n)
            	}, ye.findCulture = t, ye.getCulture = r, ye.culture(w), s = function (e, t, r, o)
            	{
            		var i, a, s, u, l, c, d = e.indexOf(o[h]),
                        f = o.groupSize.slice(),
                        m = f.shift();
            		if (r = d !== -1 ? d : r + 1, i = e.substring(t, r), a = i.length, a >= m) {
            			for (s = a, u = []; s > -1;)
            				if (l = i.substring(s - m, s), l && u.push(l), s -= m, c = f.shift(), m = c !== n ? c : m, 0 === m) {
            					u.push(i.substring(0, s));
            					break
            				}
            			i = u.reverse().join(o[g]), e = e.substring(0, t) + i + e.substring(r)
            		}
            		return e
            	}, u = function (e, t)
            	{
            		return t = t || 0, e = ("" + e).split("e"), e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t))), e = ("" + e).split("e"), e = +(e[0] + "e" + (e[1] ? +e[1] - t : -t)), e.toFixed(Math.min(t, 20))
            	}, l = function (e, t, r)
            	{
            		if (t) {
            			if ("[object Date]" === M.call(e)) return o(e, t, r);
            			if (typeof e === _e) return a(e, t, r)
            		}
            		return e !== n ? e : ""
            	}, ye.format = function (e)
            	{
            		var t = arguments;
            		return e.replace(ze, function (e, n, r)
            		{
            			var o = t[parseInt(n, 10) + 1];
            			return l(o, r ? r.substring(1) : "")
            		})
            	}, ye._extractFormat = function (e)
            	{
            		return "{0:" === e.slice(0, 3) && (e = e.slice(3, e.length - 1)), e
            	}, ye._activeElement = function ()
            	{
            		try {
            			return document.activeElement
            		} catch (e) {
            			return document.documentElement.activeElement
            		}
            	}, ye._round = u, ye._outerWidth = function (t, n)
            	{
            		return e(t).outerWidth(n || !1) || 0
            	}, ye._outerHeight = function (t, n)
            	{
            		return e(t).outerHeight(n || !1) || 0
            	}, ye.toString = l
            }(),
            function ()
            {
            	function t(e, t, n)
            	{
            		return !(e >= t && e <= n)
            	}

            	function r(e)
            	{
            		return e.charAt(0)
            	}

            	function o(t)
            	{
            		return e.map(t, r)
            	}

            	function i(e, t)
            	{
            		t || 23 !== e.getHours() || e.setHours(e.getHours() + 2)
            	}

            	function a(e)
            	{
            		for (var t = 0, n = e.length, r = []; t < n; t++) r[t] = (e[t] + "").toLowerCase();
            		return r
            	}

            	function s(e)
            	{
            		var t, n = {};
            		for (t in e) n[t] = a(e[t]);
            		return n
            	}

            	function u(e, r, a)
            	{
            		if (!e) return null;
            		var u, l, c, d, f, h, g, y, v, w, M, S, T, x = function (e)
            		{
            			for (var t = 0; r[F] === e;) t++, F++;
            			return t > 0 && (F -= 1), t
            		},
                        k = function (t)
                        {
                        	var n = b[t] || RegExp("^\\d{1," + t + "}"),
                                r = e.substr(R, t).match(n);
                        	return r ? (r = r[0], R += r.length, parseInt(r, 10)) : null
                        },
                        O = function (t, n)
                        {
                        	for (var r, o, i, a = 0, s = t.length, u = 0, l = 0; a < s; a++) r = t[a], o = r.length, i = e.substr(R, o), n && (i = i.toLowerCase()), i == r && o > u && (u = o, l = a);
                        	return u ? (R += u, l + 1) : null
                        },
                        z = function ()
                        {
                        	var t = !1;
                        	return e.charAt(R) === r[F] && (R++, t = !0), t
                        },
                        D = a.calendars.standard,
                        C = null,
                        E = null,
                        H = null,
                        _ = null,
                        A = null,
                        N = null,
                        P = null,
                        F = 0,
                        R = 0,
                        U = !1,
                        I = new Date,
                        $ = D.twoDigitYearMax || 2029,
                        L = I.getFullYear();
            		for (r || (r = "d"), d = D.patterns[r], d && (r = d), r = r.split(""), c = r.length; F < c; F++)
            			if (u = r[F], U) "'" === u ? U = !1 : z();
            			else if ("d" === u) {
            				if (l = x("d"), D._lowerDays || (D._lowerDays = s(D.days)), null !== H && l > 2) continue;
            				if (H = l < 3 ? k(2) : O(D._lowerDays[3 == l ? "namesAbbr" : "names"], !0), null === H || t(H, 1, 31)) return null
            			} else if ("M" === u) {
            				if (l = x("M"), D._lowerMonths || (D._lowerMonths = s(D.months)), E = l < 3 ? k(2) : O(D._lowerMonths[3 == l ? "namesAbbr" : "names"], !0), null === E || t(E, 1, 12)) return null;
            				E -= 1
            			} else if ("y" === u) {
            				if (l = x("y"), C = k(l), null === C) return null;
            				2 == l && ("string" == typeof $ && ($ = L + parseInt($, 10)), C = L - L % 100 + C, C > $ && (C -= 100))
            			} else if ("h" === u) {
            				if (x("h"), _ = k(2), 12 == _ && (_ = 0), null === _ || t(_, 0, 11)) return null
            			} else if ("H" === u) {
            				if (x("H"), _ = k(2), null === _ || t(_, 0, 23)) return null
            			} else if ("m" === u) {
            				if (x("m"), A = k(2), null === A || t(A, 0, 59)) return null
            			} else if ("s" === u) {
            				if (x("s"), N = k(2), null === N || t(N, 0, 59)) return null
            			} else if ("f" === u) {
            				if (l = x("f"), T = e.substr(R, l).match(b[3]), P = k(l), null !== P && (P = parseFloat("0." + T[0], 10), P = ye._round(P, 3), P *= 1e3), null === P || t(P, 0, 999)) return null
            			} else if ("t" === u) {
            				if (l = x("t"), y = D.AM, v = D.PM, 1 === l && (y = o(y), v = o(v)), f = O(v), !f && !O(y)) return null
            			} else if ("z" === u) {
            				if (h = !0, l = x("z"), "Z" === e.substr(R, 1)) {
            					z();
            					continue
            				}
            				if (g = e.substr(R, 6).match(l > 2 ? p : m), !g) return null;
            				if (g = g[0].split(":"), w = g[0], M = g[1], !M && w.length > 3 && (R = w.length - 2, M = w.substring(R), w = w.substring(0, R)), w = parseInt(w, 10), t(w, -12, 13)) return null;
            				if (l > 2 && (M = parseInt(M, 10), isNaN(M) || t(M, 0, 59))) return null
            			} else if ("'" === u) U = !0, z();
            			else if (!z()) return null;
            		return S = null !== _ || null !== A || N || null, null === C && null === E && null === H && S ? (C = L, E = I.getMonth(), H = I.getDate()) : (null === C && (C = L), null === H && (H = 1)), f && _ < 12 && (_ += 12), h ? (w && (_ += -w), M && (A += -M), e = new Date(Date.UTC(C, E, H, _, A, N, P))) : (e = new Date(C, E, H, _, A, N, P), i(e, _)), C < 100 && e.setFullYear(C), e.getDate() !== H && h === n ? null : e
            	}

            	function l(e)
            	{
            		var t = "-" === e.substr(0, 1) ? -1 : 1;
            		return e = e.substring(1), e = 60 * parseInt(e.substr(0, 2), 10) + parseInt(e.substring(2), 10), t * e
            	}

            	function c(e)
            	{
            		var t, n, r, o = Te.max(y.length, v.length),
                        i = e.calendar.patterns,
                        a = [];
            		for (r = 0; r < o; r++) {
            			for (t = y[r], n = 0; n < t.length; n++) a.push(i[t[n]]);
            			a = a.concat(v[r])
            		}
            		return a
            	}
            	var d = /\u00A0/g,
                    f = /[eE][\-+]?[0-9]+/,
                    m = /[+|\-]\d{1,2}/,
                    p = /[+|\-]\d{1,2}:?\d{2}/,
                    h = /^\/Date\((.*?)\)\/$/,
                    g = /[+-]\d*/,
                    y = [
                        [],
                        ["G", "g", "F"],
                        ["D", "d", "y", "m", "T", "t"]
                    ],
                    v = [
                        ["yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffff", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:ss.fff", "ddd MMM dd yyyy HH:mm:ss", "yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mmzzz", "yyyy-MM-ddTHH:mmzz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-dd HH:mm:ss", "yyyy/MM/dd HH:mm:ss"],
                        ["yyyy-MM-ddTHH:mm", "yyyy-MM-dd HH:mm", "yyyy/MM/dd HH:mm"],
                        ["yyyy/MM/dd", "yyyy-MM-dd", "HH:mm:ss", "HH:mm"]
                    ],
                    b = {
                    	2: /^\d{1,2}/,
                    	3: /^\d{1,3}/,
                    	4: /^\d{4}/
                    },
                    w = {}.toString;
            	ye.parseDate = function (e, t, n)
            	{
            		var r, o, i, a;
            		if ("[object Date]" === w.call(e)) return e;
            		if (r = 0, o = null, e && 0 === e.indexOf("/D") && (o = h.exec(e))) return o = o[1], a = g.exec(o.substring(1)), o = new Date(parseInt(o, 10)), a && (a = l(a[0]), o = ye.timezone.apply(o, 0), o = ye.timezone.convert(o, 0, -1 * a)), o;
            		for (n = ye.getCulture(n), t || (t = c(n)), t = we(t) ? t : [t], i = t.length; r < i; r++)
            			if (o = u(e, t[r], n)) return o;
            		return o
            	}, ye.parseInt = function (e, t)
            	{
            		var n = ye.parseFloat(e, t);
            		return n && (n = 0 | n), n
            	}, ye.parseFloat = function (e, t, n)
            	{
            		if (!e && 0 !== e) return null;
            		if (typeof e === _e) return e;
            		e = "" + e, t = ye.getCulture(t);
            		var r, o, i = t.numberFormat,
                        a = i.percent,
                        s = i.currency,
                        u = s.symbol,
                        l = a.symbol,
                        c = e.indexOf("-");
            		return f.test(e) ? (e = parseFloat(e.replace(i["."], ".")), isNaN(e) && (e = null), e) : c > 0 ? null : (c = c > -1, e.indexOf(u) > -1 || n && n.toLowerCase().indexOf("c") > -1 ? (i = s, r = i.pattern[0].replace("$", u).split("n"), e.indexOf(r[0]) > -1 && e.indexOf(r[1]) > -1 && (e = e.replace(r[0], "").replace(r[1], ""), c = !0)) : e.indexOf(l) > -1 && (o = !0, i = a, u = l), e = e.replace("-", "").replace(u, "").replace(d, " ").split(i[","].replace(d, " ")).join("").replace(i["."], "."), e = parseFloat(e), isNaN(e) ? e = null : c && (e *= -1), e && o && (e /= 100), e)
            	}
            }(),
            function ()
            {
            	var r, o, i, a, s, u, l;
            	ke._scrollbar = n, ke.scrollbar = function (e)
            	{
            		if (isNaN(ke._scrollbar) || e) {
            			var t, n = document.createElement("div");
            			return n.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block", n.innerHTML = "&nbsp;", document.body.appendChild(n), ke._scrollbar = t = n.offsetWidth - n.scrollWidth, document.body.removeChild(n), t
            		}
            		return ke._scrollbar
            	}, ke.isRtl = function (t)
            	{
            		return e(t).closest(".k-rtl").length > 0
            	}, r = document.createElement("table");
            	try {
            		r.innerHTML = "<tr><td></td></tr>", ke.tbodyInnerHtml = !0
            	} catch (d) {
            		ke.tbodyInnerHtml = !1
            	}
            	ke.touch = "ontouchstart" in t, ke.msPointers = t.MSPointerEvent, ke.pointers = t.PointerEvent, o = ke.transitions = !1, i = ke.transforms = !1, a = "HTMLElement" in t ? HTMLElement.prototype : [], ke.hasHW3D = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix || "MozPerspective" in document.documentElement.style || "msPerspective" in document.documentElement.style, be(["Moz", "webkit", "O", "ms"], function ()
            	{
            		var e, t = "" + this,
                        n = typeof r.style[t + "Transition"] === He;
            		if (n || typeof r.style[t + "Transform"] === He) return e = t.toLowerCase(), i = {
            			css: "ms" != e ? "-" + e + "-" : "",
            			prefix: t,
            			event: "o" === e || "webkit" === e ? e : ""
            		}, n && (o = i, o.event = o.event ? o.event + "TransitionEnd" : "transitionend"), !1
            	}), r = null, ke.transforms = i, ke.transitions = o, ke.devicePixelRatio = t.devicePixelRatio === n ? 1 : t.devicePixelRatio;
            	try {
            		ke.screenWidth = t.outerWidth || t.screen ? t.screen.availWidth : t.innerWidth, ke.screenHeight = t.outerHeight || t.screen ? t.screen.availHeight : t.innerHeight
            	} catch (d) {
            		ke.screenWidth = t.screen.availWidth, ke.screenHeight = t.screen.availHeight
            	}
            	ke.detectOS = function (e)
            	{
            		var n, r, o = !1,
						i = [],
						a = !/mobile safari/i.test(e),
						s = {
							wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
							fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
							android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.(\d+(\.\d+)?)/,
							iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
							ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
							meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
							webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
							blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
							playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
							windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
							tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
							sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
							ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
						},
						u = {
							ios: /^i(phone|pad|pod)$/i,
							android: /^android|fire$/i,
							blackberry: /^blackberry|playbook/i,
							windows: /windows/,
							wp: /wp/,
							flat: /sailfish|ffos|tizen/i,
							meego: /meego/
						},
						l = {
							tablet: /playbook|ipad|fire/i
						},
						d = {
							omini: /Opera\sMini/i,
							omobile: /Opera\sMobi/i,
							firefox: /Firefox|Fennec/i,
							mobilesafari: /version\/.*safari/i,
							ie: /MSIE|Windows\sPhone/i,
							chrome: /chrome|crios/i,
							webkit: /webkit/i
						};
            		for (r in s)
            			if (s.hasOwnProperty(r) && (i = e.match(s[r]))) {
            				if ("windows" == r && "plugins" in navigator) return !1;
            				o = {}, o.device = r, o.tablet = c(r, l, !1), o.browser = c(e, d, "default"), o.name = c(r, u), o[o.name] = !0, o.majorVersion = i[2], o.minorVersion = i[3].replace("_", "."), n = o.minorVersion.replace(".", "").substr(0, 2), o.flatVersion = o.majorVersion + n + Array(3 - (n.length < 3 ? n.length : 2)).join("0"), o.cordova = typeof t.PhoneGap !== Fe || typeof t.cordova !== Fe, o.appMode = t.navigator.standalone || /file|local|wmapp/.test(t.location.protocol) || o.cordova, o.android && (ke.devicePixelRatio < 1.5 && o.flatVersion < 400 || a) && (ke.screenWidth > 800 || ke.screenHeight > 800) && (o.tablet = r);
            				break
            			}
            		return o
            	}, s = ke.mobileOS = ke.detectOS(navigator.userAgent), ke.wpDevicePixelRatio = s.wp ? screen.width / 320 : 0, ke.kineticScrollNeeded = s && (ke.touch || ke.msPointers || ke.pointers), ke.hasNativeScrolling = !1, (s.ios || s.android && s.majorVersion > 2 || s.wp) && (ke.hasNativeScrolling = s), ke.delayedClick = function ()
            	{
            		if (ke.touch) {
            			if (s.ios) return !0;
            			if (s.android) return !ke.browser.chrome || !(ke.browser.version < 32) && !(e("meta[name=viewport]").attr("content") || "").match(/user-scalable=no/i)
            		}
            		return !1
            	}, ke.mouseAndTouchPresent = ke.touch && !(ke.mobileOS.ios || ke.mobileOS.android), ke.detectBrowser = function (e)
            	{
            		var t, n = !1,
						r = [],
						o = {
							edge: /(edge)[ \/]([\w.]+)/i,
							webkit: /(chrome)[ \/]([\w.]+)/i,
							safari: /(webkit)[ \/]([\w.]+)/i,
							opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
							msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
							mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
						};
            		for (t in o)
            			if (o.hasOwnProperty(t) && (r = e.match(o[t]))) {
            				n = {}, n[t] = !0, n[r[1].toLowerCase().split(" ")[0].split("/")[0]] = !0, n.version = parseInt(document.documentMode || r[2], 10);
            				break
            			}
            		return n
            	}, ke.browser = ke.detectBrowser(navigator.userAgent), ke.detectClipboardAccess = function ()
            	{
            		var e = {
            			copy: !!document.queryCommandSupported && document.queryCommandSupported("copy"),
            			cut: !!document.queryCommandSupported && document.queryCommandSupported("cut"),
            			paste: !!document.queryCommandSupported && document.queryCommandSupported("paste")
            		};
            		return ke.browser.chrome && (e.paste = !1, ke.browser.version >= 43 && (e.copy = !0, e.cut = !0)), e
            	}, ke.clipboard = ke.detectClipboardAccess(), ke.zoomLevel = function ()
            	{
            		var e, n, r;
            		try {
            			return e = ke.browser, n = 0, r = document.documentElement, e.msie && 11 == e.version && r.scrollHeight > r.clientHeight && !ke.touch && (n = ke.scrollbar()), ke.touch ? r.clientWidth / t.innerWidth : e.msie && e.version >= 10 ? ((top || t).document.documentElement.offsetWidth + n) / (top || t).innerWidth : 1
            		} catch (o) {
            			return 1
            		}
            	}, ke.cssBorderSpacing = n !== document.documentElement.style.borderSpacing && !(ke.browser.msie && ke.browser.version < 8),
                    function (t)
                    {
                    	var n = "",
                            r = e(document.documentElement),
                            o = parseInt(t.version, 10);
                    	t.msie ? n = "ie" : t.mozilla ? n = "ff" : t.safari ? n = "safari" : t.webkit ? n = "webkit" : t.opera ? n = "opera" : t.edge && (n = "edge"), n && (n = "k-" + n + " k-" + n + o), ke.mobileOS && (n += " k-mobile"), r.addClass(n)
                    }(ke.browser), ke.eventCapture = document.documentElement.addEventListener, u = document.createElement("input"), ke.placeholder = "placeholder" in u, ke.propertyChangeEvent = "onpropertychange" in u, ke.input = function ()
                    {
                    	for (var e, t = ["number", "date", "time", "month", "week", "datetime", "datetime-local"], n = t.length, r = "test", o = {}, i = 0; i < n; i++) e = t[i], u.setAttribute("type", e), u.value = r, o[e.replace("-", "")] = "text" !== u.type && u.value !== r;
                    	return o
                    }(), u.style.cssText = "float:left;", ke.cssFloat = !!u.style.cssFloat, u = null, ke.stableSort = function ()
                    {
                    	var e, t = 513,
                            n = [{
                            	index: 0,
                            	field: "b"
                            }];
                    	for (e = 1; e < t; e++) n.push({
                    		index: e,
                    		field: "a"
                    	});
                    	return n.sort(function (e, t)
                    	{
                    		return e.field > t.field ? 1 : e.field < t.field ? -1 : 0
                    	}), 1 === n[0].index
                    }(), ke.matchesSelector = a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.matchesSelector || a.matches || function (t)
                    {
                    	for (var n = document.querySelectorAll ? (this.parentNode || document).querySelectorAll(t) || [] : e(t), r = n.length; r--;)
                    		if (n[r] == this) return !0;
                    	return !1
                    }, ke.pushState = t.history && t.history.pushState, l = document.documentMode, ke.hashChange = "onhashchange" in t && !(ke.browser.msie && (!l || l <= 8)), ke.customElements = "registerElement" in t.document
            }(), j = {
            	left: {
            		reverse: "right"
            	},
            	right: {
            		reverse: "left"
            	},
            	down: {
            		reverse: "up"
            	},
            	up: {
            		reverse: "down"
            	},
            	top: {
            		reverse: "bottom"
            	},
            	bottom: {
            		reverse: "top"
            	},
            	"in": {
            		reverse: "out"
            	},
            	out: {
            		reverse: "in"
            	}
            }, B = {}, e.extend(B, {
            	enabled: !0,
            	Element: function (t)
            	{
            		this.element = e(t)
            	},
            	promise: function (e, t)
            	{
            		e.is(":visible") || e.css({
            			display: e.data("olddisplay") || "block"
            		}).css("display"), t.hide && e.data("olddisplay", e.css("display")).hide(), t.init && t.init(), t.completeCallback && t.completeCallback(e), e.dequeue()
            	},
            	disable: function ()
            	{
            		this.enabled = !1, this.promise = this.promiseShim
            	},
            	enable: function ()
            	{
            		this.enabled = !0, this.promise = this.animatedPromise
            	}
            }), B.promiseShim = B.promise, "kendoAnimate" in e.fn || ve(e.fn, {
            	kendoStop: function (e, t)
            	{
            		return this.stop(e, t)
            	},
            	kendoAnimate: function (e, t, n, r)
            	{
            		return M(this, e, t, n, r)
            	},
            	kendoAddClass: function (e, t)
            	{
            		return ye.toggleClass(this, e, t, !0)
            	},
            	kendoRemoveClass: function (e, t)
            	{
            		return ye.toggleClass(this, e, t, !1)
            	},
            	kendoToggleClass: function (e, t, n)
            	{
            		return ye.toggleClass(this, e, t, n)
            	}
            }), J = /&/g, Y = /</g, q = /"/g, V = /'/g, G = />/g, K = function (e)
            {
            	return e.target
            }, ke.touch && (K = function (e)
            {
            	var t = "originalEvent" in e ? e.originalEvent.changedTouches : "changedTouches" in e ? e.changedTouches : null;
            	return t ? document.elementFromPoint(t[0].clientX, t[0].clientY) : e.target
            }, be(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"], function (t, n)
            {
            	e.fn[n] = function (e)
            	{
            		return this.bind(n, e)
            	}
            })), ke.touch ? ke.mobileOS ? (ke.mousedown = "touchstart", ke.mouseup = "touchend", ke.mousemove = "touchmove", ke.mousecancel = "touchcancel", ke.click = "touchend", ke.resize = "orientationchange") : (ke.mousedown = "mousedown touchstart", ke.mouseup = "mouseup touchend", ke.mousemove = "mousemove touchmove", ke.mousecancel = "mouseleave touchcancel", ke.click = "click", ke.resize = "resize") : ke.pointers ? (ke.mousemove = "pointermove", ke.mousedown = "pointerdown", ke.mouseup = "pointerup", ke.mousecancel = "pointercancel", ke.click = "pointerup", ke.resize = "orientationchange resize") : ke.msPointers ? (ke.mousemove = "MSPointerMove", ke.mousedown = "MSPointerDown", ke.mouseup = "MSPointerUp", ke.mousecancel = "MSPointerCancel", ke.click = "MSPointerUp", ke.resize = "orientationchange resize") : (ke.mousemove = "mousemove", ke.mousedown = "mousedown", ke.mouseup = "mouseup", ke.mousecancel = "mouseleave", ke.click = "click", ke.resize = "resize"), Q = function (e, t)
            {
            	var n, r, o, i, a = t || "d",
                    s = 1;
            	for (r = 0, o = e.length; r < o; r++) i = e[r], "" !== i && (n = i.indexOf("["), 0 !== n && (n == -1 ? i = "." + i : (s++, i = "." + i.substring(0, n) + " || {})" + i.substring(n))), s++, a += i + (r < o - 1 ? " || {})" : ")"));
            	return Array(s).join("(") + a
            }, Z = /^([a-z]+:)?\/\//i, ve(ye, {
            	widgets: [],
            	_widgetRegisteredCallbacks: [],
            	ui: ye.ui || {},
            	fx: ye.fx || b,
            	effects: ye.effects || B,
            	mobile: ye.mobile || {},
            	data: ye.data || {},
            	dataviz: ye.dataviz || {},
            	drawing: ye.drawing || {},
            	spreadsheet: {
            		messages: {}
            	},
            	keys: {
            		INSERT: 45,
            		DELETE: 46,
            		BACKSPACE: 8,
            		TAB: 9,
            		ENTER: 13,
            		ESC: 27,
            		LEFT: 37,
            		UP: 38,
            		RIGHT: 39,
            		DOWN: 40,
            		END: 35,
            		HOME: 36,
            		SPACEBAR: 32,
            		PAGEUP: 33,
            		PAGEDOWN: 34,
            		F2: 113,
            		F10: 121,
            		F12: 123,
            		NUMPAD_PLUS: 107,
            		NUMPAD_MINUS: 109,
            		NUMPAD_DOT: 110
            	},
            	support: ye.support || ke,
            	animate: ye.animate || M,
            	ns: "",
            	attr: function (e)
            	{
            		return "data-" + ye.ns + e
            	},
            	getShadows: a,
            	wrap: s,
            	deepExtend: u,
            	getComputedStyles: m,
            	webComponents: ye.webComponents || [],
            	isScrollable: p,
            	scrollLeft: h,
            	size: g,
            	toCamelCase: f,
            	toHyphens: d,
            	getOffset: ye.getOffset || y,
            	parseEffects: ye.parseEffects || v,
            	toggleClass: ye.toggleClass || S,
            	directions: ye.directions || j,
            	Observable: P,
            	Class: r,
            	Template: H,
            	template: Me(H.compile, H),
            	render: Me(H.render, H),
            	stringify: Me(xe.stringify, xe),
            	eventTarget: K,
            	htmlEncode: T,
            	isLocalUrl: function (e)
            	{
            		return e && !Z.test(e)
            	},
            	expr: function (e, t, n)
            	{
            		return e = e || "", typeof t == He && (n = t, t = !1), n = n || "d", e && "[" !== e.charAt(0) && (e = "." + e), t ? (e = e.replace(/"([^.]*)\.([^"]*)"/g, '"$1_$DOT$_$2"'), e = e.replace(/'([^.]*)\.([^']*)'/g, "'$1_$DOT$_$2'"), e = Q(e.split("."), n), e = e.replace(/_\$DOT\$_/g, ".")) : e = n + e, e
            	},
            	getter: function (e, t)
            	{
            		var n = e + t;
            		return Re[n] = Re[n] || Function("d", "return " + ye.expr(e, t))
            	},
            	setter: function (e)
            	{
            		return Ue[e] = Ue[e] || Function("d,value", ye.expr(e) + "=value")
            	},
            	accessor: function (e)
            	{
            		return {
            			get: ye.getter(e),
            			set: ye.setter(e)
            		}
            	},
            	guid: function ()
            	{
            		var e, t, n = "";
            		for (e = 0; e < 32; e++) t = 16 * Te.random() | 0, 8 != e && 12 != e && 16 != e && 20 != e || (n += "-"), n += (12 == e ? 4 : 16 == e ? 3 & t | 8 : t).toString(16);
            		return n
            	},
            	roleSelector: function (e)
            	{
            		return e.replace(/(\S+)/g, "[" + ye.attr("role") + "=$1],").slice(0, -1)
            	},
            	directiveSelector: function (e)
            	{
            		var t, n = e.split(" ");
            		if (n)
            			for (t = 0; t < n.length; t++) "view" != n[t] && (n[t] = n[t].replace(/(\w*)(view|bar|strip|over)$/, "$1-$2"));
            		return n.join(" ").replace(/(\S+)/g, "kendo-mobile-$1,").slice(0, -1)
            	},
            	triggeredByInput: function (e)
            	{
            		return /^(label|input|textarea|select)$/i.test(e.target.tagName)
            	},
            	onWidgetRegistered: function (e)
            	{
            		for (var t = 0, n = ye.widgets.length; t < n; t++) e(ye.widgets[t]);
            		ye._widgetRegisteredCallbacks.push(e)
            	},
            	logToConsole: function (e, r)
            	{
            		var o = t.console;
            		!ye.suppressLog && n !== o && o.log && o[r || "log"](e)
            	}
            }), X = P.extend({
            	init: function (e, t)
            	{
            		var n, r = this;
            		r.element = ye.jQuery(e).handler(r), r.angular("init", t), P.fn.init.call(r), n = t ? t.dataSource : null, n && (t = ve({}, t, {
            			dataSource: {}
            		})), t = r.options = ve(!0, {}, r.options, t), n && (t.dataSource = n),
                        r.element.attr(ye.attr("role")) || r.element.attr(ye.attr("role"), (t.name || "").toLowerCase()), r.element.data("kendo" + t.prefix + t.name, r), r.bind(r.events, t)
            	},
            	events: [],
            	options: {
            		prefix: ""
            	},
            	_hasBindingTarget: function ()
            	{
            		return !!this.element[0].kendoBindingTarget
            	},
            	_tabindex: function (e)
            	{
            		e = e || this.wrapper;
            		var t = this.element,
                        n = "tabindex",
                        r = e.attr(n) || t.attr(n);
            		t.removeAttr(n), e.attr(n, isNaN(r) ? 0 : r)
            	},
            	setOptions: function (t)
            	{
            		this._setEvents(t), e.extend(this.options, t)
            	},
            	_setEvents: function (e)
            	{
            		for (var t, n = this, r = 0, o = n.events.length; r < o; r++) t = n.events[r], n.options[t] && e[t] && n.unbind(t, n.options[t]);
            		n.bind(n.events, e)
            	},
            	resize: function (e)
            	{
            		var t = this.getSize(),
                        n = this._size;
            		(e || (t.width > 0 || t.height > 0) && (!n || t.width !== n.width || t.height !== n.height)) && (this._size = t, this._resize(t, e), this.trigger("resize", t))
            	},
            	getSize: function ()
            	{
            		return ye.dimensions(this.element)
            	},
            	size: function (e)
            	{
            		return e ? (this.setSize(e), n) : this.getSize()
            	},
            	setSize: e.noop,
            	_resize: e.noop,
            	destroy: function ()
            	{
            		var e = this;
            		e.element.removeData("kendo" + e.options.prefix + e.options.name), e.element.removeData("handler"), e.unbind()
            	},
            	_destroy: function ()
            	{
            		this.destroy()
            	},
            	angular: function () { },
            	_muteAngularRebind: function (e)
            	{
            		this._muteRebind = !0, e.call(this), this._muteRebind = !1
            	}
            }), ee = X.extend({
            	dataItems: function ()
            	{
            		return this.dataSource.flatView()
            	},
            	_angularItems: function (t)
            	{
            		var n = this;
            		n.angular(t, function ()
            		{
            			return {
            				elements: n.items(),
            				data: e.map(n.dataItems(), function (e)
            				{
            					return {
            						dataItem: e
            					}
            				})
            			}
            		})
            	}
            }), ye.dimensions = function (e, t)
            {
            	var n = e[0];
            	return t && e.css(t), {
            		width: n.offsetWidth,
            		height: n.offsetHeight
            	}
            }, ye.notify = Se, te = /template$/i, ne = /^\s*(?:\{(?:.|\r\n|\n)*\}|\[(?:.|\r\n|\n)*\])\s*$/, re = /^\{(\d+)(:[^\}]+)?\}|^\[[A-Za-z_]*\]$/, oe = /([A-Z])/g, ye.initWidget = function (r, o, i)
            {
            	var a, s, u, l, c, d, f, m, p, h, g, y, v;
            	if (i ? i.roles && (i = i.roles) : i = ye.ui.roles, r = r.nodeType ? r : r[0], d = r.getAttribute("data-" + ye.ns + "role")) {
            		p = d.indexOf(".") === -1, u = p ? i[d] : ye.getter(d)(t), g = e(r).data(), y = u ? "kendo" + u.fn.options.prefix + u.fn.options.name : "", h = p ? RegExp("^kendo.*" + d + "$", "i") : RegExp("^" + y + "$", "i");
            		for (v in g)
            			if (v.match(h)) {
            				if (v !== y) return g[v];
            				a = g[v]
            			}
            		if (u) {
            			for (m = x(r, "dataSource"), o = e.extend({}, k(r, u.fn.options), o), m && (o.dataSource = typeof m === He ? ye.getter(m)(t) : m), l = 0, c = u.fn.events.length; l < c; l++) s = u.fn.events[l], f = x(r, s), f !== n && (o[s] = ye.getter(f)(t));
            			return a ? e.isEmptyObject(o) || a.setOptions(o) : a = new u(r, o), a
            		}
            	}
            }, ye.rolesFromNamespaces = function (e)
            {
            	var t, n, r = [];
            	for (e[0] || (e = [ye.ui, ye.dataviz.ui]), t = 0, n = e.length; t < n; t++) r[t] = e[t].roles;
            	return ve.apply(null, [{}].concat(r.reverse()))
            }, ye.init = function (t)
            {
            	var n = ye.rolesFromNamespaces(Ie.call(arguments, 1));
            	e(t).find("[data-" + ye.ns + "role]").addBack().each(function ()
            	{
            		ye.initWidget(this, {}, n)
            	})
            }, ye.destroy = function (t)
            {
            	e(t).find("[data-" + ye.ns + "role]").addBack().each(function ()
            	{
            		var t, n = e(this).data();
            		for (t in n) 0 === t.indexOf("kendo") && typeof n[t].destroy === Ee && n[t].destroy()
            	})
            }, ye.resize = function (t, n)
            {
            	var r, o = e(t).find("[data-" + ye.ns + "role]").addBack().filter(z);
            	o.length && (r = e.makeArray(o), r.sort(O), e.each(r, function ()
            	{
            		var t = ye.widgetInstance(e(this));
            		t && t.resize(n)
            	}))
            }, ye.parseOptions = k, ve(ye.ui, {
            	Widget: X,
            	DataBoundWidget: ee,
            	roles: {},
            	progress: function (t, n)
            	{
            		var r, o, i, a, s = t.find(".k-loading-mask"),
                        u = ye.support,
                        l = u.browser;
            		n ? s.length || (r = u.isRtl(t), o = r ? "right" : "left", a = t.scrollLeft(), i = l.webkit && r ? t[0].scrollWidth - t.width() - 2 * a : 0, s = e("<div class='k-loading-mask'><span class='k-loading-text'>" + ye.ui.progress.messages.loading + "</span><div class='k-loading-image'/><div class='k-loading-color'/></div>").width("100%").height("100%").css("top", t.scrollTop()).css(o, Math.abs(a) + i).prependTo(t)) : s && s.remove()
            	},
            	plugin: function (t, r, o)
            	{
            		var i, a, s, u, l = t.fn.options.name;
            		for (r = r || ye.ui, o = o || "", r[l] = t, r.roles[l.toLowerCase()] = t, i = "getKendo" + o + l, l = "kendo" + o + l, a = {
            			name: l,
            			widget: t,
            			prefix: o || ""
            		}, ye.widgets.push(a), s = 0, u = ye._widgetRegisteredCallbacks.length; s < u; s++) ye._widgetRegisteredCallbacks[s](a);
            		e.fn[l] = function (r)
            		{
            			var o, i = this;
            			return typeof r === He ? (o = Ie.call(arguments, 1), this.each(function ()
            			{
            				var t, a, s = e.data(this, l);
            				if (!s) throw Error(ye.format("Cannot call method '{0}' of {1} before it is initialized", r, l));
            				if (t = s[r], typeof t !== Ee) throw Error(ye.format("Cannot find method '{0}' of {1}", r, l));
            				if (a = t.apply(s, o), a !== n) return i = a, !1
            			})) : this.each(function ()
            			{
            				return new t(this, r)
            			}), i
            		}, e.fn[l].widget = t, e.fn[i] = function ()
            		{
            			return this.data(l)
            		}
            	}
            }), ye.ui.progress.messages = {
            	loading: "Loading..."
            }, ie = {
            	bind: function ()
            	{
            		return this
            	},
            	nullObject: !0,
            	options: {}
            }, ae = X.extend({
            	init: function (e, t)
            	{
            		X.fn.init.call(this, e, t), this.element.autoApplyNS(), this.wrapper = this.element, this.element.addClass("km-widget")
            	},
            	destroy: function ()
            	{
            		X.fn.destroy.call(this), this.element.kendoDestroy()
            	},
            	options: {
            		prefix: "Mobile"
            	},
            	events: [],
            	view: function ()
            	{
            		var e = this.element.closest(ye.roleSelector("view splitview modalview drawer"));
            		return ye.widgetInstance(e, ye.mobile.ui) || ie
            	},
            	viewHasNativeScrolling: function ()
            	{
            		var e = this.view();
            		return e && e.options.useNativeScrolling
            	},
            	container: function ()
            	{
            		var e = this.element.closest(ye.roleSelector("view layout modalview drawer splitview"));
            		return ye.widgetInstance(e.eq(0), ye.mobile.ui) || ie
            	}
            }), ve(ye.mobile, {
            	init: function (e)
            	{
            		ye.init(e, ye.mobile.ui, ye.ui, ye.dataviz.ui)
            	},
            	appLevelNativeScrolling: function ()
            	{
            		return ye.mobile.application && ye.mobile.application.options && ye.mobile.application.options.useNativeScrolling
            	},
            	roles: {},
            	ui: {
            		Widget: ae,
            		DataBoundWidget: ee.extend(ae.prototype),
            		roles: {},
            		plugin: function (e)
            		{
            			ye.ui.plugin(e, ye.mobile.ui, "Mobile")
            		}
            	}
            }), u(ye.dataviz, {
            	init: function (e)
            	{
            		ye.init(e, ye.dataviz.ui)
            	},
            	ui: {
            		roles: {},
            		themes: {},
            		views: [],
            		plugin: function (e)
            		{
            			ye.ui.plugin(e, ye.dataviz.ui)
            		}
            	},
            	roles: {}
            }), ye.touchScroller = function (t, n)
            {
            	return n || (n = {}), n.useNative = !0, e(t).map(function (t, r)
            	{
            		return r = e(r), !(!ke.kineticScrollNeeded || !ye.mobile.ui.Scroller || r.data("kendoMobileScroller")) && (r.kendoMobileScroller(n), r.data("kendoMobileScroller"))
            	})[0]
            }, ye.preventDefault = function (e)
            {
            	e.preventDefault()
            }, ye.widgetInstance = function (e, n)
            {
            	var r, o, i, a, s = e.data(ye.ns + "role"),
                    u = [];
            	if (s) {
            		if ("content" === s && (s = "scroller"), n)
            			if (n[0])
            				for (r = 0, o = n.length; r < o; r++) u.push(n[r].roles[s]);
            			else u.push(n.roles[s]);
            		else u = [ye.ui.roles[s], ye.dataviz.ui.roles[s], ye.mobile.ui.roles[s]];
            		for (s.indexOf(".") >= 0 && (u = [ye.getter(s)(t)]), r = 0, o = u.length; r < o; r++)
            			if (i = u[r], i && (a = e.data("kendo" + i.fn.options.prefix + i.fn.options.name))) return a
            	}
            }, ye.onResize = function (n)
            {
            	var r = n;
            	return ke.mobileOS.android && (r = function ()
            	{
            		setTimeout(n, 600)
            	}), e(t).on(ke.resize, r), r
            }, ye.unbindResize = function (n)
            {
            	e(t).off(ke.resize, n)
            }, ye.attrValue = function (e, t)
            {
            	return e.data(ye.ns + t)
            }, ye.days = {
            	Sunday: 0,
            	Monday: 1,
            	Tuesday: 2,
            	Wednesday: 3,
            	Thursday: 4,
            	Friday: 5,
            	Saturday: 6
            }, e.extend(e.expr[":"], {
            	kendoFocusable: function (t)
            	{
            		var n = e.attr(t, "tabindex");
            		return D(t, !isNaN(n) && n > -1)
            	}
            }), se = ["mousedown", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "mouseup", "click"], ue = "label, input, [data-rel=external]", le = {
            	setupMouseMute: function ()
            	{
            		var t, n = 0,
                        r = se.length,
                        o = document.documentElement;
            		if (!le.mouseTrap && ke.eventCapture)
            			for (le.mouseTrap = !0, le.bustClick = !1, le.captureMouse = !1, t = function (t)
            			{
                                le.captureMouse && ("click" === t.type ? le.bustClick && !e(t.target).is(ue) && (t.preventDefault(), t.stopPropagation()) : t.stopPropagation())
            			}; n < r; n++) o.addEventListener(se[n], t, !0)
            	},
            	muteMouse: function (e)
            	{
            		le.captureMouse = !0, e.data.bustClick && (le.bustClick = !0), clearTimeout(le.mouseTrapTimeoutID)
            	},
            	unMuteMouse: function ()
            	{
            		clearTimeout(le.mouseTrapTimeoutID), le.mouseTrapTimeoutID = setTimeout(function ()
            		{
            			le.captureMouse = !1, le.bustClick = !1
            		}, 400)
            	}
            }, ce = {
            	down: "touchstart mousedown",
            	move: "mousemove touchmove",
            	up: "mouseup touchend touchcancel",
            	cancel: "mouseleave touchcancel"
            }, ke.touch && (ke.mobileOS.ios || ke.mobileOS.android) ? ce = {
            	down: "touchstart",
            	move: "touchmove",
            	up: "touchend touchcancel",
            	cancel: "touchcancel"
            } : ke.pointers ? ce = {
            	down: "pointerdown",
            	move: "pointermove",
            	up: "pointerup",
            	cancel: "pointercancel pointerleave"
            } : ke.msPointers && (ce = {
            	down: "MSPointerDown",
            	move: "MSPointerMove",
            	up: "MSPointerUp",
            	cancel: "MSPointerCancel MSPointerLeave"
            }), !ke.msPointers || "onmspointerenter" in t || e.each({
            	MSPointerEnter: "MSPointerOver",
            	MSPointerLeave: "MSPointerOut"
            }, function (t, n)
            {
            	e.event.special[t] = {
            		delegateType: n,
            		bindType: n,
            		handle: function (t)
            		{
            			var r, o = this,
                            i = t.relatedTarget,
                            a = t.handleObj;
            			return i && (i === o || e.contains(o, i)) || (t.type = a.origType, r = a.handler.apply(this, arguments), t.type = n), r
            		}
            	}
            }), de = function (e)
            {
            	return ce[e] || e
            }, fe = /([^ ]+)/g, ye.applyEventMap = function (e, t)
            {
            	return e = e.replace(fe, de), t && (e = e.replace(fe, "$1." + t)), e
            }, me = e.fn.on, ve(!0, E, e), E.fn = E.prototype = new e, E.fn.constructor = E, E.fn.init = function (t, n)
            {
            	return n && n instanceof e && !(n instanceof E) && (n = E(n)), e.fn.init.call(this, t, n, pe)
            }, E.fn.init.prototype = E.fn, pe = E(document), ve(E.fn, {
            	handler: function (e)
            	{
            		return this.data("handler", e), this
            	},
            	autoApplyNS: function (e)
            	{
            		return this.data("kendoNS", e || ye.guid()), this
            	},
            	on: function ()
            	{
            		var e, t, n, r, o, i, a = this,
                        s = a.data("kendoNS");
            		return 1 === arguments.length ? me.call(a, arguments[0]) : (e = a, t = Ie.call(arguments), typeof t[t.length - 1] === Fe && t.pop(), n = t[t.length - 1], r = ye.applyEventMap(t[0], s), ke.mouseAndTouchPresent && r.search(/mouse|click/) > -1 && this[0] !== document.documentElement && (le.setupMouseMute(), o = 2 === t.length ? null : t[1], i = r.indexOf("click") > -1 && r.indexOf("touchend") > -1, me.call(this, {
            			touchstart: le.muteMouse,
            			touchend: le.unMuteMouse
            		}, o, {
            			bustClick: i
            		})), typeof n === He && (e = a.data("handler"), n = e[n], t[t.length - 1] = function (t)
            		{
            			n.call(e, t)
            		}), t[0] = r, me.apply(a, t), a)
            	},
            	kendoDestroy: function (e)
            	{
            		return e = e || this.data("kendoNS"), e && this.off("." + e), this
            	}
            }), ye.jQuery = E, ye.eventMap = ce, ye.timezone = function ()
            {
            	function e(e, t)
            	{
            		var n, r, o, i = t[3],
                        a = t[4],
                        s = t[5],
                        u = t[8];
            		return u || (t[8] = u = {}), u[e] ? u[e] : (isNaN(a) ? 0 === a.indexOf("last") ? (n = new Date(Date.UTC(e, c[i] + 1, 1, s[0] - 24, s[1], s[2], 0)), r = d[a.substr(4, 3)], o = n.getUTCDay(), n.setUTCDate(n.getUTCDate() + r - o - (r > o ? 7 : 0))) : a.indexOf(">=") >= 0 && (n = new Date(Date.UTC(e, c[i], a.substr(5), s[0], s[1], s[2], 0)), r = d[a.substr(0, 3)], o = n.getUTCDay(), n.setUTCDate(n.getUTCDate() + r - o + (r < o ? 7 : 0))) : n = new Date(Date.UTC(e, c[i], a, s[0], s[1], s[2], 0)), u[e] = n)
            	}

            	function t(t, n, r)
            	{
            		var o, i, a, s;
            		return (n = n[r]) ? (a = new Date(t).getUTCFullYear(), n = jQuery.grep(n, function (e)
            		{
            			var t = e[0],
                            n = e[1];
            			return t <= a && (n >= a || t == a && "only" == n || "max" == n)
            		}), n.push(t), n.sort(function (t, n)
            		{
            			return "number" != typeof t && (t = +e(a, t)), "number" != typeof n && (n = +e(a, n)), t - n
            		}), s = n[jQuery.inArray(t, n) - 1] || n[n.length - 1], isNaN(s) ? s : null) : (o = r.split(":"), i = 0, o.length > 1 && (i = 60 * o[0] + +o[1]), [-1e6, "max", "-", "Jan", 1, [0, 0, 0], i, "-"])
            	}

            	function n(e, t, n)
            	{
            		var r, o, i, a = t[n];
            		if ("string" == typeof a && (a = t[a]), !a) throw Error('Timezone "' + n + '" is either incorrect, or kendo.timezones.min.js is not included.');
            		for (r = a.length - 1; r >= 0 && (o = a[r][3], !(o && e > o)) ; r--);
            		if (i = a[r + 1], !i) throw Error('Timezone "' + n + '" not found on ' + e + ".");
            		return i
            	}

            	function r(e, r, o, i)
            	{
            		typeof e != _e && (e = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
            		var a = n(e, r, i);
            		return {
            			zone: a,
            			rule: t(e, o, a[1])
            		}
            	}

            	function o(e, t)
            	{
            		var n, o, i;
            		return "Etc/UTC" == t || "Etc/GMT" == t ? 0 : (n = r(e, this.zones, this.rules, t), o = n.zone, i = n.rule, ye.parseFloat(i ? o[0] - i[6] : o[0]))
            	}

            	function i(e, t)
            	{
            		var n = r(e, this.zones, this.rules, t),
                        o = n.zone,
                        i = n.rule,
                        a = o[2];
            		return a.indexOf("/") >= 0 ? a.split("/")[i && +i[6] ? 1 : 0] : a.indexOf("%s") >= 0 ? a.replace("%s", i && "-" != i[7] ? i[7] : "") : a
            	}

            	function a(e, t, n)
            	{
            		var r, o;
            		return typeof t == He && (t = this.offset(e, t)), typeof n == He && (n = this.offset(e, n)), r = e.getTimezoneOffset(), e = new Date(e.getTime() + 6e4 * (t - n)), o = e.getTimezoneOffset(), new Date(e.getTime() + 6e4 * (o - r))
            	}

            	function s(e, t)
            	{
            		return this.convert(e, e.getTimezoneOffset(), t)
            	}

            	function u(e, t)
            	{
            		return this.convert(e, t, e.getTimezoneOffset())
            	}

            	function l(e)
            	{
            		return this.apply(new Date(e), "Etc/UTC")
            	}
            	var c = {
            		Jan: 0,
            		Feb: 1,
            		Mar: 2,
            		Apr: 3,
            		May: 4,
            		Jun: 5,
            		Jul: 6,
            		Aug: 7,
            		Sep: 8,
            		Oct: 9,
            		Nov: 10,
            		Dec: 11
            	},
                    d = {
                    	Sun: 0,
                    	Mon: 1,
                    	Tue: 2,
                    	Wed: 3,
                    	Thu: 4,
                    	Fri: 5,
                    	Sat: 6
                    };
            	return {
            		zones: {},
            		rules: {},
            		offset: o,
            		convert: a,
            		apply: s,
            		remove: u,
            		abbr: i,
            		toLocalDate: l
            	}
            }(), ye.date = function ()
            {
            	function e(e, t)
            	{
            		return 0 === t && 23 === e.getHours() && (e.setHours(e.getHours() + 2), !0)
            	}

            	function t(t, n, r)
            	{
            		var o = t.getHours();
            		r = r || 1, n = (n - t.getDay() + 7 * r) % 7, t.setDate(t.getDate() + n), e(t, o)
            	}

            	function n(e, n, r)
            	{
            		return e = new Date(e), t(e, n, r), e
            	}

            	function r(e)
            	{
            		return new Date(e.getFullYear(), e.getMonth(), 1)
            	}

            	function o(e)
            	{
            		var t = new Date(e.getFullYear(), e.getMonth() + 1, 0),
                        n = r(e),
                        o = Math.abs(t.getTimezoneOffset() - n.getTimezoneOffset());
            		return o && t.setHours(n.getHours() + o / 60), t
            	}

            	function i(t)
            	{
            		return t = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0), e(t, 0), t
            	}

            	function a(e)
            	{
            		return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds())
            	}

            	function s(e)
            	{
            		return e.getTime() - i(e)
            	}

            	function u(e, t, n)
            	{
            		var r, o = s(t),
                        i = s(n);
            		return !e || o == i || (t >= n && (n += y), r = s(e), o > r && (r += y), i < o && (i += y), r >= o && r <= i)
            	}

            	function l(e, t, n)
            	{
            		var r, o = t.getTime(),
                        i = n.getTime();
            		return o >= i && (i += y), r = e.getTime(), r >= o && r <= i
            	}

            	function c(t, n)
            	{
            		var r = t.getHours();
            		return t = new Date(t), d(t, n * y), e(t, r), t
            	}

            	function d(e, t, n)
            	{
            		var r, o = e.getTimezoneOffset();
            		e.setTime(e.getTime() + t), n || (r = e.getTimezoneOffset() - o, e.setTime(e.getTime() + r * g))
            	}

            	function f(t, n)
            	{
            		return t = new Date(ye.date.getDate(t).getTime() + ye.date.getMilliseconds(n)), e(t, n.getHours()), t
            	}

            	function m()
            	{
            		return i(new Date)
            	}

            	function p(e)
            	{
            		return i(e).getTime() == m().getTime()
            	}

            	function h(e)
            	{
            		var t = new Date(1980, 1, 1, 0, 0, 0);
            		return e && t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), t
            	}
            	var g = 6e4,
                    y = 864e5;
            	return {
            		adjustDST: e,
            		dayOfWeek: n,
            		setDayOfWeek: t,
            		getDate: i,
            		isInDateRange: l,
            		isInTimeRange: u,
            		isToday: p,
            		nextDay: function (e)
            		{
            			return c(e, 1)
            		},
            		previousDay: function (e)
            		{
            			return c(e, -1)
            		},
            		toUtcTime: a,
            		MS_PER_DAY: y,
            		MS_PER_HOUR: 60 * g,
            		MS_PER_MINUTE: g,
            		setTime: d,
            		setHours: f,
            		addDays: c,
            		today: m,
            		toInvariantTime: h,
            		firstDayOfMonth: r,
            		lastDayOfMonth: o,
            		getMilliseconds: s
            	}
            }(), ye.stripWhitespace = function (e)
            {
            	var t, n, r;
            	if (document.createNodeIterator)
            		for (t = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, function (t)
            		{
                            return t.parentNode == e ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
            		}, !1) ; t.nextNode() ;) t.referenceNode && !t.referenceNode.textContent.trim() && t.referenceNode.parentNode.removeChild(t.referenceNode);
            	else
            		for (n = 0; n < e.childNodes.length; n++) r = e.childNodes[n], 3 != r.nodeType || /\S/.test(r.nodeValue) || (e.removeChild(r), n--), 1 == r.nodeType && ye.stripWhitespace(r)
            }, he = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e)
            {
            	setTimeout(e, 1e3 / 60)
            }, ye.animationFrame = function (e)
            {
            	he.call(t, e)
            }, ge = [], ye.queueAnimation = function (e)
            {
            	ge[ge.length] = e, 1 === ge.length && ye.runNextAnimation()
            }, ye.runNextAnimation = function ()
            {
            	ye.animationFrame(function ()
            	{
            		ge[0] && (ge.shift()(), ge[0] && ye.runNextAnimation())
            	})
            }, ye.parseQueryStringParams = function (e)
            {
            	for (var t = e.split("?")[1] || "", n = {}, r = t.split(/&|=/), o = r.length, i = 0; i < o; i += 2) "" !== r[i] && (n[decodeURIComponent(r[i])] = decodeURIComponent(r[i + 1]));
            	return n
            }, ye.elementUnderCursor = function (e)
            {
            	if (n !== e.x.client) return document.elementFromPoint(e.x.client, e.y.client)
            }, ye.wheelDeltaY = function (e)
            {
            	var t, r = e.originalEvent,
                    o = r.wheelDeltaY;
            	return r.wheelDelta ? (o === n || o) && (t = r.wheelDelta) : r.detail && r.axis === r.VERTICAL_AXIS && (t = 10 * -r.detail), t
            }, ye.throttle = function (e, t)
            {
            	var r, o, i = 0;
            	return !t || t <= 0 ? e : (o = function ()
            	{
            		function o()
            		{
            			e.apply(a, u), i = +new Date
            		}
            		var a = this,
                        s = +new Date - i,
                        u = arguments;
            		return i ? (r && clearTimeout(r), s > t ? o() : r = setTimeout(o, t - s), n) : o()
            	}, o.cancel = function ()
            	{
            		clearTimeout(r)
            	}, o)
            }, ye.caret = function (t, r, o)
            {
            	var i, a, s, u, l = r !== n;
            	if (o === n && (o = r), t[0] && (t = t[0]), !l || !t.disabled) {
            		try {
            			t.selectionStart !== n ? l ? (t.focus(), t.setSelectionRange(r, o)) : r = [t.selectionStart, t.selectionEnd] : document.selection && (e(t).is(":visible") && t.focus(), i = t.createTextRange(), l ? (i.collapse(!0), i.moveStart("character", r), i.moveEnd("character", o - r), i.select()) : (a = i.duplicate(), i.moveToBookmark(document.selection.createRange().getBookmark()), a.setEndPoint("EndToStart", i), s = a.text.length, u = s + i.text.length, r = [s, u]))
            		} catch (c) {
            			r = []
            		}
            		return r
            	}
            }, ye.compileMobileDirective = function (e, n)
            {
            	var r = t.angular;
            	return e.attr("data-" + ye.ns + "role", e[0].tagName.toLowerCase().replace("kendo-mobile-", "").replace("-", "")), r.element(e).injector().invoke(["$compile", function (t)
            	{
            		t(e)(n), /^\$(digest|apply)$/.test(n.$$phase) || n.$digest()
            	}]), ye.widgetInstance(e, ye.mobile.ui)
            }, ye.antiForgeryTokens = function ()
            {
            	var t = {},
                    r = e("meta[name=csrf-token],meta[name=_csrf]").attr("content"),
                    o = e("meta[name=csrf-param],meta[name=_csrf_header]").attr("content");
            	return e("input[name^='__RequestVerificationToken']").each(function ()
            	{
            		t[this.name] = this.value
            	}), o !== n && r !== n && (t[o] = r), t
            }, ye.cycleForm = function (e)
            {
            	function t(e)
            	{
            		var t = ye.widgetInstance(e);
            		t && t.focus ? t.focus() : e.focus()
            	}
            	var n = e.find("input, .k-widget").first(),
                    r = e.find("button, .k-button").last();
            	r.on("keydown", function (e)
            	{
            		e.keyCode != ye.keys.TAB || e.shiftKey || (e.preventDefault(), t(n))
            	}), n.on("keydown", function (e)
            	{
            		e.keyCode == ye.keys.TAB && e.shiftKey && (e.preventDefault(), t(r))
            	})
            },
            function ()
            {
            	function n(t, n, r, o)
            	{
            		var i, a, s = e("<form>").attr({
            			action: r,
            			method: "POST",
            			target: o
            		}),
                        u = ye.antiForgeryTokens();
            		u.fileName = n, i = t.split(";base64,"), u.contentType = i[0].replace("data:", ""), u.base64 = i[1];
            		for (a in u) u.hasOwnProperty(a) && e("<input>").attr({
            			value: u[a],
            			name: a,
            			type: "hidden"
            		}).appendTo(s);
            		s.appendTo("body").submit().remove()
            	}

            	function r(e, t)
            	{
            		var n, r, o, i, a, s = e;
            		if ("string" == typeof e) {
            			for (n = e.split(";base64,"), r = n[0], o = atob(n[1]), i = new Uint8Array(o.length), a = 0; a < o.length; a++) i[a] = o.charCodeAt(a);
            			s = new Blob([i.buffer], {
            				type: r
            			})
            		}
            		navigator.msSaveBlob(s, t)
            	}

            	function o(e, n)
            	{
            		t.Blob && e instanceof Blob && (e = URL.createObjectURL(e)), i.download = n, i.href = e;
            		var r = document.createEvent("MouseEvents");
            		r.initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), i.dispatchEvent(r), setTimeout(function ()
            		{
            			URL.revokeObjectURL(e)
            		})
            	}
            	var i = document.createElement("a"),
                    a = "download" in i && !ye.support.browser.edge;
            	ye.saveAs = function (e)
            	{
            		var t = n;
            		e.forceProxy || (a ? t = o : navigator.msSaveBlob && (t = r)), t(e.dataURI, e.fileName, e.proxyURL, e.proxyTarget)
            	}
            }(), ye.proxyModelSetters = function (e)
            {
            	var t = {};
            	return Object.keys(e || {}).forEach(function (n)
            	{
            		Object.defineProperty(t, n, {
            			get: function ()
            			{
            				return e[n]
            			},
            			set: function (t)
            			{
            				e[n] = t, e.dirty = !0
            			}
            		})
            	}), t
            }
	}(jQuery, window), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
});;
! function (e, define)
{
	define("kendo.userevents.min", ["kendo.core.min"], e)
}(function ()
{
	return function (e, t)
	{
		function n(e, t)
		{
			var n = e.x.location,
                i = e.y.location,
                o = t.x.location,
                r = t.y.location,
                s = n - o,
                a = i - r;
			return {
				center: {
					x: (n + o) / 2,
					y: (i + r) / 2
				},
				distance: Math.sqrt(s * s + a * a)
			}
		}

		function i(e)
		{
			var t, n, i, o = [],
                r = e.originalEvent,
                a = e.currentTarget,
                c = 0;
			if (e.api) o.push({
				id: 2,
				event: e,
				target: e.target,
				currentTarget: e.target,
				location: e,
				type: "api"
			});
			else if (e.type.match(/touch/))
				for (n = r ? r.changedTouches : [], t = n.length; c < t; c++) i = n[c], o.push({
					location: i,
					event: e,
					target: i.target,
					currentTarget: a,
					id: i.identifier,
					type: "touch"
				});
			else o.push(s.pointers || s.msPointers ? {
				location: r,
				event: e,
				target: e.target,
				currentTarget: a,
				id: r.pointerId,
				type: "pointer"
			} : {
				id: 1,
				event: e,
				target: e.target,
				currentTarget: a,
				location: e,
				type: "mouse"
			});
			return o
		}

		function o(e)
		{
			for (var t = r.eventMap.up.split(" "), n = 0, i = t.length; n < i; n++) e(t[n])
		}
		var r = window.kendo,
            s = r.support,
            a = r.Class,
            c = r.Observable,
            u = e.now,
            h = e.extend,
            l = s.mobileOS,
            p = l && l.android,
            d = 800,
            f = s.browser.msie ? 5 : 0,
            v = "press",
            g = "hold",
            m = "select",
            _ = "start",
            T = "move",
            y = "end",
            x = "cancel",
            M = "tap",
            w = "release",
            E = "gesturestart",
            k = "gesturechange",
            D = "gestureend",
            C = "gesturetap",
            b = {
            	api: 0,
            	touch: 0,
            	mouse: 9,
            	pointer: 9
            },
            A = !s.touch || s.mouseAndTouchPresent,
            I = a.extend({
            	init: function (e, t)
            	{
            		var n = this;
            		n.axis = e, n._updateLocationData(t), n.startLocation = n.location, n.velocity = n.delta = 0, n.timeStamp = u()
            	},
            	move: function (e)
            	{
            		var t = this,
                        n = e["page" + t.axis],
                        i = u(),
                        o = i - t.timeStamp || 1;
            		!n && p || (t.delta = n - t.location, t._updateLocationData(e), t.initialDelta = n - t.startLocation, t.velocity = t.delta / o, t.timeStamp = i)
            	},
            	_updateLocationData: function (e)
            	{
            		var t = this,
                        n = t.axis;
            		t.location = e["page" + n], t.client = e["client" + n], t.screen = e["screen" + n]
            	}
            }),
            S = a.extend({
            	init: function (e, t, n)
            	{
            		h(this, {
            			x: new I("X", n.location),
            			y: new I("Y", n.location),
            			type: n.type,
            			useClickAsTap: e.useClickAsTap,
            			threshold: e.threshold || b[n.type],
            			userEvents: e,
            			target: t,
            			currentTarget: n.currentTarget,
            			initialTouch: n.target,
            			id: n.id,
            			pressEvent: n,
            			_moved: !1,
            			_finished: !1
            		})
            	},
            	press: function ()
            	{
            		this._holdTimeout = setTimeout(e.proxy(this, "_hold"), this.userEvents.minHold), this._trigger(v, this.pressEvent)
            	},
            	_hold: function ()
            	{
            		this._trigger(g, this.pressEvent)
            	},
            	move: function (e)
            	{
            		var t = this;
            		if (!t._finished) {
            			if (t.x.move(e.location), t.y.move(e.location), !t._moved) {
            				if (t._withinIgnoreThreshold()) return;
            				if (P.current && P.current !== t.userEvents) return t.dispose();
            				t._start(e)
            			}
            			t._finished || t._trigger(T, e)
            		}
            	},
            	end: function (e)
            	{
            		this.endTime = u(), this._finished || (this._finished = !0, this._trigger(w, e), this._moved ? this._trigger(y, e) : this.useClickAsTap || this._trigger(M, e), clearTimeout(this._holdTimeout), this.dispose())
            	},
            	dispose: function ()
            	{
            		var t = this.userEvents,
                        n = t.touches;
            		this._finished = !0, this.pressEvent = null, clearTimeout(this._holdTimeout), n.splice(e.inArray(this, n), 1)
            	},
            	skip: function ()
            	{
            		this.dispose()
            	},
            	cancel: function ()
            	{
            		this.dispose()
            	},
            	isMoved: function ()
            	{
            		return this._moved
            	},
            	_start: function (e)
            	{
            		clearTimeout(this._holdTimeout), this.startTime = u(), this._moved = !0, this._trigger(_, e)
            	},
            	_trigger: function (e, t)
            	{
            		var n = this,
                        i = t.event,
                        o = {
                        	touch: n,
                        	x: n.x,
                        	y: n.y,
                        	target: n.target,
                        	event: i
                        };
            		n.userEvents.notify(e, o) && i.preventDefault()
            	},
            	_withinIgnoreThreshold: function ()
            	{
            		var e = this.x.initialDelta,
                        t = this.y.initialDelta;
            		return Math.sqrt(e * e + t * t) <= this.threshold
            	}
            }),
            P = c.extend({
            	init: function (t, n)
            	{
            		var i, a, u, l = this,
                        p = r.guid();
            		n = n || {}, i = l.filter = n.filter, l.threshold = n.threshold || f, l.minHold = n.minHold || d, l.touches = [], l._maxTouches = n.multiTouch ? 2 : 1, l.allowSelection = n.allowSelection, l.captureUpIfMoved = n.captureUpIfMoved, l.useClickAsTap = !n.fastTap && !s.delayedClick(), l.eventNS = p, t = e(t).handler(l), c.fn.init.call(l), h(l, {
            			element: t,
            			surface: e(n.global && A ? t[0].ownerDocument.documentElement : n.surface || t),
            			stopPropagation: n.stopPropagation,
            			pressed: !1
            		}), l.surface.handler(l).on(r.applyEventMap("move", p), "_move").on(r.applyEventMap("up cancel", p), "_end"), t.on(r.applyEventMap("down", p), i, "_start"), l.useClickAsTap && t.on(r.applyEventMap("click", p), i, "_click"), (s.pointers || s.msPointers) && (s.browser.version < 11 ? t.css("-ms-touch-action", "pinch-zoom double-tap-zoom") : t.css("touch-action", n.touchAction || "none")), n.preventDragEvent && t.on(r.applyEventMap("dragstart", p), r.preventDefault), t.on(r.applyEventMap("mousedown", p), i, {
            			root: t
            		}, "_select"), l.captureUpIfMoved && s.eventCapture && (a = l.surface[0], u = e.proxy(l.preventIfMoving, l), o(function (e)
            		{
            			a.addEventListener(e, u, !0)
            		})), l.bind([v, g, M, _, T, y, w, x, E, k, D, C, m], n)
            	},
            	preventIfMoving: function (e)
            	{
            		this._isMoved() && e.preventDefault()
            	},
            	destroy: function ()
            	{
            		var e, t = this;
            		t._destroyed || (t._destroyed = !0, t.captureUpIfMoved && s.eventCapture && (e = t.surface[0], o(function (n)
            		{
            			e.removeEventListener(n, t.preventIfMoving)
            		})), t.element.kendoDestroy(t.eventNS), t.surface.kendoDestroy(t.eventNS), t.element.removeData("handler"), t.surface.removeData("handler"), t._disposeAll(), t.unbind(), delete t.surface, delete t.element, delete t.currentTarget)
            	},
            	capture: function ()
            	{
            		P.current = this
            	},
            	cancel: function ()
            	{
            		this._disposeAll(), this.trigger(x)
            	},
            	notify: function (e, t)
            	{
            		var i = this,
                        o = i.touches;
            		if (this._isMultiTouch()) {
            			switch (e) {
            				case T:
            					e = k;
            					break;
            				case y:
            					e = D;
            					break;
            				case M:
            					e = C
            			}
            			h(t, {
            				touches: o
            			}, n(o[0], o[1]))
            		}
            		return this.trigger(e, h(t, {
            			type: e
            		}))
            	},
            	press: function (e, t, n)
            	{
            		this._apiCall("_start", e, t, n)
            	},
            	move: function (e, t)
            	{
            		this._apiCall("_move", e, t)
            	},
            	end: function (e, t)
            	{
            		this._apiCall("_end", e, t)
            	},
            	_isMultiTouch: function ()
            	{
            		return this.touches.length > 1
            	},
            	_maxTouchesReached: function ()
            	{
            		return this.touches.length >= this._maxTouches
            	},
            	_disposeAll: function ()
            	{
            		for (var e = this.touches; e.length > 0;) e.pop().dispose()
            	},
            	_isMoved: function ()
            	{
            		return e.grep(this.touches, function (e)
            		{
            			return e.isMoved()
            		}).length
            	},
            	_select: function (e)
            	{
            		this.allowSelection && !this.trigger(m, {
            			event: e
            		}) || e.preventDefault()
            	},
            	_start: function (t)
            	{
            		var n, o, r = this,
                        s = 0,
                        a = r.filter,
                        c = i(t),
                        u = c.length,
                        h = t.which;
            		if (!(h && h > 1 || r._maxTouchesReached()))
            			for (P.current = null, r.currentTarget = t.currentTarget, r.stopPropagation && t.stopPropagation() ; s < u && !r._maxTouchesReached() ; s++) o = c[s], n = a ? e(o.currentTarget) : r.element, n.length && (o = new S(r, n, o), r.touches.push(o), o.press(), r._isMultiTouch() && r.notify("gesturestart", {}))
            	},
            	_move: function (e)
            	{
            		this._eachTouch("move", e)
            	},
            	_end: function (e)
            	{
            		this._eachTouch("end", e)
            	},
            	_click: function (t)
            	{
            		var n = {
            			touch: {
            				initialTouch: t.target,
            				target: e(t.currentTarget),
            				endTime: u(),
            				x: {
            					location: t.pageX,
            					client: t.clientX
            				},
            				y: {
            					location: t.pageY,
            					client: t.clientY
            				}
            			},
            			x: t.pageX,
            			y: t.pageY,
            			target: e(t.currentTarget),
            			event: t,
            			type: "tap"
            		};
            		this.trigger("tap", n) && t.preventDefault()
            	},
            	_eachTouch: function (e, t)
            	{
            		var n, o, r, s, a = this,
                        c = {},
                        u = i(t),
                        h = a.touches;
            		for (n = 0; n < h.length; n++) o = h[n], c[o.id] = o;
            		for (n = 0; n < u.length; n++) r = u[n], s = c[r.id], s && s[e](r)
            	},
            	_apiCall: function (t, n, i, o)
            	{
            		this[t]({
            			api: !0,
            			pageX: n,
            			pageY: i,
            			clientX: n,
            			clientY: i,
            			target: e(o || this.element)[0],
            			stopPropagation: e.noop,
            			preventDefault: e.noop
            		})
            	}
            });
		P.defaultThreshold = function (e)
		{
			f = e
		}, P.minHold = function (e)
		{
			d = e
		}, r.getTouches = i, r.touchDelta = n, r.UserEvents = P
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
});;
! function (e, define)
{
	define("kendo.selectable.min", ["kendo.core.min", "kendo.userevents.min"], e)
}(function ()
{
	return function (e, t)
	{
		function n(e, t)
		{
			if (!e.is(":visible")) return !1;
			var n = s.getOffset(e),
                i = t.left + t.width,
                l = t.top + t.height;
			return n.right = n.left + s._outerWidth(e), n.bottom = n.top + s._outerHeight(e), !(n.left > i || n.right < t.left || n.top > l || n.bottom < t.top)
		}
		var i, s = window.kendo,
            l = s.ui.Widget,
            a = e.proxy,
            o = Math.abs,
            r = "aria-selected",
            c = "k-state-selected",
            u = "k-state-selecting",
            d = "k-selectable",
            f = "change",
            v = ".kendoSelectable",
            m = "k-state-unselecting",
            h = "input,a,textarea,.k-multiselect-wrap,select,button,.k-button>span,.k-button>img,span.k-icon.k-i-expand,span.k-icon.k-i-collapse",
            p = s.support.browser.msie,
            _ = !1;
		! function (e)
		{
			! function ()
			{
				e('<div class="parent"><span /></div>').on("click", ">*", function ()
				{
					_ = !0
				}).find("span").click().end().off()
			}()
		}(e), i = l.extend({
			init: function (t, n)
			{
				var i, o = this;
				l.fn.init.call(o, t, n), o._marquee = e("<div class='k-marquee'><div class='k-marquee-color'></div></div>"), o._lastActive = null, o.element.addClass(d), o.relatedTarget = o.options.relatedTarget, i = o.options.multiple, this.options.aria && i && o.element.attr("aria-multiselectable", !0), o.userEvents = new s.UserEvents(o.element, {
					global: !0,
					allowSelection: !0,
					filter: (_ ? "" : "." + d + " ") + o.options.filter,
					tap: a(o._tap, o)
				}), i && o.userEvents.bind("start", a(o._start, o)).bind("move", a(o._move, o)).bind("end", a(o._end, o)).bind("select", a(o._select, o))
			},
			events: [f],
			options: {
				name: "Selectable",
				filter: ">*",
				multiple: !1,
				relatedTarget: e.noop
			},
			_isElement: function (e)
			{
				var t, n = this.element,
                    i = n.length,
                    s = !1;
				for (e = e[0], t = 0; t < i; t++)
					if (n[t] === e) {
						s = !0;
						break
					}
				return s
			},
			_tap: function (t)
			{
				var n, i = e(t.target),
                    s = this,
                    l = t.event.ctrlKey || t.event.metaKey,
                    a = s.options.multiple,
                    o = a && t.event.shiftKey,
                    r = t.event.which,
                    u = t.event.button;
				!s._isElement(i.closest("." + d)) || r && 3 == r || u && 2 == u || this._allowSelection(t.event.target) && (n = i.hasClass(c), a && l || s.clear(), i = i.add(s.relatedTarget(i)), o ? s.selectRange(s._firstSelectee(), i) : (n && l ? (s._unselect(i), s._notify(f)) : s.value(i), s._lastActive = s._downTarget = i))
			},
			_start: function (n)
			{
				var i, s = this,
                    l = e(n.target),
                    a = l.hasClass(c),
                    o = n.event.ctrlKey || n.event.metaKey;
				if (this._allowSelection(n.event.target)) {
					if (s._downTarget = l, !s._isElement(l.closest("." + d))) return s.userEvents.cancel(), t;
					s.options.useAllItems ? s._items = s.element.find(s.options.filter) : (i = l.closest(s.element), s._items = i.find(s.options.filter)), n.sender.capture(), s._marquee.appendTo(document.body).css({
						left: n.x.client + 1,
						top: n.y.client + 1,
						width: 0,
						height: 0
					}), o || s.clear(), l = l.add(s.relatedTarget(l)), a && (s._selectElement(l, !0), o && l.addClass(m))
				}
			},
			_move: function (e)
			{
				var t = this,
                    n = {
                    	left: e.x.startLocation > e.x.location ? e.x.location : e.x.startLocation,
                    	top: e.y.startLocation > e.y.location ? e.y.location : e.y.startLocation,
                    	width: o(e.x.initialDelta),
                    	height: o(e.y.initialDelta)
                    };
				t._marquee.css(n), t._invalidateSelectables(n, e.event.ctrlKey || e.event.metaKey), e.preventDefault()
			},
			_end: function ()
			{
				var e, t = this;
				t._marquee.remove(), t._unselect(t.element.find(t.options.filter + "." + m)).removeClass(m), e = t.element.find(t.options.filter + "." + u), e = e.add(t.relatedTarget(e)), t.value(e), t._lastActive = t._downTarget, t._items = null
			},
			_invalidateSelectables: function (e, t)
			{
				var i, s, l, a, o = this._downTarget[0],
                    r = this._items;
				for (i = 0, s = r.length; i < s; i++) a = r.eq(i), l = a.add(this.relatedTarget(a)), n(a, e) ? a.hasClass(c) ? t && o !== a[0] && l.removeClass(c).addClass(m) : a.hasClass(u) || a.hasClass(m) || l.addClass(u) : a.hasClass(u) ? l.removeClass(u) : t && a.hasClass(m) && l.removeClass(m).addClass(c)
			},
			value: function (e)
			{
				var n = this,
                    i = a(n._selectElement, n);
				return e ? (e.each(function ()
				{
					i(this)
				}), n._notify(f), t) : n.element.find(n.options.filter + "." + c)
			},
			_firstSelectee: function ()
			{
				var e, t = this;
				return null !== t._lastActive ? t._lastActive : (e = t.value(), e.length > 0 ? e[0] : t.element.find(t.options.filter)[0])
			},
			_selectElement: function (t, n)
			{
				var i = e(t),
                    s = !n && this._notify("select", {
                    	element: t
                    });
				i.removeClass(u), s || (i.addClass(c), this.options.aria && i.attr(r, !0))
			},
			_notify: function (e, t)
			{
				return t = t || {}, this.trigger(e, t)
			},
			_unselect: function (e)
			{
				return e.removeClass(c), this.options.aria && e.attr(r, !1), e
			},
			_select: function (t)
			{
				this._allowSelection(t.event.target) && (!p || p && !e(s._activeElement()).is(h)) && t.preventDefault()
			},
			_allowSelection: function (t)
			{
				return !e(t).is(h) || (this.userEvents.cancel(), this._downTarget = null, !1)
			},
			resetTouchEvents: function ()
			{
				this.userEvents.cancel()
			},
			clear: function ()
			{
				var e = this.element.find(this.options.filter + "." + c);
				this._unselect(e)
			},
			selectRange: function (t, n)
			{
				var i, s, l, a = this;
				for (a.clear(), a.element.length > 1 && (l = a.options.continuousItems()), l && l.length || (l = a.element.find(a.options.filter)), t = e.inArray(e(t)[0], l), n = e.inArray(e(n)[0], l), t > n && (s = t, t = n, n = s), a.options.useAllItems || (n += a.element.length - 1), i = t; i <= n; i++) a._selectElement(l[i]);
				a._notify(f)
			},
			destroy: function ()
			{
				var e = this;
				l.fn.destroy.call(e), e.element.off(v), e.userEvents.destroy(), e._marquee = e._lastActive = e.element = e.userEvents = null
			}
		}), i.parseOptions = function (e)
		{
			var t = "string" == typeof e && e.toLowerCase();
			return {
				multiple: t && t.indexOf("multiple") > -1,
				cell: t && t.indexOf("cell") > -1
			}
		}, s.ui.plugin(i)
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
});;
! function (e, define)
{
	define("kendo.data.min", ["kendo.core.min", "kendo.data.odata.min", "kendo.data.xml.min"], e)
}(function ()
{
	return function (e, t)
	{
		function r(e, t, r, n)
		{
			return function (i)
			{
				var a, s = {};
				for (a in i) s[a] = i[a];
				s.field = n ? r + "." + i.field : r, t == Oe && e._notifyChange && e._notifyChange(s), e.trigger(t, s)
			}
		}

		function n(t, r)
		{
			if (t === r) return !0;
			var i, a = e.type(t),
                s = e.type(r);
			if (a !== s) return !1;
			if ("date" === a) return t.getTime() === r.getTime();
			if ("object" !== a && "array" !== a) return !1;
			for (i in t)
				if (!n(t[i], r[i])) return !1;
			return !0
		}

		function i(e, t)
		{
			var r, n;
			for (n in e) {
				if (r = e[n], he(r) && r.field && r.field === t) return r;
				if (r === t) return r
			}
			return null
		}

		function a(e)
		{
			this.data = e || []
		}

		function s(e, r)
		{
			if (e) {
				var n = typeof e === we ? {
					field: e,
					dir: r
				} : e,
                    i = ce(n) ? n : n !== t ? [n] : [];
				return ge(i, function (e)
				{
					return !!e.dir
				})
			}
		}

		function o(e)
		{
			var t, r, n, i, a = e.filters;
			if (a)
				for (t = 0, r = a.length; t < r; t++) n = a[t], i = n.operator, i && typeof i === we && (n.operator = X[i.toLowerCase()] || i), o(n)
		}

		function u(e)
		{
			if (e && !fe(e)) return !ce(e) && e.filters || (e = {
				logic: "and",
				filters: ce(e) ? e : [e]
			}), o(e), e
		}

		function l(e, t)
		{
			return !e.logic && !t.logic && (e.field === t.field && e.value === t.value && e.operator === t.operator)
		}

		function d(e)
		{
			return e = e || {}, fe(e) ? {
				logic: "and",
				filters: []
			} : u(e)
		}

		function h(e, t)
		{
			return t.logic || e.field > t.field ? 1 : e.field < t.field ? -1 : 0
		}

		function f(e, t)
		{
			var r, n, i, a, s;
			if (e = d(e), t = d(t), e.logic !== t.logic) return !1;
			if (i = (e.filters || []).slice(), a = (t.filters || []).slice(), i.length !== a.length) return !1;
			for (i = i.sort(h), a = a.sort(h), s = 0; s < i.length; s++)
				if (r = i[s], n = a[s], r.logic && n.logic) {
					if (!f(r, n)) return !1
				} else if (!l(r, n)) return !1;
			return !0
		}

		function c(e)
		{
			return ce(e) ? e : [e]
		}

		function g(e, r)
		{
			var n = typeof e === we ? {
				field: e,
				dir: r
			} : e,
                i = ce(n) ? n : n !== t ? [n] : [];
			return B(i, function (e)
			{
				return {
					field: e.field,
					dir: e.dir || "asc",
					aggregates: e.aggregates
				}
			})
		}

		function p(e, t)
		{
			return e && e.getTime && t && t.getTime ? e.getTime() === t.getTime() : e === t
		}

		function _(e, t, r, n, i, a)
		{
			var s, o, u, l, d;
			for (t = t || [], l = t.length, s = 0; s < l; s++) o = t[s], u = o.aggregate, d = o.field, e[d] = e[d] || {}, a[d] = a[d] || {}, a[d][u] = a[d][u] || {}, e[d][u] = Y[u.toLowerCase()](e[d][u], r, me.accessor(d), n, i, a[d][u])
		}

		function v(e)
		{
			return "number" == typeof e && !isNaN(e)
		}

		function m(e)
		{
			return e && e.getTime
		}

		function y(e)
		{
			var t, r = e.length,
                n = Array(r);
			for (t = 0; t < r; t++) n[t] = e[t].toJSON();
			return n
		}

		function S(e, t, r, n, i)
		{
			var a, s, o, u, l, d = {};
			for (u = 0, l = e.length; u < l; u++) {
				a = e[u];
				for (s in t) o = i[s], o && o !== s && (d[o] || (d[o] = me.setter(o)), d[o](a, t[s](a)), delete a[s])
			}
		}

		function b(e, t, r, n, i)
		{
			var a, s, o, u, l;
			for (u = 0, l = e.length; u < l; u++) {
				a = e[u];
				debugger;
				for (s in t) a[s] = r._parse(s, t[s](a)), o = i[s], o && o !== s && delete a[o]
			}
		}

		function w(e, t, r, n, i)
		{
			var a, s, o, u;
			for (s = 0, u = e.length; s < u; s++) a = e[s], o = n[a.field], o && o != a.field && (a.field = o), a.value = r._parse(a.field, a.value), a.hasSubgroups ? w(a.items, t, r, n, i) : b(a.items, t, r, n, i)
		}

		function k(e, t, r, n, i, a)
		{
			return function (s)
			{
				return s = e(s), s && !fe(n) && ("[object Array]" === We.call(s) || s instanceof Ye || (s = [s]), r(s, n, new t, i, a)), s || []
			}
		}

		function x(e, t, r, n)
		{
			for (var i, a, s, o = 0; t.length && n && (i = t[o], a = i.items, s = a.length, e && e.field === i.field && e.value === i.value ? (e.hasSubgroups && e.items.length ? x(e.items[e.items.length - 1], i.items, r, n) : (a = a.slice(r, r + n), e.items = e.items.concat(a)), t.splice(o--, 1)) : i.hasSubgroups && a.length ? (x(i, a, r, n), i.items.length || t.splice(o--, 1)) : (a = a.slice(r, r + n), i.items = a, i.items.length || t.splice(o--, 1)), 0 === a.length ? r -= s : (r = 0, n -= a.length), !(++o >= t.length)) ;);
			o < t.length && t.splice(o, t.length - o)
		}

		function q(e)
		{
			var t, r, n, i, a, s = [];
			for (t = 0, r = e.length; t < r; t++)
				if (a = e.at(t), a.hasSubgroups) s = s.concat(q(a.items));
				else
					for (n = a.items, i = 0; i < n.length; i++) s.push(n.at(i));
			return s
		}

		function D(e, t)
		{
			var r, n, i;
			if (t)
				for (r = 0, n = e.length; r < n; r++) i = e.at(r), i.hasSubgroups ? D(i.items, t) : i.items = new U(i.items, t)
		}

		function C(e, t)
		{
			for (var r = 0, n = e.length; r < n; r++)
				if (e[r].hasSubgroups) {
					if (C(e[r].items, t)) return !0
				} else if (t(e[r].items, e[r])) return !0
		}

		function O(e, t, r, n)
		{
			for (var i = 0; i < e.length && e[i].data !== t && !z(e[i].data, r, n) ; i++);
		}

		function z(e, t, r)
		{
			for (var n = 0, i = e.length; n < i; n++) {
				if (e[n] && e[n].hasSubgroups) return z(e[n].items, t, r);
				if (e[n] === t || e[n] === r) return e[n] = r, !0
			}
		}

		function R(e, r, n, i, a)
		{
			var s, o, u, l;
			for (s = 0, o = e.length; s < o; s++)
				if (u = e[s], u && !(u instanceof i))
					if (u.hasSubgroups === t || a) {
						for (l = 0; l < r.length; l++)
							if (r[l] === u) {
								e[s] = r.at(l), O(n, r, u, e[s]);
								break
							}
					} else R(u.items, r, n, i, a)
		}

		function P(e, t)
		{
			var r, n, i;
			for (r = 0, n = e.length; r < n; r++)
				if (i = e.at(r), i.uid == t.uid) return e.splice(r, 1), i
		}

		function T(e, t)
		{
			return t ? A(e, function (e)
			{
				return e.uid && e.uid == t.uid || e[t.idField] === t.id && t.id !== t._defaultId
			}) : -1
		}

		function F(e, t)
		{
			return t ? A(e, function (e)
			{
				return e.uid == t.uid
			}) : -1
		}

		function A(e, t)
		{
			var r, n;
			for (r = 0, n = e.length; r < n; r++)
				if (t(e[r])) return r;
			return -1
		}

		function I(e, t)
		{
			var r, n;
			return e && !fe(e) ? (r = e[t], n = he(r) ? r.from || r.field || t : e[t] || t, ye(n) ? t : n) : t
		}

		function N(e, t)
		{
			var r, n, i, a = {};
			for (i in e) "filters" !== i && (a[i] = e[i]);
			if (e.filters)
				for (a.filters = [], r = 0, n = e.filters.length; r < n; r++) a.filters[r] = N(e.filters[r], t);
			else a.field = I(t.fields, a.field);
			return a
		}

		function M(e, t)
		{
			var r, n, i, a, s, o = [];
			for (r = 0, n = e.length; r < n; r++) {
				i = {}, a = e[r];
				for (s in a) i[s] = a[s];
				i.field = I(t.fields, i.field), i.aggregates && ce(i.aggregates) && (i.aggregates = M(i.aggregates, t)), o.push(i)
			}
			return o
		}

		function j(t, r)
		{
			var n, i, a, s, o, u, l, d, h, f;
			for (t = e(t)[0], n = t.options, i = r[0], a = r[1], s = [], o = 0, u = n.length; o < u; o++) h = {}, d = n[o], l = d.parentNode, l === t && (l = null), d.disabled || l && l.disabled || (l && (h.optgroup = l.label), h[i.field] = d.text, f = d.attributes.value, f = f && f.specified ? d.value : d.text, h[a.field] = f, s.push(h));
			return s
		}

		function L(t, r)
		{
			var n, i, a, s, o, u, l, d = e(t)[0].tBodies[0],
                h = d ? d.rows : [],
                f = r.length,
                c = [];
			for (n = 0, i = h.length; n < i; n++) {
				for (o = {}, l = !0, s = h[n].cells, a = 0; a < f; a++) u = s[a], "th" !== u.nodeName.toLowerCase() && (l = !1, o[r[a].field] = u.innerHTML);
				l || c.push(o)
			}
			return c
		}

		function G(e)
		{
			return function ()
			{
				var t = this._data,
                    r = ne.fn[e].apply(this, Je.call(arguments));
				return this._data != t && this._attachBubbleHandlers(), r
			}
		}

		function E(t, r)
		{
			function n(e, t)
			{
				return e.filter(t).add(e.find(t))
			}
			var i, a, s, o, u, l, d, h, f = e(t).children(),
                c = [],
                g = r[0].field,
                p = r[1] && r[1].field,
                _ = r[2] && r[2].field,
                v = r[3] && r[3].field;
			for (i = 0, a = f.length; i < a; i++) s = {
				_loaded: !0
			}, o = f.eq(i), l = o[0].firstChild, h = o.children(), t = h.filter("ul"), h = h.filter(":not(ul)"), u = o.attr("data-id"), u && (s.id = u), l && (s[g] = 3 == l.nodeType ? l.nodeValue : h.text()), p && (s[p] = n(h, "a").attr("href")), v && (s[v] = n(h, "img").attr("src")), _ && (d = n(h, ".k-sprite").prop("className"), s[_] = d && e.trim(d.replace("k-sprite", ""))), t.length && (s.items = E(t.eq(0), r)), "true" == o.attr("data-hasChildren") && (s.hasChildren = !0), c.push(s);
			return c
		}
		var B, U, H, J, V, W, Q, K, $, X, Y, Z, ee, te, re, ne, ie, ae, se, oe, ue, le = e.extend,
            de = e.proxy,
            he = e.isPlainObject,
            fe = e.isEmptyObject,
            ce = e.isArray,
            ge = e.grep,
            pe = e.ajax,
            _e = e.each,
            ve = e.noop,
            me = window.kendo,
            ye = me.isFunction,
            Se = me.Observable,
            be = me.Class,
            we = "string",
            ke = "function",
            xe = "create",
            qe = "read",
            De = "update",
            Ce = "destroy",
            Oe = "change",
            ze = "sync",
            Re = "get",
            Pe = "error",
            Te = "requestStart",
            Fe = "progress",
            Ae = "requestEnd",
            Ie = [xe, qe, De, Ce],
            Ne = function (e)
            {
            	return e
            },
            Me = me.getter,
            je = me.stringify,
            Le = Math,
            Ge = [].push,
            Ee = [].join,
            Be = [].pop,
            Ue = [].splice,
            He = [].shift,
            Je = [].slice,
            Ve = [].unshift,
            We = {}.toString,
            Qe = me.support.stableSort,
            Ke = /^\/Date\((.*?)\)\/$/,
            $e = /(\r+|\n+)/g,
            Xe = /(?=['\\])/g,
            Ye = Se.extend({
            	init: function (e, t)
            	{
            		var r = this;
            		r.type = t || H, Se.fn.init.call(r), r.length = e.length, r.wrapAll(e, r)
            	},
            	at: function (e)
            	{
            		return this[e]
            	},
            	toJSON: function ()
            	{
            		var e, t, r = this.length,
                        n = Array(r);
            		for (e = 0; e < r; e++) t = this[e], t instanceof H && (t = t.toJSON()), n[e] = t;
            		return n
            	},
            	parent: ve,
            	wrapAll: function (e, t)
            	{
            		var r, n, i = this,
                        a = function ()
                        {
                        	return i
                        };
            		for (t = t || [], r = 0, n = e.length; r < n; r++) t[r] = i.wrap(e[r], a);
            		return t
            	},
            	wrap: function (e, t)
            	{
            		var r, n = this;
            		return null !== e && "[object Object]" === We.call(e) && (r = e instanceof n.type || e instanceof W, r || (e = e instanceof H ? e.toJSON() : e, e = new n.type(e)), e.parent = t, e.bind(Oe, function (e)
            		{
            			n.trigger(Oe, {
            				field: e.field,
            				node: e.node,
            				index: e.index,
            				items: e.items || [this],
            				action: e.node ? e.action || "itemloaded" : "itemchange"
            			})
            		})), e
            	},
            	push: function ()
            	{
            		var e, t = this.length,
                        r = this.wrapAll(arguments);
            		return e = Ge.apply(this, r), this.trigger(Oe, {
            			action: "add",
            			index: t,
            			items: r
            		}), e
            	},
            	slice: Je,
            	sort: [].sort,
            	join: Ee,
            	pop: function ()
            	{
            		var e = this.length,
                        t = Be.apply(this);
            		return e && this.trigger(Oe, {
            			action: "remove",
            			index: e - 1,
            			items: [t]
            		}), t
            	},
            	splice: function (e, t, r)
            	{
            		var n, i, a, s = this.wrapAll(Je.call(arguments, 2));
            		if (n = Ue.apply(this, [e, t].concat(s)), n.length)
            			for (this.trigger(Oe, {
            				action: "remove",
            				index: e,
            				items: n
            			}), i = 0, a = n.length; i < a; i++) n[i] && n[i].children && n[i].unbind(Oe);
            		return r && this.trigger(Oe, {
            			action: "add",
            			index: e,
            			items: s
            		}), n
            	},
            	shift: function ()
            	{
            		var e = this.length,
                        t = He.apply(this);
            		return e && this.trigger(Oe, {
            			action: "remove",
            			index: 0,
            			items: [t]
            		}), t
            	},
            	unshift: function ()
            	{
            		var e, t = this.wrapAll(arguments);
            		return e = Ve.apply(this, t), this.trigger(Oe, {
            			action: "add",
            			index: 0,
            			items: t
            		}), e
            	},
            	indexOf: function (e)
            	{
            		var t, r, n = this;
            		for (t = 0, r = n.length; t < r; t++)
            			if (n[t] === e) return t;
            		return -1
            	},
            	forEach: function (e)
            	{
            		for (var t = 0, r = this.length; t < r; t++) e(this[t], t, this)
            	},
            	map: function (e)
            	{
            		for (var t = 0, r = [], n = this.length; t < n; t++) r[t] = e(this[t], t, this);
            		return r
            	},
            	reduce: function (e)
            	{
            		var t, r = 0,
                        n = this.length;
            		for (2 == arguments.length ? t = arguments[1] : r < n && (t = this[r++]) ; r < n; r++) t = e(t, this[r], r, this);
            		return t
            	},
            	reduceRight: function (e)
            	{
            		var t, r = this.length - 1;
            		for (2 == arguments.length ? t = arguments[1] : r > 0 && (t = this[r--]) ; r >= 0; r--) t = e(t, this[r], r, this);
            		return t
            	},
            	filter: function (e)
            	{
            		for (var t, r = 0, n = [], i = this.length; r < i; r++) t = this[r], e(t, r, this) && (n[n.length] = t);
            		return n
            	},
            	find: function (e)
            	{
            		for (var t, r = 0, n = this.length; r < n; r++)
            			if (t = this[r], e(t, r, this)) return t
            	},
            	every: function (e)
            	{
            		for (var t, r = 0, n = this.length; r < n; r++)
            			if (t = this[r], !e(t, r, this)) return !1;
            		return !0
            	},
            	some: function (e)
            	{
            		for (var t, r = 0, n = this.length; r < n; r++)
            			if (t = this[r], e(t, r, this)) return !0;
            		return !1
            	},
            	remove: function (e)
            	{
            		var t = this.indexOf(e);
            		t !== -1 && this.splice(t, 1)
            	},
            	empty: function ()
            	{
            		this.splice(0, this.length)
            	}
            });
		"undefined" != typeof Symbol && Symbol.iterator && !Ye.prototype[Symbol.iterator] && (Ye.prototype[Symbol.iterator] = [][Symbol.iterator]), U = Ye.extend({
			init: function (e, t)
			{
				Se.fn.init.call(this), this.type = t || H;
				for (var r = 0; r < e.length; r++) this[r] = e[r];
				this.length = r, this._parent = de(function ()
				{
					return this
				}, this)
			},
			at: function (e)
			{
				var t = this[e];
				return t instanceof this.type ? t.parent = this._parent : t = this[e] = this.wrap(t, this._parent), t
			}
		}), H = Se.extend({
			init: function (e)
			{
				var t, r, n = this,
                    i = function ()
                    {
                    	return n
                    };
				Se.fn.init.call(this), this._handlers = {};
				for (r in e) t = e[r], "object" == typeof t && t && !t.getTime && "_" != r.charAt(0) && (t = n.wrap(t, r, i)), n[r] = t;
				n.uid = me.guid()
			},
			shouldSerialize: function (e)
			{
				return this.hasOwnProperty(e) && "_handlers" !== e && "_events" !== e && typeof this[e] !== ke && "uid" !== e
			},
			forEach: function (e)
			{
				for (var t in this) this.shouldSerialize(t) && e(this[t], t)
			},
			toJSON: function ()
			{
				var e, t, r = {};
				for (t in this) this.shouldSerialize(t) && (e = this[t], (e instanceof H || e instanceof Ye) && (e = e.toJSON()), r[t] = e);
				return r
			},
			get: function (e)
			{
				var t, r = this;
				return r.trigger(Re, {
					field: e
				}), t = "this" === e ? r : me.getter(e, !0)(r)
			},
			_set: function (e, t)
			{
				var r, n, i, a = this,
                    s = e.indexOf(".") >= 0;
				if (s)
					for (r = e.split("."), n = ""; r.length > 1;) {
						if (n += r.shift(), i = me.getter(n, !0)(a), i instanceof H) return i.set(r.join("."), t), s;
						n += "."
					}
				return me.setter(e)(a, t), s
			},
			set: function (e, t)
			{
				var r = this,
                    n = !1,
                    i = e.indexOf(".") >= 0,
                    a = me.getter(e, !0)(r);
				return a !== t && (a instanceof Se && this._handlers[e] && (this._handlers[e].get && a.unbind(Re, this._handlers[e].get), a.unbind(Oe, this._handlers[e].change)), n = r.trigger("set", {
					field: e,
					value: t
				}), n || (i || (t = r.wrap(t, e, function ()
				{
					return r
				})), (!r._set(e, t) || e.indexOf("(") >= 0 || e.indexOf("[") >= 0) && r.trigger(Oe, {
					field: e
				}))), n
			},
			parent: ve,
			wrap: function (e, t, n)
			{
				var i, a, s, o, u = this,
                    l = We.call(e);
				return null == e || "[object Object]" !== l && "[object Array]" !== l || (s = e instanceof Ye, o = e instanceof ne, "[object Object]" !== l || o || s ? ("[object Array]" === l || s || o) && (s || o || (e = new Ye(e)), a = r(u, Oe, t, !1), e.bind(Oe, a), u._handlers[t] = {
					change: a
				}) : (e instanceof H || (e = new H(e)), i = r(u, Re, t, !0), e.bind(Re, i), a = r(u, Oe, t, !0), e.bind(Oe, a), u._handlers[t] = {
					get: i,
					change: a
				}), e.parent = n), e
			}
		}), J = {
			number: function (e)
			{
				return me.parseFloat(e)
			},
			date: function (e)
			{
				return me.parseDate(e)
			},
			"boolean": function (e)
			{
				return typeof e === we ? "true" === e.toLowerCase() : null != e ? !!e : e
			},
			string: function (e)
			{
				return null != e ? e + "" : e
			},
			"default": function (e)
			{
				return e
			}
		}, V = {
			string: "",
			number: 0,
			date: new Date,
			"boolean": !1,
			"default": ""
		}, W = H.extend({
			init: function (r)
			{
				var n, i, a = this;
				if ((!r || e.isEmptyObject(r)) && (r = e.extend({}, a.defaults, r), a._initializers))
					for (n = 0; n < a._initializers.length; n++) i = a._initializers[n], r[i] = a.defaults[i]();
				H.fn.init.call(a, r), a.dirty = !1, a.idField && (a.id = a.get(a.idField), a.id === t && (a.id = a._defaultId))
			},
			shouldSerialize: function (e)
			{
				return H.fn.shouldSerialize.call(this, e) && "uid" !== e && !("id" !== this.idField && "id" === e) && "dirty" !== e && "_accessors" !== e
			},
			_parse: function (e, t)
			{
				var r, n = this,
                    a = e,
                    s = n.fields || {};
				return e = s[e], e || (e = i(s, a)), e && (r = e.parse, !r && e.type && (r = J[e.type.toLowerCase()])), r ? r(t) : t
			},
			_notifyChange: function (e)
			{
				var t = e.action;
				"add" != t && "remove" != t || (this.dirty = !0)
			},
			editable: function (e)
			{
				return e = (this.fields || {})[e], !e || e.editable !== !1
			},
			set: function (e, t, r)
			{
				var i = this,
                    a = i.dirty;
				i.editable(e) && (t = i._parse(e, t), n(t, i.get(e)) || (i.dirty = !0, H.fn.set.call(i, e, t, r) && !a && (i.dirty = a)))
			},
			accept: function (e)
			{
				var t, r, n = this,
                    i = function ()
                    {
                    	return n
                    };
				for (t in e) r = e[t], "_" != t.charAt(0) && (r = n.wrap(e[t], t, i)), n._set(t, r);
				n.idField && (n.id = n.get(n.idField)), n.dirty = !1
			},
			isNew: function ()
			{
				return this.id === this._defaultId
			}
		}), W.define = function (e, r)
		{
			r === t && (r = e, e = W);
			var n, i, a, s, o, u, l, d, h = le({
				defaults: {}
			}, r),
                f = {},
                c = h.id,
                g = [];
			if (c && (h.idField = c), h.id && delete h.id, c && (h.defaults[c] = h._defaultId = ""), "[object Array]" === We.call(h.fields)) {
				for (u = 0, l = h.fields.length; u < l; u++) a = h.fields[u], typeof a === we ? f[a] = {} : a.field && (f[a.field] = a);
				h.fields = f
			}
			for (i in h.fields) a = h.fields[i], s = a.type || "default", o = null, d = i, i = typeof a.field === we ? a.field : i, a.nullable || (o = h.defaults[d !== i ? d : i] = a.defaultValue !== t ? a.defaultValue : V[s.toLowerCase()], "function" == typeof o && g.push(i)), r.id === i && (h._defaultId = o), h.defaults[d !== i ? d : i] = o, a.parse = a.parse || J[s];
			return g.length > 0 && (h._initializers = g), n = e.extend(h), n.define = function (e)
			{
				return W.define(n, e)
			}, h.fields && (n.fields = h.fields, n.idField = h.idField), n
		}, Q = {
			selector: function (e)
			{
				return ye(e) ? e : Me(e)
			},
			compare: function (e)
			{
				var t = this.selector(e);
				return function (e, r)
				{
					return e = t(e), r = t(r), null == e && null == r ? 0 : null == e ? -1 : null == r ? 1 : e.localeCompare ? e.localeCompare(r) : e > r ? 1 : e < r ? -1 : 0
				}
			},
			create: function (e)
			{
				var t = e.compare || this.compare(e.field);
				return "desc" == e.dir ? function (e, r)
				{
					return t(r, e, !0)
				} : t
			},
			combine: function (e)
			{
				return function (t, r)
				{
					var n, i, a = e[0](t, r);
					for (n = 1, i = e.length; n < i; n++) a = a || e[n](t, r);
					return a
				}
			}
		}, K = le({}, Q, {
			asc: function (e)
			{
				var t = this.selector(e);
				return function (e, r)
				{
					var n = t(e),
                        i = t(r);
					return n && n.getTime && i && i.getTime && (n = n.getTime(), i = i.getTime()), n === i ? e.__position - r.__position : null == n ? -1 : null == i ? 1 : n.localeCompare ? n.localeCompare(i) : n > i ? 1 : -1
				}
			},
			desc: function (e)
			{
				var t = this.selector(e);
				return function (e, r)
				{
					var n = t(e),
                        i = t(r);
					return n && n.getTime && i && i.getTime && (n = n.getTime(), i = i.getTime()), n === i ? e.__position - r.__position : null == n ? 1 : null == i ? -1 : i.localeCompare ? i.localeCompare(n) : n < i ? 1 : -1
				}
			},
			create: function (e)
			{
				return this[e.dir](e.field)
			}
		}), B = function (e, t)
		{
			var r, n = e.length,
                i = Array(n);
			for (r = 0; r < n; r++) i[r] = t(e[r], r, e);
			return i
		}, $ = function ()
		{
			function e(e)
			{
				return e.replace(Xe, "\\").replace($e, "")
			}

			function t(t, r, n, i)
			{
				var a;
				return null != n && (typeof n === we && (n = e(n), a = Ke.exec(n), a ? n = new Date((+a[1])) : i ? (n = "'" + n.toLowerCase() + "'", r = "((" + r + " || '')+'').toLowerCase()") : n = "'" + n + "'"), n.getTime && (r = "(" + r + "&&" + r + ".getTime?" + r + ".getTime():" + r + ")", n = n.getTime())), r + " " + t + " " + n
			}
			return {
				quote: function (t)
				{
					return t && t.getTime ? "new Date(" + t.getTime() + ")" : "string" == typeof t ? "'" + e(t) + "'" : "" + t
				},
				eq: function (e, r, n)
				{
					return t("==", e, r, n)
				},
				neq: function (e, r, n)
				{
					return t("!=", e, r, n)
				},
				gt: function (e, r, n)
				{
					return t(">", e, r, n)
				},
				gte: function (e, r, n)
				{
					return t(">=", e, r, n)
				},
				lt: function (e, r, n)
				{
					return t("<", e, r, n)
				},
				lte: function (e, r, n)
				{
					return t("<=", e, r, n)
				},
				startswith: function (t, r, n)
				{
					return n && (t = "(" + t + " || '').toLowerCase()", r && (r = r.toLowerCase())), r && (r = e(r)), t + ".lastIndexOf('" + r + "', 0) == 0"
				},
				doesnotstartwith: function (t, r, n)
				{
					return n && (t = "(" + t + " || '').toLowerCase()", r && (r = r.toLowerCase())), r && (r = e(r)), t + ".lastIndexOf('" + r + "', 0) == -1"
				},
				endswith: function (t, r, n)
				{
					return n && (t = "(" + t + " || '').toLowerCase()", r && (r = r.toLowerCase())), r && (r = e(r)), t + ".indexOf('" + r + "', " + t + ".length - " + (r || "").length + ") >= 0"
				},
				doesnotendwith: function (t, r, n)
				{
					return n && (t = "(" + t + " || '').toLowerCase()", r && (r = r.toLowerCase())), r && (r = e(r)), t + ".indexOf('" + r + "', " + t + ".length - " + (r || "").length + ") < 0"
				},
				contains: function (t, r, n)
				{
					return n && (t = "(" + t + " || '').toLowerCase()", r && (r = r.toLowerCase())), r && (r = e(r)), t + ".indexOf('" + r + "') >= 0"
				},
				doesnotcontain: function (t, r, n)
				{
					return n && (t = "(" + t + " || '').toLowerCase()", r && (r = r.toLowerCase())), r && (r = e(r)), t + ".indexOf('" + r + "') == -1"
				},
				isempty: function (e)
				{
					return e + " === ''"
				},
				isnotempty: function (e)
				{
					return e + " !== ''"
				},
				isnull: function (e)
				{
					return "(" + e + " === null || " + e + " === undefined)"
				},
				isnotnull: function (e)
				{
					return "(" + e + " !== null && " + e + " !== undefined)"
				}
			}
		}(), a.filterExpr = function (e)
		{
			var r, n, i, s, o, u, l = [],
                d = {
                	and: " && ",
                	or: " || "
                },
                h = [],
                f = [],
                c = e.filters;
			for (r = 0, n = c.length; r < n; r++) i = c[r], o = i.field, u = i.operator, i.filters ? (s = a.filterExpr(i), i = s.expression.replace(/__o\[(\d+)\]/g, function (e, t)
			{
				return t = +t, "__o[" + (f.length + t) + "]"
			}).replace(/__f\[(\d+)\]/g, function (e, t)
			{
				return t = +t, "__f[" + (h.length + t) + "]"
			}), f.push.apply(f, s.operators), h.push.apply(h, s.fields)) : (typeof o === ke ? (s = "__f[" + h.length + "](d)", h.push(o)) : s = me.expr(o), typeof u === ke ? (i = "__o[" + f.length + "](" + s + ", " + $.quote(i.value) + ")", f.push(u)) : i = $[(u || "eq").toLowerCase()](s, i.value, i.ignoreCase === t || i.ignoreCase)), l.push(i);
			return {
				expression: "(" + l.join(d[e.logic]) + ")",
				fields: h,
				operators: f
			}
		}, X = {
			"==": "eq",
			equals: "eq",
			isequalto: "eq",
			equalto: "eq",
			equal: "eq",
			"!=": "neq",
			ne: "neq",
			notequals: "neq",
			isnotequalto: "neq",
			notequalto: "neq",
			notequal: "neq",
			"<": "lt",
			islessthan: "lt",
			lessthan: "lt",
			less: "lt",
			"<=": "lte",
			le: "lte",
			islessthanorequalto: "lte",
			lessthanequal: "lte",
			">": "gt",
			isgreaterthan: "gt",
			greaterthan: "gt",
			greater: "gt",
			">=": "gte",
			isgreaterthanorequalto: "gte",
			greaterthanequal: "gte",
			ge: "gte",
			notsubstringof: "doesnotcontain",
			isnull: "isnull",
			isempty: "isempty",
			isnotempty: "isnotempty"
		}, a.normalizeFilter = u, a.compareFilters = f, a.prototype = {
			toArray: function ()
			{
				return this.data
			},
			range: function (e, t)
			{
				return new a(this.data.slice(e, e + t))
			},
			skip: function (e)
			{
				return new a(this.data.slice(e))
			},
			take: function (e)
			{
				return new a(this.data.slice(0, e))
			},
			select: function (e)
			{
				return new a(B(this.data, e))
			},
			order: function (e, t)
			{
				var r = {
					dir: t
				};
				return e && (e.compare ? r.compare = e.compare : r.field = e), new a(this.data.slice(0).sort(Q.create(r)))
			},
			orderBy: function (e)
			{
				return this.order(e, "asc")
			},
			orderByDescending: function (e)
			{
				return this.order(e, "desc")
			},
			sort: function (e, t, r)
			{
				var n, i, a = s(e, t),
                    o = [];
				if (r = r || Q, a.length) {
					for (n = 0, i = a.length; n < i; n++) o.push(r.create(a[n]));
					return this.orderBy({
						compare: r.combine(o)
					})
				}
				return this
			},
			filter: function (e)
			{
				var t, r, n, i, s, o, l, d, h = this.data,
                    f = [];
				if (e = u(e), !e || 0 === e.filters.length) return this;
				for (i = a.filterExpr(e), o = i.fields, l = i.operators, s = d = Function("d, __f, __o", "return " + i.expression), (o.length || l.length) && (d = function (e)
				{
                        return s(e, o, l)
				}), t = 0, n = h.length; t < n; t++) r = h[t], d(r) && f.push(r);
				return new a(f)
			},
			group: function (e, t)
			{
				e = g(e || []), t = t || this.data;
				var r, n = this,
                    i = new a(n.data);
				return e.length > 0 && (r = e[0], i = i.groupBy(r).select(function (n)
				{
					var i = new a(t).filter([{
						field: n.field,
						operator: "eq",
						value: n.value,
						ignoreCase: !1
					}]);
					return {
						field: n.field,
						value: n.value,
						items: e.length > 1 ? new a(n.items).group(e.slice(1), i.toArray()).toArray() : n.items,
						hasSubgroups: e.length > 1,
						aggregates: i.aggregate(r.aggregates)
					}
				})), i
			},
			groupBy: function (e)
			{
				if (fe(e) || !this.data.length) return new a([]);
				var t, r, n, i, s = e.field,
                    o = this._sortForGrouping(s, e.dir || "asc"),
                    u = me.accessor(s),
                    l = u.get(o[0], s),
                    d = {
                    	field: s,
                    	value: l,
                    	items: []
                    },
                    h = [d];
				for (n = 0, i = o.length; n < i; n++) t = o[n], r = u.get(t, s), p(l, r) || (l = r, d = {
					field: s,
					value: l,
					items: []
				}, h.push(d)), d.items.push(t);
				return new a(h)
			},
			_sortForGrouping: function (e, t)
			{
				var r, n, i = this.data;
				if (!Qe) {
					for (r = 0, n = i.length; r < n; r++) i[r].__position = r;
					for (i = new a(i).sort(e, t, K).toArray(), r = 0, n = i.length; r < n; r++) delete i[r].__position;
					return i
				}
				return this.sort(e, t).toArray()
			},
			aggregate: function (e)
			{
				var t, r, n = {},
                    i = {};
				if (e && e.length)
					for (t = 0, r = this.data.length; t < r; t++) _(n, e, this.data[t], t, r, i);
				return n
			}
		}, Y = {
			sum: function (e, t, r)
			{
				var n = r.get(t);
				return v(e) ? v(n) && (e += n) : e = n, e
			},
			count: function (e)
			{
				return (e || 0) + 1
			},
			average: function (e, r, n, i, a, s)
			{
				var o = n.get(r);
				return s.count === t && (s.count = 0), v(e) ? v(o) && (e += o) : e = o, v(o) && s.count++, i == a - 1 && v(e) && (e /= s.count), e
			},
			max: function (e, t, r)
			{
				var n = r.get(t);
				return v(e) || m(e) || (e = n), e < n && (v(n) || m(n)) && (e = n), e
			},
			min: function (e, t, r)
			{
				var n = r.get(t);
				return v(e) || m(e) || (e = n), e > n && (v(n) || m(n)) && (e = n), e
			}
		}, a.process = function (e, r)
		{
			r = r || {};
			var n, i = new a(e),
                o = r.group,
                u = g(o || []).concat(s(r.sort || [])),
                l = r.filterCallback,
                d = r.filter,
                h = r.skip,
                f = r.take;
			return d && (i = i.filter(d), l && (i = l(i)), n = i.toArray().length), u && (i = i.sort(u), o && (e = i.toArray())), h !== t && f !== t && (i = i.range(h, f)), o && (i = i.group(o, e)), {
				total: n,
				data: i.toArray()
			}
		}, Z = be.extend({
			init: function (e)
			{
				this.data = e.data
			},
			read: function (e)
			{
				e.success(this.data)
			},
			update: function (e)
			{
				e.success(e.data)
			},
			create: function (e)
			{
				e.success(e.data)
			},
			destroy: function (e)
			{
				e.success(e.data)
			}
		}), ee = be.extend({
			init: function (e)
			{
				var t, r = this;
				e = r.options = le({}, r.options, e), _e(Ie, function (t, r)
				{
					typeof e[r] === we && (e[r] = {
						url: e[r]
					})
				}), r.cache = e.cache ? te.create(e.cache) : {
					find: ve,
					add: ve
				}, t = e.parameterMap, ye(e.push) && (r.push = e.push), r.push || (r.push = Ne), r.parameterMap = ye(t) ? t : function (e)
				{
					var r = {};
					return _e(e, function (e, n)
					{
						e in t && (e = t[e], he(e) && (n = e.value(n), e = e.key)), r[e] = n
					}), r
				}
			},
			options: {
				parameterMap: Ne
			},
			create: function (e)
			{
				return pe(this.setup(e, xe))
			},
			read: function (r)
			{
				var n, i, a, s = this,
                    o = s.cache;
				r = s.setup(r, qe), n = r.success || ve, i = r.error || ve, a = o.find(r.data), a !== t ? n(a) : (r.success = function (e)
				{
					o.add(r.data, e), n(e)
				}, e.ajax(r))
			},
			update: function (e)
			{
				return pe(this.setup(e, De))
			},
			destroy: function (e)
			{
				return pe(this.setup(e, Ce))
			},
			setup: function (e, t)
			{
				e = e || {};
				var r, n = this,
                    i = n.options[t],
                    a = ye(i.data) ? i.data(e.data) : i.data;
				return e = le(!0, {}, i, e), r = le(!0, {}, a, e.data), e.data = n.parameterMap(r, t), ye(e.url) && (e.url = e.url(r)), e
			}
		}), te = be.extend({
			init: function ()
			{
				this._store = {}
			},
			add: function (e, r)
			{
				e !== t && (this._store[je(e)] = r)
			},
			find: function (e)
			{
				return this._store[je(e)]
			},
			clear: function ()
			{
				this._store = {}
			},
			remove: function (e)
			{
				delete this._store[je(e)]
			}
		}), te.create = function (e)
		{
			var t = {
				inmemory: function ()
				{
					return new te
				}
			};
			return he(e) && ye(e.find) ? e : e === !0 ? new te : t[e]()
		}, re = be.extend({
			init: function (e)
			{
				var t, r, n, i, a, s, o, u, l, d, h, f, c, g = this;
				e = e || {};
				for (t in e) r = e[t], g[t] = typeof r === we ? Me(r) : r;
				i = e.modelBase || W, he(g.model) && (g.model = n = i.define(g.model)), a = de(g.data, g), g._dataAccessFunction = a, g.model && (s = de(g.groups, g), o = de(g.serialize, g), u = {}, l = {}, d = {}, h = {}, f = !1, n = g.model, n.fields && (_e(n.fields, function (e, t)
				{
					var r;
					c = e, he(t) && t.field ? c = t.field : typeof t === we && (c = t), he(t) && t.from && (r = t.from), f = f || r && r !== e || c !== e, l[e] = Me(r || c), d[e] = Me(e), u[r || c] = e, h[e] = r || c
				}), !e.serialize && f && (g.serialize = k(o, n, S, d, u, h))), g._dataAccessFunction = a, g.data = k(a, n, b, l, u, h), g.groups = k(s, n, w, l, u, h))
			},
			errors: function (e)
			{
				return e ? e.errors : null
			},
			parse: Ne,
			data: Ne,
			total: function (e)
			{
				return e.length
			},
			groups: Ne,
			aggregates: function ()
			{
				return {}
			},
			serialize: function (e)
			{
				return e
			}
		}), ne = Se.extend({
			init: function (e)
			{
				var r, n, i, a = this;
				e && (n = e.data), e = a.options = le({}, a.options, e), a._map = {}, a._prefetch = {}, a._data = [], a._pristineData = [], a._ranges = [], a._view = [], a._pristineTotal = 0, a._destroyed = [], a._pageSize = e.pageSize, a._page = e.page || (e.pageSize ? 1 : t), a._sort = s(e.sort), a._filter = u(e.filter), a._group = g(e.group), a._aggregate = e.aggregate, a._total = e.total, a._shouldDetachObservableParents = !0, Se.fn.init.call(a), a.transport = ie.create(e, n, a), ye(a.transport.push) && a.transport.push({
					pushCreate: de(a._pushCreate, a),
					pushUpdate: de(a._pushUpdate, a),
					pushDestroy: de(a._pushDestroy, a)
				}), null != e.offlineStorage && ("string" == typeof e.offlineStorage ? (i = e.offlineStorage, a._storage = {
					getItem: function ()
					{
						return JSON.parse(localStorage.getItem(i))
					},
					setItem: function (e)
					{
						localStorage.setItem(i, je(a.reader.serialize(e)))
					}
				}) : a._storage = e.offlineStorage), a.reader = new me.data.readers[e.schema.type || "json"](e.schema), r = a.reader.model || {}, a._detachObservableParents(), a._data = a._observe(a._data), a._online = !0, a.bind(["push", Pe, Oe, Te, ze, Ae, Fe], e)
			},
			options: {
				data: null,
				schema: {
					modelBase: W
				},
				offlineStorage: null,
				serverSorting: !1,
				serverPaging: !1,
				serverFiltering: !1,
				serverGrouping: !1,
				serverAggregates: !1,
				batch: !1
			},
			clone: function ()
			{
				return this
			},
			online: function (r)
			{
				return r !== t ? this._online != r && (this._online = r, r) ? this.sync() : e.Deferred().resolve().promise() : this._online
			},
			offlineData: function (e)
			{
				return null == this.options.offlineStorage ? null : e !== t ? this._storage.setItem(e) : this._storage.getItem() || []
			},
			_isServerGrouped: function ()
			{
				var e = this.group() || [];
				return this.options.serverGrouping && e.length
			},
			_pushCreate: function (e)
			{
				this._push(e, "pushCreate")
			},
			_pushUpdate: function (e)
			{
				this._push(e, "pushUpdate")
			},
			_pushDestroy: function (e)
			{
				this._push(e, "pushDestroy")
			},
			_push: function (e, t)
			{
				var r = this._readData(e);
				r || (r = e), this[t](r)
			},
			_flatData: function (e, t)
			{
				if (e) {
					if (this._isServerGrouped()) return q(e);
					if (!t)
						for (var r = 0; r < e.length; r++) e.at(r)
				}
				return e
			},
			parent: ve,
			get: function (e)
			{
				var t, r, n = this._flatData(this._data);
				for (t = 0, r = n.length; t < r; t++)
					if (n[t].id == e) return n[t]
			},
			getByUid: function (e)
			{
				var t, r, n = this._flatData(this._data);
				if (n)
					for (t = 0, r = n.length; t < r; t++)
						if (n[t].uid == e) return n[t]
			},
			indexOf: function (e)
			{
				return F(this._data, e)
			},
			at: function (e)
			{
				return this._data.at(e)
			},
			data: function (e)
			{
				var r, n = this;
				if (e === t) {
					if (n._data)
						for (r = 0; r < n._data.length; r++) n._data.at(r);
					return n._data
				}
				n._detachObservableParents(), n._data = this._observe(e), n._pristineData = e.slice(0), n._storeData(), n._ranges = [], n.trigger("reset"), n._addRange(n._data), n._total = n._data.length, n._pristineTotal = n._total, n._process(n._data)
			},
			view: function (e)
			{
				return e === t ? this._view : (this._view = this._observeView(e), t)
			},
			_observeView: function (e)
			{
				var t, r = this;
				return R(e, r._data, r._ranges, r.reader.model || H, r._isServerGrouped()), t = new U(e, r.reader.model), t.parent = function ()
				{
					return r.parent()
				}, t
			},
			flatView: function ()
			{
				var e = this.group() || [];
				return e.length ? q(this._view) : this._view
			},
			add: function (e)
			{
				return this.insert(this._data.length, e)
			},
			_createNewModel: function (e)
			{
				return this.reader.model ? new this.reader.model(e) : e instanceof H ? e : new H(e)
			},
			insert: function (e, t)
			{
				return t || (t = e, e = 0), t instanceof W || (t = this._createNewModel(t)), this._isServerGrouped() ? this._data.splice(e, 0, this._wrapInEmptyGroup(t)) : this._data.splice(e, 0, t), t
			},
			pushCreate: function (e)
			{
				var t, r, n, i, a, s;
				ce(e) || (e = [e]), t = [], r = this.options.autoSync, this.options.autoSync = !1;
				try {
					for (n = 0; n < e.length; n++) i = e[n], a = this.add(i), t.push(a), s = a.toJSON(), this._isServerGrouped() && (s = this._wrapInEmptyGroup(s)), this._pristineData.push(s)
				} finally {
					this.options.autoSync = r
				}
				t.length && this.trigger("push", {
					type: "create",
					items: t
				})
			},
			pushUpdate: function (e)
			{
				var t, r, n, i, a;
				for (ce(e) || (e = [e]), t = [], r = 0; r < e.length; r++) n = e[r], i = this._createNewModel(n), a = this.get(i.id), a ? (t.push(a), a.accept(n), a.trigger(Oe), this._updatePristineForModel(a, n)) : this.pushCreate(n);
				t.length && this.trigger("push", {
					type: "update",
					items: t
				})
			},
			pushDestroy: function (e)
			{
				var t = this._removeItems(e);
				t.length && this.trigger("push", {
					type: "destroy",
					items: t
				})
			},
			_removeItems: function (e)
			{
				var t, r, n, i, a, s;
				ce(e) || (e = [e]), t = [], r = this.options.autoSync, this.options.autoSync = !1;
				try {
					for (n = 0; n < e.length; n++) i = e[n], a = this._createNewModel(i), s = !1, this._eachItem(this._data, function (e)
					{
						var r, n;
						for (r = 0; r < e.length; r++)
							if (n = e.at(r), n.id === a.id) {
								t.push(n), e.splice(r, 1), s = !0;
								break
							}
					}), s && (this._removePristineForModel(a), this._destroyed.pop())
				} finally {
					this.options.autoSync = r
				}
				return t
			},
			remove: function (e)
			{
				var t, r = this,
                    n = r._isServerGrouped();
				return this._eachItem(r._data, function (i)
				{
					if (t = P(i, e), t && n) return t.isNew && t.isNew() || r._destroyed.push(t), !0
				}), this._removeModelFromRanges(e), this._updateRangesLength(), e
			},
			destroyed: function ()
			{
				return this._destroyed
			},
			created: function ()
			{
				var e, t, r = [],
                    n = this._flatData(this._data);
				for (e = 0, t = n.length; e < t; e++) n[e].isNew && n[e].isNew() && r.push(n[e]);
				return r
			},
			updated: function ()
			{
				var e, t, r = [],
                    n = this._flatData(this._data);
				for (e = 0, t = n.length; e < t; e++) n[e].isNew && !n[e].isNew() && n[e].dirty && r.push(n[e]);
				return r
			},
			sync: function ()
			{
				var t, r = this,
                    n = [],
                    i = [],
                    a = r._destroyed,
                    s = e.Deferred().resolve().promise();
				if (r.online()) {
					if (!r.reader.model) return s;
					n = r.created(), i = r.updated(), t = [], r.options.batch && r.transport.submit ? t = r._sendSubmit(n, i, a) : (t.push.apply(t, r._send("create", n)), t.push.apply(t, r._send("update", i)), t.push.apply(t, r._send("destroy", a))), s = e.when.apply(null, t).then(function ()
					{
						var e, t;
						for (e = 0, t = arguments.length; e < t; e++) arguments[e] && r._accept(arguments[e]);
						r._storeData(!0), r._change({
							action: "sync"
						}), r.trigger(ze)
					})
				} else r._storeData(!0), r._change({
					action: "sync"
				});
				return s
			},
			cancelChanges: function (e)
			{
				var t = this;
				e instanceof me.data.Model ? t._cancelModel(e) : (t._destroyed = [], t._detachObservableParents(), t._data = t._observe(t._pristineData), t.options.serverPaging && (t._total = t._pristineTotal), t._ranges = [], t._addRange(t._data), t._change(), t._markOfflineUpdatesAsDirty())
			},
			_markOfflineUpdatesAsDirty: function ()
			{
				var e = this;
				null != e.options.offlineStorage && e._eachItem(e._data, function (e)
				{
					var t, r;
					for (t = 0; t < e.length; t++) r = e.at(t), "update" != r.__state__ && "create" != r.__state__ || (r.dirty = !0)
				})
			},
			hasChanges: function ()
			{
				var e, t, r = this._flatData(this._data);
				if (this._destroyed.length) return !0;
				for (e = 0, t = r.length; e < t; e++)
					if (r[e].isNew && r[e].isNew() || r[e].dirty) return !0;
				return !1
			},
			_accept: function (t)
			{
				var r, n = this,
                    i = t.models,
                    a = t.response,
                    s = 0,
                    o = n._isServerGrouped(),
                    u = n._pristineData,
                    l = t.type;
				if (n.trigger(Ae, {
					response: a,
					type: l
				}), a && !fe(a)) {
					if (a = n.reader.parse(a), n._handleCustomErrors(a)) return;
					a = n.reader.data(a), ce(a) || (a = [a])
				} else a = e.map(i, function (e)
				{
					return e.toJSON()
				});
				for ("destroy" === l && (n._destroyed = []), s = 0, r = i.length; s < r; s++) "destroy" !== l ? (i[s].accept(a[s]), "create" === l ? u.push(o ? n._wrapInEmptyGroup(i[s]) : a[s]) : "update" === l && n._updatePristineForModel(i[s], a[s])) : n._removePristineForModel(i[s])
			},
			_updatePristineForModel: function (e, t)
			{
				this._executeOnPristineForModel(e, function (e, r)
				{
					me.deepExtend(r[e], t)
				})
			},
			_executeOnPristineForModel: function (e, t)
			{
				this._eachPristineItem(function (r)
				{
					var n = T(r, e);
					if (n > -1) return t(n, r), !0
				})
			},
			_removePristineForModel: function (e)
			{
				this._executeOnPristineForModel(e, function (e, t)
				{
					t.splice(e, 1)
				})
			},
			_readData: function (e)
			{
				var t = this._isServerGrouped() ? this.reader.groups : this.reader.data;
				return t.call(this.reader, e)
			},
			_eachPristineItem: function (e)
			{
				this._eachItem(this._pristineData, e)
			},
			_eachItem: function (e, t)
			{
				e && e.length && (this._isServerGrouped() ? C(e, t) : t(e))
			},
			_pristineForModel: function (e)
			{
				var t, r, n = function (n)
				{
					if (r = T(n, e), r > -1) return t = n[r], !0
				};
				return this._eachPristineItem(n), t
			},
			_cancelModel: function (e)
			{
				var t = this._pristineForModel(e);
				this._eachItem(this._data, function (r)
				{
					var n = F(r, e);
					n >= 0 && (!t || e.isNew() && !t.__state__ ? r.splice(n, 1) : (r[n].accept(t), "update" == t.__state__ && (r[n].dirty = !0)))
				})
			},
			_submit: function (t, r)
			{
				var n = this;
				n.trigger(Te, {
					type: "submit"
				}), n.transport.submit(le({
					success: function (r, n)
					{
						var i = e.grep(t, function (e)
						{
							return e.type == n
						})[0];
						i && i.resolve({
							response: r,
							models: i.models,
							type: n
						})
					},
					error: function (e, r, i)
					{
						for (var a = 0; a < t.length; a++) t[a].reject(e);
						n.error(e, r, i)
					}
				}, r))
			},
			_sendSubmit: function (t, r, n)
			{
				var i = this,
                    a = [];
				return i.options.batch && (t.length && a.push(e.Deferred(function (e)
				{
					e.type = "create", e.models = t
				})), r.length && a.push(e.Deferred(function (e)
				{
					e.type = "update", e.models = r
				})), n.length && a.push(e.Deferred(function (e)
				{
					e.type = "destroy", e.models = n
				})), i._submit(a, {
					data: {
						created: i.reader.serialize(y(t)),
						updated: i.reader.serialize(y(r)),
						destroyed: i.reader.serialize(y(n))
					}
				})), a
			},
			_promise: function (t, r, n)
			{
				var i = this;
				return e.Deferred(function (e)
				{
					i.trigger(Te, {
						type: n
					}), i.transport[n].call(i.transport, le({
						success: function (t)
						{
							e.resolve({
								response: t,
								models: r,
								type: n
							})
						},
						error: function (t, r, n)
						{
							e.reject(t), i.error(t, r, n)
						}
					}, t))
				}).promise()
			},
			_send: function (e, t)
			{
				var r, n, i = this,
                    a = [],
                    s = i.reader.serialize(y(t));
				if (i.options.batch) t.length && a.push(i._promise({
					data: {
						models: s
					}
				}, t, e));
				else
					for (r = 0, n = t.length; r < n; r++) a.push(i._promise({
						data: s[r]
					}, [t[r]], e));
				return a
			},
			read: function (t)
			{
				var r = this,
                    n = r._params(t),
                    i = e.Deferred();
				return r._queueRequest(n, function ()
				{
					var e = r.trigger(Te, {
						type: "read"
					});
					e ? (r._dequeueRequest(), i.resolve(e)) : (r.trigger(Fe), r._ranges = [], r.trigger("reset"), r.online() ? r.transport.read({
						data: n,
						success: function (e)
						{
							r._ranges = [], r.success(e, n), i.resolve()
						},
						error: function ()
						{
							var e = Je.call(arguments);
							r.error.apply(r, e), i.reject.apply(i, e)
						}
					}) : null != r.options.offlineStorage && (r.success(r.offlineData(), n), i.resolve()))
				}), i.promise()
			},
			_readAggregates: function (e)
			{
				return this.reader.aggregates(e)
			},
			success: function (e)
			{
				var r, n, i, a, s, o, u, l, d = this,
                    h = d.options;
				if (d.trigger(Ae, {
					response: e,
					type: "read"
				}), d.online()) {
					if (e = d.reader.parse(e), d._handleCustomErrors(e)) return d._dequeueRequest(), t;
					d._total = d.reader.total(e), d._aggregate && h.serverAggregates && (d._aggregateResult = d._readAggregates(e)), e = d._readData(e), d._destroyed = []
				} else {
					for (e = d._readData(e), r = [], n = {}, i = d.reader.model, a = i ? i.idField : "id", s = 0; s < this._destroyed.length; s++) o = this._destroyed[s][a], n[o] = o;
					for (s = 0; s < e.length; s++) u = e[s], l = u.__state__, "destroy" == l ? n[u[a]] || this._destroyed.push(this._createNewModel(u)) : r.push(u);
					e = r, d._total = e.length
				}
				d._pristineTotal = d._total, d._pristineData = e.slice(0), d._detachObservableParents(), d._data = d._observe(e), d._markOfflineUpdatesAsDirty(), d._storeData(), d._addRange(d._data), d._process(d._data), d._dequeueRequest()
			},
			_detachObservableParents: function ()
			{
				if (this._data && this._shouldDetachObservableParents)
					for (var e = 0; e < this._data.length; e++) this._data[e].parent && (this._data[e].parent = ve)
			},
			_storeData: function (e)
			{
				function t(e)
				{
					var r, n, i, a = [];
					for (r = 0; r < e.length; r++) n = e.at(r), i = n.toJSON(), s && n.items ? i.items = t(n.items) : (i.uid = n.uid, o && (n.isNew() ? i.__state__ = "create" : n.dirty && (i.__state__ = "update"))), a.push(i);
					return a
				}
				var r, n, i, a, s = this._isServerGrouped(),
                    o = this.reader.model;
				if (null != this.options.offlineStorage) {
					for (r = t(this._data), n = [], i = 0; i < this._destroyed.length; i++) a = this._destroyed[i].toJSON(), a.__state__ = "destroy", n.push(a);
					this.offlineData(r.concat(n)), e && (this._pristineData = this._readData(r))
				}
			},
			_addRange: function (e)
			{
				var t = this,
                    r = t._skip || 0,
                    n = r + t._flatData(e, !0).length;
				t._ranges.push({
					start: r,
					end: n,
					data: e,
					timestamp: (new Date).getTime()
				}), t._ranges.sort(function (e, t)
				{
					return e.start - t.start
				})
			},
			error: function (e, t, r)
			{
				this._dequeueRequest(), this.trigger(Ae, {}), this.trigger(Pe, {
					xhr: e,
					status: t,
					errorThrown: r
				})
			},
			_params: function (e)
			{
				var t = this,
                    r = le({
                    	take: t.take(),
                    	skip: t.skip(),
                    	page: t.page(),
                    	pageSize: t.pageSize(),
                    	sort: t._sort,
                    	filter: t._filter,
                    	group: t._group,
                    	aggregate: t._aggregate
                    }, e);
				return t.options.serverPaging || (delete r.take, delete r.skip, delete r.page, delete r.pageSize), t.options.serverGrouping ? t.reader.model && r.group && (r.group = M(r.group, t.reader.model)) : delete r.group, t.options.serverFiltering ? t.reader.model && r.filter && (r.filter = N(r.filter, t.reader.model)) : delete r.filter, t.options.serverSorting ? t.reader.model && r.sort && (r.sort = M(r.sort, t.reader.model)) : delete r.sort, t.options.serverAggregates ? t.reader.model && r.aggregate && (r.aggregate = M(r.aggregate, t.reader.model)) : delete r.aggregate, r
			},
			_queueRequest: function (e, r)
			{
				var n = this;
				n._requestInProgress ? n._pending = {
					callback: de(r, n),
					options: e
				} : (n._requestInProgress = !0, n._pending = t, r())
			},
			_dequeueRequest: function ()
			{
				var e = this;
				e._requestInProgress = !1, e._pending && e._queueRequest(e._pending.options, e._pending.callback)
			},
			_handleCustomErrors: function (e)
			{
				if (this.reader.errors) {
					var t = this.reader.errors(e);
					if (t) return this.trigger(Pe, {
						xhr: null,
						status: "customerror",
						errorThrown: "custom error",
						errors: t
					}), !0
				}
				return !1
			},
			_shouldWrap: function (e)
			{
				var t = this.reader.model;
				return !(!t || !e.length) && !(e[0] instanceof t)
			},
			_observe: function (e)
			{
				var t, r = this,
                    n = r.reader.model;
				return r._shouldDetachObservableParents = !0, e instanceof Ye ? (r._shouldDetachObservableParents = !1, r._shouldWrap(e) && (e.type = r.reader.model, e.wrapAll(e, e))) : (t = r.pageSize() && !r.options.serverPaging ? U : Ye, e = new t(e, r.reader.model), e.parent = function ()
				{
					return r.parent()
				}), r._isServerGrouped() && D(e, n), r._changeHandler && r._data && r._data instanceof Ye ? r._data.unbind(Oe, r._changeHandler) : r._changeHandler = de(r._change, r), e.bind(Oe, r._changeHandler)
			},
			_updateTotalForAction: function (e, t)
			{
				var r = this,
                    n = parseInt(r._total, 10);
				v(r._total) || (n = parseInt(r._pristineTotal, 10)), "add" === e ? n += t.length : "remove" === e ? n -= t.length : "itemchange" === e || "sync" === e || r.options.serverPaging ? "sync" === e && (n = r._pristineTotal = parseInt(r._total, 10)) : n = r._pristineTotal, r._total = n
			},
			_change: function (e)
			{
				var t, r, n, i = this,
                    a = e ? e.action : "";
				if ("remove" === a)
					for (t = 0, r = e.items.length; t < r; t++) e.items[t].isNew && e.items[t].isNew() || i._destroyed.push(e.items[t]);
				!i.options.autoSync || "add" !== a && "remove" !== a && "itemchange" !== a ? (i._updateTotalForAction(a, e ? e.items : []), i._process(i._data, e)) : (n = function (t)
				{
					"sync" === t.action && (i.unbind("change", n), i._updateTotalForAction(a, e.items))
				}, i.first("change", n), i.sync())
			},
			_calculateAggregates: function (e, t)
			{
				t = t || {};
				var r = new a(e),
                    n = t.aggregate,
                    i = t.filter;
				return i && (r = r.filter(i)), r.aggregate(n)
			},
			_process: function (e, r)
			{
				var n, i = this,
                    a = {};
				i.options.serverPaging !== !0 && (a.skip = i._skip, a.take = i._take || i._pageSize, a.skip === t && i._page !== t && i._pageSize !== t && (a.skip = (i._page - 1) * i._pageSize)), i.options.serverSorting !== !0 && (a.sort = i._sort), i.options.serverFiltering !== !0 && (a.filter = i._filter), i.options.serverGrouping !== !0 && (a.group = i._group), i.options.serverAggregates !== !0 && (a.aggregate = i._aggregate, i._aggregateResult = i._calculateAggregates(e, a)), n = i._queryProcess(e, a), i.view(n.data), n.total === t || i.options.serverFiltering || (i._total = n.total), r = r || {}, r.items = r.items || i._view, i.trigger(Oe, r)
			},
			_queryProcess: function (e, t)
			{
				return a.process(e, t)
			},
			_mergeState: function (e)
			{
				var r = this;
				return e !== t && (r._pageSize = e.pageSize, r._page = e.page, r._sort = e.sort, r._filter = e.filter, r._group = e.group, r._aggregate = e.aggregate, r._skip = r._currentRangeStart = e.skip, r._take = e.take, r._skip === t && (r._skip = r._currentRangeStart = r.skip(), e.skip = r.skip()), r._take === t && r._pageSize !== t && (r._take = r._pageSize, e.take = r._take), e.sort && (r._sort = e.sort = s(e.sort)), e.filter && (r._filter = e.filter = u(e.filter)), e.group && (r._group = e.group = g(e.group)), e.aggregate && (r._aggregate = e.aggregate = c(e.aggregate))), e
			},
			query: function (r)
			{
				var n, i, a = this.options.serverSorting || this.options.serverPaging || this.options.serverFiltering || this.options.serverGrouping || this.options.serverAggregates;
				return a || (this._data === t || 0 === this._data.length) && !this._destroyed.length ? this.read(this._mergeState(r)) : (i = this.trigger(Te, {
					type: "read"
				}), i || (this.trigger(Fe), n = this._queryProcess(this._data, this._mergeState(r)), this.options.serverFiltering || (this._total = n.total !== t ? n.total : this._data.length), this._aggregateResult = this._calculateAggregates(this._data, r), this.view(n.data), this.trigger(Ae, {
					type: "read"
				}), this.trigger(Oe, {
					items: n.data
				})), e.Deferred().resolve(i).promise())
			},
			fetch: function (e)
			{
				var t = this,
                    r = function (r)
                    {
                    	r !== !0 && ye(e) && e.call(t)
                    };
				return this._query().then(r)
			},
			_query: function (e)
			{
				var t = this;
				return t.query(le({}, {
					page: t.page(),
					pageSize: t.pageSize(),
					sort: t.sort(),
					filter: t.filter(),
					group: t.group(),
					aggregate: t.aggregate()
				}, e))
			},
			next: function (e)
			{
				var t = this,
                    r = t.page(),
                    n = t.total();
				if (e = e || {}, r && !(n && r + 1 > t.totalPages())) return t._skip = t._currentRangeStart = r * t.take(), r += 1, e.page = r, t._query(e), r
			},
			prev: function (e)
			{
				var t = this,
                    r = t.page();
				if (e = e || {}, r && 1 !== r) return t._skip = t._currentRangeStart = t._skip - t.take(), r -= 1, e.page = r, t._query(e), r
			},
			page: function (e)
			{
				var r, n = this;
				return e !== t ? (e = Le.max(Le.min(Le.max(e, 1), n.totalPages()), 1), n._query({
					page: e
				}), t) : (r = n.skip(), r !== t ? Le.round((r || 0) / (n.take() || 1)) + 1 : t)
			},
			pageSize: function (e)
			{
				var r = this;
				return e !== t ? (r._query({
					pageSize: e,
					page: 1
				}), t) : r.take()
			},
			sort: function (e)
			{
				var r = this;
				return e !== t ? (r._query({
					sort: e
				}), t) : r._sort
			},
			filter: function (e)
			{
				var r = this;
				return e === t ? r._filter : (r.trigger("reset"), r._query({
					filter: e,
					page: 1
				}), t)
			},
			group: function (e)
			{
				var r = this;
				return e !== t ? (r._query({
					group: e
				}), t) : r._group
			},
			total: function ()
			{
				return parseInt(this._total || 0, 10)
			},
			aggregate: function (e)
			{
				var r = this;
				return e !== t ? (r._query({
					aggregate: e
				}), t) : r._aggregate
			},
			aggregates: function ()
			{
				var e = this._aggregateResult;
				return fe(e) && (e = this._emptyAggregates(this.aggregate())), e
			},
			_emptyAggregates: function (e)
			{
				var t, r, n = {};
				if (!fe(e))
					for (t = {}, ce(e) || (e = [e]), r = 0; r < e.length; r++) t[e[r].aggregate] = 0, n[e[r].field] = t;
				return n
			},
			_wrapInEmptyGroup: function (e)
			{
				var t, r, n, i, a = this.group();
				for (n = a.length - 1, i = 0; n >= i; n--) r = a[n], t = {
					value: e.get(r.field),
					field: r.field,
					items: t ? [t] : [e],
					hasSubgroups: !!t,
					aggregates: this._emptyAggregates(r.aggregates)
				};
				return t
			},
			totalPages: function ()
			{
				var e = this,
                    t = e.pageSize() || e.total();
				return Le.ceil((e.total() || 0) / t)
			},
			inRange: function (e, t)
			{
				var r = this,
                    n = Le.min(e + t, r.total());
				return !r.options.serverPaging && r._data.length > 0 || r._findRange(e, n).length > 0
			},
			lastRange: function ()
			{
				var e = this._ranges;
				return e[e.length - 1] || {
					start: 0,
					end: 0,
					data: []
				}
			},
			firstItemUid: function ()
			{
				var e = this._ranges;
				return e.length && e[0].data.length && e[0].data[0].uid
			},
			enableRequestsInProgress: function ()
			{
				this._skipRequestsInProgress = !1
			},
			_timeStamp: function ()
			{
				return (new Date).getTime()
			},
			range: function (e, r)
			{
				var n, i, a, s, o, u, l, d;
				if (this._currentRequestTimeStamp = this._timeStamp(), this._skipRequestsInProgress = !0, e = Le.min(e || 0, this.total()), n = this, i = Le.max(Le.floor(e / r), 0) * r, a = Le.min(i + r, n.total()), s = n._findRange(e, Le.min(e + r, n.total())), s.length) {
					n._pending = t, n._skip = e > n.skip() ? Le.min(a, (n.totalPages() - 1) * n.take()) : i, n._currentRangeStart = e, n._take = r, o = n.options.serverPaging, u = n.options.serverSorting, l = n.options.serverFiltering, d = n.options.serverAggregates;
					try {
						n.options.serverPaging = !0, n._isServerGrouped() || n.group() && n.group().length || (n.options.serverSorting = !0), n.options.serverFiltering = !0, n.options.serverPaging = !0, n.options.serverAggregates = !0, o && (n._detachObservableParents(), n._data = s = n._observe(s)), n._process(s)
					} finally {
						n.options.serverPaging = o, n.options.serverSorting = u, n.options.serverFiltering = l, n.options.serverAggregates = d
					}
				} else r !== t && (n._rangeExists(i, a) ? i < e && n.prefetch(a, r, function ()
				{
					n.range(e, r)
				}) : n.prefetch(i, r, function ()
				{
					e > i && a < n.total() && !n._rangeExists(a, Le.min(a + r, n.total())) ? n.prefetch(a, r, function ()
					{
						n.range(e, r)
					}) : n.range(e, r)
				}))
			},
			_findRange: function (e, r)
			{
				var n, i, a, o, u, l, d, h, f, c, p, _, v = this,
                    m = v._ranges,
                    y = [],
                    S = v.options,
                    b = S.serverSorting || S.serverPaging || S.serverFiltering || S.serverGrouping || S.serverAggregates;
				for (i = 0, p = m.length; i < p; i++)
					if (n = m[i], e >= n.start && e <= n.end) {
						for (c = 0, a = i; a < p; a++)
							if (n = m[a], f = v._flatData(n.data, !0), f.length && e + c >= n.start && (l = n.data, d = n.end, b || (_ = g(v.group() || []).concat(s(v.sort() || [])), h = v._queryProcess(n.data, {
								sort: _,
								filter: v.filter()
							}), f = l = h.data, h.total !== t && (d = h.total)), o = 0, e + c > n.start && (o = e + c - n.start), u = f.length, d > r && (u -= d - r), c += u - o, y = v._mergeGroups(y, l, o, u), r <= n.end && c == r - e)) return y;
						break
					}
				return []
			},
			_mergeGroups: function (e, t, r, n)
			{
				if (this._isServerGrouped()) {
					var i, a = t.toJSON();
					return e.length && (i = e[e.length - 1]), x(i, a, r, n), e.concat(a)
				}
				return e.concat(t.slice(r, n))
			},
			skip: function ()
			{
				var e = this;
				return e._skip === t ? e._page !== t ? (e._page - 1) * (e.take() || 1) : t : e._skip
			},
			currentRangeStart: function ()
			{
				return this._currentRangeStart || 0
			},
			take: function ()
			{
				return this._take || this._pageSize
			},
			_prefetchSuccessHandler: function (e, t, r, n)
			{
				var i = this,
                    a = i._timeStamp();
				return function (s)
				{
					var o, u, l, d = !1,
                        h = {
                        	start: e,
                        	end: t,
                        	data: [],
                        	timestamp: i._timeStamp()
                        };
					if (i._dequeueRequest(), i.trigger(Ae, {
						response: s,
						type: "read"
					}), s = i.reader.parse(s), l = i._readData(s), l.length) {
						for (o = 0, u = i._ranges.length; o < u; o++)
							if (i._ranges[o].start === e) {
								d = !0, h = i._ranges[o];
								break
							}
						d || i._ranges.push(h)
					}
					h.data = i._observe(l), h.end = h.start + i._flatData(h.data, !0).length, i._ranges.sort(function (e, t)
					{
						return e.start - t.start
					}), i._total = i.reader.total(s), (n || a >= i._currentRequestTimeStamp || !i._skipRequestsInProgress) && (r && l.length ? r() : i.trigger(Oe, {}))
				}
			},
			prefetch: function (e, t, r)
			{
				var n = this,
                    i = Le.min(e + t, n.total()),
                    a = {
                    	take: t,
                    	skip: e,
                    	page: e / t + 1,
                    	pageSize: t,
                    	sort: n._sort,
                    	filter: n._filter,
                    	group: n._group,
                    	aggregate: n._aggregate
                    };
				n._rangeExists(e, i) ? r && r() : (clearTimeout(n._timeout), n._timeout = setTimeout(function ()
				{
					n._queueRequest(a, function ()
					{
						n.trigger(Te, {
							type: "read"
						}) ? n._dequeueRequest() : n.transport.read({
							data: n._params(a),
							success: n._prefetchSuccessHandler(e, i, r),
							error: function ()
							{
								var e = Je.call(arguments);
								n.error.apply(n, e)
							}
						})
					})
				}, 100))
			},
			_multiplePrefetch: function (e, t, r)
			{
				var n = this,
                    i = Le.min(e + t, n.total()),
                    a = {
                    	take: t,
                    	skip: e,
                    	page: e / t + 1,
                    	pageSize: t,
                    	sort: n._sort,
                    	filter: n._filter,
                    	group: n._group,
                    	aggregate: n._aggregate
                    };
				n._rangeExists(e, i) ? r && r() : n.trigger(Te, {
					type: "read"
				}) || n.transport.read({
					data: n._params(a),
					success: n._prefetchSuccessHandler(e, i, r, !0)
				})
			},
			_rangeExists: function (e, t)
			{
				var r, n, i = this,
                    a = i._ranges;
				for (r = 0, n = a.length; r < n; r++)
					if (a[r].start <= e && a[r].end >= t) return !0;
				return !1
			},
			_removeModelFromRanges: function (e)
			{
				var t, r, n, i, a;
				for (i = 0, a = this._ranges.length; i < a && (n = this._ranges[i], this._eachItem(n.data, function (n)
				{
                        t = P(n, e), t && (r = !0)
				}), !r) ; i++);
			},
			_updateRangesLength: function ()
			{
				var e, t, r, n, i = 0;
				for (r = 0, n = this._ranges.length; r < n; r++) e = this._ranges[r], e.start = e.start - i, t = this._flatData(e.data, !0).length, i = e.end - t, e.end = e.start + t
			}
		}), ie = {}, ie.create = function (t, r, n)
		{
			var i, a = t.transport ? e.extend({}, t.transport) : null;
			return a ? (a.read = typeof a.read === we ? {
				url: a.read
			} : a.read, "jsdo" === t.type && (a.dataSource = n), t.type && (me.data.transports = me.data.transports || {}, me.data.schemas = me.data.schemas || {}, me.data.transports[t.type] ? he(me.data.transports[t.type]) ? a = le(!0, {}, me.data.transports[t.type], a) : i = new me.data.transports[t.type](le(a, {
				data: r
			})) : me.logToConsole("Unknown DataSource transport type '" + t.type + "'.\nVerify that registration scripts for this type are included after Kendo UI on the page.", "warn"), t.schema = le(!0, {}, me.data.schemas[t.type], t.schema)), i || (i = ye(a.read) ? a : new ee(a))) : i = new Z({
				data: t.data || []
			}), i
		}, ne.create = function (e)
		{
			(ce(e) || e instanceof Ye) && (e = {
				data: e
			});
			var r, n, i, a = e || {},
                s = a.data,
                o = a.fields,
                u = a.table,
                l = a.select,
                d = {};
			if (s || !o || a.transport || (u ? s = L(u, o) : l && (s = j(l, o), a.group === t && s[0] && s[0].optgroup !== t && (a.group = "optgroup"))), me.data.Model && o && (!a.schema || !a.schema.model)) {
				for (r = 0, n = o.length; r < n; r++) i = o[r], i.type && (d[i.field] = i);
				fe(d) || (a.schema = le(!0, a.schema, {
					model: {
						fields: d
					}
				}))
			}
			return a.data = s, l = null, a.select = null, u = null, a.table = null, a instanceof ne ? a : new ne(a)
		}, ae = W.define({
			idField: "id",
			init: function (e)
			{
				var t = this,
                    r = t.hasChildren || e && e.hasChildren,
                    n = "items",
                    i = {};
				me.data.Model.fn.init.call(t, e), typeof t.children === we && (n = t.children), i = {
					schema: {
						data: n,
						model: {
							hasChildren: r,
							id: t.idField,
							fields: t.fields
						}
					}
				}, typeof t.children !== we && le(i, t.children), i.data = e, r || (r = i.schema.data), typeof r === we && (r = me.getter(r)), ye(r) && (t.hasChildren = !!r.call(t, t)), t._childrenOptions = i, t.hasChildren && t._initChildren(), t._loaded = !(!e || !e._loaded)
			},
			_initChildren: function ()
			{
				var e, t, r, n = this;
				n.children instanceof se || (e = n.children = new se(n._childrenOptions), t = e.transport, r = t.parameterMap, t.parameterMap = function (e, t)
				{
					return e[n.idField || "id"] = n.id, r && (e = r(e, t)), e
				}, e.parent = function ()
				{
					return n
				}, e.bind(Oe, function (e)
				{
					e.node = e.node || n, n.trigger(Oe, e)
				}), e.bind(Pe, function (e)
				{
					var t = n.parent();
					t && (e.node = e.node || n, t.trigger(Pe, e))
				}), n._updateChildrenField())
			},
			append: function (e)
			{
				this._initChildren(), this.loaded(!0), this.children.add(e)
			},
			hasChildren: !1,
			level: function ()
			{
				for (var e = this.parentNode(), t = 0; e && e.parentNode;) t++, e = e.parentNode ? e.parentNode() : null;
				return t
			},
			_updateChildrenField: function ()
			{
				var e = this._childrenOptions.schema.data;
				this[e || "items"] = this.children.data()
			},
			_childrenLoaded: function ()
			{
				this._loaded = !0, this._updateChildrenField()
			},
			load: function ()
			{
				var r, n, i = {},
                    a = "_query";
				return this.hasChildren ? (this._initChildren(), r = this.children, i[this.idField || "id"] = this.id, this._loaded || (r._data = t, a = "read"), r.one(Oe, de(this._childrenLoaded, this)), n = r[a](i)) : this.loaded(!0), n || e.Deferred().resolve().promise()
			},
			parentNode: function ()
			{
				var e = this.parent();
				return e.parent()
			},
			loaded: function (e)
			{
				return e === t ? this._loaded : (this._loaded = e, t)
			},
			shouldSerialize: function (e)
			{
				return W.fn.shouldSerialize.call(this, e) && "children" !== e && "_loaded" !== e && "hasChildren" !== e && "_childrenOptions" !== e
			}
		}), se = ne.extend({
			init: function (e)
			{
				var t = ae.define({
					children: e
				});
				ne.fn.init.call(this, le(!0, {}, {
					schema: {
						modelBase: t,
						model: t
					}
				}, e)), this._attachBubbleHandlers()
			},
			_attachBubbleHandlers: function ()
			{
				var e = this;
				e._data.bind(Pe, function (t)
				{
					e.trigger(Pe, t)
				})
			},
			remove: function (e)
			{
				var t, r = e.parentNode(),
                    n = this;
				return r && r._initChildren && (n = r.children), t = ne.fn.remove.call(n, e), r && !n.data().length && (r.hasChildren = !1), t
			},
			success: G("success"),
			data: G("data"),
			insert: function (e, t)
			{
				var r = this.parent();
				return r && r._initChildren && (r.hasChildren = !0, r._initChildren()), ne.fn.insert.call(this, e, t)
			},
			_find: function (e, t)
			{
				var r, n, i, a, s = this._data;
				if (s) {
					if (i = ne.fn[e].call(this, t)) return i;
					for (s = this._flatData(this._data), r = 0, n = s.length; r < n; r++)
						if (a = s[r].children, a instanceof se && (i = a[e](t))) return i
				}
			},
			get: function (e)
			{
				return this._find("get", e)
			},
			getByUid: function (e)
			{
				return this._find("getByUid", e)
			}
		}), se.create = function (e)
		{
			e = e && e.push ? {
				data: e
			} : e;
			var t = e || {},
                r = t.data,
                n = t.fields,
                i = t.list;
			return r && r._dataSource ? r._dataSource : (r || !n || t.transport || i && (r = E(i, n)), t.data = r, t instanceof se ? t : new se(t))
		}, oe = me.Observable.extend({
			init: function (e, t, r)
			{
				me.Observable.fn.init.call(this), this._prefetching = !1, this.dataSource = e, this.prefetch = !r;
				var n = this;
				e.bind("change", function ()
				{
					n._change()
				}), e.bind("reset", function ()
				{
					n._reset()
				}), this._syncWithDataSource(), this.setViewSize(t)
			},
			setViewSize: function (e)
			{
				this.viewSize = e, this._recalculate()
			},
			at: function (e)
			{
				var r = this.pageSize,
                    n = !0;
				return e >= this.total() ? (this.trigger("endreached", {
					index: e
				}), null) : this.useRanges ? this.useRanges ? ((e < this.dataOffset || e >= this.skip + r) && (n = this.range(Math.floor(e / r) * r)), e === this.prefetchThreshold && this._prefetch(), e === this.midPageThreshold ? this.range(this.nextMidRange, !0) : e === this.nextPageThreshold ? this.range(this.nextFullRange) : e === this.pullBackThreshold && this.range(this.offset === this.skip ? this.previousMidRange : this.previousFullRange), n ? this.dataSource.at(e - this.dataOffset) : (this.trigger("endreached", {
					index: e
				}), null)) : t : this.dataSource.view()[e]
			},
			indexOf: function (e)
			{
				return this.dataSource.data().indexOf(e) + this.dataOffset
			},
			total: function ()
			{
				return parseInt(this.dataSource.total(), 10)
			},
			next: function ()
			{
				var e = this,
                    t = e.pageSize,
                    r = e.skip - e.viewSize + t,
                    n = Le.max(Le.floor(r / t), 0) * t;
				this.offset = r, this.dataSource.prefetch(n, t, function ()
				{
					e._goToRange(r, !0)
				})
			},
			range: function (e, t)
			{
				if (this.offset === e) return !0;
				var r = this,
                    n = this.pageSize,
                    i = Le.max(Le.floor(e / n), 0) * n,
                    a = this.dataSource;
				return t && (i += n), a.inRange(e, n) ? (this.offset = e, this._recalculate(), this._goToRange(e), !0) : !this.prefetch || (a.prefetch(i, n, function ()
				{
					r.offset = e, r._recalculate(), r._goToRange(e, !0)
				}), !1)
			},
			syncDataSource: function ()
			{
				var e = this.offset;
				this.offset = null, this.range(e)
			},
			destroy: function ()
			{
				this.unbind()
			},
			_prefetch: function ()
			{
				var e = this,
                    t = this.pageSize,
                    r = this.skip + t,
                    n = this.dataSource;
				n.inRange(r, t) || this._prefetching || !this.prefetch || (this._prefetching = !0, this.trigger("prefetching", {
					skip: r,
					take: t
				}), n.prefetch(r, t, function ()
				{
					e._prefetching = !1, e.trigger("prefetched", {
						skip: r,
						take: t
					})
				}))
			},
			_goToRange: function (e, t)
			{
				this.offset === e && (this.dataOffset = e, this._expanding = t, this.dataSource.range(e, this.pageSize), this.dataSource.enableRequestsInProgress())
			},
			_reset: function ()
			{
				this._syncPending = !0
			},
			_change: function ()
			{
				var e = this.dataSource;
				this.length = this.useRanges ? e.lastRange().end : e.view().length, this._syncPending && (this._syncWithDataSource(), this._recalculate(), this._syncPending = !1, this.trigger("reset", {
					offset: this.offset
				})), this.trigger("resize"), this._expanding && this.trigger("expand"), delete this._expanding
			},
			_syncWithDataSource: function ()
			{
				var e = this.dataSource;
				this._firstItemUid = e.firstItemUid(), this.dataOffset = this.offset = e.skip() || 0, this.pageSize = e.pageSize(), this.useRanges = e.options.serverPaging
			},
			_recalculate: function ()
			{
				var e = this.pageSize,
                    t = this.offset,
                    r = this.viewSize,
                    n = Math.ceil(t / e) * e;
				this.skip = n, this.midPageThreshold = n + e - 1, this.nextPageThreshold = n + r - 1, this.prefetchThreshold = n + Math.floor(e / 3 * 2), this.pullBackThreshold = this.offset - 1, this.nextMidRange = n + e - r, this.nextFullRange = n, this.previousMidRange = t - r, this.previousFullRange = n - e
			}
		}), ue = me.Observable.extend({
			init: function (e, t)
			{
				var r = this;
				me.Observable.fn.init.call(r), this.dataSource = e, this.batchSize = t, this._total = 0, this.buffer = new oe(e, 3 * t), this.buffer.bind({
					endreached: function (e)
					{
						r.trigger("endreached", {
							index: e.index
						})
					},
					prefetching: function (e)
					{
						r.trigger("prefetching", {
							skip: e.skip,
							take: e.take
						})
					},
					prefetched: function (e)
					{
						r.trigger("prefetched", {
							skip: e.skip,
							take: e.take
						})
					},
					reset: function ()
					{
						r._total = 0, r.trigger("reset")
					},
					resize: function ()
					{
						r._total = Math.ceil(this.length / r.batchSize), r.trigger("resize", {
							total: r.total(),
							offset: this.offset
						})
					}
				})
			},
			syncDataSource: function ()
			{
				this.buffer.syncDataSource()
			},
			at: function (e)
			{
				var t, r, n = this.buffer,
                    i = e * this.batchSize,
                    a = this.batchSize,
                    s = [];
				for (n.offset > i && n.at(n.offset - 1), r = 0; r < a && (t = n.at(i + r), null !== t) ; r++) s.push(t);
				return s
			},
			total: function ()
			{
				return this._total
			},
			destroy: function ()
			{
				this.buffer.destroy(), this.unbind()
			}
		}), le(!0, me.data, {
			readers: {
				json: re
			},
			Query: a,
			DataSource: ne,
			HierarchicalDataSource: se,
			Node: ae,
			ObservableObject: H,
			ObservableArray: Ye,
			LazyObservableArray: U,
			LocalTransport: Z,
			RemoteTransport: ee,
			Cache: te,
			DataReader: re,
			Model: W,
			Buffer: oe,
			BatchBuffer: ue
		})
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, r)
{
	(r || t)()
});;
! function (e, define)
{
	define("kendo.listview.min", ["kendo.data.min", "kendo.editable.min", "kendo.selectable.min"], e)
}(function ()
{
	return function (e, t)
	{
		var a = window.kendo,
            n = "change",
            i = "cancel",
            r = "dataBound",
            l = "dataBinding",
            o = a.ui.Widget,
            s = a.keys,
            d = ">*:not(.k-loading-mask)",
            c = "progress",
            u = "error",
            m = "k-state-focused",
            f = "k-state-selected",
            p = "k-edit-item",
            g = "edit",
            h = "remove",
            _ = "save",
            v = "click",
            b = ".kendoListView",
            S = e.proxy,
            E = a._activeElement,
            w = a.ui.progress,
            k = a.data.DataSource,
            y = a.ui.DataBoundWidget.extend({
            	init: function (t, n)
            	{
            		var i = this;
            		n = e.isArray(n) ? {
            			dataSource: n
            		} : n, o.fn.init.call(i, t, n), n = i.options, i.wrapper = t = i.element, t[0].id && (i._itemId = t[0].id + "_lv_active"), i._element(), i._dataSource(), i._templates(), i._navigatable(), i._selectable(), i._pageable(), i._crudHandlers(), i.options.autoBind && i.dataSource.fetch(), a.notify(i)
            	},
            	events: [n, i, l, r, g, h, _],
            	options: {
            		name: "ListView",
            		autoBind: !0,
            		selectable: !1,
            		navigatable: !1,
            		template: "",
            		altTemplate: "",
            		editTemplate: ""
            	},
            	setOptions: function (e)
            	{
            		o.fn.setOptions.call(this, e), this._templates(), this.selectable && (this.selectable.destroy(), this.selectable = null), this._selectable()
            	},
            	_templates: function ()
            	{
            		var e = this.options;
            		this.template = a.template(e.template || ""), this.altTemplate = a.template(e.altTemplate || e.template), this.editTemplate = a.template(e.editTemplate || "")
            	},
            	_item: function (e)
            	{
            		return this.element.children()[e]()
            	},
            	items: function ()
            	{
            		return this.element.children()
            	},
            	dataItem: function (t)
            	{
            		var n = a.attr("uid"),
                        i = e(t).closest("[" + n + "]").attr(n);
            		return this.dataSource.getByUid(i)
            	},
            	setDataSource: function (e)
            	{
            		this.options.dataSource = e, this._dataSource(), this.options.autoBind && e.fetch()
            	},
            	_unbindDataSource: function ()
            	{
            		var e = this;
            		e.dataSource.unbind(n, e._refreshHandler).unbind(c, e._progressHandler).unbind(u, e._errorHandler)
            	},
            	_dataSource: function ()
            	{
            		var e = this;
            		e.dataSource && e._refreshHandler ? e._unbindDataSource() : (e._refreshHandler = S(e.refresh, e), e._progressHandler = S(e._progress, e), e._errorHandler = S(e._error, e)), e.dataSource = k.create(e.options.dataSource).bind(n, e._refreshHandler).bind(c, e._progressHandler).bind(u, e._errorHandler)
            	},
            	_progress: function ()
            	{
            		w(this.element, !0)
            	},
            	_error: function ()
            	{
            		w(this.element, !1)
            	},
            	_element: function ()
            	{
            		this.element.addClass("k-widget k-listview").attr("role", "listbox")
            	},
            	refresh: function (e)
            	{
            		var n, i, o, s, d, c = this,
                        u = c.dataSource.view(),
                        m = "",
                        f = c.template,
                        p = c.altTemplate,
                        g = E();
            		if (e = e || {}, "itemchange" === e.action) return c._hasBindingTarget() || c.editable || (n = e.items[0], o = c.items().filter("[" + a.attr("uid") + "=" + n.uid + "]"), o.length > 0 && (s = o.index(), c.angular("cleanup", function ()
            		{
            			return {
            				elements: [o]
            			}
            		}), o.replaceWith(f(n)), o = c.items().eq(s), o.attr(a.attr("uid"), n.uid), c.angular("compile", function ()
            		{
            			return {
            				elements: [o],
            				data: [{
            					dataItem: n
            				}]
            			}
            		}), c.trigger("itemChange", {
            			item: o,
            			data: n
            		}))), t;
            		if (!c.trigger(l, {
            			action: e.action || "rebind",
            			items: e.items,
            			index: e.index
            		})) {
            			for (c._angularItems("cleanup"), c._destroyEditable(), s = 0, d = u.length; s < d; s++) m += s % 2 ? p(u[s]) : f(u[s]);
            			for (c.element.html(m), i = c.items(), s = 0, d = u.length; s < d; s++) i.eq(s).attr(a.attr("uid"), u[s].uid).attr("role", "option").attr("aria-selected", "false");
            			c.element[0] === g && c.options.navigatable && c.current(i.eq(0)), c._angularItems("compile"), c.trigger(r)
            		}
            	},
            	_pageable: function ()
            	{
            		var t, n, i = this,
                        r = i.options.pageable;
            		e.isPlainObject(r) && (n = r.pagerId, t = e.extend({}, r, {
            			dataSource: i.dataSource,
            			pagerId: null
            		}), i.pager = new a.ui.Pager(e("#" + n), t))
            	},
            	_selectable: function ()
            	{
            		var e, i, r = this,
                        l = r.options.selectable,
                        o = r.options.navigatable;
            		l && (e = a.ui.Selectable.parseOptions(l).multiple, r.selectable = new a.ui.Selectable(r.element, {
            			aria: !0,
            			multiple: e,
            			filter: d,
            			change: function ()
            			{
            				r.trigger(n)
            			}
            		}), o && r.element.on("keydown" + b, function (a)
            		{
            			if (a.keyCode === s.SPACEBAR) {
            				if (i = r.current(), a.target == a.currentTarget && a.preventDefault(), e)
            					if (a.ctrlKey) {
            						if (i && i.hasClass(f)) return i.removeClass(f), t
            					} else r.selectable.clear();
            				else r.selectable.clear();
            				r.selectable.value(i)
            			}
            		}))
            	},
            	current: function (e)
            	{
            		var a = this,
                        n = a.element,
                        i = a._current,
                        r = a._itemId;
            		return e === t ? i : (i && i[0] && (i[0].id === r && i.removeAttr("id"), i.removeClass(m), n.removeAttr("aria-activedescendant")), e && e[0] && (r = e[0].id || r, a._scrollTo(e[0]), n.attr("aria-activedescendant", r), e.addClass(m).attr("id", r)), a._current = e, t)
            	},
            	_scrollTo: function (t)
            	{
            		var a, n, i = this,
                        r = !1,
                        l = "scroll";
            		"auto" == i.wrapper.css("overflow") || i.wrapper.css("overflow") == l ? a = i.wrapper[0] : (a = window, r = !0), n = function (n, i)
            		{
            			var o = r ? e(t).offset()[n.toLowerCase()] : t["offset" + n],
                            s = t["client" + i],
                            d = e(a)[l + n](),
                            c = e(a)[i.toLowerCase()]();
            			o + s > d + c ? e(a)[l + n](o + s - c) : o < d && e(a)[l + n](o)
            		}, n("Top", "Height"), n("Left", "Width")
            	},
            	_navigatable: function ()
            	{
            		var t = this,
                        n = t.options.navigatable,
                        i = t.element,
                        r = function (a)
                        {
                        	t.current(e(a.currentTarget)), e(a.target).is(":button,a,:input,a>.k-icon,textarea") || i.focus()
                        };
            		n && (t._tabindex(), i.on("focus" + b, function ()
            		{
            			var e = t._current;
            			e && e.is(":visible") || (e = t._item("first")), t.current(e)
            		}).on("focusout" + b, function ()
            		{
            			t._current && t._current.removeClass(m)
            		}).on("keydown" + b, function (n)
            		{
            			var r, l, o = n.keyCode,
                            d = t.current(),
                            c = e(n.target),
                            u = !c.is(":button,textarea,a,a>.t-icon,input"),
                            m = c.is(":text,:password"),
                            f = a.preventDefault,
                            g = i.find("." + p),
                            h = E();
            			if (!(!u && !m && s.ESC != o || m && s.ESC != o && s.ENTER != o))
            				if (s.UP === o || s.LEFT === o) d && (d = d.prev()), t.current(d && d[0] ? d : t._item("last")), f(n);
            				else if (s.DOWN === o || s.RIGHT === o) d && (d = d.next()), t.current(d && d[0] ? d : t._item("first")), f(n);
            				else if (s.PAGEUP === o) t.current(null), t.dataSource.page(t.dataSource.page() - 1), f(n);
            				else if (s.PAGEDOWN === o) t.current(null), t.dataSource.page(t.dataSource.page() + 1), f(n);
            				else if (s.HOME === o) t.current(t._item("first")), f(n);
            				else if (s.END === o) t.current(t._item("last")), f(n);
            				else if (s.ENTER === o) 0 !== g.length && (u || m) ? (r = t.items().index(g), h && h.blur(), t.save(), l = function ()
            				{
            					t.element.trigger("focus"), t.current(t.items().eq(r))
            				}, t.one("dataBound", l)) : "" !== t.options.editTemplate && t.edit(d);
            				else if (s.ESC === o) {
            					if (g = i.find("." + p), 0 === g.length) return;
            					r = t.items().index(g), t.cancel(), t.element.trigger("focus"), t.current(t.items().eq(r))
            				}
            		}), i.on("mousedown" + b + " touchstart" + b, d, S(r, t)))
            	},
            	clearSelection: function ()
            	{
            		var e = this;
            		e.selectable.clear(), e.trigger(n)
            	},
            	select: function (a)
            	{
            		var n = this,
                        i = n.selectable;
            		return a = e(a), a.length ? (i.options.multiple || (i.clear(), a = a.first()), i.value(a), t) : i.value()
            	},
            	_destroyEditable: function ()
            	{
            		var e = this;
            		e.editable && (e.editable.destroy(), delete e.editable)
            	},
            	_modelFromElement: function (e)
            	{
            		var t = e.attr(a.attr("uid"));
            		return this.dataSource.getByUid(t)
            	},
            	_closeEditable: function ()
            	{
            		var e, t, n, i = this,
                        r = i.editable,
                        l = i.template;
            		return r && (r.element.index() % 2 && (l = i.altTemplate), i.angular("cleanup", function ()
            		{
            			return {
            				elements: [r.element]
            			}
            		}), e = i._modelFromElement(r.element), i._destroyEditable(), n = r.element.index(), r.element.replaceWith(l(e)), t = i.items().eq(n), t.attr(a.attr("uid"), e.uid), i._hasBindingTarget() && a.bind(t, e), i.angular("compile", function ()
            		{
            			return {
            				elements: [t],
            				data: [{
            					dataItem: e
            				}]
            			}
            		})), !0
            	},
            	edit: function (e)
            	{
            		var t, n, i = this,
                        r = i._modelFromElement(e),
                        l = r.uid;
            		i.cancel(), e = i.items().filter("[" + a.attr("uid") + "=" + l + "]"), n = e.index(), e.replaceWith(i.editTemplate(r)), t = i.items().eq(n).addClass(p).attr(a.attr("uid"), r.uid), i.editable = t.kendoEditable({
            			model: r,
            			clearContainer: !1,
            			errorTemplate: !1,
            			target: i
            		}).data("kendoEditable"), i.trigger(g, {
            			model: r,
            			item: t
            		})
            	},
            	save: function ()
            	{
            		var e, t, a = this,
                        n = a.editable;
            		n && (t = n.element, e = a._modelFromElement(t), n.end() && !a.trigger(_, {
            			model: e,
            			item: t
            		}) && (a._closeEditable(), a.dataSource.sync()))
            	},
            	remove: function (e)
            	{
            		var t = this,
                        a = t.dataSource,
                        n = t._modelFromElement(e);
            		t.editable && (a.cancelChanges(t._modelFromElement(t.editable.element)), t._closeEditable()), t.trigger(h, {
            			model: n,
            			item: e
            		}) || (e.hide(), a.remove(n), a.sync())
            	},
            	add: function ()
            	{
            		var e, t = this,
                        a = t.dataSource,
                        n = a.indexOf((a.view() || [])[0]);
            		n < 0 && (n = 0), t.cancel(), e = a.insert(n, {}), t.edit(t.element.find("[data-uid='" + e.uid + "']"))
            	},
            	cancel: function ()
            	{
            		var e, t, a = this,
                        n = a.dataSource;
            		a.editable && (e = a.editable.element, t = a._modelFromElement(e), a.trigger(i, {
            			model: t,
            			container: e
            		}) || (n.cancelChanges(t), a._closeEditable()))
            	},
            	_crudHandlers: function ()
            	{
            		var t = this,
                        n = v + b;
            		t.element.on(n, ".k-edit-button", function (n)
            		{
            			var i = e(this).closest("[" + a.attr("uid") + "]");
            			t.edit(i), n.preventDefault()
            		}), t.element.on(n, ".k-delete-button", function (n)
            		{
            			var i = e(this).closest("[" + a.attr("uid") + "]");
            			t.remove(i), n.preventDefault()
            		}), t.element.on(n, ".k-update-button", function (e)
            		{
            			t.save(), e.preventDefault()
            		}), t.element.on(n, ".k-cancel-button", function (e)
            		{
            			t.cancel(), e.preventDefault()
            		})
            	},
            	destroy: function ()
            	{
            		var e = this;
            		o.fn.destroy.call(e), e._unbindDataSource(), e._destroyEditable(), e.element.off(b), e.pager && e.pager.destroy(), a.destroy(e.element)
            	}
            });
		a.ui.plugin(y)
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, a)
{
	(a || t)()
});;
! function (e, define)
{
	define("kendo.popup.min", ["kendo.core.min"], e)
}(function ()
{
	return function (e, t)
	{
		function o(t, o)
		{
			return !(!t || !o) && (t === o || e.contains(t, o))
		}
		var n = window.kendo,
            i = n.ui,
            s = i.Widget,
            r = n.support,
            a = n.getOffset,
            l = n._outerWidth,
            p = n._outerHeight,
            d = "open",
            c = "close",
            f = "deactivate",
            u = "activate",
            m = "center",
            h = "left",
            g = "right",
            w = "top",
            v = "bottom",
            _ = "absolute",
            k = "hidden",
            y = "body",
            z = "location",
            b = "position",
            C = "visible",
            x = "effects",
            T = "k-state-active",
            P = "k-state-border",
            E = /k-state-border-(\w+)/,
            S = ".k-picker-wrap, .k-dropdown-wrap, .k-link",
            O = "down",
            R = e(document.documentElement),
            I = e(window),
            A = "scroll",
            D = r.transitions.css,
            H = D + "transform",
            L = e.extend,
            W = ".kendoPopup",
            j = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"],
            M = s.extend({
            	init: function (t, o)
            	{
            		var i, a = this;
            		o = o || {}, o.isRtl && (o.origin = o.origin || v + " " + g, o.position = o.position || w + " " + g), s.fn.init.call(a, t, o), t = a.element, o = a.options, a.collisions = o.collision ? o.collision.split(" ") : [], a.downEvent = n.applyEventMap(O, n.guid()), 1 === a.collisions.length && a.collisions.push(a.collisions[0]), i = e(a.options.anchor).closest(".k-popup,.k-group").filter(":not([class^=km-])"), o.appendTo = e(e(o.appendTo)[0] || i[0] || y), a.element.hide().addClass("k-popup k-group k-reset").toggleClass("k-rtl", !!o.isRtl).css({
            			position: _
            		}).appendTo(o.appendTo).on("mouseenter" + W, function ()
            		{
            			a._hovered = !0
            		}).on("mouseleave" + W, function ()
            		{
            			a._hovered = !1
            		}), a.wrapper = e(), o.animation === !1 && (o.animation = {
            			open: {
            				effects: {}
            			},
            			close: {
            				hide: !0,
            				effects: {}
            			}
            		}), L(o.animation.open, {
            			complete: function ()
            			{
            				a.wrapper.css({
            					overflow: C
            				}), a._activated = !0, a._trigger(u)
            			}
            		}), L(o.animation.close, {
            			complete: function ()
            			{
            				a._animationClose()
            			}
            		}), a._mousedownProxy = function (e)
            		{
            			a._mousedown(e)
            		}, a._resizeProxy = r.mobileOS.android ? function (e)
            		{
            			setTimeout(function ()
            			{
            				a._resize(e)
            			}, 600)
            		} : function (e)
            		{
            			a._resize(e)
            		}, o.toggleTarget && e(o.toggleTarget).on(o.toggleEvent + W, e.proxy(a.toggle, a))
            	},
            	events: [d, u, c, f],
            	options: {
            		name: "Popup",
            		toggleEvent: "click",
            		origin: v + " " + h,
            		position: w + " " + h,
            		anchor: y,
            		appendTo: null,
            		collision: "flip fit",
            		viewport: window,
            		copyAnchorStyles: !0,
            		autosize: !1,
            		modal: !1,
            		adjustSize: {
            			width: 0,
            			height: 0
            		},
            		animation: {
            			open: {
            				effects: "slideIn:down",
            				transition: !0,
            				duration: 200
            			},
            			close: {
            				duration: 100,
            				hide: !0
            			}
            		}
            	},
            	_animationClose: function ()
            	{
            		var e = this,
                        t = e.wrapper.data(z);
            		e.wrapper.hide(), t && e.wrapper.css(t), e.options.anchor != y && e._hideDirClass(), e._closing = !1, e._trigger(f)
            	},
            	destroy: function ()
            	{
            		var t, o = this,
                        i = o.options,
                        r = o.element.off(W);
            		s.fn.destroy.call(o), i.toggleTarget && e(i.toggleTarget).off(W), i.modal || (R.unbind(o.downEvent, o._mousedownProxy), o._toggleResize(!1)), n.destroy(o.element.children()), r.removeData(), i.appendTo[0] === document.body && (t = r.parent(".k-animation-container"), t[0] ? t.remove() : r.remove())
            	},
            	open: function (t, o)
            	{
            		var i, s, a = this,
                        l = {
                        	isFixed: !isNaN(parseInt(o, 10)),
                        	x: t,
                        	y: o
                        },
                        p = a.element,
                        c = a.options,
                        f = e(c.anchor),
                        u = p[0] && p.hasClass("km-widget");
            		if (!a.visible()) {
            			if (c.copyAnchorStyles && (u && "font-size" == j[0] && j.shift(), p.css(n.getComputedStyles(f[0], j))), p.data("animating") || a._trigger(d)) return;
            			a._activated = !1, c.modal || (R.unbind(a.downEvent, a._mousedownProxy).bind(a.downEvent, a._mousedownProxy), a._toggleResize(!1), a._toggleResize(!0)), a.wrapper = s = n.wrap(p, c.autosize).css({
            				overflow: k,
            				display: "block",
            				position: _
            			}), r.mobileOS.android && s.css(H, "translatez(0)"), s.css(b), e(c.appendTo)[0] == document.body && s.css(w, "-10000px"), a.flipped = a._position(l), i = a._openAnimation(), c.anchor != y && a._showDirClass(i), p.data(x, i.effects).kendoStop(!0).kendoAnimate(i)
            		}
            	},
            	_openAnimation: function ()
            	{
            		var e = L(!0, {}, this.options.animation.open);
            		return e.effects = n.parseEffects(e.effects, this.flipped), e
            	},
            	_hideDirClass: function ()
            	{
            		var t = e(this.options.anchor),
                        o = ((t.attr("class") || "").match(E) || ["", "down"])[1],
                        i = P + "-" + o;
            		t.removeClass(i).children(S).removeClass(T).removeClass(i), this.element.removeClass(P + "-" + n.directions[o].reverse)
            	},
            	_showDirClass: function (t)
            	{
            		var o = t.effects.slideIn ? t.effects.slideIn.direction : "down",
                        i = P + "-" + o;
            		e(this.options.anchor).addClass(i).children(S).addClass(T).addClass(i), this.element.addClass(P + "-" + n.directions[o].reverse)
            	},
            	position: function ()
            	{
            		this.visible() && (this.flipped = this._position())
            	},
            	toggle: function ()
            	{
            		var e = this;
            		e[e.visible() ? c : d]()
            	},
            	visible: function ()
            	{
            		return this.element.is(":" + C)
            	},
            	close: function (o)
            	{
            		var i, s, r, a, l = this,
                        p = l.options;
            		if (l.visible()) {
            			if (i = l.wrapper[0] ? l.wrapper : n.wrap(l.element).hide(), l._toggleResize(!1), l._closing || l._trigger(c)) return l._toggleResize(!0), t;
            			l.element.find(".k-popup").each(function ()
            			{
            				var t = e(this),
                                n = t.data("kendoPopup");
            				n && n.close(o)
            			}), R.unbind(l.downEvent, l._mousedownProxy), o ? s = {
            				hide: !0,
            				effects: {}
            			} : (s = L(!0, {}, p.animation.close), r = l.element.data(x), a = s.effects, !a && !n.size(a) && r && n.size(r) && (s.effects = r, s.reverse = !0), l._closing = !0), l.element.kendoStop(!0), i.css({
            				overflow: k
            			}), l.element.kendoAnimate(s), o && l._animationClose()
            		}
            	},
            	_trigger: function (e)
            	{
            		return this.trigger(e, {
            			type: e
            		})
            	},
            	_resize: function (e)
            	{
            		var t = this;
            		r.resize.indexOf(e.type) !== -1 ? (clearTimeout(t._resizeTimeout), t._resizeTimeout = setTimeout(function ()
            		{
            			t._position(), t._resizeTimeout = null
            		}, 50)) : (!t._hovered || t._activated && t.element.hasClass("k-list-container")) && t.close()
            	},
            	_toggleResize: function (e)
            	{
            		var t = e ? "on" : "off",
                        o = r.resize;
            		r.mobileOS.ios || r.mobileOS.android || (o += " " + A), this._scrollableParents()[t](A, this._resizeProxy), I[t](o, this._resizeProxy)
            	},
            	_mousedown: function (t)
            	{
            		var i = this,
                        s = i.element[0],
                        r = i.options,
                        a = e(r.anchor)[0],
                        l = r.toggleTarget,
                        p = n.eventTarget(t),
                        d = e(p).closest(".k-popup"),
                        c = d.parent().parent(".km-shim").length;
            		d = d[0], !c && d && d !== i.element[0] || "popover" !== e(t.target).closest("a").data("rel") && (o(s, p) || o(a, p) || l && o(e(l)[0], p) || i.close())
            	},
            	_fit: function (e, t, o)
            	{
            		var n = 0;
            		return e + t > o && (n = o - (e + t)), e < 0 && (n = -e), n
            	},
            	_flip: function (e, t, o, n, i, s, r)
            	{
            		var a = 0;
            		return r = r || t, s !== i && s !== m && i !== m && (e + r > n && (a += -(o + t)), e + a < 0 && (a += o + t)), a
            	},
            	_scrollableParents: function ()
            	{
            		return e(this.options.anchor).parentsUntil("body").filter(function (e, t)
            		{
            			return n.isScrollable(t)
            		})
            	},
            	_position: function (t)
            	{
            		var o, i, s, d, c, f, u, m, h, g, w, v, k, y, C, x, T = this,
                        P = T.element,
                        E = T.wrapper,
                        S = T.options,
                        O = e(S.viewport),
                        R = r.zoomLevel(),
                        I = !!(O[0] == window && window.innerWidth && R <= 1.02),
                        A = e(S.anchor),
                        D = S.origin.toLowerCase().split(" "),
                        H = S.position.toLowerCase().split(" "),
                        W = T.collisions,
                        j = 10002,
                        M = 0,
                        F = document.documentElement;
            		if (c = S.viewport === window ? {
            			top: window.pageYOffset || document.documentElement.scrollTop || 0,
            			left: window.pageXOffset || document.documentElement.scrollLeft || 0
            		} : O.offset(), I ? (f = window.innerWidth, u = window.innerHeight) : (f = O.width(), u = O.height()), I && F.scrollHeight - F.clientHeight > 0 && (f -= n.support.scrollbar()), o = A.parents().filter(E.siblings()), o[0])
            			if (s = Math.max(+o.css("zIndex"), 0)) j = s + 10;
            			else
            				for (i = A.parentsUntil(o), d = i.length; M < d; M++) s = +e(i[M]).css("zIndex"), s && j < s && (j = s + 10);
            		return E.css("zIndex", j), E.css(t && t.isFixed ? {
            			left: t.x,
            			top: t.y
            		} : T._align(D, H)), m = a(E, b, A[0] === E.offsetParent()[0]), h = a(E), g = A.offsetParent().parent(".k-animation-container,.k-popup,.k-group"), g.length && (m = a(E, b, !0), h = a(E)), h.top -= c.top, h.left -= c.left, T.wrapper.data(z) || E.data(z, L({}, m)), w = L({}, h), v = L({}, m), k = S.adjustSize, "fit" === W[0] && (v.top += T._fit(w.top, p(E) + k.height, u / R)), "fit" === W[1] && (v.left += T._fit(w.left, l(E) + k.width, f / R)), y = L({}, v), C = p(P), x = p(E), !E.height() && C && (x += C), "flip" === W[0] && (v.top += T._flip(w.top, C, p(A), u / R, D[0], H[0], x)), "flip" === W[1] && (v.left += T._flip(w.left, l(P), l(A), f / R, D[1], H[1], l(E))), P.css(b, _), E.css(v), v.left != y.left || v.top != y.top
            	},
            	_align: function (t, o)
            	{
            		var n, i = this,
                        s = i.wrapper,
                        r = e(i.options.anchor),
                        d = t[0],
                        c = t[1],
                        f = o[0],
                        u = o[1],
                        h = a(r),
                        w = e(i.options.appendTo),
                        _ = l(s),
                        k = p(s),
                        y = l(r),
                        z = p(r),
                        b = h.top,
                        C = h.left,
                        x = Math.round;
            		return w[0] != document.body && (n = a(w), b -= n.top, C -= n.left), d === v && (b += z), d === m && (b += x(z / 2)), f === v && (b -= k), f === m && (b -= x(k / 2)), c === g && (C += y), c === m && (C += x(y / 2)), u === g && (C -= _), u === m && (C -= x(_ / 2)), {
            			top: b,
            			left: C
            		}
            	}
            });
		i.plugin(M)
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, o)
{
	(o || t)()
});;
! function (e, define)
{
	define("kendo.list.min", ["kendo.data.min", "kendo.popup.min"], e)
}(function ()
{
	return function (e, t)
	{
		function i(e, i)
		{
			return e !== t && "" !== e && null !== e && ("boolean" === i ? e = !!e : "number" === i ? e = +e : "string" === i && (e = "" + e)), e
		}

		function n(e)
		{
			return e[e.length - 1]
		}

		function a(e)
		{
			var t = e.selectedIndex;
			return t > -1 ? e.options[t] : {}
		}

		function s(e, t)
		{
			var i, n, a, s, r = t.length,
                l = e.length,
                o = [],
                u = [];
			if (l)
				for (a = 0; a < l; a++) {
					for (i = e[a], n = !1, s = 0; s < r; s++)
						if (i === t[s]) {
							n = !0, o.push({
								index: a,
								item: i
							});
							break
						}
					n || u.push(i)
				}
			return {
				changed: o,
				unchanged: u
			}
		}

		function r(t, i)
		{
			var n, a = !1;
			return t.filters && (n = e.grep(t.filters, function (e)
			{
				return a = r(e, i), e.filters ? e.filters.length : e.field != i
			}), a || t.filters.length === n.length || (a = !0), t.filters = n), a
		}
		var l, o, u = window.kendo,
            d = u.ui,
            c = u._outerWidth,
            h = u._outerHeight,
            f = d.Widget,
            _ = u.keys,
            p = u.support,
            g = u.htmlEncode,
            v = u._activeElement,
            m = u.data.ObservableArray,
            b = "id",
            x = "change",
            I = "k-state-focused",
            S = "k-state-hover",
            w = "k-i-loading",
            y = "k-loading-hidden",
            T = "open",
            F = "close",
            k = "cascade",
            V = "select",
            D = "selected",
            C = "requestStart",
            H = "requestEnd",
            B = "width",
            E = e.extend,
            P = e.proxy,
            q = e.isArray,
            A = p.browser,
            G = A.msie,
            W = G && A.version < 9,
            L = /"/g,
            O = {
            	ComboBox: "DropDownList",
            	DropDownList: "ComboBox"
            },
            N = u.ui.DataBoundWidget.extend({
            	init: function (t, i)
            	{
            		var n, a = this,
                        s = a.ns;
            		f.fn.init.call(a, t, i), t = a.element, i = a.options, a._isSelect = t.is(V), a._isSelect && a.element[0].length && (i.dataSource || (i.dataTextField = i.dataTextField || "text", i.dataValueField = i.dataValueField || "value")), a.ul = e('<ul unselectable="on" class="k-list k-reset"/>').attr({
            			tabIndex: -1,
            			"aria-hidden": !0
            		}), a.list = e("<div class='k-list-container'/>").append(a.ul).on("mousedown" + s, P(a._listMousedown, a)), n = t.attr(b), n && (a.list.attr(b, n + "-list"), a.ul.attr(b, n + "_listbox")), a._header(), a._noData(), a._footer(), a._accessors(), a._initValue()
            	},
            	options: {
            		valuePrimitive: !1,
            		footerTemplate: "",
            		headerTemplate: "",
            		noDataTemplate: "No data found."
            	},
            	setOptions: function (e)
            	{
            		f.fn.setOptions.call(this, e), e && e.enable !== t && (e.enabled = e.enable), this._header(), this._noData(), this._footer(), this._renderFooter(), this._renderNoData()
            	},
            	focus: function ()
            	{
            		this._focused.focus()
            	},
            	readonly: function (e)
            	{
            		this._editable({
            			readonly: e === t || e,
            			disable: !1
            		})
            	},
            	enable: function (e)
            	{
            		this._editable({
            			readonly: !1,
            			disable: !(e = e === t || e)
            		})
            	},
            	_listOptions: function (t)
            	{
            		var i = this,
                        n = i.options,
                        a = n.virtual,
                        s = P(i._listBound, i);
            		return a = "object" == typeof a ? a : {}, t = e.extend({
            			autoBind: !1,
            			selectable: !0,
            			dataSource: i.dataSource,
            			click: P(i._click, i),
            			change: P(i._listChange, i),
            			activate: P(i._activateItem, i),
            			deactivate: P(i._deactivateItem, i),
            			dataBinding: function ()
            			{
            				i.trigger("dataBinding")
            			},
            			dataBound: s,
            			height: n.height,
            			dataValueField: n.dataValueField,
            			dataTextField: n.dataTextField,
            			groupTemplate: n.groupTemplate,
            			fixedGroupTemplate: n.fixedGroupTemplate,
            			template: n.template
            		}, t, a), t.template || (t.template = "#:" + u.expr(t.dataTextField, "data") + "#"), n.$angular && (t.$angular = n.$angular), t
            	},
            	_initList: function ()
            	{
            		var e = this,
                        t = e._listOptions({
                        	selectedItemChange: P(e._listChange, e)
                        });
            		e.listView = e.options.virtual ? new u.ui.VirtualList(e.ul, t) : new u.ui.StaticList(e.ul, t), e.listView.bind("listBound", P(e._listBound, e)), e._setListValue()
            	},
            	_setListValue: function (e)
            	{
            		e = e || this.options.value, e !== t && this.listView.value(e).done(P(this._updateSelectionState, this))
            	},
            	_updateSelectionState: e.noop,
            	_listMousedown: function (e)
            	{
            		this.filterInput && this.filterInput[0] === e.target || e.preventDefault()
            	},
            	_isFilterEnabled: function ()
            	{
            		var e = this.options.filter;
            		return e && "none" !== e
            	},
            	_hideClear: function ()
            	{
            		var e = this;
            		e._clear && this._clear.addClass(y)
            	},
            	_showClear: function ()
            	{
            		var e = this;
            		e._clear && this._clear.removeClass(y)
            	},
            	_clearValue: function ()
            	{
            		this.listView.value([]), this._clearText(), this._accessor(""), this._isFilterEnabled() && this._filter({
            			word: "",
            			open: !1
            		}), this._change()
            	},
            	_clearText: function ()
            	{
            		this.text("")
            	},
            	_clearFilter: function ()
            	{
            		this.options.virtual || this.listView.bound(!1), this._filterSource()
            	},
            	_filterSource: function (e, t)
            	{
            		var i, n = this,
                        a = n.options,
                        s = n.dataSource,
                        l = E({}, s.filter() || {}),
                        o = e || l.filters && l.filters.length && !e,
                        u = r(l, a.dataTextField);
            		(e || u) && n.trigger("filtering", {
            			filter: e
            		}) || (l = {
            			filters: l.filters || [],
            			logic: "and"
            		}, e && l.filters.push(e), n._cascading && this.listView.setDSFilter(l), i = E({}, {
            			page: o ? 1 : s.page(),
            			pageSize: o ? s.options.pageSize : s.pageSize(),
            			sort: s.sort(),
            			filter: s.filter(),
            			group: s.group(),
            			aggregate: s.aggregate()
            		}, {
            			filter: l
            		}), s[t ? "read" : "query"](s._mergeState(i)))
            	},
            	_angularElement: function (e, t)
            	{
            		e && this.angular(t, function ()
            		{
            			return {
            				elements: e
            			}
            		})
            	},
            	_noData: function ()
            	{
            		var i = e(this.noData),
                        n = this.options.noDataTemplate;
            		return this.angular("cleanup", function ()
            		{
            			return {
            				elements: i
            			}
            		}), u.destroy(i), i.remove(), n ? (this.noData = e('<div class="k-nodata" style="display:none"><div></div></div>').appendTo(this.list), this.noDataTemplate = "function" != typeof n ? u.template(n) : n, t) : (this.noData = null, t)
            	},
            	_renderNoData: function ()
            	{
            		var e = this.noData;
            		e && (this._angularElement(e, "cleanup"), e.children(":first").html(this.noDataTemplate({
            			instance: this
            		})), this._angularElement(e, "compile"))
            	},
            	_toggleNoData: function (t)
            	{
            		e(this.noData).toggle(t)
            	},
            	_footer: function ()
            	{
            		var i = e(this.footer),
                        n = this.options.footerTemplate;
            		return this._angularElement(i, "cleanup"), u.destroy(i), i.remove(), n ? (this.footer = e('<div class="k-footer"></div>').appendTo(this.list), this.footerTemplate = "function" != typeof n ? u.template(n) : n, t) : (this.footer = null, t)
            	},
            	_renderFooter: function ()
            	{
            		var e = this.footer;
            		e && (this._angularElement(e, "cleanup"), e.html(this.footerTemplate({
            			instance: this
            		})), this._angularElement(e, "compile"))
            	},
            	_header: function ()
            	{
            		var i, n = e(this.header),
                        a = this.options.headerTemplate;
            		return this._angularElement(n, "cleanup"), u.destroy(n), n.remove(), a ? (i = "function" != typeof a ? u.template(a) : a, n = e(i({})), this.header = n[0] ? n : null, this.list.prepend(n), this._angularElement(this.header, "compile"), t) : (this.header = null, t)
            	},
            	_allowOpening: function ()
            	{
            		return this.options.noDataTemplate || this.dataSource.flatView().length
            	},
            	_initValue: function ()
            	{
            		var e = this,
                        t = e.options.value;
            		null !== t ? e.element.val(t) : (t = e._accessor(), e.options.value = t), e._old = t
            	},
            	_ignoreCase: function ()
            	{
            		var e, t = this,
                        i = t.dataSource.reader.model;
            		i && i.fields && (e = i.fields[t.options.dataTextField], e && e.type && "string" !== e.type && (t.options.ignoreCase = !1))
            	},
            	_focus: function (e)
            	{
            		return this.listView.focus(e)
            	},
            	_filter: function (e)
            	{
            		var t = this,
                        i = t.options,
                        n = i.ignoreCase,
                        a = i.dataTextField,
                        s = {
                        	value: n ? e.word.toLowerCase() : e.word,
                        	field: a,
                        	operator: i.filter,
                        	ignoreCase: n
                        };
            		t._open = e.open, t._filterSource(s)
            	},
            	search: function (e)
            	{
            		var t = this.options;
            		e = "string" == typeof e ? e : this._inputValue(), clearTimeout(this._typingTimeout), (!t.enforceMinLength && !e.length || e.length >= t.minLength) && (this._state = "filter", this._isFilterEnabled() ? this._filter({
            			word: e,
            			open: !0
            		}) : this._searchByWord(e))
            	},
            	current: function (e)
            	{
            		return this._focus(e)
            	},
            	items: function ()
            	{
            		return this.ul[0].children
            	},
            	destroy: function ()
            	{
            		var e = this,
                        t = e.ns;
            		f.fn.destroy.call(e), e._unbindDataSource(), e.listView.destroy(), e.list.off(t), e.popup.destroy(), e._form && e._form.off("reset", e._resetHandler)
            	},
            	dataItem: function (i)
            	{
            		var n = this;
            		if (i === t) return n.listView.selectedDataItems()[0];
            		if ("number" != typeof i) {
            			if (n.options.virtual) return n.dataSource.getByUid(e(i).data("uid"));
            			i = e(n.items()).index(i)
            		}
            		return n.dataSource.flatView()[i]
            	},
            	_activateItem: function ()
            	{
            		var e = this.listView.focus();
            		e && this._focused.add(this.filterInput).attr("aria-activedescendant", e.attr("id"))
            	},
            	_deactivateItem: function ()
            	{
            		this._focused.add(this.filterInput).removeAttr("aria-activedescendant")
            	},
            	_accessors: function ()
            	{
            		var e = this,
                        t = e.element,
                        i = e.options,
                        n = u.getter,
                        a = t.attr(u.attr("text-field")),
                        s = t.attr(u.attr("value-field"));
            		!i.dataTextField && a && (i.dataTextField = a), !i.dataValueField && s && (i.dataValueField = s), e._text = n(i.dataTextField), e._value = n(i.dataValueField)
            	},
            	_aria: function (e)
            	{
            		var i = this,
                        n = i.options,
                        a = i._focused.add(i.filterInput);
            		n.suggest !== t && a.attr("aria-autocomplete", n.suggest ? "both" : "list"), e = e ? e + " " + i.ul[0].id : i.ul[0].id, a.attr("aria-owns", e), i.ul.attr("aria-live", i._isFilterEnabled() ? "polite" : "off")
            	},
            	_blur: function ()
            	{
            		var e = this;
            		e._change(), e.close()
            	},
            	_change: function ()
            	{
            		var e, n = this,
                        a = n.selectedIndex,
                        s = n.options.value,
                        r = n.value();
            		n._isSelect && !n.listView.bound() && s && (r = s), r !== i(n._old, typeof r) ? e = !0 : a !== t && a !== n._oldIndex && (e = !0), e && (n._old = r, n._oldIndex = a, n._typing || n.element.trigger(x), n.trigger(x)), n.typing = !1
            	},
            	_data: function ()
            	{
            		return this.dataSource.view()
            	},
            	_enable: function ()
            	{
            		var e = this,
                        i = e.options,
                        n = e.element.is("[disabled]");
            		i.enable !== t && (i.enabled = i.enable), !i.enabled || n ? e.enable(!1) : e.readonly(e.element.is("[readonly]"))
            	},
            	_dataValue: function (e)
            	{
            		var i = this._value(e);
            		return i === t && (i = this._text(e)), i
            	},
            	_offsetHeight: function ()
            	{
            		var t = 0,
                        i = this.listView.content.prevAll(":visible");
            		return i.each(function ()
            		{
            			var i = e(this);
            			t += h(i.hasClass("k-list-filter") ? i.children() : i)
            		}), t
            	},
            	_height: function (i)
            	{
            		var n, a, s, r = this,
                        l = r.list,
                        o = r.options.height,
                        u = r.popup.visible();
            		if (i || r.options.noDataTemplate) {
            			if (a = l.add(l.parent(".k-animation-container")).show(), !l.is(":visible")) return a.hide(), t;
            			o = r.listView.content[0].scrollHeight > o ? o : "auto", a.height(o), "auto" !== o && (n = r._offsetHeight(), s = h(e(r.footer)) || 0, o = o - n - s), r.listView.content.height(o), u || a.hide()
            		}
            		return o
            	},
            	_adjustListWidth: function ()
            	{
            		var e, t, i = this.list,
                        n = i[0].style.width,
                        a = this.wrapper;
            		if (i.data(B) || !n) return e = window.getComputedStyle ? window.getComputedStyle(a[0], null) : 0, t = parseFloat(e && e.width) || c(a), e && A.msie && (t += parseFloat(e.paddingLeft) + parseFloat(e.paddingRight) + parseFloat(e.borderLeftWidth) + parseFloat(e.borderRightWidth)), n = "border-box" !== i.css("box-sizing") ? t - (c(i) - i.width()) : t, i.css({
            			fontFamily: a.css("font-family"),
            			width: this.options.autoWidth ? "auto" : n,
            			minWidth: n
            		}).data(B, n), !0
            	},
            	_openHandler: function (e)
            	{
            		this._adjustListWidth(), this.trigger(T) ? e.preventDefault() : (this._focused.attr("aria-expanded", !0), this.ul.attr("aria-hidden", !1))
            	},
            	_closeHandler: function (e)
            	{
            		this.trigger(F) ? e.preventDefault() : (this._focused.attr("aria-expanded", !1), this.ul.attr("aria-hidden", !0))
            	},
            	_focusItem: function ()
            	{
            		var e = this.listView,
                        i = !e.focus(),
                        a = n(e.select());
            		a === t && this.options.highlightFirst && i && (a = 0), a !== t ? e.focus(a) : i && e.scrollToIndex(0)
            	},
            	_calculateGroupPadding: function (e)
            	{
            		var t = this.ul.children(".k-first:first"),
                        i = this.listView.content.prev(".k-group-header"),
                        n = 0;
            		i[0] && "none" !== i[0].style.display && ("auto" !== e && (n = u.support.scrollbar()), n += parseFloat(t.css("border-right-width"), 10) + parseFloat(t.children(".k-group").css("padding-right"), 10), i.css("padding-right", n))
            	},
            	_calculatePopupHeight: function (e)
            	{
            		var t = this._height(this.dataSource.flatView().length || e);
            		this._calculateGroupPadding(t)
            	},
            	_resizePopup: function (e)
            	{
            		this.options.virtual || (this.popup.element.is(":visible") ? this._calculatePopupHeight(e) : this.popup.one("open", function (e)
            		{
            			return P(function ()
            			{
            				this._calculatePopupHeight(e)
            			}, this)
            		}.call(this, e)))
            	},
            	_popup: function ()
            	{
            		var e = this;
            		e.popup = new d.Popup(e.list, E({}, e.options.popup, {
            			anchor: e.wrapper,
            			open: P(e._openHandler, e),
            			close: P(e._closeHandler, e),
            			animation: e.options.animation,
            			isRtl: p.isRtl(e.wrapper)
            		}))
            	},
            	_makeUnselectable: function ()
            	{
            		W && this.list.find("*").not(".k-textbox").attr("unselectable", "on")
            	},
            	_toggleHover: function (t)
            	{
            		e(t.currentTarget).toggleClass(S, "mouseenter" === t.type)
            	},
            	_toggle: function (e, i)
            	{
            		var n = this,
                        a = p.mobileOS && (p.touch || p.MSPointers || p.pointers);
            		e = e !== t ? e : !n.popup.visible(), i || a || n._focused[0] === v() || (n._prevent = !0, n._focused.focus(), n._prevent = !1), n[e ? T : F]()
            	},
            	_triggerCascade: function ()
            	{
            		var e = this;
            		e._cascadeTriggered && e._old === e.value() && e._oldIndex === e.selectedIndex || (e._cascadeTriggered = !0, e.trigger(k, {
            			userTriggered: e._userTriggered
            		}))
            	},
            	_triggerChange: function ()
            	{
            		this._valueBeforeCascade !== this.value() && this.trigger(x)
            	},
            	_unbindDataSource: function ()
            	{
            		var e = this;
            		e.dataSource.unbind(C, e._requestStartHandler).unbind(H, e._requestEndHandler).unbind("error", e._errorHandler)
            	},
            	requireValueMapper: function (e, t)
            	{
            		var i = (e.value instanceof Array ? e.value.length : e.value) || (t instanceof Array ? t.length : t);
            		if (i && e.virtual && "function" != typeof e.virtual.valueMapper) throw Error("ValueMapper is not provided while the value is being set. See http://docs.telerik.com/kendo-ui/controls/editors/combobox/virtualization#the-valuemapper-function")
            	}
            });
		E(N, {
			inArray: function (e, t)
			{
				var i, n, a = t.children;
				if (!e || e.parentNode !== t) return -1;
				for (i = 0, n = a.length; i < n; i++)
					if (e === a[i]) return i;
				return -1
			},
			unifyType: i
		}), u.ui.List = N, d.Select = N.extend({
			init: function (e, t)
			{
				N.fn.init.call(this, e, t), this._initial = this.element.val()
			},
			setDataSource: function (e)
			{
				var t, i = this;
				i.options.dataSource = e, i._dataSource(), i.listView.bound() && (i._initialIndex = null), i.listView.setDataSource(i.dataSource), i.options.autoBind && i.dataSource.fetch(), t = i._parentWidget(), t && i._cascadeSelect(t)
			},
			close: function ()
			{
				this.popup.close()
			},
			select: function (e)
			{
				var i = this;
				return e === t ? i.selectedIndex : i._select(e).done(function ()
				{
					i._old = i._accessor(), i._oldIndex = i.selectedIndex
				})
			},
			_accessor: function (e, t)
			{
				return this[this._isSelect ? "_accessorSelect" : "_accessorInput"](e, t)
			},
			_accessorInput: function (e)
			{
				var i = this.element[0];
				return e === t ? i.value : (null === e && (e = ""), i.value = e, t)
			},
			_accessorSelect: function (e, i)
			{
				var n, s = this.element[0];
				return e === t ? a(s).value || "" : (a(s).selected = !1, i === t && (i = -1), n = null !== e && "" !== e, n && i == -1 ? this._custom(e) : e ? s.value = e : s.selectedIndex = i, t)
			},
			_custom: function (t)
			{
				var i = this,
                    n = i.element,
                    a = i._customOption;
				a || (a = e("<option/>"), i._customOption = a, n.append(a)), a.text(t), a[0].selected = !0
			},
			_hideBusy: function ()
			{
				var e = this;
				clearTimeout(e._busy), e._arrow.removeClass(w), e._focused.attr("aria-busy", !1), e._busy = null, e._showClear()
			},
			_showBusy: function ()
			{
				var e = this;
				e._request = !0, e._busy || (e._busy = setTimeout(function ()
				{
					e._arrow && (e._focused.attr("aria-busy", !0), e._arrow.addClass(w), e._hideClear())
				}, 100))
			},
			_requestEnd: function ()
			{
				this._request = !1, this._hideBusy()
			},
			_dataSource: function ()
			{
				var t, i = this,
                    n = i.element,
                    a = i.options,
                    s = a.dataSource || {};
				s = e.isArray(s) ? {
					data: s
				} : s, i._isSelect && (t = n[0].selectedIndex, t > -1 && (a.index = t), s.select = n, s.fields = [{
					field: a.dataTextField
				}, {
					field: a.dataValueField
				}]), i.dataSource ? i._unbindDataSource() : (i._requestStartHandler = P(i._showBusy, i), i._requestEndHandler = P(i._requestEnd, i), i._errorHandler = P(i._hideBusy, i)), i.dataSource = u.data.DataSource.create(s).bind(C, i._requestStartHandler).bind(H, i._requestEndHandler).bind("error", i._errorHandler)
			},
			_firstItem: function ()
			{
				this.listView.focusFirst()
			},
			_lastItem: function ()
			{
				this.listView.focusLast()
			},
			_nextItem: function ()
			{
				this.listView.focusNext()
			},
			_prevItem: function ()
			{
				this.listView.focusPrev()
			},
			_move: function (e)
			{
				var i, n, a, s, r, l = this,
                    o = l.listView,
                    u = e.keyCode,
                    d = u === _.DOWN;
				if (u === _.UP || d) {
					if (e.altKey) l.toggle(d);
					else {
						if (!o.bound()) return l._fetch || (l.dataSource.one(x, function ()
						{
							l._fetch = !1, l._move(e)
						}), l._fetch = !0, l._filterSource()), e.preventDefault(), !0;
						if (a = l._focus(), l._fetch || a && !a.hasClass("k-state-selected") || (d ? (l._nextItem(), l._focus() || l._lastItem()) : (l._prevItem(), l._focus() || l._firstItem())), i = o.dataItemByIndex(o.getElementIndex(l._focus())), l.trigger(V, {
							dataItem: i,
							item: l._focus()
						})) return l._focus(a), t;
						l._select(l._focus(), !0).done(function ()
						{
							l.popup.visible() || l._blur()
						})
					}
					e.preventDefault(), n = !0
				} else if (u === _.ENTER || u === _.TAB) {
					if (l.popup.visible() && e.preventDefault(), a = l._focus(), i = l.dataItem(), l.popup.visible() || i && l.text() === l._text(i) || (a = null), s = l.filterInput && l.filterInput[0] === v(), a) {
						if (i = o.dataItemByIndex(o.getElementIndex(a)), l.trigger(V, {
							dataItem: i,
							item: a
						})) return;
						l._select(a)
					} else l.input && (l._accessor(l.input.val()), l.listView.value(l.input.val()));
					l._focusElement && l._focusElement(l.wrapper), s && u === _.TAB ? l.wrapper.focusout() : l._blur(), l.close(), n = !0
				} else u === _.ESC ? (l.popup.visible() && e.preventDefault(), l.close(), n = !0) : !l.popup.visible() || u !== _.PAGEDOWN && u !== _.PAGEUP || (e.preventDefault(), r = u === _.PAGEDOWN ? 1 : -1, o.scrollWith(r * o.screenHeight()), n = !0);
				return n
			},
			_fetchData: function ()
			{
				var e = this,
                    t = !!e.dataSource.view().length;
				e._request || e.options.cascadeFrom || e.listView.bound() || e._fetch || t || (e._fetch = !0, e.dataSource.fetch().done(function ()
				{
					e._fetch = !1
				}))
			},
			_options: function (e, i, n)
			{
				var s, r, l, o, u = this,
                    d = u.element,
                    c = d[0],
                    h = e.length,
                    f = "",
                    _ = 0;
				for (i && (f = i) ; _ < h; _++) s = "<option", r = e[_], l = u._text(r), o = u._value(r), o !== t && (o += "", o.indexOf('"') !== -1 && (o = o.replace(L, "&quot;")), s += ' value="' + o + '"'), s += ">", l !== t && (s += g(l)), s += "</option>", f += s;
				d.html(f), n !== t && (c.value = n, c.value && !n && (c.selectedIndex = -1)), c.selectedIndex !== -1 && (s = a(c), s && s.setAttribute(D, D))
			},
			_reset: function ()
			{
				var t = this,
                    i = t.element,
                    n = i.attr("form"),
                    a = n ? e("#" + n) : i.closest("form");
				a[0] && (t._resetHandler = function ()
				{
					setTimeout(function ()
					{
						t.value(t._initial)
					})
				}, t._form = a.on("reset", t._resetHandler))
			},
			_parentWidget: function ()
			{
				var t, i, n = this.options.name;
				if (this.options.cascadeFrom) return t = e("#" + this.options.cascadeFrom), i = t.data("kendo" + n), i || (i = t.data("kendo" + O[n])), i
			},
			_cascade: function ()
			{
				var e, t = this,
                    i = t.options,
                    n = i.cascadeFrom;
				if (n) {
					if (e = t._parentWidget(), !e) return;
					t._cascadeHandlerProxy = P(t._cascadeHandler, t), t._cascadeFilterRequests = [], i.autoBind = !1, e.bind("set", function ()
					{
						t.one("set", function (e)
						{
							t._selectedValue = e.value
						})
					}), e.first(k, t._cascadeHandlerProxy), e.listView.bound() ? (t._toggleCascadeOnFocus(), t._cascadeSelect(e)) : (e.one("dataBound", function ()
					{
						t._toggleCascadeOnFocus()
					}), e.value() || t.enable(!1))
				}
			},
			_toggleCascadeOnFocus: function ()
			{
				var e = this,
                    t = e._parentWidget(),
                    i = G ? "blur" : "focusout";
				t._focused.add(t.filterInput).bind("focus", function ()
				{
					t.unbind(k, e._cascadeHandlerProxy), t.first(x, e._cascadeHandlerProxy)
				}), t._focused.add(t.filterInput).bind(i, function ()
				{
					t.unbind(x, e._cascadeHandlerProxy), t.first(k, e._cascadeHandlerProxy)
				})
			},
			_cascadeHandler: function (e)
			{
				var t = this._parentWidget(),
                    i = this.value();
				this._userTriggered = e.userTriggered, this.listView.bound() && this._clearSelection(t, !0), this._cascadeSelect(t, i)
			},
			_cascadeChange: function (e)
			{
				var t = this,
                    i = t._accessor() || t._selectedValue;
				t._cascadeFilterRequests.length || (t._selectedValue = null), t._userTriggered ? t._clearSelection(e, !0) : i ? (i !== t.listView.value()[0] && t.value(i), t.dataSource.view()[0] && t.selectedIndex !== -1 || t._clearSelection(e, !0)) : t.dataSource.flatView().length && t.select(t.options.index), t.enable(), t._triggerCascade(), t._triggerChange(), t._userTriggered = !1
			},
			_cascadeSelect: function (e, i)
			{
				var n, a, s = this,
                    l = e.dataItem(),
                    o = l ? e._value(l) : null,
                    u = s.options.cascadeFromField || e.options.dataValueField;
				s._valueBeforeCascade = i !== t ? i : s.value(), o || 0 === o ? (n = s.dataSource.filter() || {}, r(n, u), a = function ()
				{
					var t = s._cascadeFilterRequests.shift();
					t && s.unbind("dataBound", t), t = s._cascadeFilterRequests[0], t && s.first("dataBound", t), s._cascadeChange(e)
				}, s._cascadeFilterRequests.push(a), 1 === s._cascadeFilterRequests.length && s.first("dataBound", a), s._cascading = !0, s._filterSource({
					field: u,
					operator: "eq",
					value: o
				}), s._cascading = !1) : (s.enable(!1), s._clearSelection(e), s._triggerCascade(), s._triggerChange(), s._userTriggered = !1)
			}
		}), l = ".StaticList", o = u.ui.DataBoundWidget.extend({
			init: function (t, i)
			{
				f.fn.init.call(this, t, i), this.element.attr("role", "listbox").on("click" + l, "li", P(this._click, this)).on("mouseenter" + l, "li", function ()
				{
					e(this).addClass(S)
				}).on("mouseleave" + l, "li", function ()
				{
					e(this).removeClass(S)
				}), this.content = this.element.wrap("<div class='k-list-scroller' unselectable='on'></div>").parent(), this.header = this.content.before('<div class="k-group-header" style="display:none"></div>').prev(), this.bound(!1), this._optionID = u.guid(), this._selectedIndices = [], this._view = [], this._dataItems = [], this._values = [];
				var n = this.options.value;
				n && (this._values = e.isArray(n) ? n.slice(0) : [n]), this._getter(), this._templates(), this.setDataSource(this.options.dataSource), this._onScroll = P(function ()
				{
					var e = this;
					clearTimeout(e._scrollId), e._scrollId = setTimeout(function ()
					{
						e._renderHeader()
					}, 50)
				}, this)
			},
			options: {
				name: "StaticList",
				dataValueField: null,
				valuePrimitive: !1,
				selectable: !0,
				template: null,
				groupTemplate: null,
				fixedGroupTemplate: null
			},
			events: ["click", x, "activate", "deactivate", "dataBinding", "dataBound", "selectedItemChange"],
			setDataSource: function (t)
			{
				var i, n = this,
                    a = t || {};
				a = e.isArray(a) ? {
					data: a
				} : a, a = u.data.DataSource.create(a), n.dataSource ? (n.dataSource.unbind(x, n._refreshHandler), i = n.value(), n.value([]), n.bound(!1), n.value(i)) : n._refreshHandler = P(n.refresh, n), n.setDSFilter(a.filter()), n.dataSource = a.bind(x, n._refreshHandler), n._fixedHeader()
			},
			skip: function ()
			{
				return this.dataSource.skip()
			},
			setOptions: function (e)
			{
				f.fn.setOptions.call(this, e), this._getter(), this._templates(), this._render()
			},
			destroy: function ()
			{
				this.element.off(l), this._refreshHandler && this.dataSource.unbind(x, this._refreshHandler), clearTimeout(this._scrollId), f.fn.destroy.call(this)
			},
			dataItemByIndex: function (e)
			{
				return this.dataSource.flatView()[e]
			},
			screenHeight: function ()
			{
				return this.content[0].clientHeight
			},
			scrollToIndex: function (e)
			{
				var t = this.element[0].children[e];
				t && this.scroll(t)
			},
			scrollWith: function (e)
			{
				this.content.scrollTop(this.content.scrollTop() + e)
			},
			scroll: function (e)
			{
				if (e) {
					e[0] && (e = e[0]);
					var t = this.content[0],
                        i = e.offsetTop,
                        n = e.offsetHeight,
                        a = t.scrollTop,
                        s = t.clientHeight,
                        r = i + n;
					a > i ? a = i : r > a + s && (a = r - s), t.scrollTop = a
				}
			},
			selectedDataItems: function (e)
			{
				return e === t ? this._dataItems.slice() : (this._dataItems = e, this._values = this._getValues(e), t)
			},
			_getValues: function (t)
			{
				var i = this._valueGetter;
				return e.map(t, function (e)
				{
					return i(e)
				})
			},
			focusNext: function ()
			{
				var e = this.focus();
				e = e ? e.next() : 0, this.focus(e)
			},
			focusPrev: function ()
			{
				var e = this.focus();
				e = e ? e.prev() : this.element[0].children.length - 1, this.focus(e)
			},
			focusFirst: function ()
			{
				this.focus(this.element[0].children[0])
			},
			focusLast: function ()
			{
				this.focus(n(this.element[0].children))
			},
			focus: function (i)
			{
				var a, s = this,
                    r = s._optionID;
				return i === t ? s._current : (i = n(s._get(i)), i = e(this.element[0].children[i]), s._current && (s._current.removeClass(I).removeAttr("aria-selected").removeAttr(b), s.trigger("deactivate")), a = !!i[0], a && (i.addClass(I), s.scroll(i), i.attr("id", r)), s._current = a ? i : null, s.trigger("activate"), t)
			},
			focusIndex: function ()
			{
				return this.focus() ? this.focus().index() : t
			},
			skipUpdate: function (e)
			{
				this._skipUpdate = e
			},
			select: function (i)
			{
				var a, s, r, l = this,
                    o = l.options.selectable,
                    u = "multiple" !== o && o !== !1,
                    d = l._selectedIndices,
                    c = [],
                    h = [];
				return i === t ? d.slice() : (i = l._get(i), 1 === i.length && i[0] === -1 && (i = []), s = e.Deferred().resolve(), r = l.isFiltered(), r && !u && l._deselectFiltered(i) ? s : u && !r && e.inArray(n(i), d) !== -1 ? (l._dataItems.length && l._view.length && (l._dataItems = [l._view[d[0]].item]), s) : (a = l._deselect(i), h = a.removed, i = a.indices, i.length && (u && (i = [n(i)]), c = l._select(i)), (c.length || h.length) && (l._valueComparer = null, l.trigger(x, {
					added: c,
					removed: h
				})), s))
			},
			removeAt: function (e)
			{
				return this._selectedIndices.splice(e, 1), this._values.splice(e, 1), this._valueComparer = null, {
					position: e,
					dataItem: this._dataItems.splice(e, 1)[0]
				}
			},
			setValue: function (t)
			{
				t = e.isArray(t) || t instanceof m ? t.slice(0) : [t], this._values = t, this._valueComparer = null
			},
			value: function (i)
			{
				var n, a = this,
                    s = a._valueDeferred;
				return i === t ? a._values.slice() : (a.setValue(i), s && "resolved" !== s.state() || (a._valueDeferred = s = e.Deferred()), a.bound() && (n = a._valueIndices(a._values), "multiple" === a.options.selectable && a.select(-1), a.select(n), s.resolve()), a._skipUpdate = !1, s)
			},
			items: function ()
			{
				return this.element.children(".k-item")
			},
			_click: function (t)
			{
				t.isDefaultPrevented() || this.trigger("click", {
					item: e(t.currentTarget)
				}) || this.select(t.currentTarget)
			},
			_valueExpr: function (e, t)
			{
				var n, a, s = this,
                    r = 0,
                    l = [];
				if (!s._valueComparer || s._valueType !== e) {
					for (s._valueType = e; r < t.length; r++) l.push(i(t[r], e));
					n = "for (var idx = 0; idx < " + l.length + "; idx++) { if (current === values[idx]) {   return idx; }} return -1;", a = Function("current", "values", n), s._valueComparer = function (e)
					{
						return a(e, l)
					}
				}
				return s._valueComparer
			},
			_dataItemPosition: function (e, t)
			{
				var i = this._valueGetter(e),
                    n = this._valueExpr(typeof i, t);
				return n(i)
			},
			_getter: function ()
			{
				this._valueGetter = u.getter(this.options.dataValueField)
			},
			_deselect: function (t)
			{
				var i, n, a, s = this,
                    r = s.element[0].children,
                    l = s.options.selectable,
                    o = s._selectedIndices,
                    u = s._dataItems,
                    d = s._values,
                    c = [],
                    h = 0,
                    f = 0;
				if (t = t.slice(), l !== !0 && t.length) {
					if ("multiple" === l)
						for (; h < t.length; h++)
							if (n = t[h], e(r[n]).hasClass("k-state-selected"))
								for (i = 0; i < o.length; i++)
									if (a = o[i], a === n) {
										e(r[a]).removeClass("k-state-selected"), c.push({
											position: i + f,
											dataItem: u.splice(i, 1)[0]
										}), o.splice(i, 1), t.splice(h, 1), d.splice(i, 1), f += 1, h -= 1, i -= 1;
										break
									}
				} else {
					for (; h < o.length; h++) e(r[o[h]]).removeClass("k-state-selected"), c.push({
						position: h,
						dataItem: u[h]
					});
					s._values = [], s._dataItems = [], s._selectedIndices = []
				}
				return {
					indices: t,
					removed: c
				}
			},
			_deselectFiltered: function (t)
			{
				for (var i, n, a, s = this.element[0].children, r = [], l = 0; l < t.length; l++) n = t[l], i = this._view[n].item, a = this._dataItemPosition(i, this._values), a > -1 && (r.push(this.removeAt(a)), e(s[n]).removeClass("k-state-selected"));
				return !!r.length && (this.trigger(x, {
					added: [],
					removed: r
				}), !0)
			},
			_select: function (t)
			{
				var i, a, s = this,
                    r = s.element[0].children,
                    l = s._view,
                    o = [],
                    u = 0;
				for (n(t) !== -1 && s.focus(t) ; u < t.length; u++) a = t[u], i = l[a], a !== -1 && i && (i = i.item, s._selectedIndices.push(a), s._dataItems.push(i), s._values.push(s._valueGetter(i)), e(r[a]).addClass("k-state-selected").attr("aria-selected", !0), o.push({
					dataItem: i
				}));
				return o
			},
			getElementIndex: function (t)
			{
				return e(t).data("offset-index")
			},
			_get: function (e)
			{
				return "number" == typeof e ? e = [e] : q(e) || (e = this.getElementIndex(e), e = [e !== t ? e : -1]), e
			},
			_template: function ()
			{
				var e = this,
                    t = e.options,
                    i = t.template;
				return i ? (i = u.template(i), i = function (e)
				{
					return '<li tabindex="-1" role="option" unselectable="on" class="k-item">' + i(e) + "</li>"
				}) : i = u.template('<li tabindex="-1" role="option" unselectable="on" class="k-item">${' + u.expr(t.dataTextField, "data") + "}</li>", {
					useWithBlock: !1
				}), i
			},
			_templates: function ()
			{
				var e, t, i = this.options,
                    n = {
                    	template: i.template,
                    	groupTemplate: i.groupTemplate,
                    	fixedGroupTemplate: i.fixedGroupTemplate
                    };
				for (t in n) e = n[t], e && "function" != typeof e && (n[t] = u.template(e));
				this.templates = n
			},
			_normalizeIndices: function (e)
			{
				for (var i = [], n = 0; n < e.length; n++) e[n] !== t && i.push(e[n]);
				return i
			},
			_valueIndices: function (e, t)
			{
				var i, n = this._view,
                    a = 0;
				if (t = t ? t.slice() : [], !e.length) return [];
				for (; a < n.length; a++) i = this._dataItemPosition(n[a].item, e), i !== -1 && (t[i] = a);
				return this._normalizeIndices(t)
			},
			_firstVisibleItem: function ()
			{
				for (var t = this.element[0], i = this.content[0], n = i.scrollTop, a = e(t.children[0]).height(), s = Math.floor(n / a) || 0, r = t.children[s] || t.lastChild, l = r.offsetTop < n; r;)
					if (l) {
						if (r.offsetTop + a > n || !r.nextSibling) break;
						r = r.nextSibling
					} else {
						if (r.offsetTop <= n || !r.previousSibling) break;
						r = r.previousSibling
					}
				return this._view[e(r).data("offset-index")]
			},
			_fixedHeader: function ()
			{
				this.isGrouped() && this.templates.fixedGroupTemplate ? (this.header.show(), this.content.scroll(this._onScroll)) : (this.header.hide(), this.content.off("scroll", this._onScroll))
			},
			_renderHeader: function ()
			{
				var e, t = this.templates.fixedGroupTemplate;
				t && (e = this._firstVisibleItem(), e && this.header.html(t(e.group)))
			},
			_renderItem: function (e)
			{
				var t = '<li tabindex="-1" role="option" unselectable="on" class="k-item',
                    i = e.item,
                    n = 0 !== e.index,
                    a = e.selected;
				return n && e.newGroup && (t += " k-first"), a && (t += " k-state-selected"), t += '"' + (a ? ' aria-selected="true"' : "") + ' data-offset-index="' + e.index + '">', t += this.templates.template(i), n && e.newGroup && (t += '<div class="k-group">' + this.templates.groupTemplate(e.group) + "</div>"), t + "</li>"
			},
			_render: function ()
			{
				var e, t, i, n, a = "",
                    s = 0,
                    r = 0,
                    l = [],
                    o = this.dataSource.view(),
                    u = this.value(),
                    d = this.isGrouped();
				if (d)
					for (s = 0; s < o.length; s++)
						for (t = o[s], i = !0, n = 0; n < t.items.length; n++) e = {
							selected: this._selected(t.items[n], u),
							item: t.items[n],
							group: t.value,
							newGroup: i,
							index: r
						}, l[r] = e, r += 1, a += this._renderItem(e), i = !1;
				else
					for (s = 0; s < o.length; s++) e = {
						selected: this._selected(o[s], u),
						item: o[s],
						index: s
					}, l[s] = e, a += this._renderItem(e);
				this._view = l, this.element[0].innerHTML = a, d && l.length && this._renderHeader()
			},
			_selected: function (e, t)
			{
				var i = !this.isFiltered() || "multiple" === this.options.selectable;
				return i && this._dataItemPosition(e, t) !== -1
			},
			setDSFilter: function (e)
			{
				this._lastDSFilter = E({}, e)
			},
			isFiltered: function ()
			{
				return this._lastDSFilter || this.setDSFilter(this.dataSource.filter()), !u.data.Query.compareFilters(this.dataSource.filter(), this._lastDSFilter)
			},
			refresh: function (e)
			{
				var t, i = this,
                    n = e && e.action,
                    a = i.options.skipUpdateOnBind,
                    r = "itemchange" === n;
				i.trigger("dataBinding"), i._angularItems("cleanup"), i._fixedHeader(), i._render(), i.bound(!0), r || "remove" === n ? (t = s(i._dataItems, e.items), t.changed.length && (r ? i.trigger("selectedItemChange", {
					items: t.changed
				}) : i.value(i._getValues(t.unchanged)))) : i.isFiltered() || i._skipUpdate ? (i.focus(0), i._skipUpdate && (i._skipUpdate = !1, i._selectedIndices = i._valueIndices(i._values, i._selectedIndices))) : a || n && "add" !== n || i.value(i._values), i._valueDeferred && i._valueDeferred.resolve(), i._angularItems("compile"), i.trigger("dataBound")
			},
			bound: function (e)
			{
				return e === t ? this._bound : (this._bound = e, t)
			},
			isGrouped: function ()
			{
				return (this.dataSource.group() || []).length
			}
		}), d.plugin(o)
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, i)
{
	(i || t)()
});;
! function (e, define)
{
	define("kendo.dropdownlist.min", ["kendo.list.min", "kendo.mobile.scroller.min"], e)
}(function ()
{
	return function (e, t)
	{
		function i(e, t, i)
		{
			for (var n, s = 0, o = t.length - 1; s < o; ++s) n = t[s], n in e || (e[n] = {}), e = e[n];
			e[t[o]] = i
		}

		function n(e, t)
		{
			return e >= t && (e -= t), e
		}

		function s(e, t)
		{
			for (var i = 0; i < e.length; i++)
				if (e.charAt(i) !== t) return !1;
			return !0
		}
		var o = window.kendo,
            a = o.ui,
            l = a.List,
            r = a.Select,
            p = o.support,
            u = o._activeElement,
            c = o.data.ObservableObject,
            d = o.keys,
            _ = ".kendoDropDownList",
            f = "disabled",
            h = "readonly",
            m = "change",
            b = "k-state-focused",
            v = "k-state-default",
            w = "k-state-disabled",
            g = "aria-disabled",
            I = "mouseenter" + _ + " mouseleave" + _,
            x = "tabindex",
            L = "filter",
            k = "accept",
            y = "The `optionLabel` option is not valid due to missing fields. Define a custom optionLabel as shown here http://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist#configuration-optionLabel",
            T = e.proxy,
            V = r.extend({
            	init: function (i, n)
            	{
            		var s, a, l, p = this,
                        u = n && n.index;
            		p.ns = _, n = e.isArray(n) ? {
            			dataSource: n
            		} : n, r.fn.init.call(p, i, n), n = p.options, i = p.element.on("focus" + _, T(p._focusHandler, p)), p._focusInputHandler = e.proxy(p._focusInput, p), p.optionLabel = e(), p._optionLabel(), p._inputTemplate(), p._reset(), p._prev = "", p._word = "", p._wrapper(), p._tabindex(), p.wrapper.data(x, p.wrapper.attr(x)), p._span(), p._popup(), p._mobile(), p._dataSource(), p._ignoreCase(), p._filterHeader(), p._aria(), p._enable(), p._oldIndex = p.selectedIndex = -1, u !== t && (n.index = u), p._initialIndex = n.index, p.requireValueMapper(p.options), p._initList(), p._cascade(), n.autoBind ? p.dataSource.fetch() : p.selectedIndex === -1 && (a = n.text || "", a || (s = n.optionLabel, s && 0 === n.index ? a = s : p._isSelect && (a = i.children(":selected").text())), p._textAccessor(a)), l = e(p.element).parents("fieldset").is(":disabled"), l && p.enable(!1), p.listView.bind("click", function (e)
            		{
            			e.preventDefault()
            		}), o.notify(p)
            	},
            	options: {
            		name: "DropDownList",
            		enabled: !0,
            		autoBind: !0,
            		index: 0,
            		text: null,
            		value: null,
            		delay: 500,
            		height: 200,
            		dataTextField: "",
            		dataValueField: "",
            		optionLabel: "",
            		cascadeFrom: "",
            		cascadeFromField: "",
            		ignoreCase: !0,
            		animation: {},
            		filter: "none",
            		minLength: 1,
            		enforceMinLength: !1,
            		virtual: !1,
            		template: null,
            		valueTemplate: null,
            		optionLabelTemplate: null,
            		groupTemplate: "#:data#",
            		fixedGroupTemplate: "#:data#"
            	},
            	events: ["open", "close", m, "select", "filtering", "dataBinding", "dataBound", "cascade", "set"],
            	setOptions: function (e)
            	{
            		r.fn.setOptions.call(this, e), this.listView.setOptions(this._listOptions(e)), this._optionLabel(), this._inputTemplate(), this._accessors(), this._filterHeader(), this._enable(), this._aria(), !this.value() && this.hasOptionLabel() && this.select(0)
            	},
            	destroy: function ()
            	{
            		var e = this;
            		r.fn.destroy.call(e), e.wrapper.off(_), e.element.off(_), e._inputWrapper.off(_), e._arrow.off(), e._arrow = null, e.optionLabel.off()
            	},
            	open: function ()
            	{
            		var e = this;
            		e.popup.visible() || (e.listView.bound() && e._state !== k ? e._allowOpening() && (e.popup.one("activate", e._focusInputHandler), e.popup.open(), e._resizeFilterInput(), e._focusItem()) : (e._open = !0, e._state = "rebind", e.filterInput && (e.filterInput.val(""), e._prev = ""), e.filterInput && 1 !== e.options.minLength ? (e.refresh(), e.popup.one("activate", e._focusInputHandler), e.popup.open(), e._resizeFilterInput()) : e._filterSource()))
            	},
            	_focusInput: function ()
            	{
            		this._focusElement(this.filterInput)
            	},
            	_resizeFilterInput: function ()
            	{
            		var e, t, i = this.filterInput,
                        n = this._prevent;
            		i && (e = this.filterInput[0] === u(), t = o.caret(this.filterInput[0])[0], this._prevent = !0, i.css("display", "none").css("width", this.popup.element.css("width")).css("display", "inline-block"), e && (i.focus(), o.caret(i[0], t)), this._prevent = n)
            	},
            	_allowOpening: function ()
            	{
            		return this.hasOptionLabel() || this.filterInput || r.fn._allowOpening.call(this)
            	},
            	toggle: function (e)
            	{
            		this._toggle(e, !0)
            	},
            	current: function (e)
            	{
            		var i;
            		return e === t ? (i = this.listView.focus(), !i && 0 === this.selectedIndex && this.hasOptionLabel() ? this.optionLabel : i) : (this._focus(e), t)
            	},
            	dataItem: function (i)
            	{
            		var n = this,
                        s = null;
            		if (null === i) return i;
            		if (i === t) s = n.listView.selectedDataItems()[0];
            		else {
            			if ("number" != typeof i) {
            				if (n.options.virtual) return n.dataSource.getByUid(e(i).data("uid"));
            				i = i.hasClass("k-list-optionlabel") ? -1 : e(n.items()).index(i)
            			} else n.hasOptionLabel() && (i -= 1);
            			s = n.dataSource.flatView()[i]
            		}
            		return s || (s = n._optionLabelDataItem()), s
            	},
            	refresh: function ()
            	{
            		this.listView.refresh()
            	},
            	text: function (e)
            	{
            		var i, n = this,
                        s = n.options.ignoreCase;
            		return e = null === e ? "" : e, e === t ? n._textAccessor() : "string" != typeof e ? (n._textAccessor(e), t) : (i = s ? e.toLowerCase() : e, n._select(function (e)
            		{
            			return e = n._text(e), s && (e = (e + "").toLowerCase()), e === i
            		}).done(function ()
            		{
            			n._textAccessor(n.dataItem() || e)
            		}), t)
            	},
            	_clearFilter: function ()
            	{
            		e(this.filterInput).val(""), r.fn._clearFilter.call(this)
            	},
            	value: function (e)
            	{
            		var i = this,
                        n = i.listView,
                        s = i.dataSource;
            		return e === t ? (e = i._accessor() || i.listView.value()[0], e === t || null === e ? "" : e) : (i.requireValueMapper(i.options, e), !e && i.hasOptionLabel() || (i._initialIndex = null), this.trigger("set", {
            			value: e
            		}), i._request && i.options.cascadeFrom && i.listView.bound() ? (i._valueSetter && s.unbind(m, i._valueSetter), i._valueSetter = T(function ()
            		{
            			i.value(e)
            		}, i), s.one(m, i._valueSetter), t) : (i._isFilterEnabled() && n.bound() && n.isFiltered() ? i._clearFilter() : i._fetchData(), n.value(e).done(function ()
            		{
            			i.selectedIndex === -1 && i.text() && (i.text(""), i._accessor("", -1)), i._old = i._accessor(), i._oldIndex = i.selectedIndex
            		}), t))
            	},
            	hasOptionLabel: function ()
            	{
            		return this.optionLabel && !!this.optionLabel[0]
            	},
            	_optionLabel: function ()
            	{
            		var i = this,
                        n = i.options,
                        s = n.optionLabel,
                        a = n.optionLabelTemplate;
            		return s ? (a || (a = "#:", a += "string" == typeof s ? "data" : o.expr(n.dataTextField, "data"), a += "#"), "function" != typeof a && (a = o.template(a)), i.optionLabelTemplate = a, i.hasOptionLabel() || (i.optionLabel = e('<div class="k-list-optionlabel"></div>').prependTo(i.list)), i.optionLabel.html(a(s)).off().click(T(i._click, i)).on(I, i._toggleHover), i.angular("compile", function ()
            		{
            			return {
            				elements: i.optionLabel,
            				data: [{
            					dataItem: i._optionLabelDataItem()
            				}]
            			}
            		}), t) : (i.optionLabel.off().remove(), i.optionLabel = e(), t)
            	},
            	_optionLabelText: function ()
            	{
            		var e = this.options.optionLabel;
            		return "string" == typeof e ? e : this._text(e)
            	},
            	_optionLabelDataItem: function ()
            	{
            		var t = this,
                        i = t.options.optionLabel;
            		return t.hasOptionLabel() ? e.isPlainObject(i) ? new c(i) : t._assignInstance(t._optionLabelText(), "") : null
            	},
            	_buildOptions: function (e)
            	{
            		var i, n, s, o = this;
            		o._isSelect && (i = o.listView.value()[0], n = o._optionLabelDataItem(), s = n && o._value(n), i !== t && null !== i || (i = ""), n && (s !== t && null !== s || (s = ""), n = '<option value="' + s + '">' + o._text(n) + "</option>"), o._options(e, n, i), i !== l.unifyType(o._accessor(), typeof i) && (o._customOption = null, o._custom(i)))
            	},
            	_listBound: function ()
            	{
            		var e, t = this,
                        i = t._initialIndex,
                        n = t._state === L,
                        s = t.dataSource.flatView();
            		t._presetValue = !1, t._renderFooter(), t._renderNoData(), t._toggleNoData(!s.length), t._resizePopup(!0), t.popup.position(), t._buildOptions(s), t._makeUnselectable(), n || (t._open && t.toggle(t._allowOpening()), t._open = !1, t._fetch || (s.length ? (!t.listView.value().length && i > -1 && null !== i && t.select(i), t._initialIndex = null, e = t.listView.selectedDataItems()[0], e && t.text() !== t._text(e) && t._selectValue(e)) : t._textAccessor() !== t._optionLabelText() && (t.listView.value(""), t._selectValue(null), t._oldIndex = t.selectedIndex))), t._hideBusy(), t.trigger("dataBound")
            	},
            	_listChange: function ()
            	{
            		this._selectValue(this.listView.selectedDataItems()[0]), (this._presetValue || this._old && this._oldIndex === -1) && (this._oldIndex = this.selectedIndex)
            	},
            	_filterPaste: function ()
            	{
            		this._search()
            	},
            	_focusHandler: function ()
            	{
            		this.wrapper.focus()
            	},
            	_focusinHandler: function ()
            	{
            		this._inputWrapper.addClass(b), this._prevent = !1
            	},
            	_focusoutHandler: function ()
            	{
            		var e, t, i = this,
                        n = i._state === L,
                        s = window.self !== window.top,
                        o = i._focus(),
                        a = i._getElementDataItem(o);
            		i._prevent || (clearTimeout(i._typingTimeout), t = function ()
            		{
            			p.mobileOS.ios && s ? i._change() : i._blur(), i._inputWrapper.removeClass(b), i._prevent = !0, i._open = !1, i.element.blur()
            		}, e = !n && o && i._value(a) !== i.value(), e && !i.trigger("select", {
            			dataItem: a,
            			item: o
            		}) ? i._select(o, !i.dataSource.view().length).done(t) : t())
            	},
            	_wrapperMousedown: function ()
            	{
            		this._prevent = !!this.filterInput
            	},
            	_wrapperClick: function (e)
            	{
            		e.preventDefault(), this.popup.unbind("activate", this._focusInputHandler), this._focused = this.wrapper, this._toggle()
            	},
            	_editable: function (e)
            	{
            		var t = this,
                        i = t.element,
                        n = e.disable,
                        s = e.readonly,
                        o = t.wrapper.add(t.filterInput).off(_),
                        a = t._inputWrapper.off(I);
            		s || n ? n ? (o.removeAttr(x), a.addClass(w).removeClass(v)) : (a.addClass(v).removeClass(w), o.on("focusin" + _, T(t._focusinHandler, t)).on("focusout" + _, T(t._focusoutHandler, t))) : (i.removeAttr(f).removeAttr(h), a.addClass(v).removeClass(w).on(I, t._toggleHover), o.attr(x, o.data(x)).attr(g, !1).on("keydown" + _, T(t._keydown, t)).on("focusin" + _, T(t._focusinHandler, t)).on("focusout" + _, T(t._focusoutHandler, t)).on("mousedown" + _, T(t._wrapperMousedown, t)).on("paste" + _, T(t._filterPaste, t)), t.wrapper.on("click" + _, T(t._wrapperClick, t)), t.filterInput || o.on("keypress" + _, T(t._keypress, t))), i.attr(f, n).attr(h, s), o.attr(g, n)
            	},
            	_keydown: function (e)
            	{
            		var i, n, s, o = this,
                        a = e.keyCode,
                        l = e.altKey,
                        r = o.popup.visible();
            		if (o.filterInput && (i = o.filterInput[0] === u()), a === d.LEFT ? (a = d.UP, n = !0) : a === d.RIGHT && (a = d.DOWN, n = !0), !n || !i) {
            			if (e.keyCode = a, (l && a === d.UP || a === d.ESC) && o._focusElement(o.wrapper), o._state === L && a === d.ESC && o._clearFilter(), a === d.ENTER && o._typingTimeout && o.filterInput && r) return e.preventDefault(), t;
            			if (n = o._move(e), !n) {
            				if ((!r || !o.filterInput) && (s = o._focus(), a === d.HOME ? (n = !0, o._firstItem()) : a === d.END && (n = !0, o._lastItem()), n)) {
            					if (o.trigger("select", {
            						dataItem: o._getElementDataItem(o._focus()),
            						item: o._focus()
            					})) return o._focus(s), t;
            					o._select(o._focus(), !0).done(function ()
            					{
            						r || o._blur()
            					})
            				}
            				l || n || !o.filterInput || o._search()
            			}
            		}
            	},
            	_matchText: function (e, i)
            	{
            		var n = this.options.ignoreCase;
            		return e !== t && null !== e && (e += "", n && (e = e.toLowerCase()), 0 === e.indexOf(i))
            	},
            	_shuffleData: function (e, t)
            	{
            		var i = this._optionLabelDataItem();
            		return i && (e = [i].concat(e)), e.slice(t).concat(e.slice(0, t))
            	},
            	_selectNext: function ()
            	{
            		var e, t, i, o = this,
                        a = o.dataSource.flatView(),
                        l = a.length + (o.hasOptionLabel() ? 1 : 0),
                        r = s(o._word, o._last),
                        p = o.selectedIndex;
            		for (p === -1 ? p = 0 : (p += r ? 1 : 0, p = n(p, l)), a = a.toJSON ? a.toJSON() : a.slice(), a = o._shuffleData(a, p), i = 0; i < l && (t = o._text(a[i]), !r || !o._matchText(t, o._last)) && !o._matchText(t, o._word) ; i++);
            		i !== l && (e = o._focus(), o._select(n(p + i, l)).done(function ()
            		{
            			var t = function ()
            			{
            				o.popup.visible() || o._change()
            			};
            			o.trigger("select", {
            				dataItem: o._getElementDataItem(o._focus()),
            				item: o._focus()
            			}) ? o._select(e).done(t) : t()
            		}))
            	},
            	_keypress: function (e)
            	{
            		var t, i = this;
            		0 !== e.which && e.keyCode !== o.keys.ENTER && (t = String.fromCharCode(e.charCode || e.keyCode), i.options.ignoreCase && (t = t.toLowerCase()), " " === t && e.preventDefault(), i._word += t, i._last = t, i._search())
            	},
            	_popupOpen: function ()
            	{
            		var e = this.popup;
            		e.wrapper = o.wrap(e.element), e.element.closest(".km-root")[0] && (e.wrapper.addClass("km-popup km-widget"), this.wrapper.addClass("km-widget"))
            	},
            	_popup: function ()
            	{
            		r.fn._popup.call(this), this.popup.one("open", T(this._popupOpen, this))
            	},
            	_getElementDataItem: function (e)
            	{
            		return e && e[0] ? e[0] === this.optionLabel[0] ? this._optionLabelDataItem() : this.listView.dataItemByIndex(this.listView.getElementIndex(e)) : null
            	},
            	_click: function (i)
            	{
            		var n = this,
                        s = i.item || e(i.currentTarget);
            		return i.preventDefault(), n.trigger("select", {
            			dataItem: n._getElementDataItem(s),
            			item: s
            		}) ? (n.close(), t) : (n._userTriggered = !0, n._select(s).done(function ()
            		{
            			n._focusElement(n.wrapper), n._blur()
            		}), t)
            	},
            	_focusElement: function (e)
            	{
            		var t = u(),
                        i = this.wrapper,
                        n = this.filterInput,
                        s = e === n ? i : n,
                        o = p.mobileOS && (p.touch || p.MSPointers || p.pointers);
            		n && n[0] === e[0] && o || n && s[0] === t && (this._prevent = !0, this._focused = e.focus())
            	},
            	_searchByWord: function (e)
            	{
            		var t, i;
            		e && (t = this, i = t.options.ignoreCase, i && (e = e.toLowerCase()), t._select(function (i)
            		{
            			return t._matchText(t._text(i), e)
            		}))
            	},
            	_inputValue: function ()
            	{
            		return this.text()
            	},
            	_search: function ()
            	{
            		var e = this,
                        i = e.dataSource;
            		if (clearTimeout(e._typingTimeout), e._isFilterEnabled()) e._typingTimeout = setTimeout(function ()
            		{
            			var t = e.filterInput.val();
            			e._prev !== t && (e._prev = t, e.search(t), e._resizeFilterInput()), e._typingTimeout = null
            		}, e.options.delay);
            		else {
            			if (e._typingTimeout = setTimeout(function ()
            			{
                                e._word = ""
            			}, e.options.delay), !e.listView.bound()) return i.fetch().done(function ()
            			{
            				e._selectNext()
            			}), t;
            			e._selectNext()
            		}
            	},
            	_get: function (t)
            	{
            		var i, n, s, o = "function" == typeof t,
                        a = o ? e() : e(t);
            		if (this.hasOptionLabel() && ("number" == typeof t ? t > -1 && (t -= 1) : a.hasClass("k-list-optionlabel") && (t = -1)), o) {
            			for (i = this.dataSource.flatView(), s = 0; s < i.length; s++)
            				if (t(i[s])) {
            					t = s, n = !0;
            					break
            				}
            			n || (t = -1)
            		}
            		return t
            	},
            	_firstItem: function ()
            	{
            		this.hasOptionLabel() ? this._focus(this.optionLabel) : this.listView.focusFirst()
            	},
            	_lastItem: function ()
            	{
            		this._resetOptionLabel(), this.listView.focusLast()
            	},
            	_nextItem: function ()
            	{
            		this.optionLabel.hasClass("k-state-focused") ? (this._resetOptionLabel(), this.listView.focusFirst()) : this.listView.focusNext()
            	},
            	_prevItem: function ()
            	{
            		this.optionLabel.hasClass("k-state-focused") || (this.listView.focusPrev(), this.listView.focus() || this._focus(this.optionLabel))
            	},
            	_focusItem: function ()
            	{
            		var e = this.listView,
                        i = e.focus(),
                        n = e.select();
            		n = n[n.length - 1], n === t && this.options.highlightFirst && !i && (n = 0), n !== t ? e.focus(n) : this.options.optionLabel ? (this._focus(this.optionLabel), this._select(this.optionLabel)) : e.scrollToIndex(0)
            	},
            	_resetOptionLabel: function (e)
            	{
            		this.optionLabel.removeClass("k-state-focused" + (e || "")).removeAttr("id")
            	},
            	_focus: function (e)
            	{
            		var i = this.listView,
                        n = this.optionLabel;
            		return e === t ? (e = i.focus(), !e && n.hasClass("k-state-focused") && (e = n), e) : (this._resetOptionLabel(), e = this._get(e), i.focus(e), e === -1 && (n.addClass("k-state-focused").attr("id", i._optionID), this._focused.add(this.filterInput).removeAttr("aria-activedescendant").attr("aria-activedescendant", i._optionID)), t)
            	},
            	_select: function (e, t)
            	{
            		var i = this;
            		return e = i._get(e), i.listView.select(e).done(function ()
            		{
            			t || i._state !== L || (i._state = k), e === -1 && i._selectValue(null)
            		})
            	},
            	_selectValue: function (e)
            	{
            		var i = this,
                        n = i.options.optionLabel,
                        s = i.listView.select(),
                        o = "",
                        a = "";
            		s = s[s.length - 1], s === t && (s = -1), this._resetOptionLabel(" k-state-selected"), e ? (a = e, o = i._dataValue(e), n && (s += 1)) : n && (i._focus(i.optionLabel.addClass("k-state-selected")), a = i._optionLabelText(), o = "string" == typeof n ? "" : i._value(n), s = 0), i.selectedIndex = s, null === o && (o = ""), i._textAccessor(a), i._accessor(o, s), i._triggerCascade()
            	},
            	_mobile: function ()
            	{
            		var e = this,
                        t = e.popup,
                        i = p.mobileOS,
                        n = t.element.parents(".km-root").eq(0);
            		n.length && i && (t.options.animation.open.effects = i.android || i.meego ? "fadeIn" : i.ios || i.wp ? "slideIn:up" : t.options.animation.open.effects)
            	},
            	_filterHeader: function ()
            	{
            		var t;
            		this.filterInput && (this.filterInput.off(_).parent().remove(), this.filterInput = null), this._isFilterEnabled() && (t = '<span class="k-icon k-i-search"></span>', this.filterInput = e('<input class="k-textbox"/>').attr({
            			placeholder: this.element.attr("placeholder"),
            			title: this.element.attr("title"),
            			role: "listbox",
            			"aria-haspopup": !0,
            			"aria-expanded": !1
            		}), this.list.prepend(e('<span class="k-list-filter" />').append(this.filterInput.add(t))))
            	},
            	_span: function ()
            	{
            		var t, i = this,
                        n = i.wrapper,
                        s = "span.k-input";
            		t = n.find(s), t[0] || (n.append('<span unselectable="on" class="k-dropdown-wrap k-state-default"><span unselectable="on" class="k-input">&nbsp;</span><span unselectable="on" class="k-select" aria-label="select"><span class="k-icon k-i-arrow-s"></span></span></span>').append(i.element), t = n.find(s)), i.span = t, i._inputWrapper = e(n[0].firstChild), i._arrow = n.find(".k-icon")
            	},
            	_wrapper: function ()
            	{
            		var e, t = this,
                        i = t.element,
                        n = i[0];
            		e = i.parent(), e.is("span.k-widget") || (e = i.wrap("<span />").parent(), e[0].style.cssText = n.style.cssText, e[0].title = n.title), t._focused = t.wrapper = e.addClass("k-widget k-dropdown k-header").addClass(n.className).css("display", "").attr({
            			accesskey: i.attr("accesskey"),
            			unselectable: "on",
            			role: "listbox",
            			"aria-haspopup": !0,
            			"aria-expanded": !1
            		}), i.hide().removeAttr("accesskey")
            	},
            	_clearSelection: function (e)
            	{
            		this.select(e.value() ? 0 : -1)
            	},
            	_inputTemplate: function ()
            	{
            		var t = this,
                        i = t.options.valueTemplate;
            		if (i = i ? o.template(i) : e.proxy(o.template("#:this._text(data)#", {
            			useWithBlock: !1
            		}), t), t.valueTemplate = i, t.hasOptionLabel() && !t.options.optionLabelTemplate) try {
            			t.valueTemplate(t._optionLabelDataItem())
            		} catch (n) {
            			throw Error(y)
            		}
            	},
            	_textAccessor: function (i)
            	{
            		var n, s = null,
                        o = this.valueTemplate,
                        a = this._optionLabelText(),
                        l = this.span;
            		if (i === t) return l.text();
            		e.isPlainObject(i) || i instanceof c ? s = i : a && a === i && (s = this.options.optionLabel), s || (s = this._assignInstance(i, this._accessor())), this.hasOptionLabel() && (s !== a && this._text(s) !== a || (o = this.optionLabelTemplate, "string" != typeof this.options.optionLabel || this.options.optionLabelTemplate || (s = a))), n = function ()
            		{
            			return {
            				elements: l.get(),
            				data: [{
            					dataItem: s
            				}]
            			}
            		}, this.angular("cleanup", n);
            		try {
            			l.html(o(s))
            		} catch (r) {
            			l.html("")
            		}
            		this.angular("compile", n)
            	},
            	_preselect: function (e, t)
            	{
            		e || t || (t = this._optionLabelText()), this._accessor(e), this._textAccessor(t), this._old = this._accessor(), this._oldIndex = this.selectedIndex, this.listView.setValue(e), this._initialIndex = null, this._presetValue = !0
            	},
            	_assignInstance: function (e, t)
            	{
            		var n = this.options.dataTextField,
                        s = {};
            		return n ? (i(s, n.split("."), e), i(s, this.options.dataValueField.split("."), t), s = new c(s)) : s = e, s
            	}
            });
		a.plugin(V)
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, i)
{
	(i || t)()
});;
! function (e, define)
{
	define("kendo.upload.min", ["kendo.core.min"], e)
}(function ()
{
	return function (e, t)
	{
		function a(t)
		{
			return e.map(n(t), function (e)
			{
				return e.name
			}).join(", ")
		}

		function n(e)
		{
			var t = e[0];
			return t.files ? o(t.files) : [{
				name: r(t.value),
				extension: s(t.value),
				size: null
			}]
		}

		function o(t)
		{
			return e.map(t, function (e)
			{
				return i(e)
			})
		}

		function i(e)
		{
			var t = e.name || e.fileName;
			return {
				name: C.htmlEncode(t),
				extension: s(t),
				size: "number" == typeof e.size ? e.size : e.fileSize,
				rawFile: e
			}
		}

		function s(e)
		{
			var t = e.match(x);
			return t ? t[0] : ""
		}

		function r(e)
		{
			var t = e.lastIndexOf("\\");
			return t != -1 ? e.substr(t + 1) : e
		}

		function l(t, a)
		{
			var n = C.guid();
			return e.map(t, function (e)
			{
				return e.uid = a ? C.guid() : n, e
			})
		}

		function p(e, t)
		{
			var a, n = d(t.allowedExtensions),
                o = t.maxFileSize,
                i = t.minFileSize;
			for (a = 0; a < e.length; a++) u(e[a], n), c(e[a], i, o)
		}

		function d(t)
		{
			var a = e.map(t, function (e)
			{
				var t = "." === e.substring(0, 1) ? e : "." + e;
				return t.toLowerCase()
			});
			return a
		}

		function u(t, a)
		{
			a.length > 0 && a.indexOf(t.extension.toLowerCase()) < 0 && (t.validationErrors = t.validationErrors || [], e.inArray(L, t.validationErrors) === -1 && t.validationErrors.push(L))
		}

		function c(t, a, n)
		{
			0 !== a && t.size < a && (t.validationErrors = t.validationErrors || [], e.inArray(M, t.validationErrors) === -1 && t.validationErrors.push(M)), 0 !== n && t.size > n && (t.validationErrors = t.validationErrors || [], e.inArray(P, t.validationErrors) === -1 && t.validationErrors.push(P))
		}

		function f(e)
		{
			var t, a = 0;
			if ("number" != typeof e[0].size) return "";
			for (t = 0; t < e.length; t++) e[t].size && (a += e[t].size);
			return a /= 1024, a < 1024 ? a.toFixed(2) + " KB" : (a / 1024).toFixed(2) + " MB"
		}

		function m(t)
		{
			return !t.multiple && e(".k-file", t.wrapper).length > 1
		}

		function h(a, n, o, i)
		{
			var s, r;
			return n._supportsRemove() ? (s = a.data("fileNames"), r = e.map(s, function (e)
			{
				return e.name
			}), i === !1 ? (n._removeFileEntry(a), t) : (n._submitRemove(r, o, function (e, t, o)
			{
				var i = n.trigger(R, {
					operation: "remove",
					files: s,
					response: e,
					XMLHttpRequest: o
				});
				i || n._removeFileEntry(a)
			}, function (e)
			{
				m(n) && n._removeFileEntry(a), n.trigger(N, {
					operation: "remove",
					files: s,
					XMLHttpRequest: e
				}), E("Server response: " + e.responseText)
			}), t)) : (!m(n) && i || n._removeFileEntry(a), t)
		}

		function v(t, a, n)
		{
			var o = !1,
                i = "";
			try {
				i = e.parseJSON(g(t)), o = !0
			} catch (s) {
				n()
			}
			o && a(i)
		}

		function g(e)
		{
			return t !== e && "" !== e || (e = "{}"), e
		}

		function k(e)
		{
			e.stopPropagation(), e.preventDefault()
		}

		function _(e, t, a, n)
		{
			var o, i;
			e.on("dragenter" + t, function (e)
			{
				a(e), i = new Date, o || (o = setInterval(function ()
				{
					var e = new Date - i;
					e > 100 && (n(), clearInterval(o), o = null)
				}, 100))
			}).on("dragover" + t, function ()
			{
				i = new Date
			})
		}

		function w(e)
		{
			return e.is(".k-file-progress, .k-file-success, .k-file-error")
		}

		function F(t)
		{
			return e(t.target).closest(".k-file")
		}
		var y, U, C = window.kendo,
            S = C.ui.Widget,
            b = C.antiForgeryTokens,
            E = C.logToConsole,
            x = /\.([^\.]+)$/,
            z = ".kendoUpload",
            D = "select",
            A = "upload",
            R = "success",
            N = "error",
            I = "complete",
            T = "cancel",
            q = "progress",
            H = "remove",
            B = "validationErrors",
            P = "invalidMaxFileSize",
            M = "invalidMinFileSize",
            L = "invalidFileExtension",
            O = 1e3,
            V = 2e3,
            W = {
            	loading: "k-i-loading",
            	warning: "k-i-warning",
            	success: "k-i-tick"
            },
            X = S.extend({
            	init: function (t, a)
            	{
            		var n, o, i, s = this;
            		S.fn.init.call(s, t, a), s.name = t.name, s.multiple = s.options.multiple, s.localization = s.options.localization, n = s.element, s.wrapper = n.closest(".k-upload"), 0 === s.wrapper.length && (s.wrapper = s._wrapInput(n)), s._activeInput(n), s.toggle(s.options.enabled), o = s._ns = z + "-" + C.guid(), n.closest("form").on("submit" + o, e.proxy(s._onParentFormSubmit, s)).on("reset" + o, e.proxy(s._onParentFormReset, s)), s.options.async.saveUrl ? (s._module = s._supportsFormData() ? new U(s) : new y(s), s._async = !0, i = s.options.files, i.length > 0 && s._renderInitialFiles(i)) : s._module = new Z(s), s._supportsDrop() && ("" !== s.options.dropZone ? s._setupCustomDropZone() : s._setupDropZone()), s.wrapper.on("click", ".k-upload-action", e.proxy(s._onFileAction, s)).on("click", ".k-clear-selected", e.proxy(s._onClearSelected, s)).on("click", ".k-upload-selected", e.proxy(s._onUploadSelected, s)), s.element.val() && s._onInputChange({
            			target: s.element
            		})
            	},
            	events: [D, A, R, N, I, T, q, H],
            	options: {
            		name: "Upload",
            		enabled: !0,
            		multiple: !0,
            		showFileList: !0,
            		template: "",
            		files: [],
            		async: {
            			removeVerb: "POST",
            			autoUpload: !0,
            			withCredentials: !0,
            			accept: "*/*; q=0.5, application/json"
            		},
            		localization: {
            			select: "Select files...",
            			cancel: "Cancel",
            			retry: "Retry",
            			remove: "Remove",
            			clearSelectedFiles: "Clear",
            			uploadSelectedFiles: "Upload",
            			dropFilesHere: "drop files here to upload",
            			statusUploading: "uploading",
            			statusUploaded: "uploaded",
            			statusWarning: "warning",
            			statusFailed: "failed",
            			headerStatusUploading: "Uploading...",
            			headerStatusUploaded: "Done",
            			invalidMaxFileSize: "File size too large.",
            			invalidMinFileSize: "File size too small.",
            			invalidFileExtension: "File type not allowed."
            		},
            		validation: {
            			allowedExtensions: [],
            			maxFileSize: 0,
            			minFileSize: 0
            		},
            		dropZone: ""
            	},
            	setOptions: function (e)
            	{
            		var t = this,
                        a = t.element;
            		S.fn.setOptions.call(t, e), t.multiple = t.options.multiple, a.attr("multiple", !!t._supportsMultiple() && t.multiple), t.toggle(t.options.enabled)
            	},
            	enable: function (e)
            	{
            		e = t === e || e, this.toggle(e)
            	},
            	disable: function ()
            	{
            		this.toggle(!1)
            	},
            	toggle: function (e)
            	{
            		e = t === e ? e : !e, this.wrapper.toggleClass("k-state-disabled", e), this.element.prop("disabled", e)
            	},
            	destroy: function ()
            	{
            		var t = this,
                        a = e(t.options.dropZone);
            		e(document).add(e(".k-dropzone", t.wrapper)).add(t.wrapper.closest("form")).off(t._ns), a.length > 0 && a.off(t._ns), e(t.element).off(z), S.fn.destroy.call(t)
            	},
            	upload: function ()
            	{
            		var e = this;
            		e._module.onSaveSelected()
            	},
            	getFiles: function ()
            	{
            		var t, a, n, o = this,
                        i = [],
                        s = o.wrapper.find(".k-file");
            		for (a = 0; a < s.length; a++)
            			if (t = e(s[a]).data("fileNames"))
            				for (n = 0; n < t.length; n++) i.push(t[n]);
            		return i
            	},
            	clearAllFiles: function ()
            	{
            		var e = this,
                        t = e.wrapper.find(".k-file");
            		t.each(function (t, a)
            		{
            			e._removeFileByDomElement(a, !1)
            		})
            	},
            	removeAllFiles: function ()
            	{
            		var e = this,
                        t = e.wrapper.find(".k-file");
            		t.each(function (t, a)
            		{
            			e._removeFileByDomElement(a, !0)
            		})
            	},
            	removeFileByUid: function (e)
            	{
            		this._removeFileByUid(e, !0)
            	},
            	clearFileByUid: function (e)
            	{
            		this._removeFileByUid(e, !1)
            	},
            	_removeFileByUid: function (t, a)
            	{
            		var n, o = this;
            		"string" == typeof t && (n = e(".k-file[" + C.attr("uid") + '="' + t + '"]', o.wrapper), n.length > 0 && o._removeFileByDomElement(n, a))
            	},
            	clearFile: function (e)
            	{
            		this._removeFile(e, !1)
            	},
            	removeFile: function (e)
            	{
            		this._removeFile(e, !0)
            	},
            	_removeFile: function (t, a)
            	{
            		var n, o = this,
                        i = o.wrapper.find(".k-file");
            		"function" == typeof t && i.each(function (i, s)
            		{
            			n = e(s).data("fileNames"), t(n) && o._removeFileByDomElement(s, a)
            		})
            	},
            	_removeFileByDomElement: function (t, a)
            	{
            		var n, o = this,
                        i = {
                        	target: e(t, o.wrapper)
                        };
            		o.options.async.saveUrl ? (e(t).hasClass("k-file-progress") ? o._module.onCancel(i) : o._module.onRemove(i, {}, a), n = e(".k-file", o.wrapper), 0 === n.length ? o._hideHeaderUploadstatus() : o._updateHeaderUploadStatus()) : o._module.onRemove(i, {}, a)
            	},
            	_addInput: function (t)
            	{
            		if (t[0].nodeType) {
            			var a = this,
                            n = t.clone().val("");
            			n.insertAfter(a.element).data("kendoUpload", a), e(a.element).hide().attr("tabindex", "-1").removeAttr("id").off(z), a._activeInput(n), a.element.focus()
            		}
            	},
            	_activeInput: function (t)
            	{
            		var a = this,
                        n = a.wrapper;
            		a.element = t, t.attr("multiple", !!a._supportsMultiple() && a.multiple).attr("autocomplete", "off").on("click" + z, function (e)
            		{
            			n.hasClass("k-state-disabled") && e.preventDefault()
            		}).on("focus" + z, function ()
            		{
            			e(this).parent().addClass("k-state-focused")
            		}).on("blur" + z, function ()
            		{
            			e(this).parent().removeClass("k-state-focused")
            		}).on("change" + z, e.proxy(a._onInputChange, a)).on("keydown" + z, e.proxy(a._onInputKeyDown, a))
            	},
            	_onInputKeyDown: function (e)
            	{
            		var t = this,
                        a = t.wrapper.find(".k-upload-action:visible:first");
            		e.keyCode === C.keys.TAB && a.length > 0 && (e.preventDefault(), a.focus())
            	},
            	_onInputChange: function (t)
            	{
            		var a, n = this,
                        o = e(t.target),
                        i = l(n._inputFiles(o), n._isAsyncNonBatch());
            		p(i, n.options.validation), a = n.trigger(D, {
            			files: i
            		}), a ? (n._addInput(o), o.remove()) : n._module.onSelect({
            			target: o
            		}, i)
            	},
            	_onDrop: function (t)
            	{
            		var a, n = t.originalEvent.dataTransfer,
                        i = this,
                        s = n.files,
                        r = l(o(s), i._isAsyncNonBatch());
            		k(t), s.length > 0 && !i.wrapper.hasClass("k-state-disabled") && (!i.multiple && r.length > 1 && r.splice(1, r.length - 1), p(r, i.options.validation), a = i.trigger(D, {
            			files: r
            		}), a || i._module.onSelect({
            			target: e(".k-dropzone", i.wrapper)
            		}, r))
            	},
            	_filesContainValidationErrors: function (t)
            	{
            		var a = !1;
            		return e(t).each(function (e, t)
            		{
            			if (t[B] && t[B].length > 0) return a = !0, !1
            		}), a
            	},
            	_isAsyncNonBatch: function ()
            	{
            		return this._async && !this.options.async.batch || !1
            	},
            	_renderInitialFiles: function (t)
            	{
            		var a, n, o = this,
                        i = 0;
            		for (t = l(t, !0), i = 0; i < t.length; i++) a = t[i], n = o._enqueueFile(a.name, {
            			fileNames: [a]
            		}), n.addClass("k-file-success").data("files", [t[i]]), o.options.template || e(".k-upload-status", n).prepend("<span class='k-upload-pct'>100%</span>"), o._supportsRemove() && o._fileAction(n, H)
            	},
            	_prepareTemplateData: function (e, t)
            	{
            		var a = t.fileNames,
                        n = {},
                        o = 0,
                        i = 0;
            		for (i = 0; i < a.length; i++) o += a[i].size;
            		return n.name = e, n.size = o, n.files = t.fileNames, n
            	},
            	_prepareDefaultSingleFileEntryTemplate: function (t)
            	{
            		var a = this,
                        n = t.fileNames[0],
                        o = f(t.fileNames),
                        i = n[B],
                        s = "";
            		return s += i && i.length > 0 ? "<li class='k-file k-file-invalid'><span class='k-progress'></span><span class='k-file-invalid-extension-wrapper'><span class='k-file-invalid-icon'>!</span><span class='k-file-state'></span></span><span class='k-file-name-size-wrapper'><span class='k-file-name k-file-name-invalid' title='" + n.name + "'>" + n.name + "</span><span class='k-file-validation-message'>" + a.localization[i[0]] + "</span></span>" : "<li class='k-file'><span class='k-progress'></span><span class='k-file-extension-wrapper'><span class='k-file-extension'>" + n.extension.substring(1) + "</span><span class='k-file-state'></span></span><span class='k-file-name-size-wrapper'><span class='k-file-name' title='" + n.name + "'>" + n.name + "</span><span class='k-file-size'>" + o + "</span></span>", s += "<strong class='k-upload-status'></strong>", e(s)
            	},
            	_prepareDefaultMultipleFileEntriesTemplate: function (t)
            	{
            		var a, n, o = this,
                        i = t.fileNames,
                        s = o._filesContainValidationErrors(i),
                        r = f(i),
                        l = "";
            		for (l += s ? "<li class='k-file k-file-invalid'><span class='k-progress'></span><span class='k-multiple-files-invalid-extension-wrapper'><span class='k-file-invalid-icon'>!</span>" : "<li class='k-file'><span class='k-progress'></span><span class='k-multiple-files-extension-wrapper'>", l += "<span class='k-file-state'></span></span>", i.sort(function (e, t)
            		{
                            return e[B] ? -1 : t[B] ? 1 : 0
            		}), l += "<span class='k-file-name-size-wrapper'>", a = 0; a < i.length; a++) n = i[a], l += n[B] && n[B].length > 0 ? "<span class='k-file-name k-file-name-invalid' title='" + n.name + "'>" + n.name + "</span>" : "<span class='k-file-name' title='" + n.name + "'>" + n.name + "</span>";
            		return l += s ? "<span class='k-file-validation-message'>Invalid files(s). Please check file upload requirements.</span>" : "<span class='k-file-information'>Total: " + i.length + " files, " + r + "</span>", l += "</span><strong class='k-upload-status'></strong>", e(l)
            	},
            	_enqueueFile: function (t, a)
            	{
            		var n, o, i, s, r = this,
                        l = a.fileNames[0].uid,
                        p = e(".k-upload-files", r.wrapper),
                        d = r.options,
                        u = d.template;
            		return 0 === p.length && (p = e("<ul class='k-upload-files k-reset'></ul>").appendTo(r.wrapper), r.options.showFileList || p.hide(), r.wrapper.removeClass("k-upload-empty")), n = e(".k-file", p), u ? (i = r._prepareTemplateData(t, a), u = C.template(u), o = e("<li class='k-file'>" + u(i) + "</li>"), o.find(".k-upload-action").addClass("k-button k-button-bare"), r.angular("compile", function ()
            		{
            			return {
            				elements: o,
            				data: [i]
            			}
            		})) : o = 1 === a.fileNames.length ? r._prepareDefaultSingleFileEntryTemplate(a) : r._prepareDefaultMultipleFileEntriesTemplate(a), o.attr(C.attr("uid"), l).appendTo(p).data(a), r._async || e(".k-progress", o).width("100%"), !r.multiple && n.length > 0 && (s = {
            			files: n.data("fileNames")
            		}, r.trigger(H, s) || r._module.onRemove({
            			target: e(n, r.wrapper)
            		}, s.data)), o
            	},
            	_removeFileEntry: function (t)
            	{
            		var a, n, o, i = this,
                        s = t.closest(".k-upload-files");
            		t.remove(), a = e(".k-file", s), n = e(".k-file-success, .k-file-error", s), o = e(".k-file-invalid", s), n.length !== a.length && o.length !== a.length || this._hideUploadButton(), 0 === a.length ? (s.remove(), i.wrapper.addClass("k-upload-empty"), i._hideHeaderUploadstatus()) : i._updateHeaderUploadStatus()
            	},
            	_fileAction: function (e, t)
            	{
            		var a = {
            			remove: "k-i-delete",
            			cancel: "k-i-cancel",
            			retry: "k-i-retry"
            		},
                        n = {
                        	remove: "k-i-close",
                        	cancel: "k-i-close",
                        	retry: "k-i-refresh"
                        };
            		a.hasOwnProperty(t) && (this._clearFileAction(e), this.options.template ? e.find(".k-upload-action").addClass("k-button k-button-bare").append("<span class='k-icon " + n[t] + " " + a[t] + "' title='" + this.localization[t] + "'aria-label='" + this.localization[t] + "'></span>").show() : (e.find(".k-upload-status .k-upload-action").remove(), e.find(".k-upload-status").append(this._renderAction(a[t], this.localization[t], n[t]))))
            	},
            	_fileState: function (t, a)
            	{
            		var n = this.localization,
                        o = {
                        	uploading: {
                        		text: n.statusUploading
                        	},
                        	uploaded: {
                        		text: n.statusUploaded
                        	},
                        	failed: {
                        		text: n.statusFailed
                        	}
                        },
                        i = o[a];
            		i && e("span.k-file-state", t).text(i.text)
            	},
            	_renderAction: function (t, a, n)
            	{
            		return e("" !== t ? "<button type='button' class='k-button k-button-bare k-upload-action'><span class='k-icon " + n + " " + t + "' title='" + a + "' aria-label='" + a + "'></span></button>" : "<button type='button' class='k-button'>" + a + "</button>")
            	},
            	_clearFileAction: function (t)
            	{
            		e(".k-upload-action", t).empty().hide()
            	},
            	_onFileAction: function (t)
            	{
            		var a, n, o, i, s, r, l = this;
            		return l.wrapper.hasClass("k-state-disabled") || (a = e(t.target).closest(".k-upload-action"), n = a.find(".k-icon"), o = a.closest(".k-file"), i = o.data("fileNames"), s = l._filesContainValidationErrors(i), r = {
            			files: i
            		}, n.hasClass("k-i-delete") ? l.trigger(H, r) || l._module.onRemove({
            			target: e(o, l.wrapper)
            		}, r.data, !s) : n.hasClass("k-i-cancel") ? (l.trigger(T, r), l._module.onCancel({
            			target: e(o, l.wrapper)
            		}), l._checkAllComplete(), l._updateHeaderUploadStatus()) : n.hasClass("k-i-retry") && (e(".k-i-warning", o).remove(), e(".k-progress", o).finish().show(), l._module.onRetry({
            			target: e(o, l.wrapper)
            		}))), !1
            	},
            	_onUploadSelected: function ()
            	{
            		var e = this,
                        t = e.wrapper;
            		return t.hasClass("k-state-disabled") || this._module.onSaveSelected(), !1
            	},
            	_onClearSelected: function ()
            	{
            		var e = this,
                        t = e.wrapper;
            		return t.hasClass("k-state-disabled") || e.clearAllFiles(), !1
            	},
            	_onFileProgress: function (t, a)
            	{
            		var n;
            		a > 100 && (a = 100), this.options.template ? e(".k-progress", t.target).width(a + "%") : (n = e(".k-upload-pct", t.target), 0 === n.length && e(".k-upload-status", t.target).prepend("<span class='k-upload-pct'></span>"), e(".k-upload-pct", t.target).text(a + "%"), e(".k-progress", t.target).width(a + "%")), this.trigger(q, {
            			files: F(t).data("fileNames"),
            			percentComplete: a
            		})
            	},
            	_onUploadSuccess: function (e, t, a)
            	{
            		var n = this,
                        o = F(e),
                        i = n.trigger(R, {
                        	files: o.data("fileNames"),
                        	response: t,
                        	operation: "upload",
                        	XMLHttpRequest: a
                        });
            		i ? n._setUploadErrorState(o) : (n._fileState(o, "uploaded"), o.removeClass("k-file-progress").addClass("k-file-success"), n._updateHeaderUploadStatus(), n._supportsRemove() ? n._fileAction(o, H) : n._clearFileAction(o)), n._hideUploadProgress(o), n._checkAllComplete()
            	},
            	_onUploadError: function (e, t)
            	{
            		var a = this,
                        n = F(e);
            		a._setUploadErrorState(n), a.trigger(N, {
            			operation: "upload",
            			files: n.data("fileNames"),
            			XMLHttpRequest: t
            		}), E("Server response: " + t.responseText), a._hideUploadProgress(n), a._checkAllComplete()
            	},
            	_setUploadErrorState: function (t)
            	{
            		var a = this,
                        n = e(".k-upload-pct", t);
            		a._fileState(t, "failed"), t.removeClass("k-file-progress").addClass("k-file-error"), e(".k-progress", t).width("100%"), n.length > 0 ? n.empty().removeClass("k-upload-pct").addClass("k-icon k-i-warning") : e(".k-upload-status", t).prepend("<span class='k-icon k-i-warning'></span>"), this._updateHeaderUploadStatus(), this._fileAction(t, "retry")
            	},
            	_hideUploadProgress: function (t)
            	{
            		e(".k-progress", t).delay(O).fadeOut(V, function ()
            		{
            			e(this).css("width", "0%")
            		})
            	},
            	_showUploadButton: function ()
            	{
            		var t = this,
                        a = e(".k-upload-selected", t.wrapper),
                        n = e(".k-clear-selected", t.wrapper);
            		0 === a.length && (a = t._renderAction("", this.localization.uploadSelectedFiles).addClass("k-upload-selected"), n = t._renderAction("", this.localization.clearSelectedFiles).addClass("k-clear-selected")), this.wrapper.append(n, a)
            	},
            	_hideUploadButton: function ()
            	{
            		e(".k-upload-selected, .k-clear-selected", this.wrapper).remove()
            	},
            	_showHeaderUploadStatus: function (t)
            	{
            		var a = this,
                        n = a.localization,
                        o = e(".k-dropzone", a.wrapper),
                        i = e(".k-upload-status-total", a.wrapper);
            		0 !== i.length && i.remove(), i = '<strong class="k-upload-status k-upload-status-total"><span class="k-icon"></span></strong>', t ? (i = e(i).append(n.headerStatusUploading), i.find(".k-icon").addClass(W.loading).text(n.statusUploading)) : (i = e(i).append(n.headerStatusUploaded), i.find(".k-icon").addClass(W.warning).text(n.statusWarning)), o.length > 0 ? o.append(i) : e(".k-upload-button", a.wrapper).after(i)
            	},
            	_updateHeaderUploadStatus: function ()
            	{
            		var t, a, n = this,
                        o = n.localization,
                        i = e(".k-upload-status-total", this.wrapper),
                        s = e(".k-file", n.wrapper).not(".k-file-success, .k-file-error, .k-file-invalid"),
                        r = e(".k-file-invalid", n.wrapper);
            		(0 === s.length || r.length > 0) && (t = e(".k-file.k-file-error, .k-file.k-file-invalid", n.wrapper), i = e(".k-upload-status-total", n.wrapper), a = e(".k-icon", i).removeClass().addClass("k-icon").addClass(0 !== t.length ? W.warning : W.success).text(0 !== t.length ? o.statusWarning : o.statusUploaded), i.html(a).append(n.localization.headerStatusUploaded))
            	},
            	_hideHeaderUploadstatus: function ()
            	{
            		e(".k-upload-status-total", this.wrapper).remove()
            	},
            	_onParentFormSubmit: function ()
            	{
            		var a, n = this,
                        o = n.element;
            		t !== this._module.onAbort && this._module.onAbort(), o.value || (a = e(o), a.attr("disabled", "disabled"), window.setTimeout(function ()
            		{
            			a.removeAttr("disabled")
            		}, 0))
            	},
            	_onParentFormReset: function ()
            	{
            		e(".k-upload-files", this.wrapper).remove()
            	},
            	_supportsFormData: function ()
            	{
            		return "undefined" != typeof FormData
            	},
            	_supportsMultiple: function ()
            	{
            		var e = this._userAgent().indexOf("Windows") > -1;
            		return !(C.support.browser.opera || C.support.browser.safari && e)
            	},
            	_supportsDrop: function ()
            	{
            		var e = this._userAgent().toLowerCase(),
                        t = /chrome/.test(e),
                        a = !t && /safari/.test(e),
                        n = a && /windows/.test(e);
            		return !n && this._supportsFormData() && this.options.async.saveUrl
            	},
            	_userAgent: function ()
            	{
            		return navigator.userAgent
            	},
            	_setupDropZone: function ()
            	{
            		var t, a, n = this;
            		e(".k-upload-button", n.wrapper).wrap("<div class='k-dropzone'></div>"), t = n._ns, a = e(".k-dropzone", n.wrapper).append(e("<em>" + n.localization.dropFilesHere + "</em>")).on("dragenter" + t, k).on("dragover" + t, function (e)
            		{
            			e.preventDefault()
            		}).on("drop" + t, e.proxy(n._onDrop, n)), _(a, t, function ()
            		{
            			a.closest(".k-upload").hasClass("k-state-disabled") || a.addClass("k-dropzone-hovered")
            		}, function ()
            		{
            			a.removeClass("k-dropzone-hovered")
            		}), n._bindDocumentDragEventWrappers(a)
            	},
            	_setupCustomDropZone: function ()
            	{
            		var t, a = this,
                        n = e(a.options.dropZone);
            		e(".k-upload-button", a.wrapper).wrap("<div class='k-dropzone'></div>"), t = a._ns, n.on("dragenter" + t, k).on("dragover" + t, function (e)
            		{
            			e.preventDefault()
            		}).on("drop" + t, e.proxy(a._onDrop, a)), _(n, t, function (t)
            		{
            			a.wrapper.hasClass("k-state-disabled") || (n.removeClass("k-dropzone-hovered"), e(t.target).addClass("k-dropzone-hovered"))
            		}, function ()
            		{
            			n.removeClass("k-dropzone-hovered")
            		}), a._bindDocumentDragEventWrappers(n)
            	},
            	_bindDocumentDragEventWrappers: function (t)
            	{
            		var a = this,
                        n = a._ns;
            		_(e(document), n, function ()
            		{
            			a.wrapper.hasClass("k-state-disabled") || (t.addClass("k-dropzone-active"), t.closest(".k-upload").removeClass("k-upload-empty"))
            		}, function ()
            		{
            			t.removeClass("k-dropzone-active"), 0 === e("li.k-file", t.closest(".k-upload")).length && t.closest(".k-upload").addClass("k-upload-empty")
            		})
            	},
            	_supportsRemove: function ()
            	{
            		return !!this.options.async.removeUrl
            	},
            	_submitRemove: function (t, a, n, o)
            	{
            		var i = this,
                        s = i.options.async.removeField || "fileNames",
                        r = e.extend(a, b());
            		r[s] = t, jQuery.ajax({
            			type: this.options.async.removeVerb,
            			dataType: "json",
            			dataFilter: g,
            			url: this.options.async.removeUrl,
            			traditional: !0,
            			data: r,
            			success: n,
            			error: o,
            			xhrFields: {
            				withCredentials: this.options.async.withCredentials
            			}
            		})
            	},
            	_wrapInput: function (e)
            	{
            		var t = this,
                        a = t.options;
            		return e.wrap("<div class='k-widget k-upload k-header'><div class='k-button k-upload-button' aria-label='" + this.localization.select + "'></div></div>"), a.async.saveUrl || e.closest(".k-upload").addClass("k-upload-sync"), e.closest(".k-upload").addClass("k-upload-empty"), e.closest(".k-button").append("<span>" + this.localization.select + "</span>"), e.closest(".k-upload")
            	},
            	_checkAllComplete: function ()
            	{
            		0 === e(".k-file.k-file-progress", this.wrapper).length && this.trigger(I)
            	},
            	_inputFiles: function (e)
            	{
            		return n(e)
            	}
            }),
            Z = function (e)
            {
            	this.name = "syncUploadModule", this.element = e.wrapper, this.upload = e, this.element.closest("form").attr("enctype", "multipart/form-data").attr("encoding", "multipart/form-data")
            };
		Z.prototype = {
			onSelect: function (t, n)
			{
				var o, i, s = this.upload,
                    r = e(t.target),
                    l = s._filesContainValidationErrors(n);
				s._addInput(r), o = {
					fileNames: n
				}, l ? r.remove() : o.relatedInput = r, i = s._enqueueFile(a(r), o), l && s._hideUploadProgress(i), s._fileAction(i, H)
			},
			onRemove: function (e)
			{
				var t = F(e),
                    a = t.data("relatedInput");
				a && a.remove(), this.upload._removeFileEntry(t)
			}
		}, y = function (e)
		{
			this.name = "iframeUploadModule", this.element = e.wrapper, this.upload = e, this.iframes = []
		}, X._frameId = 0, y.prototype = {
			onSelect: function (t, a)
			{
				var n = this.upload,
                    o = e(t.target),
                    i = n._filesContainValidationErrors(a),
                    s = this.prepareUpload(o, a, i);
				n.options.async.autoUpload ? i ? (n._fileAction(s, H), n._showHeaderUploadStatus(!1)) : this.performUpload(s) : (n._fileAction(s, H), i ? n._updateHeaderUploadStatus() : n._showUploadButton()), i && n._hideUploadProgress(s)
			},
			prepareUpload: function (t, n, o)
			{
				var i, s, r, l, p = this.upload,
                    d = e(p.element),
                    u = p.options.async.saveField || t.attr("name");
				return p._addInput(t), t.attr("name", u), o ? (t.remove(), s = {
					fileNames: n
				}) : (r = this.createFrame(p.name + "_" + X._frameId++), this.registerFrame(r), l = this.createForm(p.options.async.saveUrl, r.attr("name")).append(d), s = {
					frame: r,
					relatedInput: d,
					fileNames: n
				}), i = p._enqueueFile(a(t), s), r && r.data({
					form: l,
					file: i
				}), i
			},
			performUpload: function (t)
			{
				var a, n, o, i = {
					files: t.data("fileNames")
				},
                    s = t.data("frame"),
                    r = this.upload;
				if (r.trigger(A, i)) r._removeFileEntry(s.data("file")), this.cleanupFrame(s), this.unregisterFrame(s);
				else {
					r._hideUploadButton(), r._showHeaderUploadStatus(!0), s.appendTo(document.body), a = s.data("form").attr("action", r.options.async.saveUrl).appendTo(document.body), i.data = e.extend({}, i.data, b());
					for (n in i.data) o = a.find("input[name='" + n + "']"), 0 === o.length && (o = e("<input>", {
						type: "hidden",
						name: n
					}).prependTo(a)), o.val(i.data[n]);
					r._fileAction(t, T), r._fileState(t, "uploading"), e(t).removeClass("k-file-error").addClass("k-file-progress"), s.one("load", e.proxy(this.onIframeLoad, this)), a[0].submit()
				}
			},
			onSaveSelected: function ()
			{
				var t = this,
                    a = t.upload;
				e(".k-file", this.element).each(function ()
				{
					var n = e(this),
                        o = w(n),
                        i = a._filesContainValidationErrors(n.data("fileNames"));
					o || i || t.performUpload(n)
				})
			},
			onIframeLoad: function (t)
			{
				var a, n = e(t.target);
				try {
					a = n.contents().text()
				} catch (o) {
					a = "Error trying to get server response: " + o
				}
				this.processResponse(n, a)
			},
			processResponse: function (t, a)
			{
				var n = t.data("file"),
                    o = this,
                    i = {
                    	responseText: a
                    };
				v(a, function (a)
				{
					e.extend(i, {
						statusText: "OK",
						status: "200"
					}), o.upload._onFileProgress({
						target: e(n, o.upload.wrapper)
					}, 100), o.upload._onUploadSuccess({
						target: e(n, o.upload.wrapper)
					}, a, i), o.cleanupFrame(t), o.unregisterFrame(t)
				}, function ()
				{
					e.extend(i, {
						statusText: "error",
						status: "500"
					}), o.upload._onUploadError({
						target: e(n, o.upload.wrapper)
					}, i)
				})
			},
			onCancel: function (t)
			{
				var a = e(t.target).data("frame");
				this.stopFrameSubmit(a), this.cleanupFrame(a), this.unregisterFrame(a), this.upload._removeFileEntry(a.data("file"))
			},
			onRetry: function (e)
			{
				var t = F(e);
				this.performUpload(t)
			},
			onRemove: function (e, t, a)
			{
				var n = this,
                    o = n.upload,
                    i = F(e),
                    s = i.data("frame");
				s ? (n.unregisterFrame(s), o._removeFileEntry(i), n.cleanupFrame(s)) : i.hasClass("k-file-success") ? h(i, o, t, a) : o._removeFileEntry(i)
			},
			onAbort: function ()
			{
				var t = this.element,
                    a = this;
				e.each(this.iframes, function ()
				{
					e("input", this.data("form")).appendTo(t), a.stopFrameSubmit(this[0]), this.data("form").remove(), this.remove()
				}), this.iframes = []
			},
			createFrame: function (t)
			{
				return e("<iframe name='" + t + "' id='" + t + "' style='display:none;' />")
			},
			createForm: function (t, a)
			{
				return e("<form enctype='multipart/form-data' method='POST' action='" + t + "' target='" + a + "'/>")
			},
			stopFrameSubmit: function (e)
			{
				t !== e.stop ? e.stop() : e.document && e.document.execCommand("Stop")
			},
			registerFrame: function (e)
			{
				this.iframes.push(e)
			},
			unregisterFrame: function (t)
			{
				this.iframes = e.grep(this.iframes, function (e)
				{
					return e.attr("name") != t.attr("name")
				})
			},
			cleanupFrame: function (e)
			{
				var t = e.data("form");
				e.data("file").data("frame", null), setTimeout(function ()
				{
					t.remove(), e.remove()
				}, 1)
			}
		}, U = function (e)
		{
			this.name = "formDataUploadModule", this.element = e.wrapper, this.upload = e
		}, U.prototype = {
			onSelect: function (t, a)
			{
				var n, o = this.upload,
                    i = this,
                    s = e(t.target),
                    r = this.prepareUpload(s, a);
				e.each(r, function ()
				{
					n = o._filesContainValidationErrors(e(this.data("fileNames"))), o.options.async.autoUpload ? n ? (o._fileAction(this, H), o._showHeaderUploadStatus(!1)) : i.performUpload(this) : (o._fileAction(this, H), n ? o._updateHeaderUploadStatus() : o._showUploadButton()), n && o._hideUploadProgress(this)
				})
			},
			prepareUpload: function (t, a)
			{
				var n = this.enqueueFiles(a);
				return t.is("input") && (e.each(n, function ()
				{
					e(this).data("relatedInput", t)
				}), t.data("relatedFileEntries", n), this.upload._addInput(t)), n
			},
			enqueueFiles: function (t)
			{
				var a, n, o, i, s = this.upload,
                    r = t.length,
                    l = [];
				if (s.options.async.batch === !0) a = e.map(t, function (e)
				{
					return e.name
				}).join(", "), i = s._enqueueFile(a, {
					fileNames: t
				}), i.data("files", t), l.push(i);
				else
					for (n = 0; n < r; n++) o = t[n], a = o.name, i = s._enqueueFile(a, {
						fileNames: [o]
					}), i.data("files", [o]), l.push(i);
				return l
			},
			performUpload: function (t)
			{
				var a, n = this.upload,
                    o = this.createFormData(),
                    i = this.createXHR(),
                    s = {
                    	files: t.data("fileNames"),
                    	XMLHttpRequest: i
                    };
				if (n.trigger(A, s)) this.removeFileEntry(t);
				else {
					if (n._fileAction(t, T), n._hideUploadButton(), n._showHeaderUploadStatus(!0), s.formData) o = s.formData;
					else {
						s.data = e.extend({}, s.data, b());
						for (a in s.data) o.append(a, s.data[a]);
						this.populateFormData(o, t.data("files"))
					}
					n._fileState(t, "uploading"), e(t).removeClass("k-file-error").addClass("k-file-progress"), this.postFormData(n.options.async.saveUrl, o, t, i)
				}
			},
			onSaveSelected: function ()
			{
				var t = this,
                    a = t.upload;
				e(".k-file", this.element).each(function ()
				{
					var n = e(this),
                        o = w(n),
                        i = a._filesContainValidationErrors(n.data("fileNames"));
					o || i || t.performUpload(n)
				})
			},
			onCancel: function (e)
			{
				var t = F(e);
				this.stopUploadRequest(t), this.removeFileEntry(t)
			},
			onRetry: function (e)
			{
				var t = F(e);
				this.performUpload(t)
			},
			onRemove: function (e, t, a)
			{
				var n = this,
                    o = n.upload,
                    i = F(e);
				i.hasClass("k-file-success") ? h(i, o, t, a) : n.removeFileEntry(i)
			},
			createXHR: function ()
			{
				return new XMLHttpRequest
			},
			postFormData: function (e, t, a, n)
			{
				var o, i = this;
				a.data("request", n), n.addEventListener("load", function (e)
				{
					i.onRequestSuccess.call(i, e, a)
				}, !1), n.addEventListener(N, function (e)
				{
					i.onRequestError.call(i, e, a)
				}, !1), n.upload.addEventListener("progress", function (e)
				{
					i.onRequestProgress.call(i, e, a)
				}, !1), n.open("POST", e, !0), n.withCredentials = this.upload.options.async.withCredentials, o = this.upload.options.async.accept, o && n.setRequestHeader("Accept", o), n.send(t)
			},
			createFormData: function ()
			{
				return new FormData
			},
			populateFormData: function (e, t)
			{
				var a, n = this.upload,
                    o = t.length;
				for (a = 0; a < o; a++) e.append(n.options.async.saveField || n.name, t[a].rawFile);
				return e
			},
			onRequestSuccess: function (t, a)
			{
				function n()
				{
					i.upload._onUploadError({
						target: e(a, i.upload.wrapper)
					}, o)
				}
				var o = t.target,
                    i = this;
				o.status >= 200 && o.status <= 299 ? v(o.responseText, function (t)
				{
					i.upload._onFileProgress({
						target: e(a, i.upload.wrapper)
					}, 100), i.upload._onUploadSuccess({
						target: e(a, i.upload.wrapper)
					}, t, o), i.cleanupFileEntry(a)
				}, n) : n()
			},
			onRequestError: function (t, a)
			{
				var n = t.target;
				this.upload._onUploadError({
					target: e(a, this.upload.wrapper)
				}, n)
			},
			cleanupFileEntry: function (t)
			{
				var a = t.data("relatedInput"),
                    n = !0;
				a && (e.each(a.data("relatedFileEntries") || [], function ()
				{
					this.parent().length > 0 && this[0] != t[0] && (n = n && this.hasClass("k-file-success"))
				}), n && a.remove())
			},
			removeFileEntry: function (e)
			{
				this.cleanupFileEntry(e), this.upload._removeFileEntry(e)
			},
			onRequestProgress: function (t, a)
			{
				var n = Math.round(100 * t.loaded / t.total);
				this.upload._onFileProgress({
					target: e(a, this.upload.wrapper)
				}, n)
			},
			stopUploadRequest: function (e)
			{
				e.data("request").abort()
			}
		}, C.ui.plugin(X)
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, a)
{
	(a || t)()
});;
! function (e, define)
{
	define("kendo.filebrowser.min", ["kendo.listview.min", "kendo.dropdownlist.min", "kendo.upload.min"], e)
}(function ()
{
	return function (e, t)
	{
		function a(e, t, a)
		{
			var i, r;
			e.on("dragenter" + S, function ()
			{
				t(), r = new Date, i || (i = setInterval(function ()
				{
					var e = new Date - r;
					e > 100 && (a(), clearInterval(i), i = null)
				}, 100))
			}).on("dragover" + S, function ()
			{
				r = new Date
			})
		}

		function i(e, a)
		{
			return e !== t && e.match(/\/$/) || (e = (e || "") + "/"), e + a
		}

		function r(e)
		{
			if (!e) return "";
			var t = " bytes";
			return e >= 1073741824 ? (t = " GB", e /= 1073741824) : e >= 1048576 ? (t = " MB", e /= 1048576) : e >= 1024 && (t = " KB", e /= 1024), Math.round(100 * e) / 100 + t
		}

		function n(e, t)
		{
			var a = e[t];
			return p(a) ? a.from || a.field || t : a
		}
		var o, s, l, d, c = window.kendo,
            u = c.ui.Widget,
            p = e.isPlainObject,
            f = e.proxy,
            h = e.extend,
            v = c.support.placeholder,
            m = c.support.browser,
            k = c.isFunction,
            _ = /(^\/|\/$)/g,
            g = "change",
            w = "apply",
            b = "error",
            y = "click",
            S = ".kendoFileBrowser",
            x = ".kendoBreadcrumbs",
            T = ".kendoSearchBox",
            B = "name",
            F = "size",
            C = "type",
            D = {
            	field: C,
            	dir: "asc"
            },
            z = c.template('<li class="k-tile-empty"><strong>${text}</strong></li>'),
            L = '<div class="k-widget k-filebrowser-toolbar k-header k-floatwrap"><div class="k-toolbar-wrap"># if (showUpload) { # <div class="k-widget k-upload"><div class="k-button k-button-icontext k-upload-button"><span class="k-icon k-i-add"></span>#=messages.uploadFile#<input type="file" name="file" /></div></div># } ## if (showCreate) { #<button type="button" class="k-button k-button-icon"><span class="k-icon k-i-add-folder" /></button># } ## if (showDelete) { #<button type="button" class="k-button k-button-icon k-state-disabled"><span class="k-icon k-i-delete" /></button>&nbsp;# } #</div><div class="k-tiles-arrange"><label>#=messages.orderBy#: <select /></label></div></div>';
		h(!0, c.data, {
			schemas: {
				filebrowser: {
					data: function (e)
					{
						return e.items || e || []
					},
					model: {
						id: "name",
						fields: {
							name: "name",
							size: "size",
							type: "type"
						}
					}
				}
			}
		}), h(!0, c.data, {
			transports: {
				filebrowser: c.data.RemoteTransport.extend({
					init: function (t)
					{
						c.data.RemoteTransport.fn.init.call(this, e.extend(!0, {}, this.options, t))
					},
					_call: function (t, a)
					{
						a.data = e.extend({}, a.data, {
							path: this.options.path()
						}), k(this.options[t]) ? this.options[t].call(this, a) : c.data.RemoteTransport.fn[t].call(this, a)
					},
					read: function (e)
					{
						this._call("read", e)
					},
					create: function (e)
					{
						this._call("create", e)
					},
					destroy: function (e)
					{
						this._call("destroy", e)
					},
					update: function () { },
					options: {
						read: {
							type: "POST"
						},
						update: {
							type: "POST"
						},
						create: {
							type: "POST"
						},
						destroy: {
							type: "POST"
						}
					}
				})
			}
		}), o = m.msie && m.version < 8 ? function (e)
		{
			return e.offsetTop
		} : function (t)
		{
			return t.offsetTop - e(t).height()
		}, s = u.extend({
			init: function (e, t)
			{
				var a = this;
				t = t || {}, u.fn.init.call(a, e, t), a.element.addClass("k-filebrowser"), a.element.on(y + S, ".k-filebrowser-toolbar button:not(.k-state-disabled):has(.k-i-delete)", f(a._deleteClick, a)).on(y + S, ".k-filebrowser-toolbar button:not(.k-state-disabled):has(.k-i-add-folder)", f(a._addClick, a)).on("keydown" + S, "li.k-state-selected input", f(a._directoryKeyDown, a)).on("blur" + S, "li.k-state-selected input", f(a._directoryBlur, a)), a._dataSource(), a.refresh(), a.path(a.options.path)
			},
			options: {
				name: "FileBrowser",
				messages: {
					uploadFile: "Upload",
					orderBy: "Arrange by",
					orderByName: "Name",
					orderBySize: "Size",
					directoryNotFound: "A directory with this name was not found.",
					emptyFolder: "Empty Folder",
					deleteFile: 'Are you sure you want to delete "{0}"?',
					invalidFileType: 'The selected file "{0}" is not valid. Supported file types are {1}.',
					overwriteFile: 'A file with name "{0}" already exists in the current directory. Do you want to overwrite it?',
					dropFilesHere: "drop file here to upload",
					search: "Search"
				},
				transport: {},
				path: "/",
				fileTypes: "*.*"
			},
			events: [b, g, w],
			destroy: function ()
			{
				var e = this;
				u.fn.destroy.call(e), e.dataSource.unbind(b, e._errorHandler), e.element.add(e.list).add(e.toolbar).off(S), c.destroy(e.element)
			},
			value: function ()
			{
				var e, t = this,
                    a = t._selectedItem(),
                    r = t.options.transport.fileUrl;
				if (a && "f" === a.get(C)) return e = i(t.path(), a.get(B)).replace(_, ""), r && (e = k(r) ? r(e) : c.format(r, encodeURIComponent(e))), e
			},
			_selectedItem: function ()
			{
				var e = this.listView,
                    t = e.select();
				if (t.length) return this.dataSource.getByUid(t.attr(c.attr("uid")))
			},
			_toolbar: function ()
			{
				var t = this,
                    a = c.template(L),
                    i = t.options.messages,
                    r = [{
                    	text: i.orderByName,
                    	value: "name"
                    }, {
                    	text: i.orderBySize,
                    	value: "size"
                    }];
				t.toolbar = e(a({
					messages: i,
					showUpload: t.options.transport.uploadUrl,
					showCreate: t.options.transport.create,
					showDelete: t.options.transport.destroy
				})).appendTo(t.element).find(".k-upload input").kendoUpload({
					multiple: !1,
					localization: {
						dropFilesHere: i.dropFilesHere
					},
					async: {
						saveUrl: t.options.transport.uploadUrl,
						autoUpload: !0
					},
					upload: f(t._fileUpload, t),
					error: function (e)
					{
						t._error({
							xhr: e.XMLHttpRequest,
							status: "error"
						})
					}
				}).end(), t.upload = t.toolbar.find(".k-upload input").data("kendoUpload"), t.arrangeBy = t.toolbar.find(".k-tiles-arrange select").kendoDropDownList({
					dataSource: r,
					dataTextField: "text",
					dataValueField: "value",
					change: function ()
					{
						t.orderBy(this.value())
					}
				}).data("kendoDropDownList"), t._attachDropzoneEvents()
			},
			_attachDropzoneEvents: function ()
			{
				var t = this;
				t.options.transport.uploadUrl && (a(e(document.documentElement), e.proxy(t._dropEnter, t), e.proxy(t._dropLeave, t)), t._scrollHandler = f(t._positionDropzone, t))
			},
			_dropEnter: function ()
			{
				this._positionDropzone(), e(document).on("scroll" + S, this._scrollHandler)
			},
			_dropLeave: function ()
			{
				this._removeDropzone(), e(document).off("scroll" + S, this._scrollHandler)
			},
			_positionDropzone: function ()
			{
				var e = this,
                    t = e.element,
                    a = t.offset();
				e.toolbar.find(".k-dropzone").addClass("k-filebrowser-dropzone").offset(a).css({
					width: t[0].clientWidth,
					height: t[0].clientHeight,
					lineHeight: t[0].clientHeight + "px"
				})
			},
			_removeDropzone: function ()
			{
				this.toolbar.find(".k-dropzone").removeClass("k-filebrowser-dropzone").css({
					width: "",
					height: "",
					lineHeight: "",
					top: "",
					left: ""
				})
			},
			_deleteClick: function ()
			{
				var e = this,
                    t = e.listView.select(),
                    a = c.format(e.options.messages.deleteFile, t.find("strong").text());
				t.length && e._showMessage(a, "confirm") && e.listView.remove(t)
			},
			_addClick: function ()
			{
				this.createDirectory()
			},
			_getFieldName: function (e)
			{
				return n(this.dataSource.reader.model.fields, e)
			},
			_fileUpload: function (e)
			{
				var t, a = this,
                    i = a.options,
                    r = i.fileTypes,
                    n = RegExp(("(" + r.split(",").join(")|(") + ")").replace(/\*\./g, ".*."), "i"),
                    o = e.files[0].name,
                    s = B,
                    l = F;
				n.test(o) ? (e.data = {
					path: a.path()
				}, t = a._createFile(o), t ? a.upload.one("success", function (e)
				{
					var i = a._insertFileToList(t);
					i.set(s, e.response[a._getFieldName(s)]), i.set(l, e.response[a._getFieldName(l)]), a._tiles = a.listView.items().filter("[" + c.attr("type") + "=f]")
				}) : e.preventDefault()) : (e.preventDefault(), a._showMessage(c.format(i.messages.invalidFileType, o, r)))
			},
			_findFile: function (e)
			{
				var t, a, i, r = this.dataSource.data(),
                    n = C,
                    o = B;
				for (e = e.toLowerCase(), t = 0, i = r.length; t < i; t++)
					if ("f" === r[t].get(n) && r[t].get(o).toLowerCase() === e) {
						a = r[t];
						break
					}
				return a
			},
			_createFile: function (e)
			{
				var t = this,
                    a = {},
                    i = C,
                    r = t._findFile(e);
				return r ? t._showMessage(c.format(t.options.messages.overwriteFile, e), "confirm") ? (r._override = !0, r) : null : (a[i] = "f", a[B] = e, a[F] = 0, a)
			},
			_insertFileToList: function (e)
			{
				var t, a, i, r, n;
				if (e._override) return e;
				for (a = this.dataSource, i = a.view(), r = 0, n = i.length; r < n; r++)
					if ("f" === i[r].get(C)) {
						t = r;
						break
					}
				return a.insert(++t, e)
			},
			createDirectory: function ()
			{
				var e, t, a = this,
                    i = 0,
                    r = C,
                    n = B,
                    o = a.dataSource.data(),
                    s = a._nameDirectory(),
                    l = new a.dataSource.reader.model;
				for (e = 0, t = o.length; e < t; e++) "d" === o[e].get(r) && (i = e);
				l.set(r, "d"), l.set(n, s), a.listView.one("dataBound", function ()
				{
					var e = a.listView.items().filter("[" + c.attr("uid") + "=" + l.uid + "]"),
                        t = e.find("input");
					e.length && this.edit(e), this.element.scrollTop(e.attr("offsetTop") - this.element[0].offsetHeight), setTimeout(function ()
					{
						t.select()
					})
				}).one("save", function (e)
				{
					var t = e.model.get(n);
					t ? e.model.set(n, a._nameExists(t, l.uid) ? a._nameDirectory() : t) : e.model.set(n, s)
				}), a.dataSource.insert(++i, l)
			},
			_directoryKeyDown: function (e)
			{
				13 == e.keyCode && e.currentTarget.blur()
			},
			_directoryBlur: function ()
			{
				this.listView.save()
			},
			_nameExists: function (e, t)
			{
				var a, i, r = this.dataSource.data(),
                    n = C,
                    o = B;
				for (a = 0, i = r.length; a < i; a++)
					if ("d" === r[a].get(n) && r[a].get(o).toLowerCase() === e.toLowerCase() && r[a].uid !== t) return !0;
				return !1
			},
			_nameDirectory: function ()
			{
				var t, a, i, r = "New folder",
                    n = this.dataSource.data(),
                    o = [],
                    s = C,
                    l = B;
				for (a = 0, i = n.length; a < i; a++) "d" === n[a].get(s) && n[a].get(l).toLowerCase().indexOf(r.toLowerCase()) > -1 && o.push(n[a].get(l));
				if (e.inArray(r, o) > -1) {
					a = 2;
					do t = r + " (" + a + ")", a++; while (e.inArray(t, o) > -1);
					r = t
				}
				return r
			},
			orderBy: function (e)
			{
				this.dataSource.sort([{
					field: C,
					dir: "asc"
				}, {
					field: e,
					dir: "asc"
				}])
			},
			search: function (e)
			{
				this.dataSource.filter({
					field: B,
					operator: "contains",
					value: e
				})
			},
			_content: function ()
			{
				var t = this;
				t.list = e('<ul class="k-reset k-floats k-tiles" />').appendTo(t.element).on("dblclick" + S, "li", f(t._dblClick, t)), t.listView = new c.ui.ListView(t.list, {
					dataSource: t.dataSource,
					template: t._itemTmpl(),
					editTemplate: t._editTmpl(),
					selectable: !0,
					autoBind: !1,
					dataBinding: function (e)
					{
						t.toolbar.find(".k-i-delete").parent().addClass("k-state-disabled"), "remove" !== e.action && "sync" !== e.action || e.preventDefault()
					},
					dataBound: function ()
					{
						t.dataSource.view().length ? t._tiles = this.items().filter("[" + c.attr("type") + "=f]") : this.wrapper.append(z({
							text: t.options.messages.emptyFolder
						}))
					},
					change: f(t._listViewChange, t)
				})
			},
			_dblClick: function (t)
			{
				var a, r = this,
                    n = e(t.currentTarget);
				n.hasClass("k-edit-item") && r._directoryBlur(), n.filter("[" + c.attr("type") + "=d]").length ? (a = r.dataSource.getByUid(n.attr(c.attr("uid"))), a && (r.path(i(r.path(), a.get(B))), r.breadcrumbs.value(r.path()))) : n.filter("[" + c.attr("type") + "=f]").length && r.trigger(w)
			},
			_listViewChange: function ()
			{
				var e = this._selectedItem();
				e && (this.toolbar.find(".k-i-delete").parent().removeClass("k-state-disabled"), this.trigger(g, {
					selected: e
				}))
			},
			_dataSource: function ()
			{
				var e, t = this,
                    a = t.options,
                    i = a.transport,
                    r = h({}, D),
                    n = {
                    	field: B,
                    	dir: "asc"
                    },
                    o = {
                    	type: i.type || "filebrowser",
                    	sort: [r, n]
                    };
				p(i) && (i.path = f(t.path, t), o.transport = i), p(a.schema) ? o.schema = a.schema : i.type && p(c.data.schemas[i.type]) && (e = c.data.schemas[i.type]), t.dataSource && t._errorHandler ? t.dataSource.unbind(b, t._errorHandler) : t._errorHandler = f(t._error, t), t.dataSource = c.data.DataSource.create(o).bind(b, t._errorHandler)
			},
			_navigation: function ()
			{
				var t = this,
                    a = e('<div class="k-floatwrap"><input/><input/></div>').appendTo(this.element);
				t.breadcrumbs = a.find("input:first").kendoBreadcrumbs({
					value: t.options.path,
					change: function ()
					{
						t.path(this.value())
					}
				}).data("kendoBreadcrumbs"), t.searchBox = a.parent().find("input:last").kendoSearchBox({
					label: t.options.messages.search,
					change: function ()
					{
						t.search(this.value())
					}
				}).data("kendoSearchBox")
			},
			_error: function (e)
			{
				var t, a, i = this;
				i.trigger(b, e) || (t = e.xhr.status, "error" == e.status ? "404" == t ? i._showMessage(i.options.messages.directoryNotFound) : "0" != t && i._showMessage("Error! The requested URL returned " + t + " - " + e.xhr.statusText) : "timeout" == t && i._showMessage("Error! Server timeout."), a = i.dataSource, a.hasChanges() && a.cancelChanges())
			},
			_showMessage: function (e, t)
			{
				return window[t || "alert"](e)
			},
			refresh: function ()
			{
				var e = this;
				e._navigation(), e._toolbar(), e._content()
			},
			_editTmpl: function ()
			{
				debugger;
				var e = '<li class="k-tile k-state-selected" ' + c.attr("uid") + '="#=uid#" ';
				return e += c.attr("type") + '="${' + C + '}">', e += "#if(" + C + ' == "d") { #', e += '<div class="k-thumb"><span class="k-icon k-i-folder"></span></div>', e += "#}else{#", e += '<div class="k-thumb"><span class="k-icon k-i-loading"></span></div>', e += "#}#", e += "#if(" + C + ' == "d") { #', e += '<input class="k-input" ' + c.attr("bind") + '="value:' + B + '"/>', e += "#}#", e += "</li>", f(c.template(e), {
					sizeFormatter: r
				})
			},
			_itemTmpl: function ()
			{
				debugger;
				var e = '<li class="k-tile" ' + c.attr("uid") + '="#=uid#" ';
				return e += c.attr("type") + '="${' + C + '}">', e += "#if(" + C + ' == "d") { #', e += '<div class="k-thumb"><span class="k-icon k-i-folder"></span></div>', e += "#}else{#", e += '<div class="k-thumb"><span class="k-icon k-i-file"></span></div>', e += "#}#", e += "<strong>${" + B + "}</strong>", e += "#if(" + C + ' == "f") { # <span class="k-filesize">${this.sizeFormatter(' + F + ")}</span> #}#", e += "</li>", f(c.template(e), {
					sizeFormatter: r
				})
			},
			path: function (e)
			{
				var a = this,
                    i = a._path || "";
				return e !== t ? (a._path = e.replace(_, "") + "/", a.dataSource.read({
					path: a._path
				}), t) : (i && (i = i.replace(_, "")), "/" === i || "" === i ? "" : i + "/")
			}
		}), l = u.extend({
			init: function (e, t)
			{
				var a = this;
				t = t || {}, u.fn.init.call(a, e, t), v && a.element.attr("placeholder", a.options.label), a._wrapper(), a.element.on("keydown" + T, f(a._keydown, a)).on("change" + T, f(a._updateValue, a)), a.wrapper.on(y + T, "a", f(a._click, a)), v || a.element.on("focus" + T, f(a._focus, a)).on("blur" + T, f(a._blur, a))
			},
			options: {
				name: "SearchBox",
				label: "Search",
				value: ""
			},
			events: [g],
			destroy: function ()
			{
				var e = this;
				e.wrapper.add(e.element).add(e.label).off(T), u.fn.destroy.call(e)
			},
			_keydown: function (e)
			{
				13 === e.keyCode && this._updateValue()
			},
			_click: function (e)
			{
				e.preventDefault(), this._updateValue()
			},
			_updateValue: function ()
			{
				var e = this,
                    t = e.element.val();
				t !== e.value() && (e.value(t), e.trigger(g))
			},
			_blur: function ()
			{
				this._updateValue(), this._toggleLabel()
			},
			_toggleLabel: function ()
			{
				v || this.label.toggle(!this.element.val())
			},
			_focus: function ()
			{
				this.label.hide()
			},
			_wrapper: function ()
			{
				var t = this.element,
                    a = t.parents(".k-search-wrap");
				t[0].style.width = "", t.addClass("k-input"), a.length || (a = t.wrap(e('<div class="k-widget k-search-wrap k-textbox"/>')).parent(), v || e('<label style="display:block">' + this.options.label + "</label>").insertBefore(t), e('<a href="#" class="k-icon k-i-search k-search"/>').appendTo(a)), this.wrapper = a, this.label = a.find(">label")
			},
			value: function (e)
			{
				var a = this;
				return e !== t ? (a.options.value = e, a.element.val(e), a._toggleLabel(), t) : a.options.value
			}
		}), d = u.extend({
			init: function (e, t)
			{
				var a = this;
				t = t || {}, u.fn.init.call(a, e, t), a._wrapper(), a.wrapper.on("focus" + x, "input", f(a._focus, a)).on("blur" + x, "input", f(a._blur, a)).on("keydown" + x, "input", f(a._keydown, a)).on(y + x, "a.k-i-arrow-n:first", f(a._rootClick, a)).on(y + x, "a:not(.k-i-arrow-n)", f(a._click, a)), a.value(a.options.value)
			},
			options: {
				name: "Breadcrumbs",
				gap: 50
			},
			events: [g],
			destroy: function ()
			{
				var e = this;
				u.fn.destroy.call(e), e.wrapper.add(e.wrapper.find("input")).add(e.wrapper.find("a")).off(x)
			},
			_update: function (e)
			{
				e = "/" === (e || "").charAt(0) ? e : "/" + (e || ""), e !== this.value() && (this.value(e), this.trigger(g))
			},
			_click: function (t)
			{
				t.preventDefault(), this._update(this._path(e(t.target).prevAll("a:not(.k-i-arrow-n)").addBack()))
			},
			_rootClick: function (e)
			{
				e.preventDefault(), this._update("")
			},
			_focus: function ()
			{
				var e = this,
                    t = e.element;
				e.overlay.hide(), e.element.val(e.value()), setTimeout(function ()
				{
					t.select()
				})
			},
			_blur: function ()
			{
				if (!this.overlay.is(":visible")) {
					var e = this,
                        t = e.element,
                        a = t.val().replace(/\/{2,}/g, "/");
					e.overlay.show(), t.val(""), e._update(a)
				}
			},
			_keydown: function (e)
			{
				var t = this;
				13 === e.keyCode && (t._blur(), setTimeout(function ()
				{
					t.overlay.find("a:first").focus()
				}))
			},
			_wrapper: function ()
			{
				var t, a = this.element,
                    i = a.parents(".k-breadcrumbs");
				a[0].style.width = "", a.addClass("k-input"), i.length || (i = a.wrap(e('<div class="k-widget k-breadcrumbs k-textbox"/>')).parent()), t = i.find(".k-breadcrumbs-wrap"), t.length || (t = e('<div class="k-breadcrumbs-wrap"/>').appendTo(i)), this.wrapper = i, this.overlay = t
			},
			refresh: function ()
			{
				var a, i, r, n, o = "",
                    s = this.value();
				for (s !== t && s.match(/^\//) || (s = "/" + (s || "")), a = s.split("/"), r = 0, n = a.length; r < n; r++) i = a[r], i && (o || (o += '<a href="#" class="k-icon k-i-arrow-n">root</a>'), o += '<a class="k-link" href="#">' + a[r] + "</a>", o += '<span class="k-icon k-i-arrow-e">&gt;</span>');
				this.overlay.empty().append(e(o)), this._adjustSectionWidth()
			},
			_adjustSectionWidth: function ()
			{
				var t, a = this,
                    i = a.wrapper,
                    r = i.width() - a.options.gap,
                    n = a.overlay.find("a");
				n.each(function (a)
				{
					t = e(this), t.parent().width() > r && (a == n.length - 1 ? t.width(r) : t.prev().addBack().hide())
				})
			},
			value: function (e)
			{
				return e !== t ? (this._value = e.replace(/\/{2,}/g, "/"), this.refresh(), t) : this._value
			},
			_path: function (t)
			{
				return "/" + e.map(t, function (t)
				{
					return e(t).text()
				}).join("/")
			}
		}), c.ui.plugin(s), c.ui.plugin(d), c.ui.plugin(l)
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, a)
{
	(a || t)()
});;
! function (e, define)
{
	define("kendo.imagebrowser.min", ["kendo.filebrowser.min"], e)
}(function ()
{
	return function (e, t)
	{
		function i(e, i)
		{
			return e !== t && e.match(/\/$/) || (e = (e || "") + "/"), e + i
		}

		function a(e)
		{
			if (!e) return "";
			var t = " bytes";
			return e >= 1073741824 ? (t = " GB", e /= 1073741824) : e >= 1048576 ? (t = " MB", e /= 1048576) : e >= 1024 && (t = " KB", e /= 1024), Math.round(100 * e) / 100 + t
		}
		var n, o, s = window.kendo,
            r = s.ui.FileBrowser,
            l = e.isPlainObject,
            d = e.proxy,
            p = e.extend,
            c = s.support.browser,
            u = s.isFunction,
            f = /(^\/|\/$)/g,
            m = "error",
            h = ".kendoImageBrowser",
            g = "name",
            _ = "size",
            v = "type",
            y = {
            	field: v,
            	dir: "asc"
            },
            k = s.template('<li class="k-tile-empty"><strong>${text}</strong></li>');
		p(!0, s.data, {
			schemas: {
				imagebrowser: {
					data: function (e)
					{
						return e.items || e || []
					},
					model: {
						id: "name",
						fields: {
							name: "name",
							size: "size",
							type: "type"
						}
					}
				}
			}
		}), p(!0, s.data, {
			transports: {
				imagebrowser: s.data.RemoteTransport.extend({
					init: function (t)
					{
						s.data.RemoteTransport.fn.init.call(this, e.extend(!0, {}, this.options, t))
					},
					_call: function (t, i)
					{
						i.data = e.extend({}, i.data, {
							path: this.options.path()
						}), u(this.options[t]) ? this.options[t].call(this, i) : s.data.RemoteTransport.fn[t].call(this, i)
					},
					read: function (e)
					{
						this._call("read", e)
					},
					create: function (e)
					{
						this._call("create", e)
					},
					destroy: function (e)
					{
						this._call("destroy", e)
					},
					update: function () { },
					options: {
						read: {
							type: "POST"
						},
						update: {
							type: "POST"
						},
						create: {
							type: "POST"
						},
						destroy: {
							type: "POST"
						}
					}
				})
			}
		}), n = c.msie && c.version < 8 ? function (e)
		{
			return e.offsetTop
		} : function (t)
		{
			return t.offsetTop - e(t).height()
		}, o = r.extend({
			init: function (e, t)
			{
				var i = this;
				t = t || {}, r.fn.init.call(i, e, t), i.element.addClass("k-imagebrowser")
			},
			options: {
				name: "ImageBrowser",
				fileTypes: "*.png,*.gif,*.jpg,*.jpeg"
			},
			value: function ()
			{
				var e, t = this,
                    a = t._selectedItem(),
                    n = t.options.transport.imageUrl;
				if (a && "f" === a.get(v)) return e = i(t.path(), a.get(g)).replace(f, ""), n && (e = u(n) ? n(e) : s.format(n, encodeURIComponent(e))), e
			},
			_fileUpload: function (e)
			{
				var t, i = this,
                    a = i.options,
                    n = a.fileTypes,
                    o = RegExp(("(" + n.split(",").join(")|(") + ")").replace(/\*\./g, ".*."), "i"),
                    r = e.files[0].name,
                    l = g,
                    d = _;
				o.test(r) ? (e.data = {
					path: i.path()
				}, t = i._createFile(r), t ? (t._uploading = !0, i.upload.one("success", function (e)
				{
					delete t._uploading;
					var a = i._insertFileToList(t);
					a.set(l, e.response[i._getFieldName(l)]), a.set(d, e.response[i._getFieldName(d)]), i._tiles = i.listView.items().filter("[" + s.attr("type") + "=f]"), i._scroll()
				})) : e.preventDefault()) : (e.preventDefault(), i._showMessage(s.format(a.messages.invalidFileType, r, n)))
			},
			_content: function ()
			{
				var t = this;
				t.list = e('<ul class="k-reset k-floats k-tiles" />').appendTo(t.element).on("scroll" + h, d(t._scroll, t)).on("dblclick" + h, "li", d(t._dblClick, t)), t.listView = new s.ui.ListView(t.list, {
					dataSource: t.dataSource,
					template: t._itemTmpl(),
					editTemplate: t._editTmpl(),
					selectable: !0,
					autoBind: !1,
					dataBinding: function (e)
					{
						t.toolbar.find(".k-i-delete").parent().addClass("k-state-disabled"), "remove" !== e.action && "sync" !== e.action || e.preventDefault()
					},
					dataBound: function ()
					{
						t.dataSource.view().length ? (t._tiles = this.items().filter("[" + s.attr("type") + "=f]"), t._scroll()) : this.wrapper.append(k({
							text: t.options.messages.emptyFolder
						}))
					},
					change: d(t._listViewChange, t)
				})
			},
			_dataSource: function ()
			{
				var e, t = this,
                    i = t.options,
                    a = i.transport,
                    n = p({}, y),
                    o = {
                    	field: g,
                    	dir: "asc"
                    },
                    r = {
                    	type: a.type || "imagebrowser",
                    	sort: [n, o]
                    };
				l(a) && (a.path = d(t.path, t), r.transport = a), l(i.schema) ? r.schema = i.schema : a.type && l(s.data.schemas[a.type]) && (e = s.data.schemas[a.type]), t.dataSource && t._errorHandler ? t.dataSource.unbind(m, t._errorHandler) : t._errorHandler = d(t._error, t), t.dataSource = s.data.DataSource.create(r).bind(m, t._errorHandler)
			},
			_loadImage: function (t)
			{
				var i = this,
                    a = e(t),
                    n = i.dataSource.getByUid(a.attr(s.attr("uid"))),
                    o = n.get(g),
                    r = i.options.transport.thumbnailUrl,
                    l = e("<img />", {
                    	alt: o
                    }),
                    d = "?";
				n._uploading || (l.hide().on("load" + h, function ()
				{
					e(this).prev().remove().end().addClass("k-image").fadeIn()
				}), a.find(".k-i-loading").after(l), u(r) ? r = r(i.path(), encodeURIComponent(o)) : (r.indexOf("?") >= 0 && (d = "&"), r = r + d + "path=" + encodeURIComponent(i.path() + o), n._override && (r += "&_=" + (new Date).getTime(), delete n._override)), l.attr("src", r), t.loaded = !0)
			},
			_scroll: function ()
			{
				var e = this;
				e.options.transport && e.options.transport.thumbnailUrl && (clearTimeout(e._timeout), e._timeout = setTimeout(function ()
				{
					var t = s._outerHeight(e.list),
                        i = e.list.scrollTop(),
                        a = i + t;
					e._tiles.each(function ()
					{
						var t = n(this),
                            o = t + this.offsetHeight;
						if ((t >= i && t < a || o >= i && o < a) && e._loadImage(this), t > a) return !1
					}), e._tiles = e._tiles.filter(function ()
					{
						return !this.loaded
					})
				}, 250))
			},
			_itemTmpl: function ()
			{
				debugger;
				var e = this,
                    t = '<li class="k-tile" ' + s.attr("uid") + '="#=uid#" ';
				return t += s.attr("type") + '="${' + v + '}">', t += "#if(" + v + ' == "d") { #', t += '<div class="k-thumb"><span class="k-icon k-i-folder"></span></div>', t += "#}else{#", t += e.options.transport && e.options.transport.thumbnailUrl ? '<div class="k-thumb"><span class="k-icon k-i-loading"></span></div>' : '<div class="k-thumb"><span class="k-icon k-i-file"></span></div>', t += "#}#", t += "<strong>${" + g + "}</strong>", t += "#if(" + v + ' == "f") { # <span class="k-filesize">${this.sizeFormatter(' + _ + ")}</span> #}#", t += "</li>", d(s.template(t), {
					sizeFormatter: a
				})
			}
		}), s.ui.plugin(o)
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, i)
{
	(i || t)()
});;
! function (e, define)
{
	define("kendo.combobox.min", ["kendo.list.min", "kendo.mobile.scroller.min"], e)
}(function ()
{
	return function (e, t)
	{
		var i = window.kendo,
            s = i.ui,
            n = s.List,
            a = s.Select,
            o = i.caret,
            l = i.support,
            r = l.placeholder,
            u = i._activeElement,
            c = i.keys,
            p = ".kendoComboBox",
            d = "click" + p,
            _ = "mousedown" + p,
            h = "disabled",
            f = "readonly",
            g = "change",
            v = "k-state-default",
            m = "k-state-focused",
            x = "k-state-disabled",
            w = "aria-disabled",
            b = "filter",
            y = "accept",
            I = "rebind",
            k = "mouseenter" + p + " mouseleave" + p,
            V = e.proxy,
            C = a.extend({
            	init: function (t, s)
            	{
            		var n, o, l = this;
            		l.ns = p, s = e.isArray(s) ? {
            			dataSource: s
            		} : s, a.fn.init.call(l, t, s), s = l.options, t = l.element.on("focus" + p, V(l._focusHandler, l)), s.placeholder = s.placeholder || t.attr("placeholder"), l._reset(), l._wrapper(), l._input(), l._clearButton(), l._tabindex(l.input), l._popup(), l._dataSource(), l._ignoreCase(), l._enable(), l._oldIndex = l.selectedIndex = -1, l._aria(), l._initialIndex = s.index, l.requireValueMapper(l.options), l._initList(), l._cascade(), s.autoBind ? l._filterSource() : (n = s.text, !n && l._isSelect && (n = t.children(":selected").text()), n && l._setText(n)), n || l._placeholder(), o = e(l.element).parents("fieldset").is(":disabled"), o && l.enable(!1), i.notify(l)
            	},
            	options: {
            		name: "ComboBox",
            		enabled: !0,
            		index: -1,
            		text: null,
            		value: null,
            		autoBind: !0,
            		delay: 200,
            		dataTextField: "",
            		dataValueField: "",
            		minLength: 1,
            		enforceMinLength: !1,
            		height: 200,
            		highlightFirst: !0,
            		filter: "none",
            		placeholder: "",
            		suggest: !1,
            		cascadeFrom: "",
            		cascadeFromField: "",
            		ignoreCase: !0,
            		animation: {},
            		virtual: !1,
            		template: null,
            		groupTemplate: "#:data#",
            		fixedGroupTemplate: "#:data#",
            		clearButton: !0
            	},
            	events: ["open", "close", g, "select", "filtering", "dataBinding", "dataBound", "cascade", "set"],
            	setOptions: function (e)
            	{
            		a.fn.setOptions.call(this, e), this.listView.setOptions(e), this._accessors(), this._aria()
            	},
            	destroy: function ()
            	{
            		var e = this;
            		e.input.off(p), e.element.off(p), e._inputWrapper.off(p), clearTimeout(e._pasteTimeout), e._arrow.off(d + " " + _), e._clear.off(d + " " + _), a.fn.destroy.call(e)
            	},
            	_focusHandler: function ()
            	{
            		this.input.focus()
            	},
            	_arrowClick: function ()
            	{
            		this._toggle()
            	},
            	_inputFocus: function ()
            	{
            		this._inputWrapper.addClass(m), this._placeholder(!1)
            	},
            	_inputFocusout: function ()
            	{
            		var e, i, s = this,
                        n = s.value();
            		return s._inputWrapper.removeClass(m), clearTimeout(s._typingTimeout), s._typingTimeout = null, s.text(s.text()), e = s._focus(), i = this.listView.dataItemByIndex(this.listView.getElementIndex(e)), n !== s.value() && s.trigger("select", {
            			dataItem: i,
            			item: e
            		}) ? (s.value(n), t) : (s._placeholder(), s._blur(), s.element.blur(), t)
            	},
            	_inputPaste: function ()
            	{
            		var e = this;
            		clearTimeout(e._pasteTimeout), e._pasteTimeout = null, e._pasteTimeout = setTimeout(function ()
            		{
            			e.search()
            		})
            	},
            	_editable: function (e)
            	{
            		var t = this,
                        i = e.disable,
                        s = e.readonly,
                        n = t._inputWrapper.off(p),
                        a = t.element.add(t.input.off(p)),
                        o = t._arrow.off(d + " " + _),
                        l = t._clear;
            		s || i ? (n.addClass(i ? x : v).removeClass(i ? v : x), a.attr(h, i).attr(f, s).attr(w, i)) : (n.addClass(v).removeClass(x).on(k, t._toggleHover), a.removeAttr(h).removeAttr(f).attr(w, !1), o.on(d, V(t._arrowClick, t)).on(_, function (e)
            		{
            			e.preventDefault()
            		}), l.on(d, V(t._clearValue, t)).on(_, function (e)
            		{
            			e.preventDefault()
            		}), t.input.on("keydown" + p, V(t._keydown, t)).on("focus" + p, V(t._inputFocus, t)).on("focusout" + p, V(t._inputFocusout, t)).on("paste" + p, V(t._inputPaste, t)))
            	},
            	open: function ()
            	{
            		var e = this,
                        t = e._state;
            		e.popup.visible() || (!e.listView.bound() && t !== b || t === y ? (e._open = !0, e._state = I, 1 !== e.options.minLength ? (e.refresh(), e._openPopup()) : e._filterSource()) : e._allowOpening() && (e._openPopup(), e._focusItem()))
            	},
            	_scrollToFocusedItem: function ()
            	{
            		var e = this.listView;
            		e.scrollToIndex(e.getElementIndex(e.focus()))
            	},
            	_openPopup: function ()
            	{
            		this.popup.one("activate", V(this._scrollToFocusedItem, this)), this.popup.open()
            	},
            	_updateSelectionState: function ()
            	{
            		var e = this,
                        i = e.options.text,
                        s = e.options.value;
            		e.listView.isFiltered() || (e.selectedIndex === -1 ? (i !== t && null !== i || (i = s), e._accessor(s), e.input.val(i || e.input.val()), e._placeholder()) : e._oldIndex === -1 && (e._oldIndex = e.selectedIndex))
            	},
            	_buildOptions: function (e)
            	{
            		var i, s = this;
            		s._isSelect && (i = s._customOption, s._state === I && (s._state = ""), s._customOption = t, s._options(e, "", s.value()), i && i[0].selected && s._custom(i.val()))
            	},
            	_updateSelection: function ()
            	{
            		var i, s = this,
                        n = s.listView,
                        a = s._initialIndex,
                        o = null !== a && a > -1,
                        l = s._state === b;
            		return l ? (e(n.focus()).removeClass("k-state-selected"), t) : (s._fetch || (n.value().length || (o ? s.select(a) : s._accessor() && n.value(s._accessor())), s._initialIndex = null, i = n.selectedDataItems()[0], i && (s._value(i) !== s.value() && s._custom(s._value(i)), s.text() && s.text() !== s._text(i) && s._selectValue(i))), t)
            	},
            	_updateItemFocus: function ()
            	{
            		var e = this.listView;
            		this.options.highlightFirst ? e.focus() || e.focusIndex() || e.focus(0) : e.focus(-1)
            	},
            	_listBound: function ()
            	{
            		var e = this,
                        i = e.input[0] === u(),
                        s = e.dataSource.flatView(),
                        n = e.listView.skip(),
                        a = n === t || 0 === n;
            		e._presetValue = !1, e._renderFooter(), e._renderNoData(), e._toggleNoData(!s.length), e._resizePopup(), e.popup.position(), e._buildOptions(s), e._makeUnselectable(), e._updateSelection(), s.length && a && (e._updateItemFocus(), e.options.suggest && i && e.input.val() && e.suggest(s[0])), e._open && (e._open = !1, e._typingTimeout && !i ? e.popup.close() : e.toggle(e._allowOpening()), e._typingTimeout = null), e._hideBusy(), e.trigger("dataBound")
            	},
            	_listChange: function ()
            	{
            		this._selectValue(this.listView.selectedDataItems()[0]), this._presetValue && (this._oldIndex = this.selectedIndex)
            	},
            	_get: function (e)
            	{
            		var t, i, s;
            		if ("function" == typeof e) {
            			for (t = this.dataSource.flatView(), s = 0; s < t.length; s++)
            				if (e(t[s])) {
            					e = s, i = !0;
            					break
            				}
            			i || (e = -1)
            		}
            		return e
            	},
            	_select: function (e, t)
            	{
            		var i = this;
            		return e = i._get(e), e === -1 && (i.input[0].value = "", i._accessor("")), i.listView.select(e).done(function ()
            		{
            			t || i._state !== b || (i._state = y)
            		})
            	},
            	_selectValue: function (e)
            	{
            		var i = this.listView.select(),
                        s = "",
                        n = "";
            		i = i[i.length - 1], i === t && (i = -1), this.selectedIndex = i, i !== -1 || e ? (e && (s = this._dataValue(e), n = this._text(e)), null === s && (s = "")) : (s = n = this.input[0].value, this.listView.focus(-1)), this._prev = this.input[0].value = n, this._accessor(s !== t ? s : n, i), this._placeholder(), this._triggerCascade()
            	},
            	refresh: function ()
            	{
            		this.listView.refresh()
            	},
            	suggest: function (e)
            	{
            		var i, s = this,
                        a = s.input[0],
                        l = s.text(),
                        r = o(a)[0],
                        p = s._last;
            		return p == c.BACKSPACE || p == c.DELETE ? (s._last = t, t) : (e = e || "", "string" != typeof e && (e[0] && (e = s.dataSource.view()[n.inArray(e[0], s.ul[0])]), e = e ? s._text(e) : ""), r <= 0 && (r = l.toLowerCase().indexOf(e.toLowerCase()) + 1), e ? (e = "" + e, i = e.toLowerCase().indexOf(l.toLowerCase()), i > -1 && (l += e.substring(i + l.length))) : l = l.substring(0, r), l.length === r && e || (a.value = l, a === u() && o(a, r, l.length)), t)
            	},
            	text: function (e)
            	{
            		var i, s, a, o, l, r;
            		return e = null === e ? "" : e, i = this, s = i.input[0], a = i.options.ignoreCase, o = e, e === t ? s.value : i.options.autoBind !== !1 || i.listView.bound() ? (l = i.dataItem(), l && i._text(l) === e && (r = i._value(l), r === n.unifyType(i._old, typeof r)) ? (i._triggerCascade(), t) : (a && (o = o.toLowerCase()), i._select(function (e)
            		{
            			return e = i._text(e), a && (e = (e + "").toLowerCase()), e === o
            		}).done(function ()
            		{
            			i.selectedIndex < 0 && (i._accessor(e), s.value = e, i._triggerCascade()), i._prev = s.value
            		}), t)) : (i._setText(e), t)
            	},
            	toggle: function (e)
            	{
            		this._toggle(e, !0)
            	},
            	value: function (e)
            	{
            		var i = this,
                        s = i.options,
                        n = i.listView;
            		return e === t ? (e = i._accessor() || i.listView.value()[0], e === t || null === e ? "" : e) : (i.requireValueMapper(i.options, e), i.trigger("set", {
            			value: e
            		}), e === s.value && i.input.val() === s.text || (i._accessor(e), i._isFilterEnabled() && n.bound() && n.isFiltered() ? i._clearFilter() : i._fetchData(), n.value(e).done(function ()
            		{
            			i.selectedIndex === -1 && (i._accessor(e), i.input.val(e), i._placeholder(!0)), i._old = i._accessor(), i._oldIndex = i.selectedIndex, i._prev = i.input.val(), i._state === b && (i._state = y)
            		})), t)
            	},
            	_click: function (e)
            	{
            		var i = this,
                        s = e.item,
                        n = i.listView.dataItemByIndex(i.listView.getElementIndex(s));
            		return e.preventDefault(), i.trigger("select", {
            			dataItem: n,
            			item: s
            		}) ? (i.close(), t) : (i._userTriggered = !0, i._select(s).done(function ()
            		{
            			i._blur()
            		}), t)
            	},
            	_inputValue: function ()
            	{
            		return this.text()
            	},
            	_searchByWord: function (e)
            	{
            		var i, s = this,
                        n = s.options,
                        a = s.dataSource,
                        o = n.ignoreCase,
                        l = function (i)
                        {
                        	var n = s._text(i);
                        	if (n !== t) return n += "", ("" === n || "" !== e) && (o && (n = n.toLowerCase()), 0 === n.indexOf(e))
                        };
            		return o && (e = e.toLowerCase()), s.ul[0].firstChild ? (this.listView.focus(this._get(l)), i = this.listView.focus(), i && (n.suggest && s.suggest(i), this.open()), this.options.highlightFirst && !e && this.listView.focusFirst(), t) : (a.one(g, function ()
            		{
            			a.view()[0] && s.search(e)
            		}).fetch(), t)
            	},
            	_input: function ()
            	{
            		var t, i, s = this,
                        n = s.element.removeClass("k-input")[0],
                        a = n.accessKey,
                        o = s.wrapper,
                        l = "input.k-input",
                        u = n.name || "";
            		u && (u = 'name="' + u + '_input" '), t = o.find(l), t[0] || (o.append('<span tabindex="-1" unselectable="on" class="k-dropdown-wrap k-state-default"><input ' + u + 'class="k-input" type="text" autocomplete="off"/><span unselectable="on" class="k-select" aria-label="select"><span class="k-icon k-i-arrow-s"></span></span></span>').append(s.element), t = o.find(l)), t[0].style.cssText = n.style.cssText, t[0].title = n.title, i = parseInt(this.element.prop("maxlength") || this.element.attr("maxlength"), 10), i > -1 && (t[0].maxLength = i), t.addClass(n.className).css({
            			width: "100%",
            			height: n.style.height
            		}).attr({
            			role: "combobox",
            			"aria-expanded": !1
            		}).show(), r && t.attr("placeholder", s.options.placeholder), a && (n.accessKey = "", t[0].accessKey = a), s._focused = s.input = t, s._inputWrapper = e(o[0].firstChild), s._arrow = o.find(".k-select").attr({
            			role: "button",
            			tabIndex: -1
            		}), n.id && s._arrow.attr("aria-controls", s.ul[0].id)
            	},
            	_clearButton: function ()
            	{
            		this._clear = e('<span unselectable="on" class="k-icon k-i-close" title="clear"></span>').attr({
            			role: "button",
            			tabIndex: -1
            		}), this.options.clearButton && (this._clear.insertAfter(this.input), this.wrapper.addClass("k-combobox-clearable"))
            	},
            	_keydown: function (e)
            	{
            		var t = this,
                        i = e.keyCode;
            		t._last = i, clearTimeout(t._typingTimeout), t._typingTimeout = null, i == c.TAB || t._move(e) || t._search()
            	},
            	_placeholder: function (e)
            	{
            		if (!r) {
            			var i, s = this,
                            n = s.input,
                            a = s.options.placeholder;
            			if (a) {
            				if (i = s.value(), e === t && (e = !i), n.toggleClass("k-readonly", e), !e) {
            					if (i) return;
            					a = ""
            				}
            				n.val(a), a || n[0] !== u() || o(n[0], 0, 0)
            			}
            		}
            	},
            	_search: function ()
            	{
            		var e = this;
            		e._typingTimeout = setTimeout(function ()
            		{
            			var t = e.text();
            			e._prev !== t && (e._prev = t, "none" === e.options.filter && e.listView.select(-1), e.search(t)), e._typingTimeout = null
            		}, e.options.delay)
            	},
            	_setText: function (e)
            	{
            		this.input.val(e), this._prev = e
            	},
            	_wrapper: function ()
            	{
            		var e = this,
                        t = e.element,
                        i = t.parent();
            		i.is("span.k-widget") || (i = t.hide().wrap("<span />").parent(), i[0].style.cssText = t[0].style.cssText), e.wrapper = i.addClass("k-widget k-combobox k-header").addClass(t[0].className).css("display", "")
            	},
            	_clearSelection: function (e, t)
            	{
            		var i = this,
                        s = e.value(),
                        n = s && e.selectedIndex === -1;
            		this.selectedIndex == -1 && this.value() || (t || !s || n) && (i.options.value = "", i.value(""))
            	},
            	_preselect: function (e, t)
            	{
            		this.input.val(t), this._accessor(e), this._old = this._accessor(), this._oldIndex = this.selectedIndex, this.listView.setValue(e), this._placeholder(), this._initialIndex = null, this._presetValue = !0
            	}
            });
		s.plugin(C)
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, i)
{
	(i || t)()
});;
! function (t, define)
{
	define("kendo.draganddrop.min", ["kendo.core.min", "kendo.userevents.min"], t)
}(function ()
{
	return function (t, e)
	{
		function n(e, n)
		{
			try {
				return t.contains(e, n) || e == n
			} catch (r) {
				return !1
			}
		}

		function r(t, e)
		{
			return parseInt(t.css(e), 10) || 0
		}

		function i(t, e)
		{
			return Math.min(Math.max(t, e.min), e.max)
		}

		function o(t, e)
		{
			var n = D(t),
                i = _._outerWidth,
                o = _._outerHeight,
                a = n.left + r(t, "borderLeftWidth") + r(t, "paddingLeft"),
                s = n.top + r(t, "borderTopWidth") + r(t, "paddingTop"),
                l = a + t.width() - i(e, !0),
                c = s + t.height() - o(e, !0);
			return {
				x: {
					min: a,
					max: l
				},
				y: {
					min: s,
					max: c
				}
			}
		}

		function a(n, r, i)
		{
			for (var o, a, s = 0, l = r && r.length, c = i && i.length; n && n.parentNode;) {
				for (s = 0; s < l; s++)
					if (o = r[s], o.element[0] === n) return {
						target: o,
						targetElement: n
					};
				for (s = 0; s < c; s++)
					if (a = i[s], t.contains(a.element[0], n) && x.matchesSelector.call(n, a.options.filter)) return {
						target: a,
						targetElement: n
					};
				n = n.parentNode
			}
			return e
		}

		function s(t, e)
		{
			var n, r = e.options.group,
                i = t[r];
			if (T.fn.destroy.call(e), i.length > 1) {
				for (n = 0; n < i.length; n++)
					if (i[n] == e) {
						i.splice(n, 1);
						break
					}
			} else i.length = 0, delete t[r]
		}

		function l(t)
		{
			var e, n, r, i = c()[0];
			return t[0] === i ? (n = i.scrollTop, r = i.scrollLeft, {
				top: n,
				left: r,
				bottom: n + b.height(),
				right: r + b.width()
			}) : (e = t.offset(), e.bottom = e.top + t.height(), e.right = e.left + t.width(), e)
		}

		function c()
		{
			return t(_.support.browser.chrome ? y.body : y.documentElement)
		}

		function u(e)
		{
			var n, r = c();
			if (!e || e === y.body || e === y.documentElement) return r;
			for (n = t(e)[0]; n && !_.isScrollable(n) && n !== y.body;) n = n.parentNode;
			return n === y.body ? r : t(n)
		}

		function h(t, e, n)
		{
			var r = {
				x: 0,
				y: 0
			},
                i = 50;
			return t - n.left < i ? r.x = -(i - (t - n.left)) : n.right - t < i && (r.x = i - (n.right - t)), e - n.top < i ? r.y = -(i - (e - n.top)) : n.bottom - e < i && (r.y = i - (n.bottom - e)), r
		}
		var d, f, p, g, v, m, _ = window.kendo,
            x = _.support,
            y = window.document,
            b = t(window),
            E = _.Class,
            T = _.ui.Widget,
            S = _.Observable,
            M = _.UserEvents,
            w = t.proxy,
            C = t.extend,
            D = _.getOffset,
            O = {},
            k = {},
            I = {},
            H = _.elementUnderCursor,
            W = "keyup",
            z = "change",
            P = "dragstart",
            U = "hold",
            L = "drag",
            A = "dragend",
            N = "dragcancel",
            V = "hintDestroyed",
            B = "dragenter",
            $ = "dragleave",
            F = "drop",
            j = S.extend({
            	init: function (e, n)
            	{
            		var r = this,
                        i = e[0];
            		r.capture = !1, i.addEventListener ? (t.each(_.eventMap.down.split(" "), function ()
            		{
            			i.addEventListener(this, w(r._press, r), !0)
            		}), t.each(_.eventMap.up.split(" "), function ()
            		{
            			i.addEventListener(this, w(r._release, r), !0)
            		})) : (t.each(_.eventMap.down.split(" "), function ()
            		{
            			i.attachEvent(this, w(r._press, r))
            		}), t.each(_.eventMap.up.split(" "), function ()
            		{
            			i.attachEvent(this, w(r._release, r))
            		})), S.fn.init.call(r), r.bind(["press", "release"], n || {})
            	},
            	captureNext: function ()
            	{
            		this.capture = !0
            	},
            	cancelCapture: function ()
            	{
            		this.capture = !1
            	},
            	_press: function (t)
            	{
            		var e = this;
            		e.trigger("press"), e.capture && t.preventDefault()
            	},
            	_release: function (t)
            	{
            		var e = this;
            		e.trigger("release"), e.capture && (t.preventDefault(), e.cancelCapture())
            	}
            }),
            G = S.extend({
            	init: function (e)
            	{
            		var n = this;
            		S.fn.init.call(n), n.forcedEnabled = !1, t.extend(n, e), n.scale = 1, n.horizontal ? (n.measure = "offsetWidth", n.scrollSize = "scrollWidth", n.axis = "x") : (n.measure = "offsetHeight", n.scrollSize = "scrollHeight", n.axis = "y")
            	},
            	makeVirtual: function ()
            	{
            		t.extend(this, {
            			virtual: !0,
            			forcedEnabled: !0,
            			_virtualMin: 0,
            			_virtualMax: 0
            		})
            	},
            	virtualSize: function (t, e)
            	{
            		this._virtualMin === t && this._virtualMax === e || (this._virtualMin = t, this._virtualMax = e, this.update())
            	},
            	outOfBounds: function (t)
            	{
            		return t > this.max || t < this.min
            	},
            	forceEnabled: function ()
            	{
            		this.forcedEnabled = !0
            	},
            	getSize: function ()
            	{
            		return this.container[0][this.measure]
            	},
            	getTotal: function ()
            	{
            		return this.element[0][this.scrollSize]
            	},
            	rescale: function (t)
            	{
            		this.scale = t
            	},
            	update: function (t)
            	{
            		var e = this,
                        n = e.virtual ? e._virtualMax : e.getTotal(),
                        r = n * e.scale,
                        i = e.getSize();
            		(0 !== n || e.forcedEnabled) && (e.max = e.virtual ? -e._virtualMin : 0, e.size = i, e.total = r, e.min = Math.min(e.max, i - r), e.minScale = i / n, e.centerOffset = (r - i) / 2, e.enabled = e.forcedEnabled || r > i, t || e.trigger(z, e))
            	}
            }),
            Q = S.extend({
            	init: function (t)
            	{
            		var e = this;
            		S.fn.init.call(e), e.x = new G(C({
            			horizontal: !0
            		}, t)), e.y = new G(C({
            			horizontal: !1
            		}, t)), e.container = t.container, e.forcedMinScale = t.minScale, e.maxScale = t.maxScale || 100, e.bind(z, t)
            	},
            	rescale: function (t)
            	{
            		this.x.rescale(t), this.y.rescale(t), this.refresh()
            	},
            	centerCoordinates: function ()
            	{
            		return {
            			x: Math.min(0, -this.x.centerOffset),
            			y: Math.min(0, -this.y.centerOffset)
            		}
            	},
            	refresh: function ()
            	{
            		var t = this;
            		t.x.update(), t.y.update(), t.enabled = t.x.enabled || t.y.enabled, t.minScale = t.forcedMinScale || Math.min(t.x.minScale, t.y.minScale), t.fitScale = Math.max(t.x.minScale, t.y.minScale), t.trigger(z)
            	}
            }),
            q = S.extend({
            	init: function (t)
            	{
            		var e = this;
            		C(e, t), S.fn.init.call(e)
            	},
            	outOfBounds: function ()
            	{
            		return this.dimension.outOfBounds(this.movable[this.axis])
            	},
            	dragMove: function (t)
            	{
            		var e = this,
                        n = e.dimension,
                        r = e.axis,
                        i = e.movable,
                        o = i[r] + t;
            		n.enabled && ((o < n.min && t < 0 || o > n.max && t > 0) && (t *= e.resistance), i.translateAxis(r, t), e.trigger(z, e))
            	}
            }),
            J = E.extend({
            	init: function (e)
            	{
            		var n, r, i, o, a = this;
            		C(a, {
            			elastic: !0
            		}, e), i = a.elastic ? .5 : 0, o = a.movable, a.x = n = new q({
            			axis: "x",
            			dimension: a.dimensions.x,
            			resistance: i,
            			movable: o
            		}), a.y = r = new q({
            			axis: "y",
            			dimension: a.dimensions.y,
            			resistance: i,
            			movable: o
            		}), a.userEvents.bind(["press", "move", "end", "gesturestart", "gesturechange"], {
            			gesturestart: function (t)
            			{
            				a.gesture = t, a.offset = a.dimensions.container.offset()
            			},
            			press: function (e)
            			{
            				t(e.event.target).closest("a").is("[data-navigate-on-press=true]") && e.sender.cancel()
            			},
            			gesturechange: function (t)
            			{
            				var e, i, s, l = a.gesture,
                                c = l.center,
                                u = t.center,
                                h = t.distance / l.distance,
                                d = a.dimensions.minScale,
                                f = a.dimensions.maxScale;
            				o.scale <= d && h < 1 && (h += .8 * (1 - h)), o.scale * h >= f && (h = f / o.scale), i = o.x + a.offset.left, s = o.y + a.offset.top, e = {
            					x: (i - c.x) * h + u.x - i,
            					y: (s - c.y) * h + u.y - s
            				}, o.scaleWith(h), n.dragMove(e.x), r.dragMove(e.y), a.dimensions.rescale(o.scale), a.gesture = t, t.preventDefault()
            			},
            			move: function (t)
            			{
            				t.event.target.tagName.match(/textarea|input/i) || (n.dimension.enabled || r.dimension.enabled ? (n.dragMove(t.x.delta), r.dragMove(t.y.delta), t.preventDefault()) : t.touch.skip())
            			},
            			end: function (t)
            			{
            				t.preventDefault()
            			}
            		})
            	}
            }),
            K = x.transitions.prefix + "Transform";
		f = x.hasHW3D ? function (t, e, n)
		{
			return "translate3d(" + t + "px," + e + "px,0) scale(" + n + ")"
		} : function (t, e, n)
		{
			return "translate(" + t + "px," + e + "px) scale(" + n + ")"
		}, p = S.extend({
			init: function (e)
			{
				var n = this;
				S.fn.init.call(n), n.element = t(e), n.element[0].style.webkitTransformOrigin = "left top", n.x = 0, n.y = 0, n.scale = 1, n._saveCoordinates(f(n.x, n.y, n.scale))
			},
			translateAxis: function (t, e)
			{
				this[t] += e, this.refresh()
			},
			scaleTo: function (t)
			{
				this.scale = t, this.refresh()
			},
			scaleWith: function (t)
			{
				this.scale *= t, this.refresh()
			},
			translate: function (t)
			{
				this.x += t.x, this.y += t.y, this.refresh()
			},
			moveAxis: function (t, e)
			{
				this[t] = e, this.refresh()
			},
			moveTo: function (t)
			{
				C(this, t), this.refresh()
			},
			refresh: function ()
			{
				var t, e = this,
                    n = e.x,
                    r = e.y;
				e.round && (n = Math.round(n), r = Math.round(r)), t = f(n, r, e.scale), t != e.coordinates && (_.support.browser.msie && _.support.browser.version < 10 ? (e.element[0].style.position = "absolute", e.element[0].style.left = e.x + "px", e.element[0].style.top = e.y + "px") : e.element[0].style[K] = t, e._saveCoordinates(t), e.trigger(z))
			},
			_saveCoordinates: function (t)
			{
				this.coordinates = t
			}
		}), g = T.extend({
			init: function (t, e)
			{
				var n, r = this;
				T.fn.init.call(r, t, e), n = r.options.group, n in k ? k[n].push(r) : k[n] = [r]
			},
			events: [B, $, F],
			options: {
				name: "DropTarget",
				group: "default"
			},
			destroy: function ()
			{
				s(k, this)
			},
			_trigger: function (t, e)
			{
				var n = this,
                    r = O[n.options.group];
				if (r) return n.trigger(t, C({}, e.event, {
					draggable: r,
					dropTarget: e.dropTarget
				}))
			},
			_over: function (t)
			{
				this._trigger(B, t)
			},
			_out: function (t)
			{
				this._trigger($, t)
			},
			_drop: function (t)
			{
				var e = this,
                    n = O[e.options.group];
				n && (n.dropped = !e._trigger(F, t))
			}
		}), g.destroyGroup = function (t)
		{
			var e, n = k[t] || I[t];
			if (n) {
				for (e = 0; e < n.length; e++) T.fn.destroy.call(n[e]);
				n.length = 0, delete k[t], delete I[t]
			}
		}, g._cache = k, v = g.extend({
			init: function (t, e)
			{
				var n, r = this;
				T.fn.init.call(r, t, e), n = r.options.group, n in I ? I[n].push(r) : I[n] = [r]
			},
			destroy: function ()
			{
				s(I, this)
			},
			options: {
				name: "DropTargetArea",
				group: "default",
				filter: null
			}
		}), m = T.extend({
			init: function (t, e)
			{
				var n = this;
				T.fn.init.call(n, t, e), n._activated = !1, n.userEvents = new M(n.element, {
					global: !0,
					allowSelection: !0,
					filter: n.options.filter,
					threshold: n.options.distance,
					start: w(n._start, n),
					hold: w(n._hold, n),
					move: w(n._drag, n),
					end: w(n._end, n),
					cancel: w(n._cancel, n),
					select: w(n._select, n)
				}), n._afterEndHandler = w(n._afterEnd, n), n._captureEscape = w(n._captureEscape, n)
			},
			events: [U, P, L, A, N, V],
			options: {
				name: "Draggable",
				distance: _.support.touch ? 0 : 5,
				group: "default",
				cursorOffset: null,
				axis: null,
				container: null,
				filter: null,
				ignore: null,
				holdToDrag: !1,
				autoScroll: !1,
				dropped: !1
			},
			cancelHold: function ()
			{
				this._activated = !1
			},
			_captureEscape: function (t)
			{
				var e = this;
				t.keyCode === _.keys.ESC && (e._trigger(N, {
					event: t
				}), e.userEvents.cancel())
			},
			_updateHint: function (e)
			{
				var n, r = this,
                    o = r.options,
                    a = r.boundaries,
                    s = o.axis,
                    l = r.options.cursorOffset;
				l ? n = {
					left: e.x.location + l.left,
					top: e.y.location + l.top
				} : (r.hintOffset.left += e.x.delta, r.hintOffset.top += e.y.delta, n = t.extend({}, r.hintOffset)), a && (n.top = i(n.top, a.y), n.left = i(n.left, a.x)), "x" === s ? delete n.top : "y" === s && delete n.left, r.hint.css(n)
			},
			_shouldIgnoreTarget: function (e)
			{
				var n = this.options.ignore;
				return n && t(e).is(n)
			},
			_select: function (t)
			{
				this._shouldIgnoreTarget(t.event.target) || t.preventDefault()
			},
			_start: function (n)
			{
				var r, i = this,
                    a = i.options,
                    s = a.container,
                    l = a.hint;
				return this._shouldIgnoreTarget(n.touch.initialTouch) || a.holdToDrag && !i._activated ? (i.userEvents.cancel(), e) : (i.currentTarget = n.target, i.currentTargetOffset = D(i.currentTarget), l && (i.hint && i.hint.stop(!0, !0).remove(), i.hint = _.isFunction(l) ? t(l.call(i, i.currentTarget)) : l, r = D(i.currentTarget), i.hintOffset = r, i.hint.css({
					position: "absolute",
					zIndex: 2e4,
					left: r.left,
					top: r.top
				}).appendTo(y.body), i.angular("compile", function ()
				{
					i.hint.removeAttr("ng-repeat");
					for (var e = t(n.target) ; !e.data("$$kendoScope") && e.length;) e = e.parent();
					return {
						elements: i.hint.get(),
						scopeFrom: e.data("$$kendoScope")
					}
				})), O[a.group] = i, i.dropped = !1, s && (i.boundaries = o(s, i.hint)), t(y).on(W, i._captureEscape), i._trigger(P, n) && (i.userEvents.cancel(), i._afterEnd()), i.userEvents.capture(), e)
			},
			_hold: function (t)
			{
				this.currentTarget = t.target, this._trigger(U, t) ? this.userEvents.cancel() : this._activated = !0
			},
			_drag: function (e)
			{
				var n, r;
				e.preventDefault(), n = this._elementUnderCursor(e), this.options.autoScroll && this._cursorElement !== n && (this._scrollableParent = u(n), this._cursorElement = n), this._lastEvent = e, this._processMovement(e, n), this.options.autoScroll && this._scrollableParent[0] && (r = h(e.x.location, e.y.location, l(this._scrollableParent)), this._scrollCompenstation = t.extend({}, this.hintOffset), this._scrollVelocity = r, 0 === r.y && 0 === r.x ? (clearInterval(this._scrollInterval), this._scrollInterval = null) : this._scrollInterval || (this._scrollInterval = setInterval(t.proxy(this, "_autoScroll"), 50))), this.hint && this._updateHint(e)
			},
			_processMovement: function (n, r)
			{
				this._withDropTarget(r, function (r, i)
				{
					if (!r) return d && (d._trigger($, C(n, {
						dropTarget: t(d.targetElement)
					})), d = null), e;
					if (d) {
						if (i === d.targetElement) return;
						d._trigger($, C(n, {
							dropTarget: t(d.targetElement)
						}))
					}
					r._trigger(B, C(n, {
						dropTarget: t(i)
					})), d = C(r, {
						targetElement: i
					})
				}), this._trigger(L, C(n, {
					dropTarget: d,
					elementUnderCursor: r
				}))
			},
			_autoScroll: function ()
			{
				var t, e, n, r, i, o, a, s, l = this._scrollableParent[0],
                    u = this._scrollVelocity,
                    h = this._scrollCompenstation;
				l && (t = this._elementUnderCursor(this._lastEvent), this._processMovement(this._lastEvent, t), r = l === c()[0], r ? (e = y.body.scrollHeight > b.height(), n = y.body.scrollWidth > b.width()) : (e = l.offsetHeight <= l.scrollHeight, n = l.offsetWidth <= l.scrollWidth), i = l.scrollTop + u.y, o = e && i > 0 && i < l.scrollHeight, a = l.scrollLeft + u.x, s = n && a > 0 && a < l.scrollWidth, o && (l.scrollTop += u.y), s && (l.scrollLeft += u.x), r && (s || o) && (o && (h.top += u.y), s && (h.left += u.x), this.hint.css(h)))
			},
			_end: function (e)
			{
				this._withDropTarget(this._elementUnderCursor(e), function (n, r)
				{
					n && (n._drop(C({}, e, {
						dropTarget: t(r)
					})), d = null)
				}), this._cancel(this._trigger(A, e))
			},
			_cancel: function (t)
			{
				var e = this;
				e._scrollableParent = null, this._cursorElement = null, clearInterval(this._scrollInterval), e._activated = !1, e.hint && !e.dropped ? setTimeout(function ()
				{
					e.hint.stop(!0, !0), t ? e._afterEndHandler() : e.hint.animate(e.currentTargetOffset, "fast", e._afterEndHandler)
				}, 0) : e._afterEnd()
			},
			_trigger: function (t, e)
			{
				var n = this;
				return n.trigger(t, C({}, e.event, {
					x: e.x,
					y: e.y,
					currentTarget: n.currentTarget,
					initialTarget: e.touch ? e.touch.initialTouch : null,
					dropTarget: e.dropTarget,
					elementUnderCursor: e.elementUnderCursor
				}))
			},
			_elementUnderCursor: function (t)
			{
				var e = H(t),
                    r = this.hint;
				return r && n(r[0], e) && (r.hide(), e = H(t), e || (e = H(t)), r.show()), e
			},
			_withDropTarget: function (t, e)
			{
				var n, r = this.options.group,
                    i = k[r],
                    o = I[r];
				(i && i.length || o && o.length) && (n = a(t, i, o), n ? e(n.target, n.targetElement) : e())
			},
			destroy: function ()
			{
				var t = this;
				T.fn.destroy.call(t), t._afterEnd(), t.userEvents.destroy(), this._scrollableParent = null, this._cursorElement = null, clearInterval(this._scrollInterval), t.currentTarget = null
			},
			_afterEnd: function ()
			{
				var e = this;
				e.hint && e.hint.remove(), delete O[e.options.group], e.trigger("destroy"), e.trigger(V), t(y).off(W, e._captureEscape)
			}
		}), _.ui.plugin(g), _.ui.plugin(v), _.ui.plugin(m), _.TapCapture = j, _.containerBoundaries = o, C(_.ui, {
			Pane: J,
			PaneDimensions: Q,
			Movable: p
		}), _.ui.Draggable.utils = {
			autoScrollVelocity: h,
			scrollableViewPort: l,
			findScrollableParent: u
		}
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (t, e, n)
{
	(n || e)()
});;
! function (i, define)
{
	define("kendo.window.min", ["kendo.draganddrop.min"], i)
}(function ()
{
	return function (i, t)
	{
		function e(i)
		{
			return t !== i
		}

		function n(i, t, e)
		{
			return Math.max(Math.min(parseInt(i, 10), e === 1 / 0 ? e : parseInt(e, 10)), parseInt(t, 10))
		}

		function o()
		{
			return !this.type || this.type.toLowerCase().indexOf("script") >= 0
		}

		function s(i)
		{
			var t = this;
			t.owner = i, t._preventDragging = !1, t._draggable = new d(i.wrapper, {
				filter: ">" + y,
				group: i.wrapper.id + "-resizing",
				dragstart: g(t.dragstart, t),
				drag: g(t.drag, t),
				dragend: g(t.dragend, t)
			}), t._draggable.userEvents.bind("press", g(t.addOverlay, t)), t._draggable.userEvents.bind("release", g(t.removeOverlay, t))
		}

		function r(i, t)
		{
			var e = this;
			e.owner = i, e._preventDragging = !1, e._draggable = new d(i.wrapper, {
				filter: t,
				group: i.wrapper.id + "-moving",
				dragstart: g(e.dragstart, e),
				drag: g(e.drag, e),
				dragend: g(e.dragend, e),
				dragcancel: g(e.dragcancel, e)
			}), e._draggable.userEvents.stopPropagation = !1
		}
		var a = window.kendo,
            l = a.ui.Widget,
            d = a.ui.Draggable,
            c = i.isPlainObject,
            p = a._activeElement,
            h = a._outerWidth,
            f = a._outerHeight,
            g = i.proxy,
            u = i.extend,
            m = i.each,
            w = a.template,
            v = "body",
            _ = ".kendoWindow",
            k = ".k-window",
            z = ".k-window-title",
            b = z + "bar",
            x = ".k-window-content",
            y = ".k-resize-handle",
            T = ".k-overlay",
            O = "k-content-frame",
            M = "k-i-loading",
            S = "k-state-hover",
            L = "k-state-focused",
            I = "k-window-maximized",
            P = ":visible",
            H = "hidden",
            C = "cursor",
            D = "open",
            W = "activate",
            F = "deactivate",
            j = "close",
            E = "refresh",
            R = "minimize",
            N = "maximize",
            A = "resizeStart",
            q = "resize",
            G = "resizeEnd",
            U = "dragstart",
            K = "dragend",
            V = "error",
            B = "overflow",
            Q = "zIndex",
            J = ".k-window-actions .k-i-minimize,.k-window-actions .k-i-maximize",
            X = ".k-i-pin",
            Y = ".k-i-unpin",
            Z = X + "," + Y,
            $ = ".k-window-titlebar .k-window-action",
            ii = ".k-window-titlebar .k-i-refresh",
            ti = a.isLocalUrl,
            ei = l.extend({
            	init: function (n, s)
            	{
            		var r, d, p, h, f, u, m, w = this,
                        v = {},
                        y = !1,
                        T = s && s.actions && !s.actions.length;
            		l.fn.init.call(w, n, s), s = w.options, h = s.position, n = w.element, f = s.content, T && (s.actions = []), w.appendTo = i(s.appendTo), f && !c(f) && (f = s.content = {
            			url: f
            		}), n.find("script").filter(o).remove(), n.parent().is(w.appendTo) || h.top !== t && h.left !== t || (n.is(P) ? (v = n.offset(), y = !0) : (d = n.css("visibility"), p = n.css("display"), n.css({
            			visibility: H,
            			display: ""
            		}), v = n.offset(), n.css({
            			visibility: d,
            			display: p
            		})), h.top === t && (h.top = v.top), h.left === t && (h.left = v.left)), e(s.visible) && null !== s.visible || (s.visible = n.is(P)), r = w.wrapper = n.closest(k), n.is(".k-content") && r[0] || (n.addClass("k-window-content k-content"), w._createWindow(n, s), r = w.wrapper = n.closest(k), w._dimensions()), w._position(), s.pinned && w.pin(!0), f && w.refresh(f), s.visible && w.toFront(), u = r.children(x), w._tabindex(u), s.visible && s.modal && w._overlay(r.is(P)).css({
            			opacity: .5
            		}), r.on("mouseenter" + _, $, g(w._buttonEnter, w)).on("mouseleave" + _, $, g(w._buttonLeave, w)).on("click" + _, "> " + $, g(w._windowActionHandler, w)), u.on("keydown" + _, g(w._keydown, w)).on("focus" + _, g(w._focus, w)).on("blur" + _, g(w._blur, w)), this._resizable(), this._draggable(), m = n.attr("id"), m && (m += "_wnd_title", r.children(b).children(z).attr("id", m), u.attr({
            			role: "dialog",
            			"aria-labelledby": m
            		})), r.add(r.children(".k-resize-handle," + b)).on("mousedown" + _, g(w.toFront, w)), w.touchScroller = a.touchScroller(n), w._resizeHandler = g(w._onDocumentResize, w), w._marker = a.guid().substring(0, 8), i(window).on("resize" + _ + w._marker, w._resizeHandler), s.visible && (w.trigger(D), w.trigger(W)), a.notify(w)
            	},
            	_buttonEnter: function (t)
            	{
            		i(t.currentTarget).addClass(S)
            	},
            	_buttonLeave: function (t)
            	{
            		i(t.currentTarget).removeClass(S)
            	},
            	_focus: function ()
            	{
            		this.wrapper.addClass(L)
            	},
            	_blur: function ()
            	{
            		this.wrapper.removeClass(L)
            	},
            	_dimensions: function ()
            	{
            		var i, t, e = this.wrapper,
                        o = this.options,
                        s = o.width,
                        r = o.height,
                        a = o.maxHeight,
                        l = ["minWidth", "minHeight", "maxWidth", "maxHeight"];
            		for (this.title(o.title), i = 0; i < l.length; i++) t = o[l[i]] || "", t != 1 / 0 && e.css(l[i], t);
            		a != 1 / 0 && this.element.css("maxHeight", a), e.width(s ? ("" + s).indexOf("%") > 0 ? s : n(s, o.minWidth, o.maxWidth) : ""), e.height(r ? ("" + r).indexOf("%") > 0 ? r : n(r, o.minHeight, o.maxHeight) : ""), o.visible || e.hide()
            	},
            	_position: function ()
            	{
            		var i = this.wrapper,
                        t = this.options.position;
            		0 === t.top && (t.top = "" + t.top), 0 === t.left && (t.left = "" + t.left), i.css({
            			top: t.top || "",
            			left: t.left || ""
            		})
            	},
            	_animationOptions: function (i)
            	{
            		var t = this.options.animation,
                        e = {
                        	open: {
                        		effects: {}
                        	},
                        	close: {
                        		hide: !0,
                        		effects: {}
                        	}
                        };
            		return t && t[i] || e[i]
            	},
            	_resize: function ()
            	{
            		a.resize(this.element.children())
            	},
            	_resizable: function ()
            	{
            		var t = this.options.resizable,
                        e = this.wrapper;
            		this.resizing && (e.off("dblclick" + _).children(y).remove(), this.resizing.destroy(), this.resizing = null), t && (e.on("dblclick" + _, b, g(function (t)
            		{
            			i(t.target).closest(".k-window-action").length || this.toggleMaximization()
            		}, this)), m("n e s w se sw ne nw".split(" "), function (i, t)
            		{
            			e.append(ni.resizeHandle(t))
            		}), this.resizing = new s(this)), e = null
            	},
            	_draggable: function ()
            	{
            		var i = this.options.draggable;
            		this.dragging && (this.dragging.destroy(), this.dragging = null), i && (this.dragging = new r(this, i.dragHandle || b))
            	},
            	_actions: function ()
            	{
            		var t = this.options.actions,
                        e = this.wrapper.children(b),
                        n = e.find(".k-window-actions");
            		t = i.map(t, function (i)
            		{
            			return {
            				name: i
            			}
            		}), n.html(a.render(ni.action, t))
            	},
            	setOptions: function (i)
            	{
            		var e, n;
            		l.fn.setOptions.call(this, i), e = this.options.scrollable !== !1, this.restore(), this._dimensions(), this._position(), this._resizable(), this._draggable(), this._actions(), t !== i.modal && (n = this.options.visible !== !1, this._overlay(i.modal && n)), this.element.css(B, e ? "" : "hidden")
            	},
            	events: [D, W, F, j, R, N, E, A, q, G, U, K, V],
            	options: {
            		name: "Window",
            		animation: {
            			open: {
            				effects: {
            					zoom: {
            						direction: "in"
            					},
            					fade: {
            						direction: "in"
            					}
            				},
            				duration: 350
            			},
            			close: {
            				effects: {
            					zoom: {
            						direction: "out",
            						properties: {
            							scale: .7
            						}
            					},
            					fade: {
            						direction: "out"
            					}
            				},
            				duration: 350,
            				hide: !0
            			}
            		},
            		title: "",
            		actions: ["Close"],
            		autoFocus: !0,
            		modal: !1,
            		resizable: !0,
            		draggable: !0,
            		minWidth: 90,
            		minHeight: 50,
            		maxWidth: 1 / 0,
            		maxHeight: 1 / 0,
            		pinned: !1,
            		scrollable: !0,
            		position: {},
            		content: null,
            		visible: null,
            		height: null,
            		width: null,
            		appendTo: "body",
            		isMaximized: !1,
            		isMinimized: !1
            	},
            	_closable: function ()
            	{
            		return i.inArray("close", i.map(this.options.actions, function (i)
            		{
            			return i.toLowerCase()
            		})) > -1
            	},
            	_keydown: function (i)
            	{
            		var t, e, o, s, r, l, d = this,
                        c = d.options,
                        p = a.keys,
                        h = i.keyCode,
                        f = d.wrapper,
                        g = 10,
                        u = d.options.isMaximized;
            		i.target != i.currentTarget || d._closing || (h == p.ESC && d._closable() && d._close(!1), !c.draggable || i.ctrlKey || u || (t = a.getOffset(f), h == p.UP ? e = f.css("top", t.top - g) : h == p.DOWN ? e = f.css("top", t.top + g) : h == p.LEFT ? e = f.css("left", t.left - g) : h == p.RIGHT && (e = f.css("left", t.left + g))), c.resizable && i.ctrlKey && !u && (h == p.UP ? (e = !0, s = f.height() - g) : h == p.DOWN && (e = !0, s = f.height() + g), h == p.LEFT ? (e = !0, o = f.width() - g) : h == p.RIGHT && (e = !0, o = f.width() + g), e && (r = n(o, c.minWidth, c.maxWidth), l = n(s, c.minHeight, c.maxHeight), isNaN(r) || (f.width(r), d.options.width = r + "px"), isNaN(l) || (f.height(l), d.options.height = l + "px"), d.resize())), e && i.preventDefault())
            	},
            	_overlay: function (t)
            	{
            		var e = this.appendTo.children(T),
                        n = this.wrapper;
            		return e.length || (e = i("<div class='k-overlay' />")), e.insertBefore(n[0]).toggle(t).css(Q, parseInt(n.css(Q), 10) - 1), e
            	},
            	_actionForIcon: function (i)
            	{
            		var t = /\bk-i-\w+\b/.exec(i[0].className)[0];
            		return {
            			"k-i-close": "_close",
            			"k-i-maximize": "maximize",
            			"k-i-minimize": "minimize",
            			"k-i-restore": "restore",
            			"k-i-refresh": "refresh",
            			"k-i-pin": "pin",
            			"k-i-unpin": "unpin"
            		}[t]
            	},
            	_windowActionHandler: function (e)
            	{
            		var n, o;
            		if (!this._closing) return n = i(e.target).closest(".k-window-action").find(".k-icon"), o = this._actionForIcon(n), o ? (e.preventDefault(), this[o](), !1) : t
            	},
            	_modals: function ()
            	{
            		var t = this,
                        e = i(k).filter(function ()
                        {
                        	var e = i(this),
                                n = t._object(e),
                                o = n && n.options;
                        	return o && o.modal && o.visible && o.appendTo === t.options.appendTo && e.is(P)
                        }).sort(function (t, e)
                        {
                        	return +i(t).css("zIndex") - +i(e).css("zIndex")
                        });
            		return t = null, e
            	},
            	_object: function (i)
            	{
            		var e = i.children(x),
                        n = a.widgetInstance(e);
            		return n instanceof ei ? n : t
            	},
            	center: function ()
            	{
            		var t, e, n = this,
                        o = n.options.position,
                        s = n.wrapper,
                        r = i(window),
                        a = 0,
                        l = 0;
            		return n.options.isMaximized ? n : (n.options.pinned || (a = r.scrollTop(), l = r.scrollLeft()), e = l + Math.max(0, (r.width() - s.width()) / 2), t = a + Math.max(0, (r.height() - s.height() - parseInt(s.css("paddingTop"), 10)) / 2), s.css({
            			left: e,
            			top: t
            		}), o.top = t, o.left = e, n)
            	},
            	title: function (i)
            	{
            		var t, e = this,
                        n = e.wrapper,
                        o = e.options,
                        s = n.children(b),
                        r = s.children(z);
            		return arguments.length ? (i === !1 ? (n.addClass("k-window-titleless"), s.remove()) : (s.length ? r.html(i) : (n.prepend(ni.titlebar(o)), e._actions(), s = n.children(b)), t = parseInt(f(s), 10), n.css("padding-top", t), s.css("margin-top", -t)), e.options.title = i, e) : r.html()
            	},
            	content: function (i, t)
            	{
            		var n = this.wrapper.children(x),
                        o = n.children(".km-scroll-container");
            		return n = o[0] ? o : n, e(i) ? (this.angular("cleanup", function ()
            		{
            			return {
            				elements: n.children()
            			}
            		}), a.destroy(this.element.children()), n.empty().html(i), this.angular("compile", function ()
            		{
            			var i, e = [];
            			for (i = n.length; --i >= 0;) e.push({
            				dataItem: t
            			});
            			return {
            				elements: n.children(),
            				data: e
            			}
            		}), this) : n.html()
            	},
            	open: function ()
            	{
            		var t, e, n, o = this,
                        s = o.wrapper,
                        r = o.options,
                        l = this._animationOptions("open"),
                        d = s.children(x),
                        c = i(document);
            		return o.trigger(D) || (o._closing && s.kendoStop(!0, !0), o._closing = !1, o.toFront(), r.autoFocus && o.element.focus(), r.visible = !0, r.modal && (e = !!o._modals().length, t = o._overlay(e), t.kendoStop(!0, !0), l.duration && a.effects.Fade && !e ? (n = a.fx(t).fadeIn(), n.duration(l.duration || 0), n.endValue(.5), n.play()) : t.css("opacity", .5), t.show()), s.is(P) || (d.css(B, H), s.show().kendoStop().kendoAnimate({
            			effects: l.effects,
            			duration: l.duration,
            			complete: g(this._activate, this)
            		}))), r.isMaximized && (o._documentScrollTop = c.scrollTop(), o._documentScrollLeft = c.scrollLeft(), i("html, body").css(B, H)), o
            	},
            	_activate: function ()
            	{
            		var i = this.options.scrollable !== !1;
            		this.options.autoFocus && this.element.focus(), this.element.css(B, i ? "" : "hidden"), a.resize(this.element.children()), this.trigger(W)
            	},
            	_removeOverlay: function (e)
            	{
            		var n, o = this._modals(),
                        s = this.options,
                        r = s.modal && !o.length,
                        l = s.modal ? this._overlay(!0) : i(t),
                        d = this._animationOptions("close");
            		r ? !e && d.duration && a.effects.Fade ? (n = a.fx(l).fadeOut(), n.duration(d.duration || 0), n.startValue(.5), n.play()) : this._overlay(!1).remove() : o.length && this._object(o.last())._overlay(!0)
            	},
            	_close: function (t)
            	{
            		var e = this,
                        n = e.wrapper,
                        o = e.options,
                        s = this._animationOptions("open"),
                        r = this._animationOptions("close"),
                        a = i(document);
            		if (n.is(P) && !e.trigger(j, {
            			userTriggered: !t
            		})) {
            			if (e._closing) return;
            			e._closing = !0, o.visible = !1, i(k).each(function (t, e)
            			{
            				var o = i(e).children(x);
            				e != n && o.find("> ." + O).length > 0 && o.children(T).remove()
            			}), this._removeOverlay(), n.kendoStop().kendoAnimate({
            				effects: r.effects || s.effects,
            				reverse: r.reverse === !0,
            				duration: r.duration,
            				complete: g(this._deactivate, this)
            			})
            		}
            		e.options.isMaximized && (i("html, body").css(B, ""), e._documentScrollTop && e._documentScrollTop > 0 && a.scrollTop(e._documentScrollTop), e._documentScrollLeft && e._documentScrollLeft > 0 && a.scrollLeft(e._documentScrollLeft))
            	},
            	_deactivate: function ()
            	{
            		var i, t = this;
            		t.wrapper.hide().css("opacity", ""), t.trigger(F), t.options.modal && (i = t._object(t._modals().last()), i && i.toFront())
            	},
            	close: function ()
            	{
            		return this._close(!0), this
            	},
            	_actionable: function (t)
            	{
            		return i(t).is($ + "," + $ + " .k-icon,:input,a")
            	},
            	_shouldFocus: function (t)
            	{
            		var e = p(),
                        n = this.element;
            		return this.options.autoFocus && !i(e).is(n) && !this._actionable(t) && (!n.find(e).length || !n.find(t).length)
            	},
            	toFront: function (t)
            	{
            		var e, n, o = this,
                        s = o.wrapper,
                        r = s[0],
                        a = +s.css(Q),
                        l = a,
                        d = t && t.target || null;
            		return i(k).each(function (t, e)
            		{
            			var n = i(e),
                            o = n.css(Q),
                            s = n.children(x);
            			isNaN(o) || (a = Math.max(+o, a)), e != r && s.find("> ." + O).length > 0 && s.append(ni.overlay)
            		}), (!s[0].style.zIndex || l < a) && s.css(Q, a + 2), o.element.find("> .k-overlay").remove(), o._shouldFocus(d) && (o.element.focus(), e = i(window).scrollTop(), n = parseInt(s.position().top, 10), !o.options.pinned && n > 0 && n < e && (e > 0 ? i(window).scrollTop(n) : s.css("top", e))), s = null, o
            	},
            	toggleMaximization: function ()
            	{
            		return this._closing ? this : this[this.options.isMaximized ? "restore" : "maximize"]()
            	},
            	restore: function ()
            	{
            		var t = this,
                        e = t.options,
                        n = e.minHeight,
                        o = t.restoreOptions,
                        s = i(document);
            		return e.isMaximized || e.isMinimized ? (n && n != 1 / 0 && t.wrapper.css("min-height", n), t.wrapper.css({
            			position: e.pinned ? "fixed" : "absolute",
            			left: o.left,
            			top: o.top,
            			width: o.width,
            			height: o.height
            		}).removeClass(I).find(".k-window-content,.k-resize-handle").show().end().find(".k-window-titlebar .k-i-restore").parent().remove().end().end().find(J).parent().show().end().end().find(Z).parent().show(), t.options.width = o.width, t.options.height = o.height, i("html, body").css(B, ""), this._documentScrollTop && this._documentScrollTop > 0 && s.scrollTop(this._documentScrollTop), this._documentScrollLeft && this._documentScrollLeft > 0 && s.scrollLeft(this._documentScrollLeft), e.isMaximized = e.isMinimized = !1, t.resize(), t) : t
            	},
            	_sizingAction: function (i, t)
            	{
            		var e = this,
                        n = e.wrapper,
                        o = n[0].style,
                        s = e.options;
            		return s.isMaximized || s.isMinimized ? e : (e.restoreOptions = {
            			width: o.width,
            			height: o.height
            		}, n.children(y).hide().end().children(b).find(J).parent().hide().eq(0).before(ni.action({
            			name: "Restore"
            		})), t.call(e), e.wrapper.children(b).find(Z).parent().toggle("maximize" !== i), e.trigger(i), e)
            	},
            	maximize: function ()
            	{
            		return this._sizingAction("maximize", function ()
            		{
            			var t = this,
                            e = t.wrapper,
                            n = e.position(),
                            o = i(document);
            			u(t.restoreOptions, {
            				left: n.left,
            				top: n.top
            			}), e.css({
            				left: 0,
            				top: 0,
            				position: "fixed"
            			}).addClass(I), this._documentScrollTop = o.scrollTop(), this._documentScrollLeft = o.scrollLeft(), i("html, body").css(B, H), t.options.isMaximized = !0, t._onDocumentResize()
            		}), this
            	},
            	isMaximized: function ()
            	{
            		return this.options.isMaximized
            	},
            	minimize: function ()
            	{
            		return this._sizingAction("minimize", function ()
            		{
            			var i = this;
            			i.wrapper.css({
            				height: "",
            				minHeight: ""
            			}), i.element.hide(), i.options.isMinimized = !0
            		}), this
            	},
            	isMinimized: function ()
            	{
            		return this.options.isMinimized
            	},
            	pin: function (t)
            	{
            		var e = this,
                        n = i(window),
                        o = e.wrapper,
                        s = parseInt(o.css("top"), 10),
                        r = parseInt(o.css("left"), 10);
            		(t || !e.options.pinned && !e.options.isMaximized) && (o.css({
            			position: "fixed",
            			top: s - n.scrollTop(),
            			left: r - n.scrollLeft()
            		}), o.children(b).find(X).addClass("k-i-unpin").removeClass("k-i-pin"), e.options.pinned = !0)
            	},
            	unpin: function ()
            	{
            		var t = this,
                        e = i(window),
                        n = t.wrapper,
                        o = parseInt(n.css("top"), 10),
                        s = parseInt(n.css("left"), 10);
            		t.options.pinned && !t.options.isMaximized && (n.css({
            			position: "",
            			top: o + e.scrollTop(),
            			left: s + e.scrollLeft()
            		}), n.children(b).find(Y).addClass("k-i-pin").removeClass("k-i-unpin"), t.options.pinned = !1)
            	},
            	_onDocumentResize: function ()
            	{
            		var t, e, n = this,
                        o = n.wrapper,
                        s = i(window),
                        r = a.support.zoomLevel();
            		n.options.isMaximized && (t = s.width() / r, e = s.height() / r - parseInt(o.css("padding-top"), 10), o.css({
            			width: t,
            			height: e
            		}), n.options.width = t, n.options.height = e, n.resize())
            	},
            	refresh: function (t)
            	{
            		var n, o, s, r = this,
                        a = r.options,
                        l = i(r.element);
            		return c(t) || (t = {
            			url: t
            		}), t = u({}, a.content, t), o = e(a.iframe) ? a.iframe : t.iframe, s = t.url, s ? (e(o) || (o = !ti(s)), o ? (n = l.find("." + O)[0], n ? n.src = s || n.src : l.html(ni.contentFrame(u({}, a, {
            			content: t
            		}))), l.find("." + O).unbind("load" + _).on("load" + _, g(this._triggerRefresh, this))) : r._ajaxRequest(t)) : (t.template && r.content(w(t.template)({})), r.trigger(E)), l.toggleClass("k-window-iframecontent", !!o), r
            	},
            	_triggerRefresh: function ()
            	{
            		this.trigger(E)
            	},
            	_ajaxComplete: function ()
            	{
            		clearTimeout(this._loadingIconTimeout), this.wrapper.find(ii).removeClass(M)
            	},
            	_ajaxError: function (i, t)
            	{
            		this.trigger(V, {
            			status: t,
            			xhr: i
            		})
            	},
            	_ajaxSuccess: function (i)
            	{
            		return function (t)
            		{
            			var e = t;
            			i && (e = w(i)(t || {})), this.content(e, t), this.element.prop("scrollTop", 0), this.trigger(E)
            		}
            	},
            	_showLoading: function ()
            	{
            		this.wrapper.find(ii).addClass(M)
            	},
            	_ajaxRequest: function (t)
            	{
            		this._loadingIconTimeout = setTimeout(g(this._showLoading, this), 100), i.ajax(u({
            			type: "GET",
            			dataType: "html",
            			cache: !1,
            			error: g(this._ajaxError, this),
            			complete: g(this._ajaxComplete, this),
            			success: g(this._ajaxSuccess(t.template), this)
            		}, t))
            	},
            	_destroy: function ()
            	{
            		this.resizing && this.resizing.destroy(), this.dragging && this.dragging.destroy(), this.wrapper.off(_).children(x).off(_).end().find(".k-resize-handle,.k-window-titlebar").off(_), i(window).off("resize" + _ + this._marker), clearTimeout(this._loadingIconTimeout), l.fn.destroy.call(this), this.unbind(t), a.destroy(this.wrapper), this._removeOverlay(!0)
            	},
            	destroy: function ()
            	{
            		this._destroy(), this.wrapper.empty().remove(), this.wrapper = this.appendTo = this.element = i()
            	},
            	_createWindow: function ()
            	{
            		var t, e, n = this.element,
                        o = this.options,
                        s = a.support.isRtl(n);
            		o.scrollable === !1 && n.css("overflow", "hidden"), e = i(ni.wrapper(o)), t = n.find("iframe:not(.k-content)").map(function ()
            		{
            			var i = this.getAttribute("src");
            			return this.src = "", i
            		}), e.toggleClass("k-rtl", s).appendTo(this.appendTo).append(n).find("iframe:not(.k-content)").each(function (i)
            		{
            			this.src = t[i]
            		}), e.find(".k-window-title").css(s ? "left" : "right", h(e.find(".k-window-actions")) + 10), n.css("visibility", "").show(), n.find("[data-role=editor]").each(function ()
            		{
            			var t = i(this).data("kendoEditor");
            			t && t.refresh()
            		}), e = n = null
            	}
            }),
            ni = {
            	wrapper: w("<div class='k-widget k-window' />"),
            	action: w("<a role='button' href='\\#' class='k-window-action k-link' aria-label='#= name #'><span class='k-icon k-i-#= name.toLowerCase() #'></span></a>"),
            	titlebar: w("<div class='k-window-titlebar k-header'>&nbsp;<span class='k-window-title'>#= title #</span><div class='k-window-actions' /></div>"),
            	overlay: "<div class='k-overlay' />",
            	contentFrame: w("<iframe frameborder='0' title='#= title #' class='" + O + "' src='#= content.url #'>This page requires frames in order to show content</iframe>"),
            	resizeHandle: w("<div class='k-resize-handle k-resize-#= data #'></div>")
            };
		s.prototype = {
			addOverlay: function ()
			{
				this.owner.wrapper.append(ni.overlay)
			},
			removeOverlay: function ()
			{
				this.owner.wrapper.find(T).remove()
			},
			dragstart: function (t)
			{
				var e = this,
                    n = e.owner,
                    o = n.wrapper;
				e._preventDragging = n.trigger(A), e._preventDragging || (e.elementPadding = parseInt(o.css("padding-top"), 10), e.initialPosition = a.getOffset(o, "position"), e.resizeDirection = t.currentTarget.prop("className").replace("k-resize-handle k-resize-", ""), e.initialSize = {
					width: o.width(),
					height: o.height()
				}, e.containerOffset = a.getOffset(n.appendTo, "position"), o.children(y).not(t.currentTarget).hide(), i(v).css(C, t.currentTarget.css(C)))
			},
			drag: function (t)
			{
				var e, o, s, r, a, l, d, c, p, h, f, g, u, m, w;
				this._preventDragging || (e = this, o = e.owner, s = o.wrapper, r = o.options, a = e.resizeDirection, l = e.containerOffset, d = e.initialPosition, c = e.initialSize, u = Math.max(t.x.location, 0), m = Math.max(t.y.location, 0), a.indexOf("e") >= 0 ? (p = u - d.left - l.left, s.width(n(p, r.minWidth, r.maxWidth))) : a.indexOf("w") >= 0 && (g = d.left + c.width + l.left, p = n(g - u, r.minWidth, r.maxWidth), s.css({
					left: g - p - l.left,
					width: p
				})), w = m, o.options.pinned && (w -= i(window).scrollTop()), a.indexOf("s") >= 0 ? (h = w - d.top - e.elementPadding - l.top, s.height(n(h, r.minHeight, r.maxHeight))) : a.indexOf("n") >= 0 && (f = d.top + c.height + l.top, h = n(f - w, r.minHeight, r.maxHeight), s.css({
					top: f - h - l.top,
					height: h
				})), p && (o.options.width = p + "px"), h && (o.options.height = h + "px"), o.resize())
			},
			dragend: function (t)
			{
				if (!this._preventDragging) {
					var e = this,
                        n = e.owner,
                        o = n.wrapper;
					return o.children(y).not(t.currentTarget).show(), i(v).css(C, ""), n.touchScroller && n.touchScroller.reset(), 27 == t.keyCode && o.css(e.initialPosition).css(e.initialSize), n.trigger(G), !1
				}
			},
			destroy: function ()
			{
				this._draggable && this._draggable.destroy(), this._draggable = this.owner = null
			}
		}, r.prototype = {
			dragstart: function (t)
			{
				var e = this.owner,
                    n = e.element,
                    o = n.find(".k-window-actions"),
                    s = a.getOffset(e.appendTo);
				this._preventDragging = e.trigger(U), this._preventDragging || (e.initialWindowPosition = a.getOffset(e.wrapper, "position"), e.initialPointerPosition = {
					left: t.x.client,
					top: t.y.client
				}, e.startPosition = {
					left: t.x.client - e.initialWindowPosition.left,
					top: t.y.client - e.initialWindowPosition.top
				}, e.minLeftPosition = o.length > 0 ? h(o) + parseInt(o.css("right"), 10) - h(n) : 20 - h(n), e.minLeftPosition -= s.left, e.minTopPosition = -s.top, e.wrapper.append(ni.overlay).children(y).hide(), i(v).css(C, t.currentTarget.css(C)))
			},
			drag: function (t)
			{
				var e, n;
				this._preventDragging || (e = this.owner, n = e.options.position, n.top = Math.max(t.y.client - e.startPosition.top, e.minTopPosition), n.left = Math.max(t.x.client - e.startPosition.left, e.minLeftPosition), a.support.transforms ? i(e.wrapper).css("transform", "translate(" + (t.x.client - e.initialPointerPosition.left) + "px, " + (t.y.client - e.initialPointerPosition.top) + "px)") : i(e.wrapper).css(n))
			},
			_finishDrag: function ()
			{
				var t = this.owner;
				t.wrapper.children(y).toggle(!t.options.isMinimized).end().find(T).remove(), i(v).css(C, "")
			},
			dragcancel: function (i)
			{
				this._preventDragging || (this._finishDrag(), i.currentTarget.closest(k).css(this.owner.initialWindowPosition))
			},
			dragend: function ()
			{
				if (!this._preventDragging) return i(this.owner.wrapper).css(this.owner.options.position).css("transform", ""), this._finishDrag(), this.owner.trigger(K), !1
			},
			destroy: function ()
			{
				this._draggable && this._draggable.destroy(), this._draggable = this.owner = null
			}
		}, a.ui.plugin(ei)
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (i, t, e)
{
	(e || t)()
});;
! function (e, define)
{
	define("kendo.color.min", ["kendo.core.min"], e)
}(function ()
{
	! function (e, t, r)
	{
		function n(e, f)
		{
			var a, i;
			if (null == e || "none" == e) return null;
			if (e instanceof s) return e;
			if (e = e.toLowerCase(), a = o.exec(e)) return e = "transparent" == a[1] ? new u(1, 1, 1, 0) : n(h.namedColors[a[1]], f), e.match = [a[1]], e;
			if ((a = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})\b/i.exec(e)) ? i = new l(r(a[1], 16), r(a[2], 16), r(a[3], 16), 1) : (a = /^#?([0-9a-f])([0-9a-f])([0-9a-f])\b/i.exec(e)) ? i = new l(r(a[1] + a[1], 16), r(a[2] + a[2], 16), r(a[3] + a[3], 16), 1) : (a = /^rgb\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/.exec(e)) ? i = new l(r(a[1], 10), r(a[2], 10), r(a[3], 10), 1) : (a = /^rgba\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9.]+)\s*\)/.exec(e)) ? i = new l(r(a[1], 10), r(a[2], 10), r(a[3], 10), t(a[4])) : (a = /^rgb\(\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*\)/.exec(e)) ? i = new u(t(a[1]) / 100, t(a[2]) / 100, t(a[3]) / 100, 1) : (a = /^rgba\(\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9.]+)\s*\)/.exec(e)) && (i = new u(t(a[1]) / 100, t(a[2]) / 100, t(a[3]) / 100, t(a[4]))), i) i.match = a;
			else if (!f) throw Error("Cannot parse color: " + e);
			return i
		}

		function f(e, t, r)
		{
			for (r || (r = "0"), e = e.toString(16) ; t > e.length;) e = "0" + e;
			return e
		}

		function a(e, t, r)
		{
			return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
		}
		var o, i, s, u, l, d, c, h = function (e)
		{
			var t, r, n, f, a, o = this,
                i = h.formats;
			if (1 === arguments.length)
				for (e = o.resolveColor(e), f = 0; f < i.length; f++) t = i[f].re, r = i[f].process, n = t.exec(e), n && (a = r(n), o.r = a[0], o.g = a[1], o.b = a[2]);
			else o.r = arguments[0], o.g = arguments[1], o.b = arguments[2];
			o.r = o.normalizeByte(o.r), o.g = o.normalizeByte(o.g), o.b = o.normalizeByte(o.b)
		};
		h.prototype = {
			toHex: function ()
			{
				var e = this,
                    t = e.padDigit,
                    r = e.r.toString(16),
                    n = e.g.toString(16),
                    f = e.b.toString(16);
				return "#" + t(r) + t(n) + t(f)
			},
			resolveColor: function (e)
			{
				return e = e || "black", "#" == e.charAt(0) && (e = e.substr(1, 6)), e = e.replace(/ /g, ""), e = e.toLowerCase(), e = h.namedColors[e] || e
			},
			normalizeByte: function (e)
			{
				return e < 0 || isNaN(e) ? 0 : e > 255 ? 255 : e
			},
			padDigit: function (e)
			{
				return 1 === e.length ? "0" + e : e
			},
			brightness: function (e)
			{
				var t = this,
                    r = Math.round;
				return t.r = r(t.normalizeByte(t.r * e)), t.g = r(t.normalizeByte(t.g * e)), t.b = r(t.normalizeByte(t.b * e)), t
			},
			percBrightness: function ()
			{
				var e = this;
				return Math.sqrt(.241 * e.r * e.r + .691 * e.g * e.g + .068 * e.b * e.b)
			}
		}, h.formats = [{
			re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
			process: function (e)
			{
				return [r(e[1], 10), r(e[2], 10), r(e[3], 10)]
			}
		}, {
			re: /^(\w{2})(\w{2})(\w{2})$/,
			process: function (e)
			{
				return [r(e[1], 16), r(e[2], 16), r(e[3], 16)]
			}
		}, {
			re: /^(\w{1})(\w{1})(\w{1})$/,
			process: function (e)
			{
				return [r(e[1] + e[1], 16), r(e[2] + e[2], 16), r(e[3] + e[3], 16)]
			}
		}], h.namedColors = {
			aliceblue: "f0f8ff",
			antiquewhite: "faebd7",
			aqua: "00ffff",
			aquamarine: "7fffd4",
			azure: "f0ffff",
			beige: "f5f5dc",
			bisque: "ffe4c4",
			black: "000000",
			blanchedalmond: "ffebcd",
			blue: "0000ff",
			blueviolet: "8a2be2",
			brown: "a52a2a",
			burlywood: "deb887",
			cadetblue: "5f9ea0",
			chartreuse: "7fff00",
			chocolate: "d2691e",
			coral: "ff7f50",
			cornflowerblue: "6495ed",
			cornsilk: "fff8dc",
			crimson: "dc143c",
			cyan: "00ffff",
			darkblue: "00008b",
			darkcyan: "008b8b",
			darkgoldenrod: "b8860b",
			darkgray: "a9a9a9",
			darkgrey: "a9a9a9",
			darkgreen: "006400",
			darkkhaki: "bdb76b",
			darkmagenta: "8b008b",
			darkolivegreen: "556b2f",
			darkorange: "ff8c00",
			darkorchid: "9932cc",
			darkred: "8b0000",
			darksalmon: "e9967a",
			darkseagreen: "8fbc8f",
			darkslateblue: "483d8b",
			darkslategray: "2f4f4f",
			darkslategrey: "2f4f4f",
			darkturquoise: "00ced1",
			darkviolet: "9400d3",
			deeppink: "ff1493",
			deepskyblue: "00bfff",
			dimgray: "696969",
			dimgrey: "696969",
			dodgerblue: "1e90ff",
			firebrick: "b22222",
			floralwhite: "fffaf0",
			forestgreen: "228b22",
			fuchsia: "ff00ff",
			gainsboro: "dcdcdc",
			ghostwhite: "f8f8ff",
			gold: "ffd700",
			goldenrod: "daa520",
			gray: "808080",
			grey: "808080",
			green: "008000",
			greenyellow: "adff2f",
			honeydew: "f0fff0",
			hotpink: "ff69b4",
			indianred: "cd5c5c",
			indigo: "4b0082",
			ivory: "fffff0",
			khaki: "f0e68c",
			lavender: "e6e6fa",
			lavenderblush: "fff0f5",
			lawngreen: "7cfc00",
			lemonchiffon: "fffacd",
			lightblue: "add8e6",
			lightcoral: "f08080",
			lightcyan: "e0ffff",
			lightgoldenrodyellow: "fafad2",
			lightgray: "d3d3d3",
			lightgrey: "d3d3d3",
			lightgreen: "90ee90",
			lightpink: "ffb6c1",
			lightsalmon: "ffa07a",
			lightseagreen: "20b2aa",
			lightskyblue: "87cefa",
			lightslategray: "778899",
			lightslategrey: "778899",
			lightsteelblue: "b0c4de",
			lightyellow: "ffffe0",
			lime: "00ff00",
			limegreen: "32cd32",
			linen: "faf0e6",
			magenta: "ff00ff",
			maroon: "800000",
			mediumaquamarine: "66cdaa",
			mediumblue: "0000cd",
			mediumorchid: "ba55d3",
			mediumpurple: "9370d8",
			mediumseagreen: "3cb371",
			mediumslateblue: "7b68ee",
			mediumspringgreen: "00fa9a",
			mediumturquoise: "48d1cc",
			mediumvioletred: "c71585",
			midnightblue: "191970",
			mintcream: "f5fffa",
			mistyrose: "ffe4e1",
			moccasin: "ffe4b5",
			navajowhite: "ffdead",
			navy: "000080",
			oldlace: "fdf5e6",
			olive: "808000",
			olivedrab: "6b8e23",
			orange: "ffa500",
			orangered: "ff4500",
			orchid: "da70d6",
			palegoldenrod: "eee8aa",
			palegreen: "98fb98",
			paleturquoise: "afeeee",
			palevioletred: "d87093",
			papayawhip: "ffefd5",
			peachpuff: "ffdab9",
			peru: "cd853f",
			pink: "ffc0cb",
			plum: "dda0dd",
			powderblue: "b0e0e6",
			purple: "800080",
			red: "ff0000",
			rosybrown: "bc8f8f",
			royalblue: "4169e1",
			saddlebrown: "8b4513",
			salmon: "fa8072",
			sandybrown: "f4a460",
			seagreen: "2e8b57",
			seashell: "fff5ee",
			sienna: "a0522d",
			silver: "c0c0c0",
			skyblue: "87ceeb",
			slateblue: "6a5acd",
			slategray: "708090",
			slategrey: "708090",
			snow: "fffafa",
			springgreen: "00ff7f",
			steelblue: "4682b4",
			tan: "d2b48c",
			teal: "008080",
			thistle: "d8bfd8",
			tomato: "ff6347",
			turquoise: "40e0d0",
			violet: "ee82ee",
			wheat: "f5deb3",
			white: "ffffff",
			whitesmoke: "f5f5f5",
			yellow: "ffff00",
			yellowgreen: "9acd32"
		}, o = ["transparent"];
		for (i in h.namedColors) h.namedColors.hasOwnProperty(i) && o.push(i);
		o = RegExp("^(" + o.join("|") + ")(\\W|$)", "i"), s = kendo.Class.extend({
			toHSV: function ()
			{
				return this
			},
			toRGB: function ()
			{
				return this
			},
			toHex: function ()
			{
				return this.toBytes().toHex()
			},
			toBytes: function ()
			{
				return this
			},
			toCss: function ()
			{
				return "#" + this.toHex()
			},
			toCssRgba: function ()
			{
				var e = this.toBytes();
				return "rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + t((+this.a).toFixed(3)) + ")"
			},
			toDisplay: function ()
			{
				return kendo.support.browser.msie && kendo.support.browser.version < 9 ? this.toCss() : this.toCssRgba()
			},
			equals: function (e)
			{
				return e === this || null !== e && this.toCssRgba() == n(e).toCssRgba()
			},
			diff: function (e)
			{
				if (null == e) return NaN;
				var t = this.toBytes();
				return e = e.toBytes(), Math.sqrt(Math.pow(.3 * (t.r - e.r), 2) + Math.pow(.59 * (t.g - e.g), 2) + Math.pow(.11 * (t.b - e.b), 2))
			},
			clone: function ()
			{
				var e = this.toBytes();
				return e === this && (e = new l(e.r, e.g, e.b, e.a)), e
			}
		}), u = s.extend({
			init: function (e, t, r, n)
			{
				this.r = e, this.g = t, this.b = r, this.a = n
			},
			toHSV: function ()
			{
				var e, t, r = this.r,
                    n = this.g,
                    f = this.b,
                    a = Math.min(r, n, f),
                    o = Math.max(r, n, f),
                    i = o,
                    s = o - a;
				return 0 === s ? new d(0, 0, i, this.a) : (0 !== o ? (t = s / o, e = r == o ? (n - f) / s : n == o ? 2 + (f - r) / s : 4 + (r - n) / s, e *= 60, e < 0 && (e += 360)) : (t = 0, e = -1), new d(e, t, i, this.a))
			},
			toHSL: function ()
			{
				var e, t, r, n = this.r,
                    f = this.g,
                    a = this.b,
                    o = Math.max(n, f, a),
                    i = Math.min(n, f, a),
                    s = (o + i) / 2;
				if (o == i) e = t = 0;
				else {
					switch (r = o - i, t = s > .5 ? r / (2 - o - i) : r / (o + i), o) {
						case n:
							e = (f - a) / r + (f < a ? 6 : 0);
							break;
						case f:
							e = (a - n) / r + 2;
							break;
						case a:
							e = (n - f) / r + 4
					}
					e *= 60, t *= 100, s *= 100
				}
				return new c(e, t, s, this.a)
			},
			toBytes: function ()
			{
				return new l(255 * this.r, 255 * this.g, 255 * this.b, this.a)
			}
		}), l = u.extend({
			init: function (e, t, r, n)
			{
				this.r = Math.round(e), this.g = Math.round(t), this.b = Math.round(r), this.a = n
			},
			toRGB: function ()
			{
				return new u(this.r / 255, this.g / 255, this.b / 255, this.a)
			},
			toHSV: function ()
			{
				return this.toRGB().toHSV()
			},
			toHSL: function ()
			{
				return this.toRGB().toHSL()
			},
			toHex: function ()
			{
				return f(this.r, 2) + f(this.g, 2) + f(this.b, 2)
			},
			toBytes: function ()
			{
				return this
			}
		}), d = s.extend({
			init: function (e, t, r, n)
			{
				this.h = e, this.s = t, this.v = r, this.a = n
			},
			toRGB: function ()
			{
				var e, t, r, n, f, a, o, i, s = this.h,
                    l = this.s,
                    d = this.v;
				if (0 === l) t = r = n = d;
				else switch (s /= 60, e = Math.floor(s), f = s - e, a = d * (1 - l), o = d * (1 - l * f), i = d * (1 - l * (1 - f)), e) {
					case 0:
						t = d, r = i, n = a;
						break;
					case 1:
						t = o, r = d, n = a;
						break;
					case 2:
						t = a, r = d, n = i;
						break;
					case 3:
						t = a, r = o, n = d;
						break;
					case 4:
						t = i, r = a, n = d;
						break;
					default:
						t = d, r = a, n = o
				}
				return new u(t, r, n, this.a)
			},
			toHSL: function ()
			{
				return this.toRGB().toHSL()
			},
			toBytes: function ()
			{
				return this.toRGB().toBytes()
			}
		}), c = s.extend({
			init: function (e, t, r, n)
			{
				this.h = e, this.s = t, this.l = r, this.a = n
			},
			toRGB: function ()
			{
				var e, t, r, n, f, o = this.h,
                    i = this.s,
                    s = this.l;
				return 0 === i ? e = t = r = s : (o /= 360, i /= 100, s /= 100, n = s < .5 ? s * (1 + i) : s + i - s * i, f = 2 * s - n, e = a(f, n, o + 1 / 3), t = a(f, n, o), r = a(f, n, o - 1 / 3)), new u(e, t, r, this.a)
			},
			toHSV: function ()
			{
				return this.toRGB().toHSV()
			},
			toBytes: function ()
			{
				return this.toRGB().toBytes()
			}
		}), h.fromBytes = function (e, t, r, n)
		{
			return new l(e, t, r, null != n ? n : 1)
		}, h.fromRGB = function (e, t, r, n)
		{
			return new u(e, t, r, null != n ? n : 1)
		}, h.fromHSV = function (e, t, r, n)
		{
			return new d(e, t, r, null != n ? n : 1)
		}, h.fromHSL = function (e, t, r, n)
		{
			return new c(e, t, r, null != n ? n : 1)
		}, kendo.Color = h, kendo.parseColor = n
	}(window.kendo.jQuery, parseFloat, parseInt)
}, "function" == typeof define && define.amd ? define : function (e, t, r)
{
	(r || t)()
});;
! function (e, define)
{
	define("kendo.slider.min", ["kendo.draganddrop.min"], e)
}(function ()
{
	return function (e, t)
	{
		function n(e, t, n)
		{
			var i = n ? " k-slider-horizontal" : " k-slider-vertical",
                a = e.style ? e.style : t.attr("style"),
                o = t.attr("class") ? " " + t.attr("class") : "",
                l = "";
			return "bottomRight" == e.tickPlacement ? l = " k-slider-bottomright" : "topLeft" == e.tickPlacement && (l = " k-slider-topleft"), a = a ? " style='" + a + "'" : "", "<div class='k-widget k-slider" + i + o + "'" + a + "><div class='k-slider-wrap" + (e.showButtons ? " k-slider-buttons" : "") + l + "'></div></div>"
		}

		function i(e, t, n)
		{
			var i = "";
			return i = "increase" == t ? n ? "k-i-arrow-e" : "k-i-arrow-n" : n ? "k-i-arrow-w" : "k-i-arrow-s", "<a class='k-button k-button-" + t + "' title='" + e[t + "ButtonTitle"] + "' aria-label='" + e[t + "ButtonTitle"] + "'><span class='k-icon " + i + "'></span></a>"
		}

		function a(e, t)
		{
			var n, i = "<ul class='k-reset k-slider-items'>",
                a = H.floor(u(t / e.smallStep)) + 1;
			for (n = 0; n < a; n++) i += "<li class='k-tick' role='presentation'>&nbsp;</li>";
			return i += "</ul>"
		}

		function o(e, t)
		{
			var n = t.is("input") ? 1 : 2,
                i = 2 == n ? e.leftDragHandleTitle : e.dragHandleTitle;
			return "<div class='k-slider-track'><div class='k-slider-selection'><!-- --></div><a href='#' class='k-draghandle' title='" + i + "' role='slider' aria-valuemin='" + e.min + "' aria-valuemax='" + e.max + "' aria-valuenow='" + (n > 1 ? e.selectionStart || e.min : e.value || e.min) + "'>Drag</a>" + (n > 1 ? "<a href='#' class='k-draghandle' title='" + e.rightDragHandleTitle + "'role='slider' aria-valuemin='" + e.min + "' aria-valuemax='" + e.max + "' aria-valuenow='" + (e.selectionEnd || e.max) + "'>Drag</a>" : "") + "</div>"
		}

		function l(e)
		{
			return function (t)
			{
				return t + e
			}
		}

		function r(e)
		{
			return function ()
			{
				return e
			}
		}

		function s(e)
		{
			return (e + "").replace(".", m.cultures.current.numberFormat["."])
		}

		function d(e)
		{
			var t = "" + e,
                n = 0;
			return t = t.split("."), t[1] && (n = t[1].length), n = n > 10 ? 10 : n
		}

		function u(e)
		{
			var t, n;
			return e = parseFloat(e, 10), t = d(e), n = H.pow(10, t || 0), H.round(e * n) / n
		}

		function p(e, n)
		{
			var i = x(e.getAttribute(n));
			return null === i && (i = t), i
		}

		function c(e)
		{
			return typeof e !== Q
		}

		function f(e)
		{
			return 1e4 * e
		}
		var _, m = window.kendo,
            v = m.ui.Widget,
            h = m.ui.Draggable,
            g = m._outerWidth,
            w = m._outerHeight,
            S = e.extend,
            k = m.format,
            x = m.parseFloat,
            D = e.proxy,
            b = e.isArray,
            H = Math,
            T = m.support,
            y = T.pointers,
            z = T.msPointers,
            E = "change",
            I = "slide",
            F = ".slider",
            C = "touchstart" + F + " mousedown" + F,
            R = y ? "pointerdown" + F : z ? "MSPointerDown" + F : C,
            A = "touchend" + F + " mouseup" + F,
            V = y ? "pointerup" : z ? "MSPointerUp" + F : A,
            q = "moveSelection",
            M = "keydown" + F,
            P = "click" + F,
            W = "mouseover" + F,
            N = "focus" + F,
            B = "blur" + F,
            O = ".k-draghandle",
            L = ".k-slider-track",
            Z = ".k-tick",
            U = "k-state-selected",
            X = "k-state-focused",
            Y = "k-state-default",
            j = "k-state-disabled",
            K = "disabled",
            Q = "undefined",
            G = "tabindex",
            J = m.getTouches,
            $ = v.extend({
            	init: function (e, t)
            	{
            		var n, i = this;
            		if (v.fn.init.call(i, e, t), t = i.options, i._distance = u(t.max - t.min), i._isHorizontal = "horizontal" == t.orientation, i._isRtl = i._isHorizontal && m.support.isRtl(e), i._position = i._isHorizontal ? "left" : "bottom", i._sizeFn = i._isHorizontal ? "width" : "height", i._outerSize = i._isHorizontal ? g : w, t.tooltip.format = t.tooltip.enabled ? t.tooltip.format || "{0}" : "{0}", t.smallStep <= 0) throw Error("Kendo UI Slider smallStep must be a positive number.");
            		i._createHtml(), i.wrapper = i.element.closest(".k-slider"), i._trackDiv = i.wrapper.find(L), i._setTrackDivWidth(), i._maxSelection = i._trackDiv[i._sizeFn](), i._sliderItemsInit(), i._reset(), i._tabindex(i.wrapper.find(O)), i[t.enabled ? "enable" : "disable"](), n = m.support.isRtl(i.wrapper) ? -1 : 1, i._keyMap = {
            			37: l(-1 * n * t.smallStep),
            			40: l(-t.smallStep),
            			39: l(1 * n * t.smallStep),
            			38: l(+t.smallStep),
            			35: r(t.max),
            			36: r(t.min),
            			33: l(+t.largeStep),
            			34: l(-t.largeStep)
            		}, m.notify(i)
            	},
            	events: [E, I],
            	options: {
            		enabled: !0,
            		min: 0,
            		max: 10,
            		smallStep: 1,
            		largeStep: 5,
            		orientation: "horizontal",
            		tickPlacement: "both",
            		tooltip: {
            			enabled: !0,
            			format: "{0}"
            		}
            	},
            	_resize: function ()
            	{
            		this._setTrackDivWidth(), this.wrapper.find(".k-slider-items").remove(), this._maxSelection = this._trackDiv[this._sizeFn](), this._sliderItemsInit(), this._refresh(), this.options.enabled && this.enable(!0)
            	},
            	_sliderItemsInit: function ()
            	{
            		var e = this,
                        t = e.options,
                        n = e._maxSelection / ((t.max - t.min) / t.smallStep),
                        i = e._calculateItemsWidth(H.floor(e._distance / t.smallStep));
            		"none" != t.tickPlacement && n >= 2 && (e._trackDiv.before(a(t, e._distance)), e._setItemsWidth(i), e._setItemsTitle()), e._calculateSteps(i), "none" != t.tickPlacement && n >= 2 && t.largeStep >= t.smallStep && e._setItemsLargeTick()
            	},
            	getSize: function ()
            	{
            		return m.dimensions(this.wrapper)
            	},
            	_setTrackDivWidth: function ()
            	{
            		var e = this,
                        t = 2 * parseFloat(e._trackDiv.css(e._isRtl ? "right" : e._position), 10);
            		e._trackDiv[e._sizeFn](e.wrapper[e._sizeFn]() - 2 - t)
            	},
            	_setItemsWidth: function (t)
            	{
            		var n, i = this,
                        a = i.options,
                        o = 0,
                        l = t.length - 1,
                        r = i.wrapper.find(Z),
                        s = 0,
                        d = 2,
                        u = r.length,
                        p = 0;
            		for (n = 0; n < u - 2; n++) e(r[n + 1])[i._sizeFn](t[n]);
            		if (i._isHorizontal ? (e(r[o]).addClass("k-first")[i._sizeFn](t[l - 1]), e(r[l]).addClass("k-last")[i._sizeFn](t[l])) : (e(r[l]).addClass("k-first")[i._sizeFn](t[l]), e(r[o]).addClass("k-last")[i._sizeFn](t[l - 1])), i._distance % a.smallStep !== 0 && !i._isHorizontal) {
            			for (n = 0; n < t.length; n++) p += t[n];
            			s = i._maxSelection - p, s += parseFloat(i._trackDiv.css(i._position), 10) + d, i.wrapper.find(".k-slider-items").css("padding-top", s)
            		}
            	},
            	_setItemsTitle: function ()
            	{
            		for (var t = this, n = t.options, i = t.wrapper.find(Z), a = n.min, o = i.length, l = t._isHorizontal && !t._isRtl ? 0 : o - 1, r = t._isHorizontal && !t._isRtl ? o : -1, s = t._isHorizontal && !t._isRtl ? 1 : -1; l - r !== 0; l += s) e(i[l]).attr("title", k(n.tooltip.format, u(a))), a += n.smallStep
            	},
            	_setItemsLargeTick: function ()
            	{
            		var t, n, i, a = this,
                        o = a.options,
                        l = a.wrapper.find(Z),
                        r = 0;
            		if (f(o.largeStep) % f(o.smallStep) === 0 || a._distance / o.largeStep >= 3)
            			for (a._isHorizontal || a._isRtl || (l = e.makeArray(l).reverse()), r = 0; r < l.length; r++) t = e(l[r]), n = a._values[r], i = u(f(n - this.options.min)), i % f(o.smallStep) === 0 && i % f(o.largeStep) === 0 && (t.addClass("k-tick-large").html("<span class='k-label'>" + t.attr("title") + "</span>"), 0 !== r && r !== l.length - 1 && t.css("line-height", t[a._sizeFn]() + "px"))
            	},
            	_calculateItemsWidth: function (e)
            	{
            		var t, n, i, a = this,
                        o = a.options,
                        l = parseFloat(a._trackDiv.css(a._sizeFn)) + 1,
                        r = l / a._distance;
            		for (a._distance / o.smallStep - H.floor(a._distance / o.smallStep) > 0 && (l -= a._distance % o.smallStep * r), t = l / e, n = [], i = 0; i < e - 1; i++) n[i] = t;
            		return n[e - 1] = n[e] = t / 2, a._roundWidths(n)
            	},
            	_roundWidths: function (e)
            	{
            		var t, n = 0,
                        i = e.length;
            		for (t = 0; t < i; t++) n += e[t] - H.floor(e[t]), e[t] = H.floor(e[t]);
            		return n = H.round(n), this._addAdditionalSize(n, e)
            	},
            	_addAdditionalSize: function (e, t)
            	{
            		if (0 === e) return t;
            		var n, i = parseFloat(t.length - 1) / parseFloat(1 == e ? e : e - 1);
            		for (n = 0; n < e; n++) t[parseInt(H.round(i * n), 10)] += 1;
            		return t
            	},
            	_calculateSteps: function (e)
            	{
            		var t, n = this,
                        i = n.options,
                        a = i.min,
                        o = 0,
                        l = H.ceil(n._distance / i.smallStep),
                        r = 1;
            		if (l += n._distance / i.smallStep % 1 === 0 ? 1 : 0, e.splice(0, 0, 2 * e[l - 2]), e.splice(l - 1, 1, 2 * e.pop()), n._pixelSteps = [o], n._values = [a], 0 !== l) {
            			for (; r < l;) o += (e[r - 1] + e[r]) / 2, n._pixelSteps[r] = o, a += i.smallStep, n._values[r] = u(a), r++;
            			t = n._distance % i.smallStep === 0 ? l - 1 : l, n._pixelSteps[t] = n._maxSelection, n._values[t] = i.max, n._isRtl && (n._pixelSteps.reverse(), n._values.reverse())
            		}
            	},
            	_getValueFromPosition: function (e, t)
            	{
            		var n, i = this,
                        a = i.options,
                        o = H.max(a.smallStep * (i._maxSelection / i._distance), 0),
                        l = 0,
                        r = o / 2;
            		if (i._isHorizontal ? (l = e - t.startPoint, i._isRtl && (l = i._maxSelection - l)) : l = t.startPoint - e, i._maxSelection - (parseInt(i._maxSelection % o, 10) - 3) / 2 < l) return a.max;
            		for (n = 0; n < i._pixelSteps.length; n++)
            			if (H.abs(i._pixelSteps[n] - l) - 1 <= r) return u(i._values[n])
            	},
            	_getFormattedValue: function (e, t)
            	{
            		var n, i, a, o = this,
                        l = "",
                        r = o.options.tooltip;
            		return b(e) ? (i = e[0], a = e[1]) : t && t.type && (i = t.selectionStart, a = t.selectionEnd), t && (n = t.tooltipTemplate), !n && r.template && (n = m.template(r.template)), b(e) || t && t.type ? n ? l = n({
            			selectionStart: i,
            			selectionEnd: a
            		}) : (i = k(r.format, i), a = k(r.format, a), l = i + " - " + a) : (t && (t.val = e), l = n ? n({
            			value: e
            		}) : k(r.format, e)), l
            	},
            	_getDraggableArea: function ()
            	{
            		var e = this,
                        t = m.getOffset(e._trackDiv);
            		return {
            			startPoint: e._isHorizontal ? t.left : t.top + e._maxSelection,
            			endPoint: e._isHorizontal ? t.left + e._maxSelection : t.top
            		}
            	},
            	_createHtml: function ()
            	{
            		var e = this,
                        t = e.element,
                        a = e.options,
                        l = t.find("input");
            		2 == l.length ? (l.eq(0).prop("value", s(a.selectionStart)), l.eq(1).prop("value", s(a.selectionEnd))) : t.prop("value", s(a.value)), t.wrap(n(a, t, e._isHorizontal)).hide(), a.showButtons && t.before(i(a, "increase", e._isHorizontal)).before(i(a, "decrease", e._isHorizontal)), t.before(o(a, t))
            	},
            	_focus: function (t)
            	{
            		var n = this,
                        i = t.target,
                        a = n.value(),
                        o = n._drag;
            		o || (i == n.wrapper.find(O).eq(0)[0] ? (o = n._firstHandleDrag, n._activeHandle = 0) : (o = n._lastHandleDrag, n._activeHandle = 1), a = a[n._activeHandle]), e(i).addClass(X + " " + U), o && (n._activeHandleDrag = o, o.selectionStart = n.options.selectionStart, o.selectionEnd = n.options.selectionEnd, o._updateTooltip(a))
            	},
            	_focusWithMouse: function (t)
            	{
            		t = e(t);
            		var n = this,
                        i = t.is(O) ? t.index() : 0;
            		window.setTimeout(function ()
            		{
            			n.wrapper.find(O)[2 == i ? 1 : 0].focus()
            		}, 1), n._setTooltipTimeout()
            	},
            	_blur: function (t)
            	{
            		var n = this,
                        i = n._activeHandleDrag;
            		e(t.target).removeClass(X + " " + U), i && (i._removeTooltip(), delete n._activeHandleDrag, delete n._activeHandle)
            	},
            	_setTooltipTimeout: function ()
            	{
            		var e = this;
            		e._tooltipTimeout = window.setTimeout(function ()
            		{
            			var t = e._drag || e._activeHandleDrag;
            			t && t._removeTooltip()
            		}, 300)
            	},
            	_clearTooltipTimeout: function ()
            	{
            		var e, t = this;
            		window.clearTimeout(this._tooltipTimeout), e = t._drag || t._activeHandleDrag, e && e.tooltipDiv && e.tooltipDiv.stop(!0, !1).css("opacity", 1)
            	},
            	_reset: function ()
            	{
            		var t = this,
                        n = t.element,
                        i = n.attr("form"),
                        a = i ? e("#" + i) : n.closest("form");
            		a[0] && (t._form = a.on("reset", D(t._formResetHandler, t)))
            	},
            	destroy: function ()
            	{
            		this._form && this._form.off("reset", this._formResetHandler), v.fn.destroy.call(this)
            	}
            }),
            ee = $.extend({
            	init: function (n, i)
            	{
            		var a, o = this;
            		n.type = "text", i = S({}, {
            			value: p(n, "value"),
            			min: p(n, "min"),
            			max: p(n, "max"),
            			smallStep: p(n, "step")
            		}, i), n = e(n), i && i.enabled === t && (i.enabled = !n.is("[disabled]")), $.fn.init.call(o, n, i), i = o.options, c(i.value) && null !== i.value || (i.value = i.min, n.prop("value", s(i.min))), i.value = H.max(H.min(i.value, i.max), i.min), a = o.wrapper.find(O), this._selection = new ee.Selection(a, o, i), o._drag = new ee.Drag(a, "", o, i)
            	},
            	options: {
            		name: "Slider",
            		showButtons: !0,
            		increaseButtonTitle: "Increase",
            		decreaseButtonTitle: "Decrease",
            		dragHandleTitle: "drag",
            		tooltip: {
            			format: "{0:#,#.##}"
            		},
            		value: null
            	},
            	enable: function (n)
            	{
            		var i, a, o, l = this,
                        r = l.options;
            		l.disable(), n !== !1 && (l.wrapper.removeClass(j).addClass(Y), l.wrapper.find("input").removeAttr(K), i = function (n)
            		{
            			var i, a, o, r = J(n)[0];
            			if (r) {
            				if (i = l._isHorizontal ? r.location.pageX : r.location.pageY, a = l._getDraggableArea(), o = e(n.target), o.hasClass("k-draghandle")) return o.addClass(X + " " + U), t;
            				l._update(l._getValueFromPosition(i, a)), l._focusWithMouse(n.target), l._drag.dragstart(n), n.preventDefault()
            			}
            		}, l.wrapper.find(Z + ", " + L).on(R, i).end().on(R, function ()
            		{
            			e(document.documentElement).one("selectstart", m.preventDefault)
            		}).on(V, function ()
            		{
            			l._drag._end()
            		}), l.wrapper.find(O).attr(G, 0).on(A, function ()
            		{
            			l._setTooltipTimeout()
            		}).on(P, function (e)
            		{
            			l._focusWithMouse(e.target), e.preventDefault()
            		}).on(N, D(l._focus, l)).on(B, D(l._blur, l)), a = D(function (e)
            		{
            			var t = l._nextValueByIndex(l._valueIndex + 1 * e);
            			l._setValueInRange(t), l._drag._updateTooltip(t)
            		}, l), r.showButtons && (o = D(function (e, t)
            		{
            			this._clearTooltipTimeout(), (1 === e.which || T.touch && 0 === e.which) && (a(t), this.timeout = setTimeout(D(function ()
            			{
            				this.timer = setInterval(function ()
            				{
            					a(t)
            				}, 60)
            			}, this), 200))
            		}, l), l.wrapper.find(".k-button").on(A, D(function (e)
            		{
            			this._clearTimer(), l._focusWithMouse(e.target)
            		}, l)).on(W, function (t)
            		{
            			e(t.currentTarget).addClass("k-state-hover")
            		}).on("mouseout" + F, D(function (t)
            		{
            			e(t.currentTarget).removeClass("k-state-hover"), this._clearTimer()
            		}, l)).eq(0).on(C, D(function (e)
            		{
            			o(e, 1)
            		}, l)).click(!1).end().eq(1).on(C, D(function (e)
            		{
            			o(e, -1)
            		}, l)).click(m.preventDefault)), l.wrapper.find(O).off(M, !1).on(M, D(this._keydown, l)), r.enabled = !0)
            	},
            	disable: function ()
            	{
            		var t = this;
            		t.wrapper.removeClass(Y).addClass(j), e(t.element).prop(K, K), t.wrapper.find(".k-button").off(C).on(C, m.preventDefault).off(A).on(A, m.preventDefault).off("mouseleave" + F).on("mouseleave" + F, m.preventDefault).off(W).on(W, m.preventDefault), t.wrapper.find(Z + ", " + L).off(R).off(V), t.wrapper.find(O).attr(G, -1).off(A).off(M).off(P).off(N).off(B), t.options.enabled = !1
            	},
            	_update: function (e)
            	{
            		var t = this,
                        n = t.value() != e;
            		t.value(e), n && t.trigger(E, {
            			value: t.options.value
            		})
            	},
            	value: function (e)
            	{
            		var n = this,
                        i = n.options;
            		return e = u(e), isNaN(e) ? i.value : (e >= i.min && e <= i.max && i.value != e && (n.element.prop("value", s(e)), i.value = e, n._refreshAriaAttr(e), n._refresh()), t)
            	},
            	_refresh: function ()
            	{
            		this.trigger(q, {
            			value: this.options.value
            		})
            	},
            	_refreshAriaAttr: function (e)
            	{
            		var t, n = this,
                        i = n._drag;
            		t = i && i._tooltipDiv ? i._tooltipDiv.text() : n._getFormattedValue(e, null), this.wrapper.find(O).attr("aria-valuenow", e).attr("aria-valuetext", t)
            	},
            	_clearTimer: function ()
            	{
            		clearTimeout(this.timeout), clearInterval(this.timer)
            	},
            	_keydown: function (e)
            	{
            		var t = this;
            		e.keyCode in t._keyMap && (t._clearTooltipTimeout(), t._setValueInRange(t._keyMap[e.keyCode](t.options.value)), t._drag._updateTooltip(t.value()), e.preventDefault())
            	},
            	_setValueInRange: function (e)
            	{
            		var n = this,
                        i = n.options;
            		return e = u(e), isNaN(e) ? (n._update(i.min), t) : (e = H.max(H.min(e, i.max), i.min), n._update(e), t)
            	},
            	_nextValueByIndex: function (e)
            	{
            		var t = this._values.length;
            		return this._isRtl && (e = t - 1 - e), this._values[H.max(0, H.min(e, t - 1))]
            	},
            	_formResetHandler: function ()
            	{
            		var e = this,
                        t = e.options.min;
            		setTimeout(function ()
            		{
            			var n = e.element[0].value;
            			e.value("" === n || isNaN(n) ? t : n)
            		})
            	},
            	destroy: function ()
            	{
            		var e = this;
            		$.fn.destroy.call(e), e.wrapper.off(F).find(".k-button").off(F).end().find(O).off(F).end().find(Z + ", " + L).off(F).end(), e._drag.draggable.destroy(), e._drag._removeTooltip(!0)
            	}
            });
		ee.Selection = function (e, t, n)
		{
			function i(i)
			{
				var a = i - n.min,
                    o = t._valueIndex = H.ceil(u(a / n.smallStep)),
                    l = parseInt(t._pixelSteps[o], 10),
                    r = t._trackDiv.find(".k-slider-selection"),
                    s = parseInt(t._outerSize(e) / 2, 10),
                    d = t._isRtl ? 2 : 0;
				r[t._sizeFn](t._isRtl ? t._maxSelection - l : l), e.css(t._position, l - s - d)
			}
			i(n.value), t.bind([E, I, q], function (e)
			{
				i(parseFloat(e.value, 10))
			})
		}, ee.Drag = function (e, t, n, i)
		{
			var a = this;
			a.owner = n, a.options = i, a.element = e, a.type = t, a.draggable = new h(e, {
				distance: 0,
				dragstart: D(a._dragstart, a),
				drag: D(a.drag, a),
				dragend: D(a.dragend, a),
				dragcancel: D(a.dragcancel, a)
			}), e.click(!1)
		}, ee.Drag.prototype = {
			dragstart: function (e)
			{
				this.owner._activeDragHandle = this, this.draggable.userEvents.cancel(), this._dragstart(e), this.dragend()
			},
			_dragstart: function (n)
			{
				var i = this,
                    a = i.owner,
                    o = i.options;
				return o.enabled ? (this.owner._activeDragHandle = this, a.element.off(W), a.wrapper.find("." + X).removeClass(X + " " + U), i.element.addClass(X + " " + U), e(document.documentElement).css("cursor", "pointer"), i.dragableArea = a._getDraggableArea(), i.step = H.max(o.smallStep * (a._maxSelection / a._distance), 0), i.type ? (i.selectionStart = o.selectionStart, i.selectionEnd = o.selectionEnd, a._setZIndex(i.type)) : i.oldVal = i.val = o.value, i._removeTooltip(!0), i._createTooltip(), t) : (n.preventDefault(), t)
			},
			_createTooltip: function ()
			{
				var t, n, i = this,
                    a = i.owner,
                    o = i.options.tooltip,
                    l = "",
                    r = e(window);
				o.enabled && (o.template && (t = i.tooltipTemplate = m.template(o.template)), e(".k-slider-tooltip").remove(), i.tooltipDiv = e("<div class='k-widget k-tooltip k-slider-tooltip'><!-- --></div>").appendTo(document.body), l = a._getFormattedValue(i.val || a.value(), i), i.type || (n = "k-callout-" + (a._isHorizontal ? "s" : "e"), i.tooltipInnerDiv = "<div class='k-callout " + n + "'><!-- --></div>", l += i.tooltipInnerDiv), i.tooltipDiv.html(l), i._scrollOffset = {
					top: r.scrollTop(),
					left: r.scrollLeft()
				}, i.moveTooltip())
			},
			drag: function (e)
			{
				var t, n = this,
                    i = n.owner,
                    a = e.x.location,
                    o = e.y.location,
                    l = n.dragableArea.startPoint,
                    r = n.dragableArea.endPoint;
				e.preventDefault(), n.val = i._isHorizontal ? i._isRtl ? n.constrainValue(a, l, r, a < r) : n.constrainValue(a, l, r, a >= r) : n.constrainValue(o, r, l, o <= r), n.oldVal != n.val && (n.oldVal = n.val, n.type ? ("firstHandle" == n.type ? n.selectionStart = n.val < n.selectionEnd ? n.val : n.selectionEnd = n.val : n.val > n.selectionStart ? n.selectionEnd = n.val : n.selectionStart = n.selectionEnd = n.val, t = {
					values: [n.selectionStart, n.selectionEnd],
					value: [n.selectionStart, n.selectionEnd]
				}) : t = {
					value: n.val
				}, i.trigger(I, t)), n._updateTooltip(n.val)
			},
			_updateTooltip: function (e)
			{
				var t = this,
                    n = t.options,
                    i = n.tooltip,
                    a = "";
				i.enabled && (t.tooltipDiv || t._createTooltip(), a = t.owner._getFormattedValue(u(e), t), t.type || (a += t.tooltipInnerDiv), t.tooltipDiv.html(a), t.moveTooltip())
			},
			dragcancel: function ()
			{
				return this.owner._refresh(), e(document.documentElement).css("cursor", ""), this._end()
			},
			dragend: function ()
			{
				var t = this,
                    n = t.owner;
				return e(document.documentElement).css("cursor", ""), t.type ? n._update(t.selectionStart, t.selectionEnd) : (n._update(t.val), t.draggable.userEvents._disposeAll()), t.draggable.userEvents.cancel(), t._end()
			},
			_end: function ()
			{
				var e = this,
                    t = e.owner;
				return t._focusWithMouse(e.element), t.element.on(W), !1
			},
			_removeTooltip: function (t)
			{
				var n = this,
                    i = n.owner;
				n.tooltipDiv && i.options.tooltip.enabled && i.options.enabled && (t ? (n.tooltipDiv.remove(), n.tooltipDiv = null) : n.tooltipDiv.fadeOut("slow", function ()
				{
					e(this).remove(), n.tooltipDiv = null
				}))
			},
			moveTooltip: function ()
			{
				var t, n, i, a, o = this,
                    l = o.owner,
                    r = 0,
                    s = 0,
                    d = o.element,
                    u = m.getOffset(d),
                    p = 8,
                    c = e(window),
                    f = o.tooltipDiv.find(".k-callout"),
                    _ = g(o.tooltipDiv),
                    v = w(o.tooltipDiv);
				o.type ? (t = l.wrapper.find(O), u = m.getOffset(t.eq(0)), n = m.getOffset(t.eq(1)), l._isHorizontal ? (r = n.top, s = u.left + (n.left - u.left) / 2) : (r = u.top + (n.top - u.top) / 2, s = n.left), a = g(t.eq(0)) + 2 * p) : (r = u.top, s = u.left, a = g(d) + 2 * p), l._isHorizontal ? (s -= parseInt((_ - l._outerSize(d)) / 2, 10), r -= v + f.height() + p) : (r -= parseInt((v - l._outerSize(d)) / 2, 10), s -= _ + f.width() + p), l._isHorizontal ? (i = o._flip(r, v, a, w(c) + o._scrollOffset.top), r += i, s += o._fit(s, _, g(c) + o._scrollOffset.left)) : (i = o._flip(s, _, a, g(c) + o._scrollOffset.left), r += o._fit(r, v, w(c) + o._scrollOffset.top), s += i), i > 0 && f && (f.removeClass(), f.addClass("k-callout k-callout-" + (l._isHorizontal ? "n" : "w"))), o.tooltipDiv.css({
					top: r,
					left: s
				})
			},
			_fit: function (e, t, n)
			{
				var i = 0;
				return e + t > n && (i = n - (e + t)), e < 0 && (i = -e), i
			},
			_flip: function (e, t, n, i)
			{
				var a = 0;
				return e + t > i && (a += -(n + t)), e + a < 0 && (a += n + t), a
			},
			constrainValue: function (e, t, n, i)
			{
				var a = this,
                    o = 0;
				return o = t < e && e < n ? a.owner._getValueFromPosition(e, a.dragableArea) : i ? a.options.max : a.options.min
			}
		}, m.ui.plugin(ee), _ = $.extend({
			init: function (n, i)
			{
				var a, o = this,
                    l = e(n).find("input"),
                    r = l.eq(0)[0],
                    d = l.eq(1)[0];
				r.type = "text", d.type = "text", i && i.showButtons && (window.console && window.console.warn("showbuttons option is not supported for the range slider, ignoring"), i.showButtons = !1), i = S({}, {
					selectionStart: p(r, "value"),
					min: p(r, "min"),
					max: p(r, "max"),
					smallStep: p(r, "step")
				}, {
					selectionEnd: p(d, "value"),
					min: p(d, "min"),
					max: p(d, "max"),
					smallStep: p(d, "step")
				}, i), i && i.enabled === t && (i.enabled = !l.is("[disabled]")), $.fn.init.call(o, n, i), i = o.options, c(i.selectionStart) && null !== i.selectionStart || (i.selectionStart = i.min, l.eq(0).prop("value", s(i.min))), c(i.selectionEnd) && null !== i.selectionEnd || (i.selectionEnd = i.max, l.eq(1).prop("value", s(i.max))), a = o.wrapper.find(O), this._selection = new _.Selection(a, o, i), o._firstHandleDrag = new ee.Drag(a.eq(0), "firstHandle", o, i), o._lastHandleDrag = new ee.Drag(a.eq(1), "lastHandle", o, i)
			},
			options: {
				name: "RangeSlider",
				leftDragHandleTitle: "drag",
				rightDragHandleTitle: "drag",
				tooltip: {
					format: "{0:#,#.##}"
				},
				selectionStart: null,
				selectionEnd: null
			},
			enable: function (n)
			{
				var i, a = this,
                    o = a.options;
				a.disable(), n !== !1 && (a.wrapper.removeClass(j).addClass(Y), a.wrapper.find("input").removeAttr(K), i = function (n)
				{
					var i, l, r, s, d, u, p, c = J(n)[0];
					if (c) {
						if (i = a._isHorizontal ? c.location.pageX : c.location.pageY, l = a._getDraggableArea(), r = a._getValueFromPosition(i, l), s = e(n.target), s.hasClass("k-draghandle")) return a.wrapper.find("." + X).removeClass(X + " " + U), s.addClass(X + " " + U), t;
						r < o.selectionStart ? (d = r, u = o.selectionEnd, p = a._firstHandleDrag) : r > a.selectionEnd ? (d = o.selectionStart, u = r, p = a._lastHandleDrag) : r - o.selectionStart <= o.selectionEnd - r ? (d = r, u = o.selectionEnd, p = a._firstHandleDrag) : (d = o.selectionStart, u = r, p = a._lastHandleDrag), p.dragstart(n), a._setValueInRange(d, u), a._focusWithMouse(p.element)
					}
				}, a.wrapper.find(Z + ", " + L).on(R, i).end().on(R, function ()
				{
					e(document.documentElement).one("selectstart", m.preventDefault)
				}).on(V, function ()
				{
					a._activeDragHandle && a._activeDragHandle._end()
				}), a.wrapper.find(O).attr(G, 0).on(A, function ()
				{
					a._setTooltipTimeout()
				}).on(P, function (e)
				{
					a._focusWithMouse(e.target), e.preventDefault()
				}).on(N, D(a._focus, a)).on(B, D(a._blur, a)), a.wrapper.find(O).off(M, m.preventDefault).eq(0).on(M, D(function (e)
				{
					this._keydown(e, "firstHandle")
				}, a)).end().eq(1).on(M, D(function (e)
				{
					this._keydown(e, "lastHandle")
				}, a)), a.options.enabled = !0)
			},
			disable: function ()
			{
				var e = this;
				e.wrapper.removeClass(Y).addClass(j), e.wrapper.find("input").prop(K, K), e.wrapper.find(Z + ", " + L).off(R).off(V), e.wrapper.find(O).attr(G, -1).off(A).off(M).off(P).off(N).off(B), e.options.enabled = !1
			},
			_keydown: function (e, t)
			{
				var n, i, a, o = this,
                    l = o.options.selectionStart,
                    r = o.options.selectionEnd;
				e.keyCode in o._keyMap && (o._clearTooltipTimeout(), "firstHandle" == t ? (a = o._activeHandleDrag = o._firstHandleDrag, l = o._keyMap[e.keyCode](l), l > r && (r = l)) : (a = o._activeHandleDrag = o._lastHandleDrag, r = o._keyMap[e.keyCode](r), l > r && (l = r)), o._setValueInRange(u(l), u(r)), n = Math.max(l, o.options.selectionStart), i = Math.min(r, o.options.selectionEnd), a.selectionEnd = Math.max(i, o.options.selectionStart), a.selectionStart = Math.min(n, o.options.selectionEnd), a._updateTooltip(o.value()[o._activeHandle]), e.preventDefault())
			},
			_update: function (e, t)
			{
				var n = this,
                    i = n.value(),
                    a = i[0] != e || i[1] != t;
				n.value([e, t]), a && n.trigger(E, {
					values: [e, t],
					value: [e, t]
				})
			},
			value: function (e)
			{
				return e && e.length ? this._value(e[0], e[1]) : this._value()
			},
			_value: function (e, n)
			{
				var i = this,
                    a = i.options,
                    o = a.selectionStart,
                    l = a.selectionEnd;
				return isNaN(e) && isNaN(n) ? [o, l] : (e = u(e), n = u(n), e >= a.min && e <= a.max && n >= a.min && n <= a.max && e <= n && (o == e && l == n || (i.element.find("input").eq(0).prop("value", s(e)).end().eq(1).prop("value", s(n)), a.selectionStart = e, a.selectionEnd = n, i._refresh(), i._refreshAriaAttr(e, n))), t)
			},
			values: function (e, t)
			{
				return b(e) ? this._value(e[0], e[1]) : this._value(e, t)
			},
			_refresh: function ()
			{
				var e = this,
                    t = e.options;
				e.trigger(q, {
					values: [t.selectionStart, t.selectionEnd],
					value: [t.selectionStart, t.selectionEnd]
				}), t.selectionStart == t.max && t.selectionEnd == t.max && e._setZIndex("firstHandle")
			},
			_refreshAriaAttr: function (e, t)
			{
				var n, i = this,
                    a = i.wrapper.find(O),
                    o = i._activeHandleDrag;
				n = i._getFormattedValue([e, t], o), a.eq(0).attr("aria-valuenow", e), a.eq(1).attr("aria-valuenow", t), a.attr("aria-valuetext", n)
			},
			_setValueInRange: function (e, t)
			{
				var n = this.options;
				e = H.max(H.min(e, n.max), n.min), t = H.max(H.min(t, n.max), n.min), e == n.max && t == n.max && this._setZIndex("firstHandle"), this._update(H.min(e, t), H.max(e, t))
			},
			_setZIndex: function (t)
			{
				this.wrapper.find(O).each(function (n)
				{
					e(this).css("z-index", "firstHandle" == t ? 1 - n : n)
				})
			},
			_formResetHandler: function ()
			{
				var e = this,
                    t = e.options;
				setTimeout(function ()
				{
					var n = e.element.find("input"),
                        i = n[0].value,
                        a = n[1].value;
					e.values("" === i || isNaN(i) ? t.min : i, "" === a || isNaN(a) ? t.max : a)
				})
			},
			destroy: function ()
			{
				var e = this;
				$.fn.destroy.call(e), e.wrapper.off(F).find(Z + ", " + L).off(F).end().find(O).off(F), e._firstHandleDrag.draggable.destroy(), e._lastHandleDrag.draggable.destroy()
			}
		}), _.Selection = function (e, t, n)
		{
			function i(i)
			{
				i = i || [];
				var o = i[0] - n.min,
                    l = i[1] - n.min,
                    r = H.ceil(u(o / n.smallStep)),
                    s = H.ceil(u(l / n.smallStep)),
                    d = t._pixelSteps[r],
                    p = t._pixelSteps[s],
                    c = parseInt(t._outerSize(e.eq(0)) / 2, 10),
                    f = t._isRtl ? 2 : 0;
				e.eq(0).css(t._position, d - c - f).end().eq(1).css(t._position, p - c - f), a(d, p)
			}

			function a(e, n)
			{
				var i, a, o = t._trackDiv.find(".k-slider-selection");
				i = H.abs(e - n), o[t._sizeFn](i), t._isRtl ? (a = H.max(e, n), o.css("right", t._maxSelection - a - 1)) : (a = H.min(e, n), o.css(t._position, a - 1))
			}
			i(t.value()), t.bind([E, I, q], function (e)
			{
				i(e.values)
			})
		}, m.ui.plugin(_)
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
});;
! function (e, define)
{
	define("kendo.colorpicker.min", ["kendo.core.min", "kendo.color.min", "kendo.popup.min", "kendo.slider.min", "kendo.userevents.min"], e)
}(function ()
{
	return function (e, t, a)
	{
		function s(e, t, a)
		{
			a = d(a), a && !a.equals(e.color()) && ("change" == t && (e._value = a), a = 1 != a.a ? a.toCssRgba() : a.toCss(), e.trigger(t, {
				value: a
			}))
		}

		function n(e, t, a)
		{
			var s, n;
			return e = Array.prototype.slice.call(e), s = e.length, n = e.indexOf(t), n < 0 ? a < 0 ? e[s - 1] : e[0] : (n += a, n < 0 ? n += s : n %= s, e[n])
		}

		function i(e)
		{
			e.preventDefault()
		}

		function l(e, t)
		{
			return function ()
			{
				return e.apply(t, arguments)
			}
		}
		var o = window.kendo,
            r = o.ui,
            c = r.Widget,
            d = o.parseColor,
            u = o.Color,
            p = o.keys,
            C = "background-color",
            F = "k-state-selected",
            h = "000000,7f7f7f,880015,ed1c24,ff7f27,fff200,22b14c,00a2e8,3f48cc,a349a4,ffffff,c3c3c3,b97a57,ffaec9,ffc90e,efe4b0,b5e61d,99d9ea,7092be,c8bfe7",
            f = "FFFFFF,FFCCFF,FF99FF,FF66FF,FF33FF,FF00FF,CCFFFF,CCCCFF,CC99FF,CC66FF,CC33FF,CC00FF,99FFFF,99CCFF,9999FF,9966FF,9933FF,9900FF,FFFFCC,FFCCCC,FF99CC,FF66CC,FF33CC,FF00CC,CCFFCC,CCCCCC,CC99CC,CC66CC,CC33CC,CC00CC,99FFCC,99CCCC,9999CC,9966CC,9933CC,9900CC,FFFF99,FFCC99,FF9999,FF6699,FF3399,FF0099,CCFF99,CCCC99,CC9999,CC6699,CC3399,CC0099,99FF99,99CC99,999999,996699,993399,990099,FFFF66,FFCC66,FF9966,FF6666,FF3366,FF0066,CCFF66,CCCC66,CC9966,CC6666,CC3366,CC0066,99FF66,99CC66,999966,996666,993366,990066,FFFF33,FFCC33,FF9933,FF6633,FF3333,FF0033,CCFF33,CCCC33,CC9933,CC6633,CC3333,CC0033,99FF33,99CC33,999933,996633,993333,990033,FFFF00,FFCC00,FF9900,FF6600,FF3300,FF0000,CCFF00,CCCC00,CC9900,CC6600,CC3300,CC0000,99FF00,99CC00,999900,996600,993300,990000,66FFFF,66CCFF,6699FF,6666FF,6633FF,6600FF,33FFFF,33CCFF,3399FF,3366FF,3333FF,3300FF,00FFFF,00CCFF,0099FF,0066FF,0033FF,0000FF,66FFCC,66CCCC,6699CC,6666CC,6633CC,6600CC,33FFCC,33CCCC,3399CC,3366CC,3333CC,3300CC,00FFCC,00CCCC,0099CC,0066CC,0033CC,0000CC,66FF99,66CC99,669999,666699,663399,660099,33FF99,33CC99,339999,336699,333399,330099,00FF99,00CC99,009999,006699,003399,000099,66FF66,66CC66,669966,666666,663366,660066,33FF66,33CC66,339966,336666,333366,330066,00FF66,00CC66,009966,006666,003366,000066,66FF33,66CC33,669933,666633,663333,660033,33FF33,33CC33,339933,336633,333333,330033,00FF33,00CC33,009933,006633,003333,000033,66FF00,66CC00,669900,666600,663300,660000,33FF00,33CC00,339900,336600,333300,330000,00FF00,00CC00,009900,006600,003300,000000",
            _ = {
            	apply: "Apply",
            	cancel: "Cancel"
            },
            v = ".kendoColorTools",
            g = "click" + v,
            k = "keydown" + v,
            m = o.support.browser,
            b = m.msie && m.version < 9,
            y = c.extend({
            	init: function (e, t)
            	{
            		var a, s = this;
            		c.fn.init.call(s, e, t), e = s.element, t = s.options, s._value = t.value = d(t.value), s._tabIndex = e.attr("tabIndex") || 0, a = s._ariaId = t.ariaId, a && e.attr("aria-labelledby", a), t._standalone && (s._triggerSelect = s._triggerChange)
            	},
            	options: {
            		name: "ColorSelector",
            		value: null,
            		_standalone: !0
            	},
            	events: ["change", "select", "cancel"],
            	color: function (e)
            	{
            		return e !== a && (this._value = d(e), this._updateUI(this._value)), this._value
            	},
            	value: function (e)
            	{
            		return e = this.color(e), e && (e = this.options.opacity ? e.toCssRgba() : e.toCss()), e || null
            	},
            	enable: function (t)
            	{
            		0 === arguments.length && (t = !0), e(".k-disabled-overlay", this.wrapper).remove(), t || this.wrapper.append("<div class='k-disabled-overlay'></div>"), this._onEnable(t)
            	},
            	_select: function (e, t)
            	{
            		var a = this._value;
            		e = this.color(e), t || (this.element.trigger("change"), e.equals(a) ? this._standalone || this.trigger("cancel") : this.trigger("change", {
            			value: this.value()
            		}))
            	},
            	_triggerSelect: function (e)
            	{
            		s(this, "select", e)
            	},
            	_triggerChange: function (e)
            	{
            		s(this, "change", e)
            	},
            	destroy: function ()
            	{
            		this.element && this.element.off(v), this.wrapper && this.wrapper.off(v).find("*").off(v), this.wrapper = null, c.fn.destroy.call(this)
            	},
            	_updateUI: e.noop,
            	_selectOnHide: function ()
            	{
            		return null
            	},
            	_cancel: function ()
            	{
            		this.trigger("cancel")
            	}
            }),
            w = y.extend({
            	init: function (t, a)
            	{
            		var s, n, i, r, c = this;
            		if (y.fn.init.call(c, t, a), t = c.wrapper = c.element, a = c.options, s = a.palette, "websafe" == s ? (s = f, a.columns = 18) : "basic" == s && (s = h), "string" == typeof s && (s = s.split(",")), e.isArray(s) && (s = e.map(s, function (e)
            		{
                            return d(e)
            		})), c._selectedID = (a.ariaId || o.guid()) + "_selected", t.addClass("k-widget k-colorpalette").attr("role", "grid").attr("aria-readonly", "true").append(e(c._template({
            			colors: s,
            			columns: a.columns,
            			tileSize: a.tileSize,
            			value: c._value,
            			id: a.ariaId
            		}))).on(g, ".k-item", function (t)
            		{
                            c._select(e(t.currentTarget).css(C))
            		}).attr("tabIndex", c._tabIndex).on(k, l(c._keydown, c)), n = a.tileSize) {
            			if (/number|string/.test(typeof n)) i = r = parseFloat(n);
            			else {
            				if ("object" != typeof n) throw Error("Unsupported value for the 'tileSize' argument");
            				i = parseFloat(n.width), r = parseFloat(n.height)
            			}
            			t.find(".k-item").css({
            				width: i,
            				height: r
            			})
            		}
            	},
            	focus: function ()
            	{
            		this.wrapper.focus()
            	},
            	options: {
            		name: "ColorPalette",
            		columns: 10,
            		tileSize: null,
            		palette: "basic"
            	},
            	_onEnable: function (e)
            	{
            		e ? this.wrapper.attr("tabIndex", this._tabIndex) : this.wrapper.removeAttr("tabIndex")
            	},
            	_keydown: function (t)
            	{
            		var a, s, l = this.wrapper,
                        o = l.find(".k-item"),
                        r = o.filter("." + F).get(0),
                        c = t.keyCode;
            		if (c == p.LEFT ? a = n(o, r, -1) : c == p.RIGHT ? a = n(o, r, 1) : c == p.DOWN ? a = n(o, r, this.options.columns) : c == p.UP ? a = n(o, r, -this.options.columns) : c == p.ENTER ? (i(t), r && this._select(e(r).css(C))) : c == p.ESC && this._cancel(), a) {
            			i(t), this._current(a);
            			try {
            				s = d(a.css(C)), this._triggerSelect(s)
            			} catch (u) { }
            		}
            	},
            	_current: function (t)
            	{
            		this.wrapper.find("." + F).removeClass(F).attr("aria-selected", !1).removeAttr("id"), e(t).addClass(F).attr("aria-selected", !0).attr("id", this._selectedID), this.element.removeAttr("aria-activedescendant").attr("aria-activedescendant", this._selectedID)
            	},
            	_updateUI: function (t)
            	{
            		var a = null;
            		this.wrapper.find(".k-item").each(function ()
            		{
            			var s = d(e(this).css(C));
            			if (s && s.equals(t)) return a = this, !1
            		}), this._current(a)
            	},
            	_template: o.template('<table class="k-palette k-reset" role="presentation"><tr role="row"># for (var i = 0; i < colors.length; ++i) { ## var selected = colors[i].equals(value); ## if (i && i % columns == 0) { # </tr><tr role="row"> # } #<td role="gridcell" unselectable="on" style="background-color:#= colors[i].toCss() #"#= selected ? " aria-selected=true" : "" # #=(id && i === 0) ? "id=\\""+id+"\\" " : "" # class="k-item#= selected ? " ' + F + '" : "" #" aria-label="#= colors[i].toCss() #"></td># } #</tr></table>')
            }),
            I = y.extend({
            	init: function (t, a)
            	{
            		var s = this;
            		y.fn.init.call(s, t, a), a = s.options, t = s.element, s.wrapper = t.addClass("k-widget k-flatcolorpicker").append(s._template(a)), s._hueElements = e(".k-hsv-rectangle, .k-transparency-slider .k-slider-track", t), s._selectedColor = e(".k-selected-color-display", t), s._colorAsText = e("input.k-color-value", t), s._sliders(), s._hsvArea(), s._updateUI(s._value || d("#f00")), t.find("input.k-color-value").on(k, function (t)
            		{
            			var a, n, i = this;
            			if (t.keyCode == p.ENTER) try {
            				a = d(i.value), n = s.color(), s._select(a, a.equals(n))
            			} catch (l) {
            				e(i).addClass("k-state-error")
            			} else s.options.autoupdate && setTimeout(function ()
            			{
            				var e = d(i.value, !0);
            				e && s._updateUI(e, !0)
            			}, 10)
            		}).end().on(g, ".k-controls button.apply", function ()
            		{
            			s._select(s._getHSV())
            		}).on(g, ".k-controls button.cancel", function ()
            		{
            			s._updateUI(s.color()), s._cancel()
            		}), b && s._applyIEFilter()
            	},
            	destroy: function ()
            	{
            		this._hueSlider.destroy(), this._opacitySlider && this._opacitySlider.destroy(), this._hueSlider = this._opacitySlider = this._hsvRect = this._hsvHandle = this._hueElements = this._selectedColor = this._colorAsText = null, y.fn.destroy.call(this)
            	},
            	options: {
            		name: "FlatColorPicker",
            		opacity: !1,
            		buttons: !1,
            		input: !0,
            		preview: !0,
            		autoupdate: !0,
            		messages: _
            	},
            	_applyIEFilter: function ()
            	{
            		var e = this.element.find(".k-hue-slider .k-slider-track")[0],
                        t = e.currentStyle.backgroundImage;
            		t = t.replace(/^url\([\'\"]?|[\'\"]?\)$/g, ""), e.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + t + "', sizingMethod='scale')"
            	},
            	_sliders: function ()
            	{
            		function e(e)
            		{
            			a._updateUI(a._getHSV(e.value, null, null, null))
            		}

            		function t(e)
            		{
            			a._updateUI(a._getHSV(null, null, null, e.value / 100))
            		}
            		var a = this,
                        s = a.element;
            		a._hueSlider = s.find(".k-hue-slider").kendoSlider({
            			min: 0,
            			max: 360,
            			tickPlacement: "none",
            			showButtons: !1,
            			slide: e,
            			change: e
            		}).data("kendoSlider"), a._opacitySlider = s.find(".k-transparency-slider").kendoSlider({
            			min: 0,
            			max: 100,
            			tickPlacement: "none",
            			showButtons: !1,
            			slide: t,
            			change: t
            		}).data("kendoSlider")
            	},
            	_hsvArea: function ()
            	{
            		function e(e, a)
            		{
            			var s = this.offset,
                            n = e - s.left,
                            i = a - s.top,
                            l = this.width,
                            o = this.height;
            			n = n < 0 ? 0 : n > l ? l : n, i = i < 0 ? 0 : i > o ? o : i, t._svChange(n / l, 1 - i / o)
            		}
            		var t = this,
                        a = t.element,
                        s = a.find(".k-hsv-rectangle"),
                        n = s.find(".k-draghandle").attr("tabIndex", 0).on(k, l(t._keydown, t));
            		t._hsvEvents = new o.UserEvents(s, {
            			global: !0,
            			press: function (t)
            			{
            				this.offset = o.getOffset(s), this.width = s.width(), this.height = s.height(), n.focus(), e.call(this, t.x.location, t.y.location)
            			},
            			start: function ()
            			{
            				s.addClass("k-dragging"), n.focus()
            			},
            			move: function (t)
            			{
            				t.preventDefault(), e.call(this, t.x.location, t.y.location)
            			},
            			end: function ()
            			{
            				s.removeClass("k-dragging")
            			}
            		}), t._hsvRect = s, t._hsvHandle = n
            	},
            	_onEnable: function (e)
            	{
            		this._hueSlider.enable(e), this._opacitySlider && this._opacitySlider.enable(e), this.wrapper.find("input").attr("disabled", !e);
            		var t = this._hsvRect.find(".k-draghandle");
            		e ? t.attr("tabIndex", this._tabIndex) : t.removeAttr("tabIndex")
            	},
            	_keydown: function (e)
            	{
            		function t(t, a)
            		{
            			var n = s._getHSV();
            			n[t] += a * (e.shiftKey ? .01 : .05), n[t] < 0 && (n[t] = 0), n[t] > 1 && (n[t] = 1), s._updateUI(n), i(e)
            		}

            		function a(t)
            		{
            			var a = s._getHSV();
            			a.h += t * (e.shiftKey ? 1 : 5), a.h < 0 && (a.h = 0), a.h > 359 && (a.h = 359), s._updateUI(a), i(e)
            		}
            		var s = this;
            		switch (e.keyCode) {
            			case p.LEFT:
            				e.ctrlKey ? a(-1) : t("s", -1);
            				break;
            			case p.RIGHT:
            				e.ctrlKey ? a(1) : t("s", 1);
            				break;
            			case p.UP:
            				t(e.ctrlKey && s._opacitySlider ? "a" : "v", 1);
            				break;
            			case p.DOWN:
            				t(e.ctrlKey && s._opacitySlider ? "a" : "v", -1);
            				break;
            			case p.ENTER:
            				s._select(s._getHSV());
            				break;
            			case p.F2:
            				s.wrapper.find("input.k-color-value").focus().select();
            				break;
            			case p.ESC:
            				s._cancel()
            		}
            	},
            	focus: function ()
            	{
            		this._hsvHandle.focus()
            	},
            	_getHSV: function (e, t, a, s)
            	{
            		var n = this._hsvRect,
                        i = n.width(),
                        l = n.height(),
                        o = this._hsvHandle.position();
            		return null == e && (e = this._hueSlider.value()), null == t && (t = o.left / i), null == a && (a = 1 - o.top / l), null == s && (s = this._opacitySlider ? this._opacitySlider.value() / 100 : 1), u.fromHSV(e, t, a, s)
            	},
            	_svChange: function (e, t)
            	{
            		var a = this._getHSV(null, e, t, null);
            		this._updateUI(a)
            	},
            	_updateUI: function (e, t)
            	{
            		var a = this,
                        s = a._hsvRect;
            		e && (this._colorAsText.removeClass("k-state-error"), a._selectedColor.css(C, e.toDisplay()), t || a._colorAsText.val(a._opacitySlider ? e.toCssRgba() : e.toCss()), a._triggerSelect(e), e = e.toHSV(), a._hsvHandle.css({
            			left: e.s * s.width() + "px",
            			top: (1 - e.v) * s.height() + "px"
            		}), a._hueElements.css(C, u.fromHSV(e.h, 1, 1, 1).toCss()), a._hueSlider.value(e.h), a._opacitySlider && a._opacitySlider.value(100 * e.a))
            	},
            	_selectOnHide: function ()
            	{
            		return this.options.buttons ? null : this._getHSV()
            	},
            	_template: o.template('# if (preview) { #<div class="k-selected-color"><div class="k-selected-color-display"><input class="k-color-value" #= !data.input ? \'style="visibility: hidden;"\' : "" #></div></div># } #<div class="k-hsv-rectangle"><div class="k-hsv-gradient"></div><div class="k-draghandle"></div></div><input class="k-hue-slider" /># if (opacity) { #<input class="k-transparency-slider" /># } ## if (buttons) { #<div unselectable="on" class="k-controls"><button class="k-button k-primary apply">#: messages.apply #</button> <button class="k-button cancel">#: messages.cancel #</button></div># } #')
            }),
            S = c.extend({
            	init: function (t, a)
            	{
            		var s, n, i, l, o, r = this;
            		c.fn.init.call(r, t, a), a = r.options, t = r.element, s = t.attr("value") || t.val(), s = s ? d(s, !0) : d(a.value, !0), r._value = a.value = s, n = r.wrapper = e(r._template(a)), t.hide().after(n), t.is("input") && (t.appendTo(n), i = t.closest("label"), l = t.attr("id"), l && (i = i.add('label[for="' + l + '"]')), i.click(function (e)
            		{
            			r.open(), e.preventDefault()
            		})), r._tabIndex = t.attr("tabIndex") || 0, r.enable(!t.attr("disabled")), o = t.attr("accesskey"), o && (t.attr("accesskey", null), n.attr("accesskey", o)), r.bind("activate", function (e)
            		{
            			e.isDefaultPrevented() || r.toggle()
            		}), r._updateUI(s)
            	},
            	destroy: function ()
            	{
            		this.wrapper.off(v).find("*").off(v), this._popup && (this._selector.destroy(), this._popup.destroy()), this._selector = this._popup = this.wrapper = null, c.fn.destroy.call(this)
            	},
            	enable: function (e)
            	{
            		var t = this,
                        a = t.wrapper,
                        s = a.children(".k-picker-wrap"),
                        n = s.find(".k-select");
            		0 === arguments.length && (e = !0), t.element.attr("disabled", !e), a.attr("aria-disabled", !e), n.off(v).on("mousedown" + v, i), a.addClass("k-state-disabled").removeAttr("tabIndex").add("*", a).off(v), e ? a.removeClass("k-state-disabled").attr("tabIndex", t._tabIndex).on("mouseenter" + v, function ()
            		{
            			s.addClass("k-state-hover")
            		}).on("mouseleave" + v, function ()
            		{
            			s.removeClass("k-state-hover")
            		}).on("focus" + v, function ()
            		{
            			s.addClass("k-state-focused")
            		}).on("blur" + v, function ()
            		{
            			s.removeClass("k-state-focused")
            		}).on(k, l(t._keydown, t)).on(g, ".k-select", l(t.toggle, t)).on(g, t.options.toolIcon ? ".k-tool-icon" : ".k-selected-color", function ()
            		{
            			t.trigger("activate")
            		}) : t.close()
            	},
            	_template: o.template('<span role="textbox" aria-haspopup="true" class="k-widget k-colorpicker k-header"><span class="k-picker-wrap k-state-default"># if (toolIcon) { #<span class="k-tool-icon #= toolIcon #"><span class="k-selected-color"></span></span># } else { #<span class="k-selected-color"></span># } #<span class="k-select" unselectable="on" aria-label="select"><span class="k-icon k-i-arrow-s"></span></span></span></span>'),
            	options: {
            		name: "ColorPicker",
            		palette: null,
            		columns: 10,
            		toolIcon: null,
            		value: null,
            		messages: _,
            		opacity: !1,
            		buttons: !0,
            		preview: !0,
            		ARIATemplate: 'Current selected color is #=data || ""#'
            	},
            	events: ["activate", "change", "select", "open", "close"],
            	open: function ()
            	{
            		this.element.prop("disabled") || this._getPopup().open()
            	},
            	close: function ()
            	{
            		this._getPopup().close()
            	},
            	toggle: function ()
            	{
            		this.element.prop("disabled") || this._getPopup().toggle()
            	},
            	color: y.fn.color,
            	value: y.fn.value,
            	_select: y.fn._select,
            	_triggerSelect: y.fn._triggerSelect,
            	_isInputTypeColor: function ()
            	{
            		var e = this.element[0];
            		return /^input$/i.test(e.tagName) && /^color$/i.test(e.type)
            	},
            	_updateUI: function (e)
            	{
            		var t = "";
            		e && (t = this._isInputTypeColor() || 1 == e.a ? e.toCss() : e.toCssRgba(), this.element.val(t)), this._ariaTemplate || (this._ariaTemplate = o.template(this.options.ARIATemplate)), this.wrapper.attr("aria-label", this._ariaTemplate(t)), this._triggerSelect(e), this.wrapper.find(".k-selected-color").css(C, e ? e.toDisplay() : "transparent")
            	},
            	_keydown: function (e)
            	{
            		var t = e.keyCode;
            		this._getPopup().visible() ? (t == p.ESC ? this._selector._cancel() : this._selector._keydown(e), i(e)) : t != p.ENTER && t != p.DOWN || (this.open(), i(e))
            	},
            	_getPopup: function ()
            	{
            		var t, s, n, i, l = this,
                        r = l._popup;
            		return r || (t = l.options, s = t.palette ? w : I, t._standalone = !1, delete t.select, delete t.change, delete t.cancel, n = o.guid(), i = l._selector = new s(e('<div id="' + n + '"/>').appendTo(document.body), t), l.wrapper.attr("aria-owns", n), l._popup = r = i.wrapper.kendoPopup({
            			anchor: l.wrapper,
            			adjustSize: {
            				width: 5,
            				height: 0
            			}
            		}).data("kendoPopup"), i.bind({
            			select: function (e)
            			{
            				l._updateUI(d(e.value))
            			},
            			change: function ()
            			{
            				l._select(i.color()), l.close()
            			},
            			cancel: function ()
            			{
            				l.close()
            			}
            		}), r.bind({
            			close: function (e)
            			{
            				if (l.trigger("close")) return e.preventDefault(), a;
            				l.wrapper.children(".k-picker-wrap").removeClass("k-state-focused");
            				var t = i._selectOnHide();
            				t ? l._select(t) : (setTimeout(function ()
            				{
            					l.wrapper && l.wrapper.focus()
            				}), l._updateUI(l.color()))
            			},
            			open: function (e)
            			{
            				l.trigger("open") ? e.preventDefault() : l.wrapper.children(".k-picker-wrap").addClass("k-state-focused")
            			},
            			activate: function ()
            			{
            				i._select(l.color(), !0), i.focus(), l.wrapper.children(".k-picker-wrap").addClass("k-state-focused")
            			}
            		})), r
            	}
            });
		r.plugin(w), r.plugin(I), r.plugin(S)
	}(jQuery, parseInt), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, a)
{
	(a || t)()
});;
! function (e, define)
{
	define("util/undoredostack.min", ["kendo.core.min"], e)
}(function ()
{
	! function (e)
	{
		var t = e.Observable.extend({
			init: function (t)
			{
				e.Observable.fn.init.call(this, t), this.clear()
			},
			events: ["undo", "redo"],
			push: function (e)
			{
				this.stack = this.stack.slice(0, this.currentCommandIndex + 1), this.currentCommandIndex = this.stack.push(e) - 1
			},
			undo: function ()
			{
				if (this.canUndo()) {
					var e = this.stack[this.currentCommandIndex--];
					e.undo(), this.trigger("undo", {
						command: e
					})
				}
			},
			redo: function ()
			{
				if (this.canRedo()) {
					var e = this.stack[++this.currentCommandIndex];
					e.redo(), this.trigger("redo", {
						command: e
					})
				}
			},
			clear: function ()
			{
				this.stack = [], this.currentCommandIndex = -1
			},
			canUndo: function ()
			{
				return this.currentCommandIndex >= 0
			},
			canRedo: function ()
			{
				return this.currentCommandIndex != this.stack.length - 1
			}
		});
		e.deepExtend(e, {
			util: {
				UndoRedoStack: t
			}
		})
	}(kendo)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/main.min", ["util/undoredostack.min", "kendo.combobox.min", "kendo.dropdownlist.min", "kendo.window.min", "kendo.colorpicker.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n, i, o, r, s, a = window.kendo,
            l = a.Class,
            d = a.ui.Widget,
            c = a.support.mobileOS,
            u = a.support.browser,
            f = e.extend,
            p = e.proxy,
            m = a.deepExtend,
            h = a.keys,
            g = "select",
            b = l.extend({
            	init: function (e)
            	{
            		this.options = e
            	},
            	getHtml: function ()
            	{
            		var e = this.options;
            		return a.template(e.template, {
            			useWithBlock: !1
            		})(e)
            	}
            }),
            v = {
            	editorWrapperTemplate: '<table cellspacing="4" cellpadding="0" class="k-widget k-editor k-header" role="presentation"><tbody><tr role="presentation"><td class="k-editor-toolbar-wrap" role="presentation"><ul class="k-editor-toolbar" role="toolbar" /></td></tr><tr><td class="k-editable-area" /></tr></tbody></table>',
            	buttonTemplate: '# var iconCssClass= "k-i-" + kendo.toHyphens(data.cssClass.replace("k-", ""));#<a href="" role="button" class="k-tool"#= data.popup ? " data-popup" : "" # unselectable="on" title="#= data.title #"><span unselectable="on" class="k-tool-icon #= iconCssClass #"></span><span class="k-tool-text">#= data.title #</span></a>',
            	colorPickerTemplate: '<div class="k-colorpicker #= data.cssClass #" />',
            	comboBoxTemplate: '<select title="#= data.title #" class="#= data.cssClass #" />',
            	dropDownListTemplate: '<span class="k-editor-dropdown"><select title="#= data.title #" class="#= data.cssClass #" /></span>',
            	separatorTemplate: '<span class="k-separator" />',
            	overflowAnchorTemplate: '<a href="" role="button" class="k-tool k-overflow-anchor" data-popup unselectable="on"><span unselectable="on" class="k-icon k-i-more"></span></a>',
            	formatByName: function (t, n)
            	{
            		for (var i = 0; i < n.length; i++)
            			if (e.inArray(t, n[i].tags) >= 0) return n[i]
            	},
            	registerTool: function (e, t)
            	{
            		var n = t.options;
            		n && n.template && (n.template.options.cssClass = "k-" + e), t.name || (t.options.name = e, t.name = e.toLowerCase()), x.defaultTools[e] = t
            	},
            	registerFormat: function (e, t)
            	{
            		x.fn.options.formats[e] = t
            	}
            },
            k = {
            	bold: "Bold",
            	italic: "Italic",
            	underline: "Underline",
            	strikethrough: "Strikethrough",
            	superscript: "Superscript",
            	subscript: "Subscript",
            	justifyCenter: "Center text",
            	justifyLeft: "Align text left",
            	justifyRight: "Align text right",
            	justifyFull: "Justify",
            	insertUnorderedList: "Insert unordered list",
            	insertOrderedList: "Insert ordered list",
            	indent: "Indent",
            	outdent: "Outdent",
            	createLink: "Insert hyperlink",
            	unlink: "Remove hyperlink",
            	insertImage: "Insert image",
            	insertFile: "Insert file",
            	insertHtml: "Insert HTML",
            	viewHtml: "View HTML",
            	fontName: "Select font family",
            	fontNameInherit: "(inherited font)",
            	fontSize: "Select font size",
            	fontSizeInherit: "(inherited size)",
            	formatBlock: "Format",
            	formatting: "Format",
            	foreColor: "Color",
            	backColor: "Background color",
            	style: "Styles",
            	emptyFolder: "Empty Folder",
            	editAreaTitle: "Editable area. Press F10 for toolbar.",
            	uploadFile: "Upload",
            	orderBy: "Arrange by:",
            	orderBySize: "Size",
            	orderByName: "Name",
            	invalidFileType: 'The selected file "{0}" is not valid. Supported file types are {1}.',
            	deleteFile: 'Are you sure you want to delete "{0}"?',
            	overwriteFile: 'A file with name "{0}" already exists in the current directory. Do you want to overwrite it?',
            	directoryNotFound: "A directory with this name was not found.",
            	imageWebAddress: "Web address",
            	imageAltText: "Alternate text",
            	imageWidth: "Width (px)",
            	imageHeight: "Height (px)",
            	fileWebAddress: "Web address",
            	fileTitle: "Title",
            	linkWebAddress: "Web address",
            	linkText: "Text",
            	linkToolTip: "ToolTip",
            	linkOpenInNewWindow: "Open link in new window",
            	dialogUpdate: "Update",
            	dialogInsert: "Insert",
            	dialogOk: "Ok",
            	dialogCancel: "Cancel",
            	createTable: "Create table",
            	createTableHint: "Create a {0} x {1} table",
            	addColumnLeft: "Add column on the left",
            	addColumnRight: "Add column on the right",
            	addRowAbove: "Add row above",
            	addRowBelow: "Add row below",
            	deleteRow: "Delete row",
            	deleteColumn: "Delete column",
            	tableWizard: "Table Wizard",
            	tableTab: "Table",
            	cellTab: "Cell",
            	accessibilityTab: "Accessibility",
            	caption: "Caption",
            	summary: "Summary",
            	width: "Width",
            	height: "Height",
            	cellSpacing: "Cell Spacing",
            	cellPadding: "Cell Padding",
            	cellMargin: "Cell Margin",
            	alignment: "Alignment",
            	background: "Background",
            	cssClass: "CSS Class",
            	id: "ID",
            	border: "Border",
            	borderStyle: "Border Style",
            	collapseBorders: "Collapse borders",
            	wrapText: "Wrap text",
            	associateCellsWithHeaders: "Associate cells with headers",
            	alignLeft: "Align Left",
            	alignCenter: "Align Center",
            	alignRight: "Align Right",
            	alignLeftTop: "Align Left Top",
            	alignCenterTop: "Align Center Top",
            	alignRightTop: "Align Right Top",
            	alignLeftMiddle: "Align Left Middle",
            	alignCenterMiddle: "Align Center Middle",
            	alignRightMiddle: "Align Right Middle",
            	alignLeftBottom: "Align Left Bottom",
            	alignCenterBottom: "Align Center Bottom",
            	alignRightBottom: "Align Right Bottom",
            	alignRemove: "Remove Alignment",
            	columns: "Columns",
            	rows: "Rows",
            	selectAllCells: "Select All Cells"
            },
            y = !c || c.ios && c.flatVersion >= 500 || !c.ios && t !== document.documentElement.contentEditable,
            w = {
            	basic: ["bold", "italic", "underline"],
            	alignment: ["justifyLeft", "justifyCenter", "justifyRight"],
            	lists: ["insertUnorderedList", "insertOrderedList"],
            	indenting: ["indent", "outdent"],
            	links: ["createLink", "unlink"],
            	tables: ["tableWizard", "createTable", "addColumnLeft", "addColumnRight", "addRowAbove", "addRowBelow", "deleteRow", "deleteColumn"]
            },
            x = d.extend({
            	init: function (n, i)
            	{
            		var o, r, s, l, c, u = this,
                        h = a.ui.editor,
                        g = h.Dom;
            		y && (d.fn.init.call(u, n, i), u.options = m({}, u.options, i), u.options.tools = u.options.tools.slice(), n = u.element, c = n[0], l = g.name(c), this._registerHandler(n.closest("form"), "submit", p(u.update, u, t)), s = f({}, u.options), s.editor = u, "textarea" == l ? (u._wrapTextarea(), r = u.wrapper.find(".k-editor-toolbar"), c.id && r.attr("aria-controls", c.id)) : (u.element.attr("contenteditable", !0).addClass("k-widget k-editor k-editor-inline"), s.popup = !0, r = e('<ul class="k-editor-toolbar" role="toolbar" />').insertBefore(n)), u.toolbar = new h.Toolbar(r[0], s), u.toolbar.bindTo(u), "textarea" == l && setTimeout(function ()
            		{
            			var e = u.wrapper[0].style.height,
                            t = parseInt(e, 10),
                            n = u.wrapper.height();
            			e.indexOf("px") > 0 && !isNaN(t) && n > t && u.wrapper.height(t - (n - t))
            		}), u._resizable(), u._initializeContentElement(u), u.keyboard = new h.Keyboard([new h.BackspaceHandler(u), new h.TypingHandler(u), new h.SystemHandler(u), new h.SelectAllHandler(u)]), u.clipboard = new h.Clipboard(this), u.undoRedoStack = new a.util.UndoRedoStack, i && i.value ? o = i.value : u.textarea ? (o = c.value, u.options.encoded && e.trim(c.defaultValue).length && (o = c.defaultValue), o = o.replace(/[\r\n\v\f\t ]+/gi, " ")) : o = c.innerHTML, u.value(o || a.ui.editor.emptyElementContent), this._registerHandler(document, {
            			mousedown: function ()
            			{
            				u._endTyping()
            			},
            			mouseup: function ()
            			{
            				u._mouseup()
            			}
            		}), u._initializeImmutables(), u.toolbar.resize(), a.notify(u))
            	},
            	setOptions: function (e)
            	{
            		var t = this;
            		d.fn.setOptions.call(t, e), e.tools && t.toolbar.bindTo(t)
            	},
            	_endTyping: function ()
            	{
            		var e = this.keyboard;
            		try {
            			e.isTypingInProgress() && (e.endTyping(!0), this.saveSelection())
            		} catch (t) { }
            	},
            	_selectionChange: function ()
            	{
            		this._selectionStarted = !1, this.saveSelection(), this.trigger("select", {})
            	},
            	_resizable: function ()
            	{
            		var n = this.options.resizable,
                        i = e.isPlainObject(n) ? n.content === t || n.content === !0 : n;
            		i && this.textarea && (e("<div class='k-resize-handle'><span class='k-icon k-i-resize-se' /></div>").insertAfter(this.textarea), this.wrapper.kendoResizable(f({}, this.options.resizable, {
            			start: function (t)
            			{
            				var n = this.editor = e(t.currentTarget).closest(".k-editor");
            				this.initialSize = n.height(), n.find("td:last").append("<div class='k-overlay' />")
            			},
            			resize: function (e)
            			{
            				var t = e.y.initialDelta,
                                n = this.initialSize + t,
                                i = this.options.min || 0,
                                o = this.options.max || 1 / 0;
            				n = Math.min(o, Math.max(i, n)), this.editor.height(n)
            			},
            			resizeend: function ()
            			{
            				this.editor.find(".k-overlay").remove(), this.editor = null
            			}
            		})))
            	},
            	_initializeTableResizing: function ()
            	{
            		var e = this;
            		a.ui.editor.TableResizing.create(e), e._showTableResizeHandlesProxy = p(e._showTableResizeHandles, e), e.bind(g, e._showTableResizeHandlesProxy)
            	},
            	_destroyTableResizing: function ()
            	{
            		var e = this,
                        t = e.tableResizing;
            		t && (t.destroy(), e.tableResizing = null), e._showTableResizeHandlesProxy && e.unbind(g, e._showTableResizeHandlesProxy)
            	},
            	_showTableResizeHandles: function ()
            	{
            		var e = this,
                        t = e.tableResizing;
            		t && t.showResizeHandles()
            	},
            	_initializeColumnResizing: function ()
            	{
            		a.ui.editor.ColumnResizing.create(this)
            	},
            	_destroyColumnResizing: function ()
            	{
            		var e = this;
            		e.columnResizing && (e.columnResizing.destroy(), e.columnResizing = null)
            	},
            	_initializeRowResizing: function ()
            	{
            		a.ui.editor.RowResizing.create(this)
            	},
            	_destroyRowResizing: function ()
            	{
            		var e = this;
            		e.rowResizing && (e.rowResizing.destroy(), e.rowResizing = null)
            	},
            	_wrapTextarea: function ()
            	{
            		var t = this,
                        n = t.element,
                        i = n[0].style.width,
                        o = n[0].style.height,
                        r = v.editorWrapperTemplate,
                        s = e(r).insertBefore(n).width(i).height(o),
                        a = s.find(".k-editable-area");
            		n.attr("autocomplete", "off").appendTo(a).addClass("k-content k-raw-content").css("display", "none"), t.textarea = n, t.wrapper = s
            	},
            	_createContentElement: function (t)
            	{
            		var n, i, o, r = this,
                        s = r.textarea,
                        l = r.options.domain,
                        d = l || document.domain,
                        f = "",
                        p = 'javascript:""';
            		return (l || d != location.hostname) && (f = '<script>document.domain="' + d + '"</script>', p = "javascript:document.write('" + f + "')"), s.hide(), n = e("<iframe />", {
            			title: r.options.messages.editAreaTitle,
            			frameBorder: "0"
            		})[0], e(n).css("display", "").addClass("k-content").attr("tabindex", s[0].tabIndex).insertBefore(s), n.src = p, i = n.contentWindow || n, o = i.document || n.contentDocument, e(n).one("load", function ()
            		{
            			r.toolbar.decorateFrom(o.body)
            		}), o.open(), o.write("<!DOCTYPE html><html><head><meta charset='utf-8' /><style>html,body{padding:0;margin:0;height:100%;min-height:100%;}body{box-sizing:border-box;font-size:12px;font-family:Verdana,Geneva,sans-serif;margin-top:-1px;padding:5px .4em 0;word-wrap: break-word;-webkit-nbsp-mode: space;-webkit-line-break: after-white-space;" + (a.support.isRtl(s) ? "direction:rtl;" : "") + (u.msie || u.edge ? "height:auto;" : "") + (c.ios ? "word-break:break-all;" : "") + "}h1{font-size:2em;margin:.67em 0}h2{font-size:1.5em}h3{font-size:1.16em}h4{font-size:1em}h5{font-size:.83em}h6{font-size:.7em}p{margin:0 0 1em;}.k-marker{display:none;}.k-paste-container,.Apple-style-span{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}ul,ol{padding-left:2.5em}span{-ms-high-contrast-adjust:none;}a{color:#00a}code{font-size:1.23em}telerik\\3Ascript{display: none;}.k-table{width:100%;border-spacing:0;margin: 0 0 1em;}.k-table td{min-width:1px;padding:.2em .3em;}.k-table,.k-table td{outline:0;border: 1px dotted #ccc;}.k-table p{margin:0;padding:0;}.k-column-resize-handle-wrapper {position: absolute; height: 10px; width:10px; cursor: col-resize; z-index: 2;}.k-column-resize-handle {width: 100%; height: 100%;}.k-column-resize-handle > .k-column-resize-marker {width:2px; height:100%; margin:0 auto; background-color:#00b0ff; display:none; opacity:0.8;}.k-row-resize-handle-wrapper {position: absolute; cursor: row-resize; z-index:2; width: 10px; height: 10px;}.k-row-resize-handle {display: table; width: 100%; height: 100%;}.k-row-resize-marker-wrapper{display: table-cell; height:100%; width:100%; margin:0; padding:0; vertical-align: middle;}.k-row-resize-marker{margin: 0; padding:0; width:100%; height:2px; background-color: #00b0ff; opacity:0.8; display:none;}.k-table-resize-handle-wrapper {position: absolute; background-color: #fff; border: 1px solid #000; z-index: 100; width: 5px; height: 5px;}.k-table-resize-handle {width: 100%; height: 100%;}.k-table-resize-handle.k-resize-east{cursor:e-resize;}.k-table-resize-handle.k-resize-north{cursor:n-resize;}.k-table-resize-handle.k-resize-northeast{cursor:ne-resize;}.k-table-resize-handle.k-resize-northwest{cursor:nw-resize;}.k-table-resize-handle.k-resize-south{cursor:s-resize;}.k-table-resize-handle.k-resize-southeast{cursor:se-resize;}.k-table-resize-handle.k-resize-southwest{cursor:sw-resize;}.k-table-resize-handle.k-resize-west{cursor:w-resize;}.k-table.k-table-resizing{opacity:0.6;}k\\:script{display:none;}</style>" + f + "<script>(function(d,c){d[c]('header'),d[c]('article'),d[c]('nav'),d[c]('section'),d[c]('footer');})(document, 'createElement');</script>" + e.map(t, function (e)
            		{
            			return "<link rel='stylesheet' href='" + e + "'>"
            		}).join("") + "</head><body autocorrect='off' contenteditable='true'></body></html>"), o.close(), i
            	},
            	_blur: function ()
            	{
            		var e = this.textarea,
                        t = e ? e.val() : this._oldValue,
                        n = this.options.encoded ? this.encodedValue() : this.value();
            		this.update(), e && e.trigger("blur"), n != t && this.trigger("change")
            	},
            	_spellCorrect: function (e)
            	{
            		var n, i = !1;
            		this._registerHandler(e.body, {
            			contextmenu: function ()
            			{
            				e.one("select", function ()
            				{
            					n = null
            				}), e._spellCorrectTimeout = setTimeout(function ()
            				{
            					n = new a.ui.editor.RestorePoint(e.getRange(), e.body), i = !1
            				}, 10)
            			},
            			input: function ()
            			{
            				if (n) return a.support.browser.mozilla && !i ? (i = !0, t) : (a.ui.editor._finishUpdate(e, n), t)
            			}
            		})
            	},
            	_registerHandler: function (t, n, i)
            	{
            		var o, r = ".kendoEditor";
            		if (t = e(t), this._handlers || (this._handlers = []), t.length)
            			if (e.isPlainObject(n))
            				for (o in n) n.hasOwnProperty(o) && this._registerHandler(t, o, n[o]);
            			else n = n.split(" ").join(r + " ") + r, this._handlers.push({
            				element: t,
            				type: n,
            				handler: i
            			}), t.on(n, i)
            	},
            	_deregisterHandlers: function ()
            	{
            		var e, t, n = this._handlers;
            		for (e = 0; e < n.length; e++) t = n[e], t.element.off(t.type, t.handler);
            		this._handlers = []
            	},
            	_initializeContentElement: function ()
            	{
            		var n, i, o, r = this;
            		r.textarea ? (r.window = r._createContentElement(r.options.stylesheets), n = r.document = r.window.contentDocument || r.window.document, r.body = n.body, i = r.window, o = n, this._registerHandler(n, "mouseup", p(this._mouseup, this))) : (r.window = window, n = r.document = document, r.body = r.element[0], i = r.body, o = r.body, r.toolbar.decorateFrom(r.body)), this._registerHandler(i, "blur", p(this._blur, this)), this._registerHandler(o, "mousedown ", p(this._mousedown, this));
            		try {
            			n.execCommand("enableInlineTableEditing", null, !1)
            		} catch (s) { }
            		a.support.touch && this._registerHandler(n, {
            			selectionchange: p(this._selectionChange, this),
            			keydown: function ()
            			{
            				a._activeElement() != n.body && r.window.focus()
            			}
            		}), this._spellCorrect(r), this._registerHandler(r.body, {
            			keydown: function (e)
            			{
            				var n, i, o, s, a, l, d, c, u, f;
            				return (e.keyCode !== h.BACKSPACE && e.keyCode !== h.DELETE || "true" === r.body.getAttribute("contenteditable")) && (e.keyCode === h.F10 ? (setTimeout(p(r.toolbar.focus, r.toolbar), 100), e.preventDefault(), t) : (e.keyCode != h.LEFT && e.keyCode != h.RIGHT || (n = r.getRange(), i = e.keyCode == h.LEFT, o = n[i ? "startContainer" : "endContainer"], s = n[i ? "startOffset" : "endOffset"], a = i ? -1 : 1, l = s + a, d = i ? l : s, 3 == o.nodeType && "\ufeff" == o.nodeValue[d] && (n.setStart(o, l), n.collapse(!0), r.selectRange(n))), c = r.toolbar.tools, u = r.keyboard.toolFromShortcut(c, e), f = u ? c[u].options : {}, u && !f.keyPressCommand ? (e.preventDefault(), /^(undo|redo)$/.test(u) || r.keyboard.endTyping(!0), r.trigger("keydown", e), r.exec(u), r._runPostContentKeyCommands(e), !1) : (r.keyboard.clearTimeout(), r.keyboard.keydown(e), t)))
            			},
            			keypress: function (e)
            			{
            				setTimeout(function ()
            				{
            					r._runPostContentKeyCommands(e), r._showTableResizeHandles()
            				}, 0)
            			},
            			keyup: function (t)
            			{
            				var n = [h.BACKSPACE, h.TAB, h.PAGEUP, h.PAGEDOWN, h.END, h.HOME, h.LEFT, h.UP, h.RIGHT, h.DOWN, h.INSERT, h.DELETE];
            				(e.inArray(t.keyCode, n) > -1 || 65 == t.keyCode && t.ctrlKey && !t.altKey && !t.shiftKey) && r._selectionChange(), r.keyboard.keyup(t)
            			},
            			click: function (e)
            			{
            				var t, n = a.ui.editor.Dom;
            				"img" === n.name(e.target) && (t = r.createRange(), t.selectNode(e.target), r.selectRange(t))
            			},
            			"cut copy paste": function (e)
            			{
            				r.clipboard["on" + e.type](e)
            			},
            			focusin: function ()
            			{
            				r.body.hasAttribute("contenteditable") && (e(this).addClass("k-state-active"), r.toolbar.show())
            			},
            			focusout: function ()
            			{
            				setTimeout(function ()
            				{
            					var t, n = a._activeElement(),
                                    i = r.body,
                                    o = r.toolbar;
            					o.options.popup && (t = o.window.element.get(0), t && !e.contains(t, n) && t != n && (o.preventPopupHide = !1)), n == i || e.contains(i, n) || e(n).is(".k-editortoolbar-dragHandle") || o.focused() || (e(i).removeClass("k-state-active"), o.hide())
            				}, 10)
            			}
            		}), r._initializeColumnResizing(), r._initializeRowResizing(), r._initializeTableResizing()
            	},
            	_initializeImmutables: function ()
            	{
            		var e = this,
                        t = a.ui.editor;
            		e.options.immutables && (e.immutables = new t.Immutables(e))
            	},
            	_mousedown: function (t)
            	{
            		var n, i = this;
            		i._selectionStarted = !0, u.gecko || (n = e(t.target), (2 == t.which || 1 == t.which && t.ctrlKey) && n.is("a[href]") && window.open(n.attr("href"), "_new"))
            	},
            	_mouseup: function ()
            	{
            		var e = this;
            		e._selectionStarted && setTimeout(function ()
            		{
            			e._selectionChange()
            		}, 1)
            	},
            	_runPostContentKeyCommands: function (e)
            	{
            		var t, n, i, o, r = this.getRange(),
                        s = this.keyboard.toolsFromShortcut(this.toolbar.tools, e);
            		for (t = 0; t < s.length; t++) n = s[t], i = n.options, i.keyPressCommand && (o = new i.command({
            			range: r
            		}), o.changesContent() && (this.keyboard.endTyping(!0), this.exec(n.name)))
            	},
            	refresh: function ()
            	{
            		var e = this;
            		e.textarea && (e._destroyResizings(), e.textarea.val(e.value()), e.wrapper.find("iframe").remove(), e._initializeContentElement(e), e.value(e.textarea.val()))
            	},
            	events: ["select", "change", "execute", "error", "paste", "keydown", "keyup"],
            	options: {
            		name: "Editor",
            		messages: k,
            		formats: {},
            		encoded: !0,
            		domain: null,
            		resizable: !1,
            		deserialization: {
            			custom: null
            		},
            		serialization: {
            			entities: !0,
            			semantic: !0,
            			scripts: !1
            		},
            		pasteCleanup: {
            			all: !1,
            			css: !1,
            			custom: null,
            			keepNewLines: !1,
            			msAllFormatting: !1,
            			msConvertLists: !0,
            			msTags: !0,
            			none: !1,
            			span: !1
            		},
            		stylesheets: [],
            		dialogOptions: {
            			modal: !0,
            			resizable: !1,
            			draggable: !0,
            			animation: !1
            		},
            		imageBrowser: null,
            		fileBrowser: null,
            		fontName: [{
            			text: "Arial",
            			value: "Arial,Helvetica,sans-serif"
            		}, {
            			text: "Courier New",
            			value: "'Courier New',Courier,monospace"
            		}, {
            			text: "Georgia",
            			value: "Georgia,serif"
            		}, {
            			text: "Impact",
            			value: "Impact,Charcoal,sans-serif"
            		}, {
            			text: "Lucida Console",
            			value: "'Lucida Console',Monaco,monospace"
            		}, {
            			text: "Tahoma",
            			value: "Tahoma,Geneva,sans-serif"
            		}, {
            			text: "Times New Roman",
            			value: "'Times New Roman',Times,serif"
            		}, {
            			text: "Trebuchet MS",
            			value: "'Trebuchet MS',Helvetica,sans-serif"
            		}, {
            			text: "Verdana",
            			value: "Verdana,Geneva,sans-serif"
            		}],
            		fontSize: [{
            			text: "1 (8pt)",
            			value: "xx-small"
            		}, {
            			text: "2 (10pt)",
            			value: "x-small"
            		}, {
            			text: "3 (12pt)",
            			value: "small"
            		}, {
            			text: "4 (14pt)",
            			value: "medium"
            		}, {
            			text: "5 (18pt)",
            			value: "large"
            		}, {
            			text: "6 (24pt)",
            			value: "x-large"
            		}, {
            			text: "7 (36pt)",
            			value: "xx-large"
            		}],
            		formatBlock: [{
            			text: "Paragraph",
            			value: "p"
            		}, {
            			text: "Quotation",
            			value: "blockquote"
            		}, {
            			text: "Heading 1",
            			value: "h1"
            		}, {
            			text: "Heading 2",
            			value: "h2"
            		}, {
            			text: "Heading 3",
            			value: "h3"
            		}, {
            			text: "Heading 4",
            			value: "h4"
            		}, {
            			text: "Heading 5",
            			value: "h5"
            		}, {
            			text: "Heading 6",
            			value: "h6"
            		}],
            		tools: [].concat.call(["formatting"], w.basic, w.alignment, w.lists, w.indenting, w.links, ["insertImage"], w.tables)
            	},
            	destroy: function ()
            	{
            		var e = this;
            		d.fn.destroy.call(this), this._endTyping(!0), this._deregisterHandlers(), clearTimeout(this._spellCorrectTimeout), this._focusOutside(), this.toolbar.destroy(), e._destroyResizings(), a.destroy(this.wrapper)
            	},
            	_destroyResizings: function ()
            	{
            		var e = this;
            		e._destroyTableResizing(), a.ui.editor.TableResizing.dispose(e), e._destroyRowResizing(), a.ui.editor.RowResizing.dispose(e), e._destroyColumnResizing(), a.ui.editor.ColumnResizing.dispose(e)
            	},
            	_focusOutside: function ()
            	{
            		if (a.support.browser.msie && this.textarea) {
            			var t = e("<input style='position:fixed;left:1px;top:1px;width:1px;height:1px;font-size:0;border:0;opacity:0' />").appendTo(document.body).focus();
            			t.blur().remove()
            		}
            	},
            	state: function (e)
            	{
            		var t, n, i = x.defaultTools[e],
                        o = i && (i.options.finder || i.finder),
                        r = a.ui.editor.RangeUtils;
            		return !!o && (t = this.getRange(), n = r.textNodes(t), !n.length && t.collapsed && (n = [t.startContainer]), o.getFormat ? o.getFormat(n) : o.isFormatted(n))
            	},
            	value: function (e)
            	{
            		var n = this.body,
                        i = a.ui.editor,
                        o = this.options,
                        r = i.Serializer.domToXhtml(n, o.serialization);
            		return e === t ? r : (e != r && (i.Serializer.htmlToDom(e, n, o.deserialization), this.selectionRestorePoint = null, this.update(), this.toolbar.refreshTools()), t)
            	},
            	saveSelection: function (t)
            	{
            		t = t || this.getRange();
            		var n = t.commonAncestorContainer,
                        i = this.body;
            		(n == i || e.contains(i, n)) && (this.selectionRestorePoint = new a.ui.editor.RestorePoint(t, i))
            	},
            	_focusBody: function ()
            	{
            		var e, t = this.body,
                        n = this.wrapper && this.wrapper.find("iframe")[0],
                        i = this.document.documentElement,
                        o = a._activeElement();
            		o != t && o != n && (e = i.scrollTop, t.focus(), i.scrollTop = e)
            	},
            	restoreSelection: function ()
            	{
            		this._focusBody(), this.selectionRestorePoint && this.selectRange(this.selectionRestorePoint.toRange())
            	},
            	focus: function ()
            	{
            		this.restoreSelection()
            	},
            	update: function (e)
            	{
            		e = e || this.options.encoded ? this.encodedValue() : this.value(), this.textarea ? this.textarea.val(e) : this._oldValue = e
            	},
            	encodedValue: function ()
            	{
            		return a.ui.editor.Dom.encode(this.value())
            	},
            	createRange: function (e)
            	{
            		return a.ui.editor.RangeUtils.createRange(e || this.document)
            	},
            	getSelection: function ()
            	{
            		return a.ui.editor.SelectionUtils.selectionFromDocument(this.document)
            	},
            	selectRange: function (e)
            	{
            		this._focusBody();
            		var t = this.getSelection();
            		t.removeAllRanges(), t.addRange(e), this.saveSelection(e)
            	},
            	getRange: function ()
            	{
            		var e = this.getSelection(),
                        t = e && e.rangeCount > 0 ? e.getRangeAt(0) : this.createRange(),
                        n = this.document;
            		return t.startContainer != n || t.endContainer != n || t.startOffset || t.endOffset || (t.setStart(this.body, 0), t.collapse(!0)), t
            	},
            	selectedHtml: function ()
            	{
            		return a.ui.editor.Serializer.domToXhtml(this.getRange().cloneContents())
            	},
            	paste: function (t, n)
            	{
            		this.focus();
            		var i = new a.ui.editor.InsertHtmlCommand(e.extend({
            			range: this.getRange(),
            			html: t
            		}, n));
            		i.editor = this, i.exec()
            	},
            	exec: function (e, n)
            	{
            		var i, o, r, s, a = this,
                        l = null;
            		if (!e) throw Error("kendoEditor.exec(): `name` parameter cannot be empty");
            		if ("true" !== a.body.getAttribute("contenteditable") && "print" !== e && "pdf" !== e) return !1;
            		if (e = e.toLowerCase(), a.keyboard.isTypingInProgress() || a.restoreSelection(), o = a.toolbar.toolById(e), !o)
            			for (s in x.defaultTools)
            				if (s.toLowerCase() == e) {
            					o = x.defaultTools[s];
            					break
            				}
            		if (o) {
            			if (i = a.getRange(), o.command && (l = o.command(f({
            				range: i,
            				body: a.body,
            				immutables: !!a.immutables
            			}, n))), r = a.trigger("execute", {
            				name: e,
            				command: l
            			})) return;
            			if (/^(undo|redo)$/i.test(e)) a.undoRedoStack[e]();
            			else if (l && (l.managesUndoRedo || a.undoRedoStack.push(l), l.editor = a, l.exec(), l.async)) return l.change = p(a._selectionChange, a), t;
            			a._selectionChange()
            		}
            	}
            });
		x.defaultTools = {
			undo: {
				options: {
					key: "Z",
					ctrl: !0
				}
			},
			redo: {
				options: {
					key: "Y",
					ctrl: !0
				}
			}
		}, a.ui.plugin(x), n = l.extend({
			init: function (e)
			{
				this.options = e
			},
			initialize: function (e, t)
			{
				e.attr({
					unselectable: "on",
					title: t.title
				}), e.children(".k-tool-text").html(t.title)
			},
			command: function (e)
			{
				return new this.options.command(e)
			},
			update: e.noop
		}), n.exec = function (e, t, n)
		{
			e.exec(t, {
				value: n
			})
		}, i = n.extend({
			init: function (e)
			{
				n.fn.init.call(this, e)
			},
			command: function (e)
			{
				var t = this;
				return new a.ui.editor.FormatCommand(f(e, {
					formatter: t.options.formatter
				}))
			},
			update: function (e, t)
			{
				var n = this.options.finder.isFormatted(t);
				e.toggleClass("k-state-selected", n), e.attr("aria-pressed", n)
			}
		}), v.registerTool("separator", new n({
			template: new b({
				template: v.separatorTemplate
			})
		})), o = u.msie && u.version < 9 ? "\ufeff" : "", r = "\ufeff", s = r, u.msie && 10 == u.version && (s = "&nbsp;"), f(a.ui, {
			editor: {
				ToolTemplate: b,
				EditorUtils: v,
				Tool: n,
				FormatTool: i,
				_bomFill: o,
				emptyElementContent: r,
				emptyTableCellContent: s
			}
		}), a.PDFMixin && (a.PDFMixin.extend(x.prototype), x.prototype._drawPDF = function ()
		{
			return a.drawing.drawDOM(this.body, this.options.pdf)
		}, x.prototype.saveAsPDF = function ()
		{
			var t, n = new e.Deferred,
                i = n.promise(),
                o = {
                	promise: i
                };
			if (!this.trigger("pdfExport", o)) return t = this.options.pdf, this._drawPDF(n).then(function (e)
			{
				return a.drawing.exportPDF(e, t)
			}).done(function (e)
			{
				a.saveAs({
					dataURI: e,
					fileName: t.fileName,
					proxyURL: t.proxyURL,
					forceProxy: t.forceProxy
				}), n.resolve()
			}).fail(function (e)
			{
				n.reject(e)
			}), i
		})
	}(window.jQuery || window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/dom.min", ["editor/main.min"], e)
}(function ()
{
	! function (e)
	{
		function t(e)
		{
			var t, n, i = {};
			for (t = 0, n = e.length; t < n; t++) i[e[t]] = !0;
			return i
		}
		var n, i, o, r, s, a, l, d, c, u, f, p = window.kendo,
            m = e.map,
            h = e.extend,
            g = p.support.browser,
            b = "style",
            v = "float",
            k = "cssFloat",
            y = "styleFloat",
            w = "class",
            x = "k-marker",
            C = t("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed".split(",")),
            T = "div,p,h1,h2,h3,h4,h5,h6,address,applet,blockquote,button,center,dd,dir,dl,dt,fieldset,form,frameset,hr,iframe,isindex,map,menu,noframes,noscript,object,pre,script,table,tbody,td,tfoot,th,thead,tr,header,article,nav,footer,section,aside,main,figure,figcaption".split(","),
            _ = T.concat(["ul", "ol", "li"]),
            N = t(_),
            S = "span,em,a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,strike,strong,sub,sup,textarea,tt,u,var,data,time,mark,ruby".split(","),
            z = t(S),
            R = t("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected".split(",")),
            A = function (e)
            {
            	1 == e.nodeType && e.normalize()
            };
		g.msie && g.version >= 8 && (A = function (e)
		{
			if (1 == e.nodeType && e.firstChild)
				for (var t = e.firstChild, n = t; ;) {
					if (n = n.nextSibling, !n) break;
					3 == n.nodeType && 3 == t.nodeType && (n.nodeValue = t.nodeValue + n.nodeValue, f.remove(t)), t = n
				}
		}), n = /^\s+$/, i = /^[\n\r\t]+$/, o = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i, r = /\ufeff/g, s = /^(\s+|\ufeff)$/, l = "color,padding-left,padding-right,padding-top,padding-bottom,background-color,background-attachment,background-image,background-position,background-repeat,border-top-style,border-top-width,border-top-color,border-bottom-style,border-bottom-width,border-bottom-color,border-left-style,border-left-width,border-left-color,border-right-style,border-right-width,border-right-color,font-family,font-size,font-style,font-variant,font-weight,line-height".split(","), d = /[<>\&]/g, c = /[\u00A0-\u2666<>\&]/g, u = {
			34: "quot",
			38: "amp",
			39: "apos",
			60: "lt",
			62: "gt",
			160: "nbsp",
			161: "iexcl",
			162: "cent",
			163: "pound",
			164: "curren",
			165: "yen",
			166: "brvbar",
			167: "sect",
			168: "uml",
			169: "copy",
			170: "ordf",
			171: "laquo",
			172: "not",
			173: "shy",
			174: "reg",
			175: "macr",
			176: "deg",
			177: "plusmn",
			178: "sup2",
			179: "sup3",
			180: "acute",
			181: "micro",
			182: "para",
			183: "middot",
			184: "cedil",
			185: "sup1",
			186: "ordm",
			187: "raquo",
			188: "frac14",
			189: "frac12",
			190: "frac34",
			191: "iquest",
			192: "Agrave",
			193: "Aacute",
			194: "Acirc",
			195: "Atilde",
			196: "Auml",
			197: "Aring",
			198: "AElig",
			199: "Ccedil",
			200: "Egrave",
			201: "Eacute",
			202: "Ecirc",
			203: "Euml",
			204: "Igrave",
			205: "Iacute",
			206: "Icirc",
			207: "Iuml",
			208: "ETH",
			209: "Ntilde",
			210: "Ograve",
			211: "Oacute",
			212: "Ocirc",
			213: "Otilde",
			214: "Ouml",
			215: "times",
			216: "Oslash",
			217: "Ugrave",
			218: "Uacute",
			219: "Ucirc",
			220: "Uuml",
			221: "Yacute",
			222: "THORN",
			223: "szlig",
			224: "agrave",
			225: "aacute",
			226: "acirc",
			227: "atilde",
			228: "auml",
			229: "aring",
			230: "aelig",
			231: "ccedil",
			232: "egrave",
			233: "eacute",
			234: "ecirc",
			235: "euml",
			236: "igrave",
			237: "iacute",
			238: "icirc",
			239: "iuml",
			240: "eth",
			241: "ntilde",
			242: "ograve",
			243: "oacute",
			244: "ocirc",
			245: "otilde",
			246: "ouml",
			247: "divide",
			248: "oslash",
			249: "ugrave",
			250: "uacute",
			251: "ucirc",
			252: "uuml",
			253: "yacute",
			254: "thorn",
			255: "yuml",
			402: "fnof",
			913: "Alpha",
			914: "Beta",
			915: "Gamma",
			916: "Delta",
			917: "Epsilon",
			918: "Zeta",
			919: "Eta",
			920: "Theta",
			921: "Iota",
			922: "Kappa",
			923: "Lambda",
			924: "Mu",
			925: "Nu",
			926: "Xi",
			927: "Omicron",
			928: "Pi",
			929: "Rho",
			931: "Sigma",
			932: "Tau",
			933: "Upsilon",
			934: "Phi",
			935: "Chi",
			936: "Psi",
			937: "Omega",
			945: "alpha",
			946: "beta",
			947: "gamma",
			948: "delta",
			949: "epsilon",
			950: "zeta",
			951: "eta",
			952: "theta",
			953: "iota",
			954: "kappa",
			955: "lambda",
			956: "mu",
			957: "nu",
			958: "xi",
			959: "omicron",
			960: "pi",
			961: "rho",
			962: "sigmaf",
			963: "sigma",
			964: "tau",
			965: "upsilon",
			966: "phi",
			967: "chi",
			968: "psi",
			969: "omega",
			977: "thetasym",
			978: "upsih",
			982: "piv",
			8226: "bull",
			8230: "hellip",
			8242: "prime",
			8243: "Prime",
			8254: "oline",
			8260: "frasl",
			8472: "weierp",
			8465: "image",
			8476: "real",
			8482: "trade",
			8501: "alefsym",
			8592: "larr",
			8593: "uarr",
			8594: "rarr",
			8595: "darr",
			8596: "harr",
			8629: "crarr",
			8656: "lArr",
			8657: "uArr",
			8658: "rArr",
			8659: "dArr",
			8660: "hArr",
			8704: "forall",
			8706: "part",
			8707: "exist",
			8709: "empty",
			8711: "nabla",
			8712: "isin",
			8713: "notin",
			8715: "ni",
			8719: "prod",
			8721: "sum",
			8722: "minus",
			8727: "lowast",
			8730: "radic",
			8733: "prop",
			8734: "infin",
			8736: "ang",
			8743: "and",
			8744: "or",
			8745: "cap",
			8746: "cup",
			8747: "int",
			8756: "there4",
			8764: "sim",
			8773: "cong",
			8776: "asymp",
			8800: "ne",
			8801: "equiv",
			8804: "le",
			8805: "ge",
			8834: "sub",
			8835: "sup",
			8836: "nsub",
			8838: "sube",
			8839: "supe",
			8853: "oplus",
			8855: "otimes",
			8869: "perp",
			8901: "sdot",
			8968: "lceil",
			8969: "rceil",
			8970: "lfloor",
			8971: "rfloor",
			9001: "lang",
			9002: "rang",
			9674: "loz",
			9824: "spades",
			9827: "clubs",
			9829: "hearts",
			9830: "diams",
			338: "OElig",
			339: "oelig",
			352: "Scaron",
			353: "scaron",
			376: "Yuml",
			710: "circ",
			732: "tilde",
			8194: "ensp",
			8195: "emsp",
			8201: "thinsp",
			8204: "zwnj",
			8205: "zwj",
			8206: "lrm",
			8207: "rlm",
			8211: "ndash",
			8212: "mdash",
			8216: "lsquo",
			8217: "rsquo",
			8218: "sbquo",
			8220: "ldquo",
			8221: "rdquo",
			8222: "bdquo",
			8224: "dagger",
			8225: "Dagger",
			8240: "permil",
			8249: "lsaquo",
			8250: "rsaquo",
			8364: "euro"
		}, f = {
			block: N,
			inline: z,
			findNodeIndex: function (e, t)
			{
				var n = 0;
				if (!e) return -1;
				for (; ;) {
					if (e = e.previousSibling, !e) break;
					t && 3 == e.nodeType || n++
				}
				return n
			},
			isDataNode: function (e)
			{
				return e && null !== e.nodeValue && null !== e.data
			},
			isAncestorOf: function (t, n)
			{
				try {
					return !f.isDataNode(t) && (e.contains(t, f.isDataNode(n) ? n.parentNode : n) || n.parentNode == t)
				} catch (i) {
					return !1
				}
			},
			isAncestorOrSelf: function (e, t)
			{
				return f.isAncestorOf(e, t) || e == t
			},
			findClosestAncestor: function (e, t)
			{
				if (f.isAncestorOf(e, t))
					for (; t && t.parentNode != e;) t = t.parentNode;
				return t
			},
			getNodeLength: function (e)
			{
				return f.isDataNode(e) ? e.length : e.childNodes.length
			},
			splitDataNode: function (e, t)
			{
				for (var n, i = e.cloneNode(!1), o = "", r = e.nextSibling; r && 3 == r.nodeType && r.nodeValue;) o += r.nodeValue, n = r, r = r.nextSibling, f.remove(n);
				e.deleteData(t, e.length), i.deleteData(0, t), i.nodeValue += o, f.insertAfter(i, e)
			},
			attrEquals: function (e, t)
			{
				var n, i;
				for (n in t)
					if (i = e[n], n == v && (i = e[p.support.cssFloat ? k : y]), "object" == typeof i) {
						if (!f.attrEquals(i, t[n])) return !1
					} else if (i != t[n]) return !1;
				return !0
			},
			blockParentOrBody: function (e)
			{
				return f.parentOfType(e, _) || e.ownerDocument.body
			},
			blockParents: function (t)
			{
				var n, i, o, r = [];
				for (n = 0, i = t.length; n < i; n++) o = f.parentOfType(t[n], f.blockElements), o && e.inArray(o, r) < 0 && r.push(o);
				return r
			},
			windowFromDocument: function (e)
			{
				return e.defaultView || e.parentWindow
			},
			normalize: A,
			blockElements: _,
			nonListBlockElements: T,
			inlineElements: S,
			empty: C,
			fillAttrs: R,
			nodeTypes: {
				ELEMENT_NODE: 1,
				ATTRIBUTE_NODE: 2,
				TEXT_NODE: 3,
				CDATA_SECTION_NODE: 4,
				ENTITY_REFERENCE_NODE: 5,
				ENTITY_NODE: 6,
				PROCESSING_INSTRUCTION_NODE: 7,
				COMMENT_NODE: 8,
				DOCUMENT_NODE: 9,
				DOCUMENT_TYPE_NODE: 10,
				DOCUMENT_FRAGMENT_NODE: 11,
				NOTATION_NODE: 12
			},
			toHex: function (e)
			{
				var t = o.exec(e);
				return t ? "#" + m(t.slice(1), function (e)
				{
					return e = parseInt(e, 10).toString(16), e.length > 1 ? e : "0" + e
				}).join("") : e
			},
			encode: function (e, t)
			{
				var n = !t || t.entities ? c : d;
				return e.replace(n, function (e)
				{
					var t = e.charCodeAt(0),
                        n = u[t];
					return n ? "&" + n + ";" : e
				})
			},
			isBom: function (e)
			{
				return e && 3 === e.nodeType && /^[\ufeff]+$/.test(e.nodeValue)
			},
			stripBom: function (e)
			{
				return (e || "").replace(r, "")
			},
			stripBomNode: function (e)
			{
				f.isBom(e) && e.parentNode.removeChild(e)
			},
			insignificant: function (e)
			{
				var t = e.attributes;
				return "k-marker" == e.className || f.is(e, "br") && ("k-br" == e.className || t._moz_dirty || t._moz_editor_bogus_node)
			},
			tableCell: function (e)
			{
				return f.is(e, "td") || f.is(e, "th")
			},
			significantNodes: function (t)
			{
				return e.grep(t, function (e)
				{
					var t = f.name(e);
					return "br" != t && (!f.insignificant(e) && (!f.emptyTextNode(e) && !(1 == e.nodeType && !C[t] && f.emptyNode(e))))
				})
			},
			emptyTextNode: function (e)
			{
				return e && 3 == e.nodeType && s.test(e.nodeValue)
			},
			emptyNode: function (e)
			{
				return 1 == e.nodeType && !f.significantNodes(e.childNodes).length
			},
			name: function (e)
			{
				return e.nodeName.toLowerCase()
			},
			significantChildNodes: function (t)
			{
				return e.grep(t.childNodes, function (e)
				{
					return 3 != e.nodeType || !f.isWhitespace(e)
				})
			},
			lastTextNode: function (e)
			{
				var t, n = null;
				if (3 == e.nodeType) return e;
				for (t = e.lastChild; t; t = t.previousSibling)
					if (n = f.lastTextNode(t)) return n;
				return n
			},
			is: function (e, t)
			{
				return e && f.name(e) == t
			},
			isMarker: function (e)
			{
				return e.className == x
			},
			isWhitespace: function (e)
			{
				return n.test(e.nodeValue)
			},
			isEmptyspace: function (e)
			{
				return i.test(e.nodeValue)
			},
			htmlIndentSpace: function (t)
			{
				var n, o, s, a, l, d;
				return !(!f.isDataNode(t) || !f.isWhitespace(t)) && (!!i.test(t.nodeValue) || (n = function (e, t)
				{
					for (; e[t];)
						if (e = e[t], f.significantNodes([e]).length > 0) return e
				}, o = t.parentNode, s = n(t, "previousSibling"), a = n(t, "nextSibling"), r.test(t.nodeValue) ? !(!s && !a) : !!e(o).is("tr,tbody,thead,tfoot,table,ol,ul") || !!((f.isBlock(o) || f.is(o, "body")) && (l = s && f.isBlock(s), d = a && f.isBlock(a), !a && l || !s && d || l && d))))
			},
			isBlock: function (e)
			{
				return N[f.name(e)]
			},
			isEmpty: function (e)
			{
				return C[f.name(e)]
			},
			isInline: function (e)
			{
				return z[f.name(e)]
			},
			list: function (e)
			{
				var t = e ? f.name(e) : "";
				return "ul" == t || "ol" == t || "dl" == t
			},
			scrollContainer: function (e)
			{
				var t = f.windowFromDocument(e),
                    n = (t.contentWindow || t).document || t.ownerDocument || t;
				return n = p.support.browser.webkit || "BackCompat" == n.compatMode ? n.body : n.documentElement
			},
			scrollTo: function (t)
			{
				var n, i, o = e(f.isDataNode(t) ? t.parentNode : t),
                    r = f.windowFromDocument(t.ownerDocument),
                    s = r.innerHeight,
                    a = f.scrollContainer(t.ownerDocument);
				n = o.offset().top, i = o[0].offsetHeight, i || (i = parseInt(o.css("line-height"), 10) || Math.ceil(1.2 * parseInt(o.css("font-size"), 10)) || 15), i + n > a.scrollTop + s && (a.scrollTop = i + n - s)
			},
			persistScrollTop: function (e)
			{
				a = f.scrollContainer(e).scrollTop
			},
			offset: function (e, t)
			{
				for (var n = {
					top: e.offsetTop,
					left: e.offsetLeft
				}, i = e.offsetParent; i && (!t || f.isAncestorOf(t, i)) ;) n.top += i.offsetTop, n.left += i.offsetLeft, i = i.offsetParent;
				return n
			},
			restoreScrollTop: function (e)
			{
				"number" == typeof a && (f.scrollContainer(e).scrollTop = a)
			},
			insertAt: function (e, t, n)
			{
				e.insertBefore(t, e.childNodes[n] || null)
			},
			insertBefore: function (e, t)
			{
				return t.parentNode ? t.parentNode.insertBefore(e, t) : t
			},
			insertAfter: function (e, t)
			{
				return t.parentNode.insertBefore(e, t.nextSibling)
			},
			remove: function (e)
			{
				e.parentNode.removeChild(e)
			},
			removeTextSiblings: function (e)
			{
				for (var t = e.parentNode; e.nextSibling && 3 == e.nextSibling.nodeType;) t.removeChild(e.nextSibling);
				for (; e.previousSibling && 3 == e.previousSibling.nodeType;) t.removeChild(e.previousSibling)
			},
			trim: function (e)
			{
				var t, n;
				for (t = e.childNodes.length - 1; t >= 0; t--) n = e.childNodes[t], f.isDataNode(n) ? (f.stripBom(n.nodeValue).length || f.remove(n), f.isWhitespace(n) && f.insertBefore(n, e)) : n.className != x && (f.trim(n), n.childNodes.length || f.isEmpty(n) || f.remove(n));
				return e
			},
			closest: function (e, t)
			{
				for (; e && f.name(e) != t;) e = e.parentNode;
				return e
			},
			closestBy: function (e, t, n)
			{
				for (; e && !t(e) ;) {
					if (n && n(e)) return null;
					e = e.parentNode
				}
				return e
			},
			sibling: function (e, t)
			{
				do e = e[t]; while (e && 1 != e.nodeType);
				return e
			},
			next: function (e)
			{
				return f.sibling(e, "nextSibling")
			},
			prev: function (e)
			{
				return f.sibling(e, "previousSibling")
			},
			parentOfType: function (e, t)
			{
				do e = e.parentNode; while (e && !f.ofType(e, t));
				return e
			},
			ofType: function (t, n)
			{
				return e.inArray(f.name(t), n) >= 0
			},
			changeTag: function (e, t, n)
			{
				var i, o, r, s, a, l = f.create(e.ownerDocument, t),
                    d = e.attributes;
				if (!n)
					for (i = 0, o = d.length; i < o; i++) a = d[i], a.specified && (r = a.nodeName, s = a.nodeValue, r == w ? l.className = s : r == b ? l.style.cssText = e.style.cssText : l.setAttribute(r, s));
				for (; e.firstChild;) l.appendChild(e.firstChild);
				return f.insertBefore(l, e), f.remove(e), l
			},
			editableParent: function (e)
			{
				for (; e && (3 == e.nodeType || "true" !== e.contentEditable) ;) e = e.parentNode;
				return e
			},
			wrap: function (e, t)
			{
				return f.insertBefore(t, e), t.appendChild(e), t
			},
			unwrap: function (e)
			{
				for (var t = e.parentNode; e.firstChild;) t.insertBefore(e.firstChild, e);
				t.removeChild(e)
			},
			wrapper: function (t)
			{
				var n = f.closestBy(t, function (e)
				{
					return e.parentNode && f.significantNodes(e.parentNode.childNodes).length > 1
				});
				return e(n).is("body,.k-editor") ? void 0 : n
			},
			create: function (e, t, n)
			{
				return f.attr(e.createElement(t), n)
			},
			attr: function (e, t)
			{
				t = h({}, t), t && b in t && (f.style(e, t.style), delete t.style);
				for (var n in t) null === t[n] ? (e.removeAttribute(n), delete t[n]) : "className" == n && (e[n] = t[n]);
				return h(e, t)
			},
			style: function (t, n)
			{
				e(t).css(n || {})
			},
			unstyle: function (e, t)
			{
				for (var n in t) n == v && (n = p.support.cssFloat ? k : y), e.style[n] = "";
				"" === e.style.cssText && e.removeAttribute(b)
			},
			inlineStyle: function (t, n, i)
			{
				var o, r = e(f.create(t.ownerDocument, n, i));
				return t.appendChild(r[0]), o = m(l, function (e)
				{
					return g.msie && "line-height" == e && "1px" == r.css(e) ? "line-height:1.5" : e + ":" + r.css(e)
				}).join(";"), r.remove(), o
			},
			getEffectiveBackground: function (e)
			{
				var t = e.css("background-color");
				return t.indexOf("rgba(0, 0, 0, 0") < 0 && "transparent" !== t ? t : "html" === e[0].tagName.toLowerCase() ? "Window" : f.getEffectiveBackground(e.parent())
			},
			innerText: function (e)
			{
				var t = e.innerHTML;
				return t = t.replace(/<!--(.|\s)*?-->/gi, ""), t = t.replace(/<\/?[^>]+?\/?>/gm, "")
			},
			removeClass: function (t, n)
			{
				var i, o, r = " " + t.className + " ",
                    s = n.split(" ");
				for (i = 0, o = s.length; i < o; i++) r = r.replace(" " + s[i] + " ", " ");
				r = e.trim(r), r.length ? t.className = r : t.removeAttribute(w)
			},
			commonAncestor: function ()
			{
				var e, t, n, i, o, r = arguments.length,
                    s = [],
                    a = 1 / 0,
                    l = null;
				if (!r) return null;
				if (1 == r) return arguments[0];
				for (e = 0; e < r; e++) {
					for (t = [], n = arguments[e]; n;) t.push(n), n = n.parentNode;
					s.push(t.reverse()), a = Math.min(a, t.length)
				}
				if (1 == r) return s[0][0];
				for (e = 0; e < a; e++) {
					for (i = s[0][e], o = 1; o < r; o++)
						if (i != s[o][e]) return l;
					l = i
				}
				return l
			},
			closestSplittableParent: function (t)
			{
				var n, i, o;
				return n = 1 == t.length ? f.parentOfType(t[0], ["ul", "ol"]) : f.commonAncestor.apply(null, t), n || (n = f.parentOfType(t[0], ["p", "td"]) || t[0].ownerDocument.body), f.isInline(n) && (n = f.blockParentOrBody(n)), i = m(t, f.editableParent), o = f.commonAncestor(i)[0], e.contains(n, o) && (n = o), n
			},
			closestEditable: function (t, n)
			{
				var i, o = f.editableParent(t);
				return i = f.ofType(t, n) ? t : f.parentOfType(t, n), i && o && e.contains(i, o) ? i = o : !i && o && (i = o), i
			},
			closestEditableOfType: function (e, t)
			{
				var n = f.closestEditable(e, t);
				if (n && f.ofType(n, t)) return n
			},
			filter: function (e, t, n)
			{
				var i = function (t)
				{
					return f.name(t) == e
				};
				return f.filterBy(t, i, n)
			},
			filterBy: function (e, t, n)
			{
				for (var i, o = 0, r = e.length, s = []; o < r; o++) i = t(e[o]), (i && !n || !i && n) && s.push(e[o]);
				return s
			},
			ensureTrailingBreaks: function (t)
			{
				var n = e(t).find("p,td,th"),
                    i = n.length,
                    o = 0;
				if (i)
					for (; o < i; o++) f.ensureTrailingBreak(n[o]);
				else f.ensureTrailingBreak(t)
			},
			removeTrailingBreak: function (t)
			{
				e(t).find("br[type=_moz],.k-br").remove()
			},
			ensureTrailingBreak: function (e)
			{
				var t, n, i;
				f.removeTrailingBreak(e), t = e.lastChild, n = t && f.name(t), (!n || "br" != n && "img" != n || "br" == n && "k-br" != t.className) && (i = e.ownerDocument.createElement("br"), i.className = "k-br", e.appendChild(i))
			}
		}, p.ui.editor.Dom = f
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/serializer.min", ["editor/dom.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n, i, o, r, s = window.kendo,
            a = s.ui.editor,
            l = a.Dom,
            d = e.extend,
            c = "xx-small,x-small,small,medium,large,x-large,xx-large".split(","),
            u = /"/g,
            f = /<br[^>]*>/i,
            p = /^\d+(\.\d*)?(px)?$/i,
            m = /<p>(?:&nbsp;)?<\/p>/i,
            h = /(\*?[-#\/\*\\\w]+(?:\[[0-9a-z_-]+\])?)\s*:\s*((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/g,
            g = /^sizzle-\d+/i,
            b = /^k-script-/i,
            v = /\s*onerror\s*=\s*(?:'|")?([^'">\s]*)(?:'|")?/i,
            k = '<br class="k-br">',
            y = document.createElement("div");
		y.innerHTML = " <hr>", n = 3 === y.firstChild.nodeType, y = null, i = e.isFunction, o = "td", r = {
			toEditableHtml: function (e)
			{
				return (e || "").replace(/<!\[CDATA\[(.*)?\]\]>/g, "<!--[CDATA[$1]]-->").replace(/<(\/?)script([^>]*)>/gi, "<$1k:script$2>").replace(/<img([^>]*)>/gi, function (e)
				{
					return e.replace(v, "")
				}).replace(/(<\/?img[^>]*>)[\r\n\v\f\t ]+/gi, "$1").replace(/^<(table|blockquote)/i, k + "<$1").replace(/^[\s]*(&nbsp;|\u00a0)/i, "$1").replace(/<\/(table|blockquote)>$/i, "</$1>" + k)
			},
			_toEditableImmutables: function (t)
			{
				for (var n = a.Immutables.immutable, i = l.emptyTextNode, o = t.firstChild, r = t.lastChild; i(o) ;) o = o.nextSibling;
				for (; i(r) ;) r = r.previousSibling;
				o && n(o) && e(k).prependTo(t), r && n(r) && e(k).appendTo(t)
			},
			_fillEmptyElements: function (t)
			{
				e(t).find("p,td").each(function ()
				{
					var t, n = e(this);
					if (/^\s*$/g.test(n.text()) && !n.find("img,input").length) {
						for (t = this; t.firstChild && 3 != t.firstChild.nodeType;) t = t.firstChild;
						1 != t.nodeType || l.empty[l.name(t)] || (t.innerHTML = l.is(t, "td") ? s.ui.editor.emptyTableCellContent : s.ui.editor.emptyElementContent)
					}
				})
			},
			_removeSystemElements: function (t)
			{
				e(".k-paste-container", t).remove()
			},
			_resetOrderedLists: function (e)
			{
				var t, n, i, o = e.getElementsByTagName("ol");
				for (t = 0; t < o.length; t++) n = o[t], i = n.getAttribute("start"), n.setAttribute("start", 1), i ? n.setAttribute("start", i) : n.removeAttribute(i)
			},
			_preventScriptExecution: function (t)
			{
				e(t).find("*").each(function ()
				{
					var e, t, n, i, o = this.attributes;
					for (t = 0, n = o.length; t < n; t++) e = o[t], i = e.nodeName, e.specified && /^on/i.test(i) && (this.setAttribute("k-script-" + i, e.value), this.removeAttribute(i))
				})
			},
			htmlToDom: function (t, n, o)
			{
				var a = s.support.browser,
                    d = a.msie,
                    c = d && a.version < 9,
                    u = "originalsrc",
                    f = "originalhref",
                    p = o || {},
                    m = p.immutables;
				return t = r.toEditableHtml(t), c && (t = "<br/>" + t, t = t.replace(/href\s*=\s*(?:'|")?([^'">\s]*)(?:'|")?/, f + '="$1"'), t = t.replace(/src\s*=\s*(?:'|")?([^'">\s]*)(?:'|")?/, u + '="$1"')), i(p.custom) && (t = p.custom(t) || t), n.innerHTML = t, m && m.deserialize(n), c ? (l.remove(n.firstChild), e(n).find("k\\:script,script,link,img,a").each(function ()
				{
					var e = this;
					e[f] && (e.setAttribute("href", e[f]), e.removeAttribute(f)), e[u] && (e.setAttribute("src", e[u]), e.removeAttribute(u))
				})) : d && (l.normalize(n), r._resetOrderedLists(n)), r._preventScriptExecution(n), r._fillEmptyElements(n), r._removeSystemElements(n), r._toEditableImmutables(n), e("table", n).addClass("k-table"), n
			},
			domToXhtml: function (i, r)
			{
				function d(t)
				{
					return e.grep(t, function (e)
					{
						return "style" != e.name
					})
				}

				function v(t)
				{
					var n, i, o, r = e.trim,
                        s = r(t),
                        a = [];
					for (h.lastIndex = 0; ;) {
						if (n = h.exec(s), !n) break;
						i = r(n[1].toLowerCase()), o = r(n[2]), "font-size-adjust" != i && "font-stretch" != i && (i.indexOf("color") >= 0 ? o = l.toHex(o) : i.indexOf("font") >= 0 ? o = o.replace(u, "'") : /\burl\(/g.test(o) && (o = o.replace(u, "")), a.push({
							property: i,
							value: o
						}))
					}
					return a
				}

				function k(e)
				{
					var t, n = v(e);
					for (t = 0; t < n.length; t++) z.push(n[t].property), z.push(":"), z.push(n[t].value), z.push(";")
				}

				function y(e)
				{
					var t, n, i, o, s, a, d = [],
                        c = e.attributes;
					for (n = 0, i = c.length; n < i; n++) t = c[n], o = t.nodeName, s = t.value, a = t.specified, "value" == o && "value" in e && e.value ? a = !0 : "type" == o && "text" == s ? a = !0 : "class" != o || s ? g.test(o) ? a = !1 : "complete" == o ? a = !1 : "altHtml" == o ? a = !1 : "start" == o && l.is(e, "ul") ? a = !1 : "start" == o && l.is(e, "ol") && "1" == s ? a = !1 : o.indexOf("_moz") >= 0 ? a = !1 : b.test(o) ? a = !!r.scripts : "data-role" == o && "resizable" == s && (l.is(e, "tr") || l.is(e, "td")) && (a = !1) : a = !1, a && d.push(t);
					return d
				}

				function w(n, i)
				{
					var o, r, a, d, c, u, f, m;
					if (i = i || y(n), l.is(n, "img") && (u = n.style.width, f = n.style.height, m = e(n), u && p.test(u) && (m.attr("width", parseInt(u, 10)), l.unstyle(n, {
						width: t
					})), f && p.test(f) && (m.attr("height", parseInt(f, 10)), l.unstyle(n, {
						height: t
					}))), i.length)
						for (i.sort(function (e, t)
						{
                                return e.nodeName > t.nodeName ? 1 : e.nodeName < t.nodeName ? -1 : 0
						}), o = 0, r = i.length; o < r; o++) a = i[o], d = a.nodeName, c = a.value, "class" == d && "k-table" == c || (d = d.replace(b, ""), z.push(" "), z.push(d), z.push('="'), "style" == d ? k(c || n.style.cssText) : z.push("src" == d || "href" == d ? s.htmlEncode(n.getAttribute(d, 2)) : l.fillAttrs[d] ? d : c), z.push('"'))
				}

				function x(e, t, n)
				{
					for (var i = e.firstChild; i; i = i.nextSibling) _(i, t, n)
				}

				function C(e)
				{
					return e.nodeValue.replace(/\ufeff/g, "")
				}

				function T(e)
				{
					if ("\ufeff" === e.nodeValue) {
						do {
							if (e = e.parentNode, l.is(e, o) && 1 === e.childNodes.length) return !0;
							if (1 !== e.childNodes.length) return !1
						} while (!l.isBlock(e));
						return !0
					}
					return !1
				}

				function _(i, o, s)
				{
					var d, c, u, f, p, m = i.nodeType;
					if (!(e(i).hasClass("k-table-resize-handle") || e(i).hasClass("k-column-resize-handle") || e(i).hasClass("k-row-resize-handle")))
						if (R && a.Immutables.immutable(i)) z.push(R.serialize(i));
						else if (1 == m) {
							if (d = l.name(i), !d || l.insignificant(i)) return;
							if (!r.scripts && ("script" == d || "k:script" == d)) return;
							if (c = A[d], c && (t === c.semantic || r.semantic ^ c.semantic)) return c.start(i), x(i, !1, c.skipEncoding), c.end(i), t;
							z.push("<"), z.push(d), w(i), l.empty[d] ? z.push(" />") : (z.push(">"), x(i, o || l.is(i, "pre")), z.push("</"), z.push(d), z.push(">"))
						} else if (3 == m) {
							if (T(i)) return z.push("&nbsp;"), t;
							f = C(i), !o && n && (u = i.parentNode, p = i.previousSibling, p || (p = (l.isInline(u) ? u : i).previousSibling), p && "" !== p.innerHTML && !l.isBlock(p) || (f = f.replace(/^[\r\n\v\f\t ]+/, "")), f = f.replace(/ +/, " ")), z.push(s ? f : l.encode(f, r))
						} else 4 == m ? (z.push("<![CDATA["), z.push(i.data), z.push("]]>")) : 8 == m && (i.data.indexOf("[CDATA[") < 0 ? (z.push("<!--"), z.push(i.data), z.push("-->")) : (z.push("<!"), z.push(i.data), z.push(">")))
				}

				function N(e)
				{
					var t = e.childNodes.length,
                        n = t && 3 == e.firstChild.nodeType;
					return n && (1 == t || 2 == t && l.insignificant(e.lastChild))
				}

				function S()
				{
					e.isFunction(r.custom) && (z = r.custom(z) || z)
				}
				var z = [],
                    R = r && r.immutables,
                    A = {
                    	iframe: {
                    		start: function (e)
                    		{
                    			z.push("<iframe"), w(e), z.push(">")
                    		},
                    		end: function ()
                    		{
                    			z.push("</iframe>")
                    		}
                    	},
                    	"k:script": {
                    		start: function (e)
                    		{
                    			z.push("<script"), w(e), z.push(">")
                    		},
                    		end: function ()
                    		{
                    			z.push("</script>")
                    		},
                    		skipEncoding: !0
                    	},
                    	span: {
                    		semantic: !0,
                    		start: function (t)
                    		{
                    			var n, i, o = t.style,
                                    r = y(t),
                                    s = d(r);
                    			s.length && (z.push("<span"), w(t, s), z.push(">")), "underline" == o.textDecoration && z.push("<u>"), n = [], o.color && n.push('color="' + l.toHex(o.color) + '"'), o.fontFamily && n.push('face="' + o.fontFamily + '"'), o.fontSize && (i = e.inArray(o.fontSize, c), n.push('size="' + i + '"')), n.length && z.push("<font " + n.join(" ") + ">")
                    		},
                    		end: function (e)
                    		{
                    			var t = e.style;
                    			(t.color || t.fontFamily || t.fontSize) && z.push("</font>"), "underline" == t.textDecoration && z.push("</u>"), d(y(e)).length && z.push("</span>")
                    		}
                    	},
                    	strong: {
                    		semantic: !0,
                    		start: function ()
                    		{
                    			z.push("<b>")
                    		},
                    		end: function ()
                    		{
                    			z.push("</b>")
                    		}
                    	},
                    	em: {
                    		semantic: !0,
                    		start: function ()
                    		{
                    			z.push("<i>")
                    		},
                    		end: function ()
                    		{
                    			z.push("</i>")
                    		}
                    	},
                    	b: {
                    		semantic: !1,
                    		start: function ()
                    		{
                    			z.push("<strong>")
                    		},
                    		end: function ()
                    		{
                    			z.push("</strong>")
                    		}
                    	},
                    	i: {
                    		semantic: !1,
                    		start: function ()
                    		{
                    			z.push("<em>")
                    		},
                    		end: function ()
                    		{
                    			z.push("</em>")
                    		}
                    	},
                    	u: {
                    		semantic: !1,
                    		start: function ()
                    		{
                    			z.push('<span style="text-decoration:underline;">')
                    		},
                    		end: function ()
                    		{
                    			z.push("</span>")
                    		}
                    	},
                    	font: {
                    		semantic: !1,
                    		start: function (e)
                    		{
                    			var t, n, i;
                    			z.push('<span style="'), t = e.getAttribute("color"), n = c[e.getAttribute("size")], i = e.getAttribute("face"), t && (z.push("color:"), z.push(l.toHex(t)), z.push(";")), i && (z.push("font-family:"), z.push(i), z.push(";")), n && (z.push("font-size:"), z.push(n), z.push(";")), z.push('">')
                    		},
                    		end: function ()
                    		{
                    			z.push("</span>")
                    		}
                    	}
                    };
				return A.script = A["k:script"], r = r || {}, t === r.semantic && (r.semantic = !0), N(i) ? (z = l.encode(C(i.firstChild).replace(/[\r\n\v\f\t ]+/, " "), r), S(), z) : (x(i), z = z.join(""), S(), "" === z.replace(f, "").replace(m, "") ? "" : z)
			}
		}, d(a, {
			Serializer: r
		})
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/range.min", ["editor/serializer.min"], e)
}(function ()
{
	! function (e)
	{
		function t(e, t, n, i)
		{
			var o, r, s, a;
			if (e == t) return i - n;
			for (o = t; o && o.parentNode != e;) o = o.parentNode;
			if (o) return x(o) - n;
			for (o = e; o && o.parentNode != t;) o = o.parentNode;
			if (o) return i - x(o) - 1;
			for (r = w.commonAncestor(e, t), s = e; s && s.parentNode != r;) s = s.parentNode;
			for (s || (s = r), a = t; a && a.parentNode != r;) a = a.parentNode;
			return a || (a = r), s == a ? 0 : x(a) - x(s)
		}

		function n(e, n)
		{
			function i(e)
			{
				try {
					return t(e.startContainer, e.endContainer, e.startOffset, e.endOffset) < 0
				} catch (n) {
					return !0
				}
			}
			i(e) && (n ? (e.commonAncestorContainer = e.endContainer = e.startContainer, e.endOffset = e.startOffset) : (e.commonAncestorContainer = e.startContainer = e.endContainer, e.startOffset = e.endOffset), e.collapsed = !0)
		}

		function i(e)
		{
			e.collapsed = e.startContainer == e.endContainer && e.startOffset == e.endOffset;
			for (var t = e.startContainer; t && t != e.endContainer && !w.isAncestorOf(t, e.endContainer) ;) t = t.parentNode;
			e.commonAncestorContainer = t
		}

		function o(e)
		{
			var t = e.duplicate(),
                n = e.duplicate();
			return t.collapse(!0), n.collapse(!1), w.commonAncestor(e.parentElement(), t.parentElement(), n.parentElement())
		}

		function r(e, t, n)
		{
			var i, o = t[n ? "startContainer" : "endContainer"],
                r = t[n ? "startOffset" : "endOffset"],
                s = 0,
                a = C(o),
                l = a ? o : o.childNodes[r] || null,
                d = a ? o.parentNode : o,
                c = t.ownerDocument,
                u = c.body.createTextRange();
			3 != o.nodeType && 4 != o.nodeType || (s = r), d || (d = c.body), "img" == d.nodeName.toLowerCase() ? (u.moveToElementText(d), u.collapse(!1), e.setEndPoint(n ? "StartToStart" : "EndToStart", u)) : (i = d.insertBefore(w.create(c, "a"), l), u.moveToElementText(i), w.remove(i), u[n ? "moveStart" : "moveEnd"]("character", s), u.collapse(!1), e.setEndPoint(n ? "StartToStart" : "EndToStart", u))
		}

		function s(e, t, n, i)
		{
			var o, r, s, a, l, d, c, u = w.create(t.ownerDocument, "a"),
                f = e.duplicate(),
                p = i ? "StartToStart" : "StartToEnd",
                m = !1;
			u.innerHTML = "\ufeff", f.collapse(i), r = f.parentElement(), w.isAncestorOrSelf(n, r) || (r = n);
			do m ? r.insertBefore(u, u.previousSibling) : (r.appendChild(u), m = !0), f.moveToElementText(u); while ((o = f.compareEndPoints(p, e)) > 0 && u.previousSibling);
			s = u.nextSibling, o == -1 && C(s) ? (f.setEndPoint(i ? "EndToStart" : "EndToEnd", e), w.remove(u), d = [s, f.text.length]) : (a = !i && u.previousSibling, l = i && u.nextSibling, C(l) ? d = [l, 0] : C(a) ? d = [a, a.length] : (c = x(u), d = r.nextSibling && c == r.childNodes.length - 1 ? [r.nextSibling, 0] : [r, c]), w.remove(u)), t[i ? "setStart" : "setEnd"].apply(t, d)
		}
		var a, l, d, c, u, f, p, m, h, g = window.kendo,
            b = g.Class,
            v = e.extend,
            k = g.ui.editor,
            y = g.support.browser,
            w = k.Dom,
            x = w.findNodeIndex,
            C = w.isDataNode,
            T = w.findClosestAncestor,
            _ = w.getNodeLength,
            N = w.normalize,
            S = {
            	selectionFromWindow: function (e)
            	{
            		return "getSelection" in e ? e.getSelection() : new l(e.document)
            	},
            	selectionFromRange: function (e)
            	{
            		var t = h.documentFromRange(e);
            		return S.selectionFromDocument(t)
            	},
            	selectionFromDocument: function (e)
            	{
            		return S.selectionFromWindow(w.windowFromDocument(e))
            	}
            },
            z = b.extend({
            	init: function (t)
            	{
            		e.extend(this, {
            			ownerDocument: t,
            			startContainer: t,
            			endContainer: t,
            			commonAncestorContainer: t,
            			startOffset: 0,
            			endOffset: 0,
            			collapsed: !0
            		})
            	},
            	setStart: function (e, t)
            	{
            		this.startContainer = e, this.startOffset = t, i(this), n(this, !0)
            	},
            	setEnd: function (e, t)
            	{
            		this.endContainer = e, this.endOffset = t, i(this), n(this, !1)
            	},
            	setStartBefore: function (e)
            	{
            		this.setStart(e.parentNode, x(e))
            	},
            	setStartAfter: function (e)
            	{
            		this.setStart(e.parentNode, x(e) + 1)
            	},
            	setEndBefore: function (e)
            	{
            		this.setEnd(e.parentNode, x(e))
            	},
            	setEndAfter: function (e)
            	{
            		this.setEnd(e.parentNode, x(e) + 1)
            	},
            	selectNode: function (e)
            	{
            		this.setStartBefore(e), this.setEndAfter(e)
            	},
            	selectNodeContents: function (e)
            	{
            		this.setStart(e, 0), this.setEnd(e, e[1 === e.nodeType ? "childNodes" : "nodeValue"].length)
            	},
            	collapse: function (e)
            	{
            		var t = this;
            		e ? t.setEnd(t.startContainer, t.startOffset) : t.setStart(t.endContainer, t.endOffset)
            	},
            	deleteContents: function ()
            	{
            		var e = this,
                        t = e.cloneRange();
            		e.startContainer != e.commonAncestorContainer && e.setStartAfter(T(e.commonAncestorContainer, e.startContainer)), e.collapse(!0),
                        function n(e)
                        {
                        	for (; e.next() ;) e.hasPartialSubtree() ? n(e.getSubtreeIterator()) : e.remove()
                        }(new a(t))
            	},
            	cloneContents: function ()
            	{
            		var e = h.documentFromRange(this);
            		return function t(n)
            		{
            			for (var i, o = e.createDocumentFragment() ; i = n.next() ;) i = i.cloneNode(!n.hasPartialSubtree()), n.hasPartialSubtree() && i.appendChild(t(n.getSubtreeIterator())), o.appendChild(i);
            			return o
            		}(new a(this))
            	},
            	extractContents: function ()
            	{
            		var e, t = this,
                        n = t.cloneRange();
            		return t.startContainer != t.commonAncestorContainer && t.setStartAfter(T(t.commonAncestorContainer, t.startContainer)), t.collapse(!0), e = h.documentFromRange(t),
                        function i(n)
                        {
                        	for (var o, r = e.createDocumentFragment() ; o = n.next() ;) n.hasPartialSubtree() ? (o = o.cloneNode(!1), o.appendChild(i(n.getSubtreeIterator()))) : n.remove(t.originalRange), r.appendChild(o);
                        	return r
                        }(new a(n))
            	},
            	insertNode: function (e)
            	{
            		var t = this;
            		C(t.startContainer) ? (t.startOffset != t.startContainer.nodeValue.length && w.splitDataNode(t.startContainer, t.startOffset), w.insertAfter(e, t.startContainer)) : w.insertAt(t.startContainer, e, t.startOffset), t.setStart(t.startContainer, t.startOffset)
            	},
            	cloneRange: function ()
            	{
            		return e.extend(new z(this.ownerDocument), {
            			startContainer: this.startContainer,
            			endContainer: this.endContainer,
            			commonAncestorContainer: this.commonAncestorContainer,
            			startOffset: this.startOffset,
            			endOffset: this.endOffset,
            			collapsed: this.collapsed,
            			originalRange: this
            		})
            	},
            	toString: function ()
            	{
            		var e = this.startContainer.nodeName,
                        t = this.endContainer.nodeName;
            		return ("#text" == e ? this.startContainer.nodeValue : e) + "(" + this.startOffset + ") : " + ("#text" == t ? this.endContainer.nodeValue : t) + "(" + this.endOffset + ")"
            	}
            });
		z.fromNode = function (e)
		{
			return new z(e.ownerDocument)
		}, a = b.extend({
			init: function (t)
			{
				if (e.extend(this, {
					range: t,
					_current: null,
					_next: null,
					_end: null
				}), !t.collapsed) {
					var n = t.commonAncestorContainer;
					this._next = t.startContainer != n || C(t.startContainer) ? T(n, t.startContainer) : t.startContainer.childNodes[t.startOffset], this._end = t.endContainer != n || C(t.endContainer) ? T(n, t.endContainer).nextSibling : t.endContainer.childNodes[t.endOffset]
				}
			},
			hasNext: function ()
			{
				return !!this._next
			},
			next: function ()
			{
				var e = this,
                    t = e._current = e._next;
				return e._next = e._current && e._current.nextSibling != e._end ? e._current.nextSibling : null, C(e._current) && (e.range.endContainer == e._current && (t = t.cloneNode(!0), t.deleteData(e.range.endOffset, t.length - e.range.endOffset)), e.range.startContainer == e._current && (t = t.cloneNode(!0), t.deleteData(0, e.range.startOffset))), t
			},
			traverse: function (e)
			{
				function t()
				{
					return i._current = i._next, i._next = i._current && i._current.nextSibling != i._end ? i._current.nextSibling : null, i._current
				}
				for (var n, i = this; n = t() ;) i.hasPartialSubtree() ? i.getSubtreeIterator().traverse(e) : e(n);
				return n
			},
			remove: function (e)
			{
				var t, n, i, o, r, s = this,
                    a = s.range.startContainer == s._current,
                    l = s.range.endContainer == s._current;
				C(s._current) && (a || l) ? (t = a ? s.range.startOffset : 0, n = l ? s.range.endOffset : s._current.length, i = n - t, e && (a || l) && (s._current == e.startContainer && t <= e.startOffset && (e.startOffset -= i), s._current == e.endContainer && n <= e.endOffset && (e.endOffset -= i)), s._current.deleteData(t, i)) : (o = s._current.parentNode, !e || s.range.startContainer != o && s.range.endContainer != o || (r = x(s._current), o == e.startContainer && r <= e.startOffset && (e.startOffset -= 1), o == e.endContainer && r < e.endOffset && (e.endOffset -= 1)), w.remove(s._current))
			},
			hasPartialSubtree: function ()
			{
				return !C(this._current) && (w.isAncestorOrSelf(this._current, this.range.startContainer) || w.isAncestorOrSelf(this._current, this.range.endContainer))
			},
			getSubtreeIterator: function ()
			{
				return new a(this.getSubRange())
			},
			getSubRange: function ()
			{
				var e = this,
                    t = e.range.cloneRange();
				return t.selectNodeContents(e._current), w.isAncestorOrSelf(e._current, e.range.startContainer) && t.setStart(e.range.startContainer, e.range.startOffset), w.isAncestorOrSelf(e._current, e.range.endContainer) && t.setEnd(e.range.endContainer, e.range.endOffset), t
			}
		}), l = b.extend({
			init: function (e)
			{
				this.ownerDocument = e, this.rangeCount = 1
			},
			addRange: function (e)
			{
				var t = this.ownerDocument.body.createTextRange();
				r(t, e, !1), r(t, e, !0), t.select()
			},
			removeAllRanges: function ()
			{
				var e = this.ownerDocument.selection;
				"None" != e.type && e.empty()
			},
			getRangeAt: function ()
			{
				var e, t, n, i, r, a, l, d, c = new z(this.ownerDocument),
                    u = this.ownerDocument.selection;
				try {
					if (e = u.createRange(), t = e.item ? e.item(0) : e.parentElement(), t.ownerDocument != this.ownerDocument) return c
				} catch (f) {
					return c
				}
				if ("Control" == u.type) c.selectNode(e.item(0));
				else if (n = o(e), s(e, c, n, !0), s(e, c, n, !1), 9 == c.startContainer.nodeType && c.setStart(c.endContainer, c.startOffset), 9 == c.endContainer.nodeType && c.setEnd(c.startContainer, c.endOffset), 0 === e.compareEndPoints("StartToEnd", e) && c.collapse(!1), i = c.startContainer, r = c.endContainer, a = this.ownerDocument.body, !(c.collapsed || 0 !== c.startOffset || c.endOffset != _(c.endContainer) || i == r && C(i) && i.parentNode == a)) {
					for (l = !1, d = !1; 0 === x(i) && i == i.parentNode.firstChild && i != a;) i = i.parentNode, l = !0;
					for (; x(r) == _(r.parentNode) - 1 && r == r.parentNode.lastChild && r != a;) r = r.parentNode, d = !0;
					i == a && r == a && l && d && (c.setStart(i, 0), c.setEnd(r, _(a)))
				}
				return c
			}
		}), d = b.extend({
			init: function (e)
			{
				this.enumerate = function ()
				{
					function t(e)
					{
						if (w.is(e, "img") || 3 == e.nodeType && (!w.isEmptyspace(e) || "\ufeff" == e.nodeValue)) n.push(e);
						else
							for (e = e.firstChild; e;) t(e), e = e.nextSibling
					}
					var n = [];
					return new a(e).traverse(t), n
				}
			}
		}), c = a.extend({
			hasPartialSubtree: function ()
			{
				var e = k.Immutables && k.Immutables.immutable;
				return e && !e(this._current) && a.fn.hasPartialSubtree.call(this)
			},
			getSubtreeIterator: function ()
			{
				return new c(this.getSubRange())
			}
		}), u = b.extend({
			init: function (e)
			{
				this.enumerate = function ()
				{
					function t(e)
					{
						if (i && !i(e))
							if (w.is(e, "img") || 3 == e.nodeType && (!w.isEmptyspace(e) || "\ufeff" == e.nodeValue)) n.push(e);
							else
								for (e = e.firstChild; e;) t(e), e = e.nextSibling
					}
					var n = [],
                        i = k.Immutables && k.Immutables.immutable;
					return new c(e).traverse(t), n
				}
			}
		}), f = b.extend({
			init: function (e, t, n)
			{
				var i = this;
				i.range = e, i.rootNode = h.documentFromRange(e), i.body = t || i.getEditable(e), "body" != w.name(i.body) && (i.rootNode = i.body), i.startContainer = i.nodeToPath(e.startContainer), i.endContainer = i.nodeToPath(e.endContainer), i.startOffset = i.offset(e.startContainer, e.startOffset), i.endOffset = i.offset(e.endContainer, e.endOffset), i.immutables = n && n.immutables, i.immutables && (i.serializedImmutables = k.Immutables.removeImmutables(i.body)), i.html = i.body.innerHTML, i.immutables && !i.serializedImmutables.empty && k.Immutables.restoreImmutables(i.body, i.serializedImmutables)
			},
			index: function (e)
			{
				for (var t, n = 0, i = e.nodeType; e = e.previousSibling;) t = e.nodeType, 3 == t && i == t || n++, i = t;
				return n
			},
			getEditable: function (e)
			{
				for (var t = e.commonAncestorContainer; t && (3 == t.nodeType || t.attributes && (!t.attributes.contentEditable || "false" == t.attributes.contentEditable.nodeValue.toLowerCase())) ;) t = t.parentNode;
				return t
			},
			restoreHtml: function ()
			{
				var e = this;
				e.body.innerHTML = e.html, e.immutables && !e.serializedImmutables.empty && k.Immutables.restoreImmutables(e.body, e.serializedImmutables)
			},
			offset: function (e, t)
			{
				if (3 == e.nodeType)
					for (;
                        (e = e.previousSibling) && 3 == e.nodeType;) t += e.nodeValue.length;
				return t
			},
			nodeToPath: function (e)
			{
				for (var t = []; e != this.rootNode;) t.push(this.index(e)), e = e.parentNode;
				return t
			},
			toRangePoint: function (e, t, n, i)
			{
				for (var o = this.rootNode, r = n.length, s = i; r--;) o = o.childNodes[n[r]];
				for (; o && 3 == o.nodeType && o.nodeValue.length < s;) s -= o.nodeValue.length, o = o.nextSibling;
				o && s >= 0 && e[t ? "setStart" : "setEnd"](o, s)
			},
			toRange: function ()
			{
				var e = this,
                    t = e.range.cloneRange();
				return e.toRangePoint(t, !0, e.startContainer, e.startOffset), e.toRangePoint(t, !1, e.endContainer, e.endOffset), t
			}
		}), p = b.extend({
			init: function ()
			{
				this.caret = null
			},
			addCaret: function (e)
			{
				var t = this,
                    n = t.caret = w.create(h.documentFromRange(e), "span", {
                    	className: "k-marker"
                    });
				return e.insertNode(n), w.stripBomNode(n.previousSibling), w.stripBomNode(n.nextSibling), e.selectNode(n), n
			},
			removeCaret: function (e)
			{
				var t, n, i, o, r = this,
                    s = r.caret.previousSibling,
                    a = 0;
				s && (a = C(s) ? s.nodeValue.length : x(s)), t = r.caret.parentNode, n = s ? x(s) : 0, w.remove(r.caret), N(t), i = t.childNodes[n], C(i) ? e.setStart(i, a) : i ? (o = w.lastTextNode(i), o ? e.setStart(o, o.nodeValue.length) : e[s ? "setStartAfter" : "setStartBefore"](i)) : (y.msie || t.innerHTML || (t.innerHTML = '<br _moz_dirty="" />'), e.selectNodeContents(t)), e.collapse(!0)
			},
			add: function (e, t)
			{
				var n, i, o = this,
                    r = e.collapsed && !h.isExpandable(e),
                    s = h.documentFromRange(e);
				return t && e.collapsed && (o.addCaret(e), e = h.expand(e)), n = e.cloneRange(), n.collapse(!1), o.end = w.create(s, "span", {
					className: "k-marker"
				}), n.insertNode(o.end), n = e.cloneRange(), n.collapse(!0), o.start = o.end.cloneNode(!0), n.insertNode(o.start), o._removeDeadMarkers(o.start, o.end), r && (i = s.createTextNode("\ufeff"), w.insertAfter(i.cloneNode(), o.start), w.insertBefore(i, o.end)), N(e.commonAncestorContainer), e.setStartBefore(o.start), e.setEndAfter(o.end), e
			},
			_removeDeadMarkers: function (e, t)
			{
				e.previousSibling && "\ufeff" == e.previousSibling.nodeValue && w.remove(e.previousSibling), t.nextSibling && "\ufeff" == t.nextSibling.nodeValue && w.remove(t.nextSibling)
			},
			_normalizedIndex: function (e)
			{
				for (var t = x(e), n = e; n.previousSibling;) 3 == n.nodeType && 3 == n.previousSibling.nodeType && t--, n = n.previousSibling;
				return t
			},
			remove: function (e)
			{
				var t, n, i, o, r, s, a, l, d, c, u, f = this,
                    p = f.start,
                    m = f.end;
				for (N(e.commonAncestorContainer) ; !p.nextSibling && p.parentNode;) p = p.parentNode;
				for (; !m.previousSibling && m.parentNode;) m = m.parentNode;
				if (t = p.previousSibling && 3 == p.previousSibling.nodeType && p.nextSibling && 3 == p.nextSibling.nodeType, n = m.previousSibling && 3 == m.previousSibling.nodeType && m.nextSibling && 3 == m.nextSibling.nodeType, i = t && n, p = p.nextSibling, m = m.previousSibling, o = !1, r = !1, p == f.end && (r = !!f.start.previousSibling, p = m = f.start.previousSibling || f.end.nextSibling, o = !0), w.remove(f.start), w.remove(f.end), !p || !m) return e.selectNodeContents(e.commonAncestorContainer), void e.collapse(!0);
				if (s = o ? C(p) ? p.nodeValue.length : p.childNodes.length : 0, a = C(m) ? m.nodeValue.length : m.childNodes.length, 3 == p.nodeType)
					for (; p.previousSibling && 3 == p.previousSibling.nodeType;) p = p.previousSibling, s += p.nodeValue.length;
				if (3 == m.nodeType)
					for (; m.previousSibling && 3 == m.previousSibling.nodeType;) m = m.previousSibling, a += m.nodeValue.length;
				l = p.parentNode, d = m.parentNode, c = this._normalizedIndex(p), u = this._normalizedIndex(m), N(l), 3 == p.nodeType && (p = l.childNodes[c]), N(d), 3 == m.nodeType && (m = d.childNodes[u]), o ? (3 == p.nodeType ? e.setStart(p, s) : e[r ? "setStartAfter" : "setStartBefore"](p), e.collapse(!0)) : (3 == p.nodeType ? e.setStart(p, s) : e.setStartBefore(p), 3 == m.nodeType ? e.setEnd(m, a) : e.setEndAfter(m)), f.caret && f.removeCaret(e)
			}
		}), m = /[\u0009-\u000d]|\u0020|\u00a0|\ufeff|\.|,|;|:|!|\(|\)|\?/, h = {
			nodes: function (e)
			{
				var t = h.textNodes(e);
				return t.length || (e.selectNodeContents(e.commonAncestorContainer), t = h.textNodes(e), t.length || (t = w.significantChildNodes(e.commonAncestorContainer))), t
			},
			textNodes: function (e)
			{
				return new d(e).enumerate()
			},
			editableTextNodes: function (e)
			{
				var t = [],
                    n = k.Immutables && k.Immutables.immutableParent;
				return n && !n(e.commonAncestorContainer) && (t = new u(e).enumerate()), t
			},
			documentFromRange: function (e)
			{
				var t = e.startContainer;
				return 9 == t.nodeType ? t : t.ownerDocument
			},
			createRange: function (e)
			{
				return y.msie && y.version < 9 ? new z(e) : e.createRange()
			},
			selectRange: function (e)
			{
				var t, n = h.image(e);
				n && (e.setStartAfter(n), e.setEndAfter(n)), t = S.selectionFromRange(e), t.removeAllRanges(), t.addRange(e)
			},
			stringify: function (e)
			{
				return g.format("{0}:{1} - {2}:{3}", w.name(e.startContainer), e.startOffset, w.name(e.endContainer), e.endOffset)
			},
			split: function (e, t, n)
			{
				function i(i)
				{
					var o, r = e.cloneRange();
					r.collapse(i), r[i ? "setStartBefore" : "setEndAfter"](t), o = r.extractContents(), n && (o = w.trim(o)), w[i ? "insertBefore" : "insertAfter"](o, t)
				}
				i(!0), i(!1)
			},
			mapAll: function (t, n)
			{
				var i = [];
				return new a(t).traverse(function (t)
				{
					var o = n(t);
					o && e.inArray(o, i) < 0 && i.push(o)
				}), i
			},
			getAll: function (e, t)
			{
				var n = t;
				return "string" == typeof t && (t = function (e)
				{
					return w.is(e, n)
				}), h.mapAll(e, function (e)
				{
					if (t(e)) return e
				})
			},
			getMarkers: function (e)
			{
				return h.getAll(e, function (e)
				{
					return "k-marker" == e.className
				})
			},
			image: function (e)
			{
				var t = h.getAll(e, "img");
				if (1 == t.length) return t[0]
			},
			isStartOf: function (e, t)
			{
				var n, i, o;
				if (0 !== e.startOffset) return !1;
				for (n = e.cloneRange() ; 0 === n.startOffset && n.startContainer != t;) {
					for (i = w.findNodeIndex(n.startContainer), o = n.startContainer.parentNode; i > 0 && o[i - 1] && w.insignificant(o[i - 1]) ;) i--;
					n.setStart(o, i)
				}
				return 0 === n.startOffset && n.startContainer == t
			},
			isEndOf: function (e, t)
			{
				function n(e)
				{
					w.insignificant(e) || o.push(e)
				}
				var i, o, r = e.cloneRange();
				return r.collapse(!1), i = r.startContainer, w.isDataNode(i) && r.startOffset == w.getNodeLength(i) && (r.setStart(i.parentNode, w.findNodeIndex(i) + 1), r.collapse(!0)), r.setEnd(t, w.getNodeLength(t)), o = [], new a(r).traverse(n), !o.length
			},
			wrapSelectedElements: function (e)
			{
				function t(e, t)
				{
					var n, i = w.getNodeLength(t);
					if (e == i) return !0;
					for (n = e; n < i; n++)
						if (!w.insignificant(t.childNodes[n])) return !1;
					return !0
				}
				for (var n = w.editableParent(e.startContainer), i = w.editableParent(e.endContainer) ; 0 === e.startOffset && e.startContainer != n;) e.setStart(e.startContainer.parentNode, w.findNodeIndex(e.startContainer));
				for (; t(e.endOffset, e.endContainer) && e.endContainer != i;) e.setEnd(e.endContainer.parentNode, w.findNodeIndex(e.endContainer) + 1);
				return e
			},
			expand: function (e)
			{
				var t, n, i, o, r = e.cloneRange(),
                    s = r.startContainer.childNodes[0 === r.startOffset ? 0 : r.startOffset - 1],
                    a = r.endContainer.childNodes[r.endOffset];
				return C(s) && C(a) ? (t = s.nodeValue, n = a.nodeValue, t && n ? (i = t.split("").reverse().join("").search(m), o = n.search(m), i && o ? (o = o == -1 ? n.length : o, i = i == -1 ? 0 : t.length - i, r.setStart(s, i), r.setEnd(a, o), r) : r) : r) : r
			},
			isExpandable: function (e)
			{
				var t, n, i, o, r, s, a = e.startContainer,
                    l = h.documentFromRange(e);
				return a != l && a != l.body && (t = e.cloneRange(), !!(n = a.nodeValue) && (i = n.substring(0, t.startOffset), o = n.substring(t.startOffset), r = 0, s = 0, i && (r = i.split("").reverse().join("").search(m)), o && (s = o.search(m)), r && s))
			}
		}, v(k, {
			SelectionUtils: S,
			W3CRange: z,
			RangeIterator: a,
			W3CSelection: l,
			RangeEnumerator: d,
			RestorePoint: f,
			Marker: p,
			RangeUtils: h
		})
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/system.min", ["editor/range.min"], e)
}(function ()
{
	! function (e)
	{
		function t(e, t)
		{
			var n = e.selectionRestorePoint = new p(e.getRange(), e.body),
                i = new w(t, n);
			return i.editor = e, e.undoRedoStack.push(i), n
		}

		function n(e, t)
		{
			return t.startContainer === e && t.endContainer === e && 0 === t.startOffset && t.endOffset == e.childNodes.length;
		}

		function i(e, t, n)
		{
			for (var i = e ? e[t] : null; i && !n(i) ;) i = i[t];
			return i
		}
		var o = window.kendo,
            r = o.Class,
            s = o.ui.editor,
            a = s.EditorUtils,
            l = s.RangeUtils,
            d = a.registerTool,
            c = s.Dom,
            u = s.Tool,
            f = s.ToolTemplate,
            p = s.RestorePoint,
            m = s.Marker,
            h = o.support.browser,
            g = '<br class="k-br">',
            b = e.extend,
            v = c.nodeTypes,
            k = "previousSibling",
            y = r.extend({
            	init: function (e)
            	{
            		this.options = e, this.restorePoint = new p(e.range, e.body, {
            			immutables: e.immutables
            		}), this.marker = new m, this.formatter = e.formatter
            	},
            	getRange: function ()
            	{
            		return this.restorePoint.toRange()
            	},
            	lockRange: function (e)
            	{
            		return this.marker.add(this.getRange(), e)
            	},
            	releaseRange: function (e)
            	{
            		this.marker.remove(e), this.editor.selectRange(e)
            	},
            	undo: function ()
            	{
            		var e = this.restorePoint;
            		e.restoreHtml(), this.editor.selectRange(e.toRange())
            	},
            	redo: function ()
            	{
            		this.exec()
            	},
            	createDialog: function (t, n)
            	{
            		var i = this.editor;
            		return e(t).appendTo(document.body).kendoWindow(b({}, i.options.dialogOptions, n)).closest(".k-window").toggleClass("k-rtl", o.support.isRtl(i.wrapper)).end()
            	},
            	exec: function ()
            	{
            		var e = this.lockRange(!0);
            		this.formatter.editor = this.editor, this.formatter.toggle(e), this.releaseRange(e)
            	},
            	immutables: function ()
            	{
            		return this.editor && this.editor.options.immutables
            	},
            	expandImmutablesIn: function (e)
            	{
            		this.immutables() && (o.ui.editor.Immutables.expandImmutablesIn(e), this.restorePoint = new p(e, this.editor.body))
            	}
            }),
            w = r.extend({
            	init: function (e, t)
            	{
            		this.body = e.body, this.startRestorePoint = e, this.endRestorePoint = t
            	},
            	redo: function ()
            	{
            		this.body.innerHTML = this.endRestorePoint.html, this.editor.selectRange(this.endRestorePoint.toRange())
            	},
            	undo: function ()
            	{
            		this.body.innerHTML = this.startRestorePoint.html, this.editor.selectRange(this.startRestorePoint.toRange())
            	}
            }),
            x = y.extend({
            	init: function (e)
            	{
            		y.fn.init.call(this, e), this.managesUndoRedo = !0
            	},
            	exec: function ()
            	{
            		var e, t = this.editor,
                        n = this.options,
                        i = n.range,
                        o = t.body,
                        r = new p(i, o),
                        s = n.html || n.value || "";
            		t.selectRange(i), t.clipboard.paste(s, n), n.postProcess && n.postProcess(t, t.getRange()), e = new w(r, new p(t.getRange(), o)), e.editor = t, t.undoRedoStack.push(e), t.focus()
            	}
            }),
            C = u.extend({
            	initialize: function (e, t)
            	{
            		var n = t.editor,
                        i = this.options,
                        o = i.items ? i.items : n.options.insertHtml;
            		this._selectBox = new s.SelectBox(e, {
            			dataSource: o,
            			dataTextField: "text",
            			dataValueField: "value",
            			change: function ()
            			{
            				u.exec(n, "insertHtml", this.value())
            			},
            			title: n.options.messages.insertHtml,
            			highlightFirst: !1
            		})
            	},
            	command: function (e)
            	{
            		return new x(e)
            	},
            	update: function (e)
            	{
            		var t = e.data("kendoSelectBox") || e.find("select").data("kendoSelectBox");
            		t.close(), t.value(t.options.title)
            	}
            }),
            T = "td,th,caption",
            _ = "table,tbody,thead,tfoot,tr",
            N = _ + "," + T,
            S = function (t)
            {
            	return !t.collapsed && e(t.commonAncestorContainer).is(_)
            },
            z = r.extend({
            	remove: function (t)
            	{
            		var n, i, o, r, s, a, d, u = this,
                        f = new m;
            		f.add(t, !1), n = l.getAll(t, function (t)
            		{
            			return e(t).is(N)
            		}), i = l.documentFromRange(t), o = f.start, r = f.end, s = T.split(","), a = c.parentOfType(o, s), d = c.parentOfType(r, s), u._removeContent(o, a, !0), u._removeContent(r, d, !1), e(n).each(function (t, n)
            		{
            			n = e(n), (n.is(T) ? n : n.find(T)).each(function (e, t)
            			{
            				t.innerHTML = "&#65279;"
            			})
            		}), a && !o.previousSibling && c.insertBefore(i.createTextNode("\ufeff"), o), d && !r.nextSibling && c.insertAfter(i.createTextNode("\ufeff"), r), a ? t.setStartBefore(o) : n[0] && (a = e(n[0]), a = a.is(T) ? a : a.find(T).first(), a.length && t.setStart(a.get(0), 0)), t.collapse(!0), c.remove(o), c.remove(r)
            	},
            	_removeContent: function (t, n, i)
            	{
            		if (n) {
            			var o, r = i ? "nextSibling" : "previousSibling",
                            s = function (t)
                            {
                            	for (; t && !t[r];) t = t.parentNode;
                            	return t && e.contains(n, t) ? t[r] : null
                            };
            			for (t = s(t) ; t;) o = s(t), c.remove(t), t = o
            		}
            	}
            }),
            R = r.extend({
            	init: function (e)
            	{
            		this.editor = e
            	},
            	keydown: function (i)
            	{
            		var o, r, a, l, d = this,
                        c = d.editor,
                        u = c.keyboard,
                        f = u.isTypingKey(i),
                        m = b(e.Event(), i);
            		return d.editor.trigger("keydown", m), m.isDefaultPrevented() ? (i.preventDefault(), !0) : !(m.isDefaultPrevented() || !f || u.isTypingInProgress()) && (o = c.getRange(), r = c.body, d.startRestorePoint = new p(o, r), S(o) && (a = new z(c), a.remove(o), c.selectRange(o)), h.webkit && !o.collapsed && n(r, o) && (r.innerHTML = ""), c.immutables && s.Immutables.immutablesContext(o) && (l = new s.BackspaceHandler(c), l.deleteSelection(o)), u.startTyping(function ()
            		{
            			d.endRestorePoint = t(c, d.startRestorePoint)
            		}), !0)
            	},
            	keyup: function (e)
            	{
            		var t = this.editor.keyboard;
            		return this.editor.trigger("keyup", e), !!t.isTypingInProgress() && (t.endTyping(), !0)
            	}
            }),
            A = r.extend({
            	init: function (e)
            	{
            		this.editor = e
            	},
            	_addCaret: function (e)
            	{
            		var t = c.create(this.editor.document, "a");
            		return c.insertAt(e, t, 0), c.stripBomNode(t.previousSibling), c.stripBomNode(t.nextSibling), t
            	},
            	_restoreCaret: function (e)
            	{
            		var t = this.editor.createRange();
            		t.setStartAfter(e), t.collapse(!0), this.editor.selectRange(t), c.remove(e)
            	},
            	_handleDelete: function (e)
            	{
            		var t, n, i = e.endContainer,
                        o = c.closestEditableOfType(i, c.blockElements);
            		return !(!o || !s.RangeUtils.isEndOf(e, o)) && (t = c.next(o), !(!t || "p" != c.name(t)) && (n = this._addCaret(t), this._merge(o, t), this._restoreCaret(n), !0))
            	},
            	_cleanBomBefore: function (e)
            	{
            		for (var t = e.startOffset, n = e.startContainer, i = n.nodeValue, o = 0; t - o >= 0 && "\ufeff" == i[t - o - 1];) o++;
            		o > 0 && (n.deleteData(t - o, o), e.setStart(n, Math.max(0, t - o)), e.collapse(!0), this.editor.selectRange(e))
            	},
            	_handleBackspace: function (e)
            	{
            		var t, n, o, r, a = e.startContainer,
                        l = c.closestEditableOfType(a, ["li"]),
                        d = c.closestEditableOfType(a, "p,h1,h2,h3,h4,h5,h6".split(","));
            		return c.isDataNode(a) && this._cleanBomBefore(e), t = i(d, k, function (e)
            		{
            			return !c.htmlIndentSpace(e)
            		}), e.collapsed && e.startOffset !== e.endOffset && e.startOffset < 0 && (e.startOffset = 0, e.endOffset = 0, this.editor.selectRange(e)), d && t && s.RangeUtils.isStartOf(e, d) ? (n = this._addCaret(d), this._merge(t, d), this._restoreCaret(n), !0) : !(!l || !s.RangeUtils.isStartOf(e, l)) && (o = l.firstChild, o || (l.innerHTML = s.emptyElementContent, o = l.firstChild), r = new s.ListFormatter(c.name(l.parentNode), "p"), e.selectNodeContents(l), r.toggle(e), c.insignificant(o) ? e.setStartBefore(o) : e.setStart(o, 0), this.editor.selectRange(e), !0)
            	},
            	_handleSelection: function (t)
            	{
            		var n, i, o, r, a = t.commonAncestorContainer,
                        l = c.closest(a, "table"),
                        d = s.emptyElementContent,
                        u = this.editor;
            		return S(t) ? (n = new z(u), n.remove(t), u.selectRange(t), !0) : (i = new m, i.add(t, !1), u.immutables && this._handleImmutables(i), t.setStartAfter(i.start), t.setEndBefore(i.end), o = t.startContainer, r = t.endContainer, t.deleteContents(), l && "" === e(l).text() && (t.selectNode(l), t.deleteContents()), a = t.commonAncestorContainer, "p" === c.name(a) && "" === a.innerHTML && (a.innerHTML = d, t.setStart(a, 0)), this._join(o, r), c.insertAfter(u.document.createTextNode("\ufeff"), i.start), i.remove(t), o = t.startContainer, "tr" == c.name(o) && (o = o.childNodes[Math.max(0, t.startOffset - 1)], t.setStart(o, c.getNodeLength(o))), t.collapse(!0), u.selectRange(t), !0)
            	},
            	_handleImmutables: function (e)
            	{
            		var t = s.Immutables.immutableParent,
                        n = t(e.start),
                        i = t(e.start);
            		n && c.insertBefore(e.start, n), i && c.insertAfter(e.end, i), n && c.remove(n), i && i.parentNode && c.remove(i)
            	},
            	_root: function (e)
            	{
            		for (; e && e.parentNode && "body" != c.name(e.parentNode) ;) e = e.parentNode;
            		return e
            	},
            	_join: function (e, t)
            	{
            		e = this._root(e), t = this._root(t), e != t && c.is(t, "p") && this._merge(e, t)
            	},
            	_merge: function (e, t)
            	{
            		for (c.removeTrailingBreak(e) ; e && t.firstChild;) 1 == e.nodeType ? (e = c.list(e) ? e.children[e.children.length - 1] : e, e && e.appendChild(t.firstChild)) : e.nodeType === v.TEXT_NODE ? this._mergeWithTextNode(e, t.firstChild) : e.parentNode.appendChild(t.firstChild);
            		c.remove(t)
            	},
            	_mergeWithTextNode: function (e, t)
            	{
            		e && e.nodeType === v.TEXT_NODE && (e.nextSibling && this._isCaret(e.nextSibling) ? c.insertAfter(t, e.nextSibling) : c.insertAfter(t, e))
            	},
            	_isCaret: function (t)
            	{
            		return e(t).is("a")
            	},
            	keydown: function (e)
            	{
            		var n, i, r = this.editor,
                        s = r.getRange(),
                        a = e.keyCode,
                        l = o.keys,
                        d = a === l.BACKSPACE,
                        c = a == l.DELETE;
            		r.immutables && r.immutables.keydown(e, s) || (!d && !c || s.collapsed ? d ? n = "_handleBackspace" : c && (n = "_handleDelete") : n = "_handleSelection", n && (i = new p(s, r.body), this[n](s) && (e.preventDefault(), t(r, i))))
            	},
            	deleteSelection: function (e)
            	{
            		this._handleSelection(e)
            	},
            	keyup: e.noop
            }),
            E = r.extend({
            	init: function (e)
            	{
            		this.editor = e, this.systemCommandIsInProgress = !1
            	},
            	createUndoCommand: function ()
            	{
            		this.startRestorePoint = this.endRestorePoint = t(this.editor, this.startRestorePoint)
            	},
            	changed: function ()
            	{
            		return !!this.startRestorePoint && this.startRestorePoint.html != this.editor.body.innerHTML
            	},
            	keydown: function (e)
            	{
            		var t = this,
                        n = t.editor,
                        i = n.keyboard;
            		return i.isModifierKey(e) ? (i.isTypingInProgress() && i.endTyping(!0), t.startRestorePoint = new p(n.getRange(), n.body), !0) : !!i.isSystem(e) && (t.systemCommandIsInProgress = !0, t.changed() && (t.systemCommandIsInProgress = !1, t.createUndoCommand()), !0)
            	},
            	keyup: function ()
            	{
            		var e = this;
            		return !(!e.systemCommandIsInProgress || !e.changed()) && (e.systemCommandIsInProgress = !1, e.createUndoCommand(), !0)
            	}
            }),
            D = r.extend({
            	init: function (e)
            	{
            		this.editor = e
            	},
            	keydown: function (e)
            	{
            		!h.webkit || e.isDefaultPrevented() || !e.ctrlKey || 65 != e.keyCode || e.altKey || e.shiftKey || (this.editor.options.immutables && this._toSelectableImmutables(), this._selectEditorBody())
            	},
            	_selectEditorBody: function ()
            	{
            		var e = this.editor,
                        t = e.getRange();
            		t.selectNodeContents(e.body), e.selectRange(t)
            	},
            	_toSelectableImmutables: function ()
            	{
            		for (var t = this.editor, n = t.body, i = s.Immutables.immutable, o = c.emptyTextNode, r = n.firstChild, a = n.lastChild; o(r) ;) r = r.nextSibling;
            		for (; o(a) ;) a = a.previousSibling;
            		r && i(r) && e(g).prependTo(n), a && i(a) && e(g).appendTo(n)
            	},
            	keyup: e.noop
            }),
            P = r.extend({
            	init: function (e)
            	{
            		this.handlers = e, this.typingInProgress = !1
            	},
            	isCharacter: function (e)
            	{
            		return e >= 48 && e <= 90 || e >= 96 && e <= 111 || e >= 186 && e <= 192 || e >= 219 && e <= 222 || 229 == e
            	},
            	toolFromShortcut: function (t, n)
            	{
            		var i, o, r = String.fromCharCode(n.keyCode);
            		for (i in t)
            			if (o = e.extend({
            				ctrl: !1,
            				alt: !1,
            				shift: !1
            			}, t[i].options), (o.key == r || o.key == n.keyCode) && o.ctrl == n.ctrlKey && o.alt == n.altKey && o.shift == n.shiftKey) return i
            	},
            	toolsFromShortcut: function (t, n)
            	{
            		var i, o, r, s = String.fromCharCode(n.keyCode),
                        a = [],
                        l = function (e)
                        {
                        	return e == s || e == n.keyCode
                        };
            		for (i in t) o = e.extend({
            			ctrl: !1,
            			alt: !1,
            			shift: !1
            		}, t[i].options), r = e.isArray(o.key) ? e.grep(o.key, l).length > 0 : l(o.key), r && o.ctrl == n.ctrlKey && o.alt == n.altKey && o.shift == n.shiftKey && a.push(t[i]);
            		return a
            	},
            	isTypingKey: function (e)
            	{
            		var t = e.keyCode;
            		return this.isCharacter(t) && !e.ctrlKey && !e.altKey || 32 == t || 13 == t || 8 == t || 46 == t && !e.shiftKey && !e.ctrlKey && !e.altKey
            	},
            	isModifierKey: function (e)
            	{
            		var t = e.keyCode;
            		return 17 == t && !e.shiftKey && !e.altKey || 16 == t && !e.ctrlKey && !e.altKey || 18 == t && !e.ctrlKey && !e.shiftKey
            	},
            	isSystem: function (e)
            	{
            		return 46 == e.keyCode && e.ctrlKey && !e.altKey && !e.shiftKey
            	},
            	startTyping: function (e)
            	{
            		this.onEndTyping = e, this.typingInProgress = !0
            	},
            	stopTyping: function ()
            	{
            		this.typingInProgress && this.onEndTyping && this.onEndTyping(), this.typingInProgress = !1
            	},
            	endTyping: function (t)
            	{
            		var n = this;
            		n.clearTimeout(), t ? n.stopTyping() : n.timeout = window.setTimeout(e.proxy(n.stopTyping, n), 1e3)
            	},
            	isTypingInProgress: function ()
            	{
            		return this.typingInProgress
            	},
            	clearTimeout: function ()
            	{
            		window.clearTimeout(this.timeout)
            	},
            	notify: function (e, t)
            	{
            		var n, i = this.handlers;
            		for (n = 0; n < i.length && !i[n][t](e) ; n++);
            	},
            	keydown: function (e)
            	{
            		this.notify(e, "keydown")
            	},
            	keyup: function (e)
            	{
            		this.notify(e, "keyup")
            	}
            }),
            I = r.extend({
            	init: function (e)
            	{
            		this.editor = e;
            		var t = e.options.pasteCleanup;
            		this.cleaners = [new B(t), new O(t), new F(t), new L(t), new W(t), new U(t), new $(t), new G(t)]
            	},
            	htmlToFragment: function (e)
            	{
            		var t = this.editor,
                        n = t.document,
                        i = c.create(n, "div"),
                        o = n.createDocumentFragment();
            		for (i.innerHTML = e; i.firstChild;) o.appendChild(i.firstChild);
            		return o
            	},
            	isBlock: function (e)
            	{
            		return /<(div|p|ul|ol|table|h[1-6])/i.test(e)
            	},
            	_startModification: function ()
            	{
            		var e, t, n = this.editor;
            		if (!this._inProgress) return this._inProgress = !0, e = n.getRange(), t = new p(e, n.body), c.persistScrollTop(n.document), {
            			range: e,
            			restorePoint: t
            		}
            	},
            	_endModification: function (e)
            	{
            		t(this.editor, e.restorePoint), this.editor._selectionChange(), this._inProgress = !1
            	},
            	_contentModification: function (e, t)
            	{
            		var n = this,
                        i = n.editor,
                        o = n._startModification();
            		o && (e.call(n, i, o.range), setTimeout(function ()
            		{
            			t.call(n, i, o.range), n._endModification(o)
            		}))
            	},
            	_removeBomNodes: function (e)
            	{
            		var t, n = s.RangeUtils.textNodes(e);
            		for (t = 0; t < n.length; t++) n[t].nodeValue = c.stripBom(n[t].nodeValue)
            	},
            	_onBeforeCopy: function (e)
            	{
            		var t = new m;
            		t.add(e), this._removeBomNodes(e), t.remove(e), this.editor.selectRange(e)
            	},
            	oncopy: function ()
            	{
            		this._onBeforeCopy(this.editor.getRange())
            	},
            	oncut: function ()
            	{
            		this._onBeforeCopy(this.editor.getRange()), this._contentModification(e.noop, e.noop)
            	},
            	_fileToDataURL: function (t)
            	{
            		var n = e.Deferred(),
                        i = new FileReader;
            		return t instanceof window.File || !t.getAsFile || (t = t.getAsFile()), i.onload = e.proxy(n.resolve, n), i.readAsDataURL(t), n.promise()
            	},
            	_triggerPaste: function (e, t)
            	{
            		var n = {
            			html: e || ""
            		};
            		n.html = n.html.replace(/\ufeff/g, ""), this.editor.trigger("paste", n), this.paste(n.html, t || {})
            	},
            	_handleImagePaste: function (t)
            	{
            		var n, i, o, r, s;
            		if ("FileReader" in window && !(h.msie && h.version > 10) && (n = t.clipboardData || t.originalEvent.clipboardData || window.clipboardData || {}, i = n.items || n.files, i && (o = e.grep(i, function (e)
            		{
                            return /^image\//i.test(e.type)
            		}), r = e.grep(i, function (e)
            		{
                            return /^text\/html/i.test(e.type)
            		}), !r.length && o.length && (s = this._startModification())))) return e.when.apply(e, e.map(o, this._fileToDataURL)).done(e.proxy(function ()
            		{
            			var t = Array.prototype.slice.call(arguments),
                            n = e.map(t, function (e)
                            {
                            	return '<img src="' + e.target.result + '" />'
                            }).join("");
            			this._triggerPaste(n), this._endModification(s)
            		}, this)), !0
            	},
            	onpaste: function (t)
            	{
            		return this._handleImagePaste(t) ? void t.preventDefault() : (this.expandImmutablesIn(), void this._contentModification(function (n, i)
            		{
            			var r, s, a, l = c.create(n.document, "div", {
            				className: "k-paste-container",
            				innerHTML: "\ufeff"
            			}),
                            d = o.support.browser,
                            u = n.body;
            			this._decoreateClipboardNode(l, u), u.appendChild(l), d.webkit && this._moveToCaretPosition(l, i), d.msie && d.version < 11 ? (t.preventDefault(), r = n.createRange(), r.selectNodeContents(l), n.selectRange(r), s = n.document.body.createTextRange(), s.moveToElementText(l), e(u).unbind("paste"), s.execCommand("Paste"), e(u).bind("paste", e.proxy(this.onpaste, this))) : (a = n.createRange(), a.selectNodeContents(l), n.selectRange(a)), i.deleteContents()
            		}, function (t, n)
            		{
            			var i, o = "";
            			t.selectRange(n), i = e(t.body).children(".k-paste-container"), i.each(function ()
            			{
            				var e = this.lastChild;
            				e && c.is(e, "br") && c.remove(e), o += this.innerHTML
            			}), i.remove(), this._triggerPaste(o, {
            				clean: !0
            			})
            		}))
            	},
            	_decoreateClipboardNode: function (t, n)
            	{
            		var i, o, r, s;
            		(h.msie || h.webkit) && (t = e(t), t.css({
            			borderWidth: "0px",
            			width: "0px",
            			height: "0px",
            			overflow: "hidden",
            			margin: "0",
            			padding: "0"
            		}), h.msie && (i = e(n.ownerDocument.documentElement), t.css({
            			fontVariant: "normal",
            			fontWeight: "normal",
            			lineSpacing: "normal",
            			lineHeight: "normal",
            			textDecoration: "none"
            		}), o = i.css("color"), o && t.css("color", o), r = i.css("fontFamily"), r && t.css("fontFamily", r), s = i.css("fontSize"), s && t.css("fontSize", s)))
            	},
            	_moveToCaretPosition: function (t, n)
            	{
            		var i = this,
                        o = i.editor.body,
                        r = c.offset(t, o),
                        s = i._caretOffset(n, o),
                        a = s.left - r.left,
                        l = s.top - r.top,
                        d = "translate(" + a + "px," + l + "px)";
            		e(t).css({
            			"-webkit-transform": d,
            			transform: d
            		})
            	},
            	_caretOffset: function (e, t)
            	{
            		var n, i, o, r, s, a, l = this.editor,
                        d = c.create(l.document, "span", {
                        	innerHTML: "\ufeff"
                        }),
                        u = e.startContainer;
            		return e.collapsed ? (i = c.isDataNode(u), i && (c.isBom(u) || 0 === e.startOffset) ? c.insertBefore(d, u) : i && e.startOffset === u.length ? c.insertAfter(d, u) : (e.insertNode(d), n = !0)) : (u = u === t ? u.childNodes[e.startOffset] : u, c.insertBefore(d, u)), o = c.offset(d, t), r = d.previousSibling, s = d.nextSibling, c.remove(d), n && c.isDataNode(r) && c.isDataNode(s) && !c.isBom(r) && !c.isBom(s) && (a = r.length, s.data = r.data + s.data, e.setStart(s, a), c.remove(r), e.collapse(!0), l.selectRange(e)), o
            	},
            	expandImmutablesIn: function (e)
            	{
            		var t, n, i, r = this.editor;
            		r && r.options.immutables && (t = r.body, e = e || r.getRange(), o.ui.editor.Immutables.expandImmutablesIn(e), e.startContainer === t && 0 === e.startOffset && (n = t.ownerDocument, i = n.createTextNode("\ufeff"), t.insertBefore(i, t.childNodes[0]), e.setStartBefore(i)), r.selectRange(e))
            	},
            	splittableParent: function (e, t)
            	{
            		var n, i;
            		if (e) return c.closestEditableOfType(t, ["p", "ul", "ol"]) || t.parentNode;
            		if (n = t.parentNode, i = t.ownerDocument.body, c.isInline(n))
            			for (; n.parentNode != i && !c.isBlock(n.parentNode) ;) n = n.parentNode;
            		return n
            	},
            	paste: function (t, n)
            	{
            		var i, o, r, a, l, d, u, f, p, h, g, v, k = this.editor;
            		if (this.expandImmutablesIn(), n = b({
            			clean: !1,
            			split: !0
            		}, n), !n.skipCleaners)
            			for (i = 0, o = this.cleaners.length; i < o; i++) this.cleaners[i].applicable(t) && (t = this.cleaners[i].clean(t));
            		if (n.clean && (t = t.replace(/(<br>(\s|&nbsp;)*)+(<\/?(div|p|li|col|t))/gi, "$3"), t = t.replace(/<(a|span)[^>]*><\/\1>/gi, "")), t = t.replace(/^<li/i, "<ul><li").replace(/li>$/g, "li></ul>"), r = this.isBlock(t), k.focus(), a = k.getRange(), a.deleteContents(), a.startContainer == k.document && a.selectNodeContents(k.body), l = new m, d = l.addCaret(a), u = this.splittableParent(r, d), f = !1, p = u != k.body && !c.is(u, "td"), n.split && p && (r || c.isInline(u)) && (a.selectNode(d), s.RangeUtils.split(a, u, !0), f = !0), h = this.htmlToFragment(t), h.firstChild && "k-paste-container" === h.firstChild.className) {
            			for (g = [], i = 0, o = h.childNodes.length; i < o; i++) g.push(h.childNodes[i].innerHTML);
            			h = this.htmlToFragment(g.join("<br />"))
            		}
            		if (e(h.childNodes).filter("table").addClass("k-table").end().find("table").addClass("k-table"), a.insertNode(h), u = this.splittableParent(r, d), f) {
            			for (; d.parentNode != u;) c.unwrap(d.parentNode);
            			c.unwrap(d.parentNode)
            		}
            		c.normalize(a.commonAncestorContainer), d.style.display = "inline", c.restoreScrollTop(k.document), c.scrollTo(d), l.removeCaret(a), v = a.commonAncestorContainer.parentNode, a.collapsed && "tbody" == c.name(v) && (a.setStartAfter(e(v).closest("table")[0]), a.collapse(!0)), k.selectRange(a)
            	}
            }),
            H = r.extend({
            	init: function (e)
            	{
            		this.options = e || {}, this.replacements = []
            	},
            	clean: function (e, t)
            	{
            		var n, i, o = this,
                        r = t || o.replacements;
            		for (n = 0, i = r.length; n < i; n += 2) e = e.replace(r[n], r[n + 1]);
            		return e
            	}
            }),
            B = H.extend({
            	init: function (e)
            	{
            		H.fn.init.call(this, e), this.replacements = [/<(\/?)script([^>]*)>/i, "<$1telerik:script$2>"]
            	},
            	applicable: function (e)
            	{
            		return !this.options.none && /<script[^>]*>/i.test(e)
            	}
            }),
            O = H.extend({
            	init: function (e)
            	{
            		H.fn.init.call(this, e);
            		var t = " ";
            		this.replacements = [/<span\s+class="Apple-tab-span"[^>]*>\s*<\/span>/gi, t, /\t/gi, t, /&nbsp;&nbsp; &nbsp;/gi, t]
            	},
            	applicable: function (e)
            	{
            		return /&nbsp;&nbsp; &nbsp;|class="?Apple-tab-span/i.test(e)
            	}
            }),
            F = H.extend({
            	init: function (e)
            	{
            		H.fn.init.call(this, e), this.junkReplacements = [/<\?xml[^>]*>/gi, "", /<!--(.|\n)*?-->/g, "", /&quot;/g, "'", /<o:p>&nbsp;<\/o:p>/gi, "&nbsp;", /<\/?(meta|link|style|o:|v:|x:)[^>]*>((?:.|\n)*?<\/(meta|link|style|o:|v:|x:)[^>]*>)?/gi, "", /<\/o>/g, ""], this.replacements = this.junkReplacements.concat([/(?:<br>&nbsp;[\s\r\n]+|<br>)*(<\/?(h[1-6]|hr|p|div|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|caption|address|pre|form|blockquote|dl|dt|dd|dir|fieldset)[^>]*>)(?:<br>&nbsp;[\s\r\n]+|<br>)*/g, "$1", /<br><br>/g, "<BR><BR>", /<br>(?!\n)/g, " ", /<table([^>]*)>(\s|&nbsp;)+<t/gi, "<table$1><t", /<tr[^>]*>(\s|&nbsp;)*<\/tr>/gi, "", /<tbody[^>]*>(\s|&nbsp;)*<\/tbody>/gi, "", /<table[^>]*>(\s|&nbsp;)*<\/table>/gi, "", /<BR><BR>/g, "<br>", /^\s*(&nbsp;)+/gi, "", /(&nbsp;|<br[^>]*>)+\s*$/gi, "", /mso-[^;"]*;?/gi, "", /<(\/?)b(\s[^>]*)?>/gi, "<$1strong$2>", /<(\/?)font(\s[^>]*)?>/gi, this.convertFontMatch, /<(\/?)i(\s[^>]*)?>/gi, "<$1em$2>", /style=(["|'])\s*\1/g, "", /(<br[^>]*>)?\n/g, function (e, t)
            		{
            			return t ? e : " "
            		}])
            	},
            	convertFontMatch: function (e, t, n)
            	{
            		var i = /face=['"]([^'"]+)['"]/i,
                        o = i.exec(n),
                        r = n && o && o[1];
            		return t ? "</span>" : r ? '<span style="font-family:' + r + '">' : "<span>"
            	},
            	applicable: function (e)
            	{
            		return /class="?Mso/i.test(e) || /style="[^"]*mso-/i.test(e) || /urn:schemas-microsoft-com:office/.test(e)
            	},
            	stripEmptyAnchors: function (e)
            	{
            		return e.replace(/<a([^>]*)>\s*<\/a>/gi, function (e, t)
            		{
            			return !t || t.indexOf("href") < 0 ? "" : e
            		})
            	},
            	listType: function (e, t)
            	{
            		var n, i = e.innerHTML,
                        o = c.innerText(e),
                        r = i.match(/^(?:<span [^>]*texhtml[^>]*>)?<span [^>]*(?:Symbol|Wingdings)[^>]*>([^<]+)/i),
                        s = r && r[1],
                        a = /^[a-z\d]/i.test(s),
                        l = function (e)
                        {
                        	return e.replace(/^(?:&nbsp;|[\u00a0\n\r\s])+/, "")
                        };
            		return r && (n = !0), i = i.replace(/<\/?\w+[^>]*>/g, "").replace(/&nbsp;/g, " "), !n && /^[\u2022\u00b7\u00a7\u00d8o]\u00a0+/.test(i) || n && /^.\u00a0+/.test(i) || s && !a && t ? {
            			tag: "ul",
            			style: this._guessUnorderedListStyle(l(o))
            		} : /^\s*\w+[\.\)][\u00a0 ]{2,}/.test(i) ? {
            			tag: "ol",
            			style: this._guessOrderedListStyle(l(o))
            		} : void 0
            	},
            	_convertToLi: function (e)
            	{
            		var t;
            		return 1 == e.childNodes.length ? t = e.firstChild.innerHTML.replace(/^\w+[\.\)](&nbsp;)+ /, "") : (c.remove(e.firstChild), 3 == e.firstChild.nodeType && /^[ivxlcdm]+\.$/i.test(e.firstChild.nodeValue) && c.remove(e.firstChild), /^(&nbsp;|\s)+$/i.test(e.firstChild.innerHTML) && c.remove(e.firstChild), t = e.innerHTML), c.remove(e), c.create(document, "li", {
            			innerHTML: t
            		})
            	},
            	_guessUnorderedListStyle: function (e)
            	{
            		return /^[\u2022\u00b7\u00FC\u00D8\u002dv-]/.test(e) ? null : /^o/.test(e) ? "circle" : "square"
            	},
            	_guessOrderedListStyle: function (e)
            	{
            		var t = null;
            		return /^\d/.test(e) || (t = (/^[a-z]/.test(e) ? "lower-" : "upper-") + (/^[ivxlcdm]/i.test(e) ? "roman" : "alpha")), t
            	},
            	extractListLevels: function (e)
            	{
            		var t = /style=['"]?[^'"]*?mso-list:\s?[a-zA-Z]+(\d+)\s[a-zA-Z]+(\d+)\s(\w+)/gi;
            		return e = e.replace(t, function (e, t, n)
            		{
            			return o.format('data-list="{0}" data-level="{1}" {2}', t, n, e)
            		})
            	},
            	lists: function (t)
            	{
            		var n, i, o, r, s, a, l, d, u, f, p, m, h = e(t).find(c.blockElements.join(",")),
                        g = -1,
                        b = {},
                        v = t;
            		for (r = 0; r < h.length; r++) s = h[r], u = e(s).data(), f = u.list, n = c.name(s), "td" != n && (p = this.listType(s, u), a = p && p.tag, a && "p" == n ? (l = parseFloat(s.style.marginLeft || 0), void 0 === i && (i = l), m = a + f, b[l] || (b[l] = {}), d = b[l][m], (l > g || !d) && (d = c.create(document, a, {
            			style: {
            				listStyleType: p.style
            			}
            		}), v == t || l <= g ? (o && i !== l ? o.appendChild(d) : c.insertBefore(d, s), b[l] = {}) : (o = v, v.appendChild(d)), b[l][m] = d), v = this._convertToLi(s), d.appendChild(v), g = l) : s.innerHTML ? (g = -1, v = t) : c.remove(s))
            	},
            	removeAttributes: function (e)
            	{
            		for (var t = e.attributes, n = t.length; n--;) "colspan" != c.name(t[n]) && e.removeAttributeNode(t[n])
            	},
            	createColGroup: function (t)
            	{
            		var n = t.cells,
                        i = e(t).closest("table"),
                        r = i.children("colgroup");
            		n.length < 2 || (r.length && (n = r.children(), r[0].parentNode.removeChild(r[0])), r = e(e.map(n, function (e)
            		{
            			var t = e.width;
            			return t && 0 !== parseInt(t, 10) ? o.format('<col style="width:{0}px;"/>', t) : "<col />"
            		}).join("")), r.is("colgroup") || (r = e("<colgroup/>").append(r)), r.prependTo(i))
            	},
            	convertHeaders: function (t)
            	{
            		var n, i = t.cells,
                        o = e.map(i, function (t)
                        {
                        	var n = e(t).children("p").children("strong")[0];
                        	if (n && "strong" == c.name(n)) return n
                        });
            		if (o.length == i.length) {
            			for (n = 0; n < o.length; n++) c.unwrap(o[n]);
            			for (e(t).closest("table").find("colgroup").after("<thead></thead>").end().find("thead").append(t), n = 0; n < i.length; n++) c.changeTag(i[n], "th")
            		}
            	},
            	removeParagraphs: function (t)
            	{
            		var n, i, o, r, s;
            		for (n = 0; n < t.length; n++)
            			for (this.removeAttributes(t[n]), r = e(t[n]), s = r.children("p"), i = 0, o = s.length; i < o; i++) i < o - 1 && c.insertAfter(c.create(document, "br"), s[i]), c.unwrap(s[i])
            	},
            	removeDefaultColors: function (e)
            	{
            		for (var t = 0; t < e.length; t++) /^\s*color: \s*[^;]*; ?$/i.test(e[t].style.cssText) && c.unwrap(e[t])
            	},
            	tables: function (t)
            	{
            		var n, i, o, r, s, a = e(t).find("table"),
                        l = this;
            		for (r = 0; r < a.length; r++) {
            			for (n = a[r].rows, o = i = n[0], s = 1; s < n.length; s++) n[s].cells.length > o.cells.length && (o = n[s]);
            			l.createColGroup(o), l.convertHeaders(i), l.removeAttributes(a[r]), l.removeParagraphs(a.eq(r).find("td,th")), l.removeDefaultColors(a.eq(r).find("span"))
            		}
            	},
            	headers: function (t)
            	{
            		var n, i = e(t).find("p.MsoTitle");
            		for (n = 0; n < i.length; n++) c.changeTag(i[n], "h1")
            	},
            	removeFormatting: function (t)
            	{
            		e(t).find("*").each(function ()
            		{
            			e(this).css({
            				fontSize: "",
            				fontFamily: ""
            			}), this.getAttribute("style") || this.style.cssText || this.removeAttribute("style")
            		})
            	},
            	clean: function (e)
            	{
            		var t, n = this,
                        i = this.options;
            		return i.none ? (e = H.fn.clean.call(n, e, this.junkReplacements), e = n.stripEmptyAnchors(e)) : (e = this.extractListLevels(e), e = H.fn.clean.call(n, e), e = n.stripEmptyAnchors(e), t = c.create(document, "div", {
            			innerHTML: e
            		}), n.headers(t), i.msConvertLists && n.lists(t), n.tables(t), i.msAllFormatting && n.removeFormatting(t), e = t.innerHTML.replace(/(<[^>]*)\s+class="?[^"\s>]*"?/gi, "$1")), e
            	}
            }),
            L = H.extend({
            	init: function (e)
            	{
            		H.fn.init.call(this, e), this.replacements = [/\s+class="Apple-style-span[^"]*"/gi, "", /<(div|p|h[1-6])\s+style="[^"]*"/gi, "<$1", /^<div>(.*)<\/div>$/, "$1"]
            	},
            	applicable: function (e)
            	{
            		return /class="?Apple-style-span|style="[^"]*-webkit-nbsp-mode/i.test(e)
            	}
            }),
            M = H.extend({
            	clean: function (e)
            	{
            		var t = c.create(document, "div", {
            			innerHTML: e
            		});
            		return t = this.cleanDom(t), t.innerHTML
            	},
            	cleanDom: function (e)
            	{
            		return e
            	}
            }),
            W = M.extend({
            	cleanDom: function (t)
            	{
            		var n = this.collectTags();
            		return e(t).find(n).each(function ()
            		{
            			c.unwrap(this)
            		}), t
            	},
            	collectTags: function ()
            	{
            		if (this.options.span) return "span"
            	},
            	applicable: function ()
            	{
            		return this.options.span
            	}
            }),
            U = M.extend({
            	cleanDom: function (t)
            	{
            		var n = this.collectAttr(),
                        i = e(t).find("[" + n.join("],[") + "]");
            		return i.removeAttr(n.join(" ")), t
            	},
            	collectAttr: function ()
            	{
            		return this.options.css ? ["class", "style"] : []
            	},
            	applicable: function ()
            	{
            		return this.options.css
            	}
            }),
            V = function ()
            {
            	this.text = "", this.add = function (e)
            	{
            		this.text += e
            	}
            },
            j = r.extend({
            	init: function (e)
            	{
            		this.separators = e || {
            			text: " ",
            			line: "<br/>"
            		}, this.lines = [], this.inlineBlockText = [], this.resetLine()
            	},
            	appendText: function (e)
            	{
            		3 === e.nodeType && (e = e.nodeValue), this.textContainer.add(e)
            	},
            	appendInlineBlockText: function (e)
            	{
            		this.inlineBlockText.push(e)
            	},
            	flashInlineBlockText: function ()
            	{
            		this.inlineBlockText.length && (this.appendText(this.inlineBlockText.join(" ")), this.inlineBlockText = [])
            	},
            	endLine: function ()
            	{
            		this.flashInlineBlockText(), this.resetLine()
            	},
            	html: function ()
            	{
            		var e, t, n, i, o, r, s, a, l = this.separators,
                        d = "",
                        c = this.lines;
            		for (this.flashInlineBlockText(), e = 0, t = c.length, n = t - 1; e < t; e++) {
            			for (i = c[e], o = 0, r = i.length, s = r - 1; o < r; o++) a = i[o].text, d += a, o !== s && (d += l.text);
            			e !== n && (d += l.line)
            		}
            		return d
            	},
            	resetLine: function ()
            	{
            		this.textContainer = new V, this.line = [], this.line.push(this.textContainer), this.lines.push(this.line)
            	}
            }),
            K = r.extend({
            	init: function (e)
            	{
            		this.callback = e
            	},
            	enumerate: function (e)
            	{
            		var t, n;
            		e && (t = this.callback(e), n = e.firstChild, !t && n && this.enumerate(n), this.enumerate(e.nextSibling))
            	}
            }),
            $ = H.extend({
            	init: function (t)
            	{
            		H.fn.init.call(this, t), this.hasText = !1, this.enumerator = new K(e.proxy(this.buildText, this))
            	},
            	clean: function (e)
            	{
            		var t = c.create(document, "div", {
            			innerHTML: e
            		});
            		return this.cleanDom(t)
            	},
            	cleanDom: function (e)
            	{
            		return this.separators = this.getDefaultSeparators(), this.htmlLines = new j(this.separators), this.enumerator.enumerate(e.firstChild), this.hasText = !1, this.htmlLines.html()
            	},
            	buildText: function (e)
            	{
            		if (c.isDataNode(e)) {
            			if (c.isEmptyspace(e)) return;
            			this.htmlLines.appendText(e.nodeValue.replace("\n", this.separators.line)), this.hasText = !0
            		} else if (c.isBlock(e) && this.hasText) {
            			var t = this.actions[c.name(e)] || this.actions.block;
            			return t(this, e)
            		}
            	},
            	applicable: function ()
            	{
            		var e = this.options;
            		return e.all || e.keepNewLines
            	},
            	getDefaultSeparators: function ()
            	{
            		return this.options.all ? {
            			text: " ",
            			line: " "
            		} : {
            			text: " ",
            			line: "<br/>"
            		}
            	},
            	actions: {
            		ul: e.noop,
            		ol: e.noop,
            		table: e.noop,
            		thead: e.noop,
            		tbody: e.noop,
            		td: function (e, t)
            		{
            			var n = new $({
            				all: !0
            			}),
                            i = n.cleanDom(t);
            			return e.htmlLines.appendInlineBlockText(i), !0
            		},
            		block: function (e)
            		{
            			e.htmlLines.endLine()
            		}
            	}
            }),
            G = H.extend({
            	clean: function (e)
            	{
            		return this.options.custom(e)
            	},
            	applicable: function ()
            	{
            		return "function" == typeof this.options.custom
            	}
            }),
            q = y.extend({
            	init: function (e)
            	{
            		y.fn.init.call(this, e), this.managesUndoRedo = !0
            	},
            	exec: function ()
            	{
            		var e = this.editor;
            		o.support.browser.msie ? e.document.execCommand("print", !1, null) : e.window.print && e.window.print()
            	}
            }),
            Q = y.extend({
            	init: function (e)
            	{
            		this.async = !0, y.fn.init.call(this, e)
            	},
            	exec: function ()
            	{
            		var e = this,
                        t = this.lockRange(!0);
            		this.editor.saveAsPDF().then(function ()
            		{
            			e.releaseRange(t)
            		})
            	}
            });
		b(s, {
			_finishUpdate: t,
			Command: y,
			GenericCommand: w,
			InsertHtmlCommand: x,
			InsertHtmlTool: C,
			TypingHandler: R,
			SystemHandler: E,
			BackspaceHandler: A,
			SelectAllHandler: D,
			Keyboard: P,
			Clipboard: I,
			Cleaner: H,
			ScriptCleaner: B,
			TabCleaner: O,
			MSWordFormatCleaner: F,
			WebkitFormatCleaner: L,
			HtmlTagsCleaner: W,
			HtmlAttrCleaner: U,
			HtmlContentCleaner: $,
			HtmlTextLines: j,
			CustomCleaner: G,
			PrintCommand: q,
			ExportPdfCommand: Q
		}), d("insertHtml", new C({
			template: new f({
				template: a.dropDownListTemplate,
				title: "Insert HTML",
				initialValue: "Insert HTML"
			})
		})), d("print", new u({
			command: q,
			template: new f({
				template: a.buttonTemplate,
				title: "Print"
			})
		})), d("pdf", new u({
			command: Q,
			template: new f({
				template: a.buttonTemplate,
				title: "Export PDF"
			})
		}))
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/inlineformat.min", ["editor/system.min"], e)
}(function ()
{
	! function (e)
	{
		var t = window.kendo,
            n = t.Class,
            i = t.ui.editor,
            o = t.ui.Editor.fn.options.formats,
            r = i.EditorUtils,
            s = i.Tool,
            a = i.ToolTemplate,
            l = i.FormatTool,
            d = i.Dom,
            c = i.RangeUtils,
            u = e.extend,
            f = i.EditorUtils.registerTool,
            p = i.EditorUtils.registerFormat,
            m = "k-marker",
            h = n.extend({
            	init: function (e)
            	{
            		this.format = e
            	},
            	numberOfSiblings: function (e)
            	{
            		var t, n = 0,
                        i = 0,
                        o = 0,
                        r = e.parentNode;
            		for (t = r.firstChild; t; t = t.nextSibling) t != e && (t.className == m ? o++ : 3 == t.nodeType ? n++ : i++);
            		return o > 1 && r.firstChild.className == m && r.lastChild.className == m ? 0 : i + n
            	},
            	findSuitable: function (e, t)
            	{
            		var n, i;
            		if (!t && this.numberOfSiblings(e) > 0) return null;
            		for (n = e.parentNode, i = this.format[0].tags; !d.ofType(n, i) ;) {
            			if (this.numberOfSiblings(n) > 0) return null;
            			n = n.parentNode
            		}
            		return n
            	},
            	findFormat: function (e)
            	{
            		var t, n, i, o, r, s = this.format,
                        a = d.attrEquals;
            		for (t = 0, n = s.length; t < n; t++) {
            			if (i = e, o = s[t].tags, r = s[t].attr, i && d.ofType(i, o) && a(i, r)) return i;
            			for (; i;)
            				if (i = d.parentOfType(i, o), i && a(i, r)) return i
            		}
            		return null
            	},
            	isFormatted: function (e)
            	{
            		var t, n;
            		for (t = 0, n = e.length; t < n; t++)
            			if (this.findFormat(e[t])) return !0;
            		return !1
            	}
            }),
            g = n.extend({
            	init: function (e, t)
            	{
            		this.finder = new h(e), this.attributes = u({}, e[0].attr, t), this.tag = e[0].tags[0]
            	},
            	wrap: function (e)
            	{
            		return d.wrap(e, d.create(e.ownerDocument, this.tag, this.attributes))
            	},
            	activate: function (e, t)
            	{
            		this.finder.isFormatted(t) ? (this.split(e), this.remove(t)) : this.apply(t)
            	},
            	toggle: function (e)
            	{
            		var t = this.immutables() ? c.editableTextNodes : c.textNodes,
                        n = t(e);
            		n.length > 0 && this.activate(e, n)
            	},
            	immutables: function ()
            	{
            		return this.editor && this.editor.options.immutables
            	},
            	apply: function (e)
            	{
            		var t, n, i, o, r = [],
                        s = this.attributes,
                        a = s ? s.style || {} : {};
            		for (t = 0, n = e.length; t < n; t++) {
            			if (i = e[t], o = this.finder.findSuitable(i)) d.is(o, "font") && (a.color && o.removeAttribute("color"), a.fontName && o.removeAttribute("face"), a.fontSize && o.removeAttribute("size")), d.attr(o, s);
            			else {
            				for (; !d.isBlock(i.parentNode) && 1 == i.parentNode.childNodes.length && "true" !== i.parentNode.contentEditable;) i = i.parentNode;
            				o = this.wrap(i)
            			}
            			r.push(o)
            		}
            		this.consolidate(r)
            	},
            	remove: function (e)
            	{
            		var t, n, i;
            		for (t = 0, n = e.length; t < n; t++) i = this.finder.findFormat(e[t]), i && (this.attributes && this.attributes.style ? (d.unstyle(i, this.attributes.style), i.style.cssText || i.attributes["class"] || d.unwrap(i)) : d.unwrap(i))
            	},
            	split: function (e)
            	{
            		var t, n, i = c.textNodes(e),
                        o = i.length;
            		if (o > 0)
            			for (t = 0; t < o; t++) n = this.finder.findFormat(i[t]), n && c.split(e, n, !0)
            	},
            	consolidate: function (e)
            	{
            		for (var t, n; e.length > 1;)
            			if (t = e.pop(), n = e[e.length - 1], t.previousSibling && t.previousSibling.className == m && n.appendChild(t.previousSibling), t.tagName == n.tagName && t.previousSibling == n && t.style.cssText == n.style.cssText) {
            				for (; t.firstChild;) n.appendChild(t.firstChild);
            				d.remove(t)
            			}
            	}
            }),
            b = h.extend({
            	init: function (e, t)
            	{
            		this.format = e, this.greedyProperty = t, h.fn.init.call(this, e)
            	},
            	getInlineCssValue: function (t)
            	{
            		var n, i, o, r, s, a, l, c, u, f, p, m, h = t.attributes,
                        g = e.trim;
            		if (h)
            			for (n = 0, i = h.length; n < i; n++)
            				if (o = h[n], r = o.nodeName, s = o.nodeValue, o.specified && "style" == r)
            					for (a = g(s || t.style.cssText).split(";"), c = 0, u = a.length; c < u; c++)
            						if (l = a[c], l.length) {
            							if (f = l.split(":"), p = g(f[0].toLowerCase()), m = g(f[1]), p != this.greedyProperty) continue;
            							return p.indexOf("color") >= 0 ? d.toHex(m) : m
            						}
            	},
            	getFormatInner: function (t)
            	{
            		var n, i, o, r = e(d.isDataNode(t) ? t.parentNode : t),
                        s = r.parentsUntil("[contentEditable]").addBack().toArray().reverse();
            		for (n = 0, i = s.length; n < i; n++)
            			if (o = "className" == this.greedyProperty ? s[n].className : this.getInlineCssValue(s[n])) return o;
            		return "inherit"
            	},
            	getFormat: function (e)
            	{
            		var t, n, i = this.getFormatInner(e[0]);
            		for (t = 1, n = e.length; t < n; t++)
            			if (i != this.getFormatInner(e[t])) return "";
            		return i
            	},
            	isFormatted: function (e)
            	{
            		return "" !== this.getFormat(e)
            	}
            }),
            v = g.extend({
            	init: function (e, n, i)
            	{
            		g.fn.init.call(this, e, n), this.values = n, this.finder = new b(e, i), i && (this.greedyProperty = t.toCamelCase(i))
            	},
            	activate: function (e, t)
            	{
            		var n = this.greedyProperty,
                        i = "apply";
            		this.split(e), n && "inherit" == this.values.style[n] && (i = "remove"), this[i](t)
            	}
            }),
            k = l.extend({
            	init: function (e)
            	{
            		l.fn.init.call(this, u(e, {
            			finder: new h(e.format),
            			formatter: function ()
            			{
            				return new g(e.format)
            			}
            		}))
            	}
            }),
            y = s.extend({
            	update: function (e, t)
            	{
            		var n = e.data(this.type);
            		n.close(), n.value(this.finder.getFormat(t))
            	}
            }),
            w = y.extend({
            	init: function (e)
            	{
            		s.fn.init.call(this, e), this.type = t.support.browser.msie || t.support.touch ? "kendoDropDownList" : "kendoComboBox", this.format = [{
            			tags: ["span", "font"]
            		}], this.finder = new b(this.format, e.cssAttr);
            	},
            	command: function (e)
            	{
            		var t = this.options,
                        n = this.format,
                        o = {};
            		return new i.FormatCommand(u(e, {
            			formatter: function ()
            			{
            				return o[t.domAttr] = e.value, new v(n, {
            					style: o
            				}, t.cssAttr)
            			}
            		}))
            	},
            	initialize: function (e, t)
            	{
            		var n, i = t.editor,
                        o = this.options,
                        r = o.name,
                        a = [];
            		o.defaultValue && (a = [{
            			text: i.options.messages[o.defaultValue[0].text],
            			value: o.defaultValue[0].value
            		}]), n = a.concat(o.items ? o.items : i.options[r] || []), e.attr({
            			title: t.title
            		}), e[this.type]({
            			dataTextField: "text",
            			dataValueField: "value",
            			dataSource: n,
            			change: function ()
            			{
            				s.exec(i, r, this.value())
            			},
            			highlightFirst: !1
            		}), e.closest(".k-widget").removeClass("k-" + r).find("*").addBack().attr("unselectable", "on"), e.data(this.type).value("inherit")
            	}
            }),
            x = s.extend({
            	init: function (e)
            	{
            		s.fn.init.call(this, e), this.format = [{
            			tags: ["span", "font"]
            		}], this.finder = new b(this.format, e.cssAttr)
            	},
            	options: {
            		palette: "websafe"
            	},
            	update: function ()
            	{
            		this._widget.close()
            	},
            	command: function (e)
            	{
            		var t = this.options,
                        n = this.format,
                        o = {};
            		return new i.FormatCommand(u(e, {
            			formatter: function ()
            			{
            				return o[t.domAttr] = e.value, new v(n, {
            					style: o
            				}, t.cssAttr)
            			}
            		}))
            	},
            	initialize: function (e, n)
            	{
            		var i = n.editor,
                        o = this.name,
                        r = u({}, x.fn.options, this.options),
                        a = r.palette;
            		e = this._widget = new t.ui.ColorPicker(e, {
            			toolIcon: "k-" + r.name,
            			palette: a,
            			change: function ()
            			{
            				var t = e.value();
            				t && s.exec(i, o, t), e.value(null), i.focus()
            			},
            			activate: function (t)
            			{
            				t.preventDefault(), e.trigger("change")
            			}
            		}), e.wrapper.attr({
            			title: n.title,
            			unselectable: "on"
            		}).find("*").attr("unselectable", "on")
            	}
            });
		u(i, {
			InlineFormatFinder: h,
			InlineFormatter: g,
			DelayedExecutionTool: y,
			GreedyInlineFormatFinder: b,
			GreedyInlineFormatter: v,
			InlineFormatTool: k,
			FontTool: w,
			ColorTool: x
		}), p("bold", [{
			tags: ["strong", "b"]
		}, {
			tags: ["span"],
			attr: {
				style: {
					fontWeight: "bold"
				}
			}
		}]), f("bold", new k({
			key: "B",
			ctrl: !0,
			format: o.bold,
			template: new a({
				template: r.buttonTemplate,
				title: "Bold"
			})
		})), p("italic", [{
			tags: ["em", "i"]
		}, {
			tags: ["span"],
			attr: {
				style: {
					fontStyle: "italic"
				}
			}
		}]), f("italic", new k({
			key: "I",
			ctrl: !0,
			format: o.italic,
			template: new a({
				template: r.buttonTemplate,
				title: "Italic"
			})
		})), p("underline", [{
			tags: ["span"],
			attr: {
				style: {
					textDecoration: "underline"
				}
			}
		}, {
			tags: ["u"]
		}]), f("underline", new k({
			key: "U",
			ctrl: !0,
			format: o.underline,
			template: new a({
				template: r.buttonTemplate,
				title: "Underline"
			})
		})), p("strikethrough", [{
			tags: ["del", "strike"]
		}, {
			tags: ["span"],
			attr: {
				style: {
					textDecoration: "line-through"
				}
			}
		}]), f("strikethrough", new k({
			format: o.strikethrough,
			template: new a({
				template: r.buttonTemplate,
				title: "Strikethrough"
			})
		})), p("superscript", [{
			tags: ["sup"]
		}]), f("superscript", new k({
			format: o.superscript,
			template: new a({
				template: r.buttonTemplate,
				title: "Superscript"
			})
		})), p("subscript", [{
			tags: ["sub"]
		}]), f("subscript", new k({
			format: o.subscript,
			template: new a({
				template: r.buttonTemplate,
				title: "Subscript"
			})
		})), f("foreColor", new x({
			cssAttr: "color",
			domAttr: "color",
			name: "foreColor",
			template: new a({
				template: r.colorPickerTemplate,
				title: "Color"
			})
		})), f("backColor", new x({
			cssAttr: "background-color",
			domAttr: "backgroundColor",
			name: "backColor",
			template: new a({
				template: r.colorPickerTemplate,
				title: "Background Color"
			})
		})), f("fontName", new w({
			cssAttr: "font-family",
			domAttr: "fontFamily",
			name: "fontName",
			defaultValue: [{
				text: "fontNameInherit",
				value: "inherit"
			}],
			template: new a({
				template: r.comboBoxTemplate,
				title: "Font Name"
			})
		})), f("fontSize", new w({
			cssAttr: "font-size",
			domAttr: "fontSize",
			name: "fontSize",
			defaultValue: [{
				text: "fontSizeInherit",
				value: "inherit"
			}],
			template: new a({
				template: r.comboBoxTemplate,
				title: "Font Size"
			})
		}))
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/formatblock.min", ["editor/inlineformat.min"], e)
}(function ()
{
	! function (e)
	{
		var t, n = window.kendo,
            i = n.Class,
            o = e.extend,
            r = n.ui.editor,
            s = n.ui.Editor.fn.options.formats,
            a = r.Dom,
            l = r.Command,
            d = r.ToolTemplate,
            c = r.FormatTool,
            u = r.EditorUtils,
            f = u.registerTool,
            p = u.registerFormat,
            m = r.RangeUtils,
            h = i.extend({
            	init: function (e)
            	{
            		this.format = e
            	},
            	contains: function (e, t)
            	{
            		var n, i, o;
            		for (n = 0, i = t.length; n < i; n++)
            			if (o = t[n], !o || !a.isAncestorOrSelf(e, o)) return !1;
            		return !0
            	},
            	findSuitable: function (t)
            	{
            		var n, i, o, r, s = this.format,
                        l = [];
            		for (n = 0, i = t.length; n < i; n++) {
            			for (r = s.length - 1; r >= 0 && !(o = a.ofType(t[n], s[r].tags) ? t[n] : a.closestEditableOfType(t[n], s[r].tags)) ; r--);
            			if (!o || "true" === o.contentEditable) return [];
            			e.inArray(o, l) < 0 && l.push(o)
            		}
            		for (this._resolveListsItems(l), n = 0, i = l.length; n < i; n++)
            			if (this.contains(l[n], l)) return [l[n]];
            		return l
            	},
            	_resolveListsItems: function (e)
            	{
            		var t, n, i;
            		for (t = 0; t < e.length; t++) n = e[t], i = a.is(n, "li") ? n : a.wrapper(n), i = i && a.list(i) ? i.children[0] : i, a.is(i, "li") && (n = e[t] = i)
            	},
            	findFormat: function (e)
            	{
            		var t, n, i, o, s, l, d = this.format,
                        c = a.editableParent(e),
                        u = this.options && this.options.immutables,
                        f = r.Immutables;
            		for (t = 0, n = d.length; t < n; t++) {
            			if (i = e, o = d[t].tags, s = d[t].attr, u && o && "immutable" == o[0] && (l = f.immutableParent(i), l && a.attrEquals(l, s))) return i;
            			for (; i && a.isAncestorOf(c, i) ;) {
            				if (a.ofType(i, o) && a.attrEquals(i, s)) return i;
            				i = i.parentNode
            			}
            		}
            		return null
            	},
            	getFormat: function (e)
            	{
            		var t, n, i = this,
                        o = function (e)
                        {
                        	return i.findFormat(a.isDataNode(e) ? e.parentNode : e)
                        },
                        r = o(e[0]);
            		if (!r) return "";
            		for (t = 1, n = e.length; t < n; t++)
            			if (r != o(e[t])) return "";
            		return r.nodeName.toLowerCase()
            	},
            	isFormatted: function (e)
            	{
            		for (var t = 0, n = e.length; t < n; t++)
            			if (!this.findFormat(e[t])) return !1;
            		return !0
            	}
            }),
            g = i.extend({
            	init: function (e, t)
            	{
            		this.format = e, this.values = t, this.finder = new h(e)
            	},
            	wrap: function (e, t, n)
            	{
            		var i, o, r, s, l, d = 1 == n.length ? a.blockParentOrBody(n[0]) : a.commonAncestor.apply(null, n);
            		for (a.isInline(d) && (d = a.blockParentOrBody(d)), i = a.significantChildNodes(d), o = a.findNodeIndex(i[0]), r = a.create(d.ownerDocument, e, t), s = 0; s < i.length; s++) l = i[s], a.isBlock(l) ? (a.attr(l, t), r.childNodes.length && (a.insertBefore(r, l), r = r.cloneNode(!1)), o = a.findNodeIndex(l) + 1) : r.appendChild(l);
            		r.firstChild && a.insertAt(d, r, o)
            	},
            	apply: function (t)
            	{
            		function n(e)
            		{
            			return o({}, e && e.attr, m)
            		}
            		var i, r, s, l, d, c, f, p, m = this.values;
            		if (this._handleImmutables(t, !0), r = a.filter("img", t), s = u.formatByName("img", this.format), l = n(s), e.each(r, function ()
            		{
                            a.attr(this, l)
            		}), r.length != t.length)
            			if (d = a.filter("img", t, !0), c = this.finder.findSuitable(d), c.length)
            				for (f = 0, p = c.length; f < p; f++) i = u.formatByName(a.name(c[f]), this.format), a.attr(c[f], n(i));
            			else i = this.format[0], this.wrap(i.tags[0], n(i), d)
            	},
            	_handleImmutables: function (e, t)
            	{
            		var n, i, o, s, l;
            		if (this.immutables() && (n = u.formatByName("immutable", this.format)))
            			for (i = r.Immutables, o = e.length - 1, s = o; s >= 0; s--) l = i.immutableParent(e[s]), l && (l !== e[s + 1] && (t ? a.attr(l, n.attr) : a.unstyle(l, n.attr.style)), e.splice(s, 1))
            	},
            	immutables: function ()
            	{
            		return this.editor && this.editor.options.immutables
            	},
            	remove: function (e)
            	{
            		var t, n, i, o, r;
            		for (this._handleImmutables(e, !1), t = 0, n = e.length; t < n; t++) i = this.finder.findFormat(e[t]), i && (r = a.name(i), "div" != r || i.getAttribute("class") ? (o = u.formatByName(r, this.format), o.attr.style && a.unstyle(i, o.attr.style), o.attr.className && a.removeClass(i, o.attr.className)) : a.unwrap(i))
            	},
            	toggle: function (e)
            	{
            		var t = this,
                        n = a.filterBy(m.nodes(e), a.htmlIndentSpace, !0);
            		t.finder.isFormatted(n) ? t.remove(n) : t.apply(n)
            	}
            }),
            b = i.extend({
            	init: function (e, t)
            	{
            		var n = this;
            		n.format = e, n.values = t, n.finder = new h(e)
            	},
            	apply: function (e)
            	{
            		var t, n, i, o, s, l, d, c, u, f, p = this.format,
                        m = a.blockParents(e),
                        h = p[0].tags[0];
            		if (m.length)
            			for (t = 0, n = m.length; t < n; t++) c = m[t], u = this.immutables() && r.Immutables.immutableParent(c), u || (d = a.name(c), "li" == d ? (i = c.parentNode, o = new r.ListFormatter(i.nodeName.toLowerCase(), h), s = this.editor.createRange(), s.selectNode(m[t]), o.toggle(s)) : h && ("td" == d || c.attributes.contentEditable) ? new g(p, this.values).apply(c.childNodes) : (l = a.changeTag(c, h), a.attr(l, p[0].attr)));
            		else f = new g(p, this.values), f.editor = this.editor, f.apply(e)
            	},
            	toggle: function (e)
            	{
            		var t = m.textNodes(e);
            		t.length || (e.selectNodeContents(e.commonAncestorContainer), t = m.textNodes(e), t.length || (t = a.significantChildNodes(e.commonAncestorContainer))), this.apply(t)
            	},
            	immutables: function ()
            	{
            		return this.editor && this.editor.options.immutables
            	}
            }),
            v = l.extend({
            	init: function (e)
            	{
            		e.formatter = e.formatter();
            		var t = e.formatter.finder;
            		t && u.formatByName("immutable", t.format) && t._initOptions({
            			immutables: e.immutables
            		}), l.fn.init.call(this, e)
            	}
            }),
            k = c.extend({
            	init: function (e)
            	{
            		c.fn.init.call(this, o(e, {
            			finder: new h(e.format),
            			formatter: function ()
            			{
            				return new g(e.format)
            			}
            		}))
            	}
            });
		o(r, {
			BlockFormatFinder: h,
			BlockFormatter: g,
			GreedyBlockFormatter: b,
			FormatCommand: v,
			BlockFormatTool: k
		}), t = ["ul", "ol", "li"], p("justifyLeft", [{
			tags: a.nonListBlockElements,
			attr: {
				style: {
					textAlign: "left"
				}
			}
		}, {
			tags: ["img"],
			attr: {
				style: {
					"float": "left",
					display: "",
					marginLeft: "",
					marginRight: ""
				}
			}
		}, {
			tags: ["immutable"],
			attr: {
				style: {
					"float": "left",
					display: "",
					marginLeft: "",
					marginRight: ""
				}
			}
		}, {
			tags: t,
			attr: {
				style: {
					textAlign: "left",
					listStylePosition: ""
				}
			}
		}]), f("justifyLeft", new k({
			format: s.justifyLeft,
			template: new d({
				template: u.buttonTemplate,
				title: "Justify Left"
			})
		})), p("justifyCenter", [{
			tags: a.nonListBlockElements,
			attr: {
				style: {
					textAlign: "center"
				}
			}
		}, {
			tags: ["img"],
			attr: {
				style: {
					display: "block",
					marginLeft: "auto",
					marginRight: "auto",
					"float": ""
				}
			}
		}, {
			tags: ["immutable"],
			attr: {
				style: {
					display: "block",
					marginLeft: "auto",
					marginRight: "auto",
					"float": ""
				}
			}
		}, {
			tags: t,
			attr: {
				style: {
					textAlign: "center",
					listStylePosition: "inside"
				}
			}
		}]), f("justifyCenter", new k({
			format: s.justifyCenter,
			template: new d({
				template: u.buttonTemplate,
				title: "Justify Center"
			})
		})), p("justifyRight", [{
			tags: a.nonListBlockElements,
			attr: {
				style: {
					textAlign: "right"
				}
			}
		}, {
			tags: ["img"],
			attr: {
				style: {
					"float": "right",
					display: "",
					marginLeft: "",
					marginRight: ""
				}
			}
		}, {
			tags: ["immutable"],
			attr: {
				style: {
					"float": "right",
					display: "",
					marginLeft: "",
					marginRight: ""
				}
			}
		}, {
			tags: t,
			attr: {
				style: {
					textAlign: "right",
					listStylePosition: "inside"
				}
			}
		}]), f("justifyRight", new k({
			format: s.justifyRight,
			template: new d({
				template: u.buttonTemplate,
				title: "Justify Right"
			})
		})), p("justifyFull", [{
			tags: a.nonListBlockElements,
			attr: {
				style: {
					textAlign: "justify"
				}
			}
		}, {
			tags: ["img"],
			attr: {
				style: {
					display: "block",
					marginLeft: "auto",
					marginRight: "auto",
					"float": ""
				}
			}
		}, {
			tags: ["immutable"],
			attr: {
				style: {
					display: "block",
					marginLeft: "auto",
					marginRight: "auto",
					"float": ""
				}
			}
		}, {
			tags: t,
			attr: {
				style: {
					textAlign: "justify",
					listStylePosition: ""
				}
			}
		}]), f("justifyFull", new k({
			format: s.justifyFull,
			template: new d({
				template: u.buttonTemplate,
				title: "Justify Full"
			})
		}))
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/linebreak.min", ["editor/formatblock.min"], e)
}(function ()
{
	! function (e)
	{
		var t = window.kendo,
            n = e.extend,
            i = t.ui.editor,
            o = i.Dom,
            r = i.Command,
            s = i.Tool,
            a = i.BlockFormatter,
            l = o.normalize,
            d = i.RangeUtils,
            c = i.EditorUtils.registerTool,
            u = r.extend({
            	init: function (e)
            	{
            		this.options = e, r.fn.init.call(this, e)
            	},
            	_insertMarker: function (e, t)
            	{
            		var n, i = o.create(e, "a");
            		return i.className = "k-marker", t.insertNode(i), i.parentNode || (n = t.commonAncestorContainer, n.innerHTML = "", n.appendChild(i)), l(i.parentNode), i
            	},
            	_moveFocus: function (e, t)
            	{
            		if (o.isEmpty(t)) e.setStartBefore(t);
            		else {
            			e.selectNodeContents(t);
            			var n = d.textNodes(e)[0];
            			if (!n) {
            				for (; t.childNodes.length && !o.is(t.firstChild, "br") ;) t = t.firstChild;
            				n = t
            			}
            			o.isEmpty(n) ? e.setStartBefore(n) : (o.emptyNode(n) && (n.innerHTML = "\ufeff"), e.setStartBefore(n.firstChild || n))
            		}
            	},
            	shouldTrim: function (e)
            	{
            		var t = "p,h1,h2,h3,h4,h5,h6".split(","),
                        n = o.parentOfType(e.startContainer, t),
                        i = o.parentOfType(e.endContainer, t);
            		return n && !i || !n && i
            	},
            	_blankAfter: function (e)
            	{
            		for (; e && (o.isMarker(e) || "" === o.stripBom(e.nodeValue)) ;) e = e.nextSibling;
            		return !e
            	},
            	exec: function ()
            	{
            		var t, n, r, s, c, u, f, p, m, h, g, b, v, k = this.getRange(),
                        y = d.documentFromRange(k),
                        w = i.emptyElementContent;
            		this.expandImmutablesIn(k), m = this.shouldTrim(k), k.deleteContents(), c = this._insertMarker(y, k), o.stripBomNode(c.previousSibling), o.stripBomNode(c.nextSibling), u = o.closestEditableOfType(c, ["li"]), f = o.closestEditableOfType(c, "h1,h2,h3,h4,h5,h6".split(",")), u ? o.emptyNode(u) && (s = o.create(y, "p"), o.next(u) && (p = k.cloneRange(), p.selectNode(u), d.split(p, u.parentNode)), h = e("br", u), 1 == h.length && h.remove(), g = u.parentNode, b = u.parentNode.children.length, v = b > 1 && 1 == u.childNodes.length && u.children[0], o.insertAfter(s, g), o.remove(1 == b ? u.parentNode : u), v && v !== c ? (s.appendChild(v), s.appendChild(c)) : s.innerHTML = w, r = s) : f && this._blankAfter(c) && (s = o.create(y, "p"), o.insertAfter(s, f), s.innerHTML = w, o.remove(c), r = s), r || (u || f || new a([{
            			tags: ["p"]
            		}]).apply([c]), k.selectNode(c), t = o.parentOfType(c, [u ? "li" : f ? o.name(f) : "p"]), d.split(k, t, m), n = t.previousSibling, o.is(n, "li") && n.firstChild && !o.is(n.firstChild, "br") && (n = n.firstChild), r = t.nextSibling, this.clean(n), this.clean(r, {
            			links: !0
            		}), o.is(r, "li") && r.firstChild && !o.is(r.firstChild, "br") && (r = r.firstChild), o.remove(t), l(n)), l(r), this._moveFocus(k, r), k.collapse(!0), o.scrollTo(r), d.selectRange(k)
            	},
            	clean: function (t, n)
            	{
            		var r, s = t;
            		if (t.firstChild && o.is(t.firstChild, "br") && o.remove(t.firstChild), o.isDataNode(t) && !t.nodeValue && (t = t.parentNode), t) {
            			for (r = !1; t.firstChild && 1 == t.firstChild.nodeType;) r = r || o.significantNodes(t.childNodes).length > 1, t = t.firstChild;
            			if (o.isEmpty(t) || !/^\s*$/.test(t.innerHTML) || r || (e(s).find(".k-br").remove(), t.innerHTML = i.emptyElementContent), n && n.links)
            				for (; t != s;) {
            					if (o.is(t, "a") && o.emptyNode(t)) {
            						o.unwrap(t);
            						break
            					}
            					t = t.parentNode
            				}
            		}
            	}
            }),
            f = r.extend({
            	init: function (e)
            	{
            		this.options = e, r.fn.init.call(this, e)
            	},
            	exec: function ()
            	{
            		var e, n, i, r, s = this.getRange();
            		this.expandImmutablesIn(s), e = o.create(d.documentFromRange(s), "br"), i = t.support.browser, r = i.msie && i.version < 11, s.deleteContents(), s.insertNode(e), l(e.parentNode), r || e.nextSibling && !o.isWhitespace(e.nextSibling) || (n = e.cloneNode(!0), n.className = "k-br", o.insertAfter(n, e)), s.setStartAfter(e), s.collapse(!0), o.scrollTo(e.nextSibling || e), d.selectRange(s)
            	}
            });
		n(i, {
			ParagraphCommand: u,
			NewLineCommand: f
		}), c("insertLineBreak", new s({
			key: 13,
			shift: !0,
			command: f
		})), c("insertParagraph", new s({
			key: 13,
			command: u
		}))
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/lists.min", ["editor/linebreak.min"], e)
}(function ()
{
	! function (e)
	{
		var t = window.kendo,
            n = t.Class,
            i = e.extend,
            o = t.ui.editor,
            r = o.Dom,
            s = o.RangeUtils,
            a = o.EditorUtils,
            l = o.Command,
            d = o.ToolTemplate,
            c = o.FormatTool,
            u = o.BlockFormatFinder,
            f = s.textNodes,
            p = o.EditorUtils.registerTool,
            m = u.extend({
            	init: function (e)
            	{
            		this.tag = e;
            		var t = this.tags = ["ul" == e ? "ol" : "ul", e];
            		u.fn.init.call(this, [{
            			tags: t
            		}])
            	},
            	isFormatted: function (e)
            	{
            		var t, n, i = [];
            		for (n = 0; n < e.length; n++) t = this.findFormat(e[n]), t && r.name(t) == this.tag && i.push(t);
            		if (i.length < 1) return !1;
            		if (i.length != e.length) return !1;
            		for (n = 0; n < i.length && i[n].parentNode == t.parentNode; n++)
            			if (i[n] != t) return !1;
            		return !0
            	},
            	findSuitable: function (e)
            	{
            		var t = this.findFormat(e[0]);
            		return t && r.name(t) == this.tag ? t : null
            	}
            }),
            h = n.extend({
            	init: function (e, t)
            	{
            		var n = this;
            		n.finder = new m(e), n.tag = e, n.unwrapTag = t
            	},
            	isList: function (e)
            	{
            		return r.list(e)
            	},
            	immutables: function ()
            	{
            		return this.editor && !!this.editor.options.immutables
            	},
            	wrap: function (t, n)
            	{
            		var i, s, a = r.create(t.ownerDocument, "li"),
                        l = this.immutables() ? o.Immutables.immutable : e.noop;
            		for (i = 0; i < n.length; i++)
            			if (s = n[i], r.is(s, "li")) t.appendChild(s);
            			else if (this.isList(s))
            				for (; s.firstChild;) t.appendChild(s.firstChild);
            			else if (r.is(s, "td")) {
            				for (; s.firstChild;) a.appendChild(s.firstChild);
            				t.appendChild(a), s.appendChild(t), t = t.cloneNode(!1), a = a.cloneNode(!1)
            			} else a.appendChild(s), r.isBlock(s) && (t.appendChild(a), l(s) || r.unwrap(s), a = a.cloneNode(!1));
            		a.firstChild && t.appendChild(a)
            	},
            	containsAny: function (e, t)
            	{
            		for (var n = 0; n < t.length; n++)
            			if (r.isAncestorOrSelf(e, t[n])) return !0;
            		return !1
            	},
            	suitable: function (e, t)
            	{
            		if ("k-marker" == e.className) {
            			var n = e.nextSibling;
            			if (n && r.isBlock(n)) return !1;
            			if (n = e.previousSibling, n && r.isBlock(n)) return !1
            		}
            		return this.containsAny(e, t) || r.isInline(e) || 3 == e.nodeType
            	},
            	_parentLists: function (t)
            	{
            		var n = r.closestEditable(t);
            		return e(t).parentsUntil(n, "ul,ol")
            	},
            	split: function (e)
            	{
            		var t, n, i, o, a, l, d = f(e);
            		if (d.length)
            			for (t = r.parentOfType(d[0], ["li"]), n = r.parentOfType(d[d.length - 1], ["li"]), e.setStartBefore(t), e.setEndAfter(n), o = 0, a = d.length; o < a; o++) l = this.finder.findFormat(d[o]), l && (i = this._parentLists(l), i.length ? s.split(e, i.last()[0], !0) : s.split(e, l, !0))
            	},
            	merge: function (e, t)
            	{
            		for (var n, i = t.previousSibling; i && ("k-marker" == i.className || 3 == i.nodeType && r.isWhitespace(i)) ;) i = i.previousSibling;
            		if (i && r.name(i) == e) {
            			for (; t.firstChild;) i.appendChild(t.firstChild);
            			r.remove(t), t = i
            		}
            		for (n = t.nextSibling; n && ("k-marker" == n.className || 3 == n.nodeType && r.isWhitespace(n)) ;) n = n.nextSibling;
            		if (n && r.name(n) == e) {
            			for (; t.lastChild;) n.insertBefore(t.lastChild, n.firstChild);
            			r.remove(t)
            		}
            	},
            	breakable: function (e)
            	{
            		return e != e.ownerDocument.body && !/table|tbody|tr|td/.test(r.name(e)) && !e.attributes.contentEditable
            	},
            	applyOnSection: function (t, n)
            	{
            		function i()
            		{
            			u.push(this)
            		}
            		var o, s, a, l, d = this.tag,
                        c = r.closestSplittableParent(n),
                        u = [],
                        f = this.finder.findSuitable(n);
            		for (f || (f = new m("ul" == d ? "ol" : "ul").findSuitable(n)), /table|tbody/.test(r.name(c)) ? o = e.map(n, function (e)
            		{
                            return r.parentOfType(e, ["td"])
            		}) : (o = r.significantChildNodes(c), e.grep(o, r.isBlock).length && (o = e.grep(o, e.proxy(function (e)
            		{
                            return this.containsAny(e, n)
            		}, this))), o.length || (o = n)), s = 0; s < o.length; s++) a = o[s], l = (!f || !r.isAncestorOrSelf(f, a)) && this.suitable(a, n), l && (f && this.isList(a) ? (e.each(a.children, i), r.remove(a)) : u.push(a));
            		for (u.length == o.length && this.breakable(c) && (u = [c]), f || (f = r.create(c.ownerDocument, d), r.insertBefore(f, u[0])), this.wrap(f, u) ; r.isBom(f.nextSibling) ;) r.remove(f.nextSibling);
            		r.is(f, d) || r.changeTag(f, d), this.merge(d, f)
            	},
            	apply: function (t)
            	{
            		function n()
            		{
            			i && c.push({
            				section: i,
            				nodes: s
            			})
            		}
            		var i, s, a, l, d = 0,
                        c = [],
                        u = t.length,
                        f = this.immutables() ? o.Immutables.immutableParent : e.noop;
            		for (d = 0; d < u; d++) l = f(t[d]) || t[d], a = r.closestEditable(l, ["td", "body"]), i && a == i ? s.push(l) : (n(), s = [l], i = a);
            		for (n(), d = 0; d < c.length; d++) this.applyOnSection(c[d].section, c[d].nodes)
            	},
            	unwrap: function (e)
            	{
            		var t, n, i, o, s = e.ownerDocument.createDocumentFragment(),
                        a = this.unwrapTag;
            		for (n = e.firstChild; n; n = n.nextSibling) {
            			for (i = r.create(e.ownerDocument, a || "p") ; n.firstChild;) o = n.firstChild, r.isBlock(o) ? (i.firstChild && (s.appendChild(i), i = r.create(e.ownerDocument, a || "p")), s.appendChild(o)) : i.appendChild(o);
            			i.firstChild && s.appendChild(i)
            		}
            		t = this._parentLists(e), t[0] ? (r.insertAfter(s, t.last()[0]), t.last().remove()) : r.insertAfter(s, e), r.remove(e)
            	},
            	remove: function (e)
            	{
            		var t, n, i;
            		for (n = 0, i = e.length; n < i; n++) t = this.finder.findFormat(e[n]), t && this.unwrap(t)
            	},
            	toggle: function (e)
            	{
            		var t, n = this,
                        i = f(e),
                        o = e.commonAncestorContainer;
            		i.length || (e.selectNodeContents(o), i = f(e), i.length || (t = o.ownerDocument.createTextNode(""), e.startContainer.appendChild(t), i = [t], e.selectNode(t.parentNode))), i = r.filterBy(i, r.htmlIndentSpace, !0), n.finder.isFormatted(i) ? (n.split(e), n.remove(i)) : n.apply(i)
            	}
            }),
            g = l.extend({
            	init: function (e)
            	{
            		e.formatter = new h(e.tag), l.fn.init.call(this, e)
            	}
            }),
            b = c.extend({
            	init: function (e)
            	{
            		this.options = e, c.fn.init.call(this, i(e, {
            			finder: new m(e.tag)
            		}))
            	},
            	command: function (e)
            	{
            		return new g(i(e, {
            			tag: this.options.tag
            		}))
            	}
            });
		i(o, {
			ListFormatFinder: m,
			ListFormatter: h,
			ListCommand: g,
			ListTool: b
		}), p("insertUnorderedList", new b({
			tag: "ul",
			template: new d({
				template: a.buttonTemplate,
				title: "Insert unordered list"
			})
		})), p("insertOrderedList", new b({
			tag: "ol",
			template: new d({
				template: a.buttonTemplate,
				title: "Insert ordered list"
			})
		}))
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/link.min", ["editor/lists.min"], e)
}(function ()
{
	! function (e, t)
	{
		function n(e, t)
		{
			for (var n = e.length; n-- && !t.test(e[n]) ;);
			return n
		}

		function i(e, t)
		{
			var n = t.exec(e);
			return n ? n.index : -1
		}
		var o = window.kendo,
            r = o.Class,
            s = e.extend,
            a = e.proxy,
            l = o.ui.editor,
            d = l.Dom,
            c = l.RangeUtils,
            u = l.EditorUtils,
            f = l.Command,
            p = l.Tool,
            m = l.ToolTemplate,
            h = l.InlineFormatter,
            g = l.InlineFormatFinder,
            b = c.textNodes,
            v = c.editableTextNodes,
            k = l.EditorUtils.registerTool,
            y = o.keys,
            w = "http://",
            x = /^\w*:\/\//,
            C = /[\w\/\$\-_\*\?]/i,
            T = r.extend({
            	findSuitable: function (e)
            	{
            		return d.parentOfType(e, ["a"])
            	}
            }),
            _ = r.extend({
            	init: function ()
            	{
            		this.finder = new T
            	},
            	apply: function (e, t)
            	{
            		var n, i, o, r, s, a, l, u = this.immutables ? v(e) : b(e);
            		if (t.innerHTML) {
            			for (i = c.documentFromRange(e), n = c.getMarkers(e), e.deleteContents(), r = d.create(i, "a", t), e.insertNode(r), s = r.parentNode, "a" == d.name(s) && d.insertAfter(r, s), d.emptyNode(s) && d.remove(s), a = r, l = 0; l < n.length; l++) d.insertAfter(n[l], a), a = n[l];
            			n.length && (d.insertBefore(i.createTextNode("\ufeff"), n[1]), d.insertAfter(i.createTextNode("\ufeff"), n[1]), e.setStartBefore(n[0]), e.setEndAfter(n[n.length - 1]))
            		} else o = new h([{
            			tags: ["a"]
            		}], t), o.finder = this.finder, o.apply(u)
            	}
            }),
            N = f.extend({
            	init: function (e)
            	{
            		var t = this;
            		e.formatter = {
            			toggle: function (e)
            			{
            				var n = t.immutables() ? v(e) : b(e);
            				new h([{
            					tags: ["a"]
            				}]).remove(n)
            			}
            		}, this.options = e, f.fn.init.call(this, e)
            	}
            }),
            S = f.extend({
            	init: function (e)
            	{
            		var t;
            		this.options = e, f.fn.init.call(this, e), this.formatter = new _, e.url ? this.exec = function ()
            		{
            			this.formatter.immutables = t && t.immutables(), this.formatter.apply(e.range, {
            				href: e.url,
            				innerHTML: e.text || e.url,
            				target: e.target
            			})
            		} : (this.attributes = null, this.async = !0)
            	},
            	_dialogTemplate: function ()
            	{
            		return o.template("<div class=\"k-editor-dialog k-popup-edit-form k-edit-form-container\"><div class='k-edit-label'><label for='k-editor-link-url'>#: messages.linkWebAddress #</label></div><div class='k-edit-field'><input type='text' class='k-input k-textbox' id='k-editor-link-url'></div><div class='k-edit-label k-editor-link-text-row'><label for='k-editor-link-text'>#: messages.linkText #</label></div><div class='k-edit-field k-editor-link-text-row'><input type='text' class='k-input k-textbox' id='k-editor-link-text'></div><div class='k-edit-label'><label for='k-editor-link-title'>#: messages.linkToolTip #</label></div><div class='k-edit-field'><input type='text' class='k-input k-textbox' id='k-editor-link-title'></div><div class='k-edit-label'></div><div class='k-edit-field'><input type='checkbox' class='k-checkbox' id='k-editor-link-target'><label for='k-editor-link-target' class='k-checkbox-label'>#: messages.linkOpenInNewWindow #</label></div><div class='k-edit-buttons k-state-default'><button class=\"k-dialog-insert k-button k-primary\">#: messages.dialogInsert #</button><button class=\"k-dialog-close k-button\">#: messages.dialogCancel #</button></div></div>")({
            			messages: this.editor.options.messages
            		})
            	},
            	exec: function ()
            	{
            		var t, n, i, o, r = this.editor.options.messages;
            		this._initialText = "", this._range = this.lockRange(!0), this.formatter.immutables = this.immutables(), t = b(this._range), n = t.length ? this.formatter.finder.findSuitable(t[0]) : null, i = t.length && "img" == d.name(t[0]), o = this.createDialog(this._dialogTemplate(), {
            			title: r.createLink,
            			close: a(this._close, this),
            			visible: !1
            		}), n && (this._range.selectNodeContents(n), t = b(this._range)), this._initialText = this.linkText(t), o.find(".k-dialog-insert").click(a(this._apply, this)).end().find(".k-dialog-close").click(a(this._close, this)).end().find(".k-edit-field input").keydown(a(this._keydown, this)).end().find("#k-editor-link-url").val(this.linkUrl(n)).end().find("#k-editor-link-text").val(this._initialText).end().find("#k-editor-link-title").val(n ? n.title : "").end().find("#k-editor-link-target").attr("checked", !!n && "_blank" == n.target).end().find(".k-editor-link-text-row").toggle(!i), this._dialog = o.data("kendoWindow").center().open(), e("#k-editor-link-url", o).focus().select()
            	},
            	_keydown: function (e)
            	{
            		var t = o.keys;
            		e.keyCode == t.ENTER ? this._apply(e) : e.keyCode == t.ESC && this._close(e)
            	},
            	_apply: function (t)
            	{
            		var n, i, o, r = this._dialog.element,
                        s = e("#k-editor-link-url", r).val(),
                        a = e("#k-editor-link-text", r);
            		s && s != w && (s.indexOf("@") > 0 && !/^(\w+:)|(\/\/)/i.test(s) && (s = "mailto:" + s), this.attributes = {
            			href: s
            		}, n = e("#k-editor-link-title", r).val(), n && (this.attributes.title = n), a.is(":visible") && (i = a.val(), i || this._initialText ? i && i !== this._initialText && (this.attributes.innerHTML = d.stripBom(i)) : this.attributes.innerHTML = s), o = e("#k-editor-link-target", r).is(":checked"), this.attributes.target = o ? "_blank" : null, this.formatter.apply(this._range, this.attributes)), this._close(t), this.change && this.change()
            	},
            	_close: function (e)
            	{
            		e.preventDefault(), this._dialog.destroy(), d.windowFromDocument(c.documentFromRange(this._range)).focus(), this.releaseRange(this._range)
            	},
            	linkUrl: function (e)
            	{
            		return e ? e.getAttribute("href", 2) : w
            	},
            	linkText: function (e)
            	{
            		var t, n = "";
            		for (t = 0; t < e.length; t++) n += e[t].nodeValue;
            		return d.stripBom(n || "")
            	},
            	redo: function ()
            	{
            		var e = this.lockRange(!0);
            		this.formatter.apply(e, this.attributes), this.releaseRange(e)
            	}
            }),
            z = f.extend({
            	init: function (e)
            	{
            		f.fn.init.call(this, e), this.formatter = new _
            	},
            	exec: function ()
            	{
            		var e, t, n, i = this.detectLink();
            		i && (e = this.getRange(), t = new o.ui.editor.Marker, n = e.cloneRange(), n.setStart(i.start.node, i.start.offset), n.setEnd(i.end.node, i.end.offset), e = this.lockRange(), t.add(n), this.formatter.apply(n, {
            			href: this._ensureWebProtocol(i.text)
            		}), t.remove(n), this.releaseRange(e))
            	},
            	detectLink: function ()
            	{
            		var e = this.getRange(),
                        t = new P({
                        	node: e.startContainer,
                        	offset: e.startOffset,
                        	cancelAtNode: function (e)
                        	{
                        		return e && "a" === d.name(e)
                        	}
                        }),
                        n = new A(t);
            		return n.detectLink()
            	},
            	changesContent: function ()
            	{
            		return !!this.detectLink()
            	},
            	_ensureWebProtocol: function (e)
            	{
            		var t = this._hasProtocolPrefix(e);
            		return t ? e : this._prefixWithWebProtocol(e)
            	},
            	_hasProtocolPrefix: function (e)
            	{
            		return x.test(e)
            	},
            	_prefixWithWebProtocol: function (e)
            	{
            		return w + e
            	}
            }),
            R = p.extend({
            	init: function (t)
            	{
            		this.options = t, this.finder = new g([{
            			tags: ["a"]
            		}]), p.fn.init.call(this, e.extend(t, {
            			command: N
            		}))
            	},
            	initialize: function (e, t)
            	{
            		p.fn.initialize.call(this, e, t), e.addClass("k-state-disabled")
            	},
            	update: function (e, t)
            	{
            		e.toggleClass("k-state-disabled", !this.finder.isFormatted(t)).removeClass("k-state-hover")
            	}
            }),
            A = r.extend({
            	init: function (e)
            	{
            		this.traverser = e, this.start = E(), this.end = E(), this.text = ""
            	},
            	detectLink: function ()
            	{
            		var t, n, i, o, r = this.traverser.node,
                        s = this.traverser.offset;
            		if (d.isDataNode(r)) {
            			if (t = r.data.substring(0, s), /\s{2}$/.test(d.stripBom(t))) return
            		} else 0 === s && (n = d.closestEditableOfType(r, d.blockElements), n && n.previousSibling && this.traverser.init({
            			node: n.previousSibling
            		}));
            		return this.traverser.traverse(e.proxy(this._detectEnd, this)), this.end.blank() || (this.traverser = this.traverser.clone(this.end), this.traverser.traverse(e.proxy(this._detectStart, this)), this._isLinkDetected() || (i = this.traverser.extendOptions(this.start), o = new I(i), o.traverse(e.proxy(this._skipStartPuntuation, this)), this._isLinkDetected() || (this.start = E()))), this.start.blank() ? null : {
            			start: this.start,
            			end: this.end,
            			text: this.text
            		}
            	},
            	_isLinkDetected: function ()
            	{
            		return x.test(this.text) || /^w{3}\./i.test(this.text)
            	},
            	_detectEnd: function (e, t)
            	{
            		var i = n(e, C);
            		if (i > -1) return this.end.node = t, this.end.offset = i + 1, !1
            	},
            	_detectStart: function (e, t)
            	{
            		var i = n(e, /\s/),
                        o = i + 1;
            		if (this.text = e.substring(o) + this.text, this.start.node = t, this.start.offset = o, i > -1) return !1
            	},
            	_skipStartPuntuation: function (e, t, n)
            	{
            		var o = i(e, /\w/),
                        r = o;
            		if (o === -1 && (r = e.length), this.text = this.text.substring(r), this.start.node = t, this.start.offset = r + (0 | n), o > -1) return !1
            	}
            }),
            E = function ()
            {
            	return {
            		node: null,
            		offset: null,
            		blank: function ()
            		{
            			return null === this.node && null === this.offset
            		}
            	}
            },
            D = r.extend({
            	init: function (n)
            	{
            		this.node = n.node, this.offset = n.offset === t ? d.isDataNode(this.node) && this.node.length || 0 : n.offset, this.cancelAtNode = n.cancelAtNode || this.cancelAtNode || e.noop
            	},
            	traverse: function (e)
            	{
            		e && (this.cancel = !1, this._traverse(e, this.node, this.offset))
            	},
            	_traverse: function (e, n, i)
            	{
            		var o, r, s, a;
            		if (n && !this.cancel) {
            			if (3 !== n.nodeType) return r = this.edgeNode(n), this.cancel = this.cancel || this.cancelAtNode(r), this._traverse(e, r);
            			if (o = n.data, i !== t && (o = this.subText(o, i)), this.cancel = e(o, n, i) === !1, s = this.next(n), !s)
            				for (a = n.parentNode; !s && d.isInline(a) ;) s = this.next(a), a = a.parentNode;
            			this.cancel = this.cancel || this.cancelAtNode(s), this._traverse(e, s)
            		}
            	},
            	extendOptions: function (t)
            	{
            		return e.extend({
            			node: this.node,
            			offset: this.offset,
            			cancelAtNode: this.cancelAtNode
            		}, t || {})
            	},
            	edgeNode: function (e) { },
            	next: function (e) { },
            	subText: function (e, t) { }
            }),
            P = D.extend({
            	subText: function (e, t)
            	{
            		return e.substring(0, t)
            	},
            	next: function (e)
            	{
            		return e.previousSibling
            	},
            	edgeNode: function (e)
            	{
            		return e.lastChild
            	},
            	clone: function (e)
            	{
            		var t = this.extendOptions(e);
            		return new P(t)
            	}
            }),
            I = D.extend({
            	subText: function (e, t)
            	{
            		return e.substring(t)
            	},
            	next: function (e)
            	{
            		return e.nextSibling
            	},
            	edgeNode: function (e)
            	{
            		return e.firstChild
            	},
            	clone: function (e)
            	{
            		var t = this.extendOptions(e);
            		return new I(t)
            	}
            });
		s(o.ui.editor, {
			LinkFormatFinder: T,
			LinkFormatter: _,
			UnlinkCommand: N,
			LinkCommand: S,
			AutoLinkCommand: z,
			UnlinkTool: R,
			DomTextLinkDetection: A,
			LeftDomTextTraverser: P,
			RightDomTextTraverser: I
		}), k("createLink", new p({
			key: "K",
			ctrl: !0,
			command: S,
			template: new m({
				template: u.buttonTemplate,
				title: "Create Link"
			})
		})), k("unlink", new R({
			key: "K",
			ctrl: !0,
			shift: !0,
			template: new m({
				template: u.buttonTemplate,
				title: "Remove Link"
			})
		})), k("autoLink", new p({
			key: [y.ENTER, y.SPACEBAR],
			keyPressCommand: !0,
			command: z
		}))
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/file.min", ["kendo.filebrowser.min", "editor/link.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window.kendo,
            i = e.extend,
            o = n.ui.editor,
            r = o.EditorUtils,
            s = o.Dom,
            a = r.registerTool,
            l = o.ToolTemplate,
            d = o.RangeUtils,
            c = o.Command,
            u = o.LinkFormatter,
            f = d.textNodes,
            p = n.keys,
            m = "#k-editor-file-url",
            h = "#k-editor-file-title",
            g = c.extend({
            	init: function (e)
            	{
            		var t = this;
            		c.fn.init.call(t, e), t.formatter = new u, t.async = !0, t.attributes = {}
            	},
            	insertFile: function (e, t)
            	{
            		var n = this.attributes,
                        i = d.documentFromRange(t);
            		if (n.href && "http://" != n.href) {
            			if (!e) return e = s.create(i, "a", {
            				href: n.href
            			}), e.innerHTML = n.innerHTML, t.deleteContents(), t.insertNode(e), e.nextSibling || s.insertAfter(i.createTextNode("\ufeff"), e), t.setStartAfter(e), t.setEndAfter(e), d.selectRange(t), !0;
            			s.attr(e, n)
            		}
            		return !1
            	},
            	_dialogTemplate: function (e)
            	{
            		return n.template('<div class="k-editor-dialog k-popup-edit-form k-edit-form-container"># if (showBrowser) { #<div class="k-filebrowser"></div># } #<div class=\'k-edit-label\'><label for="k-editor-file-url">#: messages.fileWebAddress #</label></div><div class=\'k-edit-field\'><input type="text" class="k-input k-textbox" id="k-editor-file-url"></div><div class=\'k-edit-label\'><label for="k-editor-file-title">#: messages.fileTitle #</label></div><div class=\'k-edit-field\'><input type="text" class="k-input k-textbox" id="k-editor-file-title"></div><div class="k-edit-buttons k-state-default"><button class="k-dialog-insert k-button k-primary">#: messages.dialogInsert #</button><button class="k-dialog-close k-button">#: messages.dialogCancel #</button></div></div>')({
            			messages: this.editor.options.messages,
            			showBrowser: e
            		})
            	},
            	redo: function ()
            	{
            		var e = this,
                        t = e.lockRange();
            		this.formatter.apply(t, this.attributes), e.releaseRange(t)
            	},
            	exec: function ()
            	{
            		function e(e)
            		{
            			var t = a.element,
                            n = t.find(m).val().replace(/ /g, "%20"),
                            i = t.find(h).val();
            			l.attributes = {
            				href: n,
            				innerHTML: "" !== i ? i : n
            			}, g = l.insertFile(b, c), o(e), l.change && l.change()
            		}

            		function o(e)
            		{
            			e.preventDefault(), a.destroy(), s.windowFromDocument(d.documentFromRange(c)).focus(), g || l.releaseRange(c)
            		}

            		function r(t)
            		{
            			t.keyCode == p.ENTER ? e(t) : t.keyCode == p.ESC && o(t)
            		}
            		var a, l = this,
                        c = l.lockRange(),
                        u = f(c),
                        g = !1,
                        b = u.length ? this.formatter.finder.findSuitable(u[0]) : null,
                        v = l.editor.options,
                        k = v.messages,
                        y = v.fileBrowser,
                        w = !!(n.ui.FileBrowser && y && y.transport && y.transport.read !== t),
                        x = {
                        	title: k.insertFile,
                        	visible: !1,
                        	resizable: w
                        };
            		this.expandImmutablesIn(c), x.close = o, w && (x.width = 750), a = this.createDialog(l._dialogTemplate(w), x).toggleClass("k-filebrowser-dialog", w).find(".k-dialog-insert").click(e).end().find(".k-dialog-close").click(o).end().find(".k-edit-field input").keydown(r).end().find(m).val(b ? b.getAttribute("href", 2) : "http://").end().find(h).val(b ? b.title : "").end().data("kendoWindow"), w && (l._fileBrowser = new n.ui.FileBrowser(a.element.find(".k-filebrowser"), i({}, y)), l._fileBrowser.bind("change", function (e)
            		{
            			"f" === e.selected.get("type") && a.element.find(m).val(this.value())
            		}), l._fileBrowser.bind("apply", e)), a.center().open(), a.element.find(m).focus().select()
            	}
            });
		n.ui.editor.FileCommand = g, a("insertFile", new o.Tool({
			command: g,
			template: new l({
				template: r.buttonTemplate,
				title: "Insert File"
			})
		}))
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/image.min", ["kendo.imagebrowser.min", "editor/link.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window.kendo,
            i = e.extend,
            o = n.ui.editor,
            r = o.EditorUtils,
            s = o.Dom,
            a = r.registerTool,
            l = o.ToolTemplate,
            d = o.RangeUtils,
            c = o.Command,
            u = n.keys,
            f = "#k-editor-image-url",
            p = "#k-editor-image-title",
            m = "#k-editor-image-width",
            h = "#k-editor-image-height",
            g = c.extend({
            	init: function (e)
            	{
            		var t = this;
            		c.fn.init.call(t, e), t.async = !0, t.attributes = {}
            	},
            	insertImage: function (e, t)
            	{
            		var n, i = this.attributes,
                        o = d.documentFromRange(t);
            		if (i.src && "http://" != i.src) {
            			if (n = function ()
            			{
                                setTimeout(function ()
            			{
                                    i.width || e.removeAttribute("width"), i.height || e.removeAttribute("height"), e.removeAttribute("complete")
            			})
            			}, !e) return e = s.create(o, "img", i), e.onload = e.onerror = n, t.deleteContents(), t.insertNode(e), e.nextSibling || s.insertAfter(o.createTextNode("\ufeff"), e), n(), t.setStartAfter(e), t.setEndAfter(e), d.selectRange(t), !0;
            			e.onload = e.onerror = n, s.attr(e, i), n()
            		}
            		return !1
            	},
            	_dialogTemplate: function (e)
            	{
            		return n.template('<div class="k-editor-dialog k-popup-edit-form k-edit-form-container"># if (showBrowser) { #<div class="k-filebrowser k-imagebrowser"></div># } #<div class=\'k-edit-label\'><label for="k-editor-image-url">#: messages.imageWebAddress #</label></div><div class=\'k-edit-field\'><input type="text" class="k-input k-textbox" id="k-editor-image-url"></div><div class=\'k-edit-label\'><label for="k-editor-image-title">#: messages.imageAltText #</label></div><div class=\'k-edit-field\'><input type="text" class="k-input k-textbox" id="k-editor-image-title"></div><div class=\'k-edit-label\'><label for="k-editor-image-width">#: messages.imageWidth #</label></div><div class=\'k-edit-field\'><input type="text" class="k-input k-textbox" id="k-editor-image-width"></div><div class=\'k-edit-label\'><label for="k-editor-image-height">#: messages.imageHeight #</label></div><div class=\'k-edit-field\'><input type="text" class="k-input k-textbox" id="k-editor-image-height"></div><div class="k-edit-buttons k-state-default"><button class="k-dialog-insert k-button k-primary">#: messages.dialogInsert #</button><button class="k-dialog-close k-button">#: messages.dialogCancel #</button></div></div>')({
            			messages: this.editor.options.messages,
            			showBrowser: e
            		})
            	},
            	redo: function ()
            	{
            		var e = this,
                        t = e.lockRange();
            		e.insertImage(d.image(t), t) || e.releaseRange(t)
            	},
            	exec: function ()
            	{
            		function e(e)
            		{
            			var t = a.element,
                            n = parseInt(t.find(m).val(), 10),
                            i = parseInt(t.find(h).val(), 10);
            			l.attributes = {
            				src: t.find(f).val().replace(/ /g, "%20"),
            				alt: t.find(p).val()
            			}, l.attributes.width = null, l.attributes.height = null, !isNaN(n) && n > 0 && (l.attributes.width = n), !isNaN(i) && i > 0 && (l.attributes.height = i), g = l.insertImage(b, c), o(e), l.change && l.change()
            		}

            		function o(e)
            		{
            			e.preventDefault(), a.destroy(), s.windowFromDocument(d.documentFromRange(c)).focus(), g || l.releaseRange(c)
            		}

            		function r(t)
            		{
            			t.keyCode == u.ENTER ? e(t) : t.keyCode == u.ESC && o(t)
            		}
            		var a, l = this,
                        c = l.lockRange(),
                        g = !1,
                        b = d.image(c),
                        v = b && b.getAttribute("width") || "",
                        k = b && b.getAttribute("height") || "",
                        y = l.editor.options,
                        w = y.messages,
                        x = y.imageBrowser,
                        C = !!(n.ui.ImageBrowser && x && x.transport && x.transport.read !== t),
                        T = {
                        	title: w.insertImage,
                        	visible: !1,
                        	resizable: C
                        };
            		this.expandImmutablesIn(c), T.close = o, C && (T.width = 750), a = this.createDialog(l._dialogTemplate(C), T).toggleClass("k-filebrowser-dialog", C).find(".k-dialog-insert").click(e).end().find(".k-dialog-close").click(o).end().find(".k-edit-field input").keydown(r).end().find(f).val(b ? b.getAttribute("src", 2) : "http://").end().find(p).val(b ? b.alt : "").end().find(m).val(v).end().find(h).val(k).end().data("kendoWindow"), C && (this._imageBrowser = new n.ui.ImageBrowser(a.element.find(".k-imagebrowser"), i({}, x)), this._imageBrowser.bind("change", function (e)
            		{
            			"f" === e.selected.get("type") && a.element.find(f).val(this.value())
            		}), this._imageBrowser.bind("apply", e)), a.center().open(), a.element.find(f).focus().select()
            	}
            });
		n.ui.editor.ImageCommand = g, a("insertImage", new o.Tool({
			command: g,
			template: new l({
				template: r.buttonTemplate,
				title: "Insert Image"
			})
		}))
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/components.min", ["editor/image.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window.kendo,
            i = n.ui.DropDownList,
            o = n.ui.editor.Dom,
            r = i.extend({
            	init: function (t, o)
            	{
            		var r = this;
            		i.fn.init.call(r, t, o), n.support.mobileOS.ios && (this._initSelectOverlay(), this.bind("dataBound", e.proxy(this._initSelectOverlay, this))), r.text(r.options.title), r.bind("open", function ()
            		{
            			if (r.options.autoSize) {
            				var e, t = r.list;
            				t.css({
            					whiteSpace: "nowrap",
            					width: "auto"
            				}), e = t.width(), e ? e += 20 : e = r._listWidth, t.css("width", e + n.support.scrollbar()), r._listWidth = e
            			}
            		})
            	},
            	options: {
            		name: "SelectBox",
            		index: -1
            	},
            	_initSelectOverlay: function ()
            	{
            		var t, i, o, r, s = this,
                        a = s.value(),
                        l = this.dataSource.view(),
                        d = "",
                        c = n.htmlEncode;
            		for (i = 0; i < l.length; i++) t = l[i], d += "<option value='" + c(t.value) + "'", t.value == a && (d += " selected"), d += ">" + c(t.text) + "</option>";
            		o = e("<select class='k-select-overlay'>" + d + "</select>"), r = e(this.element).closest(".k-widget"), r.next(".k-select-overlay").remove(), o.insertAfter(r), o.on("change", function ()
            		{
            			s.value(this.value), s.trigger("change")
            		})
            	},
            	value: function (e)
            	{
            		var n = this,
                        o = i.fn.value.call(n, e);
            		return e === t ? o : (i.fn.value.call(n) || n.text(n.options.title), t)
            	},
            	decorate: function (t)
            	{
            		var n, i, r, s, a = this,
                        l = a.dataSource,
                        d = l.data();
            		for (t && a.list.css("background-color", o.getEffectiveBackground(e(t))), n = 0; n < d.length; n++) i = d[n].tag || "span", r = d[n].className, s = o.inlineStyle(t, i, {
            			className: r
            		}), s = s.replace(/"/g, "'"), d[n].style = s + ";display:inline-block";
            		l.trigger("change")
            	}
            });
		n.ui.plugin(r), n.ui.editor.SelectBox = r
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/indent.min", ["editor/components.min"], e)
}(function ()
{
	! function (e, t)
	{
		function n(n, i)
		{
			var o = "rtl" == e(n).css("direction"),
                r = o ? "Right" : "Left",
                s = "td" != a.name(n) ? "margin" + r : "padding" + r;
			return i === t ? n.style[s] || 0 : (i > 0 ? n.style[s] = i + "px" : (n.style[s] = "", n.style.cssText || n.removeAttribute("style")), t)
		}
		var i = window.kendo,
            o = i.Class,
            r = e.extend,
            s = i.ui.editor,
            a = s.Dom,
            l = s.EditorUtils,
            d = l.registerTool,
            c = s.Command,
            u = s.Tool,
            f = s.ToolTemplate,
            p = s.RangeUtils,
            m = a.blockElements,
            h = s.BlockFormatFinder,
            g = s.BlockFormatter,
            b = o.extend({
            	init: function ()
            	{
            		this.finder = new h([{
            			tags: a.blockElements
            		}])
            	},
            	apply: function (t)
            	{
            		var i, o, r, s, l, d, c, u, f, p, m, h;
            		if (t = a.filterBy(t, a.htmlIndentSpace, !0), i = this.finder.findSuitable(t), o = [], i = this.mapImmutables(i), i.length) {
            			for (r = 0, s = i.length; r < s; r++) a.is(i[r], "li") ? e(i[r]).index() ? e.inArray(i[r].parentNode, o) < 0 && o.push(i[r]) : o.push(i[r].parentNode) : o.push(i[r]);
            			for (; o.length;)
            				if (l = o.shift(), a.is(l, "li"))
            					if (d = l.parentNode, c = e(l).prev("li"), u = c.find("ul,ol").last(), f = e(l).children("ul,ol")[0], f && c[0]) u[0] ? (u.append(l), u.append(e(f).children()), a.remove(f)) : (c.append(f), f.insertBefore(l, f.firstChild));
            					else
            						for (f = c.children("ul,ol")[0], f || (f = a.create(l.ownerDocument, a.name(d)), c.append(f)) ; l && l.parentNode == d;) f.appendChild(l), l = o.shift();
            				else
            					for (p = parseInt(n(l), 10) + 30, n(l, p), m = 0; m < o.length; m++) e.contains(l, o[m]) && o.splice(m, 1)
            		} else h = new g([{
            			tags: ["p"]
            		}], {
            			style: {
            				marginLeft: 30
            			}
            		}), h.apply(t)
            	},
            	mapImmutables: function (t)
            	{
            		if (this.immutables) {
            			var n = [];
            			return e.map(t, function (t)
            			{
            				var i = s.Immutables.immutableParent(t);
            				if (i) {
            					if (e.inArray(i, n) !== -1) return null;
            					n.push(i)
            				}
            				return i || t
            			})
            		}
            		return t
            	},
            	remove: function (t)
            	{
            		t = a.filterBy(t, a.htmlIndentSpace, !0);
            		var i, o, r, s, l, d, c, u, f = this.finder.findSuitable(t);
            		for (f = this.mapImmutables(f), o = 0, r = f.length; o < r; o++) {
            			if (c = e(f[o]), c.is("li")) {
            				if (s = c.parent(), l = s.parent(), l.is("li,ul,ol") && !n(s[0])) {
            					if (i && e.contains(i, l[0])) continue;
            					d = c.nextAll("li"), d.length && e(s[0].cloneNode(!1)).appendTo(c).append(d), l.is("li") ? c.insertAfter(l) : c.appendTo(l), s.children("li").length || s.remove();
            					continue
            				}
            				if (i == s[0]) continue;
            				i = s[0]
            			} else i = f[o];
            			u = parseInt(n(i), 10) - 30, n(i, u)
            		}
            	}
            }),
            v = c.extend({
            	init: function (t)
            	{
            		var n = this;
            		t.formatter = {
            			toggle: e.proxy(function (e)
            			{
            				var t = new b;
            				t.immutables = this.editor && this.editor.options.immutables, t.apply(p.nodes(e))
            			}, n)
            		}, c.fn.init.call(this, t)
            	}
            }),
            k = c.extend({
            	init: function (t)
            	{
            		var n = this;
            		t.formatter = {
            			toggle: e.proxy(function (e)
            			{
            				var t = new b;
            				t.immutables = this.editor && this.editor.options.immutables, t.remove(p.nodes(e))
            			}, n)
            		}, c.fn.init.call(this, t)
            	}
            }),
            y = u.extend({
            	init: function (e)
            	{
            		u.fn.init.call(this, e), this.finder = new h([{
            			tags: m
            		}])
            	},
            	initialize: function (t, n)
            	{
            		u.fn.initialize.call(this, t, n), e.extend(this.options, {
            			immutables: n.editor && n.editor.options.immutables
            		}), t.addClass("k-state-disabled")
            	},
            	update: function (i, o)
            	{
            		var r, l, d, c, u, f, p = this.finder.findSuitable(o);
            		for (d = 0, c = p.length; d < c; d++)
            			if (u = p[d], this.options.immutables && (f = s.Immutables.immutableParent(u), f && (u = f)), r = n(u), r || (l = e(u).parents("ul,ol").length, r = a.is(u, "li") && (l > 1 || n(u.parentNode)) || a.ofType(u, ["ul", "ol"]) && l > 0), r) return i.removeClass("k-state-disabled"), t;
            		i.addClass("k-state-disabled").removeClass("k-state-hover")
            	}
            });
		r(s, {
			IndentFormatter: b,
			IndentCommand: v,
			OutdentCommand: k,
			OutdentTool: y
		}), d("indent", new u({
			command: v,
			template: new f({
				template: l.buttonTemplate,
				title: "Indent"
			})
		})), d("outdent", new y({
			command: k,
			template: new f({
				template: l.buttonTemplate,
				title: "Outdent"
			})
		}))
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/viewhtml.min", ["editor/indent.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window.kendo,
            i = e.extend,
            o = n.ui.editor,
            r = o.EditorUtils,
            s = o.Command,
            a = o.Tool,
            l = o.ToolTemplate,
            d = s.extend({
            	init: function (e)
            	{
            		var t = this;
            		t.options = e, s.fn.init.call(t, e), t.attributes = null, t.async = !0
            	},
            	exec: function ()
            	{
            		function i(e)
            		{
            			l.deserialization.immutables = a.immutables, a.value(u.find(f).val()), l.deserialization.immutables = t, o(e), s.change && s.change(), a.trigger("change")
            		}

            		function o(e)
            		{
            			e.preventDefault(), u.data("kendoWindow").destroy(), a.immutables && (a.immutables.serializedImmutables = {}), a.focus()
            		}
            		var r, s = this,
                        a = s.editor,
                        l = a.options,
                        c = a.options.messages,
                        u = e(n.template(d.template)(c)).appendTo(document.body),
                        f = ".k-editor-textarea";
            		l.serialization.immutables = a.immutables, r = d.indent(a.value()), l.serialization.immutables = t, this.createDialog(u, {
            			title: c.viewHtml,
            			close: o,
            			visible: !1
            		}).find(f).val(r).end().find(".k-dialog-update").click(i).end().find(".k-dialog-close").click(o).end().data("kendoWindow").center().open(), u.find(f).focus()
            	}
            });
		i(d, {
			template: "<div class='k-editor-dialog k-popup-edit-form k-edit-form-container k-viewhtml-dialog'><textarea class='k-editor-textarea k-input'></textarea><div class='k-edit-buttons k-state-default'><button class='k-dialog-update k-button k-primary'>#: dialogUpdate #</button><button class='k-dialog-close k-button'>#: dialogCancel #</button></div></div>",
			indent: function (e)
			{
				return e.replace(/<\/(p|li|ul|ol|h[1-6]|table|tr|td|th)>/gi, "</$1>\n").replace(/<(ul|ol)([^>]*)><li/gi, "<$1$2>\n<li").replace(/<br \/>/gi, "<br />\n").replace(/\n$/, "")
			}
		}), n.ui.editor.ViewHtmlCommand = d, o.EditorUtils.registerTool("viewHtml", new a({
			command: d,
			template: new l({
				template: r.buttonTemplate,
				title: "View HTML"
			})
		}))
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/formatting.min", ["editor/viewhtml.min"], e)
}(function ()
{
	! function (e)
	{
		function t(e)
		{
			var t, o, r = l.closestEditableOfType(e, ["li"]);
			r && (t = new i.ListFormatter(l.name(r.parentNode)), o = n.ui.editor.W3CRange.fromNode(e), o.selectNode(r), t.toggle(o))
		}
		var n = window.kendo,
            i = n.ui.editor,
            o = i.Tool,
            r = i.ToolTemplate,
            s = i.DelayedExecutionTool,
            a = i.Command,
            l = i.Dom,
            d = i.EditorUtils,
            c = i.RangeUtils,
            u = d.registerTool,
            f = s.extend({
            	init: function (e)
            	{
            		var t = this;
            		o.fn.init.call(t, n.deepExtend({}, t.options, e)), t.type = "kendoSelectBox", t.finder = {
            			getFormat: function ()
            			{
            				return ""
            			}
            		}
            	},
            	options: {
            		items: [{
            			text: "Paragraph",
            			value: "p"
            		}, {
            			text: "Quotation",
            			value: "blockquote"
            		}, {
            			text: "Heading 1",
            			value: "h1"
            		}, {
            			text: "Heading 2",
            			value: "h2"
            		}, {
            			text: "Heading 3",
            			value: "h3"
            		}, {
            			text: "Heading 4",
            			value: "h4"
            		}, {
            			text: "Heading 5",
            			value: "h5"
            		}, {
            			text: "Heading 6",
            			value: "h6"
            		}],
            		width: 110
            	},
            	toFormattingItem: function (e)
            	{
            		var t, n = e.value;
            		return n ? e.tag || e.className ? e : (t = n.indexOf("."), 0 === t ? e.className = n.substring(1) : t == -1 ? e.tag = n : (e.tag = n.substring(0, t), e.className = n.substring(t + 1)), e) : e
            	},
            	command: function (t)
            	{
            		var n = this,
                        o = t.value;
            		return o = this.toFormattingItem(o), new i.FormatCommand({
            			range: t.range,
            			formatter: function ()
            			{
            				var t, r = (o.tag || o.context || "span").split(","),
                                s = [{
                                	tags: r,
                                	attr: {
                                		className: o.className || ""
                                	}
                                }];
            				return t = e.inArray(r[0], l.inlineElements) >= 0 ? new i.GreedyInlineFormatter(s) : new i.GreedyBlockFormatter(s), t.editor = n.editor, t
            			}
            		})
            	},
            	initialize: function (e, t)
            	{
            		var i = t.editor,
                        r = this.options,
                        s = r.name,
                        a = this;
            		a.editor = i, e.width(r.width), e.kendoSelectBox({
            			dataTextField: "text",
            			dataValueField: "value",
            			dataSource: r.items || i.options[s],
            			title: i.options.messages[s],
            			autoSize: !0,
            			change: function ()
            			{
            				var e = this.dataItem();
            				e && o.exec(i, s, e.toJSON())
            			},
            			dataBound: function ()
            			{
            				var e, t = this.dataSource.data();
            				for (e = 0; e < t.length; e++) t[e] = a.toFormattingItem(t[e])
            			},
            			highlightFirst: !1,
            			template: n.template('<span unselectable="on" style="display:block;#=(data.style||"")#">#:data.text#</span>')
            		}), e.addClass("k-decorated").closest(".k-widget").removeClass("k-" + s).find("*").addBack().attr("unselectable", "on")
            	},
            	getFormattingValue: function (t, n)
            	{
            		var i, o, r, s, a, l, d;
            		for (i = 0; i < t.length; i++)
            			if (o = t[i], r = o.tag || o.context || "", s = o.className ? "." + o.className : "", a = r + s, l = e(n[0]).closest(a)[0]) {
            				if (1 == n.length) return o.value;
            				for (d = 1; d < n.length && e(n[d]).closest(a)[0]; d++)
            					if (d == n.length - 1) return o.value
            			}
            		return ""
            	},
            	update: function (t, n)
            	{
            		var i, o, r, a, d, c = e(t).data(this.type);
            		if (c && (i = c.dataSource, o = i.data(), d = l.commonAncestor.apply(null, n), d == l.closestEditable(d) || this._ancestor != d)) {
            			for (this._ancestor = d, r = 0; r < o.length; r++) a = o[r].context, o[r].visible = !a || !!e(d).closest(a).length;
            			i.filter([{
            				field: "visible",
            				operator: "eq",
            				value: !0
            			}]), s.fn.update.call(this, t, n), c.value(this.getFormattingValue(i.view(), n)), c.wrapper.toggleClass("k-state-disabled", !i.view().length)
            		}
            	},
            	destroy: function ()
            	{
            		this._ancestor = null
            	}
            }),
            p = a.extend({
            	exec: function ()
            	{
            		var e, t, n, i = this.lockRange(!0);
            		for (this.tagsToClean = this.options.remove || "strong,em,span,sup,sub,del,b,i,u,font".split(","), c.wrapSelectedElements(i), e = c.mapAll(i, function (e)
            		{
                            return e
            		}), t = e.length - 1; t >= 0; t--) n = e[t], this.immutableParent(n) || this.clean(n);
            		this.releaseRange(i)
            	},
            	clean: function (n)
            	{
            		var o, r, s, a, d;
            		if (n && !l.isMarker(n)) {
            			if (o = l.name(n), "ul" == o || "ol" == o)
            				for (r = new i.ListFormatter(o), s = n.previousSibling, a = n.nextSibling, r.unwrap(n) ; s && s != a; s = s.nextSibling) this.clean(s);
            			else if ("blockquote" == o) l.changeTag(n, "p");
            			else if (1 != n.nodeType || l.insignificant(n)) t(n);
            			else {
            				for (d = n.childNodes.length - 1; d >= 0; d--) this.clean(n.childNodes[d]);
            				n.removeAttribute("style"), n.removeAttribute("class")
            			}
            			e.inArray(o, this.tagsToClean) > -1 && l.unwrap(n)
            		}
            	},
            	immutableParent: function (e)
            	{
            		return this.immutables() && i.Immutables.immutableParent(e)
            	}
            });
		e.extend(i, {
			FormattingTool: f,
			CleanFormatCommand: p
		}), u("formatting", new f({
			template: new r({
				template: d.dropDownListTemplate,
				title: "Format"
			})
		})), u("cleanFormatting", new o({
			command: p,
			template: new r({
				template: d.buttonTemplate,
				title: "Clean formatting"
			})
		}))
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/toolbar.min", ["editor/formatting.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n, i = window.kendo,
            o = i.ui,
            r = o.editor,
            s = o.Widget,
            a = e.extend,
            l = e.proxy,
            d = i.keys,
            c = ".kendoEditor",
            u = i.ui.editor.EditorUtils,
            f = i.ui.editor.ToolTemplate,
            p = i.ui.editor.Tool,
            m = i._outerWidth,
            h = i._outerHeight,
            g = "overflowAnchor",
            b = ".k-tool-group:visible a.k-tool:not(.k-state-disabled),.k-tool.k-overflow-anchor,.k-tool-group:visible .k-widget.k-colorpicker,.k-tool-group:visible .k-selectbox,.k-tool-group:visible .k-dropdown,.k-tool-group:visible .k-combobox .k-input",
            v = p.extend({
            	initialize: function (t, n)
            	{
            		t.attr({
            			unselectable: "on"
            		});
            		var i = n.editor.toolbar;
            		t.on("click", e.proxy(function ()
            		{
            			this.overflowPopup.toggle()
            		}, i))
            	},
            	options: {
            		name: g
            	},
            	command: e.noop,
            	update: e.noop,
            	destroy: e.noop
            });
		u.registerTool(g, new v({
			key: "",
			ctrl: !0,
			template: new f({
				template: u.overflowAnchorTemplate
			})
		})), n = s.extend({
			init: function (e, t)
			{
				var n = this;
				t = a({}, t, {
					name: "EditorToolbar"
				}), s.fn.init.call(n, e, t), t.popup && n._initPopup(), t.resizable && t.resizable.toolbar && (n._resizeHandler = i.onResize(function ()
				{
					n.resize()
				}), n.element.addClass("k-toolbar-resizable"))
			},
			events: ["execute"],
			groups: {
				basic: ["bold", "italic", "underline", "strikethrough"],
				scripts: ["subscript", "superscript"],
				alignment: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
				links: ["insertImage", "insertFile", "createLink", "unlink"],
				lists: ["insertUnorderedList", "insertOrderedList", "indent", "outdent"],
				tables: ["createTable", "addColumnLeft", "addColumnRight", "addRowAbove", "addRowBelow", "deleteRow", "deleteColumn"],
				advanced: ["viewHtml", "cleanFormatting", "print", "pdf"],
				fonts: ["fontName", "fontSize"],
				colors: ["foreColor", "backColor"]
			},
			overflowFlaseTools: ["formatting", "fontName", "fontSize", "foreColor", "backColor", "insertHtml"],
			_initPopup: function ()
			{
				var t = this;
				this.window = e(this.element).wrap("<div class='editorToolbarWindow k-header' />").parent().prepend("<button class='k-button k-button-bare k-editortoolbar-dragHandle'><span class='k-icon k-i-move' /></button>").kendoWindow({
					title: !1,
					resizable: !1,
					draggable: {
						dragHandle: ".k-editortoolbar-dragHandle"
					},
					animation: {
						open: {
							effects: "fade:in"
						},
						close: {
							effects: "fade:out"
						}
					},
					minHeight: 42,
					visible: !1,
					autoFocus: !1,
					actions: [],
					dragend: function ()
					{
						this._moved = !0
					}
				}).on("mousedown", function (n)
				{
					e(n.target).is(".k-icon") || (t.preventPopupHide = !0)
				}).on("focusout", function ()
				{
					t.options.editor.element.focusout()
				}).data("kendoWindow")
			},
			_toggleOverflowStyles: function (e, t)
			{
				e.find("li").toggleClass("k-item k-state-default", t).find(".k-tool:not(.k-state-disabled),.k-overflow-button").toggleClass("k-overflow-button k-button", t)
			},
			_initOverflowPopup: function (t)
			{
				var n = this,
                    i = "<ul class='k-editor-overflow-popup k-overflow-container k-list-container'></ul>";
				n.overflowPopup = e(i).appendTo("body").kendoPopup({
					anchor: t,
					origin: "bottom right",
					position: "top right",
					copyAnchorStyles: !1,
					open: function (e)
					{
						this.element.is(":empty") && e.preventDefault(), n._toggleOverflowStyles(this.element, !0)
					},
					activate: l(n.focusOverflowPopup, n)
				}).data("kendoPopup")
			},
			items: function ()
			{
				var e, t, n = this.options.resizable && this.options.resizable.toolbar;
				return t = this.element.children().find("> *, select"), n && (e = this.overflowPopup, t = t.add(e.element.children().find("> *"))), t
			},
			focused: function ()
			{
				return this.element.find(".k-state-focused").length > 0 || this.preventPopupHide || this.overflowPopup && this.overflowPopup.visible()
			},
			toolById: function (e)
			{
				var t, n = this.tools;
				for (t in n)
					if (t.toLowerCase() == e) return n[t]
			},
			toolGroupFor: function (t)
			{
				var n, i = this.groups;
				if (this.isCustomTool(t)) return "custom";
				for (n in i)
					if (e.inArray(t, i[n]) >= 0) return n
			},
			bindTo: function (t)
			{
				var n = this,
                    i = n.window;
				n._editor && n._editor.unbind("select", l(n.resize, n)), n._editor = t, n.options.resizable && n.options.resizable.toolbar && t.options.tools.push(g), n.tools = n.expandTools(t.options.tools), n.render(), n.element.find(".k-combobox .k-input").keydown(function (t)
				{
					var n = e(this).closest(".k-combobox").data("kendoComboBox"),
                        i = t.keyCode;
					i == d.RIGHT || i == d.LEFT ? n.close() : i == d.DOWN && (n.dropDown.isOpened() || (t.stopImmediatePropagation(), n.open()))
				}), n._attachEvents(), n.items().each(function ()
				{
					var i, o = n._toolName(this),
                        r = "more" !== o ? n.tools[o] : n.tools.overflowAnchor,
                        s = r && r.options,
                        a = t.options.messages,
                        l = s && s.tooltip || a[o],
                        d = e(this);
					r && r.initialize && ("fontSize" != o && "fontName" != o || (i = a[o + "Inherit"], d.find("input").val(i).end().find("span.k-input").text(i).end()), r.initialize(d, {
						title: n._appendShortcutSequence(l, r),
						editor: n._editor
					}), d.closest(".k-widget", n.element).addClass("k-editor-widget"), d.closest(".k-colorpicker", n.element).next(".k-colorpicker").addClass("k-editor-widget"))
				}), t.bind("select", l(n.resize, n)), n.update(), i && i.wrapper.css({
					top: "",
					left: "",
					width: ""
				})
			},
			show: function ()
			{
				var e, t, n, i = this,
                    o = i.window,
                    r = i.options.editor;
				o && (e = o.wrapper, t = r.element, e.is(":visible") && i.window.options.visible || (e[0].style.width || e.width(m(t) - parseInt(e.css("border-left-width"), 10) - parseInt(e.css("border-right-width"), 10)), o._moved || (n = t.offset(), e.css({
					top: Math.max(0, parseInt(n.top, 10) - h(e) - parseInt(i.window.element.css("padding-bottom"), 10)),
					left: Math.max(0, parseInt(n.left, 10))
				})), o.open()))
			},
			hide: function ()
			{
				this.window && this.window.close()
			},
			focus: function ()
			{
				var e = "tabIndex",
                    t = this.element,
                    n = this._editor.element.attr(e);
				t.attr(e, n || 0).focus().find(b).first().focus(), n || 0 === n || t.removeAttr(e)
			},
			focusOverflowPopup: function ()
			{
				var e = "tabIndex",
                    t = this.overflowPopup.element,
                    n = this._editor.element.attr(e);
				t.closest(".k-animation-container").addClass("k-overflow-wrapper"), t.attr(e, n || 0).find(b).first().focus(), n || 0 === n || t.removeAttr(e)
			},
			_appendShortcutSequence: function (e, t)
			{
				if (!t.key) return e;
				var n = e + " (";
				return t.ctrl && (n += "Ctrl + "), t.shift && (n += "Shift + "), t.alt && (n += "Alt + "), n += t.key + ")"
			},
			_nativeTools: ["insertLineBreak", "insertParagraph", "redo", "undo", "autoLink"],
			tools: {},
			isCustomTool: function (e)
			{
				return !(e in i.ui.Editor.defaultTools)
			},
			expandTools: function (t)
			{
				var n, o, s, l, d = this._nativeTools,
                    c = i.deepExtend({}, i.ui.Editor.defaultTools),
                    u = {};
				for (o = 0; o < t.length; o++) n = t[o], l = n.name, e.isPlainObject(n) ? l && c[l] ? (u[l] = a({}, c[l]), a(u[l].options, n)) : (s = a({
					cssClass: "k-i-custom",
					type: "button",
					title: ""
				}, n), s.name || (s.name = "custom"), s.cssClass = "k-" + s.name, s.template || "button" != s.type || (s.template = r.EditorUtils.buttonTemplate, s.title = s.title || s.tooltip), u[l] = {
					options: s
				}) : c[n] && (u[n] = c[n]);
				for (o = 0; o < d.length; o++) u[d[o]] || (u[d[o]] = c[d[o]]);
				return u
			},
			render: function ()
			{
				function t(t)
				{
					var n;
					return t.getHtml ? n = t.getHtml() : (e.isFunction(t) || (t = i.template(t)), n = t(r)), e.trim(n)
				}

				function n()
				{
					f.children().length && (x && (f.data("position", w), w++), f.appendTo(v))
				}

				function o(t)
				{
					t !== g ? (f = e("<li class='k-tool-group' role='presentation' />"), f.data("overflow", e.inArray(t, C) === -1)) : f = e("<li class='k-overflow-tools' />")
				}
				var r, s, a, d, c, u, f, p, m = this,
                    h = m.tools,
                    b = m._editor.element,
                    v = m.element.empty(),
                    k = m._editor.options.tools,
                    y = i.support.browser,
                    w = 0,
                    x = m.options.resizable && m.options.resizable.toolbar,
                    C = this.overflowFlaseTools;
				for (v.empty(), k.length && (d = k[0].name || k[0]), o(d, C), p = 0; p < k.length; p++) d = k[p].name || k[p], r = h[d] && h[d].options, !r && e.isPlainObject(d) && (r = d), s = r && r.template, "break" == d && (n(), e("<li class='k-row-break' />").appendTo(m.element), o(d, C)), s && (u = m.toolGroupFor(d), c == u && d != g || (n(), o(d, C), c = u), s = t(s), a = e(s).appendTo(f), "custom" == u && (n(), o(d, C)), r.exec && a.hasClass("k-tool") && a.click(l(r.exec, b[0])));
				n(), e(m.element).children(":has(> .k-tool)").addClass("k-button-group"), m.options.popup && y.msie && y.version < 9 && m.window.wrapper.find("*").attr("unselectable", "on"), m.updateGroups(), x && m._initOverflowPopup(m.element.find(".k-overflow-anchor")), m.angular("compile", function ()
				{
					return {
						elements: m.element
					}
				})
			},
			updateGroups: function ()
			{
				e(this.element).children().each(function ()
				{
					e(this).children().filter(function ()
					{
						return !e(this).hasClass("k-state-disabled")
					}).removeClass("k-group-end").first().addClass("k-group-start").end().last().addClass("k-group-end").end()
				})
			},
			decorateFrom: function (t)
			{
				this.items().filter(".k-decorated").each(function ()
				{
					var n = e(this).data("kendoSelectBox");
					n && n.decorate(t)
				})
			},
			destroy: function ()
			{
				s.fn.destroy.call(this);
				var e, t = this.tools;
				for (e in t) t[e].destroy && t[e].destroy();
				this.window && this.window.destroy(), this._resizeHandler && i.unbindResize(this._resizeHandler), this.overflowPopup && this.overflowPopup.destroy()
			},
			_attachEvents: function ()
			{
				var t = this,
                    n = t.overflowPopup ? t.overflowPopup.element : e([]);
				t.attachToolsEvents(t.element.add(n))
			},
			attachToolsEvents: function (t)
			{
				var n = this,
                    i = "[role=button].k-tool",
                    o = i + ":not(.k-state-disabled)",
                    r = i + ".k-state-disabled";
				t.off(c).on("mouseenter" + c, o, function ()
				{
					e(this).addClass("k-state-hover")
				}).on("mouseleave" + c, o, function ()
				{
					e(this).removeClass("k-state-hover")
				}).on("mousedown" + c, i, function (e)
				{
					e.preventDefault()
				}).on("keydown" + c, b, function (t)
				{
					function i(e, t, n)
					{
						var i = t.find(b),
                            o = i.index(s) + e;
						return n && (o = Math.max(0, Math.min(i.length - 1, o))), i[o]
					}
					var o, r, s = this,
                        a = n.options.resizable && n.options.resizable.toolbar,
                        l = t.keyCode;
					l == d.RIGHT || l == d.LEFT ? e(s).hasClass(".k-dropdown") || (o = i(l == d.RIGHT ? 1 : -1, n.element, !0)) : !a || l != d.UP && l != d.DOWN ? l == d.ESC ? (n.overflowPopup && n.overflowPopup.visible() && n.overflowPopup.close(), o = n._editor) : l != d.TAB || t.ctrlKey || t.altKey || (r = a && e(s.parentElement).hasClass("k-overflow-tool-group") ? n.overflowPopup.element : n.element, t.shiftKey ? o = i(-1, r) : (o = i(1, r), o || (o = n._editor))) : o = i(l == d.DOWN ? 1 : -1, n.overflowPopup.element, !0), o && (t.preventDefault(), o.focus())
				}).on("click" + c, o, function (t)
				{
					var i = e(this);
					t.preventDefault(), t.stopPropagation(), i.removeClass("k-state-hover"), i.is("[data-popup]") || n._editor.exec(n._toolName(this))
				}).on("click" + c, r, function (e)
				{
					e.preventDefault()
				})
			},
			_toolName: function (t)
			{
				var n, o, r;
				if (t) return n = t.className, /k-tool\b/i.test(n) && (n = t.firstChild.className), o = e.grep(n.split(" "), function (e)
				{
					return !/^k-(widget|tool|tool-icon|icon|state-hover|header|combobox|dropdown|selectbox|colorpicker)$/i.test(e)
				}), o[0] ? (r = o[0], r.indexOf("k-i-") >= 0 ? i.toCamelCase(r.substring(r.indexOf("k-i-") + 4)) : r.substring(r.lastIndexOf("-") + 1)) : "custom"
			},
			refreshTools: function ()
			{
				var t = this,
                    n = i.ui.editor,
                    o = t._editor,
                    r = o.getRange(),
                    s = n.RangeUtils.textNodes(r),
                    a = o.options.immutables,
                    l = t._immutablesContext(r);
				s = n.Dom.filterBy(s, n.Dom.htmlIndentSpace, !0), s.length || (s = [r.startContainer]), t.items().each(function ()
				{
					var n, i = t.tools[t._toolName(this)];
					i && (n = e(this), i.update && i.update(n, s), a && t._updateImmutablesState(i, n, l))
				}), this.update()
			},
			_immutablesContext: function (e)
			{
				if (this._editor.options.immutables) {
					var t = i.ui.editor;
					return e.collapsed ? t.Immutables.immutablesContext(e) : 0 === t.RangeUtils.editableTextNodes(e).length
				}
			},
			_updateImmutablesState: function (n, i, o)
			{
				var s, a, l, d, c, u = n.name,
                    f = i,
                    p = n.options.trackImmutables;
				if (p === t && (p = e.inArray(u, r.Immutables.toolsToBeUpdated) > -1), p) {
					if (s = o ? "none" : "", !i.is(".k-tool")) {
						a = i.data();
						for (l in a)
							if (l.match(/^kendo[A-Z][a-zA-Z]*/)) {
								d = a[l], f = d.wrapper;
								break
							}
					}
					f.css("display", s), c = f.closest("li"), 0 === c.children(":visible").length && c.css("display", s)
				}
			},
			update: function ()
			{
				this.updateGroups()
			},
			_resize: function (e)
			{
				var t = e.width,
                    n = this.options.resizable && this.options.resizable.toolbar,
                    i = this.overflowPopup;
				this.refreshTools(), n && (i.visible() && i.close(!0), this._refreshWidths(), this._shrink(t), this._stretch(t), this._toggleOverflowStyles(this.element, !1), this._toggleOverflowStyles(this.overflowPopup.element, !0), this.element.children("li.k-overflow-tools").css("visibility", i.element.is(":empty") ? "hidden" : "visible"))
			},
			_refreshWidths: function ()
			{
				this.element.children("li").each(function (t, n)
				{
					var i = e(n);
					i.data("outerWidth", m(i, !0))
				})
			},
			_shrink: function (e)
			{
				var t, n, i;
				if (e < this._groupsWidth())
					for (n = this._visibleGroups().filter(":not(.k-overflow-tools)"), i = n.length - 1; i >= 0 && (t = n.eq(i), !(e > this._groupsWidth())) ; i--) this._hideGroup(t)
			},
			_stretch: function (e)
			{
				var t, n, i;
				if (e > this._groupsWidth())
					for (n = this._hiddenGroups(), i = 0; i < n.length && (t = n.eq(i), !(e < this._groupsWidth()) && this._showGroup(t, e)) ; i++);
			},
			_hiddenGroups: function ()
			{
				var t = this.overflowPopup,
                    n = this.element.children("li.k-tool-group").filter(":hidden");
				return n = n.add(t.element.children("li")), n.sort(function (t, n)
				{
					return e(t).data("position") > e(n).data("position") ? 1 : -1
				}), n
			},
			_visibleGroups: function ()
			{
				return this.element.children("li.k-tool-group, li.k-overflow-tools").filter(":visible")
			},
			_groupsWidth: function ()
			{
				var t = 0;
				return this._visibleGroups().each(function ()
				{
					t += e(this).data("outerWidth")
				}), Math.ceil(t)
			},
			_hideGroup: function (e)
			{
				if (e.data("overflow")) {
					var t = this.overflowPopup;
					e.detach().prependTo(t.element).addClass("k-overflow-tool-group")
				} else e.hide()
			},
			_showGroup: function (t, n)
			{
				var i, o;
				return !!(t.length && n > this._groupsWidth() + t.data("outerWidth")) && (t.hasClass("k-overflow-tool-group") ? (i = t.data("position"), 0 === i ? t.detach().prependTo(this.element) : (o = this.element.children().filter(function (t, n)
				{
					return e(n).data("position") === i - 1
				}), t.detach().insertAfter(o)), t.removeClass("k-overflow-tool-group")) : t.show(), !0)
			}
		}), e.extend(r, {
			Toolbar: n
		})
	}(window.jQuery || window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/tables.min", ["editor/toolbar.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window.kendo,
            i = e.extend,
            o = e.proxy,
            r = n.ui.editor,
            s = r.Dom,
            a = r.EditorUtils,
            l = r.RangeUtils,
            d = r.Command,
            c = "kendoEditor",
            u = "k-state-active",
            f = "k-state-selected",
            p = r.Tool,
            m = r.ToolTemplate,
            h = r.InsertHtmlCommand,
            g = r.BlockFormatFinder,
            b = r.EditorUtils.registerTool,
            v = n.getTouches,
            k = n.template,
            y = "<td style='width:#=width#%;'>#=content#</td>",
            w = new g([{
            	tags: ["table"]
            }]),
            x = h.extend({
            	init: function (t)
            	{
            		var n = e.extend({
            			postProcess: this.postProcess,
            			skipCleaners: !0
            		}, t || {});
            		h.fn.init.call(this, n)
            	},
            	_tableHtml: function (e, t)
            	{
            		var n, i;
            		return e = e || 1, t = t || 1, n = k(y)({
            			width: 100 / t,
            			content: r.emptyTableCellContent
            		}), i = 100 / e, "<table class='k-table' data-last>" + Array(e + 1).join("<tr style='height:" + i + "%;'>" + Array(t + 1).join(n) + "</tr>") + "</table>"
            	},
            	postProcess: function (t, n)
            	{
            		var i = e("table[data-last]", t.document).removeAttr("data-last");
            		n.setStart(i.find("td")[0], 0), n.collapse(!0), t.selectRange(n)
            	},
            	exec: function ()
            	{
            		var e = this.options;
            		e.html = this._tableHtml(e.rows, e.columns), h.fn.exec.call(this)
            	}
            }),
            C = p.extend({
            	initialize: function (t, n)
            	{
            		var i, s, l, d;
            		p.fn.initialize.call(this, t, n), i = e(this.options.popupTemplate).appendTo("body").kendoPopup({
            			anchor: t,
            			copyAnchorStyles: !1,
            			open: o(this._open, this),
            			activate: o(this._activate, this),
            			close: o(this._close, this)
            		}).data("kendoPopup"), t.click(o(this._toggle, this)).keydown(o(this._keydown, this)), s = this._editor = n.editor, this._popup = i, l = new r.TableWizardTool({
            			template: new m({
            				template: a.buttonTemplate,
            				title: s.options.messages.tableWizard
            			}),
            			command: r.TableWizardCommand,
            			insertNewTable: !0
            		}), b("tableWizardInsert", l), d = e("<div class='k-editor-toolbar'>" + l.options.template.getHtml() + "</div>"), d.appendTo(i.element), s.toolbar && s.toolbar.attachToolsEvents(d)
            	},
            	popup: function ()
            	{
            		return this._popup
            	},
            	_activate: e.noop,
            	_open: function ()
            	{
            		this._popup.options.anchor.addClass(u)
            	},
            	_close: function ()
            	{
            		this._popup.options.anchor.removeClass(u)
            	},
            	_keydown: function (e)
            	{
            		var t = n.keys,
                        i = e.keyCode;
            		i == t.DOWN && e.altKey ? this._popup.open() : i == t.ESC && this._popup.close()
            	},
            	_toggle: function (t)
            	{
            		var n = e(t.target).closest(".k-tool");
            		n.hasClass("k-state-disabled") || this.popup().toggle()
            	},
            	update: function (e)
            	{
            		var t = this.popup();
            		t.wrapper && "block" == t.wrapper.css("display") && t.close(), e.removeClass("k-state-hover")
            	},
            	destroy: function ()
            	{
            		this._popup.destroy()
            	}
            }),
            T = C.extend({
            	init: function (t)
            	{
            		this.cols = 8, this.rows = 6, C.fn.init.call(this, e.extend(t, {
            			command: x,
            			popupTemplate: "<div class='k-ct-popup'>" + Array(this.cols * this.rows + 1).join("<span class='k-ct-cell k-state-disabled' />") + "<div class='k-status'></div></div>"
            		}))
            	},
            	_activate: function ()
            	{
            		function t(t)
            		{
            			var n = e(window);
            			return {
            				row: Math.floor((t.clientY + n.scrollTop() - u.top) / o) + 1,
            				col: Math.floor((t.clientX + n.scrollLeft() - u.left) / i) + 1
            			}
            		}
            		var i, o, r = this,
                        s = r._popup.element,
                        a = s.find(".k-ct-cell"),
                        l = a.eq(0),
                        d = a.eq(a.length - 1),
                        u = n.getOffset(l),
                        f = n.getOffset(d),
                        p = r.cols,
                        m = r.rows;
            		s.find("*").addBack().attr("unselectable", "on"), f.left += d[0].offsetWidth, f.top += d[0].offsetHeight, i = (f.left - u.left) / p, o = (f.top - u.top) / m, s.autoApplyNS(c).on("mousemove", function (e)
            		{
            			r._setTableSize(t(e))
            		}).on("mouseleave", function ()
            		{
            			r._setTableSize()
            		}).on("down", function (e)
            		{
            			e.preventDefault();
            			var n = v(e)[0];
            			r._exec(t(n.location))
            		})
            	},
            	_valid: function (e)
            	{
            		return e && e.row > 0 && e.col > 0 && e.row <= this.rows && e.col <= this.cols
            	},
            	_exec: function (e)
            	{
            		this._valid(e) && (this._editor.exec("createTable", {
            			rows: e.row,
            			columns: e.col
            		}), this._popup.close())
            	},
            	_setTableSize: function (t)
            	{
            		var i = this._popup.element,
                        o = i.find(".k-status"),
                        r = i.find(".k-ct-cell"),
                        s = this.cols,
                        a = this._editor.options.messages;
            		this._valid(t) ? (o.text(n.format(a.createTableHint, t.row, t.col)), r.each(function (n)
            		{
            			e(this).toggleClass(f, n % s < t.col && n / s < t.row)
            		})) : (o.text(a.dialogCancel), r.removeClass(f))
            	},
            	_keydown: function (e)
            	{
            		var t, i, o, r, s, a, l, d;
            		C.fn._keydown.call(this, e), this._popup.visible() && (t = n.keys, i = e.keyCode, o = this._popup.element.find(".k-ct-cell"), r = Math.max(o.filter(".k-state-selected").last().index(), 0), s = Math.floor(r / this.cols), a = r % this.cols, l = !1, i != t.DOWN || e.altKey ? i == t.UP ? (l = !0, s--) : i == t.RIGHT ? (l = !0, a++) : i == t.LEFT && (l = !0, a--) : (l = !0, s++), d = {
            			row: Math.max(1, Math.min(this.rows, s + 1)),
            			col: Math.max(1, Math.min(this.cols, a + 1))
            		}, i == t.ENTER ? this._exec(d) : this._setTableSize(d), l && (e.preventDefault(), e.stopImmediatePropagation()))
            	},
            	_open: function ()
            	{
            		var e = this._editor.options.messages;
            		C.fn._open.call(this), this.popup().element.find(".k-status").text(e.dialogCancel).end().find(".k-ct-cell").removeClass(f)
            	},
            	_close: function ()
            	{
            		C.fn._close.call(this), this.popup().element.off("." + c)
            	}
            }),
            _ = d.extend({
            	exec: function ()
            	{
            		for (var e, t, n, i, o = this.lockRange(!0), a = o.endContainer;
                        "td" != s.name(a) ;) a = a.parentNode;
            		if (!this.immutables() || !r.Immutables.immutableParent(a)) {
            			for (t = a.parentNode, e = t.children.length, n = t.cloneNode(!0), i = 0; i < t.cells.length; i++) n.cells[i].innerHTML = r.emptyTableCellContent;
            			"before" == this.options.position ? s.insertBefore(n, t) : s.insertAfter(n, t), this.releaseRange(o)
            		}
            	}
            }),
            N = d.extend({
            	exec: function ()
            	{
            		var e, t, n, i, o = this.lockRange(!0),
                        a = s.closest(o.endContainer, "td"),
                        l = s.closest(a, "table"),
                        d = l.rows,
                        c = this.options.position;
            		if (!this.immutables() || !r.Immutables.immutableParent(a)) {
            			for (e = s.findNodeIndex(a, !0), t = 0; t < d.length; t++) n = d[t].cells[e], i = n.cloneNode(), i.innerHTML = r.emptyTableCellContent, "before" == c ? s.insertBefore(i, n) : s.insertAfter(i, n);
            			this.releaseRange(o)
            		}
            	}
            }),
            S = d.extend({
            	exec: function ()
            	{
            		var t, n, i, o = this.lockRange(),
                        a = l.mapAll(o, function (t)
                        {
                        	return e(t).closest("tr")[0]
                        }),
                        d = a[0];
            		if (!this.immutables() || !r.Immutables.immutableParent(d)) {
            			if (t = s.closest(d, "table"), t.rows.length <= a.length) n = s.next(t), n && !s.insignificant(n) || (n = s.prev(t)), s.remove(t);
            			else
            				for (i = 0; i < a.length; i++) d = a[i], s.removeTextSiblings(d), n = s.next(d) || s.prev(d), n = n.cells[0], s.remove(d);
            			n && (o.setStart(n, 0), o.collapse(!0), this.editor.selectRange(o))
            		}
            	}
            }),
            z = d.extend({
            	exec: function ()
            	{
            		var e, t, n = this.lockRange(),
                        i = s.closest(n.endContainer, "td"),
                        o = s.closest(i, "table"),
                        a = o.rows,
                        l = s.findNodeIndex(i, !0),
                        d = a[0].cells.length;
            		if (!this.immutables() || !r.Immutables.immutableParent(i)) {
            			if (1 == d) e = s.next(o), e && !s.insignificant(e) || (e = s.prev(o)), s.remove(o);
            			else
            				for (s.removeTextSiblings(i), e = s.next(i) || s.prev(i), t = 0; t < a.length; t++) s.remove(a[t].cells[l]);
            			e && (n.setStart(e, 0), n.collapse(!0), this.editor.selectRange(n))
            		}
            	}
            }),
            R = p.extend({
            	command: function (e)
            	{
            		return e = i(e, this.options), "delete" == e.action ? "row" == e.type ? new S(e) : new z(e) : "row" == e.type ? new _(e) : new N(e)
            	},
            	initialize: function (e, t)
            	{
            		p.fn.initialize.call(this, e, t), e.addClass("k-state-disabled")
            	},
            	update: function (e, t)
            	{
            		var n = !w.isFormatted(t);
            		e.toggleClass("k-state-disabled", n)
            	}
            });
		i(n.ui.editor, {
			PopupTool: C,
			TableCommand: x,
			InsertTableTool: T,
			TableModificationTool: R,
			InsertRowCommand: _,
			InsertColumnCommand: N,
			DeleteRowCommand: S,
			DeleteColumnCommand: z
		}), b("createTable", new T({
			template: new m({
				template: a.buttonTemplate,
				popup: !0,
				title: "Create table"
			})
		})), b("addColumnLeft", new R({
			type: "column",
			position: "before",
			template: new m({
				template: a.buttonTemplate,
				title: "Add column on the left"
			})
		})), b("addColumnRight", new R({
			type: "column",
			template: new m({
				template: a.buttonTemplate,
				title: "Add column on the right"
			})
		})), b("addRowAbove", new R({
			type: "row",
			position: "before",
			template: new m({
				template: a.buttonTemplate,
				title: "Add row above"
			})
		})), b("addRowBelow", new R({
			type: "row",
			template: new m({
				template: a.buttonTemplate,
				title: "Add row below"
			})
		})), b("deleteRow", new R({
			type: "row",
			action: "delete",
			template: new m({
				template: a.buttonTemplate,
				title: "Delete row"
			})
		})), b("deleteColumn", new R({
			type: "column",
			action: "delete",
			template: new m({
				template: a.buttonTemplate,
				title: "Delete column"
			})
		}))
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/resizing/resizing-utils.min", ["editor/main.min"], e)
}(function ()
{
	! function (e, t)
	{
		function n(e)
		{
			var t = e.value,
                n = e.min,
                i = e.max;
			return f(u(p(t), p(i)), p(n))
		}

		function i(t)
		{
			return t && !m(t).is("body") && t.scrollHeight > t.clientHeight ? e.support.scrollbar() : 0
		}

		function o(e, t)
		{
			return r(e) ? p(e) : p(e) / t * 100
		}

		function r(e)
		{
			return typeof e === w && k.test(e)
		}

		function s(e)
		{
			return typeof e === w && y.test(e)
		}

		function a(e)
		{
			return p(e) + b
		}

		function l(e)
		{
			return p(e) + v
		}
		var d = window,
            c = d.Math,
            u = c.min,
            f = c.max,
            p = d.parseFloat,
            m = e.jQuery,
            h = m.extend,
            g = e.ui.editor,
            b = "%",
            v = "px",
            k = /(\d+)(\.?)(\d*)%/,
            y = /(\d+)(\.?)(\d*)px/,
            w = "string",
            x = {
            	constrain: n,
            	getScrollBarWidth: i,
            	calculatePercentageRatio: o,
            	inPercentages: r,
            	inPixels: s,
            	toPercentages: a,
            	toPixels: l
            };
		h(g, {
			ResizingUtils: x
		})
	}(window.kendo)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/resizing/table-element-resizing.min", ["editor/main.min", "kendo.resizable.min", "editor/resizing/resizing-utils.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = e.jQuery,
            i = n.extend,
            o = n.noop,
            r = n.proxy,
            s = e.ui.editor,
            a = e.Class,
            l = "keydown",
            d = "mousedown",
            c = "mouseenter",
            u = "mouseleave",
            f = "mousemove",
            p = "mouseup",
            m = ",",
            h = ".",
            g = ":last-child",
            b = "table",
            v = a.extend({
            	init: function (e, t)
            	{
            		var o = this;
            		o.options = i({}, o.options, t), o.options.tags = n.isArray(o.options.tags) ? o.options.tags : [o.options.tags], n(e).is(b) && (o.element = e, o._attachEventHandlers())
            	},
            	destroy: function ()
            	{
            		var e = this,
                        t = e.options.eventNamespace;
            		e.element && (n(e.element).off(t), e.element = null), n(e.options.rootElement).off(l + t), e._destroyResizeHandle()
            	},
            	options: {
            		tags: [],
            		min: 0,
            		rootElement: null,
            		eventNamespace: "",
            		rtl: !1,
            		handle: {
            			dataAttribute: "",
            			height: 0,
            			width: 0,
            			classNames: {},
            			template: ""
            		}
            	},
            	_attachEventHandlers: function ()
            	{
            		var e = this,
                        t = e.options;
            		n(e.element).on(f + t.eventNamespace, t.tags.join(m), r(e.detectElementBorderHovering, e))
            	},
            	resizingInProgress: function ()
            	{
            		var e = this,
                        t = e._resizable;
            		return !!t && !!t.resizing
            	},
            	resize: o,
            	detectElementBorderHovering: function (e)
            	{
            		var t = this,
                        i = t.options,
                        o = i.handle,
                        r = n(e.currentTarget),
                        s = t.resizeHandle,
                        a = o.dataAttribute;
            		t.resizingInProgress() || (!r.is(g) && t.elementBorderHovered(r, e) ? s ? s.data(a) && s.data(a) !== r[0] && t.showResizeHandle(r, e) : t.showResizeHandle(r, e) : s && t._destroyResizeHandle())
            	},
            	elementBorderHovered: o,
            	showResizeHandle: function (e, t)
            	{
            		var n = this;
            		0 === t.buttons && (n._initResizeHandle(), n.setResizeHandlePosition(e), n.setResizeHandleDimensions(), n.setResizeHandleDataAttributes(e[0]), n._attachResizeHandleEventHandlers(), n._initResizable(e), n._hideResizeMarker(), n.resizeHandle.show())
            	},
            	_initResizeHandle: function ()
            	{
            		var e = this,
                        t = e.options;
            		e._destroyResizeHandle(), e.resizeHandle = n(t.handle.template).appendTo(t.rootElement)
            	},
            	setResizeHandlePosition: o,
            	setResizeHandleDimensions: o,
            	setResizeHandleDataAttributes: function (e)
            	{
            		var t = this;
            		t.resizeHandle.data(t.options.handle.dataAttribute, e)
            	},
            	_attachResizeHandleEventHandlers: function ()
            	{
            		var e = this,
                        t = e.options,
                        n = t.eventNamespace,
                        i = t.handle.classNames.marker,
                        o = e.resizeHandle;
            		e.resizeHandle.on(d + n, function ()
            		{
            			o.find(h + i).show()
            		}).on(p + n, function ()
            		{
            			o.find(h + i).hide()
            		})
            	},
            	_hideResizeMarker: function ()
            	{
            		var e = this;
            		e.resizeHandle.find(h + e.options.handle.classNames.marker).hide()
            	},
            	_destroyResizeHandle: function ()
            	{
            		var e = this;
            		e.resizeHandle && (e._destroyResizable(), e.resizeHandle.off(e.options.eventNamespace).remove(), e.resizeHandle = null)
            	},
            	_initResizable: function (t)
            	{
            		var n = this;
            		n.resizeHandle && (n._destroyResizable(), n._resizable = new e.ui.Resizable(t, {
            			draggableElement: n.resizeHandle[0],
            			start: r(n.onResizeStart, n),
            			resize: r(n.onResize, n),
            			resizeend: r(n.onResizeEnd, n)
            		}))
            	},
            	_destroyResizable: function ()
            	{
            		var e = this;
            		e._resizable && (e._resizable.destroy(), e._resizable = null)
            	},
            	onResizeStart: function ()
            	{
            		this._disableKeyboard()
            	},
            	onResize: function (e)
            	{
            		this.setResizeHandleDragPosition(e)
            	},
            	setResizeHandleDragPosition: o,
            	onResizeEnd: function (e)
            	{
            		var t = this;
            		t.resize(e), t._destroyResizeHandle(), t._enableKeyboard()
            	},
            	_enableKeyboard: function ()
            	{
            		var e = this.options;
            		n(e.rootElement).off(l + e.eventNamespace)
            	},
            	_disableKeyboard: function ()
            	{
            		var e = this.options;
            		n(e.rootElement).on(l + e.eventNamespace, function (e)
            		{
            			e.preventDefault()
            		})
            	},
            	_forceResizing: function (e)
            	{
            		var t = this._resizable;
            		t && t.userEvents && t.userEvents._end(e)
            	}
            }),
            k = a.extend({
            	create: function (e, t)
            	{
            		var i = this,
                        o = t.name,
                        r = t.eventNamespace;
            		n(e.body).on(c + r, b, function (n)
            		{
            			var r = n.currentTarget,
                            s = e[o];
            			n.stopPropagation(), s ? s.element === r || s.resizingInProgress() || (i._destroyResizing(e, t), i._initResizing(e, r, t)) : i._initResizing(e, r, t)
            		}).on(u + r, b, function (r)
            		{
            			var s, a = e[o];
            			r.stopPropagation(), !a || a.resizingInProgress() || a.resizeHandle || (s = n(a.element).parents(b)[0], s && (i._destroyResizing(e, t), i._initResizing(e, s, t)))
            		}).on(u + r, function ()
            		{
            			var n = e[o];
            			n && !n.resizingInProgress() && i._destroyResizing(e, t)
            		}).on(p + r, function (r)
            		{
            			var s, a = e[o];
            			a && a.resizingInProgress() && (s = n(r.target).parents(b)[0], s && (a._forceResizing(r), i._destroyResizing(e, t), i._initResizing(e, s, t)))
            		})
            	},
            	dispose: function (e, t)
            	{
            		n(e.body).off(t.eventNamespace)
            	},
            	_initResizing: function (t, n, i)
            	{
            		var o = i.name,
                        r = i.type;
            		t[o] = new r(n, {
            			rtl: e.support.isRtl(t.element),
            			rootElement: t.body
            		})
            	},
            	_destroyResizing: function (e, t)
            	{
            		var n = t.name;
            		e[n] && (e[n].destroy(), e[n] = null)
            	}
            });
		k.current = new k, v.create = function (e, t)
		{
			k.current.create(e, t)
		}, v.dispose = function (e, t)
		{
			k.current.dispose(e, t)
		}, i(s, {
			TableElementResizing: v
		})
	}(window.kendo)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/resizing/column-resizing.min", ["editor/main.min", "editor/resizing/resizing-utils.min", "editor/resizing/table-element-resizing.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window,
            i = n.Math,
            o = i.abs,
            r = e.jQuery,
            s = r.extend,
            a = e.ui.editor,
            l = a.TableElementResizing,
            d = a.ResizingUtils,
            c = d.constrain,
            u = d.calculatePercentageRatio,
            f = d.getScrollBarWidth,
            p = d.inPercentages,
            m = d.toPercentages,
            h = d.toPixels,
            g = e._outerWidth,
            b = ".kendoEditorColumnResizing",
            v = "k-column-resize-handle",
            k = "k-column-resize-marker",
            y = "body",
            w = "tbody",
            x = "td",
            C = "th",
            T = "tr",
            _ = ",",
            N = "width",
            S = l.extend({
            	options: {
            		tags: [x, C],
            		min: 20,
            		rootElement: null,
            		eventNamespace: b,
            		rtl: !1,
            		handle: {
            			dataAttribute: "column",
            			width: 10,
            			height: 0,
            			classNames: {
            				handle: v,
            				marker: k
            			},
            			template: '<div class="k-column-resize-handle-wrapper" unselectable="on" contenteditable="false"><div class="' + v + '"><div class="' + k + '"></div></div></div>'
            		}
            	},
            	elementBorderHovered: function (e, t)
            	{
            		var n = this,
                        i = n.options,
                        o = i.handle.width,
                        s = e.offset().left + (i.rtl ? 0 : g(e)),
                        a = t.clientX + r(e[0].ownerDocument).scrollLeft();
            		return a > s - o && a < s + o
            	},
            	setResizeHandlePosition: function (e)
            	{
            		var t = this,
                        n = r(t.element).children(w),
                        i = t.options,
                        o = i.rtl,
                        s = i.handle.width,
                        a = r(i.rootElement),
                        l = a.is(y) ? 0 : a.scrollTop(),
                        d = a.is(y) ? 0 : a.scrollLeft(),
                        c = o ? 0 : g(e),
                        u = o ? f(a[0]) : 0;
            		t.resizeHandle.css({
            			top: n.position().top + l,
            			left: e.position().left + c + (d - u) - s / 2,
            			position: "absolute"
            		})
            	},
            	setResizeHandleDimensions: function ()
            	{
            		var e = this,
                        t = r(e.element).children(w);
            		e.resizeHandle.css({
            			width: e.options.handle.width,
            			height: t.height()
            		})
            	},
            	setResizeHandleDragPosition: function (e)
            	{
            		var t = this,
                        n = r(r(e.currentTarget).data(t.options.handle.dataAttribute)),
                        i = t.options,
                        o = i.handle ? i.handle.width : 0,
                        s = i.min,
                        a = i.rtl,
                        l = g(n),
                        d = n.position().left,
                        u = g(n.next()),
                        p = r(t.resizeHandle),
                        m = r(i.rootElement),
                        h = m.is(y) ? 0 : m.scrollLeft(),
                        b = a ? f(m[0]) : 0,
                        v = c({
                        	value: p.position().left + (h - b) + e.x.delta,
                        	min: d + (h - b) - (a ? u : 0) + s,
                        	max: d + l + (h - b) + (a ? 0 : u) - o - s
                        });
            		p.css({
            			left: v
            		})
            	},
            	resize: function (e)
            	{
            		var t, n, i, o = this,
                        s = r(r(e.currentTarget).data(o.options.handle.dataAttribute)),
                        a = o.options,
                        l = a.rtl ? -1 : 1,
                        d = a.min,
                        u = l * e.x.initialDelta;
            		o._setTableComputedWidth(), o._setColumnsComputedWidth(), i = g(s), n = g(s.next()), t = c({
            			value: i + u,
            			min: d,
            			max: i + n - d
            		}), o._resizeColumn(s[0], t), o._resizeTopAndBottomColumns(s[0], t), o._resizeAdjacentColumns(s.index(), n, i, i - t)
            	},
            	_setTableComputedWidth: function ()
            	{
            		var e = this.element;
            		"" === e.style[N] && (e.style[N] = h(g(r(e))))
            	},
            	_setColumnsComputedWidth: function ()
            	{
            		var e, t = this,
                        n = r(t.element).children(w),
                        i = g(n),
                        o = n.children(T).children(x),
                        s = o.length,
                        a = o.map(function ()
                        {
                        	return g(r(this))
                        });
            		for (e = 0; e < s; e++) o[e].style[N] = p(o[e].style[N]) ? m(u(a[e], i)) : h(a[e])
            	},
            	_resizeTopAndBottomColumns: function (e, t)
            	{
            		var n, i = this,
                        o = r(e).index(),
                        s = r(i.element).children(w).children(T).children(i.options.tags.join(_)).filter(function ()
                        {
                        	var t = this;
                        	return r(t).index() === o && t !== e
                        }),
                        a = s.length;
            		for (n = 0; n < a; n++) i._resizeColumn(s[n], t)
            	},
            	_resizeColumn: function (e, t)
            	{
            		e.style[N] = p(e.style[N]) ? m(u(t, g(r(this.element).children(w)))) : h(t)
            	},
            	_resizeAdjacentColumns: function (e, t, n, i)
            	{
            		var o, s = this,
                        a = r(s.element).children(w).children(T).children(s.options.tags.join(_)).filter(function ()
                        {
                        	return r(this).index() === e + 1
                        }),
                        l = a.length;
            		for (o = 0; o < l; o++) s._resizeAdjacentColumn(a[o], t, n, i)
            	},
            	_resizeAdjacentColumn: function (e, t, n, i)
            	{
            		var r = this,
                        s = r.options.min,
                        a = c({
                        	value: t + i,
                        	min: s,
                        	max: o(n + t - s)
                        });
            		r._resizeColumn(e, a)
            	}
            });
		S.create = function (e)
		{
			l.create(e, {
				name: "columnResizing",
				type: S,
				eventNamespace: b
			})
		}, S.dispose = function (e)
		{
			l.dispose(e, {
				eventNamespace: b
			})
		}, s(a, {
			ColumnResizing: S
		})
	}(window.kendo)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/resizing/row-resizing.min", ["editor/main.min", "editor/resizing/resizing-utils.min", "editor/resizing/table-element-resizing.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window.Math,
            i = n.abs,
            o = e.jQuery,
            r = o.extend,
            s = e.ui.editor,
            a = s.TableElementResizing,
            l = s.ResizingUtils,
            d = l.getScrollBarWidth,
            c = l.constrain,
            u = l.calculatePercentageRatio,
            f = l.inPercentages,
            p = l.toPercentages,
            m = l.toPixels,
            h = e._outerHeight,
            g = ".kendoEditorRowResizing",
            b = "k-row-resize-handle",
            v = "k-row-resize-marker-wrapper",
            k = "k-row-resize-marker",
            y = "body",
            w = "tr",
            x = "tbody",
            C = "height",
            T = a.extend({
            	options: {
            		tags: [w],
            		min: 20,
            		rootElement: null,
            		eventNamespace: g,
            		rtl: !1,
            		handle: {
            			dataAttribute: "row",
            			width: 0,
            			height: 10,
            			classNames: {
            				handle: b,
            				marker: k
            			},
            			template: '<div class="k-row-resize-handle-wrapper" unselectable="on" contenteditable="false"><div class="' + b + '"><div class="' + v + '"><div class="' + k + '"></div></div></div></div>'
            		}
            	},
            	elementBorderHovered: function (e, t)
            	{
            		var n = this,
                        i = n.options.handle[C],
                        r = e.offset().top + h(e),
                        s = t.clientY + o(e[0].ownerDocument).scrollTop();
            		return s > r - i && s < r + i
            	},
            	setResizeHandlePosition: function (e)
            	{
            		var t = this,
                        n = t.options,
                        i = n.handle[C],
                        r = e.position(),
                        s = o(n.rootElement),
                        a = s.is(y) ? 0 : s.scrollTop(),
                        l = s.is(y) ? 0 : s.scrollLeft(),
                        c = n.rtl ? d(s[0]) : 0;
            		t.resizeHandle.css({
            			top: r.top + h(e) + a - i / 2,
            			left: r.left + (l - c),
            			position: "absolute"
            		})
            	},
            	setResizeHandleDimensions: function ()
            	{
            		var e = this;
            		e.resizeHandle.css({
            			width: o(e.element).children(x).width(),
            			height: e.options.handle[C]
            		})
            	},
            	setResizeHandleDragPosition: function (e)
            	{
            		var t = this,
                        n = t.options,
                        i = n.min,
                        r = o(t.element).children(x),
                        s = r.position().top,
                        a = o(t.resizeHandle),
                        l = o(e.currentTarget).data(n.handle.dataAttribute),
                        d = o(n.rootElement),
                        u = d.is(y) ? 0 : d.scrollTop(),
                        f = c({
                        	value: a.position().top + u + e.y.delta,
                        	min: o(l).position().top + u + i,
                        	max: s + h(r) + u - n.handle[C] - i
                        });
            		a.css({
            			top: f
            		})
            	},
            	resize: function (e)
            	{
            		var t = this,
                        n = t.options,
                        r = o(e.currentTarget).data(n.handle.dataAttribute),
                        s = h(o(r)),
                        a = o(t.element),
                        l = h(a),
                        d = a.children(x),
                        u = d.height(),
                        p = r.style[C],
                        g = c({
                        	value: s + e.y.initialDelta,
                        	min: n.min,
                        	max: i(u - n.min)
                        });
            		t._setRowsHeightInPixels(), r.style[C] = m(g), t._setTableHeight(l + (g - s)), f(p) && t._setRowsHeightInPercentages()
            	},
            	_setRowsHeightInPixels: function ()
            	{
            		var e, t = this,
                        n = o(t.element).children(x).children(w),
                        i = n.length,
                        r = n.map(function ()
                        {
                        	return h(o(this))
                        });
            		for (e = 0; e < i; e++) n[e].style[C] = m(r[e])
            	},
            	_setRowsHeightInPercentages: function ()
            	{
            		var e, t = this,
                        n = o(t.element).children(x),
                        i = n.height(),
                        r = n.children(w),
                        s = r.length,
                        a = r.map(function ()
                        {
                        	return h(o(this))
                        });
            		for (e = 0; e < s; e++) r[e].style[C] = p(u(a[e], i))
            	},
            	_setTableHeight: function (e)
            	{
            		var t = this.element;
            		t.style[C] = f(t.style[C]) ? p(u(e, o(t).parent().height())) : m(e)
            	}
            });
		T.create = function (e)
		{
			a.create(e, {
				name: "rowResizing",
				type: T,
				eventNamespace: g
			})
		}, T.dispose = function (e)
		{
			a.dispose(e, {
				eventNamespace: g
			})
		}, r(s, {
			RowResizing: T
		})
	}(window.kendo)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/resizing/table-resize-handle.min", ["editor/main.min", "kendo.draganddrop.min", "editor/resizing/resizing-utils.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n, i, o, r, s, a, l, d, c, u, f, p, m, h, g, b, v, k, y, w, x, C, T = e.jQuery,
            _ = T.extend,
            N = T.noop,
            S = T.proxy,
            z = e.ui.editor,
            R = e.Class,
            A = e.ui.Draggable,
            E = e.Observable,
            D = z.ResizingUtils.getScrollBarWidth,
            P = e._outerWidth,
            I = e._outerHeight,
            H = ".kendoEditorTableResizeHandle",
            B = "k-table-resize-handle",
            O = "dragStart",
            F = "drag",
            L = "dragEnd",
            M = "halfInside",
            W = "mouseover",
            U = "mouseout",
            V = "body",
            j = "table",
            K = "east",
            $ = "north",
            G = "northeast",
            q = "northwest",
            Q = "south",
            X = "southeast",
            Y = "southwest",
            J = "west",
            Z = ".",
            ee = E.extend({
            	init: function (e)
            	{
            		var t = this;
            		E.fn.init.call(t), t.options = _({}, t.options, e), t.element = T(t.options.template).appendTo(t.options.appendTo)[0], t._attachEventHandlers(), t._addStyles(), t._initDraggable(), t._initPositioningStrategy(), t._initDraggingStrategy(), T(t.element).data(j, t.options.resizableElement)
            	},
            	destroy: function ()
            	{
            		var e = this;
            		T(e.element).off(H).remove(), e.element = null, e._destroyDraggable(), e.unbind()
            	},
            	options: {
            		appendTo: null,
            		direction: X,
            		resizableElement: null,
            		rtl: !1,
            		template: "<div class='k-table-resize-handle-wrapper' unselectable='on' contenteditable='false'><div class='" + B + "'></div></div>"
            	},
            	events: [O, F, L, W, U],
            	show: function ()
            	{
            		this._setPosition()
            	},
            	_setPosition: function ()
            	{
            		var e = this,
                        t = e._positioningStrategy.getPosition();
            		T(e.element).css({
            			top: t.top,
            			left: t.left,
            			position: "absolute"
            		})
            	},
            	_attachEventHandlers: function ()
            	{
            		var e = this;
            		T(e.element).on(W + H, S(e._onMouseOver, e)).on(U + H, S(e._onMouseOut, e))
            	},
            	_onMouseOver: function ()
            	{
            		this.trigger(W)
            	},
            	_onMouseOut: function ()
            	{
            		this.trigger(U)
            	},
            	_addStyles: function ()
            	{
            		var e = this;
            		T(e.element).children(Z + B).addClass("k-resize-" + e.options.direction)
            	},
            	_initPositioningStrategy: function ()
            	{
            		var e = this,
                        t = e.options;
            		e._positioningStrategy = n.create({
            			name: t.direction,
            			handle: e.element,
            			resizableElement: t.resizableElement,
            			rootElement: t.rootElement,
            			rtl: t.rtl
            		})
            	},
            	_initDraggable: function ()
            	{
            		var e = this,
                        t = e.element;
            		!e._draggable && t && (e._draggable = new A(t, {
            			dragstart: S(e._onDragStart, e),
            			drag: S(e._onDrag, e),
            			dragend: S(e._onDragEnd, e)
            		}))
            	},
            	_onDragStart: function ()
            	{
            		this.trigger(O)
            	},
            	_onDrag: function (e)
            	{
            		var t = this;
            		t.trigger(F, t._draggingStrategy.adjustDragDelta({
            			deltaX: e.x.delta,
            			deltaY: e.y.delta,
            			initialDeltaX: e.x.initialDelta,
            			initialDeltaY: e.y.initialDelta
            		}))
            	},
            	_onDragEnd: function ()
            	{
            		this.trigger(L)
            	},
            	_destroyDraggable: function ()
            	{
            		var e = this;
            		e._draggable && (e._draggable.destroy(), e._draggable = null)
            	},
            	_initDraggingStrategy: function ()
            	{
            		var e = this;
            		e._draggingStrategy = f.create({
            			name: e.options.direction
            		})
            	}
            }),
            te = R.extend({
            	init: function ()
            	{
            		this._items = []
            	},
            	register: function (e, t)
            	{
            		this._items.push({
            			name: e,
            			type: t
            		})
            	},
            	create: function (e)
            	{
            		var t, n, i, o = this._items,
                        r = o.length,
                        s = e.name ? e.name.toLowerCase() : "";
            		for (i = 0; i < r; i++)
            			if (n = o[i], n.name.toLowerCase() === s) {
            				t = n;
            				break
            			}
            		if (t) return new t.type(e)
            	}
            }),
            ne = te.extend({});
		ne.current = new ne, n = R.extend({
			init: function (e)
			{
				var t = this;
				t.options = _({}, t.options, e)
			},
			options: {
				handle: null,
				offset: M,
				resizableElement: null,
				rootElement: null,
				rtl: !1
			},
			getPosition: function ()
			{
				var e = this,
                    t = e.calculatePosition(),
                    n = e.applyHandleOffset(t),
                    i = e.applyScrollOffset(n);
				return i
			},
			calculatePosition: N,
			applyHandleOffset: function (e)
			{
				var t = this.options,
                    n = T(t.handle);
				return t.offset === M ? {
					top: e.top - I(n) / 2,
					left: e.left - P(n) / 2
				} : e
			},
			applyScrollOffset: function (e)
			{
				var t = this.options,
                    n = T(t.rootElement),
                    i = t.rtl ? D(n[0]) : 0;
				return n.is(V) ? e : {
					top: e.top + (n.scrollTop() || 0),
					left: e.left + (n.scrollLeft() || 0) - i
				}
			}
		}), n.create = function (e)
		{
			return ne.current.create(e)
		}, i = n.extend({
			calculatePosition: function ()
			{
				var e = T(this.options.resizableElement),
                    t = e.position();
				return {
					top: t.top + I(e) / 2,
					left: t.left + P(e)
				}
			}
		}), ne.current.register(K, i), o = n.extend({
			calculatePosition: function ()
			{
				var e = T(this.options.resizableElement),
                    t = e.position();
				return {
					top: t.top,
					left: t.left + P(e) / 2
				}
			}
		}), ne.current.register($, o), r = n.extend({
			calculatePosition: function ()
			{
				var e = T(this.options.resizableElement),
                    t = e.position();
				return {
					top: t.top,
					left: t.left + P(e)
				}
			}
		}), ne.current.register(G, r), s = n.extend({
			calculatePosition: function ()
			{
				var e = T(this.options.resizableElement),
                    t = e.position();
				return {
					top: t.top,
					left: t.left
				}
			}
		}), ne.current.register(q, s), a = n.extend({
			calculatePosition: function ()
			{
				var e = T(this.options.resizableElement),
                    t = e.position();
				return {
					top: t.top + I(e),
					left: t.left + P(e) / 2
				}
			}
		}), ne.current.register(Q, a), l = n.extend({
			calculatePosition: function ()
			{
				var e = T(this.options.resizableElement),
                    t = e.position();
				return {
					top: t.top + I(e),
					left: t.left + P(e)
				}
			}
		}), ne.current.register(X, l), d = n.extend({
			calculatePosition: function ()
			{
				var e = T(this.options.resizableElement),
                    t = e.position();
				return {
					top: t.top + I(e),
					left: t.left
				}
			}
		}), ne.current.register(Y, d), c = n.extend({
			calculatePosition: function ()
			{
				var e = T(this.options.resizableElement),
                    t = e.position();
				return {
					top: t.top + I(e) / 2,
					left: t.left
				}
			}
		}), ne.current.register(J, c), u = te.extend({}), u.current = new u, f = R.extend({
			init: function (e)
			{
				var t = this;
				t.options = _({}, t.options, e)
			},
			options: {
				deltaX: {
					adjustment: null,
					modifier: null
				},
				deltaY: {
					adjustment: null,
					modifier: null
				}
			},
			adjustDragDelta: function (e)
			{
				var t = this.options,
                    n = t.deltaX.adjustment * t.deltaX.modifier,
                    i = t.deltaY.adjustment * t.deltaY.modifier;
				return {
					deltaX: e.deltaX * n,
					deltaY: e.deltaY * i,
					initialDeltaX: e.initialDeltaX * n,
					initialDeltaY: e.initialDeltaY * i
				}
			}
		}), f.create = function (e)
		{
			return u.current.create(e)
		}, p = f.extend({
			options: {
				deltaX: {
					adjustment: 1,
					modifier: 1
				},
				deltaY: {
					adjustment: 0,
					modifier: 0
				}
			}
		}), m = p.extend({
			options: {
				deltaX: {
					modifier: 1
				}
			}
		}), u.current.register(K, m), h = p.extend({
			options: {
				deltaX: {
					modifier: -1
				}
			}
		}), u.current.register(J, h), g = f.extend({
			options: {
				deltaX: {
					adjustment: 0,
					modifier: 0
				},
				deltaY: {
					adjustment: 1,
					modifier: 1
				}
			}
		}), b = g.extend({
			options: {
				deltaY: {
					modifier: -1
				}
			}
		}), u.current.register($, b), v = g.extend({
			options: {
				deltaY: {
					modifier: 1
				}
			}
		}), u.current.register(Q, v), k = f.extend({
			options: {
				deltaX: {
					adjustment: 1,
					modifier: 1
				},
				deltaY: {
					adjustment: 1,
					modifier: 1
				}
			}
		}), y = k.extend({
			options: {
				deltaX: {
					modifier: 1
				},
				deltaY: {
					modifier: -1
				}
			}
		}), u.current.register(G, y), w = k.extend({
			options: {
				deltaX: {
					modifier: -1
				},
				deltaY: {
					modifier: -1
				}
			}
		}), u.current.register(q, w), x = k.extend({
			options: {
				deltaX: {
					modifier: 1
				},
				deltaY: {
					modifier: 1
				}
			}
		}), u.current.register(X, x), C = k.extend({
			options: {
				deltaX: {
					modifier: -1
				},
				deltaY: {
					modifier: 1
				}
			}
		}), u.current.register(Y, C), _(z, {
			TableResizeHandle: ee
		})
	}(window.kendo)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/resizing/table-resizing.min", ["editor/main.min", "editor/resizing/table-resize-handle.min", "editor/resizing/resizing-utils.min"], e)
}(function ()
{
	! function (e, t)
	{
		function n(e)
		{
			return t === e
		}
		var i = window,
            o = i.Math,
            r = o.min,
            s = o.max,
            a = e.jQuery,
            l = a.contains,
            d = a.extend,
            c = a.proxy,
            u = e.support.browser,
            f = e.ui.editor,
            p = e.Class,
            m = f.TableResizeHandle,
            h = f.ResizingUtils,
            g = h.calculatePercentageRatio,
            b = h.constrain,
            v = h.inPercentages,
            k = h.inPixels,
            y = h.toPercentages,
            w = h.toPixels,
            x = e._outerWidth,
            C = e._outerHeight,
            T = ".kendoEditorTableResizing",
            _ = "k-table-resize-handle-wrapper",
            N = "k-table",
            S = "k-table-resizing",
            z = "dragStart",
            R = "drag",
            A = "dragEnd",
            E = "keydown",
            D = "mousedown",
            P = "mouseover",
            I = "mouseout",
            H = "td",
            B = "tr",
            O = "tbody",
            F = "table",
            L = "width",
            M = "height",
            W = "east",
            U = "north",
            V = "northeast",
            j = "northwest",
            K = "south",
            $ = "southeast",
            G = "southwest",
            q = "west",
            Q = ".",
            X = p.extend({
            	init: function (e, t)
            	{
            		var n = this;
            		n.options = d({}, n.options, t), n.handles = [], a(e).is(F) && (n.element = e)
            	},
            	destroy: function ()
            	{
            		var e = this;
            		a(e.element).off(T), e.element = null, a(e.options.rootElement).off(E + T), e._destroyResizeHandles()
            	},
            	options: {
            		appendHandlesTo: null,
            		rtl: !1,
            		rootElement: null,
            		minWidth: 10,
            		minHeight: 10,
            		handles: [{
            			direction: j
            		}, {
            			direction: U
            		}, {
            			direction: V
            		}, {
            			direction: W
            		}, {
            			direction: $
            		}, {
            			direction: K
            		}, {
            			direction: G
            		}, {
            			direction: q
            		}]
            	},
            	resize: function (e)
            	{
            		var t = this,
                        n = d({}, {
                        	deltaX: 0,
                        	deltaY: 0,
                        	initialDeltaX: 0,
                        	initialDeltaY: 0
                        }, e);
            		t._resizeWidth(n.deltaX, n.initialDeltaX), t._resizeHeight(n.deltaY, n.initialDeltaY), t.showResizeHandles()
            	},
            	_resizeWidth: function (e, t)
            	{
            		var i, o, l, d, c = this,
                        u = a(c.element),
                        f = u[0].style[L],
                        p = x(u),
                        m = u.parent().width(),
                        h = c._getMaxDimensionValue(L);
            		0 !== e && (n(c._initialElementWidth) && (c._initialElementWidth = p), d = b({
            			value: c._initialElementWidth + t,
            			min: c.options.minWidth,
            			max: h
            		}), v(f) ? (p + e > m ? (o = s(d, m), l = r(d, m)) : (o = r(d, m), l = s(d, m)), i = y(g(o, l))) : i = w(d), c._setColumnsWidth(), u[0].style[L] = i)
            	},
            	_resizeHeight: function (e, t)
            	{
            		var i, o, l, d, c = this,
                        u = a(c.element),
                        f = u[0].style[M],
                        p = C(u),
                        m = u.parent(),
                        h = m.height(),
                        k = c._getMaxDimensionValue(M),
                        x = c.options.minHeight,
                        T = c._hasRowsInPixels();
            		0 !== e && (n(c._initialElementHeight) && (c._initialElementHeight = p), d = b({
            			value: c._initialElementHeight + t,
            			min: x,
            			max: k
            		}), T && e < 0 && c._setRowsHeightInPercentages(), v(f) ? (p + e > h ? (o = s(d, h), l = r(d, h)) : (o = r(d, h), l = s(d, h)), i = y(g(o, l))) : i = w(d), u[0].style[M] = i, T && e < 0 && c._setRowsHeightInPixels())
            	},
            	_getMaxDimensionValue: function (e)
            	{
            		var t = this,
                        n = a(t.element),
                        i = e.toLowerCase(),
                        o = t.options.rtl ? -1 : 1,
                        r = a(t.element).parent(),
                        s = r[0],
                        l = r[i](),
                        d = o * (e === L ? r.scrollLeft() : r.scrollTop());
            		return s === n.closest(H)[0] ? "" !== s.style[i] || v(t.element.style[i]) ? l + d : 1 / 0 : l + d
            	},
            	_setColumnsWidth: function ()
            	{
            		function e(e)
            		{
            			var t = e.style.width;
            			return "" !== t ? !!v(t) : !!a(e).hasClass(N)
            		}
            		var t, n = this,
                        i = a(n.element),
                        o = i.parent()[0],
                        r = i.closest(H),
                        s = r.closest(B).children(),
                        l = s.length;
            		if (e(i[0]) && o === r[0] && "" === o.style[L])
            			for (t = 0; t < l; t++) s[t].style[L] = w(a(s[t]).width())
            	},
            	_hasRowsInPixels: function ()
            	{
            		var e, t = this,
                        n = a(t.element).children(O).children(B);
            		for (e = 0; e < n.length; e++)
            			if ("" === n[e].style.height || k(n[e].style.height)) return !0;
            		return !1
            	},
            	_setRowsHeightInPercentages: function ()
            	{
            		var e, t = this,
                        n = a(t.element).children(O),
                        i = n.height(),
                        o = n.children(B),
                        r = o.length,
                        s = o.map(function ()
                        {
                        	return C(a(this))
                        });
            		for (e = 0; e < r; e++) o[e].style[M] = y(g(s[e], i))
            	},
            	_setRowsHeightInPixels: function ()
            	{
            		var e, t = this,
                        n = a(t.element).children(O).children(B),
                        i = n.length,
                        o = n.map(function ()
                        {
                        	return C(a(this))
                        });
            		for (e = 0; e < i; e++) n[e].style[M] = w(o[e])
            	},
            	showResizeHandles: function ()
            	{
            		var e = this;
            		e._initResizeHandles(), e._showResizeHandles()
            	},
            	_initResizeHandles: function ()
            	{
            		var e, t = this,
                        n = t.handles,
                        i = t.options,
                        o = t.options.handles,
                        r = o.length;
            		if (!(n && n.length > 0)) {
            			for (e = 0; e < r; e++) t.handles.push(new m(d({
            				appendTo: i.appendHandlesTo,
            				resizableElement: t.element,
            				rootElement: i.rootElement,
            				rtl: i.rtl
            			}, o[e])));
            			t._bindToResizeHandlesEvents()
            		}
            	},
            	_destroyResizeHandles: function ()
            	{
            		var e, t = this,
                        n = t.handles ? t.handles.length : 0;
            		for (e = 0; e < n; e++) t.handles[e].destroy()
            	},
            	_showResizeHandles: function ()
            	{
            		var e, t = this,
                        n = t.handles || [],
                        i = n.length;
            		for (e = 0; e < i; e++) t.handles[e].show()
            	},
            	_bindToResizeHandlesEvents: function ()
            	{
            		var e, t, n = this,
                        i = n.handles || [],
                        o = i.length;
            		for (e = 0; e < o; e++) t = i[e], t.bind(z, c(n._onResizeHandleDragStart, n)), t.bind(R, c(n._onResizeHandleDrag, n)), t.bind(A, c(n._onResizeHandleDragEnd, n)), t.bind(P, c(n._onResizeHandleMouseOver, n)), t.bind(I, c(n._onResizeHandleMouseOut, n))
            	},
            	_onResizeHandleDragStart: function ()
            	{
            		var e = this,
                        t = a(e.element);
            		t.addClass(S), e._initialElementHeight = C(t), e._initialElementWidth = x(t), e._disableKeyboard()
            	},
            	_onResizeHandleDrag: function (e)
            	{
            		this.resize(e)
            	},
            	_onResizeHandleDragEnd: function ()
            	{
            		var e = this;
            		a(e.element).removeClass(S), e._enableKeyboard()
            	},
            	_enableKeyboard: function ()
            	{
            		a(this.options.rootElement).off(E + T)
            	},
            	_disableKeyboard: function ()
            	{
            		a(this.options.rootElement).on(E + T, function (e)
            		{
            			e.preventDefault()
            		})
            	}
            }),
            Y = p.extend({
            	create: function (e)
            	{
            		var t = this;
            		a(e.body).on(D + T, F, function (n)
            		{
            			var i = n.target,
                            o = n.currentTarget,
                            r = e.tableResizing,
                            s = r ? r.element : null;
            			if (r) {
            				if (s && o !== s) {
            					if (l(o, s) && s !== i && l(s, i)) return;
            					s !== i && (e._destroyTableResizing(), t._initResizing(e, o))
            				}
            			} else t._initResizing(e, o);
            			e._showTableResizeHandles()
            		}).on(D + T, function (t)
            		{
            			var n = e.tableResizing,
                            i = n ? n.element : null,
                            o = t.target,
                            r = a(o).hasClass(_) || a(o).parents(Q + _).length > 0;
            			!n || i === o || l(i, o) || r || e._destroyTableResizing()
            		})
            	},
            	dispose: function (e)
            	{
            		a(e.body).off(T)
            	},
            	_initResizing: function (t, n)
            	{
            		u.msie || u.mozilla || (t.tableResizing = new X(n, {
            			appendHandlesTo: t.body,
            			rtl: e.support.isRtl(t.element),
            			rootElement: t.body
            		}))
            	}
            });
		Y.current = new Y, X.create = function (e)
		{
			Y.current.create(e)
		}, X.dispose = function (e)
		{
			Y.current.dispose(e)
		}, d(f, {
			TableResizing: X
		})
	}(window.kendo)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/immutables.min", ["editor/tables.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window.kendo,
            i = n.Class,
            o = n.ui.editor,
            r = o.Dom,
            s = n.template,
            a = o.RangeUtils,
            l = ["ul", "ol", "tbody", "thead", "table"],
            d = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "forecolor", "backcolor", "fontname", "fontsize", "createlink", "unlink", "autolink", "addcolumnleft", "addcolumnright", "addrowabove", "addrowbelow", "deleterow", "deletecolumn", "mergecells", "formatting", "cleanformatting"],
            c = "k-immutable",
            u = "[" + c + "]",
            f = "[contenteditable='false']",
            p = function (t)
            {
            	return e(t).is("body,.k-editor")
            },
            m = function (e)
            {
            	return e.getAttribute && "false" == e.getAttribute("contenteditable")
            },
            h = function (e)
            {
            	return r.closestBy(e, m, p)
            },
            g = function (e)
            {
            	var t = h(e.startContainer),
                    n = h(e.endContainer);
            	(t || n) && (t && e.setStartBefore(t), n && e.setEndAfter(n))
            },
            b = function (e)
            {
            	if (h(e.commonAncestorContainer)) return !0;
            	if (h(e.startContainer) || h(e.endContainer)) {
            		var t = a.editableTextNodes(e);
            		if (0 === t.length) return !0
            	}
            	return !1
            },
            v = function (e)
            {
            	var t, n = "",
                    i = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            	for (t = e || 10; t > 0; --t) n += i.charAt(Math.round(Math.random() * (i.length - 1)));
            	return n
            },
            k = function (t)
            {
            	var n, i, o, s = {
            		empty: !0
            	};
            	return e(t).find(f).each(function (t, a)
            	{
            		n = r.name(a), i = v(), o = "<" + n + " " + c + "='" + i + "'></" + n + ">", s[i] = {
            			node: a,
            			style: e(a).attr("style")
            		}, s.empty = !1, e(a).replaceWith(o)
            	}), s
            },
            y = function (t, n)
            {
            	var i, o;
            	e(t).find(u).each(function (t, r)
            	{
            		i = r.getAttribute(c), o = n[i], e(r).replaceWith(o.node), o.style != e(o.node).attr("style") && e(o.node).removeAttr("style").attr("style", o.style)
            	})
            },
            w = function (e)
            {
            	var t = n.keys;
            	return e === t.BACKSPACE || e == t.DELETE
            },
            x = function (e)
            {
            	var n = e ? e.options : t;
            	n && n.finder && n.finder._initOptions({
            		immutables: !0
            	})
            },
            C = i.extend({
            	init: function (t)
            	{
            		this.editor = t, this.serializedImmutables = {}, this.options = e.extend({}, t && t.options && t.options.immutables);
            		var n = t.toolbar.tools;
            		x(n.justifyLeft), x(n.justifyCenter), x(n.justifyRight), x(n.justifyFull)
            	},
            	serialize: function (e)
            	{
            		var t, n = this._toHtml(e);
            		return n.indexOf(c) === -1 ? (t = this.randomId(), n = n.replace(/>/, " " + c + '="' + t + '">')) : t = n.match(/k-immutable\s*=\s*['"](.*)['"]/)[1], this.serializedImmutables[t] = e, n
            	},
            	_toHtml: function (e)
            	{
            		var t, n = this.options.serialization,
                        i = typeof n;
            		switch (i) {
            			case "string":
            				return s(n)(e);
            			case "function":
            				return n(e);
            			default:
            				return t = r.name(e), "<" + t + "></" + t + ">"
            		}
            	},
            	deserialize: function (t)
            	{
            		var i = this,
                        o = this.options.deserialization;
            		e(u, t).each(function ()
            		{
            			var t = this.getAttribute(c),
                            r = i.serializedImmutables[t];
            			n.isFunction(o) && o(this, r), e(this).replaceWith(r)
            		}), i.serializedImmutables = {}
            	},
            	randomId: function (e)
            	{
            		return v(e)
            	},
            	keydown: function (e, t)
            	{
            		var n = w(e.keyCode),
                        i = n && this._cancelDeleting(e, t) || !n && this._cancelTyping(e, t);
            		if (i) return e.preventDefault(), !0
            	},
            	_cancelTyping: function (e, t)
            	{
            		var n = this.editor,
                        i = n.keyboard;
            		return t.collapsed && !i.typingInProgress && i.isTypingKey(e) && b(t)
            	},
            	_cancelDeleting: function (e, t)
            	{
            		var i, o, s, a, d = n.keys,
                        c = e.keyCode === d.BACKSPACE,
                        u = e.keyCode == d.DELETE;
            		if (!c && !u) return !1;
            		if (i = !1, t.collapsed) {
            			if (b(t)) return !0;
            			if (o = this.nextImmutable(t, u), o && c && (s = r.closest(t.commonAncestorContainer, "li"), s && (a = r.closest(o, "li"), a && a !== s))) return i;
            			if (o && !r.tableCell(o)) {
            				if (r.parentOfType(o, l) === r.parentOfType(t.commonAncestorContainer, l)) {
            					for (; o && 1 == o.parentNode.childNodes.length;) o = o.parentNode;
            					if (r.tableCell(o)) return i;
            					this._removeImmutable(o, t)
            				}
            				i = !0
            			}
            		}
            		return i
            	},
            	nextImmutable: function (e, t)
            	{
            		var n, i = e.commonAncestorContainer;
            		if (r.isBom(i) || t && a.isEndOf(e, i) || !t && a.isStartOf(e, i)) {
            			if (n = this._nextNode(i, t), n && r.isBlock(n) && !h(n))
            				for (; n && n.children && n.children[t ? 0 : n.children.length - 1];) n = n.children[t ? 0 : n.children.length - 1];
            			return h(n)
            		}
            	},
            	_removeImmutable: function (e, t)
            	{
            		var n = this.editor,
                        i = new o.RestorePoint(t, n.body);
            		r.remove(e), o._finishUpdate(n, i)
            	},
            	_nextNode: function (e, t)
            	{
            		for (var n, i = t ? "nextSibling" : "previousSibling", o = e; o && !n;) n = o[i], n && r.isDataNode(n) && /^\s|[\ufeff]$/.test(n.nodeValue) && (o = n, n = o[i]), n || (o = o.parentNode);
            		return n
            	}
            });
		C.immutable = m, C.immutableParent = h, C.expandImmutablesIn = g, C.immutablesContext = b, C.toolsToBeUpdated = d, C.removeImmutables = k, C.restoreImmutables = y, o.Immutables = C
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/table-wizard/table-wizard-command.min", ["editor/tables.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window.kendo,
            i = n.ui.editor,
            o = i.EditorUtils,
            r = i.RangeUtils,
            s = i.Dom,
            a = o.registerTool,
            l = i.ToolTemplate,
            d = i.Command,
            c = new i.BlockFormatFinder([{
            	tags: ["table"]
            }]),
            u = new i.BlockFormatFinder([{
            	tags: ["td", "th"]
            }]),
            f = /([a-z]+|%)$/i,
            p = d.extend({
            	exec: function ()
            	{
            		var o = this,
                        r = o.editor,
                        s = o.range = o.lockRange(),
                        a = o._sourceTable = o.options.insertNewTable ? t : o._selectedTable(s),
                        l = o._selectedTableCells = a ? o._selectedCells(s) : t,
                        d = {
                        	visible: !1,
                        	messages: r.options.messages,
                        	closeCallback: e.proxy(o.onDialogClose, o),
                        	table: o.parseTable(a, l),
                        	dialogOptions: r.options.dialogOptions,
                        	isRtl: n.support.isRtl(r.wrapper)
                        },
                        c = new i.TableWizardDialog(d);
            		c.open()
            	},
            	onDialogClose: function (e)
            	{
            		var t = this;
            		t.releaseRange(t.range), e && (t.options.insertNewTable ? t.insertTable(t.createNewTable(e)) : t.updateTable(e, t._sourceTable, t._selectedTableCells))
            	},
            	releaseRange: function (e)
            	{
            		var t = this,
                        n = t.editor.document;
            		s.windowFromDocument(n).focus(),
                        d.fn.releaseRange.call(t, e)
            	},
            	insertTable: function (e)
            	{
            		var t = this.range;
            		t.insertNode(e), t.collapse(!0), this.editor.selectRange(t)
            	},
            	updateTable: function (t, n, i)
            	{
            		for (var o, r, a, l, d, c, u, f, p = this, m = e(n.rows).toArray(), h = t.tableProperties, g = h.rows, b = h.columns, v = function (e)
            		{
                            return e[e.length - 1]
            		}; i.length > 1;) i.pop();
            		if (o = i.length ? v(i).parentNode : v(m), p._deleteTableRows(m, m.length - g), m.length < g)
            			for (l = e(o).index(), d = o.cells.length, c = g - m.length, a = o.parentNode; c;) r = a.insertRow(l + 1), p._insertCells(d - r.cells.length, r), c--;
            		m[0].cells.length > b && e(m).each(function (e, t)
            		{
            			for (; t.cells.length > b;) t.deleteCell(-1)
            		}), m[0].cells.length < b && (u = e(v(i) || v(o.cells)).index(), e(m).each(function (e, t)
            		{
            			p._insertCells(b - t.cells.length, t, u + 1)
            		})), p._updateTableProperties(n, h), f = t.cellProperties, i[0] && s.attr(i[0], {
            			id: f.id || null
            		}), (f.selectAllCells ? e(m).children() : e(i)).each(function (e, t)
            		{
            			p._updateCellProperties(t, f)
            		}), p._updateCaption(n, h), h.cellsWithHeaders = h.cellsWithHeaders || !1, p.cellsWithHeadersAssociated(n) != h.cellsWithHeaders && p.associateCellsWithHeader(n, h.cellsWithHeaders)
            	},
            	_isHeadingRow: function (e)
            	{
            		return s.is(e.parentNode, "thead") || s.is(e.cells[0], "th")
            	},
            	associateCellsWithHeader: function (t, n)
            	{
            		var i, o, r, s = (new Date).getTime(),
                        a = [],
                        l = t.rows[0].cells.length,
                        d = function ()
                        {
                        	for (var e = 0; e < l; e++) a[e] = "table" + ++s
                        },
                        c = function (t, i)
                        {
                        	e(i)[n ? "attr" : "removeAttr"]("id", a[t])
                        },
                        u = function (t, i)
                        {
                        	e(i)[n ? "attr" : "removeAttr"]("headers", a[t])
                        },
                        f = this._isHeadingRow;
            		e(t.rows).each(function (n, s)
            		{
            			if (f(s))
            				for (i = n, o = t.rows[++i], r = o && !f(o), r && (d(), e(s.cells).each(c)) ; r;) e(o.cells).each(u), o = t.rows[++i], r = o && !f(o)
            		})
            	},
            	cellsWithHeadersAssociated: function (t)
            	{
            		var n, i = e(t.rows).children(),
                        o = this._isHeadingRow,
                        r = [];
            		return i.each(function (e, t)
            		{
            			t.id && o(t.parentNode) && r.push(t.id)
            		}), n = i.filter(function (t, n)
            		{
            			var i = n.getAttribute("headers");
            			return i && !o(n.parentNode) && e.inArray(i, r) > -1
            		}), !!n.length
            	},
            	_insertCells: function (e, t, n)
            	{
            		n = isNaN(n) ? -1 : n;
            		for (var i, o = 0; o < e; o++) i = t.insertCell(n), i.innerHTML = "&nbsp;"
            	},
            	_deleteTableRows: function (e, t)
            	{
            		for (var n, i, o = 0; o < t; o++) n = e.pop(), i = n.parentNode, i.removeChild(n), i.rows.length || s.remove(i)
            	},
            	createNewTable: function (e)
            	{
            		var t, n, i, o, r, a = this,
                        l = a.editor.document,
                        d = e.tableProperties,
                        c = e.cellProperties,
                        u = c.selectAllCells,
                        f = s.create(l, "table");
            		for (a._updateTableProperties(f, d), a._updateCaption(f, d), t = f.createTBody(), n = 0; n < d.rows; n++)
            			for (i = t.insertRow(), o = 0; o < d.columns; o++) r = i.insertCell(), r.innerHTML = "&nbsp;", 0 === n && 0 === o && c.id && (r.id = c.id), a._updateCellProperties(r, u || 0 === n && 0 === o ? c : {});
            		return d.cellsWithHeaders && a.associateCellsWithHeader(f, d.cellsWithHeaders), f
            	},
            	_updateTableProperties: function (t, n)
            	{
            		var i = this._getStylesData(n);
            		s.attr(t, {
            			cellSpacing: n.cellSpacing || null,
            			cellPadding: n.cellPadding || null,
            			className: n.className || null,
            			id: n.id || null,
            			summary: n.summary || null,
            			style: i || null
            		}), e(t).addClass("k-table")
            	},
            	_updateCellProperties: function (e, t)
            	{
            		var n = this._getStylesData(t);
            		n.padding = t.cellPadding || null, n.margin = t.cellMargin || null, s.attr(e, {
            			style: n || null,
            			className: t.className || null
            		})
            	},
            	_updateCaption: function (e, t)
            	{
            		var n, i;
            		e.caption && !t.captionContent ? e.deleteCaption() : t.captionContent && (n = e.createCaption(), n.innerHTML = t.captionContent, i = this._getAlignmentData(t.captionAlignment), s.attr(n, {
            			style: {
            				textAlign: i.textAlign,
            				verticalAlign: i.verticalAlign
            			}
            		}))
            	},
            	_getStylesData: function (e)
            	{
            		var t = this._getAlignmentData(e.alignment),
                        n = "wrapText" in e ? e.wrapText ? "" : "nowrap" : null;
            		return {
            			width: e.width ? e.width + e.widthUnit : null,
            			height: e.height ? e.height + e.heightUnit : null,
            			textAlign: t.textAlign,
            			verticalAlign: t.verticalAlign,
            			backgroundColor: e.bgColor || null,
            			borderWidth: e.borderWidth,
            			borderStyle: e.borderStyle,
            			borderColor: e.borderColor,
            			borderCollapse: e.collapseBorders ? "collapse" : null,
            			whiteSpace: n
            		}
            	},
            	_getAlignmentData: function (e)
            	{
            		var t, n = "",
                        i = n;
            		return e && (e.indexOf(" ") != -1 ? (t = e.split(" "), n = t[0], i = t[1]) : n = e), {
            			textAlign: n,
            			verticalAlign: i
            		}
            	},
            	parseTable: function (n, i)
            	{
            		var o, r, s, a, l, d, c, u, f, p;
            		return n ? (o = this, r = n.style, s = n.rows, a = n.caption, l = e(a ? a.cloneNode(!0) : t), l.find(".k-marker").remove(), d = n.className, d = d.replace(/^k-table\s|\sk-table$/, ""), d = d.replace(/\sk-table\s/, " "), d = d.replace(/^k-table$/, ""), c = o._getAlignment(n, !0), u = a ? o._getAlignment(a) : t, f = o.cellsWithHeadersAssociated(n), p = {
            			tableProperties: {
            				width: r.width || n.width ? parseFloat(r.width || n.width) : null,
            				height: r.height || n.height ? parseFloat(r.height || n.height) : null,
            				columns: s[0] ? s[0].children.length : 0,
            				rows: s.length,
            				widthUnit: o._getUnit(r.width),
            				heightUnit: o._getUnit(r.height),
            				cellSpacing: n.cellSpacing,
            				cellPadding: n.cellPadding,
            				alignment: c.textAlign,
            				bgColor: r.backgroundColor || n.bgColor,
            				className: d,
            				id: n.id,
            				borderWidth: r.borderWidth || n.border,
            				borderColor: r.borderColor,
            				borderStyle: r.borderStyle || "",
            				collapseBorders: !!r.borderCollapse,
            				summary: n.summary,
            				captionContent: a ? l.html() : "",
            				captionAlignment: a && u.textAlign ? u.textAlign + " " + u.verticalAlign : "",
            				cellsWithHeaders: f
            			},
            			selectedCells: []
            		}, p.rows = o.parseTableRows(s, i, p), p) : {
            			tableProperties: {},
            			selectedCells: []
            		}
            	},
            	parseTableRows: function (t, n, i)
            	{
            		var o, r, s, a, l, d, c, u = this,
                        f = [];
            		for (d = 0; d < t.length; d++)
            			for (o = t[d], r = {
            				cells: []
            			}, s = o.cells, f.push(r), c = 0; c < s.length; c++) a = s[c], l = u.parseCell(a), e.inArray(a, n) != -1 && i.selectedCells.push(l), r.cells.push(l);
            		return f
            	},
            	parseCell: function (e)
            	{
            		var t, n = this,
                        i = e.style,
                        o = n._getAlignment(e);
            		return o = o.textAlign ? o.textAlign + " " + o.verticalAlign : "", t = {
            			width: i.width || e.width ? parseFloat(i.width || e.width) : null,
            			height: i.height || e.height ? parseFloat(i.height || e.height) : null,
            			widthUnit: n._getUnit(i.width),
            			heightUnit: n._getUnit(i.height),
            			cellMargin: i.margin,
            			cellPadding: i.padding,
            			alignment: o,
            			bgColor: i.backgroundColor || e.bgColor,
            			className: e.className,
            			id: e.id,
            			borderWidth: i.borderWidth || e.border,
            			borderColor: i.borderColor,
            			borderStyle: i.borderStyle,
            			wrapText: "nowrap" != i.whiteSpace
            		}
            	},
            	_getAlignment: function (e, t)
            	{
            		var n, i = e.style,
                        o = i.textAlign || e.align || "";
            		return t ? {
            			textAlign: o
            		} : (n = i.verticalAlign || e.vAlign || "", o && n ? {
            			textAlign: o,
            			verticalAlign: n
            		} : !o && n ? {
            			textAlign: "left",
            			verticalAlign: n
            		} : o && !n ? {
            			textAlign: o,
            			verticalAlign: "top"
            		} : {
            			textAlign: "",
            			verticalAlign: ""
            		})
            	},
            	_getUnit: function (e)
            	{
            		var t = (e || "").match(f);
            		return t ? t[0] : "px"
            	},
            	_selectedTable: function (e)
            	{
            		var t = s.filterBy(r.nodes(e), s.htmlIndentSpace, !0);
            		return c.findSuitable(t)[0]
            	},
            	_selectedCells: function (e)
            	{
            		var t = s.filterBy(r.nodes(e), s.htmlIndentSpace, !0);
            		return u.findSuitable(t)
            	}
            }),
            m = i.Tool.extend({
            	command: function (e)
            	{
            		return e.insertNewTable = this.options.insertNewTable, new p(e)
            	}
            }),
            h = m.extend({
            	update: function (e, t)
            	{
            		var n = !c.isFormatted(t);
            		e.toggleClass("k-state-disabled", n)
            	}
            });
		n.ui.editor.TableWizardTool = m, n.ui.editor.TableWizardCommand = p, a("tableWizard", new h({
			command: p,
			insertNewTable: !1,
			template: new l({
				template: o.buttonTemplate,
				title: "Table Wizard"
			})
		}))
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("editor/table-wizard/table-wizard-dialog.min", ["editor/table-wizard/table-wizard-command.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window.kendo,
            i = {
            	format: "0",
            	min: 0
            },
            o = ["px", "em"],
            r = ["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset", "initial", "inherit", "none", "hidden"],
            s = {
            	dataSource: [{
            		className: "k-font-icon k-i-table-align-middle-left",
            		value: "left"
            	}, {
            		className: "k-font-icon k-i-table-align-middle-center",
            		value: "center"
            	}, {
            		className: "k-font-icon k-i-table-align-middle-right",
            		value: "right"
            	}, {
            		className: "k-font-icon k-i-justify-clear",
            		value: ""
            	}],
            	dataTextField: "className",
            	dataValueField: "value",
            	template: "<span class='#: className #' title='#: tooltip #'></span>",
            	valueTemplate: "<span class='k-align-group #: className #' title='#: tooltip #'></span>"
            },
            a = {
            	dataSource: [{
            		className: "k-font-icon k-i-table-align-top-left",
            		value: "left top"
            	}, {
            		className: "k-font-icon k-i-table-align-top-center",
            		value: "center top"
            	}, {
            		className: "k-font-icon k-i-table-align-top-right",
            		value: "right top"
            	}, {
            		className: "k-font-icon k-i-table-align-middle-left",
            		value: "left middle"
            	}, {
            		className: "k-font-icon k-i-table-align-middle-center",
            		value: "center middle"
            	}, {
            		className: "k-font-icon k-i-table-align-middle-right",
            		value: "right middle"
            	}, {
            		className: "k-font-icon k-i-table-align-bottom-left",
            		value: "left bottom"
            	}, {
            		className: "k-font-icon k-i-table-align-bottom-center",
            		value: "center bottom"
            	}, {
            		className: "k-font-icon k-i-table-align-bottom-right",
            		value: "right bottom"
            	}, {
            		className: "k-font-icon k-i-justify-clear",
            		value: ""
            	}],
            	dataTextField: "className",
            	dataValueField: "value",
            	template: "<span class='#: className #' title='#: tooltip #'></span>",
            	valueTemplate: "<span class='k-align-group #: className #' title='#: tooltip #'></span>"
            },
            l = {
            	dataSource: [{
            		className: "k-font-icon k-i-table-align-top-left",
            		value: "left top"
            	}, {
            		className: "k-font-icon k-i-table-align-top-center",
            		value: "center top"
            	}, {
            		className: "k-font-icon k-i-table-align-top-right",
            		value: "right top"
            	}, {
            		className: "k-font-icon k-i-table-align-bottom-left",
            		value: "left bottom"
            	}, {
            		className: "k-font-icon k-i-table-align-bottom-center",
            		value: "center bottom"
            	}, {
            		className: "k-font-icon k-i-table-align-bottom-right",
            		value: "right bottom"
            	}, {
            		className: "k-font-icon k-i-justify-clear",
            		value: ""
            	}],
            	dataTextField: "className",
            	dataValueField: "value",
            	template: "<span class='#: className #' title='#: tooltip #'></span>",
            	valueTemplate: "<span class='k-align-group #: className #' title='#: tooltip #'></span>"
            },
            d = '<div class="k-editor-dialog k-editor-table-wizard-dialog k-action-window k-edit-form-container k-popup-edit-form"><div id="k-table-wizard-tabs" class="k-root-tabs"><ul><li class="k-state-active">#= messages.tableTab #</li><li>#= messages.cellTab #</li><li>#= messages.accessibilityTab #</li></ul><div id="k-table-properties"><div class="k-edit-label"><label for="k-editor-table-width">#= messages.width #</label></div><div class="k-edit-field"><input type="numeric" id="k-editor-table-width" /><input id="k-editor-table-width-type" /></div><div class="k-edit-label"><label for="k-editor-table-height">#= messages.height #</label></div><div class="k-edit-field"><input type="numeric" id="k-editor-table-height" /><input id="k-editor-table-height-type" /></div><div class="k-edit-label"><label for="k-editor-table-columns">#= messages.columns #</label></div><div class="k-edit-field"><input type="numeric" id="k-editor-table-columns" /></div><div class="k-edit-label"><label for="k-editor-table-rows">#= messages.rows #</label></div><div class="k-edit-field"><input type="numeric" id="k-editor-table-rows" /></div><div class="k-edit-label"><label for="k-editor-table-cell-spacing">#= messages.cellSpacing #</label></div><div class="k-edit-field"><input type="numeric" id="k-editor-table-cell-spacing" /></div><div class="k-edit-label"><label for="k-editor-table-cell-padding">#= messages.cellPadding #</label></div><div class="k-edit-field"><input type="numeric" id="k-editor-table-cell-padding" /></div><div class="k-edit-label"><label for="k-editor-table-alignment">#= messages.alignment #</label></div><div class="k-edit-field"><input id="k-editor-table-alignment" class="k-align" /></div><div class="k-edit-label"><label for="k-editor-table-bg">#= messages.background #</label></div><div class="k-edit-field"><input id="k-editor-table-bg" /></div><div class="k-edit-label"><label for="k-editor-css-class">#= messages.cssClass #</label></div><div class="k-edit-field"><input id="k-editor-css-class" class="k-input k-textbox" type="text" /></div><div class="k-edit-label"><label for="k-editor-id">#= messages.id #</label></div><div class="k-edit-field"><input id="k-editor-id" class="k-input k-textbox" type="text" /></div><div class="k-edit-label"><label for="k-editor-border-width">#= messages.border #</label></div><div class="k-edit-field"><input type="numeric" id="k-editor-border-width" /><input id="k-editor-border-color" /></div><div class="k-edit-label"><label for="k-editor-border-style">#= messages.borderStyle #</label></div><div class="k-edit-field"><input id="k-editor-border-style" /></div><div class="k-edit-label">&nbsp;</div><div class="k-edit-field"><input id="k-editor-collapse-borders" type="checkbox" class="k-checkbox" /><label for="k-editor-collapse-borders" class="k-checkbox-label">#= messages.collapseBorders #</label></div></div><div id="k-cell-properties"><div class="k-edit-field"><input id="k-editor-selectAllCells" type="checkbox" class="k-checkbox" /><label for="k-editor-selectAllCells" class="k-checkbox-label">#= messages.selectAllCells #</label></div><div class="k-edit-label"><label for="k-editor-cell-width">#= messages.width #</label></div><div class="k-edit-field"><input type="numeric" id="k-editor-cell-width" /><input id="k-editor-cell-width-type" /></div><div class="k-edit-label"><label for="k-editor-cell-height">#= messages.height #</label></div><div class="k-edit-field"><input type="numeric" id="k-editor-cell-height" /><input id="k-editor-cell-height-type" /></div><div class="k-edit-label"><label for="k-editor-table-cell-margin">#= messages.cellMargin #</label></div><div class="k-edit-field"><input type="numeric" id="k-editor-table-cell-margin" /></div><div class="k-edit-label"><label for="k-editor-table-cells-padding">#= messages.cellPadding #</label></div><div class="k-edit-field"><input type="numeric" id="k-editor-table-cells-padding" /></div><div class="k-edit-label"><label for="k-editor-cell-alignment">#= messages.alignment #</label></div><div class="k-edit-field"><input id="k-editor-cell-alignment" class="k-align" /></div><div class="k-edit-label"><label for="k-editor-cell-bg">#= messages.background #</label></div><div class="k-edit-field"><input id="k-editor-cell-bg" /></div><div class="k-edit-label"><label for="k-editor-cell-css-class">#= messages.cssClass #</label></div><div class="k-edit-field"><input id="k-editor-cell-css-class" class="k-input k-textbox" type="text" /></div><div class="k-edit-label"><label for="k-editor-cell-id">#= messages.id #</label></div><div class="k-edit-field"><input id="k-editor-cell-id" class="k-input k-textbox" type="text" /></div><div class="k-edit-label"><label for="k-editor-cell-border-width">#= messages.border #</label></div><div class="k-edit-field"><input type="numeric" id="k-editor-cell-border-width" /><input id="k-editor-cell-border-color" /></div><div class="k-edit-label"><label for="k-editor-cell-border-style">#= messages.borderStyle #</label></div><div class="k-edit-field"><input id="k-editor-cell-border-style" /></div><div class="k-edit-label">&nbsp;</div><div class="k-edit-field"><input id="k-editor-wrap-text" type="checkbox" class="k-checkbox" /><label for="k-editor-wrap-text" class="k-checkbox-label">#= messages.wrapText #</label></div></div><div id="k-accessibility-properties"><div class="k-edit-label"><label for="k-editor-table-caption">#= messages.caption #</label></div><div class="k-edit-field"><input id="k-editor-table-caption" class="k-input k-textbox" type="text" /></div><div class="k-edit-label"><label for="k-editor-accessibility-alignment">#= messages.alignment #</label></div><div class="k-edit-field"><input id="k-editor-accessibility-alignment" class="k-align" /></div><div class="k-edit-label"><label for="k-editor-accessibility-summary">#= messages.summary #</label></div><div class="k-edit-field"><textarea id="k-editor-accessibility-summary" class="k-input k-textbox"></textarea></div><div class="k-edit-label">&nbsp;</div><div class="k-edit-field"><input id="k-editor-cells-headers" type="checkbox" class="k-checkbox" /><label for="k-editor-cells-headers" class="k-checkbox-label">#= messages.associateCellsWithHeaders #</label></div></div></div><div class="k-edit-buttons k-state-default"><button class="k-button k-primary k-dialog-ok">#= messages.dialogOk #</button><button class="k-button k-dialog-close">#= messages.dialogCancel #</button></div></div>',
            c = n.Class.extend({
            	init: function (e)
            	{
            		this.options = e
            	},
            	open: function ()
            	{
            		function t(e)
            		{
            			e.preventDefault(), s.destroy(), o.destroy()
            		}

            		function n(e)
            		{
            			s.collectDialogValues(d), t(e), s.change && s.change(), a.closeCallback(d)
            		}

            		function i(e)
            		{
            			t(e), a.closeCallback()
            		}
            		var o, r, s = this,
                        a = s.options,
                        l = a.dialogOptions,
                        d = a.table,
                        c = a.messages;
            		l.close = i, l.title = c.tableWizard, l.visible = a.visible, o = e(s._dialogTemplate(c)).appendTo(document.body).kendoWindow(l).closest(".k-window").toggleClass("k-rtl", a.isRtl).end().find(".k-dialog-ok").click(n).end().find(".k-dialog-close").click(i).end().data("kendoWindow"), r = o.element, s._initTabStripComponent(r), s._initTableViewComponents(r, d), s._initCellViewComponents(r, d), s._initAccessibilityViewComponents(r, d), o.center(), o.open()
            	},
            	_initTabStripComponent: function (e)
            	{
            		var t = this.components = {};
            		t.tabStrip = e.find("#k-table-wizard-tabs").kendoTabStrip({
            			animation: !1
            		}).data("kendoTabStrip")
            	},
            	collectDialogValues: function ()
            	{
            		var e = this,
                        t = e.options.table;
            		e._collectTableViewValues(t), e._collectCellViewValues(t), e._collectAccessibilityViewValues(t)
            	},
            	_collectTableViewValues: function (e)
            	{
            		var t = this.components.tableView,
                        n = e.tableProperties;
            		n.width = t.width.value(), n.widthUnit = t.widthUnit.value(), n.height = t.height.value(), n.columns = t.columns.value(), n.rows = t.rows.value(), n.heightUnit = t.heightUnit.value(), n.cellSpacing = t.cellSpacing.value(), n.cellPadding = t.cellPadding.value(), n.alignment = t.alignment.value(), n.bgColor = t.bgColor.value(), n.className = t.className.value, n.id = t.id.value, n.borderWidth = t.borderWidth.value(), n.borderColor = t.borderColor.value(), n.borderStyle = t.borderStyle.value(), n.collapseBorders = t.collapseBorders.checked
            	},
            	_collectCellViewValues: function (e)
            	{
            		var t = e.cellProperties = {},
                        n = this.components.cellView;
            		t.selectAllCells = n.selectAllCells.checked, t.width = n.width.value(), t.widthUnit = n.widthUnit.value(), t.height = n.height.value(), t.heightUnit = n.heightUnit.value(), t.cellMargin = n.cellMargin.value(), t.cellPadding = n.cellPadding.value(), t.alignment = n.alignment.value(), t.bgColor = n.bgColor.value(), t.className = n.className.value, t.id = n.id.value, t.borderWidth = n.borderWidth.value(), t.borderColor = n.borderColor.value(), t.borderStyle = n.borderStyle.value(), t.wrapText = n.wrapText.checked
            	},
            	_collectAccessibilityViewValues: function (e)
            	{
            		var t = e.tableProperties,
                        n = this.components.accessibilityView;
            		t.captionContent = n.captionContent.value, t.captionAlignment = n.captionAlignment.value(), t.summary = n.summary.value, t.cellsWithHeaders = n.cellsWithHeaders.checked
            	},
            	_addUnit: function (t, n)
            	{
            		n && e.inArray(n, t) == -1 && t.push(n)
            	},
            	_initTableViewComponents: function (e, t)
            	{
            		var n = this.components,
                        i = n.tableView = {},
                        s = t.tableProperties = t.tableProperties || {};
            		s.borderStyle = s.borderStyle || "", this._addUnit(o, s.widthUnit), this._addUnit(o, s.heightUnit), this._initNumericTextbox(e.find("#k-editor-table-width"), "width", s, i), this._initNumericTextbox(e.find("#k-editor-table-height"), "height", s, i), this._initNumericTextbox(e.find("#k-editor-table-columns"), "columns", s, i, {
            			min: 1,
            			value: 4
            		}), this._initNumericTextbox(e.find("#k-editor-table-rows"), "rows", s, i, {
            			min: 1,
            			value: 4
            		}), this._initDropDownList(e.find("#k-editor-table-width-type"), "widthUnit", s, i, o), this._initDropDownList(e.find("#k-editor-table-height-type"), "heightUnit", s, i, o), this._initNumericTextbox(e.find("#k-editor-table-cell-spacing"), "cellSpacing", s, i), this._initNumericTextbox(e.find("#k-editor-table-cell-padding"), "cellPadding", s, i), this._initTableAlignmentDropDown(e.find("#k-editor-table-alignment"), s), this._initColorPicker(e.find("#k-editor-table-bg"), "bgColor", s, i), this._initInput(e.find("#k-editor-css-class"), "className", s, i), this._initInput(e.find("#k-editor-id"), "id", s, i), this._initNumericTextbox(e.find("#k-editor-border-width"), "borderWidth", s, i), this._initColorPicker(e.find("#k-editor-border-color"), "borderColor", s, i), this._initDropDownList(e.find("#k-editor-border-style"), "borderStyle", s, i, r), this._initCheckbox(e.find("#k-editor-collapse-borders"), "collapseBorders", s, i)
            	},
            	_initCellViewComponents: function (e, t)
            	{
            		var n, i = this.components,
                        s = i.cellView = {};
            		t.selectedCells = t.selectedCells = t.selectedCells || [], n = t.selectedCells[0] || {
            			borderStyle: "",
            			wrapText: !0
            		}, this._addUnit(o, n.widthUnit), this._addUnit(o, n.heightUnit), this._initCheckbox(e.find("#k-editor-selectAllCells"), "selectAllCells", t.tableProperties, s), this._initNumericTextbox(e.find("#k-editor-cell-width"), "width", n, s), this._initNumericTextbox(e.find("#k-editor-cell-height"), "height", n, s), this._initDropDownList(e.find("#k-editor-cell-width-type"), "widthUnit", n, s, o), this._initDropDownList(e.find("#k-editor-cell-height-type"), "heightUnit", n, s, o), this._initNumericTextbox(e.find("#k-editor-table-cell-margin"), "cellMargin", n, s), this._initNumericTextbox(e.find("#k-editor-table-cells-padding"), "cellPadding", n, s), this._initCellAlignmentDropDown(e.find("#k-editor-cell-alignment"), n), this._initColorPicker(e.find("#k-editor-cell-bg"), "bgColor", n, s), this._initInput(e.find("#k-editor-cell-css-class"), "className", n, s), this._initInput(e.find("#k-editor-cell-id"), "id", n, s), this._initNumericTextbox(e.find("#k-editor-cell-border-width"), "borderWidth", n, s), this._initColorPicker(e.find("#k-editor-cell-border-color"), "borderColor", n, s), this._initDropDownList(e.find("#k-editor-cell-border-style"), "borderStyle", n, s, r), this._initCheckbox(e.find("#k-editor-wrap-text"), "wrapText", n, s)
            	},
            	_initAccessibilityViewComponents: function (e, t)
            	{
            		var n = this.components,
                        i = n.accessibilityView = {},
                        o = t.tableProperties;
            		this._initInput(e.find("#k-editor-table-caption"), "captionContent", o, i), this._initAccessibilityAlignmentDropDown(e.find("#k-editor-accessibility-alignment"), o), this._initInput(e.find("#k-editor-accessibility-summary"), "summary", o, i), this._initCheckbox(e.find("#k-editor-cells-headers"), "cellsWithHeaders", o, i)
            	},
            	_initNumericTextbox: function (t, n, o, r, s)
            	{
            		var a = r[n] = t.kendoNumericTextBox(s ? e.extend({}, i, s) : i).data("kendoNumericTextBox");
            		n in o && a.value(parseInt(o[n], 10))
            	},
            	_initDropDownList: function (e, t, n, i, o)
            	{
            		var r = i[t] = e.kendoDropDownList({
            			dataSource: o
            		}).data("kendoDropDownList");
            		this._setComponentValue(r, n, t)
            	},
            	_initTableAlignmentDropDown: function (e, t)
            	{
            		var n = this.options.messages,
                        i = this.components.tableView,
                        o = s.dataSource;
            		o[0].tooltip = n.alignLeft, o[1].tooltip = n.alignCenter, o[2].tooltip = n.alignRight, o[3].tooltip = n.alignRemove, this._initAlignmentDropDown(e, s, "alignment", t, i)
            	},
            	_initCellAlignmentDropDown: function (e, t)
            	{
            		var n = this.options.messages,
                        i = this.components.cellView,
                        o = a.dataSource;
            		o[0].tooltip = n.alignLeftTop, o[1].tooltip = n.alignCenterTop, o[2].tooltip = n.alignRightTop, o[3].tooltip = n.alignLeftMiddle, o[4].tooltip = n.alignCenterMiddle, o[5].tooltip = n.alignRightMiddle, o[6].tooltip = n.alignLeftBottom, o[7].tooltip = n.alignCenterBottom, o[8].tooltip = n.alignRightBottom, o[9].tooltip = n.alignRemove, this._initAlignmentDropDown(e, a, "alignment", t, i)
            	},
            	_initAccessibilityAlignmentDropDown: function (e, t)
            	{
            		var n = this.options.messages,
                        i = this.components.accessibilityView,
                        o = l.dataSource;
            		o[0].tooltip = n.alignLeftTop, o[1].tooltip = n.alignCenterTop, o[2].tooltip = n.alignRightTop, o[3].tooltip = n.alignLeftBottom, o[4].tooltip = n.alignCenterBottom, o[5].tooltip = n.alignRightBottom, o[6].tooltip = n.alignRemove, this._initAlignmentDropDown(e, l, "captionAlignment", t, i)
            	},
            	_initAlignmentDropDown: function (e, t, n, i, o)
            	{
            		var r = o[n] = e.kendoDropDownList(t).data("kendoDropDownList");
            		r.list.addClass("k-align").css("width", "110px"), this._setComponentValue(r, i, n)
            	},
            	_setComponentValue: function (e, t, n)
            	{
            		n in t && e.value(t[n])
            	},
            	_initColorPicker: function (e, t, n, i)
            	{
            		var o = i[t] = e.kendoColorPicker().data("kendoColorPicker");
            		n[t] && o.value(n[t])
            	},
            	_initInput: function (e, t, n, i)
            	{
            		var o = i[t] = e.get(0);
            		t in n && (o.value = n[t])
            	},
            	_initCheckbox: function (e, t, n, i)
            	{
            		var o = i[t] = e.get(0);
            		t in n && (o.checked = n[t])
            	},
            	destroy: function ()
            	{
            		this._destroyComponents(this.components.tableView), this._destroyComponents(this.components.cellView), this._destroyComponents(this.components.accessibilityView), this._destroyComponents(this.components), delete this.components
            	},
            	_destroyComponents: function (e)
            	{
            		for (var t in e) e[t].destroy && e[t].destroy(), delete e[t]
            	},
            	_dialogTemplate: function (e)
            	{
            		return n.template(d)({
            			messages: e
            		})
            	}
            });
		n.ui.editor.TableWizardDialog = c
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("kendo.editor.min", ["kendo.combobox.min", "kendo.dropdownlist.min", "kendo.resizable.min", "kendo.window.min", "kendo.colorpicker.min", "kendo.imagebrowser.min", "util/undoredostack.min", "editor/main.min", "editor/dom.min", "editor/serializer.min", "editor/range.min", "editor/system.min", "editor/inlineformat.min", "editor/formatblock.min", "editor/linebreak.min", "editor/lists.min", "editor/link.min", "editor/file.min", "editor/image.min", "editor/components.min", "editor/indent.min", "editor/viewhtml.min", "editor/formatting.min", "editor/toolbar.min", "editor/tables.min", "editor/resizing/column-resizing.min", "editor/resizing/row-resizing.min", "editor/resizing/table-resizing.min", "editor/resizing/table-resize-handle.min", "editor/immutables.min", "editor/table-wizard/table-wizard-command.min", "editor/table-wizard/table-wizard-dialog.min"], e)
}(function ()
{
	return window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
});;
! function (e, define)
{
	define("kendo.multiselect.min", ["kendo.list.min", "kendo.mobile.scroller.min"], e)
}(function ()
{
	return function (e, t)
	{
		function a(e, t)
		{
			var a;
			if (null === e && null !== t || null !== e && null === t) return !1;
			if (a = e.length, a !== t.length) return !1;
			for (; a--;)
				if (e[a] !== t[a]) return !1;
			return !0
		}
		var i = window.kendo,
            n = i.ui,
            s = n.List,
            l = i.keys,
            o = i._activeElement,
            r = i.data.ObservableArray,
            u = e.proxy,
            c = "id",
            d = "li",
            p = "accept",
            _ = "filter",
            h = "rebind",
            f = "open",
            m = "close",
            g = "change",
            v = "progress",
            T = "select",
            w = "deselect",
            b = "aria-disabled",
            k = "k-state-focused",
            y = "k-loading-hidden",
            x = "k-state-hover",
            C = "k-state-disabled",
            I = "disabled",
            V = "readonly",
            S = ".kendoMultiSelect",
            D = "click" + S,
            O = "keydown" + S,
            L = "mouseenter" + S,
            F = "mouseleave" + S,
            B = L + " " + F,
            E = /"/g,
            A = e.isArray,
            M = ["font-family", "font-size", "font-stretch", "font-style", "font-weight", "letter-spacing", "text-transform", "line-height"],
            H = s.extend({
            	init: function (t, a)
            	{
            		var n, l, o = this;
            		o.ns = S, s.fn.init.call(o, t, a), o._optionsMap = {}, o._customOptions = {}, o._wrapper(), o._tagList(), o._input(), o._textContainer(), o._loader(), o._clearButton(), o._tabindex(o.input), t = o.element.attr("multiple", "multiple").hide(), a = o.options, a.placeholder || (a.placeholder = t.data("placeholder")), n = t.attr(c), n && (o._tagID = n + "_tag_active", n += "_taglist", o.tagList.attr(c, n)), o._aria(n), o._dataSource(), o._ignoreCase(), o._popup(), o._tagTemplate(), o.requireValueMapper(o.options), o._initList(), o._reset(), o._enable(), o._placeholder(), a.autoBind ? o.dataSource.fetch() : a.value && o._preselect(a.value), l = e(o.element).parents("fieldset").is(":disabled"), l && o.enable(!1), i.notify(o)
            	},
            	options: {
            		name: "MultiSelect",
            		tagMode: "multiple",
            		enabled: !0,
            		autoBind: !0,
            		autoClose: !0,
            		highlightFirst: !0,
            		dataTextField: "",
            		dataValueField: "",
            		filter: "startswith",
            		ignoreCase: !0,
            		minLength: 1,
            		enforceMinLength: !1,
            		delay: 100,
            		value: null,
            		maxSelectedItems: null,
            		placeholder: "",
            		height: 200,
            		animation: {},
            		virtual: !1,
            		itemTemplate: "",
            		tagTemplate: "",
            		groupTemplate: "#:data#",
            		fixedGroupTemplate: "#:data#",
            		clearButton: !0
            	},
            	events: [f, m, g, T, w, "filtering", "dataBinding", "dataBound"],
            	setDataSource: function (e)
            	{
            		this.options.dataSource = e, this._state = "", this._dataSource(), this.listView.setDataSource(this.dataSource), this.options.autoBind && this.dataSource.fetch()
            	},
            	setOptions: function (e)
            	{
            		var t = this._listOptions(e);
            		s.fn.setOptions.call(this, e), this.listView.setOptions(t), this._accessors(), this._aria(this.tagList.attr(c)), this._tagTemplate()
            	},
            	currentTag: function (e)
            	{
            		var a = this;
            		return e === t ? a._currentTag : (a._currentTag && (a._currentTag.removeClass(k).removeAttr(c), a.input.removeAttr("aria-activedescendant")), e && (e.addClass(k).attr(c, a._tagID), a.input.attr("aria-activedescendant", a._tagID)), a._currentTag = e, t)
            	},
            	dataItems: function ()
            	{
            		return this.listView.selectedDataItems()
            	},
            	destroy: function ()
            	{
            		var e = this,
                        t = e.ns;
            		clearTimeout(e._busy), clearTimeout(e._typingTimeout), e.wrapper.off(t), e.tagList.off(t), e.input.off(t), e._clear.off(t), s.fn.destroy.call(e)
            	},
            	_activateItem: function ()
            	{
            		s.fn._activateItem.call(this), this.currentTag(null)
            	},
            	_listOptions: function (t)
            	{
            		var a = this,
                        n = s.fn._listOptions.call(a, e.extend(t, {
                        	selectedItemChange: u(a._selectedItemChange, a),
                        	selectable: "multiple"
                        })),
                        l = this.options.itemTemplate || this.options.template,
                        o = n.itemTemplate || l || n.template;
            		return o || (o = "#:" + i.expr(n.dataTextField, "data") + "#"), n.template = o, n
            	},
            	_setListValue: function ()
            	{
            		s.fn._setListValue.call(this, this._initialValues.slice(0))
            	},
            	_listChange: function (e)
            	{
            		var a, i = this.dataSource.flatView(),
                        n = this._optionsMap,
                        s = this._value;
            		for (this._state === h && (this._state = ""), a = 0; a < e.added.length; a++)
            			if (n[s(e.added[a].dataItem)] === t) {
            				this._render(i);
            				break
            			}
            		this._selectValue(e.added, e.removed)
            	},
            	_selectedItemChange: function (e)
            	{
            		var t, a, i = e.items;
            		for (a = 0; a < i.length; a++) t = i[a], this.tagList.children().eq(t.index).children("span:first").html(this.tagTextTemplate(t.item))
            	},
            	_wrapperMousedown: function (t)
            	{
            		var a = this,
                        n = "input" !== t.target.nodeName.toLowerCase(),
                        s = e(t.target),
                        l = s.hasClass("k-select") || s.hasClass("k-icon");
            		l && (l = !s.closest(".k-select").children(".k-i-arrow-s").length), !n || l && i.support.mobileOS || t.preventDefault(), l || (a.input[0] !== o() && n && a.input.focus(), 1 === a.options.minLength && a.open())
            	},
            	_inputFocus: function ()
            	{
            		this._placeholder(!1), this.wrapper.addClass(k)
            	},
            	_inputFocusout: function ()
            	{
            		var e = this;
            		clearTimeout(e._typingTimeout), e.wrapper.removeClass(k), e._placeholder(!e.listView.selectedDataItems()[0], !0), e.close(), e._state === _ && (e._state = p, e.listView.skipUpdate(!0)), e.element.blur()
            	},
            	_removeTag: function (e)
            	{
            		var a, i, n = this,
                        s = n._state,
                        l = e.index(),
                        o = n.listView,
                        r = o.value()[l],
                        u = n.listView.selectedDataItems()[l],
                        c = n._customOptions[r];
            		return n.trigger(w, {
            			dataItem: u,
            			item: e
            		}) ? (n._close(), t) : (c !== t || s !== p && s !== _ || (c = n._optionsMap[r]), i = function ()
            		{
            			n.currentTag(null), n._change(), n._close()
            		}, c === t ? o.select(o.select()[l]).done(i) : (a = n.element[0].children[c], a.selected = !1, o.removeAt(l), e.remove(), i()), t)
            	},
            	_tagListClick: function (t)
            	{
            		var a = e(t.currentTarget);
            		a.children(".k-i-arrow-s").length || this._removeTag(a.closest(d))
            	},
            	_clearClick: function ()
            	{
            		this.value(null), this.trigger("change")
            	},
            	_editable: function (t)
            	{
            		var a = this,
                        i = t.disable,
                        n = t.readonly,
                        s = a.wrapper.off(S),
                        l = a.tagList.off(S),
                        o = a.element.add(a.input.off(S));
            		n || i ? (i ? s.addClass(C) : s.removeClass(C), o.attr(I, i).attr(V, n).attr(b, i)) : (s.removeClass(C).on(B, a._toggleHover).on("mousedown" + S + " touchend" + S, u(a._wrapperMousedown, a)), a.input.on(O, u(a._keydown, a)).on("paste" + S, u(a._search, a)).on("focus" + S, u(a._inputFocus, a)).on("focusout" + S, u(a._inputFocusout, a)), a._clear.on("click" + S, u(a._clearClick, a)), o.removeAttr(I).removeAttr(V).attr(b, !1), l.on(L, d, function ()
            		{
            			e(this).addClass(x)
            		}).on(F, d, function ()
            		{
            			e(this).removeClass(x)
            		}).on(D, "li.k-button .k-select", u(a._tagListClick, a)))
            	},
            	_close: function ()
            	{
            		var e = this;
            		e.options.autoClose ? e.close() : e.popup.position()
            	},
            	_filterSource: function (e, t)
            	{
            		t || (t = this._retrieveData), this._retrieveData = !1, s.fn._filterSource.call(this, e, t)
            	},
            	close: function ()
            	{
            		this.popup.close()
            	},
            	open: function ()
            	{
            		var e = this;
            		e._request && (e._retrieveData = !1), e._retrieveData || !e.listView.bound() || e._state === p ? (e._open = !0, e._state = h, e.listView.skipUpdate(!0), e._filterSource()) : e._allowOpening() && (e.popup.open(), e._focusItem())
            	},
            	toggle: function (e)
            	{
            		e = e !== t ? e : !this.popup.visible(), this[e ? f : m]()
            	},
            	refresh: function ()
            	{
            		this.listView.refresh()
            	},
            	_listBound: function ()
            	{
            		var e = this,
                        a = e.dataSource.flatView(),
                        i = e.listView.skip();
            		e._render(a), e._renderFooter(), e._renderNoData(), e._toggleNoData(!a.length), e._resizePopup(), e._open && (e._open = !1, e.toggle(e._allowOpening())), e.popup.position(), !e.options.highlightFirst || i !== t && 0 !== i || e.listView.focusFirst(), e._touchScroller && e._touchScroller.reset(), e._hideBusy(), e._makeUnselectable(), e.trigger("dataBound")
            	},
            	_inputValue: function ()
            	{
            		var e = this,
                        t = e.input.val();
            		return e.options.placeholder === t && (t = ""), t
            	},
            	value: function (e)
            	{
            		var a = this,
                        i = a.listView,
                        n = i.value().slice(),
                        s = a.options.maxSelectedItems,
                        l = i.bound() && i.isFiltered();
            		return e === t ? n : (a.requireValueMapper(a.options, e), e = a._normalizeValues(e), null !== s && e.length > s && (e = e.slice(0, s)), l && a._clearFilter(), i.value(e), a._old = i.value(), l || a._fetchData(), t)
            	},
            	_preselect: function (t, a)
            	{
            		var n = this;
            		A(t) || t instanceof i.data.ObservableArray || (t = [t]), (e.isPlainObject(t[0]) || t[0] instanceof i.data.ObservableObject || !n.options.dataValueField) && (n.dataSource.data(t), n.value(a || n._initialValues), n._retrieveData = !0)
            	},
            	_setOption: function (e, t)
            	{
            		var a = this.element[0].children[this._optionsMap[e]];
            		a && (a.selected = t)
            	},
            	_fetchData: function ()
            	{
            		var e = this,
                        t = !!e.dataSource.view().length,
                        a = 0 === e.listView.value().length;
            		a || e._request || (e._retrieveData || !e._fetch && !t) && (e._fetch = !0, e._retrieveData = !1, e.dataSource.read().done(function ()
            		{
            			e._fetch = !1
            		}))
            	},
            	_isBound: function ()
            	{
            		return this.listView.bound() && !this._retrieveData
            	},
            	_dataSource: function ()
            	{
            		var e = this,
                        t = e.element,
                        a = e.options,
                        n = a.dataSource || {};
            		n = A(n) ? {
            			data: n
            		} : n, n.select = t, n.fields = [{
            			field: a.dataTextField
            		}, {
            			field: a.dataValueField
            		}], e.dataSource && e._refreshHandler ? e._unbindDataSource() : (e._progressHandler = u(e._showBusy, e), e._errorHandler = u(e._hideBusy, e)), e.dataSource = i.data.DataSource.create(n).bind(v, e._progressHandler).bind("error", e._errorHandler)
            	},
            	_reset: function ()
            	{
            		var t = this,
                        a = t.element,
                        i = a.attr("form"),
                        n = i ? e("#" + i) : a.closest("form");
            		n[0] && (t._resetHandler = function ()
            		{
            			setTimeout(function ()
            			{
            				t.value(t._initialValues), t._placeholder()
            			})
            		}, t._form = n.on("reset", t._resetHandler))
            	},
            	_initValue: function ()
            	{
            		var e = this.options.value || this.element.val();
            		this._old = this._initialValues = this._normalizeValues(e)
            	},
            	_normalizeValues: function (t)
            	{
            		var a = this;
            		return null === t ? t = [] : t && e.isPlainObject(t) ? t = [a._value(t)] : t && e.isPlainObject(t[0]) ? t = e.map(t, function (e)
            		{
            			return a._value(e)
            		}) : A(t) || t instanceof r ? A(t) && (t = t.slice()) : t = [t], t
            	},
            	_change: function ()
            	{
            		var e = this,
                        t = e.value();
            		a(t, e._old) || (e._old = t.slice(), e.trigger(g), e.element.trigger(g))
            	},
            	_click: function (e)
            	{
            		var t = this,
                        a = e.item;
            		e.preventDefault(), t._select(a).done(function ()
            		{
            			t._change(), t._close()
            		})
            	},
            	_keydown: function (a)
            	{
            		var n, s = this,
                        o = a.keyCode,
                        r = s._currentTag,
                        u = s.listView,
                        c = u.focus(),
                        d = s.input.val(),
                        p = i.support.isRtl(s.wrapper),
                        _ = s.popup.visible();
            		if (o === l.DOWN) {
            			if (a.preventDefault(), !_) return s.open(), c || u.focusFirst(), t;
            			c ? (u.focusNext(), u.focus() || u.focusLast()) : u.focusFirst()
            		} else if (o === l.UP) _ && (c && u.focusPrev(), u.focus() || s.close()), a.preventDefault();
            		else if (o === l.LEFT && !p || o === l.RIGHT && p) d || (r = r ? r.prev() : e(s.tagList[0].lastChild), r[0] && s.currentTag(r));
            		else if (o === l.RIGHT && !p || o === l.LEFT && p) !d && r && (r = r.next(), s.currentTag(r[0] ? r : null));
            		else if (o === l.ENTER && _) s._select(c).done(function ()
            		{
            			s._change(), s._close()
            		}), a.preventDefault();
            		else if (o === l.ESC) _ ? a.preventDefault() : s.currentTag(null), s.close();
            		else if (o === l.HOME) _ ? u.focusFirst() : d || (r = s.tagList[0].firstChild, r && s.currentTag(e(r)));
            		else if (o === l.END) _ ? u.focusLast() : d || (r = s.tagList[0].lastChild, r && s.currentTag(e(r)));
            		else if (o !== l.DELETE && o !== l.BACKSPACE || d) !s.popup.visible() || o !== l.PAGEDOWN && o !== l.PAGEUP ? (clearTimeout(s._typingTimeout), setTimeout(function ()
            		{
            			s._scale()
            		}), s._search()) : (a.preventDefault(), n = o === l.PAGEDOWN ? 1 : -1, u.scrollWith(n * u.screenHeight()));
            		else {
            			if ("single" === s.options.tagMode) return u.value([]), s._change(), s._close(), t;
            			o !== l.BACKSPACE || r || (r = e(s.tagList[0].lastChild)), r && r[0] && s._removeTag(r)
            		}
            	},
            	_hideBusy: function ()
            	{
            		var e = this;
            		clearTimeout(e._busy), e.input.attr("aria-busy", !1), e._loading.addClass(y), e._request = !1, e._busy = null, e._showClear()
            	},
            	_showBusyHandler: function ()
            	{
            		this.input.attr("aria-busy", !0), this._loading.removeClass(y), this._hideClear()
            	},
            	_showBusy: function ()
            	{
            		var e = this;
            		e._request = !0, e._busy || (e._busy = setTimeout(u(e._showBusyHandler, e), 100))
            	},
            	_placeholder: function (e, a)
            	{
            		var n = this,
                        s = n.input,
                        l = o(),
                        r = n.options.placeholder,
                        u = s.val(),
                        c = s[0] === l,
                        d = u.length;
            		c && !n.options.autoClose && u !== r || (d = 0, u = ""), e === t && (e = !1, s[0] !== l && (e = !n.listView.selectedDataItems()[0])), n._prev = u, s.toggleClass("k-readonly", e).val(e ? r : u), c && !a && i.caret(s[0], d, d), n._scale()
            	},
            	_scale: function ()
            	{
            		var e, t = this,
                        a = t.wrapper,
                        i = a.width(),
                        n = t._span.text(t.input.val());
            		a.is(":visible") ? e = n.width() + 25 : (n.appendTo(document.documentElement), i = e = n.width() + 25, n.appendTo(a)), t.input.width(e > i ? i : e)
            	},
            	_option: function (e, a, n)
            	{
            		var s = "<option";
            		return e !== t && (e += "", e.indexOf('"') !== -1 && (e = e.replace(E, "&quot;")), s += ' value="' + e + '"'), n && (s += " selected"), s += ">", a !== t && (s += i.htmlEncode(a)), s += "</option>"
            	},
            	_render: function (e)
            	{
            		var t, a, i, n, s, l, o = this.listView.selectedDataItems(),
                        r = this.listView.value(),
                        u = e.length,
                        c = "";
            		for (r.length !== o.length && (o = this._buildSelectedItems(r)), s = {}, l = {}, n = 0; n < u; n++) a = e[n], i = this._value(a), t = this._selectedItemIndex(i, o), t !== -1 && o.splice(t, 1), l[i] = n, c += this._option(i, this._text(a), t !== -1);
            		if (o.length)
            			for (n = 0; n < o.length; n++) a = o[n], i = this._value(a), s[i] = u, l[i] = u, u += 1, c += this._option(i, this._text(a), !0);
            		this._customOptions = s, this._optionsMap = l, this.element.html(c)
            	},
            	_buildSelectedItems: function (e)
            	{
            		var t, a, i = this.options.dataValueField,
                        n = this.options.dataTextField,
                        s = [];
            		for (a = 0; a < e.length; a++) t = {}, t[i] = e[a], t[n] = e[a], s.push(t);
            		return s
            	},
            	_selectedItemIndex: function (e, t)
            	{
            		for (var a = this._value, i = 0; i < t.length; i++)
            			if (e === a(t[i])) return i;
            		return -1
            	},
            	_search: function ()
            	{
            		var e = this;
            		e._typingTimeout = setTimeout(function ()
            		{
            			var t = e.input.val();
            			e._prev !== t && (e._prev = t, e.search(t))
            		}, e.options.delay)
            	},
            	_allowOpening: function ()
            	{
            		return this._allowSelection() && s.fn._allowOpening.call(this)
            	},
            	_allowSelection: function ()
            	{
            		var e = this.options.maxSelectedItems;
            		return null === e || e > this.listView.value().length
            	},
            	_angularTagItems: function (t)
            	{
            		var a = this;
            		a.angular(t, function ()
            		{
            			return {
            				elements: a.tagList[0].children,
            				data: e.map(a.dataItems(), function (e)
            				{
            					return {
            						dataItem: e
            					}
            				})
            			}
            		})
            	},
            	_selectValue: function (e, t)
            	{
            		var a, i, n, s = this,
                        l = s.value(),
                        o = s.dataSource.total(),
                        r = s.tagList,
                        u = s._value;
            		if (s._angularTagItems("cleanup"), "multiple" === s.options.tagMode) {
            			for (n = t.length - 1; n > -1; n--) a = t[n], r[0].removeChild(r[0].children[a.position]), s._setOption(u(a.dataItem), !1);
            			for (n = 0; n < e.length; n++) i = e[n], r.append(s.tagTemplate(i.dataItem)), s._setOption(u(i.dataItem), !0)
            		} else {
            			for ((!s._maxTotal || s._maxTotal < o) && (s._maxTotal = o), r.html(""), l.length && r.append(s.tagTemplate({
            				values: l,
            				dataItems: s.dataItems(),
            				maxTotal: s._maxTotal,
            				currentTotal: o
            			})), n = t.length - 1; n > -1; n--) s._setOption(u(t[n].dataItem), !1);
            			for (n = 0; n < e.length; n++) s._setOption(u(e[n].dataItem), !0)
            		}
            		s._angularTagItems("compile"), s._placeholder()
            	},
            	_select: function (t)
            	{
            		var a, i, n, s, l = e.Deferred().resolve();
            		return t ? (a = this, i = a.listView, n = i.dataItemByIndex(i.getElementIndex(t)), s = t.hasClass("k-state-selected"), a._state === h && (a._state = ""), a._allowSelection() ? a.trigger(s ? w : T, {
            			dataItem: n,
            			item: t
            		}) ? (a._close(), l) : i.select(t).done(function ()
            		{
            			a._placeholder(), a._state === _ && (a._state = p, i.skipUpdate(!0))
            		}) : l) : l
            	},
            	_input: function ()
            	{
            		var t = this,
                        a = t.element,
                        i = a[0].accessKey,
                        n = t._innerWrapper.children("input.k-input");
            		n[0] || (n = e('<input class="k-input" style="width: 25px" />').appendTo(t._innerWrapper)), a.removeAttr("accesskey"), t._focused = t.input = n.attr({
            			accesskey: i,
            			autocomplete: "off",
            			role: "listbox",
            			title: a[0].title,
            			"aria-expanded": !1
            		})
            	},
            	_tagList: function ()
            	{
            		var t = this,
                        a = t._innerWrapper.children("ul");
            		a[0] || (a = e('<ul role="listbox" deselectable="on" class="k-reset"/>').appendTo(t._innerWrapper)), t.tagList = a
            	},
            	_tagTemplate: function ()
            	{
            		var e, t = this,
                        a = t.options,
                        n = a.tagTemplate,
                        s = a.dataSource,
                        l = "multiple" === a.tagMode;
            		t.element[0].length && !s && (a.dataTextField = a.dataTextField || "text", a.dataValueField = a.dataValueField || "value"), e = l ? i.template("#:" + i.expr(a.dataTextField, "data") + "#", {
            			useWithBlock: !1
            		}) : i.template("#:values.length# item(s) selected"), t.tagTextTemplate = n = n ? i.template(n) : e, t.tagTemplate = function (e)
            		{
            			return '<li class="k-button" deselectable="on"><span deselectable="on">' + n(e) + '</span><span unselectable="on" aria-label="' + (l ? "delete" : "open") + '" class="k-select"><span class="k-icon ' + (l ? "k-i-close" : "k-i-arrow-s") + '"></span></span></li>'
            		}
            	},
            	_loader: function ()
            	{
            		this._loading = e('<span class="k-icon k-i-loading ' + y + '"></span>').insertAfter(this.input)
            	},
            	_clearButton: function ()
            	{
            		this._clear = e('<span deselectable="on" class="k-icon k-i-close" title="clear"></span>').attr({
            			role: "button",
            			tabIndex: -1
            		}), this.options.clearButton && this._clear.insertAfter(this.input)
            	},
            	_textContainer: function ()
            	{
            		var t = i.getComputedStyles(this.input[0], M);
            		t.position = "absolute", t.visibility = "hidden", t.top = -3333, t.left = -3333, this._span = e("<span/>").css(t).appendTo(this.wrapper)
            	},
            	_wrapper: function ()
            	{
            		var t = this,
                        a = t.element,
                        i = a.parent("span.k-multiselect");
            		i[0] || (i = a.wrap('<div class="k-widget k-multiselect k-header" deselectable="on" />').parent(), i[0].style.cssText = a[0].style.cssText, i[0].title = a[0].title, e('<div class="k-multiselect-wrap k-floatwrap" deselectable="on" />').insertBefore(a)), t.wrapper = i.addClass(a[0].className).css("display", ""), t._innerWrapper = e(i[0].firstChild)
            	}
            });
		n.plugin(H)
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, a)
{
	(a || t)()
});;
! function (t, define)
{
	define("kendo.validator.min", ["kendo.core.min"], t)
}(function ()
{
	return function (t, e)
	{
		function a(e)
		{
			var a, r = s.ui.validator.ruleResolvers || {},
                n = {};
			for (a in r) t.extend(!0, n, r[a].resolve(e));
			return n
		}

		function r(t)
		{
			return t.replace(/&amp/g, "&amp;").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
		}

		function n(t)
		{
			return t = (t + "").split("."), t.length > 1 ? t[1].length : 0
		}

		function i(e)
		{
			return t(t.parseHTML ? t.parseHTML(e) : e)
		}

		function u(e, a)
		{
			var r, n, i, u, l = t();
			for (i = 0, u = e.length; i < u; i++) r = e[i], c.test(r.className) && (n = r.getAttribute(s.attr("for")), n === a && (l = l.add(r)));
			return l
		}
		var l, s = window.kendo,
            o = s.ui.Widget,
            d = ".kendoValidator",
            F = "k-invalid-msg",
            c = RegExp(F, "i"),
            f = "k-invalid",
            p = "k-valid",
            h = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,
            m = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
            v = ":input:not(:button,[type=submit],[type=reset],[disabled],[readonly])",
            g = ":checkbox:not([disabled],[readonly])",
            D = "[type=number],[type=range]",
            _ = "blur",
            y = "name",
            k = "form",
            E = "novalidate",
            A = t.proxy,
            b = function (t, e)
            {
            	return "string" == typeof e && (e = RegExp("^(?:" + e + ")$")), e.test(t)
            },
            C = function (t, e, a)
            {
            	var r = t.val();
            	return !t.filter(e).length || "" === r || b(r, a)
            },
            x = function (t, e)
            {
            	return !!t.length && null != t[0].attributes[e]
            };
		s.ui.validator || (s.ui.validator = {
			rules: {},
			messages: {}
		}), l = o.extend({
			init: function (e, r)
			{
				var n = this,
                    i = a(e),
                    u = "[" + s.attr("validate") + "!=false]";
				r = r || {}, r.rules = t.extend({}, s.ui.validator.rules, i.rules, r.rules), r.messages = t.extend({}, s.ui.validator.messages, i.messages, r.messages), o.fn.init.call(n, e, r), n._errorTemplate = s.template(n.options.errorTemplate), n.element.is(k) && n.element.attr(E, E), n._inputSelector = v + u, n._checkboxSelector = g + u, n._errors = {}, n._attachEvents(), n._isValidated = !1
			},
			events: ["validate", "change"],
			options: {
				name: "Validator",
				errorTemplate: '<span class="k-widget k-tooltip k-tooltip-validation"><span class="k-icon k-i-warning"> </span> #=message#</span>',
				messages: {
					required: "{0} is required",
					pattern: "{0} is not valid",
					min: "{0} should be greater than or equal to {1}",
					max: "{0} should be smaller than or equal to {1}",
					step: "{0} is not valid",
					email: "{0} is not valid email",
					url: "{0} is not valid URL",
					date: "{0} is not valid date",
					dateCompare: "End date should be greater than or equal to the start date"
				},
				rules: {
					required: function (t)
					{
						var e = t.filter("[type=checkbox]").length && !t.is(":checked"),
                            a = t.val();
						return !(x(t, "required") && (!a || "" === a || 0 === a.length || e))
					},
					pattern: function (t)
					{
						return !t.filter("[type=text],[type=email],[type=url],[type=tel],[type=search],[type=password]").filter("[pattern]").length || "" === t.val() || b(t.val(), t.attr("pattern"))
					},
					min: function (t)
					{
						if (t.filter(D + ",[" + s.attr("type") + "=number]").filter("[min]").length && "" !== t.val()) {
							var e = parseFloat(t.attr("min")) || 0,
                                a = s.parseFloat(t.val());
							return e <= a
						}
						return !0
					},
					max: function (t)
					{
						if (t.filter(D + ",[" + s.attr("type") + "=number]").filter("[max]").length && "" !== t.val()) {
							var e = parseFloat(t.attr("max")) || 0,
                                a = s.parseFloat(t.val());
							return e >= a
						}
						return !0
					},
					step: function (t)
					{
						if (t.filter(D + ",[" + s.attr("type") + "=number]").filter("[step]").length && "" !== t.val()) {
							var e, a = parseFloat(t.attr("min")) || 0,
                                r = parseFloat(t.attr("step")) || 1,
                                i = parseFloat(t.val()),
                                u = n(r);
							return u ? (e = Math.pow(10, u), Math.floor((i - a) * e) % (r * e) / Math.pow(100, u) === 0) : (i - a) % r === 0
						}
						return !0
					},
					email: function (t)
					{
						return C(t, "[type=email],[" + s.attr("type") + "=email]", h)
					},
					url: function (t)
					{
						return C(t, "[type=url],[" + s.attr("type") + "=url]", m)
					},
					date: function (t)
					{
						return !t.filter("[type^=date],[" + s.attr("type") + "=date]").length || "" === t.val() || null !== s.parseDate(t.val(), t.attr(s.attr("format")))
					}
				},
				validateOnBlur: !0
			},
			destroy: function ()
			{
				o.fn.destroy.call(this), this.element.off(d)
			},
			value: function ()
			{
				return !!this._isValidated && 0 === this.errors().length
			},
			_submit: function (t)
			{
				return !!this.validate() || (t.stopPropagation(), t.stopImmediatePropagation(), t.preventDefault(), !1)
			},
			_checkElement: function (t)
			{
				var e = this.value();
				this.validateInput(t), this.value() !== e && this.trigger("change")
			},
			_attachEvents: function ()
			{
				var e = this;
				e.element.is(k) && e.element.on("submit" + d, A(e._submit, e)), e.options.validateOnBlur && (e.element.is(v) ? (e.element.on(_ + d, function ()
				{
					e._checkElement(e.element)
				}), e.element.is(g) && e.element.on("click" + d, function ()
				{
					e._checkElement(e.element)
				})) : (e.element.on(_ + d, e._inputSelector, function ()
				{
					e._checkElement(t(this))
				}), e.element.on("click" + d, e._checkboxSelector, function ()
				{
					e._checkElement(t(this))
				})))
			},
			validate: function ()
			{
				var t, e, a, r, n = !1,
                    i = this.value();
				if (this._errors = {}, this.element.is(v)) n = this.validateInput(this.element);
				else {
					for (r = !1, t = this.element.find(this._inputSelector), e = 0, a = t.length; e < a; e++) this.validateInput(t.eq(e)) || (r = !0);
					n = !r
				}
				return this.trigger("validate", {
					valid: n
				}), i !== n && this.trigger("change"), n
			},
			validateInput: function (e)
			{
				var a, n, u, l, o, d, c, h, m, v;
				return e = t(e), this._isValidated = !0, a = this, n = a._errorTemplate, u = a._checkValidity(e), l = u.valid, o = "." + F, d = e.attr(y) || "", c = a._findMessageContainer(d).add(e.next(o).filter(function ()
				{
					var e = t(this);
					return !e.filter("[" + s.attr("for") + "]").length || e.attr(s.attr("for")) === d
				})).hide(), e.removeAttr("aria-invalid"), l ? delete a._errors[d] : (h = a._extractMessage(e, u.key), a._errors[d] = h, m = i(n({
					message: r(h)
				})), v = c.attr("id"), a._decorateMessageContainer(m, d), v && m.attr("id", v), c.replaceWith(m).length || m.insertAfter(e), m.show(), e.attr("aria-invalid", !0)), e.toggleClass(f, !l), e.toggleClass(p, l), l
			},
			hideMessages: function ()
			{
				var t = this,
                    e = "." + F,
                    a = t.element;
				a.is(v) ? a.next(e).hide() : a.find(e).hide()
			},
			_findMessageContainer: function (e)
			{
				var a, r, n, i = s.ui.validator.messageLocators,
                    l = t();
				for (r = 0, n = this.element.length; r < n; r++) l = l.add(u(this.element[r].getElementsByTagName("*"), e));
				for (a in i) l = l.add(i[a].locate(this.element, e));
				return l
			},
			_decorateMessageContainer: function (t, e)
			{
				var a, r = s.ui.validator.messageLocators;
				t.addClass(F).attr(s.attr("for"), e || "");
				for (a in r) r[a].decorate(t, e);
				t.attr("role", "alert")
			},
			_extractMessage: function (t, e)
			{
				var a = this,
                    r = a.options.messages[e],
                    n = t.attr(y);
				return r = s.isFunction(r) ? r(t) : r, s.format(t.attr(s.attr(e + "-msg")) || t.attr("validationMessage") || t.attr("title") || r || "", n, t.attr(e) || t.attr(s.attr(e)))
			},
			_checkValidity: function (t)
			{
				var e, a = this.options.rules;
				for (e in a)
					if (!a[e].call(this, t)) return {
						valid: !1,
						key: e
					};
				return {
					valid: !0
				}
			},
			errors: function ()
			{
				var t, e = [],
                    a = this._errors;
				for (t in a) e.push(a[t]);
				return e
			}
		}), s.ui.plugin(l)
	}(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (t, e, a)
{
	(a || e)()
});;
! function (e, define)
{
	define("aspnetmvc/kendo.data.aspnetmvc.min", ["kendo.data.min", "kendo.combobox.min", "kendo.multiselect.min", "kendo.validator.min"], e)
}(function ()
{
	! function (e, t)
	{
		function n(t, n, r)
		{
			var i, o = {};
			return t.sort ? (o[this.options.prefix + "sort"] = e.map(t.sort, function (e)
			{
				return e.field + "-" + e.dir
			}).join("~"), delete t.sort) : o[this.options.prefix + "sort"] = "", t.page && (o[this.options.prefix + "page"] = t.page, delete t.page), t.pageSize && (o[this.options.prefix + "pageSize"] = t.pageSize, delete t.pageSize), t.group ? (o[this.options.prefix + "group"] = e.map(t.group, function (e)
			{
				return e.field + "-" + e.dir
			}).join("~"), delete t.group) : o[this.options.prefix + "group"] = "", t.aggregate && (o[this.options.prefix + "aggregate"] = e.map(t.aggregate, function (e)
			{
				return e.field + "-" + e.aggregate
			}).join("~"), delete t.aggregate), t.filter ? (o[this.options.prefix + "filter"] = a(t.filter, r.encode), delete t.filter) : (o[this.options.prefix + "filter"] = "", delete t.filter), delete t.take, delete t.skip, i = new g(r), i.serialize(o, t, ""), o
		}

		function a(n, i)
		{
			return n.filters ? e.map(n.filters, function (e)
			{
				var t = e.filters && e.filters.length > 1,
                    n = a(e, i);
				return n && t && (n = "(" + n + ")"), n
			}).join("~" + n.logic + "~") : n.field ? n.field + "~" + n.operator + "~" + r(n.value, i) : t
		}

		function r(e, t)
		{
			if ("string" == typeof e) {
				if (!(e.indexOf("Date(") > -1)) return e = e.replace(l, "''"), t && (e = encodeURIComponent(e)), "'" + e + "'";
				e = new Date(parseInt(e.replace(/^\/Date\((.*?)\)\/$/, "$1"), 10))
			}
			return e && e.getTime ? "datetime'" + c.format("{0:yyyy-MM-ddTHH-mm-ss}", e) + "'" : e
		}

		function i(e, n)
		{
			return t !== e ? e : n
		}

		function o(t)
		{
			var n = t.HasSubgroups || t.hasSubgroups || !1,
                a = t.Items || t.items;
			return {
				value: i(t.Key, i(t.key, t.value)),
				field: t.Member || t.member || t.field,
				hasSubgroups: n,
				aggregates: d(t.Aggregates || t.aggregates),
				items: n ? e.map(a, o) : a
			}
		}

		function s(e)
		{
			var t = {};
			return t[e.AggregateMethodName.toLowerCase()] = e.Value, t
		}

		function d(e)
		{
			var t, n, a, r = {};
			for (t in e) {
				r = {}, a = e[t];
				for (n in a) r[n.toLowerCase()] = a[n];
				e[t] = r
			}
			return e
		}

		function u(e)
		{
			var t, n, a, r = {};
			for (t = 0, n = e.length; t < n; t++) a = e[t], r[a.Member] = f(!0, r[a.Member], s(a));
			return r
		}
		var c = window.kendo,
            l = /'/gi,
            f = e.extend,
            p = e.isArray,
            m = e.isPlainObject,
            v = ".",
            g = function (e)
            {
            	e = e || {}, this.culture = e.culture || c.culture(), this.stringifyDates = e.stringifyDates, this.decimalSeparator = this.culture.numberFormat[v]
            };
		g.prototype = g.fn = {
			serialize: function (e, t, n)
			{
				var a, r;
				for (r in t) a = n ? n + "." + r : r, this.serializeField(e, t[r], t, r, a)
			},
			serializeField: function (e, n, a, r, i)
			{
				p(n) ? this.serializeArray(e, n, i) : m(n) ? this.serialize(e, n, i) : e[i] === t && (e[i] = a[r] = this.serializeValue(n))
			},
			serializeArray: function (e, t, n)
			{
				var a, r, i, o, s;
				for (o = 0, s = 0; o < t.length; o++) a = t[o], r = "[" + s + "]", i = n + r, this.serializeField(e, a, t, r, i), s++
			},
			serializeValue: function (e)
			{
				return e instanceof Date ? e = this.stringifyDates ? c.stringify(e).replace(/"/g, "") : c.toString(e, "G", this.culture.name) : "number" == typeof e && (e = ("" + e).replace(v, this.decimalSeparator)), e
			}
		}, f(!0, c.data, {
			schemas: {
				"aspnetmvc-ajax": {
					groups: function (t)
					{
						return e.map(this._dataAccessFunction(t), o)
					},
					aggregates: function (t)
					{
						var n, a;
						if (t = t.d || t, n = t.AggregateResults || [], !e.isArray(n)) {
							for (a in n) n[a] = u(n[a]);
							return n
						}
						return u(n)
					}
				}
			}
		}), f(!0, c.data, {
			transports: {
				"aspnetmvc-ajax": c.data.RemoteTransport.extend({
					init: function (e)
					{
						var t = this,
                            a = (e || {}).stringifyDates;
						c.data.RemoteTransport.fn.init.call(this, f(!0, {}, this.options, e, {
							parameterMap: function (e, r)
							{
								return n.call(t, e, r, {
									encode: !1,
									stringifyDates: a
								})
							}
						}))
					},
					read: function (e)
					{
						var t = this.options.data,
                            n = this.options.read.url;
						m(t) ? (n && (this.options.data = null), !t.Data.length && n ? c.data.RemoteTransport.fn.read.call(this, e) : e.success(t)) : c.data.RemoteTransport.fn.read.call(this, e)
					},
					options: {
						read: {
							type: "POST"
						},
						update: {
							type: "POST"
						},
						create: {
							type: "POST"
						},
						destroy: {
							type: "POST"
						},
						parameterMap: n,
						prefix: ""
					}
				})
			}
		}), f(!0, c.data, {
			schemas: {
				webapi: c.data.schemas["aspnetmvc-ajax"]
			}
		}), f(!0, c.data, {
			transports: {
				webapi: c.data.RemoteTransport.extend({
					init: function (e)
					{
						var t, a, r = this,
                            i = (e || {}).stringifyDates;
						e.update && (t = "string" == typeof e.update ? e.update : e.update.url, e.update = f(e.update, {
							url: function (n)
							{
								return c.format(t, n[e.idField])
							}
						})), e.destroy && (a = "string" == typeof e.destroy ? e.destroy : e.destroy.url, e.destroy = f(e.destroy, {
							url: function (t)
							{
								return c.format(a, t[e.idField])
							}
						})), e.create && "string" == typeof e.create && (e.create = {
							url: e.create
						}), c.data.RemoteTransport.fn.init.call(this, f(!0, {}, this.options, e, {
							parameterMap: function (e, t)
							{
								return n.call(r, e, t, {
									encode: !1,
									stringifyDates: i,
									culture: c.cultures["en-US"]
								})
							}
						}))
					},
					read: function (e)
					{
						var t = this.options.data,
                            n = this.options.read.url;
						m(t) ? (n && (this.options.data = null), !t.Data.length && n ? c.data.RemoteTransport.fn.read.call(this, e) : e.success(t)) : c.data.RemoteTransport.fn.read.call(this, e)
					},
					options: {
						read: {
							type: "GET"
						},
						update: {
							type: "PUT"
						},
						create: {
							type: "POST"
						},
						destroy: {
							type: "DELETE"
						},
						parameterMap: n,
						prefix: ""
					}
				})
			}
		}), f(!0, c.data, {
			transports: {
				"aspnetmvc-server": c.data.RemoteTransport.extend({
					init: function (e)
					{
						var t = this;
						c.data.RemoteTransport.fn.init.call(this, f(e, {
							parameterMap: function (e, a)
							{
								return n.call(t, e, a, {
									encode: !0
								})
							}
						}))
					},
					read: function (t)
					{
						var n, a, r = this.options.prefix,
                            i = [r + "sort", r + "page", r + "pageSize", r + "group", r + "aggregate", r + "filter"],
                            o = RegExp("(" + i.join("|") + ")=[^&]*&?", "g");
						a = location.search.replace(o, "").replace("?", ""), a.length && !/&$/.test(a) && (a += "&"), t = this.setup(t, "read"), n = t.url, n.indexOf("?") >= 0 ? (a = a.replace(/(.*?=.*?)&/g, function (e)
						{
							return n.indexOf(e.substr(0, e.indexOf("="))) >= 0 ? "" : e
						}), n += "&" + a) : n += "?" + a, n += e.map(t.data, function (e, t)
						{
							return t + "=" + e
						}).join("&"), location.href = n
					}
				})
			}
		})
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("aspnetmvc/kendo.combobox.aspnetmvc.min", ["aspnetmvc/kendo.data.aspnetmvc.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window.kendo,
            a = n.ui;
		a && a.ComboBox && (a.ComboBox.requestData = function (t)
		{
			var n, a, r = e(t).data("kendoComboBox");
			if (r) return n = r.dataSource.filter(), a = r.input.val(), n && n.filters.length || (a = ""), {
				text: a
			}
		})
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("aspnetmvc/kendo.dropdownlist.aspnetmvc.min", ["aspnetmvc/kendo.data.aspnetmvc.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window.kendo,
            a = n.ui;
		a && a.DropDownList && (a.DropDownList.requestData = function (t)
		{
			var n, a, r, i = e(t).data("kendoDropDownList");
			if (i) return n = i.dataSource.filter(), a = i.filterInput, r = a ? a.val() : "", n && n.filters.length || (r = ""), {
				text: r
			}
		})
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("aspnetmvc/kendo.multiselect.aspnetmvc.min", ["aspnetmvc/kendo.combobox.aspnetmvc.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window.kendo,
            a = n.ui;
		a && a.MultiSelect && (a.MultiSelect.requestData = function (t)
		{
			var n, a = e(t).data("kendoMultiSelect");
			if (a) return n = a.input.val(), {
				text: n !== a.options.placeholder ? n : ""
			}
		})
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("aspnetmvc/kendo.imagebrowser.aspnetmvc.min", ["aspnetmvc/kendo.multiselect.aspnetmvc.min"], e)
}(function ()
{
	! function (e, t)
	{
		var n = window.kendo,
            a = e.extend,
            r = e.isFunction;
		a(!0, n.data, {
			schemas: {
				"imagebrowser-aspnetmvc": {
					data: function (e)
					{
						return e || []
					},
					model: {
						id: "name",
						fields: {
							name: {
								field: "Name"
							},
							size: {
								field: "Size"
							},
							type: {
								field: "EntryType",
								parse: function (e)
								{
									return 0 == e ? "f" : "d"
								}
							}
						}
					}
				}
			}
		}), a(!0, n.data, {
			schemas: {
				"filebrowser-aspnetmvc": n.data.schemas["imagebrowser-aspnetmvc"]
			}
		}), a(!0, n.data, {
			transports: {
				"imagebrowser-aspnetmvc": n.data.RemoteTransport.extend({
					init: function (t)
					{
						n.data.RemoteTransport.fn.init.call(this, e.extend(!0, {}, this.options, t))
					},
					_call: function (t, a)
					{
						a.data = e.extend({}, a.data, {
							path: this.options.path()
						}), r(this.options[t]) ? this.options[t].call(this, a) : n.data.RemoteTransport.fn[t].call(this, a)
						console.log(a);
					},
					read: function (e)
					{
						this._call("read", e)
					},
					create: function (e)
					{
						this._call("create", e)
					},
					destroy: function (e)
					{
						this._call("destroy", e)
					},
					update: function () { },
					options: {
						read: {
							type: "POST"
						},
						update: {
							type: "POST"
						},
						create: {
							type: "POST"
						},
						destroy: {
							type: "POST"
						},
						parameterMap: function (e, t)
						{
							return "read" != t && (e.EntryType = "f" === e.EntryType ? 0 : 1), e
						}
					}
				})
			}
		}), a(!0, n.data, {
			transports: {
				"filebrowser-aspnetmvc": n.data.transports["imagebrowser-aspnetmvc"]
			}
		})
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("aspnetmvc/kendo.validator.aspnetmvc.min", ["aspnetmvc/kendo.imagebrowser.aspnetmvc.min"], e)
}(function ()
{
	! function (e, t)
	{
		function n()
		{
			var e, t = {};
			for (e in p) t["mvc" + e] = s(e);
			return t
		}

		function a()
		{
			var e, t = {};
			for (e in p) t["mvc" + e] = d(e);
			return t
		}

		function r(e, t)
		{
			var n, a, r, i = {},
                o = e.data(),
                s = t.length;
			for (r in o) a = r.toLowerCase(), n = a.indexOf(t), n > -1 && (a = a.substring(n + s, r.length), a && (i[a] = o[r]));
			return i
		}

		function i(t)
		{
			var n, a, r = t.Fields || [],
                i = {};
			for (n = 0, a = r.length; n < a; n++) e.extend(!0, i, o(r[n]));
			return i
		}

		function o(e)
		{
			var t, n, a, r, i = {},
                o = {},
                s = e.FieldName,
                d = e.ValidationRules;
			for (a = 0, r = d.length; a < r; a++) t = d[a].ValidationType, n = d[a].ValidationParameters, i[s + t] = c(s, t, n), o[s + t] = u(d[a].ErrorMessage);
			return {
				rules: i,
				messages: o
			}
		}

		function s(e)
		{
			return function (t)
			{
				return t.attr("data-val-" + e)
			}
		}

		function d(e)
		{
			return function (t)
			{
				return !t.filter("[data-val-" + e + "]").length || p[e](t, r(t, e))
			}
		}

		function u(e)
		{
			return function ()
			{
				return e
			}
		}

		function c(e, t, n)
		{
			return function (a)
			{
				return !a.filter("[name=" + e + "]").length || p[t](a, n)
			}
		}

		function l(e, t)
		{
			return "string" == typeof t && (t = RegExp("^(?:" + t + ")$")), t.test(e)
		}
		var f = /("|\%|'|\[|\]|\$|\.|\,|\:|\;|\+|\*|\&|\!|\#|\(|\)|<|>|\=|\?|\@|\^|\{|\}|\~|\/|\||`)/g,
            p = {
            	required: function (e)
            	{
            		var t, n, a, r = e.val(),
                        i = e.filter("[type=checkbox]");
            		return i.length && (t = i[0].name.replace(f, "\\$1"), n = "input:hidden[name='" + t + "']", a = i.next(n), a.length || (a = i.next("label.k-checkbox-label").next(n)), r = a.length ? a.val() : "checked" === e.attr("checked")), !("" === r || !r || 0 === r.length)
            	},
            	number: function (e)
            	{
            		return "" === e.val() || null == e.val() || null !== kendo.parseFloat(e.val())
            	},
            	regex: function (e, t)
            	{
            		return "" === e.val() || l(e.val(), t.pattern)
            	},
            	range: function (e, t)
            	{
            		return "" === e.val() || this.min(e, t) && this.max(e, t)
            	},
            	min: function (e, t)
            	{
            		var n = parseFloat(t.min) || 0,
                        a = kendo.parseFloat(e.val());
            		return n <= a
            	},
            	max: function (e, t)
            	{
            		var n = parseFloat(t.max) || 0,
                        a = kendo.parseFloat(e.val());
            		return a <= n
            	},
            	date: function (e)
            	{
            		return "" === e.val() || null !== kendo.parseDate(e.val())
            	},
            	length: function (t, n)
            	{
            		if ("" !== t.val()) {
            			var a = e.trim(t.val()).length;
            			return (!n.min || a >= (n.min || 0)) && (!n.max || a <= (n.max || 0))
            		}
            		return !0
            	}
            };
		e.extend(!0, kendo.ui.validator, {
			rules: a(),
			messages: n(),
			messageLocators: {
				mvcLocator: {
					locate: function (e, t)
					{
						return t = t.replace(f, "\\$1"), e.find(".field-validation-valid[data-valmsg-for='" + t + "'], .field-validation-error[data-valmsg-for='" + t + "']")
					},
					decorate: function (e, t)
					{
						e.addClass("field-validation-error").attr("data-valmsg-for", t || "")
					}
				},
				mvcMetadataLocator: {
					locate: function (e, t)
					{
						return t = t.replace(f, "\\$1"), e.find("#" + t + "_validationMessage.field-validation-valid")
					},
					decorate: function (e, t)
					{
						e.addClass("field-validation-error").attr("id", t + "_validationMessage")
					}
				}
			},
			ruleResolvers: {
				mvcMetaDataResolver: {
					resolve: function (t)
					{
						var n, a = window.mvcClientValidationMetadata || [];
						if (a.length)
							for (t = e(t), n = 0; n < a.length; n++)
								if (a[n].FormId == t.attr("id")) return i(a[n]);
						return {}
					}
				}
			}
		})
	}(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
}),
function (e, define)
{
	define("kendo.aspnetmvc.min", ["kendo.data.min", "kendo.combobox.min", "kendo.dropdownlist.min", "kendo.multiselect.min", "kendo.validator.min", "aspnetmvc/kendo.data.aspnetmvc.min", "aspnetmvc/kendo.combobox.aspnetmvc.min", "aspnetmvc/kendo.dropdownlist.aspnetmvc.min", "aspnetmvc/kendo.multiselect.aspnetmvc.min", "aspnetmvc/kendo.imagebrowser.aspnetmvc.min", "aspnetmvc/kendo.validator.aspnetmvc.min"], e)
}(function () { }, "function" == typeof define && define.amd ? define : function (e, t, n)
{
	(n || t)()
});;