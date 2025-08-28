'use client'

import { FaCheckCircle } from 'react-icons/fa'

export default function ProfessionalCleaningProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side – Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Professional Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our advanced engine cleaning services use the latest technology and
              proven methods to safely remove carbon deposits, clean filters, and
              restore engine performance without dismantling your engine.
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Diagnostic Assessment</p>
                  <p className="text-sm text-gray-600">
                    Comprehensive engine diagnostics to identify cleaning requirements
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Professional Cleaning</p>
                  <p className="text-sm text-gray-600">
                    Advanced cleaning technology removes deposits safely and effectively
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Performance Testing</p>
                  <p className="text-sm text-gray-600">
                    Post-cleaning diagnostics to verify improved performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side – Recommendations Table */}
          <div className="bg-gray-50 rounded-lg shadow-md p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Recommendations</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Carbon Cleaning</span>
                <span className="font-semibold text-gray-900">Every 20,000 miles</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">DPF Service</span>
                <span className="font-semibold text-gray-900">As required</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">EGR Cleaning</span>
                <span className="font-semibold text-gray-900">Every 30,000 miles</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Preventive Service</span>
                <span className="font-semibold text-gray-900">Annually</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
