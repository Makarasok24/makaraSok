import React from 'react';
import { TEACHING_RECORD } from '../constants';
import { SectionId } from '../types';
import Section from './ui/Section';

/**
 * The signature moment. Where the reference layout put a fabricated client
 * testimonial, this puts the one true thing nobody else applying for the same
 * job can claim. It is the only dark band on the page — that is the whole
 * budget for contrast, spent here.
 */
const TeachingBand: React.FC = () => (
  <Section id={SectionId.TEACHING} tone="ink" className="relative overflow-hidden">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-cobalt/25 blur-3xl"
    />

    <div className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
      <div data-reveal>
        <p className="eyebrow text-white/55">The part that isn&rsquo;t on most CVs</p>
        <p
          className="display-wide mt-6 text-[2.125rem] leading-[1.1] font-semibold text-balance text-white sm:text-5xl"
        >
          I&rsquo;ve taught more people to code
          <span className="text-cobalt-wash"> than I&rsquo;ve had jobs.</span>
        </p>
        <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-pretty text-white/60">
          Three of my seven roles have been teaching — a rural high school, a university engagement
          programme, and a coding club I ran weekly. It is the reason I write code other people can
          read, and the reason a code review is a conversation rather than a correction.
        </p>
      </div>

      <ol
        data-reveal
        style={{ '--reveal-delay': '140ms' } as React.CSSProperties}
        className="divide-y divide-white/10 border-y border-white/10"
      >
        {TEACHING_RECORD.map((record) => (
          <li key={record.place} className="flex gap-5 py-5 sm:gap-7">
            <span className="w-16 shrink-0 pt-0.5 font-mono text-xs tracking-wide text-brass-lit">
              {record.year}
            </span>
            <span>
              <span className="block font-medium text-white">{record.place}</span>
              <span className="mt-1 block text-sm text-white/50">{record.detail}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  </Section>
);

export default TeachingBand;
