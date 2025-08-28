import React from "react";

// Sections from components/HomePage
import HeroSection from "../components/HomePage/HeroSection.jsx";
import PropertyOverview from "../components/HomePage/PropertyOverview.jsx";
import AmenitiesSection from "../components/HomePage/AmenitiesSection.jsx";
import BestPropertiesSection from "../components/HomePage/BestPropertiesSection.jsx";
import BlogSection from "../components/HomePage/BlogSection.jsx";
import ScheduleTour from "../components/HomePage/ScheduleTour.jsx";
import TestimonialsSection from "../components/HomePage/TestimonialsSection.jsx";


export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section id="hero">
        <HeroSection />
      </section>
        <section >
        <PropertyOverview />
      </section>
      
        <section >
        <AmenitiesSection />
      </section>


      <section >
        <BestPropertiesSection />
      </section>



         <section >
        <TestimonialsSection />
      </section>
    
       <section >
        <ScheduleTour />
      </section>
    


       <section >
        <BlogSection />
      </section>
       
      


    </div>
  );
}
