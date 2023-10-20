import { defineComponent as a, openBlock as c, createElementBlock as d, normalizeClass as l, renderSlot as r } from "vue";
const _ = {
  name: "IscasButton"
}, u = /* @__PURE__ */ a({
  ..._,
  props: {
    size: {
      type: String,
      default: "middle"
    },
    type: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    return (e, n) => (c(), d("button", {
      class: l(["muk-btn", [t.size, t.type]])
    }, [
      r(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const p = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, s] of e)
    n[o] = s;
  return n;
}, f = /* @__PURE__ */ p(u, [["__scopeId", "data-v-801d8dab"]]), i = [f], y = {
  // @ts-ignore
  install(t) {
    i.forEach((e) => {
      t.component(e.name, e);
    });
  }
};
export {
  f as Button,
  y as default
};
