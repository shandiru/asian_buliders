// File: DiagnosticServices.jsx
import React from "react";
import {
  FaSearch,
  FaBolt,
  FaCheckCircle,
  FaChartLine,
  FaChartBar,
  FaGasPump,
  FaTachometerAlt,
} from "react-icons/fa";

/**
 * Palette tuned to your image:
 * - Primary green: #2E7D32
 * - Light border/shadow neutrals via Tailwind grays
 */
const PRIMARY = "#2E7D32";

export default function DiagnosticServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our Diagnostic Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From fault finding to performance tuning, we offer comprehensive diagnostic solutions
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vehicle Diagnostics */}
          <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 border-gray-200 hover:border-green-600/60 transition-colors">
            {/* Header */}
            <div className="grid auto-rows-min items-start gap-1.5 px-6">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="h-8 w-8 flex items-center justify-center rounded-full"
                  style={{ color: PRIMARY }}
                  aria-hidden
                >
                  <FaSearch className="h-8 w-8" />
                </div>
                <div className="font-semibold text-2xl">Vehicle Diagnostics</div>
              </div>
              <div className="text-gray-600 text-base">
                Professional fault finding and system analysis
              </div>
            </div>

            {/* Content */}
            <div className="px-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Feature icon={<FaCheckCircle />} label="Engine Management" />
                <Feature icon={<FaCheckCircle />} label="ABS Systems" />
                <Feature icon={<FaCheckCircle />} label="Airbag Systems" />
                <Feature icon={<FaCheckCircle />} label="Transmission" />
                <Feature icon={<FaCheckCircle />} label="Climate Control" />
                <Feature icon={<FaCheckCircle />} label="Electrical Systems" />
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-3">
                  Using professional diagnostic equipment to identify faults quickly and accurately
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
                    From £45
                  </span>
                  <span className="text-sm text-gray-600">+ parts if required</span>
                </div>
              </div>
            </div>
          </div>

          {/* ECU Remapping */}
          <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 border-gray-200 hover:border-green-600/60 transition-colors">
            {/* Header */}
            <div className="grid auto-rows-min items-start gap-1.5 px-6">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="h-8 w-8 flex items-center justify-center rounded-full"
                  style={{ color: PRIMARY }}
                  aria-hidden
                >
                  <FaBolt className="h-8 w-8" />
                </div>
                <div className="font-semibold text-2xl">ECU Remapping</div>
              </div>
              <div className="text-gray-600 text-base">
                Performance and efficiency enhancement tuning
              </div>
            </div>

            {/* Content */}
            <div className="px-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Mini icon={<FaChartLine className="text-blue-600" />} label="Stage 1 Remap" />
                <Mini icon={<FaChartBar className="text-blue-600" />} label="Stage 2 Remap" />
                <Mini icon={<FaGasPump className="text-green-600" />} label="Economy Tune" />
                <Mini icon={<FaTachometerAlt className="text-red-600" />} label="Performance Tune" />
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-3">
                  Professional ECU tuning for improved power, torque, and fuel efficiency
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
                    From £250
                  </span>
                  <span className="text-sm text-gray-600">Stage 1 remap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}

/* ----- Small helpers ----- */
function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-gray-800">
      <span className="h-5 w-5 flex items-center justify-center" style={{ color: "#16A34A" }}>
        {React.cloneElement(icon, { className: "h-5 w-5" })}
      </span>
      <span className="text-sm">{label}</span>
    </div>
  );
}

function Mini({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-gray-800">
      {React.cloneElement(icon, { className: (icon.props.className || "") + " h-5 w-5" })}
      <span className="text-sm">{label}</span>
    </div>
  );
}
