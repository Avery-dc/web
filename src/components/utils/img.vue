<script setup lang="ts">
import { Ref, ref } from "vue";

const imgUrl = <Ref<string>>(ref(null) as unknown);
const props = defineProps<{
  config?: { [attr: string]: string };
  src: string;
}>();

const modules = import.meta.globEager("../../assets/**/*.*");
imgUrl.value =
  modules?.[`../../assets/images${props.src.substring(0)}`].default;
</script>

<template>
  <img v-if="imgUrl" :src="imgUrl" v-bind="props.config" />
</template>
