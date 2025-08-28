import { FaExclamationTriangle, FaCircle } from "react-icons/fa";

const SectionCard = ({ title, description, items }) => (
  <div className="bg-white text-gray-800 flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-gray-200">
    <div className="px-6">
      <div className="flex items-center space-x-2 mb-2">
        <FaExclamationTriangle className="h-5 w-5 text-green-600" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <div className="px-6">
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start text-sm text-gray-700">
            <FaCircle className="h-2 w-2 mt-1 mr-2 text-green-600" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function EngineCleaningSigns() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            When Do You Need Engine Cleaning?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognize the warning signs that indicate your engine needs
            professional cleaning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <SectionCard
            title="Carbon Build-Up Signs"
            description="Signs your engine needs carbon cleaning"
            items={[
              "Loss of engine power",
              "Poor fuel economy",
              "Rough idling",
              "Engine knocking",
              "Failed emissions test",
              "Black exhaust smoke",
            ]}
          />

          <SectionCard
            title="DPF Problems"
            description="Signs your DPF needs cleaning"
            items={[
              "DPF warning light on dashboard",
              "Reduced engine power",
              "Increased fuel consumption",
              "Excessive exhaust smoke",
              "Strong diesel smell",
              "Engine going into limp mode",
            ]}
          />

          <SectionCard
            title="EGR Valve Issues"
            description="Signs your EGR valve needs cleaning"
            items={[
              "Engine management light",
              "Rough idle or stalling",
              "Reduced acceleration",
              "Increased emissions",
              "Poor fuel economy",
              "Engine knocking sounds",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
