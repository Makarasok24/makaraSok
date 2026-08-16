import { useEffect } from 'react';

/**
 * Reveals `[data-reveal]` elements as they scroll into view.
 *
 * The hiding is applied by JS (via the `reveal-ready` class on <html>) rather
 * than baked into the stylesheet, so the page stays readable if JS never runs.
 * If the visitor prefers reduced motion, nothing is ever hidden.
 */
export function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

    const root = document.documentElement;
    root.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    const targets = document.querySelectorAll('[data-reveal]');
    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      root.classList.remove('reveal-ready');
    };
  }, []);
}

/** Stagger helper: turns an index into the CSS custom property the reveal reads. */
export function revealDelay(index: number, step = 80): React.CSSProperties {
  return { '--reveal-delay': `${index * step}ms` } as React.CSSProperties;
}
