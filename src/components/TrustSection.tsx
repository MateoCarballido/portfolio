import { useScrollReveal } from '../hooks/useScrollReveal'

const TRUST_NOTES = [
  {
    label: 'Directo conmigo',
    description: 'Sin intermediarios ni vueltas de agencia.',
  },
  {
    label: 'Demo primero',
    description: 'Ves algo real antes de poner un peso.',
  },
  {
    label: 'Enfoque comercial',
    description: 'La web tiene que verse seria y generar consultas.',
  },
]

export function TrustSection() {
  const introRef = useScrollReveal<HTMLDivElement>()
  const notesRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-bg py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={introRef}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start"
        >
          <div>
            <p className="font-sans font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-4">
              Sobre mí
            </p>
            <h2 className="text-section font-display italic text-text max-w-2xl">
              Soy Mateo. Diseño sitios para que tu negocio se vea serio y
              convierta mejor.
            </h2>
            <p className="font-sans text-text-muted text-lg mt-6 max-w-xl leading-relaxed">
              Trabajo desde Buenos Aires con negocios locales que necesitan una
              presencia online clara, rápida y profesional. Mi foco no es
              entregar una web bonita solamente: es ayudarte a generar más
              consultas con una propuesta que se entienda rápido.
            </p>
          </div>

          <div className="border border-accent/20 bg-accent-light/60 p-8 lg:p-10">
            <p className="font-sans font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-4">
              La objeción obvia
            </p>
            <h3 className="font-display italic text-text text-3xl mb-4">
              ¿Y si la demo no se parece a lo que imaginabas?
            </h3>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Normal. La demo es la base, no el producto final. Sirve para que
              veas una dirección clara y decidas si vale la pena avanzar.
            </p>
            <p className="font-sans text-text-muted leading-relaxed">
              Si seguimos, ajustamos todo con tu identidad real: colores,
              textos, fotos, servicios y tono. El esqueleto ya existe; la
              personalidad la terminamos juntos.
            </p>
          </div>
        </div>

        <div
          ref={notesRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-10 border-t border-text/10"
        >
          {TRUST_NOTES.map((note) => (
            <div key={note.label}>
              <p className="font-sans font-semibold text-text text-sm uppercase tracking-[0.16em] mb-3">
                {note.label}
              </p>
              <p className="font-sans text-text-muted leading-relaxed">
                {note.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
