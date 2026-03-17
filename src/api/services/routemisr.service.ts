import { Root2 } from '../types/product.type';

export  async function getAllProducts(): Promise<Root2[] | undefined> {
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
      const data = await res.json();
      return data.data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }