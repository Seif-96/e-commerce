import React from 'react';
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
// import { FaBars } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

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
              <Image className="w-auto" src={logo} alt="freshcart"/>
            </Link>
            <form className="hidden lg:flex flex-1 max-w-2xl">
              <Field orientation="horizontal" className="relative ">
                <Input type="search" className='w-full! px-5! py-5! pr-12! rounded-full! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/20! focus:border-green-500! transition-all! text-sm' placeholder="Search for products, brands and more..." />
                <Button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                  <FaSearch />
                </Button>
              </Field>
            </form>
            <nav className="hidden xl:flex items-center gap-6">
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
