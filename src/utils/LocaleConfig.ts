import { enUS, nl } from 'date-fns/locale'

interface LocaleConfig {
  [key: string]: Locale
}

const locales: LocaleConfig = { en: enUS, nl }

export const getLocaleConfig: (locale: string) => Locale = (locale) => locales[locale]
