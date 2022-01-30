import { createStore, Store, useStore as baseUseStore } from "vuex";

import authModule from "./Authentication";
import { InjectionKey } from "vue";
import RootStateTypes, { AllStateTypes } from "./types";

export enum Modules {
  AUTH = "auth",
}

const store = createStore({
  modules: {
    [Modules.AUTH]: authModule,
  },
});

export const key: InjectionKey<Store<RootStateTypes>> = Symbol("vue-store");
export type RootState = typeof key;
export default store;

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key);
}
