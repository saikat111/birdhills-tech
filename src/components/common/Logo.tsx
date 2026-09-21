import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "white";
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ variant = "dark", className = "", iconOnly = false }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D68BD] rounded-lg transition-transform hover:opacity-95 ${className}`}
      aria-label="Bird Hills Tech - Home"
    >
      {/* Geometric Wing / Ascent Emblem */}
      <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 44 44" fill="none" className="w-full h-full drop-shadow-sm">
          {/* Primary Ascent Wing */}
          <path
            d="M6 34L20 8L26 18L16 34H6Z"
            fill={isWhite ? "#38BDF8" : "#1D68BD"}
            className="transition-colors duration-300"
          />
          {/* Central Peak Anchor */}
          <path
            d="M18 34L28 15L34 25L27 34H18Z"
            fill={isWhite ? "#FFFFFF" : "#0B1730"}
            className="transition-colors duration-300"
          />
          {/* Secondary Forward Momentum */}
          <path
            d="M28 34L35 20L40 29L37 34H28Z"
            fill={isWhite ? "#93C5FD" : "#2563EB"}
            opacity="0.9"
            className="transition-colors duration-300"
          />
          {/* North Star Indicator */}
          <circle cx="20" cy="8" r="2.5" fill={isWhite ? "#60A5FA" : "#1D68BD"} />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span
              className={`font-extrabold tracking-tight text-[18px] sm:text-[20px] transition-colors ${
                isWhite ? "text-white" : "text-[#0B1730]"
              }`}
            >
              BIRD HILLS
            </span>
            <span
              className={`font-semibold tracking-normal text-[15px] sm:text-[17px] ${
                isWhite ? "text-[#38BDF8]" : "text-[#1D68BD]"
              }`}
            >
              TECH
            </span>
          </div>
          <span
            className={`text-[8px] sm:text-[9px] font-semibold tracking-[0.18em] uppercase mt-0.5 transition-colors ${
              isWhite ? "text-slate-400" : "text-[#667085]"
            }`}
          >
            Dubai · Tech × Creative × Growth
          </span>
        </div>
      )}
    </Link>
  );
}
export default Logo;
