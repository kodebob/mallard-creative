export default function DuckLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 44) / 80)}
      viewBox="0 0 80 44"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Bill — overlaps slightly with head so fill is seamless */}
      <path d="M1 12 L15 9 L15 19 L1 17 Z" />
      {/* Head */}
      <circle cx="24" cy="14" r="13" />
      {/* Body — left edge overlaps head so no visible gap */}
      <ellipse cx="50" cy="27" rx="24" ry="13" />
      {/* Tail feather */}
      <path d="M68 22 L76 12 L78 25 L72 33 Z" />
    </svg>
  );
}
