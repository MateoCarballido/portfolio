import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Cómo trabajo', href: '#metodo' },
  { label: 'Contacto', href: '#contacto' },
]

const WA_URL = 'https://wa.me/5491166290707'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href) as HTMLElement | null
    if (!el) return
    if (window.lenis) {
      window.lenis.scrollTo(el, { offset: -80 })
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          className="font-sans font-semibold text-text text-sm tracking-tight hover:text-accent transition-colors cursor-pointer bg-transparent border-none p-0"
          onClick={() => window.lenis?.scrollTo(0)}
        >
          Mateo Carballido
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-sans text-sm text-text-muted hover:text-text transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-accent-fg font-sans font-semibold text-sm px-5 py-2.5 hover:opacity-90 transition-opacity"
        >
          Contactar
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span className={`block h-px w-6 bg-text transition-all duration-200 origin-center ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-px bg-text transition-all duration-200 ${menuOpen ? 'w-0 opacity-0' : 'w-5'}`} />
          <span className={`block h-px w-6 bg-text transition-all duration-200 origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>

      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-bg border-t border-bg-alt overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left font-sans text-base text-text-muted hover:text-text transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              {link.label}
            </button>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent text-accent-fg font-sans font-semibold text-sm px-5 py-3 mt-2 hover:opacity-90 transition-opacity"
          >
            Contactar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
