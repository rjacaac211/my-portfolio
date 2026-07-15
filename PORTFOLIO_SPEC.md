# RJ Aca-ac — Portfolio Website Specification

## 1. Overview & Goals

A personal portfolio website for **Rolando John R. Aca-ac ("RJ Aca-ac")**, an AI Developer / AI Engineer, to showcase his work experience, skills, personal characteristics, reasons to hire him, and selected GitHub projects to prospective employers/clients.

## 2. Tech Stack & Deployment

- **Framework:** React + Next.js
- **Hosting:** Vercel
- **Analytics:** Vercel Analytics (privacy-friendly, no cookie banner required)
- **Domain:** Not decided yet — use the default `*.vercel.app` URL for now; revisit once a custom domain is chosen

## 3. Design System

### Fonts
- **Inter** — headings and body copy. Clean, highly legible, ubiquitous in modern minimalist sites.
- **JetBrains Mono** — small accents only (nav labels, dates, tech-stack tags). A subtle nod to RJ's developer/AI-engineer identity without going full "terminal theme."

### Theme
Light/Dark toggle, defaulting to the visitor's system preference.

| Token | Light | Dark |
|---|---|---|
| Background | `#FFFFFF` / `#FAFAFA` | `#0B0F19` |
| Text | `#18181B` | `#E4E4E7` |
| Muted text | `#52525B` | `#9CA3AF` |
| Accent | `#4F46E5` (indigo) | `#818CF8` (lighter indigo for contrast) |
| Border | `#E4E4E7` | `#1F2430` |

Rationale: indigo reads as professional/tech-forward without being flashy; works cleanly in both light and dark contexts alongside neutral grays for a minimalist aesthetic.

### Motion
Subtle only — gentle fade/slide-in on scroll, smooth hover states. No parallax or heavy scroll-triggered storytelling.

## 4. Site Map / Navigation

Single-page scroll site with a sticky nav bar (logo/initials mark "RJA" + anchor links + theme toggle). Section order:

1. Hero
2. About / Personal Characteristics
3. Why Hire Me
4. Experience
5. Skills
6. Education & Certifications
7. Projects
8. Testimonials
9. Contact / Footer

## 5. Section-by-Section Spec

### 5.1 Hero
- Headshot: `uploads/headshot.jpg` (to be migrated to `/public/images/headshot.jpg`)
- Name: **Rolando John R. Aca-ac** (displayed as "RJ Aca-ac")
- Title: **AI Developer / AI Engineer**
- Tagline (from resume's professional summary): *"AI Developer / AI Engineer building end-to-end AI agents, automations, and full-stack LLM applications. Proven in transforming complex manual workflows into scalable, production-ready systems that deliver 90%+ time savings."*
- CTAs: "Download Resume" (links to `/resume.pdf`) and "View Projects" (anchor scroll to Projects section)

### 5.2 About / Personal Characteristics
Short bio + traits, informed by the resume summary and testimonials: proactive, ownership-driven, business-minded, easy to work with, patient mentor to teammates, comfortable with ambiguity.

### 5.3 Why Hire Me
Dedicated standalone section with punchy cards, in RJ's own words:
- Goes beyond technical implementation to understand the business itself — the *why* and *what*, not just the *how*
- Takes ownership of business workflows end-to-end when building AI automations
- Proactive communicator — surfaces blockers early rather than waiting to be asked
- Comfortable operating with high-level, ambiguous requirements and translating them into clear technical plans
- Comfortable working with stakeholders at all levels, from engineers to executives

### 5.4 Experience
Vertical timeline, most-recent-first:

**AI Developer** — CD Commerce GmbH (Remote, Full-time) — 04/2025 – 12/2025
- Built and shipped full-stack AI-powered web applications, developing backend services, AI agent pipelines and automations, and modern frontend interfaces, while ensuring scalability and smooth end-to-end integration.
- Accelerated workflows by over 90%, transforming a 3-day manual procurement process into just 1 hour, and created other systems that similarly turned lengthy, complex processes into faster, more streamlined operations.
- Integrated third-party APIs including Bright Data, Keepa, and SellerSprite into AI-powered workflows and backend services, enabling automated data collection, product research, and more efficient procurement operations.
- Leveraged Python, JavaScript/TypeScript, along with LangChain, LangGraph, OpenAI, Playwright, React, NodeJS, FastAPI, and Docker to deliver production-ready platforms and improved usability for non-technical users.
- Took ownership of the full tech stack direction, turning high-level stakeholder requirements into clear technical requirements, architecture decisions, and well-communicated implementation plans despite ambiguity.

**AI Engineer Intern** — Quantiota (Remote, Internship) — 12/2024 – 03/2025
- Assisted in developing an AI agent using LangChain, LangGraph, and OpenAI to support natural language database queries, dashboard actions, and file operations with contextual interactions.
- Assisted in building Flask APIs and Dockerizing the application, contributing to system integration, deployment, and a more maintainable backend architecture.

**Lead ML Engineer (Voluntary)** — Omdena Ibadan Chapter (Remote, Contract) — 10/2024 – 12/2024
- Collaborated with a diverse team around the world on an innovative project to develop an AI-powered traffic management system, leveraging computer vision to improve traffic flow and reduce congestion in Nigerian cities.
- Led the development of a YOLO-based vehicle detection and counting model, overseeing dataset preparation to model training with Python, Roboflow, and Google Colab, supporting accurate vehicle detection and counting.

### 5.5 Skills
Grouped pill/tag clusters by category:

- **Languages:** Python, JavaScript, TypeScript
- **AI / Agents:** LangChain, LangGraph, RAG, OpenAI, Pinecone, Claude Code
- **Backend:** FastAPI, Node.js, Express, Flask
- **Frontend:** React
- **Data / Infra:** PostgreSQL, Docker, CI/CD, Git, AWS

### 5.6 Education & Certifications
**Education:**
- Bachelor of Science in Computer Science — La Salle University, Ozamiz City, Misamis Occidental, PH (2021 – 2026)

**Certifications:**
- AI Engineering (IBM, Coursera)
- Data Engineering (IBM, Coursera)
- Data Scientist (DataCamp)
- Data Science (IBM, Coursera)
- Data Analyst (IBM, Coursera)
- GitHub Foundations (GitHub)
- IT Passport (IP) (PhilNITS)

### 5.7 Projects
Curated cards. Each card: title, description, tech-stack tags, GitHub repo link, live demo link (if available), screenshot/preview image.

**1. NutriGuide AI: AI-Powered Personalized Nutrition Assistant Web App** (03/2026 – Present) — *real content*
- Description: Built a LangGraph AI agent system with intent classification, multi-step reasoning, and RAG for nutrition-specific, grounded recommendations; integrated USDA FoodData Central (FDC) API for food search, nutrition data, and calorie tracking. Implemented stateful conversations and tools to integrate user profiles, food logs, and TDEE for tailored dietary advice. Deployed full-stack app (React, Node.js/Express, PostgreSQL, Docker) with GitHub Actions CI/CD to AWS EC2 and ECR.
- Tech tags: React, Node.js, Express, PostgreSQL, Docker, LangGraph, RAG, GitHub Actions CI/CD, AWS (EC2, ECR)
- Repo: https://github.com/rjacaac211/nutriguide-ai
- Live demo: *TBD — not yet available*
- Screenshot: *TBD — not yet available*

**2-5. `[PLACEHOLDER PROJECT]`** — *to be filled in later, 2-4 more cards to reach the target of 3-6 total*
- Title: `TBD`
- Description: `TBD`
- Tech tags: `TBD`
- Repo link: `TBD`
- Live demo link: `TBD`
- Screenshot: `TBD`

### 5.8 Testimonials
Three LinkedIn recommendations, verbatim:

> "RJ was our first AI developer, joining as an intern straight out of university. He built our first scrapers and automation workflows, giving us an early foothold in AI and automation. Thanks for your contributions, RJ — all the best going forward."
> **— Christian Dick, CEO, CD Commerce GmbH**

> "I had the pleasure of working alongside RJ Aca-ac as a co-developer, and I'd recommend him without hesitation. RJ takes a genuinely hands-on approach to every project, and he's incredibly easy to work with. When I was still getting up to speed on our tech stack, he was the one who patiently guided me through the things I didn't know.
>
> What stood out most was the quality of his work. The projects he builds consistently follow best practices, and when he handed one over to me, it was very easy to pick up — clean, well-structured, and thoroughly documented. Beyond the technical side, RJ is simply a great person to have on a team. Any team would be lucky to have him."
> **— Christian Moises, AI Developer, CD Commerce GmbH**

> "Working alongside RJ has been one of the rare experiences where you can see professionalism and passion even without years of experience.
>
> As an HR Manager working in the industry for more than 7 years, RJ operates not just as a technically sharp AI Developer, but as a genuine team player who is not afraid to speak out when needed.
>
> What stood out the most was RJ's ownership mentality. He proactively drives solutions and flags risks early, delivering results.
>
> I'd recommend RJ without hesitation to any team who is looking for an AI Developer who brings both a technical and scalable mindset to the table."
> **— Drixcy Guiang, HR Manager**

### 5.9 Contact / Footer
- Email: rj.acaac211@gmail.com
- Phone: +63 920-700-5579
- LinkedIn: https://www.linkedin.com/in/rj-aca-ac-7a070b29a/
- GitHub: https://github.com/rjacaac211
- Resume download (repeated): `/resume.pdf`
- Copyright line

## 6. Accessibility & SEO

- Semantic HTML throughout (proper heading hierarchy, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Alt text for the headshot and all project screenshots
- Sufficient color contrast in both light and dark themes
- Keyboard-navigable nav and theme toggle
- SEO meta tags: page title, meta description
- Open Graph tags for link previews on LinkedIn/Twitter (needs a preview image — see Open Items)

## 7. Asset Manifest

| Asset | Current location | Target location | Status |
|---|---|---|---|
| Headshot | `uploads/headshot.jpg` | `/public/images/headshot.jpg` | Ready |
| Resume PDF | `uploads/resume.pdf` | `/public/resume.pdf` | Ready |
| NutriGuide AI screenshot | — | `/public/images/projects/nutriguide-ai.png` | TBD |
| Open Graph preview image | — | `/public/og-image.png` | TBD |
| Placeholder project screenshots (x2-4) | — | `/public/images/projects/` | TBD |

## 8. Open Items / TODO Before Launch

- [ ] Decide on a custom domain (currently using Vercel default URL)
- [ ] Fill in 2-4 additional real project cards (title, description, tech tags, links, screenshot)
- [ ] Get a live demo link and screenshot for NutriGuide AI, or confirm it stays repo-only
- [ ] Design and add an Open Graph preview image
- [ ] Confirm final copy for the About/Personal Characteristics bio (currently a synthesis of resume + testimonials, not RJ's own words yet)
