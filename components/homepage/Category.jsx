import Image from "next/image";
import product1 from "@/public/homepage/product1.jpg";
import product2 from "@/public/homepage/product2.jpg";
import product3 from "@/public/homepage/product3.jpg";
import product4 from "@/public/homepage/product4.jpg";
import product5 from "@/public/homepage/product5.jpg";
import { HiOutlineArrowRight } from "react-icons/hi2";
import Link from "next/link";

const categories = [
  { name: "Glass & Surface", image: product1, isNew: true, link: "/products" },
  { name: "Floor Cleaners", image: product2, isNew: true, link: "/products" },
  { name: "Toilet Care", image: product3, link: "/products" },
  { name: "Milky Perfumed Cleaner", image: product4, link: "/products" },
  { name: "Dish Wash Gel", image: product5, link: "/products" },
];

export default function CategorySection() {
  return (
    <section className="relative bg-white px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-center uppercase text-xl font-semibold"></p>
          <div className="flex justify-center items-center">
            <p className="text-center bg-blue-50 text-[#0056B3] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
              Our Categories
            </p>
          </div>
          <h2 className="text-3xl text-center md:text-5xl font-semibold leading-tight text-gray-900">
            Explore our{" "}
            <span className="text-[#0056B3]">cleaning categories</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="group cursor-pointer">
              <div
                className="bg-white  rounded-2xl
                              p-4 flex flex-col items-center gap-3
                              transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                              "
              >
                {/* Image container */}
                <div
                  className="relative border border-gray-100 w-full shadow-md  group-hover:-translate-y-1.5
                              group-hover:border-[#0056B3]
                              group-hover:shadow-[0_12px_32px_-8px_rgba(0,86,179,0.2)] aspect-square rounded-full border
                                
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
                <Link href={"/products"}
                  className="flex items-center justify-center gap-2 px-3 py-1.5
             rounded-full border border-gray-200 text-gray-400
             opacity-0 translate-y-1
             group-hover:opacity-100 group-hover:translate-y-0
             group-hover:text-[#0056B3] group-hover:border-[#0056B3]
             transition-all duration-300 ease-out"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    View More
                  </span>
                  <HiOutlineArrowRight size={14} strokeWidth={3} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
