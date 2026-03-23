"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/language-provider";

export default function AboutSchoolPage() {
  const { locale } = useLanguage();

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
      { threshold: 0.4 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="py-16 sm:py-20">
      <Container>
        {/* Title */}
        <SectionTitle
          title={locale === "ar" ? "عن مدرستنا" : "About Our School"}
        />

        {/* Intro */}
        <div className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
          <p>
            {locale === "ar"
              ? "تركز مدرسة STEM على الابتكار والتفكير النقدي والتعلم العملي، حيث يتم تشجيع الطلاب على استكشاف العلوم والتكنولوجيا والهندسة والرياضيات من خلال مشاريع واقعية."
              : "Our STEM school focuses on innovation, critical thinking, and hands-on learning through real-world projects."}
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          
          {/* Text */}
          <div className="space-y-6 text-slate-300 leading-8 max-w-xl">
            <p className="text-xl font-semibold text-white">
              {locale === "ar"
                ? "في مدارس المجد، نرتقي بالتعليم عبر نظام STEM ليصبح تجربة تفاعلية ومتكاملة:"
                : "At Almajd Schools, we elevate education through STEM into an interactive experience:"}
            </p>

            <ul className="space-y-3 text-sm sm:text-base">
              <li>• {locale === "ar" ? "نغرس الفضول: الطلاب يكتشفون العلم والتقنية عمليًا، لا نظريًا فقط." : "We spark curiosity through hands-on learning."}</li>
              <li>• {locale === "ar" ? "نطور التفكير النقدي والإبداعي: كل مشروع يُحوّل فكرة إلى واقع ملموس." : "We develop critical and creative thinking."}</li>
              <li>• {locale === "ar" ? "نربط التعلم بالحياة: العلوم والهندسة والتقنية أدوات لفهم العالم وحل مشكلاته." : "We connect learning with real-life applications."}</li>
              <li>• {locale === "ar" ? "نصنع قادة المستقبل: طلابنا يكتسبون مهارات الابتكار والعمل الجماعي منذ الصغر." : "We prepare future leaders with innovation skills."}</li>
            </ul>

            <p className="pt-4 text-base text-slate-400">
              {locale === "ar"
                ? "ستيم في مدارس المجد: تعليم يتجاوز الكتب، ويصنع عقولاً ترى الفرص حيث يراها الآخرون تحديات."
                : "STEM at Almajd: Education beyond books, shaping minds that see opportunities."}
            </p>
          </div>

          {/* Video */}
          <div ref={sectionRef} className="flex justify-center">
            <div className="w-full max-w-[380px] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-xl transition hover:scale-[1.02]">
              
              <div className="relative w-full max-h-[500px] flex items-center justify-center">
                <video
                  ref={videoRef}
                  className="max-h-[500px] w-auto object-contain"
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  controls
                  poster="/projects/fab-lab-thumbnail.jpg"
                >
                  <source src="/projects/fab-lab.mp4" type="video/mp4" />
                </video>

                {/* overlay خفيف */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}