<template>
  <div class="tw-flex tw-justify-center tw-items-center">
    <q-btn flat round icon="o_video_call" class="tw-p-2 font-thin" />
    <q-btn flat round icon="o_notifications" class="tw-p-2 font-thin" />
    <div
      class="tw-flex tw-justify-center tw-items-center tw-h-[34px] tw-w-[60px]"
    >
      <button
        class="tw-flex tw-justify-center tw-items-center tw-m-0 tw-rounded-full tw-bg-blue-700 tw-text-white tw-h-[32px] tw-w-[32px] tw-pt-[5px]"
      >
        T
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'UserProfile',
});
</script>
