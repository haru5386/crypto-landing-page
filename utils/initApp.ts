import { LanguageManager } from './lang'

export function InitApp () {
  const language = LanguageManager()

  return {
    language
  }
}
