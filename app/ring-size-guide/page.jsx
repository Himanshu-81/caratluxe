"use client";
import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  IoCallOutline,
  IoLogoWhatsapp,
  IoCheckmarkCircle,
  IoLocationOutline,
  IoResizeOutline,
  IoSparklesOutline,
} from "react-icons/io5";

export default function RingSizeGuidePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="bg-[#fcfdfd] text-[#0d1535] min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b border-[#e9eef6] bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#6e7d9b] flex items-center gap-2">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0d1f3c] font-semibold">Ring Size Guide</span>
          </div>
        </div>

        {/* Page Header */}
        <section className="bg-gradient-to-b from-[#f5f8ff] via-[#ffffff] to-[#ffffff] py-12 sm:py-16 border-b border-[#e8edf7]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9a84c]/10 text-[#0d1f3c] text-xs font-semibold mb-4 border border-[#c9a84c]/20">
              <IoResizeOutline className="w-4 h-4 text-[#c9a84c]" />
              <span>Simple Guide</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#0d1f3c] mb-3">
              How to Find Your Ring Size
            </h1>
            <p className="text-xs sm:text-sm text-[#526382] leading-relaxed max-w-xl mx-auto">
              Finding the right ring size is easy and takes less than 2 minutes at home. Follow our simple instructions below to get your size right.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs text-[#0d1f3c]">
              <div className="flex items-center gap-1.5">
                <IoCheckmarkCircle className="w-4 h-4 text-[#25D366]" />
                <span className="font-semibold">Free 30-Day Resizing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IoCheckmarkCircle className="w-4 h-4 text-[#25D366]" />
                <span className="font-semibold">Standard Indian Sizes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IoCheckmarkCircle className="w-4 h-4 text-[#25D366]" />
                <span className="font-semibold">Direct Help on WhatsApp</span>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-xs sm:text-sm">

          {/* Method 1: Using an existing ring */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e8f4] shadow-sm space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-[#0d1f3c] text-[#e8c97a] font-bold text-xs">
              Method 1 (Recommended)
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1f3c]">
              Measure a Ring You Already Have
            </h2>
            <p className="text-[#526382] leading-relaxed">
              If you already have a ring that fits the finger you want to wear your new ring on, this is the quickest and most accurate way:
            </p>

            <div className="space-y-3 pt-2 text-[#526382]">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f4f7fb] text-[#0d1f3c] font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <p className="leading-relaxed">
                  Take the ring that fits comfortably on your finger.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f4f7fb] text-[#0d1f3c] font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <p className="leading-relaxed">
                  Place it flat on a simple school ruler marked with millimeters (mm).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f4f7fb] text-[#0d1f3c] font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </span>
                <p className="leading-relaxed">
                  Measure the <strong>inside diameter</strong> across the widest center of the circle. Measure only the open hole inside, from one inner wall straight across to the other. Do not include the metal width of the ring.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f4f7fb] text-[#0d1f3c] font-bold flex items-center justify-center shrink-0 text-xs">
                  4
                </span>
                <p className="leading-relaxed">
                  Note the millimeter measurement (for example, around 17 mm is usually Size 14).
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-[#fbf8ed] border border-[#f1e6bf] rounded-xl text-xs text-[#8c6b1b]">
              <strong>Quick note:</strong> Make sure the ring you measure is round and has not been bent out of shape.
            </div>
          </section>

          {/* Method 2: Using paper or tape */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e8f4] shadow-sm space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-[#0d1f3c] text-[#e8c97a] font-bold text-xs">
              Method 2
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1f3c]">
              Measure Your Finger with Paper
            </h2>
            <p className="text-[#526382] leading-relaxed">
              If you do not have a ring handy, you can measure your finger directly using a piece of paper:
            </p>

            <div className="space-y-3 pt-2 text-[#526382]">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f4f7fb] text-[#0d1f3c] font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <p className="leading-relaxed">
                  Cut a thin strip of paper, about as wide as a ribbon (1 cm wide and 10 cm long).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f4f7fb] text-[#0d1f3c] font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <p className="leading-relaxed">
                  Wrap the strip comfortably around the base of your finger. It should feel snug and natural, not tight.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f4f7fb] text-[#0d1f3c] font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </span>
                <p className="leading-relaxed">
                  Use a pen or pencil to mark the exact spot where the paper overlaps itself.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f4f7fb] text-[#0d1f3c] font-bold flex items-center justify-center shrink-0 text-xs">
                  4
                </span>
                <p className="leading-relaxed">
                  Lay the paper flat next to a ruler and measure the distance from the end to your mark in millimeters. This is the circumference around your finger.
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-[#fbf8ed] border border-[#f1e6bf] rounded-xl text-xs text-[#8c6b1b]">
              <strong>Quick note:</strong> Avoid using string or thread because string can stretch easily and give you a smaller size by mistake.
            </div>
          </section>

          {/* Quick Common Size References (Simple text, not a table) */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e8f4] shadow-sm space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1f3c]">
              Common Indian Ring Sizes at a Glance
            </h2>
            <p className="text-[#526382] leading-relaxed">
              Here are the most common ring sizes in India to give you a quick idea:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#f8fafd] border border-[#e2e8f4] space-y-1.5">
                <p className="font-bold text-[#0d1f3c] text-sm">For Women</p>
                <p className="text-xs text-[#526382] leading-relaxed">
                  • <strong>Size 12 to 14</strong> is the most common size for Indian women.
                </p>
                <p className="text-xs text-[#526382] leading-relaxed">
                  • <strong>Size 10 to 11</strong> is common for slimmer fingers.
                </p>
                <p className="text-xs text-[#526382] leading-relaxed">
                  • <strong>Size 15 to 16</strong> is common for slightly broader fingers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8fafd] border border-[#e2e8f4] space-y-1.5">
                <p className="font-bold text-[#0d1f3c] text-sm">For Men</p>
                <p className="text-xs text-[#526382] leading-relaxed">
                  • <strong>Size 18 to 20</strong> is the standard size for most Indian men.
                </p>
                <p className="text-xs text-[#526382] leading-relaxed">
                  • <strong>Size 16 to 17</strong> fits slimmer hands.
                </p>
                <p className="text-xs text-[#526382] leading-relaxed">
                  • <strong>Size 21 to 23</strong> fits broader or larger hands.
                </p>
              </div>
            </div>
          </section>

          {/* Important Rules & Tips */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e8f4] shadow-sm space-y-5">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1f3c]">
              Helpful Things to Keep in Mind
            </h2>

            <div className="space-y-4 text-[#526382]">
              <div className="flex items-start gap-3">
                <IoCheckmarkCircle className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0d1f3c]">Measure towards the end of the day</p>
                  <p className="text-xs leading-relaxed">
                    Fingers are naturally a bit thinner in the early morning or when you feel cold. Measuring in the evening at normal room temperature gives the most comfortable everyday fit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IoCheckmarkCircle className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0d1f3c]">Check your knuckle</p>
                  <p className="text-xs leading-relaxed">
                    If your knuckle is wider than the base of your finger, measure both your knuckle and the base. Choose a size in between so the ring slides over your knuckle without getting stuck.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IoCheckmarkCircle className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0d1f3c]">Wider bands feel tighter</p>
                  <p className="text-xs leading-relaxed">
                    If you are picking a thick or wide band ring, it covers more of your finger and usually feels snugger. We suggest going up by one size for wide rings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IoCheckmarkCircle className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0d1f3c]">If you are between two sizes, pick the larger one</p>
                  <p className="text-xs leading-relaxed">
                    A ring that is slightly loose is always much easier to wear than a ring that pinches your finger.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IoCheckmarkCircle className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0d1f3c]">Free 30-day resizing</p>
                  <p className="text-xs leading-relaxed">
                    If you receive your ring and feel the fit needs a little adjustment, don't worry at all. We provide free resizing within 30 days of purchase.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Need Personal Help Card */}
          <section className="bg-gradient-to-r from-[#0d1f3c] to-[#031d42] rounded-3xl p-6 sm:p-10 text-white text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#e8c97a] text-xs font-semibold">
              <IoSparklesOutline className="w-4 h-4" />
              <span>We Are Here to Help</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Need Help Finding Your Size?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
              If you are not sure or are planning a surprise gift, just message us on WhatsApp or visit our store in Rajouri Garden. Our team will help you choose the right size immediately.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919899766468?text=Hello%20CaratLuxe%2C%20I%20need%20help%20finding%20my%20ring%20size."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#1faa4b] transition-all shadow-md"
              >
                <IoLogoWhatsapp className="w-4 h-4" />
                <span>WhatsApp Us (+91 98997 66468)</span>
              </a>

              <a
                href="tel:+919899766468"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-xs hover:bg-white/20 transition-all"
              >
                <IoCallOutline className="w-4 h-4" />
                <span>Call Us</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c9a84c] text-[#0d1f3c] font-bold text-xs hover:bg-[#e8c97a] transition-all shadow-md"
              >
                <IoLocationOutline className="w-4 h-4" />
                <span>Visit Store</span>
              </Link>
            </div>

            <p className="text-[11px] text-white/50 pt-2">
              Store Address: G-23/1, Rajouri Garden, New Delhi - 110027 · Open Mon–Sat: 10:00 AM – 8:00 PM
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
