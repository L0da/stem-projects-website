"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/components/providers/language-provider";
import { Users, FolderKanban, Layers, LucideIcon } from "lucide-react";

type StatItem = {
  label: string;
  value: number;
  icon: LucideIcon;
};

export default function StatsSection() {
  const { locale } = useLanguage();

  const stats: StatItem[] =
    locale === "ar"
      ? [
          { label: "مشروع", value: 50, icon: FolderKanban },
          { label: "طالب", value: 120, icon: Users },
          { label: "مجال", value: 8, icon: Layers },
        ]
      : [
          { label: "Projects", value: 50, icon: FolderKanban },
          { label: "Students", value: 120, icon: Users },
          { label: "Fields", value: 8, icon: Layers },
        ];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {locale === "ar" ? "إحصائيات المنصة" : "Platform Statistics"}
          </h2>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            {locale === "ar"
              ? "نظرة سريعة على إنجازات المنصة"
              : "A quick look at platform achievements"}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  index,
}: StatItem & { index: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1200;
    const stepTime = 16;
    const increment = value / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [hasStarted, value]);

  const animationClass =
    index === 0
      ? "animate-[spin_5s_linear_infinite]"
      : index === 1
        ? "animate-[spin_7s_linear_infinite]"
        : "animate-[spin_6s_linear_infinite]";

  return (
    <div className="group relative overflow-hidden rounded-2xl p-[1px]">
      {/* Animated moving partial border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className={`${animationClass} absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_260deg,rgba(59,130,246,0.9)_300deg,rgba(59,130,246,0.9)_320deg,transparent_360deg)]`}
        />

        {/* glow */}
        <div
          className={`${animationClass} absolute inset-0 blur-md opacity-60 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_260deg,rgba(59,130,246,0.6)_300deg,rgba(59,130,246,0.6)_320deg,transparent_360deg)]`}
        />
      </div>

      {/* Inner mask */}
      <div className="absolute inset-[1px] rounded-2xl bg-[#081633]" />

      {/* Card content */}
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/20 hover:shadow-[0_12px_40px_rgba(37,99,235,0.14)] sm:p-7"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative mb-4 flex justify-center">
          <div className="rounded-2xl bg-blue-500/10 p-3 ring-1 ring-blue-400/20">
            <Icon className="h-7 w-7 text-blue-400" />
          </div>
        </div>

        <h3 className="relative bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          {count}+
        </h3>

        <p className="relative mt-3 text-sm font-medium text-slate-300 sm:text-base">
          {label}
        </p>
      </div>
    </div>
  );
}