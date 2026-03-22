"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/components/providers/language-provider";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 dark:from-slate-900 dark:to-slate-800 sm:py-20">
      <Container>
        <div className="max-w-3xl space-y-5 sm:space-y-6 text-left rtl:text-right">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 sm:px-4 sm:text-sm">
            {t.hero.badge}
          </span>

          <h1 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            {t.hero.title}
          </h1>

          <p className="text-base leading-7 text-gray-600 dark:text-slate-300 sm:text-lg sm:leading-8 md:text-xl">
            {t.hero.description}
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/projects"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              {t.hero.viewProjects}
            </Link>

            <Link
              href="/about-stem"
              className="rounded-xl border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {t.hero.learnAboutStem}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}