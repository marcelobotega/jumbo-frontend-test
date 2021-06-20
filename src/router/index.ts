import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stores",
    name: "StoresPage",
    component: () => import("../views/stores/StoresPage.vue"),
  },
  {
    path: "/cities",
    name: "CitiesPage",
    component: () => import("../views/cities/CitiesPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "border-b-2 border-yellow-400 border-solid",
  base: process.env.BASE_URL,
  routes,
});

export default router;
