"use client";
import React from "react";

// --- Colors tuned to your screenshot ---
const SECTION_BG = "#FFFFFF"; // whole section
const CARD_BG    = "#F5F5F5"; // soft grey card fill
const CARD_BR    = "#E5E7EB"; // subtle border
const HEADING    = "#0B0B0B"; // near-black h2/card titles
const BODY_TXT   = "#222222"; // body (slightly softer than pure black)
const MUTED_TXT  = "#5F6368"; // secondary paragraph
const PRICE_CLR  = "#2E7D32"; // green price
const BTN_BG     = "#F6F7F9"; // light grey button
const BTN_BR     = "#DADDE1"; // button border

const services = [
  {
    title: "Professional Tyre Fitting",
    desc: "Expert tyre installation with proper mounting and sealing",
    price: "From £15 per tyre",
  },
  {
    title: "Wheel Balancing",
    desc:
      "Precision wheel balancing to eliminate vibration and ensure smooth driving",
    price: "From £10 per wheel",
  },
  {
    title: "Tyre Pressure Check",
    desc:
      "Free tyre pressure monitoring and adjustment service",
    price: "Complimentary",
  },
  {
    title: "Tyre Condition Assessment",
    desc:
      "Professional inspection for wear patterns and safety concerns",
    price: "Free with service",
  },
];

export default function TyreServices() {
  return (
    <section className="py-16" style={{ backgroundColor: SECTION_BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title + Subhead */}
        <div className="text-center mb-12">
          <h2
            className="font-heading font-bold tracking-tight mb-3 text-4xl md:text-5xl"
            style={{ color: HEADING }}
          >
            Professional Tyre Services
          </h2>
          <p
            className="text-base md:text-lg font-body max-w-3xl mx-auto"
            style={{ color: MUTED_TXT }}
          >
            Expert tyre fitting, balancing, and maintenance services for all vehicle types
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="text-center rounded-2xl py-8 shadow-sm"
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BR}`,
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
              }}
            >
              <div className="px-6">
                <h3
                  className="text-2xl font-heading font-bold mb-3"
                  style={{ color: HEADING }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[15px] leading-6"
                  style={{ color: BODY_TXT }}
                >
                  {s.desc}
                </p>
              </div>

              <div className="px-6 mt-6">
                <div
                  className="text-xl font-semibold mb-5"
                  style={{ color: PRICE_CLR }}
                >
                  {s.price}
                </div>

                <button
                  className="w-full h-11 rounded-md text-sm font-semibold"
                  style={{
                    backgroundColor: BTN_BG,
                    color: HEADING,
                    border: `1px solid ${BTN_BR}`,
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
