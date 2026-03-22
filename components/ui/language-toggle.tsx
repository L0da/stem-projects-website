"use client";

import { useLanguage } from "@/components/providers/language-provider";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "en" ? "ar" : "en")}
      className="rounded-full border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
      aria-label="Toggle language"
    >
      <span className="font-semibold">
        {locale === "en" ? "EN" : "AR"}
      </span>
    </button>
  );
}