import { Popover } from '@headlessui/react'
import { CalendarIcon } from '@heroicons/react/outline'
import { formatDate, FORMAT_LOCALE_DATE } from '../utils/DateFormatter'
import { useDatepickerContext } from './DatepickerContextProvider'

interface Props {}

const DatepickerInput = (props: Props) => {
  const { locale, selectedDate } = useDatepickerContext()
  const displayValue =
    formatDate(selectedDate, FORMAT_LOCALE_DATE, locale) ?? ''

  return (
    <Popover.Button as={'div'}>
      <input
        readOnly={true}
        value={displayValue}
        type="text"
        className="w-full py-3 pl-4 pr-10 font-medium leading-none text-gray-600 rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
        placeholder="Select date"
      />
      <div className="absolute top-0 right-0 px-3 py-2">
        <CalendarIcon className="w-6 h-6 text-gray-400" />
      </div>
    </Popover.Button>
  )
}

export default DatepickerInput
