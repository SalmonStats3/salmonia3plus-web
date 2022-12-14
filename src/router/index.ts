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
  {
    path: "/faq",
    component: () => import("../views/FAQ.vue"),
  },
  {
    path: "/backup",
    component: () => import("../views/Backup.vue"),
  },
  {
    path: "/privacy",
    component: () => import("../views/Privacy.vue"),
  },
  {
    path: "/agreements",
    component: () => import("../views/EULA.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
