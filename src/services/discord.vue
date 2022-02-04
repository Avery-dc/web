<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

onMounted(() => {
  if (window.opener)
    useRouter().push({
      path: "/",
      query: {
        dcCode: new URLSearchParams(window.location.search).get("code"),
      },
    });
  else window.close();
});
</script>

<template></template>

<style scoped lang="scss"></style>
