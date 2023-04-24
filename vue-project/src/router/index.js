import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Home.vue';
import Contact from '../Contact.vue';
import Dashboard from '../Dashboard.vue';


const routes = [
  { path: '/', component: Home, alias: '/home' },
  { path: '/Dashboard', component: Dashboard, alias: '/dashboard' },
  { path: '/Contact', component: Contact, alias: '/contact' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;