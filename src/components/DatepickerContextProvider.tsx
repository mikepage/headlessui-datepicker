import { startOfMonth } from 'date-fns'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'

interface DatepickerContextProps {
  cursorDate: Date
  locale: string
}

interface DatepickerDispatchContextProps {
  setCursorDate: Dispatch<SetStateAction<Date>>
  setLocale: Dispatch<SetStateAction<string>>
}

interface DatepickerContextProviderProps {
  children?: React.ReactNode
}

const DatepickerContext = createContext<DatepickerContextProps>(null)

const DatepickerDispatchContext =
  createContext<DatepickerDispatchContextProps>(null)

const DatepickerContextProvider = ({
  children
}: DatepickerContextProviderProps) => {
  const [cursorDate, setCursorDate] = useState<Date>(startOfMonth(new Date()))
  const [locale, setLocale] = useState<string>('en')

  return (
    <DatepickerContext.Provider value={{ cursorDate, locale }}>
      <DatepickerDispatchContext.Provider value={{ setCursorDate, setLocale }}>
        {children}
      </DatepickerDispatchContext.Provider>
    </DatepickerContext.Provider>
  )
}

export const useDatepickerContext = () =>
  useContext<DatepickerContextProps>(DatepickerContext)

export const useDatepickerDispatchContext = () =>
  useContext<DatepickerDispatchContextProps>(DatepickerDispatchContext)

export default DatepickerContextProvider
