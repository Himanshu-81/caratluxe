"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  IoTrashOutline,
  IoShieldCheckmarkOutline,
  IoSparklesOutline,
  IoCheckmarkCircle,
  IoArrowForward,
} from "react-icons/io5";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: "celestial-solitaire-ring",
      name: "The Celestial Solitaire Diamond Ring",
      variant: "1.20 CT VVS1 E · 18K Yellow Gold · Size 14",
      price: 59360,
      originalPrice: 74200,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: "celestial-drop-earrings",
      name: "Celestial Chandelier Diamond Earrings",
      variant: "1.80 CT Total · 18K Yellow Gold",
      price: 64800,
      originalPrice: 81000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [giftBox, setGiftBox] = useState(true);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const grandTotal = subtotal - discountAmount;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "CARATLUXE10" || couponCode.trim().toUpperCase() === "LUXE10") {
      setCouponApplied(true);
    } else {
      alert("Please enter a valid coupon code (Try: LUXE10)");
    }
  };

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="bg-[#fcfdfd] text-[#0d1535] min-h-screen">
        {/* ─── Breadcrumbs ─── */}
        <div className="border-b border-[#e9eef6] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#6e7d9b] flex items-center gap-2">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0d1f3c] font-semibold">Shopping Tote ({cartItems.length})</span>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0d1f3c] mb-2">
            Your Luxury Shopping Tote
          </h1>
          <p className="text-xs text-[#526382] mb-8">
            Every creation is insured during transit and accompanied by its official IGI / GIA dossier.
          </p>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-3xl border border-[#e2e8f4] p-12 text-center max-w-lg mx-auto space-y-4">
              <span className="text-4xl text-[#c9a84c] block">◇</span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1f3c]">
                Your Tote is Currently Empty
              </h3>
              <p className="text-xs text-[#6e7d9b] leading-relaxed">
                Discover our curated collection of certified lab-grown diamond solitaires,
                rings, earrings, and tennis necklaces.
              </p>
              <Link
                href="/products"
                className="btn-gold text-[#0d1f3c] text-xs font-bold tracking-wider uppercase px-8 py-3.5 rounded-full inline-block shadow-md"
              >
                Explore Jewellery →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Cart Items List */}
              <div className="lg:col-span-8 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-[#e2e8f4] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 shadow-xs"
                  >
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-[#f4f7ff] border border-[#e2e8f4]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#0d1f3c]">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#6e7d9b] mt-1">
                        {item.variant}
                      </p>
                      <p className="text-[11px] text-[#c9a84c] font-semibold mt-1">
                        ✦ IGI Laser Inscribed · BIS Hallmarked
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-red-600 hover:underline inline-flex items-center gap-1 mt-3 cursor-pointer"
                      >
                        <IoTrashOutline className="w-3.5 h-3.5" />
                        Remove
                      </button>
                    </div>

                    <div className="text-center sm:text-right">
                      <p className="font-bold text-base sm:text-lg text-[#0d1f3c]">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>
                      <p className="text-xs text-[#8a9ab8] line-through">
                        ₹{item.originalPrice.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Complimentary Services Box */}
                <div className="p-5 bg-[#f8fafd] rounded-2xl border border-[#e2e8f4] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#c9a84c] text-xl font-bold">✦</span>
                    <div>
                      <h4 className="text-xs font-bold text-[#0d1f3c]">
                        Complimentary Velvet Gift Packaging & Seal
                      </h4>
                      <p className="text-[11px] text-[#6e7d9b]">
                        Includes luxury keepsake case, cleaning cloth & handwritten card
                      </p>
                    </div>
                  </div>
                  <label className="flex items-center gap-1.5 text-xs text-[#0d1f3c] font-bold cursor-pointer">
                    <input
                      type="checkbox"
                      checked={giftBox}
                      onChange={() => setGiftBox(!giftBox)}
                      className="accent-[#0d1f3c]"
                    />
                    <span>Included</span>
                  </label>
                </div>
              </div>

              {/* Right Column: Order Summary */}
              <div className="lg:col-span-4 bg-white rounded-3xl border border-[#e2e8f4] p-6 sm:p-8 shadow-sm space-y-6">
                <h3 className="font-serif text-xl font-bold text-[#0d1f3c] pb-3 border-b border-[#eef2f8]">
                  Order Summary
                </h3>

                {/* Coupon Input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2 text-xs">
                  <input
                    type="text"
                    placeholder="Enter Coupon (e.g. LUXE10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#e2e8f4] focus:outline-none focus:border-[#c9a84c] uppercase font-bold"
                  />
                  <button
                    type="submit"
                    className="btn-navy text-white font-bold px-4 py-2.5 rounded-xl hover:bg-[#c9a84c] hover:text-[#0d1f3c] transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </form>

                {couponApplied && (
                  <p className="text-[11px] text-emerald-700 font-bold bg-emerald-50 p-2 rounded-lg">
                    ✓ LUXE10 Applied: 10% Suite Privilege Discount
                  </p>
                )}

                {/* Pricing Breakdown */}
                <dl className="space-y-3 text-xs text-[#526382] border-b border-[#eef2f8] pb-4">
                  <div className="flex justify-between">
                    <dt>Subtotal ({cartItems.length} items)</dt>
                    <dd className="font-bold text-[#0d1f3c]">₹{subtotal.toLocaleString("en-IN")}</dd>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between text-emerald-700 font-bold">
                      <dt>Privilege Discount (10%)</dt>
                      <dd>-₹{discountAmount.toLocaleString("en-IN")}</dd>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <dt>Insured Doorstep Air Shipping</dt>
                    <dd className="font-bold text-emerald-700">FREE</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Complimentary Gift Packaging</dt>
                    <dd className="font-bold text-emerald-700">FREE</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Applicable GST (3%)</dt>
                    <dd className="font-bold text-[#0d1f3c]">Included</dd>
                  </div>
                </dl>

                {/* Total */}
                <div className="flex justify-between items-baseline">
                  <span className="font-serif text-lg font-bold text-[#0d1f3c]">Total Amount:</span>
                  <span className="text-2xl font-bold text-[#0d1f3c]">
                    ₹{grandTotal.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Checkout CTA */}
                <button
                  type="button"
                  onClick={() => alert("Proceeding to Secure Encrypted Checkout...")}
                  className="w-full btn-gold text-[#0d1f3c] text-xs font-extrabold tracking-widest uppercase py-4 rounded-xl shadow-md hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  Proceed to Secure Checkout
                  <IoArrowForward className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center text-[#8a9ab8]">
                  🔒 256-Bit SSL Encrypted · All Major Credit Cards, NetBanking & 0% EMI Supported
                </p>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

