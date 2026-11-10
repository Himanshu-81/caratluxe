"use client";
import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import {
  IoHeartOutline,
  IoHeart,
  IoShareSocialOutline,
  IoStar,
  IoShieldCheckmarkOutline,
  IoSparklesOutline,
  IoAirplaneOutline,
  IoCheckmarkCircle,
  IoCallOutline,
  IoVideocamOutline,
  IoSearchOutline,
  IoInformationCircleOutline,
  IoChevronDown,
  IoChevronUp,
  IoClose,
  IoBagCheckOutline,
} from "react-icons/io5";

/* ─── Mock Product Database ─── */
const productCatalogue = {
  default: {
    id: "grand-row-solitaire-diamond-ring",
    name: "The Grand Row Solitaire Diamond Ring",
    collection: "Signature Atelier Series",
    sku: "CL-RNG-0824",
    basePrice: 159360,
    mrpPrice: 199200,
    discount: "20% SAVINGS",
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
      { id: "yellow-gold", name: "18K Yellow Gold", color: "#e5c07b", priceMultiplier: 1.0 },
      { id: "rose-gold", name: "18K Rose Gold", color: "#e8b4b8", priceMultiplier: 1.0 },
      { id: "white-gold", name: "18K White Gold", color: "#e2e8f0", priceMultiplier: 1.0 },
      { id: "platinum", name: "950 Platinum", color: "#cbd5e1", priceMultiplier: 1.08 },
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
  const unwrappedParams = params ? use(params) : { id: "default" };
  const productId = unwrappedParams.id || "default";
  const product = productCatalogue[productId] || productCatalogue.default;

  /* State Customizers */
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("photo"); // "photo", "360", "video"
  const [selectedMetal, setSelectedMetal] = useState(product.metals[0]);
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
  const dynamicPrice = Math.round(selectedCarat.price * selectedMetal.priceMultiplier);
  const dynamicMrp = Math.round(selectedCarat.mrp * selectedMetal.priceMultiplier);
  const emiAmount = Math.round(dynamicPrice / 12);

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
            {/* ─── LEFT COLUMN: Media Gallery ─── */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Main Photo Container */}
              <div className="relative aspect-[4/4] sm:aspect-[5/4] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#f4f7ff] border border-[#e2e8f4] shadow-xs group">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
                  <span className="text-[9px] font-extrabold tracking-widest uppercase bg-[#0d1f3c] text-white px-3 py-1 rounded-full shadow-xs">
                    ✦ 100% Certified Lab Diamond
                  </span>
                  <span className="text-[9px] font-extrabold tracking-widest uppercase bg-[#c9a84c] text-[#0d1f3c] px-3 py-1 rounded-full shadow-xs">
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

                {/* Image Display / View Modes */}
                {activeTab === "photo" && (
                  <Image
                    src={product.images[selectedImage].url}
                    alt={`${product.name} angle ${selectedImage + 1}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                )}

                {activeTab === "360" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d1f3c] text-white p-6 text-center">
                    <span className="text-4xl text-[#c9a84c] mb-3 animate-spin">
                      ⟳
                    </span>
                    <h4 className="font-serif text-lg font-bold">
                      Interactive 360° Studio View
                    </h4>
                    <p className="text-xs text-white/70 max-w-xs mt-1">
                      Drag left or right to inspect the pavilion, girdle, and
                      hidden pavé crown from every optical angle.
                    </p>
                  </div>
                )}

                {activeTab === "video" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a1628] text-white p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#c9a84c] text-[#0d1f3c] flex items-center justify-center font-bold text-xl mb-3 shadow-lg">
                      ▶
                    </div>
                    <h4 className="font-serif text-lg font-bold">
                      High Definition Diamond Fire Video
                    </h4>
                    <p className="text-xs text-white/70 max-w-xs mt-1">
                      Recorded under natural daylight and studio spot illumination to
                      display scintillation and optical dispersion.
                    </p>
                  </div>
                )}

                {/* View Mode Switcher Overlay */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20">
                  <button
                    onClick={() => setActiveTab("photo")}
                    className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase transition-colors cursor-pointer ${activeTab === "photo"
                      ? "bg-[#c9a84c] text-[#0d1f3c]"
                      : "text-white/80 hover:text-white"
                      }`}
                  >
                    Photography
                  </button>
                  {/* <button
                    onClick={() => setActiveTab("360")}
                    className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase transition-colors cursor-pointer ${activeTab === "360"
                      ? "bg-[#c9a84c] text-[#0d1f3c]"
                      : "text-white/80 hover:text-white"
                      }`}
                  >
                    360° View
                  </button>
                  <button
                    onClick={() => setActiveTab("video")}
                    className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase transition-colors cursor-pointer ${activeTab === "video"
                      ? "bg-[#c9a84c] text-[#0d1f3c]"
                      : "text-white/80 hover:text-white"
                      }`}
                  >
                    Atelier Video
                  </button> */}
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="grid grid-cols-5 gap-3">
                {product.images.map((img, idx) => {
                  const isSelected = selectedImage === idx && activeTab === "photo";
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedImage(idx);
                        setActiveTab("photo");
                      }}
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
                      <span className="absolute bottom-1 left-1 right-1 text-[8px] font-bold text-center text-white bg-black/60 rounded py-0.5 truncate px-1">
                        {img.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Atelier Concierge Live Appointment Banner (Matches Reference) */}
              <div className="mt-4 bg-[#f6f9fe] border border-[#d9e5f5] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#0d1f3c] text-[#c9a84c] flex items-center justify-center shrink-0 shadow-sm">
                    <IoVideocamOutline className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0d1f3c]">
                      Virtual Diamond Concierge Consultation
                    </h4>
                    <p className="text-[11px] text-[#526382] mt-0.5">
                      Connect live with an in-house IGI gemologist to view this ring
                      in real-time video before ordering.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => alert("Diamond Concierge calendar opening...")}
                  className="whitespace-nowrap btn-navy text-white text-[11px] font-bold tracking-wider uppercase px-4 py-2.5 rounded-xl shadow-xs hover:bg-[#c9a84c] hover:text-[#0d1f3c] transition-colors shrink-0"
                >
                  Schedule Video Call
                </button>
              </div>
            </div>

            {/* ─── RIGHT COLUMN: Customizer & Details ─── */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Collection Eyebrow & SKU */}
              <div className="flex items-center justify-between text-xs text-[#8a9ab8] pb-1">
                <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#c9a84c] uppercase">
                  {product.collection}
                </span>
                <span className="text-[11px] tracking-wider font-mono">
                  {product.sku}
                </span>
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d1f3c] mt-1 mb-2 leading-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 pb-4 border-b border-[#eef2f8]">
                <div className="flex items-center gap-1 text-[#c9a84c] text-xs">
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#0d1f3c]">
                  {product.rating}
                </span>
                <span className="text-xs text-[#6e7d9b]">
                  ({product.reviewsCount} verified reviews)
                </span>
                <span className="text-xs text-[#c9a84c] font-semibold ml-auto flex items-center gap-1">
                  <IoCheckmarkCircle className="w-3.5 h-3.5 text-emerald-600" />
                  In Stock · Ready to Dispatch
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

                {/* 0% EMI Notice */}
                <div className="mt-2 text-xs text-[#0d1f3c] bg-[#fbf8ed] border border-[#ecd9ab] p-2.5 rounded-xl flex items-center justify-between">
                  <span>
                    Or pay <strong className="text-[#0d1f3c]">₹{emiAmount.toLocaleString("en-IN")}/mo</strong> with 0% EMI
                  </span>
                  <span className="text-[#c9a84c] font-bold cursor-pointer hover:underline text-[11px]">
                    View Plans →
                  </span>
                </div>
              </div>

              {/* ─── CUSTOMIZER 1: Metal & Gold Karat ─── */}
              <div className="py-4 border-b border-[#eef2f8]">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-bold uppercase tracking-wider text-[#0d1f3c]">
                    Metal & Purity:
                  </span>
                  <span className="font-semibold text-[#c9a84c]">
                    {selectedMetal.name}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {product.metals.map((metal) => {
                    const isSelected = selectedMetal.id === metal.id;
                    return (
                      <button
                        key={metal.id}
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
                          {metal.name.replace("18K ", "")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ─── CUSTOMIZER 2: Solitaire Carat Selection ─── */}
              <div className="py-4 border-b border-[#eef2f8]">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-bold uppercase tracking-wider text-[#0d1f3c]">
                    Diamond Carat Weight:
                  </span>
                  <span className="text-[11px] text-[#6e7d9b]">
                    Graded {selectedCarat.clarity}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {product.carats.map((c) => {
                    const isSelected = selectedCarat.weight === c.weight;
                    const calculatedCaratPrice = Math.round(c.price * selectedMetal.priceMultiplier);
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

              {/* ─── CUSTOMIZER 3: Ring Size ─── */}
              <div className="py-4 border-b border-[#eef2f8]">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-bold uppercase tracking-wider text-[#0d1f3c]">
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
                  <span className="font-bold uppercase tracking-wider text-[#0d1f3c]">
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
                <span className="font-bold text-xs uppercase tracking-wider text-[#0d1f3c] block mb-2">
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
                  className="w-full btn-navy text-white text-xs font-extrabold tracking-widest uppercase py-4 rounded-xl shadow-md hover:bg-[#031d42] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <IoBagCheckOutline className="w-4 h-4 text-[#c9a84c]" />
                  Add To Cart
                </button>

                <button
                  type="button"
                  onClick={() => alert("Proceeding to Express Checkout...")}
                  className="w-full btn-gold text-[#0d1f3c] text-xs font-extrabold tracking-widest uppercase py-4 rounded-xl shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
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
              <div className="mt-8 grid grid-cols-2 gap-3 text-left">
                <div className="p-3 bg-[#f8fafd] rounded-xl border border-[#e8edf7]">
                  <span className="text-[#c9a84c] text-base font-bold block mb-1">✦</span>
                  <h5 className="text-[11px] font-bold text-[#0d1f3c] uppercase">
                    IGI Certified Diamond
                  </h5>
                  <p className="text-[10px] text-[#6e7d9b]">
                    Laser girdle inscription matching certificate
                  </p>
                </div>
                <div className="p-3 bg-[#f8fafd] rounded-xl border border-[#e8edf7]">
                  <span className="text-[#c9a84c] text-base font-bold block mb-1">◈</span>
                  <h5 className="text-[11px] font-bold text-[#0d1f3c] uppercase">
                    Lifetime Exchange
                  </h5>
                  <p className="text-[10px] text-[#6e7d9b]">
                    100% diamond value upgrade credit
                  </p>
                </div>
                <div className="p-3 bg-[#f8fafd] rounded-xl border border-[#e8edf7]">
                  <span className="text-[#c9a84c] text-base font-bold block mb-1">✧</span>
                  <h5 className="text-[11px] font-bold text-[#0d1f3c] uppercase">
                    30-Day Free Resizing
                  </h5>
                  <p className="text-[10px] text-[#6e7d9b]">
                    Hassle-free size adjustment guarantee
                  </p>
                </div>
                <div className="p-3 bg-[#f8fafd] rounded-xl border border-[#e8edf7]">
                  <span className="text-[#c9a84c] text-base font-bold block mb-1">◇</span>
                  <h5 className="text-[11px] font-bold text-[#0d1f3c] uppercase">
                    BIS Hallmarked Purity
                  </h5>
                  <p className="text-[10px] text-[#6e7d9b]">
                    Guaranteed 750/950 fineness stamped
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ANATOMY OF EXCEPTIONAL CRAFT SECTION (Matches Reference Image) ─── */}
        <section className="bg-[#f7f9fd] py-16 border-t border-[#e8edf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-extrabold tracking-[0.35em] text-[#c9a84c] uppercase">
                Specifications & Transparency
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0d1f3c] mt-2 mb-3">
                ANATOMY OF EXCEPTIONAL CRAFT
              </h2>
              <p className="text-xs sm:text-sm text-[#526382] leading-relaxed">
                Every CaratLuxe piece is forged with uncompromising standards and
                absolute material transparency.
              </p>
            </div>

            {/* 3 Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Diamond Quality */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e2e8f4] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#f0f3fa] mb-4">
                    <h3 className="font-serif text-lg font-bold text-[#0d1f3c]">
                      Diamond Quality
                    </h3>
                    <span className="text-[#c9a84c] font-bold">✦</span>
                  </div>

                  <dl className="divide-y divide-[#f7f9fc] text-xs">
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6e7d9b]">Solitaire Carat</dt>
                      <dd className="font-bold text-[#0d1f3c]">{selectedCarat.weight}</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6e7d9b]">Color & Clarity</dt>
                      <dd className="font-bold text-[#0d1f3c]">{selectedCarat.clarity}</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6e7d9b]">Cut Standard</dt>
                      <dd className="font-bold text-[#0d1f3c]">Hearts & Arrows (Ideal)</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6e7d9b]">Polish & Symmetry</dt>
                      <dd className="font-bold text-[#0d1f3c]">Excellent / Excellent</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6e7d9b]">Certification</dt>
                      <dd className="font-bold text-[#c9a84c]">IGI / GIA Dossier Inscribed</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6e7d9b]">Side Pavé Diamonds</dt>
                      <dd className="font-bold text-[#0d1f3c]">0.38 CT Round Brilliant</dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-5 pt-3 border-t border-[#f0f3fa] text-[11px] text-[#6e7d9b] flex items-center gap-1.5">
                  <IoShieldCheckmarkOutline className="w-4 h-4 text-emerald-600" />
                  Laser girdle number matches certificate
                </div>
              </div>

              {/* Card 2: Precious Setting & Metal */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e2e8f4] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#f0f3fa] mb-4">
                    <h3 className="font-serif text-lg font-bold text-[#0d1f3c]">
                      Precious Setting
                    </h3>
                    <span className="text-[#c9a84c] font-bold">◈</span>
                  </div>

                  <dl className="divide-y divide-[#f7f9fc] text-xs">
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6e7d9b]">Metal Type</dt>
                      <dd className="font-bold text-[#0d1f3c]">{selectedMetal.name}</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6e7d9b]">Approx. Gold Weight</dt>
                      <dd className="font-bold text-[#0d1f3c]">4.25 Grams Solid</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6e7d9b]">Setting Silhouette</dt>
                      <dd className="font-bold text-[#0d1f3c]">Four-Prong Hidden Crown</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6e7d9b]">Band Thickness</dt>
                      <dd className="font-bold text-[#0d1f3c]">2.1 mm Comfort Fit</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6e7d9b]">Purity Mark</dt>
                      <dd className="font-bold text-[#0d1f3c]">BIS 750 / 950 Hallmark</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6e7d9b]">Manufacture Origin</dt>
                      <dd className="font-bold text-[#0d1f3c]">CaratLuxe Atelier, Mumbai</dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-5 pt-3 border-t border-[#f0f3fa] text-[11px] text-[#6e7d9b] flex items-center gap-1.5">
                  <IoCheckmarkCircle className="w-4 h-4 text-emerald-600" />
                  Lead & nickel free hypoallergenic alloy
                </div>
              </div>

              {/* Card 3: Transparent Price Breakdown (Matches Reference) */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e2e8f4] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#f0f3fa] mb-4">
                    <h3 className="font-serif text-lg font-bold text-[#0d1f3c]">
                      Price Transparency
                    </h3>
                    <span className="text-[#c9a84c] font-bold">◇</span>
                  </div>

                  {/* Visual Bar Breakdown */}
                  <div className="w-full h-3 rounded-full overflow-hidden flex mb-4">
                    <div className="bg-[#0d1f3c] w-[62%]" title="Diamond 62%" />
                    <div className="bg-[#c9a84c] w-[20%]" title="Gold 20%" />
                    <div className="bg-[#2a4080] w-[11%]" title="Craft 11%" />
                    <div className="bg-[#cbd5e1] w-[7%]" title="Taxes 7%" />
                  </div>

                  <dl className="divide-y divide-[#f7f9fc] text-xs">
                    <div className="py-2 flex justify-between">
                      <dt className="flex items-center gap-2 text-[#6e7d9b]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0d1f3c]" />
                        Diamond Value
                      </dt>
                      <dd className="font-bold text-[#0d1f3c]">
                        ₹{Math.round(dynamicPrice * 0.62).toLocaleString("en-IN")}
                      </dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="flex items-center gap-2 text-[#6e7d9b]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#c9a84c]" />
                        18K Gold Value (4.25g)
                      </dt>
                      <dd className="font-bold text-[#0d1f3c]">
                        ₹{Math.round(dynamicPrice * 0.2).toLocaleString("en-IN")}
                      </dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="flex items-center gap-2 text-[#6e7d9b]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2a4080]" />
                        Atelier Craftsmanship
                      </dt>
                      <dd className="font-bold text-[#0d1f3c]">
                        ₹{Math.round(dynamicPrice * 0.11).toLocaleString("en-IN")}
                      </dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="flex items-center gap-2 text-[#6e7d9b]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]" />
                        GST & Certification
                      </dt>
                      <dd className="font-bold text-[#0d1f3c]">
                        ₹{Math.round(dynamicPrice * 0.07).toLocaleString("en-IN")}
                      </dd>
                    </div>
                    <div className="py-2.5 flex justify-between bg-[#fbf8ed] -mx-2 px-2 rounded-lg font-bold">
                      <dt className="text-[#0d1f3c]">Final CaratLuxe Price</dt>
                      <dd className="text-[#0d1f3c]">
                        ₹{dynamicPrice.toLocaleString("en-IN")}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-4 pt-2 text-[10px] text-[#526382] leading-tight">
                  Mined diamond equivalent: ~₹5,80,000 (You save 72% with zero conflict)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COMPLETE THE SIGNATURE LOOK SECTION (Matches Reference Image) ─── */}
        <section className="bg-white py-16 border-t border-[#e8edf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-[10px] font-extrabold tracking-[0.35em] text-[#c9a84c] uppercase">
                  Curated Atelier Suite
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1f3c] mt-1">
                  COMPLETE THE SIGNATURE LOOK
                </h2>
              </div>
              <p className="text-xs text-[#6e7d9b] max-w-sm">
                Pair your solitaire with our master-matched eternity band and diamond
                studs for a celestial bridal ensemble.
              </p>
            </div>

            {/* Look Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Item 1: Matching Band */}
              <div className="bg-[#fcfdfd] rounded-2xl border border-[#e2e8f4] overflow-hidden p-4 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-white mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&auto=format&fit=crop&q=80"
                      alt="Matching Eternity Band"
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 text-[9px] font-bold bg-[#0d1f3c] text-white px-2 py-0.5 rounded-full">
                      MATCHING BAND
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#0d1f3c]">
                    Pavé Eternity Wedding Band
                  </h4>
                  <p className="text-[11px] text-[#6e7d9b]">0.85 CT · 18K Yellow Gold</p>
                </div>
                <div className="mt-3 pt-3 border-t border-[#eef2f8] flex items-center justify-between">
                  <span className="font-bold text-sm text-[#0d1f3c]">₹46,400</span>
                  <label className="flex items-center gap-1.5 text-xs text-[#0d1f3c] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bundleBand}
                      onChange={() => setBundleBand(!bundleBand)}
                      className="accent-[#0d1f3c]"
                    />
                    <span>Add</span>
                  </label>
                </div>
              </div>

              {/* Item 2: Matching Studs */}
              <div className="bg-[#fcfdfd] rounded-2xl border border-[#e2e8f4] overflow-hidden p-4 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-white mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&auto=format&fit=crop&q=80"
                      alt="Solitaire Diamond Studs"
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 text-[9px] font-bold bg-[#c9a84c] text-[#0d1f3c] px-2 py-0.5 rounded-full">
                      PERFECT PAIR
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#0d1f3c]">
                    Solitaire Stud Earrings
                  </h4>
                  <p className="text-[11px] text-[#6e7d9b]">1.00 CT TW · 18K Yellow Gold</p>
                </div>
                <div className="mt-3 pt-3 border-t border-[#eef2f8] flex items-center justify-between">
                  <span className="font-bold text-sm text-[#0d1f3c]">₹54,600</span>
                  <label className="flex items-center gap-1.5 text-xs text-[#0d1f3c] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bundleStuds}
                      onChange={() => setBundleStuds(!bundleStuds)}
                      className="accent-[#0d1f3c]"
                    />
                    <span>Add</span>
                  </label>
                </div>
              </div>

              {/* Item 3: Tennis Bracelet */}
              <div className="bg-[#fcfdfd] rounded-2xl border border-[#e2e8f4] overflow-hidden p-4 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-white mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80"
                      alt="Tennis Bracelet"
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 text-[9px] font-bold bg-[#0d1f3c] text-white px-2 py-0.5 rounded-full">
                      HIGH LUXE
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#0d1f3c]">
                    Royal Diamond Tennis Strand
                  </h4>
                  <p className="text-[11px] text-[#6e7d9b]">3.50 CT · 18K Yellow Gold</p>
                </div>
                <div className="mt-3 pt-3 border-t border-[#eef2f8] flex items-center justify-between">
                  <span className="font-bold text-sm text-[#0d1f3c]">₹1,09,335</span>
                  <Link
                    href="/bracelets"
                    className="text-xs font-bold text-[#c9a84c] hover:underline"
                  >
                    View →
                  </Link>
                </div>
              </div>

              {/* Bundle Checkout Card */}
              <div className="bg-[#0d1f3c] text-white rounded-2xl p-6 flex flex-col justify-between shadow-md">
                <div>
                  <span className="text-[#c9a84c] text-[10px] font-extrabold tracking-widest uppercase block mb-1">
                    Special Suite Offer
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white mb-2">
                    Complete Atelier Bridal Suite
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    Bundle your ring with the matching band and studs for an
                    additional 10% complimentary suite privilege.
                  </p>

                  <div className="bg-white/10 p-3 rounded-xl mb-4">
                    <span className="text-[11px] text-white/60 block">Bundle Total:</span>
                    <span className="text-xl font-bold text-white">
                      ₹
                      {(
                        dynamicPrice +
                        (bundleBand ? 46400 : 0) +
                        (bundleStuds ? 54600 : 0)
                      ).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => alert("Bridal Suite added to your bag with 10% privilege discount!")}
                  className="w-full btn-gold text-[#0d1f3c] text-xs font-bold tracking-wider uppercase py-3.5 rounded-xl shadow-md cursor-pointer hover:scale-102 transition-all"
                >
                  Buy Complete Suite
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── REAL STORIES, CERTIFIED SPARKLE (REVIEWS SECTION) ─── */}
        <section className="bg-[#f7f9fd] py-16 border-t border-[#e8edf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-[10px] font-extrabold tracking-[0.35em] text-[#c9a84c] uppercase">
                  Verified Atelier Reviews
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1f3c] mt-1 mb-2">
                  REAL STORIES, CERTIFIED SPARKLE
                </h2>
                <div className="flex items-center gap-2">
                  <div className="flex text-[#c9a84c] text-sm">
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#0d1f3c]">4.95 / 5</span>
                  <span className="text-xs text-[#6e7d9b]">
                    (Based on 42 verified ring reviews)
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => alert("Review modal opened")}
                className="btn-navy text-white text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-xl hover:bg-[#c9a84c] hover:text-[#0d1f3c] transition-colors shrink-0"
              >
                Write A Review
              </button>
            </div>

            {/* Review Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#e2e8f4] shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#c9a84c] text-xs">
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    ✓ Verified Buyer
                  </span>
                </div>
                <h5 className="font-bold text-xs text-[#0d1f3c] mb-1">
                  "Exceeded every expectation — pure perfection"
                </h5>
                <p className="text-xs text-[#526382] leading-relaxed mb-4 italic">
                  "I was nervous ordering high jewelry online, but the video call with
                  their gemologist sealed the deal. When the unboxing arrived, the
                  fire in the 1.5 CT stone took her breath away."
                </p>
                <div className="text-[11px] font-bold text-[#0d1f3c]">
                  Meera & Siddharth K.
                  <span className="block font-normal text-[#8a9ab8] text-[10px]">
                    1.50 CT · 18K Yellow Gold · Mumbai
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#e2e8f4] shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#c9a84c] text-xs">
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    ✓ Verified Buyer
                  </span>
                </div>
                <h5 className="font-bold text-xs text-[#0d1f3c] mb-1">
                  "Flawless IGI inscription & heavy gold weight"
                </h5>
                <p className="text-xs text-[#526382] leading-relaxed mb-4 italic">
                  "I took the ring to an independent gemologist in Bengaluru to verify
                  the laser inscription. Matches the dossier 100%. The weight in 18K
                  gold feels luxurious on the finger."
                </p>
                <div className="text-[11px] font-bold text-[#0d1f3c]">
                  Arjun Nambiar
                  <span className="block font-normal text-[#8a9ab8] text-[10px]">
                    2.00 CT · 950 Platinum · Bengaluru
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#e2e8f4] shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#c9a84c] text-xs">
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    ✓ Verified Buyer
                  </span>
                </div>
                <h5 className="font-bold text-xs text-[#0d1f3c] mb-1">
                  "The free resizing service was so effortless"
                </h5>
                <p className="text-xs text-[#526382] leading-relaxed mb-4 italic">
                  "I ordered size 14 but needed size 12. Their door-to-door courier
                  picked it up insured, resized it within 4 days, and returned it in
                  brand new polish with zero fee. Five-star service!"
                </p>
                <div className="text-[11px] font-bold text-[#0d1f3c]">
                  Tanvi Singhal
                  <span className="block font-normal text-[#8a9ab8] text-[10px]">
                    1.00 CT · 18K Rose Gold · New Delhi
                  </span>
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
