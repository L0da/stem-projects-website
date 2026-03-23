"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";
import ProjectCard from "./project-card";
import { useLanguage } from "@/components/providers/language-provider";

type ProjectsGridProps = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const { t } = useLanguage();

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-4 text-4xl">😕</div>
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          {t.projectsPage.noResults}
        </h3>
        <p className="text-sm text-gray-500 dark:text-slate-400">
          {t.projectsPage.tryDifferentFilters}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}