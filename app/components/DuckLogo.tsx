export default function DuckLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 88) / 100)}
      viewBox="0 0 100 88"
      fill="currentColor"
      aria-hidden="true"
    >
      {/*
        Rubber duck silhouette — clockwise from bill tip:
        bill top edge → over round head → down neck (slight concave) →
        wing bump → body right → bottom → left side → chin → bill tip (Z)
      */}
      <path d="
        M 7 43
        L 19 31
        C 22 16, 36 7, 48 9
        C 60 11, 66 24, 64 38
        C 62 46, 68 42, 75 39
        C 82 36, 88 40, 89 50
        C 91 60, 87 76, 76 82
        C 64 88, 38 88, 24 81
        C 10 74, 9 58, 15 47
        C 13 45, 10 44, 7 43
        Z
      " />
    </svg>
  );
}
