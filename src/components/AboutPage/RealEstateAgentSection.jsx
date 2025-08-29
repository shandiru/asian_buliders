// src/components/RealEstateAgentSection.jsx
import React from "react";

export default function RealEstateAgentSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Image */}
        <div className="lg:col-span-5 flex justify-center">
          <img
            src="/assets/img/all-images/agent/agent-img1.png" // <-- replace with your image path
            alt="Real Estate Agent"
            className="max-w-full h-auto rounded-xl"
          />
        </div>

        {/* Right: Text Content */}
        <div className="lg:col-span-7">
          <span className="inline-block text-sm font-semibold uppercase tracking-wide bg-green-100 text-green-700 px-4 py-1 rounded-full">
            Real Estate Agent
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Hi, I'm Alex Roy, Your Apartment Agent
          </h2>

          <p className="mt-5 text-gray-600">
            Hello, I'm Alex Roy, dedicated apartment agent at House. With years
            of experience in the real estate market, I am committed to finding
            you the perfect apartment that suits your needs and lifestyle.
            Whether you're looking for a cozy studio or spacious.
          </p>

          <p className="mt-4 text-gray-600">
            Discover the essence of luxury: our exclusive property in Dallas,
            where timeless elegance and modern best comfort converge.
          </p>

          <div className="mt-8">
            <a
              href="/apartment-v1.html"
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md shadow-md transition-colors"
            >
              View Our Property
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
