"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
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

  const filtered = products.filter(
    (p) => activeCategory === "All" || p.category === activeCategory,
  );

  return (
    <div
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
      className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen"
    >
      {/* Header */}
      <div className="mb-6">
        <h1 style={{ color: "#0056B3" }} className="text-2xl font-bold">
          KRD Clean & Care
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Showing{" "}
          <span className="font-semibold text-gray-700">{filtered.length}</span>{" "}
          product{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in "${activeCategory}"` : ""}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-60 flex-shrink-0">
          {/* Sort By */}
          <div className="mb-4 overflow-hidden border border-gray-200 rounded-lg shadow-sm">
            <div
              style={{ backgroundColor: "#0056B3" }}
              className="text-white px-4 py-3 font-semibold text-sm tracking-wide uppercase"
            >
              Sort By
            </div>
            <div className="p-3 bg-white">
              <select
                className="w-full border border-gray-300 p-2 rounded text-sm outline-none"
                style={{ accentColor: "#0056B3" }}
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
            <div
              style={{ backgroundColor: "#0056B3" }}
              className="text-white px-4 py-3 font-semibold text-sm tracking-wide uppercase"
            >
              Category
            </div>
            <div className="divide-y divide-gray-100 bg-white">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="w-full flex items-center justify-between px-4 py-3 transition-colors text-left"
                    style={{
                      backgroundColor: isActive ? "#e8f1fb" : "white",
                      color: isActive ? "#0056B3" : "#374151",
                      borderLeft: isActive
                        ? "3px solid #0056B3"
                        : "3px solid transparent",
                    }}
                  >
                    <span className="text-sm font-medium">{cat}</span>
                    <ChevronRight
                      size={15}
                      style={{ color: isActive ? "#0056B3" : "#9ca3af" }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-60 text-gray-400">
              <p className="text-lg font-medium">No products found</p>
              <p className="text-sm mt-1">Try selecting a different category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered
                .slice()
                .sort((a, b) => {
                  if (sortOrder === "az") return a.title.localeCompare(b.title);
                  if (sortOrder === "za") return b.title.localeCompare(a.title);
                  return 0;
                })
                .map((product) => (
                  <div
                    key={product.id}
                    className="border border-gray-200 rounded-xl p-4 flex flex-col bg-white transition-all hover:shadow-lg"
                  >
                    {/* Product Image */}
                    <div
                      className="aspect-square w-full rounded-lg mb-4 flex items-center justify-center overflow-hidden"
                    
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain p-2"
                      />
                    </div>
                    {/* Category Badge */}
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full self-start mb-3"
                      style={{
                        backgroundColor: "#e8f1fb",
                        color: "#0056B3",
                      }}
                    >
                      {product.category}
                    </span>
                    {/* Title */}
                    <h3 className="text-sm font-semibold text-gray-800 mb-4 flex-grow leading-snug">
                      {product.title}
                    </h3>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <button
                        className="flex-1 text-white py-2 rounded-lg font-semibold text-sm transition-colors shadow-sm"
                        style={{ backgroundColor: "#0056B3" }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#004494")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#0056B3")
                        }
                      >
                        Enquire Now
                      </button>
                      <button
                        className="flex-1 border py-2 rounded-lg font-medium text-sm transition-colors"
                        style={{
                          borderColor: "#0056B3",
                          color: "#0056B3",
                          backgroundColor: "white",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#e8f1fb")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "white")
                        }
                      >
                        Know More
                      </button>
                    </div>
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
