import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import DatepickerPanel from './DatepickerPanel'
import DatepickerContextProvider from './DatepickerContextProvider'
import DatepickerInput from './DatepickerInput'

interface Props {}

const Datepicker = (props: Props) => {
  return (
    <DatepickerContextProvider>
      <Popover className="relative">
        <DatepickerInput />

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 mt-2 transform -translate-x-1/2 w-72 h-76 left-1/2">
            <DatepickerPanel />
          </Popover.Panel>
        </Transition>
      </Popover>
    </DatepickerContextProvider>
  )
}

export default Datepicker
