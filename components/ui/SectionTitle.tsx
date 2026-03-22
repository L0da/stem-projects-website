type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 mx-auto max-w-2xl text-base text-gray-600 dark:text-slate-300 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}