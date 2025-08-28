import React from "react";

// Sections from components/HomePage
import AirConHero from "../components/ServiceSection/AirConPage/AirConHero";
import AirConServices from "../components/ServiceSection/AirConPage/AirConServices";

import WhyServiceAirConditioning from "../components/ServiceSection/AirConPage/WhyServiceAirConditioning";
import EmergencyCTA from "../components/ServiceSection/AirConPage/EmergencyCTA";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section >
       <AirConHero />
      </section>
         <section >
       <AirConServices />
      </section>
      
        <section >
       <WhyServiceAirConditioning />
      </section>

       <section >
       <EmergencyCTA />
      </section>





   
    </div>
  );
}
