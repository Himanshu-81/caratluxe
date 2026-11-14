"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  IoSearchOutline,
  IoCheckmarkCircle,
  IoAirplaneOutline,
  IoShieldCheckmarkOutline,
  IoCubeOutline,
  IoSparklesOutline,
} from "react-icons/io5";

export default function OrdersPage() {
  const [orderQuery, setOrderQuery] = useState("");
  const [phoneQuery, setPhoneQuery] = useState("");
  const [trackedOrder, setTrackedOrder] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    setTrackedOrder({
      id: orderQuery || "CL-8924-MUM",
      date: "12 Nov 2026",
      status: "In Quality Verification & Laser Inscription",
      estimatedDelivery: "18 Nov 2026",
      courier: "BlueDart Express Insured Air",
      awb: "BLD-9988221045",
      product: {
        name: "The Celestial Solitaire Diamond Ring",
        variant: "1.20 CT VVS1 E · 18K Yellow Gold · Size 14",
        price: "₹59,360",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&auto=format&fit=crop&q=80",
      },
      timeline: [
        { title: "Order Confirmed & Payment Verified", date: "12 Nov, 10:30 AM", done: true },
        { title: "Solitaire Sourced & IGI Girdle Inscription", date: "13 Nov, 02:15 PM", done: true },
        { title: "Master Goldsmith 18K Solid Gold Casting", date: "14 Nov, 11:00 AM", done: true },
        { title: "BIS Hallmarking & Laser Purity Check", date: "In Progress", done: true, current: true },
        { title: "Insured Tamper-Evident Packaging", date: "Expected 16 Nov", done: false },
        { title: "Doorstep Delivery with Secure OTP Verification", date: "Expected 18 Nov", done: false },
      ],
    });
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
            <span className="text-[#0d1f3c] font-semibold">Track Your Order</span>
          </div>
        </div>

        {/* ─── Header ─── */}
        <section className="bg-gradient-to-b from-[#f5f8ff] via-[#ffffff] to-[#ffffff] py-14 border-b border-[#e8edf7]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-6 bg-[#c9a84c]" />
              <span className="text-[10px] font-extrabold tracking-[0.35em] text-[#c9a84c] uppercase">
                Real-Time Atelier Tracking
              </span>
              <div className="h-px w-6 bg-[#c9a84c]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0d1f3c] leading-tight tracking-tight">
              Track Your <span className="gold-shimmer">Precious Order</span>
            </h1>
            <p className="mt-4 text-[#526382] text-sm leading-relaxed max-w-lg mx-auto">
              Follow every step of your jewellery’s journey, from precision laser
              inscription in our atelier to insured delivery at your doorstep.
            </p>

            {/* Tracking Form */}
            <form onSubmit={handleTrack} className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row gap-2.5">
              <input
                type="text"
                placeholder="Enter Order ID (e.g. CL-8924-MUM)"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-[#e2e8f4] text-xs focus:outline-none focus:border-[#c9a84c] bg-white shadow-xs"
              />
              <button
                type="submit"
                className="btn-navy text-white text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-xl hover:bg-[#c9a84c] hover:text-[#0d1f3c] transition-colors cursor-pointer shrink-0"
              >
                Track Order
              </button>
            </form>
          </div>
        </section>

        {/* ─── Tracked Order Result or Default Showcase ─── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {trackedOrder ? (
            <div className="bg-white rounded-3xl border border-[#e2e8f4] p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
              {/* Order Meta Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#eef2f8]">
                <div>
                  <span className="text-[10px] text-[#c9a84c] font-extrabold tracking-widest uppercase">
                    Order {trackedOrder.id}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1f3c] mt-0.5">
                    {trackedOrder.status}
                  </h3>
                  <p className="text-xs text-[#6e7d9b] mt-1">
                    Placed on {trackedOrder.date} · Expected Delivery by {trackedOrder.estimatedDelivery}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[11px] text-[#8a9ab8] block">Insured Courier:</span>
                  <span className="text-xs font-bold text-[#0d1f3c]">{trackedOrder.courier}</span>
                  <span className="text-[11px] text-[#6e7d9b] block font-mono">AWB: {trackedOrder.awb}</span>
                </div>
              </div>

              {/* Product Summary */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#f7f9fd] border border-[#e2e8f4]">
                <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-white border border-[#e2e8f4]">
                  <Image
                    src={trackedOrder.product.image}
                    alt={trackedOrder.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#0d1f3c]">
                    {trackedOrder.product.name}
                  </h4>
                  <p className="text-xs text-[#6e7d9b] mt-0.5">
                    {trackedOrder.product.variant}
                  </p>
                  <p className="text-xs font-bold text-[#0d1f3c] mt-1">
                    {trackedOrder.product.price}
                  </p>
                </div>
              </div>

              {/* Progress Timeline */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0d1f3c] mb-6">
                  Atelier Craft & Transit Timeline
                </h4>
                <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-3.5 before:w-0.5 before:bg-[#e2e8f4]">
                  {trackedOrder.timeline.map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-4 pl-8">
                      <div
                        className={`absolute left-1.5 top-0.5 w-4.5 h-4.5 rounded-full flex items-center justify-center text-[10px] ${
                          step.current
                            ? "bg-[#c9a84c] text-[#0d1f3c] ring-4 ring-[#c9a84c]/20 font-bold"
                            : step.done
                            ? "bg-[#0d1f3c] text-white"
                            : "bg-[#e2e8f4] text-transparent"
                        }`}
                      >
                        {step.done && "✓"}
                      </div>
                      <div>
                        <p
                          className={`text-xs font-bold ${
                            step.current ? "text-[#c9a84c]" : step.done ? "text-[#0d1f3c]" : "text-[#8a9ab8]"
                          }`}
                        >
                          {step.title}
                        </p>
                        <p className="text-[11px] text-[#6e7d9b] mt-0.5">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#e2e8f4] p-8 sm:p-12 text-center space-y-4 shadow-xs">
              <div className="w-16 h-16 rounded-full bg-[#f4f7ff] text-[#c9a84c] flex items-center justify-center mx-auto text-2xl">
                <IoCubeOutline className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0d1f3c]">
                Track Any Active Or Past Order
              </h3>
              <p className="text-xs text-[#526382] max-w-md mx-auto leading-relaxed">
                Enter your CaratLuxe Order ID sent via SMS and Email upon booking.
                Our live system displays casting progress, hallmark certificates,
                and insured dispatch.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setOrderQuery("CL-8924-MUM");
                    handleTrack({ preventDefault: () => {} });
                  }}
                  className="text-xs font-bold text-[#c9a84c] hover:underline"
                >
                  Click here to view a sample order tracking preview →
                </button>
              </div>
            </div>
          )}
        </section>

        {/* ─── Assistance Strip ─── */}
        <section className="bg-[#f7f9fd] py-12 border-t border-[#e8edf7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h4 className="font-serif text-lg font-bold text-[#0d1f3c] mb-1">
              Need Assistance with Resizing, Returns, or Address Change?
            </h4>
            <p className="text-xs text-[#526382] mb-4">
              Our concierge team can modify ring sizes or shipping details prior to courier pickup.
            </p>
            <div className="flex justify-center gap-4 text-xs font-bold">
              <Link href="/contact" className="text-[#c9a84c] hover:underline">
                Contact Concierge →
              </Link>
              <span className="text-[#cbd5e1]">·</span>
              <a href="tel:+9118002668899" className="text-[#0d1f3c] hover:underline">
                Call 1800-266-8899
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

