// src/components/Footer.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaLocationDot,
  FaPhone,
  FaInstagram,
} from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";

/* Small brand glyph used when no logoSrc is passed */
function BrandDot() {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full w-10 h-10"
      style={{ backgroundColor: "#E7C873" }}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
        <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
      </svg>
    </span>
  );
}

/**
 * Footer with slow, elegant, scroll-triggered animations
 *
 * Props:
 *  - backgroundSrc?: string  (image behind footer)
 *  - logoSrc?: string
 *  - galleryImages?: string[]
 */
export default function Footer({
  backgroundSrc = "/footerbg.png",
  logoSrc,
  galleryImages = [
    "/footer-image-1.png",
    "/footer-image-2.png",
    "/footer-image-3.png",
    "/footer-image-4.png",
  ],
}) {
  const rootRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Trigger when ~30% of the footer is visible. Adds a bit of hysteresis
  // so the animation doesn't flicker on small scrolls.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setInView(entry.isIntersecting && entry.intersectionRatio > 0.25);
        }
      },
      { threshold: [0, 0.25, 0.5, 1], rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (demo)");
  };

  return (
    <footer ref={rootRef} className="relative overflow-hidden">
      {/* Keyframes + animation classes (no Tailwind config needed) */}
      <style>{`
        /* Respect users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .anim, .anim-delay { animation: none !important; opacity: 1 !important; transform: none !important; }
        }

        /* Base hidden state to avoid initial flash before IO triggers */
        .hidden-start { opacity: 0; transform: translateY(24px); }

        /* Big card container gentle float-in/out */
        @keyframes cardIn {
          0%   { opacity: 0; transform: translateY(44px) }
          100% { opacity: 1; transform: translateY(0) }
        }
        @keyframes cardOut {
          0%   { opacity: 1; transform: translateY(0) }
          100% { opacity: 0; transform: translateY(44px) }
        }
        .card-enter { animation: cardIn 2.2s cubic-bezier(.22,.8,.22,1) forwards; }
        .card-exit  { animation: cardOut 1.4s ease forwards; }

        /* Contact form: slow slide from left */
        @keyframes slideInLeft {
          0%   { opacity: 0; transform: translateX(-120px) }
          100% { opacity: 1; transform: translateX(0) }
        }
        @keyframes slideOutLeft {
          0%   { opacity: 1; transform: translateX(0) }
          100% { opacity: 0; transform: translateX(-120px) }
        }
        .left-enter { animation: slideInLeft 1.9s cubic-bezier(.22,.8,.22,1) forwards; }
        .left-exit  { animation: slideOutLeft 1.2s ease forwards; }

        /* Tiles: rise + subtle scale with stagger */
        @keyframes riseIn {
          0%   { opacity: 0; transform: translateY(70px) scale(.96) }
          100% { opacity: 1; transform: translateY(0) scale(1) }
        }
        @keyframes dropOut {
          0%   { opacity: 1; transform: translateY(0) scale(1) }
          100% { opacity: 0; transform: translateY(70px) scale(.96) }
        }
        .tile-enter { animation: riseIn 1.8s cubic-bezier(.22,.8,.22,1) forwards; }
        .tile-exit  { animation: dropOut 1.1s ease forwards; }

        /* Social icons: soft fade-up */
        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(18px) }
          100% { opacity: 1; transform: translateY(0) }
        }
        @keyframes fadeDown {
          0%   { opacity: 1; transform: translateY(0) }
          100% { opacity: 0; transform: translateY(18px) }
        }
        .fade-enter { animation: fadeUp 1.6s cubic-bezier(.22,.8,.22,1) forwards; }
        .fade-exit  { animation: fadeDown 1s ease forwards; }
      `}</style>

      {/* Background image & overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundSrc})` }}
      />
      <div className="absolute inset-0 -z-10 bg-slate-900/40" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        {/* TOP CARD: contact + instagram images */}
        <div
          className={[
            "rounded-2xl bg-white/95 ring-1 ring-slate-200 shadow-2xl p-6 sm:p-10",
            "hidden-start anim",
            inView ? "card-enter" : "card-exit",
          ].join(" ")}
          style={{ animationDelay: inView ? "0.05s" : "0s" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact form (slow slide from left) */}
            <div
              className={[
                "hidden-start anim",
                inView ? "left-enter" : "left-exit",
              ].join(" ")}
              style={{ animationDelay: inView ? "0.35s" : "0s" }}
            >
              <h3 className="text-2xl font-semibold text-slate-900">Send Us A Message</h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number*"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
                <textarea
                  placeholder="Your Message*"
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                />
                <div className="text-right">
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-2xl bg-emerald-900 text-white px-6 py-3 font-semibold shadow hover:bg-emerald-800 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Instagram grid (slow, staggered rise) */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(0, 4).map((src, i) => {
                const delayIn = 0.7 + i * 0.35;  // slower, nice cascade
                const delayOut = (3 - i) * 0.15; // reverse order on exit
                return (
                  <div
                    key={i}
                    className={[
                      "relative overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-lg",
                      "hidden-start anim",
                      inView ? "tile-enter" : "tile-exit",
                    ].join(" ")}
                    style={{ animationDelay: `${inView ? delayIn : delayOut}s` }}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      className="h-40 w-full object-cover sm:h-48 md:h-44"
                    />
                    <span className="absolute bottom-3 left-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-slate-900 ring-1 ring-slate-200">
                      <FaInstagram className="w-4.5 h-4.5" />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className={[
            "mt-8 rounded-2xl bg-white/95 ring-1 ring-slate-200 shadow-2xl p-6 sm:p-10",
            "hidden-start anim",
            inView ? "card-enter" : "card-exit",
          ].join(" ")}
          style={{ animationDelay: inView ? "2.4s" : "0s" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              {logoSrc ? (
                <img src={logoSrc} alt="Logo" className="h-9 w-auto" />
              ) : (
                <div className="flex items-center gap-3">
                  <BrandDot />
                  <span className="font-semibold text-lg text-slate-900">HOSUE</span>
                </div>
              )}
              <ul className="space-y-2 text-slate-700">
                <li><a href="#" className="hover:text-slate-900">Home</a></li>
                <li><a href="#" className="hover:text-slate-900">Properties</a></li>
                <li><a href="#" className="hover:text-slate-900">Gallery</a></li>
              </ul>
            </div>

            <div className="text-slate-700">
              <ul className="space-y-2 mt-10 md:mt-0">
                <li><a href="#" className="hover:text-slate-900">Blog</a></li>
                <li><a href="#" className="hover:text-slate-900">Pages</a></li>
                <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              </ul>
            </div>

            <div className="text-slate-700">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaLocationDot className="mt-1 text-emerald-900" />
                  <span>65, Brand Tower<br/>New York, USA</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-emerald-900" />
                  <a href="tel:1234567890" className="hover:text-slate-900">123–456–7890</a>
                </li>
              </ul>
            </div>

            {/* Socials (slow fade-up, staggered) */}
            <div className="flex items-center gap-3">
              {[FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaYoutube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={[
                    "w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200",
                    "hidden-start anim",
                    inView ? "fade-enter" : "fade-exit",
                  ].join(" ")}
                  style={{ animationDelay: inView ? `${2.6 + idx * 0.25}s` : "0s" }}
                  aria-label="social"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
            © 2024 Hosue — Single Property HTML Template.
          </div>
        </div>
      </div>
    </footer>
  );
}
