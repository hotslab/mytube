<template>
  <q-item clickable tag="a" target="_self" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" style="font-weight: 100" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="font-thin">{{ title }}</q-item-label>
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineOptions({
  name: 'VideoLink',
});

export interface VideoLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}

withDefaults(defineProps<VideoLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>
