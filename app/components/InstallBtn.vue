<template>
  <div class="install-btn-container">
    <button class="cta-button" v-bind="$attrs" @click="downloadFile">
      <slot />
    </button>
    <ChromeModal v-model="showModal" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { downloadLocalFile } from '~/helpers/downloader';
import { isChrome, isMobile } from '~/helpers/detecters';

const router = useRouter();

const showModal = ref(false);

const downloadFile = () => {
  if (!isChrome() || isMobile()) {
    showModal.value = true;
  } else {
    downloadLocalFile('exara-1.0.0-chrome.zip', 'exara-1.0.0-chrome.zip');
    router.push('/installation-guide');
  }
};
</script>
