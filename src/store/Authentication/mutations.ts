import { State } from "./state";

export enum MutationsTypes {
  SET_AUTH_STATUS = "SET_AUTH_STATUS",
}

export type Mutations<S = State> = {
  [MutationsTypes.SET_AUTH_STATUS]: (state: S, mode?: boolean) => void;
};
export const mutations: Mutations<State> & Mutations = {
  /**設定登入狀態 */
  [MutationsTypes.SET_AUTH_STATUS]: (state, mode) =>
    (state.login = mode === void 0 ? !state.login : mode),
};
