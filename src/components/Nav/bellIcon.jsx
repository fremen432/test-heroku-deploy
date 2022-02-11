import { BellIcon } from '@heroicons/react/outline'


function BellIconBtn() {
    return(
        <>
            <button
            type="button"
            className="px-2 hidden lg:block flex-shrink-0 p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <span className="sr-only">View notifications</span>
                <BellIcon className="w-6 h-6" aria-hidden="true" />
            </button>
        </>
    )
}

export default BellIconBtn;
