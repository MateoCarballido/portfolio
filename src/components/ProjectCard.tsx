import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

      {/* Visual — order swaps on even/odd rows on desktop */}
      <div
        className={`relative h-64 lg:h-auto min-h-[320px] bg-gradient-to-br ${project.gradient} flex items-end p-8 ${
          !isEven ? 'lg:order-2' : ''
        }`}
      >
        <span
          className="font-display italic text-white/15 leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          aria-hidden="true"
        >
          {project.name}
        </span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver proyecto: ${project.name}`}
            className="absolute top-6 right-6 font-sans text-xs text-white/60 hover:text-white transition-colors tracking-widest uppercase"
          >
            Ver proyecto ↗
          </a>
        )}
      </div>

      {/* Content */}
      <div className={`bg-bg p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
        <p className={`font-sans font-semibold text-xs tracking-[0.2em] uppercase mb-4 ${project.accentColor}`}>
          {project.label}
        </p>

        <h3 className="font-display italic text-text text-3xl lg:text-4xl mb-8">
          {project.name}
        </h3>

        <div className="space-y-5">
          <div>
            <p className="font-sans font-semibold text-text-muted text-xs tracking-widest uppercase mb-1.5">
              Problema
            </p>
            <p className="font-sans text-text-muted leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="font-sans font-semibold text-text-muted text-xs tracking-widest uppercase mb-1.5">
              Solución
            </p>
            <p className="font-sans text-text-muted leading-relaxed">
              {project.solution}
            </p>
          </div>
          <div>
            <p className="font-sans font-semibold text-accent text-xs tracking-widest uppercase mb-1.5">
              Resultado
            </p>
            <p className="font-sans text-text font-medium leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>
      </div>

    </article>
  )
}
