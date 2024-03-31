<template>
  <div
    class="tw-flex tw-flex-col tw-justify-start tw-items-start tw-w-[80%] videoxs:tw-mx-[10px] videoxs:tw-w-[500px] tw-h-full videosm:tw-w-[315px] videosm:tw-h-[180px]"
  >
    <img
      class="tw-rounded-lg tw-w-[500px] tw-h-[280px]"
      src="https://cdn.quasar.dev/img/mountains.jpg"
    />
    <div class="tw-h-[33%] tw-flex tw-justify-start tw-items-start tw-gap-2">
      <img src="~assets/avatar-female.svg" class="tw-h-[36px] tw-w-[36px]" />
      <div>
        <h1 class="text-h6 tw-pb-[1px]">Our Changing Planet</h1>

        <div
          class="tw-flex tw-flex-col tw-justify-center tw-items-start tw-font-semibold tw-text-gray-400"
        >
          <span>Channel Name</span>
          <span>1.2k views . 10 hours ago</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'VideoCard',
});
</script>
