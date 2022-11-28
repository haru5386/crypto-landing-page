import { useI18n } from 'vue-i18n'

export interface ILocales {
  [key: string]: {
    name: string
    iso: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en_US'
  },
  'zh-CN': {
    name: '简体中文',
    iso: 'zh_CN'
  },
  'zh-TW': {
    name: '繁體中文',
    iso: 'el_GR'
  },
  vi: {
    name: 'Tiếng Việt',
    iso: 'vi_VN'
  },
  ja: {
    name: '日本語',
    iso: 'ja_JP'
  },
  ko: {
    name: '한국어',
    iso: 'ko_KR'
  }
}

export function LanguageManager () {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('lan')

  // methods
  const getSystemLocale = (): string => {
    try {
      let foundLang = window
        ? window.navigator.language.substring(0, 2)
        : 'en'
      if (foundLang === 'zh') {
        foundLang = window.navigator.language.substring(0, 5)
      }
      return availableLocales[foundLang] ? availableLocales[foundLang].iso : 'en_US'
    } catch (error) {
      return 'en_US'
    }
  }
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  // state
  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale()
  )

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  // init locale
  const init = () => {
    localeSetting.value = getUserLocale()
  }
  locale.value = localeSetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    init
  }
}
