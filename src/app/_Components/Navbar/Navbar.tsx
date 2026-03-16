'use client';
import * as React from 'react';
import logo from '../../../../public/freshcart-logo.svg';
import { FaTruck } from 'react-icons/fa';
import { IoIosGift } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { FaUserPlus } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { FaBars } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
  return (
    <>
      <div className="hidden lg:block text-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10 text-gray-500">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaTruck className="text-green-600" />
                Free Shipping on Orders 500 EGP
              </div>
              <div className="flex items-center gap-2">
                <IoIosGift className="text-green-600" />
                New Arrivals Daily
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a
                  href="tel:+1 (800) 123-4567"
                  className="flex items-center gap-2 hover:text-green-500 cursor-pointer transition-colors"
                >
                  <FaPhoneAlt />
                  <span>+1 (800) 123-4567</span>
                </a>
                <a
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-2 hover:text-green-500 cursor-pointer transition-colors"
                >
                  <MdOutlineMailOutline />
                  <span>support@freshcart.com</span>
                </a>
              </div>
              <span className="w-px h-4 bg-gray-200"></span>
              <div className="flex items-center gap-4">
                <Link
                  className="flex items-center gap-2 hover:text-green-600 transition-colors"
                  href={'/login'}
                >
                  <FiUser />
                  <span>Sign In</span>
                </Link>
                <Link
                  className="flex items-center gap-2 hover:text-green-600 transition-colors"
                  href={'/register'}
                >
                  <FaUserPlus />
                  <span>Sign Up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
            <Link href="#">
              <Image className="w-auto" src={logo} alt="freshcart" />
            </Link>
            <form className="hidden lg:flex flex-1 max-w-2xl">
              <Field orientation="horizontal" className="relative ">
                <Input
                  type="search"
                  className="w-full! px-5! py-5! pr-12! rounded-full! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/20! focus:border-green-500! transition-all! text-sm"
                  placeholder="Search for products, brands and more..."
                />
                <Button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                  <FaSearch />
                </Button>
              </Field>
            </form>
            <nav className="hidden xl:flex items-center gap-5">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Shop
              </Link>
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-1.5 text-gray-700 hover:text-green-600 hover:bg-white font-medium transition-colors">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-md cursor-pointer">
                      Categories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="min-w-50">
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href="/">All Categories</Link>
                        </li>
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href="/">Electronics</Link>
                        </li>
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href="/">{"Women's Fashion"}</Link>
                        </li>
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href="/">{"Men's Fashion"}</Link>
                        </li>
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href="/">Beauty & Health</Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Brands
              </Link>
            </nav>
            <div className="flex items-center gap-1 lg:gap-2">
              <Link
                href="/"
                className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <FaHeadset className=" text-green-500" />
                </div>
                <div className="text-xs">
                  <div>
                    <div className="text-gray-400">Support</div>
                    <div className="font-semibold text-gray-700">24/7 Help</div>
                  </div>
                </div>
              </Link>
              <Link
                href="/"
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
              >
                <FaRegHeart className=" text-xl text-gray-500 group-hover:text-green-600 transition-colors" />
              </Link>
              <Link
                href="/"
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
              >
                <FaCartShopping className=" text-xl text-gray-500 group-hover:text-green-600 transition-colors" />
              </Link>
              <Link
                href="/login"
                className="hidden lg:flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-green-600/20"
              >
                <FiUser />
                Sign In
              </Link>
              <Sheet>
                <SheetTrigger className="lg:hidden cursor-pointer ml-1 w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors">
                  <FaBars />
                </SheetTrigger>
                <SheetContent className="lg:hidden w-80! right-0! max-w-[85vw] overflow-y-auto!">
                  <SheetHeader className="border-b border-gray-100">
                    <SheetTitle>
                      <Image className="w-auto" src={logo} alt="freshcart" />
                    </SheetTitle>
                  </SheetHeader>
                  <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <form className="flex flex-1 max-w-2xl pb-4 border-b border-gray-100">
                      <Field orientation="horizontal" className="relative ">
                        <Input
                          type="search"
                          className="w-full! px-5! py-6! pr-12! rounded-xl! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/20! focus:border-green-500! transition-all! text-sm"
                          placeholder="Search for products, brands and more..."
                        />
                        <Button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                          <FaSearch />
                        </Button>
                      </Field>
                    </form>

                    <nav>
                      <div className="space-y-1 flex flex-col">
                        <SheetClose>
                          <Link
                            href="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            Home
                          </Link>
                        </SheetClose>
                        <SheetClose>
                          <Link
                            href="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            Shop
                          </Link>
                        </SheetClose>
                        <SheetClose>
                          <Link
                            href="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            Categories
                          </Link>
                        </SheetClose>

                        <SheetClose>
                          <Link
                            href="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            Brands
                          </Link>
                        </SheetClose>
                      </div>
                    </nav>
                    <div className="mx-4 border-t border-gray-100"></div>
                    <div className="flex flex-col">
                      <SheetClose>
                        <Link
                          href="/"
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                              <FaRegHeart className="text-red-500 text-lg" />
                            </div>
                            <span className="font-medium text-gray-700">Wishlist</span>
                          </div>
                        </Link>
                      </SheetClose>
                      <SheetClose>
                        <Link
                          href="/"
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-md">
                              <FaCartShopping className="text-green-600 text-lg" />
                            </div>
                            <span className="font-medium text-gray-700">Cart</span>
                          </div>
                        </Link>
                      </SheetClose>
                    </div>
                    <div className="space-y-1">
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <SheetClose className="flex items-center cursor-pointer justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
                          <Link href="/login">Sign In</Link>
                        </SheetClose>
                        <SheetClose className="flex items-center cursor-pointer justify-center gap-2 px-4 py-3 rounded-xl border-2 border-green-600 text-green-600 font-semibold hover:bg-green-50 transition-colors">
                          <Link href="/register">Sign Up</Link>
                        </SheetClose>
                      </div>
                    </div>
                    <SheetClose>
                      <Link
                        href="/"
                        className=" mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-green-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <FaHeadset className="text-lg text-green-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-700">Need Help?</div>
                          <div className="text-sm text-green-600">Contact Support</div>
                        </div>
                      </Link>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
