<!--
 * @Description: 头部
 * @Author: Dong Wei
 * @Date: 2023-03-24 15:46:28
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-04 17:20:32
 * @FilePath: \vue3-playground\src\components\the\TheHeader.vue
-->
<template>
  <div class="flex header">
    <div class="logo pointer" @click="$router.push('/')">vue3-playground</div>
    <el-menu :default-active="menu.activeInd" class="menu" mode="horizontal">
      <template v-for="(item, ind) in menu.data">
        <!-- 一级菜单无子级 -->
        <el-menu-item
          v-if="item.meta.isRouter"
          :key="`menu-${ind + 1}`"
          :index="item.name"
          @click="handleMenuClick(item.name)"
        >
          {{ item.meta?.title ?? '' }}
        </el-menu-item>
        <!-- 有二级菜单 -->
        <el-sub-menu v-else :key="`menu-sub-${ind + 1}`" :index="item.name">
          <template #title>{{ item.meta?.title ?? '' }}</template>
          <template v-for="(iteml2, indl2) in item.children" :key="`menu-${ind + 1}-${indl2 + 1}`">
            <!-- 没有三级 -->
            <el-menu-item v-if="iteml2.meta.isRouter" :index="iteml2.name" @click="handleMenuClick(iteml2.name)">
              {{ iteml2.meta?.title ?? '' }}
            </el-menu-item>
            <!-- 有三级菜单 -->
            <el-sub-menu v-else :index="iteml2.name">
              <template #title>{{ iteml2.meta?.title ?? '' }}</template>
              <el-menu-item
                v-for="(iteml3, indl3) in iteml2.children"
                :key="`menu-${ind + 1}-${indl2 + 1}-${indl3 + 1}`"
                :index="iteml3.name"
                @click="handleMenuClick(iteml3.name)"
              >
                {{ iteml3.meta?.title ?? '' }}
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

interface Menu {
  activeInd: string | undefined; // 当前高亮的项
  data: any[];
}

const menu: Menu = reactive({
  activeInd: 'home',
  data: [],
});

const router = useRouter();
const route = useRoute();

onMounted(() => {
  setMenu();
  setMenuDefaultActive();
});

const setMenu = () => {
  menu.data = router.options.routes.find(v => v.name === 'mainPage')?.children ?? [];
};

// 根据路由name匹配菜单高亮项
const setMenuDefaultActive = () => {
  menu.activeInd = route.name as string;
};

// 监听菜单点击
const handleMenuClick = (routerName: string) => {
  if (routerName) {
    router.push({ name: routerName });
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
