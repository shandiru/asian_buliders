'use client'

import {
  FaAward,
  FaShieldAlt,
  FaUsers,
} from 'react-icons/fa'

export default function TechnicianExperienceSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Qualified & Experienced Technicians
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of qualified motor technicians and MOT testers bring decades of experience to every service. We use the latest diagnostic equipment and follow manufacturer specifications for all work.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaAward className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Qualified Motor Technicians</p>
                  <p className="text-sm text-gray-600">City &amp; Guilds certified technicians</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaShieldAlt className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Qualified MOT Testers</p>
                  <p className="text-sm text-gray-600">DVSA approved MOT testing station</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaUsers className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Family Business Since 1973</p>
                  <p className="text-sm text-gray-600">Over 50 years of trusted service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Service Intervals */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Intervals</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Basic Service</span>
                <span className="font-semibold text-gray-900">Every 6 months</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Full Service</span>
                <span className="font-semibold text-gray-900">Every 12 months</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">MOT Test</span>
                <span className="font-semibold text-gray-900">Annually (3+ years)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Cambelt</span>
                <span className="font-semibold text-gray-900">60,000–100,000 miles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
