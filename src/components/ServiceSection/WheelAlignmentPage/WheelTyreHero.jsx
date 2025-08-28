// File: WheelTyreHero.jsx
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const palette = {
  primary: "#2F7D33",     // brand green
  gradTop: "#EAF5EA",     // light green
  gradBottom: "#FFFFFF",  // white
  heading: "#111827",     // dark text
  muted: "#374151",       // paragraph
  badgeBg: "#A4BE6A",     // badge bg
  badgeText: "#1F2A10",   // badge text
  outlineBorder: "rgba(17,24,39,0.15)", // outline btn border
};

export default function WheelTyreHero() {
  // Scroll to the quote form or contact section
  const handleQuoteClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4"
            style={{ backgroundColor: palette.badgeBg, color: palette.badgeText }}
          >
            Professional Wheel Services
          </span>

          {/* Heading */}
          <h1
            className="text-4xl lg:text-5xl font-black mb-6"
            style={{ color: palette.heading }}
          >
            Wheel Alignment &amp; <span style={{ color: palette.primary }}>Tyre Services</span>
          </h1>

          {/* Sub Copy */}
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: palette.muted }}
          >
            Precision wheel alignment and professional tyre services using
            advanced laser and 3D technology. Keep your vehicle running safely
            and efficiently with our expert technicians.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* Primary Button */}
            <a href="tel:+441623623759" className="inline-block">
              <button
                className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold"
                style={{ backgroundColor: palette.primary, color: "#FFFFFF" }}
              >
                <FaPhoneAlt className="h-5 w-5" />
                Book Service: +441623623759
              </button>
            </a>

            {/* Outline Button */}
            <button
              onClick={handleQuoteClick}
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-colors"
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
