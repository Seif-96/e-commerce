import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white fixed-bottom">
        <div className="container mx-auto px-4 py-12">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 gap-lg-12"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 gap-lg-12">
            <div className="lg:col-span-4">
              <div className="bg-[#FFFFFF] py-2 px-4 rounded-lg">
                <Image
                  className="w-100"
                  src="https://freshcart-route.vercel.app/_next/static/media/freshcart-logo.49f1b44d.svg"
                  alt="freshcart"
                  width={50}
                  height={50}
                />
              </div>
              <p className="text-gray-400 size-1/4 w-auto">
                FreshCart is your one-stop destination for quality products. From fashion to
                electronics, we bring you the best brands at competitive prices with a seamless
                shopping experience.
              </p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </footer>
    </>
  );
}
