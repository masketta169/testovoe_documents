import { createRouter, createWebHistory } from 'vue-router'

import IndexView from '@/views/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: IndexView,
    },
  ],
})

export default router
