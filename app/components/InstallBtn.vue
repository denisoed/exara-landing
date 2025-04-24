<template>
  <div class="install-btn-container">
    <button class="cta-button" v-bind="$attrs" @click="downloadFile">
      <slot />
    </button>
    <ChromeModal v-model="showModal" />
  </div>
</template>

<script setup>
import { downloadLocalFile } from '~/helpers/downloader';
import { isChrome, isMobile } from '~/helpers/detecters';

const showModal = ref(false);

const downloadFile = () => {
  if (!isChrome() || isMobile()) {
    showModal.value = true;
  } else {
    downloadLocalFile('exara-1.0.0-chrome.zip', 'exara-1.0.0-chrome.zip');
    window.open('https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked', '_blank');
  }
};
</script>
