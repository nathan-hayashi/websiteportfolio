/* =============================================================================
   SITE DATA — ★ START HERE ★ — Your identity and site configuration
   =============================================================================
   This is the FIRST file you should edit. Every value here flows automatically
   to the rest of the site — hero section, nav bar, footer, meta tags, etc.

   Usage: import { site } from '../data/site';

   AI PROMPT TO HELP FILL THIS OUT:
     "I'm building a portfolio website. My name is [X], I work as a [role] at
      [company]. Help me write: a professional tagline (one sentence), two
      proof bullets (key achievements with metrics), and an availability line.
      Keep it concise and professional."

   TODO: Replace every placeholder value below with your own information.
   ============================================================================= */

export const site = {
  // TODO: Your full name — displayed in the hero section and browser tab
  name: 'Your Name',

  // TODO: Your domain name — displayed in the nav bar logo
  // (e.g., 'johndoe.dev', 'janesmith.io')
  domain: 'yourdomain.com',

  // TODO: Your professional title or target role
  // This appears in accent color below your name on the home page
  role: 'Your Professional Title / Target Role',

  // TODO: One-line positioning statement — what you do, for whom
  // Used in meta description and hero section. Keep under 160 characters.
  tagline: 'Brief description of what you do and the value you bring.',

  // TODO: Your current employer name (shown in availability line)
  employer: 'Current Company',

  // TODO: Availability note — shown below the hero tagline
  // Adjust based on your job search status
  availability: 'Currently at [Company] — open to [remote/hybrid/on-site] opportunities.',

  /* Proof bullets — 1-3 key achievements shown as pills in the hero section.
     Best practices:
     - Lead with a number or metric when possible
     - Keep each bullet under 50 characters
     - Focus on impact, not responsibilities
     AI PROMPT: "Suggest 2-3 proof bullet points for a [your role] portfolio
                 hero section. Each should be under 50 characters and highlight
                 a measurable achievement." */
  proofBullets: [
    // TODO: Replace with your achievements
    'Key metric or achievement #1',
    'Key metric or achievement #2',
  ],

  /* External links — used by the Contact page, About page, and Footer.
     TODO: Replace all URLs with your actual profiles. */
  links: {
    github: 'https://github.com/your-username',       // TODO: Your GitHub
    linkedin: 'https://www.linkedin.com/in/your-id/',  // TODO: Your LinkedIn
    email: 'contact@yourdomain.com',                   // TODO: Your email
  },

  /* Navigation items — the main nav links in the top bar.
     Order matters: left to right display order.
     You can add, remove, or reorder these. The href must match a page file
     in src/pages/ (e.g., '/work' matches src/pages/work.astro). */
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Projects', href: '/projects' },
    { label: 'Writing', href: '/writing' },
    { label: 'About', href: '/about' },
  ] as const,

  /* Category tiles — the 6 cards on the home page below the hero.
     Each links to a section page. Customize descriptions to fit your content.
     TODO: Update the Education description with your school name. */
  categoryTiles: [
    { title: 'Work & Experience', href: '/work', description: 'Timeline + case studies' },
    { title: 'Projects', href: '/projects', description: 'Architecture + outcomes' },
    { title: 'Skills', href: '/skills', description: 'Practical arsenal' },
    { title: 'Certifications', href: '/certifications', description: 'Active credentials' },
    { title: 'Education', href: '/education', description: 'Your University Name' },  // TODO
    { title: 'About', href: '/about', description: 'Background + contact' },
  ] as const,
};

/* =============================================================================
   ROLE CONFIG — Per-role customization for the visitor gate system
   =============================================================================
   When visitors arrive at your site, they choose a role (Recruiter, Hiring
   Manager, or Visitor). This config controls:
   - What subtitle appears in the hero for each role
   - Which category tiles get accent-highlighted for each role

   The role gate page is at src/pages/gate.astro. The role is stored in
   sessionStorage and read by the BaseLayout inline script.

   You can customize the subtitles to match your positioning for each audience.

   AI PROMPT: "Write three role-specific subtitles for a portfolio site.
              One for recruiters (focus on credentials), one for hiring
              managers (focus on technical depth), one for general visitors
              (focus on exploration). Keep each under 80 characters."
   ============================================================================= */

export const roleConfig: Record<string, { subtitle: string; featuredTiles: string[] }> = {
  recruiter: {
    // TODO: Customize subtitle for recruiters
    subtitle: 'Quick overview of credentials, certifications, and experience.',
    featuredTiles: ['/skills', '/certifications', '/education'],
  },
  'hiring-manager': {
    // TODO: Customize subtitle for hiring managers
    subtitle: 'Technical depth — architecture decisions, case studies, and outcomes.',
    featuredTiles: ['/projects', '/work'],
  },
  visitor: {
    // TODO: Customize subtitle for general visitors
    subtitle: 'Browse freely — projects, writing, and background.',
    featuredTiles: ['/projects', '/about'],
  },
};
