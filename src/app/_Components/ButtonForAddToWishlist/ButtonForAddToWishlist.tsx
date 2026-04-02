'use client';
import { AddToCart } from '@/actions/addToCart.action';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { RiLoader2Fill } from 'react-icons/ri';

const iconsMap = {
  FaRegHeart: FaRegHeart,
  FaHeart: FaHeart,
};
export default function ButtonForAddToWishlist({
  classes,
  word,
  icon,
  id,
}: {
  classes: string;
  word?: string;
  icon?: keyof typeof iconsMap;
  id: string;
}) {
  const Icon = icon ? iconsMap[icon] : null;
  const [updateLoading, setupdateLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  async function AddProduct() {
    setupdateLoading(true);

    const res = await AddToCart(id);
    setupdateLoading(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  }
  return (
    <>
      <Button
        onClick={() => {
          AddProduct();
        }}
        className={classes}
      >
        {updateLoading ? (
          <RiLoader2Fill className="animate-spin" />
        ) : success ? (
          <div className="flex items-center gap-2">
            <FaRegHeart />
            {icon === 'FaRegHeart' && <span>Added to Cart</span>}
          </div>
        ) : (
          <>
            {Icon && <Icon />}
            {word}
          </>
        )}
      </Button>
    </>
  );
}

