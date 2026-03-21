type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center ">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-lg text-gray-600 dark:text-zinc-400 dark:text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}