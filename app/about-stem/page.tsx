import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutStemPage() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-900 dark:bg-black">
      <Container>
        <SectionTitle
          title="What is STEM?"
          subtitle="Science, Technology, Engineering, and Mathematics"
        />

        <div className="mx-auto max-w-3xl space-y-6 text-lg text-gray-600 dark:text-zinc-400 dark:text-gray-300">
          <p>
            STEM education focuses on hands-on learning, problem-solving, and
            innovation across scientific and technical disciplines.
          </p>
          <p>
            Students work on real-life projects that combine multiple fields and
            encourage creativity and teamwork.
          </p>
        </div>
      </Container>
    </section>
  );
}