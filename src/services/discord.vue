<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  if (window.opener) {
    let code = new URLSearchParams(window.location.search).get("code");
    if (code) localStorage.setItem("dcCode", code);
    window.close();
  }
});
</script>

<template></template>

<style scoped lang="scss"></style>
