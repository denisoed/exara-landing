import pkg from './package.json';
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: ['nuxt-auth-utils', '@pinia/nuxt', '@pinia/colada-nuxt', '@nuxt/ui', 'nuxt-swiper'],
  colorMode: {
    preference: 'dark',
  },
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL || '',
    public: {
      version: pkg.version,
    },
  },
});
