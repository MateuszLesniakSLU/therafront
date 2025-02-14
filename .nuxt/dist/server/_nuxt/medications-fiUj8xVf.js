import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import "hookable";
const _sfc_main = {
  __name: "medications",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-2xl font-bold mb-4">Farmakoterapia</h2><div class="p-4 bg-white rounded shadow mb-4"><h3 class="text-xl font-bold">Informacje o Lekach</h3><p>Lista przyjmowanych leków.</p><ul class="list-disc list-inside mt-2"><li>Lek 1: 1x dziennie rano</li><li>Lek 2: 2x dziennie</li></ul></div><div class="p-4 bg-white rounded shadow"><h3 class="text-xl font-bold">Przypomnienia</h3><p>Nie zapomnij przyjąć dzisiejszych dawek!</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/patient/medications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=medications-fiUj8xVf.js.map
