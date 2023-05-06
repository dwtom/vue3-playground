<!--
 * @Description: js动画-使用vanilla-tilt.js实现卡片跟随鼠标3d旋转
 * @Author: Dong Wei
 * @Date: 2023-04-10 09:51:11
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-05-06 10:14:07
 * @FilePath: \vue3-playground\src\views\animate\js\vanillaTilt.vue
-->
<template>
  <h5 class="mt-12 ml-18 font-18">跟随鼠标3d悬停</h5>
  <ul class="img-container flex margin-18">
    <li v-for="(item, ind) in content.data" :key="`cont-${ind}`" ref="refs" class="content-item pointer flex-center">
      <img :src="item.imgSrc" alt="" class="content-item-img" />
      <p class="inner-word">描述文本</p>
    </li>
  </ul>
  <h5 class="mt-12 ml-18 font-18">模糊效果突出重点</h5>
  <ul class="img-container flex margin-18">
    <li v-for="(item, ind) in content.data" :key="`cont-${ind}`" class="content-item-filter pointer flex-center">
      <img :src="item.imgSrc" alt="" class="content-item-img" />
      <p class="inner-word">描述文本</p>
    </li>
  </ul>
  <div class="commit ml-20">
    说明：<br />
    1. 只有在nextTick中才能获取到ref给VanillaTilt使用 <br />
    2.
    <strong>"transform-style: preserve-3d;"</strong
    >作用的元素不可以同时使用<strong>"overflow:hidden"</strong>,否则内部元素的视差3d效果无法显示
  </div>
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
      imgSrc: `https://picsum.photos/150/200?random=${ind + 1}`,
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
.img-container {
  width: fit-content;
  &:hover {
    .content-item-filter:not(:hover) .content-item-img {
      filter: blur(5px) opacity(0.8) brightness(0.8);
    }
    .content-item:not(:hover) .content-item-img {
      filter: blur(5px) opacity(0.8) brightness(0.8);
    }
  }
}

.content-item {
  margin-right: 20px;
  position: relative;
  width: 150px;
  height: 200px;
  transform-style: preserve-3d;
  // overflow: hidden;
}
.content-item-filter {
  margin-right: 20px;
  position: relative;
  width: 150px;
  height: 200px;

  &:hover {
    .content-item-img {
      filter: saturate(1.2);
      transform: scale(1.05);
    }
  }
}
.content-item-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  filter: blur(0px) opacity(1);
  transition: filter 200ms linear, transform 200ms linear;
}
.inner-word {
  color: violet;
  font-size: 25px;
  font-weight: bold;
  transform: translateZ(50px);
}
</style>
