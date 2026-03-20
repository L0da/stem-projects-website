import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="Student Projects"
          subtitle="Explore our latest projects"
        />

        <div className="text-center text-gray-600">
          Projects will be displayed here soon...
        </div>
      </Container>
    </section>
  );
}