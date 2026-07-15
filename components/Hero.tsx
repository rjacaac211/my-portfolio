import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:py-28">
      <div className="flex-1 text-center md:text-left">
        <p className="font-mono text-sm text-accent dark:text-accent-dark">Hi, I&apos;m</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">
          RJ Aca-ac
        </h1>
        <p className="mt-2 text-lg font-medium text-zinc-600 dark:text-zinc-300">
          AI Developer / AI Engineer
        </p>
        <p className="mx-auto mt-5 max-w-xl text-zinc-600 dark:text-zinc-400 md:mx-0">
          Building end-to-end AI agents, automations, and full-stack LLM applications.
          Proven in transforming complex manual workflows into scalable, production-ready
          systems that deliver 90%+ time savings.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="/resume.pdf"
            download
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 dark:bg-accent-dark dark:text-zinc-950"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-accent hover:text-accent dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-accent-dark dark:hover:text-accent-dark"
          >
            View Projects
          </a>
        </div>
      </div>
      <div className="shrink-0">
        <Image
          src="/images/headshot.jpg"
          alt="Portrait of RJ Aca-ac"
          width={200}
          height={200}
          priority
          className="h-44 w-44 rounded-full object-cover ring-4 ring-zinc-100 dark:ring-zinc-800 md:h-56 md:w-56"
        />
      </div>
    </section>
  );
}
