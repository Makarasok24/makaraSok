import React from 'react';
import { cn } from '../../lib/utils';

type BadgeVariant = 'default' | 'cobalt' | 'outline';

const variants: Record<BadgeVariant, string> = {
  default: 'border-transparent bg-paper-deep text-ink-soft',
  cobalt: 'border-transparent bg-cobalt-wash text-cobalt-deep',
  outline: 'border-rule text-ink-soft',
};

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const Badge: React.FC<BadgeProps> = ({ className, variant = 'default', ...props }) => (
  <span
    className={cn(
      'inline-flex items-center rounded-pill border px-2.5 py-1 font-mono text-[0.6875rem] tracking-wide',
      variants[variant],
      className,
    )}
    {...props}
  />
);

export default Badge;
