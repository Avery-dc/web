<script setup lang="ts"></script>

<template>
  <section class="description flex flex-down flex-item-center">
    <h1 class="title">
      Avery
      <br />
      保護你的 discord 伺服器
    </h1>
    <div class="down flex flex-center flex-item-center">
      <ul class="advantage">
        <li>惡意/釣魚網站檢測</li>
        <li>會員登入系統</li>
        <li>可自訂設定</li>
        <li>實時更新資料庫</li>
        <li>用戶警告系統</li>
      </ul>
      <img src="@/assets/images/Home/rightPNG.png" alt="" />
    </div>
  </section>
  <section class="Features"></section>
</template>

<style scoped lang="scss">
section {
  margin-top: 2em;
  &.description {
    width: 100%;
    .title {
      font-weight: 900;
      font-size: 65px;
    }
    .down {
      width: 100%;
      .advantage {
        list-style: none;
        font-size: 18pt;
        li {
          position: relative;
          &::before {
            position: absolute;
            color: #acfd5a;
            content: "✔";
            left: -30px;
          }
        }
      }
      img {
        width: 550px;
      }
    }
    @media all and (max-width: 810px) {
      .title {
        font-size: 8vw;
      }
      .down {
        flex-direction: column;
        img {
          width: 80vw;
        }
        .advantage {
          font-size: 3.4vw;
        }
      }
    }
  }
}
</style>
