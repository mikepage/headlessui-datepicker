import { CalendarIcon } from '@heroicons/react/outline'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import DatepickerPanel from './DatepickerPanel'
import DatepickerContextProvider from './DatepickerContextProvider'

interface Props {}

const Datepicker = (props: Props) => {
  return (
    <DatepickerContextProvider>
      <Popover className="relative">
        <input
          type="text"
          className="w-full py-3 pl-4 pr-10 font-medium leading-none text-gray-600 rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
          placeholder="Select date"
        />

        <div className="absolute top-0 right-0 px-3 py-2">
          <Popover.Button>
            <CalendarIcon className="w-6 h-6 text-gray-400" />
          </Popover.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 mt-2 transform -translate-x-1/2 w-72 h-72 left-1/2">
            <DatepickerPanel />
          </Popover.Panel>
        </Transition>
      </Popover>
    </DatepickerContextProvider>
  )
}

export default Datepicker
