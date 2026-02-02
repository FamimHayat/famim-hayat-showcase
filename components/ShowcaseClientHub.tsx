"use client";

import React, { useState, useMemo } from "react";
import {
  DEMOS_REGISTRY,
  DEMO_CATEGORIES,
  filterDemos,
  getCategoryCounts,
  DemoItem,
} from "@/data/demosRegistry";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { CategoryFilterTabs } from "./CategoryFilterTabs";
import { SearchBar } from "./SearchBar";
import { DemoCard } from "./DemoCard";
import { ComingSoonModal } from "./ComingSoonModal";
import { DesignerCreditModal } from "./DesignerCreditModal";
import { Footer } from "./Footer";
import { SparklesIcon } from "./Icons";

export function ShowcaseClientHub() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDemo, setSelectedDemo] = useState<DemoItem | null>(null);
  const [isCreditModalOpen, setIsCreditModalOpen] = useState<boolean>(false);

  // Dynamic category counts from registry
  const categoryCounts = useMemo(() => {
    return getCategoryCounts(DEMOS_REGISTRY);
  }, []);

  // Filtered demo items based on category + search
  const filteredDemos = useMemo(() => {
    return filterDemos(DEMOS_REGISTRY, activeCategory, searchQuery);
  }, [activeCategory, searchQuery]);

  // Label of active category
  const activeCategoryMeta = useMemo(() => {
    return (
      DEMO_CATEGORIES.find(
        (c) =>
          c.id.toLowerCase() === activeCategory.toLowerCase() ||
          (c.categoryKey && c.categoryKey.toLowerCase() === activeCategory.toLowerCase())
      ) || DEMO_CATEGORIES[0]
    );
  }, [activeCategory]);

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] dark:bg-[#07080b] text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      {/* Top Sticky Header */}
      <Navbar onOpenCredit={() => setIsCreditModalOpen(true)} />

      {/* Hero Showcase Section */}
      <HeroSection
        totalCount={DEMOS_REGISTRY.length}
        liveCount={1}
        categoriesCount={11}
      />

      {/* Showcase Explorer & Filter Deck */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Search Bar + Controls */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="w-full md:max-w-md">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              resultCount={filteredDemos.length}
              totalCount={DEMOS_REGISTRY.length}
              activeCategoryLabel={activeCategoryMeta.label}
            />
          </div>

          <div className="w-full md:w-auto flex items-center justify-between sm:justify-end gap-3 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="font-mono text-[11px] bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800">
              Showing{" "}
              <strong className="text-zinc-900 dark:text-zinc-100 font-bold">
                {filteredDemos.length}
              </strong>{" "}
              of 99 Demos
            </span>
          </div>
        </div>

        {/* 11 Industry Filter Tabs with Live Count Badges */}
        <div className="pt-2">
          <CategoryFilterTabs
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            categoryCounts={categoryCounts}
          />
        </div>

        {/* Category Description Banner (if specific category selected) */}
        {activeCategory !== "all" && (
          <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-500/20 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 font-bold tracking-wider">
                Industry Sector
              </span>
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                {activeCategoryMeta.label} ({categoryCounts[activeCategory.toLowerCase()] ?? activeCategoryMeta.count} landing pages)
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                {activeCategoryMeta.description}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline px-2 py-1"
            >
              View All 99 →
            </button>
          </div>
        )}

        {/* Showcase Grid */}
        {filteredDemos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredDemos.map((demo) => (
              <DemoCard
                key={demo.id}
                demo={demo}
                onPreviewClick={(d) => setSelectedDemo(d)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="py-20 text-center flex flex-col items-center justify-center p-8 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-3">
              <SparklesIcon className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              No matching landing pages found
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-sm">
              We couldn&apos;t find any demos matching &ldquo;{searchQuery}&rdquo; in the {activeCategoryMeta.label} sector.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              >
                Clear Search Query
              </button>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer Directory */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Concept Spec Modal for Coming Soon Demos */}
      <ComingSoonModal
        demo={selectedDemo}
        onClose={() => setSelectedDemo(null)}
      />

      {/* Designer Credit Modal for Famim Hayat */}
      <DesignerCreditModal
        isOpen={isCreditModalOpen}
        onClose={() => setIsCreditModalOpen(false)}
      />
    </div>
  );
}

export default ShowcaseClientHub;
