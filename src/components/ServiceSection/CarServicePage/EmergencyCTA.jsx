'use client'

import React from "react";
import { FaPhone } from "react-icons/fa";

const palette = {
  primary: "#4C9A45",           // Updated green background from your screenshot
  fgOnPrimary: "#FFFFFF",       // White text
  secondaryBg: "#C2C97A",       // Button (olive-beige)
  secondaryText: "#1F2A10",     // Dark text for button
  outline: "#FFFFFF",           // Outline for second button
};

export default function EmergencyCTA() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: palette.primary, color: palette.fgOnPrimary }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Book Your Service or MOT Today
        </h2>

        <p className="text-xl mb-8 opacity-90">
          Professional automotive services from qualified technicians with over 50 years of experience
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Call Button */}
          <a href="tel:+441623623759" className="inline-block">
            <button
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-colors"
              style={{
                backgroundColor: palette.secondaryBg,
                color: palette.secondaryText,
              }}
            >
              <FaPhone className="h-5 w-5" />
              Call +44 1623 623 759
            </button>
          </a>

          {/* Book MOT Button */}
          <button
            className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-colors"
            style={{
              backgroundColor: "transparent",
              color: palette.fgOnPrimary,
              border: `1px solid ${palette.outline}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = palette.fgOnPrimary;
              e.currentTarget.style.color = palette.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = palette.fgOnPrimary;
            }}
            onClick={() => {
              const el = document.getElementById("booking");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book MOT Test
          </button>
        </div>
      </div>
    </section>
  );
}
