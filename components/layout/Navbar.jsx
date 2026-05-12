'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact us', href: '/contact' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <nav className="fixed bg-white border-b border-gray-100 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/navbar/logo.png"
                alt="Logo"
                width={150}
                height={64}
                className="h-12 w-auto md:h-16 object-contain"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-700 text-sm font-medium hover:text-[#0056B3] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <button onClick={() => setShowSearch(true)} className="text-gray-600 hover:text-[#0056B3]">
                <Search size={20} />
              </button>
              <a href='tel:911234567890' className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2" />
                <span className="text-sm font-medium">Phone</span>
              </a>
              <button 
                onClick={() => setShowQuote(true)}
                className="bg-[#0056B3] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button onClick={() => setShowSearch(true)} className="text-gray-600">
                <Search size={20} />
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-white border-b border-gray-100`}>
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block px-3 py-3 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => { setShowQuote(true); setIsOpen(false); }}
              className="w-full bg-[#0056B3] text-white px-4 py-3 rounded-md font-semibold mt-4"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </nav>

      {/* --- POPUP MODALS --- */}

      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-20 bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-2xl p-6 relative">
            <button onClick={() => setShowSearch(false)} className="absolute right-4 top-4 text-gray-400 hover:text-black">
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">Search Products</h2>
            <form onSubmit={handleSearchSubmit} className="flex gap-2">
              <input 
                type="text" 
                placeholder="Search for categories or products..." 
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit" className="bg-[#0056B3] text-white px-6 py-2 rounded-md font-medium">Search</button>
            </form>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      {showQuote && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white w-full max-w-md rounded-lg shadow-2xl p-8 relative">
            <button onClick={() => setShowQuote(false)} className="absolute right-4 top-4 text-gray-400 hover:text-black">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Request a Quote</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input type="tel" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+91 00000-00000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#0056B3] text-white py-3 rounded-md font-bold hover:bg-blue-700 transition-colors">
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;