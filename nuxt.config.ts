import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  app: {
    head: {
      title: process.env.TITLE_APP || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: process.env.npm_package_description || '',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v2' }],
      bodyAttrs: {
        class: 'min-h-screen w-full bg-white dark:bg-zinc-900',
      },
    },
  },
  // ssr: false, App container is client only -> this set to true allows the body to be before the app, google analytics related purposes
});
