/*
 * @Description: 动画菜单
 * @Author: Dong Wei
 * @Date: 2023-04-04 16:09:00
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-04 16:31:52
 * @FilePath: \vue3-playground\src\router\modules\animate.ts
 */
const BlankLayout = () => import('@/layouts/BlankLayout.vue');

export default [
  {
    path: 'animate',
    name: 'animate',
    meta: {
      title: '动画',
    },
    component: BlankLayout,
    children: [
      {
        path: 'css',
        name: 'animate_css',
        meta: {
          title: 'css',
        },
        component: BlankLayout,
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
    ],
  },
];
