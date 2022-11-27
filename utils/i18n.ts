// i18n/index.js

import { createI18n } from 'vue-i18n'
import en_US from '../locales/en_US.json'
import zh_CN from '../locales/zh_CN.json'
import vi_VN from '../locales/vi_VN.json'
import ja_JP from '../locales/ja_JP.json'
import ko_KR from '../locales/ko_KR.json'
import el_GR from '../locales/el_GR.json'
const lang: string = process.server ? '' : useCookie('lan').value
export default createI18n({
  locale: lang,
  fallbackLocale: 'en_US',
  messages: { en_US, zh_CN, vi_VN, ja_JP, ko_KR, el_GR },
  sync: true
})
