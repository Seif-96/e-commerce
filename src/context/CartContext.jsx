'use client';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {
  getLoggedUserCart,
  RemoveAllProductsFromCart,
  RemoveProduct,
  UpdateProductQuantity,
} from '@/actions/addToCart.action';
export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [numOfCartItems, setnumOfCartItems] = useState(0);

  async function getProductCart() {
    try {
      const res = await getLoggedUserCart();
      console.log('contextCart', res.data.products);
      let sum = 0;
      res.data.products.forEach((product) => {
        sum += product.count;
      });
      setnumOfCartItems(sum);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getProductCart();
  }, []);
  return (
    <CartContext.Provider value={{ numOfCartItems, setnumOfCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
