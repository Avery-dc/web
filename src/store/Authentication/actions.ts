import { ActionContext, ActionTree } from "vuex";

import { RootState } from "..";
import { State } from "./state";

import discordApi from "../../controllers/discord";
import { MutationsTypes } from "./mutations";

const Client = new discordApi();

export enum ActionsType {
  LOGIN = "LOGIN",
}

export type Actions = {
  [ActionsType.LOGIN]: (
    ctx: ActionContext<State, RootState>,
    code: string
  ) => Promise<string | undefined>;
};

export const actions: ActionTree<State, RootState> & Actions = {
  [ActionsType.LOGIN]: async ({ commit }, code) => {
    let token = await Client.getToken(code);
    if (typeof token === "string") {
      commit(MutationsTypes.SET_AUTH_STATUS, true);
      return token;
    }
    return void 0;
  },
};
