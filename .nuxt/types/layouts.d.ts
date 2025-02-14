import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "admin" | "doctor" | "patient"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}