/* =============================================================================
   EDUCATION DATA — Your academic background
   =============================================================================
   This data is displayed on the /education page and referenced by the
   /resume page for the inline summary. Includes degree info, relevant
   coursework, academic projects, and extracurricular activities.

   AI PROMPT TO HELP FILL THIS OUT:
     "I studied [major] at [university], graduating in [year]. My relevant
      coursework included [courses]. I worked on [projects] and participated
      in [activities]. Help me organize this into a structured education
      section for a portfolio website."

   TODO: Replace all placeholder values with your actual education details.
   ============================================================================= */

export const education = {
  /* Your degree information — displayed at the top of the education page
     and on the resume page inline summary. */
  degree: {
    title: 'Your Degree Title',              // TODO: e.g., "B.S. in Computer Science"
    institution: 'Your University',           // TODO: e.g., "University of Washington"
    location: 'City, State',                  // TODO: e.g., "Seattle, WA"
    graduationDate: '20XX',                   // TODO: e.g., "2025"
    // Optional: add a logo field if you want the school logo on the education page
    // logo: '/assets/logos/your-university.png',
  },

  /* Relevant coursework — displayed as a list on the education page.
     Include courses that demonstrate technical depth for your target role.
     TIP: Use the full course title, not just the course number. */
  coursework: [
    // TODO: Replace with your actual courses
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Computer Networks',
    'Information Security',
    'Software Engineering',
    // Add more courses as relevant...
  ],

  /* Academic projects — displayed with titles and descriptions.
     Include projects that demonstrate technical skills relevant to your career.
     AI PROMPT: "Help me write a 2-sentence description of my academic project
                 [name]. It used [technologies] and accomplished [outcome]." */
  projects: [
    {
      title: 'Example Academic Project',       // TODO: Your project name
      description: 'Brief description of what you built, what technologies you used, and what the outcome was.',
    },
    // Add more projects following the same pattern...
  ],

  /* Activities — clubs, organizations, leadership roles, volunteer work.
     These demonstrate soft skills and initiative beyond coursework. */
  activities: [
    {
      title: 'Example Club or Activity',       // TODO: e.g., "ACM Student Chapter"
      role: 'Your Role',                       // TODO: e.g., "Vice President"
      description: 'Brief description of your involvement and contributions.',
    },
    // Add more activities following the same pattern...
  ],
};
