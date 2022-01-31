import axios from "axios";

import Axios from "@/utils/axios";
import {
  getLocalStorage,
  setLocalStorage,
  getSessionStorage,
  setSessionStorage,
} from "@/controllers/web";

import { ClientCredentialsAccessTokenResponse } from "@/types/discord";

export default class DiscordApi {
  public token?: string;
  public Authorization?: string;
  public BaseRequest: ReturnType<typeof axios.create>;
  constructor(token?: string, protected user: boolean = true) {
    this.BaseRequest = Axios;

    this.init(token, user);
  }
  public getTokenJson(): undefined | ClientCredentialsAccessTokenResponse {
    return getLocalStorage("token") || getSessionStorage("token");
  }
  public savaToken(
    data?: ClientCredentialsAccessTokenResponse,
    keep: boolean = true
  ): void {
    if (data?.error) return;
    keep ? setLocalStorage("token", data) : setSessionStorage("token", data);
  }
  public init(
    token?: string | ClientCredentialsAccessTokenResponse,
    user: boolean = true
  ): void {
    token ||= this.getTokenJson();
    if (typeof token !== "string" && token) {
      this.savaToken(token);
      token = token?.access_token;
    }
    this.token = token;
    this.Authorization = `${user ? "Bearer" : "Bot"} ${token}`;
  }
  public async getToken(code: string): Promise<string | Object> {
    let { data } = await axios({
      url: "http://localhost:3001/services/discord-callback",
      method: "POST",
      data: { code, redirect_uri: "http://localhost:3000/discord-callback" },
    });
    this.savaToken(data);
    if (data.access_token) {
      this.token = data.access_token;
      return data.access_token;
    }
    return data;
  }
  public getMe(): ReturnType<typeof this.BaseRequest> {
    return this.BaseRequest({ url: "/users/@me", ...this.headers });
  }
  public getGuilds(): ReturnType<typeof this.BaseRequest> {
    return this.BaseRequest({ url: "/users/@me/guilds", ...this.headers });
  }
  public getGuildChannel(guildId: string): ReturnType<typeof this.BaseRequest> {
    return this.BaseRequest({
      url: `/guilds/${guildId}/channels`,
      ...this.headers,
    });
  }
  public getGuildMembers(guildId: string): ReturnType<typeof this.BaseRequest> {
    return this.BaseRequest({
      url: `/guilds/${guildId}/members`,
      ...this.headers,
    });
  }
  public getGuildRoles(guildId: string): ReturnType<typeof this.BaseRequest> {
    return this.BaseRequest({
      url: `/guilds/${guildId}/roles`,
      ...this.headers,
    });
  }
  get headers() {
    return { headers: { Authorization: this.Authorization || "" } };
  }
}
