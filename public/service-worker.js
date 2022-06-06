/*! For license information please see service-worker.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      923: function () {
        try {
          self["workbox:core:6.5.2"] && _();
        } catch (e) {}
      },
      190: function () {
        try {
          self["workbox:expiration:6.5.2"] && _();
        } catch (e) {}
      },
      437: function () {
        try {
          self["workbox:precaching:6.5.2"] && _();
        } catch (e) {}
      },
      185: function () {
        try {
          self["workbox:routing:6.5.2"] && _();
        } catch (e) {}
      },
      833: function () {
        try {
          self["workbox:strategies:6.5.2"] && _();
        } catch (e) {}
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  !(function () {
    r(923);
    var e = null;
    function t(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function n(e, r, n) {
      return (
        r && t(e.prototype, r),
        n && t(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
      return (
        (i = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        i(e, t)
      );
    }
    function s(e, t) {
      if ("function" !== typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && i(e, t);
    }
    function c(e) {
      return (
        (c = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        c(e)
      );
    }
    function o() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" === typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function u(e) {
      return (
        (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        u(e)
      );
    }
    function h(e, t) {
      if (t && ("object" === u(t) || "function" === typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      })(e);
    }
    function f(e) {
      var t = o();
      return function () {
        var r,
          n = c(e);
        if (t) {
          var a = c(this).constructor;
          r = Reflect.construct(n, arguments, a);
        } else r = n.apply(this, arguments);
        return h(this, r);
      };
    }
    function l(e, t, r) {
      return (
        (l = o()
          ? Reflect.construct.bind()
          : function (e, t, r) {
              var n = [null];
              n.push.apply(n, t);
              var a = new (Function.bind.apply(e, n))();
              return r && i(a, r.prototype), a;
            }),
        l.apply(null, arguments)
      );
    }
    function p(e) {
      var t = "function" === typeof Map ? new Map() : void 0;
      return (
        (p = function (e) {
          if (
            null === e ||
            ((r = e), -1 === Function.toString.call(r).indexOf("[native code]"))
          )
            return e;
          var r;
          if ("function" !== typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n);
          }
          function n() {
            return l(e, arguments, c(this).constructor);
          }
          return (
            (n.prototype = Object.create(e.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            i(n, e)
          );
        }),
        p(e)
      );
    }
    var v = function (e) {
        for (
          var t = e,
            r = arguments.length,
            n = new Array(r > 1 ? r - 1 : 0),
            a = 1;
          a < r;
          a++
        )
          n[a - 1] = arguments[a];
        return n.length > 0 && (t += " :: ".concat(JSON.stringify(n))), t;
      },
      d = (function (e) {
        s(r, e);
        var t = f(r);
        function r(e, n) {
          var i;
          a(this, r);
          var s = v(e, n);
          return ((i = t.call(this, s)).name = e), (i.details = n), i;
        }
        return n(r);
      })(p(Error)),
      y = new Set();
    function b(e) {
      y.add(e);
    }
    var g,
      m = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: "undefined" !== typeof registration ? registration.scope : "",
      },
      x = function (e) {
        return [m.prefix, e, m.suffix]
          .filter(function (e) {
            return e && e.length > 0;
          })
          .join("-");
      },
      w = function (e) {
        return e || x(m.precache);
      },
      k = function (e) {
        return e || x(m.runtime);
      };
    function _() {
      _ = function () {
        return e;
      };
      var e = {},
        t = Object.prototype,
        r = t.hasOwnProperty,
        n = "function" == typeof Symbol ? Symbol : {},
        a = n.iterator || "@@iterator",
        i = n.asyncIterator || "@@asyncIterator",
        s = n.toStringTag || "@@toStringTag";
      function c(e, t, r) {
        return (
          Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        c({}, "");
      } catch (O) {
        c = function (e, t, r) {
          return (e[t] = r);
        };
      }
      function o(e, t, r, n) {
        var a = t && t.prototype instanceof l ? t : l,
          i = Object.create(a.prototype),
          s = new E(n || []);
        return (
          (i._invoke = (function (e, t, r) {
            var n = "suspendedStart";
            return function (a, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === a) throw i;
                return C();
              }
              for (r.method = a, r.arg = i; ; ) {
                var s = r.delegate;
                if (s) {
                  var c = w(s, r);
                  if (c) {
                    if (c === f) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var o = h(e, t, r);
                if ("normal" === o.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), o.arg === f)
                  )
                    continue;
                  return { value: o.arg, done: r.done };
                }
                "throw" === o.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = o.arg));
              }
            };
          })(e, r, s)),
          i
        );
      }
      function h(e, t, r) {
        try {
          return { type: "normal", arg: e.call(t, r) };
        } catch (O) {
          return { type: "throw", arg: O };
        }
      }
      e.wrap = o;
      var f = {};
      function l() {}
      function p() {}
      function v() {}
      var d = {};
      c(d, a, function () {
        return this;
      });
      var y = Object.getPrototypeOf,
        b = y && y(y(L([])));
      b && b !== t && r.call(b, a) && (d = b);
      var g = (v.prototype = l.prototype = Object.create(d));
      function m(e) {
        ["next", "throw", "return"].forEach(function (t) {
          c(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function x(e, t) {
        function n(a, i, s, c) {
          var o = h(e[a], e, i);
          if ("throw" !== o.type) {
            var f = o.arg,
              l = f.value;
            return l && "object" == u(l) && r.call(l, "__await")
              ? t.resolve(l.__await).then(
                  function (e) {
                    n("next", e, s, c);
                  },
                  function (e) {
                    n("throw", e, s, c);
                  }
                )
              : t.resolve(l).then(
                  function (e) {
                    (f.value = e), s(f);
                  },
                  function (e) {
                    return n("throw", e, s, c);
                  }
                );
          }
          c(o.arg);
        }
        var a;
        this._invoke = function (e, r) {
          function i() {
            return new t(function (t, a) {
              n(e, r, t, a);
            });
          }
          return (a = a ? a.then(i, i) : i());
        };
      }
      function w(e, t) {
        var r = e.iterator[t.method];
        if (void 0 === r) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              w(e, t),
              "throw" === t.method)
            )
              return f;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return f;
        }
        var n = h(r, e.iterator, t.arg);
        if ("throw" === n.type)
          return (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), f;
        var a = n.arg;
        return a
          ? a.done
            ? ((t[e.resultName] = a.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              f)
            : a
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            f);
      }
      function k(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function R(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function E(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(k, this),
          this.reset(!0);
      }
      function L(e) {
        if (e) {
          var t = e[a];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var n = -1,
              i = function t() {
                for (; ++n < e.length; )
                  if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (i.next = i);
          }
        }
        return { next: C };
      }
      function C() {
        return { value: void 0, done: !0 };
      }
      return (
        (p.prototype = v),
        c(g, "constructor", v),
        c(v, "constructor", p),
        (p.displayName = c(v, s, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === p || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, v)
              : ((e.__proto__ = v), c(e, s, "GeneratorFunction")),
            (e.prototype = Object.create(g)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        m(x.prototype),
        c(x.prototype, i, function () {
          return this;
        }),
        (e.AsyncIterator = x),
        (e.async = function (t, r, n, a, i) {
          void 0 === i && (i = Promise);
          var s = new x(o(t, r, n, a), i);
          return e.isGeneratorFunction(r)
            ? s
            : s.next().then(function (e) {
                return e.done ? e.value : s.next();
              });
        }),
        m(g),
        c(g, s, "Generator"),
        c(g, a, function () {
          return this;
        }),
        c(g, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = [];
          for (var r in e) t.push(r);
          return (
            t.reverse(),
            function r() {
              for (; t.length; ) {
                var n = t.pop();
                if (n in e) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (e.values = L),
        (E.prototype = {
          constructor: E,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(R),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  r.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function n(r, n) {
              return (
                (s.type = "throw"),
                (s.arg = e),
                (t.next = r),
                n && ((t.method = "next"), (t.arg = void 0)),
                !!n
              );
            }
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var i = this.tryEntries[a],
                s = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var c = r.call(i, "catchLoc"),
                  o = r.call(i, "finallyLoc");
                if (c && o) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!o)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var a = this.tryEntries[n];
              if (
                a.tryLoc <= this.prev &&
                r.call(a, "finallyLoc") &&
                this.prev < a.finallyLoc
              ) {
                var i = a;
                break;
              }
            }
            i &&
              ("break" === e || "continue" === e) &&
              i.tryLoc <= t &&
              t <= i.finallyLoc &&
              (i = null);
            var s = i ? i.completion : {};
            return (
              (s.type = e),
              (s.arg = t),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), f)
                : this.complete(s)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              f
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e)
                return this.complete(r.completion, r.afterLoc), R(r), f;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.tryLoc === e) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var a = n.arg;
                  R(r);
                }
                return a;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, r) {
            return (
              (this.delegate = { iterator: L(e), resultName: t, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              f
            );
          },
        }),
        e
      );
    }
    function R(e, t, r, n, a, i, s) {
      try {
        var c = e[i](s),
          o = c.value;
      } catch (u) {
        return void r(u);
      }
      c.done ? t(o) : Promise.resolve(o).then(n, a);
    }
    function E(e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (n, a) {
          var i = e.apply(t, r);
          function s(e) {
            R(i, n, a, s, c, "next", e);
          }
          function c(e) {
            R(i, n, a, s, c, "throw", e);
          }
          s(void 0);
        });
      };
    }
    function L(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function C(e, t) {
      if (e) {
        if ("string" === typeof e) return L(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === r && e.constructor && (r = e.constructor.name),
          "Map" === r || "Set" === r
            ? Array.from(e)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? L(e, t)
            : void 0
        );
      }
    }
    function O(e, t) {
      var r =
        ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
        e["@@iterator"];
      if (!r) {
        if (
          Array.isArray(e) ||
          (r = C(e)) ||
          (t && e && "number" === typeof e.length)
        ) {
          r && (e = r);
          var n = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
            },
            e: function (e) {
              throw e;
            },
            f: a,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var i,
        s = !0,
        c = !1;
      return {
        s: function () {
          r = r.call(e);
        },
        n: function () {
          var e = r.next();
          return (s = e.done), e;
        },
        e: function (e) {
          (c = !0), (i = e);
        },
        f: function () {
          try {
            s || null == r.return || r.return();
          } finally {
            if (c) throw i;
          }
        },
      };
    }
    function T(e, t) {
      var r,
        n = new URL(e),
        a = O(t);
      try {
        for (a.s(); !(r = a.n()).done; ) {
          var i = r.value;
          n.searchParams.delete(i);
        }
      } catch (s) {
        a.e(s);
      } finally {
        a.f();
      }
      return n.href;
    }
    function S(e, t, r, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (D = E(
        _().mark(function e(t, r, n, a) {
          var i, s, c, o, u, h, f;
          return _().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((i = T(r.url, n)), r.url !== i)) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return", t.match(r, a));
                  case 3:
                    return (
                      (s = Object.assign(Object.assign({}, a), {
                        ignoreSearch: !0,
                      })),
                      (e.next = 6),
                      t.keys(r, s)
                    );
                  case 6:
                    (c = e.sent), (o = O(c)), (e.prev = 8), o.s();
                  case 10:
                    if ((u = o.n()).done) {
                      e.next = 17;
                      break;
                    }
                    if (((h = u.value), (f = T(h.url, n)), i !== f)) {
                      e.next = 15;
                      break;
                    }
                    return e.abrupt("return", t.match(h, a));
                  case 15:
                    e.next = 10;
                    break;
                  case 17:
                    e.next = 22;
                    break;
                  case 19:
                    (e.prev = 19), (e.t0 = e.catch(8)), o.e(e.t0);
                  case 22:
                    return (e.prev = 22), o.f(), e.finish(22);
                  case 25:
                    return e.abrupt("return");
                  case 26:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[8, 19, 22, 25]]
          );
        })
      )).apply(this, arguments);
    }
    function P() {
      if (void 0 === g) {
        var e = new Response("");
        if ("body" in e)
          try {
            new Response(e.body), (g = !0);
          } catch (t) {
            g = !1;
          }
        g = !1;
      }
      return g;
    }
    function q(e) {
      e.then(function () {});
    }
    var j = n(function e() {
      var t = this;
      a(this, e),
        (this.promise = new Promise(function (e, r) {
          (t.resolve = e), (t.reject = r);
        }));
    });
    function U() {
      return N.apply(this, arguments);
    }
    function N() {
      return (N = E(
        _().mark(function e() {
          var t, r, n;
          return _().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    0, (t = O(y)), (e.prev = 2), t.s();
                  case 4:
                    if ((r = t.n()).done) {
                      e.next = 11;
                      break;
                    }
                    return (n = r.value), (e.next = 8), n();
                  case 8:
                    0;
                  case 9:
                    e.next = 4;
                    break;
                  case 11:
                    e.next = 16;
                    break;
                  case 13:
                    (e.prev = 13), (e.t0 = e.catch(2)), t.e(e.t0);
                  case 16:
                    return (e.prev = 16), t.f(), e.finish(16);
                  case 19:
                    0;
                  case 20:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 13, 16, 19]]
          );
        })
      )).apply(this, arguments);
    }
    var I = function (e) {
      return new URL(String(e), location.href).href.replace(
        new RegExp("^".concat(location.origin)),
        ""
      );
    };
    function A(e) {
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    }
    function K(e, t) {
      var r = t();
      return e.waitUntil(r), r;
    }
    function M(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (W = E(
        _().mark(function e(t, r) {
          var n, a, i, s, c, o;
          return _().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((n = null),
                    t.url && ((a = new URL(t.url)), (n = a.origin)),
                    n === self.location.origin)
                  ) {
                    e.next = 4;
                    break;
                  }
                  throw new d("cross-origin-copy-response", { origin: n });
                case 4:
                  if (
                    ((i = t.clone()),
                    (s = {
                      headers: new Headers(i.headers),
                      status: i.status,
                      statusText: i.statusText,
                    }),
                    (c = r ? r(s) : s),
                    !P())
                  ) {
                    e.next = 11;
                    break;
                  }
                  (e.t0 = i.body), (e.next = 14);
                  break;
                case 11:
                  return (e.next = 13), i.blob();
                case 13:
                  e.t0 = e.sent;
                case 14:
                  return (o = e.t0), e.abrupt("return", new Response(o, c));
                case 16:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function B(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function F(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function H(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? F(Object(r), !0).forEach(function (t) {
              B(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : F(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var G, V;
    var $ = new WeakMap(),
      Y = new WeakMap(),
      Q = new WeakMap(),
      J = new WeakMap(),
      z = new WeakMap();
    var X = {
      get: function (e, t, r) {
        if (e instanceof IDBTransaction) {
          if ("done" === t) return Y.get(e);
          if ("objectStoreNames" === t) return e.objectStoreNames || Q.get(e);
          if ("store" === t)
            return r.objectStoreNames[1]
              ? void 0
              : r.objectStore(r.objectStoreNames[0]);
        }
        return te(e[t]);
      },
      set: function (e, t, r) {
        return (e[t] = r), !0;
      },
      has: function (e, t) {
        return (
          (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
          t in e
        );
      },
    };
    function Z(e) {
      return e !== IDBDatabase.prototype.transaction ||
        "objectStoreNames" in IDBTransaction.prototype
        ? (
            V ||
            (V = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
            ])
          ).includes(e)
          ? function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              return e.apply(re(this), r), te($.get(this));
            }
          : function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              return te(e.apply(re(this), r));
            }
        : function (t) {
            for (
              var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1;
              a < r;
              a++
            )
              n[a - 1] = arguments[a];
            var i = e.call.apply(e, [re(this), t].concat(n));
            return Q.set(i, t.sort ? t.sort() : [t]), te(i);
          };
    }
    function ee(e) {
      return "function" === typeof e
        ? Z(e)
        : (e instanceof IDBTransaction &&
            (function (e) {
              if (!Y.has(e)) {
                var t = new Promise(function (t, r) {
                  var n = function () {
                      e.removeEventListener("complete", a),
                        e.removeEventListener("error", i),
                        e.removeEventListener("abort", i);
                    },
                    a = function () {
                      t(), n();
                    },
                    i = function () {
                      r(
                        e.error || new DOMException("AbortError", "AbortError")
                      ),
                        n();
                    };
                  e.addEventListener("complete", a),
                    e.addEventListener("error", i),
                    e.addEventListener("abort", i);
                });
                Y.set(e, t);
              }
            })(e),
          (t = e),
          (
            G ||
            (G = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
            ])
          ).some(function (e) {
            return t instanceof e;
          })
            ? new Proxy(e, X)
            : e);
      var t;
    }
    function te(e) {
      if (e instanceof IDBRequest)
        return (function (e) {
          var t = new Promise(function (t, r) {
            var n = function () {
                e.removeEventListener("success", a),
                  e.removeEventListener("error", i);
              },
              a = function () {
                t(te(e.result)), n();
              },
              i = function () {
                r(e.error), n();
              };
            e.addEventListener("success", a), e.addEventListener("error", i);
          });
          return (
            t
              .then(function (t) {
                t instanceof IDBCursor && $.set(t, e);
              })
              .catch(function () {}),
            z.set(t, e),
            t
          );
        })(e);
      if (J.has(e)) return J.get(e);
      var t = ee(e);
      return t !== e && (J.set(e, t), z.set(t, e)), t;
    }
    var re = function (e) {
      return z.get(e);
    };
    function ne(e, t) {
      var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = r.blocked,
        a = r.upgrade,
        i = r.blocking,
        s = r.terminated,
        c = indexedDB.open(e, t),
        o = te(c);
      return (
        a &&
          c.addEventListener("upgradeneeded", function (e) {
            a(te(c.result), e.oldVersion, e.newVersion, te(c.transaction));
          }),
        n &&
          c.addEventListener("blocked", function () {
            return n();
          }),
        o
          .then(function (e) {
            s &&
              e.addEventListener("close", function () {
                return s();
              }),
              i &&
                e.addEventListener("versionchange", function () {
                  return i();
                });
          })
          .catch(function () {}),
        o
      );
    }
    var ae = ["get", "getKey", "getAll", "getAllKeys", "count"],
      ie = ["put", "add", "delete", "clear"],
      se = new Map();
    function ce(e, t) {
      if (e instanceof IDBDatabase && !(t in e) && "string" === typeof t) {
        if (se.get(t)) return se.get(t);
        var r = t.replace(/FromIndex$/, ""),
          n = t !== r,
          a = ie.includes(r);
        if (
          r in (n ? IDBIndex : IDBObjectStore).prototype &&
          (a || ae.includes(r))
        ) {
          var i = (function () {
            var e = E(
              _().mark(function e(t) {
                var i,
                  s,
                  c,
                  o,
                  u,
                  h,
                  f = arguments;
                return _().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          for (
                            s = this.transaction(
                              t,
                              a ? "readwrite" : "readonly"
                            ),
                              c = s.store,
                              o = f.length,
                              u = new Array(o > 1 ? o - 1 : 0),
                              h = 1;
                            h < o;
                            h++
                          )
                            u[h - 1] = f[h];
                          return (
                            n && (c = c.index(u.shift())),
                            (e.next = 6),
                            Promise.all([(i = c)[r].apply(i, u), a && s.done])
                          );
                        case 6:
                          return e.abrupt("return", e.sent[0]);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return se.set(t, i), i;
        }
      }
    }
    X = (function (e) {
      return H(
        H({}, e),
        {},
        {
          get: function (t, r, n) {
            return ce(t, r) || e.get(t, r, n);
          },
          has: function (t, r) {
            return !!ce(t, r) || e.has(t, r);
          },
        }
      );
    })(X);
    r(190);
    var oe = "cache-entries",
      ue = function (e) {
        var t = new URL(e, location.href);
        return (t.hash = ""), t.href;
      },
      he = (function () {
        function e(t) {
          a(this, e), (this._db = null), (this._cacheName = t);
        }
        return (
          n(e, [
            {
              key: "_upgradeDb",
              value: function (e) {
                var t = e.createObjectStore(oe, { keyPath: "id" });
                t.createIndex("cacheName", "cacheName", { unique: !1 }),
                  t.createIndex("timestamp", "timestamp", { unique: !1 });
              },
            },
            {
              key: "_upgradeDbAndDeleteOldDbs",
              value: function (e) {
                this._upgradeDb(e),
                  this._cacheName &&
                    (function (e) {
                      var t = (
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {}
                        ).blocked,
                        r = indexedDB.deleteDatabase(e);
                      t &&
                        r.addEventListener("blocked", function () {
                          return t();
                        }),
                        te(r).then(function () {});
                    })(this._cacheName);
              },
            },
            {
              key: "setTimestamp",
              value: (function () {
                var e = E(
                  _().mark(function e(t, r) {
                    var n, a, i;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = ue(t)),
                                (n = {
                                  url: t,
                                  timestamp: r,
                                  cacheName: this._cacheName,
                                  id: this._getId(t),
                                }),
                                (e.next = 4),
                                this.getDb()
                              );
                            case 4:
                              return (
                                (a = e.sent),
                                (i = a.transaction(oe, "readwrite", {
                                  durability: "relaxed",
                                })),
                                (e.next = 8),
                                i.store.put(n)
                              );
                            case 8:
                              return (e.next = 10), i.done;
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getTimestamp",
              value: (function () {
                var e = E(
                  _().mark(function e(t) {
                    var r, n;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.getDb();
                            case 2:
                              return (
                                (r = e.sent),
                                (e.next = 5),
                                r.get(oe, this._getId(t))
                              );
                            case 5:
                              return (
                                (n = e.sent),
                                e.abrupt(
                                  "return",
                                  null === n || void 0 === n
                                    ? void 0
                                    : n.timestamp
                                )
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "expireEntries",
              value: (function () {
                var e = E(
                  _().mark(function e(t, r) {
                    var n, a, i, s, c, o, u, h, f;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.getDb();
                            case 2:
                              return (
                                (n = e.sent),
                                (e.next = 5),
                                n
                                  .transaction(oe)
                                  .store.index("timestamp")
                                  .openCursor(null, "prev")
                              );
                            case 5:
                              (a = e.sent), (i = []), (s = 0);
                            case 8:
                              if (!a) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (c = a.value).cacheName === this._cacheName &&
                                  ((t && c.timestamp < t) || (r && s >= r)
                                    ? i.push(a.value)
                                    : s++),
                                (e.next = 13),
                                a.continue()
                              );
                            case 13:
                              (a = e.sent), (e.next = 8);
                              break;
                            case 16:
                              (o = []), (u = 0), (h = i);
                            case 18:
                              if (!(u < h.length)) {
                                e.next = 26;
                                break;
                              }
                              return (
                                (f = h[u]), (e.next = 22), n.delete(oe, f.id)
                              );
                            case 22:
                              o.push(f.url);
                            case 23:
                              u++, (e.next = 18);
                              break;
                            case 26:
                              return e.abrupt("return", o);
                            case 27:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_getId",
              value: function (e) {
                return this._cacheName + "|" + ue(e);
              },
            },
            {
              key: "getDb",
              value: (function () {
                var e = E(
                  _().mark(function e() {
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this._db) {
                                e.next = 4;
                                break;
                              }
                              return (
                                (e.next = 3),
                                ne("workbox-expiration", 1, {
                                  upgrade:
                                    this._upgradeDbAndDeleteOldDbs.bind(this),
                                })
                              );
                            case 3:
                              this._db = e.sent;
                            case 4:
                              return e.abrupt("return", this._db);
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })(),
      fe = (function () {
        function e(t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          a(this, e),
            (this._isRunning = !1),
            (this._rerunRequested = !1),
            (this._maxEntries = r.maxEntries),
            (this._maxAgeSeconds = r.maxAgeSeconds),
            (this._matchOptions = r.matchOptions),
            (this._cacheName = t),
            (this._timestampModel = new he(t));
        }
        return (
          n(e, [
            {
              key: "expireEntries",
              value: (function () {
                var e = E(
                  _().mark(function e() {
                    var t, r, n, a, i, s;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this._isRunning) {
                                e.next = 3;
                                break;
                              }
                              return (
                                (this._rerunRequested = !0), e.abrupt("return")
                              );
                            case 3:
                              return (
                                (this._isRunning = !0),
                                (t = this._maxAgeSeconds
                                  ? Date.now() - 1e3 * this._maxAgeSeconds
                                  : 0),
                                (e.next = 7),
                                this._timestampModel.expireEntries(
                                  t,
                                  this._maxEntries
                                )
                              );
                            case 7:
                              return (
                                (r = e.sent),
                                (e.next = 10),
                                self.caches.open(this._cacheName)
                              );
                            case 10:
                              (n = e.sent), (a = O(r)), (e.prev = 12), a.s();
                            case 14:
                              if ((i = a.n()).done) {
                                e.next = 20;
                                break;
                              }
                              return (
                                (s = i.value),
                                (e.next = 18),
                                n.delete(s, this._matchOptions)
                              );
                            case 18:
                              e.next = 14;
                              break;
                            case 20:
                              e.next = 25;
                              break;
                            case 22:
                              (e.prev = 22), (e.t0 = e.catch(12)), a.e(e.t0);
                            case 25:
                              return (e.prev = 25), a.f(), e.finish(25);
                            case 28:
                              0,
                                (this._isRunning = !1),
                                this._rerunRequested &&
                                  ((this._rerunRequested = !1),
                                  q(this.expireEntries()));
                            case 31:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[12, 22, 25, 28]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "updateTimestamp",
              value: (function () {
                var e = E(
                  _().mark(function e(t) {
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 3),
                                this._timestampModel.setTimestamp(t, Date.now())
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "isURLExpired",
              value: (function () {
                var e = E(
                  _().mark(function e(t) {
                    var r, n;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this._maxAgeSeconds) {
                                e.next = 6;
                                break;
                              }
                              e.next = 3;
                              break;
                            case 3:
                              return e.abrupt("return", !1);
                            case 6:
                              return (
                                (e.next = 8),
                                this._timestampModel.getTimestamp(t)
                              );
                            case 8:
                              return (
                                (r = e.sent),
                                (n = Date.now() - 1e3 * this._maxAgeSeconds),
                                e.abrupt("return", void 0 === r || r < n)
                              );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "delete",
              value: (function () {
                var e = E(
                  _().mark(function e() {
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this._rerunRequested = !1),
                                (e.next = 3),
                                this._timestampModel.expireEntries(1 / 0)
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })();
    function le(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != r) {
            var n,
              a,
              i = [],
              s = !0,
              c = !1;
            try {
              for (
                r = r.call(e);
                !(s = (n = r.next()).done) &&
                (i.push(n.value), !t || i.length !== t);
                s = !0
              );
            } catch (o) {
              (c = !0), (a = o);
            } finally {
              try {
                s || null == r.return || r.return();
              } finally {
                if (c) throw a;
              }
            }
            return i;
          }
        })(e, t) ||
        C(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    var pe = (function () {
      function e() {
        var t = this,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        a(this, e),
          (this.cachedResponseWillBeUsed = (function () {
            var e = E(
              _().mark(function e(r) {
                var n, a, i, s, c, o, u;
                return _().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((n = r.event),
                          (a = r.request),
                          (i = r.cacheName),
                          (s = r.cachedResponse))
                        ) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return", null);
                      case 3:
                        if (
                          ((c = t._isResponseDateFresh(s)),
                          q((o = t._getCacheExpiration(i)).expireEntries()),
                          (u = o.updateTimestamp(a.url)),
                          n)
                        )
                          try {
                            n.waitUntil(u);
                          } catch (h) {
                            0;
                          }
                        return e.abrupt("return", c ? s : null);
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          (this.cacheDidUpdate = (function () {
            var e = E(
              _().mark(function e(r) {
                var n, a, i;
                return _().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = r.cacheName),
                          (a = r.request),
                          (i = t._getCacheExpiration(n)),
                          (e.next = 5),
                          i.updateTimestamp(a.url)
                        );
                      case 5:
                        return (e.next = 7), i.expireEntries();
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          (this._config = r),
          (this._maxAgeSeconds = r.maxAgeSeconds),
          (this._cacheExpirations = new Map()),
          r.purgeOnQuotaError &&
            b(function () {
              return t.deleteCacheAndMetadata();
            });
      }
      return (
        n(e, [
          {
            key: "_getCacheExpiration",
            value: function (e) {
              if (e === k()) throw new d("expire-custom-caches-only");
              var t = this._cacheExpirations.get(e);
              return (
                t ||
                  ((t = new fe(e, this._config)),
                  this._cacheExpirations.set(e, t)),
                t
              );
            },
          },
          {
            key: "_isResponseDateFresh",
            value: function (e) {
              if (!this._maxAgeSeconds) return !0;
              var t = this._getDateHeaderTimestamp(e);
              return null === t || t >= Date.now() - 1e3 * this._maxAgeSeconds;
            },
          },
          {
            key: "_getDateHeaderTimestamp",
            value: function (e) {
              if (!e.headers.has("date")) return null;
              var t = e.headers.get("date"),
                r = new Date(t).getTime();
              return isNaN(r) ? null : r;
            },
          },
          {
            key: "deleteCacheAndMetadata",
            value: (function () {
              var e = E(
                _().mark(function e() {
                  var t, r, n, a, i;
                  return _().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = O(this._cacheExpirations)),
                              (e.prev = 1),
                              t.s();
                          case 3:
                            if ((r = t.n()).done) {
                              e.next = 11;
                              break;
                            }
                            return (
                              (n = le(r.value, 2)),
                              (a = n[0]),
                              (i = n[1]),
                              (e.next = 7),
                              self.caches.delete(a)
                            );
                          case 7:
                            return (e.next = 9), i.delete();
                          case 9:
                            e.next = 3;
                            break;
                          case 11:
                            e.next = 16;
                            break;
                          case 13:
                            (e.prev = 13), (e.t0 = e.catch(1)), t.e(e.t0);
                          case 16:
                            return (e.prev = 16), t.f(), e.finish(16);
                          case 19:
                            this._cacheExpirations = new Map();
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[1, 13, 16, 19]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
          },
        ]),
        e
      );
    })();
    function ve(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return L(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        C(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    r(437);
    function de(e) {
      if (!e) throw new d("add-to-cache-list-unexpected-type", { entry: e });
      if ("string" === typeof e)
        return { cacheKey: (t = new URL(e, location.href)).href, url: t.href };
      var t,
        r = e.revision,
        n = e.url;
      if (!n) throw new d("add-to-cache-list-unexpected-type", { entry: e });
      if (!r)
        return { cacheKey: (t = new URL(n, location.href)).href, url: t.href };
      var a = new URL(n, location.href),
        i = new URL(n, location.href);
      return (
        a.searchParams.set("__WB_REVISION__", r),
        { cacheKey: a.href, url: i.href }
      );
    }
    var ye = n(function e() {
        var t = this;
        a(this, e),
          (this.updatedURLs = []),
          (this.notUpdatedURLs = []),
          (this.handlerWillStart = (function () {
            var e = E(
              _().mark(function e(t) {
                var r, n;
                return _().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (r = t.request),
                          (n = t.state) && (n.originalRequest = r);
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          (this.cachedResponseWillBeUsed = (function () {
            var e = E(
              _().mark(function e(r) {
                var n, a, i, s;
                return _().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = r.event),
                          (a = r.state),
                          (i = r.cachedResponse),
                          "install" === n.type &&
                            a &&
                            a.originalRequest &&
                            a.originalRequest instanceof Request &&
                            ((s = a.originalRequest.url),
                            i
                              ? t.notUpdatedURLs.push(s)
                              : t.updatedURLs.push(s)),
                          e.abrupt("return", i)
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })());
      }),
      be = n(function e(t) {
        var r = this,
          n = t.precacheController;
        a(this, e),
          (this.cacheKeyWillBeUsed = (function () {
            var e = E(
              _().mark(function e(t) {
                var n, a, i;
                return _().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.request),
                          (a = t.params),
                          (i =
                            (null === a || void 0 === a
                              ? void 0
                              : a.cacheKey) ||
                            r._precacheController.getCacheKeyForURL(n.url)),
                          e.abrupt(
                            "return",
                            i ? new Request(i, { headers: n.headers }) : n
                          )
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          (this._precacheController = n);
      });
    r(833);
    function ge(e) {
      return "string" === typeof e ? new Request(e) : e;
    }
    var me = (function () {
        function t(e, r) {
          a(this, t),
            (this._cacheKeys = {}),
            Object.assign(this, r),
            (this.event = r.event),
            (this._strategy = e),
            (this._handlerDeferred = new j()),
            (this._extendLifetimePromises = []),
            (this._plugins = ve(e.plugins)),
            (this._pluginStateMap = new Map());
          var n,
            i = O(this._plugins);
          try {
            for (i.s(); !(n = i.n()).done; ) {
              var s = n.value;
              this._pluginStateMap.set(s, {});
            }
          } catch (c) {
            i.e(c);
          } finally {
            i.f();
          }
          this.event.waitUntil(this._handlerDeferred.promise);
        }
        return (
          n(t, [
            {
              key: "fetch",
              value: (function (e) {
                function t(t) {
                  return e.apply(this, arguments);
                }
                return (
                  (t.toString = function () {
                    return e.toString();
                  }),
                  t
                );
              })(
                (function () {
                  var e = E(
                    _().mark(function e(t) {
                      var r, n, a, i, s, c, o, u, h, f, l, p;
                      return _().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = this.event),
                                  !(
                                    "navigate" === (n = ge(t)).mode &&
                                    r instanceof FetchEvent &&
                                    r.preloadResponse
                                  ))
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                return (e.next = 5), r.preloadResponse;
                              case 5:
                                if (!(a = e.sent)) {
                                  e.next = 9;
                                  break;
                                }
                                return e.abrupt("return", a);
                              case 9:
                                (i = this.hasCallback("fetchDidFail")
                                  ? n.clone()
                                  : null),
                                  (e.prev = 10),
                                  (s = O(
                                    this.iterateCallbacks("requestWillFetch")
                                  )),
                                  (e.prev = 12),
                                  s.s();
                              case 14:
                                if ((c = s.n()).done) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (o = c.value),
                                  (e.next = 18),
                                  o({ request: n.clone(), event: r })
                                );
                              case 18:
                                n = e.sent;
                              case 19:
                                e.next = 14;
                                break;
                              case 21:
                                e.next = 26;
                                break;
                              case 23:
                                (e.prev = 23), (e.t0 = e.catch(12)), s.e(e.t0);
                              case 26:
                                return (e.prev = 26), s.f(), e.finish(26);
                              case 29:
                                e.next = 35;
                                break;
                              case 31:
                                if (
                                  ((e.prev = 31),
                                  (e.t1 = e.catch(10)),
                                  !(e.t1 instanceof Error))
                                ) {
                                  e.next = 35;
                                  break;
                                }
                                throw new d("plugin-error-request-will-fetch", {
                                  thrownErrorMessage: e.t1.message,
                                });
                              case 35:
                                return (
                                  (u = n.clone()),
                                  (e.prev = 36),
                                  (e.next = 39),
                                  fetch(
                                    n,
                                    "navigate" === n.mode
                                      ? void 0
                                      : this._strategy.fetchOptions
                                  )
                                );
                              case 39:
                                (h = e.sent),
                                  (f = O(
                                    this.iterateCallbacks("fetchDidSucceed")
                                  )),
                                  (e.prev = 42),
                                  f.s();
                              case 44:
                                if ((l = f.n()).done) {
                                  e.next = 51;
                                  break;
                                }
                                return (
                                  (p = l.value),
                                  (e.next = 48),
                                  p({ event: r, request: u, response: h })
                                );
                              case 48:
                                h = e.sent;
                              case 49:
                                e.next = 44;
                                break;
                              case 51:
                                e.next = 56;
                                break;
                              case 53:
                                (e.prev = 53), (e.t2 = e.catch(42)), f.e(e.t2);
                              case 56:
                                return (e.prev = 56), f.f(), e.finish(56);
                              case 59:
                                return e.abrupt("return", h);
                              case 62:
                                if (((e.prev = 62), (e.t3 = e.catch(36)), !i)) {
                                  e.next = 68;
                                  break;
                                }
                                return (
                                  (e.next = 68),
                                  this.runCallbacks("fetchDidFail", {
                                    error: e.t3,
                                    event: r,
                                    originalRequest: i.clone(),
                                    request: u.clone(),
                                  })
                                );
                              case 68:
                                throw e.t3;
                              case 69:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [10, 31],
                          [12, 23, 26, 29],
                          [36, 62],
                          [42, 53, 56, 59],
                        ]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
            },
            {
              key: "fetchAndCachePut",
              value: (function () {
                var e = E(
                  _().mark(function e(t) {
                    var r, n;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.fetch(t);
                            case 2:
                              return (
                                (r = e.sent),
                                (n = r.clone()),
                                this.waitUntil(this.cachePut(t, n)),
                                e.abrupt("return", r)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "cacheMatch",
              value: (function () {
                var e = E(
                  _().mark(function e(t) {
                    var r, n, a, i, s, c, o, u, h, f;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = ge(t)),
                                (a = this._strategy),
                                (i = a.cacheName),
                                (s = a.matchOptions),
                                (e.next = 4),
                                this.getCacheKey(r, "read")
                              );
                            case 4:
                              return (
                                (c = e.sent),
                                (o = Object.assign(Object.assign({}, s), {
                                  cacheName: i,
                                })),
                                (e.next = 8),
                                caches.match(c, o)
                              );
                            case 8:
                              (n = e.sent),
                                (u = O(
                                  this.iterateCallbacks(
                                    "cachedResponseWillBeUsed"
                                  )
                                )),
                                (e.prev = 11),
                                u.s();
                            case 13:
                              if ((h = u.n()).done) {
                                e.next = 23;
                                break;
                              }
                              return (
                                (f = h.value),
                                (e.next = 17),
                                f({
                                  cacheName: i,
                                  matchOptions: s,
                                  cachedResponse: n,
                                  request: c,
                                  event: this.event,
                                })
                              );
                            case 17:
                              if (((e.t0 = e.sent), e.t0)) {
                                e.next = 20;
                                break;
                              }
                              e.t0 = void 0;
                            case 20:
                              n = e.t0;
                            case 21:
                              e.next = 13;
                              break;
                            case 23:
                              e.next = 28;
                              break;
                            case 25:
                              (e.prev = 25), (e.t1 = e.catch(11)), u.e(e.t1);
                            case 28:
                              return (e.prev = 28), u.f(), e.finish(28);
                            case 31:
                              return e.abrupt("return", n);
                            case 32:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[11, 25, 28, 31]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "cachePut",
              value: (function () {
                var t = E(
                  _().mark(function t(r, n) {
                    var a, i, s, c, o, u, h, f, l, p, v, y, b;
                    return _().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (a = ge(r)), (t.next = 3), A(0);
                            case 3:
                              return (t.next = 5), this.getCacheKey(a, "write");
                            case 5:
                              (i = t.sent), (t.next = 11);
                              break;
                            case 9:
                              (s = n.headers.get("Vary")) &&
                                e.debug(
                                  "The response for ".concat(I(i.url), " ") +
                                    "has a 'Vary: ".concat(s, "' header. ") +
                                    "Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected."
                                );
                            case 11:
                              if (n) {
                                t.next = 14;
                                break;
                              }
                              throw new d("cache-put-with-no-response", {
                                url: I(i.url),
                              });
                            case 14:
                              return (
                                (t.next = 16),
                                this._ensureResponseSafeToCache(n)
                              );
                            case 16:
                              if ((c = t.sent)) {
                                t.next = 20;
                                break;
                              }
                              return t.abrupt("return", !1);
                            case 20:
                              return (
                                (o = this._strategy),
                                (u = o.cacheName),
                                (h = o.matchOptions),
                                (t.next = 23),
                                self.caches.open(u)
                              );
                            case 23:
                              if (
                                ((f = t.sent),
                                !(l = this.hasCallback("cacheDidUpdate")))
                              ) {
                                t.next = 31;
                                break;
                              }
                              return (
                                (t.next = 28),
                                S(f, i.clone(), ["__WB_REVISION__"], h)
                              );
                            case 28:
                              (t.t0 = t.sent), (t.next = 32);
                              break;
                            case 31:
                              t.t0 = null;
                            case 32:
                              return (
                                (p = t.t0),
                                (t.prev = 34),
                                (t.next = 37),
                                f.put(i, l ? c.clone() : c)
                              );
                            case 37:
                              t.next = 46;
                              break;
                            case 39:
                              if (
                                ((t.prev = 39),
                                (t.t1 = t.catch(34)),
                                !(t.t1 instanceof Error))
                              ) {
                                t.next = 46;
                                break;
                              }
                              if ("QuotaExceededError" !== t.t1.name) {
                                t.next = 45;
                                break;
                              }
                              return (t.next = 45), U();
                            case 45:
                              throw t.t1;
                            case 46:
                              (v = O(this.iterateCallbacks("cacheDidUpdate"))),
                                (t.prev = 47),
                                v.s();
                            case 49:
                              if ((y = v.n()).done) {
                                t.next = 55;
                                break;
                              }
                              return (
                                (b = y.value),
                                (t.next = 53),
                                b({
                                  cacheName: u,
                                  oldResponse: p,
                                  newResponse: c.clone(),
                                  request: i,
                                  event: this.event,
                                })
                              );
                            case 53:
                              t.next = 49;
                              break;
                            case 55:
                              t.next = 60;
                              break;
                            case 57:
                              (t.prev = 57), (t.t2 = t.catch(47)), v.e(t.t2);
                            case 60:
                              return (t.prev = 60), v.f(), t.finish(60);
                            case 63:
                              return t.abrupt("return", !0);
                            case 64:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [
                        [34, 39],
                        [47, 57, 60, 63],
                      ]
                    );
                  })
                );
                return function (e, r) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getCacheKey",
              value: (function () {
                var e = E(
                  _().mark(function e(t, r) {
                    var n, a, i, s, c;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = "".concat(t.url, " | ").concat(r)),
                                this._cacheKeys[n])
                              ) {
                                e.next = 24;
                                break;
                              }
                              (a = t),
                                (i = O(
                                  this.iterateCallbacks("cacheKeyWillBeUsed")
                                )),
                                (e.prev = 4),
                                i.s();
                            case 6:
                              if ((s = i.n()).done) {
                                e.next = 15;
                                break;
                              }
                              return (
                                (c = s.value),
                                (e.t0 = ge),
                                (e.next = 11),
                                c({
                                  mode: r,
                                  request: a,
                                  event: this.event,
                                  params: this.params,
                                })
                              );
                            case 11:
                              (e.t1 = e.sent), (a = (0, e.t0)(e.t1));
                            case 13:
                              e.next = 6;
                              break;
                            case 15:
                              e.next = 20;
                              break;
                            case 17:
                              (e.prev = 17), (e.t2 = e.catch(4)), i.e(e.t2);
                            case 20:
                              return (e.prev = 20), i.f(), e.finish(20);
                            case 23:
                              this._cacheKeys[n] = a;
                            case 24:
                              return e.abrupt("return", this._cacheKeys[n]);
                            case 25:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[4, 17, 20, 23]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "hasCallback",
              value: function (e) {
                var t,
                  r = O(this._strategy.plugins);
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    if (e in t.value) return !0;
                  }
                } catch (n) {
                  r.e(n);
                } finally {
                  r.f();
                }
                return !1;
              },
            },
            {
              key: "runCallbacks",
              value: (function () {
                var e = E(
                  _().mark(function e(t, r) {
                    var n, a, i;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (n = O(this.iterateCallbacks(t))),
                                (e.prev = 1),
                                n.s();
                            case 3:
                              if ((a = n.n()).done) {
                                e.next = 9;
                                break;
                              }
                              return (i = a.value), (e.next = 7), i(r);
                            case 7:
                              e.next = 3;
                              break;
                            case 9:
                              e.next = 14;
                              break;
                            case 11:
                              (e.prev = 11), (e.t0 = e.catch(1)), n.e(e.t0);
                            case 14:
                              return (e.prev = 14), n.f(), e.finish(14);
                            case 17:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 11, 14, 17]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "iterateCallbacks",
              value: _().mark(function e(t) {
                var r,
                  n,
                  a,
                  i = this;
                return _().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (r = O(this._strategy.plugins)),
                            (e.prev = 1),
                            (a = _().mark(function e() {
                              var r, a, s;
                              return _().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        "function" !== typeof (r = n.value)[t]
                                      ) {
                                        e.next = 6;
                                        break;
                                      }
                                      return (
                                        (a = i._pluginStateMap.get(r)),
                                        (s = function (e) {
                                          var n = Object.assign(
                                            Object.assign({}, e),
                                            { state: a }
                                          );
                                          return r[t](n);
                                        }),
                                        (e.next = 6),
                                        s
                                      );
                                    case 6:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })),
                            r.s();
                        case 4:
                          if ((n = r.n()).done) {
                            e.next = 8;
                            break;
                          }
                          return e.delegateYield(a(), "t0", 6);
                        case 6:
                          e.next = 4;
                          break;
                        case 8:
                          e.next = 13;
                          break;
                        case 10:
                          (e.prev = 10), (e.t1 = e.catch(1)), r.e(e.t1);
                        case 13:
                          return (e.prev = 13), r.f(), e.finish(13);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[1, 10, 13, 16]]
                );
              }),
            },
            {
              key: "waitUntil",
              value: function (e) {
                return this._extendLifetimePromises.push(e), e;
              },
            },
            {
              key: "doneWaiting",
              value: (function () {
                var e = E(
                  _().mark(function e() {
                    var t;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(t = this._extendLifetimePromises.shift())) {
                                e.next = 5;
                                break;
                              }
                              return (e.next = 3), t;
                            case 3:
                              e.next = 0;
                              break;
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "destroy",
              value: function () {
                this._handlerDeferred.resolve(null);
              },
            },
            {
              key: "_ensureResponseSafeToCache",
              value: (function () {
                var e = E(
                  _().mark(function e(t) {
                    var r, n, a, i, s;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (r = t),
                                (n = !1),
                                (a = O(
                                  this.iterateCallbacks("cacheWillUpdate")
                                )),
                                (e.prev = 3),
                                a.s();
                            case 5:
                              if ((i = a.n()).done) {
                                e.next = 18;
                                break;
                              }
                              return (
                                (s = i.value),
                                (e.next = 9),
                                s({
                                  request: this.request,
                                  response: r,
                                  event: this.event,
                                })
                              );
                            case 9:
                              if (((e.t0 = e.sent), e.t0)) {
                                e.next = 12;
                                break;
                              }
                              e.t0 = void 0;
                            case 12:
                              if (((r = e.t0), (n = !0), r)) {
                                e.next = 16;
                                break;
                              }
                              return e.abrupt("break", 18);
                            case 16:
                              e.next = 5;
                              break;
                            case 18:
                              e.next = 23;
                              break;
                            case 20:
                              (e.prev = 20), (e.t1 = e.catch(3)), a.e(e.t1);
                            case 23:
                              return (e.prev = 23), a.f(), e.finish(23);
                            case 26:
                              return (
                                n || (r && 200 !== r.status && (r = void 0)),
                                e.abrupt("return", r)
                              );
                            case 28:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[3, 20, 23, 26]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          t
        );
      })(),
      xe = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          a(this, e),
            (this.cacheName = k(t.cacheName)),
            (this.plugins = t.plugins || []),
            (this.fetchOptions = t.fetchOptions),
            (this.matchOptions = t.matchOptions);
        }
        return (
          n(e, [
            {
              key: "handle",
              value: function (e) {
                return le(this.handleAll(e), 1)[0];
              },
            },
            {
              key: "handleAll",
              value: function (e) {
                e instanceof FetchEvent &&
                  (e = { event: e, request: e.request });
                var t = e.event,
                  r =
                    "string" === typeof e.request
                      ? new Request(e.request)
                      : e.request,
                  n = "params" in e ? e.params : void 0,
                  a = new me(this, { event: t, request: r, params: n }),
                  i = this._getResponse(a, r, t);
                return [i, this._awaitComplete(i, a, r, t)];
              },
            },
            {
              key: "_getResponse",
              value: (function () {
                var e = E(
                  _().mark(function e(t, r, n) {
                    var a, i, s, c, o, u, h;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t.runCallbacks("handlerWillStart", {
                                  event: n,
                                  request: r,
                                })
                              );
                            case 2:
                              return (
                                (a = void 0),
                                (e.prev = 3),
                                (e.next = 6),
                                this._handle(r, t)
                              );
                            case 6:
                              if ((a = e.sent) && "error" !== a.type) {
                                e.next = 9;
                                break;
                              }
                              throw new d("no-response", { url: r.url });
                            case 9:
                              e.next = 39;
                              break;
                            case 11:
                              if (
                                ((e.prev = 11),
                                (e.t0 = e.catch(3)),
                                !(e.t0 instanceof Error))
                              ) {
                                e.next = 34;
                                break;
                              }
                              (i = O(t.iterateCallbacks("handlerDidError"))),
                                (e.prev = 15),
                                i.s();
                            case 17:
                              if ((s = i.n()).done) {
                                e.next = 26;
                                break;
                              }
                              return (
                                (c = s.value),
                                (e.next = 21),
                                c({ error: e.t0, event: n, request: r })
                              );
                            case 21:
                              if (!(a = e.sent)) {
                                e.next = 24;
                                break;
                              }
                              return e.abrupt("break", 26);
                            case 24:
                              e.next = 17;
                              break;
                            case 26:
                              e.next = 31;
                              break;
                            case 28:
                              (e.prev = 28), (e.t1 = e.catch(15)), i.e(e.t1);
                            case 31:
                              return (e.prev = 31), i.f(), e.finish(31);
                            case 34:
                              if (a) {
                                e.next = 38;
                                break;
                              }
                              throw e.t0;
                            case 38:
                              0;
                            case 39:
                              (o = O(t.iterateCallbacks("handlerWillRespond"))),
                                (e.prev = 40),
                                o.s();
                            case 42:
                              if ((u = o.n()).done) {
                                e.next = 49;
                                break;
                              }
                              return (
                                (h = u.value),
                                (e.next = 46),
                                h({ event: n, request: r, response: a })
                              );
                            case 46:
                              a = e.sent;
                            case 47:
                              e.next = 42;
                              break;
                            case 49:
                              e.next = 54;
                              break;
                            case 51:
                              (e.prev = 51), (e.t2 = e.catch(40)), o.e(e.t2);
                            case 54:
                              return (e.prev = 54), o.f(), e.finish(54);
                            case 57:
                              return e.abrupt("return", a);
                            case 58:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [
                        [3, 11],
                        [15, 28, 31, 34],
                        [40, 51, 54, 57],
                      ]
                    );
                  })
                );
                return function (t, r, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_awaitComplete",
              value: (function () {
                var e = E(
                  _().mark(function e(t, r, n, a) {
                    var i, s;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), t;
                            case 3:
                              (i = e.sent), (e.next = 8);
                              break;
                            case 6:
                              (e.prev = 6), (e.t0 = e.catch(0));
                            case 8:
                              return (
                                (e.prev = 8),
                                (e.next = 11),
                                r.runCallbacks("handlerDidRespond", {
                                  event: a,
                                  request: n,
                                  response: i,
                                })
                              );
                            case 11:
                              return (e.next = 13), r.doneWaiting();
                            case 13:
                              e.next = 18;
                              break;
                            case 15:
                              (e.prev = 15),
                                (e.t1 = e.catch(8)),
                                e.t1 instanceof Error && (s = e.t1);
                            case 18:
                              return (
                                (e.next = 20),
                                r.runCallbacks("handlerDidComplete", {
                                  event: a,
                                  request: n,
                                  response: i,
                                  error: s,
                                })
                              );
                            case 20:
                              if ((r.destroy(), !s)) {
                                e.next = 23;
                                break;
                              }
                              throw s;
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [
                        [0, 6],
                        [8, 15],
                      ]
                    );
                  })
                );
                return function (t, r, n, a) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })(),
      we = (function (t) {
        s(i, t);
        var r = f(i);
        function i() {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            a(this, i),
            (t.cacheName = w(t.cacheName)),
            ((e = r.call(this, t))._fallbackToNetwork =
              !1 !== t.fallbackToNetwork),
            e.plugins.push(i.copyRedirectedCacheableResponsesPlugin),
            e
          );
        }
        return (
          n(i, [
            {
              key: "_handle",
              value: (function () {
                var e = E(
                  _().mark(function e(t, r) {
                    var n;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), r.cacheMatch(t);
                            case 2:
                              if (!(n = e.sent)) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return", n);
                            case 5:
                              if (!r.event || "install" !== r.event.type) {
                                e.next = 9;
                                break;
                              }
                              return (e.next = 8), this._handleInstall(t, r);
                            case 8:
                            case 11:
                              return e.abrupt("return", e.sent);
                            case 9:
                              return (e.next = 11), this._handleFetch(t, r);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_handleFetch",
              value: (function () {
                var t = E(
                  _().mark(function t(r, n) {
                    var a, i, s, c, o, u;
                    return _().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((i = n.params || {}), !this._fallbackToNetwork)
                              ) {
                                t.next = 17;
                                break;
                              }
                              return (
                                (s = i.integrity),
                                (c = r.integrity),
                                (o = !c || c === s),
                                (t.next = 8),
                                n.fetch(new Request(r, { integrity: c || s }))
                              );
                            case 8:
                              if (((a = t.sent), !s || !o)) {
                                t.next = 15;
                                break;
                              }
                              return (
                                this._useDefaultCacheabilityPluginIfNeeded(),
                                (t.next = 13),
                                n.cachePut(r, a.clone())
                              );
                            case 13:
                              t.sent;
                            case 15:
                              t.next = 18;
                              break;
                            case 17:
                              throw new d("missing-precache-entry", {
                                cacheName: this.cacheName,
                                url: r.url,
                              });
                            case 18:
                              t.next = 34;
                              break;
                            case 23:
                              t.t0 = t.sent;
                            case 24:
                              (u = t.t0),
                                e.groupCollapsed(
                                  "Precaching is responding to: " + I(r.url)
                                ),
                                e.log(
                                  "Serving the precached url: ".concat(
                                    I(u instanceof Request ? u.url : u)
                                  )
                                ),
                                e.groupCollapsed("View request details here."),
                                e.log(r),
                                e.groupEnd(),
                                e.groupCollapsed("View response details here."),
                                e.log(a),
                                e.groupEnd(),
                                e.groupEnd();
                            case 34:
                              return t.abrupt("return", a);
                            case 35:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function (e, r) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_handleInstall",
              value: (function () {
                var e = E(
                  _().mark(function e(t, r) {
                    var n;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this._useDefaultCacheabilityPluginIfNeeded(),
                                (e.next = 3),
                                r.fetch(t)
                              );
                            case 3:
                              return (
                                (n = e.sent),
                                (e.next = 6),
                                r.cachePut(t, n.clone())
                              );
                            case 6:
                              if (e.sent) {
                                e.next = 9;
                                break;
                              }
                              throw new d("bad-precaching-response", {
                                url: t.url,
                                status: n.status,
                              });
                            case 9:
                              return e.abrupt("return", n);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_useDefaultCacheabilityPluginIfNeeded",
              value: function () {
                var e,
                  t = null,
                  r = 0,
                  n = O(this.plugins.entries());
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var a = le(e.value, 2),
                      s = a[0],
                      c = a[1];
                    c !== i.copyRedirectedCacheableResponsesPlugin &&
                      (c === i.defaultPrecacheCacheabilityPlugin && (t = s),
                      c.cacheWillUpdate && r++);
                  }
                } catch (o) {
                  n.e(o);
                } finally {
                  n.f();
                }
                0 === r
                  ? this.plugins.push(i.defaultPrecacheCacheabilityPlugin)
                  : r > 1 && null !== t && this.plugins.splice(t, 1);
              },
            },
          ]),
          i
        );
      })(xe);
    (we.defaultPrecacheCacheabilityPlugin = {
      cacheWillUpdate: function (e) {
        return E(
          _().mark(function t() {
            var r;
            return _().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ((r = e.response) && !(r.status >= 400)) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return", null);
                  case 3:
                    return t.abrupt("return", r);
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )();
      },
    }),
      (we.copyRedirectedCacheableResponsesPlugin = {
        cacheWillUpdate: function (e) {
          return E(
            _().mark(function t() {
              var r;
              return _().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!(r = e.response).redirected) {
                        t.next = 7;
                        break;
                      }
                      return (t.next = 4), M(r);
                    case 4:
                      (t.t0 = t.sent), (t.next = 8);
                      break;
                    case 7:
                      t.t0 = r;
                    case 8:
                      return t.abrupt("return", t.t0);
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
      });
    var ke,
      _e = (function () {
        function e() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = t.cacheName,
            n = t.plugins,
            i = void 0 === n ? [] : n,
            s = t.fallbackToNetwork,
            c = void 0 === s || s;
          a(this, e),
            (this._urlsToCacheKeys = new Map()),
            (this._urlsToCacheModes = new Map()),
            (this._cacheKeysToIntegrities = new Map()),
            (this._strategy = new we({
              cacheName: w(r),
              plugins: [].concat(ve(i), [new be({ precacheController: this })]),
              fallbackToNetwork: c,
            })),
            (this.install = this.install.bind(this)),
            (this.activate = this.activate.bind(this));
        }
        return (
          n(e, [
            {
              key: "strategy",
              get: function () {
                return this._strategy;
              },
            },
            {
              key: "precache",
              value: function (e) {
                this.addToCacheList(e),
                  this._installAndActiveListenersAdded ||
                    (self.addEventListener("install", this.install),
                    self.addEventListener("activate", this.activate),
                    (this._installAndActiveListenersAdded = !0));
              },
            },
            {
              key: "addToCacheList",
              value: function (e) {
                var t,
                  r = [],
                  n = O(e);
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var a = t.value;
                    "string" === typeof a
                      ? r.push(a)
                      : a && void 0 === a.revision && r.push(a.url);
                    var i = de(a),
                      s = i.cacheKey,
                      c = i.url,
                      o =
                        "string" !== typeof a && a.revision
                          ? "reload"
                          : "default";
                    if (
                      this._urlsToCacheKeys.has(c) &&
                      this._urlsToCacheKeys.get(c) !== s
                    )
                      throw new d("add-to-cache-list-conflicting-entries", {
                        firstEntry: this._urlsToCacheKeys.get(c),
                        secondEntry: s,
                      });
                    if ("string" !== typeof a && a.integrity) {
                      if (
                        this._cacheKeysToIntegrities.has(s) &&
                        this._cacheKeysToIntegrities.get(s) !== a.integrity
                      )
                        throw new d(
                          "add-to-cache-list-conflicting-integrities",
                          { url: c }
                        );
                      this._cacheKeysToIntegrities.set(s, a.integrity);
                    }
                    if (
                      (this._urlsToCacheKeys.set(c, s),
                      this._urlsToCacheModes.set(c, o),
                      r.length > 0)
                    ) {
                      var u =
                        "Workbox is precaching URLs without revision " +
                        "info: ".concat(
                          r.join(", "),
                          "\nThis is generally NOT safe. "
                        ) +
                        "Learn more at https://bit.ly/wb-precache";
                      console.warn(u);
                    }
                  }
                } catch (h) {
                  n.e(h);
                } finally {
                  n.f();
                }
              },
            },
            {
              key: "install",
              value: function (e) {
                var t = this;
                return K(
                  e,
                  E(
                    _().mark(function r() {
                      var n, a, i, s, c, o, u, h, f, l, p;
                      return _().wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                (n = new ye()),
                                  t.strategy.plugins.push(n),
                                  (a = O(t._urlsToCacheKeys)),
                                  (r.prev = 3),
                                  a.s();
                              case 5:
                                if ((i = a.n()).done) {
                                  r.next = 14;
                                  break;
                                }
                                return (
                                  (s = le(i.value, 2)),
                                  (c = s[0]),
                                  (o = s[1]),
                                  (u = t._cacheKeysToIntegrities.get(o)),
                                  (h = t._urlsToCacheModes.get(c)),
                                  (f = new Request(c, {
                                    integrity: u,
                                    cache: h,
                                    credentials: "same-origin",
                                  })),
                                  (r.next = 12),
                                  Promise.all(
                                    t.strategy.handleAll({
                                      params: { cacheKey: o },
                                      request: f,
                                      event: e,
                                    })
                                  )
                                );
                              case 12:
                                r.next = 5;
                                break;
                              case 14:
                                r.next = 19;
                                break;
                              case 16:
                                (r.prev = 16), (r.t0 = r.catch(3)), a.e(r.t0);
                              case 19:
                                return (r.prev = 19), a.f(), r.finish(19);
                              case 22:
                                return (
                                  (l = n.updatedURLs),
                                  (p = n.notUpdatedURLs),
                                  r.abrupt("return", {
                                    updatedURLs: l,
                                    notUpdatedURLs: p,
                                  })
                                );
                              case 25:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        null,
                        [[3, 16, 19, 22]]
                      );
                    })
                  )
                );
              },
            },
            {
              key: "activate",
              value: function (e) {
                var t = this;
                return K(
                  e,
                  E(
                    _().mark(function e() {
                      var r, n, a, i, s, c, o;
                      return _().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  self.caches.open(t.strategy.cacheName)
                                );
                              case 2:
                                return (r = e.sent), (e.next = 5), r.keys();
                              case 5:
                                (n = e.sent),
                                  (a = new Set(t._urlsToCacheKeys.values())),
                                  (i = []),
                                  (s = O(n)),
                                  (e.prev = 9),
                                  s.s();
                              case 11:
                                if ((c = s.n()).done) {
                                  e.next = 19;
                                  break;
                                }
                                if (((o = c.value), a.has(o.url))) {
                                  e.next = 17;
                                  break;
                                }
                                return (e.next = 16), r.delete(o);
                              case 16:
                                i.push(o.url);
                              case 17:
                                e.next = 11;
                                break;
                              case 19:
                                e.next = 24;
                                break;
                              case 21:
                                (e.prev = 21), (e.t0 = e.catch(9)), s.e(e.t0);
                              case 24:
                                return (e.prev = 24), s.f(), e.finish(24);
                              case 27:
                                return e.abrupt("return", { deletedURLs: i });
                              case 29:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[9, 21, 24, 27]]
                      );
                    })
                  )
                );
              },
            },
            {
              key: "getURLsToCacheKeys",
              value: function () {
                return this._urlsToCacheKeys;
              },
            },
            {
              key: "getCachedURLs",
              value: function () {
                return ve(this._urlsToCacheKeys.keys());
              },
            },
            {
              key: "getCacheKeyForURL",
              value: function (e) {
                var t = new URL(e, location.href);
                return this._urlsToCacheKeys.get(t.href);
              },
            },
            {
              key: "getIntegrityForCacheKey",
              value: function (e) {
                return this._cacheKeysToIntegrities.get(e);
              },
            },
            {
              key: "matchPrecache",
              value: (function () {
                var e = E(
                  _().mark(function e(t) {
                    var r, n, a;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((r = t instanceof Request ? t.url : t),
                                !(n = this.getCacheKeyForURL(r)))
                              ) {
                                e.next = 7;
                                break;
                              }
                              return (
                                (e.next = 5),
                                self.caches.open(this.strategy.cacheName)
                              );
                            case 5:
                              return (
                                (a = e.sent), e.abrupt("return", a.match(n))
                              );
                            case 7:
                              return e.abrupt("return", void 0);
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "createHandlerBoundToURL",
              value: function (e) {
                var t = this,
                  r = this.getCacheKeyForURL(e);
                if (!r) throw new d("non-precached-url", { url: e });
                return function (n) {
                  return (
                    (n.request = new Request(e)),
                    (n.params = Object.assign({ cacheKey: r }, n.params)),
                    t.strategy.handle(n)
                  );
                };
              },
            },
          ]),
          e
        );
      })(),
      Re = function () {
        return ke || (ke = new _e()), ke;
      };
    r(185);
    var Ee,
      Le = "GET",
      Ce = function (e) {
        return e && "object" === typeof e ? e : { handle: e };
      },
      Oe = (function () {
        function e(t, r) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Le;
          a(this, e),
            (this.handler = Ce(r)),
            (this.match = t),
            (this.method = n);
        }
        return (
          n(e, [
            {
              key: "setCatchHandler",
              value: function (e) {
                this.catchHandler = Ce(e);
              },
            },
          ]),
          e
        );
      })(),
      Te = (function (e) {
        s(r, e);
        var t = f(r);
        function r(e, n, i) {
          a(this, r);
          return t.call(
            this,
            function (t) {
              var r = t.url,
                n = e.exec(r.href);
              if (n && (r.origin === location.origin || 0 === n.index))
                return n.slice(1);
            },
            n,
            i
          );
        }
        return n(r);
      })(Oe),
      Se = (function () {
        function e() {
          a(this, e),
            (this._routes = new Map()),
            (this._defaultHandlerMap = new Map());
        }
        return (
          n(e, [
            {
              key: "routes",
              get: function () {
                return this._routes;
              },
            },
            {
              key: "addFetchListener",
              value: function () {
                var e = this;
                self.addEventListener("fetch", function (t) {
                  var r = t.request,
                    n = e.handleRequest({ request: r, event: t });
                  n && t.respondWith(n);
                });
              },
            },
            {
              key: "addCacheListener",
              value: function () {
                var e = this;
                self.addEventListener("message", function (t) {
                  if (t.data && "CACHE_URLS" === t.data.type) {
                    var r = t.data.payload;
                    0;
                    var n = Promise.all(
                      r.urlsToCache.map(function (r) {
                        "string" === typeof r && (r = [r]);
                        var n = l(Request, ve(r));
                        return e.handleRequest({ request: n, event: t });
                      })
                    );
                    t.waitUntil(n),
                      t.ports &&
                        t.ports[0] &&
                        n.then(function () {
                          return t.ports[0].postMessage(!0);
                        });
                  }
                });
              },
            },
            {
              key: "handleRequest",
              value: function (e) {
                var t = this,
                  r = e.request,
                  n = e.event;
                var a = new URL(r.url, location.href);
                if (a.protocol.startsWith("http")) {
                  var i = a.origin === location.origin,
                    s = this.findMatchingRoute({
                      event: n,
                      request: r,
                      sameOrigin: i,
                      url: a,
                    }),
                    c = s.params,
                    o = s.route,
                    u = o && o.handler;
                  0;
                  var h = r.method;
                  if (
                    (!u &&
                      this._defaultHandlerMap.has(h) &&
                      (u = this._defaultHandlerMap.get(h)),
                    u)
                  ) {
                    var f;
                    0;
                    try {
                      f = u.handle({ url: a, request: r, event: n, params: c });
                    } catch (p) {
                      f = Promise.reject(p);
                    }
                    var l = o && o.catchHandler;
                    return (
                      f instanceof Promise &&
                        (this._catchHandler || l) &&
                        (f = f.catch(
                          (function () {
                            var e = E(
                              _().mark(function e(i) {
                                return _().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (!l) {
                                            e.next = 11;
                                            break;
                                          }
                                          return (
                                            (e.prev = 2),
                                            (e.next = 5),
                                            l.handle({
                                              url: a,
                                              request: r,
                                              event: n,
                                              params: c,
                                            })
                                          );
                                        case 5:
                                          return e.abrupt("return", e.sent);
                                        case 8:
                                          (e.prev = 8),
                                            (e.t0 = e.catch(2)),
                                            e.t0 instanceof Error && (i = e.t0);
                                        case 11:
                                          if (!t._catchHandler) {
                                            e.next = 14;
                                            break;
                                          }
                                          return e.abrupt(
                                            "return",
                                            t._catchHandler.handle({
                                              url: a,
                                              request: r,
                                              event: n,
                                            })
                                          );
                                        case 14:
                                          throw i;
                                        case 15:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[2, 8]]
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        )),
                      f
                    );
                  }
                }
              },
            },
            {
              key: "findMatchingRoute",
              value: function (e) {
                var t,
                  r = e.url,
                  n = e.sameOrigin,
                  a = e.request,
                  i = e.event,
                  s = O(this._routes.get(a.method) || []);
                try {
                  for (s.s(); !(t = s.n()).done; ) {
                    var c = t.value,
                      o = void 0,
                      u = c.match({
                        url: r,
                        sameOrigin: n,
                        request: a,
                        event: i,
                      });
                    if (u)
                      return (
                        (o = u),
                        ((Array.isArray(o) && 0 === o.length) ||
                          (u.constructor === Object &&
                            0 === Object.keys(u).length) ||
                          "boolean" === typeof u) &&
                          (o = void 0),
                        { route: c, params: o }
                      );
                  }
                } catch (h) {
                  s.e(h);
                } finally {
                  s.f();
                }
                return {};
              },
            },
            {
              key: "setDefaultHandler",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Le;
                this._defaultHandlerMap.set(t, Ce(e));
              },
            },
            {
              key: "setCatchHandler",
              value: function (e) {
                this._catchHandler = Ce(e);
              },
            },
            {
              key: "registerRoute",
              value: function (e) {
                this._routes.has(e.method) || this._routes.set(e.method, []),
                  this._routes.get(e.method).push(e);
              },
            },
            {
              key: "unregisterRoute",
              value: function (e) {
                if (!this._routes.has(e.method))
                  throw new d("unregister-route-but-not-found-with-method", {
                    method: e.method,
                  });
                var t = this._routes.get(e.method).indexOf(e);
                if (!(t > -1))
                  throw new d("unregister-route-route-not-registered");
                this._routes.get(e.method).splice(t, 1);
              },
            },
          ]),
          e
        );
      })(),
      De = function () {
        return (
          Ee || ((Ee = new Se()).addFetchListener(), Ee.addCacheListener()), Ee
        );
      };
    function Pe(e, t, r) {
      var n;
      if ("string" === typeof e) {
        var a = new URL(e, location.href);
        n = new Oe(
          function (e) {
            return e.url.href === a.href;
          },
          t,
          r
        );
      } else if (e instanceof RegExp) n = new Te(e, t, r);
      else if ("function" === typeof e) n = new Oe(e, t, r);
      else {
        if (!(e instanceof Oe))
          throw new d("unsupported-route-type", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture",
          });
        n = e;
      }
      return De().registerRoute(n), n;
    }
    function qe(e) {
      for (
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = function () {
            var r = a[n];
            t.some(function (e) {
              return e.test(r);
            }) && e.searchParams.delete(r);
          },
          n = 0,
          a = ve(e.searchParams.keys());
        n < a.length;
        n++
      )
        r();
      return e;
    }
    var je = _().mark(Ue);
    function Ue(e) {
      var t,
        r,
        n,
        a,
        i,
        s,
        c,
        o,
        u,
        h,
        f,
        l,
        p,
        v,
        d,
        y,
        b = arguments;
      return _().wrap(
        function (g) {
          for (;;)
            switch ((g.prev = g.next)) {
              case 0:
                return (
                  (t = b.length > 1 && void 0 !== b[1] ? b[1] : {}),
                  (r = t.ignoreURLParametersMatching),
                  (n = void 0 === r ? [/^utm_/, /^fbclid$/] : r),
                  (a = t.directoryIndex),
                  (i = void 0 === a ? "index.html" : a),
                  (s = t.cleanURLs),
                  (c = void 0 === s || s),
                  (o = t.urlManipulation),
                  ((u = new URL(e, location.href)).hash = ""),
                  (g.next = 5),
                  u.href
                );
              case 5:
                return (h = qe(u, n)), (g.next = 8), h.href;
              case 8:
                if (!i || !h.pathname.endsWith("/")) {
                  g.next = 13;
                  break;
                }
                return (
                  ((f = new URL(h.href)).pathname += i), (g.next = 13), f.href
                );
              case 13:
                if (!c) {
                  g.next = 18;
                  break;
                }
                return (
                  ((l = new URL(h.href)).pathname += ".html"),
                  (g.next = 18),
                  l.href
                );
              case 18:
                if (!o) {
                  g.next = 37;
                  break;
                }
                (p = o({ url: u })), (v = O(p)), (g.prev = 21), v.s();
              case 23:
                if ((d = v.n()).done) {
                  g.next = 29;
                  break;
                }
                return (y = d.value), (g.next = 27), y.href;
              case 27:
                g.next = 23;
                break;
              case 29:
                g.next = 34;
                break;
              case 31:
                (g.prev = 31), (g.t0 = g.catch(21)), v.e(g.t0);
              case 34:
                return (g.prev = 34), v.f(), g.finish(34);
              case 37:
              case "end":
                return g.stop();
            }
        },
        je,
        null,
        [[21, 31, 34, 37]]
      );
    }
    var Ne = (function (e) {
      s(r, e);
      var t = f(r);
      function r(e, n) {
        a(this, r);
        return t.call(
          this,
          function (t) {
            var r,
              a = t.request,
              i = e.getURLsToCacheKeys(),
              s = O(Ue(a.url, n));
            try {
              for (s.s(); !(r = s.n()).done; ) {
                var c = r.value,
                  o = i.get(c);
                if (o)
                  return {
                    cacheKey: o,
                    integrity: e.getIntegrityForCacheKey(o),
                  };
              }
            } catch (u) {
              s.e(u);
            } finally {
              s.f();
            }
          },
          e.strategy
        );
      }
      return n(r);
    })(Oe);
    var Ie,
      Ae = {
        cacheWillUpdate: (function () {
          var e = E(
            _().mark(function e(t) {
              var r;
              return _().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (200 !== (r = t.response).status && 0 !== r.status) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", r);
                    case 3:
                      return e.abrupt("return", null);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      },
      Ke = (function (e) {
        s(r, e);
        var t = f(r);
        function r() {
          var e,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            a(this, r),
            (e = t.call(this, n)).plugins.some(function (e) {
              return "cacheWillUpdate" in e;
            }) || e.plugins.unshift(Ae),
            e
          );
        }
        return (
          n(r, [
            {
              key: "_handle",
              value: (function () {
                var e = E(
                  _().mark(function e(t, r) {
                    var n, a, i;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                [],
                                (n = r
                                  .fetchAndCachePut(t)
                                  .catch(function () {})),
                                r.waitUntil(n),
                                (e.next = 6),
                                r.cacheMatch(t)
                              );
                            case 6:
                              if (!(a = e.sent)) {
                                e.next = 11;
                                break;
                              }
                              0, (e.next = 21);
                              break;
                            case 11:
                              return (e.prev = 12), (e.next = 15), n;
                            case 15:
                              (a = e.sent), (e.next = 21);
                              break;
                            case 18:
                              (e.prev = 18),
                                (e.t0 = e.catch(12)),
                                e.t0 instanceof Error && (i = e.t0);
                            case 21:
                              if (a) {
                                e.next = 24;
                                break;
                              }
                              throw new d("no-response", {
                                url: t.url,
                                error: i,
                              });
                            case 24:
                              return e.abrupt("return", a);
                            case 25:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[12, 18]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          r
        );
      })(xe);
    self.addEventListener("activate", function () {
      return self.clients.claim();
    }),
      (function (e) {
        Re().precache(e);
      })([
        { revision: "de57b5b74901a0826d70357e652795b1", url: "/index.html" },
        {
          revision: "5d5d9eefa31e5e13a6610d9fa7a283bb",
          url: "/static/media/logo.103b5fa18196d5665a7e12318285c916.svg",
        },
      ]),
      (function (e) {
        var t = Re();
        Pe(new Ne(t, e));
      })(Ie);
    var Me,
      We = new RegExp("/[^/?]+\\.[^/]+$");
    Pe(function (e) {
      var t = e.request,
        r = e.url;
      return (
        "navigate" === t.mode &&
        !r.pathname.startsWith("/_") &&
        !r.pathname.match(We)
      );
    }, ((Me = "/index.html"), Re().createHandlerBoundToURL(Me))),
      Pe(function (e) {
        var t = e.url;
        return t.origin === self.location.origin && t.pathname.endsWith(".png");
      }, new Ke({
        cacheName: "images",
        plugins: [new pe({ maxEntries: 50 })],
      })),
      self.addEventListener("message", function (e) {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
      });
  })();
})();
//# sourceMappingURL=service-worker.js.map
