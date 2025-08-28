'use client'

import React from "react";

export default function EmergencyCTA() {
  return (
    <section className="py-16 bg-[#4C9A45] text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
          Professional Diagnostics &amp; Remapping
        </h2>

        {/* Subheading */}
        <p className="text-lg lg:text-xl font-medium mb-8">
          Trust our qualified technicians with over 50 years of combined experience
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Book Button */}
          <button className="bg-[#C2C97A] text-[#1F2A10] font-semibold px-6 py-3 rounded-md hover:bg-[#b5bd6a] transition">
            Book Your Service
          </button>

          {/* Call Button */}
          <a
            href="tel:+44 1623 623 759"
            className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#4C9A45] transition"
          >
            Call +44 1623 623 759
          </a>
        </div>
      </div>
    </section>
  );
}
