import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { SectionId } from '../types';

const footerLinks = [
  { label: 'Work', id: SectionId.PROJECTS },
  { label: 'About', id: SectionId.CAPABILITIES },
  { label: 'Skills', id: SectionId.SKILLS },
  { label: 'Experience', id: SectionId.EXPERIENCE },
  { label: 'Contact', id: SectionId.CONTACT },
];

const Footer: React.FC = () => (
  <footer className="border-t border-rule bg-paper">
    <div className="mx-auto max-w-[86rem] px-5 py-14 sm:px-8">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-[11px] bg-ink font-display text-sm font-bold text-white">
              SM
            </span>
            <span className="leading-tight">
              <span className="block font-khmer text-[0.9375rem] font-semibold text-ink">
                {PERSONAL_INFO.nameKhmer}
              </span>
              <span className="block text-[0.9375rem] text-ink-soft">{PERSONAL_INFO.name}</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
            {PERSONAL_INFO.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 md:grid-cols-1">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="font-mono text-xs tracking-[0.12em] text-ink-soft uppercase transition-colors hover:text-cobalt"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-2">
          <SocialLink href={`mailto:${PERSONAL_INFO.email}`} label="Email">
            <Mail className="h-4 w-4" />
          </SocialLink>
          <SocialLink href={`https://${PERSONAL_INFO.github}`} label="GitHub" external>
            <Github className="h-4 w-4" />
          </SocialLink>
          <SocialLink href={`https://${PERSONAL_INFO.linkedin}`} label="LinkedIn" external>
            <Linkedin className="h-4 w-4" />
          </SocialLink>
        </ul>
      </div>

      <div className="mt-12 flex flex-col gap-2 border-t border-rule pt-6 font-mono text-[0.6875rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {new Date().getFullYear()} Sok Makara</span>
        <span>Built in Phnom Penh with React, Vite and Tailwind</span>
      </div>
    </div>
  </footer>
);

const SocialLink: React.FC<{
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}> = ({ href, label, external, children }) => (
  <li>
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="grid h-10 w-10 place-items-center rounded-[11px] border border-rule bg-card text-ink-soft transition-colors hover:border-cobalt hover:text-cobalt"
    >
      {children}
    </a>
  </li>
);

export default Footer;
