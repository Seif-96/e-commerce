'use server';
import { getAccessToken } from '@/utilities';
// add    https://ecommerce.routemisr.com/api/v1/wishlist
// remove  https://ecommerce.routemisr.com/api/v1/wishlist/61e81f641904360ec15c6db1
// get   https://ecommerce.routemisr.com/api/v1/wishlist
export async function AddToWishlist(productId: string) {
  const token = await getAccessToken();
  const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
    method: 'POST',
    headers: { token: token as string, 'content-type': 'application/json' },
    body: JSON.stringify({ productId: productId }),
  });
  const data = await res.json();
  return data;
}
export async function getLoggedUserWishlist() {
  const token = await getAccessToken();
  const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
    method: 'GET',
    headers: { token: token as string, 'content-type': 'application/json' },
  });
  const data = await res.json();
  return data;
}
export async function RemoveFromWishlist(productId: string) {
  const token = await getAccessToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
    method: 'DELETE',
    headers: { token: token as string, 'content-type': 'application/json' },
  });
  const data = await res.json();
  return data;
}
