import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "hookable";
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const surveys = ref([]);
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><h1 class="text-3xl font-bold mb-4">Panel Pacjenta</h1>`);
      if (loading.value) {
        _push(`<div class="text-center">Ładowanie...</div>`);
      } else {
        _push(`<div><h2 class="text-2xl font-semibold mt-4 mb-2">Twoje ankiety</h2>`);
        if (surveys.value.length === 0) {
          _push(`<div class="text-gray-500">Brak wypełnionych ankiet.</div>`);
        } else {
          _push(`<ul class="space-y-2"><!--[-->`);
          ssrRenderList(surveys.value, (survey) => {
            _push(`<li class="p-4 bg-white rounded shadow"><p><strong>Data:</strong> ${ssrInterpolate(survey.date)}</p><p><strong>Samopoczucie:</strong> ${ssrInterpolate(survey.moodScore)}/10</p><p><strong>Wydarzenia:</strong> ${ssrInterpolate(survey.moodInfluencingFactors.join(", "))}</p><p><strong>Pozytywne:</strong> ${ssrInterpolate(survey.positiveEvents || "Brak")}</p><p><strong>Negatywne:</strong> ${ssrInterpolate(survey.negativeEvents || "Brak")}</p><p><strong>Leki:</strong> ${ssrInterpolate(survey.tookMedication ? "Tak" : "Nie")}</p></li>`);
          });
          _push(`<!--]--></ul>`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/patient/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=dashboard-DoeqpRsr.js.map
