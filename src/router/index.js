import { createRouter, createWebHistory } from 'vue-router';
import User from '../components/User.vue';
import Order from '../components/Order.vue';
import Product from '../components/Product.vue';

const routes = [
  {
    path: '/users',
    name: 'User',
    component: User,
  },
  {
    path: '/orders',
    name: 'Order',
    component: Order,
  },
  {
    path: '/products',
    name: 'Product',
    component: Product,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
