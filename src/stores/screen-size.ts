import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useScreenSize = defineStore('screenSize', () => {
  const width = ref(0);
  const screenWidth = computed(() => width.value);
  function setScreenWidth(value: number) {
    width.value = value;
  }
  return { width, screenWidth, setScreenWidth };
});
