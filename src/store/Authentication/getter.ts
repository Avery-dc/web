import { GetterTree } from "vuex";
import { RootState } from "..";
import { State } from "./state";

export enum GetterType {
  GET_AUTHENTICATION = "isAuthenticated",
}

export type Getters = {
  [GetterType.GET_AUTHENTICATION]: (state: State) => boolean;
};

export const getters: GetterTree<State, RootState> & Getters = {
  [GetterType.GET_AUTHENTICATION]: (state: State) => state.login,
};
