<!--
 * @Description: js动画-使用vanilla-tilt.js实现卡片跟随鼠标3d旋转
 * @Author: Dong Wei
 * @Date: 2023-04-10 09:51:11
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-10 14:49:47
 * @FilePath: \vue3-playground\src\views\animate\js\vanillaTilt.vue
-->
<template>
  <ul class="flex margin-18">
    <li
      v-for="(item, ind) in content.data"
      :key="`cont-${ind}`"
      ref="refs"
      class="content-item pointer flex-center"
      :style="item.style"
    >
      <p class="inner-word">描述文本</p>
    </li>
  </ul>
  <p class="commit ml-20">
    说明：<br />
    1. 只有在nextTick中才能获取到ref给VanillaTilt使用 <br />
    2.
    <strong>"transform-style: preserve-3d;"</strong
    >作用的元素不可以同时使用<strong>"overflow:hidden"</strong>,否则内部元素的视差3d效果无法显示
  </p>
</template>

<script setup lang="ts">
import VanillaTilt from 'vanilla-tilt';

const content: any = reactive({
  data: [],
});

const refs = ref([]);

onMounted(() => {
  setContent();
  setAnimation();
});

const setContent = () => {
  content.data = Array.from({ length: 4 }).map((v, ind) => {
    return {
      style: {
        'background-image': `url(https://picsum.photos/150/200?random=${ind + 1})`,
      },
    };
  });
};

const setAnimation = async () => {
  await nextTick();
  VanillaTilt.init(refs.value, {
    perspective: 500,
    glare: true,
  });
};
</script>
<style scoped lang="scss">
.content-item {
  margin-right: 20px;
  width: 150px;
  height: 200px;
  border: 1px solid #000;
  transform-style: preserve-3d;
  // overflow: hidden;
}
.inner-word {
  color: violet;
  font-size: 25px;
  font-weight: bold;
  transform: translateZ(50px);
}
</style>
