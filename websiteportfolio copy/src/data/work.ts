/* =============================================================================
   WORK EXPERIENCE DATA — Your professional timeline
   =============================================================================
   Each entry in this array becomes a card on the /work page timeline.
   Entries are displayed in the order listed (put current/most recent first).

   AI PROMPT TO HELP WRITE WORK ENTRIES:
     "I worked as a [title] at [company] from [start] to [end]. My main
      responsibilities were [X, Y, Z]. Help me write 4-6 bullet point
      highlights using action verbs and specific metrics where possible.
      Format: '[Action verb] [what you did], [measurable result]'"

   FIELDS:
     title      — Your job title
     company    — Company name
     startDate  — "Month Year" format (e.g., "June 2024")
     endDate    — "Month Year" or "Present" for current role
     highlights — Array of 3-7 bullet points (action verb + result)
     logo       — Optional path to company logo in public/assets/logos/
     caseStudy  — Optional inline case study (problem/approach/outcome)

   LOGO SETUP:
     1. Place company logo PNG/JPG in public/assets/logos/
     2. Set logo field to '/assets/logos/company-name.png'
     3. Logo displays at 40px in the timeline

   TODO: Replace the example entries below with your real work history.
   ============================================================================= */

export interface CaseStudy {
  title: string;
  problem: string;
  approach: string;
  outcome: string;
  technologies: string[];
}

export interface WorkEntry {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  logo?: string;
  caseStudy?: CaseStudy;
}

export const workExperience: WorkEntry[] = [
  // -----------------------------------------------------------------------
  // EXAMPLE: Current Job (most recent first)
  // TODO: Replace with your actual current position
  // -----------------------------------------------------------------------
  {
    title: 'Your Current Job Title',
    company: 'Current Company Name',
    startDate: 'January 2025',
    endDate: 'Present',
    // TODO: Add your company logo to public/assets/logos/ and update path
    logo: '/assets/logos/your-company.png',
    highlights: [
      // TODO: Replace with your actual achievements
      // TIP: Start each bullet with a strong action verb
      // TIP: Include metrics when possible (%, $, counts, time saved)
      'Led [initiative] resulting in [measurable outcome]',
      'Developed [tool/system] that [specific improvement with metric]',
      'Collaborated with [teams] to [achieve goal]',
      'Managed [scope] across [scale], maintaining [quality metric]',
    ],
    // Optional: Add an inline case study for your best project at this job
    caseStudy: {
      title: 'Case Study: Your Key Project',
      problem: 'Describe the problem you solved in 1-2 sentences.',
      approach: 'Explain your technical approach and key decisions.',
      outcome: 'State the measurable result (e.g., "Reduced X by 40%").',
      technologies: ['Tool 1', 'Tool 2', 'Tool 3'],
    },
  },

  // -----------------------------------------------------------------------
  // EXAMPLE: Previous Job
  // TODO: Replace with your actual previous position
  // -----------------------------------------------------------------------
  {
    title: 'Your Previous Job Title',
    company: 'Previous Company Name',
    startDate: 'June 2023',
    endDate: 'December 2024',
    // logo: '/assets/logos/previous-company.png',  // TODO: uncomment and set path
    highlights: [
      'Built [system/tool] for [purpose], improving [metric] by [amount]',
      'Resolved [number]+ [tickets/issues/requests] across [scope]',
      'Created [documentation/guides] that reduced [problem] by [metric]',
      'Automated [process] using [technology], saving [time/effort]',
    ],
    // Omit caseStudy if not applicable for this role
  },

  // Add more entries following the same pattern...
  // TIP: Include internships, part-time roles, and volunteer work if relevant
];
