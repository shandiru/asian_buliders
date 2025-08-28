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
          {/* Badge */}
          <span
            className="inline-flex items-center justify-center rounded-md px-3 py-0.5 text-xs font-medium mb-4"
            style={{ backgroundColor: palette.badgeBg, color: palette.badgeText }}
          >
            Engine Performance Specialists
          </span>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-black mb-6" style={{ color: palette.heading }}>
            Engine <span style={{ color: palette.primary }}>Cleaning Services</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: palette.muted }}
          >
            Professional carbon cleaning, DPF cleaning, and EGR valve services to restore engine
            performance, improve fuel efficiency, and reduce emissions. Advanced cleaning
            technology for modern diesel and petrol engines.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* Call Button */}
            <a href="tel:+441623623759" className="inline-block">
              <button
                className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold"
                style={{ backgroundColor: palette.primary, color: "#FFFFFF" }}
              >
                <FaPhoneAlt className="h-5 w-5" />
                Book Service: +44 1623 623 759
              </button>
            </a>

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
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
