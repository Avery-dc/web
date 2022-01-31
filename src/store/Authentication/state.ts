import discordApi from "../../controllers/discord";
export type State = {
  login: boolean;
  userInfo?: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner_color: string;
    accent_color: number;
    locale: string;
    email: string;
  };
  client: discordApi;
};

export const state: State = {
  login: false,
  userInfo: void 0,
  client: new discordApi(),
};
