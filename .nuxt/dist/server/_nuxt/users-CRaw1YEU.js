import { useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  setup() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-2xl font-bold mb-4 text-[#4A4A4A]">Zarządzanie Użytkownikami</h1><section><h2 class="text-xl font-semibold mb-4 text-[#4A4A4A]">Lista Użytkowników</h2><table class="min-w-full bg-white rounded shadow"><thead class="bg-[#F5F5F5]"><tr><th class="py-2 px-4 text-left text-[#4A4A4A]">Imię i nazwisko</th><th class="py-2 px-4 text-left text-[#4A4A4A]">Rola</th><th class="py-2 px-4 text-left text-[#4A4A4A]">Status</th><th class="py-2 px-4 text-left text-[#4A4A4A]">Data ostatniego logowania</th></tr></thead><tbody><tr class="hover:bg-[#FCE38A]"><td class="py-2 px-4">Jan Kowalski</td><td class="py-2 px-4">Pacjent</td><td class="py-2 px-4">Aktywny</td><td class="py-2 px-4">2025-01-15</td></tr></tbody></table></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const users = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  users as default
};
//# sourceMappingURL=users-CRaw1YEU.js.map
