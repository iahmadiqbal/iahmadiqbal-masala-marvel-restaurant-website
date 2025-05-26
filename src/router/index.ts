import { createRouter, createWebHistory } from "vue-router";

import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Layout from "../layout/Layout.vue";


const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "menu",
        name: "Menu",
        component: Menu,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
