<template>
  <router-view />
</template>

<script setup lang="ts">
import { useScreenSize } from 'stores/screen-size';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';
defineOptions({
  name: 'App',
});

const store = useScreenSize();
const { setScreenWidth } = store;

const onWidthChange = () => setScreenWidth(window.innerWidth);
onMounted(() => window.addEventListener('resize', onWidthChange));
onUnmounted(() => window.removeEventListener('resize', onWidthChange));
</script>
