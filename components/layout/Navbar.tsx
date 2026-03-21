"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-school", label: "About School" },
  { href: "/about-stem", label: "About STEM" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold text-blue-700 dark:text-blue-400 sm:text-xl"
        >
          STEM Projects
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-black dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-black md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-black dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme Toggle in mobile */}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}