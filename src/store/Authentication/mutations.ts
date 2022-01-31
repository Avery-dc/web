import { State } from "./state";

export enum MutationsTypes {
  SET_AUTH_STATUS = "SET_AUTH_STATUS",
  SET_AUTH_DATA = "SET_AUTH_DATA",
}

export type Mutations<S = State> = {
  [MutationsTypes.SET_AUTH_STATUS]: (state: S, mode?: boolean) => void;
  [MutationsTypes.SET_AUTH_DATA]: (state: S, data: State["userInfo"]) => void;
};

export const mutations: Mutations<State> & Mutations = {
  /**設定登入狀態 */
  [MutationsTypes.SET_AUTH_STATUS]: (state, mode) =>
    (state.login = mode === void 0 ? !state.login : mode),
  /**設定用戶訊息 */
  [MutationsTypes.SET_AUTH_DATA]: (state, data) => (state.userInfo = data),
};
