"use client";
import { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/ui/ProductCard";
import { allProducts, categoriesList } from "../data/productsData";
import {
  IoChevronDown,
  IoChevronUp,
  IoFilterOutline,
  IoClose,
  IoGridOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";

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
  { label: "18K Yellow Gold", key: "yellow-gold", color: "#e5c07b", count: 28 },
  { label: "18K White Gold", key: "white-gold", color: "#e2e8f0", count: 34 },
  { label: "18K Rose Gold", key: "rose-gold", color: "#e8b4b8", count: 18 },
  { label: "950 Platinum", key: "platinum", color: "#cbd5e1", count: 14 },
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

/* ─── Category Metadata Dictionary ─── */
const categoryMeta = {
  "All Jewellery": {
    eyebrow: "The Complete CaratLuxe Atelier",
    title: "All Certified Diamond Jewellery",
    subtitle: "Explore certified lab-grown diamond solitaires, earrings, necklaces, bracelets and bridal suites handcrafted in 18K solid gold and 950 platinum.",
  },
  "Rings": {
    eyebrow: "Signature Atelier Collection",
    title: "Solitaire & Diamond Rings",
    subtitle: "Handcrafted in 18K solid gold & 950 platinum with GIA & IGI certified lab-grown diamonds. Ethically created with zero carbon footprint.",
  },
  "Earrings": {
    eyebrow: "Everyday & High Luxe",
    title: "Diamond Studs, Hoops & Chandeliers",
    subtitle: "Solitaire studs, inside-out pavé hoops, celestial pear drops, and dramatic chandeliers sculpted with unmatched optical fire.",
  },
  "Necklaces": {
    eyebrow: "Timeless Atelier Lines",
    title: "Diamond Tennis Necklaces & Pendants",
    subtitle: "Collar chokers, continuous tennis strands, and solitaire pendants designed for life's unforgettable milestones.",
  },
  "Bracelets & Bangles": {
    eyebrow: "Wrist Luxe & Stacking Strands",
    title: "Diamond Tennis Bracelets & Bangles",
    subtitle: "Continuous row tennis strands and flexible diamond bangles sculpted for everyday elegance and black-tie brilliance.",
  },
  "Pendants": {
    eyebrow: "Solitaire & Accent Drops",
    title: "Diamond Solitaire Pendants",
    subtitle: "Minimalist daily accents and intricate cluster silhouettes forged in hallmarked 18K gold and platinum.",
  },
  "Mangalsutra": {
    eyebrow: "Modern & Sacred Bridal",
    title: "Diamond Mangalsutra Collection",
    subtitle: "Modern interpretations of sacred elegance featuring certified lab diamonds and black beads in hallmarked 18K gold.",
  },
};

function ProductsContent({ initialCategory }) {
  const searchParams = useSearchParams();
  const urlCategoryParam = searchParams.get("category");
  const urlShapeParam = searchParams.get("shape");
  const urlPriceParam = searchParams.get("price");

  // Determine starting category
  const getInitialCat = () => {
    if (initialCategory) return initialCategory;
    if (urlCategoryParam) {
      const match = categoriesList.find(
        (c) => c.slug.toLowerCase() === urlCategoryParam.toLowerCase() ||
          c.label.toLowerCase() === urlCategoryParam.toLowerCase()
      );
      if (match) return match.label;
    }
    return "All Jewellery";
  };

  /* State */
  const [selectedCategory, setSelectedCategory] = useState(getInitialCat());
  const [selectedMetals, setSelectedMetals] = useState([]);
  const [selectedShapes, setSelectedShapes] = useState(
    urlShapeParam ? [urlShapeParam.charAt(0).toUpperCase() + urlShapeParam.slice(1)] : []
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [selectedCarats, setSelectedCarats] = useState([]);
  const [readyToShipOnly, setReadyToShipOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [gridCols, setGridCols] = useState(3); // 3 or 4 columns
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync category if query param changes
  useEffect(() => {
    if (urlCategoryParam) {
      const match = categoriesList.find(
        (c) => c.slug.toLowerCase() === urlCategoryParam.toLowerCase() ||
          c.label.toLowerCase() === urlCategoryParam.toLowerCase()
      );
      if (match) setSelectedCategory(match.label);
    }
  }, [urlCategoryParam]);

  /* Accordion states for filters */
  const [openFilters, setOpenFilters] = useState({
    metal: true,
    shape: true,
    price: true,
    carat: true,
  });

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
    setSelectedCategory("All Jewellery");
    setSelectedMetals([]);
    setSelectedShapes([]);
    setSelectedPriceRange(priceRanges[0]);
    setSelectedCarats([]);
    setReadyToShipOnly(false);
  };

  const activeFilterCount =
    (selectedCategory !== "All Jewellery" ? 1 : 0) +
    selectedMetals.length +
    selectedShapes.length +
    (selectedPriceRange.min > 0 || selectedPriceRange.max < Infinity ? 1 : 0) +
    selectedCarats.length +
    (readyToShipOnly ? 1 : 0);

  /* Filter & Sort Logic */
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((p) => {
        if (selectedCategory !== "All Jewellery") {
          const matchCat =
            p.category.toLowerCase() === selectedCategory.toLowerCase() ||
            p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            selectedCategory.toLowerCase().includes(p.category.toLowerCase());
          if (!matchCat) return false;
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

  const activeMeta = categoryMeta[selectedCategory] || categoryMeta["All Jewellery"];

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="bg-[#fcfdfd] text-[#0d1535] min-h-screen">
        {/* ─── Breadcrumb Navigation ─── */}
        <div className="border-b border-[#e9eef6] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#6e7d9b] flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#c9a84c] transition-colors">
              Jewellery
            </Link>
            <span>/</span>
            <span className="text-[#0d1f3c] font-semibold">
              {selectedCategory}
            </span>
          </div>
        </div>

        {/* ─── Collection Hero Banner ─── */}
        <section className="bg-gradient-to-b from-[#f5f8ff] via-[#ffffff] to-[#ffffff] pt-9 pb-7 border-b border-[#e8edf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-px w-5 bg-[#c9a84c]" />
                  <span className="text-[10px] font-extrabold tracking-[0.3em] text-[#c9a84c] uppercase">
                    {activeMeta.eyebrow}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0d1f3c] tracking-tight flex items-baseline gap-3 flex-wrap">
                  {activeMeta.title}
                  <span className="text-sm sm:text-base font-normal font-sans text-[#8a9ab8]">
                    ({filteredProducts.length} designs)
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-3 text-[#526382] text-xs sm:text-sm leading-relaxed max-w-xl">
                  {activeMeta.subtitle}
                </p>
              </div>

              {/* Trust highlights */}
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 text-xs text-[#0d1f3c] bg-white/80 p-3.5 rounded-xl border border-[#e2e8f4] shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[#c9a84c] font-bold">✦</span>
                  <span className="font-semibold text-[11px] tracking-wide">
                    100% Certified Lab Diamonds
                  </span>
                </div>
                <div className="hidden lg:block w-px h-4 bg-[#e2e8f4]" />
                <div className="flex items-center gap-2">
                  <span className="text-[#c9a84c] font-bold">◈</span>
                  <span className="font-semibold text-[11px] tracking-wide">
                    Lifetime Exchange & Buyback
                  </span>
                </div>
              </div>
            </div>

            {/* ─── Horizontal Quick Category Pills ─── */}
            <div className="mt-8 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
              {categoriesList.map((sub) => {
                const isActive =
                  selectedCategory.toLowerCase() === sub.label.toLowerCase() ||
                  (sub.id === "all" && selectedCategory === "All Jewellery");
                return (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedCategory(sub.id === "all" ? "All Jewellery" : sub.label)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer shrink-0 ${isActive
                        ? "bg-[#0d1f3c] text-white shadow-sm ring-2 ring-[#c9a84c]/50"
                        : "bg-white text-[#4a5a7a] border border-[#e2e8f4] hover:border-[#c9a84c] hover:text-[#0d1f3c]"
                      }`}
                  >
                    {sub.label}
                    <span
                      className={`ml-1.5 text-[10px] ${isActive ? "text-[#e8c97a]" : "text-[#8a9ab8]"
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
                Showing {filteredProducts.length} of {allProducts.length} Designs
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

              {/* Group 2: Diamond Shape */}
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

            {/* ─── RIGHT PRODUCT GRID ─── */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-[#e2e8f4] p-12 text-center">
                  <p className="font-serif text-xl font-bold text-[#0d1f3c] mb-2">
                    No designs match your filter criteria
                  </p>
                  <p className="text-xs text-[#6e7d9b] max-w-sm mx-auto mb-6">
                    Try adjusting your metal, diamond shape, or price selections
                    to discover our handcrafted jewellery.
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
                  {/* All products strictly without interstitial banners */}
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={`₹${product.price.toLocaleString("en-IN")}`}
                      originalPrice={`₹${product.originalPrice.toLocaleString("en-IN")}`}
                      badge={product.badge}
                      badgeColor={product.badgeColor}
                      category={product.category}
                      carats={product.carat}
                      metal={product.metal}
                      image={product.images[0]}
                      images={product.images}
                    />
                  ))}
                </div>
              )}

              {/* ─── Pagination Bar ─── */}
              {/* <div className="mt-12 pt-6 border-t border-[#e8edf7] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#6e7d9b]">
                  Showing 1–{filteredProducts.length} of {allProducts.length} designs
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
              </div> */}
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

export default function ProductsPage({ initialCategory }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductsContent initialCategory={initialCategory} />
    </Suspense>
  );
}
