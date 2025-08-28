
import React from "react";

// Sections from components/HomePage
import DiagnosticsHero from "../components/ServiceSection/DiagnosticsPage/DiagnosticsHero.jsx";
import DiagnosticServices from "../components/ServiceSection/DiagnosticsPage/DiagnosticServices.jsx";
import EmergencyCTA from "../components/ServiceSection/DiagnosticsPage/EmergencyCTA.jsx";
import EcuRemapExplained from "../components/ServiceSection/DiagnosticsPage/EcuRemapExplained.jsx";
import WhenDoYouNeedDiagnostics from "../components/ServiceSection/DiagnosticsPage/WhenDoYouNeedDiagnostics.jsx";

export default function DiagnosticsPage() {
  return (
    <div>


          <section >
          <DiagnosticsHero/>
         </section>

           <section >
          <DiagnosticServices/>
         </section>
        
           <section >
          < EcuRemapExplained/>
         </section>

           <section >
          <WhenDoYouNeedDiagnostics/>
         </section>

           <section >
          <EmergencyCTA/>
         </section>

         





        

    </div>
  );
}
