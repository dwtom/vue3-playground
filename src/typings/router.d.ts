/*
 * @Description: vue-router声明
 * @Author: Dong Wei
 * @Date: 2023-04-04 17:11:52
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-04 17:13:50
 * @FilePath: \vue3-playground\src\typings\router.d.ts
 */
import 'vue-router';

declare module 'vue-router' {
  // 扩展meta字段声明
  interface RouteMeta {
    isRouter?: boolean; // 是否是顶部菜单栏中的路由项
    title: string; // 标题 显示在浏览器tab中
  }
}
