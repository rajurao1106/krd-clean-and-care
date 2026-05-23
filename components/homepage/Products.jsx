"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const BASE_URL = "http://localhost:3000";

// Map API category names → display filter labels
const CATEGORY_MAP = {
  "Floor Cleaners": "Floor Cleaner",
  "Toilet Care": "Toilet Care",
  "Glass & Surface": "Glass & Surface",
  "Bathroom Cleaner": "Bathroom Cleaner",
  "Dish Wash Gel": "Dish Wash Gel",
};

const FILTER_CATEGORIES = ["All", ...Object.values(CATEGORY_MAP)];

// Skeleton card for loading state
const SkeletonCard = () => (
  <div className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3">
    <div className="animate-pulse">
      <div className="aspect-[4/5] rounded-3xl bg-gray-200" />
      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="h-3 w-20 rounded bg-gray-200" />
        <div className="h-4 w-32 rounded bg-gray-200" />
      </div>
    </div>
  </div>
);

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dropdownRef = useRef(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `${BASE_URL}/api/admin/products?limit=100&page=1`
        );
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();

        // Normalize API response → component shape
        const normalized = data.products.map((p) => ({
          id: p.id,
          title: p.name,
          category: p.category_name
            ? CATEGORY_MAP[p.category_name] ?? p.category_name
            : "Uncategorized",
          image: p.featured_image
            ? `${BASE_URL}${p.featured_image}`
            : "/placeholder.jpg",
          price: p.price,
          slug: p.slug,
          isActive: p.is_active === 1,
        }));

        // Only show active products
        setProducts(normalized.filter((p) => p.isActive));
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: filteredProducts.length > 3,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="flex font-[Lato] max-lg:flex-col justify-between items-end max-lg:items-start max-lg:gap-4 mb-8"
      >
        <div>
          <motion.div
            variants={fadeInUpVariants}
            className="flex justify-start items-center"
          >
            <p className="text-center bg-blue-50 text-[#0056B3] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
              Our Products
            </p>
          </motion.div>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mt-1"
          >
            Our <span className="text-[#0056B3]">Best Sellers</span> Products
          </motion.h2>
        </div>
        <motion.div variants={fadeInUpVariants}>
          <Link
            href="/products"
            className="bg-[#0056B3] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-red-500 transition block text-center w-full sm:w-auto"
          >
            View All Products
          </Link>
        </motion.div>
      </motion.div>

      {/* Category Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative inline-block w-full sm:w-64 mb-10 z-20"
        ref={dropdownRef}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-sm font-medium text-gray-700 hover:border-[#0056B3] focus:outline-none transition-all"
        >
          <span>
            {activeCategory === "All" ? "Select Category" : activeCategory}
          </span>
          <ChevronDown
            size={18}
            className={`text-gray-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden"
            >
              <div className="max-h-60 overflow-y-auto py-1">
                {FILTER_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-5 py-2.5 text-sm transition-colors ${
                      activeCategory === cat
                        ? "bg-blue-50 text-[#0056B3] font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Error State */}
      {error && (
        <div className="text-center py-12 text-red-500 text-sm">{error}</div>
      )}

      {/* Carousel */}
      {!error && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1 sm:-translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-[#0056B3] hover:text-white hover:border-[#0056B3] transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-[#0056B3] hover:text-white hover:border-[#0056B3] transition"
          >
            <ChevronRight size={20} />
          </button>

          <div ref={emblaRef} className="overflow-hidden px-2">
            <div className="flex">
              {loading
                ? // Skeleton placeholders while fetching
                  Array.from({ length: 3 }).map((_, i) => (
                    <SkeletonCard key={i} />
                  ))
                : filteredProducts.length === 0
                ? // Empty state
                  <div className="w-full text-center py-16 text-gray-400 text-sm">
                    No products found in this category.
                  </div>
                : filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3"
                    >
                      <motion.div layout className="group relative">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              e.target.src = "/placeholder.jpg";
                            }}
                          />
                        </div>
                        <div className="mt-4 text-center">
                          <p className="text-sm text-gray-400 mb-1">
                            {product.category}
                          </p>
                          <h3 className="text-lg font-bold text-gray-900">
                            {product.title}
                          </h3>
                          <p className="text-sm font-medium text-[#0056B3] mt-1">
                            ₹{product.price}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  ))}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Products;