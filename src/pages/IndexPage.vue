<template>
  <q-page class="row items-center justify-evenly">
    <VideoList />
  </q-page>
</template>

<script setup lang="ts">
import VideoList from 'components/VideoList.vue';

defineOptions({
  name: 'IndexPage',
});
</script>
