"use client";
import { useState } from "react";
import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  IoDiamondOutline,
  IoVideocamOutline,
  IoCalendarClearOutline,
  IoTimeOutline,
  IoCheckmarkCircle,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "11:00 AM - 12:00 PM",
    category: "Solitaire Rings & Engagement",
    budget: "₹50,000 - ₹1,50,000",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="bg-[#f8faff] min-h-screen py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 bg-[#fdf6e3] text-[#936f1c] text-xs font-bold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full border border-[#f5e6b8] mb-3">
              <IoVideocamOutline className="w-4 h-4" />
              Private 1-on-1 Concierge
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0d1f3c] mb-4">
              Book a Master Gemologist Call
            </h1>
            <p className="text-sm sm:text-base text-[#5a6e8c] leading-relaxed">
              Inspect loose lab diamonds in real-time under 20x magnification, compare 4Cs specifications, and customize your forever piece from the comfort of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Perks Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#031d42] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#c9a84c]/20 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  What to Expect
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Every 30-minute consultation is complimentary, private, and conducted by certified IGI & GIA diamond specialists.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#c9a84c]/20 text-[#e8c97a] flex items-center justify-center shrink-0">
                      <IoDiamondOutline className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Live 20x High-Res Inspection</h4>
                      <p className="text-xs text-white/60 mt-0.5">View fire, brilliance, pavilion cut symmetry, and laser inscription.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#c9a84c]/20 text-[#e8c97a] flex items-center justify-center shrink-0">
                      <IoShieldCheckmarkOutline className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Transparent Price Breakdown</h4>
                      <p className="text-xs text-white/60 mt-0.5">Clear metal weight, diamond rate, and zero surprise charges.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#c9a84c]/20 text-[#e8c97a] flex items-center justify-center shrink-0">
                      <IoCheckmarkCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">No Pressure, Zero Obligation</h4>
                      <p className="text-xs text-white/60 mt-0.5">We send you a personalized dossier with certificates & 3D renders afterwards.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Help */}
              <div className="bg-white p-6 rounded-2xl border border-[#e2e8f4] text-center shadow-xs">
                <p className="text-xs font-bold text-[#8a9ab8] uppercase tracking-wider mb-1">Need Urgent Advice?</p>
                <p className="text-sm font-bold text-[#0d1f3c]">Direct WhatsApp Concierge</p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block bg-[#25d366] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#20ba59] transition-colors"
                >
                  Chat with Gemologist Now
                </a>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#e2e8f4] shadow-md">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#e6f7ec] text-[#2e8540] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    <IoCheckmarkCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0d1f3c] mb-2">
                    Consultation Requested!
                  </h3>
                  <p className="text-sm text-[#5a6e8c] max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-[#0d1f3c]">{formData.name}</span>. A senior CaratLuxe gemologist will confirm your video appointment link via WhatsApp and email.
                  </p>
                  <div className="bg-[#f4f7ff] p-4 rounded-xl text-xs text-[#0d1f3c] font-medium max-w-sm mx-auto mb-6 text-left space-y-1">
                    <p><span className="text-[#8a9ab8]">Date:</span> {formData.date || "Next Available Slot"}</p>
                    <p><span className="text-[#8a9ab8]">Time Slot:</span> {formData.time}</p>
                    <p><span className="text-[#8a9ab8]">Interest:</span> {formData.category}</p>
                  </div>
                  <Link
                    href="/products"
                    className="btn-gold text-[#0d1f3c] font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full inline-block"
                  >
                    Continue Browsing Catalog
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0d1f3c] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Radhika Sharma"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#e2e8f4] focus:border-[#c9a84c] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0d1f3c] uppercase tracking-wider mb-2">
                        Mobile / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#e2e8f4] focus:border-[#c9a84c] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0d1f3c] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="radhika@example.com"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#e2e8f4] focus:border-[#c9a84c] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0d1f3c] uppercase tracking-wider mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#e2e8f4] focus:border-[#c9a84c] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0d1f3c] uppercase tracking-wider mb-2">
                        Preferred Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#e2e8f4] focus:border-[#c9a84c] focus:outline-none bg-white"
                      >
                        <option>11:00 AM - 12:00 PM</option>
                        <option>02:00 PM - 03:00 PM</option>
                        <option>04:30 PM - 05:30 PM</option>
                        <option>07:00 PM - 08:00 PM (Evening)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0d1f3c] uppercase tracking-wider mb-2">
                        Jewellery of Interest
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#e2e8f4] focus:border-[#c9a84c] focus:outline-none bg-white"
                      >
                        <option>Solitaire Rings & Engagement</option>
                        <option>Diamond Earrings & Studs</option>
                        <option>Diamond Tennis Necklaces</option>
                        <option>Bracelets & Cuffs</option>
                        <option>Diamond Mangalsutra</option>
                        <option>Custom Bespoke Design</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0d1f3c] uppercase tracking-wider mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#e2e8f4] focus:border-[#c9a84c] focus:outline-none bg-white"
                      >
                        <option>Under ₹50,000</option>
                        <option>₹50,000 - ₹1,00,000</option>
                        <option>₹1,00,000 - ₹2,50,000</option>
                        <option>Above ₹2,50,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0d1f3c] uppercase tracking-wider mb-2">
                      Specific Diamond Preferences / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="E.g. looking for a 2-carat oval D-VVS1 solitaire with hidden halo..."
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#e2e8f4] focus:border-[#c9a84c] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gold text-[#0d1f3c] font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Confirm Consultation Booking
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

