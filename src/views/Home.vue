<script setup lang="ts"></script>

<template>
  <section class="description">
    <div class="left">
      <h1 class="title">
        Avery
        <br />
        保護你的 discord 伺服器
      </h1>
      <ul class="advantage">
        <li>惡意/釣魚網站檢測</li>
        <li>會員登入系統</li>
        <li>可自訂設定</li>
        <li>實時更新資料庫</li>
        <li>用戶警告系統</li>
      </ul>
    </div>
    <div class="right">
      <img src="@/assets/images/Home/rightPNG.png" alt="awa" />
    </div>
  </section>
  <section class="Features"></section>
</template>

<style scoped lang="scss">
.description {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  .left {
    .title {
      font-weight: 900;
      font-size: 70px;
    }
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
  }
  .right {
    img {
      width: 100%;
    }
  }
}
</style>
