import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import { IoStar, IoCheckmarkCircle } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "I was initially unsure about lab-grown diamonds, but CaratLuxe completely astonished me. The sparkle on my 1.5ct solitaire is breathtaking and the IGI verification was quick and seamless.",
    purchase: "The Royal Halo Solitaire Ring",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Vikram Malhotra",
    location: "Bengaluru",
    rating: 5,
    text: "Surprised my fiancée with a custom cut proposal ring. The gemologist on video consultation showed us 3D renders, and it arrived in exactly 5 days. Truly 10/10 service.",
    purchase: "Custom Engagement Ring",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Ananya Deshmukh",
    location: "Pune",
    rating: 5,
    text: "The tennis bracelet has magnificent brilliance. The clarity and cut exceed natural mined diamonds that cost 3 times more. Conscious luxury at its finest!",
    purchase: "Royal Diamond Tennis Bracelet",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Rohan & Sneha",
    location: "Delhi NCR",
    rating: 5,
    text: "We ordered matching diamond bands for our wedding reception. The finish, hallmarking, and prompt delivery made our celebration utterly effortless. Thank you CaratLuxe!",
    purchase: "Eternal Couple Bands",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 text-[#c9a84c]">
      {[...Array(5)].map((_, i) => (
        <IoStar
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-[#c9a84c]" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function CustomerTestimonials() {
  return (
    <section className="py-15 bg-[#f4f7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Verified Experiences"
          title="Customer"
          titleHighlight="Endorsements"
          subtitle="Join thousands of couples & diamond connoisseurs who chose conscious elegance."
        />

        {/* Rating Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 p-6 max-w-lg mx-auto rounded-2xl bg-white border border-[#e2e8f4] shadow-sm text-center sm:text-left">
          <div className="text-center">
            <p className="font-serif text-5xl font-extrabold text-[#0d1f3c]">4.9</p>
            <div className="mt-1 flex justify-center">
              <StarRating rating={5} />
            </div>
          </div>
          <div className="hidden sm:block h-12 w-px bg-[#e2e8f4]" />
          <div>
            <p className="text-sm font-bold text-[#0d1535]">10,000+ Verified Customers</p>
            <p className="text-xs text-[#4a5a7a] mt-0.5">Over 98% 5-Star feedback on Google & Trustpilot</p>
            <span className="inline-block text-[10px] text-[#c9a84c] font-bold tracking-widest  mt-1">
              Guaranteed Authenticity
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-[#e2e8f4] hover:border-[#c9a84c] rounded-2xl p-6 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={t.rating} />
                  {t.verified && (
                    <span className="text-[10px] text-[#1b7a5a] font-bold tracking-wider  bg-[#eefaf4] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <IoCheckmarkCircle className="w-3.5 h-3.5 text-[#1b7a5a]" />
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#4a5a7a] leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#e2e8f4] flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#c9a84c]/30">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0d1535]">{t.name}</p>
                  <p className="text-[10px] text-[#8a9ab8]">{t.location} · <span className="text-[#c9a84c]">{t.purchase}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
