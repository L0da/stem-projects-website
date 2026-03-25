import { Suspense } from "react";
import ProjectsPageClient from "./projects-page-client";
import { getProjects } from "@/lib/supabase/projects";
export const dynamic = "force-dynamic"

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Suspense
      fallback={
        <div className="py-16 text-center text-sm text-gray-600 dark:text-gray-300">
          Loading projects...
        </div>
      }
    >
      <ProjectsPageClient initialProjects={projects} />
    </Suspense>
  );
}