// src/components/EngineBenefits.jsx
import { FaChartLine, FaShieldAlt, FaFilter, FaTachometerAlt } from 'react-icons/fa';

export default function EngineBenefits() {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Benefits of Engine Cleaning
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional engine cleaning delivers immediate and long-term benefits for your vehicle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Box 1 */}
          <div className="bg-white flex flex-col gap-4 rounded-xl border border-gray-200 py-6 shadow-sm text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FaChartLine className="text-green-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Improved Performance</h3>
            <p className="text-sm text-gray-600 px-6">
              Restore lost power and engine responsiveness
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white flex flex-col gap-4 rounded-xl border border-gray-200 py-6 shadow-sm text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FaShieldAlt className="text-green-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Better Fuel Economy</h3>
            <p className="text-sm text-gray-600 px-6">
              Reduce fuel consumption and running costs
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white flex flex-col gap-4 rounded-xl border border-gray-200 py-6 shadow-sm text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FaFilter className="text-green-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Reduced Emissions</h3>
            <p className="text-sm text-gray-600 px-6">
              Lower harmful exhaust emissions
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-white flex flex-col gap-4 rounded-xl border border-gray-200 py-6 shadow-sm text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FaTachometerAlt className="text-green-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Extended Engine Life</h3>
            <p className="text-sm text-gray-600 px-6">
              Prevent costly engine damage and repairs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
