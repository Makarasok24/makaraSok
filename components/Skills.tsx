import React from 'react';
import { SKILLS } from '../constants';
import { SectionId, Skill, SkillCategory } from '../types';
import Section from './ui/Section';
import SectionHeader from './SectionHeader';
import Card from './ui/Card';
import Voice from './ui/Voice';

const groupLabels: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  'soft skills': 'Working with people',
  languages: 'Languages',
};

const byCategory = (category: SkillCategory) => SKILLS.filter((skill) => skill.category === category);

const Skills: React.FC = () => (
  <Section id={SectionId.SKILLS}>
    <SectionHeader
      eyebrow="Capabilities"
      title="A practical stack, honestly rated"
      description="Frontend-first, with enough backend to be useful on both sides of an API contract."
    />

    <Voice className="mt-6">Percentages are self-assessed. Ask me to prove any of them.</Voice>

    <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <Card data-reveal className="grid gap-10 p-7 sm:grid-cols-2 sm:p-8">
        <SkillGroup category="frontend" />
        <SkillGroup category="backend" />
      </Card>

      <Card
        data-reveal
        style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
        className="grid gap-10 p-7 sm:p-8"
      >
        <SkillGroup category="soft skills" />
        <SkillGroup category="languages" />
      </Card>
    </div>
  </Section>
);

const SkillGroup: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div>
    <h3 className="eyebrow">{groupLabels[category]}</h3>
    <ul className="mt-5 space-y-4">
      {byCategory(category).map((skill) => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </ul>
  </div>
);

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
  <li>
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-[0.9375rem] font-medium text-ink">{skill.name}</span>
      <span className="font-mono text-[0.6875rem] text-ink-faint">{skill.level}%</span>
    </div>
    <div
      className="mt-2 h-1.5 overflow-hidden rounded-pill bg-paper-deep"
      role="img"
      aria-label={`${skill.name}: ${skill.level} out of 100, self-assessed`}
    >
      <div
        className="skill-fill h-full rounded-pill bg-cobalt"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </li>
);

export default Skills;
