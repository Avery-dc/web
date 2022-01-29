<script setup lang="ts">
import { reactive } from "vue";
import axios from "axios";

import { _ET } from "@/types/event";
import { getLocalStorage, setLocalStorage } from "@/controllers/web";
import discordApi from "@/controllers/discord";

const dc_data = reactive({}) as any;
const BASE_URL = import.meta.env.BASE_URL;

let token = getLocalStorage("token");
let dcApi = new discordApi();

if (token?.access_token) {
  dcApi.init(token.access_token);
  dcApi
    .getMe()
    .then((d) => Object.assign(dc_data, d.data))
    .catch((e) => console.log(e));
}

const login = () => {
  window.open(
    "https://discord.com/api/oauth2/authorize?client_id=863676847731376170&redirect_uri=http://localhost:3000/discord-callback&response_type=code&scope=identify+guilds+email",
    "",
    "width=500,height=620"
  );

  addEventListener("get_dc_code", async (event: unknown) => {
    let _ = event as _ET;
    if (_?.detail?.code) {
      let { data } = await axios({
        url: "http://localhost:3001/services/discord-callback",
        method: "POST",
        data: {
          code: _.detail?.code,
          redirect_uri: "http://localhost:3000/discord-callback",
        },
      });
      if (!data?.error) {
        let { data: userInfo } = await dcApi.getMe();
        Object.assign(dc_data, userInfo);
        setLocalStorage("token", data || {});
      }
    }
  });
};
</script>

<template>
  <header class="flex flex-item-center">
    <a :href="BASE_URL" class="logo flex flex-item-center">
      <img src="@/assets/images/Home/LogoLong.png" alt="" />
      <p>Avery<sup>TW</sup></p>
    </a>
    <div class="menu">
      <ul>
        <div class="user">
          <div @click="login" v-if="Object.keys(dc_data).length > 0">
            <div>
              <img
                :src="`https://cdn.discordapp.com/avatars/${dc_data.id}/${dc_data.avatar}.png`"
                alt=""
              />
            </div>
          </div>
          <div @click="login" v-else>登入</div>
        </div>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  justify-content: space-between;
  background-color: var(--header-background-color);
  box-shadow: 0 0 1.5em 2px #00000099;
  height: var(--header-height);
  padding: 0 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .logo {
    color: var(--base-font-color);
    user-select: none;
    font-weight: 800;
    font-size: 14pt;
    height: 70%;
    img {
      height: 100%;
    }
  }
}
:global(#app) {
  margin-top: var(--header-height) !important;
  height: calc(100vh - var(--header-height)) !important;
}
</style>
