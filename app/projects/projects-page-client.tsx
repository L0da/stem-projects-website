"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProjectsGrid from "@/components/projects/projects-grid";
import { Project } from "@/types/project";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/language-provider";

type ProjectsPageClientProps = {
  initialProjects: Project[];
};

export default function ProjectsPageClient({
  initialProjects,
}: ProjectsPageClientProps) {
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
        initialProjects.map((project) =>
          locale === "ar" ? project.ar.category : project.en.category
        )
      )
    );

    return ["all", ...uniqueCategories];
  }, [locale]);

  const grades = useMemo(() => {
    const uniqueGrades = Array.from(
      new Set(
        initialProjects.map((project) =>
          locale === "ar" ? project.ar.grade : project.en.grade
        )
      )
    );

    return ["all", ...uniqueGrades];
  }, [locale]);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
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

      <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0b1838] via-[#0a1733] to-[#09142d] shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
        <div className="border-b border-white/10 px-5 py-4 md:px-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-base font-semibold text-white">
                {locale === "ar" ? "تصفية المشاريع" : "Filter Projects"}
              </h2>
              <p className="text-sm text-slate-300">
                {locale === "ar"
                  ? "ابحث وفلتر المشاريع بسرعة حسب المجال أو الصف الدراسي"
                  : "Search and filter projects quickly by category or grade"}
              </p>
            </div>

            <div className="inline-flex w-fit items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">
              {t.projectsPage.showing} {filteredProjects.length}{" "}
              {filteredProjects.length === 1
                ? t.projectsPage.project
                : t.projectsPage.projects}
            </div>
          </div>
        </div>

        <div className="p-5 md:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="relative">
              <span
                className={`pointer-events-none absolute inset-y-0 flex items-center text-slate-400 ${
                  locale === "ar" ? "right-4" : "left-4"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.projectsPage.searchPlaceholder}
                className={`h-16 w-full rounded-2xl border border-white/10 bg-slate-950/70 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
                  locale === "ar" ? "pr-11 pl-4" : "pl-11 pr-4"
                }`}
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-16 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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
              className="h-16 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            >
              {grades.map((item) => (
                <option key={item} value={item}>
                  {item === "all" ? t.projectsPage.allGrades : item}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-slate-300">
              {locale === "ar"
                ? "استخدم البحث أو الفلاتر للوصول للمشروع المناسب بسرعة."
                : "Use search or filters to quickly find the right project."}
            </div>

            <button
              onClick={clearFilters}
              className="inline-flex w-fit items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {t.projectsPage.clearFilters}
            </button>
          </div>
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