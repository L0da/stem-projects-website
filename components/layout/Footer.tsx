"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-slate-950/60 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-6 text-center">
        
        {/* Copyright */}
        <p className="text-sm text-slate-300">
          © 2026{" "}
          {locale === "ar"
            ? "مدارس المجد الأهلية - منصة مشاريع STEM"
            : "Almajd Schools - STEM Projects Platform"}
        </p>

        {/* Divider */}
        <div className="my-3 h-px w-16 opacity-70 mx-auto bg-white/10" />

        {/* WhatsApp + Designer */}
        <a
          href="https://wa.me/966568275050"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 text-xs text-slate-500 transition hover:text-green-400"
        >

          {/* Icon */}
          <MessageCircle className="h-4 w-4 opacity-70 transition group-hover:opacity-100" />

          {/* Text */}
          <span>
            Designed by: Khaled Halim
          </span>
        </a>
      </div>
    </footer>
  );
}