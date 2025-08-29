// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaChevronDown,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";

const nav = { brandDot: "#E7C873" };

// ✅ Make "Home" a simple link to "/" (no arrow, no dropdown)
const MENU = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Apartment",
    items: [
      { label: "Apartment V1", href: "/apartment/v1" },
      { label: "Apartment V2", href: "/apartment/v2" },
      { label: "Apartment V3", href: "/apartment/v3" },
      { label: "Apartment V4", href: "/apartment/v4" },
    ],
  },
  {
    label: "Blogs",
    items: [
      { label: "Our Blog", href: "/blog" },
      { label: "Blog Left", href: "/blog/left" },
      { label: "Blog Right", href: "/blog/right" },
      { label: "Blog Single", href: "/blog/some-post" },
    ],
  },
  {
    label: "Pages",
    items: [
      { label: "Gallery V1", href: "/gallery/v1" },
      { label: "Gallery V2", href: "/gallery/v2" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

function BrandDot() {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full w-9 h-9"
      style={{ backgroundColor: nav.brandDot }}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
        <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
      </svg>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoverIdx, setHoverIdx] = useState(-1);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenIdx, setMobileOpenIdx] = useState(-1);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onClick = (e) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) setMobileOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      ref={headerRef}
      className={[
        "sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/85",
        "bg-white/95 transition-shadow",
        scrolled ? "shadow-sm border-b border-slate-200" : "border-b border-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3">
            <BrandDot />
            <span className="font-semibold text-lg tracking-wide text-slate-900">AsianBuilders</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {MENU.map((m, i) => {
              const hasDropdown = Array.isArray(m.items) && m.items.length > 0;

              return (
                <div
                  key={m.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setHoverIdx(i)}
                  onMouseLeave={() => hasDropdown && setHoverIdx(-1)}
                >
                  {/* If no dropdown -> simple link (Home goes to "/") */}
                  {!hasDropdown ? (
                    <a
                      href={m.href || "/"}
                      className="inline-flex items-center gap-1.5 font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {m.label}
                    </a>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 font-medium text-slate-600 hover:text-slate-900 transition-colors"
                        aria-haspopup="menu"
                        aria-expanded={hoverIdx === i}
                      >
                        <span>{m.label}</span>
                        <FaChevronDown className="w-3.5 h-3.5 opacity-70" />
                      </button>

                      {hoverIdx === i && (
                        <div className="absolute left-1/2 -translate-x-1/2 mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                          <ul className="min-w-56">
                            {m.items.map((it) => (
                              <li key={it.label}>
                                <a
                                  href={it.href}
                                  className="block px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50"
                                >
                                  {it.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right socials */}
          <div className="hidden lg:flex items-center gap-2 text-slate-600">
            <a href="#" className="w-9 h-9 rounded-full ring-1 ring-slate-200 flex items-center justify-center hover:bg-slate-50" aria-label="Facebook">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full ring-1 ring-slate-200 flex items-center justify-center hover:bg-slate-50" aria-label="Google Plus">
              <FaGooglePlusG className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full ring-1 ring-slate-200 flex items-center justify-center hover:bg-slate-50" aria-label="LinkedIn">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full ring-1 ring-slate-200 flex items-center justify-center hover:bg-slate-50" aria-label="YouTube">
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md ring-1 ring-slate-200"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "lg:hidden overflow-hidden transition-[max-height] duration-300",
          mobileOpen ? "max-h-[60vh] border-t border-slate-200" : "max-h-0",
        ].join(" ")}
      >
        <div className="px-4 py-3 space-y-1 bg-white">
          {MENU.map((m, i) => {
            const hasDropdown = Array.isArray(m.items) && m.items.length > 0;
            const open = mobileOpenIdx === i;

            if (!hasDropdown) {
              return (
                <a
                  key={m.label}
                  href={m.href || "/"}
                  className="block py-2 text-slate-700 font-medium"
                  onClick={closeMobile}
                >
                  {m.label}
                </a>
              );
            }

            return (
              <div key={m.label} className="border-t first:border-t-0 border-slate-200 pt-2">
                <button
                  onClick={() => setMobileOpenIdx(open ? -1 : i)}
                  className="w-full flex items-center justify-between py-2 text-slate-700 font-medium"
                  aria-expanded={open}
                  aria-controls={`mobile-dd-${i}`}
                >
                  {m.label}
                  <FaChevronDown
                    className={[
                      "w-4 h-4 text-slate-500 transition-transform",
                      open ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                <div
                  id={`mobile-dd-${i}`}
                  className={[
                    "grid transition-[grid-template-rows] duration-300",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <ul className="pb-2">
                      {m.items.map((it) => (
                        <li key={it.label}>
                          <a
                            href={it.href}
                            className="block px-2 py-1.5 text-slate-700 rounded hover:bg-slate-50"
                            onClick={closeMobile}
                          >
                            {it.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mobile socials */}
          <div className="pt-3 flex items-center gap-3 text-slate-600">
            <a href="#" className="w-10 h-10 rounded-full ring-1 ring-slate-200 flex items-center justify-center" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="w-10 h-10 rounded-full ring-1 ring-slate-200 flex items-center justify-center" aria-label="Google Plus"><FaGooglePlusG /></a>
            <a href="#" className="w-10 h-10 rounded-full ring-1 ring-slate-200 flex items-center justify-center" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" className="w-10 h-10 rounded-full ring-1 ring-slate-200 flex items-center justify-center" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
