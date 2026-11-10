"use client";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────
   Category rows – each array is
   duplicated inside <MarqueeRow> for a
   seamless infinite loop
───────────────────────────────────── */
const row1 = [
    { id: "rings", label: "Rings", tag: "Most Loved", href: "/rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80" },
    { id: "earrings", label: "Earrings", tag: "Everyday Luxe", href: "/earrings", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&auto=format&fit=crop&q=80" },
    { id: "necklaces", label: "Necklaces", tag: "Statement Pieces", href: "/necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80" },
    { id: "bracelets", label: "Bracelets", tag: "Wrist Candy", href: "/bracelets", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80" },
    { id: "mangalsutra", label: "Mangalsutra", tag: "Bridal Essential", href: "/mangalsutra", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80" },
    { id: "pendants", label: "Pendants", tag: "Solitaire Drops", href: "/pendants", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&auto=format&fit=crop&q=80" },
];

const row2 = [
    { id: "bangles", label: "Bangles", tag: "Stacking Luxe", href: "/bangles", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80" },
    { id: "engagement", label: "Engagement Rings", tag: "Bridal Solitaires", href: "/engagement", image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=600&auto=format&fit=crop&q=80" },
    { id: "hoops", label: "Hoop Earrings", tag: "Contemporary", href: "/earrings", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&auto=format&fit=crop&q=80" },
    { id: "chains", label: "Chains", tag: "Daily Wear", href: "/chains", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&auto=format&fit=crop&q=80" },
    { id: "chokers", label: "Chokers", tag: "Bold & Modern", href: "/necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80" },
    { id: "eternity", label: "Eternity Bands", tag: "Anniversary", href: "/rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80" },
];

const row3 = [
    { id: "studs", label: "Diamond Studs", tag: "Timeless", href: "/earrings", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&auto=format&fit=crop&q=80" },
    { id: "tennis", label: "Tennis Bracelets", tag: "Iconic", href: "/bracelets", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80" },
    { id: "solitaire", label: "Solitaire Rings", tag: "Most Cherished", href: "/rings", image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=600&auto=format&fit=crop&q=80" },
    { id: "layered", label: "Layered Necklaces", tag: "Trending Now", href: "/necklaces", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&auto=format&fit=crop&q=80" },
    { id: "modmangal", label: "Modern Mangalsutra", tag: "Modern Bridal", href: "/mangalsutra", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80" },
    { id: "pave", label: "Pavé Rings", tag: "High Jewellery", href: "/rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80" },
];

/* ── Single card ── */
function CategoryCard({ cat }) {
    return (
        <Link
            href={cat.href}
            className="group relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
            style={{
                width: "260px",
                height: "178px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.12)",
            }}
        >
            {/* Photo */}
            <Image
                src={cat.image}
                alt={cat.label}
                fill
                sizes="260px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
            />

            {/* Gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(155deg, rgba(13,31,60,0.2) 0%, rgba(7,15,31,0.72) 55%, rgba(6,13,26,0.97) 100%)",
                }}
            />

            {/* Gold ring on hover */}
            <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: "inset 0 0 0 1.5px #c9a84c" }}
            />

            {/* Badge */}
            <div className="absolute top-3 left-3 z-10">
                <span
                    className="text-[8px] font-extrabold tracking-[0.18em] px-2.5 py-1 rounded-full"
                    style={{
                        background: "rgba(201,168,76,0.14)",
                        border: "1px solid rgba(201,168,76,0.32)",
                        color: "#e8c97a",
                        backdropFilter: "blur(6px)",
                    }}
                >
                    {cat.tag}
                </span>
            </div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-bold text-[15px] leading-tight group-hover:text-[#e8c97a] transition-colors duration-300">
                    {cat.label}
                </h3>
                <div className="flex items-center gap-1.5 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[9px] font-extrabold tracking-[0.18em] text-[#c9a84c]">
                        SHOP NOW
                    </span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}

/* ── Marquee row ── */
function MarqueeRow({ items, reverse = false, speed }) {
    const doubled = [...items, ...items];
    return (
        <div
            className="overflow-hidden"
            style={{
                maskImage:
                    "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)",
            }}
        >
            <div
                className={`flex gap-4 w-max ${reverse ? "marquee-right" : "marquee-left"}`}
                style={{ animationDuration: speed }}
            >
                {doubled.map((cat, i) => (
                    <CategoryCard key={`${cat.id}-${i}`} cat={cat} />
                ))}
            </div>
        </div>
    );
}

/* ── Section ── */
export default function AllCategoriesSection() {
    return (
        <section className="relative overflow-hidden py-20" style={{ background: "#060d1a" }}>

            {/* Atmospheric BG */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(201,168,76,0.11) 0%, transparent 65%)" }}
                />
                <div
                    className="absolute -bottom-40 -right-40 w-[640px] h-[640px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(26,46,90,0.55) 0%, transparent 65%)" }}
                />
                {/* dot grid */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "radial-gradient(rgba(201,168,76,0.07) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                    }}
                />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-14 px-4">
                    <div className="flex items-center justify-center gap-4 mb-5">
                        <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, #c9a84c)" }} />
                        <span className="text-[9px] tracking-[0.45em] font-bold" style={{ color: "#c9a84c" }}>
                            CARATLUXE · EST. MMXXIV
                        </span>
                        <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, #c9a84c)" }} />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">
                        Shop Every{" "}
                        <span className="gold-shimmer font-bold">Category</span>
                    </h2>
                    <p className="text-white/50 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                        Lab-grown diamonds, ethically crafted — timeless jewellery for every occasion.
                    </p>
                </div>

                {/* 3D perspective stage */}
                <div style={{ perspective: "1100px", perspectiveOrigin: "50% 0%" }}>
                    <div
                        style={{
                            transform: "rotateX(20deg) scale(1.05)",
                            transformOrigin: "50% 0%",
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {/* Top horizon fade */}
                        <div
                            className="pointer-events-none absolute top-0 left-0 right-0 z-20"
                            style={{ height: "110px", background: "linear-gradient(to bottom, #060d1a 0%, transparent 100%)" }}
                        />

                        <div className="flex flex-col gap-4 py-2">
                            <MarqueeRow items={row1} reverse={false} speed="42s" />
                            <MarqueeRow items={row2} reverse={true} speed="37s" />
                            <MarqueeRow items={row3} reverse={false} speed="46s" />
                        </div>

                        {/* Bottom floor fade */}
                        <div
                            className="pointer-events-none absolute bottom-0 left-0 right-0 z-20"
                            style={{ height: "150px", background: "linear-gradient(to top, #060d1a 0%, transparent 100%)" }}
                        />
                    </div>
                </div>

                {/* Footer CTA */}
                <div
                    className="mt-10 px-4 flex flex-col sm:flex-row items-center justify-between gap-5 max-w-5xl mx-auto pt-6"
                    style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
                >
                    <div className="flex flex-wrap justify-center sm:justify-start gap-5">
                        {["Conflict-Free", "GIA Certified", "Lifetime Warranty", "30-Day Returns"].map((t) => (
                            <span key={t} className="text-white/55 text-[11px] flex items-center gap-1.5">
                                <span style={{ color: "#c9a84c" }}>✦</span> {t}
                            </span>
                        ))}
                    </div>
                    <Link
                        href="/collections"
                        className="btn-gold inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-[11px] font-extrabold tracking-[0.2em] text-[#0d1f3c] shadow-lg flex-shrink-0"
                    >
                        VIEW ALL COLLECTIONS
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
