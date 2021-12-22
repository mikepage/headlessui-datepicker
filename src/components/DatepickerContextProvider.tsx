import { add, startOfMonth, sub } from 'date-fns'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState
} from 'react'

interface DatepickerContextProps {
  cursorDate: Date
  locale: string
  selectedDate: Date
}

interface DatepickerDispatchContextProps {
  setLocale: Dispatch<SetStateAction<string>>
  selectDate: Dispatch<SetStateAction<Date>>
  gotoNextMonth: () => void
  gotoPreviousMonth: () => void
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

  const gotoNextMonth = useCallback(() => {
    setCursorDate(add(cursorDate, { months: 1 }))
  }, [cursorDate])

  const gotoPreviousMonth = useCallback(() => {
    setCursorDate(sub(cursorDate, { months: 1 }))
  }, [cursorDate])

  const selectDate = useCallback((date: Date) => {
    setSelectedDate(date)
  }, [])

  return (
    <DatepickerContext.Provider value={{ cursorDate, locale, selectedDate }}>
      <DatepickerDispatchContext.Provider
        value={{ setLocale, gotoNextMonth, gotoPreviousMonth, selectDate }}
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
