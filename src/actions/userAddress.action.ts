import { UpdatePersonalDetailsSchemaType } from '@/schemas/auth.schema';

export async function addAddresses(data: UpdatePersonalDetailsSchemaType) {
  console.log(data);
  console.log(typeof data);
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/addresses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Home',
        details: 'Home details',
        phone: '01010700700',
        city: 'Gizaa',
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
