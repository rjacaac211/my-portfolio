import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  {
    title: "NutriGuide AI",
    subtitle: "AI-Powered Personalized Nutrition Assistant Web App",
    dates: "03/2026 – Present",
    description:
      "A LangGraph AI agent system with intent classification, multi-step reasoning, and RAG for nutrition-specific, grounded recommendations. Integrates the USDA FoodData Central (FDC) API for food search, nutrition data, and calorie tracking, with stateful conversations that combine user profiles, food logs, and TDEE for tailored dietary advice.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "LangGraph", "RAG", "AWS"],
    repo: "https://github.com/rjacaac211/nutriguide-ai",
    demo: null,
    placeholder: false,
  },
  {
    title: "More projects coming soon",
    subtitle: "",
    dates: "",
    description: "Additional case studies are on the way — check back soon.",
    tags: [],
    repo: null,
    demo: null,
    placeholder: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-zinc-50 py-16 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Projects" title="Selected work" />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`flex flex-col rounded-2xl border p-6 ${
                  project.placeholder
                    ? "border-dashed border-zinc-300 text-center dark:border-zinc-700"
                    : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#0B0F19]"
                }`}
              >
                <div className="flex-1">
                  {project.dates && (
                    <p className="font-mono text-xs text-accent dark:text-accent-dark">
                      {project.dates}
                    </p>
                  )}
                  <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{project.subtitle}</p>
                  )}
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                  {project.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {(project.repo || project.demo) && (
                  <div className="mt-5 flex gap-4 text-sm font-medium">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent hover:underline dark:text-accent-dark"
                      >
                        GitHub &rarr;
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent hover:underline dark:text-accent-dark"
                      >
                        Live Demo &rarr;
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
