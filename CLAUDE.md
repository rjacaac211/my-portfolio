# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page Next.js portfolio site for RJ Aca-ac (AI Developer/Engineer). Content and design decisions are governed by `PORTFOLIO_SPEC.md` — read it before making content, copy, or design-system changes (colors, fonts, section order, section content are all specified there, including several `TBD`/placeholder items still open).

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — run `next lint`

There is no test suite configured in this repo.

## Architecture

- **App Router, single page**: `app/page.tsx` renders one long page by composing section components in order (`Nav`, `Hero`, `About`, `WhyHireMe`, `Experience`, `Skills`, `Education`, `Projects`, `Testimonials`, `Footer`). The section order in `app/page.tsx` must match the nav anchors in `components/Nav.tsx` and the order defined in `PORTFOLIO_SPEC.md` §4.
- **Section components are self-contained**: each section under `components/` (e.g. `Projects.tsx`, `Experience.tsx`, `Skills.tsx`) owns its own content as inline data (arrays/objects at the top of the file) plus its own JSX/markup — there is no CMS or external data source. To update site copy (a job entry, a project card, a testimonial), edit the relevant array in that component file directly.
- **Shared primitives**:
  - `Reveal.tsx` — client component wrapping children in an `IntersectionObserver`-driven fade/slide-in (`.reveal` / `.reveal.is-visible` classes defined in `app/globals.css`). Wrap new section content in `<Reveal>` to keep scroll-in motion consistent.
  - `SectionHeading.tsx` — renders the eyebrow + title heading pattern used at the top of every section.
  - `ThemeProvider.tsx` — thin wrapper around `next-themes`, mounted in `app/layout.tsx` with `attribute="class"` and `defaultTheme="system"`. Dark mode is Tailwind's `class` strategy throughout — style with `dark:` variants, don't add a separate theme system.
- **Styling**: Tailwind only, no CSS modules/styled-components. Design tokens (colors, fonts) live in `tailwind.config.ts` (`accent` / `accent-dark`, `font-sans` = Inter via `--font-inter`, `font-mono` = JetBrains Mono via `--font-jetbrains-mono`) and are loaded as `next/font/google` variables in `app/layout.tsx`. Prefer the `accent`/`accent-dark` and `zinc` palette already used across components over introducing new colors — see `PORTFOLIO_SPEC.md` §3 for the full token table and rationale.
- **Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/components/Reveal`.
- **Assets**: static assets live in `public/` (e.g. `public/resume.pdf`, `public/images/...`). `uploads/` at the repo root holds source/original files not yet migrated into `public/` — check `PORTFOLIO_SPEC.md` §7 (Asset Manifest) for what's pending migration.
