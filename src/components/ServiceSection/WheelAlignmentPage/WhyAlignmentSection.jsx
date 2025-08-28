import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const WhyWheelAlignment = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-6 leading-snug">
              Why Choose Professional <br /> Wheel Alignment?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Proper wheel alignment is essential for vehicle safety, performance, and cost savings.
              Our advanced equipment and experienced technicians ensure your wheels are perfectly
              aligned for optimal driving.
            </p>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Improved fuel efficiency',
                'Extended tyre life',
                'Better vehicle handling',
                'Reduced tyre wear',
                'Enhanced safety',
                'Smoother driving experience',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#4CAF50] w-5 h-5" />
                  <span className="text-black">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-[#f9f9f9] rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-black mb-4">
              Signs You Need Alignment
            </h3>
            <ul className="space-y-4 text-gray-700">
              {[
                'Vehicle pulls to one side while driving',
                'Steering wheel is off-center when driving straight',
                'Uneven or rapid tyre wear patterns',
                'Vibration in steering wheel or seat',
                'Squealing tyres during normal driving',
              ].map((sign, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-[#4CAF50] rounded-full flex-shrink-0" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWheelAlignment;
