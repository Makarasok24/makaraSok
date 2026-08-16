import React, { useEffect, useRef } from 'react';
import { ExternalLink, Figma, Github, Play, X } from 'lucide-react';
import { Project, TeamMember } from '../../types';
import Badge from '../ui/Badge';
import Button, { ButtonLink } from '../ui/Button';
import { cn } from '../../lib/utils';

interface ProjectDetailDialogProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailDialog: React.FC<ProjectDetailDialogProps> = ({ project, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;

      // Keep focus inside the dialog while it is open.
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasTeam = (project.teamMembers?.length ?? 0) > 0;
  // With no deep dive written yet, a second column would just be empty space.
  const hasDeepDive =
    Boolean(project.role) ||
    Boolean(project.tools?.length) ||
    Boolean(project.collaboration) ||
    hasTeam ||
    Boolean(project.highlights?.length);

  return (
    <div
      className="fixed inset-0 z-60 flex items-end justify-center bg-ink/55 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      onMouseDown={onClose}
    >
      <div
        ref={panelRef}
        onMouseDown={(event) => event.stopPropagation()}
        className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-4xl bg-paper shadow-float sm:rounded-4xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-rule bg-paper/95 px-5 py-4 backdrop-blur sm:px-8">
          <div>
            <p className="eyebrow">{project.context}</p>
            <h3
              id="project-detail-title"
              className="display-wide mt-1.5 text-xl font-semibold text-ink"
            >
              {project.title}
            </h3>
          </div>
          <Button
            ref={closeRef}
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div
          className={cn(
            'grid gap-8 p-5 sm:p-8',
            hasDeepDive ? 'lg:grid-cols-[1.05fr_0.95fr]' : 'mx-auto max-w-2xl',
          )}
        >
          <div className="space-y-7">
            {project.imageUrl && (
              <div className="overflow-hidden rounded-card border border-rule bg-paper-deep">
                <img src={project.imageUrl} alt={`${project.title} interface`} className="w-full" />
              </div>
            )}

            <DetailSection title="Summary">
              <p>{project.description}</p>
            </DetailSection>

            {project.whyBuilt && (
              <DetailSection title="Why we built it">
                <p>{project.whyBuilt}</p>
              </DetailSection>
            )}

            {project.objective && (
              <DetailSection title="Objective">
                <p>{project.objective}</p>
              </DetailSection>
            )}
          </div>

          <div className="space-y-7">
            {project.role && (
              <DetailSection title="My role">
                <p>{project.role}</p>
              </DetailSection>
            )}

            {project.tools && project.tools.length > 0 && (
              <DetailSection title="Tools">
                <ul className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <li key={tool}>
                      <Badge variant="outline">{tool}</Badge>
                    </li>
                  ))}
                </ul>
              </DetailSection>
            )}

            {(project.collaboration || hasTeam) && (
              <DetailSection title={project.teamMembers?.length === 1 ? 'Built by' : 'Team'}>
                {project.collaboration && <p>{project.collaboration}</p>}
                {hasTeam && (
                  <ul
                    className={cn(
                      'divide-y divide-rule overflow-hidden rounded-card border border-rule bg-card',
                      project.collaboration && 'mt-4',
                    )}
                  >
                    {project.teamMembers!.map((member) => (
                      <li key={`${project.id}-${member.name}`}>
                        <TeamRow member={member} />
                      </li>
                    ))}
                  </ul>
                )}
              </DetailSection>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <DetailSection title="Highlights">
                <ul className="space-y-2.5">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </DetailSection>
            )}

            <div className="flex flex-wrap gap-3 border-t border-rule pt-6">
              {project.liveUrl && (
                <ButtonLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Visit site
                </ButtonLink>
              )}
              {project.videoUrl && (
                <ButtonLink
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={project.liveUrl ? 'outline' : 'primary'}
                >
                  <Play className="h-4 w-4" />
                  Watch demo
                </ButtonLink>
              )}
              {project.figmaUrl && (
                <ButtonLink
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={project.liveUrl || project.videoUrl ? 'outline' : 'primary'}
                >
                  <Figma className="h-4 w-4" />
                  Open in Figma
                </ButtonLink>
              )}
              {project.repoUrl && (
                <ButtonLink
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  <Github className="h-4 w-4" />
                  Source code
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * A contributor. Becomes a link to their GitHub when a username is set, and
 * stays plain text when it isn't — nobody gets a broken profile link.
 */
const TeamRow: React.FC<{ member: TeamMember }> = ({ member }) => {
  const body = (
    <>
      <span className="flex min-w-0 items-center gap-2 font-medium text-ink">
        <span className="truncate">{member.name}</span>
        {member.github && (
          <Github className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-colors group-hover/row:text-cobalt" />
        )}
      </span>
      <span className="shrink-0 font-mono text-[0.6875rem] text-ink-faint">{member.role}</span>
    </>
  );

  if (!member.github) {
    return <div className="flex items-baseline justify-between gap-4 px-4 py-3">{body}</div>;
  }

  return (
    <a
      href={`https://github.com/${member.github}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${member.name} on GitHub`}
      className="group/row flex items-baseline justify-between gap-4 px-4 py-3 transition-colors hover:bg-paper"
    >
      {body}
    </a>
  );
};

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section>
    <h4 className="eyebrow">{title}</h4>
    <div className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{children}</div>
  </section>
);

export default ProjectDetailDialog;
