import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";

const diamondShapes = [
  {
    name: "Round",
    caratRatio: "1.00",
    popular: "Classic",
    svg: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-current fill-none stroke-[1.5]">
        <circle cx="50" cy="50" r="42" />
        <polygon points="50,15 78,28 85,50 78,72 50,85 22,72 15,50 22,28" strokeWidth="1" strokeDasharray="1,1" />
        <polygon points="50,25 72,50 50,75 28,50" />
        <circle cx="50" cy="50" r="10" />
      </svg>
    ),
  },
  {
    name: "Oval",
    caratRatio: "1.35 - 1.50",
    popular: "Trending",
    svg: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-current fill-none stroke-[1.5]">
        <ellipse cx="50" cy="50" rx="34" ry="44" />
        <polygon points="50,12 74,32 74,68 50,88 26,68 26,32" strokeWidth="1" strokeDasharray="1,1" />
        <polygon points="50,22 68,50 50,78 32,50" />
        <ellipse cx="50" cy="50" rx="8" ry="12" />
      </svg>
    ),
  },
  {
    name: "Emerald",
    caratRatio: "1.30 - 1.50",
    popular: "Vintage",
    svg: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-current fill-none stroke-[1.5]">
        <polygon points="30,12 70,12 88,30 88,70 70,88 30,88 12,70 12,30" />
        <polygon points="34,22 66,22 78,34 78,66 66,78 34,78 22,66 22,34" strokeWidth="1" />
        <rect x="30" y="32" width="40" height="36" />
      </svg>
    ),
  },
  {
    name: "Pear",
    caratRatio: "1.50 - 1.70",
    popular: "Graceful",
    svg: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-current fill-none stroke-[1.5]">
        <path d="M 50,12 C 68,36 84,56 84,72 C 84,85 68,90 50,90 C 32,90 16,85 16,72 C 16,56 32,36 50,12 Z" />
        <path d="M 50,24 C 62,42 72,58 72,70 C 72,80 62,82 50,82 C 38,82 28,80 28,70 C 28,58 38,42 50,24 Z" strokeWidth="1" strokeDasharray="1,1" />
        <circle cx="50" cy="65" r="8" />
      </svg>
    ),
  },
  {
    name: "Princess",
    caratRatio: "1.00",
    popular: "Modern",
    svg: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-current fill-none stroke-[1.5]">
        <rect x="16" y="16" width="68" height="68" />
        <polygon points="50,16 84,50 50,84 16,50" strokeWidth="1" />
        <rect x="32" y="32" width="36" height="36" />
        <line x1="16" y1="16" x2="84" y2="84" strokeWidth="0.8" />
        <line x1="84" y1="16" x2="16" y2="84" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    name: "Radiant",
    caratRatio: "1.15 - 1.30",
    popular: "Brilliant",
    svg: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-current fill-none stroke-[1.5]">
        <polygon points="26,14 74,14 86,26 86,74 74,86 26,86 14,74 14,26" />
        <polygon points="50,14 86,50 50,86 14,50" strokeWidth="0.9" />
        <polygon points="32,24 68,24 76,32 76,68 68,76 32,76 24,68 24,32" strokeWidth="1" strokeDasharray="1,1" />
        <rect x="35" y="35" width="30" height="30" />
      </svg>
    ),
  },
  {
    name: "Cushion",
    caratRatio: "1.00 - 1.05",
    popular: "Romantic",
    svg: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-current fill-none stroke-[1.5]">
        <rect x="15" y="15" width="70" height="70" rx="18" ry="18" />
        <rect x="25" y="25" width="50" height="50" rx="12" ry="12" strokeWidth="1" strokeDasharray="1,1" />
        <polygon points="50,15 85,50 50,85 15,50" strokeWidth="0.8" />
        <rect x="36" y="36" width="28" height="28" rx="6" />
      </svg>
    ),
  },
  {
    name: "Marquise",
    caratRatio: "1.75 - 2.15",
    popular: "Elongating",
    svg: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-current fill-none stroke-[1.5]">
        <path d="M 50,10 C 82,35 82,65 50,90 C 18,65 18,35 50,10 Z" />
        <path d="M 50,22 C 70,40 70,60 50,78 C 30,60 30,40 50,22 Z" strokeWidth="1" strokeDasharray="1,1" />
        <ellipse cx="50" cy="50" rx="7" ry="14" />
      </svg>
    ),
  },
];

export default function ShopByShape() {
  return (
    <section className="py-15 bg-white border-b border-[#e2e8f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Precision Facets"
          title="Shop by"
          titleHighlight="Diamond Shape"
          subtitle="Explore master-cut certified silhouettes designed to amplify brilliance and personal distinction."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mt-10">
          {diamondShapes.map((shape) => (
            <Link
              key={shape.name}
              href={`/shape/${shape.name.toLowerCase()}`}
              className="card-hover group flex flex-col items-center justify-center p-5 rounded-2xl border border-[#e2e8f4] bg-[#f4f7ff] hover:bg-white hover:border-[#c9a84c] transition-all text-center"
            >
              <div className="w-14 h-14 rounded-full bg-white group-hover:bg-[#fdf6e3] border border-[#e2e8f4] group-hover:border-[#c9a84c] flex items-center justify-center text-[#031d42] group-hover:text-[#c9a84c] transition-colors mb-3 shadow-xs">
                {shape.svg}
              </div>

              <p className="text-sm font-bold text-[#0d1535] group-hover:text-[#c9a84c] transition-colors">
                {shape.name}
              </p>

              <span className="text-[10px] text-[#c9a84c] font-semibold  tracking-wider mt-0.5">
                {shape.popular}
              </span>

              <span className="text-[9px] text-[#8a9ab8] mt-0.5">
                Ratio: {shape.caratRatio}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

