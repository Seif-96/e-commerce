import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import { FaArrowsRotate } from 'react-icons/fa6';
import { FaRegEye } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { Root2 } from '@/api/types/product.type';
export default function ProdictCart({ product }: { product: Root2 }) {
  function renderStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaRegStarHalfStroke key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  }
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:-translate-y-1.25 transition-all hover:shadow-lg">
      <div className="relative">
        <Image
          src={product.imageCover}
          width={800}
          height={500}
          alt={product.title}
          className="w-full h-60 object-contain bg-white"
        />
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm cursor-pointer text-gray-600 hover:text-red-500">
            <FaRegHeart />
          </button>
          <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 cursor-pointer shadow-sm">
            <FaArrowsRotate />
          </button>
          <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 cursor-pointer shadow-sm">
            <Link href="">
              <FaRegEye />
            </Link>
          </button>
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">{`Women's Fashion`}</div>
          <h3 className="font-medium mb-1 cursor-pointer">
            <Link href="\" className="line-clamp-2">
              {product.title}
            </Link>
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex text-amber-400 mr-2">
              <div className="flex gap-1 text-yellow-400 mr-2">
                {renderStars(product.ratingsAverage)}
              </div>
              <span className="text-xs text-gray-500">
                {product.ratingsAverage} {`(${product.ratingsQuantity})`}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              {product.priceAfterDiscount ? (
                <>
                  <span className="text-lg font-bold text-green-600">
                    {product.priceAfterDiscount} EGP
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {product.price} EGP
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-gray-800">{product.price} EGP</span>
              )}
            </div>
            <button className="h-10 w-10 rounded-full flex items-center justify-center transition bg-green-600 text-white hover:bg-green-700 disabled:opacity-70 cursor-pointer">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
