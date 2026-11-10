import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";

const occasions = [
  {
    id: "anniversary",
    label: "Anniversary",
    sub: "Eternity bands & tennis strands",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "engagement",
    label: "Engagement",
    sub: "Iconic solitaire & halo rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "wedding",
    label: "Wedding",
    sub: "Bridal sets & matching bands",
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "birthday",
    label: "Birthday",
    sub: "Solitaire pendants & bloom cuts",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "self-gift",
    label: "Self-Love",
    sub: "Effortless solitaire studs & drops",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "daily-wear",
    label: "Daily Luxe",
    sub: "Minimal stackers & chains",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
  },
];

export default function ShopByOccasion() {
  return (
    <section className="py-16 bg-[#f4f7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Milestones & Moments"
          title="Shop by"
          titleHighlight="Occasion"
          subtitle="Discover curated diamond pieces designed for life's most memorable moments."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-3">
          {occasions.map((occ) => (
            <Link
              key={occ.id}
              href={`/occasion/${occ.id}`}
              className="card-hover group relative rounded-2xl overflow-hidden border border-[#e2e8f4] bg-white flex flex-col shadow-[0_4px_16px_rgba(13,31,60,0.04)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f4f7ff]">
                <Image
                  src={occ.image}
                  alt={occ.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031d42] via-[#031d42]/30 to-transparent" />

                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end text-white">
                  <p className="text-base sm:text-lg font-bold text-white group-hover:text-[#e8c97a] transition-colors leading-tight">
                    {occ.label}
                  </p>
                  <p className="text-[11px] text-white/75 mt-1 leading-snug line-clamp-2">
                    {occ.sub}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
