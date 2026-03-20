type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-10 space-y-3 text-center">
      <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mx-auto max-w-2xl text-gray-600">{subtitle}</p>
      ) : null}
    </div>
  );
}