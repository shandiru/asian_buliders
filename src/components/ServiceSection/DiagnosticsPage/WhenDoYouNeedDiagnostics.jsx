// File: WhenDoYouNeedDiagnostics.jsx
import React from "react";
import {
  FaExclamationTriangle, // orange
  FaChartLine,           // red
  FaGasPump,             // green
  FaSearch,              // blue
} from "react-icons/fa";

export default function WhenDoYouNeedDiagnostics() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            When Do You Need Diagnostics?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t ignore these warning signs – early diagnosis can save you money
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Warning Lights */}
          <div className="text-center p-6 bg-white rounded-lg border shadow-sm">
            <FaExclamationTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Warning Lights</h3>
            <p className="text-sm text-gray-600">
              Engine management, ABS, or other dashboard warning lights
            </p>
          </div>

          {/* Poor Performance */}
          <div className="text-center p-6 bg-white rounded-lg border shadow-sm">
            <FaChartLine className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Poor Performance</h3>
            <p className="text-sm text-gray-600">
              Reduced power, poor acceleration, or rough running
            </p>
          </div>

          {/* High Fuel Consumption */}
          <div className="text-center p-6 bg-white rounded-lg border shadow-sm">
            <FaGasPump className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">High Fuel Consumption</h3>
            <p className="text-sm text-gray-600">
              Unexplained increase in fuel usage or poor economy
            </p>
          </div>

          {/* Strange Noises */}
          <div className="text-center p-6 bg-white rounded-lg border shadow-sm">
            <FaSearch className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Strange Noises</h3>
            <p className="text-sm text-gray-600">
              Unusual sounds from engine, transmission, or other systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
