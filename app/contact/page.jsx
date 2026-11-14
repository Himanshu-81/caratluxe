"use client";
import { useState } from "react";
import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoVideocamOutline,
  IoCheckmarkCircle,
  IoLogoWhatsapp,
} from "react-icons/io5";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "solitaire-consultation",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
            <span className="text-[#0d1f3c] font-semibold">Contact & Concierge</span>
          </div>
        </div>

        {/* ─── Header ─── */}
        <section className="bg-gradient-to-b from-[#f5f8ff] via-[#ffffff] to-[#ffffff] py-14 border-b border-[#e8edf7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-6 bg-[#c9a84c]" />
              <span className="text-[10px] font-extrabold tracking-[0.35em] text-[#c9a84c] uppercase">
                Atelier Concierge
              </span>
              <div className="h-px w-6 bg-[#c9a84c]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0d1f3c] leading-tight tracking-tight">
              We Are Here to <span className="gold-shimmer">Assist You</span>
            </h1>
            <p className="mt-4 text-[#526382] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Whether you wish to schedule an in-person viewing, book a virtual
              gemologist consultation, or custom-design your bespoke piece, our
              atelier is at your service.
            </p>
          </div>
        </section>

        {/* ─── Main Content ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Salons */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0d1f3c] mb-2">
                  Direct Concierge Channels
                </h3>
                <p className="text-xs text-[#526382] leading-relaxed mb-6">
                  Available Monday through Saturday, 10:00 AM – 8:00 PM IST.
                </p>

                <div className="space-y-4 text-xs">
                  <a
                    href="tel:+918001234567"
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#e2e8f4] hover:border-[#c9a84c] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0d1f3c] text-[#c9a84c] flex items-center justify-center shrink-0">
                      <IoCallOutline className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#8a9ab8] font-bold uppercase tracking-wider">
                        Toll-Free Atelier Line
                      </p>
                      <p className="font-bold text-[#0d1f3c] group-hover:text-[#c9a84c] text-sm">
                        +91 1800 266 8899
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919820000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#e2e8f4] hover:border-[#25D366] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <IoLogoWhatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#8a9ab8] font-bold uppercase tracking-wider">
                        Instant WhatsApp Specialist
                      </p>
                      <p className="font-bold text-[#0d1f3c] group-hover:text-[#25D366] text-sm">
                        +91 98200 44888
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:concierge@caratluxe.com"
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#e2e8f4] hover:border-[#c9a84c] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0d1f3c] text-[#c9a84c] flex items-center justify-center shrink-0">
                      <IoMailOutline className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#8a9ab8] font-bold uppercase tracking-wider">
                        Client Inquiries
                      </p>
                      <p className="font-bold text-[#0d1f3c] group-hover:text-[#c9a84c] text-sm">
                        concierge@caratluxe.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Private Salons */}
              <div className="pt-4 border-t border-[#e8edf7]">
                <h4 className="font-serif text-lg font-bold text-[#0d1f3c] mb-4">
                  Private Atelier Lounges
                </h4>
                <div className="space-y-4 text-xs">
                  <div className="p-4 bg-[#f8fafd] rounded-2xl border border-[#e2e8f4]">
                    <p className="font-bold text-[#0d1f3c] text-sm mb-1">
                      Mumbai Flagship Atelier
                    </p>
                    <p className="text-[#526382] leading-relaxed">
                      Suite 402, Signature Towers, Bandra Kurla Complex (BKC),
                      Mumbai, Maharashtra 400051
                    </p>
                    <p className="text-[11px] text-[#c9a84c] font-semibold mt-2">
                      ✦ By Appointment Only · Complimentary Valet
                    </p>
                  </div>

                  <div className="p-4 bg-[#f8fafd] rounded-2xl border border-[#e2e8f4]">
                    <p className="font-bold text-[#0d1f3c] text-sm mb-1">
                      New Delhi Viewing Salon
                    </p>
                    <p className="text-[#526382] leading-relaxed">
                      Level 2, DLF Emporio Pavilion, Vasant Kunj,
                      New Delhi 110070
                    </p>
                    <p className="text-[11px] text-[#c9a84c] font-semibold mt-2">
                      ✦ By Appointment Only · Private Gem Room
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking & Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#e2e8f4] shadow-sm">
              <span className="text-[10px] font-extrabold tracking-[0.3em] text-[#c9a84c] uppercase">
                Bespoke & Consultation
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1f3c] mt-1 mb-2">
                Request an Atelier Appointment
              </h3>
              <p className="text-xs text-[#526382] leading-relaxed mb-6">
                Fill out the form below and an assigned diamond specialist will
                confirm your private appointment or video consultation within 2 hours.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <IoCheckmarkCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-emerald-900">
                    Appointment Request Received
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our senior gemologist will contact you at{" "}
                    {formData.phone || formData.email} shortly to confirm your consultation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-navy text-white text-xs font-bold py-2.5 px-6 rounded-xl mt-2"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#0d1f3c] font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Radhika Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#e2e8f4] focus:outline-none focus:border-[#c9a84c]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#0d1f3c] font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#e2e8f4] focus:outline-none focus:border-[#c9a84c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#0d1f3c] font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#e2e8f4] focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0d1f3c] font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                      Consultation Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#e2e8f4] focus:outline-none focus:border-[#c9a84c] bg-white font-medium cursor-pointer"
                    >
                      <option value="solitaire-consultation">Solitaire Engagement Ring Consultation</option>
                      <option value="video-concierge">Virtual Gemologist Live Video Call</option>
                      <option value="in-person-mumbai">In-Person Viewing (Mumbai Flagship)</option>
                      <option value="in-person-delhi">In-Person Viewing (New Delhi Salon)</option>
                      <option value="bespoke-custom">Custom Bespoke Design Commission</option>
                      <option value="after-sales">Resizing & After-Sales Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#0d1f3c] font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                      Preferred Date & Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention your preferred diamond shape, carat budget, or specific ring design..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#e2e8f4] focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gold text-[#0d1f3c] text-xs font-extrabold tracking-widest uppercase py-4 rounded-xl shadow-md hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    Confirm Appointment Request
                  </button>
                  <p className="text-[10px] text-center text-[#8a9ab8]">
                    Your information is held in strict privacy under the CaratLuxe client confidentiality charter.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

