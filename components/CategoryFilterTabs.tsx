import React from "react";
import { DEMO_CATEGORIES, DemoCategoryMeta } from "@/data/demosRegistry";
import { CategoryIcon } from "./Icons";

interface CategoryFilterTabsProps {
  activeCategory: string;
  onSelectCategory: (categoryKey: string) => void;
  categoryCounts: Record<string, number>;
}

export function CategoryFilterTabs({
  activeCategory,
  onSelectCategory,
  categoryCounts,
}: CategoryFilterTabsProps) {
  return (
    <div className="w-full">
      {/* Scrollable Container with horizontal indicator */}
      <div className="relative">
        <div
          role="tablist"
          aria-label="Filter showcase demos by industry"
          className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x focus:outline-none"
        >
          {DEMO_CATEGORIES.map((cat: DemoCategoryMeta) => {
            const isActive =
              activeCategory.toLowerCase() === cat.id.toLowerCase() ||
              (cat.categoryKey && activeCategory.toLowerCase() === cat.categoryKey.toLowerCase());

            const count = categoryCounts[cat.id.toLowerCase()] ?? cat.count;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(cat.id)}
                className={`group flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border snap-start select-none focus:outline-none focus:ring-2 focus:ring-amber-500/40 ${
                  isActive
                    ? "bg-amber-500 text-zinc-950 border-amber-500 shadow-sm shadow-amber-500/25 font-bold"
                    : "bg-white/70 dark:bg-[#0d0f16]/80 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white"
                }`}
              >
                <CategoryIcon
                  name={cat.iconName}
                  className={`w-3.5 h-3.5 transition-colors ${
                    isActive
                      ? "text-zinc-950"
                      : "text-zinc-400 group-hover:text-amber-500 dark:group-hover:text-amber-400"
                  }`}
                />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md transition-colors ${
                    isActive
                      ? "bg-black/15 text-zinc-950 font-bold"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryFilterTabs;
