'use client';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { FaSave } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  UpdatePersonalDetailsSchema,
  UpdatePersonalDetailsSchemaType,
  UpdatePasswordSchema,
  UpdatePasswordSchemaType,
} from '@/schemas/auth.schema';
import { FaLock } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa6';
import { FaEyeSlash } from 'react-icons/fa';
import { useForm, Controller } from 'react-hook-form';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { SpinnerCustom } from '@/app/_Components/ButtonSpinner/ButtonSpinner';
import { Button } from '@/components/ui/button';
export default function Profile() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const [showPasswordThere, setShowPasswordThere] = useState(false);
  const { data: myData, status } = useSession();
  const router = useRouter();
  const form = useForm<UpdatePersonalDetailsSchemaType>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
    resolver: zodResolver(UpdatePersonalDetailsSchema),
  });
  const updataPassForm = useForm<UpdatePasswordSchemaType>({
    defaultValues: {
      password: '',
      newPassword: '',
      rePassword: '',
    },
    resolver: zodResolver(UpdatePasswordSchema),
  });
  const { handleSubmit: handleProfileSubmit, control: profileControl, reset: resetProfile } = form;
  const { handleSubmit: handlePasswordSubmit, control: passwordControl } = updataPassForm;
  // updateUserDetails
  async function mySubmit(theData: UpdatePersonalDetailsSchemaType) {
    // updateUserDetails
  }
  // change the Password
  async function mySubmitTwo(newData: UpdatePasswordSchemaType) {
    // changeMyPassword
  }
  return (
    <>
      <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-12">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">My Account</span>
          </nav>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ">
              <FaUser className="text-3xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">My Account</h1>
              <p className="text-white/80 mt-1">Manage your addresses and account settings</p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <aside className="w-full lg:w-72 shrink-0">
              <nav className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h2 className="font-bold text-gray-900">My Account</h2>
                </div>
                <ul className="p-2">
                  <li>
                    <Link
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      href="/profile/addresses"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                        <FaMapMarkerAlt />
                      </div>
                      <span className="font-medium flex-1">My Addresses</span>
                      <IoIosArrowForward />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-green-50 text-green-700"
                      href="/profile/settings"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-green-500 text-white">
                        <IoSettingsSharp />
                      </div>
                      <span className="font-medium flex-1">Settings</span>
                      <IoIosArrowForward />
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>
            <main className="flex-1 min-w-0">
              <div className="space-y-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Account Settings</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Update your profile information and change your password
                  </p>
                </div>
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 sm:p-8 border-b border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                        <FaUser className="text-2xl text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Profile Information</h3>
                        <p className="text-sm text-gray-500">Update your personal details</p>
                      </div>
                    </div>
                    <form className="space-y-5" onSubmit={handleProfileSubmit(mySubmit)}>
                      <div className="flex flex-col gap-2">
                        <Controller
                          name="name"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="name">Full Name</FieldLabel>
                              <Input
                                {...field}
                                id="name"
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter your name"
                                autoComplete="off"
                                className="py-5! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]!"
                              />
                            </Field>
                          )}
                        />
                      </div>
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
                                placeholder="Enter your email"
                              />
                            </Field>
                          )}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Controller
                          name="phone"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                              <Input
                                {...field}
                                id="phone"
                                type="tel"
                                aria-invalid={fieldState.invalid}
                                placeholder="01xxxxxxxxx"
                                className="py-5! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]"
                              />
                            </Field>
                          )}
                        />
                      </div>
                      <div className="pt-4">
                        <Button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center gap-2 px-6 py-6 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25"
                        >
                          {loading ? (
                            <>
                              <SpinnerCustom />
                              <span>Saving...</span>
                            </>
                          ) : (
                            <>
                              <FaSave />
                              Save Changes
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </div>
                  <div className="p-6 sm:p-8 bg-gray-50">
                    <h3 className="font-bold text-gray-900 mb-4">Account Information</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">User ID</span>
                        <span className="font-mono text-gray-700">{myData?.id}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Role</span>
                        <span className="px-3 py-1 rounded-lg bg-green-100 text-green-700 font-medium capitalize">
                          {myData?.user.role || 'user'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                        <FaLock className="text-2xl text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Change Password</h3>
                        <p className="text-sm text-gray-500">Update your account password</p>
                      </div>
                    </div>
                    <form className="space-y-5" onSubmit={handlePasswordSubmit(mySubmitTwo)}>
                      <div className="relative flex flex-col gap-2">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-10.5 text-xl cursor-pointer text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        <Controller
                          name="password"
                          control={passwordControl}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="password">Current Password</FieldLabel>
                              <Input
                                {...field}
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter your password"
                                className="py-6! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]!"
                              />
                            </Field>
                          )}
                        />
                      </div>
                      <div className="relative flex flex-col gap-2">
                        <button
                          type="button"
                          onClick={() => setShowPasswordTwo(!showPasswordTwo)}
                          className="absolute right-4 top-10.5 text-xl cursor-pointer text-gray-400 hover:text-gray-600"
                        >
                          {showPasswordTwo ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        <Controller
                          name="newPassword"
                          control={passwordControl}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="password">New Password</FieldLabel>
                              <Input
                                {...field}
                                id="password"
                                type={showPasswordTwo ? 'text' : 'password'}
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter your new password"
                                className="py-6! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]!"
                              />
                            </Field>
                          )}
                        />
                      </div>
                      <div className="relative flex flex-col gap-2">
                        <button
                          type="button"
                          onClick={() => setShowPasswordThere(!showPasswordThere)}
                          className="absolute right-4 top-10.5 text-xl cursor-pointer text-gray-400 hover:text-gray-600"
                        >
                          {showPasswordThere ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        <Controller
                          name="rePassword"
                          control={passwordControl}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="password">Confirm New Password</FieldLabel>
                              <Input
                                {...field}
                                id="password"
                                type={showPasswordThere ? 'text' : 'password'}
                                aria-invalid={fieldState.invalid}
                                placeholder="Confirm your new password"
                                className="py-6! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]!"
                              />
                            </Field>
                          )}
                        />
                      </div>
                      <div className="pt-4">
                        <Button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center gap-2 px-6 py-6 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 shadow-lg shadow-amber-600/25"
                        >
                          {loading ? (
                            <>
                              <SpinnerCustom />
                              <span>Changing Password...</span>
                            </>
                          ) : (
                            <>
                              <FaLock />
                              Changes Password
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
