<!--
 * @Description: grid布局
 * @Author: Dong Wei
 * @Date: 2023-05-06 10:36:34
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-05-06 16:43:18
 * @FilePath: \vue3-playground\src\views\others\grid.vue
-->
<template>
  <div class="pd-16">
    <el-page-header :icon="ArrowLeft" content="grid布局" @back="router.go(-1)"></el-page-header>
    <el-link href="https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html" class="mt-12"
      >参考：CSS Grid网格布局教程——阮一峰</el-link
    >
    <h5 class="font-20 mt-16 mb-8">基本概念</h5>
    <div class="box">
      <div v-for="(item, ind) in content1.data" :key="`grid1-${ind}`" class="item flex-center">{{ item }}</div>
    </div>
    <Codemirror v-model="content1.code" v-bind="codeMirrorAttrs" disabled />
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue';
import { Codemirror } from 'vue-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';

interface Item {
  data: number[] | never[];
  code: string;
}

const router = useRouter();

const codeMirrorAttrs = reactive({
  extensions: [oneDark],
});
const content1: Item = reactive({
  data: [],
  code: 'console.log(111)',
});

const setData = () => {
  content1.data = Array.from({ length: 9 }).map((_, ind) => ind + 1);
};

onMounted(() => {
  setData();
});
</script>
<style scoped lang="scss">
.box {
  display: inline-grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(3, 100px);
  // width: fit-content;
  border: 5px solid var(--color-main);
  .item {
    // width: 100px;
    font-size: 26px;
    background-color: pink;
  }
}
</style>
