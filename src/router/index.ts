import { createRouter, createWebHistory } from 'vue-router';

const BlankLayout = () => import('@/layouts/BlankLayout.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main/home',
    },
    {
      path: '/main',
      name: 'mainPage',
      component: () => import('@/layouts/BasicLayout.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home.vue'),
        },
        {
          // 动画
          path: 'animate',
          name: 'animate',
          component: BlankLayout,
          children: [
            {
              path: 'parallax-scrolling',
              name: 'parallaxScrolling',
              component: () => import('@/views/animate/css/parallaxScrolling.vue'),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
