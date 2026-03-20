import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutPreviewSection() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <SectionTitle
          title="About Our STEM School"
          subtitle="Our school encourages innovation, critical thinking, and project-based learning through STEM education."
        />

        <div className="mx-auto max-w-3xl text-center text-lg leading-8 text-gray-600">
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