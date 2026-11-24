import React from "react";
import { designerCredit } from "@/data/demos/agency/boboxAgencyData";

interface DesignerCreditBadgeProps {
  className?: string;
  showNote?: boolean;
  compact?: boolean;
  onClick?: () => void;
}

export function DesignerCreditBadge({
  className = "",
  showNote = true,
  compact = false,
  onClick,
}: DesignerCreditBadgeProps) {
  const { name, role, note, designerImage, monogram, statusBadge } = designerCredit;

  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`group relative flex items-center gap-3 p-3 sm:p-3.5 rounded-none border transition-all duration-300 ${
        onClick ? "cursor-pointer hover:border-black/50 dark:hover:border-white/50" : ""
      } bg-white dark:bg-[#0a0a0a] border-black/15 dark:border-white/15 ${className}`}
    >
      {/* Designer Avatar with Monogram Fallback */}
      <div className="relative flex-shrink-0">
        {designerImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={designerImage}
            alt={name}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-black/30 dark:border-white/40"
          />
        ) : (
          <div
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/5 dark:bg-black/90 border border-black/25 dark:border-white/35 text-[#0a0a0a] dark:text-white font-semibold text-sm flex items-center justify-center tracking-wider"
            title={`${name} — ${role}`}
          >
            {monogram}
          </div>
        )}
        <span
          className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#0a0a0a] dark:bg-white border-2 border-white dark:border-[#0a0a0a]"
          title="Online & Designing"
        />
      </div>

      {/* Designer Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-semibold text-[#0a0a0a] dark:text-white truncate">
            {name}
          </span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-1.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-[#0a0a0a] dark:text-[#ededed] border border-black/15 dark:border-white/20">
            {role.split(" ")[0]}
          </span>
        </div>
        <p className="text-[11px] sm:text-xs text-black/60 dark:text-[#ededed]/65 truncate">
          {role}
        </p>

        {showNote && !compact && (
          <p className="text-[11px] text-black/55 dark:text-[#ededed]/60 mt-1 italic line-clamp-1">
            &ldquo;{note}&rdquo;
          </p>
        )}
      </div>

      {statusBadge && !compact && (
        <div className="hidden lg:flex items-center text-[10px] text-[#0a0a0a] dark:text-[#ededed] bg-black/5 dark:bg-black/80 border border-black/15 dark:border-white/20 px-2.5 py-1 rounded-full font-medium">
          {statusBadge}
        </div>
      )}
    </div>
  );
}

export default DesignerCreditBadge;
