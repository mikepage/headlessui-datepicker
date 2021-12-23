import { Listbox, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction } from 'react'

interface Props {
  locale: string
  setLocale: Dispatch<SetStateAction<string>>
}

const locales = ['en', 'nl']

const SelectLocale = ({ locale, setLocale }: Props) => {
  return (
    <Listbox value={locale} onChange={setLocale}>
      <div className="relative z-10 mt-1">
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none sm:text-sm">
          {locale}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-md focus:outline-none sm:text-sm">
            {locales.map((locale, index) => (
              <Listbox.Option
                key={index}
                value={locale}
                className={({ active }) =>
                  `${
                    active ? 'text-emerald-900 bg-emerald-100' : 'text-gray-900'
                  }
                    relative px-4 py-2 cursor-default select-none`
                }
              >
                {locale}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default SelectLocale
