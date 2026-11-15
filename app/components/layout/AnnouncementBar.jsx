export default function AnnouncementBar() {
  const messages = [
    "✦ Free Shipping on Orders Above ₹5,000",
    "✦ IGI & SGL Certified Lab Grown Diamonds",
    "✦ 30-Day Free Returns — No Questions Asked",
    "✦ Lifetime Upgrade Program",
    "✦ 0% EMI Available",
    "✦ Ready in 5–7 Days",
    "✦ Ethically Created · Conflict-Free",
    "✦ BIS Hallmarked Gold & Platinum",
  ];

  const doubled = [...messages, ...messages];

  return (
    <div className="bg-white border-b border-[#e2e8f4]/80 overflow-hidden py-2.5">
      <div className="ticker-track flex whitespace-nowrap" style={{ width: "max-content" }}>
        {doubled.map((msg, i) => (
          <span key={i} className="text-[#0d1f3c] text-[11px] tracking-[0.18em] font-semibold px-10 flex items-center gap-1.5">
            <span className="text-[#c9a84c]">✦</span>
            <span>{msg.replace("✦ ", "")}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
