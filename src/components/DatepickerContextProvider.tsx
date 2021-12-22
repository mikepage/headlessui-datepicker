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
  selectedDate: Date
}

interface DatepickerDispatchContextProps {
  setCursorDate: Dispatch<SetStateAction<Date>>
  setLocale: Dispatch<SetStateAction<string>>
  setSelectedDate: Dispatch<SetStateAction<Date>>
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
  const [locale, setLocale] = useState<string>('nl')
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <DatepickerContext.Provider value={{ cursorDate, locale, selectedDate }}>
      <DatepickerDispatchContext.Provider
        value={{ setCursorDate, setLocale, setSelectedDate }}
      >
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
