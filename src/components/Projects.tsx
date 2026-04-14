import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const cardsRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="proyectos" className="bg-bg py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div ref={headerRef} className="mb-16 lg:mb-20">
          <p className="font-sans font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-4">
            Casos reales
          </p>
          <h2 className="text-section font-display italic text-text max-w-2xl">
            La prueba de que cada rubro pide una web distinta.
          </h2>
          <p className="font-sans text-text-muted text-lg mt-4 max-w-xl leading-relaxed">
            Estos proyectos muestran cómo aterrizo una propuesta según el
            negocio, no desde una plantilla genérica.
          </p>
        </div>
        <div ref={cardsRef} className="flex flex-col gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
