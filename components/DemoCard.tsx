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
      className={`group relative flex flex-col justify-between rounded-none border transition-all duration-300 overflow-hidden ${
        isLive
          ? "bg-white dark:bg-[#0a0a0a] border-black/40 dark:border-white/45 hover:border-black dark:hover:border-white/80"
          : "bg-white dark:bg-[#0a0a0a] border-black/15 dark:border-white/15 hover:border-black/45 dark:hover:border-white/45"
      }`}
    >
      {/* Top Visual Graphic Thumbnail */}
      <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-black/[0.03] dark:bg-black/90 flex items-center justify-center border-b border-black/15 dark:border-white/15">
        {/* Industry Geometric Dot Grid Backdrop */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-25 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          style={{
            backgroundImage: isLive
              ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.28) 1px, transparent 1px)"
              : "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Subtle Monochrome Radial Glow */}
        <div
          className={`absolute w-32 h-32 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 ${
            isLive
              ? "bg-black/10 dark:bg-white/20 opacity-40 group-hover:opacity-65"
              : "bg-black/5 dark:bg-white/10 opacity-20 group-hover:opacity-40"
          }`}
        />

        {/* Center Industry Emblem */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center px-3 pt-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border ${
              isLive
                ? "bg-[#0a0a0a] text-white dark:bg-white dark:text-[#0a0a0a] border-black/30 dark:border-white"
                : "bg-white dark:bg-black/80 text-[#0a0a0a] dark:text-[#ededed] border-black/15 dark:border-white/25"
            }`}
          >
            {isLive ? (
              <SparklesIcon className="w-5 h-5 animate-pulse" />
            ) : (
              <CategoryIcon name={demo.category.toLowerCase()} className="w-5 h-5" size={20} />
            )}
          </div>
          <span className="text-[9px] font-mono tracking-[0.22em] uppercase text-black/55 dark:text-[#ededed]/60 font-medium max-w-full truncate">
            {demo.category} • #{demo.id.slice(0, 10)}
          </span>
        </div>

        {/* Category Pill (Top Left) */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-[0.18em] font-semibold bg-white/90 dark:bg-black/80 backdrop-blur-md text-[#0a0a0a] dark:text-[#ededed] border border-black/15 dark:border-white/20">
            <CategoryIcon name={demo.category.toLowerCase()} className="w-2.5 h-2.5 text-[#0a0a0a] dark:text-white" />
            <span>{demo.category}</span>
          </span>
        </div>

        {/* Status Badge (Top Right) */}
        <div className="absolute top-2.5 right-2.5 z-10">
          {isLive ? (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-[0.18em] font-bold bg-[#0a0a0a] text-white dark:bg-white/15 dark:text-white border border-black/20 dark:border-white/40 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
              </span>
              Live
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-[0.18em] font-medium bg-black/5 dark:bg-black/80 text-black/60 dark:text-[#ededed]/60 border border-black/15 dark:border-white/15 backdrop-blur-md">
              Soon
            </span>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between min-w-0">
        <div className="min-w-0">
          {/* Title & Slug Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h2
                className={`text-base sm:text-lg font-bold tracking-tighter lowercase leading-snug truncate transition-all text-glow-lighter group-hover:text-glow-lighter ${
                  isLive
                    ? "text-[#0a0a0a] dark:text-white"
                    : "text-[#0a0a0a] dark:text-[#ededed] group-hover:text-black dark:group-hover:text-white"
                }`}
                title={demo.title}
              >
                {demo.title}
              </h2>
              <span
                className="block truncate text-[10px] font-mono text-black/45 dark:text-white/55 mt-0.5"
                title={demo.slug}
              >
                {demo.slug}
              </span>
            </div>
            {demo.year && (
              <span className="shrink-0 text-[9px] font-mono px-1.5 py-0.5 rounded-none bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-black/60 dark:text-white/70">
                {demo.year}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-2 text-xs text-black/65 dark:text-white/75 line-clamp-3 leading-relaxed">
            {demo.description}
          </p>

          {/* Tag Badges */}
          <div className="mt-3 flex flex-wrap gap-1">
            {demo.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-none font-medium bg-black/5 dark:bg-black/80 text-black/70 dark:text-white/70 border border-black/15 dark:border-white/15 max-w-full truncate"
              >
                {tag}
              </span>
            ))}
            {demo.tags.length > 3 && (
              <span className="text-[9px] font-mono px-1 py-0.5 rounded-none text-black/45 dark:text-white/50">
                +{demo.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer / Action Button */}
        <div className="mt-4 pt-3 border-t border-black/15 dark:border-white/15 flex items-center justify-between gap-2">
          <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-black/55 dark:text-white/70 truncate">
            {isLive ? (
              <span className="font-semibold text-[#0a0a0a] dark:text-white">
                Interactive
              </span>
            ) : (
              <span>Spec Ready</span>
            )}
          </span>

          {isLive ? (
            <Link
              href={demo.slug}
              className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-none text-[10px] font-bold uppercase tracking-[0.15em] bg-[#0a0a0a] text-white dark:bg-black/90 dark:text-white border border-black/20 dark:border-white/45 hover:border-white/80 text-glow transition-all group/btn"
            >
              <span>Explore</span>
              <ArrowUpRightIcon className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => onPreviewClick?.(demo)}
              className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-none text-[10px] font-mono uppercase tracking-[0.15em] font-medium border border-black/20 dark:border-white/20 text-[#0a0a0a] dark:text-[#ededed] hover:border-black/60 dark:hover:border-white/50 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
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
