import React from "react";

// Sections from components/HomePage
import WheelTyreHero from "../components/ServiceSection/WheelAlignmentPage/WheelTyreHero";
import WheelAlignmentServices from "../components/ServiceSection/WheelAlignmentPage/WheelAlignmentServices";
import TyreServices from "../components/ServiceSection/WheelAlignmentPage/TyreServices";
import WhyAlignmentSection from "../components/ServiceSection/WheelAlignmentPage/WhyAlignmentSection";
import EmergencyCTA from "../components/ServiceSection/WheelAlignmentPage/EmergencyCTA";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section >
       <WheelTyreHero />
      </section>
         <section >
       <WheelAlignmentServices />
      </section>
        <section >
       <TyreServices />
      </section>
        <section >
       <WhyAlignmentSection />
      </section>

       <section >
       <EmergencyCTA />
      </section>





   
    </div>
  );
}
