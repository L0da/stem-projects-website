"use client";

import { useMemo, useState } from "react";
import ProjectsGrid from "@/components/projects/projects-grid";
import { projects } from "@/data/projects";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/language-provider";

export default function ProjectsPage() {
  const { t, locale } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(
        projects.map((project) =>
          locale === "ar" ? project.ar.category : project.en.category
        )
      )
    );

    return ["all", ...uniqueCategories];
  }, [locale]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const content = locale === "ar" ? project.ar : project.en;

      const matchesSearch = content.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || content.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, locale]);

  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          title={t.projectsPage.title}
          subtitle={t.projectsPage.subtitle}
        />

        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800 md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            placeholder={t.projectsPage.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white md:max-w-md"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all" ? t.projectsPage.allCategories : category}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6 text-sm text-gray-600 dark:text-slate-300">
          {t.projectsPage.showing} {filteredProjects.length}{" "}
          {filteredProjects.length === 1
            ? t.projectsPage.project
            : t.projectsPage.projects}
        </div>

        {filteredProjects.length > 0 ? (
          <ProjectsGrid projects={filteredProjects} />
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center text-gray-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {t.projectsPage.noResults}
          </div>
        )}
      </Container>
    </main>
  );
}