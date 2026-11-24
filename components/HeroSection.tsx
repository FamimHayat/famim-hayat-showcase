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
    <section className="relative pt-10 sm:pt-14 pb-8 sm:pb-12 border-b border-black/15 dark:border-white/15 overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Subtle monochrome ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-80 pointer-events-none -z-0 opacity-20 dark:opacity-15 blur-3xl overflow-hidden">
        <div className="w-[560px] h-[240px] bg-gradient-to-tr from-white/25 via-white/10 to-transparent rounded-full mx-auto" />
      </div>

      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Eyebrow Chip */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.25em] bg-black/5 dark:bg-black/80 text-[#0a0a0a] dark:text-white border border-black/20 dark:border-white/25">
            <SparklesIcon className="w-3 h-3" />
            99-Page Master Showcase Hub
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] bg-black/5 dark:bg-white/10 text-[#0a0a0a] dark:text-white text-glow border border-black/15 dark:border-white/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a] dark:bg-white animate-pulse" />
            {liveCount} Live Demo Online
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-black/55 dark:text-white/70">
            Across {categoriesCount} Curated Sectors
          </span>
        </div>

        {/* Main Grid: Headline + Featured Flagship Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Headline Column */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter lowercase text-[#0a0a0a] dark:text-white text-glow-hard leading-[1.02]">
              multi-industry landing page{" "}
              <span className="text-shadow-deep">
                showcase hub.
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-black/70 dark:text-white/80 max-w-2xl leading-relaxed">
              An architectural archive of{" "}
              <strong className="text-[#0a0a0a] dark:text-white font-semibold">
                99 bespoke landing pages
              </strong>{" "}
              spanning 11 distinct industries—from Avant-Garde Agencies to Michelin Dining,
              Aesthetic Dentistry, Haute Couture, and Hypercar Showrooms.
            </p>

            {/* Quick Metrics Strip */}
            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 pt-5 border-t border-black/15 dark:border-white/15 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="font-mono text-base sm:text-lg font-bold text-[#0a0a0a] dark:text-white text-glow">
                  {totalCount}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-black/60 dark:text-white/70">
                  Total Landing Pages
                </span>
              </div>
              <div className="text-black/25 dark:text-white/25">•</div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-base sm:text-lg font-bold text-[#0a0a0a] dark:text-white text-glow">
                  {categoriesCount}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-black/60 dark:text-white/70">
                  Industry Categories
                </span>
              </div>
              <div className="text-black/25 dark:text-white/25">•</div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm sm:text-base font-bold text-[#0a0a0a] dark:text-white text-glow">
                  Obsidian &amp; Glow
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-black/60 dark:text-white/70">
                  Design System
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Showcase Flagship & Designer Attribution */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {/* Live Flagship Callout Box */}
            <div className="p-4 sm:p-5 rounded-none bg-black/[0.02] dark:bg-black/90 border border-black/20 dark:border-white/30 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#0a0a0a] dark:text-white text-glow font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0a0a0a] dark:bg-white animate-pulse" />
                  Featured Live Flagship
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded-full bg-black/10 dark:bg-white/15 text-[#0a0a0a] dark:text-white border border-black/15 dark:border-white/30 font-semibold">
                  Live
                </span>
              </div>

              <h2 className="text-xl font-extrabold tracking-tighter lowercase text-[#0a0a0a] dark:text-white text-glow-hard">
                byteflyo agency
              </h2>
              <p className="text-xs text-black/65 dark:text-white/75 mt-1.5 leading-relaxed">
                Avant-garde digital design & motion engineering studio with deep #0a0a0a obsidian canvas and warm luminous typography.
              </p>

              <div className="mt-4 pt-3 border-t border-black/15 dark:border-white/15 flex items-center justify-between">
                <span className="text-[11px] font-mono text-black/50 dark:text-white/60 truncate mr-2">
                  /demos/agency/bobox-agency
                </span>
                <Link
                  href="/demos/agency/bobox-agency"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.15em] text-[#0a0a0a] dark:text-white text-glow transition-all shrink-0"
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
