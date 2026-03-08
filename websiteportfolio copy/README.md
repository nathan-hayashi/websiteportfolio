# Portfolio Website Template

A professional portfolio website template built with **Astro 5** and **Cloudflare Pages**. Features role-based content ordering, dark mode, design tokens, WCAG AA accessibility, and static search.

## Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org/))
- **Git** ([download](https://git-scm.com/))
- **VS Code** recommended ([download](https://code.visualstudio.com/))
- A **GitHub** account (free)
- A **Cloudflare** account (free tier is sufficient)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → Opens at http://localhost:4321

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

## How to Make This Yours (Step by Step)

### Step 1: Edit Your Identity (`src/data/site.ts`)
This is the **single most important file**. Change your name, title, tagline, links, and proof bullets. Everything flows from here to the rest of the site automatically.

### Step 2: Add Your Work Experience (`src/data/work.ts`)
Add your jobs in reverse chronological order. Each entry has a title, company, dates, and bullet-point highlights. Optionally add company logos and inline case studies.

### Step 3: Add Your Education (`src/data/education.ts`)
Your degree, relevant coursework, academic projects, and activities.

### Step 4: Add Your Skills (`src/data/skills.ts`)
Organize your skills into 5-7 categories. Items display as lists on the /skills page.

### Step 5: Create Content (Markdown Files)
- **Blog posts**: Duplicate `src/content/writing/example-first-post.md`
- **Projects**: Duplicate `src/content/projects/example-project.md`
- **Certifications**: Duplicate `src/content/certifications/example-certification.md`

### Step 6: Add Your Resume PDF
Place your resume PDF in the `public/` folder and update the href in `src/pages/resume.astro`.

### Step 7: Add Logos
Place company/school/cert logos in `public/assets/logos/` and reference them in the appropriate data files and page logo maps.

### Step 8: Customize Colors (Optional)
Edit `src/styles/tokens.css` to change the accent color, backgrounds, or spacing.

## Deploying to Cloudflare Pages

1. Push your code to a GitHub repository
2. Log into [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Go to **Pages** → **Create a project** → **Connect to Git**
4. Select your repository
5. Set build command: `npm run build`
6. Set output directory: `dist`
7. Deploy!

### Setting Up the Contact Form
The contact form uses Cloudflare Pages Functions + Resend for email:
1. Sign up at [resend.com](https://resend.com/) (free tier)
2. Get your API key
3. In Cloudflare Pages dashboard → Settings → Environment Variables, add:
   - `RESEND_API_KEY` = your Resend API key
   - `TURNSTILE_SECRET` = your Cloudflare Turnstile secret key
4. Set up Turnstile at Cloudflare Dashboard → Turnstile

### Custom Domain
1. Register a domain (Cloudflare Registrar offers at-cost pricing)
2. In Pages project → Custom domains → Add domain
3. Update `site` in `astro.config.mjs` with your actual URL

## File Structure Overview

```
src/
├── data/         ★ START HERE — your personal data
├── content/      Blog posts, projects, certifications (Markdown)
├── components/   24 reusable UI components
├── layouts/      Page layout wrappers
├── pages/        File-based routing (filename = URL)
└── styles/       Design tokens and global CSS
```

See `DIRECTORY_GUIDE.md` for the complete file map.

## AI Assistant Prompts

Use these prompts with ChatGPT, Claude, or any AI assistant:

**For site.ts:**
> "Help me write a professional tagline, two proof bullets with metrics, and an availability line for my portfolio. I'm a [role] at [company]."

**For work.ts:**
> "I worked as [title] at [company]. Help me write 5 bullet points for my portfolio using action verbs and specific metrics."

**For a blog post:**
> "Write a technical blog post about [topic] for a professional portfolio. Include intro, 3-4 sections with H2 headings, and a conclusion. Professional but conversational tone."

**For a project case study:**
> "Write a project case study with sections: Overview, Problem, Approach, Architecture, Outcome, Lessons Learned. The project was [description]."

**For skills organization:**
> "Organize these skills into 5-7 categories for a portfolio: [list your skills]"

## Key Features

- **Role Gate** — Visitors choose Recruiter/Hiring Manager/Visitor; home page reorders sections per audience
- **Dark Mode** — Toggle with localStorage persistence, system preference detection
- **Static Search** — Pagefind indexes all content at build time
- **WCAG AA** — Accessible color contrast, keyboard navigation, semantic HTML
- **Progressive Enhancement** — Works fully without JavaScript
- **Mobile Responsive** — Hamburger menu, stacked layouts on small screens

## Tech Stack

- [Astro 5](https://astro.build/) — Static site generator
- [Cloudflare Pages](https://pages.cloudflare.com/) — Edge hosting (free tier)
- [Pagefind](https://pagefind.app/) — Static search
- [Resend](https://resend.com/) — Email API for contact form

## License

This template is free to use for personal portfolios. Attribution appreciated but not required.
