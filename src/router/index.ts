/*
 * @Description: 路由整体入口
 * @Author: Dong Wei
 * @Date: 2023-03-23 18:00:00
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-04 17:07:08
 * @FilePath: \vue3-playground\src\router\index.ts
 */
import router from './router';

// 路由拦截
router.beforeEach((to, from, next) => {
  // 动态设置标题
  const title = import.meta.env.VITE_BASE_TITLE;
  document.title = to.meta.title ? `${to.meta.title} - ${title}` : title;
  // 权限判断
  next();
});

export default router;
