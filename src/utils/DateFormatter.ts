import { format, isDate, isValid } from 'date-fns'
import { getLocaleConfig } from './LocaleConfig'

export const FORMAT_LOCALE_DATE = 'PP'
export const FORMAT_YEAR = 'yyyy'
export const FORMAT_MONTH_YEAR = 'MMM yyyy'
export const FORMAT_MONTH = 'MMMM'
export const FORMAT_WEEK = 'II'
export const FORMAT_DAY_OF_WEEK = 'EEEEEE'
export const FORMAT_DAY_OF_MONTH = 'dd'

export const formatDate = (date: Date, dateFormat: string, locale: string) => {
  if (isDate(date) && isValid(date)) {
    return format(date, dateFormat, { locale: getLocaleConfig(locale) })
  }

  return date || null
}
