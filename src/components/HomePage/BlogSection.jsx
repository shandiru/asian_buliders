import React from "react";
import { FiUser, FiCalendar } from "react-icons/fi";
import { HiMiniArrowUpRight } from "react-icons/hi2";

/** Theme tuned to your screenshot */
const T = {
  pillBg: "bg-emerald-900/10",
  pillText: "text-emerald-900",
  pillRing: "ring-emerald-900/15",
  h2: "text-slate-900",
  muted: "text-slate-600",
  ring: "ring-slate-200",
};

const DEFAULT_POSTS = [
  {
    id: 1,
    image: "/blog-1.jpg", // replace with your image
    author: "Joe Root",
    date: "16 April, 2024",
    title:
      "How Luxury Suite Offers the Perfect Blend the Comfort",
    href: "/blog/1",
  },
  {
    id: 2,
    image: "/blog-2.jpg",
    author: "Joe Root",
    date: "16 April, 2024",
    title:
      "Guest Spotlight: Memorable Moments at Luxury Suite Villa",
    href: "/blog/2",
  },
  {
    id: 3,
    image: "/blog-3.jpg",
    author: "Joe Root",
    date: "16 April, 2024",
    title:
      "Behind the Scenes: The Art of Creating Luxury Suite Villa",
    href: "/blog/3",
  },
];

function BlogCard({ post }) {
  return (
    <article className="group">
      {/* Top image */}
      <div className="rounded-[22px] overflow-hidden">
        <div className="aspect-[16/10] w-full">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Content box (floating under image) */}
      <div className="-mt-6">
        <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-md ring-1 hover:shadow-lg transition ring-slate-200">
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

          <h3 className="mt-5 text-xl font-semibold text-slate-900">
            <a href={post.href} className="hover:underline">
              {post.title}
            </a>
          </h3>

          <a
            href={post.href}
            className="mt-6 inline-flex items-center gap-2 text-slate-900 font-medium"
          >
            Read More
            <HiMiniArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
