import React, { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, MapPin } from 'lucide-react';
import { ButtonLink } from './ui/Button';
import Voice from './ui/Voice';
import { CV_PATH, HAS_CV, PERSONAL_INFO, PORTRAIT_PATH, STATS } from '../constants';
import { SectionId } from '../types';
import { cn } from '../lib/utils';

const Hero: React.FC = () => {
  const hasPortrait = usePortrait(PORTRAIT_PATH);

  return (
    <section id={SectionId.HOME} className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div data-reveal>
            <p className="inline-flex items-center gap-2.5 rounded-pill border border-rule bg-card py-1.5 pr-4 pl-2.5 shadow-card">
              <span className="relative grid h-2 w-2 place-items-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-cobalt/50" />
                <span className="h-2 w-2 rounded-full bg-cobalt" />
              </span>
              <span className="font-mono text-[0.6875rem] tracking-[0.1em] text-ink-soft uppercase">
                {PERSONAL_INFO.availability}
              </span>
            </p>

            <p className="mt-8 font-khmer text-xl font-semibold text-brass">
              {PERSONAL_INFO.nameKhmer}
            </p>

            <h1 className="display-hero mt-1 text-[3.25rem] leading-[0.92] font-bold text-ink sm:text-7xl lg:text-[5.25rem]">
              {PERSONAL_INFO.name}
            </h1>

            <p className="display-wide mt-5 text-[1.75rem] leading-[1.15] font-medium text-ink-soft sm:text-4xl">
              Software Engineer,{' '}
              <span className="block text-cobalt sm:inline">frontend focused.</span>
            </p>

            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-pretty text-ink-soft">
              {PERSONAL_INFO.bio}
            </p>

            <Voice className="mt-6">
              Which means I can explain my work, not just ship it.
            </Voice>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`#${SectionId.PROJECTS}`} size="lg" className="group">
                See my work
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </ButtonLink>
              {HAS_CV && (
                <ButtonLink href={CV_PATH} variant="outline" size="lg" download>
                  Download CV
                </ButtonLink>
              )}
              <ButtonLink href={`mailto:${PERSONAL_INFO.email}`} variant="outline" size="lg">
                Email me
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-ink-faint">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {PERSONAL_INFO.location}
              </span>
              <a
                href={`https://${PERSONAL_INFO.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-cobalt"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href={`https://${PERSONAL_INFO.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-cobalt"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            </div>
          </div>

          <Portrait hasPortrait={hasPortrait} />
        </div>

        <StatRow />
      </div>
    </section>
  );
};

const Portrait: React.FC<{ hasPortrait: boolean }> = ({ hasPortrait }) => (
  <div
    data-reveal
    style={{ '--reveal-delay': '140ms' } as React.CSSProperties}
    className="relative mx-auto w-full max-w-104 lg:max-w-none"
  >
    <div
      className={cn(
        'overflow-hidden rounded-4xl border border-rule bg-linear-to-b from-cobalt-wash to-paper-deep',
        // Without a photo the tall crop is mostly empty, so it squares up.
        hasPortrait ? 'aspect-4/5' : 'aspect-square',
      )}
    >
      {hasPortrait ? (
        <img
          src={PORTRAIT_PATH}
          alt={`${PERSONAL_INFO.name}, software engineer`}
          className="h-full w-full object-cover object-top"
          width={520}
          height={650}
        />
      ) : (
        <div className="grid h-full place-items-center px-8 text-center">
          <div>
            <p className="font-khmer text-5xl leading-tight font-bold text-brass sm:text-6xl">
              {PERSONAL_INFO.nameKhmer}
            </p>
            <p className="mx-auto mt-6 h-px w-14 bg-brass/35" />
            <p className="eyebrow mt-6">{PERSONAL_INFO.location}</p>
          </div>
        </div>
      )}
    </div>

    {/* Below lg these sit under the panel; only from lg do they float over it,
        where there is room to do so without covering anything. */}
    <div className="mt-4 grid grid-cols-2 gap-3 lg:mt-0 lg:block">
      <FloatCard
        className="lg:absolute lg:bottom-28 lg:-left-10"
        label="Taught at"
        value="3 schools"
        note="Since 2023"
      />
      <FloatCard
        className="lg:absolute lg:-right-6 lg:bottom-16"
        label="Now at"
        value="Dataticon"
        note="Software Developer"
      />
    </div>
  </div>
);

interface FloatCardProps {
  label: string;
  value: string;
  note: string;
  className?: string;
}

const FloatCard: React.FC<FloatCardProps> = ({ label, value, note, className }) => (
  <div
    className={cn(
      'rounded-card border border-rule bg-card/95 p-4 shadow-card backdrop-blur-sm lg:w-46 lg:shadow-float',
      className,
    )}
  >
    <p className="eyebrow text-[0.625rem]">{label}</p>
    <p className="mt-1.5 text-[0.9375rem] leading-snug font-semibold text-ink">{value}</p>
    <p className="mt-1 font-mono text-[0.6875rem] text-ink-faint">{note}</p>
  </div>
);

const StatRow: React.FC = () => (
  <dl
    data-reveal
    style={{ '--reveal-delay': '220ms' } as React.CSSProperties}
    className="mt-16 grid gap-px overflow-hidden rounded-card border border-rule bg-rule sm:grid-cols-3 md:mt-20"
  >
    {STATS.map((stat) => (
      <div key={stat.label} className="bg-card px-6 py-6">
        <dt className="eyebrow">{stat.label}</dt>
        <dd className="display-wide mt-2 text-2xl font-semibold text-ink">{stat.value}</dd>
      </div>
    ))}
  </dl>
);

/**
 * Resolves the portrait before rendering it, so a missing file falls back to
 * the typographic hero instead of flashing a broken image.
 */
function usePortrait(src: string) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setLoaded(true);
    image.src = src;
    return () => {
      image.onload = null;
    };
  }, [src]);

  return loaded;
}

export default Hero;
