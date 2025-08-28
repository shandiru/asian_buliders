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

const nav = {
  brandDot: "#E7C873", // gold circle
};

const MENU = [
  {
    label: "Home",
    type: "mega",
    items: [
      { title: "Demo 01", img: "/assets/img/all-images/demo/demo-img1.png", href: "#" },
      { title: "Demo 02", img: "/assets/img/all-images/demo/demo-img2.png", href: "#" },
      { title: "Demo 03", img: "/assets/img/all-images/demo/demo-img3.png", href: "#" },
      { title: "Demo 04", img: "/assets/img/all-images/demo/demo-img4.png", href: "#" },
      { title: "Demo 05", img: "/assets/img/all-images/demo/demo-img5.png", href: "#" },
    ],
  },
  { label: "About Us", href: "#" },
  {
    label: "Apartment",
    items: [
      { label: "Apartment V1", href: "#" },
      { label: "Apartment V2", href: "#" },
      { label: "Apartment V3", href: "#" },
      { label: "Apartment V4", href: "#" },
    ],
  },
  {
    label: "Blogs",
    items: [
      { label: "Our Blog", href: "#" },
      { label: "Blog Left", href: "#" },
      { label: "Blog Right", href: "#" },
      { label: "Blog Single", href: "#" },
    ],
  },
  {
    label: "Pages",
    items: [
      { label: "Gallery V1", href: "#" },
      { label: "Gallery V2", href: "#" },
      { label: "Testimonials", href: "#" },
      { label: "Contact Us", href: "#" },
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

  // sticky styles on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile when clicking outside
  useEffect(() => {
    if (!mobileOpen) return;
    const onClick = (e) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) setMobileOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [mobileOpen]);

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
          <a href="#" className="flex items-center gap-3">
            <BrandDot />
            <span className="font-semibold text-lg tracking-wide text-slate-900">HOSUE</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {MENU.map((m, i) => {
              const hasDropdown = m.items || m.type === "mega";
              return (
                <div
                  key={m.label}
                  className="relative"
                  onMouseEnter={() => setHoverIdx(i)}
                  onMouseLeave={() => setHoverIdx(-1)}
                >
                  <button
                    className="inline-flex items-center gap-1.5 font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <span>{m.label}</span>
                    {hasDropdown && <FaChevronDown className="w-3.5 h-3.5 opacity-70" />}
                  </button>

                  {/* Dropdowns */}
                  {hasDropdown && hoverIdx === i && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                      {m.type === "mega" ? (
                        <div className="grid grid-cols-5 gap-4 w-[720px]">
                          {m.items.map((card) => (
                            <a
                              key={card.title}
                              href={card.href}
                              className="group rounded-lg overflow-hidden ring-1 ring-slate-200/70 hover:ring-slate-300 transition"
                            >
                              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                                <img
                                  src={card.img}
                                  alt={card.title}
                                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
                                />
                              </div>
                              <div className="px-2.5 py-2 text-sm text-slate-700">{card.title}</div>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <ul className="min-w-56">
                          {m.items?.map((it) => (
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
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: socials */}
          <div className="hidden lg:flex items-center gap-2 text-slate-600">
            <a href="#" className="w-9 h-9 rounded-full ring-1 ring-slate-200 flex items-center justify-center hover:bg-slate-50">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full ring-1 ring-slate-200 flex items-center justify-center hover:bg-slate-50">
              <FaGooglePlusG className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full ring-1 ring-slate-200 flex items-center justify-center hover:bg-slate-50">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full ring-1 ring-slate-200 flex items-center justify-center hover:bg-slate-50">
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
            const hasDropdown = m.items || m.type === "mega";
            const open = mobileOpenIdx === i;

            if (!hasDropdown) {
              return (
                <a
                  key={m.label}
                  href={m.href || "#"}
                  className="block py-2 text-slate-700 font-medium"
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
                  className={[
                    "grid transition-[grid-template-rows] duration-300",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    {m.type === "mega" ? (
                      <div className="grid grid-cols-2 gap-3 pb-2">
                        {m.items?.map((x) => (
                          <a
                            key={x.title}
                            href={x.href}
                            className="flex items-center gap-3 rounded-lg ring-1 ring-slate-200 p-2"
                          >
                            <img
                              src={x.img}
                              alt={x.title}
                              className="w-14 h-10 object-cover rounded"
                            />
                            <span className="text-sm text-slate-700">{x.title}</span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <ul className="pb-2">
                        {m.items?.map((it) => (
                          <li key={it.label}>
                            <a
                              href={it.href}
                              className="block px-2 py-1.5 text-slate-700 rounded hover:bg-slate-50"
                            >
                              {it.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mobile socials */}
          <div className="pt-3 flex items-center gap-3 text-slate-600">
            <a href="#" className="w-10 h-10 rounded-full ring-1 ring-slate-200 flex items-center justify-center"><FaFacebookF /></a>
            <a href="#" className="w-10 h-10 rounded-full ring-1 ring-slate-200 flex items-center justify-center"><FaGooglePlusG /></a>
            <a href="#" className="w-10 h-10 rounded-full ring-1 ring-slate-200 flex items-center justify-center"><FaLinkedinIn /></a>
            <a href="#" className="w-10 h-10 rounded-full ring-1 ring-slate-200 flex items-center justify-center"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
