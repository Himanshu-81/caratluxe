"use client";
import { useState } from "react";
import Link from "next/link";
import SectionHeader from "../components/ui/SectionHeader";
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
  IoNavigateOutline,
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
            <span className="text-[#0d1f3c] font-semibold">Contact Us</span>
          </div>
        </div>

        {/* ─── Header ─── */}
        <section className="bg-gradient-to-b from-[#f5f8ff] via-[#ffffff] to-[#ffffff] py-8 border-b border-[#e8edf7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Visit Us"
              title="We Are Here to"
              titleHighlight="Help You"
              subtitle="Whether you'd like to visit our store, have a quick video call with our diamond expert, or design your own custom ring, we are here to help."
            />
          </div>
        </section>

        {/* ─── Main Content ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Salons */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0d1f3c] mb-2">
                  Get in Touch Directly
                </h3>
                <p className="text-xs text-[#526382] leading-relaxed mb-6">
                  Available Monday through Saturday, 10:00 AM – 8:00 PM IST.
                </p>

                <div className="space-y-4 text-xs">
                  <a
                    href="tel:+919899766468"
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#e2e8f4] hover:border-[#c9a84c] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0d1f3c] text-[#c9a84c] flex items-center justify-center shrink-0">
                      <IoCallOutline className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8a9ab8] font-medium">
                        Call Us Directly
                      </p>
                      <p className="font-bold text-[#0d1f3c] group-hover:text-[#c9a84c] text-sm">
                        +91 98997 66468
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919899766468"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#e2e8f4] hover:border-[#25D366] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <IoLogoWhatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8a9ab8] font-medium">
                        Chat on WhatsApp
                      </p>
                      <p className="font-bold text-[#0d1f3c] group-hover:text-[#25D366] text-sm">
                        +91 98997 66468
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:unitedcorporates@yahoo.com"
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#e2e8f4] hover:border-[#c9a84c] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0d1f3c] text-[#c9a84c] flex items-center justify-center shrink-0">
                      <IoMailOutline className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8a9ab8] font-medium">
                        Send an Email
                      </p>
                      <p className="font-bold text-[#0d1f3c] group-hover:text-[#c9a84c] text-sm">
                        unitedcorporates@yahoo.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Private Salons */}
              <div className="pt-4 border-t border-[#e8edf7]">
                <h4 className="font-serif text-lg font-bold text-[#0d1f3c] mb-4">
                  Visit Our Store
                </h4>
                <div className="space-y-4 text-xs">
                  <div className="p-5 bg-[#f8fafd] rounded-2xl border border-[#e2e8f4] space-y-3">
                    <div className="flex items-start gap-3 text-xs">
                      <IoLocationOutline className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-[#0d1f3c] text-sm mb-1">
                          CaratLuxe Store - Rajouri Garden
                        </p>
                        <p className="text-[#526382] leading-relaxed">
                          G-23/1, Rajouri Garden, New Delhi - 110027
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs pt-2 border-t border-[#e2e8f4]">
                      <IoCallOutline className="w-4 h-4 text-[#c9a84c] shrink-0" />
                      <a href="tel:+919899766468" className="text-[#0d1f3c] font-semibold hover:text-[#c9a84c]">
                        +91 98997 66468
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <IoMailOutline className="w-4 h-4 text-[#c9a84c] shrink-0" />
                      <a href="mailto:unitedcorporates@yahoo.com" className="text-[#0d1f3c] font-semibold hover:text-[#c9a84c]">
                        unitedcorporates@yahoo.com
                      </a>
                    </div>
                    <div className="pt-2 border-t border-[#e2e8f4]">
                      <a
                        href="#visit-us"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c9a84c] hover:text-[#0d1f3c] transition-colors"
                      >
                        <IoNavigateOutline className="w-4 h-4" />
                        <span>View Location on Map & Directions &darr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking & Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#e2e8f4] shadow-sm">
              <span className="text-xs font-semibold text-[#c9a84c]">
                Visit & Consultation
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1f3c] mt-1 mb-2">
                Book a Visit or Talk to Us
              </h3>
              <p className="text-xs text-[#526382] leading-relaxed mb-6">
                Fill out the form below and our team will get in touch within 2 hours to confirm your visit.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <IoCheckmarkCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-emerald-900">
                    Appointment Request Received
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our team will contact you at{" "}
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
                      <label className="block text-[#0d1f3c] font-semibold mb-1.5 text-xs">
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
                      <label className="block text-[#0d1f3c] font-semibold mb-1.5 text-xs">
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
                    <label className="block text-[#0d1f3c] font-semibold mb-1.5 text-xs">
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
                    <label className="block text-[#0d1f3c] font-semibold mb-1.5 text-xs">
                      Consultation Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#e2e8f4] focus:outline-none focus:border-[#c9a84c] bg-white font-medium cursor-pointer"
                    >
                      <option value="solitaire-consultation">Solitaire Engagement Ring Consultation</option>
                      <option value="video-concierge">Virtual Gemologist Live Video Call</option>
                      <option value="in-person-delhi">In-Person Viewing (Rajouri Garden, New Delhi)</option>
                      <option value="bespoke-custom">Custom Bespoke Design Commission</option>
                      <option value="after-sales">Resizing & After-Sales Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#0d1f3c] font-semibold mb-1.5 text-xs">
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
                    className="w-full btn-gold text-[#0d1f3c] text-sm font-bold py-3.5 rounded-xl shadow-md hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    Book Appointment
                  </button>
                  <p className="text-[10px] text-center text-[#8a9ab8]">
                    We respect your privacy. Your information is 100% confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ─── Map ─── */}
        <section id="visit-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="w-full h-[380px] sm:h-[450px] lg:h-[480px] rounded-3xl overflow-hidden border border-[#e2e8f4] shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.487377230367!2d77.12045979999999!3d28.645122100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03001e8bfc05%3A0xdfe36f6baffe7500!2sCaratluxe%20Lab%20Grown%20Diamond%20Jewellery!5e0!3m2!1sen!2sin!4v1795113134627!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="CaratLuxe Lab Grown Diamond Jewellery Location"
              className="w-full h-full"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

