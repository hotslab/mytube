<template>
  <div
    :class="[
      'tw-flex tw-flex-col tw-justify-start tw-items-start',
      'tw-w-[80%] tw-h-auto',
      'videoxs:tw-w-[500px] videoxs:tw-h-[381px]',
      'videosm:tw-w-[50%] videosm:tw-h-[305px]',
      'videomd:tw-w-[33%] videomd:tw-h-[267px]',
      'videolg:tw-w-[25%] videolg:tw-h-[72px]',
    ]"
  >
    <img class="tw-rounded-lg tw-h-[67%] tw-w-full" :src="getImageUrl()" />
    <!-- <div
      class="tw-h-[67%] tw-bg-cover tw-bg-center tw-bg-no-repeat"
      :style="`background-image: url(${getImageUrl()});`"
    ></div> -->
    <div
      class="tw-h-[33%] tw-w-full tw-flex tw-justify-start tw-items-start tw-gap-2"
    >
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

const images: Array<string> = ['parallax1.jpg', 'quasar.jpg', 'mountains.jpg'];

function getImageUrl(): string {
  const index = Math.floor(Math.random() * images.length);
  console.log('TEST', index);
  return `/src/assets/videos/${images[index]}`;
}
</script>
