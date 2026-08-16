import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../constants';
import { ButtonLink } from './ui/Button';
import { cn } from '../lib/utils';

const navLinks = [
  { label: 'Work', id: SectionId.PROJECTS },
  { label: 'About', id: SectionId.CAPABILITIES },
  { label: 'Skills', id: SectionId.SKILLS },
  { label: 'Experience', id: SectionId.EXPERIENCE },
  { label: 'Contact', id: SectionId.CONTACT },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(SectionId.HOME);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Underline the section the reader is actually in.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // A menu that stays open behind you when the page moves is a bug.
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        isScrolled || menuOpen
          ? 'border-b border-rule bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-18 max-w-[86rem] items-center justify-between gap-6 px-5 sm:px-8">
        <a href={`#${SectionId.HOME}`} className="flex items-center gap-3" aria-label="Back to top">
          <span className="grid h-10 w-10 place-items-center rounded-[11px] bg-ink font-display text-sm font-bold text-white">
            SM
          </span>
          <span className="leading-tight">
            <span className="block font-khmer text-[0.9375rem] font-semibold text-ink">
              {PERSONAL_INFO.nameKhmer}
            </span>
            <span className="eyebrow block text-[0.625rem]">{PERSONAL_INFO.role}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative px-3.5 py-2 font-mono text-xs tracking-[0.12em] uppercase transition-colors',
                    isActive ? 'text-cobalt' : 'text-ink-soft hover:text-ink',
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-cobalt transition-transform duration-300',
                      isActive ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* Wrapped rather than given `hidden`: the button's own `inline-flex`
              is emitted after `.hidden` in Tailwind's output and would win. */}
          <span className="hidden sm:block">
            <ButtonLink href={`mailto:${PERSONAL_INFO.email}`} variant="outline" size="sm">
              Email me
            </ButtonLink>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-[11px] border border-rule bg-card text-ink lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-rule bg-paper px-5 pb-6 sm:px-8 lg:hidden"
      >
        <ul className="flex flex-col py-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-rule/70 py-3.5 font-mono text-xs tracking-[0.12em] text-ink-soft uppercase last:border-0 hover:text-cobalt"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ButtonLink href={`mailto:${PERSONAL_INFO.email}`} size="md" className="mt-2 w-full">
          Email me
        </ButtonLink>
      </div>
    </header>
  );
};

export default Navbar;
