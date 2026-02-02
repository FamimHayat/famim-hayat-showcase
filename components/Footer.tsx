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
    <footer className="w-full border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-[#07080b]/90 transition-colors duration-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Grid: Hub Info, Categories Directory, Designer Statement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-zinc-950 font-black text-sm flex items-center justify-center tracking-wider shadow-md shadow-amber-500/20">
                {designerCredit.monogram}
              </div>
              <span className="text-base font-bold text-zinc-950 dark:text-zinc-100">
                99 Showcase Hub
              </span>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              A comprehensive showcase index designed for 99 landing pages across 11 key industries.
              Engineered with modern Next.js App Router, TypeScript, and Obsidian + Amber-Gold visual hierarchy.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Bobox Agency Live
              </span>
              <Link
                href="/demos/agency/bobox-agency"
                className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
              >
                <span>Visit Flagship</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Col 2: Categories Directory */}
          <div className="lg:col-span-5">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold mb-3">
              11 Industry Sectors (99 Total Demos)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {DEMO_CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onSelectCategory?.(cat.id)}
                  className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 text-left py-1 px-1.5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <span className="truncate">{cat.label}</span>
                  <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 ml-1">
                    ({cat.count})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Designer Attribution */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold mb-3">
                Lead Designer Credit
              </h2>
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#0d0f16] border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 border border-amber-500/40 text-xs font-bold flex items-center justify-center">
                    {designerCredit.monogram}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                      {designerCredit.name}
                    </h3>
                    <p className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">
                      {designerCredit.role}
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-2 italic leading-snug">
                  &ldquo;{designerCredit.note}&rdquo;
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-4 self-start text-xs font-semibold text-zinc-500 hover:text-amber-500 dark:hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <span>↑ Back to top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div className="mt-12 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© 2026 99 Showcase Hub. Crafted with original copy, design tokens, and Next.js App Router.</p>
          <div className="flex items-center gap-3">
            <span>Next.js App Router</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span className="text-amber-600 dark:text-amber-400 font-medium">Obsidian & Amber</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
