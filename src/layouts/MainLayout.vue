<template>
  <q-layout view="lHh Lpr lFf" class="tw-mx-[7px]">
    <q-header class="bg-white text-black tw-pb-[2px]">
      <q-toolbar class="tw-h-[56px]">
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
        <!-- <q-space /> -->
        <VideoSearch />
        <q-space />
        <UserProfile />
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="screenWidth"
      v-model="leftDrawerOpen"
      :overlay="overlay"
      show-if-above
      bordered
    >
      <q-list>
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

        <VideoLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container class="tw-flex tw-justify-start tw-items-start tw-gap-0">
      <!-- <q-list :class="pageDrawer">
        <VideoLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list> -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed, reactive, ref } from 'vue';
import VideoLink, { VideoLinkProps } from 'components/VideoLink.vue';
import VideoSearch from 'components/VideoSearch.vue';
import UserProfile from 'components/UserProfile.vue';

defineOptions({
  name: 'MainLayout',
});

const $q = reactive(useQuasar());

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

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const overlay = computed(() => {
  if ($q.screen.width < 790) return true;
  if ($q.screen.width >= 790 && $q.screen.width < 1300) return true;
  return false;
});

const screenWidth = computed(() => {
  if ($q.screen.width < 790) return 240;
  if ($q.screen.width >= 790 && $q.screen.width < 1300) return 64;
  return 240;
});

// const pageDrawer = computed(() => {
//   if ($q.screen.width < 790) return 'tw-hidden';
//   if ($q.screen.width >= 790 && $q.screen.width < 1300)
//     return 'tw-block tw-fixed tw-overflow-x-hidden tw-w-[64px]';
//   return 'tw-block tw-fixed tw-overflow-x-hidden tw-w-[240px]';
// });
</script>
