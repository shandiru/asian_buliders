// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import { FaLocationDot, FaPlay } from "react-icons/fa6";
import { HiMiniChevronUp, HiMiniChevronDown } from "react-icons/hi2";

const colors = { green: "#124D43" };

/* Waves */
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

/* ---------- Lightbox Video ---------- */
function VideoLightbox({ open, onClose, src }) {
  const vidRef = useRef(null);

  useEffect(() => {
    if (!vidRef.current) return;
    if (open) {
      vidRef.current.currentTime = 0;
      vidRef.current.play().catch(() => {});
    } else {
      vidRef.current.pause();
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-black/60 backdrop-blur-sm animate-[fadeIn_.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="w-[92vw] max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black animate-[popIn_.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <video ref={vidRef} src={src} controls playsInline className="w-full h-full object-contain" />
      </div>

      <style>{`
        @keyframes fadeIn { from {opacity:0} to {opacity:1} }
        @keyframes popIn { from { transform:scale(.96); opacity:.6 } to { transform:scale(1); opacity:1 } }
      `}</style>
    </div>
  );
}

/* ---------- Vertical Carousel (Up/Down) ---------- */
function VerticalCarousel({ images = [] }) {
  const [i, setI] = useState(0);
  const n = images.length || 1;
  if (!images.length) return null;

  const prev = () => setI((p) => (p - 1 + n) % n);
  const next = () => setI((p) => (p + 1) % n);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Image (we'll animate a wrapper so the image position returns every cycle) */}
      <div className="w-full h-full will-change-transform sway">
        <img
          key={i}
          src={images[i]}
          alt={`Hero ${i + 1}`}
          className="w-full h-full object-cover animate-fadeSlide"
        />
      </div>

      {/* Up/Down controls */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        <button
          onClick={prev}
          aria-label="Previous image"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow ring-1 ring-black/10"
        >
          <HiMiniChevronUp className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow ring-1 ring-black/10"
        >
          <HiMiniChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to image ${idx + 1}`}
            onClick={() => setI(idx)}
            className={[
              "w-2.5 h-2.5 rounded-full ring-1 ring-white/60",
              i === idx ? "bg-white" : "bg-white/40 hover:bg-white/60",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- HERO ---------- */
export default function Hero({
  images = [
    "/home.png",
    "/home.png",
    "/home.png",
  ],
  videoSrc = "/video/hero.mp4",
}) {
  const [openVideo, setOpenVideo] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative mt-5">
      {/* Keyframes injected (no Tailwind config needed) */}
      <style>{`
        /* smooth left->right->left that RETURNS to start each cycle */
        @keyframes swayX { 0% { transform: translateX(0) } 50% { transform: translateX(10px) } 100% { transform: translateX(0) } }
        /* subtle image entrance */
        @keyframes fadeSlide { 0% { opacity:0; transform: translateY(8px) scale(1.01) } 100% { opacity:1; transform: translateY(0) scale(1) } }
        .sway { animation: swayX 6s ease-in-out infinite; }
        .animate-fadeSlide { animation: fadeSlide .45s ease-out both; }
        /* one-off intro (separate from sway so transforms don't stack) */
        .enter-left { opacity: 0; transform: translateX(-16px); transition: opacity .5s ease, transform .6s ease; }
        .enter-left.show { opacity: 1; transform: translateX(0); }
        .d1 { transition-delay: .08s } .d2 { transition-delay: .16s } .d3 { transition-delay: .24s }
      `}</style>

      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[72vh]">
          {/* Left panel */}
          <div className="relative lg:col-span-7 overflow-hidden">
            <div className="absolute inset-0" style={{ backgroundColor: colors.green }} />
            <WavePattern />

            <div className="relative z-10 px-6 lg:pl-12 lg:pr-10 py-12 lg:py-20">
              {/* Location pill */}
              <div className="enter-left d1 flex">
                <span className="sway inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white ring-1 ring-white/30 backdrop-blur will-change-transform">
                  <FaLocationDot className="w-4.5 h-4.5" />
                  <span className="font-semibold">538 Joanie Fort Apt. 933 Louisiana</span>
                </span>
              </div>

              {/* Title */}
              <div className={["enter-left d2 mt-8", show ? "show" : ""].join(" ")}>
                <span className="sway inline-block will-change-transform">
                  <h1 className="text-white font-extrabold tracking-tight leading-tight text-[38px] sm:text-[48px] lg:text-[56px]">
                    Welcome to Your <br /> Luxurious Haven
                  </h1>
                </span>
              </div>

              {/* Paragraph */}
              <div className={["enter-left d3 mt-6 max-w-xl", show ? "show" : ""].join(" ")}>
                <span className="sway inline-block will-change-transform">
                  <p className="text-white/85 text-base sm:text-lg">
                    Our exclusive property offers a seamless blend of luxury and comfort,
                    designed to meet your every need. From the…
                  </p>
                </span>
              </div>

              {/* Buttons */}
              <div className={["enter-left mt-10 flex items-center gap-4", show ? "show" : ""].join(" ")}>
                <span className="sway inline-flex will-change-transform">
                  <a
                    href="#visit"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-black/90 text-white font-semibold ring-1 ring-black/20 hover:bg-black"
                  >
                    Schedule A Visit
                  </a>
                </span>

                <span className="sway inline-flex will-change-transform">
                  <button
                    onClick={() => setOpenVideo(true)}
                    className="inline-flex items-center gap-3 text-white"
                  >
                    <span className="relative grid place-items-center">
                      <span className="absolute inline-block w-11 h-11 rounded-full bg-white/15 animate-ping" />
                      <span className="w-11 h-11 rounded-full bg-white/12 ring-1 ring-white/30 flex items-center justify-center">
                        <FaPlay className="w-4.5 h-4.5" />
                      </span>
                    </span>
                    <span className="font-medium">Watch Video</span>
                  </button>
                </span>
              </div>
            </div>
          </div>

          {/* Right: vertical carousel + same sway animation */}
          <div className="relative lg:col-span-5">
            <VerticalCarousel images={images} />

            {/* Price chip */}
            <div className="absolute right-6 bottom-8">
              <div className="sway flex items-center gap-4 px-5 py-3 rounded-full bg-white/90 backdrop-blur ring-1 ring-black/10 shadow-md will-change-transform">
                <img
                  src="/assets/img/all-images/others/others-img1.png"
                  alt="Luxury Suite Villa"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="pr-1">
                  <h3 className="text-slate-900 font-semibold leading-tight">Luxury Suite Villa</h3>
                  <p className="text-slate-700">$1.800,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Lightbox */}
      <VideoLightbox open={openVideo} onClose={() => setOpenVideo(false)} src={videoSrc} />

      {/* Trigger the enter animations */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', () => {
          requestAnimationFrame(() => {
            document.querySelectorAll('.enter-left').forEach(el => el.classList.add('show'));
          });
        });
      `}} />
    </section>
  );
}
