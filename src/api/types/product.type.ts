export type Root = Root2[];
export interface Root2 {
  sold?: number;
  images: string[];
  subcategory: [[object]];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  availableColors?: string[];
  priceAfterDiscount?: number;
}
export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AllCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
export interface QuantityProps {
  maxQty: number;
  price: number;
}
