import {
  formatDate,
  FORMAT_MONTH,
  FORMAT_YEAR,
  getLocaleDayValues
} from '../utils/DateFormatter'
import NextMonthButton from './controls/NextMonthButton'
import PreviousMonthButton from './controls/PreviousMonthButton'
import { useDatepickerContext } from './DatepickerContext'

interface Props {}

const DatepickerPanel = (props: Props) => {
  const { cursorDate, locale } = useDatepickerContext()

  const localeDayValues = getLocaleDayValues(locale)

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
          <div
            key={index}
            className="px-1 text-xs font-medium text-center text-gray-800"
          >
            {dayOfWeek}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DatepickerPanel
