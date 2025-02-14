import { useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  setup() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-2xl font-bold mb-4 text-[#4A4A4A]">Analiza i Raporty</h1><section><h2 class="text-xl font-semibold mb-4 text-[#4A4A4A]">Generowanie Raportów</h2><div class="bg-white p-6 rounded shadow space-y-4"><div><label class="block text-sm font-semibold text-[#4A4A4A]">Wybierz zakres dat</label><input type="date" class="w-full p-2 border rounded mt-1"><input type="date" class="w-full p-2 border rounded mt-1"></div><button class="bg-[#88C8A8] text-white py-2 px-4 rounded hover:bg-[#A8D5BA]"> Generuj Raport </button></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/reports.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reports = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  reports as default
};
//# sourceMappingURL=reports-DIbrNE-R.js.map
