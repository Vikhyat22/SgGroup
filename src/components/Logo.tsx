interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export default function Logo({ width = 48, height = 48, className = '' }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SG Group Logo"
      role="img"
    >
      {/* Inverted triangle — gold border */}
      <polygon
        points="50,105 5,10 95,10"
        fill="#1A1A1A"
        stroke="#F2C811"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* ── S letter (left side) formed by horizontal art-deco bars ── */}
      {/* Top cap */}
      <rect x="22" y="28" width="20" height="4" rx="1" fill="#F2C811" />
      {/* Upper-left stem — short */}
      <rect x="22" y="28" width="4" height="9" rx="1" fill="#F2C811" />
      {/* Middle bar */}
      <rect x="22" y="37" width="20" height="4" rx="1" fill="#F2C811" />
      {/* Lower-right stem */}
      <rect x="38" y="37" width="4" height="9" rx="1" fill="#F2C811" />
      {/* Bottom cap */}
      <rect x="22" y="46" width="20" height="4" rx="1" fill="#F2C811" />

      {/* ── G letter (right side) formed by horizontal art-deco bars ── */}
      {/* Top cap */}
      <rect x="56" y="28" width="21" height="4" rx="1" fill="#F2C811" />
      {/* Left stem full */}
      <rect x="56" y="28" width="4" height="22" rx="1" fill="#F2C811" />
      {/* Middle shelf (G inner stub) */}
      <rect x="68" y="37" width="9" height="4" rx="1" fill="#F2C811" />
      {/* Bottom cap */}
      <rect x="56" y="46" width="21" height="4" rx="1" fill="#F2C811" />

      {/* Thin gold divider line between S and G */}
      <rect x="49" y="26" width="2" height="26" rx="1" fill="#F2C811" opacity="0.4" />

      {/* Small gold dot at apex (bottom tip) */}
      <circle cx="50" cy="97" r="3" fill="#F2C811" />
    </svg>
  )
}
