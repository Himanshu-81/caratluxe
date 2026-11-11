"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/ui/ProductCard";
import {
  IoChevronDown,
  IoChevronUp,
  IoFilterOutline,
  IoClose,
  IoGridOutline,
  IoStar,
  IoCheckmarkCircle,
} from "react-icons/io5";

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
    discount: "20% Off",
    carat: "1.20 CT",
    caratRange: "1.00-1.49",
    clarity: "VVS1 · E Color",
    badge: "Bestseller",
    badgeColor: "bg-[#c9a84c] text-[#0d1f3c]",
    readyToShip: true,
    rating: 4.9,
    reviews: 42,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
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
    discount: "20% Off",
    carat: "1.50 CT",
    caratRange: "1.50-1.99",
    clarity: "VS1 · F Color",
    badge: "Ready to Ship",
    badgeColor: "bg-[#0d1f3c] text-white",
    readyToShip: true,
    rating: 5.0,
    reviews: 29,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop&q=80",
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
    discount: "20% Off",
    carat: "1.75 CT",
    caratRange: "1.50-1.99",
    clarity: "VVS2 · D Color",
    badge: "New Arrival",
    badgeColor: "bg-[#2a4080] text-white",
    readyToShip: false,
    rating: 4.8,
    reviews: 18,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
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
    discount: "20% Off",
    carat: "2.10 CT Total",
    caratRange: "2.00+",
    clarity: "VVS1 · E Color",
    badge: "Signature",
    badgeColor: "bg-[#c9a84c] text-[#0d1f3c]",
    readyToShip: true,
    rating: 4.9,
    reviews: 35,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80",
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
    discount: "20% Off",
    carat: "0.85 CT",
    caratRange: "0.50-0.99",
    clarity: "VS1 · F Color",
    badge: "Ready to Ship",
    badgeColor: "bg-[#0d1f3c] text-white",
    readyToShip: true,
    rating: 4.7,
    reviews: 21,
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
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
    discount: "20% Off",
    carat: "1.40 CT",
    caratRange: "1.00-1.49",
    clarity: "VVS2 · E Color",
    badge: "Bestseller",
    badgeColor: "bg-[#c9a84c] text-[#0d1f3c]",
    readyToShip: false,
    rating: 4.9,
    reviews: 53,
    images: [
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
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
    discount: "20% Off",
    carat: "1.80 CT",
    caratRange: "1.50-1.99",
    clarity: "VVS1 · D Color",
    badge: "Trending",
    badgeColor: "bg-[#9a2e2e] text-white",
    readyToShip: true,
    rating: 5.0,
    reviews: 14,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
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
    discount: "20% Off",
    carat: "1.10 CT Total",
    caratRange: "1.00-1.49",
    clarity: "VS1 · F Color",
    badge: "Ready to Ship",
    badgeColor: "bg-[#0d1f3c] text-white",
    readyToShip: true,
    rating: 4.9,
    reviews: 31,
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
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
    discount: "20% Off",
    carat: "1.35 CT",
    caratRange: "1.00-1.49",
    clarity: "VVS2 · E Color",
    badge: "New",
    badgeColor: "bg-[#2a4080] text-white",
    readyToShip: false,
    rating: 4.8,
    reviews: 19,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
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
    discount: "20% Off",
    carat: "1.60 CT",
    caratRange: "1.50-1.99",
    clarity: "VVS1 · E Color",
    badge: "Special Edition",
    badgeColor: "bg-[#c9a84c] text-[#0d1f3c]",
    readyToShip: true,
    rating: 5.0,
    reviews: 26,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
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
    discount: "20% Off",
    carat: "0.60 CT",
    caratRange: "0.50-0.99",
    clarity: "VS1 · F Color",
    badge: "Ready to Ship",
    badgeColor: "bg-[#0d1f3c] text-white",
    readyToShip: true,
    rating: 4.9,
    reviews: 17,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
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
    discount: "20% Off",
    carat: "2.05 CT",
    caratRange: "2.00+",
    clarity: "VVS1 · D Color",
    badge: "Bestseller",
    badgeColor: "bg-[#c9a84c] text-[#0d1f3c]",
    readyToShip: true,
    rating: 4.9,
    reviews: 64,
    images: [
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80",
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

              <span className="text-xs font-semibold text-[#526382] tracking-wider">
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
                <span className="text-xs font-bold tracking-wider text-[#0d1f3c] hidden sm:inline">
                  Ready To Ship Only
                </span>
                <span className="text-xs font-bold tracking-wider text-[#0d1f3c] sm:hidden">
                  Ready To Ship
                </span>
                <div
                  onClick={() => setReadyToShipOnly(!readyToShipOnly)}
                  className={`relative w-10 h-5 rounded-full transition-colors ${readyToShipOnly ? "bg-[#c9a84c]" : "bg-[#cbd5e1]"
                    }`}
                >
                  <div
                    className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${readyToShipOnly ? "translate-x-5" : ""
                      }`}
                  />
                </div>
              </label>

              {/* Grid Column Switcher (Desktop) */}
              <div className="hidden md:flex items-center gap-1 border border-[#e2e8f4] rounded-lg p-1">
                <button
                  onClick={() => setGridCols(3)}
                  aria-label="3 columns grid"
                  className={`p-1 rounded ${gridCols === 3
                    ? "bg-[#0d1f3c] text-white"
                    : "text-[#6e7d9b] hover:text-[#0d1f3c]"
                    }`}
                >
                  <IoGridOutline className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridCols(4)}
                  aria-label="4 columns grid"
                  className={`p-1 rounded ${gridCols === 4
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
                <span className="text-[#8a9ab8] font-bold tracking-wider hidden sm:inline">
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
                <span className="font-serif font-bold text-sm tracking-wider text-[#0d1f3c]">
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
                  className="w-full flex items-center justify-between text-xs font-bold tracking-wider text-[#0d1f3c]"
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
                  className="w-full flex items-center justify-between text-xs font-bold tracking-wider text-[#0d1f3c]"
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
                          className={`flex items-center gap-2 p-2 rounded-xl border text-xs font-medium transition-all cursor-pointer ${isSelected
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
                  className="w-full flex items-center justify-between text-xs font-bold tracking-wider text-[#0d1f3c]"
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
                  className="w-full flex items-center justify-between text-xs font-bold tracking-wider text-[#0d1f3c]"
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
                  className={`grid gap-5 sm:gap-6 ${gridCols === 4
                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                    : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                    }`}
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
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
                <p className="text-xs font-bold text-[#0d1f3c] mb-2">
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
                <p className="text-xs font-bold text-[#0d1f3c] mb-2">
                  Diamond Shape
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {diamondShapes.map((s) => (
                    <button
                      key={s.name}
                      onClick={() => toggleShape(s.name)}
                      className={`text-xs p-1.5 rounded-lg border text-left flex items-center gap-1.5 ${selectedShapes.includes(s.name)
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
                <p className="text-xs font-bold text-[#0d1f3c] mb-2">
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

