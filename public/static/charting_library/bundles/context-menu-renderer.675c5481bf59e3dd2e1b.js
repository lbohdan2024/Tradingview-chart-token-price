(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [1584],
  {
    79081: (e) => {
      e.exports = {
        menuWrap: "menuWrap-Kq3ruQo8",
        isMeasuring: "isMeasuring-Kq3ruQo8",
        scrollWrap: "scrollWrap-Kq3ruQo8",
        momentumBased: "momentumBased-Kq3ruQo8",
        menuBox: "menuBox-Kq3ruQo8",
        isHidden: "isHidden-Kq3ruQo8",
      };
    },
    39416: (e, t, n) => {
      "use strict";
      n.d(t, { useFunctionalRefObject: () => r });
      var i = n(50959),
        o = n(43010);
      function r(e) {
        const t = (0, i.useMemo)(
            () =>
              (function (e) {
                const t = (n) => {
                  e(n), (t.current = n);
                };
                return (t.current = null), t;
              })((e) => {
                l.current(e);
              }),
            [],
          ),
          n = (0, i.useRef)(null),
          r = (t) => {
            if (null === t) return s(n.current, t), void (n.current = null);
            n.current !== e && ((n.current = e), s(n.current, t));
          },
          l = (0, i.useRef)(r);
        return (
          (l.current = r),
          (0, o.useIsomorphicLayoutEffect)(() => {
            if (null !== t.current)
              return l.current(t.current), () => l.current(null);
          }, [e]),
          t
        );
      }
      function s(e, t) {
        null !== e && ("function" == typeof e ? e(t) : (e.current = t));
      }
    },
    43010: (e, t, n) => {
      "use strict";
      n.d(t, { useIsomorphicLayoutEffect: () => o });
      var i = n(50959);
      function o(e, t) {
        ("undefined" == typeof window ? i.useEffect : i.useLayoutEffect)(e, t);
      }
    },
    27267: (e, t, n) => {
      "use strict";
      function i(e, t, n, i, o) {
        function r(o) {
          if (e > o.timeStamp) return;
          const r = o.target;
          void 0 !== n &&
            null !== t &&
            null !== r &&
            r.ownerDocument === i &&
            (t.contains(r) || n(o));
        }
        return (
          o.click && i.addEventListener("click", r, !1),
          o.mouseDown && i.addEventListener("mousedown", r, !1),
          o.touchEnd && i.addEventListener("touchend", r, !1),
          o.touchStart && i.addEventListener("touchstart", r, !1),
          () => {
            i.removeEventListener("click", r, !1),
              i.removeEventListener("mousedown", r, !1),
              i.removeEventListener("touchend", r, !1),
              i.removeEventListener("touchstart", r, !1);
          }
        );
      }
      n.d(t, { addOutsideEventListener: () => i });
    },
    36383: (e, t, n) => {
      "use strict";
      n.d(t, { useOutsideEvent: () => s });
      var i = n(50959),
        o = n(43010),
        r = n(27267);
      function s(e) {
        const {
            click: t,
            mouseDown: n,
            touchEnd: s,
            touchStart: l,
            handler: a,
            reference: u,
          } = e,
          c = (0, i.useRef)(null),
          d = (0, i.useRef)(
            "undefined" == typeof window
              ? 0
              : new window.CustomEvent("timestamp").timeStamp,
          );
        return (
          (0, o.useIsomorphicLayoutEffect)(() => {
            const e = { click: t, mouseDown: n, touchEnd: s, touchStart: l },
              i = u ? u.current : c.current;
            return (0, r.addOutsideEventListener)(d.current, i, a, document, e);
          }, [t, n, s, l, a]),
          u || c
        );
      }
    },
    9745: (e, t, n) => {
      "use strict";
      n.d(t, { Icon: () => o });
      var i = n(50959);
      const o = i.forwardRef((e, t) => {
        const {
            icon: n = "",
            title: o,
            ariaLabel: r,
            ariaLabelledby: s,
            ariaHidden: l,
            ...a
          } = e,
          u = !!(o || r || s);
        return i.createElement("span", {
          ...a,
          ref: t,
          role: "img",
          "aria-label": r,
          "aria-labelledby": s,
          "aria-hidden": l || !u,
          title: o,
          dangerouslySetInnerHTML: { __html: n },
        });
      });
    },
    83021: (e, t, n) => {
      "use strict";
      n.d(t, { SubmenuContext: () => o, SubmenuHandler: () => r });
      var i = n(50959);
      const o = i.createContext(null);
      function r(e) {
        const [t, n] = (0, i.useState)(null),
          r = (0, i.useRef)(null),
          s = (0, i.useRef)(new Map());
        return (
          (0, i.useEffect)(
            () => () => {
              null !== r.current && clearTimeout(r.current);
            },
            [],
          ),
          i.createElement(
            o.Provider,
            {
              value: {
                current: t,
                setCurrent: function (e) {
                  null !== r.current &&
                    (clearTimeout(r.current), (r.current = null));
                  null === t
                    ? n(e)
                    : (r.current = setTimeout(() => {
                        (r.current = null), n(e);
                      }, 100));
                },
                registerSubmenu: function (e, t) {
                  return (
                    s.current.set(e, t),
                    () => {
                      s.current.delete(e);
                    }
                  );
                },
                isSubmenuNode: function (e) {
                  return Array.from(s.current.values()).some((t) => t(e));
                },
              },
            },
            e.children,
          )
        );
      }
    },
    99663: (e, t, n) => {
      "use strict";
      n.d(t, { Slot: () => o, SlotContext: () => r });
      var i = n(50959);
      class o extends i.Component {
        shouldComponentUpdate() {
          return !1;
        }
        render() {
          return i.createElement("div", {
            style: { position: "fixed", zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          });
        }
      }
      const r = i.createContext(null);
    },
    90186: (e, t, n) => {
      "use strict";
      function i(e) {
        return r(e, s);
      }
      function o(e) {
        return r(e, l);
      }
      function r(e, t) {
        const n = Object.entries(e).filter(t),
          i = {};
        for (const [e, t] of n) i[e] = t;
        return i;
      }
      function s(e) {
        const [t, n] = e;
        return 0 === t.indexOf("data-") && "string" == typeof n;
      }
      function l(e) {
        return 0 === e[0].indexOf("aria-");
      }
      n.d(t, {
        filterAriaProps: () => o,
        filterDataProps: () => i,
        filterProps: () => r,
        isAriaAttribute: () => l,
        isDataAttribute: () => s,
      });
    },
    52778: (e, t, n) => {
      "use strict";
      n.d(t, { OutsideEvent: () => o });
      var i = n(36383);
      function o(e) {
        const { children: t, ...n } = e;
        return t((0, i.useOutsideEvent)(n));
      }
    },
    67961: (e, t, n) => {
      "use strict";
      n.d(t, { OverlapManager: () => r, getRootOverlapManager: () => l });
      var i = n(50151);
      class o {
        constructor() {
          this._storage = [];
        }
        add(e) {
          this._storage.push(e);
        }
        remove(e) {
          this._storage = this._storage.filter((t) => e !== t);
        }
        has(e) {
          return this._storage.includes(e);
        }
        getItems() {
          return this._storage;
        }
      }
      class r {
        constructor(e = document) {
          (this._storage = new o()),
            (this._windows = new Map()),
            (this._index = 0),
            (this._document = e),
            (this._container = e.createDocumentFragment());
        }
        setContainer(e) {
          const t = this._container,
            n = null === e ? this._document.createDocumentFragment() : e;
          !(function (e, t) {
            Array.from(e.childNodes).forEach((e) => {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
            });
          })(t, n),
            (this._container = n);
        }
        registerWindow(e) {
          this._storage.has(e) || this._storage.add(e);
        }
        ensureWindow(e, t = { position: "fixed", direction: "normal" }) {
          const n = this._windows.get(e);
          if (void 0 !== n) return n;
          this.registerWindow(e);
          const i = this._document.createElement("div");
          if (
            ((i.style.position = t.position),
            (i.style.zIndex = this._index.toString()),
            (i.dataset.id = e),
            void 0 !== t.index)
          ) {
            const e = this._container.childNodes.length;
            if (t.index >= e) this._container.appendChild(i);
            else if (t.index <= 0)
              this._container.insertBefore(i, this._container.firstChild);
            else {
              const e = this._container.childNodes[t.index];
              this._container.insertBefore(i, e);
            }
          } else
            "reverse" === t.direction
              ? this._container.insertBefore(i, this._container.firstChild)
              : this._container.appendChild(i);
          return this._windows.set(e, i), ++this._index, i;
        }
        unregisterWindow(e) {
          this._storage.remove(e);
          const t = this._windows.get(e);
          void 0 !== t &&
            (null !== t.parentElement && t.parentElement.removeChild(t),
            this._windows.delete(e));
        }
        getZindex(e) {
          const t = this.ensureWindow(e);
          return parseInt(t.style.zIndex || "0");
        }
        moveToTop(e) {
          if (this.getZindex(e) !== this._index) {
            const t = this.ensureWindow(e);
            this._windows.forEach((e, n) => {
              e.hasAttribute("data-focus-trap") &&
                e.setAttribute("data-focus-trap", e === t ? "true" : "false");
            }),
              (t.style.zIndex = (++this._index).toString());
          }
        }
        removeWindow(e) {
          this.unregisterWindow(e);
        }
      }
      const s = new WeakMap();
      function l(e = document) {
        const t = e.getElementById("overlap-manager-root");
        if (null !== t) return (0, i.ensureDefined)(s.get(t));
        {
          const t = new r(e),
            n = (function (e) {
              const t = e.createElement("div");
              return (
                (t.style.position = "absolute"),
                (t.style.zIndex = (150).toString()),
                (t.style.top = "0px"),
                (t.style.left = "0px"),
                (t.id = "overlap-manager-root"),
                t
              );
            })(e);
          return s.set(n, t), t.setContainer(n), e.body.appendChild(n), t;
        }
      }
      var a;
      !(function (e) {
        e[(e.BaseZindex = 150)] = "BaseZindex";
      })(a || (a = {}));
    },
    99054: (e, t, n) => {
      "use strict";
      n.d(t, { setFixedBodyState: () => u });
      const i = (() => {
        let e;
        return () => {
          var t;
          if (void 0 === e) {
            const n = document.createElement("div"),
              i = n.style;
            (i.visibility = "hidden"),
              (i.width = "100px"),
              (i.msOverflowStyle = "scrollbar"),
              document.body.appendChild(n);
            const o = n.offsetWidth;
            n.style.overflow = "scroll";
            const r = document.createElement("div");
            (r.style.width = "100%"), n.appendChild(r);
            const s = r.offsetWidth;
            null === (t = n.parentNode) || void 0 === t || t.removeChild(n),
              (e = o - s);
          }
          return e;
        };
      })();
      function o(e, t, n) {
        null !== e && e.style.setProperty(t, n);
      }
      function r(e, t) {
        return getComputedStyle(e, null).getPropertyValue(t);
      }
      function s(e, t) {
        return parseInt(r(e, t));
      }
      let l = 0,
        a = !1;
      function u(e) {
        const { body: t } = document,
          n = t.querySelector(".widgetbar-wrap");
        if (e && 1 == ++l) {
          const e = r(t, "overflow"),
            l = s(t, "padding-right");
          "hidden" !== e.toLowerCase() &&
            t.scrollHeight > t.offsetHeight &&
            (o(n, "right", `${i()}px`),
            (t.style.paddingRight = `${l + i()}px`),
            (a = !0)),
            t.classList.add("i-no-scroll");
        } else if (
          !e &&
          l > 0 &&
          0 == --l &&
          (t.classList.remove("i-no-scroll"), a)
        ) {
          o(n, "right", "0px");
          let e = 0;
          0,
            t.scrollHeight <= t.clientHeight && (e -= i()),
            (t.style.paddingRight = (e < 0 ? 0 : e) + "px"),
            (a = !1);
        }
      }
    },
    90692: (e, t, n) => {
      "use strict";
      n.d(t, { MatchMedia: () => o });
      var i = n(50959);
      class o extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._handleChange = () => {
              this.forceUpdate();
            }),
            (this.state = { query: window.matchMedia(this.props.rule) });
        }
        componentDidMount() {
          this._subscribe(this.state.query);
        }
        componentDidUpdate(e, t) {
          this.state.query !== t.query &&
            (this._unsubscribe(t.query), this._subscribe(this.state.query));
        }
        componentWillUnmount() {
          this._unsubscribe(this.state.query);
        }
        render() {
          return this.props.children(this.state.query.matches);
        }
        static getDerivedStateFromProps(e, t) {
          return e.rule !== t.query.media
            ? { query: window.matchMedia(e.rule) }
            : null;
        }
        _subscribe(e) {
          e.addEventListener("change", this._handleChange);
        }
        _unsubscribe(e) {
          e.removeEventListener("change", this._handleChange);
        }
      }
    },
    64706: (e, t, n) => {
      "use strict";
      n.d(t, { MenuContext: () => i });
      const i = n(50959).createContext(null);
    },
    27317: (e, t, n) => {
      "use strict";
      n.d(t, { DEFAULT_MENU_THEME: () => v, Menu: () => g });
      var i = n(50959),
        o = n(97754),
        r = n.n(o),
        s = n(50151),
        l = n(9859),
        a = n(14729),
        u = n(50655),
        c = n(59064),
        d = n(67961),
        h = n(4741),
        p = n(83021),
        m = n(64706),
        f = n(79081);
      const v = f;
      var _;
      !(function (e) {
        e[(e.IndentFromWindow = 0)] = "IndentFromWindow";
      })(_ || (_ = {}));
      class g extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._containerRef = null),
            (this._scrollWrapRef = null),
            (this._raf = null),
            (this._scrollRaf = null),
            (this._scrollTimeout = void 0),
            (this._manager = new d.OverlapManager()),
            (this._hotkeys = null),
            (this._scroll = 0),
            (this._handleContainerRef = (e) => {
              (this._containerRef = e),
                this.props.reference &&
                  ("function" == typeof this.props.reference &&
                    this.props.reference(e),
                  "object" == typeof this.props.reference &&
                    (this.props.reference.current = e));
            }),
            (this._handleScrollWrapRef = (e) => {
              (this._scrollWrapRef = e),
                "function" == typeof this.props.scrollWrapReference &&
                  this.props.scrollWrapReference(e),
                "object" == typeof this.props.scrollWrapReference &&
                  (this.props.scrollWrapReference.current = e);
            }),
            (this._handleCustomRemeasureDelegate = () => {
              this._resizeForced(), this._handleMeasure();
            }),
            (this._handleMeasure = ({
              callback: e,
              forceRecalcPosition: t,
            } = {}) => {
              var n, i, o, r, a, u, c, d, h, p, m, f;
              if (this.state.isMeasureValid && !t) return;
              const { position: v } = this.props,
                _ = (0, s.ensureNotNull)(this._containerRef);
              let g = _.getBoundingClientRect();
              const y = document.documentElement.clientHeight,
                w = document.documentElement.clientWidth,
                b =
                  null !== (n = this.props.closeOnScrollOutsideOffset) &&
                  void 0 !== n
                    ? n
                    : 0;
              let x = y - 0 - b;
              const C = g.height > x;
              if (C) {
                ((0, s.ensureNotNull)(this._scrollWrapRef).style.overflowY =
                  "scroll"),
                  (g = _.getBoundingClientRect());
              }
              const { width: E, height: S } = g,
                M =
                  "function" == typeof v
                    ? v({
                        contentWidth: E,
                        contentHeight: S,
                        availableWidth: w,
                        availableHeight: y,
                      })
                    : v,
                R =
                  null !==
                    (o =
                      null === (i = null == M ? void 0 : M.indentFromWindow) ||
                      void 0 === i
                        ? void 0
                        : i.left) && void 0 !== o
                    ? o
                    : 0,
                W =
                  w -
                  (null !== (r = M.overrideWidth) && void 0 !== r ? r : E) -
                  (null !==
                    (u =
                      null === (a = null == M ? void 0 : M.indentFromWindow) ||
                      void 0 === a
                        ? void 0
                        : a.right) && void 0 !== u
                    ? u
                    : 0),
                O = (0, l.clamp)(M.x, R, Math.max(R, W)),
                N =
                  (null !==
                    (d =
                      null === (c = null == M ? void 0 : M.indentFromWindow) ||
                      void 0 === c
                        ? void 0
                        : c.top) && void 0 !== d
                    ? d
                    : 0) + b,
                D =
                  y -
                  (null !== (h = M.overrideHeight) && void 0 !== h ? h : S) -
                  (null !==
                    (m =
                      null === (p = null == M ? void 0 : M.indentFromWindow) ||
                      void 0 === p
                        ? void 0
                        : p.bottom) && void 0 !== m
                    ? m
                    : 0);
              let T = (0, l.clamp)(M.y, N, Math.max(N, D));
              if (
                (M.forbidCorrectYCoord &&
                  T < M.y &&
                  ((x -= M.y - T), (T = M.y)),
                t &&
                  void 0 !== this.props.closeOnScrollOutsideOffset &&
                  M.y <= this.props.closeOnScrollOutsideOffset)
              )
                return void this._handleGlobalClose(!0);
              const F =
                null !== (f = M.overrideHeight) && void 0 !== f
                  ? f
                  : C
                    ? x
                    : void 0;
              this.setState(
                {
                  appearingMenuHeight: t ? this.state.appearingMenuHeight : F,
                  appearingMenuWidth: t
                    ? this.state.appearingMenuWidth
                    : M.overrideWidth,
                  appearingPosition: { x: O, y: T },
                  isMeasureValid: !0,
                },
                () => {
                  this.props.doNotRestorePosition ||
                    this._restoreScrollPosition(),
                    e && e();
                },
              );
            }),
            (this._restoreScrollPosition = () => {
              const e = document.activeElement,
                t = (0, s.ensureNotNull)(this._containerRef);
              if (null !== e && t.contains(e))
                try {
                  e.scrollIntoView();
                } catch (e) {}
              else
                (0, s.ensureNotNull)(this._scrollWrapRef).scrollTop =
                  this._scroll;
            }),
            (this._resizeForced = () => {
              this.setState({
                appearingMenuHeight: void 0,
                appearingMenuWidth: void 0,
                appearingPosition: void 0,
                isMeasureValid: void 0,
              });
            }),
            (this._resize = () => {
              null === this._raf &&
                (this._raf = requestAnimationFrame(() => {
                  this.setState({
                    appearingMenuHeight: void 0,
                    appearingMenuWidth: void 0,
                    appearingPosition: void 0,
                    isMeasureValid: void 0,
                  }),
                    (this._raf = null);
                }));
            }),
            (this._handleGlobalClose = (e) => {
              this.props.onClose(e);
            }),
            (this._handleSlot = (e) => {
              this._manager.setContainer(e);
            }),
            (this._handleScroll = () => {
              this._scroll = (0, s.ensureNotNull)(
                this._scrollWrapRef,
              ).scrollTop;
            }),
            (this._handleScrollOutsideEnd = () => {
              clearTimeout(this._scrollTimeout),
                (this._scrollTimeout = setTimeout(() => {
                  this._handleMeasure({ forceRecalcPosition: !0 });
                }, 80));
            }),
            (this._handleScrollOutside = (e) => {
              e.target !== this._scrollWrapRef &&
                (this._handleScrollOutsideEnd(),
                null === this._scrollRaf &&
                  (this._scrollRaf = requestAnimationFrame(() => {
                    this._handleMeasure({ forceRecalcPosition: !0 }),
                      (this._scrollRaf = null);
                  })));
            }),
            (this.state = {});
        }
        componentDidMount() {
          this._handleMeasure({ callback: this.props.onOpen });
          const {
            customCloseDelegate: e = c.globalCloseDelegate,
            customRemeasureDelegate: t,
          } = this.props;
          e.subscribe(this, this._handleGlobalClose),
            null == t || t.subscribe(null, this._handleCustomRemeasureDelegate),
            window.addEventListener("resize", this._resize);
          const n = null !== this.context;
          this._hotkeys ||
            n ||
            ((this._hotkeys = h.createGroup({ desc: "Popup menu" })),
            this._hotkeys.add({
              desc: "Close",
              hotkey: 27,
              handler: () => {
                this.props.onKeyboardClose && this.props.onKeyboardClose(),
                  this._handleGlobalClose();
              },
            })),
            this.props.repositionOnScroll &&
              window.addEventListener("scroll", this._handleScrollOutside, {
                capture: !0,
              });
        }
        componentDidUpdate() {
          this._handleMeasure();
        }
        componentWillUnmount() {
          const {
            customCloseDelegate: e = c.globalCloseDelegate,
            customRemeasureDelegate: t,
          } = this.props;
          e.unsubscribe(this, this._handleGlobalClose),
            null == t ||
              t.unsubscribe(null, this._handleCustomRemeasureDelegate),
            window.removeEventListener("resize", this._resize),
            window.removeEventListener("scroll", this._handleScrollOutside, {
              capture: !0,
            }),
            this._hotkeys && (this._hotkeys.destroy(), (this._hotkeys = null)),
            null !== this._raf &&
              (cancelAnimationFrame(this._raf), (this._raf = null)),
            null !== this._scrollRaf &&
              (cancelAnimationFrame(this._scrollRaf), (this._scrollRaf = null)),
            this._scrollTimeout && clearTimeout(this._scrollTimeout);
        }
        render() {
          const {
              id: e,
              role: t,
              "aria-label": n,
              "aria-labelledby": o,
              "aria-activedescendant": s,
              "aria-hidden": l,
              "aria-describedby": c,
              "aria-invalid": d,
              children: h,
              minWidth: v,
              theme: _ = f,
              className: g,
              maxHeight: w,
              onMouseOver: b,
              onMouseOut: x,
              onKeyDown: C,
              onFocus: E,
              onBlur: S,
            } = this.props,
            {
              appearingMenuHeight: M,
              appearingMenuWidth: R,
              appearingPosition: W,
              isMeasureValid: O,
            } = this.state,
            N = {
              "--ui-kit-menu-max-width": `${W && W.x}px`,
              maxWidth: "calc(100vw - var(--ui-kit-menu-max-width) - 6px)",
            };
          return i.createElement(
            m.MenuContext.Provider,
            { value: this },
            i.createElement(
              p.SubmenuHandler,
              null,
              i.createElement(
                u.SlotContext.Provider,
                { value: this._manager },
                i.createElement(
                  "div",
                  {
                    id: e,
                    role: t,
                    "aria-label": n,
                    "aria-labelledby": o,
                    "aria-activedescendant": s,
                    "aria-hidden": l,
                    "aria-describedby": c,
                    "aria-invalid": d,
                    className: r()(g, _.menuWrap, !O && _.isMeasuring),
                    style: {
                      height: M,
                      left: W && W.x,
                      minWidth: v,
                      position: "fixed",
                      top: W && W.y,
                      width: R,
                      ...(this.props.limitMaxWidth && N),
                    },
                    "data-name": this.props["data-name"],
                    ref: this._handleContainerRef,
                    onScrollCapture: this.props.onScroll,
                    onContextMenu: a.preventDefaultForContextMenu,
                    tabIndex: this.props.tabIndex,
                    onMouseOver: b,
                    onMouseOut: x,
                    onKeyDown: C,
                    onFocus: E,
                    onBlur: S,
                  },
                  i.createElement(
                    "div",
                    {
                      className: r()(
                        _.scrollWrap,
                        !this.props.noMomentumBasedScroll && _.momentumBased,
                      ),
                      style: {
                        overflowY: void 0 !== M ? "scroll" : "auto",
                        maxHeight: w,
                      },
                      onScrollCapture: this._handleScroll,
                      ref: this._handleScrollWrapRef,
                    },
                    i.createElement(y, { className: _.menuBox }, h),
                  ),
                ),
              ),
              i.createElement(u.Slot, { reference: this._handleSlot }),
            ),
          );
        }
        update(e) {
          e ? this._resizeForced() : this._resize();
        }
        focus(e) {
          var t;
          null === (t = this._containerRef) || void 0 === t || t.focus(e);
        }
        blur() {
          var e;
          null === (e = this._containerRef) || void 0 === e || e.blur();
        }
      }
      function y(e) {
        const t = (0, s.ensureNotNull)((0, i.useContext)(p.SubmenuContext)),
          n = i.useRef(null);
        return i.createElement(
          "div",
          {
            ref: n,
            className: e.className,
            onMouseOver: function (e) {
              if (
                !(
                  null !== t.current &&
                  e.target instanceof Node &&
                  ((i = e.target),
                  null === (o = n.current) || void 0 === o
                    ? void 0
                    : o.contains(i))
                )
              )
                return;
              var i, o;
              t.isSubmenuNode(e.target) || t.setCurrent(null);
            },
            "data-name": "menu-inner",
          },
          e.children,
        );
      }
      g.contextType = p.SubmenuContext;
    },
    86431: (e, t, n) => {
      "use strict";
      n.d(t, { makeOverlapable: () => r });
      var i = n(50959),
        o = n(42842);
      function r(e, t) {
        return class extends i.PureComponent {
          render() {
            const { isOpened: n, root: r } = this.props;
            if (!n) return null;
            const s = i.createElement(e, { ...this.props, zIndex: 150 });
            return "parent" === r
              ? s
              : i.createElement(o.Portal, { shouldTrapFocus: t }, s);
          }
        };
      }
    },
    29197: (e, t, n) => {
      "use strict";
      n.d(t, { CloseDelegateContext: () => r });
      var i = n(50959),
        o = n(59064);
      const r = i.createContext(o.globalCloseDelegate);
    },
    42842: (e, t, n) => {
      "use strict";
      n.d(t, { Portal: () => a, PortalContext: () => u });
      var i = n(50959),
        o = n(32227),
        r = n(25931),
        s = n(67961),
        l = n(99663);
      class a extends i.PureComponent {
        constructor() {
          super(...arguments), (this._uuid = (0, r.nanoid)());
        }
        componentWillUnmount() {
          this._manager().removeWindow(this._uuid);
        }
        render() {
          const e = this._manager().ensureWindow(
            this._uuid,
            this.props.layerOptions,
          );
          (e.style.top = this.props.top || ""),
            (e.style.bottom = this.props.bottom || ""),
            (e.style.left = this.props.left || ""),
            (e.style.right = this.props.right || ""),
            (e.style.pointerEvents = this.props.pointerEvents || "");
          const t = this.props.className;
          return (
            t &&
              ("string" == typeof t
                ? e.classList.add(t)
                : e.classList.add(...t)),
            this.props.shouldTrapFocus &&
              !e.hasAttribute("data-focus-trap") &&
              e.setAttribute("data-focus-trap", "true"),
            this.props["aria-hidden"] && e.setAttribute("aria-hidden", "true"),
            o.createPortal(
              i.createElement(u.Provider, { value: this }, this.props.children),
              e,
            )
          );
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid);
        }
        _manager() {
          return null === this.context
            ? (0, s.getRootOverlapManager)()
            : this.context;
        }
      }
      a.contextType = l.SlotContext;
      const u = i.createContext(null);
    },
    50655: (e, t, n) => {
      "use strict";
      n.d(t, { Slot: () => i.Slot, SlotContext: () => i.SlotContext });
      var i = n(99663);
    },
    11785: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { ContextMenuRenderer: () => a });
      var i = n(50959),
        o = n(32227),
        r = n(91561),
        s = n(63273),
        l = n(50655);
      class a {
        constructor(e, t, n, o) {
          (this._root = document.createElement("div")),
            (this._isShown = !1),
            (this._manager = null),
            (this._props = {
              isOpened: !1,
              items: e,
              position: { x: 0, y: 0 },
              menuStatName: t.statName,
              mode: t.mode,
              "data-name": t["data-name"],
              isKeyboardEvent: t.isKeyboardEvent,
            }),
            (this._onDestroy = n),
            (this._onShow = o),
            (this._activeElement = document.activeElement),
            (this._returnFocus = t.returnFocus),
            (this._takeFocus = t.takeFocus),
            (this._menuElementRef = i.createRef()),
            (this._doNotCloseOn = t.doNotCloseOn),
            t.manager && (this._manager = t.manager);
        }
        show(e) {
          this._onShow && this._onShow(),
            (this._isShown = !0),
            this._render({
              ...this._props,
              position: (t) => {
                var n, i, o, r, l, a, u;
                const {
                  contentWidth: c,
                  contentHeight: d,
                  availableWidth: h,
                  availableHeight: p,
                } = t;
                let m;
                if (void 0 !== e.box) m = e.box;
                else {
                  m = {
                    x:
                      null !==
                        (i =
                          null === (n = e.touches) || void 0 === n
                            ? void 0
                            : n[0].clientX) && void 0 !== i
                        ? i
                        : e.clientX,
                    y:
                      null !==
                        (r =
                          null === (o = e.touches) || void 0 === o
                            ? void 0
                            : o[0].clientY) && void 0 !== r
                        ? r
                        : e.clientY,
                    w: 0,
                    h: 0,
                  };
                }
                const f = null !== (l = e.marginX) && void 0 !== l ? l : 0,
                  v = null !== (a = e.marginY) && void 0 !== a ? a : 0;
                let _, g;
                switch (
                  ((_ =
                    void 0 === e.attachToXBy
                      ? (0, s.isRtl)()
                        ? "right"
                        : "left"
                      : "auto" === e.attachToXBy
                        ? (0, s.isRtl)()
                          ? m.x - f - c >= 0
                            ? "right"
                            : "left"
                          : m.x + m.w + f + c <= h
                            ? "left"
                            : "right"
                        : e.attachToXBy),
                  _)
                ) {
                  case "left":
                    g = m.x + m.w + f;
                    break;
                  case "right":
                    g = m.x - c - f;
                }
                let y,
                  w = null !== (u = e.attachToYBy) && void 0 !== u ? u : "auto";
                "auto-strict" === w &&
                  (w = p < m.y + m.h + v + d ? "bottom" : "top");
                let b = m.y;
                switch (w) {
                  case "top":
                    (b = m.y + m.h + v), (y = d > p - b ? p - b : void 0);
                    break;
                  case "bottom":
                    (b = Math.max(0, m.y - v - d)),
                      (y = 0 === b ? m.y - v : void 0);
                }
                return { x: g, y: b, overrideHeight: y };
              },
              isOpened: !0,
              onClose: () => {
                this.hide(), this._unmount();
              },
              doNotCloseOn: this._doNotCloseOn,
              takeFocus: this._takeFocus,
              menuElementReference: this._menuElementRef,
            });
        }
        hide() {
          (this._isShown = !1), this._render({ ...this._props, isOpened: !1 });
        }
        isShown() {
          return this._isShown;
        }
        _unmount() {
          (this._isShown = !1),
            o.unmountComponentAtNode(this._root),
            this._onDestroy && this._onDestroy(),
            this._returnFocus &&
              this._activeElement instanceof HTMLElement &&
              this._activeElement.focus({ preventScroll: !0 });
        }
        _render(e) {
          o.render(
            i.createElement(
              l.SlotContext.Provider,
              { value: this._manager },
              i.createElement(r.OverlapContextMenu, { ...e }),
            ),
            this._root,
          );
        }
      }
    },
    25931: (e, t, n) => {
      "use strict";
      n.d(t, { nanoid: () => i });
      let i = (e = 21) =>
        crypto
          .getRandomValues(new Uint8Array(e))
          .reduce(
            (e, t) =>
              (e +=
                (t &= 63) < 36
                  ? t.toString(36)
                  : t < 62
                    ? (t - 26).toString(36).toUpperCase()
                    : t > 62
                      ? "-"
                      : "_"),
            "",
          );
    },
  },
]);
