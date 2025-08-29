import React from "react";

// Sections from components/HomePage
import ApartmentsSection from "../components/AboutPage/ApartmentsSection.jsx";

import TestimonialsSection from "../components/HomePage/TestimonialsSection.jsx";
import CityApartmentSection from "../components/AboutPage/CityApartmentSection.jsx";
import RealEstateAgentSection from "../components/AboutPage/RealEstateAgentSection.jsx";

export default function About() {
  return (
    <div>


       <section >
        <RealEstateAgentSection />
      </section>
         <section >
        <CityApartmentSection />
      </section>
       <section >
         <TestimonialsSection />
        </section>

       <section >
        <ApartmentsSection />
      </section>
      


     
    </div>
  );
}
