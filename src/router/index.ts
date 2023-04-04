/*
 * @Description: 路由整体入口
 * @Author: Dong Wei
 * @Date: 2023-03-23 18:00:00
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-04 16:08:39
 * @FilePath: \vue3-playground\src\router\index.ts
 */
import router from './router';

// 路由拦截
router.beforeEach((to, from, next) => {
  // 权限判断
  next();
});

export default router;
