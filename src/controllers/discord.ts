import axios from "axios";
import Axios from "@/utils/axios";
export default class DiscordApi {
  public token?: string;
  public Authorization?: string;
  public BaseRequest: ReturnType<typeof axios.create>;
  constructor(token?: string, protected user: boolean = true) {
    this.BaseRequest = Axios;

    this.init(token, user);
  }
  public init(token?: string, user: boolean = true) {
    token =
      token ||
      localStorage.getItem("token") ||
      sessionStorage.getItem("token") ||
      "";
    this.token = token;
    this.Authorization = `${user ? "Bearer" : "Bot"} ${token}`;
    console.log(this.Authorization);
  }
  public async getToken(code: string): Promise<string | Object> {
    let { data } = await axios({
      url: "http://localhost:3001/services/discord-callback",
      method: "POST",
      data: { code, redirect_uri: "http://localhost:3000/discord-callback" },
    });
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
Object.assign(window, { DiscordApi });
