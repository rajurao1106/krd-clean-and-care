"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const BASE_URL = "https://krd-admin-backend-five.vercel.app";

const ProductPage = () => {
  const [allProducts, setAllProducts] = useState([]); // Master copy for flawless filtering
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Clean 3x3 grid layout

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Single robust fetch for seamless catalog control
  useEffect(() => {
    const loadCatalog = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetching 100 items to ensure all categories (Floor, Glass, etc.) are available in memory
        const res = await fetch(`${BASE_URL}/api/admin/products?limit=100&page=1`);
        if (!res.ok) throw new Error("Failed to load catalog server data.");
        const data = await res.json();
        
        const productsList = data.products || [];
        setAllProducts(productsList);

        // Extract clean unique categories
        const catSet = new Set();
        productsList.forEach((p) => {
          if (p.category_name) catSet.add(p.category_name);
        });
        setCategories(["All", ...Array.from(catSet).sort()]);
      } catch (err) {
        setError(err.message || "Something went wrong while loading products.");
      } finally {
        setLoading(false);
      }
    };
    loadCatalog();
  }, []);

  // Compute filtered & sorted products instantly when dependencies change
  useEffect(() => {
    let result = [...allProducts];

    // 1. Category Filter Fix
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category_name === activeCategory);
    }

    // 2. Premium Client-Side Sorting
    if (sortOrder === "az") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "za") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOrder === "lowHigh") {
      result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOrder === "highLow") {
      result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset pagination on filter change
  }, [activeCategory, sortOrder, allProducts]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const getImageUrl = (path) =>
    path ? (path.startsWith("http") ? path : `${BASE_URL}${path}`) : "https://placehold.co/400x400?text=No+Image";

  return (
    <div className="bg-gray-50/50 min-h-screen pt-20 font-sans selection:bg-blue-500 selection:text-white">
   

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Modern Stats Banner */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xs">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Product Catalogue</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              {loading ? "Discovering collection..." : `Showing ${filteredProducts.length} premium products matching your criteria.`}
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">Sort Catalog</label>
            <select
              className="w-full sm:w-56 border border-gray-200 bg-gray-50 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-700 outline-none focus:border-blue-500 focus:bg-white transition-all cursor-pointer"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Featured / Default</option>
              <option value="az">Alphabetical: A to Z</option>
              <option value="za">Alphabetical: Z to A</option>
              <option value="lowHigh">Price: Low to High</option>
              <option value="highLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Sticky Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-24 z-10">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-xs overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-100 px-5 py-4 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">Categories</span>
                <span className="bg-gray-200/60 text-gray-700 px-2 py-0.5 rounded-md text-[10px] font-bold">{categories.length - 1}</span>
              </div>
              <div className="p-2 space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all text-left text-sm font-semibold ${
                      activeCategory === cat
                        ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span>{cat}</span>
                    {activeCategory === cat && (
                      <motion.span layoutId="activeIndicator" className="w-1.5 h-1.5 bg-white rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Main Product Listing Area */}
          <main className="flex-1 w-full">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 font-medium text-sm">
                ❌ {error}
              </div>
            )}

            {loading ? (
              /* High fidelity Shimmer skeleton loading grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl p-4 bg-white animate-pulse">
                    <div className="aspect-square w-full mb-4 bg-gray-100 rounded-xl" />
                    <div className="h-4 bg-gray-100 rounded w-1/3 mb-2" />
                    <div className="h-5 bg-gray-100 rounded w-3/4 mb-4" />
                    <div className="h-11 bg-gray-100 rounded-xl w-full" />
                  </div>
                ))}
              </div>
            ) : paginatedProducts.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24 bg-white border border-gray-200 rounded-2xl">
                <p className="text-gray-400 font-medium text-base">No active products found in this category.</p>
              </motion.div>
            ) : (
              <>
                {/* Clean Responsive Product Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence mode="popLayout">
                    {paginatedProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="bg-white border border-gray-200/80 rounded-2xl p-4 flex flex-col group hover:border-blue-500 hover:shadow-xl hover:shadow-gray-100/70 transition-all duration-300 relative overflow-hidden"
                      >
                        {/* Interactive Image Box */}
                        <div className="aspect-square w-full mb-4 flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 group-hover:bg-white transition-colors relative border border-gray-100">
                          <img
                            src={getImageUrl(product.featured_image)}
                            alt={product.name}
                            className="max-h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                        </div>

                        {/* Category Label */}
                        {product.category_name && (
                          <span className="text-[10px] uppercase tracking-widest font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md mb-2.5 self-start">
                            {product.category_name}
                          </span>
                        )}

                        {/* Title */}
                        <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 min-h-[40px] group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h3>

                        {/* Price metrics */}
                        <div className="flex items-baseline gap-2 mb-5 mt-1">
                          <span className="text-base font-black text-gray-900">
                            ₹{parseFloat(product.price).toFixed(2)}
                          </span>
                          {product.old_price && (
                            <span className="text-xs text-gray-400 line-through font-medium">
                              ₹{parseFloat(product.old_price).toFixed(2)}
                            </span>
                          )}
                        </div>

                        {/* View Action Button */}
                        <Link
                          href={`/products/${product.id}`}
                          className="w-full mt-auto bg-gray-900 text-white text-center py-3 rounded-xl font-semibold text-xs tracking-wider uppercase group-hover:bg-blue-600 transition-colors shadow-xs"
                        >
                          View Details
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Professional Pagination Module */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-12 border-t border-gray-200 pt-6">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => p - 1)}
                      className="px-4 py-2 rounded-xl border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-600 disabled:opacity-30 disabled:pointer-events-none hover:bg-gray-100 transition-all"
                    >
                      Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                      <button
                        key={pg}
                        onClick={() => setCurrentPage(pg)}
                        className={`w-10 h-10 rounded-xl text-xs font-bold transition-all ${
                          currentPage === pg
                            ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                            : "border border-gray-200 text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {pg}
                      </button>
                    ))}
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => p + 1)}
                      className="px-4 py-2 rounded-xl border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-600 disabled:opacity-30 disabled:pointer-events-none hover:bg-gray-100 transition-all"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;