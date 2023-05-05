<!--
 * @Description: 视差滚动
 * @Author: Dong Wei
 * @Date: 2023-04-04 11:01:14
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-05-05 13:38:44
 * @FilePath: \vue3-playground\src\views\animate\css\parallaxScrolling.vue
 * reference: https://www.cnblogs.com/coco1s/p/9453938.html
-->
<template>
  <section v-for="(item, index) in content.list" :key="`section-${index}`" class="pd-20" v-bind="item.htmlAttrs">
    {{ item.content }}
  </section>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue';

interface ContentItem {
  content: string;
  htmlAttrs: {
    style: StyleValue | undefined;
    class: string[] | string;
  };
}

// let contentList: Ref<ContentItem[]> = ref([]);
const content: { list: ContentItem[] } = reactive({
  list: [],
});

onMounted(() => {
  setContent();
});

const setContent = () => {
  content.list = Array.from({ length: 8 }).map((v, ind) => {
    const realInd = ind + 1;
    const isImg = realInd % 2 === 0 || realInd > 5;
    const content = realInd > 1 ? `content${realInd}` : '滚动视差由background-attachment: fixed实现';
    return {
      content,
      htmlAttrs: {
        style: isImg ? { 'background-image': `url(https://picsum.photos/1200/600?random=${realInd})` } : {},
        class: isImg ? ['bg-img', `img-${realInd}`] : 'content',
      },
    };
  });
};
</script>
<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - var(--header-height));
  color: #fff;
  font-size: 100px;
}
.bg-img {
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.content {
  background-color: #ccc;
}
</style>
