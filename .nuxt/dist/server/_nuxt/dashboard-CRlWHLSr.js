import { useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  setup() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-2xl font-bold mb-4 text-[#4A4A4A]">Pulpit Administratora</h1><section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><div class="p-4 bg-white rounded shadow"><h2 class="text-lg font-semibold text-[#4A4A4A] mb-2">Zarejestrowani użytkownicy</h2><p class="text-[#88C8A8] text-4xl font-bold">320</p><p class="text-sm text-[#4A4A4A]">Pacjentów: 280 | Lekarzy: 40</p></div><div class="p-4 bg-white rounded shadow"><h2 class="text-lg font-semibold text-[#4A4A4A] mb-2">Wypełnione ankiety</h2><p class="text-[#88C8A8] text-4xl font-bold">1,250</p><p class="text-sm text-[#4A4A4A]">Dziennie: 180 | Tygodniowo: 1,250</p></div><div class="p-4 bg-white rounded shadow"><h2 class="text-lg font-semibold text-[#4A4A4A] mb-2">Aktywni użytkownicy</h2><p class="text-[#88C8A8] text-4xl font-bold">85%</p><p class="text-sm text-[#4A4A4A]">Ostatni tydzień</p></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  dashboard as default
};
//# sourceMappingURL=dashboard-CRlWHLSr.js.map
