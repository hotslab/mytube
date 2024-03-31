<template>
  <div
    class="tw-full tw-flex tw-justify-end tw-items-center tw-pl-[100px] tw-pr-0 tw-py-0 tw-m-0 tw-gap-4"
  >
    <div
      class="tw-w-full tw-flex tw-justify-center tw-border tw-border-gray-300 tw-items-center tw-rounded-2xl tw-gap-0 tw-p-0"
    >
      <div class="tw-m-0 tw-w-full tw-flex tw-justify-center tw-items-center">
        <q-icon
          v-if="showSearch"
          name="search"
          size="24px"
          class="tw-p-2 tw-text-gray-500"
        />
        <input
          @focus="showSearch = true"
          @blur="showSearch = false"
          type="text"
          v-model="search"
          placeholder="Search"
          :class="`tw-m-0 w-full tw-block ${
            showSearch ? 'tw-px-1' : 'tw-px-4'
          } tw-text-[16px] tw-outline-none tw-w-full tw-text-gray-600`"
        />
      </div>
      <div
        class="tw-m-0 tw-text-center tw-w-[70px] hover:tw-bg-gray-200 tw-border-l-2 tw-border-gray-300"
      >
        <q-icon
          name="search"
          size="24px"
          class="tw-p-2 tw-m-0 tw-text-gray-500"
        />
      </div>
    </div>
    <q-btn
      flat
      round
      icon="mic"
      class="tw-m-0 tw-border-gray-500 tw-border-l-2"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ name: 'VideoSearch' });
const search = defineModel('search', { type: String, default: '' });
let showSearch = ref(false);
</script>
