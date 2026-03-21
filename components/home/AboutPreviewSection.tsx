import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutPreviewSection() {
  return (
    <section className="bg-gray-50 dark:bg-zinc-900 py-16 dark:bg-black sm:py-20">
      <Container>
        <SectionTitle
          title="About Our STEM School"
          subtitle="Our school encourages innovation, critical thinking, and project-based learning through STEM education."
        />

        <div className="mx-auto max-w-3xl text-center text-base leading-7 text-gray-600 dark:text-zinc-400 dark:text-gray-300 sm:text-lg sm:leading-8">
          <p>
            We believe that education is not only about studying theories, but
            also about applying knowledge through real-world projects. Our
            students work on creative solutions, research ideas, and engineering
            projects that reflect their learning journey.
          </p>
        </div>
      </Container>
    </section>
  );
}