/* =============================================================================
   CONTENT COLLECTIONS — Schema definitions for all Markdown/MDX content
   =============================================================================
   Astro 5.x content collections use Zod schemas to validate frontmatter.
   This file MUST be at src/content.config.ts (sibling of src/pages/, NOT
   inside src/content/).

   Collections defined here:
   - writing   — Blog posts, career reflections, technical notes
   - projects  — Portfolio case studies with architecture details
   - certifications — Professional credentials and planned certifications

   Each collection uses a glob loader that reads .md/.mdx files from its
   content directory. Frontmatter fields are validated at build time — if
   a required field is missing, the build will fail with a clear error.

   Coordinated changes:
   - Adding a new collection → also create src/content/[name]/ folder,
     a listing page at src/pages/[name]/index.astro,
     and a detail page at src/pages/[name]/[...slug].astro
   - Changing a schema field → update all .md files in that collection to match
   - Renaming a collection → update all getCollection() calls in pages

   Future improvement: Add 'experience' collection if work history needs
   individual markdown pages instead of the current data file approach.
   ============================================================================= */

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/* ---------------------------------------------------------------------------
   WRITING COLLECTION (replaces old 'blog' collection)
   Path: src/content/writing/*.md
   Pages: /writing and /writing/[slug]

   Used for: blog posts, career path notes, technical articles, opinions.
   The 'draft' field controls visibility — drafts shown with a badge but
   can be filtered out in production if desired.
   --------------------------------------------------------------------------- */
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    /* Post title — displayed as H1 on the post page and in listing cards */
    title: z.string(),

    /* Brief summary — shown on index pages and in meta description */
    description: z.string().optional(),

    /* Publication date — used for sorting (newest first) and display */
    pubDate: z.coerce.date(),

    /* Last update date — shown if post was revised after initial publish */
    updatedDate: z.coerce.date().optional(),

    /* Categorization tags — rendered as Tag chips, used for filtering */
    tags: z.array(z.string()).optional(),

    /* Draft flag — draft posts show a "Draft" badge on the listing page.
       Set to true while writing; change to false when ready to publish. */
    draft: z.boolean().default(false),

    /* Featured flag — featured posts appear on the home page */
    featured: z.boolean().default(false),

    /* Estimated read time — shown in post header (e.g., "5 min read") */
    readTime: z.string().optional(),

    /* Medical/health disclaimer — shows a warning banner on the post.
       Used for nutrition/diet content per web_chat_notes.md requirements. */
    disclaimer: z.boolean().default(false),
  }),
});

/* ---------------------------------------------------------------------------
   PROJECTS COLLECTION (replaces old 'portfolio' collection)
   Path: src/content/projects/*.md
   Pages: /projects and /projects/[slug]

   Used for: technical case studies with architecture, decisions, outcomes.
   The 'confidentiality' field controls whether an NDA notice is displayed.
   The 'status' field drives the StatusBadge component (Complete, In Progress, etc.)
   --------------------------------------------------------------------------- */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    /* Project title — displayed as H1 on detail page and in listing cards */
    title: z.string(),

    /* One-line description — shown on cards and in meta tags */
    description: z.string(),

    /* Technology tags — rendered as Tag chips on cards and detail pages */
    technologies: z.array(z.string()),

    /* Project start date — used for sorting and display */
    date: z.coerce.date(),

    /* Project end date — optional, used for timeline display */
    endDate: z.coerce.date().optional(),

    /* GitHub repository URL — shown as "View on GitHub" link if provided */
    github: z.string().url().optional(),

    /* Featured flag — featured projects appear on the home page */
    featured: z.boolean().default(false),

    /* Archived flag — archived projects are hidden from the main listing */
    archived: z.boolean().default(false),

    /* Project status — drives the StatusBadge color and label:
       complete = green "Complete" badge
       in-progress = yellow "In Progress" badge
       planned = gray "Planned" badge */
    status: z.enum(['complete', 'in-progress', 'planned']).default('complete'),

    /* Confidentiality level — controls NDA notice display:
       public = no notice
       nda = orange "Full details available under NDA" bar
       sanitized = subtle "Sanitized for public disclosure" note */
    confidentiality: z.enum(['public', 'nda', 'sanitized']).default('public'),

    /* Your role on this project — shown in the meta section on detail pages */
    role: z.string().optional(),

    /* Tools used — distinct from technologies; shown in detail page meta row */
    tools: z.array(z.string()).optional(),
  }),
});

/* ---------------------------------------------------------------------------
   CERTIFICATIONS COLLECTION
   Path: src/content/certifications/*.md
   Page: /certifications (index only — no individual detail pages)

   Used for: professional credentials (active, planned, expired).
   The 'status' field groups certs into Active/Planned/Expired sections.
   --------------------------------------------------------------------------- */
const certifications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/certifications' }),
  schema: z.object({
    /* Certification name — displayed as heading in the cert card */
    title: z.string(),

    /* Issuing organization — e.g., "CompTIA", "AWS", "Microsoft" */
    vendor: z.string().optional(),

    /* Date achieved (or target date for planned certs) */
    date: z.coerce.date(),

    /* Verification URL — e.g., Credly badge link. Rendered as "Verify Credential" */
    proof: z.string().url().optional(),

    /* Certification status — groups certs into sections on the certifications page:
       active = shown under "Active" with green dot
       in-progress = shown under "Planned / In Progress" with yellow badge
       planned = shown under "Planned / In Progress" with gray badge
       expired = shown under "Expired" (if section exists) */
    status: z.enum(['active', 'in-progress', 'planned', 'expired']).default('active'),

    /* Expiration date — for certs that require renewal */
    expirationDate: z.coerce.date().optional(),
  }),
});

/* Export all collections — Astro discovers these at build time */
export const collections = { writing, projects, certifications };
