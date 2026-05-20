export default function DuckLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 65) / 100)}
      viewBox="0 0 100 65"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="
        M95 38
        C90 30, 80 27, 72 30
        C62 27, 50 16, 30 8
        C18 2, 5 5, 3 16
        C5 24, 16 26, 26 30
        C32 34, 36 37, 38 40
        C32 44, 22 48, 12 50
        C14 56, 24 60, 38 58
        C56 56, 74 54, 84 50
        C89 47, 93 43, 95 40
        Z
      " />
    </svg>
  );
}
