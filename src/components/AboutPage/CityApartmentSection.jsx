// File: CityApartmentSection.jsx
import React from "react";

export default function CityApartmentSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6">
          <span className="inline-block text-sm font-semibold uppercase tracking-wide bg-green-100 text-green-700 px-4 py-1 rounded-full">
            City Apartment
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            We Offer The Best City Apartments
          </h2>

          <p className="mt-5 text-gray-600">
            We offer the best city apartments tailored to your urban lifestyle.
            Whether you’re seeking a chic downtown loft or a serene uptown
            retreat, our diverse portfolio ensures.
          </p>

          <p className="mt-4 text-gray-600">
            Dedicated apartment specialists, we are committed to providing
            personalized service, guiding you through every step of your
            apartment search with expertise.
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

        {/* Right: Single Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative optional spark / element (remove if not needed) */}
            {/* <img
              src="/assets/img/elements/elements12.png"
              alt="decorative"
              className="absolute -top-6 -left-6 w-10 h-10 select-none pointer-events-none"
            /> */}

            <img
              src="/assets/img/all-images/about/about-img1.png" // <-- set your single image path here
              alt="City Apartment"
              className="w-[640px] max-w-full h-[360px] md:h-[420px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
