"use client";
import {
  FaSnowflake,
  FaThermometerHalf,
  FaTools,
  FaShieldAlt,
  FaRegCheckCircle,
} from "react-icons/fa";

const SECTION_BG = "#FFFFFF";
const CARD_BG = "#F5F5F5";
const ICON_BOX_BG = "#E8F3EC";
const ICON_FG = "#6AA874";
const CHECK_FG = "#2E7D32";

export default function AirConServices() {
  const services = [
    {
      title: "Air-Con Re-Gas Service",
      desc: "Professional refrigerant replacement to restore cooling performance",
     
      icon: <FaSnowflake className="h-5 w-5" style={{ color: ICON_FG }} />,
      points: [
        "Complete system evacuation",
        "Fresh refrigerant refill",
        "Leak detection check",
        "Sanatisation cleaning",
      ],
    },
    {
      title: "System Diagnostics",
      desc: "Comprehensive air conditioning system health check and diagnosis",
     
      icon: <FaThermometerHalf className="h-5 w-5" style={{ color: ICON_FG }} />,
      points: [
        "Temperature testing",
        "Pressure analysis",
        "Component inspection",
        "Fault code reading",
        "Nitrogen leak down test",
      ],
    },
    {
      title: "Component Repair",
      desc: "Professional repair and replacement of air conditioning components",
    
      icon: <FaTools className="h-5 w-5" style={{ color: ICON_FG }} />,
      points: [
        "Compressor service",
        "Condenser repair",
        "Evaporator maintenance",
        "Pipe replacement",
      ],
    },
    {
      title: "Preventive Maintenance",
      desc: "Regular maintenance to prevent costly air conditioning failures",
     
      icon: <FaShieldAlt className="h-5 w-5" style={{ color: ICON_FG }} />,
      points: [
        "Filter replacement",
        "System cleaning",
        "Leak prevention",
        "Annual service",
      ],
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: SECTION_BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
            Professional Air Conditioning Services
          </h2>
          <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
            Comprehensive air conditioning solutions for optimal cabin comfort and system performance
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 rounded-xl py-6 shadow-sm hover:shadow-lg transition-shadow"
              style={{ backgroundColor: CARD_BG }}
            >
              <div className="grid auto-rows-min items-start gap-1.5 px-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: ICON_BOX_BG }}
                    >
                      {s.icon}
                    </div>
                    <div className="text-xl font-heading font-bold text-gray-900">
                      {s.title}
                    </div>
                  </div>
                 
                </div>
                <div className="text-gray-600 font-body text-base">
                  {s.desc}
                </div>
              </div>

              <div className="px-6">
                <ul className="space-y-2">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-center text-sm font-body">
                      <FaRegCheckCircle
                        className="h-4 w-4 mr-2 flex-shrink-0"
                        style={{ color: CHECK_FG }}
                      />
                      {p}
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
