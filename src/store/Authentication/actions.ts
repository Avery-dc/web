import { ActionContext, ActionTree } from "vuex";

import { RootState } from "..";
import { State } from "./state";

import discordApi from "../../controllers/discord";
import { MutationsTypes } from "./mutations";

const Client = new discordApi();

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
    token?: string
  ) => Promise<Object>;
};

export const actions: ActionTree<State, RootState> & Actions = {
  [ActionsType.GET_INFO]: async ({ commit }, token) => {
    Client.init(token);

    let { data } = await Client.getMe();
    commit(MutationsTypes.SET_AUTH_DATA, data);
    return data;
  },
  [ActionsType.LOGIN]: async ({ commit, dispatch }, code) => {
    let token = await Client.getToken(code);

    if (typeof token === "string") {
      commit(MutationsTypes.SET_AUTH_STATUS, true);
      dispatch(ActionsType.GET_INFO, token);

      return token;
    }
    return void 0;
  },
};
