import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { SectionId } from '../types';
import Section from './ui/Section';
import { ButtonLink } from './ui/Button';
import Voice from './ui/Voice';

const Contact: React.FC = () => (
  <Section id={SectionId.CONTACT} width="wide">
    <div
      data-reveal
      className="grid gap-12 rounded-4xl border border-rule bg-cobalt-wash p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-16"
    >
      <div>
        <p className="eyebrow text-cobalt-deep">Get in touch</p>
        <h2 className="display-wide mt-5 text-[2rem] leading-[1.08] font-semibold text-balance text-ink sm:text-[2.75rem]">
          Looking for a frontend developer in Phnom Penh?
        </h2>
        <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-pretty text-ink-soft">
          I&rsquo;ve graduated from CADT, I build at Dataticon, and I run my own product on the
          side. Tell me what you&rsquo;re building and I&rsquo;ll tell you honestly whether I can
          help.
        </p>

        <Voice className="mt-7">Khmer or English, either is fine.</Voice>

        <ButtonLink href={`mailto:${PERSONAL_INFO.email}`} size="lg" className="group mt-9">
          Email me
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </ButtonLink>
      </div>

      <ul className="divide-y divide-cobalt/12 self-center border-y border-cobalt/12">
        <ContactRow
          icon={<Mail className="h-4 w-4" />}
          label="Email"
          value={PERSONAL_INFO.email}
          href={`mailto:${PERSONAL_INFO.email}`}
        />
        <ContactRow
          icon={<Phone className="h-4 w-4" />}
          label="Phone"
          value={PERSONAL_INFO.phone}
          href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
        />
        <ContactRow
          icon={<MapPin className="h-4 w-4" />}
          label="Location"
          value={PERSONAL_INFO.location}
        />
        <ContactRow
          icon={<Github className="h-4 w-4" />}
          label="GitHub"
          value={PERSONAL_INFO.github}
          href={`https://${PERSONAL_INFO.github}`}
          external
        />
        <ContactRow
          icon={<Linkedin className="h-4 w-4" />}
          label="LinkedIn"
          value="sok-makara"
          href={`https://${PERSONAL_INFO.linkedin}`}
          external
        />
      </ul>
    </div>
  </Section>
);

interface ContactRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

const ContactRow: React.FC<ContactRowProps> = ({ icon, label, value, href, external }) => {
  const body = (
    <>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[11px] bg-card text-cobalt">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="eyebrow block text-[0.625rem]">{label}</span>
        <span className="mt-1 block truncate text-[0.9375rem] text-ink">{value}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="flex items-center gap-4 py-4 transition-opacity hover:opacity-70"
        >
          {body}
        </a>
      ) : (
        <div className="flex items-center gap-4 py-4">{body}</div>
      )}
    </li>
  );
};

export default Contact;
