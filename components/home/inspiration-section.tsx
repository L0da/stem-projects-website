"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/components/providers/language-provider";

export default function InspirationSection() {
  const { locale } = useLanguage();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-[#0b1733]/75 to-slate-900/80 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_28%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_30%)]" />

            <div className="relative mb-4 flex justify-center">
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm">
                {locale === "ar" ? "رسالة ملهمة من عالم STEM" : "A Message from the World of STEM"}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 p-3 sm:p-4">
              <div className="group relative flex min-h-[320px] items-center justify-center sm:min-h-[400px] md:min-h-[520px]">
                <Image
                  src="/projects/stem-inspiration.jpeg"
                  alt="STEM Inspiration"
                  fill
                  className="object-contain transition duration-500 group-hover:scale-[1.015]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}