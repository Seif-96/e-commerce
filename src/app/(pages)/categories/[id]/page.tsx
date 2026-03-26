import Link from 'next/link';
import React from 'react';
import { FaFolderOpen } from 'react-icons/fa6';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function category() {
  return (
    <>
      <section>
        <div className="min-h-screen bg-gray-50/50">
          <div className="container mx-auto px-4 py-10">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-6"
            >
              <FaArrowLeftLong /> Back to Categories
            </Link>
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                <span className=""></span> Subcategories in <span className=""></span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              <Link
                href="/"
                className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                  <FaFolderOpen className="text-2xl text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors mb-2">
                  Computer Accessories
                </h3>
                <div className="flex items-center gap-2 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaLongArrowAltRight className="text-xs" />
                  <span>Browse Products</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
