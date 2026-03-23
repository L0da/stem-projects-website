"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/language-provider";

export default function ContactPage() {
  const { t, locale } = useLanguage();

  return (
    <main className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-[#0b1733]/70 to-slate-900/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%)]" />

            <form className="relative space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  placeholder={t.contact.name}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  placeholder={t.contact.email}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {locale === "ar" ? "رقم الجوال" : "Phone Number"}
                </label>
                <input
                  type="tel"
                  name="phone"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                  placeholder={"05xxxxxxxx"}
                  className={`w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 ${
                    locale === "ar" ? "text-right" : "text-left"
                  }`}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {t.contact.message}
                </label>
                <textarea
                  placeholder={t.contact.message}
                  rows={6}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:scale-[1.01] hover:bg-blue-700"
              >
                {t.contact.send}
              </button>

              <p className="text-center text-xs text-slate-500">
                {locale === "ar"
                  ? "سنحاول الرد عليك في أقرب وقت ممكن."
                  : "We will try to get back to you as soon as possible."}
              </p>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}