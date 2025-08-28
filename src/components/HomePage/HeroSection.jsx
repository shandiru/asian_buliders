// src/components/Hero.jsx
import React from "react";
import { FaLocationDot, FaPlay } from "react-icons/fa6";

const colors = {
  green: "#124D43", // left panel
};

function WavePattern() {
  return (
    <svg aria-hidden="true" className="absolute inset-0 w-full h-full opacity-[0.17]">
      <defs>
        <pattern id="waves" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <path
            d="M0 60 Q 30 30, 60 60 T 120 60 M0 90 Q 30 60, 60 90 T 120 90 M0 30 Q 30 0, 60 30 T 120 30"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#waves)" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative mt-5">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[72vh]">
          {/* Left panel */}
          <div className="relative lg:col-span-7 overflow-hidden">
            <div className="absolute inset-0" style={{ backgroundColor: colors.green }} />
            <WavePattern />
            <div className="relative z-10 px-6 lg:pl-12 lg:pr-10 py-12 lg:py-20">
              {/* Location pill */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white ring-1 ring-white/30 backdrop-blur">
                <FaLocationDot className="w-4.5 h-4.5" />
                <span className="font-semibold">
                  538 Joanie Fort Apt. 933 Louisiana
                </span>
              </div>

              <h1 className="mt-8 text-white font-extrabold tracking-tight leading-tight
                              text-[38px] sm:text-[48px] lg:text-[56px]">
                Welcome to Your <br /> Luxurious Haven
              </h1>

              <p className="mt-6 max-w-xl text-white/85 text-base sm:text-lg">
                Our exclusive property offers a seamless blend of luxury and comfort,
                designed to meet your every need. From the…
              </p>

              <div className="mt-10 flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-black/90 text-white font-semibold ring-1 ring-black/20 hover:bg-black"
                >
                  Schedule A Visit
                </a>

                <a
                  href="https://www.youtube.com/watch?v=Y8XpQpW5OVY"
                  className="inline-flex items-center gap-3 text-white"
                >
                  <span className="w-11 h-11 rounded-full bg-white/10 ring-1 ring-white/30 flex items-center justify-center">
                    <FaPlay className="w-4.5 h-4.5" />
                  </span>
                  <span className="font-medium">Video</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right image + price card (no arrow controls) */}
          <div className="relative lg:col-span-5">
            <img
              src="/assets/img/all-images/hero/hero-img1.png"
              alt="House"
              className="w-full h-full object-cover"
            />

            <div className="absolute right-6 bottom-8">
              <div className="flex items-center gap-4 px-5 py-3 rounded-full bg-white/90 backdrop-blur ring-1 ring-black/10 shadow-md">
                <img
                  src="/assets/img/all-images/others/others-img1.png"
                  alt="Luxury Suite Villa"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="pr-1">
                  <h3 className="text-slate-900 font-semibold leading-tight">
                    Luxury Suite Villa
                  </h3>
                  <p className="text-slate-700">$1.800,000</p>
                </div>
                {/* arrow removed as requested */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
