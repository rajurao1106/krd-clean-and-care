import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      {/* Logo Container */}
      <div className="flex items-center">
        {/* Fixed: Use a direct string path for public folder assets */}
        <Image 
          src="/navbar/logo.png" 
          alt="J.K.D. Enterprises Logo" 
          width={150} 
          height={64}
          className="h-16 w-auto object-contain"
          priority
        />
      </div>

      {/* Navigation Menu */}
      <ul className="hidden lg:flex items-center space-x-10">
        <li>
          <Link href="/" className="text-gray-6 text-base hover:text-[#0056B3]">Home</Link>
        </li>
        <li>
          <Link href="/about" className="text-black text-base hover:text-[#0056B3] transition-colors">About us</Link>
        </li>
        <li>
          <Link href="/products" className="text-black text-base hover:text-[#0056B3] transition-colors">Products</Link>
        </li>
        <li>
          <Link href="/blog" className="text-black text-base hover:text-[#0056B3] transition-colors">Blog</Link>
        </li>
        <li>
          <Link href="/faq" className="text-black text-base hover:text-[#0056B3] transition-colors">FAQ</Link>
        </li>
        <li>
          <Link href="/contact" className="text-black text-base hover:text-[#0056B3] transition-colors">Contact us</Link>
        </li>
      </ul>

      {/* Action Items */}
      <div className="flex items-center space-x-8">
        {/* Search Icon */}
        <button className="" aria-label="Search">
          <Search size={18} />
        </button>

        {/* Contact Info */}
        <div className="flex items-center space-x-2">
        <Phone className="" size={18} />
        </div>

        {/* Call to Action Button */}
        <button className="bg-[#0056B3] text-white px-4 py-2 rounded-md shadow-md hover:opacity-90 transition-opacity">
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;