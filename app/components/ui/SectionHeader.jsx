export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  dark = false,
  className = "",
}) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-3 ${centered ? "justify-center" : ""}`}>
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.35em]  font-semibold">{eyebrow}</span>
          <div className="h-px w-8 bg-[#c9a84c]" />
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold ${dark ? "text-white" : "text-[#0d1535]"}`}>
        {title}{" "}
        {titleHighlight && <span className="gold-shimmer">{titleHighlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-sm md:text-base leading-relaxed max-w-xl ${centered ? "mx-auto" : ""} ${dark ? "text-white/65" : "text-[#4a5a7a]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
