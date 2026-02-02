import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  boboxAgencyData,
  designerCredit,
} from "@/data/demos/agency/boboxAgencyData";
import { SparklesIcon, ArrowUpRightIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Bobox Agency | Avant-Garde Digital Flagship & Motion Engineering",
  description:
    "Live showcase of Bobox Agency. Deep obsidian canvas, amber-gold accents, kinetic typography, and high-conversion editorial UX.",
};

export default function BoboxAgencyPage() {
  const {
    agencyName,
    heroTagline,
    heroHeadline,
    heroSubheadline,
    stats,
    projects,
    capabilities,
    journalItems,
    manifesto,
    contact,
  } = boboxAgencyData;

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] selection:bg-amber-500 selection:text-black">
      {/* Top Fixed Agency Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#1b1f2e]/80 bg-[#07080b]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Hub Return */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <span>←</span>
              <span className="underline-offset-4 group-hover:underline">99 Showcase Hub</span>
            </Link>
            <span className="text-zinc-700">/</span>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-zinc-950 font-black text-xs flex items-center justify-center tracking-wider shadow-md shadow-amber-500/20">
                BX
              </div>
              <span className="text-sm font-bold tracking-tight text-white uppercase">
                {agencyName}
              </span>
            </div>
          </div>

          {/* Center Status Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#121520] border border-[#1f2438] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-300">Live Demo Flagship</span>
            <span className="text-zinc-600">•</span>
            <span className="text-amber-400 font-semibold">Obsidian + Amber-Gold</span>
          </div>

          {/* Right: Lead Designer Monogram Chip + Contact CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0d0f16] border border-[#1f2438] text-xs">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold text-[10px] flex items-center justify-center border border-amber-500/30">
                {designerCredit.monogram}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-zinc-200 text-[11px] leading-tight">
                  {designerCredit.name}
                </span>
                <span className="text-zinc-500 text-[9px] font-mono leading-tight">
                  Lead Designer
                </span>
              </div>
            </div>

            <a
              href={`mailto:${contact.inquiriesEmail}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors shadow-sm shadow-amber-500/25 active:scale-95"
            >
              <span>Initiate Project</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5 text-zinc-950" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-28 pb-20 overflow-hidden border-b border-[#1b1f2e]/60">
        {/* Subtle Obsidian Mesh Gradient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Sector Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121520] border border-amber-500/30 text-amber-400 text-xs font-mono mb-6">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>{heroTagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
              {heroHeadline}
            </h1>

            {/* Subhead */}
            <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              {heroSubheadline}
            </p>

            {/* Hero CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl text-sm font-bold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 active:scale-95 inline-flex items-center gap-2"
              >
                <span>View Selected Works</span>
                <span>↓</span>
              </a>
              <a
                href="#capabilities"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold border border-[#1f2438] text-zinc-300 hover:border-amber-500/40 hover:text-white transition-colors bg-[#0d0f16]/60"
              >
                Explore Capabilities
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 pt-10 border-t border-[#1b1f2e] grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#0d0f16] border border-[#1f2438]/80">
                <span className="font-mono text-2xl sm:text-3xl font-black text-amber-400">
                  {stat.value}
                </span>
                <h2 className="text-xs sm:text-sm font-bold text-zinc-200 mt-1">
                  {stat.label}
                </h2>
                <p className="text-[11px] text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works (Projects) Section */}
      <section id="projects" className="py-24 border-b border-[#1b1f2e]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
                Case Studies & Inventions
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-2">
                Selected Works.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
              Each engagement is a bespoke technological and visual artifact designed to capture industry leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="group relative rounded-3xl bg-[#0d0f16] border border-[#1f2438] hover:border-amber-500/50 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pb-4 border-b border-[#1b1f2e]">
                    <span>{proj.client}</span>
                    <span className="text-amber-400 font-semibold">{proj.year}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-5 group-hover:text-amber-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono uppercase text-zinc-400 mt-1">
                    {proj.category}
                  </p>
                  <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                    {proj.brief}
                  </p>

                  {/* Deliverables Chips */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {proj.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-[#121520] border border-[#1f2438] text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Footer */}
                <div className="mt-8 pt-6 border-t border-[#1b1f2e] grid grid-cols-3 gap-2">
                  {proj.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="font-mono text-xs sm:text-sm font-bold text-amber-400 block truncate">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-zinc-500 truncate block">
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

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 border-b border-[#1b1f2e]/60 bg-[#090b10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
              Core Disciplines
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-2">
              Capabilities.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              From foundational design tokens to real-time WebGL canvas shaders and fluid micro-interaction polish.
            </p>
          </div>

          <div className="space-y-6">
            {capabilities.map((cap) => (
              <div
                key={cap.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#0d0f16] border border-[#1f2438] hover:border-amber-500/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-2">
                    <span className="font-mono text-2xl sm:text-3xl font-black text-amber-500/40">
                      {cap.number}
                    </span>
                  </div>

                  <div className="lg:col-span-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {cap.title}
                    </h3>
                    <p className="text-xs font-mono text-amber-400/90 mt-1">
                      {cap.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 space-y-2">
                    <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider block">
                      Key Disciplines
                    </span>
                    {cap.disciplines.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckIcon className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
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

      {/* Manifesto Section */}
      <section className="py-24 border-b border-[#1b1f2e]/60 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
            {manifesto.title}
          </span>
          <blockquote className="mt-8 text-2xl sm:text-4xl font-serif italic text-zinc-100 leading-snug">
            &ldquo;{manifesto.quote}&rdquo;
          </blockquote>
          <p className="mt-4 text-xs font-mono text-amber-400 font-semibold tracking-wider">
            — {manifesto.author}
          </p>

          <div className="mt-12 space-y-4 text-xs sm:text-sm text-zinc-400 text-left max-w-2xl mx-auto leading-relaxed border-t border-[#1b1f2e] pt-8">
            {manifesto.paragraphs.map((para, pIdx) => (
              <p key={pIdx}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Journal / Thought Leadership */}
      <section className="py-24 border-b border-[#1b1f2e]/60 bg-[#090b10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
                Intelligence & Theory
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-2">
                The Journal.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm">
              Original essays on layout physics, neurobiology of dark surfaces, and design engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journalItems.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#0d0f16] border border-[#1f2438] hover:border-amber-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span className="text-amber-400">{item.category}</span>
                    <span>{item.date} • {item.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-3 hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#1b1f2e] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {item.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#121520] text-zinc-400">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-amber-400 inline-flex items-center gap-1">
                    Read Essay →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Designer Attribution Card */}
      <section className="py-20 border-b border-[#1b1f2e]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#111422] via-[#0d0f16] to-[#07080b] border border-amber-500/30 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Monogram Fallback Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-zinc-950 font-black text-3xl flex items-center justify-center shadow-xl shadow-amber-500/25 flex-shrink-0">
                {designerCredit.monogram}
              </div>

              <div className="flex-1 text-center sm:text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  Lead UI & Frontend Designer
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {designerCredit.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  {designerCredit.role} • {designerCredit.location}
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 mt-3 italic leading-relaxed">
                  &ldquo;{designerCredit.note}&rdquo;
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <Link
                    href="/"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors"
                  >
                    Explore 99 Showcase Hub
                  </Link>
                  <a
                    href={`mailto:${contact.inquiriesEmail}`}
                    className="px-4 py-2 rounded-xl text-xs font-semibold border border-[#1f2438] text-zinc-300 hover:text-white hover:border-amber-500/40 transition-colors"
                  >
                    Direct Design Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Footer */}
      <footer className="py-12 bg-[#050608]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold tracking-wider">{agencyName}</span>
            <span>•</span>
            <span>{contact.studioLocation}</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              99 Hub Index
            </Link>
            <span>•</span>
            <span className="text-amber-400 font-semibold">{contact.availability}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
