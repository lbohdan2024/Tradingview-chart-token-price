(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [6631],
  {
    74786: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => s });
      const s = function () {};
    },
    57723: (e) => {
      e.exports = {
        wrapper: "wrapper-GZajBGIm",
        input: "input-GZajBGIm",
        view: "view-GZajBGIm",
        danger: "danger-GZajBGIm",
      };
    },
    31542: (e) => {
      e.exports = {
        box: "box-ywH2tsV_",
        noOutline: "noOutline-ywH2tsV_",
        disabled: "disabled-ywH2tsV_",
        "intent-danger": "intent-danger-ywH2tsV_",
        checked: "checked-ywH2tsV_",
        check: "check-ywH2tsV_",
        icon: "icon-ywH2tsV_",
        dot: "dot-ywH2tsV_",
        disableActiveStyles: "disableActiveStyles-ywH2tsV_",
      };
    },
    22306: (e) => {
      e.exports = {
        checkbox: "checkbox-vyj6oJxw",
        reverse: "reverse-vyj6oJxw",
        label: "label-vyj6oJxw",
        baseline: "baseline-vyj6oJxw",
      };
    },
    60903: (e) => {
      e.exports = {
        "small-height-breakpoint": "screen and (max-height: 360px)",
        footer: "footer-PhMf7PhQ",
        submitButton: "submitButton-PhMf7PhQ",
        buttons: "buttons-PhMf7PhQ",
      };
    },
    8473: (e) => {
      e.exports = {
        dialog: "dialog-b8SxMnzX",
        wrapper: "wrapper-b8SxMnzX",
        separator: "separator-b8SxMnzX",
        bounded: "bounded-b8SxMnzX",
      };
    },
    80822: (e) => {
      e.exports = {
        "small-height-breakpoint": "screen and (max-height: 360px)",
        container: "container-BZKENkhT",
        unsetAlign: "unsetAlign-BZKENkhT",
        title: "title-BZKENkhT",
        subtitle: "subtitle-BZKENkhT",
        textWrap: "textWrap-BZKENkhT",
        ellipsis: "ellipsis-BZKENkhT",
        close: "close-BZKENkhT",
        icon: "icon-BZKENkhT",
      };
    },
    47625: (e) => {
      e.exports = { separator: "separator-Pf4rIzEt" };
    },
    57340: (e, t, n) => {
      "use strict";
      n.d(t, { CloseButton: () => d });
      var s = n(50959),
        o = n(64388),
        i = n(17105),
        a = n(15130),
        r = n(38822),
        l = n(63346),
        c = n(34983);
      function u(e = "large") {
        switch (e) {
          case "large":
            return i;
          case "medium":
          default:
            return a;
          case "small":
            return r;
          case "xsmall":
            return l;
          case "xxsmall":
            return c;
        }
      }
      const d = s.forwardRef((e, t) =>
        s.createElement(o.NavButton, { ...e, ref: t, icon: u(e.size) }),
      );
    },
    70673: (e, t, n) => {
      "use strict";
      n.d(t, { CheckboxInput: () => c });
      var s = n(50959),
        o = n(97754),
        i = n(90186),
        a = n(5811),
        r = n(57723),
        l = n.n(r);
      function c(e) {
        const t = o(l().wrapper, e.className);
        return s.createElement(
          "span",
          { className: t, title: e.title, style: e.style },
          s.createElement("input", {
            id: e.id,
            tabIndex: e.tabIndex,
            className: o(e.intent && l()[e.intent], l().input),
            type: "checkbox",
            name: e.name,
            checked: e.checked,
            disabled: e.disabled,
            value: e.value,
            autoFocus: e.autoFocus,
            role: e.role,
            onChange: function () {
              var t;
              null === (t = e.onChange) || void 0 === t || t.call(e, e.value);
            },
            ref: e.reference,
            "aria-required": e["aria-required"],
            "aria-describedby": e["aria-describedby"],
            "aria-invalid": e["aria-invalid"],
            ...(0, i.filterDataProps)(e),
          }),
          s.createElement(a.CheckboxView, {
            className: l().view,
            indeterminate: e.indeterminate,
            checked: e.checked,
            disabled: e.disabled,
            intent: e.intent,
            tabIndex: e.tabIndex,
          }),
        );
      }
    },
    5811: (e, t, n) => {
      "use strict";
      n.d(t, { CheckboxView: () => c });
      var s = n(50959),
        o = n(97754),
        i = n(9745),
        a = n(65890),
        r = n(31542),
        l = n.n(r);
      function c(e) {
        const {
            indeterminate: t,
            checked: n,
            tabIndex: r,
            className: c,
            disabled: u,
            disableActiveStyles: d,
            intent: h,
            hideIcon: p,
            ...m
          } = e,
          b = t || !n || p ? "" : a,
          v = o(
            l().box,
            l()[`intent-${h}`],
            !t && l().check,
            !!t && l().dot,
            -1 === r && l().noOutline,
            c,
            n && l().checked,
            u && l().disabled,
            d && l().disableActiveStyles,
          );
        return s.createElement(
          "span",
          { className: v, ...m },
          s.createElement(i.Icon, { icon: b, className: l().icon }),
        );
      }
    },
    15294: (e, t, n) => {
      "use strict";
      n.d(t, { Checkbox: () => c });
      var s = n(50959),
        o = n(97754),
        i = n(59416),
        a = n(70673),
        r = n(22306),
        l = n.n(r);
      class c extends s.PureComponent {
        render() {
          const { inputClassName: e, labelClassName: t, ...n } = this.props,
            i = o(this.props.className, l().checkbox, {
              [l().reverse]: Boolean(this.props.labelPositionReverse),
              [l().baseline]: Boolean(this.props.labelAlignBaseline),
            }),
            r = o(l().label, t, { [l().disabled]: this.props.disabled });
          let c = null;
          return (
            this.props.label &&
              (c = s.createElement(
                "span",
                { className: r, title: this.props.title },
                this.props.label,
              )),
            s.createElement(
              "label",
              { className: i },
              s.createElement(a.CheckboxInput, { ...n, className: e }),
              c,
            )
          );
        }
      }
      c.defaultProps = { value: "on" };
      (0, i.makeSwitchGroupItem)(c);
      n(5811);
    },
    39416: (e, t, n) => {
      "use strict";
      n.d(t, { useFunctionalRefObject: () => i });
      var s = n(50959),
        o = n(43010);
      function i(e) {
        const t = (0, s.useMemo)(
            () =>
              (function (e) {
                const t = (n) => {
                  e(n), (t.current = n);
                };
                return (t.current = null), t;
              })((e) => {
                r.current(e);
              }),
            [],
          ),
          n = (0, s.useRef)(null),
          i = (t) => {
            if (null === t) return a(n.current, t), void (n.current = null);
            n.current !== e && ((n.current = e), a(n.current, t));
          },
          r = (0, s.useRef)(i);
        return (
          (r.current = i),
          (0, o.useIsomorphicLayoutEffect)(() => {
            if (null !== t.current)
              return r.current(t.current), () => r.current(null);
          }, [e]),
          t
        );
      }
      function a(e, t) {
        null !== e && ("function" == typeof e ? e(t) : (e.current = t));
      }
    },
    59416: (e, t, n) => {
      "use strict";
      n.d(t, { SwitchGroup: () => a, makeSwitchGroupItem: () => r });
      var s = n(50959),
        o = n(74786);
      const i = (0, s.createContext)({
        getName: () => "",
        getValues: () => [],
        getOnChange: () => o.default,
        subscribe: o.default,
        unsubscribe: o.default,
      });
      class a extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._subscriptions = new Set()),
            (this._getName = () => this.props.name),
            (this._getValues = () => this.props.values),
            (this._getOnChange = () => this.props.onChange),
            (this._subscribe = (e) => {
              this._subscriptions.add(e);
            }),
            (this._unsubscribe = (e) => {
              this._subscriptions.delete(e);
            }),
            (this.state = {
              switchGroupContext: {
                getName: this._getName,
                getValues: this._getValues,
                getOnChange: this._getOnChange,
                subscribe: this._subscribe,
                unsubscribe: this._unsubscribe,
              },
            });
        }
        render() {
          return s.createElement(
            i.Provider,
            { value: this.state.switchGroupContext },
            this.props.children,
          );
        }
        componentDidUpdate(e) {
          this._notify(this._getUpdates(this.props.values, e.values));
        }
        _notify(e) {
          this._subscriptions.forEach((t) => t(e));
        }
        _getUpdates(e, t) {
          return [...t, ...e].filter((n) =>
            t.includes(n) ? !e.includes(n) : e.includes(n),
          );
        }
      }
      function r(e) {
        var t;
        return (
          (t = class extends s.PureComponent {
            constructor() {
              super(...arguments),
                (this._onChange = (e) => {
                  this.context.getOnChange()(e);
                }),
                (this._onUpdate = (e) => {
                  e.includes(this.props.value) && this.forceUpdate();
                });
            }
            componentDidMount() {
              this.context.subscribe(this._onUpdate);
            }
            render() {
              return s.createElement(e, {
                ...this.props,
                name: this._getName(),
                onChange: this._onChange,
                checked: this._isChecked(),
              });
            }
            componentWillUnmount() {
              this.context.unsubscribe(this._onUpdate);
            }
            _getName() {
              return this.context.getName();
            }
            _isChecked() {
              return this.context.getValues().includes(this.props.value);
            }
          }),
          (t.contextType = i),
          t
        );
      }
    },
    50182: (e, t, n) => {
      "use strict";
      n.d(t, { AdaptiveConfirmDialog: () => p });
      var s,
        o = n(50959),
        i = n(97754),
        a = n.n(i),
        r = n(94720),
        l = n(50151),
        c = n(11542),
        u = n(68335),
        d = n(79418),
        h = n(60903);
      !(function (e) {
        (e.Submit = "submit"), (e.Cancel = "cancel"), (e.None = "none");
      })(s || (s = {}));
      class p extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._dialogRef = o.createRef()),
            (this._handleClose = () => {
              const {
                defaultActionOnClose: e,
                onSubmit: t,
                onCancel: n,
                onClose: s,
              } = this.props;
              switch (e) {
                case "submit":
                  t();
                  break;
                case "cancel":
                  n();
              }
              s();
            }),
            (this._handleCancel = () => {
              this.props.onCancel(), this.props.onClose();
            }),
            (this._handleKeyDown = (e) => {
              const {
                onSubmit: t,
                submitButtonDisabled: n,
                submitOnEnterKey: s,
              } = this.props;
              13 === (0, u.hashFromEvent)(e) &&
                s &&
                (e.preventDefault(), n || t());
            });
        }
        render() {
          const {
            render: e,
            onClose: t,
            onSubmit: n,
            onCancel: s,
            footerLeftRenderer: i,
            submitButtonText: a,
            submitButtonDisabled: r,
            defaultActionOnClose: l,
            submitOnEnterKey: c,
            ...u
          } = this.props;
          return o.createElement(d.AdaptivePopupDialog, {
            ...u,
            ref: this._dialogRef,
            onKeyDown: this._handleKeyDown,
            render: this._renderChildren(),
            onClose: this._handleClose,
          });
        }
        focus() {
          (0, l.ensureNotNull)(this._dialogRef.current).focus();
        }
        _renderChildren() {
          return (e) => {
            const {
              render: t,
              footerLeftRenderer: s,
              additionalButtons: i,
              submitButtonText: l,
              submitButtonDisabled: u,
              onSubmit: d,
              cancelButtonText: p,
              showCancelButton: m = !0,
              showSubmitButton: b = !0,
              submitButtonClassName: v,
              cancelButtonClassName: g,
              buttonsWrapperClassName: f,
            } = this.props;
            return o.createElement(
              o.Fragment,
              null,
              t(e),
              o.createElement(
                "div",
                { className: h.footer },
                s && s(e.isSmallWidth),
                o.createElement(
                  "div",
                  { className: a()(h.buttons, f) },
                  i,
                  m &&
                    o.createElement(
                      r.Button,
                      {
                        className: g,
                        name: "cancel",
                        appearance: "stroke",
                        onClick: this._handleCancel,
                      },
                      null != p ? p : c.t(null, void 0, n(4543)),
                    ),
                  b &&
                    o.createElement(
                      "span",
                      { className: h.submitButton },
                      o.createElement(
                        r.Button,
                        {
                          className: v,
                          disabled: u,
                          name: "submit",
                          onClick: d,
                          "data-name": "submit-button",
                        },
                        null != l ? l : c.t(null, void 0, n(19295)),
                      ),
                    ),
                ),
              ),
            );
          };
        }
      }
      p.defaultProps = { defaultActionOnClose: "submit", submitOnEnterKey: !0 };
    },
    79418: (e, t, n) => {
      "use strict";
      n.d(t, { AdaptivePopupDialog: () => k });
      var s = n(50959),
        o = n(50151),
        i = n(97754),
        a = n.n(i),
        r = n(68335),
        l = n(63273),
        c = n(35749),
        u = n(82206),
        d = n(1109),
        h = n(24437),
        p = n(90692),
        m = n(95711);
      var b = n(52092),
        v = n(76422),
        g = n(11542),
        f = n(57340);
      const _ = s.createContext({ setHideClose: () => {} });
      var C = n(80822);
      function w(e) {
        const {
            title: t,
            titleTextWrap: o = !1,
            subtitle: i,
            showCloseIcon: r = !0,
            onClose: l,
            onCloseButtonKeyDown: c,
            renderBefore: u,
            renderAfter: d,
            draggable: h,
            className: p,
            unsetAlign: m,
            closeAriaLabel: b = g.t(null, void 0, n(47742)),
            closeButtonReference: v,
          } = e,
          [w, x] = (0, s.useState)(!1);
        return s.createElement(
          _.Provider,
          { value: { setHideClose: x } },
          s.createElement(
            "div",
            { className: a()(C.container, p, (i || m) && C.unsetAlign) },
            u,
            s.createElement(
              "div",
              { "data-dragg-area": h, className: C.title },
              s.createElement(
                "div",
                { className: a()(o ? C.textWrap : C.ellipsis) },
                t,
              ),
              i &&
                s.createElement(
                  "div",
                  { className: a()(C.ellipsis, C.subtitle) },
                  i,
                ),
            ),
            d,
            r &&
              !w &&
              s.createElement(f.CloseButton, {
                className: C.close,
                "data-name": "close",
                "aria-label": b,
                onClick: l,
                onKeyDown: c,
                ref: v,
                size: "medium",
                preservePaddings: !0,
              }),
          ),
        );
      }
      var x = n(53017),
        S = n(90186),
        N = n(56570),
        y = n(8473);
      const E = { vertical: 20 },
        D = { vertical: 0 };
      class k extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._controller = null),
            (this._reference = null),
            (this._orientationMediaQuery = null),
            (this._embedResizerOverridesEnabled = N.enabled(
              "embed_resizer_overrides",
            )),
            (this._renderChildren = (e, t) => (
              (this._controller = e),
              this.props.render({
                requestResize: this._requestResize,
                centerAndFit: this._centerAndFit,
                isSmallWidth: t,
              })
            )),
            (this._handleReference = (e) => (this._reference = e)),
            (this._handleCloseBtnClick = () => {
              this.props.onKeyboardClose && this.props.onKeyboardClose(),
                this._handleClose();
            }),
            (this._handleClose = () => {
              this.props.onClose();
            }),
            (this._handleOpen = () => {
              void 0 !== this.props.onOpen &&
                this.props.isOpened &&
                this.props.onOpen(
                  this.props.fullScreen ||
                    window.matchMedia(h.DialogBreakpoints.TabletSmall).matches,
                );
            }),
            (this._handleKeyDown = (e) => {
              if (!e.defaultPrevented) {
                if (
                  (this.props.onKeyDown && this.props.onKeyDown(e),
                  27 === (0, r.hashFromEvent)(e))
                ) {
                  if (e.defaultPrevented) return;
                  if (
                    this.props.forceCloseOnEsc &&
                    this.props.forceCloseOnEsc()
                  )
                    return (
                      this.props.onKeyboardClose &&
                        this.props.onKeyboardClose(),
                      void this._handleClose()
                    );
                  const { activeElement: n } = document;
                  if (null !== n) {
                    if (
                      (e.preventDefault(),
                      "true" === (t = n).getAttribute("data-haspopup") &&
                        "true" !== t.getAttribute("data-expanded"))
                    )
                      return void this._handleClose();
                    const s = this._reference;
                    if (null !== s && (0, c.isTextEditingField)(n))
                      return void s.focus();
                    if (null == s ? void 0 : s.contains(n))
                      return (
                        this.props.onKeyboardClose &&
                          this.props.onKeyboardClose(),
                        void this._handleClose()
                      );
                  }
                }
                var t, n;
                (function (e) {
                  if ("function" == typeof e) return e();
                  return Boolean(e);
                })(this.props.disableTabNavigationContainment) ||
                  ((n = e),
                  [9, r.Modifiers.Shift + 9].includes(
                    (0, r.hashFromEvent)(n),
                  ) && n.stopPropagation());
              }
            }),
            (this._requestResize = () => {
              null !== this._controller && this._controller.recalculateBounds();
            }),
            (this._centerAndFit = () => {
              null !== this._controller && this._controller.centerAndFit();
            }),
            (this._calculatePositionWithOffsets = (e, t) => {
              const n = (0, o.ensureDefined)(
                this.props.fullScreenViewOffsets,
              ).value();
              return {
                top: n.top,
                left: (0, l.isRtl)() ? -n.right : n.left,
                width: t.clientWidth - n.left - n.right,
                height: t.clientHeight - n.top - n.bottom,
              };
            });
        }
        componentDidMount() {
          this.props.ignoreClosePopupsAndDialog ||
            v.subscribe(
              b.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
              this._handleClose,
              null,
            ),
            this._handleOpen(),
            void 0 !== this.props.onOpen &&
              ((this._orientationMediaQuery = window.matchMedia(
                "(orientation: portrait)",
              )),
              this._orientationMediaQuery.addEventListener(
                "change",
                this._handleOpen,
              )),
            this.props.fullScreenViewOffsets &&
              this.props.fullScreen &&
              this.props.fullScreenViewOffsets.subscribe(this._requestResize);
        }
        componentWillUnmount() {
          this.props.ignoreClosePopupsAndDialog ||
            v.unsubscribe(
              b.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
              this._handleClose,
              null,
            ),
            null !== this._orientationMediaQuery &&
              this._orientationMediaQuery.removeEventListener(
                "change",
                this._handleOpen,
              ),
            this.props.fullScreenViewOffsets &&
              this.props.fullScreen &&
              this.props.fullScreenViewOffsets.unsubscribe(this._requestResize);
        }
        focus() {
          (0, o.ensureNotNull)(this._reference).focus();
        }
        getElement() {
          return this._reference;
        }
        contains(e) {
          var t, n;
          return (
            null !==
              (n =
                null === (t = this._reference) || void 0 === t
                  ? void 0
                  : t.contains(e)) &&
            void 0 !== n &&
            n
          );
        }
        render() {
          const {
              className: e,
              wrapperClassName: t,
              headerClassName: n,
              isOpened: o,
              title: i,
              titleTextWrap: r,
              dataName: l,
              onClickOutside: c,
              additionalElementPos: b,
              additionalHeaderElement: v,
              backdrop: g,
              shouldForceFocus: f = !0,
              shouldReturnFocus: _,
              onForceFocus: C,
              showSeparator: N,
              subtitle: k,
              draggable: B = !0,
              fullScreen: T = !1,
              showCloseIcon: O = !0,
              rounded: A = !0,
              isAnimationEnabled: P,
              growPoint: I,
              dialogTooltip: L,
              unsetHeaderAlign: M,
              onDragStart: R,
              dataDialogName: K,
              closeAriaLabel: F,
              containerAriaLabel: H,
              reference: V,
              containerTabIndex: W,
              closeButtonReference: G,
              onCloseButtonKeyDown: z,
              shadowed: U,
              fullScreenViewOffsets: Z,
              fixedBody: j,
              onClick: Q,
            } = this.props,
            q = "after" !== b ? v : void 0,
            X = "after" === b ? v : void 0,
            J = "string" == typeof i ? i : K || "",
            $ = (0, S.filterDataProps)(this.props),
            Y = (0, x.mergeRefs)([this._handleReference, V]);
          return s.createElement(
            p.MatchMedia,
            { rule: h.DialogBreakpoints.SmallHeight },
            (b) =>
              s.createElement(
                p.MatchMedia,
                { rule: h.DialogBreakpoints.TabletSmall },
                (h) =>
                  s.createElement(
                    u.PopupDialog,
                    {
                      rounded: !(h || T) && A,
                      className: a()(y.dialog, T && Z && y.bounded, e),
                      isOpened: o,
                      reference: Y,
                      onKeyDown: this._handleKeyDown,
                      onClickOutside: c,
                      onClickBackdrop: c,
                      fullscreen: h || T,
                      guard: b ? D : E,
                      boundByScreen: h || T,
                      shouldForceFocus: f,
                      onForceFocus: C,
                      shouldReturnFocus: _,
                      backdrop: g,
                      draggable: B,
                      isAnimationEnabled: P,
                      growPoint: I,
                      name: this.props.dataName,
                      dialogTooltip: L,
                      onDragStart: R,
                      containerAriaLabel: H,
                      containerTabIndex: W,
                      calculateDialogPosition:
                        T && Z ? this._calculatePositionWithOffsets : void 0,
                      shadowed: U,
                      fixedBody: j,
                      onClick: Q,
                      ...$,
                    },
                    s.createElement(
                      "div",
                      {
                        className: a()(y.wrapper, t),
                        "data-name": l,
                        "data-dialog-name": J,
                      },
                      void 0 !== i &&
                        s.createElement(w, {
                          draggable: B && !(h || T),
                          onClose: this._handleCloseBtnClick,
                          renderAfter: X,
                          renderBefore: q,
                          subtitle: k,
                          title: i,
                          titleTextWrap: r,
                          showCloseIcon: O,
                          className: n,
                          unsetAlign: M,
                          closeAriaLabel: F,
                          closeButtonReference: G,
                          onCloseButtonKeyDown: z,
                        }),
                      N &&
                        s.createElement(d.Separator, {
                          className: y.separator,
                        }),
                      s.createElement(m.PopupContext.Consumer, null, (e) =>
                        this._renderChildren(e, h || T),
                      ),
                    ),
                  ),
              ),
          );
        }
      }
    },
    1109: (e, t, n) => {
      "use strict";
      n.d(t, { Separator: () => a });
      var s = n(50959),
        o = n(97754),
        i = n(47625);
      function a(e) {
        return s.createElement("div", {
          className: o(i.separator, e.className),
        });
      }
    },
    77024: (e) => {
      e.exports = { loading: "loading-BPaLXf0z" };
    },
    38472: (e) => {
      e.exports = {
        container: "container-CD9TBN7D",
        withSuggestions: "withSuggestions-CD9TBN7D",
        title: "title-CD9TBN7D",
        autocomplete: "autocomplete-CD9TBN7D",
        saveSymbol: "saveSymbol-CD9TBN7D",
        saveInterval: "saveInterval-CD9TBN7D",
        indicators: "indicators-CD9TBN7D",
        hintLabel: "hintLabel-CD9TBN7D",
        hintMark: "hintMark-CD9TBN7D",
        hidden: "hidden-CD9TBN7D",
        labelWrap: "labelWrap-CD9TBN7D",
        label: "label-CD9TBN7D",
        accessibleLabel: "accessibleLabel-CD9TBN7D",
      };
    },
    3606: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { StudyTemplateSaver: () => G });
      var s = n(50151),
        o = n(11542),
        i = n(50959),
        a = (n(21251), n(97754)),
        r = n(15294),
        l = n(21788),
        c = n(9745),
        u = n(50182),
        d = n(50655),
        h = n(26996),
        p = n(77024);
      function m(e) {
        const { isLoading: t } = e;
        return i.createElement(
          "span",
          { className: t ? p.loading : void 0 },
          o.t(null, void 0, n(64e3)),
          t && i.createElement(h.Loader, { color: "white" }),
        );
      }
      class b extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._dialogRef = i.createRef()),
            (this._manager = null),
            (this._handleSubmit = () => {
              this.setState({ isLoading: !0 }), this.props.onSubmit(this);
            }),
            (this.state = { isLoading: !1 });
        }
        render() {
          const {
            isOpened: e,
            saveDisabled: t,
            title: n,
            onClose: s,
          } = this.props;
          return i.createElement(u.AdaptiveConfirmDialog, {
            ref: this._dialogRef,
            onClose: s,
            onSubmit: this._handleSubmit,
            onCancel: s,
            onClickOutside: s,
            isOpened: e,
            title: n,
            dataName: "save-rename-dialog",
            render: this._renderDialogBody(),
            defaultActionOnClose: "none",
            submitButtonText: i.createElement(m, {
              isLoading: this.state.isLoading,
            }),
            submitButtonDisabled: t,
          });
        }
        focus() {
          (0, s.ensureNotNull)(this._dialogRef.current).focus();
        }
        manager() {
          return this._manager;
        }
        submit() {
          this.props.onSubmit(this);
        }
        close() {
          this.props.onClose();
        }
        dropLoading() {
          this.setState({ isLoading: !1 });
        }
        _renderDialogBody() {
          return () =>
            i.createElement(
              d.SlotContext.Consumer,
              null,
              (e) => ((this._manager = e), this.props.children),
            );
        }
      }
      var v = n(30575),
        g = n(85508),
        f = n(38472),
        _ = n(49483),
        C = n(38780),
        w = n(39416);
      const x = o.t(null, void 0, n(59233)),
        S = o.t(null, void 0, n(6081)),
        N = o.t(null, void 0, n(57149)),
        y = o.t(null, void 0, n(18698)),
        E = [f.hintMark, "apply-common-tooltip"];
      function D(e) {
        const {
            title: t,
            saveSymbolHintText: n,
            saveIntervalHintText: o,
            indicatorsText: c,
            source: u,
            onClose: d,
            onSubmit: h,
          } = e,
          [p, m] = (0, i.useState)(""),
          [g, _] = (0, i.useState)(!1),
          [C, w] = (0, i.useState)(!1),
          [E, D] = (0, i.useState)(!1),
          B = (0, i.useRef)(null),
          T = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            (0, s.ensureNotNull)(T.current).focus();
          }, []),
          i.createElement(
            b,
            {
              ref: B,
              isOpened: !0,
              saveDisabled: !p,
              title: t,
              onClose: d,
              onSubmit: function (e) {
                h({ title: p, saveSymbol: g, saveInterval: C }, e);
              },
            },
            i.createElement(
              "div",
              { className: a(f.container, E && f.withSuggestions) },
              i.createElement("div", { className: f.title }, x),
              i.createElement(
                "div",
                { className: f.autocomplete },
                i.createElement(l.Autocomplete, {
                  maxLength: 64,
                  value: p,
                  onChange: m,
                  source: u,
                  allowUserDefinedValues: !0,
                  preventOnFocusOpen: !0,
                  noEmptyText: !0,
                  preventSearchOnEmptyQuery: !0,
                  filter: v.autocompleteFilter,
                  setupHTMLInput: function (e) {
                    T.current = e;
                  },
                  onSuggestionsOpen: function () {
                    D(!0);
                  },
                  onSuggestionsClose: function () {
                    D(!1);
                  },
                }),
              ),
              i.createElement(
                "div",
                { className: f.saveSymbol },
                i.createElement(r.Checkbox, {
                  label: i.createElement(k, { title: N, hint: n }),
                  onChange: function () {
                    _(!g);
                  },
                  checked: g,
                }),
              ),
              i.createElement(
                "div",
                { className: f.saveInterval },
                i.createElement(r.Checkbox, {
                  label: i.createElement(k, { title: y, hint: o }),
                  onChange: function () {
                    w(!C);
                  },
                  checked: C,
                }),
              ),
              i.createElement("div", { className: f.title }, S),
              i.createElement(
                "div",
                { className: a(f.indicators, E && f.withSuggestions) },
                c,
              ),
            ),
          )
        );
      }
      function k(e) {
        const { title: t, hint: n } = e,
          o = (0, w.useFunctionalRefObject)(null);
        return i.createElement(
          "div",
          { className: f.labelWrap },
          i.createElement("span", { className: f.label }, t),
          i.createElement(
            "button",
            {
              type: "button",
              ref: o,
              "aria-label": n,
              "data-tooltip": n,
              className: a(
                f.hintLabel,
                "apply-common-tooltip",
                f.accessibleLabel,
              ),
              title: n,
              onFocus: () =>
                (0, C.showOnElement)((0, s.ensureNotNull)(o.current)),
              onBlur: () => (0, C.hide)(),
            },
            i.createElement(c.Icon, { className: a(E), icon: g }),
          ),
        );
      }
      _.CheckMobile.any() && E.push(f.hidden);
      var B = n(76422),
        T = n(52092),
        O = n(28124);
      class A {
        constructor(e) {
          (this._container = document.createElement("div")),
            (this._rootInstance = null),
            (this.close = () => {
              this.unmount(), this._onClose && this._onClose();
            }),
            (this.unmount = () => {
              var e;
              B.unsubscribe(
                T.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this.unmount,
                null,
              ),
                null === (e = this._rootInstance) ||
                  void 0 === e ||
                  e.unmount(),
                (this._rootInstance = null);
            }),
            (this._title = e.title),
            (this._saveSymbolHintText = e.saveSymbolHintText),
            (this._saveIntervalHintText = e.saveIntervalHintText),
            (this._indicatorsText = e.indicatorsText),
            (this._source = e.source),
            (this._onSubmit = e.onSubmit),
            (this._onClose = e.onClose),
            B.subscribe(T.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this.unmount, null);
        }
        destroy() {
          this.unmount();
        }
        show() {
          this._mount();
        }
        _mount() {
          const e = i.createElement(D, {
            title: this._title,
            saveSymbolHintText: this._saveSymbolHintText,
            saveIntervalHintText: this._saveIntervalHintText,
            indicatorsText: this._indicatorsText,
            source: this._source,
            onClose: this.close,
            onSubmit: this._onSubmit,
          });
          this._rootInstance
            ? this._rootInstance.render(e)
            : (this._rootInstance = (0, O.createReactRoot)(e, this._container));
        }
      }
      var P = n(39076),
        I = n(3615),
        L = n(24708),
        M = n(22980),
        R = n(76032);
      const K = o.t(null, void 0, n(51405)),
        F = o.t(null, void 0, n(13860)),
        H = o.t(null, void 0, n(63035)),
        V = o.t(null, void 0, n(56542));
      function W(e, t, n) {
        const s = () => {
          P.backend.invalidateStudyTemplatesList(),
            P.backend.getStudyTemplatesList().then(t);
        };
        P.backend.saveStudyTemplate(e).then(s);
      }
      class G {
        constructor(e) {
          (this._dialog = null),
            (this._onSave = (e) => {
              this._options.onSave(e), this._close();
            }),
            (this._showSaveDialog = async () => {
              const e = this._controller.model().mainSeries().symbol(),
                t = this._controller.model().mainSeries().interval(),
                n = await this._getActualTemplateList();
              await this._showTemplateSaveRenameDialog(n, e, t);
            }),
            (this._close = () => {
              this._dialog && (this._dialog.destroy(), (this._dialog = null));
            }),
            (this._options = e),
            (this._controller = e.controller);
        }
        show() {
          (0, M.runOrSigninWithFeature)(this._showSaveDialog, {
            feature: "customIndicators",
            source: "Study templates save as",
            sourceMeta: "Chart",
          });
        }
        _doSave(e, t, n) {
          const { title: s, saveSymbol: o, saveInterval: i } = t;
          if (!s) return;
          const a = n.manager() || void 0,
            r = (0, R.getStudyTemplateSaveData)(
              s,
              this._controller.model(),
              o,
              i,
            );
          if (e.find((e) => e.name === s)) {
            const e = (e) => {
              e ? W(r, this._onSave) : (n.focus(), n.dropLoading());
            };
            (function (e, t) {
              return new Promise((n) =>
                (0, I.showConfirm)(
                  {
                    text: V.format({ templateName: e }),
                    onConfirm: ({ dialogClose: e }) => {
                      n(!0), e();
                    },
                    onClose: () => n(!1),
                  },
                  t,
                ),
              );
            })(s, a).then(e);
          } else {
            W(r, this._onSave);
          }
        }
        _getActualTemplateList() {
          return (
            P.backend.invalidateStudyTemplatesList(),
            P.backend.getStudyTemplatesList()
          );
        }
        _showTemplateSaveRenameDialog(e, t, n) {
          const s = (0, R.getStudyTemplateMetaInfo)(this._controller.model());
          (this._dialog = new A({
            source: e.map((e) => e.name),
            title: K,
            saveSymbolHintText: F.format({ symbol: t }),
            saveIntervalHintText: H.format({
              interval: (0, L.translatedIntervalString)(n),
            }),
            indicatorsText: (0, R.getStudyTemplateDescString)(s.indicators),
            onSubmit: (t, n) => this._doSave(e, t, n),
            onClose: this._close,
          })).show();
        }
      }
    },
    30575: (e, t, n) => {
      "use strict";
      function s(e, t) {
        return Boolean(
          "" === e || (e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())),
        );
      }
      n.d(t, { autocompleteFilter: () => s });
    },
    65890: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke="currentColor" stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>';
    },
    17105: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 21 21m0-21-21 21"/></svg>';
    },
    15130: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 15 15m0-15-15 15"/></svg>';
    },
    38822: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 11 11m0-11-11 11"/></svg>';
    },
    63346: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 9 9m0-9-9 9"/></svg>';
    },
    34983: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 7 7m0-7-7 7"/></svg>';
    },
    85508: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>';
    },
  },
]);
