const links = [
  { label: "Email", href: "mailto:rj.acaac211@gmail.com" },
  { label: "Phone", href: "tel:+639207005579" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rj-aca-ac-7a070b29a/" },
  { label: "GitHub", href: "https://github.com/rjacaac211" },
  { label: "Resume", href: "/resume.pdf" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-zinc-50 py-16 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Let&apos;s talk</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
          Open to new opportunities — feel free to reach out through any of the channels below.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-accent hover:underline dark:text-accent-dark"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-10 text-xs text-zinc-400 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} RJ Aca-ac. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
