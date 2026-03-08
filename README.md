# Portfolio Website Template

A beginner-oriented guide for the `websiteportfolio` project, focused on the code inside `websiteportfolio copy/`.

This project is an Astro-based personal portfolio template designed to be customized into your own website. It uses static generation, Markdown content collections, Cloudflare Pages deployment, Pagefind search, and an optional serverless contact endpoint.

---

## What this project is

This repository is split into two layers:

- **Reference material at the repo root**: PDFs and planning docs that explain requirements, hosting, and the broader runbook.
- **The actual website app**: `websiteportfolio copy/`

If you are trying to get the site running or make it your own, almost everything you need is inside:

```text
websiteportfolio copy/
```

---

## Start here in this exact order

If you are new to Astro or new to this repo, use this sequence.

### 1. Open the app folder
Work inside:

```bash
cd "websiteportfolio copy"
```

### 2. Install and run the project

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:4321
```

Also test a production build early:

```bash
npm run build
npm run preview
```

### 3. Edit the identity file first
Your first real edit should be:

```text
src/data/site.ts
```

This file controls the main identity of the site:

- name
- domain label
- professional role
- tagline
- employer
- proof bullets
- social links
- main nav links
- home-page category tiles
- role-based visitor messaging

If you only change one file at the beginning, change this one first.

### 4. Fill in your career data
After `site.ts`, move to these files:

```text
src/data/work.ts
src/data/education.ts
src/data/skills.ts
```

Use them in this order:

1. `work.ts`
2. `education.ts`
3. `skills.ts`

That gives you a visible backbone for `/work`, `/education`, `/resume`, and `/skills`.

### 5. Add your Markdown content
Once the data files are filled out, add your actual content:

```text
src/content/projects/
src/content/writing/
src/content/certifications/
```

Use the example files in those folders as templates.

### 6. Add assets
Put your static files in:

```text
public/
public/assets/logos/
public/assets/project/
```

Use these for:

- resume PDF
- school/company/vendor logos
- diagrams
- screenshots
- downloadable project documents

### 7. Adjust page templates only after the content exists
Do **not** start by rewriting components.

Instead, first make sure your data and Markdown content are correct. Then edit pages in:

```text
src/pages/
```

That prevents you from styling empty placeholders too early.

### 8. Customize branding and design last
Once the site content is solid, customize:

```text
src/styles/tokens.css
src/styles/global.css
```

Change colors, spacing, typography, and overall feel here.

### 9. Deploy after a clean build
When `npm run build` succeeds, deploy to Cloudflare Pages.

---

## Recommended beginner workflow

Use this mental model:

### Phase 1 — Make it yours
Edit:

- `src/data/site.ts`
- `src/data/work.ts`
- `src/data/education.ts`
- `src/data/skills.ts`

### Phase 2 — Add proof
Create real content in:

- `src/content/projects/`
- `src/content/writing/`
- `src/content/certifications/`

### Phase 3 — Add supporting files
Add:

- your resume PDF
- logos
- diagrams
- screenshots

### Phase 4 — Refine presentation
Then edit:

- `src/pages/`
- `src/components/`
- `src/styles/`

### Phase 5 — Deploy
Connect the repo to Cloudflare Pages and configure environment variables if you use the contact backend.

---

## Project structure

```text
websiteportfolio copy/
├── functions/
│   └── api/
│       └── contact.js
├── public/
│   ├── _headers
│   ├── _routes.json
│   ├── favicon.ico
│   ├── favicon.svg
│   └── assets/
│       ├── logos/
│       └── project/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── certifications/
│   │   ├── projects/
│   │   └── writing/
│   ├── data/
│   │   ├── education.ts
│   │   ├── site.ts
│   │   ├── skills.ts
│   │   └── work.ts
│   ├── layouts/
│   ├── pages/
│   │   ├── certifications/
│   │   ├── projects/
│   │   ├── writing/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── education.astro
│   │   ├── gate.astro
│   │   ├── index.astro
│   │   ├── resume.astro
│   │   ├── skills.astro
│   │   └── work.astro
│   ├── styles/
│   └── content.config.ts
├── DIRECTORY_GUIDE.md
├── README.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## What each main folder does

### `src/data/`
This is the structured, hand-edited source of truth for personal data.

Use it for:

- identity
- work experience
- education
- skill groupings

This is the best place for beginners to start because changes here flow into multiple pages.

### `src/content/`
This is long-form content managed as Markdown or MDX.

Use it for:

- project case studies
- writing/blog posts
- certifications

If you want to add more proof without hardcoding page markup, this is where you do it.

### `src/pages/`
This is Astro file-based routing.

Each file becomes a URL.

Examples:

- `src/pages/index.astro` → `/`
- `src/pages/work.astro` → `/work`
- `src/pages/projects/index.astro` → `/projects`
- `src/pages/projects/[...slug].astro` → `/projects/<slug>`

Edit pages when you want to change layout or route behavior.

### `src/components/`
Reusable UI pieces such as navigation, cards, tags, badges, role cards, footer, and theme toggle.

Only move here after you understand how the pages are already assembled.

### `src/layouts/`
Shared wrappers used by many pages.

Important files:

- `BaseLayout.astro` — the global HTML shell
- `ContentLayout.astro` — breadcrumb + page-summary wrapper for section pages
- `WritingPostLayout.astro` — article layout for individual writing posts

### `public/`
Static files served directly at the site root.

Examples:

- `/YourResume.pdf`
- `/assets/logos/company.png`
- `/assets/project/architecture-diagram.png`

### `functions/api/`
Cloudflare Pages Functions live here.

The `contact.js` file is the backend for a contact form endpoint.

---

## The files that matter most

If you want the shortest path to understanding the project, read these first:

1. `package.json`
2. `astro.config.mjs`
3. `src/data/site.ts`
4. `src/pages/index.astro`
5. `src/content.config.ts`
6. `src/data/work.ts`
7. `src/data/education.ts`
8. `src/data/skills.ts`
9. `src/layouts/BaseLayout.astro`
10. `DIRECTORY_GUIDE.md`

That reading order gives you:

- tooling
- site identity
- home page logic
- content schema
- personal data model
- global layout
- folder roadmap

---

## Route map

### Main pages

- `/` — home page
- `/gate` — role selection page
- `/work` — timeline and case studies
- `/skills` — skills overview
- `/education` — education page
- `/resume` — resume page
- `/about` — biography and links
- `/contact` — contact info page
- `/disclaimer` — disclaimer page

### Content collection routes

- `/projects` and `/projects/<slug>`
- `/writing` and `/writing/<slug>`
- `/certifications` and `/certifications/<slug>`

### SEO redirect routes

- `/blog` redirects to `/writing`
- `/portfolio` redirects to `/projects`

---

## How content flows through the app

This project has two content systems.

### System 1: data files
Used for structured page content.

Examples:

- hero text
- nav items
- work entries
- education details
- skills

Files:

```text
src/data/*.ts
```

### System 2: content collections
Used for repeatable Markdown content.

Examples:

- project writeups
- writing posts
- certifications

Files:

```text
src/content/**/*.md
src/content/**/*.mdx
```

Schema validation lives in:

```text
src/content.config.ts
```

If a Markdown file is missing required frontmatter, the build should fail with a useful error.

---

## What to edit for common tasks

### Change your name, role, links, and homepage tiles
Edit:

```text
src/data/site.ts
```

### Add or update work experience
Edit:

```text
src/data/work.ts
```

### Add or update education
Edit:

```text
src/data/education.ts
```

### Add or update skills
Edit:

```text
src/data/skills.ts
```

### Add a project
Create a new file in:

```text
src/content/projects/
```

### Add a blog post or technical article
Create a new file in:

```text
src/content/writing/
```

### Add a certification
Create a new file in:

```text
src/content/certifications/
```

### Change navigation or global shell
Check:

```text
src/components/Navigation.astro
src/layouts/BaseLayout.astro
```

### Change colors, spacing, and visual system
Edit:

```text
src/styles/tokens.css
src/styles/global.css
```

### Change the home page composition
Edit:

```text
src/pages/index.astro
```

---

## Special features already built into the template

### Role-based entry flow
Visitors can choose a role on `/gate`:

- Recruiter
- Hiring Manager
- Visitor

That role is used to change emphasis on the homepage.

### Dark mode
There is already a theme toggle component and token-based styling.

### Static search
Pagefind is installed and a search component exists, but it is not currently wired into a page.

### Certifications, projects, and writing use generated routes
Add a Markdown file and Astro creates the page at build time.

### Contact backend exists separately from the UI
A Cloudflare Pages Function exists for contact submissions, but the current contact page is still mostly a simple links page.

---

## Known starter mismatches to resolve first

Before heavy customization, review these template mismatches.

### 1. `skills.ts` and `skills.astro` do not currently use the same data shape
`src/data/skills.ts` currently uses a simple structure like:

```ts
{
  name: string,
  items: string[]
}
```

But `src/pages/skills.astro` expects a richer structure like:

```ts
{
  title: string,
  description: string,
  skills: [
    { name: string, level: string }
  ]
}
```

You should choose one format and make both files match before relying on the skills page.

### 2. `education.ts` and `education.astro` do not currently use the same data shape
`src/data/education.ts` uses simpler placeholder arrays, but `src/pages/education.astro` expects:

- coursework objects with `code`, `name`, and optional `description`
- project objects with `technologies`
- activity objects with `name` instead of `title`
- optional `gpa`

Fix this mismatch before treating the education page as complete.

### 3. Resume and logos are still placeholder-based
`src/pages/resume.astro` still points to placeholder filenames such as:

- `/YourResume.pdf`
- `/assets/logos/your-university.png`
- `/assets/logos/your-cert-logo-1.png`

That is normal for a starter template, but you need to replace those files and paths.

### 4. Contact backend and contact page are at different maturity levels
`functions/api/contact.js` is a real backend endpoint, but `src/pages/contact.astro` currently presents contact links rather than a full working form.

If you want a true form flow, add form markup to the page and wire it to `/api/contact`.

---

## Suggested fixes for the first clean pass

If you want the fastest route to a stable starter version, do this first:

1. Make `skills.ts` match `skills.astro`
2. Make `education.ts` match `education.astro`
3. Add your real resume PDF to `public/`
4. Replace placeholder logo filenames
5. Run `npm run build`
6. Only then start polishing components and styling

---

## Adding content correctly

### Writing posts
Duplicate the example file in:

```text
src/content/writing/example-first-post.md
```

Use it for:

- technical blogs
- reflections
- lessons learned
- career notes

### Projects
Duplicate:

```text
src/content/projects/example-project.md
```

Use it for:

- architecture writeups
- homelab builds
- automation projects
- security projects
- portfolio case studies

### Certifications
Duplicate:

```text
src/content/certifications/example-certification.md
```

Use it for:

- active certs
- in-progress certs
- planned certs
- expired certs

---

## Deployment notes

### Astro config
Check:

```text
astro.config.mjs
```

Update:

- `site`
- any future integration settings

### Cloudflare Pages
The project is built for static deployment with Cloudflare Pages.

Typical build settings:

- build command: `npm run build`
- output directory: `dist`

### Contact form environment variables
If you use the contact endpoint, configure environment variables in Cloudflare Pages for:

- `TURNSTILE_SECRET_KEY`
- `RESEND_API_KEY`
- `SENDER_DOMAIN`
- `RECIPIENT_EMAIL`

---

## Security and platform files

### `public/_headers`
This file defines response headers such as:

- content security policy
- frame protection
- content type sniffing protection
- referrer policy
- caching rules

### `public/_routes.json`
This file controls Cloudflare routing behavior for the `/api/*` function path.

---

## Supplemental docs in the repo root

Outside the app folder, the repo root includes additional reference files such as:

- `Complete_Portfolio_Website_Runbook_v2.pdf`
- `Requirements.pdf`
- `website_hosting_solutions_matrix_weighted_nocharts_cached.pdf`
- `LICENSE`

Treat those as planning and reference documents.
The application itself still lives in `websiteportfolio copy/`.

---

## Common beginner mistakes in this repo

### Editing pages before filling data
This makes the project feel more complex than it is.
Start with `src/data/`.

### Forgetting that file names become routes
Markdown file names become URLs.
Choose slugs carefully.

### Forgetting static asset paths are root-based
Files in `public/` are served from the root URL.

Example:

```text
public/assets/project/diagram.png
```

becomes:

```text
/assets/project/diagram.png
```

### Changing schemas without updating Markdown files
If you edit `src/content.config.ts`, you may also need to update existing frontmatter.

### Assuming the contact form UI is already complete
The backend exists, but the page still needs form UI work if you want actual submissions from the site.

---

## Fastest path for a first working personalized version

If you want the shortest realistic path to a usable portfolio site, do only this:

1. Edit `src/data/site.ts`
2. Edit `src/data/work.ts`
3. Fix `education.ts` ↔ `education.astro`
4. Fix `skills.ts` ↔ `skills.astro`
5. Add 2 projects
6. Add 2 writing posts
7. Add 2 certifications
8. Add resume PDF and logos
9. Run `npm run build`
10. Deploy

That gets you from template to a real portfolio much faster than redesigning the UI first.

---

## Best file to keep open while working

Use these three side by side:

- `DIRECTORY_GUIDE.md`
- `src/data/site.ts`
- `src/pages/index.astro`

That combination explains the structure, the personal data model, and the main homepage behavior.

---

## Tech stack

- Astro 5
- TypeScript
- MDX
- Pagefind
- Cloudflare Pages
- Cloudflare Pages Functions
- Resend

---

## License

This repository includes an MIT license at the repo root.
