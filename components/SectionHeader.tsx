import React from 'react';
import { cn } from '../lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className,
}) => {
  const isDark = tone === 'dark';

  return (
    <header
      data-reveal
      className={cn(align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl', className)}
    >
      <p className={cn('eyebrow', isDark && 'text-white/55')}>{eyebrow}</p>
      <h2
        className={cn(
          'display-wide mt-4 text-[2rem] leading-[1.08] font-semibold text-balance sm:text-[2.75rem]',
          isDark ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-[1.0625rem] leading-relaxed text-pretty',
            isDark ? 'text-white/65' : 'text-ink-soft',
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
