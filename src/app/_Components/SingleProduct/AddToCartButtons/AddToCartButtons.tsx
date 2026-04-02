import React from 'react';
import { FaBolt } from 'react-icons/fa6';
import { IoShareSocialSharp } from 'react-icons/io5';
import ButtonForAddToCart from '../../ButtonForAddToCart/ButtonForAddToCart';
import { Button } from '@/components/ui/button';
export default function AddToCartButtons({ id }: { id: string }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <ButtonForAddToCart
          classes="flex-1 text-white py-6.5 px-6! rounded-xl font-medium hover:bg-green-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/25 bg-green-600 cursor-pointer"
          word="Add to Cart"
          icon="cart"
          id={id}
        />
        <Button className="flex-1 bg-gray-900 text-white py-6.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer">
          <FaBolt /> Buy Now
        </Button>
      </div>
      <div className="flex gap-3 mb-6">
        <button
          id="wishlist-button"
          className="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 cursor-pointer hover:border-green-300 hover:text-green-600"
        >
          Add to Wishlist
        </button>
        <button className="border-2 border-gray-200 text-gray-700 cursor-pointer py-3 px-4 rounded-xl hover:border-green-300 hover:text-green-600 transition">
          <IoShareSocialSharp />
        </button>
      </div>
    </>
  );
}
