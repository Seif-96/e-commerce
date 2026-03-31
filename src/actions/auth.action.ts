'use server';
import {
  forgotPasswordSchemaType,
  LoginSchemaType,
  OtpSchemaType,
  RegisterSchemaType,
} from '@/schemas/auth.schema';

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

// export async function forgotPasswords(data: forgotPasswordSchemaType) {
//   // https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords
//   try {
//     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     const result = await res.json();
//     return res.ok;
//   } catch {}
// }
export async function forgotPasswords(data: forgotPasswordSchemaType) {
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // مهم
      body: JSON.stringify(data),
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
export async function verifyResetCode(data:OtpSchemaType) {
console.log(data)
console.log(typeof data)
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"resetCode": data.otp}),
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
