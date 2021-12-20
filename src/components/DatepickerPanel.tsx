import { formatDate, FORMAT_MONTH, FORMAT_YEAR } from '../utils/DateFormatter'
import NextMonthButton from './controls/NextMonthButton'
import PreviousMonthButton from './controls/PreviousMonthButton'
import { useDatepickerContext } from './DatepickerContext'

interface Props {}

const DatepickerPanel = (props: Props) => {
  const { cursorDate, locale } = useDatepickerContext()

  return (
    <div className="w-full h-full p-4 overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-lg font-bold text-gray-600">{formatDate(cursorDate, FORMAT_MONTH, locale)}</span>
          <span className="ml-1 text-lg font-normal text-gray-400">{formatDate(cursorDate, FORMAT_YEAR, locale)}</span>
        </div>
        <div>
          <PreviousMonthButton />
          <NextMonthButton />
        </div>
      </div>
    </div>
  )
}

export default DatepickerPanel
