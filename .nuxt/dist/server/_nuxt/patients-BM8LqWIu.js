import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import "hookable";
const _sfc_main = {
  __name: "patients",
  __ssrInlineRender: true,
  setup(__props) {
    const patients = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-2xl font-bold mb-6">Pacjenci</h1><table class="min-w-full bg-white shadow-md rounded"><thead><tr class="bg-mint-green text-gray-800"><th class="text-left p-4">Imię i Nazwisko</th><th class="text-left p-4">Ostatnia Ankieta</th><th class="text-left p-4">Średni Nastrój</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(patients.value, (patient) => {
        _push(`<tr class="hover:bg-gray-100"><td class="p-4">${ssrInterpolate(patient.name)}</td><td class="p-4">${ssrInterpolate(patient.lastSurvey || "Brak")}</td><td class="p-4">${ssrInterpolate(patient.moodAverage ?? "Brak danych")}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/doctor/patients.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=patients-BM8LqWIu.js.map
