import { State } from "./state";

export enum MutationsTypes {
  SET_AUTH_STATUS = "SET_AUTH_STATUS",
}

export type Mutations<S = State> = {
  [MutationsTypes.SET_AUTH_STATUS]: (state: S, player: boolean) => void;
};
export const mutations: Mutations<State> & Mutations = {
  [MutationsTypes.SET_AUTH_STATUS]: () => {},
};
