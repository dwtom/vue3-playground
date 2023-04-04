/*
 * @Description: 路由管理
 * @Author: Dong Wei
 * @Date: 2023-04-04 16:06:25
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-04 16:20:41
 * @FilePath: \vue3-playground\src\router\router.ts
 */

// 路由meta声明见@/typings/router.d.ts
import { createRouter, createWebHistory } from 'vue-router';
import animateRoutes from './modules/animate';

// const BlankLayout = () => import('@/layouts/BlankLayout.vue');

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
          meta: {
            isRouter: true,
            title: '首页',
          },
          component: () => import('@/views/home.vue'),
        },
        ...animateRoutes,
      ],
    },
    {
      path: '/403',
      name: 'noAuthPage',
      component: () => import('@/views/error/403.vue'),
    },
    {
      path: '/404',
      name: 'notFoundPage',
      component: () => import('@/views/error/404.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
});

export default router;
