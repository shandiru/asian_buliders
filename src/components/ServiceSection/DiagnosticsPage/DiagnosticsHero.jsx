import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const palette = {
  primary: "#2F7D33",     // brand green
  gradTop: "#EEF6EF",     // light green gradient top
  gradBottom: "#FFFFFF",  // white gradient bottom
  heading: "#111827",     // dark heading
  muted: "#374151",       // body text
  badgeBg: "#A4BE6A",     // olive badge
  badgeText: "#1F2A10",   // dark olive text
  outlineBorder: "rgba(17,24,39,0.15)", // outline btn
};

export default function EngineCleaningHero() {
  return (
    <section
      className="py-16"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${palette.gradTop}, ${palette.gradBottom})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-black mb-6" style={{ color: palette.heading }}>
            Vehicle Diagnostics  <span style={{ color: palette.primary }}>& ECU Remapping</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: palette.muted }}
          >
           Advanced fault finding and performance enhancement services using the latest diagnostic equipment
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

             {/* Quote Button */}
            <button
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold"
              style={{
                backgroundColor: "#FFFFFF",
                color: palette.heading,
                border: `1px solid ${palette.outlineBorder}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F9FAFB";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
              }}
            >
              Book Diagnostic
            </button>
            {/* Call Button */}
            <a href="tel:+441623623759" className="inline-block">
              <button
                className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold"
                style={{ backgroundColor: palette.primary, color: "#FFFFFF" }}
              >
                <FaPhoneAlt className="h-5 w-5" />
                Call +44 1623 623 759
              </button>
            </a>

           
          </div>
        </div>
      </div>
    </section>
  );
}
