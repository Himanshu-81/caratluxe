"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  IoHeartOutline,
  IoHeart,
  IoChevronDown,
  IoChevronUp,
  IoFilterOutline,
  IoClose,
  IoGridOutline,
  IoStar,
  IoCheckmarkCircle,
  IoSparklesOutline,
  IoShieldCheckmarkOutline,
  IoAirplaneOutline,
  IoArrowForward,
} from "react-icons/io5";

/* ─── Mock Product Data matching the reference image ─── */
const productsData = [
  {
    id: "celestial-solitaire-ring",
    name: "The Celestial Solitaire Diamond Ring",
    category: "Solitaire Rings",
    shape: "Round",
    metal: "18K Yellow Gold",
    metalKey: "yellow-gold",
    price: 59360,
    originalPrice: 74200,
    discount: "20% OFF",
    carat: "1.20 CT",
    caratRange: "1.00-1.49",
    clarity: "VVS1 · E Color",
    badge: "BESTSELLER",
    badgeColor: "bg-[#c9a84c] text-[#0d1f3c]",
    readyToShip: true,
    rating: 4.9,
    reviews: 42,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "serenade-pave-halo-ring",
    name: "Serenade Pavé Halo Diamond Ring",
    category: "Halo Rings",
    shape: "Oval",
    metal: "18K Rose Gold",
    metalKey: "rose-gold",
    price: 68400,
    originalPrice: 85500,
    discount: "20% OFF",
    carat: "1.50 CT",
    caratRange: "1.50-1.99",
    clarity: "VS1 · F Color",
    badge: "READY TO SHIP",
    badgeColor: "bg-[#0d1f3c] text-white",
    readyToShip: true,
    rating: 5.0,
    reviews: 29,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "aurora-emerald-cut-solitaire",
    name: "Aurora Emerald-Cut Solitaire Ring",
    category: "Solitaire Rings",
    shape: "Emerald",
    metal: "18K White Gold",
    metalKey: "white-gold",
    price: 85200,
    originalPrice: 106500,
    discount: "20% OFF",
    carat: "1.75 CT",
    caratRange: "1.50-1.99",
    clarity: "VVS2 · D Color",
    badge: "NEW ARRIVAL",
    badgeColor: "bg-[#2a4080] text-white",
    readyToShip: false,
    rating: 4.8,
    reviews: 18,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "royal-three-stone-ring",
    name: "Royal Trilogy Three-Stone Ring",
    category: "Three-Stone",
    shape: "Round",
    metal: "950 Platinum",
    metalKey: "platinum",
    price: 92450,
    originalPrice: 115500,
    discount: "20% OFF",
    carat: "2.10 CT Total",
    caratRange: "2.00+",
    clarity: "VVS1 · E Color",
    badge: "PREMIUM",
    badgeColor: "bg-[#c9a84c] text-[#0d1f3c]",
    readyToShip: true,
    rating: 4.9,
    reviews: 35,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "lumina-vintage-band",
    name: "Lumina Vintage Milgrain Diamond Band",
    category: "Eternity Bands",
    shape: "Round",
    metal: "18K Yellow Gold",
    metalKey: "yellow-gold",
    price: 42500,
    originalPrice: 53100,
    discount: "20% OFF",
    carat: "0.85 CT",
    caratRange: "0.50-0.99",
    clarity: "VS1 · F Color",
    badge: "READY TO SHIP",
    badgeColor: "bg-[#0d1f3c] text-white",
    readyToShip: true,
    rating: 4.7,
    reviews: 21,
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "cascade-pear-solitaire",
    name: "Cascade Pear-Cut Diamond Solitaire",
    category: "Solitaire Rings",
    shape: "Pear",
    metal: "18K White Gold",
    metalKey: "white-gold",
    price: 76800,
    originalPrice: 96000,
    discount: "20% OFF",
    carat: "1.40 CT",
    caratRange: "1.00-1.49",
    clarity: "VVS2 · E Color",
    badge: "BESTSELLER",
    badgeColor: "bg-[#c9a84c] text-[#0d1f3c]",
    readyToShip: false,
    rating: 4.9,
    reviews: 53,
    images: [
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "monarch-cushion-halo-ring",
    name: "The Monarch Cushion Halo Diamond Ring",
    category: "Halo Rings",
    shape: "Cushion",
    metal: "950 Platinum",
    metalKey: "platinum",
    price: 88900,
    originalPrice: 111000,
    discount: "20% OFF",
    carat: "1.80 CT",
    caratRange: "1.50-1.99",
    clarity: "VVS1 · D Color",
    badge: "HOT PICK",
    badgeColor: "bg-[#9a2e2e] text-white",
    readyToShip: true,
    rating: 5.0,
    reviews: 14,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "infinity-eternity-band",
    name: "Infinite Radiance Full Eternity Band",
    category: "Eternity Bands",
    shape: "Round",
    metal: "18K Rose Gold",
    metalKey: "rose-gold",
    price: 54200,
    originalPrice: 67750,
    discount: "20% OFF",
    carat: "1.10 CT Total",
    caratRange: "1.00-1.49",
    clarity: "VS1 · F Color",
    badge: "READY TO SHIP",
    badgeColor: "bg-[#0d1f3c] text-white",
    readyToShip: true,
    rating: 4.9,
    reviews: 31,
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "sovereign-princess-cut-ring",
    name: "Sovereign Princess-Cut Solitaire Ring",
    category: "Solitaire Rings",
    shape: "Princess",
    metal: "18K Yellow Gold",
    metalKey: "yellow-gold",
    price: 71500,
    originalPrice: 89375,
    discount: "20% OFF",
    carat: "1.35 CT",
    caratRange: "1.00-1.49",
    clarity: "VVS2 · E Color",
    badge: "NEW",
    badgeColor: "bg-[#2a4080] text-white",
    readyToShip: false,
    rating: 4.8,
    reviews: 19,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "elysian-marquise-vintage-ring",
    name: "Elysian Marquise Diamond Halo Ring",
    category: "Vintage & Cocktail",
    shape: "Marquise",
    metal: "18K White Gold",
    metalKey: "white-gold",
    price: 83600,
    originalPrice: 104500,
    discount: "20% OFF",
    carat: "1.60 CT",
    caratRange: "1.50-1.99",
    clarity: "VVS1 · E Color",
    badge: "SPECIAL EDITION",
    badgeColor: "bg-[#c9a84c] text-[#0d1f3c]",
    readyToShip: true,
    rating: 5.0,
    reviews: 26,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "mens-bold-solitaire-band",
    name: "Apex Men's Solitaire Diamond Band",
    category: "Men's Bands",
    shape: "Round",
    metal: "950 Platinum",
    metalKey: "platinum",
    price: 66800,
    originalPrice: 83500,
    discount: "20% OFF",
    carat: "0.60 CT",
    caratRange: "0.50-0.99",
    clarity: "VS1 · F Color",
    badge: "READY TO SHIP",
    badgeColor: "bg-[#0d1f3c] text-white",
    readyToShip: true,
    rating: 4.9,
    reviews: 17,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "twilight-oval-hidden-halo",
    name: "Twilight Oval Cut Hidden Halo Ring",
    category: "Halo Rings",
    shape: "Oval",
    metal: "18K Yellow Gold",
    metalKey: "yellow-gold",
    price: 94500,
    originalPrice: 118125,
    discount: "20% OFF",
    carat: "2.05 CT",
    caratRange: "2.00+",
    clarity: "VVS1 · D Color",
    badge: "BESTSELLER",
    badgeColor: "bg-[#c9a84c] text-[#0d1f3c]",
    readyToShip: true,
    rating: 4.9,
    reviews: 64,
    images: [
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
    ],
  },
];

/* ─── Diamond Shapes list with minimal SVG paths ─── */
const diamondShapes = [
  { name: "Round", icon: "●" },
  { name: "Oval", icon: "⬭" },
  { name: "Princess", icon: "■" },
  { name: "Emerald", icon: "▭" },
  { name: "Pear", icon: "▲" },
  { name: "Cushion", icon: "▢" },
  { name: "Marquise", icon: "◆" },
];

/* ─── Metals list ─── */
const metalOptions = [
  { label: "18K Yellow Gold", key: "yellow-gold", color: "#e5c07b", count: 42 },
  { label: "18K White Gold", key: "white-gold", color: "#e2e8f0", count: 56 },
  { label: "18K Rose Gold", key: "rose-gold", color: "#e8b4b8", count: 28 },
  { label: "950 Platinum", key: "platinum", color: "#cbd5e1", count: 16 },
];

/* ─── Price ranges ─── */
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under ₹50,000", min: 0, max: 50000 },
  { label: "₹50,000 – ₹75,000", min: 50000, max: 75000 },
  { label: "₹75,000 – ₹1,00,000", min: 75000, max: 100000 },
  { label: "Above ₹1,00,000", min: 100000, max: Infinity },
];

/* ─── Carat Ranges ─── */
const caratOptions = [
  { label: "0.50 – 0.99 CT", key: "0.50-0.99" },
  { label: "1.00 – 1.49 CT", key: "1.00-1.49" },
  { label: "1.50 – 1.99 CT", key: "1.50-1.99" },
  { label: "2.00 CT & Above", key: "2.00+" },
];

/* ─── Sub-category Pills ─── */
const subCategories = [
  { label: "All Rings", count: 142 },
  { label: "Solitaire Rings", count: 58 },
  { label: "Halo Rings", count: 32 },
  { label: "Three-Stone", count: 24 },
  { label: "Eternity Bands", count: 18 },
  { label: "Vintage & Cocktail", count: 10 },
];

/* ─── FAQ list ─── */
const faqList = [
  {
    q: "Do CaratLuxe lab diamonds test positive on diamond testers?",
    a: "Yes, 100%. CaratLuxe lab-grown diamonds possess the exact same chemical, optical, and physical composition as mined diamonds. They are pure crystallized carbon (C) and will test as real diamonds on standard thermal and electrical conductivity testers, because scientifically they are identical.",
  },
  {
    q: "What certifications accompany CaratLuxe rings?",
    a: "Every CaratLuxe solitaire diamond above 0.50 carat is individually certified by internationally recognized gemological laboratories including IGI (International Gemological Institute) or GIA. Each certified diamond has its unique grading dossier number laser-inscribed on its girdle.",
  },
  {
    q: "Can I customize the metal color, ring size, or diamond shape?",
    a: "Absolutely. All our settings can be customized in 14K Gold, 18K Yellow/White/Rose Gold, or 950 Platinum. We offer complimentary ring sizing and bespoke adjustments through our CaratLuxe Atelier Concierge.",
  },
  {
    q: "What is your return, resizing, and warranty policy?",
    a: "We offer a 30-Day Hassle-Free Return Policy, 30 days of complimentary resizing on all solitaire rings, plus a Lifetime Diamond Upgrade Program and Lifetime Manufacturing Warranty on all fine jewellery.",
  },
];

export default function ProductsPage() {
  /* State */
  const [selectedCategory, setSelectedCategory] = useState("All Rings");
  const [selectedMetals, setSelectedMetals] = useState([]);
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [selectedCarats, setSelectedCarats] = useState([]);
  const [readyToShipOnly, setReadyToShipOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [gridCols, setGridCols] = useState(3); // 3 or 4 columns
  const [wishlist, setWishlist] = useState({});
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  /* Accordion states for filters */
  const [openFilters, setOpenFilters] = useState({
    metal: true,
    shape: true,
    price: true,
    carat: true,
  });

  /* FAQ Accordion state */
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFilter = (key) => {
    setOpenFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMetal = (key) => {
    setSelectedMetals((prev) =>
      prev.includes(key) ? prev.filter((m) => m !== key) : [...prev, key]
    );
  };

  const toggleShape = (name) => {
    setSelectedShapes((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const toggleCarat = (key) => {
    setSelectedCarats((prev) =>
      prev.includes(key) ? prev.filter((c) => c !== key) : [...prev, key]
    );
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const resetAllFilters = () => {
    setSelectedCategory("All Rings");
    setSelectedMetals([]);
    setSelectedShapes([]);
    setSelectedPriceRange(priceRanges[0]);
    setSelectedCarats([]);
    setReadyToShipOnly(false);
  };

  const activeFilterCount =
    (selectedCategory !== "All Rings" ? 1 : 0) +
    selectedMetals.length +
    selectedShapes.length +
    (selectedPriceRange.min > 0 || selectedPriceRange.max < Infinity ? 1 : 0) +
    selectedCarats.length +
    (readyToShipOnly ? 1 : 0);

  /* Filter & Sort Logic */
  const filteredProducts = useMemo(() => {
    return productsData
      .filter((p) => {
        if (selectedCategory !== "All Rings" && p.category !== selectedCategory) {
          return false;
        }
        if (selectedMetals.length > 0 && !selectedMetals.includes(p.metalKey)) {
          return false;
        }
        if (selectedShapes.length > 0 && !selectedShapes.includes(p.shape)) {
          return false;
        }
        if (
          p.price < selectedPriceRange.min ||
          p.price > selectedPriceRange.max
        ) {
          return false;
        }
        if (
          selectedCarats.length > 0 &&
          !selectedCarats.includes(p.caratRange)
        ) {
          return false;
        }
        if (readyToShipOnly && !p.readyToShip) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0; // featured default
      });
  }, [
    selectedCategory,
    selectedMetals,
    selectedShapes,
    selectedPriceRange,
    selectedCarats,
    readyToShipOnly,
    sortBy,
  ]);

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="bg-[#fcfdfd] text-[#0d1535] min-h-screen">
        {/* ─── Breadcrumb Navigation ─── */}
        <div className="border-b border-[#e9eef6] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#6e7d9b] flex items-center gap-2">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/jewellery" className="hover:text-[#c9a84c] transition-colors">
              Jewellery
            </Link>
            <span>/</span>
            <Link href="/rings" className="hover:text-[#c9a84c] transition-colors">
              Rings
            </Link>
            <span>/</span>
            <span className="text-[#0d1f3c] font-semibold">
              Solitaire & Diamond Rings
            </span>
          </div>
        </div>

        {/* ─── Collection Hero Banner (Matches Reference) ─── */}
        <section className="bg-gradient-to-b from-[#f5f8ff] via-[#ffffff] to-[#ffffff] pt-9 pb-7 border-b border-[#e8edf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-px w-5 bg-[#c9a84c]" />
                  <span className="text-[10px] font-extrabold tracking-[0.3em] text-[#c9a84c] uppercase">
                    Signature Atelier Collection
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0d1f3c] tracking-tight flex items-baseline gap-3 flex-wrap">
                  SOLITAIRE & DIAMOND RINGS
                  <span className="text-sm sm:text-base font-normal font-sans text-[#8a9ab8]">
                    ({productsData.length} designs)
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-3 text-[#526382] text-xs sm:text-sm leading-relaxed max-w-xl">
                  Handcrafted in 18K solid gold & 950 platinum with GIA & IGI
                  certified lab-grown diamonds. Ethically created with zero
                  carbon footprint, designed for engagements, milestones, and
                  everyday luxury.
                </p>
              </div>

              {/* Trust highlights right under title */}
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 text-xs text-[#0d1f3c] bg-white/80 p-3.5 rounded-xl border border-[#e2e8f4] shadow-xs">
                <div className="flex items-center gap-2">
                  <IoSparklesOutline className="w-4 h-4 text-[#c9a84c]" />
                  <span className="font-semibold text-[11px] tracking-wide">
                    100% Certified Lab Diamonds
                  </span>
                </div>
                <div className="hidden lg:block w-px h-4 bg-[#e2e8f4]" />
                <div className="flex items-center gap-2">
                  <IoShieldCheckmarkOutline className="w-4 h-4 text-[#c9a84c]" />
                  <span className="font-semibold text-[11px] tracking-wide">
                    Lifetime Exchange & Warranty
                  </span>
                </div>
              </div>
            </div>

            {/* ─── Horizontal Quick Category Pills ─── */}
            <div className="mt-8 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
              {subCategories.map((sub) => {
                const isActive = selectedCategory === sub.label;
                return (
                  <button
                    key={sub.label}
                    onClick={() => setSelectedCategory(sub.label)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer shrink-0 ${
                      isActive
                        ? "bg-[#0d1f3c] text-white shadow-sm ring-2 ring-[#c9a84c]/50"
                        : "bg-white text-[#4a5a7a] border border-[#e2e8f4] hover:border-[#c9a84c] hover:text-[#0d1f3c]"
                    }`}
                  >
                    {sub.label}
                    <span
                      className={`ml-1.5 text-[10px] ${
                        isActive ? "text-[#e8c97a]" : "text-[#8a9ab8]"
                      }`}
                    >
                      ({sub.count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Control Bar / Filter Toolbar ─── */}
        <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#e8edf7] py-3.5 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 flex-wrap">
            {/* Left: Mobile trigger & Results count */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#0d1f3c] text-[#0d1f3c] text-xs font-bold"
              >
                <IoFilterOutline className="w-4 h-4" />
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              </button>

              <span className="text-xs font-semibold text-[#526382] uppercase tracking-wider">
                Showing {filteredProducts.length} of {productsData.length} Designs
              </span>

              {/* Active Filter Chips */}
              {activeFilterCount > 0 && (
                <button
                  onClick={resetAllFilters}
                  className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#c9a84c] hover:underline cursor-pointer ml-2"
                >
                  Clear All ({activeFilterCount})
                </button>
              )}
            </div>

            {/* Right: Toggle Ready to Ship, Layout switcher, Sorting */}
            <div className="flex items-center gap-4 sm:gap-6 ml-auto">
              {/* Ready to ship toggle */}
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <span className="text-xs font-bold tracking-wider uppercase text-[#0d1f3c] hidden sm:inline">
                  Ready To Ship Only
                </span>
                <span className="text-xs font-bold tracking-wider uppercase text-[#0d1f3c] sm:hidden">
                  Ready To Ship
                </span>
                <div
                  onClick={() => setReadyToShipOnly(!readyToShipOnly)}
                  className={`relative w-10 h-5 rounded-full transition-colors ${
                    readyToShipOnly ? "bg-[#c9a84c]" : "bg-[#cbd5e1]"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                      readyToShipOnly ? "translate-x-5" : ""
                    }`}
                  />
                </div>
              </label>

              {/* Grid Column Switcher (Desktop) */}
              <div className="hidden md:flex items-center gap-1 border border-[#e2e8f4] rounded-lg p-1">
                <button
                  onClick={() => setGridCols(3)}
                  aria-label="3 columns grid"
                  className={`p-1 rounded ${
                    gridCols === 3
                      ? "bg-[#0d1f3c] text-white"
                      : "text-[#6e7d9b] hover:text-[#0d1f3c]"
                  }`}
                >
                  <IoGridOutline className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridCols(4)}
                  aria-label="4 columns grid"
                  className={`p-1 rounded ${
                    gridCols === 4
                      ? "bg-[#0d1f3c] text-white"
                      : "text-[#6e7d9b] hover:text-[#0d1f3c]"
                  }`}
                >
                  <span className="font-bold text-xs tracking-tighter px-0.5">
                    ☷
                  </span>
                </button>
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-[#8a9ab8] font-bold tracking-wider hidden sm:inline uppercase">
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-[#e2e8f4] text-[#0d1f3c] font-semibold rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-[#c9a84c] cursor-pointer"
                >
                  <option value="featured">Featured Collection</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Main Products Section: Sidebar + Product Grid ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start gap-8">
            {/* ─── DESKTOP LEFT SIDEBAR FILTERS ─── */}
            <aside className="hidden lg:block w-64 shrink-0 sticky top-20 bg-white rounded-2xl border border-[#e2e8f4] p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#eef2f8] mb-4">
                <span className="font-serif font-bold text-sm tracking-wider uppercase text-[#0d1f3c]">
                  Filter By
                </span>
                {activeFilterCount > 0 && (
                  <button
                    onClick={resetAllFilters}
                    className="text-[11px] font-bold text-[#c9a84c] hover:underline cursor-pointer"
                  >
                    Reset All
                  </button>
                )}
              </div>

              {/* Group 1: Metal & Color */}
              <div className="py-3.5 border-b border-[#eef2f8]">
                <button
                  onClick={() => toggleFilter("metal")}
                  className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0d1f3c]"
                >
                  <span>Metal & Colour</span>
                  {openFilters.metal ? (
                    <IoChevronUp className="w-3.5 h-3.5 text-[#8a9ab8]" />
                  ) : (
                    <IoChevronDown className="w-3.5 h-3.5 text-[#8a9ab8]" />
                  )}
                </button>

                {openFilters.metal && (
                  <div className="mt-3 space-y-2">
                    {metalOptions.map((m) => {
                      const isChecked = selectedMetals.includes(m.key);
                      return (
                        <label
                          key={m.key}
                          className="flex items-center justify-between text-xs text-[#4a5a7a] hover:text-[#0d1f3c] cursor-pointer py-0.5"
                        >
                          <div className="flex items-center gap-2.5">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleMetal(m.key)}
                              className="w-3.5 h-3.5 rounded text-[#0d1f3c] accent-[#0d1f3c] cursor-pointer"
                            />
                            <span
                              className="w-2.5 h-2.5 rounded-full border border-black/20"
                              style={{ backgroundColor: m.color }}
                            />
                            <span className={isChecked ? "font-bold text-[#0d1f3c]" : ""}>
                              {m.label}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#8a9ab8]">({m.count})</span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Group 2: Diamond Shape (Visual Badges) */}
              <div className="py-3.5 border-b border-[#eef2f8]">
                <button
                  onClick={() => toggleFilter("shape")}
                  className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0d1f3c]"
                >
                  <span>Diamond Shape</span>
                  {openFilters.shape ? (
                    <IoChevronUp className="w-3.5 h-3.5 text-[#8a9ab8]" />
                  ) : (
                    <IoChevronDown className="w-3.5 h-3.5 text-[#8a9ab8]" />
                  )}
                </button>

                {openFilters.shape && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {diamondShapes.map((s) => {
                      const isSelected = selectedShapes.includes(s.name);
                      return (
                        <button
                          key={s.name}
                          type="button"
                          onClick={() => toggleShape(s.name)}
                          className={`flex items-center gap-2 p-2 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                            isSelected
                              ? "border-[#c9a84c] bg-[#fcf8ed] text-[#0d1f3c] font-bold shadow-xs"
                              : "border-[#e2e8f4] bg-white text-[#4a5a7a] hover:border-[#c9a84c]/60"
                          }`}
                        >
                          <span className="text-sm text-[#c9a84c]">{s.icon}</span>
                          <span className="text-[11px] truncate">{s.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Group 3: Price Range */}
              <div className="py-3.5 border-b border-[#eef2f8]">
                <button
                  onClick={() => toggleFilter("price")}
                  className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0d1f3c]"
                >
                  <span>Price Range</span>
                  {openFilters.price ? (
                    <IoChevronUp className="w-3.5 h-3.5 text-[#8a9ab8]" />
                  ) : (
                    <IoChevronDown className="w-3.5 h-3.5 text-[#8a9ab8]" />
                  )}
                </button>

                {openFilters.price && (
                  <div className="mt-3 space-y-2">
                    {priceRanges.map((pr) => {
                      const isSelected = selectedPriceRange.label === pr.label;
                      return (
                        <label
                          key={pr.label}
                          className="flex items-center gap-2.5 text-xs text-[#4a5a7a] hover:text-[#0d1f3c] cursor-pointer py-0.5"
                        >
                          <input
                            type="radio"
                            name="price-range"
                            checked={isSelected}
                            onChange={() => setSelectedPriceRange(pr)}
                            className="w-3.5 h-3.5 accent-[#0d1f3c] cursor-pointer"
                          />
                          <span className={isSelected ? "font-bold text-[#0d1f3c]" : ""}>
                            {pr.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Group 4: Carat Weight */}
              <div className="py-3.5">
                <button
                  onClick={() => toggleFilter("carat")}
                  className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0d1f3c]"
                >
                  <span>Carat Weight</span>
                  {openFilters.carat ? (
                    <IoChevronUp className="w-3.5 h-3.5 text-[#8a9ab8]" />
                  ) : (
                    <IoChevronDown className="w-3.5 h-3.5 text-[#8a9ab8]" />
                  )}
                </button>

                {openFilters.carat && (
                  <div className="mt-3 space-y-2">
                    {caratOptions.map((c) => {
                      const isChecked = selectedCarats.includes(c.key);
                      return (
                        <label
                          key={c.key}
                          className="flex items-center gap-2.5 text-xs text-[#4a5a7a] hover:text-[#0d1f3c] cursor-pointer py-0.5"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleCarat(c.key)}
                            className="w-3.5 h-3.5 rounded text-[#0d1f3c] accent-[#0d1f3c] cursor-pointer"
                          />
                          <span className={isChecked ? "font-bold text-[#0d1f3c]" : ""}>
                            {c.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            </aside>

            {/* ─── RIGHT PRODUCT GRID (WITH IN-GRID EDITORIAL BANNERS) ─── */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-[#e2e8f4] p-12 text-center">
                  <p className="font-serif text-xl font-bold text-[#0d1f3c] mb-2">
                    No designs match your filter criteria
                  </p>
                  <p className="text-xs text-[#6e7d9b] max-w-sm mx-auto mb-6">
                    Try adjusting your metal, diamond shape, or price selections
                    to discover our handcrafted rings.
                  </p>
                  <button
                    onClick={resetAllFilters}
                    className="btn-gold px-6 py-2.5 rounded-full text-xs font-bold text-[#0d1f3c]"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div
                  className={`grid gap-5 sm:gap-6 ${
                    gridCols === 4
                      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                      : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                  }`}
                >
                  {/* Item 1 to 4 */}
                  {filteredProducts.slice(0, 4).map((product) => (
                    <ProductCardItem
                      key={product.id}
                      product={product}
                      isWishlisted={!!wishlist[product.id]}
                      onToggleWishlist={() => toggleWishlist(product.id)}
                    />
                  ))}

                  {/* ─── IN-GRID EDITORIAL PROMO BLOCK 1 (Matches Reference Image) ─── */}
                  <div className="sm:col-span-2 relative rounded-2xl overflow-hidden bg-[#0a1628] text-white p-7 sm:p-9 flex flex-col justify-between border border-[#c9a84c]/30 shadow-md">
                    {/* Background glow & subtle watermark */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#c9a84c]/10 blur-2xl" />
                      <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-[#1a2e5a]/60 blur-2xl" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#c9a84c] text-[10px] font-extrabold tracking-[0.35em] uppercase">
                          The CaratLuxe Atelier
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                        Solid Gold & Lab-Grown{" "}
                        <span className="text-gold-gradient">Diamond Collection</span>
                      </h3>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-md mb-6">
                        Sustainably grown in vacuum plasma reactors. Same optical
                        refraction, 100% certified conflict-free, hand-sculpted in
                        hallmarked 18K solid gold.
                      </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap items-center gap-4">
                      <Link
                        href="/education"
                        className="btn-gold text-[#0d1f3c] text-xs font-extrabold tracking-widest uppercase px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                      >
                        Discover Lab Diamonds
                        <IoArrowForward className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-white/50 text-[11px] font-medium tracking-wider">
                        ✦ GIA & IGI Verified
                      </span>
                    </div>
                  </div>

                  {/* Items 5 to 8 */}
                  {filteredProducts.slice(4, 8).map((product) => (
                    <ProductCardItem
                      key={product.id}
                      product={product}
                      isWishlisted={!!wishlist[product.id]}
                      onToggleWishlist={() => toggleWishlist(product.id)}
                    />
                  ))}

                  {/* ─── IN-GRID EDITORIAL PROMO BLOCK 2 (Matches Reference Image) ─── */}
                  <div className="sm:col-span-2 relative rounded-2xl overflow-hidden bg-white border border-[#e2e8f4] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
                    <div>
                      <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#c9a84c] uppercase">
                        Hallmarked Purity & Precision
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1f3c] mt-1 mb-2">
                        Certified Purity: GIA & IGI Lab Diamonds
                      </h3>
                      <p className="text-xs sm:text-sm text-[#526382] leading-relaxed max-w-lg mb-4">
                        Every center stone above 0.50 CT features a microscopic
                        laser inscription on the girdle, verified against its
                        tamper-proof digital gemological dossier.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-[#f0f3fa]">
                      <Link
                        href="/education/certification"
                        className="text-xs font-bold text-[#0d1f3c] hover:text-[#c9a84c] tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors"
                      >
                        Verify Certificate →
                      </Link>
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-[#6e7d9b] hover:text-[#0d1f3c] tracking-wider uppercase transition-colors"
                      >
                        Book Atelier Appointment
                      </Link>
                    </div>
                  </div>

                  {/* Remaining products */}
                  {filteredProducts.slice(8).map((product) => (
                    <ProductCardItem
                      key={product.id}
                      product={product}
                      isWishlisted={!!wishlist[product.id]}
                      onToggleWishlist={() => toggleWishlist(product.id)}
                    />
                  ))}
                </div>
              )}

              {/* ─── Pagination Bar ─── */}
              <div className="mt-12 pt-6 border-t border-[#e8edf7] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#6e7d9b]">
                  Showing 1–{filteredProducts.length} of {productsData.length} designs
                </span>

                <div className="flex items-center gap-2">
                  <button
                    disabled
                    className="w-9 h-9 rounded-lg border border-[#e2e8f4] text-xs font-bold text-[#cbd5e1] flex items-center justify-center cursor-not-allowed"
                  >
                    ←
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-[#0d1f3c] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                    1
                  </button>
                  <button className="w-9 h-9 rounded-lg border border-[#e2e8f4] text-xs font-semibold text-[#4a5a7a] hover:border-[#c9a84c] flex items-center justify-center transition-colors">
                    2
                  </button>
                  <button className="w-9 h-9 rounded-lg border border-[#e2e8f4] text-xs font-semibold text-[#4a5a7a] hover:border-[#c9a84c] flex items-center justify-center transition-colors">
                    3
                  </button>
                  <span className="text-xs text-[#8a9ab8] px-1">...</span>
                  <button className="w-9 h-9 rounded-lg border border-[#e2e8f4] text-xs font-semibold text-[#4a5a7a] hover:border-[#c9a84c] flex items-center justify-center transition-colors">
                    12
                  </button>
                  <button className="w-9 h-9 rounded-lg border border-[#e2e8f4] text-xs font-bold text-[#0d1f3c] hover:border-[#c9a84c] flex items-center justify-center transition-colors">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Buying Guide Educational Section (Matches Reference Image) ─── */}
        <section className="bg-[#f7f9fd] py-16 border-t border-[#e8edf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-extrabold tracking-[0.35em] text-[#c9a84c] uppercase">
                The CaratLuxe Journal
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0d1f3c] mt-2 mb-3">
                THE SOLITAIRE & DIAMOND RING GUIDE
              </h2>
              <p className="text-xs sm:text-sm text-[#526382] leading-relaxed">
                Handcrafted wisdom to help you choose a ring that will radiate fire
                and meaning for lifetimes to come.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-7 border border-[#e2e8f4] shadow-xs hover:border-[#c9a84c]/50 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#fdf8ec] text-[#c9a84c] flex items-center justify-center font-bold text-lg mb-4">
                  ✦
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0d1f3c] mb-2">
                  ETHICAL LAB DIAMONDS
                </h3>
                <p className="text-xs text-[#526382] leading-relaxed mb-4">
                  Grown in state-of-the-art plasma chambers using renewable energy.
                  Identical optical, physical, and chemical properties with zero
                  ecological degradation.
                </p>
                <Link
                  href="/education"
                  className="text-xs font-bold text-[#c9a84c] hover:underline inline-flex items-center gap-1"
                >
                  Learn About Lab Diamonds →
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-[#e2e8f4] shadow-xs hover:border-[#c9a84c]/50 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#fdf8ec] text-[#c9a84c] flex items-center justify-center font-bold text-lg mb-4">
                  ◈
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0d1f3c] mb-2">
                  HALLMARKED SOLID PURITY
                </h3>
                <p className="text-xs text-[#526382] leading-relaxed mb-4">
                  Crafted exclusively with BIS hallmarked 18K/14K solid gold and 950
                  platinum. Stamped with certified laser purity marks guaranteeing
                  lifetime precious value.
                </p>
                <Link
                  href="/education/gold-purity"
                  className="text-xs font-bold text-[#c9a84c] hover:underline inline-flex items-center gap-1"
                >
                  Explore Gold Standards →
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-[#e2e8f4] shadow-xs hover:border-[#c9a84c]/50 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#fdf8ec] text-[#c9a84c] flex items-center justify-center font-bold text-lg mb-4">
                  ✧
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0d1f3c] mb-2">
                  PERFECT RING SIZING
                </h3>
                <p className="text-xs text-[#526382] leading-relaxed mb-4">
                  Order with total peace of mind. We send a complimentary ring
                  sizing kit before final casting, plus offer 30 days of free
                  resizing upon delivery.
                </p>
                <Link
                  href="/education/ring-size-guide"
                  className="text-xs font-bold text-[#c9a84c] hover:underline inline-flex items-center gap-1"
                >
                  Request Ring Sizer →
                </Link>
              </div>
            </div>

            {/* ─── Frequently Asked Questions Accordion (Matches Reference) ─── */}
            <div className="mt-14 max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f4] shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#0d1f3c] mb-5 pb-3 border-b border-[#eef2f8] text-center">
                FREQUENTLY ASKED QUESTIONS
              </h3>

              <div className="divide-y divide-[#eef2f8]">
                {faqList.map((item, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="py-3.5">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left gap-4 text-xs sm:text-sm font-bold text-[#0d1f3c] hover:text-[#c9a84c] transition-colors"
                      >
                        <span>{item.q}</span>
                        {isOpen ? (
                          <IoChevronUp className="w-4 h-4 text-[#c9a84c] shrink-0" />
                        ) : (
                          <IoChevronDown className="w-4 h-4 text-[#8a9ab8] shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <p className="mt-2 text-xs text-[#526382] leading-relaxed pr-6">
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Customer Testimonials Strip (Matches Reference) ─── */}
        <section className="bg-white py-14 border-t border-[#e8edf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[10px] font-extrabold tracking-[0.35em] text-[#c9a84c] uppercase">
              Verified Purchases
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1f3c] mt-1 mb-2">
              REAL STORIES, UNMATCHED RADIANCE
            </h2>
            <div className="flex items-center justify-center gap-1 text-[#c9a84c] text-xs mb-8">
              {[...Array(5)].map((_, i) => (
                <IoStar key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-[#0d1f3c] font-bold ml-2 text-xs">
                4.95 / 5 Rating from 1,420+ Clients
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-[#fcfdfd] p-6 rounded-2xl border border-[#e2e8f4]">
                <div className="flex text-[#c9a84c] text-xs mb-3">
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#4a5a7a] leading-relaxed mb-4 italic">
                  "The fire and clarity of my 1.5 CT solitaire blew away anything I
                  saw in traditional jewelry stores. CaratLuxe delivered luxury at a
                  sensible price point."
                </p>
                <div className="flex items-center justify-between text-[11px] font-bold text-[#0d1f3c]">
                  <span>Ananya & Vikram S.</span>
                  <span className="text-[#c9a84c]">✦ Mumbai</span>
                </div>
              </div>

              <div className="bg-[#fcfdfd] p-6 rounded-2xl border border-[#e2e8f4]">
                <div className="flex text-[#c9a84c] text-xs mb-3">
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#4a5a7a] leading-relaxed mb-4 italic">
                  "The IGI certificate was verifiable immediately online and the
                  setting in 18K yellow gold is flawless. She said yes with tears of
                  joy!"
                </p>
                <div className="flex items-center justify-between text-[11px] font-bold text-[#0d1f3c]">
                  <span>Rohan Mehra</span>
                  <span className="text-[#c9a84c]">✦ Bengaluru</span>
                </div>
              </div>

              <div className="bg-[#fcfdfd] p-6 rounded-2xl border border-[#e2e8f4]">
                <div className="flex text-[#c9a84c] text-xs mb-3">
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#4a5a7a] leading-relaxed mb-4 italic">
                  "The ring sizer kit made getting the exact measurement stress-free.
                  The packaging and unboxing experience was pure five-star atelier."
                </p>
                <div className="flex items-center justify-between text-[11px] font-bold text-[#0d1f3c]">
                  <span>Priya Singhania</span>
                  <span className="text-[#c9a84c]">✦ New Delhi</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Trust Badges Footer Strip ─── */}
        <section className="bg-[#0d1f3c] text-white py-8 border-t border-[#c9a84c]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-[#c9a84c] text-xl font-bold mb-1">✦</span>
              <span className="text-xs font-bold uppercase tracking-wider">
                100% Certified Diamonds
              </span>
              <span className="text-[10px] text-white/60">GIA & IGI Dossier Included</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#c9a84c] text-xl font-bold mb-1">◈</span>
              <span className="text-xs font-bold uppercase tracking-wider">
                Free Insured Shipping
              </span>
              <span className="text-[10px] text-white/60">Doorstep Delivery Nationwide</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#c9a84c] text-xl font-bold mb-1">✧</span>
              <span className="text-xs font-bold uppercase tracking-wider">
                Lifetime Exchange
              </span>
              <span className="text-[10px] text-white/60">100% Value Buyback Credit</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#c9a84c] text-xl font-bold mb-1">◇</span>
              <span className="text-xs font-bold uppercase tracking-wider">
                30-Day Free Resizing
              </span>
              <span className="text-[10px] text-white/60">Hassle-Free Peace of Mind</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ─── MOBILE FILTER DRAWER MODAL ─── */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full overflow-y-auto p-5 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#eef2f8] mb-4">
                <span className="font-serif font-bold text-base text-[#0d1f3c]">
                  Filters ({activeFilterCount})
                </span>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 rounded-full text-[#6e7d9b] hover:text-[#0d1f3c]"
                >
                  <IoClose className="w-5 h-5" />
                </button>
              </div>

              {/* Metal Filter */}
              <div className="py-3 border-b border-[#eef2f8]">
                <p className="text-xs font-bold text-[#0d1f3c] uppercase mb-2">
                  Metal & Colour
                </p>
                <div className="space-y-1.5">
                  {metalOptions.map((m) => (
                    <label key={m.key} className="flex items-center gap-2 text-xs text-[#4a5a7a]">
                      <input
                        type="checkbox"
                        checked={selectedMetals.includes(m.key)}
                        onChange={() => toggleMetal(m.key)}
                        className="rounded accent-[#0d1f3c]"
                      />
                      <span>{m.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Shape Filter */}
              <div className="py-3 border-b border-[#eef2f8]">
                <p className="text-xs font-bold text-[#0d1f3c] uppercase mb-2">
                  Diamond Shape
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {diamondShapes.map((s) => (
                    <button
                      key={s.name}
                      onClick={() => toggleShape(s.name)}
                      className={`text-xs p-1.5 rounded-lg border text-left flex items-center gap-1.5 ${
                        selectedShapes.includes(s.name)
                          ? "border-[#c9a84c] bg-[#fdf8ec] font-bold"
                          : "border-[#e2e8f4]"
                      }`}
                    >
                      <span>{s.icon}</span>
                      <span>{s.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="py-3">
                <p className="text-xs font-bold text-[#0d1f3c] uppercase mb-2">
                  Price
                </p>
                <div className="space-y-1.5">
                  {priceRanges.map((pr) => (
                    <label key={pr.label} className="flex items-center gap-2 text-xs text-[#4a5a7a]">
                      <input
                        type="radio"
                        name="mobile-price"
                        checked={selectedPriceRange.label === pr.label}
                        onChange={() => setSelectedPriceRange(pr)}
                        className="accent-[#0d1f3c]"
                      />
                      <span>{pr.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#eef2f8] flex gap-2">
              <button
                onClick={resetAllFilters}
                className="flex-1 py-2.5 rounded-xl border border-[#e2e8f4] text-xs font-bold text-[#0d1f3c]"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 btn-gold py-2.5 rounded-xl text-xs font-bold text-[#0d1f3c]"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ─── Reusable Product Card matching reference image ─── */
function ProductCardItem({ product, isWishlisted, onToggleWishlist }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-[#e5ebf5] shadow-[0_4px_16px_rgba(13,31,60,0.03)] hover:shadow-[0_16px_36px_rgba(13,31,60,0.08)] hover:border-[#c9a84c]/60 transition-all flex flex-col justify-between">
      {/* Top Image Box */}
      <div className="relative aspect-square overflow-hidden bg-[#f4f7ff]">
        {/* Status Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 z-20 text-[9px] font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-full ${product.badgeColor} shadow-xs`}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={onToggleWishlist}
          aria-label="Save to Wishlist"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center transition-all shadow-xs cursor-pointer hover:scale-110"
        >
          {isWishlisted ? (
            <IoHeart className="w-4 h-4 text-red-500" />
          ) : (
            <IoHeartOutline className="w-4 h-4 text-[#4a5a7a] hover:text-[#c9a84c]" />
          )}
        </button>

        {/* Product Image */}
        <Link href={`/products/${product.id}`} className="block w-full h-full">
          <Image
            src={product.images[activeImg] || product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
          />
        </Link>

        {/* Subtle quick add on hover */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <Link
            href={`/products/${product.id}`}
            className="w-full btn-navy text-white text-[11px] font-bold tracking-wider uppercase py-2.5 rounded-xl shadow-md flex items-center justify-center gap-1.5 hover:bg-[#c9a84c] hover:text-[#0d1f3c] transition-colors"
          >
            Customise & Buy →
          </Link>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          {/* Metal swatches / thumbnail dots */}
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <span
                onClick={() => setActiveImg(0)}
                className={`w-3 h-3 rounded-full border cursor-pointer ${
                  activeImg === 0
                    ? "ring-2 ring-[#c9a84c] scale-110"
                    : "border-black/20"
                }`}
                style={{ backgroundColor: "#e5c07b" }}
                title="Yellow Gold"
              />
              <span
                onClick={() => setActiveImg(1 % product.images.length)}
                className={`w-3 h-3 rounded-full border cursor-pointer ${
                  activeImg === 1
                    ? "ring-2 ring-[#c9a84c] scale-110"
                    : "border-black/20"
                }`}
                style={{ backgroundColor: "#e2e8f0" }}
                title="White Gold"
              />
              <span
                className="w-3 h-3 rounded-full border border-black/20"
                style={{ backgroundColor: "#e8b4b8" }}
                title="Rose Gold"
              />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-[11px] text-[#0d1f3c] font-bold">
              <IoStar className="w-3.5 h-3.5 text-[#c9a84c] fill-current" />
              <span>{product.rating}</span>
              <span className="text-[#8a9ab8] font-normal">({product.reviews})</span>
            </div>
          </div>

          {/* Product Title */}
          <Link href={`/products/${product.id}`}>
            <h3 className="font-serif text-sm sm:text-base font-bold text-[#0d1535] group-hover:text-[#c9a84c] transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Specs */}
          <p className="text-[11px] text-[#6e7d9b] mt-0.5 line-clamp-1">
            {product.carat} · {product.clarity} · {product.metal}
          </p>
        </div>

        {/* Price Row */}
        <div className="mt-3 pt-2.5 border-t border-[#f0f3fa] flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-[#0d1f3c] font-bold text-base sm:text-lg">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-[#8a9ab8] text-xs line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          </div>

          <span className="text-[10px] font-extrabold text-[#9a2e2e] bg-[#fdf2f2] px-1.5 py-0.5 rounded">
            {product.discount}
          </span>
        </div>
      </div>
    </div>
  );
}

