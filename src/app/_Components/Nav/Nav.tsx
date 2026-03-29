import React from 'react';
import { MdHeadsetMic } from 'react-icons/md';
import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <div className="bg-linear-to-br from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Contact Us</span>
          </nav>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ">
              <MdHeadsetMic className="text-3xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact Us</h1>
              <p className="text-white/80 mt-1">
                We&apos;d love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
