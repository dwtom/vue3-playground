/*
 * @Description: "其它"菜单
 * @Author: Dong Wei
 * @Date: 2023-05-06 10:23:55
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-05-06 10:40:36
 * @FilePath: \vue3-playground\src\router\modules\others.ts
 */
export default [
  {
    path: 'others',
    name: 'others',
    meta: {
      title: '其它',
      isRouter: true,
    },
    component: () => import('@/views/others/index.vue'),
  },
  {
    path: 'others/grid',
    name: 'others_grid',
    component: () => import('@/views/others/grid.vue'),
  },
];
