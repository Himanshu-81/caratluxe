"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoHeartOutline, IoHeart, IoAdd } from "react-icons/io5";

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  discount,
  badge,
  badgeColor = "bg-[#c9a84c] text-white",
  category,
  carats,
  metal,
  image,
  hoverImage,
  images = [],
}) {
  // Consolidate images into an array of up to 4 angles
  const imageList = images.length > 0
    ? images
    : [image, hoverImage].filter(Boolean);

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const currentImage = imageList[activeImgIndex] || image || imageList[0];

  return (
    <div className="card-hover group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-[#e2e8f4] shadow-[0_4px_16px_rgba(13,31,60,0.04)] hover:shadow-[0_12px_32px_rgba(13,31,60,0.09)] transition-all">
      {/* Top Main Image Area */}
      <Link href={`/products/${id}`} className="relative aspect-square overflow-hidden bg-[#f4f7ff] block">
        {/* Promotional / Status Badge */}
        {badge && (
          <span className={`absolute top-3 left-3 z-20 text-[9px] font-bold tracking-widest  px-2.5 py-0.5 rounded-full ${badgeColor} shadow-xs`}>
            {badge}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center transition-all shadow-sm cursor-pointer ${isWishlisted ? "opacity-100 text-red-500" : "opacity-0 group-hover:opacity-100 text-[#4a5a7a] hover:text-[#c9a84c]"
            }`}
          aria-label="Add to Wishlist"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
        >
          {isWishlisted ? (
            <IoHeart className="w-4 h-4 text-red-500" />
          ) : (
            <IoHeartOutline className="w-4 h-4" />
          )}
        </button>

        {/* Main Displayed Image */}
        <Image
          src={currentImage}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-all duration-500 ease-out"
        />

        {/* Quick Add Slide-up Button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-2.5 z-20">
          <button
            type="button"
            className="w-full bg-[#031d42] hover:bg-[#c9a84c] text-white hover:text-[#031d42] text-[11px] font-extrabold tracking-widest  py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <IoAdd className="w-4 h-4" />
            <p>Quick Add</p>
          </button>
        </div>
      </Link>

      {/* Interactive Bottom Thumbnails Row (hover to switch main image) */}
      {imageList.length > 1 && (
        <div className="px-3 pt-3 flex items-center gap-2">
          {imageList.map((thumbUrl, idx) => {
            const isSelected = activeImgIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onMouseEnter={() => setActiveImgIndex(idx)}
                onClick={() => setActiveImgIndex(idx)}
                className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${isSelected
                  ? "border-[#c9a84c] ring-2 ring-[#c9a84c]/20 scale-105 shadow-xs"
                  : "border-[#e2e8f4] hover:border-[#c9a84c]/60 opacity-70 hover:opacity-100"
                  }`}
                aria-label={`Select angle ${idx + 1}`}
              >
                <Image
                  src={thumbUrl}
                  alt={`${name} angle ${idx + 1}`}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Info Card Content */}
      <div className="p-4 pt-3 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[#8a9ab8] text-[10px] tracking-widest  font-semibold mb-1">
            {category}
          </p>

          <Link href={`/products/${id}`} className="block">
            <h3 className="text-[#0d1535] text-xs sm:text-sm font-semibold leading-snug hover:text-[#c9a84c] transition-colors line-clamp-1">
              {name}
            </h3>
          </Link>
        </div>

        <div className="flex items-center justify-between gap-2 mt-1 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-[#031d42] font-bold text-sm sm:text-base">
              {typeof price === "number" ? `₹${price.toLocaleString("en-IN")}` : price}
            </span>
            {originalPrice && (
              <span className="text-[#8a9ab8] text-xs line-through">
                {typeof originalPrice === "number" ? `₹${originalPrice.toLocaleString("en-IN")}` : originalPrice}
              </span>
            )}
          </div>
          {discount && (
            <span className="text-[10px] font-bold text-[#9a2e2e] bg-[#fdf2f2] px-1.5 py-0.5 rounded">
              {discount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
