export type PortfolioLink = {
  label: string
  href: string
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

type ImageSize =
  | 'square_hd'
  | 'square'
  | 'portrait_4_3'
  | 'portrait_16_9'
  | 'landscape_4_3'
  | 'landscape_16_9'

const createImage = (prompt: string, imageSize: ImageSize) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${imageSize}`

export const profile = {
  name: 'Panusbodee Pisutsuwimon',
  shortName: 'Owen',
  title: 'Project Lead, UI Designer, Functional Thinker',
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
  principles: [
    'Clarity over noise',
    'Process before polish',
    'Visual restraint with strong point of view',
  ],
}

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
    image: createImage(
      'luxury editorial portfolio image of a calm project lead reviewing interface wireframes and timeline sheets on a large desk, warm ivory paper, bronze accents, soft directional light, premium magazine photography, refined minimalism',
      'landscape_16_9',
    ),
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
    image: createImage(
      'editorial technology still life showing elegant figma-like interface layouts, paper notes, refined neutral palette, soft grain texture, premium design studio atmosphere, claude-inspired calm minimalism',
      'portrait_4_3',
    ),
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
    image: createImage(
      'refined dashboard composition with inventory flows, accounting ledgers, and manufacturing diagrams arranged like a premium annual report, ivory and graphite palette, intelligent system design aesthetic',
      'landscape_16_9',
    ),
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
    image: createImage(
      'quiet luxury academic project presentation scene, thesis boards, interface diagrams, polished black and ivory materials, sophisticated editorial photography, calm composition',
      'portrait_16_9',
    ),
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
    image: createImage(
      'premium retail strategy editorial image with clean product grids, analytical notes, and executive briefing materials, muted champagne and charcoal palette, refined contemporary layout',
      'landscape_4_3',
    ),
  },
]

export const featuredSlugs = works.map((work) => work.slug)

export const getWorkBySlug = (slug: string) =>
  works.find((work) => work.slug === slug)
