import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import { IoArrowForward } from "react-icons/io5";

const genders = [
  {
    id: "women",
    label: "For Her",
    tag: "Women's Collection",
    description: "Graceful solitaires, floral cluster earrings, delicate tennis strands, and pavé necklaces.",
    cta: "Explore Women's Jewellery",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
    items: ["Diamond Solitaires", "Drop Earrings", "Tennis Bracelets", "Chokers"],
    href: "/women",
  },
  {
    id: "men",
    label: "For Him",
    tag: "Men's Collection",
    description: "Architectural signet rings, bold diamond bands, understated studs, and custom cufflinks.",
    cta: "Explore Men's Jewellery",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&auto=format&fit=crop&q=80",
    items: ["Eternity Bands", "Signet Rings", "Diamond Studs", "Cufflinks"],
    href: "/men",
  },
];

export default function GenderDiamondShowcase() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Crafted For All"
          title="Designed"
          titleHighlight="For Him & Her"
          subtitle="Jewellery expressing individual elegance and modern statements for everyone."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-4">
          {genders.map((g) => (
            <div
              key={g.id}
              className="card-hover group relative rounded-3xl overflow-hidden border border-[#e2e8f4] bg-white flex flex-col justify-end shadow-[0_4px_25px_rgba(13,31,60,0.06)] hover:shadow-[0_15px_40px_rgba(13,31,60,0.12)] transition-all"
              style={{ minHeight: "440px" }}
            >
              {/* Background Image with Rich Navy & Soft Tint Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={g.image}
                  alt={g.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031d42] via-[#031d42]/70 to-black/20" />
              </div>

              {/* Foreground Card Content */}
              <div className="relative z-10 p-8 sm:p-10 text-white">
                <span className="inline-block bg-[#c9a84c] text-[#031d42] text-[10px] font-extrabold tracking-[0.25em]  px-4 py-1.5 rounded-full mb-3.5 shadow-md">
                  {g.tag}
                </span>

                <h3 className="text-3xl sm:text-4xl font-bold mb-3 text-white tracking-tight">
                  {g.label}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-md font-normal">
                  {g.description}
                </p>

                {/* Sub-item Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="bg-white/10 backdrop-blur-md border border-white/25 text-white text-[11px] font-medium tracking-wide px-3.5 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href={g.href}
                  className="btn-gold text-[#031d42] font-extrabold text-xs tracking-widest  px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg group-hover:scale-105 transition-transform"
                >
                  {g.cta}
                  <IoArrowForward className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
