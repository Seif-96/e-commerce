import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white fixed-bottom">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 gap-lg-12 text-gray-400">
            <div className="lg:col-span-4">
              <div className="bg-[#FFFFFF] py-2 px-4 w-fit rounded-lg mb-6">
                <Image
                  className="w-auto"
                  src="https://freshcart-route.vercel.app/_next/static/media/freshcart-logo.49f1b44d.svg"
                  alt="freshcart"
                  width={50}
                  height={50}
                />
              </div>
              <p className="mb-6 text-sm">
                FreshCart is your one-stop destination for quality products. From fashion to
                electronics, we bring you the best brands at competitive prices with a seamless
                shopping experience.
              </p>
              <div className="space-y-3 text-sm mb-6">
                <a href="tel:+1 (800) 123-4567" className="flex gap-2 items-center">
                  <FaPhoneAlt className="text-green-500" />
                  <span className="hover:text-green-500 cursor-pointer">+1 (800) 123-4567</span>
                </a>
                <a href="mailto:support@freshcart.com" className="flex gap-2 items-center">
                  <MdEmail className="text-green-500" />
                  <span className="hover:text-green-500 cursor-pointer">support@freshcart.com</span>
                </a>
                <div className="flex gap-2 items-center">
                  <FaMapMarkerAlt className="text-green-500" />
                  <span className="hover:text-green-500 cursor-pointer">
                    123 Commerce Street, New York, NY 10001
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="hover:cursor-pointer hover:bg-green-500 w-10 h-10 rounded-full bg-[#1E2939] flex justify-center items-center hover:text-white transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="hover:cursor-pointer hover:bg-green-500 w-10 h-10 rounded-full bg-[#1E2939] flex justify-center items-center hover:text-white transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="hover:cursor-pointer hover:bg-green-500 w-10 h-10 rounded-full bg-[#1E2939] flex justify-center items-center hover:text-white transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="hover:cursor-pointer hover:bg-green-500 w-10 h-10 rounded-full bg-[#1E2939] flex justify-center items-center hover:text-white transition-colors"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white text-lg mb-5">Shop</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">All Products</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Categories</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Brands</a>{' '}
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Electronics</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">{"Men's Fashion"}</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">{"Women's Fashion"}</a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white text-lg mb-5">Account</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">My Account</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Order History</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Wishlist</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Shopping Cart</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Sign In</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Create Account</a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white text-lg mb-5">Support</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Contact Us</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Help Center</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Shipping Info</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Returns & Refunds</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Track Order</a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white text-lg mb-5">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Terms of Service</a>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container flex justify-between mx-auto px-4 py-6">
            <p className="text-gray-500 text-sm">© 2026 FreshCart. All rights reserved.</p>
            <div className="flex gap-5 text-sm">
              <div className="flex gap-2 items-center text-gray-500">
                <FaCreditCard />
                <span className="text-sm">Visa</span>
              </div>
              <div className="flex gap-2 items-center text-gray-500">
                <FaCreditCard />
                <span className="text-sm">Mastercard</span>
              </div>
              <div className="flex gap-2 items-center text-gray-500">
                <FaCreditCard />
                <span className="text-sm">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
