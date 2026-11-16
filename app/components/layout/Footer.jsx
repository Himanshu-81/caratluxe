import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaPinterestP } from "react-icons/fa6";
import { IoCallOutline, IoMailOutline, IoLocationOutline, IoLogoWhatsapp } from "react-icons/io5";

const footerNavigation = {
  Shop: [
    { label: "Solitaire Rings", href: "/rings" },
    { label: "Diamond Earrings", href: "/earrings" },
    { label: "Fine Necklaces", href: "/necklaces" },
    { label: "Tennis Bracelets", href: "/bracelets" },
    { label: "Pendants & Drops", href: "/pendants" },
    { label: "Bridal Suite", href: "/collections" },
  ],
  Education: [
    { label: "Lab vs Natural", href: "/education" },
    { label: "The 4Cs Guide", href: "/education" },
    { label: "Certification", href: "/education" },
    { label: "Sustainable Craft", href: "/about" },
    { label: "Diamond Care", href: "/education" },
  ],
  CustomerCare: [
    { label: "Contact Concierge", href: "/contact" },
    { label: "Track Your Order", href: "/orders" },
    { label: "30-Day Returns", href: "/faq" },
    { label: "Ring Size Guide", href: "/products/default" },
    { label: "Frequently Asked Questions", href: "/faq" },
  ],
};

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Insured Shipping", href: "#" },
  { label: "Buyback Policy", href: "#" },
];

const certifications = ["IGI Certified", "SGL Certified", "BIS Hallmarked", "ISO 9001:2015"];

export default function Footer() {
  return (
    <footer className="bg-[#031d42] text-white relative overflow-hidden">
      {/* Subtle gold sheen backdrop */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Col 1: Brand & Logo (3 cols) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-4">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/logo.jpg"
                alt="CaratLuxe Lab Diamonds"
                width={140}
                height={70}
                className="h-14 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
              />
            </Link>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              Certified lab-grown diamond jewellery handcrafted by generational Indian artisans. Conscious brilliance, ethical origin, exceptional value.
            </p>

            {/* Certifications badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="border border-[#c9a84c]/30 text-[#e8c97a] text-[10px] tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 font-medium"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-2.5 pt-2">
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
                  className="w-9 h-9 rounded-full border border-white/20 hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#031d42] flex items-center justify-center text-white/80 transition-all text-xs"
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Shop Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[#e8c97a] text-xs tracking-[0.22em] font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
              Shop
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.Shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#e8c97a] transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Education (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[#e8c97a] text-xs tracking-[0.22em] font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
              Education
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.Education.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#e8c97a] transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Customer Care (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[#e8c97a] text-xs tracking-[0.22em] font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.CustomerCare.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#e8c97a] transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Flagship Atelier & Contact (3 cols) */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-[#e8c97a] text-xs tracking-[0.22em] font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
              Flagship Atelier
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <IoLocationOutline className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-white/80">
                  G-23/1, Rajouri Garden, New Delhi - 110027
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <IoCallOutline className="w-4 h-4 text-[#c9a84c] shrink-0" />
                <a
                  href="tel:+919899766468"
                  className="hover:text-[#e8c97a] text-white/90 font-semibold transition-colors"
                >
                  +91 98997 66468
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <IoLogoWhatsapp className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/919899766468"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] text-white/90 font-semibold transition-colors"
                >
                  WhatsApp Concierge
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <IoMailOutline className="w-4 h-4 text-[#c9a84c] shrink-0" />
                <a
                  href="mailto:unitedcorporates@yahoo.com"
                  className="hover:text-[#e8c97a] text-white/80 transition-colors break-all"
                >
                  unitedcorporates@yahoo.com
                </a>
              </div>
              <p className="text-[11px] text-[#8a9ab8] pt-1">
                Mon – Sat: 10:00 AM – 8:00 PM IST
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Gold Divider Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      {/* Bottom Sub-footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 CaratLuxe Diamonds Pvt Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[11px]">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/60 hover:text-[#e8c97a] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {["100% Insured Delivery", "IGI & SGL Certified", "Lifetime Upgrade"].map((t) => (
              <span key={t} className="text-[#c9a84c]/80 text-[11px] font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
