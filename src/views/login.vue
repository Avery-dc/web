<script setup lang="ts">
import { computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import { Modules, useStore } from "@/store";
import { ActionsType } from "@/store/Authentication/actions";
import { _ET } from "@/types/event";
import config from "@/config";

const { t } = useI18n();
const store = useStore();
const isLogin = computed(() => store.state[Modules.AUTH].login);
const dcCode = computed(() => store.state[Modules.CLIENT].localStorage);

isLogin.value && useRouter().push("/");

const dcLogin = (code: string) =>
  store.dispatch(`${[Modules.AUTH]}/${ActionsType.LOGIN}`, code);

watch(dcCode, () => {
  let dc_code = localStorage.getItem("dc_code");
  if (dcCode && dc_code) dcLogin(dc_code);
});
const login = () => {
  window.open(
    `https://discord.com/api/oauth2/authorize?client_id=863676847731376170&redirect_uri=${config.oauth2.redirect_uri}&response_type=code&scope=identify+guilds+email`
  );
};
</script>

<template>
  <div class="login flex flex-down flex-center flex-item-center">
    <h1 class="info" v-html="t('login.title')" />
    <h3 class="button" @click="login" v-html="t('main.login')" />
  </div>
</template>

<style scoped lang="scss">
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999999;
  background-color: #23272a;
  .info {
    font-size: 20pt;
    text-align: center;
  }
  .button {
    width: max-content;
    cursor: pointer;
    padding: 0.8em 1.5em;
    user-select: none;
    border-radius: 4px;
    background-color: #3994ff;
    color: #f2f4fb;
    transition: background-color 0.15s ease-out 0s, color, opacity, border;
    &:hover {
      opacity: 0.95;
    }
  }
}
</style>
