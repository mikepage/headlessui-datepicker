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
  locale: string
  cursorDate: Date
  selectedDate: Date
}

interface DatepickerDispatchContextProps {
  selectDate: Dispatch<SetStateAction<Date>>
  gotoNextMonth: () => void
  gotoPreviousMonth: () => void
}

interface Props {
  children?: React.ReactNode
  locale: string
}

const DatepickerContext = createContext<DatepickerContextProps>(null)

const DatepickerDispatchContext =
  createContext<DatepickerDispatchContextProps>(null)

const DatepickerContextProvider = ({ children, locale }: Props) => {
  const [cursorDate, setCursorDate] = useState<Date>(startOfMonth(new Date()))
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
    <DatepickerContext.Provider value={{ locale, cursorDate, selectedDate }}>
      <DatepickerDispatchContext.Provider
        value={{ gotoNextMonth, gotoPreviousMonth, selectDate }}
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
