<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
  if (window.opener) {
    window.opener.window.dispatchEvent(
      new CustomEvent("get_dc_code", {
        detail: {
          code: new URLSearchParams(window.location.search).get("code"),
        },
      })
    );
    window.close();
  }
});
</script>

<template></template>

<style scoped lang="scss"></style>
