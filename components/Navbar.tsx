import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { SparklesIcon, ArrowUpRightIcon } from "./Icons";
import { designerCredit } from "@/data/demos/agency/boboxAgencyData";

export function Navbar({ onOpenCredit }: { onOpenCredit?: () => void }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-xl bg-white/80 dark:bg-[#07080b]/85 border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500/40 rounded-xl p-1"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-600 text-zinc-950 font-black text-sm flex items-center justify-center tracking-wider shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
            {designerCredit.monogram}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <span>99 Showcase Hub</span>
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60">
                11 Sectors
              </span>
            </span>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Curated by {designerCredit.name}
            </span>
          </div>
        </Link>

        {/* Center / Stats Badge */}
        <div className="hidden md:flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 px-3 py-1.5 rounded-full">
          <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            1 Live Flagship
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span>98 In Production</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick link to live Bobox Agency */}
          <Link
            href="/demos/agency/bobox-agency"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300 transition-all duration-200 shadow-sm shadow-amber-500/25 active:scale-95"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-zinc-950" />
            <span className="hidden xs:inline">Bobox Agency</span>
            <span className="xs:hidden">Bobox</span>
            <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-black/15 text-zinc-950">
              Live
            </span>
            <ArrowUpRightIcon className="w-3 h-3" />
          </Link>

          {/* Designer info pill */}
          {onOpenCredit && (
            <button
              type="button"
              onClick={onOpenCredit}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-amber-500/40 hover:text-amber-500 transition-colors"
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
