# Portfolio Mateo Carballido — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page conversion-focused portfolio for Mateo Carballido using Vite + React 19 + TypeScript + Tailwind CSS 4 + Lenis + Anime.js 3.

**Architecture:** Single HTML page with scroll-based navigation. No client-side routing — all sections are in-page with anchor links. Lenis handles smooth scrolling; Anime.js handles all entrance animations via a shared `useScrollReveal` hook triggered by IntersectionObserver.

**Tech Stack:** Vite 8, React 19, TypeScript, Tailwind CSS 4 (`@tailwindcss/vite`), Lenis, Anime.js 3, Google Fonts (DM Serif Display + Plus Jakarta Sans)

---

## File Map

| File | Purpose |
|------|---------|
| `index.html` | Entry HTML — Google Fonts, meta tags |
| `vite.config.ts` | Vite config with Tailwind CSS 4 plugin |
| `src/index.css` | Design tokens via `@theme`, global base styles |
| `src/main.tsx` | React root + Lenis initialization + window type |
| `src/App.tsx` | Page shell — assembles all section components |
| `src/data/projects.ts` | Typed project data (3 case studies) |
| `src/hooks/useScrollReveal.ts` | IntersectionObserver + Anime.js stagger entrance |
| `src/components/Navbar.tsx` | Sticky nav — logo, links, mobile hamburger |
| `src/components/Hero.tsx` | Above-the-fold — headline, sub, CTA, monogram |
| `src/components/HowItWorks.tsx` | 3-step process section |
| `src/components/Projects.tsx` | Projects section wrapper |
| `src/components/ProjectCard.tsx` | Individual case study — alternating layout |
| `src/components/WhyItWorks.tsx` | 4 benefits — featured large + 3 secondary |
| `src/components/CTAFinal.tsx` | Conversion section — WhatsApp CTA |
| `src/components/Footer.tsx` | Footer — copyright, links, contact |

---

## Task 1: Scaffold Vite project and install dependencies

**Files:**
- Create: `package.json` (via scaffolding)
- Create: `vite.config.ts`
- Create: `tsconfig.json`

- [ ] **Step 1: Scaffold Vite React TypeScript project**

```bash
cd /Users/mateocarballido/Desktop/portfolioTeo
npm create vite@latest . -- --template react-ts
```

When prompted about non-empty directory, choose "Ignore files and continue".

Expected: `package.json`, `vite.config.ts`, `tsconfig.json`, `src/`, `index.html` created.

- [ ] **Step 2: Install base dependencies**

```bash
npm install
npm install animejs@3 lenis
npm install --save-dev @types/animejs
```

- [ ] **Step 3: Install Tailwind CSS 4 with Vite plugin**

```bash
npm install tailwindcss@4 @tailwindcss/vite
```

- [ ] **Step 4: Replace vite.config.ts**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})
```

- [ ] **Step 5: Delete Vite boilerplate**

```bash
rm -f src/App.css public/vite.svg src/assets/react.svg
```

- [ ] **Step 6: Verify dev server starts**

```bash
npm run dev
```

Expected: Server on `http://localhost:5173`, no terminal errors. Stop with Ctrl+C.

- [ ] **Step 7: Commit**

```bash
git init
git add package.json package-lock.json vite.config.ts tsconfig.json tsconfig.node.json
git commit -m "feat: scaffold Vite + React + TS + Tailwind 4 + Lenis + Anime.js"
```

---

## Task 2: Configure index.html — meta tags and Google Fonts

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace index.html**

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Mateo Carballido — Diseño y desarrollo web para PYMEs en Buenos Aires. Tu web, lista antes de que hables conmigo." />
    <meta name="theme-color" content="#f5f0e8" />

    <meta property="og:title" content="Mateo Carballido — Diseño Web" />
    <meta property="og:description" content="Hago tu web antes de que me pagues. Solo pagás si te gusta." />
    <meta property="og:type" content="website" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

    <title>Mateo Carballido — Diseño Web</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: configure index.html with meta tags and Google Fonts"
```

---

## Task 3: Base CSS — design tokens and global styles

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Replace src/index.css**

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-bg:           oklch(97% 0.01 85);
  --color-bg-alt:       oklch(93% 0.015 80);
  --color-text:         oklch(18% 0.01 260);
  --color-text-muted:   oklch(52% 0.01 260);
  --color-accent:       oklch(62% 0.13 48);
  --color-accent-light: oklch(90% 0.06 65);
  --color-accent-fg:    oklch(97% 0.01 85);

  /* Fonts */
  --font-display: "DM Serif Display", serif;
  --font-sans:    "Plus Jakarta Sans", sans-serif;
}

@layer base {
  html {
    font-family: var(--font-sans);
    background-color: var(--color-bg);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    overflow-x: hidden;
  }

  /* Fluid hero headline */
  .text-hero {
    font-size: clamp(2.8rem, 7vw, 6.5rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
  }

  /* Section heading */
  .text-section {
    font-size: clamp(2rem, 4vw, 3.5rem);
    line-height: 1.1;
    letter-spacing: -0.015em;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
}
```

- [ ] **Step 2: Verify no CSS errors**

```bash
npm run dev
```

Open `http://localhost:5173`. Browser console should show no errors. Stop server.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add design tokens and base CSS via Tailwind v4 @theme"
```

---

## Task 4: main.tsx — React root and Lenis initialization

**Files:**
- Modify: `src/main.tsx`

- [ ] **Step 1: Replace src/main.tsx**

```tsx
import Lenis from 'lenis'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Smooth scroll — autoRaf:true means Lenis drives its own RAF loop
const lenis = new Lenis({ autoRaf: true })

// Expose on window so Navbar can call lenis.scrollTo() for anchor links
declare global {
  interface Window { lenis: Lenis }
}
window.lenis = lenis

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 2: Commit**

```bash
git add src/main.tsx
git commit -m "feat: initialize Lenis smooth scroll in main.tsx"
```

---

## Task 5: Data layer — projects.ts

**Files:**
- Create: `src/data/projects.ts`

- [ ] **Step 1: Create src/data/projects.ts**

```ts
export interface Project {
  id: string
  label: string        // "Tipo de cliente · Ubicación"
  name: string
  problem: string
  solution: string
  result: string
  link?: string
  gradient: string     // Tailwind gradient classes for visual placeholder
  accentColor: string  // Tailwind text color class for the label
}

export const projects: Project[] = [
  {
    id: 'trademark',
    label: 'Agencia creativa · CABA',
    name: 'Trademark Studio',
    problem: 'Presencia online desactualizada que no transmitía el nivel creativo del estudio.',
    solution: 'Landing page editorial con portfolio de proyectos, enfoque en identidad visual y conversión.',
    result: 'Web lista en 10 días. Punto de contacto profesional listo para nuevos clientes.',
    link: 'https://mateocarballido.github.io',
    gradient: 'from-[oklch(62%_0.13_48)] to-[oklch(45%_0.10_35)]',
    accentColor: 'text-accent',
  },
  {
    id: 'panaderia',
    label: 'Negocio local · Palermo',
    name: 'La Miga',
    problem: 'Panadería artesanal sin presencia online. Clientes nuevos llegaban solo por recomendación.',
    solution: 'Sitio minimalista con menú, ubicación y WhatsApp directo. Carga en menos de 2 segundos.',
    result: 'Canal de contacto nuevo activo desde el primer día.',
    gradient: 'from-[oklch(85%_0.06_85)] to-[oklch(70%_0.08_75)]',
    accentColor: 'text-text-muted',
  },
  {
    id: 'contador',
    label: 'Profesional independiente · CABA',
    name: 'Estudio Bernal',
    problem: 'Contador con 15 años de trayectoria sin web. Perdía clientes frente a competidores con mejor presencia.',
    solution: 'Sitio de confianza: servicios claros, bio profesional, formulario de contacto y Google Maps.',
    result: 'Primeras consultas orgánicas en la segunda semana.',
    gradient: 'from-[oklch(25%_0.01_260)] to-[oklch(40%_0.02_260)]',
    accentColor: 'text-accent',
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/data/projects.ts
git commit -m "feat: add typed project case study data"
```

---

## Task 6: useScrollReveal hook

**Files:**
- Create: `src/hooks/useScrollReveal.ts`

- [ ] **Step 1: Create src/hooks/useScrollReveal.ts**

```ts
import { useEffect, useRef } from 'react'
import anime from 'animejs'

interface ScrollRevealOptions {
  threshold?: number   // IntersectionObserver threshold (default: 0.15)
  translateY?: number  // Starting Y offset in px (default: 30)
  duration?: number    // Animation duration in ms (default: 700)
  stagger?: number     // Stagger delay between children in ms (default: 80)
}

/**
 * Attaches an IntersectionObserver to a container element.
 * When the container enters the viewport, triggers a staggered
 * Anime.js entrance on its direct children (opacity + translateY).
 *
 * Usage:
 *   const ref = useScrollReveal<HTMLDivElement>()
 *   return <div ref={ref}><Child /><Child /></div>
 *
 * The animation runs once and the observer disconnects.
 * Respects prefers-reduced-motion — no animation if set.
 */
export function useScrollReveal<T extends HTMLElement>(
  options?: ScrollRevealOptions
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    const {
      threshold = 0.15,
      translateY = 30,
      duration = 700,
      stagger = 80,
    } = options ?? {}

    const children = Array.from(el.children) as HTMLElement[]
    anime.set(children, { opacity: 0, translateY })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: children,
              opacity: [0, 1],
              translateY: [translateY, 0],
              duration,
              delay: anime.stagger(stagger),
              easing: 'easeOutQuad',
            })
            observer.disconnect()
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ref
}
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/useScrollReveal.ts
git commit -m "feat: add useScrollReveal hook with IntersectionObserver + Anime.js"
```

---

## Task 7: Navbar component

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Create src/components/Navbar.tsx**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: add sticky Navbar with mobile hamburger"
```

---

## Task 8: Hero component

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Create src/components/Hero.tsx**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add Hero with animated entrance and MC monogram"
```

---

## Task 9: HowItWorks component

**Files:**
- Create: `src/components/HowItWorks.tsx`

- [ ] **Step 1: Create src/components/HowItWorks.tsx**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/HowItWorks.tsx
git commit -m "feat: add HowItWorks 3-step section"
```

---

## Task 10: ProjectCard and Projects components

**Files:**
- Create: `src/components/ProjectCard.tsx`
- Create: `src/components/Projects.tsx`

- [ ] **Step 1: Create src/components/ProjectCard.tsx**

```tsx
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

      {/* Visual — order swaps on even/odd rows on desktop */}
      <div
        className={`relative h-64 lg:h-auto min-h-[320px] bg-gradient-to-br ${project.gradient} flex items-end p-8 ${
          !isEven ? 'lg:order-2' : ''
        }`}
      >
        <span
          className="font-display italic text-white/15 leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          aria-hidden="true"
        >
          {project.name}
        </span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-6 font-sans text-xs text-white/60 hover:text-white transition-colors tracking-widest uppercase"
          >
            Ver proyecto ↗
          </a>
        )}
      </div>

      {/* Content */}
      <div className={`bg-bg p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
        <p className={`font-sans font-semibold text-xs tracking-[0.2em] uppercase mb-4 ${project.accentColor}`}>
          {project.label}
        </p>

        <h3 className="font-display italic text-text text-3xl lg:text-4xl mb-8">
          {project.name}
        </h3>

        <div className="space-y-5">
          <div>
            <p className="font-sans font-semibold text-text-muted text-xs tracking-widest uppercase mb-1.5">
              Problema
            </p>
            <p className="font-sans text-text-muted leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="font-sans font-semibold text-text-muted text-xs tracking-widest uppercase mb-1.5">
              Solución
            </p>
            <p className="font-sans text-text-muted leading-relaxed">
              {project.solution}
            </p>
          </div>
          <div>
            <p className="font-sans font-semibold text-accent text-xs tracking-widest uppercase mb-1.5">
              Resultado
            </p>
            <p className="font-sans text-text font-medium leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>
      </div>

    </article>
  )
}
```

- [ ] **Step 2: Create src/components/Projects.tsx**

```tsx
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const headerRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="proyectos" className="bg-bg py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div ref={headerRef} className="mb-16 lg:mb-20">
          <p className="font-sans font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-4">
            Proyectos
          </p>
          <h2 className="text-section font-display italic text-text max-w-2xl">
            Lo que hago, en contexto real.
          </h2>
          <p className="font-sans text-text-muted text-lg mt-4 max-w-xl leading-relaxed">
            No es una galería. Es evidencia de lo que puede significar una web bien hecha para un negocio.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ProjectCard.tsx src/components/Projects.tsx
git commit -m "feat: add Projects section with editorial alternating case study layout"
```

---

## Task 11: WhyItWorks component

**Files:**
- Create: `src/components/WhyItWorks.tsx`

- [ ] **Step 1: Create src/components/WhyItWorks.tsx**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/WhyItWorks.tsx
git commit -m "feat: add WhyItWorks section with featured + 3 secondary benefits"
```

---

## Task 12: CTAFinal component

**Files:**
- Create: `src/components/CTAFinal.tsx`

- [ ] **Step 1: Create src/components/CTAFinal.tsx**

```tsx
import { useScrollReveal } from '../hooks/useScrollReveal'

const WA_URL = 'https://wa.me/5491166290707'

export function CTAFinal() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="contacto" className="bg-accent-light py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="max-w-2xl">

          <p className="font-sans font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-6">
            ¿Listo?
          </p>

          <h2 className="text-section font-display italic text-text mb-6">
            ¿Cómo se vería la web de tu negocio?
          </h2>

          <p className="font-sans text-text-muted text-lg leading-relaxed mb-10">
            Mandame un mensaje y en 48 horas tenés una demo real de tu sitio.
            Sin compromiso. Sin formularios eternos.
          </p>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-fg font-sans font-semibold text-base px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Hablar por WhatsApp
            <span aria-hidden="true">→</span>
          </a>

          <p className="font-sans text-text-muted text-sm mt-6">
            O escribime a{' '}
            <a
              href="mailto:teocarballido@gmail.com"
              className="text-text hover:text-accent transition-colors underline underline-offset-2"
            >
              teocarballido@gmail.com
            </a>
          </p>

        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/CTAFinal.tsx
git commit -m "feat: add CTAFinal conversion section"
```

---

## Task 13: Footer component

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create src/components/Footer.tsx**

```tsx
const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-text py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-sm">

          <p className="text-bg/50">
            Mateo Carballido © {YEAR}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/mateo-carballido-639347314/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg/50 hover:text-bg/90 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://mateocarballido.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg/50 hover:text-bg/90 transition-colors"
            >
              Portfolio
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/5491166290707"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg/50 hover:text-bg/90 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:teocarballido@gmail.com"
              className="text-bg/50 hover:text-bg/90 transition-colors"
            >
              Email
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add Footer"
```

---

## Task 14: App.tsx — assemble all sections

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace src/App.tsx**

```tsx
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Projects } from './components/Projects'
import { WhyItWorks } from './components/WhyItWorks'
import { CTAFinal } from './components/CTAFinal'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Projects />
        <WhyItWorks />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Run dev server and verify full page**

```bash
npm run dev
```

Open `http://localhost:5173`. Check:
- All 7 sections render without errors
- Smooth scrolling works
- Navbar links scroll to correct sections
- Scroll reveal animations fire on each section
- Mobile hamburger works at <768px

Browser console should show zero errors.

- [ ] **Step 3: Production build — verify zero TypeScript errors**

```bash
npm run build
```

Expected: `dist/` created, no TypeScript errors. Stop with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "feat: assemble complete single-page portfolio"
```

---

## Task 15: Responsive polish

**Files:**
- Modify: Any component with layout issues found during testing

- [ ] **Step 1: Test at key breakpoints**

```bash
npm run dev
```

Open DevTools → Responsive mode. Test:
- **375px** — iPhone SE: no overflow, text readable, CTAs tappable (min 44px)
- **390px** — iPhone 14: same
- **768px** — Tablet: grid transitions correct
- **1280px** — Desktop: all layouts as designed

Look for: text overflow, broken gradients, nav overlapping content, CTA buttons cut off.

- [ ] **Step 2: Fix any overflow issues found**

If hero headline overflows on mobile, add to `src/index.css` inside `@layer base`:

```css
h1, h2, h3 {
  overflow-wrap: break-word;
  word-break: break-word;
}
```

- [ ] **Step 3: Verify Lenis anchor scroll on mobile**

Tap each Navbar link on mobile. If `window.lenis.scrollTo` does not animate, the Navbar already has a `scrollIntoView` fallback — this should work automatically.

- [ ] **Step 4: Production preview**

```bash
npm run build && npm run preview
```

Open `http://localhost:4173`. Final pass: hero, steps, projects, benefits, CTA, footer.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio — responsive polish and verified production build"
```
