# Portfolio Template — Directory Guide

This is your roadmap for the entire project. Every file is listed with its purpose,
what URL it maps to, and what you need to change to make it yours.

## Quick Start Checklist

1. [ ] Edit `src/data/site.ts` — your name, role, tagline, links
2. [ ] Edit `src/data/work.ts` — your work experience
3. [ ] Edit `src/data/education.ts` — your education
4. [ ] Edit `src/data/skills.ts` — your skill categories
5. [ ] Add your resume PDF to `public/` and update href in `resume.astro`
6. [ ] Add company logos to `public/assets/logos/`
7. [ ] Create project .md files in `src/content/projects/`
8. [ ] Create blog .md files in `src/content/writing/`
9. [ ] Create certification .md files in `src/content/certifications/`
10. [ ] Update `astro.config.mjs` with your actual domain
11. [ ] Set up Cloudflare Pages deployment
12. [ ] Run `npm run build` to verify everything works

## File Structure

```
portfolio/
├── .gitignore                    Git ignore rules
├── astro.config.mjs              Astro framework configuration
├── package.json                  Dependencies and scripts
├── tsconfig.json                 TypeScript configuration
├── DIRECTORY_GUIDE.md            This file — your roadmap
├── README.md                     Getting started guide
│
├── functions/
│   └── api/
│       └── contact.js            Cloudflare Pages Function — contact form backend
│
├── public/                       Static assets (served at root URL)
│   ├── favicon.ico               Browser tab icon (legacy)
│   ├── favicon.svg               Browser tab icon (modern)
│   ├── YourResume.pdf            TODO: Add your resume PDF here
│   ├── _headers                  Cloudflare security headers
│   ├── _routes.json              Cloudflare routing config
│   └── assets/
│       ├── logos/                 Company/org/cert logos (PNG, JPG)
│       │   └── INSTRUCTIONS.txt  How to add and reference logos
│       └── project/              Project supporting docs (PDF, images)
│           └── INSTRUCTIONS.txt  How to add and link project assets
│
└── src/
    ├── content.config.ts         Content collection schemas (Zod validation)
    │
    ├── content/                  Markdown content (auto-discovered)
    │   ├── writing/              Blog posts → /writing/[slug]
    │   │   └── example-first-post.md
    │   ├── projects/             Project case studies → /projects/[slug]
    │   │   └── example-project.md
    │   └── certifications/       Credentials → /certifications/[slug]
    │       └── example-certification.md
    │
    ├── components/               24 reusable UI components
    │   ├── Breadcrumbs.astro     Navigation trail (Home / Section / Page)
    │   ├── ButtonGhost.astro     Text link with arrow ("View all →")
    │   ├── ButtonPrimary.astro   Filled accent button
    │   ├── ButtonSecondary.astro Outlined button
    │   ├── Card.astro            Generic card wrapper
    │   ├── CaseStudyCard.astro   Inline case study (problem/approach/outcome)
    │   ├── CategoryTile.astro    Home page section tile
    │   ├── Disclosure.astro      Expandable details/summary
    │   ├── ExternalLink.astro    Link with external icon
    │   ├── Footer.astro          Site footer
    │   ├── Navigation.astro      Top nav bar + mobile hamburger menu
    │   ├── NdaNotice.astro       NDA/sanitized notice banner
    │   ├── PostNavigation.astro  Prev/Next post links
    │   ├── PrivacyNotice.astro   Privacy notice banner
    │   ├── ProjectCard.astro     Project listing card
    │   ├── RoleBar.astro         "Viewing as: Recruiter" indicator
    │   ├── RoleCard.astro        Role selection card on gate page
    │   ├── Search.astro          Pagefind search widget
    │   ├── SkipLink.astro        Keyboard accessibility skip link
    │   ├── StatusBadge.astro     Color-coded status pill
    │   ├── Tag.astro             Technology/topic tag chip
    │   ├── ThemeToggle.astro     Light/dark mode toggle
    │   ├── TimelineEntry.astro   Work timeline entry
    │   └── TldrPanel.astro       Page header with title + description
    │
    ├── data/                     TypeScript data files (single source of truth)
    │   ├── site.ts               ★ START HERE — name, role, links, nav, tiles
    │   ├── work.ts               Work experience entries
    │   ├── education.ts          Degree, courses, academic projects
    │   └── skills.ts             Skill categories and items
    │
    ├── layouts/                  Page layout wrappers
    │   ├── BaseLayout.astro      Root HTML document (every page)
    │   ├── ContentLayout.astro   Section pages with breadcrumbs + TL;DR
    │   └── WritingPostLayout.astro  Blog post pages
    │
    ├── pages/                    File-based routing (filename = URL)
    │   ├── index.astro           / (home page)
    │   ├── about.astro           /about
    │   ├── contact.astro         /contact
    │   ├── education.astro       /education
    │   ├── gate.astro            /gate (role selection)
    │   ├── resume.astro          /resume
    │   ├── skills.astro          /skills
    │   ├── work.astro            /work
    │   ├── disclaimer.md         /disclaimer
    │   ├── blog/index.astro      /blog → redirects to /writing (SEO)
    │   ├── portfolio/index.astro /portfolio → redirects to /projects (SEO)
    │   ├── certifications/
    │   │   ├── index.astro       /certifications
    │   │   └── [...slug].astro   /certifications/[slug]
    │   ├── projects/
    │   │   ├── index.astro       /projects
    │   │   └── [...slug].astro   /projects/[slug]
    │   └── writing/
    │       ├── index.astro       /writing
    │       └── [...slug].astro   /writing/[slug]
    │
    └── styles/
        ├── tokens.css            ★ Design tokens — colors, spacing, fonts
        └── global.css            CSS reset + base element styles
```

## File-to-URL Mapping

| Source File | URL | Purpose |
|---|---|---|
| `src/pages/index.astro` | `/` | Home page with hero, tiles, featured content |
| `src/pages/work.astro` | `/work` | Work timeline |
| `src/pages/projects/index.astro` | `/projects` | Project listing |
| `src/pages/projects/[...slug].astro` | `/projects/[slug]` | Project detail |
| `src/pages/writing/index.astro` | `/writing` | Blog listing |
| `src/pages/writing/[...slug].astro` | `/writing/[slug]` | Blog post |
| `src/pages/skills.astro` | `/skills` | Skills overview |
| `src/pages/certifications/index.astro` | `/certifications` | Certifications |
| `src/pages/certifications/[...slug].astro` | `/certifications/[slug]` | Cert detail |
| `src/pages/about.astro` | `/about` | Bio and social links |
| `src/pages/contact.astro` | `/contact` | Contact information |
| `src/pages/education.astro` | `/education` | Education details |
| `src/pages/resume.astro` | `/resume` | Resume download + inline summary |
| `src/pages/gate.astro` | `/gate` | Role selection page |
| `src/pages/disclaimer.md` | `/disclaimer` | Legal disclaimer |

## How to Add Content

### New Blog Post
1. Create `src/content/writing/my-post-slug.md`
2. Copy frontmatter from `example-first-post.md`
3. Write your content in Markdown below the `---`
4. Run `npm run build` to verify

### New Project
1. Create `src/content/projects/my-project.md`
2. Copy frontmatter from `example-project.md`
3. Optionally add a logo mapping in `src/pages/projects/[...slug].astro`
4. Run `npm run build` to verify

### New Certification
1. Create `src/content/certifications/my-cert.md`
2. Copy frontmatter from `example-certification.md`
3. Optionally add a logo mapping in certifications page files
4. Run `npm run build` to verify

## Key Architecture Concepts

- **Static Site Generation (SSG)** — All pages are pre-built HTML. No server needed at runtime.
- **Content Collections** — Markdown files with validated frontmatter. Schemas in `content.config.ts`.
- **Design Tokens** — All colors/spacing defined in `tokens.css`. Change once, updates everywhere.
- **Role Gate** — Visitors choose Recruiter/Hiring Manager/Visitor. CSS reorders home page sections.
- **Dark Mode** — `localStorage` persists theme choice. Anti-flash script prevents white flash.
- **Progressive Enhancement** — Site works fully without JavaScript.
