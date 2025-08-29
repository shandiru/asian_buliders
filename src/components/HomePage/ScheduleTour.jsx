// src/components/ScheduleTour.jsx
import React, { useEffect, useRef, useState } from "react";
import { HiMiniPlay } from "react-icons/hi2";

/**
 * ScheduleTour (with slow, scroll-triggered animation)
 * - Left image: slow slide-in from left
 * - Right content: pill -> heading -> blurb -> CTAs (staggered) from right
 * - Reverses when scrolling away (smooth)
 * - Respects prefers-reduced-motion
 */
export default function ScheduleTour({
  imageSrc = "/tour-left.jpg", // replace with your image path
  title = "Home Waiting For You Here Schedule A Tour",
  blurb = "Indulge in the epitome of luxury living at Luxury, where every amenity is meticulously designed to elevate your lifestyle.",
  onScheduleClick = () => {},
  onVideoClick = () => {},
}) {
  const rootRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // slight hysteresis so it doesn't flicker
          setInView(entry.isIntersecting && entry.intersectionRatio > 0.25);
        }
      },
      { threshold: [0, 0.25, 0.6, 1], rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={rootRef} className="relative bg-[#0F3E36] text-white overflow-hidden">
      {/* Animations (no Tailwind config needed) */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none !important; opacity: 1 !important; transform: none !important; }
        }

        /* Prevent initial flash before IO triggers */
        .prehide { opacity: 0; transform: translateY(24px) }

        /* LEFT: image slow slide from left */
        @keyframes slideInLeft {
          0%   { opacity: 0; transform: translateX(-120px) }
          100% { opacity: 1; transform: translateX(0) }
        }
        @keyframes slideOutLeft {
          0%   { opacity: 1; transform: translateX(0) }
          100% { opacity: 0; transform: translateX(-120px) }
        }
        .left-enter { animation: slideInLeft 2.0s cubic-bezier(.22,.8,.22,1) forwards }
        .left-exit  { animation: slideOutLeft 1.2s ease forwards }

        /* RIGHT: gentle slide from right */
        @keyframes slideInRight {
          0%   { opacity: 0; transform: translateX(120px) }
          100% { opacity: 1; transform: translateX(0) }
        }
        @keyframes slideOutRight {
          0%   { opacity: 1; transform: translateX(0) }
          100% { opacity: 0; transform: translateX(120px) }
        }
        .right-enter { animation: slideInRight 2.0s cubic-bezier(.22,.8,.22,1) forwards }
        .right-exit  { animation: slideOutRight 1.2s ease forwards }

        /* Button pulse for video */
        @keyframes softPulse {
          0%, 100% { transform: scale(1) }
          50%      { transform: scale(1.05) }
        }
        .pulse { animation: softPulse 2.2s ease-in-out infinite }

        /* Tiny delay helper (so we can stagger easily) */
        .d100 { animation-delay: .10s }
        .d300 { animation-delay: .30s }
        .d550 { animation-delay: .55s }
        .d800 { animation-delay: .80s }
        .d1100{ animation-delay: 1.10s }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: image only (no overlays) */}
          <div
            className={["prehide anim", inView ? "left-enter d100" : "left-exit"].join(" ")}
          >
            <img
              src={imageSrc}
              alt="Schedule tour preview"
              className="w-full h-auto rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
          </div>

          {/* RIGHT: content with slow staggered entrance */}
          <div className="max-w-xl lg:max-w-2xl">
            {/* Pill */}
            <span
              className={[
                "inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold bg-white/10 ring-1 ring-white/15",
                "prehide anim",
                inView ? "right-enter d300" : "right-exit",
              ].join(" ")}
            >
              SCHEDULE A TOUR
            </span>

            {/* Heading */}
            <h2
              className={[
                "mt-6 text-[34px] leading-tight sm:text-5xl font-extrabold",
                "prehide anim",
                inView ? "right-enter d550" : "right-exit",
              ].join(" ")}
            >
              {title}
            </h2>

            {/* Blurb */}
            <p
              className={[
                "mt-6 text-lg text-white/80",
                "prehide anim",
                inView ? "right-enter d800" : "right-exit",
              ].join(" ")}
            >
              {blurb}
            </p>

            {/* CTAs */}
            <div
              className={[
                "mt-8 flex items-center gap-5",
                "prehide anim",
                inView ? "right-enter d1100" : "right-exit",
              ].join(" ")}
            >
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
                <span className="relative inline-grid place-items-center w-10 h-10 rounded-full bg-white/15">
                  {/* soft ambient pulse around the play puck */}
                  <span className="absolute inset-0 rounded-full bg-white/10 blur-[2px] pulse" />
                  <HiMiniPlay className="relative w-5 h-5" />
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
