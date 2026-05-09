import Image from "next/image";
import product1 from "@/public/homepage/product1.jpg";
import product2 from "@/public/homepage/product2.jpg";
import product3 from "@/public/homepage/product3.jpg";
import product4 from "@/public/homepage/product4.jpg";
import product5 from "@/public/homepage/product5.jpg";

const categories = [
  { name: "Glass & Multisurface Cleaner", image: product1, isNew: true },
  { name: "Milky Herbal Floor Cleaner", image: product2, isNew: true },
  { name: "Toilet Cleaner", image: product3 },
  { name: "Milky Perfumed Cleaner", image: product4 },
  { name: "Dish Wash Gel", image: product5 },
];

export default function CategorySection() {
  return (
    <section className="relative bg-white py-14 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Explore our cleaning categories
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="group cursor-pointer">
              <div
                className="bg-white border border-gray-100 rounded-2xl
                              p-4 flex flex-col items-center gap-3
                              transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                              group-hover:-translate-y-1.5
                              group-hover:border-[#0056B3]
                              group-hover:shadow-[0_12px_32px_-8px_rgba(0,86,179,0.2)]"
              >
                {/* Image container */}
                <div
                  className="relative w-full aspect-square rounded-xl
                                bg-gray-50 group-hover:bg-blue-50
                                transition-colors duration-200 overflow-hidden"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain p-2"
                  />
                  {/* {cat.isNew && (
                    <span
                      className="absolute top-2 right-2
                                     text-white text-[9px] font-semibold
                                     tracking-widest uppercase px-2 py-0.5
                                     rounded-full"
                      style={{ backgroundColor: "#0056B3" }}
                    >
                      New
                    </span>
                  )} */}
                </div>

                {/* Label */}
                <p
                  className="text-xs md:text-sm font-medium text-gray-900
                               text-center leading-snug tracking-wide"
                >
                  {cat.name}
                </p>

                {/* Arrow — reveals on hover */}
                <div
                  className="flex items-center justify-center w-7 h-7
                                rounded-full border border-gray-200 text-gray-400
                                opacity-0 translate-y-1
                                group-hover:opacity-100 group-hover:translate-y-0
                                transition-all duration-200"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 6.5h8M7 3.5l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
