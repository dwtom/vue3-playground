<!--
 * @Description: 无权限页面
 * @Author: Dong Wei
 * @Date: 2022-07-14 09:01:24
 * @LastEditors: Dong Wei
 * @LastEditTime: 2022-07-15 15:43:00
 * @FilePath: \vue-template-element\src\views\error\403.vue
-->
<template>
  <div class="err-box">
    <img class="err-img" src="@/assets/imgs/common/403.png" alt="" />
    <div class="detail">
      <h2 class="err-title">403</h2>
      <h4 class="err-word">抱歉，您无权访问该页面🙅‍♂️🙅‍♀️</h4>
      <el-button type="primary" @click="$router.replace('/')">返回首页</el-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
@import './index.scss';
</style>
