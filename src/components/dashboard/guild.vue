<script setup lang="ts">
import { defineProps } from "vue";
import { guild as guildType } from "@/types/discord";

const props = defineProps<{
  data: guildType;
}>();

const guild = props.data;

let permissions = props.data.permissions;
let permissionType = props.data.owner
  ? "擁有者"
  : 32 == (32 & permissions)
  ? "機器人管理員"
  : false;

let imgUrl = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;
</script>

<template>
  <div v-if="permissionType" class="guild">
    <div
      class="icon"
      :style="{
        background: guild.icon
          ? `url('${imgUrl}') center / cover no-repeat`
          : '#1f2129',
      }"
    >
      <img
        v-if="guild.icon"
        :src="imgUrl"
        :alt="`${guild.name} 的 log`"
        class="log"
      />
      <div class="log" v-else v-text="guild.name.slice(0, 3)" />
    </div>
    <div class="info">
      <p class="guild-name" v-text="guild.name" />
      <p class="guild-permission" v-text="permissionType" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.guild {
  .icon {
    height: 152px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    .log {
      display: flex;
      align-items: center;
      z-index: 2;
      border-radius: 50%;
      height: 80%;
    }
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      opacity: 0.38;
      position: absolute;
      backdrop-filter: blur(15px);
      background-color: black;
    }
  }
}
</style>
