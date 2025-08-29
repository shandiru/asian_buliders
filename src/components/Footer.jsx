import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaLocationDot,
  FaPhone,
  FaInstagram,
} from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";

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
 * Props:
 *  - backgroundSrc?: string  <-- background image behind the footer section
 *  - logoSrc?: string
 *  - galleryImages?: string[4]
 */
export default function Footer({
  backgroundSrc = "/footerbg.png", // <- put your bg image here or pass as prop
  logoSrc,
  galleryImages = [
    "/footer-image-1.png",
    "/footer-image-2.png",
    "/footer-image-3.png",
    "/footer-image-4.png",
  ],
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (demo)");
  };

  return (
    <footer className="relative">
      {/* Background image layer */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundSrc})` }}
      />
      {/* Soft dark overlay so cards pop */}
      <div className="absolute inset-0 -z-10 bg-slate-900/35" />

      {/* TOP CARD: contact + instagram images */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="rounded-2xl bg-white/95 ring-1 ring-slate-200 shadow-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact form */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Send Us A Message
              </h3>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name*"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number*"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
                <textarea
                  required
                  placeholder="Your Message*"
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
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

            {/* Instagram grid */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(0, 4).map((src, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-lg"
                >
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="h-40 w-full object-cover sm:h-44 md:h-40"
                  />
                  <span className="absolute bottom-3 left-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-slate-900 ring-1 ring-slate-200">
                    <FaInstagram className="w-4.5 h-4.5" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-6 rounded-2xl bg-white/95 ring-1 ring-slate-200 shadow-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              {logoSrc ? (
                <img src={logoSrc} alt="Logo" className="h-9 w-auto" />
              ) : (
                <div className="flex items-center gap-3">
                  <BrandDot />
                  <span className="font-semibold text-slate-900 text-lg">HOSUE</span>
                </div>
              )}
              <nav className="text-slate-700">
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-slate-900">Home</a></li>
                  <li><a href="#" className="hover:text-slate-900">Properties</a></li>
                  <li><a href="#" className="hover:text-slate-900">Gallery</a></li>
                </ul>
              </nav>
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
                  <span>65, Brand Tower<br />New York, USA</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-emerald-900" />
                  <a href="tel:1234567890" className="hover:text-slate-900">123–456–7890</a>
                </li>
              </ul>
            </div>

            <div className="flex items-start md:items-center md:justify-end gap-3">
              {[<FaFacebookF key="fb"/>, <FaGooglePlusG key="g+"/>, <FaLinkedinIn key="in"/>, <FaYoutube key="yt"/>].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200" aria-label="social">
                  {Icon}
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
