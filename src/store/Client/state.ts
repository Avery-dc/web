export type State = {
  botInfo?: { user_len: number; guild_len: number };
  localStorage: string;
};

export const state: State = {
  botInfo: void 0,
  localStorage: JSON.stringify(localStorage),
};
