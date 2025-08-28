import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Page Components
import Home from "./Page/Home.jsx";

import Wheelalignment from "./Page/wheelalignmentpage.jsx";
import AirConPage from "./Page/AirConPage.jsx";
import CarServicePage from "./Page/CarServicePage.jsx";
import CleaningPage from "./Page/CleaningPage.jsx";
import DiagnosticsPage from "./Page/DiagnosticsPage.jsx";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/services/wheel-alignment" element={<Wheelalignment />} />
          <Route path="/services/air-con" element={<AirConPage />} />
          <Route path="/services/car-service" element={<CarServicePage />} />
          <Route path="/services/cleaning" element={<CleaningPage />} />
           <Route path="/services/diagnostics" element={<DiagnosticsPage />} />
        

        
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
