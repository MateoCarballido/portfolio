import { useEffect, useRef } from 'react'
import anime from 'animejs'

const WA_URL = 'https://wa.me/5491166290707'

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

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

          {/* Content */}
          <div ref={contentRef}>
            <p className="font-sans font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-6">
              Buenos Aires · Diseño Web para Negocios
            </p>

            <h1 className="text-hero font-display italic text-text mb-6">
              Tu web, lista antes de que hables conmigo.
            </h1>

            <p className="font-sans text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-[520px]">
              Diseño y desarrollo sitios para negocios reales.
              Ves el resultado antes de pagar un peso.
            </p>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-accent-fg font-sans font-semibold text-base px-8 py-4 hover:opacity-90 transition-opacity"
            >
              Quiero ver cómo quedaría mi web
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Typographic monogram — desktop only */}
          <div
            className="hidden lg:flex flex-col items-end justify-center select-none pointer-events-none"
            aria-hidden="true"
          >
            <span
              className="font-display italic leading-none text-accent/10"
              style={{ fontSize: 'clamp(8rem, 16vw, 14rem)' }}
            >
              MC
            </span>
            <div className="flex items-center gap-4 mt-3">
              <div className="h-px w-20 bg-accent/30" />
              <span className="font-sans text-xs tracking-[0.3em] text-text-muted uppercase">
                2026
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
