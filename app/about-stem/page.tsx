"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/language-provider";
import VisionMissionSection from "./vision-mission-section";

export default function AboutStemPage() {
  const { locale } = useLanguage();

  return (
    <main className="py-16 sm:py-20">
      <Container>
        {/* Hero */}
        <SectionTitle
          title={locale === "ar" ? "عن تعليم STEM" : "About STEM Education"}
        />

        <div className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
          <p>
            {locale === "ar"
              ? "يجمع تعليم STEM بين العلوم والتكنولوجيا والهندسة والرياضيات في نموذج تعليمي متكامل قائم على التطبيقات الواقعية، مما يساعد الطلاب على الاستعداد للمستقبل."
              : "STEM education integrates science, technology, engineering, and mathematics into a real-world learning model."}
          </p>
        </div>

        {/* STEM Explanation */}
        <div className="mx-auto mt-12 max-w-3xl text-center text-slate-300 space-y-4">
          <p>
            {locale === "ar"
              ? "يعتمد تعليم STEM على التعلم بالمشاريع، حيث يطبق الطلاب المعرفة بشكل عملي من خلال تجارب وتحديات واقعية."
              : "STEM focuses on project-based learning where students apply knowledge through real challenges."}
          </p>

          <p>
            {locale === "ar"
              ? "يساعد هذا النهج في تنمية مهارات التفكير النقدي، الإبداع، والعمل الجماعي، مما يؤهل الطلاب لمواجهة تحديات المستقبل."
              : "This approach builds critical thinking, creativity, and teamwork skills."}
          </p>
        </div>
      </Container>

      {/* Vision & Mission Section */}
      <VisionMissionSection />
      <div className="mt-16 text-center">
        <a
          href="/projects"
          className="inline-flex bg-blue-600 px-6 py-3 rounded-xl text-white hover:bg-blue-700 transition"
        >
          {locale === "ar" ? "استكشف المشاريع" : "Explore Projects"}
        </a>
      </div>
    </main>
  );
}