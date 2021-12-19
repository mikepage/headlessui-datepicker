import { ChevronRightIcon } from '@heroicons/react/outline'

interface Props {}

const NextMonthButton = (props: Props) => {
  return (
    <button
      type="button"
      className="inline-flex p-1 transition duration-100 ease-in-out rounded-full cursor-pointer hover:bg-gray-200"
    >
      <ChevronRightIcon className="inline-flex w-6 h-6 text-gray-400" />
    </button>
  )
}

export default NextMonthButton
