import React, { useState } from "react";
import {
  HiMiniChevronLeft,
  HiMiniChevronRight,
  HiMiniArrowUpRight,
} from "react-icons/hi2";
import { LuBedDouble, LuBath, LuSquare } from "react-icons/lu";
import { FaPlay } from "react-icons/fa6";

/** Brand palette tuned to your screenshot */
const THEME = {
  accent: "bg-emerald-900",          // dark green
  accentText: "text-emerald-900",
  coin: "#E7C873",                    // gold
  cardBorder: "border-slate-200",
  text: "text-slate-900",
  muted: "text-slate-600",
};

/* ---------- Small image carousel (no external library) ---------- */
function MiniCarousel({ images = [], start = 0, ariaLabel = "carousel" }) {
  const [idx, setIdx] = useState(start % (images.length || 1));
  const prev = () =>
    setIdx((p) => (p - 1 + images.length) % images.length);
  const next = () => setIdx((p) => (p + 1) % images.length);

  if (!images.length) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="aspect-[4/3] w-full">
        <img
          src={images[idx]}
          alt={`${ariaLabel} ${idx + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Left / Right circular nav */}
      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow ring-1 ring-slate-200 hover:bg-slate-50"
      >
        <HiMiniChevronLeft className="w-5 h-5" />
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow ring-1 ring-slate-200 hover:bg-slate-50"
      >
        <HiMiniChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

/* ---------- “25+ Years” stat card ---------- */
function YearsCard({
  years = 25,
  avatarSrcs = ["/a1.jpg", "/a2.jpg", "/a3.jpg"],
}) {
  return (
    <div className="rounded-2xl bg-[#E7C873]/30 p-6 sm:p-7">
      <div className="text-4xl font-extrabold text-slate-900">
        {years}+
      </div>
      <p className="mt-2 text-sm font-medium text-slate-700">
        Years Of Experience
      </p>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex -space-x-2">
          {avatarSrcs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`client ${i + 1}`}
              className="h-9 w-9 rounded-full ring-2 ring-white object-cover"
            />
          ))}
        </div>

        <div className="ml-3 flex items-center justify-center h-9 w-9 rounded-full bg-white text-slate-900 ring-1 ring-slate-200">
          +
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-700">Our Happy Clients</p>
    </div>
  );
}

/* ---------- Video thumbnail card ---------- */
function VideoCard({ thumbnail = "/video-thumb.jpg", href = "#" }) {
  return (
    <a href={href} className="group block relative rounded-2xl overflow-hidden">
      <img
        src={thumbnail}
        alt="Video preview"
        className="h-full w-full object-cover"
      />
      <span className="absolute left-4 bottom-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-900 text-white shadow-lg group-hover:scale-105 transition">
        <FaPlay className="w-4 h-4" />
      </span>
    </a>
  );
}

/* ---------- Main component ---------- */
export default function BestPropertiesSection({
  // Headings
  badge = "OUR BEST PROPERTIES",
  title = ["Explore Our Premier Of", "Single Property Retreat"],

  // Mini carousels (left top)
  leftCarouselA = ["/p1.jpg", "/p2.jpg", "/p3.jpg"],
  leftCarouselB = ["/p4.jpg", "/p5.jpg", "/p6.jpg"],

  // Stat + video images (left bottom)
  years = 25,
  avatars = ["/avatar1.jpg", "/avatar2.jpg", "/avatar3.jpg"],
  videoThumb = "/p7.jpg",
  videoHref = "https://www.youtube.com/watch?v=Y8XpQpW5OVY",

  // Featured property (right)
  featuredImg = "/p8.jpg",
  featuredTitle = "Luxury Suite Villa",
  featuredBeds = 2,
  featuredBaths = 2,
  featuredArea = "2000 sq",
  featuredHref = "#",
  swirlSvg = null, // optional overlay asset
}) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-emerald-900/15 bg-emerald-900/10 text-emerald-900">
            {badge}
          </span>
          <h2 className="mt-6 text-[32px] sm:text-4xl md:text-[44px] font-extrabold tracking-tight text-slate-900 leading-tight">
            {title[0]} <br className="hidden sm:block" />
            {title[1]}
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: two carousels + stats/video row */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MiniCarousel
                images={leftCarouselA}
                start={0}
                ariaLabel="Left carousel A"
              />
              <MiniCarousel
                images={leftCarouselB}
                start={1}
                ariaLabel="Left carousel B"
              />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <YearsCard years={years} avatarSrcs={avatars} />
              <VideoCard thumbnail={videoThumb} href={videoHref} />
            </div>
          </div>

          {/* RIGHT: featured property big card */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="aspect-[16/11] w-full relative">
                <img
                  src={featuredImg}
                  alt={featuredTitle}
                  className="h-full w-full object-cover"
                />

                {/* Optional decorative swirl overlay (pass an SVG/PNG path if you have it) */}
                {swirlSvg && (
                  <img
                    src={swirlSvg}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-4 w-1/2 opacity-70"
                  />
                )}
              </div>
            </div>

            {/* Info card pinned to bottom-left */}
            <div className="absolute left-6 right-6 -bottom-6">
              <div className="mx-auto rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-4 sm:p-5 flex items-center justify-between gap-4">
                <div>
                  <a
                    href={featuredHref}
                    className="text-base sm:text-lg font-semibold text-slate-900 hover:underline"
                  >
                    {featuredTitle}
                  </a>
                  <ul className="mt-2 flex items-center flex-wrap gap-3 text-[13px] text-slate-600">
                    <li className="inline-flex items-center gap-1.5">
                      <LuBedDouble className="w-4 h-4" />
                      x{featuredBeds}
                    </li>
                    <li className="inline-flex items-center gap-1.5">
                      <LuBath className="w-4 h-4" />
                      x{featuredBaths}
                    </li>
                    <li className="inline-flex items-center gap-1.5">
                      <LuSquare className="w-4 h-4" />
                      {featuredArea}
                    </li>
                  </ul>
                </div>

                <a
                  href={featuredHref}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-emerald-900 text-white hover:bg-emerald-800 transition"
                  aria-label="Open"
                >
                  <HiMiniArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
