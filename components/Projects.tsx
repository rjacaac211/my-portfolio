import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  {
    title: "NutriGuide AI",
    subtitle: "AI-powered personalized nutrition assistant",
    image: "/images/projects/nutriguide-ai.png",
    description:
      "A LangGraph agent you talk to: log meals in plain English, ask nutrition questions grounded in a curated RAG knowledge base, and track calories/weight against a TDEE-based goal — streamed token-by-token to a React dashboard.",
    tags: ["LangGraph", "RAG", "OpenAI", "React", "Node.js", "Express", "TypeScript", "JavaScript", "PostgreSQL", "Prisma", "Docker", "AWS"],
    repo: "https://github.com/rjacaac211/nutriguide-ai",
    demo: null,
  },
  {
    title: "LeadFlow AI",
    subtitle: "Autonomous B2B lead-qualification agent",
    image: "/images/projects/leadflow-ai.png",
    description:
      "A LangGraph.js agent that scores and tiers inbound leads against a configurable ICP rubric, syncs to HubSpot, drafts outreach, and pauses on a durable human-in-the-loop approval gate before anything sends.",
    tags: ["Claude", "Anthropic", "LangGraph", "n8n", "React", "TypeScript", "JavaScript", "Express", "Prisma", "PostgreSQL", "Docker"],
    repo: "https://github.com/rjacaac211/leadflow-ai",
    demo: null,
  },
  {
    title: "Sign Sense",
    subtitle: "Real-time mobile traffic sign recognition",
    image: "/images/projects/sign-sense.jpg",
    description:
      "An Android app that detects and classifies Philippine traffic signs in real time using YOLOv10 and a CNN, optimized with TensorFlow Lite. Published research: 0.823 mAP detection, 99.66% classification accuracy.",
    tags: ["Python", "TensorFlow", "YOLO", "CNN", "Kotlin", "Android", "Roboflow"],
    repo: "https://github.com/rjacaac211/Mobile-App-Traffic-Sign-Recognition",
    demo: null,
  },
  {
    title: "Dental Care",
    subtitle: "AI-powered oral health assistant",
    image: "/images/projects/dental-care.jpg",
    description:
      "A dental clinic assistant combining a LangChain ReAct agent (SQL + web search tools), voice input via Deepgram, and a MobileNetV2 model for oral-disease image classification, with persisted multi-turn chat history.",
    tags: ["Python", "TensorFlow", "OpenAI", "LangChain", "FastAPI", "React", "MongoDB", "PostgreSQL", "Docker", "Deepgram", "MobileNetV2"],
    repo: "https://github.com/rjacaac211/Dental-Care",
    demo: null,
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
                className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#0B0F19]"
              >
                <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{project.subtitle}</p>
                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
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
                  </div>
                  <div className="mt-5 flex gap-4 text-sm font-medium">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent hover:underline dark:text-accent-dark"
                    >
                      GitHub &rarr;
                    </a>
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
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
