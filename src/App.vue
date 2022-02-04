<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";

import { useStore, Modules } from "@/store";
import { MutationsTypes } from "./store/Client/mutations";

const store = useStore();

window.addEventListener("storage", () =>
  store.commit(`${Modules.CLIENT}/${MutationsTypes.setLocalStorage}`)
);
</script>

<template>
  <Header />
  <div class="wrapper">
    <router-view />
  </div>
  <Footer />
</template>

<style lang="scss">
@import url(@/assets/scss/main.scss);
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  > .wrapper {
    flex-grow: 1;
    width: 95%;
  }
}
</style>
