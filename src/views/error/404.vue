<!--
 * @Description: 404页面
 * @Author: Dong Wei
 * @Date: 2022-07-14 09:18:19
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-04 16:13:00
 * @FilePath: \vue3-playground\src\views\error\404.vue
-->
<template>
  <div class="err-box">
    <img class="err-img" src="@/assets/imgs/common/404.png" alt="" />
    <div class="detail">
      <h2 class="err-title">404</h2>
      <h4 class="err-word">抱歉，您访问的页面不存在🤷‍♂️🤷‍♀️</h4>
      <el-button type="primary" @click="$router.replace('/')">返回首页</el-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
@import './index.scss';
</style>
