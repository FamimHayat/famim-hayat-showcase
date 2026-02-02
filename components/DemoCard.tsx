import React from "react";
import Link from "next/link";
import { DemoItem } from "@/data/demosRegistry";
import { ArrowUpRightIcon, SparklesIcon, CategoryIcon } from "./Icons";

interface DemoCardProps {
  demo: DemoItem;
  onPreviewClick?: (demo: DemoItem) => void;
}

export function DemoCard({ demo, onPreviewClick }: DemoCardProps) {
  const isLive = demo.status === "live";

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 overflow-hidden ${
        isLive
          ? "bg-white dark:bg-[#0d0f16] border-amber-500/40 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 dark:hover:shadow-amber-500/5 ring-1 ring-amber-500/20"
          : "bg-white/90 dark:bg-[#0c0e14]/90 border-zinc-200/90 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md"
      }`}
    >
      {/* Top Visual Graphic Thumbnail */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-[#090b10] dark:to-[#121622] flex items-center justify-center border-b border-zinc-200/80 dark:border-zinc-800/80">
        {/* Industry Geometric Pattern Backdrop */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-30 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${demo.accentColor}33 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Ambient Radial Accent Glow */}
        <div
          className="absolute w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-20 dark:opacity-30 transition-opacity duration-300 group-hover:opacity-40"
          style={{ backgroundColor: demo.accentColor }}
        />

        {/* Center Industry Emblem */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center p-4">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg ${
              isLive
                ? "bg-gradient-to-br from-amber-500 to-amber-600 text-zinc-950 shadow-amber-500/30"
                : "bg-white dark:bg-[#151928] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
            }`}
          >
            {isLive ? (
              <SparklesIcon className="w-7 h-7 text-zinc-950 animate-pulse" />
            ) : (
              <CategoryIcon name={demo.category.toLowerCase()} className="w-6 h-6" size={24} />
            )}
          </div>
          <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-medium">
            {demo.category} • #{demo.id.slice(0, 10)}
          </span>
        </div>

        {/* Category Pill (Top Left) */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/90 dark:bg-black/70 backdrop-blur-md text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/60 shadow-sm">
            <CategoryIcon name={demo.category.toLowerCase()} className="w-3 h-3 text-amber-500" />
            <span>{demo.category}</span>
          </span>
        </div>

        {/* Status Badge (Top Right) */}
        <div className="absolute top-3 right-3 z-10">
          {isLive ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live Showcase
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-300/60 dark:border-zinc-700/60 backdrop-blur-md">
              Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Slug Header */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {demo.title}
              </h2>
              <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                {demo.slug}
              </span>
            </div>
            {demo.year && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400">
                {demo.year}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
            {demo.description}
          </p>

          {/* Tag Badges */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {demo.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-md font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/70 dark:border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
            {demo.tags.length > 3 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded text-zinc-400 dark:text-zinc-500">
                +{demo.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer / Action Button */}
        <div className="mt-5 pt-3.5 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
            {isLive ? (
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span>Fully Interactive</span>
              </span>
            ) : (
              <span>Architecture Ready</span>
            )}
          </span>

          {isLive ? (
            <Link
              href={demo.slug}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors shadow-sm shadow-amber-500/20 group/btn"
            >
              <span>Explore Demo</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => onPreviewClick?.(demo)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-amber-500/40 hover:text-amber-500 transition-colors"
            >
              <span>Concept Spec</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DemoCard;
