import { createRouter, createWebHistory } from 'vue-router';
import Catalog from '../components/Catalog.vue';
import Cart from '../components/Cart.vue';
import Authorization from '../components/Authorization.vue';
import Profile from '../components/Profile.vue'; 

const routes = [
  {
    path: '/', 
    name: 'Authorization',
    component: Authorization,
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
