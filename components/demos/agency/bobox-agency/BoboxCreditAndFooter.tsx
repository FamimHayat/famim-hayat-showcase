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
    <div className={`transition-colors duration-500 ${isDark ? "bg-[#0a0a0a]" : "bg-[#fafaf9]"}`}>
      {/* ======================================================== */}
      {/* 1. CREATIVE STUDIO COLOPHON (#credit)                    */}
      {/* ======================================================== */}
      <section
        id="credit"
        className={`py-24 sm:py-32 border-b transition-colors duration-500 scroll-mt-20 ${
          isDark
            ? "border-white/15 bg-[#0a0a0a]"
            : "border-black/15 bg-[#fafaf9]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    isDark ? "bg-white" : "bg-[#0a0a0a]"
                  }`}
                />
                <span
                  className={`text-[10px] font-mono uppercase tracking-[0.25em] font-bold ${
                    isDark ? "text-white" : "text-[#0a0a0a]"
                  }`}
                >
                  STUDIO COLOPHON &amp; ARTISAN ATTRIBUTION
                </span>
                <span className="opacity-55 font-mono text-[10px] tracking-[0.2em]">• LEAD CRAFTSMAN</span>
              </div>
              <h2
                className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter lowercase leading-[0.98] ${
                  isDark ? "text-white text-glow" : "text-[#0a0a0a]"
                }`}
              >
                designed by famim hayat.
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md leading-relaxed ${
                isDark ? "text-[#ededed]/75" : "text-black/70"
              }`}
            >
              Every surface in Byteflyo Agency is sculpted with architectural precision—pairing #0a0a0a obsidian restraint with luminous monochrome typography and sub-millisecond interaction feedback.
            </p>
          </div>

          {/* Colophon Card Container */}
          <div
            className={`rounded-none border p-8 sm:p-12 transition-all duration-500 relative overflow-hidden ${
              isDark
                ? "bg-black/90 border-white/25"
                : "bg-white border-black/20"
            }`}
          >
            {/* Ambient Corner Radial Mesh */}
            <div
              className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none -z-0 transition-opacity duration-700 ${
                isDark ? "bg-white/10 opacity-30" : "bg-black/5 opacity-40"
              }`}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Framed Portrait Badge OR Architectural FH Monogram Frame */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center">
                <div className="relative group">
                  {/* Subtle Exterior Corner Drafting Crosshairs */}
                  <span className="absolute -top-2.5 -left-2.5 text-xs font-mono select-none opacity-65">+</span>
                  <span className="absolute -top-2.5 -right-2.5 text-xs font-mono select-none opacity-65">+</span>
                  <span className="absolute -bottom-2.5 -left-2.5 text-xs font-mono select-none opacity-65">+</span>
                  <span className="absolute -bottom-2.5 -right-2.5 text-xs font-mono select-none opacity-65">+</span>

                  {designerCredit.designerImage ? (
                    /* Framed Portrait Badge When designerImage is provided */
                    <div
                      className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-none border p-1.5 transition-all duration-500 group-hover:scale-[1.02] ${
                        isDark
                          ? "bg-[#0a0a0a] border-white/40"
                          : "bg-white border-black/40"
                      }`}
                    >
                      <div className="w-full h-full rounded-none overflow-hidden relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={designerCredit.designerImage}
                          alt={designerCredit.name}
                          className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                      </div>
                      {/* Live Badge Overlay */}
                      <div
                        className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-[0.25em] ${
                          isDark ? "bg-white text-[#0a0a0a]" : "bg-[#0a0a0a] text-white"
                        }`}
                      >
                        LEAD CRAFTSMAN
                      </div>
                    </div>
                  ) : (
                    /* Architectural FH Monogram Frame When designerImage is undefined */
                    <div
                      className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-none border transition-all duration-500 p-2.5 group-hover:scale-[1.02] flex flex-col justify-between select-none ${
                        isDark
                          ? "bg-[#0a0a0a] border-white/35 group-hover:border-white/70"
                          : "bg-[#fafaf9] border-black/30 group-hover:border-black/70"
                      }`}
                    >
                      {/* Top Framing Coordinates */}
                      <div className="flex items-center justify-between text-[9px] font-mono opacity-75 px-1 pt-0.5 font-bold">
                        <span>23.8103° N</span>
                        <span>90.4125° E</span>
                      </div>

                      {/* Center Monumental FH Monogram Display */}
                      <div className="flex flex-col items-center justify-center my-auto">
                        <div className="relative">
                          <div
                            className={`absolute inset-0 blur-xl rounded-full ${
                              isDark ? "bg-white/15" : "bg-black/10"
                            }`}
                          />
                          <span
                            className={`relative text-6xl sm:text-7xl font-black tracking-tighter lowercase ${
                              isDark ? "text-white text-glow" : "text-[#0a0a0a]"
                            }`}
                          >
                            {designerCredit.monogram}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono uppercase tracking-[0.25em] opacity-55 font-bold mt-1">
                          STUDIO ATELIER
                        </span>
                      </div>

                      {/* Bottom Blueprint Scale */}
                      <div
                        className={`flex items-center justify-between text-[9px] font-mono border-t pt-1.5 px-1 ${
                          isDark ? "border-white/15 text-[#ededed]/65" : "border-black/15 text-black/65"
                        }`}
                      >
                        <span>EST. 2026</span>
                        <span className="font-bold">SCALE 1:1</span>
                      </div>

                      {/* Verified Badge Pill */}
                      <div
                        className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 whitespace-nowrap ${
                          isDark ? "bg-white text-[#0a0a0a]" : "bg-[#0a0a0a] text-white"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full animate-ping ${
                            isDark ? "bg-[#0a0a0a]" : "bg-white"
                          }`}
                        />
                        <span>VERIFIED LEAD</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Status Indicator Underneath Avatar */}
                <div className="mt-7 text-center sm:text-left lg:text-center">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-semibold border ${
                      isDark
                        ? "bg-black/80 border-white/25 text-[#ededed]"
                        : "bg-black/5 border-black/20 text-[#0a0a0a]"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full animate-pulse ${
                        isDark ? "bg-white" : "bg-[#0a0a0a]"
                      }`}
                    />
                    <span>{designerCredit.statusBadge}</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Artisan Attribution, Design Notes & Action Controls */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  {/* Category Eyebrow & Monogram Pill */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.25em] font-bold px-2.5 py-1 rounded-full border ${
                        isDark
                          ? "bg-white/10 border-white/25 text-white"
                          : "bg-black/5 border-black/20 text-[#0a0a0a]"
                      }`}
                    >
                      <SparklesIcon className="w-3 h-3" />
                      AUTHOR COLOPHON
                    </span>
                    <span className="text-xs font-mono opacity-60">
                      [{designerCredit.location}]
                    </span>
                  </div>

                  {/* Designer Name & Role */}
                  <h3
                    className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold lowercase tracking-tighter ${
                      isDark ? "text-white text-glow-lighter" : "text-[#0a0a0a]"
                    }`}
                  >
                    {designerCredit.name}
                  </h3>
                  <p
                    className={`text-[11px] font-mono mt-1.5 font-bold tracking-[0.25em] uppercase ${
                      isDark ? "text-[#ededed]/80" : "text-black/75"
                    }`}
                  >
                    {designerCredit.role} • ATELIER ARCHITECT
                  </p>

                  {/* Quoted Design Notes */}
                  <div
                    className={`mt-6 p-5 sm:p-6 rounded-none border transition-colors ${
                      isDark
                        ? "bg-[#0a0a0a] border-white/15 text-[#ededed]"
                        : "bg-[#fafaf9] border-black/15 text-[#0a0a0a]"
                    }`}
                  >
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] opacity-70 font-bold block mb-2">
                      LEAD DESIGNER SPECIFICATION NOTES
                    </span>
                    <blockquote className="text-sm sm:text-base italic leading-relaxed">
                      &ldquo;{designerCredit.note}&rdquo;
                    </blockquote>
                    <p
                      className={`text-xs mt-3 leading-relaxed font-sans ${
                        isDark ? "text-[#ededed]/70" : "text-black/65"
                      }`}
                    >
                      Constructed using strict 8-point baseline rhythm, #0a0a0a obsidian tone maps, fluid CSS clamp calculations, and zero layout shift. Designed to prove that technical rigor and visceral minimalism can coexist in seamless harmony.
                    </p>
                  </div>

                  {/* System Architecture Specifications Chips */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div
                      className={`p-3 rounded-none border text-center ${
                        isDark ? "bg-[#0a0a0a] border-white/15" : "bg-white border-black/15"
                      }`}
                    >
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-60 block">
                        TYPOGRAPHY
                      </span>
                      <span className="text-xs font-mono font-bold block mt-0.5 truncate">
                        Plus Jakarta Sans
                      </span>
                    </div>

                    <div
                      className={`p-3 rounded-none border text-center ${
                        isDark ? "bg-[#0a0a0a] border-white/15" : "bg-white border-black/15"
                      }`}
                    >
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-60 block">
                        SURFACES
                      </span>
                      <span className="text-xs font-mono font-bold block mt-0.5 truncate">
                        Obsidian #0a0a0a
                      </span>
                    </div>

                    <div
                      className={`p-3 rounded-none border text-center ${
                        isDark ? "bg-[#0a0a0a] border-white/15" : "bg-white border-black/15"
                      }`}
                    >
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-60 block">
                        PERFORMANCE
                      </span>
                      <span className="text-xs font-mono font-bold block mt-0.5 truncate">
                        100/100 Core Vitals
                      </span>
                    </div>

                    <div
                      className={`p-3 rounded-none border text-center ${
                        isDark ? "bg-[#0a0a0a] border-white/15" : "bg-white border-black/15"
                      }`}
                    >
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-60 block">
                        MOTION
                      </span>
                      <span className="text-xs font-mono font-bold block mt-0.5 truncate">
                        60 FPS CSS Physics
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: Return to 99 Hub (All Demos) & Inquire */}
                <div
                  className={`mt-8 pt-6 border-t flex flex-wrap items-center gap-4 ${
                    isDark ? "border-white/15" : "border-black/15"
                  }`}
                >
                  {/* Primary Return to All Demos Hub Button */}
                  <Link
                    href="/"
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-none text-xs font-mono uppercase font-bold tracking-[0.2em] active:scale-95 transition-all group/hub ${
                      isDark
                        ? "bg-white text-[#0a0a0a] hover:bg-[#ededed]"
                        : "bg-[#0a0a0a] text-white hover:bg-black/85"
                    }`}
                    title="Return to 99 Showcase Hub - All Demos Index"
                  >
                    <span className="transition-transform group-hover/hub:-translate-x-1">←</span>
                    <span>Return to 99 Hub (All Demos)</span>
                  </Link>

                  {/* Direct Consultation Link */}
                  <a
                    href={`mailto:${contact.inquiriesEmail}?subject=Direct%20Inquiry%20from%20Byteflyo%20Agency%20Colophon`}
                    className={`inline-flex items-center gap-2 px-4 py-3 rounded-none text-xs font-mono uppercase font-semibold tracking-[0.15em] border transition-colors ${
                      isDark
                        ? "border-white/25 text-[#ededed] hover:text-white hover:border-white/55 bg-black/80"
                        : "border-black/20 text-[#0a0a0a] hover:text-black hover:border-black/55 bg-white"
                    }`}
                  >
                    <span>Direct Consultation</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>

                  {/* Press / Colophon Inquiry */}
                  <a
                    href={`mailto:${contact.pressEmail}`}
                    className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-none text-xs font-mono uppercase font-semibold tracking-[0.15em] transition-colors ${
                      isDark ? "text-[#ededed]/60 hover:text-white" : "text-black/60 hover:text-black"
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
      {/* 2. COMPACT BYTEFLYO AGENCY FOOTER                        */}
      {/* ======================================================== */}
      <footer
        className={`py-12 sm:py-16 transition-colors duration-500 border-t ${
          isDark
            ? "bg-[#0a0a0a] border-white/15 text-[#ededed]/75"
            : "bg-[#fafaf9] border-black/15 text-black/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b ${
              isDark ? "border-white/15" : "border-black/15"
            }`}
          >
            {/* Left Brand Identity & Monogram */}
            <div className="md:col-span-5 flex items-center gap-3.5">
              <div
                className={`w-9 h-9 rounded-none font-black text-xs flex items-center justify-center tracking-wider border ${
                  isDark
                    ? "bg-white text-[#0a0a0a] border-white"
                    : "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                }`}
              >
                BF
              </div>
              <div>
                <span
                  className={`font-extrabold text-base tracking-tighter lowercase block ${
                    isDark ? "text-white text-glow-lighter" : "text-[#0a0a0a]"
                  }`}
                >
                  {agencyName.toLowerCase()}
                </span>
                <span className="text-[11px] font-mono opacity-65 block">
                  Avant-Garde Digital Design &amp; Motion Engineering Atelier
                </span>
              </div>
            </div>

            {/* Middle Studio Locations & Availability */}
            <div className="md:col-span-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-mono">
              <span className="font-bold">{contact.studioLocation}</span>
              <span className="hidden sm:inline opacity-40">•</span>
              <span className={`font-semibold truncate ${isDark ? "text-white" : "text-[#0a0a0a]"}`}>
                {contact.availability}
              </span>
            </div>

            {/* Right Back to Top & 99 Hub Links */}
            <div className="md:col-span-3 flex items-center md:justify-end gap-4 text-[11px] font-mono font-bold">
              <Link
                href="/"
                className="hover:opacity-75 transition-opacity uppercase tracking-[0.2em]"
              >
                99 Hub Index
              </Link>
              <span className="opacity-40">•</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="hover:opacity-75 transition-opacity uppercase tracking-[0.2em] flex items-center gap-1 cursor-pointer"
              >
                <span>Back to Top</span>
                <span>↑</span>
              </button>
            </div>
          </div>

          {/* Bottom Copyright & Colophon Stamp */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono opacity-60">
            <p>
              © 2026 {agencyName}. All Rights Reserved. Crafted by {designerCredit.name}.
            </p>
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-white" : "bg-[#0a0a0a]"}`} />
              <span>Production Release v2.4 • Next.js 16 + React 19</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BoboxCreditAndFooter;
