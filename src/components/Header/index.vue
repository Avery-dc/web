<script setup lang="ts">
const BASE_URL = import.meta.env.BASE_URL;
</script>

<template>
  <header class="flex flex-item-center">
    <a :href="BASE_URL" class="logo flex flex-item-center">
      <img src="@/assets/images/Home/LogoLong.png" alt="" />
      <p>Avery<sup>TW</sup></p>
    </a>
    <div class="menu"></div>
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
