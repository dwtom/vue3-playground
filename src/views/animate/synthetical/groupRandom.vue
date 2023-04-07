<!--
 * @Description: 综合动画-一组元素随机变化位置
 * @Author: Dong Wei
 * @Date: 2023-04-06 09:59:11
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-04-07 16:39:01
 * @FilePath: \vue3-playground\src\views\animate\synthetical\groupRandom.vue
-->
<template>
  <div class="group-box">
    <TransitionGroup name="list">
      <template v-for="item in content.data" :key="item.title">
        <div class="content-item">
          <img :src="item.imgUrl" alt="" class="con-img" />
        </div>
      </template>
    </TransitionGroup>
  </div>
  <p class="commit ml-20">
    说明：vue3对template标签使用v-for时，key需要放在自身而不是子元素上，并且该例情况下不可以使用index，否则动画无法生效
  </p>
</template>

<script setup lang="ts">
import { shuffle } from 'lodash-es';
const content: any = reactive({
  data: [],
});

const showContent = ref(false);

// 定时器
const timer = ref();

onMounted(() => {
  setContent();
  doShuffle();
});

onBeforeUnmount(() => {
  clearInterval(timer.value);
});

const setContent = () => {
  content.data = Array.from({ length: 9 }).map((_, ind) => {
    return {
      title: `con-${ind}`,
      imgUrl: `https://picsum.photos/200/100?random=${ind + 1}`,
    };
  });
  setTimeout(() => {
    showContent.value = true;
  }, 300);
};

// 内容随机变化
const doShuffle = () => {
  timer.value && clearInterval(timer.value);
  timer.value = setInterval(() => {
    content.data = shuffle(content.data);
  }, 3000);
};
</script>
<style scoped lang="scss">
.group-box {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 770px;
}
.content-item {
  margin-right: 30px;
  margin-bottom: 30px;
  width: 200px;
  height: 100px;
  border: 1px solid #000;
  overflow: hidden;
  transition: all 1s;
  .con-img {
    width: 100%;
    height: 100%;
  }
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
