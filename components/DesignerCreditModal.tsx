import React from "react";
import { designerCredit } from "@/data/demos/agency/boboxAgencyData";
import { CloseIcon, CheckIcon } from "./Icons";

interface DesignerCreditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DesignerCreditModal({ isOpen, onClose }: DesignerCreditModalProps) {
  if (!isOpen) return null;

  const { name, role, note, monogram, location, statusBadge } = designerCredit;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white dark:bg-[#0d0f16] border border-zinc-200 dark:border-zinc-800 p-6 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {/* Designer Header */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-zinc-950 font-black text-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
            {monogram}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-100">
                {name}
              </h2>
            </div>
            <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">
              {role}
            </p>
            {location && (
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                {location}
              </span>
            )}
          </div>
        </div>

        {/* Note / Designer Statement */}
        <div className="mt-5 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
          <span className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 font-semibold tracking-wider">
            Lead Designer Role Note
          </span>
          <p className="mt-1 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
            &ldquo;{note}&rdquo;
          </p>
        </div>

        {/* Design Responsibilities */}
        <div className="mt-4 space-y-2 text-xs">
          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
            Core Disciplines
          </span>
          <div className="space-y-1.5">
            {[
              "Crafted visual hierarchy across 99 multi-industry showcases",
              "Established responsive grid rhythm and fluid clamp equations",
              "Architected obsidian (#07080b) + amber-gold design system",
              "Engineered live Bobox Agency flagship experience",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <CheckIcon className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status Badge */}
        {statusBadge && (
          <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {statusBadge}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-amber-500 text-zinc-950 font-semibold text-xs hover:bg-amber-400 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DesignerCreditModal;
