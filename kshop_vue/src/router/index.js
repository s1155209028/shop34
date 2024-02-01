import { createRouter, createWebHistory } from 'vue-router';
import Products from '@/views/Products.vue';
import Info from '@/views/Info.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
});

export default router;