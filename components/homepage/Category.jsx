import Image from "next/image";
import product1 from "@/public/homepage/product1.jpg";
import product2 from "@/public/homepage/product2.jpg";
import product3 from "@/public/homepage/product3.jpg";
import product4 from "@/public/homepage/product4.jpg";
import product5 from "@/public/homepage/product5.jpg";

const categories = [
  {
    name: "Glass & Multisurface Cleaner",
    image: product1, // Replace with your asset path
    isNew: true,
  },
  {
    name: "Milky Hurbal Floor Cleaner",
    image: product2,
    isNew: true,
  },
  {
    name: "Toilet Cleaner",
    image: product3,
  },
  {
    name: "Milky Perfumed Cleaner",
    image: product4,
  },
  {
    name: "Dish Wash Gel",
    image: product5,
  },
];

export default function CategorySection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title inspired by watermarked_img_7251667790891304263.png */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          EXPLORE OUR CLEANING CATEGORIES
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-full aspect-square mb-4 transition-transform duration-300 group-hover:scale-105">
                {/* Product Image */}
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Category Label */}
              <h3 className="text-center font-bold text-gray-900 text-sm md:text-base leading-tight uppercase tracking-wide">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
