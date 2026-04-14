import { useScrollReveal } from '../hooks/useScrollReveal'
import { WA_URL, EMAIL } from '../data/contact'

export function CTAFinal() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="contacto" className="bg-accent-light py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="max-w-2xl">

          <p className="font-sans font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-6">
            Último paso
          </p>

          <h2 className="text-section font-display italic text-text mb-6">
            Tu negocio no necesita otra promesa. Necesita ver para creer.
          </h2>

          <p className="font-sans text-text-muted text-lg leading-relaxed mb-10">
            Mandame el nombre de tu negocio por WhatsApp y en 48 horas tenés una
            demo real de tu sitio. Sin reuniones previas. Sin compromiso. Sin
            formularios eternos.
          </p>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-fg font-sans font-semibold text-base px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Ver mi demo gratis
            <span aria-hidden="true">→</span>
          </a>

          <p className="font-sans text-text-muted text-sm mt-6">
            Si preferís email, escribime a{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-text hover:text-accent transition-colors underline underline-offset-2"
            >
              {EMAIL}
            </a>
          </p>

        </div>
      </div>
    </section>
  )
}
