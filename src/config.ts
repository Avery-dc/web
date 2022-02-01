let config = {
  invite: {
    dcServer: "https://discord.com/invite/uzzwFz3yh6",
    bot: "https://discord.com/oauth2/authorize?client_id=876367835486646282&scope=bot&permissions=268443710",
  },
  oauth2: {
    redirect_uri: "http://localhost:3000/discord-callback",
    server_callback: "/services/discord-callback",
  },
  mainApiUrl: "http://localhost:3001",
  languages: [
    {
      name: "繁體中文",
      area: {
        name: "台灣",
        icon: "https://www.mediafire.com/convkey/5079/rit79mf35jbjn465g.jpg",
      },
      mark: "ZH_TW",
    },
  ],
  defaultLanguage: "ZH_TW",
};

export default config;
