import { State } from "./state";

export enum MutationsTypes {}

export type Mutations<S = State> = {};

export const mutations: Mutations<State> & Mutations = {};
