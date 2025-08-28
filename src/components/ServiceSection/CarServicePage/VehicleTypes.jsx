import { FaCarSide, FaTools, FaShieldAlt } from "react-icons/fa";

const vehicleCards = [
  {
    icon: <FaCarSide className="text-primary text-2xl" />,
    title: "Cars & Light Vehicles",
    description:
      "All makes and models of cars and light commercial vehicles",
  },
  {
    icon: <FaTools className="text-primary text-2xl" />,
    title: "Commercial Vehicles",
    description:
      "Vans, trucks, and commercial fleet maintenance",
  },
  {
    icon: <FaShieldAlt className="text-primary text-2xl" />,
    title: "Motorhomes",
    description:
      "Specialist motorhome and campervan services",
  },
];

export default function VehicleTypes() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            All Vehicle Types Welcome
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional service for cars, commercial vehicles, and motorhomes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {vehicleCards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 text-black flex flex-col gap-4 rounded-xl border border-gray-200 py-8 px-6 shadow-sm text-center"
            >
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
