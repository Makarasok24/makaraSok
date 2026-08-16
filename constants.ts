import {
  Achievement,
  Capability,
  Education,
  Experience,
  ProcessStep,
  Project,
  Skill,
  Stat,
  TeachingRecord,
} from './types';

/** GitHub username. Contributor links are built from this. */
export const GITHUB_USER = {
  makara: "Makarasok24",
  sothy: "Soksothy",
  soksan: "inchang369",
  srorn: "srorn168",
  socheat: "mrvince369",
  sithol: "Thol-Y",
  ehak: "ehak-math"
} as const;

export const PERSONAL_INFO = {
  name: "Sok Makara",
  nameKhmer: "សុខ មករា",
  role: "Software Engineer",
  roleSecondary: "Frontend focused",
  tagline: "Responsive interfaces, real APIs, and three years of teaching other people to build them.",
  bio: "Software Engineering graduate from CADT, now a software developer at Dataticon. I ship responsive interfaces, run my own product for Cambodian students, and — since 2023 — teach other people to do the same.",
  email: "makarasok1624@gmail.com",
  phone: "+855 69 457 618",
  github: `github.com/${GITHUB_USER.makara}`,
  linkedin: "linkedin.com/in/sok-makara-812767397/",
  location: "Phnom Penh, Cambodia",
  availability: "Open to software engineering roles",
};

/**
 * Set to true once a CV exists at `public/cv.pdf`. Until then the download
 * button stays hidden rather than pointing a hiring manager at a 404.
 */
export const HAS_CV = false;
export const CV_PATH = "/cv.pdf";

/**
 * The hero portrait, cropped 4:5 from the original in `assets/originals/`.
 * If the file is ever missing the hero falls back to a typographic composition,
 * so replacing it is safe.
 */
export const PORTRAIT_PATH = "/sok.jpg";

export const STATS: Stat[] = [
  { value: "Graduated", label: "Software Engineering, CADT" },
  { value: "Live", label: "quizmedix.com, my own product" },
  { value: "3 roles", label: "Teaching, since 2023" },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "Vue.js", level: 100, category: "frontend" },
  { name: "Tailwind CSS", level: 100, category: "frontend" },
  { name: "React.js", level: 80, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Nuxt.js", level: 60, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "PHP", level: 80, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },
  { name: "FastAPI", level: 60, category: "backend" },
  { name: "PostgreSQL", level: 60, category: "backend" },
  { name: "Laravel", level: 60, category: "backend" },
  { name: "MongoDB", level: 60, category: "backend" },

  // Soft Skills
  { name: "Team Work", level: 100, category: "soft skills" },
  { name: "Adaptability", level: 95, category: "soft skills" },
  { name: "Patience", level: 95, category: "soft skills" },
  { name: "Teaching", level: 90, category: "soft skills" },

  // Languages
  { name: "Khmer (Native)", level: 100, category: "languages" },
  { name: "English (Elementary)", level: 40, category: "languages" },
];

export const CAPABILITIES: Capability[] = [
  {
    id: "c1",
    title: "Responsive interfaces",
    description:
      "Layouts that hold from a 360px phone to a wide desktop, built with Vue, React and Tailwind.",
  },
  {
    id: "c2",
    title: "API integration",
    description:
      "Wiring screens to REST endpoints, handling the states that aren't the happy path, agreeing contracts with the backend.",
  },
  {
    id: "c3",
    title: "Full-stack features",
    description:
      "Enough Node, Express and MySQL to write the endpoint myself when that's faster than waiting for one.",
  },
  {
    id: "c4",
    title: "Teaching and handover",
    description:
      "Explaining, documenting and onboarding. Three of my seven roles have been teaching, and it shows in code review.",
  },
];

export const TEACHING_RECORD: TeachingRecord[] = [
  {
    year: "2023",
    place: "Hun Sen Mongkol Borey High School",
    detail: "Basic ICT and coding, Banteay Mean Chey",
  },
  {
    year: "2024",
    place: "CADT Next-Gen Engagement",
    detail: "Volunteer teacher, digital talent programme",
  },
  {
    year: "2024–25",
    place: "Coding Club at CADT",
    detail: "IT trainer, weekly sessions and mentoring",
  },
];

export const PROCESS: ProcessStep[] = [
  {
    title: "Agree the contract",
    description: "Before any UI, the team settles what each endpoint returns. Postman first, screens second.",
  },
  {
    title: "Build the interface",
    description: "Reusable components and page structure, responsive from the first commit rather than retrofitted.",
  },
  {
    title: "Integrate",
    description: "Connect the components to live endpoints, then handle loading, empty and error states.",
  },
  {
    title: "Test across devices",
    description: "Phone, tablet, desktop. In Cambodia most people will open it on a phone, so that case comes first.",
  },
  {
    title: "Review together",
    description: "Git-based review with the team, and a walkthrough so nobody inherits code they can't read.",
  },
];

export const EDUCATION: Education[] = [
  {
    id: "e1",
    school: "Cambodia Academy of Digital Technology (CADT)",
    degree: "BSc Computer Science — Software Engineering",
    period: "2023 — 2026", // TODO(sok): confirm your graduation year
    description: "Graduated. Scholarship recipient.",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "0",
    company: "Dataticon",
    role: "Software Developer",
    period: "May 2026 – Present",
    kind: "engineering",
    description: [
      "Build and ship features on a SaaS e-commerce platform.",
      "Hired onto the team at the end of a four-month internship.",
    ],
  },
  {
    id: "0b",
    company: "Dataticon",
    role: "Software Developer Intern",
    period: "Jan 2026 – May 2026",
    kind: "engineering",
    description: [
      "Joined the product team working on the SaaS e-commerce platform.",
    ],
  },
  {
    id: "1",
    company: "Ang Soeng Language School (ALS)",
    role: "Frontend Intern",
    period: "May 2025 – July 2025",
    kind: "engineering",
    description: [
      "Built interfaces for an HR management system covering teacher payroll.",
      "Developed responsive administrative dashboards used by school staff.",
    ],
  },
  {
    id: "2",
    company: "CIMOC",
    role: "Technical Support & Examination Manager",
    period: "Nov 2024 – Present",
    kind: "operations",
    description: [
      "Run the technical side of the CIMOC exam, from setup to results.",
      "Keep examination systems working on the day, when there is no second attempt.",
    ],
  },
  {
    id: "3",
    company: "Coding Club at CADT",
    role: "IT Trainer",
    period: "Dec 2024 – Feb 2025",
    kind: "teaching",
    description: [
      "Ran training sessions for students across a range of IT topics.",
      "Mentored club members on coding practice and project structure.",
    ],
  },
  {
    id: "4",
    company: "CADT Next-Gen Engagement Program",
    role: "Volunteer Teacher",
    period: "Aug – Sep 2024",
    kind: "teaching",
    description: [
      "Taught and mentored students entering the digital talent pipeline.",
    ],
  },
  {
    id: "5",
    company: "Khdoing Hero — Banteay Mean Chey",
    role: "Volunteer Teacher",
    period: "Aug – Sep 2023",
    kind: "teaching",
    description: [
      "Taught basic ICT and coding at Hun Sen Mongkol Borey High School.",
      "Introduced students with no prior access to computers to programming fundamentals.",
    ],
  },
];

/**
 * The three newest entries carry only what has been verified — the live site,
 * the demo videos and their own copy. Their deep-dive fields stay empty until
 * Sok fills them in, and the detail view simply renders less rather than
 * inventing a case study.
 */
export const PROJECTS: Project[] = [
  {
    id: "p5",
    title: "QuizMedix",
    featured: true,
    context: "My own product — live",
    subtitle: "Exam prep for Cambodian medical students",
    description:
      "A commercial exam-preparation app: subject-based question banks, answer review, and study progress tracked by university, major, year and semester.",
    technologies: [],
    imageUrl: "/quizmedix.jpg",
    teamMembers: [
      { name: "Sok Makara", role: "Frontend Dev", github: GITHUB_USER.makara},
      { name: "Sok Sothy", role: "Full-Stack", github: GITHUB_USER.sothy },
      { name: "Nang Socheat", role: "Team Lead", github: GITHUB_USER.socheat },
      { name: "Srun Srorn", role: "Full-Stack", github: GITHUB_USER.srorn },
    ],
    liveUrl: "https://quizmedix.com",
  },
  {
    id: "p3",
    title: "SaaS E-Commerce Platform",
    featured: true,
    context: "Dataticon",
    subtitle: "Internship work on a commercial product",
    description:
      "A software-as-a-service e-commerce platform I work on at Dataticon.",
    technologies: [],
    imageUrl: "https://i.ytimg.com/vi/PtXV8cfe6tg/maxresdefault.jpg",
    teamMembers: [{ name: "Sok Makara", role: "Developer", github: GITHUB_USER.makara }],
    videoUrl: "https://youtu.be/PtXV8cfe6tg",
  },
  {
    id: "p4",
    title: "SmartServe",
    featured: true,
    context: "Capstone project, CADT",
    subtitle: "Built with a team",
    description:
      "My final-year capstone, built with a team. The demo walks through the cash payment flow.",
    technologies: [],
    imageUrl: "https://i.ytimg.com/vi/Qf2c4VFEGic/maxresdefault.jpg",
    teamMembers: [
      { name: "Sok Makara", role: "Team Lead", github: GITHUB_USER.makara},
      { name: "Sok Sothy", role: "Full-Stack", github: GITHUB_USER.sothy },
      { name: "Phork Soksan", role: "Full-Stack", github: GITHUB_USER.soksan },
      { name: "Srun Srorn", role: "Full-Stack", github: GITHUB_USER.srorn },
      { name: "Mat Ehak", role: "Full-Stack", github: GITHUB_USER.ehak },
      { name: "Pen Sithol", role: "Full-Stack", github: GITHUB_USER.sithol },
    ],
    videoUrl: "https://youtu.be/Qf2c4VFEGic",
  },
  {
    id: "p4d",
    title: "SmartServe — Interface design",
    featured: true,
    context: "UI/UX design",
    subtitle: "Customer, waiter, chef and cashier flows",
    description:
      "The interface design behind SmartServe: QR table ordering for customers, the waiter, chef and cashier screens, and the workflow that connects them.",
    technologies: ["Figma"],
    imageUrl:"https://res.cloudinary.com/dqjm9cnxc/image/upload/v1786885576/uxui_chh5fg.png",
    teamMembers: [
      { name: "Sok Makara", role: "Team Lead", github: GITHUB_USER.makara},
      // { name: "Sok Sothy", role: "Full-Stack", github: GITHUB_USER.sothy },
      // { name: "Nang Socheat", role: "Team Lead", github: GITHUB_USER.socheat },
      // { name: "Srun Srorn", role: "Full-Stack", github: GITHUB_USER.srorn },
    ],
    figmaUrl:
      "https://www.figma.com/design/QpZtnaT4LW74qj4EBvVBZX/Somrab-Order?node-id=4-2",
  },
  {
    id: "p1",
    featured: false,
    title: "Infinity E-Learning",
    subtitle: "AI-supported learning platform for students and educators",
    context: "University team project",
    description:
      "A full-stack platform combining structured course management, RESTful APIs, and AI-assisted learning features to make digital learning more adaptive and organised.",
    technologies: ["Vue.js", "Node.js", "REST API", "AI/ML", "MySQL"],
    tools: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "GitHub", "Figma"],
    whyBuilt:
      "Students need learning materials, quizzes and support in one place, and teachers need a smoother way to manage digital content. We built it to cut the scattered workflows and improve access to guided learning.",
    objective:
      "Create a responsive e-learning experience where students browse lessons, interact with content and get AI-assisted support, while teachers manage everything through a maintainable API-driven system.",
    role:
      "Frontend developer. Responsive interfaces, page structure, API integration, and the student learning flow.",
    collaboration:
      "Worked in a student team with shared tasks, Git-based collaboration and regular reviews to keep frontend screens aligned with backend API behaviour.",
    teamMembers: [
      { name: "Sok Makara", role: "Frontend Developer", github: GITHUB_USER.makara },
      { name: "Backend Member", role: "API & Database" },
      { name: "AI Member", role: "AI Feature Integration" },
    ],
    highlights: [
      "Designed responsive learning screens for course and lesson flows.",
      "Integrated API responses into reusable interface sections.",
      "Shaped the AI-supported guidance into the student experience.",
    ],
    imageUrl:
      "https://res.cloudinary.com/dqjm9cnxc/image/upload/v1765096932/Screenshot_From_2025-12-07_15-40-57_otrvnd.png",
    repoUrl: `https://${PERSONAL_INFO.github}`,
  },
  {
    id: "p2",
    featured: false,
    title: "Blog Platform",
    subtitle: "Content publishing with API-driven management",
    context: "University team project",
    description:
      "A dynamic blog platform using RESTful APIs for content management, category organisation and article retrieval across responsive pages.",
    technologies: ["React.js", "REST API", "Node.js", "MySQL", "Tailwind CSS"],
    tools: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Postman", "GitHub"],
    whyBuilt:
      "Small teams need a simple way to publish articles and organise posts without editing static pages by hand every time.",
    objective:
      "Build a clean reading experience with reusable UI, API-based article loading, and a content structure that works for both readers and administrators.",
    role:
      "Frontend developer. Page layouts, article cards, detail views, and connecting frontend state to backend endpoints.",
    collaboration:
      "Defined API contracts with classmates, tested endpoints in Postman, and reviewed UI behaviour across desktop and mobile.",
    teamMembers: [
      { name: "Sok Makara", role: "Frontend Developer", github: GITHUB_USER.makara },
      { name: "Backend Member", role: "API Developer" },
      { name: "QA Member", role: "Testing & Content Review" },
    ],
    highlights: [
      "Built reusable blog cards and article detail layouts.",
      "Connected content lists and post screens to REST endpoints.",
      "Kept the interface readable across every device size.",
    ],
    imageUrl:
      "https://res.cloudinary.com/dqjm9cnxc/image/upload/v1765097104/Screenshot_From_2025-12-07_15-44-43_hfmbh2.png",
    repoUrl: `https://${PERSONAL_INFO.github}`,
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "a1",
    title: "University scholarship",
    category: "scholarship",
    organization: "Cambodia Academy of Digital Technology",
    date: "2023",
    description: "Awarded a scholarship to study Computer Science, Software Engineering.",
  },
  {
    id: "a2",
    title: "High school diploma",
    category: "education",
    organization: "Hun Sen Mongkol Borey High School",
    date: "2022",
    description: "Graduated with a strong academic record — later returned to teach there.",
  },
  {
    id: "a3",
    title: "Volunteer recognition",
    category: "volunteer",
    organization: "CADT & Khdoing Hero",
    date: "2023 – 2024",
    description: "Recognised for teaching ICT and coding in rural schools and engagement programmes.",
  },
  {
    id: "a4",
    title: "AI integration milestone",
    category: "project",
    organization: "Infinity E-Learning",
    date: "2025",
    description: "Shipped the AI-assisted learning features into the platform's student flow.",
  },
];
