import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";

export default function ShopByCategory() {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Explore Handcrafted Lines"
          title="Shop by"
          titleHighlight="Category"
          subtitle="Discover curated certified lab diamond jewellery shaped by timeless artistry."
        />

        {/* Bento Grid: 1 large on left, 3 on right (1 wide on top, 2 side-by-side below) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Large Left Card - Rings */}
          <Link
            href="/rings"
            className="lg:col-span-6 card-hover group relative rounded-3xl overflow-hidden min-h-[460px] lg:min-h-[580px] border border-[#e2e8f4] flex flex-col justify-end shadow-sm"
          >
            <Image
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&auto=format&fit=crop&q=85"
              alt="Diamond Rings"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/90 via-[#0d1f3c]/40 to-transparent" />

            <div className="relative z-10 p-8 sm:p-10 text-white">
              <span className="inline-block bg-[#c9a84c] text-[#0d1f3c] text-[10px] font-extrabold tracking-[0.25em]  px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
                Most Cherished
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-2 text-white">
                Rings
              </h3>
              <p className="text-white/80 text-sm max-w-md mb-6 leading-relaxed">
                Handcrafted solitaires, pavé accents, three-stone silhouettes & eternity bands.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold  tracking-widest text-[#e8c97a] group-hover:gap-3 transition-all">
                Explore Rings Collection →
              </span>
            </div>
          </Link>

          {/* Right Column - 3 Categories */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Top Wide Card - Earrings */}
            <Link
              href="/earrings"
              className="card-hover group relative rounded-3xl overflow-hidden min-h-[260px] border border-[#e2e8f4] flex flex-col justify-end shadow-sm flex-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80"
                alt="Diamond Earrings"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/85 via-[#0d1f3c]/30 to-transparent" />

              <div className="relative z-10 p-6 sm:p-8 text-white">
                <span className="text-[#e8c97a] text-[10px] font-bold tracking-widest  mb-1 block">
                  Everyday Luxe
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                  Earrings
                </h3>
                <p className="text-white/80 text-xs sm:text-sm max-w-sm mb-3">
                  Solitaire studs, pear hoops & dramatic celestial chandeliers.
                </p>
                <span className="text-xs font-bold text-[#c9a84c] tracking-wider  inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Shop Earrings →
                </span>
              </div>
            </Link>

            {/* Bottom 2 Split Cards - Bracelets & Necklaces */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              {/* Bracelets */}
              <Link
                href="/bracelets"
                className="card-hover group relative rounded-3xl overflow-hidden min-h-[260px] border border-[#e2e8f4] flex flex-col justify-end shadow-sm"
              >
                <Image
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80"
                  alt="Diamond Bracelets"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/90 via-[#0d1f3c]/40 to-transparent" />

                <div className="relative z-10 p-6 text-white">
                  <h4 className="font-serif text-xl font-bold text-white mb-1">
                    Bracelets
                  </h4>
                  <p className="text-white/75 text-xs mb-3">
                    Tennis strands & flexible bangles.
                  </p>
                  <span className="text-[11px] font-bold text-[#e8c97a] tracking-wider ">
                    Explore →
                  </span>
                </div>
              </Link>

              {/* Necklaces */}
              <Link
                href="/necklaces"
                className="card-hover group relative rounded-3xl overflow-hidden min-h-[260px] border border-[#e2e8f4] flex flex-col justify-end shadow-sm"
              >
                <Image
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80"
                  alt="Diamond Necklaces"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/90 via-[#0d1f3c]/40 to-transparent" />

                <div className="relative z-10 p-6 text-white">
                  <h4 className="font-serif text-xl font-bold text-white mb-1">
                    Necklaces
                  </h4>
                  <p className="text-white/75 text-xs mb-3">
                    Collar chokers & solitaire pendants.
                  </p>
                  <span className="text-[11px] font-bold text-[#e8c97a] tracking-wider ">
                    Explore →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
