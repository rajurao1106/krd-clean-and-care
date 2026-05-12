import React from 'react';
import { ChevronDown } from 'lucide-react';

const ProductPage = () => {
  const categories = ["Showers", "Faucets", "Thermostat", "Basins", "Bath Tub"];
const products = [
  {
    id: 1,
    title: 'Rainshower Aqua 15" Ceiling shower 3 sprays',
    image: '/images/shower1.jpg',
  },
  {
    id: 2,
    title: 'Grohtherm Thermostatic shower mixer for 2 outlets...',
    image: '/images/mixer.jpg',
  },
  {
    id: 3,
    title: 'Rainshower Mono 310 Cube Head shower set...',
    image: '/images/shower2.jpg',
  },
];
  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-6 bg-white font-sans">
      
      {/* Sidebar - Filter Section */}
      <aside className="w-full md:w-64 flex-shrink-0">
        {/* Sort By */}
        <div className="mb-4 overflow-hidden border border-gray-200 rounded-sm">
          <div className="bg-[#002B49] text-white px-4 py-3 font-semibold text-lg">
            Sort By:
          </div>
          <div className="p-3 bg-gray-50">
            <select className="w-full border border-gray-300 p-2 rounded text-sm outline-none">
              <option>--Select--</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="border border-gray-200 rounded-sm">
          <div className="bg-[#002B49] text-white px-4 py-3 font-semibold text-lg">
            Category
          </div>
          <div className="divide-y divide-gray-100">
            {categories.map((cat) => (
              <button 
                key={cat} 
                className="w-full flex items-center justify-between px-4 py-4 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span className="text-[15px] font-medium">{cat}</span>
                <ChevronDown size={18} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content - Product Grid */}
      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg p-4 flex flex-col transition-shadow hover:shadow-md">
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

              {/* Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 bg-[#002B49] text-white py-2.5 rounded-md font-bold text-sm hover:bg-[#001f35] transition-colors">
                  Enquire Now
                </button>
                <button className="flex-1 border border-[#002B49] text-[#002B49] py-2.5 rounded-md font-medium text-sm hover:bg-gray-50 transition-colors">
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