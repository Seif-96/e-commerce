import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function loading() {
  return (
    <section className="p-10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
          <div className="flex  items-center gap-3 my-8">
            <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Shop By <span className="text-emerald-600">Category</span>
            </h2>
          </div>
          <div className="text-green-600 self-end sm:self-auto hover:text-green-700 font-medium flex items-center cursor-pointer">
            View All Categories <FaArrowRightLong className="ml-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm animate-pulse">
            {/* Image */}
            <div className="h-20 w-20 rounded-full mx-auto mb-3 bg-gray-200"></div>
            {/* Title */}
            <div className="h-4 w-20 bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center gap-3 my-8">
          <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-800">
            Featured <span className="text-emerald-600">Products</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-pulse">
            {/* Image */}
            <div className="w-full h-60 bg-gray-200" />
            <div className="p-4">
              {/* Brand */}
              <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
              {/* Title */}
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded mb-3"></div>
              {/* Stars */}
              <div className="flex items-center mb-3">
                <div className="flex gap-1">
                  <div className="h-3 w-3 bg-gray-200 rounded"></div>
                  <div className="h-3 w-3 bg-gray-200 rounded"></div>
                  <div className="h-3 w-3 bg-gray-200 rounded"></div>
                  <div className="h-3 w-3 bg-gray-200 rounded"></div>
                  <div className="h-3 w-3 bg-gray-200 rounded"></div>
                </div>
                <div className="h-3 w-10 bg-gray-200 rounded ml-2"></div>
              </div>
              {/* Price + Button */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                  <div className="h-3 w-12 bg-gray-200 rounded"></div>
                </div>
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
