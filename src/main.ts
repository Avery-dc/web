import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store, { key } from "./store";
import directiveI18n from "@/directives/i18n";

createApp(App)
  .use(store, key)
  .use(router)
  .directive("i18n", directiveI18n)
  .mount("#app");
