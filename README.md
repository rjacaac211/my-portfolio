# RJ Aca-ac — Portfolio

A single-page portfolio site for **Rolando John R. Aca-ac ("RJ Aca-ac")**, AI Developer / AI Engineer — built to showcase projects, experience, and skills to prospective employers and clients.

Content, copy, and design-system decisions are governed by [`PORTFOLIO_SPEC.md`](./PORTFOLIO_SPEC.md); architecture notes for contributors (human or AI) live in [`CLAUDE.md`](./CLAUDE.md).

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) — styling, `class`-based dark mode via [`next-themes`](https://github.com/pacocoursey/next-themes)
- [Vercel](https://vercel.com/) — hosting + [Analytics](https://vercel.com/analytics)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run `next lint` |

## Project Structure

- `app/page.tsx` — composes the single-page layout by ordering section components (`Nav`, `Hero`, `Projects`, `About`, `Experience`, `Skills`, `Education`, `Testimonials`, `Footer`).
- `components/` — one self-contained component per section; each owns its own content as inline data plus markup (no CMS or external data source).
- `public/` — static assets (resume, headshot, project screenshots).

See `CLAUDE.md` for a fuller architecture walkthrough.

## Deployment

Deployed on Vercel. Custom domain not yet decided — see the Open Items in `PORTFOLIO_SPEC.md`.
