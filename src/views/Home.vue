<script setup lang="ts">
import config from "@/config";
import { ref } from "vue";

const user_len = ref(0);
const guild_len = ref(0);
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
  <section class="botInfo">
    <div class="user_len">被超過 {{ user_len }} 個使用者使用</div>
    <div class="guild_len">被超過 {{ guild_len }} 台伺服器使用</div>
  </section>
  <section class="Features"></section>
</template>

<style scoped lang="scss">
section {
  &.description {
    width: 100%;
    height: 95%;
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
