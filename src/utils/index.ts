/*
 * @Description: 公共方法
 * @Author: Dong Wei
 * @Date: 2023-04-04 11:11:23
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-04 11:11:24
 * @FilePath: \vue3-playground\src\utils\index.ts
 */
// 判断对象是否有某个属性--简化hasOwnProperty,代替高版本的hasOwn方法
export const objHasOwn = (obj: Object, propertyKey: string) => {
  return Object.prototype.hasOwnProperty.call(obj, propertyKey);
};
