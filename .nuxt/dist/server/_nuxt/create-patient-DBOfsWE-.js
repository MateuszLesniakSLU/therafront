import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "hookable";
const _sfc_main = {
  __name: "create-patient",
  __ssrInlineRender: true,
  setup(__props) {
    const patient = ref({
      name: "",
      email: "",
      password: ""
    });
    const successMessage = ref("");
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}><h1 class="text-3xl font-bold mb-4">Dodaj nowego pacjenta</h1><form class="space-y-4 bg-white p-6 rounded shadow"><div><label class="block font-medium">Imię i nazwisko</label><input${ssrRenderAttr("value", patient.value.name)} type="text" class="w-full p-2 border rounded" required></div><div><label class="block font-medium">Email</label><input${ssrRenderAttr("value", patient.value.email)} type="email" class="w-full p-2 border rounded" required></div><div><label class="block font-medium">Hasło</label><input${ssrRenderAttr("value", patient.value.password)} type="password" class="w-full p-2 border rounded" required></div><button type="submit" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"> Dodaj Pacjenta </button></form>`);
      if (successMessage.value) {
        _push(`<p class="text-green-600 mt-2">${ssrInterpolate(successMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<p class="text-red-600 mt-2">${ssrInterpolate(errorMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/doctor/create-patient.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=create-patient-DBOfsWE-.js.map
