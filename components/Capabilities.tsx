import React from 'react';
import { Database, MonitorSmartphone, PlugZap, Users } from 'lucide-react';
import { CAPABILITIES } from '../constants';
import { SectionId } from '../types';
import Section from './ui/Section';
import SectionHeader from './SectionHeader';
import Card from './ui/Card';
import Voice from './ui/Voice';

const icons: Record<string, React.ReactNode> = {
  c1: <MonitorSmartphone className="h-5 w-5" />,
  c2: <PlugZap className="h-5 w-5" />,
  c3: <Database className="h-5 w-5" />,
  c4: <Users className="h-5 w-5" />,
};

const Capabilities: React.FC = () => (
  <Section id={SectionId.CAPABILITIES} width="wide">
    <SectionHeader
      eyebrow="What I build"
      title="Four things I can be handed on day one"
      description="Not a service menu — this is the work I have actually done, across two internships, a capstone, and a product of my own."
    />

    <Voice className="mt-6">
      Frontend is where I&rsquo;m strongest. The backend is there so I can hold up my end of a contract.
    </Voice>

    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {CAPABILITIES.map((capability, index) => (
        <Card
          key={capability.id}
          interactive
          data-reveal
          style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}
          className="p-6"
        >
          <span className="grid h-11 w-11 place-items-center rounded-[13px] bg-cobalt-wash text-cobalt">
            {icons[capability.id]}
          </span>
          <h3 className="mt-5 text-lg font-semibold text-ink">{capability.title}</h3>
          <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
            {capability.description}
          </p>
        </Card>
      ))}
    </div>
  </Section>
);

export default Capabilities;
