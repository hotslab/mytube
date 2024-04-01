<template>
  <q-list>
    <q-item-label v-if="!hideHeader" header class="tw-px-3 tw-py-2 tw-h-[56px]">
      <VideoLogo @toggle-left-drawer="toggleLeftDrawer" />
    </q-item-label>
    <VideoLink
      v-for="(link, index) in linksList"
      :key="index"
      :title="link.title"
      :caption="link.caption"
      :link="link.link"
      :icon="link.icon"
      :width="props.width"
      :hide-detail="props.hideDetail"
    />
  </q-list>
</template>

<script setup lang="ts">
import VideoLink, { VideoLinkProps } from './VideoLink.vue';
import VideoLogo from './VideoLogo.vue';

defineOptions({
  name: 'VideoUrls',
});
const props = defineProps({
  width: { type: Number, required: true },
  hideHeader: {
    type: Boolean,
    required: false,
    default: false,
  },
  hideDetail: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(['toggleLeftDrawer']);

function toggleLeftDrawer() {
  emit('toggleLeftDrawer');
}

const linksList: VideoLinkProps[] = [
  {
    title: 'Home',
    caption: 'quasar.dev',
    icon: 'o_home',
    link: '#',
  },
  {
    title: 'Shorts',
    caption: 'github.com/quasarframework',
    icon: 'o_music_video',
    link: '#',
  },
  {
    title: 'Subscriptions',
    caption: 'chat.quasar.dev',
    icon: 'o_video_library',
    link: '#',
  },
  {
    title: 'History',
    caption: '@quasarframework',
    icon: 'o_history',
    link: '#',
  },
  {
    title: 'Watch Later',
    caption: 'forum.quasar.dev',
    icon: 'o_schedule',
    link: '#',
  },
];
</script>
