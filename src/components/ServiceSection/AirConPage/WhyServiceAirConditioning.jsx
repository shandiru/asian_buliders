"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyServiceAirConditioning = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-6 leading-snug">
              Why Service Your Air <br /> Conditioning?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Regular air conditioning maintenance ensures optimal performance, prevents costly repairs,
              and maintains healthy air quality in your vehicle cabin.
            </p>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Improved cabin comfort",
                "Better air quality",
                "Reduced fuel consumption",
                "Extended system life",
                "Prevents costly repairs",
                "Year-round comfort",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#4CAF50] w-5 h-5" />
                  <span className="text-black">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Signs Box */}
            <div className="bg-[#f9f9f9] rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-black mb-4">
                Signs You Need Air-Con Service
              </h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Weak or warm air from vents",
                  "Unusual odours when AC is running",
                  "Strange noises from air conditioning",
                  "Excessive moisture or fogging",
                  "System hasn't been serviced in 2+ years",
                ].map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-[#4CAF50] rounded-full flex-shrink-0" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* GAS TYPES — added UNDER the above box */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2">R1234YF</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The latest eco-friendly air con gas designed to keep your car cool while being kinder to the environment.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2">R134A</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A reliable air con gas used in many cars to deliver strong, consistent cooling.
                </p>
              </div>
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </section>
  );
};

export default WhyServiceAirConditioning;
