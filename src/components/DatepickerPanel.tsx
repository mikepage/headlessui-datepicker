import classNames from 'classnames'
import { eachDayOfInterval, format, isEqual, lastDayOfMonth } from 'date-fns'
import {
  diffStartOfWeek,
  formatDate,
  FORMAT_DAY_OF_MONTH,
  FORMAT_MONTH,
  FORMAT_YEAR,
  getLocaleDayValues
} from '../utils/DateFormatter'
import NextMonthButton from './controls/NextMonthButton'
import PreviousMonthButton from './controls/PreviousMonthButton'
import {
  useDatepickerContext,
  useDatepickerDispatchContext
} from './DatepickerContextProvider'

interface Props {}

const DatepickerPanel = (props: Props) => {
  const { cursorDate, locale, selectedDate } = useDatepickerContext()
  const { setSelectedDate } = useDatepickerDispatchContext()

  const localeDayValues = getLocaleDayValues(locale)
  const monthDates = eachDayOfInterval({
    start: cursorDate,
    end: lastDayOfMonth(cursorDate)
  })
  const monthDatesBlank = Array.from({
    length: diffStartOfWeek(cursorDate, locale)
  })

  return (
    <div className="w-full h-full p-4 overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-lg font-bold text-gray-600">
            {formatDate(cursorDate, FORMAT_MONTH, locale)}
          </span>
          <span className="ml-1 text-lg font-normal text-gray-400">
            {formatDate(cursorDate, FORMAT_YEAR, locale)}
          </span>
        </div>
        <div>
          <PreviousMonthButton />
          <NextMonthButton />
        </div>
      </div>

      <div className="grid grid-cols-7 mb-3 -mx-1">
        {localeDayValues.map((dayOfWeek: string, index) => (
          <div key={index} className="px-1">
            <div className="text-xs font-medium text-center text-gray-800">
              {dayOfWeek}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 mb-3 -mx-1 gap-y-2">
        {monthDatesBlank.map((_, index) => (
          <div key={index} className="px-1"></div>
        ))}

        {monthDates.map((date: Date, index) => {
          const isDateSelected = isEqual(date, selectedDate)

          return (
            <div key={index} className="px-1">
              <div
                onClick={() => setSelectedDate(date)}
                className={classNames(
                  'text-sm leading-loose text-center  transition duration-100 ease-in-out rounded-full cursor-pointer',
                  {
                    'bg-emerald-600 text-white': isDateSelected,
                    'text-gray-600 hover:bg-emerald-100': !isDateSelected
                  }
                )}
              >
                {format(date, FORMAT_DAY_OF_MONTH)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DatepickerPanel
