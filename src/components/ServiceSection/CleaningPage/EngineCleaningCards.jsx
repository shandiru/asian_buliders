import React from "react";
import {
  FaBolt,
  FaFilter,
  FaTachometerAlt,
  FaCheckCircle,
} from "react-icons/fa";

// Card background color from the image (#F7F7F7)
const cardBgColor = "#F7F7F7";

const services = [
  {
    icon: <FaBolt className="text-primary w-5 h-5" />,
    title: "Carbon Engine Cleaning",
    description:
      "Professional carbon deposit removal for improved engine performance",
   
    duration: "45-60 minutes",
    items: [
      "Hydrogen carbon cleaning",
      "Intake valve cleaning",
      "Combustion chamber cleaning",
      "Improved fuel efficiency",
      "Restored engine power",
      "Reduced emissions",
      "War nut blasting "
    ],
  },
  {
    icon: <FaFilter className="text-primary w-5 h-5" />,
    title: "DPF Cleaning Service",
    description: "Diesel Particulate Filter cleaning and regeneration",
   
    duration: "2-3 hours",
    items: [
      "DPF regeneration",
      "Filter deep cleaning",
      "Diagnostic testing",
      "Pressure testing",
      "Performance restoration",
      "Warning light reset",
    ],
  },
  {
    icon: <FaTachometerAlt className="text-primary w-5 h-5" />,
    title: "EGR Valve Cleaning",
    description: "Exhaust Gas Recirculation valve cleaning and service",
  
    duration: "1-2 hours",
    items: [
      "EGR valve removal",
      "Professional cleaning",
      "Gasket replacement",
      "System testing",
      "Performance check",
      "Fault code clearing",
    ],
  },
];

export default function EngineCleaningCards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Engine Cleaning Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced cleaning technology to restore engine performance and
            efficiency
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-gray-200 hover:shadow-lg transition-shadow"
              style={{ backgroundColor: cardBgColor }}
            >
              <div className="px-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-base mb-2">
                  {service.description}
                </p>
                <div className="flex justify-between mt-2">
                  
                 
                </div>
              </div>
              <div className="px-6">
                <ul className="space-y-2">
                  {service.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <FaCheckCircle className="text-primary mr-2 h-4 w-4" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
