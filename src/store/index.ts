import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";

import authModule from "./Authentication";
import clientModule from "./Client";
import I18nModule from "./I18n";

import RootStateTypes, { AllStateTypes } from "./types";

export enum Modules {
  AUTH = "auth",
  CLIENT = "client",
  I18N = "i18n",
}

const store = createStore({
  modules: {
    [Modules.AUTH]: authModule,
    [Modules.CLIENT]: clientModule,
    [Modules.I18N]: I18nModule,
  },
});

export const key: InjectionKey<Store<RootStateTypes>> = Symbol("vue-store");
export type RootState = typeof key;
export default store;

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key);
}
