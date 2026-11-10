"use client";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { IoChevronDown } from "react-icons/io5";

const faqs = [
  {
    question: "What is a lab-grown diamond, and is it a real diamond?",
    answer:
      "Yes, absolutely. Lab-grown diamonds are 100% real diamonds. They possess the exact same chemical, physical, and optical composition (10 on the Mohs hardness scale) as earth-mined diamonds. Every CaratLuxe diamond comes independently verified with laser-inscribed certification from IGI or GIA.",
  },
  {
    question: "How do lab diamonds differ from moissanite or cubic zirconia?",
    answer:
      "Moissanite and cubic zirconia are diamond simulants (fake stones with completely different chemical makeup and lower durability). Lab-grown diamonds are pure crystallized carbon diamonds with identical sparkle, refractive index (2.42), and hardness as mined diamonds.",
  },
  {
    question: "Are your diamonds certified by recognized gemological institutes?",
    answer:
      "Yes. Every CaratLuxe lab diamond is accompanied by an authentic digital and physical grading report from international laboratories including IGI (International Gemological Institute) or GIA. The report documents the 4Cs: Cut, Color, Clarity, and Carat weight.",
  },
  {
    question: "What is your 100% Lifetime Upgrade & Buyback policy?",
    answer:
      "We provide a 100% lifetime exchange credit towards any new purchase of higher value. If you ever want to upgrade your solitaire or piece to a larger carat size or design, we honor your piece at full purchase value against prevailing rates.",
  },
  {
    question: "How long does shipping take, and is the delivery insured?",
    answer:
      "Every piece is custom crafted and hand-finished within 5 to 7 business days. All shipments across India are 100% transit-insured and delivered via secured courier partners requiring OTP and signature verification.",
  },
  {
    question: "Can I customize an engagement ring or piece of jewellery?",
    answer:
      "Yes! Our custom atelier allows you to choose your desired diamond shape (Round, Oval, Emerald, Radiant, Pear), carat weight, metal (14K/18K Yellow, White, Rose Gold, or Platinum), and band style with complete 3D CAD render approval before casting.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-15 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Got Questions?"
          title="Frequently Asked"
          titleHighlight="Questions"
          subtitle="Everything you need to know about conscious lab diamonds, certifications, and our lifetime guarantee."
        />

        <div className="mt-10 divide-y divide-[#e2e8f4] border-y border-[#e2e8f4]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="font-semibold text-base sm:text-lg text-[#0d1535] group-hover:text-[#c9a84c] transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${isOpen
                      ? "bg-[#0d1f3c] text-white border-[#0d1f3c]"
                      : "bg-[#f4f7ff] text-[#0d1f3c] border-[#e2e8f4] group-hover:border-[#c9a84c]"
                      }`}
                  >
                    <IoChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-10">
                    <p className="text-sm text-[#4a5a7a] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for consultation */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#f4f7ff] border border-[#e2e8f4] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-[#0d1535]">Have more questions?</h4>
            <p className="text-xs sm:text-sm text-[#4a5a7a] mt-1">
              Speak directly with our in-house certified diamond specialists.
            </p>
          </div>
          <a
            href="/consultation"
            className="btn-navy text-white text-xs font-bold tracking-widest  px-6 py-3.5 rounded-full inline-block shadow-sm shrink-0"
          >
            Chat with Gemologist →
          </a>
        </div>
      </div>
    </section>
  );
}

