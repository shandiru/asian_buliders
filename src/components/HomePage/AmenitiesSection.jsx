// src/components/AmenitiesSection.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

const THEME = {
  pillBg: "bg-emerald-900/10",
  pillText: "text-emerald-900",
  pillRing: "ring-emerald-900/15",
  coinBg: "#E7C873",
  coinText: "text-slate-900",
  h2: "text-slate-900",
  muted: "text-slate-600",
};

const AMENITIES_DEFAULT = [
  { img: "/home.png", title: "New Construction", desc: "Discover the epitome of luxury living at Luxury, every detail ." },
  { img: "/swim.png", title: "Swimming Pool", desc: "Explore our meticulously best designed spaces and indulge." },
  { img: "/service.png", title: "Fitness Facilities", desc: "Uncover the essence of luxury as you explore our exclusive." },
  { img: "/bild.png", title: "Eco Construction", desc: "Step into sophistication and serenity at new construction." },
];

function useScrollDirection() {
  const [dir, setDir] = useState("down");
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setDir(y > lastY.current ? "down" : "up");
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return dir;
}

export default function AmenitiesSection({
  badge = "Villa Amenities",
  heading = "Our Property Amenities",
  items = AMENITIES_DEFAULT,
}) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [exiting, setExiting] = useState(false);
  const scrollDir = useScrollDirection();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            setExiting(false);
          } else {
            setExiting(true);
            setInView(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [scrollDir]);

  const delays = useMemo(
    () => items.map((_, i) => `${i * 200}ms`), // slower stagger (200ms)
    [items]
  );

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      <style>{`
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(70px) }
          100% { opacity: 1; transform: translateX(0) }
        }
        @keyframes slideOutRight {
          0% { opacity: 1; transform: translateX(0) }
          100% { opacity: 0; transform: translateX(70px) }
        }
        @keyframes riseIn {
          0% { opacity: 0; transform: translateY(60px) scale(0.95) }
          100% { opacity: 1; transform: translateY(0) scale(1) }
        }
        @keyframes dropOut {
          0% { opacity: 1; transform: translateY(0) scale(1) }
          100% { opacity: 0; transform: translateY(60px) scale(0.95) }
        }

        .amenity-enter   { animation: riseIn 1.2s cubic-bezier(.2,.8,.2,1) both; }
        .amenity-exit    { animation: dropOut 1s ease both; }
        .heading-enter   { animation: slideInRight 1.2s cubic-bezier(.2,.8,.2,1) both; }
        .heading-exit    { animation: slideOutRight 1s ease both; }

        .pre-hide-right  { opacity: 0; transform: translateX(70px); }
        .pre-hide-down   { opacity: 0; transform: translateY(60px) scale(0.95); }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-14 sm:mb-20">
          <span
            className={[
              "inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold ring-1",
              THEME.pillBg,
              THEME.pillText,
              THEME.pillRing,
              inView ? "heading-enter" : exiting ? "heading-exit" : "pre-hide-right",
            ].join(" ")}
            style={{ animationDelay: inView ? "120ms" : undefined }}
          >
            {badge.toUpperCase()}
          </span>

          <h2
            className={[
              "mt-6 font-extrabold tracking-tight",
              "text-[34px] sm:text-4xl md:text-[46px]",
              THEME.h2,
              inView ? "heading-enter" : exiting ? "heading-exit" : "pre-hide-right",
            ].join(" ")}
            style={{ animationDelay: inView ? "280ms" : undefined }}
          >
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10">
          {items.map((it, i) => {
            const animClass = inView ? "amenity-enter" : exiting ? "amenity-exit" : "pre-hide-down";
            return (
              <article
                key={it.title}
                className={["text-center", animClass].join(" ")}
                style={{ animationDelay: inView ? delays[i] : undefined }}
              >
                <div className="relative mx-auto w-[220px] h-[220px] rounded-full overflow-hidden shadow-md">
                  <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
                  <span
                    className="absolute -right-3 -top-3 inline-flex items-center justify-center rounded-full w-12 h-12 text-sm font-extrabold shadow"
                    style={{ backgroundColor: THEME.coinBg }}
                  >
                    <span className={THEME.coinText}>
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-bold text-slate-900">{it.title}</h3>
                <p className={`mt-4 text-[15px] leading-7 ${THEME.muted}`}>{it.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
