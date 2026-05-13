"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

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

const products = [
  {
    id: 1,
    title: "Vis Clean Premium Floor Cleaner (Mogra) - 5L",
    category: "Floor Cleaner",
    image:
      "https://placehold.co/300x300/e8f4fd/0056B3?text=Floor+Cleaner\nMogra+5L",
    color: "#e8f4fd",
  },
  {
    id: 2,
    title: "Vis Clean R6 Action Toilet Cleaner - Ultra Shine 1L",
    category: "Toiletry Cleaner",
    image:
      "https://placehold.co/300x300/fff3e0/e65100?text=Toilet+Cleaner\nUltra+Shine",
    color: "#fff3e0",
  },
  {
    id: 3,
    title: "Vis Clean Herbal Neem & Lemon Floor Cleaner 1L",
    category: "Neem All",
    image:
      "https://placehold.co/300x300/e8f5e9/2e7d32?text=Neem+%26+Lemon\nFloor+Cleaner",
    color: "#e8f5e9",
  },
  {
    id: 4,
    title: "Vis Clean Premium Floor Cleaner (Rose) - 5L",
    category: "Floor Cleaner",
    image:
      "https://placehold.co/300x300/fce4ec/c62828?text=Floor+Cleaner\nRose+5L",
    color: "#fce4ec",
  },
  {
    id: 5,
    title: "Vis Clean Multi-Surface Glass Cleaner - 500ml",
    category: "Glass & House Cleaner",
    image:
      "https://placehold.co/300x300/e3f2fd/0277bd?text=Glass+Cleaner\n500ml",
    color: "#e3f2fd",
  },
  {
    id: 6,
    title: "Vis Clean Antibacterial Hand Wash - 250ml",
    category: "Bathroom Cleaner",
    image: "https://placehold.co/300x300/f3e5f5/6a1b9a?text=Hand+Wash\n250ml",
    color: "#f3e5f5",
  },
  {
    id: 7,
    title: "Vis Clean Dish Wash Gel (Lemon Power) - 1L",
    category: "Group Products",
    image:
      "https://placehold.co/300x300/fffde7/f57f17?text=Dish+Wash+Gel\nLemon+1L",
    color: "#fffde7",
  },
  {
    id: 8,
    title: "Vis Clean Industrial Degreaser - 20L",
    category: "Group Products",
    image:
      "https://placehold.co/300x300/eceff1/37474f?text=Industrial\nDegreaser+20L",
    color: "#eceff1",
  },
  {
    id: 9,
    title: "Vis Clean Phenyl (Green Neem) - 5L",
    category: "Phenolic",
    image:
      "https://placehold.co/300x300/f1f8e9/558b2f?text=Phenyl\nGreen+Neem+5L",
    color: "#f1f8e9",
  },
  {
    id: 10,
    title: "Vis Clean Bathroom Tile Cleaner - 1L",
    category: "Bathroom Cleaner",
    image:
      "https://placehold.co/300x300/e8eaf6/283593?text=Bathroom+Tile\nCleaner+1L",
    color: "#e8eaf6",
  },
  {
    id: 11,
    title: "Vis Clean Neem Floor Disinfectant - 2L",
    category: "Neem All",
    image:
      "https://placehold.co/300x300/dcedc8/33691e?text=Neem\nDisinfectant+2L",
    color: "#dcedc8",
  },
  {
    id: 12,
    title: "Vis Clean White Phenyl Concentrate - 5L",
    category: "Phenolic",
    image:
      "https://placehold.co/300x300/fafafa/455a64?text=White+Phenyl\nConcentrate+5L",
    color: "#fafafa",
  },
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
                      style={{ backgroundColor: product.color }}
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
