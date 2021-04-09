import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

const routerHistory = createWebHistory(); // 引入路由方式
const routes = [
  {
    path: "/",
    name: "_home",
    redirect: "/home",
    component: HelloWorld,
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          title: "首页",
        },
        component: HelloWorld,
      },
    ],
  },
];

export default createRouter({
  history: routerHistory,
  routes,
});
