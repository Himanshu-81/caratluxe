"use client";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { IoArrowForward, IoSparklesOutline, IoShieldCheckmarkOutline } from "react-icons/io5";

const collections = [
  {
    id: "eternal",
    title: "The Solitaire Edit",
    tagline: "Unrivalled Fire, Sculpted for Generations",
    subtitle: "Precision-cut lab solitaires set in heavy 18K solid gold and platinum prongs. An eternal celebration of devotion.",
    tag: "Signature Solitaires",
    pieceCount: "28 Designs",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&auto=format&fit=crop&q=85",
    accent: "#c9a84c",
  },
  {
    id: "celestial",
    title: "Celestial Symphony",
    tagline: "Cosmic Radiance in Motion",
    subtitle: "Dazzling chandelier drops, pear hoops, and pavé cocktail earrings crafted with breathtaking optical dispersion.",
    tag: "High Jewellery",
    pieceCount: "22 Designs",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=1000&auto=format&fit=crop&q=85",
    accent: "#e8c97a",
  },
  {
    id: "aurora",
    title: "Eternal Bridal",
    tagline: "Sacred Ceremonies, Conscious Beginnings",
    subtitle: "Matched proposal solitaires, wedding suites, and continuous eternity bands designed for lifelong radiance.",
    tag: "Bridal Suites",
    pieceCount: "34 Designs",
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=1000&auto=format&fit=crop&q=85",
    accent: "#c9a84c",
  },
  {
    id: "royal-tennis",
    title: "The Royal Tennis Suite",
    tagline: "Continuous Strands of Refined Fire",
    subtitle: "Meticulously calibrated round brilliant lab diamonds aligned in seamless claw settings in 18K white gold.",
    tag: "Everyday Luxury",
    pieceCount: "16 Designs",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1000&auto=format&fit=crop&q=85",
    accent: "#e8c97a",
  },
  {
    id: "modern-heritage",
    title: "Modern Mangalsutra",
    tagline: "Sacred Bond Meets Contemporary Sophistication",
    subtitle: "Sleek geometric motifs, solitary central diamonds, and traditional black onyx beads hand-strung in pure 18K yellow gold.",
    tag: "Cultural Modernity",
    pieceCount: "14 Designs",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&auto=format&fit=crop&q=85",
    accent: "#c9a84c",
  },
];

export default function CollectionsPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="bg-[#fcfdfd] text-[#0d1535] min-h-screen">
        {/* ─── Breadcrumbs ─── */}
        <div className="border-b border-[#e9eef6] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#6e7d9b] flex items-center gap-2">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0d1f3c] font-semibold">Collections</span>
          </div>
        </div>

        {/* ─── Hero Header ─── */}
        <section className="bg-gradient-to-b from-[#f5f8ff] via-[#ffffff] to-[#ffffff] py-14 border-b border-[#e8edf7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-6 bg-[#c9a84c]" />
              <span className="text-[10px] font-extrabold tracking-[0.35em] text-[#c9a84c] uppercase">
                The CaratLuxe Atelier
              </span>
              <div className="h-px w-6 bg-[#c9a84c]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0d1f3c] leading-tight tracking-tight">
              Curated <span className="gold-shimmer">Collections</span>
            </h1>
            <p className="mt-4 text-[#526382] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Every CaratLuxe collection tells a distinct story of innovation,
              sustainable plasma diamond synthesis, and generational Indian artistry.
            </p>
          </div>
        </section>

        {/* ─── Collections Editorial Grid ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((col, idx) => (
              <div
                key={col.id}
                className={`card-hover group relative rounded-3xl overflow-hidden bg-white border border-[#e2e8f4] flex flex-col justify-between shadow-xs ${
                  idx === 0 ? "md:col-span-2 min-h-[480px]" : "min-h-[460px]"
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e1d] via-[#060e1d]/65 to-black/20" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
                  <span className="bg-white/95 backdrop-blur-md text-[#0d1f3c] text-[10px] font-extrabold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-sm">
                    {col.tag}
                  </span>
                  <span className="text-white/80 text-xs font-semibold tracking-wider">
                    {col.pieceCount}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-6 sm:p-8 text-white">
                  <p className="text-[#e8c97a] text-xs font-semibold tracking-widest uppercase mb-1">
                    {col.tagline}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                    {col.title}
                  </h3>
                  <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
                    {col.subtitle}
                  </p>

                  <div className="flex items-center gap-4">
                    <Link
                      href={`/products?category=${col.id === "eternal" || col.id === "aurora" ? "rings" : col.id === "celestial" ? "earrings" : col.id === "royal-tennis" ? "bracelets" : "mangalsutra"}`}
                      className="btn-gold text-[#0d1f3c] text-xs font-extrabold tracking-widest uppercase px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md group-hover:scale-105 transition-all"
                    >
                      Shop The Collection
                      <IoArrowForward className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Atelier Values Strip ─── */}
        <section className="bg-[#0d1f3c] text-white py-14 border-t border-[#c9a84c]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <span className="text-[#c9a84c] text-2xl font-bold mb-3 block">✦</span>
              <h4 className="font-serif text-lg font-bold mb-2">100% Conflict-Free Diamond Fire</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Created through plasma deposition reactors using renewable energy, certified by IGI and GIA dossiers.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[#c9a84c] text-2xl font-bold mb-3 block">◈</span>
              <h4 className="font-serif text-lg font-bold mb-2">Generational Atelier Craft</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Finished by master goldsmiths in Mumbai and Jaipur in BIS hallmarked 18K solid gold and 950 platinum.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[#c9a84c] text-2xl font-bold mb-3 block">✧</span>
              <h4 className="font-serif text-lg font-bold mb-2">Lifetime Exchange & Upgrade</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Upgrade your solitaire anytime with 100% diamond credit against our prevailing catalogue prices.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

