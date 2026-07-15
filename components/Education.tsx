import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const certifications = [
  "AI Engineering (IBM, Coursera)",
  "Data Engineering (IBM, Coursera)",
  "Data Scientist (DataCamp)",
  "Data Science (IBM, Coursera)",
  "Data Analyst (IBM, Coursera)",
  "GitHub Foundations (GitHub)",
  "IT Passport (IP) (PhilNITS)",
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="Education & Certifications" title="Background" />
        <div className="mx-auto max-w-2xl">
          <div>
            <p className="font-mono text-xs text-accent dark:text-accent-dark">2021 – 2026</p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              La Salle University &middot; Ozamiz City, Misamis Occidental, PH
            </p>
          </div>
          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Certifications
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-full bg-zinc-50 px-3 py-1 text-sm text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-900/40 dark:text-zinc-300 dark:ring-zinc-800"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
