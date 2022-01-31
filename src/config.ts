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
};

export default config;
