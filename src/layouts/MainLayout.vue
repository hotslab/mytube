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
        <q-space />
        <VideoSearch />
        <q-space />
        <UserProfile />
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="240"
      class=""
      v-model="leftDrawerOpen"
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

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import VideoSearch from 'components/VideoSearch.vue';
import UserProfile from 'components/UserProfile.vue';

defineOptions({
  name: 'MainLayout',
});

const linksList: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
