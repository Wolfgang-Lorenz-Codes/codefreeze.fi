var I, d, a_, x, __, p_, q, K, O, j, S = {}, h_ = [], $_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Q = Array.isArray;
function H(e, _) {
  for (var t in _) e[t] = _[t];
  return e;
}
function d_(e) {
  var _ = e.parentNode;
  _ && _.removeChild(e);
}
function H_(e, _, t) {
  var n, r, i, f = {};
  for (i in _) i == "key" ? n = _[i] : i == "ref" ? r = _[i] : f[i] = _[i];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? I.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) f[i] === void 0 && (f[i] = e.defaultProps[i]);
  return F(e, f, n, r, null);
}
function F(e, _, t, n, r) {
  var i = { type: e, props: _, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: r ?? ++a_, __i: -1, __u: 0 };
  return r == null && d.vnode != null && d.vnode(i), i;
}
function V(e) {
  return e.children;
}
function M(e, _) {
  this.props = e, this.context = _;
}
function P(e, _) {
  if (_ == null) return e.__ ? P(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++) if ((t = e.__k[_]) != null && t.__e != null) return t.__e;
  return typeof e.type == "function" ? P(e) : null;
}
function v_(e) {
  var _, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++) if ((t = e.__k[_]) != null && t.__e != null) {
      e.__e = e.__c.base = t.__e;
      break;
    }
    return v_(e);
  }
}
function e_(e) {
  (!e.__d && (e.__d = !0) && x.push(e) && !A.__r++ || __ !== d.debounceRendering) && ((__ = d.debounceRendering) || p_)(A);
}
function A() {
  var e, _, t, n, r, i, f, u;
  for (x.sort(q); e = x.shift(); ) e.__d && (_ = x.length, n = void 0, i = (r = (t = e).__v).__e, f = [], u = [], t.__P && ((n = H({}, r)).__v = r.__v + 1, d.vnode && d.vnode(n), X(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [i] : null, f, i ?? P(r), !!(32 & r.__u), u), n.__v = r.__v, n.__.__k[n.__i] = n, g_(f, n, u), n.__e != i && v_(n)), x.length > _ && x.sort(q));
  A.__r = 0;
}
function y_(e, _, t, n, r, i, f, u, c, l, a) {
  var o, p, s, m, w, g = n && n.__k || h_, h = _.length;
  for (t.__d = c, x_(t, _, g), c = t.__d, o = 0; o < h; o++) (s = t.__k[o]) != null && typeof s != "boolean" && typeof s != "function" && (p = s.__i === -1 ? S : g[s.__i] || S, s.__i = o, X(e, s, p, r, i, f, u, c, l, a), m = s.__e, s.ref && p.ref != s.ref && (p.ref && Y(p.ref, null, s), a.push(s.ref, s.__c || m, s)), w == null && m != null && (w = m), 65536 & s.__u || p.__k === s.__k ? (c && !c.isConnected && (c = P(p)), c = m_(s, c, e)) : typeof s.type == "function" && s.__d !== void 0 ? c = s.__d : m && (c = m.nextSibling), s.__d = void 0, s.__u &= -196609);
  t.__d = c, t.__e = w;
}
function x_(e, _, t) {
  var n, r, i, f, u, c = _.length, l = t.length, a = l, o = 0;
  for (e.__k = [], n = 0; n < c; n++) f = n + o, (r = e.__k[n] = (r = _[n]) == null || typeof r == "boolean" || typeof r == "function" ? null : typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? F(null, r, null, null, null) : Q(r) ? F(V, { children: r }, null, null, null) : r.constructor === void 0 && r.__b > 0 ? F(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r) != null ? (r.__ = e, r.__b = e.__b + 1, u = P_(r, t, f, a), r.__i = u, i = null, u !== -1 && (a--, (i = t[u]) && (i.__u |= 131072)), i == null || i.__v === null ? (u == -1 && o--, typeof r.type != "function" && (r.__u |= 65536)) : u !== f && (u === f + 1 ? o++ : u > f ? a > c - f ? o += u - f : o-- : u < f ? u == f - 1 && (o = u - f) : o = 0, u !== n + o && (r.__u |= 65536))) : (i = t[f]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = P(i)), z(i, i, !1), t[f] = null, a--);
  if (a) for (n = 0; n < l; n++) (i = t[n]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = P(i)), z(i, i));
}
function m_(e, _, t) {
  var n, r;
  if (typeof e.type == "function") {
    for (n = e.__k, r = 0; n && r < n.length; r++) n[r] && (n[r].__ = e, _ = m_(n[r], _, t));
    return _;
  }
  e.__e != _ && (t.insertBefore(e.__e, _ || null), _ = e.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType === 8);
  return _;
}
function P_(e, _, t, n) {
  var r = e.key, i = e.type, f = t - 1, u = t + 1, c = _[t];
  if (c === null || c && r == c.key && i === c.type && !(131072 & c.__u)) return t;
  if (n > (c != null && !(131072 & c.__u) ? 1 : 0)) for (; f >= 0 || u < _.length; ) {
    if (f >= 0) {
      if ((c = _[f]) && !(131072 & c.__u) && r == c.key && i === c.type) return f;
      f--;
    }
    if (u < _.length) {
      if ((c = _[u]) && !(131072 & c.__u) && r == c.key && i === c.type) return u;
      u++;
    }
  }
  return -1;
}
function t_(e, _, t) {
  _[0] === "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || $_.test(_) ? t : t + "px";
}
function T(e, _, t, n, r) {
  var i;
  _: if (_ === "style") if (typeof t == "string") e.style.cssText = t;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (_ in n) t && _ in t || t_(e.style, _, "");
    if (t) for (_ in t) n && t[_] === n[_] || t_(e.style, _, t[_]);
  }
  else if (_[0] === "o" && _[1] === "n") i = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1")), _ = _.toLowerCase() in e || _ === "onFocusOut" || _ === "onFocusIn" ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + i] = t, t ? n ? t.u = n.u : (t.u = K, e.addEventListener(_, i ? j : O, i)) : e.removeEventListener(_, i ? j : O, i);
  else {
    if (r == "http://www.w3.org/2000/svg") _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (_ != "width" && _ != "height" && _ != "href" && _ != "list" && _ != "form" && _ != "tabIndex" && _ != "download" && _ != "rowSpan" && _ != "colSpan" && _ != "role" && _ in e) try {
      e[_] = t ?? "";
      break _;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && _[4] !== "-" ? e.removeAttribute(_) : e.setAttribute(_, t));
  }
}
function n_(e) {
  return function(_) {
    if (this.l) {
      var t = this.l[_.type + e];
      if (_.t == null) _.t = K++;
      else if (_.t < t.u) return;
      return t(d.event ? d.event(_) : _);
    }
  };
}
function X(e, _, t, n, r, i, f, u, c, l) {
  var a, o, p, s, m, w, g, h, k, $, N, C, Z, E, B, b = _.type;
  if (_.constructor !== void 0) return null;
  128 & t.__u && (c = !!(32 & t.__u), i = [u = _.__e = t.__e]), (a = d.__b) && a(_);
  _: if (typeof b == "function") try {
    if (h = _.props, k = (a = b.contextType) && n[a.__c], $ = a ? k ? k.props.value : a.__ : n, t.__c ? g = (o = _.__c = t.__c).__ = o.__E : ("prototype" in b && b.prototype.render ? _.__c = o = new b(h, $) : (_.__c = o = new M(h, $), o.constructor = b, o.render = S_), k && k.sub(o), o.props = h, o.state || (o.state = {}), o.context = $, o.__n = n, p = o.__d = !0, o.__h = [], o._sb = []), o.__s == null && (o.__s = o.state), b.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = H({}, o.__s)), H(o.__s, b.getDerivedStateFromProps(h, o.__s))), s = o.props, m = o.state, o.__v = _, p) b.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), o.componentDidMount != null && o.__h.push(o.componentDidMount);
    else {
      if (b.getDerivedStateFromProps == null && h !== s && o.componentWillReceiveProps != null && o.componentWillReceiveProps(h, $), !o.__e && (o.shouldComponentUpdate != null && o.shouldComponentUpdate(h, o.__s, $) === !1 || _.__v === t.__v)) {
        for (_.__v !== t.__v && (o.props = h, o.state = o.__s, o.__d = !1), _.__e = t.__e, _.__k = t.__k, _.__k.forEach(function(U) {
          U && (U.__ = _);
        }), N = 0; N < o._sb.length; N++) o.__h.push(o._sb[N]);
        o._sb = [], o.__h.length && f.push(o);
        break _;
      }
      o.componentWillUpdate != null && o.componentWillUpdate(h, o.__s, $), o.componentDidUpdate != null && o.__h.push(function() {
        o.componentDidUpdate(s, m, w);
      });
    }
    if (o.context = $, o.props = h, o.__P = e, o.__e = !1, C = d.__r, Z = 0, "prototype" in b && b.prototype.render) {
      for (o.state = o.__s, o.__d = !1, C && C(_), a = o.render(o.props, o.state, o.context), E = 0; E < o._sb.length; E++) o.__h.push(o._sb[E]);
      o._sb = [];
    } else do
      o.__d = !1, C && C(_), a = o.render(o.props, o.state, o.context), o.state = o.__s;
    while (o.__d && ++Z < 25);
    o.state = o.__s, o.getChildContext != null && (n = H(H({}, n), o.getChildContext())), p || o.getSnapshotBeforeUpdate == null || (w = o.getSnapshotBeforeUpdate(s, m)), y_(e, Q(B = a != null && a.type === V && a.key == null ? a.props.children : a) ? B : [B], _, t, n, r, i, f, u, c, l), o.base = _.__e, _.__u &= -161, o.__h.length && f.push(o), g && (o.__E = o.__ = null);
  } catch (U) {
    _.__v = null, c || i != null ? (_.__e = u, _.__u |= c ? 160 : 32, i[i.indexOf(u)] = null) : (_.__e = t.__e, _.__k = t.__k), d.__e(U, _, t);
  }
  else i == null && _.__v === t.__v ? (_.__k = t.__k, _.__e = t.__e) : _.__e = C_(t.__e, _, t, n, r, i, f, c, l);
  (a = d.diffed) && a(_);
}
function g_(e, _, t) {
  _.__d = void 0;
  for (var n = 0; n < t.length; n++) Y(t[n], t[++n], t[++n]);
  d.__c && d.__c(_, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(i) {
        i.call(r);
      });
    } catch (i) {
      d.__e(i, r.__v);
    }
  });
}
function C_(e, _, t, n, r, i, f, u, c) {
  var l, a, o, p, s, m, w, g = t.props, h = _.props, k = _.type;
  if (k === "svg" ? r = "http://www.w3.org/2000/svg" : k === "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), i != null) {
    for (l = 0; l < i.length; l++) if ((s = i[l]) && "setAttribute" in s == !!k && (k ? s.localName === k : s.nodeType === 3)) {
      e = s, i[l] = null;
      break;
    }
  }
  if (e == null) {
    if (k === null) return document.createTextNode(h);
    e = document.createElementNS(r, k, h.is && h), i = null, u = !1;
  }
  if (k === null) g === h || u && e.data === h || (e.data = h);
  else {
    if (i = i && I.call(e.childNodes), g = t.props || S, !u && i != null) for (g = {}, l = 0; l < e.attributes.length; l++) g[(s = e.attributes[l]).name] = s.value;
    for (l in g) if (s = g[l], l != "children") {
      if (l == "dangerouslySetInnerHTML") o = s;
      else if (l !== "key" && !(l in h)) {
        if (l == "value" && "defaultValue" in h || l == "checked" && "defaultChecked" in h) continue;
        T(e, l, null, s, r);
      }
    }
    for (l in h) s = h[l], l == "children" ? p = s : l == "dangerouslySetInnerHTML" ? a = s : l == "value" ? m = s : l == "checked" ? w = s : l === "key" || u && typeof s != "function" || g[l] === s || T(e, l, s, g[l], r);
    if (a) u || o && (a.__html === o.__html || a.__html === e.innerHTML) || (e.innerHTML = a.__html), _.__k = [];
    else if (o && (e.innerHTML = ""), y_(e, Q(p) ? p : [p], _, t, n, k === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, i, f, i ? i[0] : t.__k && P(t, 0), u, c), i != null) for (l = i.length; l--; ) i[l] != null && d_(i[l]);
    u || (l = "value", m !== void 0 && (m !== e[l] || k === "progress" && !m || k === "option" && m !== g[l]) && T(e, l, m, g[l], r), l = "checked", w !== void 0 && w !== e[l] && T(e, l, w, g[l], r));
  }
  return e;
}
function Y(e, _, t) {
  try {
    typeof e == "function" ? e(_) : e.current = _;
  } catch (n) {
    d.__e(n, t);
  }
}
function z(e, _, t) {
  var n, r;
  if (d.unmount && d.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || Y(n, null, _)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      d.__e(i, _);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (r = 0; r < n.length; r++) n[r] && z(n[r], _, t || typeof e.type != "function");
  t || e.__e == null || d_(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function S_(e, _, t) {
  return this.constructor(e, t);
}
function M_(e, _, t) {
  var n, r, i, f;
  d.__ && d.__(e, _), r = (n = typeof t == "function") ? null : _.__k, i = [], f = [], X(_, e = (!n && t || _).__k = H_(V, null, [e]), r || S, S, _.namespaceURI, !n && t ? [t] : r ? null : _.firstChild ? I.call(_.childNodes) : null, i, !n && t ? t : r ? r.__e : _.firstChild, n, f), g_(i, e, f);
}
I = h_.slice, d = { __e: function(e, _, t, n) {
  for (var r, i, f; _ = _.__; ) if ((r = _.__c) && !r.__) try {
    if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(e)), f = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, n || {}), f = r.__d), f) return r.__E = r;
  } catch (u) {
    e = u;
  }
  throw e;
} }, a_ = 0, M.prototype.setState = function(e, _) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = H({}, this.state), typeof e == "function" && (e = e(H({}, t), this.props)), e && H(t, e), e != null && this.__v && (_ && this._sb.push(_), e_(this));
}, M.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), e_(this));
}, M.prototype.render = V, x = [], p_ = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, q = function(e, _) {
  return e.__v.__b - _.__v.__b;
}, A.__r = 0, K = 0, O = n_(!1), j = n_(!0);
var N_ = 0;
function D_(e, _, t, n, r, i) {
  _ || (_ = {});
  var f, u, c = _;
  if ("ref" in c) for (u in c = {}, _) u == "ref" ? f = _[u] : c[u] = _[u];
  var l = { type: e, props: c, key: t, ref: f, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --N_, __i: -1, __u: 0, __source: r, __self: i };
  if (typeof e == "function" && (f = e.defaultProps)) for (u in f) c[u] === void 0 && (c[u] = f[u]);
  return d.vnode && d.vnode(l), l;
}
var W, v, R, o_, G = 0, k_ = [], D = [], y = d, r_ = y.__b, i_ = y.__r, l_ = y.diffed, u_ = y.__c, f_ = y.unmount, c_ = y.__;
function b_(e, _) {
  y.__h && y.__h(v, e, G || _), G = 0;
  var t = v.__H || (v.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({ __V: D }), t.__[e];
}
function L_(e) {
  return G = 1, E_(w_, e);
}
function E_(e, _, t) {
  var n = b_(W++, 2);
  if (n.t = e, !n.__c && (n.__ = [w_(void 0, _), function(u) {
    var c = n.__N ? n.__N[0] : n.__[0], l = n.t(c, u);
    c !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = v, !v.u)) {
    var r = function(u, c, l) {
      if (!n.__c.__H) return !0;
      var a = n.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (a.every(function(p) {
        return !p.__N;
      })) return !i || i.call(this, u, c, l);
      var o = !1;
      return a.forEach(function(p) {
        if (p.__N) {
          var s = p.__[0];
          p.__ = p.__N, p.__N = void 0, s !== p.__[0] && (o = !0);
        }
      }), !(!o && n.__c.props === u) && (!i || i.call(this, u, c, l));
    };
    v.u = !0;
    var i = v.shouldComponentUpdate, f = v.componentWillUpdate;
    v.componentWillUpdate = function(u, c, l) {
      if (this.__e) {
        var a = i;
        i = void 0, r(u, c, l), i = a;
      }
      f && f.call(this, u, c, l);
    }, v.shouldComponentUpdate = r;
  }
  return n.__N || n.__;
}
function A_(e, _) {
  var t = b_(W++, 3);
  !y.__s && F_(t.__H, _) && (t.__ = e, t.i = _, v.__H.__h.push(t));
}
function U_() {
  for (var e; e = k_.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(L), e.__H.__h.forEach(J), e.__H.__h = [];
  } catch (_) {
    e.__H.__h = [], y.__e(_, e.__v);
  }
}
y.__b = function(e) {
  v = null, r_ && r_(e);
}, y.__ = function(e, _) {
  e && _.__k && _.__k.__m && (e.__m = _.__k.__m), c_ && c_(e, _);
}, y.__r = function(e) {
  i_ && i_(e), W = 0;
  var _ = (v = e.__c).__H;
  _ && (R === v ? (_.__h = [], v.__h = [], _.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = D, t.__N = t.i = void 0;
  })) : (_.__h.forEach(L), _.__h.forEach(J), _.__h = [], W = 0)), R = v;
}, y.diffed = function(e) {
  l_ && l_(e);
  var _ = e.__c;
  _ && _.__H && (_.__H.__h.length && (k_.push(_) !== 1 && o_ === y.requestAnimationFrame || ((o_ = y.requestAnimationFrame) || T_)(U_)), _.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== D && (t.__ = t.__V), t.i = void 0, t.__V = D;
  })), R = v = null;
}, y.__c = function(e, _) {
  _.some(function(t) {
    try {
      t.__h.forEach(L), t.__h = t.__h.filter(function(n) {
        return !n.__ || J(n);
      });
    } catch (n) {
      _.some(function(r) {
        r.__h && (r.__h = []);
      }), _ = [], y.__e(n, t.__v);
    }
  }), u_ && u_(e, _);
}, y.unmount = function(e) {
  f_ && f_(e);
  var _, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      L(n);
    } catch (r) {
      _ = r;
    }
  }), t.__H = void 0, _ && y.__e(_, t.__v));
};
var s_ = typeof requestAnimationFrame == "function";
function T_(e) {
  var _, t = function() {
    clearTimeout(n), s_ && cancelAnimationFrame(_), setTimeout(e);
  }, n = setTimeout(t, 100);
  s_ && (_ = requestAnimationFrame(t));
}
function L(e) {
  var _ = v, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), v = _;
}
function J(e) {
  var _ = v;
  e.__c = e.__(), v = _;
}
function F_(e, _) {
  return !e || e.length !== _.length || _.some(function(t, n) {
    return t !== e[n];
  });
}
function w_(e, _) {
  return typeof _ == "function" ? _(e) : _;
}
export {
  M_ as B,
  A_ as _,
  V as k,
  L_ as p,
  D_ as u
};
