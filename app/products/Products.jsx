import React from 'react';
import { ChevronDown } from 'lucide-react';

const ProductPage = () => {
  // Categories for KRD Clean and Care inventory
  const categories = ["Floor Cleaners", "Toilet Cleaners", "Glass Cleaners", "Hand Wash", "Dish Wash"];

  // Products featuring the 'Vis Clean' brand
  const products = [
    { id: 1, title: 'Vis Clean Premium Floor Cleaner (Mogra) - 5L', image: '/images/floor-cleaner.jpg' },
    { id: 2, title: 'Vis Clean R6 Action Toilet Cleaner - Ultra Shine 1L', image: '/images/toilet-cleaner.jpg' },
    { id: 3, title: 'Vis Clean Herbal Neem & Lemon Floor Cleaner 1L', image: '/images/herbal-cleaner.jpg' },
    { id: 4, title: 'Vis Clean Premium Floor Cleaner (Rose) - 5L', image: '/images/floor-cleaner.jpg' },
    { id: 5, title: 'Vis Clean Multi-Surface Glass Cleaner - 500ml', image: '/images/glass-cleaner.jpg' },
    { id: 6, title: 'Vis Clean Antibacterial Hand Wash - 250ml', image: '/images/hand-wash.jpg' },
    { id: 7, title: 'Vis Clean Dish Wash Gel (Lemon Power) - 1L', image: '/images/dish-wash.jpg' },
    { id: 8, title: 'Vis Clean Industrial Degreaser - 20L', image: '/images/degreaser.jpg' },
    { id: 9, title: 'Vis Clean Phenyl (Green Neem) - 5L', image: '/images/phenyl.jpg' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-6 bg-white font-sans">
      
      {/* Sidebar - Filter Section */}
      <aside className="w-full md:w-64 flex-shrink-0">
        {/* Sort By - Updated to #0056B3 */}
        <div className="mb-4 overflow-hidden border border-gray-200 rounded-sm">
          <div className="bg-[#0056B3] text-white px-4 py-3 font-semibold text-lg">
            Sort By:
          </div>
          <div className="p-3 bg-gray-50">
            <select className="w-full border border-gray-300 p-2 rounded text-sm outline-none focus:border-[#0056B3]">
              <option>--Select--</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Categories - Updated Header to #0056B3 */}
        <div className="border border-gray-200 rounded-sm shadow-sm">
          <div className="bg-[#0056B3] text-white px-4 py-3 font-semibold text-lg">
            Category
          </div>
          <div className="divide-y divide-gray-100">
            {categories.map((cat) => (
              <button 
                key={cat} 
                className="w-full flex items-center justify-between px-4 py-4 text-gray-700 hover:bg-blue-50 hover:text-[#0056B3] transition-colors group"
              >
                <span className="text-[15px] font-medium">{cat}</span>
                <ChevronDown size={18} className="text-gray-400 group-hover:text-[#0056B3]" />
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content - Product Grid */}
      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div key={`${product.id}-${index}`} className="border border-gray-200 rounded-lg p-4 flex flex-col transition-all hover:shadow-lg hover:border-[#0056B3]/30">
              {/* Product Image */}
              <div className="aspect-square w-full relative mb-4 flex items-center justify-center bg-white">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[15px] leading-tight font-medium text-gray-900 mb-6 flex-grow">
                {product.title}
              </h3>

              {/* Buttons - Primary is #0056B3, Secondary is Outline */}
              <div className="flex gap-2">
                <button className="flex-1 bg-[#0056B3] text-white py-2.5 rounded-md font-bold text-sm hover:bg-[#004494] transition-colors shadow-sm">
                  Enquire Now
                </button>
                <button className="flex-1 border border-[#0056B3] text-[#0056B3] py-2.5 rounded-md font-medium text-sm hover:bg-blue-50 transition-colors">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductPage;