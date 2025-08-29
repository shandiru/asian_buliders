// src/components/PropertyOverview.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Minimal Property Overview
 * Left: single image
 * Right: badge, headline, text, CTA (with scroll animations)
 */
export default function PropertyOverview({
  img = "/home-2.png",
  badge = "Property Overview",
  title = "Elegance Every Detail\nWelcome Suite Villa",
  para1 = "Experience the pinnacle of luxury living at our exclusive property, where every detail has been meticulously crafted to provide an unparalleled retreat. Nestled in the heart of, this haven offers.",
  para2 = "Discover the essence of luxury our exclusive property in Dallas, where timeless elegance and modern best comfort converge.",
  ctaText = "View Our Property",
  ctaHref = "#",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
          else setVisible(false);
        });
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <style>{`
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutRight {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(80px); }
        }
        .text-enter {
          animation: slideInRight 1.2s ease-out forwards;
        }
        .text-exit {
          animation: slideOutRight 0.9s ease-in forwards;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-10 lg:gap-12">
          {/* Left — single image only */}
          <div className="lg:col-span-6">
            <div className="w-full overflow-hidden rounded-2xl">
              <img
                src={img}
                alt="Property view"
                className="w-full h-[360px] sm:h-[420px] lg:h-[520px] object-cover"
              />
            </div>
          </div>

          {/* Right — content with animation */}
          <div
            className={`lg:col-span-6 ${
              visible ? "text-enter" : "text-exit"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-emerald-900/10 text-emerald-900 px-4 py-2 text-sm font-semibold ring-1 ring-emerald-900/15">
              {badge.toUpperCase()}
            </div>

            {/* Title */}
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              {title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>

            {/* Paragraphs */}
            <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed">
              {para1}
            </p>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              {para2}
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={ctaHref}
                className="inline-flex items-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-black transition"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
