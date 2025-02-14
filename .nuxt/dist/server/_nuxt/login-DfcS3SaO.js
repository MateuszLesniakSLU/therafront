import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    jwtDecode.default || jwtDecode;
    const email = ref("");
    const password = ref("");
    const error = ref("");
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center min-h-screen bg-gray-100" }, _attrs))}><div class="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded"><h1 class="text-2xl font-bold text-center">Logowanie</h1><form class="space-y-4"><div><label for="email" class="block text-sm font-medium text-gray-700">Email</label><input id="email"${ssrRenderAttr("value", email.value)} type="email" required class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"></div><div><label for="password" class="block text-sm font-medium text-gray-700">Hasło</label><input id="password"${ssrRenderAttr("value", password.value)} type="password" required class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"></div><button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"> Zaloguj się </button></form>`);
      if (error.value) {
        _push(`<p class="text-center text-red-500">${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-DfcS3SaO.js.map
