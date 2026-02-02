"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BoboxNavAndHero } from "@/components/demos/agency/bobox-agency/BoboxNavAndHero";
import {
  boboxAgencyData,
  designerCredit,
} from "@/data/demos/agency/boboxAgencyData";
import { CheckIcon } from "@/components/Icons";

export default function BoboxAgencyPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isDark = theme === "dark";

  const {
    agencyName,
    projects,
    capabilities,
    journalItems,
    manifesto,
    contact,
  } = boboxAgencyData;

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
      {/* Sticky Top Nav & Avant-Garde Editorial Hero */}
      <BoboxNavAndHero theme={theme} onThemeToggle={toggleTheme} />

      {/* ======================================================== */}
      {/* 1. SELECTED WORKS SECTION (#work)                         */}
      {/* ======================================================== */}
      <section
        id="work"
        className={`py-24 border-b transition-colors duration-500 scroll-mt-24 ${
          isDark ? "border-[#1f2438]/80 bg-[#0c0c0c]" : "border-[#e5e0d4] bg-[#f7f5f0]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 dark:text-amber-400 font-bold">
                Case Studies & Inventions
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase mt-2">
                Selected Works.
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Each engagement is a bespoke technological and visual artifact designed to capture industry leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className={`group relative rounded-3xl border p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
                  isDark
                    ? "bg-[#11131c] border-[#1f2438] hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5"
                    : "bg-white border-[#e5e0d4] hover:border-amber-600/50 hover:shadow-xl hover:shadow-zinc-900/5"
                }`}
              >
                <div>
                  {/* Top Metadata */}
                  <div
                    className={`flex items-center justify-between text-xs font-mono pb-4 border-b ${
                      isDark
                        ? "text-zinc-500 border-[#1f2438]"
                        : "text-zinc-400 border-[#e5e0d4]"
                    }`}
                  >
                    <span className="font-semibold uppercase tracking-wider">{proj.client}</span>
                    <span className="text-amber-500 dark:text-amber-400 font-bold">{proj.year}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    className={`text-2xl sm:text-3xl font-bold mt-5 transition-colors uppercase ${
                      isDark
                        ? "text-white group-hover:text-amber-400"
                        : "text-[#1a1917] group-hover:text-amber-600"
                    }`}
                  >
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono uppercase text-amber-500 dark:text-amber-400 mt-1 font-semibold">
                    {proj.category}
                  </p>
                  <p
                    className={`text-sm mt-4 leading-relaxed ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {proj.brief}
                  </p>

                  {/* Deliverables Chips */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {proj.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className={`text-[11px] px-2.5 py-1 rounded-lg border font-medium ${
                          isDark
                            ? "bg-[#161824] border-[#25293d] text-zinc-300"
                            : "bg-[#f4efe6] border-[#e0dad0] text-zinc-800"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Footer */}
                <div
                  className={`mt-8 pt-6 border-t grid grid-cols-3 gap-2 ${
                    isDark ? "border-[#1f2438]" : "border-[#e5e0d4]"
                  }`}
                >
                  {proj.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="font-mono text-xs sm:text-sm font-black text-amber-500 dark:text-amber-400 block truncate">
                        {m.value}
                      </span>
                      <span
                        className={`text-[10px] uppercase tracking-wider truncate block font-medium ${
                          isDark ? "text-zinc-500" : "text-zinc-500"
                        }`}
                      >
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. CAPABILITIES SECTION (#capabilities)                   */}
      {/* ======================================================== */}
      <section
        id="capabilities"
        className={`py-24 border-b transition-colors duration-500 scroll-mt-24 ${
          isDark
            ? "border-[#1f2438]/80 bg-[#08090d]"
            : "border-[#e5e0d4] bg-[#f0ece1]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 dark:text-amber-400 font-bold">
              Core Disciplines
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase mt-2">
              Capabilities.
            </h2>
            <p
              className={`text-xs sm:text-sm mt-2 ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              From foundational design tokens to real-time WebGL canvas shaders and fluid micro-interaction polish.
            </p>
          </div>

          <div className="space-y-6">
            {capabilities.map((cap) => (
              <div
                key={cap.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-colors ${
                  isDark
                    ? "bg-[#11131c] border-[#1f2438] hover:border-amber-500/40"
                    : "bg-white border-[#e5e0d4] hover:border-amber-600/40"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-2">
                    <span className="font-mono text-2xl sm:text-3xl font-black text-amber-500/50">
                      {cap.number}
                    </span>
                  </div>

                  <div className="lg:col-span-6">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">
                      {cap.title}
                    </h3>
                    <p className="text-xs font-mono text-amber-500 dark:text-amber-400 mt-1 font-semibold">
                      {cap.tagline}
                    </p>
                    <p
                      className={`text-xs sm:text-sm mt-3 leading-relaxed ${
                        isDark ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      {cap.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 space-y-2">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider block font-bold">
                      Key Disciplines
                    </span>
                    {cap.disciplines.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        className={`flex items-center gap-2 text-xs font-medium ${
                          isDark ? "text-zinc-300" : "text-zinc-700"
                        }`}
                      >
                        <CheckIcon className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        className={`py-24 border-b transition-colors duration-500 scroll-mt-24 ${
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
      {/* 5. LEAD DESIGNER CREDIT SECTION (#credit)                */}
      {/* ======================================================== */}
      <section
        id="credit"
        className={`py-20 border-b transition-colors duration-500 scroll-mt-24 ${
          isDark ? "border-[#1f2438]/80 bg-[#0c0c0c]" : "border-[#e5e0d4] bg-[#f7f5f0]"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`p-8 rounded-3xl border shadow-2xl relative overflow-hidden ${
              isDark
                ? "bg-gradient-to-br from-[#161928] via-[#11131c] to-[#0c0c0c] border-amber-500/30"
                : "bg-gradient-to-br from-white via-[#fcfbf9] to-[#f4efe6] border-amber-500/30"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Monogram Fallback Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-zinc-950 font-black text-3xl flex items-center justify-center shadow-xl shadow-amber-500/25 flex-shrink-0">
                {designerCredit.monogram}
              </div>

              <div className="flex-1 text-center sm:text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 dark:text-amber-400 font-bold px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30">
                  Lead UI & Frontend Designer
                </span>
                <h3
                  className={`text-2xl font-bold mt-2 uppercase ${
                    isDark ? "text-white" : "text-[#1a1917]"
                  }`}
                >
                  {designerCredit.name}
                </h3>
                <p
                  className={`text-xs sm:text-sm mt-1 ${
                    isDark ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {designerCredit.role} • {designerCredit.location}
                </p>
                <p
                  className={`text-xs sm:text-sm mt-3 italic leading-relaxed ${
                    isDark ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  &ldquo;{designerCredit.note}&rdquo;
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <Link
                    href="/"
                    className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/20"
                  >
                    Return to 99 Hub
                  </Link>
                  <a
                    href={`mailto:${contact.inquiriesEmail}`}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-colors ${
                      isDark
                        ? "border-[#25293d] text-zinc-300 hover:text-white hover:border-amber-500/40"
                        : "border-[#e0dad0] text-zinc-800 hover:text-zinc-950 hover:border-amber-600/40"
                    }`}
                  >
                    Direct Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. AGENCY FOOTER                                         */}
      {/* ======================================================== */}
      <footer
        className={`py-12 transition-colors duration-500 ${
          isDark ? "bg-[#08090d]" : "bg-[#ece7db]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="font-bold tracking-wider uppercase">{agencyName}</span>
            <span>•</span>
            <span className={isDark ? "text-zinc-400" : "text-zinc-600"}>
              {contact.studioLocation}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hover:text-amber-500 transition-colors uppercase tracking-wider font-semibold"
            >
              99 Hub Index
            </Link>
            <span>•</span>
            <span className="text-amber-500 dark:text-amber-400 font-bold uppercase">
              {contact.availability}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
