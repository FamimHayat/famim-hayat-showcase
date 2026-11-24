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
                className={`group flex items-center gap-2 px-3.5 py-2 rounded-none text-xs font-semibold whitespace-nowrap transition-all duration-200 border snap-start select-none focus:outline-none focus:ring-1 focus:ring-black/40 dark:focus:ring-white/40 ${
                  isActive
                    ? "bg-[#0a0a0a] text-white dark:bg-black/90 dark:text-white border-[#0a0a0a] dark:border-white/50 text-glow font-bold"
                    : "bg-white dark:bg-black/80 text-black/70 dark:text-white/75 border-black/15 dark:border-white/15 hover:border-black/45 dark:hover:border-white/45 hover:text-[#0a0a0a] dark:hover:text-white"
                }`}
              >
                <CategoryIcon
                  name={cat.iconName}
                  className={`w-3.5 h-3.5 transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-black/45 dark:text-white/55 group-hover:text-black dark:group-hover:text-white"
                  }`}
                />
                <span className="lowercase tracking-tight">{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full transition-colors ${
                    isActive
                      ? "bg-white/15 text-white font-bold"
                      : "bg-black/5 dark:bg-white/10 text-black/60 dark:text-white/70"
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
