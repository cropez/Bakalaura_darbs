import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import Dashboard from "./Dashboard.vue";
import Contact from "./Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Dashboard },
  { path: "/contact", component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;