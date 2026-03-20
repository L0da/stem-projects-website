import Link from "next/link";
import Container from "@/components/ui/Container";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <Container>
        <div className="max-w-3xl space-y-6">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            STEM School Projects Showcase
          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Explore Innovation, Creativity, and Student Projects
          </h1>

          <p className="text-lg leading-8 text-gray-600 md:text-xl">
            Welcome to our STEM projects website, where we showcase student
            ideas, research, engineering solutions, and innovative projects
            that reflect the spirit of STEM education.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/projects"
              className="rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              View Projects
            </Link>

            <Link
              href="/about-stem"
              className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Learn About STEM
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}