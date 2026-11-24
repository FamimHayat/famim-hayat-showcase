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
      className={`min-h-screen transition-colors duration-500 scroll-smooth selection:bg-[#ededed] selection:text-[#0a0a0a] ${
        isDark
          ? "bg-[#0a0a0a] text-[#ededed]"
          : "bg-[#fafaf9] text-[#0a0a0a]"
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
          isDark ? "border-white/15 bg-[#0a0a0a]" : "border-black/15 bg-[#fafaf9]"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className={`text-[11px] font-mono uppercase tracking-[0.25em] font-bold ${
              isDark ? "text-white text-glow-hard" : "text-[#0a0a0a]"
            }`}
          >
            {manifesto.title}
          </span>
          <blockquote
            className={`mt-8 text-2xl sm:text-4xl font-extrabold tracking-tighter lowercase leading-snug ${
              isDark ? "text-white text-glow" : "text-[#0a0a0a]"
            }`}
          >
            &ldquo;{manifesto.quote}&rdquo;
          </blockquote>
          <p
            className={`mt-4 text-[11px] font-mono uppercase font-semibold tracking-[0.25em] ${
              isDark ? "text-[#ededed]/75" : "text-black/65"
            }`}
          >
            — {manifesto.author}
          </p>

          <div
            className={`mt-12 space-y-4 text-xs sm:text-sm text-left max-w-2xl mx-auto leading-relaxed border-t pt-8 ${
              isDark
                ? "border-white/15 text-[#ededed]/75"
                : "border-black/15 text-black/70"
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
            ? "border-white/15 bg-[#0a0a0a]"
            : "border-black/15 bg-[#f4f4f2]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <span
                className={`text-[10px] font-mono uppercase tracking-[0.25em] font-bold ${
                  isDark ? "text-[#ededed]/70" : "text-black/60"
                }`}
              >
                Intelligence &amp; Theory
              </span>
              <h2
                className={`text-3xl sm:text-5xl font-extrabold tracking-tighter lowercase mt-2 ${
                  isDark ? "text-white text-glow" : "text-[#0a0a0a]"
                }`}
              >
                the journal.
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-sm ${
                isDark ? "text-[#ededed]/70" : "text-black/65"
              }`}
            >
              Original essays on layout physics, neurobiology of dark surfaces, and design engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journalItems.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-none border transition-colors flex flex-col justify-between ${
                  isDark
                    ? "bg-black/80 border-white/15 hover:border-white/50"
                    : "bg-white border-black/15 hover:border-black/50"
                }`}
              >
                <div>
                  <div
                    className={`flex items-center justify-between text-[11px] font-mono ${
                      isDark ? "text-[#ededed]/55" : "text-black/55"
                    }`}
                  >
                    <span
                      className={`font-bold uppercase tracking-[0.2em] ${
                        isDark ? "text-white" : "text-[#0a0a0a]"
                      }`}
                    >
                      {item.category}
                    </span>
                    <span>{item.date} • {item.readTime}</span>
                  </div>
                  <h3
                    className={`text-lg font-bold tracking-tight mt-3 transition-all ${
                      isDark
                        ? "text-[#ededed] hover:text-white hover:text-glow-hard"
                        : "text-[#0a0a0a]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                      isDark ? "text-[#ededed]/70" : "text-black/65"
                    }`}
                  >
                    {item.excerpt}
                  </p>
                </div>
                <div
                  className={`mt-6 pt-4 border-t flex items-center justify-between gap-2 ${
                    isDark ? "border-white/15" : "border-black/15"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-none border ${
                          isDark
                            ? "bg-[#0a0a0a] border-white/15 text-[#ededed]/70"
                            : "bg-black/5 border-black/15 text-black/70"
                        }`}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`text-[11px] font-mono font-bold inline-flex items-center gap-1 uppercase tracking-[0.2em] shrink-0 ${
                      isDark ? "text-white" : "text-[#0a0a0a]"
                    }`}
                  >
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
