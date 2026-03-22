"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ui/theme-toggle";
import LanguageToggle from "@/components/ui/language-toggle";
import { useLanguage } from "@/components/providers/language-provider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about-school", label: t.nav.aboutSchool },
    { href: "/about-stem", label: t.nav.aboutStem },
    { href: "/projects", label: t.nav.projects },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-blue-700 transition hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 sm:text-xl"
        >
          {t.siteName}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-gray-900 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
        >
          {isOpen ? t.menu.close : t.menu.open}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-gray-700 dark:text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-gray-900 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}