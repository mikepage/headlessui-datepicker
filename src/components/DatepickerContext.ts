import { Locale } from 'date-fns'
import { createContext, useContext } from 'react'

interface DatepickerContextProps {
  cursorDate: Date
  locale: string
  localeConfig?: Locale
  localeValues?: any
}

const DatepickerContext = createContext<DatepickerContextProps>({
  cursorDate: new Date(),
  locale: 'en'
})

export const useDatepickerContext = () => useContext<DatepickerContextProps>(DatepickerContext)

export default DatepickerContext
