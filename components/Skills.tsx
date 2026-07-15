import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const groups = [
  { label: "Languages", items: ["Python", "JavaScript", "TypeScript"] },
  {
    label: "AI / Agents",
    items: ["LangChain", "LangGraph", "RAG", "OpenAI", "Pinecone", "Claude Code"],
  },
  { label: "Backend", items: ["FastAPI", "Node.js", "Express", "Flask"] },
  { label: "Frontend", items: ["React"] },
  { label: "Data / Infra", items: ["PostgreSQL", "Docker", "CI/CD", "Git", "AWS"] },
];

export function Skills() {
  return (
    <section id="skills" className="bg-zinc-50 py-16 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Skills" title="Tools I work with" />
          <div className="mx-auto max-w-3xl space-y-6">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="font-mono text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {group.label}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-3 py-1 text-sm text-zinc-700 shadow-sm ring-1 ring-zinc-200 dark:bg-[#0B0F19] dark:text-zinc-300 dark:ring-zinc-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
