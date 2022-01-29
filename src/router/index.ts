import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    name: "discordCallback",
    path: "/discord-callback",
    component: () => import("@/services/discord.vue"),
  },
];

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
