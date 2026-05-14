"use client";

import React, { useState } from "react";
import Link from "next/link"; // Link add kiya routing ke liye
import { products } from "@/data/products";

const categories = [
  "All",
  "Bathroom Cleaner",
  "Floor Cleaner",
  "Glass & House Cleaner",
  "Group Products",
  "Neem All",
  "Phenolic",
  "Toiletry Cleaner",
];

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Filter and Sort logic combined
  const displayProducts = products
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortOrder === "az") return a.title.localeCompare(b.title);
      if (sortOrder === "za") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-screen font-sans">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0056B3]">KRD Clean & Care</h1>
        <p className="text-gray-500 text-sm mt-1">
          Showing <span className="font-semibold text-gray-700">{displayProducts.length}</span> products
          {activeCategory !== "All" ? ` in "${activeCategory}"` : ""}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start"> {/* items-start zaroori hai sticky ke liye */}
        
        {/* Sidebar - Made Sticky */}
        <aside className="w-full md:w-64 flex-shrink-0 md:sticky md:top-6">
          {/* Sort By */}
          <div className="mb-4 overflow-hidden border border-gray-200 rounded-lg shadow-sm">
            <div className="bg-[#0056B3] text-white px-4 py-3 font-semibold text-xs uppercase tracking-wider">
              Sort By
            </div>
            <div className="p-3 bg-white">
              <select
                className="w-full border border-gray-300 p-2 rounded text-sm outline-none"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default">-- Select --</option>
                <option value="az">Name: A to Z</option>
                <option value="za">Name: Z to A</option>
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#0056B3] text-white px-4 py-3 font-semibold text-xs uppercase tracking-wider">
              Category
            </div>
            <div className="divide-y divide-gray-100 bg-white">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full flex items-center justify-between px-4 py-3 transition-colors text-left text-sm font-medium ${
                    activeCategory === cat 
                    ? "bg-[#e8f1fb] text-[#0056B3] border-l-4 border-[#0056B3]" 
                    : "text-gray-600 hover:bg-gray-50 border-l-4 border-transparent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          {displayProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <p className="text-lg font-medium">No products found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProducts.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-xl p-4 flex flex-col bg-white hover:shadow-xl transition-shadow">
                  <div className="aspect-square w-full mb-4 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                    <img src={product.image} alt={product.title} className="max-h-full object-contain p-4" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#0056B3] bg-[#e8f1fb] px-2 py-1 rounded mb-2 self-start">
                    {product.category}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-800 mb-4 flex-grow line-clamp-2">
                    {product.title}
                  </h3>
                  
                  {/* Know More Button linked to Dynamic Route */}
                  <Link 
                    href={`/products/${product.id}`}
                    className="w-full bg-[#0056B3] text-white text-center py-2.5 rounded-lg font-medium text-sm hover:bg-[#004494] transition-colors"
                  >
                    Know More
                  </Link>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductPage;