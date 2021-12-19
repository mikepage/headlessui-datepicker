import React from 'react'
import { CalendarIcon } from '@heroicons/react/outline'

interface Props {}

const App = (props: Props) => {
  return (
    <div className="flex items-center justify-center bg-gray-200 h-full">
      <div className="antialiased sans-serif">
        <div className="container mx-auto px-4 py-2 md:py-10">
          <div className="mb-5 w-64">
            <div className="relative">
              <input
                type="text"
                className="
                  w-full
                  pl-4
                  pr-10
                  py-3
                  leading-none
                  rounded-lg
                  shadow-sm
                  focus:outline-none focus:shadow-outline
                  text-gray-600
                  font-medium
                "
                placeholder="Select date"
              />

              <div className="absolute top-0 right-0 px-3 py-2">
                <CalendarIcon className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
