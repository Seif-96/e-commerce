import { AllCategory, Brand, Root2 } from '../types/product.type';

export async function getAllProducts(): Promise<Root2[] | undefined> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    return undefined;
  }
}
export async function getSingleProduct(id: string): Promise<Root2> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    const data = await res.json();
    // console.log("ssssssssssssss",data.data)
    return data.data;
  } catch (error) {
    throw new Error('Failed to fetch product');
  }
}
export async function getAllCategory(): Promise<AllCategory[] | undefined> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    return undefined;
  }
}
export async function getAllBrands(): Promise<Brand[] | undefined> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    return undefined;
  }
}

export async function getSingleBrands(id: string): Promise<Root2[]> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?brand=${id}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw new Error('Failed to fetch product');
  }
}
