"use client";

import { useSyncExternalStore, useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "./Icons";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getThemeSnapshot(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("famim-showcase-theme");
  return saved === "light" ? "light" : "dark";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [isClient, setIsClient] = useState(false);
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, () => "dark");

  useEffect(() => {
    // Sync class list with external store
    const timer = setTimeout(() => {
      setIsClient(true);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("famim-showcase-theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }

    // Trigger update for subscribers
    window.dispatchEvent(new Event("storage"));
  };

  if (!isClient) {
    return (
      <div
        className={`w-9 h-9 rounded-full border border-black/15 dark:border-white/20 bg-black/5 dark:bg-black/80 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 border text-[#0a0a0a] dark:text-[#ededed] bg-white/90 dark:bg-black/80 border-black/15 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 hover:text-black dark:hover:text-white focus:outline-none focus:ring-1 focus:ring-black/40 dark:focus:ring-white/40 ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <SunIcon className="w-4 h-4 transition-transform duration-200 hover:rotate-45 text-white" />
      ) : (
        <MoonIcon className="w-4 h-4 transition-transform duration-200 hover:-rotate-12 text-[#0a0a0a]" />
      )}
    </button>
  );
}

export default ThemeToggle;
