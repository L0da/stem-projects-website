import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutSchoolPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="About Our School"
          subtitle="Learn more about our mission, vision, and educational approach."
        />

        <div className="mx-auto max-w-3xl space-y-6 text-lg text-gray-600">
          <p>
            Our STEM school focuses on developing students through project-based
            learning, critical thinking, and innovation.
          </p>
          <p>
            We aim to prepare students for future challenges by integrating
            science, technology, engineering, and mathematics in real-world
            applications.
          </p>
        </div>
      </Container>
    </section>
  );
}