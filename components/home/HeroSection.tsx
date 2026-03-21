import Link from "next/link";
import Container from "@/components/ui/Container";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 dark:from-gray-950 dark:to-black sm:py-20">
      <Container>
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 sm:px-4 sm:text-sm">
            STEM School Projects Showcase
          </span>

          <h1 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white dark:text-white sm:text-5xl md:text-6xl">
            Explore Innovation, Creativity, and Student Projects
          </h1>

          <p className="text-base leading-7 text-gray-600 dark:text-zinc-400 dark:text-gray-300 sm:text-lg sm:leading-8 md:text-xl">
            Welcome to our STEM projects website, where we showcase student
            ideas, research, engineering solutions, and innovative projects
            that reflect the spirit of STEM education.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/projects"
              className="rounded-xl bg-blue-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              View Projects
            </Link>

            <Link
              href="/about-stem"
              className="rounded-xl border border-gray-300 dark:border-zinc-700 px-6 py-3 text-center text-sm font-semibold text-gray-700 dark:text-zinc-300 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Learn About STEM
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}