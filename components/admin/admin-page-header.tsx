"use client";

import { useLanguage } from "@/components/providers/language-provider";

export default function AdminPageHeader() {
  const { locale } = useLanguage();

  const text =
    locale === "ar"
      ? {
          title: "إضافة مشروع جديد",
          description: "أنشئ مشروع STEM جديد وانشره على الموقع.",
        }
      : {
          title: "Add New Project",
          description: "Create and publish a new STEM project.",
        };

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold">{text.title}</h1>
      <p className="mt-2 text-muted-foreground">{text.description}</p>
    </div>
  );
}