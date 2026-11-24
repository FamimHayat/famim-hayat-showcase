import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { SparklesIcon, ArrowUpRightIcon } from "./Icons";
import { designerCredit } from "@/data/demos/agency/boboxAgencyData";

export function Navbar({ onOpenCredit }: { onOpenCredit?: () => void }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-xl bg-white/90 dark:bg-black/90 border-black/15 dark:border-white/15 nav-custom-shadow transition-colors duration-200">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-black/40 dark:focus:ring-white/40 rounded-none p-1"
        >
          <div className="w-9 h-9 rounded-none bg-black dark:bg-white text-white dark:text-[#0a0a0a] font-black text-sm flex items-center justify-center tracking-wider border border-black/20 dark:border-white/40 group-hover:scale-105 transition-transform duration-200">
            {designerCredit.monogram}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tighter lowercase text-[#0a0a0a] dark:text-white text-glow-hard flex items-center gap-2">
              <span>99 showcase hub</span>
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-[0.25em] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/80 border border-black/15 dark:border-white/20">
                11 Sectors
              </span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-black/55 dark:text-white/60">
              Curated by {designerCredit.name}
            </span>
          </div>
        </Link>

        {/* Center / Stats Badge */}
        <div className="hidden md:flex items-center gap-2.5 text-[11px] font-medium text-black/70 dark:text-white/80 bg-black/5 dark:bg-black/80 border border-black/15 dark:border-white/20 px-3.5 py-1.5 rounded-full">
          <span className="inline-flex items-center gap-1.5 text-[#0a0a0a] dark:text-white text-glow font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/50 dark:bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white"></span>
            </span>
            1 Live Flagship
          </span>
          <span className="text-black/25 dark:text-white/25">•</span>
          <span className="uppercase tracking-[0.2em] text-[10px] text-black/60 dark:text-white/70">98 In Production</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick link to live Byteflyo Agency */}
          <Link
            href="/demos/agency/bobox-agency"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-bold tracking-tight lowercase bg-[#0a0a0a] text-white dark:bg-black/90 dark:text-white hover:bg-black/85 dark:hover:border-white/60 border border-black/20 dark:border-white/40 text-glow-hard transition-all duration-200 active:scale-95"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-white" />
            <span className="hidden xs:inline">byteflyo agency</span>
            <span className="xs:hidden">byteflyo</span>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-1.5 py-0.2 rounded-full bg-white/15 text-white">
              Live
            </span>
            <ArrowUpRightIcon className="w-3 h-3" />
          </Link>

          {/* Designer info pill */}
          {onOpenCredit && (
            <button
              type="button"
              onClick={onOpenCredit}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-[0.2em] border border-black/15 dark:border-white/20 text-black/75 dark:text-[#ededed]/80 hover:border-black/50 dark:hover:border-white/50 hover:text-black dark:hover:text-white transition-colors"
            >
              <span>{designerCredit.name}</span>
            </button>
          )}

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
