// src/components/AmenitiesSection.jsx
import React from "react";

/**
 * AmenitiesSection
 * - Badge + big title
 * - 4 circular image cards with gold number badge
 * - Title + description under each card
 *
 * Customize images/text by editing the AMENITIES array or passing `items` prop.
 */
const THEME = {
  // pill/badge (green like the screenshot)
  pillBg: "bg-emerald-900/10",
  pillText: "text-emerald-900",
  pillRing: "ring-emerald-900/15",

  // numbers (gold coins)
  coinBg: "#E7C873",
  coinText: "text-slate-900",

  // text
  h2: "text-slate-900",
  muted: "text-slate-600",
};

const AMENITIES_DEFAULT = [
  {
    img: "/home.png",
    title: "New Construction",
    desc: "Discover the epitome of luxury living at Luxury, every detail .",
  },
  {
    img: "/swim.png",
    title: "Swimming Pool",
    desc: "Explore our meticulously best designed spaces and indulge.",
  },
  {
    img: "/service.png",
    title: "Fitness Facilities",
    desc: "Uncover the essence of luxury as you explore our exclusive.",
  },
  {
    img: "/bild.png",
    title: "Eco Construction",
    desc: "Step into sophistication and serenity at new construction.",
  },
];

export default function AmenitiesSection({
  badge = "Villa Amenities",
  heading = "Our Property Amenities",
  items = AMENITIES_DEFAULT,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span
            className={[
              "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ring-1",
              THEME.pillBg,
              THEME.pillText,
              THEME.pillRing,
            ].join(" ")}
          >
            {badge.toUpperCase()}
          </span>

          <h2
            className={[
              "mt-6 font-extrabold tracking-tight",
              "text-[32px] sm:text-4xl md:text-[44px]",
              THEME.h2,
            ].join(" ")}
          >
            {heading}
          </h2>
        </div>

        {/* Amenity grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {items.map((it, i) => (
            <article key={it.title} className="text-center">
              {/* circular image with gold number coin */}
              <div className="relative mx-auto w-[210px] h-[210px] rounded-full overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover"
                />
                <span
                  className="absolute -right-3 -top-3 inline-flex items-center justify-center rounded-full w-12 h-12 text-sm font-extrabold shadow"
                  style={{ backgroundColor: THEME.coinBg }}
                >
                  <span className={THEME.coinText}>
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                </span>
              </div>

              {/* title */}
              <h3 className="mt-7 text-2xl font-bold text-slate-900">
                {it.title}
              </h3>

              {/* description */}
              <p className={`mt-3 text-[15px] leading-7 ${THEME.muted}`}>
                {it.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
