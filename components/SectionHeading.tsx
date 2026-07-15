export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-accent dark:text-accent-dark">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50 md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
