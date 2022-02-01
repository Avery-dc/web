<script setup lang="ts">
import config from "@/config";
import { computed, ref } from "vue";
import { Modules, useStore } from "@/store";
import { ActionsType } from "@/store/Client/actions";
import Features from "@/data/Features.json";

const store = useStore();
const user_len = computed(() => store.state.client.botInfo?.user_len || 0);
const guild_len = computed(() => store.state.client.botInfo?.guild_len || 0);
const features = ref(Features);

store.dispatch(`${Modules.CLIENT}/${ActionsType.loadBotInfo}`);

const roundToString = (num: number): number =>
  +(num.toString().slice(0, -1) + "0") || 1;
</script>

<template>
  <section class="description flex flex-item-center flex-center">
    <div class="left">
      <img src="@/assets/images/LogBoR.png" alt="" />
    </div>
    <div class="right flex flex-down flex-item-center">
      <h1 class="title">Avery 保護你的 DISCORD 伺服器</h1>
      <div class="licks flex amstelvaralpha">
        <a :href="config.invite.bot" style="--background-color: #ffb455">
          <img src="@/assets/images/Home/LogoLong.png" alt="邀請我" />
          邀請我
        </a>
        <a :href="config.invite.dcServer" style="--background-color: #5865f2">
          <img src="@/assets/images/discord.png" alt="discord" />
          加入我們
        </a>
      </div>
    </div>
  </section>
  <section class="botInfo flex flex-item-center flex-down">
    <div class="user_len">
      被超過 {{ roundToString(user_len) }} 個使用者使用
    </div>
    <div class="guild_len">
      被超過 {{ roundToString(guild_len) }} 台伺服器使用
    </div>
  </section>
  <section class="Features flex flex-down flex-item-center">
    <div v-for="(feature, index) in features" :key="index" class="feature">
      <div class="left">
        <img v-if="feature.imgUrl" :src="feature.imgUrl" alt="" />
      </div>
      <div class="right">
        <h1 v-text="feature.title" />
        <h5 v-text="feature.description" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  &.Features {
    margin: 10px 20px;
    .feature {
      display: grid;
      grid-template-columns: repeat(2, minmax(320px, 500px));
      img {
        max-width: 100%;
        max-height: 100%;
      }
      h1 {
        font-size: 35px;
        color: #f2f4fb;
      }
      h5 {
        font-size: 16px;
        color: #9b9d9f;
      }
      h1,
      h5 {
        text-transform: none;
        line-height: 40px;
        font-weight: 700;
        letter-spacing: -1px;
      }

      &:nth-child(even) {
        .left {
          transform: translateX(100%);
        }
        .right {
          transform: translateX(-100%);
        }
      }
      @media all and (max-width: 680px) {
        .left,
        .right {
          transform: none !important;
        }
        width: 80%;
        text-align: center;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
      }
    }
  }
  &.botInfo {
    font-size: 2em;
    background-color: #1f2129;
    padding: 1em 0;
  }
  &.description {
    width: 100%;
    margin: 20px 0;
    > * {
      margin: 0 1em;
    }
    .left img {
      width: 450px;
    }
    .right {
      .title {
        font-weight: 900;
        font-size: 65px;
        margin-top: 0;
        text-align: center;
      }
      .licks {
        height: 100%;
        width: 70%;
        a[href] {
          min-height: 44px;
          background-color: var(--background-color);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 25px;
          border-radius: 5px;
          margin: 0 10px;
          padding: 10px 2px;
          img {
            margin: 2px 0;
            width: 35px;
            margin-right: 10px;
          }
          &:hover {
            opacity: 0.95;
          }
        }
      }
    }
    @media all and (max-width: 1250px) {
      .left img {
        width: 36.1vw;
      }
      .right .title {
        font-size: 5.2vw !important;
      }
    }
    @media all and (max-width: 1000px) {
      flex-direction: column;
      .licks {
        flex-direction: column !important;
        a[href] {
          margin: 10px 0 !important;
          font-size: 2.5vw !important;
          padding: 0 !important;
        }
        :global(.wrapper) {
          width: 100% !important;
        }
      }
    }
  }
}
</style>
