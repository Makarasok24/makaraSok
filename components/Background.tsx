import React from 'react';
import { Award, GraduationCap, HeartHandshake, Rocket } from 'lucide-react';
import { ACHIEVEMENTS, EDUCATION } from '../constants';
import { Achievement, SectionId } from '../types';
import Section from './ui/Section';
import SectionHeader from './SectionHeader';
import Card from './ui/Card';

const categoryIcons: Record<Achievement['category'], React.ReactNode> = {
  scholarship: <Award className="h-4 w-4" />,
  education: <GraduationCap className="h-4 w-4" />,
  volunteer: <HeartHandshake className="h-4 w-4" />,
  project: <Rocket className="h-4 w-4" />,
};

const Background: React.FC = () => (
  <Section id={SectionId.BACKGROUND} tone="deep">
    <SectionHeader
      eyebrow="Background"
      title="Where I studied, and what came of it"
    />

    <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      {EDUCATION.map((entry) => (
        <Card key={entry.id} data-reveal className="flex flex-col justify-between p-7 sm:p-8">
          <div>
            <span className="grid h-11 w-11 place-items-center rounded-[13px] bg-cobalt-wash text-cobalt">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="display-wide mt-6 text-2xl leading-tight font-semibold text-ink">
              {entry.degree}
            </h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{entry.school}</p>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-rule pt-5">
            <span className="font-mono text-[0.6875rem] tracking-wide text-ink-faint">
              {entry.period}
            </span>
            {entry.description && (
              <span className="text-right text-sm text-ink-soft">{entry.description}</span>
            )}
          </div>
        </Card>
      ))}

      <ul
        data-reveal
        style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
        className="divide-y divide-rule overflow-hidden rounded-card border border-rule bg-card shadow-card"
      >
        {ACHIEVEMENTS.map((achievement) => (
          <li key={achievement.id} className="flex gap-4 p-5 sm:gap-5 sm:p-6">
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-[11px] bg-paper-deep text-ink-soft">
              {categoryIcons[achievement.category]}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-semibold text-ink">{achievement.title}</h3>
                <span className="font-mono text-[0.6875rem] text-brass">{achievement.date}</span>
              </div>
              <p className="mt-1 font-mono text-[0.6875rem] text-ink-faint">
                {achievement.organization}
              </p>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                {achievement.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default Background;
