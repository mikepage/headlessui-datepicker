import React from 'react'
import Datepicker from './components/Datepicker'

interface Props {}

const App = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-full bg-gray-200">
      <div className="antialiased sans-serif">
        <div className="container px-4 py-2 mx-auto md:py-10">
          <div className="w-64 mb-5">
            <Datepicker />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
