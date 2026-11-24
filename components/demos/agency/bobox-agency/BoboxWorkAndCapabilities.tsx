"use client";

import React, { useState } from "react";
import {
  boboxProjects,
  boboxCapabilities,
  BoboxProject,
} from "@/data/demos/agency/boboxAgencyData";
import { ArrowUpRightIcon, CheckIcon, CloseIcon, SparklesIcon } from "@/components/Icons";

interface BoboxWorkAndCapabilitiesProps {
  theme?: "dark" | "light";
}

/**
 * Custom bespoke SVG Editorial Artwork components for each of the 6 case studies.
 * Monochrome minimalist-brutalist obsidian + warm glow illustrations with
 * interactive CSS hover transitions and dark/light mode responsiveness.
 */
function ProjectArtwork({ project, isDark }: { project: BoboxProject; isDark: boolean }) {
  const strokeColor = isDark ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.22)";
  const accentPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const accentSoft = isDark ? "#ededed" : "#27272a";
  const bgSurface = isDark ? "#0a0a0a" : "#f4f4f2";
  const metaPrimary = isDark ? "#a1a1aa" : "#52525b";
  const metaSecondary = isDark ? "#71717a" : "#71717a";

  switch (project.id) {
    case "kinetix-chrono":
      return (
        <svg
          viewBox="0 0 400 240"
          fill="none"
          className="w-full h-full select-none"
          role="img"
          aria-label="Kinetix Chrono Escapement"
        >
          <rect width="400" height="240" fill={bgSurface} />

          {/* Blueprint Grid Lines */}
          <line x1="40" y1="120" x2="360" y2="120" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
          <line x1="200" y1="20" x2="200" y2="220" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />

          {/* Outer Bezel & Calibration Circles */}
          <circle cx="200" cy="120" r="92" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
          <circle cx="200" cy="120" r="85" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="4 6" opacity="0.7" />
          <circle cx="200" cy="120" r="70" stroke={accentPrimary} strokeWidth="1.2" opacity="0.35" />

          {/* Rotating Main Balance Wheel & Escapement Teeth on Group Hover */}
          <g className="transition-transform duration-1000 ease-out origin-[200px_120px] group-hover:rotate-45">
            <circle cx="200" cy="120" r="50" stroke={strokeColor} strokeWidth="2" />
            <circle cx="200" cy="120" r="48" stroke={accentPrimary} strokeWidth="1" opacity="0.3" />

            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={deg}
                x1="200"
                y1="120"
                x2={200 + 82 * Math.cos((deg * Math.PI) / 180)}
                y2={120 + 82 * Math.sin((deg * Math.PI) / 180)}
                stroke={deg % 90 === 0 ? accentPrimary : strokeColor}
                strokeWidth={deg % 90 === 0 ? "2.2" : "1"}
                opacity={deg % 90 === 0 ? "0.9" : "0.5"}
              />
            ))}

            <line x1="155" y1="120" x2="245" y2="120" stroke={accentSoft} strokeWidth="1.2" opacity="0.7" />
            <line x1="200" y1="75" x2="200" y2="165" stroke={accentSoft} strokeWidth="1.2" opacity="0.7" />
          </g>

          {/* Escapement Hairspring Spiral */}
          <path
            d="M 200 120 A 5 5 0 0 1 205 120 A 10 10 0 0 1 195 120 A 16 16 0 0 1 216 120 A 22 22 0 0 1 184 120 A 28 28 0 0 1 228 120 A 34 34 0 0 1 172 120"
            stroke={accentPrimary}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.75"
            fill="none"
            className="transition-all duration-700 group-hover:opacity-100"
          />

          {/* Balance Bridge & Pallet Fork */}
          <path
            d="M120 70 L200 120 L280 170"
            stroke={accentPrimary}
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
            className="transition-transform duration-700 origin-[200px_120px] group-hover:-rotate-3"
          />
          <polygon points="190,115 210,115 200,100" fill={accentPrimary} />
          <polygon points="190,125 210,125 200,140" fill={accentPrimary} />

          {/* Center Pivot */}
          <circle cx="200" cy="120" r="8" fill={accentPrimary} opacity="0.9" className="transition-all duration-500 group-hover:scale-110" />
          <circle cx="200" cy="120" r="3" fill={bgSurface} />

          {/* Technical Calibration Markings */}
          <text x="30" y="35" fill={metaPrimary} fontSize="9" fontFamily="monospace">
            ESCAPEMENT: 28,800 VPH • FREQ: 4.0 HZ
          </text>
          <text x="370" y="35" textAnchor="end" fill={accentPrimary} fontSize="9" fontFamily="monospace" fontWeight="bold">
            CAL. BF-992
          </text>
          <text x="30" y="215" fill={metaSecondary} fontSize="9" fontFamily="monospace">
            LATENCY: &lt;14MS • 60FPS WebGL
          </text>
          <text x="370" y="215" textAnchor="end" fill={accentSoft} fontSize="9" fontFamily="monospace">
            SWISS TOLERANCE: ±0.4µ
          </text>
        </svg>
      );

    case "velox-autonomous":
      return (
        <svg
          viewBox="0 0 400 240"
          fill="none"
          className="w-full h-full select-none"
          role="img"
          aria-label="Velox Mission Control HUD"
        >
          <rect width="400" height="240" fill={bgSurface} />

          {/* Radar Sweep Rings */}
          <circle cx="200" cy="120" r="95" stroke={strokeColor} strokeWidth="1" strokeDasharray="3 5" opacity="0.55" />
          <circle cx="200" cy="120" r="65" stroke={strokeColor} strokeWidth="1" opacity="0.75" />
          <circle cx="200" cy="120" r="35" stroke={accentPrimary} strokeWidth="1.5" opacity="0.4" />

          {/* Crosshair Grids */}
          <line x1="80" y1="120" x2="320" y2="120" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 4" />
          <line x1="200" y1="20" x2="200" y2="220" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 4" />

          {/* Animated Sweeping Radar Vector Cone on Hover */}
          <path
            d="M 200 120 L 270 56 A 95 95 0 0 1 295 120 Z"
            fill="url(#velox-sweep-grad)"
            className="transition-transform duration-1000 origin-[200px_120px] group-hover:rotate-90 opacity-60 group-hover:opacity-100"
          />
          <defs>
            <linearGradient id="velox-sweep-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={accentPrimary} stopOpacity="0.28" />
              <stop offset="100%" stopColor={accentPrimary} stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Flight Corridor Geofence Polygon */}
          <polygon
            points="130,60 270,50 310,160 230,195 110,150"
            fill="none"
            stroke={accentPrimary}
            strokeWidth="1.8"
            strokeDasharray="6 3"
            opacity="0.8"
          />

          {/* Autonomous Drone Nodes */}
          <circle cx="160" cy="80" r="4.5" fill={accentSoft} opacity="0.7" />
          <circle cx="240" cy="95" r="5" fill={accentPrimary} className="transition-transform duration-500 group-hover:scale-125" />
          <circle cx="280" cy="150" r="4.5" fill={accentSoft} opacity="0.7" />
          <circle cx="140" cy="140" r="4.5" fill={accentSoft} opacity="0.7" />

          {/* Vector Velocity Line */}
          <line
            x1="240"
            y1="95"
            x2="275"
            y2="135"
            stroke={accentPrimary}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line x1="275" y1="135" x2="310" y2="160" stroke={accentPrimary} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

          {/* HUD Coordinates & Readouts */}
          <text x="30" y="35" fill={metaPrimary} fontSize="9" fontFamily="monospace">
            AIRSPACE: METRO-BERLIN-14 • 60 FPS
          </text>
          <text x="370" y="35" textAnchor="end" fill={accentPrimary} fontSize="9" fontFamily="monospace" fontWeight="bold">
            LAT 52.5200° N
          </text>
          <text x="30" y="215" fill={metaSecondary} fontSize="9" fontFamily="monospace">
            CORRIDOR: 14 METROS VERIFIED
          </text>
          <text x="370" y="215" textAnchor="end" fill={accentPrimary} fontSize="9" fontFamily="monospace" fontWeight="bold">
            TELEMETRY: LOCKED (99.98%)
          </text>
        </svg>
      );

    case "aura-soundworks":
      return (
        <svg
          viewBox="0 0 400 240"
          fill="none"
          className="w-full h-full select-none"
          role="img"
          aria-label="Aura Spatial Audio Synthesizer"
        >
          <rect width="400" height="240" fill={bgSurface} />

          {[
            { x: 60, h: 22 },
            { x: 80, h: 36 },
            { x: 100, h: 54 },
            { x: 120, h: 42 },
            { x: 140, h: 68 },
            { x: 160, h: 84 },
            { x: 180, h: 96 },
            { x: 200, h: 102 },
            { x: 220, h: 80 },
            { x: 240, h: 62 },
            { x: 260, h: 48 },
            { x: 280, h: 34 },
            { x: 300, h: 24 },
            { x: 320, h: 18 },
          ].map((bar, i) => (
            <rect
              key={i}
              x={bar.x}
              y={200 - bar.h}
              width="6"
              height={bar.h}
              fill={accentPrimary}
              fillOpacity={0.12 + (i % 3) * 0.09}
              className="transition-all duration-500 group-hover:fill-opacity-45"
            />
          ))}

          {/* Harmonic Waveforms */}
          <path
            d="M 30,120 Q 70,60 110,120 T 190,120 T 270,120 T 350,120 T 380,120"
            stroke={strokeColor}
            strokeWidth="1.5"
            opacity="0.45"
          />
          <path
            d="M 30,120 Q 80,40 130,120 T 230,120 T 330,120 T 380,120"
            stroke={accentSoft}
            strokeWidth="1.8"
            opacity="0.65"
          />
          <path
            d="M 30,120 Q 90,20 150,120 T 270,120 T 380,120"
            stroke={accentPrimary}
            strokeWidth="2.4"
            strokeLinecap="round"
            className="transition-all duration-500 group-hover:stroke-[3px]"
          />
          <path
            d="M 30,120 Q 100,180 170,120 T 310,120 T 380,120"
            stroke={strokeColor}
            strokeWidth="1.2"
            opacity="0.5"
          />

          {/* Soundstage Nodes */}
          <circle cx="150" cy="120" r="5" fill={accentPrimary} className="transition-transform duration-500 group-hover:scale-125" />
          <circle cx="270" cy="120" r="5" fill={accentPrimary} className="transition-transform duration-500 group-hover:scale-125" />
          <circle cx="210" cy="70" r="4" fill={accentSoft} opacity="0.7" />
          <circle cx="210" cy="170" r="4" fill={accentSoft} opacity="0.7" />
          <line x1="210" y1="70" x2="210" y2="170" stroke={accentSoft} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

          {/* Acoustic Metadata Readouts */}
          <text x="30" y="35" fill={metaPrimary} fontSize="9" fontFamily="monospace">
            BINAURAL SOUNDSTAGE • 32-BIT FLOAT
          </text>
          <text x="370" y="35" textAnchor="end" fill={accentPrimary} fontSize="9" fontFamily="monospace" fontWeight="bold">
            FWA OF THE DAY
          </text>
          <text x="30" y="215" fill={metaSecondary} fontSize="9" fontFamily="monospace">
            44.1 kHz / 8D TOPOGRAPHY
          </text>
          <text x="370" y="215" textAnchor="end" fill={accentSoft} fontSize="9" fontFamily="monospace">
            SYNTH: NODE-ACTIVE
          </text>
        </svg>
      );

    case "solis-infrastructure":
      return (
        <svg
          viewBox="0 0 400 240"
          fill="none"
          className="w-full h-full select-none"
          role="img"
          aria-label="Solis Offshore Wind Topography"
        >
          <rect width="400" height="240" fill={bgSurface} />

          {/* Topographical Depth Isobars */}
          <path d="M 20,80 Q 100,50 180,90 T 340,70 T 390,90" stroke={strokeColor} strokeWidth="1" opacity="0.45" />
          <path d="M 10,130 Q 110,90 200,140 T 350,110 T 395,130" stroke={strokeColor} strokeWidth="1.2" opacity="0.65" />
          <path d="M 15,180 Q 120,130 220,190 T 360,160 T 390,180" stroke={strokeColor} strokeWidth="1" opacity="0.5" />

          {/* Grid Interconnect Lines */}
          <path
            d="M 120,70 L 200,110 L 280,75 L 250,155 L 160,145 Z"
            stroke={accentPrimary}
            strokeWidth="1.2"
            strokeDasharray="3 3"
            opacity="0.7"
            className="transition-all duration-700 group-hover:opacity-100"
          />

          {/* Wind Power Turbine Nodes */}
          {[
            { x: 120, y: 70 },
            { x: 200, y: 110 },
            { x: 280, y: 75 },
            { x: 160, y: 145 },
            { x: 250, y: 155 },
          ].map((pt, i) => (
            <g key={i}>
              <circle cx={pt.x} cy={pt.y} r="7" fill={accentPrimary} opacity="0.18" />
              <circle cx={pt.x} cy={pt.y} r="3" fill={accentPrimary} />
              <line x1={pt.x} y1={pt.y} x2={pt.x} y2={pt.y - 18} stroke={accentSoft} strokeWidth="1.8" />
              <g
                className="transition-transform duration-1000 ease-out origin-center group-hover:rotate-60"
                style={{ transformOrigin: `${pt.x}px ${pt.y - 18}px` }}
              >
                <line x1={pt.x} y1={pt.y - 18} x2={pt.x} y2={pt.y - 28} stroke={accentPrimary} strokeWidth="1.5" strokeLinecap="round" />
                <line x1={pt.x} y1={pt.y - 18} x2={pt.x + 9} y2={pt.y - 13} stroke={accentPrimary} strokeWidth="1.5" strokeLinecap="round" />
                <line x1={pt.x} y1={pt.y - 18} x2={pt.x - 9} y2={pt.y - 13} stroke={accentPrimary} strokeWidth="1.5" strokeLinecap="round" />
              </g>
              <circle cx={pt.x} cy={pt.y - 18} r="1.5" fill={accentPrimary} />
            </g>
          ))}

          <circle cx="200" cy="110" r="10" stroke={accentPrimary} strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />

          {/* Telemetry Readouts */}
          <text x="30" y="35" fill={metaPrimary} fontSize="9" fontFamily="monospace">
            OFFSHORE GRID: 3,400 TURBINES • 1.8 GW
          </text>
          <text x="370" y="35" textAnchor="end" fill={accentPrimary} fontSize="9" fontFamily="monospace" fontWeight="bold">
            99/100 LIGHTHOUSE
          </text>
          <text x="30" y="215" fill={metaSecondary} fontSize="9" fontFamily="monospace">
            $1.8B CAPITAL FACILITATED
          </text>
          <text x="370" y="215" textAnchor="end" fill={accentSoft} fontSize="9" fontFamily="monospace">
            POWER: DISPATCHED (60FPS)
          </text>
        </svg>
      );

    case "monolith-monographs":
      return (
        <svg
          viewBox="0 0 400 240"
          fill="none"
          className="w-full h-full select-none"
          role="img"
          aria-label="Monolith Architectural Monographs"
        >
          <rect width="400" height="240" fill={bgSurface} />

          <rect x="50" y="40" width="300" height="160" stroke={strokeColor} strokeWidth="1.5" />

          <line x1="120" y1="40" x2="120" y2="200" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="210" y1="40" x2="210" y2="200" stroke={accentPrimary} strokeWidth="2" />
          <line x1="280" y1="40" x2="280" y2="200" stroke={strokeColor} strokeWidth="1.5" />

          <line x1="50" y1="90" x2="350" y2="90" stroke={strokeColor} strokeWidth="1" opacity="0.7" />
          <line x1="50" y1="150" x2="350" y2="150" stroke={strokeColor} strokeWidth="1" opacity="0.7" />

          <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
            <rect x="120" y="90" width="90" height="60" fill={accentPrimary} opacity="0.16" />
            <polygon points="120,90 210,90 210,150" fill={accentPrimary} opacity="0.14" />
            <rect x="120" y="90" width="90" height="60" stroke={accentPrimary} strokeWidth="1.5" fill="none" />
          </g>

          <text x="55" y="65" fill={accentPrimary} fontSize="11" fontFamily="sans-serif" fontWeight="900" letterSpacing="1">
            MONOLITH 04/12
          </text>
          <text x="30" y="25" fill={metaPrimary} fontSize="9" fontFamily="monospace">
            SWISS MODERNISM • ASYMMETRIC RHYTHM
          </text>
          <text x="370" y="25" textAnchor="end" fill={accentPrimary} fontSize="9" fontFamily="monospace" fontWeight="bold">
            VOL. 12 ARCHIVE
          </text>
          <text x="30" y="225" fill={metaSecondary} fontSize="9" fontFamily="monospace">
            TOKYO TDC NOMINEE
          </text>
          <text x="370" y="225" textAnchor="end" fill={accentSoft} fontSize="9" fontFamily="monospace">
            ZURICH STRUCTURALIST
          </text>
        </svg>
      );

    case "nox-atelier":
      return (
        <svg
          viewBox="0 0 400 240"
          fill="none"
          className="w-full h-full select-none"
          role="img"
          aria-label="Nox Electric Hypercar 360"
        >
          <rect width="400" height="240" fill={bgSurface} />

          {/* Wind Tunnel Streamlines */}
          <g className="transition-transform duration-700 ease-out group-hover:translate-x-2">
            <path d="M 20,80 C 120,80 180,60 270,75 S 350,110 390,110" stroke={accentPrimary} strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
            <path d="M 20,100 C 110,100 170,85 260,95 S 350,130 390,130" stroke={accentSoft} strokeWidth="1.5" opacity="0.6" />
            <path d="M 20,120 C 100,120 160,110 250,115 S 350,150 390,150" stroke={strokeColor} strokeWidth="1" opacity="0.5" />
          </g>

          {/* Hypercar Aerodynamic Low Silhouette */}
          <path
            d="M 60,165 C 100,165 140,135 200,125 C 270,115 310,140 340,165 Z"
            fill={isDark ? "#141414" : "#e4e4e7"}
            stroke={accentPrimary}
            strokeWidth="2"
          />

          {/* Wheels Base */}
          <circle cx="110" cy="165" r="16" fill={bgSurface} stroke={accentPrimary} strokeWidth="2" />
          <circle cx="110" cy="165" r="6" fill={accentPrimary} />
          <circle cx="295" cy="165" r="16" fill={bgSurface} stroke={accentPrimary} strokeWidth="2" />
          <circle cx="295" cy="165" r="6" fill={accentPrimary} />

          {/* Taillight & Headlamp */}
          <line x1="60" y1="164" x2="75" y2="164" stroke={accentPrimary} strokeWidth="3" strokeLinecap="round" />
          <line x1="330" y1="164" x2="340" y2="164" stroke={accentPrimary} strokeWidth="2.5" strokeLinecap="round" />

          <line x1="40" y1="185" x2="360" y2="185" stroke={strokeColor} strokeWidth="1" strokeDasharray="4 6" />

          {/* Telemetry Readouts */}
          <text x="30" y="35" fill={metaPrimary} fontSize="9" fontFamily="monospace">
            AERO VELOCITY: 360 KM/H • CD: 0.19
          </text>
          <text x="370" y="35" textAnchor="end" fill={accentPrimary} fontSize="9" fontFamily="monospace" fontWeight="bold">
            0-100: 1.74S (4X FLUX)
          </text>
          <text x="30" y="215" fill={metaSecondary} fontSize="9" fontFamily="monospace">
            DOWNFORCE: 1,200 KG @ 300 KM/H
          </text>
          <text x="370" y="215" textAnchor="end" fill={accentSoft} fontSize="9" fontFamily="monospace">
            ALLOCATION: 42/42 SOLD
          </text>
        </svg>
      );

    default:
      return (
        <div className={`w-full h-full flex items-center justify-center ${bgSurface}`}>
          <SparklesIcon className="w-8 h-8 text-white" />
        </div>
      );
  }
}

export function BoboxWorkAndCapabilities({ theme = "dark" }: BoboxWorkAndCapabilitiesProps) {
  const isDark = theme === "dark";
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<BoboxProject | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Works [06]" },
    { id: "flagship", label: "Flagships" },
    { id: "spatial", label: "Spatial & 3D" },
    { id: "systems", label: "Telemetry & Systems" },
  ];

  const filteredProjects = boboxProjects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "flagship") return p.featured;
    if (activeFilter === "spatial")
      return p.category.toLowerCase().includes("spatial") || p.category.toLowerCase().includes("3d");
    if (activeFilter === "systems")
      return p.category.toLowerCase().includes("telemetry") || p.category.toLowerCase().includes("data");
    return true;
  });

  return (
    <div className={`transition-colors duration-500 ${isDark ? "bg-[#0a0a0a]" : "bg-[#fafaf9]"}`}>
      {/* ======================================================== */}
      {/* 1. SELECTED WORK SHOWCASE GRID (#work)                   */}
      {/* ======================================================== */}
      <section
        id="work"
        className={`py-24 sm:py-32 border-b transition-colors duration-500 scroll-mt-20 ${
          isDark ? "border-white/15 bg-[#0a0a0a]" : "border-black/15 bg-[#fafaf9]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Consistent Editorial Rhythm */}
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
                  PORTFOLIO CASE STUDIES
                </span>
                <span className="opacity-55 font-mono text-[10px] tracking-[0.2em]">• 06 BESPOKE ARTIFACTS</span>
              </div>
              <h2
                className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter lowercase leading-[0.98] ${
                  isDark ? "text-white text-glow" : "text-[#0a0a0a]"
                }`}
              >
                selected work.
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md leading-relaxed ${
                isDark ? "text-[#ededed]/75" : "text-black/70"
              }`}
            >
              Every engagement is an original technological and aesthetic artifact designed to elevate visionary founders into undisputed category authorities.
            </p>
          </div>

          {/* Interactive Category Filter Tabs Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-none text-[11px] font-mono uppercase tracking-[0.2em] font-semibold transition-all duration-200 flex-shrink-0 cursor-pointer border ${
                  activeFilter === tab.id
                    ? isDark
                      ? "bg-white text-[#0a0a0a] border-white font-bold"
                      : "bg-[#0a0a0a] text-white border-[#0a0a0a] font-bold"
                    : isDark
                      ? "bg-black/80 border-white/15 text-[#ededed]/75 hover:text-white hover:border-white/50"
                      : "bg-white border-black/15 text-black/70 hover:text-black hover:border-black/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 2-Column Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                onClick={() => setSelectedCaseStudy(project)}
                className={`group relative flex flex-col justify-between rounded-none border transition-all duration-500 overflow-hidden cursor-pointer ${
                  isDark
                    ? "bg-[#0a0a0a] border-white/15 hover:border-white/50 hover:-translate-y-1"
                    : "bg-white border-black/15 hover:border-black/50 hover:-translate-y-1"
                }`}
              >
                <div>
                  {/* Top Bespoke SVG Editorial Artwork Canvas */}
                  <div
                    className={`relative w-full aspect-[16/10] overflow-hidden border-b transition-colors ${
                      isDark ? "border-white/15 bg-black/90" : "border-black/15 bg-[#f4f4f2]"
                    }`}
                  >
                    <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                      <ProjectArtwork project={project} isDark={isDark} />
                    </div>

                    {/* Ambient Glow Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity" />

                    {/* Top Left Sequence Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.2em] backdrop-blur-md bg-black/85 text-white border border-white/25">
                        CASE 0{index + 1}
                      </span>
                    </div>

                    {/* Top Right Year Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.2em] backdrop-blur-md ${
                          isDark ? "bg-white text-[#0a0a0a]" : "bg-[#0a0a0a] text-white"
                        }`}
                      >
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Card Editorial Content */}
                  <div className="p-6 sm:p-8">
                    {/* Client & Category Metadata */}
                    <div
                      className={`flex items-center justify-between text-[11px] font-mono pb-3 border-b ${
                        isDark ? "border-white/15" : "border-black/15"
                      }`}
                    >
                      <span className="font-semibold uppercase tracking-[0.2em] opacity-60">
                        {project.client}
                      </span>
                      <span
                        className={`font-bold uppercase tracking-[0.18em] text-[10px] ${
                          isDark ? "text-white" : "text-[#0a0a0a]"
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3
                      className={`text-2xl sm:text-3xl font-extrabold tracking-tighter lowercase mt-4 transition-all ${
                        isDark
                          ? "text-[#ededed] group-hover:text-white group-hover:text-glow-lighter"
                          : "text-[#0a0a0a]"
                      }`}
                    >
                      {project.title}
                    </h3>

                    {/* Tagline / Brief */}
                    <p
                      className={`text-xs sm:text-sm mt-3 leading-relaxed ${
                        isDark ? "text-[#ededed]/75" : "text-black/70"
                      }`}
                    >
                      {project.brief}
                    </p>

                    {/* Deliverables Tag Chips */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className={`text-[10px] px-2.5 py-1 rounded-none border font-mono font-medium transition-colors ${
                            isDark
                              ? "bg-black/80 border-white/15 text-[#ededed]/80 group-hover:border-white/35"
                              : "bg-black/5 border-black/15 text-black/80 group-hover:border-black/35"
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics & Action Footer */}
                <div
                  className={`p-6 sm:p-8 pt-0 mt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isDark ? "border-white/15" : "border-black/15"
                  }`}
                >
                  {/* Performance Impact Metrics */}
                  <div className="grid grid-cols-3 gap-3 flex-1 pt-4">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <span
                          className={`font-mono text-xs sm:text-sm font-black block truncate ${
                            isDark ? "text-white text-glow-hard" : "text-[#0a0a0a]"
                          }`}
                        >
                          {m.value}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider truncate block font-medium opacity-60">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Modal Trigger */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCaseStudy(project);
                    }}
                    className={`self-start sm:self-center mt-2 sm:mt-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-none text-[11px] font-bold uppercase tracking-[0.2em] active:scale-95 transition-all group/btn ${
                      isDark
                        ? "bg-white text-[#0a0a0a] hover:bg-[#ededed]"
                        : "bg-[#0a0a0a] text-white hover:bg-black/85"
                    }`}
                  >
                    <span>View Spec</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. DESIGN CAPABILITIES SECTION (#capabilities)          */}
      {/* ======================================================== */}
      <section
        id="capabilities"
        className={`py-24 sm:py-32 border-b transition-colors duration-500 scroll-mt-20 ${
          isDark ? "border-white/15 bg-[#0a0a0a]" : "border-black/15 bg-[#f4f4f2]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-full ${isDark ? "bg-white" : "bg-[#0a0a0a]"}`} />
                <span
                  className={`text-[10px] font-mono uppercase tracking-[0.25em] font-bold ${
                    isDark ? "text-white" : "text-[#0a0a0a]"
                  }`}
                >
                  CORE DISCIPLINES &amp; METHODS
                </span>
                <span className="opacity-55 font-mono text-[10px] tracking-[0.2em]">• 05 DOMAINS</span>
              </div>
              <h2
                className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter lowercase leading-[0.98] ${
                  isDark ? "text-white text-glow" : "text-[#0a0a0a]"
                }`}
              >
                design capabilities.
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md leading-relaxed ${
                isDark ? "text-[#ededed]/75" : "text-black/70"
              }`}
            >
              From zero-latency design systems to kinetic scroll choreography and spatial WebGL environments.
            </p>
          </div>

          {/* Clean Horizontal Divider Rows Matching Consistent Rhythm */}
          <div className={`divide-y border-y transition-colors ${isDark ? "divide-white/15 border-white/15" : "divide-black/15 border-black/15"}`}>
            {boboxCapabilities.map((capability) => (
              <div
                key={capability.id}
                className={`group py-10 sm:py-14 px-2 sm:px-4 transition-colors duration-300 ${
                  isDark ? "hover:bg-black/80" : "hover:bg-white/80"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number + Primary Title */}
                  <div className="lg:col-span-5 flex items-start gap-6">
                    <span
                      className={`font-mono text-3xl sm:text-5xl font-black transition-all ${
                        isDark
                          ? "text-white/30 group-hover:text-white group-hover:text-glow-lighter"
                          : "text-black/25 group-hover:text-black"
                      }`}
                    >
                      {capability.number}
                    </span>
                    <div>
                      <h3
                        className={`text-xl sm:text-2xl font-extrabold lowercase tracking-tighter transition-all ${
                          isDark
                            ? "text-[#ededed] group-hover:text-white group-hover:text-glow-hard"
                            : "text-[#0a0a0a]"
                        }`}
                      >
                        {capability.title}
                      </h3>
                      <p className="text-[11px] font-mono uppercase tracking-[0.15em] opacity-75 mt-1.5 font-semibold">
                        {capability.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Middle Column: Concise Methodology Description & Focus Areas */}
                  <div className="lg:col-span-4">
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? "text-[#ededed]/75" : "text-black/70"
                      }`}
                    >
                      {capability.description}
                    </p>

                    {/* Focus Areas Micro-Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {capability.focusAreas.map((area, aIdx) => (
                        <span
                          key={aIdx}
                          className={`text-[10px] font-mono px-2.5 py-1 rounded-none uppercase tracking-wider border ${
                            isDark
                              ? "bg-[#0a0a0a] text-[#ededed]/75 border-white/15"
                              : "bg-black/5 text-black/75 border-black/15"
                          }`}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Clean Discipline Tags */}
                  <div className="lg:col-span-3 space-y-2.5 pt-1 lg:pt-0">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] opacity-60 font-bold block mb-2">
                      DISCIPLINE TAGS
                    </span>
                    <div className="flex flex-col sm:flex-row lg:flex-col flex-wrap gap-2">
                      {capability.disciplines.map((d, dIdx) => (
                        <div
                          key={dIdx}
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-none border text-xs font-mono font-medium transition-colors ${
                            isDark
                              ? "bg-[#0a0a0a] border-white/15 text-[#ededed]/85 group-hover:border-white/40"
                              : "bg-white border-black/15 text-black/80 group-hover:border-black/40"
                          }`}
                        >
                          <CheckIcon className={`w-3.5 h-3.5 flex-shrink-0 ${isDark ? "text-white" : "text-[#0a0a0a]"}`} />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. CASE STUDY DETAIL MODAL                               */}
      {/* ======================================================== */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCaseStudy(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`relative w-full max-w-2xl rounded-none border p-6 sm:p-8 shadow-2xl transition-all ${
              isDark ? "bg-[#0a0a0a] border-white/30 text-[#ededed]" : "bg-white border-black/30 text-[#0a0a0a]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className={`flex items-center justify-between pb-4 border-b ${
                isDark ? "border-white/15" : "border-black/15"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-9 h-9 rounded-none font-mono text-xs font-black flex items-center justify-center border ${
                    isDark ? "bg-white text-[#0a0a0a] border-white" : "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                  }`}
                >
                  BF
                </span>
                <div>
                  <span className="text-[10px] font-mono uppercase opacity-65 font-semibold tracking-[0.2em]">
                    {selectedCaseStudy.client} • {selectedCaseStudy.year}
                  </span>
                  <h3
                    className={`text-xl font-extrabold tracking-tighter lowercase ${
                      isDark ? "text-white text-glow-lighter" : "text-[#0a0a0a]"
                    }`}
                  >
                    {selectedCaseStudy.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCaseStudy(null)}
                className="p-1.5 rounded-none opacity-65 hover:opacity-100 transition-opacity cursor-pointer"
                aria-label="Close modal"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-5 text-xs sm:text-sm">
              <p className={isDark ? "text-[#ededed]/80 leading-relaxed" : "text-black/75 leading-relaxed"}>
                {selectedCaseStudy.brief}
              </p>

              <div
                className={`p-4 rounded-none border ${
                  isDark ? "bg-black/80 border-white/15" : "bg-[#fafaf9] border-black/15"
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] opacity-60 font-bold block mb-2.5">
                  VERIFIED METRICS &amp; LIFT
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {selectedCaseStudy.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span
                        className={`font-mono text-base font-black block truncate ${
                          isDark ? "text-white text-glow-hard" : "text-[#0a0a0a]"
                        }`}
                      >
                        {m.value}
                      </span>
                      <span className="text-[10px] uppercase opacity-60 block truncate">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] opacity-60 font-bold block mb-2">
                  SCOPE &amp; DELIVERABLES
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.deliverables.map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className={`text-xs px-2.5 py-1 rounded-none border font-mono font-medium ${
                        isDark ? "bg-black/80 border-white/15 text-[#ededed]/80" : "bg-black/5 border-black/15 text-black/80"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? "border-white/15" : "border-black/15"
                }`}
              >
                <span className="text-[11px] opacity-60 font-mono uppercase tracking-[0.2em]">
                  CONFIDENTIAL ARCHIVE • BYTEFLYO AGENCY
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(null)}
                  className={`px-4 py-2 rounded-none text-xs font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-85 cursor-pointer ${
                    isDark ? "bg-white text-[#0a0a0a]" : "bg-[#0a0a0a] text-white"
                  }`}
                >
                  Close Spec
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoboxWorkAndCapabilities;
