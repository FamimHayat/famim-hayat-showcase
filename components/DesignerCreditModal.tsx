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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-none bg-white dark:bg-[#0a0a0a] border border-black/25 dark:border-white/30 p-6 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-none border border-transparent hover:border-black/20 dark:hover:border-white/25 text-black/50 dark:text-[#ededed]/60 hover:text-black dark:hover:text-white transition-colors"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {/* Designer Header */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-none bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a] font-black text-xl flex items-center justify-center border border-black/20 dark:border-white">
            {monogram}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-extrabold tracking-tighter lowercase text-[#0a0a0a] dark:text-white text-glow-lighter">
                {name}
              </h2>
            </div>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-black/65 dark:text-[#ededed]/80 font-medium">
              {role}
            </p>
            {location && (
              <span className="text-[11px] text-black/50 dark:text-[#ededed]/55">
                {location}
              </span>
            )}
          </div>
        </div>

        {/* Note / Designer Statement */}
        <div className="mt-5 p-4 rounded-none bg-black/[0.03] dark:bg-black/80 border border-black/15 dark:border-white/15">
          <span className="text-[10px] font-mono uppercase text-black/60 dark:text-[#ededed]/70 font-semibold tracking-[0.25em]">
            Lead Designer Role Note
          </span>
          <p className="mt-1.5 text-xs sm:text-sm text-[#0a0a0a] dark:text-[#ededed] italic leading-relaxed">
            &ldquo;{note}&rdquo;
          </p>
        </div>

        {/* Design Responsibilities */}
        <div className="mt-4 space-y-2 text-xs">
          <span className="font-mono text-[10px] text-black/55 dark:text-[#ededed]/55 uppercase tracking-[0.25em]">
            Core Disciplines
          </span>
          <div className="space-y-1.5">
            {[
              "Crafted visual hierarchy across 99 multi-industry showcases",
              "Established responsive grid rhythm and fluid clamp equations",
              "Architected obsidian (#0a0a0a) + warm glow monochrome system",
              "Engineered live Byteflyo Agency flagship experience",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-black/70 dark:text-[#ededed]/80">
                <CheckIcon className="w-3.5 h-3.5 text-[#0a0a0a] dark:text-white flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status Badge */}
        {statusBadge && (
          <div className="mt-5 pt-4 border-t border-black/15 dark:border-white/15 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[#0a0a0a] dark:text-[#ededed] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#0a0a0a] dark:bg-white animate-pulse" />
              {statusBadge}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-none bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a] font-bold text-xs uppercase tracking-[0.15em] hover:opacity-85 transition-opacity"
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
