"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const BASE_URL = "https://krd-admin-backend-five.vercel.app";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${BASE_URL}/api/admin/products/${id}`);
        if (!res.ok) throw new Error("Requested product is unavailable.");
        const data = await res.json();

        // FIX: unwrap response — handles { product: {...} } OR direct object
        const productData = data.product || data;

        if (!productData || !productData.id) {
          throw new Error("Product data is missing or malformed.");
        }

        setProduct(productData);
        setSelectedImage(productData.featured_image || "");
      } catch (err) {
        setError(err.message || "Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // FIX: safely handle null/undefined path
  const getImageUrl = (path) => {
    if (!path) return "https://placehold.co/500x500?text=No+Image";
    return path.startsWith("http") ? path : `${BASE_URL}${path}`;
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 min-h-screen font-sans flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Loading Product...
          </p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-3xl border border-gray-200 text-center max-w-sm w-full shadow-xs">
          <h2 className="text-xl font-black text-gray-900 mb-2">Item Not Found</h2>
          <p className="text-sm text-gray-500 mb-6">
            {error || "Product could not be loaded."}
          </p>
          <Link
            href="/products"
            className="inline-block w-full bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Return to Catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50/40 min-h-screen font-sans py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-blue-600 transition-colors"
          >
            <span>←</span> Back to Collection
          </Link>
        </div>

        {/* Main Dual-Panel Container */}
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* Left Panel: Images */}
          <div className="p-6 sm:p-10 bg-gray-50/50 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-200">
            <div className="bg-white rounded-2xl border border-gray-200 flex items-center justify-center p-8 aspect-square relative shadow-xs">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={getImageUrl(selectedImage || product.featured_image)}
                alt={product.name || "Product Image"}
                className="max-h-[380px] w-auto object-contain"
                onError={(e) => {
                  e.target.src = "https://placehold.co/500x500?text=Image+Unavailable";
                }}
              />
            </div>

            {/* Thumbnail Strip */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2.5 mt-6 justify-center flex-wrap">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 rounded-xl border-2 overflow-hidden flex items-center justify-center p-1 bg-white transition-all ${
                      selectedImage === img
                        ? "border-blue-600 shadow-sm shadow-blue-100"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={getImageUrl(img)}
                      alt=""
                      className="max-h-full object-contain"
                      onError={(e) => {
                        e.target.src = "https://placehold.co/64x64?text=N/A";
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Panel: Details */}
          <div className="p-6 sm:p-10 flex flex-col justify-center bg-white">
            {product.category_name && (
              <span className="bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md self-start mb-4">
                {product.category_name}
              </span>
            )}

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 pb-6 mb-6 border-b border-gray-100">
              <span className="text-3xl font-black text-gray-900">
                ₹{parseFloat(product.price || 0).toFixed(2)}
              </span>
              {product.old_price && (
                <span className="text-sm text-gray-400 line-through font-semibold">
                  ₹{parseFloat(product.old_price).toFixed(2)}
                </span>
              )}
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded ml-1">
                GST Inc.
              </span>
            </div>

            {/* Specifications */}
            <div className="space-y-5">
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Product Overview
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description && product.description !== product.name
                    ? product.description
                    : "Premium grade formulation curated under KRD Clean & Care standards. Engineered for maximum deep-cleaning execution with zero surface decay footprint."}
                </p>
              </div>

              {/* Metrics Row */}
              {(product.weight || product.volume || product.sku) && (
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200/60 mt-2">
                  {product.sku && (
                    <div className="col-span-2 border-b border-gray-200 pb-2 mb-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                        SKU
                      </span>
                      <span className="text-sm font-mono font-bold text-gray-700">
                        {product.sku}
                      </span>
                    </div>
                  )}
                  {product.weight && (
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                        Net Weight
                      </span>
                      <span className="text-sm font-bold text-gray-800">
                        {product.weight}
                      </span>
                    </div>
                  )}
                  {product.volume && (
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                        Fluid Volume
                      </span>
                      <span className="text-sm font-bold text-gray-800">
                        {product.volume}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-10">
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/91XXXXXXXXXX?text=Hello KRD Team, I am interested in purchasing: ${encodeURIComponent(
                      product.name
                    )} (ID: ${product.id}). Please provide a quotation.`
                  )
                }
                className="w-full bg-[#0056B3] text-white text-center py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-none transition-all duration-200"
              >
                Order Via WhatsApp
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}