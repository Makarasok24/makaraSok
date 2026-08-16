import React from 'react';
import { ArrowUpRight, ExternalLink, Figma, Play } from 'lucide-react';
import { Project } from '../../types';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpen }) => (
  <Card
    interactive
    data-reveal
    style={{ '--reveal-delay': `${index * 110}ms` } as React.CSSProperties}
    className="group flex flex-col overflow-hidden"
  >
    <div className="relative aspect-video overflow-hidden border-b border-rule bg-paper-deep">
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={`${project.title} interface`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
        />
      ) : (
        // No screenshot yet — a composed panel rather than a grey box.
        <div className="grid h-full place-items-center bg-linear-to-br from-cobalt-wash to-paper-deep px-8 text-center">
          <p className="display-wide text-2xl leading-tight font-semibold text-cobalt-deep/70">
            {project.title}
          </p>
        </div>
      )}
      <Badge variant="cobalt" className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm">
        {project.context}
      </Badge>
    </div>

    <div className="flex flex-1 flex-col p-6">
      <h3 className="display-wide text-2xl font-semibold text-ink">{project.title}</h3>
      <p className="mt-1.5 text-sm text-ink-faint">{project.subtitle}</p>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{project.description}</p>

      {project.technologies.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge variant="outline">{tech}</Badge>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-cobalt uppercase transition-colors hover:text-cobalt-deep"
        >
          Details
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        {project.liveUrl && (
          <ExternalCardLink href={project.liveUrl} label={`Visit ${project.title}`}>
            <ExternalLink className="h-3.5 w-3.5" />
            Visit site
          </ExternalCardLink>
        )}

        {project.videoUrl && (
          <ExternalCardLink href={project.videoUrl} label={`Watch the ${project.title} demo`}>
            <Play className="h-3.5 w-3.5" />
            Watch demo
          </ExternalCardLink>
        )}

        {project.figmaUrl && (
          <ExternalCardLink href={project.figmaUrl} label={`Open the ${project.title} design in Figma`}>
            <Figma className="h-3.5 w-3.5" />
            Design
          </ExternalCardLink>
        )}
      </div>
    </div>
  </Card>
);

const ExternalCardLink: React.FC<{
  href: string;
  label: string;
  children: React.ReactNode;
}> = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-ink-faint uppercase transition-colors hover:text-ink"
  >
    {children}
  </a>
);

export default ProjectCard;
