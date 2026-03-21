"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="rounded-full border border-gray-300 dark:border-zinc-700 p-2 text-gray-700 dark:text-zinc-300 dark:border-gray-700 dark:text-gray-300"
        aria-label="Toggle theme"
      >
        <span className="text-lg">🌙</span>
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-gray-300 dark:border-zinc-700 p-2 text-gray-700 dark:text-zinc-300 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-zinc-800"
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="text-lg">{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}