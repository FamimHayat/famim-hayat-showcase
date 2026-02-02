import React from "react";
import Link from "next/link";
import { SparklesIcon, ArrowUpRightIcon } from "./Icons";
import { DesignerCreditBadge } from "./DesignerCreditBadge";

interface HeroSectionProps {
  totalCount: number;
  liveCount: number;
  categoriesCount: number;
}

export function HeroSection({
  totalCount = 99,
  liveCount = 1,
  categoriesCount = 11,
}: HeroSectionProps) {
  return (
    <section className="relative pt-10 sm:pt-14 pb-8 sm:pb-12 overflow-hidden">
      {/* Subtle ambient gradient mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10 opacity-40 dark:opacity-20 blur-3xl overflow-hidden">
        <div className="w-[600px] h-[300px] bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-transparent rounded-full mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Chip */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/25">
            <SparklesIcon className="w-3.5 h-3.5" />
            99-Page Master Showcase Hub
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {liveCount} Live Demo Online
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Across {categoriesCount} Curated Sectors
          </span>
        </div>

        {/* Main Grid: Headline + Designer Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Headline Column */}
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
              Multi-Industry Landing Page{" "}
              <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Showcase Hub.
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              An architectural archive of{" "}
              <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">
                99 bespoke landing pages
              </strong>{" "}
              spanning 11 distinct industries—from Avant-Garde Agencies to Michelin Dining,
              Aesthetic Dentistry, Haute Couture, and Hypercar Showrooms.
            </p>

            {/* Quick Metrics Strip */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-6 pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="font-mono text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {totalCount}
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">Total Landing Pages</span>
              </div>
              <div className="text-zinc-300 dark:text-zinc-700">•</div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {categoriesCount}
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">Industry Categories</span>
              </div>
              <div className="text-zinc-300 dark:text-zinc-700">•</div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-base sm:text-lg font-bold text-amber-500 dark:text-amber-400">
                  Obsidian & Gold
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">Design System</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Showcase Flagship & Designer Attribution */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {/* Live Flagship Callout Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/[0.04] to-transparent border border-amber-500/30 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Featured Live Flagship
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-semibold">
                  Live
                </span>
              </div>

              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Bobox Agency
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                Avant-garde digital design & motion engineering studio with obsidian canvas and amber-gold accents.
              </p>

              <div className="mt-3 pt-3 border-t border-amber-500/20 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  /demos/agency/bobox-agency
                </span>
                <Link
                  href="/demos/agency/bobox-agency"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors"
                >
                  <span>Launch Demo</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Lead Designer Credit Badge */}
            <DesignerCreditBadge showNote={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
