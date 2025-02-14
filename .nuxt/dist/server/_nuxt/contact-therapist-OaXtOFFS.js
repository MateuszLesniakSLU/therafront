import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import "hookable";
const _sfc_main = {
  __name: "contact-therapist",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-2xl font-bold">Contact Therapist</h1><p>Skontaktuj się ze swoim terapeutą tutaj.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/patient/contact-therapist.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-therapist-OaXtOFFS.js.map
