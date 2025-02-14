import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import "hookable";
const _sfc_main = {
  __name: "therapist",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-therapist flex flex-col items-center p-6" }, _attrs))}><h2 class="text-2xl font-bold mb-4">Kontakt z Terapeutą</h2><div class="bg-white p-4 rounded shadow mb-6 w-full max-w-md"><h3 class="text-xl font-bold">Twój Terapeuta</h3><p class="mt-2">Imię i nazwisko: Dr Jan Kowalski</p><p> E-mail: <a href="mailto:jan.kowalski@example.com" class="text-blue-500 hover:underline">jan.kowalski@example.com</a></p><p> Telefon: <a href="tel:+48123456789" class="text-blue-500 hover:underline">+48 123 456 789</a></p></div><form class="bg-white p-4 rounded shadow w-full max-w-md"><div class="mb-4"><label for="subject" class="block text-gray-700 font-bold mb-2">Temat wiadomości:</label><input type="text" id="subject" name="subject" class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="Wpisz temat..."></div><div class="mb-4"><label for="message" class="block text-gray-700 font-bold mb-2">Treść wiadomości:</label><textarea id="message" name="message" rows="4" class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="Wpisz swoją wiadomość..."></textarea></div><button type="button" class="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"> Wyślij wiadomość (Placeholder) </button></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/patient/therapist.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=therapist-HTlsoQMi.js.map
