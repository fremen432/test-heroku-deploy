import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

// Importing components
import NavEl from './navEl'
import Logo from './logo'
import MobileHamburgerBtn from './mobileHamburgerBtn'

import SearchBar from './searchBar'
import UserIconAndNotificationBell from './userProfile'
import CartIcon from './shoppingCart'

// import MobileNavEl from './mobileNavEl'

const mobileNavClasses = `block py-2 pl-3 pr-4 text-base font-medium border-l-4`
const focusedMobileNav = `text-indigo-700 border-indigo-500 bg-indigo-50`
const UnFocusedMobileNav = `text-gray-600 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800`

function Navbar() {

  return (
    <Disclosure as="nav" className="bg-white cbm-border-bottom">
      {({ open }) => (
        <main>
          {/* DESKTOP VIEW */}
          <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">

            {/* Header */}
            <div id="" className="flex justify-between h-16">

              {/* Logo, Nav Routes, Search bar, UserProfile */}
              <div id="nav" className="flex px-2 lg:px-0 ">
                <Logo />
                <NavEl />
              </div>

              <div id="header-controls" className="flex justify-around px-2 lg:px-0 m-2">
                <SearchBar />
                <UserIconAndNotificationBell />
                <CartIcon />
              </div>

              {/* Mobile hamburger menu button */}
              <div className=" flex items-center lg:hidden">
                {/* <MobileHamburgerBtn /> */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {/* If mobile menu is open, show 'X' icon. If mobile menu is closed, show hamburger 'menu' icon */}
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>

              </div>

            </div>

          </div>
          
          {/* MOBILE VIEW */}
          <Disclosure.Panel className="lg:hidden">

            {/* Routes */}
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="/"
                className={mobileNavClasses + focusedMobileNav}
              >
                Shop All
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/"
                className={mobileNavClasses + UnFocusedMobileNav}
              >
                Best Sellers
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/"
                className={mobileNavClasses + UnFocusedMobileNav}
              >
                Rewards
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className={mobileNavClasses + UnFocusedMobileNav}
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className={mobileNavClasses + UnFocusedMobileNav}
              >
                Contact
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/faq"
                className={mobileNavClasses + UnFocusedMobileNav}
              >
                FAQ
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/admin"
                className={mobileNavClasses + UnFocusedMobileNav}
              >
                Admin
              </Disclosure.Button>
            </div>

            {/* Profile drop-down */}
            <div className="pt-4 pb-3 border-t border-gray-200">

              {/* User info and pic */}
              <div className="flex items-center px-4">

                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>

                {/* Text */}
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>

                {/* notification bell icon */}
                <button
                  type="button"
                  className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {/* <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" /> */}
                </button>

              </div>


              {/* User drop down buttons */}
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </Disclosure.Button>
              </div>

            </div>

          </Disclosure.Panel>

        </main>
      )}
    </Disclosure>
  )
}

export default Navbar;