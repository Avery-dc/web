<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import { Modules, useStore } from "@/store";

import makeGuild from "@/components/dashboard/guild.vue";

let guilds = ref([]);
const store = useStore();
const Client = computed(() => store.state[Modules.AUTH].client);
const login = computed(() => store.state[Modules.AUTH].login);

!login.value && useRouter().push("/");

Client.value.getGuilds().then((d) => (guilds.value = d.data));
</script>

<template>
  <div class="dashboard">
    <div class="guilds">
      <makeGuild
        v-for="(guild, index) in guilds"
        :key="index"
        :data="guild"
        class="guild"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard {
  display: flex;
  justify-content: center;
  margin: 10px 20px;
  .guilds {
    display: grid;
    gap: 40px;
    margin: 60px 0;
    width: min(100%, 950px);
    grid-template-columns: repeat(3, 1fr);
    @media all and (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media all and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
