import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Page Components
import Home from "./Page/Home.jsx";
import AboutPage from "./Page/AboutPage.jsx";



export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
