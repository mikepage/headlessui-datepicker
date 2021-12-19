import NextMonthButton from './controls/NextMonthButton'
import PreviousMonthButton from './controls/PreviousMonthButton'

interface Props {}

const DatepickerPanel = (props: Props) => {
  return (
    <div className="w-full h-full p-4 overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-lg font-bold text-gray-600">December</span>
          <span className="ml-1 text-lg font-normal text-gray-400">2021</span>
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
