import { createContext, useContext } from 'react'

interface DatepickerContextProps {
  cursorDate: Date
  locale: string
}

const DatepickerContext = createContext<DatepickerContextProps>({
  cursorDate: new Date(),
  locale: 'en'
})

export const useDatepickerContext = () =>
  useContext<DatepickerContextProps>(DatepickerContext)

export default DatepickerContext
