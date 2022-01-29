import axios, { AxiosPromise } from "axios";

export default class DiscordApi {
  public token?: string;
  public Authorization?: string;
  public BaseRequest: ReturnType<typeof axios.create>;
  constructor(token?: string, protected user: boolean = true) {
    this.BaseRequest = this.initRequest();

    this.init(token, user);
  }
  public init(token?: string, user: boolean = true) {
    this.token =
      token ||
      localStorage.getItem("token") ||
      sessionStorage.getItem("token") ||
      "";
    this.Authorization = `${user ? "Bearer" : "Bot"} ${token}`;

    this.BaseRequest = this.initRequest();
  }
  public initRequest(): ReturnType<typeof axios.create> {
    return axios.create({
      baseURL: "https://discord.com/api/v9",
      method: "GET",
      headers: { ...this.headers },
    });
  }
  public getMe(): ReturnType<typeof this.BaseRequest> {
    return this.BaseRequest({ url: "/users/@me" });
  }
  public getGuilds(): ReturnType<typeof this.BaseRequest> {
    return this.BaseRequest({ url: "/users/@me/guilds" });
  }
  public getGuildChannel(guildId: string): ReturnType<typeof this.BaseRequest> {
    return this.BaseRequest({ url: `/guilds/${guildId}/channels` });
  }
  public getGuildMembers(guildId: string): ReturnType<typeof this.BaseRequest> {
    return this.BaseRequest({ url: `/guilds/${guildId}/members` });
  }
  public getGuildRoles(guildId: string): ReturnType<typeof this.BaseRequest> {
    return this.BaseRequest({ url: `/guilds/${guildId}/roles` });
  }
  get headers() {
    return { Authorization: this.Authorization || "" };
  }
}
