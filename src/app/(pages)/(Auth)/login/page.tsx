'use client';
import React, { useState } from 'react';
import image3 from '../../../../assets/images/image3.png';
import Image from 'next/image';
import { FaTruck } from 'react-icons/fa';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { FaShieldAlt } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Controller, useForm } from 'react-hook-form';
import { SpinnerCustom } from '@/app/_Components/ButtonSpinner/ButtonSpinner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import { zodResolver } from '@hookform/resolvers/zod';
export default function Login() {
    const [loading, setLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    }});
  return (
    <>
      <section>
        <div className="container py-16 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="hidden lg:block">
              <div className="text-center space-y-6">
                <Image
                  src={image3}
                  alt="login image"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  width={100}
                  height={100}
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800">
                    FreshCart - Your One-Stop Shop for Fresh Products
                  </h2>
                  <p className="text-lg text-gray-600">
                    Join thousands of happy customers who trust FreshCart for their daily grocery
                    needs
                  </p>
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaTruck className="text-green-600 mr-2" /> Free Delivery
                    </div>
                    <div className="flex items-center">
                      <FaShieldAlt className="text-green-600 mr-2" /> Secure Payment
                    </div>
                    <div className="flex items-center">
                      <MdOutlineAccessTimeFilled className="text-green-600 mr-2" /> 24/7 Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-green-600">
                      Fresh<span className="text-gray-800">Cart</span>
                    </span>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
                  <p className="text-gray-600">
                    Sign in to continue your fresh shopping experience
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200 cursor-pointer"
                  >
                    <FaGoogle className="me-2 text-red-600 text-lg" />
                    <span className="font-medium text-gray-700">Continue with Google</span>
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200 cursor-pointer"
                  >
                    <FaFacebook className="me-2 text-blue-600 text-lg" />
                    <span className="font-medium text-gray-700">Continue with Facebook</span>
                  </button>
                </div>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">
                      OR CONTINUE WITH EMAIL
                    </span>
                  </div>
                </div>
                <form className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <Controller
                      name="email"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="email">Email Address</FieldLabel>
                          <Input
                            {...field}
                            id="email"
                            className="py-5! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]"
                            aria-invalid={fieldState.invalid}
                            placeholder="ali@example.com"
                          />
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Controller
                      name="password"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="password">Password</FieldLabel>
                          <Input
                            {...field}
                            id="password"
                            type="password"
                            aria-invalid={fieldState.invalid}
                            placeholder="create a strong password"
                            className="py-5! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]"
                          />
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />
                  </div>
                        <div>
                                  <div className="flex items-center gap-2">
                                    <input
                                      type="checkbox"
                                      id="terms"
                                      className="size-4 accent-green-600"
                                    />
                                    <label htmlFor="terms">Keep me signed in</label>
                                  </div>

                                </div>
                              <Button
                                  type="submit"
                                  disabled={loading}
                                  className="btn bg-green-600 text-white hover:bg-green-700 py-5 w-full transition-colors cursor-pointer text-[16px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed!"
                                >
                                  {loading ? (
                                    <>
                                      <SpinnerCustom />
                                      <span>Sing In...</span>
                                    </>
                                  ) : (
                                    <>
                                      <span>Sing In</span>
                                    </>
                                  )}
                                </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
