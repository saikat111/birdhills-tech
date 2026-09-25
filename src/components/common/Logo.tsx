import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27] rounded-xl transition-all hover:opacity-95 ${className}`}
      aria-label="Bird Hills Technology - Home"
    >
      {/* Official Bird Hills Logo Badge */}
      <div
        className={`relative h-10 sm:h-11 w-32 sm:w-36 shrink-0 rounded-xl overflow-hidden shadow-xs flex items-center justify-center transition-all ${
          isWhite
            ? "bg-transparent"
            : "bg-[#070B14] border border-[#C59B27]/30 px-2 py-1"
        }`}
      >
        <Image
          src="/images/logo-full.png"
          alt="Bird Hills Technology Logo"
          fill
          priority
          sizes="144px"
          className="object-contain p-1"
        />
      </div>
    </Link>
  );
}

export default Logo;
