"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { useLanguage } from "@/components/providers/language-provider";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, locale } = useLanguage();
  const content = locale === "ar" ? project.ar : project.en;

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
        
        {/* Image */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={content.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          
          {/* Category + Grade */}
          <div className="mb-3 flex items-center gap-2 text-xs">
            <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {content.category}
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-600 dark:bg-slate-700 dark:text-slate-300">
              {content.grade}
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {content.title}
          </h3>

          {/* Description */}
          <p className="mb-4 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-slate-300">
            {content.shortDescription}
          </p>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {content.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition dark:bg-slate-700 dark:text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto">
            <div className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-blue-700 group-hover:shadow-lg dark:bg-blue-500 dark:group-hover:bg-blue-600">
              <span>{t.projectsPage.viewDetails}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}