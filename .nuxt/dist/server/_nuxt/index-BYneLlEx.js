import { _ as __nuxt_component_0 } from "./nuxt-link-CA8Smh6B.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page font-sans text-gray-800" }, _attrs))}><header class="flex justify-between items-center bg-green-300 text-white py-4 px-8 shadow-md"><div class="text-2xl font-bold">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`TheraApp`);
      } else {
        return [
          createTextVNode("TheraApp")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/login",
    class: "px-4 py-2 bg-yellow-300 text-gray-800 font-semibold rounded hover:bg-yellow-400"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Logowanie `);
      } else {
        return [
          createTextVNode(" Logowanie ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></header><section class="text-center py-16 bg-blue-200"><h1 class="text-4xl font-extrabold mb-4">Twoje narzędzie do wspierania terapii</h1><p class="text-lg mb-8">Śledź swoje samopoczucie, analizuj trendy i współpracuj z terapeutą.</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/login",
    class: "px-6 py-3 bg-yellow-300 text-gray-800 font-semibold rounded hover:bg-yellow-400"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Zaloguj się teraz `);
      } else {
        return [
          createTextVNode(" Zaloguj się teraz ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section><section class="py-16 bg-white"><h2 class="text-3xl font-bold text-center mb-12">Dlaczego warto wybrać TheraApp?</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8"><div class="p-6 bg-gray-100 rounded shadow"><h3 class="text-xl font-bold mb-4">Codzienne ankiety</h3><p>Monitoruj swoje samopoczucie każdego dnia za pomocą prostych formularzy.</p></div><div class="p-6 bg-gray-100 rounded shadow"><h3 class="text-xl font-bold mb-4">Historia nastroju</h3><p>Analizuj dane i trendy, aby lepiej zrozumieć swoje emocje.</p></div><div class="p-6 bg-gray-100 rounded shadow"><h3 class="text-xl font-bold mb-4">Powiadomienia</h3><p>Przypomnienia o wypełnianiu ankiet i kluczowych wydarzeniach.</p></div><div class="p-6 bg-gray-100 rounded shadow"><h3 class="text-xl font-bold mb-4">Bezpieczeństwo danych</h3><p>Twoje dane są przechowywane zgodnie z najwyższymi standardami bezpieczeństwa.</p></div></div></section><section class="py-16 bg-pink-300 text-white text-center"><h2 class="text-3xl font-bold mb-12">Co mówią nasi użytkownicy?</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-8"><blockquote class="p-6 bg-white text-gray-800 rounded shadow"><p class="mb-4">„TheraApp pomogło mi zrozumieć moje emocje i poprawić jakość terapii.”</p><footer class="italic">– Anna, użytkowniczka</footer></blockquote><blockquote class="p-6 bg-white text-gray-800 rounded shadow"><p class="mb-4">„Dzięki tej aplikacji mogę lepiej monitorować samopoczucie swoich pacjentów.”</p><footer class="italic">– Dr Kowalski, terapeuta</footer></blockquote></div></section><footer class="py-4 bg-gray-800 text-white text-center"><p class="mb-2">© 2025 TheraApp. Wszystkie prawa zastrzeżone.</p><div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/privacy",
    class: "text-yellow-300 hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Polityka prywatności`);
      } else {
        return [
          createTextVNode("Polityka prywatności")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="mx-2">|</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/terms",
    class: "text-yellow-300 hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Regulamin`);
      } else {
        return [
          createTextVNode("Regulamin")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BYneLlEx.js.map
