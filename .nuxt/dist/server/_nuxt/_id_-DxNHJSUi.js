import { _ as __nuxt_component_0 } from "./nuxt-link-CA8Smh6B.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { useRoute } from "vue-router";
import "hookable";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const patient = ref(null);
    const surveys = ref([]);
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><h1 class="text-3xl font-bold mb-4">Szczegóły Pacjenta</h1>`);
      if (loading.value) {
        _push(`<div class="text-center">Ładowanie...</div>`);
      } else if (patient.value) {
        _push(`<div><p><strong>Imię i nazwisko:</strong> ${ssrInterpolate(patient.value.name)}</p><p><strong>Email:</strong> ${ssrInterpolate(patient.value.email)}</p><p><strong>Telefon:</strong> ${ssrInterpolate(patient.value.phone)}</p><h2 class="text-2xl font-semibold mt-4">Historia Ankiet</h2><ul><!--[-->`);
        ssrRenderList(surveys.value, (survey) => {
          _push(`<li class="border p-2 my-2"><p><strong>Data:</strong> ${ssrInterpolate(survey.date)}</p><p><strong>Ocena nastroju:</strong> ${ssrInterpolate(survey.moodScore)}</p>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: `/doctor/patients/${patient.value.id}/surveys/${survey.id}`,
            class: "text-blue-500 hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Szczegóły ankiety `);
              } else {
                return [
                  createTextVNode(" Szczegóły ankiety ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/doctor/dashboard",
          class: "text-blue-500 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Powrót do listy pacjentów `);
            } else {
              return [
                createTextVNode(" Powrót do listy pacjentów ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><p>Pacjent nie znaleziony</p></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/doctor/patients/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-DxNHJSUi.js.map
