"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useCallback } from "react";
import {
  IoSearchOutline,
  IoPersonOutline,
  IoHeartOutline,
  IoBagHandleOutline,
  IoChevronDown,
  IoChevronForward,
  IoClose,
  IoMenuOutline,
} from "react-icons/io5";
import LoginModal from "../ui/LoginModal";
import SearchModal from "../ui/SearchModal";

/* ─────────────────────────────────────────────
   MEGA MENU DATA
───────────────────────────────────────────── */
const megaMenuData = {
  rings: {
    label: "Rings",
    href: "/rings",
    sections: [
      {
        heading: "Shop by Style",
        links: [
          { label: "All Rings", href: "/rings" },
          { label: "Solitaire Rings", href: "/rings/solitaire" },
          { label: "Everyday Rings", href: "/rings/everyday" },
          { label: "Engagement Rings", href: "/rings/engagement" },
          { label: "Cocktail Rings", href: "/rings/cocktail" },
          { label: "Band Rings", href: "/rings/band" },
          { label: "Men's Rings", href: "/rings/mens" },
        ],
      },
      {
        heading: "Shop by Price",
        links: [
          { label: "Under ₹20,000", href: "/rings?price=under-20000" },
          { label: "₹20,000 – ₹50,000", href: "/rings?price=20000-50000" },
          { label: "₹50,000 – ₹1,00,000", href: "/rings?price=50000-100000" },
          { label: "Above ₹1,00,000", href: "/rings?price=above-100000" },
        ],
      },
      {
        heading: "Shop by Diamond Size",
        links: [
          { label: "Under 0.30 carat", href: "/rings?size=under-0.30" },
          { label: "0.30 – 0.50 carat", href: "/rings?size=0.30-0.50" },
          { label: "0.50 – 1 carat", href: "/rings?size=0.50-1" },
          { label: "1 – 2 carat", href: "/rings?size=1-2" },
          { label: "2 – 3 carat", href: "/rings?size=2-3" },
          { label: "3 carat and above", href: "/rings?size=above-3" },
        ],
      },
      {
        heading: "Shop by Diamond Shape",
        links: [
          { label: "Round", href: "/rings?shape=round" },
          { label: "Princess", href: "/rings?shape=princess" },
          { label: "Pear", href: "/rings?shape=pear" },
          { label: "Emerald", href: "/rings?shape=emerald" },
          { label: "Oval", href: "/rings?shape=oval" },
          { label: "Heart", href: "/rings?shape=heart" },
          { label: "Marquise", href: "/rings?shape=marquise" },
          { label: "Radiant", href: "/rings?shape=radiant" },
        ],
      },
    ],
    featuredImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=320&h=380&fit=crop",
    featuredLabel: "New Arrivals",
    featuredSub: "Solitaire Collection",
  },
  earrings: {
    label: "Earrings",
    href: "/earrings",
    sections: [
      {
        heading: "Shop by Style",
        links: [
          { label: "All Earrings", href: "/earrings" },
          { label: "Studs", href: "/earrings/studs" },
          { label: "Hoops & Balis", href: "/earrings/hoops" },
          { label: "Solitaire Earrings", href: "/earrings/solitaire" },
          { label: "Drops", href: "/earrings/drops" },
          { label: "Danglers", href: "/earrings/danglers" },
        ],
      },
      {
        heading: "Shop by Price",
        links: [
          { label: "Under ₹20,000", href: "/earrings?price=under-20000" },
          { label: "₹20,000 – ₹50,000", href: "/earrings?price=20000-50000" },
          { label: "₹50,000 – ₹1,00,000", href: "/earrings?price=50000-100000" },
          { label: "Above ₹1,00,000", href: "/earrings?price=above-100000" },
        ],
      },
      {
        heading: "Shop by Diamond Size",
        links: [
          { label: "Under 0.30 carat", href: "/earrings?size=under-0.30" },
          { label: "0.30 – 0.50 carat", href: "/earrings?size=0.30-0.50" },
          { label: "0.50 – 1 carat", href: "/earrings?size=0.50-1" },
          { label: "1 – 2 carat", href: "/earrings?size=1-2" },
          { label: "2 – 3 carat", href: "/earrings?size=2-3" },
          { label: "3 carat and above", href: "/earrings?size=above-3" },
        ],
      },
      {
        heading: "Shop by Diamond Shape",
        links: [
          { label: "Round", href: "/earrings?shape=round" },
          { label: "Princess", href: "/earrings?shape=princess" },
          { label: "Pear", href: "/earrings?shape=pear" },
          { label: "Emerald", href: "/earrings?shape=emerald" },
          { label: "Oval", href: "/earrings?shape=oval" },
          { label: "Heart", href: "/earrings?shape=heart" },
          { label: "Marquise", href: "/earrings?shape=marquise" },
          { label: "Radiant", href: "/earrings?shape=radiant" },
        ],
      },
    ],
    featuredImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=320&h=380&fit=crop",
    featuredLabel: "Editor's Pick",
    featuredSub: "Diamond Stud Collection",
  },
  pendants: {
    label: "Pendants",
    href: "/pendants",
    sections: [
      {
        heading: "Shop by Style",
        links: [
          { label: "All Pendants", href: "/pendants" },
          { label: "Everyday Pendants", href: "/pendants/everyday" },
          { label: "Solitaire Pendants", href: "/pendants/solitaire" },
          { label: "Occasion Wear", href: "/pendants/occasion" },
          { label: "Alphabet Pendants", href: "/pendants/alphabet" },
          { label: "Religious Pendants", href: "/pendants/religious" },
          { label: "Men's Pendants", href: "/pendants/mens" },
          { label: "Pendant Sets", href: "/pendants/sets" },
        ],
      },
      {
        heading: "Shop by Price",
        links: [
          { label: "Under ₹20,000", href: "/pendants?price=under-20000" },
          { label: "₹20,000 – ₹50,000", href: "/pendants?price=20000-50000" },
          { label: "₹50,000 – ₹1,00,000", href: "/pendants?price=50000-100000" },
          { label: "Above ₹1,00,000", href: "/pendants?price=above-100000" },
        ],
      },
      {
        heading: "Shop by Diamond Size",
        links: [
          { label: "Under 0.30 carat", href: "/pendants?size=under-0.30" },
          { label: "0.30 – 0.50 carat", href: "/pendants?size=0.30-0.50" },
          { label: "0.50 – 1 carat", href: "/pendants?size=0.50-1" },
          { label: "1 – 2 carat", href: "/pendants?size=1-2" },
          { label: "2 – 3 carat", href: "/pendants?size=2-3" },
          { label: "3 carat and above", href: "/pendants?size=above-3" },
        ],
      },
      {
        heading: "Shop by Diamond Shape",
        links: [
          { label: "Round", href: "/pendants?shape=round" },
          { label: "Padma Round Cut", href: "/pendants?shape=padma-round" },
          { label: "Princess", href: "/pendants?shape=princess" },
          { label: "Pear", href: "/pendants?shape=pear" },
          { label: "Emerald", href: "/pendants?shape=emerald" },
          { label: "Oval", href: "/pendants?shape=oval" },
          { label: "Heart", href: "/pendants?shape=heart" },
          { label: "Marquise", href: "/pendants?shape=marquise" },
          { label: "Radiant", href: "/pendants?shape=radiant" },
          { label: "Multi-shape", href: "/pendants?shape=multi" },
        ],
      },
    ],
    featuredImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=320&h=380&fit=crop",
    featuredLabel: "Bestseller",
    featuredSub: "Solitaire Pendant Set",
  },
  necklaces: {
    label: "Necklaces",
    href: "/necklaces",
    sections: [
      {
        heading: "Shop by Category",
        links: [
          { label: "All Necklaces", href: "/necklaces" },
          { label: "Light Necklaces", href: "/necklaces/light" },
          { label: "Chain Necklaces", href: "/necklaces/chain" },
          { label: "Tennis Necklaces", href: "/necklaces/tennis" },
          { label: "Occasion Wear", href: "/necklaces/occasion" },
          { label: "Bridal Necklaces", href: "/necklaces/bridal" },
        ],
      },
      {
        heading: "Shop by Price",
        links: [
          { label: "Under ₹20,000", href: "/necklaces?price=under-20000" },
          { label: "₹20,000 – ₹50,000", href: "/necklaces?price=20000-50000" },
          { label: "₹50,000 – ₹1,00,000", href: "/necklaces?price=50000-100000" },
          { label: "Above ₹1,00,000", href: "/necklaces?price=above-100000" },
        ],
      },
      {
        heading: "Shop by Diamond Size",
        links: [
          { label: "Under 0.30 carat", href: "/necklaces?size=under-0.30" },
          { label: "0.30 – 0.50 carat", href: "/necklaces?size=0.30-0.50" },
          { label: "0.50 – 1 carat", href: "/necklaces?size=0.50-1" },
          { label: "1 – 2 carat", href: "/necklaces?size=1-2" },
          { label: "2 – 3 carat", href: "/necklaces?size=2-3" },
          { label: "3 carat and above", href: "/necklaces?size=above-3" },
        ],
      },
      {
        heading: "Shop by Diamond Shape",
        links: [
          { label: "Round", href: "/necklaces?shape=round" },
          { label: "Princess", href: "/necklaces?shape=princess" },
          { label: "Pear", href: "/necklaces?shape=pear" },
          { label: "Emerald", href: "/necklaces?shape=emerald" },
          { label: "Oval", href: "/necklaces?shape=oval" },
          { label: "Heart", href: "/necklaces?shape=heart" },
          { label: "Marquise", href: "/necklaces?shape=marquise" },
          { label: "Multi-shape", href: "/necklaces?shape=multi" },
        ],
      },
    ],
    featuredImage: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=320&h=380&fit=crop",
    featuredLabel: "New Season",
    featuredSub: "Tennis Necklace Collection",
  },
  bracelets: {
    label: "Bracelets & Bangles",
    href: "/bracelets",
    sections: [
      {
        heading: "Shop by Style",
        links: [
          { label: "All Bracelets & Bangles", href: "/bracelets" },
          { label: "Everyday Bracelets", href: "/bracelets/everyday" },
          { label: "Tennis Bracelets", href: "/bracelets/tennis" },
          { label: "Oval Bracelets", href: "/bracelets/oval" },
          { label: "Chain Bracelets", href: "/bracelets/chain" },
          { label: "Occasion Bracelets", href: "/bracelets/occasion" },
        ],
      },
      {
        heading: "Shop by Price",
        links: [
          { label: "Under ₹20,000", href: "/bracelets?price=under-20000" },
          { label: "₹20,000 – ₹50,000", href: "/bracelets?price=20000-50000" },
          { label: "₹50,000 – ₹1,00,000", href: "/bracelets?price=50000-100000" },
          { label: "Above ₹1,00,000", href: "/bracelets?price=above-100000" },
        ],
      },
      {
        heading: "Shop by Diamond Size",
        links: [
          { label: "Under 0.30 carat", href: "/bracelets?size=under-0.30" },
          { label: "0.30 – 0.50 carat", href: "/bracelets?size=0.30-0.50" },
          { label: "0.50 – 1 carat", href: "/bracelets?size=0.50-1" },
          { label: "1 – 2 carat", href: "/bracelets?size=1-2" },
          { label: "2 – 3 carat", href: "/bracelets?size=2-3" },
          { label: "3 carat and above", href: "/bracelets?size=above-3" },
        ],
      },
      {
        heading: "Shop by Diamond Shape",
        links: [
          { label: "Round", href: "/bracelets?shape=round" },
          { label: "Princess", href: "/bracelets?shape=princess" },
          { label: "Pear", href: "/bracelets?shape=pear" },
          { label: "Emerald", href: "/bracelets?shape=emerald" },
          { label: "Oval", href: "/bracelets?shape=oval" },
          { label: "Heart", href: "/bracelets?shape=heart" },
          { label: "Marquise", href: "/bracelets?shape=marquise" },
          { label: "Multi-shape", href: "/bracelets?shape=multi" },
        ],
      },
    ],
    featuredImage: "https://images.unsplash.com/photo-1611591475871-cc43b7e77cac?w=320&h=380&fit=crop",
    featuredLabel: "Trending Now",
    featuredSub: "Tennis Bracelet Edit",
  },
};

const megaMenuKeys = ["rings", "earrings", "pendants", "necklaces", "bracelets"];

const simpleLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Orders", href: "/orders" },
];

/* ─────────────────────────────────────────────
   MEGA MENU PANEL
───────────────────────────────────────────── */
function MegaMenuPanel({ data, onClose }) {
  if (!data) return null;
  return (
    <div
      className="absolute left-0 right-0 top-full bg-white border-t-2 border-[#c9a84c]/30 shadow-[0_20px_60px_rgba(13,31,60,0.12)] z-50 animate-megaFadeIn"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        {/* Category title strip */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e8edf7]">
          <Link
            href={data.href}
            onClick={onClose}
            className="text-[#0d1535] text-lg font-bold tracking-wide hover:text-[#c9a84c] transition-colors"
          >
            {data.label}
          </Link>
          <span className="text-[#c9a84c] text-xs font-semibold  tracking-widest bg-[#c9a84c]/10 px-3 py-1 rounded-full">
            Lab Grown Diamonds
          </span>
          <Link
            href={data.href}
            onClick={onClose}
            className="ml-auto text-xs text-[#c9a84c] font-semibold  tracking-wider hover:underline flex items-center gap-1"
          >
            View All {data.label}
            <IoChevronForward className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Grid: 4 columns + featured image */}
        <div className="grid grid-cols-5 gap-6 lg:gap-8">
          {data.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-[11px]  tracking-[0.18em] font-bold text-[#0d1535] mb-3 pb-2 border-b border-[#e8edf7]">
                {section.heading}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-[13.5px] text-[#4a5a7a] hover:text-[#c9a84c] transition-colors leading-snug block py-0.5 hover:translate-x-1 duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Featured image column */}
          <div className="relative rounded-xl overflow-hidden group cursor-pointer">
            <Image
              src={data.featuredImage}
              alt={data.featuredLabel}
              width={280}
              height={340}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1535]/80 via-transparent to-transparent" />
            {/* Badge */}
            <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest  bg-[#c9a84c] text-[#0d1535] px-2.5 py-1 rounded-full">
              {data.featuredLabel}
            </span>
            {/* Text at bottom */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold text-sm leading-tight">{data.featuredSub}</p>
              <Link
                href={data.href}
                onClick={onClose}
                className="mt-1.5 inline-flex items-center gap-1 text-[#e8c97a] text-xs font-semibold hover:gap-2 transition-all"
              >
                Shop Now
                <IoChevronForward className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MOBILE ACCORDION MENU
───────────────────────────────────────────── */
function MobileMenu({ open, onClose, onOpenLogin }) {
  const [expanded, setExpanded] = useState(null);
  const [subExpanded, setSubExpanded] = useState(null);

  if (!open) return null;

  return (
    <div className="md:hidden fixed inset-0 top-0 z-[60] flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Drawer */}
      <div className="relative w-80 max-w-[85vw] bg-white h-full overflow-y-auto shadow-2xl flex flex-col animate-slideInLeft">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#e8edf7] bg-[#031d42]">
          <Image
            src="/images/logo.jpg"
            alt="CaratLuxe"
            width={120}
            height={48}
            style={{ width: "auto", height: "auto" }}
            className="h-10 w-auto object-contain"
          />
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition"
            aria-label="Close menu"
          >
            <IoClose className="w-5 h-5" />
          </button>
        </div>

        {/* Mega menu categories */}
        <nav className="flex-1 px-4 py-3">
          {/* Sign In / Register Button on top of mobile menu */}
          <div className="mb-4">
            <button
              onClick={() => {
                onClose();
                onOpenLogin();
              }}
              className="w-full bg-[#031d42] hover:bg-[#c9a84c] text-white hover:text-[#031d42] text-xs font-bold tracking-widest  py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <IoPersonOutline className="w-4 h-4" />
              <span>Login / Register</span>
            </button>
          </div>

          {megaMenuKeys.map((key) => {
            const cat = megaMenuData[key];
            const isOpen = expanded === key;
            return (
              <div key={key} className="border-b border-[#f0f3fa]">
                <button
                  className="w-full flex items-center justify-between py-3.5 px-1 text-[#0d1535] font-semibold text-sm"
                  onClick={() => setExpanded(isOpen ? null : key)}
                >
                  {cat.label}
                  <IoChevronDown
                    className={`w-4 h-4 text-[#c9a84c] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-3 pl-2">
                    {/* View All link */}
                    <Link
                      href={cat.href}
                      onClick={onClose}
                      className="flex items-center gap-1.5 text-[#c9a84c] font-semibold text-xs  tracking-wider mb-3 hover:underline"
                    >
                      <IoChevronForward className="w-3.5 h-3.5" />
                      View All {cat.label}
                    </Link>

                    {/* Sections */}
                    {cat.sections.map((section, si) => {
                      const subKey = `${key}-${si}`;
                      const isSubOpen = subExpanded === subKey;
                      return (
                        <div key={subKey} className="mb-1">
                          <button
                            className="w-full flex items-center justify-between py-2 px-1 text-[#0d1535] font-bold text-xs  tracking-widest"
                            onClick={() => setSubExpanded(isSubOpen ? null : subKey)}
                          >
                            {section.heading}
                            <IoChevronDown
                              className={`w-3.5 h-3.5 text-[#8a9ab8] transition-transform duration-150 ${isSubOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                          {isSubOpen && (
                            <ul className="pl-2 pb-1 space-y-1">
                              {section.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    onClick={onClose}
                                    className="block py-1.5 text-[13px] text-[#4a5a7a] hover:text-[#c9a84c] transition-colors"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Simple links */}
          <div className="mt-2">
            {simpleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center py-3.5 px-1 font-semibold text-[15px] border-b border-[#f0f3fa] hover:text-[#c9a84c] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer strip */}
        <div className="px-5 py-4 bg-[#f4f7ff] border-t border-[#e8edf7]">
          <p className="text-xs text-[#8a9ab8] text-center">
            ✦ Certified Lab-Grown Diamonds ✦
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN NAVBAR
───────────────────────────────────────────── */
export default function Navbar() {
  const [activeMega, setActiveMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMega = useCallback((key) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMega(key);
  }, []);

  const scheduledClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMega(null), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const closeAll = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMega(null);
  }, []);

  return (
    <>
      {/* Global CSS for animations injected here via style tag */}
      <style>{`
        @keyframes megaFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-megaFadeIn { animation: megaFadeIn 0.18s ease-out forwards; }

        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        .animate-slideInLeft { animation: slideInLeft 0.26s cubic-bezier(0.25,0.8,0.25,1) forwards; }
      `}</style>

      <header
        className="sticky top-0 z-50 bg-white border-b border-[#e2e8f4]/80 shadow-[0_2px_20px_rgba(13,31,60,0.06)]"
        onMouseLeave={scheduledClose}
        onMouseEnter={cancelClose}
      >
        {/* ── Top bar ── */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 md:h-18 gap-4">

            {/* Hamburger (mobile) */}
            <button
              className="md:hidden text-[#0d1f3c] p-2 -ml-2 rounded-lg hover:bg-[#f4f7ff] transition-colors shrink-0"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <IoMenuOutline className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 group">
              <Image
                src="/images/logo.jpg"
                alt="CaratLuxe Lab Diamonds"
                priority
                width={120}
                height={65}
                className="h-16 w-auto object-contain group-hover:scale-[1.03] transition-transform duration-500"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0 flex-1 justify-center">
              {/* Mega menu items */}
              {megaMenuKeys.map((key) => {
                const cat = megaMenuData[key];
                const isActive = activeMega === key;
                return (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => openMega(key)}
                  >
                    <Link
                      href={cat.href}
                      className={`inline-flex items-center gap-1.5 px-2.5 lg:px-3.5 py-2 text-[15px] font-medium rounded-sm transition-all duration-150 whitespace-nowrap
                        ${isActive
                          ? "text-[#c9a84c]"
                          : "text-[#0d1535] hover:text-[#c9a84c]"
                        }`}
                    >
                      {cat.label}
                      <IoChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${isActive ? "rotate-180 text-[#c9a84c]" : "text-[#8a9ab8]"}`}
                      />
                    </Link>
                    {/* Gold underline indicator */}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] transition-all duration-200 ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                );
              })}

              {/* Divider */}
              <span className="hidden lg:block w-px h-5 bg-[#dde3f0] mx-2" />

              {/* Simple links */}
              {simpleLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2.5 lg:px-3.5 py-2 text-[15px] font-medium  hover:text-[#c9a84c] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right action icons */}
            <div className="flex items-center gap-1 shrink-0">
              {/* Search */}
              <button
                onClick={() => setSearchOpen((v) => !v)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#4a5a7a] hover:text-[#0d1f3c] hover:bg-[#f4f7ff] transition-all"
                aria-label="Search"
              >
                <IoSearchOutline className="w-[19px] h-[19px]" />
              </button>

              {/* Account / Login Modal Trigger */}
              <button
                type="button"
                onClick={() => setLoginOpen(true)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#4a5a7a] hover:text-[#0d1f3c] hover:bg-[#f4f7ff] transition-all cursor-pointer"
                aria-label="Login or Account"
              >
                <IoPersonOutline className="w-[19px] h-[19px]" />
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#4a5a7a] hover:text-[#0d1f3c] hover:bg-[#f4f7ff] transition-all"
                aria-label="Wishlist"
              >
                <IoHeartOutline className="w-[19px] h-[19px]" />
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#4a5a7a] hover:text-[#0d1f3c] hover:bg-[#f4f7ff] transition-all relative"
                aria-label="Cart"
              >
                <IoBagHandleOutline className="w-[19px] h-[19px]" />
                <span className="absolute top-1 right-1 bg-[#c9a84c] text-[#0d1535] text-[9px] font-extrabold rounded-full w-4 h-4 flex items-center justify-center ring-2 ring-white">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Mega Menu Panel ── */}
        {activeMega && (
          <div onMouseEnter={cancelClose} onMouseLeave={scheduledClose}>
            <MegaMenuPanel
              data={megaMenuData[activeMega]}
              onClose={closeAll}
            />
          </div>
        )}
      </header>

      {/* ── Mobile full-screen drawer ── */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onOpenLogin={() => setLoginOpen(true)}
      />

      {/* ── Search Modal (Zero Layout Shift) ── */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* ── Login Modal ── */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
