<template>
  <q-layout view="lHh Lpr lFf" class="tw-mx-[7px]">
    <q-header class="bg-white text-black tw-pb-[2px]">
      <q-toolbar class="tw-h-[56px]">
        <q-btn
          v-if="!hideLogo"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          style="padding: 8px"
        />
        <img
          v-if="!hideLogo"
          src="~assets/YouTubeLogoVector.svg"
          alt="Youtube Logo"
          class="tw-h-[20px] tw-w-[90px] tw-m-[8px]"
        />
        <q-space />
        <VideoSearch />
        {{ windowWidth }}
        <q-space />
        <UserProfile />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="noOverlay"
      :width="noOverlayWidth"
      v-model="leftDrawerOpen"
      show-if-above
      class="tw-border-red-600 tw-border-[5px]"
    >
      <VideoUrls @click="toggleLeftDrawer" :width="windowWidth" />
    </q-drawer>
    <q-drawer
      v-else
      overlay
      :width="240"
      v-model="leftDrawerOpen"
      show-if-above
      class="tw-border-green-600 tw-border-[5px]"
    >
      <VideoUrls @click="toggleLeftDrawer" :width="windowWidth" />
    </q-drawer>

    <q-page-container class="tw-flex tw-justify-start tw-items-start tw-gap-1">
      <VideoUrls
        v-if="showSideBar"
        hide-header
        hide-detail
        @click="toggleLeftDrawer"
        :width="windowWidth"
      />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import VideoSearch from 'components/VideoSearch.vue';
import VideoUrls from 'components/VideoUrls.vue';
import UserProfile from 'components/UserProfile.vue';
import { watch } from 'vue';

defineOptions({
  name: 'MainLayout',
});

let windowWidth = ref(window.innerWidth);
let noOverlay = ref(false);
let noOverlayWidth = ref(240);
let showSideBar = ref(false);
let hideLogo = ref(false);

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  if (windowWidth.value > 1300) leftDrawerOpen.value = true;
  else {
    if (!noOverlay.value)
      noOverlayWidth.value = leftDrawerOpen.value ? 240 : 64;
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }
}

const onWidthChange = () => (windowWidth.value = window.innerWidth);
onMounted(() => window.addEventListener('resize', onWidthChange));
onUnmounted(() => window.removeEventListener('resize', onWidthChange));

watch(
  () => windowWidth.value,
  (e: number) => {
    console.log(`count is: ${e}`);
    if (windowWidth.value >= 790 && windowWidth.value <= 1300) {
      if (leftDrawerOpen.value) leftDrawerOpen.value = false;
      noOverlay.value = false;
      noOverlayWidth.value = 64;
      showSideBar.value = true;
      hideLogo.value = false;
    } else if (windowWidth.value > 1300) {
      noOverlay.value = true;
      noOverlayWidth.value = 240;
      showSideBar.value = false;
      hideLogo.value = true;
    } else if (windowWidth.value < 790) {
      if (leftDrawerOpen.value) leftDrawerOpen.value = false;
      noOverlay.value = false;
      noOverlayWidth.value = 64;
      showSideBar.value = false;
      hideLogo.value = false;
    }
  }
);
</script>
