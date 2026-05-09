// components/GlobalBanner.jsx
import hero1 from "@/public/homepage/hero1.png"
import Image from "next/image";

export default function GlobalBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0D47A1] flex items-center min-h-[500px] md:min-h-[600px]">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_#1976D2_0%,_#0D47A1_60%,_#0A2E6E_100%)]" />

      {/* Decorative circles - Scaled for mobile */}
      <div className="pointer-events-none absolute -top-10 -left-16 w-48 h-48 md:w-72 md:h-72 rounded-full bg-white opacity-[0.06]" />
      <div className="pointer-events-none absolute -bottom-10 right-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white opacity-[0.06]" />

      {/* Inner layout */}
      <div className="relative z-10 flex w-full items-center justify-center container mx-auto px-4">
        {/* Center content */}
        <div className="flex flex-1 flex-col items-center text-center justify-center gap-4 py-12 md:py-20">
          
          {/* Tagline */}
          <p className="text-white/70 text-[10px] md:text-[11px] uppercase tracking-[2px] font-bold">
Clean And Care          </p>

          {/* Headline */}
          <h1 className="font-black uppercase leading-[1.1] text-white m-0">
            <span className="block text-3xl sm:text-4xl md:text-5xl ">
                Power Up Your
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400 drop-shadow-sm">
              Clean Home!
            </span>
          </h1>

          {/* Product Image - Responsive Sizing */}
          <div className="flex justify-center w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[850px] transition-all duration-500">
            <Image
              src={hero1}
              alt="Global Cleaning Products" 
              priority 
              placeholder="blur" // Optional: if you want a smooth load
              className="w-full h-auto drop-shadow-2xl object-contain"
            />
          </div>

          {/* CTA Button */}
          <button className="group mt-4 inline-flex items-center gap-2 bg-white text-[#0D47A1] font-bold text-sm md:text-base px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]">
            <CartIcon />
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}