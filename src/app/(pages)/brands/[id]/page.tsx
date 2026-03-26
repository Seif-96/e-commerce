import { getSingleBrands } from '@/api/services/routemisr.service';
import { Brand, Root2 } from '@/api/types/product.type';
import ProdictCart from '@/app/_Components/Home/ProductCart/ProdictCart';
import { IoMdClose } from 'react-icons/io';
import { FaBoxOpen } from 'react-icons/fa';

import { FaTags } from 'react-icons/fa6';
import Link from 'next/link';
import React from 'react';
import { FaFilter } from 'react-icons/fa';

export default async function page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const singleBrands = await getSingleBrands(id);
  return (
    <>
      <section>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-2 text-sm text-gray-600">
              <FaFilter />
              Active Filters:
            </span>
            <Link
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium hover:bg-violet-200 transition-colors"
              href={`/products`}
            >
              <FaTags className="text-sm" />
              {singleBrands.length > 0 && singleBrands[0].brand.name}
              <IoMdClose className="text-sm" />
            </Link>
            <Link className="text-sm text-gray-500 hover:text-gray-700 underline" href="/products">
              Clear all
            </Link>
          </div>
          <div className="mb-6 text-sm text-gray-500">Showing {singleBrands?.length} products</div>
          {singleBrands?.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                <FaBoxOpen className="text-3xl text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Products Found</h3>
              <p className="text-gray-500 mb-6">No products match your current filters.</p>
              <Link
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
                href="/products"
              >
                View All Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {singleBrands?.map((product: Brand) => (
                <ProdictCart key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
