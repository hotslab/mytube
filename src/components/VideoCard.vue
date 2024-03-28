<template>
  <q-card
    class="my-card tw-w-full tw-h-full sm:tw-w-[200px] sm:tw-h-[200px] md:tw-w-[300px] md:tw-h-[300px]"
  >
    <img src="https://cdn.quasar.dev/img/mountains.jpg" />

    <q-card-section>
      <div class="text-h6">Our Changing Planet</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ lorem }}
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
defineOptions({
  name: 'VideoCard',
});
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
</script>
