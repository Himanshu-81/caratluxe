import Image from "next/image";
import Link from "next/link";

export default function EngagementSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#031d42] text-white">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)" }}
        />
        <div
          className="absolute -left-20 -bottom-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #1a3060 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#c9a84c]" />
              <span className="text-[#e8c97a] text-[11px] tracking-[0.35em]  font-bold">
                The Proposal Studio
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-semibold leading-[1.12] mb-6 tracking-tight">
              Make Your Forever <br />
              <span className="gold-shimmer font-bold">Unforgettable</span>
            </h2>

            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              From hand-selecting the cut, color, and carat to customized custom settings, design a dream engagement ring with our master gemologists.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/engagement"
                className="btn-gold text-[#031d42] font-extrabold text-xs tracking-widest  px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
              >
                Design Your Ring
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/consultation"
                className="border border-[#c9a84c]/50 hover:border-[#c9a84c] text-[#e8c97a] hover:text-white text-xs font-bold tracking-widest  px-8 py-4 rounded-full transition-all bg-white/5 backdrop-blur-sm"
              >
                Book Gemologist Call
              </Link>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="gold-shimmer text-3xl sm:text-4xl font-extrabold">10k+</p>
                <p className="text-white/60 text-xs tracking-wider  mt-1">Happy Couples</p>
              </div>
              <div>
                <p className="gold-shimmer text-3xl sm:text-4xl font-extrabold">4.9★</p>
                <p className="text-white/60 text-xs tracking-wider  mt-1">Average Rating</p>
              </div>
              <div>
                <p className="gold-shimmer text-3xl sm:text-4xl font-extrabold">100%</p>
                <p className="text-white/60 text-xs tracking-wider  mt-1">Certified Diamonds</p>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white/10 ring-1 ring-[#c9a84c]/30">
              <Image
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=85"
                alt="Diamond Ring Engagement Proposal"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031d42]/90 via-[#031d42]/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#031d42]/80 backdrop-blur-md border border-white/20 text-white shadow-lg">
                <span className="text-[#e8c97a] text-[10px] tracking-widest  font-bold">Custom Atelier</span>
                <p className="text-base font-bold text-white mt-0.5">Bespoke Diamond Solitaire</p>
                <p className="text-[11px] text-white/70 mt-1 leading-relaxed">
                  3D Render & Preview before casting in 18K Hallmarked Gold or Platinum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
