import { useI18n } from 'vue-i18n'
import { getAsyncBaseDataApi } from '../api/base'
// 語系 interface
export interface ILocales {
  // 瀏覽器預設key
  [key: string]: {
    name: string; // 專案顯示文字
    iso: string; // 專案用 iso
  };
}

// export const availableLocales: ILocales = {
//   en: {
//     name: 'English',
//     iso: 'en_US'
//   },
//   'zh-CN': {
//     name: '简体中文',
//     iso: 'zh_CN'
//   },
//   'zh-TW': {
//     name: '繁體中文',
//     iso: 'el_GR'
//   },
//   vi: {
//     name: 'Tiếng Việt',
//     iso: 'vi_VN'
//   },
//   ja: {
//     name: '日本語',
//     iso: 'ja_JP'
//   },
//   ko: {
//     name: '한국어',
//     iso: 'ko_KR'
//   }
// }

export async function getAvailableLocales () {
  // 獲取後台語言
  const availableLocales: ILocales = {}
  const data = await getAsyncBaseDataApi()
  const localeLanList = data.data.value?.data.lan.lanList
    ? data.data.value?.data.lan.lanList
    : [{ name: 'English', id: 'en_US' }]

  localeLanList.forEach((lan: any) => {
    let lanKey = ''
    switch (lan.id) {
      case 'el_GR':
        lanKey = 'el_GR'
        break
      case 'zh_CN':
        lanKey = 'zh_CN'
        break
      case 'en_US':
        lanKey = 'en'
        break
      case 'ja_JP':
        lanKey = 'ja'
        break
      case 'ko_KR':
        lanKey = 'ko'
        break
      case 'vi_VN':
        lanKey = 'vi'
        break
    }

    availableLocales[lanKey] = { name: lan.name, iso: lan.id }
  })
  return availableLocales
}

export function LanguageManager () {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('lan')

  // methods 不從 server 判斷瀏覽器語言，改從router判斷
  // const getSystemLocale = (): string => {
  //   try {
  //     let foundLang = window ? window.navigator.language.substring(0, 2) : 'en'
  //     if (foundLang === 'zh') {
  //       foundLang = window.navigator.language.substring(0, 5)
  //       console.log('foundLang', foundLang)
  //     }
  //     return availableLocales[foundLang]
  //       ? availableLocales[foundLang].iso
  //       : 'en_US'
  //   } catch (error) {
  //     return 'en_US'
  //   }
  // }
  const getUserLocale = (): string => localeUserSetting.value || ''

  // state
  const localeSetting = useState<any>('locale.setting', () => getUserLocale())

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  // init locale
  const init = async () => {
    localeSetting.value = await getUserLocale()
  }
  locale.value = localeSetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    init
  }
}
