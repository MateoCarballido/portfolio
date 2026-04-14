import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { WA_URL } from '../data/contact'

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const bioCopy =
    'Soy Mateo, diseñador web de Buenos Aires. Construyo sitios claros, rápidos y orientados a traerte más consultas, no solo a verse lindos.'

  // Hero entrance runs on load, not on scroll
  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    const children = Array.from(el.children) as HTMLElement[]
    anime.set(children, { opacity: 0, translateY: 24 })
    anime({
      targets: children,
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 800,
      delay: anime.stagger(130, { start: 200 }),
      easing: 'easeOutQuad',
    })
  }, [])

  return (
    <section className="min-h-screen bg-bg flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-16 items-center">
          <div ref={contentRef}>
            <p className="font-sans font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-6">
              Buenos Aires · Sitios Web para Negocios Locales
            </p>

            <h1 className="text-hero font-display italic text-text mb-6">
              Ya construí la demo de tu web.
              <span className="block text-accent">Ahora te la muestro.</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-[520px]">
              Sitios web para restaurantes, estudios, clínicas y negocios
              locales en Buenos Aires. La demo es gratis. El pago, solo si te
              convence.
            </p>

            <div className="flex flex-col items-start gap-5">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent text-accent-fg font-sans font-semibold text-base px-8 py-4 hover:opacity-90 transition-opacity"
              >
                Ver mi demo gratis
                <span aria-hidden="true">→</span>
              </a>

              <p className="font-sans text-sm text-text-muted max-w-sm leading-relaxed">
                Mandame el nombre de tu negocio por WhatsApp y en 48 horas tenés
                una demo real. Sin reuniones previas.
              </p>
            </div>

            <div className="mt-10 max-w-xl border-l border-accent/30 pl-5 lg:hidden">
              <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed">
                {bioCopy}
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-start gap-8">
            <div className="border border-accent/20 bg-accent-light/45 p-10">
              <p className="font-sans font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-6">
                Lo que recibís
              </p>

              <div className="space-y-8">
                <div>
                  <p className="font-display italic text-text text-3xl mb-2">
                    Una demo antes de pagar
                  </p>
                  <p className="font-sans text-text-muted leading-relaxed">
                    Tomás la decisión con algo concreto enfrente, no con una
                    promesa.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-display italic text-accent text-5xl">
                    48h
                  </span>
                  <p className="font-sans text-text-muted leading-relaxed">
                    para ver una demo real de tu sitio.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-display italic text-accent text-5xl">
                    2
                  </span>
                  <p className="font-sans text-text-muted leading-relaxed">
                    semanas máximo para pasar de demo a sitio publicado.
                  </p>
                </div>

                <div className="pt-6 border-t border-text/10">
                  <p className="font-sans text-sm tracking-[0.18em] uppercase text-text-muted">
                    Primero ves. Después decidís.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-md border-l border-accent/30 pl-5">
              <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed">
                {bioCopy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
