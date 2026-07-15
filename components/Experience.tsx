import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const roles = [
  {
    title: "AI Developer",
    company: "CD Commerce GmbH",
    meta: "Remote, Full-time",
    dates: "04/2025 – 12/2025",
    bullets: [
      "Built and shipped full-stack AI-powered web applications, developing backend services, AI agent pipelines and automations, and modern frontend interfaces, while ensuring scalability and smooth end-to-end integration.",
      "Accelerated workflows by over 90%, transforming a 3-day manual procurement process into just 1 hour, and created other systems that similarly turned lengthy, complex processes into faster, more streamlined operations.",
      "Integrated third-party APIs including Bright Data, Keepa, and SellerSprite into AI-powered workflows and backend services, enabling automated data collection, product research, and more efficient procurement operations.",
      "Leveraged Python, JavaScript/TypeScript, along with LangChain, LangGraph, OpenAI, Playwright, React, NodeJS, FastAPI, and Docker to deliver production-ready platforms and improved usability for non-technical users.",
      "Took ownership of the full tech stack direction, turning high-level stakeholder requirements into clear technical requirements, architecture decisions, and well-communicated implementation plans despite ambiguity.",
    ],
  },
  {
    title: "AI Engineer Intern",
    company: "Quantiota",
    meta: "Remote, Internship",
    dates: "12/2024 – 03/2025",
    bullets: [
      "Assisted in developing an AI agent using LangChain, LangGraph, and OpenAI to support natural language database queries, dashboard actions, and file operations with contextual interactions.",
      "Assisted in building Flask APIs and Dockerizing the application, contributing to system integration, deployment, and a more maintainable backend architecture.",
    ],
  },
  {
    title: "Lead ML Engineer (Voluntary)",
    company: "Omdena Ibadan Chapter",
    meta: "Remote, Contract",
    dates: "10/2024 – 12/2024",
    bullets: [
      "Collaborated with a diverse team around the world on an innovative project to develop an AI-powered traffic management system, leveraging computer vision to improve traffic flow and reduce congestion in Nigerian cities.",
      "Led the development of a YOLO-based vehicle detection and counting model, overseeing dataset preparation to model training with Python, Roboflow, and Google Colab, supporting accurate vehicle detection and counting.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="relative mx-auto max-w-3xl space-y-10 border-l border-zinc-200 pl-8 dark:border-zinc-800">
          {roles.map((role) => (
            <div key={role.title + role.company} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent dark:bg-accent-dark" />
              <p className="font-mono text-xs text-accent dark:text-accent-dark">{role.dates}</p>
              <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {role.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {role.company} &middot; {role.meta}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
