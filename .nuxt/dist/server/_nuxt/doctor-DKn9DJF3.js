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
const _sfc_main$1 = {
  __name: "SidebarDoctor",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "w-64 bg-white shadow-md h-screen flex flex-col p-6" }, _attrs))} data-v-c724bcfc><div data-v-c724bcfc><h2 class="text-2xl font-bold mb-6" data-v-c724bcfc>Panel Lekarza</h2><nav data-v-c724bcfc><ul class="space-y-4" data-v-c724bcfc><li data-v-c724bcfc>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/doctor/dashboard",
        class: "flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="material-icons" data-v-c724bcfc${_scopeId}>dashboard</span><span data-v-c724bcfc${_scopeId}>Pulpit</span>`);
          } else {
            return [
              createVNode("span", { class: "material-icons" }, "dashboard"),
              createVNode("span", null, "Pulpit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-c724bcfc>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/doctor/patients",
        class: "flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="material-icons" data-v-c724bcfc${_scopeId}>groups</span><span data-v-c724bcfc${_scopeId}>Pacjenci</span>`);
          } else {
            return [
              createVNode("span", { class: "material-icons" }, "groups"),
              createVNode("span", null, "Pacjenci")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-c724bcfc>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/doctor/analysis",
        class: "flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="material-icons" data-v-c724bcfc${_scopeId}>bar_chart</span><span data-v-c724bcfc${_scopeId}>Analiza</span>`);
          } else {
            return [
              createVNode("span", { class: "material-icons" }, "bar_chart"),
              createVNode("span", null, "Analiza")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-c724bcfc>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/doctor/create-patient",
        class: "flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="material-icons" data-v-c724bcfc${_scopeId}>bar_chart</span><span data-v-c724bcfc${_scopeId}>Create patient</span>`);
          } else {
            return [
              createVNode("span", { class: "material-icons" }, "bar_chart"),
              createVNode("span", null, "Create patient")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav></div><button class="mt-auto flex items-center space-x-2 p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition" data-v-c724bcfc><span class="material-icons" data-v-c724bcfc>logout</span><span data-v-c724bcfc>Wyloguj się</span></button></aside>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SidebarDoctor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SidebarDoctor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c724bcfc"]]);
const _sfc_main = {
  __name: "doctor",
  __ssrInlineRender: true,
  setup(__props) {
    const isChecking = useState("isChecking", () => true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0$1;
      if (!unref(isChecking)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex h-screen bg-[#F5F5F5]">`);
        _push(ssrRenderComponent(SidebarDoctor, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/doctor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=doctor-DKn9DJF3.js.map
