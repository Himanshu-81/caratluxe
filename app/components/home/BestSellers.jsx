"use client";
import { useState } from "react";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import ProductCard from "../ui/ProductCard";
import { IoArrowForward } from "react-icons/io5";

const allProducts = [
  {
    id: "eternal-solitaire-ring",
    name: "Eternal Solitaire Diamond Ring",
    price: "₹45,999",
    originalPrice: "₹62,000",
    badge: "Bestseller",
    badgeColor: "bg-[#c9a84c] text-white",
    category: "Rings",
    carats: "1.00 Ct",
    metal: "18K White Gold",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "celestial-drop-earrings",
    name: "Celestial Drop Diamond Earrings",
    price: "₹28,999",
    originalPrice: "₹38,000",
    badge: "New Arrival",
    badgeColor: "bg-[#031d42] text-white",
    category: "Earrings",
    carats: "0.75 Ct",
    metal: "18K Yellow Gold",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "aurora-pendant-necklace",
    name: "Aurora Solitaire Diamond Pendant",
    price: "₹19,999",
    originalPrice: "₹27,000",
    badge: "Trending",
    badgeColor: "bg-[#2a4080] text-white",
    category: "Pendants",
    carats: "0.50 Ct",
    metal: "14K Rose Gold",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "royal-tennis-bracelet",
    name: "Royal Lab Diamond Tennis Bracelet",
    price: "₹89,999",
    originalPrice: "₹1,20,000",
    badge: "Save 25%",
    badgeColor: "bg-[#9a2e2e] text-white",
    category: "Bracelets",
    carats: "3.50 Ct",
    metal: "18K White Gold",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "pear-shape-studs",
    name: "Pear-Cut Solitaire Stud Earrings",
    price: "₹24,500",
    originalPrice: "₹32,000",
    badge: "Classic",
    badgeColor: "bg-[#031d42] text-white",
    category: "Earrings",
    carats: "0.80 Ct",
    metal: "Platinum",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "halo-engagement-ring",
    name: "Halo Cushion Cut Engagement Ring",
    price: "₹67,500",
    originalPrice: "₹85,000",
    badge: "Popular",
    badgeColor: "bg-[#c9a84c] text-white",
    category: "Rings",
    carats: "1.50 Ct",
    metal: "18K White Gold",
    images: [
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "marquise-pendant",
    name: "Marquise Bloom Diamond Pendant",
    price: "₹16,999",
    originalPrice: "₹22,000",
    badge: "Staff Pick",
    badgeColor: "bg-[#031d42] text-white",
    category: "Pendants",
    carats: "0.40 Ct",
    metal: "18K Yellow Gold",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "diamond-choker",
    name: "Radiant Diamond Choker Necklace",
    price: "₹52,000",
    originalPrice: "₹68,000",
    badge: "Limited",
    badgeColor: "bg-[#c9a84c] text-white",
    category: "Necklaces",
    carats: "2.20 Ct",
    metal: "18K Rose Gold",
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&auto=format&fit=crop&q=80",
    ],
  },
];

const tabs = ["All", "Rings", "Earrings", "Necklaces", "Bracelets", "Pendants"];

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? allProducts
    : allProducts.filter((p) => p.category === activeTab);

  return (
    <section className="py-15 bg-[#f4f7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with perfectly aligned View All Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-2">
          <SectionHeader
            eyebrow="Curated Pieces"
            title="Our"
            titleHighlight="Bestsellers"
            subtitle="Explore master-crafted diamond jewellery. Hover thumbnails to inspect angles and finishes."
            centered={false}
          />
          <div className="md:pb-1 shrink-0">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 border border-[#0d1f3c]/20 hover:border-[#c9a84c] bg-white text-[#0d1f3c] hover:text-[#c9a84c] text-xs font-semibold tracking-[0.18em]  px-6 py-3.5 rounded-full transition-all shadow-sm hover:shadow"
            >
              View All Collection
              <IoArrowForward className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 text-xs tracking-widest  px-5 py-2.5 rounded-full border transition-all duration-200 cursor-pointer ${activeTab === tab
                ? "bg-[#031d42] text-white border-[#031d42] shadow-sm font-semibold"
                : "bg-white border-[#e2e8f4] text-[#4a5a7a] hover:border-[#c9a84c] hover:text-[#0d1535]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
