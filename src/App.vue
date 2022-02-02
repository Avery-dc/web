<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";
</script>

<template>
  <Header />
  <div class="wrapper">
    <router-view />
  </div>
  <div v-i18n="'awa'"></div>
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
