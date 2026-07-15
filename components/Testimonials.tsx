import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const testimonials = [
  {
    quote:
      "RJ was our first AI developer, joining as an intern straight out of university. He built our first scrapers and automation workflows, giving us an early foothold in AI and automation. Thanks for your contributions, RJ — all the best going forward.",
    name: "Christian Dick",
    title: "CEO, CD Commerce GmbH",
  },
  {
    quote:
      "I had the pleasure of working alongside RJ Aca-ac as a co-developer, and I'd recommend him without hesitation. RJ takes a genuinely hands-on approach to every project, and he's incredibly easy to work with. What stood out most was the quality of his work — clean, well-structured, and thoroughly documented. Beyond the technical side, RJ is simply a great person to have on a team.",
    name: "Christian Moises",
    title: "AI Developer, CD Commerce GmbH",
  },
  {
    quote:
      "Working alongside RJ has been one of the rare experiences where you can see professionalism and passion even without years of experience. What stood out the most was RJ's ownership mentality — he proactively drives solutions and flags risks early, delivering results. I'd recommend RJ without hesitation to any team looking for an AI Developer who brings both a technical and scalable mindset.",
    name: "Drixcy Guiang",
    title: "HR Manager",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="Testimonials" title="What people say" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#0B0F19]"
            >
              <blockquote className="flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">{testimonial.name}</p>
                <p className="text-zinc-500 dark:text-zinc-400">{testimonial.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
