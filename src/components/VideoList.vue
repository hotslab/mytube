<template>
  <div class="tw-flex tw-justify-center tw-items-start tw-gap-5 tw-flex-wrap">
    <VideoCard v-for="(item, index) in data" :key="index" />
  </div>
</template>

<script setup lang="ts">
import VideoCard from 'components/VideoCard.vue';

defineOptions({
  name: 'VideoList',
});

const data = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10];
</script>
