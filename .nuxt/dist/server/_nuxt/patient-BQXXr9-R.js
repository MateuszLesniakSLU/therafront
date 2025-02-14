import { _ as __nuxt_component_0$1 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-CA8Smh6B.js";
import "hookable";
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
  __name: "SidebarPatient",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "w-64 bg-mint-green text-gray-800 shadow-lg" }, _attrs))}><div class="p-6 text-2xl font-bold text-center border-b">Panel Pacjenta</div><nav class="mt-4 flex flex-col space-y-2 p-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/patient/dashboard",
        class: "flex items-center space-x-2 p-3 rounded hover:bg-mint-green-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="material-icons"${_scopeId}>dashboard</span><span${_scopeId}>Dashboard</span>`);
          } else {
            return [
              createVNode("span", { class: "material-icons" }, "dashboard"),
              createVNode("span", null, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/patient/survey",
        class: "flex items-center space-x-2 p-3 rounded hover:bg-mint-green-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="material-icons"${_scopeId}>assignment</span><span${_scopeId}>Survey</span>`);
          } else {
            return [
              createVNode("span", { class: "material-icons" }, "assignment"),
              createVNode("span", null, "Survey")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/patient/diary",
        class: "flex items-center space-x-2 p-3 rounded hover:bg-mint-green-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="material-icons"${_scopeId}>book</span><span${_scopeId}>Diary</span>`);
          } else {
            return [
              createVNode("span", { class: "material-icons" }, "book"),
              createVNode("span", null, "Diary")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/patient/medications",
        class: "flex items-center space-x-2 p-3 rounded hover:bg-mint-green-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="material-icons"${_scopeId}>local_pharmacy</span><span${_scopeId}>Medications</span>`);
          } else {
            return [
              createVNode("span", { class: "material-icons" }, "local_pharmacy"),
              createVNode("span", null, "Medications")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/patient/mood-history",
        class: "flex items-center space-x-2 p-3 rounded hover:bg-mint-green-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="material-icons"${_scopeId}>history</span><span${_scopeId}>Mood History</span>`);
          } else {
            return [
              createVNode("span", { class: "material-icons" }, "history"),
              createVNode("span", null, "Mood History")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/patient/contact-therapist",
        class: "flex items-center space-x-2 p-3 rounded hover:bg-mint-green-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="material-icons"${_scopeId}>contact_support</span><span${_scopeId}>Contact Therapist</span>`);
          } else {
            return [
              createVNode("span", { class: "material-icons" }, "contact_support"),
              createVNode("span", null, "Contact Therapist")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/patient/settings",
        class: "flex items-center space-x-2 p-3 rounded hover:bg-mint-green-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="material-icons"${_scopeId}>settings</span><span${_scopeId}>Settings</span>`);
          } else {
            return [
              createVNode("span", { class: "material-icons" }, "settings"),
              createVNode("span", null, "Settings")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><button class="mt-6 px-4 py-2 w-full bg-red-500 text-white rounded hover:bg-red-600"> Wyloguj </button></aside>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SidebarPatient.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "patient",
  __ssrInlineRender: true,
  setup(__props) {
    const isChecking = useState("isChecking", () => true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0$1;
      if (!unref(isChecking)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex h-screen bg-gray-100">`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(`<main class="p-6 flex-1">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/patient.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=patient-BQXXr9-R.js.map
