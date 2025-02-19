(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5592],
  {
    43982: (e, t, n) => {
      "use strict";
      n.d(t, { useProperty: () => a });
      var o = n(50959);
      const a = (e) => {
        const [t, n] = (0, o.useState)(e.value());
        return (
          (0, o.useEffect)(() => {
            const t = (e) => {
              n(e.value());
            };
            t(e);
            const o = {};
            return e.subscribe(o, t), () => e.unsubscribe(o, t);
          }, [e]),
          t
        );
      };
    },
    77975: (e, t, n) => {
      "use strict";
      n.d(t, { useWatchedValueReadonly: () => a });
      var o = n(50959);
      const a = (e, t = !1) => {
        const n = "watchedValue" in e ? e.watchedValue : void 0,
          a = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
          [u, r] = (0, o.useState)(n ? n.value() : a);
        return (
          (t ? o.useLayoutEffect : o.useEffect)(() => {
            if (n) {
              r(n.value());
              const e = (e) => r(e);
              return n.subscribe(e), () => n.unsubscribe(e);
            }
            return () => {};
          }, [n]),
          u
        );
      };
    },
    29185: (e, t, n) => {
      "use strict";
      n.d(t, { useWatchedValue: () => a });
      var o = n(50959);
      const a = (e) => {
        const [t, n] = (0, o.useState)(e.value());
        return (
          (0, o.useEffect)(() => {
            const t = (e) => n(e);
            return e.subscribe(t), () => e.unsubscribe(t);
          }, [e]),
          [t, (t) => e.setValue(t)]
        );
      };
    },
    73758: (e) => {
      e.exports = { padding: "2", textArea: "textArea-pBDekXDd" };
    },
    99514: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          closeChartEditorText: () => _,
          updateChartEditorText: () => p,
        });
      var o = n(50959),
        a = n(32227),
        u = n(50151),
        r = n(77975),
        i = n(29185),
        s = n(43982),
        c = n(68335),
        l = n(12988),
        d = n(73758);
      const f = parseInt(d.padding),
        v = new Map([
          ["10b_2", 0.15],
          ["10bi_2", 0.15],
          ["12_3", 0.8],
          ["12b_2", 0.5],
          ["12bi_2", 0.45],
          ["14b_2", 0.65],
          ["14bi_2", 0.65],
          ["16_2.5", 0.8],
          ["16b_2", 0.8],
          ["16bi_2", 0.75],
          ["16b_2.5", 0.8],
          ["16bi_2.5", 0.75],
          ["16bi_3", 0.65],
          ["20_2", 1],
          ["20b_2", 0.8],
          ["20bi_2", 0.75],
          ["20bi_3", 0.55],
          ["20_2.5", 0.25],
          ["20_3", 0.8],
          ["24_2.5", 0.95],
          ["24_3", 0.95],
          ["28_2", 1.4],
          ["28_2.5", 1.38],
          ["28_3", 1.38],
          ["32_2", 1.6],
          ["32_2.5", 1.6],
          ["32_3", 1.6],
        ]),
        h = new l.Property(!1);
      function b(e) {
        const {
            text: t,
            wordWrap: n = h,
            textInfo: a,
            placeholder: l,
            forbidLineBreaks: b,
            maxLength: _,
            onClose: p,
            onSelectionChange: x,
          } = e,
          [g, m] = (0, i.useWatchedValue)(t),
          E = (0, s.useProperty)(n),
          w = (0, r.useWatchedValueReadonly)({ watchedValue: a }),
          {
            font: S,
            fontSize: V,
            textLeft: R,
            textTop: y,
            textBottom: C,
            textRight: L,
            textAlign: P,
            centerRotation: k,
            lineSpacing: M,
          } = (0, u.ensureNotNull)((0, u.ensureDefined)(w)),
          A = Math.ceil(L - R) + 1,
          D = Math.ceil(C - y);
        let W,
          B,
          N = 0;
        void 0 === k || 0 === k.angle
          ? ((W = Math.round(y)), (B = Math.round(R)))
          : ((B = k.x - A / 2), (W = k.y - D / 2), (N = k.angle));
        const F = S.includes("bold") ? "b" : "",
          T = S.includes("italic") ? "i" : "",
          I =
            devicePixelRatio <= 2 || devicePixelRatio >= 3
              ? devicePixelRatio
              : devicePixelRatio < 2.5
                ? 2
                : 2.5,
          $ = v.get(V + F + T + "_" + I),
          z = (0, o.useRef)(null),
          [H, K] = (0, o.useState)(!0);
        return (
          (0, o.useEffect)(() => {
            const e = () => {
              const e = z.current;
              e && x({ start: e.selectionStart, end: e.selectionEnd });
            };
            return (
              document.addEventListener("mousemove", e),
              document.addEventListener("touchmove", e),
              () => {
                document.removeEventListener("mousemove", e),
                  document.removeEventListener("touchmove", e);
              }
            );
          }, []),
          o.createElement("textarea", {
            ref: z,
            placeholder: l,
            style: {
              width: A + 2 * f,
              height: D + 2 * f,
              top: W - f,
              left: B - f,
              font: S,
              lineHeight: `${V + M}px`,
              textAlign: P,
              letterSpacing: E ? $ + "px" : "normal",
              rotate: N ? `${N}rad` : void 0,
            },
            maxLength: _,
            className: d.textArea,
            "data-name": "text-editor",
            value: g,
            onClick: (e) => U(e),
            onMouseDown: (e) =>
              (function (e) {
                K(!1), U(e);
              })(e),
            onMouseUp: (e) =>
              (function (e) {
                if (H) return void K(!1);
                U(e);
              })(e),
            onChange: (e) => m(e.target.value),
            onFocus: (e) =>
              (function (e) {
                const t = g.length;
                e.setSelectionRange(t, t);
              })(e.target),
            onBlur: p,
            onKeyDown: function (e) {
              var t;
              const n = (0, c.hashFromEvent)(e);
              (27 === n || (b && 13 === n)) &&
                (null === (t = z.current) || void 0 === t || t.blur());
            },
            onSelect: function (e) {
              const t = e.target;
              x({ start: t.selectionStart, end: t.selectionEnd });
            },
            autoFocus: !0,
          })
        );
        function U(e) {
          e.stopPropagation();
        }
      }
      function _(e) {
        a.unmountComponentAtNode(e);
      }
      function p(e, t) {
        a.render(o.createElement(b, { ...t }), e);
      }
    },
  },
]);
