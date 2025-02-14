import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { Chart, registerables } from "chart.js";
import "hookable";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mood-history",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(...registerables);
    ref(null);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))} data-v-93a3e2d8><h2 class="text-2xl font-bold mb-4" data-v-93a3e2d8>Historia Nastroju</h2><canvas class="w-full max-w-3xl mx-auto" data-v-93a3e2d8></canvas></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/patient/mood-history.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const moodHistory = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-93a3e2d8"]]);
export {
  moodHistory as default
};
//# sourceMappingURL=mood-history-BYpEqNyu.js.map
