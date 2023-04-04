<!--
 * @Description: 基础layout
 * @Author: Dong Wei
 * @Date: 2023-03-24 15:22:57
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-04 14:15:08
 * @FilePath: \vue3-playground\src\layouts\BasicLayout.vue
-->
<template>
  <div class="base-layout">
    <TheHeader></TheHeader>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.base-layout {
  height: 100vh;
  overflow: hidden;
}

.content {
  height: calc(100% - var(--header-height));
  overflow-y: auto;
}
</style>
