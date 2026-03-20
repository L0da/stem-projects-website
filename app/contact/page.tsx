import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Contact Us"
          subtitle="Get in touch with our school"
        />

        <div className="mx-auto max-w-xl space-y-4 text-center text-gray-600">
          <p>Email: school@email.com</p>
          <p>Phone: +20 123 456 789</p>
          <p>Location: Your City, Egypt</p>
        </div>
      </Container>
    </section>
  );
}