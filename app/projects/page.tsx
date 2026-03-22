import { Suspense } from "react";
import ProjectsPageClient from "./projects-page-client";

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-16 text-center text-sm text-gray-600 dark:text-gray-300">
          Loading projects...
        </div>
      }
    >
      <ProjectsPageClient />
    </Suspense>
  );
}