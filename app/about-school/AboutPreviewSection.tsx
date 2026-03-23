"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/language-provider";

export default function AboutPreviewSection() {
  const { locale } = useLanguage();

  const content =
    locale === "ar"
      ? {
          title: "عن مدرسة STEM",
          subtitle:
            "تشجع مدرستنا الابتكار والتفكير النقدي والتعلم القائم على المشاريع من خلال تعليم STEM.",
          description:
            "نؤمن أن التعليم لا يقتصر على دراسة النظريات فقط، بل يشمل أيضًا تطبيق المعرفة من خلال مشاريع واقعية. يعمل طلابنا على حلول إبداعية وأفكار بحثية ومشاريع هندسية تعكس رحلتهم التعليمية.",
        }
      : {
          title: "About Our STEM School",
          subtitle:
            "Our school encourages innovation, critical thinking, and project-based learning through STEM education.",
          description:
            "We believe that education is not only about studying theories, but also about applying knowledge through real-world projects. Our students work on creative solutions, research ideas, and engineering projects that reflect their learning journey.",
        };

  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-800 sm:py-20">
      <Container>
        <SectionTitle title={content.title} subtitle={content.subtitle} />

        <div className="mx-auto max-w-3xl text-center text-base leading-7 text-gray-600 dark:text-slate-300 sm:text-lg sm:leading-8">
          <p>{content.description}</p>
        </div>
      </Container>
    </section>
  );
}