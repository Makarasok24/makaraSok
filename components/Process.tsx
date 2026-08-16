import React from 'react';
import { PROCESS } from '../constants';
import { SectionId } from '../types';
import Section from './ui/Section';
import SectionHeader from './SectionHeader';

/**
 * These are numbered because they genuinely happen in order — the contract has
 * to exist before the UI, and review comes last. If they were five unordered
 * virtues the numbers would be decoration, and they would be gone.
 */
const Process: React.FC = () => (
  <Section id={SectionId.PROCESS} width="wide">
    <SectionHeader
      eyebrow="How I work"
      title="The order matters more than the tools"
      description="Learned on a team project where we built the interface before agreeing what the API would return. Once."
    />

    <ol className="mt-14 grid gap-px overflow-hidden rounded-card border border-rule bg-rule md:grid-cols-3 lg:grid-cols-5">
      {PROCESS.map((step, index) => (
        <li
          key={step.title}
          data-reveal
          style={{ '--reveal-delay': `${index * 80}ms` } as React.CSSProperties}
          className="flex flex-col bg-card p-6 lg:p-7"
        >
          <span className="font-mono text-xs tracking-[0.14em] text-brass">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-4 text-[1.0625rem] leading-snug font-semibold text-ink">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.description}</p>
        </li>
      ))}
    </ol>
  </Section>
);

export default Process;
