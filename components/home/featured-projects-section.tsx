"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectsGrid from "@/components/projects/projects-grid";
import { useLanguage } from "@/components/providers/language-provider";
import { Project } from "@/types/project";

export default function FeaturedProjectsSection({ projects }: { projects: Project[] }) {
  const { t } = useLanguage();

  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-[#0b1733]/70 to-slate-900/80 px-5 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_30%)]" />

          <div className="relative">
            <SectionTitle
              title={t.featuredProjects.title}
              subtitle={t.featuredProjects.subtitle}
            />

            <div className="mt-10">
              <ProjectsGrid projects={featuredProjects} />
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:scale-[1.02]"
              >
                {t.featuredProjects.viewAll}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}