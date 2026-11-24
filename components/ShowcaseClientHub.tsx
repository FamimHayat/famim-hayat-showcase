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

const DEFAULT_VISIBLE_COUNT = 20;
const VISIBLE_LIMIT_OPTIONS = [20, 40, 60, "all"] as const;
type VisibleLimitOption = (typeof VISIBLE_LIMIT_OPTIONS)[number];

export function ShowcaseClientHub() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleLimit, setVisibleLimit] = useState<VisibleLimitOption>(DEFAULT_VISIBLE_COUNT);
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

  // Visible slice after category and search filtering
  const visibleDemos = useMemo(() => {
    if (visibleLimit === "all") return filteredDemos;
    return filteredDemos.slice(0, visibleLimit);
  }, [filteredDemos, visibleLimit]);

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
    <div className="min-h-screen flex flex-col bg-[#fafaf9] dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-[#ededed] transition-colors duration-200">
      {/* Top Sticky Header */}
      <Navbar onOpenCredit={() => setIsCreditModalOpen(true)} />

      {/* Hero Showcase Section */}
      <HeroSection
        totalCount={DEMOS_REGISTRY.length}
        liveCount={1}
        categoriesCount={11}
      />

      {/* Showcase Explorer & Filter Deck */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 py-8 space-y-6">
        {/* Section Display Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-black/15 dark:border-white/15">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-black/55 dark:text-white/70 block mb-1">
              ARCHITECTURAL INDEX • 11 SECTORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tighter lowercase text-[#0a0a0a] dark:text-white text-glow-hard">
              featured demos
            </h2>
          </div>
          <span className="font-mono text-[11px] bg-black/5 dark:bg-black/80 px-3 py-1.5 rounded-none border border-black/15 dark:border-white/20 text-black/70 dark:text-white/80 self-start sm:self-auto">
            Showing{" "}
            <strong className="text-[#0a0a0a] dark:text-white text-glow font-bold">
              {visibleDemos.length}
            </strong>{" "}
            of {filteredDemos.length} Demos
            {filteredDemos.length !== DEMOS_REGISTRY.length && (
              <span className="text-black/45 dark:text-white/60">
                {" "}({DEMOS_REGISTRY.length} total)
              </span>
            )}
          </span>
        </div>

        {/* Search Bar + Visible Limit Selector */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div className="w-full md:max-w-md">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              resultCount={filteredDemos.length}
              totalCount={DEMOS_REGISTRY.length}
              activeCategoryLabel={activeCategoryMeta.label}
            />
          </div>

          <div
            className="flex items-center gap-2.5 self-start md:self-auto"
            role="group"
            aria-label="Samples per view"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-black/55 dark:text-white/70">
              Show
            </span>
            <div className="inline-flex items-center border border-black/15 dark:border-white/15 bg-white dark:bg-black/80 rounded-none divide-x divide-black/15 dark:divide-white/15">
              {VISIBLE_LIMIT_OPTIONS.map((option) => {
                const isSelected = visibleLimit === option;
                const label = option === "all" ? "All" : String(option);
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={isSelected}
                    aria-label={`Show ${option === "all" ? "all" : option} demos`}
                    onClick={() => setVisibleLimit(option)}
                    className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.15em] rounded-none transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-black/40 dark:focus:ring-white/40 ${
                      isSelected
                        ? "bg-[#0a0a0a] text-white dark:bg-black/90 dark:text-white border border-black dark:border-white/50 text-glow-lighter font-bold"
                        : "text-black/70 dark:text-white/70 hover:text-[#0a0a0a] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            {visibleLimit !== DEFAULT_VISIBLE_COUNT && (
              <button
                type="button"
                onClick={() => setVisibleLimit(DEFAULT_VISIBLE_COUNT)}
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/55 dark:text-white/70 hover:text-[#0a0a0a] dark:hover:text-white underline cursor-pointer"
                title={`Reset visible count to ${DEFAULT_VISIBLE_COUNT}`}
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* 11 Industry Filter Tabs with Live Count Badges */}
        <div className="pt-1">
          <CategoryFilterTabs
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            categoryCounts={categoryCounts}
          />
        </div>

        {/* Category Description Banner (if specific category selected) */}
        {activeCategory !== "all" && (
          <div className="p-4 sm:p-5 rounded-none bg-black/[0.02] dark:bg-black/80 border border-black/20 dark:border-white/25 flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-black/60 dark:text-white/70 font-bold tracking-[0.25em]">
                Industry Sector
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold tracking-tighter lowercase text-[#0a0a0a] dark:text-white text-glow-hard mt-0.5">
                {activeCategoryMeta.label} ({categoryCounts[activeCategory.toLowerCase()] ?? activeCategoryMeta.count} landing pages)
              </h2>
              <p className="text-xs text-black/65 dark:text-white/75 mt-1">
                {activeCategoryMeta.description}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className="text-xs font-mono uppercase tracking-[0.15em] font-semibold text-[#0a0a0a] dark:text-white text-glow hover:underline px-3 py-1.5 border border-black/20 dark:border-white/25 rounded-none shrink-0"
            >
              View All 99 →
            </button>
          </div>
        )}

        {/* Showcase Grid */}
        {visibleDemos.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-2">
              {visibleDemos.map((demo) => (
                <DemoCard
                  key={demo.id}
                  demo={demo}
                  onPreviewClick={(d) => setSelectedDemo(d)}
                />
              ))}
            </div>

            {visibleDemos.length < filteredDemos.length && (
              <div className="pt-6 border-t border-black/15 dark:border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-black/60 dark:text-white/75">
                  Displaying{" "}
                  <strong className="text-[#0a0a0a] dark:text-white text-glow">
                    {visibleDemos.length}
                  </strong>{" "}
                  of {filteredDemos.length} matching demos
                </span>
                <div className="flex items-center gap-2">
                  {visibleLimit === 20 && filteredDemos.length > 20 && (
                    <button
                      type="button"
                      onClick={() => setVisibleLimit(40)}
                      className="px-3.5 py-1.5 rounded-none text-[11px] font-mono uppercase tracking-[0.15em] border border-black/20 dark:border-white/25 bg-white dark:bg-black/80 text-[#0a0a0a] dark:text-white/80 hover:border-black/60 dark:hover:border-white/55 transition-colors cursor-pointer"
                    >
                      Show 40
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setVisibleLimit("all")}
                    className="px-3.5 py-1.5 rounded-none text-[11px] font-mono uppercase tracking-[0.15em] font-bold bg-[#0a0a0a] text-white dark:bg-black/90 dark:text-white border border-black/20 dark:border-white/45 hover:border-white/80 text-glow transition-all cursor-pointer"
                  >
                    Show All ({filteredDemos.length})
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Empty Search / Filter State */
          <div className="py-20 text-center flex flex-col items-center justify-center p-8 rounded-none border border-dashed border-black/25 dark:border-white/25 bg-white/50 dark:bg-black/80">
            <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 text-[#0a0a0a] dark:text-white border border-black/15 dark:border-white/25 flex items-center justify-center mb-4">
              <SparklesIcon className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-extrabold tracking-tighter lowercase text-[#0a0a0a] dark:text-white text-glow-lighter">
              no matching landing pages found
            </h2>
            <p className="text-xs sm:text-sm text-black/60 dark:text-white/70 mt-1.5 max-w-sm">
              We couldn&apos;t find any demos matching &ldquo;{searchQuery}&rdquo; in the {activeCategoryMeta.label} sector.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="px-3.5 py-2 text-xs font-mono uppercase tracking-[0.15em] font-semibold rounded-none bg-black/5 dark:bg-black/80 text-[#0a0a0a] dark:text-white/80 border border-black/20 dark:border-white/25 hover:border-black/50 dark:hover:border-white/50 transition-colors"
              >
                Clear Search Query
              </button>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="px-3.5 py-2 text-xs font-mono uppercase tracking-[0.15em] font-bold rounded-none bg-[#0a0a0a] text-white dark:bg-black/90 dark:text-white border border-black/20 dark:border-white/45 hover:border-white/80 text-glow transition-all"
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
