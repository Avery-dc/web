import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store, { key } from "./store";
import i18nData from "@/i18n";

import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") || "zh-TW",
  fallbackLocale: "zh-TW",
  messages: i18nData,
});

createApp(App).use(store, key).use(router).use(i18n).mount("#app");
