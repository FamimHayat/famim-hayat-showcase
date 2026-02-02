"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { designerCredit, boboxAgencyData } from "@/data/demos/agency/boboxAgencyData";
import { SunIcon, MoonIcon, ArrowUpRightIcon, SparklesIcon } from "@/components/Icons";

interface BoboxNavAndHeroProps {
  theme?: "dark" | "light";
  onThemeToggle?: () => void;
}

export function BoboxNavAndHero({
  theme: externalTheme,
  onThemeToggle: externalOnThemeToggle,
}: BoboxNavAndHeroProps) {
  const [internalTheme, setInternalTheme] = useState<"dark" | "light">("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isControlled = externalTheme !== undefined;
  const currentTheme = isControlled ? externalTheme : internalTheme;
  const isDark = currentTheme === "dark";

  // Handle scroll detection for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleTheme = () => {
    if (externalOnThemeToggle) {
      externalOnThemeToggle();
    } else {
      setInternalTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }
  };

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "CAPABILITIES", href: "#capabilities" },
    { label: "JOURNAL", href: "#journal" },
    { label: "CREDIT", href: "#credit" },
  ];

  return (
    <div
      className={`relative w-full transition-colors duration-500 ${
        isDark
          ? "bg-[#0c0c0c] text-[#f8fafc]"
          : "bg-[#f7f5f0] text-[#1a1917]"
      }`}
    >
      {/* ======================================================== */}
      {/* 1. STICKY TOP NAVIGATION BAR                             */}
      {/* ======================================================== */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          isDark
            ? scrolled
              ? "bg-[#0c0c0c]/90 border-[#1f2438]/80 backdrop-blur-xl shadow-lg shadow-black/40"
              : "bg-[#0c0c0c]/70 border-[#1f2438]/40 backdrop-blur-md"
            : scrolled
              ? "bg-[#f7f5f0]/95 border-[#e5e0d4] backdrop-blur-xl shadow-md shadow-zinc-900/5"
              : "bg-[#f7f5f0]/80 border-[#e5e0d4]/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Left Brand Identifier */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Back to Hub Icon Link */}
            <Link
              href="/"
              className={`group flex items-center gap-1.5 text-xs font-mono transition-colors ${
                isDark
                  ? "text-zinc-400 hover:text-amber-400"
                  : "text-zinc-500 hover:text-amber-600"
              }`}
              title="Return to 99 Showcase Hub"
            >
              <span className="transition-transform group-hover:-translate-x-0.5">←</span>
              <span className="hidden sm:inline-block font-sans text-[11px] uppercase tracking-wider">
                99 Hub
              </span>
            </Link>

            <span className={isDark ? "text-zinc-700" : "text-zinc-300"}>/</span>

            {/* BOBOX AGENCY Title */}
            <Link
              href="/demos/agency/bobox-agency"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-zinc-950 font-black text-xs flex items-center justify-center tracking-wider shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                BX
              </div>
              <span className="text-sm sm:text-base font-black tracking-widest uppercase">
                BOBOX AGENCY
              </span>
              <span className="hidden lg:inline-flex text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded border border-amber-500/30 text-amber-500 dark:text-amber-400 bg-amber-500/10">
                LIVE
              </span>
            </Link>
          </div>

          {/* Desktop Anchor Navigation Links */}
          <nav
            aria-label="Bobox agency navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-bold tracking-widest uppercase"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 group focus:outline-none ${
                  isDark
                    ? "text-zinc-400 hover:text-amber-400"
                    : "text-zinc-600 hover:text-amber-600"
                }`}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Controls: Dark/Light Toggle + CTA */}
          <div className="flex items-center gap-3">
            {/* Dark / Light Mode Toggle Button */}
            <button
              type="button"
              onClick={handleToggleTheme}
              className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 ${
                isDark
                  ? "bg-[#161822] border-[#25293d] text-amber-400 hover:border-amber-500/60 shadow-sm"
                  : "bg-white border-[#e0dad0] text-zinc-800 hover:border-amber-500/60 shadow-sm"
              }`}
              aria-label={`Switch to ${isDark ? "warm alabaster light" : "deep obsidian dark"} mode`}
              title={`Switch to ${isDark ? "warm alabaster light" : "deep obsidian dark"} mode`}
            >
              {isDark ? (
                <SunIcon className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <MoonIcon className="w-4 h-4 text-zinc-700 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Desktop Initiate Project CTA */}
            <a
              href={`mailto:${boboxAgencyData.contact.inquiriesEmail}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase bg-amber-500 text-zinc-950 hover:bg-amber-400 active:scale-95 transition-all shadow-md shadow-amber-500/20"
            >
              <span>Initiate</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5 text-zinc-950" />
            </a>

            {/* Mobile Hamburger Drawer Trigger (< md) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={`md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl border transition-colors focus:outline-none ${
                isDark
                  ? "bg-[#161822] border-[#25293d] text-zinc-300"
                  : "bg-white border-[#e0dad0] text-zinc-800"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer Below md */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-b transition-all duration-300 px-4 py-6 space-y-4 animate-in slide-in-from-top-2 ${
              isDark
                ? "bg-[#0c0c0c] border-[#1f2438] text-white"
                : "bg-[#f7f5f0] border-[#e5e0d4] text-[#1a1917]"
            }`}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-bold tracking-widest uppercase transition-colors ${
                    isDark
                      ? "text-zinc-300 hover:text-amber-400 hover:bg-[#161822]"
                      : "text-zinc-700 hover:text-amber-600 hover:bg-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className={`pt-4 border-t flex items-center justify-between ${
              isDark ? "border-[#1f2438]" : "border-[#e5e0d4]"
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-500 font-bold text-xs flex items-center justify-center border border-amber-500/30">
                  {designerCredit.monogram}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold leading-tight">{designerCredit.name}</p>
                  <p className="text-[10px] text-zinc-500 leading-tight font-mono">
                    {designerCredit.role}
                  </p>
                </div>
              </div>

              <a
                href={`mailto:${boboxAgencyData.contact.inquiriesEmail}`}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-amber-500 text-zinc-950 hover:bg-amber-400"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ======================================================== */}
      {/* 2. AVANT-GARDE EDITORIAL HERO                            */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-24 pb-20 sm:pb-28">
        {/* Ambient Radial Spotlight Mesh */}
        <div
          className={`absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none -z-10 transition-opacity duration-700 ${
            isDark ? "bg-amber-500/10 opacity-60" : "bg-amber-500/15 opacity-40"
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Bold Uppercase Display Typography & Original Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Category Eyebrow Pill */}
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <SparklesIcon className="w-3.5 h-3.5 text-amber-500" />
                  DIGITAL DESIGN & MOTION ATELIER
                </span>
                <span className="hidden sm:inline-block text-[11px] font-mono uppercase text-zinc-500">
                  EST. 2026
                </span>
              </div>

              {/* Bold Uppercase Display Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[0.98] uppercase">
                <span>SCULPTING </span>
                <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  HIGH-CONVERSION
                </span>
                <br />
                <span>DIGITAL ARTIFACTS.</span>
              </h1>

              {/* Concise Original Agency Copy for Bobox Agency */}
              <p
                className={`mt-6 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl transition-colors ${
                  isDark ? "text-zinc-300" : "text-zinc-700"
                }`}
              >
                Bobox Agency engineers avant-garde digital flagships with kinetic restraint.
                We pair deep obsidian contrast with razor-focused amber-gold typography, transforming
                ambitious category pioneers into unassailable market authorities.
              </p>

              {/* Action Buttons Strip */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-widest uppercase bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/25 active:scale-95 inline-flex items-center gap-2"
                >
                  <span>Explore Work</span>
                  <ArrowUpRightIcon className="w-4 h-4 text-zinc-950" />
                </a>

                <a
                  href="#capabilities"
                  className={`px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-widest uppercase border transition-colors ${
                    isDark
                      ? "border-[#25293d] text-zinc-300 hover:border-amber-500/50 hover:text-white bg-[#12141e]/50"
                      : "border-[#e0dad0] text-zinc-800 hover:border-amber-500/50 hover:text-zinc-950 bg-white/70"
                  }`}
                >
                  View Disciplines
                </a>
              </div>

              {/* Performance & Authority Metrics */}
              <div
                className={`mt-12 pt-6 border-t grid grid-cols-3 gap-4 text-left ${
                  isDark ? "border-[#1f2438]" : "border-[#e5e0d4]"
                }`}
              >
                <div>
                  <span className="font-mono text-xl sm:text-2xl font-black text-amber-500 dark:text-amber-400 block">
                    $420M+
                  </span>
                  <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider block font-semibold mt-0.5">
                    Pipeline Generated
                  </span>
                </div>
                <div>
                  <span className="font-mono text-xl sm:text-2xl font-black text-amber-500 dark:text-amber-400 block">
                    99.4/100
                  </span>
                  <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider block font-semibold mt-0.5">
                    Lighthouse Score
                  </span>
                </div>
                <div>
                  <span className="font-mono text-xl sm:text-2xl font-black text-amber-500 dark:text-amber-400 block">
                    &lt;14ms
                  </span>
                  <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider block font-semibold mt-0.5">
                    Interaction Latency
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Geometric SVG Sculptural Graphic */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                {/* Ambient Decorative Orbit Rings */}
                <div
                  className={`absolute inset-0 rounded-full border border-dashed transition-colors duration-500 pointer-events-none animate-[spin_60s_linear_infinite] ${
                    isDark ? "border-amber-500/20" : "border-amber-600/20"
                  }`}
                />
                <div
                  className={`absolute inset-6 rounded-full border transition-colors duration-500 pointer-events-none ${
                    isDark ? "border-[#1f2438]" : "border-[#e5e0d4]"
                  }`}
                />

                {/* Master Bespoke Geometric Sculptural SVG Graphic */}
                <svg
                  viewBox="0 0 500 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-2xl select-none"
                  aria-label="Bobox Agency kinetic sculptural monogram graphic"
                  role="img"
                >
                  <defs>
                    {/* Linear & Radial Gradients for Obsidian and Amber-Gold Prisms */}
                    <linearGradient id="sculptureGoldGrad1" x1="50" y1="50" x2="450" y2="450" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="50%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>

                    <linearGradient id="sculptureGoldGrad2" x1="450" y1="100" x2="100" y2="450" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="40%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#78350f" />
                    </linearGradient>

                    <linearGradient id="sculptureObsidianGrad" x1="120" y1="100" x2="380" y2="400" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor={isDark ? "#1e2235" : "#ded7ca"} />
                      <stop offset="60%" stopColor={isDark ? "#12141f" : "#c4bcae"} />
                      <stop offset="100%" stopColor={isDark ? "#090a10" : "#a89f8f"} />
                    </linearGradient>

                    <linearGradient id="sculptureFacetDark" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={isDark ? "#282d45" : "#e8e3d8"} />
                      <stop offset="100%" stopColor={isDark ? "#0a0b12" : "#999080"} />
                    </linearGradient>

                    {/* Glow filter */}
                    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="14" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Backplate Architectural Crosshairs */}
                  <g opacity={isDark ? "0.2" : "0.3"} stroke="currentColor">
                    <line x1="250" y1="20" x2="250" y2="480" strokeWidth="1" strokeDasharray="4 6" />
                    <line x1="20" y1="250" x2="480" y2="250" strokeWidth="1" strokeDasharray="4 6" />
                    <circle cx="250" cy="250" r="190" strokeWidth="1" strokeDasharray="2 4" />
                    <circle cx="250" cy="250" r="140" strokeWidth="1" />
                  </g>

                  {/* Interlocking Prism 1: Outer Hexagonal Kinetic Frame */}
                  <polygon
                    points="250,50 410,140 410,360 250,450 90,360 90,140"
                    fill="url(#sculptureObsidianGrad)"
                    stroke={isDark ? "#323955" : "#b8af9f"}
                    strokeWidth="1.5"
                    opacity={isDark ? "0.9" : "0.95"}
                  />

                  {/* Outer Isometric Facets */}
                  <polygon
                    points="250,50 410,140 250,250"
                    fill="url(#sculptureGoldGrad1)"
                    opacity="0.35"
                  />
                  <polygon
                    points="410,140 410,360 250,250"
                    fill="url(#sculptureFacetDark)"
                    opacity="0.8"
                  />
                  <polygon
                    points="410,360 250,450 250,250"
                    fill="url(#sculptureGoldGrad2)"
                    opacity="0.45"
                  />
                  <polygon
                    points="250,450 90,360 250,250"
                    fill="url(#sculptureFacetDark)"
                    opacity="0.9"
                  />
                  <polygon
                    points="90,360 90,140 250,250"
                    fill="url(#sculptureGoldGrad1)"
                    opacity="0.55"
                  />
                  <polygon
                    points="90,140 250,50 250,250"
                    fill="url(#sculptureFacetDark)"
                    opacity="0.7"
                  />

                  {/* Interlocking Golden Polyhedron Core */}
                  <g filter="url(#goldGlow)">
                    <polygon
                      points="250,110 370,180 370,320 250,390 130,320 130,180"
                      fill="none"
                      stroke="url(#sculptureGoldGrad1)"
                      strokeWidth="2.5"
                    />
                  </g>

                  {/* Inner Refractive Obsidian Core Diamonds */}
                  <polygon
                    points="250,140 330,250 250,360 170,250"
                    fill={isDark ? "#07080c" : "#f0ece1"}
                    stroke="url(#sculptureGoldGrad2)"
                    strokeWidth="2"
                  />

                  {/* Floating Kinetic Axis Lines */}
                  <line x1="250" y1="110" x2="250" y2="390" stroke="#f59e0b" strokeWidth="2" opacity="0.8" />
                  <line x1="130" y1="180" x2="370" y2="320" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
                  <line x1="130" y1="320" x2="370" y2="180" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6" />

                  {/* Focal Amber-Gold Center Singularity */}
                  <circle cx="250" cy="250" r="14" fill="url(#sculptureGoldGrad1)" filter="url(#goldGlow)" />
                  <circle cx="250" cy="250" r="6" fill="#ffffff" />

                  {/* Golden Vector Vertices */}
                  <circle cx="250" cy="50" r="4" fill="#fbbf24" />
                  <circle cx="410" cy="140" r="4" fill="#f59e0b" />
                  <circle cx="410" cy="360" r="4" fill="#f59e0b" />
                  <circle cx="250" cy="450" r="4" fill="#fbbf24" />
                  <circle cx="90" cy="360" r="4" fill="#f59e0b" />
                  <circle cx="90" cy="140" r="4" fill="#f59e0b" />

                  {/* Outer Orbital Satellite Points */}
                  <circle cx="250" cy="20" r="2.5" fill="#f59e0b" />
                  <circle cx="480" cy="250" r="2.5" fill="#f59e0b" />
                  <circle cx="250" cy="480" r="2.5" fill="#f59e0b" />
                  <circle cx="20" cy="250" r="2.5" fill="#f59e0b" />
                </svg>

                {/* Floating Sculptural Legend Badge */}
                <div
                  className={`absolute -bottom-2 right-4 px-3 py-1.5 rounded-xl border backdrop-blur-md shadow-lg flex items-center gap-2 ${
                    isDark
                      ? "bg-[#0d0f16]/90 border-amber-500/30 text-zinc-300"
                      : "bg-white/95 border-[#e5e0d4] text-zinc-800"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-wider uppercase font-semibold">
                    AXIOM-01 • KINETIC SCULPTURE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BoboxNavAndHero;
