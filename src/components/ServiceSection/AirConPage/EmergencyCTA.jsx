// File: EmergencyCTA.jsx
import React from "react";
import { FaPhone } from "react-icons/fa";

const palette = {
  primary: "#3F8D3A",          // Green background
  fgOnPrimary: "#FFFFFF",      // White text
  secondaryBg: "#B9C26D",      // Olive button
  secondaryText: "#1F2A10",    // Dark text on olive
  outline: "#FFFFFF",          // White outline
};

export default function EmergencyCTA() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: palette.primary, color: palette.fgOnPrimary }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Keep Cool with Professional Air-Con Service
        </h2>

        <p className="text-xl mb-8 opacity-90">
          Expert air conditioning services from qualified technicians using professional equipment
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Call Button */}
          <a href="tel:+441623623759" className="inline-block">
            <button
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold"
              style={{
                backgroundColor: palette.secondaryBg,
                color: palette.secondaryText,
              }}
            >
              <FaPhone className="h-5 w-5" />
              Call +44 1623 623 759
            </button>
          </a>

          {/* Book Air-Con Button */}
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
          >
            Book Air-Con Service
          </button>
        </div>
      </div>
    </section>
  );
}
