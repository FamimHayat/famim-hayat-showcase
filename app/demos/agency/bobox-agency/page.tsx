"use client";

import React, { useState } from "react";
import { BoboxNavAndHero } from "@/components/demos/agency/bobox-agency/BoboxNavAndHero";
import { BoboxWorkAndCapabilities } from "@/components/demos/agency/bobox-agency/BoboxWorkAndCapabilities";
import { BoboxCreditAndFooter } from "@/components/demos/agency/bobox-agency/BoboxCreditAndFooter";
import { boboxAgencyData } from "@/data/demos/agency/boboxAgencyData";

export default function BoboxAgencyPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isDark = theme === "dark";

  const { journalItems, manifesto } = boboxAgencyData;

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 scroll-smooth selection:bg-amber-500 selection:text-black ${
        isDark
          ? "bg-[#0c0c0c] text-[#f8fafc]"
          : "bg-[#f7f5f0] text-[#1a1917]"
      }`}
    >
      {/* 1. Sticky Top Nav & Avant-Garde Editorial Hero */}
      <BoboxNavAndHero theme={theme} onThemeToggle={toggleTheme} />

      {/* 2. 2-Column Selected Work Grid (#work) & Design Capabilities Rows (#capabilities) */}
      <BoboxWorkAndCapabilities theme={theme} />

      {/* ======================================================== */}
      {/* 3. MANIFESTO                                             */}
      {/* ======================================================== */}
      <section
        className={`py-24 border-b transition-colors duration-500 relative overflow-hidden ${
          isDark ? "border-[#1f2438]/80 bg-[#0c0c0c]" : "border-[#e5e0d4] bg-[#f7f5f0]"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 dark:text-amber-400 font-bold">
            {manifesto.title}
          </span>
          <blockquote
            className={`mt-8 text-2xl sm:text-4xl font-serif italic leading-snug ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            &ldquo;{manifesto.quote}&rdquo;
          </blockquote>
          <p className="mt-4 text-xs font-mono text-amber-500 dark:text-amber-400 font-semibold tracking-wider">
            — {manifesto.author}
          </p>

          <div
            className={`mt-12 space-y-4 text-xs sm:text-sm text-left max-w-2xl mx-auto leading-relaxed border-t pt-8 ${
              isDark
                ? "border-[#1f2438] text-zinc-400"
                : "border-[#e5e0d4] text-zinc-600"
            }`}
          >
            {manifesto.paragraphs.map((para, pIdx) => (
              <p key={pIdx}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. THE JOURNAL SECTION (#journal)                        */}
      {/* ======================================================== */}
      <section
        id="journal"
        className={`py-24 border-b transition-colors duration-500 scroll-mt-20 ${
          isDark
            ? "border-[#1f2438]/80 bg-[#08090d]"
            : "border-[#e5e0d4] bg-[#f0ece1]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 dark:text-amber-400 font-bold">
                Intelligence & Theory
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase mt-2">
                The Journal.
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-sm ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Original essays on layout physics, neurobiology of dark surfaces, and design engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journalItems.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-2xl border transition-colors flex flex-col justify-between ${
                  isDark
                    ? "bg-[#11131c] border-[#1f2438] hover:border-amber-500/40"
                    : "bg-white border-[#e5e0d4] hover:border-amber-600/40"
                }`}
              >
                <div>
                  <div
                    className={`flex items-center justify-between text-xs font-mono ${
                      isDark ? "text-zinc-500" : "text-zinc-400"
                    }`}
                  >
                    <span className="text-amber-500 dark:text-amber-400 font-bold uppercase">{item.category}</span>
                    <span>{item.date} • {item.readTime}</span>
                  </div>
                  <h3
                    className={`text-lg font-bold mt-3 transition-colors ${
                      isDark
                        ? "text-white hover:text-amber-400"
                        : "text-[#1a1917] hover:text-amber-600"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {item.excerpt}
                  </p>
                </div>
                <div
                  className={`mt-6 pt-4 border-t flex items-center justify-between ${
                    isDark ? "border-[#1f2438]" : "border-[#e5e0d4]"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          isDark
                            ? "bg-[#161824] text-zinc-400"
                            : "bg-[#f4efe6] text-zinc-600"
                        }`}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-amber-500 dark:text-amber-400 inline-flex items-center gap-1 uppercase tracking-wider">
                    Read Essay →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. STUDIO COLOPHON (#credit) & COMPACT AGENCY FOOTER     */}
      {/* ======================================================== */}
      <BoboxCreditAndFooter theme={theme} />
    </div>
  );
}
