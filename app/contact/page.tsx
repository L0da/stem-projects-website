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

        <div className="mx-auto max-w-xl space-y-4 text-center text-gray-600 dark:text-zinc-400 dark:text-gray-300">
          <p>
            <span className="font-semibold text-gray-900 dark:text-white dark:text-white">
              Email:
            </span>{" "}
            school@email.com
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white dark:text-white">
              Phone:
            </span>{" "}
            +966 569343053
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white dark:text-white">
              Location:
            </span>{" "}
            Riyadh, Saudi Arabia
          </p>
        </div>
      </Container>
    </section>
  );
}