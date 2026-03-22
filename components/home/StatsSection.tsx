import Container from "@/components/ui/Container";

const stats = [
  { label: "Projects", value: "50+" },
  { label: "Students", value: "120+" },
  { label: "Fields", value: "8+" },
];

export default function StatsSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 sm:p-8"
            >
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 sm:text-4xl">
                {stat.value}
              </h3>

              <p className="mt-3 text-sm text-gray-600 dark:text-slate-300 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}