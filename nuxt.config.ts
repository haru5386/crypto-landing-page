import { defineNuxtConfig } from 'nuxt'
import ElementPlus from 'unplugin-element-plus/vite'

// types
import type { EnvConfig } from './types/interface/env.interface'

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
    ENV_API: env[mode].ENV_API,
    M_BASE_URL: env[mode].M_BASE_URL,
    BASE_URL: env[mode].BASE_URL,
    DOMAIN_NAME: env[mode].DOMAIN_NAME,
    GTM_CONTAINERID: env[mode].GTM_CONTAINERID,
    GTM_AUTH: env[mode].GTM_AUTH,
    GTM_PREVIEW: env[mode].GTM_PREVIEW,
    GTM_ENABLED: env[mode].GTM_ENABLED,
    GTM_DEBUG: env[mode].GTM_DEBUG

  }
}

export default defineNuxtConfig({
  // config , 需要用 useRuntimeConfig() 取得 config 值
  runtimeConfig,
  // meta
  meta: {
    title: 'ACE Global',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ACE Global'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://ace-global-exchange.oss-me-east-1.aliyuncs.com/upload/20220411093408013.png' }]
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
  plugins: ['@/utils/i18n.ts'],

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
  }
  // localization - i18n config
  // intlify: {
  //   localeDir: 'locales',
  //   vueI18n: {
  //     locale: 'en',
  //     fallbackLocale: 'en',
  //     availableLocales: ['en', 'jp', 'vi', 'zh', 'ko'],
  //     sync: true
  //   }
  // }
})
