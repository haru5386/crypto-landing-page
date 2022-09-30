import { defineNuxtConfig } from 'nuxt'
import ElementPlus from 'unplugin-element-plus/vite'

// types
import { EnvConfig } from './types/interface/env.interface'

// env mode
const mode : any = process.env.MODE ? process.env.MODE : 'dev'
const env = require('./env')

// 環境變數
const runtimeConfig : EnvConfig = {
  // config , 需要用 useRuntimeConfig() 取得 config 值
  // API_SECRET: env[mode].ENV_API,
  // 設定只可在 client side 取得的 key
  public: {
    ENV: env[mode].MODE,
    ENV_API: env[mode].ENV_API
  }
}

export default defineNuxtConfig({
  // config , 需要用 useRuntimeConfig() 取得 config 值
  runtimeConfig,
  // meta
  meta: {
    title: 'Element Plus + Nuxt 3',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ElementPlus + Nuxt3'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // css
  css: ['~/assets/scss/index.scss', '~/assets/font/font.css'],

  // build
  build: {
    transpile: ['element-plus/es']
  },

  typescript: {
    strict: true,
    shim: false,
    typeCheck: true
  },

  vite: {
    plugins: [ElementPlus()]
    // envDir: '~/env' // 指定env文件夹
  },

  // build modules
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt', '@intlify/nuxt3'],

  // auto import components
  components: true,

  // vueuse
  vueuse: {
    ssrHandlers: true
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2
    }
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'jp', 'vi', 'zh', 'ko'],
      sync: true
    }
  }
})
