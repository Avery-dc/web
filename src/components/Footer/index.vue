<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <footer class="flex flex-center">
    Copyright © 2021 - {{ new Date().getFullYear() }}Avery Official Developers.
    All rights reserved.
  </footer>
</template>

<style scoped lang="scss">
footer {
  text-align: center;
  background-color: #1f2129;
  padding: 2em 0;
  width: 100%;
}
</style>
