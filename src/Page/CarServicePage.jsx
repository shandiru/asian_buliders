
import React from "react";

// Sections from components/HomePage
import MotHero from "../components/ServiceSection/CarServicePage/MotHero.jsx";
import AutomotiveServices from "../components/ServiceSection/CarServicePage/AutomotiveServices.jsx";
import MajorServices from "../components/ServiceSection/CarServicePage/MajorServices.jsx";
import VehicleTypes from "../components/ServiceSection/CarServicePage/VehicleTypes.jsx";
import TechnicianExperienceSection from "../components/ServiceSection/CarServicePage/TechnicianExperienceSection.jsx";
import EmergencyCTA from "../components/ServiceSection/CarServicePage/EmergencyCTA.jsx";

export default function Home() {
  return (
    <div>

      <section >
       <MotHero />
      </section>
      <section >
       <AutomotiveServices/>
      </section>
       <section >
       <MajorServices/>
      </section>

       <section >
       <VehicleTypes/>
      </section>

      <section >
       <TechnicianExperienceSection/>
      </section>
      
        <section >
       <EmergencyCTA/>
      </section>
      

    






   
    </div>
  );
}
