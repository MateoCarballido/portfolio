import { useScrollReveal } from '../hooks/useScrollReveal'

const STEPS = [
  {
    number: '01',
    title: 'Encontrás la demo esperándote',
    description:
      'Abrís WhatsApp y ya tenés el link a una demo pensada para tu rubro. Sin reuniones previas, sin brief y sin perseguir a nadie.',
  },
  {
    number: '02',
    title: 'Explorás con libertad',
    description:
      'Entrás al sitio, ves cómo quedaría, opinás. Si te convence, seguimos. Si no, sin cargo y sin drama.',
  },
  {
    number: '03',
    title: 'Ajustamos y publicamos',
    description:
      'Sumamos tu información real, afinamos lo que quieras y tu sitio queda online en menos de dos semanas.',
  },
]

export function HowItWorks() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const stepsRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="metodo" className="bg-bg-alt py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div ref={headerRef} className="mb-16 lg:mb-20">
          <p className="font-sans font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-4">
            Así funciona
          </p>
          <h2 className="text-section font-display italic text-text max-w-xl">
            Primero lo ves. Después decidís.
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
            Sin brief. Sin reuniones eternas. Sin pagar por adelantado.
          </p>
        </div>
      </div>
    </section>
  )
}
