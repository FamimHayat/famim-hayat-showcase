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
        <div className="absolute left-3.5 text-zinc-400 dark:text-zinc-500 pointer-events-none">
          <SearchIcon className="w-4 h-4" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search 99 demos by name, industry, keywords, or slug..."
          aria-label="Search demos"
          className="w-full pl-10 pr-28 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-[#0d0f16] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500/50 transition-all shadow-sm"
        />

        {/* Right Actions: Result Counter + Clear Button */}
        <div className="absolute right-3 flex items-center gap-2">
          {value ? (
            <button
              type="button"
              onClick={() => onChange("")}
              className="p-1 rounded-md text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
              title="Clear search"
            >
              <CloseIcon className="w-3.5 h-3.5" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">
              /
            </kbd>
          )}

          <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 border-l border-zinc-200 dark:border-zinc-800 pl-2">
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">
              {resultCount}
            </span>
            <span className="text-zinc-400 dark:text-zinc-600">/{totalCount}</span>
          </div>
        </div>
      </div>

      {/* Active Filter Context Hint */}
      {(value || activeCategoryLabel !== "All") && (
        <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 px-1">
          <div className="flex items-center gap-1.5">
            <span>Filtered by:</span>
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              {activeCategoryLabel}
            </span>
            {value && (
              <>
                <span>• matching:</span>
                <span className="font-mono text-zinc-800 dark:text-zinc-200">
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
              className="text-amber-600 dark:text-amber-400 hover:underline"
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
