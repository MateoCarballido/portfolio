import { useScrollReveal } from '../hooks/useScrollReveal'

const STEPS = [
  {
    number: '01',
    title: 'Encuentro tu negocio',
    description:
      'Busco empresas locales que necesitan presencia online pero todavía no dieron el paso.',
  },
  {
    number: '02',
    title: 'Hago tu web gratis',
    description:
      'Sin pedirte nada primero. Antes de hablar con vos, ya tengo una demo lista pensada para tu rubro.',
  },
  {
    number: '03',
    title: 'Mostramos, decidís',
    description:
      'Te muestro el resultado. Si te gusta lo que ves, avanzamos. Si no, sin cargo, sin drama.',
  },
]

export function HowItWorks() {
  const stepsRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="metodo" className="bg-bg-alt py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16 lg:mb-20">
          <p className="font-sans font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-4">
            El proceso
          </p>
          <h2 className="text-section font-display italic text-text max-w-xl">
            Simple. Sin vueltas.
          </h2>
        </div>

        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {STEPS.map((step) => (
            <div key={step.number}>
              <span
                className="block font-display text-text/5 leading-none mb-4 select-none"
                style={{ fontSize: 'clamp(5rem, 10vw, 8rem)' }}
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="font-display italic text-text text-2xl mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-text/10">
          <p className="font-display italic text-text text-xl md:text-2xl">
            Sin contratos raros. Sin riesgos. Solo resultados.
          </p>
        </div>

      </div>
    </section>
  )
}
