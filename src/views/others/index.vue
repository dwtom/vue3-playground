<!--
 * @Description: "其它"-首页
 * @Author: Dong Wei
 * @Date: 2023-05-06 09:59:56
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-05-06 10:36:20
 * @FilePath: \vue3-playground\src\views\others\index.vue
-->
<template>
  <div class="container">
    <el-card
      v-for="(item, index) in content.data"
      :key="`contentItem-${index}`"
      shadow="hover"
      class="mb-12 mr-12 pointer item"
      @click="router.push(item.router)"
    >
      {{ item.name }}
    </el-card>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const content = reactive({
  data: [
    {
      name: 'grid布局',
      router: '/main/others/grid',
    },
    {
      name: 'Map和Object的区别',
      router: '',
    },
  ],
});
</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  .item {
    min-width: 250px;
  }
}
</style>
