import {
  differenceInCalendarDays,
  format,
  isDate,
  isValid,
  startOfWeek
} from 'date-fns'
import { enUS, nl } from 'date-fns/locale'

export const FORMAT_LOCALE_DATE = 'PP'
export const FORMAT_YEAR = 'yyyy'
export const FORMAT_MONTH_YEAR = 'MMM yyyy'
export const FORMAT_MONTH = 'MMMM'
export const FORMAT_WEEK = 'II'
export const FORMAT_DAY_OF_WEEK = 'EEEEEE'
export const FORMAT_DAY_OF_MONTH = 'dd'

const locales: { [key: string]: Locale } = { en: enUS, nl }

export const getLocaleConfig = (locale: string) => locales[locale]

export const getLocaleDayValues = (locale: string) => {
  const localeConfig = getLocaleConfig(locale)
  const weekStartsOn = localeConfig.options?.weekStartsOn ?? 0

  return Array.from({ length: 7 }).map((_, index) =>
    localeConfig?.localize?.day((index + weekStartsOn) % 7, {
      width: 'short'
    })
  )
}

export const diffStartOfWeek = (date: Date, locale: string) => {
  const localeConfig = getLocaleConfig(locale)
  const weekStartsOn = localeConfig.options?.weekStartsOn ?? 0

  return differenceInCalendarDays(date, startOfWeek(date, { weekStartsOn }))
}

export const formatDate = (date: Date, dateFormat: string, locale: string) => {
  if (isDate(date) && isValid(date)) {
    return format(date, dateFormat, { locale: getLocaleConfig(locale) })
  }

  return date || null
}
