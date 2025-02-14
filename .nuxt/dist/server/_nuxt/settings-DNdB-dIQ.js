import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import "hookable";
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-2xl font-bold mb-4">Ustawienia</h2><div class="p-4 bg-white rounded shadow"><h3 class="text-xl font-bold">Dane Użytkownika</h3><p>Edytuj swoje dane kontaktowe.</p></div><div class="p-4 bg-white rounded shadow mt-4"><h3 class="text-xl font-bold">Preferencje Powiadomień</h3><p>Ustaw przypomnienia o lekach i ankietach.</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/patient/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=settings-DNdB-dIQ.js.map
