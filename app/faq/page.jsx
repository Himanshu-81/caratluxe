"use client";
import { useState } from "react";
import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { IoChevronDown, IoChevronUp, IoSearchOutline, IoSparklesOutline } from "react-icons/io5";

const faqSections = [
  {
    category: "Lab-Grown Diamonds & Science",
    items: [
      {
        q: "What is a lab-grown diamond?",
        a: "A lab-grown diamond is 100% pure carbon crystallized in a specialized plasma chamber using chemical vapor deposition (CVD) or HPHT methods. It possesses the exact same physical, chemical, optical, and crystal lattice structure as an earth-mined diamond.",
      },
      {
        q: "Do lab-grown diamonds test positive on diamond testers?",
        a: "Yes, absolutely. Because lab-grown diamonds are chemically identical to mined diamonds, standard thermal and electrical diamond testers will verify them as real diamonds.",
      },
      {
        q: "Will lab-grown diamonds ever lose their fire, color, or fade?",
        a: "Never. Lab-grown diamonds rank 10 on the Mohs hardness scale—the hardest mineral on Earth. Their fire, dispersion, brilliance, and clarity remain permanent for eternity.",
      },
    ],
  },
  {
    category: "Certification & Authenticity",
    items: [
      {
        q: "What certification accompanies CaratLuxe jewellery?",
        a: "All our solitaires above 0.50 CT are independently graded and certified by leading gemological institutes such as IGI (International Gemological Institute) or GIA. Each certificate includes complete 4Cs verification.",
      },
      {
        q: "Is there a laser inscription on the diamond?",
        a: "Yes. Every certified solitaire diamond features a microscopic laser inscription on its girdle with its unique certificate number, verifiable under a 10x jeweler loupe.",
      },
      {
        q: "Is the gold hallmarked?",
        a: "All CaratLuxe jewellery is crafted in BIS hallmarked 18K/14K solid gold or 950 platinum with official government purity stamps.",
      },
    ],
  },
  {
    category: "Shipping, Resizing & Returns",
    items: [
      {
        q: "How long does delivery take?",
        a: "Ready-to-ship designs are dispatched within 24 to 48 hours and delivered via insured BlueDart Air within 2 to 4 business days. Made-to-order pieces take approximately 7 to 10 business days for master casting.",
      },
      {
        q: "Is shipping safe and insured?",
        a: "Every shipment is 100% insured by CaratLuxe until signed for by you at your doorstep with secure OTP verification.",
      },
      {
        q: "What is the return and resizing policy?",
        a: "We offer a 30-Day Hassle-Free Return Policy and 30 days of complimentary ring resizing. We even arrange door-to-door insured pickup for your peace of mind.",
      },
    ],
  },
  {
    category: "Buyback & Lifetime Upgrade",
    items: [
      {
        q: "Does CaratLuxe offer a buyback guarantee?",
        a: "Yes. We offer a lifetime buyback and 100% diamond exchange credit toward any future purchase at our prevailing catalogue rates.",
      },
      {
        q: "Can I customize an existing design?",
        a: "Yes. Our bespoke atelier team can adapt metal purity, diamond shapes, prong configurations, and custom engravings. Contact our atelier concierge to get started.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState("0-0");
  const [search, setSearch] = useState("");

  const toggle = (id) => {
    setOpenItem(openItem === id ? null : id);
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
            <span className="text-[#0d1f3c] font-semibold">Frequently Asked Questions</span>
          </div>
        </div>

        {/* ─── Hero ─── */}
        <section className="bg-gradient-to-b from-[#f5f8ff] via-[#ffffff] to-[#ffffff] py-14 border-b border-[#e8edf7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-6 bg-[#c9a84c]" />
              <span className="text-[10px] font-extrabold tracking-[0.35em] text-[#c9a84c] uppercase">
                Client Knowledge Hub
              </span>
              <div className="h-px w-6 bg-[#c9a84c]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0d1f3c] leading-tight tracking-tight">
              Frequently Asked <span className="gold-shimmer">Questions</span>
            </h1>
            <p className="mt-4 text-[#526382] text-sm leading-relaxed max-w-xl mx-auto">
              Everything you need to know about our certified lab diamonds, insured delivery,
              sizing, certifications, and lifetime privileges.
            </p>
          </div>
        </section>

        {/* ─── Accordions ─── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="space-y-10">
            {faqSections.map((sec, secIdx) => (
              <div key={secIdx} className="bg-white rounded-3xl border border-[#e2e8f4] p-6 sm:p-8 shadow-xs">
                <h3 className="font-serif text-xl font-bold text-[#0d1f3c] pb-3 border-b border-[#eef2f8] flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                  {sec.category}
                </h3>

                <div className="divide-y divide-[#f0f3fa] mt-2">
                  {sec.items.map((item, itemIdx) => {
                    const id = `${secIdx}-${itemIdx}`;
                    const isOpen = openItem === id;
                    return (
                      <div key={itemIdx} className="py-4">
                        <button
                          onClick={() => toggle(id)}
                          className="w-full flex items-center justify-between text-left gap-4 text-xs sm:text-sm font-bold text-[#0d1f3c] hover:text-[#c9a84c] transition-colors cursor-pointer"
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
            ))}
          </div>
        </section>

        {/* ─── Still have questions? ─── */}
        <section className="bg-[#f7f9fd] py-14 border-t border-[#e8edf7] text-center">
          <div className="max-w-xl mx-auto px-4">
            <h4 className="font-serif text-2xl font-bold text-[#0d1f3c] mb-2">
              Still Have Questions?
            </h4>
            <p className="text-xs text-[#526382] mb-6 leading-relaxed">
              Our diamond concierge is available for one-on-one video calls and personalized guidance.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="btn-navy text-white text-xs font-bold py-3 px-6 rounded-xl shadow-xs hover:bg-[#c9a84c] hover:text-[#0d1f3c] transition-colors"
              >
                Contact Concierge
              </Link>
              <Link
                href="/products"
                className="btn-gold text-[#0d1f3c] text-xs font-bold py-3 px-6 rounded-xl shadow-xs"
              >
                Browse Jewellery
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

