"use client";

import React from "react";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id;

  // Product dhundne ke liye logic
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold">Product not found!</h2>
        <Link href="/" className="text-blue-600 underline mt-4">
          Back to Home
        </Link>
      </div>
    );
  }

  // Animation variants configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto p-6 min-h-screen font-sans"
    >
      {/* Back Button */}
      <motion.div variants={itemFadeUp}>
        <Link
          href="/"
          className="inline-block mb-8 text-[#0056B3] font-medium hover:underline"
        >
          ← Back to Products
        </Link>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm p-4 md:p-10">
        
        {/* LEFT SIDE: Product Image with Scale Entry */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0.98 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
          }}
          className="flex-1 bg-gray-50 rounded-2xl flex items-center justify-center p-8 border border-gray-200"
        >
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[500px] w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* RIGHT SIDE: Product Info with Cascade Side Animation */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } }
          }}
          className="flex-1 flex flex-col justify-center"
        >
          <motion.span 
            variants={itemFadeUp}
            className="bg-[#e8f1fb] text-[#0056B3] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start mb-4"
          >
            {product.category}
          </motion.span>

          <motion.h1 
            variants={itemFadeUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
          >
            {product.title}
          </motion.h1>

          {/* <p className="text-2xl font-semibold text-gray-800 mb-6">
            ₹499.00{" "}
            <span className="text-sm text-gray-400 font-normal ml-1">
              {" "}
              (Inc. all taxes)
            </span>
          </p> */}

          <motion.div variants={itemFadeUp} className="border-t border-gray-100 pt-6 space-y-4">
            <h3 className="font-bold text-gray-800 uppercase text-sm tracking-wider">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Premium quality {product.title} designed for maximum efficiency.
              Our formula is eco-friendly, powerful on stains, and safe for all
              surfaces. KRD Clean & Care ensures a germ-free environment with a
              long-lasting fragrance.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemFadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                window.open(
                  `https://wa.me/91XXXXXXXXXX?text=Hi, I am interested in ${product.title}`,
                )
              }
              className="flex-1 bg-[#0056B3] text-white py-4 px-8 rounded-xl font-bold hover:bg-[#004494] shadow-lg shadow-blue-100 transition-all"
            >
              Contact Us Now
            </motion.button>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}