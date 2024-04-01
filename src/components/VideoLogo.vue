<template>
  <div class="tw-flex tw-justify-start tw-items-center">
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="toggleLeftDrawer"
      class="tw-p-[8px] tw-ml-[10px]"
    />
    <img
      src="~assets/YouTubeLogoVector.svg"
      alt="Youtube Logo"
      class="tw-h-[20px] tw-w-[90px] tw-m-[8px]"
    />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'VideoLogo',
});

const emit = defineEmits(['toggleLeftDrawer']);

function toggleLeftDrawer() {
  emit('toggleLeftDrawer');
}
</script>
