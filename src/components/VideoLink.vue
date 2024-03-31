<template>
  <q-item clickable tag="a" target="_self" :href="props.link">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" style="font-weight: 100" />
    </q-item-section>

    <q-item-section v-if="!hideDetail">
      <q-item-label class="font-thin">{{ props.title }}</q-item-label>
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
// import { computed } from 'vue';

defineOptions({
  name: 'VideoLink',
});
export interface VideoLinkProps {
  title?: string;
  caption?: string;
  link?: string;
  icon?: string;
}
const props = defineProps({
  title: { type: String, default: '' },
  caption: { type: String, default: '' },
  link: { type: String, default: '#' },
  icon: { type: String, default: '' },
  width: { type: Number, required: false },
  hideDetail: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// const showDetail = computed(() => {
//   if (props.width && props.width >= 790 && props.width < 1300) return false;
//   return true;
// });
</script>
