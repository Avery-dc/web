import { createStore } from "vuex";

import { State } from "./Authentication/state";
import { authModule } from "./Authentication/module";

export enum Modules {
  AUTH = "auth",
}

const store = createStore({
  modules: {
    [Modules.AUTH]: authModule,
  },
});

export type RootState = State;
export default store;
