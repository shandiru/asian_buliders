"use client";
import {
  FaBullseye,
  FaTachometerAlt,
  FaWrench,
  FaCar,
  FaRegCheckCircle,
} from "react-icons/fa";

// Palette
const SECTION_BG = "#FFFFFF";   // full section bg → white
const CARD_BG    = "#F5F5F5";   // soft grey from your image
const ICON_BOX_BG = "#E8F3EC";  // pale mint behind main icon
const ICON_FG     = "#6AA874";  // muted sage green for main icon
const CHECK_FG    = "#2E7D32";  // green check

export default function WheelAlignmentServices() {
  const services = [
    {
      title: "4-Wheel Laser Alignment",
      desc: "Precision laser technology ensures accurate wheel positioning for optimal vehicle performance",
      icon: <FaBullseye className="h-5 w-5" style={{ color: ICON_FG }} />,
      points: [
        "Laser precision measurement",
        "All four wheels aligned",
        "Computer-guided accuracy",
        "Detailed printout provided",
      ],
    },
    {
      title: "3D Wheel Alignment",
      desc: "Advanced 3D imaging technology for comprehensive wheel geometry analysis",
      icon: <FaTachometerAlt className="h-5 w-5" style={{ color: ICON_FG }} />,
      points: [
        "3D imaging technology",
        "Real-time measurements",
        "Comprehensive analysis",
        "Before/after comparison",
      ],
    },
    {
      title: "Castor & Camber Adjustment",
      desc: "Professional adjustment of wheel angles for improved handling and tyre wear",
      icon: <FaWrench className="h-5 w-5" style={{ color: ICON_FG }} />,
      points: [
        "Castor angle correction",
        "Camber adjustment",
        "Toe alignment",
        "Steering wheel centering",
      ],
    },
    {
      title: "Full Geometry Alignment",
      desc: "Complete 4-wheel geometry alignment service for all vehicle types",
      icon: <FaCar className="h-5 w-5" style={{ color: ICON_FG }} />,
      points: [
        "Complete geometry check",
        "All angles adjusted",
        "Commercial vehicles",
        "Motorhome alignment",
      ],
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: SECTION_BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
            Professional Wheel Alignment Services
          </h2>
          <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
            Advanced alignment technology for precise wheel positioning and
            optimal vehicle performance
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
                <div className="flex items-center space-x-3 mb-2">
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
