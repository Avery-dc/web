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
    name: "login",
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: () => import("@/views/dashboard/index.vue"),
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
