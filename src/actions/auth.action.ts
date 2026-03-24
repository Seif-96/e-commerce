'use server';
import { RegisterSchemaType } from '@/schemas/auth.schema';

export async function userRegister(data: RegisterSchemaType) {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await res.json();
    return res.ok;
  } catch {}
}
