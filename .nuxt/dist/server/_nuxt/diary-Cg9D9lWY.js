import { defineComponent, ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { useLocalStorage } from "@vueuse/core";
import "hookable";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "diary",
  __ssrInlineRender: true,
  setup(__props) {
    const diaryHistory = ref([]);
    const showForm = ref(false);
    const formError = ref("");
    const patientId = useLocalStorage("patientId", "");
    const diaryForm = ref({
      patientId,
      positiveEvents: "",
      negativeEvents: "",
      eventsImpact: []
    });
    const todayEntry = computed(() => {
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      return diaryHistory.value.find((entry) => entry.date === today);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><h1 class="text-2xl font-bold mb-4">Mój Dziennik</h1><div class="mb-4">`);
      if (todayEntry.value) {
        _push(`<div><h2 class="text-xl font-bold">Twój dzisiejszy wpis</h2><p><strong>Pozytywne wydarzenia:</strong> ${ssrInterpolate(todayEntry.value.positiveEvents)}</p><p><strong>Negatywne wydarzenia:</strong> ${ssrInterpolate(todayEntry.value.negativeEvents)}</p><div><h3 class="font-semibold">Wpływ wydarzeń:</h3><ul class="list-disc pl-6"><!--[-->`);
        ssrRenderList(todayEntry.value.eventsImpact, (event, index) => {
          _push(`<li>${ssrInterpolate(event.description)} - Ocena: ${ssrInterpolate(event.rating)}</li>`);
        });
        _push(`<!--]--></ul></div><button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> Edytuj wpis </button></div>`);
      } else {
        _push(`<div><p>Nie utworzyłeś jeszcze dzisiejszego wpisu.</p><button class="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"> Utwórz wpis </button></div>`);
      }
      _push(`</div>`);
      if (showForm.value) {
        _push(`<div class="bg-white p-4 rounded shadow mb-4"><h2 class="text-xl font-bold mb-2">${ssrInterpolate(todayEntry.value ? "Edytuj wpis" : "Utwórz wpis")}</h2><form><div class="mb-2"><label class="block text-sm font-medium text-gray-700">Pozytywne wydarzenia</label><textarea required class="w-full border rounded p-2">${ssrInterpolate(diaryForm.value.positiveEvents)}</textarea></div><div class="mb-2"><label class="block text-sm font-medium text-gray-700">Negatywne wydarzenia</label><textarea required class="w-full border rounded p-2">${ssrInterpolate(diaryForm.value.negativeEvents)}</textarea></div><div class="mb-2"><label class="block text-sm font-medium text-gray-700">Wpływ wydarzeń na nastrój</label><!--[-->`);
        ssrRenderList(diaryForm.value.eventsImpact, (item, index) => {
          _push(`<div class="flex flex-col mb-2"><input${ssrRenderAttr("value", item.description)} placeholder="Opis wydarzenia" class="border rounded p-1 mb-1"><input${ssrRenderAttr("value", item.rating)} type="number" min="1" max="10" placeholder="Ocena (1-10)" class="border rounded p-1"></div>`);
        });
        _push(`<!--]--><button type="button" class="mt-1 text-sm text-blue-500">Dodaj wydarzenie</button></div><button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"> Zapisz wpis </button><button type="button" class="ml-2 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"> Anuluj </button></form>`);
        if (formError.value) {
          _push(`<p class="mt-2 text-red-500">${ssrInterpolate(formError.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-white p-4 rounded shadow"><h2 class="text-xl font-bold mb-2">Historia wpisów</h2>`);
      if (diaryHistory.value.length === 0) {
        _push(`<div><p>Brak zapisów.</p></div>`);
      } else {
        _push(`<ul class="space-y-4"><!--[-->`);
        ssrRenderList(diaryHistory.value, (entry) => {
          _push(`<li class="border p-2 rounded"><p><strong>Data:</strong> ${ssrInterpolate(entry.date)}</p><p><strong>Pozytywne wydarzenia:</strong> ${ssrInterpolate(entry.positiveEvents)}</p><p><strong>Negatywne wydarzenia:</strong> ${ssrInterpolate(entry.negativeEvents)}</p><div><strong>Wpływ wydarzeń:</strong><ul class="list-disc pl-6"><!--[-->`);
          ssrRenderList(entry.eventsImpact, (ev, idx) => {
            _push(`<li>${ssrInterpolate(ev.description)} (Ocena: ${ssrInterpolate(ev.rating)}) </li>`);
          });
          _push(`<!--]--></ul></div></li>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/patient/diary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=diary-Cg9D9lWY.js.map
