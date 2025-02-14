import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import "chart.js/auto";
import "hookable";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "analysis",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))} data-v-3af3b107><h1 class="text-2xl font-bold mb-4" data-v-3af3b107>Analiza Samopoczucia Pacjentów</h1><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-3af3b107><div class="bg-white shadow-md p-4 rounded-lg" data-v-3af3b107><h2 class="text-lg font-semibold" data-v-3af3b107>Średni Nastrój</h2><p class="text-3xl font-bold text-blue-600" data-v-3af3b107>6.8</p></div><div class="bg-white shadow-md p-4 rounded-lg" data-v-3af3b107><h2 class="text-lg font-semibold" data-v-3af3b107>Najczęstsze Problemy</h2><p class="text-lg text-gray-600" data-v-3af3b107>Bezsenność, Stres</p></div><div class="bg-white shadow-md p-4 rounded-lg" data-v-3af3b107><h2 class="text-lg font-semibold" data-v-3af3b107>Liczba Wypełnionych Ankiet</h2><p class="text-3xl font-bold text-green-600" data-v-3af3b107>124</p></div></div><div class="bg-white shadow-md p-6 mt-6 rounded-lg" data-v-3af3b107><h2 class="text-lg font-semibold mb-4" data-v-3af3b107>Trend Nastroju Pacjentów</h2><div class="relative w-full" data-v-3af3b107><canvas class="w-full h-96" data-v-3af3b107></canvas></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/doctor/analysis.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const analysis = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3af3b107"]]);
export {
  analysis as default
};
//# sourceMappingURL=analysis-Cr0W4Fn-.js.map
