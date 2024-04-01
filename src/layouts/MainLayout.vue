<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black tw-pb-[2px]">
      <q-toolbar class="tw-h-[56px]">
        <VideoLogo v-if="!hideLogo" @toggle-left-drawer="toggleLeftDrawer" />
        <q-space />
        <VideoSearch class="tw-w-[60%]" />
        <q-space />
        <UserProfile />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="noOverlay"
      :width="noOverlayWidth"
      v-model="leftDrawerOpen"
      show-if-above
      class="tw-border-red-600 tw-border-r-[5px]"
    >
      <VideoUrls @click="toggleLeftDrawer" :width="screenWidth" />
    </q-drawer>
    <q-drawer
      v-else
      overlay
      :width="240"
      v-model="leftDrawerOpen"
      show-if-above
      class="tw-border-green-600 tw-border-r-[5px]"
    >
      <VideoUrls @click="toggleLeftDrawer" :width="screenWidth" />
    </q-drawer>
    <q-page-container class="tw-flex tw-justify-start tw-items-start tw-gap-1">
      <VideoUrls
        v-if="showSideBar"
        hide-header
        hide-detail
        @click="toggleLeftDrawer"
        :width="screenWidth"
      />
      <router-view />
    </q-page-container>
    <q-footer class="tw-h-[50px] tw-p-[10px] tw-text-center"
      ><span>{{ testValue }}</span></q-footer
    >
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VideoSearch from 'components/VideoSearch.vue';
import VideoUrls from 'components/VideoUrls.vue';
import UserProfile from 'components/UserProfile.vue';
import VideoLogo from 'components/VideoLogo.vue';
import { watch } from 'vue';
import { useScreenSize } from 'stores/screen-size';
import { storeToRefs } from 'pinia';

defineOptions({
  name: 'MainLayout',
});

const store = useScreenSize();
const { screenWidth } = storeToRefs(store);
let noOverlay = ref(false);
let noOverlayWidth = ref(240);
let showSideBar = ref(false);
let hideLogo = ref(false);
let testValue = ref('No recording yet');

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
  if (screenWidth.value > 1300) {
    noOverlay.value = true;
    showSideBar.value = leftDrawerOpen.value ? false : true;
    hideLogo.value = leftDrawerOpen.value ? true : false;
  } else {
    if (!noOverlay.value)
      noOverlayWidth.value = leftDrawerOpen.value ? 240 : 64;
  }
}

watch(
  () => screenWidth.value,
  (e: number) => {
    console.log(`count is: ${e}`);
    if (screenWidth.value >= 790 && screenWidth.value <= 1300) {
      noOverlay.value = false;
      noOverlayWidth.value = 64;
      showSideBar.value = true;
      hideLogo.value = false;
      if (leftDrawerOpen.value) leftDrawerOpen.value = false;
    } else if (screenWidth.value > 1300) {
      noOverlay.value = true;
      noOverlayWidth.value = 240;
      if (leftDrawerOpen.value) {
        showSideBar.value = false;
        hideLogo.value = true;
      } else {
        showSideBar.value = true;
        hideLogo.value = false;
      }
    } else if (screenWidth.value < 790) {
      noOverlay.value = false;
      noOverlayWidth.value = 64;
      showSideBar.value = false;
      hideLogo.value = false;
      if (leftDrawerOpen.value) leftDrawerOpen.value = false;
    }
    testValue.value = JSON.stringify({
      leftDrawerOpen: leftDrawerOpen.value,
      noOverlay: noOverlay.value,
      noOverlayWidth: noOverlayWidth.value,
      showSideBar: showSideBar.value,
      hideLogo: hideLogo.value,
      screenWidth: screenWidth.value,
    });
  }
);
</script>
