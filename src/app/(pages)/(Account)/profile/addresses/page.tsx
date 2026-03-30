'use client';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
export default function Profile() {
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
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-green-600 bg-green-50 hover:text-green-900"
                      href="/profile/addresses"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-green-500 text-white">
                        <FaMapMarkerAlt />
                      </div>
                      <span className="font-medium flex-1">My Addresses</span>
                      <IoIosArrowForward />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      href="/profile/settings"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-gray-100 text-gray-500 group-hover:bg-gray-200">
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
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">My Addresses</h2>
                    <p className="text-gray-500 text-sm mt-1">
                      Manage your saved delivery addresses
                    </p>
                  </div>
                  <Dialog>
                    <form>
                      <DialogTrigger>
                        <Button
                          className="inline-flex items-center gap-2 px-6 py-6 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 hover:text-white transition-colors shadow-lg shadow-green-600/25"
                          variant="outline"
                        >
                          <FaPlus className="text-sm" />
                          Add Address
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg p-6 sm:p-8">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold text-gray-900">
                            Add New Address
                          </DialogTitle>
                        </DialogHeader>
                        <FieldGroup className="mt-5">
                          <Field>
                            <Label htmlFor="address">Address Name</Label>
                            <Input
                              className="w-full! px-4! py-6! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                              id="address"
                              name="address"
                              placeholder="e.g Home. Office"
                            />
                          </Field>
                          <Field>
                            <Label htmlFor="full-address">Full Address</Label>
                            <Textarea
                              placeholder="Street, building, apartment..."
                              className="w-full! px-4! py-2! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                              id="full-address"
                              name="fullAddress"
                            />
                          </Field>
                          <div className="grid grid-cols-2 gap-4">
                            <Field>
                              <Label htmlFor="phone-number">Phone Number</Label>
                              <Input
                                className="w-full! px-4! py-6! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                                id="phone-number"
                                name="phone"
                                placeholder="01xxxxxxxxx"
                              />
                            </Field>
                            <Field>
                              <Label htmlFor="city">City</Label>
                              <Input
                                className="w-full! px-4! py-6! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                                id="city"
                                name="city"
                                placeholder="Cairo"
                              />
                            </Field>
                          </div>
                        </FieldGroup>
                        <DialogFooter className="flex items-center gap-3 pt-4 bg-white border-0">
                          <DialogClose className="flex-1">
                            <Button
                              className="w-full py-6 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                              variant="outline"
                            >
                              Cancel
                            </Button>
                          </DialogClose>
                          <Button
                            className="flex-1 w-full py-6 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25"
                            type="submit"
                          >
                            Save changes
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>
                </div>
                <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                    <FaMapMarkerAlt className="text-3xl text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">No Addresses Yet</h3>
                  <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                    Add your first delivery address to make checkout faster and easier.
                  </p>
                  <Dialog>
                    <form>
                      <DialogTrigger>
                        <Button
                          className="inline-flex items-center gap-2 px-6 py-6 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 hover:text-white transition-colors shadow-lg shadow-green-600/25"
                          variant="outline"
                        >
                          <FaPlus className="text-sm" />
                          Add Your First Address
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg p-6 sm:p-8">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold text-gray-900">
                            Add New Address
                          </DialogTitle>
                        </DialogHeader>
                        <FieldGroup className="mt-5">
                          <Field>
                            <Label htmlFor="address">Address Name</Label>
                            <Input
                              className="w-full! px-4! py-6! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                              id="address"
                              name="address"
                              placeholder="e.g Home. Office"
                            />
                          </Field>
                          <Field>
                            <Label htmlFor="full-address">Full Address</Label>
                            <Textarea
                              placeholder="Street, building, apartment..."
                              className="w-full! px-4! py-2! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                              id="full-address"
                              name="fullAddress"
                            />
                          </Field>
                          <div className="grid grid-cols-2 gap-4">
                            <Field>
                              <Label htmlFor="phone-number">Phone Number</Label>
                              <Input
                                className="w-full! px-4! py-6! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                                id="phone-number"
                                name="phone"
                                placeholder="01xxxxxxxxx"
                              />
                            </Field>
                            <Field>
                              <Label htmlFor="city">City</Label>
                              <Input
                                className="w-full! px-4! py-6! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                                id="city"
                                name="city"
                                placeholder="Cairo"
                              />
                            </Field>
                          </div>
                        </FieldGroup>
                        <DialogFooter className="flex items-center gap-3 pt-4 bg-white border-0">
                          <DialogClose className="flex-1">
                            <Button
                              className="w-full py-6 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                              variant="outline"
                            >
                              Cancel
                            </Button>
                          </DialogClose>
                          <Button
                            className="flex-1 w-full py-6 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25"
                            type="submit"
                          >
                            Save changes
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
