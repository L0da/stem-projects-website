"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProjectsGrid from "@/components/projects/projects-grid";
import { projects } from "@/data/projects";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/language-provider";

export default function ProjectsPageClient() {
  const { t, locale } = useLanguage();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [grade, setGrade] = useState(searchParams.get("grade") || "all");

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

  const grades = useMemo(() => {
    const uniqueGrades = Array.from(
      new Set(
        projects.map((project) =>
          locale === "ar" ? project.ar.grade : project.en.grade
        )
      )
    );

    return ["all", ...uniqueGrades];
  }, [locale]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const content = locale === "ar" ? project.ar : project.en;

      const haystack = [
        content.title,
        content.shortDescription,
        content.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      const normalizedSearch = search.trim().toLowerCase();

      const matchesSearch =
        normalizedSearch.length === 0 || haystack.includes(normalizedSearch);

      const matchesCategory =
        category === "all" || content.category === category;

      const matchesGrade =
        grade === "all" || content.grade === grade;

      return matchesSearch && matchesCategory && matchesGrade;
    });
  }, [search, category, grade, locale]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (search.trim()) params.set("search", search);
    if (category !== "all") params.set("category", category);
    if (grade !== "all") params.set("grade", grade);

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname);
  }, [search, category, grade, router, pathname]);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setGrade("all");
  };

  return (
    <Container>
      <SectionTitle
        title={t.projectsPage.title}
        subtitle={t.projectsPage.subtitle}
      />

      <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="grid gap-4 md:grid-cols-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.projectsPage.searchPlaceholder}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white md:col-span-2"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "all" ? t.projectsPage.allCategories : item}
              </option>
            ))}
          </select>

          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          >
            {grades.map((item) => (
              <option key={item} value={item}>
                {item === "all" ? t.projectsPage.allGrades : item}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t.projectsPage.showing} {filteredProjects.length}{" "}
            {filteredProjects.length === 1
              ? t.projectsPage.project
              : t.projectsPage.projects}
          </p>

          <button
            onClick={clearFilters}
            className="inline-flex w-fit items-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-slate-700 dark:text-gray-200 dark:hover:bg-slate-800"
          >
            {t.projectsPage.clearFilters}
          </button>
        </div>
      </div>

      <div className="mt-10">
        {filteredProjects.length > 0 ? (
          <ProjectsGrid projects={filteredProjects} />
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 px-6 py-16 text-center dark:border-slate-700">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {t.projectsPage.noResults}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {t.projectsPage.emptyHint}
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}