"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { IoCheckmarkCircle, IoSparklesOutline, IoShieldCheckmarkOutline, IoArrowForward } from "react-icons/io5";

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState("4cs");

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
            <span className="text-[#0d1f3c] font-semibold">Diamond Education & 4Cs</span>
          </div>
        </div>

        {/* ─── Hero Header ─── */}
        <section className="bg-gradient-to-b from-[#f5f8ff] via-[#ffffff] to-[#ffffff] py-14 border-b border-[#e8edf7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-6 bg-[#c9a84c]" />
              <span className="text-[10px] font-extrabold tracking-[0.35em] text-[#c9a84c] uppercase">
                The CaratLuxe Knowledge Hub
              </span>
              <div className="h-px w-6 bg-[#c9a84c]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0d1f3c] leading-tight tracking-tight">
              The Science of <span className="gold-shimmer">Pure Brilliance</span>
            </h1>
            <p className="mt-4 text-[#526382] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about certified lab-grown diamonds, the
              universal 4Cs, optical fire, and conscious luxury.
            </p>

            {/* Nav Switcher */}
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <button
                onClick={() => setActiveTab("4cs")}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === "4cs"
                    ? "bg-[#0d1f3c] text-white shadow-sm ring-2 ring-[#c9a84c]/50"
                    : "bg-white text-[#4a5a7a] border border-[#e2e8f4] hover:border-[#c9a84c]"
                }`}
              >
                The 4Cs Guide
              </button>
              <button
                onClick={() => setActiveTab("comparison")}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === "comparison"
                    ? "bg-[#0d1f3c] text-white shadow-sm ring-2 ring-[#c9a84c]/50"
                    : "bg-white text-[#4a5a7a] border border-[#e2e8f4] hover:border-[#c9a84c]"
                }`}
              >
                Lab vs Mined Diamonds
              </button>
              <button
                onClick={() => setActiveTab("certification")}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === "certification"
                    ? "bg-[#0d1f3c] text-white shadow-sm ring-2 ring-[#c9a84c]/50"
                    : "bg-white text-[#4a5a7a] border border-[#e2e8f4] hover:border-[#c9a84c]"
                }`}
              >
                IGI & GIA Certification
              </button>
            </div>
          </div>
        </section>

        {/* ─── TAB 1: The 4Cs Guide ─── */}
        {activeTab === "4cs" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cut */}
              <div className="bg-white rounded-3xl p-8 border border-[#e2e8f4] shadow-xs">
                <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase block mb-1">
                  1. Cut (The Heart of Sparkle)
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0d1f3c] mb-3">
                  Hearts & Arrows Precision
                </h3>
                <p className="text-xs sm:text-sm text-[#526382] leading-relaxed mb-4">
                  A diamond’s cut dictates its light reflection, fire, and
                  scintillation. At CaratLuxe, we curate only "Excellent" and "Ideal"
                  cut grades with symmetrical facet alignment for maximum optical return.
                </p>
                <div className="bg-[#f7f9fd] p-4 rounded-xl border border-[#e2e8f4] text-xs space-y-1.5">
                  <div className="flex justify-between font-bold text-[#0d1f3c]">
                    <span>Ideal / Excellent Cut</span>
                    <span className="text-[#c9a84c]">✦ CaratLuxe Standard</span>
                  </div>
                  <p className="text-[11px] text-[#6e7d9b]">
                    Delivers 100% internal light reflection back through the crown.
                  </p>
                </div>
              </div>

              {/* Color */}
              <div className="bg-white rounded-3xl p-8 border border-[#e2e8f4] shadow-xs">
                <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase block mb-1">
                  2. Color (Purity & Whiteness)
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0d1f3c] mb-3">
                  Colorless D, E & F Grades
                </h3>
                <p className="text-xs sm:text-sm text-[#526382] leading-relaxed mb-4">
                  Graded on a scale from D (completely colorless) to Z (pale yellow).
                  CaratLuxe solitares are strictly selected from the elite top tier (D, E, F),
                  ensuring a glacier-white purity without any tint.
                </p>
                <div className="bg-[#f7f9fd] p-4 rounded-xl border border-[#e2e8f4] text-xs space-y-1.5">
                  <div className="flex justify-between font-bold text-[#0d1f3c]">
                    <span>D – F Colorless</span>
                    <span className="text-[#c9a84c]">✦ Pure White Fire</span>
                  </div>
                  <p className="text-[11px] text-[#6e7d9b]">
                    Chemically pure Type IIa diamond crystal lattice.
                  </p>
                </div>
              </div>

              {/* Clarity */}
              <div className="bg-white rounded-3xl p-8 border border-[#e2e8f4] shadow-xs">
                <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase block mb-1">
                  3. Clarity (Inner Purity)
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0d1f3c] mb-3">
                  VVS1 & VVS2 Flawlessness
                </h3>
                <p className="text-xs sm:text-sm text-[#526382] leading-relaxed mb-4">
                  Clarity measures the microscopic internal characteristics (inclusions).
                  CaratLuxe stones are 100% eye-clean, offering peerless crystalline
                  transparency even under 10x gemological magnification.
                </p>
                <div className="bg-[#f7f9fd] p-4 rounded-xl border border-[#e2e8f4] text-xs space-y-1.5">
                  <div className="flex justify-between font-bold text-[#0d1f3c]">
                    <span>VVS1 – VS1 Eye-Clean</span>
                    <span className="text-[#c9a84c]">✦ Zero Visible Inclusions</span>
                  </div>
                  <p className="text-[11px] text-[#6e7d9b]">
                    Individually verified by IGI master gemologists.
                  </p>
                </div>
              </div>

              {/* Carat */}
              <div className="bg-white rounded-3xl p-8 border border-[#e2e8f4] shadow-xs">
                <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase block mb-1">
                  4. Carat (Weight & Presence)
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0d1f3c] mb-3">
                  Bigger Fire, Conscious Value
                </h3>
                <p className="text-xs sm:text-sm text-[#526382] leading-relaxed mb-4">
                  Carat refers to the physical weight of the diamond (1 carat = 200 mg).
                  Because our lab diamonds bypass traditional mining markups, you can
                  enjoy up to 2.5x larger carats for the exact same budget.
                </p>
                <div className="bg-[#f7f9fd] p-4 rounded-xl border border-[#e2e8f4] text-xs space-y-1.5">
                  <div className="flex justify-between font-bold text-[#0d1f3c]">
                    <span>1.00 – 3.00+ Carats</span>
                    <span className="text-[#c9a84c]">✦ 70% More Value</span>
                  </div>
                  <p className="text-[11px] text-[#6e7d9b]">
                    Calibrated face-up dimensions for striking hand presence.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── TAB 2: Comparison ─── */}
        {activeTab === "comparison" && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="bg-white rounded-3xl border border-[#e2e8f4] overflow-hidden shadow-xs">
              <div className="p-6 sm:p-8 bg-[#0d1f3c] text-white text-center">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
                  Lab-Grown vs. Mined Diamonds
                </h3>
                <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto">
                  Physically, optically, and chemically identical. The only difference is
                  their origin and your conscience.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#f4f7ff] border-b border-[#e2e8f4] text-[#0d1f3c] font-bold">
                      <th className="p-4 sm:p-5">Metric</th>
                      <th className="p-4 sm:p-5 text-[#c9a84c]">CaratLuxe Lab Diamonds</th>
                      <th className="p-4 sm:p-5 text-[#6e7d9b]">Earth-Mined Diamonds</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eef2f8] text-[#4a5a7a]">
                    <tr>
                      <td className="p-4 sm:p-5 font-bold text-[#0d1f3c]">Chemical Composition</td>
                      <td className="p-4 sm:p-5 font-semibold text-[#0d1f3c]">100% Pure Carbon (C)</td>
                      <td className="p-4 sm:p-5">100% Pure Carbon (C)</td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-5 font-bold text-[#0d1f3c]">Refractive Index</td>
                      <td className="p-4 sm:p-5 font-semibold text-[#0d1f3c]">2.42 (Exact Fire)</td>
                      <td className="p-4 sm:p-5">2.42 (Exact Fire)</td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-5 font-bold text-[#0d1f3c]">Hardness (Mohs Scale)</td>
                      <td className="p-4 sm:p-5 font-semibold text-[#0d1f3c]">10 / 10 (Hardest Mineral)</td>
                      <td className="p-4 sm:p-5">10 / 10 (Hardest Mineral)</td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-5 font-bold text-[#0d1f3c]">Diamond Tester Result</td>
                      <td className="p-4 sm:p-5 font-bold text-emerald-700">✓ Tests Positive as Real Diamond</td>
                      <td className="p-4 sm:p-5">✓ Tests Positive as Real Diamond</td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-5 font-bold text-[#0d1f3c]">Ecological Impact</td>
                      <td className="p-4 sm:p-5 font-bold text-emerald-700">Zero Soil Displaced · Solar Powered</td>
                      <td className="p-4 sm:p-5 text-red-600">~250 Tons Earth Displaced Per Carat</td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-5 font-bold text-[#0d1f3c]">Price Advantage</td>
                      <td className="p-4 sm:p-5 font-bold text-[#c9a84c]">65% – 75% More Affordable</td>
                      <td className="p-4 sm:p-5">Traditional Luxury Markups</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* ─── TAB 3: Certification ─── */}
        {activeTab === "certification" && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e2e8f4] shadow-xs">
              <div className="max-w-2xl mx-auto text-center mb-10">
                <span className="text-[10px] font-extrabold tracking-[0.3em] text-[#c9a84c] uppercase">
                  Global Gold Standard
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#0d1f3c] mt-1 mb-3">
                  IGI & GIA Laser Inscription
                </h3>
                <p className="text-xs sm:text-sm text-[#526382] leading-relaxed">
                  Every CaratLuxe solitaire is graded under strict laboratory protocols.
                  The unique certificate number is microscopic laser-inscribed onto the
                  girdle, matching the digital certificate dossier.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#f7f9fd] p-6 rounded-2xl border border-[#e2e8f4] text-center">
                  <span className="text-[#c9a84c] text-3xl font-bold mb-2 block">1</span>
                  <h4 className="font-bold text-[#0d1f3c] text-sm mb-1">Laser Inscribed</h4>
                  <p className="text-xs text-[#6e7d9b]">
                    Invisible to naked eyes, legible under 10x jeweler loupe.
                  </p>
                </div>
                <div className="bg-[#f7f9fd] p-6 rounded-2xl border border-[#e2e8f4] text-center">
                  <span className="text-[#c9a84c] text-3xl font-bold mb-2 block">2</span>
                  <h4 className="font-bold text-[#0d1f3c] text-sm mb-1">Online Dossier</h4>
                  <p className="text-xs text-[#6e7d9b]">
                    Instantly verifiable on official IGI.org or GIA.edu portals.
                  </p>
                </div>
                <div className="bg-[#f7f9fd] p-6 rounded-2xl border border-[#e2e8f4] text-center">
                  <span className="text-[#c9a84c] text-3xl font-bold mb-2 block">3</span>
                  <h4 className="font-bold text-[#0d1f3c] text-sm mb-1">BIS Hallmarked</h4>
                  <p className="text-xs text-[#6e7d9b]">
                    Every setting stamped with government 18K (750) hallmarks.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── Bottom CTA ─── */}
        <section className="bg-[#0d1f3c] text-white py-14 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="font-serif text-3xl font-bold mb-3">
              Ready to Choose Your Forever Piece?
            </h3>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
              Browse our handcrafted collection of IGI-certified lab-grown diamond solitaires,
              rings, earrings, and necklaces.
            </p>
            <Link
              href="/products"
              className="btn-gold text-[#0d1f3c] text-xs font-extrabold tracking-widest uppercase px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
            >
              Explore Diamond Jewellery
              <IoArrowForward className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

