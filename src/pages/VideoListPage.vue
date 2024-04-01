<template>
  <q-page
    style="min-height: 100%"
    class="tw-flex tw-justify-center tw-items-start tw-gap-3 tw-flex-wrap"
  >
    <!-- <q-page
    style="min-height: 100%"
    :class="[
      'tw-w-full tw-grid tw-mx-auto',
      'tw-grid-rows-12 tw-row-auto',
      // 'tw-grid-cols-1 tw-col-auto tw-gap-10',
      'videoxs:tw-grid-cols-1 tw-gap-15',
      'videosm:tw-grid-cols-2 tw-gap-20',
      'videomd:tw-grid-cols-3 tw-gap-10',
      'videolg:tw-grid-cols-4 tw-gap-10',
    ]"
  > -->
    <VideoCard v-for="(item, index) in data" :key="index" />
  </q-page>
</template>

<script setup lang="ts">
import VideoCard from 'components/VideoCard.vue';

defineOptions({
  name: 'VideoListPage',
});

const data = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20];
</script>
