'use client';
import React, { useState, useEffect, useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import ButtonForAddToWishlist from '../ButtonForAddToWishlist/ButtonForAddToWishlist';
import { getLoggedUserWishlist, RemoveFromWishlist } from '@/actions/addToWishlist.action';
import { WishlistContext } from '@/context/WishListContext';

const iconsMap = {
  FaRegHeart: FaRegHeart,
  FaHeart: FaHeart,
};
type WishlistItem = {
  id: string;
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
  const { numOfWishlistItems, setnumOfWishlistItems } = useContext(WishlistContext);
  const [inWishlist, setInWishlist] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ نجيب هل المنتج موجود في wishlist ولا لا
  useEffect(() => {
    async function fetchWishlist() {
      try {
        const res = await getLoggedUserWishlist();
        if (res.status === 'success') {
          const exists = res.data.some((item: WishlistItem) => item?.id === id);
          setInWishlist(exists);
        }
      } catch (error) {
        console.error('Failed to fetch wishlist:', error);
      }
    }
    fetchWishlist();
  }, [id]);

  // ✅ حذف المنتج
  const handleRemoveFromWishlist = async () => {
    setLoading(true);
    try {
      const res = await RemoveFromWishlist(id);
      if (res.status === 'success') {
        setInWishlist(false);
              setnumOfWishlistItems(numOfWishlistItems - 1);
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
        <ButtonForAddToWishlist
          classes={classesOne || ''}
          word={word || ''}
          icon="FaRegHeart"
          id={id}
          onSuccess={() => setInWishlist(true)} // 🔥 التحديث الفوري
        />
      )}
    </>
  );
}
