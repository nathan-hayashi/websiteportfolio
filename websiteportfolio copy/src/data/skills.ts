/* =============================================================================
   SKILLS DATA — Your technical and professional skill categories
   =============================================================================
   Each category becomes a section on the /skills page. Within each category,
   items are displayed as a list. Organize by domain, not by proficiency level.

   AI PROMPT TO HELP ORGANIZE SKILLS:
     "I'm a [your role]. Here are my skills: [list everything]. Help me
      organize these into 5-7 logical categories with descriptive category
      names. Each category should have 4-8 items."

   FIELDS:
     name  — Category heading (e.g., "Cloud & Infrastructure")
     items — Array of skill names within that category

   TODO: Replace the example categories and items with your own skills.
   ============================================================================= */

export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  // -----------------------------------------------------------------------
  // EXAMPLE CATEGORIES — Replace with your own
  // TIP: Order categories from most to least relevant to your target role
  // -----------------------------------------------------------------------
  {
    name: 'Cloud & Infrastructure',
    // TODO: Replace with your actual cloud skills
    items: [
      'AWS (EC2, S3, IAM, Lambda)',
      'Azure / Entra ID',
      'Docker',
      'Linux Administration',
      'Networking (DNS, VPN, TLS)',
    ],
  },
  {
    name: 'Programming & Automation',
    items: [
      'Python',
      'TypeScript / JavaScript',
      'PowerShell',
      'Bash / Shell Scripting',
      'SQL',
    ],
  },
  {
    name: 'Security & Compliance',
    items: [
      'Identity & Access Management (IAM)',
      'NIST Frameworks',
      'Vulnerability Assessment',
      'Incident Response',
      'SIEM / Log Analysis',
    ],
  },
  {
    name: 'Tools & Platforms',
    items: [
      'Git / GitHub',
      'VS Code',
      'Jira / Confluence',
      'Terraform',
      'CI/CD Pipelines',
    ],
  },

  // Add more categories as needed...
  // Good categories: "Data & Analytics", "Design & UX", "Project Management",
  // "Communication & Leadership", "Frameworks & Libraries"
];
