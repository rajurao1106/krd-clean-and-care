'use client'; // Required for useState in Next.js App Router

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/about' },
    { name: 'Products', href: '/products' },
    // { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact us', href: '/contact' },
  ];

  return (
    <nav className="fixed bg-white border-b border-gray-100 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Container */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/navbar/logo.png" 
              alt="J.K.D. Enterprises Logo" 
              width={150} 
              height={64}
              className="h-12 w-auto md:h-16 object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation Menu */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-gray-700 text-sm font-medium hover:text-[#0056B3] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Action Items */}
          <div className="hidden lg:flex items-center space-x-6">
            <button aria-label="Search" className="text-gray-600 hover:text-[#0056B3]">
              <Search size={20} />
            </button>
            <a href='tel:911234567890' className="flex items-center text-gray-600">
              <Phone size={18} className="mr-2" />
              <span className="text-sm font-medium">Phone</span>
            </a>
            <button className="bg-[#0056B3] text-white px-5 py-2.5 rounded-md text-sm font-semibold shadow-sm hover:bg-blue-700 transition-all">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="text-gray-600">
              <Search size={20} />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-white border-b border-gray-100`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0056B3] rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 mt-4">
            <button className="w-full bg-[#0056B3] text-white px-4 py-3 rounded-md font-semibold text-center">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;