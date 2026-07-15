import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const traits = [
  "Ownership-driven",
  "Proactive communicator",
  "Business-minded",
  "Comfortable with ambiguity",
  "Patient mentor",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="About" title="A bit about me" />
        <div className="mx-auto max-w-2xl text-center text-zinc-600 dark:text-zinc-400">
          <p>
            I&apos;m an AI Developer / AI Engineer who enjoys turning messy, manual workflows
            into scalable AI-powered systems. Beyond writing code, I care about understanding
            the business problem underneath it, taking ownership of what I build, and
            communicating clearly with the people I work with &mdash; whether that&apos;s a
            teammate just getting up to speed or a stakeholder with a high-level, ambiguous ask.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {traits.map((trait) => (
            <span
              key={trait}
              className="rounded-full border border-zinc-200 px-4 py-1.5 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
            >
              {trait}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
