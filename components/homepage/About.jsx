import Image from "next/image";
import aboutIcon1 from "@/public/homepage/aboutIcon1.png";
import aboutIcon2 from "@/public/homepage/aboutIcon2.png";
import about3 from "@/public/homepage/about3.jpg";
import about4 from "@/public/homepage/about4.jpg";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-12 md:py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image Composition */}
        <div className="relative flex items-center justify-center min-h-[450px] md:min-h-[600px] lg:min-h-[700px]">
          {/* Main Large Oval Image */}
          <div className="relative w-[260px] h-[400px] sm:w-[320px] sm:h-[480px] md:w-[420px] md:h-[600px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
            <Image
              src={about4}
              alt="Professional cleaner"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 260px, 420px"
              priority
            />
          </div>

          {/* Secondary Smaller Oval Image */}
          <div className="absolute -bottom-4 -right-2 sm:right-4 md:right-0 w-[150px] h-[230px] sm:w-[180px] sm:h-[280px] md:w-[220px] md:h-[340px] rounded-full overflow-hidden border-8 border-white shadow-xl z-20 transition-transform hover:scale-105 duration-300">
            <Image
              src={about3}
              alt="Housekeeping staff"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 150px, 220px"
            />
          </div>

        

          {/* Decorative Background Element */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-10 blur-3xl opacity-60"></div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start">
          {/* <div className="inline-block bg-blue-50 text-[#0056B3] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
            Who We Are
          </div> */}

          <h2 className="text-3xl font-[Lato] md:text-5xl font-semibold text-[#0056B3] leading-[1.1]">
            Housekeeping Products <br className="hidden md:block" />
            <span className="text-gray-900">Clean Without Compromise</span>
          </h2>

          <p className="text-gray-600 font-[poppins] leading-relaxed text-sm md:text-base max-w-xl">
            KRD Clean And Care knows the real value of being reliable and sustainable in
            business—that is the essence of these products. Our cleaning range
            offers deep and lasting cleaning to clean every corner of your
            floor, ensuring safety with these cleaning solutions.
          </p>

          {/* Feature List */}
          <div className="space-y-6 md:space-y-8 mt-6 w-full text-left">
            {/* Residential */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-blue-100 flex items-center justify-center bg-blue-50/50 group-hover:bg-[#0056B3] transition-colors duration-300">
                <Image
                  src={aboutIcon1}
                  width={30}
                  height={30}
                  alt="Home Icon"
                  className=" transition-all"
                />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-red-500">Residential Cleaning</h4>
                <p className="text-gray-500 font-[poppins] text-sm mt-1 max-w-md">
                  Achieve your home a cleaner level, essential for residential
                  building, our home-based cleaning range keeps your home neat.
                </p>
              </div>
            </div>

            {/* Commercial */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-blue-100 flex items-center justify-center bg-blue-50/50 group-hover:bg-[#0056B3] transition-colors duration-300">
                <Image
                  src={aboutIcon2}
                  width={30}
                  height={30}
                  alt="Building Icon"
                  className="transition-all"
                />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-red-500">Commercial Cleaning</h4>
                <p className="text-gray-500 font-[poppins] text-sm mt-1 max-w-md">
                  Deep clean, chemical-deep, they work better than standard
                  surface cleaners for your commercial workspace.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6 w-full md:w-auto">
            <button className="w-full md:w-auto bg-[#0056B3] hover:bg-red-500 text-white font-bold py-4 px-10 rounded-md transition-all duration-300 uppercase text-sm tracking-widest">
              More About Us
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Wave Overlay */}
      <div className="absolute bottom-0 left-0 w-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#0056B3" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,208C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}