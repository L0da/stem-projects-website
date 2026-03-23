"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/theme-toggle";
import LanguageToggle from "@/components/ui/language-toggle";
import { useLanguage } from "@/components/providers/language-provider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, locale } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about-school", label: t.nav.aboutSchool },
    { href: "/about-stem", label: t.nav.aboutStem },
    { href: "/projects", label: t.nav.projects},
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-slate-950/70 backdrop-blur-md shadow-lg"
          : "border-white/10 bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#020617]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group text-lg font-bold tracking-tight sm:text-xl"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-blue-400 transition-all duration-300 group-hover:text-blue-300">
            STEM
          </span>{" "}
          <span className="relative text-white transition-all duration-300 group-hover:text-blue-100">
            {locale === "ar" ? "مشاريع" : "Projects"}

            {/* underline animation */}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-2 py-1 transition-all duration-200 ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white hover:opacity-90"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-0 h-[2px] bg-blue-400 transition-all duration-300 ${
                      locale === "ar" ? "right-0" : "left-0"
                    } ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 md:hidden"
        >
          {isOpen ? t.menu.close : t.menu.open}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 sm:px-6">
            <nav className="flex flex-col gap-3 text-sm font-medium text-slate-300">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-3 py-2 transition ${
                      isActive
                        ? "bg-blue-600/15 text-blue-400"
                        : "hover:bg-white/5 hover:text-white hover:opacity-90"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3 pt-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}