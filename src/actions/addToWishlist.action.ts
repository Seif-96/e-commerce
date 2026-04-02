import { getAccessToken } from '@/utilities';
export async function AddToWishlist(productId: string) {
  const token = await getAccessToken();
  const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
    method: 'POST',
    headers: { token: token as string, 'content-type': 'application/json' },
    body: JSON.stringify({ productId: productId }),
  });
  const data = await res.json();
  console.log(data);

  return data;
}
