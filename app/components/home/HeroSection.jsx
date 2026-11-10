"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=1600&auto=format&fit=crop&q=85",
    eyebrow: "The Bridal Atelier",
    titlePrimary: "The Solitaire",
    titleHighlight: "Collection",
    titleSuffix: "2026",
    description:
      "Sculpted to radiate unmatched fire. Explore iconic prong settings, pavé halos, and eternity bands crafted in 18K gold and platinum.",
    primaryCta: { label: "Explore Bridal", href: "/collections/eternal" },
    secondaryCta: { label: "Custom Design", href: "/engagement" },
    badges: [
      { icon: "✦", label: "Bespoke Settings" },
      { icon: "◈", label: "Conflict Free" },
      { icon: "◇", label: "0% EMI Available" },
      { icon: "✧", label: "Hallmarked Gold" },
    ],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=1600&auto=format&fit=crop&q=85",
    eyebrow: "Conscious Brilliance",
    titlePrimary: "Grown With",
    titleHighlight: "Pure Science",
    titleSuffix: "And Soul.",
    description:
      "Optically and chemically indistinguishable from mined diamonds. Higher carats, superior clarity, without the environmental cost.",
    primaryCta: { label: "Learn 4Cs", href: "/education" },
    secondaryCta: { label: "View Bestsellers", href: "/shop" },
    badges: [
      { icon: "✦", label: "GIA Inscription" },
      { icon: "◈", label: "Renewable Energy" },
      { icon: "◇", label: "100% Value Credit" },
      { icon: "✧", label: "Direct Atelier" },
    ],
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0d1f3c] text-white">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        navigation={{
          nextEl: ".hero-swiper-next",
          prevEl: ".hero-swiper-prev",
        }}
        loop={true}
        className="hero-swiper h-[80vh] min-h-[580px] max-h-[820px] w-full"
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={banner.id} className="relative w-full h-full">
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={banner.image}
                alt={banner.titlePrimary}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
              {/* Dynamic luxury gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/90 via-[#0d1f3c]/60 to-transparent sm:w-3/4 md:w-2/3" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/80 via-transparent to-transparent" />
            </div>

            {/* Slide Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-xl text-white py-12">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="h-px w-8 bg-[#c9a84c]" />
                  <span className="text-[#e8c97a] text-[10px] sm:text-xs tracking-[0.28em]  font-bold">
                    {banner.eyebrow}
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-semibold leading-[1.1] mb-5 tracking-tight">
                  {banner.titlePrimary}{" "}
                  <span className="gold-shimmer font-bold block sm:inline">
                    {banner.titleHighlight}
                  </span>{" "}
                  {banner.titleSuffix}
                </h1>

                {/* Subtitle */}
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                  {banner.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={banner.primaryCta.href}
                    className="btn-gold text-[#0d1f3c] font-bold text-xs tracking-widest  px-7 py-3.5 sm:px-8 sm:py-4 rounded-full inline-flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                  >
                    {banner.primaryCta.label}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>

                  <Link
                    href={banner.secondaryCta.href}
                    className="border border-white/40 hover:border-[#c9a84c] text-white hover:text-[#e8c97a] text-xs font-semibold tracking-widest  px-6 py-3.5 sm:px-7 sm:py-4 rounded-full transition-all bg-white/5 backdrop-blur-sm"
                  >
                    {banner.secondaryCta.label}
                  </Link>
                </div>

                {/* Trust Badges Bar */}
                <div className="flex flex-wrap gap-4 sm:gap-6 mt-10 pt-6 border-t border-white/15">
                  {banner.badges.map((b) => (
                    <div key={b.label} className="flex items-center gap-1.5 text-xs text-white/80">
                      <span className="text-[#c9a84c] font-bold">{b.icon}</span>
                      <span className="text-[11px] tracking-wider  font-medium">
                        {b.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Navigation Arrows */}
      <button
        type="button"
        className="hero-swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-[#c9a84c] border border-white/20 hover:border-[#c9a84c] text-white hover:text-[#0d1f3c] hidden sm:flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <IoChevronBack className="w-5 h-5" />
      </button>

      <button
        type="button"
        className="hero-swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-[#c9a84c] border border-white/20 hover:border-[#c9a84c] text-white hover:text-[#0d1f3c] hidden sm:flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
        aria-label="Next slide"
      >
        <IoChevronForward className="w-5 h-5" />
      </button>
    </section>
  );
}
