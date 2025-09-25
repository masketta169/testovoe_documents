import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      component: () => import('@/views/dashboard/index.vue'),
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: () => import('@/views/dashboard/emptydocument.vue'),
        },
        {
          path: 'document/:slug',
          name: 'Document',
          component: () => import('@/views/dashboard/document/[slug].vue'),
        },
      ],
    },
  ],
});

export default router;
