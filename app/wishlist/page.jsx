"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { IoTrashOutline, IoBagCheckOutline, IoShareSocialOutline, IoHeart } from "react-icons/io5";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "grand-row-solitaire-diamond-ring",
      name: "The Grand Row Solitaire Diamond Ring",
      category: "Solitaire Rings",
      price: 159360,
      originalPrice: 199200,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=80",
      specs: "1.00 CT VVS1 E · 18K Yellow Gold",
    },
    {
      id: "royal-tennis-bracelet",
      name: "Royal Diamond Tennis Strand Bracelet",
      category: "Bracelets & Bangles",
      price: 109335,
      originalPrice: 136668,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&auto=format&fit=crop&q=80",
      specs: "3.50 CT Total · 18K White Gold",
    },
    {
      id: "celestial-drop-earrings",
      name: "Celestial Chandelier Diamond Earrings",
      category: "Earrings",
      price: 64800,
      originalPrice: 81000,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80",
      specs: "1.80 CT Total · 18K Yellow Gold",
    },
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
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
            <span className="text-[#0d1f3c] font-semibold">Saved Wishlist ({wishlistItems.length})</span>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0d1f3c]">
                Your Saved Wishlist
              </h1>
              <p className="text-xs text-[#526382] mt-1">
                Curate your dream pieces and share with family or partner.
              </p>
            </div>

            {wishlistItems.length > 0 && (
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert("Wishlist link copied to clipboard!");
                }}
                className="btn-navy text-white text-xs font-bold py-2.5 px-5 rounded-xl inline-flex items-center gap-2 self-start sm:self-auto cursor-pointer"
              >
                <IoShareSocialOutline className="w-4 h-4" />
                Share Wishlist
              </button>
            )}
          </div>

          {wishlistItems.length === 0 ? (
            <div className="bg-white rounded-3xl border border-[#e2e8f4] p-12 text-center max-w-lg mx-auto space-y-4">
              <IoHeart className="w-12 h-12 text-[#c9a84c] mx-auto opacity-40" />
              <h3 className="font-serif text-2xl font-bold text-[#0d1f3c]">
                Your Wishlist is Empty
              </h3>
              <p className="text-xs text-[#6e7d9b] leading-relaxed">
                Click the heart icon on any ring, necklace, or earring to save your
                most cherished designs here.
              </p>
              <Link
                href="/products"
                className="btn-gold text-[#0d1f3c] text-xs font-bold tracking-wider uppercase px-8 py-3.5 rounded-full inline-block shadow-md"
              >
                Discover Designs →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-[#e2e8f4] overflow-hidden shadow-xs flex flex-col justify-between group"
                >
                  <div className="relative aspect-square bg-[#f4f7ff] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-red-500 hover:scale-110 transition-all shadow-xs cursor-pointer"
                      title="Remove from wishlist"
                    >
                      <IoTrashOutline className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-[#c9a84c] tracking-widest uppercase">
                        {item.category}
                      </p>
                      <Link href={`/products/${item.id}`}>
                        <h3 className="font-serif text-base font-bold text-[#0d1f3c] hover:text-[#c9a84c] transition-colors line-clamp-1 mt-0.5">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-[#6e7d9b] mt-1">{item.specs}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#f0f3fa] flex items-center justify-between">
                      <div>
                        <span className="text-base font-bold text-[#0d1f3c]">
                          ₹{item.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-[#8a9ab8] line-through ml-2">
                          ₹{item.originalPrice.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <Link
                        href={`/products/${item.id}`}
                        className="btn-navy text-white text-[11px] font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 hover:bg-[#c9a84c] hover:text-[#0d1f3c] transition-colors"
                      >
                        <IoBagCheckOutline className="w-3.5 h-3.5" />
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

