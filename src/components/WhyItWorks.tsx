import { useScrollReveal } from '../hooks/useScrollReveal'

const SECONDARY_BENEFITS = [
  {
    title: 'Tu demo en 48 horas',
    description:
      'No esperás meses ni reuniones infinitas. En 48 horas ya podés ver si la dirección te cierra.',
  },
  {
    title: 'Tu sitio online en 2 semanas',
    description:
      'De la demo al sitio publicado: ajustamos el contenido real y salís online sin meses de espera.',
  },
  {
    title: 'Cada sección tiene un trabajo',
    description:
      'Nada está para decorar. La página está pensada para que te escriban, te llamen o visiten tu local.',
  },
]

export function WhyItWorks() {
  const featuredRef = useScrollReveal<HTMLDivElement>()
  const listRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-bg-alt py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-sans font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-4">
            Por qué funciona
          </p>
        </div>

        <div ref={featuredRef} className="mb-16 pb-16 border-b border-text/10">
          <h2
            className="font-display italic text-text max-w-3xl"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Sabés exactamente lo que comprás.
          </h2>
          <p className="font-sans text-text-muted text-xl leading-relaxed mt-6 max-w-2xl">
            No pagás por una promesa. Tenés una demo enfrente, opinás sobre algo
            real y decidís con criterio. 
          </p>
        </div>

        <div ref={listRef} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SECONDARY_BENEFITS.map((benefit) => (
            <div key={benefit.title}>
              <div className="w-8 h-px bg-accent mb-6" />
              <h3 className="font-display italic text-text text-2xl mb-3">
                {benefit.title}
              </h3>
              <p className="font-sans text-text-muted leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
