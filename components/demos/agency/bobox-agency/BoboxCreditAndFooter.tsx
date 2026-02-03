"use client";

import React from "react";
import Link from "next/link";
import {
  designerCredit,
  boboxAgencyData,
} from "@/data/demos/agency/boboxAgencyData";
import { ArrowUpRightIcon, SparklesIcon } from "@/components/Icons";

interface BoboxCreditAndFooterProps {
  theme?: "dark" | "light";
}

export function BoboxCreditAndFooter({ theme = "dark" }: BoboxCreditAndFooterProps) {
  const isDark = theme === "dark";
  const { agencyName, contact } = boboxAgencyData;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={`transition-colors duration-500 ${isDark ? "bg-[#0c0c0c]" : "bg-[#f7f5f0]"}`}>
      {/* ======================================================== */}
      {/* 1. CREATIVE STUDIO COLOPHON (#credit)                    */}
      {/* ======================================================== */}
      <section
        id="credit"
        className={`py-24 sm:py-32 border-b transition-colors duration-500 scroll-mt-20 ${
          isDark
            ? "border-[#1f2438]/80 bg-[#0c0c0c]"
            : "border-[#e5e0d4] bg-[#f7f5f0]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-amber-500 dark:text-amber-400 font-bold">
                  STUDIO COLOPHON & ARTISAN ATTRIBUTION
                </span>
                <span className="text-zinc-500 font-mono text-xs">• LEAD CRAFTSMAN</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[0.98]">
                DESIGNED BY FAMIM HAYAT.
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md leading-relaxed ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Every surface in Bobox Agency is sculpted with architectural precision—pairing obsidian restraint with luminous amber-gold typography and sub-millisecond interaction feedback.
            </p>
          </div>

          {/* Colophon Card Container */}
          <div
            className={`rounded-3xl border p-8 sm:p-12 transition-all duration-500 relative overflow-hidden ${
              isDark
                ? "bg-gradient-to-br from-[#121522] via-[#0e111a] to-[#07090e] border-[#1f2438] shadow-2xl shadow-black/60"
                : "bg-gradient-to-br from-white via-[#fcfbf9] to-[#f4efe6] border-[#e5e0d4] shadow-2xl shadow-zinc-900/5"
            }`}
          >
            {/* Ambient Corner Radial Mesh */}
            <div
              className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none -z-0 transition-opacity duration-700 ${
                isDark ? "bg-amber-500/10 opacity-70" : "bg-amber-500/15 opacity-40"
              }`}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Framed Portrait Badge OR Architectural FH Monogram Frame */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center">
                <div className="relative group">
                  {/* Subtle Exterior Corner Drafting Crosshairs */}
                  <span className="absolute -top-2.5 -left-2.5 text-amber-500 text-xs font-mono select-none">
                    +
                  </span>
                  <span className="absolute -top-2.5 -right-2.5 text-amber-500 text-xs font-mono select-none">
                    +
                  </span>
                  <span className="absolute -bottom-2.5 -left-2.5 text-amber-500 text-xs font-mono select-none">
                    +
                  </span>
                  <span className="absolute -bottom-2.5 -right-2.5 text-amber-500 text-xs font-mono select-none">
                    +
                  </span>

                  {designerCredit.designerImage ? (
                    /* Framed Portrait Badge When designerImage is provided */
                    <div
                      className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl border-2 p-1.5 transition-all duration-500 group-hover:scale-[1.02] ${
                        isDark
                          ? "bg-[#161928] border-amber-500/50 shadow-xl shadow-amber-500/10"
                          : "bg-white border-amber-600/50 shadow-xl shadow-zinc-900/10"
                      }`}
                    >
                      <div className="w-full h-full rounded-xl overflow-hidden relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={designerCredit.designerImage}
                          alt={designerCredit.name}
                          className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                      </div>
                      {/* Live Badge Overlay */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-amber-500 text-zinc-950 shadow-md">
                        LEAD CRAFTSMAN
                      </div>
                    </div>
                  ) : (
                    /* Architectural FH Monogram Frame When designerImage is undefined */
                    <div
                      className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl border-2 transition-all duration-500 p-2 group-hover:scale-[1.02] flex flex-col justify-between select-none ${
                        isDark
                          ? "bg-gradient-to-br from-[#181d2c] via-[#121520] to-[#07090e] border-amber-500/40 shadow-2xl shadow-amber-500/15 group-hover:border-amber-400"
                          : "bg-gradient-to-br from-white via-[#fcfbf9] to-[#ece5d8] border-amber-600/40 shadow-2xl shadow-zinc-900/10 group-hover:border-amber-500"
                      }`}
                    >
                      {/* Top Framing Coordinates */}
                      <div className="flex items-center justify-between text-[9px] font-mono text-amber-500/80 px-2 pt-1 font-bold">
                        <span>23.8103° N</span>
                        <span>90.4125° E</span>
                      </div>

                      {/* Center Monumental FH Monogram Display */}
                      <div className="flex flex-col items-center justify-center my-auto">
                        <div className="relative">
                          {/* Ambient Monogram Glow */}
                          <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full" />
                          <span className="relative text-6xl sm:text-7xl font-black font-serif italic tracking-tighter bg-gradient-to-br from-amber-400 via-amber-300 to-amber-600 bg-clip-text text-transparent drop-shadow-md">
                            {designerCredit.monogram}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 font-bold mt-1">
                          STUDIO ATELIER
                        </span>
                      </div>

                      {/* Bottom Blueprint Scale */}
                      <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 border-t border-inherit pt-1.5 px-2">
                        <span>EST. 2026</span>
                        <span className="text-amber-500 font-bold">SCALE 1:1</span>
                      </div>

                      {/* Verified Badge Pill */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest bg-amber-500 text-zinc-950 shadow-md flex items-center gap-1.5 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-ping" />
                        <span>VERIFIED LEAD</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Status Indicator Underneath Avatar */}
                <div className="mt-7 text-center sm:text-left lg:text-center">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-semibold border ${
                      isDark
                        ? "bg-[#141724] border-[#25293d] text-amber-400"
                        : "bg-[#f4efe6] border-[#e0dad0] text-amber-700"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{designerCredit.statusBadge}</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Artisan Attribution, Design Notes & Action Controls */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  {/* Category Eyebrow & Monogram Pill */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-500 dark:text-amber-400 font-bold px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                      <SparklesIcon className="w-3.5 h-3.5 text-amber-500" />
                      AUTHOR COLOPHON
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      [{designerCredit.location}]
                    </span>
                  </div>

                  {/* Designer Name & Role */}
                  <h3
                    className={`text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight ${
                      isDark ? "text-white" : "text-[#1a1917]"
                    }`}
                  >
                    {designerCredit.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-amber-500 dark:text-amber-400 mt-1 font-bold tracking-wider uppercase">
                    {designerCredit.role} • ATELIER ARCHITECT
                  </p>

                  {/* Quoted Design Notes */}
                  <div
                    className={`mt-6 p-5 sm:p-6 rounded-2xl border transition-colors ${
                      isDark
                        ? "bg-[#090b12] border-[#1f2438] text-zinc-300"
                        : "bg-[#f7f5f0] border-[#e5e0d4] text-zinc-800"
                    }`}
                  >
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold block mb-2">
                      LEAD DESIGNER SPECIFICATION NOTES
                    </span>
                    <blockquote className="text-sm sm:text-base italic leading-relaxed font-serif">
                      &ldquo;{designerCredit.note}&rdquo;
                    </blockquote>
                    <p
                      className={`text-xs mt-3 leading-relaxed font-sans ${
                        isDark ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      Constructed using strict 8-point baseline rhythm, obsidian tone maps, fluid CSS clamp calculations, and zero layout shift. Designed to prove that technical rigor and visceral luxury can coexist in seamless harmony.
                    </p>
                  </div>

                  {/* System Architecture Specifications Chips */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div
                      className={`p-3 rounded-xl border text-center ${
                        isDark ? "bg-[#141724] border-[#25293d]" : "bg-white border-[#e0dad0]"
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                        TYPOGRAPHY
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-500 block mt-0.5 truncate">
                        Inter / Serif / Mono
                      </span>
                    </div>

                    <div
                      className={`p-3 rounded-xl border text-center ${
                        isDark ? "bg-[#141724] border-[#25293d]" : "bg-white border-[#e0dad0]"
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                        SURFACES
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-500 block mt-0.5 truncate">
                        Obsidian / Alabaster
                      </span>
                    </div>

                    <div
                      className={`p-3 rounded-xl border text-center ${
                        isDark ? "bg-[#141724] border-[#25293d]" : "bg-white border-[#e0dad0]"
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                        PERFORMANCE
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-500 block mt-0.5 truncate">
                        100/100 Core Vitals
                      </span>
                    </div>

                    <div
                      className={`p-3 rounded-xl border text-center ${
                        isDark ? "bg-[#141724] border-[#25293d]" : "bg-white border-[#e0dad0]"
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                        MOTION
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-500 block mt-0.5 truncate">
                        60 FPS CSS Physics
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: Return to 99 Hub (All Demos) & Inquire */}
                <div className="mt-8 pt-6 border-t border-inherit flex flex-wrap items-center gap-4">
                  {/* Primary Return to All Demos Hub Button */}
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono uppercase font-bold tracking-wider bg-amber-500 text-zinc-950 hover:bg-amber-400 active:scale-95 transition-all shadow-md shadow-amber-500/25 group/hub"
                    title="Return to 99 Showcase Hub - All Demos Index"
                  >
                    <span className="transition-transform group-hover/hub:-translate-x-1">←</span>
                    <span>Return to 99 Hub (All Demos)</span>
                  </Link>

                  {/* Direct Consultation Link */}
                  <a
                    href={`mailto:${contact.inquiriesEmail}?subject=Direct%20Inquiry%20from%20Bobox%20Colophon`}
                    className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-mono uppercase font-semibold border transition-colors ${
                      isDark
                        ? "border-[#25293d] text-zinc-300 hover:text-white hover:border-amber-500/50 bg-[#141724]"
                        : "border-[#e0dad0] text-zinc-800 hover:text-zinc-950 hover:border-amber-600/50 bg-white"
                    }`}
                  >
                    <span>Direct Consultation</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5 text-amber-500" />
                  </a>

                  {/* Press / Colophon Inquiry */}
                  <a
                    href={`mailto:${contact.pressEmail}`}
                    className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-mono uppercase font-semibold transition-colors ${
                      isDark ? "text-zinc-500 hover:text-zinc-300" : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    <span>Press Deck</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. COMPACT BOBOX AGENCY FOOTER                           */}
      {/* ======================================================== */}
      <footer
        className={`py-12 sm:py-16 transition-colors duration-500 border-t ${
          isDark
            ? "bg-[#07080b] border-[#1f2438] text-zinc-400"
            : "bg-[#ece7db] border-[#e0dad0] text-zinc-600"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-inherit">
            {/* Left Brand Identity & Monogram */}
            <div className="md:col-span-5 flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-zinc-950 font-black text-xs flex items-center justify-center tracking-wider shadow-md shadow-amber-500/20">
                BX
              </div>
              <div>
                <span className="font-black text-sm tracking-widest uppercase block text-inherit">
                  {agencyName}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 block">
                  Avant-Garde Digital Design & Motion Engineering Atelier
                </span>
              </div>
            </div>

            {/* Middle Studio Locations & Availability */}
            <div className="md:col-span-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-mono">
              <span className="font-bold text-zinc-400 dark:text-zinc-300">
                {contact.studioLocation}
              </span>
              <span className="hidden sm:inline text-zinc-500">•</span>
              <span className="text-amber-500 dark:text-amber-400 font-semibold truncate">
                {contact.availability}
              </span>
            </div>

            {/* Right Back to Top & 99 Hub Links */}
            <div className="md:col-span-3 flex items-center md:justify-end gap-4 text-xs font-mono font-bold">
              <Link
                href="/"
                className="hover:text-amber-500 transition-colors uppercase tracking-wider"
              >
                99 Hub Index
              </Link>
              <span>•</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="hover:text-amber-500 transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer"
              >
                <span>Back to Top</span>
                <span>↑</span>
              </button>
            </div>
          </div>

          {/* Bottom Copyright & Colophon Stamp */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
            <p>
              © 2026 {agencyName}. All Rights Reserved. Crafted by {designerCredit.name}.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Production Release v2.4 • Next.js 16 + React 19</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BoboxCreditAndFooter;
