import { _ as __nuxt_component_0 } from "./nuxt-link-CA8Smh6B.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "hookable";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const patients = ref([]);
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><h1 class="text-3xl font-bold mb-4">Panel Lekarza</h1>`);
      if (loading.value) {
        _push(`<div class="text-center">Ładowanie...</div>`);
      } else {
        _push(`<div><h2 class="text-2xl font-semibold mb-2">Lista Pacjentów</h2><ul><!--[-->`);
        ssrRenderList(patients.value, (patient) => {
          _push(`<li class="border rounded p-2 mb-2 flex justify-between items-center"><div><p class="font-bold">${ssrInterpolate(patient.name)}</p><p class="text-sm text-gray-600">${ssrInterpolate(patient.email)}</p></div>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: `/doctor/patients/${patient.id}`,
            class: "text-blue-500 hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Szczegóły `);
              } else {
                return [
                  createTextVNode(" Szczegóły ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/doctor/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=dashboard-B0453Bym.js.map
