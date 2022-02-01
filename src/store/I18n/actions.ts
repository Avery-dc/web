import { ActionContext, ActionTree } from "vuex";

import { RootState } from "..";
import { State } from "./state";

export enum ActionsType {}

export type Actions = {};

export const actions: ActionTree<State, RootState> & Actions = {};
