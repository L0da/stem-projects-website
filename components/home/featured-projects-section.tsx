"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectsGrid from "@/components/projects/projects-grid";
import { useLanguage } from "@/components/providers/language-provider";

export default function FeaturedProjectsSection() {
  const { t } = useLanguage();

  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <Container>
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
            className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            {t.featuredProjects.viewAll}
          </Link>
        </div>
      </Container>
    </section>
  );
}