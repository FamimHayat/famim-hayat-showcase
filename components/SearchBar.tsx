import React from "react";
import { SearchIcon, CloseIcon } from "./Icons";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
  totalCount: number;
  activeCategoryLabel: string;
}

export function SearchBar({
  value,
  onChange,
  resultCount,
  totalCount,
  activeCategoryLabel,
}: SearchBarProps) {
  return (
    <div className="w-full">
      <div className="relative flex items-center">
        {/* Left Search Icon */}
        <div className="absolute left-3.5 text-black/45 dark:text-[#ededed]/50 pointer-events-none">
          <SearchIcon className="w-4 h-4" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search 99 demos by name, industry, keywords, or slug..."
          aria-label="Search demos"
          className="w-full pl-10 pr-28 py-2.5 rounded-none text-xs sm:text-sm bg-white dark:bg-black/80 border border-black/20 dark:border-white/20 text-[#0a0a0a] dark:text-[#ededed] placeholder-black/40 dark:placeholder-[#ededed]/40 focus:outline-none focus:border-black/60 dark:focus:border-white/50 transition-all"
        />

        {/* Right Actions: Result Counter + Clear Button */}
        <div className="absolute right-3 flex items-center gap-2">
          {value ? (
            <button
              type="button"
              onClick={() => onChange("")}
              className="p-1 rounded-none text-black/50 dark:text-[#ededed]/60 hover:text-black dark:hover:text-white transition-colors"
              title="Clear search"
            >
              <CloseIcon className="w-3.5 h-3.5" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-black/50 dark:text-[#ededed]/50 bg-black/5 dark:bg-white/5 rounded-none border border-black/15 dark:border-white/15">
              /
            </kbd>
          )}

          <div className="text-[11px] font-mono text-black/50 dark:text-[#ededed]/50 border-l border-black/15 dark:border-white/15 pl-2">
            <span className="font-semibold text-[#0a0a0a] dark:text-white">
              {resultCount}
            </span>
            <span className="text-black/40 dark:text-[#ededed]/40">/{totalCount}</span>
          </div>
        </div>
      </div>

      {/* Active Filter Context Hint */}
      {(value || activeCategoryLabel !== "All") && (
        <div className="mt-2 flex items-center justify-between text-[11px] text-black/60 dark:text-[#ededed]/65 px-1">
          <div className="flex items-center gap-1.5">
            <span className="uppercase tracking-[0.2em] text-[10px]">Filtered by:</span>
            <span className="font-semibold text-[#0a0a0a] dark:text-white text-glow">
              {activeCategoryLabel}
            </span>
            {value && (
              <>
                <span>• matching:</span>
                <span className="font-mono text-[#0a0a0a] dark:text-white">
                  &ldquo;{value}&rdquo;
                </span>
              </>
            )}
          </div>
          {(value || activeCategoryLabel !== "All") && (
            <button
              type="button"
              onClick={() => {
                onChange("");
              }}
              className="text-[#0a0a0a] dark:text-white uppercase tracking-[0.15em] text-[10px] font-semibold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
