import { createWebHistory, createRouter } from "vue-router";

import HelloWorld from "@/views/HelloWorld.vue";
import Setting from "@/views/Setting.vue";
import NotFound from "@/views/NotFound.vue";
const routes = [
   {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
  },
  {
  path: "/:catchAll(.*)",
  component: NotFound,
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;