<script setup lang="ts">
import { computed, ref } from "vue";

import { Modules, useStore } from "@/store";

const store = useStore();
const i18nData = computed(() => store.state[Modules.I18N].data);
</script>

<template></template>

<style scoped lang="scss"></style>
