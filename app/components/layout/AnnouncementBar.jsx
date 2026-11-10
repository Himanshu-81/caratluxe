export default function AnnouncementBar() {
  const messages = [
    "✦ Free Shipping on Orders Above ₹5,000",
    "✦ IGI & GIA Certified Lab Grown Diamonds",
    "✦ 30-Day Free Returns — No Questions Asked",
    "✦ Lifetime Upgrade Program",
    "✦ 0% EMI Available",
    "✦ Ready in 5–7 Days",
    "✦ Ethically Created · Conflict-Free",
    "✦ BIS Hallmarked Gold & Platinum",
  ];

  const doubled = [...messages, ...messages];

  return (
    <div className="bg-[#0d1f3c] overflow-hidden py-2.5">
      <div className="ticker-track flex whitespace-nowrap" style={{ width: "max-content" }}>
        {doubled.map((msg, i) => (
          <span key={i} className="text-[#e8c97a] text-[11px] tracking-[0.18em]  font-medium px-10">
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
