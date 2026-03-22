"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/language-provider";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mx-auto max-w-xl space-y-4">
          <input
            type="text"
            placeholder={t.contact.name}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

          <input
            type="email"
            placeholder={t.contact.email}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

          <textarea
            placeholder={t.contact.message}
            rows={5}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

          <button className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
            {t.contact.send}
          </button>
        </div>
      </Container>
    </main>
  );
}