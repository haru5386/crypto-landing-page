import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
import localeData from 'dayjs/plugin/localeData.js'
import weekOfYear from 'dayjs/plugin/weekOfYear.js'
import weekYear from 'dayjs/plugin/weekYear.js'
import dayOfYear from 'dayjs/plugin/dayOfYear.js'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js'
import 'dayjs/locale/zh-tw'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import 'dayjs/locale/vi'
import 'dayjs/locale/ja'
import 'dayjs/locale/ko'

export default defineNuxtPlugin((nuxtApp) => {
  dayjs.extend(relativeTime)
  dayjs.extend(advancedFormat)
  dayjs.extend(customParseFormat)
  dayjs.extend(localeData)
  dayjs.extend(weekOfYear)
  dayjs.extend(weekYear)
  dayjs.extend(dayOfYear)
  dayjs.extend(isSameOrAfter)
  dayjs.extend(isSameOrBefore)
  nuxtApp.provide('dayjs', dayjs)
})
