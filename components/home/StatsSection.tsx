"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/components/providers/language-provider";
import { Users, FolderKanban, Layers } from "lucide-react";

export default function StatsSection() {
  const { locale } = useLanguage();

  const stats =
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
        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {locale === "ar" ? "إحصائيات المنصة" : "Platform Statistics"}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {locale === "ar"
              ? "نظرة سريعة على إنجازات المنصة"
              : "A quick look at platform achievements"}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatCard({ label, value, icon: Icon }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_10px_40px_rgba(37,99,235,0.15)]">
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <Icon className="h-8 w-8 text-blue-400" />
      </div>

      {/* Number */}
      <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 sm:text-5xl">
        +{count}
      </h3>

      {/* Label */}
      <p className="mt-3 text-sm text-slate-400 sm:text-base">
        {label}
      </p>
    </div>
  );
}