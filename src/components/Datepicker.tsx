import { CalendarIcon } from '@heroicons/react/outline'
import React from 'react'

interface Props {}

const Datepicker = (props: Props) => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full py-3 pl-4 pr-10 font-medium leading-none text-gray-600 rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
        placeholder="Select date"
      />

      <div className="absolute top-0 right-0 px-3 py-2">
        <CalendarIcon className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  )
}

export default Datepicker
