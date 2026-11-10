"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoSearchOutline, IoClose, IoSparklesOutline, IoArrowForward } from "react-icons/io5";

const trendingSearches = [
  { label: "Solitaire Rings", href: "/rings/solitaire" },
  { label: "Tennis Bracelets", href: "/bracelets/tennis" },
  { label: "Diamond Studs", href: "/earrings/studs" },
  { label: "Emerald Cut Rings", href: "/rings?shape=emerald" },
  { label: "Everyday Pendants", href: "/pendants/everyday" },
  { label: "Bridal Sets", href: "/collections/eternal" },
];

const popularCategories = [
  {
    name: "Rings",
    href: "/rings",
    count: "48 Designs",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Earrings",
    href: "/earrings",
    count: "36 Designs",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Pendants",
    href: "/pendants",
    count: "42 Designs",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Bracelets",
    href: "/bracelets",
    count: "24 Designs",
    image: "https://images.unsplash.com/photo-1611591475871-cc43b7e77cac?w=200&auto=format&fit=crop&q=80",
  },
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Focus input and lock scroll when opened
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/shop?q=${encodeURIComponent(query.trim())}`;
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-start p-4 sm:p-6 overflow-y-auto">
      {/* Dimmed backdrop with blur */}
      <div
        className="fixed inset-0 bg-[#031d42]/65 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Floating Search Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-[0_25px_70px_rgba(3,29,66,0.35)] overflow-hidden z-10 border border-[#e2e8f4] mt-10 sm:mt-16 animate-scaleUp">
        {/* Search Header Form */}
        <form onSubmit={handleSearchSubmit} className="relative border-b border-[#e8edf7] p-2 sm:p-3">
          <div className="flex items-center px-4 py-2 gap-3">
            <IoSearchOutline className="w-6 h-6 text-[#c9a84c] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search solitaire rings, tennis bracelets, earrings…"
              className="w-full text-base sm:text-lg text-[#0d1535] placeholder-[#8a9ab8] bg-transparent focus:outline-none font-medium"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-xs font-semibold text-[#8a9ab8] hover:text-[#0d1535] px-2 py-1 rounded-md bg-[#f4f7ff] transition"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#f4f7ff] hover:bg-[#e2e8f4] text-[#4a5a7a] hover:text-[#0d1535] flex items-center justify-center transition cursor-pointer shrink-0"
              aria-label="Close search"
            >
              <IoClose className="w-5 h-5" />
            </button>
          </div>
        </form>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Trending Searches */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <IoSparklesOutline className="w-4 h-4 text-[#c9a84c]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0d1535]">
                Trending Searches
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="text-xs font-medium text-[#4a5a7a] hover:text-[#031d42] bg-[#f4f7ff] hover:bg-[#eaf0ff] border border-[#e2e8f4] hover:border-[#c9a84c] px-3.5 py-2 rounded-full transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0d1535] mb-3">
              Popular Categories
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {popularCategories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  onClick={onClose}
                  className="group relative rounded-xl overflow-hidden border border-[#e2e8f4] hover:border-[#c9a84c] transition-all bg-[#f4f7ff] p-2 flex flex-col items-center text-center"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden mb-2">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#0d1535] group-hover:text-[#c9a84c] transition-colors">
                    {cat.name}
                  </span>
                  <span className="text-[10px] text-[#8a9ab8]">
                    {cat.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

