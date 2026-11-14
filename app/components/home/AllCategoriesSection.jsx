"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Category data ─── */
const categories = [
  {
    id: "necklaces",
    tag: "NECKLACES",
    label: "Diamond Necklace",
    description:
      "Discover the elegance of our most sought-after pieces, meticulously crafted with precision and passion to elevate your style.",
    href: "/necklaces",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&auto=format&fit=crop&q=85",
  },
  {
    id: "rings",
    tag: "RINGS",
    label: "Solitaire Rings",
    description:
      "Iconic prong settings, pavé halos and eternity bands crafted in 18K gold and platinum for every milestone.",
    href: "/rings",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&auto=format&fit=crop&q=85",
  },
  {
    id: "earrings",
    tag: "EARRINGS",
    label: "Diamond Earrings",
    description:
      "Solitaire studs, pear hoops and dramatic chandeliers — each a statement of pure brilliance.",
    href: "/earrings",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=900&auto=format&fit=crop&q=85",
  },
  {
    id: "bracelets",
    tag: "BRACELETS",
    label: "Tennis Bracelets",
    description:
      "Continuous row tennis strands and flexible diamond bangles — where every carat tells a story.",
    href: "/bracelets",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=900&auto=format&fit=crop&q=85",
  },
  {
    id: "mangalsutra",
    tag: "MANGALSUTRA",
    label: "Diamond Mangalsutra",
    description:
      "Modern interpretations of tradition — minimalist pendants and intricate designs in 18K gold.",
    href: "/mangalsutra",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&auto=format&fit=crop&q=85",
  },
];

const TOTAL = categories.length;
const TRANSITION = "transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.65s ease, filter 0.65s ease";

/* ─── 3D coverflow transform per slot offset ─── */
function slotStyle(offset) {
  if (offset === 0) {
    return {
      transform: "translate(-50%, -50%) rotateY(0deg) scale(1) translateZ(0px)",
      opacity: 1,
      zIndex: 20,
      filter: "brightness(1) drop-shadow(0 40px 80px rgba(0,0,0,0.75))",
      cursor: "default",
      pointerEvents: "auto",
    };
  }
  if (offset === -1) {
    return {
      transform: "translate(calc(-50% - clamp(185px, 27vw, 320px)), -50%) rotateY(38deg) scale(0.70) translateZ(-80px)",
      opacity: 0.6,
      zIndex: 10,
      filter: "brightness(0.6)",
      cursor: "pointer",
      pointerEvents: "auto",
    };
  }
  if (offset === 1) {
    return {
      transform: "translate(calc(-50% + clamp(185px, 27vw, 320px)), -50%) rotateY(-38deg) scale(0.70) translateZ(-80px)",
      opacity: 0.6,
      zIndex: 10,
      filter: "brightness(0.6)",
      cursor: "pointer",
      pointerEvents: "auto",
    };
  }
  /* offsets ±2 — hidden buffer cards, no pointer events */
  const sx = offset < 0 ? -1 : 1;
  return {
    transform: `translate(calc(-50% + ${sx * 100}vw), -50%) rotateY(${-offset * 50}deg) scale(0.4) translateZ(-200px)`,
    opacity: 0,
    zIndex: 1,
    filter: "brightness(0.3)",
    cursor: "default",
    pointerEvents: "none",
  };
}

export default function AllCategoriesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [infoOpacity, setInfoOpacity] = useState(1);
  const touchStartX = useRef(null);
  const busy = useRef(false);

  /* Navigate with debounce */
  const goTo = useCallback((newIdx) => {
    if (busy.current) return;
    busy.current = true;

    /* Fade info text out, change, fade back */
    setInfoOpacity(0);
    setTimeout(() => {
      setActiveIdx(((newIdx % TOTAL) + TOTAL) % TOTAL);
      setInfoOpacity(1);
    }, 300);

    setTimeout(() => { busy.current = false; }, 700);
  }, []);

  const goPrev = useCallback(() => goTo(activeIdx - 1), [activeIdx, goTo]);
  const goNext = useCallback(() => goTo(activeIdx + 1), [activeIdx, goTo]);

  /* Touch swipe */
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 48) dx > 0 ? goNext() : goPrev();
    touchStartX.current = null;
  };

  const current = categories[activeIdx];

  return (
    <section
      className="relative overflow-hidden select-none"
      style={{ background: "#080f1e", minHeight: "92vh" }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* <div className="text-center mt-14 lg:mb-14 2xl:mb-0 px-4">
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, #c9a84c)" }} />
          <span className="text-[9px] tracking-[0.45em] font-bold" style={{ color: "#c9a84c" }}>
            CARATLUXE · EST. MMXXIV
          </span>
          <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, #c9a84c)" }} />
        </div>
        <h2 className="md:text-3xl font-semibold text-white leading-tight mb-4">
          Shop By{" "}
          <span className="gold-shimmer font-bold">Category</span>
        </h2>
        <p className="text-white/50 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          Lab-grown diamonds, ethically crafted — timeless jewellery for every occasion.
        </p>
      </div> */}
      {/* ── Atmospheric BG ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(201,168,76,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ── 3D Carousel Stage ──
           perspective on the wrapper makes all child rotateY transforms
           share the same vanishing point → true coverflow 3D effect. ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "72vh",
          perspective: "1300px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* ── CARATLUXE name – Mathematically locked in the EXACT center of the category images ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center select-none w-full"
          style={{ zIndex: 12 }}
        >
          <span
            className="font-serif tracking-widest text-center uppercase"
            style={{
              fontSize: "clamp(56px, 15vw, 210px)",
              fontWeight: 800,
              color: "rgba(255, 255, 255, 0.38)",
              letterSpacing: "0.06em",
              lineHeight: 1,
              whiteSpace: "nowrap",
              textShadow: "0 0 50px rgba(201, 168, 76, 0.15), 0 0 20px rgba(255, 255, 255, 0.08)",
            }}
          >
            CARATLUXE
          </span>
        </div>
        {[-2, -1, 0, 1, 2].map((offset) => {
          const catIdx = ((activeIdx + offset) % TOTAL + TOTAL) % TOTAL;
          const cat = categories[catIdx];
          const ss = slotStyle(offset);

          return (
            /* KEY = catIdx  →  React reuses the same DOM node when
               activeIdx changes, only updating the style → CSS transitions fire */
            <div
              key={catIdx}
              onClick={
                offset === -1 ? goPrev
                  : offset === 1 ? goNext
                    : undefined
              }
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "clamp(230px, 31vw, 450px)",
                height: "clamp(270px, 37vw, 530px)",
                transition: TRANSITION,
                borderRadius: "1.5rem",
                overflow: "hidden",
                ...ss,
              }}
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                priority={offset === 0}
                sizes="(max-width: 768px) 90vw, 31vw"
                className="object-cover"
                unoptimized
                style={{
                  /* Radial mask gives the "floating jewelry" look */
                  maskImage:
                    offset === 0
                      ? "radial-gradient(ellipse 92% 95% at 50% 50%, black 48%, rgba(0,0,0,0.5) 68%, transparent 88%)"
                      : "radial-gradient(ellipse 86% 90% at 50% 50%, black 36%, transparent 80%)",
                  WebkitMaskImage:
                    offset === 0
                      ? "radial-gradient(ellipse 92% 95% at 50% 50%, black 48%, rgba(0,0,0,0.5) 68%, transparent 88%)"
                      : "radial-gradient(ellipse 86% 90% at 50% 50%, black 36%, transparent 80%)",
                }}
              />

              {/* Gold rim on active card */}
              {offset === 0 && (
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1.5px rgba(201,168,76,0.25), inset 0 -60px 60px rgba(8,15,30,0.55)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Bottom gradient fog ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0"
        style={{
          height: "220px",
          background:
            "linear-gradient(to top, rgba(8,15,30,0.98) 0%, rgba(8,15,30,0.6) 50%, transparent 100%)",
          zIndex: 40,
        }}
      />

      {/* ── Bottom info bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 sm:px-12 lg:px-16 pb-10 sm:pb-14"
        style={{
          zIndex: 50,
          opacity: infoOpacity,
          transition: "opacity 0.28s ease",
        }}
      >
        {/* LEFT: tag · name · description · arrows */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="h-px w-5" style={{ background: "#c9a84c" }} />
            <span
              className="text-[9px] font-extrabold tracking-[0.42em]"
              style={{ color: "#c9a84c" }}
            >
              {current.tag}
            </span>
          </div>

          {/* Category name */}
          <h2
            className="text-white font-bold leading-tight mb-2.5"
            style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.65rem)" }}
          >
            {current.label}
          </h2>

          {/* Description */}
          <p
            className="hidden sm:block text-white/55 leading-relaxed mb-5"
            style={{ fontSize: "13px", maxWidth: "280px" }}
          >
            {current.description}
          </p>

          {/* Arrows + dots */}
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              aria-label="Previous category"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-250 cursor-pointer"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goNext}
              aria-label="Next category"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-250 cursor-pointer"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            {/* Progress dots */}
            <div className="flex items-center gap-2 ml-1">
              {categories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${categories[i].label}`}
                  className="rounded-full transition-all duration-350 cursor-pointer"
                  style={{
                    width: i === activeIdx ? "22px" : "6px",
                    height: "6px",
                    background:
                      i === activeIdx
                        ? "#c9a84c"
                        : "rgba(255,255,255,0.28)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Shop Now */}
        <Link
          href={current.href}
          className="group flex items-center gap-2.5 pb-1 transition-colors"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.18)" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#c9a84c")}
          onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.18)")}
        >
          <span
            className="text-white font-extrabold tracking-[0.22em] group-hover:text-[#e8c97a] transition-colors"
            style={{ fontSize: "clamp(0.65rem, 1.3vw, 0.85rem)" }}
          >
            SHOP NOW
          </span>
          <svg
            className="text-[#c9a84c] group-hover:translate-x-1.5 transition-transform duration-300"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
