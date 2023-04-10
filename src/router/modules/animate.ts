/*
 * @Description: 动画菜单
 * @Author: Dong Wei
 * @Date: 2023-04-04 16:09:00
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-10 17:32:37
 * @FilePath: \vue3-playground\src\router\modules\animate.ts
 */
// const BlankLayout = () => import('@/layouts/BlankLayout.vue');

export default [
  {
    path: 'animate',
    name: 'animate',
    meta: {
      title: '动画',
    },
    redirect: '/main/animate/css',
    children: [
      {
        path: 'css',
        name: 'animate_css',
        meta: {
          title: 'css',
        },
        redirect: '/main/animate/css/parallax-scrolling',
        children: [
          {
            path: 'parallax-scrolling',
            name: 'animate_css_parallaxScrolling',
            meta: {
              isRouter: true,
              title: '滚动视差',
            },
            component: () => import('@/views/animate/css/parallaxScrolling.vue'),
          },
        ],
      },
      {
        path: 'js-library',
        name: 'animate_jslibrary',
        meta: {
          title: 'js库动画',
        },
        children: [
          {
            path: '3drotate-card',
            name: 'animate_jslibrary_3drotatecard',
            meta: {
              isRouter: true,
              title: '3D悬停效果卡片',
            },
            component: () => import('@/views/animate/js/vanillaTilt.vue'),
          },
        ],
      },
      {
        path: 'synthetical',
        name: 'animate_synthetical',
        meta: {
          title: '综合动画',
        },
        children: [
          {
            path: 'group-random',
            name: 'animate_synthetical_groupRandom',
            meta: {
              isRouter: true,
              title: '一组元素随机变化',
            },
            component: () => import('@/views/animate/synthetical/groupRandom.vue'),
          },
        ],
      },
    ],
  },
];
