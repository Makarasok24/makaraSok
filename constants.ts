import { Experience, Project, Skill, Education, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Sok Makara",
  role: "Web Developer",
  tagline: "Building intuitive and responsive front-end experiences.",
  bio: "I am a fourth-year Software Engineering student passionate about building intuitive and responsive front-end experiences that bring web applications to life. I focus on creating clean, user-friendly interfaces, optimizing performance, and ensuring seamless interaction across devices. With experience in modern frameworks and collaborative development, I strive to deliver high-quality, accessible designs while continuously improving my skills and following industry best practices.",
  email: "makarasok1624@gmail.com",
  phone: "+855 69 457 618",
  github: "github.com/Makarasok24",
  linkedin: "linkedin.com/in/sok-makara-812767397/",
  location: "Russian Blvd (110), Phnom Penh"
};

export const SKILLS: Skill[] = [
  // Frontend
  { name: "Vue.js", level: 100, category: "frontend" },
  { name: "Tailwind CSS", level: 100, category: "frontend" },
  { name: "React.js", level: 80, category: "frontend" },
  { name: "Nuxt.js", level: 60, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "PHP", level: 80, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },
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

export const EDUCATION: Education[] = [
  {
    id: "e1",
    school: "Cambodia Academy of Digital Technology (CADT)",
    degree: "Bachelor of Computer Science - Software Engineering",
    period: "2023 - Present",
    description: "Fourth-year student specializing in Software Engineering."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "Ang Soeng Language School (ALS)",
    role: "Frontend Internship",
    period: "May 2025 – July 2025",
    description: [
      "Worked on an HR Management System focusing on teacher payroll.",
      "Developed responsive interfaces for administrative dashboards.",
    ]
  },
  {
    id: "2",
    company: "CIMOC",
    role: "Technical Support and Examination Manager",
    period: "Nov 2024 – Present",
    description: [
      "Manage and organize technical aspects of the CIMOC exam.",
      "Ensure smooth operation of examination systems."
    ]
  },
  {
    id: "3",
    company: "Coding Club at CADT",
    role: "IT Trainer",
    period: "Dec 2024 - Feb 2025",
    description: [
      "Conducted training sessions for students on various IT topics.",
      "Mentored club members in coding practices."
    ]
  },
  {
    id: "4",
    company: "CADT-Next-Gen-Engagement Program",
    role: "Volunteer Teacher",
    period: "Aug - Sep 2024",
    description: [
      "Volunteered to teach and engage with the next generation of digital talents."
    ]
  },
  {
    id: "5",
    company: "Khdoing Hero - Banteay Mean Chey",
    role: "Volunteer Teacher",
    period: "Aug - Sep 2023",
    description: [
      "taught basic ICT and coding to students at Hun Sen Mongkol Borey High School.",
      "Introduced students to fundamental computer concepts and programming."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Infinity E-Learning with AI Integration",
    description: "A school project incorporating Restful API and machine learning to create an enhanced e-learning platform experience.",
    technologies: ["AI/ML", "Restful API", "Web Development"],
    imageUrl: "https://res.cloudinary.com/dqjm9cnxc/image/upload/v1765096932/Screenshot_From_2025-12-07_15-40-57_otrvnd.png",
    demoUrl: "#",
    repoUrl: `https://${PERSONAL_INFO.github}`
  },
  {
    id: "p2",
    title: "Blog Website",
    description: "A dynamic blog platform built as a school project, utilizing Restful API for content management and data retrieval.",
    technologies: ["Restful API", "Frontend", "Backend"],
    imageUrl: "https://res.cloudinary.com/dqjm9cnxc/image/upload/v1765097104/Screenshot_From_2025-12-07_15-44-43_hfmbh2.png",
    demoUrl: "#",
    repoUrl: `https://${PERSONAL_INFO.github}`
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    title: 'University Scholarship Recipient',
    category: 'scholarship',
    organization: 'Cambodia Academy of Digital Technology (CADT)',
    date: '2023',
    description: 'Awarded a scholarship to pursue a Bachelor of Computer Science in Software Engineering.'
  },
  {
    id: 'a2',
    title: 'High School Diploma',
    category: 'education',
    organization: 'Hun Sen Mongkol Borey High School',
    date: '2022',
    description: 'Successfully graduated high school with a strong academic record, building a foundation for technical studies.'
  },
  {
    id: 'a3',
    title: 'Volunteer Excellence Recognition',
    category: 'volunteer',
    organization: 'CADT & Khdoing Hero',
    date: '2023 - 2024',
    description: 'Recognized for impactful contributions in teaching ICT and coding to students in rural areas and engagement programs.'
  },
  {
    id: 'a4',
    title: 'AI Integration Milestone',
    category: 'project',
    organization: 'School Project',
    date: '2025',
    description: 'Achieved successful integration of AI/ML models into the Infinity E-Learning platform, enhancing personalized learning.'
  }
];

// Helper to generate the system instruction for the AI
export const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PERSONAL_INFO.name}'s portfolio website. 
Your goal is to answer questions about Sok's skills, experience, and projects in a professional yet friendly manner.

Here is Sok's background data:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.role}
Bio: ${PERSONAL_INFO.bio}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.school} (${e.period})`).join('\n')}

Achievements:
${ACHIEVEMENTS.map(a => `- ${a.title} (${a.category}): ${a.description}`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.technologies.join(', ')})`).join('\n')}

Contact Info: ${PERSONAL_INFO.email}, ${PERSONAL_INFO.phone}, ${PERSONAL_INFO.location}

Rules:
1. Be concise.
2. If asked about something not in this data, politely say you don't know but suggest contacting Sok directly.
3. Keep the tone professional, enthusiastic, and tech-savvy.
4. You are representing Sok Makara, so speak positively about his work.
`;