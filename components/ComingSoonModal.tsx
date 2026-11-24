import React from "react";
import { DemoItem } from "@/data/demosRegistry";
import { CloseIcon, CategoryIcon, SparklesIcon } from "./Icons";
import { designerCredit } from "@/data/demos/agency/boboxAgencyData";

interface ComingSoonModalProps {
  demo: DemoItem | null;
  onClose: () => void;
}

export function ComingSoonModal({ demo, onClose }: ComingSoonModalProps) {
  if (!demo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-none bg-white dark:bg-[#0a0a0a] border border-black/25 dark:border-white/30 p-6 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-black/15 dark:border-white/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 text-[#0a0a0a] dark:text-white border border-black/15 dark:border-white/25 flex items-center justify-center">
              <CategoryIcon name={demo.category.toLowerCase()} className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-black/55 dark:text-white/70">
                {demo.category} • Concept Spec
              </span>
              <h2 className="text-lg font-extrabold tracking-tighter lowercase text-[#0a0a0a] dark:text-white text-glow-lighter">
                {demo.title}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-none border border-transparent hover:border-black/20 dark:hover:border-white/25 text-black/50 dark:text-[#ededed]/60 hover:text-black dark:hover:text-white transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-4 space-y-4 text-xs sm:text-sm">
          <div>
            <h3 className="text-[11px] font-mono uppercase tracking-[0.25em] font-semibold text-[#0a0a0a] dark:text-white mb-1.5">
              Project Concept & Overview
            </h3>
            <p className="text-black/70 dark:text-[#ededed]/75 leading-relaxed">
              {demo.description}
            </p>
          </div>

          <div className="p-3.5 rounded-none bg-black/[0.03] dark:bg-black/80 border border-black/15 dark:border-white/15">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-black/50 dark:text-[#ededed]/50 font-mono text-[10px] uppercase tracking-[0.2em]">TARGET SLUG</span>
                <p className="font-mono text-[#0a0a0a] dark:text-[#ededed] truncate mt-0.5">{demo.slug}</p>
              </div>
              <div>
                <span className="text-black/50 dark:text-[#ededed]/50 font-mono text-[10px] uppercase tracking-[0.2em]">SECTOR STACK</span>
                <p className="font-semibold text-[#0a0a0a] dark:text-white mt-0.5">{demo.category} Flagship</p>
              </div>
              <div>
                <span className="text-black/50 dark:text-[#ededed]/50 font-mono text-[10px] uppercase tracking-[0.2em]">PLANNED YEAR</span>
                <p className="font-semibold text-[#0a0a0a] dark:text-white mt-0.5">{demo.year}</p>
              </div>
              <div>
                <span className="text-black/50 dark:text-white/60 font-mono text-[10px] uppercase tracking-[0.2em]">PRODUCTION STATUS</span>
                <p className="font-semibold text-[#0a0a0a] dark:text-white mt-0.5">In Design Queue</p>
              </div>
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] text-black/55 dark:text-[#ededed]/55 uppercase tracking-[0.25em]">Tags & Attributes</span>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {demo.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-none bg-black/5 dark:bg-black/80 text-[#0a0a0a] dark:text-[#ededed]/80 border border-black/15 dark:border-white/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-black/15 dark:border-white/15 flex items-center justify-between text-xs text-black/60 dark:text-[#ededed]/65">
            <span className="flex items-center gap-1.5">
              <SparklesIcon className="w-3.5 h-3.5 text-[#0a0a0a] dark:text-white" />
              Lead Design by {designerCredit.name}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-none bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a] font-bold text-xs uppercase tracking-[0.15em] hover:opacity-85 transition-opacity"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonModal;
