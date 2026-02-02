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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-[#0d0f16] border border-zinc-200 dark:border-zinc-800 p-6 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <CategoryIcon name={demo.category.toLowerCase()} className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[11px] font-mono uppercase text-zinc-400">
                {demo.category} • Concept Spec
              </span>
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                {demo.title}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-4 space-y-4 text-xs sm:text-sm">
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-200 mb-1">
              Project Concept & Overview
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {demo.description}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-zinc-400 font-mono text-[10px]">TARGET SLUG</span>
                <p className="font-mono text-zinc-800 dark:text-zinc-200 truncate">{demo.slug}</p>
              </div>
              <div>
                <span className="text-zinc-400 font-mono text-[10px]">SECTOR STACK</span>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">{demo.category} Flagship</p>
              </div>
              <div>
                <span className="text-zinc-400 font-mono text-[10px]">PLANNED YEAR</span>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">{demo.year}</p>
              </div>
              <div>
                <span className="text-zinc-400 font-mono text-[10px]">PRODUCTION STATUS</span>
                <p className="font-semibold text-amber-600 dark:text-amber-400">In Design Queue</p>
              </div>
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] text-zinc-400 uppercase">Tags & Attributes</span>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {demo.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <SparklesIcon className="w-3.5 h-3.5 text-amber-500" />
              Lead Design by {designerCredit.name}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-semibold text-xs hover:opacity-90 transition-opacity"
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
