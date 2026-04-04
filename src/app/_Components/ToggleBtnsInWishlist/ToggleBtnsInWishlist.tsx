'use client';
import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import ButtonForAddToWishlist from '../ButtonForAddToWishlist/ButtonForAddToWishlist';
import {
  getLoggedUserWishlist,
  RemoveFromWishlist,
  AddToWishlist,
} from '@/actions/addToWishlist.action';
import { FaRegHeart } from 'react-icons/fa';
const iconsMap = {
  FaRegHeart: FaRegHeart,
  FaHeart: FaHeart,
};
export default function ToggleBtnsInWishlist({
  classesOne,
  classesTwo,
  word,
  wordTwo,
  wordStyle,
  iconStyle,
  icon,
  id,
}: {
  classesOne?: string;
  classesTwo?: string;
  word?: string;
  wordTwo?: string;
  wordStyle?: string;
  iconStyle?: string;
  icon?: keyof typeof iconsMap;
  id: string;
}) {
  const [inWishlist, setInWishlist] = useState(false);
  const [loading, setLoading] = useState(false);
  // جلب حالة المنتج من wishlist على السيرفر
  useEffect(() => {
    async function fetchWishlist() {
      try {
        const res = await getLoggedUserWishlist();
        if (res.status === 'success') {
          const exists = res.data.some((item: any) => item?.id === id);
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
      {inWishlist ? (
        <button onClick={handleRemoveFromWishlist} disabled={loading} className={classesTwo}>
          <FaHeart />
          {wordTwo && <span>{wordTwo}</span>}
        </button>
      ) : (
        <div className="flex-1 w-full" onClick={handleAddToWishlist}>
          <ButtonForAddToWishlist
            classes={classesOne || ''}
            word={word || ''}
            icon="FaRegHeart"
            id={id}
          />
        </div>
      )}
    </>
  );
}
