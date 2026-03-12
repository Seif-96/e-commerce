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
import Link from 'next/link';
import Image from 'next/image';
// import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
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
              <Image className="w-auto" src={logo} alt="freshcart" width={50} height={50} />
            </Link>
            <form className='hidden lg:flex flex-1 max-w-2xl'>
              <Field orientation="horizontal" className="relative">
                <Input type="search" placeholder="Search for products, brands and more..." />
                <Button>
                  <FaSearch />
                </Button>
              </Field>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
