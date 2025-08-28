import React from "react";
import { HiMiniPlay } from "react-icons/hi2";

/**
 * ScheduleTour
 * 2-column CTA: image (left) + text/CTAs (right)
 * Left side intentionally has **no extra styling** (you can swap the image manually).
 */
export default function ScheduleTour({
  imageSrc = "/tour-left.jpg", // put your image in /public and change this path
  title = "Home Waiting For You Here Schedule A Tour",
  blurb = "Indulge in the epitome of luxury living at Luxury, where every amenity is meticulously designed to elevate your lifestyle.",
  onScheduleClick = () => {},
  onVideoClick = () => {},
}) {
  return (
    <section className="bg-[#0F3E36] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: image only (no overlays or extra styles) */}
          <div>
            <img
              src={imageSrc}
              alt="Schedule tour preview"
              className="w-full h-auto rounded-2xl object-cover shadow-xl"
            />
          </div>

          {/* RIGHT: content */}
          <div className="max-w-xl lg:max-w-2xl">
            {/* Pill */}
            <span className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold bg-white/10 ring-1 ring-white/15">
              SCHEDULE A TOUR
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-[34px] leading-tight sm:text-5xl font-extrabold">
              {title}
            </h2>

            {/* Blurb */}
            <p className="mt-6 text-lg text-white/80">
              {blurb}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex items-center gap-5">
              <button
                onClick={onScheduleClick}
                className="inline-flex items-center rounded-full px-6 py-3 text-slate-900 font-semibold bg-amber-300 hover:bg-amber-200 transition shadow"
              >
                Schedule A Visit
              </button>

              <button
                onClick={onVideoClick}
                className="inline-flex items-center gap-3 rounded-full px-4 py-2 bg-white/10 hover:bg-white/15 transition"
              >
                <span className="inline-grid place-items-center w-10 h-10 rounded-full bg-white/15">
                  <HiMiniPlay className="w-5 h-5" />
                </span>
                <span className="text-white font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
