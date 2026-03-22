"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/components/providers/language-provider";

export default function HeroSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#020617] py-20 md:py-28">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_25%)]" />

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div className={`space-y-8 ${locale === "ar" ? "lg:text-right" : "lg:text-left"} text-center`}>
            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              {t.hero.badge}
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t.hero.title}
              </h1>

              <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300 lg:mx-0">
                {t.hero.description}
              </p>
            </div>

            <div
              className={`flex flex-col gap-4 sm:flex-row ${
                locale === "ar"
                  ? "lg:justify-end"
                  : "lg:justify-start"
              } justify-center`}
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700 hover:scale-[1.02]"
              >
                {t.hero.viewProjects}
              </Link>

              <Link
                href="/about-stem"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                {t.hero.learnAboutStem}
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="/projects/hero-stem.jpg"
                alt="STEM students working on projects"
                width={900}
                height={700}
                className="h-full w-full object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex rounded-full bg-slate-950/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  {locale === "ar" ? "مشاريع STEM المبتكرة" : "Innovative STEM Projects"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}