(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [4774, 361],
  {
    59142: function (e, t) {
      var n, o, r;
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
          var r =
              "undefined" != typeof window &&
              window.navigator &&
              window.navigator.platform &&
              /iP(ad|hone|od)/.test(window.navigator.platform),
            s = [],
            a = !1,
            i = -1,
            l = void 0,
            c = void 0,
            u = function (e) {
              return s.some(function (t) {
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
            p = function () {
              setTimeout(function () {
                void 0 !== c &&
                  ((document.body.style.paddingRight = c), (c = void 0)),
                  void 0 !== l &&
                    ((document.body.style.overflow = l), (l = void 0));
              });
            };
          (e.disableBodyScroll = function (e, o) {
            if (r) {
              if (!e)
                return void console.error(
                  "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.",
                );
              if (
                e &&
                !s.some(function (t) {
                  return t.targetElement === e;
                })
              ) {
                var p = { targetElement: e, options: o || {} };
                (s = [].concat(t(s), [p])),
                  (e.ontouchstart = function (e) {
                    1 === e.targetTouches.length &&
                      (i = e.targetTouches[0].clientY);
                  }),
                  (e.ontouchmove = function (t) {
                    var n, o, r, s;
                    1 === t.targetTouches.length &&
                      ((o = e),
                      (s = (n = t).targetTouches[0].clientY - i),
                      !u(n.target) &&
                        ((o && 0 === o.scrollTop && 0 < s) ||
                        ((r = o) &&
                          r.scrollHeight - r.scrollTop <= r.clientHeight &&
                          s < 0)
                          ? d(n)
                          : n.stopPropagation()));
                  }),
                  a ||
                    (document.addEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0,
                    ),
                    (a = !0));
              }
            } else {
              (m = o),
                setTimeout(function () {
                  if (void 0 === c) {
                    var e = !!m && !0 === m.reserveScrollBarGap,
                      t =
                        window.innerWidth -
                        document.documentElement.clientWidth;
                    e &&
                      0 < t &&
                      ((c = document.body.style.paddingRight),
                      (document.body.style.paddingRight = t + "px"));
                  }
                  void 0 === l &&
                    ((l = document.body.style.overflow),
                    (document.body.style.overflow = "hidden"));
                });
              var h = { targetElement: e, options: o || {} };
              s = [].concat(t(s), [h]);
            }
            var m;
          }),
            (e.clearAllBodyScrollLocks = function () {
              r
                ? (s.forEach(function (e) {
                    (e.targetElement.ontouchstart = null),
                      (e.targetElement.ontouchmove = null);
                  }),
                  a &&
                    (document.removeEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0,
                    ),
                    (a = !1)),
                  (s = []),
                  (i = -1))
                : (p(), (s = []));
            }),
            (e.enableBodyScroll = function (e) {
              if (r) {
                if (!e)
                  return void console.error(
                    "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.",
                  );
                (e.ontouchstart = null),
                  (e.ontouchmove = null),
                  (s = s.filter(function (t) {
                    return t.targetElement !== e;
                  })),
                  a &&
                    0 === s.length &&
                    (document.removeEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0,
                    ),
                    (a = !1));
              } else
                1 === s.length && s[0].targetElement === e
                  ? (p(), (s = []))
                  : (s = s.filter(function (t) {
                      return t.targetElement !== e;
                    }));
            });
        }),
        void 0 === (r = "function" == typeof n ? n.apply(t, o) : n) ||
          (e.exports = r);
    },
    74786: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => o });
      const o = function () {};
    },
    40352: (e) => {
      e.exports = {
        button: "button-PYEOTd6i",
        disabled: "disabled-PYEOTd6i",
        hidden: "hidden-PYEOTd6i",
        icon: "icon-PYEOTd6i",
        dropped: "dropped-PYEOTd6i",
      };
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
    48149: (e) => {
      e.exports = {
        "textarea-container": "textarea-container-x5KHDULU",
        "change-highlight": "change-highlight-x5KHDULU",
        focused: "focused-x5KHDULU",
        "resize-vertical": "resize-vertical-x5KHDULU",
        "resize-horizontal": "resize-horizontal-x5KHDULU",
        "resize-both": "resize-both-x5KHDULU",
        textarea: "textarea-x5KHDULU",
        "with-icon": "with-icon-x5KHDULU",
        endslot: "endslot-x5KHDULU",
      };
    },
    3756: (e) => {
      e.exports = {
        "intent-default": "intent-default-EZuD3gZZ",
        "intent-danger": "intent-danger-EZuD3gZZ",
        "intent-warning": "intent-warning-EZuD3gZZ",
        "intent-success": "intent-success-EZuD3gZZ",
        "intent-neutral": "intent-neutral-EZuD3gZZ",
        "intent-neutral-light": "intent-neutral-light-EZuD3gZZ",
        "icon-wrapper-size-small": "icon-wrapper-size-small-EZuD3gZZ",
        "icon-wrapper-size-medium": "icon-wrapper-size-medium-EZuD3gZZ",
        "icon-wrapper-size-large": "icon-wrapper-size-large-EZuD3gZZ",
        "icon-wrapper": "icon-wrapper-EZuD3gZZ",
        icon: "icon-EZuD3gZZ",
      };
    },
    21731: (e) => {
      e.exports = {
        radio: "radio-ALqkCUvs",
        input: "input-ALqkCUvs",
        box: "box-ALqkCUvs",
        reverse: "reverse-ALqkCUvs",
        label: "label-ALqkCUvs",
        wrapper: "wrapper-ALqkCUvs",
        noOutline: "noOutline-ALqkCUvs",
      };
    },
    80881: (e) => {
      e.exports = {
        wrap: "wrap-QStmZL8l",
        thicknessItem: "thicknessItem-QStmZL8l",
        checked: "checked-QStmZL8l",
        accessible: "accessible-QStmZL8l",
        focusVisible: "focusVisible-QStmZL8l",
        radio: "radio-QStmZL8l",
        bar: "bar-QStmZL8l",
      };
    },
    70890: (e) => {
      e.exports = { innerLabel: "innerLabel-DjbvBF5Y" };
    },
    95661: (e) => {
      e.exports = {
        controlWrapper: "controlWrapper-DBTazUk2",
        hidden: "hidden-DBTazUk2",
        control: "control-DBTazUk2",
        controlIncrease: "controlIncrease-DBTazUk2",
        controlDecrease: "controlDecrease-DBTazUk2",
        controlIcon: "controlIcon-DBTazUk2",
        title: "title-DBTazUk2",
      };
    },
    49368: (e) => {
      e.exports = {
        wrap: "wrap-ne5qGlZh",
        icon: "icon-ne5qGlZh",
        text: "text-ne5qGlZh",
        disabled: "disabled-ne5qGlZh",
      };
    },
    76776: (e) => {
      e.exports = {
        colorPickerWrap: "colorPickerWrap-Sw_a4qpB",
        focused: "focused-Sw_a4qpB",
        readonly: "readonly-Sw_a4qpB",
        disabled: "disabled-Sw_a4qpB",
        "size-small": "size-small-Sw_a4qpB",
        "size-medium": "size-medium-Sw_a4qpB",
        "size-large": "size-large-Sw_a4qpB",
        "font-size-small": "font-size-small-Sw_a4qpB",
        "font-size-medium": "font-size-medium-Sw_a4qpB",
        "font-size-large": "font-size-large-Sw_a4qpB",
        "border-none": "border-none-Sw_a4qpB",
        shadow: "shadow-Sw_a4qpB",
        "border-thin": "border-thin-Sw_a4qpB",
        "border-thick": "border-thick-Sw_a4qpB",
        "intent-default": "intent-default-Sw_a4qpB",
        "intent-success": "intent-success-Sw_a4qpB",
        "intent-warning": "intent-warning-Sw_a4qpB",
        "intent-danger": "intent-danger-Sw_a4qpB",
        "intent-primary": "intent-primary-Sw_a4qpB",
        "corner-top-left": "corner-top-left-Sw_a4qpB",
        "corner-top-right": "corner-top-right-Sw_a4qpB",
        "corner-bottom-right": "corner-bottom-right-Sw_a4qpB",
        "corner-bottom-left": "corner-bottom-left-Sw_a4qpB",
        colorPicker: "colorPicker-Sw_a4qpB",
        swatch: "swatch-Sw_a4qpB",
        placeholderContainer: "placeholderContainer-Sw_a4qpB",
        placeholder: "placeholder-Sw_a4qpB",
        mixedColor: "mixedColor-Sw_a4qpB",
        white: "white-Sw_a4qpB",
        opacitySwatch: "opacitySwatch-Sw_a4qpB",
        colorLine: "colorLine-Sw_a4qpB",
        multiWidth: "multiWidth-Sw_a4qpB",
        line: "line-Sw_a4qpB",
        thicknessContainer: "thicknessContainer-Sw_a4qpB",
        thicknessTitle: "thicknessTitle-Sw_a4qpB",
      };
    },
    47816: (e) => {
      e.exports = {
        thicknessContainer: "thicknessContainer-C05zSid7",
        thicknessTitle: "thicknessTitle-C05zSid7",
      };
    },
    85200: (e) => {
      e.exports = {
        hasTooltip: "hasTooltip-DcvaoxPU",
        uppercase: "uppercase-DcvaoxPU",
      };
    },
    49489: (e) => {
      e.exports = { wrap: "wrap-Q2NZ0gvI" };
    },
    31260: (e) => {
      e.exports = { checkbox: "checkbox-FG0u1J5p", title: "title-FG0u1J5p" };
    },
    5123: (e) => {
      e.exports = {
        hintButton: "hintButton-qEI9XsjF",
        infoTooltip: "infoTooltip-qEI9XsjF",
      };
    },
    948: (e) => {
      e.exports = { titleWrap: "titleWrap-SexRbl__", title: "title-SexRbl__" };
    },
    47680: (e) => {
      e.exports = {
        button: "button-HBcDEU4c",
        accessible: "accessible-HBcDEU4c",
      };
    },
    94996: (e) => {
      e.exports = {
        container: "container-mdcOkvbj",
        sectionTitle: "sectionTitle-mdcOkvbj",
        separator: "separator-mdcOkvbj",
        customButton: "customButton-mdcOkvbj",
        accessible: "accessible-mdcOkvbj",
      };
    },
    11988: (e) => {
      e.exports = {
        container: "container-iiEYaqPD",
        form: "form-iiEYaqPD",
        swatch: "swatch-iiEYaqPD",
        inputWrap: "inputWrap-iiEYaqPD",
        inputHash: "inputHash-iiEYaqPD",
        input: "input-iiEYaqPD",
        buttonWrap: "buttonWrap-iiEYaqPD",
        hueSaturationWrap: "hueSaturationWrap-iiEYaqPD",
        saturation: "saturation-iiEYaqPD",
        hue: "hue-iiEYaqPD",
      };
    },
    30338: (e) => {
      e.exports = {
        hue: "hue-r4uo5Wn6",
        pointer: "pointer-r4uo5Wn6",
        accessible: "accessible-r4uo5Wn6",
        pointerContainer: "pointerContainer-r4uo5Wn6",
      };
    },
    3252: (e) => {
      e.exports = {
        opacity: "opacity-EnWts7Xu",
        opacitySlider: "opacitySlider-EnWts7Xu",
        opacitySliderGradient: "opacitySliderGradient-EnWts7Xu",
        pointer: "pointer-EnWts7Xu",
        dragged: "dragged-EnWts7Xu",
        opacityPointerWrap: "opacityPointerWrap-EnWts7Xu",
        opacityInputWrap: "opacityInputWrap-EnWts7Xu",
        opacityInput: "opacityInput-EnWts7Xu",
        opacityInputPercent: "opacityInputPercent-EnWts7Xu",
        accessible: "accessible-EnWts7Xu",
      };
    },
    52650: (e) => {
      e.exports = {
        saturation: "saturation-NFNfqP2w",
        pointer: "pointer-NFNfqP2w",
        accessible: "accessible-NFNfqP2w",
      };
    },
    6294: (e) => {
      e.exports = {
        swatches: "swatches-sfn7Lezv",
        swatch: "swatch-sfn7Lezv",
        hover: "hover-sfn7Lezv",
        empty: "empty-sfn7Lezv",
        white: "white-sfn7Lezv",
        selected: "selected-sfn7Lezv",
        contextItem: "contextItem-sfn7Lezv",
        row: "row-sfn7Lezv",
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
    66841: (e) => {
      e.exports = {
        "icon-wrapper": "icon-wrapper-dikdewwx",
        "with-link": "with-link-dikdewwx",
        "with-tooltip": "with-tooltip-dikdewwx",
        "no-active-state": "no-active-state-dikdewwx",
      };
    },
    70369: (e) => {
      e.exports = { placeholder: "placeholder-V6ceS6BN" };
    },
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
    70673: (e, t, n) => {
      "use strict";
      n.d(t, { CheckboxInput: () => c });
      var o = n(50959),
        r = n(97754),
        s = n(90186),
        a = n(5811),
        i = n(57723),
        l = n.n(i);
      function c(e) {
        const t = r(l().wrapper, e.className);
        return o.createElement(
          "span",
          { className: t, title: e.title, style: e.style },
          o.createElement("input", {
            id: e.id,
            tabIndex: e.tabIndex,
            className: r(e.intent && l()[e.intent], l().input),
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
            ...(0, s.filterDataProps)(e),
          }),
          o.createElement(a.CheckboxView, {
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
      var o = n(50959),
        r = n(97754),
        s = n(9745),
        a = n(65890),
        i = n(31542),
        l = n.n(i);
      function c(e) {
        const {
            indeterminate: t,
            checked: n,
            tabIndex: i,
            className: c,
            disabled: u,
            disableActiveStyles: d,
            intent: p,
            hideIcon: h,
            ...m
          } = e,
          v = t || !n || h ? "" : a,
          f = r(
            l().box,
            l()[`intent-${p}`],
            !t && l().check,
            !!t && l().dot,
            -1 === i && l().noOutline,
            c,
            n && l().checked,
            u && l().disabled,
            d && l().disableActiveStyles,
          );
        return o.createElement(
          "span",
          { className: f, ...m },
          o.createElement(s.Icon, { icon: v, className: l().icon }),
        );
      }
    },
    15294: (e, t, n) => {
      "use strict";
      n.d(t, { Checkbox: () => c });
      var o = n(50959),
        r = n(97754),
        s = n(59416),
        a = n(70673),
        i = n(22306),
        l = n.n(i);
      class c extends o.PureComponent {
        render() {
          const { inputClassName: e, labelClassName: t, ...n } = this.props,
            s = r(this.props.className, l().checkbox, {
              [l().reverse]: Boolean(this.props.labelPositionReverse),
              [l().baseline]: Boolean(this.props.labelAlignBaseline),
            }),
            i = r(l().label, t, { [l().disabled]: this.props.disabled });
          let c = null;
          return (
            this.props.label &&
              (c = o.createElement(
                "span",
                { className: i, title: this.props.title },
                this.props.label,
              )),
            o.createElement(
              "label",
              { className: s },
              o.createElement(a.CheckboxInput, { ...n, className: e }),
              c,
            )
          );
        }
      }
      c.defaultProps = { value: "on" };
      (0, s.makeSwitchGroupItem)(c);
      n(5811);
    },
    2568: (e, t, n) => {
      "use strict";
      n.d(t, { Textarea: () => C });
      var o,
        r = n(50959),
        s = n(97754),
        a = n(38528),
        i = n(29202),
        l = n(48027),
        c = n(45812),
        u = n(47201),
        d = n(48907),
        p = n(67029),
        h = n(78274),
        m = n(48149),
        v = n.n(m);
      !(function (e) {
        (e.None = "none"),
          (e.Vertical = "vertical"),
          (e.Horizontal = "horizontal"),
          (e.Both = "both");
      })(o || (o = {}));
      const f = r.forwardRef((e, t) => {
        const {
            id: n,
            title: o,
            tabIndex: a,
            containerTabIndex: i,
            role: l,
            inputClassName: c,
            autoComplete: u,
            autoFocus: d,
            cols: m,
            disabled: f,
            isFocused: g,
            form: b,
            maxLength: C,
            minLength: y,
            name: E,
            placeholder: w,
            readonly: S,
            required: _,
            rows: x,
            value: N,
            defaultValue: T,
            wrap: k,
            containerReference: I,
            onChange: P,
            onSelect: B,
            onFocus: D,
            onContainerFocus: M,
            onBlur: O,
            onPaste: R,
            "aria-describedby": V,
            "aria-required": F,
            "aria-invalid": L,
            hasIcon: W,
            endSlot: A,
            hasAttachImage: q,
            ...z
          } = e,
          H = {
            id: n,
            title: o,
            tabIndex: a,
            role: l,
            autoComplete: u,
            autoFocus: d,
            cols: m,
            disabled: f,
            form: b,
            maxLength: C,
            minLength: y,
            name: E,
            placeholder: w,
            readOnly: S,
            required: _,
            rows: x,
            value: N,
            defaultValue: T,
            wrap: k,
            onChange: P,
            onSelect: B,
            onFocus: D,
            onBlur: O,
            onPaste: R,
            "aria-describedby": V,
            "aria-required": F,
            "aria-invalid": L,
          };
        return r.createElement(p.ControlSkeleton, {
          ...z,
          tabIndex: i,
          disabled: f,
          readonly: S,
          isFocused: g,
          ref: I,
          onFocus: M,
          middleSlot: r.createElement(
            h.MiddleSlot,
            null,
            r.createElement("textarea", {
              ...H,
              className: s(v().textarea, c, A && v().endslot),
              ref: t,
            }),
          ),
          ...(A && {
            endSlot: r.createElement(
              "span",
              { className: s(!q && v()["with-icon"]) },
              A,
            ),
          }),
        });
      });
      f.displayName = "TextareaView";
      const g = (e, t, n) => (t ? void 0 : e ? -1 : n),
        b = (e, t, n) => (t ? void 0 : e ? n : -1),
        C = r.forwardRef((e, t) => {
          e = (0, l.useControl)(e);
          const {
              className: n,
              disabled: p,
              autoSelectOnFocus: h,
              tabIndex: m = 0,
              borderStyle: C,
              highlight: y,
              resize: E,
              containerReference: w = null,
              onFocus: S,
              onBlur: _,
              hasIcon: x,
              ...N
            } = e,
            T = (0, r.useRef)(null),
            k = (0, r.useRef)(null),
            {
              isMouseDown: I,
              handleMouseDown: P,
              handleMouseUp: B,
            } = (0, c.useIsMouseDown)(),
            [D, M] = (0, i.useFocus)(),
            O = (0, u.createSafeMulticastEventHandler)(
              M.onFocus,
              function (e) {
                h && !I.current && (0, d.selectAllContent)(e.currentTarget);
              },
              S,
            ),
            R = (0, u.createSafeMulticastEventHandler)(M.onBlur, _),
            V = void 0 !== E && E !== o.None,
            F = null != C ? C : V ? (y ? "thick" : "thin") : void 0,
            L = null != y ? y : !V && void 0;
          return r.createElement(f, {
            ...N,
            className: s(
              v()["textarea-container"],
              V && v()["change-highlight"],
              E && E !== o.None && v()[`resize-${E}`],
              D && v().focused,
              n,
            ),
            disabled: p,
            isFocused: D,
            containerTabIndex: g(D, p, m),
            tabIndex: b(D, p, m),
            borderStyle: F,
            highlight: L,
            onContainerFocus: function (e) {
              k.current === e.target && null !== T.current && T.current.focus();
            },
            onFocus: O,
            onBlur: R,
            onMouseDown: P,
            onMouseUp: B,
            ref: function (e) {
              (T.current = e),
                "function" == typeof t ? t(e) : t && (t.current = e);
            },
            containerReference: (0, a.useMergedRefs)([w, k]),
            hasIcon: x,
          });
        });
      C.displayName = "Textarea";
    },
    36104: (e, t, n) => {
      "use strict";
      n.d(t, { useControlDisclosure: () => r });
      var o = n(7953);
      function r(e) {
        const { intent: t, highlight: n, ...r } = e,
          { isFocused: s, ...a } = (0, o.useDisclosure)(r);
        return {
          ...a,
          isFocused: s,
          highlight: null != n ? n : s,
          intent: null != t ? t : s ? "primary" : "default",
        };
      }
    },
    83021: (e, t, n) => {
      "use strict";
      n.d(t, { SubmenuContext: () => r, SubmenuHandler: () => s });
      var o = n(50959);
      const r = o.createContext(null);
      function s(e) {
        const [t, n] = (0, o.useState)(null),
          s = (0, o.useRef)(null),
          a = (0, o.useRef)(new Map());
        return (
          (0, o.useEffect)(
            () => () => {
              null !== s.current && clearTimeout(s.current);
            },
            [],
          ),
          o.createElement(
            r.Provider,
            {
              value: {
                current: t,
                setCurrent: function (e) {
                  null !== s.current &&
                    (clearTimeout(s.current), (s.current = null));
                  null === t
                    ? n(e)
                    : (s.current = setTimeout(() => {
                        (s.current = null), n(e);
                      }, 100));
                },
                registerSubmenu: function (e, t) {
                  return (
                    a.current.set(e, t),
                    () => {
                      a.current.delete(e);
                    }
                  );
                },
                isSubmenuNode: function (e) {
                  return Array.from(a.current.values()).some((t) => t(e));
                },
              },
            },
            e.children,
          )
        );
      }
    },
    59416: (e, t, n) => {
      "use strict";
      n.d(t, { SwitchGroup: () => a, makeSwitchGroupItem: () => i });
      var o = n(50959),
        r = n(74786);
      const s = (0, o.createContext)({
        getName: () => "",
        getValues: () => [],
        getOnChange: () => r.default,
        subscribe: r.default,
        unsubscribe: r.default,
      });
      class a extends o.PureComponent {
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
          return o.createElement(
            s.Provider,
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
      function i(e) {
        var t;
        return (
          (t = class extends o.PureComponent {
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
              return o.createElement(e, {
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
          (t.contextType = s),
          t
        );
      }
    },
    92399: (e, t, n) => {
      "use strict";
      n.d(t, { NumberInputView: () => P });
      var o,
        r = n(50959),
        s = n(32563),
        a = n(97754),
        i = n(67029),
        l = n(78274),
        c = n(86623),
        u = n(1140),
        d = n(1405),
        p = n(70890);
      !(function (e) {
        (e.Large = "large"), (e.Medium = "medium");
      })(o || (o = {}));
      const h = {
          large: i.InputClasses.FontSizeLarge,
          medium: i.InputClasses.FontSizeMedium,
        },
        m = {
          attachment: d.anchors.top.attachment,
          targetAttachment: d.anchors.top.targetAttachment,
          attachmentOffsetY: -4,
        };
      function v(e) {
        const {
            className: t,
            inputClassName: n,
            stretch: o = !0,
            errorMessage: s,
            fontSizeStyle: i = "large",
            endSlot: d,
            button: v,
            error: f,
            warning: g,
            innerLabel: b,
            inputReference: C,
            children: y,
            ...E
          } = e,
          w = f && void 0 !== s ? [s] : void 0,
          S = g && void 0 !== s ? [s] : void 0,
          _ = a(p.inputContainer, h[i], t),
          x = b
            ? r.createElement(
                l.StartSlot,
                { className: p.innerLabel, interactive: !1 },
                b,
              )
            : void 0,
          N = d || v || y ? r.createElement(l.EndSlot, null, d, v, y) : void 0;
        return r.createElement(c.FormInput, {
          ...E,
          className: _,
          inputClassName: n,
          errors: w,
          warnings: S,
          hasErrors: f,
          hasWarnings: g,
          messagesPosition: u.MessagesPosition.Attached,
          customErrorsAttachment: m,
          messagesRoot: "document",
          inheritMessagesWidthFromTarget: !0,
          disableMessagesRtlStyles: !0,
          iconHidden: !0,
          stretch: o,
          reference: C,
          startSlot: x,
          endSlot: N,
        });
      }
      var f = n(38528),
        g = n(11542),
        b = n(9745),
        C = n(14729),
        y = n(2948),
        E = n(95661);
      function w(e) {
        const t = a(E.control, E.controlIncrease),
          o = a(E.control, E.controlDecrease);
        return r.createElement(
          r.Fragment,
          null,
          void 0 !== e.title &&
            r.createElement("div", { className: E.title }, e.title),
          r.createElement(
            "div",
            { className: E.controlWrapper },
            (e.defaultButtonsVisible || e.title) &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  "button",
                  {
                    type: "button",
                    tabIndex: -1,
                    "aria-label": g.t(null, void 0, n(39832)),
                    className: t,
                    onClick: e.increaseValue,
                    onMouseDown: C.preventDefault,
                  },
                  r.createElement(b.Icon, {
                    icon: y,
                    className: E.controlIcon,
                  }),
                ),
                r.createElement(
                  "button",
                  {
                    type: "button",
                    tabIndex: -1,
                    "aria-label": g.t(null, void 0, n(55319)),
                    className: o,
                    onClick: e.decreaseValue,
                    onMouseDown: C.preventDefault,
                  },
                  r.createElement(b.Icon, {
                    icon: y,
                    className: E.controlIcon,
                  }),
                ),
              ),
          ),
        );
      }
      var S = n(70412),
        _ = n(29202),
        x = n(47201),
        N = n(68335);
      const T = [38],
        k = [40];
      var I;
      function P(e) {
        const [t, n] = (0, S.useHover)(),
          [o, a] = (0, _.useFocus)(),
          i = (0, r.useRef)(null),
          l = (0, x.createSafeMulticastEventHandler)(a.onFocus, e.onFocus),
          c = (0, x.createSafeMulticastEventHandler)(a.onBlur, e.onBlur),
          u = (0, r.useCallback)(
            (t) => {
              !e.disabled &&
                o &&
                (t.preventDefault(),
                t.deltaY < 0
                  ? e.onValueByStepChange(1)
                  : e.onValueByStepChange(-1));
            },
            [o, e.disabled, e.onValueByStepChange],
          );
        return r.createElement(v, {
          ...n,
          id: e.id,
          name: e.name,
          pattern: e.pattern,
          borderStyle: e.borderStyle,
          fontSizeStyle: e.fontSizeStyle,
          value: e.value,
          className: e.className,
          inputClassName: e.inputClassName,
          autoComplete: e.autoComplete,
          button: (function () {
            const {
                button: n,
                forceShowControls: a,
                disabled: i,
                title: l,
              } = e,
              c = !i && !s.mobiletouch && (a || o || t);
            return i
              ? void 0
              : r.createElement(
                  r.Fragment,
                  null,
                  null != n
                    ? n
                    : r.createElement(w, {
                        increaseValue: d,
                        decreaseValue: p,
                        defaultButtonsVisible: c,
                        title: l,
                      }),
                );
          })(),
          disabled: e.disabled,
          placeholder: e.placeholder,
          innerLabel: e.innerLabel,
          endSlot: e.endSlot,
          containerReference: (0, f.useMergedRefs)([i, e.containerReference]),
          inputReference: e.inputReference,
          inputMode: e.inputMode,
          type: e.type,
          warning: e.warning,
          error: e.error,
          errorMessage: e.errorMessage,
          onClick: e.onClick,
          onFocus: l,
          onBlur: c,
          onChange: e.onValueChange,
          onKeyDown: function (t) {
            if (e.disabled || 0 !== (0, N.modifiersFromEvent)(t.nativeEvent))
              return;
            let n = T,
              o = k;
            e.controlDecKeyCodes && (o = o.concat(e.controlDecKeyCodes));
            e.controlIncKeyCodes && (n = n.concat(e.controlIncKeyCodes));
            (o.includes(t.keyCode) || n.includes(t.keyCode)) &&
              (t.preventDefault(),
              e.onValueByStepChange(o.includes(t.keyCode) ? -1 : 1));
            e.onKeyDown && e.onKeyDown(t);
          },
          onWheelNoPassive: u,
          stretch: e.stretch,
          intent: e.intent,
          highlight: e.highlight,
          highlightRemoveRoundBorder: e.highlightRemoveRoundBorder,
          autoSelectOnFocus: e.autoSelectOnFocus,
          "data-property-id": e["data-name"],
        });
        function d() {
          var t;
          e.disabled ||
            (null === (t = i.current) || void 0 === t || t.focus(),
            e.onValueByStepChange(1));
        }
        function p() {
          var t;
          e.disabled ||
            (null === (t = i.current) || void 0 === t || t.focus(),
            e.onValueByStepChange(-1));
        }
      }
      !(function (e) {
        (e[(e.Dec = -1)] = "Dec"), (e[(e.Inc = 1)] = "Inc");
      })(I || (I = {}));
    },
    58593: (e, t, n) => {
      "use strict";
      n.d(t, { ColorSelect: () => k });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(50151),
        i = n(68335),
        l = n(20520),
        c = n(29202),
        u = n(35789),
        d = n(64706),
        p = n(19291),
        h = n(57177),
        m = n(47680);
      function v(e) {
        const {
            button: t,
            children: n,
            className: r,
            onPopupClose: v,
            "data-name": f,
            onColorChange: g,
            disabled: b,
            ...C
          } = e,
          [y, E] = (0, o.useState)(!1),
          [w, S] = (0, o.useState)(!1),
          [_, x] = (0, c.useFocus)(),
          N = (0, o.useRef)(null),
          T = (0, o.useRef)(null),
          k = (0, o.useRef)(null);
        return o.createElement(
          "div",
          { className: r, "data-name": f },
          o.createElement(
            "button",
            {
              className: s()(m.button, m.accessible),
              tabIndex: b ? -1 : 0,
              ref: k,
              onClick: function () {
                if (e.disabled) return;
                S((e) => !e), E(!1);
              },
              onFocus: x.onFocus,
              onBlur: x.onBlur,
              disabled: b,
            },
            "function" == typeof t ? t(w, _) : t,
          ),
          o.createElement(
            l.PopupMenu,
            {
              reference: T,
              controller: N,
              onFocus: function (e) {
                if (!e.target || e.target !== e.currentTarget || y) return;
                const t = e.currentTarget,
                  n = (0, a.ensureNotNull)(
                    ((o = e.target),
                    o.querySelector(
                      '[data-role="swatch"]:not([disabled]):not([aria-disabled])',
                    )),
                  );
                var o;
                (0, h.becomeMainElement)(n),
                  setTimeout(() => {
                    if (
                      document.activeElement !== t ||
                      !e.target.matches(":focus-visible")
                    )
                      return;
                    const [n] = (0, p.queryTabbableElements)(t).sort(
                      p.navigationOrderComparator,
                    );
                    n && n.focus();
                  });
              },
              isOpened: w,
              onClose: I,
              position: function () {
                const e = (0, a.ensureNotNull)(
                  k.current,
                ).getBoundingClientRect();
                return { x: e.left, y: e.top + e.height };
              },
              doNotCloseOn: k.current,
              onKeyDown: function (e) {
                if (27 === (0, i.hashFromEvent)(e))
                  w && (e.preventDefault(), I());
              },
              onOpen: function () {
                var e;
                null === (e = N.current) || void 0 === e || e.focus();
              },
              tabIndex: -1,
            },
            o.createElement(d.MenuContext.Consumer, null, (e) =>
              o.createElement(u.ColorPicker, {
                ...C,
                onColorChange: g,
                onToggleCustom: E,
                menu: e,
              }),
            ),
            !y && n,
          ),
        );
        function I() {
          S(!1), (0, a.ensureNotNull)(k.current).focus(), v && v();
        }
      }
      var f = n(56512),
        g = n(19063),
        b = n(6914),
        C = n(11542),
        y = n(59416),
        E = n(80881);
      const w = (0, y.makeSwitchGroupItem)(
        class extends o.PureComponent {
          constructor(e) {
            super(e),
              (this._onChange = () => {
                this.props.onChange && this.props.onChange(this.props.value);
              }),
              (this._handleFocus = (e) => {
                e.target.matches(":focus-visible") &&
                  this.setState({ isFocusVisible: !0 });
              }),
              (this._handleBlur = () => {
                this.state.isFocusVisible &&
                  this.setState({ isFocusVisible: !1 });
              }),
              (this.state = { isFocusVisible: !1 });
          }
          render() {
            const { name: e, checked: t, value: n } = this.props,
              s = r(E.thicknessItem, E.accessible, {
                [E.checked]: t,
                [E.focusVisible]: this.state.isFocusVisible,
              }),
              a = r(E.bar, { [E.checked]: t }),
              i = { borderTopWidth: parseInt(n) };
            return o.createElement(
              "div",
              { className: s },
              o.createElement("input", {
                type: "radio",
                className: E.radio,
                name: e,
                value: n,
                onChange: this._onChange,
                onFocus: this._handleFocus,
                onBlur: this._handleBlur,
                checked: t,
              }),
              o.createElement("div", { className: a, style: i }, " "),
            );
          }
        },
      );
      function S(e) {
        const { name: t, values: n, selectedValues: r, onChange: s } = e,
          a = n.map((e, t) =>
            o.createElement(w, { key: t, value: e.toString() }),
          ),
          i = r.map((e) => e.toString());
        return o.createElement(
          "div",
          { className: E.wrap },
          o.createElement(
            y.SwitchGroup,
            {
              name: t,
              onChange: (e) => {
                s(parseInt(e));
              },
              values: i,
            },
            a,
          ),
        );
      }
      var _ = n(47816);
      const x = C.t(null, void 0, n(54971));
      function N(e) {
        const { value: t, items: n, onChange: r } = e;
        return o.createElement(
          "div",
          { className: _.thicknessContainer },
          o.createElement("div", { className: _.thicknessTitle }, x),
          o.createElement(S, {
            name: "color_picker_thickness_select",
            onChange: r,
            values: n,
            selectedValues: "mixed" === t ? [] : [t],
          }),
        );
      }
      var T = n(76776);
      function k(e) {
        const {
            className: t,
            selectOpacity: n = void 0 !== e.opacity,
            thickness: r,
            color: a,
            disabled: i,
            opacity: l = 1,
            onColorChange: c,
            onOpacityChange: u,
            onThicknessChange: d,
            thicknessItems: p,
            onPopupClose: h,
            "data-name": m,
          } = e,
          [g, b, C] = (0, f.useCustomColors)();
        return o.createElement(
          v,
          {
            className: t,
            disabled: i,
            color: "mixed" !== a ? a : null,
            selectOpacity: n,
            opacity: l,
            selectCustom: !0,
            customColors: g,
            onColorChange: c,
            onOpacityChange: a ? u : void 0,
            onAddColor: b,
            onRemoveCustomColor: C,
            button: function (e, t) {
              const n = e || t,
                c = n ? "primary" : "default";
              return o.createElement(
                "div",
                {
                  className: s()(
                    T.colorPickerWrap,
                    T[`intent-${c}`],
                    T["border-thin"],
                    T["size-medium"],
                    n && T.highlight,
                    n && T.focused,
                    i && T.disabled,
                  ),
                  "data-role": "button",
                  "data-name": r
                    ? "color-with-thickness-select"
                    : "color-select",
                },
                o.createElement(
                  "div",
                  { className: s()(T.colorPicker, i && T.disabled) },
                  a && "mixed" !== a
                    ? (function () {
                        const e = I(a, l),
                          t = l >= 0.95 && P(a);
                        return o.createElement(
                          "div",
                          { className: T.opacitySwatch },
                          o.createElement("div", {
                            style: { backgroundColor: e },
                            className: s()(T.swatch, t && T.white),
                          }),
                        );
                      })()
                    : o.createElement(
                        "div",
                        { className: T.placeholderContainer },
                        o.createElement("div", {
                          className:
                            "mixed" === a ? T.mixedColor : T.placeholder,
                        }),
                      ),
                  r &&
                    (function () {
                      const e = a && "mixed" !== a ? I(a, l) : void 0;
                      if ("mixed" === r)
                        return o.createElement(
                          "div",
                          { className: T.multiWidth },
                          o.createElement("div", {
                            style: { backgroundColor: e },
                            className: T.line,
                          }),
                          o.createElement("div", {
                            style: { backgroundColor: e },
                            className: T.line,
                          }),
                          o.createElement("div", {
                            style: { backgroundColor: e },
                            className: T.line,
                          }),
                        );
                      return o.createElement("span", {
                        className: s()(T.colorLine, P(a) && T.white),
                        style: { height: r, backgroundColor: e },
                      });
                    })(),
                ),
                n && o.createElement("span", { className: T.shadow }),
              );
            },
            onPopupClose: h,
            "data-name": m,
          },
          r &&
            p &&
            o.createElement(N, {
              value: r,
              items: p,
              onChange: function (e) {
                d && d(e);
              },
            }),
        );
      }
      function I(e, t) {
        return e
          ? (0, g.generateColor)(e, (0, g.alphaToTransparency)(t), !0)
          : "#000000";
      }
      function P(e) {
        return !!e && e.toLowerCase() === b.white;
      }
    },
    48897: (e, t, n) => {
      "use strict";
      n.d(t, { SymbolInputsButton: () => _ });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(11542),
        i = n(50151),
        l = n(50655),
        c = n(95711),
        u = n(56570),
        d = n(16604),
        p = n(94664),
        h = n(1861),
        m = n(9745),
        v = n(10600),
        f = n(49368);
      function g(e) {
        const {
          value: t,
          onClick: n,
          className: s,
          startSlot: a,
          disabled: i = !1,
        } = e;
        return o.createElement(
          "div",
          {
            className: r(f.wrap, i && f.disabled, s),
            onClick: n,
            "data-name": "edit-button",
          },
          o.createElement(
            "div",
            { className: r(f.text, "apply-overflow-tooltip") },
            void 0 !== a && a,
            o.createElement("span", null, t),
          ),
          o.createElement(m.Icon, { icon: v, className: f.icon }),
        );
      }
      var b = n(31356),
        C = n(78260),
        y = n(44254),
        E = n(82708),
        w = n(85200);
      function S(e) {
        const { symbol: t, onSymbolChanged: r, disabled: i, className: d } = e,
          [m, v] = (0, o.useState)(t),
          f = (0, o.useContext)(l.SlotContext),
          b = (0, o.useContext)(c.PopupContext);
        return o.createElement(g, {
          value: m,
          onClick: function () {
            const e = (function (e) {
                const t = (0, y.tokenize)(e);
                return (0, y.isSpread)(t);
              })(m)
                ? m
                : (0, E.safeShortName)(m),
              t = (0, p.getSymbolSearchCompleteOverrideFunction)();
            (0, h.showSymbolSearchItemsDialog)({
              onSearchComplete: (e) => {
                t(e[0].symbol, e[0].result).then((e) => {
                  r(e.symbol), v(e.name);
                });
              },
              dialogTitle: a.t(null, void 0, n(63245)),
              defaultValue: e,
              manager: f,
              onClose: () => {
                b && b.focus();
              },
              showSpreadActions:
                u.enabled("show_spread_operators") &&
                u.enabled("studies_symbol_search_spread_operators"),
            });
          },
          disabled: i,
          className: s()(
            d,
            u.enabled("uppercase_instrument_names") && w.uppercase,
          ),
        });
      }
      function _(e) {
        if ("definition" in e) {
          const {
              propType: t,
              properties: n,
              id: r,
              title: s = "",
              solutionId: a,
            } = e.definition,
            l = n[t],
            c = l.value() || "",
            u = (e) => {
              l.setValue(e);
            };
          return o.createElement(
            b.CommonSection,
            { id: r, title: s, solutionId: a },
            o.createElement(
              C.CellWrap,
              null,
              o.createElement(S, {
                symbol: (0, i.ensureDefined)(c),
                onSymbolChanged: u,
              }),
            ),
          );
        }
        {
          const {
              study: t,
              value: n,
              input: { id: r, name: a },
              onChange: l,
              disabled: c,
              hasTooltip: u,
            } = e,
            p = (e) => {
              const n = (0, d.getInternalSymbolName)(e, t);
              l(n, r, a);
            };
          return o.createElement(S, {
            symbol: (0, i.ensureDefined)(n),
            onSymbolChanged: p,
            disabled: c,
            className: s()(u && w.hasTooltip),
          });
        }
      }
    },
    1861: (e, t, n) => {
      "use strict";
      n.d(t, { showSymbolSearchItemsDialog: () => l });
      var o = n(50959),
        r = n(50655),
        s = n(51826),
        a = n(73280),
        i = n(28124);
      function l(e) {
        const {
          initialMode: t = "symbolSearch",
          autofocus: n = !0,
          defaultValue: l,
          showSpreadActions: c,
          selectSearchOnInit: u,
          onSearchComplete: d,
          dialogTitle: p,
          placeholder: h,
          fullscreen: m,
          initialScreen: v,
          wrapper: f,
          dialog: g,
          contentItem: b,
          onClose: C,
          onOpen: y,
          footer: E,
          symbolTypes: w,
          searchInput: S,
          emptyState: _,
          hideMarkedListFlag: x,
          dialogWidth: N = "auto",
          manager: T,
          shouldReturnFocus: k,
          onSymbolFiltersParamsChange: I,
          onEmptyResults: P,
          customSearchSymbols: B,
        } = e;
        if (
          s.dialogsOpenerManager.isOpened("SymbolSearch") ||
          s.dialogsOpenerManager.isOpened("ChangeIntervalDialog")
        )
          return;
        const D = document.createElement("div"),
          M = o.createElement(
            r.SlotContext.Provider,
            { value: null != T ? T : null },
            o.createElement(a.SymbolSearchItemsDialog, {
              onClose: R,
              initialMode: t,
              defaultValue: l,
              showSpreadActions: c,
              hideMarkedListFlag: x,
              selectSearchOnInit: u,
              onSearchComplete: d,
              dialogTitle: p,
              placeholder: h,
              fullscreen: m,
              initialScreen: v,
              wrapper: f,
              dialog: g,
              contentItem: b,
              footer: E,
              symbolTypes: w,
              searchInput: S,
              emptyState: _,
              autofocus: n,
              dialogWidth: N,
              shouldReturnFocus: k,
              onSymbolFiltersParamsChange: I,
              onEmptyResults: P,
              customSearchSymbols: B,
            }),
          ),
          O = (0, i.createReactRoot)(M, D);
        function R() {
          O.unmount(),
            s.dialogsOpenerManager.setAsClosed("SymbolSearch"),
            C && C();
        }
        return (
          s.dialogsOpenerManager.setAsOpened("SymbolSearch"),
          y && y(),
          { close: R }
        );
      }
    },
    50238: (e, t, n) => {
      "use strict";
      n.d(t, { useRovingTabindexElement: () => s });
      var o = n(50959),
        r = n(39416);
      function s(e, t = []) {
        const [n, s] = (0, o.useState)(!1),
          a = (0, r.useFunctionalRefObject)(e);
        return (
          (0, o.useLayoutEffect)(() => {
            const e = a.current;
            if (null === e) return;
            const t = (e) => {
              switch (e.type) {
                case "roving-tabindex:main-element":
                  s(!0);
                  break;
                case "roving-tabindex:secondary-element":
                  s(!1);
              }
            };
            return (
              e.addEventListener("roving-tabindex:main-element", t),
              e.addEventListener("roving-tabindex:secondary-element", t),
              () => {
                e.removeEventListener("roving-tabindex:main-element", t),
                  e.removeEventListener("roving-tabindex:secondary-element", t);
              }
            );
          }, t),
          [a, n ? 0 : -1]
        );
      }
    },
    59369: (e, t, n) => {
      "use strict";
      n.d(t, { useRowsNavigation: () => c });
      var o = n(50959),
        r = n(50151),
        s = n(19291),
        a = n(68335),
        i = n(57177);
      const l = [37, 39, 38, 40];
      function c(e) {
        const t = (0, o.useRef)(null);
        return (
          (0, o.useLayoutEffect)(() => {
            const e = (0, r.ensureNotNull)(t.current),
              n = () => {
                const n = (0, s.queryTabbableElements)(e).sort(
                  s.navigationOrderComparator,
                );
                if (
                  0 === n.length ||
                  (n[0].parentElement &&
                    !p(n[0].parentElement, (0, r.ensureNotNull)(t.current)))
                ) {
                  const o = (function (e) {
                    const n = d(e)
                      .sort(s.navigationOrderComparator)
                      .find((e) => p(e, (0, r.ensureNotNull)(t.current)));
                    if (!n) return null;
                    const o = Array.from(n.children);
                    if (!o.length) return null;
                    return o[0];
                  })(e);
                  if (null === o) return;
                  if (((0, i.becomeMainElement)(o), n.length > 0))
                    for (const e of n) (0, i.becomeSecondaryElement)(e);
                }
              };
            return (
              window.addEventListener("keyboard-navigation-activation", n),
              n(),
              () =>
                window.removeEventListener("keyboard-navigation-activation", n)
            );
          }, []),
          [
            t,
            function (t) {
              if (t.defaultPrevented) return;
              const n = (0, a.hashFromEvent)(t);
              if (!l.includes(n)) return;
              const o = document.activeElement;
              if (!(o instanceof HTMLElement)) return;
              const r = t.currentTarget;
              let i, c;
              if (e) {
                const e = o.parentElement;
                (i = e ? Array.from(e.children) : []), (c = i.indexOf(o));
              } else
                (i = ((p = r),
                Array.from(
                  p.querySelectorAll(
                    "button:not([disabled]):not([aria-disabled])",
                  ),
                ).filter((0, s.createScopedVisibleElementFilter)(p))).sort(
                  s.navigationOrderComparator,
                )),
                  (c = i.indexOf(o));
              var p;
              if (0 === i.length || -1 === c) return;
              const m = (0, s.mapKeyCodeToDirection)(n);
              switch (m) {
                case "inlinePrev":
                  if ((t.preventDefault(), !e && 0 === c)) break;
                  h(u(i, c, -1));
                  break;
                case "inlineNext":
                  if ((t.preventDefault(), !e && c === i.length - 1)) break;
                  h(u(i, c, 1));
                  break;
                case "blockPrev":
                case "blockNext":
                  ((n) => {
                    if (!document.activeElement) return;
                    const o = d(r),
                      s = document.activeElement.parentElement;
                    if (!s) return;
                    const a = Array.from(s.children).indexOf(
                      document.activeElement,
                    );
                    if (-1 === a) return;
                    const i =
                      o[
                        "blockNext" === n ? o.indexOf(s) + 1 : o.indexOf(s) - 1
                      ];
                    if (!i) return;
                    t.preventDefault();
                    const l = Array.from(i.children);
                    l.length && (!e && a <= l.length - 1 ? h(l[a]) : h(l[0]));
                  })(m);
              }
            },
          ]
        );
      }
      function u(e, t, n) {
        return e[(t + e.length + n) % e.length];
      }
      function d(e) {
        return Array.from(e.querySelectorAll('[data-role="row"]')).filter(
          (0, s.createScopedVisibleElementFilter)(e),
        );
      }
      function p(e, t) {
        const n = (0, r.ensureNotNull)(e.parentElement).offsetTop,
          o = n + (0, r.ensureNotNull)(e.parentElement).clientHeight,
          s = t.scrollTop,
          a = s + t.clientHeight;
        return n >= s && o <= a;
      }
      function h(e) {
        document.activeElement &&
          (0, i.becomeSecondaryElement)(document.activeElement),
          (0, i.becomeMainElement)(e),
          e.focus();
      }
    },
    73146: (e, t, n) => {
      "use strict";
      n.d(t, { createAdapter: () => s });
      var o = n(630),
        r = n(72708);
      function s(e) {
        if ((0, o.isLineTool)(e))
          return {
            isPine: () => !1,
            isStandardPine: () => !1,
            canOverrideMinTick: () => !1,
            resolvedSymbolInfoBySymbol: () => {
              throw new TypeError("Only study is supported.");
            },
            symbolsResolved: () => {
              throw new TypeError("Only study is supported.");
            },
            parentSources: () => {
              throw new TypeError("Only study is supported.");
            },
            getAllChildren: () => [],
            sourceId: () => {
              throw new TypeError("Only study is supported.");
            },
            inputs: () => ({}),
            parentSourceForInput: () => {
              throw new TypeError("Only study is supported.");
            },
          };
        if ((0, r.isStudy)(e)) return e;
        if ("isInputsStudy" in e) return e;
        throw new TypeError("Unsupported source type.");
      }
    },
    45560: (e, t, n) => {
      "use strict";
      n.d(t, { useDefinitionProperty: () => s });
      var o = n(50959),
        r = n(71953);
      const s = (e) => {
        const t = "property" in e ? e.property : void 0,
          n = "defaultValue" in e ? e.defaultValue : e.property.value(),
          [s, a] = (0, o.useState)(t ? t.value() : n);
        (0, o.useEffect)(() => {
          if (t) {
            const n = {};
            return (
              a(t.value()),
              t.subscribe(n, (t) => {
                const n = t.value();
                e.handler && e.handler(n), a(n);
              }),
              () => {
                t.unsubscribeAll(n);
              }
            );
          }
          return () => {};
        }, [t]);
        return [
          s,
          (e) => {
            if (void 0 !== t) {
              const n = t.value();
              r.logger.logNormal(
                `Changing property value from "${n}" to "${e}"`,
              ),
                t.setValue(e);
            }
          },
        ];
      };
    },
    78260: (e, t, n) => {
      "use strict";
      n.d(t, { CellWrap: () => i });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(49489);
      function i(e) {
        return o.createElement(
          "div",
          { className: s()(a.wrap, e.className) },
          e.children,
        );
      }
    },
    53424: (e, t, n) => {
      "use strict";
      n.d(t, { CheckableTitle: () => c });
      var o = n(50959),
        r = n(15294),
        s = n(45560);
      function a(e) {
        const { property: t, ...n } = e,
          [a, i] = (0, s.useDefinitionProperty)({ property: t }),
          l = "mixed" === a;
        return o.createElement(r.Checkbox, {
          ...n,
          name: "toggle-enabled",
          checked: l || a,
          indeterminate: l,
          onChange: function () {
            i("mixed" === a || !a);
          },
        });
      }
      var i = n(78260),
        l = n(31260);
      function c(e) {
        const { property: t, disabled: n, title: r, className: s, name: c } = e,
          u = o.createElement("span", { className: l.title }, r);
        return o.createElement(
          i.CellWrap,
          { className: s },
          t
            ? o.createElement(a, {
                name: c,
                className: l.checkbox,
                property: t,
                disabled: n,
                label: u,
                labelAlignBaseline: !0,
              })
            : u,
        );
      }
    },
    31356: (e, t, n) => {
      "use strict";
      n.d(t, { CommonSection: () => a });
      var o = n(50959),
        r = n(71891),
        s = n(53424);
      n(5123);
      function a(e) {
        const {
          id: t,
          offset: n,
          disabled: a,
          checked: i,
          title: l,
          children: c,
          solutionId: u,
          infoTooltip: d,
        } = e;
        return o.createElement(
          r.PropertyTable.Row,
          null,
          o.createElement(
            r.PropertyTable.Cell,
            {
              placement: "first",
              verticalAlign: "adaptive",
              offset: n,
              "data-section-name": t,
              colSpan: Boolean(c) ? void 0 : 2,
              checkableTitle: !0,
            },
            o.createElement(s.CheckableTitle, {
              name: `is-enabled-${t}`,
              title: l,
              disabled: a,
              property: i,
            }),
            u && !Boolean(c) && !1,
            d && !Boolean(c) && !1,
          ),
          Boolean(c) &&
            o.createElement(
              r.PropertyTable.Cell,
              { placement: "last", "data-section-name": t },
              c,
              u && !1,
              d && !1,
            ),
        );
      }
    },
    86067: (e, t, n) => {
      "use strict";
      n.d(t, { GroupTitleSection: () => i });
      var o = n(50959),
        r = n(71891),
        s = n(53424),
        a = n(948);
      function i(e) {
        return o.createElement(
          r.PropertyTable.Row,
          null,
          o.createElement(
            r.PropertyTable.Cell,
            {
              className: a.titleWrap,
              placement: "first",
              verticalAlign: "adaptive",
              colSpan: 2,
              "data-section-name": e.name,
              checkableTitle: !0,
            },
            o.createElement(s.CheckableTitle, {
              title: e.title,
              name: `is-enabled-${e.name}`,
              className: a.title,
            }),
          ),
        );
      }
    },
    71953: (e, t, n) => {
      "use strict";
      n.d(t, { logger: () => o });
      const o = (0, n(31955).getLogger)("Platform.GUI.PropertyDefinitionTrace");
    },
    35789: (e, t, n) => {
      "use strict";
      n.d(t, { ColorPicker: () => Z });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(11542),
        i = n(59369),
        l = n(43688),
        c = n(93532),
        u = n(45582),
        d = Math.ceil,
        p = Math.max;
      const h = function (e, t, n) {
        t = (n ? (0, c.default)(e, t, n) : void 0 === t)
          ? 1
          : p((0, u.default)(t), 0);
        var o = null == e ? 0 : e.length;
        if (!o || t < 1) return [];
        for (var r = 0, s = 0, a = Array(d(o / t)); r < o; )
          a[s++] = (0, l.default)(e, r, (r += t));
        return a;
      };
      var m = n(24377),
        v = n(50151),
        f = n(49483),
        g = n(20520),
        b = n(16396),
        C = n(6914),
        y = n(50238),
        E = n(93544),
        w = n(6294);
      function S(e) {
        const { color: t, selected: s, onSelect: i, onSwatchRemove: l } = e,
          [c, u] = (0, o.useState)(!1),
          [d, p] = (0, y.useRovingTabindexElement)(null),
          h = Boolean(l) && !f.CheckMobile.any();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement("button", {
            ref: d,
            style: t ? { color: t } : void 0,
            className: r(
              w.swatch,
              c && w.hover,
              s && w.selected,
              !t && w.empty,
              String(t).toLowerCase() === C.white && w.white,
            ),
            onClick: function () {
              i(t);
            },
            onContextMenu: h ? m : void 0,
            tabIndex: p,
            "data-role": "swatch",
          }),
          h &&
            o.createElement(
              g.PopupMenu,
              {
                isOpened: c,
                onClose: m,
                position: function () {
                  const e = (0, v.ensureNotNull)(
                    d.current,
                  ).getBoundingClientRect();
                  return { x: e.left, y: e.top + e.height + 4 };
                },
                onClickOutside: m,
              },
              o.createElement(b.PopupMenuItem, {
                className: w.contextItem,
                label: a.t(null, void 0, n(89984)),
                icon: E,
                onClick: function () {
                  m(), (0, v.ensureDefined)(l)();
                },
                dontClosePopup: !0,
              }),
            ),
        );
        function m() {
          u(!c);
        }
      }
      function _(e) {
        const {
          colors: t,
          color: n,
          children: r,
          onSelect: s,
          onRemoveCustomColor: a,
        } = e;
        if (!t) return null;
        const i = n ? (0, m.parseRgb)(String(n)) : void 0,
          l = h(t, 10);
        return o.createElement(
          "div",
          { className: w.swatches },
          l.map((e, t) =>
            o.createElement(
              "div",
              { className: w.row, "data-role": "row", key: t },
              e.map((e, n) =>
                o.createElement(S, {
                  key: String(e) + n,
                  color: e,
                  selected:
                    i && (0, m.areEqualRgb)(i, (0, m.parseRgb)(String(e))),
                  onSelect: c,
                  onSwatchRemove: a
                    ? () =>
                        (function (e, t) {
                          const n = 10 * e + t;
                          null == a || a(n);
                        })(t, n)
                    : void 0,
                }),
              ),
            ),
          ),
          r,
        );
        function c(e) {
          s && s(e);
        }
      }
      var x = n(54368),
        N = n(94720);
      function T(e) {
        const t = `Invalid RGB color: ${e}`;
        if (null === e) throw new Error(t);
        const n = e.match(/^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i);
        if (null === n) throw new Error(t);
        const [, o, r, s] = n;
        if (!o || !r || !s) throw new Error(t);
        const a = parseInt(o, 16) / 255,
          i = parseInt(r, 16) / 255,
          l = parseInt(s, 16) / 255,
          c = Math.max(a, i, l),
          u = Math.min(a, i, l);
        let d;
        const p = c,
          h = c - u,
          m = 0 === c ? 0 : h / c;
        if (c === u) d = 0;
        else {
          switch (c) {
            case a:
              d = (i - l) / h + (i < l ? 6 : 0);
              break;
            case i:
              d = (l - a) / h + 2;
              break;
            case l:
              d = (a - i) / h + 4;
              break;
            default:
              d = 0;
          }
          d /= 6;
        }
        return { h: d, s: m, v: p };
      }
      var k = n(43370),
        I = n(68335),
        P = n(9859),
        B = n(52650);
      const D = [37, 39, 38, 40],
        M = 0.01;
      class O extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._container = null),
            (this._refContainer = (e) => {
              this._container = e;
            }),
            (this._handlePosition = (e) => {
              const {
                hsv: { h: t },
                onChange: n,
              } = this.props;
              if (!n) return;
              const o = (0, v.ensureNotNull)(
                  this._container,
                ).getBoundingClientRect(),
                r = e.clientX - o.left,
                s = e.clientY - o.top;
              n({
                h: t,
                s: (0, P.clamp)(r / o.width, 0, 1),
                v: (0, P.clamp)(1 - s / o.height, 0, 1),
              });
            }),
            (this._handleKeyDown = (e) => {
              const {
                  hsv: { h: t, s: n, v: o },
                  onChange: r,
                } = this.props,
                s = (0, I.hashFromEvent)(e);
              if (!r || !D.includes(s)) return;
              if (37 === s || 39 === s) {
                return void r({
                  h: t,
                  s: (0, P.clamp)(37 === s ? n - M : n + M, 0, 1),
                  v: o,
                });
              }
              r({
                h: t,
                s: n,
                v: (0, P.clamp)(40 === s ? o - M : o + M, 0, 1),
              });
            }),
            (this._mouseDown = (e) => {
              window.addEventListener("mouseup", this._mouseUp),
                window.addEventListener("mousemove", this._mouseMove);
            }),
            (this._mouseUp = (e) => {
              window.removeEventListener("mousemove", this._mouseMove),
                window.removeEventListener("mouseup", this._mouseUp),
                this._handlePosition(e);
            }),
            (this._mouseMove = (0, k.default)(this._handlePosition, 100)),
            (this._handleTouch = (e) => {
              this._handlePosition(e.nativeEvent.touches[0]);
            });
        }
        render() {
          const {
              className: e,
              hsv: { h: t, s: n, v: r },
            } = this.props,
            a = `hsl(${360 * t}, 100%, 50%)`;
          return o.createElement(
            "div",
            {
              tabIndex: 0,
              className: s()(B.accessible, e),
              onKeyDown: this._handleKeyDown,
            },
            o.createElement(
              "div",
              {
                className: B.saturation,
                style: { backgroundColor: a },
                ref: this._refContainer,
                onMouseDown: this._mouseDown,
                onTouchStart: this._handleTouch,
                onTouchMove: this._handleTouch,
              },
              o.createElement("div", {
                className: B.pointer,
                style: { left: 100 * n + "%", top: 100 * (1 - r) + "%" },
              }),
            ),
          );
        }
      }
      var R = n(30338);
      class V extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._container = null),
            (this._refContainer = (e) => {
              this._container = e;
            }),
            (this._handlePosition = (e) => {
              const {
                hsv: { s: t, v: n },
                onChange: o,
              } = this.props;
              if (!o) return;
              const r = (0, v.ensureNotNull)(
                  this._container,
                ).getBoundingClientRect(),
                s = e.clientY - r.top;
              o({ h: (0, P.clamp)(s / r.height, 0, 1), s: t, v: n });
            }),
            (this._handleKeyDown = (e) => {
              const {
                  hsv: { h: t, s: n, v: o },
                  onChange: r,
                } = this.props,
                s = (0, I.hashFromEvent)(e);
              if (!r || (38 !== s && 40 !== s)) return;
              r({
                h: (0, P.clamp)(38 === s ? t - 0.01 : t + 0.01, 0, 1),
                s: n,
                v: o,
              });
            }),
            (this._mouseDown = (e) => {
              window.addEventListener("mouseup", this._mouseUp),
                window.addEventListener("mousemove", this._mouseMove);
            }),
            (this._mouseUp = (e) => {
              window.removeEventListener("mousemove", this._mouseMove),
                window.removeEventListener("mouseup", this._mouseUp),
                this._handlePosition(e);
            }),
            (this._mouseMove = (0, k.default)(this._handlePosition, 100)),
            (this._handleTouch = (e) => {
              this._handlePosition(e.nativeEvent.touches[0]);
            });
        }
        render() {
          const {
            className: e,
            hsv: { h: t },
          } = this.props;
          return o.createElement(
            "div",
            {
              className: s()(R.hue, R.accessible, e),
              tabIndex: 0,
              onKeyDown: this._handleKeyDown,
            },
            o.createElement(
              "div",
              {
                className: R.pointerContainer,
                ref: this._refContainer,
                onMouseDown: this._mouseDown,
                onTouchStart: this._handleTouch,
                onTouchMove: this._handleTouch,
              },
              o.createElement("div", {
                className: R.pointer,
                style: { top: 100 * t + "%" },
              }),
            ),
          );
        }
      }
      var F = n(11988);
      const L = "#000000",
        W = a.t(null, { context: "Color Picker" }, n(55517));
      class A extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._inputRef = o.createRef()),
            (this._handleHSV = (e) => {
              const t =
                (function (e) {
                  const { h: t, s: n, v: o } = e;
                  let r, s, a;
                  const i = Math.floor(6 * t),
                    l = 6 * t - i,
                    c = o * (1 - n),
                    u = o * (1 - l * n),
                    d = o * (1 - (1 - l) * n);
                  switch (i % 6) {
                    case 0:
                      (r = o), (s = d), (a = c);
                      break;
                    case 1:
                      (r = u), (s = o), (a = c);
                      break;
                    case 2:
                      (r = c), (s = o), (a = d);
                      break;
                    case 3:
                      (r = c), (s = u), (a = o);
                      break;
                    case 4:
                      (r = d), (s = c), (a = o);
                      break;
                    case 5:
                      (r = o), (s = c), (a = u);
                      break;
                    default:
                      (r = 0), (s = 0), (a = 0);
                  }
                  return (
                    "#" +
                    [255 * r, 255 * s, 255 * a]
                      .map((e) =>
                        ("0" + Math.round(e).toString(16)).replace(
                          /.+?([a-f0-9]{2})$/i,
                          "$1",
                        ),
                      )
                      .join("")
                  );
                })(e) || L;
              this.setState({ color: t, inputColor: q(t), hsv: e }),
                this.props.onSelect(t);
            }),
            (this._handleInput = (e) => {
              const t = q(e.currentTarget.value);
              try {
                const e = T(t),
                  n = `#${t}`;
                this.setState({ color: n, inputColor: t, hsv: e }),
                  this.props.onSelect(n);
              } catch (e) {
                this.setState({ inputColor: t });
              }
            }),
            (this._handleAddColor = () => this.props.onAdd(this.state.color));
          const t = e.color || L;
          this.state = { color: t, inputColor: q(t), hsv: T(t) };
        }
        componentDidMount() {
          var e;
          f.CheckMobile.any() ||
            null === (e = this._inputRef.current) ||
            void 0 === e ||
            e.focus();
        }
        render() {
          const { color: e, hsv: t, inputColor: n } = this.state;
          return o.createElement(
            "div",
            { className: F.container },
            o.createElement(
              "div",
              { className: F.form },
              o.createElement("div", {
                className: F.swatch,
                style: { backgroundColor: e },
              }),
              o.createElement(
                "div",
                { className: F.inputWrap },
                o.createElement("span", { className: F.inputHash }, "#"),
                o.createElement("input", {
                  ref: this._inputRef,
                  type: "text",
                  className: F.input,
                  value: n,
                  onChange: this._handleInput,
                }),
              ),
              o.createElement(
                "div",
                { className: F.buttonWrap },
                o.createElement(
                  N.Button,
                  { size: "s", onClick: this._handleAddColor },
                  W,
                ),
              ),
            ),
            o.createElement(
              "div",
              { className: F.hueSaturationWrap },
              o.createElement(O, {
                className: F.saturation,
                hsv: t,
                onChange: this._handleHSV,
              }),
              o.createElement(V, {
                className: F.hue,
                hsv: t,
                onChange: this._handleHSV,
              }),
            ),
          );
        }
      }
      function q(e) {
        return e.replace(/^#/, "");
      }
      var z = n(94996);
      const H = a.t(null, { context: "Color Picker" }, n(29619)),
        U = a.t(
          null,
          {
            context: "Color Picker",
          },
          n(80936),
        );
      function Z(e) {
        const {
            color: t,
            opacity: n,
            selectCustom: r,
            selectOpacity: a,
            customColors: l,
            onRemoveCustomColor: c,
            onToggleCustom: u,
            onOpacityChange: d,
            menu: p,
          } = e,
          [h, m] = (0, o.useState)(!1),
          v = "number" == typeof n ? n : 1,
          [f, g] = (0, i.useRowsNavigation)();
        return (
          (0, o.useLayoutEffect)(() => {
            p && p.update();
          }, [a, p]),
          h
            ? o.createElement(A, {
                color: t,
                onSelect: b,
                onAdd: function (t) {
                  m(!1), null == u || u(!1);
                  const { onAddColor: n } = e;
                  n && n(t);
                },
              })
            : o.createElement(
                "div",
                { className: z.container },
                o.createElement(
                  "div",
                  { ref: f, onKeyDown: g },
                  o.createElement(_, {
                    colors: C.basic,
                    color: t,
                    onSelect: b,
                  }),
                  o.createElement(_, {
                    colors: C.extended,
                    color: t,
                    onSelect: b,
                  }),
                  o.createElement("div", { className: z.separator }),
                  o.createElement(
                    _,
                    {
                      colors: l,
                      color: t,
                      onSelect: b,
                      onRemoveCustomColor: c,
                    },
                    r &&
                      o.createElement(
                        o.Fragment,
                        null,
                        (null == l ? void 0 : l.length)
                          ? o.createElement("button", {
                              title: H,
                              onClick: y,
                              className: s()(
                                z.customButton,
                                z.accessible,
                                "apply-common-tooltip",
                              ),
                              tabIndex: -1,
                            })
                          : o.createElement(
                              "div",
                              { "data-role": "row" },
                              o.createElement("button", {
                                title: H,
                                onClick: y,
                                className: s()(
                                  z.customButton,
                                  z.accessible,
                                  "apply-common-tooltip",
                                ),
                                tabIndex: -1,
                              }),
                            ),
                      ),
                  ),
                ),
                a &&
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement("div", { className: z.sectionTitle }, U),
                    o.createElement(x.Opacity, {
                      color: t,
                      opacity: v,
                      onChange: function (e) {
                        d && d(e);
                      },
                    }),
                  ),
              )
        );
        function b(t) {
          const { onColorChange: n } = e;
          n && n(t, h);
        }
        function y(e) {
          m(!0), null == u || u(!0);
        }
      }
    },
    54368: (e, t, n) => {
      "use strict";
      n.d(t, { Opacity: () => c });
      var o = n(50959),
        r = n(97754),
        s = n(50151),
        a = n(9859),
        i = n(68335),
        l = n(3252);
      class c extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._container = null),
            (this._pointer = null),
            (this._raf = null),
            (this._refContainer = (e) => {
              this._container = e;
            }),
            (this._refPointer = (e) => {
              this._pointer = e;
            }),
            (this._handlePosition = (e) => {
              null === this._raf &&
                (this._raf = requestAnimationFrame(() => {
                  const t = (0, s.ensureNotNull)(this._container),
                    n = (0, s.ensureNotNull)(this._pointer),
                    o = t.getBoundingClientRect(),
                    r = n.offsetWidth,
                    i = e.clientX - r / 2 - o.left,
                    l = (0, a.clamp)(i / (o.width - r), 0, 1);
                  this.setState({
                    inputOpacity: Math.round(100 * l).toString(),
                  }),
                    this.props.onChange(l),
                    (this._raf = null);
                }));
            }),
            (this._onSliderClick = (e) => {
              this._handlePosition(e.nativeEvent), this._dragSubscribe();
            }),
            (this._mouseUp = (e) => {
              this.setState({ isPointerDragged: !1 }),
                this._dragUnsubscribe(),
                this._handlePosition(e);
            }),
            (this._mouseMove = (e) => {
              this.setState({ isPointerDragged: !0 }), this._handlePosition(e);
            }),
            (this._onTouchStart = (e) => {
              this._handlePosition(e.nativeEvent.touches[0]);
            }),
            (this._handleTouch = (e) => {
              this.setState({ isPointerDragged: !0 }),
                this._handlePosition(e.nativeEvent.touches[0]);
            }),
            (this._handleTouchEnd = () => {
              this.setState({ isPointerDragged: !1 });
            }),
            (this._handleInput = (e) => {
              const t = e.currentTarget.value,
                n = Number(t) / 100;
              this.setState({ inputOpacity: t }),
                Number.isNaN(n) || n > 1 || this.props.onChange(n);
            }),
            (this._handleKeyDown = (e) => {
              const t = (0, i.hashFromEvent)(e);
              if (37 !== t && 39 !== t) return;
              e.preventDefault();
              const n = Number(this.state.inputOpacity);
              37 === t && 0 !== n && this._changeOpacity(n - 1),
                39 === t && 100 !== n && this._changeOpacity(n + 1);
            }),
            (this.state = {
              inputOpacity: Math.round(100 * e.opacity).toString(),
              isPointerDragged: !1,
            });
        }
        componentWillUnmount() {
          null !== this._raf &&
            (cancelAnimationFrame(this._raf), (this._raf = null)),
            this._dragUnsubscribe();
        }
        render() {
          const {
              color: e,
              opacity: t,
              hideInput: n,
              disabled: s,
            } = this.props,
            { inputOpacity: a, isPointerDragged: i } = this.state,
            c = { color: e || void 0 };
          return o.createElement(
            "div",
            { className: l.opacity },
            o.createElement(
              "div",
              {
                className: r(l.opacitySlider, l.accessible),
                style: c,
                tabIndex: s ? -1 : 0,
                ref: this._refContainer,
                onMouseDown: this._onSliderClick,
                onTouchStart: this._onTouchStart,
                onTouchMove: this._handleTouch,
                onTouchEnd: this._handleTouchEnd,
                onKeyDown: this._handleKeyDown,
                "aria-disabled": s,
              },
              o.createElement("div", {
                className: l.opacitySliderGradient,
                style: {
                  backgroundImage: `linear-gradient(90deg, transparent, ${e})`,
                },
              }),
              o.createElement(
                "div",
                { className: l.opacityPointerWrap },
                o.createElement("div", {
                  className: r(l.pointer, i && l.dragged),
                  style: { left: 100 * t + "%" },
                  ref: this._refPointer,
                }),
              ),
            ),
            !n &&
              o.createElement(
                "div",
                { className: l.opacityInputWrap },
                o.createElement("input", {
                  type: "text",
                  className: l.opacityInput,
                  value: a,
                  onChange: this._handleInput,
                }),
                o.createElement(
                  "span",
                  { className: l.opacityInputPercent },
                  "%",
                ),
              ),
          );
        }
        _dragSubscribe() {
          const e = (0, s.ensureNotNull)(this._container).ownerDocument;
          e &&
            (e.addEventListener("mouseup", this._mouseUp),
            e.addEventListener("mousemove", this._mouseMove));
        }
        _dragUnsubscribe() {
          const e = (0, s.ensureNotNull)(this._container).ownerDocument;
          e &&
            (e.removeEventListener("mousemove", this._mouseMove),
            e.removeEventListener("mouseup", this._mouseUp));
        }
        _changeOpacity(e) {
          this.setState({ inputOpacity: e.toString() }),
            this.props.onChange(e / 100);
        }
      }
    },
    6914: (e, t, n) => {
      "use strict";
      n.d(t, { basic: () => i, extended: () => c, white: () => r });
      var o = n(19625);
      const r = o.colorsPalette["color-white"],
        s = [
          "ripe-red",
          "tan-orange",
          "banana-yellow",
          "iguana-green",
          "minty-green",
          "sky-blue",
          "tv-blue",
          "deep-blue",
          "grapes-purple",
          "berry-pink",
        ],
        a = [200, 300, 400, 500, 600, 700, 800, 900].map(
          (e) => `color-cold-gray-${e}`,
        );
      a.unshift("color-white"),
        a.push("color-black"),
        s.forEach((e) => {
          a.push(`color-${e}-500`);
        });
      const i = a.map((e) => o.colorsPalette[e]),
        l = [];
      [100, 200, 300, 400, 700, 900].forEach((e) => {
        s.forEach((t) => {
          l.push(`color-${t}-${e}`);
        });
      });
      const c = l.map((e) => o.colorsPalette[e]);
    },
    59054: (e, t, n) => {
      "use strict";
      n.d(t, { ControlDisclosureView: () => f });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(38528),
        i = n(67029),
        l = n(78274),
        c = n(4523),
        u = n(9745),
        d = n(2948),
        p = n(40352);
      function h(e) {
        const { isDropped: t } = e;
        return o.createElement(u.Icon, {
          className: s()(p.icon, t && p.dropped),
          icon: d,
        });
      }
      function m(e) {
        const { className: t, disabled: n, isDropped: r } = e;
        return o.createElement(
          "span",
          { className: s()(p.button, n && p.disabled, t) },
          o.createElement(h, { isDropped: r }),
        );
      }
      var v = n(44620);
      const f = o.forwardRef((e, t) => {
        const {
            listboxId: n,
            className: r,
            listboxClassName: u,
            listboxTabIndex: d,
            hideArrowButton: p,
            matchButtonAndListboxWidths: h,
            popupPosition: f,
            disabled: g,
            isOpened: b,
            scrollWrapReference: C,
            repositionOnScroll: y,
            closeOnHeaderOverlap: E,
            listboxReference: w,
            size: S = "small",
            onClose: _,
            onOpen: x,
            onListboxFocus: N,
            onListboxBlur: T,
            onListboxKeyDown: k,
            buttonChildren: I,
            children: P,
            caretClassName: B,
            buttonContainerClassName: D,
            listboxAria: M,
            ...O
          } = e,
          R = (0, o.useRef)(null),
          V =
            !p &&
            o.createElement(
              l.EndSlot,
              null,
              o.createElement(m, { isDropped: b, disabled: g, className: B }),
            );
        return o.createElement(c.PopupMenuDisclosureView, {
          buttonRef: R,
          listboxId: n,
          listboxClassName: u,
          listboxTabIndex: d,
          isOpened: b,
          onClose: _,
          onOpen: x,
          listboxReference: w,
          scrollWrapReference: C,
          onListboxFocus: N,
          onListboxBlur: T,
          onListboxKeyDown: k,
          listboxAria: M,
          matchButtonAndListboxWidths: h,
          popupPosition: f,
          button: o.createElement(i.ControlSkeleton, {
            ...O,
            "data-role": "listbox",
            disabled: g,
            className: s()(v.button, r),
            size: S,
            ref: (0, a.useMergedRefs)([R, t]),
            middleSlot: o.createElement(
              l.MiddleSlot,
              null,
              o.createElement(
                "span",
                { className: s()(v["button-children"], p && v.hiddenArrow, D) },
                I,
              ),
            ),
            endSlot: V,
          }),
          popupChildren: P,
          repositionOnScroll: y,
          closeOnHeaderOverlap: E,
        });
      });
      f.displayName = "ControlDisclosureView";
    },
    56512: (e, t, n) => {
      "use strict";
      n.d(t, { useCustomColors: () => c });
      var o = n(50959),
        r = n(56840),
        s = n(76422);
      function a(e, t) {
        (0, o.useEffect)(
          () => (
            s.subscribe(e, t, null),
            () => {
              s.unsubscribe(e, t, null);
            }
          ),
          [e, t],
        );
      }
      var i,
        l = n(24377);
      function c() {
        const [e, t] = (0, o.useState)(
          (0, r.getJSON)("pickerCustomColors", []),
        );
        a("add_new_custom_color", (n) => t(u(n, e))),
          a("remove_custom_color", (n) => t(d(n, e)));
        const n = (0, o.useCallback)(
            (t) => {
              const n = t ? (0, l.parseRgb)(t) : null;
              e.some(
                (e) =>
                  null !== e &&
                  null !== n &&
                  (0, l.areEqualRgb)((0, l.parseRgb)(e), n),
              ) ||
                (s.emit("add_new_custom_color", t),
                (0, r.setJSON)("pickerCustomColors", u(t, e)));
            },
            [e],
          ),
          i = (0, o.useCallback)(
            (t) => {
              (t >= 0 || t < e.length) &&
                (s.emit("remove_custom_color", t),
                (0, r.setJSON)("pickerCustomColors", d(t, e)));
            },
            [e],
          );
        return [e, n, i];
      }
      function u(e, t) {
        const n = t.slice();
        return n.push(e), n.length > 29 && n.shift(), n;
      }
      function d(e, t) {
        return t.filter((t, n) => e !== n);
      }
      !(function (e) {
        (e.SettingsKey = "pickerCustomColors"),
          (e.GlobalAddEventName = "add_new_custom_color"),
          (e.GlobalRemoveEventName = "remove_custom_color"),
          (e[(e.MaxColors = 29)] = "MaxColors");
      })(i || (i = {}));
    },
    90405: (e, t, n) => {
      "use strict";
      n.d(t, { Select: () => y });
      var o = n(50959),
        r = n(43010),
        s = n(22064),
        a = n(38528),
        i = n(16921),
        l = n(16396),
        c = n(12481),
        u = n(43370);
      var d = n(36762),
        p = n(26597),
        h = n(59054),
        m = n(36104),
        v = n(63273),
        f = n(70369);
      function g(e) {
        return !e.readonly;
      }
      function b(e, t) {
        var n;
        return null !== (n = null == t ? void 0 : t.id) && void 0 !== n
          ? n
          : (0, s.createDomId)(e, "item", null == t ? void 0 : t.value);
      }
      function C(e) {
        var t, n;
        const { selectedItem: r, placeholder: s } = e;
        if (!r) return o.createElement("span", { className: f.placeholder }, s);
        const a =
          null !==
            (n =
              null !== (t = r.selectedContent) && void 0 !== t
                ? t
                : r.content) && void 0 !== n
            ? n
            : r.value;
        return o.createElement("span", null, a);
      }
      const y = o.forwardRef((e, t) => {
        const {
          id: n,
          menuClassName: f,
          menuItemClassName: y,
          tabIndex: E,
          disabled: w,
          highlight: S,
          intent: _,
          hideArrowButton: x,
          placeholder: N,
          addPlaceholderToItems: T = !1,
          value: k,
          "aria-labelledby": I,
          onFocus: P,
          onBlur: B,
          onClick: D,
          onChange: M,
          onKeyDown: O,
          repositionOnScroll: R = !0,
          openMenuOnEnter: V = !0,
          "aria-describedby": F,
          "aria-invalid": L,
          ...W
        } = e;
        let { items: A } = e;
        if (N && T) {
          A = [
            {
              value: void 0,
              content: N,
              id: (0, s.createDomId)(n, "placeholder"),
            },
            ...A,
          ];
        }
        const {
            listboxId: q,
            isOpened: z,
            isFocused: H,
            buttonTabIndex: U,
            listboxTabIndex: Z,
            highlight: K,
            intent: G,
            open: $,
            onOpen: Y,
            close: j,
            toggle: Q,
            buttonFocusBindings: X,
            onButtonClick: J,
            buttonRef: ee,
            listboxRef: te,
            buttonAria: ne,
          } = (0, m.useControlDisclosure)({
            id: n,
            disabled: w,
            buttonTabIndex: E,
            intent: _,
            highlight: S,
            onFocus: P,
            onBlur: B,
            onClick: D,
          }),
          oe = A.filter(g),
          re = oe.find((e) => e.value === k),
          [se, ae] = o.useState(
            N && T ? oe[0].value : null == re ? void 0 : re.value,
          ),
          [ie, le, ce] = (0, i.useKeepActiveItemIntoView)({ activeItem: re });
        (0, r.useIsomorphicLayoutEffect)(
          () => ae(null == re ? void 0 : re.value),
          [k],
        );
        const ue = (0, s.joinDomIds)(I, n),
          de = ue.length > 0 ? ue : void 0,
          pe = (0, o.useMemo)(
            () => ({
              role: "listbox",
              "aria-labelledby": I,
              "aria-activedescendant": b(n, re),
            }),
            [I, re],
          ),
          he = (0, o.useCallback)((e) => e.value === se, [se]),
          me = (0, o.useCallback)(() => (j(), M && M(se)), [j, M, se]),
          ve = (0, d.useItemsKeyboardNavigation)(
            "vertical",
            v.isRtl,
            oe,
            he,
            (e) => {
              ae(e.value);
            },
            !1,
            { next: [40], previous: [38] },
          ),
          fe = (0, p.useKeyboardToggle)(Q, z || V),
          ge = (0, p.useKeyboardToggle)(me),
          be = (0, p.useKeyboardClose)(z, _e),
          Ce = (0, p.useKeyboardOpen)(z, $),
          ye = (0, p.useKeyboardEventHandler)([fe, be, Ce]),
          Ee = (0, p.useKeyboardEventHandler)([ve, ge, be]),
          we = (function (e) {
            const t = (0, o.useRef)(""),
              n = (0, o.useMemo)(
                () =>
                  (0, c.default)(() => {
                    t.current = "";
                  }, 500),
                [],
              ),
              r = (0, o.useMemo)(() => (0, u.default)(e, 200), [e]);
            return (0, o.useCallback)(
              (e) => {
                e.key.length > 0 &&
                  e.key.length < 3 &&
                  ((t.current += e.key), r(t.current, e), n());
              },
              [n, r],
            );
          })((t, n) => {
            const o = (function (e, t, n) {
              return e.find((e) => {
                var o;
                const r = t.toLowerCase();
                return (
                  !e.readonly &&
                  (n
                    ? n(e).toLowerCase().startsWith(r)
                    : !e.readonly &&
                      (("string" == typeof e.content &&
                        e.content.toLowerCase().startsWith(r)) ||
                        ("string" == typeof e.textContent &&
                          e.textContent.toLowerCase().startsWith(r)) ||
                        String(null !== (o = e.value) && void 0 !== o ? o : "")
                          .toLowerCase()
                          .startsWith(r)))
                );
              });
            })(oe, t, e.getSearchKey);
            void 0 !== o && M && (n.stopPropagation(), z || $(), M(o.value));
          });
        return o.createElement(
          h.ControlDisclosureView,
          {
            ...W,
            ...ne,
            ...X,
            id: n,
            role: "button",
            tabIndex: U,
            "aria-owns": ne["aria-controls"],
            "aria-haspopup": "listbox",
            "aria-labelledby": de,
            disabled: w,
            hideArrowButton: x,
            isFocused: H,
            isOpened: z,
            highlight: K,
            intent: G,
            ref: (0, a.useMergedRefs)([ee, t]),
            onClick: J,
            onOpen: function () {
              ce(re, { duration: 0 }), Y();
            },
            onClose: _e,
            onKeyDown: function (e) {
              ye(e), O && O(e);
              e.defaultPrevented || we(e);
            },
            listboxId: q,
            listboxTabIndex: Z,
            listboxClassName: f,
            listboxAria: pe,
            "aria-describedby": F,
            "aria-invalid": L,
            listboxReference: te,
            scrollWrapReference: ie,
            onListboxKeyDown: function (e) {
              Ee(e), e.defaultPrevented || we(e);
            },
            buttonChildren: o.createElement(C, {
              selectedItem: null != re ? re : null,
              placeholder: N,
            }),
            repositionOnScroll: R,
          },
          A.map((e, t) => {
            var r;
            if (e.readonly)
              return o.createElement(
                o.Fragment,
                { key: `readonly_item_${t}` },
                e.content,
              );
            const s = b(n, e);
            return o.createElement(l.PopupMenuItem, {
              key: s,
              id: s,
              className: y,
              role: "option",
              "aria-selected": k === e.value,
              isActive: se === e.value,
              label: null !== (r = e.content) && void 0 !== r ? r : e.value,
              onClick: Se,
              onClickArg: e.value,
              isDisabled: e.disabled,
              reference: (t) => le(e, t),
            });
          }),
        );
        function Se(e) {
          M && (M(e), ae(e));
        }
        function _e() {
          ae(null == re ? void 0 : re.value), j();
        }
      });
      y.displayName = "Select";
    },
    90692: (e, t, n) => {
      "use strict";
      n.d(t, { MatchMedia: () => r });
      var o = n(50959);
      class r extends o.PureComponent {
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
      n.d(t, { MenuContext: () => o });
      const o = n(50959).createContext(null);
    },
    27317: (e, t, n) => {
      "use strict";
      n.d(t, { DEFAULT_MENU_THEME: () => f, Menu: () => b });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(50151),
        i = n(9859),
        l = n(14729),
        c = n(50655),
        u = n(59064),
        d = n(67961),
        p = n(4741),
        h = n(83021),
        m = n(64706),
        v = n(79081);
      const f = v;
      var g;
      !(function (e) {
        e[(e.IndentFromWindow = 0)] = "IndentFromWindow";
      })(g || (g = {}));
      class b extends o.PureComponent {
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
              var n, o, r, s, l, c, u, d, p, h, m, v;
              if (this.state.isMeasureValid && !t) return;
              const { position: f } = this.props,
                g = (0, a.ensureNotNull)(this._containerRef);
              let b = g.getBoundingClientRect();
              const C = document.documentElement.clientHeight,
                y = document.documentElement.clientWidth,
                E =
                  null !== (n = this.props.closeOnScrollOutsideOffset) &&
                  void 0 !== n
                    ? n
                    : 0;
              let w = C - 0 - E;
              const S = b.height > w;
              if (S) {
                ((0, a.ensureNotNull)(this._scrollWrapRef).style.overflowY =
                  "scroll"),
                  (b = g.getBoundingClientRect());
              }
              const { width: _, height: x } = b,
                N =
                  "function" == typeof f
                    ? f({
                        contentWidth: _,
                        contentHeight: x,
                        availableWidth: y,
                        availableHeight: C,
                      })
                    : f,
                T =
                  null !==
                    (r =
                      null === (o = null == N ? void 0 : N.indentFromWindow) ||
                      void 0 === o
                        ? void 0
                        : o.left) && void 0 !== r
                    ? r
                    : 0,
                k =
                  y -
                  (null !== (s = N.overrideWidth) && void 0 !== s ? s : _) -
                  (null !==
                    (c =
                      null === (l = null == N ? void 0 : N.indentFromWindow) ||
                      void 0 === l
                        ? void 0
                        : l.right) && void 0 !== c
                    ? c
                    : 0),
                I = (0, i.clamp)(N.x, T, Math.max(T, k)),
                P =
                  (null !==
                    (d =
                      null === (u = null == N ? void 0 : N.indentFromWindow) ||
                      void 0 === u
                        ? void 0
                        : u.top) && void 0 !== d
                    ? d
                    : 0) + E,
                B =
                  C -
                  (null !== (p = N.overrideHeight) && void 0 !== p ? p : x) -
                  (null !==
                    (m =
                      null === (h = null == N ? void 0 : N.indentFromWindow) ||
                      void 0 === h
                        ? void 0
                        : h.bottom) && void 0 !== m
                    ? m
                    : 0);
              let D = (0, i.clamp)(N.y, P, Math.max(P, B));
              if (
                (N.forbidCorrectYCoord &&
                  D < N.y &&
                  ((w -= N.y - D), (D = N.y)),
                t &&
                  void 0 !== this.props.closeOnScrollOutsideOffset &&
                  N.y <= this.props.closeOnScrollOutsideOffset)
              )
                return void this._handleGlobalClose(!0);
              const M =
                null !== (v = N.overrideHeight) && void 0 !== v
                  ? v
                  : S
                    ? w
                    : void 0;
              this.setState(
                {
                  appearingMenuHeight: t ? this.state.appearingMenuHeight : M,
                  appearingMenuWidth: t
                    ? this.state.appearingMenuWidth
                    : N.overrideWidth,
                  appearingPosition: { x: I, y: D },
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
                t = (0, a.ensureNotNull)(this._containerRef);
              if (null !== e && t.contains(e))
                try {
                  e.scrollIntoView();
                } catch (e) {}
              else
                (0, a.ensureNotNull)(this._scrollWrapRef).scrollTop =
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
              this._scroll = (0, a.ensureNotNull)(
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
            customCloseDelegate: e = u.globalCloseDelegate,
            customRemeasureDelegate: t,
          } = this.props;
          e.subscribe(this, this._handleGlobalClose),
            null == t || t.subscribe(null, this._handleCustomRemeasureDelegate),
            window.addEventListener("resize", this._resize);
          const n = null !== this.context;
          this._hotkeys ||
            n ||
            ((this._hotkeys = p.createGroup({ desc: "Popup menu" })),
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
            customCloseDelegate: e = u.globalCloseDelegate,
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
              "aria-labelledby": r,
              "aria-activedescendant": a,
              "aria-hidden": i,
              "aria-describedby": u,
              "aria-invalid": d,
              children: p,
              minWidth: f,
              theme: g = v,
              className: b,
              maxHeight: y,
              onMouseOver: E,
              onMouseOut: w,
              onKeyDown: S,
              onFocus: _,
              onBlur: x,
            } = this.props,
            {
              appearingMenuHeight: N,
              appearingMenuWidth: T,
              appearingPosition: k,
              isMeasureValid: I,
            } = this.state,
            P = {
              "--ui-kit-menu-max-width": `${k && k.x}px`,
              maxWidth: "calc(100vw - var(--ui-kit-menu-max-width) - 6px)",
            };
          return o.createElement(
            m.MenuContext.Provider,
            { value: this },
            o.createElement(
              h.SubmenuHandler,
              null,
              o.createElement(
                c.SlotContext.Provider,
                { value: this._manager },
                o.createElement(
                  "div",
                  {
                    id: e,
                    role: t,
                    "aria-label": n,
                    "aria-labelledby": r,
                    "aria-activedescendant": a,
                    "aria-hidden": i,
                    "aria-describedby": u,
                    "aria-invalid": d,
                    className: s()(b, g.menuWrap, !I && g.isMeasuring),
                    style: {
                      height: N,
                      left: k && k.x,
                      minWidth: f,
                      position: "fixed",
                      top: k && k.y,
                      width: T,
                      ...(this.props.limitMaxWidth && P),
                    },
                    "data-name": this.props["data-name"],
                    ref: this._handleContainerRef,
                    onScrollCapture: this.props.onScroll,
                    onContextMenu: l.preventDefaultForContextMenu,
                    tabIndex: this.props.tabIndex,
                    onMouseOver: E,
                    onMouseOut: w,
                    onKeyDown: S,
                    onFocus: _,
                    onBlur: x,
                  },
                  o.createElement(
                    "div",
                    {
                      className: s()(
                        g.scrollWrap,
                        !this.props.noMomentumBasedScroll && g.momentumBased,
                      ),
                      style: {
                        overflowY: void 0 !== N ? "scroll" : "auto",
                        maxHeight: y,
                      },
                      onScrollCapture: this._handleScroll,
                      ref: this._handleScrollWrapRef,
                    },
                    o.createElement(C, { className: g.menuBox }, p),
                  ),
                ),
              ),
              o.createElement(c.Slot, { reference: this._handleSlot }),
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
      function C(e) {
        const t = (0, a.ensureNotNull)((0, o.useContext)(h.SubmenuContext)),
          n = o.useRef(null);
        return o.createElement(
          "div",
          {
            ref: n,
            className: e.className,
            onMouseOver: function (e) {
              if (
                !(
                  null !== t.current &&
                  e.target instanceof Node &&
                  ((o = e.target),
                  null === (r = n.current) || void 0 === r
                    ? void 0
                    : r.contains(o))
                )
              )
                return;
              var o, r;
              t.isSubmenuNode(e.target) || t.setCurrent(null);
            },
            "data-name": "menu-inner",
          },
          e.children,
        );
      }
      b.contextType = h.SubmenuContext;
    },
    29197: (e, t, n) => {
      "use strict";
      n.d(t, { CloseDelegateContext: () => s });
      var o = n(50959),
        r = n(59064);
      const s = o.createContext(r.globalCloseDelegate);
    },
    20520: (e, t, n) => {
      "use strict";
      n.d(t, { PopupMenu: () => p });
      var o = n(50959),
        r = n(32227),
        s = n(62942),
        a = n(42842),
        i = n(27317),
        l = n(29197);
      const c = o.createContext(void 0);
      var u = n(36383);
      const d = o.createContext({ setMenuMaxWidth: !1 });
      function p(e) {
        const {
            controller: t,
            children: n,
            isOpened: p,
            closeOnClickOutside: h = !0,
            doNotCloseOn: m,
            onClickOutside: v,
            onClose: f,
            onKeyboardClose: g,
            "data-name": b = "popup-menu-container",
            ...C
          } = e,
          y = (0, o.useContext)(l.CloseDelegateContext),
          E = o.useContext(d),
          w = (0, o.useContext)(c),
          S = (0, u.useOutsideEvent)({
            handler: function (e) {
              v && v(e);
              if (!h) return;
              const t = (0, s.default)(m) ? m() : null == m ? [] : [m];
              if (t.length > 0 && e.target instanceof Node)
                for (const n of t) {
                  const t = r.findDOMNode(n);
                  if (t instanceof Node && t.contains(e.target)) return;
                }
              f();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return p
          ? o.createElement(
              a.Portal,
              {
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                pointerEvents: "none",
              },
              o.createElement(
                "span",
                { ref: S, style: { pointerEvents: "auto" } },
                o.createElement(
                  i.Menu,
                  {
                    ...C,
                    onClose: f,
                    onKeyboardClose: g,
                    onScroll: function (t) {
                      const { onScroll: n } = e;
                      n && n(t);
                    },
                    customCloseDelegate: y,
                    customRemeasureDelegate: w,
                    ref: t,
                    "data-name": b,
                    limitMaxWidth: E.setMenuMaxWidth,
                  },
                  n,
                ),
              ),
            )
          : null;
      }
    },
    50655: (e, t, n) => {
      "use strict";
      n.d(t, { Slot: () => o.Slot, SlotContext: () => o.SlotContext });
      var o = n(99663);
    },
    86656: (e, t, n) => {
      "use strict";
      n.d(t, { TouchScrollContainer: () => c });
      var o = n(50959),
        r = n(59142),
        s = n(50151),
        a = n(49483);
      const i = CSS.supports("overscroll-behavior", "none");
      let l = 0;
      const c = (0, o.forwardRef)((e, t) => {
        const { children: n, ...s } = e,
          c = (0, o.useRef)(null);
        return (
          (0, o.useImperativeHandle)(t, () => c.current),
          (0, o.useLayoutEffect)(() => {
            if (a.CheckMobile.iOS())
              return (
                l++,
                null !== c.current &&
                  (i
                    ? 1 === l &&
                      (document.body.style.overscrollBehavior = "none")
                    : (0, r.disableBodyScroll)(c.current, {
                        allowTouchMove: u(c),
                      })),
                () => {
                  l--,
                    null !== c.current &&
                      (i
                        ? 0 === l &&
                          (document.body.style.overscrollBehavior = "")
                        : (0, r.enableBodyScroll)(c.current));
                }
              );
          }, []),
          o.createElement("div", { ref: c, ...s }, n)
        );
      });
      function u(e) {
        return (t) => {
          const n = (0, s.ensureNotNull)(e.current),
            o = document.activeElement;
          return (
            !n.contains(t) || (null !== o && n.contains(o) && o.contains(t))
          );
        };
      }
    },
    29593: (e) => {
      e.exports = {
        titleWrap: "titleWrap-Izz3hpJc",
        groupFooter: "groupFooter-Izz3hpJc",
      };
    },
    97262: (e) => {
      e.exports = { wrapper: "wrapper-JXHzsa7P" };
    },
    82149: (e) => {
      e.exports = { inlineRow: "inlineRow-D8g11qqA" };
    },
    10114: (e) => {
      e.exports = {
        container: "container-QyF09i7Y",
        hasTooltip: "hasTooltip-QyF09i7Y",
        datePickerWrapper: "datePickerWrapper-QyF09i7Y",
        timePickerWrapper: "timePickerWrapper-QyF09i7Y",
      };
    },
    16359: (e) => {
      e.exports = {
        input: "input-ZOx_CVY3",
        symbol: "symbol-ZOx_CVY3",
        checkbox: "checkbox-ZOx_CVY3",
        label: "label-ZOx_CVY3",
        dropdownMenu: "dropdownMenu-ZOx_CVY3",
        sessionStart: "sessionStart-ZOx_CVY3",
        sessionEnd: "sessionEnd-ZOx_CVY3",
        sessionInputContainer: "sessionInputContainer-ZOx_CVY3",
        sessionDash: "sessionDash-ZOx_CVY3",
        inputGroup: "inputGroup-ZOx_CVY3",
        textarea: "textarea-ZOx_CVY3",
        inlineGroup: "inlineGroup-ZOx_CVY3",
        hasTooltip: "hasTooltip-ZOx_CVY3",
      };
    },
    29725: (e) => {
      e.exports = {
        content: "content-tBgV1m0B",
        cell: "cell-tBgV1m0B",
        inner: "inner-tBgV1m0B",
        first: "first-tBgV1m0B",
        inlineCell: "inlineCell-tBgV1m0B",
        fill: "fill-tBgV1m0B",
        top: "top-tBgV1m0B",
        topCenter: "topCenter-tBgV1m0B",
        offset: "offset-tBgV1m0B",
        inlineRow: "inlineRow-tBgV1m0B",
        grouped: "grouped-tBgV1m0B",
        separator: "separator-tBgV1m0B",
        groupSeparator: "groupSeparator-tBgV1m0B",
        big: "big-tBgV1m0B",
        adaptive: "adaptive-tBgV1m0B",
        checkableTitle: "checkableTitle-tBgV1m0B",
      };
    },
    72929: (e) => {
      e.exports = {
        wrap: "wrap-QutFvTLS",
        labelWrap: "labelWrap-QutFvTLS",
        label: "label-QutFvTLS",
        hasTooltip: "hasTooltip-QutFvTLS",
      };
    },
    57177: (e, t, n) => {
      "use strict";
      var o;
      function r(e) {
        e.dispatchEvent(new CustomEvent("roving-tabindex:main-element"));
      }
      function s(e) {
        e.dispatchEvent(new CustomEvent("roving-tabindex:secondary-element"));
      }
      n.d(t, { becomeMainElement: () => r, becomeSecondaryElement: () => s }),
        (function (e) {
          (e.MainElement = "roving-tabindex:main-element"),
            (e.SecondaryElement = "roving-tabindex:secondary-element");
        })(o || (o = {}));
    },
    60090: (e, t, n) => {
      "use strict";
      n.d(t, { bind: () => a, setter: () => i });
      var o = n(50959),
        r = n(27032),
        s = n(27365);
      function a(e) {
        var t;
        return (
          (t = class extends o.PureComponent {
            constructor() {
              super(...arguments),
                (this._onChange = (e, t, n) => {
                  const { setValue: o } = this.context,
                    { onChange: r } = this.props;
                  i(o, r)(e, t, n);
                });
            }
            render() {
              const { input: t } = this.props,
                { values: n, model: r } = this.context;
              return o.createElement(e, {
                ...this.props,
                value: n[t.id],
                tzName: (0, s.getTimezoneName)(r),
                onChange: this._onChange,
              });
            }
          }),
          (t.contextType = r.PropertyContext),
          t
        );
      }
      function i(e, t) {
        return (n, o, r) => {
          e(o, n, r), t && t(n, o, r);
        };
      }
    },
    27032: (e, t, n) => {
      "use strict";
      n.d(t, { PropertyContainer: () => h, PropertyContext: () => p });
      var o = n(50959),
        r = n(50151),
        s = n(11542),
        a = n(45126),
        i = n(31955),
        l = n(72708),
        c = n(85719);
      const u = (0, i.getLogger)("Platform.GUI.StudyInputPropertyContainer"),
        d = new a.TranslatedString(
          "change {propertyName} property",
          s.t(null, void 0, n(25167)),
        ),
        p = o.createContext(null);
      class h extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._setValue = (e, t, o) => {
              const { property: i, model: p, study: h } = this.props,
                m = !(0, l.isStudy)(h),
                v = (0, r.ensureDefined)(i.child(e));
              u.logNormal(
                `Changing property "${e}" value from "${i.value()}" to "${t}"`,
              );
              const f = new a.TranslatedString(
                o,
                (function (e) {
                  return s.t(e, { context: "input" }, n(32856));
                })(o),
              );
              p.setProperty(
                v,
                t,
                d.format({ propertyName: f }),
                m && c.lineToolsDoNotAffectChartInvalidation,
              );
            });
          const { property: t } = e,
            o = {};
          t.childNames().forEach((e) => {
            const n = (0, r.ensureDefined)(t.child(e));
            o.hasOwnProperty(e) || (o[e] = n.value());
          }),
            (this.state = o);
        }
        componentDidMount() {
          const { property: e, onStudyInputChange: t } = this.props;
          e.childNames().forEach((n) => {
            (0, r.ensureDefined)(e.child(n)).subscribe(this, (e) => {
              const o = e.value();
              u.logNormal(`Property "${n}" updated to value "${o}"`),
                this.setState({ [n]: o }),
                null == t || t(o, n);
            });
          });
        }
        componentWillUnmount() {
          const { property: e } = this.props;
          e.childNames().forEach((t) => {
            (0, r.ensureDefined)(e.child(t)).unsubscribeAll(this);
          });
        }
        render() {
          const { study: e, model: t, children: n } = this.props,
            r = {
              study: e,
              model: t,
              values: this.state,
              setValue: this._setValue,
            };
          return o.createElement(p.Provider, { value: r }, n);
        }
      }
    },
    28117: (e, t, n) => {
      "use strict";
      n.d(t, { ModelContext: () => r, bindModel: () => s });
      var o = n(50959);
      const r = o.createContext(null);
      function s(e, t) {
        return o.createElement(r.Consumer, null, (n) =>
          n ? o.createElement(e, { ...Object.assign({ model: n }, t) }) : null,
        );
      }
    },
    353: (e, t, n) => {
      "use strict";
      n.d(t, {
        StylePropertyContainer: () => a,
        StylePropertyContext: () => s,
        bindPropertyContext: () => i,
      });
      var o = n(50959),
        r = n(28117);
      const s = o.createContext(null);
      class a extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._setValue = (e, t, n) => {
              const { model: o } = this.props;
              Array.isArray(e)
                ? o.setProperties(
                    e,
                    e.map(() => t),
                    n,
                  )
                : o.setProperty(e, t, n);
            });
        }
        componentDidMount() {
          const { property: e } = this.props;
          e.subscribe(this, () => this.forceUpdate());
        }
        componentWillUnmount() {
          const { property: e } = this.props;
          e.unsubscribeAll(this);
        }
        render() {
          const e = { setValue: this._setValue };
          return o.createElement(s.Provider, { value: e }, this.props.children);
        }
      }
      function i(e, t) {
        return (0, r.bindModel)(
          ({ model: n }) =>
            o.createElement(
              a,
              { model: n, property: t.property },
              o.createElement(e, { ...t }),
            ),
          t,
        );
      }
    },
    12750: (e, t, n) => {
      "use strict";
      n.d(t, {
        IconGroupWrapper: () => s,
      });
      var o = n(50959),
        r = n(97262);
      function s(e) {
        const { children: t } = e;
        return o.createElement("div", { className: r.wrapper }, t);
      }
    },
    8394: (e, t, n) => {
      "use strict";
      n.d(t, { InputTooltip: () => I });
      var o,
        r = n(50959),
        s = n(97754),
        a = n(90186),
        i = n(9745),
        l = n(82353),
        c = n(27941),
        u = n(99084),
        d = n(30162),
        p = n(3756),
        h = n.n(p);
      !(function (e) {
        (e.Small = "small"), (e.Medium = "medium"), (e.Large = "large");
      })(o || (o = {}));
      const m = "small";
      var v, f;
      !(function (e) {
        (e.Default = "default"),
          (e.Danger = "danger"),
          (e.Warning = "warning"),
          (e.Success = "success"),
          (e.Neutral = "neutral"),
          (e.NeutralLight = "neutral-light");
      })(v || (v = {})),
        (function (e) {
          (e.Info = "info"),
            (e.Question = "question"),
            (e.Check = "check"),
            (e.Exclamation = "exclamation");
        })(f || (f = {}));
      const g = { info: c, question: l, check: u, exclamation: d },
        b = r.forwardRef((e, t) =>
          r.createElement("span", {
            ...e,
            ref: t,
            className: s(e.className, h()["no-active-state"]),
          }),
        ),
        C = r.forwardRef((e, t) => {
          var n;
          const {
              icon: o = "exclamation",
              intent: l = "default",
              ariaLabel: c,
              tooltip: u,
              className: d,
              renderComponent: p = b,
              tabIndex: v = 0,
              size: f = m,
              onFocus: C,
              onBlur: y,
              onClick: E,
              ...w
            } = e,
            S = null !== (n = g[o]) && void 0 !== n ? n : o;
          return r.createElement(
            p,
            {
              className: s(
                d,
                h()["icon-wrapper"],
                h()[`intent-${l}`],
                h()[`icon-wrapper-size-${f}`],
              ),
              title: u,
              "aria-label": c,
              ref: t,
              tabIndex: v,
              onFocus: C,
              onBlur: y,
              onClick: E,
              ...(0, a.filterDataProps)(w),
            },
            r.createElement(i.Icon, {
              "aria-hidden": !0,
              icon: S,
              className: h().icon,
            }),
          );
        });
      var y = n(5325);
      var E = n(39416);
      function w(e, t = null) {
        const {
            showTooltip: n,
            hideTooltip: o,
            onClick: s,
            doNotShowTooltipOnTouch: a = !1,
          } = e,
          i = (0, E.useFunctionalRefObject)(t),
          l = (function () {
            const [e, t] = (0, r.useState)(!1);
            return (
              (0, r.useEffect)(() => {
                t(y.mobiletouch);
              }, []),
              e
            );
          })(),
          c = l && a ? void 0 : e.tooltip;
        (0, r.useEffect)(() => {
          const e = () => o && o();
          return (
            document.addEventListener("scroll", e, !0),
            () => document.removeEventListener("scroll", e, !0)
          );
        }, [i, o]);
        return {
          onBlur: (0, r.useCallback)(
            (e) => {
              o && o();
            },
            [o],
          ),
          onFocus: (0, r.useCallback)(
            (e) => {
              !e.target.matches(":hover") &&
                n &&
                e.target.matches(":focus-visible") &&
                n(e.currentTarget, { tooltipDelay: 200 });
            },
            [n],
          ),
          onClick: (0, r.useCallback)(
            (e) => {
              var t;
              l &&
                (null === (t = null == i ? void 0 : i.current) ||
                  void 0 === t ||
                  t.focus()),
                s && s(e);
            },
            [s, i, l],
          ),
          tooltip: c,
          className: void 0 !== c ? "apply-common-tooltip" : void 0,
          ref: i,
        };
      }
      var S = n(38780),
        _ = n(66841),
        x = n.n(_);
      function N() {
        document.removeEventListener("scroll", N),
          document.removeEventListener("touchstart", N),
          document.removeEventListener("mouseout", N),
          (0, S.hide)();
      }
      const T = (e) => {
          (0, S.showOnElement)(e.currentTarget, { tooltipDelay: 0 }),
            document.addEventListener("scroll", N),
            document.addEventListener("touchstart", N),
            document.addEventListener("mouseout", N);
        },
        k = (0, r.forwardRef)((e, t) => {
          const {
              className: n,
              onClick: o = T,
              doNotShowTooltipOnTouch: a,
              size: i,
              ...l
            } = e,
            {
              tooltip: c,
              className: u,
              ...d
            } = w(
              {
                tooltip: e.tooltip,
                doNotShowTooltipOnTouch: !1,
                showTooltip: S.showOnElement,
                hideTooltip: S.hide,
                onClick: o,
              },
              t,
            );
          return r.createElement(C, {
            className: s(n, x()["icon-wrapper"], c && x()["with-tooltip"], u),
            tooltip: c,
            size: i,
            ...l,
            ...d,
          });
        });
      (0, r.forwardRef)((e, t) => {
        const { className: n, href: o, rel: a, target: i, ...l } = e,
          c = (0, r.useMemo)(
            () =>
              (0, r.forwardRef)((e, t) =>
                r.createElement("a", {
                  href: o,
                  rel: a,
                  target: i,
                  ref: t,
                  ...e,
                }),
              ),
            [o, a, i],
          );
        return r.createElement(k, {
          ...l,
          className: s(n, x()["with-link"]),
          renderComponent: c,
          ref: t,
          doNotShowTooltipOnTouch: !0,
        });
      }),
        (0, r.forwardRef)((e, t) => {
          const { className: n, withActiveState: o, ...a } = e,
            i = (0, r.useMemo)(
              () =>
                (0, r.forwardRef)((e, t) =>
                  r.createElement("button", { ...e, ref: t, type: "button" }),
                ),
              [],
            );
          return r.createElement(k, {
            ...a,
            className: s(n, !o && x()["no-active-state"]),
            renderComponent: i,
            ref: t,
          });
        });
      function I(e) {
        const { className: t, title: n } = e;
        return r.createElement(k, {
          icon: "info",
          className: t,
          ariaLabel: n,
          tooltip: n,
          tabIndex: -1,
        });
      }
    },
    78839: (e, t, n) => {
      "use strict";
      n.d(t, {
        getInputGroups: () => i,
        isGroup: () => s,
        isInputInlines: () => a,
      });
      var o,
        r = n(50151);
      function s(e) {
        return e.hasOwnProperty("groupType");
      }
      function a(e) {
        return s(e) && "inline" === e.groupType;
      }
      function i(e) {
        const t = [],
          n = new Map(),
          o = new Map();
        return (
          o.set(void 0, new Map()),
          e.forEach((e) => {
            const { group: s, inline: a } = e;
            if (void 0 !== s || void 0 !== a)
              if (void 0 !== s)
                if (void 0 !== a)
                  if (n.has(s)) {
                    const t = (0, r.ensureDefined)(n.get(s));
                    let i;
                    o.has(t)
                      ? (i = (0, r.ensureDefined)(o.get(t)))
                      : ((i = new Map()), o.set(t, i)),
                      l(e, "inline", a, i, t.children);
                  } else {
                    const r = { id: a, groupType: "inline", children: [e] },
                      i = { id: s, groupType: "group", children: [r] },
                      l = new Map();
                    l.set(a, r), o.set(i, l), n.set(s, i), t.push(i);
                  }
                else l(e, "group", s, n, t);
              else {
                const n = (0, r.ensureDefined)(o.get(void 0));
                l(e, "inline", (0, r.ensureDefined)(a), n, t);
              }
            else t.push(e);
          }),
          t
        );
      }
      function l(e, t, n, o, s) {
        if (o.has(n)) (0, r.ensureDefined)(o.get(n)).children.push(e);
        else {
          const r = { id: n, groupType: t, children: [e] };
          o.set(n, r), s.push(r);
        }
      }
      !(function (e) {
        (e.Inline = "inline"), (e.Group = "group");
      })(o || (o = {}));
    },
    24980: (e, t, n) => {
      "use strict";
      n.d(t, { InputRow: () => oe });
      var o = n(11542),
        r = n(50959),
        s = n(50151),
        a = n(65383),
        i = n(55297),
        l = n(91699),
        c = n(30582),
        u = n(97754),
        d = n.n(u),
        p = n(31261),
        h = n(60090),
        m = n(22221),
        v = n(16359);
      class f extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: o,
              } = this.props;
              o(e.currentTarget.value, t, n);
            });
        }
        render() {
          const {
            input: { defval: e },
            value: t,
            disabled: n,
            onBlur: o,
            onKeyDown: s,
            hasTooltip: a,
          } = this.props;
          return r.createElement(p.InputControl, {
            className: d()(v.input, a && v.hasTooltip),
            value: void 0 === t ? e : t,
            onChange: this._onChange,
            onBlur: o,
            onKeyDown: s,
            disabled: n,
            maxLength: 4096,
          });
        }
      }
      const g = (0, m.debounced)(f),
        b = (0, h.bind)(g);
      var C = n(16604),
        y = n(71891);
      function E(e) {
        const { className: t } = e,
          n = (0, r.useContext)(y.PropertyTable.InlineRowContext);
        return r.createElement(
          "div",
          { className: u(v.inputGroup, n && v.inlineGroup, t) },
          e.children,
        );
      }
      var w = n(36565);
      function S(e = "") {
        const [, t = "", n = "", o = "", r = ""] = Array.from(
          e.match(/^(\d\d)(\d\d)-(\d\d)(\d\d)/) || [],
        );
        return [`${t}:${n}`, `${o}:${r}`];
      }
      class _ extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._onStartPick = (e) => {
              this.setState({ startTime: e }, this._onChange);
            }),
            (this._onEndPick = (e) => {
              this.setState({ endTime: e }, this._onChange);
            }),
            (this._onChange = () => {
              const {
                  input: { id: e, name: t },
                  onChange: n,
                } = this.props,
                { startTime: o, endTime: r } = this.state;
              n(o.replace(":", "") + "-" + r.replace(":", ""), e, t);
            });
          const t = e.value || e.input.defval,
            [n, o] = S(t);
          this.state = { prevValue: t, startTime: n, endTime: o };
        }
        render() {
          const { startTime: e, endTime: t } = this.state,
            { hasTooltip: n, disabled: o } = this.props;
          return r.createElement(
            E,
            { className: d()(n && v.hasTooltip) },
            r.createElement(
              "div",
              { className: v.sessionStart },
              r.createElement(w.TimeInput, {
                className: d()(v.input, v.sessionInputContainer),
                name: "start",
                value: (0, s.ensureDefined)(e),
                onChange: this._onStartPick,
                disabled: o,
              }),
              r.createElement("span", { className: v.sessionDash }, " — "),
            ),
            r.createElement(
              "div",
              { className: v.sessionEnd },
              r.createElement(w.TimeInput, {
                className: d()(v.input, v.sessionInputContainer),
                name: "end",
                value: (0, s.ensureDefined)(t),
                onChange: this._onEndPick,
                disabled: o,
              }),
            ),
          );
        }
        static getDerivedStateFromProps(e, t) {
          if (e.value === t.prevValue) return t;
          const [n, o] = S(e.value);
          return { prevValue: e.value, startTime: n, endTime: o };
        }
      }
      const x = (0, h.bind)(_);
      var N = n(56570),
        T = n(68159),
        k = n(19466),
        I = n(27032),
        P = n(90405);
      class B extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: o,
              } = this.props;
              o(e, t, n);
            });
        }
        render() {
          const {
              input: { id: e, defval: t, options: s, optionsTitles: a },
              value: i,
              disabled: l,
              hasTooltip: c,
            } = this.props,
            u = s.map((e) => {
              const t = a && a[e] ? a[e] : e;
              return {
                value: e,
                content: o.t(t, { context: "input" }, n(32856)),
              };
            }),
            p = void 0 !== i && s.includes(i) ? i : t;
          return r.createElement(P.Select, {
            id: e,
            className: d()(v.input, c && v.hasTooltip),
            menuClassName: v.dropdownMenu,
            value: p,
            items: u,
            onChange: this._onChange,
            disabled: l,
          });
        }
      }
      const D = (0, h.bind)(B);
      var M = n(73146),
        O = n(72708);
      const R = {
        open: o.t(null, void 0, n(83584)),
        high: o.t(null, void 0, n(59319)),
        low: o.t(null, void 0, n(41902)),
        close: o.t(null, void 0, n(5741)),
        hl2: o.t(null, void 0, n(96008)),
        hlc3: o.t(null, void 0, n(91189)),
        ohlc4: o.t(null, void 0, n(52793)),
        hlcc4: o.t(null, void 0, n(49242)),
      };
      class V extends r.PureComponent {
        render() {
          const { input: e } = this.props,
            { study: t, model: n } = this.context;
          let o = { ...R };
          delete o.hlcc4;
          const i = (0, M.createAdapter)(t);
          if (t && this._isStudy(t) && t.isChildStudy()) {
            const t = (0, a.getInputValue)(i.inputs()[e.id]),
              n = i.parentSourceForInput(t);
            if ((0, O.isStudy)(n)) {
              const t = n.title(k.TitleDisplayTarget.StatusLine),
                r = T.StudyMetaInfo.getChildSourceInputTitles(
                  e,
                  n.metaInfo(),
                  t,
                );
              o = { ...o, ...r };
            }
          }
          if (
            N.enabled("study_on_study") &&
            t &&
            this._isStudy(t) &&
            (t.isChildStudy() || T.StudyMetaInfo.canBeChild(t.metaInfo()))
          ) {
            const e = [t, ...i.getAllChildren()];
            n.model()
              .allStudies()
              .filter((t) => t.canHaveChildren() && !e.includes(t))
              .forEach((e) => {
                const t = e.title(
                    k.TitleDisplayTarget.StatusLine,
                    !0,
                    void 0,
                    !0,
                  ),
                  n = e.id(),
                  r = e.metaInfo(),
                  a = r.styles,
                  i = r.plots || [];
                if (1 === i.length) o[n + "$0"] = t;
                else if (i.length > 1) {
                  const e = i.reduce((e, o, r) => {
                    if (!T.StudyMetaInfo.canPlotBeSourceOfChildStudy(o.type))
                      return e;
                    let i;
                    try {
                      i = (0, s.ensureDefined)(
                        (0, s.ensureDefined)(a)[o.id],
                      ).title;
                    } catch (e) {
                      i = o.id;
                    }
                    return { ...e, [`${n}$${r}`]: `${t}: ${i}` };
                  }, {});
                  o = { ...o, ...e };
                }
              });
          }
          const l = {
            ...e,
            type: "text",
            options: Object.keys(o),
            optionsTitles: o,
          };
          return r.createElement(D, { ...this.props, input: l });
        }
        _isStudy(e) {
          return !e.hasOwnProperty("isInputsStudy");
        }
      }
      V.contextType = I.PropertyContext;
      var F = n(85049),
        L = n(10074);
      const W = void 0,
        A = [
          "1",
          "3",
          "5",
          "15",
          "30",
          "45",
          "60",
          "120",
          "180",
          "240",
          "1D",
          "1W",
          "1M",
          "3M",
          "6M",
          "12M",
        ],
        q = ["1S", "5S", "10S", "15S", "30S"],
        z = ["1T", "10T", "100T", "1000T"];
      class H extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: o,
              } = this.props;
              o(e, t, n);
            });
        }
        render() {
          const { input: e, value: t, disabled: s, hasTooltip: a } = this.props,
            i = F.Interval.parse(void 0 === t ? e.defval : t),
            l = i.isValid() ? i.value() : t,
            c = W ? W.get().filter((e) => !F.Interval.parse(e).isRange()) : [],
            u = (0, L.mergeResolutions)(
              A,
              (0, L.isSecondsEnabled)() ? q : [],
              (0, L.isTicksEnabled)() ? z : [],
              c,
            );
          return (
            u.unshift(""),
            r.createElement(P.Select, {
              id: e.id,
              className: d()(v.input, v.resolution, a && v.hasTooltip),
              menuClassName: d()(v.dropdownMenu, v.resolution),
              items:
                ((p = u),
                p.map((e) => ({
                  value: e,
                  content:
                    "" === e
                      ? o.t(null, void 0, n(54613))
                      : (0, L.getTranslatedResolutionModel)(e).hint,
                }))),
              value: l,
              onChange: this._onChange,
              disabled: s,
            })
          );
          var p;
        }
      }
      const U = (0, h.bind)(H);
      var Z = n(14118),
        K = n(353);
      class G extends r.PureComponent {
        render() {
          return r.createElement(I.PropertyContext.Consumer, null, (e) =>
            e ? this._getColorInputWithContext(e) : null,
          );
        }
        _getColorInputWithContext(e) {
          var t;
          const {
              input: { id: n },
              disabled: o,
              hasTooltip: s,
            } = this.props,
            { model: a, study: i } = e;
          if ("properties" in i || "tempProperties" in i) {
            const e =
              "properties" in i
                ? i.properties().inputs[n]
                : null === (t = i.tempProperties) || void 0 === t
                  ? void 0
                  : t.inputs.child(n);
            return r.createElement(
              K.StylePropertyContainer,
              { model: a, property: e },
              r.createElement(Z.ColorWithThicknessSelect, {
                className: d()(s && v.hasTooltip),
                color: e,
                disabled: o,
              }),
            );
          }
          return null;
        }
      }
      var $ = n(85528),
        Y = n(76056),
        j = n(23935),
        Q = n(27365),
        X = n(10114);
      const J = (0, h.bind)(function (e) {
        const { value: t, onChange: n, input: o, tzName: s, hasTooltip: a } = e,
          { id: i, name: l, defval: c } = o,
          u = (0, r.useMemo)(() => Number(null != t ? t : c), [t, c]),
          p = (0, r.useMemo)(
            () => (0, Q.getChartTimezoneOffsetMs)(u, s),
            [u, s],
          ),
          h = (0, r.useMemo)(() => {
            const e = new Date(u + p + v(u));
            return e.setSeconds(0), e;
          }, [u, p]),
          m = (0, r.useMemo)(
            () =>
              (0, j.twoDigitsFormat)(h.getHours()) +
              ":" +
              (0, j.twoDigitsFormat)(h.getMinutes()),
            [h],
          );
        return r.createElement(
          "div",
          { className: d()(X.container, a && X.hasTooltip) },
          r.createElement(
            "div",
            { className: X.datePickerWrapper },
            r.createElement($.DatePicker, {
              InputComponent: Y.DateInput,
              initial: h,
              onPick: function (e) {
                if (null === e) return;
                const t = new Date(h);
                t.setFullYear(e.getFullYear()),
                  t.setMonth(e.getMonth()),
                  t.setDate(e.getDate()),
                  n(f(t), i, l);
              },
              revertInvalidData: !0,
            }),
          ),
          r.createElement(
            "div",
            { className: X.timePickerWrapper },
            r.createElement(w.TimeInput, {
              value: m,
              onChange: function (e) {
                const [t, o] = e.split(":"),
                  r = new Date(h);
                r.setHours(Number(t)), r.setMinutes(Number(o)), n(f(r), i, l);
              },
            }),
          ),
        );
        function v(e) {
          return 60 * new Date(e).getTimezoneOffset() * 1e3;
        }
        function f(e) {
          return e.valueOf() - p - v(u);
        }
      });
      class ee extends r.PureComponent {
        render() {
          const {
            input: e,
            disabled: t,
            onChange: n,
            tzName: o,
            hasTooltip: s,
          } = this.props;
          if ((0, a.isStudyInputOptionsInfo)(e))
            return r.createElement(D, {
              input: e,
              disabled: t,
              onChange: n,
              hasTooltip: s,
            });
          switch (e.type) {
            case "integer":
              return r.createElement(i.IntegerInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case "float":
            case "price":
              return r.createElement(l.FloatInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case "bool":
              return r.createElement(c.BoolInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case "text":
              return r.createElement(b, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case "symbol":
              return r.createElement(C.SymbolInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case "session":
              return r.createElement(x, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case "source":
              return r.createElement(V, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case "resolution":
              return r.createElement(U, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case "time":
              return r.createElement(J, {
                input: e,
                tzName: o,
                onChange: n,
                hasTooltip: s,
              });
            case "color":
              return r.createElement(G, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            default:
              return null;
          }
        }
      }
      var te = n(8394),
        ne = n(12750);
      class oe extends r.PureComponent {
        render() {
          const {
              label: e,
              children: t,
              input: a,
              disabled: i,
              onChange: l,
              labelAlign: c,
              grouped: u,
              tooltip: d,
              solutionId: p,
              offset: h,
            } = this.props,
            m = Boolean(d);
          return r.createElement(
            y.PropertyTable.Row,
            null,
            r.createElement(
              y.PropertyTable.Cell,
              {
                "data-study-input-name":
                  (null == a ? void 0 : a.id) && `${a.id}-label`,
                placement: "first",
                verticalAlign: c,
                grouped: u,
                offset: h,
              },
              void 0 !== e
                ? e
                : o.t(
                    (0, s.ensureDefined)(a).name,
                    { context: "input" },
                    n(32856),
                  ),
            ),
            r.createElement(
              y.PropertyTable.Cell,
              {
                "data-study-input-name":
                  (null == a ? void 0 : a.id) && `${a.id}-input`,
                placement: "last",
                grouped: u,
              },
              t ||
                r.createElement(ee, {
                  input: (0, s.ensureDefined)(a),
                  onChange: l,
                  disabled: i,
                  hasTooltip: m,
                }),
              m &&
                r.createElement(
                  ne.IconGroupWrapper,
                  null,
                  d && r.createElement(te.InputTooltip, { title: d }),
                  !1,
                ),
            ),
          );
        }
      }
    },
    5236: (e, t, n) => {
      "use strict";
      n.d(t, { InputsTabContent: () => A });
      var o,
        r = n(50959),
        s = n(50151),
        a = n(11542),
        i = n(27032),
        l = n(71891),
        c = n(59416),
        u = n(97754),
        d = n.n(u),
        p = n(21731),
        h = n.n(p);
      const m = (0, c.makeSwitchGroupItem)(
        (((o = class extends r.PureComponent {
          constructor() {
            super(...arguments),
              (this._onChange = () => {
                this.props.onChange && this.props.onChange(this.props.value);
              });
          }
          render() {
            const e = u(this.props.className, h().radio, {
                [h().reverse]: Boolean(this.props.labelPositionReverse),
              }),
              t = u(h().label, { [h().disabled]: this.props.disabled }),
              n = u(h().box, { [h().noOutline]: -1 === this.props.tabIndex });
            let o = null;
            return (
              this.props.label &&
                (o = r.createElement(
                  "span",
                  { className: t },
                  this.props.label,
                )),
              r.createElement(
                "label",
                { className: e },
                r.createElement(
                  "span",
                  { className: h().wrapper, title: this.props.title },
                  r.createElement("input", {
                    id: this.props.id,
                    tabIndex: this.props.tabIndex,
                    autoFocus: this.props.autoFocus,
                    role: this.props.role,
                    className: h().input,
                    type: "radio",
                    name: this.props.name,
                    checked: this.props.checked,
                    disabled: this.props.disabled,
                    value: this.props.value,
                    onChange: this._onChange,
                    ref: this.props.reference,
                    "aria-describedby": this.props["aria-describedby"],
                    "aria-invalid": this.props["aria-invalid"],
                    "data-name": this.props["data-name"],
                  }),
                  r.createElement("span", { className: n }),
                ),
                o,
              )
            );
          }
        }).defaultProps = { value: "on" }),
        o),
      );
      var v = n(16604),
        f = n(60090),
        g = n(8394),
        b = n(12750),
        C = n(16359);
      function y(e) {
        const {
            children: t,
            input: o,
            disabled: u,
            onChange: d,
            grouped: p,
            tooltip: h,
            solutionId: y,
          } = e,
          E = (0, r.useContext)(i.PropertyContext),
          { values: w, setValue: S } = (0, s.ensureNotNull)(E),
          _ = w[o.id],
          [x, N] = (0, r.useState)(_ ? "another-symbol" : "main-symbol"),
          [T, k] = (0, r.useState)(_),
          I = Boolean(h);
        return (
          (0, r.useEffect)(() => {
            _ && k(_);
          }, [_]),
          r.createElement(
            c.SwitchGroup,
            {
              name: `symbol-source-${o.id}`,
              values: [x],
              onChange: function (e) {
                N(e),
                  "main-symbol" === e
                    ? (0, f.setter)(S)("", o.id, o.name)
                    : "another-symbol" === e &&
                      T &&
                      (0, f.setter)(S, d)(T, o.id, o.name);
              },
            },
            r.createElement(
              l.PropertyTable.Row,
              null,
              r.createElement(
                l.PropertyTable.Cell,
                {
                  colSpan: 2,
                  placement: "first",
                  grouped: p,
                  "data-study-input-name":
                    (null == o ? void 0 : o.id) && `${o.id}-main-symbol`,
                },
                r.createElement(m, {
                  value: "main-symbol",
                  className: C.checkbox,
                  disabled: u,
                  label: r.createElement(
                    "span",
                    { className: C.label },
                    a.t(null, { context: "input" }, n(94849)),
                  ),
                }),
              ),
            ),
            r.createElement(
              l.PropertyTable.Row,
              null,
              r.createElement(
                l.PropertyTable.Cell,
                {
                  placement: "first",
                  grouped: p,
                  "data-study-input-name":
                    (null == o ? void 0 : o.id) &&
                    `${o.id}-another-symbol-label`,
                },
                r.createElement(m, {
                  value: "another-symbol",
                  className: C.checkbox,
                  disabled: u,
                  label: r.createElement(
                    "span",
                    { className: C.label },
                    a.t(null, { context: "input" }, n(24716)),
                  ),
                }),
              ),
              r.createElement(
                l.PropertyTable.Cell,
                {
                  placement: "last",
                  grouped: p,
                  "data-study-input-name":
                    (null == o ? void 0 : o.id) &&
                    `${o.id}-another-symbol-input`,
                },
                t ||
                  r.createElement(v.SymbolInput, {
                    input: (0, s.ensureDefined)(o),
                    onChange: d,
                    disabled: u || "main-symbol" === x,
                    hasTooltip: I,
                  }),
                I &&
                  r.createElement(
                    b.IconGroupWrapper,
                    null,
                    h && r.createElement(g.InputTooltip, { title: h }),
                    !1,
                  ),
              ),
            ),
          )
        );
      }
      var E = n(30582);
      class w extends r.PureComponent {
        render() {
          const { label: e, input: t, tooltip: n, solutionId: o } = this.props,
            s = Boolean(n);
          return r.createElement(
            l.PropertyTable.Row,
            null,
            r.createElement(
              l.PropertyTable.Cell,
              {
                placement: "first",
                colSpan: 2,
                "data-study-input-name":
                  (null == t ? void 0 : t.id) && `${t.id}-checkbox`,
              },
              r.createElement(E.BoolInput, {
                label: e,
                input: t,
                hasTooltip: s,
              }),
              s &&
                r.createElement(
                  b.IconGroupWrapper,
                  null,
                  n && r.createElement(g.InputTooltip, { title: n }),
                  !1,
                ),
            ),
          );
        }
      }
      var S = n(24980),
        _ = n(2568),
        x = n(67029),
        N = n(22221);
      class T extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: o,
              } = this.props;
              o(e.currentTarget.value, t, n);
            });
        }
        render() {
          const {
            input: { defval: e },
            value: t,
            disabled: n,
            onBlur: o,
            onKeyDown: s,
          } = this.props;
          return r.createElement(_.Textarea, {
            className: d()(C.input, C.textarea, x.InputClasses.FontSizeMedium),
            value: void 0 === t ? e : t,
            onChange: this._onChange,
            onBlur: o,
            onKeyDown: s,
            disabled: n,
            maxLength: 4096,
          });
        }
      }
      const k = (0, N.debounced)(T),
        I = (0, f.bind)(k);
      var P = n(72929);
      function B(e) {
        const { input: t, label: n, tooltip: o, solutionId: s } = e,
          a = Boolean(o);
        return r.createElement(
          l.PropertyTable.Row,
          null,
          r.createElement(
            l.PropertyTable.Cell,
            {
              placement: "first",
              colSpan: 2,
              className: P.wrap,
              "data-study-input-name":
                (null == t ? void 0 : t.id) && `${t.id}-textarea`,
            },
            r.createElement(
              "div",
              { className: P.labelWrap },
              r.createElement(
                "span",
                { className: d()(P.label, a && P.hasTooltip) },
                n,
              ),
              a &&
                r.createElement(
                  b.IconGroupWrapper,
                  null,
                  o && r.createElement(g.InputTooltip, { title: o }),
                  !1,
                ),
            ),
            r.createElement(I, { input: t }),
          ),
        );
      }
      function D(e) {
        const { input: t, tooltip: o, solutionId: s } = e;
        return "symbol" === t.type && t.optional
          ? r.createElement(y, { input: t, tooltip: o, solutionId: s })
          : "bool" === t.type
            ? r.createElement(w, {
                label: a.t(t.name, { context: "input" }, n(32856)),
                input: t,
                tooltip: o,
                solutionId: s,
              })
            : "text_area" === t.type
              ? r.createElement(B, {
                  label: a.t(t.name, { context: "input" }, n(32856)),
                  input: t,
                  tooltip: o,
                  solutionId: s,
                })
              : r.createElement(S.InputRow, {
                  labelAlign: (function (e) {
                    switch (e) {
                      case "session":
                        return "adaptive";
                      case "time":
                        return "topCenter";
                      default:
                        return;
                    }
                  })(t.type),
                  input: t,
                  tooltip: o,
                  solutionId: s,
                });
      }
      var M = n(86067),
        O = n(82149);
      function R(e) {
        const { content: t } = e;
        let n;
        return r.createElement(
          l.PropertyTable.InlineRowContext.Provider,
          { value: !0 },
          r.createElement(
            "div",
            { className: O.inlineRow },
            t.children.map(
              (e, o) => (
                void 0 !== e.tooltip && (n = e.tooltip),
                r.createElement(D, {
                  key: e.id,
                  input: e,
                  tooltip: o === t.children.length - 1 ? n : void 0,
                })
              ),
            ),
          ),
        );
      }
      var V = n(78839),
        F = n(29593);
      function L(e) {
        const { content: t } = e;
        return (0, V.isGroup)(t)
          ? (0, V.isInputInlines)(t)
            ? r.createElement(R, { content: t })
            : r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  "div",
                  { className: F.titleWrap },
                  r.createElement(M.GroupTitleSection, {
                    title: a.t(t.id, { context: "input" }, n(32856)),
                    name: t.id,
                  }),
                ),
                t.children.map((e) =>
                  (0, V.isGroup)(e)
                    ? r.createElement(R, { key: e.id, content: e })
                    : r.createElement(D, {
                        key: e.id,
                        input: e,
                        tooltip: e.tooltip,
                        solutionId: e.solutionId,
                      }),
                ),
                r.createElement("div", { className: F.groupFooter }),
              )
          : r.createElement(D, {
              input: t,
              tooltip: t.tooltip,
              solutionId: t.solutionId,
            });
      }
      const W = { offset: a.t(null, void 0, n(55450)) };
      class A extends r.PureComponent {
        render() {
          const {
              reference: e,
              inputs: t,
              property: n,
              study: o,
              studyMetaInfo: a,
              model: i,
              onStudyInputChange: c,
              className: u,
            } = this.props,
            { offset: d, offsets: p } = n;
          return r.createElement(
            l.PropertyTable,
            { reference: e, className: u },
            r.createElement(q, {
              study: o,
              model: i,
              property: n.inputs,
              inputs: t,
              onStudyInputChange: c,
            }),
            d && this._createOffsetSection(d, (0, s.ensureDefined)(a.offset)),
            p &&
              p.childNames().map((e) => {
                var t;
                const n = p.childs()[e];
                return this._createOffsetSection(
                  n,
                  (0, s.ensureDefined)(
                    null === (t = a.offsets) || void 0 === t ? void 0 : t[e],
                  ),
                );
              }),
          );
        }
        _createOffsetSection(e, t) {
          const n = e.childs();
          return r.createElement(q, {
            key: `offset_${t.title}`,
            study: this.props.study,
            model: this.props.model,
            inputs: [z(n, t)],
            property: e,
          });
        }
      }
      function q(e) {
        const {
            study: t,
            model: n,
            inputs: o,
            property: s,
            onStudyInputChange: a,
          } = e,
          l = o,
          c = (0, r.useMemo)(() => (0, V.getInputGroups)(l), [l]);
        return r.createElement(
          i.PropertyContainer,
          { property: s, study: t, model: n, onStudyInputChange: a },
          !1,
          !1,
          c.map((e) =>
            r.createElement(
              r.Fragment,
              { key: e.id },
              r.createElement(L, { content: e }),
              !1,
            ),
          ),
        );
      }
      function z(e, t) {
        return {
          id: "val",
          name: t.title || W.offset,
          defval: e.val.value(),
          type: "integer",
          min: t.min,
          max: t.max,
        };
      }
    },
    30582: (e, t, n) => {
      "use strict";
      n.d(t, { BoolInput: () => u, BoolInputComponent: () => c });
      var o = n(50959),
        r = n(15294),
        s = n(97754),
        a = n.n(s),
        i = n(60090),
        l = n(16359);
      class c extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = () => {
              const {
                input: { id: e, name: t },
                value: n,
                onChange: o,
              } = this.props;
              o(!n, e, t);
            });
        }
        render() {
          const {
              input: { defval: e },
              value: t,
              disabled: n,
              label: s,
              hasTooltip: i,
            } = this.props,
            c = void 0 === t ? e : t;
          return o.createElement(r.Checkbox, {
            className: a()(l.checkbox, i && l.hasTooltip),
            disabled: n,
            checked: c,
            onChange: this._onChange,
            label: o.createElement("span", { className: l.label }, s),
            labelAlignBaseline: !0,
          });
        }
      }
      const u = (0, i.bind)(c);
    },
    22221: (e, t, n) => {
      "use strict";
      n.d(t, { debounced: () => s });
      var o = n(50959);
      const r = { blur: 0, commit: 0, change: 1 / 0 };
      function s(e, t = r) {
        return class extends o.PureComponent {
          constructor(e) {
            super(e),
              (this._onChange = (e, n, o) => {
                const r = t.change;
                r
                  ? (clearTimeout(this._timeout),
                    this.setState({ value: e }, () => {
                      r !== 1 / 0 &&
                        (this._timeout = setTimeout(() => this._flush(), r));
                    }))
                  : this._flush(e);
              }),
              (this._onBlur = () => {
                this._debounce(t.blur);
                const { onBlur: e } = this.props;
                e && e();
              }),
              (this._onKeyDown = (e) => {
                13 === e.keyCode && this._debounce(t.commit);
              }),
              (this.state = { prevValue: e.value, value: e.value });
          }
          componentWillUnmount() {
            this._flush();
          }
          render() {
            const { value: t } = this.state;
            return o.createElement(e, {
              ...this.props,
              value: t,
              onChange: this._onChange,
              onBlur: this._onBlur,
              onKeyDown: this._onKeyDown,
            });
          }
          static getDerivedStateFromProps(e, t) {
            return e.value === t.prevValue
              ? t
              : { prevValue: e.value, value: e.value };
          }
          _debounce(e) {
            e
              ? (clearTimeout(this._timeout),
                e !== 1 / 0 &&
                  (this._timeout = setTimeout(() => this._flush(), e)))
              : this.setState((e) => {
                  this._flush(e.value);
                });
          }
          _flush(e) {
            const {
                input: { id: t, name: n },
                onChange: o,
              } = this.props,
              { prevValue: r, value: s } = this.state;
            clearTimeout(this._timeout);
            const a = void 0 !== e ? e : s;
            void 0 !== a && a !== r && o(a, t, n);
          }
        };
      }
    },
    91699: (e, t, n) => {
      "use strict";
      n.d(t, { FloatInput: () => p, FloatInputComponent: () => d });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(74073),
        i = n(60090),
        l = n(22221),
        c = n(16359);
      class u extends o.PureComponent {
        render() {
          const { hasTooltip: e } = this.props;
          return o.createElement(a.NumericInput, {
            ...this.props,
            className: s()(c.input, e && c.hasTooltip),
            stretch: !1,
          });
        }
      }
      const d = (0, l.debounced)(u, { change: 1 / 0, commit: 0, blur: 0 }),
        p = (0, i.bind)(d);
    },
    55297: (e, t, n) => {
      "use strict";
      n.d(t, { IntegerInput: () => p, IntegerInputComponent: () => d });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(60090),
        i = n(22221),
        l = n(74073),
        c = n(16359);
      class u extends o.PureComponent {
        render() {
          const { hasTooltip: e } = this.props;
          return o.createElement(l.NumericInput, {
            ...this.props,
            mode: "integer",
            className: s()(c.input, e && c.hasTooltip),
            stretch: !1,
          });
        }
      }
      const d = (0, i.debounced)(u, { change: 1 / 0, commit: 0, blur: 0 }),
        p = (0, a.bind)(d);
    },
    74073: (e, t, n) => {
      "use strict";
      n.d(t, { NumericInput: () => C });
      var o,
        r,
        s = n(50959),
        a = n(50151),
        i = n(11542),
        l = n(60521),
        c = n(49483),
        u = n(92399),
        d = n(59623),
        p = n(9859);
      !(function (e) {
        (e.Integer = "integer"), (e.Float = "float");
      })(o || (o = {})),
        (function (e) {
          (e.Input = "input"), (e.Step = "step");
        })(r || (r = {}));
      const h = new d.NumericFormatter({ ignoreLocaleNumberFormat: !0 }),
        m = /^-?[0-9]*$/,
        v = 9e15;
      class f extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._onFocus = (e) => {
              this.setState({ focused: !0 }),
                this.props.onFocus && this.props.onFocus(e);
            }),
            (this._onBlur = (e) => {
              this.setState({ focused: !1 }),
                !1 !== this.props.shouldApplyValueOnBlur &&
                  (this.setState({
                    displayValue: g(this.props, this.props.value),
                  }),
                  this.props.errorHandler && this.props.errorHandler(!1)),
                this.props.onBlur && this.props.onBlur(e);
            }),
            (this._onValueChange = (e) => {
              const t = e.target.value;
              if (
                (void 0 !== this.props.onEmptyString &&
                  "" === t &&
                  this.props.onEmptyString(),
                "integer" === this.props.mode && !m.test(t))
              )
                return;
              const n = b(t, this.props.formatter),
                o = n.res
                  ? this._checkValueBoundaries(n.value)
                  : { isPassed: !1, msg: void 0 },
                r = n.res && !o.isPassed,
                s = n.res && n.suggest && !this.state.focused ? n.suggest : t,
                a = r && o.msg ? o.msg : this._errMsg;
              this.setState({ displayValue: s, errorMsg: a }),
                n.res &&
                  o.isPassed &&
                  this.props.onValueChange(n.value, "input"),
                this.props.errorHandler && this.props.errorHandler(!n.res || r);
            }),
            (this._onValueByStepChange = (e) => {
              const {
                  roundByStep: t = !0,
                  step: n = 1,
                  uiStep: o,
                  min: r = n,
                  formatter: s,
                } = this.props,
                a = b(this.state.displayValue, s),
                i = null != o ? o : n;
              let c = n;
              if (a.res) {
                const o = new l.Big(a.value),
                  s = o.minus(r).mod(n);
                let u = o.plus(e * i);
                !s.eq(0) && t && (u = u.plus((e > 0 ? 0 : 1) * i).minus(s)),
                  (c = u.toNumber());
              }
              const { isPassed: u, clampedValue: d } =
                this._checkValueBoundaries(c);
              (c = u ? c : d),
                this.setState({ displayValue: g(this.props, c) }),
                this.props.onValueChange(c, "step"),
                this.props.errorHandler && this.props.errorHandler(!1);
            });
          const { value: t } = e;
          (this._errMsg = i.t(null, void 0, n(71300))),
            (this.state = {
              value: t,
              displayValue: g(e, t),
              focused: !1,
              errorMsg: this._errMsg,
            });
        }
        render() {
          var e;
          return s.createElement(u.NumberInputView, {
            id: this.props.id,
            inputMode:
              null !== (e = this.props.inputMode) && void 0 !== e
                ? e
                : this.state.inputMode,
            borderStyle: this.props.borderStyle,
            fontSizeStyle: this.props.fontSizeStyle,
            value: this.state.displayValue,
            forceShowControls: this.props.forceShowControls,
            className: this.props.className,
            inputClassName: this.props.inputClassName,
            button: this.props.button,
            placeholder: this.props.placeholder,
            innerLabel: this.props.innerLabel,
            endSlot: this.props.endSlot,
            disabled: this.props.disabled,
            warning: this.props.warning,
            error: this.props.error,
            autoComplete: this.props.autoComplete,
            errorMessage: this.props.errorMessage || this.state.errorMsg,
            onValueChange: this._onValueChange,
            onValueByStepChange: this._onValueByStepChange,
            containerReference: this.props.containerReference,
            inputReference: this.props.inputReference,
            onClick: this.props.onClick,
            onFocus: this._onFocus,
            onBlur: this._onBlur,
            onKeyDown: this.props.onKeyDown,
            controlDecKeyCodes: this.props.controlDecKeyCodes,
            controlIncKeyCodes: this.props.controlIncKeyCodes,
            title: this.props.title,
            intent: this.props.intent,
            highlight: this.props.highlight,
            highlightRemoveRoundBorder: this.props.highlightRemoveRoundBorder,
            stretch: this.props.stretch,
            autoSelectOnFocus: !c.CheckMobile.any(),
            "data-name": this.props["data-name"],
          });
        }
        componentDidMount() {
          this.setState({
            inputMode: c.CheckMobile.iOS() ? void 0 : "numeric",
          });
        }
        componentDidUpdate(e) {
          this.props.shouldApplyValueOnFormatterChange &&
            e.formatter !== this.props.formatter &&
            this.setState({ displayValue: g(this.props, this.props.value) });
        }
        getClampedValue() {
          const { min: e = -1 / 0, max: t = v } = this.props,
            n = b(this.state.displayValue, this.props.formatter);
          return n.res ? (0, p.clamp)(n.value, e, t) : null;
        }
        static getDerivedStateFromProps(e, t) {
          const {
            alwaysUpdateValueFromProps: n,
            value: o,
            forceApplyValueFromProps: r,
          } = e;
          return (t.focused && !n) || (t.value === o && !r)
            ? null
            : { value: o, displayValue: g(e, o) };
        }
        _checkValueBoundaries(e) {
          var t, o, r, s;
          const { min: a = -1 / 0, max: l = v } = this.props,
            c = (function (e, t, n) {
              const o = e >= t,
                r = e <= n;
              return {
                passMin: o,
                passMax: r,
                pass: o && r,
                clamped: (0, p.clamp)(e, t, n),
              };
            })(e, a, l);
          let u;
          return (
            c.passMax ||
              (u =
                null !==
                  (o =
                    null === (t = this.props.boundariesErrorMessages) ||
                    void 0 === t
                      ? void 0
                      : t.greaterThanMax) && void 0 !== o
                  ? o
                  : i.t(null, { replace: { max: String(l) } }, n(31331))),
            c.passMin ||
              (u =
                null !==
                  (s =
                    null === (r = this.props.boundariesErrorMessages) ||
                    void 0 === r
                      ? void 0
                      : r.lessThanMin) && void 0 !== s
                  ? s
                  : i.t(null, { replace: { min: String(a) } }, n(24216))),
            { isPassed: c.pass, msg: u, clampedValue: c.clamped }
          );
        }
      }
      function g(e, t) {
        const { useFormatter: n = !0, formatter: o, mode: r } = e;
        return n && "integer" !== r
          ? (function (e, t = h) {
              return null !== e ? t.format(e) : "";
            })(t, o)
          : (function (e) {
              if (null === e) return "";
              return d.NumericFormatter.formatNoE(e);
            })(t);
      }
      function b(e, t = h) {
        return t.parse
          ? t.parse(e)
          : { res: !1, error: "Formatter does not support parse" };
      }
      class C extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._container = null),
            (this._handleContainerRef = (e) => (this._container = e)),
            (this._onChange = (e, t) => {
              const {
                input: { id: n, name: o },
                onChange: r,
                onBlur: s,
              } = this.props;
              r(e, n, o), "step" === t && s && s();
            }),
            (this._onBlur = (e) => {
              const { onBlur: t } = this.props;
              if (t) {
                const n = (0, a.ensureNotNull)(this._container);
                n.contains(document.activeElement) ||
                  n.contains(e.relatedTarget) ||
                  t();
              }
            });
        }
        render() {
          const {
            input: { defval: e, min: t, max: n, step: o },
            value: r,
            disabled: a,
            onKeyDown: i,
            className: l,
            mode: c,
            stretch: u,
          } = this.props;
          return s.createElement(f, {
            className: l,
            value: Number(void 0 === r ? e : r),
            min: t,
            max: n,
            step: o,
            mode: c,
            onBlur: this._onBlur,
            onValueChange: this._onChange,
            onKeyDown: i,
            disabled: a,
            containerReference: this._handleContainerRef,
            fontSizeStyle: "medium",
            roundByStep: !1,
            stretch: u,
          });
        }
      }
    },
    16604: (e, t, n) => {
      "use strict";
      n.d(t, { SymbolInput: () => d, getInternalSymbolName: () => c });
      var o = n(50959),
        r = n(50151),
        s = n(27032),
        a = n(60090),
        i = n(73146),
        l = n(48897);
      function c(e, t) {
        const n = (0, i.createAdapter)(t).resolvedSymbolInfoBySymbol(e);
        return n && (n.ticker || n.full_name) ? n.ticker || n.full_name : e;
      }
      function u(e, t) {
        const n = (0, i.createAdapter)(t).resolvedSymbolInfoBySymbol(e);
        return null === n ? e : n.name;
      }
      const d = (0, a.bind)(function (e) {
        const t = (0, o.useContext)(s.PropertyContext),
          { study: n } = (0, r.ensureNotNull)(t),
          {
            input: { defval: a },
            value: i,
          } = e;
        return o.createElement(l.SymbolInputsButton, {
          ...e,
          value: u(i || a || "", n),
          study: n,
        });
      });
    },
    14118: (e, t, n) => {
      "use strict";
      n.d(t, { ColorWithThicknessSelect: () => f });
      var o = n(50959),
        r = n(24377),
        s = n(11542),
        a = n(45126),
        i = n(19063),
        l = n(353),
        c = n(58593),
        u = n(49794),
        d = n(51768);
      const p = new a.TranslatedString(
          "change thickness",
          s.t(null, void 0, n(73281)),
        ),
        h = new a.TranslatedString("change color", s.t(null, void 0, n(31675))),
        m = new a.TranslatedString(
          "change opacity",
          s.t(null, void 0, n(29426)),
        ),
        v = [1, 2, 3, 4];
      class f extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._trackEventLabel = null),
            (this._getTransparencyValue = () => {
              const { transparency: e } = this.props;
              return e ? e.value() : 0;
            }),
            (this._getOpacityValue = () => {
              const { color: e } = this.props,
                t = (0, u.getPropertyValue)(e);
              if (t)
                return (0, i.isHexColor)(t)
                  ? (0, i.transparencyToAlpha)(this._getTransparencyValue())
                  : (0, r.parseRgba)(t)[3];
            }),
            (this._getColorValueInHex = () => {
              const { color: e } = this.props,
                t = (0, u.getPropertyValue)(e);
              return t
                ? (0, i.isHexColor)(t)
                  ? t
                  : (0, r.rgbToHexString)((0, r.parseRgb)(t))
                : null;
            }),
            (this._onThicknessChange = (e) => {
              const { thickness: t } = this.props;
              void 0 !== t && this._setProperty(t, e, p);
            }),
            (this._onColorChange = (e) => {
              const { color: t, isPaletteColor: n } = this.props,
                o = (0, u.getPropertyValue)(t);
              let s = 0;
              o &&
                (s = (0, i.isHexColor)(o)
                  ? this._getTransparencyValue()
                  : (0, i.alphaToTransparency)((0, r.parseRgba)(o)[3])),
                this._setProperty(t, (0, i.generateColor)(String(e), s, !0), h),
                (this._trackEventLabel =
                  "Plot color > " + (n ? "Palette" : "Single"));
            }),
            (this._onOpacityChange = (e) => {
              const { color: t } = this.props,
                n = (0, u.getPropertyValue)(t);
              this._setProperty(
                t,
                (0, i.generateColor)(n, (0, i.alphaToTransparency)(e), !0),
                m,
              );
            }),
            (this._onPopupClose = () => {
              this._trackEventLabel &&
                ((0, d.trackEvent)(
                  "GUI",
                  "Study settings",
                  this._trackEventLabel,
                ),
                (this._trackEventLabel = null));
            });
        }
        componentWillUnmount() {
          this._onPopupClose();
        }
        render() {
          const {
            selectOpacity: e = !0,
            disabled: t,
            className: n,
          } = this.props;
          return o.createElement(c.ColorSelect, {
            className: n,
            disabled: t,
            color: this._getColorValueInHex(),
            selectOpacity: e,
            opacity: this._getOpacityValue(),
            thickness: this._getThicknessValue(),
            thicknessItems: v,
            onColorChange: this._onColorChange,
            onOpacityChange: this._onOpacityChange,
            onThicknessChange: this._onThicknessChange,
            onPopupClose: this._onPopupClose,
          });
        }
        _getThicknessValue() {
          const { thickness: e } = this.props;
          return e ? (0, u.getPropertyValue)(e) : void 0;
        }
        _setProperty(e, t, n) {
          const { setValue: o } = this.context;
          o(e, t, n);
        }
      }
      f.contextType = l.StylePropertyContext;
    },
    71891: (e, t, n) => {
      "use strict";
      n.d(t, { PropertyTable: () => l });
      var o = n(50959),
        r = n(97754),
        s = n(90186),
        a = n(29725);
      const i = o.createContext(!1);
      class l extends o.PureComponent {
        render() {
          return o.createElement(
            "div",
            {
              ref: this.props.reference,
              className: r(a.content, this.props.className),
            },
            this.props.children,
          );
        }
      }
      var c, u, d;
      (l.InlineRowContext = i),
        (l.Row = function (e) {
          const { children: t } = e;
          return (0, o.useContext)(i)
            ? o.createElement("span", { className: a.inlineRow }, t)
            : o.createElement(o.Fragment, null, t);
        }),
        (function (e) {
          (e.Top = "top"),
            (e.TopCenter = "topCenter"),
            (e.Middle = "middle"),
            (e.Adaptive = "adaptive");
        })(c || (c = {})),
        (function (e) {
          (e.First = "first"), (e.Last = "last");
        })(u || (u = {})),
        (l.Cell = function (e) {
          const t = (0, o.useContext)(i),
            n = r(
              a.cell,
              e.offset && a.offset,
              e.grouped && a.grouped,
              t && a.inlineCell,
              "top" === e.verticalAlign && a.top,
              "topCenter" === e.verticalAlign && a.topCenter,
              "adaptive" === e.verticalAlign && a.adaptive,
              e.checkableTitle && a.checkableTitle,
              2 === e.colSpan && a.fill,
              "first" === e.placement && 2 !== e.colSpan && a.first,
              "last" === e.placement && 2 !== e.colSpan && a.last,
            ),
            l = (0, s.filterDataProps)(e);
          return o.createElement(
            "div",
            { ...l, className: n },
            o.createElement(
              "div",
              { className: r(a.inner, e.className) },
              e.children,
            ),
          );
        }),
        (l.Separator = function (e) {
          return o.createElement(
            l.Row,
            null,
            o.createElement("div", {
              className: r(a.cell, a.separator, a.fill),
            }),
          );
        }),
        (function (e) {
          (e[(e.Small = 0)] = "Small"), (e[(e.Big = 1)] = "Big");
        })(d || (d = {})),
        (l.GroupSeparator = function (e) {
          const t = e.size || 0;
          return o.createElement(
            l.Row,
            null,
            o.createElement("div", {
              className: r(a.cell, a.groupSeparator, a.fill, 1 === t && a.big),
            }),
          );
        });
    },
    49794: (e, t, n) => {
      "use strict";
      function o(e) {
        return Array.isArray(e) ? e[0].value() : e.value();
      }
      n.d(t, { getPropertyValue: () => o });
    },
    10600: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M13.5 7l1.65-1.65a.5.5 0 0 0 0-.7l-1.8-1.8a.5.5 0 0 0-.7 0L11 4.5M13.5 7L11 4.5M13.5 7l-8.35 8.35a.5.5 0 0 1-.36.15H2.5v-2.3a.5.5 0 0 1 .15-.35L11 4.5"/></svg>';
    },
    99084: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm3.87-12.15c.36.2.49.66.28 1.02l-4 7a.75.75 0 0 1-1.18.16l-3-3a.75.75 0 1 1 1.06-1.06l2.3 2.3 3.52-6.14a.75.75 0 0 1 1.02-.28Z"/></svg>';
    },
    30162: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/></svg>';
    },
    27941: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM8 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 2c.49 0 1 .59 1 1v3.01c0 .42-.51.99-1 .99s-1-.57-1-.99V9c0-.41.51-1 1-1Z"/></svg>';
    },
    82353: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6 7.5a3 3 0 1 1 6 0c0 .96-.6 1.48-1.17 1.98-.55.48-1.08.95-1.08 1.77h-1.5c0-1.37.7-1.9 1.33-2.38.49-.38.92-.71.92-1.37C10.5 6.67 9.82 6 9 6s-1.5.67-1.5 1.5H6Z"/></svg>';
    },
    65890: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke="currentColor" stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>';
    },
  },
]);
