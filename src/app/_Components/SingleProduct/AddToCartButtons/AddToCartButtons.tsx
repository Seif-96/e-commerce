'use client';
import React, { useState, useEffect } from 'react';
import { FaBolt } from 'react-icons/fa6';
import { IoShareSocialSharp } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import ButtonForAddToWishlist from '../../ButtonForAddToWishlist/ButtonForAddToWishlist';
import ButtonForAddToCart from '../../ButtonForAddToCart/ButtonForAddToCart';
import { Button } from '@/components/ui/button';
import {
  getLoggedUserWishlist,
  RemoveFromWishlist,
  AddToWishlist,
} from '@/actions/addToWishlist.action';

export default function AddToCartButtons({ id }: { id: string }) {
  const [inWishlist, setInWishlist] = useState(false);
  const [loading, setLoading] = useState(false);

  // جلب حالة المنتج من wishlist على السيرفر
  useEffect(() => {
    async function fetchWishlist() {
      try {
        const res = await getLoggedUserWishlist();
        if (res.status === 'success') {
          const exists = res.data.some((item: any) => item.id === id);
          setInWishlist(exists);
        }
      } catch (error) {
        console.error('Failed to fetch wishlist:', error);
      }
    }
    fetchWishlist();
  }, [id]);

  // إضافة المنتج للسيرفر
  const handleAddToWishlist = async () => {
    setLoading(true);
    try {
      const res = await AddToWishlist(id);
      if (res.status === 'success') {
        setInWishlist(true);
      }
    } catch (error) {
      console.error('Failed to add to wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  // حذف المنتج من السيرفر
  const handleRemoveFromWishlist = async () => {
    setLoading(true);
    try {
      const res = await RemoveFromWishlist(id);
      if (res.status === 'success') {
        setInWishlist(false);
      }
    } catch (error) {
      console.error('Failed to remove from wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

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
        {inWishlist ? (
          <button
            onClick={handleRemoveFromWishlist}
            disabled={loading}
            className="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-red-200 text-red-600 bg-red-50 cursor-pointer disabled:opacity-50"
          >
            <FaHeart />
            <span>In Wishlist</span>
          </button>
        ) : (
          <div className="flex-1 w-full" onClick={handleAddToWishlist}>
            <ButtonForAddToWishlist
              classes="flex-1 w-full border-2 py-6 bg-white px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 cursor-pointer hover:border-green-300 hover:text-green-600"
              word="Add to Wishlist"
              icon="FaRegHeart"
              id={id}
            />
          </div>
        )}

        <button className="border-2 border-gray-200 text-gray-700 cursor-pointer py-3 px-4 rounded-xl hover:border-green-300 hover:text-green-600 transition">
          <IoShareSocialSharp />
        </button>
      </div>
    </>
  );
}
