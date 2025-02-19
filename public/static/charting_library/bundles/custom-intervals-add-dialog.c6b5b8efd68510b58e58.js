(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [4013],
  {
    40352: (e) => {
      e.exports = {
        button: "button-PYEOTd6i",
        disabled: "disabled-PYEOTd6i",
        hidden: "hidden-PYEOTd6i",
        icon: "icon-PYEOTd6i",
        dropped: "dropped-PYEOTd6i",
      };
    },
    20121: (e) => {
      e.exports = {
        dialog: "dialog-aRAWUDhF",
        rounded: "rounded-aRAWUDhF",
        shadowed: "shadowed-aRAWUDhF",
        fullscreen: "fullscreen-aRAWUDhF",
        darker: "darker-aRAWUDhF",
        backdrop: "backdrop-aRAWUDhF",
      };
    },
    52036: (e) => {
      e.exports = {
        "tablet-normal-breakpoint": "screen and (max-width: 768px)",
        "tooltip-offset": "20px",
        dialog: "dialog-qyCw0PaN",
        dragging: "dragging-qyCw0PaN",
        mobile: "mobile-qyCw0PaN",
        fullscreen: "fullscreen-qyCw0PaN",
        dialogAnimatedAppearance: "dialogAnimatedAppearance-qyCw0PaN",
        dialogAnimation: "dialogAnimation-qyCw0PaN",
        dialogTooltip: "dialogTooltip-qyCw0PaN",
      };
    },
    44620: (e) => {
      e.exports = {
        button: "button-tFul0OhX",
        "button-children": "button-children-tFul0OhX",
        hiddenArrow: "hiddenArrow-tFul0OhX",
        invisibleFocusHandler: "invisibleFocusHandler-tFul0OhX",
      };
    },
    70369: (e) => {
      e.exports = { placeholder: "placeholder-V6ceS6BN" };
    },
    36104: (e, t, n) => {
      "use strict";
      n.d(t, { useControlDisclosure: () => o });
      var i = n(7953);
      function o(e) {
        const { intent: t, highlight: n, ...o } = e,
          { isFocused: s, ...a } = (0, i.useDisclosure)(o);
        return {
          ...a,
          isFocused: s,
          highlight: null != n ? n : s,
          intent: null != t ? t : s ? "primary" : "default",
        };
      }
    },
    34094: (e, t, n) => {
      "use strict";
      n.d(t, { getTextForTooltip: () => a });
      var i = n(50959);
      const o = (e) => (0, i.isValidElement)(e) && Boolean(e.props.children),
        s = (e) =>
          null == e || "boolean" == typeof e || "{}" === JSON.stringify(e)
            ? ""
            : e.toString() + " ",
        a = (e) =>
          Array.isArray(e) || (0, i.isValidElement)(e)
            ? i.Children.toArray(e)
                .reduce((e, t) => {
                  let n = "";
                  return (
                    (n =
                      (0, i.isValidElement)(t) && o(t)
                        ? a(t.props.children)
                        : (0, i.isValidElement)(t) && !o(t)
                          ? ""
                          : s(t)),
                    e.concat(n)
                  );
                }, "")
                .trim()
            : s(e);
    },
    53017: (e, t, n) => {
      "use strict";
      function i(e) {
        return (t) => {
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
        };
      }
      function o(e) {
        return i([e]);
      }
      n.d(t, { isomorphicRef: () => o, mergeRefs: () => i });
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
    95711: (e, t, n) => {
      "use strict";
      n.d(t, { PopupContext: () => i });
      const i = n(50959).createContext(null);
    },
    82206: (e, t, n) => {
      "use strict";
      n.d(t, { PopupDialog: () => O });
      var i = n(50959),
        o = n(97754),
        s = n(50151),
        a = n(99663),
        l = n(67961),
        r = n(90186),
        c = n(20121);
      class d extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._manager = new l.OverlapManager()),
            (this._handleSlot = (e) => {
              this._manager.setContainer(e);
            });
        }
        render() {
          const {
              rounded: e = !0,
              shadowed: t = !0,
              fullscreen: n = !1,
              darker: s = !1,
              className: l,
              backdrop: d,
              containerTabIndex: u = -1,
            } = this.props,
            h = o(
              l,
              c.dialog,
              e && c.rounded,
              t && c.shadowed,
              n && c.fullscreen,
              s && c.darker,
            ),
            p = (0, r.filterDataProps)(this.props),
            g = this.props.style
              ? { ...this._createStyles(), ...this.props.style }
              : this._createStyles();
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              a.SlotContext.Provider,
              { value: this._manager },
              d &&
                i.createElement("div", {
                  onClick: this.props.onClickBackdrop,
                  className: c.backdrop,
                }),
              i.createElement(
                "div",
                {
                  ...p,
                  className: h,
                  style: g,
                  ref: this.props.reference,
                  onFocus: this.props.onFocus,
                  onMouseDown: this.props.onMouseDown,
                  onMouseUp: this.props.onMouseUp,
                  onClick: this.props.onClick,
                  onKeyDown: this.props.onKeyDown,
                  tabIndex: u,
                  "aria-label": this.props.containerAriaLabel,
                },
                this.props.children,
              ),
            ),
            i.createElement(a.Slot, { reference: this._handleSlot }),
          );
        }
        _createStyles() {
          const {
            bottom: e,
            left: t,
            width: n,
            right: i,
            top: o,
            zIndex: s,
            height: a,
          } = this.props;
          return {
            bottom: e,
            left: t,
            right: i,
            top: o,
            zIndex: s,
            maxWidth: n,
            height: a,
          };
        }
      }
      var u,
        h = n(86431),
        p = n(52778),
        g = n(9859),
        m = n(19291);
      function _(e, t, n, i) {
        return e + t > i && (e = i - t), e < n && (e = n), e;
      }
      function f(e) {
        return {
          x: (0, g.clamp)(e.x, 20, document.documentElement.clientWidth - 20),
          y: (0, g.clamp)(e.y, 20, window.innerHeight - 20),
        };
      }
      function v(e) {
        return { x: e.clientX, y: e.clientY };
      }
      function b(e) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      !(function (e) {
        e[(e.MouseGuardZone = 20)] = "MouseGuardZone";
      })(u || (u = {}));
      class y {
        constructor(e, t, n = { boundByScreen: !0 }) {
          (this._drag = null),
            (this._canBeTouchClick = !1),
            (this._frame = null),
            (this._onMouseDragStart = (e) => {
              if (0 !== e.button || this._isTargetNoDraggable(e)) return;
              e.preventDefault(),
                document.addEventListener("mousemove", this._onMouseDragMove),
                document.addEventListener("mouseup", this._onMouseDragEnd);
              const t = f(v(e));
              this._dragStart(t);
            }),
            (this._onTouchDragStart = (e) => {
              if (this._isTargetNoDraggable(e)) return;
              (this._canBeTouchClick = !0),
                e.preventDefault(),
                this._header.addEventListener(
                  "touchmove",
                  this._onTouchDragMove,
                  { passive: !1 },
                );
              const t = f(b(e));
              this._dragStart(t);
            }),
            (this._onMouseDragEnd = (e) => {
              e.target instanceof Node &&
                this._header.contains(e.target) &&
                e.preventDefault(),
                document.removeEventListener(
                  "mousemove",
                  this._onMouseDragMove,
                ),
                document.removeEventListener("mouseup", this._onMouseDragEnd),
                this._onDragStop();
            }),
            (this._onTouchDragEnd = (e) => {
              this._header.removeEventListener(
                "touchmove",
                this._onTouchDragMove,
              ),
                this._onDragStop(),
                this._canBeTouchClick &&
                  ((this._canBeTouchClick = !1),
                  (function (e) {
                    if (e instanceof SVGElement) {
                      const t = document.createEvent("SVGEvents");
                      t.initEvent("click", !0, !0), e.dispatchEvent(t);
                    }
                    e instanceof HTMLElement && e.click();
                  })(e.target));
            }),
            (this._onMouseDragMove = (e) => {
              const t = f(v(e));
              this._dragMove(t);
            }),
            (this._onTouchDragMove = (e) => {
              (this._canBeTouchClick = !1), e.preventDefault();
              const t = f(b(e));
              this._dragMove(t);
            }),
            (this._onDragStop = () => {
              (this._drag = null),
                this._header.classList.remove("dragging"),
                this._options.onDragEnd && this._options.onDragEnd();
            }),
            (this._dialog = e),
            (this._header = t),
            (this._options = n),
            this._header.addEventListener("mousedown", this._onMouseDragStart),
            this._header.addEventListener("touchstart", this._onTouchDragStart),
            this._header.addEventListener("touchend", this._onTouchDragEnd);
        }
        destroy() {
          null !== this._frame && cancelAnimationFrame(this._frame),
            this._header.removeEventListener(
              "mousedown",
              this._onMouseDragStart,
            ),
            document.removeEventListener("mouseup", this._onMouseDragEnd),
            this._header.removeEventListener(
              "touchstart",
              this._onTouchDragStart,
            ),
            this._header.removeEventListener("touchend", this._onTouchDragEnd),
            document.removeEventListener("mouseleave", this._onMouseDragEnd);
        }
        updateOptions(e) {
          this._options = e;
        }
        _dragStart(e) {
          const t = this._dialog.getBoundingClientRect();
          this._drag = {
            startX: e.x,
            startY: e.y,
            finishX: e.x,
            finishY: e.y,
            dialogX: t.left,
            dialogY: t.top,
          };
          const n = Math.round(t.left),
            i = Math.round(t.top);
          (this._dialog.style.transform = `translate(${n}px, ${i}px)`),
            this._header.classList.add("dragging"),
            this._options.onDragStart && this._options.onDragStart();
        }
        _dragMove(e) {
          if (this._drag) {
            if (
              ((this._drag.finishX = e.x),
              (this._drag.finishY = e.y),
              null !== this._frame)
            )
              return;
            this._frame = requestAnimationFrame(() => {
              if (this._drag) {
                const t = e.x - this._drag.startX,
                  n = e.y - this._drag.startY;
                this._moveDialog(
                  this._drag.dialogX + t,
                  this._drag.dialogY + n,
                );
              }
              this._frame = null;
            });
          }
        }
        _moveDialog(e, t) {
          const n = this._dialog.getBoundingClientRect(),
            { boundByScreen: i } = this._options,
            o = _(e, n.width, i ? 0 : -1 / 0, i ? window.innerWidth : 1 / 0),
            s = _(t, n.height, i ? 0 : -1 / 0, i ? window.innerHeight : 1 / 0);
          this._dialog.style.transform = `translate(${Math.round(o)}px, ${Math.round(s)}px)`;
        }
        _isTargetNoDraggable(e) {
          return (
            e.target instanceof Element &&
            null !== e.target.closest("[data-disable-drag]")
          );
        }
      }
      const E = { vertical: 0 };
      var x,
        D = n(42842),
        S = n(95711),
        C = n(99054),
        w = n(31955),
        F = n(92184);
      !(function (e) {
        (e.Open = "dialog-open"),
          (e.Close = "dialog-close"),
          (e.FullscreenOn = "dialog-fullscreen-on"),
          (e.FullscreenOff = "dialog-fullscreen-off");
      })(x || (x = {}));
      const T = (0, w.getLogger)("DialogEventDispatcher");
      class A {
        constructor() {
          this._openSessionId = null;
        }
        dispatch(e) {
          if ("dialog-open" === e) {
            if (null !== this._openSessionId)
              return void T.logError("Multiple calls to open dialog");
            this._openSessionId = (0, F.randomHash)();
          }
          null !== this._openSessionId
            ? (window.dispatchEvent(
                new CustomEvent(e, {
                  bubbles: !0,
                  detail: { dialogSessionId: this._openSessionId },
                }),
              ),
              "dialog-close" === e && (this._openSessionId = null))
            : T.logError("Empty open dialog session id");
        }
      }
      var M = n(84015),
        P = (n(56570), n(52036));
      P["tooltip-offset"];
      const N = class {
        constructor(e, t) {
          (this._frame = null),
            (this._isFullscreen = !1),
            (this._handleResize = () => {
              null === this._frame &&
                (this._frame = requestAnimationFrame(() => {
                  this.recalculateBounds(), (this._frame = null);
                }));
            }),
            (this._dialog = e),
            (this._guard = t.guard || E),
            (this._calculateDialogPosition = t.calculateDialogPosition),
            (this._initialHeight = e.style.height),
            window.addEventListener("resize", this._handleResize);
        }
        updateOptions(e) {
          (this._guard = e.guard || E),
            (this._calculateDialogPosition = e.calculateDialogPosition);
        }
        setFullscreen(e) {
          this._isFullscreen !== e &&
            ((this._isFullscreen = e), this.recalculateBounds());
        }
        centerAndFit() {
          const { x: e, y: t } = this.getDialogsTopLeftCoordinates(),
            n = this._calcAvailableHeight(),
            i = this._calcDialogHeight();
          if (n === i)
            if (this._calculateDialogPosition) {
              const { left: e, top: t } = this._calculateDialogPosition(
                this._dialog,
                document.documentElement,
                this._guard,
              );
              this._dialog.style.transform = `translate(${Math.round(e)}px, ${Math.round(t)}px)`;
            } else this._dialog.style.height = i + "px";
          (this._dialog.style.top = "0px"),
            (this._dialog.style.left = "0px"),
            (this._dialog.style.transform = `translate(${e}px, ${t}px)`);
        }
        getDialogsTopLeftCoordinates() {
          const { clientWidth: e, clientHeight: t } =
              this._getClientDimensions(),
            n = this._calcDialogHeight(),
            i = e / 2 - this._dialog.clientWidth / 2,
            o = t / 2 - n / 2 + this._getTopOffset();
          return { x: Math.round(i), y: Math.round(o) };
        }
        recalculateBounds() {
          var e;
          const { clientWidth: t, clientHeight: n } =
              this._getClientDimensions(),
            { vertical: i } = this._guard,
            o =
              null === (e = this._calculateDialogPosition) || void 0 === e
                ? void 0
                : e.call(
                    this,
                    this._dialog,
                    { clientWidth: t, clientHeight: n },
                    { vertical: i },
                  );
          if (this._isFullscreen) {
            if (
              ((this._dialog.style.top = "0px"),
              (this._dialog.style.left = "0px"),
              (this._dialog.style.width = "100%"),
              (this._dialog.style.height = "100%"),
              (this._dialog.style.transform = "none"),
              o)
            ) {
              const { left: e, top: t, width: n, height: i } = o;
              (this._dialog.style.transform = `translate(${Math.round(e)}px, ${Math.round(t)}px)`),
                n &&
                  ((this._dialog.style.width = `${n}px`),
                  (this._dialog.style.minWidth = "unset")),
                i &&
                  ((this._dialog.style.height = `${i}px`),
                  (this._dialog.style.minHeight = "unset"));
            }
          } else if (o) {
            const { left: e, top: t } = o;
            this._dialog.style.transform = `translate(${Math.round(e)}px, ${Math.round(t)}px)`;
          } else {
            (this._dialog.style.width = ""), (this._dialog.style.height = "");
            const e = this._dialog.getBoundingClientRect(),
              o = n - 2 * i,
              s = _(e.left, e.width, 0, t),
              a = _(e.top, e.height, i, n);
            (this._dialog.style.top = "0px"),
              (this._dialog.style.left = "0px"),
              (this._dialog.style.transform = `translate(${Math.round(s)}px, ${Math.round(a)}px)`),
              (this._dialog.style.height =
                o < e.height ? o + "px" : this._initialHeight);
          }
        }
        destroy() {
          window.removeEventListener("resize", this._handleResize),
            null !== this._frame &&
              (cancelAnimationFrame(this._frame), (this._frame = null));
        }
        _getClientDimensions() {
          return {
            clientHeight: document.documentElement.clientHeight,
            clientWidth: document.documentElement.clientWidth,
          };
        }
        _getTopOffset() {
          return 0;
        }
        _calcDialogHeight() {
          const e = this._calcAvailableHeight();
          return e < this._dialog.clientHeight ? e : this._dialog.clientHeight;
        }
        _calcAvailableHeight() {
          return (
            this._getClientDimensions().clientHeight - 2 * this._guard.vertical
          );
        }
      };
      class I extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._dialog = null),
            (this._cleanUpFunctions = []),
            (this._prevActiveElement = null),
            (this._eventDispatcher = new A()),
            (this._handleDialogRef = (e) => {
              const { reference: t } = this.props;
              (this._dialog = e), "function" == typeof t && t(e);
            }),
            (this._handleFocus = () => {
              this._moveToTop();
            }),
            (this._handleMouseDown = (e) => {
              this._moveToTop();
            }),
            (this._handleTouchStart = (e) => {
              this._moveToTop();
            }),
            (this.state = { canFitTooltip: !1 }),
            (this._prevActiveElement = document.activeElement);
        }
        render() {
          return i.createElement(
            S.PopupContext.Provider,
            { value: this },
            i.createElement(
              p.OutsideEvent,
              {
                mouseDown: !0,
                touchStart: !0,
                handler: this.props.onClickOutside,
              },
              (e) =>
                i.createElement(
                  "div",
                  {
                    ref: e,
                    "data-outside-boundary-for": this.props.name,
                    onFocus: this._handleFocus,
                    onMouseDown: this._handleMouseDown,
                    onTouchStart: this._handleTouchStart,
                    "data-dialog-name": this.props["data-dialog-name"],
                  },
                  i.createElement(
                    d,
                    {
                      style: this._applyAnimationCSSVariables(),
                      ...this.props,
                      reference: this._handleDialogRef,
                      className: o(
                        P.dialog,
                        (0, M.isOnMobileAppPage)("any") &&
                          !this.props.noMobileAppShadows &&
                          P.mobile,
                        this.props.fullscreen && P.fullscreen,
                        this.props.className,
                      ),
                    },
                    !1,
                    this.props.children,
                  ),
                ),
            ),
          );
        }
        componentDidMount() {
          const { draggable: e, boundByScreen: t, onDragStart: n } = this.props,
            i = (0, s.ensureNotNull)(this._dialog);
          if ((this._eventDispatcher.dispatch("dialog-open"), e)) {
            const e = i.querySelector("[data-dragg-area]");
            if (e && e instanceof HTMLElement) {
              const o = new y(i, e, {
                boundByScreen: Boolean(t),
                onDragStart: n,
              });
              this._cleanUpFunctions.push(() => o.destroy()), (this._drag = o);
            }
          }
          this.props.autofocus &&
            !i.contains(document.activeElement) &&
            i.focus(),
            (this._isFullScreen() || this.props.fixedBody) &&
              (0, C.setFixedBodyState)(!0);
          const { guard: o, calculateDialogPosition: a } = this.props;
          if (this.props.resizeHandler) this._resize = this.props.resizeHandler;
          else {
            const e = new N(i, { guard: o, calculateDialogPosition: a });
            this._cleanUpFunctions.push(() => e.destroy()), (this._resize = e);
          }
          if (
            (this._isFullScreen() &&
              this._eventDispatcher.dispatch("dialog-fullscreen-on"),
            this.props.isAnimationEnabled &&
              this.props.growPoint &&
              this._applyAppearanceAnimation(this.props.growPoint),
            this.props.centeredOnMount && this._resize.centerAndFit(),
            this._resize.setFullscreen(this._isFullScreen()),
            this.props.shouldForceFocus)
          ) {
            if (this.props.onForceFocus) return void this.props.onForceFocus(i);
            i.focus();
          }
          if (!i.contains(document.activeElement)) {
            const e = (function (e) {
              const t = e.querySelector("[autofocus]:not([disabled])");
              if (t) return t;
              if (e.tabIndex >= 0) return e;
              const n = (0, m.getActiveElementSelectors)(),
                i = Array.from(e.querySelectorAll(n)).filter(
                  (0, m.createScopedVisibleElementFilter)(e),
                );
              let o = Number.NEGATIVE_INFINITY,
                s = null;
              for (let e = 0; e < i.length; e++) {
                const t = i[e],
                  n = t.getAttribute("tabindex");
                if (null !== n) {
                  const e = parseInt(n, 10);
                  !isNaN(e) && e > o && ((o = e), (s = t));
                }
              }
              return s;
            })(i);
            e instanceof HTMLElement && e.focus();
          }
        }
        componentDidUpdate(e) {
          const t = e.fullscreen;
          if (this._resize) {
            const { guard: e, calculateDialogPosition: t } = this.props;
            this._resize.updateOptions({
              guard: e,
              calculateDialogPosition: t,
            }),
              this._resize.setFullscreen(this._isFullScreen());
          }
          if (
            (this._drag &&
              this._drag.updateOptions({
                boundByScreen: Boolean(this.props.boundByScreen),
                onDragStart: this.props.onDragStart,
              }),
            e.fullscreen !== this.props.fullscreen)
          ) {
            const e = this.props.fullscreen;
            e && !t
              ? this._eventDispatcher.dispatch("dialog-fullscreen-on")
              : !e &&
                t &&
                this._eventDispatcher.dispatch("dialog-fullscreen-off");
          }
        }
        componentWillUnmount() {
          var e;
          if (
            this.props.shouldReturnFocus &&
            this._prevActiveElement &&
            document.body.contains(this._prevActiveElement) &&
            (null === document.activeElement ||
              document.activeElement === document.body ||
              (null === (e = this._dialog) || void 0 === e
                ? void 0
                : e.contains(document.activeElement)))
          )
            try {
              setTimeout(() => {
                this._prevActiveElement.focus({ preventScroll: !0 });
              });
            } catch (e) {}
          for (const e of this._cleanUpFunctions) e();
          (this._isFullScreen() || this.props.fixedBody) &&
            (0, C.setFixedBodyState)(!1),
            this._isFullScreen() &&
              this._eventDispatcher.dispatch("dialog-fullscreen-off"),
            this._eventDispatcher.dispatch("dialog-close");
        }
        focus() {
          this._dialog && this._dialog.focus();
        }
        centerAndFit() {
          this._resize && this._resize.centerAndFit();
        }
        recalculateBounds() {
          this._resize && this._resize.recalculateBounds();
        }
        _moveToTop() {
          null !== this.context && this.context.moveToTop();
        }
        _applyAnimationCSSVariables() {
          return {
            "--animationTranslateStartX": null,
            "--animationTranslateStartY": null,
            "--animationTranslateEndX": null,
            "--animationTranslateEndY": null,
          };
        }
        _applyAppearanceAnimation(e) {
          if (this._resize && this._dialog) {
            const { x: t, y: n } = e,
              { x: i, y: o } = this._resize.getDialogsTopLeftCoordinates();
            this._dialog.style.setProperty(
              "--animationTranslateStartX",
              `${t}px`,
            ),
              this._dialog.style.setProperty(
                "--animationTranslateStartY",
                `${n}px`,
              ),
              this._dialog.style.setProperty(
                "--animationTranslateEndX",
                `${i}px`,
              ),
              this._dialog.style.setProperty(
                "--animationTranslateEndY",
                `${o}px`,
              ),
              this._dialog.classList.add(P.dialogAnimatedAppearance);
          }
        }
        _handleTooltipFit() {
          0;
        }
        _isFullScreen() {
          return Boolean(this.props.fullscreen);
        }
      }
      (I.contextType = D.PortalContext),
        (I.defaultProps = {
          boundByScreen: !0,
          draggable: !0,
          centeredOnMount: !0,
          shouldReturnFocus: !0,
        });
      const O = (0, h.makeOverlapable)(I, !0);
    },
    59054: (e, t, n) => {
      "use strict";
      n.d(t, { ControlDisclosureView: () => _ });
      var i = n(50959),
        o = n(97754),
        s = n.n(o),
        a = n(38528),
        l = n(67029),
        r = n(78274),
        c = n(4523),
        d = n(9745),
        u = n(2948),
        h = n(40352);
      function p(e) {
        const { isDropped: t } = e;
        return i.createElement(d.Icon, {
          className: s()(h.icon, t && h.dropped),
          icon: u,
        });
      }
      function g(e) {
        const { className: t, disabled: n, isDropped: o } = e;
        return i.createElement(
          "span",
          { className: s()(h.button, n && h.disabled, t) },
          i.createElement(p, { isDropped: o }),
        );
      }
      var m = n(44620);
      const _ = i.forwardRef((e, t) => {
        const {
            listboxId: n,
            className: o,
            listboxClassName: d,
            listboxTabIndex: u,
            hideArrowButton: h,
            matchButtonAndListboxWidths: p,
            popupPosition: _,
            disabled: f,
            isOpened: v,
            scrollWrapReference: b,
            repositionOnScroll: y,
            closeOnHeaderOverlap: E,
            listboxReference: x,
            size: D = "small",
            onClose: S,
            onOpen: C,
            onListboxFocus: w,
            onListboxBlur: F,
            onListboxKeyDown: T,
            buttonChildren: A,
            children: M,
            caretClassName: P,
            buttonContainerClassName: N,
            listboxAria: I,
            ...O
          } = e,
          k = (0, i.useRef)(null),
          L =
            !h &&
            i.createElement(
              r.EndSlot,
              null,
              i.createElement(g, { isDropped: v, disabled: f, className: P }),
            );
        return i.createElement(c.PopupMenuDisclosureView, {
          buttonRef: k,
          listboxId: n,
          listboxClassName: d,
          listboxTabIndex: u,
          isOpened: v,
          onClose: S,
          onOpen: C,
          listboxReference: x,
          scrollWrapReference: b,
          onListboxFocus: w,
          onListboxBlur: F,
          onListboxKeyDown: T,
          listboxAria: I,
          matchButtonAndListboxWidths: p,
          popupPosition: _,
          button: i.createElement(l.ControlSkeleton, {
            ...O,
            "data-role": "listbox",
            disabled: f,
            className: s()(m.button, o),
            size: D,
            ref: (0, a.useMergedRefs)([k, t]),
            middleSlot: i.createElement(
              r.MiddleSlot,
              null,
              i.createElement(
                "span",
                { className: s()(m["button-children"], h && m.hiddenArrow, N) },
                A,
              ),
            ),
            endSlot: L,
          }),
          popupChildren: M,
          repositionOnScroll: y,
          closeOnHeaderOverlap: E,
        });
      });
      _.displayName = "ControlDisclosureView";
    },
    90405: (e, t, n) => {
      "use strict";
      n.d(t, { Select: () => y });
      var i = n(50959),
        o = n(43010),
        s = n(22064),
        a = n(38528),
        l = n(16921),
        r = n(16396),
        c = n(12481),
        d = n(43370);
      var u = n(36762),
        h = n(26597),
        p = n(59054),
        g = n(36104),
        m = n(63273),
        _ = n(70369);
      function f(e) {
        return !e.readonly;
      }
      function v(e, t) {
        var n;
        return null !== (n = null == t ? void 0 : t.id) && void 0 !== n
          ? n
          : (0, s.createDomId)(e, "item", null == t ? void 0 : t.value);
      }
      function b(e) {
        var t, n;
        const { selectedItem: o, placeholder: s } = e;
        if (!o) return i.createElement("span", { className: _.placeholder }, s);
        const a =
          null !==
            (n =
              null !== (t = o.selectedContent) && void 0 !== t
                ? t
                : o.content) && void 0 !== n
            ? n
            : o.value;
        return i.createElement("span", null, a);
      }
      const y = i.forwardRef((e, t) => {
        const {
          id: n,
          menuClassName: _,
          menuItemClassName: y,
          tabIndex: E,
          disabled: x,
          highlight: D,
          intent: S,
          hideArrowButton: C,
          placeholder: w,
          addPlaceholderToItems: F = !1,
          value: T,
          "aria-labelledby": A,
          onFocus: M,
          onBlur: P,
          onClick: N,
          onChange: I,
          onKeyDown: O,
          repositionOnScroll: k = !0,
          openMenuOnEnter: L = !0,
          "aria-describedby": R,
          "aria-invalid": B,
          ...H
        } = e;
        let { items: W } = e;
        if (w && F) {
          W = [
            {
              value: void 0,
              content: w,
              id: (0, s.createDomId)(n, "placeholder"),
            },
            ...W,
          ];
        }
        const {
            listboxId: z,
            isOpened: $,
            isFocused: V,
            buttonTabIndex: Y,
            listboxTabIndex: K,
            highlight: X,
            intent: U,
            open: q,
            onOpen: G,
            close: Z,
            toggle: j,
            buttonFocusBindings: J,
            onButtonClick: Q,
            buttonRef: ee,
            listboxRef: te,
            buttonAria: ne,
          } = (0, g.useControlDisclosure)({
            id: n,
            disabled: x,
            buttonTabIndex: E,
            intent: S,
            highlight: D,
            onFocus: M,
            onBlur: P,
            onClick: N,
          }),
          ie = W.filter(f),
          oe = ie.find((e) => e.value === T),
          [se, ae] = i.useState(
            w && F ? ie[0].value : null == oe ? void 0 : oe.value,
          ),
          [le, re, ce] = (0, l.useKeepActiveItemIntoView)({ activeItem: oe });
        (0, o.useIsomorphicLayoutEffect)(
          () => ae(null == oe ? void 0 : oe.value),
          [T],
        );
        const de = (0, s.joinDomIds)(A, n),
          ue = de.length > 0 ? de : void 0,
          he = (0, i.useMemo)(
            () => ({
              role: "listbox",
              "aria-labelledby": A,
              "aria-activedescendant": v(n, oe),
            }),
            [A, oe],
          ),
          pe = (0, i.useCallback)((e) => e.value === se, [se]),
          ge = (0, i.useCallback)(() => (Z(), I && I(se)), [Z, I, se]),
          me = (0, u.useItemsKeyboardNavigation)(
            "vertical",
            m.isRtl,
            ie,
            pe,
            (e) => {
              ae(e.value);
            },
            !1,
            { next: [40], previous: [38] },
          ),
          _e = (0, h.useKeyboardToggle)(j, $ || L),
          fe = (0, h.useKeyboardToggle)(ge),
          ve = (0, h.useKeyboardClose)($, Se),
          be = (0, h.useKeyboardOpen)($, q),
          ye = (0, h.useKeyboardEventHandler)([_e, ve, be]),
          Ee = (0, h.useKeyboardEventHandler)([me, fe, ve]),
          xe = (function (e) {
            const t = (0, i.useRef)(""),
              n = (0, i.useMemo)(
                () =>
                  (0, c.default)(() => {
                    t.current = "";
                  }, 500),
                [],
              ),
              o = (0, i.useMemo)(() => (0, d.default)(e, 200), [e]);
            return (0, i.useCallback)(
              (e) => {
                e.key.length > 0 &&
                  e.key.length < 3 &&
                  ((t.current += e.key), o(t.current, e), n());
              },
              [n, o],
            );
          })((t, n) => {
            const i = (function (e, t, n) {
              return e.find((e) => {
                var i;
                const o = t.toLowerCase();
                return (
                  !e.readonly &&
                  (n
                    ? n(e).toLowerCase().startsWith(o)
                    : !e.readonly &&
                      (("string" == typeof e.content &&
                        e.content.toLowerCase().startsWith(o)) ||
                        ("string" == typeof e.textContent &&
                          e.textContent.toLowerCase().startsWith(o)) ||
                        String(null !== (i = e.value) && void 0 !== i ? i : "")
                          .toLowerCase()
                          .startsWith(o)))
                );
              });
            })(ie, t, e.getSearchKey);
            void 0 !== i && I && (n.stopPropagation(), $ || q(), I(i.value));
          });
        return i.createElement(
          p.ControlDisclosureView,
          {
            ...H,
            ...ne,
            ...J,
            id: n,
            role: "button",
            tabIndex: Y,
            "aria-owns": ne["aria-controls"],
            "aria-haspopup": "listbox",
            "aria-labelledby": ue,
            disabled: x,
            hideArrowButton: C,
            isFocused: V,
            isOpened: $,
            highlight: X,
            intent: U,
            ref: (0, a.useMergedRefs)([ee, t]),
            onClick: Q,
            onOpen: function () {
              ce(oe, { duration: 0 }), G();
            },
            onClose: Se,
            onKeyDown: function (e) {
              ye(e), O && O(e);
              e.defaultPrevented || xe(e);
            },
            listboxId: z,
            listboxTabIndex: K,
            listboxClassName: _,
            listboxAria: he,
            "aria-describedby": R,
            "aria-invalid": B,
            listboxReference: te,
            scrollWrapReference: le,
            onListboxKeyDown: function (e) {
              Ee(e), e.defaultPrevented || xe(e);
            },
            buttonChildren: i.createElement(b, {
              selectedItem: null != oe ? oe : null,
              placeholder: w,
            }),
            repositionOnScroll: k,
          },
          W.map((e, t) => {
            var o;
            if (e.readonly)
              return i.createElement(
                i.Fragment,
                {
                  key: `readonly_item_${t}`,
                },
                e.content,
              );
            const s = v(n, e);
            return i.createElement(r.PopupMenuItem, {
              key: s,
              id: s,
              className: y,
              role: "option",
              "aria-selected": T === e.value,
              isActive: se === e.value,
              label: null !== (o = e.content) && void 0 !== o ? o : e.value,
              onClick: De,
              onClickArg: e.value,
              isDisabled: e.disabled,
              reference: (t) => re(e, t),
            });
          }),
        );
        function De(e) {
          I && (I(e), ae(e));
        }
        function Se() {
          ae(null == oe ? void 0 : oe.value), Z();
        }
      });
      y.displayName = "Select";
    },
    86431: (e, t, n) => {
      "use strict";
      n.d(t, { makeOverlapable: () => s });
      var i = n(50959),
        o = n(42842);
      function s(e, t) {
        return class extends i.PureComponent {
          render() {
            const { isOpened: n, root: s } = this.props;
            if (!n) return null;
            const a = i.createElement(e, { ...this.props, zIndex: 150 });
            return "parent" === s
              ? a
              : i.createElement(o.Portal, { shouldTrapFocus: t }, a);
          }
        };
      }
    },
    19715: (e) => {
      e.exports = {
        scrollable: "scrollable-P78dPRF5",
        content: "content-P78dPRF5",
        row: "row-P78dPRF5",
        title: "title-P78dPRF5",
        control: "control-P78dPRF5",
        inputWrap: "inputWrap-P78dPRF5",
        intervalsDesktopDialog: "intervalsDesktopDialog-P78dPRF5",
      };
    },
    42014: (e, t, n) => {
      "use strict";
      n.d(t, { INTERVALS: () => o });
      var i = n(11542);
      const o = [
        { name: "", label: i.t(null, { context: "interval" }, n(79930)) },
        { name: "H", label: i.t(null, { context: "interval" }, n(35157)) },
        { name: "D", label: i.t(null, { context: "interval" }, n(23970)) },
        { name: "W", label: i.t(null, { context: "interval" }, n(7938)) },
        { name: "M", label: i.t(null, { context: "interval" }, n(18193)) },
      ];
    },
    17891: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { ToolWidgetIntervalsAddDialog: () => f });
      var i = n(50959),
        o = n(32563),
        s = n(11542),
        a = n(50182),
        l = n(90405),
        r = n(86623),
        c = n(59064),
        d = n(86656),
        u = n(42014),
        h = n(10074),
        p = n(19715);
      const g = u.INTERVALS.map((e) => ({ value: e.name, content: e.label }));
      var m;
      !(function (e) {
        (e.Invalid = "invalid"), (e.AlreadyExists = "already_exists");
      })(m || (m = {}));
      const _ = {
        invalid: s.t(null, void 0, n(23323)),
        already_exists: s.t(null, void 0, n(17889)),
      };
      function f(e) {
        const {
            onAdd: t,
            onClose: m,
            onUnmount: f,
            intervalService: v,
            isSmallTablet: b,
          } = e,
          [y, E] = (0, i.useState)(u.INTERVALS[0].name),
          [x, D] = (0, i.useState)(""),
          [S, C] = (0, i.useState)(null),
          w = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
          var e;
          return (
            o.touch || null === (e = w.current) || void 0 === e || e.focus(),
            () => {
              f && f();
            }
          );
        }, []);
        const F = (0, i.useCallback)(() => !0, []);
        return i.createElement(a.AdaptiveConfirmDialog, {
          dataName: "add-custom-interval-dialog",
          title: s.t(null, void 0, n(80335)),
          className: b ? void 0 : p.intervalsDesktopDialog,
          isOpened: !0,
          onSubmit: function () {
            if (!P(y, x)) return;
            t(x, y), m();
          },
          onCancel: m,
          onClickOutside: m,
          onClose: m,
          render: () =>
            i.createElement(
              d.TouchScrollContainer,
              { className: p.scrollable, onScroll: A },
              i.createElement(
                "div",
                { className: p.content },
                i.createElement(
                  "div",
                  { className: p.row },
                  i.createElement(
                    "div",
                    { className: p.title },
                    s.t(null, void 0, n(98413)),
                  ),
                  i.createElement(l.Select, {
                    id: "metric-items",
                    className: p.control,
                    value: y,
                    items: g,
                    onChange: M,
                  }),
                ),
                i.createElement(
                  "div",
                  { className: p.row },
                  i.createElement(
                    "div",
                    { className: p.title },
                    s.t(null, void 0, n(17854)),
                  ),
                  i.createElement(
                    "div",
                    { className: p.inputWrap },
                    i.createElement(r.FormInput, {
                      className: p.control,
                      inputMode: "numeric",
                      maxLength: 6,
                      reference: w,
                      value: x,
                      onChange: T,
                      hasErrors: null !== S,
                      errors: null === S ? void 0 : [_[S]],
                      iconHidden: !0,
                    }),
                  ),
                ),
              ),
            ),
          defaultActionOnClose: "none",
          submitButtonText: s.t(null, void 0, n(42790)),
          submitOnEnterKey: !0,
          forceCloseOnEsc: F,
          submitButtonDisabled: !Number(x) || null !== S,
          backdrop: !0,
        });
        function T(e) {
          const { value: t } = e.currentTarget;
          /^[0-9]*$/.test(t) && (D(t), P(y, t));
        }
        function A() {
          c.globalCloseDelegate.fire();
        }
        function M(e) {
          E(e), P(e, x);
        }
        function P(e, t) {
          if (!Number(t)) return C(null), !0;
          if (!v.isValidInterval(t, e)) return C("invalid"), !1;
          const n = (0, h.normalizeIntervalString)(`${t}${e}`),
            i = v.getCustomIntervals();
          return v.getDefaultIntervals().includes(n) || i.includes(n)
            ? (C("already_exists"), !1)
            : (C(null), !0);
        }
      }
    },
  },
]);
