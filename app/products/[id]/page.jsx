"use client";
import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductCard from "../../components/ui/ProductCard";
import {
  IoHeartOutline,
  IoHeart,
  IoShareSocialOutline,
  IoShieldCheckmarkOutline,
  IoCheckmarkCircle,
  IoInformationCircleOutline,
  IoClose,
  IoBagCheckOutline,
} from "react-icons/io5";

/* ─── Related Products ("You May Also Like") ─── */
const relatedProducts = [
  {
    id: "celestial-solitaire-ring",
    name: "The Celestial Solitaire Diamond Ring",
    category: "Solitaire Rings",
    price: 59360,
    originalPrice: 74200,
    discount: "20% Off",
    badge: "Bestseller",
    badgeColor: "bg-[#c9a84c] text-[#0d1f3c]",
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
    price: 68400,
    originalPrice: 85500,
    discount: "20% Off",
    badge: "Ready to Ship",
    badgeColor: "bg-[#0d1f3c] text-white",
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
    price: 85200,
    originalPrice: 106500,
    discount: "20% Off",
    badge: "New Arrival",
    badgeColor: "bg-[#2a4080] text-white",
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
    price: 92450,
    originalPrice: 115500,
    discount: "20% Off",
    badge: "Signature",
    badgeColor: "bg-[#c9a84c] text-[#0d1f3c]",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80",
    ],
  },
];

/* ─── Mock Product Database ─── */
const productCatalogue = {
  default: {
    id: "grand-row-solitaire-diamond-ring",
    name: "The Grand Row Solitaire Diamond Ring",
    collection: "Signature Atelier Series",
    sku: "CL-RNG-0824",
    basePrice: 159360,
    mrpPrice: 199200,
    discount: "20% Savings",
    rating: 4.95,
    reviewsCount: 42,
    images: [
      {
        url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&auto=format&fit=crop&q=85",
        label: "Crown Macro",
      },
      {
        url: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=1000&auto=format&fit=crop&q=85",
        label: "On Hand",
      },
      {
        url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&auto=format&fit=crop&q=85",
        label: "Profile View",
      },
      {
        url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1000&auto=format&fit=crop&q=85",
        label: "Under Gallery",
      },
      {
        url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&auto=format&fit=crop&q=85",
        label: "Atelier Unboxing",
      },
    ],
    metals: [
      { id: "yellow-gold", name: "Yellow Gold", color: "#e5c07b" },
      { id: "rose-gold", name: "Rose Gold", color: "#e8b4b8" },
      { id: "white-gold", name: "White Gold", color: "#e2e8f0" },
    ],
    purities: [
      { id: "14k", name: "14Kt Gold", fineness: "585 Hallmark", desc: "Durable Everyday", priceMultiplier: 0.90 },
      { id: "18k", name: "18Kt Gold", fineness: "750 Hallmark", desc: "Standard Luxury", priceMultiplier: 1.0, isPopular: true },
      // { id: "platinum", name: "950 Platinum", fineness: "950 Hallmark", desc: "Prestige Rare", priceMultiplier: 1.15 },
    ],
    carats: [
      { weight: "1.00 Carat", price: 159360, mrp: 199200, clarity: "VVS1 · E Color" },
      { weight: "1.50 Carat", price: 218500, mrp: 273125, clarity: "VVS1 · D Color" },
      { weight: "2.00 Carat", price: 295000, mrp: 368750, clarity: "VVS1 · D Color" },
    ],
    ringSizes: [10, 12, 14, 16, 18, 20],
  },
};

export default function ProductDetailPage({ params }) {
  const unwrappedParams = params && typeof params.then === "function" ? use(params) : (params || { id: "default" });
  const productId = unwrappedParams.id || "default";
  const product = productCatalogue[productId] || productCatalogue.default;

  /* State Customizers */
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMetal, setSelectedMetal] = useState(product.metals[0]);
  const [selectedPurity, setSelectedPurity] = useState(
    product.purities ? product.purities[1] : { id: "18k", name: "18Kt Gold", fineness: "750 Hallmark", priceMultiplier: 1.0 }
  );
  const [selectedCarat, setSelectedCarat] = useState(product.carats[0]);
  const [selectedSize, setSelectedSize] = useState(14);
  const [engravingText, setEngravingText] = useState("");
  const [showEngravingInput, setShowEngravingInput] = useState(false);
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [sizeModalOpen, setSizeModalOpen] = useState(false);
  const [addedToCartToast, setAddedToCartToast] = useState(false);

  /* Bundle checkboxes */
  const [bundleBand, setBundleBand] = useState(true);
  const [bundleStuds, setBundleStuds] = useState(true);

  /* Calculated dynamic price */
  const dynamicPrice = Math.round(selectedCarat.price * selectedPurity.priceMultiplier);
  const dynamicMrp = Math.round(selectedCarat.mrp * selectedPurity.priceMultiplier);

  const checkPincode = (e) => {
    e.preventDefault();
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus("valid");
    } else {
      setPincodeStatus("invalid");
    }
  };

  const handleAddToCart = () => {
    setAddedToCartToast(true);
    setTimeout(() => setAddedToCartToast(false), 3500);
  };

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="bg-[#fcfdfd] text-[#0d1535] min-h-screen">
        {/* ─── Breadcrumbs ─── */}
        <div className="border-b border-[#eef2f8] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#6e7d9b] flex items-center gap-2 overflow-x-auto whitespace-nowrap">
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
            <Link href="/rings" className="hover:text-[#c9a84c] transition-colors">
              Solitaire & Diamond Rings
            </Link>
            <span>/</span>
            <span className="text-[#0d1f3c] font-semibold truncate">
              {product.name}
            </span>
          </div>
        </div>

        {/* ─── Main Product Showcase & Customizer Area ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* ─── LEFT COLUMN: Media Gallery (Sticky till Add to Cart) ─── */}
            <div className="lg:col-span-6 flex flex-col gap-4 lg:sticky lg:top-24 self-start">
              {/* Main Photo Container */}
              <div className="relative aspect-[4/4] sm:aspect-[5/4] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#f4f7ff] border border-[#e2e8f4] shadow-xs group">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold tracking-wide bg-[#0d1f3c] text-white px-3 py-1 rounded-full shadow-xs">
                    ✦ 100% Certified Lab Diamond
                  </span>
                  <span className="text-[10px] font-bold tracking-wide bg-[#c9a84c] text-[#0d1f3c] px-3 py-1 rounded-full shadow-xs">
                    Ready to Ship
                  </span>
                </div>

                {/* Wishlist & Share Buttons */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    aria-label="Wishlist"
                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xs hover:scale-105 transition-all text-[#4a5a7a] cursor-pointer"
                  >
                    {isWishlisted ? (
                      <IoHeart className="w-5 h-5 text-red-500" />
                    ) : (
                      <IoHeartOutline className="w-5 h-5 hover:text-[#c9a84c]" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: product.name, url: window.location.href });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                      }
                    }}
                    aria-label="Share"
                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xs hover:scale-105 transition-all text-[#4a5a7a] hover:text-[#c9a84c] cursor-pointer"
                  >
                    <IoShareSocialOutline className="w-5 h-5" />
                  </button>
                </div>

                {/* Main Product Image */}
                <Image
                  src={product.images[selectedImage].url}
                  alt={`${product.name} angle ${selectedImage + 1}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Thumbnails Row */}
              <div className="grid grid-cols-5 gap-3">
                {product.images.map((img, idx) => {
                  const isSelected = selectedImage === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      onMouseEnter={() => setSelectedImage(idx)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${isSelected
                        ? "border-[#c9a84c] ring-2 ring-[#c9a84c]/20 scale-102 shadow-xs"
                        : "border-[#e2e8f4] opacity-75 hover:opacity-100 hover:border-[#c9a84c]/50"
                        }`}
                    >
                      <Image
                        src={img.url}
                        alt={img.label}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                      <span className="absolute bottom-1 left-1 right-1 text-[9px] font-medium text-center text-white bg-black/60 rounded py-0.5 truncate px-1">
                        {img.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ─── RIGHT COLUMN: Customizer & Details ─── */}
            <div className="lg:col-span-6 flex flex-col">
              {/* Collection Eyebrow & SKU */}
              <div className="flex items-center justify-between text-xs text-[#8a9ab8] pb-1">
                <span className="text-xs font-semibold tracking-wider text-[#c9a84c]">
                  {product.collection}
                </span>
                <span className="text-[11px] tracking-wider font-mono">
                  {product.sku}
                </span>
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-3xl font-bold text-[#0d1f3c] mt-1 mb-2 leading-tight">
                {product.name}
              </h1>

              {/* Status Row */}
              <div className="flex items-center justify-between pb-4 border-b border-[#eef2f8] text-xs">
                <span className="text-[#c9a84c] font-semibold flex items-center gap-1.5">
                  <IoCheckmarkCircle className="w-4 h-4 text-emerald-600" />
                  In Stock · Ready to Dispatch Nationwide
                </span>
              </div>

              {/* Price Row */}
              <div className="py-4 border-b border-[#eef2f8]">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-bold text-[#0d1f3c]">
                    ₹{dynamicPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm sm:text-base text-[#8a9ab8] line-through">
                    ₹{dynamicMrp.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs font-extrabold text-[#9a2e2e] bg-[#fdf2f2] px-2 py-0.5 rounded-full">
                    {product.discount}
                  </span>
                </div>
                <p className="text-[11px] text-[#6e7d9b] mt-1">
                  Inclusive of all taxes · Free insured express shipping across India
                </p>
              </div>

              {/* ─── CUSTOMIZER 1: Metal Colour & Tone ─── */}
              <div className="py-4 border-b border-[#eef2f8]">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-semibold text-xs text-[#0d1f3c]">
                    Metal Colour:
                  </span>
                  <span className="font-semibold text-[#c9a84c]">
                    {selectedMetal.name}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {product.metals.map((metal) => {
                    const isSelected = selectedMetal.id === metal.id;
                    return (
                      <button
                        key={metal.id}
                        type="button"
                        onClick={() => setSelectedMetal(metal)}
                        className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${isSelected
                          ? "border-[#c9a84c] bg-[#fdf8ed] ring-2 ring-[#c9a84c]/20 shadow-xs"
                          : "border-[#e2e8f4] bg-white hover:border-[#c9a84c]/50"
                          }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0"
                          style={{ backgroundColor: metal.color }}
                        />
                        <span className="text-[11px] font-semibold text-[#0d1f3c] truncate">
                          {metal.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ─── CUSTOMIZER 2: Gold & Metal Purity ─── */}
              <div className="py-4 border-b border-[#eef2f8]">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-semibold text-xs text-[#0d1f3c]">
                    Gold & Metal Purity:
                  </span>
                  <span className="font-semibold text-[#c9a84c]">
                    {selectedPurity.name} · {selectedPurity.fineness}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {product.purities.map((purity) => {
                    const isSelected = selectedPurity.id === purity.id;
                    return (
                      <button
                        key={purity.id}
                        type="button"
                        onClick={() => setSelectedPurity(purity)}
                        className={`p-2.5 rounded-xl border text-center relative transition-all cursor-pointer ${isSelected
                          ? "border-[#c9a84c] bg-[#0d1f3c] text-white shadow-sm ring-2 ring-[#c9a84c]/30"
                          : "border-[#e2e8f4] bg-white text-[#0d1f3c] hover:border-[#c9a84c]/60"
                          }`}
                      >
                        {purity.isPopular && !isSelected && (
                          <span className="absolute -top-2 right-2 text-[8px] font-bold bg-[#c9a84c] text-[#0d1f3c] px-1.5 py-0.2 rounded-full shadow-xs">
                            Popular
                          </span>
                        )}
                        <span className="block text-xs font-bold">
                          {purity.name}
                        </span>
                        <span
                          className={`block text-[10px] mt-0.5 ${isSelected ? "text-[#e8c97a]" : "text-[#8a9ab8]"}`}
                        >
                          {purity.fineness}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ─── CUSTOMIZER 3: Solitaire Carat Selection ─── */}
              <div className="py-4 border-b border-[#eef2f8]">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-semibold text-xs text-[#0d1f3c]">
                    Diamond Carat Weight:
                  </span>
                  <span className="text-[11px] text-[#6e7d9b]">
                    Graded {selectedCarat.clarity}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {product.carats.map((c) => {
                    const isSelected = selectedCarat.weight === c.weight;
                    const calculatedCaratPrice = Math.round(c.price * selectedPurity.priceMultiplier);
                    return (
                      <button
                        key={c.weight}
                        onClick={() => setSelectedCarat(c)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${isSelected
                          ? "border-[#c9a84c] bg-[#0d1f3c] text-white shadow-sm ring-2 ring-[#c9a84c]/40"
                          : "border-[#e2e8f4] bg-white text-[#0d1f3c] hover:border-[#c9a84c]/60"
                          }`}
                      >
                        <span className="block text-xs font-bold">
                          {c.weight}
                        </span>
                        <span
                          className={`block text-[11px] mt-0.5 font-semibold ${isSelected ? "text-[#e8c97a]" : "text-[#4a5a7a]"
                            }`}
                        >
                          ₹{calculatedCaratPrice.toLocaleString("en-IN")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ─── CUSTOMIZER 4: Ring Size ─── */}
              <div className="py-4 border-b border-[#eef2f8]">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-semibold text-xs text-[#0d1f3c]">
                    Select Ring Size:
                  </span>
                  <button
                    onClick={() => setSizeModalOpen(true)}
                    className="text-[11px] font-bold text-[#c9a84c] hover:underline cursor-pointer inline-flex items-center gap-1"
                  >
                    <IoInformationCircleOutline className="w-3.5 h-3.5" />
                    Size Guide
                  </button>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {product.ringSizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-xl border text-xs font-bold transition-all cursor-pointer shrink-0 ${isSelected
                          ? "border-[#0d1f3c] bg-[#0d1f3c] text-white shadow-xs"
                          : "border-[#e2e8f4] bg-white text-[#4a5a7a] hover:border-[#c9a84c]"
                          }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>

                <p className="text-[11px] text-[#6e7d9b] mt-2 flex items-center gap-1">
                  <span className="text-[#c9a84c]">✦</span>
                  Unsure of size? We send a complimentary physical ring sizer before casting.
                </p>
              </div>

              {/* ─── CUSTOMIZER 4: Free Laser Engraving ─── */}
              <div className="py-4 border-b border-[#eef2f8]">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-xs text-[#0d1f3c]">
                    Complimentary Laser Engraving
                  </span>
                  <button
                    onClick={() => setShowEngravingInput(!showEngravingInput)}
                    className="text-[11px] font-bold text-[#c9a84c] hover:underline cursor-pointer"
                  >
                    {showEngravingInput ? "Remove" : "+ Add Message"}
                  </button>
                </div>

                {showEngravingInput && (
                  <div className="mt-2.5">
                    <input
                      type="text"
                      maxLength={20}
                      placeholder="e.g. Forever Yours · 18.11.26"
                      value={engravingText}
                      onChange={(e) => setEngravingText(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#e2e8f4] focus:outline-none focus:border-[#c9a84c]"
                    />
                    <span className="text-[10px] text-[#8a9ab8] mt-1 block">
                      Max 20 characters · Engraved inside the comfort shank
                    </span>
                  </div>
                )}
              </div>

              {/* ─── Pincode Delivery Availability Checker ─── */}
              <div className="py-4 border-b border-[#eef2f8]">
                <span className="font-semibold text-xs text-[#0d1f3c] block mb-2">
                  Delivery & Store Availability
                </span>
                <form onSubmit={checkPincode} className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter 6-digit Pincode"
                    value={pincode}
                    onChange={(e) => {
                      setPincode(e.target.value);
                      setPincodeStatus(null);
                    }}
                    className="flex-1 text-xs px-3.5 py-2 rounded-xl border border-[#e2e8f4] focus:outline-none focus:border-[#c9a84c]"
                  />
                  <button
                    type="submit"
                    className="btn-navy text-white text-xs font-bold px-5 py-2 rounded-xl hover:bg-[#c9a84c] hover:text-[#0d1f3c] transition-colors cursor-pointer"
                  >
                    Check
                  </button>
                </form>

                {pincodeStatus === "valid" && (
                  <p className="text-[11px] text-emerald-700 font-semibold mt-2 flex items-center gap-1.5">
                    <IoCheckmarkCircle className="w-4 h-4 text-emerald-600" />
                    Delivery available by Wednesday, Nov 18 · Express Air Insured
                  </p>
                )}
                {pincodeStatus === "invalid" && (
                  <p className="text-[11px] text-red-600 font-semibold mt-2">
                    Please enter a valid 6-digit Indian pincode.
                  </p>
                )}
              </div>

              {/* ─── Action Buttons (Add to Bag / Buy Now) ─── */}
              <div className="pt-6 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full btn-navy text-white text-sm font-semibold py-4 rounded-xl shadow-md hover:bg-[#031d42] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <IoBagCheckOutline className="w-4 h-4 text-[#c9a84c]" />
                  Add to Cart
                </button>

                <button
                  type="button"
                  onClick={() => alert("Proceeding to Express Checkout...")}
                  className="w-full btn-gold text-[#0d1f3c] text-sm font-bold py-4 rounded-xl shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Instant Buy Now
                </button>

                {/* Toast Notification */}
                {addedToCartToast && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-xl text-center animate-fadeIn">
                    ✓ Ring added to your luxury cart with selected options!
                  </div>
                )}
              </div>

              {/* ─── Trust Guarantees Grid ─── */}
              {/* <div className="mt-8 grid grid-cols-2 gap-3 text-left">
                <div className="p-3 bg-[#f8fafd] rounded-xl border border-[#e8edf7]">
                  <span className="text-[#c9a84c] text-base font-bold block mb-1">✦</span>
                  <h5 className="text-xs font-bold text-[#0d1f3c]">
                    IGI Certified Diamond
                  </h5>
                  <p className="text-[10px] text-[#6e7d9b]">
                    Laser girdle inscription matching certificate
                  </p>
                </div>
                <div className="p-3 bg-[#f8fafd] rounded-xl border border-[#e8edf7]">
                  <span className="text-[#c9a84c] text-base font-bold block mb-1">◈</span>
                  <h5 className="text-xs font-bold text-[#0d1f3c]">
                    Lifetime Exchange
                  </h5>
                  <p className="text-[10px] text-[#6e7d9b]">
                    100% diamond value upgrade credit
                  </p>
                </div>
                <div className="p-3 bg-[#f8fafd] rounded-xl border border-[#e8edf7]">
                  <span className="text-[#c9a84c] text-base font-bold block mb-1">✧</span>
                  <h5 className="text-xs font-bold text-[#0d1f3c]">
                    30-Day Free Resizing
                  </h5>
                  <p className="text-[10px] text-[#6e7d9b]">
                    Hassle-free size adjustment guarantee
                  </p>
                </div>
                <div className="p-3 bg-[#f8fafd] rounded-xl border border-[#e8edf7]">
                  <span className="text-[#c9a84c] text-base font-bold block mb-1">◇</span>
                  <h5 className="text-xs font-bold text-[#0d1f3c]">
                    BIS Hallmarked Purity
                  </h5>
                  <p className="text-[10px] text-[#6e7d9b]">
                    Guaranteed 750/950 fineness stamped
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* ─── PRODUCT DESCRIPTION & DETAILED SPECIFICATIONS (MATCHING REFERENCE) ─── */}
        <section className="bg-white py-12 sm:py-16 border-t border-[#e8edf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

              {/* Left Column: Narrative, Details, and Tables (col-span-8) */}
              <div className="lg:col-span-8 space-y-8">
                {/* 1. Narrative Description */}
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1f3c] mb-4">
                    Product Description
                  </h2>
                  <div className="text-xs sm:text-[13px] text-[#526382] leading-relaxed space-y-3">
                    <p>
                      Embodying timeless elegance, {product.name} features an exquisite, optically flawless lab-grown center solitaire certified by international gemological institutes. Precision-cut to Hearts & Arrows symmetry, every facet unleashes maximum light dispersion and fire.
                    </p>
                    <p>
                      Handcrafted in solid {selectedMetal.name}, the basket crown sits securely on a comfort-fit shank engineered for luxurious everyday wear. The accent pavé diamonds gracefully trace the contours to amplify the brilliance of the center stone.
                    </p>
                    <p>
                      Created with 100% renewable plasma CVD technology, this diamond is ethically made, conflict-free, and atomically identical to mined diamonds — bringing conscious luxury to your milestone celebrations.
                    </p>
                  </div>
                </div>

                {/* 2. Product Details Quick Info */}
                <div className="pt-2 border-t border-[#eef2f8]">
                  <h3 className="text-sm font-bold text-[#0d1f3c] mb-3">
                    Product Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#f8fafd] p-4 rounded-xl border border-[#e8edf7]">
                    <div>
                      <span className="text-[#6e7d9b] block text-[11px]">Weight Specifications:</span>
                      <span className="font-semibold text-[#0d1f3c]">
                        Gross: ~4.63 gm · Net Gold: ~4.25 gm
                      </span>
                    </div>
                    <div>
                      <span className="text-[#6e7d9b] block text-[11px]">Metal Purity:</span>
                      <span className="font-semibold text-[#0d1f3c]">
                        {selectedPurity.name} ({selectedMetal.name}) · BIS {selectedPurity.fineness}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Table 1: Lab Grown Diamond Information */}
                <div>
                  <h3 className="text-sm font-bold text-[#0d1f3c] mb-3">
                    Lab Grown Diamond Information
                  </h3>
                  <div className="overflow-x-auto border border-[#e2e8f4] rounded-xl shadow-xs">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-[#f5f8fc] border-b border-[#e2e8f4] text-[#0d1f3c] font-bold">
                          <th className="py-3 px-3.5">Diamond Shape</th>
                          <th className="py-3 px-3.5">No of Diamonds</th>
                          <th className="py-3 px-3.5">Total Weight (Ct)</th>
                          <th className="py-3 px-3.5">Color</th>
                          <th className="py-3 px-3.5">Clarity</th>
                          <th className="py-3 px-3.5">Setting Type</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#eef2f8] text-[#526382]">
                        <tr className="hover:bg-[#fbfcfd] transition-colors">
                          <td className="py-3 px-3.5 font-semibold text-[#0d1f3c]">Round Solitaire</td>
                          <td className="py-3 px-3.5">1</td>
                          <td className="py-3 px-3.5">{selectedCarat.weight}</td>
                          <td className="py-3 px-3.5">D – E</td>
                          <td className="py-3 px-3.5">{selectedCarat.clarity}</td>
                          <td className="py-3 px-3.5">Four Prong Crown</td>
                        </tr>
                        <tr className="hover:bg-[#fbfcfd] transition-colors">
                          <td className="py-3 px-3.5 font-semibold text-[#0d1f3c]">Round Pavé Accents</td>
                          <td className="py-3 px-3.5">16</td>
                          <td className="py-3 px-3.5">0.38 Ct</td>
                          <td className="py-3 px-3.5">E – F</td>
                          <td className="py-3 px-3.5">VVS – VS</td>
                          <td className="py-3 px-3.5">Micro Pavé</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 4. Table 2: Price Breakup */}
                <div>
                  <h3 className="text-sm font-bold text-[#0d1f3c] mb-3">
                    Price Breakup
                  </h3>
                  <div className="overflow-x-auto border border-[#e2e8f4] rounded-xl shadow-xs">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-[#f5f8fc] border-b border-[#e2e8f4] text-[#0d1f3c] font-bold">
                          <th className="py-3 px-3.5">Component</th>
                          <th className="py-3 px-3.5 text-right">Rate / Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#eef2f8] text-[#526382]">
                        <tr className="hover:bg-[#fbfcfd] transition-colors">
                          <td className="py-2.5 px-3.5">Solid Metal Value ({selectedPurity.name} · {selectedMetal.name} ~4.25g)</td>
                          <td className="py-2.5 px-3.5 text-right font-semibold text-[#0d1f3c]">
                            ₹{Math.round(dynamicPrice * 0.20).toLocaleString("en-IN")}
                          </td>
                        </tr>
                        <tr className="hover:bg-[#fbfcfd] transition-colors">
                          <td className="py-2.5 px-3.5">Lab-Grown Solitaire & Accent Diamonds</td>
                          <td className="py-2.5 px-3.5 text-right font-semibold text-[#0d1f3c]">
                            ₹{Math.round(dynamicPrice * 0.62).toLocaleString("en-IN")}
                          </td>
                        </tr>
                        <tr className="hover:bg-[#fbfcfd] transition-colors">
                          <td className="py-2.5 px-3.5">Atelier Craftsmanship & Precision Making Charges</td>
                          <td className="py-2.5 px-3.5 text-right font-semibold text-[#0d1f3c]">
                            ₹{Math.round(dynamicPrice * 0.11).toLocaleString("en-IN")}
                          </td>
                        </tr>
                        <tr className="hover:bg-[#fbfcfd] transition-colors">
                          <td className="py-2.5 px-3.5">GST (3%) & Digital Gemological Dossier</td>
                          <td className="py-2.5 px-3.5 text-right font-semibold text-[#0d1f3c]">
                            ₹{Math.round(dynamicPrice * 0.07).toLocaleString("en-IN")}
                          </td>
                        </tr>
                        <tr className="bg-[#fdf9ee] font-bold text-[#0d1f3c]">
                          <td className="py-3 px-3.5">Total Price (Inclusive of Taxes)</td>
                          <td className="py-3 px-3.5 text-right text-sm text-[#0d1f3c]">
                            ₹{dynamicPrice.toLocaleString("en-IN")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[11px] text-[#8a9ab8] mt-2 italic">
                    * Total price mentioned is inclusive of all taxes. Gold and diamond rates are transparent and linked to prevailing market benchmarks.
                  </p>
                </div>

                {/* 5. Categories & Tags Strip */}
                <div className="pt-4 border-t border-[#eef2f8] text-xs text-[#6e7d9b] space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-[#0d1f3c]">Categories:</span>
                    <span className="hover:text-[#c9a84c] cursor-pointer">Solitaire Rings</span>,
                    <span className="hover:text-[#c9a84c] cursor-pointer">Engagement Rings</span>,
                    <span className="hover:text-[#c9a84c] cursor-pointer">Fine Diamond Jewellery</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-[#0d1f3c]">Tags:</span>
                    {["Women", "Anniversary Gift", "Solitaire", "Everyday Luxury", "18K Gold", "Conflict-Free"].map((tag) => (
                      <span key={tag} className="bg-[#f4f7ff] text-[#4a5a7a] px-2 py-0.5 rounded-md text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Independent Certifications & Our Promise (col-span-4) */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                {/* Certification Card */}
                <div className="bg-[#f8fafd] rounded-2xl p-6 border border-[#e2e8f4] shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#eef2f8] mb-4">
                    <span className="text-xs font-bold text-[#0d1f3c]">
                      Independent Certification
                    </span>
                    <IoShieldCheckmarkOutline className="w-5 h-5 text-emerald-600" />
                  </div>


                  {/* Badges Display */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white p-3 rounded-xl border border-[#e8edf7] text-center">
                      <span className="font-serif font-extrabold text-base text-[#0d1f3c] tracking-wider block">
                        IGI
                      </span>
                      <span className="text-[10px] text-[#8a9ab8] block">Certified Lab Dossier</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-[#e8edf7] text-center">
                      <span className="font-serif font-extrabold text-base text-[#0d1f3c] tracking-wider block">
                        GIA
                      </span>
                      <span className="text-[10px] text-[#8a9ab8] block">Laser Inscribed</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#6e7d9b] leading-relaxed mb-3">
                    Each diamond above 0.50 Carats carries a unique laser-inscribed certificate number on its girdle matching its official laboratory grading report.
                  </p>

                  <div className="p-3 bg-white rounded-xl border border-[#e8edf7] flex items-center gap-3">
                    <span className="text-[#c9a84c] text-lg font-bold">⚖</span>
                    <div className="text-[11px]">
                      <span className="font-bold text-[#0d1f3c] block">BIS Hallmarked Purity</span>
                      <span className="text-[#8a9ab8]">Govt. of India certified 750 / 950 fineness</span>
                    </div>
                  </div>
                </div>

                {/* Our Promise Card */}
                <div className="bg-white rounded-2xl p-6 border border-[#e2e8f4] shadow-xs">
                  <h3 className="text-sm font-bold text-[#0d1f3c] mb-4 pb-2 border-b border-[#eef2f8]">
                    Our Promise
                  </h3>
                  <ul className="space-y-3.5 text-xs text-[#526382]">
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#fdf8ec] text-[#c9a84c] flex items-center justify-center font-bold text-xs shrink-0">✦</span>
                      <span>100% Certified Lab-Grown Diamonds</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#fdf8ec] text-[#c9a84c] flex items-center justify-center font-bold text-xs shrink-0">◈</span>
                      <span>Free Express Insured Doorstep Delivery</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#fdf8ec] text-[#c9a84c] flex items-center justify-center font-bold text-xs shrink-0">✧</span>
                      <span>Lifetime 100% Value Exchange & Buyback</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#fdf8ec] text-[#c9a84c] flex items-center justify-center font-bold text-xs shrink-0">◇</span>
                      <span>30-Day Complimentary Size Adjustment</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ─── YOU MAY ALSO LIKE (RELATED PRODUCTS) ─── */}
        <section className="bg-[#fcfdfd] py-14 sm:py-18 border-t border-[#e8edf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#c9a84c]">
                  Curated Recommendations
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1f3c] mt-1">
                  You May Also Like
                </h2>
              </div>
              <Link
                href="/products"
                className="text-xs font-bold text-[#0d1f3c] hover:text-[#c9a84c] tracking-wide inline-flex items-center gap-1 transition-colors"
              >
                View Full Collection →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Trust Badges Footer Strip ─── */}
        <section className="bg-[#0d1f3c] text-white py-8 border-t border-[#c9a84c]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-[#c9a84c] text-xl font-bold mb-1">✦</span>
              <span className="text-xs font-bold">
                100% Certified Diamonds
              </span>
              <span className="text-[10px] text-white/60">GIA & IGI Dossier Included</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#c9a84c] text-xl font-bold mb-1">◈</span>
              <span className="text-xs font-bold">
                Free Insured Shipping
              </span>
              <span className="text-[10px] text-white/60">Doorstep Delivery Nationwide</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#c9a84c] text-xl font-bold mb-1">✧</span>
              <span className="text-xs font-bold">
                Lifetime Exchange
              </span>
              <span className="text-[10px] text-white/60">100% Value Buyback Credit</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#c9a84c] text-xl font-bold mb-1">◇</span>
              <span className="text-xs font-bold">
                30-Day Free Resizing
              </span>
              <span className="text-[10px] text-white/60">Hassle-Free Peace of Mind</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ─── Ring Size Guide Modal ─── */}
      {sizeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSizeModalOpen(false)}
              className="absolute top-4 right-4 text-[#6e7d9b] hover:text-[#0d1f3c] p-1"
            >
              <IoClose className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-xl font-bold text-[#0d1f3c] mb-2">
              Atelier Ring Size Guide
            </h3>
            <p className="text-xs text-[#526382] mb-4">
              Indian standard ring sizing (inner diameter in millimetres):
            </p>

            <div className="border border-[#e2e8f4] rounded-xl overflow-hidden mb-4 text-xs">
              <div className="bg-[#f5f8fc] px-4 py-2 font-bold text-[#0d1f3c] flex justify-between">
                <span>Indian Size</span>
                <span>Inner Diameter (mm)</span>
              </div>
              <div className="divide-y divide-[#f0f3fa]">
                <div className="px-4 py-2 flex justify-between">
                  <span>Size 10</span>
                  <span>15.9 mm</span>
                </div>
                <div className="px-4 py-2 flex justify-between">
                  <span>Size 12</span>
                  <span>16.5 mm</span>
                </div>
                <div className="px-4 py-2 flex justify-between font-bold bg-[#fbf8ed]">
                  <span>Size 14 (Standard)</span>
                  <span>17.2 mm</span>
                </div>
                <div className="px-4 py-2 flex justify-between">
                  <span>Size 16</span>
                  <span>17.8 mm</span>
                </div>
                <div className="px-4 py-2 flex justify-between">
                  <span>Size 18</span>
                  <span>18.5 mm</span>
                </div>
                <div className="px-4 py-2 flex justify-between">
                  <span>Size 20</span>
                  <span>19.1 mm</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#6e7d9b] leading-relaxed mb-4">
              ✦ Remember: If the size isn't 100% perfect upon receipt, we provide
              complimentary insured door-to-door resizing within 30 days.
            </p>

            <button
              onClick={() => setSizeModalOpen(false)}
              className="w-full btn-navy text-white text-xs font-bold py-3 rounded-xl"
            >
              Close Guide
            </button>
          </div>
        </div>
      )}
    </>
  );
}
