import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  {
    title: "Business-first thinking",
    description:
      "I go beyond technical implementation to understand the business itself — the why and what, not just the how.",
  },
  {
    title: "Ownership mentality",
    description:
      "I take ownership of business workflows end-to-end when building AI automations, not just the code I ship.",
  },
  {
    title: "Proactive communication",
    description:
      "I surface blockers and risks early, rather than waiting to be asked.",
  },
  {
    title: "Comfortable with ambiguity",
    description:
      "I turn high-level, ambiguous requirements into clear technical plans and architecture decisions.",
  },
  {
    title: "Works well at every level",
    description:
      "I communicate effectively with everyone from fellow engineers to executive stakeholders.",
  },
];

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="bg-zinc-50 py-16 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Why Hire Me" title="What I bring to a team" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#0B0F19]"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{reason.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
