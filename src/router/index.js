import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/Views/Layout/index.vue'),
      children: [
        {
          path: '',
          component: () => import('@/Views/Home/index.vue')
        },
        {
          path: 'category/:id',
          component: () => import('@/Views/Category/index.vue')
        },
      ]
    },
    {
      path: '/login',
      component: () => import('@/Views/Login/index.vue')
    }
  ]
})

export default router
