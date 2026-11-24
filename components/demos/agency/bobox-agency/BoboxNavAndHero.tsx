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
          ? "bg-[#0a0a0a] text-[#ededed]"
          : "bg-[#fafaf9] text-[#0a0a0a]"
      }`}
    >
      {/* ======================================================== */}
      {/* 1. STICKY TOP NAVIGATION BAR                             */}
      {/* ======================================================== */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b nav-custom-shadow ${
          isDark
            ? scrolled
              ? "bg-black/90 border-white/25 backdrop-blur-xl"
              : "bg-black/80 border-white/15 backdrop-blur-md"
            : scrolled
              ? "bg-white/95 border-black/20 backdrop-blur-xl"
              : "bg-white/85 border-black/15 backdrop-blur-md"
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
                  ? "text-[#ededed]/70 hover:text-white"
                  : "text-black/60 hover:text-black"
              }`}
              title="Return to 99 Showcase Hub"
            >
              <span className="transition-transform group-hover:-translate-x-0.5">←</span>
              <span className="hidden sm:inline-block font-sans text-[10px] uppercase tracking-[0.25em]">
                99 Hub
              </span>
            </Link>

            <span className={isDark ? "text-white/25" : "text-black/25"}>/</span>

            {/* BYTEFLYO AGENCY Title */}
            <Link
              href="/demos/agency/bobox-agency"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div
                className={`w-8 h-8 rounded-none font-black text-xs flex items-center justify-center tracking-wider border group-hover:scale-105 transition-transform ${
                  isDark
                    ? "bg-white text-[#0a0a0a] border-white"
                    : "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                }`}
              >
                BF
              </div>
              <span
                className={`text-base sm:text-lg font-extrabold tracking-tighter lowercase ${
                  isDark ? "text-white text-glow-lighter" : "text-[#0a0a0a]"
                }`}
              >
                byteflyo agency
              </span>
              <span
                className={`hidden lg:inline-flex text-[9px] font-mono uppercase tracking-[0.25em] px-2 py-0.5 rounded-full border ${
                  isDark
                    ? "border-white/30 text-white bg-white/10"
                    : "border-black/25 text-[#0a0a0a] bg-black/5"
                }`}
              >
                LIVE
              </span>
            </Link>
          </div>

          {/* Desktop Anchor Navigation Links */}
          <nav
            aria-label="Byteflyo Agency navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-bold tracking-[0.25em] uppercase"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-all duration-200 group focus:outline-none ${
                  isDark
                    ? "text-[#ededed]/70 hover:text-white hover:text-glow-hard"
                    : "text-black/65 hover:text-black"
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                    isDark ? "bg-white" : "bg-[#0a0a0a]"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right Action Controls: Dark/Light Toggle + CTA */}
          <div className="flex items-center gap-3">
            {/* Dark / Light Mode Toggle Button */}
            <button
              type="button"
              onClick={handleToggleTheme}
              className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 focus:outline-none focus:ring-1 ${
                isDark
                  ? "bg-black/80 border-white/25 text-white hover:border-white/50 focus:ring-white/40"
                  : "bg-white border-black/20 text-[#0a0a0a] hover:border-black/50 focus:ring-black/40"
              }`}
              aria-label={`Switch to ${isDark ? "alabaster light" : "deep obsidian dark"} mode`}
              title={`Switch to ${isDark ? "alabaster light" : "deep obsidian dark"} mode`}
            >
              {isDark ? (
                <SunIcon className="w-4 h-4 text-white transition-transform hover:rotate-45" />
              ) : (
                <MoonIcon className="w-4 h-4 text-[#0a0a0a] transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Desktop Initiate Project CTA */}
            <a
              href={`mailto:${boboxAgencyData.contact.inquiriesEmail}`}
              className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-none text-[11px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all border ${
                isDark
                  ? "bg-white text-[#0a0a0a] border-white hover:bg-[#ededed]"
                  : "bg-[#0a0a0a] text-white border-[#0a0a0a] hover:bg-black/85"
              }`}
            >
              <span>Initiate</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Drawer Trigger (< md) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={`md:hidden inline-flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-none border transition-colors focus:outline-none ${
                isDark
                  ? "bg-black/80 border-white/20 text-white"
                  : "bg-white border-black/20 text-[#0a0a0a]"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : isDark ? (
                <>
                  <span className="menu-glow-line block" />
                  <span className="menu-glow-line block" />
                  <span className="menu-glow-line block" />
                </>
              ) : (
                <>
                  <span className="w-7 h-[2.5px] bg-[#0a0a0a] rounded-full block" />
                  <span className="w-7 h-[2.5px] bg-[#0a0a0a] rounded-full block" />
                  <span className="w-7 h-[2.5px] bg-[#0a0a0a] rounded-full block" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer Below md */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-b transition-all duration-300 px-4 py-6 space-y-4 animate-in slide-in-from-top-2 ${
              isDark
                ? "bg-[#0a0a0a] border-white/15 text-white"
                : "bg-[#fafaf9] border-black/15 text-[#0a0a0a]"
            }`}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-none text-xs font-bold tracking-[0.25em] uppercase border border-transparent transition-colors ${
                    isDark
                      ? "text-[#ededed] hover:text-white hover:border-white/25 hover:bg-black/80"
                      : "text-black/75 hover:text-black hover:border-black/20 hover:bg-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div
              className={`pt-4 border-t flex items-center justify-between ${
                isDark ? "border-white/15" : "border-black/15"
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center border ${
                    isDark
                      ? "bg-white/10 text-white border-white/30"
                      : "bg-black/5 text-[#0a0a0a] border-black/20"
                  }`}
                >
                  {designerCredit.monogram}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold leading-tight">{designerCredit.name}</p>
                  <p className="text-[10px] opacity-60 leading-tight font-mono">
                    {designerCredit.role}
                  </p>
                </div>
              </div>

              <a
                href={`mailto:${boboxAgencyData.contact.inquiriesEmail}`}
                className={`px-3.5 py-1.5 rounded-none text-[11px] font-bold tracking-[0.2em] uppercase ${
                  isDark
                    ? "bg-white text-[#0a0a0a] hover:bg-[#ededed]"
                    : "bg-[#0a0a0a] text-white hover:bg-black/85"
                }`}
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
      <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-24 pb-20 sm:pb-28 border-b border-black/15 dark:border-white/15">
        {/* Ambient Monochrome Radial Spotlight */}
        <div
          className={`absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none -z-0 transition-opacity duration-700 ${
            isDark ? "bg-white/10 opacity-35" : "bg-black/10 opacity-20"
          }`}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Bold Lowercase Display Typography & Original Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Category Eyebrow Pill */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-[0.25em] uppercase border ${
                    isDark
                      ? "bg-black/80 text-white border-white/30"
                      : "bg-black/5 text-[#0a0a0a] border-black/20"
                  }`}
                >
                  <SparklesIcon className="w-3.5 h-3.5" />
                  DIGITAL DESIGN &amp; MOTION ATELIER
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-[0.25em] opacity-60">
                  EST. 2026
                </span>
              </div>

              {/* Bold Lowercase Display Headline */}
              <h1
                className={`text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-[0.98] lowercase ${
                  isDark ? "text-white text-glow" : "text-[#0a0a0a]"
                }`}
              >
                <span>sculpting </span>
                <span className={isDark ? "text-glow-hard" : ""}>
                  high-conversion
                </span>
                <br />
                <span>digital artifacts.</span>
              </h1>

              {/* Concise Original Agency Copy for Byteflyo Agency */}
              <p
                className={`mt-6 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl transition-colors ${
                  isDark ? "text-[#ededed]/80" : "text-black/75"
                }`}
              >
                Byteflyo Agency engineers avant-garde digital flagships with kinetic restraint.
                We pair deep #0a0a0a obsidian contrast with razor-focused warm luminous typography,
                transforming ambitious category pioneers into unassailable market authorities.
              </p>

              {/* Action Buttons Strip */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className={`px-6 py-3.5 rounded-none text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all active:scale-95 inline-flex items-center gap-2 border ${
                    isDark
                      ? "bg-white text-[#0a0a0a] border-white hover:bg-[#ededed]"
                      : "bg-[#0a0a0a] text-white border-[#0a0a0a] hover:bg-black/85"
                  }`}
                >
                  <span>Explore Work</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>

                <a
                  href="#capabilities"
                  className={`px-6 py-3.5 rounded-none text-xs sm:text-sm font-bold tracking-[0.2em] uppercase border transition-colors ${
                    isDark
                      ? "border-white/25 text-[#ededed] hover:border-white/60 hover:text-white bg-black/80"
                      : "border-black/20 text-[#0a0a0a] hover:border-black/50 hover:text-black bg-white"
                  }`}
                >
                  View Disciplines
                </a>
              </div>

              {/* Performance & Authority Metrics */}
              <div
                className={`mt-12 pt-6 border-t grid grid-cols-3 gap-4 text-left ${
                  isDark ? "border-white/15" : "border-black/15"
                }`}
              >
                <div>
                  <span
                    className={`font-mono text-xl sm:text-2xl font-black block ${
                      isDark ? "text-white text-glow-lighter" : "text-[#0a0a0a]"
                    }`}
                  >
                    $420M+
                  </span>
                  <span className="text-[10px] opacity-60 uppercase tracking-[0.2em] block font-semibold mt-1">
                    Pipeline Generated
                  </span>
                </div>
                <div>
                  <span
                    className={`font-mono text-xl sm:text-2xl font-black block ${
                      isDark ? "text-white text-glow-lighter" : "text-[#0a0a0a]"
                    }`}
                  >
                    99.4/100
                  </span>
                  <span className="text-[10px] opacity-60 uppercase tracking-[0.2em] block font-semibold mt-1">
                    Lighthouse Score
                  </span>
                </div>
                <div>
                  <span
                    className={`font-mono text-xl sm:text-2xl font-black block ${
                      isDark ? "text-white text-glow-lighter" : "text-[#0a0a0a]"
                    }`}
                  >
                    &lt;14ms
                  </span>
                  <span className="text-[10px] opacity-60 uppercase tracking-[0.2em] block font-semibold mt-1">
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
                    isDark ? "border-white/20" : "border-black/20"
                  }`}
                />
                <div
                  className={`absolute inset-6 rounded-full border transition-colors duration-500 pointer-events-none ${
                    isDark ? "border-white/15" : "border-black/15"
                  }`}
                />

                {/* Master Bespoke Geometric Sculptural SVG Graphic */}
                <svg
                  viewBox="0 0 500 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-2xl select-none"
                  aria-label="Byteflyo Agency kinetic sculptural monogram graphic"
                  role="img"
                >
                  <defs>
                    <linearGradient id="sculptureGlowGrad1" x1="50" y1="50" x2="450" y2="450" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor={isDark ? "#ffffff" : "#0a0a0a"} />
                      <stop offset="50%" stopColor={isDark ? "#f5efe6" : "#27272a"} />
                      <stop offset="100%" stopColor={isDark ? "#a1a1aa" : "#52525b"} />
                    </linearGradient>

                    <linearGradient id="sculptureGlowGrad2" x1="450" y1="100" x2="100" y2="450" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor={isDark ? "#ffffff" : "#18181b"} />
                      <stop offset="50%" stopColor={isDark ? "#ededed" : "#3f3f46"} />
                      <stop offset="100%" stopColor={isDark ? "#3f3f46" : "#71717a"} />
                    </linearGradient>

                    <linearGradient id="sculptureObsidianGrad" x1="120" y1="100" x2="380" y2="400" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor={isDark ? "#1a1a1a" : "#e4e4e7"} />
                      <stop offset="60%" stopColor={isDark ? "#111111" : "#d4d4d8"} />
                      <stop offset="100%" stopColor={isDark ? "#0a0a0a" : "#a1a1aa"} />
                    </linearGradient>

                    <linearGradient id="sculptureFacetDark" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={isDark ? "#262626" : "#f4f4f5"} />
                      <stop offset="100%" stopColor={isDark ? "#0a0a0a" : "#d4d4d8"} />
                    </linearGradient>

                    <filter id="warmGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="12" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Backplate Architectural Crosshairs */}
                  <g opacity={isDark ? "0.2" : "0.25"} stroke="currentColor">
                    <line x1="250" y1="20" x2="250" y2="480" strokeWidth="1" strokeDasharray="4 6" />
                    <line x1="20" y1="250" x2="480" y2="250" strokeWidth="1" strokeDasharray="4 6" />
                    <circle cx="250" cy="250" r="190" strokeWidth="1" strokeDasharray="2 4" />
                    <circle cx="250" cy="250" r="140" strokeWidth="1" />
                  </g>

                  {/* Interlocking Prism 1: Outer Hexagonal Kinetic Frame */}
                  <polygon
                    points="250,50 410,140 410,360 250,450 90,360 90,140"
                    fill="url(#sculptureObsidianGrad)"
                    stroke={isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)"}
                    strokeWidth="1.5"
                    opacity="0.95"
                  />

                  {/* Outer Isometric Facets */}
                  <polygon
                    points="250,50 410,140 250,250"
                    fill="url(#sculptureGlowGrad1)"
                    opacity="0.22"
                  />
                  <polygon
                    points="410,140 410,360 250,250"
                    fill="url(#sculptureFacetDark)"
                    opacity="0.85"
                  />
                  <polygon
                    points="410,360 250,450 250,250"
                    fill="url(#sculptureGlowGrad2)"
                    opacity="0.3"
                  />
                  <polygon
                    points="250,450 90,360 250,250"
                    fill="url(#sculptureFacetDark)"
                    opacity="0.9"
                  />
                  <polygon
                    points="90,360 90,140 250,250"
                    fill="url(#sculptureGlowGrad1)"
                    opacity="0.35"
                  />
                  <polygon
                    points="90,140 250,50 250,250"
                    fill="url(#sculptureFacetDark)"
                    opacity="0.75"
                  />

                  {/* Interlocking Polyhedron Core */}
                  <g filter="url(#warmGlow)">
                    <polygon
                      points="250,110 370,180 370,320 250,390 130,320 130,180"
                      fill="none"
                      stroke="url(#sculptureGlowGrad1)"
                      strokeWidth="2.5"
                    />
                  </g>

                  {/* Inner Refractive Obsidian Core Diamonds */}
                  <polygon
                    points="250,140 330,250 250,360 170,250"
                    fill={isDark ? "#0a0a0a" : "#fafaf9"}
                    stroke="url(#sculptureGlowGrad2)"
                    strokeWidth="2"
                  />

                  {/* Floating Kinetic Axis Lines */}
                  <line x1="250" y1="110" x2="250" y2="390" stroke={isDark ? "#ffffff" : "#0a0a0a"} strokeWidth="1.5" opacity="0.8" />
                  <line x1="130" y1="180" x2="370" y2="320" stroke={isDark ? "#ededed" : "#27272a"} strokeWidth="1.2" opacity="0.55" />
                  <line x1="130" y1="320" x2="370" y2="180" stroke={isDark ? "#ededed" : "#27272a"} strokeWidth="1.2" opacity="0.55" />

                  {/* Focal Center Singularity */}
                  <circle cx="250" cy="250" r="14" fill="url(#sculptureGlowGrad1)" filter="url(#warmGlow)" />
                  <circle cx="250" cy="250" r="6" fill={isDark ? "#ffffff" : "#fafaf9"} />

                  {/* Vector Vertices */}
                  <circle cx="250" cy="50" r="4" fill={isDark ? "#ffffff" : "#0a0a0a"} />
                  <circle cx="410" cy="140" r="4" fill={isDark ? "#ededed" : "#27272a"} />
                  <circle cx="410" cy="360" r="4" fill={isDark ? "#ededed" : "#27272a"} />
                  <circle cx="250" cy="450" r="4" fill={isDark ? "#ffffff" : "#0a0a0a"} />
                  <circle cx="90" cy="360" r="4" fill={isDark ? "#ededed" : "#27272a"} />
                  <circle cx="90" cy="140" r="4" fill={isDark ? "#ededed" : "#27272a"} />

                  {/* Outer Orbital Satellite Points */}
                  <circle cx="250" cy="20" r="2.5" fill={isDark ? "#ffffff" : "#0a0a0a"} />
                  <circle cx="480" cy="250" r="2.5" fill={isDark ? "#ffffff" : "#0a0a0a"} />
                  <circle cx="250" cy="480" r="2.5" fill={isDark ? "#ffffff" : "#0a0a0a"} />
                  <circle cx="20" cy="250" r="2.5" fill={isDark ? "#ffffff" : "#0a0a0a"} />
                </svg>

                {/* Floating Sculptural Legend Badge */}
                <div
                  className={`absolute -bottom-2 right-4 px-3.5 py-1.5 rounded-full border backdrop-blur-md flex items-center gap-2 ${
                    isDark
                      ? "bg-black/90 border-white/30 text-[#ededed]"
                      : "bg-white/95 border-black/25 text-[#0a0a0a]"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full animate-pulse ${
                      isDark ? "bg-white" : "bg-[#0a0a0a]"
                    }`}
                  />
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-semibold">
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
