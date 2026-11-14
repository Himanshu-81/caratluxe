"use client";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { IoSparklesOutline, IoShieldCheckmarkOutline, IoHeartOutline, IoArrowForward } from "react-icons/io5";

export default function AboutPage() {
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
            <span className="text-[#0d1f3c] font-semibold">About CaratLuxe</span>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="relative bg-[#0d1f3c] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=1600&auto=format&fit=crop&q=80"
              alt="Atelier Diamond Craft"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#c9a84c]" />
              <span className="text-[10px] font-extrabold tracking-[0.35em] text-[#e8c97a] uppercase">
                Conscious Luxury · Est. MMXXIV
              </span>
              <div className="h-px w-8 bg-[#c9a84c]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Crafting Brilliance with <span className="gold-shimmer">Pure Conscience</span>
            </h1>
            <p className="mt-5 text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              CaratLuxe was born from a singular belief: the world’s most precious
              milestones deserve diamonds that reflect the highest brilliance of human
              ingenuity, without leaving a footprint on our planet.
            </p>
          </div>
        </section>

        {/* ─── Our Story & Mission ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] font-extrabold tracking-[0.3em] text-[#c9a84c] uppercase">
                The CaratLuxe Genesis
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0d1f3c] leading-tight">
                Where Plasma Science Meets Generational Indian Artistry
              </h2>
              <p className="text-sm text-[#526382] leading-relaxed">
                For centuries, diamond jewellery was veiled in steep markups, ecological
                displacement, and untraceable supply chains. We set out to redefine fine
                jewellery for modern lovers of elegance.
              </p>
              <p className="text-sm text-[#526382] leading-relaxed">
                By harnessing renewable solar plasma technology, we recreate the intense
                pressure and heat of the earth's mantle in high-tech laboratories.
                The resulting crystals are chemically, optically, and physically identical
                to mined diamonds — pure Type IIa carbon.
              </p>
              <p className="text-sm text-[#526382] leading-relaxed">
                Each stone is then hand-cut, inspected, and set by master Indian
                goldsmiths in hallmarked 18K solid gold and 950 platinum, preserving
                heritage craftsmanship while honoring our planet.
              </p>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#e2e8f4]">
              <Image
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&auto=format&fit=crop&q=80"
                alt="Jewellery Crafting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ─── Core Values Strip ─── */}
        <section className="bg-[#f7f9fd] py-16 border-t border-b border-[#e8edf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-extrabold tracking-[0.3em] text-[#c9a84c] uppercase">
                Our Four Pillars
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0d1f3c] mt-1">
                The CaratLuxe Promise
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-7 rounded-2xl border border-[#e2e8f4] shadow-xs">
                <span className="text-[#c9a84c] text-3xl font-bold mb-3 block">✦</span>
                <h4 className="font-serif text-base font-bold text-[#0d1f3c] mb-2">
                  100% Conflict Free
                </h4>
                <p className="text-xs text-[#6e7d9b] leading-relaxed">
                  Zero mining, zero child labor, zero ecological degradation. Guaranteed ethical origin.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#e2e8f4] shadow-xs">
                <span className="text-[#c9a84c] text-3xl font-bold mb-3 block">◈</span>
                <h4 className="font-serif text-base font-bold text-[#0d1f3c] mb-2">
                  IGI & GIA Certified
                </h4>
                <p className="text-xs text-[#6e7d9b] leading-relaxed">
                  Every solitaire above 0.50 CT features a microscopic laser girdle inscription matching its dossier.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#e2e8f4] shadow-xs">
                <span className="text-[#c9a84c] text-3xl font-bold mb-3 block">✧</span>
                <h4 className="font-serif text-base font-bold text-[#0d1f3c] mb-2">
                  Transparent Value
                </h4>
                <p className="text-xs text-[#6e7d9b] leading-relaxed">
                  Direct atelier-to-doorstep model offering up to 70% savings compared to mined retail markups.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#e2e8f4] shadow-xs">
                <span className="text-[#c9a84c] text-3xl font-bold mb-3 block">◇</span>
                <h4 className="font-serif text-base font-bold text-[#0d1f3c] mb-2">
                  Lifetime Upgrade
                </h4>
                <p className="text-xs text-[#6e7d9b] leading-relaxed">
                  100% diamond credit value guarantee towards any future solitaire upgrade at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Numbers / Impact ─── */}
        <section className="bg-[#0d1f3c] text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-[#e8c97a]">14,000+</p>
              <p className="text-xs text-white/70 uppercase tracking-wider mt-1">Carats Grown Consciously</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-[#e8c97a]">100%</p>
              <p className="text-xs text-white/70 uppercase tracking-wider mt-1">Renewable Energy Powered</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-[#e8c97a]">4.95 / 5</p>
              <p className="text-xs text-white/70 uppercase tracking-wider mt-1">Verified Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-[#e8c97a]">0 Tons</p>
              <p className="text-xs text-white/70 uppercase tracking-wider mt-1">Earth Mining Displaced</p>
            </div>
          </div>
        </section>

        {/* ─── Bottom CTA ─── */}
        <section className="py-16 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1f3c] mb-3">
              Experience Conscious Splendour
            </h3>
            <p className="text-xs sm:text-sm text-[#526382] leading-relaxed mb-6">
              Discover our master-crafted collections of certified solitaire rings,
              fine necklaces, studs, and tennis strands.
            </p>
            <Link
              href="/products"
              className="btn-gold text-[#0d1f3c] text-xs font-extrabold tracking-widest uppercase px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-md hover:scale-105 transition-all"
            >
              Shop The Atelier
              <IoArrowForward className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

