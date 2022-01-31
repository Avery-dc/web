<script lang="ts">
import { defineComponent, computed, reactive, ref, Ref } from "vue";

import { _ET } from "@/types/event";
import { getLocalStorage } from "@/controllers/web";
import { ActionsType } from "@/store/Authentication/actions";
import { Modules, useStore } from "@/store";
import { ClientCredentialsAccessTokenResponse } from "@/types/discord";

export default defineComponent({
  methods: {
    dcLogin(code: string) {
      this.store.dispatch(`${[Modules.AUTH]}/${ActionsType.LOGIN}`, code);
    },
    getMe(data: ClientCredentialsAccessTokenResponse) {
      this.store.dispatch(`${Modules.AUTH}/${ActionsType.GET_INFO}`, data);
    },
  },
  mounted() {
    let token = getLocalStorage("token");
    if (token?.access_token) this.getMe(token);
    addEventListener("get_dc_code", async (event) => {
      let _ = <_ET>event;
      if (_?.detail?.code) this.dcLogin(_?.detail?.code);
    });
  },
  setup() {
    const store = useStore();
    const userEl = ref<unknown>(null) as Ref<HTMLElement>;
    const _dc_data = computed(() => store.state.auth.userInfo);
    const dc_data = reactive({ ...store.state.auth.userInfo });

    const BASE_URL = import.meta.env.BASE_URL;

    const login = () =>
      window.open(
        "https://discord.com/api/oauth2/authorize?client_id=863676847731376170&redirect_uri=http://localhost:3000/discord-callback&response_type=code&scope=identify+guilds+email",
        "",
        "width=500,height=620"
      );

    const openLicks = () => userEl.value.classList.toggle("down");
    Object.assign(window, { store });
    return { login, userEl, dc_data: _dc_data, BASE_URL, openLicks, store };
  },
});
</script>

<template>
  <header class="flex flex-item-center">
    <a :href="BASE_URL" class="logo flex flex-item-center">
      <img src="@/assets/images/Home/LogoLong.png" alt="" />
      <p>Avery</p>
    </a>
    <div class="menu">
      <div class="ul flex flex-item-center">
        <div class="user flex flex-item-center">
          <div
            v-if="dc_data"
            class="flex flex-item-center is-login"
            @click="openLicks"
            ref="userEl"
          >
            <img
              :src="`https://cdn.discordapp.com/avatars/${dc_data.id}/${dc_data.avatar}.png`"
              class="user-icon"
              width="45"
              alt=""
            />
            <span class="user-name" v-text="dc_data.username" />
            <i class="arrow" />
            <div class="licks"></div>
          </div>
          <div class="login" @click="login" v-else>登入</div>
        </div>
      </div>
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
  .menu {
    height: 100%;
    .ul {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    .user {
      .login {
        cursor: pointer;
        padding: 5px 1em;
        user-select: none;
        border-radius: 4px;
        background-color: #3994ff;
        color: #f2f4fb;
        transition: background-color 0.15s ease-out 0s, color, opacity, border;
        &:hover {
          background-color: #0076ff;
        }
      }
      .is-login {
        cursor: pointer;
        user-select: none;
        > *:not(.licks) {
          margin: 0 5px;
        }
        .user-icon {
          border-radius: 50%;
        }
        &.down .arrow {
          transform: rotate(180deg);
        }
      }
      .arrow {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 8px 8px 8px;
        border-color: transparent transparent var(--base-font-color) transparent;
        transition: transform 0.1s ease 0s;
      }
    }
  }
}
:global(#app) {
  margin-top: var(--header-height) !important;
  height: calc(100vh - var(--header-height)) !important;
}
</style>
