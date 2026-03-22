"use client";

import { useLanguage } from "@/components/providers/language-provider";

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-gray-600 dark:text-slate-300">
        {locale === "ar"
          ? "© 2026 موقع مشاريع STEM. جميع الحقوق محفوظة."
          : "© 2026 STEM Projects Website. All rights reserved."}
      </div>
    </footer>
  );
}