import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue';
import ProductView from '../views/ProductView.vue';

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/products/:id',
    name: 'singleProduct',
    component: ProductView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
