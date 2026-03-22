import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";

type ProjectDetailsPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          
          {/* Image */}
          <div className="relative h-[300px] overflow-hidden rounded-2xl bg-gray-100 dark:bg-slate-700 md:h-[450px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            
            {/* Meta */}
            <p className="mb-2 text-sm font-medium text-gray-500 dark:text-slate-300">
              {project.category} • {project.grade}
            </p>

            {/* Title */}
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h1>

            {/* Description */}
            <p className="mb-6 leading-7 text-gray-600 dark:text-slate-300">
              {project.fullDescription}
            </p>

            {/* Team */}
            <div className="mb-6">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Team Members
              </h2>
              <ul className="space-y-1 text-gray-600 dark:text-slate-300">
                {project.team.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </div>

            {/* Supervisor */}
            {project.supervisor && (
              <div className="mb-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Supervisor
                </h2>
                <p className="text-gray-600 dark:text-slate-300">
                  {project.supervisor}
                </p>
              </div>
            )}

            {/* Tags */}
            <div>
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Tags
              </h2>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-slate-700 dark:text-zinc-300"
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