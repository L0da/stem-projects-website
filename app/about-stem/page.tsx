"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/language-provider";

export default function AboutStemPage() {
  const { t } = useLanguage();

  return (
    <main className="py-16">
      <Container>
        <SectionTitle title={t.aboutStem.title} />

        <div className="mx-auto max-w-3xl text-center text-lg leading-8 text-gray-600 dark:text-slate-300">
          <p>{t.aboutStem.content}</p>
        </div>
      </Container>
    </main>
  );
}