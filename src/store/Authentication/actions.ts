import { ActionContext, ActionTree } from "vuex";

import { RootState } from "..";
import { State } from "./state";
import { MutationsTypes } from "./mutations";

import discordApi from "../../controllers/discord";
import { ClientCredentialsAccessTokenResponse } from "@/types/discord";

export enum ActionsType {
  LOGIN = "loginCode",
  GET_INFO = "getMe",
}

export type Actions = {
  [ActionsType.LOGIN]: (
    ctx: ActionContext<State, RootState>,
    code: string
  ) => Promise<string | undefined>;
  [ActionsType.GET_INFO]: (
    ctx: ActionContext<State, RootState>,
    token?: string | ClientCredentialsAccessTokenResponse
  ) => Promise<Object>;
};

export const actions: ActionTree<State, RootState> & Actions = {
  [ActionsType.GET_INFO]: async ({ commit, state }, token) => {
    let Client = state.client;
    Client.init(token);

    let { data } = await Client.getMe();

    commit(MutationsTypes.SET_AUTH_DATA, data);
    return data;
  },
  [ActionsType.LOGIN]: async ({ commit, dispatch, state }, code) => {
    let Client = state.client;
    let token = await Client.getToken(code);

    if (typeof token === "string") {
      commit(MutationsTypes.SET_AUTH_STATUS, true);
      dispatch(ActionsType.GET_INFO, token);

      return token;
    }
    return void 0;
  },
};
