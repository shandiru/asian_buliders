import React, { useMemo, useState } from "react";
import { HiChevronUp, HiChevronDown, HiMiniPlay } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";

/* Theme */
const GOLD = "#DCC16E";
const GREEN_PILL = "bg-emerald-900/10 ring-emerald-900/15 text-emerald-900";

/* Demo data */
const DEFAULT_ITEMS = [
  {
    name: "Alexy Queen",
    role: "Happy Client",
    avatar: "/testimonials/t1.png",
    title: "Highly recommend Suite Luxury Suite Villa!",
    text:
      "“After staying at Luxury, I can confidently say it was one of the most luxurious best experiences of luxury villa.”",
    rating: 4,
  },
  {
    name: "Jofra Archer",
    role: "Happy Client",
    avatar: "/testimonials/t2.png",
    title: "Unforgettable Experience Of Luxury & Comfort!",
    text:
      "“Celebrated my anniversary at Property Villa, and it was beyond magical. The attention to detail, the of serene.”",
    rating: 5,
  },
];

function Stars({ value = 5 }) {
  return (
    <div className="flex gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={i < value ? "opacity-100" : "opacity-30"} />
      ))}
    </div>
  );
}

function Card({ item }) {
  return (
    <div className="rounded-2xl bg-white p-6 sm:p-7 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100"
          />
          <div>
            <div className="font-semibold text-slate-900">{item.name}</div>
            <div className="text-sm text-slate-500">{item.role}</div>
          </div>
        </div>
        <div className="text-3xl sm:text-4xl font-light text-slate-700/50">99</div>
      </div>

      <hr className="my-5 border-slate-200" />

      <div className="font-semibold text-slate-900">{item.title}</div>
      <p className="mt-3 text-slate-600 leading-relaxed">{item.text}</p>

      <div className="mt-5">
        <Stars value={item.rating} />
      </div>
    </div>
  );
}

export default function TestimonialsSection({
  badge = "Client Feedback",
  heading = "Hear What Our Client Say About Property",
  blurb = "Indulge in the epitome of luxury living at Luxury, where every amenity is meticulously designed to elevate your lifestyle.",
  ctaText = "View All Testimonials",
  onCtaClick = () => {},
  videoThumb = "/testimonials/video-thumb.png",
  onPlay = () => {},
  items = DEFAULT_ITEMS,
}) {
  const [index, setIndex] = useState(0);

  // ✅ Ensure we always have at least 2 items to render and cycle.
  const safeItems = useMemo(
    () => (items.length >= 2 ? items : [...items, ...items]),
    [items]
  );
  const len = safeItems.length;

  const visible = useMemo(() => {
    const i1 = ((index % len) + len) % len;
    const i2 = ((index + 1) % len + len) % len;
    return [safeItems[i1], safeItems[i2]];
  }, [index, len, safeItems]);

  const up = () => setIndex((i) => (i - 1 + len) % len);
  const down = () => setIndex((i) => (i + 1) % len);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <span
              className={[
                "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ring-1",
                GREEN_PILL,
              ].join(" ")}
            >
              {badge.toUpperCase()}
            </span>

            <h2 className="mt-6 text-[34px] leading-tight sm:text-5xl font-extrabold text-slate-900">
              {heading}
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">{blurb}</p>

            <button
              onClick={onCtaClick}
              className="mt-6 inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-3 font-semibold hover:bg-slate-800 transition"
            >
              {ctaText}
            </button>

            {/* Video preview */}
            <div className="mt-12 rounded-2xl overflow-hidden bg-slate-100 relative">
              <img
                src="testleft.png"
                alt="Testimonial video"
                className="w-full h-auto object-cover"
              />
              <button
                onClick={onPlay}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full grid place-items-center bg-white/90 hover:bg-white transition shadow"
                aria-label="play video"
              >
                <HiMiniPlay className="w-7 h-7 text-slate-900" />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div
              className="relative rounded-3xl p-4 sm:p-6"
              style={{ backgroundColor: GOLD }}
            >
              {/* cards */}
              <div className="space-y-6">
                {visible.map((it, idx) => (
                  <Card key={idx + it.name} item={it} />
                ))}
              </div>

              {/* ✅ Controls: visible on ALL screens */}
              {/* Desktop: vertical on the right (absolute) */}
              <div className="hidden sm:flex flex-col gap-3 absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-auto">
                <button
                  onClick={up}
                  className="w-12 h-12 rounded-full grid place-items-center bg-white/90 text-slate-900 hover:bg-white transition shadow"
                  aria-label="Previous"
                >
                  <HiChevronUp className="w-6 h-6" />
                </button>
                <button
                  onClick={down}
                  className="w-12 h-12 rounded-full grid place-items-center bg-white/90 text-slate-900 hover:bg-white transition shadow"
                  aria-label="Next"
                >
                  <HiChevronDown className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile: horizontal row at the bottom */}
              <div className="sm:hidden mt-4 flex justify-center gap-4 z-10">
                <button
                  onClick={up}
                  className="w-12 h-12 rounded-full grid place-items-center bg-white/90 text-slate-900 hover:bg-white transition shadow"
                  aria-label="Previous"
                >
                  <HiChevronUp className="w-6 h-6" />
                </button>
                <button
                  onClick={down}
                  className="w-12 h-12 rounded-full grid place-items-center bg-white/90 text-slate-900 hover:bg-white transition shadow"
                  aria-label="Next"
                >
                  <HiChevronDown className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
