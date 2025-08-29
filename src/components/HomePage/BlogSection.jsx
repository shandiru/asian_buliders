// src/components/BlogSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { FiUser, FiCalendar } from "react-icons/fi";
import { HiMiniArrowUpRight } from "react-icons/hi2";

/** Theme (kept same) */
const T = {
  pillBg: "bg-emerald-900/10",
  pillText: "text-emerald-900",
  pillRing: "ring-emerald-900/15",
  h2: "text-slate-900",
};

const DEFAULT_POSTS = [
  {
    id: 1,
    image: "/news-image-1.png",
    author: "Joe Root",
    date: "16 April, 2024",
    title: "How Luxury Suite Offers the Perfect Blend the Comfort",
    href: "/blog/1",
  },
  {
    id: 2,
    image: "/news-image-2.png",
    author: "Joe Root",
    date: "16 April, 2024",
    title: "Guest Spotlight: Memorable Moments at Luxury Suite Villa",
    href: "/blog/2",
  },
  {
    id: 3,
    image: "/news-image-3.png",
    author: "Joe Root",
    date: "16 April, 2024",
    title: "Behind the Scenes: The Art of Creating Luxury Suite Villa",
    href: "/blog/3",
  },
];

/* Single blog card (unchanged visuals; animation classes applied from parent) */
function BlogCard({ post, animClass, delay = 0 }) {
  return (
    <article
      className={["group relative will-change-transform", animClass].join(" ")}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Top image */}
      <div className="relative z-0 rounded-[20px] overflow-hidden shadow-sm">
        <div className="aspect-[16/10] w-full">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Floating content card */}
      <div className="relative z-10 -mt-8 sm:-mt-10">
        <div className="rounded-[18px] bg-white p-5 sm:p-6 shadow-lg ring-1 ring-slate-200/70 transition-transform duration-[800ms] group-hover:-translate-y-0.5">
          <ul className="flex items-center text-sm text-slate-700">
            <li className="inline-flex items-center gap-2">
              <FiUser className="h-[18px] w-[18px]" />
              {post.author}
            </li>
            <span className="mx-2 text-slate-300">|</span>
            <li className="inline-flex items-center gap-2">
              <FiCalendar className="h-[18px] w-[18px]" />
              {post.date}
            </li>
          </ul>

          <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-slate-900 leading-snug">
            <a href={post.href} className="hover:underline underline-offset-2">
              {post.title}
            </a>
          </h3>

          <a
            href={post.href}
            className="mt-5 inline-flex items-center gap-2 text-slate-900 font-medium"
          >
            Read More
            <HiMiniArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function BlogSection({
  badge = "OUR BLOG",
  heading = "Our News & Articles",
  posts = DEFAULT_POSTS,
}) {
  const rootRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setInView(entry.isIntersecting && entry.intersectionRatio > 0.2);
        }
      },
      { threshold: [0, 0.2, 0.6, 1], rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={rootRef} className="bg-white py-14 sm:py-20 overflow-hidden">
      {/* Slow, elegant keyframes (no Tailwind plugin needed) */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none !important; opacity: 1 !important; transform: none !important; }
        }

        /* Prevent initial flash before IO triggers */
        .prehide { opacity: 0; transform: translateY(32px) }

        /* Header: soft rise & fade */
        @keyframes headIn {
          0%   { opacity: 0; transform: translateY(26px) }
          100% { opacity: 1; transform: translateY(0) }
        }
        @keyframes headOut {
          0%   { opacity: 1; transform: translateY(0) }
          100% { opacity: 0; transform: translateY(26px) }
        }
        .head-enter { animation: headIn 1.8s cubic-bezier(.22,.8,.22,1) forwards; }
        .head-exit  { animation: headOut 1.1s ease forwards; }

        /* Cards: gentle float with tiny scale */
        @keyframes cardIn {
          0%   { opacity: 0; transform: translateY(38px) scale(.985) }
          100% { opacity: 1; transform: translateY(0)    scale(1) }
        }
        @keyframes cardOut {
          0%   { opacity: 1; transform: translateY(0)    scale(1) }
          100% { opacity: 0; transform: translateY(38px) scale(.985) }
        }
        .grid-enter { animation: cardIn 1.9s cubic-bezier(.22,.8,.22,1) forwards; }
        .grid-exit  { animation: cardOut 1.1s ease forwards; }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div
          className={[
            "text-center mb-12 sm:mb-16 prehide anim",
            inView ? "head-enter" : "head-exit",
          ].join(" ")}
          style={{ animationDelay: inView ? "0.1s" : "0s" }}
        >
          <span
            className={[
              "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ring-1",
              T.pillBg,
              T.pillText,
              T.pillRing,
            ].join(" ")}
          >
            {badge}
          </span>
          <h2
            className={[
              "mt-6 font-extrabold tracking-tight",
              "text-[32px] sm:text-4xl md:text-[44px]",
              T.h2,
            ].join(" ")}
          >
            {heading}
          </h2>
        </div>

        {/* Grid (each card has its own staggered delay) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {posts.map((p, idx) => (
            <BlogCard
              key={p.id}
              post={p}
              animClass={[
                "prehide anim",
                inView ? "grid-enter" : "grid-exit",
              ].join(" ")}
              delay={inView ? 0.35 + idx * 0.28 : 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
