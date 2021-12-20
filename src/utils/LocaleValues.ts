import { en } from '../locale/en'
import { nl } from '../locale/nl'

interface LocaleValues {
  [key: string]: any
}

const locales: LocaleValues = {
  en: en,
  nl: nl
}

export const getLocaleValues = (locale: string) => locales[locale]
