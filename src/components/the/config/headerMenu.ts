/*
 * @Description: 头部菜单
 * @Author: Dong Wei
 * @Date: 2023-03-24 16:40:09
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-04 11:09:54
 * @FilePath: \vue3-playground\src\components\the\config\headerMenu.ts
 */

export const menuList: any[] = [
  {
    title: '首页',
    path: '/',
  },
  {
    title: '动画',
    children: [
      {
        title: '纯css动画',
        children: [
          {
            title: '视差滚动',
            path: '/main/animate/parallax-scrolling',
          },
        ],
      },
      {
        title: '复合动画',
        // children: [],
      },
    ],
  },
  {
    title: 'echarts',
    children: [
      {
        title: '测试',
        path: '',
      },
    ],
  },
];
