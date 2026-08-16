import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project, SectionId } from '../types';
import { PROJECTS } from '../constants';
import Section from './ui/Section';
import SectionHeader from './SectionHeader';
import Voice from './ui/Voice';
import Badge from './ui/Badge';
import ProjectCard from './projects/ProjectCard';
import ProjectDetailDialog from './projects/ProjectDetailDialog';
import { cn } from '../lib/utils';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const featured = PROJECTS.filter((project) => project.featured);
  const earlier = PROJECTS.filter((project) => !project.featured);

  return (
    <Section id={SectionId.PROJECTS} width="wide">
      <SectionHeader
        eyebrow="Selected work"
        title="A live product, commercial work, and a capstone"
        description="The capstone appears twice on purpose: I designed the interface, then built it with a team."
      />

      <Voice className="mt-6">
        The university projects are still below — that&rsquo;s where I learned how.
      </Voice>

      {/* Never leave a single card alone on the last row: three columns only
          when the count divides by three, two when it divides by two. */}
      <div
        className={cn(
          'mt-14 grid gap-7 md:grid-cols-2',
          featured.length % 3 === 0 || featured.length % 2 !== 0
            ? 'lg:grid-cols-3'
            : 'lg:grid-cols-2',
        )}
      >
        {featured.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onOpen={setActiveProject} />
        ))}
      </div>

      {earlier.length > 0 && (
        <div data-reveal className="mt-16">
          <h3 className="eyebrow">Earlier university projects</h3>
          <ul className="mt-5 divide-y divide-rule overflow-hidden rounded-card border border-rule bg-card">
            {earlier.map((project) => (
              <li key={project.id}>
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="group flex w-full flex-wrap items-center gap-x-5 gap-y-2 px-5 py-5 text-left transition-colors hover:bg-paper sm:px-6"
                >
                  <span className="text-[1.0625rem] font-semibold text-ink">{project.title}</span>
                  <span className="text-sm text-ink-soft">{project.subtitle}</span>
                  <span className="ml-auto flex items-center gap-3">
                    {/* Wrapped, not given `hidden`: Badge's own `inline-flex`
                        is emitted later than `.hidden` and would win. */}
                    <span className="hidden sm:block">
                      <Badge variant="outline">{project.technologies[0]}</Badge>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-faint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cobalt" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ProjectDetailDialog project={activeProject} onClose={() => setActiveProject(null)} />
    </Section>
  );
};

export default Projects;
