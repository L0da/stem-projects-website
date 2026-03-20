import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-52 w-full bg-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
          <span>{project.category}</span>
          <span>•</span>
          <span>{project.grade}</span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900">
          {project.title}
        </h3>

        <p className="mb-4 text-sm leading-6 text-gray-600">
          {project.shortDescription}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-block rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}