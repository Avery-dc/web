import { Module } from "vuex";
import { RootState } from "..";
import { State, state } from "./state";

export const authModule: Module<State, RootState> = {
  namespaced: true,
  state: () => state,
  mutations: mutations,
};
