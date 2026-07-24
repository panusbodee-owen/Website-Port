export type Language = 'en' | 'th'

export type LocalizedText = {
  en: string
  th: string
}

export type PortfolioLink = {
  label: LocalizedText
  href: string
  description: LocalizedText
}

export type TimelineItem = {
  year: string
  title: LocalizedText
  org: LocalizedText
  summary: LocalizedText
}

export type SkillItem = {
  label: LocalizedText
  description: LocalizedText
}

export type WorkItem = {
  slug: string
  title: LocalizedText
  category: LocalizedText
  role: LocalizedText
  year: string
  client: LocalizedText
  summary: LocalizedText
  challenge: LocalizedText
  approach: LocalizedText
  outcome: LocalizedText
  credits: string
  tags: LocalizedText[]
  image: string
}

export type VisualItem = {
  slug: string
  title: LocalizedText
  alt: LocalizedText
  summary: LocalizedText
  image: string
}

export type Profile = {
  name: string
  shortName: string
  title: LocalizedText
  avatar: string | undefined
  intro: LocalizedText
  location: LocalizedText
  availability: LocalizedText
  statement: LocalizedText
  about: LocalizedText[]
  aboutLong: LocalizedText[]
  principles: LocalizedText[]
}

export type UIContent = {
  nav: {
    brand: string
    items: Array<{ label: string; to: string }>
    startConversation: string
    mobileWorks: string
    languages: {
      english: string
      thai: string
    }
  }
  home: {
    badge: string
    ctaWorks: string
    ctaAbout: string
    ctaLinkedIn: string
    currentFocus: string
    currentFocusTitle: string
    aboutEyebrow: string
    aboutTitle: string
    aboutDescription: string
    positioning: string
    availability: string
    perspective: string
    perspectiveText: string
    moreCase: string
    visualArchiveEyebrow: string
    visualArchiveTitle: string
    visualArchiveDescription: string
    notesEyebrow: string
    notesTitle: string
    notesDescription: string
    contactEyebrow: string
    contactTitle: string
    contactDescription: string
    principles: string
  }
  aboutPage: {
    eyebrow: string
    title: string
    description: string
    summary: string
    summaryLead: string
    summaryOrigin: string
    principles: string
    storyTitle: string
    processTitle: string
    processDescription: string
    timelineTitle: string
    skillsTitle: string
    backHome: string
  }
  workDetail: {
    backHome: string
    caseStudy: string
    scrollCue: string
    role: string
    client: string
    year: string
    challenge: string
    approach: string
    outcome: string
    projectTags: string
    openCredits: string
    credits: string
    previousProject: string
    nextProject: string
  }
  common: {
    viewCase: string
  }
}

export type PortfolioContent = {
  profile: Profile
  skills: SkillItem[]
  tools: LocalizedText[]
  timeline: TimelineItem[]
  portfolioLinks: PortfolioLink[]
  notes: LocalizedText[]
  works: WorkItem[]
  homeVisuals: VisualItem[]
  aboutVisuals: VisualItem[]
  ui: UIContent
}

export const profile: Profile = {
  name: 'Panusbodee Pisutsuwimon',
  shortName: 'Owen',
  title: {
    en: 'Project Lead, UI Designer, Functional Thinker',
    th: 'ผู้นำโปรเจกต์, นักออกแบบ UI, และคนที่คิดเชิงระบบ',
  },
  avatar: undefined,
  intro: {
    en: 'I shape digital work with a calm visual language, structured thinking, and a strong bias toward clarity.',
    th: 'ผมออกแบบงานดิจิทัลด้วยภาษาภาพที่นิ่ง ชัดเจน และการคิดอย่างเป็นระบบเพื่อให้ทุกอย่างเข้าใจง่ายขึ้น',
  },
  location: {
    en: 'Bangkok, Thailand',
    th: 'กรุงเทพมหานคร ประเทศไทย',
  },
  availability: {
    en: 'Available for selected collaborations and internships',
    th: 'เปิดรับโอกาสร่วมงานและฝึกงานในบางโปรเจกต์ที่เหมาะสม',
  },
  statement: {
    en: 'A portfolio built around thoughtful systems, quiet visuals, and work that connects business structure with design sensitivity.',
    th: 'พอร์ตโฟลิโอที่รวมงานซึ่งเชื่อมโครงสร้างธุรกิจ ความคิดเชิงระบบ และงานออกแบบที่มีความละเอียดอ่อนเข้าด้วยกัน',
  },
  about: [
    {
      en: 'I work at the intersection of project management, UI design, and process thinking. My background lets me move comfortably between stakeholders, logic, and visual direction.',
      th: 'ผมทำงานอยู่ตรงจุดตัดระหว่าง project management, UI design และ process thinking ทำให้สามารถเชื่อมคน ความต้องการ และทิศทางของงานได้พร้อมกัน',
    },
    {
      en: 'What I care about most is making complexity feel simple. I like systems that are elegant, projects that run clearly, and interfaces that feel intentional rather than loud.',
      th: 'สิ่งที่ผมให้ความสำคัญที่สุดคือการทำให้เรื่องที่ซับซ้อนกลายเป็นสิ่งที่เข้าใจง่าย ผมชอบระบบที่เรียบแต่เฉียบ โปรเจกต์ที่เดินชัด และอินเทอร์เฟซที่มีเหตุผลในตัวเอง',
    },
  ],
  aboutLong: [
    {
      en: 'My path into PM, UI, and systems work started with an opportunity introduced through my university faculty. What began as a chance to try this direction turned into a way of working that fits how I think: structured, adaptable, and calm under complexity.',
      th: 'จุดเริ่มต้นที่ทำให้ผมเข้ามาในสาย PM, UI และ systems มาจากโอกาสที่อาจารย์ในมหาวิทยาลัยแนะนำให้ลองทำงานด้านนี้ จากจุดเริ่มต้นเล็ก ๆ มันค่อย ๆ กลายเป็นวิธีการทำงานที่เข้ากับตัวผมมาก ทั้งเป็นระบบ ยืดหยุ่น และนิ่งพอจะรับมือกับความซับซ้อนได้',
    },
    {
      en: 'I care about interfaces that feel intentional: clean hierarchy, disciplined spacing, and motion that supports comprehension, not distraction. I like work that turns loose ideas into something people can align around quickly.',
      th: 'ผมให้คุณค่ากับอินเทอร์เฟซที่มีความตั้งใจอยู่ในรายละเอียด ทั้งลำดับชั้นที่ชัด ช่องไฟที่มีวินัย และ motion ที่ช่วยให้เข้าใจง่ายขึ้น ไม่ใช่เพิ่มความฟุ้ง ผมชอบงานที่เอาไอเดียที่ยังหลวมอยู่มาทำให้คนเห็นภาพร่วมกันได้เร็ว',
    },
    {
      en: 'I can work across many kinds of problems and roles, especially when they require ownership, clarity, and coordination. The kind of work I avoid most is service-heavy work with little room to think, structure, or improve the system behind it.',
      th: 'ผมทำงานได้กับหลายบทบาทและหลายโจทย์ โดยเฉพาะงานที่ต้องการ ownership, clarity และการประสานงานที่ดี งานที่ผมไม่ค่อยถนัดคือสายบริการที่แทบไม่มีพื้นที่ให้คิด วางระบบ หรือปรับปรุงสิ่งที่อยู่เบื้องหลัง',
    },
  ],
  principles: [
    { en: 'Clarity over noise', th: 'ความชัดเจนมาก่อนความเยอะ' },
    { en: 'Process before polish', th: 'กระบวนการมาก่อนการขัดเงา' },
    { en: 'Visual restraint with strong point of view', th: 'เรียบแต่มีจุดยืนชัดเจน' },
  ],
}

export const skills: SkillItem[] = [
  {
    label: { en: 'Project ownership', th: 'การดูแลโปรเจกต์แบบ end-to-end' },
    description: {
      en: 'Requirement framing, timelines, stakeholder alignment, and delivery rhythm.',
      th: 'ตั้งโจทย์ วาง timeline ประสาน stakeholder และคุมจังหวะการส่งมอบงาน',
    },
  },
  {
    label: { en: 'Process-oriented design', th: 'การออกแบบที่ขับเคลื่อนด้วยกระบวนการ' },
    description: {
      en: 'From problem analysis to usable UI artifacts with clear rationale.',
      th: 'ตั้งแต่การวิเคราะห์ปัญหาไปจนถึงงาน UI ที่ใช้งานได้จริงและอธิบายเหตุผลได้',
    },
  },
  {
    label: { en: 'Systems thinking', th: 'การคิดเชิงระบบ' },
    description: {
      en: 'Connecting business rules, constraints, and implementation details.',
      th: 'เชื่อมกติกาทางธุรกิจ ข้อจำกัด และรายละเอียดของการลงมือทำเข้าด้วยกัน',
    },
  },
  {
    label: { en: 'Execution under constraints', th: 'การทำงานภายใต้ข้อจำกัด' },
    description: {
      en: 'Balancing quality, scope, and time without losing clarity.',
      th: 'บาลานซ์คุณภาพ ขอบเขต และเวลา โดยยังรักษาความชัดเจนของงานไว้ได้',
    },
  },
]

export const tools: LocalizedText[] = [
  { en: 'Figma', th: 'Figma' },
  { en: 'Notion', th: 'Notion' },
  { en: 'Google Workspace', th: 'Google Workspace' },
  { en: 'Odoo (Functional Modules)', th: 'Odoo (Functional Modules)' },
  { en: 'Tailwind CSS', th: 'Tailwind CSS' },
  { en: 'Basic Python (learning)', th: 'Python พื้นฐาน (กำลังเรียนรู้)' },
]

export const timeline: TimelineItem[] = [
  {
    year: '2025',
    title: {
      en: 'Odoo Functional Consultant / ERP Implementer',
      th: 'Odoo Functional Consultant / ERP Implementer',
    },
    org: { en: 'Duckgrammer', th: 'Duckgrammer' },
    summary: {
      en: 'Configured and implemented Odoo v18 modules across manufacturing, inventory, sales, purchase, and accounting with emphasis on real business logic.',
      th: 'ตั้งค่าและวางระบบ Odoo v18 ครอบคลุม manufacturing, inventory, sales, purchase และ accounting โดยเน้นการทำงานตาม business logic จริง',
    },
  },
  {
    year: '2025',
    title: { en: 'Management Trainee', th: 'Management Trainee' },
    org: { en: 'CP Axtra (Makro)', th: 'CP Axtra (Makro)' },
    summary: {
      en: 'Rotational exposure to business operations, creative strategy, and business analysis inside a large retail ecosystem.',
      th: 'ได้เรียนรู้การทำงานผ่าน rotation ในด้าน business operations, creative strategy และ business analysis ภายในระบบค้าปลีกขนาดใหญ่',
    },
  },
  {
    year: '2024',
    title: {
      en: 'Process-Oriented UI Designer (Internship)',
      th: 'Process-Oriented UI Designer (Internship)',
    },
    org: { en: 'Creative Era Co., Ltd', th: 'Creative Era Co., Ltd' },
    summary: {
      en: 'Supported UX research, R&D, and UI work across multiple internal product contexts with a process-first mindset.',
      th: 'สนับสนุนงาน UX research, R&D และ UI ในหลายบริบทของผลิตภัณฑ์ภายในองค์กรด้วยแนวคิดที่ให้ความสำคัญกับ process เป็นหลัก',
    },
  },
  {
    year: '2024',
    title: { en: 'Lead Project / Thesis', th: 'Lead Project / Thesis' },
    org: { en: 'Bangkok University', th: 'Bangkok University' },
    summary: {
      en: 'Led cross-functional student projects from requirement gathering to delivery, bridging technical logic and creative direction.',
      th: 'นำโปรเจกต์นักศึกษาที่ต้องทำงานข้ามสาย ตั้งแต่เก็บ requirement จนส่งมอบ พร้อมเชื่อม logic ทางเทคนิคกับทิศทางเชิงสร้างสรรค์',
    },
  },
]

export const portfolioLinks: PortfolioLink[] = [
  {
    label: { en: 'Instagram', th: 'Instagram' },
    href: 'https://www.instagram.com/oowxnn_/',
    description: {
      en: 'A more personal visual diary and daily references.',
      th: 'พื้นที่ที่สะท้อนตัวตน มุมมอง และ visual references ในชีวิตประจำวัน',
    },
  },
  {
    label: { en: 'LinkedIn', th: 'LinkedIn' },
    href: 'https://www.linkedin.com/in/panusbodee-pisutsuwimon',
    description: {
      en: 'Professional background, network, and current positioning.',
      th: 'ประสบการณ์การทำงาน เครือข่าย และตำแหน่งทางอาชีพในปัจจุบัน',
    },
  },
  {
    label: { en: 'Canva Portfolio', th: 'Canva Portfolio' },
    href: 'https://panusbodeepisu.my.canva.site/portfolio-panusbodee/#page-0',
    description: {
      en: 'Extended slides and supplementary case study materials.',
      th: 'สไลด์และเอกสารเสริมสำหรับดูรายละเอียดงานเพิ่มเติม',
    },
  },
  {
    label: { en: 'Drive Archive', th: 'Drive Archive' },
    href: 'https://drive.google.com/drive/folders/1L9tRLT79ZMutCEEOs2NRFjKQX60GzVHf?usp=sharing',
    description: {
      en: 'Supporting documents, deliverables, and additional assets.',
      th: 'เอกสารประกอบ deliverables และไฟล์เพิ่มเติมที่เกี่ยวข้อง',
    },
  },
]

export const notes: LocalizedText[] = [
  {
    en: 'Interested in financial markets, algorithmic systems, and precision under pressure.',
    th: 'สนใจตลาดการเงิน ระบบเชิงอัลกอริทึม และสภาพแวดล้อมที่ต้องการความแม่นยำภายใต้แรงกดดัน',
  },
  {
    en: 'Drawn to high-end horology, fragrances, and carefully engineered products.',
    th: 'ชื่นชอบนาฬิกา น้ำหอม และผลิตภัณฑ์ที่ถูกออกแบบอย่างพิถีพิถัน',
  },
  {
    en: 'Enjoy go-kart racing as a way to train focus, pace, and decision-making.',
    th: 'ชอบขับโกคาร์ทเพราะช่วยฝึกสมาธิ จังหวะ และการตัดสินใจ',
  },
]

export const works: WorkItem[] = [
  {
    slug: 'project-management',
    title: {
      en: 'Lead Project (PM) / Project Management',
      th: 'Lead Project (PM) / Project Management',
    },
    category: { en: 'Project Leadership', th: 'ภาวะผู้นำโปรเจกต์' },
    role: { en: 'Lead Project Manager', th: 'หัวหน้าโปรเจกต์' },
    year: '2024',
    client: {
      en: 'Bangkok University / School of Engineer',
      th: 'Bangkok University / School of Engineer',
    },
    summary: {
      en: 'Led a student team from planning to final delivery for Mulnua Carnival, aligning design, technical implementation, and academic milestones.',
      th: 'นำทีมโปรเจกต์นักศึกษาตั้งแต่การวางแผนจนถึงการส่งมอบสำหรับ Mulnua Carnival โดยเชื่อมงานออกแบบ การพัฒนา และ milestone ทางวิชาการให้เดินไปพร้อมกัน',
    },
    challenge: {
      en: 'The project required balancing multiple disciplines while keeping the team aligned around deadlines, ownership, and a shared execution standard.',
      th: 'โปรเจกต์นี้ต้องบาลานซ์หลายสายงานในเวลาเดียวกัน และยังต้องทำให้ทีมเห็นภาพตรงกันเรื่อง deadline ความรับผิดชอบ และมาตรฐานการทำงาน',
    },
    approach: {
      en: 'Built a clear workflow for requirement gathering, task allocation, UI direction, and milestone reviews. Worked as the bridge between creative ambition and technical feasibility.',
      th: 'วาง workflow ให้ชัดตั้งแต่การเก็บ requirement การกระจายงาน ทิศทางของ UI ไปจนถึง milestone review และทำหน้าที่เป็นตัวกลางระหว่างความคิดเชิงสร้างสรรค์กับความเป็นไปได้ทางเทคนิค',
    },
    outcome: {
      en: 'Delivered the project on schedule with stronger team coordination, better communication, and a more coherent output across design and implementation.',
      th: 'ส่งมอบโปรเจกต์ได้ตามเวลา พร้อมยกระดับการประสานงาน การสื่อสาร และความกลมกลืนของงานทั้งฝั่ง design และ implementation',
    },
    credits: 'https://canva.link/s4eg3vo1odkqiom',
    tags: [
      { en: 'Leadership', th: 'Leadership' },
      { en: 'Planning', th: 'Planning' },
      { en: 'Cross-functional', th: 'Cross-functional' },
    ],
    image:
      'https://framerusercontent.com/images/dTRcdFRu3rTiJJGCQVUxodknYY.png?width=4032&height=3024',
  },
  {
    slug: 'ui-figma',
    title: {
      en: 'Process-Oriented UI Designer (Internship)',
      th: 'Process-Oriented UI Designer (Internship)',
    },
    category: { en: 'UI / UX Design', th: 'UI / UX Design' },
    role: { en: 'UI Designer Intern', th: 'UI Designer Intern' },
    year: '2024',
    client: { en: 'Creative Era Co., Ltd', th: 'Creative Era Co., Ltd' },
    summary: {
      en: 'Contributed to UX research, R&D, and interface design work across two connected business entities during internship projects.',
      th: 'มีส่วนร่วมในงาน UX research, R&D และงานออกแบบ interface ในช่วงฝึกงาน ครอบคลุมบริบทธุรกิจที่เชื่อมกันสองส่วน',
    },
    challenge: {
      en: 'The work needed structured thinking across research, problem framing, and visual design, while adapting to different product contexts.',
      th: 'งานนี้ต้องใช้การคิดอย่างเป็นระบบทั้งในส่วน research การตั้งโจทย์ และการออกแบบ visual พร้อมกับปรับตัวตามบริบทของแต่ละผลิตภัณฑ์',
    },
    approach: {
      en: 'Supported discovery and interface work with a process-led mindset, translating insights into clearer user flows, interface directions, and usable design artifacts.',
      th: 'สนับสนุนงาน discovery และ interface ด้วยวิธีคิดที่ยึด process เป็นหลัก และแปลง insight ให้ออกมาเป็น user flow, visual direction และ design artifacts ที่ใช้งานได้จริง',
    },
    outcome: {
      en: 'Helped shape project outputs with stronger clarity between problem analysis and interface decisions, contributing to more grounded design work.',
      th: 'ช่วยให้ผลลัพธ์ของโปรเจกต์ชัดขึ้น ทั้งในด้านการวิเคราะห์ปัญหาและการตัดสินใจด้าน interface ทำให้งานออกแบบมีเหตุผลและมั่นคงมากขึ้น',
    },
    credits: 'https://bit.ly/4esKj1c',
    tags: [
      { en: 'UX Research', th: 'UX Research' },
      { en: 'UI Systems', th: 'UI Systems' },
      { en: 'R&D', th: 'R&D' },
    ],
    image:
      'https://framerusercontent.com/images/DMd4e3XSoFOllgczwuohUpFay9Q.png?width=1812&height=962',
  },
  {
    slug: 'champ-silencieux',
    title: {
      en: 'Odoo Functional Consultant / ERP Implementer',
      th: 'Odoo Functional Consultant / ERP Implementer',
    },
    category: { en: 'ERP / Systems', th: 'ERP / Systems' },
    role: { en: 'Functional Consultant', th: 'Functional Consultant' },
    year: '2025',
    client: { en: 'Duckgrammer', th: 'Duckgrammer' },
    summary: {
      en: 'Worked on Odoo v18 implementation across manufacturing, inventory, purchase, sales, accounting, and reporting logic.',
      th: 'ทำงานด้าน implementation ของ Odoo v18 ครอบคลุม manufacturing, inventory, purchase, sales, accounting และ reporting logic',
    },
    challenge: {
      en: 'The assignment involved complex operational and financial configurations, requiring precision across business rules, tax logic, stock valuation, and implementation planning.',
      th: 'งานนี้มีความซับซ้อนทั้งฝั่ง operation และการเงิน จึงต้องละเอียดกับ business rules, tax logic, stock valuation และแผนการลงระบบ',
    },
    approach: {
      en: 'Mapped real business needs into functional modules, coordinated technical requirements, and supported deployment decisions across multiple operational areas.',
      th: 'แปลงความต้องการจริงของธุรกิจให้อยู่ในรูป functional modules ประสาน requirement ทางเทคนิค และช่วยตัดสินใจเรื่อง deployment ในหลายส่วนงาน',
    },
    outcome: {
      en: 'Improved operational clarity for configuration and reporting while reinforcing the connection between technical architecture and business workflows.',
      th: 'ช่วยให้การตั้งค่าและการทำรายงานชัดเจนขึ้น และทำให้ความสัมพันธ์ระหว่าง technical architecture กับ workflow ทางธุรกิจแน่นขึ้น',
    },
    credits: 'Owen Panusbodee',
    tags: [
      { en: 'Odoo', th: 'Odoo' },
      { en: 'Business Logic', th: 'Business Logic' },
      { en: 'Implementation', th: 'Implementation' },
    ],
    image:
      'https://framerusercontent.com/images/5WAAHq4ytW6RXbPs8TI785bqZ0.jpg?width=1206&height=728',
  },
  {
    slug: 'lead-projects',
    title: { en: 'Lead Project Thesis', th: 'Lead Project Thesis' },
    category: { en: 'Thesis / Strategy', th: 'Thesis / Strategy' },
    role: { en: 'Project Lead', th: 'Project Lead' },
    year: '2024',
    client: { en: 'Bangkok University', th: 'Bangkok University' },
    summary: {
      en: 'Owned the graduation thesis process end-to-end, from concept framing and requirements to final delivery across a cross-functional team.',
      th: 'ดูแลกระบวนการทำ graduation thesis แบบ end-to-end ตั้งแต่การวาง concept เก็บ requirement จนถึงการส่งมอบงานร่วมกับทีมข้ามสาย',
    },
    challenge: {
      en: 'The thesis demanded both strategic direction and execution discipline, with multiple contributors, evolving requirements, and high academic expectations.',
      th: 'ธีสิสนี้ต้องการทั้งทิศทางเชิงกลยุทธ์และวินัยในการลงมือทำ พร้อมรับมือกับผู้มีส่วนร่วมหลายคน requirement ที่เปลี่ยนตลอด และความคาดหวังทางวิชาการที่สูง',
    },
    approach: {
      en: 'Handled requirement gathering, logic mapping, system framing, and collaborative planning while keeping the project narrative and execution aligned.',
      th: 'ดูแลการเก็บ requirement การ map logic การวางกรอบระบบ และ collaborative planning โดยรักษาให้ narrative กับ execution เดินไปทิศเดียวกัน',
    },
    outcome: {
      en: 'Delivered a more coherent thesis direction and a clearer bridge between conceptual ideas, technical structure, and team output.',
      th: 'ทำให้ทิศทางของธีสิสมีความชัดขึ้น และเชื่อมแนวคิดกับโครงสร้างทางเทคนิคและผลลัพธ์ของทีมได้ดีขึ้น',
    },
    credits: 'https://canva.link/bllfumarx98vdp5',
    tags: [
      { en: 'Thesis', th: 'Thesis' },
      { en: 'Systems Thinking', th: 'Systems Thinking' },
      { en: 'Ownership', th: 'Ownership' },
    ],
    image:
      'https://framerusercontent.com/images/Dqr2YnHI6r4j8p1PLXWSjfzED0c.jpg?width=3072&height=2048',
  },
  {
    slug: 'lisiere',
    title: { en: 'Management Trainee', th: 'Management Trainee' },
    category: { en: 'Business Rotation', th: 'Business Rotation' },
    role: { en: 'Management Trainee', th: 'Management Trainee' },
    year: '2025',
    client: { en: 'CP Axtra (Makro)', th: 'CP Axtra (Makro)' },
    summary: {
      en: 'Joined a rotational program spanning business operations, creative strategy, and analysis within a large retail environment.',
      th: 'เข้าร่วมโปรแกรม rotation ที่ครอบคลุม business operations, creative strategy และงานวิเคราะห์ภายในสภาพแวดล้อมค้าปลีกขนาดใหญ่',
    },
    challenge: {
      en: 'The rotation required quick learning across diverse business contexts while understanding how strategic decisions connect to daily operations.',
      th: 'rotation นี้ต้องเรียนรู้เร็วในหลายบริบทธุรกิจ และต้องเข้าใจว่าการตัดสินใจเชิงกลยุทธ์เชื่อมกับงานปฏิบัติการประจำวันอย่างไร',
    },
    approach: {
      en: 'Observed, documented, and synthesized operational patterns to sharpen business judgment and connect analytical thinking with real-world execution.',
      th: 'สังเกต บันทึก และสรุปรูปแบบการทำงานของหน้างาน เพื่อพัฒนามุมมองทางธุรกิจและเชื่อมการคิดเชิงวิเคราะห์เข้ากับการทำงานจริง',
    },
    outcome: {
      en: 'Strengthened adaptability, business literacy, and a broader understanding of how structured management decisions influence large-scale organizations.',
      th: 'ช่วยให้มีความยืดหยุ่น ความเข้าใจธุรกิจ และมุมมองที่กว้างขึ้นต่อผลของการตัดสินใจเชิงการจัดการในองค์กรขนาดใหญ่',
    },
    credits: 'Owen Panusbodee',
    tags: [
      { en: 'Operations', th: 'Operations' },
      { en: 'Strategy', th: 'Strategy' },
      { en: 'Business Analysis', th: 'Business Analysis' },
    ],
    image:
      'https://framerusercontent.com/images/DPEBT6GZbJzOBXeMUlOh100tXcA.png?width=4032&height=3024',
  },
]

export const featuredSlugs = works.map((work) => work.slug)

export const homeVisuals: VisualItem[] = [
  {
    slug: 'field-pass',
    title: {
      en: 'Original Portfolio Frame',
      th: 'ภาพจากพอร์ตโฟลิโอเดิม',
    },
    alt: {
      en: 'Legacy project image from the original Framer portfolio',
      th: 'ภาพจากพอร์ต Framer เวอร์ชันเดิม',
    },
    summary: {
      en: 'Pulled directly from the previous portfolio, this frame keeps the site connected to the visual history of your earlier work.',
      th: 'ภาพนี้ดึงตรงมาจากพอร์ตเวอร์ชันก่อนหน้า เพื่อคงความต่อเนื่องของประวัติและบรรยากาศงานของคุณ',
    },
    image:
      'https://framerusercontent.com/images/KUv0t49lXtGxglTIPzqCeZlE.png?width=3024&height=4032',
  },
  {
    slug: 'market-screen',
    title: {
      en: 'Markets & Precision',
      th: 'ตลาดและความแม่นยำ',
    },
    alt: {
      en: 'Legacy trading and analytical visual from the original Framer portfolio',
      th: 'ภาพจากพอร์ตเดิมที่สะท้อนความสนใจด้านตลาดและการวิเคราะห์',
    },
    summary: {
      en: 'This visual keeps the financial and analytical side of your interests present in the portfolio without breaking the monochrome direction.',
      th: 'ภาพนี้ทำให้มิติด้านตลาดการเงินและการคิดเชิงวิเคราะห์ยังอยู่ในพอร์ต โดยไม่ทำลายทิศทางภาพรวมของเว็บไซต์',
    },
    image:
      'https://framerusercontent.com/images/X5yLIV8CfWCaglpsDJ6Af0zohn8.png?width=2268&height=4032',
  },
  {
    slug: 'portrait-mark',
    title: { en: 'Personal Mark', th: 'ตัวตนของผม' },
    alt: {
      en: 'Legacy identity image from the original Framer portfolio',
      th: 'ภาพตัวตนจากพอร์ต Framer เดิม',
    },
    summary: {
      en: 'A softer personal layer from the earlier site, now treated as a quiet identity card within the new black-and-white system.',
      th: 'เป็นภาพที่สะท้อนความเป็นตัวตนจากเว็บไซต์เดิม และถูกนำมาใช้เป็นเหมือน identity card ของเว็บเวอร์ชันนี้',
    },
    image:
      'https://framerusercontent.com/images/pt6lpnlvb0QcaqSil4YarNSH588.png?width=1320&height=1320',
  },
]

export const aboutVisuals: VisualItem[] = [
  {
    slug: 'whiteboard-flow',
    title: { en: 'Process Mapping', th: 'การวางแผนกระบวนการ' },
    alt: {
      en: 'Legacy process image from the original Framer portfolio',
      th: 'ภาพเกี่ยวกับ process จากพอร์ต Framer เดิม',
    },
    summary: {
      en: 'Used to support the story about structure and logic, this image comes from the earlier case-study material in the original site.',
      th: 'ใช้เป็นภาพสนับสนุนเรื่องการคิดเชิงโครงสร้างและ logic โดยดึงมาจาก case study ในเว็บไซต์เวอร์ชันเดิม',
    },
    image:
      'https://framerusercontent.com/images/PUTFCZcvk28d06MRsykiyBdll5w.png?width=2778&height=1284',
  },
  {
    slug: 'terminal-tools',
    title: { en: 'Technical Curiosity', th: 'ความสนใจด้านเทคนิค' },
    alt: {
      en: 'Legacy technical and interface image from the original Framer portfolio',
      th: 'ภาพด้านเทคนิคและ interface จากพอร์ต Framer เดิม',
    },
    summary: {
      en: 'This image keeps the technical layer visible and ties the About page back to the original case studies from the older portfolio.',
      th: 'ภาพนี้ช่วยให้หน้่า About ยังมีชั้นของความเป็นเทคนิคอยู่ และเชื่อมโยงกลับไปยัง case studies จากพอร์ตเดิม',
    },
    image:
      'https://framerusercontent.com/images/IBZii1CXkqb7P48GTVXHYSMytE.png?width=1746&height=716',
  },
]

export const portfolioUi: UIContent = {
  nav: {
    brand: 'Panusbodee',
    items: [
      { label: 'Selected Works', to: '/?section=works' },
      { label: 'About', to: '/about' },
      { label: 'Notes', to: '/?section=notes' },
      { label: 'Contact', to: '/?section=contact' },
    ],
    startConversation: 'Start a conversation',
    mobileWorks: 'Works',
    languages: {
      english: 'English',
      thai: 'Thai',
    },
  },
  home: {
    badge: 'Portfolio 2026',
    ctaWorks: 'Explore selected work',
    ctaAbout: 'About me',
    ctaLinkedIn: 'Open LinkedIn',
    currentFocus: 'Current focus',
    currentFocusTitle: 'Calm interfaces. Structured execution. Clear thinking.',
    aboutEyebrow: 'About',
    aboutTitle: 'Bridging structure and taste.',
    aboutDescription:
      'A portfolio for work that lives between strategy, design systems, and project ownership.',
    positioning: 'Positioning',
    availability: 'Availability',
    perspective: 'Perspective',
    perspectiveText: 'Design should feel quiet, deliberate, and useful.',
    moreCase: 'View one more case',
    visualArchiveEyebrow: 'Visual Archive',
    visualArchiveTitle: 'Visual archive for work in motion.',
    visualArchiveDescription:
      'A quieter image layer for this portfolio, matched to the way I move between field work, systems, and a more personal visual mark.',
    notesEyebrow: 'Notes',
    notesTitle: 'Things I keep close to the way I work.',
    notesDescription:
      'Outside core projects, I stay interested in disciplines that reward precision, discipline, and sensitivity to detail.',
    contactEyebrow: 'Contact',
    contactTitle: 'Open for conversations with substance.',
    contactDescription:
      'If the work involves thoughtful execution, design sensitivity, or a need to bring structure to complexity, I would love to hear about it.',
    principles: 'Principles',
  },
  aboutPage: {
    eyebrow: 'About',
    title: 'The story behind the work.',
    description:
      'I work where project structure, calm visual design, and systems thinking meet—so complexity becomes something people can actually move with.',
    summary: 'Summary',
    summaryLead:
      "I'm Owen (Panusbodee Pisutsuwimon). I lead work across project management, UI design, and process thinking—bridging stakeholders, logic, and visual decisions to deliver outcomes that feel intentional, not rushed.",
    summaryOrigin:
      'My journey started with an opportunity introduced through my university faculty, and that path shaped how I approach work today: flexible in role, strict in clarity.',
    principles: 'Principles',
    storyTitle: 'A calm way to tell a serious story.',
    processTitle: 'Process, systems, and the tools behind them.',
    processDescription:
      'These images are placed as a visual counterpart to the way I work: turning logic into flow, and staying close enough to the technical layer to keep decisions concrete.',
    timelineTitle: 'Timeline',
    skillsTitle: 'Skills & Tools',
    backHome: 'Back to home',
  },
  workDetail: {
    backHome: 'Back to home',
    caseStudy: 'Case Study',
    scrollCue: 'Scroll to trace the case',
    role: 'Role',
    client: 'Client',
    year: 'Year',
    challenge: 'Challenge',
    approach: 'Approach',
    outcome: 'Outcome',
    projectTags: 'Project Tags',
    openCredits: 'Open credits',
    credits: 'Credits',
    previousProject: 'Previous project',
    nextProject: 'Next project',
  },
  common: {
    viewCase: 'View case',
  },
}

export const portfolioUiTh: UIContent = {
  nav: {
    brand: 'Panusbodee',
    items: [
      { label: 'ผลงานเด่น', to: '/?section=works' },
      { label: 'เกี่ยวกับผม', to: '/about' },
      { label: 'ความสนใจ', to: '/?section=notes' },
      { label: 'ติดต่อ', to: '/?section=contact' },
    ],
    startConversation: 'เริ่มคุยกัน',
    mobileWorks: 'ผลงาน',
    languages: {
      english: 'English',
      thai: 'Thai',
    },
  },
  home: {
    badge: 'Portfolio 2026',
    ctaWorks: 'ดูผลงานเด่น',
    ctaAbout: 'เกี่ยวกับผม',
    ctaLinkedIn: 'เปิด LinkedIn',
    currentFocus: 'สิ่งที่กำลังโฟกัส',
    currentFocusTitle: 'อินเทอร์เฟซที่นิ่ง การลงมือทำที่ชัด และการคิดที่เป็นระบบ',
    aboutEyebrow: 'เกี่ยวกับผม',
    aboutTitle: 'เมื่อโครงสร้างและรสนิยมการออกแบบเดินไปด้วยกัน',
    aboutDescription:
      'พอร์ตนี้รวมงานที่อยู่ระหว่างกลยุทธ์ ระบบการออกแบบ และความสามารถในการดูแลโปรเจกต์ให้เดินไปจนจบ',
    positioning: 'บทบาท',
    availability: 'สถานะการร่วมงาน',
    perspective: 'มุมมอง',
    perspectiveText: 'งานออกแบบที่ดีควรนิ่ง ตั้งใจ และใช้งานได้จริง',
    moreCase: 'ดูเคสเพิ่มเติม',
    visualArchiveEyebrow: 'ภาพประกอบงาน',
    visualArchiveTitle: 'ภาพที่สะท้อนการทำงานระหว่างทาง',
    visualArchiveDescription:
      'เลเยอร์ภาพที่ช่วยเล่าเส้นทางการทำงานของผม ตั้งแต่งานภาคสนาม การคิดเชิงระบบ ไปจนถึงภาพที่สะท้อนตัวตน',
    notesEyebrow: 'ความสนใจ',
    notesTitle: 'สิ่งที่ผมเก็บไว้ใกล้ตัวและส่งผลต่อวิธีทำงาน',
    notesDescription:
      'นอกเหนือจากงานหลัก ผมยังสนใจสิ่งที่ต้องอาศัยความแม่นยำ วินัย และความละเอียดอ่อนในการตัดสินใจ',
    contactEyebrow: 'ติดต่อ',
    contactTitle: 'เปิดรับบทสนทนาที่มีเนื้อหาและมีทิศทาง',
    contactDescription:
      'ถ้างานของคุณต้องการทั้งการลงมือทำที่คิดมาแล้ว ความละเอียดด้านการออกแบบ และคนที่ช่วยทำให้เรื่องซับซ้อนชัดขึ้น ผมยินดีพูดคุยครับ',
    principles: 'หลักคิด',
  },
  aboutPage: {
    eyebrow: 'เกี่ยวกับผม',
    title: 'เรื่องราวเบื้องหลังงานที่ผมทำ',
    description:
      'ผมทำงานในพื้นที่ที่ project structure, calm visual design และ systems thinking มาบรรจบกัน เพื่อทำให้ความซับซ้อนกลายเป็นสิ่งที่คนขยับต่อได้จริง',
    summary: 'สรุปภาพรวม',
    summaryLead:
      'ผมคือ Owen (Panusbodee Pisutsuwimon) คนที่ทำงานเชื่อมระหว่าง project management, UI design และ process thinking เพื่อให้งานที่ออกมามีความตั้งใจ ไม่เร่ง และมีทิศทางชัด',
    summaryOrigin:
      'เส้นทางนี้เริ่มจากโอกาสที่อาจารย์มหาวิทยาลัยแนะนำให้ลอง และมันค่อย ๆ กลายเป็นวิธีทำงานที่เหมาะกับตัวผมในวันนี้',
    principles: 'หลักคิด',
    storyTitle: 'วิธีเล่าเรื่องที่นิ่ง แต่จริงจังกับรายละเอียด',
    processTitle: 'กระบวนการ ระบบ และเครื่องมือที่อยู่เบื้องหลัง',
    processDescription:
      'ภาพเหล่านี้ถูกวางไว้เพื่อเป็นคู่ขนานกับวิธีทำงานของผม คือเอา logic มาทำให้เป็น flow และอยู่ใกล้กับชั้นเทคนิคพอที่จะตัดสินใจได้อย่างแม่นยำ',
    timelineTitle: 'เส้นทางการทำงาน',
    skillsTitle: 'ทักษะและเครื่องมือ',
    backHome: 'กลับหน้าแรก',
  },
  workDetail: {
    backHome: 'กลับหน้าแรก',
    caseStudy: 'กรณีศึกษา',
    scrollCue: 'เลื่อนลงเพื่ออ่านที่มาของงานนี้',
    role: 'บทบาท',
    client: 'องค์กร',
    year: 'ปี',
    challenge: 'โจทย์',
    approach: 'แนวทางทำงาน',
    outcome: 'ผลลัพธ์',
    projectTags: 'คำสำคัญของโปรเจกต์',
    openCredits: 'เปิดเครดิตงาน',
    credits: 'เครดิต',
    previousProject: 'โปรเจกต์ก่อนหน้า',
    nextProject: 'โปรเจกต์ถัดไป',
  },
  common: {
    viewCase: 'ดูเคสนี้',
  },
}

export const getLocalizedText = (value: LocalizedText, language: Language) => value[language]

export const getPortfolioContent = (language: Language): PortfolioContent => ({
  profile,
  skills,
  tools,
  timeline,
  portfolioLinks,
  notes,
  works,
  homeVisuals,
  aboutVisuals,
  ui: language === 'th' ? portfolioUiTh : portfolioUi,
})

export const getWorkBySlug = (slug: string) => works.find((work) => work.slug === slug)
