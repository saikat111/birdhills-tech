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
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27] rounded-xl transition-all hover:opacity-95 ${className}`}
      aria-label="Bird Hills Technology - Home"
    >
      {/* Official Bird Hills Logo Asset */}
      <div className="relative h-10 sm:h-11 w-10 sm:w-11 shrink-0 rounded-xl overflow-hidden bg-black p-0.5 border border-[#C59B27]/30 shadow-md">
        <Image
          src="/images/logo.png"
          alt="Bird Hills Technology Logo"
          fill
          priority
          sizes="48px"
          className="object-cover object-left"
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1 leading-none">
            <span
              className={`font-black tracking-tight text-[17px] sm:text-[19px] transition-colors ${
                isWhite ? "text-white" : "text-[#0B0F19]"
              }`}
            >
              BIRD <span className="text-[#C59B27]">HILLS</span>
            </span>
            <span className="text-[11px] font-extrabold tracking-wider text-[#C59B27] uppercase">
              TECH
            </span>
          </div>
          <span
            className={`text-[8px] font-bold tracking-[0.22em] uppercase mt-0.5 transition-colors ${
              isWhite ? "text-slate-400" : "text-[#667085]"
            }`}
          >
            Dubai · Technology × Creative × Growth
          </span>
        </div>
      )}
    </Link>
  );
}

export default Logo;
