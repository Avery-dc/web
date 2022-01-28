<script setup lang="ts"></script>

<template>
  <header></header>
</template>

<style scoped lang="scss">
header {
  background-color: var(--header-background-color);
  height: var(--header-height);
  box-shadow: 0 0 1.5em 2px #00000081;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
:global(body) {
  // height: calc(100vh - var(--header-height)) !important;
  margin-top: var(--header-height) !important;
}
</style>
