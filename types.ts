export interface Project {
  id: string;
  title: string;
  /** Featured projects get a full card; the rest appear in a compact list. */
  featured: boolean;
  /** Where it came from: "My own product", "Capstone project", and so on. */
  context: string;
  subtitle: string;
  description: string;
  /** Omit and the card renders a typographic panel instead of a screenshot. */
  imageUrl?: string;
  technologies: string[];

  liveUrl?: string;
  videoUrl?: string;
  repoUrl?: string;
  /** Figma file. Signals design work as well as build work. */
  figmaUrl?: string;

  /**
   * The deep dive. All optional: a project with none of these renders a short
   * honest case rather than a set of empty headings.
   */
  tools?: string[];
  whyBuilt?: string;
  objective?: string;
  role?: string;
  collaboration?: string;
  teamMembers?: TeamMember[];
  highlights?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  /** GitHub username only, e.g. "Makarasok24" — the URL is built from it. */
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  kind: 'teaching' | 'engineering' | 'operations';
  description: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100, self-assessed
  category: SkillCategory;
}

export type SkillCategory = 'frontend' | 'backend' | 'soft skills' | 'languages';

export interface Achievement {
  id: string;
  title: string;
  category: 'scholarship' | 'education' | 'volunteer' | 'project';
  organization: string;
  date: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface TeachingRecord {
  year: string;
  place: string;
  detail: string;
}

export enum SectionId {
  HOME = 'home',
  PROJECTS = 'work',
  CAPABILITIES = 'about',
  TEACHING = 'teaching',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  BACKGROUND = 'background',
  PROCESS = 'process',
  CONTACT = 'contact',
}
