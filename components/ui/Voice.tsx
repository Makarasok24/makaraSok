import React from 'react';
import { cn } from '../../lib/utils';

/**
 * The second voice — the signature element of this page.
 *
 * Sok teaches; this is the teacher standing next to you. Every section makes a
 * claim, and one of these follows it with the plain-language version. Newsreader
 * italic in cobalt, led by a brass mark. Used six times on the whole page.
 * Adding a seventh makes it wallpaper, so don't.
 */
const Voice: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <p className={cn('flex max-w-2xl items-baseline gap-2.5 sm:gap-3', className)}>
    <span aria-hidden="true" className="shrink-0 font-mono text-sm text-brass">
      &#8618;
    </span>
    <span className="font-voice text-[1.0625rem] italic leading-relaxed text-cobalt sm:text-lg">
      {children}
    </span>
  </p>
);

export default Voice;
