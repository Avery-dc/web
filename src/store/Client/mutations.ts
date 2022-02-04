import { State } from "./state";

export enum MutationsTypes {
  setBotInfo = "setBotInfo",
  setLocalStorage = "setLocalStorage",
}

export type Mutations<S = State> = {
  [MutationsTypes.setBotInfo]: (state: S, data?: State["botInfo"]) => void;
  [MutationsTypes.setLocalStorage]: (
    state: S,
    data?: typeof localStorage
  ) => void;
};

export const mutations: Mutations<State> & Mutations = {
  [MutationsTypes.setBotInfo]: (state, data) => (state.botInfo = data),
  [MutationsTypes.setLocalStorage]: (state, data) =>
    (state.localStorage = JSON.stringify(data || localStorage)),
};
