import React from 'react';
import { EXPERIENCE } from '../constants';
import { Experience as ExperienceEntry, SectionId } from '../types';
import Section from './ui/Section';
import SectionHeader from './SectionHeader';
import Voice from './ui/Voice';
import { cn } from '../lib/utils';

/**
 * The timeline is typed rather than merely chronological: each role is tagged
 * with the kind of work it was, because the split between them is the point.
 */
const kindStyles: Record<ExperienceEntry['kind'], { label: string; chip: string; dot: string }> = {
  engineering: { label: 'Engineering', chip: 'bg-cobalt-wash text-cobalt-deep', dot: 'bg-cobalt' },
  teaching: { label: 'Teaching', chip: 'bg-brass/12 text-brass', dot: 'bg-brass' },
  operations: { label: 'Operations', chip: 'bg-paper-deep text-ink-soft', dot: 'bg-ink-faint' },
};

const Experience: React.FC = () => (
  <Section id={SectionId.EXPERIENCE}>
    <SectionHeader
      eyebrow="Experience"
      title="Seven roles, three of them teaching"
      description="Two internships, exam operations, and the classrooms in between."
    />

    <Voice className="mt-6">That split wasn&rsquo;t an accident, and it&rsquo;s the useful part.</Voice>

    <ol className="mt-14 border-l border-rule pl-7 sm:pl-9">
      {EXPERIENCE.map((entry, index) => {
        const kind = kindStyles[entry.kind];
        // Two roles at the same employer read as one progression, not two jobs:
        // the repeated company name is dropped and the pair sits closer together.
        const continuesAbove = index > 0 && EXPERIENCE[index - 1].company === entry.company;
        const groupedWithBelow = EXPERIENCE[index + 1]?.company === entry.company;
        return (
          <li
            key={entry.id}
            data-reveal
            style={{ '--reveal-delay': `${index * 70}ms` } as React.CSSProperties}
            className={cn('relative last:pb-0', groupedWithBelow ? 'pb-6' : 'pb-11')}
          >
            <span
              aria-hidden="true"
              className={cn(
                'absolute top-1.5 -left-[calc(1.75rem+4.5px)] h-2.5 w-2.5 rounded-full ring-4 ring-paper sm:-left-[calc(2.25rem+4.5px)]',
                kind.dot,
              )}
            />

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[0.6875rem] tracking-wide text-ink-faint">
                {entry.period}
              </span>
              {!continuesAbove && (
                <span
                  className={cn(
                    'rounded-pill px-2.5 py-1 font-mono text-[0.625rem] tracking-widest uppercase',
                    kind.chip,
                  )}
                >
                  {kind.label}
                </span>
              )}
            </div>

            <h3 className="mt-3 text-xl font-semibold text-ink">{entry.role}</h3>
            {!continuesAbove && (
              <p className="mt-1 text-[0.9375rem] text-ink-soft">{entry.company}</p>
            )}

            <ul className="mt-4 space-y-2">
              {entry.description.map((line) => (
                <li key={line} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-3.5 shrink-0 bg-rule"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ol>
  </Section>
);

export default Experience;
