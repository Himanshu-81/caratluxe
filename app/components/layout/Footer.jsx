import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaPinterestP } from "react-icons/fa6";

const footerLinks = {
  Shop: ["Rings", "Earrings", "Necklaces", "Bracelets", "Solitaires", "Bridal Sets"],
  Education: ["Lab vs Natural", "The 4Cs Guide", "Certification", "Sustainability", "Diamond Care"],
  CustomerCare: ["Contact Us", "Track Order", "30-Day Returns", "Ring Size Guide", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Insured Shipping", "Buyback Policy"],
};

const certifications = ["IGI Certified", "GIA Certified", "BIS Hallmarked", "ISO 9001:2015"];

export default function Footer() {
  return (
    <footer className="bg-[#031d42] text-white relative overflow-hidden">
      {/* Subtle gold sheen backdrop */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-15 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">

          {/* Brand block with prominent Logo */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3.5 mb-6 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-1 ring-[#c9a84c]/50 shadow-md bg-[#031d42]">
                <Image
                  src="/images/logo.jpg"
                  alt="CaratLuxe"
                  fill
                  sizes="48px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white">
                  CARATLUXE
                </span>
                <span className="text-[10px] tracking-[0.32em]  font-semibold text-[#c9a84c] -mt-0.5">
                  Conscious Luxury
                </span>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Certified lab-grown diamond jewellery handcrafted by generational Indian artisans. Conscious brilliance, ethical origin, exceptional value.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="border border-[#c9a84c]/40 text-[#e8c97a] text-[10px] tracking-widest  px-3 py-1 rounded-full bg-white/5"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { label: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
                { label: "Facebook", icon: FaFacebookF, href: "https://facebook.com" },
                { label: "YouTube", icon: FaYoutube, href: "https://youtube.com" },
                { label: "Pinterest", icon: FaPinterestP, href: "https://pinterest.com" },
              ].map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#031d42] flex items-center justify-center text-white/80 transition-all text-sm"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#e8c97a] text-xs tracking-[0.22em]  font-bold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-white/60 hover:text-[#e8c97a] text-sm transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Gold Divider Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      {/* Bottom Sub-footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 CaratLuxe Diamonds Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {["100% Insured Delivery", "IGI / GIA Certified", "Lifetime Upgrade"].map((t) => (
              <span key={t} className="text-white/60 text-[11px] font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
