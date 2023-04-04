<!--
 * @Description: 头部
 * @Author: Dong Wei
 * @Date: 2023-03-24 15:46:28
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-04 13:45:15
 * @FilePath: \vue3-playground\src\components\the\TheHeader.vue
-->
<template>
  <div class="flex header">
    <div class="logo pointer" @click="$router.push('/')">vue3-playground</div>
    <el-menu :default-active="menu.activeInd" class="menu" mode="horizontal">
      <template v-for="(item, ind) in menu.data">
        <!-- 一级菜单无子级 -->
        <el-menu-item
          v-if="item.path"
          :key="`menu-${ind + 1}`"
          :index="`${ind + 1}`"
          @click="handleMenuClick(item.path)"
        >
          {{ item.title }}
        </el-menu-item>
        <!-- 有二级菜单 -->
        <el-sub-menu
          v-else-if="item.children && item.children.length"
          :key="`menu-sub-${ind + 1}`"
          :index="`${ind + 1}`"
        >
          <template #title>{{ item.title }}</template>
          <template v-for="(iteml2, indl2) in item.children" :key="`menu-${ind + 1}-${indl2 + 1}`">
            <!-- 没有三级 -->
            <el-menu-item
              v-if="objHasOwn(iteml2, 'path')"
              :index="`${ind + 1}-${indl2 + 1}`"
              @click="handleMenuClick(iteml2.path)"
            >
              {{ iteml2.title }}
            </el-menu-item>
            <!-- 有三级菜单 -->
            <el-sub-menu v-else-if="iteml2.children && iteml2.children.length" :index="`${ind + 1}-${indl2 + 1}`">
              <template #title>{{ iteml2.title }}</template>
              <el-menu-item
                v-for="(iteml3, indl3) in iteml2.children"
                :key="`menu-${ind + 1}-${indl2 + 1}-${indl3 + 1}`"
                :index="`${ind + 1}-${indl2 + 1}-${indl3 + 1}`"
                @click="handleMenuClick(iteml3.path)"
              >
                {{ iteml3.title }}
              </el-menu-item>
            </el-sub-menu>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { menuList } from './config/headerMenu';
import { objHasOwn } from '@/utils';
const menu = ref({
  activeInd: '1',
  data: menuList,
});

const router = useRouter();

const handleMenuClick = (path: string) => {
  if (path) {
    router.push(path);
  } else {
    ElMessage('开发中');
  }
};
</script>
<style scoped>
.header {
  padding: 0 20px;
  height: var(--header-height);
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}

.menu {
  margin-left: 100px;
  flex: 1;
}
</style>
