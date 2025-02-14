import { _ as __nuxt_component_0$1 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-CA8Smh6B.js";
import "hookable";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useState } from "./state-CuouCpJu.js";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "w-64 bg-mint-green text-gray-800 shadow-lg" }, _attrs))}><nav class="mt-4 flex flex-col space-y-2 p-4">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/admin",
    class: "flex items-center space-x-2 p-3 rounded hover:bg-mint-green-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="material-icons"${_scopeId}>settings</span><span${_scopeId}>Panel Główny</span>`);
      } else {
        return [
          createVNode("span", { class: "material-icons" }, "settings"),
          createVNode("span", null, "Panel Główny")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/users",
    class: "flex items-center space-x-2 p-3 rounded hover:bg-mint-green-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="material-icons"${_scopeId}>group</span><span${_scopeId}>Użytkownicy</span>`);
      } else {
        return [
          createVNode("span", { class: "material-icons" }, "group"),
          createVNode("span", null, "Użytkownicy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/reports",
    class: "flex items-center space-x-2 p-3 rounded hover:bg-mint-green-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="material-icons"${_scopeId}>bar_chart</span><span${_scopeId}>Raporty</span>`);
      } else {
        return [
          createVNode("span", { class: "material-icons" }, "bar_chart"),
          createVNode("span", null, "Raporty")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><button class="mt-6 px-4 py-2 w-full bg-red-500 text-white rounded hover:bg-red-600"> Wyloguj </button></aside>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SidebarAdmin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SidebarAdmin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const isChecking = useState("isChecking", () => true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0$1;
      if (!unref(isChecking)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex h-screen bg-[#F5F5F5]">`);
        _push(ssrRenderComponent(SidebarAdmin, null, null, _parent));
        _push(`<main class="flex-1 p-6 overflow-y-auto">`);
        _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
        _push(`</main></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center h-screen" }, _attrs))}><p class="text-gray-600 text-xl">Sprawdzanie uprawnień...</p></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=admin-TktqxJFz.js.map
