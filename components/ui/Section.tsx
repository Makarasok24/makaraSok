import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** `deep` tints the ground to separate a band from its neighbours. */
  tone?: 'paper' | 'deep' | 'ink';
  width?: 'default' | 'wide';
}

const toneClasses = {
  paper: 'bg-paper text-ink',
  deep: 'bg-paper-deep text-ink',
  ink: 'bg-ink text-white',
} as const;

/**
 * Every section owns its vertical rhythm here and nowhere else, so no child
 * can quietly fight it with its own padding.
 */
const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  tone = 'paper',
  width = 'default',
}) => (
  <section id={id} className={cn('py-20 md:py-28', toneClasses[tone], className)}>
    <div
      className={cn(
        'mx-auto px-5 sm:px-8',
        width === 'wide' ? 'max-w-[86rem]' : 'max-w-6xl',
      )}
    >
      {children}
    </div>
  </section>
);

export default Section;
