import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/Top.vue"),
  },
  {
    path: "/dev",
    component: () => import("../views/Dev.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
