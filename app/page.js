import AboutSection from '@/components/homepage/About'
import CategorySection from '@/components/homepage/Category'
import FAQSection from '@/components/homepage/FAQ'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/homepage/Hero'
import GlobalBanner from '@/components/homepage/Hero1'
import ImpactSection from '@/components/homepage/Stats'
import TestimonialSection from '@/components/homepage/Testimonials'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <GlobalBanner/>
      <CategorySection/>
      <AboutSection/>
      <ImpactSection/>
      <TestimonialSection/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}
