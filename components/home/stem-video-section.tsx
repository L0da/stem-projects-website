"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/components/providers/language-provider";

export default function StemVideoSection() {
  const { t, locale } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          try {
            await video.play();
          } catch {}
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const videoBlock = (
    <div className="flex justify-center">
      <div className="w-full max-w-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <div className="relative h-[560px] w-full sm:h-[620px]">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted
            playsInline
            loop
            preload="metadata"
            poster="/projects/stem-video-thumbnail.png"
            controls
          >
            <source src="/projects/what-is-stem.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );

  const textBlock = (
    <div className={locale === "ar" ? "text-right" : "text-left"}>
      <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
        {locale === "ar" ? "تعرّف على STEM" : "Discover STEM"}
      </div>

      <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {t.stemVideo.title}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
        {t.stemVideo.subtitle}
      </p>

      <div
        className={`mt-8 flex ${
          locale === "ar" ? "justify-end" : "justify-start"
        }`}
      >
        <Link
          href="/about-stem"
          className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          {t.stemVideo.learnMore}
        </Link>
      </div>
    </div>
  );

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-8 lg:p-10">
          <div
            ref={sectionRef}
            className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px]"
          >
            {textBlock}
            {videoBlock}
          </div>
        </div>
      </Container>
    </section>
  );
}