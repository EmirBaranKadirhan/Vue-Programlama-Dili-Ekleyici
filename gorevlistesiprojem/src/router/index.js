import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/add',
      name: 'AddLanguage',
      component: () => import('../views/AddLanguage.vue'),
    },
    {
      path: '/edit/:id',
      name: 'EditLanguage',
      component: () => import('../views/EditLanguage.vue'),
      props:true
    }
  ],
})

export default router
