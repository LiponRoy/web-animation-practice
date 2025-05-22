'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-[#1e1e1e] text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div>
          {/* <h1 className="text-xl font-light">
            <span className="font-semibold">CLIPPERS WEB</span>
            <br />
            <span className="text-xs italic">an Image Retouching Agency</span>
          </h1> */}
          <Image
            src="/Logo.png" // put your logo in public/logo.png
            alt="Clippers Web Logo"
            width={150}
            height={40}
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="space-x-6 text-sm hidden md:block">
          <Link href="#">Services</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">About</Link>
          <Link href="#">Payment</Link>
        </nav>

        {/* CTA Button */}
        <div>
          <Link
            href="#"
            className="inline-flex items-center bg-orange-500 text-black text-sm font-medium px-4 py-2 rounded shadow hover:bg-orange-600 transition"
          >
            Get Free Trial <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </header>
  );
}
