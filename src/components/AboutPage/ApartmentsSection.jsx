// File: ApartmentsSection.jsx
import React from "react";
import { FaBed, FaBath, FaVectorSquare } from "react-icons/fa";

const properties = [
  {
    title: "Apartment Complex",
    image: "/assets/img/all-images/apartment/apartment-img1.png",
    beds: 2,
    baths: 2,
    size: "1200 sq",
    link: "/apartment-single.html",
  },
  {
    title: "Diamond Apartment",
    image: "/assets/img/all-images/apartment/apartment-img2.png",
    beds: 2,
    baths: 2,
    size: "1400 sq",
    link: "/apartment-single.html",
  },
  {
    title: "Luxury Suite Villa",
    image: "/assets/img/all-images/apartment/apartment-img3.png",
    beds: 2,
    baths: 2,
    size: "1600 sq",
    link: "/apartment-single.html",
  },
];

export default function ApartmentsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-semibold tracking-wide uppercase bg-green-100 text-green-700 px-4 py-1 rounded-full">
            Apartment List
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Our Latest Property
          </h2>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  <a href={p.link}>{p.title}</a>
                </h3>

                <div className="mt-3 flex items-center text-gray-600 text-sm space-x-4">
                  <span className="flex items-center space-x-1">
                    <FaBed className="text-green-600" />
                    <span>x{p.beds}</span>
                  </span>
                  <span>|</span>
                  <span className="flex items-center space-x-1">
                    <FaBath className="text-green-600" />
                    <span>x{p.baths}</span>
                  </span>
                  <span>|</span>
                  <span className="flex items-center space-x-1">
                    <FaVectorSquare className="text-green-600" />
                    <span>{p.size}</span>
                  </span>
                </div>

                {/* View Button */}
                <div className="mt-4">
                  <a
                    href={p.link}
                    className="inline-block text-green-700 font-medium hover:underline"
                  >
                    View →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
