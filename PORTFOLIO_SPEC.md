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

Single-page scroll site with a sticky nav bar (logo/initials mark "RJA" + anchor links + theme toggle). Section order — Projects moved up right after Hero so recruiters/HR (the primary visitor) reach real proof of work within one scroll, ahead of resume-style sections:

1. Hero
2. Projects
3. About / Personal Characteristics (incl. "Why Hire Me" — merged, see §5.2)
4. Experience
5. Skills
6. Education & Certifications
7. Testimonials
8. Contact / Footer

## 5. Section-by-Section Spec

### 5.1 Hero
- Headshot: `uploads/headshot.jpg` (to be migrated to `/public/images/headshot.jpg`)
- Name: **Rolando John R. Aca-ac** (displayed as "RJ Aca-ac")
- Title: **AI Developer / AI Engineer**
- Tagline (from resume's professional summary): *"AI Developer / AI Engineer building end-to-end AI agents, automations, and full-stack LLM applications. Proven in transforming complex manual workflows into scalable, production-ready systems that deliver 90%+ time savings."*
- CTAs: "Download Resume" (links to `/resume.pdf`) and "View Projects" (anchor scroll to Projects section)

### 5.2 About / Personal Characteristics (incl. Why Hire Me)
One combined section — short bio + trait pills, followed by a condensed "why hire me" list, in RJ's own words. Merged from two previously separate sections (About, Why Hire Me) since they covered overlapping ground (traits/working style); kept as one section to avoid resume-style filler.

- Bio + traits: proactive, ownership-driven, business-minded, easy to work with, patient mentor to teammates, comfortable with ambiguity.
- Why hire me (condensed list, not full cards):
  - Goes beyond technical implementation to understand the business itself — the *why* and *what*, not just the *how*
  - Takes ownership of business workflows end-to-end when building AI automations
  - Proactive communicator — surfaces blockers early rather than waiting to be asked
  - Comfortable operating with high-level, ambiguous requirements and translating them into clear technical plans
  - Comfortable working with stakeholders at all levels, from engineers to executives

### 5.3 Experience
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

### 5.4 Skills
Grouped pill/tag clusters by category:

- **Languages:** Python, JavaScript, TypeScript
- **AI / Agents:** LangChain, LangGraph, RAG, OpenAI, Pinecone, Claude Code
- **Backend:** FastAPI, Node.js, Express, Flask
- **Frontend:** React
- **Data / Infra:** PostgreSQL, Docker, CI/CD, Git, AWS

### 5.5 Education & Certifications
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

### 5.6 Projects
Uniform grid, 5 cards, equal weight (no single "featured" card — chosen so recruiters scan all of them rather than anchoring on one). AccrueBoard leads as the newest project. Each card: screenshot, title, subtitle, ~2-sentence description, tech-stack tags, GitHub repo link (none currently have a separately hosted live demo).

**1. AccrueBoard** — Bookkeeping AI pipeline with a live human-in-the-loop board
- Description: A bookkeeping pipeline that classifies, extracts, codes and risk-scores incoming invoices and receipts, then either auto-posts them to a double-entry ledger or routes them to a live review board where a LangGraph assistant investigates and cites its evidence. On 307 held-out documents it posted 79% without a person, with 0 wrong auto-posts.
- Tech tags: Claude, LangGraph, Python, FastAPI, PostgreSQL, pgvector, React, TypeScript, SSE, Docker
- Repo: https://github.com/rjacaac211/accrue-board
- Screenshot: `/public/images/projects/accrue-board.png` (live board view from the repo's `docs/images/board.png`)

**2. NutriGuide AI** — AI-powered personalized nutrition assistant
- Description: A LangGraph agent you talk to: log meals in plain English, ask nutrition questions grounded in a curated RAG knowledge base, and track calories/weight against a TDEE-based goal — streamed token-by-token to a React dashboard.
- Tech tags: React, Node.js, Express, PostgreSQL, LangGraph, RAG, Docker, AWS
- Repo: https://github.com/rjacaac211/nutriguide-ai
- Screenshot: `/public/images/projects/nutriguide-ai.png`

**3. LeadFlow AI** — Autonomous B2B lead-qualification agent
- Description: A LangGraph.js agent that scores and tiers inbound leads against a configurable ICP rubric, syncs to HubSpot, drafts outreach, and pauses on a durable human-in-the-loop approval gate before anything sends.
- Tech tags: TypeScript, LangGraph.js, Express, Prisma, PostgreSQL, React, Claude
- Repo: https://github.com/rjacaac211/leadflow-ai
- Screenshot: `/public/images/projects/leadflow-ai.png` (frame extracted from the repo's demo GIF, showing the scored lead + outreach-approval UI)

**4. Sign Sense** — Real-time mobile traffic sign recognition
- Description: An Android app that detects and classifies Philippine traffic signs in real time using YOLOv10 and a CNN, optimized with TensorFlow Lite. Published research: 0.823 mAP detection, 99.66% classification accuracy.
- Tech tags: YOLOv10, TensorFlow Lite, CNN, Kotlin, Android, Roboflow
- Repo: https://github.com/rjacaac211/Mobile-App-Traffic-Sign-Recognition
- Screenshot: `/public/images/projects/sign-sense.jpg`

**5. Dental Care** — AI-powered oral health assistant
- Description: A dental clinic assistant combining a LangChain ReAct agent (SQL + web search tools), voice input via Deepgram, and a MobileNetV2 model for oral-disease image classification, with persisted multi-turn chat history.
- Tech tags: FastAPI, React, LangChain, MongoDB Atlas, Deepgram, MobileNetV2, Docker
- Repo: https://github.com/rjacaac211/Dental-Care
- Screenshot: `/public/images/projects/dental-care.jpg`

### 5.7 Testimonials
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

### 5.8 Contact / Footer
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
| AccrueBoard screenshot | `docs/images/board.png` from the GitHub repo | `/public/images/projects/accrue-board.png` | Ready |
| NutriGuide AI screenshot | `../nutriguide-ai/docs/media/dashboard.png` | `/public/images/projects/nutriguide-ai.png` | Ready |
| LeadFlow AI screenshot | frame extracted from `../leadflow-ai/docs/demo.gif` | `/public/images/projects/leadflow-ai.png` | Ready |
| Sign Sense screenshot | `../Mobile-App-Traffic-Sign-Recognition/github/assets/Mobile-App-Screenshot-1.jpg` | `/public/images/projects/sign-sense.jpg` | Ready |
| Dental Care screenshot | `../Dental-Care/docs/dental-care-cover.jpg` | `/public/images/projects/dental-care.jpg` | Ready |
| Open Graph preview image | — | `/public/og-image.png` | TBD |

## 8. Open Items / TODO Before Launch

- [ ] Decide on a custom domain (currently using Vercel default URL)
- [x] Fill in 2-4 additional real project cards (title, description, tech tags, links, screenshot) — added LeadFlow AI, Sign Sense, Dental Care alongside NutriGuide AI
- [x] Get a screenshot for NutriGuide AI — added; confirmed it stays repo-only (no separately hosted live demo for any of the 4 projects)
- [ ] Design and add an Open Graph preview image
- [ ] Confirm final copy for the About/Personal Characteristics bio (currently a synthesis of resume + testimonials, not RJ's own words yet)
