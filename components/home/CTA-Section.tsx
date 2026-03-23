"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/components/providers/language-provider";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const { locale } = useLanguage();

  const isArabic = locale === "ar";

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-[#0b1733]/70 to-slate-900/80 px-6 py-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:px-10 sm:py-14"
        >
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.12),transparent_40%)]" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {isArabic
                ? "ابدأ استكشاف مشاريع الطلاب الآن"
                : "Start Exploring Student Projects"}
            </h2>

            <p className="mt-4 text-slate-300 sm:text-lg">
              {isArabic
                ? "اكتشف أفكارًا مبتكرة ومشاريع مميزة تعكس إبداع طلاب STEM."
                : "Discover innovative ideas and outstanding projects created by STEM students."}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              
              {/* Primary Button */}
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-[1.04] hover:bg-blue-700"
              >
                {isArabic ? "عرض المشاريع" : "View Projects"}

                <ArrowRight
                  className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${
                    isArabic ? "rotate-180 group-hover:-translate-x-1" : ""
                  }`}
                />
              </Link>

              {/* Secondary Button */}
              <Link
                href="/about-stem"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {isArabic ? "تعرّف على STEM" : "Learn About STEM"}
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}