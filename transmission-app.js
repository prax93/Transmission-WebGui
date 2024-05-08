(() => {
	var St = Object.create;
	var et = Object.defineProperty;
	var Nt = Object.getOwnPropertyDescriptor;
	var Dt = Object.getOwnPropertyNames;
	var Et = Object.getPrototypeOf,
		_t = Object.prototype.hasOwnProperty;
	var Ht = (s, e) => () => (e || s((e = {
		exports: {}
	}).exports, e), e.exports);
	var Jt = (s, e, t, r) => {
		if (e && typeof e == "object" || typeof e == "function")
			for (let o of Dt(e)) !_t.call(s, o) && o !== t && et(s, o, {
				get: () => e[o],
				enumerable: !(r = Nt(e, o)) || r.enumerable
			});
		return s
	};
	var zt = (s, e, t) => (t = s != null ? St(Et(s)) : {}, Jt(e || !s || !s.__esModule ? et(t, "default", {
		value: s,
		enumerable: !0
	}) : t, s));
	var Ot = Ht((q, M) => {
		var jt = 200,
			Pe = "__lodash_hash_undefined__",
			he = 1,
			ut = 2,
			pt = 9007199254740991,
			le = "[object Arguments]",
			Ee = "[object Array]",
			Mt = "[object AsyncFunction]",
			bt = "[object Boolean]",
			mt = "[object Date]",
			ht = "[object Error]",
			It = "[object Function]",
			Pt = "[object GeneratorFunction]",
			de = "[object Map]",
			Ct = "[object Number]",
			Kt = "[object Null]",
			j = "[object Object]",
			tt = "[object Promise]",
			$t = "[object Proxy]",
			ft = "[object RegExp]",
			ge = "[object Set]",
			At = "[object String]",
			qt = "[object Symbol]",
			er = "[object Undefined]",
			_e = "[object WeakMap]",
			Bt = "[object ArrayBuffer]",
			ue = "[object DataView]",
			tr = "[object Float32Array]",
			rr = "[object Float64Array]",
			sr = "[object Int8Array]",
			or = "[object Int16Array]",
			ir = "[object Int32Array]",
			nr = "[object Uint8Array]",
			ar = "[object Uint8ClampedArray]",
			cr = "[object Uint16Array]",
			lr = "[object Uint32Array]",
			dr = /[\\^$.*+?()[\]{}|]/g,
			gr = /^\[object .+?Constructor\]$/,
			ur = /^(?:0|[1-9]\d*)$/,
			Z = {};
		Z[tr] = Z[rr] = Z[sr] = Z[or] = Z[ir] = Z[nr] = Z[ar] = Z[cr] = Z[lr] = !0;
		Z[le] = Z[Ee] = Z[Bt] = Z[bt] = Z[ue] = Z[mt] = Z[ht] = Z[It] = Z[de] = Z[Ct] = Z[j] = Z[ft] = Z[ge] = Z[At] = Z[_e] = !1;
		var Gt = typeof global == "object" && global && global.Object === Object && global,
			pr = typeof self == "object" && self && self.Object === Object && self,
			T = Gt || pr || Function("return this")(),
			vt = typeof q == "object" && q && !q.nodeType && q,
			rt = vt && typeof M == "object" && M && !M.nodeType && M,
			yt = rt && rt.exports === vt,
			Se = yt && Gt.process,
			st = function() {
				try {
					return Se && Se.binding && Se.binding("util")
				} catch {}
			}(),
			ot = st && st.isTypedArray;

		function br(s, e) {
			for (var t = -1, r = s == null ? 0 : s.length, o = 0, i = []; ++t < r;) {
				var n = s[t];
				e(n, t, s) && (i[o++] = n)
			}
			return i
		}

		function mr(s, e) {
			for (var t = -1, r = e.length, o = s.length; ++t < r;) s[o + t] = e[t];
			return s
		}

		function hr(s, e) {
			for (var t = -1, r = s == null ? 0 : s.length; ++t < r;)
				if (e(s[t], t, s)) return !0;
			return !1
		}

		function Ir(s, e) {
			for (var t = -1, r = Array(s); ++t < s;) r[t] = e(t);
			return r
		}

		function Cr(s) {
			return function(e) {
				return s(e)
			}
		}

		function fr(s, e) {
			return s.has(e)
		}

		function Ar(s, e) {
			return s?.[e]
		}

		function Br(s) {
			var e = -1,
				t = Array(s.size);
			return s.forEach(function(r, o) {
				t[++e] = [o, r]
			}), t
		}

		function Gr(s, e) {
			return function(t) {
				return s(e(t))
			}
		}

		function vr(s) {
			var e = -1,
				t = Array(s.size);
			return s.forEach(function(r) {
				t[++e] = r
			}), t
		}
		var yr = Array.prototype,
			xr = Function.prototype,
			Ie = Object.prototype,
			Ne = T["__core-js_shared__"],
			xt = xr.toString,
			R = Ie.hasOwnProperty,
			it = function() {
				var s = /[^.]+$/.exec(Ne && Ne.keys && Ne.keys.IE_PROTO || "");
				return s ? "Symbol(src)_1." + s : ""
			}(),
			Zt = Ie.toString,
			Zr = RegExp("^" + xt.call(R).replace(dr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
			nt = yt ? T.Buffer : void 0,
			pe = T.Symbol,
			at = T.Uint8Array,
			Xt = Ie.propertyIsEnumerable,
			Xr = yr.splice,
			D = pe ? pe.toStringTag : void 0,
			ct = Object.getOwnPropertySymbols,
			Fr = nt ? nt.isBuffer : void 0,
			Wr = Gr(Object.keys, Object),
			He = P(T, "DataView"),
			ee = P(T, "Map"),
			Je = P(T, "Promise"),
			ze = P(T, "Set"),
			je = P(T, "WeakMap"),
			te = P(Object, "create"),
			Lr = H(He),
			Qr = H(ee),
			wr = H(Je),
			kr = H(ze),
			Ur = H(je),
			lt = pe ? pe.prototype : void 0,
			De = lt ? lt.valueOf : void 0;

		function E(s) {
			var e = -1,
				t = s == null ? 0 : s.length;
			for (this.clear(); ++e < t;) {
				var r = s[e];
				this.set(r[0], r[1])
			}
		}

		function Or() {
			this.__data__ = te ? te(null) : {}, this.size = 0
		}

		function Rr(s) {
			var e = this.has(s) && delete this.__data__[s];
			return this.size -= e ? 1 : 0, e
		}

		function Tr(s) {
			var e = this.__data__;
			if (te) {
				var t = e[s];
				return t === Pe ? void 0 : t
			}
			return R.call(e, s) ? e[s] : void 0
		}

		function Vr(s) {
			var e = this.__data__;
			return te ? e[s] !== void 0 : R.call(e, s)
		}

		function Yr(s, e) {
			var t = this.__data__;
			return this.size += this.has(s) ? 0 : 1, t[s] = te && e === void 0 ? Pe : e, this
		}
		E.prototype.clear = Or;
		E.prototype.delete = Rr;
		E.prototype.get = Tr;
		E.prototype.has = Vr;
		E.prototype.set = Yr;

		function V(s) {
			var e = -1,
				t = s == null ? 0 : s.length;
			for (this.clear(); ++e < t;) {
				var r = s[e];
				this.set(r[0], r[1])
			}
		}

		function Sr() {
			this.__data__ = [], this.size = 0
		}

		function Nr(s) {
			var e = this.__data__,
				t = Ce(e, s);
			if (t < 0) return !1;
			var r = e.length - 1;
			return t == r ? e.pop() : Xr.call(e, t, 1), --this.size, !0
		}

		function Dr(s) {
			var e = this.__data__,
				t = Ce(e, s);
			return t < 0 ? void 0 : e[t][1]
		}

		function Er(s) {
			return Ce(this.__data__, s) > -1
		}

		function _r(s, e) {
			var t = this.__data__,
				r = Ce(t, s);
			return r < 0 ? (++this.size, t.push([s, e])) : t[r][1] = e, this
		}
		V.prototype.clear = Sr;
		V.prototype.delete = Nr;
		V.prototype.get = Dr;
		V.prototype.has = Er;
		V.prototype.set = _r;

		function _(s) {
			var e = -1,
				t = s == null ? 0 : s.length;
			for (this.clear(); ++e < t;) {
				var r = s[e];
				this.set(r[0], r[1])
			}
		}

		function Hr() {
			this.size = 0, this.__data__ = {
				hash: new E,
				map: new(ee || V),
				string: new E
			}
		}

		function Jr(s) {
			var e = fe(this, s).delete(s);
			return this.size -= e ? 1 : 0, e
		}

		function zr(s) {
			return fe(this, s).get(s)
		}

		function jr(s) {
			return fe(this, s).has(s)
		}

		function Mr(s, e) {
			var t = fe(this, s),
				r = t.size;
			return t.set(s, e), this.size += t.size == r ? 0 : 1, this
		}
		_.prototype.clear = Hr;
		_.prototype.delete = Jr;
		_.prototype.get = zr;
		_.prototype.has = jr;
		_.prototype.set = Mr;

		function be(s) {
			var e = -1,
				t = s == null ? 0 : s.length;
			for (this.__data__ = new _; ++e < t;) this.add(s[e])
		}

		function Pr(s) {
			return this.__data__.set(s, Pe), this
		}

		function Kr(s) {
			return this.__data__.has(s)
		}
		be.prototype.add = be.prototype.push = Pr;
		be.prototype.has = Kr;

		function N(s) {
			var e = this.__data__ = new V(s);
			this.size = e.size
		}

		function $r() {
			this.__data__ = new V, this.size = 0
		}

		function qr(s) {
			var e = this.__data__,
				t = e.delete(s);
			return this.size = e.size, t
		}

		function es(s) {
			return this.__data__.get(s)
		}

		function ts(s) {
			return this.__data__.has(s)
		}

		function rs(s, e) {
			var t = this.__data__;
			if (t instanceof V) {
				var r = t.__data__;
				if (!ee || r.length < jt - 1) return r.push([s, e]), this.size = ++t.size, this;
				t = this.__data__ = new _(r)
			}
			return t.set(s, e), this.size = t.size, this
		}
		N.prototype.clear = $r;
		N.prototype.delete = qr;
		N.prototype.get = es;
		N.prototype.has = ts;
		N.prototype.set = rs;

		function ss(s, e) {
			var t = me(s),
				r = !t && Cs(s),
				o = !t && !r && Me(s),
				i = !t && !r && !o && Ut(s),
				n = t || r || o || i,
				a = n ? Ir(s.length, String) : [],
				l = a.length;
			for (var c in s)(e || R.call(s, c)) && !(n && (c == "length" || o && (c == "offset" || c == "parent") || i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || ps(c, l))) && a.push(c);
			return a
		}

		function Ce(s, e) {
			for (var t = s.length; t--;)
				if (Lt(s[t][0], e)) return t;
			return -1
		}

		function os(s, e, t) {
			var r = e(s);
			return me(s) ? r : mr(r, t(s))
		}

		function se(s) {
			return s == null ? s === void 0 ? er : Kt : D && D in Object(s) ? gs(s) : Is(s)
		}

		function dt(s) {
			return re(s) && se(s) == le
		}

		function Ft(s, e, t, r, o) {
			return s === e ? !0 : s == null || e == null || !re(s) && !re(e) ? s !== s && e !== e : is(s, e, t, r, Ft, o)
		}

		function is(s, e, t, r, o, i) {
			var n = me(s),
				a = me(e),
				l = n ? Ee : S(s),
				c = a ? Ee : S(e);
			l = l == le ? j : l, c = c == le ? j : c;
			var u = l == j,
				g = c == j,
				d = l == c;
			if (d && Me(s)) {
				if (!Me(e)) return !1;
				n = !0, u = !1
			}
			if (d && !u) return i || (i = new N), n || Ut(s) ? Wt(s, e, t, r, o, i) : ls(s, e, l, t, r, o, i);
			if (!(t & he)) {
				var p = u && R.call(s, "__wrapped__"),
					m = g && R.call(e, "__wrapped__");
				if (p || m) {
					var I = p ? s.value() : s,
						C = m ? e.value() : e;
					return i || (i = new N), o(I, C, t, r, i)
				}
			}
			return d ? (i || (i = new N), ds(s, e, t, r, o, i)) : !1
		}

		function ns(s) {
			if (!kt(s) || ms(s)) return !1;
			var e = Qt(s) ? Zr : gr;
			return e.test(H(s))
		}

		function as(s) {
			return re(s) && wt(s.length) && !!Z[se(s)]
		}

		function cs(s) {
			if (!hs(s)) return Wr(s);
			var e = [];
			for (var t in Object(s)) R.call(s, t) && t != "constructor" && e.push(t);
			return e
		}

		function Wt(s, e, t, r, o, i) {
			var n = t & he,
				a = s.length,
				l = e.length;
			if (a != l && !(n && l > a)) return !1;
			var c = i.get(s);
			if (c && i.get(e)) return c == e;
			var u = -1,
				g = !0,
				d = t & ut ? new be : void 0;
			for (i.set(s, e), i.set(e, s); ++u < a;) {
				var p = s[u],
					m = e[u];
				if (r) var I = n ? r(m, p, u, e, s, i) : r(p, m, u, s, e, i);
				if (I !== void 0) {
					if (I) continue;
					g = !1;
					break
				}
				if (d) {
					if (!hr(e, function(C, y) {
							if (!fr(d, y) && (p === C || o(p, C, t, r, i))) return d.push(y)
						})) {
						g = !1;
						break
					}
				} else if (!(p === m || o(p, m, t, r, i))) {
					g = !1;
					break
				}
			}
			return i.delete(s), i.delete(e), g
		}

		function ls(s, e, t, r, o, i, n) {
			switch (t) {
				case ue:
					if (s.byteLength != e.byteLength || s.byteOffset != e.byteOffset) return !1;
					s = s.buffer, e = e.buffer;
				case Bt:
					return !(s.byteLength != e.byteLength || !i(new at(s), new at(e)));
				case bt:
				case mt:
				case Ct:
					return Lt(+s, +e);
				case ht:
					return s.name == e.name && s.message == e.message;
				case ft:
				case At:
					return s == e + "";
				case de:
					var a = Br;
				case ge:
					var l = r & he;
					if (a || (a = vr), s.size != e.size && !l) return !1;
					var c = n.get(s);
					if (c) return c == e;
					r |= ut, n.set(s, e);
					var u = Wt(a(s), a(e), r, o, i, n);
					return n.delete(s), u;
				case qt:
					if (De) return De.call(s) == De.call(e)
			}
			return !1
		}

		function ds(s, e, t, r, o, i) {
			var n = t & he,
				a = gt(s),
				l = a.length,
				c = gt(e),
				u = c.length;
			if (l != u && !n) return !1;
			for (var g = l; g--;) {
				var d = a[g];
				if (!(n ? d in e : R.call(e, d))) return !1
			}
			var p = i.get(s);
			if (p && i.get(e)) return p == e;
			var m = !0;
			i.set(s, e), i.set(e, s);
			for (var I = n; ++g < l;) {
				d = a[g];
				var C = s[d],
					y = e[d];
				if (r) var G = n ? r(y, C, d, e, s, i) : r(C, y, d, s, e, i);
				if (!(G === void 0 ? C === y || o(C, y, t, r, i) : G)) {
					m = !1;
					break
				}
				I || (I = d == "constructor")
			}
			if (m && !I) {
				var x = s.constructor,
					A = e.constructor;
				x != A && "constructor" in s && "constructor" in e && !(typeof x == "function" && x instanceof x && typeof A == "function" && A instanceof A) && (m = !1)
			}
			return i.delete(s), i.delete(e), m
		}

		function gt(s) {
			return os(s, Bs, us)
		}

		function fe(s, e) {
			var t = s.__data__;
			return bs(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map
		}

		function P(s, e) {
			var t = Ar(s, e);
			return ns(t) ? t : void 0
		}

		function gs(s) {
			var e = R.call(s, D),
				t = s[D];
			try {
				s[D] = void 0;
				var r = !0
			} catch {}
			var o = Zt.call(s);
			return r && (e ? s[D] = t : delete s[D]), o
		}
		var us = ct ? function(s) {
				return s == null ? [] : (s = Object(s), br(ct(s), function(e) {
					return Xt.call(s, e)
				}))
			} : Gs,
			S = se;
		(He && S(new He(new ArrayBuffer(1))) != ue || ee && S(new ee) != de || Je && S(Je.resolve()) != tt || ze && S(new ze) != ge || je && S(new je) != _e) && (S = function(s) {
			var e = se(s),
				t = e == j ? s.constructor : void 0,
				r = t ? H(t) : "";
			if (r) switch (r) {
				case Lr:
					return ue;
				case Qr:
					return de;
				case wr:
					return tt;
				case kr:
					return ge;
				case Ur:
					return _e
			}
			return e
		});

		function ps(s, e) {
			return e = e ?? pt, !!e && (typeof s == "number" || ur.test(s)) && s > -1 && s % 1 == 0 && s < e
		}

		function bs(s) {
			var e = typeof s;
			return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? s !== "__proto__" : s === null
		}

		function ms(s) {
			return !!it && it in s
		}

		function hs(s) {
			var e = s && s.constructor,
				t = typeof e == "function" && e.prototype || Ie;
			return s === t
		}

		function Is(s) {
			return Zt.call(s)
		}

		function H(s) {
			if (s != null) {
				try {
					return xt.call(s)
				} catch {}
				try {
					return s + ""
				} catch {}
			}
			return ""
		}

		function Lt(s, e) {
			return s === e || s !== s && e !== e
		}
		var Cs = dt(function() {
				return arguments
			}()) ? dt : function(s) {
				return re(s) && R.call(s, "callee") && !Xt.call(s, "callee")
			},
			me = Array.isArray;

		function fs(s) {
			return s != null && wt(s.length) && !Qt(s)
		}
		var Me = Fr || vs;

		function As(s, e) {
			return Ft(s, e)
		}

		function Qt(s) {
			if (!kt(s)) return !1;
			var e = se(s);
			return e == It || e == Pt || e == Mt || e == $t
		}

		function wt(s) {
			return typeof s == "number" && s > -1 && s % 1 == 0 && s <= pt
		}

		function kt(s) {
			var e = typeof s;
			return s != null && (e == "object" || e == "function")
		}

		function re(s) {
			return s != null && typeof s == "object"
		}
		var Ut = ot ? Cr(ot) : as;

		function Bs(s) {
			return fs(s) ? ss(s) : cs(s)
		}

		function Gs() {
			return []
		}

		function vs() {
			return !1
		}
		M.exports = As
	});
	var ce = class s extends EventTarget {
		constructor() {
			super(), this.actions = Object.seal({
				"deselect-all": {
					enabled: !1,
					shortcut: "D",
					text: "Deselect all"
				},
				"move-bottom": {
					enabled: !1,
					text: "Move to the back of the queue"
				},
				"move-down": {
					enabled: !1,
					text: "Move down in the queue"
				},
				"move-top": {
					enabled: !1,
					text: "Move to the front of the queue"
				},
				"move-up": {
					enabled: !1,
					text: "Move up in the queue"
				},
				"open-torrent": {
					enabled: !0,
					shortcut: "O",
					text: "Open torrent\u2026"
				},
				"pause-all-torrents": {
					enabled: !1,
					text: "Pause all"
				},
				"pause-selected-torrents": {
					enabled: !1,
					shortcut: "U",
					text: "Pause"
				},
				"reannounce-selected-torrents": {
					enabled: !1,
					text: "Ask tracker for more peers"
				},
				"remove-selected-torrents": {
					enabled: !1,
					text: "Remove from list\u2026"
				},
				"resume-selected-torrents": {
					enabled: !1,
					shortcut: "R",
					text: "Resume"
				},
				"resume-selected-torrents-now": {
					enabled: !1,
					text: "Resume now"
				},
				"select-all": {
					enabled: !1,
					shortcut: "A",
					text: "Select all"
				},
				"show-about-dialog": {
					enabled: !0,
					text: "About"
				},
				"show-inspector": {
					enabled: !1,
					shortcut: "I",
					text: "Torrent Inspector"
				},
				"show-labels-dialog": {
					enabled: !1,
					shortcut: "K",
					text: "Edit Labels\u2026"
				},
				"show-move-dialog": {
					enabled: !1,
					shortcut: "L",
					text: "Set location\u2026"
				},
				"show-overflow-menu": {
					enabled: !0,
					text: "More options\u2026"
				},
				"show-preferences-dialog": {
					enabled: !0,
					shortcut: "P",
					text: "Edit preferences"
				},
				"show-rename-dialog": {
					enabled: !1,
					shortcut: "N",
					text: "Rename\u2026"
				},
				"show-shortcuts-dialog": {
					enabled: !0,
					text: "Keyboard shortcuts"
				},
				"show-statistics-dialog": {
					enabled: !0,
					shortcut: "S",
					text: "Statistics"
				},
				"start-all-torrents": {
					enabled: !1,
					text: "Start all"
				},
				"toggle-compact-rows": {
					enabled: !0,
					text: "Compact rows"
				},
				"toggle-contrast": {
					enabled: !0,
					text: "High contrast UI"
				},
				"trash-selected-torrents": {
					enabled: !1,
					text: "Trash data and remove from list\u2026"
				},
				"verify-selected-torrents": {
					enabled: !1,
					shortcut: "V",
					text: "Verify local data"
				}
			})
		}
		click(e) {
			if (this.isEnabled(e)) {
				let t = new Event("click");
				t.action = e, this.dispatchEvent(t)
			}
		}
		getActionForShortcut(e) {
			for (let [t, r] of Object.entries(this.actions))
				if (e === r.shortcut) return t;
			return null
		}
		allShortcuts() {
			return new Map(Object.entries(this.actions).filter(([, e]) => e.shortcut).map(([e, t]) => [t.shortcut, e]))
		}
		isEnabled(e) {
			return this._getAction(e).enabled
		}
		text(e) {
			return this._getAction(e).text
		}
		keyshortcuts(e) {
			return this._getAction(e).shortcut
		}
		update(e) {
			let t = s._recount(e.selected, e.nonselected);
			this._updateStates(t)
		}
		_getAction(e) {
			let t = this.actions[e];
			if (!t) throw new Error(`no such action: ${e}`);
			return t
		}
		static _recount(e, t) {
			let r = e.length + t.length,
				o = e.filter(g => g.isStopped()).length,
				i = e.length - o,
				n = t.filter(g => g.isStopped()).length,
				a = t.length - n,
				l = o + n,
				c = i + a,
				u = e.filter(g => g.isQueued()).length;
			return {
				active: c,
				nonselected_active: a,
				nonselected_paused: n,
				paused: l,
				selected: e.length,
				selected_active: i,
				selected_paused: o,
				selected_queued: u,
				total: r
			}
		}
		_updateStates(e) {
			let t = (r, o) => {
				for (let i of o) this._updateActionState(i, r)
			};
			t(e.selected_paused > 0, ["resume-selected-torrents"]), t(e.paused > 0, ["start-all-torrents"]), t(e.active > 0, ["pause-all-torrents"]), t(e.selected_paused > 0 || e.selected_queued > 0, ["resume-selected-torrents-now"]), t(e.selected_active > 0, ["pause-selected-torrents", "reannounce-selected-torrents"]), t(e.selected > 0, ["deselect-all", "move-bottom", "move-down", "move-top", "move-up", "remove-selected-torrents", "show-inspector", "show-labels-dialog", "show-move-dialog", "trash-selected-torrents", "verify-selected-torrents"]), t(e.selected === 1, ["show-rename-dialog"]), t(e.selected < e.total, ["select-all"])
		}
		_updateActionState(e, t) {
			let r = this.actions[e];
			if (!r) throw new Error(`no such action: ${e}`);
			if (r.enabled !== t) {
				r.enabled = t;
				let o = new Event("change");
				o.action = e, o.enabled = t, this.dispatchEvent(o)
			}
		}
	};
	var Rt = zt(Ot());
	var oe = {
		ratio(s, e) {
			let t = Math.floor(100 * s / e) / 100;
			return t === Number.POSITIVE_INFINITY || t === Number.NEGATIVE_INFINITY ? t = -2 : Number.isNaN(t) && (t = -1), t
		}
	};

	function ys(s, e, t, r, o) {
		for (let i of s.children) i.classList.toggle("selected", i === e);
		for (let i of t.children) i.classList.toggle("hidden", i !== r);
		o && o(r)
	}

	function Ae(s, e, t) {
		let r = document.createElement("div");
		r.id = s, r.classList.add("tabs-container");
		let o = document.createElement("div");
		o.classList.add("tabs-buttons"), r.append(o);
		let i = document.createElement("button");
		i.classList.add("tabs-container-close"), i.innerHTML = "&times;", r.append(i);
		let n = document.createElement("div");
		n.classList.add("tabs-pages"), r.append(n);
		let a = [];
		for (let [l, c, u] of e) {
			let g = document.createElement("button");
			g.id = l, g.classList.add("tabs-button"), g.setAttribute("type", "button"), g.textContent = u, o.append(g), a.push(g), c.classList.add("hidden", "tabs-page"), n.append(c), g.addEventListener("click", () => ys(o, g, n, c, t))
		}
		return a[0].classList.add("selected"), n.children[0].classList.remove("hidden"), {
			buttons: a,
			dismiss: i,
			root: r
		}
	}

	function L(s) {
		let e = document.createElement("dialog");
		e.classList.add("dialog-container", "popup", s), e.open = !0, e.setAttribute("role", "dialog");
		let t = document.createElement("div");
		t.classList.add("dialog-window"), e.append(t);
		let r = document.createElement("div");
		r.classList.add("dialog-logo"), t.append(r);
		let o = document.createElement("div");
		o.classList.add("dialog-heading"), t.append(o);
		let i = document.createElement("div");
		i.classList.add("dialog-message"), t.append(i);
		let n = document.createElement("div");
		n.classList.add("dialog-workarea"), t.append(n);
		let a = document.createElement("div");
		a.classList.add("dialog-buttons"), t.append(a);
		let l = document.createElement("span");
		l.classList.add("dialog-buttons-begin"), a.append(l);
		let c = document.createElement("button");
		c.classList.add("dialog-dismiss-button"), c.textContent = "Cancel", a.append(c);
		let u = document.createElement("button");
		u.textContent = "OK", a.append(u);
		let g = document.createElement("span");
		return g.classList.add("dialog-buttons-end"), a.append(g), {
			confirm: u,
			dismiss: c,
			heading: o,
			message: i,
			root: e,
			workarea: n
		}
	}

	function W() {
		return ("10000000-1000-4000-8000" + -1e11).replaceAll(/[018]/g, s => (s ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> s / 4).toString(16))
	}

	function xs(s) {
		let e = document.createElement("fieldset");
		e.classList.add("section");
		let t = document.createElement("legend");
		t.classList.add("title"), t.textContent = s, e.append(t);
		let r = document.createElement("div");
		return r.classList.add("content"), e.append(r), {
			content: r,
			root: e
		}
	}

	function Ke(s, e) {
		let t = [],
			{
				root: r,
				content: o
			} = xs(s);
		for (let i of e) {
			let n = document.createElement("label");
			n.textContent = i, o.append(n);
			let a = document.createElement("div");
			a.id = W(), o.append(a), n.setAttribute("for", a.id), t.push(a)
		}
		return {
			children: t,
			root: r
		}
	}

	function J(s, e = 100) {
		let t = null;
		return (...r) => {
			t || (t = setTimeout(() => {
				t = null, s(...r)
			}, e))
		}
	}

	function Be(s, e) {
		return (0, Rt.default)(s, e)
	}

	function Zs(s, e, t) {
		t ? s.setAttribute(e, !0) : s.removeAttribute(e)
	}

	function O(s, e) {
		Zs(s, "disabled", !e)
	}

	function Ge(s, e) {
		s.classList.toggle("checked", e)
	}
	var K = class extends EventTarget {
		constructor(e) {
			super(), this.listener = t => {
				e.contains(t.target) || (this.dispatchEvent(new MouseEvent(t.type, t)), t.preventDefault())
			}, Object.seal(this), this.start()
		}
		start() {
			setTimeout(() => document.addEventListener("click", this.listener), 0)
		}
		stop() {
			document.removeEventListener("click", this.listener)
		}
	};

	function h(s, e) {
		s.textContent !== e && (s.textContent = e)
	}
	var ve = class {
		constructor(e) {
			this._prefs = e, this._elements = {
				toggle: document.querySelector("#toggle-notifications")
			}
		}
		_setEnabled(e) {
			this.prefs.notifications_enabled = e, h(this._toggle, `${e?"Disable":"Enable"} Notifications`)
		}
		_requestPermission() {
			Notification.requestPermission().then(e => this._setEnabled(e === "granted"))
		}
		toggle() {
			this._enabled ? this._setEnabled(!1) : Notification.permission === "granted" ? this._setEnabled(!0) : Notification.permission !== "denied" && this._requestPermission()
		}
	};
	var b = class s extends EventTarget {
		constructor() {
			super(), this._cache = {}, this.dispatchPrefsChange = J((e, t, r) => {
				let o = new Event("change");
				Object.assign(o, {
					key: e,
					old_value: t,
					value: r
				}), this.dispatchEvent(o)
			});
			for (let [e, t] of Object.entries(s._Defaults)) this._set(e, s._getCookie(e, t)), Object.defineProperty(this, e.replaceAll("-", "_"), {
				get: () => this._get(e),
				set: r => {
					this._set(e, r)
				}
			});
			Object.seal(this)
		}
		entries() {
			return Object.entries(this._cache)
		}
		keys() {
			return Object.keys(this._cache)
		}
		_get(e) {
			let {
				_cache: t
			} = this;
			if (!Object.prototype.hasOwnProperty.call(t, e)) throw new Error(e);
			return t[e]
		}
		_set(e, t) {
			let {
				_cache: r
			} = this, o = r[e];
			o !== t && (r[e] = t, s._setCookie(e, t), this.dispatchPrefsChange(e, o, t))
		}
		static _setCookie(e, t) {
			let r = new Date;
			r.setFullYear(r.getFullYear() + 1), document.cookie = `${e}=${t}; SameSite=Strict; expires=${r.toGMTString()}`
		}
		static _getCookie(e, t) {
			let r = s._readCookie(e);
			return r === null ? t : r === "true" ? !0 : r === "false" ? !1 : /^\d+$/.test(r) ? Number.parseInt(r, 10) : r
		}
		static _readCookie(e) {
			let r = `; ${document.cookie}`.split(`; ${e}=`);
			return r.length === 2 ? r.pop().split(";").shift() : null
		}
	};
	b.AltSpeedEnabled = "alt-speed-enabled";
	b.DisplayCompact = "compact";
	b.DisplayFull = "full";
	b.DisplayMode = "display-mode";
	b.ContrastLess = "less";
	b.ContrastMore = "more";
	b.ContrastMode = "contrast-mode";
	b.FilterActive = "active";
	b.FilterAll = "all";
	b.FilterDownloading = "downloading";
	b.FilterFinished = "finished";
	b.FilterMode = "filter-mode";
	b.FilterPaused = "paused";
	b.FilterSeeding = "seeding";
	b.NotificationsEnabled = "notifications-enabled";
	b.RefreshRate = "refresh-rate-sec";
	b.SortAscending = "ascending";
	b.SortByActivity = "activity";
	b.SortByAge = "age";
	b.SortByName = "name";
	b.SortByProgress = "progress";
	b.SortByQueue = "queue";
	b.SortByRatio = "ratio";
	b.SortBySize = "size";
	b.SortByState = "state";
	b.SortDescending = "descending";
	b.SortDirection = "sort-direction";
	b.SortMode = "sort-mode";
	b._Defaults = {
		[b.AltSpeedEnabled]: !1,
		[b.DisplayMode]: b.DisplayFull,
		[b.ContrastMode]: window.matchMedia("(prefers-contrast: more)").matches ? b.ContrastMore : b.ContrastLess,
		[b.FilterMode]: b.FilterAll,
		[b.NotificationsEnabled]: !1,
		[b.RefreshRate]: 5,
		[b.SortDirection]: b.SortAscending,
		[b.SortMode]: b.SortByName
	};
	var ye = class s extends EventTarget {
		constructor(e) {
			super(), this.elements = s._create(e), this.elements.dismiss.addEventListener("click", () => this.close()), document.body.append(this.elements.root), this.elements.dismiss.focus()
		}
		close() {
			this.elements.root.remove(), this.dispatchEvent(new Event("close")), delete this.elements
		}
		static _create(e) {
			let t = L("about-dialog");
			t.root.setAttribute("aria-label", "About transmission"), t.heading.textContent = "Transmission", t.dismiss.textContent = "Close";
			let r = document.createElement("div");
			return r.classList.add("about-dialog-version-number"), r.textContent = e.version, t.heading.append(r), r = document.createElement("div"), r.classList.add("about-dialog-version-checksum"), r.textContent = e.checksum, t.heading.append(r), r = document.createElement("div"), r.textContent = "A fast and easy bitTorrent client", t.workarea.append(r), r = document.createElement("div"), r.textContent = "Copyright \xA9 The Transmission Project", t.workarea.append(r), r = document.createElement("a"), r.href = "https://transmissionbt.com/", r.target = "_blank", r.textContent = "https://transmissionbt.com/", t.workarea.append(r), t.confirm.remove(), delete t.confirm, t
		}
	};
	var xe = class extends EventTarget {
		constructor(e) {
			super(), this.action_listener = this._update.bind(this), this.action_manager = e, this.action_manager.addEventListener("change", this.action_listener), Object.assign(this, this._create()), this.show()
		}
		show() {
			for (let [e, t] of Object.entries(this.actions)) O(t, this.action_manager.isEnabled(e));
			document.body.append(this.root)
		}
		close() {
			if (!this.closed) {
				this.action_manager.removeEventListener("change", this.action_listener), this.root.remove(), this.dispatchEvent(new Event("close"));
				for (let e of Object.keys(this)) delete this[e];
				this.closed = !0
			}
		}
		_update(e) {
			let t = this.actions[e.action];
			t && O(t, e.enabled)
		}
		_create() {
			let e = document.createElement("div");
			e.role = "menu", e.classList.add("context-menu", "popup"), e.addEventListener("contextmenu", i => {
				i.preventDefault()
			}), e.style.pointerEvents = "none";
			let t = {},
				r = (i, n = !1) => {
					let a = document.createElement("div"),
						l = this.action_manager.text(i);
					a.role = "menuitem", n ? a.classList.add("context-menuitem", "warning") : a.classList.add("context-menuitem"), a.dataset.action = i, a.textContent = l;
					let c = this.action_manager.keyshortcuts(i);
					c && a.setAttribute("aria-keyshortcuts", c), a.addEventListener("click", () => {
						this.action_manager.click(i), this.close()
					}), t[i] = a, e.append(a)
				},
				o = () => {
					let i = document.createElement("div");
					i.classList.add("context-menu-separator"), e.append(i)
				};
			return r("resume-selected-torrents"), r("resume-selected-torrents-now"), r("pause-selected-torrents"), o(), r("move-top"), r("move-up"), r("move-down"), r("move-bottom"), o(), r("remove-selected-torrents", !0), r("trash-selected-torrents", !0), o(), r("verify-selected-torrents"), r("show-move-dialog"), r("show-rename-dialog"), r("show-labels-dialog"), o(), r("reannounce-selected-torrents"), o(), r("select-all"), r("deselect-all"), {
				actions: t,
				root: e
			}
		}
	};
	var Tt = new Intl.PluralRules,
		Y = Tt.resolvedOptions().locale,
		Xs = new Intl.NumberFormat(Y),
		$e = 1e3,
		Fs = [new Intl.NumberFormat(Y, {
			maximumFractionDigits: 0,
			style: "unit",
			unit: "byte"
		}), new Intl.NumberFormat(Y, {
			maximumFractionDigits: 0,
			style: "unit",
			unit: "kilobyte"
		}), new Intl.NumberFormat(Y, {
			maximumFractionDigits: 0,
			style: "unit",
			unit: "megabyte"
		}), new Intl.NumberFormat(Y, {
			maximumFractionDigits: 2,
			style: "unit",
			unit: "gigabyte"
		}), new Intl.NumberFormat(Y, {
			maximumFractionDigits: 2,
			style: "unit",
			unit: "terabyte"
		}), new Intl.NumberFormat(Y, {
			maximumFractionDigits: 2,
			style: "unit",
			unit: "petabyte"
		})],
		Ws = new Intl.NumberFormat(Y, {
			maximumFractionDigits: 2,
			style: "unit",
			unit: "kilobyte-per-second"
		}),
		Ls = new Intl.NumberFormat(Y, {
			maximumFractionDigits: 2,
			style: "unit",
			unit: "megabyte-per-second"
		}),
		B = {
			_toTruncFixed(s, e) {
				return (Math.floor(s * 10 ** e) / 10 ** e).toFixed(e)
			},
			countString(s, e, t) {
				return `${this.number(t)} ${this.ngettext(s,e,t)}`
			},
			mem(s) {
				if (s < 0) return "Unknown";
				if (s === 0) return "None";
				let e = s;
				for (let t of Fs) {
					if (e < $e) return t.format(e);
					e /= $e
				}
				return "E2BIG"
			},
			ngettext(s, e, t) {
				return Tt.select(t) === "one" ? s : e
			},
			number(s) {
				return Xs.format(s)
			},
			percentString(s) {
				let e = s < 100 ? 1 : 0;
				return this._toTruncFixed(s, e)
			},
			ratioString(s) {
				return s === -1 ? "None" : s === -2 ? "&infin;" : this.percentString(s)
			},
			size(s) {
				return this.mem(s)
			},
			speed(s) {
				return s < 999.95 ? Ws.format(s) : Ls.format(s / 1e3)
			},
			speedBps(s) {
				return this.speed(this.toKBps(s))
			},
			stringSanitizer(s) {
				return ["E2BIG", "NaN"].some(e => s.includes(e)) ? "\u2026" : s
			},
			timeInterval(s, e = 3) {
				let t = Math.floor(s / 86400),
					r = [];
				t && r.push(this.countString("day", "days", t));
				let o = Math.floor(s % 86400 / 3600);
				(t || o) && r.push(this.countString("hour", "hours", o));
				let i = Math.floor(s % 3600 / 60);
				return t || o || i ? (r.push(this.countString("minute", "minutes", i)), r = r.slice(0, e), r.length > 1 ? `${r.slice(0,-1).join(", ")} and ${r.slice(-1)}` : r[0]) : this.countString("second", "seconds", Math.floor(s % 60))
			},
			timestamp(s) {
				if (!s) return "N/A";
				let e = new Date(s * 1e3),
					t = new Date,
					r = "",
					o = "",
					i = t.getFullYear() === e.getFullYear(),
					n = t.getMonth() === e.getMonth(),
					a = t.getDate() - e.getDate();
				i && n && Math.abs(a) <= 1 ? a === 0 ? r = "Today" : a === 1 ? r = "Yesterday" : r = "Tomorrow" : r = e.toDateString();
				let l = e.getHours(),
					c = "AM";
				l > 12 && (l = l - 12, c = "PM"), l === 0 && (l = 12), l < 10 && (l = `0${l}`);
				let u = e.getMinutes();
				return u < 10 && (u = `0${u}`), s = e.getSeconds(), s < 10 && (s = `0${s}`), o = [l, u, s].join(":"), [r, o, c].join(" ")
			},
			toKBps(s) {
				return Math.floor(s / $e)
			}
		};
	var Ze = class extends EventTarget {
		isDone() {
			return this.fields.have >= this.fields.size
		}
		isEditable() {
			return this.fields.torrent.getFileCount() > 1 && !this.isDone()
		}
		refreshWantedHTML() {
			let e = this.elements.root;
			e.classList.toggle("skip", !this.fields.isWanted), e.classList.toggle("complete", this.isDone()), O(e.checkbox, this.isEditable()), e.checkbox.checked = this.fields.isWanted
		}
		refreshProgressHTML() {
			let {
				size: e,
				have: t
			} = this.fields, r = 100 * (e ? t / e : 1), o = B, i = `${o.size(t)} of ${o.size(e)} (${o.percentString(r)}%)`;
			h(this.elements.progress, i)
		}
		refresh() {
			let e = 0,
				t = !1,
				r = !1,
				o = !1,
				i = 0,
				n = !1,
				a = this.fields.torrent.getFiles();
			for (let l of this.fields.indices) {
				let c = a[l];
				switch (e += c.bytesCompleted, i += c.length, n |= c.wanted, c.priority.toString()) {
					case "-1":
						r = !0;
						break;
					case "1":
						t = !0;
						break;
					default:
						o = !0;
						break
				}
			}
			Ge(this.elements.priority_low_button, r), Ge(this.elements.priority_normal_button, o), Ge(this.elements.priority_high_button, t), (this.fields.have !== e || this.fields.size !== i) && (this.fields.have = e, this.fields.size = i, this.refreshProgressHTML()), this.fields.isWanted !== n && (this.fields.isWanted = n, this.refreshWantedHTML())
		}
		fireWantedChanged(e) {
			let t = new Event("wantedToggled");
			t.indices = [...this.fields.indices], t.wanted = e, this.dispatchEvent(t)
		}
		firePriorityChanged(e) {
			let t = new Event("priorityToggled");
			t.indices = [...this.fields.indices], t.priority = e, this.dispatchEvent(t)
		}
		createRow(e, t, r) {
			let o = document.createElement("li");
			o.classList.add("inspector-torrent-file-list-entry"), this.elements.root = o;
			let i = document.createElement("input"),
				n = W();
			i.type = "checkbox", i.className = "file-wanted-control", i.title = "Download file", i.id = n, i.addEventListener("change", c => this.fireWantedChanged(c.target.checked)), o.checkbox = i, o.append(i), i = document.createElement("label"), i.className = "inspector-torrent-file-list-entry-name", i.setAttribute("for", n), h(i, r), o.append(i), i = document.createElement("div"), i.className = "inspector-torrent-file-list-entry-progress", o.append(i), this.elements.progress = i, i = document.createElement("div"), i.className = "file-priority-radiobox";
			let a = i,
				l = c => this.firePriorityChanged(c.target.value);
			i = document.createElement("input"), i.type = "radio", i.value = "-1", i.className = "low", i.title = "Low Priority", i.addEventListener("click", l), this.elements.priority_low_button = i, a.append(i), i = document.createElement("input"), i.type = "radio", i.value = "0", i.className = "normal", i.title = "Normal Priority", i.addEventListener("click", l), this.elements.priority_normal_button = i, a.append(i), i = document.createElement("input"), i.type = "radio", i.value = "1", i.title = "High Priority", i.className = "high", i.addEventListener("click", l), this.elements.priority_high_button = i, a.append(i), o.append(a), o.style.paddingLeft = `${t*20}px`, this.refresh()
		}
		getElement() {
			return this.elements.root
		}
		constructor(e, t, r, o) {
			super(), this.fields = {
				have: 0,
				indices: o,
				isWanted: !0,
				size: 0,
				torrent: e
			}, this.elements = {
				priority_high_button: null,
				priority_low_button: null,
				priority_normal_button: null,
				progress: null,
				root: null
			}, this.createRow(e, t, r)
		}
	};
	var f = class s extends EventTarget {
		constructor(e) {
			super(), this.fieldObservers = {}, this.fields = {}, this.refresh(e)
		}
		notifyOnFieldChange(e, t) {
			this.fieldObservers[e] = this.fieldObservers[e] || [], this.fieldObservers[e].push(t)
		}
		setField(e, t, r) {
			let o = e[t];
			if (Be(o, r)) return !1;
			let i = this.fieldObservers[t];
			if (e === this.fields && i && i.length > 0)
				for (let n of i) n.call(this, r, o, t);
			return e[t] = r, !0
		}
		updateFiles(e) {
			let t = !1,
				r = this.fields.files || [],
				o = ["length", "name", "bytesCompleted", "wanted", "priority"];
			for (let [i, n] of e.entries()) {
				let a = r[i] || {};
				for (let l of o) l in n && (t |= this.setField(a, l, n[l]));
				r[i] = a
			}
			return this.fields.files = r, t
		}
		static collateTrackers(e) {
			return e.map(t => t.announce.toLowerCase()).join("	")
		}
		refreshFields(e) {
			let t = !1;
			for (let [r, o] of Object.entries(e)) switch (r) {
				case "files":
				case "fileStats":
					t |= this.updateFiles(o);
					break;
				case "trackerStats":
					t |= this.setField(this.fields, "trackers", o);
					break;
				case "trackers":
					r in this.fields || (t |= this.setField(this.fields, r, o));
					break;
				case "name":
					this.setField(this.fields, r, e[r]) && (this.fields.collatedName = "", t = !0);
					break;
				default:
					t |= this.setField(this.fields, r, o)
			}
			return t
		}
		refresh(e) {
			this.refreshFields(e) && this.dispatchEvent(new Event("dataChanged"))
		}
		getComment() {
			return this.fields.comment
		}
		getCreator() {
			return this.fields.creator
		}
		getDateAdded() {
			return this.fields.addedDate
		}
		getDateCreated() {
			return this.fields.dateCreated
		}
		getDesiredAvailable() {
			return this.fields.desiredAvailable
		}
		getDownloadDir() {
			return this.fields.downloadDir
		}
		getDownloadSpeed() {
			return this.fields.rateDownload
		}
		getDownloadedEver() {
			return this.fields.downloadedEver
		}
		getError() {
			return this.fields.error
		}
		getErrorString() {
			return this.fields.errorString
		}
		getETA() {
			return this.fields.eta
		}
		getFailedEver() {
			return this.fields.corruptEver
		}
		getFiles() {
			return this.fields.files || []
		}
		getFile(e) {
			return this.fields.files[e]
		}
		getFileCount() {
			return this.fields["file-count"]
		}
		getHashString() {
			return this.fields.hashString
		}
		getHave() {
			return this.getHaveValid() + this.getHaveUnchecked()
		}
		getHaveUnchecked() {
			return this.fields.haveUnchecked
		}
		getHaveValid() {
			return this.fields.haveValid
		}
		getId() {
			return this.fields.id
		}
		getLabels() {
			return this.fields.labels.sort()
		}
		getLastActivity() {
			return this.fields.activityDate
		}
		getLeftUntilDone() {
			return this.fields.leftUntilDone
		}
		getMagnetLink() {
			return this.fields.magnetLink
		}
		getMetadataPercentComplete() {
			return this.fields.metadataPercentComplete
		}
		getName() {
			return this.fields.name || "Unknown"
		}
		getPeers() {
			return this.fields.peers || []
		}
		getPeersConnected() {
			return this.fields.peersConnected
		}
		getPeersGettingFromUs() {
			return this.fields.peersGettingFromUs
		}
		getPeersSendingToUs() {
			return this.fields.peersSendingToUs
		}
		getPieceCount() {
			return this.fields.pieceCount
		}
		getPieceSize() {
			return this.fields.pieceSize
		}
		getPrimaryMimeType() {
			return this.fields["primary-mime-type"] || "application/octet-stream"
		}
		getPrivateFlag() {
			return this.fields.isPrivate
		}
		getQueuePosition() {
			return this.fields.queuePosition
		}
		getRecheckProgress() {
			return this.fields.recheckProgress
		}
		getSeedRatioLimit() {
			return this.fields.seedRatioLimit
		}
		getSeedRatioMode() {
			return this.fields.seedRatioMode
		}
		getSizeWhenDone() {
			return this.fields.sizeWhenDone
		}
		getStartDate() {
			return this.fields.startDate
		}
		getStatus() {
			return this.fields.status
		}
		getTotalSize() {
			return this.fields.totalSize
		}
		getTrackers() {
			return this.fields.trackers || []
		}
		getUploadSpeed() {
			return this.fields.rateUpload
		}
		getUploadRatio() {
			return this.fields.uploadRatio
		}
		getUploadedEver() {
			return this.fields.uploadedEver
		}
		getWebseedsSendingToUs() {
			return this.fields.webseedsSendingToUs
		}
		isFinished() {
			return this.fields.isFinished
		}
		hasExtraInfo() {
			return "hashString" in this.fields
		}
		isSeeding() {
			return this.getStatus() === s._StatusSeed
		}
		isStopped() {
			return this.getStatus() === s._StatusStopped
		}
		isChecking() {
			return this.getStatus() === s._StatusCheck
		}
		isDownloading() {
			return this.getStatus() === s._StatusDownload
		}
		isQueued() {
			return this.getStatus() === s._StatusDownloadWait || this.getStatus() === s._StatusSeedWait
		}
		isDone() {
			return this.getLeftUntilDone() < 1
		}
		needsMetaData() {
			return this.getMetadataPercentComplete() < 1
		}
		getActivity() {
			return this.getDownloadSpeed() + this.getUploadSpeed()
		}
		getPercentDoneStr() {
			return B.percentString(100 * this.getPercentDone())
		}
		getPercentDone() {
			return this.fields.percentDone
		}
		getStateString() {
			switch (this.getStatus()) {
				case s._StatusStopped:
					return this.isFinished() ? "Seeding complete" : "Paused";
				case s._StatusCheckWait:
					return "Queued for verification";
				case s._StatusCheck:
					return "Verifying local data";
				case s._StatusDownloadWait:
					return "Queued for download";
				case s._StatusDownload:
					return "Downloading";
				case s._StatusSeedWait:
					return "Queued for seeding";
				case s._StatusSeed:
					return "Seeding";
				case null:
					return "Unknown";
				default:
					return "Error"
			}
		}
		seedRatioLimit(e) {
			switch (this.getSeedRatioMode()) {
				case s._RatioUseGlobal:
					return e.seedRatioLimit();
				case s._RatioUseLocal:
					return this.getSeedRatioLimit();
				default:
					return -1
			}
		}
		getErrorMessage() {
			let e = this.getErrorString();
			switch (this.getError()) {
				case s._ErrTrackerWarning:
					return `Tracker returned a warning: ${e}`;
				case s._ErrTrackerError:
					return `Tracker returned an error: ${e}`;
				case s._ErrLocalError:
					return `Error: ${e}`;
				default:
					return null
			}
		}
		getCollatedName() {
			let e = this.fields;
			return !e.collatedName && e.name && (e.collatedName = e.name.toLowerCase()), e.collatedName || ""
		}
		getCollatedTrackers() {
			let e = this.fields;
			return !e.collatedTrackers && e.trackers && (e.collatedTrackers = s.collateTrackers(e.trackers)), e.collatedTrackers || ""
		}
		testState(e) {
			let t = this.getStatus();
			switch (e) {
				case b.FilterActive:
					return this.getPeersGettingFromUs() > 0 || this.getPeersSendingToUs() > 0 || this.getWebseedsSendingToUs() > 0 || this.isChecking();
				case b.FilterSeeding:
					return t === s._StatusSeed || t === s._StatusSeedWait;
				case b.FilterDownloading:
					return t === s._StatusDownload || t === s._StatusDownloadWait;
				case b.FilterPaused:
					return this.isStopped();
				case b.FilterFinished:
					return this.isFinished();
				default:
					return !0
			}
		}
		test(e, t, r, o) {
			let i = this.testState(e);
			if (i && r && (i = this.getCollatedName().includes(r.toLowerCase())), i) {
				let n = this.getLabels();
				o.length > 0 && (i = o.some(a => n.includes(a)))
			}
			return i && t && t.length > 0 && (i = this.getCollatedTrackers().includes(t)), i
		}
		static compareById(e, t) {
			return e.getId() - t.getId()
		}
		static compareByName(e, t) {
			return e.getCollatedName().localeCompare(t.getCollatedName()) || s.compareById(e, t)
		}
		static compareByQueue(e, t) {
			return e.getQueuePosition() - t.getQueuePosition()
		}
		static compareByAge(e, t) {
			let r = e.getDateAdded();
			return t.getDateAdded() - r || s.compareByQueue(e, t)
		}
		static compareByState(e, t) {
			let r = e.getStatus();
			return t.getStatus() - r || s.compareByQueue(e, t)
		}
		static compareByActivity(e, t) {
			let r = e.getActivity();
			return t.getActivity() - r || s.compareByState(e, t)
		}
		static compareByRatio(e, t) {
			let r = e.getUploadRatio(),
				o = t.getUploadRatio();
			return r < o ? 1 : r > o ? -1 : s.compareByState(e, t)
		}
		static compareByProgress(e, t) {
			let r = e.getPercentDone(),
				o = t.getPercentDone();
			return r - o || s.compareByRatio(e, t)
		}
		static compareBySize(e, t) {
			let r = e.getTotalSize(),
				o = t.getTotalSize();
			return r - o || s.compareByName(e, t)
		}
		static compareTorrents(e, t, r, o) {
			let i = 0;
			switch (r) {
				case b.SortByActivity:
					i = s.compareByActivity(e, t);
					break;
				case b.SortByAge:
					i = s.compareByAge(e, t);
					break;
				case b.SortByQueue:
					i = s.compareByQueue(e, t);
					break;
				case b.SortByProgress:
					i = s.compareByProgress(e, t);
					break;
				case b.SortBySize:
					i = s.compareBySize(e, t);
					break;
				case b.SortByState:
					i = s.compareByState(e, t);
					break;
				case b.SortByRatio:
					i = s.compareByRatio(e, t);
					break;
				case b.SortByName:
					i = s.compareByName(e, t);
					break;
				default:
					console.log(`Unrecognized sort mode: ${r}`), i = s.compareByName(e, t);
					break
			}
			return o === b.SortDescending && (i = -i), i
		}
		static sortTorrents(e, t, r) {
			switch (t) {
				case b.SortByActivity:
					e.sort(this.compareByActivity);
					break;
				case b.SortByAge:
					e.sort(this.compareByAge);
					break;
				case b.SortByName:
					e.sort(this.compareByName);
					break;
				case b.SortByProgress:
					e.sort(this.compareByProgress);
					break;
				case b.SortByQueue:
					e.sort(this.compareByQueue);
					break;
				case b.SortByRatio:
					e.sort(this.compareByRatio);
					break;
				case b.SortBySize:
					e.sort(this.compareBySize);
					break;
				case b.SortByState:
					e.sort(this.compareByState);
					break;
				default:
					console.log(`Unrecognized sort mode: ${t}`), e.sort(this.compareByName);
					break
			}
			return r === b.SortDescending && e.reverse(), e
		}
	};
	f._StatusStopped = 0;
	f._StatusCheckWait = 1;
	f._StatusCheck = 2;
	f._StatusDownloadWait = 3;
	f._StatusDownload = 4;
	f._StatusSeedWait = 5;
	f._StatusSeed = 6;
	f._RatioUseGlobal = 0;
	f._RatioUseLocal = 1;
	f._RatioUnlimited = 2;
	f._ErrNone = 0;
	f._ErrTrackerWarning = 1;
	f._ErrTrackerError = 2;
	f._ErrLocalError = 3;
	f._TrackerInactive = 0;
	f._TrackerWaiting = 1;
	f._TrackerQueued = 2;
	f._TrackerActive = 3;
	f.Fields = {};
	f.Fields.Metadata = ["addedDate", "file-count", "name", "primary-mime-type", "totalSize"];
	f.Fields.Stats = ["error", "errorString", "eta", "isFinished", "isStalled", "labels", "leftUntilDone", "metadataPercentComplete", "peersConnected", "peersGettingFromUs", "peersSendingToUs", "percentDone", "queuePosition", "rateDownload", "rateUpload", "recheckProgress", "seedRatioMode", "seedRatioLimit", "sizeWhenDone", "status", "trackers", "downloadDir", "uploadedEver", "uploadRatio", "webseedsSendingToUs"];
	f.Fields.InfoExtra = ["comment", "creator", "dateCreated", "files", "hashString", "isPrivate", "magnetLink", "pieceCount", "pieceSize"];
	f.Fields.StatsExtra = ["activityDate", "corruptEver", "desiredAvailable", "downloadedEver", "fileStats", "haveUnchecked", "haveValid", "peers", "startDate", "trackerStats"];
	var Vt = ["encryption", "speed-up", "speed-down", "percent-done", "status", "peer-address", "peer-app-name"],
		Xe = class s extends EventTarget {
			constructor(e) {
				super(), this.closed = !1, this.controller = e, this.elements = this._create(), this.current_page = this.elements.info.root, this.interval = setInterval(this._refreshTorrents.bind(this), 3e3), this.name = "inspector", this.selection_listener = t => this._setTorrents(t.selected), this.torrent_listener = () => this._updateCurrentPage(), this.torrents = [], this.file_torrent = null, this.file_torrent_n = null, this.file_rows = null, this.elements.dismiss.addEventListener("click", () => this.close()), Object.seal(this), e.addEventListener("torrent-selection-changed", this.selection_listener), this._setTorrents(this.controller.getSelectedTorrents()), document.body.append(this.elements.root)
			}
			close() {
				if (!this.closed) {
					clearInterval(this.interval), this._setTorrents([]), this.elements.root.remove(), this.controller.removeEventListener("torrent-selection-changed", this.selection_listener), this.dispatchEvent(new Event("close"));
					for (let e of Object.keys(this)) this[e] = null;
					this.closed = !0
				}
			}
			static _createInfoPage() {
				let e = document.createElement("div");
				e.classList.add("inspector-info-page");
				let t = {
						root: e
					},
					r = n => {
						let a = document.createElement("div");
						a.textContent = n, a.classList.add("section-label"), e.append(a)
					},
					o = n => {
						let a = document.createElement("label");
						h(a, n), e.append(a);
						let l = document.createElement("span");
						return e.append(l), l
					};
				r("Activity");
				let i = [
					["have", "Have:"],
					["availability", "Availability:"],
					["uploaded", "Uploaded:"],
					["downloaded", "Downloaded:"],
					["state", "State:"],
					["running_time", "Running time:"],
					["remaining_time", "Remaining:"],
					["last_activity", "Last activity:"],
					["error", "Error:"]
				];
				for (let [n, a] of i) t[n] = o(a);
				r("Details"), i = [
					["size", "Size:"],
					["location", "Location:"],
					["hash", "Hash:"],
					["privacy", "Privacy:"],
					["origin", "Origin:"],
					["dateAdded", "Date added:"],
					["magnetLink", "Magnet:"],
					["comment", "Comment:"],
					["labels", "Labels:"]
				];
				for (let [n, a] of i) t[n] = o(a);
				return t
			}
			static _createListPage(e, t) {
				let r = document.createElement("div"),
					o = document.createElement(e);
				return o.id = t, r.append(o), {
					list: o,
					root: r
				}
			}
			static _createTiersPage() {
				return s._createListPage("div", "inspector-tiers-list")
			}
			static _createFilesPage() {
				return s._createListPage("ul", "inspector-file-list")
			}
			static _createPeersPage() {
				let e = document.createElement("table");
				e.classList.add("peer-list");
				let t = document.createElement("thead"),
					r = document.createElement("tr"),
					o = ["", "Up", "Down", "Done", "Status", "Address", "Client"];
				for (let [n, a] of o.entries()) {
					let l = document.createElement("th"),
						c = Vt[n];
					c === "encryption" && (l.dataset.encrypted = !0), l.classList.add(c), h(l, a), r.append(l)
				}
				let i = document.createElement("tbody");
				return t.append(r), e.append(t), e.append(i), {
					root: e,
					tbody: i
				}
			}
			_create() {
				let e = {
						files: s._createFilesPage(),
						info: s._createInfoPage(),
						peers: s._createPeersPage(),
						tiers: s._createTiersPage()
					},
					t = o => {
						this.current_page = o, this._updateCurrentPage()
					};
				return {
					...Ae("inspector", [
						["inspector-tab-info", e.info.root, "Info"],
						["inspector-tab-peers", e.peers.root, "Peers"],
						["inspector-tab-tiers", e.tiers.root, "Tiers"],
						["inspector-tab-files", e.files.root, "Files"]
					], t.bind(this)),
					...e
				}
			}
			_setTorrents(e) {
				let t = "dataChanged",
					r = this.torrent_listener;
				for (let o of this.torrents) o.removeEventListener(t, r);
				this.torrents = [...e];
				for (let o of this.torrents) o.addEventListener(t, r);
				this._refreshTorrents(), this._updateCurrentPage()
			}
			static _needsExtraInfo(e) {
				return e.some(t => !t.hasExtraInfo())
			}
			_refreshTorrents() {
				let {
					controller: e,
					torrents: t
				} = this, r = t.map(o => o.getId());
				if (r && r.length > 0) {
					let o = ["id", ...f.Fields.StatsExtra];
					s._needsExtraInfo(t) && o.push(...f.Fields.InfoExtra), e.updateTorrents(r, o)
				}
			}
			_updateCurrentPage() {
				let {
					current_page: e,
					elements: t
				} = this;
				switch (e) {
					case t.files.root:
						this._updateFiles();
						break;
					case t.info.root:
						this._updateInfo();
						break;
					case t.peers.root:
						this._updatePeers();
						break;
					case t.tiers.root:
						this._updateTiers();
						break;
					default:
						console.warn("unexpected page"), console.log(e)
				}
			}
			_updateInfo() {
				let e = "None",
					t = "Mixed",
					r = "Unknown",
					o = B,
					i = Date.now(),
					{
						elements: n,
						torrents: a
					} = this,
					l = a.reduce((g, d) => g + d.getSizeWhenDone(), 0),
					c = null;
				if (a.length === 0) c = e;
				else if (a.every(g => g.isFinished())) c = "Finished";
				else if (a.every(g => g.isStopped())) c = "Paused";
				else {
					let g = p => p.getStateString(),
						d = g(a[0]);
					c = a.every(p => g(p) === d) ? d : t
				}
				h(n.info.state, c);
				let u = c;
				if (a.length === 0) c = e;
				else {
					let g = a.reduce((I, C) => I + C.getHaveValid(), 0),
						d = a.reduce((I, C) => I + C.getHaveUnchecked(), 0),
						p = a.reduce((I, C) => I + C.getLeftUntilDone(), 0),
						m = 100 * (l ? (l - p) / l : 1);
					c = o.percentString(m), d ? c = `${o.size(g)} of ${o.size(l)} (${c}%), ${o.size(d)} Unverified` : p ? c = `${o.size(g)} of ${o.size(l)} (${c}%)` : c = `${o.size(g)} (100%)`
				}
				if (h(n.info.have, o.stringSanitizer(c)), a.length === 0) c = e;
				else if (l === 0) c = e;
				else {
					let g = a.reduce((d, p) => p.getHave() + p.getDesiredAvailable(), 0);
					c = `${o.percentString(100*g/l)}%`
				}
				if (h(n.info.availability, o.stringSanitizer(c)), a.length === 0) c = e;
				else {
					let g = a.reduce((p, m) => p + m.getDownloadedEver(), 0),
						d = a.reduce((p, m) => p + m.getFailedEver(), 0);
					c = d ? `${o.size(g)} (+${o.size(d)} discarded after failed checksum)` : o.size(g)
				}
				if (h(n.info.downloaded, o.stringSanitizer(c)), a.length === 0) c = e;
				else {
					let g = a.reduce((p, m) => p + m.getUploadedEver(), 0),
						d = a.reduce((p, m) => p + m.getSizeWhenDone(), 0) || a.reduce((p, m) => p + m.getHaveValid(), 0);
					c = `${o.size(g)} (Ratio: ${o.ratioString(oe.ratio(g,d))})`
				}
				if (h(n.info.uploaded, c), a.length === 0) c = e;
				else if (a.every(g => g.isStopped())) c = u;
				else {
					let g = p => p.getStartDate(),
						d = g(a[0]);
					c = a.every(p => g(p) === d) ? o.timeInterval(i / 1e3 - d) : t
				}
				if (h(n.info.running_time, c), a.length === 0) c = e;
				else {
					let g = p => p.getETA(),
						d = g(a[0]);
					a.every(p => g(p) === d) ? d < 0 ? c = r : c = o.timeInterval(d) : c = t
				}
				if (h(n.info.remaining_time, c), a.length === 0) c = e;
				else {
					let g = a.reduce((p, m) => Math.max(p, m.getLastActivity()), -1),
						d = Math.floor(i / 1e3);
					if (0 < g && g <= d) {
						let p = d - g;
						c = p < 5 ? "Active now" : `${o.timeInterval(p)} ago`
					} else c = e
				}
				if (h(n.info.last_activity, c), a.length === 0) c = e;
				else {
					let g = p => p.getErrorString(),
						d = g(a[0]);
					c = a.every(p => g(p) === d) ? d : t
				}
				if (h(n.info.error, c || e), a.length === 0) c = e;
				else {
					let g = a.reduce((d, p) => d + p.getTotalSize(), 0);
					if (g) {
						let d = C => C.getPieceSize(),
							p = a.reduce((C, y) => C + y.getPieceCount(), 0),
							m = o.number(p),
							I = d(a[0]);
						c = a.every(C => d(C) === I) ? `${o.size(g)} (${m} pieces @ ${o.mem(I)})` : `${o.size(g)} (${m} pieces)`
					} else c = "None"
				}
				if (h(n.info.size, o.stringSanitizer(c)), a.length === 0) c = e;
				else {
					let g = p => p.getHashString(),
						d = g(a[0]);
					c = a.every(p => g(p) === d) ? d : t
				}
				if (h(n.info.hash, c), a.length === 0) c = e;
				else {
					let g = p => p.getPrivateFlag(),
						d = g(a[0]);
					a.every(p => g(p) === d) ? d ? c = "Private to this tracker -- DHT and PEX disabled" : c = "Public torrent" : c = t
				}
				if (h(n.info.privacy, c), a.length === 0) c = e;
				else {
					let g = p => p.getComment(),
						d = g(a[0]);
					c = a.every(p => g(p) === d) ? d : t
				}
				if (c = c || e, c.startsWith("https://") || c.startsWith("http://") ? (c = encodeURI(c), n.info.comment.innerHTML = `<a href="${c}" target="_blank" >${c}</a>`) : h(n.info.comment, c), c = a.length === 0 ? e : a[0].getLabels().join(", "), h(n.info.labels, c), a.length === 0) c = e;
				else {
					let g = G => G.getCreator(),
						d = g(a[0]),
						p = !a.every(G => g(G) === d);
					g = G => G.getDateCreated();
					let m = g(a[0]),
						I = !a.every(G => g(G) === m),
						C = !d || d.length === 0,
						y = !m;
					p || I ? c = t : C && y ? c = r : y && !C ? c = `Created by ${d}` : C && !y ? c = `Created on ${new Date(m*1e3).toDateString()}` : c = `Created by ${d} on ${new Date(m*1e3).toDateString()}`
				}
				if (h(n.info.origin, c), a.length === 0) c = e;
				else {
					let g = p => p.getDownloadDir(),
						d = g(a[0]);
					c = a.every(p => g(p) === d) ? d : t
				}
				if (h(n.info.location, c), a.length === 0) c = e;
				else {
					let g = p => p.getDateAdded(),
						d = g(a[0]);
					c = a.every(p => g(p) === d) ? new Date(d * 1e3).toLocaleString(navigator.language, {
						day: "2-digit",
						hour: "2-digit",
						hour12: !1,
						minute: "2-digit",
						month: "short",
						second: "2-digit",
						timeZoneName: "short",
						weekday: "short",
						year: "numeric"
					}) : t
				}
				if (h(n.info.dateAdded, c), a.length === 0) h(n.info.magnetLink, e);
				else if (a.length > 1) h(n.info.magnetLink, t);
				else {
					let g = a[0].getMagnetLink();
					n.info.magnetLink.innerHTML = `<a class="inspector-info-magnet" href="${g}"><button></button></a>`
				}
			}
			static _peerStatusTitle(e) {
				let t = Object.seal({
					"?": "We unchoked this peer, but they're not interested",
					D: "Downloading from this peer",
					E: "Encrypted Connection",
					H: "Peer was discovered through Distributed Hash Table (DHT)",
					I: "Peer is an incoming connection",
					K: "Peer has unchoked us, but we're not interested",
					O: "Optimistic unchoke",
					T: "Peer is connected via uTP",
					U: "Uploading to peer",
					X: "Peer was discovered through Peer Exchange (PEX)",
					d: "We would download from this peer if they'd let us",
					u: "We would upload to this peer if they'd ask"
				});
				return [...e].filter(r => t[r]).map(r => `${r}: ${t[r]}`).join(`
`)
			}
			_updatePeers() {
				let e = B,
					{
						elements: t,
						torrents: r
					} = this,
					{
						tbody: o
					} = t.peers,
					i = [(a, l) => {
						l.dataset.encrypted = a.isEncrypted
					}, (a, l) => h(l, a.rateToPeer ? e.speedBps(a.rateToPeer) : ""), (a, l) => h(l, a.rateToClient ? e.speedBps(a.rateToClient) : ""), (a, l) => h(l, `${Math.floor(a.progress*100)}%`), (a, l) => {
						h(l, a.flagStr), l.setAttribute("title", s._peerStatusTitle(a.flagStr))
					}, (a, l) => {
						h(l, a.address), l.setAttribute("title", a.address)
					}, (a, l) => {
						h(l, a.clientName), l.setAttribute("title", a.clientName)
					}],
					n = [];
				for (let a of r) {
					let l = document.createElement("tr");
					l.classList.add("torrent-row");
					let c = document.createElement("td");
					c.setAttribute("colspan", i.length), h(c, a.getName()), l.append(c), n.push(l);
					for (let u of a.getPeers()) {
						let g = document.createElement("tr");
						g.classList.add("peer-row");
						for (let [d, p] of i.entries()) {
							let m = document.createElement("td");
							m.classList.add(Vt[d]), p(u, m), g.append(m)
						}
						n.push(g)
					}
					for (; o.firstChild;) o.firstChild.remove();
					o.append(...n)
				}
			}
			static getAnnounceState(e) {
				switch (e.announceState) {
					case f._TrackerActive:
						return "Announce in progress";
					case f._TrackerWaiting: {
						let t = Math.max(0, e.nextAnnounceTime - Date.now() / 1e3);
						return `Next announce in ${B.timeInterval(t)}`
					}
					case f._TrackerQueued:
						return "Announce is queued";
					case f._TrackerInactive:
						return e.isBackup ? "Tracker will be used as a backup" : "Announce not scheduled";
					default:
						return `unknown announce state: ${e.announceState}`
				}
			}
			static lastAnnounceStatus(e) {
				let t = "Last Announce",
					r = ["N/A"];
				if (e.hasAnnounced) {
					let o = B.timestamp(e.lastAnnounceTime);
					e.lastAnnounceSucceeded ? r = [o, " (got ", B.countString("peer", "peers", e.lastAnnouncePeerCount), ")"] : (t = "Announce error", r = [e.lastAnnounceResult ? `${e.lastAnnounceResult} - ` : "", o])
				}
				return {
					label: t,
					value: r.join("")
				}
			}
			static lastScrapeStatus(e) {
				let t = "Last Scrape",
					r = "N/A";
				if (e.hasScraped) {
					let o = B.timestamp(e.lastScrapeTime);
					e.lastScrapeSucceeded ? r = o : (t = "Scrape error", r = (e.lastScrapeResult ? `${e.lastScrapeResult} - ` : "") + o)
				}
				return {
					label: t,
					value: r
				}
			}
			static _getOrigin(e) {
				try {
					let t = "udp://";
					if (e.announce.startsWith(t)) {
						let o = "http://",
							i = e.announce.replace(t, o);
						return new URL(i).origin.replace(o, t)
					}
					return new URL(e.announce).origin
				} catch {
					return [e.sitename || e.host || e.announce]
				}
			}
			_updateTiers() {
				let e = "N/A",
					{
						list: t
					} = this.elements.tiers,
					{
						torrents: r
					} = this,
					o = [];
				for (let i of r) {
					if (r.length > 1) {
						let n = document.createElement("div");
						n.classList.add("tier-list-torrent"), h(n, i.getName()), o.push(n)
					}
					for (let n of i.getTrackers()) {
						let a = s.getAnnounceState(n),
							l = s.lastAnnounceStatus(n),
							c = s.lastScrapeStatus(n),
							u = document.createElement("div");
						u.classList.add("tier-list-row");
						let g = document.createElement("div"),
							d = s._getOrigin(n);
						g.classList.add("tier-list-tracker"), h(g, `${d} - tier ${n.tier+1}`), g.setAttribute("title", n.announce), u.append(g), g = document.createElement("div"), g.classList.add("tier-announce"), h(g, `${l.label}: ${l.value}`), u.append(g), g = document.createElement("div"), g.classList.add("tier-seeders"), h(g, `Seeders: ${n.seederCount>-1?n.seederCount:e}`), u.append(g), g = document.createElement("div"), g.classList.add("tier-state"), h(g, a), u.append(g), g = document.createElement("div"), g.classList.add("tier-leechers"), h(g, `Leechers: ${n.leecherCount>-1?n.leecherCount:e}`), u.append(g), g = document.createElement("div"), g.classList.add("tier-scrape"), h(g, `${c.label}: ${c.value}`), u.append(g), g = document.createElement("div"), g.classList.add("tier-downloads"), h(g, `Downloads: ${n.downloadCount>-1?n.downloadCount:e}`), u.append(g), o.push(u)
					}
				}
				for (; t.firstChild;) t.firstChild.remove();
				t.append(...o)
			}
			_changeFileCommand(e, t) {
				let {
					controller: r,
					file_torrent: o
				} = this, i = o.getId();
				r.changeFileCommand(i, e, t)
			}
			_onFileWantedToggled(e) {
				let {
					indices: t,
					wanted: r
				} = e;
				this._changeFileCommand(t, r ? "files-wanted" : "files-unwanted")
			}
			_onFilePriorityToggled(e) {
				let {
					indices: t,
					priority: r
				} = e, o = null;
				switch (r.toString()) {
					case "-1":
						o = "priority-low";
						break;
					case "1":
						o = "priority-high";
						break;
					default:
						o = "priority-normal";
						break
				}
				this._changeFileCommand(t, o)
			}
			_clearFileList() {
				let {
					list: e
				} = this.elements.files;
				for (; e.firstChild;) e.firstChild.remove();
				this.file_torrent = null, this.file_torrent_n = null, this.file_rows = null
			}
			static createFileTreeModel(e) {
				let t = [],
					r = {
						children: {},
						file_indices: []
					};
				for (let [o, i] of e.getFiles().entries()) {
					let {
						name: n
					} = i, a = n.split("/"), l = r;
					for (let [c, u] of a.entries()) {
						let g = l.children[u];
						g || (l.children[u] = g = {
							children: {},
							depth: c,
							file_indices: [],
							name: u,
							parent: l
						}), l = g
					}
					l.file_index = o, delete l.children, t.push(l)
				}
				for (let o of t) {
					let {
						file_index: i
					} = o, n = o;
					do n.file_indices.push(i), n = n.parent; while (n)
				}
				return r
			}
			addNodeToView(e, t, r) {
				let o = new Ze(e, r.depth, r.name, r.file_indices);
				o.addEventListener("wantedToggled", this._onFileWantedToggled.bind(this)), o.addEventListener("priorityToggled", this._onFilePriorityToggled.bind(this)), this.file_rows.push(o), t.append(o.getElement())
			}
			addSubtreeToView(e, t, r) {
				if (r.parent && this.addNodeToView(e, t, r), r.children)
					for (let o of Object.values(r.children)) this.addSubtreeToView(e, t, o)
			}
			_updateFiles() {
				let {
					list: e
				} = this.elements.files, {
					file_rows: t,
					file_torrent: r,
					file_torrent_n: o,
					torrents: i
				} = this;
				if (i.length !== 1) {
					this._clearFileList();
					return
				}
				let [n] = i, a = n.getFiles().length;
				if (n !== r || a !== o) {
					this._clearFileList(), this.file_torrent = n, this.file_torrent_n = a, this.file_rows = [];
					let l = document.createDocumentFragment(),
						c = s.createFileTreeModel(n);
					this.addSubtreeToView(n, l, c), e.append(l)
				} else
					for (let l of t) l.refresh()
			}
		};
	var Fe = class s extends EventTarget {
		constructor(e, t) {
			super(), this.controller = e, this.remote = t, this.elements = {}, this.torrents = [], this.show()
		}
		show() {
			let e = this.controller.getSelectedTorrents();
			e.length !== 0 && (this.torrents = e, this.elements = s._create(), this.elements.confirm.addEventListener("click", () => this._onConfirm()), this.elements.dismiss.addEventListener("click", () => this._onDismiss()), this.elements.entry.value = e[0].getDownloadDir(), document.body.append(this.elements.root), this.elements.entry.focus())
		}
		close() {
			this.elements.root.remove(), this.dispatchEvent(new Event("close")), delete this.controller, delete this.remote, delete this.elements, delete this.torrents
		}
		_onDismiss() {
			this.close()
		}
		_onConfirm() {
			let e = this.torrents.map(r => r.getId()),
				t = this.elements.entry.value.trim();
			this.remote.moveTorrents(e, t), this.close()
		}
		static _create() {
			let e = L("move-dialog");
			e.root.setAttribute("aria-label", "Move Torrent"), e.heading.textContent = "Set Torrent Location", confirm.textContent = "Apply";
			let t = document.createElement("label");
			t.setAttribute("for", "torrent-path"), t.textContent = "Location:", e.workarea.append(t);
			let r = document.createElement("input");
			return r.setAttribute("type", "text"), r.id = "torrent-path", e.entry = r, e.workarea.append(r), e
		}
	};
	var z = class s extends EventTarget {
		constructor(e) {
			super(), this.elements = s._create(e), this.elements.dismiss.addEventListener("click", () => this._onDismiss()), this.options = e, document.body.append(this.elements.root), this.elements.dismiss.focus()
		}
		close() {
			if (!this.closed) {
				this.elements.root.remove(), this.dispatchEvent(new Event("close"));
				for (let e of Object.keys(this)) delete this[e];
				this.closed = !0
			}
		}
		_onDismiss() {
			this.close()
		}
		static _create(e) {
			let {
				heading: t,
				message: r
			} = e, o = L("confirm-dialog");
			return o.confirm.remove(), delete o.confirm, o.heading.textContent = t, o.workarea.textContent = r, o
		}
	};
	var $ = class extends EventTarget {
		constructor(e, t, r = "", o = []) {
			super(), this.controller = e, this.remote = t, this.elements = this._create(r), this.elements.dismiss.addEventListener("click", () => this._onDismiss()), this.elements.confirm.addEventListener("click", () => this._onConfirm()), document.body.append(this.elements.root), o.length > 0 && (this.elements.file_input.files = o), this._updateFreeSpaceInAddDialog(), this.elements.url_input.focus()
		}
		close() {
			if (!this.closed) {
				clearInterval(this.interval), this.elements.root.remove(), this.dispatchEvent(new Event("close"));
				for (let e of Object.keys(this)) delete this[e];
				this.closed = !0
			}
		}
		_onDismiss() {
			this.close()
		}
		_updateFreeSpaceInAddDialog() {
			let e = this.elements.folder_input.value;
			this.remote.getFreeSpace(e, (t, r) => {
				if (!this.closed) {
					let o = r > 0 ? `${B.size(r)} Free` : "";
					this.elements.freespace.textContent = o
				}
			})
		}
		_onConfirm() {
			let {
				controller: e,
				elements: t,
				remote: r
			} = this, {
				file_input: o,
				folder_input: i,
				start_input: n,
				url_input: a
			} = t, l = !n.checked, c = i;
			for (let g of o.files) {
				let d = new FileReader;
				d.addEventListener("load", p => {
					let m = p.target.result,
						I = "base64,",
						C = m.indexOf(I);
					if (C === -1) return;
					let y = {
						arguments: {
							"download-dir": c,
							metainfo: m.slice(Math.max(0, C + I.length)),
							paused: l
						},
						method: "torrent-add"
					};
					r.sendRequest(y, G => {
						G.result !== "success" && (alert(`Error adding "${g.name}": ${G.result}`), e.setCurrentPopup(new z({
							heading: `Error adding "${g.name}"`,
							message: G.result
						})))
					})
				}), d.readAsDataURL(g)
			}
			let u = a.value.trim();
			if (u.length > 0) {
				/^[\da-f]{40}$/i.test(u) && (u = `magnet:?xt=urn:btih:${u}`);
				let g = {
					arguments: {
						"download-dir": c,
						filename: u,
						paused: l
					},
					method: "torrent-add"
				};
				r.sendRequest(g, d => {
					d.result !== "success" && e.setCurrentPopup(new z({
						heading: `Error adding "${u}"`,
						message: d.result
					}))
				})
			}
			this._onDismiss()
		}
		_create(e) {
			let t = L(),
				{
					confirm: r,
					root: o,
					heading: i,
					workarea: n
				} = t;
			o.classList.add("open-torrent"), i.textContent = "Add Torrents", r.textContent = "Add";
			let a = W(),
				l = document.createElement("label");
			l.setAttribute("for", a), l.textContent = "Please select torrent files to add:", n.append(l);
			let c = document.createElement("input");
			c.type = "file", c.name = "torrent-files[]", c.id = a, c.multiple = "multiple", c.accept = ".torrent, application/x-bittorrent", n.append(c), t.file_input = c, a = W(), l = document.createElement("label"), l.setAttribute("for", a), l.textContent = "Or enter a URL:", n.append(l), c = document.createElement("input"), c.type = "url", c.id = a, c.value = e, n.append(c), t.url_input = c, c.addEventListener("keyup", ({
				key: p
			}) => {
				p === "Enter" && r.click()
			}), a = W(), 
			l = document.createElement("label"), 
			l.id = "add-dialog-folder-label", l.for = a, l.textContent = "Destination folder: ", n.append(l);
			let u = document.createElement("span");

			c = document.createElement("select");
			let option1 = document.createElement("option");
			option1.text = "/Movies";

			let option2 = document.createElement("option");
			option2.text = "/Tv";

			c.add(option1);
			c.add(option2);

			c.addEventListener("change", () =>{

				t.folder_input = c.options[c.selectedIndex].textContent;

			});
			n.append(c)
			u.id = "free-space-text", l.append(u), n.append(l), t.freespace = u, c.value, t.folder_input;
			let g = document.createElement("div");
			n.append(g);
			let d = document.createElement("input");
			return d.type = "checkbox", d.id = "auto-start-check", d.checked = this.controller.shouldAddedTorrentsStart(), g.append(d), t.start_input = d, l = document.createElement("label"), l.id = "auto-start-label", l.setAttribute("for", d.id), l.textContent = "Start when added", g.append(l), t
		}
	};
	var X = {
			_DaemonVersion: "version",
			_DownSpeedLimit: "speed-limit-down",
			_DownSpeedLimited: "speed-limit-down-enabled",
			_QueueMoveBottom: "queue-move-bottom",
			_QueueMoveDown: "queue-move-down",
			_QueueMoveTop: "queue-move-top",
			_QueueMoveUp: "queue-move-up",
			_Root: "../rpc",
			_TurtleDownSpeedLimit: "alt-speed-down",
			_TurtleState: "alt-speed-enabled",
			_TurtleUpSpeedLimit: "alt-speed-up",
			_UpSpeedLimit: "speed-limit-up",
			_UpSpeedLimited: "speed-limit-up-enabled"
		},
		ie = class s {
			constructor(e) {
				this._controller = e, this._error = "", this._session_id = ""
			}
			sendRequest(e, t, r) {
				let o = new Headers;
				o.append("cache-control", "no-cache"), o.append("content-type", "application/json"), o.append("pragma", "no-cache"), this._session_id && o.append(s._SessionHeader, this._session_id);
				let i = null;
				fetch(X._Root, {
					body: JSON.stringify(e),
					headers: o,
					method: "POST"
				}).then(n => {
					if (i = n, n.status === 409) {
						let a = new Error(s._SessionHeader);
						throw a.header = n.headers.get(s._SessionHeader), a
					}
					return n.json()
				}).then(n => {
					t && t.call(r, n, i)
				}).catch(n => {
					if (n.message === s._SessionHeader) {
						this._session_id = n.header, this.sendRequest(e, t, r);
						return
					}
					console.trace(n), this._controller.togglePeriodicSessionRefresh(!1), this._controller.setCurrentPopup(new z({
						heading: "Connection failed",
						message: "Could not connect to the server. You may need to reload the page to reconnect."
					}))
				})
			}
			loadDaemonPrefs(e, t) {
				let r = {
					method: "session-get"
				};
				this.sendRequest(r, e, t)
			}
			checkPort(e, t, r) {
				let o = {
					arguments: {
						ipProtocol: e
					},
					method: "port-test"
				};
				this.sendRequest(o, t, r)
			}
			renameTorrent(e, t, r, o, i) {
				let n = {
					arguments: {
						ids: e,
						name: r,
						path: t
					},
					method: "torrent-rename-path"
				};
				this.sendRequest(n, o, i)
			}
			setLabels(e, t, r) {
				let o = {
					ids: e,
					labels: t
				};
				this.sendRequest({
					arguments: o,
					method: "torrent-set"
				}, r)
			}
			loadDaemonStats(e, t) {
				let r = {
					method: "session-stats"
				};
				this.sendRequest(r, e, t)
			}
			updateTorrents(e, t, r, o) {
				let i = {
					arguments: {
						fields: t,
						format: "table"
					},
					method: "torrent-get"
				};
				e && (i.arguments.ids = e), this.sendRequest(i, n => {
					let a = n.arguments;
					r.call(o, a.torrents, a.removed)
				})
			}
			getFreeSpace(e, t, r) {
				let o = {
					arguments: {
						path: e
					},
					method: "free-space"
				};
				this.sendRequest(o, i => {
					let n = i.arguments;
					t.call(r, n.path, n["size-bytes"])
				})
			}
			changeFileCommand(e, t, r) {
				let o = {
					ids: [e]
				};
				o[r] = t, this.sendRequest({
					arguments: o,
					method: "torrent-set"
				}, () => {
					this._controller.refreshTorrents([e])
				})
			}
			sendTorrentSetRequests(e, t, r, o, i) {
				r || (r = {}), r.ids = t;
				let n = {
					arguments: r,
					method: e
				};
				this.sendRequest(n, o, i)
			}
			sendTorrentActionRequests(e, t, r, o) {
				this.sendTorrentSetRequests(e, t, null, r, o)
			}
			startTorrents(e, t, r, o) {
				let i = t ? "torrent-start-now" : "torrent-start";
				this.sendTorrentActionRequests(i, e, r, o)
			}
			stopTorrents(e, t, r) {
				this.sendTorrentActionRequests("torrent-stop", e, t, r)
			}
			moveTorrents(e, t, r, o) {
				this.sendTorrentSetRequests("torrent-set-location", e, {
					location: t,
					move: !0
				}, r, o)
			}
			removeTorrents(e, t) {
				let r = {
					arguments: {
						"delete-local-data": t,
						ids: []
					},
					method: "torrent-remove"
				};
				if (e)
					for (let o = 0, i = e.length; o < i; ++o) r.arguments.ids.push(e[o].getId());
				this.sendRequest(r, () => {
					this._controller.refreshTorrents()
				})
			}
			verifyTorrents(e, t, r) {
				this.sendTorrentActionRequests("torrent-verify", e, t, r)
			}
			reannounceTorrents(e, t, r) {
				this.sendTorrentActionRequests("torrent-reannounce", e, t, r)
			}
			addTorrentByUrl(e, t) {
				/^[\da-f]{40}$/i.test(e) && (e = `magnet:?xt=urn:btih:${e}`);
				let r = {
					arguments: {
						filename: e,
						paused: t.paused
					},
					method: "torrent-add"
				};
				this.sendRequest(r, () => {
					this._controller.refreshTorrents()
				})
			}
			savePrefs(e) {
				let t = {
					arguments: e,
					method: "session-set"
				};
				this.sendRequest(t, () => {
					this._controller.loadDaemonPrefs()
				})
			}
			updateBlocklist() {
				let e = {
					method: "blocklist-update"
				};
				this.sendRequest(e, () => {
					this._controller.loadDaemonPrefs()
				})
			}
			moveTorrentsToTop(e, t, r) {
				this.sendTorrentActionRequests(X._QueueMoveTop, e, t, r)
			}
			moveTorrentsToBottom(e, t, r) {
				this.sendTorrentActionRequests(X._QueueMoveBottom, e, t, r)
			}
			moveTorrentsUp(e, t, r) {
				this.sendTorrentActionRequests(X._QueueMoveUp, e, t, r)
			}
			moveTorrentsDown(e, t, r) {
				this.sendTorrentActionRequests(X._QueueMoveDown, e, t, r)
			}
		};
	ie._SessionHeader = "X-Transmission-Session-Id";

	function We(s, e) {
		let t = document.createElement("fieldset");
		t.classList.add("section", s);
		let r = document.createElement("legend");
		return r.classList.add("title"), r.textContent = e, t.append(r), t
	}

	function Yt(s, e, t, r) {
		let o = document.createElement("button");
		return o.textContent = e, o.addEventListener("click", r), s.append(o), o.dataset.action = t, o
	}
	var ne = class extends EventTarget {
		constructor(e, t, r, o) {
			super(), this.action_listener = this._onActionChange.bind(this), this.action_manager = o, this.action_manager.addEventListener("change", this.action_listener), this.prefs_listener = this._onPrefsChange.bind(this), this.prefs = t, this.prefs.addEventListener("change", this.prefs_listener), this.closed = !1, this.remote = r, this.name = "overflow-menu", this.session_listener = this._onSessionChange.bind(this), this.session_manager = e, this.session_manager.addEventListener("session-change", this.session_listener);
			let {
				session_properties: i
			} = e;
			Object.assign(this, this._create(i)), this.outside = new K(this.root), this.outside.addEventListener("click", () => this.close()), Object.seal(this), this.show()
		}
		show() {
			document.body.append(this.root)
		}
		close() {
			if (!this.closed) {
				this.outside.stop(), this.session_manager.removeEventListener("session-change", this.session_listener), this.action_manager.removeEventListener("change", this.action_listener), this.prefs.removeEventListener("change", this.prefs_listener), this.root.remove(), this.dispatchEvent(new Event("close"));
				for (let e of Object.keys(this)) this[e] = null;
				this.closed = !0
			}
		}
		_onSessionChange(e) {
			let {
				alt_speed_check: t
			} = this.elements, {
				session_properties: r
			} = e;
			t.checked = r[X._TurtleState]
		}
		_onPrefsChange(e) {
			switch (e.key) {
				case b.SortDirection:
				case b.SortMode:
					this.root.querySelector(`[data-pref="${e.key}"]`).value = e.value;
					break;
				default:
					break
			}
		}
		_onActionChange(e) {
			let t = this.actions[e.action];
			t && this._updateElement(t)
		}
		_updateElement(e) {
			if (e.dataset.action) {
				let {
					action: t
				} = e.dataset, r = this.action_manager.keyshortcuts(t);
				r && e.setAttribute("aria-keyshortcuts", r), O(e, this.action_manager.isEnabled(t))
			}
		}
		_onClick(e) {
			let {
				action: t,
				pref: r
			} = e.target.dataset;
			if (t) {
				this.action_manager.click(t);
				return
			}
			if (r) {
				this.prefs[r] = e.target.value;
				return
			}
			console.log("unhandled"), console.log(e), console.trace()
		}
		_create(e) {
			let t = {},
				r = {},
				o = this._onClick.bind(this),
				i = document.createElement("div");
			i.classList.add("overflow-menu", "popup");
			let n = We("display", "Display");
			i.append(n);
			let a = document.createElement("div");
			a.id = "display-options", n.append(a);
			let l = document.createElement("div");
			l.classList.add("table-row"), a.append(l);
			let c = document.createElement("label");
			c.id = "display-sort-mode-label", c.textContent = "Sort by", l.append(c);
			let u = document.createElement("select");
			u.id = "display-sort-mode-select", u.dataset.pref = b.SortMode, l.append(u);
			let g = [
				[b.SortByActivity, "Activity"],
				[b.SortByAge, "Age"],
				[b.SortByName, "Name"],
				[b.SortByProgress, "Progress"],
				[b.SortByQueue, "Queue order"],
				[b.SortByRatio, "Ratio"],
				[b.SortBySize, "Size"],
				[b.SortByState, "State"]
			];
			for (let [A, v] of g) {
				let k = document.createElement("option");
				k.value = A, k.textContent = v, u.append(k)
			}
			c.setAttribute("for", u.id), u.value = this.prefs.sort_mode, u.addEventListener("change", A => {
				this.prefs.sort_mode = A.target.value
			}), l = document.createElement("div"), l.classList.add("table-row"), a.append(l);
			let d = document.createElement("input");
			d.id = "display-sort-reverse-check", d.dataset.pref = b.SortDirection, d.type = "checkbox", l.append(d), c = document.createElement("label"), c.id = "display-sort-reverse-label", c.setAttribute("for", d.id), c.textContent = "Reverse sort", l.append(c), d.checked = this.prefs.sort_direction !== b.SortAscending, d.addEventListener("input", A => {
				this.prefs.sort_direction = A.target.checked ? b.SortDescending : b.SortAscending
			}), l = document.createElement("div"), l.classList.add("table-row"), a.append(l);
			let p = "toggle-compact-rows";
			d = document.createElement("input"), d.id = "display-compact-check", d.dataset.action = p, d.type = "checkbox", l.append(d), c = document.createElement("label"), c.id = "display-compact-label", c.for = d.id, c.setAttribute("for", d.id), c.textContent = this.action_manager.text(p), d.checked = this.prefs.display_mode === b.DisplayCompact, l.append(c), d.addEventListener("input", A => {
				let {
					checked: v
				} = A.target;
				this.prefs.display_mode = v ? b.DisplayCompact : b.DisplayFull
			}), l = document.createElement("div"), l.classList.add("table-row"), a.append(l), p = "toggle-contrast", d = document.createElement("input"), d.id = "contrast-more-check", d.dataset.action = p, d.type = "checkbox", d.classList.add("switch"), c = document.createElement("label"), c.id = "contrast-more-label", c.for = d.id, c.setAttribute("for", d.id), c.textContent = this.action_manager.text(p), d.checked = this.prefs.contrast_mode === b.ContrastMore, l.append(d), l.append(c), d.addEventListener("input", A => {
				let {
					checked: v
				} = A.target;
				this.prefs.contrast_mode = v ? b.ContrastMore : b.ContrastLess
			}), l = document.createElement("div"), l.classList.add("table-row", "display-fullscreen-row"), a.append(l), d = document.createElement("input"), d.id = "display-fullscreen-check", d.type = "checkbox";
			let m = () => document.fullscreenElement !== null;
			d.checked = m(), d.addEventListener("input", () => {
				m() ? document.exitFullscreen() : document.body.requestFullscreen()
			}), document.addEventListener("fullscreenchange", () => {
				d.checked = m()
			}), l.append(d), c = document.createElement("label"), c.id = "display-fullscreen-label", c.for = d.id, c.setAttribute("for", d.id), c.textContent = "Fullscreen", l.append(c), n = We("speed", "Speed Limit"), i.append(n), a = document.createElement("div"), a.id = "speed-options", n.append(a), l = document.createElement("div"), l.classList.add("speed-up"), a.append(l), c = document.createElement("label"), c.id = "speed-up-label", c.textContent = "Upload:", l.append(c);
			let I = "Unlimited";
			u = document.createElement("select"), u.id = "speed-up-select", l.append(u);
			let C = ["50", "100", "250", "500", "1000", "2500", "5000", "10000", I];
			for (let A of [...new Set(C).add(`${e[X._UpSpeedLimit]}`).values()].sort((v, k) => v - k)) {
				let v = document.createElement("option");
				v.value = A, v.textContent = A === I ? I : B.speed(A), u.append(v)
			}
			c.setAttribute("for", u.id), u.value = e[X._UpSpeedLimited] ? `${e[X._UpSpeedLimit]}` : I, u.addEventListener("change", A => {
				let {
					value: v
				} = A.target;
				console.log(A), v === I ? this.remote.savePrefs({
					[X._UpSpeedLimited]: !1
				}) : this.remote.savePrefs({
					[X._UpSpeedLimited]: !0,
					[X._UpSpeedLimit]: Number.parseInt(v, 10)
				})
			}), l = document.createElement("div"), l.classList.add("speed-down"), a.append(l), c = document.createElement("label"), c.id = "speed-down-label", c.textContent = "Download:", l.append(c), u = document.createElement("select"), u.id = "speed-down-select", l.append(u);
			for (let A of [...new Set(C).add(`${e[X._DownSpeedLimit]}`).values()].sort((v, k) => v - k)) {
				let v = document.createElement("option");
				v.value = A, v.textContent = A === I ? I : B.speed(A), u.append(v)
			}
			c.setAttribute("for", u.id), u.value = e[X._DownSpeedLimited] ? `${e[X._DownSpeedLimit]}` : I, u.addEventListener("change", A => {
				let {
					value: v
				} = A.target;
				console.log(A), v === I ? this.remote.savePrefs({
					[X._DownSpeedLimited]: !1
				}) : this.remote.savePrefs({
					[X._DownSpeedLimited]: !0,
					[X._DownSpeedLimit]: Number.parseInt(v, 10)
				})
			}), l = document.createElement("div"), l.classList.add("alt-speed"), a.append(l), d = document.createElement("input"), d.id = "alt-speed-check", d.type = "checkbox", d.checked = e[X._TurtleState], d.addEventListener("change", A => {
				this.remote.savePrefs({
					[X._TurtleState]: A.target.checked
				})
			}), l.append(d), r.alt_speed_check = d, c = document.createElement("label"), c.id = "alt-speed-image", c.setAttribute("for", d.id), l.append(c), c = document.createElement("label"), c.id = "alt-speed-label", c.setAttribute("for", d.id), c.textContent = "Use Temp limits", l.append(c), c = document.createElement("label"), c.id = "alt-speed-values-label", c.setAttribute("for", d.id);
			let y = B.speed(e[X._TurtleUpSpeedLimit]),
				G = B.speed(e[X._TurtleDownSpeedLimit]);
			c.textContent = `(${y} up, ${G} down)`, l.append(c), n = We("actions", "Actions"), i.append(n);
			for (let A of ["show-preferences-dialog", "show-shortcuts-dialog", "pause-all-torrents", "start-all-torrents"]) {
				let v = this.action_manager.text(A);
				t[A] = Yt(n, v, A, o)
			}
			n = We("help", "Help"), i.append(n), a = document.createElement("div"), n.append(a);
			for (let A of ["show-statistics-dialog", "show-about-dialog"]) {
				let v = this.action_manager.text(A);
				t[A] = Yt(a, v, A, o)
			}
			let x = document.createElement("a");
			return x.href = "https://transmissionbt.com/donate.html", x.target = "_blank", x.textContent = "Donate", a.append(x), this._updateElement = this._updateElement.bind(this), {
				actions: t,
				elements: r,
				root: i
			}
		}
	};
	var Le = class s extends EventTarget {
		static _initTimeDropDown(e) {
			for (let t = 0; t < 24 * 4; ++t) {
				let r = Number.parseInt(t / 4, 10),
					o = t % 4 * 15,
					i = t * 15,
					n = `${r}:${o||"00"}`;
				e.options[t] = new Option(n, i)
			}
		}
		static _initDayDropDown(e) {
			let t = [
				["Everyday", "127"],
				["Weekdays", "62"],
				["Weekends", "65"],
				["Sunday", "1"],
				["Monday", "2"],
				["Tuesday", "4"],
				["Wednesday", "8"],
				["Thursday", "16"],
				["Friday", "32"],
				["Saturday", "64"]
			];
			for (let r = 0; t[r]; ++r) {
				let [o, i] = t[r];
				e.options[r] = new Option(o, i)
			}
		}
		_checkPort() {
			for (let [e, t] of Object.entries(this.elements.network.port_status_label)) delete t.dataset.open, h(t, "Checking..."), this.remote.checkPort(e, this._onPortChecked, this)
		}
		_onPortChecked(e) {
			if (this.closed) return;
			let t = this.elements.network.port_status_label[e.arguments.ipProtocol],
				r = e.arguments["port-is-open"] || !1;
			t.dataset.open = r, h(t, r ? "Open" : "Closed")
		}
		_setBlocklistButtonEnabled(e) {
			let t = this.elements.peers.blocklist_update_button;
			O(t, e), t.value = e ? "Update" : "Updating..."
		}
		static _getValue(e) {
			if (e.tagName === "TEXTAREA") return e.value;
			switch (e.type) {
				case "checkbox":
				case "radio":
					return e.checked;
				case "number":
				case "select-one":
				case "text":
				case "url": {
					let t = e.value;
					return Number.parseInt(t, 10).toString() === t ? Number.parseInt(t, 10) : Number.parseFloat(t).toString() === t ? Number.parseFloat(t) : t
				}
				default:
					return null
			}
		}
		_onMaybePortChanged(e) {
			(e === "peer-port" || e === "port-forwarding-enabled") && this._checkPort()
		}
		_onControlChanged(e) {
			let {
				key: t
			} = e.target.dataset;
			this.remote.savePrefs({
				[t]: s._getValue(e.target)
			}), this._onMaybePortChanged(t)
		}
		_onDialogClosed() {
			this.dispatchEvent(new Event("closed"))
		}
		_update() {
			this._setBlocklistButtonEnabled(!0);
			for (let [e, t] of Object.entries(this.session_manager.session_properties))
				for (let r of this.elements.root.querySelectorAll(`[data-key="${e}"]`))
					if (e === "blocklist-size") {
						let o = B.number(t);
						r.innerHTML = `Blocklist has <span class="blocklist-size-number">${o}</span> rules`, h(this.elements.peers.blocklist_update_button, "Update")
					} else switch (r.type) {
						case "checkbox":
						case "radio":
							r.checked = t;
							break;
						case "text":
						case "textarea":
						case "url":
						case "email":
						case "number":
						case "search":
							r !== document.activeElement && (r.value != t && this._onMaybePortChanged(e), r.value = t);
							break;
						case "select-one":
							r.value = t;
							break;
						default:
							console.log(r.type);
							break
					}
		}
		shouldAddedTorrentsStart() {
			return this.data.elements.root.find("#start-added-torrents")[0].checked
		}
		static _createCheckAndLabel(e, t) {
			let r = document.createElement("div");
			r.id = e;
			let o = document.createElement("input");
			o.id = W(), o.type = "checkbox", r.append(o);
			let i = document.createElement("label");
			return i.textContent = t, i.setAttribute("for", o.id), r.append(i), {
				check: o,
				label: i,
				root: r
			}
		}
		static _enableIfChecked(e, t) {
			let r = () => {
				e.tagName === "INPUT" ? O(e, t.checked) : e.classList.toggle("disabled", !t.checked)
			};
			t.addEventListener("change", r), r()
		}
		static _getProtocolHandlerRegistered() {
			return localStorage.getItem("protocol-handler-registered") === "true"
		}
		static _updateProtocolHandlerButton(e) {
			e.removeAttribute("disabled"), e.removeAttribute("title"), s._getProtocolHandlerRegistered() ? (e.textContent = "Remove Browser Handler", "unregisterProtocolHandler" in navigator || e.setAttribute("title", "Your browser does not support removing protocol handlers. This button only allows you to re-register a handler.")) : (e.textContent = "Add Browser Handler", e.removeAttribute("title"), "registerProtocolHandler" in navigator || (e.setAttribute("disabled", !0), e.setAttribute("title", "Your browser does not support protocol handlers")))
		}
		static _toggleProtocolHandler(e) {
			let t = new URL(window.location.href);
			t.search = "addtorrent=%s", this._getProtocolHandlerRegistered() ? (navigator.unregisterProtocolHandler?.("magnet", t.toString()), localStorage.removeItem("protocol-handler-registered"), s._updateProtocolHandlerButton(e)) : (navigator.registerProtocolHandler("magnet", t.toString(), "Transmission Web"), localStorage.setItem("protocol-handler-registered", "true"), s._updateProtocolHandlerButton(e))
		}
		static _createTorrentsPage() {
			let e = document.createElement("div");
			e.classList.add("prefs-torrents-page");
			let t = document.createElement("div");
			t.textContent = "Downloading", t.classList.add("section-label"), e.append(t), t = document.createElement("label"), t.textContent = "Download to:", e.append(t);
			let r = document.createElement("input");
			r.type = "text", r.id = W(), r.dataset.key = "download-dir", t.setAttribute("for", r.id), e.append(r);
			let o = r,
				i = s._createCheckAndLabel("incomplete-dir-div", "Use temporary folder:");
			i.check.title = "Separate folder to temporarily store downloads until they are complete.", i.check.dataset.key = "incomplete-dir-enabled", i.label.title = i.check.title, e.append(i.root);
			let n = i.check;
			r = document.createElement("input"), r.type = "text", r.dataset.key = "incomplete-dir", e.append(r), s._enableIfChecked(r, i.check);
			let a = r;
			i = s._createCheckAndLabel("autostart-div", "Start when added"), i.check.dataset.key = "start-added-torrents", e.append(i.root);
			let l = i.check;
			i = s._createCheckAndLabel("suffix-div", `Append "part" to incomplete files' names`), i.check.dataset.key = "rename-partial-files", e.append(i.root);
			let c = i.check;
			i = s._createCheckAndLabel("download-queue-div", "Download queue size:"), i.check.dataset.key = "download-queue-enabled", e.append(i.root);
			let u = i.check;
			r = document.createElement("input"), r.type = "number", r.dataset.key = "download-queue-size", e.append(r), s._enableIfChecked(r, i.check);
			let g = r;
			t = document.createElement("div"), t.textContent = "Seeding", t.classList.add("section-label"), e.append(t), i = s._createCheckAndLabel("stop-ratio-div", "Stop seeding at ratio:"), i.check.dataset.key = "seedRatioLimited", e.append(i.root);
			let d = i.check;
			r = document.createElement("input"), r.type = "number", r.min = "0.1", r.step = "any", r.dataset.key = "seedRatioLimit", e.append(r), s._enableIfChecked(r, i.check);
			let p = r;
			i = s._createCheckAndLabel("stop-idle-div", "Stop seeding if idle for N mins:"), i.check.dataset.key = "idle-seeding-limit-enabled", e.append(i.root);
			let m = i.check;
			r = document.createElement("input"), r.type = "number", r.min = "0.1", r.step = "any", r.dataset.key = "idle-seeding-limit", e.append(r), s._enableIfChecked(r, i.check);
			let I = r;
			t = document.createElement("div"), t.textContent = "Magnet Protocol Handler", t.classList.add("section-label"), e.append(t);
			let C = document.createElement("button");
			return C.classList.add("register-handler-button"), s._updateProtocolHandlerButton(C), e.append(C), {
				autostart_check: l,
				download_dir: o,
				download_queue_check: u,
				download_queue_input: g,
				incomplete_dir_check: n,
				incomplete_dir_input: a,
				register_handler_button: C,
				root: e,
				stop_idle_check: m,
				stop_idle_input: I,
				stop_ratio_check: d,
				stop_ratio_input: p,
				suffix_check: c
			}
		}
		static _createSpeedPage() {
			let e = document.createElement("div");
			e.classList.add("prefs-speed-page");
			let t = document.createElement("div");
			t.textContent = "Speed Limits", t.classList.add("section-label"), e.append(t);
			let r = s._createCheckAndLabel("upload-speed-div", "Upload (kB/s):");
			r.check.dataset.key = "speed-limit-up-enabled", e.append(r.root);
			let o = r.check,
				i = document.createElement("input");
			i.type = "number", i.dataset.key = "speed-limit-up", e.append(i), s._enableIfChecked(i, r.check);
			let n = i;
			r = s._createCheckAndLabel("download-speed-div", "Download (kB/s):"), r.check.dataset.key = "speed-limit-down-enabled", e.append(r.root);
			let a = r.check;
			i = document.createElement("input"), i.type = "number", i.dataset.key = "speed-limit-down", e.append(i), s._enableIfChecked(i, r.check);
			let l = i;
			t = document.createElement("div"), t.textContent = "Alternative Speed Limits", t.classList.add("section-label", "alt-speed-section-label"), e.append(t), t = document.createElement("div"), t.textContent = "Override normal speed limits manually or at scheduled times", t.classList.add("alt-speed-label"), e.append(t), t = document.createElement("label"), t.textContent = "Upload (kB/s):", e.append(t), i = document.createElement("input"), i.type = "number", i.dataset.key = "alt-speed-up", i.id = W(), t.setAttribute("for", i.id), e.append(i);
			let c = i;
			t = document.createElement("label"), t.textContent = "Download (kB/s):", e.append(t), i = document.createElement("input"), i.type = "number", i.dataset.key = "alt-speed-down", i.id = W(), t.setAttribute("for", i.id), e.append(i);
			let u = i;
			r = s._createCheckAndLabel("alt-times-div", "Scheduled times"), r.check.dataset.key = "alt-speed-time-enabled", e.append(r.root);
			let g = r.check;
			t = document.createElement("label"), t.textContent = "From:", s._enableIfChecked(t, r.check), e.append(t);
			let d = document.createElement("select");
			d.id = W(), d.dataset.key = "alt-speed-time-begin", s._initTimeDropDown(d), t.setAttribute("for", d.id), e.append(d), s._enableIfChecked(d, r.check);
			let p = d;
			t = document.createElement("label"), t.textContent = "To:", s._enableIfChecked(t, r.check), e.append(t), d = document.createElement("select"), d.id = W(), d.dataset.key = "alt-speed-time-end", s._initTimeDropDown(d), t.setAttribute("for", d.id), e.append(d), s._enableIfChecked(d, r.check);
			let m = d;
			return t = document.createElement("label"), t.textContent = "On days:", s._enableIfChecked(t, r.check), e.append(t), d = document.createElement("select"), d.id = W(), d.dataset.key = "alt-speed-time-day", s._initDayDropDown(d), t.setAttribute("for", d.id), e.append(d), s._enableIfChecked(d, r.check), {
				alt_days_select: d,
				alt_download_speed_input: u,
				alt_from_select: p,
				alt_times_check: g,
				alt_to_select: m,
				alt_upload_speed_input: c,
				download_speed_check: a,
				download_speed_input: l,
				root: e,
				upload_speed_check: o,
				upload_speed_input: n
			}
		}
		static _createPeersPage() {
			let e = document.createElement("div");
			e.classList.add("prefs-peers-page");
			let t = document.createElement("div");
			t.textContent = "Connections", t.classList.add("section-label"), e.append(t), t = document.createElement("label"), t.textContent = "Max peers per torrent:", e.append(t);
			let r = document.createElement("input");
			r.type = "number", r.dataset.key = "peer-limit-per-torrent", r.id = W(), t.setAttribute("for", r.id), e.append(r);
			let o = r;
			t = document.createElement("label"), t.textContent = "Max peers overall:", e.append(t), r = document.createElement("input"), r.type = "number", r.dataset.key = "peer-limit-global", r.id = W(), t.setAttribute("for", r.id), e.append(r);
			let i = r;
			t = document.createElement("div"), t.textContent = "Options", t.classList.add("section-label"), e.append(t), t = document.createElement("label"), t.textContent = "Encryption mode:", e.append(t);
			let n = document.createElement("select");
			n.id = W(), n.dataset.key = "encryption", n.options[0] = new Option("Prefer encryption", "preferred"), n.options[1] = new Option("Allow encryption", "tolerated"), n.options[2] = new Option("Require encryption", "required"), e.append(n);
			let a = n,
				l = s._createCheckAndLabel("use-pex-div", "Use PEX to find more peers");
			l.check.title = "PEX is a tool for exchanging peer lists with the peers you're connected to.", l.check.dataset.key = "pex-enabled", l.label.title = l.check.title, e.append(l.root);
			let c = l.check;
			l = s._createCheckAndLabel("use-dht-div", "Use DHT to find more peers"), l.check.title = "DHT is a tool for finding peers without a tracker.", l.check.dataset.key = "dht-enabled", l.label.title = l.check.title, e.append(l.root);
			let u = l.check;
			l = s._createCheckAndLabel("use-lpd-div", "Use LPD to find more peers"), l.check.title = "LPD is a tool for finding peers on your local network.", l.check.dataset.key = "lpd-enabled", l.label.title = l.check.title, e.append(l.root);
			let g = l.check;
			t = document.createElement("div"), t.textContent = "Blocklist", t.classList.add("section-label"), e.append(t), l = s._createCheckAndLabel("blocklist-enabled-div", "Enable blocklist:"), l.check.dataset.key = "blocklist-enabled", e.append(l.root);
			let d = l.check;
			r = document.createElement("input"), r.type = "url", r.value = "http://www.example.com/blocklist", r.dataset.key = "blocklist-url", e.append(r), s._enableIfChecked(r, l.check);
			let p = r;
			t = document.createElement("label"), t.textContent = "Blocklist has {n} rules", t.dataset.key = "blocklist-size", t.classList.add("blocklist-size-label"), s._enableIfChecked(t, l.check), e.append(t);
			let m = document.createElement("button");
			return m.classList.add("blocklist-update-button"), m.textContent = "Update", e.append(m), s._enableIfChecked(m, l.check), {
				blocklist_enabled_check: d,
				blocklist_update_button: m,
				blocklist_url_input: p,
				dht_check: u,
				encryption_select: a,
				lpd_check: g,
				max_peers_overall_input: i,
				max_peers_per_torrent_input: o,
				pex_check: c,
				root: e
			}
		}
		static _createNetworkPage() {
			let e = document.createElement("div");
			e.classList.add("prefs-network-page");
			let t = document.createElement("div");
			t.textContent = "Listening Port", t.classList.add("section-label"), e.append(t), t = document.createElement("label"), t.textContent = "Peer listening port:", e.append(t);
			let r = document.createElement("input");
			r.type = "number", r.dataset.key = "peer-port", r.id = W(), t.setAttribute("for", r.id), e.append(r);
			let o = r,
				i = document.createElement("div");
			i.classList.add("port-status"), t = document.createElement("label"), t.textContent = "IPv4 port is", i.append(t);
			let n = document.createElement("label");
			n.textContent = "?", n.classList.add("port-status-label"), i.append(n), i.append(document.createElement("br")), t = document.createElement("label"), t.textContent = "IPv6 port is", i.append(t);
			let a = document.createElement("label");
			a.textContent = "?", a.classList.add("port-status-label"), i.append(a), e.append(i);
			let l = s._createCheckAndLabel("randomize-port", "Randomize port on launch");
			l.check.dataset.key = "peer-port-random-on-start", e.append(l.root);
			let c = l.check;
			l = s._createCheckAndLabel("port-forwarding", "Use port forwarding from my router"), l.check.dataset.key = "port-forwarding-enabled", e.append(l.root);
			let u = l.check;
			t = document.createElement("div"), t.textContent = "Options", t.classList.add("section-label"), e.append(t), l = s._createCheckAndLabel("utp-enabled", "Enable uTP for peer communication"), l.check.dataset.key = "utp-enabled", e.append(l.root);
			let g = l.check;
			t = document.createElement("div"), t.textContent = "Default Public Trackers", t.classList.add("section-label"), e.append(t);
			let d = ["Trackers to use on all public torrents.", "To add a backup URL, add it on the next line after a primary URL.", "To add a new primary URL, add it after a blank line."];
			for (let I of d) t = document.createElement("label"), t.classList.add("default-trackers-label"), t.textContent = I, t.setAttribute("for", "default-trackers"), e.append(t);
			let p = document.createElement("textarea");
			return p.dataset.key = "default-trackers", p.id = "default-trackers", e.append(p), {
				default_trackers_textarea: p,
				port_forwarding_check: u,
				port_input: o,
				port_status_label: {
					ipv4: n,
					ipv6: a
				},
				random_port_check: c,
				root: e,
				utp_check: g
			}
		}
		static _create() {
			let e = {
				network: s._createNetworkPage(),
				peers: s._createPeersPage(),
				speed: s._createSpeedPage(),
				torrents: s._createTorrentsPage()
			};
			return {
				...Ae("prefs-dialog", [
					["prefs-tab-torrent", e.torrents.root, "Torrents"],
					["prefs-tab-speed", e.speed.root, "Speed"],
					["prefs-tab-peers", e.peers.root, "Peers"],
					["prefs-tab-network", e.network.root, "Network"]
				]),
				...e
			}
		}
		constructor(e, t) {
			super(), this.closed = !1, this.session_manager = e, this.remote = t, this.update_from_session = () => this._update(), this.elements = s._create(), this.elements.peers.blocklist_update_button.addEventListener("click", i => {
				h(i.target, "Updating blocklist..."), this.remote.updateBlocklist(), this._setBlocklistButtonEnabled(!1)
			}), this.elements.torrents.register_handler_button.addEventListener("click", i => {
				s._toggleProtocolHandler(i.currentTarget)
			}), this.elements.dismiss.addEventListener("click", () => this.close()), this.outside = new K(this.elements.root), this.outside.addEventListener("click", () => this.close()), Object.seal(this);
			let r = this._onControlChanged.bind(this),
				o = i => {
					for (let n of Object.values(i))
						if (n.tagName === "INPUT") switch (n.type) {
							case "checkbox":
							case "radio":
							case "number":
							case "text":
							case "url":
								n.addEventListener("change", r);
								break;
							default:
								console.trace(`unhandled input: ${n.type}`);
								break
						} else(n.tagName === "TEXTAREA" || n.tagName === "SELECT") && n.addEventListener("change", r)
				};
			o(this.elements.network), o(this.elements.peers), o(this.elements.speed), o(this.elements.torrents), this.session_manager.addEventListener("session-change", this.update_from_session), this.update_from_session(), document.body.append(this.elements.root)
		}
		close() {
			if (!this.closed) {
				this.outside.stop(), this.session_manager.removeEventListener("session-change", this.update_from_session), this.elements.root.remove(), dispatchEvent(new Event("close"));
				for (let e of Object.keys(this)) this[e] = null;
				this.closed = !0
			}
		}
	};
	var Qe = class s extends EventTarget {
		constructor(e) {
			super(), this.options = e, this.elements = s._create(e), this.elements.dismiss.addEventListener("click", () => this._onDismiss()), this.elements.confirm.addEventListener("click", () => this._onConfirm()), document.body.append(this.elements.root), this.elements.dismiss.focus()
		}
		close() {
			if (!this.closed) {
				this.elements.root.remove(), this.dispatchEvent(new Event("close"));
				for (let e of Object.keys(this)) delete this[e];
				this.closed = !0
			}
		}
		_onDismiss() {
			this.close()
		}
		_onConfirm() {
			let {
				remote: e,
				torrents: t,
				trash: r
			} = this.options;
			t.length > 0 && e.removeTorrents(t, r), this.close()
		}
		static _create(e) {
			let {
				trash: t
			} = e, {
				heading: r,
				message: o
			} = s._createMessage(e), i = L("remove-dialog");
			return i.heading.textContent = r, i.message.textContent = o, i.confirm.textContent = t ? "Trash" : "Remove", i
		}
		static _createMessage(e) {
			let t = null,
				r = null,
				{
					torrents: o,
					trash: i
				} = e,
				[n] = o;
			return i && o.length === 1 ? (t = `Remove ${n.getName()} and delete data?`, r = "All data downloaded for this torrent will be deleted. Are you sure you want to remove it?") : i ? (t = `Remove ${o.length} transfers and delete data?`, r = "All data downloaded for these torrents will be deleted. Are you sure you want to remove them?") : o.length === 1 ? (t = `Remove ${n.getName()}?`, r = "Once removed, continuing the transfer will require the torrent file. Are you sure you want to remove it?") : (t = `Remove ${o.length} transfers?`, r = "Once removed, continuing the transfers will require the torrent files. Are you sure you want to remove them?"), {
				heading: t,
				message: r
			}
		}
	};
	var we = class s extends EventTarget {
		constructor(e, t) {
			super(), this.controller = e, this.remote = t, this.elements = {}, this.torrents = [], this.show()
		}
		show() {
			let e = this.controller.getSelectedTorrents();
			if (e.length !== 1) {
				console.trace();
				return
			}
			this.torrents = e, this.elements = s._create(), this.elements.dismiss.addEventListener("click", () => this._onDismiss()), this.elements.confirm.addEventListener("click", () => this._onConfirm()), this.elements.entry.value = e[0].getName(), document.body.append(this.elements.root), this.elements.entry.focus()
		}
		close() {
			this.elements.root.remove(), this.dispatchEvent(new Event("close")), delete this.controller, delete this.remote, delete this.elements, delete this.torrents
		}
		_onDismiss() {
			this.close()
		}
		_onConfirm() {
			let [e] = this.torrents, t = e.getName(), r = this.elements.entry.value;
			this.remote.renameTorrent([e.getId()], t, r, o => {
				o.result === "success" && e.refresh(o.arguments)
			}), this.close()
		}
		static _create() {
			let e = L("rename-dialog");
			e.root.setAttribute("aria-label", "Rename Torrent"), e.heading.textContent = "Enter new name:", e.confirm.textContent = "Rename";
			let t = document.createElement("label");
			t.setAttribute("for", "torrent-rename-name"), t.textContent = "Enter new name:", e.workarea.append(t);
			let r = document.createElement("input");
			return r.setAttribute("type", "text"), r.id = "torrent-rename-name", e.entry = r, e.workarea.append(r), e
		}
	};
	var ke = class s extends EventTarget {
		constructor(e, t) {
			super(), this.controller = e, this.remote = t, this.elements = {}, this.torrents = [], this.show()
		}
		show() {
			let e = this.controller.getSelectedTorrents();
			if (e.length === 0) {
				console.error("At least one selected torrent expected.");
				return
			}
			let [t] = e;
			this.torrents = e, this.elements = s._create(), this.elements.dismiss.addEventListener("click", () => this._onDismiss()), this.elements.confirm.addEventListener("click", () => this._onConfirm()), this.elements.entry.value = t.getLabels().join(", "), document.body.append(this.elements.root), this.elements.entry.focus()
		}
		close() {
			this.elements.root.remove(), this.dispatchEvent(new Event("close")), delete this.elements, delete this.torrents
		}
		_onDismiss() {
			this.close()
		}
		_onConfirm() {
			let {
				torrents: e
			} = this, {
				remote: t
			} = this, r = e.map(l => l.getId()), {
				elements: o
			} = this, {
				entry: i
			} = o, {
				value: n
			} = i, a = n.split(/ *, */).filter(l => l.length > 0);
			t.setLabels(r, a, l => {
				if (l.result === "success")
					for (let c of e) c.refresh({
						labels: a
					})
			}), this.close()
		}
		static _create() {
			let e = L("labels-dialog");
			e.root.setAttribute("aria-label", "Edit Labels"), e.heading.textContent = "Edit Labels:", e.confirm.textContent = "Save";
			let t = document.createElement("label");
			t.setAttribute("for", "torrent-labels"), t.textContent = "Labels:", e.workarea.append(t);
			let r = document.createElement("input");
			return r.setAttribute("type", "text"), r.id = "torrent-labels", e.entry = r, e.workarea.append(r), e
		}
	};
	var Ue = class s extends EventTarget {
		constructor(e) {
			super(), this.elements = s._create(e), this.elements.dismiss.addEventListener("click", () => this._onDismiss()), document.body.append(this.elements.root), this.elements.dismiss.focus()
		}
		close() {
			this.elements.root.remove(), this.dispatchEvent(new Event("close")), delete this.elements
		}
		_onDismiss() {
			this.close()
		}
		static _create(e) {
			let t = L("shortcuts-dialog");
			t.root.setAttribute("aria-label", "Keyboard Shortcuts");
			let r = document.createElement("table"),
				o = document.createElement("thead");
			r.append(o);
			let i = document.createElement("tr");
			o.append(i);
			let n = document.createElement("th");
			n.textContent = "Key", i.append(n), n = document.createElement("th"), n.textContent = "Action", i.append(n);
			let a = document.createElement("tbody");
			r.append(a);
			let l = {};
			for (let [c, u] of e.allShortcuts().entries()) {
				let g = c.split("+"),
					d = [g.pop(), ...g].join("+");
				l[d] = {
					name: u,
					shortcut: c
				}
			}
			for (let [, c] of Object.entries(l).sort()) {
				let {
					name: u,
					shortcut: g
				} = c;
				i = document.createElement("tr"), a.append(i);
				let d = document.createElement("td");
				d.textContent = g.replaceAll("+", " + "), i.append(d), d = document.createElement("td"), d.textContent = e.text(u), i.append(d)
			}
			return t.heading.textContent = "Transmission", t.dismiss.textContent = "Close", t.heading.textContent = "Keyboard shortcuts", t.message.append(r), t.confirm.remove(), delete t.confirm, t
		}
	};
	var Oe = class s extends EventTarget {
		constructor(e) {
			super(), this.remote = e;
			let t = () => this.remote.loadDaemonStats(o => this._update(o.arguments)),
				r = 5e3;
			this.interval = setInterval(t, r), t(), this.elements = s._create(), this.elements.dismiss.addEventListener("click", () => this._onDismiss()), document.body.append(this.elements.root), this.elements.dismiss.focus()
		}
		close() {
			if (!this.closed) {
				clearInterval(this.interval), this.elements.root.remove();
				for (let e of Object.keys(this)) delete this[e];
				this.closed = !0
			}
		}
		_onDismiss() {
			this.close()
		}
		_update(e) {
			console.log(e);
			let t = B,
				r = e["current-stats"],
				o = oe.ratio(r.uploadedBytes, r.downloadedBytes);
			h(this.elements.session.up, t.size(r.uploadedBytes)), h(this.elements.session.down, t.size(r.downloadedBytes)), h(this.elements.session.ratio, t.ratioString(o)), h(this.elements.session.time, t.timeInterval(r.secondsActive)), r = e["cumulative-stats"], o = oe.ratio(r.uploadedBytes, r.downloadedBytes), h(this.elements.total.up, t.size(r.uploadedBytes)), h(this.elements.total.down, t.size(r.downloadedBytes)), h(this.elements.total.ratio, t.ratioString(o)), h(this.elements.total.time, t.timeInterval(r.secondsActive))
		}
		static _create() {
			let e = L("statistics-dialog"),
				{
					confirm: t,
					dismiss: r,
					heading: o,
					root: i,
					workarea: n
				} = e;
			t.remove(), r.textContent = "Close", delete e.confirm;
			let a = "Statistics";
			i.setAttribute("aria-label", a), o.textContent = a;
			let l = ["Uploaded:", "Downloaded:", "Ratio:", "Running time:"],
				c = Ke("Current session", l),
				[u, g, d, p] = c.children,
				m = e.session = {};
			m.up = u, m.down = g, m.ratio = d, m.time = p, n.append(c.root), c = Ke("Total", l);
			let [I, C, y, G] = c.children, x = e.total = {};
			return x.up = I, x.down = C, x.ratio = y, x.time = G, n.append(c.root), e
		}
	};
	var Q = {
			formatDL: s => `\u25BC ${B.speedBps(s.getDownloadSpeed())}`,
			formatETA: s => {
				let e = s.getETA();
				return e < 0 || e >= 999 * 60 * 60 ? "" : `ETA: ${B.timeInterval(e,1)}`
			},
			formatLabels: (s, e) => {
				let t = s.getLabels();
				e.innerHTML = "";
				for (let r of t) {
					let o = document.createElement("span");
					o.classList.add("torrent-label"), o.textContent = r, e.append(o)
				}
			},
			formatUL: s => `\u25B2 ${B.speedBps(s.getUploadSpeed())}`,
			getProgressInfo: (s, e) => {
				let t = e.getStatus(),
					r = ["torrent-progress-bar"],
					o = null;
				if (t === f._StatusStopped && r.push("paused"), e.needsMetaData()) r.push("magnet"), o = e.getMetadataPercentComplete() * 100;
				else if (t === f._StatusCheck) r.push("verify"), o = e.getRecheckProgress() * 100;
				else if (e.getLeftUntilDone() > 0) r.push("leech"), o = e.getPercentDone() * 100;
				else {
					r.push("seed");
					let i = e.seedRatioLimit(s);
					o = i > 0 ? e.getUploadRatio() * 100 / i : 100
				}
				return e.isQueued() && r.push("queued"), {
					classList: r,
					percent: o
				}
			},
			renderProgressbar: (s, e, t) => {
				let r = Q.getProgressInfo(s, e);
				t.className = r.classList.join(" "), t.style.setProperty("--progress", `${r.percent.toFixed(2)}%`)
			}
		},
		Re = class s {
			static getPeerDetails(e) {
				let t = B,
					r = e.getErrorMessage();
				if (r) return r;
				if (e.isDownloading()) {
					let o = e.getPeersConnected(),
						i = e.getWebseedsSendingToUs();
					return i && o ? ["Downloading from", e.getPeersSendingToUs(), "of", t.countString("peer", "peers", o), "and", t.countString("web seed", "web seeds", i), "\u2013", Q.formatDL(e), Q.formatUL(e)].join(" ") : i ? ["Downloading from", t.countString("web seed", "web seeds", i), "\u2013", Q.formatDL(e), Q.formatUL(e)].join(" ") : ["Downloading from", e.getPeersSendingToUs(), "of", t.countString("peer", "peers", o), "\u2013", Q.formatDL(e), Q.formatUL(e)].join(" ")
				}
				return e.isSeeding() ? ["Seeding to", e.getPeersGettingFromUs(), "of", t.countString("peer", "peers", e.getPeersConnected()), "-", Q.formatUL(e)].join(" ") : e.isChecking() ? ["Verifying local data (", B.percentString(100 * e.getRecheckProgress()), "% tested)"].join("") : e.getStateString()
			}
			static getProgressDetails(e, t) {
				if (t.needsMetaData()) {
					let a = "retrieving";
					t.isStopped() && (a = "needs");
					let l = 100 * t.getMetadataPercentComplete();
					return [`Magnetized transfer - ${a} metadata (`, B.percentString(l), "%)"].join("")
				}
				let r = t.getSizeWhenDone(),
					o = t.getTotalSize(),
					i = t.isDone() || t.isSeeding(),
					n = [];
				if (i ? (o === r ? n.push(B.size(o)) : n.push(B.size(r), " of ", B.size(t.getTotalSize()), " (", t.getPercentDoneStr(), "%)"), n.push(", uploaded ", B.size(t.getUploadedEver()), " (Ratio ", B.ratioString(t.getUploadRatio()), ")")) : n.push(B.size(r - t.getLeftUntilDone()), " of ", B.size(r), " (", t.getPercentDoneStr(), "%)"), !t.isStopped() && (!i || t.seedRatioLimit(e) > 0)) {
					n.push(" - ");
					let a = t.getETA();
					a < 0 || a >= 999 * 60 * 60 ? n.push("remaining time unknown") : n.push(B.timeInterval(t.getETA(), 1), " remaining")
				}
				return n.join("")
			}
			render(e, t, r) {
				let o = t.isStopped(),
					i = r._name_container;
				h(i, t.getName()), i.classList.toggle("paused", o), Q.formatLabels(t, r._labels_container), i = r._progress_details_container, h(i, s.getProgressDetails(e, t)), Q.renderProgressbar(e, t, r._progressbar), r._progressbar.classList.add("full");
				let n = t.getError() !== f._ErrNone;
				i = r._peer_details_container, i.classList.toggle("error", n), h(i, s.getPeerDetails(t)), i = r._toggle_running_button, i.alt = o ? "Resume" : "Pause", i.dataset.action = o ? "resume" : "pause"
			}
			createRow(e) {
				let t = document.createElement("li");
				t.className = "torrent";
				let r = document.createElement("div");
				r.classList.add("icon"), r.dataset.iconMimeType = e.getPrimaryMimeType().split("/", 1).pop(), r.dataset.iconMultifile = e.getFileCount() > 1 ? "true" : "false";
				let o = document.createElement("div");
				o.className = "torrent-name";
				let i = document.createElement("div");
				i.className = "torrent-labels";
				let n = document.createElement("div");
				n.className = "torrent-progress-details";
				let a = document.createElement("div");
				a.classList.add("torrent-progress");
				let l = document.createElement("div");
				l.classList.add("torrent-progress-bar", "full"), a.append(l);
				let c = document.createElement("div");
				c.className = "torrent-peer-details";
				let u = document.createElement("a");
				return u.className = "torrent-pauseresume-button", a.append(u), t.append(r), t.append(o), t.append(i), t.append(n), t.append(a), t.append(c), t._icon = r, t._name_container = o, t._labels_container = i, t._progress_details_container = n, t._progressbar = l, t._peer_details_container = c, t._toggle_running_button = u, t
			}
		},
		Te = class s {
			static getPeerDetails(e) {
				let t = e.getErrorMessage();
				if (t) return t;
				if (e.isDownloading()) {
					let r = e.getDownloadSpeed() > 0,
						o = e.getUploadSpeed() > 0;
					if (!o && !r) return "Idle";
					let i = [`${Q.formatETA(e)} `];
					return r && i.push(Q.formatDL(e)), o && i.push(Q.formatUL(e)), i.join(" ")
				}
				return e.isSeeding() ? `Ratio: ${B.ratioString(e.getUploadRatio())}, ${Q.formatUL(e)}` : e.getStateString()
			}
			render(e, t, r) {
				let o = r._name_container;
				o.classList.toggle("paused", t.isStopped()), h(o, t.getName()), Q.formatLabels(t, r._labels_container), Q.renderProgressbar(e, t, r._progressbar), r._progressbar.classList.add("compact");
				let i = t.getError() !== f._ErrNone;
				o = r._details_container, o.classList.toggle("error", i), h(o, s.getPeerDetails(t))
			}
			createRow(e) {
				let t = document.createElement("div");
				t.classList.add("torrent-progress-bar", "compact");
				let r = document.createElement("div");
				r.classList.add("icon"), r.dataset.iconMimeType = e.getPrimaryMimeType().split("/", 1).pop(), r.dataset.iconMultifile = e.getFileCount() > 1 ? "true" : "false";
				let o = document.createElement("div");
				o.className = "torrent-peer-details compact";
				let i = document.createElement("div");
				i.className = "torrent-labels compact";
				let n = document.createElement("div");
				n.className = "torrent-name compact";
				let a = document.createElement("li");
				return a.append(t), a.append(o), a.append(i), a.append(n), a.append(r), a.className = "torrent compact", a._progressbar = t, a._details_container = o, a._labels_container = i, a._name_container = n, a
			}
		},
		Ve = class {
			constructor(e, t, r) {
				this._view = e, this._torrent = r, this._element = e.createRow(r);
				let o = () => this.render(t);
				this._torrent.addEventListener("dataChanged", o), o()
			}
			getElement() {
				return this._element
			}
			render(e) {
				let t = this.getTorrent();
				t && this._view.render(e, t, this.getElement())
			}
			isSelected() {
				return this.getElement().classList.contains("selected")
			}
			getTorrent() {
				return this._torrent
			}
			getTorrentId() {
				return this.getTorrent().getId()
			}
		};
	var Ye = class s extends EventTarget {
		constructor(e, t, r) {
			super(), this.action_manager = e, this.notifications = t, this.prefs = r, this.remote = new ie(this), this.addEventListener("torrent-selection-changed", n => this.action_manager.update(n)), this.filterText = "", this._torrents = {}, this._rows = [], this.dirtyTorrents = new Set, this.changeStatus = !1, this.refilterSoon = J(() => this._refilter(!1)), this.refilterAllSoon = J(() => this._refilter(!0)), this.boundPopupCloseListener = this.popupCloseListener.bind(this), this.isTouch = "ontouchstart" in window, this.busyclick = !1;
			for (let n of document.querySelectorAll("button[data-action]")) {
				let {
					action: a
				} = n.dataset;
				O(n, this.action_manager.isEnabled(a)), n.addEventListener("click", () => {
					this.action_manager.click(a)
				})
			}
			document.querySelector("#filter-tracker").addEventListener("change", n => {
				this.setFilterTracker(n.target.value === "all" ? null : n.target.value)
			}), this.action_manager.addEventListener("change", n => {
				for (let a of document.querySelectorAll(`[data-action="${n.action}"]`)) O(a, n.enabled)
			}), this.action_manager.addEventListener("click", n => {
				switch (n.action) {
					case "deselect-all":
						this._deselectAll();
						break;
					case "move-bottom":
						this._moveBottom();
						break;
					case "move-down":
						this._moveDown();
						break;
					case "move-top":
						this._moveTop();
						break;
					case "move-up":
						this._moveUp();
						break;
					case "open-torrent":
						this.setCurrentPopup(new $(this, this.remote));
						break;
					case "pause-all-torrents":
						this._stopTorrents(this._getAllTorrents());
						break;
					case "pause-selected-torrents":
						this._stopTorrents(this.getSelectedTorrents());
						break;
					case "reannounce-selected-torrents":
						this._reannounceTorrents(this.getSelectedTorrents());
						break;
					case "remove-selected-torrents":
						this._removeSelectedTorrents(!1);
						break;
					case "resume-selected-torrents":
						this._startSelectedTorrents(!1);
						break;
					case "resume-selected-torrents-now":
						this._startSelectedTorrents(!0);
						break;
					case "select-all":
						this._selectAll();
						break;
					case "show-about-dialog":
						this.setCurrentPopup(new ye(this.version_info));
						break;
					case "show-inspector":
						(!this.popup || this.popup.name !== "inspector") && this.setCurrentPopup(new Xe(this));
						break;
					case "show-move-dialog":
						this.setCurrentPopup(new Fe(this, this.remote));
						break;
					case "show-overflow-menu":
						this.popup instanceof ne ? this.setCurrentPopup(null) : this.setCurrentPopup(new ne(this, this.prefs, this.remote, this.action_manager));
						break;
					case "show-preferences-dialog":
						this.setCurrentPopup(new Le(this, this.remote));
						break;
					case "show-shortcuts-dialog":
						this.setCurrentPopup(new Ue(this.action_manager));
						break;
					case "show-statistics-dialog":
						this.setCurrentPopup(new Oe(this.remote));
						break;
					case "show-rename-dialog":
						this.setCurrentPopup(new we(this, this.remote));
						break;
					case "show-labels-dialog":
						this.setCurrentPopup(new ke(this, this.remote));
						break;
					case "start-all-torrents":
						this._startTorrents(this._getAllTorrents());
						break;
					case "toggle-compact-rows":
						this.prefs.display_mode = this.prefs.display_mode === b.DisplayCompact ? b.DisplayFull : b.DisplayCompact;
						break;
					case "trash-selected-torrents":
						this._removeSelectedTorrents(!0);
						break;
					case "verify-selected-torrents":
						this._verifyTorrents(this.getSelectedTorrents());
						break;
					default:
						console.warn(`unhandled action: ${n.action}`)
				}
			});
			let o = document.querySelector("#filter-mode");
			o.value = this.prefs.filter_mode, o.addEventListener("change", n => {
				this.prefs.filter_mode = n.target.value, this.refilterAllSoon()
			}), document.addEventListener("keydown", this._keyDown.bind(this)), document.addEventListener("keyup", this._keyUp.bind(this)), o = document.querySelector("#torrent-container"), o.addEventListener("click", n => {
				this.popup && this.popup.name !== "inspector" && this.setCurrentPopup(null), n.target === n.currentTarget && this._deselectAll()
			}), o.addEventListener("dblclick", () => {
				(!this.popup || this.popup.name !== "inspector") && this.action_manager.click("show-inspector")
			}), o.addEventListener("dragenter", s._dragenter), o.addEventListener("dragover", s._dragenter), o.addEventListener("drop", this._drop.bind(this)), this._setupSearchBox(), this.elements = {
				torrent_list: document.querySelector("#torrent-list")
			};
			let i = n => {
				if (this.isTouch && n.touches.length > 1) return;
				let a = n.target;
				for (; a && !a.classList.contains("torrent");) a = a.parentNode;
				let l = this._rows.find(m => m.getElement() === a);
				l && !l.isSelected() && this._setSelectedRow(l);
				let c = new xe(this.action_manager);
				this.setCurrentPopup(c);
				let g = document.querySelector("#torrent-container").getBoundingClientRect(),
					d = Math.min(this.isTouch ? n.touches[0].clientX : n.x, g.x + g.width - c.root.clientWidth),
					p = Math.min(this.isTouch ? n.touches[0].clientY : n.y, g.y + g.height - c.root.clientHeight);
				c.root.style.left = `${d>0?d:0}px`, c.root.style.top = `${p>0?p:0}px`, n.preventDefault()
			};
			this.isTouch ? (this.elements.torrent_list.addEventListener("touchstart", n => {
				this.busyclick ? (clearTimeout(this.busyclick), this.busyclick = !1) : this.busyclick = setTimeout(i.bind(this), 500, n)
			}), this.elements.torrent_list.addEventListener("touchend", () => {
				clearTimeout(this.busyclick), this.busyclick = !1, setTimeout(() => {
					this.popup && (this.popup.root.style.pointerEvents = "auto")
				}, 1)
			}), this.elements.torrent_list.addEventListener("touchmove", () => {
				clearTimeout(this.busyclick), this.busyclick = !1
			}), this.elements.torrent_list.addEventListener("contextmenu", n => {
				n.preventDefault()
			})) : this.elements.torrent_list.addEventListener("contextmenu", n => {
				i(n), this.popup && (this.popup.root.style.pointerEvents = "auto")
			}), this.loadDaemonPrefs(), this._initializeTorrents(), this.refreshTorrents(), this.togglePeriodicSessionRefresh(!0), this.prefs.addEventListener("change", ({
				key: n,
				value: a
			}) => this._onPrefChanged(n, a));
			for (let [n, a] of this.prefs.entries()) this._onPrefChanged(n, a)
		}
		_openTorrentFromUrl() {
			setTimeout(() => {
				let e = new URLSearchParams(window.location.search).get("addtorrent");
				if (e) {
					this.setCurrentPopup(new $(this, this.remote, e));
					let t = new URL(window.location);
					t.search = "", window.history.pushState("", "", t.toString())
				}
			}, 0)
		}
		loadDaemonPrefs() {
			this.remote.loadDaemonPrefs(e => {
				this.session_properties = e.arguments, this._openTorrentFromUrl()
			})
		}
		get session_properties() {
			return this._session_properties
		}
		set session_properties(e) {
			if (Be(this._session_properties, e)) return;
			this._session_properties = Object.seal(e);
			let t = new Event("session-change");
			t.session_properties = e, this.dispatchEvent(t), this._updateGuiFromSession(e)
		}
		_setupSearchBox() {
			let e = document.querySelector("#torrent-search"),
				t = "blur";
			e.classList.add(t), e.addEventListener("blur", () => e.classList.add(t)), e.addEventListener("focus", () => e.classList.remove(t)), e.addEventListener("keyup", () => this._setFilterText(e.value))
		}
		_onPrefChanged(e, t) {
			switch (e) {
				case b.DisplayMode: {
					this.torrentRenderer = t === "compact" ? new Te : new Re, this.refilterAllSoon();
					break
				}
				case b.ContrastMode: {
					document.body.classList.remove("contrast-more"), document.body.classList.remove("contrast-less"), document.body.classList.add(`contrast-${t}`);
					break
				}
				case b.FilterMode:
				case b.SortDirection:
				case b.SortMode:
					this.refilterAllSoon();
					break;
				case b.RefreshRate: {
					clearInterval(this.refreshTorrentsInterval);
					let r = this.refreshTorrents.bind(this),
						o = Math.max(2, this.prefs.refresh_rate_sec) * 1e3;
					this.refreshTorrentsInterval = setInterval(r, o);
					break
				}
				default:
					break
			}
		}
		_getAllTorrents() {
			return Object.values(this._torrents)
		}
		static _getTorrentIds(e) {
			return e.map(t => t.getId())
		}
		seedRatioLimit() {
			let e = this.session_properties;
			return e && e.seedRatioLimited ? e.seedRatioLimit : -1
		}
		_getSelectedRows() {
			return this._rows.filter(e => e.isSelected())
		}
		getSelectedTorrents() {
			return this._getSelectedRows().map(e => e.getTorrent())
		}
		_getSelectedTorrentIds() {
			return s._getTorrentIds(this.getSelectedTorrents())
		}
		_setSelectedRow(e) {
			let t = e ? e.getElement() : null;
			for (let r of this.elements.torrent_list.children) r.classList.toggle("selected", r === t);
			this._dispatchSelectionChanged()
		}
		_selectRow(e) {
			e.getElement().classList.add("selected"), this._dispatchSelectionChanged()
		}
		_deselectRow(e) {
			e.getElement().classList.remove("selected"), this._dispatchSelectionChanged()
		}
		_selectAll() {
			for (let e of this.elements.torrent_list.children) e.classList.add("selected");
			this._dispatchSelectionChanged()
		}
		_deselectAll() {
			for (let e of this.elements.torrent_list.children) e.classList.remove("selected");
			this._dispatchSelectionChanged(), delete this._last_torrent_clicked
		}
		_indexOfLastTorrent() {
			return this._rows.findIndex(e => e.getTorrentId() === this._last_torrent_clicked)
		}
		_selectRange(e) {
			let t = this._indexOfLastTorrent();
			if (t === -1) this._selectRow(e);
			else {
				let r = this._rows.indexOf(e),
					o = Math.min(t, r),
					i = Math.max(t, r);
				for (let n = o; n <= i; ++n) this._selectRow(this._rows[n])
			}
			this._dispatchSelectionChanged()
		}
		_dispatchSelectionChanged() {
			let e = [],
				t = [];
			for (let o of this._rows)(o.isSelected() ? t : e).push(o.getTorrent());
			let r = new Event("torrent-selection-changed");
			r.nonselected = e, r.selected = t, this.dispatchEvent(r)
		}
		static _createKeyShortcutFromKeyboardEvent(e) {
			let t = [];
			return e.ctrlKey && t.push("Control"), e.altKey && t.push("Alt"), e.metaKey && t.push("Meta"), e.shitKey && t.push("Shift"), t.push(e.key.length === 1 ? e.key.toUpperCase() : e.key), t.join("+")
		}
		_keyDown(e) {
			let {
				ctrlKey: t,
				keyCode: r,
				metaKey: o,
				shiftKey: i,
				target: n
			} = e, a = ["INPUT", "TEXTAREA"].includes(n.tagName);
			if (!a) {
				let g = s._createKeyShortcutFromKeyboardEvent(e),
					d = this.action_manager.getActionForShortcut(g);
				if (d) {
					e.preventDefault(), this.action_manager.click(d);
					return
				}
			}
			if (r === 27 && this.popup) {
				this.setCurrentPopup(null), e.preventDefault();
				return
			}
			let c = document.querySelector(".popup:not(.hidden)"),
				u = this._rows;
			if (!a && !c && !o && !t) {
				let g = r === 16,
					d = r === 38,
					p = r === 40;
				if ((d || p) && u.length > 0) {
					let m = this._indexOfLastTorrent(),
						I = this._shift_index,
						C = 0,
						y = u.length - 1,
						G = m;
					p && G + 1 <= y ? ++G : d && G - 1 >= C && --G;
					let x = u[G];
					I >= 0 ? I <= m && m < G || I >= m && m > G ? this._selectRow(x) : (I >= m && G > m || I <= m && m > G) && this._deselectRow(u[m]) : i ? this._selectRange(x) : this._setSelectedRow(x), x && (this._last_torrent_clicked = x.getTorrentId(), x.getElement().scrollIntoView(), e.preventDefault())
				} else g && (this._shift_index = this._indexOfLastTorrent())
			}
		}
		_keyUp(e) {
			e.keyCode === 16 && delete this._shift_index
		}
		static _dragenter(e) {
			if (e.dataTransfer && e.dataTransfer.types) {
				let t = new Set(["text/uri-list", "text/plain"]);
				if (e.dataTransfer.types.some(r => t.has(r)) || e.dataTransfer.types.includes("Files")) return e.stopPropagation(), e.preventDefault(), e.dataTransfer.dropEffect = "copy", !1
			} else e.dataTransfer && (e.dataTransfer.dropEffect = "none");
			return !0
		}
		static _isValidURL(e) {
			try {
				return !!new URL(e)
			} catch {
				return !1
			}
		}
		shouldAddedTorrentsStart() {
			return this.session_properties["start-added-torrents"]
		}
		_drop(e) {
			let t = !this.shouldAddedTorrentsStart();
			if (!e.dataTransfer || !e.dataTransfer.types) return !0;
			let r = e.dataTransfer.types.filter(i => ["text/uri-list", "text/plain"].includes(i)).pop();
			for (let i of e.dataTransfer.getData(r).split(`
`).map(n => n.trim()).filter(n => s._isValidURL(n))) this.remote.addTorrentByUrl(i, t);
			let {
				files: o
			} = e.dataTransfer;
			return o.length > 0 && (this.openDialog = new $(this, this.remote, "", o)), e.preventDefault(), !1
		}
		togglePeriodicSessionRefresh(e) {
			!e && this.sessionInterval && (clearInterval(this.sessionInterval), delete this.sessionInterval), e && (this.loadDaemonPrefs(), this.sessionInterval || (this.sessionInterval = setInterval(this.loadDaemonPrefs.bind(this), 8e3)))
		}
		_setFilterText(e) {
			this.filterText = e ? e.trim() : null, this.refilterAllSoon()
		}
		_onTorrentChanged(e) {
			this.changeStatus && (this._dispatchSelectionChanged(), this.changeStatus = !1);
			let t = e.currentTarget;
			this.dirtyTorrents.add(t.getId()), this.refilterSoon()
		}
		updateTorrents(e, t) {
			this.remote.updateTorrents(e, t, (r, o) => {
				let i = [],
					n = r.shift(),
					a = {};
				for (let l of r) {
					for (let [g, d] of n.entries()) a[d] = l[g];
					let {
						id: c
					} = a, u = this._torrents[c];
					if (u) {
						let g = u.needsMetaData();
						u.refresh(a), g && !u.needsMetaData() && i.push(c)
					} else u = this._torrents[c] = new f(a), u.addEventListener("dataChanged", this._onTorrentChanged.bind(this)), this.dirtyTorrents.add(c), (!("name" in u.fields) || !("status" in u.fields)) && i.push(c)
				}
				if (i.length > 0) {
					let l = ["id", ...f.Fields.Metadata, ...f.Fields.Stats];
					this.updateTorrents(i, l), this.refilterSoon()
				}
				o && (this._deleteTorrents(o), this.refilterSoon())
			})
		}
		refreshTorrents() {
			let e = ["id", ...f.Fields.Stats];
			this.updateTorrents("recently-active", e)
		}
		_initializeTorrents() {
			let e = ["id", ...f.Fields.Metadata, ...f.Fields.Stats];
			this.updateTorrents(null, e)
		}
		_onRowClicked(e) {
			let t = e.metaKey || e.ctrlKey,
				{
					row: r
				} = e.currentTarget;
			if (this.popup && this.popup.name !== "inspector" && this.setCurrentPopup(null), e.target.classList.contains("torrent-pauseresume-button")) switch (e.target.dataset.action) {
				case "pause":
					this._stopTorrents([r.getTorrent()]);
					break;
				case "resume":
					this._startTorrents([r.getTorrent()]);
					break;
				default:
					break
			}
			e.stopPropagation(), e.shiftKey ? (this._selectRange(r), window.focus()) : !r.isSelected() && t ? this._selectRow(r) : r.isSelected() ? r.isSelected() && t ? this._deselectRow(r) : r.isSelected() && this._setSelectedRow(r) : this._setSelectedRow(r), this._last_torrent_clicked = r.getTorrentId()
		}
		_deleteTorrents(e) {
			if (e && e.length > 0) {
				for (let t of e) this.dirtyTorrents.add(t), delete this._torrents[t];
				this.refilterSoon()
			}
		}
		_removeSelectedTorrents(e) {
			let t = this.getSelectedTorrents();
			t.length > 0 && this.setCurrentPopup(new Qe({
				remote: this.remote,
				torrents: t,
				trash: e
			}))
		}
		_startSelectedTorrents(e) {
			this._startTorrents(this.getSelectedTorrents(), e)
		}
		_startTorrents(e, t) {
			this.changeStatus = !0, this.remote.startTorrents(s._getTorrentIds(e), t, this.refreshTorrents, this)
		}
		_verifyTorrents(e) {
			this.remote.verifyTorrents(s._getTorrentIds(e), this.refreshTorrents, this)
		}
		_reannounceTorrents(e) {
			this.remote.reannounceTorrents(s._getTorrentIds(e), this.refreshTorrents, this)
		}
		_stopTorrents(e) {
			this.changeStatus = !0, this.remote.stopTorrents(s._getTorrentIds(e), () => {
				setTimeout(() => {
					this.refreshTorrents()
				}, 500)
			}, this)
		}
		changeFileCommand(e, t, r) {
			this.remote.changeFileCommand(e, t, r)
		}
		_moveTop() {
			this.remote.moveTorrentsToTop(this._getSelectedTorrentIds(), this.refreshTorrents, this)
		}
		_moveUp() {
			this.remote.moveTorrentsUp(this._getSelectedTorrentIds(), this.refreshTorrents, this)
		}
		_moveDown() {
			this.remote.moveTorrentsDown(this._getSelectedTorrentIds(), this.refreshTorrents, this)
		}
		_moveBottom() {
			this.remote.moveTorrentsToBottom(this._getSelectedTorrentIds(), this.refreshTorrents, this)
		}
		_updateGuiFromSession(e) {
			let [, t, r] = e.version.match(/(.*)\s\(([\da-f]+)\)/);
			this.version_info = {
				checksum: r,
				version: t
			}, document.querySelector("#toolbar-overflow").classList.toggle("alt-speed-enabled", e[X._TurtleState])
		}
		_updateStatusbar() {
			let e = B,
				t = this._getAllTorrents(),
				r = t.reduce((n, a) => n + a.getUploadSpeed(), 0),
				o = t.reduce((n, a) => n + a.getDownloadSpeed(), 0),
				i = e.countString("Transfer", "Transfers", this._rows.length);
			h(document.querySelector("#speed-up-label"), e.speedBps(r)), h(document.querySelector("#speed-dn-label"), e.speedBps(o)), h(document.querySelector("#filter-count"), i)
		}
		static _displayName(e) {
			let t = e;
			return t.length > 0 && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
		}
		_updateFilterSelect() {
			let e = this._getTrackerCounts(),
				t = Object.keys(e).sort(),
				r = "";
			r += this.filterTracker ? '<option value="all">All</option>' : '<option value="all" selected="selected">All</option>';
			for (let o of t) r += `<option value="${o}"`, o === this.filterTracker && (r += ' selected="selected"'), r += `>${s._displayName(o)}</option>`;
			(!this.filterTrackersStr || this.filterTrackersStr !== r) && (this.filterTrackersStr = r, document.querySelector("#filter-tracker").innerHTML = r)
		}
		sortRows(e) {
			let t = e.map(o => o.getTorrent()),
				r = e.reduce((o, i) => (o[i.getTorrent().getId()] = i, o), {});
			f.sortTorrents(t, this.prefs.sort_mode, this.prefs.sort_direction);
			for (let [o, i] of t.entries()) e[o] = r[i.getId()]
		}
		_refilter(e) {
			let {
				sort_mode: t,
				sort_direction: r,
				filter_mode: o
			} = this.prefs, i = this.filterTracker, n = this.torrentRenderer, a = this.elements.torrent_list, l = null, c = null, u = /^labels:([\w,-\s]*)(.*)$/.exec(this.filterText);
			u ? (l = u[2].trim(), c = u[1].split(",")) : (l = this.filterText, c = []);
			let g = () => [...a.children].length,
				d = () => [...a.children].reduce((F, w) => F + w.classList.contains("selected") ? 1 : 0, 0),
				p = g(),
				m = d();
			if (this._updateFilterSelect(), clearTimeout(this.refilterTimer), delete this.refilterTimer, e) {
				for (; a.firstChild;) a.firstChild.remove();
				this._rows = [], this.dirtyTorrents = new Set(Object.keys(this._torrents))
			}
			let I = [],
				C = [];
			for (let F of this._rows) this.dirtyTorrents.has(F.getTorrentId()) ? C.push(F) : I.push(F);
			for (let F of C) F.getElement().remove();
			let y = [];
			for (let F of C) {
				let w = F.getTorrentId(),
					U = this._torrents[w];
				U && U.test(o, i, l, c) && y.push(F), this.dirtyTorrents.delete(w)
			}
			C = y;
			for (let F of this.dirtyTorrents.values()) {
				let w = this._torrents[F];
				if (w && w.test(o, i, l, c)) {
					let U = new Ve(n, this, w),
						qe = U.getElement();
					qe.row = U, C.push(U), qe.addEventListener("click", this._onRowClicked.bind(this))
				}
			}
			this.sortRows(C);
			let G = [],
				x = I.length,
				A = C.length,
				v = document.createDocumentFragment(),
				k = 0,
				ae = 0;
			for (; k !== x || ae !== A;) {
				let F = null;
				if (k === x ? F = !1 : ae === A ? F = !0 : F = f.compareTorrents(I[k].getTorrent(), C[ae].getTorrent(), t, r) < 0, F) G.push(I[k++]);
				else {
					let w = C[ae++],
						U = w.getElement();
					k === x ? v.append(U) : a.insertBefore(U, I[k].getElement()), G.push(w)
				}
			}
			a.append(v), this._rows = G, this.dirtyTorrents.clear();
			for (let [F, w] of G.map(U => U.getElement()).entries()) {
				let U = F % 2 === 0;
				w.classList.toggle("even", U), w.classList.toggle("odd", !U)
			}
			this._updateStatusbar(), (m !== d() || p !== g()) && this._dispatchSelectionChanged()
		}
		setFilterTracker(e) {
			let t = document.querySelector("#filter-tracker");
			t.value = e, this.filterTracker = e, this.refilterAllSoon()
		}
		_getTrackerCounts() {
			let e = {};
			for (let t of this._getAllTorrents())
				for (let r of t.getTrackers()) {
					let {
						sitename: o
					} = r;
					e[o] = (e[o] || 0) + 1
				}
			return e
		}
		popupCloseListener(e) {
			if (e.target !== this.popup) throw new Error(e);
			this.popup.removeEventListener("close", this.boundPopupCloseListener), delete this.popup
		}
		setCurrentPopup(e) {
			this.popup && this.popup.close(), this.popup = e, this.popup && this.popup.addEventListener("close", this.boundPopupCloseListener)
		}
	};

	function Qs() {
		let s = new ce,
			e = new b,
			t = new ve(e),
			r = new Ye(s, t, e),
			o = J(() => r.elements.torrent_list.scrollTo(0, 1));
		window.addEventListener("load", o), window.addEventListener("orientationchange", o)
	}
	document.addEventListener("DOMContentLoaded", Qs);
})();
//# sourceMappingURL=transmission-app.js.map