import { _ as __nuxt_component_0 } from "./nuxt-link-CA8Smh6B.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = {
  __name: "unauthorized",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center h-screen bg-gray-100" }, _attrs))}><h1 class="text-3xl font-bold text-red-500">Brak dostępu</h1><p class="text-gray-700 mt-2">Nie masz uprawnień do tej strony lub nie jesteś zalogowany.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Przejdź do logowania `);
          } else {
            return [
              createTextVNode(" Przejdź do logowania ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/unauthorized.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=unauthorized-wbYBtbqU.js.map
