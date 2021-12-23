import { useState } from 'react'
import Datepicker from './components/Datepicker'
import SelectLocale from './components/SelectLocale'

interface Props {}

const App = (props: Props) => {
  const [locale, setLocale] = useState('en')

  return (
    <div className="flex justify-center h-full bg-gray-200">
      <div className="antialiased sans-serif">
        <div className="container px-4 py-2 mx-auto md:py-10">
          <div className="w-64 mb-5">
            <SelectLocale locale={locale} setLocale={setLocale} />
          </div>
          <div className="w-64 mb-5">
            <Datepicker locale={locale} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
