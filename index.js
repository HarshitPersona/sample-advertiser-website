!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports._persona = t())
    : (e._persona = t());
})(this, () =>
  (() => {
    "use strict";
    var e = {
        679: (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.BaseApiServer = void 0);
          var r = n(101),
            o = (function () {
              function e(e, t) {
                this._httpClient = this._initHttpClient(e, t);
              }
              return (
                (e.prototype._initHttpClient = function (e, t) {
                  var n = new r.HTTPClient(e);
                  return (
                    n.setCustomHeader({ header: "x-api-key", value: t }), n
                  );
                }),
                e
              );
            })();
          t.BaseApiServer = o;
        },
        362: function (e, t, n) {
          var r,
            o =
              (this && this.__extends) ||
              ((r = function (e, t) {
                return (
                  (r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    }),
                  r(e, t)
                );
              }),
              function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Class extends value " +
                      String(t) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                r(e, t),
                  (e.prototype =
                    null === t
                      ? Object.create(t)
                      : ((n.prototype = t.prototype), new n()));
              }),
            i =
              (this && this.__assign) ||
              function () {
                return (
                  (i =
                    Object.assign ||
                    function (e) {
                      for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (t = arguments[n]))
                          Object.prototype.hasOwnProperty.call(t, o) &&
                            (e[o] = t[o]);
                      return e;
                    }),
                  i.apply(this, arguments)
                );
              },
            s =
              (this && this.__awaiter) ||
              function (e, t, n, r) {
                return new (n || (n = Promise))(function (o, i) {
                  function s(e) {
                    try {
                      u(r.next(e));
                    } catch (e) {
                      i(e);
                    }
                  }
                  function a(e) {
                    try {
                      u(r.throw(e));
                    } catch (e) {
                      i(e);
                    }
                  }
                  function u(e) {
                    var t;
                    e.done
                      ? o(e.value)
                      : ((t = e.value),
                        t instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })).then(s, a);
                  }
                  u((r = r.apply(e, t || [])).next());
                });
              },
            a =
              (this && this.__generator) ||
              function (e, t) {
                var n,
                  r,
                  o,
                  i,
                  s = {
                    label: 0,
                    sent: function () {
                      if (1 & o[0]) throw o[1];
                      return o[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (i = { next: a(0), throw: a(1), return: a(2) }),
                  "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                      return this;
                    }),
                  i
                );
                function a(a) {
                  return function (u) {
                    return (function (a) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; i && ((i = 0), a[0] && (s = 0)), s; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (o =
                                2 & a[0]
                                  ? r.return
                                  : a[0]
                                  ? r.throw || ((o = r.return) && o.call(r), 0)
                                  : r.next) &&
                              !(o = o.call(r, a[1])).done)
                          )
                            return o;
                          switch (
                            ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                          ) {
                            case 0:
                            case 1:
                              o = a;
                              break;
                            case 4:
                              return s.label++, { value: a[1], done: !1 };
                            case 5:
                              s.label++, (r = a[1]), (a = [0]);
                              continue;
                            case 7:
                              (a = s.ops.pop()), s.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (o =
                                    (o = s.trys).length > 0 &&
                                    o[o.length - 1]) ||
                                  (6 !== a[0] && 2 !== a[0])
                                )
                              ) {
                                s = 0;
                                continue;
                              }
                              if (
                                3 === a[0] &&
                                (!o || (a[1] > o[0] && a[1] < o[3]))
                              ) {
                                s.label = a[1];
                                break;
                              }
                              if (6 === a[0] && s.label < o[1]) {
                                (s.label = o[1]), (o = a);
                                break;
                              }
                              if (o && s.label < o[2]) {
                                (s.label = o[2]), s.ops.push(a);
                                break;
                              }
                              o[2] && s.ops.pop(), s.trys.pop();
                              continue;
                          }
                          a = t.call(e, s);
                        } catch (e) {
                          (a = [6, e]), (r = 0);
                        } finally {
                          n = o = 0;
                        }
                      if (5 & a[0]) throw a[1];
                      return { value: a[0] ? a[1] : void 0, done: !0 };
                    })([a, u]);
                  };
                }
              };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.EventServer = void 0);
          var u = n(679),
            c = n(601),
            l = n(928),
            p = (function (e) {
              function t(t) {
                var n = c.EVENT_SERVER_URL;
                return e.call(this, "".concat(n), t) || this;
              }
              return (
                o(t, e),
                (t.prototype._sendEvent = function (e, t) {
                  return s(this, void 0, void 0, function () {
                    var n, r;
                    return a(this, function (o) {
                      switch (o.label) {
                        case 0:
                          if (
                            (console.log("EventServer _sendEvent"),
                            !(n = (0, l.getSessionStorageItem)(
                              "PERSONA_REQUEST_ID"
                            )))
                          )
                            return [2];
                          o.label = 1;
                        case 1:
                          return (
                            o.trys.push([1, 3, , 4]),
                            [
                              4,
                              this._httpClient.post("/attribution".concat(e), {
                                params: i(i({}, t), {
                                  requestId: n,
                                  release: (0, l.getSDKReleaseVersion)(),
                                  timestamp: Date.now(),
                                }),
                                keepalive: !0,
                                credentials: "include",
                              }),
                            ]
                          );
                        case 2:
                          return o.sent(), [3, 4];
                        case 3:
                          return (
                            (r = o.sent()),
                            console.log("Error sending event"),
                            console.error(r),
                            [3, 4]
                          );
                        case 4:
                          return [2];
                      }
                    });
                  });
                }),
                (t.prototype.sendSessionInfo = function (e) {
                  return s(this, void 0, void 0, function () {
                    return a(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [
                            4,
                            this._sendEvent("/session/status", i({}, e)),
                          ];
                        case 1:
                          return t.sent(), [2];
                      }
                    });
                  });
                }),
                (t.prototype.collectCustomEvent = function (e) {
                  return s(this, void 0, void 0, function () {
                    return a(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (
                            console.log("Sending request"),
                            [4, this._sendEvent("/collect", i({}, e))]
                          );
                        case 1:
                          return t.sent(), [2];
                      }
                    });
                  });
                }),
                t
              );
            })(u.BaseApiServer);
          t.EventServer = p;
        },
        601: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.SESSION_STORAGE_KEYS = t.CLICK_ID = t.EVENT_SERVER_URL = void 0),
            (t.EVENT_SERVER_URL = "http://127.0.0.1:8000"),
            (t.CLICK_ID = "prsna_id"),
            (t.SESSION_STORAGE_KEYS = { PERSONA_REQUEST_ID: t.CLICK_ID });
        },
        90: (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.SDKClient = void 0);
          var r = n(362),
            o = n(601),
            i = n(928),
            s = (function () {
              function e(e) {
                this._setRequestId(),
                  (this._isPageVisible = !0),
                  this._registerPageVisibilityEventListeners(),
                  (this._eventServer = new r.EventServer(e.apiKey));
              }
              return (
                (e.prototype._setRequestId = function () {
                  var e = (0, i.getUrlQueryParams)(window.location.href).get(
                    o.CLICK_ID
                  );
                  (0, i.setSessionStorageItem)("PERSONA_REQUEST_ID", e);
                }),
                (e.prototype._onVisible = function () {
                  this._isPageVisible ||
                    ((this._isPageVisible = !0), this.startNewSession());
                }),
                (e.prototype._onHidden = function () {
                  this._isPageVisible &&
                    ((this._isPageVisible = !1), this._endCurrentSession());
                }),
                (e.prototype._handleVisibilityChange = function (e, t) {
                  return "boolean" == typeof e
                    ? e
                      ? this._onVisible()
                      : this._onHidden()
                    : t
                    ? document[t]
                      ? this._onHidden()
                      : this._onVisible()
                    : void 0;
                }),
                (e.prototype._registerPageVisibilityEventListeners =
                  function () {
                    var e = this,
                      t = (0, i.getBrowserPrefix)(["moz", "ms", "o", "webkit"]),
                      n = (0, i.getHiddenBrowserPropertyName)(t),
                      r = (0, i.getBrowserVisibilityEvent)(t);
                    document.addEventListener(
                      r,
                      function (t) {
                        e._handleVisibilityChange(t, n);
                      },
                      !1
                    ),
                      (window.onbeforeunload = function () {
                        e._handleVisibilityChange(!1);
                      });
                  }),
                (e.prototype._endCurrentSession = function () {
                  this._currentSessionId &&
                    (this._eventServer.sendSessionInfo({
                      sessionId: this._currentSessionId,
                      status: "ended",
                      page: window.location.href,
                    }),
                    (this._currentSessionId = null));
                }),
                (e.prototype.startNewSession = function () {
                  this._endCurrentSession(),
                    (this._currentSessionId = (0, i.generateRandomId)()),
                    this._eventServer.sendSessionInfo({
                      sessionId: this._currentSessionId,
                      status: "active",
                      page: window.location.href,
                    });
                }),
                (e.prototype.track = function (e, t) {
                  this._currentSessionId &&
                    this._eventServer.collectCustomEvent({
                      event: e,
                      properties: t,
                      page: window.location.href,
                      sessionId: this._currentSessionId,
                    });
                }),
                e
              );
            })();
          t.SDKClient = s;
        },
        729: function (e, t) {
          var n,
            r =
              (this && this.__extends) ||
              ((n = function (e, t) {
                return (
                  (n =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    }),
                  n(e, t)
                );
              }),
              function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Class extends value " +
                      String(t) +
                      " is not a constructor or null"
                  );
                function r() {
                  this.constructor = e;
                }
                n(e, t),
                  (e.prototype =
                    null === t
                      ? Object.create(t)
                      : ((r.prototype = t.prototype), new r()));
              });
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.HttpError = void 0);
          var o = (function (e) {
            function t(t, n) {
              var r = this.constructor,
                o = e.call(this, "[Personaxyz error] - ".concat(t)) || this;
              return (
                (o.name = "HttpError"),
                Object.setPrototypeOf(o, r.prototype),
                (o.statusCode = n),
                o
              );
            }
            return r(t, e), t;
          })(Error);
          t.HttpError = o;
        },
        101: function (e, t, n) {
          var r =
              (this && this.__assign) ||
              function () {
                return (
                  (r =
                    Object.assign ||
                    function (e) {
                      for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (t = arguments[n]))
                          Object.prototype.hasOwnProperty.call(t, o) &&
                            (e[o] = t[o]);
                      return e;
                    }),
                  r.apply(this, arguments)
                );
              },
            o =
              (this && this.__awaiter) ||
              function (e, t, n, r) {
                return new (n || (n = Promise))(function (o, i) {
                  function s(e) {
                    try {
                      u(r.next(e));
                    } catch (e) {
                      i(e);
                    }
                  }
                  function a(e) {
                    try {
                      u(r.throw(e));
                    } catch (e) {
                      i(e);
                    }
                  }
                  function u(e) {
                    var t;
                    e.done
                      ? o(e.value)
                      : ((t = e.value),
                        t instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })).then(s, a);
                  }
                  u((r = r.apply(e, t || [])).next());
                });
              },
            i =
              (this && this.__generator) ||
              function (e, t) {
                var n,
                  r,
                  o,
                  i,
                  s = {
                    label: 0,
                    sent: function () {
                      if (1 & o[0]) throw o[1];
                      return o[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (i = { next: a(0), throw: a(1), return: a(2) }),
                  "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                      return this;
                    }),
                  i
                );
                function a(a) {
                  return function (u) {
                    return (function (a) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; i && ((i = 0), a[0] && (s = 0)), s; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (o =
                                2 & a[0]
                                  ? r.return
                                  : a[0]
                                  ? r.throw || ((o = r.return) && o.call(r), 0)
                                  : r.next) &&
                              !(o = o.call(r, a[1])).done)
                          )
                            return o;
                          switch (
                            ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                          ) {
                            case 0:
                            case 1:
                              o = a;
                              break;
                            case 4:
                              return s.label++, { value: a[1], done: !1 };
                            case 5:
                              s.label++, (r = a[1]), (a = [0]);
                              continue;
                            case 7:
                              (a = s.ops.pop()), s.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (o =
                                    (o = s.trys).length > 0 &&
                                    o[o.length - 1]) ||
                                  (6 !== a[0] && 2 !== a[0])
                                )
                              ) {
                                s = 0;
                                continue;
                              }
                              if (
                                3 === a[0] &&
                                (!o || (a[1] > o[0] && a[1] < o[3]))
                              ) {
                                s.label = a[1];
                                break;
                              }
                              if (6 === a[0] && s.label < o[1]) {
                                (s.label = o[1]), (o = a);
                                break;
                              }
                              if (o && s.label < o[2]) {
                                (s.label = o[2]), s.ops.push(a);
                                break;
                              }
                              o[2] && s.ops.pop(), s.trys.pop();
                              continue;
                          }
                          a = t.call(e, s);
                        } catch (e) {
                          (a = [6, e]), (r = 0);
                        } finally {
                          n = o = 0;
                        }
                      if (5 & a[0]) throw a[1];
                      return { value: a[0] ? a[1] : void 0, done: !0 };
                    })([a, u]);
                  };
                }
              };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.HTTPClient = void 0);
          var s = n(729),
            a = (function () {
              function e(e) {
                this._baseUrl = e;
              }
              return (
                (e.prototype.setCustomHeader = function (e) {
                  var t,
                    n = e.header,
                    o = e.value;
                  this._customHeaders = r(
                    r({}, this._customHeaders),
                    (((t = {})[n] = o), t)
                  );
                }),
                (e.prototype._getHeaders = function () {
                  return r(
                    { "Content-Type": "application/json" },
                    this._customHeaders
                  );
                }),
                (e.prototype._buildUrl = function (e, t) {
                  var n = new URL("".concat(this._baseUrl).concat(e));
                  return t
                    ? (Object.entries(t).forEach(function (e) {
                        var t = e[0],
                          r = e[1];
                        n.searchParams.append(t, r);
                      }),
                      n.toString())
                    : n.toString();
                }),
                (e.prototype.get = function (e, t) {
                  return o(this, void 0, void 0, function () {
                    var n, o, a, u, c, l;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          (n = this._getHeaders()), (i.label = 1);
                        case 1:
                          return (
                            i.trys.push([1, 4, , 5]),
                            [
                              4,
                              fetch(
                                this._buildUrl(
                                  e,
                                  null == t ? void 0 : t.params
                                ),
                                r(r({ method: "GET" }, t), {
                                  headers: r(
                                    r({}, n),
                                    null == t ? void 0 : t.headers
                                  ),
                                })
                              ),
                            ]
                          );
                        case 2:
                          return (
                            (o = i.sent()),
                            (a = o.status),
                            [
                              4,
                              o.json().catch(function (e) {
                                throw new s.HttpError(
                                  "Could not parse response body - ".concat(e),
                                  a
                                );
                              }),
                            ]
                          );
                        case 3:
                          if (!(u = i.sent()))
                            throw new s.HttpError(
                              "No response body received",
                              a
                            );
                          if (((c = (null != u ? u : {}).message), !o.ok))
                            throw new s.HttpError(c, a);
                          return [2, { data: u, status: a }];
                        case 4:
                          if ((l = i.sent()) instanceof SyntaxError)
                            throw new s.HttpError(
                              "There was a SyntaxError - ".concat(l.message)
                            );
                          throw l;
                        case 5:
                          return [2];
                      }
                    });
                  });
                }),
                (e.prototype.post = function (e, t) {
                  return o(this, void 0, void 0, function () {
                    var n, o, a, u, c, l;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          (n = this._getHeaders()), (i.label = 1);
                        case 1:
                          return (
                            i.trys.push([1, 4, , 5]),
                            [
                              4,
                              fetch(
                                this._buildUrl(e),
                                r(r({ method: "POST" }, t), {
                                  headers: r(
                                    r({}, n),
                                    null == t ? void 0 : t.headers
                                  ),
                                  body: JSON.stringify(
                                    null == t ? void 0 : t.params
                                  ),
                                })
                              ),
                            ]
                          );
                        case 2:
                          return (
                            (o = i.sent()),
                            (a = o.status),
                            [
                              4,
                              o.json().catch(function (e) {
                                throw new s.HttpError(
                                  "Could not parse response body - ".concat(e),
                                  a
                                );
                              }),
                            ]
                          );
                        case 3:
                          if (!(u = i.sent()))
                            throw new s.HttpError(
                              "No response body received",
                              a
                            );
                          if (((c = (null != u ? u : {}).message), !o.ok))
                            throw new s.HttpError(c, a);
                          return [2, { data: u, status: a }];
                        case 4:
                          if ((l = i.sent()) instanceof SyntaxError)
                            throw new s.HttpError(
                              "There was a SyntaxError - ".concat(l.message)
                            );
                          throw l;
                        case 5:
                          return [2];
                      }
                    });
                  });
                }),
                e
              );
            })();
          t.HTTPClient = a;
        },
        928: (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.getSessionStorageItem =
              t.setSessionStorageItem =
              t.getUrlQueryParams =
              t.getSDKReleaseVersion =
              t.getBrowserPrefix =
              t.getBrowserVisibilityEvent =
              t.getHiddenBrowserPropertyName =
              t.generateRandomId =
                void 0);
          var r = n(296),
            o = n(147),
            i = n(601);
          (t.generateRandomId = function () {
            return (0, r.nanoid)();
          }),
            (t.getHiddenBrowserPropertyName = function (e) {
              return e ? e + "Hidden" : "hidden";
            }),
            (t.getBrowserVisibilityEvent = function (e) {
              return (e || "") + "visibilitychange";
            }),
            (t.getBrowserPrefix = function (e) {
              for (var n = 0; n < e.length; n++)
                if ((0, t.getHiddenBrowserPropertyName)(e[n]) in document)
                  return e[n];
              return null;
            }),
            (t.getSDKReleaseVersion = function () {
              return o.version;
            }),
            (t.getUrlQueryParams = function (e) {
              var t = new URL(e);
              return new URLSearchParams(t.search);
            }),
            (t.setSessionStorageItem = function (e, t) {
              if (e && t && "undefined" != typeof window) {
                var n = JSON.stringify(t);
                null === sessionStorage ||
                  void 0 === sessionStorage ||
                  sessionStorage.setItem(i.SESSION_STORAGE_KEYS[e], n);
              }
            }),
            (t.getSessionStorageItem = function (e) {
              if ("undefined" != typeof window) {
                var t =
                  null === sessionStorage || void 0 === sessionStorage
                    ? void 0
                    : sessionStorage.getItem(i.SESSION_STORAGE_KEYS[e]);
                return t ? JSON.parse(t) : "";
              }
              return "";
            });
        },
        296: (e, t, n) => {
          n.r(t),
            n.d(t, {
              customAlphabet: () => s,
              customRandom: () => i,
              nanoid: () => a,
              random: () => o,
              urlAlphabet: () => r,
            });
          const r =
            "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
          let o = (e) => crypto.getRandomValues(new Uint8Array(e)),
            i = (e, t, n) => {
              let r = (2 << (Math.log(e.length - 1) / Math.LN2)) - 1,
                o = -~((1.6 * r * t) / e.length);
              return (i = t) => {
                let s = "";
                for (;;) {
                  let t = n(o),
                    a = o;
                  for (; a--; )
                    if (((s += e[t[a] & r] || ""), s.length === i)) return s;
                }
              };
            },
            s = (e, t = 21) => i(e, t, o),
            a = (e = 21) =>
              crypto
                .getRandomValues(new Uint8Array(e))
                .reduce(
                  (e, t) =>
                    e +
                    ((t &= 63) < 36
                      ? t.toString(36)
                      : t < 62
                      ? (t - 26).toString(36).toUpperCase()
                      : t > 62
                      ? "-"
                      : "_"),
                  ""
                );
        },
        147: (e) => {
          e.exports = JSON.parse(
            '{"name":"attribution-sdk","version":"0.0.1","description":"","main":"dist/index.js","scripts":{"start":"npx tsc","build":"rimraf ./dist && webpack --mode production","prepare":"rimraf ./dist && npm run build"},"keywords":[],"author":"","license":"ISC","devDependencies":{"@types/node":"^20.8.7","rimraf":"^5.0.5","ts-loader":"^9.5.0","typescript":"^5.2.2","webpack":"^5.89.0","webpack-cli":"^5.1.4"},"dependencies":{"nanoid":"^5.0.2"}}'
          );
        },
      },
      t = {};
    function n(r) {
      var o = t[r];
      if (void 0 !== o) return o.exports;
      var i = (t[r] = { exports: {} });
      return e[r].call(i.exports, i, i.exports, n), i.exports;
    }
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var r = {};
    return (
      (() => {
        var e = r;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Attribution = void 0);
        var t = n(90),
          o = (function () {
            function e(e) {
              (this._sdkConfig = e),
                (this._client = new t.SDKClient(this._sdkConfig));
            }
            return (
              (e.init = function (t) {
                console.log("Init is happening"),
                  e._instance ||
                    ((e._instance = new e(t)),
                    e._instance._client.startNewSession());
              }),
              (e.track = function (e, t) {
                var n;
                e &&
                  (null === (n = this._instance) ||
                    void 0 === n ||
                    n._client.track(e, t));
              }),
              (e._instance = null),
              e
            );
          })();
        e.Attribution = o;
      })(),
      r
    );
  })()
);
