export type PortfolioLink = {
  label: string
  href: string
  description: string
}

export type TimelineItem = {
  year: string
  title: string
  org: string
  summary: string
}

export type SkillItem = {
  label: string
  description: string
}

export type WorkItem = {
  slug: string
  title: string
  category: string
  role: string
  year: string
  client: string
  summary: string
  challenge: string
  approach: string
  outcome: string
  credits: string
  tags: string[]
  image: string
}

export type VisualItem = {
  slug: string
  title: string
  alt: string
  summary: string
  image: string
}

export const profile = {
  name: 'Panusbodee Pisutsuwimon',
  shortName: 'Owen',
  title: 'Project Lead, UI Designer, Functional Thinker',
  avatar: undefined as string | undefined,
  intro:
    'I shape digital work with a calm visual language, structured thinking, and a strong bias toward clarity.',
  location: 'Bangkok, Thailand',
  availability: 'Available for selected collaborations and internships',
  statement:
    'A portfolio built around thoughtful systems, quiet visuals, and work that connects business structure with design sensitivity.',
  about: [
    'I work at the intersection of project management, UI design, and process thinking. My background lets me move comfortably between stakeholders, logic, and visual direction.',
    'What I care about most is making complexity feel simple. I like systems that are elegant, projects that run clearly, and interfaces that feel intentional rather than loud.',
  ],
  aboutLong: [
    'My path into PM, UI, and systems work started with an opportunity introduced through my university faculty. What began as a chance to try this direction turned into a way of working that fits how I think: structured, adaptable, and calm under complexity.',
    'I care about interfaces that feel intentional: clean hierarchy, disciplined spacing, and motion that supports comprehension, not distraction. I like work that turns loose ideas into something people can align around quickly.',
    'I can work across many kinds of problems and roles, especially when they require ownership, clarity, and coordination. The kind of work I avoid most is service-heavy work with little room to think, structure, or improve the system behind it.',
  ],
  principles: [
    'Clarity over noise',
    'Process before polish',
    'Visual restraint with strong point of view',
  ],
}

export const skills: SkillItem[] = [
  {
    label: 'Project ownership',
    description: 'Requirement framing, timelines, stakeholder alignment, and delivery rhythm.',
  },
  {
    label: 'Process-oriented design',
    description: 'From problem analysis to usable UI artifacts with clear rationale.',
  },
  {
    label: 'Systems thinking',
    description: 'Connecting business rules, constraints, and implementation details.',
  },
  {
    label: 'Execution under constraints',
    description: 'Balancing quality, scope, and time without losing clarity.',
  },
]

export const tools: string[] = [
  'Figma',
  'Notion',
  'Google Workspace',
  'Odoo (Functional Modules)',
  'Tailwind CSS',
  'Basic Python (learning)',
]

export const timeline: TimelineItem[] = [
  {
    year: '2025',
    title: 'Odoo Functional Consultant / ERP Implementer',
    org: 'Duckgrammer',
    summary:
      'Configured and implemented Odoo v18 modules across manufacturing, inventory, sales, purchase, and accounting with emphasis on real business logic.',
  },
  {
    year: '2025',
    title: 'Management Trainee',
    org: 'CP Axtra (Makro)',
    summary:
      'Rotational exposure to business operations, creative strategy, and business analysis inside a large retail ecosystem.',
  },
  {
    year: '2024',
    title: 'Process-Oriented UI Designer (Internship)',
    org: 'Creative Era Co., Ltd',
    summary:
      'Supported UX research, R&D, and UI work across multiple internal product contexts with a process-first mindset.',
  },
  {
    year: '2024',
    title: 'Lead Project / Thesis',
    org: 'Bangkok University',
    summary:
      'Led cross-functional student projects from requirement gathering to delivery, bridging technical logic and creative direction.',
  },
]

export const portfolioLinks: PortfolioLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/oowxnn_/',
    description: 'A more personal visual diary and daily references.',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/panusbodee-pisutsuwimon',
    description: 'Professional background, network, and current positioning.',
  },
  {
    label: 'Canva Portfolio',
    href: 'https://panusbodeepisu.my.canva.site/portfolio-panusbodee/#page-0',
    description: 'Extended slides and supplementary case study materials.',
  },
  {
    label: 'Drive Archive',
    href: 'https://drive.google.com/drive/folders/1L9tRLT79ZMutCEEOs2NRFjKQX60GzVHf?usp=sharing',
    description: 'Supporting documents, deliverables, and additional assets.',
  },
]

export const notes = [
  'Interested in financial markets, algorithmic systems, and precision under pressure.',
  'Drawn to high-end horology, fragrances, and carefully engineered products.',
  'Enjoy go-kart racing as a way to train focus, pace, and decision-making.',
]

export const works: WorkItem[] = [
  {
    slug: 'project-management',
    title: 'Lead Project (PM) / Project Management',
    category: 'Project Leadership',
    role: 'Lead Project Manager',
    year: '2024',
    client: 'Bangkok University / School of Engineer',
    summary:
      'Led a student team from planning to final delivery for Mulnua Carnival, aligning design, technical implementation, and academic milestones.',
    challenge:
      'The project required balancing multiple disciplines while keeping the team aligned around deadlines, ownership, and a shared execution standard.',
    approach:
      'Built a clear workflow for requirement gathering, task allocation, UI direction, and milestone reviews. Worked as the bridge between creative ambition and technical feasibility.',
    outcome:
      'Delivered the project on schedule with stronger team coordination, better communication, and a more coherent output across design and implementation.',
    credits: 'https://canva.link/s4eg3vo1odkqiom',
    tags: ['Leadership', 'Planning', 'Cross-functional'],
    image:
      'https://framerusercontent.com/images/dTRcdFRu3rTiJJGCQVUxodknYY.png?width=4032&height=3024',
  },
  {
    slug: 'ui-figma',
    title: 'Process-Oriented UI Designer (Internship)',
    category: 'UI / UX Design',
    role: 'UI Designer Intern',
    year: '2024',
    client: 'Creative Era Co., Ltd',
    summary:
      'Contributed to UX research, R&D, and interface design work across two connected business entities during internship projects.',
    challenge:
      'The work needed structured thinking across research, problem framing, and visual design, while adapting to different product contexts.',
    approach:
      'Supported discovery and interface work with a process-led mindset, translating insights into clearer user flows, interface directions, and usable design artifacts.',
    outcome:
      'Helped shape project outputs with stronger clarity between problem analysis and interface decisions, contributing to more grounded design work.',
    credits: 'https://bit.ly/4esKj1c',
    tags: ['UX Research', 'UI Systems', 'R&D'],
    image:
      'https://framerusercontent.com/images/DMd4e3XSoFOllgczwuohUpFay9Q.png?width=1812&height=962',
  },
  {
    slug: 'champ-silencieux',
    title: 'Odoo Functional Consultant / ERP Implementer',
    category: 'ERP / Systems',
    role: 'Functional Consultant',
    year: '2025',
    client: 'Duckgrammer',
    summary:
      'Worked on Odoo v18 implementation across manufacturing, inventory, purchase, sales, accounting, and reporting logic.',
    challenge:
      'The assignment involved complex operational and financial configurations, requiring precision across business rules, tax logic, stock valuation, and implementation planning.',
    approach:
      'Mapped real business needs into functional modules, coordinated technical requirements, and supported deployment decisions across multiple operational areas.',
    outcome:
      'Improved operational clarity for configuration and reporting while reinforcing the connection between technical architecture and business workflows.',
    credits: 'Owen Panusbodee',
    tags: ['Odoo', 'Business Logic', 'Implementation'],
    image:
      'https://framerusercontent.com/images/5WAAHq4ytW6RXbPs8TI785bqZ0.jpg?width=1206&height=728',
  },
  {
    slug: 'lead-projects',
    title: 'Lead Project Thesis',
    category: 'Thesis / Strategy',
    role: 'Project Lead',
    year: '2024',
    client: 'Bangkok University',
    summary:
      'Owned the graduation thesis process end-to-end, from concept framing and requirements to final delivery across a cross-functional team.',
    challenge:
      'The thesis demanded both strategic direction and execution discipline, with multiple contributors, evolving requirements, and high academic expectations.',
    approach:
      'Handled requirement gathering, logic mapping, system framing, and collaborative planning while keeping the project narrative and execution aligned.',
    outcome:
      'Delivered a more coherent thesis direction and a clearer bridge between conceptual ideas, technical structure, and team output.',
    credits: 'https://canva.link/bllfumarx98vdp5',
    tags: ['Thesis', 'Systems Thinking', 'Ownership'],
    image:
      'https://framerusercontent.com/images/Dqr2YnHI6r4j8p1PLXWSjfzED0c.jpg?width=3072&height=2048',
  },
  {
    slug: 'lisiere',
    title: 'Management Trainee',
    category: 'Business Rotation',
    role: 'Management Trainee',
    year: '2025',
    client: 'CP Axtra (Makro)',
    summary:
      'Joined a rotational program spanning business operations, creative strategy, and analysis within a large retail environment.',
    challenge:
      'The rotation required quick learning across diverse business contexts while understanding how strategic decisions connect to daily operations.',
    approach:
      'Observed, documented, and synthesized operational patterns to sharpen business judgment and connect analytical thinking with real-world execution.',
    outcome:
      'Strengthened adaptability, business literacy, and a broader understanding of how structured management decisions influence large-scale organizations.',
    credits: 'Owen Panusbodee',
    tags: ['Operations', 'Strategy', 'Business Analysis'],
    image:
      'https://framerusercontent.com/images/DPEBT6GZbJzOBXeMUlOh100tXcA.png?width=4032&height=3024',
  },
]

export const featuredSlugs = works.map((work) => work.slug)

export const getWorkBySlug = (slug: string) =>
  works.find((work) => work.slug === slug)

export const homeVisuals: VisualItem[] = [
  {
    slug: 'field-pass',
    title: 'Original Portfolio Frame',
    alt: 'Legacy project image from the original Framer portfolio',
    summary:
      'Pulled directly from the previous portfolio, this frame keeps the site connected to the visual history of your earlier work.',
    image:
      'https://framerusercontent.com/images/KUv0t49lXtGxglTIPzqCeZlE.png?width=3024&height=4032',
  },
  {
    slug: 'market-screen',
    title: 'Markets & Precision',
    alt: 'Legacy trading and analytical visual from the original Framer portfolio',
    summary:
      'This visual keeps the financial and analytical side of your interests present in the portfolio without breaking the monochrome direction.',
    image:
      'https://framerusercontent.com/images/X5yLIV8CfWCaglpsDJ6Af0zohn8.png?width=2268&height=4032',
  },
  {
    slug: 'portrait-mark',
    title: 'Personal Mark',
    alt: 'Legacy identity image from the original Framer portfolio',
    summary:
      'A softer personal layer from the earlier site, now treated as a quiet identity card within the new black-and-white system.',
    image:
      'https://framerusercontent.com/images/pt6lpnlvb0QcaqSil4YarNSH588.png?width=1320&height=1320',
  },
]

export const aboutVisuals: VisualItem[] = [
  {
    slug: 'whiteboard-flow',
    title: 'Process Mapping',
    alt: 'Legacy process image from the original Framer portfolio',
    summary:
      'Used to support the story about structure and logic, this image comes from the earlier case-study material in the original site.',
    image:
      'https://framerusercontent.com/images/PUTFCZcvk28d06MRsykiyBdll5w.png?width=2778&height=1284',
  },
  {
    slug: 'terminal-tools',
    title: 'Technical Curiosity',
    alt: 'Legacy technical and interface image from the original Framer portfolio',
    summary:
      'This image keeps the technical layer visible and ties the About page back to the original case studies from the older portfolio.',
    image:
      'https://framerusercontent.com/images/IBZii1CXkqb7P48GTVXHYSMytE.png?width=1746&height=716',
  },
]
