import { defineComponent, ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import "hookable";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "survey",
  __ssrInlineRender: true,
  setup(__props) {
    const showForm = ref(false);
    const surveyForm = ref({
      patientId: "",
      moodScore: 5,
      moodInfluencingFactors: [],
      customFactor: "",
      positiveEvents: "",
      negativeEvents: "",
      eventsImpact: 5,
      tookMedication: true,
      medicationNotTakenReason: "",
      sideEffectsOccurred: false,
      sideEffectsDescription: "",
      postMedicationFeeling: 5,
      medicationEffectiveness: "unknown",
      medicationEffectivenessReason: ""
    });
    const availableFactors = [
      "Stres",
      "Zmęczenie",
      "Spotkanie z bliskimi",
      "Aktywność fizyczna",
      "Terapia",
      "Problemy w pracy/szkole",
      "Sen (za mało/za dużo)"
    ];
    const surveyHistory = ref([]);
    const todaySurvey = computed(() => {
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      return surveyHistory.value.find((survey) => survey.date === today);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><h2 class="text-2xl font-bold mb-4">Ankiety</h2><div class="p-4 bg-white rounded shadow mb-4"><h3 class="text-xl font-bold">Codzienna Ankieta</h3>`);
      if (todaySurvey.value) {
        _push(`<p> Masz już wypełnioną ankietę na dzisiaj. Możesz ją edytować do końca dnia. </p>`);
      } else {
        _push(`<p> Wypełnij ankietę, aby monitorować swoje samopoczucie. </p>`);
      }
      _push(`<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-2">${ssrInterpolate(todaySurvey.value ? "Edytuj Ankietę" : "Wypełnij Ankietę")}</button>`);
      if (showForm.value) {
        _push(`<div class="mt-4"><form class="space-y-4"><div><label class="block text-sm font-medium text-gray-700">Jak się dzisiaj czujesz? (1-10)</label><input type="number"${ssrRenderAttr("value", surveyForm.value.moodScore)} min="1" max="10" class="w-full border rounded px-2 py-1" required></div><div><label class="block text-sm font-medium text-gray-700">Co miało wpływ na Twój nastrój?</label><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(availableFactors, (factor) => {
          _push(`<label class="inline-flex items-center"><input type="checkbox"${ssrRenderAttr("value", factor)}${ssrIncludeBooleanAttr(Array.isArray(surveyForm.value.moodInfluencingFactors) ? ssrLooseContain(surveyForm.value.moodInfluencingFactors, factor) : surveyForm.value.moodInfluencingFactors) ? " checked" : ""} class="mr-1"><span>${ssrInterpolate(factor)}</span></label>`);
        });
        _push(`<!--]--></div><input type="text"${ssrRenderAttr("value", surveyForm.value.customFactor)} placeholder="Inny czynnik" class="w-full border rounded px-2 py-1 mt-2"></div><div><label class="block text-sm font-medium text-gray-700">Co pozytywnego wydarzyło się dzisiaj?</label><textarea class="w-full border rounded px-2 py-1" rows="2" required>${ssrInterpolate(surveyForm.value.positiveEvents)}</textarea></div><div><label class="block text-sm font-medium text-gray-700">Co negatywnego wydarzyło się dzisiaj?</label><textarea class="w-full border rounded px-2 py-1" rows="2" required>${ssrInterpolate(surveyForm.value.negativeEvents)}</textarea></div><div><label class="block text-sm font-medium text-gray-700">Jaki wpływ miały te wydarzenia na Twój nastrój? (1-10)</label><input type="number"${ssrRenderAttr("value", surveyForm.value.eventsImpact)} min="1" max="10" class="w-full border rounded px-2 py-1" required></div><div><label class="block text-sm font-medium text-gray-700">Czy zażyłeś dzisiaj leki?</label><select class="w-full border rounded px-2 py-1"><option${ssrRenderAttr("value", true)}${ssrIncludeBooleanAttr(Array.isArray(surveyForm.value.tookMedication) ? ssrLooseContain(surveyForm.value.tookMedication, true) : ssrLooseEqual(surveyForm.value.tookMedication, true)) ? " selected" : ""}>Tak</option><option${ssrRenderAttr("value", false)}${ssrIncludeBooleanAttr(Array.isArray(surveyForm.value.tookMedication) ? ssrLooseContain(surveyForm.value.tookMedication, false) : ssrLooseEqual(surveyForm.value.tookMedication, false)) ? " selected" : ""}>Nie</option></select></div>`);
        if (!surveyForm.value.tookMedication) {
          _push(`<div><label class="block text-sm font-medium text-gray-700">Podaj powód niezażycia leków:</label><input type="text"${ssrRenderAttr("value", surveyForm.value.medicationNotTakenReason)} class="w-full border rounded px-2 py-1"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div><label class="block text-sm font-medium text-gray-700">Czy wystąpiły efekty uboczne?</label><select class="w-full border rounded px-2 py-1"><option${ssrRenderAttr("value", true)}${ssrIncludeBooleanAttr(Array.isArray(surveyForm.value.sideEffectsOccurred) ? ssrLooseContain(surveyForm.value.sideEffectsOccurred, true) : ssrLooseEqual(surveyForm.value.sideEffectsOccurred, true)) ? " selected" : ""}>Tak</option><option${ssrRenderAttr("value", false)}${ssrIncludeBooleanAttr(Array.isArray(surveyForm.value.sideEffectsOccurred) ? ssrLooseContain(surveyForm.value.sideEffectsOccurred, false) : ssrLooseEqual(surveyForm.value.sideEffectsOccurred, false)) ? " selected" : ""}>Nie</option></select></div>`);
        if (surveyForm.value.sideEffectsOccurred) {
          _push(`<div><label class="block text-sm font-medium text-gray-700">Opisz efekty uboczne:</label><textarea class="w-full border rounded px-2 py-1" rows="2">${ssrInterpolate(surveyForm.value.sideEffectsDescription)}</textarea></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div><label class="block text-sm font-medium text-gray-700">Jak się czułeś po lekach? (1-10)</label><input type="number"${ssrRenderAttr("value", surveyForm.value.postMedicationFeeling)} min="1" max="10" class="w-full border rounded px-2 py-1" required></div><div><label class="block text-sm font-medium text-gray-700">Czy farmakoterapia jest skuteczna?</label><select class="w-full border rounded px-2 py-1"><option value="yes"${ssrIncludeBooleanAttr(Array.isArray(surveyForm.value.medicationEffectiveness) ? ssrLooseContain(surveyForm.value.medicationEffectiveness, "yes") : ssrLooseEqual(surveyForm.value.medicationEffectiveness, "yes")) ? " selected" : ""}>Tak</option><option value="no"${ssrIncludeBooleanAttr(Array.isArray(surveyForm.value.medicationEffectiveness) ? ssrLooseContain(surveyForm.value.medicationEffectiveness, "no") : ssrLooseEqual(surveyForm.value.medicationEffectiveness, "no")) ? " selected" : ""}>Nie</option><option value="unknown"${ssrIncludeBooleanAttr(Array.isArray(surveyForm.value.medicationEffectiveness) ? ssrLooseContain(surveyForm.value.medicationEffectiveness, "unknown") : ssrLooseEqual(surveyForm.value.medicationEffectiveness, "unknown")) ? " selected" : ""}>Nie wiem</option></select></div>`);
        if (surveyForm.value.medicationEffectiveness === "no") {
          _push(`<div><label class="block text-sm font-medium text-gray-700">Podaj powód:</label><input type="text"${ssrRenderAttr("value", surveyForm.value.medicationEffectivenessReason)} class="w-full border rounded px-2 py-1"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="submit" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"> Zapisz Ankietę </button></form></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="p-4 bg-white rounded shadow"><h3 class="text-xl font-bold">Historia Ankiet</h3>`);
      if (surveyHistory.value.length === 0) {
        _push(`<div><p>Brak zapisanych ankiet.</p></div>`);
      } else {
        _push(`<ul class="space-y-2"><!--[-->`);
        ssrRenderList(surveyHistory.value, (survey) => {
          _push(`<li class="p-2 border rounded"><div><strong>Data:</strong> ${ssrInterpolate(survey.date)}</div><div><strong>Samopoczucie:</strong> ${ssrInterpolate(survey.moodScore)}</div><div><strong>Czynniki:</strong> ${ssrInterpolate(survey.moodInfluencingFactors.join(", "))}</div><div><strong>Pozytywne wydarzenia:</strong> ${ssrInterpolate(survey.positiveEvents)}</div><div><strong>Negatywne wydarzenia:</strong> ${ssrInterpolate(survey.negativeEvents)}</div><div><strong>Wpływ wydarzeń:</strong> ${ssrInterpolate(survey.eventsImpact)}</div><div><strong>Leki:</strong> ${ssrInterpolate(survey.tookMedication ? "Tak" : "Nie")}</div>`);
          if (!survey.tookMedication) {
            _push(`<div><strong>Powód:</strong> ${ssrInterpolate(survey.medicationNotTakenReason)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div><strong>Efekty uboczne:</strong> ${ssrInterpolate(survey.sideEffectsOccurred ? "Tak" : "Nie")}</div>`);
          if (survey.sideEffectsOccurred) {
            _push(`<div><strong>Opis:</strong> ${ssrInterpolate(survey.sideEffectsDescription)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div><strong>Po lekach:</strong> ${ssrInterpolate(survey.postMedicationFeeling)}</div><div><strong>Skuteczność:</strong> ${ssrInterpolate(survey.medicationEffectiveness)}</div>`);
          if (survey.medicationEffectiveness === "no") {
            _push(`<div><strong>Powód:</strong> ${ssrInterpolate(survey.medicationEffectivenessReason)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/patient/survey.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=survey-SR1dw6y7.js.map
