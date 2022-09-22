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
    iso: 'en'
  },
  cn: {
    name: '简体中文',
    iso: 'zh'
  },
  vi: {
    name: 'Tiếng Việt',
    iso: 'vi'
  },
  ja: {
    name: '日本語',
    iso: 'ja'
  },
  ko: {
    name: '한국어',
    iso: 'ko'
  }
}

export function LanguageManager () {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('lan')

  // methods
  const getSystemLocale = (): string => {
    try {
      const foundLang = window
        ? window.navigator.language.substring(0, 2)
        : 'en'
      return availableLocales[foundLang] ? foundLang : 'en'
    } catch (error) {
      return 'en'
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
