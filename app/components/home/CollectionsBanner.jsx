import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import { IoArrowForward } from "react-icons/io5";

const collections = [
  {
    id: "eternal",
    title: "The Solitaire Edit",
    subtitle: "Precision-cut lab solitaires set in heavy 18K gold and platinum prongs.",
    tag: "Signature Solitaires",
    cta: "Explore Solitaires",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "celestial",
    title: "Celestial Symphony",
    subtitle: "Dazzling chandelier drops, pear hoops, and pavé cocktail earrings.",
    tag: "High Jewellery",
    cta: "Shop Earrings",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "aurora",
    title: "Eternal Bridal",
    subtitle: "Matched proposal solitaires, bridal sets, and continuous eternity bands.",
    tag: "Bridal Sets",
    cta: "Discover Bridal",
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
  },
];

export default function CollectionsBanner() {
  return (
    <section className="py-16 bg-[#f4f7ff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Signature Lines"
          title="Curated"
          titleHighlight="Collections"
          subtitle="Explore distinct design narratives reflecting uncompromising refinement."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-4">
          {collections.map((col) => (
            <div
              key={col.id}
              className="card-hover group relative rounded-3xl overflow-hidden bg-white border border-[#e2e8f4] flex flex-col justify-between shadow-[0_4px_25px_rgba(13,31,60,0.06)] hover:shadow-[0_15px_40px_rgba(13,31,60,0.12)] transition-all"
              style={{ minHeight: "460px" }}
            >
              {/* Background Image Container with Premium Gradient */}
              <div className="absolute inset-0">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031d42] via-[#031d42]/65 to-black/20" />
              </div>

              {/* Tag at Top */}
              <div className="relative z-10 p-6 sm:p-7">
                <span className="inline-block bg-white/95 backdrop-blur-md text-[#031d42] text-[10px] font-extrabold tracking-[0.22em]  px-4 py-1.5 rounded-full border border-white/60 shadow-md">
                  {col.tag}
                </span>
              </div>

              {/* Text Content at Bottom */}
              <div className="relative z-10 p-6 sm:p-8 text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2.5 text-white tracking-tight">
                  {col.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {col.subtitle}
                </p>

                <Link
                  href={`/collections/${col.id}`}
                  className="inline-flex items-center gap-2 btn-gold text-[#031d42] text-xs font-extrabold tracking-widest  px-6 py-3.5 rounded-full shadow-lg group-hover:scale-105 transition-all"
                >
                  {col.cta}
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
