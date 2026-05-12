import AboutSection from "@/components/homepage/About";
import CategorySection from "@/components/homepage/Category";
import FAQSection from "@/components/homepage/FAQ";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/homepage/Hero";
import GlobalBanner from "@/components/homepage/Banner";
import ImpactSection from "@/components/homepage/Stats";
import TestimonialSection from "@/components/homepage/Testimonials";
import Navbar from "@/components/layout/Navbar";
import React from "react";
import Products from "@/components/homepage/Products";
import HowItWorks from "@/components/homepage/HowItWorks";

export default function page() {
  return (
    <div>
      <Hero />
      <CategorySection />
      <AboutSection />
      <Products />
      <ImpactSection />
      <TestimonialSection />
      <HowItWorks />
      <FAQSection />
      <GlobalBanner />
    </div>
  );
}
