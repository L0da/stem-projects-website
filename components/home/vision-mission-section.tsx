"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/components/providers/language-provider";
import { Eye, Target } from "lucide-react";

export default function VisionMissionSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {t.visionMission.title}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {locale === "ar"
              ? "تعرف على رؤية البرنامج ورسالته في إعداد جيل مبتكر وقادر على صناعة المستقبل"
              : "Discover the program's vision and mission in preparing an innovative generation ready for the future"}
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Image Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <Image
              src="/projects/vision-mission.jpeg"
              alt={locale === "ar" ? "رؤية ورسالة STEM" : "STEM vision and mission"}
              width={1000}
              height={800}
              className="h-full min-h-[320px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                {locale === "ar" ? "رؤية ورسالة STEM" : "STEM Vision & Mission"}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid gap-6">
            <div className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(37,99,235,0.12)] sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {t.visionMission.visionTitle}
                </h3>
              </div>

              <p className="text-base leading-8 text-slate-300">
                {t.visionMission.visionText}
              </p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {t.visionMission.missionTitle}
                </h3>
              </div>

              <p className="text-base leading-8 text-slate-300">
                {t.visionMission.missionText}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}