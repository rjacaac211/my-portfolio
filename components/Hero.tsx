import Image from "next/image";

const contacts = [
  {
    label: "rj.acaac211@gmail.com",
    href: "mailto:rj.acaac211@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4 shrink-0">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "+63 920-700-5579",
    href: "tel:+639207005579",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4 shrink-0">
        <path d="M6.5 3h3l1.5 4.5-2.25 1.5a11 11 0 0 0 6.25 6.25l1.5-2.25L21 14.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.5 5a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
  {
    label: "https://www.linkedin.com/in/rj-aca-ac-7a070b29a/",
    href: "https://www.linkedin.com/in/rj-aca-ac-7a070b29a/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96V20H9.68V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.2-1.77 3.42 0 4.06 2.25 4.06 5.18V20Z" />
      </svg>
    ),
  },
  {
    label: "https://github.com/rjacaac211",
    href: "https://github.com/rjacaac211",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
];

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
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start">
          {contacts.map((contact) => (
            <a
              key={contact.href}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-1.5 break-all font-mono text-xs text-zinc-500 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-accent-dark"
            >
              {contact.icon}
              {contact.label}
            </a>
          ))}
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
