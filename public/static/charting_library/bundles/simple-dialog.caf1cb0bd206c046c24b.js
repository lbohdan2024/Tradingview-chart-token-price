(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [8890],
  {
    59142: function (e, t) {
      var n, o, l;
      (o = [t]),
        (n = function (e) {
          "use strict";
          function t(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
            return Array.from(e);
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = !1;
          if ("undefined" != typeof window) {
            var o = {
              get passive() {
                n = !0;
              },
            };
            window.addEventListener("testPassive", null, o),
              window.removeEventListener("testPassive", null, o);
          }
          var l =
              "undefined" != typeof window &&
              window.navigator &&
              window.navigator.platform &&
              /iP(ad|hone|od)/.test(window.navigator.platform),
            a = [],
            r = !1,
            i = -1,
            s = void 0,
            c = void 0,
            u = function (e) {
              return a.some(function (t) {
                return !(
                  !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                );
              });
            },
            d = function (e) {
              var t = e || window.event;
              return (
                !!u(t.target) ||
                1 < t.touches.length ||
                (t.preventDefault && t.preventDefault(), !1)
              );
            },
            m = function () {
              setTimeout(function () {
                void 0 !== c &&
                  ((document.body.style.paddingRight = c), (c = void 0)),
                  void 0 !== s &&
                    ((document.body.style.overflow = s), (s = void 0));
              });
            };
          (e.disableBodyScroll = function (e, o) {
            if (l) {
              if (!e)
                return void console.error(
                  "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.",
                );
              if (
                e &&
                !a.some(function (t) {
                  return t.targetElement === e;
                })
              ) {
                var m = { targetElement: e, options: o || {} };
                (a = [].concat(t(a), [m])),
                  (e.ontouchstart = function (e) {
                    1 === e.targetTouches.length &&
                      (i = e.targetTouches[0].clientY);
                  }),
                  (e.ontouchmove = function (t) {
                    var n, o, l, a;
                    1 === t.targetTouches.length &&
                      ((o = e),
                      (a = (n = t).targetTouches[0].clientY - i),
                      !u(n.target) &&
                        ((o && 0 === o.scrollTop && 0 < a) ||
                        ((l = o) &&
                          l.scrollHeight - l.scrollTop <= l.clientHeight &&
                          a < 0)
                          ? d(n)
                          : n.stopPropagation()));
                  }),
                  r ||
                    (document.addEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0,
                    ),
                    (r = !0));
              }
            } else {
              (f = o),
                setTimeout(function () {
                  if (void 0 === c) {
                    var e = !!f && !0 === f.reserveScrollBarGap,
                      t =
                        window.innerWidth -
                        document.documentElement.clientWidth;
                    e &&
                      0 < t &&
                      ((c = document.body.style.paddingRight),
                      (document.body.style.paddingRight = t + "px"));
                  }
                  void 0 === s &&
                    ((s = document.body.style.overflow),
                    (document.body.style.overflow = "hidden"));
                });
              var v = { targetElement: e, options: o || {} };
              a = [].concat(t(a), [v]);
            }
            var f;
          }),
            (e.clearAllBodyScrollLocks = function () {
              l
                ? (a.forEach(function (e) {
                    (e.targetElement.ontouchstart = null),
                      (e.targetElement.ontouchmove = null);
                  }),
                  r &&
                    (document.removeEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0,
                    ),
                    (r = !1)),
                  (a = []),
                  (i = -1))
                : (m(), (a = []));
            }),
            (e.enableBodyScroll = function (e) {
              if (l) {
                if (!e)
                  return void console.error(
                    "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.",
                  );
                (e.ontouchstart = null),
                  (e.ontouchmove = null),
                  (a = a.filter(function (t) {
                    return t.targetElement !== e;
                  })),
                  r &&
                    0 === a.length &&
                    (document.removeEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0,
                    ),
                    (r = !1));
              } else
                1 === a.length && a[0].targetElement === e
                  ? (m(), (a = []))
                  : (a = a.filter(function (t) {
                      return t.targetElement !== e;
                    }));
            });
        }),
        void 0 === (l = "function" == typeof n ? n.apply(t, o) : n) ||
          (e.exports = l);
    },
    6467: (e) => {
      e.exports = {
        actionButton: "actionButton-k53vexPa",
        small: "small-k53vexPa",
        hiddenTitle: "hiddenTitle-k53vexPa",
      };
    },
    92774: (e) => {
      e.exports = { label: "label-nb7ji1l2" };
    },
    73142: (e) => {
      e.exports = {
        popupDialog: "popupDialog-B02UUUN3",
        wrap: "wrap-B02UUUN3",
        main: "main-B02UUUN3",
        small: "small-B02UUUN3",
        title: "title-B02UUUN3",
        content: "content-B02UUUN3",
        html: "html-B02UUUN3",
        footer: "footer-B02UUUN3",
        close: "close-B02UUUN3",
        marginWithoutCloseButton: "marginWithoutCloseButton-B02UUUN3",
      };
    },
    76974: (e, t, n) => {
      "use strict";
      n.d(t, { useIsMounted: () => l });
      var o = n(50959);
      const l = () => {
        const e = (0, o.useRef)(!1);
        return (
          (0, o.useEffect)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            [],
          ),
          e
        );
      };
    },
    70493: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          confirmModule: () => L,
          renameModule: () => _,
          showSimpleDialog: () => I,
          warningModule: () => A,
        });
      var o = n(50959),
        l = n(11542),
        a = n(97754),
        r = n(64388),
        i = n(76422),
        s = n(82206),
        c = n(68335),
        u = n(90692),
        d = n(52092),
        m = n(24437),
        v = n(86656),
        f = n(94720),
        p = n(26996),
        h = n(50151),
        g = n(76974),
        C = n(50655);
      const E = o.createContext({
        isSmallTablet: !1,
        dialogCloseHandler: () => {},
      });
      var w = n(6467);
      function y(e) {
        const {
            disabled: t,
            name: n,
            title: l,
            appearance: r,
            intent: i,
            handler: s,
            reference: c,
            type: u,
            className: d,
          } = e,
          { isSmallTablet: m, dialogCloseHandler: v } = (0, o.useContext)(E),
          y = (0, h.ensureNotNull)((0, o.useContext)(C.SlotContext)),
          b = (0, g.useIsMounted)(),
          [B, N] = (0, o.useState)(!1);
        return o.createElement(
          f.Button,
          {
            type: u,
            disabled: t,
            reference: c,
            className: a(w.actionButton, d, m && w.small),
            name: n,
            size: m ? "l" : void 0,
            appearance: r,
            intent: i,
            onClick: function () {
              if (B) return;
              const e = s({ dialogClose: v, innerManager: y });
              e &&
                (N(!0),
                e.then(() => {
                  b.current && N(!1);
                }));
            },
          },
          o.createElement("span", { className: a(B && w.hiddenTitle) }, l),
          B && o.createElement(p.Loader, { color: "white" }),
        );
      }
      var b = n(7720),
        B = n(73142);
      function N(e) {
        const {
          title: t,
          onClose: n,
          actions: l,
          dataName: f,
          popupDialogClassName: p,
          contentClassName: h,
          wrapperClassName: g,
          backdrop: C,
          closeOnOutsideClick: w = !0,
          showCloseButton: N = !0,
          closeOnEscapePress: S = !0,
          events: O = !0,
        } = e;
        (0, o.useEffect)(
          () => (
            i.subscribe(d.CLOSE_POPUPS_AND_DIALOGS_COMMAND, n, null),
            () => {
              i.unsubscribe(d.CLOSE_POPUPS_AND_DIALOGS_COMMAND, n, null);
            }
          ),
          [n],
        );
        const [U, x] = (0, o.useState)(!0),
          T = (0, o.useRef)(null);
        return o.createElement(
          u.MatchMedia,
          { rule: m.DialogBreakpoints.TabletSmall },
          (i) =>
            o.createElement(
              E.Provider,
              { value: { isSmallTablet: i, dialogCloseHandler: n } },
              o.createElement(
                s.PopupDialog,
                {
                  className: a(B.popupDialog, p),
                  isOpened: U,
                  backdrop: C,
                  onClickBackdrop: O ? M : void 0,
                  onClickOutside: w ? M : void 0,
                  onKeyDown: k,
                  autofocus: !0,
                  fixedBody: !0,
                },
                o.createElement(
                  "div",
                  { className: a(B.wrap, g), "data-name": f },
                  o.createElement(
                    "div",
                    {
                      className: a(
                        B.main,
                        !N && B.marginWithoutCloseButton,
                        i && B.small,
                      ),
                    },
                    t &&
                      o.createElement(
                        "div",
                        { className: a(B.title, i && B.small) },
                        t,
                      ),
                    (function (t) {
                      if ("html" in e)
                        return o.createElement(v.TouchScrollContainer, {
                          className: a(B.content, t && B.small, B.html, h),
                          dangerouslySetInnerHTML: { __html: e.html },
                        });
                      if ("content" in e)
                        return o.createElement(
                          v.TouchScrollContainer,
                          { className: a(B.content, t && B.small, h) },
                          e.content,
                        );
                      return null;
                    })(i),
                    l &&
                      l.length > 0 &&
                      o.createElement(
                        "div",
                        { className: a(B.footer, i && B.small) },
                        l.map((e, t) =>
                          o.createElement(y, {
                            ...e,
                            key: e.name,
                            reference: 0 === t ? T : void 0,
                          }),
                        ),
                      ),
                  ),
                  N &&
                    o.createElement(r.NavButton, {
                      "aria-label": "close",
                      size: "medium",
                      preservePaddings: !0,
                      className: a(B.close, i && B.small),
                      icon: b,
                      onClick: M,
                      "data-name": "close",
                      "data-role": "button",
                    }),
                ),
              ),
            ),
        );
        function k(e) {
          switch ((0, c.hashFromEvent)(e)) {
            case 27:
              U && S && (e.preventDefault(), n());
              break;
            case 13:
              const t = document.activeElement;
              if (
                e.defaultPrevented ||
                (t instanceof HTMLButtonElement && "submit" !== t.type)
              )
                return;
              if (U && l && l.length) {
                e.preventDefault();
                const t = T.current;
                t && t.click();
              }
          }
        }
        function M() {
          x(!1), n();
        }
      }
      function S(e) {
        return "html" in e
          ? { html: e.html }
          : "text" in e
            ? { content: e.text }
            : { content: e.content };
      }
      var O = n(21788),
        U = n(92774);
      function x(e) {
        const {
            maxLength: t,
            value: n,
            placeholder: l,
            onValueChange: a,
            nameInputRef: r,
            source: i = [],
            autocompleteFilter: s,
          } = e,
          { isSmallTablet: c } = (0, o.useContext)(E),
          u = o.useRef(null);
        return (
          (0, o.useLayoutEffect)(() => {
            u.current && u.current.select();
          }, []),
          o.createElement(
            o.Fragment,
            null,
            (function () {
              if ("content" in e)
                return o.createElement(
                  "div",
                  { className: U.label },
                  e.content,
                );
              if ("html" in e)
                return o.createElement("div", {
                  className: U.label,
                  dangerouslySetInnerHTML: { __html: e.html },
                });
              return null;
            })(),
            o.createElement(O.Autocomplete, {
              maxLength: t,
              value: n,
              onChange: function (e) {
                a(e);
              },
              allowUserDefinedValues: !0,
              preventOnFocusOpen: !0,
              noEmptyText: !0,
              source: i,
              preventSearchOnEmptyQuery: !0,
              filter: s,
              setupHTMLInput: function (e) {
                (u.current = e), r && (r.current = e);
              },
              size: c ? "large" : void 0,
              placeholder: l,
              suggestionsInPortal: !0,
            }),
          )
        );
      }
      function T(e) {
        return Boolean(e.trim());
      }
      function k(e) {
        const { buttonText: t, intentButton: o, actions: a, onConfirm: r } = e,
          i = [
            {
              name: "ok",
              title: t || l.t(null, void 0, n(19295)),
              intent: o,
              handler: ({ dialogClose: e }) => {
                null == r || r(), e();
              },
            },
          ];
        return a && a.forEach((e) => i.push(e)), i;
      }
      var M = n(51826),
        D = n(28124);
      const P = new M.DialogsOpenerManager();
      const L = function (e) {
          const {
              title: t,
              onClose: a = () => {},
              mainButtonText: r,
              mainButtonIntent: i,
              cancelButtonText: s,
              closeOnOutsideClick: c,
              onConfirm: u,
              onCancel: d,
            } = e,
            m = S(e);
          return o.createElement(N, {
            ...m,
            title: t || l.t(null, void 0, n(64770)),
            onClose: a,
            actions: [
              {
                name: "yes",
                title: r || l.t(null, void 0, n(55512)),
                intent: i || "success",
                handler: u,
              },
              {
                name: "no",
                type: "button",
                title: s || l.t(null, void 0, n(38733)),
                appearance: "stroke",
                intent: "default",
                handler: (e) => {
                  d ? d(e) : e.dialogClose();
                },
              },
            ],
            dataName: "confirm-dialog",
            closeOnOutsideClick: c,
          });
        },
        _ = function (e) {
          const {
              title: t,
              maxLength: a,
              initValue: r,
              placeholder: i,
              onClose: s = () => {},
              mainButtonText: c,
              mainButtonIntent: u,
              cancelButtonText: d,
              validator: m = T,
              onRename: v,
              source: f,
              autocompleteFilter: p,
              onCancel: h,
            } = e,
            g = (0, o.useRef)(null),
            [C, E] = (0, o.useState)(r || ""),
            [w, y] = (0, o.useState)(() => m(C)),
            b = S(e);
          return o.createElement(N, {
            title: t || l.t(null, void 0, n(6321)),
            content: o.createElement(x, {
              ...b,
              nameInputRef: g,
              maxLength: a,
              placeholder: i,
              value: C,
              onValueChange: function (e) {
                E(e), y(m(e));
              },
              source: f,
              autocompleteFilter: p,
            }),
            onClose: s,
            actions: [
              {
                disabled: !w,
                name: "save",
                title: c || l.t(null, void 0, n(64e3)),
                intent: u || "primary",
                handler: ({ dialogClose: e, innerManager: t }) =>
                  v({
                    newValue: C,
                    focusInput: B,
                    dialogClose: e,
                    innerManager: t,
                  }),
              },
              {
                name: "cancel",
                type: "button",
                title: d || l.t(null, void 0, n(4543)),
                appearance: "stroke",
                intent: "default",
                handler: (e) => {
                  h ? h(e) : e.dialogClose();
                },
              },
            ],
            dataName: "rename-dialog",
          });
          function B() {
            g.current && g.current.focus();
          }
        },
        A = function (e) {
          const { title: t, closeOnOutsideClick: a, onClose: r = () => {} } = e,
            i = S(e);
          return o.createElement(N, {
            ...i,
            title: t || l.t(null, void 0, n(66719)),
            onClose: r,
            actions: k(e),
            dataName: "warning-dialog",
            closeOnOutsideClick: a,
          });
        },
        I = function (e, t, n) {
          const { title: l } = e;
          let a = `${l}_`;
          if (
            ((a += "text" in e ? e.text : "html" in e ? e.html : e.id),
            P.isOpened(a))
          )
            return (0, h.ensureDefined)(P.getDialogPayload(a)).closeHandler;
          const r = document.createElement("div"),
            i = () => {
              var t;
              null === (t = e.onClose) || void 0 === t || t.call(e),
                s.unmount(),
                P.setAsClosed(a);
            },
            s = (0, D.createReactRoot)(
              o.createElement(
                C.SlotContext.Provider,
                { value: n || null },
                o.createElement(t, { ...e, onClose: i }),
              ),
              r,
            );
          return P.setAsOpened(a, { closeHandler: i }), i;
        };
    },
    51826: (e, t, n) => {
      "use strict";
      n.d(t, { DialogsOpenerManager: () => o, dialogsOpenerManager: () => l });
      class o {
        constructor() {
          this._storage = new Map();
        }
        setAsOpened(e, t) {
          this._storage.set(e, t);
        }
        setAsClosed(e) {
          this._storage.delete(e);
        }
        isOpened(e) {
          return this._storage.has(e);
        }
        getDialogPayload(e) {
          return this._storage.get(e);
        }
      }
      const l = new o();
    },
    86656: (e, t, n) => {
      "use strict";
      n.d(t, { TouchScrollContainer: () => c });
      var o = n(50959),
        l = n(59142),
        a = n(50151),
        r = n(49483);
      const i = CSS.supports("overscroll-behavior", "none");
      let s = 0;
      const c = (0, o.forwardRef)((e, t) => {
        const { children: n, ...a } = e,
          c = (0, o.useRef)(null);
        return (
          (0, o.useImperativeHandle)(t, () => c.current),
          (0, o.useLayoutEffect)(() => {
            if (r.CheckMobile.iOS())
              return (
                s++,
                null !== c.current &&
                  (i
                    ? 1 === s &&
                      (document.body.style.overscrollBehavior = "none")
                    : (0, l.disableBodyScroll)(c.current, {
                        allowTouchMove: u(c),
                      })),
                () => {
                  s--,
                    null !== c.current &&
                      (i
                        ? 0 === s &&
                          (document.body.style.overscrollBehavior = "")
                        : (0, l.enableBodyScroll)(c.current));
                }
              );
          }, []),
          o.createElement("div", { ref: c, ...a }, n)
        );
      });
      function u(e) {
        return (t) => {
          const n = (0, a.ensureNotNull)(e.current),
            o = document.activeElement;
          return (
            !n.contains(t) || (null !== o && n.contains(o) && o.contains(t))
          );
        };
      }
    },
    7720: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>';
    },
  },
]);
