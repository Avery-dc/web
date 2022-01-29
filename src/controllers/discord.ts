import axios, { AxiosPromise } from "axios";

export default class DiscordApi {
  Authorization: string;
  BaseRequest: ReturnType<typeof axios.create>;
  constructor(private token: string, user: boolean = true) {
    this.Authorization = `${user ? "Bearer" : "Bot"} ${token}`;

    this.BaseRequest = axios.create({
      baseURL: "https://discord.com/api/v9",
      method: "GET",
      headers: { ...this.headers },
    });
  }
  public getMe(): AxiosPromise<any> {
    return this.BaseRequest({ url: "/users/@me" });
  }
  public getGuilds(): AxiosPromise<any> {
    return this.BaseRequest({ url: "/users/@me/guilds" });
  }
  public getGuildChannel(guildId: string): AxiosPromise<any> {
    return this.BaseRequest({ url: `/guilds/${guildId}/channels` });
  }
  public getGuildMembers(guildId: string): AxiosPromise<any> {
    return this.BaseRequest({ url: `/guilds/${guildId}/channels` });
  }
  public getGuildRoles(guildId: string): AxiosPromise<any> {
    return this.BaseRequest({ url: `/guilds/${guildId}/channels` });
  }
  get headers() {
    return { Authorization: this.Authorization };
  }
}
