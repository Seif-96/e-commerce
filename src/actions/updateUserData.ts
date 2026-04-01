import { UpdatePersonalDetailsSchemaType } from '@/schemas/auth.schema';

export async function updateUserDetails(data: UpdatePersonalDetailsSchemaType) {
  console.log(data);
  console.log(typeof data);
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/users/updateMe/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Ahmed Abd Al-Muti',
        email: 'ahmedmutt2i2@gmail.com',
        phone: '01010700700',
      }),
    });
    const result = await res.json();
    return {
      ok: res.ok,
      data: result,
      error: result?.message || null,
    };
  } catch (err) {
    return {
      ok: false,
      error: 'Something went wrong',
    };
  }
}
