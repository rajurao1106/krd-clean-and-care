import React from "react";
import { CheckCircle2 } from "lucide-react";
import about1 from "@/public/about/about1.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:pt-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content Side */}
        <div className="w-full lg:w-1/2 z-10">
          <h2 className="text-4xl lg:text-6xl font-[Lato] font-bold text-slate-900 leading-tight mb-6">
            Reliable, Affordable & Eco-Friendly Hygiene Solutions
          </h2>

          <p className="text-gray-600 text-lg mb-10 max-w-xl leading-relaxed">
            Founded in 2021, KRD Clean and Care Pvt Ltd is committed to
            providing premium cleaning solutions with a focus on quality and
            sustainability. We serve various industries with excellence from our
            base in Raipur.
          </p>

          {/* Features List */}
          <div className="space-y-6">
            {[
              {
                title: "Experience",
                desc: "Building a strong reputation in the Chhattisgarh industrial sector for high-performance cleaning manufacturing.",
              },
              {
                title: "Quality Assurance",
                desc: "Every Vis Clean product undergoes stringent checks to ensure superior sanitation and safety.",
              },
              {
                title: "Affordability",
                desc: "We provide cost-effective B2B and domestic solutions without compromising on chemical integrity.",
              },
              {
                title: "Eco-Friendly Practices",
                desc: "Our brand, Vis Clean, focuses on eco-friendly formulations, including herbal and non-toxic options.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#0056B3] flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <span className="font-bold text-slate-900">
                    {item.title}:
                  </span>{" "}
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Side */}
        <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center">
          {/* Main Image Container */}
          <div className="relative z-10 w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src={about1}
              alt="Cleaning Professional"
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
