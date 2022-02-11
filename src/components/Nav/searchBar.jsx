import React, { Component } from 'react';
import { SearchIcon } from '@heroicons/react/solid'

class SearchBar extends Component {
    render() {
        return (
            <>
                <div className="  flex items-center justify-center flex-1 px-2 lg:justify-end">
                    <div className="w-full max-w-lg lg:max-w-xs">
                        {/* <label htmlFor="search" className="sr-only">
                            Search
                        </label> */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                            id="search"
                            name="search"
                            className="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Search"
                            type="search"
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchBar;
