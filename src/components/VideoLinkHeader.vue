<template>
  <q-item-label header class="tw-px-3 tw-py-2">
    <div class="tw-flex tw-justify-start tw-items-center">
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
        style="padding: 8px"
      />
      <img
        src="~assets/YouTubeLogoVector.svg"
        alt="Youtube Logo"
        class="tw-h-[20px] tw-w-[90px] tw-m-[8px]"
      />
    </div>
  </q-item-label>
</template>
<script setup lang="ts">
defineOptions({
  name: 'VideoLinkHeader',
});

const emit = defineEmits(['toggleLeftDrawer']);

function toggleLeftDrawer() {
  emit('toggleLeftDrawer');
}
</script>
