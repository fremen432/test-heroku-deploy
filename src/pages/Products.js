// import React, { Component } from 'react';
import ProductCards from '../components/ProductCards'


export default function Products() {
  return (
    <div className="">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase">All Products</h2>
          {/* <a href="/products" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
            Show More<span aria-hidden="true"> &rarr;</span>
          </a> */}
        </div>

        {/* Products container */}
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {/* Create a product card for each product in products array */}
          <ProductCards />
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
            Show More<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}