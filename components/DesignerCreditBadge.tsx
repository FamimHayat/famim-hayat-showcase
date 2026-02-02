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
      className={`group relative flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 ${
        onClick ? "cursor-pointer hover:border-amber-500/40 hover:bg-amber-500/[0.03]" : ""
      } bg-white/70 dark:bg-[#0d0f16]/90 border-zinc-200/90 dark:border-zinc-800/80 shadow-sm ${className}`}
    >
      {/* Designer Avatar with Monogram Fallback */}
      <div className="relative flex-shrink-0">
        {designerImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={designerImage}
            alt={name}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-amber-500/30"
          />
        ) : (
          <div
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-zinc-900 border border-amber-500/40 text-amber-500 dark:text-amber-400 font-semibold text-sm flex items-center justify-center tracking-wider shadow-inner"
            title={`${name} — ${role}`}
          >
            {monogram}
          </div>
        )}
        <span
          className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#07080b]"
          title="Online & Designing"
        />
      </div>

      {/* Designer Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
            {name}
          </span>
          <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
            {role.split(" ")[0]}
          </span>
        </div>
        <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 truncate">
          {role}
        </p>

        {showNote && !compact && (
          <p className="text-[11px] text-zinc-600 dark:text-zinc-400/90 mt-1 italic line-clamp-1">
            &ldquo;{note}&rdquo;
          </p>
        )}
      </div>

      {statusBadge && !compact && (
        <div className="hidden lg:flex items-center text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-full font-medium">
          {statusBadge}
        </div>
      )}
    </div>
  );
}

export default DesignerCreditBadge;
