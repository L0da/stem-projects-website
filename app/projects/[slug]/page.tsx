"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";

export default function ProjectDetailsPage() {
  const { t, locale } = useLanguage();
  const params = useParams();

  const slug = params?.slug as string;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="py-20 text-center text-red-500">
        Project not found
      </div>
    );
  }

  const content = locale === "ar" ? project.ar : project.en;

  return (
    <main className="py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-2xl bg-gray-100 dark:bg-slate-700 md:h-[450px]">
            <Image
              src={project.image}
              alt={content.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-gray-500 dark:text-slate-300">
              {content.category} • {content.grade}
            </p>

            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              {content.title}
            </h1>

            <p className="mb-6 leading-7 text-gray-600 dark:text-slate-300">
              {content.fullDescription}
            </p>

            <div className="mb-6">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {t.projectDetails.teamMembers}
              </h2>
              <ul className="space-y-1 text-gray-600 dark:text-slate-300">
                {(locale === "ar" && project.teamAr
                  ? project.teamAr
                  : project.team
                ).map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </div>

            {project.supervisor && (
              <div className="mb-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {t.projectDetails.supervisor}
                </h2>
                <p className="text-gray-600 dark:text-slate-300">
                  {locale === "ar" && project.supervisorAr
                    ? project.supervisorAr
                    : project.supervisor}
                </p>
              </div>
            )}

            <div>
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {t.projectDetails.tags}
              </h2>

              <div className="flex flex-wrap gap-2">
                {content.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-slate-700 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}