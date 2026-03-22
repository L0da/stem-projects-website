import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      
      {/* Image */}
      <div className="relative h-52 w-full bg-gray-100 dark:bg-slate-700">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        
        {/* Meta */}
        <div className="mb-3 flex items-center gap-2 text-sm text-gray-500 dark:text-slate-300">
          <span>{project.category}</span>
          <span>•</span>
          <span>{project.grade}</span>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm leading-6 text-gray-600 dark:text-slate-300">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-slate-700 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}