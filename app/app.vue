<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', href: '/logo.png' },
    { rel: 'apple-touch-icon', href: '/logo.png' },
    { rel: 'msapplication-TileImage', href: '/logo.png' },
  ],
});

useSeoMeta({
  title: 'Exara',
  description: 'A minimalistic habit tracker application to track and manage your daily habits with ease',
  ogTitle: 'Exara',
  ogDescription: 'A minimalistic habit tracker application to track and manage your daily habits with ease',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  twitterCard: 'summary_large_image',
  ogType: 'website',
  ogUrl: 'https://exara.pro',
  ogSiteName: 'Exara',
  twitterCreator: '@ZHatlen',
  twitterSite: '@ZHatlen',
  robots: 'index, follow',
  keywords: 'habit, tracker, daily, habits, management, tool, minimalistic',
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import '@/assets/styles.css';
</style>