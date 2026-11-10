export default function TrustFeatures() {
  return (
    <section className="relative w-full bg-[#031d42] border-y border-[#c9a84c]/20 py-4 sm:py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Left Ornate Flourish */}
        <div className="hidden lg:flex items-center gap-2 text-[#c9a84c] shrink-0 pointer-events-none select-none">
          <svg viewBox="0 0 160 40" className="w-32 xl:w-40 h-8 fill-none stroke-[#c9a84c] stroke-[1.2]">
            {/* Scroll filigree flourish */}
            <path d="M 10,20 C 15,10 25,12 28,18 C 30,22 28,26 22,26 C 14,26 12,18 20,12 C 30,5 45,15 55,20 C 70,26 90,20 110,20 L 140,20" />
            <path d="M 28,18 C 35,12 42,10 48,15" strokeWidth="1" />
            <path d="M 38,24 C 45,28 52,25 58,20" strokeWidth="1" />
            {/* Leaves */}
            <path d="M 32,15 C 36,12 40,14 38,18 C 36,18 34,17 32,15 Z" fill="#c9a84c" />
            <path d="M 44,14 C 48,10 52,13 50,17 C 48,17 46,16 44,14 Z" fill="#c9a84c" />
            <path d="M 46,26 C 50,30 54,28 52,24 C 50,24 48,25 46,26 Z" fill="#c9a84c" />
            {/* Diamond Sparkle at flourish tip */}
            <polygon points="145,20 150,16 155,20 150,24" fill="#c9a84c" />
          </svg>
        </div>

        {/* Center 3 Trust Items */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-14 xl:gap-20">

          {/* Feature 1: Premium Quality Designs */}
          <div className="flex items-center gap-3.5 group">
            {/* Diamond Icon */}
            <div className="shrink-0 text-[#c9a84c]">
              <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-[1.6]">
                <polygon points="6 3 18 3 22 9 12 22 2 9" />
                <polyline points="2 9 12 9 22 9" />
                <polyline points="6 3 12 9 18 3" />
                <polyline points="12 22 7 9" />
                <polyline points="12 22 17 9" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white text-xs sm:text-[13px] font-extrabold tracking-[0.14em]  leading-tight">
                Premium Quality
              </span>
              <span className="text-white text-xs sm:text-[13px] font-extrabold tracking-[0.14em]  leading-tight">
                Designs
              </span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden sm:block h-9 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/60 to-transparent" />

          {/* Feature 2: Trusted by 10,000+ Customers */}
          <div className="flex items-center gap-3.5 group">
            {/* Shield Check Icon */}
            <div className="shrink-0 text-[#c9a84c]">
              <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-[1.6]">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white text-xs sm:text-[13px] font-extrabold tracking-[0.14em]  leading-tight">
                Trusted By
              </span>
              <span className="text-white text-xs sm:text-[13px] font-extrabold tracking-[0.14em]  leading-tight">
                10,000+ Customers
              </span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden sm:block h-9 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/60 to-transparent" />

          {/* Feature 3: Free Gifts on Every Order */}
          <div className="flex items-center gap-3.5 group">
            {/* Gift Box Icon */}
            <div className="shrink-0 text-[#c9a84c]">
              <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-[1.6]">
                {/* Box body */}
                <rect x="3" y="10" width="18" height="11" rx="1" />
                {/* Box lid */}
                <rect x="2" y="6" width="20" height="4" rx="1" />
                {/* Vertical Ribbon */}
                <line x1="12" y1="6" x2="12" y2="21" strokeWidth="1.8" />
                {/* Ribbon Bows */}
                <path d="M12 6 C9 3, 5 3, 7 6 Z" fill="#c9a84c" />
                <path d="M12 6 C15 3, 19 3, 17 6 Z" fill="#c9a84c" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white text-xs sm:text-[13px] font-extrabold tracking-[0.14em]  leading-tight">
                Free Gifts
              </span>
              <span className="text-white text-xs sm:text-[13px] font-extrabold tracking-[0.14em]  leading-tight">
                On Every Order
              </span>
            </div>
          </div>

        </div>

        {/* Right Ornate Flourish (Mirrored) */}
        <div className="hidden lg:flex items-center gap-2 text-[#c9a84c] shrink-0 pointer-events-none select-none">
          <svg viewBox="0 0 160 40" className="w-32 xl:w-40 h-8 fill-none stroke-[#c9a84c] stroke-[1.2] -scale-x-100">
            {/* Scroll filigree flourish */}
            <path d="M 10,20 C 15,10 25,12 28,18 C 30,22 28,26 22,26 C 14,26 12,18 20,12 C 30,5 45,15 55,20 C 70,26 90,20 110,20 L 140,20" />
            <path d="M 28,18 C 35,12 42,10 48,15" strokeWidth="1" />
            <path d="M 38,24 C 45,28 52,25 58,20" strokeWidth="1" />
            {/* Leaves */}
            <path d="M 32,15 C 36,12 40,14 38,18 C 36,18 34,17 32,15 Z" fill="#c9a84c" />
            <path d="M 44,14 C 48,10 52,13 50,17 C 48,17 46,16 44,14 Z" fill="#c9a84c" />
            <path d="M 46,26 C 50,30 54,28 52,24 C 50,24 48,25 46,26 Z" fill="#c9a84c" />
            {/* Diamond Sparkle at flourish tip */}
            <polygon points="145,20 150,16 155,20 150,24" fill="#c9a84c" />
          </svg>
        </div>

      </div>
    </section>
  );
}
