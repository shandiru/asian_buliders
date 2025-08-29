// src/components/BestPropertiesSection.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  HiMiniChevronLeft,
  HiMiniChevronRight,
  HiMiniArrowUpRight,
} from "react-icons/hi2";
import { LuBedDouble, LuBath, LuSquare } from "react-icons/lu";
import { FaPlay } from "react-icons/fa6";

/** ---------- Small image carousel (unchanged structure) ---------- */
function MiniCarousel({ images = [], start = 0, ariaLabel = "carousel" }) {
  const [idx, setIdx] = useState(images.length ? start % images.length : 0);
  const prev = () => setIdx((p) => (p - 1 + images.length) % images.length);
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

/** ---------- “25+ Years” stat card (unchanged structure) ---------- */
function YearsCard({ years = 25, avatarSrcs = ["/a1.jpg", "/a2.jpg", "/a3.jpg"] }) {
  return (
    <div className="rounded-2xl bg-[#E7C873]/30 p-6 sm:p-7">
      <div className="text-4xl font-extrabold text-slate-900">{years}+</div>
      <p className="mt-2 text-sm font-medium text-slate-700">Years Of Experience</p>

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

/** ---------- Video thumbnail card (unchanged structure) ---------- */
function VideoCard({ thumbnail = "/video-thumb.jpg", href = "#" }) {
  return (
    <a href={href} className="group block relative rounded-2xl overflow-hidden">
      <img src="home-2.png" alt="Video preview" className="h-full w-full object-cover" />
      <span className="absolute left-4 bottom-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-900 text-white shadow-lg group-hover:scale-105 transition">
        <FaPlay className="w-4 h-4" />
      </span>
    </a>
  );
}

/** ---------- Main component (positions unchanged; only slow animations added) ---------- */
export default function BestPropertiesSection({
  // Headings
  badge = "OUR BEST PROPERTIES",
  title = ["Explore Our Premier Of", "Single Property Retreat"],

  // Mini carousels (left top)
  leftCarouselA = ["/home-2.png", "/home-1.png", "/home-3.png"],
  leftCarouselB = ["/home-2.png", "/home-1.png", "/home-3.png"],

  // Stat + video images (left bottom)
  years = 25,
  avatars = ["/avar.png", "/avar.png", "/avar.png"],
  videoThumb = "/avar.png",
  videoHref = "https://www.youtube.com/watch?v=Y8XpQpW5OVY",

  // Featured property (right)
  featuredImg = "/home-2.png",
  featuredTitle = "Luxury Suite Villa",
  featuredBeds = 2,
  featuredBaths = 2,
  featuredArea = "2000 sq",
  featuredHref = "#",
  swirlSvg = null, // optional overlay asset
}) {
  const rootRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Observe when section enters/leaves viewport (no layout changes)
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={rootRef} className="bg-white py-12 sm:py-16 relative overflow-hidden">
      {/* Slow, soft keyframes (no Tailwind config needed) */}
      <style>{`
        @keyframes fadeUpSlow {
          0%   { opacity: 0; transform: translateY(64px) }
          100% { opacity: 1; transform: translateY(0) }
        }
        @keyframes slideRightSlow {
          0%   { opacity: 0; transform: translateX(80px) }
          100% { opacity: 1; transform: translateX(0) }
        }
        @keyframes popSlow {
          0%   { opacity: 0; transform: translateY(36px) scale(.97) }
          100% { opacity: 1; transform: translateY(0) scale(1) }
        }
        .anim-fade-up   { animation: fadeUpSlow 2.2s cubic-bezier(.2,.8,.2,1) forwards }
        .anim-slide-r   { animation: slideRightSlow 2.2s cubic-bezier(.2,.8,.2,1) forwards }
        .anim-pop       { animation: popSlow 2.1s cubic-bezier(.2,.8,.2,1) forwards }
        .pre-hide       { opacity: 0; transform: translateY(40px) } /* prevents initial flash */
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header (unchanged structure) */}
        <div className={`text-center mb-10 sm:mb-12 ${inView ? "anim-fade-up" : "pre-hide"}`} style={{ animationDelay: ".15s" }}>
          <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-emerald-900/15 bg-emerald-900/10 text-emerald-900">
            {badge}
          </span>
          <h2 className="mt-6 text-[32px] sm:text-4xl md:text-[44px] font-extrabold tracking-tight text-slate-900 leading-tight">
            {title[0]} <br className="hidden sm:block" />
            {title[1]}
          </h2>
        </div>

        {/* Content grid (positions unchanged) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT column */}
          <div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${inView ? "anim-fade-up" : "pre-hide"}`}
              style={{ animationDelay: ".35s" }}
            >
              <MiniCarousel images={leftCarouselA} start={0} ariaLabel="Left carousel A" />
              <MiniCarousel images={leftCarouselB} start={1} ariaLabel="Left carousel B" />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${inView ? "anim-fade-up" : "pre-hide"}`} style={{ animationDelay: ".6s" }}>
                <YearsCard years={years} avatarSrcs={avatars} />
              </div>
              <div className={`${inView ? "anim-fade-up" : "pre-hide"}`} style={{ animationDelay: ".8s" }}>
                <VideoCard thumbnail={videoThumb} href={videoHref} />
              </div>
            </div>
          </div>

          {/* RIGHT column */}
          <div className="relative">
            <div
              className={`overflow-hidden rounded-2xl ${inView ? "anim-slide-r" : "pre-hide"}`}
              style={{ animationDelay: ".55s" }}
            >
              <div className="aspect-[16/11] w-full relative">
                <img src={featuredImg} alt={featuredTitle} className="h-full w-full object-cover" />
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

            {/* Info card (same position) */}
            <div className={`absolute left-6 right-6 -bottom-6 ${inView ? "anim-pop" : "pre-hide"}`} style={{ animationDelay: "1.15s" }}>
              <div className="mx-auto rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-4 sm:p-5 flex items-center justify-between gap-4">
                <div>
                  <a href={featuredHref} className="text-base sm:text-lg font-semibold text-slate-900 hover:underline">
                    {featuredTitle}
                  </a>
                  <ul className="mt-2 flex items-center flex-wrap gap-3 text-[13px] text-slate-600">
                    <li className="inline-flex items-center gap-1.5">
                      <LuBedDouble className="w-4 h-4" /> x{featuredBeds}
                    </li>
                    <li className="inline-flex items-center gap-1.5">
                      <LuBath className="w-4 h-4" /> x{featuredBaths}
                    </li>
                    <li className="inline-flex items-center gap-1.5">
                      <LuSquare className="w-4 h-4" /> {featuredArea}
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
