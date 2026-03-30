import * as zod from 'zod';

export const RegisterSchema = zod
  .object({
    name: zod
      .string()
      .trim()
      .nonempty('*Please enter your name')
      .min(3, '*Name is too short')
      .max(25, '*Name is too long'),

    email: zod.string().nonempty('*Please enter your email').email('*Invalid email address'),

    phone: zod
      .string()
      .nonempty('*Please enter your phone number')
      .regex(/^(?:\+20|0)1[0125][0-9]{8}$/, '*Only Egyptian phone numbers are allowed'),

    password: zod
      .string()
      .nonempty('*Please enter your password')
      .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
      .refine((val) => /\d/.test(val), '*Password must contain at least one number')
      .refine(
        (val) => /[^\w\d\s:]/.test(val),
        '*Password must contain at least one special character',
      )
      .min(8, '*Password must be at least 8 characters long')
      .max(16, '*Password must not exceed 16 characters'),

    rePassword: zod.string().nonempty('*Please confirm your password'),

    terms: zod.boolean().refine((val) => val === true, '*You must accept the terms and conditions'),
  })
  .refine((object) => object.password === object.rePassword, {
    message: 'password & rePassword not matched !',
    path: ['rePassword'],
  });
export const UpdatePasswordSchema = zod
  .object({
    password: zod
      .string()
      .nonempty('*Please enter your password')
      .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
      .refine((val) => /\d/.test(val), '*Password must contain at least one number')
      .refine(
        (val) => /[^\w\d\s:]/.test(val),
        '*Password must contain at least one special character',
      )
      .min(8, '*Password must be at least 8 characters long')
      .max(16, '*Password must not exceed 16 characters'),
    newPassword: zod
      .string()
      .nonempty('*Please enter your new password')
      .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
      .refine((val) => /\d/.test(val), '*Password must contain at least one number')
      .refine(
        (val) => /[^\w\d\s:]/.test(val),
        '*Password must contain at least one special character',
      )
      .min(8, '*Password must be at least 8 characters long')
      .max(16, '*Password must not exceed 16 characters'),
    rePassword: zod.string().nonempty('*Please confirm your password'),
  })
  .refine((object) => object.newPassword === object.rePassword, {
    message: 'New Password & rePassword not matched !',
    path: ['rePassword'],
  });
export const UpdatePersonalDetailsSchema = zod.object({
  name: zod
    .string()
    .trim()
    .nonempty('*Please enter your name')
    .min(3, '*Name is too short')
    .max(25, '*Name is too long'),
  email: zod.string().nonempty('*Please enter your email').email('*Invalid email address'),
  phone: zod
    .string()
    .nonempty('*Please enter your phone number')
    .regex(/^(?:\+20|0)1[0125][0-9]{8}$/, '*Only Egyptian phone numbers are allowed'),
});



export const NewPasswordSchema = zod
  .object({
    newPassword: zod
      .string()
      .nonempty('*Please enter your new password')
      .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
      .refine((val) => /\d/.test(val), '*Password must contain at least one number')
      .refine(
        (val) => /[^\w\d\s:]/.test(val),
        '*Password must contain at least one special character',
      )
      .min(8, '*Password must be at least 8 characters long')
      .max(16, '*Password must not exceed 16 characters'),
    rePassword: zod.string().nonempty('*Please confirm your password'),
  })
  .refine((object) => object.newPassword === object.rePassword, {
    message: 'New Password & rePassword not matched !',
    path: ['rePassword'],
  });



export const LoginSchema = zod.object({
  email: zod.string().nonempty('*Please enter your email').email('*Invalid email address'),
  password: zod
    .string()
    .nonempty('*Please enter your password')
    .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
    .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
    .refine((val) => /\d/.test(val), '*Password must contain at least one number')
    .refine(
      (val) => /[^\w\d\s:]/.test(val),
      '*Password must contain at least one special character',
    )
    .min(8, '*Password must be at least 8 characters long')
    .max(16, '*Password must not exceed 16 characters'),
});
export const forgotPasswordSchema = zod.object({
  email: zod.string().nonempty('*Please enter your email').email('Email is required'),
});
export type RegisterSchemaType = zod.infer<typeof RegisterSchema>;
export type UpdatePasswordSchemaType = zod.infer<typeof UpdatePasswordSchema>;
export type UpdatePersonalDetailsSchemaType = zod.infer<typeof UpdatePersonalDetailsSchema>;
export type LoginSchemaType = zod.infer<typeof LoginSchema>;
export type forgotPasswordSchemaType = zod.infer<typeof forgotPasswordSchema>;
export type NewPasswordSchemaType = zod.infer<typeof NewPasswordSchema>;
