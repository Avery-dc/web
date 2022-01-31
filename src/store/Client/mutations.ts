import { State } from "./state";

export enum MutationsTypes {
  getBotInfo = "getBotInfo",
}

export type Mutations<S = State> = {
  [MutationsTypes.getBotInfo]: (state: S, data?: State["botInfo"]) => void;
};

export const mutations: Mutations<State> & Mutations = {
  [MutationsTypes.getBotInfo]: (state, data) => (state.botInfo = data),
};
