import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";

const reasons = [
  {
    icon: "◇",
    title: "100% Identical Diamond",
    description:
      "Optically, physically, and chemically identical to mined diamonds with identical brilliance and fire.",
  },
  {
    icon: "✦",
    title: "Ethically & Sustainably Grown",
    description:
      "No open-pit mining, zero ecological destruction, and completely conflict-free from origin to setting.",
  },
  {
    icon: "✧",
    title: "Up to 60% Exceptional Value",
    description:
      "Direct laboratory sourcing brings higher carat weights and pristine clarity grades within your reach.",
  },
  {
    icon: "◈",
    title: "Lifetime 100% Upgrade",
    description:
      "Exchange your CaratLuxe diamond piece at any future time with full 100% value credit.",
  },
];

const comparisonData = [
  { label: "Origin", lab: "Advanced Lab Crafting", natural: "Earth Mined" },
  { label: "Hardness & Mohs Scale", lab: "10 (Maximum Hardness)", natural: "10 (Maximum Hardness)" },
  { label: "Certification", lab: "IGI / GIA Certified", natural: "IGI / GIA Certified" },
  { label: "Price / Value", lab: "Up to 60% Less", natural: "Extensive Premium" },
  { label: "Conflict Free", lab: "100% Guaranteed", natural: "Variable / Unknown" },
  { label: "Environmental Impact", lab: "Minimal Footprint", natural: "Substantial Mining" },
];

export default function WhyLabDiamonds() {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <SectionHeader
              eyebrow="Sustainable Luxury"
              title="Why Choose"
              titleHighlight="Lab Grown?"
              subtitle="Real diamonds grown in high-tech laboratories replicating mother earth's exact mantle conditions."
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="bg-[#f4f7ff] border border-[#e2e8f4] hover:border-[#c9a84c] rounded-2xl p-6 transition-all group"
                >
                  <span className="text-2xl text-[#c9a84c] font-serif block mb-3">{r.icon}</span>
                  <h3 className="text-[#0d1535] font-serif text-base font-semibold group-hover:text-[#c9a84c] transition-colors mb-2">
                    {r.title}
                  </h3>
                  <p className="text-[#4a5a7a] text-xs leading-relaxed">{r.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/education"
                className="btn-gold text-[#0d1f3c] text-xs font-bold tracking-widest  px-6 py-3.5 rounded-full inline-block shadow-sm"
              >
                Learn 4Cs of Diamonds →
              </Link>
            </div>
          </div>

          {/* Right Column: Comparison Table Card */}
          <div className="bg-[#f4f7ff] border border-[#e2e8f4] rounded-2xl overflow-hidden shadow-sm">
            <div className="p-6 bg-[#0d1f3c] text-white flex justify-between items-center">
              <div>
                <span className="text-[#c9a84c] text-[10px] tracking-widest  font-semibold">Comparison Matrix</span>
                <h4 className="text-lg font-serif font-bold">Lab Grown vs Natural</h4>
              </div>
              <span className="bg-[#c9a84c]/20 text-[#e8c97a] border border-[#c9a84c]/40 text-[10px]  font-bold px-3 py-1 rounded-full">
                Same Sparkle
              </span>
            </div>

            <div className="divide-y divide-[#e2e8f4]">
              <div className="grid grid-cols-3 px-6 py-3.5 bg-white text-[11px] font-bold tracking-wider  text-[#8a9ab8]">
                <span>Attribute</span>
                <span className="text-[#0d1f3c]">Lab Grown</span>
                <span>Natural Mined</span>
              </div>
              {comparisonData.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 px-6 py-3.5 text-xs bg-transparent hover:bg-white transition-colors"
                >
                  <span className="font-medium text-[#0d1535]">{row.label}</span>
                  <span className="font-semibold text-[#0d1f3c] flex items-center gap-1">
                    <span className="text-[#c9a84c]">✓</span> {row.lab}
                  </span>
                  <span className="text-[#8a9ab8]">{row.natural}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white border-t border-[#e2e8f4] flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#e2e8f4]">
                <Image
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&auto=format&fit=crop&q=80"
                  alt="Certified Diamond"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0d1535]">IGI & GIA Graded Inscription</p>
                <p className="text-[11px] text-[#4a5a7a] mt-0.5">Every diamond includes laser inscription on the girdle for security.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
