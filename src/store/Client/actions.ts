import { ActionContext, ActionTree } from "vuex";

import { RootState } from "..";
import { MutationsTypes } from "./mutations";
import { State } from "./state";
import axios from "@/utils/axios";
import config from "@/config";

export enum ActionsType {
  loadBotInfo = "loadBotInfo",
}

export type Actions = {
  [ActionsType.loadBotInfo]: (
    ctx: ActionContext<State, RootState>
  ) => Promise<void>;
};

export const actions: ActionTree<State, RootState> & Actions = {
  [ActionsType.loadBotInfo]: async ({ commit }) => {
    let { data } = await axios({
      baseURL: config.mainApiUrl,
      url: "/api/discord/botInfo",
    });
    commit(MutationsTypes.setBotInfo, data);
  },
};
