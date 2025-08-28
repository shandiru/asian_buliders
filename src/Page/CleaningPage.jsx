
import React from "react";

// Sections from components/HomePage
import EngineCleaningHero from "../components/ServiceSection/CleaningPage/EngineCleaningHero.jsx";
import EngineCleaningCards from "../components/ServiceSection/CleaningPage/EngineCleaningCards.jsx";
import EngineBenefits from "../components/ServiceSection/CleaningPage/EngineBenefits.jsx";
import EngineCleaningSigns from "../components/ServiceSection/CleaningPage/EngineCleaningSigns.jsx";
import ProfessionalCleaningProcess from "../components/ServiceSection/CleaningPage/ProfessionalCleaningProcess.jsx";
import EmergencyCTA from "../components/ServiceSection/CleaningPage/EmergencyCTA.jsx";

export default function Home() {
  return (
    <div>


          <section >
          <EngineCleaningHero/>
         </section>

         
          <section >
          < EngineCleaningCards/>
         </section>

          <section >
          <EngineBenefits/>
         </section>

           <section >
          <EngineCleaningSigns/>
         </section>
          <section >
          <ProfessionalCleaningProcess/>
         </section>

           <section >
          <EmergencyCTA/>
         </section>





        

    </div>
  );
}
