import { useScrollReveal } from '../hooks/useScrollReveal'

const SECONDARY_BENEFITS = [
  {
    title: 'Velocidad real',
    description: 'De concepto a demo en 7 días. Sin burocracia, sin reuniones infinitas.',
  },
  {
    title: 'Diseño con intención',
    description: 'Cada sección tiene un por qué. Nada está ahí por "quedar lindo".',
  },
  {
    title: 'Enfocado en ventas',
    description: 'No hacemos "lindas". Hacemos que conviertan clientes.',
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

        {/* Featured benefit — full width, large type */}
        <div ref={featuredRef} className="mb-16 pb-16 border-b border-text/10">
          <h2
            className="font-display italic text-text max-w-3xl"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Ves antes de comprometerte.
          </h2>
          <p className="font-sans text-text-muted text-xl leading-relaxed mt-6 max-w-2xl">
            Cero riesgo para vos. Llegás a la reunión con una web real, no un presupuesto. Tomás decisiones con información, no con promesas.
          </p>
        </div>

        {/* 3 secondary benefits */}
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
