const TICKER =
  "Web Design  ·  SEO  ·  Pittsburgh  ·  Brand Strategy  ·  Development  ·  Digital Growth  ·  ";

export default function Marquee() {
  // Four repetitions per span so the seam is well off-screen at all widths
  const text = TICKER.repeat(4);

  return (
    <div className="bg-navy-mid border-y border-white/5 py-5 overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        <span className="text-gold font-bold text-xs md:text-sm tracking-[0.2em] uppercase flex-shrink-0 pr-0">
          {text}
        </span>
        <span
          className="text-gold font-bold text-xs md:text-sm tracking-[0.2em] uppercase flex-shrink-0 pr-0"
          aria-hidden
        >
          {text}
        </span>
      </div>
    </div>
  );
}
