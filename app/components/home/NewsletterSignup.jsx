"use client";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative py-15 bg-[#0d1f3c] text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-[#e8c97a] text-[10px] tracking-[0.35em]  font-bold">
            The CaratLuxe Club
          </span>
          <div className="h-px w-8 bg-[#c9a84c]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
          Receive <span className="gold-shimmer font-bold">₹2,500 Off</span> Your First Order
        </h2>

        <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
          Subscribe for early VIP access to limited drops, curated diamond guides, and private seasonal previews.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 focus:border-[#c9a84c] rounded-full px-6 py-3.5 text-sm text-white placeholder-white/50 focus:outline-none transition-colors backdrop-blur-sm"
            />
            <button
              type="submit"
              className="btn-gold text-[#0d1f3c] font-bold text-xs tracking-widest  px-8 py-3.5 rounded-full cursor-pointer shadow-md hover:scale-[1.02] transition-transform"
            >
              Join Club
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto flex items-center justify-center gap-3 py-4 border border-[#c9a84c]/40 rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-[#c9a84c] text-lg">✦</span>
            <span className="text-[#e8c97a] text-sm font-semibold">Welcome to the Club! Check your inbox for the code.</span>
          </div>
        )}

        <p className="text-white/40 text-[11px] mt-4 tracking-wide">
          No spam, ever. Unsubscribe at any time with one click.
        </p>

        {/* Benefits Strip */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-white/10 text-white/70 text-xs tracking-wider">
          <span className="flex items-center gap-1.5"><span className="text-[#c9a84c]">✦</span> Private Previews</span>
          <span className="flex items-center gap-1.5"><span className="text-[#c9a84c]">◈</span> Member-Only Pricing</span>
          <span className="flex items-center gap-1.5"><span className="text-[#c9a84c]">◇</span> Complimentary Cleaning</span>
        </div>
      </div>
    </section>
  );
}
