import React from "react";
import Link from "next/link";
import { DEMO_CATEGORIES } from "@/data/demosRegistry";
import { designerCredit } from "@/data/demos/agency/boboxAgencyData";
import { ArrowUpRightIcon } from "./Icons";

export function Footer({ onSelectCategory }: { onSelectCategory?: (id: string) => void }) {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-black/15 dark:border-white/15 bg-white dark:bg-[#0a0a0a] transition-colors duration-200 mt-20">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        {/* Top Grid: Hub Info, Categories Directory, Designer Statement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-none bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a] font-black text-sm flex items-center justify-center tracking-wider border border-black/20 dark:border-white">
                {designerCredit.monogram}
              </div>
              <span className="text-lg font-extrabold tracking-tighter lowercase text-[#0a0a0a] dark:text-white text-glow-hard">
                99 showcase hub
              </span>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-black/65 dark:text-white/75 leading-relaxed">
              A comprehensive showcase index designed for 99 landing pages across 11 key industries.
              Engineered with modern Next.js App Router, TypeScript, and minimalist-brutalist #0a0a0a + luminous monochrome visual hierarchy.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-semibold bg-black/5 dark:bg-white/10 text-[#0a0a0a] dark:text-white text-glow border border-black/15 dark:border-white/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a] dark:bg-white animate-pulse" />
                Byteflyo Agency Live
              </span>
              <Link
                href="/demos/agency/bobox-agency"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#0a0a0a] dark:text-white text-glow hover:underline"
              >
                <span>Visit Flagship</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Col 2: Categories Directory */}
          <div className="lg:col-span-5">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.25em] text-black/55 dark:text-[#ededed]/55 font-bold mb-3">
              11 Industry Sectors (99 Total Demos)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {DEMO_CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onSelectCategory?.(cat.id)}
                  className="flex items-center justify-between text-xs text-black/70 dark:text-[#ededed]/70 hover:text-black dark:hover:text-white text-left py-1.5 px-2 rounded-none border border-transparent hover:border-black/15 dark:hover:border-white/20 hover:bg-black/5 dark:hover:bg-black/80 transition-colors"
                >
                  <span className="truncate lowercase font-medium">{cat.label}</span>
                  <span className="text-[10px] font-mono text-black/45 dark:text-[#ededed]/45 ml-1">
                    ({cat.count})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Designer Attribution */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h2 className="text-[10px] font-mono uppercase tracking-[0.25em] text-black/55 dark:text-[#ededed]/55 font-bold mb-3">
                Lead Designer Credit
              </h2>
              <div className="p-3.5 rounded-none bg-black/[0.02] dark:bg-black/80 border border-black/15 dark:border-white/15">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 text-[#0a0a0a] dark:text-white border border-black/20 dark:border-white/35 text-xs font-bold flex items-center justify-center">
                    {designerCredit.monogram}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0a0a0a] dark:text-white">
                      {designerCredit.name}
                    </h3>
                    <p className="text-[10px] text-black/60 dark:text-[#ededed]/70 font-medium">
                      {designerCredit.role}
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-black/55 dark:text-[#ededed]/60 mt-2 italic leading-snug">
                  &ldquo;{designerCredit.note}&rdquo;
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-4 self-start text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-black/60 dark:text-[#ededed]/65 hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>↑ Back to top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div className="mt-12 pt-6 border-t border-black/15 dark:border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-black/55 dark:text-[#ededed]/55">
          <p>© 2026 99 Showcase Hub. Crafted with original copy, design tokens, and Next.js App Router.</p>
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span>Next.js App Router</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span className="text-[#0a0a0a] dark:text-white font-semibold">Obsidian &amp; Glow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
