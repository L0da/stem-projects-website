"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function InspirationSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-5xl"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <div className="relative flex h-[300px] items-center justify-center sm:h-[360px] md:h-[420px]">
              <Image
                src="/projects/stem-inspiration.jpeg"
                alt="STEM Inspiration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}